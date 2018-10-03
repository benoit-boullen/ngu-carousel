import { AfterContentInit, AfterViewInit, ChangeDetectorRef, DoCheck, ElementRef, IterableChanges, IterableDiffer, IterableDiffers, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { NguCarouselDefDirective, NguCarouselOutlet } from './../ngu-carousel.directive';
import { NguCarouselStore } from './ngu-carousel';
import { Subscription } from 'rxjs';
export declare class NguCarousel extends NguCarouselStore implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, DoCheck {
    private _el;
    private _renderer;
    private _differs;
    private platformId;
    private cdr;
    _dataSubscription: Subscription;
    _dataDiffer: IterableDiffer<{}>;
    styleid: string;
    activePoint: number;
    isHovered: boolean;
    arrayChanges: IterableChanges<{}>;
    carouselInt: Subscription;
    listener1: () => void;
    listener2: () => void;
    listener3: () => void;
    listener8: () => void;
    _nodeOutlet: NguCarouselOutlet;
    pointNumbers: Array<any>;
    private directionSym;
    private carouselCssNode;
    private pointIndex;
    private withAnim;
    private inputs;
    private carouselLoad;
    private onMove;
    private _defaultNodeDef;
    private _defDirec;
    private carouselMain1;
    private nguItemsContainer;
    private touchContainer;
    private _intervalController$;
    private carousel;
    private onResize;
    private onScrolling;
    constructor(_el: ElementRef, _renderer: Renderer2, _differs: IterableDiffers, platformId: Object, cdr: ChangeDetectorRef);
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
    ngOnInit(): void;
    ngDoCheck(): void;
    _switchDataSource(dataSource: any): any;
    renderNodeChanges(data: any[], dataDiffer?: IterableDiffer<any>, viewContainer?: ViewContainerRef, parentData?: any): void;
    _getNodeDef(data: any, i: number): NguCarouselDefDirective<any>;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /** Used to reset the carousel */
    reset(withOutAnimation?: boolean): void;
    /** this function is used to scoll the carousel when point is clicked */
    moveTo(slide: number, withOutAnimation?: boolean): void;
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
    /** pause interval for specific time */
    /** animate the carousel items */
    private _carouselAnimator;
    /** control button for loop */
    private _buttonControl;
    /** Short form for setElementStyle */
    private _setStyle;
    /** For generating style tag */
    private _createStyleElem;
}
