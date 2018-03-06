import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  isLoggedIn = new Subject<boolean>();
  loading: boolean = false;
  currentUser = new Subject<User>();
  model: any = {};
  
  constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthService,
        private messageService: MessageService) { }
  
  ngOnInit(): void {    
  console.log('status comp ngOnIt');
    this.userStatusSubscription = this.authenticationService.getCurrentUser().subscribe(user => { 
    console.log('Im logged inuserStatusSubscription');
      this.currentUser = user;
      this.isLoggedIn = this.currentUser != null;
    });
  }

  login(): void {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
        .subscribe(
            data => {
                this.loading = false; // tODO needed?
                this.router.navigate(['/dashboard']);
            },
            error => {
                var message = "ERROR: Login failed. Please try again.";
                if (error.status = 403) {
                  message = "ERROR: Incorrect email or password.";
                }
                
                this.messageService.error(message);
                this.loading = false;
            });
    }  
    
  logout(): void {
    this.authenticationService.logout();
  }
}