import { Injectable } from '@angular/core';
import { NguCarousel } from './ngu-carousel/ngu-carousel.component';

@Injectable()
export class NguCarouselService {


  carousel: NguCarousel;

  constructor() {

  }

  setCarousel(carousel: NguCarousel) {
    this.carousel = carousel;
  }

  getCarousel(): NguCarousel {
    return this.carousel;
  }


}
