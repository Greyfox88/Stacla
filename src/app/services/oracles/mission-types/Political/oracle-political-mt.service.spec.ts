import { TestBed } from '@angular/core/testing';

import { OraclePoliticalMTService } from './oracle-political-mt.service';

describe('OraclePoliticalMTService', () => {
  let service: OraclePoliticalMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OraclePoliticalMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
