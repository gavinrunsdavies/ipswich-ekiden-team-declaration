import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Team } from '../models/team';
import { TeamService }  from '../services/team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  @Input() team: Team;
  
  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) { }  

  ngOnInit() {
  }
  
  getRunnerProperty(runners, leg: number, prop) {
    if (runners == undefined) {
      return;
    }
    
    var runner = runners.find(runner => runner.leg == leg); 
    if (runner == undefined)
      if (prop == 'name')
        return '<span class="font-italic font-weight-light">Not declared</span>';
      else
        return '-';
    else
      return runner[prop];
  }
}