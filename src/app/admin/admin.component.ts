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

  seniorData: any;
  juniorData: any;
  juniorHeaders: string[];
  seniorHeaders: string[];
  loadingIndicator = true;
  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private teamService: TeamService) { }

  ngOnInit() {
    this.authenticationService.ensureAuthenticated()
      .subscribe(
        user => {
        //  if (user.isAdmin) {
            this.getPreview();
    //      } else {
      //      this.router.navigate(['/']);
      //    }
        },
        error => {
          this.router.navigate(['/']);
        });
  }

  getPreview(): void {
    this.loadingIndicator = true;
    this.teamService.getTeamDeclartionPreview()
      .subscribe(data => {
        this.seniorData = data.seniors;
        if (data.seniors.length > 0) {
          this.seniorHeaders = Object.getOwnPropertyNames(data.seniors[0]);
        }

        this.juniorData = data.juniors;
        if (data.juniors.length > 0) {
          this.juniorHeaders = Object.getOwnPropertyNames(data.juniors[0]);
        }

        this.loadingIndicator = false;
      }
      );
  }

}
