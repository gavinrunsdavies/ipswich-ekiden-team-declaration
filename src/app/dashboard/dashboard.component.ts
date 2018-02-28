import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Team } from '../models/team';
import { Runner } from '../models/runner';
import { AgeCategoryCode } from '../models/runner';
import { TeamCategory } from '../models/team';
import { Club } from '../models/club';
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
  keys: any[];
  ageCategoriesKeys: any[];
  teamCategories = TeamCategory;
  ageCategories = AgeCategoryCode;
  editing = {};
  newTeam: any = {};
  
  formSubmittedIndicator: boolean = false;
  loadingIndicator: boolean = true;
  
  constructor(
    private teamService: TeamService,
    private messageService: MessageService) {
    this.ageCategoriesKeys = Object.keys(this.ageCategories).filter(f => !isNaN(Number(f)));    
  }

  ngOnInit() {
    this.getMyTeams();
    this.getClubs();
  }

  getMyTeams(): void {
    this.teamService.getMyTeams()
      .subscribe(teams => {
        this.teams = teams;
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
  
  deleteTeam(tea,) : void {
    console.log(`delete team called`);
  }
  
  updateValue(teamId, event, cell, leg) {
    console.log('inline editing', teamId)
    this.editing[teamId + '-' +leg + cell] = false;
    this.editing[teamId][leg][cell] = event.target.value;
   // this.editing = [...this.editing];
    console.log('UPDATED!', this.editing[teamId][leg][cell]);
  }
  
  showTeam(team) : void {
    team.isCollapsed = !team.isCollapsed;
    
     // console.log('teamService.getMyTeams() called');
     // this.teamService.getTeam(team.id)
      // .subscribe(fullTeam => team.members = fullTeam.members);
    
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
                newRunner = new Runner();
                 for (var i = 1; i <= 6; i++) {
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
  }
  
   cancelTeamEdit(team) {
     console.log(`cancelTeamEdit team called`);
    // Set team as in view mode
    this.editing[team.id] = false;
  }
  
   editTeam(teamId) {
     console.log(`editTeam team called`);
    // Set team as in edit mode
    this.editing[teamId] = true;
  }
  
  inEditMode(teamId) {
    console.log(`inEditMode team called`);
    return this.editing[teamId];
  }
}