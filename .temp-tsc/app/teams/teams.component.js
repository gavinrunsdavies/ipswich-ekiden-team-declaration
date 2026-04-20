import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let TeamsComponent = class TeamsComponent {
    teamService;
    race;
    title;
    currentPageNumber = 1;
    teams;
    selectedTeam;
    searchString;
    searchableList = ['name', 'clubName', 'category'];
    loadingIndicator = true;
    constructor(teamService) {
        this.teamService = teamService;
    }
    ngOnInit() {
        this.getTeams(this.race);
    }
    getTeams(race) {
        this.loadingIndicator = true;
        this.teamService.getTeams(this.race)
            .subscribe(teams => {
            this.teams = teams;
            this.loadingIndicator = false;
        });
    }
    showTeam(team) {
        this.selectedTeam = team;
    }
};
__decorate([
    Input()
], TeamsComponent.prototype, "race", void 0);
__decorate([
    Input('title')
], TeamsComponent.prototype, "title", void 0);
TeamsComponent = __decorate([
    Component({
        selector: 'app-teams',
        templateUrl: './teams.component.html',
        styleUrls: ['./teams.component.css']
    })
], TeamsComponent);
export { TeamsComponent };
