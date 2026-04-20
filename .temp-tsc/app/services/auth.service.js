import { __decorate } from "tslib";
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Subject, of } from 'rxjs';
import { environment } from '../../environments/environment';
let AuthService = class AuthService {
    router;
    http;
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    currentUserSubject;
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.currentUserSubject = new Subject();
    }
    login(username, password) {
        const url = `${environment.baseUrl}/wp-json/jwt-auth/v1/token`;
        return this.http.post(url, { username: username, password: password }, { headers: this.headers }).pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                let currentUser;
                currentUser = new User();
                currentUser.token = user.token;
                currentUser.displayName = user.user_display_name;
                currentUser.email = user.user_email;
                currentUser.isAdmin = user.isAdmin;
                sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
                this.currentUserSubject.next(currentUser);
            }
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out and clear observable
        sessionStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigateByUrl('/');
        // TODO logout from wordpress?
    }
    getCurrentUser() {
        return this.currentUserSubject.asObservable();
    }
    ensureAuthenticated() {
        const localStorageCurrentUser = sessionStorage.getItem('currentUser');
        if (localStorageCurrentUser) {
            const user = JSON.parse(localStorageCurrentUser);
            const url = `${environment.baseUrl}/wp-json/jwt-auth/v1/token/Validate`;
            const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            });
            return this.http.post(url, { headers: headers }).pipe(map(validateResponse => {
                // tslint:disable-next-line:triple-equals
                if (validateResponse.data.status == '200') {
                    this.currentUserSubject.next(user);
                    return user;
                }
                return null;
            }));
        }
        return of(null);
    }
};
AuthService = __decorate([
    Injectable()
], AuthService);
export { AuthService };
