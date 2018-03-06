import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }  from './dashboard/dashboard.component';
import { RegisterComponent }  from './register/register.component';
import { HomeComponent }  from './home/home.component';
import { StatusComponent }  from './status/status.component';
import { LoginRedirect }  from './services/login-redirect.service';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';

const routes: Routes = [
  { path: 'register', component: RegisterComponent, canActivate: [LoginRedirect] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [EnsureAuthenticated] },
  { path: 'home', component: HomeComponent },      
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}