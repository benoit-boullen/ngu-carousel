import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { slider } from './slide-animation';
import { NguCarousel } from '../../projects/carousel/src/lib/ngu-carousel/ngu-carousel.component';
import { NguCarouselConfig } from '../../projects/carousel/src/public_api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  imgags = [
    'assets/bg.jpg',
    'assets/car.png',
    'assets/canberra.jpg',
    'assets/holi.jpg'
  ];
  public carouselTileItems: Array<any> = [{
    mediatype: 'video',
    thumbnails: {
      large: 'https://media.at2010.net/videotest/z/e/5/b05b3f865e62048/thumbnail_large.jpg'
    },
    attributes: {
      title: 'Title 1'
    },
    content: {
      contentitem_id: '1'
    }
  },
    {
      mediatype: 'video',
      thumbnails: {
        large: 'https://media.at2010.net/videotest/z/e/5/b05b3f865e62048/thumbnail_large.jpg'
      },
      attributes: {
        title: 'Title 1'
      },
      content: {
        contentitem_id: '1'
      }
    },
    {
      mediatype: 'video',
      thumbnails: {
        large: 'https://media.at2010.net/videotest/z/e/5/b05b3f865e62048/thumbnail_large.jpg'
      },
      attributes: {
        title: 'Title 1'
      },
      content: {
        contentitem_id: '1'
      }
    },
    {
      mediatype: 'video',
      thumbnails: {
        large: 'https://media.at2010.net/videotest/z/e/5/b05b3f865e62048/thumbnail_large.jpg'
      },
      attributes: {
        title: 'Title 1'
      },
      content: {
        contentitem_id: '1'
      }
    },
    {
      mediatype: 'video',
      thumbnails: {
        large: 'https://media.at2010.net/videotest/z/e/5/b05b3f865e62048/thumbnail_large.jpg'
      },
      attributes: {
        title: 'Title 1'
      },
      content: {
        contentitem_id: '1'
      }
    },
    {
      mediatype: 'video',
      thumbnails: {
        large: 'https://media.at2010.net/videotest/z/e/5/b05b3f865e62048/thumbnail_large.jpg'
      },
      attributes: {
        title: 'Title 1'
      },
      content: {
        contentitem_id: '1'
      }
    },
    {
      mediatype: 'video',
      thumbnails: {
        large: 'https://media.at2010.net/videotest/z/e/5/b05b3f865e62048/thumbnail_large.jpg'
      },
      attributes: {
        title: 'Title 1'
      },
      content: {
        contentitem_id: '1'
      }
    },
    {
      mediatype: 'video',
      thumbnails: {
        large: 'https://media.at2010.net/videotest/z/e/5/b05b3f865e62048/thumbnail_large.jpg'
      },
      attributes: {
        title: 'Title 1'
      },
      content: {
        contentitem_id: '1'
      }
    },
    {
      mediatype: 'video',
      thumbnails: {
        large: 'https://media.at2010.net/videotest/z/e/5/b05b3f865e62048/thumbnail_large.jpg'
      },
      attributes: {
        title: 'Title 1'
      },
      content: {
        contentitem_id: '1'
      }
    },
    {
      mediatype: 'video',
      thumbnails: {
        large: 'https://media.at2010.net/videotest/z/e/5/b05b3f865e62048/thumbnail_large.jpg'
      },
      attributes: {
        title: 'Title 1'
      },
      content: {
        contentitem_id: '1'
      }
    },
    {
      mediatype: 'video',
      thumbnails: {
        large: 'https://media.at2010.net/videotest/z/e/5/b05b3f865e62048/thumbnail_large.jpg'
      },
      attributes: {
        title: 'Title 1'
      },
      content: {
        contentitem_id: '1'
      }
    },
    {
      mediatype: 'video',
      thumbnails: {
        large: 'https://media.at2010.net/videotest/z/e/5/b05b3f865e62048/thumbnail_large.jpg'
      },
      attributes: {
        title: 'Title 1'
      },
      content: {
        contentitem_id: '1'
      }
    }];

  public listItems1: Array<any> = [6, 7, 8, 9, 10];
  public listItems2: Array<any> = [20];

  @ViewChild(NguCarousel)
  carousel: NguCarousel<any>;


  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: {xs: 1, sm: 1, md: 6, lg: 8, all: 0},
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

  public carouselTileItems$: Observable<number[]>;
  public carouselTileConfig: NguCarouselConfig = {
    grid: {xs: 1, sm: 1, md: 1, lg: 5, all: 0},
    speed: 250,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: {timing: 1500},
    animation: 'lazy'
  };
  tempData: any[];

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.tempData = [];
    this.carouselTileItems.forEach(el => {
      this.carouselTileLoad(el);
    });

    this.carouselTileItems$ = interval(500).pipe(
      startWith(-1),
      take(30),
      map(val => {
        const data = (this.tempData = [
          ...this.tempData,
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        ]);
        return data;
      })
    );
  }

  // switchMap(val => {
  //   const data =
  //     val >= 5
  //       ? this.shuffle(this.tempData)
  //       : (this.tempData = [
  //           ...this.tempData,
  //           this.imgags[Math.floor(Math.random() * this.imgags.length)]
  //         ]);
  //   return of(data);
  // })

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

  shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
