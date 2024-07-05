import { TestBed } from '@angular/core/testing';

import { OracleIncidentService } from './oracle-incident.service';

describe('OracleIncidentService', () => {
  let service: OracleIncidentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleIncidentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
