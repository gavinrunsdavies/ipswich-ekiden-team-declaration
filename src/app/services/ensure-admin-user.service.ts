import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class EnsureAdminUser implements CanActivate {
  constructor(private router: Router,
              private authenticationService: AuthService) {}

  // TODO
  canActivate(): boolean {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      this.authenticationService.logout();
      this.router.navigateByUrl('/');
      return false;
    }
  }
}