import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { TeamService } from '../services/team.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {
  currentPageNumber = 1;
  teams: Team[];
  selectedTeam: Team;
  searchString: string;
  searchableList = ['name', 'clubName', 'category'];
  loadingIndicator: boolean;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.loadingIndicator = true;
    this.teamService.getTeams()
      .subscribe(teams => {
        this.teams = teams;
        this.loadingIndicator = false;
      });
  }

  showTeam(team: Team): void {
    this.selectedTeam = team;
  }
}
