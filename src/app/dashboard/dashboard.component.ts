import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Team } from '../models/team';
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
    console.log('teamService.getMyTeams() called');
    this.teamService.getMyTeams()
      .subscribe(teams => {
        this.teams = teams;
      }
    );
  }
  
  getClubs(): void {
    console.log('teamService.getClubs() called');
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
    this.formSubmittedIndicator = true;
    this.teamService.addTeam(this.newTeam)
      .subscribe(
          data => {
             this.teams.push({team: data});
              // set success message and pass true parameter to persist the message after redirecting to the login page
             this.messageService.success(`Team ${data.name} created`, true);  

//[{"id":"14","name":"test2","isAffiliated":"1","clubName":"Abingdon Amblers AC","complete":"0"}] REceived myteams
// {"team":[{"id":"17","name":"test4","isAffiliated":"1","clubName":"53-12","complete":"0","captainId":"11"}],"runners":[]}
//             

             // reset form
             this.formSubmittedIndicator = false;
             this.f.resetForm();
          },
          error => {
              this.messageService.error(error);
              this.formSubmittedIndicator = false;
          });
    }
}