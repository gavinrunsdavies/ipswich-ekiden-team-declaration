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
  
  // TODO - change response for JSON so that runners is in team.
  getRunnerProperty(x, leg: number, prop) {
    console.log(x);
    var runner = x.find(x => x.leg == leg); 
    if (runner == undefined)
      return 'Not declared';
    else
      return runner['prop'];
  }
}