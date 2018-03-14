import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../models/team';
import { TeamService } from '../services/team.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {
  @Input() race: string;
  @Input('title') title: string;

  currentPageNumber = 1;
  teams: Team[];
  selectedTeam: Team;
  searchString: string;
  searchableList = ['name', 'clubName', 'category'];
  loadingIndicator = true;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams(this.race);
  }

  getTeams(race): void {
    this.loadingIndicator = true;
    this.teamService.getTeams(this.race)
      .subscribe(teams => {
        this.teams = teams;
        this.loadingIndicator = false;
      });
  }

  showTeam(team: Team): void {
    this.selectedTeam = team;
  }
}
