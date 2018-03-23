import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ContactMessage } from '../models/contact-message';

import { environment } from '../../environments/environment';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  message(message: ContactMessage) {
    const url = `${environment.baseUrl}/wp-json/ipswich-ekiden-team-declaration-api/v1/message`;
    return this.http.post(url, message);
  }
}
