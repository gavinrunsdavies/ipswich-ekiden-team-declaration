import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RegisterComponent = class RegisterComponent {
    router;
    userService;
    messageService;
    model = {};
    loading = false;
    constructor(router, userService, messageService) {
        this.router = router;
        this.userService = userService;
        this.messageService = messageService;
    }
    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(data => {
            // set success message and pass true parameter to persist the message after redirecting to the login page
            this.messageService.success('Registration successful. Please check your emails for confirmation and login.', true);
            this.router.navigate(['/']);
        }, error => {
            let message = 'ERROR: Registration failed. Please try again.';
            if (error.status === 400) {
                message = 'ERROR: Email already registered:';
                message += ' <a href="http://www.ipswichekiden.co.uk/wp-login.php?action=lostpassword">Lost your password?</a>';
            }
            this.messageService.error(message);
            this.loading = false;
        });
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: 'register.component.html'
    })
], RegisterComponent);
export { RegisterComponent };
