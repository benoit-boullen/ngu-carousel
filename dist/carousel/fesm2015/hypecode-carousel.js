import { Injectable, Directive, ElementRef, TemplateRef, ViewContainerRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, EventEmitter, Inject, Input, isDevMode, IterableDiffers, Output, PLATFORM_ID, Renderer2, ViewChild, HostBinding, NgModule } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { empty, fromEvent, interval, merge, Observable, of, Subject } from 'rxjs';
import { mapTo, startWith, switchMap, takeUntil } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NguCarouselStore {
    /**
     * @param {?=} touch
     * @param {?=} vertical
     * @param {?=} interval
     * @param {?=} transform
     * @param {?=} button
     * @param {?=} visibleItems
     * @param {?=} deviceType
     * @param {?=} type
     * @param {?=} token
     * @param {?=} items
     * @param {?=} load
     * @param {?=} deviceWidth
     * @param {?=} carouselWidth
     * @param {?=} itemWidth
     * @param {?=} slideItems
     * @param {?=} itemWidthPer
     * @param {?=} itemLength
     * @param {?=} currentSlide
     * @param {?=} easing
     * @param {?=} speed
     * @param {?=} loop
     * @param {?=} dexVal
     * @param {?=} touchTransform
     * @param {?=} isEnd
     * @param {?=} isFirst
     * @param {?=} isLast
     * @param {?=} RTL
     * @param {?=} point
     * @param {?=} velocity
     */
    constructor(touch = new Touch(), vertical = new Vertical(), interval$$1, transform = new NguTransfrom(), button, visibleItems, deviceType, type = 'fixed', token = '', items = 0, load = 0, deviceWidth = 0, carouselWidth = 0, itemWidth = 0, slideItems = 0, itemWidthPer = 0, itemLength = 0, currentSlide = 0, easing = 'cubic-bezier(0, 0, 0.2, 1)', speed = 200, loop = false, dexVal = 0, touchTransform = 0, isEnd = false, isFirst = true, isLast = false, RTL = false, point = true, velocity = 1) {
        this.touch = touch;
        this.vertical = vertical;
        this.interval = interval$$1;
        this.transform = transform;
        this.button = button;
        this.visibleItems = visibleItems;
        this.deviceType = deviceType;
        this.type = type;
        this.token = token;
        this.items = items;
        this.load = load;
        this.deviceWidth = deviceWidth;
        this.carouselWidth = carouselWidth;
        this.itemWidth = itemWidth;
        this.slideItems = slideItems;
        this.itemWidthPer = itemWidthPer;
        this.itemLength = itemLength;
        this.currentSlide = currentSlide;
        this.easing = easing;
        this.speed = speed;
        this.loop = loop;
        this.dexVal = dexVal;
        this.touchTransform = touchTransform;
        this.isEnd = isEnd;
        this.isFirst = isFirst;
        this.isLast = isLast;
        this.RTL = RTL;
        this.point = point;
        this.velocity = velocity;
    }
}
class ItemsControl {
}
class Vertical {
}
class NguButton {
}
class Touch {
}
class NguTransfrom {
    /**
     * @param {?=} xs
     * @param {?=} sm
     * @param {?=} md
     * @param {?=} lg
     * @param {?=} all
     */
    constructor(xs = 0, sm = 0, md = 0, lg = 0, all = 0) {
        this.xs = xs;
        this.sm = sm;
        this.md = md;
        this.lg = lg;
        this.all = all;
    }
}
class NguCarouselConfig {
}
/**
 * @template T
 */
class NguCarouselOutletContext {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.$implicit = data;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NguCarouselService {
    constructor() {
    }
    /**
     * @param {?} carousel
     * @return {?}
     */
    setCarousel(carousel) {
        this.carousel = carousel;
    }
    /**
     * @return {?}
     */
    getCarousel() {
        return this.carousel;
    }
}
NguCarouselService.decorators = [
    { type: Injectable }
];
NguCarouselService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NguCarouselItemDirective {
}
NguCarouselItemDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselItem]'
            },] }
];
class NguCarouselNextDirective {
}
NguCarouselNextDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselNext]'
            },] }
];
class NguCarouselPrevDirective {
}
NguCarouselPrevDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselPrev]'
            },] }
];
class NguCarouselPointDirective {
}
NguCarouselPointDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselPoint]'
            },] }
];
/**
 * @template T
 */
class NguCarouselDefDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NguCarouselDefDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[nguCarouselDef]'
            },] }
];
NguCarouselDefDirective.ctorParameters = () => [
    { type: TemplateRef }
];
// tslint:disable-next-line:directive-class-suffix
class NguCarouselOutlet {
    /**
     * @param {?} viewContainer
     */
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
}
NguCarouselOutlet.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[nguCarouselOutlet]'
            },] }
];
NguCarouselOutlet.ctorParameters = () => [
    { type: ViewContainerRef }
];
class NguCarouselWrapperDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NguCarouselWrapperDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[nguCarouselWrapper]'
            },] }
];
NguCarouselWrapperDirective.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// TODO calculer la taille possible pour le .ngucarsoul en fonction des boutons prev/next
/**
 * @template T
 */
