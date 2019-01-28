import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Team } from '../models/team';
import { Club } from '../models/club';
import { Statistics } from '../models/statistics';
import { MessageService } from './message.service';
import { environment } from '../../environments/environment';

@Injectable()
export class TeamService {

  private teamsUrl = `${environment.baseUrl}/wp-json/ipswich-ekiden-team-declaration-api/v1`;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getStatistics(): Observable<Statistics> {
    const url = `${this.teamsUrl}/statistics`;
    return this.http.get<Statistics>(url)
      .pipe(
        tap((stats: Statistics) => this.log(`fetched statistics ${JSON.stringify(stats)}`)),
        catchError(this.handleError<Statistics>('getStatistics'))
      );
  }

  getTeams(race?: string): Observable<Team[]> {
    let url: string;
    if (race !== undefined) {
      url = `${this.teamsUrl}/teams?race=${race}`;
    } else {
      url = `${this.teamsUrl}/teams/`;
    }
    return this.http.get<Team[]>(url)
      .pipe(
        tap(teams => this.log(`fetched teams`)),
        catchError(this.handleError('getTeams', []))
      );
  }

  getClubs(): Observable<Club[]> {
    const url = `${this.teamsUrl}/clubs`;
    return this.http.get<Club[]>(url)
      .pipe(
        tap(clubs => this.log(`fetched clubs`)),
        catchError(this.handleError('getClubs', []))
      );
  }

  getMyTeams(): Observable<Team[]> {
    const url = `${this.teamsUrl}/myteams`;
    return this.http.get<Team[]>(url)
      .pipe(
        tap(teams => this.log(`fetched teams`)),
        catchError(this.handleError('getMyTeams', []))
      );
  }

  /** GET team by id. Will 404 if id not found */
  getTeam(id: number): Observable<Team> {
    const url = `${this.teamsUrl}/teams/${id}`;
    return this.http.get<Team>(url).pipe(
      tap((team: Team) => this.log(`fetched team id=${id} ${JSON.stringify(team)}`)),
      catchError(this.handleError<Team>(`getTeam id=${id}`))
    );
  }

  getTeamDeclartionPreview(): Observable<any> {
    const url = `${this.teamsUrl}/teams/download`;
    return this.http.get(url).pipe(
      tap(_ => this.log(`fetched team declaration download preview`)),
      catchError(this.handleError(`getTeamDelcartionPreview`))
    );
  }

  /** PUT: update the team on the server */
  updateTeam(team: Team): Observable<any> {
    const url = `${this.teamsUrl}/teams/${team.id}`;
    return this.http.put(url, team, this.httpOptions).pipe(
      tap(_ => this.log(`updated team id=${team.id}`)),
      catchError(this.handleError<any>('updateTeam'))
    );
  }

  updateTeamNumbers(teams: Team[], race: string): Observable<any> {
    const url = `${this.teamsUrl}/teams/numbers`;

    const teamNumbers: any[] = [];
    for (let i = 0; i < teams.length; i++) {
      teamNumbers.push({id: teams[i].id, number: teams[i].number});
    }

    return this.http.post(url, {'teams' : teamNumbers, 'race': race}, this.httpOptions).pipe(
      tap(_ => this.log(`updated team numbers`)),
      catchError(this.handleError<any>('updateTeamNumbers'))
    );
  }

  /** POST: add a new team to the server */
  addTeam(team: Team): Observable<Team> {
    const url = `${this.teamsUrl}/teams`;
    return this.http.post<Team>(url, team, this.httpOptions).pipe(
      tap((t: Team) => this.log(`added team w/ id=${t.id}`)),
      catchError(this.handleError<Team>('addTeam'))
    );
  }

  sendTeamDeclarations(email: string) {
    const url = `${this.teamsUrl}/teams/send`;
    return this.http.post(url, {'email': email}, this.httpOptions).pipe(
      tap(_ => this.log(`email sent to ${email}`)),
      catchError(this.handleError('sendTeamDeclarations'))
    );
  }

  /** DELETE: delete the team from the server */
  deleteTeam(team: Team | number): Observable<Team> {
    const id = typeof team == 'number' ? team : team.id;
    const url = `${this.teamsUrl}/teams/${id}`;

    return this.http.delete<Team>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted team id=${id}`)),
      catchError(this.handleError<Team>('deleteTeam'))
    );
  }

  private log(message: string) {
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
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
