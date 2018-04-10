import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { User } from '../models/user';

@Injectable()
export class EnsureAdminUser implements CanActivate {
  constructor(private router: Router,
    private authenticationService: AuthService) { }

  canActivate(): boolean {
    const localStorageCurrentUser = localStorage.getItem('currentUser');
    if (localStorageCurrentUser) {
      const user = JSON.parse(localStorageCurrentUser);
      if (user.isAdmin) {
        return true;
      }
    }

    // Default logout
    this.authenticationService.logout();
    this.router.navigateByUrl('/');
    return false;
  }
}
