import { Component, OnInit } from '@angular/core';
import { TeamsComponent } from '../teams/teams.component';

@Component({
  selector: 'app-seniors',
  standalone: true,
  imports: [TeamsComponent],
  templateUrl: './seniors.component.html',
  styleUrls: ['./seniors.component.css']
})
export class SeniorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
