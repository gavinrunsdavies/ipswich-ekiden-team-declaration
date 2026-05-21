import { TestBed, inject } from '@angular/core/testing';

import { LoginRedirect } from './login-redirect.service';

describe('LoginRedirect', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginRedirect]
    });
  });

  it('should be created', inject([LoginRedirect], (service: LoginRedirect) => {
    expect(service).toBeTruthy();
  }));
});

