import { TestBed } from '@angular/core/testing';

import { OracleBaseService } from './oracle-base.service';

describe('OraclebaseserviceService', () => {
  let service: OracleBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
