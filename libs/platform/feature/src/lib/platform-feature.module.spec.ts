import { async, TestBed } from '@angular/core/testing';
import { PlatformFeatureModule } from './platform-feature.module';

describe('PlatformFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PlatformFeatureModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PlatformFeatureModule).toBeDefined();
  });
});
