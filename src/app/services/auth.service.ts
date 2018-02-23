import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://www.ipswichekiden.co.uk'; // TODO inject?
  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient) {}
  
  login(username: string, password: string) {
    let url: string = `${this.BASE_URL}/wp-json/jwt-auth/v1/token`;
    return this.http.post<any>(url, { username: username, password: password }, {headers: this.headers})
        .map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            
            return user;
        });
  }
    
  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }
}