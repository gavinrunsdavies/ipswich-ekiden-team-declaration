import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private messageService: MessageService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    // set success message and pass true parameter to persist the message after redirecting to the login page
                    this.messageService.success('Registration successful. Please check your emails for confirmation and login.', true);
                    this.router.navigate(['/']);
                },
                error => {
                    let message = 'ERROR: Registration failed. Please try again.';
                    if (error.status === 400) {
                        message = 'ERROR: Email already registered:';
                        message += ' <a href="http://www.ipswichekiden.co.uk/wp-login.php?action=lostpassword">Lost your password?</a>';
                    }
                    this.messageService.error(message);
                    this.loading = false;
                });
    }
}
