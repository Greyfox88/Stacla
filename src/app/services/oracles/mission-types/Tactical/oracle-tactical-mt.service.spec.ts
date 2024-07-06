import { TestBed } from '@angular/core/testing';

import { OracleTacticalMTService } from './oracle-tactical-mt.service';

describe('OracleTacticalMTService', () => {
  let service: OracleTacticalMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleTacticalMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
