import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { JuniorsComponent } from './juniors/juniors.component';
import { SeniorsComponent } from './seniors/seniors.component';
import { AdminComponent } from './admin/admin.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { LoginRedirect } from './services/login-redirect.service';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { EnsureAdminUser } from './services/ensure-admin-user.service';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent, canActivate: [LoginRedirect] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [EnsureAuthenticated] },
  { path: 'seniors', component: SeniorsComponent },
  { path: 'juniors', component: JuniorsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'admin', component: AdminComponent, canActivate: [EnsureAdminUser] },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];