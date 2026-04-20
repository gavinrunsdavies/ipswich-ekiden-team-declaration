import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MessagesComponent = class MessagesComponent {
    messageService;
    message;
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() {
        this.messageService.getMessage().subscribe(message => {
            this.message = message;
            let timeout = 5000;
            if (message && message.timeout > 0) {
                timeout = message.timeout * 1000;
            }
            setTimeout(() => this.message = null, timeout);
        });
    }
};
MessagesComponent = __decorate([
    Component({
        selector: 'app-messages',
        templateUrl: './messages.component.html',
        styleUrls: ['./messages.component.css']
    })
], MessagesComponent);
export { MessagesComponent };
