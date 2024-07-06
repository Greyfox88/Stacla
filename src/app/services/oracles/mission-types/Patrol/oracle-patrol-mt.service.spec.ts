import { TestBed } from '@angular/core/testing';

import { OraclePatrolMTService } from './oracle-patrol-mt.service';

describe('OraclePatrolMTService', () => {
  let service: OraclePatrolMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OraclePatrolMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
