import { TestBed } from '@angular/core/testing';

import { OracleAidAndReliefMTService } from './oracle-aid-and-relief-mt.service';

describe('OracleAidAndReliefMTService', () => {
  let service: OracleAidAndReliefMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleAidAndReliefMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
