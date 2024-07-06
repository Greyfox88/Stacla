import { TestBed } from '@angular/core/testing';

import { OracleStarfleetJAGMTService } from './oracle-starfleet-jag-mt.service';

describe('OracleStarfleetJAGMTService', () => {
  let service: OracleStarfleetJAGMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleStarfleetJAGMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
