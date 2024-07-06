import { TestBed } from '@angular/core/testing';

import { OracleDiplomacyMTService } from './oracle-diplomacy-mt.service';

describe('OracleDiplomacyMTService', () => {
  let service: OracleDiplomacyMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleDiplomacyMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
