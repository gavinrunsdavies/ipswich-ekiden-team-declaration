import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { User } from '../models/user';
 
@Injectable()
export class UserService {
    private BASE_URL: string = 'http://localhost:5000/api';
    
    constructor(private http: HttpClient) { }
 
    getAll() {
        return this.http.get<User[]>('/api/users');
    }
 
    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }
 
    create(user: User) {
        let url: string = `${this.BASE_URL}/users`;
        return this.http.post(url, user);
    }
 
    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }
 
    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}