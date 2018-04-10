import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  private currentUserSubject: Subject<User>;

  constructor(private router: Router,
    private http: HttpClient) {
    this.currentUserSubject = new Subject<User>();
  }

  login(username: string, password: string) {
    const url = `${environment.baseUrl}/wp-json/jwt-auth/v1/token`;
    return this.http.post<any>(url, { username: username, password: password }, { headers: this.headers })
      .map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          let currentUser: User;
          currentUser = new User();
          currentUser.token = user.token;
          currentUser.displayName = user.user_display_name;
          currentUser.email = user.user_email;
          currentUser.isAdmin = user.isAdmin;

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

    this.router.navigateByUrl('/');

    // TODO logout from wordpress?
  }

  getCurrentUser(): Observable<User> {
    return this.currentUserSubject.asObservable();
  }

  ensureAuthenticated() {
    const localStorageCurrentUser = localStorage.getItem('currentUser');

    if (localStorageCurrentUser) {
      const user = JSON.parse(localStorageCurrentUser);
      const url = `${environment.baseUrl}/wp-json/jwt-auth/v1/token/Validate`;
      const headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      });
      return this.http.post<any>(url, { headers: headers })
        .map(validateResponse => {
          // tslint:disable-next-line:triple-equals
          if (validateResponse.data.status == '200') {
            this.currentUserSubject.next(user);
            return user;
          }
        });
    }
  }
}
