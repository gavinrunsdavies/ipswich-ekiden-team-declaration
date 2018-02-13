import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { TeamCategory } from '../models/team';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  teams: Team[] = [];
  keys: any[];
  categories = TeamCategory;
  columns = [
    { prop: 'Leg' },
    { prop: 'Name' },
    { name: 'Gender' },
    { name: 'Age Category' }
  ];
  rows = [];
  loadingIndicator: boolean = true;
  
  constructor(private teamService: TeamService) {
    this.keys = Object.keys(this.categories).filter(f => !isNaN(Number(f)));    
  }

  ngOnInit() {
    //this.getTeams();
  }

  getTeams(): void {
    this.teamService.getMyTeams()
      .subscribe(teams => this.rows = teams);
  }
}