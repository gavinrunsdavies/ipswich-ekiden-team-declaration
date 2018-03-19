import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Team } from '../models/team';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  @Input() team: Team;

  legs: number[] = [1, 2, 3, 4, 5, 6];
  isJuniorTeam: boolean;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) {
  }

  ngOnInit() {
  }

  getRunnerProperty(runners, leg: number, prop) {
    if (runners == undefined) {
      return;
    }

    const runner = runners.find(r => r.leg == leg);
    if (runner === undefined) {
      return null;
    } else {
      return runner[prop];
    }
  }
}
