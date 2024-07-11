import { TestBed } from '@angular/core/testing';

import { FormSubscriptionService } from './form-subscription.service';

describe('FormSubscriptionService', () => {
  let service: FormSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
