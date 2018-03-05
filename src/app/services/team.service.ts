import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Team } from '../models/team';
import { Club } from '../models/club';
import { MessageService } from './message.service';
import { environment } from '../../environments/environment';

@Injectable()
export class TeamService {
  
  private teamsUrl: string = `${environment.baseUrl}/wp-json/ipswich-ekiden-team-declaration-api/v1`;
  
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getTeams(): Observable<Team[]> {  
    const url = `${this.teamsUrl}/teams`;  
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
      tap((team: Team)=> this.log(`fetched team id=${id} ${JSON.stringify(team)}`)),
      catchError(this.handleError<Team>(`getTeam id=${id}`))
    );
  }
  
  /** PUT: update the team on the server */
  updateTeam (team: Team): Observable<any> {
    const url = `${this.teamsUrl}/teams/${team.id}`;
    return this.http.put(url, team, this.httpOptions).pipe(
      tap(_ => this.log(`updated team id=${team.id}`)),
      catchError(this.handleError<any>('updateTeam'))
    );
  }
  
  /** POST: add a new team to the server */
  addTeam (team: Team): Observable<Team> {
    const url = `${this.teamsUrl}/teams`;
    return this.http.post<Team>(url, team, this.httpOptions).pipe(
      tap((team: Team) => this.log(`added team w/ id=${team.id}`)),
      catchError(this.handleError<Team>('addTeam'))
    );
  }
  
  /** DELETE: delete the team from the server */
  deleteTeam (team: Team | number): Observable<Team> {
    const id = typeof team === 'number' ? team : team.id;
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
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
