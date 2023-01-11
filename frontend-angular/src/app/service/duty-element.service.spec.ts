import { TestBed } from '@angular/core/testing';

import { DutyElementService } from './duty-element.service';

describe('DutyElementService', () => {
  let service: DutyElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DutyElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
