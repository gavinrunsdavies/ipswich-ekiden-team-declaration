import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { User } from '../models/user';
 
@Injectable()
export class UserService {
    private BASE_URL: string = 'http://www.ipswichekiden.co.uk';
    
    constructor(private http: HttpClient) { }
 
    create(user: User) {
        let url: string = `${this.BASE_URL}/wp-json/ipswich-ekiden-team-declaration-api/v1/users`;
        return this.http.post(url, user);
    }
}