import { AfterContentInit, AfterViewInit, ChangeDetectorRef, DoCheck, ElementRef, EventEmitter, IterableChanges, IterableDiffer, IterableDiffers, OnDestroy, OnInit, Renderer2, TrackByFunction } from '@angular/core';
import { Subscription } from 'rxjs';
import { NguCarouselStore } from './ngu-carousel';
import { NguCarouselService } from '../ngu-carousel.service';
import { NguCarouselOutlet, NguCarouselWrapperDirective } from '../ngu-carousel.directive';
export declare class NguCarousel<T> extends NguCarouselStore implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, DoCheck {
    private _el;
    private _renderer;
    private _differs;
    private platformId;
    private cdr;
    private carouselService;
    _dataSubscription: Subscription;
    _dataDiffer: IterableDiffer<{}>;
    styleid: string;
    activePoint: number;
    isHovered: boolean;
    arrayChanges: IterableChanges<{}>;
    carouselInt: Subscription;
    _nodeOutlet: NguCarouselOutlet;
    _carouselWrapper: NguCarouselWrapperDirective;
    pointNumbers: Array<any>;
    listener1: () => void;
    listener2: () => void;
    listener3: () => void;
    listener4: () => void;
    onMove: EventEmitter<NguCarousel<T>>;
    private _defaultNodeDef;
    private _defDirec;
    private directionSym;
    private carouselCssNode;
    private pointIndex;
    private withAnim;
    private inputs;
    private carouselLoad;
    private carouselMain1;
    private nguItemsContainer;
    private touchContainer;
    private _intervalController$;
    private carousel;
    private onResize;
    private onScrolling;
    private _trackByFn;
    constructor(_el: ElementRef, _renderer: Renderer2, _differs: IterableDiffers, platformId: Object, cdr: ChangeDetectorRef, carouselService: NguCarouselService);
    _dataSource: any;
    dataSource: any;
    /** The setter is used to catch the button if the button has ngIf
     * issue id #91
     */
    nextBtn: ElementRef;
    /** The setter is used to catch the button if the button has ngIf
     * issue id #91
     */
    prevBtn: ElementRef;
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize Items operations by identifying a Items based on its data
     * relative to the function to know if a Items should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     */
    trackBy: TrackByFunction<T>;
    ngOnInit(): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    /** Used to reset the carousel */
    reset(withOutAnimation?: boolean): void;
    /** this function is used to scoll the carousel when point is clicked */
    moveTo(slide: number, withOutAnimation?: boolean): void;
    ngOnDestroy(): void;
    private _switchDataSource;
    private renderNodeChanges;
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     */
    private _updateItemIndexContext;
    private _getNodeDef;
    private _observeRenderChanges;
    private _inputValidation;
    private _onResizing;
    /** Get Touch input */
    private _touch;
    /** handle touch input */
    private _touchHandling;
    private _setTouchTransfrom;
    private _setTransformFromTouch;
    /** this fn used to disable the interval when it is not on the viewport */
    private _onWindowScrolling;
    /** store data based on width of the screen for the carousel */
    private _storeCarouselData;
    /** Init carousel point */
    private _carouselPoint;
    /** change the active point in carousel */
    private _carouselPointActiver;
    /** set the style of the carousel based the inputs data */
    private _carouselSize;
    /** logic to scroll the carousel step 1 */
    private _carouselScrollOne;
    /** logic to scroll the carousel step 2 */
    private _carouselScrollTwo;
    /** boolean function for making isFirst and isLast */
    private _btnBoolean;
    private _transformString;
    /** set the transform style to scroll the carousel  */
    private _transformStyle;
    /** this will trigger the carousel to load the items */
    private _carouselLoadTrigger;
    /** generate Class for each carousel to set specific style */
    private _generateID;
    /** handle the auto slide */
    private _carouselInterval;
    private _updateItemIndexContextAni;
    /** animate the carousel items */
    private _carouselAnimator;
    private _removeAnimations;
    /** Short form for setElementStyle */
    private _setStyle;
    /** For generating style tag */
    private _createStyleElem;
}
