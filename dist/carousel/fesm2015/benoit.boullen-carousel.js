import { Directive, TemplateRef, ViewContainerRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Inject, Input, IterableDiffers, Output, PLATFORM_ID, Renderer2, ViewChild, HostBinding, NgModule } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { empty, fromEvent, interval, merge, of, Subject } from 'rxjs';
import { mapTo, startWith, switchMap } from 'rxjs/operators';

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
    constructor(touch = new Touch(), vertical = new Vertical(), interval$$1, transform = new Transfrom(), button, visibleItems, deviceType, type = 'fixed', token = '', items = 0, load = 0, deviceWidth = 0, carouselWidth = 0, itemWidth = 0, slideItems = 0, itemWidthPer = 0, itemLength = 0, currentSlide = 0, easing = 'cubic-bezier(0, 0, 0.2, 1)', speed = 200, loop = false, dexVal = 0, touchTransform = 0, isEnd = false, isFirst = true, isLast = false, RTL = false, point = true, velocity = 1) {
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
class Transfrom {
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
class NguCarouselItemDirective {
}
NguCarouselItemDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselItem]'
            },] },
];
class NguCarouselNextDirective {
}
NguCarouselNextDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselNext]'
            },] },
];
class NguCarouselPrevDirective {
}
NguCarouselPrevDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselPrev]'
            },] },
];
class NguCarouselPointDirective {
}
NguCarouselPointDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselPoint]'
            },] },
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
            },] },
];
/** @nocollapse */
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
            },] },
];
/** @nocollapse */
NguCarouselOutlet.ctorParameters = () => [
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// tslint:disable-next-line:component-class-suffix
class NguCarousel extends NguCarouselStore {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _differs
     * @param {?} platformId
     * @param {?} cdr
     */
    constructor(_el, _renderer, _differs, platformId, cdr) {
        super();
        this._el = _el;
        this._renderer = _renderer;
        this._differs = _differs;
        this.platformId = platformId;
        this.cdr = cdr;
        this.isHovered = false;
        this.pointNumbers = [];
        this.withAnim = true;
        this.carouselLoad = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.onMove = new EventEmitter();
        this._intervalController$ = new Subject();
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
     * @return {?}
     */
    ngOnInit() {
        this._dataDiffer = this._differs.find([]).create(null);
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
     * @param {?} dataSource
     * @return {?}
     */
    _switchDataSource(dataSource) {
        this._dataSource = dataSource;
        // console.log('carouselSwitch', this._defDirec);
        // if (this._defDirec && this.isFirstss > 1) {
        if (this._defDirec) {
            // console.log('carouselobser', this._defDirec);
            this._observeRenderChanges();
        }
    }
    /**
     * @param {?} data
     * @param {?=} dataDiffer
     * @param {?=} viewContainer
     * @param {?=} parentData
     * @return {?}
     */
    renderNodeChanges(data, dataDiffer = this._dataDiffer, viewContainer = this._nodeOutlet.viewContainer, parentData) {
        // console.log(data);
        // const changes = dataDiffer.diff(data);
        // console.log(this.arrayChanges);
        if (!this.arrayChanges) {
            return;
        }
        // console.log(this.arrayChanges);
        this.arrayChanges.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
            /** @type {?} */
            const node = this._getNodeDef(data[currentIndex], currentIndex);
            /** @type {?} */
            const context = new NguCarouselOutletContext(data[currentIndex]);
            // console.log(context);
            context.index = currentIndex;
            if (item.previousIndex == null) {
                viewContainer.createEmbeddedView(node.template, context, currentIndex);
            }
            else if (currentIndex == null) {
                // delete items when they doesn't exists anymore
                viewContainer.remove(adjustedPreviousIndex);
            }
            //   this._levels.delete(item.item);
            // } else {
            //   const view = viewContainer.get(adjustedPreviousIndex);
            //   viewContainer.move(view!, currentIndex);
            // }
        });
        if (this.carousel) {
            this._storeCarouselData();
        }
        // console.log(this.dataSource);
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
    ngAfterViewInit() {
        this.carousel = this._el.nativeElement;
        this._inputValidation();
        this.carouselCssNode = this._createStyleElem();
        this._buttonControl();
        if (isPlatformBrowser(this.platformId)) {
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
     * @return {?}
     */
    ngOnDestroy() {
        // clearInterval(this.carouselInt);
        this.carouselInt && this.carouselInt.unsubscribe();
        this._intervalController$.unsubscribe();
        this.carouselLoad.complete();
        this.onMove.complete();
        /** remove listeners */
        for (let i = 1; i <= 8; i++) {
            this[`listener${i}`] && this[`listener${i}`]();
        }
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
    _observeRenderChanges() {
        /** @type {?} */
        let dataStream;
        if (Array.isArray(this._dataSource)) {
            dataStream = of(this._dataSource);
        }
        if (dataStream) {
            this._dataSubscription = dataStream.subscribe(data => {
                this.renderNodeChanges(data);
                this.isLast = false;
                // console.log('observerRender', !!this.carousel);
                // console.log(this.carouselMain1.nativeElement.offsetWidth);
                // this._storeCarouselData();
                // this._buttonControl();
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
                console.log('panstart');
                this.touchTransform = this.transform[this.deviceType];
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
                    console.log('panleft');
                    this._touchHandling('panleft', ev);
                });
                hammertime.on('panright', (ev) => {
                    console.log('panright');
                    this._touchHandling('panright', ev);
                });
            }
            hammertime.on('panend', (ev) => {
                console.log('panend');
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
                    this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
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
            // this._carouselIntervalEvent(0);
            this._intervalController$.next(1);
        }
        else {
            this._intervalController$.next(0);
            // this._carouselIntervalEvent(1);
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
        this._buttonControl();
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
        this.styleid = `.${this.token} > .ngucarousel > .ngu-touch-container > .ngucarousel-items`;
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
            // this.inputs.animation &&
            //   this._carouselAnimator(
            //     Btn,
            //     currentSlide + 1,
            //     currentSlide + this.items,
            //     itemSpeed,
            //     Math.abs(this.currentSlide - currentSlide)
            //   );
        }
        else {
            this._setStyle(this.nguItemsContainer.nativeElement, 'transition', ``);
        }
        // console.log(this.dataSource);
        this.itemLength = this.dataSource.length;
        this._transformStyle(currentSlide);
        this.currentSlide = currentSlide;
        this.onMove.emit(this);
        this._carouselPointActiver();
        this._carouselLoadTrigger();
        this._buttonControl();
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
            // this.listener4 = this._renderer.listen(container, 'touchstart', () => {
            //   this._carouselIntervalEvent(1);
            // });
            // this.listener5 = this._renderer.listen(container, 'touchend', () => {
            //   this._carouselIntervalEvent(0);
            // });
            // this.listener6 = this._renderer.listen(container, 'mouseenter', () => {
            //   this._carouselIntervalEvent(1);
            //   this.isHovered = true;
            // });
            // this.listener7 = this._renderer.listen(container, 'mouseleave', () => {
            //   this._carouselIntervalEvent(0);
            //   this.isHovered = false;
            // });
            this.listener8 = this._renderer.listen('window', 'scroll', () => {
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
                // this.carouselInt = setInterval(() => {
                //   !this.pauseCarousel && this._carouselScrollOne(1);
                // }, this.inputs.interval.timing);
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
     * animate the carousel items
     * @param {?} direction
     * @param {?} start
     * @param {?} end
     * @param {?} speed
     * @param {?} length
     * @return {?}
     */
    _carouselAnimator(direction, start, end, speed, length) {
        /** @type {?} */
        let val = length < 5 ? length : 5;
        val = val === 1 ? 3 : val;
        console.log(this._defDirec);
        /** @type {?} */
        const itemList = this._defDirec.toArray();
        if (direction === 1) {
            for (let i = start - 1; i < end; i++) {
                val = val * 2;
                itemList[i].template.elementRef.nativeElement &&
                    this._setStyle(itemList[i].template.elementRef.nativeElement, 'transform', `translate3d(${val}px, 0, 0)`);
            }
        }
        else {
            for (let i = end - 1; i >= start - 1; i--) {
                val = val * 2;
                itemList[i] &&
                    this._setStyle(itemList[i], 'transform', `translate3d(-${val}px, 0, 0)`);
            }
        }
        setTimeout(() => {
            this._defDirec.forEach(elem => this._setStyle(elem.template.elementRef.nativeElement, 'transform', `translate3d(0, 0, 0)`));
        }, speed * 0.7);
    }
    /**
     * control button for loop
     * @return {?}
     */
    _buttonControl() {
        /** @type {?} */
        let arr = [];
        if (!this.loop || (this.isFirst && this.isLast)) {
            arr = [this.isFirst ? 'none' : 'block', this.isLast ? 'none' : 'block'];
        }
        else {
            arr = ['block', 'block'];
        }
        // this._setStyle(this.prev.nativeElement, 'display', arr[0]);
        // this._setStyle(this.next.nativeElement, 'display', arr[1]);
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
                template: `<div #ngucarousel class="ngucarousel">
  <div #touchContainer class="ngu-touch-container">
    <div #nguItemsContainer class="ngucarousel-items">
      <ng-container nguCarouselOutlet></ng-container>
    </div>
  </div>
  <div class="nguclearFix"></div>
  <ng-content select="[NguCarouselPrev]"></ng-content>
  <ng-content select="[NguCarouselNext]"></ng-content>
</div>
<ng-content select="[NguCarouselPoint]"></ng-content>
`,
                styles: [`:host{display:block;position:relative}:host.ngurtl{direction:rtl}.ngucarousel{position:relative;overflow:hidden;height:100%}.ngucarousel .ngucarousel-items{position:relative;display:flex;height:100%}.nguvertical{flex-direction:column}.banner .ngucarouselPointDefault .ngucarouselPoint{position:absolute;width:100%;bottom:20px}.banner .ngucarouselPointDefault .ngucarouselPoint li{background:rgba(255,255,255,.55)}.banner .ngucarouselPointDefault .ngucarouselPoint li.active{background:#fff}.banner .ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.ngucarouselPointDefault .ngucarouselPoint{list-style-type:none;text-align:center;padding:12px;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.ngucarouselPointDefault .ngucarouselPoint li{display:inline-block;border-radius:50%;background:rgba(0,0,0,.55);padding:4px;margin:0 4px;transition-timing-function:cubic-bezier(.17,.67,.83,.67);transition:.4s}.ngucarouselPointDefault .ngucarouselPoint li.active{background:#6b6b6b;-webkit-transform:scale(1.8);transform:scale(1.8)}.ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.nguclearFix{clear:both}`],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
NguCarousel.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: IterableDiffers },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ChangeDetectorRef }
];
NguCarousel.propDecorators = {
    _nodeOutlet: [{ type: ViewChild, args: [NguCarouselOutlet,] }],
    inputs: [{ type: Input, args: ['inputs',] }],
    carouselLoad: [{ type: Output, args: ['carouselLoad',] }],
    onMove: [{ type: Output, args: ['onMove',] }],
    _defDirec: [{ type: ContentChildren, args: [NguCarouselDefDirective,] }],
    carouselMain1: [{ type: ViewChild, args: ['ngucarousel', { read: ElementRef },] }],
    nguItemsContainer: [{ type: ViewChild, args: ['nguItemsContainer', { read: ElementRef },] }],
    touchContainer: [{ type: ViewChild, args: ['touchContainer', { read: ElementRef },] }],
    dataSource: [{ type: Input, args: ['dataSource',] }],
    nextBtn: [{ type: ContentChild, args: [NguCarouselNextDirective, { read: ElementRef },] }],
    prevBtn: [{ type: ContentChild, args: [NguCarouselPrevDirective, { read: ElementRef },] }]
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
                template: `<ng-content></ng-content>
`,
                styles: [``]
            },] },
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
                template: `<div class="tile">
  <ng-content></ng-content>
</div>
`,
                styles: [`:host{padding:10px;box-sizing:border-box}.tile{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}`]
            },] },
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
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NguCarouselConfig, NguCarouselStore, NguCarousel, NguCarouselModule, NguCarouselDefDirective as ɵg, NguCarouselItemDirective as ɵc, NguCarouselNextDirective as ɵd, NguCarouselOutlet as ɵh, NguCarouselPointDirective as ɵf, NguCarouselPrevDirective as ɵe, ItemsControl as ɵa, NguButton as ɵb, NguItemComponent as ɵi, NguTileComponent as ɵj };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVub2l0LmJvdWxsZW4tY2Fyb3VzZWwuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Jlbm9pdC5ib3VsbGVuL2Nhcm91c2VsL2xpYi9uZ3UtY2Fyb3VzZWwvbmd1LWNhcm91c2VsLnRzIiwibmc6Ly9iZW5vaXQuYm91bGxlbi9jYXJvdXNlbC9saWIvbmd1LWNhcm91c2VsLmRpcmVjdGl2ZS50cyIsIm5nOi8vYmVub2l0LmJvdWxsZW4vY2Fyb3VzZWwvbGliL25ndS1jYXJvdXNlbC9uZ3UtY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwibmc6Ly9iZW5vaXQuYm91bGxlbi9jYXJvdXNlbC9saWIvbmd1LWl0ZW0vbmd1LWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9iZW5vaXQuYm91bGxlbi9jYXJvdXNlbC9saWIvbmd1LXRpbGUvbmd1LXRpbGUuY29tcG9uZW50LnRzIiwibmc6Ly9iZW5vaXQuYm91bGxlbi9jYXJvdXNlbC9saWIvbmd1LWNhcm91c2VsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxTdG9yZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgdG91Y2ggPSBuZXcgVG91Y2goKSxcclxuICAgIHB1YmxpYyB2ZXJ0aWNhbCA9IG5ldyBWZXJ0aWNhbCgpLFxyXG4gICAgcHVibGljIGludGVydmFsPzogQ2Fyb3VzZWxJbnRlcnZhbCxcclxuICAgIHB1YmxpYyB0cmFuc2Zvcm0gPSBuZXcgVHJhbnNmcm9tKCksXHJcbiAgICBwdWJsaWMgYnV0dG9uPzogTmd1QnV0dG9uLFxyXG4gICAgcHVibGljIHZpc2libGVJdGVtcz86IEl0ZW1zQ29udHJvbCxcclxuICAgIHB1YmxpYyBkZXZpY2VUeXBlPzogRGV2aWNlVHlwZSxcclxuICAgIHB1YmxpYyB0eXBlID0gJ2ZpeGVkJyxcclxuICAgIHB1YmxpYyB0b2tlbiA9ICcnLFxyXG4gICAgcHVibGljIGl0ZW1zID0gMCxcclxuICAgIHB1YmxpYyBsb2FkID0gMCxcclxuICAgIHB1YmxpYyBkZXZpY2VXaWR0aCA9IDAsXHJcbiAgICBwdWJsaWMgY2Fyb3VzZWxXaWR0aCA9IDAsXHJcbiAgICBwdWJsaWMgaXRlbVdpZHRoID0gMCxcclxuICAgIHB1YmxpYyBzbGlkZUl0ZW1zID0gMCxcclxuICAgIHB1YmxpYyBpdGVtV2lkdGhQZXIgPSAwLFxyXG4gICAgcHVibGljIGl0ZW1MZW5ndGggPSAwLFxyXG4gICAgcHVibGljIGN1cnJlbnRTbGlkZSA9IDAsXHJcbiAgICBwdWJsaWMgZWFzaW5nID0gJ2N1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJyxcclxuICAgIHB1YmxpYyBzcGVlZCA9IDIwMCxcclxuICAgIHB1YmxpYyBsb29wID0gZmFsc2UsXHJcbiAgICBwdWJsaWMgZGV4VmFsID0gMCxcclxuICAgIHB1YmxpYyB0b3VjaFRyYW5zZm9ybSA9IDAsXHJcbiAgICBwdWJsaWMgaXNFbmQgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBpc0ZpcnN0ID0gdHJ1ZSxcclxuICAgIHB1YmxpYyBpc0xhc3QgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBSVEwgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBwb2ludCA9IHRydWUsXHJcbiAgICBwdWJsaWMgdmVsb2NpdHkgPSAxXHJcbiAgKSB7fVxyXG59XHJcbmV4cG9ydCB0eXBlIERldmljZVR5cGUgPSAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ2FsbCc7XHJcblxyXG5leHBvcnQgdHlwZSBCdXR0b25WaXNpYmxlID0gJ2Rpc2FibGVkJyB8ICdoaWRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbnRyb2wge1xyXG4gIHN0YXJ0OiBudW1iZXI7XHJcbiAgZW5kOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbCB7XHJcbiAgZW5hYmxlZDogYm9vbGVhbjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICAvLyBudW1IZWlnaHQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3VCdXR0b24ge1xyXG4gIHZpc2liaWxpdHk/OiBCdXR0b25WaXNpYmxlO1xyXG4gIGVsYXN0aWM/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb3VjaCB7XHJcbiAgYWN0aXZlPzogYm9vbGVhbjtcclxuICBzd2lwZTogc3RyaW5nO1xyXG4gIHZlbG9jaXR5OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2Zyb20ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHhzID0gMCxcclxuICAgIHB1YmxpYyBzbSA9IDAsXHJcbiAgICBwdWJsaWMgbWQgPSAwLFxyXG4gICAgcHVibGljIGxnID0gMCxcclxuICAgIHB1YmxpYyBhbGwgPSAwXHJcbiAgKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxDb25maWcge1xyXG4gIGdyaWQ6IFRyYW5zZnJvbTtcclxuICBzbGlkZT86IG51bWJlcjtcclxuICBzcGVlZD86IG51bWJlcjtcclxuICBpbnRlcnZhbD86IENhcm91c2VsSW50ZXJ2YWw7XHJcbiAgYW5pbWF0aW9uPzogQW5pbWF0ZTtcclxuICBwb2ludD86IFBvaW50O1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbiAgbG9hZD86IG51bWJlcjtcclxuICBjdXN0b20/OiBDdXN0b207XHJcbiAgbG9vcD86IGJvb2xlYW47XHJcbiAgdG91Y2g/OiBib29sZWFuO1xyXG4gIGVhc2luZz86IHN0cmluZztcclxuICBSVEw/OiBib29sZWFuO1xyXG4gIGJ1dHRvbj86IE5ndUJ1dHRvbjtcclxuICB2ZXJ0aWNhbD86IFZlcnRpY2FsO1xyXG4gIHZlbG9jaXR5PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDdXN0b20gPSAnYmFubmVyJztcclxuZXhwb3J0IHR5cGUgQW5pbWF0ZSA9ICdsYXp5JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xyXG4gIHZpc2libGU6IGJvb2xlYW47XHJcbiAgaGlkZU9uU2luZ2xlU2xpZGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvbiB7XHJcbiAgdHlwZT86IEFuaW1hdGU7XHJcbiAgYW5pbWF0ZVN0eWxlcz86IEFuaW1hdGlvblN0eWxlcztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25TdHlsZXMge1xyXG4gIHN0eWxlPzogc3RyaW5nO1xyXG4gIG9wZW4/OiBzdHJpbmc7XHJcbiAgY2xvc2U/OiBzdHJpbmc7XHJcbiAgc3RhZ2dlcj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbEludGVydmFsIHtcclxuICB0aW1pbmc6IG51bWJlcjtcclxuICBpbml0aWFsRGVsYXk/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE91dGxldENvbnRleHQ8VD4ge1xyXG4gIC8qKiBEYXRhIGZvciB0aGUgbm9kZS4gKi9cclxuICAkaW1wbGljaXQ6IFQ7XHJcblxyXG4gIC8qKiBEZXB0aCBvZiB0aGUgbm9kZS4gKi9cclxuICBsZXZlbDogbnVtYmVyO1xyXG5cclxuICAvKiogSW5kZXggbG9jYXRpb24gb2YgdGhlIG5vZGUuICovXHJcbiAgaW5kZXg/OiBudW1iZXI7XHJcblxyXG4gIC8qKiBMZW5ndGggb2YgdGhlIG51bWJlciBvZiB0b3RhbCBkYXRhTm9kZXMuICovXHJcbiAgY291bnQ/OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFQpIHtcclxuICAgIHRoaXMuJGltcGxpY2l0ID0gZGF0YTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW05ndUNhcm91c2VsSXRlbV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUge31cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tOZ3VDYXJvdXNlbE5leHRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlIHtcclxuICAvLyBASG9zdEJpbmRpbmcoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgLy8gQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgZGlzcGxheSA9ICdibG9jayc7XHJcbiAgLy8gQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIC8vIG9uQ2xpY2soKSB7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbTmd1Q2Fyb3VzZWxQcmV2XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSB7XHJcbiAgLy8gQEhvc3RCaW5kaW5nKCdkaXNhYmxlZCcpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIC8vIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIGRpc3BsYXkgPSAnYmxvY2snO1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbTmd1Q2Fyb3VzZWxQb2ludF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbFBvaW50RGlyZWN0aXZlIHt9XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbbmd1Q2Fyb3VzZWxEZWZdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmU8VD4ge1xyXG4gIHdoZW46IChpbmRleDogbnVtYmVyLCBub2RlRGF0YTogVCkgPT4gYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbbmd1Q2Fyb3VzZWxPdXRsZXRdJ1xyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxPdXRsZXQge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRG9DaGVjayxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgSXRlcmFibGVDaGFuZ2VSZWNvcmQsXHJcbiAgSXRlcmFibGVDaGFuZ2VzLFxyXG4gIEl0ZXJhYmxlRGlmZmVyLFxyXG4gIEl0ZXJhYmxlRGlmZmVycyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBQTEFURk9STV9JRCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsT3V0bGV0LFxyXG4gIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZVxyXG59IGZyb20gJy4vLi4vbmd1LWNhcm91c2VsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE5ndUNhcm91c2VsQ29uZmlnLCBOZ3VDYXJvdXNlbE91dGxldENvbnRleHQsIE5ndUNhcm91c2VsU3RvcmUgfSBmcm9tICcuL25ndS1jYXJvdXNlbCc7XHJcbmltcG9ydCB7IGVtcHR5LCBmcm9tRXZlbnQsIGludGVydmFsLCBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXBUbywgc3RhcnRXaXRoLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICduZ3UtY2Fyb3VzZWwnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjbmd1Y2Fyb3VzZWwgY2xhc3M9XCJuZ3VjYXJvdXNlbFwiPlxyXG4gIDxkaXYgI3RvdWNoQ29udGFpbmVyIGNsYXNzPVwibmd1LXRvdWNoLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiAjbmd1SXRlbXNDb250YWluZXIgY2xhc3M9XCJuZ3VjYXJvdXNlbC1pdGVtc1wiPlxyXG4gICAgICA8bmctY29udGFpbmVyIG5ndUNhcm91c2VsT3V0bGV0PjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm5ndWNsZWFyRml4XCI+PC9kaXY+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW05ndUNhcm91c2VsUHJldl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW05ndUNhcm91c2VsTmV4dF1cIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48bmctY29udGVudCBzZWxlY3Q9XCJbTmd1Q2Fyb3VzZWxQb2ludF1cIj48L25nLWNvbnRlbnQ+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmV9Omhvc3Qubmd1cnRse2RpcmVjdGlvbjpydGx9Lm5ndWNhcm91c2Vse3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjtoZWlnaHQ6MTAwJX0ubmd1Y2Fyb3VzZWwgLm5ndWNhcm91c2VsLWl0ZW1ze3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtoZWlnaHQ6MTAwJX0ubmd1dmVydGljYWx7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5iYW5uZXIgLm5ndWNhcm91c2VsUG9pbnREZWZhdWx0IC5uZ3VjYXJvdXNlbFBvaW50e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7Ym90dG9tOjIwcHh9LmJhbm5lciAubmd1Y2Fyb3VzZWxQb2ludERlZmF1bHQgLm5ndWNhcm91c2VsUG9pbnQgbGl7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC41NSl9LmJhbm5lciAubmd1Y2Fyb3VzZWxQb2ludERlZmF1bHQgLm5ndWNhcm91c2VsUG9pbnQgbGkuYWN0aXZle2JhY2tncm91bmQ6I2ZmZn0uYmFubmVyIC5uZ3VjYXJvdXNlbFBvaW50RGVmYXVsdCAubmd1Y2Fyb3VzZWxQb2ludCBsaTpob3ZlcntjdXJzb3I6cG9pbnRlcn0ubmd1Y2Fyb3VzZWxQb2ludERlZmF1bHQgLm5ndWNhcm91c2VsUG9pbnR7bGlzdC1zdHlsZS10eXBlOm5vbmU7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoxMnB4O21hcmdpbjowO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubmd1Y2Fyb3VzZWxQb2ludERlZmF1bHQgLm5ndWNhcm91c2VsUG9pbnQgbGl7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC41NSk7cGFkZGluZzo0cHg7bWFyZ2luOjAgNHB4O3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTcsLjY3LC44MywuNjcpO3RyYW5zaXRpb246LjRzfS5uZ3VjYXJvdXNlbFBvaW50RGVmYXVsdCAubmd1Y2Fyb3VzZWxQb2ludCBsaS5hY3RpdmV7YmFja2dyb3VuZDojNmI2YjZiOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuOCk7dHJhbnNmb3JtOnNjYWxlKDEuOCl9Lm5ndWNhcm91c2VsUG9pbnREZWZhdWx0IC5uZ3VjYXJvdXNlbFBvaW50IGxpOmhvdmVye2N1cnNvcjpwb2ludGVyfS5uZ3VjbGVhckZpeHtjbGVhcjpib3RofWBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtY2xhc3Mtc3VmZml4XHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbCBleHRlbmRzIE5ndUNhcm91c2VsU3RvcmVcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcclxuICBfZGF0YVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIF9kYXRhRGlmZmVyOiBJdGVyYWJsZURpZmZlcjx7fT47XHJcbiAgc3R5bGVpZDogc3RyaW5nO1xyXG4gIGFjdGl2ZVBvaW50OiBudW1iZXI7XHJcbiAgaXNIb3ZlcmVkID0gZmFsc2U7XHJcbiAgLy8gaXNGaXJzdHNzID0gMDtcclxuICBhcnJheUNoYW5nZXM6IEl0ZXJhYmxlQ2hhbmdlczx7fT47XHJcbiAgY2Fyb3VzZWxJbnQ6IFN1YnNjcmlwdGlvbjtcclxuICBsaXN0ZW5lcjE6ICgpID0+IHZvaWQ7XHJcbiAgbGlzdGVuZXIyOiAoKSA9PiB2b2lkO1xyXG4gIGxpc3RlbmVyMzogKCkgPT4gdm9pZDtcclxuICBsaXN0ZW5lcjg6ICgpID0+IHZvaWQ7XHJcbiAgQFZpZXdDaGlsZChOZ3VDYXJvdXNlbE91dGxldClcclxuICBfbm9kZU91dGxldDogTmd1Q2Fyb3VzZWxPdXRsZXQ7XHJcbiAgcG9pbnROdW1iZXJzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgcHJpdmF0ZSBkaXJlY3Rpb25TeW06IHN0cmluZztcclxuICBwcml2YXRlIGNhcm91c2VsQ3NzTm9kZTogYW55O1xyXG4gIHByaXZhdGUgcG9pbnRJbmRleDogbnVtYmVyO1xyXG4gIHByaXZhdGUgd2l0aEFuaW0gPSB0cnVlO1xyXG4gIEBJbnB1dCgnaW5wdXRzJylcclxuICBwcml2YXRlIGlucHV0czogTmd1Q2Fyb3VzZWxDb25maWc7XHJcbiAgQE91dHB1dCgnY2Fyb3VzZWxMb2FkJylcclxuICBwcml2YXRlIGNhcm91c2VsTG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxyXG4gIEBPdXRwdXQoJ29uTW92ZScpXHJcbiAgcHJpdmF0ZSBvbk1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE5ndUNhcm91c2VsPigpO1xyXG4gIHByaXZhdGUgX2RlZmF1bHROb2RlRGVmOiBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxhbnk+IHwgbnVsbDtcclxuICBAQ29udGVudENoaWxkcmVuKE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlKVxyXG4gIHByaXZhdGUgX2RlZkRpcmVjOiBRdWVyeUxpc3Q8Tmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmU8YW55Pj47XHJcbiAgQFZpZXdDaGlsZCgnbmd1Y2Fyb3VzZWwnLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgcHJpdmF0ZSBjYXJvdXNlbE1haW4xOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ25ndUl0ZW1zQ29udGFpbmVyJywge3JlYWQ6IEVsZW1lbnRSZWZ9KVxyXG4gIHByaXZhdGUgbmd1SXRlbXNDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgndG91Y2hDb250YWluZXInLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgcHJpdmF0ZSB0b3VjaENvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIF9pbnRlcnZhbENvbnRyb2xsZXIkID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xyXG4gIHByaXZhdGUgY2Fyb3VzZWw6IGFueTtcclxuICBwcml2YXRlIG9uUmVzaXplOiBhbnk7XHJcbiAgcHJpdmF0ZSBvblNjcm9sbGluZzogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgX2RhdGFTb3VyY2U6IGFueTtcclxuXHJcbiAgQElucHV0KCdkYXRhU291cmNlJylcclxuICBnZXQgZGF0YVNvdXJjZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2U7XHJcbiAgfVxyXG5cclxuICBzZXQgZGF0YVNvdXJjZShkYXRhOiBhbnkpIHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsIHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICAgIC8vIHRoaXMuaXNGaXJzdHNzKys7XHJcbiAgICAgIHRoaXMuX3N3aXRjaERhdGFTb3VyY2UoZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogVGhlIHNldHRlciBpcyB1c2VkIHRvIGNhdGNoIHRoZSBidXR0b24gaWYgdGhlIGJ1dHRvbiBoYXMgbmdJZlxyXG4gICAqIGlzc3VlIGlkICM5MVxyXG4gICAqL1xyXG4gIEBDb250ZW50Q2hpbGQoTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgc2V0IG5leHRCdG4oYnRuOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmxpc3RlbmVyMiAmJiB0aGlzLmxpc3RlbmVyMigpO1xyXG4gICAgaWYgKGJ0bikge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyMiA9IHRoaXMuX3JlbmRlcmVyLmxpc3RlbihidG4ubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKCkgPT5cclxuICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZSgxKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFRoZSBzZXR0ZXIgaXMgdXNlZCB0byBjYXRjaCB0aGUgYnV0dG9uIGlmIHRoZSBidXR0b24gaGFzIG5nSWZcclxuICAgKiBpc3N1ZSBpZCAjOTFcclxuICAgKi9cclxuICBAQ29udGVudENoaWxkKE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSwge3JlYWQ6IEVsZW1lbnRSZWZ9KVxyXG4gIHNldCBwcmV2QnRuKGJ0bjogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5saXN0ZW5lcjEgJiYgdGhpcy5saXN0ZW5lcjEoKTtcclxuICAgIGlmIChidG4pIHtcclxuICAgICAgdGhpcy5saXN0ZW5lcjEgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oYnRuLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsICgpID0+XHJcbiAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoMClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5fZGF0YURpZmZlciA9IHRoaXMuX2RpZmZlcnMuZmluZChbXSkuY3JlYXRlKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCkge1xyXG4gICAgdGhpcy5hcnJheUNoYW5nZXMgPSB0aGlzLl9kYXRhRGlmZmVyLmRpZmYodGhpcy5kYXRhU291cmNlKTtcclxuICAgIGlmICh0aGlzLmFycmF5Q2hhbmdlcyAmJiB0aGlzLl9kZWZEaXJlYykge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnQ2hhbmdlcyBkZXRlY3RlZCEnKTtcclxuICAgICAgdGhpcy5fb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zd2l0Y2hEYXRhU291cmNlKGRhdGFTb3VyY2U6IGFueSk6IGFueSB7XHJcbiAgICB0aGlzLl9kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjYXJvdXNlbFN3aXRjaCcsIHRoaXMuX2RlZkRpcmVjKTtcclxuICAgIC8vIGlmICh0aGlzLl9kZWZEaXJlYyAmJiB0aGlzLmlzRmlyc3RzcyA+IDEpIHtcclxuICAgIGlmICh0aGlzLl9kZWZEaXJlYykge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnY2Fyb3VzZWxvYnNlcicsIHRoaXMuX2RlZkRpcmVjKTtcclxuICAgICAgdGhpcy5fb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlck5vZGVDaGFuZ2VzKFxyXG4gICAgZGF0YTogYW55W10sXHJcbiAgICBkYXRhRGlmZmVyOiBJdGVyYWJsZURpZmZlcjxhbnk+ID0gdGhpcy5fZGF0YURpZmZlcixcclxuICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXIsXHJcbiAgICBwYXJlbnREYXRhPzogYW55XHJcbiAgKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIC8vIGNvbnN0IGNoYW5nZXMgPSBkYXRhRGlmZmVyLmRpZmYoZGF0YSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFycmF5Q2hhbmdlcyk7XHJcbiAgICBpZiAoIXRoaXMuYXJyYXlDaGFuZ2VzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXJyYXlDaGFuZ2VzKTtcclxuICAgIHRoaXMuYXJyYXlDaGFuZ2VzLmZvckVhY2hPcGVyYXRpb24oXHJcbiAgICAgIChcclxuICAgICAgICBpdGVtOiBJdGVyYWJsZUNoYW5nZVJlY29yZDxhbnk+LFxyXG4gICAgICAgIGFkanVzdGVkUHJldmlvdXNJbmRleDogbnVtYmVyLFxyXG4gICAgICAgIGN1cnJlbnRJbmRleDogbnVtYmVyXHJcbiAgICAgICkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnN0IG5vZGUgPSB0aGlzLl9kZWZEaXJlYy5maW5kKGl0ZW1zID0+IGl0ZW0uaXRlbSk7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuX2dldE5vZGVEZWYoZGF0YVtjdXJyZW50SW5kZXhdLCBjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgTmd1Q2Fyb3VzZWxPdXRsZXRDb250ZXh0PGFueT4oZGF0YVtjdXJyZW50SW5kZXhdKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuICAgICAgICBjb250ZXh0LmluZGV4ID0gY3VycmVudEluZGV4O1xyXG4gICAgICAgIGlmIChpdGVtLnByZXZpb3VzSW5kZXggPT0gbnVsbCkge1xyXG4gICAgICAgICAgdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcobm9kZS50ZW1wbGF0ZSwgY29udGV4dCwgY3VycmVudEluZGV4KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAvLyBkZWxldGUgaXRlbXMgd2hlbiB0aGV5IGRvZXNuJ3QgZXhpc3RzIGFueW1vcmVcclxuICAgICAgICAgIHZpZXdDb250YWluZXIucmVtb3ZlKGFkanVzdGVkUHJldmlvdXNJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vICAgdGhpcy5fbGV2ZWxzLmRlbGV0ZShpdGVtLml0ZW0pO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICBjb25zdCB2aWV3ID0gdmlld0NvbnRhaW5lci5nZXQoYWRqdXN0ZWRQcmV2aW91c0luZGV4KTtcclxuICAgICAgICAvLyAgIHZpZXdDb250YWluZXIubW92ZSh2aWV3ISwgY3VycmVudEluZGV4KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBpZiAodGhpcy5jYXJvdXNlbCkge1xyXG4gICAgICB0aGlzLl9zdG9yZUNhcm91c2VsRGF0YSgpO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhU291cmNlKTtcclxuICB9XHJcblxyXG4gIF9nZXROb2RlRGVmKGRhdGE6IGFueSwgaTogbnVtYmVyKTogTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmU8YW55PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9kZWZEaXJlYyk7XHJcbiAgICBpZiAodGhpcy5fZGVmRGlyZWMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9kZWZEaXJlYy5maXJzdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub2RlRGVmID1cclxuICAgICAgdGhpcy5fZGVmRGlyZWMuZmluZChkZWYgPT4gZGVmLndoZW4gJiYgZGVmLndoZW4oaSwgZGF0YSkpIHx8XHJcbiAgICAgIHRoaXMuX2RlZmF1bHROb2RlRGVmO1xyXG5cclxuICAgIHJldHVybiBub2RlRGVmO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jYXJvdXNlbCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLl9pbnB1dFZhbGlkYXRpb24oKTtcclxuXHJcbiAgICB0aGlzLmNhcm91c2VsQ3NzTm9kZSA9IHRoaXMuX2NyZWF0ZVN0eWxlRWxlbSgpO1xyXG5cclxuICAgIHRoaXMuX2J1dHRvbkNvbnRyb2woKTtcclxuXHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICB0aGlzLl9jYXJvdXNlbEludGVydmFsKCk7XHJcbiAgICAgIGlmICghdGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgICAgdGhpcy5fdG91Y2goKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpc3RlbmVyMyA9IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsIGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLl9vblJlc2l6aW5nKGV2ZW50KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX29uV2luZG93U2Nyb2xsaW5nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpO1xyXG5cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjbGVhckludGVydmFsKHRoaXMuY2Fyb3VzZWxJbnQpO1xyXG4gICAgdGhpcy5jYXJvdXNlbEludCAmJiB0aGlzLmNhcm91c2VsSW50LnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmNhcm91c2VsTG9hZC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5vbk1vdmUuY29tcGxldGUoKTtcclxuXHJcbiAgICAvKiogcmVtb3ZlIGxpc3RlbmVycyAqL1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gODsgaSsrKSB7XHJcbiAgICAgIHRoaXNbYGxpc3RlbmVyJHtpfWBdICYmIHRoaXNbYGxpc3RlbmVyJHtpfWBdKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogVXNlZCB0byByZXNldCB0aGUgY2Fyb3VzZWwgKi9cclxuICBwdWJsaWMgcmVzZXQod2l0aE91dEFuaW1hdGlvbj86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHdpdGhPdXRBbmltYXRpb24gJiYgKHRoaXMud2l0aEFuaW0gPSBmYWxzZSk7XHJcbiAgICB0aGlzLmNhcm91c2VsQ3NzTm9kZS5pbm5lckhUTUwgPSAnJztcclxuICAgIHRoaXMubW92ZVRvKDApO1xyXG4gICAgdGhpcy5fY2Fyb3VzZWxQb2ludCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBzY29sbCB0aGUgY2Fyb3VzZWwgd2hlbiBwb2ludCBpcyBjbGlja2VkICovXHJcbiAgcHVibGljIG1vdmVUbyhzbGlkZTogbnVtYmVyLCB3aXRoT3V0QW5pbWF0aW9uPzogYm9vbGVhbikge1xyXG4gICAgLy8gc2xpZGUgPSBzbGlkZSAtIDE7XHJcbiAgICB3aXRoT3V0QW5pbWF0aW9uICYmICh0aGlzLndpdGhBbmltID0gZmFsc2UpO1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlUG9pbnQgIT09IHNsaWRlICYmIHNsaWRlIDwgdGhpcy5wb2ludEluZGV4KSB7XHJcbiAgICAgIGxldCBzbGlkZXJlbWFpbnM7XHJcbiAgICAgIGNvbnN0IGJ0bnMgPSB0aGlzLmN1cnJlbnRTbGlkZSA8IHNsaWRlID8gMSA6IDA7XHJcblxyXG4gICAgICBzd2l0Y2ggKHNsaWRlKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgICAgIHNsaWRlcmVtYWlucyA9IHNsaWRlICogdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSB0aGlzLnBvaW50SW5kZXggLSAxOlxyXG4gICAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcclxuICAgICAgICAgIHNsaWRlcmVtYWlucyA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLml0ZW1zO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMCk7XHJcbiAgICAgICAgICBzbGlkZXJlbWFpbnMgPSBzbGlkZSAqIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbFR3byhidG5zLCBzbGlkZXJlbWFpbnMsIHRoaXMuc3BlZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKSB7XHJcbiAgICBsZXQgZGF0YVN0cmVhbTogT2JzZXJ2YWJsZTxhbnlbXT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5fZGF0YVNvdXJjZSkpIHtcclxuICAgICAgZGF0YVN0cmVhbSA9IG9mKHRoaXMuX2RhdGFTb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhU3RyZWFtKSB7XHJcbiAgICAgIHRoaXMuX2RhdGFTdWJzY3JpcHRpb24gPSBkYXRhU3RyZWFtLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICB0aGlzLnJlbmRlck5vZGVDaGFuZ2VzKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuaXNMYXN0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29ic2VydmVyUmVuZGVyJywgISF0aGlzLmNhcm91c2VsKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCk7XHJcbiAgICAgICAgLy8gdGhpcy5fc3RvcmVDYXJvdXNlbERhdGEoKTtcclxuICAgICAgICAvLyB0aGlzLl9idXR0b25Db250cm9sKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5wdXRWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy50eXBlID0gdGhpcy5pbnB1dHMuZ3JpZC5hbGwgIT09IDAgPyAnZml4ZWQnIDogJ3Jlc3BvbnNpdmUnO1xyXG4gICAgdGhpcy5sb29wID0gdGhpcy5pbnB1dHMubG9vcCB8fCBmYWxzZTtcclxuICAgIHRoaXMuaW5wdXRzLmVhc2luZyA9IHRoaXMuaW5wdXRzLmVhc2luZyB8fCAnY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknO1xyXG4gICAgdGhpcy50b3VjaC5hY3RpdmUgPSB0aGlzLmlucHV0cy50b3VjaCB8fCBmYWxzZTtcclxuICAgIHRoaXMuUlRMID0gdGhpcy5pbnB1dHMuUlRMID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IHRoaXMuaW5wdXRzLmludGVydmFsIHx8IG51bGw7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID1cclxuICAgICAgdHlwZW9mIHRoaXMuaW5wdXRzLnZlbG9jaXR5ID09PSAnbnVtYmVyJ1xyXG4gICAgICAgID8gdGhpcy5pbnB1dHMudmVsb2NpdHlcclxuICAgICAgICA6IHRoaXMudmVsb2NpdHk7XHJcblxyXG4gICAgaWYgKHRoaXMuaW5wdXRzLnZlcnRpY2FsICYmIHRoaXMuaW5wdXRzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy52ZXJ0aWNhbC5lbmFibGVkID0gdGhpcy5pbnB1dHMudmVydGljYWwuZW5hYmxlZDtcclxuICAgICAgdGhpcy52ZXJ0aWNhbC5oZWlnaHQgPSB0aGlzLmlucHV0cy52ZXJ0aWNhbC5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpcmVjdGlvblN5bSA9IHRoaXMuUlRMID8gJycgOiAnLSc7XHJcbiAgICB0aGlzLnBvaW50ID1cclxuICAgICAgdGhpcy5pbnB1dHMucG9pbnQgJiYgdHlwZW9mIHRoaXMuaW5wdXRzLnBvaW50LnZpc2libGUgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgPyB0aGlzLmlucHV0cy5wb2ludC52aXNpYmxlXHJcbiAgICAgICAgOiB0cnVlO1xyXG5cclxuICAgIHRoaXMuX2Nhcm91c2VsU2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb25SZXNpemluZyhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5vblJlc2l6ZSk7XHJcbiAgICB0aGlzLm9uUmVzaXplID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmRldmljZVdpZHRoICE9PSBldmVudC50YXJnZXQub3V0ZXJXaWR0aCkge1xyXG4gICAgICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCBgYCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcmVDYXJvdXNlbERhdGEoKTtcclxuICAgICAgfVxyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcblxyXG4gIC8qKiBHZXQgVG91Y2ggaW5wdXQgKi9cclxuICBwcml2YXRlIF90b3VjaCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0cy50b3VjaCkge1xyXG4gICAgICBjb25zdCBoYW1tZXJ0aW1lID0gbmV3IEhhbW1lcih0aGlzLnRvdWNoQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICBoYW1tZXJ0aW1lLmdldCgncGFuJykuc2V0KHtkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fSE9SSVpPTlRBTH0pO1xyXG5cclxuICAgICAgaGFtbWVydGltZS5vbigncGFuc3RhcnQnLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxXaWR0aCA9IHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICBjb25zb2xlLmxvZygncGFuc3RhcnQnKTtcclxuICAgICAgICB0aGlzLnRvdWNoVHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm1bdGhpcy5kZXZpY2VUeXBlXTtcclxuICAgICAgICB0aGlzLmRleFZhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5fc2V0U3R5bGUodGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsICcnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW51cCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5sZWZ0JywgZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGhhbW1lcnRpbWUub24oJ3BhbmRvd24nLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fdG91Y2hIYW5kbGluZygncGFucmlnaHQnLCBldik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFubGVmdCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygncGFubGVmdCcpO1xyXG4gICAgICAgICAgdGhpcy5fdG91Y2hIYW5kbGluZygncGFubGVmdCcsIGV2KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5yaWdodCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygncGFucmlnaHQnKTtcclxuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbnJpZ2h0JywgZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGhhbW1lcnRpbWUub24oJ3BhbmVuZCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3BhbmVuZCcpO1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhldi52ZWxvY2l0eSkgPj0gdGhpcy52ZWxvY2l0eSkge1xyXG4gICAgICAgICAgdGhpcy50b3VjaC52ZWxvY2l0eSA9IGV2LnZlbG9jaXR5O1xyXG4gICAgICAgICAgbGV0IGRpcmVjID0gMDtcclxuICAgICAgICAgIGlmICghdGhpcy5SVEwpIHtcclxuICAgICAgICAgICAgZGlyZWMgPSB0aGlzLnRvdWNoLnN3aXBlID09PSAncGFucmlnaHQnID8gMCA6IDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXJlYyA9IHRoaXMudG91Y2guc3dpcGUgPT09ICdwYW5yaWdodCcgPyAxIDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKGRpcmVjKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5kZXhWYWwgPSAwO1xyXG4gICAgICAgICAgdGhpcy5fc2V0U3R5bGUoXHJcbiAgICAgICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICAgJ3RyYW5zaXRpb24nLFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtIDMyNG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBoYW1tZXJ0aW1lLm9uKCdoYW1tZXIuaW5wdXQnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAvLyBhbGxvdyBuZXN0ZWQgdG91Y2ggZXZlbnRzIHRvIG5vIHByb3BhZ2F0ZSwgdGhpcyBtYXkgaGF2ZSBvdGhlciBzaWRlIGFmZmVjdHMgYnV0IHdvcmtzIGZvciBub3cuXHJcbiAgICAgICAgLy8gVE9ETzogSXQgaXMgcHJvYmFibHkgYmV0dGVyIHRvIGNoZWNrIHRoZSBzb3VyY2UgZWxlbWVudCBvZiB0aGUgZXZlbnQgYW5kIG9ubHkgYXBwbHkgdGhlIGhhbmRsZSB0byB0aGUgY29ycmVjdCBjYXJvdXNlbFxyXG4gICAgICAgIGV2LnNyY0V2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBoYW5kbGUgdG91Y2ggaW5wdXQgKi9cclxuICBwcml2YXRlIF90b3VjaEhhbmRsaW5nKGU6IHN0cmluZywgZXY6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gdmVydGljYWwgdG91Y2ggZXZlbnRzIHNlZW0gdG8gY2F1c2UgdG8gcGFuc3RhcnQgZXZlbnQgd2l0aCBhbiBvZGQgZGVsdGFcclxuICAgIC8vIGFuZCBhIGNlbnRlciBvZiB7eDowLHk6MH0gc28gdGhpcyB3aWxsIGlnbm9yZSB0aGVtXHJcbiAgICBpZiAoZXYuY2VudGVyLnggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ID0gTWF0aC5hYnModGhpcy52ZXJ0aWNhbC5lbmFibGVkID8gZXYuZGVsdGFZIDogZXYuZGVsdGFYKTtcclxuICAgIGxldCB2YWx0ID0gZXYgLSB0aGlzLmRleFZhbDtcclxuICAgIHZhbHQgPVxyXG4gICAgICB0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJ1xyXG4gICAgICAgID8gKE1hdGguYWJzKGV2IC0gdGhpcy5kZXhWYWwpIC9cclxuICAgICAgICAodGhpcy52ZXJ0aWNhbC5lbmFibGVkXHJcbiAgICAgICAgICA/IHRoaXMudmVydGljYWwuaGVpZ2h0XHJcbiAgICAgICAgICA6IHRoaXMuY2Fyb3VzZWxXaWR0aCkpICpcclxuICAgICAgICAxMDBcclxuICAgICAgICA6IHZhbHQ7XHJcbiAgICB0aGlzLmRleFZhbCA9IGV2O1xyXG4gICAgdGhpcy50b3VjaC5zd2lwZSA9IGU7XHJcbiAgICB0aGlzLl9zZXRUb3VjaFRyYW5zZnJvbShlLCB2YWx0KTtcclxuICAgIHRoaXMuX3NldFRyYW5zZm9ybUZyb21Ub3VjaCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0VG91Y2hUcmFuc2Zyb20oZTogc3RyaW5nLCB2YWx0OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMuUlRMID8gJ3BhbnJpZ2h0JyA6ICdwYW5sZWZ0JztcclxuICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPVxyXG4gICAgICBlID09PSBjb25kaXRpb24gPyB2YWx0ICsgdGhpcy50b3VjaFRyYW5zZm9ybSA6IHRoaXMudG91Y2hUcmFuc2Zvcm0gLSB2YWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0VHJhbnNmb3JtRnJvbVRvdWNoKCkge1xyXG4gICAgaWYgKHRoaXMudG91Y2hUcmFuc2Zvcm0gPCAwKSB7XHJcbiAgICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPSAwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnID8gJyUnIDogJ3B4JztcclxuICAgIHRoaXMuX3NldFN0eWxlKFxyXG4gICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICB0aGlzLnZlcnRpY2FsLmVuYWJsZWRcclxuICAgICAgICA/IGB0cmFuc2xhdGUzZCgwLCAke3RoaXMuZGlyZWN0aW9uU3ltfSR7dGhpcy50b3VjaFRyYW5zZm9ybX0ke3R5cGV9LCAwKWBcclxuICAgICAgICA6IGB0cmFuc2xhdGUzZCgke3RoaXMuZGlyZWN0aW9uU3ltfSR7dGhpcy50b3VjaFRyYW5zZm9ybX0ke3R5cGV9LCAwLCAwKWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiogdGhpcyBmbiB1c2VkIHRvIGRpc2FibGUgdGhlIGludGVydmFsIHdoZW4gaXQgaXMgbm90IG9uIHRoZSB2aWV3cG9ydCAqL1xyXG4gIHByaXZhdGUgX29uV2luZG93U2Nyb2xsaW5nKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdG9wID0gdGhpcy5jYXJvdXNlbC5vZmZzZXRUb3A7XHJcbiAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICBjb25zdCBoZWlnaHR0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgY29uc3QgY2Fyb3VzZWxIZWlnaHQgPSB0aGlzLmNhcm91c2VsLm9mZnNldEhlaWdodDtcclxuICAgIGNvbnN0IGlzQ2Fyb3VzZWxPblNjcmVlbiA9XHJcbiAgICAgIHRvcCA8PSBzY3JvbGxZICsgaGVpZ2h0dCAtIGNhcm91c2VsSGVpZ2h0IC8gNCAmJlxyXG4gICAgICB0b3AgKyBjYXJvdXNlbEhlaWdodCAvIDIgPj0gc2Nyb2xsWTtcclxuXHJcbiAgICBpZiAoaXNDYXJvdXNlbE9uU2NyZWVuKSB7XHJcbiAgICAgIC8vIHRoaXMuX2Nhcm91c2VsSW50ZXJ2YWxFdmVudCgwKTtcclxuICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJC5uZXh0KDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJC5uZXh0KDApO1xyXG4gICAgICAvLyB0aGlzLl9jYXJvdXNlbEludGVydmFsRXZlbnQoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogc3RvcmUgZGF0YSBiYXNlZCBvbiB3aWR0aCBvZiB0aGUgc2NyZWVuIGZvciB0aGUgY2Fyb3VzZWwgKi9cclxuICBwcml2YXRlIF9zdG9yZUNhcm91c2VsRGF0YSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGV2aWNlV2lkdGggPSBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpXHJcbiAgICAgID8gd2luZG93LmlubmVyV2lkdGhcclxuICAgICAgOiAxMjAwO1xyXG5cclxuICAgIHRoaXMuY2Fyb3VzZWxXaWR0aCA9IHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xyXG4gICAgICB0aGlzLmRldmljZVR5cGUgPVxyXG4gICAgICAgIHRoaXMuZGV2aWNlV2lkdGggPj0gMTIwMFxyXG4gICAgICAgICAgPyAnbGcnXHJcbiAgICAgICAgICA6IHRoaXMuZGV2aWNlV2lkdGggPj0gOTkyXHJcbiAgICAgICAgICA/ICdtZCdcclxuICAgICAgICAgIDogdGhpcy5kZXZpY2VXaWR0aCA+PSA3NjhcclxuICAgICAgICAgICAgPyAnc20nXHJcbiAgICAgICAgICAgIDogJ3hzJztcclxuXHJcbiAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmlucHV0cy5ncmlkW3RoaXMuZGV2aWNlVHlwZV07XHJcbiAgICAgIHRoaXMuaXRlbVdpZHRoID0gdGhpcy5jYXJvdXNlbFdpZHRoIC8gdGhpcy5pdGVtcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBNYXRoLmNlaWwodGhpcy5jYXJvdXNlbFdpZHRoIC8gdGhpcy5pbnB1dHMuZ3JpZC5hbGwpO1xyXG4gICAgICB0aGlzLml0ZW1XaWR0aCA9IHRoaXMuaW5wdXRzLmdyaWQuYWxsO1xyXG4gICAgICB0aGlzLmRldmljZVR5cGUgPSAnYWxsJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNsaWRlSXRlbXMgPSArKHRoaXMuaW5wdXRzLnNsaWRlIDwgdGhpcy5pdGVtc1xyXG4gICAgICA/IHRoaXMuaW5wdXRzLnNsaWRlXHJcbiAgICAgIDogdGhpcy5pdGVtcyk7XHJcbiAgICB0aGlzLmxvYWQgPVxyXG4gICAgICB0aGlzLmlucHV0cy5sb2FkID49IHRoaXMuc2xpZGVJdGVtcyA/IHRoaXMuaW5wdXRzLmxvYWQgOiB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICB0aGlzLnNwZWVkID1cclxuICAgICAgdGhpcy5pbnB1dHMuc3BlZWQgJiYgdGhpcy5pbnB1dHMuc3BlZWQgPiAtMSA/IHRoaXMuaW5wdXRzLnNwZWVkIDogNDAwO1xyXG4gICAgdGhpcy5fY2Fyb3VzZWxQb2ludCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEluaXQgY2Fyb3VzZWwgcG9pbnQgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFBvaW50KCk6IHZvaWQge1xyXG4gICAgLy8gZGVidWdnZXI7XHJcbiAgICAvLyBpZiAodGhpcy51c2VyRGF0YS5wb2ludC52aXNpYmxlID09PSB0cnVlKSB7XHJcbiAgICBjb25zdCBOb3MgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gKHRoaXMuaXRlbXMgLSB0aGlzLnNsaWRlSXRlbXMpO1xyXG4gICAgdGhpcy5wb2ludEluZGV4ID0gTWF0aC5jZWlsKE5vcyAvIHRoaXMuc2xpZGVJdGVtcyk7XHJcbiAgICBjb25zdCBwb2ludGVycyA9IFtdO1xyXG5cclxuICAgIGlmICh0aGlzLnBvaW50SW5kZXggPiAxIHx8ICF0aGlzLmlucHV0cy5wb2ludC5oaWRlT25TaW5nbGVTbGlkZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnRJbmRleDsgaSsrKSB7XHJcbiAgICAgICAgcG9pbnRlcnMucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5wb2ludE51bWJlcnMgPSBwb2ludGVycztcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9pbnROdW1iZXJzKTtcclxuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk7XHJcbiAgICBpZiAodGhpcy5wb2ludEluZGV4IDw9IDEpIHtcclxuICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiAhdGhpcy5sb29wKSB7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLl9idXR0b25Db250cm9sKCk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICAvKiogY2hhbmdlIHRoZSBhY3RpdmUgcG9pbnQgaW4gY2Fyb3VzZWwgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFBvaW50QWN0aXZlcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGkgPSBNYXRoLmNlaWwodGhpcy5jdXJyZW50U2xpZGUgLyB0aGlzLnNsaWRlSXRlbXMpO1xyXG4gICAgdGhpcy5hY3RpdmVQb2ludCA9IGk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKiogc2V0IHRoZSBzdHlsZSBvZiB0aGUgY2Fyb3VzZWwgYmFzZWQgdGhlIGlucHV0cyBkYXRhICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxTaXplKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b2tlbiA9IHRoaXMuX2dlbmVyYXRlSUQoKTtcclxuICAgIGxldCBkaXNtID0gJyc7XHJcbiAgICB0aGlzLnN0eWxlaWQgPSBgLiR7XHJcbiAgICAgIHRoaXMudG9rZW5cclxuICAgICAgfSA+IC5uZ3VjYXJvdXNlbCA+IC5uZ3UtdG91Y2gtY29udGFpbmVyID4gLm5ndWNhcm91c2VsLWl0ZW1zYDtcclxuXHJcbiAgICBpZiAodGhpcy5pbnB1dHMuY3VzdG9tID09PSAnYmFubmVyJykge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNhcm91c2VsLCAnYmFubmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5wdXRzLmFuaW1hdGlvbiA9PT0gJ2xhenknKSB7XHJcbiAgICAgIGRpc20gKz0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHt0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjZzIGVhc2U7fWA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGl0ZW1TdHlsZSA9ICcnO1xyXG4gICAgaWYgKHRoaXMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfeHMgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXHJcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLnhzfXB4fWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9zbSA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcclxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQuc219cHh9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX21kID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxyXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC5tZH1weH1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfbGcgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXHJcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLmxnfXB4fWA7XHJcblxyXG4gICAgICBpdGVtU3R5bGUgPSBgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpeyR7aXRlbVdpZHRoX3hzfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7JHtpdGVtV2lkdGhfc219fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXske2l0ZW1XaWR0aF9tZH19XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXske2l0ZW1XaWR0aF9sZ319YDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScpIHtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX3hzID1cclxuICAgICAgICB0aGlzLmlucHV0cy50eXBlID09PSAnbW9iaWxlJ1xyXG4gICAgICAgICAgPyBgJHt0aGlzLnN0eWxlaWR9IC5pdGVtIHtmbGV4OiAwIDAgJHs5NSAvXHJcbiAgICAgICAgICArdGhpcy5pbnB1dHMuZ3JpZC54c30lOyB3aWR0aDogJHs5NSAvICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7fWBcclxuICAgICAgICAgIDogYCR7dGhpcy5zdHlsZWlkfSAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cclxuICAgICAgICAgICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7IHdpZHRoOiAkezEwMCAvICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7fWA7XHJcblxyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfc20gPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXHJcbiAgICAgICt0aGlzLmlucHV0cy5ncmlkLnNtfSU7IHdpZHRoOiAkezEwMCAvICt0aGlzLmlucHV0cy5ncmlkLnNtfSV9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX21kID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtmbGV4OiAwIDAgJHsxMDAgL1xyXG4gICAgICArdGhpcy5pbnB1dHMuZ3JpZC5tZH0lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC5tZH0lfWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9sZyA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cclxuICAgICAgK3RoaXMuaW5wdXRzLmdyaWQubGd9JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQubGd9JX1gO1xyXG5cclxuICAgICAgaXRlbVN0eWxlID0gYEBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXske2l0ZW1XaWR0aF94c319XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpeyR7aXRlbVdpZHRoX3NtfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7JHtpdGVtV2lkdGhfbWR9fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7JHtpdGVtV2lkdGhfbGd9fWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtU3R5bGUgPSBgJHt0aGlzLnN0eWxlaWR9IC5pdGVtIHtmbGV4OiAwIDAgJHtcclxuICAgICAgICB0aGlzLmlucHV0cy5ncmlkLmFsbFxyXG4gICAgICAgIH1weDsgd2lkdGg6ICR7dGhpcy5pbnB1dHMuZ3JpZC5hbGx9cHg7fWA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgdGhpcy50b2tlbik7XHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxyXG4gICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAnbmd1dmVydGljYWwnXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgIGAke3RoaXMudmVydGljYWwuaGVpZ2h0fXB4YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG4gICAgdGhpcy5SVEwgJiZcclxuICAgICF0aGlzLnZlcnRpY2FsLmVuYWJsZWQgJiZcclxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuY2Fyb3VzZWwsICduZ3VydGwnKTtcclxuICAgIHRoaXMuX2NyZWF0ZVN0eWxlRWxlbShgJHtkaXNtfSAke2l0ZW1TdHlsZX1gKTtcclxuICAgIHRoaXMuX3N0b3JlQ2Fyb3VzZWxEYXRhKCk7XHJcbiAgfVxyXG5cclxuICAvKiogbG9naWMgdG8gc2Nyb2xsIHRoZSBjYXJvdXNlbCBzdGVwIDEgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFNjcm9sbE9uZShCdG46IG51bWJlcik6IHZvaWQge1xyXG4gICAgbGV0IGl0ZW1TcGVlZCA9IHRoaXMuc3BlZWQ7XHJcbiAgICBsZXQgdHJhbnNsYXRlWHZhbCxcclxuICAgICAgY3VycmVudFNsaWRlID0gMDtcclxuICAgIGNvbnN0IHRvdWNoTW92ZSA9IE1hdGguY2VpbCh0aGlzLmRleFZhbCAvIHRoaXMuaXRlbVdpZHRoKTtcclxuICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICcnKTtcclxuXHJcbiAgICBpZiAodGhpcy5wb2ludEluZGV4ID09PSAxKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAoQnRuID09PSAwICYmICgoIXRoaXMubG9vcCAmJiAhdGhpcy5pc0ZpcnN0KSB8fCB0aGlzLmxvb3ApKSB7XHJcbiAgICAgIGNvbnN0IHNsaWRlID0gdGhpcy5zbGlkZUl0ZW1zICogdGhpcy5wb2ludEluZGV4O1xyXG5cclxuICAgICAgY29uc3QgY3VycmVudFNsaWRlRCA9IHRoaXMuY3VycmVudFNsaWRlIC0gdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICBjb25zdCBNb3ZlU2xpZGUgPSBjdXJyZW50U2xpZGVEICsgdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUgPT09IDApIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5pdGVtcztcclxuICAgICAgICBpdGVtU3BlZWQgPSA0MDA7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlSXRlbXMgPj0gTW92ZVNsaWRlKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gdHJhbnNsYXRlWHZhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICAgIGlmICh0b3VjaE1vdmUgPiB0aGlzLnNsaWRlSXRlbXMpIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlIC0gdG91Y2hNb3ZlO1xyXG4gICAgICAgICAgaXRlbVNwZWVkID0gMjAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZSAtIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxUd28oQnRuLCBjdXJyZW50U2xpZGUsIGl0ZW1TcGVlZCk7XHJcbiAgICB9IGVsc2UgaWYgKEJ0biA9PT0gMSAmJiAoKCF0aGlzLmxvb3AgJiYgIXRoaXMuaXNMYXN0KSB8fCB0aGlzLmxvb3ApKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIDw9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLml0ZW1zICsgdGhpcy5zbGlkZUl0ZW1zICYmXHJcbiAgICAgICAgIXRoaXMuaXNMYXN0XHJcbiAgICAgICkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLml0ZW1zO1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0xhc3QpIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSB0cmFuc2xhdGVYdmFsID0gMDtcclxuICAgICAgICBpdGVtU3BlZWQgPSA0MDA7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICAgIGlmICh0b3VjaE1vdmUgPiB0aGlzLnNsaWRlSXRlbXMpIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5zbGlkZUl0ZW1zICsgKHRvdWNoTW92ZSAtIHRoaXMuc2xpZGVJdGVtcyk7XHJcbiAgICAgICAgICBpdGVtU3BlZWQgPSAyMDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbFR3byhCdG4sIGN1cnJlbnRTbGlkZSwgaXRlbVNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjdWJpYy1iZXppZXIoMC4xNSwgMS4wNCwgMC41NCwgMS4xMylcclxuICB9XHJcblxyXG4gIC8qKiBsb2dpYyB0byBzY3JvbGwgdGhlIGNhcm91c2VsIHN0ZXAgMiAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsU2Nyb2xsVHdvKFxyXG4gICAgQnRuOiBudW1iZXIsXHJcbiAgICBjdXJyZW50U2xpZGU6IG51bWJlcixcclxuICAgIGl0ZW1TcGVlZDogbnVtYmVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cclxuXHJcbiAgICBpZiAodGhpcy5kZXhWYWwgIT09IDApIHtcclxuICAgICAgY29uc3QgdmFsID0gTWF0aC5hYnModGhpcy50b3VjaC52ZWxvY2l0eSk7XHJcbiAgICAgIGxldCBzb210ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAodGhpcy5kZXhWYWwgLyB2YWwgLyB0aGlzLmRleFZhbCkgKiAodGhpcy5kZXZpY2VXaWR0aCAtIHRoaXMuZGV4VmFsKVxyXG4gICAgICApO1xyXG4gICAgICBzb210ID0gc29tdCA+IGl0ZW1TcGVlZCA/IGl0ZW1TcGVlZCA6IHNvbXQ7XHJcbiAgICAgIGl0ZW1TcGVlZCA9IHNvbXQgPCAyMDAgPyAyMDAgOiBzb210O1xyXG4gICAgICB0aGlzLmRleFZhbCA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy53aXRoQW5pbSkge1xyXG4gICAgICB0aGlzLl9zZXRTdHlsZShcclxuICAgICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ3RyYW5zaXRpb24nLFxyXG4gICAgICAgIGB0cmFuc2Zvcm0gJHtpdGVtU3BlZWR9bXMgJHt0aGlzLmlucHV0cy5lYXNpbmd9YFxyXG4gICAgICApO1xyXG4gICAgICAvLyB0aGlzLmlucHV0cy5hbmltYXRpb24gJiZcclxuICAgICAgLy8gICB0aGlzLl9jYXJvdXNlbEFuaW1hdG9yKFxyXG4gICAgICAvLyAgICAgQnRuLFxyXG4gICAgICAvLyAgICAgY3VycmVudFNsaWRlICsgMSxcclxuICAgICAgLy8gICAgIGN1cnJlbnRTbGlkZSArIHRoaXMuaXRlbXMsXHJcbiAgICAgIC8vICAgICBpdGVtU3BlZWQsXHJcbiAgICAgIC8vICAgICBNYXRoLmFicyh0aGlzLmN1cnJlbnRTbGlkZSAtIGN1cnJlbnRTbGlkZSlcclxuICAgICAgLy8gICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2V0U3R5bGUodGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsIGBgKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICB0aGlzLml0ZW1MZW5ndGggPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoO1xyXG4gICAgdGhpcy5fdHJhbnNmb3JtU3R5bGUoY3VycmVudFNsaWRlKTtcclxuICAgIHRoaXMuY3VycmVudFNsaWRlID0gY3VycmVudFNsaWRlO1xyXG4gICAgdGhpcy5vbk1vdmUuZW1pdCh0aGlzKTtcclxuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk7XHJcbiAgICB0aGlzLl9jYXJvdXNlbExvYWRUcmlnZ2VyKCk7XHJcbiAgICB0aGlzLl9idXR0b25Db250cm9sKCk7XHJcbiAgICB0aGlzLndpdGhBbmltID0gdHJ1ZTtcclxuICAgIC8vIGlmIChjdXJyZW50U2xpZGUgPT09IDEyKSB7XHJcbiAgICAvLyAgIHRoaXMuX3N3aXRjaERhdGFTb3VyY2UodGhpcy5kYXRhU291cmNlKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIC8qKiBib29sZWFuIGZ1bmN0aW9uIGZvciBtYWtpbmcgaXNGaXJzdCBhbmQgaXNMYXN0ICovXHJcbiAgcHJpdmF0ZSBfYnRuQm9vbGVhbihmaXJzdDogbnVtYmVyLCBsYXN0OiBudW1iZXIpIHtcclxuICAgIHRoaXMuaXNGaXJzdCA9ICEhZmlyc3Q7XHJcbiAgICB0aGlzLmlzTGFzdCA9ICEhbGFzdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybVN0cmluZyhncmlkOiBzdHJpbmcsIHNsaWRlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IGNvbGxlY3QgPSAnJztcclxuICAgIGNvbGxlY3QgKz0gYCR7dGhpcy5zdHlsZWlkfSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoYDtcclxuXHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtW2dyaWRdID1cclxuICAgICAgICAodGhpcy52ZXJ0aWNhbC5oZWlnaHQgLyB0aGlzLmlucHV0cy5ncmlkW2dyaWRdKSAqIHNsaWRlO1xyXG4gICAgICBjb2xsZWN0ICs9IGAwLCAtJHt0aGlzLnRyYW5zZm9ybVtncmlkXX1weCwgMGA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybVtncmlkXSA9ICgxMDAgLyB0aGlzLmlucHV0cy5ncmlkW2dyaWRdKSAqIHNsaWRlO1xyXG4gICAgICBjb2xsZWN0ICs9IGAke3RoaXMuZGlyZWN0aW9uU3ltfSR7dGhpcy50cmFuc2Zvcm1bZ3JpZF19JSwgMCwgMGA7XHJcbiAgICB9XHJcbiAgICBjb2xsZWN0ICs9IGApOyB9YDtcclxuICAgIHJldHVybiBjb2xsZWN0O1xyXG4gIH1cclxuXHJcbiAgLyoqIHNldCB0aGUgdHJhbnNmb3JtIHN0eWxlIHRvIHNjcm9sbCB0aGUgY2Fyb3VzZWwgICovXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtU3R5bGUoc2xpZGU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgbGV0IHNsaWRlQ3NzID0gJyc7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScpIHtcclxuICAgICAgc2xpZGVDc3MgPSBgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoXHJcbiAgICAgICAgJ3hzJyxcclxuICAgICAgICBzbGlkZVxyXG4gICAgICApfX1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoJ3NtJywgc2xpZGUpfSB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKCdtZCcsIHNsaWRlKX0gfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoJ2xnJywgc2xpZGUpfSB9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLmFsbCA9IHRoaXMuaW5wdXRzLmdyaWQuYWxsICogc2xpZGU7XHJcbiAgICAgIHNsaWRlQ3NzID0gYCR7dGhpcy5zdHlsZWlkfSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvblN5bVxyXG4gICAgICAgIH0ke3RoaXMudHJhbnNmb3JtLmFsbH1weCwgMCwgMCk7YDtcclxuICAgIH1cclxuICAgIHRoaXMuY2Fyb3VzZWxDc3NOb2RlLmlubmVySFRNTCA9IHNsaWRlQ3NzO1xyXG4gIH1cclxuXHJcbiAgLyoqIHRoaXMgd2lsbCB0cmlnZ2VyIHRoZSBjYXJvdXNlbCB0byBsb2FkIHRoZSBpdGVtcyAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsTG9hZFRyaWdnZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuaW5wdXRzLmxvYWQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLmxvYWQgPD0gdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLml0ZW1zICYmXHJcbiAgICAgIHRoaXMuY2Fyb3VzZWxMb2FkLmVtaXQodGhpcy5jdXJyZW50U2xpZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGdlbmVyYXRlIENsYXNzIGZvciBlYWNoIGNhcm91c2VsIHRvIHNldCBzcGVjaWZpYyBzdHlsZSAqL1xyXG4gIHByaXZhdGUgX2dlbmVyYXRlSUQoKTogc3RyaW5nIHtcclxuICAgIGxldCB0ZXh0ID0gJyc7XHJcbiAgICBjb25zdCBwb3NzaWJsZSA9XHJcbiAgICAgICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYG5ndWNhcm91c2VsJHt0ZXh0fWA7XHJcbiAgfVxyXG5cclxuICAvKiogaGFuZGxlIHRoZSBhdXRvIHNsaWRlICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxJbnRlcnZhbCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwgJiYgdGhpcy5sb29wKSB7XHJcbiAgICAgIC8vIHRoaXMubGlzdGVuZXI0ID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKGNvbnRhaW5lciwgJ3RvdWNoc3RhcnQnLCAoKSA9PiB7XHJcbiAgICAgIC8vICAgdGhpcy5fY2Fyb3VzZWxJbnRlcnZhbEV2ZW50KDEpO1xyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICAgIC8vIHRoaXMubGlzdGVuZXI1ID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKGNvbnRhaW5lciwgJ3RvdWNoZW5kJywgKCkgPT4ge1xyXG4gICAgICAvLyAgIHRoaXMuX2Nhcm91c2VsSW50ZXJ2YWxFdmVudCgwKTtcclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAvLyB0aGlzLmxpc3RlbmVyNiA9IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbihjb250YWluZXIsICdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAvLyAgIHRoaXMuX2Nhcm91c2VsSW50ZXJ2YWxFdmVudCgxKTtcclxuICAgICAgLy8gICB0aGlzLmlzSG92ZXJlZCA9IHRydWU7XHJcbiAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgLy8gdGhpcy5saXN0ZW5lcjcgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oY29udGFpbmVyLCAnbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgLy8gICB0aGlzLl9jYXJvdXNlbEludGVydmFsRXZlbnQoMCk7XHJcbiAgICAgIC8vICAgdGhpcy5pc0hvdmVyZWQgPSBmYWxzZTtcclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgICB0aGlzLmxpc3RlbmVyOCA9IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5vblNjcm9sbGluZyk7XHJcbiAgICAgICAgdGhpcy5vblNjcm9sbGluZyA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fb25XaW5kb3dTY3JvbGxpbmcoKTtcclxuICAgICAgICB9LCA2MDApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHBsYXkkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ21vdXNlbGVhdmUnKS5waXBlKG1hcFRvKDEpKTtcclxuICAgICAgY29uc3QgcGF1c2UkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ21vdXNlZW50ZXInKS5waXBlKG1hcFRvKDApKTtcclxuXHJcbiAgICAgIGNvbnN0IHRvdWNoUGxheSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAndG91Y2hzdGFydCcpLnBpcGUobWFwVG8oMSkpO1xyXG4gICAgICBjb25zdCB0b3VjaFBhdXNlJCA9IGZyb21FdmVudChjb250YWluZXIsICd0b3VjaGVuZCcpLnBpcGUobWFwVG8oMCkpO1xyXG5cclxuICAgICAgY29uc3QgaW50ZXJ2YWwkID0gaW50ZXJ2YWwodGhpcy5pbnB1dHMuaW50ZXJ2YWwudGltaW5nKS5waXBlKG1hcFRvKDEpKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vIHRoaXMuY2Fyb3VzZWxJbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAhdGhpcy5wYXVzZUNhcm91c2VsICYmIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKDEpO1xyXG4gICAgICAgIC8vIH0sIHRoaXMuaW5wdXRzLmludGVydmFsLnRpbWluZyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxJbnQgPSBtZXJnZShcclxuICAgICAgICAgIHBsYXkkLFxyXG4gICAgICAgICAgdG91Y2hQbGF5JCxcclxuICAgICAgICAgIHBhdXNlJCxcclxuICAgICAgICAgIHRvdWNoUGF1c2UkLFxyXG4gICAgICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJFxyXG4gICAgICAgIClcclxuICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBzdGFydFdpdGgoMSksXHJcbiAgICAgICAgICAgIHN3aXRjaE1hcCh2YWwgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNIb3ZlcmVkID0gIXZhbDtcclxuICAgICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgICAgICByZXR1cm4gdmFsID8gaW50ZXJ2YWwkIDogZW1wdHkoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoMSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSwgdGhpcy5pbnRlcnZhbC5pbml0aWFsRGVsYXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIHBhdXNlIGludGVydmFsIGZvciBzcGVjaWZpYyB0aW1lICovXHJcbiAgLy8gcHJpdmF0ZSBfY2Fyb3VzZWxJbnRlcnZhbEV2ZW50KGV2OiBudW1iZXIpOiB2b2lkIHtcclxuICAvLyAgIHRoaXMuZXZ0VmFsdWUgPSBldjtcclxuICAvLyAgIGlmICh0aGlzLmV2dFZhbHVlID09PSAwKSB7XHJcbiAgLy8gICAgIGNsZWFyVGltZW91dCh0aGlzLnBhdXNlSW50ZXJ2YWwpO1xyXG4gIC8vICAgICB0aGlzLnBhdXNlSW50ZXJ2YWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAvLyAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cclxuICAvLyAgICAgICB0aGlzLmV2dFZhbHVlID09PSAwICYmICh0aGlzLnBhdXNlQ2Fyb3VzZWwgPSBmYWxzZSk7XHJcbiAgLy8gICAgIH0sIHRoaXMuaW5wdXRzLmludGVydmFsKTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIHRoaXMucGF1c2VDYXJvdXNlbCA9IHRydWU7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICAvKiogYW5pbWF0ZSB0aGUgY2Fyb3VzZWwgaXRlbXMgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbEFuaW1hdG9yKFxyXG4gICAgZGlyZWN0aW9uOiBudW1iZXIsXHJcbiAgICBzdGFydDogbnVtYmVyLFxyXG4gICAgZW5kOiBudW1iZXIsXHJcbiAgICBzcGVlZDogbnVtYmVyLFxyXG4gICAgbGVuZ3RoOiBudW1iZXJcclxuICApOiB2b2lkIHtcclxuICAgIGxldCB2YWwgPSBsZW5ndGggPCA1ID8gbGVuZ3RoIDogNTtcclxuICAgIHZhbCA9IHZhbCA9PT0gMSA/IDMgOiB2YWw7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9kZWZEaXJlYyk7XHJcbiAgICBjb25zdCBpdGVtTGlzdCA9IHRoaXMuX2RlZkRpcmVjLnRvQXJyYXkoKTtcclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydCAtIDE7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgIHZhbCA9IHZhbCAqIDI7XHJcbiAgICAgICAgaXRlbUxpc3RbaV0udGVtcGxhdGUuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ICYmXHJcbiAgICAgICAgdGhpcy5fc2V0U3R5bGUoXHJcbiAgICAgICAgICBpdGVtTGlzdFtpXS50ZW1wbGF0ZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgIGB0cmFuc2xhdGUzZCgke3ZhbH1weCwgMCwgMClgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IGVuZCAtIDE7IGkgPj0gc3RhcnQgLSAxOyBpLS0pIHtcclxuICAgICAgICB2YWwgPSB2YWwgKiAyO1xyXG4gICAgICAgIGl0ZW1MaXN0W2ldICYmXHJcbiAgICAgICAgdGhpcy5fc2V0U3R5bGUoXHJcbiAgICAgICAgICBpdGVtTGlzdFtpXSxcclxuICAgICAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgICAgYHRyYW5zbGF0ZTNkKC0ke3ZhbH1weCwgMCwgMClgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2RlZkRpcmVjLmZvckVhY2goZWxlbSA9PlxyXG4gICAgICAgIHRoaXMuX3NldFN0eWxlKFxyXG4gICAgICAgICAgZWxlbS50ZW1wbGF0ZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgIGB0cmFuc2xhdGUzZCgwLCAwLCAwKWBcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9LCBzcGVlZCAqIDAuNyk7XHJcbiAgfVxyXG5cclxuICAvKiogY29udHJvbCBidXR0b24gZm9yIGxvb3AgKi9cclxuICBwcml2YXRlIF9idXR0b25Db250cm9sKCk6IHZvaWQge1xyXG4gICAgbGV0IGFyciA9IFtdO1xyXG4gICAgaWYgKCF0aGlzLmxvb3AgfHwgKHRoaXMuaXNGaXJzdCAmJiB0aGlzLmlzTGFzdCkpIHtcclxuICAgICAgYXJyID0gW3RoaXMuaXNGaXJzdCA/ICdub25lJyA6ICdibG9jaycsIHRoaXMuaXNMYXN0ID8gJ25vbmUnIDogJ2Jsb2NrJ107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcnIgPSBbJ2Jsb2NrJywgJ2Jsb2NrJ107XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLl9zZXRTdHlsZSh0aGlzLnByZXYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCBhcnJbMF0pO1xyXG4gICAgLy8gdGhpcy5fc2V0U3R5bGUodGhpcy5uZXh0Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgYXJyWzFdKTtcclxuICB9XHJcblxyXG4gIC8qKiBTaG9ydCBmb3JtIGZvciBzZXRFbGVtZW50U3R5bGUgKi9cclxuICBwcml2YXRlIF9zZXRTdHlsZShlbDogYW55LCBwcm9wOiBhbnksIHZhbDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbCwgcHJvcCwgdmFsKTtcclxuICB9XHJcblxyXG4gIC8qKiBGb3IgZ2VuZXJhdGluZyBzdHlsZSB0YWcgKi9cclxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUVsZW0oZGF0YXM/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHN0eWxlSXRlbSA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICBpZiAoZGF0YXMpIHtcclxuICAgICAgY29uc3Qgc3R5bGVUZXh0ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlVGV4dChkYXRhcyk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHN0eWxlSXRlbSwgc3R5bGVUZXh0KTtcclxuICAgIH1cclxuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuY2Fyb3VzZWwsIHN0eWxlSXRlbSk7XHJcbiAgICByZXR1cm4gc3R5bGVJdGVtO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICduZ3UtaXRlbScsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VJdGVtQ29tcG9uZW50IHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLml0ZW0nKSBjbGFzc2VzID0gdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICduZ3UtdGlsZScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidGlsZVwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYDpob3N0e3BhZGRpbmc6MTBweDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnRpbGV7Ym94LXNoYWRvdzowIDJweCA1cHggMCByZ2JhKDAsMCwwLC4xNiksMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1VGlsZUNvbXBvbmVudCB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pdGVtJykgY2xhc3NlcyA9IHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBOZ3VDYXJvdXNlbFBvaW50RGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsT3V0bGV0XHJcbn0gZnJvbSAnLi9uZ3UtY2Fyb3VzZWwuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTmd1SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbmd1LWl0ZW0vbmd1LWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHtcclxuICBIYW1tZXJHZXN0dXJlQ29uZmlnLFxyXG4gIEhBTU1FUl9HRVNUVVJFX0NPTkZJR1xyXG59IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ3VDYXJvdXNlbCB9IGZyb20gJy4vbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3VUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3UtdGlsZS9uZ3UtdGlsZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOZ3VDYXJvdXNlbCxcclxuICAgIE5ndUl0ZW1Db21wb25lbnQsXHJcbiAgICBOZ3VUaWxlQ29tcG9uZW50LFxyXG4gICAgTmd1Q2Fyb3VzZWxQb2ludERpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxPdXRsZXRcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTmd1Q2Fyb3VzZWwsXHJcbiAgICBOZ3VJdGVtQ29tcG9uZW50LFxyXG4gICAgTmd1VGlsZUNvbXBvbmVudCxcclxuICAgIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsT3V0bGV0XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbImludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDRSxZQUNTLFFBQVEsSUFBSSxLQUFLLEVBQUUsRUFDbkIsV0FBVyxJQUFJLFFBQVEsRUFBRSxFQUN6QkEsYUFDQSxZQUFZLElBQUksU0FB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