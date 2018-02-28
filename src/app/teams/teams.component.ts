import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { TeamService } from '../services/team.service';
import { FilterPipe } from '../filter.pipe'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {
  currentPageNumber: number = 1;
  teams: Team[]; 
  selectedTeam: Team;  
  searchableList = ['name', 'clubName']  ;
  
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
  }   
  
  getTeams(): void {
   this.teamService.getTeams()
      .subscribe(teams => this.teams = teams);
  }
  
  showTeam(team: Team): void {
    this.teamService.getTeam(team.id)
      .subscribe(team => {
        this.selectedTeam = team;
      });
  }  
}