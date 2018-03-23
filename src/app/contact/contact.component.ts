import { Component } from '@angular/core';

import { MessageService } from '../services/message.service';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {

    model: any = {};
    loading = false;

    constructor(
        private contactService: ContactService,
        private messageService: MessageService) { }

    send() {
        this.loading = true;
        this.contactService.message(this.model)
            .subscribe(
            data => {
                this.messageService.success('Message sent. Thank you.', false);
            },
            error => {
                const message = 'ERROR: Failed to send message. Please try again.';
                this.messageService.error(message);
                this.loading = false;
            });
    }
}
