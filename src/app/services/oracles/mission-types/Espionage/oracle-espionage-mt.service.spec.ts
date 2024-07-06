import { TestBed } from '@angular/core/testing';

import { OracleEspionageMTService } from './oracle-espionage-mt.service';

describe('OracleEspionageMTService', () => {
  let service: OracleEspionageMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleEspionageMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
