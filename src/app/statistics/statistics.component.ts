import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamService } from '../services/team.service';
import { Statistics } from '../models/statistics';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  loadingIndicator = true;
  statistics: Statistics;
  data: any[];
  colourScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getStatistics();
  }

  getStatistics(): void {
    this.loadingIndicator = true;
    this.teamService.getStatistics()
      .subscribe(stats => {
        this.statistics = stats;
        this.data = this.statistics.clubTeamsCount;
        this.loadingIndicator = false;
      });
  }
}
