import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LoginRedirect = class LoginRedirect {
    auth;
    router;
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (sessionStorage.getItem('currentUser')) {
            this.router.navigateByUrl('/dashboard');
            return false;
        }
        else {
            return true;
        }
    }
};
LoginRedirect = __decorate([
    Injectable()
], LoginRedirect);
export { LoginRedirect };
