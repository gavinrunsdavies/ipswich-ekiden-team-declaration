import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Team } from '../models/team';
import { Runner } from '../models/runner';
import { AgeCategoryCode } from '../models/runner';
import { Gender } from '../models/runner';
import { Club } from '../models/club';
import { AuthService } from '../services/auth.service';
import { TeamService } from '../services/team.service';
import { MessageService } from '../services/message.service';
import { SlideInOutAnimation } from './animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [SlideInOutAnimation]
})
export class DashboardComponent implements OnInit {

  teams: Team[];
  clubs: Club[];

  ageCategoriesKeys: any[];
  ageCategory = AgeCategoryCode;
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
    private modalService: NgbModal) {
    this.ageCategoriesKeys = Object.keys(this.ageCategory);
    this.genderKeys = Object.keys(this.gender);
  }

  ngOnInit() {
    this.authenticationService.ensureAuthenticated()
      .subscribe(
        success => {
          this.getMyTeams();
          this.getClubs();
        },
        error => {
          this.router.navigate(['/']);
        });
  }

  getMyTeams(): void {
    this.loadingIndicator = true;
    this.teamService.getMyTeams()
      .subscribe(teams => {
        this.teams = teams;

        // Add placeholders for runner legs
        for (let i = 0; i < this.teams.length; i++) {
          this.addRunnerPlaceHolders(this.teams[i]);
        }

        this.loadingIndicator = false;
      }
      );
  }

  getClubs(): void {
    this.teamService.getClubs()
      .subscribe(clubs => {
        this.clubs = clubs;
      }
      );
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
    if (newGenderValue == 'Male' && runner.ageCategory == 'V35') {
      runner.ageCategory = '';
    }
  }

  createTeam() {
    try {
      this.formSubmittedIndicator = true;
      this.teamService.addTeam(this.newTeam)
        .subscribe(
          team => {
            if (team && team.id > 0) {
              let newRunner: Runner;

              for (let i = 1; i <= 6; i++) {
                newRunner = new Runner();
                newRunner.leg = i;
                team.runners.push(newRunner);
              }

              this.teams.push(team);
              this.messageService.success(`Team ${team.name} created`, true);
              this.formSubmittedIndicator = false;
            }
          },
          error => {
            this.messageService.error(error);
            this.formSubmittedIndicator = false;
          });
    } catch (e) {
      this.formSubmittedIndicator = false;
      console.log('Error: ', e);
    }
  }

  saveTeamEdit(team) {
    console.log(`saveTeamEdit team called`);
    // Save team, Update, set to view mode.

    this.teamService.updateTeam(team)
      .subscribe(
        updatedTeam => {

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
        error => {
          this.messageService.error(error);
        });

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
      .subscribe(
        success => {

          for (let i = this.teams.length - 1; i >= 0; i--) {
            if (this.teams[i].id == this.selectedDeleteTeam.id) {
              this.teams.splice(i, 1);
              break;
            }
          }

          this.messageService.success(`Team ${this.selectedDeleteTeam.name} deleted`, true);

        },
        error => {
          this.messageService.error(error);
        });
  }

  addRunnerPlaceHolders(team) {
    for (let leg = 1; leg <= 6; leg++) {
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
}
