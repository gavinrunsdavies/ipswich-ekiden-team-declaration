import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { AuthService } from './services/auth.service';
import { MessagesComponent } from './messages/messages.component';
import { StatusComponent } from './status/status.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, NgbCollapseModule, MessagesComponent, StatusComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    isLoggedIn = false;
    isAdmin = false;
    navbarCollapsed = true;
    userStatusSubscription: Subscription;

    constructor(private authenticationService: AuthService,
        private cdr: ChangeDetectorRef) {
        this.userStatusSubscription = this.authenticationService.getCurrentUser().subscribe(user => {
            Promise.resolve().then(() => {
                this.isLoggedIn = (user != null);
                this.isAdmin = user ? user.isAdmin : false;
                this.cdr.detectChanges();
            });
        });
    }
}
