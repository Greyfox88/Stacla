import { TestBed } from '@angular/core/testing';

import { OracleEscortAndEvacuationMTService } from './oracle-escort-and-evacuation-mt.service';

describe('OracleEscortAndEvacuationMTService', () => {
  let service: OracleEscortAndEvacuationMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleEscortAndEvacuationMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
