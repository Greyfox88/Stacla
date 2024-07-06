import { TestBed } from '@angular/core/testing';

import { OracleResearchAndDevelopmentMTService } from './oracle-research-and-development-mt.service';

describe('OracleResearchAndDevelopmentMTService', () => {
  let service: OracleResearchAndDevelopmentMTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleResearchAndDevelopmentMTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
