import { TestBed } from '@angular/core/testing';

import { TravelTimeService } from './travel-time.service';

describe('TravelTimeService', () => {
  let service: TravelTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
