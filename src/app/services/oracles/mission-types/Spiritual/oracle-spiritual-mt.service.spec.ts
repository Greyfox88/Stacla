import { TestBed } from '@angular/core/testing';

import { OracleSpiritualMTService } from './oracle-spiritual-mt.service';

describe('OracleSpiritualMTService', () => {
  let service: OracleSpiritualMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleSpiritualMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
