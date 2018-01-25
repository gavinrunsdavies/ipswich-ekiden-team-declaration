import { Component, OnInit, Input } from '@angular/core';

import { Team } from '../team';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  @Input() team: Team;
  
  constructor() { }  

  ngOnInit() {
  }

  save(): void {
   this.teamService.updateTeam(this.team)
     .subscribe(() => this.goBack());
 }
}