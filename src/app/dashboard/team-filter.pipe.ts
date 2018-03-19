import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../models/team';

@Pipe({
    name: 'TeamFilterPipe',
    pure: false
})
export class TeamFilterPipe implements PipeTransform {
    transform(teams: Team[], isJuniorTeam: boolean): any {
        console.log(`TeamFilterPipe is ${isJuniorTeam}`);
        if (!teams) {
            return teams;
        }

        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return teams.filter(team => team.isJuniorTeam == isJuniorTeam);
    }
}
