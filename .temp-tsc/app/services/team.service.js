import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
let TeamService = class TeamService {
    http;
    messageService;
    teamsUrl = `${environment.baseUrl}/wp-json/ipswich-ekiden-team-declaration-api/v1`;
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    getStatistics() {
        const url = `${this.teamsUrl}/statistics`;
        return this.http.get(url)
            .pipe(tap((stats) => this.log(`fetched statistics ${JSON.stringify(stats)}`)), catchError(this.handleError('getStatistics')));
    }
    getTeams(race) {
        let url;
        if (race !== undefined) {
            url = `${this.teamsUrl}/teams?race=${race}`;
        }
        else {
            url = `${this.teamsUrl}/teams/`;
        }
        return this.http.get(url)
            .pipe(tap(teams => this.log(`fetched teams`)), catchError(this.handleError('getTeams', [])));
    }
    getClubs() {
        const url = `${this.teamsUrl}/clubs`;
        return this.http.get(url)
            .pipe(tap(clubs => this.log(`fetched clubs`)), catchError(this.handleError('getClubs', [])));
    }
    getMyTeams() {
        const url = `${this.teamsUrl}/myteams`;
        return this.http.get(url)
            .pipe(tap(teams => this.log(`fetched teams`)), catchError(this.handleError('getMyTeams', [])));
    }
    /** GET team by id. Will 404 if id not found */
    getTeam(id) {
        const url = `${this.teamsUrl}/teams/${id}`;
        return this.http.get(url).pipe(tap((team) => this.log(`fetched team id=${id} ${JSON.stringify(team)}`)), catchError(this.handleError(`getTeam id=${id}`)));
    }
    getTeamDeclartionPreview() {
        const url = `${this.teamsUrl}/teams/download`;
        return this.http.get(url).pipe(tap(_ => this.log(`fetched team declaration download preview`)), catchError(this.handleError(`getTeamDelcartionPreview`)));
    }
    /** PUT: update the team on the server */
    updateTeam(team) {
        const url = `${this.teamsUrl}/teams/${team.id}`;
        return this.http.put(url, team, this.httpOptions).pipe(tap(_ => this.log(`updated team id=${team.id}`)), catchError(this.handleError('updateTeam')));
    }
    updateTeamNumbers(teams, race) {
        const url = `${this.teamsUrl}/teams/numbers`;
        const teamNumbers = [];
        for (let i = 0; i < teams.length; i++) {
            teamNumbers.push({ id: teams[i].id, number: teams[i].number });
        }
        return this.http.post(url, { 'teams': teamNumbers, 'race': race }, this.httpOptions).pipe(tap(_ => this.log(`updated team numbers`)), catchError(this.handleError('updateTeamNumbers')));
    }
    /** POST: add a new team to the server */
    addTeam(team) {
        const url = `${this.teamsUrl}/teams`;
        return this.http.post(url, team, this.httpOptions).pipe(tap((t) => this.log(`added team w/ id=${t.id}`)), catchError(this.handleError('addTeam')));
    }
    sendTeamDeclarations(email) {
        const url = `${this.teamsUrl}/teams/send`;
        return this.http.post(url, { 'email': email }, this.httpOptions).pipe(tap(_ => this.log(`email sent to ${email}`)), catchError(this.handleError('sendTeamDeclarations')));
    }
    /** DELETE: delete the team from the server */
    deleteTeam(team) {
        const id = typeof team == 'number' ? team : team.id;
        const url = `${this.teamsUrl}/teams/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(tap(_ => this.log(`deleted team id=${id}`)), catchError(this.handleError('deleteTeam')));
    }
    log(message) {
        if (environment.production == false) {
            console.log('TeamService: ' + message);
        }
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
};
TeamService = __decorate([
    Injectable()
], TeamService);
export { TeamService };
