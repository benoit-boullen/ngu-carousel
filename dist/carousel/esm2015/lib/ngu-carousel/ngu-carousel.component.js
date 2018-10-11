/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Inject, Input, isDevMode, IterableDiffers, Output, PLATFORM_ID, QueryList, Renderer2, ViewChild } from '@angular/core';
import { empty, fromEvent, interval, merge, Observable, of, Subject } from 'rxjs';
import { mapTo, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NguCarouselConfig, NguCarouselOutletContext, NguCarouselStore } from './ngu-carousel';
import { NguCarouselService } from '../ngu-carousel.service';
import { NguCarouselDefDirective, NguCarouselNextDirective, NguCarouselOutlet, NguCarouselPrevDirective } from '../ngu-carousel.directive';
/**
 * @template T
 */
// tslint:disable-next-line:component-class-suffix
export class NguCarousel extends NguCarouselStore {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _differs
     * @param {?} platformId
     * @param {?} cdr
     * @param {?} carouselService
     */
    constructor(_el, _renderer, _differs, platformId, cdr, carouselService) {
        super();
        this._el = _el;
        this._renderer = _renderer;
        this._differs = _differs;
        this.platformId = platformId;
        this.cdr = cdr;
        this.carouselService = carouselService;
        this.isHovered = false;
        this.pointNumbers = [];
        this.withAnim = true;
        this.carouselLoad = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.onMove = new EventEmitter();
        this._intervalController$ = new Subject();
        this.carouselService.setCarousel(this);
    }
    /**
     * @return {?}
     */
    get dataSource() {
        return this._dataSource;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set dataSource(data) {
        if (data) {
            // console.log(data, this.dataSource);
            // this.isFirstss++;
            this._switchDataSource(data);
        }
    }
    /**
     * The setter is used to catch the button if the button has ngIf
     * issue id #91
     * @param {?} btn
     * @return {?}
     */
    set nextBtn(btn) {
        this.listener2 && this.listener2();
        if (btn) {
            this.listener2 = this._renderer.listen(btn.nativeElement, 'click', () => this._carouselScrollOne(1));
        }
    }
    /**
     * The setter is used to catch the button if the button has ngIf
     * issue id #91
     * @param {?} btn
     * @return {?}
     */
    set prevBtn(btn) {
        this.listener1 && this.listener1();
        if (btn) {
            this.listener1 = this._renderer.listen(btn.nativeElement, 'click', () => this._carouselScrollOne(0));
        }
    }
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize Items operations by identifying a Items based on its data
     * relative to the function to know if a Items should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     * @return {?}
     */
    get trackBy() {
        return this._trackByFn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    set trackBy(fn) {
        if (isDevMode() &&
            fn != null &&
            typeof fn !== 'function' &&
            (/** @type {?} */ (console)) &&
            (/** @type {?} */ (console.warn))) {
            console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
        }
        this._trackByFn = fn;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._dataDiffer = this._differs
            .find([])
            .create((_i, item) => {
            return this.trackBy ? this.trackBy(item.dataIndex, item.data) : item;
        });
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this.arrayChanges = this._dataDiffer.diff(this.dataSource);
        if (this.arrayChanges && this._defDirec) {
            // console.log('Changes detected!');
            this._observeRenderChanges();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.carousel = this._el.nativeElement;
        this._inputValidation();
        this.carouselCssNode = this._createStyleElem();
        // this._buttonControl();
        if (window) {
            this._carouselInterval();
            if (!this.vertical.enabled) {
                this._touch();
            }
            this.listener3 = this._renderer.listen('window', 'resize', event => {
                this._onResizing(event);
            });
            this._onWindowScrolling();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._observeRenderChanges();
        this.cdr.markForCheck();
    }
    /**
     * Used to reset the carousel
     * @param {?=} withOutAnimation
     * @return {?}
     */
    reset(withOutAnimation) {
        withOutAnimation && (this.withAnim = false);
        this.carouselCssNode.innerHTML = '';
        this.moveTo(0);
        this._carouselPoint();
    }
    /**
     * this function is used to scoll the carousel when point is clicked
     * @param {?} slide
     * @param {?=} withOutAnimation
     * @return {?}
     */
    moveTo(slide, withOutAnimation) {
        // slide = slide - 1;
        withOutAnimation && (this.withAnim = false);
        if (this.activePoint !== slide && slide < this.pointIndex) {
            /** @type {?} */
            let slideremains;
            /** @type {?} */
            const btns = this.currentSlide < slide ? 1 : 0;
            switch (slide) {
                case 0:
                    this._btnBoolean(1, 0);
                    slideremains = slide * this.slideItems;
                    break;
                case this.pointIndex - 1:
                    this._btnBoolean(0, 1);
                    slideremains = this.dataSource.length - this.items;
                    break;
                default:
                    this._btnBoolean(0, 0);
                    slideremains = slide * this.slideItems;
            }
            this._carouselScrollTwo(btns, slideremains, this.speed);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // clearInterval(this.carouselInt);
        this.carouselInt && this.carouselInt.unsubscribe();
        this._intervalController$.unsubscribe();
        this.carouselLoad.complete();
        this.onMove.complete();
        /** remove listeners */
        for (let i = 1; i <= 4; i++) {
            /** @type {?} */
            const str = `listener${i}`;
            this[str] && this[str]();
        }
    }
    /**
     * @param {?} dataSource
     * @return {?}
     */
    _switchDataSource(dataSource) {
        this._dataSource = dataSource;
        if (this._defDirec) {
            this._observeRenderChanges();
        }
    }
    /**
     * @param {?} data
     * @param {?=} viewContainer
     * @return {?}
     */
    renderNodeChanges(data, viewContainer = this._nodeOutlet.viewContainer) {
        if (!this.arrayChanges)
            return;
        this.arrayChanges.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
            // const node = this._defDirec.find(items => item.item);
            /** @type {?} */
            const node = this._getNodeDef(data[currentIndex], currentIndex);
            if (item.previousIndex == null) {
                /** @type {?} */
                const context = new NguCarouselOutletContext(data[currentIndex]);
                context.index = currentIndex;
                viewContainer.createEmbeddedView(node.template, context, currentIndex);
            }
            else if (currentIndex == null) {
                viewContainer.remove(adjustedPreviousIndex);
            }
            else {
                /** @type {?} */
                const view = viewContainer.get(adjustedPreviousIndex);
                viewContainer.move(view, currentIndex);
            }
        });
        this._updateItemIndexContext();
        if (this.carousel) {
            this._storeCarouselData();
        }
        // console.log(this.dataSource);
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     * @return {?}
     */
    _updateItemIndexContext() {
        /** @type {?} */
        const viewContainer = this._nodeOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            const viewRef = (/** @type {?} */ (viewContainer.get(renderIndex)));
            /** @type {?} */
            const context = (/** @type {?} */ (viewRef.context));
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            context.index = renderIndex;
        }
    }
    /**
     * @param {?} data
     * @param {?} i
     * @return {?}
     */
    _getNodeDef(data, i) {
        // console.log(this._defDirec);
        if (this._defDirec.length === 1) {
            return this._defDirec.first;
        }
        /** @type {?} */
        const nodeDef = this._defDirec.find(def => def.when && def.when(i, data)) ||
            this._defaultNodeDef;
        return nodeDef;
    }
    /**
     * @return {?}
     */
    _observeRenderChanges() {
        /** @type {?} */
        let dataStream;
        if (this._dataSource instanceof Observable) {
            dataStream = this._dataSource;
        }
        else if (Array.isArray(this._dataSource)) {
            dataStream = of(this._dataSource);
        }
        if (dataStream) {
            this._dataSubscription = dataStream
                .pipe(takeUntil(this._intervalController$))
                .subscribe(data => {
                this.renderNodeChanges(data);
                this.isLast = false;
            });
        }
    }
    /**
     * @return {?}
     */
    _inputValidation() {
        this.type = this.inputs.grid.all !== 0 ? 'fixed' : 'responsive';
        this.loop = this.inputs.loop || false;
        this.inputs.easing = this.inputs.easing || 'cubic-bezier(0, 0, 0.2, 1)';
        this.touch.active = this.inputs.touch || false;
        this.RTL = this.inputs.RTL ? true : false;
        this.interval = this.inputs.interval || null;
        this.velocity =
            typeof this.inputs.velocity === 'number'
                ? this.inputs.velocity
                : this.velocity;
        if (this.inputs.vertical && this.inputs.vertical.enabled) {
            this.vertical.enabled = this.inputs.vertical.enabled;
            this.vertical.height = this.inputs.vertical.height;
        }
        this.directionSym = this.RTL ? '' : '-';
        this.point =
            this.inputs.point && typeof this.inputs.point.visible !== 'undefined'
                ? this.inputs.point.visible
                : true;
        this._carouselSize();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onResizing(event) {
        clearTimeout(this.onResize);
        this.onResize = setTimeout(() => {
            if (this.deviceWidth !== event.target.outerWidth) {
                this._setStyle(this.nguItemsContainer.nativeElement, 'transition', ``);
                this._storeCarouselData();
            }
        }, 500);
    }
    /**
     * Get Touch input
     * @return {?}
     */
    _touch() {
        if (this.inputs.touch) {
            /** @type {?} */
            const hammertime = new Hammer(this.touchContainer.nativeElement);
            hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
            hammertime.on('panstart', (ev) => {
                this.carouselWidth = this.nguItemsContainer.nativeElement.offsetWidth;
                // this.touchTransform = this.transform[this.deviceType];
                this.dexVal = 0;
                this._setStyle(this.nguItemsContainer.nativeElement, 'transition', '');
            });
            if (this.vertical.enabled) {
                hammertime.on('panup', (ev) => {
                    this._touchHandling('panleft', ev);
                });
                hammertime.on('pandown', (ev) => {
                    this._touchHandling('panright', ev);
                });
            }
            else {
                hammertime.on('panleft', (ev) => {
                    this._touchHandling('panleft', ev);
                });
                hammertime.on('panright', (ev) => {
                    this._touchHandling('panright', ev);
                });
            }
            hammertime.on('panend', (ev) => {
                if (Math.abs(ev.velocity) >= this.velocity) {
                    this.touch.velocity = ev.velocity;
                    /** @type {?} */
                    let direc = 0;
                    if (!this.RTL) {
                        direc = this.touch.swipe === 'panright' ? 0 : 1;
                    }
                    else {
                        direc = this.touch.swipe === 'panright' ? 1 : 0;
                    }
                    this._carouselScrollOne(direc);
                }
                else {
                    this.dexVal = 0;
                    this._setStyle(this.nguItemsContainer.nativeElement, 'transition', 'transform 324ms cubic-bezier(0, 0, 0.2, 1)');
                    // this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
                }
            });
            hammertime.on('hammer.input', function (ev) {
                // allow nested touch events to no propagate, this may have other side affects but works for now.
                // TODO: It is probably better to check the source element of the event and only apply the handle to the correct carousel
                ev.srcEvent.stopPropagation();
            });
        }
    }
    /**
     * handle touch input
     * @param {?} e
     * @param {?} ev
     * @return {?}
     */
    _touchHandling(e, ev) {
        // vertical touch events seem to cause to panstart event with an odd delta
        // and a center of {x:0,y:0} so this will ignore them
        if (ev.center.x === 0) {
            return;
        }
        ev = Math.abs(this.vertical.enabled ? ev.deltaY : ev.deltaX);
        /** @type {?} */
        let valt = ev - this.dexVal;
        valt =
            this.type === 'responsive'
                ? (Math.abs(ev - this.dexVal) /
                    (this.vertical.enabled
                        ? this.vertical.height
                        : this.carouselWidth)) *
                    100
                : valt;
        this.dexVal = ev;
        this.touch.swipe = e;
        this._setTouchTransfrom(e, valt);
        this._setTransformFromTouch();
    }
    /**
     * @param {?} e
     * @param {?} valt
     * @return {?}
     */
    _setTouchTransfrom(e, valt) {
        /** @type {?} */
        const condition = this.RTL ? 'panright' : 'panleft';
        this.touchTransform =
            e === condition ? valt + this.touchTransform : this.touchTransform - valt;
    }
    /**
     * @return {?}
     */
    _setTransformFromTouch() {
        if (this.touchTransform < 0) {
            this.touchTransform = 0;
        }
        /** @type {?} */
        const type = this.type === 'responsive' ? '%' : 'px';
        /** @type {?} */
        const maxTranslate = (this.itemWidth * this._dataSource.length) - this.carouselMain1.nativeElement.offsetWidth;
        if (maxTranslate <= this.touchTransform) {
            this.touchTransform = maxTranslate;
            return;
        }
        this.onMove.emit(this);
        this._setStyle(this.nguItemsContainer.nativeElement, 'transform', this.vertical.enabled
            ? `translate3d(0, ${this.directionSym}${this.touchTransform}${type}, 0)`
            : `translate3d(${this.directionSym}${this.touchTransform}${type}, 0, 0)`);
    }
    /**
     * this fn used to disable the interval when it is not on the viewport
     * @return {?}
     */
    _onWindowScrolling() {
        /** @type {?} */
        const top = this.carousel.offsetTop;
        /** @type {?} */
        const scrollY = window.scrollY;
        /** @type {?} */
        const heightt = window.innerHeight;
        /** @type {?} */
        const carouselHeight = this.carousel.offsetHeight;
        /** @type {?} */
        const isCarouselOnScreen = top <= scrollY + heightt - carouselHeight / 4 &&
            top + carouselHeight / 2 >= scrollY;
        if (isCarouselOnScreen) {
            this._intervalController$.next(1);
        }
        else {
            this._intervalController$.next(0);
        }
    }
    /**
     * store data based on width of the screen for the carousel
     * @return {?}
     */
    _storeCarouselData() {
        this.deviceWidth = isPlatformBrowser(this.platformId)
            ? window.innerWidth
            : 1200;
        this.carouselWidth = this.carouselMain1.nativeElement.offsetWidth;
        if (this.type === 'responsive') {
            this.deviceType =
                this.deviceWidth >= 1200
                    ? 'lg'
                    : this.deviceWidth >= 992
                        ? 'md'
                        : this.deviceWidth >= 768
                            ? 'sm'
                            : 'xs';
            this.items = this.inputs.grid[this.deviceType];
            this.itemWidth = this.carouselWidth / this.items;
        }
        else {
            this.items = Math.ceil(this.carouselWidth / this.inputs.grid.all);
            this.itemWidth = this.inputs.grid.all;
            this.deviceType = 'all';
        }
        this.slideItems = +(this.inputs.slide < this.items
            ? this.inputs.slide
            : this.items);
        this.load =
            this.inputs.load >= this.slideItems ? this.inputs.load : this.slideItems;
        this.speed =
            this.inputs.speed && this.inputs.speed > -1 ? this.inputs.speed : 400;
        this._carouselPoint();
    }
    /**
     * Init carousel point
     * @return {?}
     */
    _carouselPoint() {
        // debugger;
        // if (this.userData.point.visible === true) {
        /** @type {?} */
        const Nos = this.dataSource.length - (this.items - this.slideItems);
        this.pointIndex = Math.ceil(Nos / this.slideItems);
        /** @type {?} */
        const pointers = [];
        if (this.pointIndex > 1 || !this.inputs.point.hideOnSingleSlide) {
            for (let i = 0; i < this.pointIndex; i++) {
                pointers.push(i);
            }
        }
        this.pointNumbers = pointers;
        // console.log(this.pointNumbers);
        this._carouselPointActiver();
        if (this.pointIndex <= 1) {
            this._btnBoolean(1, 1);
        }
        else {
            if (this.currentSlide === 0 && !this.loop) {
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
            }
        }
        // }
    }
    /**
     * change the active point in carousel
     * @return {?}
     */
    _carouselPointActiver() {
        /** @type {?} */
        const i = Math.ceil(this.currentSlide / this.slideItems);
        this.activePoint = i;
        // console.log(this.data);
        this.cdr.markForCheck();
    }
    /**
     * set the style of the carousel based the inputs data
     * @return {?}
     */
    _carouselSize() {
        this.token = this._generateID();
        /** @type {?} */
        let dism = '';
        this.styleid = `.${this.token} > .carousel-wrapper > .ngucarousel > .ngu-touch-container > .ngucarousel-items`;
        if (this.inputs.custom === 'banner') {
            this._renderer.addClass(this.carousel, 'banner');
        }
        if (this.inputs.animation === 'lazy') {
            dism += `${this.styleid} > .item {transition: transform .6s ease;}`;
        }
        /** @type {?} */
        let itemStyle = '';
        if (this.vertical.enabled) {
            /** @type {?} */
            const itemWidth_xs = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.xs}px}`;
            /** @type {?} */
            const itemWidth_sm = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.sm}px}`;
            /** @type {?} */
            const itemWidth_md = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.md}px}`;
            /** @type {?} */
            const itemWidth_lg = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.lg}px}`;
            itemStyle = `@media (max-width:767px){${itemWidth_xs}}
                    @media (min-width:768px){${itemWidth_sm}}
                    @media (min-width:992px){${itemWidth_md}}
                    @media (min-width:1200px){${itemWidth_lg}}`;
        }
        else if (this.type === 'responsive') {
            /** @type {?} */
            const itemWidth_xs = this.inputs.type === 'mobile'
                ? `${this.styleid} .item {flex: 0 0 ${95 /
                    +this.inputs.grid.xs}%; width: ${95 / +this.inputs.grid.xs}%;}`
                : `${this.styleid} .item {flex: 0 0 ${100 /
                    +this.inputs.grid.xs}%; width: ${100 / +this.inputs.grid.xs}%;}`;
            /** @type {?} */
            const itemWidth_sm = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.sm}%; width: ${100 / +this.inputs.grid.sm}%}`;
            /** @type {?} */
            const itemWidth_md = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.md}%; width: ${100 / +this.inputs.grid.md}%}`;
            /** @type {?} */
            const itemWidth_lg = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.lg}%; width: ${100 / +this.inputs.grid.lg}%}`;
            itemStyle = `@media (max-width:767px){${itemWidth_xs}}
                    @media (min-width:768px){${itemWidth_sm}}
                    @media (min-width:992px){${itemWidth_md}}
                    @media (min-width:1200px){${itemWidth_lg}}`;
        }
        else {
            console.log(this._defDirec);
            this._defDirec.forEach(item => {
                console.log(item);
            });
            itemStyle = `${this.styleid} .item {flex: 0 0 ${this.inputs.grid.all}px; width: ${this.inputs.grid.all}px;}`;
        }
        this._renderer.addClass(this.carousel, this.token);
        if (this.vertical.enabled) {
            this._renderer.addClass(this.nguItemsContainer.nativeElement, 'nguvertical');
            this._renderer.setStyle(this.carouselMain1.nativeElement, 'height', `${this.vertical.height}px`);
        }
        // tslint:disable-next-line:no-unused-expression
        this.RTL &&
            !this.vertical.enabled &&
            this._renderer.addClass(this.carousel, 'ngurtl');
        this._createStyleElem(`${dism} ${itemStyle}`);
        this._storeCarouselData();
    }
    /**
     * logic to scroll the carousel step 1
     * @param {?} Btn
     * @return {?}
     */
    _carouselScrollOne(Btn) {
        /** @type {?} */
        let itemSpeed = this.speed;
        /** @type {?} */
        let translateXval;
        /** @type {?} */
        let currentSlide = 0;
        /** @type {?} */
        const touchMove = Math.ceil(this.dexVal / this.itemWidth);
        this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
        if (this.pointIndex === 1) {
            return;
        }
        else if (Btn === 0 && ((!this.loop && !this.isFirst) || this.loop)) {
            /** @type {?} */
            const slide = this.slideItems * this.pointIndex;
            /** @type {?} */
            const currentSlideD = this.currentSlide - this.slideItems;
            /** @type {?} */
            const MoveSlide = currentSlideD + this.slideItems;
            this._btnBoolean(0, 1);
            if (this.currentSlide === 0) {
                currentSlide = this.dataSource.length - this.items;
                itemSpeed = 400;
                this._btnBoolean(0, 1);
            }
            else if (this.slideItems >= MoveSlide) {
                currentSlide = translateXval = 0;
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
                if (touchMove > this.slideItems) {
                    currentSlide = this.currentSlide - touchMove;
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.currentSlide - this.slideItems;
                }
            }
            this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
        else if (Btn === 1 && ((!this.loop && !this.isLast) || this.loop)) {
            if (this.dataSource.length <=
                this.currentSlide + this.items + this.slideItems &&
                !this.isLast) {
                currentSlide = this.dataSource.length - this.items;
                this._btnBoolean(0, 1);
            }
            else if (this.isLast) {
                currentSlide = translateXval = 0;
                itemSpeed = 400;
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
                if (touchMove > this.slideItems) {
                    currentSlide =
                        this.currentSlide + this.slideItems + (touchMove - this.slideItems);
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.currentSlide + this.slideItems;
                }
            }
            this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
        // cubic-bezier(0.15, 1.04, 0.54, 1.13)
    }
    /**
     * logic to scroll the carousel step 2
     * @param {?} Btn
     * @param {?} currentSlide
     * @param {?} itemSpeed
     * @return {?}
     */
    _carouselScrollTwo(Btn, currentSlide, itemSpeed) {
        // tslint:disable-next-line:no-unused-expression
        if (this.dexVal !== 0) {
            /** @type {?} */
            const val = Math.abs(this.touch.velocity);
            /** @type {?} */
            let somt = Math.floor((this.dexVal / val / this.dexVal) * (this.deviceWidth - this.dexVal));
            somt = somt > itemSpeed ? itemSpeed : somt;
            itemSpeed = somt < 200 ? 200 : somt;
            this.dexVal = 0;
        }
        if (this.withAnim) {
            this._setStyle(this.nguItemsContainer.nativeElement, 'transition', `transform ${itemSpeed}ms ${this.inputs.easing}`);
            this.inputs.animation &&
                this._carouselAnimator(Btn, currentSlide + 1, currentSlide + this.items, itemSpeed, Math.abs(this.currentSlide - currentSlide));
        }
        else {
            this._setStyle(this.nguItemsContainer.nativeElement, 'transition', ``);
        }
        // console.log(this.dataSource);
        this.itemLength = this.dataSource.length;
        this._transformStyle(currentSlide);
        this.currentSlide = currentSlide;
        setTimeout(() => {
            this.onMove.emit(this);
        }, 400);
        this._carouselPointActiver();
        this._carouselLoadTrigger();
        this.withAnim = true;
        // if (currentSlide === 12) {
        //   this._switchDataSource(this.dataSource);
        // }
    }
    /**
     * boolean function for making isFirst and isLast
     * @param {?} first
     * @param {?} last
     * @return {?}
     */
    _btnBoolean(first, last) {
        this.isFirst = !!first;
        this.isLast = !!last;
    }
    /**
     * @param {?} grid
     * @param {?} slide
     * @return {?}
     */
    _transformString(grid, slide) {
        /** @type {?} */
        let collect = '';
        collect += `${this.styleid} { transform: translate3d(`;
        if (this.vertical.enabled) {
            this.transform[grid] =
                (this.vertical.height / this.inputs.grid[grid]) * slide;
            collect += `0, -${this.transform[grid]}px, 0`;
        }
        else {
            this.transform[grid] = (100 / this.inputs.grid[grid]) * slide;
            collect += `${this.directionSym}${this.transform[grid]}%, 0, 0`;
        }
        collect += `); }`;
        return collect;
    }
    /**
     * set the transform style to scroll the carousel
     * @param {?} slide
     * @return {?}
     */
    _transformStyle(slide) {
        /** @type {?} */
        let slideCss = '';
        if (this.type === 'responsive') {
            slideCss = `@media (max-width: 767px) {${this._transformString('xs', slide)}}
      @media (min-width: 768px) {${this._transformString('sm', slide)} }
      @media (min-width: 992px) {${this._transformString('md', slide)} }
      @media (min-width: 1200px) {${this._transformString('lg', slide)} }`;
        }
        else {
            this.transform.all = this.inputs.grid.all * slide;
            this.touchTransform = this.transform.all;
            slideCss = `${this.styleid} { transform: translate3d(${this.directionSym}${this.transform.all}px, 0, 0);`;
        }
        this.carouselCssNode.innerHTML = slideCss;
    }
    /**
     * this will trigger the carousel to load the items
     * @return {?}
     */
    _carouselLoadTrigger() {
        if (typeof this.inputs.load === 'number') {
            this.dataSource.length - this.load <= this.currentSlide + this.items &&
                this.carouselLoad.emit(this.currentSlide);
        }
    }
    /**
     * generate Class for each carousel to set specific style
     * @return {?}
     */
    _generateID() {
        /** @type {?} */
        let text = '';
        /** @type {?} */
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 6; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return `ngucarousel${text}`;
    }
    /**
     * handle the auto slide
     * @return {?}
     */
    _carouselInterval() {
        /** @type {?} */
        const container = this.carouselMain1.nativeElement;
        if (this.interval && this.loop) {
            this.listener4 = this._renderer.listen('window', 'scroll', () => {
                clearTimeout(this.onScrolling);
                this.onScrolling = setTimeout(() => {
                    this._onWindowScrolling();
                }, 600);
            });
            /** @type {?} */
            const play$ = fromEvent(container, 'mouseleave').pipe(mapTo(1));
            /** @type {?} */
            const pause$ = fromEvent(container, 'mouseenter').pipe(mapTo(0));
            /** @type {?} */
            const touchPlay$ = fromEvent(container, 'touchstart').pipe(mapTo(1));
            /** @type {?} */
            const touchPause$ = fromEvent(container, 'touchend').pipe(mapTo(0));
            /** @type {?} */
            const interval$ = interval(this.inputs.interval.timing).pipe(mapTo(1));
            setTimeout(() => {
                this.carouselInt = merge(play$, touchPlay$, pause$, touchPause$, this._intervalController$)
                    .pipe(startWith(1), switchMap(val => {
                    this.isHovered = !val;
                    this.cdr.markForCheck();
                    return val ? interval$ : empty();
                }))
                    .subscribe(res => {
                    this._carouselScrollOne(1);
                });
            }, this.interval.initialDelay);
        }
    }
    /**
     * @return {?}
     */
    _updateItemIndexContextAni() {
        /** @type {?} */
        const viewContainer = this._nodeOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            const viewRef = (/** @type {?} */ (viewContainer.get(renderIndex)));
            /** @type {?} */
            const context = (/** @type {?} */ (viewRef.context));
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            context.index = renderIndex;
        }
    }
    /**
     * animate the carousel items
     * @param {?} direction
     * @param {?} start
     * @param {?} end
     * @param {?} speed
     * @param {?} length
     * @param {?=} viewContainer
     * @return {?}
     */
    _carouselAnimator(direction, start, end, speed, length, viewContainer = this._nodeOutlet.viewContainer) {
        /** @type {?} */
        let val = length < 5 ? length : 5;
        val = val === 1 ? 3 : val;
        /** @type {?} */
        const collectIndex = [];
        if (direction === 1) {
            for (let i = start - 1; i < end; i++) {
                collectIndex.push(i);
                val = val * 2;
                /** @type {?} */
                const viewRef = (/** @type {?} */ (viewContainer.get(i)));
                /** @type {?} */
                const context = (/** @type {?} */ (viewRef.context));
                context.animate = { value: true, params: { distance: val } };
            }
        }
        else {
            for (let i = end - 1; i >= start - 1; i--) {
                collectIndex.push(i);
                val = val * 2;
                /** @type {?} */
                const viewRef = (/** @type {?} */ (viewContainer.get(i)));
                /** @type {?} */
                const context = (/** @type {?} */ (viewRef.context));
                context.animate = { value: true, params: { distance: -val } };
            }
        }
        this.cdr.markForCheck();
        setTimeout(() => {
            this._removeAnimations(collectIndex);
        }, speed * 0.7);
    }
    /**
     * @param {?} indexs
     * @return {?}
     */
    _removeAnimations(indexs) {
        /** @type {?} */
        const viewContainer = this._nodeOutlet.viewContainer;
        indexs.forEach(i => {
            /** @type {?} */
            const viewRef = (/** @type {?} */ (viewContainer.get(i)));
            /** @type {?} */
            const context = (/** @type {?} */ (viewRef.context));
            context.animate = { value: false, params: { distance: 0 } };
        });
        this.cdr.markForCheck();
    }
    /**
     * Short form for setElementStyle
     * @param {?} el
     * @param {?} prop
     * @param {?} val
     * @return {?}
     */
    _setStyle(el, prop, val) {
        this._renderer.setStyle(el, prop, val);
    }
    /**
     * For generating style tag
     * @param {?=} datas
     * @return {?}
     */
    _createStyleElem(datas) {
        /** @type {?} */
        const styleItem = this._renderer.createElement('style');
        if (datas) {
            /** @type {?} */
            const styleText = this._renderer.createText(datas);
            this._renderer.appendChild(styleItem, styleText);
        }
        this._renderer.appendChild(this.carousel, styleItem);
        return styleItem;
    }
}
NguCarousel.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngu-carousel',
                template: "<ng-content select=\"[NguCarouselPoint]\"></ng-content>\r\n\r\n<div class=\"carousel-wrapper\">\r\n  <div class=\"btn-wrapper\">\r\n    <ng-content select=\"[NguCarouselPrev]\"></ng-content>\r\n  </div>\r\n\r\n  <div #ngucarousel class=\"ngucarousel\">\r\n    <div #touchContainer class=\"ngu-touch-container\">\r\n      <div #nguItemsContainer class=\"ngucarousel-items\">\r\n        <ng-container nguCarouselOutlet></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"btn-wrapper\">\r\n    <ng-content select=\"[NguCarouselNext]\"></ng-content>\r\n  </div>\r\n</div>\r\n\r\n",
                viewProviders: [NguCarouselService],
                providers: [NguCarouselService],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;position:relative}:host.ngurtl{direction:rtl}.carousel-wrapper{display:flex;flex-direction:row;overflow:hidden}.ngucarousel{position:relative;height:100%;flex-grow:1;z-index:10}.ngucarousel .ngucarousel-items{position:relative;display:flex;height:100%}.btn-wrapper{z-index:11}.nguvertical{flex-direction:column}.myPoint{list-style-type:none;text-align:right;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.myPoint li{background:#6b6b6b;display:inline-block;padding:4px;margin:0 3px;transition:.4s;opacity:.5}.myPoint li.active{opacity:1;-webkit-transform:scale(1.2);transform:scale(1.2)}"]
            }] }
];
NguCarousel.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: IterableDiffers },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ChangeDetectorRef },
    { type: NguCarouselService }
];
NguCarousel.propDecorators = {
    _defDirec: [{ type: ContentChildren, args: [NguCarouselDefDirective,] }],
    _nodeOutlet: [{ type: ViewChild, args: [NguCarouselOutlet,] }],
    inputs: [{ type: Input, args: ['inputs',] }],
    carouselLoad: [{ type: Output, args: ['carouselLoad',] }],
    onMove: [{ type: Output, args: ['onMove',] }],
    carouselMain1: [{ type: ViewChild, args: ['ngucarousel', { read: ElementRef },] }],
    nguItemsContainer: [{ type: ViewChild, args: ['nguItemsContainer', { read: ElementRef },] }],
    touchContainer: [{ type: ViewChild, args: ['touchContainer', { read: ElementRef },] }],
    dataSource: [{ type: Input, args: ['dataSource',] }],
    nextBtn: [{ type: ContentChild, args: [NguCarouselNextDirective, { read: ElementRef },] }],
    prevBtn: [{ type: ContentChild, args: [NguCarouselPrevDirective, { read: ElementRef },] }],
    trackBy: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NguCarousel.prototype._dataSubscription;
    /** @type {?} */
    NguCarousel.prototype._dataDiffer;
    /** @type {?} */
    NguCarousel.prototype.styleid;
    /** @type {?} */
    NguCarousel.prototype.activePoint;
    /** @type {?} */
    NguCarousel.prototype.isHovered;
    /** @type {?} */
    NguCarousel.prototype.arrayChanges;
    /** @type {?} */
    NguCarousel.prototype.carouselInt;
    /** @type {?} */
    NguCarousel.prototype._defaultNodeDef;
    /** @type {?} */
    NguCarousel.prototype._defDirec;
    /** @type {?} */
    NguCarousel.prototype._nodeOutlet;
    /** @type {?} */
    NguCarousel.prototype.pointNumbers;
    /** @type {?} */
    NguCarousel.prototype.listener1;
    /** @type {?} */
    NguCarousel.prototype.listener2;
    /** @type {?} */
    NguCarousel.prototype.listener3;
    /** @type {?} */
    NguCarousel.prototype.listener4;
    /** @type {?} */
    NguCarousel.prototype.directionSym;
    /** @type {?} */
    NguCarousel.prototype.carouselCssNode;
    /** @type {?} */
    NguCarousel.prototype.pointIndex;
    /** @type {?} */
    NguCarousel.prototype.withAnim;
    /** @type {?} */
    NguCarousel.prototype.inputs;
    /** @type {?} */
    NguCarousel.prototype.carouselLoad;
    /** @type {?} */
    NguCarousel.prototype.onMove;
    /** @type {?} */
    NguCarousel.prototype.carouselMain1;
    /** @type {?} */
    NguCarousel.prototype.nguItemsContainer;
    /** @type {?} */
    NguCarousel.prototype.touchContainer;
    /** @type {?} */
    NguCarousel.prototype._intervalController$;
    /** @type {?} */
    NguCarousel.prototype.carousel;
    /** @type {?} */
    NguCarousel.prototype.onResize;
    /** @type {?} */
    NguCarousel.prototype.onScrolling;
    /** @type {?} */
    NguCarousel.prototype._trackByFn;
    /** @type {?} */
    NguCarousel.prototype._dataSource;
    /** @type {?} */
    NguCarousel.prototype._el;
    /** @type {?} */
    NguCarousel.prototype._renderer;
    /** @type {?} */
    NguCarousel.prototype._differs;
    /** @type {?} */
    NguCarousel.prototype.platformId;
    /** @type {?} */
    NguCarousel.prototype.cdr;
    /** @type {?} */
    NguCarousel.prototype.carouselService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1LWNhcm91c2VsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImxpYi9uZ3UtY2Fyb3VzZWwvbmd1LWNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFBRSxlQUFlLEVBRTdCLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBSVQsZUFBZSxFQUdmLE1BQU0sRUFDTixXQUFXLEVBQUUsU0FBUyxFQUN0QixTQUFTLEVBRVQsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsd0JBQXdCLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQVczSSxrREFBa0Q7QUFDbEQsTUFBTSxrQkFBc0IsU0FBUSxnQkFBZ0I7Ozs7Ozs7OztJQXFFbEQsWUFDVSxHQUFlLEVBQ2YsU0FBb0IsRUFDcEIsUUFBeUIsRUFDSixVQUFrQixFQUN2QyxHQUFz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RUFBRSxVQUFVLEVBQUM7Z0NBRzNDLFNBQVMsU0FBQyxtQkFBbUIsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7NkJBR2pELFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7eUJBVTlDLEtBQUssU0FBQyxZQUFZO3NCQTRCbEIsWUFBWSxTQUFDLHdCQUF3QixFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQztzQkFhekQsWUFBWSxTQUFDLHdCQUF3QixFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQztzQkFnQnpELEtBQUs7Ozs7SUEvR04sd0NBQWdDOztJQUNoQyxrQ0FBZ0M7O0lBQ2hDLDhCQUFnQjs7SUFDaEIsa0NBQW9COztJQUNwQixnQ0FBa0I7O0lBRWxCLG1DQUFrQzs7SUFDbEMsa0NBQTBCOztJQUUxQixzQ0FBNkQ7O0lBRzdELGdDQUMyRDs7SUFFM0Qsa0NBQytCOztJQUUvQixtQ0FBOEI7O0lBRTlCLGdDQUFzQjs7SUFDdEIsZ0NBQXNCOztJQUN0QixnQ0FBc0I7O0lBQ3RCLGdDQUFzQjs7SUFFdEIsbUNBQTZCOztJQUM3QixzQ0FBNkI7O0lBQzdCLGlDQUEyQjs7SUFDM0IsK0JBQXdCOztJQUN4Qiw2QkFDa0M7O0lBQ2xDLG1DQUMwQzs7SUFHMUMsNkJBQ21EOztJQUVuRCxvQ0FDa0M7O0lBRWxDLHdDQUNzQzs7SUFFdEMscUNBQ21DOztJQUNuQywyQ0FBcUQ7O0lBQ3JELCtCQUFzQjs7SUFDdEIsK0JBQXNCOztJQUN0QixrQ0FBeUI7O0lBQ3pCLGlDQUF1Qzs7SUFFdkMsa0NBQWlCOztJQWdCZiwwQkFBdUI7O0lBQ3ZCLGdDQUE0Qjs7SUFDNUIsK0JBQWlDOztJQUNqQyxpQ0FBK0M7O0lBQy9DLDBCQUE4Qjs7SUFDOUIsc0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLCBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRG9DaGVjayxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgaXNEZXZNb2RlLFxyXG4gIEl0ZXJhYmxlQ2hhbmdlUmVjb3JkLFxyXG4gIEl0ZXJhYmxlQ2hhbmdlcyxcclxuICBJdGVyYWJsZURpZmZlcixcclxuICBJdGVyYWJsZURpZmZlcnMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUExBVEZPUk1fSUQsIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVHJhY2tCeUZ1bmN0aW9uLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGVtcHR5LCBmcm9tRXZlbnQsIGludGVydmFsLCBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXBUbywgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE5ndUNhcm91c2VsQ29uZmlnLCBOZ3VDYXJvdXNlbE91dGxldENvbnRleHQsIE5ndUNhcm91c2VsU3RvcmUgfSBmcm9tICcuL25ndS1jYXJvdXNlbCc7XHJcbmltcG9ydCB7IE5ndUNhcm91c2VsU2VydmljZSB9IGZyb20gJy4uL25ndS1jYXJvdXNlbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUsIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSwgTmd1Q2Fyb3VzZWxPdXRsZXQsIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSB9IGZyb20gJy4uL25ndS1jYXJvdXNlbC5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnbmd1LWNhcm91c2VsJyxcclxuICB0ZW1wbGF0ZVVybDogJ25ndS1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ25ndS1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHZpZXdQcm92aWRlcnM6IFsgTmd1Q2Fyb3VzZWxTZXJ2aWNlIF0sXHJcbiAgcHJvdmlkZXJzOiBbIE5ndUNhcm91c2VsU2VydmljZSBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtY2xhc3Mtc3VmZml4XHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbDxUPiBleHRlbmRzIE5ndUNhcm91c2VsU3RvcmVcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcclxuICBfZGF0YVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIF9kYXRhRGlmZmVyOiBJdGVyYWJsZURpZmZlcjx7fT47XHJcbiAgc3R5bGVpZDogc3RyaW5nO1xyXG4gIGFjdGl2ZVBvaW50OiBudW1iZXI7XHJcbiAgaXNIb3ZlcmVkID0gZmFsc2U7XHJcbiAgLy8gaXNGaXJzdHNzID0gMDtcclxuICBhcnJheUNoYW5nZXM6IEl0ZXJhYmxlQ2hhbmdlczx7fT47XHJcbiAgY2Fyb3VzZWxJbnQ6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBfZGVmYXVsdE5vZGVEZWY6IE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPGFueT4gfCBudWxsO1xyXG5cclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSlcclxuICBwcml2YXRlIF9kZWZEaXJlYzogUXVlcnlMaXN0PE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPGFueT4+O1xyXG5cclxuICBAVmlld0NoaWxkKE5ndUNhcm91c2VsT3V0bGV0KVxyXG4gIF9ub2RlT3V0bGV0OiBOZ3VDYXJvdXNlbE91dGxldDtcclxuXHJcbiAgcG9pbnROdW1iZXJzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgLy8gaXNGaXJzdHNzID0gMDtcclxuICBsaXN0ZW5lcjE6ICgpID0+IHZvaWQ7XHJcbiAgbGlzdGVuZXIyOiAoKSA9PiB2b2lkO1xyXG4gIGxpc3RlbmVyMzogKCkgPT4gdm9pZDtcclxuICBsaXN0ZW5lcjQ6ICgpID0+IHZvaWQ7XHJcblxyXG4gIHByaXZhdGUgZGlyZWN0aW9uU3ltOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBjYXJvdXNlbENzc05vZGU6IGFueTtcclxuICBwcml2YXRlIHBvaW50SW5kZXg6IG51bWJlcjtcclxuICBwcml2YXRlIHdpdGhBbmltID0gdHJ1ZTtcclxuICBASW5wdXQoJ2lucHV0cycpXHJcbiAgcHJpdmF0ZSBpbnB1dHM6IE5ndUNhcm91c2VsQ29uZmlnO1xyXG4gIEBPdXRwdXQoJ2Nhcm91c2VsTG9hZCcpXHJcbiAgcHJpdmF0ZSBjYXJvdXNlbExvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcclxuXHJcbiAgQE91dHB1dCgnb25Nb3ZlJylcclxuICBwdWJsaWMgb25Nb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxOZ3VDYXJvdXNlbDxUPj4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbmd1Y2Fyb3VzZWwnLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgcHJpdmF0ZSBjYXJvdXNlbE1haW4xOiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkKCduZ3VJdGVtc0NvbnRhaW5lcicsIHtyZWFkOiBFbGVtZW50UmVmfSlcclxuICBwcml2YXRlIG5ndUl0ZW1zQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkKCd0b3VjaENvbnRhaW5lcicsIHtyZWFkOiBFbGVtZW50UmVmfSlcclxuICBwcml2YXRlIHRvdWNoQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIHByaXZhdGUgX2ludGVydmFsQ29udHJvbGxlciQgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XHJcbiAgcHJpdmF0ZSBjYXJvdXNlbDogYW55O1xyXG4gIHByaXZhdGUgb25SZXNpemU6IGFueTtcclxuICBwcml2YXRlIG9uU2Nyb2xsaW5nOiBhbnk7XHJcbiAgcHJpdmF0ZSBfdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248VD47XHJcblxyXG4gIF9kYXRhU291cmNlOiBhbnk7XHJcblxyXG4gIEBJbnB1dCgnZGF0YVNvdXJjZScpXHJcbiAgZ2V0IGRhdGFTb3VyY2UoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRhdGFTb3VyY2UoZGF0YTogYW55KSB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLCB0aGlzLmRhdGFTb3VyY2UpO1xyXG4gICAgICAvLyB0aGlzLmlzRmlyc3RzcysrO1xyXG4gICAgICB0aGlzLl9zd2l0Y2hEYXRhU291cmNlKGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIF9kaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgY2Fyb3VzZWxTZXJ2aWNlOiBOZ3VDYXJvdXNlbFNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmNhcm91c2VsU2VydmljZS5zZXRDYXJvdXNlbCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKiBUaGUgc2V0dGVyIGlzIHVzZWQgdG8gY2F0Y2ggdGhlIGJ1dHRvbiBpZiB0aGUgYnV0dG9uIGhhcyBuZ0lmXHJcbiAgICogaXNzdWUgaWQgIzkxXHJcbiAgICovXHJcbiAgQENvbnRlbnRDaGlsZChOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsIHtyZWFkOiBFbGVtZW50UmVmfSlcclxuICBzZXQgbmV4dEJ0bihidG46IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMubGlzdGVuZXIyICYmIHRoaXMubGlzdGVuZXIyKCk7XHJcbiAgICBpZiAoYnRuKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXIyID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKGJ0bi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoKSA9PlxyXG4gICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKDEpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogVGhlIHNldHRlciBpcyB1c2VkIHRvIGNhdGNoIHRoZSBidXR0b24gaWYgdGhlIGJ1dHRvbiBoYXMgbmdJZlxyXG4gICAqIGlzc3VlIGlkICM5MVxyXG4gICAqL1xyXG4gIEBDb250ZW50Q2hpbGQoTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgc2V0IHByZXZCdG4oYnRuOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmxpc3RlbmVyMSAmJiB0aGlzLmxpc3RlbmVyMSgpO1xyXG4gICAgaWYgKGJ0bikge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyMSA9IHRoaXMuX3JlbmRlcmVyLmxpc3RlbihidG4ubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKCkgPT5cclxuICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZSgwKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJhY2tpbmcgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2hlY2sgdGhlIGRpZmZlcmVuY2VzIGluIGRhdGEgY2hhbmdlcy4gVXNlZCBzaW1pbGFybHlcclxuICAgKiB0byBgbmdGb3JgIGB0cmFja0J5YCBmdW5jdGlvbi4gT3B0aW1pemUgSXRlbXMgb3BlcmF0aW9ucyBieSBpZGVudGlmeWluZyBhIEl0ZW1zIGJhc2VkIG9uIGl0cyBkYXRhXHJcbiAgICogcmVsYXRpdmUgdG8gdGhlIGZ1bmN0aW9uIHRvIGtub3cgaWYgYSBJdGVtcyBzaG91bGQgYmUgYWRkZWQvcmVtb3ZlZC9tb3ZlZC5cclxuICAgKiBBY2NlcHRzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gcGFyYW1ldGVycywgYGluZGV4YCBhbmQgYGl0ZW1gLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHRyYWNrQnkoKTogVHJhY2tCeUZ1bmN0aW9uPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLl90cmFja0J5Rm47XHJcbiAgfVxyXG5cclxuICBzZXQgdHJhY2tCeShmbjogVHJhY2tCeUZ1bmN0aW9uPFQ+KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGlzRGV2TW9kZSgpICYmXHJcbiAgICAgIGZuICE9IG51bGwgJiZcclxuICAgICAgdHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nICYmXHJcbiAgICAgIDxhbnk+Y29uc29sZSAmJlxyXG4gICAgICA8YW55PmNvbnNvbGUud2FyblxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBgdHJhY2tCeSBtdXN0IGJlIGEgZnVuY3Rpb24sIGJ1dCByZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KGZuKX0uYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdHJhY2tCeUZuID0gZm47XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuX2RhdGFEaWZmZXIgPSB0aGlzLl9kaWZmZXJzXHJcbiAgICAgIC5maW5kKFtdKVxyXG4gICAgICAuY3JlYXRlKChfaTogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFja0J5ID8gdGhpcy50cmFja0J5KGl0ZW0uZGF0YUluZGV4LCBpdGVtLmRhdGEpIDogaXRlbTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICB0aGlzLmFycmF5Q2hhbmdlcyA9IHRoaXMuX2RhdGFEaWZmZXIuZGlmZih0aGlzLmRhdGFTb3VyY2UpO1xyXG4gICAgaWYgKHRoaXMuYXJyYXlDaGFuZ2VzICYmIHRoaXMuX2RlZkRpcmVjKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdDaGFuZ2VzIGRldGVjdGVkIScpO1xyXG4gICAgICB0aGlzLl9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jYXJvdXNlbCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLl9pbnB1dFZhbGlkYXRpb24oKTtcclxuXHJcbiAgICB0aGlzLmNhcm91c2VsQ3NzTm9kZSA9IHRoaXMuX2NyZWF0ZVN0eWxlRWxlbSgpO1xyXG5cclxuICAgIC8vIHRoaXMuX2J1dHRvbkNvbnRyb2woKTtcclxuXHJcbiAgICBpZiAod2luZG93KSB7XHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsSW50ZXJ2YWwoKTtcclxuICAgICAgaWYgKCF0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLl90b3VjaCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGlzdGVuZXIzID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMuX29uUmVzaXppbmcoZXZlbnQpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fb25XaW5kb3dTY3JvbGxpbmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XHJcblxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8qKiBVc2VkIHRvIHJlc2V0IHRoZSBjYXJvdXNlbCAqL1xyXG4gIHB1YmxpYyByZXNldCh3aXRoT3V0QW5pbWF0aW9uPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgd2l0aE91dEFuaW1hdGlvbiAmJiAodGhpcy53aXRoQW5pbSA9IGZhbHNlKTtcclxuICAgIHRoaXMuY2Fyb3VzZWxDc3NOb2RlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGhpcy5tb3ZlVG8oMCk7XHJcbiAgICB0aGlzLl9jYXJvdXNlbFBvaW50KCk7XHJcbiAgfVxyXG5cclxuICAvKiogdGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHNjb2xsIHRoZSBjYXJvdXNlbCB3aGVuIHBvaW50IGlzIGNsaWNrZWQgKi9cclxuICBwdWJsaWMgbW92ZVRvKHNsaWRlOiBudW1iZXIsIHdpdGhPdXRBbmltYXRpb24/OiBib29sZWFuKSB7XHJcbiAgICAvLyBzbGlkZSA9IHNsaWRlIC0gMTtcclxuICAgIHdpdGhPdXRBbmltYXRpb24gJiYgKHRoaXMud2l0aEFuaW0gPSBmYWxzZSk7XHJcbiAgICBpZiAodGhpcy5hY3RpdmVQb2ludCAhPT0gc2xpZGUgJiYgc2xpZGUgPCB0aGlzLnBvaW50SW5kZXgpIHtcclxuICAgICAgbGV0IHNsaWRlcmVtYWlucztcclxuICAgICAgY29uc3QgYnRucyA9IHRoaXMuY3VycmVudFNsaWRlIDwgc2xpZGUgPyAxIDogMDtcclxuXHJcbiAgICAgIHN3aXRjaCAoc2xpZGUpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xyXG4gICAgICAgICAgc2xpZGVyZW1haW5zID0gc2xpZGUgKiB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIHRoaXMucG9pbnRJbmRleCAtIDE6XHJcbiAgICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xyXG4gICAgICAgICAgc2xpZGVyZW1haW5zID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtIHRoaXMuaXRlbXM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcclxuICAgICAgICAgIHNsaWRlcmVtYWlucyA9IHNsaWRlICogdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsVHdvKGJ0bnMsIHNsaWRlcmVtYWlucywgdGhpcy5zcGVlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjbGVhckludGVydmFsKHRoaXMuY2Fyb3VzZWxJbnQpO1xyXG4gICAgdGhpcy5jYXJvdXNlbEludCAmJiB0aGlzLmNhcm91c2VsSW50LnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmNhcm91c2VsTG9hZC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5vbk1vdmUuY29tcGxldGUoKTtcclxuXHJcbiAgICAvKiogcmVtb3ZlIGxpc3RlbmVycyAqL1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHN0ciA9IGBsaXN0ZW5lciR7aX1gO1xyXG4gICAgICB0aGlzW3N0cl0gJiYgdGhpc1tzdHJdKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zd2l0Y2hEYXRhU291cmNlKGRhdGFTb3VyY2U6IGFueSk6IGFueSB7XHJcbiAgICB0aGlzLl9kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcclxuICAgIGlmICh0aGlzLl9kZWZEaXJlYykge1xyXG4gICAgICB0aGlzLl9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBwcml2YXRlIHJlbmRlck5vZGVDaGFuZ2VzKFxyXG4gICAgZGF0YTogYW55W10sXHJcbiAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyXHJcbiAgKSB7XHJcbiAgICBpZiAoIXRoaXMuYXJyYXlDaGFuZ2VzKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5hcnJheUNoYW5nZXMuZm9yRWFjaE9wZXJhdGlvbihcclxuICAgICAgKFxyXG4gICAgICAgIGl0ZW06IEl0ZXJhYmxlQ2hhbmdlUmVjb3JkPGFueT4sXHJcbiAgICAgICAgYWRqdXN0ZWRQcmV2aW91c0luZGV4OiBudW1iZXIsXHJcbiAgICAgICAgY3VycmVudEluZGV4OiBudW1iZXJcclxuICAgICAgKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc3Qgbm9kZSA9IHRoaXMuX2RlZkRpcmVjLmZpbmQoaXRlbXMgPT4gaXRlbS5pdGVtKTtcclxuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5fZ2V0Tm9kZURlZihkYXRhW2N1cnJlbnRJbmRleF0sIGN1cnJlbnRJbmRleCk7XHJcblxyXG4gICAgICAgIGlmIChpdGVtLnByZXZpb3VzSW5kZXggPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBOZ3VDYXJvdXNlbE91dGxldENvbnRleHQ8YW55PihkYXRhW2N1cnJlbnRJbmRleF0pO1xyXG4gICAgICAgICAgY29udGV4dC5pbmRleCA9IGN1cnJlbnRJbmRleDtcclxuICAgICAgICAgIHZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KFxyXG4gICAgICAgICAgICBub2RlLnRlbXBsYXRlLFxyXG4gICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXhcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50SW5kZXggPT0gbnVsbCkge1xyXG4gICAgICAgICAgdmlld0NvbnRhaW5lci5yZW1vdmUoYWRqdXN0ZWRQcmV2aW91c0luZGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgdmlldyA9IHZpZXdDb250YWluZXIuZ2V0KGFkanVzdGVkUHJldmlvdXNJbmRleCk7XHJcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLm1vdmUodmlldywgY3VycmVudEluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICB0aGlzLl91cGRhdGVJdGVtSW5kZXhDb250ZXh0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2Fyb3VzZWwpIHtcclxuICAgICAgdGhpcy5fc3RvcmVDYXJvdXNlbERhdGEoKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSBpbmRleC1yZWxhdGVkIGNvbnRleHQgZm9yIGVhY2ggcm93IHRvIHJlZmxlY3QgYW55IGNoYW5nZXMgaW4gdGhlIGluZGV4IG9mIHRoZSByb3dzLFxyXG4gICAqIGUuZy4gZmlyc3QvbGFzdC9ldmVuL29kZC5cclxuICAgKi9cclxuICBwcml2YXRlIF91cGRhdGVJdGVtSW5kZXhDb250ZXh0KCkge1xyXG4gICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lcjtcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCByZW5kZXJJbmRleCA9IDAsIGNvdW50ID0gdmlld0NvbnRhaW5lci5sZW5ndGg7XHJcbiAgICAgIHJlbmRlckluZGV4IDwgY291bnQ7XHJcbiAgICAgIHJlbmRlckluZGV4KytcclxuICAgICkge1xyXG4gICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQocmVuZGVySW5kZXgpIGFzIGFueTtcclxuICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgIGNvbnRleHQuY291bnQgPSBjb3VudDtcclxuICAgICAgY29udGV4dC5maXJzdCA9IHJlbmRlckluZGV4ID09PSAwO1xyXG4gICAgICBjb250ZXh0Lmxhc3QgPSByZW5kZXJJbmRleCA9PT0gY291bnQgLSAxO1xyXG4gICAgICBjb250ZXh0LmV2ZW4gPSByZW5kZXJJbmRleCAlIDIgPT09IDA7XHJcbiAgICAgIGNvbnRleHQub2RkID0gIWNvbnRleHQuZXZlbjtcclxuICAgICAgY29udGV4dC5pbmRleCA9IHJlbmRlckluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0Tm9kZURlZihkYXRhOiBhbnksIGk6IG51bWJlcik6IE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPGFueT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5fZGVmRGlyZWMpO1xyXG4gICAgaWYgKHRoaXMuX2RlZkRpcmVjLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZGVmRGlyZWMuZmlyc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm9kZURlZiA9XHJcbiAgICAgIHRoaXMuX2RlZkRpcmVjLmZpbmQoZGVmID0+IGRlZi53aGVuICYmIGRlZi53aGVuKGksIGRhdGEpKSB8fFxyXG4gICAgICB0aGlzLl9kZWZhdWx0Tm9kZURlZjtcclxuXHJcbiAgICByZXR1cm4gbm9kZURlZjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29ic2VydmVSZW5kZXJDaGFuZ2VzKCkge1xyXG4gICAgbGV0IGRhdGFTdHJlYW06IE9ic2VydmFibGU8YW55W10+IHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIGlmICh0aGlzLl9kYXRhU291cmNlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xyXG4gICAgICBkYXRhU3RyZWFtID0gdGhpcy5fZGF0YVNvdXJjZTtcclxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9kYXRhU291cmNlKSkge1xyXG4gICAgICBkYXRhU3RyZWFtID0gb2YodGhpcy5fZGF0YVNvdXJjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGFTdHJlYW0pIHtcclxuICAgICAgdGhpcy5fZGF0YVN1YnNjcmlwdGlvbiA9IGRhdGFTdHJlYW1cclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyTm9kZUNoYW5nZXMoZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLmlzTGFzdCA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5wdXRWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy50eXBlID0gdGhpcy5pbnB1dHMuZ3JpZC5hbGwgIT09IDAgPyAnZml4ZWQnIDogJ3Jlc3BvbnNpdmUnO1xyXG4gICAgdGhpcy5sb29wID0gdGhpcy5pbnB1dHMubG9vcCB8fCBmYWxzZTtcclxuICAgIHRoaXMuaW5wdXRzLmVhc2luZyA9IHRoaXMuaW5wdXRzLmVhc2luZyB8fCAnY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknO1xyXG4gICAgdGhpcy50b3VjaC5hY3RpdmUgPSB0aGlzLmlucHV0cy50b3VjaCB8fCBmYWxzZTtcclxuICAgIHRoaXMuUlRMID0gdGhpcy5pbnB1dHMuUlRMID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IHRoaXMuaW5wdXRzLmludGVydmFsIHx8IG51bGw7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID1cclxuICAgICAgdHlwZW9mIHRoaXMuaW5wdXRzLnZlbG9jaXR5ID09PSAnbnVtYmVyJ1xyXG4gICAgICAgID8gdGhpcy5pbnB1dHMudmVsb2NpdHlcclxuICAgICAgICA6IHRoaXMudmVsb2NpdHk7XHJcblxyXG4gICAgaWYgKHRoaXMuaW5wdXRzLnZlcnRpY2FsICYmIHRoaXMuaW5wdXRzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy52ZXJ0aWNhbC5lbmFibGVkID0gdGhpcy5pbnB1dHMudmVydGljYWwuZW5hYmxlZDtcclxuICAgICAgdGhpcy52ZXJ0aWNhbC5oZWlnaHQgPSB0aGlzLmlucHV0cy52ZXJ0aWNhbC5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpcmVjdGlvblN5bSA9IHRoaXMuUlRMID8gJycgOiAnLSc7XHJcbiAgICB0aGlzLnBvaW50ID1cclxuICAgICAgdGhpcy5pbnB1dHMucG9pbnQgJiYgdHlwZW9mIHRoaXMuaW5wdXRzLnBvaW50LnZpc2libGUgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgPyB0aGlzLmlucHV0cy5wb2ludC52aXNpYmxlXHJcbiAgICAgICAgOiB0cnVlO1xyXG5cclxuICAgIHRoaXMuX2Nhcm91c2VsU2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb25SZXNpemluZyhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5vblJlc2l6ZSk7XHJcbiAgICB0aGlzLm9uUmVzaXplID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmRldmljZVdpZHRoICE9PSBldmVudC50YXJnZXQub3V0ZXJXaWR0aCkge1xyXG4gICAgICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCBgYCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcmVDYXJvdXNlbERhdGEoKTtcclxuICAgICAgfVxyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcblxyXG4gIC8qKiBHZXQgVG91Y2ggaW5wdXQgKi9cclxuICBwcml2YXRlIF90b3VjaCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0cy50b3VjaCkge1xyXG4gICAgICBjb25zdCBoYW1tZXJ0aW1lID0gbmV3IEhhbW1lcih0aGlzLnRvdWNoQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICBoYW1tZXJ0aW1lLmdldCgncGFuJykuc2V0KHtkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fSE9SSVpPTlRBTH0pO1xyXG5cclxuICAgICAgaGFtbWVydGltZS5vbigncGFuc3RhcnQnLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxXaWR0aCA9IHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAvLyB0aGlzLnRvdWNoVHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm1bdGhpcy5kZXZpY2VUeXBlXTtcclxuICAgICAgICB0aGlzLmRleFZhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5fc2V0U3R5bGUodGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsICcnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW51cCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5sZWZ0JywgZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGhhbW1lcnRpbWUub24oJ3BhbmRvd24nLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fdG91Y2hIYW5kbGluZygncGFucmlnaHQnLCBldik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFubGVmdCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5sZWZ0JywgZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGhhbW1lcnRpbWUub24oJ3BhbnJpZ2h0JywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbnJpZ2h0JywgZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGhhbW1lcnRpbWUub24oJ3BhbmVuZCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGV2LnZlbG9jaXR5KSA+PSB0aGlzLnZlbG9jaXR5KSB7XHJcbiAgICAgICAgICB0aGlzLnRvdWNoLnZlbG9jaXR5ID0gZXYudmVsb2NpdHk7XHJcbiAgICAgICAgICBsZXQgZGlyZWMgPSAwO1xyXG4gICAgICAgICAgaWYgKCF0aGlzLlJUTCkge1xyXG4gICAgICAgICAgICBkaXJlYyA9IHRoaXMudG91Y2guc3dpcGUgPT09ICdwYW5yaWdodCcgPyAwIDogMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpcmVjID0gdGhpcy50b3VjaC5zd2lwZSA9PT0gJ3BhbnJpZ2h0JyA/IDEgOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoZGlyZWMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRleFZhbCA9IDA7XHJcbiAgICAgICAgICB0aGlzLl9zZXRTdHlsZShcclxuICAgICAgICAgICAgdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgICAndHJhbnNpdGlvbicsXHJcbiAgICAgICAgICAgICd0cmFuc2Zvcm0gMzI0bXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgLy8gdGhpcy5fc2V0U3R5bGUodGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGhhbW1lcnRpbWUub24oJ2hhbW1lci5pbnB1dCcsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIC8vIGFsbG93IG5lc3RlZCB0b3VjaCBldmVudHMgdG8gbm8gcHJvcGFnYXRlLCB0aGlzIG1heSBoYXZlIG90aGVyIHNpZGUgYWZmZWN0cyBidXQgd29ya3MgZm9yIG5vdy5cclxuICAgICAgICAvLyBUT0RPOiBJdCBpcyBwcm9iYWJseSBiZXR0ZXIgdG8gY2hlY2sgdGhlIHNvdXJjZSBlbGVtZW50IG9mIHRoZSBldmVudCBhbmQgb25seSBhcHBseSB0aGUgaGFuZGxlIHRvIHRoZSBjb3JyZWN0IGNhcm91c2VsXHJcbiAgICAgICAgZXYuc3JjRXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGhhbmRsZSB0b3VjaCBpbnB1dCAqL1xyXG4gIHByaXZhdGUgX3RvdWNoSGFuZGxpbmcoZTogc3RyaW5nLCBldjogYW55KTogdm9pZCB7XHJcbiAgICAvLyB2ZXJ0aWNhbCB0b3VjaCBldmVudHMgc2VlbSB0byBjYXVzZSB0byBwYW5zdGFydCBldmVudCB3aXRoIGFuIG9kZCBkZWx0YVxyXG4gICAgLy8gYW5kIGEgY2VudGVyIG9mIHt4OjAseTowfSBzbyB0aGlzIHdpbGwgaWdub3JlIHRoZW1cclxuICAgIGlmIChldi5jZW50ZXIueCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZXYgPSBNYXRoLmFicyh0aGlzLnZlcnRpY2FsLmVuYWJsZWQgPyBldi5kZWx0YVkgOiBldi5kZWx0YVgpO1xyXG4gICAgbGV0IHZhbHQgPSBldiAtIHRoaXMuZGV4VmFsO1xyXG4gICAgdmFsdCA9XHJcbiAgICAgIHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnXHJcbiAgICAgICAgPyAoTWF0aC5hYnMoZXYgLSB0aGlzLmRleFZhbCkgL1xyXG4gICAgICAgICh0aGlzLnZlcnRpY2FsLmVuYWJsZWRcclxuICAgICAgICAgID8gdGhpcy52ZXJ0aWNhbC5oZWlnaHRcclxuICAgICAgICAgIDogdGhpcy5jYXJvdXNlbFdpZHRoKSkgKlxyXG4gICAgICAgIDEwMFxyXG4gICAgICAgIDogdmFsdDtcclxuICAgIHRoaXMuZGV4VmFsID0gZXY7XHJcbiAgICB0aGlzLnRvdWNoLnN3aXBlID0gZTtcclxuICAgIHRoaXMuX3NldFRvdWNoVHJhbnNmcm9tKGUsIHZhbHQpO1xyXG4gICAgdGhpcy5fc2V0VHJhbnNmb3JtRnJvbVRvdWNoKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0VG91Y2hUcmFuc2Zyb20oZTogc3RyaW5nLCB2YWx0OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMuUlRMID8gJ3BhbnJpZ2h0JyA6ICdwYW5sZWZ0JztcclxuICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPVxyXG4gICAgICBlID09PSBjb25kaXRpb24gPyB2YWx0ICsgdGhpcy50b3VjaFRyYW5zZm9ybSA6IHRoaXMudG91Y2hUcmFuc2Zvcm0gLSB2YWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0VHJhbnNmb3JtRnJvbVRvdWNoKCkge1xyXG4gICAgaWYgKHRoaXMudG91Y2hUcmFuc2Zvcm0gPCAwKSB7XHJcbiAgICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPSAwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnID8gJyUnIDogJ3B4JztcclxuXHJcbiAgICBjb25zdCBtYXhUcmFuc2xhdGUgPSAodGhpcy5pdGVtV2lkdGggKiB0aGlzLl9kYXRhU291cmNlLmxlbmd0aCkgLSB0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgIGlmIChtYXhUcmFuc2xhdGUgPD0gdGhpcy50b3VjaFRyYW5zZm9ybSkge1xyXG4gICAgICB0aGlzLnRvdWNoVHJhbnNmb3JtID0gbWF4VHJhbnNsYXRlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMub25Nb3ZlLmVtaXQodGhpcyk7XHJcbiAgICB0aGlzLl9zZXRTdHlsZShcclxuICAgICAgdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgdGhpcy52ZXJ0aWNhbC5lbmFibGVkXHJcbiAgICAgICAgPyBgdHJhbnNsYXRlM2QoMCwgJHt0aGlzLmRpcmVjdGlvblN5bX0ke3RoaXMudG91Y2hUcmFuc2Zvcm19JHt0eXBlfSwgMClgXHJcbiAgICAgICAgOiBgdHJhbnNsYXRlM2QoJHt0aGlzLmRpcmVjdGlvblN5bX0ke3RoaXMudG91Y2hUcmFuc2Zvcm19JHt0eXBlfSwgMCwgMClgXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqIHRoaXMgZm4gdXNlZCB0byBkaXNhYmxlIHRoZSBpbnRlcnZhbCB3aGVuIGl0IGlzIG5vdCBvbiB0aGUgdmlld3BvcnQgKi9cclxuICBwcml2YXRlIF9vbldpbmRvd1Njcm9sbGluZygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRvcCA9IHRoaXMuY2Fyb3VzZWwub2Zmc2V0VG9wO1xyXG4gICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgY29uc3QgaGVpZ2h0dCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNvbnN0IGNhcm91c2VsSGVpZ2h0ID0gdGhpcy5jYXJvdXNlbC5vZmZzZXRIZWlnaHQ7XHJcbiAgICBjb25zdCBpc0Nhcm91c2VsT25TY3JlZW4gPVxyXG4gICAgICB0b3AgPD0gc2Nyb2xsWSArIGhlaWdodHQgLSBjYXJvdXNlbEhlaWdodCAvIDQgJiZcclxuICAgICAgdG9wICsgY2Fyb3VzZWxIZWlnaHQgLyAyID49IHNjcm9sbFk7XHJcblxyXG4gICAgaWYgKGlzQ2Fyb3VzZWxPblNjcmVlbikge1xyXG4gICAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkLm5leHQoMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkLm5leHQoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogc3RvcmUgZGF0YSBiYXNlZCBvbiB3aWR0aCBvZiB0aGUgc2NyZWVuIGZvciB0aGUgY2Fyb3VzZWwgKi9cclxuICBwcml2YXRlIF9zdG9yZUNhcm91c2VsRGF0YSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGV2aWNlV2lkdGggPSBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpXHJcbiAgICAgID8gd2luZG93LmlubmVyV2lkdGhcclxuICAgICAgOiAxMjAwO1xyXG5cclxuICAgIHRoaXMuY2Fyb3VzZWxXaWR0aCA9IHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xyXG4gICAgICB0aGlzLmRldmljZVR5cGUgPVxyXG4gICAgICAgIHRoaXMuZGV2aWNlV2lkdGggPj0gMTIwMFxyXG4gICAgICAgICAgPyAnbGcnXHJcbiAgICAgICAgICA6IHRoaXMuZGV2aWNlV2lkdGggPj0gOTkyXHJcbiAgICAgICAgICA/ICdtZCdcclxuICAgICAgICAgIDogdGhpcy5kZXZpY2VXaWR0aCA+PSA3NjhcclxuICAgICAgICAgICAgPyAnc20nXHJcbiAgICAgICAgICAgIDogJ3hzJztcclxuXHJcbiAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmlucHV0cy5ncmlkW3RoaXMuZGV2aWNlVHlwZV07XHJcbiAgICAgIHRoaXMuaXRlbVdpZHRoID0gdGhpcy5jYXJvdXNlbFdpZHRoIC8gdGhpcy5pdGVtcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBNYXRoLmNlaWwodGhpcy5jYXJvdXNlbFdpZHRoIC8gdGhpcy5pbnB1dHMuZ3JpZC5hbGwpO1xyXG4gICAgICB0aGlzLml0ZW1XaWR0aCA9IHRoaXMuaW5wdXRzLmdyaWQuYWxsO1xyXG4gICAgICB0aGlzLmRldmljZVR5cGUgPSAnYWxsJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNsaWRlSXRlbXMgPSArKHRoaXMuaW5wdXRzLnNsaWRlIDwgdGhpcy5pdGVtc1xyXG4gICAgICA/IHRoaXMuaW5wdXRzLnNsaWRlXHJcbiAgICAgIDogdGhpcy5pdGVtcyk7XHJcbiAgICB0aGlzLmxvYWQgPVxyXG4gICAgICB0aGlzLmlucHV0cy5sb2FkID49IHRoaXMuc2xpZGVJdGVtcyA/IHRoaXMuaW5wdXRzLmxvYWQgOiB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICB0aGlzLnNwZWVkID1cclxuICAgICAgdGhpcy5pbnB1dHMuc3BlZWQgJiYgdGhpcy5pbnB1dHMuc3BlZWQgPiAtMSA/IHRoaXMuaW5wdXRzLnNwZWVkIDogNDAwO1xyXG4gICAgdGhpcy5fY2Fyb3VzZWxQb2ludCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEluaXQgY2Fyb3VzZWwgcG9pbnQgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFBvaW50KCk6IHZvaWQge1xyXG4gICAgLy8gZGVidWdnZXI7XHJcbiAgICAvLyBpZiAodGhpcy51c2VyRGF0YS5wb2ludC52aXNpYmxlID09PSB0cnVlKSB7XHJcbiAgICBjb25zdCBOb3MgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gKHRoaXMuaXRlbXMgLSB0aGlzLnNsaWRlSXRlbXMpO1xyXG4gICAgdGhpcy5wb2ludEluZGV4ID0gTWF0aC5jZWlsKE5vcyAvIHRoaXMuc2xpZGVJdGVtcyk7XHJcbiAgICBjb25zdCBwb2ludGVycyA9IFtdO1xyXG5cclxuICAgIGlmICh0aGlzLnBvaW50SW5kZXggPiAxIHx8ICF0aGlzLmlucHV0cy5wb2ludC5oaWRlT25TaW5nbGVTbGlkZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnRJbmRleDsgaSsrKSB7XHJcbiAgICAgICAgcG9pbnRlcnMucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5wb2ludE51bWJlcnMgPSBwb2ludGVycztcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9pbnROdW1iZXJzKTtcclxuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk7XHJcbiAgICBpZiAodGhpcy5wb2ludEluZGV4IDw9IDEpIHtcclxuICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiAhdGhpcy5sb29wKSB7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICAvKiogY2hhbmdlIHRoZSBhY3RpdmUgcG9pbnQgaW4gY2Fyb3VzZWwgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFBvaW50QWN0aXZlcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGkgPSBNYXRoLmNlaWwodGhpcy5jdXJyZW50U2xpZGUgLyB0aGlzLnNsaWRlSXRlbXMpO1xyXG4gICAgdGhpcy5hY3RpdmVQb2ludCA9IGk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKiogc2V0IHRoZSBzdHlsZSBvZiB0aGUgY2Fyb3VzZWwgYmFzZWQgdGhlIGlucHV0cyBkYXRhICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxTaXplKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b2tlbiA9IHRoaXMuX2dlbmVyYXRlSUQoKTtcclxuICAgIGxldCBkaXNtID0gJyc7XHJcbiAgICB0aGlzLnN0eWxlaWQgPSBgLiR7XHJcbiAgICAgIHRoaXMudG9rZW5cclxuICAgICAgfSA+IC5jYXJvdXNlbC13cmFwcGVyID4gLm5ndWNhcm91c2VsID4gLm5ndS10b3VjaC1jb250YWluZXIgPiAubmd1Y2Fyb3VzZWwtaXRlbXNgO1xyXG5cclxuICAgIGlmICh0aGlzLmlucHV0cy5jdXN0b20gPT09ICdiYW5uZXInKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuY2Fyb3VzZWwsICdiYW5uZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnB1dHMuYW5pbWF0aW9uID09PSAnbGF6eScpIHtcclxuICAgICAgZGlzbSArPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge3RyYW5zaXRpb246IHRyYW5zZm9ybSAuNnMgZWFzZTt9YDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXRlbVN0eWxlID0gJyc7XHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF94cyA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcclxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQueHN9cHh9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX3NtID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxyXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC5zbX1weH1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfbWQgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXHJcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLm1kfXB4fWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9sZyA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcclxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQubGd9cHh9YDtcclxuXHJcbiAgICAgIGl0ZW1TdHlsZSA9IGBAbWVkaWEgKG1heC13aWR0aDo3NjdweCl7JHtpdGVtV2lkdGhfeHN9fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXske2l0ZW1XaWR0aF9zbX19XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6OTkycHgpeyR7aXRlbVdpZHRoX21kfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpeyR7aXRlbVdpZHRoX2xnfX1gO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfeHMgPVxyXG4gICAgICAgIHRoaXMuaW5wdXRzLnR5cGUgPT09ICdtb2JpbGUnXHJcbiAgICAgICAgICA/IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAkezk1IC9cclxuICAgICAgICAgICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7IHdpZHRoOiAkezk1IC8gK3RoaXMuaW5wdXRzLmdyaWQueHN9JTt9YFxyXG4gICAgICAgICAgOiBgJHt0aGlzLnN0eWxlaWR9IC5pdGVtIHtmbGV4OiAwIDAgJHsxMDAgL1xyXG4gICAgICAgICAgK3RoaXMuaW5wdXRzLmdyaWQueHN9JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQueHN9JTt9YDtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9zbSA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cclxuICAgICAgK3RoaXMuaW5wdXRzLmdyaWQuc219JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQuc219JX1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfbWQgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXHJcbiAgICAgICt0aGlzLmlucHV0cy5ncmlkLm1kfSU7IHdpZHRoOiAkezEwMCAvICt0aGlzLmlucHV0cy5ncmlkLm1kfSV9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX2xnID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtmbGV4OiAwIDAgJHsxMDAgL1xyXG4gICAgICArdGhpcy5pbnB1dHMuZ3JpZC5sZ30lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC5sZ30lfWA7XHJcblxyXG4gICAgICBpdGVtU3R5bGUgPSBgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpeyR7aXRlbVdpZHRoX3hzfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7JHtpdGVtV2lkdGhfc219fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXske2l0ZW1XaWR0aF9tZH19XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXske2l0ZW1XaWR0aF9sZ319YDtcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLl9kZWZEaXJlYyk7XHJcbiAgICAgIHRoaXMuX2RlZkRpcmVjLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIGl0ZW1TdHlsZSA9IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAke1xyXG4gICAgICAgIHRoaXMuaW5wdXRzLmdyaWQuYWxsXHJcbiAgICAgICAgfXB4OyB3aWR0aDogJHt0aGlzLmlucHV0cy5ncmlkLmFsbH1weDt9YDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgdGhpcy50b2tlbik7XHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxyXG4gICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAnbmd1dmVydGljYWwnXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgIGAke3RoaXMudmVydGljYWwuaGVpZ2h0fXB4YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG4gICAgdGhpcy5SVEwgJiZcclxuICAgICF0aGlzLnZlcnRpY2FsLmVuYWJsZWQgJiZcclxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuY2Fyb3VzZWwsICduZ3VydGwnKTtcclxuICAgIHRoaXMuX2NyZWF0ZVN0eWxlRWxlbShgJHtkaXNtfSAke2l0ZW1TdHlsZX1gKTtcclxuICAgIHRoaXMuX3N0b3JlQ2Fyb3VzZWxEYXRhKCk7XHJcbiAgfVxyXG5cclxuICAvKiogbG9naWMgdG8gc2Nyb2xsIHRoZSBjYXJvdXNlbCBzdGVwIDEgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFNjcm9sbE9uZShCdG46IG51bWJlcik6IHZvaWQge1xyXG4gICAgbGV0IGl0ZW1TcGVlZCA9IHRoaXMuc3BlZWQ7XHJcbiAgICBsZXQgdHJhbnNsYXRlWHZhbCxcclxuICAgICAgY3VycmVudFNsaWRlID0gMDtcclxuICAgIGNvbnN0IHRvdWNoTW92ZSA9IE1hdGguY2VpbCh0aGlzLmRleFZhbCAvIHRoaXMuaXRlbVdpZHRoKTtcclxuICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICcnKTtcclxuXHJcbiAgICBpZiAodGhpcy5wb2ludEluZGV4ID09PSAxKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAoQnRuID09PSAwICYmICgoIXRoaXMubG9vcCAmJiAhdGhpcy5pc0ZpcnN0KSB8fCB0aGlzLmxvb3ApKSB7XHJcbiAgICAgIGNvbnN0IHNsaWRlID0gdGhpcy5zbGlkZUl0ZW1zICogdGhpcy5wb2ludEluZGV4O1xyXG5cclxuICAgICAgY29uc3QgY3VycmVudFNsaWRlRCA9IHRoaXMuY3VycmVudFNsaWRlIC0gdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICBjb25zdCBNb3ZlU2xpZGUgPSBjdXJyZW50U2xpZGVEICsgdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUgPT09IDApIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5pdGVtcztcclxuICAgICAgICBpdGVtU3BlZWQgPSA0MDA7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlSXRlbXMgPj0gTW92ZVNsaWRlKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gdHJhbnNsYXRlWHZhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICAgIGlmICh0b3VjaE1vdmUgPiB0aGlzLnNsaWRlSXRlbXMpIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlIC0gdG91Y2hNb3ZlO1xyXG4gICAgICAgICAgaXRlbVNwZWVkID0gMjAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZSAtIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxUd28oQnRuLCBjdXJyZW50U2xpZGUsIGl0ZW1TcGVlZCk7XHJcbiAgICB9IGVsc2UgaWYgKEJ0biA9PT0gMSAmJiAoKCF0aGlzLmxvb3AgJiYgIXRoaXMuaXNMYXN0KSB8fCB0aGlzLmxvb3ApKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIDw9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLml0ZW1zICsgdGhpcy5zbGlkZUl0ZW1zICYmXHJcbiAgICAgICAgIXRoaXMuaXNMYXN0XHJcbiAgICAgICkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLml0ZW1zO1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0xhc3QpIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSB0cmFuc2xhdGVYdmFsID0gMDtcclxuICAgICAgICBpdGVtU3BlZWQgPSA0MDA7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICAgIGlmICh0b3VjaE1vdmUgPiB0aGlzLnNsaWRlSXRlbXMpIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5zbGlkZUl0ZW1zICsgKHRvdWNoTW92ZSAtIHRoaXMuc2xpZGVJdGVtcyk7XHJcbiAgICAgICAgICBpdGVtU3BlZWQgPSAyMDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbFR3byhCdG4sIGN1cnJlbnRTbGlkZSwgaXRlbVNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjdWJpYy1iZXppZXIoMC4xNSwgMS4wNCwgMC41NCwgMS4xMylcclxuICB9XHJcblxyXG4gIC8qKiBsb2dpYyB0byBzY3JvbGwgdGhlIGNhcm91c2VsIHN0ZXAgMiAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsU2Nyb2xsVHdvKFxyXG4gICAgQnRuOiBudW1iZXIsXHJcbiAgICBjdXJyZW50U2xpZGU6IG51bWJlcixcclxuICAgIGl0ZW1TcGVlZDogbnVtYmVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cclxuXHJcbiAgICBpZiAodGhpcy5kZXhWYWwgIT09IDApIHtcclxuICAgICAgY29uc3QgdmFsID0gTWF0aC5hYnModGhpcy50b3VjaC52ZWxvY2l0eSk7XHJcbiAgICAgIGxldCBzb210ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAodGhpcy5kZXhWYWwgLyB2YWwgLyB0aGlzLmRleFZhbCkgKiAodGhpcy5kZXZpY2VXaWR0aCAtIHRoaXMuZGV4VmFsKVxyXG4gICAgICApO1xyXG4gICAgICBzb210ID0gc29tdCA+IGl0ZW1TcGVlZCA/IGl0ZW1TcGVlZCA6IHNvbXQ7XHJcbiAgICAgIGl0ZW1TcGVlZCA9IHNvbXQgPCAyMDAgPyAyMDAgOiBzb210O1xyXG4gICAgICB0aGlzLmRleFZhbCA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy53aXRoQW5pbSkge1xyXG4gICAgICB0aGlzLl9zZXRTdHlsZShcclxuICAgICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ3RyYW5zaXRpb24nLFxyXG4gICAgICAgIGB0cmFuc2Zvcm0gJHtpdGVtU3BlZWR9bXMgJHt0aGlzLmlucHV0cy5lYXNpbmd9YFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmlucHV0cy5hbmltYXRpb24gJiZcclxuICAgICAgdGhpcy5fY2Fyb3VzZWxBbmltYXRvcihcclxuICAgICAgICBCdG4sXHJcbiAgICAgICAgY3VycmVudFNsaWRlICsgMSxcclxuICAgICAgICBjdXJyZW50U2xpZGUgKyB0aGlzLml0ZW1zLFxyXG4gICAgICAgIGl0ZW1TcGVlZCxcclxuICAgICAgICBNYXRoLmFicyh0aGlzLmN1cnJlbnRTbGlkZSAtIGN1cnJlbnRTbGlkZSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCBgYCk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGFTb3VyY2UpO1xyXG4gICAgdGhpcy5pdGVtTGVuZ3RoID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aDtcclxuICAgIHRoaXMuX3RyYW5zZm9ybVN0eWxlKGN1cnJlbnRTbGlkZSk7XHJcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IGN1cnJlbnRTbGlkZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uTW92ZS5lbWl0KHRoaXMpO1xyXG4gICAgfSwgNDAwKTtcclxuXHJcbiAgICB0aGlzLl9jYXJvdXNlbFBvaW50QWN0aXZlcigpO1xyXG4gICAgdGhpcy5fY2Fyb3VzZWxMb2FkVHJpZ2dlcigpO1xyXG4gICAgdGhpcy53aXRoQW5pbSA9IHRydWU7XHJcbiAgICAvLyBpZiAoY3VycmVudFNsaWRlID09PSAxMikge1xyXG4gICAgLy8gICB0aGlzLl9zd2l0Y2hEYXRhU291cmNlKHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICAvKiogYm9vbGVhbiBmdW5jdGlvbiBmb3IgbWFraW5nIGlzRmlyc3QgYW5kIGlzTGFzdCAqL1xyXG4gIHByaXZhdGUgX2J0bkJvb2xlYW4oZmlyc3Q6IG51bWJlciwgbGFzdDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmlzRmlyc3QgPSAhIWZpcnN0O1xyXG4gICAgdGhpcy5pc0xhc3QgPSAhIWxhc3Q7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90cmFuc2Zvcm1TdHJpbmcoZ3JpZDogc3RyaW5nLCBzbGlkZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCBjb2xsZWN0ID0gJyc7XHJcbiAgICBjb2xsZWN0ICs9IGAke3RoaXMuc3R5bGVpZH0geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKGA7XHJcblxyXG4gICAgaWYgKHRoaXMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybVtncmlkXSA9XHJcbiAgICAgICAgKHRoaXMudmVydGljYWwuaGVpZ2h0IC8gdGhpcy5pbnB1dHMuZ3JpZFtncmlkXSkgKiBzbGlkZTtcclxuICAgICAgY29sbGVjdCArPSBgMCwgLSR7dGhpcy50cmFuc2Zvcm1bZ3JpZF19cHgsIDBgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1bZ3JpZF0gPSAoMTAwIC8gdGhpcy5pbnB1dHMuZ3JpZFtncmlkXSkgKiBzbGlkZTtcclxuICAgICAgY29sbGVjdCArPSBgJHt0aGlzLmRpcmVjdGlvblN5bX0ke3RoaXMudHJhbnNmb3JtW2dyaWRdfSUsIDAsIDBgO1xyXG4gICAgfVxyXG4gICAgY29sbGVjdCArPSBgKTsgfWA7XHJcbiAgICByZXR1cm4gY29sbGVjdDtcclxuICB9XHJcblxyXG4gIC8qKiBzZXQgdGhlIHRyYW5zZm9ybSBzdHlsZSB0byBzY3JvbGwgdGhlIGNhcm91c2VsICAqL1xyXG4gIHByaXZhdGUgX3RyYW5zZm9ybVN0eWxlKHNsaWRlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGxldCBzbGlkZUNzcyA9ICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnKSB7XHJcbiAgICAgIHNsaWRlQ3NzID0gYEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKFxyXG4gICAgICAgICd4cycsXHJcbiAgICAgICAgc2xpZGVcclxuICAgICAgKX19XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKCdzbScsIHNsaWRlKX0gfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHske3RoaXMuX3RyYW5zZm9ybVN0cmluZygnbWQnLCBzbGlkZSl9IH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKCdsZycsIHNsaWRlKX0gfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5hbGwgPSB0aGlzLmlucHV0cy5ncmlkLmFsbCAqIHNsaWRlO1xyXG4gICAgICB0aGlzLnRvdWNoVHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm0uYWxsO1xyXG4gICAgICBzbGlkZUNzcyA9IGAke3RoaXMuc3R5bGVpZH0geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25TeW1cclxuICAgICAgICB9JHt0aGlzLnRyYW5zZm9ybS5hbGx9cHgsIDAsIDApO2A7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNhcm91c2VsQ3NzTm9kZS5pbm5lckhUTUwgPSBzbGlkZUNzcztcclxuICB9XHJcblxyXG4gIC8qKiB0aGlzIHdpbGwgdHJpZ2dlciB0aGUgY2Fyb3VzZWwgdG8gbG9hZCB0aGUgaXRlbXMgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbExvYWRUcmlnZ2VyKCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmlucHV0cy5sb2FkID09PSAnbnVtYmVyJykge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5sb2FkIDw9IHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5pdGVtcyAmJlxyXG4gICAgICB0aGlzLmNhcm91c2VsTG9hZC5lbWl0KHRoaXMuY3VycmVudFNsaWRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBnZW5lcmF0ZSBDbGFzcyBmb3IgZWFjaCBjYXJvdXNlbCB0byBzZXQgc3BlY2lmaWMgc3R5bGUgKi9cclxuICBwcml2YXRlIF9nZW5lcmF0ZUlEKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgdGV4dCA9ICcnO1xyXG4gICAgY29uc3QgcG9zc2libGUgPVxyXG4gICAgICAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgIHRleHQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBuZ3VjYXJvdXNlbCR7dGV4dH1gO1xyXG4gIH1cclxuXHJcbiAgLyoqIGhhbmRsZSB0aGUgYXV0byBzbGlkZSAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsSW50ZXJ2YWwoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudDtcclxuICAgIGlmICh0aGlzLmludGVydmFsICYmIHRoaXMubG9vcCkge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyNCA9IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5vblNjcm9sbGluZyk7XHJcbiAgICAgICAgdGhpcy5vblNjcm9sbGluZyA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fb25XaW5kb3dTY3JvbGxpbmcoKTtcclxuICAgICAgICB9LCA2MDApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHBsYXkkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ21vdXNlbGVhdmUnKS5waXBlKG1hcFRvKDEpKTtcclxuICAgICAgY29uc3QgcGF1c2UkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ21vdXNlZW50ZXInKS5waXBlKG1hcFRvKDApKTtcclxuXHJcbiAgICAgIGNvbnN0IHRvdWNoUGxheSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAndG91Y2hzdGFydCcpLnBpcGUobWFwVG8oMSkpO1xyXG4gICAgICBjb25zdCB0b3VjaFBhdXNlJCA9IGZyb21FdmVudChjb250YWluZXIsICd0b3VjaGVuZCcpLnBpcGUobWFwVG8oMCkpO1xyXG5cclxuICAgICAgY29uc3QgaW50ZXJ2YWwkID0gaW50ZXJ2YWwodGhpcy5pbnB1dHMuaW50ZXJ2YWwudGltaW5nKS5waXBlKG1hcFRvKDEpKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxJbnQgPSBtZXJnZShcclxuICAgICAgICAgIHBsYXkkLFxyXG4gICAgICAgICAgdG91Y2hQbGF5JCxcclxuICAgICAgICAgIHBhdXNlJCxcclxuICAgICAgICAgIHRvdWNoUGF1c2UkLFxyXG4gICAgICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJFxyXG4gICAgICAgIClcclxuICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBzdGFydFdpdGgoMSksXHJcbiAgICAgICAgICAgIHN3aXRjaE1hcCh2YWwgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNIb3ZlcmVkID0gIXZhbDtcclxuICAgICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgICAgICByZXR1cm4gdmFsID8gaW50ZXJ2YWwkIDogZW1wdHkoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoMSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSwgdGhpcy5pbnRlcnZhbC5pbml0aWFsRGVsYXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdXBkYXRlSXRlbUluZGV4Q29udGV4dEFuaSgpIHtcclxuICAgIGNvbnN0IHZpZXdDb250YWluZXIgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXI7XHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgcmVuZGVySW5kZXggPSAwLCBjb3VudCA9IHZpZXdDb250YWluZXIubGVuZ3RoO1xyXG4gICAgICByZW5kZXJJbmRleCA8IGNvdW50O1xyXG4gICAgICByZW5kZXJJbmRleCsrXHJcbiAgICApIHtcclxuICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KHJlbmRlckluZGV4KSBhcyBhbnk7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xyXG4gICAgICBjb250ZXh0LmNvdW50ID0gY291bnQ7XHJcbiAgICAgIGNvbnRleHQuZmlyc3QgPSByZW5kZXJJbmRleCA9PT0gMDtcclxuICAgICAgY29udGV4dC5sYXN0ID0gcmVuZGVySW5kZXggPT09IGNvdW50IC0gMTtcclxuICAgICAgY29udGV4dC5ldmVuID0gcmVuZGVySW5kZXggJSAyID09PSAwO1xyXG4gICAgICBjb250ZXh0Lm9kZCA9ICFjb250ZXh0LmV2ZW47XHJcbiAgICAgIGNvbnRleHQuaW5kZXggPSByZW5kZXJJbmRleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBhbmltYXRlIHRoZSBjYXJvdXNlbCBpdGVtcyAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsQW5pbWF0b3IoXHJcbiAgICBkaXJlY3Rpb246IG51bWJlcixcclxuICAgIHN0YXJ0OiBudW1iZXIsXHJcbiAgICBlbmQ6IG51bWJlcixcclxuICAgIHNwZWVkOiBudW1iZXIsXHJcbiAgICBsZW5ndGg6IG51bWJlcixcclxuICAgIHZpZXdDb250YWluZXIgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXJcclxuICApOiB2b2lkIHtcclxuICAgIGxldCB2YWwgPSBsZW5ndGggPCA1ID8gbGVuZ3RoIDogNTtcclxuICAgIHZhbCA9IHZhbCA9PT0gMSA/IDMgOiB2YWw7XHJcbiAgICBjb25zdCBjb2xsZWN0SW5kZXggPSBbXTtcclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydCAtIDE7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgIGNvbGxlY3RJbmRleC5wdXNoKGkpO1xyXG4gICAgICAgIHZhbCA9IHZhbCAqIDI7XHJcbiAgICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KGkpIGFzIGFueTtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcclxuICAgICAgICBjb250ZXh0LmFuaW1hdGUgPSB7dmFsdWU6IHRydWUsIHBhcmFtczoge2Rpc3RhbmNlOiB2YWx9fTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IGVuZCAtIDE7IGkgPj0gc3RhcnQgLSAxOyBpLS0pIHtcclxuICAgICAgICBjb2xsZWN0SW5kZXgucHVzaChpKTtcclxuICAgICAgICB2YWwgPSB2YWwgKiAyO1xyXG4gICAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChpKSBhcyBhbnk7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgICAgY29udGV4dC5hbmltYXRlID0ge3ZhbHVlOiB0cnVlLCBwYXJhbXM6IHtkaXN0YW5jZTogLXZhbH19O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9yZW1vdmVBbmltYXRpb25zKGNvbGxlY3RJbmRleCk7XHJcbiAgICB9LCBzcGVlZCAqIDAuNyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZW1vdmVBbmltYXRpb25zKGluZGV4czogbnVtYmVyW10pIHtcclxuICAgIGNvbnN0IHZpZXdDb250YWluZXIgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXI7XHJcbiAgICBpbmRleHMuZm9yRWFjaChpID0+IHtcclxuICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KGkpIGFzIGFueTtcclxuICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgIGNvbnRleHQuYW5pbWF0ZSA9IHt2YWx1ZTogZmFsc2UsIHBhcmFtczoge2Rpc3RhbmNlOiAwfX07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNob3J0IGZvcm0gZm9yIHNldEVsZW1lbnRTdHlsZSAqL1xyXG4gIHByaXZhdGUgX3NldFN0eWxlKGVsOiBhbnksIHByb3A6IGFueSwgdmFsOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLCBwcm9wLCB2YWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZvciBnZW5lcmF0aW5nIHN0eWxlIHRhZyAqL1xyXG4gIHByaXZhdGUgX2NyZWF0ZVN0eWxlRWxlbShkYXRhcz86IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3R5bGVJdGVtID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgIGlmIChkYXRhcykge1xyXG4gICAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVUZXh0KGRhdGFzKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVJdGVtLCBzdHlsZVRleHQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jYXJvdXNlbCwgc3R5bGVJdGVtKTtcclxuICAgIHJldHVybiBzdHlsZUl0ZW07XHJcbiAgfVxyXG59XHJcbiJdfQ==