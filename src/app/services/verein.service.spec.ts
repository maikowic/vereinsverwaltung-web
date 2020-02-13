import { TestBed } from '@angular/core/testing';

import { VereinService } from './verein.service';

describe('VereinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VereinService = TestBed.get(VereinService);
    expect(service).toBeTruthy();
  });
});
