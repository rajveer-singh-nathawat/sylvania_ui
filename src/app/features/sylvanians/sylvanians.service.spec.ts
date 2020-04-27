import { TestBed } from '@angular/core/testing';

import { SylvaniansService } from './sylvanians.service';

describe('SylvaniansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SylvaniansService = TestBed.get(SylvaniansService);
    expect(service).toBeTruthy();
  });
});
