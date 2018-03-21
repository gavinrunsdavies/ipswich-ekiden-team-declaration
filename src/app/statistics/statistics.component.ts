import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamService } from '../services/team.service';
import { Statistics, StatisticItem } from '../models/statistics';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  loadingIndicator = true;
  statistics: Statistics;
  completeTeamsCount: number;
  femaleRunnerCount: number;
  maleRunnerCount: number;
  totalTeamsCount: number;
  seniorTeamsCount: number;
  juniorTeamsCount: number;
  runnerCategoryCountData: StatisticItem[] = [];
  teamCategoryCountData: StatisticItem[] = [];
  clubTeamsCountData: StatisticItem[] = [];
  genderData: any[];
  genderColours: any[] = [
    {
      name: 'Male',
      value: '#0000FF'
    },
    {
      name: 'Female',
      value: '#FF69B4'
    }
  ];
  cardData: any[];
  colourScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  view: any[] = [1000, 400];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getStatistics();
  }

  getStatistics(): void {
    this.loadingIndicator = true;
    this.teamService.getStatistics()
      .subscribe(stats => {
        this.statistics = stats;
        this.clubTeamsCountData = this.statistics.clubTeamsCount;
        this.completeTeamsCount = this.statistics.completeTeamsCount;
        this.femaleRunnerCount = this.statistics.femaleRunnerCount;
        this.maleRunnerCount = this.statistics.maleRunnerCount;
        this.totalTeamsCount = this.statistics.totalTeamsCount;
        this.seniorTeamsCount = this.statistics.seniorTeamsCount;
        this.juniorTeamsCount = this.statistics.juniorTeamsCount;
        this.runnerCategoryCountData = this.statistics.runnerCategoryCount;
        this.teamCategoryCountData = this.statistics.teamCategoryCount;

        this.genderData = [{
          'name': 'Gender',
          'series': [
            {
              'name': 'Male',
              'value': this.maleRunnerCount
            },
            {
              'name': 'Female',
              'value': this.femaleRunnerCount
            }
          ]
        }];

        this.cardData = [{
          'name': 'Total Teams',
          'value': `${this.totalTeamsCount}`
        },
        {
          'name': 'Complete Teams',
          'value': `${this.completeTeamsCount}`
        },
        {
          'name': 'Senior Teams',
          'value': `${this.seniorTeamsCount}`
        },
        {
          'name': 'Junior Teams',
          'value': `${this.juniorTeamsCount}`
        }];
        this.loadingIndicator = false;
      });
  }

  gdpLabelFormatting(c) {
    return `${c.label}<br/><small class="number-card-label">GDP Per Capita</small>`;
  }

  statusLabelFormat(c): string {
    return `${c.label}<br/><small class="number-card-label">This week</small>`;
  }
}
