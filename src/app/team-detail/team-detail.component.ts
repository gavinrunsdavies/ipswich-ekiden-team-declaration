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
    this.getTeam();
  }
  
  getTeam(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(id)
      .subscribe(team => this.team = team);
  }

  
  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.teamService.updateTeam(this.team)
     .subscribe(() => this.goBack());
 }
}