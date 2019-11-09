import { TestBed } from '@angular/core/testing';

import { SmartGarbageService } from './smart-garbage.service';

describe('SmartGarbageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmartGarbageService = TestBed.get(SmartGarbageService);
    expect(service).toBeTruthy();
  });
});
