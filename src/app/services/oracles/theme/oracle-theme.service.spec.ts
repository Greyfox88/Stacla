import { TestBed } from '@angular/core/testing';

import { OracleThemeService } from '../oracle-theme.service';

describe('OracleThemeService', () => {
  let service: OracleThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracleThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
