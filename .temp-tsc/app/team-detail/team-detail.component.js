import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let TeamDetailComponent = class TeamDetailComponent {
    route;
    teamService;
    location;
    team;
    legs = [1, 2, 3, 4, 5, 6];
    isJuniorTeam;
    constructor(route, teamService, location) {
        this.route = route;
        this.teamService = teamService;
        this.location = location;
    }
    ngOnInit() {
    }
    getRunnerProperty(runners, leg, prop) {
        if (runners == undefined) {
            return;
        }
        const runner = runners.find(r => r.leg == leg);
        if (runner === undefined) {
            return null;
        }
        else {
            return runner[prop];
        }
    }
    getLegDistance(leg, isJuniorTeam) {
        if (isJuniorTeam) {
            return "1Mile";
        }
        switch (leg) {
            case 1:
                return "7.2K";
            case 2:
            case 4:
            case 6:
                return "5K";
            case 3:
            case 5:
                return "10K";
            default:
                return '';
        }
    }
};
__decorate([
    Input()
], TeamDetailComponent.prototype, "team", void 0);
TeamDetailComponent = __decorate([
    Component({
        selector: 'app-team-detail',
        templateUrl: './team-detail.component.html',
        styleUrls: ['./team-detail.component.css']
    })
], TeamDetailComponent);
export { TeamDetailComponent };
