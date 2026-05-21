import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, NgbAlertModule],
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
