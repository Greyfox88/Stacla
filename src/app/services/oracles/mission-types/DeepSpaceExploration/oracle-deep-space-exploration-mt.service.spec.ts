import { TestBed } from '@angular/core/testing';

import { OracleDeepSpaceExplorationMTService } from './oracle-deep-space-exploration-mt.service';

describe('OracleDeepSpaceExplorationMTService', () => {
  let service: OracleDeepSpaceExplorationMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleDeepSpaceExplorationMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
