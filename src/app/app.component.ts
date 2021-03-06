import { Component } from '@angular/core';
import { Subscription ,  Subject } from 'rxjs';

import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    isLoggedIn = false;
    isAdmin = false;
    navbarCollapsed = true;
    userStatusSubscription: Subscription;

    constructor(private authenticationService: AuthService) {
        this.userStatusSubscription = this.authenticationService.getCurrentUser().subscribe(user => {
            this.isLoggedIn = (user != null);
            this.isAdmin = user.isAdmin;
        });
    }
}
