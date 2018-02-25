import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://www.ipswichekiden.co.uk'; // TODO inject?
  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  private currentUserSubject: Subject<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new Subject<User>();
    }
  
  login(username: string, password: string) {
    let url: string = `${this.BASE_URL}/wp-json/jwt-auth/v1/token`;
    return this.http.post<any>(url, { username: username, password: password }, {headers: this.headers})
        .map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {               
                let currentUser: User;
                currentUser = new User();
                currentUser.token = user.token;
                currentUser.displayName = user.user_display_name;
                currentUser.email = user.user_email;
                

                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                this.currentUserSubject.next(currentUser);
            }
            
            return user;
        });
  }
    
  logout() {
      // remove user from local storage to log user out and clear observable
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next();
  }
  
  getCurrentUser(): Observable<User> {
        return this.currentUserSubject.asObservable();
    }
}