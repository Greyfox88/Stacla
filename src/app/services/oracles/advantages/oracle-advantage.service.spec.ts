import { TestBed } from '@angular/core/testing';

import { OracleAdvantageService } from './oracle-advantage.service';

describe('OracleAdvantageService', () => {
  let service: OracleAdvantageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleAdvantageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
