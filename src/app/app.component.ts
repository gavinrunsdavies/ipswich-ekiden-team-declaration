import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   isLoggedIn: boolean = false;
   currentUser: User;
  userStatusSubscription: Subscription;
   
    constructor(private authenticationService: AuthService) { }
        
    ngOnInit(): void {
    this.userStatusSubscription = this.authenticationService.getCurrentUser().subscribe(user => { 
      this.currentUser = user;
      this.isLoggedIn = this.currentUser != null;
    });
    
  } 
}
