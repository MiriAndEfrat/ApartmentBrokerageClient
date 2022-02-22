import { TestBed } from '@angular/core/testing';

import { SubscriberPropertyDetailsService } from './subscriber-property-details.service';

describe('SubscriberPropertyDetailsService', () => {
  let service: SubscriberPropertyDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriberPropertyDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
