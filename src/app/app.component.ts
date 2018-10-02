import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
  ChangeDetectorRef,
  ViewChild
} from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '../../projects/carousel/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  imgags = [
    'assets/bg.jpg',
    'assets/car.png',
    'assets/canberra.jpg',
    'assets/holi.jpg'
  ];
  public carouselTileItems: Array<any> = [0, 1, 2, 3, 4, 5];

  public listItems1: Array<any> = [6, 7, 8, 9, 10];
  public listItems2: Array<any> = [20];

  @ViewChild(NguCarousel)
  carousel: NguCarousel;

  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: {xs: 1, sm: 1, md: 3, lg: 3, all: 400},
    slide: 1,
    speed: 350,
    interval: {
      timing: 3000,
      initialDelay: 1000
    },
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    loop: true,
    touch: true,
    animation: 'lazy',
    easing: 'cubic-bezier(.17,.67,.83,.67)'
  };

  constructor(private cdr: ChangeDetectorRef) {}


  ngOnInit() {
    this.carouselTileItems.forEach(el => {
      this.carouselTileLoad(el);
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  changeToItem1() {
    this.carouselTileItems = this.listItems1;
    this.carousel.reset();
  }

  changeToItem2() {
    this.carouselTileItems = this.listItems2;
    this.carousel.reset();
  }

  public carouselTileLoad(j) {
    // console.log(this.carouselTiles[j]);
    const len = this.carouselTiles[j].length;
    if (len <= 30) {
      for (let i = len; i < len + 100; i++) {
        this.carouselTiles[j].push(
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        );
      }
    }
  }
}
