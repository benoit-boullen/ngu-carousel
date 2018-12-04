import { Injectable, Directive, ElementRef, TemplateRef, ViewContainerRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, EventEmitter, Inject, Input, isDevMode, IterableDiffers, Output, PLATFORM_ID, Renderer2, ViewChild, HostBinding, NgModule } from '@angular/core';
import { empty, fromEvent, interval, merge, Observable, of, Subject } from 'rxjs';
import { mapTo, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

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
     * @param {?=} _carouselWidth
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
    constructor(touch = new Touch(), vertical = new Vertical(), interval$$1, transform = new NguTransfrom(), button, visibleItems, deviceType, type = 'fixed', token = '', items = 0, load = 0, _carouselWidth = 0, itemWidth = 0, slideItems = 0, itemWidthPer = 0, itemLength = 0, currentSlide = 0, easing = 'cubic-bezier(0, 0, 0.2, 1)', speed = 200, loop = false, dexVal = 0, touchTransform = 0, isEnd = false, isFirst = true, isLast = false, RTL = false, point = true, velocity = 1) {
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
        this._carouselWidth = _carouselWidth;
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
NguCarouselStore.deviceWidth = 0;
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
/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
/** @enum {number} */
const LogLevel = {
    Off: 0,
    Error: 1,
    Warning: 2,
    Info: 3,
    Debug: 4,
};
LogLevel[LogLevel.Off] = 'Off';
LogLevel[LogLevel.Error] = 'Error';
LogLevel[LogLevel.Warning] = 'Warning';
LogLevel[LogLevel.Info] = 'Info';
LogLevel[LogLevel.Debug] = 'Debug';
class Logger {
    /**
     * @param {?=} source
     */
    constructor(source) {
        this.source = source;
    }
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     * @return {?}
     */
    static enableProductionMode() {
        Logger.level = LogLevel.Warning;
    }
    /**
     * @return {?}
     */
    resetSum() {
        Logger.sumTiming = {};
    }
    /**
     * @param {?} tag
     * @param {?=} display
     * @return {?}
     */
    timing(tag, display = false) {
        /** @type {?} */
        const d = new Date();
        /** @type {?} */
        const logs = [tag];
        if (Logger.previousTime) {
            /** @type {?} */
            const diff = d.getTime() - Logger.previousTime.getTime();
            logs.unshift('[' + diff + ']');
            if (!Logger.sumTiming[tag]) {
                Logger.sumTiming[tag] = 0;
            }
            Logger.sumTiming[tag] += diff;
        }
        Logger.previousTime = d;
        logs.unshift(d.getSeconds() + '.' + d.getMilliseconds());
        if (display) {
            this.log(console.log, LogLevel.Info, logs);
        }
    }
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     * @param {...?} objects
     * @return {?}
     */
    debug(...objects) {
        this.log(console.log, LogLevel.Debug, objects);
    }
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     * @param {...?} objects
     * @return {?}
     */
    info(...objects) {
        this.log(console.info, LogLevel.Info, objects);
    }
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     * @param {...?} objects
     * @return {?}
     */
    warn(...objects) {
        this.log(console.warn, LogLevel.Warning, objects);
    }
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     * @param {...?} objects
     * @return {?}
     */
    error(...objects) {
        this.log(console.error, LogLevel.Error, objects);
    }
    /**
     * @param {?} func
     * @param {?} level
     * @param {?} objects
     * @return {?}
     */
    log(func, level, objects) {
        if (level <= Logger.level) {
            /** @type {?} */
            const log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach((output) => output.apply(output, [this.source, level].concat(objects)));
        }
    }
}
/**
 * Current logging level.
 * Set it to LogLevel.Off to disable logs completely.
 */
Logger.level = LogLevel.Debug;
/**
 * Additional log outputs.
 */
Logger.outputs = [];
Logger.previousTime = null;
Logger.sumTiming = {};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const log = new Logger('NgUCarousel');
// TODO calculer la taille possible pour le .ngucarsoul en fonction des boutons prev/next
/**
 * @template T
 */
// tslint:disable-next-line:component-class-suffix
class NguCarousel extends NguCarouselStore {
    // protected _carouselWidth = 0;
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
            if (NguCarousel.deviceWidth !== event.target.outerWidth) {
                this._setStyle(this.nguItemsContainer.nativeElement, 'transition', ``);
                this._storeCarouselData();
            }
            this.refreshCarouselWidth();
        }, 500);
    }
    /**
     * @return {?}
     */
    refreshCarouselWidth() {
        this._carouselWidth = this.nguItemsContainer.nativeElement.offsetWidth;
    }
    /**
     * @return {?}
     */
    get carouselWidth() {
        log.timing('carouselWidth start');
        if (!this._carouselWidth) {
            this.refreshCarouselWidth();
        }
        log.timing('carouselWidth end');
        return this._carouselWidth;
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
                this.refreshCarouselWidth();
                // this.carouselWidth = this.nguItemsContainer.nativeElement.offsetWidth;
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
                        : this._carouselWidth)) *
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
        this.refreshCarouselWidth();
        if (this.touchTransform < 0) {
            this.touchTransform = 0;
        }
        /** @type {?} */
        const type = this.type === 'responsive' ? '%' : 'px';
        /** @type {?} */
        let maxTranslate = (this.itemWidth * this._dataSource.length) - this.carouselWidth;
        if (this.type === 'responsive') {
            maxTranslate = (maxTranslate / this.carouselWidth) * 100;
        }
        if (maxTranslate <= this.touchTransform) {
            this.touchTransform = maxTranslate;
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
        log.timing('start');
        if (this.type === 'responsive') {
            this.deviceType =
                NguCarousel.deviceWidth >= 1200
                    ? 'lg'
                    : NguCarousel.deviceWidth >= 992
                        ? 'md'
                        : NguCarousel.deviceWidth >= 768
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
        log.timing('end');
        // this._carouselPoint();
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
            let somt = Math.floor((this.dexVal / val / this.dexVal) * (NguCarousel.deviceWidth - this.dexVal));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlwZWNvZGUtY2Fyb3VzZWwuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC9saWIvbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC50cyIsIm5nOi8vQGh5cGVjb2RlL2Nhcm91c2VsL2xpYi9uZ3UtY2Fyb3VzZWwuc2VydmljZS50cyIsIm5nOi8vQGh5cGVjb2RlL2Nhcm91c2VsL2xpYi9uZ3UtY2Fyb3VzZWwuZGlyZWN0aXZlLnRzIiwibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL2xvZ2dlci5zZXJ2aWNlLnRzIiwibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL25ndS1jYXJvdXNlbC9uZ3UtY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL25ndS1pdGVtL25ndS1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGh5cGVjb2RlL2Nhcm91c2VsL2xpYi9uZ3UtdGlsZS9uZ3UtdGlsZS5jb21wb25lbnQudHMiLCJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC9saWIvbmd1LWNhcm91c2VsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxTdG9yZSB7XHJcbiAgcHVibGljIHN0YXRpYyBkZXZpY2VXaWR0aCA9IDA7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgdG91Y2ggPSBuZXcgVG91Y2goKSxcclxuICAgIHB1YmxpYyB2ZXJ0aWNhbCA9IG5ldyBWZXJ0aWNhbCgpLFxyXG4gICAgcHVibGljIGludGVydmFsPzogQ2Fyb3VzZWxJbnRlcnZhbCxcclxuICAgIHB1YmxpYyB0cmFuc2Zvcm0gPSBuZXcgTmd1VHJhbnNmcm9tKCksXHJcbiAgICBwdWJsaWMgYnV0dG9uPzogTmd1QnV0dG9uLFxyXG4gICAgcHVibGljIHZpc2libGVJdGVtcz86IEl0ZW1zQ29udHJvbCxcclxuICAgIHB1YmxpYyBkZXZpY2VUeXBlPzogRGV2aWNlVHlwZSxcclxuICAgIHB1YmxpYyB0eXBlID0gJ2ZpeGVkJyxcclxuICAgIHB1YmxpYyB0b2tlbiA9ICcnLFxyXG4gICAgcHVibGljIGl0ZW1zID0gMCxcclxuICAgIHB1YmxpYyBsb2FkID0gMCxcclxuICAgIHByb3RlY3RlZCBfY2Fyb3VzZWxXaWR0aCA9IDAsXHJcbiAgICBwdWJsaWMgaXRlbVdpZHRoID0gMCxcclxuICAgIHB1YmxpYyBzbGlkZUl0ZW1zID0gMCxcclxuICAgIHB1YmxpYyBpdGVtV2lkdGhQZXIgPSAwLFxyXG4gICAgcHVibGljIGl0ZW1MZW5ndGggPSAwLFxyXG4gICAgcHVibGljIGN1cnJlbnRTbGlkZSA9IDAsXHJcbiAgICBwdWJsaWMgZWFzaW5nID0gJ2N1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJyxcclxuICAgIHB1YmxpYyBzcGVlZCA9IDIwMCxcclxuICAgIHB1YmxpYyBsb29wID0gZmFsc2UsXHJcbiAgICBwdWJsaWMgZGV4VmFsID0gMCxcclxuICAgIHB1YmxpYyB0b3VjaFRyYW5zZm9ybSA9IDAsXHJcbiAgICBwdWJsaWMgaXNFbmQgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBpc0ZpcnN0ID0gdHJ1ZSxcclxuICAgIHB1YmxpYyBpc0xhc3QgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBSVEwgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBwb2ludCA9IHRydWUsXHJcbiAgICBwdWJsaWMgdmVsb2NpdHkgPSAxXHJcbiAgKSB7fVxyXG59XHJcbmV4cG9ydCB0eXBlIERldmljZVR5cGUgPSAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ2FsbCc7XHJcblxyXG5leHBvcnQgdHlwZSBCdXR0b25WaXNpYmxlID0gJ2Rpc2FibGVkJyB8ICdoaWRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbnRyb2wge1xyXG4gIHN0YXJ0OiBudW1iZXI7XHJcbiAgZW5kOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbCB7XHJcbiAgZW5hYmxlZDogYm9vbGVhbjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICAvLyBudW1IZWlnaHQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3VCdXR0b24ge1xyXG4gIHZpc2liaWxpdHk/OiBCdXR0b25WaXNpYmxlO1xyXG4gIGVsYXN0aWM/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb3VjaCB7XHJcbiAgYWN0aXZlPzogYm9vbGVhbjtcclxuICBzd2lwZTogc3RyaW5nO1xyXG4gIHZlbG9jaXR5OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3VUcmFuc2Zyb20ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHhzID0gMCxcclxuICAgIHB1YmxpYyBzbSA9IDAsXHJcbiAgICBwdWJsaWMgbWQgPSAwLFxyXG4gICAgcHVibGljIGxnID0gMCxcclxuICAgIHB1YmxpYyBhbGwgPSAwXHJcbiAgKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxDb25maWcge1xyXG4gIGdyaWQ6IE5ndVRyYW5zZnJvbTtcclxuICBzbGlkZT86IG51bWJlcjtcclxuICBzcGVlZD86IG51bWJlcjtcclxuICBpbnRlcnZhbD86IENhcm91c2VsSW50ZXJ2YWw7XHJcbiAgYW5pbWF0aW9uPzogQW5pbWF0ZTtcclxuICBwb2ludD86IFBvaW50O1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbiAgbG9hZD86IG51bWJlcjtcclxuICBjdXN0b20/OiBDdXN0b207XHJcbiAgbG9vcD86IGJvb2xlYW47XHJcbiAgdG91Y2g/OiBib29sZWFuO1xyXG4gIGVhc2luZz86IHN0cmluZztcclxuICBSVEw/OiBib29sZWFuO1xyXG4gIGJ1dHRvbj86IE5ndUJ1dHRvbjtcclxuICB2ZXJ0aWNhbD86IFZlcnRpY2FsO1xyXG4gIHZlbG9jaXR5PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDdXN0b20gPSAnYmFubmVyJztcclxuZXhwb3J0IHR5cGUgQW5pbWF0ZSA9ICdsYXp5JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xyXG4gIHZpc2libGU6IGJvb2xlYW47XHJcbiAgaGlkZU9uU2luZ2xlU2xpZGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvbiB7XHJcbiAgdHlwZT86IEFuaW1hdGU7XHJcbiAgYW5pbWF0ZVN0eWxlcz86IEFuaW1hdGlvblN0eWxlcztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25TdHlsZXMge1xyXG4gIHN0eWxlPzogc3RyaW5nO1xyXG4gIG9wZW4/OiBzdHJpbmc7XHJcbiAgY2xvc2U/OiBzdHJpbmc7XHJcbiAgc3RhZ2dlcj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbEludGVydmFsIHtcclxuICB0aW1pbmc6IG51bWJlcjtcclxuICBpbml0aWFsRGVsYXk/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE91dGxldENvbnRleHQ8VD4ge1xyXG4gIC8qKiBEYXRhIGZvciB0aGUgbm9kZS4gKi9cclxuICAkaW1wbGljaXQ6IFQ7XHJcblxyXG4gIC8qKiBEZXB0aCBvZiB0aGUgbm9kZS4gKi9cclxuICBsZXZlbDogbnVtYmVyO1xyXG5cclxuICAvKiogSW5kZXggbG9jYXRpb24gb2YgdGhlIG5vZGUuICovXHJcbiAgaW5kZXg/OiBudW1iZXI7XHJcblxyXG4gIC8qKiBMZW5ndGggb2YgdGhlIG51bWJlciBvZiB0b3RhbCBkYXRhTm9kZXMuICovXHJcbiAgY291bnQ/OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFQpIHtcclxuICAgIHRoaXMuJGltcGxpY2l0ID0gZGF0YTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3VDYXJvdXNlbCB9IGZyb20gJy4vbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxTZXJ2aWNlIHtcclxuXHJcblxyXG4gIGNhcm91c2VsOiBOZ3VDYXJvdXNlbDxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgfVxyXG5cclxuICBzZXRDYXJvdXNlbChjYXJvdXNlbDogTmd1Q2Fyb3VzZWw8YW55Pikge1xyXG4gICAgdGhpcy5jYXJvdXNlbCA9IGNhcm91c2VsO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2Fyb3VzZWwoKTogTmd1Q2Fyb3VzZWw8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYXJvdXNlbDtcclxuICB9XHJcblxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbTmd1Q2Fyb3VzZWxJdGVtXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSB7fVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW05ndUNhcm91c2VsTmV4dF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUge1xyXG4gIC8vIEBIb3N0QmluZGluZygnZGlzYWJsZWQnKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAvLyBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKSBkaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAvLyBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgLy8gb25DbGljaygpIHtcclxuICAvLyB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tOZ3VDYXJvdXNlbFByZXZdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlIHtcclxuICAvLyBASG9zdEJpbmRpbmcoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgLy8gQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgZGlzcGxheSA9ICdibG9jayc7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tOZ3VDYXJvdXNlbFBvaW50XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUge31cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tuZ3VDYXJvdXNlbERlZl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxUPiB7XHJcbiAgd2hlbjogKGluZGV4OiBudW1iZXIsIG5vZGVEYXRhOiBUKSA9PiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tuZ3VDYXJvdXNlbE91dGxldF0nXHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE91dGxldCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHt9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tuZ3VDYXJvdXNlbFdyYXBwZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxXcmFwcGVyRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IEVsZW1lbnRSZWY8YW55Pikge31cclxufVxyXG4iLCIvKipcclxuICogU2ltcGxlIGxvZ2dlciBzeXN0ZW0gd2l0aCB0aGUgcG9zc2liaWxpdHkgb2YgcmVnaXN0ZXJpbmcgY3VzdG9tIG91dHB1dHMuXHJcbiAqXHJcbiAqIDQgZGlmZmVyZW50IGxvZyBsZXZlbHMgYXJlIHByb3ZpZGVkLCB3aXRoIGNvcnJlc3BvbmRpbmcgbWV0aG9kczpcclxuICogLSBkZWJ1ZyAgIDogZm9yIGRlYnVnIGluZm9ybWF0aW9uXHJcbiAqIC0gaW5mbyAgICA6IGZvciBpbmZvcm1hdGl2ZSBzdGF0dXMgb2YgdGhlIGFwcGxpY2F0aW9uIChzdWNjZXNzLCAuLi4pXHJcbiAqIC0gd2FybmluZyA6IGZvciBub24tY3JpdGljYWwgZXJyb3JzIHRoYXQgZG8gbm90IHByZXZlbnQgbm9ybWFsIGFwcGxpY2F0aW9uIGJlaGF2aW9yXHJcbiAqIC0gZXJyb3IgICA6IGZvciBjcml0aWNhbCBlcnJvcnMgdGhhdCBwcmV2ZW50IG5vcm1hbCBhcHBsaWNhdGlvbiBiZWhhdmlvclxyXG4gKlxyXG4gKiBFeGFtcGxlIHVzYWdlOlxyXG4gKiBgYGBcclxuICogaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnYXBwL2NvcmUvbG9nZ2VyLnNlcnZpY2UnO1xyXG4gKlxyXG4gKiBjb25zdCBsb2cgPSBuZXcgTG9nZ2VyKCdteUZpbGUnKTtcclxuICogLi4uXHJcbiAqIGxvZy5kZWJ1Zygnc29tZXRoaW5nIGhhcHBlbmVkJyk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUbyBkaXNhYmxlIGRlYnVnIGFuZCBpbmZvIGxvZ3MgaW4gcHJvZHVjdGlvbiwgYWRkIHRoaXMgc25pcHBldCB0byB5b3VyIHJvb3QgY29tcG9uZW50OlxyXG4gKiBgYGBcclxuICogZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAqICAgbmdPbkluaXQoKSB7XHJcbiAqICAgICBpZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xyXG4gKiAgICAgICBMb2dnZXIuZW5hYmxlUHJvZHVjdGlvbk1vZGUoKTtcclxuICogICAgIH1cclxuICogICAgIC4uLlxyXG4gKiAgIH1cclxuICogfVxyXG4gKlxyXG4gKiBJZiB5b3Ugd2FudCB0byBwcm9jZXNzIGxvZ3MgdGhyb3VnaCBvdGhlciBvdXRwdXRzIHRoYW4gY29uc29sZSwgeW91IGNhbiBhZGQgTG9nT3V0cHV0IGZ1bmN0aW9ucyB0byBMb2dnZXIub3V0cHV0cy5cclxuICovXHJcblxyXG4vKipcclxuICogVGhlIHBvc3NpYmxlIGxvZyBsZXZlbHMuXHJcbiAqIExvZ0xldmVsLk9mZiBpcyBuZXZlciBlbWl0dGVkIGFuZCBvbmx5IHVzZWQgd2l0aCBMb2dnZXIubGV2ZWwgcHJvcGVydHkgdG8gZGlzYWJsZSBsb2dzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xyXG4gIE9mZiA9IDAsXHJcbiAgRXJyb3IsXHJcbiAgV2FybmluZyxcclxuICBJbmZvLFxyXG4gIERlYnVnXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMb2cgb3V0cHV0IGhhbmRsZXIgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBMb2dPdXRwdXQgPSAoc291cmNlOiBzdHJpbmcsIGxldmVsOiBMb2dMZXZlbCwgLi4ub2JqZWN0czogYW55W10pID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3VycmVudCBsb2dnaW5nIGxldmVsLlxyXG4gICAqIFNldCBpdCB0byBMb2dMZXZlbC5PZmYgdG8gZGlzYWJsZSBsb2dzIGNvbXBsZXRlbHkuXHJcbiAgICovXHJcbiAgc3RhdGljIGxldmVsID0gTG9nTGV2ZWwuRGVidWc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgbG9nIG91dHB1dHMuXHJcbiAgICovXHJcbiAgc3RhdGljIG91dHB1dHM6IExvZ091dHB1dFtdID0gW107XHJcblxyXG4gIHN0YXRpYyBwcmV2aW91c1RpbWU6IERhdGUgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIHN1bVRpbWluZzogYW55ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc291cmNlPzogc3RyaW5nKSB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbmFibGVzIHByb2R1Y3Rpb24gbW9kZS5cclxuICAgKiBTZXRzIGxvZ2dpbmcgbGV2ZWwgdG8gTG9nTGV2ZWwuV2FybmluZy5cclxuICAgKi9cclxuICBzdGF0aWMgZW5hYmxlUHJvZHVjdGlvbk1vZGUoKSB7XHJcbiAgICBMb2dnZXIubGV2ZWwgPSBMb2dMZXZlbC5XYXJuaW5nO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRTdW0oKSB7XHJcbiAgICBMb2dnZXIuc3VtVGltaW5nID0ge307XHJcbiAgfVxyXG5cclxuICB0aW1pbmcodGFnOiBzdHJpbmcsIGRpc3BsYXk6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgY29uc3QgbG9nczogYW55W10gPSBbdGFnXTtcclxuXHJcbiAgICBpZiAoTG9nZ2VyLnByZXZpb3VzVGltZSkge1xyXG4gICAgICBjb25zdCBkaWZmID0gZC5nZXRUaW1lKCkgLSBMb2dnZXIucHJldmlvdXNUaW1lLmdldFRpbWUoKTtcclxuICAgICAgbG9ncy51bnNoaWZ0KCdbJyArIGRpZmYgKyAnXScpO1xyXG4gICAgICBpZiAoIUxvZ2dlci5zdW1UaW1pbmdbdGFnXSkge1xyXG4gICAgICAgIExvZ2dlci5zdW1UaW1pbmdbdGFnXSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgTG9nZ2VyLnN1bVRpbWluZ1t0YWddICs9IGRpZmY7XHJcbiAgICB9XHJcbiAgICBMb2dnZXIucHJldmlvdXNUaW1lID0gZDtcclxuICAgIGxvZ3MudW5zaGlmdChkLmdldFNlY29uZHMoKSArICcuJyArIGQuZ2V0TWlsbGlzZWNvbmRzKCkpO1xyXG4gICAgaWYgKGRpc3BsYXkpIHtcclxuICAgICAgdGhpcy5sb2coY29uc29sZS5sb2csIExvZ0xldmVsLkluZm8sIGxvZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBMb2dzIG1lc3NhZ2VzIG9yIG9iamVjdHMgIHdpdGggdGhlIGRlYnVnIGxldmVsLlxyXG4gICAqIFdvcmtzIHRoZSBzYW1lIGFzIGNvbnNvbGUubG9nKCkuXHJcbiAgICovXHJcbiAgZGVidWcoLi4ub2JqZWN0czogYW55W10pIHtcclxuICAgIHRoaXMubG9nKGNvbnNvbGUubG9nLCBMb2dMZXZlbC5EZWJ1Zywgb2JqZWN0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2dzIG1lc3NhZ2VzIG9yIG9iamVjdHMgIHdpdGggdGhlIGluZm8gbGV2ZWwuXHJcbiAgICogV29ya3MgdGhlIHNhbWUgYXMgY29uc29sZS5sb2coKS5cclxuICAgKi9cclxuICBpbmZvKC4uLm9iamVjdHM6IGFueVtdKSB7XHJcbiAgICB0aGlzLmxvZyhjb25zb2xlLmluZm8sIExvZ0xldmVsLkluZm8sIG9iamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9ncyBtZXNzYWdlcyBvciBvYmplY3RzICB3aXRoIHRoZSB3YXJuaW5nIGxldmVsLlxyXG4gICAqIFdvcmtzIHRoZSBzYW1lIGFzIGNvbnNvbGUubG9nKCkuXHJcbiAgICovXHJcbiAgd2FybiguLi5vYmplY3RzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5sb2coY29uc29sZS53YXJuLCBMb2dMZXZlbC5XYXJuaW5nLCBvYmplY3RzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ3MgbWVzc2FnZXMgb3Igb2JqZWN0cyAgd2l0aCB0aGUgZXJyb3IgbGV2ZWwuXHJcbiAgICogV29ya3MgdGhlIHNhbWUgYXMgY29uc29sZS5sb2coKS5cclxuICAgKi9cclxuICBlcnJvciguLi5vYmplY3RzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5sb2coY29uc29sZS5lcnJvciwgTG9nTGV2ZWwuRXJyb3IsIG9iamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2coZnVuYzogRnVuY3Rpb24sIGxldmVsOiBMb2dMZXZlbCwgb2JqZWN0czogYW55W10pIHtcclxuICAgIGlmIChsZXZlbCA8PSBMb2dnZXIubGV2ZWwpIHtcclxuICAgICAgY29uc3QgbG9nID0gdGhpcy5zb3VyY2UgPyBbJ1snICsgdGhpcy5zb3VyY2UgKyAnXSddLmNvbmNhdChvYmplY3RzKSA6IG9iamVjdHM7XHJcbiAgICAgIGZ1bmMuYXBwbHkoY29uc29sZSwgbG9nKTtcclxuICAgICAgTG9nZ2VyLm91dHB1dHMuZm9yRWFjaCgob3V0cHV0KSA9PiBvdXRwdXQuYXBwbHkob3V0cHV0LCBbdGhpcy5zb3VyY2UsIGxldmVsXS5jb25jYXQob2JqZWN0cykpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRG9DaGVjayxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgaXNEZXZNb2RlLFxyXG4gIEl0ZXJhYmxlQ2hhbmdlUmVjb3JkLFxyXG4gIEl0ZXJhYmxlQ2hhbmdlcyxcclxuICBJdGVyYWJsZURpZmZlcixcclxuICBJdGVyYWJsZURpZmZlcnMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUExBVEZPUk1fSUQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUcmFja0J5RnVuY3Rpb24sXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZW1wdHksIGZyb21FdmVudCwgaW50ZXJ2YWwsIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcFRvLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTmd1Q2Fyb3VzZWxDb25maWcsIE5ndUNhcm91c2VsT3V0bGV0Q29udGV4dCwgTmd1Q2Fyb3VzZWxTdG9yZSB9IGZyb20gJy4vbmd1LWNhcm91c2VsJztcclxuaW1wb3J0IHsgTmd1Q2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi4vbmd1LWNhcm91c2VsLnNlcnZpY2UnO1xyXG5pbXBvcnQge1xyXG4gIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbE91dGxldCxcclxuICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxXcmFwcGVyRGlyZWN0aXZlXHJcbn0gZnJvbSAnLi4vbmd1LWNhcm91c2VsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL2xvZ2dlci5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IGxvZyA9IG5ldyBMb2dnZXIoJ05nVUNhcm91c2VsJyk7XHJcblxyXG4vLyBUT0RPIGNhbGN1bGVyIGxhIHRhaWxsZSBwb3NzaWJsZSBwb3VyIGxlIC5uZ3VjYXJzb3VsIGVuIGZvbmN0aW9uIGRlcyBib3V0b25zIHByZXYvbmV4dFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnbmd1LWNhcm91c2VsJyxcclxuICB0ZW1wbGF0ZVVybDogJ25ndS1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ25ndS1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHZpZXdQcm92aWRlcnM6IFtOZ3VDYXJvdXNlbFNlcnZpY2VdLFxyXG4gIHByb3ZpZGVyczogW05ndUNhcm91c2VsU2VydmljZV0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1jbGFzcy1zdWZmaXhcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsPFQ+IGV4dGVuZHMgTmd1Q2Fyb3VzZWxTdG9yZVxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xyXG4gIF9kYXRhU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgX2RhdGFEaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPHt9PjtcclxuICBzdHlsZWlkOiBzdHJpbmc7XHJcbiAgYWN0aXZlUG9pbnQ6IG51bWJlcjtcclxuICBpc0hvdmVyZWQgPSBmYWxzZTtcclxuICAvLyBpc0ZpcnN0c3MgPSAwO1xyXG4gIGFycmF5Q2hhbmdlczogSXRlcmFibGVDaGFuZ2VzPHt9PjtcclxuICBjYXJvdXNlbEludDogU3Vic2NyaXB0aW9uO1xyXG4gIEBWaWV3Q2hpbGQoTmd1Q2Fyb3VzZWxPdXRsZXQpXHJcbiAgX25vZGVPdXRsZXQ6IE5ndUNhcm91c2VsT3V0bGV0O1xyXG4gIEBWaWV3Q2hpbGQoTmd1Q2Fyb3VzZWxXcmFwcGVyRGlyZWN0aXZlKVxyXG4gIF9jYXJvdXNlbFdyYXBwZXI6IE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZTtcclxuICBwb2ludE51bWJlcnM6IEFycmF5PGFueT4gPSBbXTtcclxuICAvLyBpc0ZpcnN0c3MgPSAwO1xyXG4gIGxpc3RlbmVyMTogKCkgPT4gdm9pZDtcclxuICBsaXN0ZW5lcjI6ICgpID0+IHZvaWQ7XHJcbiAgbGlzdGVuZXIzOiAoKSA9PiB2b2lkO1xyXG4gIGxpc3RlbmVyNDogKCkgPT4gdm9pZDtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxyXG4gIEBPdXRwdXQoJ29uTW92ZScpXHJcbiAgcHVibGljIG9uTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Tmd1Q2Fyb3VzZWw8VD4+KCk7XHJcbiAgcHJpdmF0ZSBfZGVmYXVsdE5vZGVEZWY6IE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPGFueT4gfCBudWxsO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUpXHJcbiAgcHJpdmF0ZSBfZGVmRGlyZWM6IFF1ZXJ5TGlzdDxOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxhbnk+PjtcclxuICBwcml2YXRlIGRpcmVjdGlvblN5bTogc3RyaW5nO1xyXG4gIHByaXZhdGUgY2Fyb3VzZWxDc3NOb2RlOiBhbnk7XHJcbiAgcHJpdmF0ZSBwb2ludEluZGV4OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB3aXRoQW5pbSA9IHRydWU7XHJcbiAgQElucHV0KCdpbnB1dHMnKVxyXG4gIHByaXZhdGUgaW5wdXRzOiBOZ3VDYXJvdXNlbENvbmZpZztcclxuICBAT3V0cHV0KCdjYXJvdXNlbExvYWQnKVxyXG4gIHByaXZhdGUgY2Fyb3VzZWxMb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBWaWV3Q2hpbGQoJ25ndWNhcm91c2VsJywge3JlYWQ6IEVsZW1lbnRSZWZ9KVxyXG4gIHByaXZhdGUgY2Fyb3VzZWxNYWluMTogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbmd1SXRlbXNDb250YWluZXInLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgcHJpdmF0ZSBuZ3VJdGVtc0NvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZCgndG91Y2hDb250YWluZXInLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgcHJpdmF0ZSB0b3VjaENvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIF9pbnRlcnZhbENvbnRyb2xsZXIkID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xyXG4gIHByaXZhdGUgY2Fyb3VzZWw6IGFueTtcclxuICBwcml2YXRlIG9uUmVzaXplOiBhbnk7XHJcbiAgcHJpdmF0ZSBvblNjcm9sbGluZzogYW55O1xyXG4gIHByaXZhdGUgX3RyYWNrQnlGbjogVHJhY2tCeUZ1bmN0aW9uPFQ+O1xyXG5cclxuICAvLyBwcm90ZWN0ZWQgX2Nhcm91c2VsV2lkdGggPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBjYXJvdXNlbFNlcnZpY2U6IE5ndUNhcm91c2VsU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuY2Fyb3VzZWxTZXJ2aWNlLnNldENhcm91c2VsKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgX2RhdGFTb3VyY2U6IGFueTtcclxuXHJcbiAgQElucHV0KCdkYXRhU291cmNlJylcclxuICBnZXQgZGF0YVNvdXJjZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2U7XHJcbiAgfVxyXG5cclxuICBzZXQgZGF0YVNvdXJjZShkYXRhOiBhbnkpIHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIC8vIHRoaXMuaXNGaXJzdHNzKys7XHJcbiAgICAgIHRoaXMuX3N3aXRjaERhdGFTb3VyY2UoZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIFRoZSBzZXR0ZXIgaXMgdXNlZCB0byBjYXRjaCB0aGUgYnV0dG9uIGlmIHRoZSBidXR0b24gaGFzIG5nSWZcclxuICAgKiBpc3N1ZSBpZCAjOTFcclxuICAgKi9cclxuICBAQ29udGVudENoaWxkKE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSwge3JlYWQ6IEVsZW1lbnRSZWZ9KVxyXG4gIHNldCBuZXh0QnRuKGJ0bjogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5saXN0ZW5lcjIgJiYgdGhpcy5saXN0ZW5lcjIoKTtcclxuICAgIGlmIChidG4pIHtcclxuICAgICAgdGhpcy5saXN0ZW5lcjIgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oYnRuLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsICgpID0+XHJcbiAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoMSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBUaGUgc2V0dGVyIGlzIHVzZWQgdG8gY2F0Y2ggdGhlIGJ1dHRvbiBpZiB0aGUgYnV0dG9uIGhhcyBuZ0lmXHJcbiAgICogaXNzdWUgaWQgIzkxXHJcbiAgICovXHJcbiAgQENvbnRlbnRDaGlsZChOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsIHtyZWFkOiBFbGVtZW50UmVmfSlcclxuICBzZXQgcHJldkJ0bihidG46IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMubGlzdGVuZXIxICYmIHRoaXMubGlzdGVuZXIxKCk7XHJcbiAgICBpZiAoYnRuKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXIxID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKGJ0bi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoKSA9PlxyXG4gICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKDApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmFja2luZyBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCB0byBjaGVjayB0aGUgZGlmZmVyZW5jZXMgaW4gZGF0YSBjaGFuZ2VzLiBVc2VkIHNpbWlsYXJseVxyXG4gICAqIHRvIGBuZ0ZvcmAgYHRyYWNrQnlgIGZ1bmN0aW9uLiBPcHRpbWl6ZSBJdGVtcyBvcGVyYXRpb25zIGJ5IGlkZW50aWZ5aW5nIGEgSXRlbXMgYmFzZWQgb24gaXRzIGRhdGFcclxuICAgKiByZWxhdGl2ZSB0byB0aGUgZnVuY3Rpb24gdG8ga25vdyBpZiBhIEl0ZW1zIHNob3VsZCBiZSBhZGRlZC9yZW1vdmVkL21vdmVkLlxyXG4gICAqIEFjY2VwdHMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBwYXJhbWV0ZXJzLCBgaW5kZXhgIGFuZCBgaXRlbWAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdHJhY2tCeSgpOiBUcmFja0J5RnVuY3Rpb248VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RyYWNrQnlGbjtcclxuICB9XHJcblxyXG4gIHNldCB0cmFja0J5KGZuOiBUcmFja0J5RnVuY3Rpb248VD4pIHtcclxuICAgIGlmIChcclxuICAgICAgaXNEZXZNb2RlKCkgJiZcclxuICAgICAgZm4gIT0gbnVsbCAmJlxyXG4gICAgICB0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicgJiZcclxuICAgICAgPGFueT5jb25zb2xlICYmXHJcbiAgICAgIDxhbnk+Y29uc29sZS53YXJuXHJcbiAgICApIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGB0cmFja0J5IG11c3QgYmUgYSBmdW5jdGlvbiwgYnV0IHJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoZm4pfS5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl90cmFja0J5Rm4gPSBmbjtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5fZGF0YURpZmZlciA9IHRoaXMuX2RpZmZlcnNcclxuICAgICAgLmZpbmQoW10pXHJcbiAgICAgIC5jcmVhdGUoKF9pOiBudW1iZXIsIGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYWNrQnkgPyB0aGlzLnRyYWNrQnkoaXRlbS5kYXRhSW5kZXgsIGl0ZW0uZGF0YSkgOiBpdGVtO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIHRoaXMuYXJyYXlDaGFuZ2VzID0gdGhpcy5fZGF0YURpZmZlci5kaWZmKHRoaXMuZGF0YVNvdXJjZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuYXJyYXlDaGFuZ2VzICYmIHRoaXMuX2RlZkRpcmVjKSB7XHJcbiAgICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNhcm91c2VsID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuX2lucHV0VmFsaWRhdGlvbigpO1xyXG5cclxuICAgIHRoaXMuY2Fyb3VzZWxDc3NOb2RlID0gdGhpcy5fY3JlYXRlU3R5bGVFbGVtKCk7XHJcblxyXG4gICAgLy8gdGhpcy5fYnV0dG9uQ29udHJvbCgpO1xyXG5cclxuICAgIGlmICh3aW5kb3cpIHtcclxuICAgICAgdGhpcy5fY2Fyb3VzZWxJbnRlcnZhbCgpO1xyXG4gICAgICBpZiAoIXRoaXMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuX3RvdWNoKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saXN0ZW5lcjMgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdyZXNpemUnLCBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5fb25SZXNpemluZyhldmVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9vbldpbmRvd1Njcm9sbGluZygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKiBVc2VkIHRvIHJlc2V0IHRoZSBjYXJvdXNlbCAqL1xyXG4gIHB1YmxpYyByZXNldCh3aXRoT3V0QW5pbWF0aW9uPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgd2l0aE91dEFuaW1hdGlvbiAmJiAodGhpcy53aXRoQW5pbSA9IGZhbHNlKTtcclxuICAgIGlmICh0aGlzLmNhcm91c2VsQ3NzTm9kZSkge1xyXG4gICAgICB0aGlzLmNhcm91c2VsQ3NzTm9kZS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgIHRoaXMubW92ZVRvKDApO1xyXG4gICAgICB0aGlzLl9jYXJvdXNlbFBvaW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogdGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHNjb2xsIHRoZSBjYXJvdXNlbCB3aGVuIHBvaW50IGlzIGNsaWNrZWQgKi9cclxuICBwdWJsaWMgbW92ZVRvKHNsaWRlOiBudW1iZXIsIHdpdGhPdXRBbmltYXRpb24/OiBib29sZWFuKSB7XHJcbiAgICAvLyBzbGlkZSA9IHNsaWRlIC0gMTtcclxuICAgIHdpdGhPdXRBbmltYXRpb24gJiYgKHRoaXMud2l0aEFuaW0gPSBmYWxzZSk7XHJcbiAgICBpZiAodGhpcy5hY3RpdmVQb2ludCAhPT0gc2xpZGUgJiYgc2xpZGUgPCB0aGlzLnBvaW50SW5kZXgpIHtcclxuICAgICAgbGV0IHNsaWRlcmVtYWlucztcclxuICAgICAgY29uc3QgYnRucyA9IHRoaXMuY3VycmVudFNsaWRlIDwgc2xpZGUgPyAxIDogMDtcclxuXHJcbiAgICAgIHN3aXRjaCAoc2xpZGUpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xyXG4gICAgICAgICAgc2xpZGVyZW1haW5zID0gc2xpZGUgKiB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIHRoaXMucG9pbnRJbmRleCAtIDE6XHJcbiAgICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xyXG4gICAgICAgICAgc2xpZGVyZW1haW5zID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtIHRoaXMuaXRlbXM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcclxuICAgICAgICAgIHNsaWRlcmVtYWlucyA9IHNsaWRlICogdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsVHdvKGJ0bnMsIHNsaWRlcmVtYWlucywgdGhpcy5zcGVlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjbGVhckludGVydmFsKHRoaXMuY2Fyb3VzZWxJbnQpO1xyXG4gICAgdGhpcy5jYXJvdXNlbEludCAmJiB0aGlzLmNhcm91c2VsSW50LnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmNhcm91c2VsTG9hZC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5vbk1vdmUuY29tcGxldGUoKTtcclxuXHJcbiAgICAvKiogcmVtb3ZlIGxpc3RlbmVycyAqL1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHN0ciA9IGBsaXN0ZW5lciR7aX1gO1xyXG4gICAgICB0aGlzW3N0cl0gJiYgdGhpc1tzdHJdKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zd2l0Y2hEYXRhU291cmNlKGRhdGFTb3VyY2U6IGFueSk6IGFueSB7XHJcbiAgICB0aGlzLl9kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcclxuICAgIGlmICh0aGlzLl9kZWZEaXJlYykge1xyXG4gICAgICB0aGlzLl9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJOb2RlQ2hhbmdlcyhcclxuICAgIGRhdGE6IGFueVtdLFxyXG4gICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lclxyXG4gICkge1xyXG5cclxuICAgIGlmICghdGhpcy5hcnJheUNoYW5nZXMpIHJldHVybjtcclxuICAgIHRoaXMuYXJyYXlDaGFuZ2VzLmZvckVhY2hPcGVyYXRpb24oXHJcbiAgICAgIChcclxuICAgICAgICBpdGVtOiBJdGVyYWJsZUNoYW5nZVJlY29yZDxhbnk+LFxyXG4gICAgICAgIGFkanVzdGVkUHJldmlvdXNJbmRleDogbnVtYmVyLFxyXG4gICAgICAgIGN1cnJlbnRJbmRleDogbnVtYmVyXHJcbiAgICAgICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9nZXROb2RlRGVmKGRhdGFbY3VycmVudEluZGV4XSwgY3VycmVudEluZGV4KTtcclxuICAgICAgICBpZiAoaXRlbS5wcmV2aW91c0luZGV4ID09PSBudWxsKSB7XHJcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gbmV3IE5ndUNhcm91c2VsT3V0bGV0Q29udGV4dDxhbnk+KGRhdGFbY3VycmVudEluZGV4XSk7XHJcbiAgICAgICAgICBjb250ZXh0LmluZGV4ID0gY3VycmVudEluZGV4O1xyXG4gICAgICAgICAgdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcoXHJcbiAgICAgICAgICAgIG5vZGUudGVtcGxhdGUsXHJcbiAgICAgICAgICAgIGNvbnRleHQsXHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgdmlld0NvbnRhaW5lci5yZW1vdmUoYWRqdXN0ZWRQcmV2aW91c0luZGV4KTtcclxuICAgICAgICAgIHZpZXdDb250YWluZXIuY2xlYXIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgdmlldyA9IHZpZXdDb250YWluZXIuZ2V0KGFkanVzdGVkUHJldmlvdXNJbmRleCk7XHJcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLm1vdmUodmlldywgY3VycmVudEluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICB0aGlzLl91cGRhdGVJdGVtSW5kZXhDb250ZXh0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2Fyb3VzZWwpIHtcclxuICAgICAgdGhpcy5fc3RvcmVDYXJvdXNlbERhdGEoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIGluZGV4LXJlbGF0ZWQgY29udGV4dCBmb3IgZWFjaCByb3cgdG8gcmVmbGVjdCBhbnkgY2hhbmdlcyBpbiB0aGUgaW5kZXggb2YgdGhlIHJvd3MsXHJcbiAgICogZS5nLiBmaXJzdC9sYXN0L2V2ZW4vb2RkLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3VwZGF0ZUl0ZW1JbmRleENvbnRleHQoKSB7XHJcbiAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyO1xyXG4gICAgZm9yIChcclxuICAgICAgbGV0IHJlbmRlckluZGV4ID0gMCwgY291bnQgPSB2aWV3Q29udGFpbmVyLmxlbmd0aDtcclxuICAgICAgcmVuZGVySW5kZXggPCBjb3VudDtcclxuICAgICAgcmVuZGVySW5kZXgrK1xyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChyZW5kZXJJbmRleCkgYXMgYW55O1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcclxuICAgICAgY29udGV4dC5jb3VudCA9IGNvdW50O1xyXG5cclxuICAgICAgY29udGV4dC5maXJzdCA9IHJlbmRlckluZGV4ID09PSAwO1xyXG4gICAgICBjb250ZXh0Lmxhc3QgPSByZW5kZXJJbmRleCA9PT0gY291bnQgLSAxO1xyXG4gICAgICBjb250ZXh0LmV2ZW4gPSByZW5kZXJJbmRleCAlIDIgPT09IDA7XHJcbiAgICAgIGNvbnRleHQub2RkID0gIWNvbnRleHQuZXZlbjtcclxuICAgICAgY29udGV4dC5pbmRleCA9IHJlbmRlckluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0Tm9kZURlZihkYXRhOiBhbnksIGk6IG51bWJlcik6IE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPGFueT4ge1xyXG4gICAgaWYgKHRoaXMuX2RlZkRpcmVjLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZGVmRGlyZWMuZmlyc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm9kZURlZiA9XHJcbiAgICAgIHRoaXMuX2RlZkRpcmVjLmZpbmQoZGVmID0+IGRlZi53aGVuICYmIGRlZi53aGVuKGksIGRhdGEpKSB8fFxyXG4gICAgICB0aGlzLl9kZWZhdWx0Tm9kZURlZjtcclxuXHJcbiAgICByZXR1cm4gbm9kZURlZjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29ic2VydmVSZW5kZXJDaGFuZ2VzKCkge1xyXG4gICAgbGV0IGRhdGFTdHJlYW06IE9ic2VydmFibGU8YW55W10+IHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIGlmICh0aGlzLl9kYXRhU291cmNlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xyXG4gICAgICBkYXRhU3RyZWFtID0gdGhpcy5fZGF0YVNvdXJjZTtcclxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9kYXRhU291cmNlKSkge1xyXG4gICAgICBkYXRhU3RyZWFtID0gb2YodGhpcy5fZGF0YVNvdXJjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGFTdHJlYW0pIHtcclxuICAgICAgdGhpcy5fZGF0YVN1YnNjcmlwdGlvbiA9IGRhdGFTdHJlYW1cclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyTm9kZUNoYW5nZXMoZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLmlzTGFzdCA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5wdXRWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy50eXBlID0gdGhpcy5pbnB1dHMuZ3JpZC5hbGwgIT09IDAgPyAnZml4ZWQnIDogJ3Jlc3BvbnNpdmUnO1xyXG4gICAgdGhpcy5sb29wID0gdGhpcy5pbnB1dHMubG9vcCB8fCBmYWxzZTtcclxuICAgIHRoaXMuaW5wdXRzLmVhc2luZyA9IHRoaXMuaW5wdXRzLmVhc2luZyB8fCAnY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknO1xyXG4gICAgdGhpcy50b3VjaC5hY3RpdmUgPSB0aGlzLmlucHV0cy50b3VjaCB8fCBmYWxzZTtcclxuICAgIHRoaXMuUlRMID0gdGhpcy5pbnB1dHMuUlRMID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IHRoaXMuaW5wdXRzLmludGVydmFsIHx8IG51bGw7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID1cclxuICAgICAgdHlwZW9mIHRoaXMuaW5wdXRzLnZlbG9jaXR5ID09PSAnbnVtYmVyJ1xyXG4gICAgICAgID8gdGhpcy5pbnB1dHMudmVsb2NpdHlcclxuICAgICAgICA6IHRoaXMudmVsb2NpdHk7XHJcblxyXG4gICAgaWYgKHRoaXMuaW5wdXRzLnZlcnRpY2FsICYmIHRoaXMuaW5wdXRzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy52ZXJ0aWNhbC5lbmFibGVkID0gdGhpcy5pbnB1dHMudmVydGljYWwuZW5hYmxlZDtcclxuICAgICAgdGhpcy52ZXJ0aWNhbC5oZWlnaHQgPSB0aGlzLmlucHV0cy52ZXJ0aWNhbC5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpcmVjdGlvblN5bSA9IHRoaXMuUlRMID8gJycgOiAnLSc7XHJcbiAgICB0aGlzLnBvaW50ID1cclxuICAgICAgdGhpcy5pbnB1dHMucG9pbnQgJiYgdHlwZW9mIHRoaXMuaW5wdXRzLnBvaW50LnZpc2libGUgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgPyB0aGlzLmlucHV0cy5wb2ludC52aXNpYmxlXHJcbiAgICAgICAgOiB0cnVlO1xyXG5cclxuICAgIHRoaXMuX2Nhcm91c2VsU2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb25SZXNpemluZyhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5vblJlc2l6ZSk7XHJcbiAgICB0aGlzLm9uUmVzaXplID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChOZ3VDYXJvdXNlbC5kZXZpY2VXaWR0aCAhPT0gZXZlbnQudGFyZ2V0Lm91dGVyV2lkdGgpIHtcclxuICAgICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgYGApO1xyXG4gICAgICAgIHRoaXMuX3N0b3JlQ2Fyb3VzZWxEYXRhKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZWZyZXNoQ2Fyb3VzZWxXaWR0aCgpO1xyXG5cclxuICAgIH0sIDUwMCk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoQ2Fyb3VzZWxXaWR0aCgpIHtcclxuICAgIHRoaXMuX2Nhcm91c2VsV2lkdGggPSB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgfVxyXG5cclxuICBnZXQgY2Fyb3VzZWxXaWR0aCgpIHtcclxuICAgIGxvZy50aW1pbmcoJ2Nhcm91c2VsV2lkdGggc3RhcnQnKTtcclxuICAgIGlmICghdGhpcy5fY2Fyb3VzZWxXaWR0aCkge1xyXG4gICAgICB0aGlzLnJlZnJlc2hDYXJvdXNlbFdpZHRoKCk7XHJcbiAgICB9XHJcbiAgICBsb2cudGltaW5nKCdjYXJvdXNlbFdpZHRoIGVuZCcpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2Nhcm91c2VsV2lkdGg7XHJcbiAgfVxyXG5cclxuICAvKiogR2V0IFRvdWNoIGlucHV0ICovXHJcbiAgcHJpdmF0ZSBfdG91Y2goKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dHMudG91Y2gpIHtcclxuICAgICAgY29uc3QgaGFtbWVydGltZSA9IG5ldyBIYW1tZXIodGhpcy50b3VjaENvbnRhaW5lci5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgaGFtbWVydGltZS5nZXQoJ3BhbicpLnNldCh7ZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0hPUklaT05UQUx9KTtcclxuXHJcbiAgICAgIGhhbW1lcnRpbWUub24oJ3BhbnN0YXJ0JywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hDYXJvdXNlbFdpZHRoKCk7XHJcbiAgICAgICAgLy8gdGhpcy5jYXJvdXNlbFdpZHRoID0gdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIC8vIHRoaXMudG91Y2hUcmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybVt0aGlzLmRldmljZVR5cGVdO1xyXG4gICAgICAgIHRoaXMuZGV4VmFsID0gMDtcclxuICAgICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgJycpO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICAgIGhhbW1lcnRpbWUub24oJ3BhbnVwJywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbmxlZnQnLCBldik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFuZG93bicsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5yaWdodCcsIGV2KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5sZWZ0JywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbmxlZnQnLCBldik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFucmlnaHQnLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fdG91Y2hIYW5kbGluZygncGFucmlnaHQnLCBldik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLypoYW1tZXJ0aW1lLm9uKCdwYW5lbmQnLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhldi52ZWxvY2l0eSkgPj0gdGhpcy52ZWxvY2l0eSkge1xyXG4gICAgICAgICAgdGhpcy50b3VjaC52ZWxvY2l0eSA9IGV2LnZlbG9jaXR5O1xyXG4gICAgICAgICAgbGV0IGRpcmVjID0gMDtcclxuICAgICAgICAgIGlmICghdGhpcy5SVEwpIHtcclxuICAgICAgICAgICAgZGlyZWMgPSB0aGlzLnRvdWNoLnN3aXBlID09PSAncGFucmlnaHQnID8gMCA6IDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXJlYyA9IHRoaXMudG91Y2guc3dpcGUgPT09ICdwYW5yaWdodCcgPyAxIDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKGRpcmVjKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5kZXhWYWwgPSAwO1xyXG4gICAgICAgICAgdGhpcy5fc2V0U3R5bGUoXHJcbiAgICAgICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICAgJ3RyYW5zaXRpb24nLFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtIDMyNG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIC8vIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pOyovXHJcbiAgICAgIGhhbW1lcnRpbWUub24oJ2hhbW1lci5pbnB1dCcsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIC8vIGFsbG93IG5lc3RlZCB0b3VjaCBldmVudHMgdG8gbm8gcHJvcGFnYXRlLCB0aGlzIG1heSBoYXZlIG90aGVyIHNpZGUgYWZmZWN0cyBidXQgd29ya3MgZm9yIG5vdy5cclxuICAgICAgICAvLyBUT0RPOiBJdCBpcyBwcm9iYWJseSBiZXR0ZXIgdG8gY2hlY2sgdGhlIHNvdXJjZSBlbGVtZW50IG9mIHRoZSBldmVudCBhbmQgb25seSBhcHBseSB0aGUgaGFuZGxlIHRvIHRoZSBjb3JyZWN0IGNhcm91c2VsXHJcbiAgICAgICAgZXYuc3JjRXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGhhbmRsZSB0b3VjaCBpbnB1dCAqL1xyXG4gIHByaXZhdGUgX3RvdWNoSGFuZGxpbmcoZTogc3RyaW5nLCBldjogYW55KTogdm9pZCB7XHJcbiAgICAvLyB2ZXJ0aWNhbCB0b3VjaCBldmVudHMgc2VlbSB0byBjYXVzZSB0byBwYW5zdGFydCBldmVudCB3aXRoIGFuIG9kZCBkZWx0YVxyXG4gICAgLy8gYW5kIGEgY2VudGVyIG9mIHt4OjAseTowfSBzbyB0aGlzIHdpbGwgaWdub3JlIHRoZW1cclxuXHJcbiAgICBpZiAoZXYuY2VudGVyLnggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ID0gTWF0aC5hYnModGhpcy52ZXJ0aWNhbC5lbmFibGVkID8gZXYuZGVsdGFZIDogZXYuZGVsdGFYKTtcclxuICAgIGxldCB2YWx0ID0gZXYgLSB0aGlzLmRleFZhbDtcclxuICAgIHZhbHQgPVxyXG4gICAgICB0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJ1xyXG4gICAgICAgID8gKE1hdGguYWJzKGV2IC0gdGhpcy5kZXhWYWwpIC9cclxuICAgICAgICAodGhpcy52ZXJ0aWNhbC5lbmFibGVkXHJcbiAgICAgICAgICA/IHRoaXMudmVydGljYWwuaGVpZ2h0XHJcbiAgICAgICAgICA6IHRoaXMuX2Nhcm91c2VsV2lkdGgpKSAqXHJcbiAgICAgICAgMTAwXHJcbiAgICAgICAgOiB2YWx0O1xyXG5cclxuICAgIHRoaXMuZGV4VmFsID0gZXY7XHJcbiAgICB0aGlzLnRvdWNoLnN3aXBlID0gZTtcclxuICAgIHRoaXMuX3NldFRvdWNoVHJhbnNmcm9tKGUsIHZhbHQpO1xyXG4gICAgdGhpcy5fc2V0VHJhbnNmb3JtRnJvbVRvdWNoKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0VG91Y2hUcmFuc2Zyb20oZTogc3RyaW5nLCB2YWx0OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMuUlRMID8gJ3BhbnJpZ2h0JyA6ICdwYW5sZWZ0JztcclxuICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPVxyXG4gICAgICBlID09PSBjb25kaXRpb24gPyB2YWx0ICsgdGhpcy50b3VjaFRyYW5zZm9ybSA6IHRoaXMudG91Y2hUcmFuc2Zvcm0gLSB2YWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0VHJhbnNmb3JtRnJvbVRvdWNoKCkge1xyXG5cclxuICAgIHRoaXMucmVmcmVzaENhcm91c2VsV2lkdGgoKTtcclxuICAgIGlmICh0aGlzLnRvdWNoVHJhbnNmb3JtIDwgMCkge1xyXG4gICAgICB0aGlzLnRvdWNoVHJhbnNmb3JtID0gMDtcclxuICAgIH1cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJyA/ICclJyA6ICdweCc7XHJcblxyXG4gICAgbGV0ICBtYXhUcmFuc2xhdGUgPSAodGhpcy5pdGVtV2lkdGggKiB0aGlzLl9kYXRhU291cmNlLmxlbmd0aCkgLSB0aGlzLmNhcm91c2VsV2lkdGg7XHJcblxyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnKSB7XHJcbiAgICAgIG1heFRyYW5zbGF0ZSA9IChtYXhUcmFuc2xhdGUgLyB0aGlzLmNhcm91c2VsV2lkdGgpICogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtYXhUcmFuc2xhdGUgPD0gdGhpcy50b3VjaFRyYW5zZm9ybSkge1xyXG4gICAgICB0aGlzLnRvdWNoVHJhbnNmb3JtID0gbWF4VHJhbnNsYXRlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLm9uTW92ZS5lbWl0KHRoaXMpO1xyXG4gICAgdGhpcy5fc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgIHRoaXMudmVydGljYWwuZW5hYmxlZFxyXG4gICAgICAgID8gYHRyYW5zbGF0ZTNkKDAsICR7dGhpcy5kaXJlY3Rpb25TeW19JHt0aGlzLnRvdWNoVHJhbnNmb3JtfSR7dHlwZX0sIDApYFxyXG4gICAgICAgIDogYHRyYW5zbGF0ZTNkKCR7dGhpcy5kaXJlY3Rpb25TeW19JHt0aGlzLnRvdWNoVHJhbnNmb3JtfSR7dHlwZX0sIDAsIDApYFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKiB0aGlzIGZuIHVzZWQgdG8gZGlzYWJsZSB0aGUgaW50ZXJ2YWwgd2hlbiBpdCBpcyBub3Qgb24gdGhlIHZpZXdwb3J0ICovXHJcbiAgcHJpdmF0ZSBfb25XaW5kb3dTY3JvbGxpbmcoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0b3AgPSB0aGlzLmNhcm91c2VsLm9mZnNldFRvcDtcclxuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIGNvbnN0IGhlaWdodHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBjb25zdCBjYXJvdXNlbEhlaWdodCA9IHRoaXMuY2Fyb3VzZWwub2Zmc2V0SGVpZ2h0O1xyXG4gICAgY29uc3QgaXNDYXJvdXNlbE9uU2NyZWVuID1cclxuICAgICAgdG9wIDw9IHNjcm9sbFkgKyBoZWlnaHR0IC0gY2Fyb3VzZWxIZWlnaHQgLyA0ICYmXHJcbiAgICAgIHRvcCArIGNhcm91c2VsSGVpZ2h0IC8gMiA+PSBzY3JvbGxZO1xyXG5cclxuICAgIGlmIChpc0Nhcm91c2VsT25TY3JlZW4pIHtcclxuICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJC5uZXh0KDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJC5uZXh0KDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIHN0b3JlIGRhdGEgYmFzZWQgb24gd2lkdGggb2YgdGhlIHNjcmVlbiBmb3IgdGhlIGNhcm91c2VsICovXHJcbiAgcHJpdmF0ZSBfc3RvcmVDYXJvdXNlbERhdGEoKTogdm9pZCB7XHJcbiAgICBsb2cudGltaW5nKCdzdGFydCcpO1xyXG5cclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xyXG4gICAgICB0aGlzLmRldmljZVR5cGUgPVxyXG4gICAgICAgIE5ndUNhcm91c2VsLmRldmljZVdpZHRoID49IDEyMDBcclxuICAgICAgICAgID8gJ2xnJ1xyXG4gICAgICAgICAgOiBOZ3VDYXJvdXNlbC5kZXZpY2VXaWR0aCA+PSA5OTJcclxuICAgICAgICAgID8gJ21kJ1xyXG4gICAgICAgICAgOiBOZ3VDYXJvdXNlbC5kZXZpY2VXaWR0aCA+PSA3NjhcclxuICAgICAgICAgICAgPyAnc20nXHJcbiAgICAgICAgICAgIDogJ3hzJztcclxuXHJcbiAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmlucHV0cy5ncmlkW3RoaXMuZGV2aWNlVHlwZV07XHJcbiAgICAgIHRoaXMuaXRlbVdpZHRoID0gdGhpcy5jYXJvdXNlbFdpZHRoIC8gdGhpcy5pdGVtcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBNYXRoLmNlaWwodGhpcy5jYXJvdXNlbFdpZHRoIC8gdGhpcy5pbnB1dHMuZ3JpZC5hbGwpO1xyXG4gICAgICB0aGlzLml0ZW1XaWR0aCA9IHRoaXMuaW5wdXRzLmdyaWQuYWxsO1xyXG4gICAgICB0aGlzLmRldmljZVR5cGUgPSAnYWxsJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNsaWRlSXRlbXMgPSArKHRoaXMuaW5wdXRzLnNsaWRlIDwgdGhpcy5pdGVtc1xyXG4gICAgICA/IHRoaXMuaW5wdXRzLnNsaWRlXHJcbiAgICAgIDogdGhpcy5pdGVtcyk7XHJcbiAgICB0aGlzLmxvYWQgPVxyXG4gICAgICB0aGlzLmlucHV0cy5sb2FkID49IHRoaXMuc2xpZGVJdGVtcyA/IHRoaXMuaW5wdXRzLmxvYWQgOiB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICB0aGlzLnNwZWVkID1cclxuICAgICAgdGhpcy5pbnB1dHMuc3BlZWQgJiYgdGhpcy5pbnB1dHMuc3BlZWQgPiAtMSA/IHRoaXMuaW5wdXRzLnNwZWVkIDogNDAwO1xyXG4gICAgbG9nLnRpbWluZygnZW5kJyk7XHJcbiAgICAvLyB0aGlzLl9jYXJvdXNlbFBvaW50KCk7XHJcbiAgfVxyXG5cclxuICAvKiogSW5pdCBjYXJvdXNlbCBwb2ludCAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsUG9pbnQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBOb3MgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gKHRoaXMuaXRlbXMgLSB0aGlzLnNsaWRlSXRlbXMpO1xyXG4gICAgdGhpcy5wb2ludEluZGV4ID0gTWF0aC5jZWlsKE5vcyAvIHRoaXMuc2xpZGVJdGVtcyk7XHJcbiAgICBjb25zdCBwb2ludGVycyA9IFtdO1xyXG5cclxuICAgIGlmICh0aGlzLnBvaW50SW5kZXggPiAxIHx8ICF0aGlzLmlucHV0cy5wb2ludC5oaWRlT25TaW5nbGVTbGlkZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnRJbmRleDsgaSsrKSB7XHJcbiAgICAgICAgcG9pbnRlcnMucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5wb2ludE51bWJlcnMgPSBwb2ludGVycztcclxuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk7XHJcbiAgICBpZiAodGhpcy5wb2ludEluZGV4IDw9IDEpIHtcclxuICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiAhdGhpcy5sb29wKSB7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICAvKiogY2hhbmdlIHRoZSBhY3RpdmUgcG9pbnQgaW4gY2Fyb3VzZWwgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFBvaW50QWN0aXZlcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGkgPSBNYXRoLmNlaWwodGhpcy5jdXJyZW50U2xpZGUgLyB0aGlzLnNsaWRlSXRlbXMpO1xyXG4gICAgdGhpcy5hY3RpdmVQb2ludCA9IGk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKiBzZXQgdGhlIHN0eWxlIG9mIHRoZSBjYXJvdXNlbCBiYXNlZCB0aGUgaW5wdXRzIGRhdGEgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFNpemUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRva2VuID0gdGhpcy5fZ2VuZXJhdGVJRCgpO1xyXG4gICAgbGV0IGRpc20gPSAnJztcclxuICAgIHRoaXMuc3R5bGVpZCA9IGAuJHtcclxuICAgICAgdGhpcy50b2tlblxyXG4gICAgICB9ID4gLmNhcm91c2VsLXdyYXBwZXIgPiAubmd1Y2Fyb3VzZWwgPiAubmd1LXRvdWNoLWNvbnRhaW5lciA+IC5uZ3VjYXJvdXNlbC1pdGVtc2A7XHJcblxyXG4gICAgaWYgKHRoaXMuaW5wdXRzLmN1c3RvbSA9PT0gJ2Jhbm5lcicpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgJ2Jhbm5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlucHV0cy5hbmltYXRpb24gPT09ICdsYXp5Jykge1xyXG4gICAgICBkaXNtICs9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7dHJhbnNpdGlvbjogdHJhbnNmb3JtIC42cyBlYXNlO31gO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpdGVtU3R5bGUgPSAnJztcclxuICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX3hzID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxyXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC54c31weH1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfc20gPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXHJcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLnNtfXB4fWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9tZCA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcclxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQubWR9cHh9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX2xnID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxyXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC5sZ31weH1gO1xyXG5cclxuICAgICAgaXRlbVN0eWxlID0gYEBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXske2l0ZW1XaWR0aF94c319XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpeyR7aXRlbVdpZHRoX3NtfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7JHtpdGVtV2lkdGhfbWR9fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7JHtpdGVtV2lkdGhfbGd9fWA7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF94cyA9XHJcbiAgICAgICAgdGhpcy5pbnB1dHMudHlwZSA9PT0gJ21vYmlsZSdcclxuICAgICAgICAgID8gYCR7dGhpcy5zdHlsZWlkfSAuaXRlbSB7ZmxleDogMCAwICR7OTUgL1xyXG4gICAgICAgICAgK3RoaXMuaW5wdXRzLmdyaWQueHN9JTsgd2lkdGg6ICR7OTUgLyArdGhpcy5pbnB1dHMuZ3JpZC54c30lO31gXHJcbiAgICAgICAgICA6IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXHJcbiAgICAgICAgICArdGhpcy5pbnB1dHMuZ3JpZC54c30lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC54c30lO31gO1xyXG5cclxuICAgICAgY29uc3QgaXRlbVdpZHRoX3NtID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtmbGV4OiAwIDAgJHsxMDAgL1xyXG4gICAgICArdGhpcy5pbnB1dHMuZ3JpZC5zbX0lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC5zbX0lfWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9tZCA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cclxuICAgICAgK3RoaXMuaW5wdXRzLmdyaWQubWR9JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQubWR9JX1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfbGcgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXHJcbiAgICAgICt0aGlzLmlucHV0cy5ncmlkLmxnfSU7IHdpZHRoOiAkezEwMCAvICt0aGlzLmlucHV0cy5ncmlkLmxnfSV9YDtcclxuXHJcbiAgICAgIGl0ZW1TdHlsZSA9IGBAbWVkaWEgKG1heC13aWR0aDo3NjdweCl7JHtpdGVtV2lkdGhfeHN9fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXske2l0ZW1XaWR0aF9zbX19XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6OTkycHgpeyR7aXRlbVdpZHRoX21kfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpeyR7aXRlbVdpZHRoX2xnfX1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbVN0eWxlID0gYCR7dGhpcy5zdHlsZWlkfSAuaXRlbSB7ZmxleDogMCAwICR7XHJcbiAgICAgICAgdGhpcy5pbnB1dHMuZ3JpZC5hbGxcclxuICAgICAgICB9cHg7IHdpZHRoOiAke3RoaXMuaW5wdXRzLmdyaWQuYWxsfXB4O31gO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNhcm91c2VsLCB0aGlzLnRva2VuKTtcclxuICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXHJcbiAgICAgICAgdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICduZ3V2ZXJ0aWNhbCdcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbE1haW4xLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgYCR7dGhpcy52ZXJ0aWNhbC5oZWlnaHR9cHhgXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXHJcbiAgICB0aGlzLlJUTCAmJlxyXG4gICAgIXRoaXMudmVydGljYWwuZW5hYmxlZCAmJlxyXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgJ25ndXJ0bCcpO1xyXG4gICAgdGhpcy5fY3JlYXRlU3R5bGVFbGVtKGAke2Rpc219ICR7aXRlbVN0eWxlfWApO1xyXG4gICAgdGhpcy5fc3RvcmVDYXJvdXNlbERhdGEoKTtcclxuICB9XHJcblxyXG4gIC8qKiBsb2dpYyB0byBzY3JvbGwgdGhlIGNhcm91c2VsIHN0ZXAgMSAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsU2Nyb2xsT25lKEJ0bjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBsZXQgaXRlbVNwZWVkID0gdGhpcy5zcGVlZDtcclxuICAgIGxldCB0cmFuc2xhdGVYdmFsLFxyXG4gICAgICBjdXJyZW50U2xpZGUgPSAwO1xyXG4gICAgY29uc3QgdG91Y2hNb3ZlID0gTWF0aC5jZWlsKHRoaXMuZGV4VmFsIC8gdGhpcy5pdGVtV2lkdGgpO1xyXG4gICAgdGhpcy5fc2V0U3R5bGUodGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJycpO1xyXG5cclxuICAgIGlmICh0aGlzLnBvaW50SW5kZXggPT09IDEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmIChCdG4gPT09IDAgJiYgKCghdGhpcy5sb29wICYmICF0aGlzLmlzRmlyc3QpIHx8IHRoaXMubG9vcCkpIHtcclxuICAgICAgY29uc3Qgc2xpZGUgPSB0aGlzLnNsaWRlSXRlbXMgKiB0aGlzLnBvaW50SW5kZXg7XHJcblxyXG4gICAgICBjb25zdCBjdXJyZW50U2xpZGVEID0gdGhpcy5jdXJyZW50U2xpZGUgLSB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgIGNvbnN0IE1vdmVTbGlkZSA9IGN1cnJlbnRTbGlkZUQgKyB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLml0ZW1zO1xyXG4gICAgICAgIGl0ZW1TcGVlZCA9IDQwMDtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2xpZGVJdGVtcyA+PSBNb3ZlU2xpZGUpIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSB0cmFuc2xhdGVYdmFsID0gMDtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMCk7XHJcbiAgICAgICAgaWYgKHRvdWNoTW92ZSA+IHRoaXMuc2xpZGVJdGVtcykge1xyXG4gICAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUgLSB0b3VjaE1vdmU7XHJcbiAgICAgICAgICBpdGVtU3BlZWQgPSAyMDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlIC0gdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbFR3byhCdG4sIGN1cnJlbnRTbGlkZSwgaXRlbVNwZWVkKTtcclxuICAgIH0gZWxzZSBpZiAoQnRuID09PSAxICYmICgoIXRoaXMubG9vcCAmJiAhdGhpcy5pc0xhc3QpIHx8IHRoaXMubG9vcCkpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggPD1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZSArIHRoaXMuaXRlbXMgKyB0aGlzLnNsaWRlSXRlbXMgJiZcclxuICAgICAgICAhdGhpcy5pc0xhc3RcclxuICAgICAgKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtIHRoaXMuaXRlbXM7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTGFzdCkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRyYW5zbGF0ZVh2YWwgPSAwO1xyXG4gICAgICAgIGl0ZW1TcGVlZCA9IDQwMDtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMCk7XHJcbiAgICAgICAgaWYgKHRvdWNoTW92ZSA+IHRoaXMuc2xpZGVJdGVtcykge1xyXG4gICAgICAgICAgY3VycmVudFNsaWRlID1cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLnNsaWRlSXRlbXMgKyAodG91Y2hNb3ZlIC0gdGhpcy5zbGlkZUl0ZW1zKTtcclxuICAgICAgICAgIGl0ZW1TcGVlZCA9IDIwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsVHdvKEJ0biwgY3VycmVudFNsaWRlLCBpdGVtU3BlZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGxvZ2ljIHRvIHNjcm9sbCB0aGUgY2Fyb3VzZWwgc3RlcCAyICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxTY3JvbGxUd28oXHJcbiAgICBCdG46IG51bWJlcixcclxuICAgIGN1cnJlbnRTbGlkZTogbnVtYmVyLFxyXG4gICAgaXRlbVNwZWVkOiBudW1iZXJcclxuICApOiB2b2lkIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG5cclxuICAgIGlmICh0aGlzLmRleFZhbCAhPT0gMCkge1xyXG4gICAgICBjb25zdCB2YWwgPSBNYXRoLmFicyh0aGlzLnRvdWNoLnZlbG9jaXR5KTtcclxuICAgICAgbGV0IHNvbXQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICh0aGlzLmRleFZhbCAvIHZhbCAvIHRoaXMuZGV4VmFsKSAqIChOZ3VDYXJvdXNlbC5kZXZpY2VXaWR0aCAtIHRoaXMuZGV4VmFsKVxyXG4gICAgICApO1xyXG4gICAgICBzb210ID0gc29tdCA+IGl0ZW1TcGVlZCA/IGl0ZW1TcGVlZCA6IHNvbXQ7XHJcbiAgICAgIGl0ZW1TcGVlZCA9IHNvbXQgPCAyMDAgPyAyMDAgOiBzb210O1xyXG4gICAgICB0aGlzLmRleFZhbCA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy53aXRoQW5pbSkge1xyXG4gICAgICB0aGlzLl9zZXRTdHlsZShcclxuICAgICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ3RyYW5zaXRpb24nLFxyXG4gICAgICAgIGB0cmFuc2Zvcm0gJHtpdGVtU3BlZWR9bXMgJHt0aGlzLmlucHV0cy5lYXNpbmd9YFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmlucHV0cy5hbmltYXRpb24gJiZcclxuICAgICAgdGhpcy5fY2Fyb3VzZWxBbmltYXRvcihcclxuICAgICAgICBCdG4sXHJcbiAgICAgICAgY3VycmVudFNsaWRlICsgMSxcclxuICAgICAgICBjdXJyZW50U2xpZGUgKyB0aGlzLml0ZW1zLFxyXG4gICAgICAgIGl0ZW1TcGVlZCxcclxuICAgICAgICBNYXRoLmFicyh0aGlzLmN1cnJlbnRTbGlkZSAtIGN1cnJlbnRTbGlkZSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCBgYCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLml0ZW1MZW5ndGggPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoO1xyXG4gICAgdGhpcy5fdHJhbnNmb3JtU3R5bGUoY3VycmVudFNsaWRlKTtcclxuICAgIHRoaXMuY3VycmVudFNsaWRlID0gY3VycmVudFNsaWRlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMub25Nb3ZlLmVtaXQodGhpcyk7XHJcbiAgICB9LCA0MDApO1xyXG5cclxuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk7XHJcbiAgICB0aGlzLl9jYXJvdXNlbExvYWRUcmlnZ2VyKCk7XHJcbiAgICB0aGlzLndpdGhBbmltID0gdHJ1ZTtcclxuICAgIC8vIGlmIChjdXJyZW50U2xpZGUgPT09IDEyKSB7XHJcbiAgICAvLyAgIHRoaXMuX3N3aXRjaERhdGFTb3VyY2UodGhpcy5kYXRhU291cmNlKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIC8qKiBib29sZWFuIGZ1bmN0aW9uIGZvciBtYWtpbmcgaXNGaXJzdCBhbmQgaXNMYXN0ICovXHJcbiAgcHJpdmF0ZSBfYnRuQm9vbGVhbihmaXJzdDogbnVtYmVyLCBsYXN0OiBudW1iZXIpIHtcclxuICAgIHRoaXMuaXNGaXJzdCA9ICEhZmlyc3Q7XHJcbiAgICB0aGlzLmlzTGFzdCA9ICEhbGFzdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybVN0cmluZyhncmlkOiBzdHJpbmcsIHNsaWRlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IGNvbGxlY3QgPSAnJztcclxuICAgIGNvbGxlY3QgKz0gYCR7dGhpcy5zdHlsZWlkfSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoYDtcclxuXHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtW2dyaWRdID1cclxuICAgICAgICAodGhpcy52ZXJ0aWNhbC5oZWlnaHQgLyB0aGlzLmlucHV0cy5ncmlkW2dyaWRdKSAqIHNsaWRlO1xyXG4gICAgICBjb2xsZWN0ICs9IGAwLCAtJHt0aGlzLnRyYW5zZm9ybVtncmlkXX1weCwgMGA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybVtncmlkXSA9ICgxMDAgLyB0aGlzLmlucHV0cy5ncmlkW2dyaWRdKSAqIHNsaWRlO1xyXG4gICAgICBjb2xsZWN0ICs9IGAke3RoaXMuZGlyZWN0aW9uU3ltfSR7dGhpcy50cmFuc2Zvcm1bZ3JpZF19JSwgMCwgMGA7XHJcbiAgICB9XHJcbiAgICBjb2xsZWN0ICs9IGApOyB9YDtcclxuICAgIHJldHVybiBjb2xsZWN0O1xyXG4gIH1cclxuXHJcbiAgLyoqIHNldCB0aGUgdHJhbnNmb3JtIHN0eWxlIHRvIHNjcm9sbCB0aGUgY2Fyb3VzZWwgICovXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtU3R5bGUoc2xpZGU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgbGV0IHNsaWRlQ3NzID0gJyc7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScpIHtcclxuICAgICAgc2xpZGVDc3MgPSBgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoXHJcbiAgICAgICAgJ3hzJyxcclxuICAgICAgICBzbGlkZVxyXG4gICAgICApfX1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoJ3NtJywgc2xpZGUpfSB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKCdtZCcsIHNsaWRlKX0gfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoJ2xnJywgc2xpZGUpfSB9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLmFsbCA9IHRoaXMuaW5wdXRzLmdyaWQuYWxsICogc2xpZGU7XHJcbiAgICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybS5hbGw7XHJcbiAgICAgIHNsaWRlQ3NzID0gYCR7dGhpcy5zdHlsZWlkfSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvblN5bVxyXG4gICAgICAgIH0ke3RoaXMudHJhbnNmb3JtLmFsbH1weCwgMCwgMCk7YDtcclxuICAgIH1cclxuICAgIHRoaXMuY2Fyb3VzZWxDc3NOb2RlLmlubmVySFRNTCA9IHNsaWRlQ3NzO1xyXG4gIH1cclxuXHJcbiAgLyoqIHRoaXMgd2lsbCB0cmlnZ2VyIHRoZSBjYXJvdXNlbCB0byBsb2FkIHRoZSBpdGVtcyAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsTG9hZFRyaWdnZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuaW5wdXRzLmxvYWQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLmxvYWQgPD0gdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLml0ZW1zICYmXHJcbiAgICAgIHRoaXMuY2Fyb3VzZWxMb2FkLmVtaXQodGhpcy5jdXJyZW50U2xpZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGdlbmVyYXRlIENsYXNzIGZvciBlYWNoIGNhcm91c2VsIHRvIHNldCBzcGVjaWZpYyBzdHlsZSAqL1xyXG4gIHByaXZhdGUgX2dlbmVyYXRlSUQoKTogc3RyaW5nIHtcclxuICAgIGxldCB0ZXh0ID0gJyc7XHJcbiAgICBjb25zdCBwb3NzaWJsZSA9XHJcbiAgICAgICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYG5ndWNhcm91c2VsJHt0ZXh0fWA7XHJcbiAgfVxyXG5cclxuICAvKiogaGFuZGxlIHRoZSBhdXRvIHNsaWRlICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxJbnRlcnZhbCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwgJiYgdGhpcy5sb29wKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXI0ID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAnc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm9uU2Nyb2xsaW5nKTtcclxuICAgICAgICB0aGlzLm9uU2Nyb2xsaW5nID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9vbldpbmRvd1Njcm9sbGluZygpO1xyXG4gICAgICAgIH0sIDYwMCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcGxheSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAnbW91c2VsZWF2ZScpLnBpcGUobWFwVG8oMSkpO1xyXG4gICAgICBjb25zdCBwYXVzZSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAnbW91c2VlbnRlcicpLnBpcGUobWFwVG8oMCkpO1xyXG5cclxuICAgICAgY29uc3QgdG91Y2hQbGF5JCA9IGZyb21FdmVudChjb250YWluZXIsICd0b3VjaHN0YXJ0JykucGlwZShtYXBUbygxKSk7XHJcbiAgICAgIGNvbnN0IHRvdWNoUGF1c2UkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ3RvdWNoZW5kJykucGlwZShtYXBUbygwKSk7XHJcblxyXG4gICAgICBjb25zdCBpbnRlcnZhbCQgPSBpbnRlcnZhbCh0aGlzLmlucHV0cy5pbnRlcnZhbC50aW1pbmcpLnBpcGUobWFwVG8oMSkpO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbEludCA9IG1lcmdlKFxyXG4gICAgICAgICAgcGxheSQsXHJcbiAgICAgICAgICB0b3VjaFBsYXkkLFxyXG4gICAgICAgICAgcGF1c2UkLFxyXG4gICAgICAgICAgdG91Y2hQYXVzZSQsXHJcbiAgICAgICAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIHN0YXJ0V2l0aCgxKSxcclxuICAgICAgICAgICAgc3dpdGNoTWFwKHZhbCA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0hvdmVyZWQgPSAhdmFsO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgICAgIHJldHVybiB2YWwgPyBpbnRlcnZhbCQgOiBlbXB0eSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZSgxKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9LCB0aGlzLmludGVydmFsLmluaXRpYWxEZWxheSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGVJdGVtSW5kZXhDb250ZXh0QW5pKCkge1xyXG4gICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lcjtcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCByZW5kZXJJbmRleCA9IDAsIGNvdW50ID0gdmlld0NvbnRhaW5lci5sZW5ndGg7XHJcbiAgICAgIHJlbmRlckluZGV4IDwgY291bnQ7XHJcbiAgICAgIHJlbmRlckluZGV4KytcclxuICAgICkge1xyXG4gICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQocmVuZGVySW5kZXgpIGFzIGFueTtcclxuICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgIGNvbnRleHQuY291bnQgPSBjb3VudDtcclxuICAgICAgY29udGV4dC5maXJzdCA9IHJlbmRlckluZGV4ID09PSAwO1xyXG4gICAgICBjb250ZXh0Lmxhc3QgPSByZW5kZXJJbmRleCA9PT0gY291bnQgLSAxO1xyXG4gICAgICBjb250ZXh0LmV2ZW4gPSByZW5kZXJJbmRleCAlIDIgPT09IDA7XHJcbiAgICAgIGNvbnRleHQub2RkID0gIWNvbnRleHQuZXZlbjtcclxuICAgICAgY29udGV4dC5pbmRleCA9IHJlbmRlckluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGFuaW1hdGUgdGhlIGNhcm91c2VsIGl0ZW1zICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxBbmltYXRvcihcclxuICAgIGRpcmVjdGlvbjogbnVtYmVyLFxyXG4gICAgc3RhcnQ6IG51bWJlcixcclxuICAgIGVuZDogbnVtYmVyLFxyXG4gICAgc3BlZWQ6IG51bWJlcixcclxuICAgIGxlbmd0aDogbnVtYmVyLFxyXG4gICAgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lclxyXG4gICk6IHZvaWQge1xyXG4gICAgbGV0IHZhbCA9IGxlbmd0aCA8IDUgPyBsZW5ndGggOiA1O1xyXG4gICAgdmFsID0gdmFsID09PSAxID8gMyA6IHZhbDtcclxuICAgIGNvbnN0IGNvbGxlY3RJbmRleCA9IFtdO1xyXG5cclxuICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0IC0gMTsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgY29sbGVjdEluZGV4LnB1c2goaSk7XHJcbiAgICAgICAgdmFsID0gdmFsICogMjtcclxuICAgICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQoaSkgYXMgYW55O1xyXG4gICAgICAgIGlmICh2aWV3UmVmKSB7XHJcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcclxuICAgICAgICAgIGNvbnRleHQuYW5pbWF0ZSA9IHt2YWx1ZTogdHJ1ZSwgcGFyYW1zOiB7ZGlzdGFuY2U6IHZhbH19O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IGVuZCAtIDE7IGkgPj0gc3RhcnQgLSAxOyBpLS0pIHtcclxuICAgICAgICBjb2xsZWN0SW5kZXgucHVzaChpKTtcclxuICAgICAgICB2YWwgPSB2YWwgKiAyO1xyXG4gICAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChpKSBhcyBhbnk7XHJcbiAgICAgICAgaWYgKHZpZXdSZWYpIHtcclxuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xyXG4gICAgICAgICAgY29udGV4dC5hbmltYXRlID0ge3ZhbHVlOiB0cnVlLCBwYXJhbXM6IHtkaXN0YW5jZTogLXZhbH19O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5fcmVtb3ZlQW5pbWF0aW9ucyhjb2xsZWN0SW5kZXgpO1xyXG4gICAgfSwgc3BlZWQgKiAwLjcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmVtb3ZlQW5pbWF0aW9ucyhpbmRleHM6IG51bWJlcltdKSB7XHJcbiAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyO1xyXG4gICAgaW5kZXhzLmZvckVhY2goaSA9PiB7XHJcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChpKSBhcyBhbnk7XHJcbiAgICAgIGlmICh2aWV3UmVmKSB7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgICAgY29udGV4dC5hbmltYXRlID0ge3ZhbHVlOiBmYWxzZSwgcGFyYW1zOiB7ZGlzdGFuY2U6IDB9fTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKiBTaG9ydCBmb3JtIGZvciBzZXRFbGVtZW50U3R5bGUgKi9cclxuICBwcml2YXRlIF9zZXRTdHlsZShlbDogYW55LCBwcm9wOiBhbnksIHZhbDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbCwgcHJvcCwgdmFsKTtcclxuICB9XHJcblxyXG4gIC8qKiBGb3IgZ2VuZXJhdGluZyBzdHlsZSB0YWcgKi9cclxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUVsZW0oZGF0YXM/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHN0eWxlSXRlbSA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICBpZiAoZGF0YXMpIHtcclxuICAgICAgY29uc3Qgc3R5bGVUZXh0ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlVGV4dChkYXRhcyk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHN0eWxlSXRlbSwgc3R5bGVUZXh0KTtcclxuICAgIH1cclxuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuY2Fyb3VzZWwsIHN0eWxlSXRlbSk7XHJcbiAgICByZXR1cm4gc3R5bGVJdGVtO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICduZ3UtaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICduZ3UtaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ25ndS1pdGVtLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUl0ZW1Db21wb25lbnQge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXRlbScpIGNsYXNzZXMgPSB0cnVlO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ25ndS10aWxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ25ndS10aWxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbmd1LXRpbGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1VGlsZUNvbXBvbmVudCB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pdGVtJykgY2xhc3NlcyA9IHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsT3V0bGV0LFxyXG4gIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlLCBOZ3VDYXJvdXNlbFdyYXBwZXJEaXJlY3RpdmVcclxufSBmcm9tICcuL25ndS1jYXJvdXNlbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOZ3VJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3UtaXRlbS9uZ3UtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ3VDYXJvdXNlbCB9IGZyb20gJy4vbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3VUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3UtdGlsZS9uZ3UtdGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3VDYXJvdXNlbFNlcnZpY2UgfSBmcm9tICcuL25ndS1jYXJvdXNlbC5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTmd1Q2Fyb3VzZWwsXHJcbiAgICBOZ3VJdGVtQ29tcG9uZW50LFxyXG4gICAgTmd1VGlsZUNvbXBvbmVudCxcclxuICAgIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsT3V0bGV0XHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5ndUNhcm91c2VsLFxyXG4gICAgTmd1SXRlbUNvbXBvbmVudCxcclxuICAgIE5ndVRpbGVDb21wb25lbnQsXHJcbiAgICBOZ3VDYXJvdXNlbFBvaW50RGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxJdGVtRGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbFdyYXBwZXJEaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbE91dGxldFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBOZ3VDYXJvdXNlbFNlcnZpY2VcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE1vZHVsZSB7XHJcbn1cclxuIl0sIm5hbWVzIjpbImludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVFLFlBQ1MsUUFBUSxJQUFJLEtBQUssRUFBRSxFQUNuQixXQUFXLElBQUksUUFBUSxFQUFFLEVBQ3pCQSxXQUEyQixFQUMzQixZQUFZLElBQUksWUFBWSxFQUFFLEVBQzlCLE1BQWtCLEVBQ2xCLFlBQTJCLEVBQzNCLFVBQXVCLEVBQ3ZCLE9BQU8sT0FBTyxFQUNkLFFBQVEsRUFBRSxFQUNWLFFBQVEsQ0FBQyxFQUNULE9BQU8sQ0FBQyxFQUNMLGlCQUFpQixDQUFDLEVBQ3JCLFlBQVksQ0FBQyxFQUNiLGFBQWEsQ0FBQyxFQUNkLGVBQWUsQ0FBQyxFQUNoQixhQUFhLENBQUMsRUFDZCxlQUFlLENBQUMsRUFDaEIsU0FBUyw0QkFBNEIsRUFDckMsUUFBUSxHQUFHLEVBQ1gsT0FBTyxLQUFLLEVBQ1osU0FBUyxDQUFDLEVBQ1YsaUJBQWlCLENBQUMsRUFDbEIsUUFBUSxLQUFLLEVBQ2IsVUFBVSxJQUFJLEVBQ2QsU0FBUyxLQUFLLEVBQ2QsTUFBTSxLQUFLLEVBQ1gsUUFBUSxJQUFJLEVBQ1osV0FBVyxDQUFDO1FBM0JaLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsYUFBUSxHQUFSQSxXQUFRLENBQW1CO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQXFCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDM0IsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2QixTQUFJLEdBQUosSUFBSSxDQUFVO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUNWLFVBQUssR0FBTCxLQUFLLENBQUk7UUFDVCxTQUFJLEdBQUosSUFBSSxDQUFJO1FBQ0wsbUJBQWMsR0FBZCxjQUFjLENBQUk7UUFDckIsY0FBUyxHQUFULFNBQVMsQ0FBSTtRQUNiLGVBQVUsR0FBVixVQUFVLENBQUk7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBSTtRQUNoQixlQUFVLEdBQVYsVUFBVSxDQUFJO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQUk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBK0I7UUFDckMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixXQUFNLEdBQU4sTUFBTSxDQUFJO1FBQ1YsbUJBQWMsR0FBZCxjQUFjLENBQUk7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFlBQU8sR0FBUCxPQUFPLENBQU87UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFJO0tBQ2pCOztBQTlCVSw0QkFBVyxHQUFHLENBQUMsQ0FBQzs7Q0F1Qy9COztDQU1BOztDQUtBOztDQU1BOzs7Ozs7Ozs7SUFHQyxZQUNTLEtBQUssQ0FBQyxFQUNOLEtBQUssQ0FBQyxFQUNOLEtBQUssQ0FBQyxFQUNOLEtBQUssQ0FBQyxFQUNOLE1BQU0sQ0FBQztRQUpQLE9BQUUsR0FBRixFQUFFLENBQUk7UUFDTixPQUFFLEdBQUYsRUFBRSxDQUFJO1FBQ04sT0FBRSxHQUFGLEVBQUUsQ0FBSTtRQUNOLE9BQUUsR0FBRixFQUFFLENBQUk7UUFDTixRQUFHLEdBQUgsR0FBRyxDQUFJO0tBQ1o7Q0FDTDs7Q0FtQkE7Ozs7QUEyQkQ7Ozs7SUFhRSxZQUFZLElBQU87UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7S0FDdkI7Q0FDRjs7Ozs7O0FDaklEO0lBU0U7S0FFQzs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBMEI7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDMUI7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ3RCOzs7WUFoQkYsVUFBVTs7Ozs7Ozs7QUNIWDs7O1lBRUMsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsbUJBQW1CO2FBQzlCOztBQU9EOzs7WUFKQyxTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7O0FBYUQ7OztZQUpDLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7QUFVRDs7O1lBSkMsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7OztBQU9EOzs7O0lBR0UsWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FBSTs7O1lBUGxELFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7O1lBdEMrQixXQUFXOztBQWlEM0M7QUFDQTs7OztJQUNFLFlBQW1CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtLQUFJOzs7WUFOdkQsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUscUJBQXFCO2FBQ2hDOzs7WUFoRDRDLGdCQUFnQjs7Ozs7O0lBMkQzRCxZQUFtQixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtLQUFJOzs7WUFMakQsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsc0JBQXNCO2FBQ2pDOzs7WUF6RG1CLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNxQzVCLE1BQU87SUFDUCxRQUFLO0lBQ0wsVUFBTztJQUNQLE9BQUk7SUFDSixRQUFLOzs7Ozs7O0FBUVA7Ozs7SUFpQkUsWUFBb0IsTUFBZTtRQUFmLFdBQU0sR0FBTixNQUFNLENBQVM7S0FDbEM7Ozs7OztJQU1ELE9BQU8sb0JBQW9CO1FBQ3pCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztLQUNqQzs7OztJQUVELFFBQVE7UUFDTixNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUN2Qjs7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQVcsRUFBRSxVQUFtQixLQUFLOztjQUNwQyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUU7O2NBRWQsSUFBSSxHQUFVLENBQUMsR0FBRyxDQUFDO1FBRXpCLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTs7a0JBQ2pCLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7WUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzQjtZQUNELE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO1NBQy9CO1FBQ0QsTUFBTSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDNUM7S0FDRjs7Ozs7OztJQUtELEtBQUssQ0FBQyxHQUFHLE9BQWM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDaEQ7Ozs7Ozs7SUFNRCxJQUFJLENBQUMsR0FBRyxPQUFjO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2hEOzs7Ozs7O0lBTUQsSUFBSSxDQUFDLEdBQUcsT0FBYztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNuRDs7Ozs7OztJQU1ELEtBQUssQ0FBQyxHQUFHLE9BQWM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDbEQ7Ozs7Ozs7SUFFTyxHQUFHLENBQUMsSUFBYyxFQUFFLEtBQWUsRUFBRSxPQUFjO1FBQ3pELElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7O2tCQUNuQixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPO1lBQzdFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hHO0tBQ0Y7Ozs7OztBQW5GTSxZQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzs7OztBQUt2QixjQUFPLEdBQWdCLEVBQUUsQ0FBQztBQUUxQixtQkFBWSxHQUFTLElBQUksQ0FBQztBQUVuQixnQkFBUyxHQUFRLEVBQUUsQ0FBQzs7Ozs7O0FDL0RwQztNQTBDTSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDOzs7Ozs7QUFjckMsaUJBQTRCLFNBQVEsZ0JBQWdCOzs7Ozs7Ozs7O0lBa0RsRCxZQUNVLEdBQWUsRUFDZixTQUFvQixFQUNwQixRQUF5QixFQUNKLFVBQWtCLEVBQ3ZDLEdBQXNCLEVBQ3RCLGVBQW1DO1FBRTNDLEtBQUssRUFBRSxDQUFDO1FBUEEsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDSixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQWxEN0MsY0FBUyxHQUFHLEtBQUssQ0FBQztRQVFsQixpQkFBWSxHQUFlLEVBQUUsQ0FBQzs7UUFRdkIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO1FBTzNDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFJaEIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBU2xDLHlCQUFvQixHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFpQm5ELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3hDOzs7O0lBSUQsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7OztJQUVELElBQUksVUFBVSxDQUFDLElBQVM7UUFDdEIsSUFBSSxJQUFJLEVBQUU7O1lBRVIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO0tBQ0Y7Ozs7Ozs7SUFNRCxJQUNJLE9BQU8sQ0FBQyxHQUFlO1FBQ3pCLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25DLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUNqRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQzNCLENBQUM7U0FDSDtLQUNGOzs7Ozs7O0lBS0QsSUFDSSxPQUFPLENBQUMsR0FBZTtRQUN6QixJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQyxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFDakUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUMzQixDQUFDO1NBQ0g7S0FDRjs7Ozs7Ozs7SUFRRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7O0lBRUQsSUFBSSxPQUFPLENBQUMsRUFBc0I7UUFDaEMsSUFDRSxTQUFTLEVBQUU7WUFDWCxFQUFFLElBQUksSUFBSTtZQUNWLE9BQU8sRUFBRSxLQUFLLFVBQVU7K0JBQ25CLE9BQU8sRUFBQTsrQkFDUCxPQUFPLENBQUMsSUFBSSxFQUFBLEVBQ2pCO1lBQ0EsT0FBTyxDQUFDLElBQUksQ0FDViw0Q0FBNEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUNsRSxDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztLQUN0Qjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRO2FBQzdCLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDUixNQUFNLENBQUMsQ0FBQyxFQUFVLEVBQUUsSUFBUztZQUM1QixPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDdEUsQ0FBQyxDQUFDO0tBQ047Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFM0QsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdkMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7S0FDRjs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7O1FBSS9DLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO2dCQUMxQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLO2dCQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0tBQ0Y7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN6Qjs7Ozs7O0lBSU0sS0FBSyxDQUFDLGdCQUEwQjtRQUNyQyxnQkFBZ0IsS0FBSyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFFcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtLQUNGOzs7Ozs7O0lBR00sTUFBTSxDQUFDLEtBQWEsRUFBRSxnQkFBMEI7O1FBRXJELGdCQUFnQixLQUFLLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTs7Z0JBQ3JELFlBQVk7O2tCQUNWLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUU5QyxRQUFRLEtBQUs7Z0JBQ1gsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QixZQUFZLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ3ZDLE1BQU07Z0JBQ1IsS0FBSyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDbkQsTUFBTTtnQkFDUjtvQkFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdkIsWUFBWSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQzFDO1lBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pEO0tBQ0Y7Ozs7SUFHRCxXQUFXOztRQUVULElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUd2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztrQkFDckIsR0FBRyxHQUFHLFdBQVcsQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztTQUMxQjtLQUNGOzs7OztJQUVPLGlCQUFpQixDQUFDLFVBQWU7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQzlCO0tBQ0Y7Ozs7OztJQUVPLGlCQUFpQixDQUN2QixJQUFXLEVBQ1gsZ0JBQWtDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYTtRQUdoRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQ2hDLENBQ0UsSUFBK0IsRUFDL0IscUJBQTZCLEVBQzdCLFlBQW9COztrQkFFZCxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsWUFBWSxDQUFDO1lBQy9ELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQUU7O3NCQUN6QixPQUFPLEdBQUcsSUFBSSx3QkFBd0IsQ0FBTSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3JFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO2dCQUM3QixhQUFhLENBQUMsa0JBQWtCLENBQzlCLElBQUksQ0FBQyxRQUFRLEVBQ2IsT0FBTyxFQUNQLFlBQVksQ0FDYixDQUFDO2FBQ0g7aUJBQU0sSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUNoQyxhQUFhLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQzVDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN2QjtpQkFBTTs7c0JBQ0MsSUFBSSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JELGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQ3hDO1NBQ0YsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFFL0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0tBQ0Y7Ozs7OztJQU1PLHVCQUF1Qjs7Y0FDdkIsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYTtRQUNwRCxLQUNFLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFDakQsV0FBVyxHQUFHLEtBQUssRUFDbkIsV0FBVyxFQUFFLEVBQ2I7O2tCQUNNLE9BQU8sc0JBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBTzs7a0JBQy9DLE9BQU8sc0JBQUcsT0FBTyxDQUFDLE9BQU8sRUFBTztZQUN0QyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUV0QixPQUFPLENBQUMsS0FBSyxHQUFHLFdBQVcsS0FBSyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1NBQzdCO0tBQ0Y7Ozs7OztJQUVPLFdBQVcsQ0FBQyxJQUFTLEVBQUUsQ0FBUztRQUN0QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQzdCOztjQUVLLE9BQU8sR0FDWCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsZUFBZTtRQUV0QixPQUFPLE9BQU8sQ0FBQztLQUNoQjs7OztJQUVPLHFCQUFxQjs7WUFDdkIsVUFBeUM7UUFFN0MsSUFBSSxJQUFJLENBQUMsV0FBVyxZQUFZLFVBQVUsRUFBRTtZQUMxQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMvQjthQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDMUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbkM7UUFFRCxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVO2lCQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2lCQUMxQyxTQUFTLENBQUMsSUFBSTtnQkFDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3JCLENBQUMsQ0FBQztTQUNOO0tBQ0Y7Ozs7SUFFTyxnQkFBZ0I7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksNEJBQTRCLENBQUM7UUFDeEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUTtZQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssUUFBUTtrQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO2tCQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDO1FBRXBCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDcEQ7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSztZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLFdBQVc7a0JBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU87a0JBQ3pCLElBQUksQ0FBQztRQUVYLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN0Qjs7Ozs7SUFFTyxXQUFXLENBQUMsS0FBVTtRQUM1QixZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1lBQ3pCLElBQUksV0FBVyxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdkUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDM0I7WUFDRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUU3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ1Q7Ozs7SUFFRCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztLQUN4RTs7OztJQUVELElBQUksYUFBYTtRQUNmLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QjtRQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7S0FDNUI7Ozs7O0lBR08sTUFBTTtRQUNaLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7O2tCQUNmLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztZQUNoRSxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsb0JBQW9CLEVBQUMsQ0FBQyxDQUFDO1lBRXBFLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBTztnQkFDaEMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7OztnQkFHNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDeEUsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDekIsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFPO29CQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztpQkFDcEMsQ0FBQyxDQUFDO2dCQUNILFVBQVUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBTztvQkFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQ3JDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLFVBQVUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBTztvQkFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQ3BDLENBQUMsQ0FBQztnQkFDSCxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQU87b0JBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUNyQyxDQUFDLENBQUM7YUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJELFVBQVUsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRTs7O2dCQUd4QyxFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQy9CLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7Ozs7SUFHTyxjQUFjLENBQUMsQ0FBUyxFQUFFLEVBQU87OztRQUl2QyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFFRCxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFDekQsSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTTtRQUMzQixJQUFJO1lBQ0YsSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZO2tCQUN0QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7cUJBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzswQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNOzBCQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDO29CQUN4QixHQUFHO2tCQUNELElBQUksQ0FBQztRQUVYLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0tBRS9COzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxDQUFTLEVBQUUsSUFBWTs7Y0FDMUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxHQUFHLFNBQVM7UUFDbkQsSUFBSSxDQUFDLGNBQWM7WUFDakIsQ0FBQyxLQUFLLFNBQVMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztLQUM3RTs7OztJQUVPLHNCQUFzQjtRQUU1QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCOztjQUNLLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksR0FBRyxHQUFHLEdBQUcsSUFBSTs7WUFFL0MsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYTtRQUVuRixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO1lBQzlCLFlBQVksR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLEdBQUcsQ0FBQztTQUMxRDtRQUVELElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUM7U0FDcEM7UUFHRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQ3BDLFdBQVcsRUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Y0FDakIsa0JBQWtCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLE1BQU07Y0FDdEUsZUFBZSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxTQUFTLENBQzNFLENBQUM7S0FDSDs7Ozs7SUFHTyxrQkFBa0I7O2NBQ2xCLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7O2NBQzdCLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTzs7Y0FDeEIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXOztjQUM1QixjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZOztjQUMzQyxrQkFBa0IsR0FDdEIsR0FBRyxJQUFJLE9BQU8sR0FBRyxPQUFPLEdBQUcsY0FBYyxHQUFHLENBQUM7WUFDN0MsR0FBRyxHQUFHLGNBQWMsR0FBRyxDQUFDLElBQUksT0FBTztRQUVyQyxJQUFJLGtCQUFrQixFQUFFO1lBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkM7S0FDRjs7Ozs7SUFHTyxrQkFBa0I7UUFDeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVwQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO1lBQzlCLElBQUksQ0FBQyxVQUFVO2dCQUNiLFdBQVcsQ0FBQyxXQUFXLElBQUksSUFBSTtzQkFDM0IsSUFBSTtzQkFDSixXQUFXLENBQUMsV0FBVyxJQUFJLEdBQUc7MEJBQzlCLElBQUk7MEJBQ0osV0FBVyxDQUFDLFdBQVcsSUFBSSxHQUFHOzhCQUM1QixJQUFJOzhCQUNKLElBQUksQ0FBQztZQUViLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2xEO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSztjQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7Y0FDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJO1lBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNFLElBQUksQ0FBQyxLQUFLO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3hFLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7O0tBRW5COzs7OztJQUdPLGNBQWM7O2NBQ2QsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs7Y0FDN0MsUUFBUSxHQUFHLEVBQUU7UUFFbkIsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFO1lBQy9ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztRQUM3QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDeEI7U0FDRjs7S0FFRjs7Ozs7SUFHTyxxQkFBcUI7O2NBQ3JCLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3pCOzs7OztJQUdPLGFBQWE7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7O1lBQzVCLElBQUksR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUNiLElBQUksQ0FBQyxLQUNMLGlGQUFpRixDQUFDO1FBRXBGLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUNwQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyw0Q0FBNEMsQ0FBQztTQUNyRTs7WUFFRyxTQUFTLEdBQUcsRUFBRTtRQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFOztrQkFDbkIsWUFBWSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8scUJBQXFCLElBQUksQ0FBQyxRQUFRO2lCQUNuRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUs7O2tCQUMvQixZQUFZLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxxQkFBcUIsSUFBSSxDQUFDLFFBQVE7aUJBQ25FLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSzs7a0JBQy9CLFlBQVksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLHFCQUFxQixJQUFJLENBQUMsUUFBUTtpQkFDbkUsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLOztrQkFDL0IsWUFBWSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8scUJBQXFCLElBQUksQ0FBQyxRQUFRO2lCQUNuRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUs7WUFFckMsU0FBUyxHQUFHLDRCQUE0QixZQUFZOytDQUNYLFlBQVk7K0NBQ1osWUFBWTtnREFDWCxZQUFZLEdBQUcsQ0FBQztTQUMzRDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7O2tCQUMvQixZQUFZLEdBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVE7a0JBQ3pCLEdBQUcsSUFBSSxDQUFDLE9BQU8scUJBQXFCLEVBQUU7b0JBQ3hDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSztrQkFDN0QsR0FBRyxJQUFJLENBQUMsT0FBTyxxQkFBcUIsR0FBRztvQkFDekMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLOztrQkFFOUQsWUFBWSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sdUJBQXVCLEdBQUc7Z0JBQzlELENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSTs7a0JBQ3pELFlBQVksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLHVCQUF1QixHQUFHO2dCQUM5RCxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUk7O2tCQUN6RCxZQUFZLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyx1QkFBdUIsR0FBRztnQkFDOUQsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJO1lBRS9ELFNBQVMsR0FBRyw0QkFBNEIsWUFBWTsrQ0FDWCxZQUFZOytDQUNaLFlBQVk7Z0RBQ1gsWUFBWSxHQUFHLENBQUM7U0FDM0Q7YUFBTTtZQUNMLFNBQVMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLHFCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUNqQixjQUFjLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQzVDO1FBR0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFDcEMsYUFBYSxDQUNkLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQ2hDLFFBQVEsRUFDUixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQzVCLENBQUM7U0FDSDs7UUFHRCxJQUFJLENBQUMsR0FBRztZQUNSLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPO1lBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDM0I7Ozs7OztJQUdPLGtCQUFrQixDQUFDLEdBQVc7O1lBQ2hDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSzs7WUFDdEIsYUFBYTs7WUFDZixZQUFZLEdBQUcsQ0FBQzs7Y0FDWixTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV0RSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE9BQU87U0FDUjthQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFOztrQkFDOUQsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVU7O2tCQUV6QyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVTs7a0JBQ25ELFNBQVMsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVU7WUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTtnQkFDM0IsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ25ELFNBQVMsR0FBRyxHQUFHLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUU7Z0JBQ3ZDLFlBQVksR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDL0IsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO29CQUM3QyxTQUFTLEdBQUcsR0FBRyxDQUFDO2lCQUNqQjtxQkFBTTtvQkFDTCxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2lCQUNwRDthQUNGO1lBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDdkQ7YUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuRSxJQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTTtnQkFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVO2dCQUNoRCxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ1o7Z0JBQ0EsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDdEIsWUFBWSxHQUFHLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLFNBQVMsR0FBRyxHQUFHLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUMvQixZQUFZO3dCQUNWLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN0RSxTQUFTLEdBQUcsR0FBRyxDQUFDO2lCQUNqQjtxQkFBTTtvQkFDTCxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2lCQUNwRDthQUNGO1lBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDdkQ7S0FDRjs7Ozs7Ozs7SUFHTyxrQkFBa0IsQ0FDeEIsR0FBVyxFQUNYLFlBQW9CLEVBQ3BCLFNBQWlCOztRQUlqQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOztrQkFDZixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7Z0JBQ3JDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUNuQixDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQzVFO1lBQ0QsSUFBSSxHQUFHLElBQUksR0FBRyxTQUFTLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQztZQUMzQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLENBQ1osSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFDcEMsWUFBWSxFQUNaLGFBQWEsU0FBUyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQ2pELENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7Z0JBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FDcEIsR0FBRyxFQUNILFlBQVksR0FBRyxDQUFDLEVBQ2hCLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUN6QixTQUFTLEVBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxDQUMzQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDeEU7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsVUFBVSxDQUFDO1lBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOzs7O0tBSXRCOzs7Ozs7O0lBR08sV0FBVyxDQUFDLEtBQWEsRUFBRSxJQUFZO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDdEI7Ozs7OztJQUVPLGdCQUFnQixDQUFDLElBQVksRUFBRSxLQUFhOztZQUM5QyxPQUFPLEdBQUcsRUFBRTtRQUNoQixPQUFPLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyw0QkFBNEIsQ0FBQztRQUV2RCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNsQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQztZQUMxRCxPQUFPLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDL0M7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDO1lBQzlELE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxJQUFJLE1BQU0sQ0FBQztRQUNsQixPQUFPLE9BQU8sQ0FBQztLQUNoQjs7Ozs7O0lBR08sZUFBZSxDQUFDLEtBQWE7O1lBQy9CLFFBQVEsR0FBRyxFQUFFO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7WUFDOUIsUUFBUSxHQUFHLDhCQUE4QixJQUFJLENBQUMsZ0JBQWdCLENBQzVELElBQUksRUFDSixLQUFLLENBQ047bUNBQzRCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO21DQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztvQ0FDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ3RFO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ2xELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekMsUUFBUSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sNkJBQ3hCLElBQUksQ0FBQyxZQUNMLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFlBQVksQ0FBQztTQUNyQztRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztLQUMzQzs7Ozs7SUFHTyxvQkFBb0I7UUFDMUIsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUs7Z0JBQ3BFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMzQztLQUNGOzs7OztJQUdPLFdBQVc7O1lBQ2IsSUFBSSxHQUFHLEVBQUU7O2NBQ1AsUUFBUSxHQUNaLGdFQUFnRTtRQUVsRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLElBQUksSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsT0FBTyxjQUFjLElBQUksRUFBRSxDQUFDO0tBQzdCOzs7OztJQUdPLGlCQUFpQjs7Y0FDakIsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYTtRQUNsRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7Z0JBQ3pELFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO29CQUM1QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztpQkFDM0IsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNULENBQUMsQ0FBQzs7a0JBRUcsS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7a0JBQ3pELE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O2tCQUUxRCxVQUFVLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztrQkFDOUQsV0FBVyxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7a0JBRTdELFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV0RSxVQUFVLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQ3RCLEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsRUFDWCxJQUFJLENBQUMsb0JBQW9CLENBQzFCO3FCQUNFLElBQUksQ0FDSCxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ1osU0FBUyxDQUFDLEdBQUc7b0JBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDeEIsT0FBTyxHQUFHLEdBQUcsU0FBUyxHQUFHLEtBQUssRUFBRSxDQUFDO2lCQUNsQyxDQUFDLENBQ0g7cUJBQ0EsU0FBUyxDQUFDLEdBQUc7b0JBQ1osSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM1QixDQUFDLENBQUM7YUFDTixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEM7S0FDRjs7OztJQUVPLDBCQUEwQjs7Y0FDMUIsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYTtRQUNwRCxLQUNFLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFDakQsV0FBVyxHQUFHLEtBQUssRUFDbkIsV0FBVyxFQUFFLEVBQ2I7O2tCQUNNLE9BQU8sc0JBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBTzs7a0JBQy9DLE9BQU8sc0JBQUcsT0FBTyxDQUFDLE9BQU8sRUFBTztZQUN0QyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUN0QixPQUFPLENBQUMsS0FBSyxHQUFHLFdBQVcsS0FBSyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1NBQzdCO0tBQ0Y7Ozs7Ozs7Ozs7O0lBR08saUJBQWlCLENBQ3ZCLFNBQWlCLEVBQ2pCLEtBQWEsRUFDYixHQUFXLEVBQ1gsS0FBYSxFQUNiLE1BQWMsRUFDZCxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhOztZQUUxQyxHQUFHLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQztRQUNqQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDOztjQUNwQixZQUFZLEdBQUcsRUFBRTtRQUV2QixJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDOztzQkFDUixPQUFPLHNCQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQU87Z0JBQzNDLElBQUksT0FBTyxFQUFFOzswQkFDTCxPQUFPLHNCQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQU87b0JBQ3RDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsRUFBQyxDQUFDO2lCQUMxRDthQUNGO1NBQ0Y7YUFBTTtZQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7O3NCQUNSLE9BQU8sc0JBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBTztnQkFDM0MsSUFBSSxPQUFPLEVBQUU7OzBCQUNMLE9BQU8sc0JBQUcsT0FBTyxDQUFDLE9BQU8sRUFBTztvQkFDdEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsQ0FBQztpQkFDM0Q7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixVQUFVLENBQUM7WUFDVCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdEMsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDakI7Ozs7O0lBRU8saUJBQWlCLENBQUMsTUFBZ0I7O2NBQ2xDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWE7UUFDcEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztrQkFDUixPQUFPLHNCQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQU87WUFDM0MsSUFBSSxPQUFPLEVBQUU7O3NCQUNMLE9BQU8sc0JBQUcsT0FBTyxDQUFDLE9BQU8sRUFBTztnQkFDdEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBQyxFQUFDLENBQUM7YUFDekQ7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3pCOzs7Ozs7OztJQUdPLFNBQVMsQ0FBQyxFQUFPLEVBQUUsSUFBUyxFQUFFLEdBQVE7UUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN4Qzs7Ozs7O0lBR08sZ0JBQWdCLENBQUMsS0FBYzs7Y0FDL0IsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUN2RCxJQUFJLEtBQUssRUFBRTs7a0JBQ0gsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sU0FBUyxDQUFDO0tBQ2xCOzs7WUEzN0JGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHFvQkFBMEM7Z0JBRTFDLGFBQWEsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNuQyxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDL0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7WUE3Q0MsVUFBVTtZQWNWLFNBQVM7WUFOVCxlQUFlO1lBNkY0QixNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVztZQTFHckIsaUJBQWlCO1lBNEJWLGtCQUFrQjs7OzBCQWtDeEIsU0FBUyxTQUFDLGlCQUFpQjsrQkFFM0IsU0FBUyxTQUFDLDJCQUEyQjtxQkFTckMsTUFBTSxTQUFDLFFBQVE7d0JBR2YsZUFBZSxTQUFDLHVCQUF1QjtxQkFNdkMsS0FBSyxTQUFDLFFBQVE7MkJBRWQsTUFBTSxTQUFDLGNBQWM7NEJBRXJCLFNBQVMsU0FBQyxhQUFhLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO2dDQUczQyxTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDOzZCQUdqRCxTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO3lCQXdCOUMsS0FBSyxTQUFDLFlBQVk7c0JBZ0JsQixZQUFZLFNBQUMsd0JBQXdCLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO3NCQWF6RCxZQUFZLFNBQUMsd0JBQXdCLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO3NCQWdCekQsS0FBSzs7Ozs7OztBQ3RLUjtJQUVBO1FBTzZCLFlBQU8sR0FBRyxJQUFJLENBQUM7S0FDM0M7OztZQVJBLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLHlDQUFzQzs7YUFFdkM7OztzQkFFRSxXQUFXLFNBQUMsWUFBWTs7Ozs7OztBQ1QzQjtJQUVBO1FBTzZCLFlBQU8sR0FBRyxJQUFJLENBQUM7S0FDM0M7OztZQVJBLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLDZFQUFzQzs7YUFFdkM7OztzQkFFRSxXQUFXLFNBQUMsWUFBWTs7Ozs7OztBQ1QzQjs7O1lBZUMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLHlCQUF5QjtvQkFDekIsd0JBQXdCO29CQUN4Qix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtvQkFDeEIsdUJBQXVCO29CQUN2QiwyQkFBMkI7b0JBQzNCLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLHlCQUF5QjtvQkFDekIsd0JBQXdCO29CQUN4Qix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtvQkFDeEIsdUJBQXVCO29CQUN2QiwyQkFBMkI7b0JBQzNCLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGtCQUFrQjtpQkFDbkI7YUFDRjs7Ozs7Ozs7Ozs7Ozs7OyJ9