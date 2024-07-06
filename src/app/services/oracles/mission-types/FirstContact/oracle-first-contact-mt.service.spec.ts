import { TestBed } from '@angular/core/testing';

import { OracleFirstContactMTService } from './oracle-first-contact-mt.service';

describe('OracleFirstContactMTService', () => {
  let service: OracleFirstContactMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleFirstContactMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
