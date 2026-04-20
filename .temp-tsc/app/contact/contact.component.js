import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ContactComponent = class ContactComponent {
    contactService;
    messageService;
    model = {};
    loading = false;
    constructor(contactService, messageService) {
        this.contactService = contactService;
        this.messageService = messageService;
    }
    send() {
        this.loading = true;
        this.contactService.message(this.model)
            .subscribe(data => {
            this.messageService.success('Message sent. Thank you.', false);
            this.loading = false;
        }, error => {
            const message = 'ERROR: Failed to send message. Please try again.';
            this.messageService.error(message);
            this.loading = false;
        });
    }
};
ContactComponent = __decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.css']
    })
], ContactComponent);
export { ContactComponent };
