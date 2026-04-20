import { __decorate } from "tslib";
import { Component } from '@angular/core';
let StatusComponent = class StatusComponent {
    route;
    router;
    authenticationService;
    messageService;
    isLoggedIn = false;
    userStatusSubscription;
    loading = false;
    currentUser;
    model = {};
    constructor(route, router, authenticationService, messageService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.messageService = messageService;
        this.userStatusSubscription = this.authenticationService.getCurrentUser().subscribe(user => {
            this.currentUser = user;
            this.isLoggedIn = (user != null);
        });
    }
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(data => {
            this.loading = false;
            this.router.navigate(['/dashboard']);
        }, error => {
            let message = 'ERROR: Login failed. Please try again.';
            if (error.status == 403) {
                message = 'ERROR: Incorrect email or password.';
                message += ' <a href="http://www.ipswichekiden.co.uk/wp-login.php?action=lostpassword">Lost your password?</a>';
            }
            this.messageService.error(message);
            this.loading = false;
        });
    }
    logout() {
        const message = `User ${this.currentUser.displayName} successfully logged out`;
        this.authenticationService.logout();
        this.messageService.success(message);
    }
};
StatusComponent = __decorate([
    Component({
        selector: 'app-status',
        templateUrl: './status.component.html',
        styleUrls: ['./status.component.css']
    })
], StatusComponent);
export { StatusComponent };
