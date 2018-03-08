import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  isLoggedIn: boolean = false;
  userStatusSubscription: Subscription;
  loading: boolean = false;
  currentUser: User;
  model: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private messageService: MessageService) {
    console.log('constructor');
    this.userStatusSubscription = this.authenticationService.getCurrentUser().subscribe(user => {
      console.log(`GetCurrentUser promise receive ${JSON.stringify(user)}`);
      this.currentUser = user;
      this.isLoggedIn = (user != null);
    });
  }

  login(): void {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          this.loading = false;
          this.router.navigate(['/dashboard']);
        },
        error => {
          var message = "ERROR: Login failed. Please try again.";
          if (error.status == 403) {
            message = "ERROR: Incorrect email or password.";
          }

          this.messageService.error(message);
          this.loading = false;
        });
  }

  logout(): void {
    var message = `User ${this.currentUser.displayName} successfully logged out`;
    this.authenticationService.logout();
    this.messageService.success(message);
  }
}