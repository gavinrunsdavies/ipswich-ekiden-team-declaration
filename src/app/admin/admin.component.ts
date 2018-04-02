import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AuthService } from '../services/auth.service';
import { TeamService } from '../services/team.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data: any;
  loadingIndicator = true;
  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private teamService: TeamService) { }

  ngOnInit() {
    this.authenticationService.ensureAuthenticated()
      .subscribe(
        user => {
          if (user.isAdmin) {
            this.getPreview();
          } else {
            this.router.navigate(['/']);
          }
        },
        error => {
          this.router.navigate(['/']);
        });
  }

  getPreview(): void {
    this.loadingIndicator = true;
    this.teamService.getTeamDelcartionPreview()
      .subscribe(data => {
        this.data = data;
        this.loadingIndicator = false;
      }
      );
  }

}
