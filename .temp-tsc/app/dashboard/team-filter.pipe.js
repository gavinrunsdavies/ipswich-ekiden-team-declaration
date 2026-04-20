import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let TeamFilterPipe = class TeamFilterPipe {
    transform(teams, isJuniorTeam) {
        console.log(`TeamFilterPipe is ${isJuniorTeam}`);
        if (!teams) {
            return teams;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return teams.filter(team => team.isJuniorTeam == isJuniorTeam);
    }
};
TeamFilterPipe = __decorate([
    Pipe({
        name: 'TeamFilterPipe',
        pure: false
    })
], TeamFilterPipe);
export { TeamFilterPipe };
