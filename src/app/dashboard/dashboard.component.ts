import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { AgeCategoryCode } from '../models/runner';
import { TeamCategory } from '../models/team';
import { TeamService } from '../services/team.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  teams: Observable<Team[]>;  
  keys: any[];
  ageCategoriesKeys: any[];
  teamCategories = TeamCategory;
  ageCategories = AgeCategoryCode;
  editing = {};
  newTeam: any = {};
  
  formSubmittedIndicator: boolean = false;
  loadingIndicator: boolean = true;
  
  constructor(private teamService: TeamService) {
    this.ageCategoriesKeys = Object.keys(this.ageCategories).filter(f => !isNaN(Number(f)));    
  }

  ngOnInit() {
    this.getTeams();
    console.log(`teams length:`);
    
  }

  getTeams(): void {
    console.log('teamService.getMyTeams() called');
    this.teamService.getMyTeams()
      .subscribe(teams => {
        this.teams = Observable.of(teams);
        this.teams.subscribe(result => {console.log(result.length)});       
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
                    // set success message and pass true parameter to persist the message after redirecting to the login page
                   this.messageService.success('Team created', true);                    
                },
                error => {
                    this.messageService.error(error);
                    this.formSubmittedIndicator = false;
                });
    }
}