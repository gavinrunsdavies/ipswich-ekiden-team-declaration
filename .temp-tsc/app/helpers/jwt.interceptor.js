import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let JwtInterceptor = class JwtInterceptor {
    intercept(request, next) {
        // add authorization header with jwt token if available
        const storedUser = sessionStorage.getItem('currentUser');
        const currentUser = storedUser ? JSON.parse(storedUser) : null;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor = __decorate([
    Injectable()
], JwtInterceptor);
export { JwtInterceptor };
