import { TestBed } from '@angular/core/testing';

import { WeekSetOfRulesService } from './week-set-of-rules.service';

describe('WeekSetOfRulesService', () => {
  let service: WeekSetOfRulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekSetOfRulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
