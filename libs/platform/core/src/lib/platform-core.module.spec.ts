import { async, TestBed } from '@angular/core/testing';
import { PlatformCoreModule } from './platform-core.module';

describe('PlatformCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PlatformCoreModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PlatformCoreModule).toBeDefined();
  });
});
