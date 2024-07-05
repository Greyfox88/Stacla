import { TestBed } from '@angular/core/testing';

import { OracleMissionTypesService } from './oracle-mission-types.service';

describe('OracleMissionTypesService', () => {
  let service: OracleMissionTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleMissionTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
