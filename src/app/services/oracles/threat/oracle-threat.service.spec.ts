import { TestBed } from '@angular/core/testing';

import { OracleThreatService } from './oracle-threat.service';

describe('OracleThreatService', () => {
  let service: OracleThreatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleThreatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
