import { TestBed } from '@angular/core/testing';

import { DatumServiceService } from './datum-service.service';

describe('DatumServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatumServiceService = TestBed.get(DatumServiceService);
    expect(service).toBeTruthy();
  });
});
