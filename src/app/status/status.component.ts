import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription ,  Subject } from 'rxjs';

import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  isLoggedIn = false;
  userStatusSubscription: Subscription;
  loading = false;
  currentUser: User;
  model: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private messageService: MessageService) {
    this.userStatusSubscription = this.authenticationService.getCurrentUser().subscribe(user => {
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
          let message = 'ERROR: Login failed. Please try again.';
          if (error.status == 403) {
            message = 'ERROR: Incorrect email or password.';
            message += ' <a href="http://www.ipswichekiden.co.uk/wp-login.php?action=lostpassword">Lost your password?</a>';
          }

          this.messageService.error(message);
          this.loading = false;
        });
  }

  logout(): void {
    const message = `User ${this.currentUser.displayName} successfully logged out`;
    this.authenticationService.logout();
    this.messageService.success(message);
  }
}
