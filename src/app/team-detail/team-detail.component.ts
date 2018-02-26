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
    console.log(runners);
    if (runners == undefined) {
      return 'Not declaredx';
    }
    var runner = runners.find(runner => runner.leg == leg); 
    if (runner == undefined)
      return 'Not declared';
    else
      return runner['prop'];
  }
}