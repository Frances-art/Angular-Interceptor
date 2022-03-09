import { TestBed } from '@angular/core/testing';

import { SharedHttpCacheService } from './http-cache.service';

describe('SharedHttpCacheService', () => {
  let service: SharedHttpCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedHttpCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
