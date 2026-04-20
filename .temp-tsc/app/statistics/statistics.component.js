import { __decorate } from "tslib";
import { Component } from '@angular/core';
let StatisticsComponent = class StatisticsComponent {
    teamService;
    loadingIndicator = true;
    statistics;
    completeTeamsCount;
    femaleRunnerCount;
    maleRunnerCount;
    totalTeamsCount;
    seniorTeamsCount;
    juniorTeamsCount;
    runnerCategoryCountData = [];
    teamCategoryCountData = [];
    clubTeamsCountData = [];
    genderData;
    genderColours = [
        {
            name: 'Male',
            value: '#0000FF'
        },
        {
            name: 'Female',
            value: '#FF69B4'
        }
    ];
    cardData;
    colourScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
    view = [1000, 400];
    constructor(teamService) {
        this.teamService = teamService;
    }
    ngOnInit() {
        this.getStatistics();
    }
    getStatistics() {
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
    statusLabelFormat(c) {
        return `${c.label}<br/><small class="number-card-label">This week</small>`;
    }
};
StatisticsComponent = __decorate([
    Component({
        selector: 'app-statistics',
        templateUrl: './statistics.component.html',
        styleUrls: ['./statistics.component.css']
    })
], StatisticsComponent);
export { StatisticsComponent };
