import { TestBed } from '@angular/core/testing';

import { OracleMomentumService } from './oracle-momentum.service';

describe('OracleMomentumService', () => {
  let service: OracleMomentumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleMomentumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
