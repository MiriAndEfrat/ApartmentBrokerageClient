import { TestBed } from '@angular/core/testing';

import { SubscriptionPerUserService } from './subscription-per-user.service';

describe('SubscriptionPerUserService', () => {
  let service: SubscriptionPerUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptionPerUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
