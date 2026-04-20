import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let EnsureAdminUser = class EnsureAdminUser {
    router;
    authenticationService;
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate() {
        const localStorageCurrentUser = sessionStorage.getItem('currentUser');
        if (localStorageCurrentUser) {
            const user = JSON.parse(localStorageCurrentUser);
            if (user.isAdmin) {
                return true;
            }
        }
        // Default logout
        this.authenticationService.logout();
        this.router.navigateByUrl('/');
        return false;
    }
};
EnsureAdminUser = __decorate([
    Injectable()
], EnsureAdminUser);
export { EnsureAdminUser };
