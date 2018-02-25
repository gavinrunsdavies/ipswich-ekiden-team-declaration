import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthService,
        private messageService: MessageService) { }
 
    ngOnInit() {      
        // reset login status
        this.authenticationService.logout();

        this.returnUrl = '/dashboard';
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                    this.loading = false; // tODO needed?
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log(error);
                    this.messageService.error(error);
                    this.loading = false;
                });
    }
}
