import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  isLoggedIn: boolean = false;
  loading:boolean = false;
  currentUser: User;
  userStatusSubscription: Subscription;
  model: any = {};
  
  constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthService,
        private messageService: MessageService) { }
 
  
  ngOnInit(): void {
    // reset login status
    //this.authenticationService.logout(); TODO
    this.userStatusSubscription = this.authenticationService.getCurrentUser().subscribe(user => { 
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