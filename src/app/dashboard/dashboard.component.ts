import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { TeamCategory } from '../models/team';
import { TeamService } from '../services/team.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  // teams: Team[] = [
          // { id: 11, name: 'Mr. Nice', category: 1, clubName: 'Ipswixh JAFFA RC', complete: true, clubId: 1, captainId: 1,
            // members: [
            // { id: 1, name: 'Gavin Davies1', ageCategoryCode: 1, sex: 1 },
            // { id: 2, name: 'Gavin Davies2', ageCategoryCode: 2, sex: 1 },
            // { id: 3, name: 'Gavin Davies3', ageCategoryCode: 3, sex: 2 },
            // { id: 4, name: 'Gavin Davies4', ageCategoryCode: 3, sex: 2 },
            // { id: 5, name: 'Gavin Davies5', ageCategoryCode: 3, sex: 1 },
            // { id: 6, name: 'Gavin Davies6', ageCategoryCode: 4, sex: 1 }
            // ]
          // },
          // { id: 11, name: 'Mr. Nice2', category: 1, clubName: 'Ipswixh JAFFA RC 2', complete: true, clubId: 1, captainId: 1,
            // members: [
            // { id: 1, name: 'Gavin Davies21', ageCategoryCode: 1, sex: 1 },
            // { id: 2, name: 'Gavin Davies22', ageCategoryCode: 1, sex: 1 },
            // { id: 3, name: 'Gavin Davies23', ageCategoryCode: 1, sex: 1 },
            // { id: 4, name: 'Gavin Davies24', ageCategoryCode: 1, sex: 1 }            
            // ]
          // }];
  teams: Observable<Team[]>;  
  keys: any[];
  categories = TeamCategory;
  columns = [
    { name: 'Leg' },
    { name: 'Name' },
    { name: 'Sex' },
    { name: 'ageCategoryCode' }
  ];
  editing = {};
  
  loadingIndicator: boolean = true;
  
  constructor(private teamService: TeamService) {
    this.keys = Object.keys(this.categories).filter(f => !isNaN(Number(f)));    
  }

  ngOnInit() {
    this.getTeams();
    console.log(`teams length:`);
    
  }

  getTeams(): void {
    console.log('teamService.getMyTeams() called');
    this.teamService.getMyTeams()
      .subscribe(teams => {
        this.teams = Observable.of(teams);
        this.teams.subscribe(result => {console.log(result.length)});       
      }
    );
  }
  
  logMe(x) : void {
    console.log(`teams membersdd:`);
  }
  
  updateValue(team, event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex)
    this.editing[rowIndex + '-' + cell] = false;
    team.members[rowIndex][cell] = event.target.value;
    team.members = [...team.members];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
  
  showTeam(team) : void {
    team.isCollapsed = !team.isCollapsed;
    
     // console.log('teamService.getMyTeams() called');
     // this.teamService.getTeam(team.id)
      // .subscribe(fullTeam => team.members = fullTeam.members);
    
  }
    
  trackById(index, team) {
    return team.id;
  }

}