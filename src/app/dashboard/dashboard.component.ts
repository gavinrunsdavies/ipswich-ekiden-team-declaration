import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';


import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Team } from '../models/team';
import { Runner } from '../models/runner';
import { AgeCategoryCode, JuniorAgeCategoryCode } from '../models/runner';
import { Gender } from '../models/runner';
import { Club } from '../models/club';
import { AuthService } from '../services/auth.service';
import { TeamService } from '../services/team.service';
import { MessageService } from '../services/message.service';
import { TeamFilterPipe } from './team-filter.pipe';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NgbModule, TeamFilterPipe, SpinnerComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  teams: Team[];
  clubs: Club[];

  ageCategoriesKeys: any[];
  ageCategory = AgeCategoryCode;
  juniorAgeCategoriesKeys: any[];
  juniorAgeCategory = JuniorAgeCategoryCode;
  genderKeys: any[];
  gender = Gender;
  editing = {};
  newTeam: any = {};
  selectedDeleteTeam: Team;

  formSubmittedIndicator = false;
  loadingIndicator = true;

  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private teamService: TeamService,
    private messageService: MessageService,
    private modalService: NgbModal,
    private cdr: ChangeDetectorRef) {
    this.ageCategoriesKeys = Object.keys(this.ageCategory);
    this.juniorAgeCategoriesKeys = Object.keys(this.juniorAgeCategory);
    this.genderKeys = Object.keys(this.gender);
  }

  ngOnInit() {
    this.authenticationService.ensureAuthenticated()
      .subscribe({
      next: success => {
        this.loadDashboardData();
      },
      error: error => {
        this.loadingIndicator = false;
        this.router.navigate(['/']);
      }});
  }

  loadDashboardData(): void {
    this.loadingIndicator = true;

    this.teamService.getMyTeams()
      .pipe(finalize(() => {
        console.log('getMyTeams finalize: setting loadingIndicator to false');
        this.loadingIndicator = false;
        this.cdr.detectChanges();
      }))
      .subscribe({
      next: teams => {
        console.log('getMyTeams next: received teams', teams);
        this.teams = teams || [];

        // Add placeholders for runner legs
        for (let i = 0; i < this.teams.length; i++) {
          this.addRunnerPlaceHolders(this.teams[i]);
        }
      },
      error: error => {
        console.log('getMyTeams error:', error);
        console.error('Error loading teams:', error);
      }});

    this.teamService.getClubs()
      .subscribe({
      next: clubs => {
        console.log('getClubs next: received clubs', clubs);
        this.clubs = clubs || [];
      },
      error: error => {
        console.log('getClubs error:', error);
        console.error('Error loading clubs:', error);
      }});
  }

  showTeam(team): void {
    team.isShown = !team.isShown;
  }

  trackById(index, team) {
    return team.id;
  }

  public onAffiliationChange(event): void {
    const Unattached = 989;
    const newAffiliationValue = event.target.value;
    if (newAffiliationValue == 0) {
      this.newTeam.clubId = Unattached;
    } else {
      this.newTeam.clubId = '';
    }
  }

  public onGenderChange(runner, event): void {
    const newGenderValue = event.target.value;
    if (newGenderValue == 'Male' && (runner.ageCategory == 'V35' || runner.ageCategory == 'V45')) {
      runner.ageCategory = '';
    }
  }

  createTeam() {
    try {
      this.formSubmittedIndicator = true;
      this.teamService.addTeam(this.newTeam)
        .pipe(finalize(() => {
          this.formSubmittedIndicator = false;
          this.cdr.detectChanges();
        }))
        .subscribe({
        next: team => {
          if (team) {
            let newRunner: Runner;
            let legs = 6;
            if (team.isJuniorTeam) {
              legs = 4;
            }

            for (let i = 1; i <= legs; i++) {
              newRunner = new Runner();
              newRunner.leg = i;
              team.runners.push(newRunner);
            }

            this.teams.push(team);
            this.messageService.success(`Team ${team.name} created`, true);
          } else {
            this.messageService.error('Team creation returned no team object');
          }
        },
        error: error => {
          this.messageService.error(error);
        }});
    } catch (e) {
      this.formSubmittedIndicator = false;
      console.log('Error: ', e);
    }
  }

  saveTeamEdit(team) {
    // Save team, Update, set to view mode.

    this.teamService.updateTeam(team)
      .subscribe({
      next: updatedTeam => {

        this.addRunnerPlaceHolders(updatedTeam);

        // Update array
        for (let i = 0; i < this.teams.length; i++) {
          if (this.teams[i].id == updatedTeam.id) {
            this.teams[i] = updatedTeam;
            this.teams[i].isShown = true;
            break;
          }
        }

        this.messageService.success(`Team ${updatedTeam.name} updated`, true);

      },
      error: error => {
        this.messageService.error(error);
      }});

    this.editing[team.id] = false;
  }

  cancelTeamEdit(team) {
    this.editing[team.id] = false;
  }

  editTeam(teamId) {
    this.editing[teamId] = true;
  }

  inEditMode(teamId) {
    return this.editing[teamId];
  }

  openDeleteTeamModal(deleteTeamModal, team) {
    this.selectedDeleteTeam = team;
    this.modalService.open(deleteTeamModal).result.then((result) => {
      // Closed
    }, (reason) => {
      // Dismissed
    });
  }

  deleteTeam() {
    this.teamService.deleteTeam(this.selectedDeleteTeam)
      .subscribe({
      next: success => {

        for (let i = this.teams.length - 1; i >= 0; i--) {
          if (this.teams[i].id == this.selectedDeleteTeam.id) {
            this.teams.splice(i, 1);
            break;
          }
        }

        this.messageService.success(`Team ${this.selectedDeleteTeam.name} deleted`, true);

      },
      error: error => {
        this.messageService.error(error);
      }});
  }

  addRunnerPlaceHolders(team) {
    let legs = 6;
    if (team.isJuniorTeam) {
      legs = 4;
    }

    for (let leg = 1; leg <= legs; leg++) {
      let exists = false;
      for (let k = 0; k < team.runners.length; k++) {
        if (team.runners[k].leg == leg) {
          exists = true;
          break;
        }
      }

      if (!exists) {
        const newRunner: Runner = new Runner();
        newRunner.leg = leg;
        team.runners.push(newRunner);
      }
    }

    team.runners.sort(this.compareRunnersByLeg);
  }

  compareRunnersByLeg(a, b) {
    if (a.leg < b.leg) {
      return -1;
    }
    if (a.leg > b.leg) {
      return 1;
    }
    return 0;
  }

  getLegDistance(leg: any) {
    switch (String(leg)) {
      case "1" :
        return "7.2K";
      case "2" :
      case "4" :
      case "6" :
        return "5K";
      case "3" :
      case "5" :
        return "10K";
      default:
        return '';
    }
  }
}
