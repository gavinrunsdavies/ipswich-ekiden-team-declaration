import { TestBed, inject } from '@angular/core/testing';

import { EnsureAdminUserService } from './ensure-admin-user.service';

describe('EnsureAdminUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnsureAdminUserService]
    });
  });

  it('should be created', inject([EnsureAdminUserService], (service: EnsureAdminUserService) => {
    expect(service).toBeTruthy();
  }));
});
