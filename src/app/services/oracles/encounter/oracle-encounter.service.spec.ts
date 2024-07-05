import { TestBed } from '@angular/core/testing';

import { OracleEncounterService } from './oracle-encounter.service';

describe('OracleEncounterService', () => {
  let service: OracleEncounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleEncounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