// tslint:disable-next-line:component-class-suffix
class NguCarousel extends NguCarouselStore {
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
        // tslint:disable-next-line:no-output-on-prefix
        this.onMove = new EventEmitter();
        this.withAnim = true;
        this.carouselLoad = new EventEmitter();
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
        if (this.carouselCssNode) {
            this.carouselCssNode.innerHTML = '';
            this.moveTo(0);
            this._carouselPoint();
        }
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
            /** @type {?} */
            const node = this._getNodeDef(data[currentIndex], currentIndex);
            if (item.previousIndex === null) {
                /** @type {?} */
                const context = new NguCarouselOutletContext(data[currentIndex]);
                context.index = currentIndex;
                viewContainer.createEmbeddedView(node.template, context, currentIndex);
            }
            else if (currentIndex === null) {
                viewContainer.remove(adjustedPreviousIndex);
                viewContainer.clear();
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
            /*hammertime.on('panend', (ev: any) => {
              if (Math.abs(ev.velocity) >= this.velocity) {
                this.touch.velocity = ev.velocity;
                let direc = 0;
                if (!this.RTL) {
                  direc = this.touch.swipe === 'panright' ? 0 : 1;
                } else {
                  direc = this.touch.swipe === 'panright' ? 1 : 0;
                }
                this._carouselScrollOne(direc);
              } else {
                this.dexVal = 0;
                this._setStyle(
                  this.nguItemsContainer.nativeElement,
                  'transition',
                  'transform 324ms cubic-bezier(0, 0, 0.2, 1)'
                );
                // this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
              }
            });*/
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
        console.log(this.touchTransform, maxTranslate, this.itemWidth, this._dataSource.length, this.carouselMain1.nativeElement.offsetWidth);
        console.log(this.itemWidth * this.touchTransform / 100);
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
                if (viewRef) {
                    /** @type {?} */
                    const context = (/** @type {?} */ (viewRef.context));
                    context.animate = { value: true, params: { distance: val } };
                }
            }
        }
        else {
            for (let i = end - 1; i >= start - 1; i--) {
                collectIndex.push(i);
                val = val * 2;
                /** @type {?} */
                const viewRef = (/** @type {?} */ (viewContainer.get(i)));
                if (viewRef) {
                    /** @type {?} */
                    const context = (/** @type {?} */ (viewRef.context));
                    context.animate = { value: true, params: { distance: -val } };
                }
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
            if (viewRef) {
                /** @type {?} */
                const context = (/** @type {?} */ (viewRef.context));
                context.animate = { value: false, params: { distance: 0 } };
            }
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
                template: "<ng-content select=\"[NguCarouselPoint]\"></ng-content>\r\n\r\n<div class=\"carousel-wrapper\">\r\n  <div class=\"btn-wrapper btn-previous\">\r\n    <ng-content select=\"[NguCarouselPrev]\"></ng-content>\r\n  </div>\r\n\r\n  <div class=\"btn-wrapper btn-next\">\r\n    <ng-content select=\"[NguCarouselNext]\"></ng-content>\r\n  </div>\r\n\r\n  <div #ngucarousel class=\"ngucarousel\">\r\n    <div #touchContainer class=\"ngu-touch-container\">\r\n      <div #nguItemsContainer class=\"ngucarousel-items\">\r\n        <ng-container nguCarouselOutlet></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n",
                viewProviders: [NguCarouselService],
                providers: [NguCarouselService],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;position:relative}:host.ngurtl{direction:rtl}.carousel-wrapper{display:flex;flex-direction:row;overflow:visible;max-width:100%}.ngucarousel{position:relative;flex-wrap:nowrap;z-index:10;order:2;flex:1;min-width:0}.ngucarousel .ngucarousel-items{position:relative;display:flex;height:100%}.btn-wrapper{z-index:11;flex:0 0 auto}.btn-previous{order:1}.btn-next{order:3}.nguvertical{flex-direction:column}.myPoint{list-style-type:none;text-align:right;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.myPoint li{background:#6b6b6b;display:inline-block;padding:4px;margin:0 3px;transition:.4s;opacity:.5}.myPoint li.active{opacity:1;-webkit-transform:scale(1.2);transform:scale(1.2)}"]
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
    _nodeOutlet: [{ type: ViewChild, args: [NguCarouselOutlet,] }],
    _carouselWrapper: [{ type: ViewChild, args: [NguCarouselWrapperDirective,] }],
    onMove: [{ type: Output, args: ['onMove',] }],
    _defDirec: [{ type: ContentChildren, args: [NguCarouselDefDirective,] }],
    inputs: [{ type: Input, args: ['inputs',] }],
    carouselLoad: [{ type: Output, args: ['carouselLoad',] }],
    carouselMain1: [{ type: ViewChild, args: ['ngucarousel', { read: ElementRef },] }],
    nguItemsContainer: [{ type: ViewChild, args: ['nguItemsContainer', { read: ElementRef },] }],
    touchContainer: [{ type: ViewChild, args: ['touchContainer', { read: ElementRef },] }],
    dataSource: [{ type: Input, args: ['dataSource',] }],
    nextBtn: [{ type: ContentChild, args: [NguCarouselNextDirective, { read: ElementRef },] }],
    prevBtn: [{ type: ContentChild, args: [NguCarouselPrevDirective, { read: ElementRef },] }],
    trackBy: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NguItemComponent {
    constructor() {
        this.classes = true;
    }
}
NguItemComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngu-item',
                template: "<ng-content></ng-content>\r\n",
                styles: [""]
            }] }
];
NguItemComponent.propDecorators = {
    classes: [{ type: HostBinding, args: ['class.item',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NguTileComponent {
    constructor() {
        this.classes = true;
    }
}
NguTileComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngu-tile',
                template: "<div class=\"tile\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: [":host{padding:10px;box-sizing:border-box}"]
            }] }
];
NguTileComponent.propDecorators = {
    classes: [{ type: HostBinding, args: ['class.item',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NguCarouselModule {
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NguCarouselConfig, NguCarouselStore, NguTransfrom, NguCarouselService, NguCarousel, NguCarouselModule, NguCarouselDefDirective as ɵg, NguCarouselItemDirective as ɵc, NguCarouselNextDirective as ɵd, NguCarouselOutlet as ɵh, NguCarouselPointDirective as ɵf, NguCarouselPrevDirective as ɵe, NguCarouselWrapperDirective as ɵi, ItemsControl as ɵa, NguButton as ɵb, NguItemComponent as ɵj, NguTileComponent as ɵk };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlwZWNvZGUtY2Fyb3VzZWwuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC9saWIvbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC50cyIsIm5nOi8vQGh5cGVjb2RlL2Nhcm91c2VsL2xpYi9uZ3UtY2Fyb3VzZWwuc2VydmljZS50cyIsIm5nOi8vQGh5cGVjb2RlL2Nhcm91c2VsL2xpYi9uZ3UtY2Fyb3VzZWwuZGlyZWN0aXZlLnRzIiwibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL25ndS1jYXJvdXNlbC9uZ3UtY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL25ndS1pdGVtL25ndS1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGh5cGVjb2RlL2Nhcm91c2VsL2xpYi9uZ3UtdGlsZS9uZ3UtdGlsZS5jb21wb25lbnQudHMiLCJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC9saWIvbmd1LWNhcm91c2VsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxTdG9yZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgdG91Y2ggPSBuZXcgVG91Y2goKSxcclxuICAgIHB1YmxpYyB2ZXJ0aWNhbCA9IG5ldyBWZXJ0aWNhbCgpLFxyXG4gICAgcHVibGljIGludGVydmFsPzogQ2Fyb3VzZWxJbnRlcnZhbCxcclxuICAgIHB1YmxpYyB0cmFuc2Zvcm0gPSBuZXcgTmd1VHJhbnNmcm9tKCksXHJcbiAgICBwdWJsaWMgYnV0dG9uPzogTmd1QnV0dG9uLFxyXG4gICAgcHVibGljIHZpc2libGVJdGVtcz86IEl0ZW1zQ29udHJvbCxcclxuICAgIHB1YmxpYyBkZXZpY2VUeXBlPzogRGV2aWNlVHlwZSxcclxuICAgIHB1YmxpYyB0eXBlID0gJ2ZpeGVkJyxcclxuICAgIHB1YmxpYyB0b2tlbiA9ICcnLFxyXG4gICAgcHVibGljIGl0ZW1zID0gMCxcclxuICAgIHB1YmxpYyBsb2FkID0gMCxcclxuICAgIHB1YmxpYyBkZXZpY2VXaWR0aCA9IDAsXHJcbiAgICBwdWJsaWMgY2Fyb3VzZWxXaWR0aCA9IDAsXHJcbiAgICBwdWJsaWMgaXRlbVdpZHRoID0gMCxcclxuICAgIHB1YmxpYyBzbGlkZUl0ZW1zID0gMCxcclxuICAgIHB1YmxpYyBpdGVtV2lkdGhQZXIgPSAwLFxyXG4gICAgcHVibGljIGl0ZW1MZW5ndGggPSAwLFxyXG4gICAgcHVibGljIGN1cnJlbnRTbGlkZSA9IDAsXHJcbiAgICBwdWJsaWMgZWFzaW5nID0gJ2N1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJyxcclxuICAgIHB1YmxpYyBzcGVlZCA9IDIwMCxcclxuICAgIHB1YmxpYyBsb29wID0gZmFsc2UsXHJcbiAgICBwdWJsaWMgZGV4VmFsID0gMCxcclxuICAgIHB1YmxpYyB0b3VjaFRyYW5zZm9ybSA9IDAsXHJcbiAgICBwdWJsaWMgaXNFbmQgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBpc0ZpcnN0ID0gdHJ1ZSxcclxuICAgIHB1YmxpYyBpc0xhc3QgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBSVEwgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBwb2ludCA9IHRydWUsXHJcbiAgICBwdWJsaWMgdmVsb2NpdHkgPSAxXHJcbiAgKSB7fVxyXG59XHJcbmV4cG9ydCB0eXBlIERldmljZVR5cGUgPSAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ2FsbCc7XHJcblxyXG5leHBvcnQgdHlwZSBCdXR0b25WaXNpYmxlID0gJ2Rpc2FibGVkJyB8ICdoaWRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbnRyb2wge1xyXG4gIHN0YXJ0OiBudW1iZXI7XHJcbiAgZW5kOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbCB7XHJcbiAgZW5hYmxlZDogYm9vbGVhbjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICAvLyBudW1IZWlnaHQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3VCdXR0b24ge1xyXG4gIHZpc2liaWxpdHk/OiBCdXR0b25WaXNpYmxlO1xyXG4gIGVsYXN0aWM/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb3VjaCB7XHJcbiAgYWN0aXZlPzogYm9vbGVhbjtcclxuICBzd2lwZTogc3RyaW5nO1xyXG4gIHZlbG9jaXR5OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3VUcmFuc2Zyb20ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHhzID0gMCxcclxuICAgIHB1YmxpYyBzbSA9IDAsXHJcbiAgICBwdWJsaWMgbWQgPSAwLFxyXG4gICAgcHVibGljIGxnID0gMCxcclxuICAgIHB1YmxpYyBhbGwgPSAwXHJcbiAgKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxDb25maWcge1xyXG4gIGdyaWQ6IE5ndVRyYW5zZnJvbTtcclxuICBzbGlkZT86IG51bWJlcjtcclxuICBzcGVlZD86IG51bWJlcjtcclxuICBpbnRlcnZhbD86IENhcm91c2VsSW50ZXJ2YWw7XHJcbiAgYW5pbWF0aW9uPzogQW5pbWF0ZTtcclxuICBwb2ludD86IFBvaW50O1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbiAgbG9hZD86IG51bWJlcjtcclxuICBjdXN0b20/OiBDdXN0b207XHJcbiAgbG9vcD86IGJvb2xlYW47XHJcbiAgdG91Y2g/OiBib29sZWFuO1xyXG4gIGVhc2luZz86IHN0cmluZztcclxuICBSVEw/OiBib29sZWFuO1xyXG4gIGJ1dHRvbj86IE5ndUJ1dHRvbjtcclxuICB2ZXJ0aWNhbD86IFZlcnRpY2FsO1xyXG4gIHZlbG9jaXR5PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDdXN0b20gPSAnYmFubmVyJztcclxuZXhwb3J0IHR5cGUgQW5pbWF0ZSA9ICdsYXp5JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xyXG4gIHZpc2libGU6IGJvb2xlYW47XHJcbiAgaGlkZU9uU2luZ2xlU2xpZGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvbiB7XHJcbiAgdHlwZT86IEFuaW1hdGU7XHJcbiAgYW5pbWF0ZVN0eWxlcz86IEFuaW1hdGlvblN0eWxlcztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25TdHlsZXMge1xyXG4gIHN0eWxlPzogc3RyaW5nO1xyXG4gIG9wZW4/OiBzdHJpbmc7XHJcbiAgY2xvc2U/OiBzdHJpbmc7XHJcbiAgc3RhZ2dlcj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbEludGVydmFsIHtcclxuICB0aW1pbmc6IG51bWJlcjtcclxuICBpbml0aWFsRGVsYXk/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE91dGxldENvbnRleHQ8VD4ge1xyXG4gIC8qKiBEYXRhIGZvciB0aGUgbm9kZS4gKi9cclxuICAkaW1wbGljaXQ6IFQ7XHJcblxyXG4gIC8qKiBEZXB0aCBvZiB0aGUgbm9kZS4gKi9cclxuICBsZXZlbDogbnVtYmVyO1xyXG5cclxuICAvKiogSW5kZXggbG9jYXRpb24gb2YgdGhlIG5vZGUuICovXHJcbiAgaW5kZXg/OiBudW1iZXI7XHJcblxyXG4gIC8qKiBMZW5ndGggb2YgdGhlIG51bWJlciBvZiB0b3RhbCBkYXRhTm9kZXMuICovXHJcbiAgY291bnQ/OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFQpIHtcclxuICAgIHRoaXMuJGltcGxpY2l0ID0gZGF0YTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3VDYXJvdXNlbCB9IGZyb20gJy4vbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxTZXJ2aWNlIHtcclxuXHJcblxyXG4gIGNhcm91c2VsOiBOZ3VDYXJvdXNlbDxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgfVxyXG5cclxuICBzZXRDYXJvdXNlbChjYXJvdXNlbDogTmd1Q2Fyb3VzZWw8YW55Pikge1xyXG4gICAgdGhpcy5jYXJvdXNlbCA9IGNhcm91c2VsO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2Fyb3VzZWwoKTogTmd1Q2Fyb3VzZWw8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYXJvdXNlbDtcclxuICB9XHJcblxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbTmd1Q2Fyb3VzZWxJdGVtXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSB7fVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW05ndUNhcm91c2VsTmV4dF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUge1xyXG4gIC8vIEBIb3N0QmluZGluZygnZGlzYWJsZWQnKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAvLyBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKSBkaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAvLyBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgLy8gb25DbGljaygpIHtcclxuICAvLyB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tOZ3VDYXJvdXNlbFByZXZdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlIHtcclxuICAvLyBASG9zdEJpbmRpbmcoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgLy8gQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgZGlzcGxheSA9ICdibG9jayc7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tOZ3VDYXJvdXNlbFBvaW50XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUge31cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tuZ3VDYXJvdXNlbERlZl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxUPiB7XHJcbiAgd2hlbjogKGluZGV4OiBudW1iZXIsIG5vZGVEYXRhOiBUKSA9PiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tuZ3VDYXJvdXNlbE91dGxldF0nXHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE91dGxldCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHt9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tuZ3VDYXJvdXNlbFdyYXBwZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxXcmFwcGVyRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IEVsZW1lbnRSZWY8YW55Pikge31cclxufVxyXG4iLCJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIERvQ2hlY2ssXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIGlzRGV2TW9kZSxcclxuICBJdGVyYWJsZUNoYW5nZVJlY29yZCxcclxuICBJdGVyYWJsZUNoYW5nZXMsXHJcbiAgSXRlcmFibGVEaWZmZXIsXHJcbiAgSXRlcmFibGVEaWZmZXJzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFBMQVRGT1JNX0lELFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVHJhY2tCeUZ1bmN0aW9uLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGVtcHR5LCBmcm9tRXZlbnQsIGludGVydmFsLCBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXBUbywgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE5ndUNhcm91c2VsQ29uZmlnLCBOZ3VDYXJvdXNlbE91dGxldENvbnRleHQsIE5ndUNhcm91c2VsU3RvcmUgfSBmcm9tICcuL25ndS1jYXJvdXNlbCc7XHJcbmltcG9ydCB7IE5ndUNhcm91c2VsU2VydmljZSB9IGZyb20gJy4uL25ndS1jYXJvdXNlbC5zZXJ2aWNlJztcclxuaW1wb3J0IHtcclxuICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxPdXRsZXQsXHJcbiAgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZVxyXG59IGZyb20gJy4uL25ndS1jYXJvdXNlbC5kaXJlY3RpdmUnO1xyXG5cclxuXHJcbi8vIFRPRE8gY2FsY3VsZXIgbGEgdGFpbGxlIHBvc3NpYmxlIHBvdXIgbGUgLm5ndWNhcnNvdWwgZW4gZm9uY3Rpb24gZGVzIGJvdXRvbnMgcHJldi9uZXh0XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICduZ3UtY2Fyb3VzZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnbmd1LWNhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbmd1LWNhcm91c2VsLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgdmlld1Byb3ZpZGVyczogW05ndUNhcm91c2VsU2VydmljZV0sXHJcbiAgcHJvdmlkZXJzOiBbTmd1Q2Fyb3VzZWxTZXJ2aWNlXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LWNsYXNzLXN1ZmZpeFxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWw8VD4gZXh0ZW5kcyBOZ3VDYXJvdXNlbFN0b3JlXHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XHJcbiAgX2RhdGFTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBfZGF0YURpZmZlcjogSXRlcmFibGVEaWZmZXI8e30+O1xyXG4gIHN0eWxlaWQ6IHN0cmluZztcclxuICBhY3RpdmVQb2ludDogbnVtYmVyO1xyXG4gIGlzSG92ZXJlZCA9IGZhbHNlO1xyXG4gIC8vIGlzRmlyc3RzcyA9IDA7XHJcbiAgYXJyYXlDaGFuZ2VzOiBJdGVyYWJsZUNoYW5nZXM8e30+O1xyXG4gIGNhcm91c2VsSW50OiBTdWJzY3JpcHRpb247XHJcbiAgQFZpZXdDaGlsZChOZ3VDYXJvdXNlbE91dGxldClcclxuICBfbm9kZU91dGxldDogTmd1Q2Fyb3VzZWxPdXRsZXQ7XHJcbiAgQFZpZXdDaGlsZChOZ3VDYXJvdXNlbFdyYXBwZXJEaXJlY3RpdmUpXHJcbiAgX2Nhcm91c2VsV3JhcHBlcjogTmd1Q2Fyb3VzZWxXcmFwcGVyRGlyZWN0aXZlO1xyXG4gIHBvaW50TnVtYmVyczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIC8vIGlzRmlyc3RzcyA9IDA7XHJcbiAgbGlzdGVuZXIxOiAoKSA9PiB2b2lkO1xyXG4gIGxpc3RlbmVyMjogKCkgPT4gdm9pZDtcclxuICBsaXN0ZW5lcjM6ICgpID0+IHZvaWQ7XHJcbiAgbGlzdGVuZXI0OiAoKSA9PiB2b2lkO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtb24tcHJlZml4XHJcbiAgQE91dHB1dCgnb25Nb3ZlJylcclxuICBwdWJsaWMgb25Nb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxOZ3VDYXJvdXNlbDxUPj4oKTtcclxuICBwcml2YXRlIF9kZWZhdWx0Tm9kZURlZjogTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmU8YW55PiB8IG51bGw7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSlcclxuICBwcml2YXRlIF9kZWZEaXJlYzogUXVlcnlMaXN0PE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPGFueT4+O1xyXG4gIHByaXZhdGUgZGlyZWN0aW9uU3ltOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBjYXJvdXNlbENzc05vZGU6IGFueTtcclxuICBwcml2YXRlIHBvaW50SW5kZXg6IG51bWJlcjtcclxuICBwcml2YXRlIHdpdGhBbmltID0gdHJ1ZTtcclxuICBASW5wdXQoJ2lucHV0cycpXHJcbiAgcHJpdmF0ZSBpbnB1dHM6IE5ndUNhcm91c2VsQ29uZmlnO1xyXG4gIEBPdXRwdXQoJ2Nhcm91c2VsTG9hZCcpXHJcbiAgcHJpdmF0ZSBjYXJvdXNlbExvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQFZpZXdDaGlsZCgnbmd1Y2Fyb3VzZWwnLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgcHJpdmF0ZSBjYXJvdXNlbE1haW4xOiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkKCduZ3VJdGVtc0NvbnRhaW5lcicsIHtyZWFkOiBFbGVtZW50UmVmfSlcclxuICBwcml2YXRlIG5ndUl0ZW1zQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkKCd0b3VjaENvbnRhaW5lcicsIHtyZWFkOiBFbGVtZW50UmVmfSlcclxuICBwcml2YXRlIHRvdWNoQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIHByaXZhdGUgX2ludGVydmFsQ29udHJvbGxlciQgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XHJcbiAgcHJpdmF0ZSBjYXJvdXNlbDogYW55O1xyXG4gIHByaXZhdGUgb25SZXNpemU6IGFueTtcclxuICBwcml2YXRlIG9uU2Nyb2xsaW5nOiBhbnk7XHJcbiAgcHJpdmF0ZSBfdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248VD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxyXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGNhcm91c2VsU2VydmljZTogTmd1Q2Fyb3VzZWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5jYXJvdXNlbFNlcnZpY2Uuc2V0Q2Fyb3VzZWwodGhpcyk7XHJcbiAgfVxyXG5cclxuICBfZGF0YVNvdXJjZTogYW55O1xyXG5cclxuICBASW5wdXQoJ2RhdGFTb3VyY2UnKVxyXG4gIGdldCBkYXRhU291cmNlKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZTtcclxuICB9XHJcblxyXG4gIHNldCBkYXRhU291cmNlKGRhdGE6IGFueSkge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSwgdGhpcy5kYXRhU291cmNlKTtcclxuICAgICAgLy8gdGhpcy5pc0ZpcnN0c3MrKztcclxuICAgICAgdGhpcy5fc3dpdGNoRGF0YVNvdXJjZShkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKiogVGhlIHNldHRlciBpcyB1c2VkIHRvIGNhdGNoIHRoZSBidXR0b24gaWYgdGhlIGJ1dHRvbiBoYXMgbmdJZlxyXG4gICAqIGlzc3VlIGlkICM5MVxyXG4gICAqL1xyXG4gIEBDb250ZW50Q2hpbGQoTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgc2V0IG5leHRCdG4oYnRuOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmxpc3RlbmVyMiAmJiB0aGlzLmxpc3RlbmVyMigpO1xyXG4gICAgaWYgKGJ0bikge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyMiA9IHRoaXMuX3JlbmRlcmVyLmxpc3RlbihidG4ubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKCkgPT5cclxuICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZSgxKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFRoZSBzZXR0ZXIgaXMgdXNlZCB0byBjYXRjaCB0aGUgYnV0dG9uIGlmIHRoZSBidXR0b24gaGFzIG5nSWZcclxuICAgKiBpc3N1ZSBpZCAjOTFcclxuICAgKi9cclxuICBAQ29udGVudENoaWxkKE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSwge3JlYWQ6IEVsZW1lbnRSZWZ9KVxyXG4gIHNldCBwcmV2QnRuKGJ0bjogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5saXN0ZW5lcjEgJiYgdGhpcy5saXN0ZW5lcjEoKTtcclxuICAgIGlmIChidG4pIHtcclxuICAgICAgdGhpcy5saXN0ZW5lcjEgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oYnRuLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsICgpID0+XHJcbiAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoMClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyYWNraW5nIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNoZWNrIHRoZSBkaWZmZXJlbmNlcyBpbiBkYXRhIGNoYW5nZXMuIFVzZWQgc2ltaWxhcmx5XHJcbiAgICogdG8gYG5nRm9yYCBgdHJhY2tCeWAgZnVuY3Rpb24uIE9wdGltaXplIEl0ZW1zIG9wZXJhdGlvbnMgYnkgaWRlbnRpZnlpbmcgYSBJdGVtcyBiYXNlZCBvbiBpdHMgZGF0YVxyXG4gICAqIHJlbGF0aXZlIHRvIHRoZSBmdW5jdGlvbiB0byBrbm93IGlmIGEgSXRlbXMgc2hvdWxkIGJlIGFkZGVkL3JlbW92ZWQvbW92ZWQuXHJcbiAgICogQWNjZXB0cyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIHBhcmFtZXRlcnMsIGBpbmRleGAgYW5kIGBpdGVtYC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB0cmFja0J5KCk6IFRyYWNrQnlGdW5jdGlvbjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHJhY2tCeUZuO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRyYWNrQnkoZm46IFRyYWNrQnlGdW5jdGlvbjxUPikge1xyXG4gICAgaWYgKFxyXG4gICAgICBpc0Rldk1vZGUoKSAmJlxyXG4gICAgICBmbiAhPSBudWxsICYmXHJcbiAgICAgIHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJyAmJlxyXG4gICAgICA8YW55PmNvbnNvbGUgJiZcclxuICAgICAgPGFueT5jb25zb2xlLndhcm5cclxuICAgICkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYHRyYWNrQnkgbXVzdCBiZSBhIGZ1bmN0aW9uLCBidXQgcmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShmbil9LmBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3RyYWNrQnlGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLl9kYXRhRGlmZmVyID0gdGhpcy5fZGlmZmVyc1xyXG4gICAgICAuZmluZChbXSlcclxuICAgICAgLmNyZWF0ZSgoX2k6IG51bWJlciwgaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhY2tCeSA/IHRoaXMudHJhY2tCeShpdGVtLmRhdGFJbmRleCwgaXRlbS5kYXRhKSA6IGl0ZW07XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCkge1xyXG4gICAgdGhpcy5hcnJheUNoYW5nZXMgPSB0aGlzLl9kYXRhRGlmZmVyLmRpZmYodGhpcy5kYXRhU291cmNlKTtcclxuICAgIGlmICh0aGlzLmFycmF5Q2hhbmdlcyAmJiB0aGlzLl9kZWZEaXJlYykge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnQ2hhbmdlcyBkZXRlY3RlZCEnKTtcclxuICAgICAgdGhpcy5fb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuY2Fyb3VzZWwgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5faW5wdXRWYWxpZGF0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5jYXJvdXNlbENzc05vZGUgPSB0aGlzLl9jcmVhdGVTdHlsZUVsZW0oKTtcclxuXHJcbiAgICAvLyB0aGlzLl9idXR0b25Db250cm9sKCk7XHJcblxyXG4gICAgaWYgKHdpbmRvdykge1xyXG4gICAgICB0aGlzLl9jYXJvdXNlbEludGVydmFsKCk7XHJcbiAgICAgIGlmICghdGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgICAgdGhpcy5fdG91Y2goKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpc3RlbmVyMyA9IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsIGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLl9vblJlc2l6aW5nKGV2ZW50KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX29uV2luZG93U2Nyb2xsaW5nKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XHJcblxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIFVzZWQgdG8gcmVzZXQgdGhlIGNhcm91c2VsICovXHJcbiAgcHVibGljIHJlc2V0KHdpdGhPdXRBbmltYXRpb24/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB3aXRoT3V0QW5pbWF0aW9uICYmICh0aGlzLndpdGhBbmltID0gZmFsc2UpO1xyXG4gICAgaWYgKHRoaXMuY2Fyb3VzZWxDc3NOb2RlKSB7XHJcbiAgICAgIHRoaXMuY2Fyb3VzZWxDc3NOb2RlLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgdGhpcy5tb3ZlVG8oMCk7XHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsUG9pbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gc2NvbGwgdGhlIGNhcm91c2VsIHdoZW4gcG9pbnQgaXMgY2xpY2tlZCAqL1xyXG4gIHB1YmxpYyBtb3ZlVG8oc2xpZGU6IG51bWJlciwgd2l0aE91dEFuaW1hdGlvbj86IGJvb2xlYW4pIHtcclxuICAgIC8vIHNsaWRlID0gc2xpZGUgLSAxO1xyXG4gICAgd2l0aE91dEFuaW1hdGlvbiAmJiAodGhpcy53aXRoQW5pbSA9IGZhbHNlKTtcclxuICAgIGlmICh0aGlzLmFjdGl2ZVBvaW50ICE9PSBzbGlkZSAmJiBzbGlkZSA8IHRoaXMucG9pbnRJbmRleCkge1xyXG4gICAgICBsZXQgc2xpZGVyZW1haW5zO1xyXG4gICAgICBjb25zdCBidG5zID0gdGhpcy5jdXJyZW50U2xpZGUgPCBzbGlkZSA/IDEgOiAwO1xyXG5cclxuICAgICAgc3dpdGNoIChzbGlkZSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMSwgMCk7XHJcbiAgICAgICAgICBzbGlkZXJlbWFpbnMgPSBzbGlkZSAqIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgdGhpcy5wb2ludEluZGV4IC0gMTpcclxuICAgICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XHJcbiAgICAgICAgICBzbGlkZXJlbWFpbnMgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5pdGVtcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICAgICAgc2xpZGVyZW1haW5zID0gc2xpZGUgKiB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxUd28oYnRucywgc2xpZGVyZW1haW5zLCB0aGlzLnNwZWVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNsZWFySW50ZXJ2YWwodGhpcy5jYXJvdXNlbEludCk7XHJcbiAgICB0aGlzLmNhcm91c2VsSW50ICYmIHRoaXMuY2Fyb3VzZWxJbnQudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX2ludGVydmFsQ29udHJvbGxlciQudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuY2Fyb3VzZWxMb2FkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLm9uTW92ZS5jb21wbGV0ZSgpO1xyXG5cclxuICAgIC8qKiByZW1vdmUgbGlzdGVuZXJzICovXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcclxuICAgICAgY29uc3Qgc3RyID0gYGxpc3RlbmVyJHtpfWA7XHJcbiAgICAgIHRoaXNbc3RyXSAmJiB0aGlzW3N0cl0oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3N3aXRjaERhdGFTb3VyY2UoZGF0YVNvdXJjZTogYW55KTogYW55IHtcclxuICAgIHRoaXMuX2RhdGFTb3VyY2UgPSBkYXRhU291cmNlO1xyXG4gICAgaWYgKHRoaXMuX2RlZkRpcmVjKSB7XHJcbiAgICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlck5vZGVDaGFuZ2VzKFxyXG4gICAgZGF0YTogYW55W10sXHJcbiAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyXHJcbiAgKSB7XHJcbiAgICBpZiAoIXRoaXMuYXJyYXlDaGFuZ2VzKSByZXR1cm47XHJcbiAgICB0aGlzLmFycmF5Q2hhbmdlcy5mb3JFYWNoT3BlcmF0aW9uKFxyXG4gICAgICAoXHJcbiAgICAgICAgaXRlbTogSXRlcmFibGVDaGFuZ2VSZWNvcmQ8YW55PixcclxuICAgICAgICBhZGp1c3RlZFByZXZpb3VzSW5kZXg6IG51bWJlcixcclxuICAgICAgICBjdXJyZW50SW5kZXg6IG51bWJlclxyXG4gICAgICApID0+IHtcclxuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5fZ2V0Tm9kZURlZihkYXRhW2N1cnJlbnRJbmRleF0sIGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgaWYgKGl0ZW0ucHJldmlvdXNJbmRleCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBOZ3VDYXJvdXNlbE91dGxldENvbnRleHQ8YW55PihkYXRhW2N1cnJlbnRJbmRleF0pO1xyXG4gICAgICAgICAgY29udGV4dC5pbmRleCA9IGN1cnJlbnRJbmRleDtcclxuICAgICAgICAgIHZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KFxyXG4gICAgICAgICAgICBub2RlLnRlbXBsYXRlLFxyXG4gICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXhcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50SW5kZXggPT09IG51bGwpIHtcclxuICAgICAgICAgIHZpZXdDb250YWluZXIucmVtb3ZlKGFkanVzdGVkUHJldmlvdXNJbmRleCk7XHJcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLmNsZWFyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHZpZXcgPSB2aWV3Q29udGFpbmVyLmdldChhZGp1c3RlZFByZXZpb3VzSW5kZXgpO1xyXG4gICAgICAgICAgdmlld0NvbnRhaW5lci5tb3ZlKHZpZXcsIGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgdGhpcy5fdXBkYXRlSXRlbUluZGV4Q29udGV4dCgpO1xyXG5cclxuICAgIGlmICh0aGlzLmNhcm91c2VsKSB7XHJcbiAgICAgIHRoaXMuX3N0b3JlQ2Fyb3VzZWxEYXRhKCk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGFTb3VyY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgaW5kZXgtcmVsYXRlZCBjb250ZXh0IGZvciBlYWNoIHJvdyB0byByZWZsZWN0IGFueSBjaGFuZ2VzIGluIHRoZSBpbmRleCBvZiB0aGUgcm93cyxcclxuICAgKiBlLmcuIGZpcnN0L2xhc3QvZXZlbi9vZGQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfdXBkYXRlSXRlbUluZGV4Q29udGV4dCgpIHtcclxuICAgIGNvbnN0IHZpZXdDb250YWluZXIgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXI7XHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgcmVuZGVySW5kZXggPSAwLCBjb3VudCA9IHZpZXdDb250YWluZXIubGVuZ3RoO1xyXG4gICAgICByZW5kZXJJbmRleCA8IGNvdW50O1xyXG4gICAgICByZW5kZXJJbmRleCsrXHJcbiAgICApIHtcclxuICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KHJlbmRlckluZGV4KSBhcyBhbnk7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xyXG4gICAgICBjb250ZXh0LmNvdW50ID0gY291bnQ7XHJcblxyXG4gICAgICBjb250ZXh0LmZpcnN0ID0gcmVuZGVySW5kZXggPT09IDA7XHJcbiAgICAgIGNvbnRleHQubGFzdCA9IHJlbmRlckluZGV4ID09PSBjb3VudCAtIDE7XHJcbiAgICAgIGNvbnRleHQuZXZlbiA9IHJlbmRlckluZGV4ICUgMiA9PT0gMDtcclxuICAgICAgY29udGV4dC5vZGQgPSAhY29udGV4dC5ldmVuO1xyXG4gICAgICBjb250ZXh0LmluZGV4ID0gcmVuZGVySW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXROb2RlRGVmKGRhdGE6IGFueSwgaTogbnVtYmVyKTogTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmU8YW55PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9kZWZEaXJlYyk7XHJcbiAgICBpZiAodGhpcy5fZGVmRGlyZWMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9kZWZEaXJlYy5maXJzdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub2RlRGVmID1cclxuICAgICAgdGhpcy5fZGVmRGlyZWMuZmluZChkZWYgPT4gZGVmLndoZW4gJiYgZGVmLndoZW4oaSwgZGF0YSkpIHx8XHJcbiAgICAgIHRoaXMuX2RlZmF1bHROb2RlRGVmO1xyXG5cclxuICAgIHJldHVybiBub2RlRGVmO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKSB7XHJcbiAgICBsZXQgZGF0YVN0cmVhbTogT2JzZXJ2YWJsZTxhbnlbXT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKHRoaXMuX2RhdGFTb3VyY2UgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XHJcbiAgICAgIGRhdGFTdHJlYW0gPSB0aGlzLl9kYXRhU291cmNlO1xyXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRoaXMuX2RhdGFTb3VyY2UpKSB7XHJcbiAgICAgIGRhdGFTdHJlYW0gPSBvZih0aGlzLl9kYXRhU291cmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YVN0cmVhbSkge1xyXG4gICAgICB0aGlzLl9kYXRhU3Vic2NyaXB0aW9uID0gZGF0YVN0cmVhbVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJOb2RlQ2hhbmdlcyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMuaXNMYXN0ID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pbnB1dFZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB0aGlzLmlucHV0cy5ncmlkLmFsbCAhPT0gMCA/ICdmaXhlZCcgOiAncmVzcG9uc2l2ZSc7XHJcbiAgICB0aGlzLmxvb3AgPSB0aGlzLmlucHV0cy5sb29wIHx8IGZhbHNlO1xyXG4gICAgdGhpcy5pbnB1dHMuZWFzaW5nID0gdGhpcy5pbnB1dHMuZWFzaW5nIHx8ICdjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSc7XHJcbiAgICB0aGlzLnRvdWNoLmFjdGl2ZSA9IHRoaXMuaW5wdXRzLnRvdWNoIHx8IGZhbHNlO1xyXG4gICAgdGhpcy5SVEwgPSB0aGlzLmlucHV0cy5SVEwgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB0aGlzLmludGVydmFsID0gdGhpcy5pbnB1dHMuaW50ZXJ2YWwgfHwgbnVsbDtcclxuICAgIHRoaXMudmVsb2NpdHkgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5pbnB1dHMudmVsb2NpdHkgPT09ICdudW1iZXInXHJcbiAgICAgICAgPyB0aGlzLmlucHV0cy52ZWxvY2l0eVxyXG4gICAgICAgIDogdGhpcy52ZWxvY2l0eTtcclxuXHJcbiAgICBpZiAodGhpcy5pbnB1dHMudmVydGljYWwgJiYgdGhpcy5pbnB1dHMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICB0aGlzLnZlcnRpY2FsLmVuYWJsZWQgPSB0aGlzLmlucHV0cy52ZXJ0aWNhbC5lbmFibGVkO1xyXG4gICAgICB0aGlzLnZlcnRpY2FsLmhlaWdodCA9IHRoaXMuaW5wdXRzLnZlcnRpY2FsLmhlaWdodDtcclxuICAgIH1cclxuICAgIHRoaXMuZGlyZWN0aW9uU3ltID0gdGhpcy5SVEwgPyAnJyA6ICctJztcclxuICAgIHRoaXMucG9pbnQgPVxyXG4gICAgICB0aGlzLmlucHV0cy5wb2ludCAmJiB0eXBlb2YgdGhpcy5pbnB1dHMucG9pbnQudmlzaWJsZSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICA/IHRoaXMuaW5wdXRzLnBvaW50LnZpc2libGVcclxuICAgICAgICA6IHRydWU7XHJcblxyXG4gICAgdGhpcy5fY2Fyb3VzZWxTaXplKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vblJlc2l6aW5nKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLm9uUmVzaXplKTtcclxuICAgIHRoaXMub25SZXNpemUgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZGV2aWNlV2lkdGggIT09IGV2ZW50LnRhcmdldC5vdXRlcldpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0U3R5bGUodGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsIGBgKTtcclxuICAgICAgICB0aGlzLl9zdG9yZUNhcm91c2VsRGF0YSgpO1xyXG4gICAgICB9XHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldCBUb3VjaCBpbnB1dCAqL1xyXG4gIHByaXZhdGUgX3RvdWNoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRzLnRvdWNoKSB7XHJcbiAgICAgIGNvbnN0IGhhbW1lcnRpbWUgPSBuZXcgSGFtbWVyKHRoaXMudG91Y2hDb250YWluZXIubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIGhhbW1lcnRpbWUuZ2V0KCdwYW4nKS5zZXQoe2RpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9IT1JJWk9OVEFMfSk7XHJcblxyXG4gICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5zdGFydCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbFdpZHRoID0gdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIC8vIHRoaXMudG91Y2hUcmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybVt0aGlzLmRldmljZVR5cGVdO1xyXG4gICAgICAgIHRoaXMuZGV4VmFsID0gMDtcclxuICAgICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgJycpO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICAgIGhhbW1lcnRpbWUub24oJ3BhbnVwJywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbmxlZnQnLCBldik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFuZG93bicsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5yaWdodCcsIGV2KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5sZWZ0JywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbmxlZnQnLCBldik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFucmlnaHQnLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fdG91Y2hIYW5kbGluZygncGFucmlnaHQnLCBldik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLypoYW1tZXJ0aW1lLm9uKCdwYW5lbmQnLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhldi52ZWxvY2l0eSkgPj0gdGhpcy52ZWxvY2l0eSkge1xyXG4gICAgICAgICAgdGhpcy50b3VjaC52ZWxvY2l0eSA9IGV2LnZlbG9jaXR5O1xyXG4gICAgICAgICAgbGV0IGRpcmVjID0gMDtcclxuICAgICAgICAgIGlmICghdGhpcy5SVEwpIHtcclxuICAgICAgICAgICAgZGlyZWMgPSB0aGlzLnRvdWNoLnN3aXBlID09PSAncGFucmlnaHQnID8gMCA6IDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXJlYyA9IHRoaXMudG91Y2guc3dpcGUgPT09ICdwYW5yaWdodCcgPyAxIDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKGRpcmVjKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5kZXhWYWwgPSAwO1xyXG4gICAgICAgICAgdGhpcy5fc2V0U3R5bGUoXHJcbiAgICAgICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICAgJ3RyYW5zaXRpb24nLFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtIDMyNG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIC8vIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pOyovXHJcbiAgICAgIGhhbW1lcnRpbWUub24oJ2hhbW1lci5pbnB1dCcsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIC8vIGFsbG93IG5lc3RlZCB0b3VjaCBldmVudHMgdG8gbm8gcHJvcGFnYXRlLCB0aGlzIG1heSBoYXZlIG90aGVyIHNpZGUgYWZmZWN0cyBidXQgd29ya3MgZm9yIG5vdy5cclxuICAgICAgICAvLyBUT0RPOiBJdCBpcyBwcm9iYWJseSBiZXR0ZXIgdG8gY2hlY2sgdGhlIHNvdXJjZSBlbGVtZW50IG9mIHRoZSBldmVudCBhbmQgb25seSBhcHBseSB0aGUgaGFuZGxlIHRvIHRoZSBjb3JyZWN0IGNhcm91c2VsXHJcbiAgICAgICAgZXYuc3JjRXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGhhbmRsZSB0b3VjaCBpbnB1dCAqL1xyXG4gIHByaXZhdGUgX3RvdWNoSGFuZGxpbmcoZTogc3RyaW5nLCBldjogYW55KTogdm9pZCB7XHJcbiAgICAvLyB2ZXJ0aWNhbCB0b3VjaCBldmVudHMgc2VlbSB0byBjYXVzZSB0byBwYW5zdGFydCBldmVudCB3aXRoIGFuIG9kZCBkZWx0YVxyXG4gICAgLy8gYW5kIGEgY2VudGVyIG9mIHt4OjAseTowfSBzbyB0aGlzIHdpbGwgaWdub3JlIHRoZW1cclxuICAgIGlmIChldi5jZW50ZXIueCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZXYgPSBNYXRoLmFicyh0aGlzLnZlcnRpY2FsLmVuYWJsZWQgPyBldi5kZWx0YVkgOiBldi5kZWx0YVgpO1xyXG4gICAgbGV0IHZhbHQgPSBldiAtIHRoaXMuZGV4VmFsO1xyXG4gICAgdmFsdCA9XHJcbiAgICAgIHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnXHJcbiAgICAgICAgPyAoTWF0aC5hYnMoZXYgLSB0aGlzLmRleFZhbCkgL1xyXG4gICAgICAgICh0aGlzLnZlcnRpY2FsLmVuYWJsZWRcclxuICAgICAgICAgID8gdGhpcy52ZXJ0aWNhbC5oZWlnaHRcclxuICAgICAgICAgIDogdGhpcy5jYXJvdXNlbFdpZHRoKSkgKlxyXG4gICAgICAgIDEwMFxyXG4gICAgICAgIDogdmFsdDtcclxuICAgIHRoaXMuZGV4VmFsID0gZXY7XHJcbiAgICB0aGlzLnRvdWNoLnN3aXBlID0gZTtcclxuICAgIHRoaXMuX3NldFRvdWNoVHJhbnNmcm9tKGUsIHZhbHQpO1xyXG4gICAgdGhpcy5fc2V0VHJhbnNmb3JtRnJvbVRvdWNoKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0VG91Y2hUcmFuc2Zyb20oZTogc3RyaW5nLCB2YWx0OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMuUlRMID8gJ3BhbnJpZ2h0JyA6ICdwYW5sZWZ0JztcclxuICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPVxyXG4gICAgICBlID09PSBjb25kaXRpb24gPyB2YWx0ICsgdGhpcy50b3VjaFRyYW5zZm9ybSA6IHRoaXMudG91Y2hUcmFuc2Zvcm0gLSB2YWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0VHJhbnNmb3JtRnJvbVRvdWNoKCkge1xyXG5cclxuICAgIGlmICh0aGlzLnRvdWNoVHJhbnNmb3JtIDwgMCkge1xyXG4gICAgICB0aGlzLnRvdWNoVHJhbnNmb3JtID0gMDtcclxuICAgIH1cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJyA/ICclJyA6ICdweCc7XHJcblxyXG4gICAgY29uc3QgbWF4VHJhbnNsYXRlID0gKHRoaXMuaXRlbVdpZHRoICogdGhpcy5fZGF0YVNvdXJjZS5sZW5ndGgpIC0gdGhpcy5jYXJvdXNlbE1haW4xLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRvdWNoVHJhbnNmb3JtLCBtYXhUcmFuc2xhdGUsIHRoaXMuaXRlbVdpZHRoLCB0aGlzLl9kYXRhU291cmNlLmxlbmd0aCwgdGhpcy5jYXJvdXNlbE1haW4xLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaXRlbVdpZHRoICogdGhpcy50b3VjaFRyYW5zZm9ybSAvIDEwMCk7XHJcbiAgICBpZiAobWF4VHJhbnNsYXRlIDw9IHRoaXMudG91Y2hUcmFuc2Zvcm0pIHtcclxuICAgICAgdGhpcy50b3VjaFRyYW5zZm9ybSA9IG1heFRyYW5zbGF0ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub25Nb3ZlLmVtaXQodGhpcyk7XHJcbiAgICB0aGlzLl9zZXRTdHlsZShcclxuICAgICAgdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgdGhpcy52ZXJ0aWNhbC5lbmFibGVkXHJcbiAgICAgICAgPyBgdHJhbnNsYXRlM2QoMCwgJHt0aGlzLmRpcmVjdGlvblN5bX0ke3RoaXMudG91Y2hUcmFuc2Zvcm19JHt0eXBlfSwgMClgXHJcbiAgICAgICAgOiBgdHJhbnNsYXRlM2QoJHt0aGlzLmRpcmVjdGlvblN5bX0ke3RoaXMudG91Y2hUcmFuc2Zvcm19JHt0eXBlfSwgMCwgMClgXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqIHRoaXMgZm4gdXNlZCB0byBkaXNhYmxlIHRoZSBpbnRlcnZhbCB3aGVuIGl0IGlzIG5vdCBvbiB0aGUgdmlld3BvcnQgKi9cclxuICBwcml2YXRlIF9vbldpbmRvd1Njcm9sbGluZygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRvcCA9IHRoaXMuY2Fyb3VzZWwub2Zmc2V0VG9wO1xyXG4gICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgY29uc3QgaGVpZ2h0dCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNvbnN0IGNhcm91c2VsSGVpZ2h0ID0gdGhpcy5jYXJvdXNlbC5vZmZzZXRIZWlnaHQ7XHJcbiAgICBjb25zdCBpc0Nhcm91c2VsT25TY3JlZW4gPVxyXG4gICAgICB0b3AgPD0gc2Nyb2xsWSArIGhlaWdodHQgLSBjYXJvdXNlbEhlaWdodCAvIDQgJiZcclxuICAgICAgdG9wICsgY2Fyb3VzZWxIZWlnaHQgLyAyID49IHNjcm9sbFk7XHJcblxyXG4gICAgaWYgKGlzQ2Fyb3VzZWxPblNjcmVlbikge1xyXG4gICAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkLm5leHQoMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkLm5leHQoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogc3RvcmUgZGF0YSBiYXNlZCBvbiB3aWR0aCBvZiB0aGUgc2NyZWVuIGZvciB0aGUgY2Fyb3VzZWwgKi9cclxuICBwcml2YXRlIF9zdG9yZUNhcm91c2VsRGF0YSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGV2aWNlV2lkdGggPSBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpXHJcbiAgICAgID8gd2luZG93LmlubmVyV2lkdGhcclxuICAgICAgOiAxMjAwO1xyXG5cclxuICAgIHRoaXMuY2Fyb3VzZWxXaWR0aCA9IHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xyXG4gICAgICB0aGlzLmRldmljZVR5cGUgPVxyXG4gICAgICAgIHRoaXMuZGV2aWNlV2lkdGggPj0gMTIwMFxyXG4gICAgICAgICAgPyAnbGcnXHJcbiAgICAgICAgICA6IHRoaXMuZGV2aWNlV2lkdGggPj0gOTkyXHJcbiAgICAgICAgICA/ICdtZCdcclxuICAgICAgICAgIDogdGhpcy5kZXZpY2VXaWR0aCA+PSA3NjhcclxuICAgICAgICAgICAgPyAnc20nXHJcbiAgICAgICAgICAgIDogJ3hzJztcclxuXHJcbiAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmlucHV0cy5ncmlkW3RoaXMuZGV2aWNlVHlwZV07XHJcbiAgICAgIHRoaXMuaXRlbVdpZHRoID0gdGhpcy5jYXJvdXNlbFdpZHRoIC8gdGhpcy5pdGVtcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBNYXRoLmNlaWwodGhpcy5jYXJvdXNlbFdpZHRoIC8gdGhpcy5pbnB1dHMuZ3JpZC5hbGwpO1xyXG4gICAgICB0aGlzLml0ZW1XaWR0aCA9IHRoaXMuaW5wdXRzLmdyaWQuYWxsO1xyXG4gICAgICB0aGlzLmRldmljZVR5cGUgPSAnYWxsJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNsaWRlSXRlbXMgPSArKHRoaXMuaW5wdXRzLnNsaWRlIDwgdGhpcy5pdGVtc1xyXG4gICAgICA/IHRoaXMuaW5wdXRzLnNsaWRlXHJcbiAgICAgIDogdGhpcy5pdGVtcyk7XHJcbiAgICB0aGlzLmxvYWQgPVxyXG4gICAgICB0aGlzLmlucHV0cy5sb2FkID49IHRoaXMuc2xpZGVJdGVtcyA/IHRoaXMuaW5wdXRzLmxvYWQgOiB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICB0aGlzLnNwZWVkID1cclxuICAgICAgdGhpcy5pbnB1dHMuc3BlZWQgJiYgdGhpcy5pbnB1dHMuc3BlZWQgPiAtMSA/IHRoaXMuaW5wdXRzLnNwZWVkIDogNDAwO1xyXG5cclxuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBJbml0IGNhcm91c2VsIHBvaW50ICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxQb2ludCgpOiB2b2lkIHtcclxuICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgLy8gaWYgKHRoaXMudXNlckRhdGEucG9pbnQudmlzaWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgY29uc3QgTm9zID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtICh0aGlzLml0ZW1zIC0gdGhpcy5zbGlkZUl0ZW1zKTtcclxuICAgIHRoaXMucG9pbnRJbmRleCA9IE1hdGguY2VpbChOb3MgLyB0aGlzLnNsaWRlSXRlbXMpO1xyXG4gICAgY29uc3QgcG9pbnRlcnMgPSBbXTtcclxuXHJcbiAgICBpZiAodGhpcy5wb2ludEluZGV4ID4gMSB8fCAhdGhpcy5pbnB1dHMucG9pbnQuaGlkZU9uU2luZ2xlU2xpZGUpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50SW5kZXg7IGkrKykge1xyXG4gICAgICAgIHBvaW50ZXJzLnB1c2goaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMucG9pbnROdW1iZXJzID0gcG9pbnRlcnM7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBvaW50TnVtYmVycyk7XHJcbiAgICB0aGlzLl9jYXJvdXNlbFBvaW50QWN0aXZlcigpO1xyXG4gICAgaWYgKHRoaXMucG9pbnRJbmRleCA8PSAxKSB7XHJcbiAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMSwgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUgPT09IDAgJiYgIXRoaXMubG9vcCkge1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMSwgMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgLyoqIGNoYW5nZSB0aGUgYWN0aXZlIHBvaW50IGluIGNhcm91c2VsICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxQb2ludEFjdGl2ZXIoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpID0gTWF0aC5jZWlsKHRoaXMuY3VycmVudFNsaWRlIC8gdGhpcy5zbGlkZUl0ZW1zKTtcclxuICAgIHRoaXMuYWN0aXZlUG9pbnQgPSBpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIHNldCB0aGUgc3R5bGUgb2YgdGhlIGNhcm91c2VsIGJhc2VkIHRoZSBpbnB1dHMgZGF0YSAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsU2l6ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudG9rZW4gPSB0aGlzLl9nZW5lcmF0ZUlEKCk7XHJcbiAgICBsZXQgZGlzbSA9ICcnO1xyXG4gICAgdGhpcy5zdHlsZWlkID0gYC4ke1xyXG4gICAgICB0aGlzLnRva2VuXHJcbiAgICAgIH0gPiAuY2Fyb3VzZWwtd3JhcHBlciA+IC5uZ3VjYXJvdXNlbCA+IC5uZ3UtdG91Y2gtY29udGFpbmVyID4gLm5ndWNhcm91c2VsLWl0ZW1zYDtcclxuXHJcbiAgICBpZiAodGhpcy5pbnB1dHMuY3VzdG9tID09PSAnYmFubmVyJykge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNhcm91c2VsLCAnYmFubmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5wdXRzLmFuaW1hdGlvbiA9PT0gJ2xhenknKSB7XHJcbiAgICAgIGRpc20gKz0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHt0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjZzIGVhc2U7fWA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGl0ZW1TdHlsZSA9ICcnO1xyXG4gICAgaWYgKHRoaXMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfeHMgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXHJcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLnhzfXB4fWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9zbSA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcclxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQuc219cHh9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX21kID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxyXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC5tZH1weH1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfbGcgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXHJcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLmxnfXB4fWA7XHJcblxyXG4gICAgICBpdGVtU3R5bGUgPSBgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpeyR7aXRlbVdpZHRoX3hzfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7JHtpdGVtV2lkdGhfc219fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXske2l0ZW1XaWR0aF9tZH19XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXske2l0ZW1XaWR0aF9sZ319YDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScpIHtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX3hzID1cclxuICAgICAgICB0aGlzLmlucHV0cy50eXBlID09PSAnbW9iaWxlJ1xyXG4gICAgICAgICAgPyBgJHt0aGlzLnN0eWxlaWR9IC5pdGVtIHtmbGV4OiAwIDAgJHs5NSAvXHJcbiAgICAgICAgICArdGhpcy5pbnB1dHMuZ3JpZC54c30lOyB3aWR0aDogJHs5NSAvICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7fWBcclxuICAgICAgICAgIDogYCR7dGhpcy5zdHlsZWlkfSAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cclxuICAgICAgICAgICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7IHdpZHRoOiAkezEwMCAvICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7fWA7XHJcblxyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfc20gPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXHJcbiAgICAgICt0aGlzLmlucHV0cy5ncmlkLnNtfSU7IHdpZHRoOiAkezEwMCAvICt0aGlzLmlucHV0cy5ncmlkLnNtfSV9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX21kID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtmbGV4OiAwIDAgJHsxMDAgL1xyXG4gICAgICArdGhpcy5pbnB1dHMuZ3JpZC5tZH0lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC5tZH0lfWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9sZyA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cclxuICAgICAgK3RoaXMuaW5wdXRzLmdyaWQubGd9JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQubGd9JX1gO1xyXG5cclxuICAgICAgaXRlbVN0eWxlID0gYEBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXske2l0ZW1XaWR0aF94c319XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpeyR7aXRlbVdpZHRoX3NtfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7JHtpdGVtV2lkdGhfbWR9fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7JHtpdGVtV2lkdGhfbGd9fWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtU3R5bGUgPSBgJHt0aGlzLnN0eWxlaWR9IC5pdGVtIHtmbGV4OiAwIDAgJHtcclxuICAgICAgICB0aGlzLmlucHV0cy5ncmlkLmFsbFxyXG4gICAgICAgIH1weDsgd2lkdGg6ICR7dGhpcy5pbnB1dHMuZ3JpZC5hbGx9cHg7fWA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuY2Fyb3VzZWwsIHRoaXMudG9rZW4pO1xyXG4gICAgaWYgKHRoaXMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcclxuICAgICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ25ndXZlcnRpY2FsJ1xyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICB0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAnaGVpZ2h0JyxcclxuICAgICAgICBgJHt0aGlzLnZlcnRpY2FsLmhlaWdodH1weGBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cclxuICAgIHRoaXMuUlRMICYmXHJcbiAgICAhdGhpcy52ZXJ0aWNhbC5lbmFibGVkICYmXHJcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNhcm91c2VsLCAnbmd1cnRsJyk7XHJcbiAgICB0aGlzLl9jcmVhdGVTdHlsZUVsZW0oYCR7ZGlzbX0gJHtpdGVtU3R5bGV9YCk7XHJcbiAgICB0aGlzLl9zdG9yZUNhcm91c2VsRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIGxvZ2ljIHRvIHNjcm9sbCB0aGUgY2Fyb3VzZWwgc3RlcCAxICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxTY3JvbGxPbmUoQnRuOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGxldCBpdGVtU3BlZWQgPSB0aGlzLnNwZWVkO1xyXG4gICAgbGV0IHRyYW5zbGF0ZVh2YWwsXHJcbiAgICAgIGN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICBjb25zdCB0b3VjaE1vdmUgPSBNYXRoLmNlaWwodGhpcy5kZXhWYWwgLyB0aGlzLml0ZW1XaWR0aCk7XHJcbiAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnJyk7XHJcblxyXG4gICAgaWYgKHRoaXMucG9pbnRJbmRleCA9PT0gMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKEJ0biA9PT0gMCAmJiAoKCF0aGlzLmxvb3AgJiYgIXRoaXMuaXNGaXJzdCkgfHwgdGhpcy5sb29wKSkge1xyXG4gICAgICBjb25zdCBzbGlkZSA9IHRoaXMuc2xpZGVJdGVtcyAqIHRoaXMucG9pbnRJbmRleDtcclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZUQgPSB0aGlzLmN1cnJlbnRTbGlkZSAtIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgY29uc3QgTW92ZVNsaWRlID0gY3VycmVudFNsaWRlRCArIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFNsaWRlID09PSAwKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtIHRoaXMuaXRlbXM7XHJcbiAgICAgICAgaXRlbVNwZWVkID0gNDAwO1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGlkZUl0ZW1zID49IE1vdmVTbGlkZSkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRyYW5zbGF0ZVh2YWwgPSAwO1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMSwgMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcclxuICAgICAgICBpZiAodG91Y2hNb3ZlID4gdGhpcy5zbGlkZUl0ZW1zKSB7XHJcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZSAtIHRvdWNoTW92ZTtcclxuICAgICAgICAgIGl0ZW1TcGVlZCA9IDIwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUgLSB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsVHdvKEJ0biwgY3VycmVudFNsaWRlLCBpdGVtU3BlZWQpO1xyXG4gICAgfSBlbHNlIGlmIChCdG4gPT09IDEgJiYgKCghdGhpcy5sb29wICYmICF0aGlzLmlzTGFzdCkgfHwgdGhpcy5sb29wKSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxlbmd0aCA8PVxyXG4gICAgICAgIHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5pdGVtcyArIHRoaXMuc2xpZGVJdGVtcyAmJlxyXG4gICAgICAgICF0aGlzLmlzTGFzdFxyXG4gICAgICApIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5pdGVtcztcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNMYXN0KSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gdHJhbnNsYXRlWHZhbCA9IDA7XHJcbiAgICAgICAgaXRlbVNwZWVkID0gNDAwO1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMSwgMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcclxuICAgICAgICBpZiAodG91Y2hNb3ZlID4gdGhpcy5zbGlkZUl0ZW1zKSB7XHJcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZSArIHRoaXMuc2xpZGVJdGVtcyArICh0b3VjaE1vdmUgLSB0aGlzLnNsaWRlSXRlbXMpO1xyXG4gICAgICAgICAgaXRlbVNwZWVkID0gMjAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZSArIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxUd28oQnRuLCBjdXJyZW50U2xpZGUsIGl0ZW1TcGVlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogbG9naWMgdG8gc2Nyb2xsIHRoZSBjYXJvdXNlbCBzdGVwIDIgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFNjcm9sbFR3byhcclxuICAgIEJ0bjogbnVtYmVyLFxyXG4gICAgY3VycmVudFNsaWRlOiBudW1iZXIsXHJcbiAgICBpdGVtU3BlZWQ6IG51bWJlclxyXG4gICk6IHZvaWQge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXHJcblxyXG4gICAgaWYgKHRoaXMuZGV4VmFsICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IE1hdGguYWJzKHRoaXMudG91Y2gudmVsb2NpdHkpO1xyXG4gICAgICBsZXQgc29tdCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgKHRoaXMuZGV4VmFsIC8gdmFsIC8gdGhpcy5kZXhWYWwpICogKHRoaXMuZGV2aWNlV2lkdGggLSB0aGlzLmRleFZhbClcclxuICAgICAgKTtcclxuICAgICAgc29tdCA9IHNvbXQgPiBpdGVtU3BlZWQgPyBpdGVtU3BlZWQgOiBzb210O1xyXG4gICAgICBpdGVtU3BlZWQgPSBzb210IDwgMjAwID8gMjAwIDogc29tdDtcclxuICAgICAgdGhpcy5kZXhWYWwgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMud2l0aEFuaW0pIHtcclxuICAgICAgdGhpcy5fc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICd0cmFuc2l0aW9uJyxcclxuICAgICAgICBgdHJhbnNmb3JtICR7aXRlbVNwZWVkfW1zICR7dGhpcy5pbnB1dHMuZWFzaW5nfWBcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5pbnB1dHMuYW5pbWF0aW9uICYmXHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsQW5pbWF0b3IoXHJcbiAgICAgICAgQnRuLFxyXG4gICAgICAgIGN1cnJlbnRTbGlkZSArIDEsXHJcbiAgICAgICAgY3VycmVudFNsaWRlICsgdGhpcy5pdGVtcyxcclxuICAgICAgICBpdGVtU3BlZWQsXHJcbiAgICAgICAgTWF0aC5hYnModGhpcy5jdXJyZW50U2xpZGUgLSBjdXJyZW50U2xpZGUpXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgYGApO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhU291cmNlKTtcclxuICAgIHRoaXMuaXRlbUxlbmd0aCA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGg7XHJcbiAgICB0aGlzLl90cmFuc2Zvcm1TdHlsZShjdXJyZW50U2xpZGUpO1xyXG4gICAgdGhpcy5jdXJyZW50U2xpZGUgPSBjdXJyZW50U2xpZGU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5vbk1vdmUuZW1pdCh0aGlzKTtcclxuICAgIH0sIDQwMCk7XHJcblxyXG4gICAgdGhpcy5fY2Fyb3VzZWxQb2ludEFjdGl2ZXIoKTtcclxuICAgIHRoaXMuX2Nhcm91c2VsTG9hZFRyaWdnZXIoKTtcclxuICAgIHRoaXMud2l0aEFuaW0gPSB0cnVlO1xyXG4gICAgLy8gaWYgKGN1cnJlbnRTbGlkZSA9PT0gMTIpIHtcclxuICAgIC8vICAgdGhpcy5fc3dpdGNoRGF0YVNvdXJjZSh0aGlzLmRhdGFTb3VyY2UpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgLyoqIGJvb2xlYW4gZnVuY3Rpb24gZm9yIG1ha2luZyBpc0ZpcnN0IGFuZCBpc0xhc3QgKi9cclxuICBwcml2YXRlIF9idG5Cb29sZWFuKGZpcnN0OiBudW1iZXIsIGxhc3Q6IG51bWJlcikge1xyXG4gICAgdGhpcy5pc0ZpcnN0ID0gISFmaXJzdDtcclxuICAgIHRoaXMuaXNMYXN0ID0gISFsYXN0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtU3RyaW5nKGdyaWQ6IHN0cmluZywgc2xpZGU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgY29sbGVjdCA9ICcnO1xyXG4gICAgY29sbGVjdCArPSBgJHt0aGlzLnN0eWxlaWR9IHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChgO1xyXG5cclxuICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1bZ3JpZF0gPVxyXG4gICAgICAgICh0aGlzLnZlcnRpY2FsLmhlaWdodCAvIHRoaXMuaW5wdXRzLmdyaWRbZ3JpZF0pICogc2xpZGU7XHJcbiAgICAgIGNvbGxlY3QgKz0gYDAsIC0ke3RoaXMudHJhbnNmb3JtW2dyaWRdfXB4LCAwYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtW2dyaWRdID0gKDEwMCAvIHRoaXMuaW5wdXRzLmdyaWRbZ3JpZF0pICogc2xpZGU7XHJcbiAgICAgIGNvbGxlY3QgKz0gYCR7dGhpcy5kaXJlY3Rpb25TeW19JHt0aGlzLnRyYW5zZm9ybVtncmlkXX0lLCAwLCAwYDtcclxuICAgIH1cclxuICAgIGNvbGxlY3QgKz0gYCk7IH1gO1xyXG4gICAgcmV0dXJuIGNvbGxlY3Q7XHJcbiAgfVxyXG5cclxuICAvKiogc2V0IHRoZSB0cmFuc2Zvcm0gc3R5bGUgdG8gc2Nyb2xsIHRoZSBjYXJvdXNlbCAgKi9cclxuICBwcml2YXRlIF90cmFuc2Zvcm1TdHlsZShzbGlkZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBsZXQgc2xpZGVDc3MgPSAnJztcclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xyXG4gICAgICBzbGlkZUNzcyA9IGBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHske3RoaXMuX3RyYW5zZm9ybVN0cmluZyhcclxuICAgICAgICAneHMnLFxyXG4gICAgICAgIHNsaWRlXHJcbiAgICAgICl9fVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHske3RoaXMuX3RyYW5zZm9ybVN0cmluZygnc20nLCBzbGlkZSl9IH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoJ21kJywgc2xpZGUpfSB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHske3RoaXMuX3RyYW5zZm9ybVN0cmluZygnbGcnLCBzbGlkZSl9IH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0uYWxsID0gdGhpcy5pbnB1dHMuZ3JpZC5hbGwgKiBzbGlkZTtcclxuICAgICAgdGhpcy50b3VjaFRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtLmFsbDtcclxuICAgICAgc2xpZGVDc3MgPSBgJHt0aGlzLnN0eWxlaWR9IHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgke1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uU3ltXHJcbiAgICAgICAgfSR7dGhpcy50cmFuc2Zvcm0uYWxsfXB4LCAwLCAwKTtgO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYXJvdXNlbENzc05vZGUuaW5uZXJIVE1MID0gc2xpZGVDc3M7XHJcbiAgfVxyXG5cclxuICAvKiogdGhpcyB3aWxsIHRyaWdnZXIgdGhlIGNhcm91c2VsIHRvIGxvYWQgdGhlIGl0ZW1zICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxMb2FkVHJpZ2dlcigpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5pbnB1dHMubG9hZCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtIHRoaXMubG9hZCA8PSB0aGlzLmN1cnJlbnRTbGlkZSArIHRoaXMuaXRlbXMgJiZcclxuICAgICAgdGhpcy5jYXJvdXNlbExvYWQuZW1pdCh0aGlzLmN1cnJlbnRTbGlkZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogZ2VuZXJhdGUgQ2xhc3MgZm9yIGVhY2ggY2Fyb3VzZWwgdG8gc2V0IHNwZWNpZmljIHN0eWxlICovXHJcbiAgcHJpdmF0ZSBfZ2VuZXJhdGVJRCgpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRleHQgPSAnJztcclxuICAgIGNvbnN0IHBvc3NpYmxlID1cclxuICAgICAgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICB0ZXh0ICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBgbmd1Y2Fyb3VzZWwke3RleHR9YDtcclxuICB9XHJcblxyXG4gIC8qKiBoYW5kbGUgdGhlIGF1dG8gc2xpZGUgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbEludGVydmFsKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jYXJvdXNlbE1haW4xLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5pbnRlcnZhbCAmJiB0aGlzLmxvb3ApIHtcclxuICAgICAgdGhpcy5saXN0ZW5lcjQgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMub25TY3JvbGxpbmcpO1xyXG4gICAgICAgIHRoaXMub25TY3JvbGxpbmcgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX29uV2luZG93U2Nyb2xsaW5nKCk7XHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBwbGF5JCA9IGZyb21FdmVudChjb250YWluZXIsICdtb3VzZWxlYXZlJykucGlwZShtYXBUbygxKSk7XHJcbiAgICAgIGNvbnN0IHBhdXNlJCA9IGZyb21FdmVudChjb250YWluZXIsICdtb3VzZWVudGVyJykucGlwZShtYXBUbygwKSk7XHJcblxyXG4gICAgICBjb25zdCB0b3VjaFBsYXkkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ3RvdWNoc3RhcnQnKS5waXBlKG1hcFRvKDEpKTtcclxuICAgICAgY29uc3QgdG91Y2hQYXVzZSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAndG91Y2hlbmQnKS5waXBlKG1hcFRvKDApKTtcclxuXHJcbiAgICAgIGNvbnN0IGludGVydmFsJCA9IGludGVydmFsKHRoaXMuaW5wdXRzLmludGVydmFsLnRpbWluZykucGlwZShtYXBUbygxKSk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmNhcm91c2VsSW50ID0gbWVyZ2UoXHJcbiAgICAgICAgICBwbGF5JCxcclxuICAgICAgICAgIHRvdWNoUGxheSQsXHJcbiAgICAgICAgICBwYXVzZSQsXHJcbiAgICAgICAgICB0b3VjaFBhdXNlJCxcclxuICAgICAgICAgIHRoaXMuX2ludGVydmFsQ29udHJvbGxlciRcclxuICAgICAgICApXHJcbiAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgc3RhcnRXaXRoKDEpLFxyXG4gICAgICAgICAgICBzd2l0Y2hNYXAodmFsID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmlzSG92ZXJlZCA9ICF2YWw7XHJcbiAgICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbCA/IGludGVydmFsJCA6IGVtcHR5KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKDEpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sIHRoaXMuaW50ZXJ2YWwuaW5pdGlhbERlbGF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZUl0ZW1JbmRleENvbnRleHRBbmkoKSB7XHJcbiAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyO1xyXG4gICAgZm9yIChcclxuICAgICAgbGV0IHJlbmRlckluZGV4ID0gMCwgY291bnQgPSB2aWV3Q29udGFpbmVyLmxlbmd0aDtcclxuICAgICAgcmVuZGVySW5kZXggPCBjb3VudDtcclxuICAgICAgcmVuZGVySW5kZXgrK1xyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChyZW5kZXJJbmRleCkgYXMgYW55O1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcclxuICAgICAgY29udGV4dC5jb3VudCA9IGNvdW50O1xyXG4gICAgICBjb250ZXh0LmZpcnN0ID0gcmVuZGVySW5kZXggPT09IDA7XHJcbiAgICAgIGNvbnRleHQubGFzdCA9IHJlbmRlckluZGV4ID09PSBjb3VudCAtIDE7XHJcbiAgICAgIGNvbnRleHQuZXZlbiA9IHJlbmRlckluZGV4ICUgMiA9PT0gMDtcclxuICAgICAgY29udGV4dC5vZGQgPSAhY29udGV4dC5ldmVuO1xyXG4gICAgICBjb250ZXh0LmluZGV4ID0gcmVuZGVySW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogYW5pbWF0ZSB0aGUgY2Fyb3VzZWwgaXRlbXMgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbEFuaW1hdG9yKFxyXG4gICAgZGlyZWN0aW9uOiBudW1iZXIsXHJcbiAgICBzdGFydDogbnVtYmVyLFxyXG4gICAgZW5kOiBudW1iZXIsXHJcbiAgICBzcGVlZDogbnVtYmVyLFxyXG4gICAgbGVuZ3RoOiBudW1iZXIsXHJcbiAgICB2aWV3Q29udGFpbmVyID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICBsZXQgdmFsID0gbGVuZ3RoIDwgNSA/IGxlbmd0aCA6IDU7XHJcbiAgICB2YWwgPSB2YWwgPT09IDEgPyAzIDogdmFsO1xyXG4gICAgY29uc3QgY29sbGVjdEluZGV4ID0gW107XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gc3RhcnQgLSAxOyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICBjb2xsZWN0SW5kZXgucHVzaChpKTtcclxuICAgICAgICB2YWwgPSB2YWwgKiAyO1xyXG4gICAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChpKSBhcyBhbnk7XHJcbiAgICAgICAgaWYgKHZpZXdSZWYpIHtcclxuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xyXG4gICAgICAgICAgY29udGV4dC5hbmltYXRlID0ge3ZhbHVlOiB0cnVlLCBwYXJhbXM6IHtkaXN0YW5jZTogdmFsfX07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gZW5kIC0gMTsgaSA+PSBzdGFydCAtIDE7IGktLSkge1xyXG4gICAgICAgIGNvbGxlY3RJbmRleC5wdXNoKGkpO1xyXG4gICAgICAgIHZhbCA9IHZhbCAqIDI7XHJcbiAgICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KGkpIGFzIGFueTtcclxuICAgICAgICBpZiAodmlld1JlZikge1xyXG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgICAgICBjb250ZXh0LmFuaW1hdGUgPSB7dmFsdWU6IHRydWUsIHBhcmFtczoge2Rpc3RhbmNlOiAtdmFsfX07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9yZW1vdmVBbmltYXRpb25zKGNvbGxlY3RJbmRleCk7XHJcbiAgICB9LCBzcGVlZCAqIDAuNyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZW1vdmVBbmltYXRpb25zKGluZGV4czogbnVtYmVyW10pIHtcclxuICAgIGNvbnN0IHZpZXdDb250YWluZXIgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXI7XHJcbiAgICBpbmRleHMuZm9yRWFjaChpID0+IHtcclxuICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KGkpIGFzIGFueTtcclxuICAgICAgaWYgKHZpZXdSZWYpIHtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcclxuICAgICAgICBjb250ZXh0LmFuaW1hdGUgPSB7dmFsdWU6IGZhbHNlLCBwYXJhbXM6IHtkaXN0YW5jZTogMH19O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNob3J0IGZvcm0gZm9yIHNldEVsZW1lbnRTdHlsZSAqL1xyXG4gIHByaXZhdGUgX3NldFN0eWxlKGVsOiBhbnksIHByb3A6IGFueSwgdmFsOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLCBwcm9wLCB2YWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZvciBnZW5lcmF0aW5nIHN0eWxlIHRhZyAqL1xyXG4gIHByaXZhdGUgX2NyZWF0ZVN0eWxlRWxlbShkYXRhcz86IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3R5bGVJdGVtID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgIGlmIChkYXRhcykge1xyXG4gICAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVUZXh0KGRhdGFzKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVJdGVtLCBzdHlsZVRleHQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jYXJvdXNlbCwgc3R5bGVJdGVtKTtcclxuICAgIHJldHVybiBzdHlsZUl0ZW07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ25ndS1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJ25ndS1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbmd1LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1SXRlbUNvbXBvbmVudCB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pdGVtJykgY2xhc3NlcyA9IHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnbmd1LXRpbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnbmd1LXRpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyduZ3UtdGlsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VUaWxlQ29tcG9uZW50IHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLml0ZW0nKSBjbGFzc2VzID0gdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxPdXRsZXQsXHJcbiAgTmd1Q2Fyb3VzZWxQb2ludERpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsIE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZVxyXG59IGZyb20gJy4vbmd1LWNhcm91c2VsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE5ndUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL25ndS1pdGVtL25ndS1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5ndUNhcm91c2VsIH0gZnJvbSAnLi9uZ3UtY2Fyb3VzZWwvbmd1LWNhcm91c2VsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5ndVRpbGVDb21wb25lbnQgfSBmcm9tICcuL25ndS10aWxlL25ndS10aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5ndUNhcm91c2VsU2VydmljZSB9IGZyb20gJy4vbmd1LWNhcm91c2VsLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOZ3VDYXJvdXNlbCxcclxuICAgIE5ndUl0ZW1Db21wb25lbnQsXHJcbiAgICBOZ3VUaWxlQ29tcG9uZW50LFxyXG4gICAgTmd1Q2Fyb3VzZWxQb2ludERpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxXcmFwcGVyRGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxPdXRsZXRcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTmd1Q2Fyb3VzZWwsXHJcbiAgICBOZ3VJdGVtQ29tcG9uZW50LFxyXG4gICAgTmd1VGlsZUNvbXBvbmVudCxcclxuICAgIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsT3V0bGV0XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE5ndUNhcm91c2VsU2VydmljZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsTW9kdWxlIHtcclxufVxyXG4iXSwibmFtZXMiOlsiaW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNFLFlBQ1MsUUFBUSxJQUFJLEtBQUssRUFBRSxFQUNuQixXQUFXLElBQUksUUFBUSxFQUFFLEVBQ3pCQSxXQUEyQixFQUMzQixZQUFZLElBQUksWUFBWSxFQUFFLEVBQzlCLE1BQWtCLEVBQ2xCLFlBQTJCLEVBQzNCLFVBQXVCLEVBQ3ZCLE9BQU8sT0FBTyxFQUNkLFFBQVEsRUFBRSxFQUNWLFFBQVEsQ0FBQyxFQUNULE9BQU8sQ0FBQyxFQUNSLGNBQWMsQ0FBQyxFQUNmLGdCQUFnQixDQUFDLEVBQ2pCLFlBQVksQ0FBQyxFQUNiLGFBQWEsQ0FBQyxFQUNkLGVBQWUsQ0FBQyxFQUNoQixhQUFhLENBQUMsRUFDZCxlQUFlLENBQUMsRUFDaEIsU0FBUyw0QkFBNEIsRUFDckMsUUFBUSxHQUFHLEVBQ1gsT0FBTyxLQUFLLEVBQ1osU0FBUyxDQUFDLEVBQ1YsaUJBQWlCLENBQUMsRUFDbEIsUUFBUSxLQUFLLEVBQ2IsVUFBVSxJQUFJLEVBQ2QsU0FBUyxLQUFLLEVBQ2QsTUFBTSxLQUFLLEVBQ1gsUUFBUSxJQUFJLEVBQ1osV0FBVyxDQUFDO1FBNUJaLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsYUFBUSxHQUFSQSxXQUFRLENBQW1CO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQXFCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDM0IsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2QixTQUFJLEdBQUosSUFBSSxDQUFVO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUNWLFVBQUssR0FBTCxLQUFLLENBQUk7UUFDVCxTQUFJLEdBQUosSUFBSSxDQUFJO1FBQ1IsZ0JBQVcsR0FBWCxXQUFXLENBQUk7UUFDZixrQkFBYSxHQUFiLGFBQWEsQ0FBSTtRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFJO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBSTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFJO1FBQ2hCLGVBQVUsR0FBVixVQUFVLENBQUk7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBSTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUErQjtRQUNyQyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQU0sR0FBTixNQUFNLENBQUk7UUFDVixtQkFBYyxHQUFkLGNBQWMsQ0FBSTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLGFBQVEsR0FBUixRQUFRLENBQUk7S0FDakI7Q0FDTDs7Q0FRQTs7Q0FNQTs7Q0FLQTs7Q0FNQTs7Ozs7Ozs7O0lBR0MsWUFDUyxLQUFLLENBQUMsRUFDTixLQUFLLENBQUMsRUFDTixLQUFLLENBQUMsRUFDTixLQUFLLENBQUMsRUFDTixNQUFNLENBQUM7UUFKUCxPQUFFLEdBQUYsRUFBRSxDQUFJO1FBQ04sT0FBRSxHQUFGLEVBQUUsQ0FBSTtRQUNOLE9BQUUsR0FBRixFQUFFLENBQUk7UUFDTixPQUFFLEdBQUYsRUFBRSxDQUFJO1FBQ04sUUFBRyxHQUFILEdBQUcsQ0FBSTtLQUNaO0NBQ0w7O0NBbUJBOzs7O0FBMkJEOzs7O0lBYUUsWUFBWSxJQUFPO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0tBQ3ZCO0NBQ0Y7Ozs7OztBQ2pJRDtJQVNFO0tBRUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQTBCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBQzFCOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN0Qjs7O1lBaEJGLFVBQVU7Ozs7Ozs7O0FDSFg7OztZQUVDLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7QUFPRDs7O1lBSkMsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsbUJBQW1CO2FBQzlCOztBQWFEOzs7WUFKQyxTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7O0FBVUQ7OztZQUpDLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7Ozs7QUFPRDs7OztJQUdFLFlBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0tBQUk7OztZQVBsRCxTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7OztZQXRDK0IsV0FBVzs7QUFpRDNDO0FBQ0E7Ozs7SUFDRSxZQUFtQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7S0FBSTs7O1lBTnZELFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHFCQUFxQjthQUNoQzs7O1lBaEQ0QyxnQkFBZ0I7Ozs7OztJQTJEM0QsWUFBbUIsUUFBeUI7UUFBekIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7S0FBSTs7O1lBTGpELFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHNCQUFzQjthQUNqQzs7O1lBekRtQixVQUFVOzs7Ozs7O0FDQTlCOzs7OztBQXVEQSxpQkFBNEIsU0FBUSxnQkFBZ0I7Ozs7Ozs7OztJQWdEbEQsWUFDVSxHQUFlLEVBQ2YsU0FBb0IsRUFDcEIsUUFBeUIsRUFDSixVQUFrQixFQUN2QyxHQUFzQixFQUN0QixlQUFtQztRQUUzQyxLQUFLLEVBQUUsQ0FBQztRQVBBLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ0osZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFoRDdDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFRbEIsaUJBQVksR0FBZSxFQUFFLENBQUM7O1FBUXZCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQU8zQyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBSWhCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVNsQyx5QkFBb0IsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBZW5ELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3hDOzs7O0lBSUQsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7OztJQUVELElBQUksVUFBVSxDQUFDLElBQVM7UUFDdEIsSUFBSSxJQUFJLEVBQUU7OztZQUdSLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjtLQUNGOzs7Ozs7O0lBTUQsSUFDSSxPQUFPLENBQUMsR0FBZTtRQUN6QixJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQyxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFDakUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUMzQixDQUFDO1NBQ0g7S0FDRjs7Ozs7OztJQUtELElBQ0ksT0FBTyxDQUFDLEdBQWU7UUFDekIsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQ2pFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FDM0IsQ0FBQztTQUNIO0tBQ0Y7Ozs7Ozs7O0lBUUQsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7OztJQUVELElBQUksT0FBTyxDQUFDLEVBQXNCO1FBQ2hDLElBQ0UsU0FBUyxFQUFFO1lBQ1gsRUFBRSxJQUFJLElBQUk7WUFDVixPQUFPLEVBQUUsS0FBSyxVQUFVOytCQUNuQixPQUFPLEVBQUE7K0JBQ1AsT0FBTyxDQUFDLElBQUksRUFBQSxFQUNqQjtZQUNBLE9BQU8sQ0FBQyxJQUFJLENBQ1YsNENBQTRDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FDbEUsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUTthQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ1IsTUFBTSxDQUFDLENBQUMsRUFBVSxFQUFFLElBQVM7WUFDNUIsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3RFLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNELElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztZQUV2QyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUM5QjtLQUNGOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFDdkMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzs7UUFJL0MsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNmO1lBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUs7Z0JBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7S0FHRjs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3pCOzs7Ozs7SUFJTSxLQUFLLENBQUMsZ0JBQTBCO1FBQ3JDLGdCQUFnQixLQUFLLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUVwQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0tBQ0Y7Ozs7Ozs7SUFHTSxNQUFNLENBQUMsS0FBYSxFQUFFLGdCQUEwQjs7UUFFckQsZ0JBQWdCLEtBQUssSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssS0FBSyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFOztnQkFDckQsWUFBWTs7a0JBQ1YsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBRTlDLFFBQVEsS0FBSztnQkFDWCxLQUFLLENBQUM7b0JBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLFlBQVksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDdkMsTUFBTTtnQkFDUixLQUFLLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUNuRCxNQUFNO2dCQUNSO29CQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QixZQUFZLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDMUM7WUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekQ7S0FDRjs7OztJQUdELFdBQVc7O1FBRVQsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBR3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUNyQixHQUFHLEdBQUcsV0FBVyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1NBQzFCO0tBQ0Y7Ozs7O0lBRU8saUJBQWlCLENBQUMsVUFBZTtRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7S0FDRjs7Ozs7O0lBRU8saUJBQWlCLENBQ3ZCLElBQVcsRUFDWCxnQkFBa0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhO1FBRWhFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUFFLE9BQU87UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FDaEMsQ0FDRSxJQUErQixFQUMvQixxQkFBNkIsRUFDN0IsWUFBb0I7O2tCQUVkLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxZQUFZLENBQUM7WUFDL0QsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksRUFBRTs7c0JBQ3pCLE9BQU8sR0FBRyxJQUFJLHdCQUF3QixDQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDckUsT0FBTyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7Z0JBQzdCLGFBQWEsQ0FBQyxrQkFBa0IsQ0FDOUIsSUFBSSxDQUFDLFFBQVEsRUFDYixPQUFPLEVBQ1AsWUFBWSxDQUNiLENBQUM7YUFDSDtpQkFBTSxJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7Z0JBQ2hDLGFBQWEsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDNUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3ZCO2lCQUFNOztzQkFDQyxJQUFJLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDckQsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7YUFDeEM7U0FDRixDQUNGLENBQUM7UUFDRixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUUvQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7O0tBRUY7Ozs7OztJQU1PLHVCQUF1Qjs7Y0FDdkIsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYTtRQUNwRCxLQUNFLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFDakQsV0FBVyxHQUFHLEtBQUssRUFDbkIsV0FBVyxFQUFFLEVBQ2I7O2tCQUNNLE9BQU8sc0JBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBTzs7a0JBQy9DLE9BQU8sc0JBQUcsT0FBTyxDQUFDLE9BQU8sRUFBTztZQUN0QyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUV0QixPQUFPLENBQUMsS0FBSyxHQUFHLFdBQVcsS0FBSyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1NBQzdCO0tBQ0Y7Ozs7OztJQUVPLFdBQVcsQ0FBQyxJQUFTLEVBQUUsQ0FBUzs7UUFFdEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztTQUM3Qjs7Y0FFSyxPQUFPLEdBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLGVBQWU7UUFFdEIsT0FBTyxPQUFPLENBQUM7S0FDaEI7Ozs7SUFFTyxxQkFBcUI7O1lBQ3ZCLFVBQXlDO1FBRTdDLElBQUksSUFBSSxDQUFDLFdBQVcsWUFBWSxVQUFVLEVBQUU7WUFDMUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDL0I7YUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ25DO1FBRUQsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVTtpQkFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztpQkFDMUMsU0FBUyxDQUFDLElBQUk7Z0JBQ2IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQixDQUFDLENBQUM7U0FDTjtLQUNGOzs7O0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxPQUFPLEdBQUcsWUFBWSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLDRCQUE0QixDQUFDO1FBQ3hFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztRQUMvQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVE7WUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVE7a0JBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtrQkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVwQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUs7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxXQUFXO2tCQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPO2tCQUN6QixJQUFJLENBQUM7UUFFWCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7O0lBRU8sV0FBVyxDQUFDLEtBQVU7UUFDNUIsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztZQUN6QixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2FBQzNCO1NBQ0YsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNUOzs7OztJQUdPLE1BQU07UUFDWixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFOztrQkFDZixVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7WUFDaEUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLG9CQUFvQixFQUFDLENBQUMsQ0FBQztZQUVwRSxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQU87Z0JBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7O2dCQUV0RSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQzthQUN4RSxDQUFDLENBQUM7WUFDSCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO2dCQUN6QixVQUFVLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQU87b0JBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUNwQyxDQUFDLENBQUM7Z0JBQ0gsVUFBVSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFPO29CQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztpQkFDckMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsVUFBVSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFPO29CQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztpQkFDcEMsQ0FBQyxDQUFDO2dCQUNILFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBTztvQkFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQ3JDLENBQUMsQ0FBQzthQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkQsVUFBVSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFOzs7Z0JBR3hDLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDL0IsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7Ozs7OztJQUdPLGNBQWMsQ0FBQyxDQUFTLEVBQUUsRUFBTzs7O1FBR3ZDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUVELEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztZQUN6RCxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQzNCLElBQUk7WUFDRixJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVk7a0JBQ3RCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztxQkFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzBCQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07MEJBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUM7b0JBQ3ZCLEdBQUc7a0JBQ0QsSUFBSSxDQUFDO1FBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7S0FFL0I7Ozs7OztJQUVPLGtCQUFrQixDQUFDLENBQVMsRUFBRSxJQUFZOztjQUMxQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLEdBQUcsU0FBUztRQUNuRCxJQUFJLENBQUMsY0FBYztZQUNqQixDQUFDLEtBQUssU0FBUyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0tBQzdFOzs7O0lBRU8sc0JBQXNCO1FBRTVCLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDekI7O2NBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxHQUFHLEdBQUcsR0FBRyxJQUFJOztjQUU5QyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVc7UUFDOUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXRJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3hELElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUM7WUFDbkMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUNwQyxXQUFXLEVBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPO2NBQ2pCLGtCQUFrQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxNQUFNO2NBQ3RFLGVBQWUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksU0FBUyxDQUMzRSxDQUFDO0tBQ0g7Ozs7O0lBR08sa0JBQWtCOztjQUNsQixHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTOztjQUM3QixPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87O2NBQ3hCLE9BQU8sR0FBRyxNQUFNLENBQUMsV0FBVzs7Y0FDNUIsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWTs7Y0FDM0Msa0JBQWtCLEdBQ3RCLEdBQUcsSUFBSSxPQUFPLEdBQUcsT0FBTyxHQUFHLGNBQWMsR0FBRyxDQUFDO1lBQzdDLEdBQUcsR0FBRyxjQUFjLEdBQUcsQ0FBQyxJQUFJLE9BQU87UUFFckMsSUFBSSxrQkFBa0IsRUFBRTtZQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDTCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25DO0tBQ0Y7Ozs7O0lBR08sa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztjQUNqRCxNQUFNLENBQUMsVUFBVTtjQUNqQixJQUFJLENBQUM7UUFFVCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUVsRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO1lBQzlCLElBQUksQ0FBQyxVQUFVO2dCQUNiLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSTtzQkFDcEIsSUFBSTtzQkFDSixJQUFJLENBQUMsV0FBVyxJQUFJLEdBQUc7MEJBQ3ZCLElBQUk7MEJBQ0osSUFBSSxDQUFDLFdBQVcsSUFBSSxHQUFHOzhCQUNyQixJQUFJOzhCQUNKLElBQUksQ0FBQztZQUViLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2xEO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSztjQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7Y0FDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJO1lBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNFLElBQUksQ0FBQyxLQUFLO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBRXhFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7Ozs7SUFHTyxjQUFjOzs7O2NBR2QsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs7Y0FDN0MsUUFBUSxHQUFHLEVBQUU7UUFFbkIsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFO1lBQy9ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQzs7UUFFN0IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3hCO1NBQ0Y7O0tBRUY7Ozs7O0lBR08scUJBQXFCOztjQUNyQixDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDeEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7O1FBRXJCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDekI7Ozs7O0lBR08sYUFBYTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7WUFDNUIsSUFBSSxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQ2IsSUFBSSxDQUFDLEtBQ0wsaUZBQWlGLENBQUM7UUFFcEYsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO1lBQ3BDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLDRDQUE0QyxDQUFDO1NBQ3JFOztZQUVHLFNBQVMsR0FBRyxFQUFFO1FBQ2xCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7O2tCQUNuQixZQUFZLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxxQkFBcUIsSUFBSSxDQUFDLFFBQVE7aUJBQ25FLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSzs7a0JBQy9CLFlBQVksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLHFCQUFxQixJQUFJLENBQUMsUUFBUTtpQkFDbkUsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLOztrQkFDL0IsWUFBWSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8scUJBQXFCLElBQUksQ0FBQyxRQUFRO2lCQUNuRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUs7O2tCQUMvQixZQUFZLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxxQkFBcUIsSUFBSSxDQUFDLFFBQVE7aUJBQ25FLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSztZQUVyQyxTQUFTLEdBQUcsNEJBQTRCLFlBQVk7K0NBQ1gsWUFBWTsrQ0FDWixZQUFZO2dEQUNYLFlBQVksR0FBRyxDQUFDO1NBQzNEO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRTs7a0JBQy9CLFlBQVksR0FDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUTtrQkFDekIsR0FBRyxJQUFJLENBQUMsT0FBTyxxQkFBcUIsRUFBRTtvQkFDeEMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLO2tCQUM3RCxHQUFHLElBQUksQ0FBQyxPQUFPLHFCQUFxQixHQUFHO29CQUN6QyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUs7O2tCQUU5RCxZQUFZLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyx1QkFBdUIsR0FBRztnQkFDOUQsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJOztrQkFDekQsWUFBWSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sdUJBQXVCLEdBQUc7Z0JBQzlELENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSTs7a0JBQ3pELFlBQVksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLHVCQUF1QixHQUFHO2dCQUM5RCxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUk7WUFFL0QsU0FBUyxHQUFHLDRCQUE0QixZQUFZOytDQUNYLFlBQVk7K0NBQ1osWUFBWTtnREFDWCxZQUFZLEdBQUcsQ0FBQztTQUMzRDthQUFNO1lBQ0wsU0FBUyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8scUJBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQ2pCLGNBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDNUM7UUFHRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUNwQyxhQUFhLENBQ2QsQ0FBQztZQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFDaEMsUUFBUSxFQUNSLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FDNUIsQ0FBQztTQUNIOztRQUdELElBQUksQ0FBQyxHQUFHO1lBQ1IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMzQjs7Ozs7O0lBR08sa0JBQWtCLENBQUMsR0FBVzs7WUFDaEMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLOztZQUN0QixhQUFhOztZQUNmLFlBQVksR0FBRyxDQUFDOztjQUNaLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXRFLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTztTQUNSO2FBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7O2tCQUM5RCxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVTs7a0JBRXpDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVOztrQkFDbkQsU0FBUyxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVTtZQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssQ0FBQyxFQUFFO2dCQUMzQixZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDbkQsU0FBUyxHQUFHLEdBQUcsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDeEI7aUJBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsRUFBRTtnQkFDdkMsWUFBWSxHQUFHLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUMvQixZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7b0JBQzdDLFNBQVMsR0FBRyxHQUFHLENBQUM7aUJBQ2pCO3FCQUFNO29CQUNMLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7aUJBQ3BEO2FBQ0Y7WUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN2RDthQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25FLElBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNO2dCQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVU7Z0JBQ2hELENBQUMsSUFBSSxDQUFDLE1BQU0sRUFDWjtnQkFDQSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDeEI7aUJBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUN0QixZQUFZLEdBQUcsYUFBYSxHQUFHLENBQUMsQ0FBQztnQkFDakMsU0FBUyxHQUFHLEdBQUcsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQy9CLFlBQVk7d0JBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3RFLFNBQVMsR0FBRyxHQUFHLENBQUM7aUJBQ2pCO3FCQUFNO29CQUNMLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7aUJBQ3BEO2FBQ0Y7WUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN2RDtLQUNGOzs7Ozs7OztJQUdPLGtCQUFrQixDQUN4QixHQUFXLEVBQ1gsWUFBb0IsRUFDcEIsU0FBaUI7O1FBSWpCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O2tCQUNmLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDOztnQkFDckMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQ25CLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDckU7WUFDRCxJQUFJLEdBQUcsSUFBSSxHQUFHLFNBQVMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzNDLFNBQVMsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDakI7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUNwQyxZQUFZLEVBQ1osYUFBYSxTQUFTLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FDakQsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUztnQkFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUNwQixHQUFHLEVBQ0gsWUFBWSxHQUFHLENBQUMsRUFDaEIsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQ3pCLFNBQVMsRUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLENBQzNDLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN4RTs7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsVUFBVSxDQUFDO1lBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOzs7O0tBSXRCOzs7Ozs7O0lBR08sV0FBVyxDQUFDLEtBQWEsRUFBRSxJQUFZO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDdEI7Ozs7OztJQUVPLGdCQUFnQixDQUFDLElBQVksRUFBRSxLQUFhOztZQUM5QyxPQUFPLEdBQUcsRUFBRTtRQUNoQixPQUFPLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyw0QkFBNEIsQ0FBQztRQUV2RCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNsQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQztZQUMxRCxPQUFPLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDL0M7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDO1lBQzlELE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxJQUFJLE1BQU0sQ0FBQztRQUNsQixPQUFPLE9BQU8sQ0FBQztLQUNoQjs7Ozs7O0lBR08sZUFBZSxDQUFDLEtBQWE7O1lBQy9CLFFBQVEsR0FBRyxFQUFFO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7WUFDOUIsUUFBUSxHQUFHLDhCQUE4QixJQUFJLENBQUMsZ0JBQWdCLENBQzVELElBQUksRUFDSixLQUFLLENBQ047bUNBQzRCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO21DQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztvQ0FDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ3RFO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ2xELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekMsUUFBUSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sNkJBQ3hCLElBQUksQ0FBQyxZQUNMLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFlBQVksQ0FBQztTQUNyQztRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztLQUMzQzs7Ozs7SUFHTyxvQkFBb0I7UUFDMUIsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUs7Z0JBQ3BFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMzQztLQUNGOzs7OztJQUdPLFdBQVc7O1lBQ2IsSUFBSSxHQUFHLEVBQUU7O2NBQ1AsUUFBUSxHQUNaLGdFQUFnRTtRQUVsRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLElBQUksSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsT0FBTyxjQUFjLElBQUksRUFBRSxDQUFDO0tBQzdCOzs7OztJQUdPLGlCQUFpQjs7Y0FDakIsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYTtRQUNsRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7Z0JBQ3pELFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO29CQUM1QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztpQkFDM0IsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNULENBQUMsQ0FBQzs7a0JBRUcsS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7a0JBQ3pELE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O2tCQUUxRCxVQUFVLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztrQkFDOUQsV0FBVyxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7a0JBRTdELFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV0RSxVQUFVLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQ3RCLEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsRUFDWCxJQUFJLENBQUMsb0JBQW9CLENBQzFCO3FCQUNFLElBQUksQ0FDSCxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ1osU0FBUyxDQUFDLEdBQUc7b0JBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDeEIsT0FBTyxHQUFHLEdBQUcsU0FBUyxHQUFHLEtBQUssRUFBRSxDQUFDO2lCQUNsQyxDQUFDLENBQ0g7cUJBQ0EsU0FBUyxDQUFDLEdBQUc7b0JBQ1osSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM1QixDQUFDLENBQUM7YUFDTixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEM7S0FDRjs7OztJQUVPLDBCQUEwQjs7Y0FDMUIsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYTtRQUNwRCxLQUNFLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFDakQsV0FBVyxHQUFHLEtBQUssRUFDbkIsV0FBVyxFQUFFLEVBQ2I7O2tCQUNNLE9BQU8sc0JBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBTzs7a0JBQy9DLE9BQU8sc0JBQUcsT0FBTyxDQUFDLE9BQU8sRUFBTztZQUN0QyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUN0QixPQUFPLENBQUMsS0FBSyxHQUFHLFdBQVcsS0FBSyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1NBQzdCO0tBQ0Y7Ozs7Ozs7Ozs7O0lBR08saUJBQWlCLENBQ3ZCLFNBQWlCLEVBQ2pCLEtBQWEsRUFDYixHQUFXLEVBQ1gsS0FBYSxFQUNiLE1BQWMsRUFDZCxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhOztZQUUxQyxHQUFHLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQztRQUNqQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDOztjQUNwQixZQUFZLEdBQUcsRUFBRTtRQUV2QixJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDOztzQkFDUixPQUFPLHNCQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQU87Z0JBQzNDLElBQUksT0FBTyxFQUFFOzswQkFDTCxPQUFPLHNCQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQU87b0JBQ3RDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsRUFBQyxDQUFDO2lCQUMxRDthQUNGO1NBQ0Y7YUFBTTtZQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7O3NCQUNSLE9BQU8sc0JBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBTztnQkFDM0MsSUFBSSxPQUFPLEVBQUU7OzBCQUNMLE9BQU8sc0JBQUcsT0FBTyxDQUFDLE9BQU8sRUFBTztvQkFDdEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsQ0FBQztpQkFDM0Q7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixVQUFVLENBQUM7WUFDVCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdEMsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDakI7Ozs7O0lBRU8saUJBQWlCLENBQUMsTUFBZ0I7O2NBQ2xDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWE7UUFDcEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztrQkFDUixPQUFPLHNCQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQU87WUFDM0MsSUFBSSxPQUFPLEVBQUU7O3NCQUNMLE9BQU8sc0JBQUcsT0FBTyxDQUFDLE9BQU8sRUFBTztnQkFDdEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBQyxFQUFDLENBQUM7YUFDekQ7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3pCOzs7Ozs7OztJQUdPLFNBQVMsQ0FBQyxFQUFPLEVBQUUsSUFBUyxFQUFFLEdBQVE7UUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN4Qzs7Ozs7O0lBR08sZ0JBQWdCLENBQUMsS0FBYzs7Y0FDL0IsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUN2RCxJQUFJLEtBQUssRUFBRTs7a0JBQ0gsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sU0FBUyxDQUFDO0tBQ2xCOzs7WUFsN0JGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHFvQkFBMEM7Z0JBRTFDLGFBQWEsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNuQyxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDL0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7WUEzQ0MsVUFBVTtZQWNWLFNBQVM7WUFOVCxlQUFlO1lBeUY0QixNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVztZQXRHckIsaUJBQWlCO1lBNEJWLGtCQUFrQjs7OzBCQWdDeEIsU0FBUyxTQUFDLGlCQUFpQjsrQkFFM0IsU0FBUyxTQUFDLDJCQUEyQjtxQkFTckMsTUFBTSxTQUFDLFFBQVE7d0JBR2YsZUFBZSxTQUFDLHVCQUF1QjtxQkFNdkMsS0FBSyxTQUFDLFFBQVE7MkJBRWQsTUFBTSxTQUFDLGNBQWM7NEJBRXJCLFNBQVMsU0FBQyxhQUFhLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO2dDQUczQyxTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDOzZCQUdqRCxTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO3lCQXNCOUMsS0FBSyxTQUFDLFlBQVk7c0JBaUJsQixZQUFZLFNBQUMsd0JBQXdCLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO3NCQWF6RCxZQUFZLFNBQUMsd0JBQXdCLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO3NCQWdCekQsS0FBSzs7Ozs7OztBQ25LUjtJQUVBO1FBTzZCLFlBQU8sR0FBRyxJQUFJLENBQUM7S0FDM0M7OztZQVJBLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLHlDQUFzQzs7YUFFdkM7OztzQkFFRSxXQUFXLFNBQUMsWUFBWTs7Ozs7OztBQ1QzQjtJQUVBO1FBTzZCLFlBQU8sR0FBRyxJQUFJLENBQUM7S0FDM0M7OztZQVJBLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLDZFQUFzQzs7YUFFdkM7OztzQkFFRSxXQUFXLFNBQUMsWUFBWTs7Ozs7OztBQ1QzQjs7O1lBZUMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLHlCQUF5QjtvQkFDekIsd0JBQXdCO29CQUN4Qix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtvQkFDeEIsdUJBQXVCO29CQUN2QiwyQkFBMkI7b0JBQzNCLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLHlCQUF5QjtvQkFDekIsd0JBQXdCO29CQUN4Qix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtvQkFDeEIsdUJBQXVCO29CQUN2QiwyQkFBMkI7b0JBQzNCLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGtCQUFrQjtpQkFDbkI7YUFDRjs7Ozs7Ozs7Ozs7Ozs7OyJ9