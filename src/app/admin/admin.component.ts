import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


import { Team } from '../models/team';
import { AuthService } from '../services/auth.service';
import { TeamService } from '../services/team.service';
import { MessageService } from '../services/message.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  seniorsCurrentPageNumber = 1;
  juniorsCurrentPageNumber = 1;
  seniorTeamsCurrentPageNumber = 1;
  juniorTeamsCurrentPageNumber = 1;
  seniorsSearchString: string;
  juniorsSearchString: string;
  searchableList = ['name', 'clubName'];
  seniorData: any[];
  juniorData: any[];
  seniorTeams: Team[];
  juniorTeams: Team[];
  juniorHeaders: string[];
  seniorHeaders: string[];
  loadingIndicator: any = {};
  formSubmittedIndicator = false;
  download: any = {};

  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private messageService: MessageService,
    private teamService: TeamService) { }

  ngOnInit() {
    this.authenticationService.ensureAuthenticated()
      .subscribe(
        user => {
          if (user.isAdmin) {
            this.getPreview();
            this.getTeams('seniors', this.seniorTeams);
            this.getTeams('juniors', this.juniorTeams);
          } else {
            this.router.navigate(['/']);
          }
        },
        error => {
          this.router.navigate(['/']);
        });
  }

  getTeams(race: string, data: Team[]): void {
    this.loadingIndicator[race] = true;
    this.teamService.getTeams(race)
      .subscribe(teams => {
        if (race == 'seniors') {
          this.seniorTeams = teams;
        } else {
          this.juniorTeams = teams;
        }
        this.loadingIndicator[race] = false;
      });
  }

  getPreview(): void {
    this.loadingIndicator['preview'] = true;
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

        this.loadingIndicator['preview'] = false;
      }
      );
  }

  send(): void {
    this.formSubmittedIndicator = true;
    this.teamService.sendTeamDeclarations(this.download.email)
      .subscribe(data => {
        this.messageService.success(`Email sent to ${this.download.email} with team declaratiosn attached.`, true);
        this.formSubmittedIndicator = false;
      }
      );
  }

  updateSeniorTeamNumbers(): void {
    const duplicates = this.validateTeamNumbers(this.seniorTeams);
    if (duplicates.length > 0) {
      this.messageService.error(`Invalid team numbers. Duplicate team numbers declared: ${duplicates.join(', ')}.`, true, 60);
      return;
    }
    this.teamService.updateTeamNumbers(this.seniorTeams, 'seniors')
      .subscribe(
        teams => {
          this.seniorTeams = teams;
          this.messageService.success(`Senior team numbers updated.`, true);
        },
        error => {
          this.messageService.error(`Error updating senior team numbers.`, true);
        }
      );
  }

  updateJuniorTeamNumbers(): void {
    const duplicates = this.validateTeamNumbers(this.juniorTeams);
    if (duplicates.length > 0) {
      this.messageService.error(`Invalid team numbers. Duplicate team numbers declared: ${duplicates.join(', ')}.`, true, 60);
      return;
    }
    this.teamService.updateTeamNumbers(this.juniorTeams, 'juniors')
      .subscribe(
        teams => {
          this.juniorTeams = teams;
          this.messageService.success(`Junior team numbers updated.`, true);
        },
        error => {
          this.messageService.error(`Error updating senior team numbers.`, true);
        }
      );
  }

  private validateTeamNumbers(teams: Team[]) {
    const duplicates: number[] = [];
    for (let i = 0; i < teams.length - 1; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        if (i !== j && teams[i].number == teams[j].number && teams[i].number != 0) {
          duplicates.push(teams[i].number);
        }
      }
    }

    return duplicates;
  }
}
