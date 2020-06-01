import { TestBed } from '@angular/core/testing';

import { HostRouterService } from './host-router.service';

describe('HostRouterService', () => {
  let service: HostRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
