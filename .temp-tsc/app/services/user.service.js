import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let UserService = class UserService {
    http;
    constructor(http) {
        this.http = http;
    }
    create(user) {
        const url = `${environment.baseUrl}/wp-json/ipswich-ekiden-team-declaration-api/v1/users`;
        return this.http.post(url, user);
    }
};
UserService = __decorate([
    Injectable()
], UserService);
export { UserService };
