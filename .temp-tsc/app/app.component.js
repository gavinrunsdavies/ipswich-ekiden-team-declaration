import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    authenticationService;
    isLoggedIn = false;
    isAdmin = false;
    navbarCollapsed = true;
    userStatusSubscription;
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.userStatusSubscription = this.authenticationService.getCurrentUser().subscribe(user => {
            this.isLoggedIn = (user != null);
            this.isAdmin = user.isAdmin;
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
