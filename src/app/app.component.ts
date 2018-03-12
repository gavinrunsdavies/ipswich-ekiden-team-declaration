import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    isLoggedIn = false;
    navbarCollapsed = false;
    userStatusSubscription: Subscription;

    constructor(private authenticationService: AuthService) {
        this.userStatusSubscription = this.authenticationService.getCurrentUser().subscribe(user => {
            this.isLoggedIn = (user != null);
        });
    }
}
