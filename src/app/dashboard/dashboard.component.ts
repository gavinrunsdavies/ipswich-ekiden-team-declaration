import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { Team } from '../models/team';
import { Runner } from '../models/runner';
import { AgeCategoryCode } from '../models/runner';
import { Gender } from '../models/runner';
import { Club } from '../models/club';
import { AuthService } from '../services/auth.service';
import { TeamService } from '../services/team.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
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
  
  formSubmittedIndicator: boolean = false;
  loadingIndicator: boolean = true;
  
  constructor(
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
           // TODO redirect to login 
        });
  }

  getMyTeams(): void {
    this.teamService.getMyTeams()
      .subscribe(teams => {
        this.teams = teams;
        
        // Add placeholders for runner legs
        for(var i = 0; i < this.teams.length; i++) {
          this.addRunnerPlaceHolders(this.teams[i]);
        }
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
  
  showTeam(team) : void {
    team.isShown = !team.isShown;
  }
    
  trackById(index, team) {
    return team.id;
  }

  createTeam() {
    try {
      this.formSubmittedIndicator = true;
      this.teamService.addTeam(this.newTeam)
        .subscribe(
            team => {
               if (team && team.id > 0) {
                 let newRunner: Runner;
                
                 for (var i = 1; i <= 6; i++) {
                   newRunner = new Runner();
                   newRunner.leg = i;
                   team.runners.push(newRunner);
                 }
                 
                 this.teams.push(team);                
                 this.messageService.success(`Team ${team.name} created`, true);  
               }
            },
            error => {
                this.messageService.error(error);
                
            });
      }
      catch (e) {
        console.log("Error: ", e); 
      }
      this.formSubmittedIndicator = false;
  } 
  
   saveTeamEdit(team) {
     console.log(`saveTeamEdit team called`);
    // Save team, Update, set to view mode.
    
    this.teamService.updateTeam(team)
        .subscribe(
            updatedTeam => {
              
              this.addRunnerPlaceHolders(updatedTeam);
              
              // Update array
              for (var i = 0; i < this.teams.length; i++) {
                if (this.teams[i].id === updatedTeam.id) {
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
              
              for(var i = this.teams.length - 1; i >= 0; i--) {
                if(this.teams[i].id === this.selectedDeleteTeam.id) {
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
    for(var leg = 1; leg <= 6; leg++) {
      var exists = false;
      for(var k = 0; k < team.runners.length; k++) {
        if (team.runners[k].leg == leg) {
          exists = true;
          break;
        }
      }
      
      if (!exists) {
        let newRunner: Runner = new Runner();
        newRunner.leg = leg;
        team.runners.push(newRunner);
      }
    }

    team.runners.sort(this.compareRunnersByLeg);
  }
  
  compareRunnersByLeg(a,b) {
  if (a.leg < b.leg)
    return -1;
  if (a.leg > b.leg)
    return 1;
  return 0;
}
}