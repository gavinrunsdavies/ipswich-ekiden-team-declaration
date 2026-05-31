import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';
import { Router } from '@angular/router';

import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule, RecaptchaModule],
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
            .subscribe({
                next: () => {
                    // set success message and pass true parameter to persist the message after redirecting to the login page
                    this.messageService.success('Registration successful. Please check your emails for confirmation and login.', true);
                    this.router.navigate(['/']);
                },
                error: error => {
                    let message = 'ERROR: Registration failed. Please try again.';
                    if (error.status === 400) {
                        message = 'ERROR: Email already registered:';
                        message += ' <a href="http://www.ipswichekiden.co.uk/wp-login.php?action=lostpassword">Lost your password?</a>';
                    }
                    this.messageService.error(message);
                    this.loading = false;
                }});
    }
}
