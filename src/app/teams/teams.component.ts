import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Team } from '../models/team';
import { TeamService } from '../services/team.service';
import { FilterPipe } from '../filter.pipe';
import { TeamDetailComponent } from '../team-detail/team-detail.component';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-teams',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, NgxPaginationModule, FilterPipe, TeamDetailComponent, SpinnerComponent],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {

  @Input() race: string;
  @Input('title') title: string;

  currentPageNumber = 1;
  teams: Team[];
  selectedTeam: Team;
  searchString: string;
  searchableList = ['name', 'clubName', 'category'];
  loadingIndicator = true;

  constructor(private teamService: TeamService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.getTeams(this.race);
  }

  getTeams(race?: string): void {
    this.loadingIndicator = true;
    const raceToUse = race ?? this.race;
    this.teamService.getTeams(raceToUse)
      .subscribe({
        next: (teams) => {
          this.teams = teams;
          this.loadingIndicator = false;
          this.cdr.markForCheck();
        },
        error: (err) => {
          console.error('Error loading teams:', err);
          this.teams = [];
          this.loadingIndicator = false;
          this.cdr.markForCheck();
        }
      });
  }

  showTeam(team: Team): void {
    this.selectedTeam = team;
  }
}
