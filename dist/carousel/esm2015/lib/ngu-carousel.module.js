/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NguCarouselPointDirective, NguCarouselItemDirective, NguCarouselNextDirective, NguCarouselPrevDirective, NguCarouselDefDirective, NguCarouselOutlet } from './ngu-carousel.directive';
import { NguItemComponent } from './ngu-item/ngu-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarousel } from './ngu-carousel/ngu-carousel.component';
import { NguTileComponent } from './ngu-tile/ngu-tile.component';
import { NguCarouselService } from './ngu-carousel.service';
export class NguCarouselModule {
}
NguCarouselModule.decorators = [
    { type: NgModule, args: [{
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
                    NguCarouselOutlet
                ],
                providers: [
                    NguCarouselService
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1LWNhcm91c2VsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImxpYi9uZ3UtY2Fyb3VzZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHdCQUF3QixFQUN4Qix3QkFBd0IsRUFDeEIsd0JBQXdCLEVBQ3hCLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUtqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUE4QjVELE1BQU07OztZQTVCTCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIseUJBQXlCO29CQUN6Qix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtvQkFDeEIsd0JBQXdCO29CQUN4Qix1QkFBdUI7b0JBQ3ZCLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLHlCQUF5QjtvQkFDekIsd0JBQXdCO29CQUN4Qix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtvQkFDeEIsdUJBQXVCO29CQUN2QixpQkFBaUI7aUJBQ2xCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxrQkFBa0I7aUJBQ25CO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxJdGVtRGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxPdXRsZXRcclxufSBmcm9tICcuL25ndS1jYXJvdXNlbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOZ3VJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3UtaXRlbS9uZ3UtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1xyXG4gIEhhbW1lckdlc3R1cmVDb25maWcsXHJcbiAgSEFNTUVSX0dFU1RVUkVfQ09ORklHXHJcbn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5ndUNhcm91c2VsIH0gZnJvbSAnLi9uZ3UtY2Fyb3VzZWwvbmd1LWNhcm91c2VsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5ndVRpbGVDb21wb25lbnQgfSBmcm9tICcuL25ndS10aWxlL25ndS10aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5ndUNhcm91c2VsU2VydmljZSB9IGZyb20gJy4vbmd1LWNhcm91c2VsLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOZ3VDYXJvdXNlbCxcclxuICAgIE5ndUl0ZW1Db21wb25lbnQsXHJcbiAgICBOZ3VUaWxlQ29tcG9uZW50LFxyXG4gICAgTmd1Q2Fyb3VzZWxQb2ludERpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxPdXRsZXRcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTmd1Q2Fyb3VzZWwsXHJcbiAgICBOZ3VJdGVtQ29tcG9uZW50LFxyXG4gICAgTmd1VGlsZUNvbXBvbmVudCxcclxuICAgIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsT3V0bGV0XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE5ndUNhcm91c2VsU2VydmljZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsTW9kdWxlIHt9XHJcbiJdfQ==