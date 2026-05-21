import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { NgxPaginationModule } from 'ngx-pagination';


import { Team } from '../models/team';
import { AuthService } from '../services/auth.service';
import { TeamService } from '../services/team.service';
import { MessageService } from '../services/message.service';
import { FilterPipe } from '../filter.pipe';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NgxPaginationModule, FilterPipe, SpinnerComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  seniorsCurrentPageNumber = 1;
  juniorsCurrentPageNumber = 1;
  seniorTeamsCurrentPageNumber = 1;
  juniorTeamsCurrentPageNumber = 1;
  seniorsSearchString: string;
  juniorsSearchString: string;
  searchableList = ['name', 'clubName'];
  seniorData: any[] = [];
  juniorData: any[] = [];
  seniorTeams: Team[] = [];
  juniorTeams: Team[] = [];
  juniorHeaders: string[] = [];
  seniorHeaders: string[] = [];
  loadingIndicator: { seniors: boolean; juniors: boolean; preview: boolean } = {
    seniors: false,
    juniors: false,
    preview: false
  };
  formSubmittedIndicator = false;
  download: any = {};

  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private messageService: MessageService,
    private teamService: TeamService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.authenticationService.ensureAuthenticated()
      .subscribe({
        next: user => {
          if (user.isAdmin) {
            this.getPreview();
            this.getTeams('seniors');
            this.getTeams('juniors');
          } else {
            this.router.navigate(['/']);
          }
        },
        error: () => {
          this.router.navigate(['/']);
        }});
  }

  getTeams(race: string): void {
    this.loadingIndicator[race] = true;
    this.teamService.getTeams(race)
      .pipe(finalize(() => {
        console.log(`getTeams finalize: setting loadingIndicator[${race}] to false`);
        this.loadingIndicator[race] = false;
        this.cdr.detectChanges();
      }))
      .subscribe(teams => {
        if (race == 'seniors') {
          this.seniorTeams = teams;
        } else {
          this.juniorTeams = teams;
        }
      });
  }

  getPreview(): void {
    this.loadingIndicator.preview = true;
    this.teamService.getTeamDeclartionPreview()
      .pipe(finalize(() => {
        this.loadingIndicator.preview = false;
        this.cdr.detectChanges();
      }))
      .subscribe(data => {
        this.seniorData = data.seniors;
        if (data.seniors.length > 0) {
          this.seniorHeaders = Object.getOwnPropertyNames(data.seniors[0]);
        }

        this.juniorData = data.juniors;
        if (data.juniors.length > 0) {
          this.juniorHeaders = Object.getOwnPropertyNames(data.juniors[0]);
        }
      });
  }

  send(): void {
    this.formSubmittedIndicator = true;
    this.teamService.sendTeamDeclarations(this.download.email)
      .pipe(finalize(() => {
        this.formSubmittedIndicator = false;
        this.cdr.detectChanges();
      }))
      .subscribe(() => {
        this.messageService.success(`Email sent to ${this.download.email} with team declaratiosn attached.`, true);
      });
  }

  updateSeniorTeamNumbers(): void {
    const duplicates = this.validateTeamNumbers(this.seniorTeams);
    if (duplicates.length > 0) {
      this.messageService.error(`Invalid team numbers. Duplicate team numbers declared: ${duplicates.join(', ')}.`, true, 60);
      return;
    }
    this.teamService.updateTeamNumbers(this.seniorTeams, 'seniors')
      .subscribe({
        next: teams => {
          this.seniorTeams = teams;
          this.messageService.success(`Senior team numbers updated.`, true);
        },
        error: () => {
          this.messageService.error(`Error updating senior team numbers.`, true);
        }
      });
  }

  updateJuniorTeamNumbers(): void {
    const duplicates = this.validateTeamNumbers(this.juniorTeams);
    if (duplicates.length > 0) {
      this.messageService.error(`Invalid team numbers. Duplicate team numbers declared: ${duplicates.join(', ')}.`, true, 60);
      return;
    }
    this.teamService.updateTeamNumbers(this.juniorTeams, 'juniors')
      .subscribe({
        next: teams => {
          this.juniorTeams = teams;
          this.messageService.success(`Junior team numbers updated.`, true);
        },
        error: () => {
          this.messageService.error(`Error updating senior team numbers.`, true);
        }
      });
  }

  private validateTeamNumbers(teams: Team[]) {
    const duplicates: number[] = [];
    for (let i = 0; i < teams.length - 1; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        if (i !== j && teams[i].number == teams[j].number && teams[i].number != 0) {
          duplicates.push(teams[i].number);
        }
      }
    }

    return duplicates;
  }
}
