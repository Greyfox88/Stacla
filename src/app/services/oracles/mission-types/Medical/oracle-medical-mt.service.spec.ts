import { TestBed } from '@angular/core/testing';

import { OracleMedicalMTService } from '../Medical/oracle-medical-mt.service';

describe('OracleMedicalMTService', () => {
  let service: OracleMedicalMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleMedicalMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
