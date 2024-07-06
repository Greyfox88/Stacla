import { TestBed } from '@angular/core/testing';

import { OracleShowTheFlagMTService } from './oracle-show-the-flag-mt.service';

describe('OracleShowTheFlagMTService', () => {
  let service: OracleShowTheFlagMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleShowTheFlagMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
