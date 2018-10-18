import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NguCarouselModule } from '../../projects/carousel/src/public_api';
import { ItemNumberComponent } from './item-number/item-number.component';

@NgModule({
  declarations: [AppComponent, ItemNumberComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NguCarouselModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
