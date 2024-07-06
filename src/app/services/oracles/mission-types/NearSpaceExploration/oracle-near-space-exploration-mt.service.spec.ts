import { TestBed } from '@angular/core/testing';

import { OracleNearSpaceExplorationMTService } from './oracle-near-space-exploration-mt.service';

describe('OracleNearSpaceExplorationMTService', () => {
  let service: OracleNearSpaceExplorationMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleNearSpaceExplorationMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
