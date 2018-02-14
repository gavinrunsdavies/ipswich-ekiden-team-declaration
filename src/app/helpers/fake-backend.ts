import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';
 
@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
 
    constructor() { }
 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // array in local storage for registered users
        let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
        
        const teams = [
          { id: 11, name: 'Mr. Nice', category: 'MensOpen', clubName: 'Ipswixh JAFFA RC', complete: true },
          { id: 12, name: 'Narco', category: 'Mixed', clubName: 'Harwich Road Runners', complete: true  },
          { id: 13, name: 'Bombasto' },
          { id: 14, name: 'Celeritas' },
          { id: 15, name: 'Magneta' },
          { id: 16, name: 'RubberMan' },
          { id: 17, name: 'Dynama' },
          { id: 18, name: 'Dr IQ' },
          { id: 19, name: 'Magma' },
          { id: 20, name: 'Tornado' }
        ];
        
        const clubs = [];              
        
        //teams = next.get('teams.json').map((response: Response) => response.json());
        
        const team11 = 
          { id: 11, name: 'Mr. Nice', category: 'MensOpen', clubName: 'Ipswixh JAFFA RC', complete: true,
            members: [
            { id: 1, name: 'Gavin Davies1', ageCategoryCode: 'Open', sex: 'Male' },
            { id: 2, name: 'Gavin Davies2', ageCategoryCode: 'V40', sex: 'Male' },
            { id: 3, name: 'Gavin Davies3', ageCategoryCode: 'V50', sex: 'Female' },
            { id: 4, name: 'Gavin Davies4', ageCategoryCode: 'V60', sex: 'Female' },
            { id: 5, name: 'Gavin Davies5', ageCategoryCode: 'V70', sex: 'Male' },
            { id: 6, name: 'Gavin Davies6', ageCategoryCode: 'Open', sex: 'Male' }
            ]
          };
        
        for (var i=0; i < 6; i++) {
          team11.members[i].name = 'Test' + Math.floor((Math.random() * 100) + 1);
        }
        
        const myteams = [team11];
 
        // wrap in delayed observable to simulate server api call
        return Observable.of(null).mergeMap(() => {
          
            // Get list of clubs
            if (request.url.endsWith('/api/clubs') && request.method === 'GET') {              
              return Observable.of(new HttpResponse({ status: 200, body: clubs }));
            }
            
            // Get list of teams (including runners)
            if (request.url.endsWith('/api/teams') && request.method === 'GET') {              
              return Observable.of(new HttpResponse({ status: 200, body: teams }));
            }
            
            // Get teams for user (captain). Requires server side validation
            if (request.url.endsWith('/api/myteams/') && request.method === 'GET') {       
              // Needs to validate against user
              return Observable.of(new HttpResponse({ status: 200, body: myteams }));
            }
            
            // Get a specific team
            if (request.url.match(/\/api\/teams\/\d+$/) && request.method === 'GET') {    
              return Observable.of(new HttpResponse({ status: 200, body: team11 }));
            }
            
            // Create new team
            if (request.url.endsWith('/api/teams') && request.method === 'POST') {
                // get new user object from post body
                let newTeam = request.body;
 
                // save new user
                newTeam.id = teams.length + 1;
                teams.push(newTeam);
                localStorage.setItem('teams', JSON.stringify(teams));
 
                // respond 200 OK
                return Observable.of(new HttpResponse({ status: 200 }));
            }
 
            // Update elements of a team. Requires server side validation. Return full team.
            if (request.url.match(/\/api\/teams\/\d+$/) && request.method === 'PATCH') {    
              return Observable.of(new HttpResponse({ status: 200, body: team11 }));
            }
            
            // Delete a team. Requires server side validation
            if (request.url.match(/\/api\/teams\/\d+$/) && request.method === 'DELETE') {    
              return Observable.of(new HttpResponse({ status: 200, body: team11 }));
            }
                        
            // authenticate
            if (request.url.endsWith('/api/login') && request.method === 'POST') {
                // find if any user matches login credentials
                let filteredUsers = users.filter(user => {
                    return user.username === request.body.username && user.password === request.body.password;
                });
 
                if (filteredUsers.length) {
                  
                    // if login details are valid return 200 OK with user details and fake jwt token
                    let user = filteredUsers[0];
                    let body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
 
                    return Observable.of(new HttpResponse({ status: 200, body: body }));
                } else {
                    // else return 400 bad request
                    return Observable.throw('Username or password is incorrect');
                }
            }
                     
            // create user
            if (request.url.endsWith('/api/users') && request.method === 'POST') {
                // get new user object from post body
                let newUser = request.body;
 
                // validation
                let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                if (duplicateUser) {
                    return Observable.throw('Username "' + newUser.username + '" is already taken');
                }
 
                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
 
                // respond 200 OK
                return Observable.of(new HttpResponse({ status: 200 }));
            }
             
            // pass through any requests not handled above
            return next.handle(request);
             
        })
 
        // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .materialize()
        .delay(500)
        .dematerialize();
    }
}
 
export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};