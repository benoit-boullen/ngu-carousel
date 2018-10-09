import { TestBed } from '@angular/core/testing';

import { NguCarouselService } from './ngu-carousel.service';

describe('NguCarouselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NguCarouselService = TestBed.get(NguCarouselService);
    expect(service).toBeTruthy();
  });
});
