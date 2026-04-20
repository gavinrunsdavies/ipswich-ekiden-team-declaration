import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let ContactService = class ContactService {
    http;
    constructor(http) {
        this.http = http;
    }
    message(message) {
        const url = `${environment.baseUrl}/wp-json/ipswich-ekiden-team-declaration-api/v1/message`;
        return this.http.post(url, message);
    }
};
ContactService = __decorate([
    Injectable()
], ContactService);
export { ContactService };
