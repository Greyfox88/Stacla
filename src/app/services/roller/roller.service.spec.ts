import { TestBed } from '@angular/core/testing';

import { RollerService } from './roller.service';

describe('RollerService', () => {
  let service: RollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
