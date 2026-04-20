import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let EnsureAuthenticated = class EnsureAuthenticated {
    router;
    authenticationService;
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate() {
        if (sessionStorage.getItem('currentUser')) {
            return true;
        }
        else {
            this.authenticationService.logout();
            this.router.navigateByUrl('/');
            return false;
        }
    }
};
EnsureAuthenticated = __decorate([
    Injectable()
], EnsureAuthenticated);
export { EnsureAuthenticated };
