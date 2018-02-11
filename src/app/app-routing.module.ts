import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { TeamsComponent }      from './teams/teams.component';
import { TeamDetailComponent }  from './team-detail/team-detail.component';
import { LoginComponent }  from './login/login.component';
import { RegisterComponent }  from './register/register.component';
import { HomeComponent }  from './home/home.component';
import { StatusComponent }  from './status/status.component';
import { LoginRedirect }  from './services/login-redirect.service';

const routes: Routes = [
 // { path: 'login', component: LoginComponent, canActivate: [LoginRedirect] },
  { path: 'register', component: RegisterComponent, canActivate: [LoginRedirect] },
  //{ path: 'dashboard', component: DashboardComponent },
  //{ path: 'detail/:id', component: TeamDetailComponent },
 // { path: 'teams', component: TeamsComponent },
  { path: 'home', component: HomeComponent },    
  //{ path: 'status', component: StatusComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}