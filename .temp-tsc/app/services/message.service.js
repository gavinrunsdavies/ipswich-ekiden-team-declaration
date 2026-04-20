import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
let MessageService = class MessageService {
    router;
    subject = new Subject();
    keepAfterNavigationChange = false;
    constructor(router) {
        this.router = router;
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    this.subject.next(null);
                }
            }
        });
    }
    success(message, keepAfterNavigationChange = false, timeout = 5) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message, timeout: timeout });
    }
    error(message, keepAfterNavigationChange = false, timeout = 5) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message, timeout: timeout });
    }
    getMessage() {
        return this.subject.asObservable();
    }
};
MessageService = __decorate([
    Injectable()
], MessageService);
export { MessageService };
