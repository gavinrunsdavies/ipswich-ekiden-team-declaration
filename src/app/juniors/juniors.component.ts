import { Component, OnInit } from '@angular/core';
import { TeamsComponent } from '../teams/teams.component';

@Component({
  selector: 'app-juniors',
  standalone: true,
  imports: [TeamsComponent],
  templateUrl: './juniors.component.html',
  styleUrls: ['./juniors.component.css']
})
export class JuniorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
