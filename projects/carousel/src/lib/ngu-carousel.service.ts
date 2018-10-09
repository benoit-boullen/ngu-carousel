import { Injectable } from '@angular/core';
import { NguCarousel } from './ngu-carousel/ngu-carousel.component';

@Injectable()
export class NguCarouselService {


  carousel: NguCarousel<any>;

  constructor() {

  }

  setCarousel(carousel: NguCarousel<any>) {
    this.carousel = carousel;
  }

  getCarousel(): NguCarousel<any> {
    return this.carousel;
  }


}
