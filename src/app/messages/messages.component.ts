import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  message: any;

  constructor(public messageService: MessageService) { }

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
}
