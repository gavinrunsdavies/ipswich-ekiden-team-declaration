import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  isLoggedIn: boolean = false;
  
  constructor() {}
  
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
          this.isLoggedIn = true;
        }
    }  
}