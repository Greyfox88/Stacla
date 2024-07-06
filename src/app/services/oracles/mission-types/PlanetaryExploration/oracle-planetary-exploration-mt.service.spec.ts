import { TestBed } from '@angular/core/testing';

import { OraclePlanetaryExplorationMTService } from './oracle-planetary-exploration-mt.service';

describe('OraclePlanetaryExplorationMTService', () => {
  let service: OraclePlanetaryExplorationMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OraclePlanetaryExplorationMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
