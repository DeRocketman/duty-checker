import { TestBed } from '@angular/core/testing';

import { CheckOptionsService } from './check-options.service';

describe('CheckOptionsService', () => {
  let service: CheckOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
