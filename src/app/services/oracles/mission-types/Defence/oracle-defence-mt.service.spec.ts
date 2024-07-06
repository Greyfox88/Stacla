import { TestBed } from '@angular/core/testing';

import { OracleDefenceMTService } from './oracle-defence-mt.service';

describe('OracleDefenceMTService', () => {
  let service: OracleDefenceMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleDefenceMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
