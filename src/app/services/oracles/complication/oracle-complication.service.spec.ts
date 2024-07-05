import { TestBed } from '@angular/core/testing';

import { OracleComplicationService } from './oracle-complication.service';

describe('OracleComplicationService', () => {
  let service: OracleComplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleComplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
