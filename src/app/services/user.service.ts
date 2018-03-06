import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { User } from '../models/user';

import { environment } from '../../environments/environment';
 
@Injectable()
export class UserService {
    
    constructor(private http: HttpClient) { }
 
    create(user: User) {
        let url: string = `${environment.baseUrl}/wp-json/ipswich-ekiden-team-declaration-api/v1/users`;
        return this.http.post(url, user);
    }
}