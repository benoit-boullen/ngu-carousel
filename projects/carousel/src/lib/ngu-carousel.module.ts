import {
  NguCarouselDefDirective,
  NguCarouselItemDirective,
  NguCarouselNextDirective,
  NguCarouselOutlet,
  NguCarouselPointDirective,
  NguCarouselPrevDirective, NguCarouselWrapperDirective
} from './ngu-carousel.directive';
import { NguItemComponent } from './ngu-item/ngu-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarousel } from './ngu-carousel/ngu-carousel.component';
import { NguTileComponent } from './ngu-tile/ngu-tile.component';
import { NguCarouselService } from './ngu-carousel.service';

@NgModule({
  imports: [CommonModule],
  exports: [
    NguCarousel,
    NguItemComponent,
    NguTileComponent,
    NguCarouselPointDirective,
    NguCarouselItemDirective,
    NguCarouselNextDirective,
    NguCarouselPrevDirective,
    NguCarouselDefDirective,
    NguCarouselWrapperDirective,
    NguCarouselOutlet
  ],
  declarations: [
    NguCarousel,
    NguItemComponent,
    NguTileComponent,
    NguCarouselPointDirective,
    NguCarouselItemDirective,
    NguCarouselNextDirective,
    NguCarouselPrevDirective,
    NguCarouselDefDirective,
    NguCarouselWrapperDirective,
    NguCarouselOutlet
  ],
  providers: [
    NguCarouselService
  ]
})
export class NguCarouselModule {
}
