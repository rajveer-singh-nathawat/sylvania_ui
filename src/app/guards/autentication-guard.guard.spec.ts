import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { AutenticationGuardGuard } from './autentication-guard.guard';

describe('AutenticationGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticationGuardGuard]
    });
  });

  it('should ...', inject([AutenticationGuardGuard], (guard: AutenticationGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
