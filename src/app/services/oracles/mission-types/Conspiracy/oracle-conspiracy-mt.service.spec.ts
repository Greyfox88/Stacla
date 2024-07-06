import { TestBed } from '@angular/core/testing';

import { OracleConspiracyMTService } from './oracle-conspiracy-mt.service';

describe('OracleConspiracyMTService', () => {
  let service: OracleConspiracyMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleConspiracyMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
