/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Inject, Input, isDevMode, IterableDiffers, Output, PLATFORM_ID, QueryList, Renderer2, ViewChild } from '@angular/core';
import { empty, fromEvent, interval, merge, Observable, of, Subject } from 'rxjs';
import { mapTo, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NguCarouselConfig, NguCarouselOutletContext, NguCarouselStore } from './ngu-carousel';
import { NguCarouselService } from '../ngu-carousel.service';
import { NguCarouselDefDirective, NguCarouselNextDirective, NguCarouselOutlet, NguCarouselPrevDirective, NguCarouselWrapperDirective } from '../ngu-carousel.directive';
import { Logger } from '../logger.service';
/** @type {?} */
var log = new Logger('NgUCarousel');
// TODO calculer la taille possible pour le .ngucarsoul en fonction des boutons prev/next
/**
 * @template T
 */
var NguCarousel = /** @class */ (function (_super) {
    tslib_1.__extends(NguCarousel, _super);
    // protected _carouselWidth = 0;
    function NguCarousel(_el, _renderer, _differs, platformId, cdr, carouselService) {
        var _this = _super.call(this) || this;
        _this._el = _el;
        _this._renderer = _renderer;
        _this._differs = _differs;
        _this.platformId = platformId;
        _this.cdr = cdr;
        _this.carouselService = carouselService;
        _this.isHovered = false;
        _this.pointNumbers = [];
        // tslint:disable-next-line:no-output-on-prefix
        _this.onMove = new EventEmitter();
        _this.withAnim = true;
        _this.carouselLoad = new EventEmitter();
        _this._intervalController$ = new Subject();
        _this.carouselService.setCarousel(_this);
        return _this;
    }
    Object.defineProperty(NguCarousel.prototype, "dataSource", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataSource;
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data) {
                // this.isFirstss++;
                this._switchDataSource(data);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NguCarousel.prototype, "nextBtn", {
        /** The setter is used to catch the button if the button has ngIf
         * issue id #91
         */
        set: /**
         * The setter is used to catch the button if the button has ngIf
         * issue id #91
         * @param {?} btn
         * @return {?}
         */
        function (btn) {
            var _this = this;
            this.listener2 && this.listener2();
            if (btn) {
                this.listener2 = this._renderer.listen(btn.nativeElement, 'click', function () {
                    return _this._carouselScrollOne(1);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NguCarousel.prototype, "prevBtn", {
        /** The setter is used to catch the button if the button has ngIf
         * issue id #91
         */
        set: /**
         * The setter is used to catch the button if the button has ngIf
         * issue id #91
         * @param {?} btn
         * @return {?}
         */
        function (btn) {
            var _this = this;
            this.listener1 && this.listener1();
            if (btn) {
                this.listener1 = this._renderer.listen(btn.nativeElement, 'click', function () {
                    return _this._carouselScrollOne(0);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NguCarousel.prototype, "trackBy", {
        /**
         * Tracking function that will be used to check the differences in data changes. Used similarly
         * to `ngFor` `trackBy` function. Optimize Items operations by identifying a Items based on its data
         * relative to the function to know if a Items should be added/removed/moved.
         * Accepts a function that takes two parameters, `index` and `item`.
         */
        get: /**
         * Tracking function that will be used to check the differences in data changes. Used similarly
         * to `ngFor` `trackBy` function. Optimize Items operations by identifying a Items based on its data
         * relative to the function to know if a Items should be added/removed/moved.
         * Accepts a function that takes two parameters, `index` and `item`.
         * @return {?}
         */
        function () {
            return this._trackByFn;
        },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            if (isDevMode() &&
                fn != null &&
                typeof fn !== 'function' &&
                (/** @type {?} */ (console)) &&
                (/** @type {?} */ (console.warn))) {
                console.warn("trackBy must be a function, but received " + JSON.stringify(fn) + ".");
            }
            this._trackByFn = fn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NguCarousel.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._dataDiffer = this._differs
            .find([])
            .create(function (_i, item) {
            return _this.trackBy ? _this.trackBy(item.dataIndex, item.data) : item;
        });
    };
    /**
     * @return {?}
     */
    NguCarousel.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        this.arrayChanges = this._dataDiffer.diff(this.dataSource);
        if (this.arrayChanges && this._defDirec) {
            this._observeRenderChanges();
        }
    };
    /**
     * @return {?}
     */
    NguCarousel.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.carousel = this._el.nativeElement;
        this._inputValidation();
        this.carouselCssNode = this._createStyleElem();
        // this._buttonControl();
        if (window) {
            this._carouselInterval();
            if (!this.vertical.enabled) {
                this._touch();
            }
            this.listener3 = this._renderer.listen('window', 'resize', function (event) {
                _this._onResizing(event);
            });
            this._onWindowScrolling();
        }
    };
    /**
     * @return {?}
     */
    NguCarousel.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._observeRenderChanges();
        this.cdr.markForCheck();
    };
    /** Used to reset the carousel */
    /**
     * Used to reset the carousel
     * @param {?=} withOutAnimation
     * @return {?}
     */
    NguCarousel.prototype.reset = /**
     * Used to reset the carousel
     * @param {?=} withOutAnimation
     * @return {?}
     */
    function (withOutAnimation) {
        withOutAnimation && (this.withAnim = false);
        if (this.carouselCssNode) {
            this.carouselCssNode.innerHTML = '';
            this.moveTo(0);
            this._carouselPoint();
        }
    };
    /** this function is used to scoll the carousel when point is clicked */
    /**
     * this function is used to scoll the carousel when point is clicked
     * @param {?} slide
     * @param {?=} withOutAnimation
     * @return {?}
     */
    NguCarousel.prototype.moveTo = /**
     * this function is used to scoll the carousel when point is clicked
     * @param {?} slide
     * @param {?=} withOutAnimation
     * @return {?}
     */
    function (slide, withOutAnimation) {
        // slide = slide - 1;
        withOutAnimation && (this.withAnim = false);
        if (this.activePoint !== slide && slide < this.pointIndex) {
            /** @type {?} */
            var slideremains = void 0;
            /** @type {?} */
            var btns = this.currentSlide < slide ? 1 : 0;
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
    };
    /**
     * @return {?}
     */
    NguCarousel.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // clearInterval(this.carouselInt);
        this.carouselInt && this.carouselInt.unsubscribe();
        this._intervalController$.unsubscribe();
        this.carouselLoad.complete();
        this.onMove.complete();
        /** remove listeners */
        for (var i = 1; i <= 4; i++) {
            /** @type {?} */
            var str = "listener" + i;
            this[str] && this[str]();
        }
    };
    /**
     * @param {?} dataSource
     * @return {?}
     */
    NguCarousel.prototype._switchDataSource = /**
     * @param {?} dataSource
     * @return {?}
     */
    function (dataSource) {
        this._dataSource = dataSource;
        if (this._defDirec) {
            this._observeRenderChanges();
        }
    };
    /**
     * @param {?} data
     * @param {?=} viewContainer
     * @return {?}
     */
    NguCarousel.prototype.renderNodeChanges = /**
     * @param {?} data
     * @param {?=} viewContainer
     * @return {?}
     */
    function (data, viewContainer) {
        var _this = this;
        if (viewContainer === void 0) { viewContainer = this._nodeOutlet.viewContainer; }
        if (!this.arrayChanges)
            return;
        this.arrayChanges.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
            /** @type {?} */
            var node = _this._getNodeDef(data[currentIndex], currentIndex);
            if (item.previousIndex === null) {
                /** @type {?} */
                var context = new NguCarouselOutletContext(data[currentIndex]);
                context.index = currentIndex;
                viewContainer.createEmbeddedView(node.template, context, currentIndex);
            }
            else if (currentIndex === null) {
                viewContainer.remove(adjustedPreviousIndex);
                viewContainer.clear();
            }
            else {
                /** @type {?} */
                var view = viewContainer.get(adjustedPreviousIndex);
                viewContainer.move(view, currentIndex);
            }
        });
        this._updateItemIndexContext();
        if (this.carousel) {
            this._storeCarouselData();
        }
    };
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     */
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     * @return {?}
     */
    NguCarousel.prototype._updateItemIndexContext = /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var viewContainer = this._nodeOutlet.viewContainer;
        for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (viewContainer.get(renderIndex)));
            /** @type {?} */
            var context = (/** @type {?} */ (viewRef.context));
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            context.index = renderIndex;
        }
    };
    /**
     * @param {?} data
     * @param {?} i
     * @return {?}
     */
    NguCarousel.prototype._getNodeDef = /**
     * @param {?} data
     * @param {?} i
     * @return {?}
     */
    function (data, i) {
        if (this._defDirec.length === 1) {
            return this._defDirec.first;
        }
        /** @type {?} */
        var nodeDef = this._defDirec.find(function (def) { return def.when && def.when(i, data); }) ||
            this._defaultNodeDef;
        return nodeDef;
    };
    /**
     * @return {?}
     */
    NguCarousel.prototype._observeRenderChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dataStream;
        if (this._dataSource instanceof Observable) {
            dataStream = this._dataSource;
        }
        else if (Array.isArray(this._dataSource)) {
            dataStream = of(this._dataSource);
        }
        if (dataStream) {
            this._dataSubscription = dataStream
                .pipe(takeUntil(this._intervalController$))
                .subscribe(function (data) {
                _this.renderNodeChanges(data);
                _this.isLast = false;
            });
        }
    };
    /**
     * @return {?}
     */
    NguCarousel.prototype._inputValidation = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NguCarousel.prototype._onResizing = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        clearTimeout(this.onResize);
        this.onResize = setTimeout(function () {
            if (NguCarousel.deviceWidth !== event.target.outerWidth) {
                _this._setStyle(_this.nguItemsContainer.nativeElement, 'transition', "");
                _this._storeCarouselData();
            }
            _this.refreshCarouselWidth();
        }, 500);
    };
    /**
     * @return {?}
     */
    NguCarousel.prototype.refreshCarouselWidth = /**
     * @return {?}
     */
    function () {
        this._carouselWidth = this.nguItemsContainer.nativeElement.offsetWidth;
    };
    Object.defineProperty(NguCarousel.prototype, "carouselWidth", {
        get: /**
         * @return {?}
         */
        function () {
            log.timing('carouselWidth start');
            if (!this._carouselWidth) {
                this.refreshCarouselWidth();
            }
            log.timing('carouselWidth end');
            return this._carouselWidth;
        },
        enumerable: true,
        configurable: true
    });
    /** Get Touch input */
    /**
     * Get Touch input
     * @return {?}
     */
    NguCarousel.prototype._touch = /**
     * Get Touch input
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.inputs.touch) {
            /** @type {?} */
            var hammertime = new Hammer(this.touchContainer.nativeElement);
            hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
            hammertime.on('panstart', function (ev) {
                _this.refreshCarouselWidth();
                // this.carouselWidth = this.nguItemsContainer.nativeElement.offsetWidth;
                // this.touchTransform = this.transform[this.deviceType];
                _this.dexVal = 0;
                _this._setStyle(_this.nguItemsContainer.nativeElement, 'transition', '');
            });
            if (this.vertical.enabled) {
                hammertime.on('panup', function (ev) {
                    _this._touchHandling('panleft', ev);
                });
                hammertime.on('pandown', function (ev) {
                    _this._touchHandling('panright', ev);
                });
            }
            else {
                hammertime.on('panleft', function (ev) {
                    _this._touchHandling('panleft', ev);
                });
                hammertime.on('panright', function (ev) {
                    _this._touchHandling('panright', ev);
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
    };
    /** handle touch input */
    /**
     * handle touch input
     * @param {?} e
     * @param {?} ev
     * @return {?}
     */
    NguCarousel.prototype._touchHandling = /**
     * handle touch input
     * @param {?} e
     * @param {?} ev
     * @return {?}
     */
    function (e, ev) {
        // vertical touch events seem to cause to panstart event with an odd delta
        // and a center of {x:0,y:0} so this will ignore them
        if (ev.center.x === 0) {
            return;
        }
        ev = Math.abs(this.vertical.enabled ? ev.deltaY : ev.deltaX);
        /** @type {?} */
        var valt = ev - this.dexVal;
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
    };
    /**
     * @param {?} e
     * @param {?} valt
     * @return {?}
     */
    NguCarousel.prototype._setTouchTransfrom = /**
     * @param {?} e
     * @param {?} valt
     * @return {?}
     */
    function (e, valt) {
        /** @type {?} */
        var condition = this.RTL ? 'panright' : 'panleft';
        this.touchTransform =
            e === condition ? valt + this.touchTransform : this.touchTransform - valt;
    };
    /**
     * @return {?}
     */
    NguCarousel.prototype._setTransformFromTouch = /**
     * @return {?}
     */
    function () {
        this.refreshCarouselWidth();
        if (this.touchTransform < 0) {
            this.touchTransform = 0;
        }
        /** @type {?} */
        var type = this.type === 'responsive' ? '%' : 'px';
        /** @type {?} */
        var maxTranslate = (this.itemWidth * this._dataSource.length) - this.carouselWidth;
        if (this.type === 'responsive') {
            maxTranslate = (maxTranslate / this.carouselWidth) * 100;
        }
        if (maxTranslate <= this.touchTransform) {
            this.touchTransform = maxTranslate;
        }
        this.onMove.emit(this);
        this._setStyle(this.nguItemsContainer.nativeElement, 'transform', this.vertical.enabled
            ? "translate3d(0, " + this.directionSym + this.touchTransform + type + ", 0)"
            : "translate3d(" + this.directionSym + this.touchTransform + type + ", 0, 0)");
    };
    /** this fn used to disable the interval when it is not on the viewport */
    /**
     * this fn used to disable the interval when it is not on the viewport
     * @return {?}
     */
    NguCarousel.prototype._onWindowScrolling = /**
     * this fn used to disable the interval when it is not on the viewport
     * @return {?}
     */
    function () {
        /** @type {?} */
        var top = this.carousel.offsetTop;
        /** @type {?} */
        var scrollY = window.scrollY;
        /** @type {?} */
        var heightt = window.innerHeight;
        /** @type {?} */
        var carouselHeight = this.carousel.offsetHeight;
        /** @type {?} */
        var isCarouselOnScreen = top <= scrollY + heightt - carouselHeight / 4 &&
            top + carouselHeight / 2 >= scrollY;
        if (isCarouselOnScreen) {
            this._intervalController$.next(1);
        }
        else {
            this._intervalController$.next(0);
        }
    };
    /** store data based on width of the screen for the carousel */
    /**
     * store data based on width of the screen for the carousel
     * @return {?}
     */
    NguCarousel.prototype._storeCarouselData = /**
     * store data based on width of the screen for the carousel
     * @return {?}
     */
    function () {
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
    };
    /** Init carousel point */
    /**
     * Init carousel point
     * @return {?}
     */
    NguCarousel.prototype._carouselPoint = /**
     * Init carousel point
     * @return {?}
     */
    function () {
        /** @type {?} */
        var Nos = this.dataSource.length - (this.items - this.slideItems);
        this.pointIndex = Math.ceil(Nos / this.slideItems);
        /** @type {?} */
        var pointers = [];
        if (this.pointIndex > 1 || !this.inputs.point.hideOnSingleSlide) {
            for (var i = 0; i < this.pointIndex; i++) {
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
    };
    /** change the active point in carousel */
    /**
     * change the active point in carousel
     * @return {?}
     */
    NguCarousel.prototype._carouselPointActiver = /**
     * change the active point in carousel
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = Math.ceil(this.currentSlide / this.slideItems);
        this.activePoint = i;
        this.cdr.markForCheck();
    };
    /** set the style of the carousel based the inputs data */
    /**
     * set the style of the carousel based the inputs data
     * @return {?}
     */
    NguCarousel.prototype._carouselSize = /**
     * set the style of the carousel based the inputs data
     * @return {?}
     */
    function () {
        this.token = this._generateID();
        /** @type {?} */
        var dism = '';
        this.styleid = "." + this.token + " > .carousel-wrapper > .ngucarousel > .ngu-touch-container > .ngucarousel-items";
        if (this.inputs.custom === 'banner') {
            this._renderer.addClass(this.carousel, 'banner');
        }
        if (this.inputs.animation === 'lazy') {
            dism += this.styleid + " > .item {transition: transform .6s ease;}";
        }
        /** @type {?} */
        var itemStyle = '';
        if (this.vertical.enabled) {
            /** @type {?} */
            var itemWidth_xs = this.styleid + " > .item {height: " + this.vertical
                .height / +this.inputs.grid.xs + "px}";
            /** @type {?} */
            var itemWidth_sm = this.styleid + " > .item {height: " + this.vertical
                .height / +this.inputs.grid.sm + "px}";
            /** @type {?} */
            var itemWidth_md = this.styleid + " > .item {height: " + this.vertical
                .height / +this.inputs.grid.md + "px}";
            /** @type {?} */
            var itemWidth_lg = this.styleid + " > .item {height: " + this.vertical
                .height / +this.inputs.grid.lg + "px}";
            itemStyle = "@media (max-width:767px){" + itemWidth_xs + "}\n                    @media (min-width:768px){" + itemWidth_sm + "}\n                    @media (min-width:992px){" + itemWidth_md + "}\n                    @media (min-width:1200px){" + itemWidth_lg + "}";
        }
        else if (this.type === 'responsive') {
            /** @type {?} */
            var itemWidth_xs = this.inputs.type === 'mobile'
                ? this.styleid + " .item {flex: 0 0 " + 95 /
                    +this.inputs.grid.xs + "%; width: " + 95 / +this.inputs.grid.xs + "%;}"
                : this.styleid + " .item {flex: 0 0 " + 100 /
                    +this.inputs.grid.xs + "%; width: " + 100 / +this.inputs.grid.xs + "%;}";
            /** @type {?} */
            var itemWidth_sm = this.styleid + " > .item {flex: 0 0 " + 100 /
                +this.inputs.grid.sm + "%; width: " + 100 / +this.inputs.grid.sm + "%}";
            /** @type {?} */
            var itemWidth_md = this.styleid + " > .item {flex: 0 0 " + 100 /
                +this.inputs.grid.md + "%; width: " + 100 / +this.inputs.grid.md + "%}";
            /** @type {?} */
            var itemWidth_lg = this.styleid + " > .item {flex: 0 0 " + 100 /
                +this.inputs.grid.lg + "%; width: " + 100 / +this.inputs.grid.lg + "%}";
            itemStyle = "@media (max-width:767px){" + itemWidth_xs + "}\n                    @media (min-width:768px){" + itemWidth_sm + "}\n                    @media (min-width:992px){" + itemWidth_md + "}\n                    @media (min-width:1200px){" + itemWidth_lg + "}";
        }
        else {
            itemStyle = this.styleid + " .item {flex: 0 0 " + this.inputs.grid.all + "px; width: " + this.inputs.grid.all + "px;}";
        }
        this._renderer.addClass(this.carousel, this.token);
        if (this.vertical.enabled) {
            this._renderer.addClass(this.nguItemsContainer.nativeElement, 'nguvertical');
            this._renderer.setStyle(this.carouselMain1.nativeElement, 'height', this.vertical.height + "px");
        }
        // tslint:disable-next-line:no-unused-expression
        this.RTL &&
            !this.vertical.enabled &&
            this._renderer.addClass(this.carousel, 'ngurtl');
        this._createStyleElem(dism + " " + itemStyle);
        this._storeCarouselData();
    };
    /** logic to scroll the carousel step 1 */
    /**
     * logic to scroll the carousel step 1
     * @param {?} Btn
     * @return {?}
     */
    NguCarousel.prototype._carouselScrollOne = /**
     * logic to scroll the carousel step 1
     * @param {?} Btn
     * @return {?}
     */
    function (Btn) {
        /** @type {?} */
        var itemSpeed = this.speed;
        /** @type {?} */
        var translateXval;
        /** @type {?} */
        var currentSlide = 0;
        /** @type {?} */
        var touchMove = Math.ceil(this.dexVal / this.itemWidth);
        this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
        if (this.pointIndex === 1) {
            return;
        }
        else if (Btn === 0 && ((!this.loop && !this.isFirst) || this.loop)) {
            /** @type {?} */
            var slide = this.slideItems * this.pointIndex;
            /** @type {?} */
            var currentSlideD = this.currentSlide - this.slideItems;
            /** @type {?} */
            var MoveSlide = currentSlideD + this.slideItems;
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
    };
    /** logic to scroll the carousel step 2 */
    /**
     * logic to scroll the carousel step 2
     * @param {?} Btn
     * @param {?} currentSlide
     * @param {?} itemSpeed
     * @return {?}
     */
    NguCarousel.prototype._carouselScrollTwo = /**
     * logic to scroll the carousel step 2
     * @param {?} Btn
     * @param {?} currentSlide
     * @param {?} itemSpeed
     * @return {?}
     */
    function (Btn, currentSlide, itemSpeed) {
        // tslint:disable-next-line:no-unused-expression
        var _this = this;
        if (this.dexVal !== 0) {
            /** @type {?} */
            var val = Math.abs(this.touch.velocity);
            /** @type {?} */
            var somt = Math.floor((this.dexVal / val / this.dexVal) * (NguCarousel.deviceWidth - this.dexVal));
            somt = somt > itemSpeed ? itemSpeed : somt;
            itemSpeed = somt < 200 ? 200 : somt;
            this.dexVal = 0;
        }
        if (this.withAnim) {
            this._setStyle(this.nguItemsContainer.nativeElement, 'transition', "transform " + itemSpeed + "ms " + this.inputs.easing);
            this.inputs.animation &&
                this._carouselAnimator(Btn, currentSlide + 1, currentSlide + this.items, itemSpeed, Math.abs(this.currentSlide - currentSlide));
        }
        else {
            this._setStyle(this.nguItemsContainer.nativeElement, 'transition', "");
        }
        this.itemLength = this.dataSource.length;
        this._transformStyle(currentSlide);
        this.currentSlide = currentSlide;
        setTimeout(function () {
            _this.onMove.emit(_this);
        }, 400);
        this._carouselPointActiver();
        this._carouselLoadTrigger();
        this.withAnim = true;
        // if (currentSlide === 12) {
        //   this._switchDataSource(this.dataSource);
        // }
    };
    /** boolean function for making isFirst and isLast */
    /**
     * boolean function for making isFirst and isLast
     * @param {?} first
     * @param {?} last
     * @return {?}
     */
    NguCarousel.prototype._btnBoolean = /**
     * boolean function for making isFirst and isLast
     * @param {?} first
     * @param {?} last
     * @return {?}
     */
    function (first, last) {
        this.isFirst = !!first;
        this.isLast = !!last;
    };
    /**
     * @param {?} grid
     * @param {?} slide
     * @return {?}
     */
    NguCarousel.prototype._transformString = /**
     * @param {?} grid
     * @param {?} slide
     * @return {?}
     */
    function (grid, slide) {
        /** @type {?} */
        var collect = '';
        collect += this.styleid + " { transform: translate3d(";
        if (this.vertical.enabled) {
            this.transform[grid] =
                (this.vertical.height / this.inputs.grid[grid]) * slide;
            collect += "0, -" + this.transform[grid] + "px, 0";
        }
        else {
            this.transform[grid] = (100 / this.inputs.grid[grid]) * slide;
            collect += "" + this.directionSym + this.transform[grid] + "%, 0, 0";
        }
        collect += "); }";
        return collect;
    };
    /** set the transform style to scroll the carousel  */
    /**
     * set the transform style to scroll the carousel
     * @param {?} slide
     * @return {?}
     */
    NguCarousel.prototype._transformStyle = /**
     * set the transform style to scroll the carousel
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        /** @type {?} */
        var slideCss = '';
        if (this.type === 'responsive') {
            slideCss = "@media (max-width: 767px) {" + this._transformString('xs', slide) + "}\n      @media (min-width: 768px) {" + this._transformString('sm', slide) + " }\n      @media (min-width: 992px) {" + this._transformString('md', slide) + " }\n      @media (min-width: 1200px) {" + this._transformString('lg', slide) + " }";
        }
        else {
            this.transform.all = this.inputs.grid.all * slide;
            this.touchTransform = this.transform.all;
            slideCss = this.styleid + " { transform: translate3d(" + this.directionSym + this.transform.all + "px, 0, 0);";
        }
        this.carouselCssNode.innerHTML = slideCss;
    };
    /** this will trigger the carousel to load the items */
    /**
     * this will trigger the carousel to load the items
     * @return {?}
     */
    NguCarousel.prototype._carouselLoadTrigger = /**
     * this will trigger the carousel to load the items
     * @return {?}
     */
    function () {
        if (typeof this.inputs.load === 'number') {
            this.dataSource.length - this.load <= this.currentSlide + this.items &&
                this.carouselLoad.emit(this.currentSlide);
        }
    };
    /** generate Class for each carousel to set specific style */
    /**
     * generate Class for each carousel to set specific style
     * @return {?}
     */
    NguCarousel.prototype._generateID = /**
     * generate Class for each carousel to set specific style
     * @return {?}
     */
    function () {
        /** @type {?} */
        var text = '';
        /** @type {?} */
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 6; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return "ngucarousel" + text;
    };
    /** handle the auto slide */
    /**
     * handle the auto slide
     * @return {?}
     */
    NguCarousel.prototype._carouselInterval = /**
     * handle the auto slide
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var container = this.carouselMain1.nativeElement;
        if (this.interval && this.loop) {
            this.listener4 = this._renderer.listen('window', 'scroll', function () {
                clearTimeout(_this.onScrolling);
                _this.onScrolling = setTimeout(function () {
                    _this._onWindowScrolling();
                }, 600);
            });
            /** @type {?} */
            var play$_1 = fromEvent(container, 'mouseleave').pipe(mapTo(1));
            /** @type {?} */
            var pause$_1 = fromEvent(container, 'mouseenter').pipe(mapTo(0));
            /** @type {?} */
            var touchPlay$_1 = fromEvent(container, 'touchstart').pipe(mapTo(1));
            /** @type {?} */
            var touchPause$_1 = fromEvent(container, 'touchend').pipe(mapTo(0));
            /** @type {?} */
            var interval$_1 = interval(this.inputs.interval.timing).pipe(mapTo(1));
            setTimeout(function () {
                _this.carouselInt = merge(play$_1, touchPlay$_1, pause$_1, touchPause$_1, _this._intervalController$)
                    .pipe(startWith(1), switchMap(function (val) {
                    _this.isHovered = !val;
                    _this.cdr.markForCheck();
                    return val ? interval$_1 : empty();
                }))
                    .subscribe(function (res) {
                    _this._carouselScrollOne(1);
                });
            }, this.interval.initialDelay);
        }
    };
    /**
     * @return {?}
     */
    NguCarousel.prototype._updateItemIndexContextAni = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var viewContainer = this._nodeOutlet.viewContainer;
        for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (viewContainer.get(renderIndex)));
            /** @type {?} */
            var context = (/** @type {?} */ (viewRef.context));
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            context.index = renderIndex;
        }
    };
    /** animate the carousel items */
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
    NguCarousel.prototype._carouselAnimator = /**
     * animate the carousel items
     * @param {?} direction
     * @param {?} start
     * @param {?} end
     * @param {?} speed
     * @param {?} length
     * @param {?=} viewContainer
     * @return {?}
     */
    function (direction, start, end, speed, length, viewContainer) {
        var _this = this;
        if (viewContainer === void 0) { viewContainer = this._nodeOutlet.viewContainer; }
        /** @type {?} */
        var val = length < 5 ? length : 5;
        val = val === 1 ? 3 : val;
        /** @type {?} */
        var collectIndex = [];
        if (direction === 1) {
            for (var i = start - 1; i < end; i++) {
                collectIndex.push(i);
                val = val * 2;
                /** @type {?} */
                var viewRef = (/** @type {?} */ (viewContainer.get(i)));
                if (viewRef) {
                    /** @type {?} */
                    var context = (/** @type {?} */ (viewRef.context));
                    context.animate = { value: true, params: { distance: val } };
                }
            }
        }
        else {
            for (var i = end - 1; i >= start - 1; i--) {
                collectIndex.push(i);
                val = val * 2;
                /** @type {?} */
                var viewRef = (/** @type {?} */ (viewContainer.get(i)));
                if (viewRef) {
                    /** @type {?} */
                    var context = (/** @type {?} */ (viewRef.context));
                    context.animate = { value: true, params: { distance: -val } };
                }
            }
        }
        this.cdr.markForCheck();
        setTimeout(function () {
            _this._removeAnimations(collectIndex);
        }, speed * 0.7);
    };
    /**
     * @param {?} indexs
     * @return {?}
     */
    NguCarousel.prototype._removeAnimations = /**
     * @param {?} indexs
     * @return {?}
     */
    function (indexs) {
        /** @type {?} */
        var viewContainer = this._nodeOutlet.viewContainer;
        indexs.forEach(function (i) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (viewContainer.get(i)));
            if (viewRef) {
                /** @type {?} */
                var context = (/** @type {?} */ (viewRef.context));
                context.animate = { value: false, params: { distance: 0 } };
            }
        });
        this.cdr.markForCheck();
    };
    /** Short form for setElementStyle */
    /**
     * Short form for setElementStyle
     * @param {?} el
     * @param {?} prop
     * @param {?} val
     * @return {?}
     */
    NguCarousel.prototype._setStyle = /**
     * Short form for setElementStyle
     * @param {?} el
     * @param {?} prop
     * @param {?} val
     * @return {?}
     */
    function (el, prop, val) {
        this._renderer.setStyle(el, prop, val);
    };
    /** For generating style tag */
    /**
     * For generating style tag
     * @param {?=} datas
     * @return {?}
     */
    NguCarousel.prototype._createStyleElem = /**
     * For generating style tag
     * @param {?=} datas
     * @return {?}
     */
    function (datas) {
        /** @type {?} */
        var styleItem = this._renderer.createElement('style');
        if (datas) {
            /** @type {?} */
            var styleText = this._renderer.createText(datas);
            this._renderer.appendChild(styleItem, styleText);
        }
        this._renderer.appendChild(this.carousel, styleItem);
        return styleItem;
    };
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
    NguCarousel.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: IterableDiffers },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ChangeDetectorRef },
        { type: NguCarouselService }
    ]; };
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
    return NguCarousel;
}(NguCarouselStore));
export { NguCarousel };
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
    NguCarousel.prototype._nodeOutlet;
    /** @type {?} */
    NguCarousel.prototype._carouselWrapper;
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
    NguCarousel.prototype.onMove;
    /** @type {?} */
    NguCarousel.prototype._defaultNodeDef;
    /** @type {?} */
    NguCarousel.prototype._defDirec;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1LWNhcm91c2VsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImxpYi9uZ3UtY2Fyb3VzZWwvbmd1LWNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUVmLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBSVQsZUFBZSxFQUdmLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULFNBQVMsRUFFVCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDaEcsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSx3QkFBd0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsd0JBQXdCLEVBQ3hCLGlCQUFpQixFQUNqQix3QkFBd0IsRUFDeEIsMkJBQTJCLEVBQzVCLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQUVyQyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDOzs7OztBQUlyQztJQVVvQyx1Q0FBZ0I7SUFnRGxELGdDQUFnQztJQUVoQyxxQkFDVSxHQUFlLEVBQ2YsU0FBb0IsRUFDcEIsUUFBeUIsRUFDSixVQUFrQixFQUN2QyxHQUFzQixFQUN0QixlQUFtQztRQU43QyxZQVFFLGlCQUFPLFNBRVI7UUFUUyxTQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsZUFBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixjQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUNKLGdCQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLHFCQUFlLEdBQWYsZUFBZSxDQUFvQjtRQWxEN0MsZUFBUyxHQUFHLEtBQUssQ0FBQztRQVFsQixrQkFBWSxHQUFlLEVBQUUsQ0FBQztRQU05QiwrQ0FBK0M7UUFFeEMsWUFBTSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO1FBTzNDLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFJaEIsa0JBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBU2xDLDBCQUFvQixHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFpQm5ELEtBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUN6QyxDQUFDO0lBSUQsc0JBQ0ksbUNBQVU7Ozs7UUFEZDtZQUVFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7OztRQUVELFVBQWUsSUFBUztZQUN0QixJQUFJLElBQUksRUFBRTtnQkFDUixvQkFBb0I7Z0JBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QjtRQUNILENBQUM7OztPQVBBO0lBYUQsc0JBQ0ksZ0NBQU87UUFKWDs7V0FFRzs7Ozs7OztRQUNILFVBQ1ksR0FBZTtZQUQzQixpQkFRQztZQU5DLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25DLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUU7b0JBQ2pFLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztnQkFBMUIsQ0FBMEIsQ0FDM0IsQ0FBQzthQUNIO1FBQ0gsQ0FBQzs7O09BQUE7SUFLRCxzQkFDSSxnQ0FBTztRQUpYOztXQUVHOzs7Ozs7O1FBQ0gsVUFDWSxHQUFlO1lBRDNCLGlCQVFDO1lBTkMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkMsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRTtvQkFDakUsT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO2dCQUExQixDQUEwQixDQUMzQixDQUFDO2FBQ0g7UUFDSCxDQUFDOzs7T0FBQTtJQVFELHNCQUNJLGdDQUFPO1FBUFg7Ozs7O1dBS0c7Ozs7Ozs7O1FBQ0g7WUFFRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7Ozs7UUFFRCxVQUFZLEVBQXNCO1lBQ2hDLElBQ0UsU0FBUyxFQUFFO2dCQUNYLEVBQUUsSUFBSSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxLQUFLLFVBQVU7Z0JBQ3hCLG1CQUFLLE9BQU8sRUFBQTtnQkFDWixtQkFBSyxPQUFPLENBQUMsSUFBSSxFQUFBLEVBQ2pCO2dCQUNBLE9BQU8sQ0FBQyxJQUFJLENBQ1YsOENBQTRDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQUcsQ0FDbEUsQ0FBQzthQUNIO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDdkIsQ0FBQzs7O09BZkE7Ozs7SUFpQkQsOEJBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRO2FBQzdCLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDUixNQUFNLENBQUMsVUFBQyxFQUFVLEVBQUUsSUFBUztZQUM1QixPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCwrQkFBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUzRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN2QyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUM7Ozs7SUFFRCxxQ0FBZTs7O0lBQWY7UUFBQSxpQkFrQkM7UUFqQkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRS9DLHlCQUF5QjtRQUV6QixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Y7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBQSxLQUFLO2dCQUM5RCxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFHRCxpQ0FBaUM7Ozs7OztJQUMxQiwyQkFBSzs7Ozs7SUFBWixVQUFhLGdCQUEwQjtRQUNyQyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUVwQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELHdFQUF3RTs7Ozs7OztJQUNqRSw0QkFBTTs7Ozs7O0lBQWIsVUFBYyxLQUFhLEVBQUUsZ0JBQTBCO1FBQ3JELHFCQUFxQjtRQUNyQixnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTs7Z0JBQ3JELFlBQVksU0FBQTs7Z0JBQ1YsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFOUMsUUFBUSxLQUFLLEVBQUU7Z0JBQ2IsS0FBSyxDQUFDO29CQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QixZQUFZLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ3ZDLE1BQU07Z0JBQ1IsS0FBSyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDbkQsTUFBTTtnQkFDUjtvQkFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdkIsWUFBWSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQzFDO1lBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQzs7OztJQUdELGlDQUFXOzs7SUFBWDtRQUNFLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV2Qix1QkFBdUI7UUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQ3JCLEdBQUcsR0FBRyxhQUFXLENBQUc7WUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyx1Q0FBaUI7Ozs7SUFBekIsVUFBMEIsVUFBZTtRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7Ozs7SUFFTyx1Q0FBaUI7Ozs7O0lBQXpCLFVBQ0UsSUFBVyxFQUNYLGFBQWdFO1FBRmxFLGlCQW1DQztRQWpDQyw4QkFBQSxFQUFBLGdCQUFrQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWE7UUFHaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUNoQyxVQUNFLElBQStCLEVBQy9CLHFCQUE2QixFQUM3QixZQUFvQjs7Z0JBRWQsSUFBSSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFlBQVksQ0FBQztZQUMvRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFOztvQkFDekIsT0FBTyxHQUFHLElBQUksd0JBQXdCLENBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNyRSxPQUFPLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztnQkFDN0IsYUFBYSxDQUFDLGtCQUFrQixDQUM5QixJQUFJLENBQUMsUUFBUSxFQUNiLE9BQU8sRUFDUCxZQUFZLENBQ2IsQ0FBQzthQUNIO2lCQUFNLElBQUksWUFBWSxLQUFLLElBQUksRUFBRTtnQkFDaEMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUM1QyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDdkI7aUJBQU07O29CQUNDLElBQUksR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO2dCQUNyRCxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQzthQUN4QztRQUNILENBQUMsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFFL0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0ssNkNBQXVCOzs7OztJQUEvQjs7WUFDUSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhO1FBQ3BELEtBQ0UsSUFBSSxXQUFXLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxhQUFhLENBQUMsTUFBTSxFQUNqRCxXQUFXLEdBQUcsS0FBSyxFQUNuQixXQUFXLEVBQUUsRUFDYjs7Z0JBQ00sT0FBTyxHQUFHLG1CQUFBLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQU87O2dCQUMvQyxPQUFPLEdBQUcsbUJBQUEsT0FBTyxDQUFDLE9BQU8sRUFBTztZQUN0QyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUV0QixPQUFPLENBQUMsS0FBSyxHQUFHLFdBQVcsS0FBSyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8saUNBQVc7Ozs7O0lBQW5CLFVBQW9CLElBQVMsRUFBRSxDQUFTO1FBQ3RDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDN0I7O1lBRUssT0FBTyxHQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQztZQUN6RCxJQUFJLENBQUMsZUFBZTtRQUV0QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7O0lBRU8sMkNBQXFCOzs7SUFBN0I7UUFBQSxpQkFpQkM7O1lBaEJLLFVBQXlDO1FBRTdDLElBQUksSUFBSSxDQUFDLFdBQVcsWUFBWSxVQUFVLEVBQUU7WUFDMUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDL0I7YUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ25DO1FBRUQsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVTtpQkFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztpQkFDMUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDYixLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDSCxDQUFDOzs7O0lBRU8sc0NBQWdCOzs7SUFBeEI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLDRCQUE0QixDQUFDO1FBQ3hFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztRQUMvQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUTtZQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssUUFBUTtnQkFDdEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtnQkFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUNwRDtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUs7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxXQUFXO2dCQUNuRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTztnQkFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUVYLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVPLGlDQUFXOzs7O0lBQW5CLFVBQW9CLEtBQVU7UUFBOUIsaUJBVUM7UUFUQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1lBQ3pCLElBQUksV0FBVyxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDdkQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdkUsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDM0I7WUFDRCxLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUU5QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDOzs7O0lBRUQsMENBQW9COzs7SUFBcEI7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxzQkFBSSxzQ0FBYTs7OztRQUFqQjtZQUNFLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7YUFDN0I7WUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDaEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQXNCOzs7OztJQUNkLDRCQUFNOzs7O0lBQWQ7UUFBQSxpQkFxREM7UUFwREMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTs7Z0JBQ2YsVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO1lBQ2hFLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxvQkFBb0IsRUFBQyxDQUFDLENBQUM7WUFFcEUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxFQUFPO2dCQUNoQyxLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDNUIseUVBQXlFO2dCQUN6RSx5REFBeUQ7Z0JBQ3pELEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3pFLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDekIsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxFQUFPO29CQUM3QixLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDckMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsVUFBVSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxFQUFPO29CQUMvQixLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdEMsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxVQUFVLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEVBQU87b0JBQy9CLEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFDLEVBQU87b0JBQ2hDLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDLENBQUMsQ0FBQzthQUNKO1lBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBbUJLO1lBQ0wsVUFBVSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFO2dCQUN4QyxpR0FBaUc7Z0JBQ2pHLHlIQUF5SDtnQkFDekgsRUFBRSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELHlCQUF5Qjs7Ozs7OztJQUNqQixvQ0FBYzs7Ozs7O0lBQXRCLFVBQXVCLENBQVMsRUFBRSxFQUFPO1FBQ3ZDLDBFQUEwRTtRQUMxRSxxREFBcUQ7UUFFckQsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBRUQsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFDekQsSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTTtRQUMzQixJQUFJO1lBQ0YsSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZO2dCQUN4QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUM3QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzt3QkFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTt3QkFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDekIsR0FBRztnQkFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRVgsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFFaEMsQ0FBQzs7Ozs7O0lBRU8sd0NBQWtCOzs7OztJQUExQixVQUEyQixDQUFTLEVBQUUsSUFBWTs7WUFDMUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUNuRCxJQUFJLENBQUMsY0FBYztZQUNqQixDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDOUUsQ0FBQzs7OztJQUVPLDRDQUFzQjs7O0lBQTlCO1FBRUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztTQUN6Qjs7WUFDSyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSTs7WUFFL0MsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhO1FBRW5GLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7WUFDOUIsWUFBWSxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDMUQ7UUFFRCxJQUFJLFlBQVksSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDO1NBQ3BDO1FBR0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUNwQyxXQUFXLEVBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPO1lBQ25CLENBQUMsQ0FBQyxvQkFBa0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksU0FBTTtZQUN4RSxDQUFDLENBQUMsaUJBQWUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksWUFBUyxDQUMzRSxDQUFDO0lBQ0osQ0FBQztJQUVELDBFQUEwRTs7Ozs7SUFDbEUsd0NBQWtCOzs7O0lBQTFCOztZQUNRLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7O1lBQzdCLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTzs7WUFDeEIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXOztZQUM1QixjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZOztZQUMzQyxrQkFBa0IsR0FDdEIsR0FBRyxJQUFJLE9BQU8sR0FBRyxPQUFPLEdBQUcsY0FBYyxHQUFHLENBQUM7WUFDN0MsR0FBRyxHQUFHLGNBQWMsR0FBRyxDQUFDLElBQUksT0FBTztRQUVyQyxJQUFJLGtCQUFrQixFQUFFO1lBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRUQsK0RBQStEOzs7OztJQUN2RCx3Q0FBa0I7Ozs7SUFBMUI7UUFDRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFVBQVU7Z0JBQ2IsV0FBVyxDQUFDLFdBQVcsSUFBSSxJQUFJO29CQUM3QixDQUFDLENBQUMsSUFBSTtvQkFDTixDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsSUFBSSxHQUFHO3dCQUNoQyxDQUFDLENBQUMsSUFBSTt3QkFDTixDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsSUFBSSxHQUFHOzRCQUM5QixDQUFDLENBQUMsSUFBSTs0QkFDTixDQUFDLENBQUMsSUFBSSxDQUFDO1lBRWIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDaEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztZQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJO1lBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0UsSUFBSSxDQUFDLEtBQUs7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN4RSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLHlCQUF5QjtJQUMzQixDQUFDO0lBRUQsMEJBQTBCOzs7OztJQUNsQixvQ0FBYzs7OztJQUF0Qjs7WUFDUSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O1lBQzdDLFFBQVEsR0FBRyxFQUFFO1FBRW5CLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtZQUMvRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3hCO1NBQ0Y7UUFDRCxJQUFJO0lBQ04sQ0FBQztJQUVELDBDQUEwQzs7Ozs7SUFDbEMsMkNBQXFCOzs7O0lBQTdCOztZQUNRLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCwwREFBMEQ7Ozs7O0lBQ2xELG1DQUFhOzs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7O1lBQzVCLElBQUksR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUNiLElBQUksQ0FBQyxLQUFLLG9GQUN1RSxDQUFDO1FBRXBGLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUNwQyxJQUFJLElBQU8sSUFBSSxDQUFDLE9BQU8sK0NBQTRDLENBQUM7U0FDckU7O1lBRUcsU0FBUyxHQUFHLEVBQUU7UUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTs7Z0JBQ25CLFlBQVksR0FBTSxJQUFJLENBQUMsT0FBTywwQkFBcUIsSUFBSSxDQUFDLFFBQVE7aUJBQ25FLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBSzs7Z0JBQy9CLFlBQVksR0FBTSxJQUFJLENBQUMsT0FBTywwQkFBcUIsSUFBSSxDQUFDLFFBQVE7aUJBQ25FLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBSzs7Z0JBQy9CLFlBQVksR0FBTSxJQUFJLENBQUMsT0FBTywwQkFBcUIsSUFBSSxDQUFDLFFBQVE7aUJBQ25FLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBSzs7Z0JBQy9CLFlBQVksR0FBTSxJQUFJLENBQUMsT0FBTywwQkFBcUIsSUFBSSxDQUFDLFFBQVE7aUJBQ25FLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBSztZQUVyQyxTQUFTLEdBQUcsOEJBQTRCLFlBQVksd0RBQ1gsWUFBWSx3REFDWixZQUFZLHlEQUNYLFlBQVksTUFBRyxDQUFDO1NBQzNEO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRTs7Z0JBQy9CLFlBQVksR0FDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUTtnQkFDM0IsQ0FBQyxDQUFJLElBQUksQ0FBQyxPQUFPLDBCQUFxQixFQUFFO29CQUN4QyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsa0JBQWEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFLO2dCQUMvRCxDQUFDLENBQUksSUFBSSxDQUFDLE9BQU8sMEJBQXFCLEdBQUc7b0JBQ3pDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxrQkFBYSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQUs7O2dCQUU5RCxZQUFZLEdBQU0sSUFBSSxDQUFDLE9BQU8sNEJBQXVCLEdBQUc7Z0JBQzlELENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxrQkFBYSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQUk7O2dCQUN6RCxZQUFZLEdBQU0sSUFBSSxDQUFDLE9BQU8sNEJBQXVCLEdBQUc7Z0JBQzlELENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxrQkFBYSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQUk7O2dCQUN6RCxZQUFZLEdBQU0sSUFBSSxDQUFDLE9BQU8sNEJBQXVCLEdBQUc7Z0JBQzlELENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxrQkFBYSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQUk7WUFFL0QsU0FBUyxHQUFHLDhCQUE0QixZQUFZLHdEQUNYLFlBQVksd0RBQ1osWUFBWSx5REFDWCxZQUFZLE1BQUcsQ0FBQztTQUMzRDthQUFNO1lBQ0wsU0FBUyxHQUFNLElBQUksQ0FBQyxPQUFPLDBCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLG1CQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBTSxDQUFDO1NBQzVDO1FBR0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFDcEMsYUFBYSxDQUNkLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQ2hDLFFBQVEsRUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sT0FBSSxDQUM1QixDQUFDO1NBQ0g7UUFFRCxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLEdBQUc7WUFDUixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTztZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBSSxJQUFJLFNBQUksU0FBVyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELDBDQUEwQzs7Ozs7O0lBQ2xDLHdDQUFrQjs7Ozs7SUFBMUIsVUFBMkIsR0FBVzs7WUFDaEMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLOztZQUN0QixhQUFhOztZQUNmLFlBQVksR0FBRyxDQUFDOztZQUNaLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXRFLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTztTQUNSO2FBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDOUQsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVU7O2dCQUV6QyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVTs7Z0JBQ25ELFNBQVMsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVU7WUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTtnQkFDM0IsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ25ELFNBQVMsR0FBRyxHQUFHLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUU7Z0JBQ3ZDLFlBQVksR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDL0IsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO29CQUM3QyxTQUFTLEdBQUcsR0FBRyxDQUFDO2lCQUNqQjtxQkFBTTtvQkFDTCxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2lCQUNwRDthQUNGO1lBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDdkQ7YUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkUsSUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU07Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVTtnQkFDaEQsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNaO2dCQUNBLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN4QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3RCLFlBQVksR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxTQUFTLEdBQUcsR0FBRyxDQUFDO2dCQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDL0IsWUFBWTt3QkFDVixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN0RSxTQUFTLEdBQUcsR0FBRyxDQUFDO2lCQUNqQjtxQkFBTTtvQkFDTCxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2lCQUNwRDthQUNGO1lBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDO0lBRUQsMENBQTBDOzs7Ozs7OztJQUNsQyx3Q0FBa0I7Ozs7Ozs7SUFBMUIsVUFDRSxHQUFXLEVBQ1gsWUFBb0IsRUFDcEIsU0FBaUI7UUFFakIsZ0RBQWdEO1FBTGxELGlCQThDQztRQXZDQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFOztnQkFDZixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7Z0JBQ3JDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUNuQixDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUM1RTtZQUNELElBQUksR0FBRyxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMzQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDakI7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUNwQyxZQUFZLEVBQ1osZUFBYSxTQUFTLFdBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFRLENBQ2pELENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7Z0JBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FDcEIsR0FBRyxFQUNILFlBQVksR0FBRyxDQUFDLEVBQ2hCLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUN6QixTQUFTLEVBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxDQUMzQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDeEU7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsNkJBQTZCO1FBQzdCLDZDQUE2QztRQUM3QyxJQUFJO0lBQ04sQ0FBQztJQUVELHFEQUFxRDs7Ozs7OztJQUM3QyxpQ0FBVzs7Ozs7O0lBQW5CLFVBQW9CLEtBQWEsRUFBRSxJQUFZO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sc0NBQWdCOzs7OztJQUF4QixVQUF5QixJQUFZLEVBQUUsS0FBYTs7WUFDOUMsT0FBTyxHQUFHLEVBQUU7UUFDaEIsT0FBTyxJQUFPLElBQUksQ0FBQyxPQUFPLCtCQUE0QixDQUFDO1FBRXZELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDMUQsT0FBTyxJQUFJLFNBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBTyxDQUFDO1NBQy9DO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzlELE9BQU8sSUFBSSxLQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBUyxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxJQUFJLE1BQU0sQ0FBQztRQUNsQixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsc0RBQXNEOzs7Ozs7SUFDOUMscUNBQWU7Ozs7O0lBQXZCLFVBQXdCLEtBQWE7O1lBQy9CLFFBQVEsR0FBRyxFQUFFO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7WUFDOUIsUUFBUSxHQUFHLGdDQUE4QixJQUFJLENBQUMsZ0JBQWdCLENBQzVELElBQUksRUFDSixLQUFLLENBQ04sNENBQzRCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLDZDQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyw4Q0FDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsT0FBSSxDQUFDO1NBQ3RFO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ2xELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekMsUUFBUSxHQUFNLElBQUksQ0FBQyxPQUFPLGtDQUN4QixJQUFJLENBQUMsWUFBWSxHQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxlQUFZLENBQUM7U0FDckM7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUMsQ0FBQztJQUVELHVEQUF1RDs7Ozs7SUFDL0MsMENBQW9COzs7O0lBQTVCO1FBQ0UsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUs7Z0JBQ3BFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCw2REFBNkQ7Ozs7O0lBQ3JELGlDQUFXOzs7O0lBQW5COztZQUNNLElBQUksR0FBRyxFQUFFOztZQUNQLFFBQVEsR0FDWixnRUFBZ0U7UUFFbEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixJQUFJLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN0RTtRQUNELE9BQU8sZ0JBQWMsSUFBTSxDQUFDO0lBQzlCLENBQUM7SUFFRCw0QkFBNEI7Ozs7O0lBQ3BCLHVDQUFpQjs7OztJQUF6QjtRQUFBLGlCQXVDQzs7WUF0Q08sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYTtRQUNsRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7Z0JBQ3pELFlBQVksQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO29CQUM1QixLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxDQUFDLENBQUM7O2dCQUVHLE9BQUssR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUN6RCxRQUFNLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztnQkFFMUQsWUFBVSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBQzlELGFBQVcsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUU3RCxXQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFdEUsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUN0QixPQUFLLEVBQ0wsWUFBVSxFQUNWLFFBQU0sRUFDTixhQUFXLEVBQ1gsS0FBSSxDQUFDLG9CQUFvQixDQUMxQjtxQkFDRSxJQUFJLENBQ0gsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUNaLFNBQVMsQ0FBQyxVQUFBLEdBQUc7b0JBQ1gsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQztvQkFDdEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDeEIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ25DLENBQUMsQ0FBQyxDQUNIO3FCQUNBLFNBQVMsQ0FBQyxVQUFBLEdBQUc7b0JBQ1osS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7OztJQUVPLGdEQUEwQjs7O0lBQWxDOztZQUNRLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWE7UUFDcEQsS0FDRSxJQUFJLFdBQVcsR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQ2pELFdBQVcsR0FBRyxLQUFLLEVBQ25CLFdBQVcsRUFBRSxFQUNiOztnQkFDTSxPQUFPLEdBQUcsbUJBQUEsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBTzs7Z0JBQy9DLE9BQU8sR0FBRyxtQkFBQSxPQUFPLENBQUMsT0FBTyxFQUFPO1lBQ3RDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsV0FBVyxLQUFLLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDNUIsT0FBTyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQsaUNBQWlDOzs7Ozs7Ozs7OztJQUN6Qix1Q0FBaUI7Ozs7Ozs7Ozs7SUFBekIsVUFDRSxTQUFpQixFQUNqQixLQUFhLEVBQ2IsR0FBVyxFQUNYLEtBQWEsRUFDYixNQUFjLEVBQ2QsYUFBOEM7UUFOaEQsaUJBcUNDO1FBL0JDLDhCQUFBLEVBQUEsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYTs7WUFFMUMsR0FBRyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7O1lBQ3BCLFlBQVksR0FBRyxFQUFFO1FBRXZCLElBQUksU0FBUyxLQUFLLENBQUMsRUFBRTtZQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7O29CQUNSLE9BQU8sR0FBRyxtQkFBQSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFPO2dCQUMzQyxJQUFJLE9BQU8sRUFBRTs7d0JBQ0wsT0FBTyxHQUFHLG1CQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQU87b0JBQ3RDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsRUFBQyxDQUFDO2lCQUMxRDthQUNGO1NBQ0Y7YUFBTTtZQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7O29CQUNSLE9BQU8sR0FBRyxtQkFBQSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFPO2dCQUMzQyxJQUFJLE9BQU8sRUFBRTs7d0JBQ0wsT0FBTyxHQUFHLG1CQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQU87b0JBQ3RDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFDLENBQUM7aUJBQzNEO2FBQ0Y7U0FDRjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFTyx1Q0FBaUI7Ozs7SUFBekIsVUFBMEIsTUFBZ0I7O1lBQ2xDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWE7UUFDcEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7O2dCQUNSLE9BQU8sR0FBRyxtQkFBQSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFPO1lBQzNDLElBQUksT0FBTyxFQUFFOztvQkFDTCxPQUFPLEdBQUcsbUJBQUEsT0FBTyxDQUFDLE9BQU8sRUFBTztnQkFDdEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBQyxFQUFDLENBQUM7YUFDekQ7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHFDQUFxQzs7Ozs7Ozs7SUFDN0IsK0JBQVM7Ozs7Ozs7SUFBakIsVUFBa0IsRUFBTyxFQUFFLElBQVMsRUFBRSxHQUFRO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELCtCQUErQjs7Ozs7O0lBQ3ZCLHNDQUFnQjs7Ozs7SUFBeEIsVUFBeUIsS0FBYzs7WUFDL0IsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUN2RCxJQUFJLEtBQUssRUFBRTs7Z0JBQ0gsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7O2dCQTM3QkYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIscW9CQUEwQztvQkFFMUMsYUFBYSxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ25DLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUMvQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7Z0JBN0NDLFVBQVU7Z0JBY1YsU0FBUztnQkFOVCxlQUFlO2dCQTZGNEIsTUFBTSx1QkFBOUMsTUFBTSxTQUFDLFdBQVc7Z0JBMUdyQixpQkFBaUI7Z0JBNEJWLGtCQUFrQjs7OzhCQWtDeEIsU0FBUyxTQUFDLGlCQUFpQjttQ0FFM0IsU0FBUyxTQUFDLDJCQUEyQjt5QkFTckMsTUFBTSxTQUFDLFFBQVE7NEJBR2YsZUFBZSxTQUFDLHVCQUF1Qjt5QkFNdkMsS0FBSyxTQUFDLFFBQVE7K0JBRWQsTUFBTSxTQUFDLGNBQWM7Z0NBRXJCLFNBQVMsU0FBQyxhQUFhLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO29DQUczQyxTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO2lDQUdqRCxTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDOzZCQXdCOUMsS0FBSyxTQUFDLFlBQVk7MEJBZ0JsQixZQUFZLFNBQUMsd0JBQXdCLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDOzBCQWF6RCxZQUFZLFNBQUMsd0JBQXdCLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDOzBCQWdCekQsS0FBSzs7SUFxMEJSLGtCQUFDO0NBQUEsQUE1N0JELENBVW9DLGdCQUFnQixHQWs3Qm5EO1NBbDdCWSxXQUFXOzs7SUFFdEIsd0NBQWdDOztJQUNoQyxrQ0FBZ0M7O0lBQ2hDLDhCQUFnQjs7SUFDaEIsa0NBQW9COztJQUNwQixnQ0FBa0I7O0lBRWxCLG1DQUFrQzs7SUFDbEMsa0NBQTBCOztJQUMxQixrQ0FDK0I7O0lBQy9CLHVDQUM4Qzs7SUFDOUMsbUNBQThCOztJQUU5QixnQ0FBc0I7O0lBQ3RCLGdDQUFzQjs7SUFDdEIsZ0NBQXNCOztJQUN0QixnQ0FBc0I7O0lBRXRCLDZCQUNtRDs7SUFDbkQsc0NBQTZEOztJQUM3RCxnQ0FDMkQ7O0lBQzNELG1DQUE2Qjs7SUFDN0Isc0NBQTZCOztJQUM3QixpQ0FBMkI7O0lBQzNCLCtCQUF3Qjs7SUFDeEIsNkJBQ2tDOztJQUNsQyxtQ0FDMEM7O0lBQzFDLG9DQUNrQzs7SUFFbEMsd0NBQ3NDOztJQUV0QyxxQ0FDbUM7O0lBQ25DLDJDQUFxRDs7SUFDckQsK0JBQXNCOztJQUN0QiwrQkFBc0I7O0lBQ3RCLGtDQUF5Qjs7SUFDekIsaUNBQXVDOztJQWdCdkMsa0NBQWlCOztJQVhmLDBCQUF1Qjs7SUFDdkIsZ0NBQTRCOztJQUM1QiwrQkFBaUM7O0lBQ2pDLGlDQUErQzs7SUFDL0MsMEJBQThCOztJQUM5QixzQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIERvQ2hlY2ssXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIGlzRGV2TW9kZSxcclxuICBJdGVyYWJsZUNoYW5nZVJlY29yZCxcclxuICBJdGVyYWJsZUNoYW5nZXMsXHJcbiAgSXRlcmFibGVEaWZmZXIsXHJcbiAgSXRlcmFibGVEaWZmZXJzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFBMQVRGT1JNX0lELFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVHJhY2tCeUZ1bmN0aW9uLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGVtcHR5LCBmcm9tRXZlbnQsIGludGVydmFsLCBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXBUbywgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE5ndUNhcm91c2VsQ29uZmlnLCBOZ3VDYXJvdXNlbE91dGxldENvbnRleHQsIE5ndUNhcm91c2VsU3RvcmUgfSBmcm9tICcuL25ndS1jYXJvdXNlbCc7XHJcbmltcG9ydCB7IE5ndUNhcm91c2VsU2VydmljZSB9IGZyb20gJy4uL25ndS1jYXJvdXNlbC5zZXJ2aWNlJztcclxuaW1wb3J0IHtcclxuICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxPdXRsZXQsXHJcbiAgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZVxyXG59IGZyb20gJy4uL25ndS1jYXJvdXNlbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi9sb2dnZXIuc2VydmljZSc7XHJcblxyXG5jb25zdCBsb2cgPSBuZXcgTG9nZ2VyKCdOZ1VDYXJvdXNlbCcpO1xyXG5cclxuLy8gVE9ETyBjYWxjdWxlciBsYSB0YWlsbGUgcG9zc2libGUgcG91ciBsZSAubmd1Y2Fyc291bCBlbiBmb25jdGlvbiBkZXMgYm91dG9ucyBwcmV2L25leHRcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ25ndS1jYXJvdXNlbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICduZ3UtY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyduZ3UtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MnXSxcclxuICB2aWV3UHJvdmlkZXJzOiBbTmd1Q2Fyb3VzZWxTZXJ2aWNlXSxcclxuICBwcm92aWRlcnM6IFtOZ3VDYXJvdXNlbFNlcnZpY2VdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtY2xhc3Mtc3VmZml4XHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbDxUPiBleHRlbmRzIE5ndUNhcm91c2VsU3RvcmVcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcclxuICBfZGF0YVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIF9kYXRhRGlmZmVyOiBJdGVyYWJsZURpZmZlcjx7fT47XHJcbiAgc3R5bGVpZDogc3RyaW5nO1xyXG4gIGFjdGl2ZVBvaW50OiBudW1iZXI7XHJcbiAgaXNIb3ZlcmVkID0gZmFsc2U7XHJcbiAgLy8gaXNGaXJzdHNzID0gMDtcclxuICBhcnJheUNoYW5nZXM6IEl0ZXJhYmxlQ2hhbmdlczx7fT47XHJcbiAgY2Fyb3VzZWxJbnQ6IFN1YnNjcmlwdGlvbjtcclxuICBAVmlld0NoaWxkKE5ndUNhcm91c2VsT3V0bGV0KVxyXG4gIF9ub2RlT3V0bGV0OiBOZ3VDYXJvdXNlbE91dGxldDtcclxuICBAVmlld0NoaWxkKE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZSlcclxuICBfY2Fyb3VzZWxXcmFwcGVyOiBOZ3VDYXJvdXNlbFdyYXBwZXJEaXJlY3RpdmU7XHJcbiAgcG9pbnROdW1iZXJzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgLy8gaXNGaXJzdHNzID0gMDtcclxuICBsaXN0ZW5lcjE6ICgpID0+IHZvaWQ7XHJcbiAgbGlzdGVuZXIyOiAoKSA9PiB2b2lkO1xyXG4gIGxpc3RlbmVyMzogKCkgPT4gdm9pZDtcclxuICBsaXN0ZW5lcjQ6ICgpID0+IHZvaWQ7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcclxuICBAT3V0cHV0KCdvbk1vdmUnKVxyXG4gIHB1YmxpYyBvbk1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE5ndUNhcm91c2VsPFQ+PigpO1xyXG4gIHByaXZhdGUgX2RlZmF1bHROb2RlRGVmOiBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxhbnk+IHwgbnVsbDtcclxuICBAQ29udGVudENoaWxkcmVuKE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlKVxyXG4gIHByaXZhdGUgX2RlZkRpcmVjOiBRdWVyeUxpc3Q8Tmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmU8YW55Pj47XHJcbiAgcHJpdmF0ZSBkaXJlY3Rpb25TeW06IHN0cmluZztcclxuICBwcml2YXRlIGNhcm91c2VsQ3NzTm9kZTogYW55O1xyXG4gIHByaXZhdGUgcG9pbnRJbmRleDogbnVtYmVyO1xyXG4gIHByaXZhdGUgd2l0aEFuaW0gPSB0cnVlO1xyXG4gIEBJbnB1dCgnaW5wdXRzJylcclxuICBwcml2YXRlIGlucHV0czogTmd1Q2Fyb3VzZWxDb25maWc7XHJcbiAgQE91dHB1dCgnY2Fyb3VzZWxMb2FkJylcclxuICBwcml2YXRlIGNhcm91c2VsTG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAVmlld0NoaWxkKCduZ3VjYXJvdXNlbCcsIHtyZWFkOiBFbGVtZW50UmVmfSlcclxuICBwcml2YXRlIGNhcm91c2VsTWFpbjE6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ25ndUl0ZW1zQ29udGFpbmVyJywge3JlYWQ6IEVsZW1lbnRSZWZ9KVxyXG4gIHByaXZhdGUgbmd1SXRlbXNDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RvdWNoQ29udGFpbmVyJywge3JlYWQ6IEVsZW1lbnRSZWZ9KVxyXG4gIHByaXZhdGUgdG91Y2hDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBfaW50ZXJ2YWxDb250cm9sbGVyJCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcclxuICBwcml2YXRlIGNhcm91c2VsOiBhbnk7XHJcbiAgcHJpdmF0ZSBvblJlc2l6ZTogYW55O1xyXG4gIHByaXZhdGUgb25TY3JvbGxpbmc6IGFueTtcclxuICBwcml2YXRlIF90cmFja0J5Rm46IFRyYWNrQnlGdW5jdGlvbjxUPjtcclxuXHJcbiAgLy8gcHJvdGVjdGVkIF9jYXJvdXNlbFdpZHRoID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIF9kaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgY2Fyb3VzZWxTZXJ2aWNlOiBOZ3VDYXJvdXNlbFNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmNhcm91c2VsU2VydmljZS5zZXRDYXJvdXNlbCh0aGlzKTtcclxuICB9XHJcblxyXG4gIF9kYXRhU291cmNlOiBhbnk7XHJcblxyXG4gIEBJbnB1dCgnZGF0YVNvdXJjZScpXHJcbiAgZ2V0IGRhdGFTb3VyY2UoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRhdGFTb3VyY2UoZGF0YTogYW55KSB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICAvLyB0aGlzLmlzRmlyc3RzcysrO1xyXG4gICAgICB0aGlzLl9zd2l0Y2hEYXRhU291cmNlKGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKiBUaGUgc2V0dGVyIGlzIHVzZWQgdG8gY2F0Y2ggdGhlIGJ1dHRvbiBpZiB0aGUgYnV0dG9uIGhhcyBuZ0lmXHJcbiAgICogaXNzdWUgaWQgIzkxXHJcbiAgICovXHJcbiAgQENvbnRlbnRDaGlsZChOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsIHtyZWFkOiBFbGVtZW50UmVmfSlcclxuICBzZXQgbmV4dEJ0bihidG46IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMubGlzdGVuZXIyICYmIHRoaXMubGlzdGVuZXIyKCk7XHJcbiAgICBpZiAoYnRuKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXIyID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKGJ0bi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoKSA9PlxyXG4gICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKDEpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogVGhlIHNldHRlciBpcyB1c2VkIHRvIGNhdGNoIHRoZSBidXR0b24gaWYgdGhlIGJ1dHRvbiBoYXMgbmdJZlxyXG4gICAqIGlzc3VlIGlkICM5MVxyXG4gICAqL1xyXG4gIEBDb250ZW50Q2hpbGQoTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgc2V0IHByZXZCdG4oYnRuOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmxpc3RlbmVyMSAmJiB0aGlzLmxpc3RlbmVyMSgpO1xyXG4gICAgaWYgKGJ0bikge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyMSA9IHRoaXMuX3JlbmRlcmVyLmxpc3RlbihidG4ubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKCkgPT5cclxuICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZSgwKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJhY2tpbmcgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2hlY2sgdGhlIGRpZmZlcmVuY2VzIGluIGRhdGEgY2hhbmdlcy4gVXNlZCBzaW1pbGFybHlcclxuICAgKiB0byBgbmdGb3JgIGB0cmFja0J5YCBmdW5jdGlvbi4gT3B0aW1pemUgSXRlbXMgb3BlcmF0aW9ucyBieSBpZGVudGlmeWluZyBhIEl0ZW1zIGJhc2VkIG9uIGl0cyBkYXRhXHJcbiAgICogcmVsYXRpdmUgdG8gdGhlIGZ1bmN0aW9uIHRvIGtub3cgaWYgYSBJdGVtcyBzaG91bGQgYmUgYWRkZWQvcmVtb3ZlZC9tb3ZlZC5cclxuICAgKiBBY2NlcHRzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gcGFyYW1ldGVycywgYGluZGV4YCBhbmQgYGl0ZW1gLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHRyYWNrQnkoKTogVHJhY2tCeUZ1bmN0aW9uPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLl90cmFja0J5Rm47XHJcbiAgfVxyXG5cclxuICBzZXQgdHJhY2tCeShmbjogVHJhY2tCeUZ1bmN0aW9uPFQ+KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGlzRGV2TW9kZSgpICYmXHJcbiAgICAgIGZuICE9IG51bGwgJiZcclxuICAgICAgdHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nICYmXHJcbiAgICAgIDxhbnk+Y29uc29sZSAmJlxyXG4gICAgICA8YW55PmNvbnNvbGUud2FyblxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBgdHJhY2tCeSBtdXN0IGJlIGEgZnVuY3Rpb24sIGJ1dCByZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KGZuKX0uYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdHJhY2tCeUZuID0gZm47XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuX2RhdGFEaWZmZXIgPSB0aGlzLl9kaWZmZXJzXHJcbiAgICAgIC5maW5kKFtdKVxyXG4gICAgICAuY3JlYXRlKChfaTogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFja0J5ID8gdGhpcy50cmFja0J5KGl0ZW0uZGF0YUluZGV4LCBpdGVtLmRhdGEpIDogaXRlbTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICB0aGlzLmFycmF5Q2hhbmdlcyA9IHRoaXMuX2RhdGFEaWZmZXIuZGlmZih0aGlzLmRhdGFTb3VyY2UpO1xyXG5cclxuICAgIGlmICh0aGlzLmFycmF5Q2hhbmdlcyAmJiB0aGlzLl9kZWZEaXJlYykge1xyXG4gICAgICB0aGlzLl9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jYXJvdXNlbCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLl9pbnB1dFZhbGlkYXRpb24oKTtcclxuXHJcbiAgICB0aGlzLmNhcm91c2VsQ3NzTm9kZSA9IHRoaXMuX2NyZWF0ZVN0eWxlRWxlbSgpO1xyXG5cclxuICAgIC8vIHRoaXMuX2J1dHRvbkNvbnRyb2woKTtcclxuXHJcbiAgICBpZiAod2luZG93KSB7XHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsSW50ZXJ2YWwoKTtcclxuICAgICAgaWYgKCF0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLl90b3VjaCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGlzdGVuZXIzID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMuX29uUmVzaXppbmcoZXZlbnQpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fb25XaW5kb3dTY3JvbGxpbmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG5cclxuICAvKiogVXNlZCB0byByZXNldCB0aGUgY2Fyb3VzZWwgKi9cclxuICBwdWJsaWMgcmVzZXQod2l0aE91dEFuaW1hdGlvbj86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHdpdGhPdXRBbmltYXRpb24gJiYgKHRoaXMud2l0aEFuaW0gPSBmYWxzZSk7XHJcbiAgICBpZiAodGhpcy5jYXJvdXNlbENzc05vZGUpIHtcclxuICAgICAgdGhpcy5jYXJvdXNlbENzc05vZGUuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICB0aGlzLm1vdmVUbygwKTtcclxuICAgICAgdGhpcy5fY2Fyb3VzZWxQb2ludCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBzY29sbCB0aGUgY2Fyb3VzZWwgd2hlbiBwb2ludCBpcyBjbGlja2VkICovXHJcbiAgcHVibGljIG1vdmVUbyhzbGlkZTogbnVtYmVyLCB3aXRoT3V0QW5pbWF0aW9uPzogYm9vbGVhbikge1xyXG4gICAgLy8gc2xpZGUgPSBzbGlkZSAtIDE7XHJcbiAgICB3aXRoT3V0QW5pbWF0aW9uICYmICh0aGlzLndpdGhBbmltID0gZmFsc2UpO1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlUG9pbnQgIT09IHNsaWRlICYmIHNsaWRlIDwgdGhpcy5wb2ludEluZGV4KSB7XHJcbiAgICAgIGxldCBzbGlkZXJlbWFpbnM7XHJcbiAgICAgIGNvbnN0IGJ0bnMgPSB0aGlzLmN1cnJlbnRTbGlkZSA8IHNsaWRlID8gMSA6IDA7XHJcblxyXG4gICAgICBzd2l0Y2ggKHNsaWRlKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgICAgIHNsaWRlcmVtYWlucyA9IHNsaWRlICogdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSB0aGlzLnBvaW50SW5kZXggLSAxOlxyXG4gICAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcclxuICAgICAgICAgIHNsaWRlcmVtYWlucyA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLml0ZW1zO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMCk7XHJcbiAgICAgICAgICBzbGlkZXJlbWFpbnMgPSBzbGlkZSAqIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbFR3byhidG5zLCBzbGlkZXJlbWFpbnMsIHRoaXMuc3BlZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgLy8gY2xlYXJJbnRlcnZhbCh0aGlzLmNhcm91c2VsSW50KTtcclxuICAgIHRoaXMuY2Fyb3VzZWxJbnQgJiYgdGhpcy5jYXJvdXNlbEludC51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJC51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5jYXJvdXNlbExvYWQuY29tcGxldGUoKTtcclxuICAgIHRoaXMub25Nb3ZlLmNvbXBsZXRlKCk7XHJcblxyXG4gICAgLyoqIHJlbW92ZSBsaXN0ZW5lcnMgKi9cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xyXG4gICAgICBjb25zdCBzdHIgPSBgbGlzdGVuZXIke2l9YDtcclxuICAgICAgdGhpc1tzdHJdICYmIHRoaXNbc3RyXSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc3dpdGNoRGF0YVNvdXJjZShkYXRhU291cmNlOiBhbnkpOiBhbnkge1xyXG4gICAgdGhpcy5fZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XHJcbiAgICBpZiAodGhpcy5fZGVmRGlyZWMpIHtcclxuICAgICAgdGhpcy5fb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyTm9kZUNoYW5nZXMoXHJcbiAgICBkYXRhOiBhbnlbXSxcclxuICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXJcclxuICApIHtcclxuXHJcbiAgICBpZiAoIXRoaXMuYXJyYXlDaGFuZ2VzKSByZXR1cm47XHJcbiAgICB0aGlzLmFycmF5Q2hhbmdlcy5mb3JFYWNoT3BlcmF0aW9uKFxyXG4gICAgICAoXHJcbiAgICAgICAgaXRlbTogSXRlcmFibGVDaGFuZ2VSZWNvcmQ8YW55PixcclxuICAgICAgICBhZGp1c3RlZFByZXZpb3VzSW5kZXg6IG51bWJlcixcclxuICAgICAgICBjdXJyZW50SW5kZXg6IG51bWJlclxyXG4gICAgICApID0+IHtcclxuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5fZ2V0Tm9kZURlZihkYXRhW2N1cnJlbnRJbmRleF0sIGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgaWYgKGl0ZW0ucHJldmlvdXNJbmRleCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBOZ3VDYXJvdXNlbE91dGxldENvbnRleHQ8YW55PihkYXRhW2N1cnJlbnRJbmRleF0pO1xyXG4gICAgICAgICAgY29udGV4dC5pbmRleCA9IGN1cnJlbnRJbmRleDtcclxuICAgICAgICAgIHZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KFxyXG4gICAgICAgICAgICBub2RlLnRlbXBsYXRlLFxyXG4gICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXhcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50SW5kZXggPT09IG51bGwpIHtcclxuICAgICAgICAgIHZpZXdDb250YWluZXIucmVtb3ZlKGFkanVzdGVkUHJldmlvdXNJbmRleCk7XHJcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLmNsZWFyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHZpZXcgPSB2aWV3Q29udGFpbmVyLmdldChhZGp1c3RlZFByZXZpb3VzSW5kZXgpO1xyXG4gICAgICAgICAgdmlld0NvbnRhaW5lci5tb3ZlKHZpZXcsIGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgdGhpcy5fdXBkYXRlSXRlbUluZGV4Q29udGV4dCgpO1xyXG5cclxuICAgIGlmICh0aGlzLmNhcm91c2VsKSB7XHJcbiAgICAgIHRoaXMuX3N0b3JlQ2Fyb3VzZWxEYXRhKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSBpbmRleC1yZWxhdGVkIGNvbnRleHQgZm9yIGVhY2ggcm93IHRvIHJlZmxlY3QgYW55IGNoYW5nZXMgaW4gdGhlIGluZGV4IG9mIHRoZSByb3dzLFxyXG4gICAqIGUuZy4gZmlyc3QvbGFzdC9ldmVuL29kZC5cclxuICAgKi9cclxuICBwcml2YXRlIF91cGRhdGVJdGVtSW5kZXhDb250ZXh0KCkge1xyXG4gICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lcjtcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCByZW5kZXJJbmRleCA9IDAsIGNvdW50ID0gdmlld0NvbnRhaW5lci5sZW5ndGg7XHJcbiAgICAgIHJlbmRlckluZGV4IDwgY291bnQ7XHJcbiAgICAgIHJlbmRlckluZGV4KytcclxuICAgICkge1xyXG4gICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQocmVuZGVySW5kZXgpIGFzIGFueTtcclxuICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgIGNvbnRleHQuY291bnQgPSBjb3VudDtcclxuXHJcbiAgICAgIGNvbnRleHQuZmlyc3QgPSByZW5kZXJJbmRleCA9PT0gMDtcclxuICAgICAgY29udGV4dC5sYXN0ID0gcmVuZGVySW5kZXggPT09IGNvdW50IC0gMTtcclxuICAgICAgY29udGV4dC5ldmVuID0gcmVuZGVySW5kZXggJSAyID09PSAwO1xyXG4gICAgICBjb250ZXh0Lm9kZCA9ICFjb250ZXh0LmV2ZW47XHJcbiAgICAgIGNvbnRleHQuaW5kZXggPSByZW5kZXJJbmRleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldE5vZGVEZWYoZGF0YTogYW55LCBpOiBudW1iZXIpOiBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxhbnk+IHtcclxuICAgIGlmICh0aGlzLl9kZWZEaXJlYy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2RlZkRpcmVjLmZpcnN0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vZGVEZWYgPVxyXG4gICAgICB0aGlzLl9kZWZEaXJlYy5maW5kKGRlZiA9PiBkZWYud2hlbiAmJiBkZWYud2hlbihpLCBkYXRhKSkgfHxcclxuICAgICAgdGhpcy5fZGVmYXVsdE5vZGVEZWY7XHJcblxyXG4gICAgcmV0dXJuIG5vZGVEZWY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpIHtcclxuICAgIGxldCBkYXRhU3RyZWFtOiBPYnNlcnZhYmxlPGFueVtdPiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBpZiAodGhpcy5fZGF0YVNvdXJjZSBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcclxuICAgICAgZGF0YVN0cmVhbSA9IHRoaXMuX2RhdGFTb3VyY2U7XHJcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5fZGF0YVNvdXJjZSkpIHtcclxuICAgICAgZGF0YVN0cmVhbSA9IG9mKHRoaXMuX2RhdGFTb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhU3RyZWFtKSB7XHJcbiAgICAgIHRoaXMuX2RhdGFTdWJzY3JpcHRpb24gPSBkYXRhU3RyZWFtXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2ludGVydmFsQ29udHJvbGxlciQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlck5vZGVDaGFuZ2VzKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5pc0xhc3QgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2lucHV0VmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMudHlwZSA9IHRoaXMuaW5wdXRzLmdyaWQuYWxsICE9PSAwID8gJ2ZpeGVkJyA6ICdyZXNwb25zaXZlJztcclxuICAgIHRoaXMubG9vcCA9IHRoaXMuaW5wdXRzLmxvb3AgfHwgZmFsc2U7XHJcbiAgICB0aGlzLmlucHV0cy5lYXNpbmcgPSB0aGlzLmlucHV0cy5lYXNpbmcgfHwgJ2N1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJztcclxuICAgIHRoaXMudG91Y2guYWN0aXZlID0gdGhpcy5pbnB1dHMudG91Y2ggfHwgZmFsc2U7XHJcbiAgICB0aGlzLlJUTCA9IHRoaXMuaW5wdXRzLlJUTCA/IHRydWUgOiBmYWxzZTtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSB0aGlzLmlucHV0cy5pbnRlcnZhbCB8fCBudWxsO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLmlucHV0cy52ZWxvY2l0eSA9PT0gJ251bWJlcidcclxuICAgICAgICA/IHRoaXMuaW5wdXRzLnZlbG9jaXR5XHJcbiAgICAgICAgOiB0aGlzLnZlbG9jaXR5O1xyXG5cclxuICAgIGlmICh0aGlzLmlucHV0cy52ZXJ0aWNhbCAmJiB0aGlzLmlucHV0cy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMudmVydGljYWwuZW5hYmxlZCA9IHRoaXMuaW5wdXRzLnZlcnRpY2FsLmVuYWJsZWQ7XHJcbiAgICAgIHRoaXMudmVydGljYWwuaGVpZ2h0ID0gdGhpcy5pbnB1dHMudmVydGljYWwuaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgdGhpcy5kaXJlY3Rpb25TeW0gPSB0aGlzLlJUTCA/ICcnIDogJy0nO1xyXG4gICAgdGhpcy5wb2ludCA9XHJcbiAgICAgIHRoaXMuaW5wdXRzLnBvaW50ICYmIHR5cGVvZiB0aGlzLmlucHV0cy5wb2ludC52aXNpYmxlICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gdGhpcy5pbnB1dHMucG9pbnQudmlzaWJsZVxyXG4gICAgICAgIDogdHJ1ZTtcclxuXHJcbiAgICB0aGlzLl9jYXJvdXNlbFNpemUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uUmVzaXppbmcoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMub25SZXNpemUpO1xyXG4gICAgdGhpcy5vblJlc2l6ZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoTmd1Q2Fyb3VzZWwuZGV2aWNlV2lkdGggIT09IGV2ZW50LnRhcmdldC5vdXRlcldpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0U3R5bGUodGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsIGBgKTtcclxuICAgICAgICB0aGlzLl9zdG9yZUNhcm91c2VsRGF0YSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVmcmVzaENhcm91c2VsV2lkdGgoKTtcclxuXHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaENhcm91c2VsV2lkdGgoKSB7XHJcbiAgICB0aGlzLl9jYXJvdXNlbFdpZHRoID0gdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNhcm91c2VsV2lkdGgoKSB7XHJcbiAgICBsb2cudGltaW5nKCdjYXJvdXNlbFdpZHRoIHN0YXJ0Jyk7XHJcbiAgICBpZiAoIXRoaXMuX2Nhcm91c2VsV2lkdGgpIHtcclxuICAgICAgdGhpcy5yZWZyZXNoQ2Fyb3VzZWxXaWR0aCgpO1xyXG4gICAgfVxyXG4gICAgbG9nLnRpbWluZygnY2Fyb3VzZWxXaWR0aCBlbmQnKTtcclxuICAgIHJldHVybiB0aGlzLl9jYXJvdXNlbFdpZHRoO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldCBUb3VjaCBpbnB1dCAqL1xyXG4gIHByaXZhdGUgX3RvdWNoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRzLnRvdWNoKSB7XHJcbiAgICAgIGNvbnN0IGhhbW1lcnRpbWUgPSBuZXcgSGFtbWVyKHRoaXMudG91Y2hDb250YWluZXIubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIGhhbW1lcnRpbWUuZ2V0KCdwYW4nKS5zZXQoe2RpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9IT1JJWk9OVEFMfSk7XHJcblxyXG4gICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5zdGFydCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQ2Fyb3VzZWxXaWR0aCgpO1xyXG4gICAgICAgIC8vIHRoaXMuY2Fyb3VzZWxXaWR0aCA9IHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAvLyB0aGlzLnRvdWNoVHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm1bdGhpcy5kZXZpY2VUeXBlXTtcclxuICAgICAgICB0aGlzLmRleFZhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5fc2V0U3R5bGUodGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsICcnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW51cCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5sZWZ0JywgZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGhhbW1lcnRpbWUub24oJ3BhbmRvd24nLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fdG91Y2hIYW5kbGluZygncGFucmlnaHQnLCBldik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFubGVmdCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5sZWZ0JywgZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGhhbW1lcnRpbWUub24oJ3BhbnJpZ2h0JywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbnJpZ2h0JywgZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8qaGFtbWVydGltZS5vbigncGFuZW5kJywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoTWF0aC5hYnMoZXYudmVsb2NpdHkpID49IHRoaXMudmVsb2NpdHkpIHtcclxuICAgICAgICAgIHRoaXMudG91Y2gudmVsb2NpdHkgPSBldi52ZWxvY2l0eTtcclxuICAgICAgICAgIGxldCBkaXJlYyA9IDA7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuUlRMKSB7XHJcbiAgICAgICAgICAgIGRpcmVjID0gdGhpcy50b3VjaC5zd2lwZSA9PT0gJ3BhbnJpZ2h0JyA/IDAgOiAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlyZWMgPSB0aGlzLnRvdWNoLnN3aXBlID09PSAncGFucmlnaHQnID8gMSA6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZShkaXJlYyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZGV4VmFsID0gMDtcclxuICAgICAgICAgIHRoaXMuX3NldFN0eWxlKFxyXG4gICAgICAgICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJyxcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybSAzMjRtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSdcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAvLyB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTsqL1xyXG4gICAgICBoYW1tZXJ0aW1lLm9uKCdoYW1tZXIuaW5wdXQnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAvLyBhbGxvdyBuZXN0ZWQgdG91Y2ggZXZlbnRzIHRvIG5vIHByb3BhZ2F0ZSwgdGhpcyBtYXkgaGF2ZSBvdGhlciBzaWRlIGFmZmVjdHMgYnV0IHdvcmtzIGZvciBub3cuXHJcbiAgICAgICAgLy8gVE9ETzogSXQgaXMgcHJvYmFibHkgYmV0dGVyIHRvIGNoZWNrIHRoZSBzb3VyY2UgZWxlbWVudCBvZiB0aGUgZXZlbnQgYW5kIG9ubHkgYXBwbHkgdGhlIGhhbmRsZSB0byB0aGUgY29ycmVjdCBjYXJvdXNlbFxyXG4gICAgICAgIGV2LnNyY0V2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBoYW5kbGUgdG91Y2ggaW5wdXQgKi9cclxuICBwcml2YXRlIF90b3VjaEhhbmRsaW5nKGU6IHN0cmluZywgZXY6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gdmVydGljYWwgdG91Y2ggZXZlbnRzIHNlZW0gdG8gY2F1c2UgdG8gcGFuc3RhcnQgZXZlbnQgd2l0aCBhbiBvZGQgZGVsdGFcclxuICAgIC8vIGFuZCBhIGNlbnRlciBvZiB7eDowLHk6MH0gc28gdGhpcyB3aWxsIGlnbm9yZSB0aGVtXHJcblxyXG4gICAgaWYgKGV2LmNlbnRlci54ID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBldiA9IE1hdGguYWJzKHRoaXMudmVydGljYWwuZW5hYmxlZCA/IGV2LmRlbHRhWSA6IGV2LmRlbHRhWCk7XHJcbiAgICBsZXQgdmFsdCA9IGV2IC0gdGhpcy5kZXhWYWw7XHJcbiAgICB2YWx0ID1cclxuICAgICAgdGhpcy50eXBlID09PSAncmVzcG9uc2l2ZSdcclxuICAgICAgICA/IChNYXRoLmFicyhldiAtIHRoaXMuZGV4VmFsKSAvXHJcbiAgICAgICAgKHRoaXMudmVydGljYWwuZW5hYmxlZFxyXG4gICAgICAgICAgPyB0aGlzLnZlcnRpY2FsLmhlaWdodFxyXG4gICAgICAgICAgOiB0aGlzLl9jYXJvdXNlbFdpZHRoKSkgKlxyXG4gICAgICAgIDEwMFxyXG4gICAgICAgIDogdmFsdDtcclxuXHJcbiAgICB0aGlzLmRleFZhbCA9IGV2O1xyXG4gICAgdGhpcy50b3VjaC5zd2lwZSA9IGU7XHJcbiAgICB0aGlzLl9zZXRUb3VjaFRyYW5zZnJvbShlLCB2YWx0KTtcclxuICAgIHRoaXMuX3NldFRyYW5zZm9ybUZyb21Ub3VjaCgpO1xyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldFRvdWNoVHJhbnNmcm9tKGU6IHN0cmluZywgdmFsdDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLlJUTCA/ICdwYW5yaWdodCcgOiAncGFubGVmdCc7XHJcbiAgICB0aGlzLnRvdWNoVHJhbnNmb3JtID1cclxuICAgICAgZSA9PT0gY29uZGl0aW9uID8gdmFsdCArIHRoaXMudG91Y2hUcmFuc2Zvcm0gOiB0aGlzLnRvdWNoVHJhbnNmb3JtIC0gdmFsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldFRyYW5zZm9ybUZyb21Ub3VjaCgpIHtcclxuXHJcbiAgICB0aGlzLnJlZnJlc2hDYXJvdXNlbFdpZHRoKCk7XHJcbiAgICBpZiAodGhpcy50b3VjaFRyYW5zZm9ybSA8IDApIHtcclxuICAgICAgdGhpcy50b3VjaFRyYW5zZm9ybSA9IDA7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScgPyAnJScgOiAncHgnO1xyXG5cclxuICAgIGxldCAgbWF4VHJhbnNsYXRlID0gKHRoaXMuaXRlbVdpZHRoICogdGhpcy5fZGF0YVNvdXJjZS5sZW5ndGgpIC0gdGhpcy5jYXJvdXNlbFdpZHRoO1xyXG5cclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xyXG4gICAgICBtYXhUcmFuc2xhdGUgPSAobWF4VHJhbnNsYXRlIC8gdGhpcy5jYXJvdXNlbFdpZHRoKSAqIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWF4VHJhbnNsYXRlIDw9IHRoaXMudG91Y2hUcmFuc2Zvcm0pIHtcclxuICAgICAgdGhpcy50b3VjaFRyYW5zZm9ybSA9IG1heFRyYW5zbGF0ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5vbk1vdmUuZW1pdCh0aGlzKTtcclxuICAgIHRoaXMuX3NldFN0eWxlKFxyXG4gICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICB0aGlzLnZlcnRpY2FsLmVuYWJsZWRcclxuICAgICAgICA/IGB0cmFuc2xhdGUzZCgwLCAke3RoaXMuZGlyZWN0aW9uU3ltfSR7dGhpcy50b3VjaFRyYW5zZm9ybX0ke3R5cGV9LCAwKWBcclxuICAgICAgICA6IGB0cmFuc2xhdGUzZCgke3RoaXMuZGlyZWN0aW9uU3ltfSR7dGhpcy50b3VjaFRyYW5zZm9ybX0ke3R5cGV9LCAwLCAwKWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiogdGhpcyBmbiB1c2VkIHRvIGRpc2FibGUgdGhlIGludGVydmFsIHdoZW4gaXQgaXMgbm90IG9uIHRoZSB2aWV3cG9ydCAqL1xyXG4gIHByaXZhdGUgX29uV2luZG93U2Nyb2xsaW5nKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdG9wID0gdGhpcy5jYXJvdXNlbC5vZmZzZXRUb3A7XHJcbiAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICBjb25zdCBoZWlnaHR0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgY29uc3QgY2Fyb3VzZWxIZWlnaHQgPSB0aGlzLmNhcm91c2VsLm9mZnNldEhlaWdodDtcclxuICAgIGNvbnN0IGlzQ2Fyb3VzZWxPblNjcmVlbiA9XHJcbiAgICAgIHRvcCA8PSBzY3JvbGxZICsgaGVpZ2h0dCAtIGNhcm91c2VsSGVpZ2h0IC8gNCAmJlxyXG4gICAgICB0b3AgKyBjYXJvdXNlbEhlaWdodCAvIDIgPj0gc2Nyb2xsWTtcclxuXHJcbiAgICBpZiAoaXNDYXJvdXNlbE9uU2NyZWVuKSB7XHJcbiAgICAgIHRoaXMuX2ludGVydmFsQ29udHJvbGxlciQubmV4dCgxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2ludGVydmFsQ29udHJvbGxlciQubmV4dCgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBzdG9yZSBkYXRhIGJhc2VkIG9uIHdpZHRoIG9mIHRoZSBzY3JlZW4gZm9yIHRoZSBjYXJvdXNlbCAqL1xyXG4gIHByaXZhdGUgX3N0b3JlQ2Fyb3VzZWxEYXRhKCk6IHZvaWQge1xyXG4gICAgbG9nLnRpbWluZygnc3RhcnQnKTtcclxuXHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScpIHtcclxuICAgICAgdGhpcy5kZXZpY2VUeXBlID1cclxuICAgICAgICBOZ3VDYXJvdXNlbC5kZXZpY2VXaWR0aCA+PSAxMjAwXHJcbiAgICAgICAgICA/ICdsZydcclxuICAgICAgICAgIDogTmd1Q2Fyb3VzZWwuZGV2aWNlV2lkdGggPj0gOTkyXHJcbiAgICAgICAgICA/ICdtZCdcclxuICAgICAgICAgIDogTmd1Q2Fyb3VzZWwuZGV2aWNlV2lkdGggPj0gNzY4XHJcbiAgICAgICAgICAgID8gJ3NtJ1xyXG4gICAgICAgICAgICA6ICd4cyc7XHJcblxyXG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5pbnB1dHMuZ3JpZFt0aGlzLmRldmljZVR5cGVdO1xyXG4gICAgICB0aGlzLml0ZW1XaWR0aCA9IHRoaXMuY2Fyb3VzZWxXaWR0aCAvIHRoaXMuaXRlbXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLml0ZW1zID0gTWF0aC5jZWlsKHRoaXMuY2Fyb3VzZWxXaWR0aCAvIHRoaXMuaW5wdXRzLmdyaWQuYWxsKTtcclxuICAgICAgdGhpcy5pdGVtV2lkdGggPSB0aGlzLmlucHV0cy5ncmlkLmFsbDtcclxuICAgICAgdGhpcy5kZXZpY2VUeXBlID0gJ2FsbCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zbGlkZUl0ZW1zID0gKyh0aGlzLmlucHV0cy5zbGlkZSA8IHRoaXMuaXRlbXNcclxuICAgICAgPyB0aGlzLmlucHV0cy5zbGlkZVxyXG4gICAgICA6IHRoaXMuaXRlbXMpO1xyXG4gICAgdGhpcy5sb2FkID1cclxuICAgICAgdGhpcy5pbnB1dHMubG9hZCA+PSB0aGlzLnNsaWRlSXRlbXMgPyB0aGlzLmlucHV0cy5sb2FkIDogdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgdGhpcy5zcGVlZCA9XHJcbiAgICAgIHRoaXMuaW5wdXRzLnNwZWVkICYmIHRoaXMuaW5wdXRzLnNwZWVkID4gLTEgPyB0aGlzLmlucHV0cy5zcGVlZCA6IDQwMDtcclxuICAgIGxvZy50aW1pbmcoJ2VuZCcpO1xyXG4gICAgLy8gdGhpcy5fY2Fyb3VzZWxQb2ludCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEluaXQgY2Fyb3VzZWwgcG9pbnQgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFBvaW50KCk6IHZvaWQge1xyXG4gICAgY29uc3QgTm9zID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtICh0aGlzLml0ZW1zIC0gdGhpcy5zbGlkZUl0ZW1zKTtcclxuICAgIHRoaXMucG9pbnRJbmRleCA9IE1hdGguY2VpbChOb3MgLyB0aGlzLnNsaWRlSXRlbXMpO1xyXG4gICAgY29uc3QgcG9pbnRlcnMgPSBbXTtcclxuXHJcbiAgICBpZiAodGhpcy5wb2ludEluZGV4ID4gMSB8fCAhdGhpcy5pbnB1dHMucG9pbnQuaGlkZU9uU2luZ2xlU2xpZGUpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50SW5kZXg7IGkrKykge1xyXG4gICAgICAgIHBvaW50ZXJzLnB1c2goaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMucG9pbnROdW1iZXJzID0gcG9pbnRlcnM7XHJcbiAgICB0aGlzLl9jYXJvdXNlbFBvaW50QWN0aXZlcigpO1xyXG4gICAgaWYgKHRoaXMucG9pbnRJbmRleCA8PSAxKSB7XHJcbiAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMSwgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUgPT09IDAgJiYgIXRoaXMubG9vcCkge1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMSwgMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgLyoqIGNoYW5nZSB0aGUgYWN0aXZlIHBvaW50IGluIGNhcm91c2VsICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxQb2ludEFjdGl2ZXIoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpID0gTWF0aC5jZWlsKHRoaXMuY3VycmVudFNsaWRlIC8gdGhpcy5zbGlkZUl0ZW1zKTtcclxuICAgIHRoaXMuYWN0aXZlUG9pbnQgPSBpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKiogc2V0IHRoZSBzdHlsZSBvZiB0aGUgY2Fyb3VzZWwgYmFzZWQgdGhlIGlucHV0cyBkYXRhICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxTaXplKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b2tlbiA9IHRoaXMuX2dlbmVyYXRlSUQoKTtcclxuICAgIGxldCBkaXNtID0gJyc7XHJcbiAgICB0aGlzLnN0eWxlaWQgPSBgLiR7XHJcbiAgICAgIHRoaXMudG9rZW5cclxuICAgICAgfSA+IC5jYXJvdXNlbC13cmFwcGVyID4gLm5ndWNhcm91c2VsID4gLm5ndS10b3VjaC1jb250YWluZXIgPiAubmd1Y2Fyb3VzZWwtaXRlbXNgO1xyXG5cclxuICAgIGlmICh0aGlzLmlucHV0cy5jdXN0b20gPT09ICdiYW5uZXInKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuY2Fyb3VzZWwsICdiYW5uZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnB1dHMuYW5pbWF0aW9uID09PSAnbGF6eScpIHtcclxuICAgICAgZGlzbSArPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge3RyYW5zaXRpb246IHRyYW5zZm9ybSAuNnMgZWFzZTt9YDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXRlbVN0eWxlID0gJyc7XHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF94cyA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcclxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQueHN9cHh9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX3NtID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxyXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC5zbX1weH1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfbWQgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXHJcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLm1kfXB4fWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9sZyA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcclxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQubGd9cHh9YDtcclxuXHJcbiAgICAgIGl0ZW1TdHlsZSA9IGBAbWVkaWEgKG1heC13aWR0aDo3NjdweCl7JHtpdGVtV2lkdGhfeHN9fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXske2l0ZW1XaWR0aF9zbX19XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6OTkycHgpeyR7aXRlbVdpZHRoX21kfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpeyR7aXRlbVdpZHRoX2xnfX1gO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfeHMgPVxyXG4gICAgICAgIHRoaXMuaW5wdXRzLnR5cGUgPT09ICdtb2JpbGUnXHJcbiAgICAgICAgICA/IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAkezk1IC9cclxuICAgICAgICAgICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7IHdpZHRoOiAkezk1IC8gK3RoaXMuaW5wdXRzLmdyaWQueHN9JTt9YFxyXG4gICAgICAgICAgOiBgJHt0aGlzLnN0eWxlaWR9IC5pdGVtIHtmbGV4OiAwIDAgJHsxMDAgL1xyXG4gICAgICAgICAgK3RoaXMuaW5wdXRzLmdyaWQueHN9JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQueHN9JTt9YDtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9zbSA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cclxuICAgICAgK3RoaXMuaW5wdXRzLmdyaWQuc219JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQuc219JX1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfbWQgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXHJcbiAgICAgICt0aGlzLmlucHV0cy5ncmlkLm1kfSU7IHdpZHRoOiAkezEwMCAvICt0aGlzLmlucHV0cy5ncmlkLm1kfSV9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX2xnID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtmbGV4OiAwIDAgJHsxMDAgL1xyXG4gICAgICArdGhpcy5pbnB1dHMuZ3JpZC5sZ30lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC5sZ30lfWA7XHJcblxyXG4gICAgICBpdGVtU3R5bGUgPSBgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpeyR7aXRlbVdpZHRoX3hzfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7JHtpdGVtV2lkdGhfc219fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXske2l0ZW1XaWR0aF9tZH19XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXske2l0ZW1XaWR0aF9sZ319YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW1TdHlsZSA9IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAke1xyXG4gICAgICAgIHRoaXMuaW5wdXRzLmdyaWQuYWxsXHJcbiAgICAgICAgfXB4OyB3aWR0aDogJHt0aGlzLmlucHV0cy5ncmlkLmFsbH1weDt9YDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgdGhpcy50b2tlbik7XHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxyXG4gICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAnbmd1dmVydGljYWwnXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgIGAke3RoaXMudmVydGljYWwuaGVpZ2h0fXB4YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG4gICAgdGhpcy5SVEwgJiZcclxuICAgICF0aGlzLnZlcnRpY2FsLmVuYWJsZWQgJiZcclxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuY2Fyb3VzZWwsICduZ3VydGwnKTtcclxuICAgIHRoaXMuX2NyZWF0ZVN0eWxlRWxlbShgJHtkaXNtfSAke2l0ZW1TdHlsZX1gKTtcclxuICAgIHRoaXMuX3N0b3JlQ2Fyb3VzZWxEYXRhKCk7XHJcbiAgfVxyXG5cclxuICAvKiogbG9naWMgdG8gc2Nyb2xsIHRoZSBjYXJvdXNlbCBzdGVwIDEgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFNjcm9sbE9uZShCdG46IG51bWJlcik6IHZvaWQge1xyXG4gICAgbGV0IGl0ZW1TcGVlZCA9IHRoaXMuc3BlZWQ7XHJcbiAgICBsZXQgdHJhbnNsYXRlWHZhbCxcclxuICAgICAgY3VycmVudFNsaWRlID0gMDtcclxuICAgIGNvbnN0IHRvdWNoTW92ZSA9IE1hdGguY2VpbCh0aGlzLmRleFZhbCAvIHRoaXMuaXRlbVdpZHRoKTtcclxuICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICcnKTtcclxuXHJcbiAgICBpZiAodGhpcy5wb2ludEluZGV4ID09PSAxKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAoQnRuID09PSAwICYmICgoIXRoaXMubG9vcCAmJiAhdGhpcy5pc0ZpcnN0KSB8fCB0aGlzLmxvb3ApKSB7XHJcbiAgICAgIGNvbnN0IHNsaWRlID0gdGhpcy5zbGlkZUl0ZW1zICogdGhpcy5wb2ludEluZGV4O1xyXG5cclxuICAgICAgY29uc3QgY3VycmVudFNsaWRlRCA9IHRoaXMuY3VycmVudFNsaWRlIC0gdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICBjb25zdCBNb3ZlU2xpZGUgPSBjdXJyZW50U2xpZGVEICsgdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUgPT09IDApIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5pdGVtcztcclxuICAgICAgICBpdGVtU3BlZWQgPSA0MDA7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlSXRlbXMgPj0gTW92ZVNsaWRlKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gdHJhbnNsYXRlWHZhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICAgIGlmICh0b3VjaE1vdmUgPiB0aGlzLnNsaWRlSXRlbXMpIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlIC0gdG91Y2hNb3ZlO1xyXG4gICAgICAgICAgaXRlbVNwZWVkID0gMjAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZSAtIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxUd28oQnRuLCBjdXJyZW50U2xpZGUsIGl0ZW1TcGVlZCk7XHJcbiAgICB9IGVsc2UgaWYgKEJ0biA9PT0gMSAmJiAoKCF0aGlzLmxvb3AgJiYgIXRoaXMuaXNMYXN0KSB8fCB0aGlzLmxvb3ApKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIDw9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLml0ZW1zICsgdGhpcy5zbGlkZUl0ZW1zICYmXHJcbiAgICAgICAgIXRoaXMuaXNMYXN0XHJcbiAgICAgICkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLml0ZW1zO1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0xhc3QpIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSB0cmFuc2xhdGVYdmFsID0gMDtcclxuICAgICAgICBpdGVtU3BlZWQgPSA0MDA7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICAgIGlmICh0b3VjaE1vdmUgPiB0aGlzLnNsaWRlSXRlbXMpIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5zbGlkZUl0ZW1zICsgKHRvdWNoTW92ZSAtIHRoaXMuc2xpZGVJdGVtcyk7XHJcbiAgICAgICAgICBpdGVtU3BlZWQgPSAyMDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbFR3byhCdG4sIGN1cnJlbnRTbGlkZSwgaXRlbVNwZWVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBsb2dpYyB0byBzY3JvbGwgdGhlIGNhcm91c2VsIHN0ZXAgMiAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsU2Nyb2xsVHdvKFxyXG4gICAgQnRuOiBudW1iZXIsXHJcbiAgICBjdXJyZW50U2xpZGU6IG51bWJlcixcclxuICAgIGl0ZW1TcGVlZDogbnVtYmVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cclxuXHJcbiAgICBpZiAodGhpcy5kZXhWYWwgIT09IDApIHtcclxuICAgICAgY29uc3QgdmFsID0gTWF0aC5hYnModGhpcy50b3VjaC52ZWxvY2l0eSk7XHJcbiAgICAgIGxldCBzb210ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAodGhpcy5kZXhWYWwgLyB2YWwgLyB0aGlzLmRleFZhbCkgKiAoTmd1Q2Fyb3VzZWwuZGV2aWNlV2lkdGggLSB0aGlzLmRleFZhbClcclxuICAgICAgKTtcclxuICAgICAgc29tdCA9IHNvbXQgPiBpdGVtU3BlZWQgPyBpdGVtU3BlZWQgOiBzb210O1xyXG4gICAgICBpdGVtU3BlZWQgPSBzb210IDwgMjAwID8gMjAwIDogc29tdDtcclxuICAgICAgdGhpcy5kZXhWYWwgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMud2l0aEFuaW0pIHtcclxuICAgICAgdGhpcy5fc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICd0cmFuc2l0aW9uJyxcclxuICAgICAgICBgdHJhbnNmb3JtICR7aXRlbVNwZWVkfW1zICR7dGhpcy5pbnB1dHMuZWFzaW5nfWBcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5pbnB1dHMuYW5pbWF0aW9uICYmXHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsQW5pbWF0b3IoXHJcbiAgICAgICAgQnRuLFxyXG4gICAgICAgIGN1cnJlbnRTbGlkZSArIDEsXHJcbiAgICAgICAgY3VycmVudFNsaWRlICsgdGhpcy5pdGVtcyxcclxuICAgICAgICBpdGVtU3BlZWQsXHJcbiAgICAgICAgTWF0aC5hYnModGhpcy5jdXJyZW50U2xpZGUgLSBjdXJyZW50U2xpZGUpXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgYGApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pdGVtTGVuZ3RoID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aDtcclxuICAgIHRoaXMuX3RyYW5zZm9ybVN0eWxlKGN1cnJlbnRTbGlkZSk7XHJcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IGN1cnJlbnRTbGlkZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uTW92ZS5lbWl0KHRoaXMpO1xyXG4gICAgfSwgNDAwKTtcclxuXHJcbiAgICB0aGlzLl9jYXJvdXNlbFBvaW50QWN0aXZlcigpO1xyXG4gICAgdGhpcy5fY2Fyb3VzZWxMb2FkVHJpZ2dlcigpO1xyXG4gICAgdGhpcy53aXRoQW5pbSA9IHRydWU7XHJcbiAgICAvLyBpZiAoY3VycmVudFNsaWRlID09PSAxMikge1xyXG4gICAgLy8gICB0aGlzLl9zd2l0Y2hEYXRhU291cmNlKHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICAvKiogYm9vbGVhbiBmdW5jdGlvbiBmb3IgbWFraW5nIGlzRmlyc3QgYW5kIGlzTGFzdCAqL1xyXG4gIHByaXZhdGUgX2J0bkJvb2xlYW4oZmlyc3Q6IG51bWJlciwgbGFzdDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmlzRmlyc3QgPSAhIWZpcnN0O1xyXG4gICAgdGhpcy5pc0xhc3QgPSAhIWxhc3Q7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90cmFuc2Zvcm1TdHJpbmcoZ3JpZDogc3RyaW5nLCBzbGlkZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCBjb2xsZWN0ID0gJyc7XHJcbiAgICBjb2xsZWN0ICs9IGAke3RoaXMuc3R5bGVpZH0geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKGA7XHJcblxyXG4gICAgaWYgKHRoaXMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybVtncmlkXSA9XHJcbiAgICAgICAgKHRoaXMudmVydGljYWwuaGVpZ2h0IC8gdGhpcy5pbnB1dHMuZ3JpZFtncmlkXSkgKiBzbGlkZTtcclxuICAgICAgY29sbGVjdCArPSBgMCwgLSR7dGhpcy50cmFuc2Zvcm1bZ3JpZF19cHgsIDBgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1bZ3JpZF0gPSAoMTAwIC8gdGhpcy5pbnB1dHMuZ3JpZFtncmlkXSkgKiBzbGlkZTtcclxuICAgICAgY29sbGVjdCArPSBgJHt0aGlzLmRpcmVjdGlvblN5bX0ke3RoaXMudHJhbnNmb3JtW2dyaWRdfSUsIDAsIDBgO1xyXG4gICAgfVxyXG4gICAgY29sbGVjdCArPSBgKTsgfWA7XHJcbiAgICByZXR1cm4gY29sbGVjdDtcclxuICB9XHJcblxyXG4gIC8qKiBzZXQgdGhlIHRyYW5zZm9ybSBzdHlsZSB0byBzY3JvbGwgdGhlIGNhcm91c2VsICAqL1xyXG4gIHByaXZhdGUgX3RyYW5zZm9ybVN0eWxlKHNsaWRlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGxldCBzbGlkZUNzcyA9ICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnKSB7XHJcbiAgICAgIHNsaWRlQ3NzID0gYEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKFxyXG4gICAgICAgICd4cycsXHJcbiAgICAgICAgc2xpZGVcclxuICAgICAgKX19XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKCdzbScsIHNsaWRlKX0gfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHske3RoaXMuX3RyYW5zZm9ybVN0cmluZygnbWQnLCBzbGlkZSl9IH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKCdsZycsIHNsaWRlKX0gfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5hbGwgPSB0aGlzLmlucHV0cy5ncmlkLmFsbCAqIHNsaWRlO1xyXG4gICAgICB0aGlzLnRvdWNoVHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm0uYWxsO1xyXG4gICAgICBzbGlkZUNzcyA9IGAke3RoaXMuc3R5bGVpZH0geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25TeW1cclxuICAgICAgICB9JHt0aGlzLnRyYW5zZm9ybS5hbGx9cHgsIDAsIDApO2A7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNhcm91c2VsQ3NzTm9kZS5pbm5lckhUTUwgPSBzbGlkZUNzcztcclxuICB9XHJcblxyXG4gIC8qKiB0aGlzIHdpbGwgdHJpZ2dlciB0aGUgY2Fyb3VzZWwgdG8gbG9hZCB0aGUgaXRlbXMgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbExvYWRUcmlnZ2VyKCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmlucHV0cy5sb2FkID09PSAnbnVtYmVyJykge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5sb2FkIDw9IHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5pdGVtcyAmJlxyXG4gICAgICB0aGlzLmNhcm91c2VsTG9hZC5lbWl0KHRoaXMuY3VycmVudFNsaWRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBnZW5lcmF0ZSBDbGFzcyBmb3IgZWFjaCBjYXJvdXNlbCB0byBzZXQgc3BlY2lmaWMgc3R5bGUgKi9cclxuICBwcml2YXRlIF9nZW5lcmF0ZUlEKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgdGV4dCA9ICcnO1xyXG4gICAgY29uc3QgcG9zc2libGUgPVxyXG4gICAgICAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgIHRleHQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBuZ3VjYXJvdXNlbCR7dGV4dH1gO1xyXG4gIH1cclxuXHJcbiAgLyoqIGhhbmRsZSB0aGUgYXV0byBzbGlkZSAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsSW50ZXJ2YWwoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudDtcclxuICAgIGlmICh0aGlzLmludGVydmFsICYmIHRoaXMubG9vcCkge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyNCA9IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5vblNjcm9sbGluZyk7XHJcbiAgICAgICAgdGhpcy5vblNjcm9sbGluZyA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fb25XaW5kb3dTY3JvbGxpbmcoKTtcclxuICAgICAgICB9LCA2MDApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHBsYXkkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ21vdXNlbGVhdmUnKS5waXBlKG1hcFRvKDEpKTtcclxuICAgICAgY29uc3QgcGF1c2UkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ21vdXNlZW50ZXInKS5waXBlKG1hcFRvKDApKTtcclxuXHJcbiAgICAgIGNvbnN0IHRvdWNoUGxheSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAndG91Y2hzdGFydCcpLnBpcGUobWFwVG8oMSkpO1xyXG4gICAgICBjb25zdCB0b3VjaFBhdXNlJCA9IGZyb21FdmVudChjb250YWluZXIsICd0b3VjaGVuZCcpLnBpcGUobWFwVG8oMCkpO1xyXG5cclxuICAgICAgY29uc3QgaW50ZXJ2YWwkID0gaW50ZXJ2YWwodGhpcy5pbnB1dHMuaW50ZXJ2YWwudGltaW5nKS5waXBlKG1hcFRvKDEpKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxJbnQgPSBtZXJnZShcclxuICAgICAgICAgIHBsYXkkLFxyXG4gICAgICAgICAgdG91Y2hQbGF5JCxcclxuICAgICAgICAgIHBhdXNlJCxcclxuICAgICAgICAgIHRvdWNoUGF1c2UkLFxyXG4gICAgICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJFxyXG4gICAgICAgIClcclxuICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBzdGFydFdpdGgoMSksXHJcbiAgICAgICAgICAgIHN3aXRjaE1hcCh2YWwgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNIb3ZlcmVkID0gIXZhbDtcclxuICAgICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgICAgICByZXR1cm4gdmFsID8gaW50ZXJ2YWwkIDogZW1wdHkoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoMSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSwgdGhpcy5pbnRlcnZhbC5pbml0aWFsRGVsYXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdXBkYXRlSXRlbUluZGV4Q29udGV4dEFuaSgpIHtcclxuICAgIGNvbnN0IHZpZXdDb250YWluZXIgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXI7XHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgcmVuZGVySW5kZXggPSAwLCBjb3VudCA9IHZpZXdDb250YWluZXIubGVuZ3RoO1xyXG4gICAgICByZW5kZXJJbmRleCA8IGNvdW50O1xyXG4gICAgICByZW5kZXJJbmRleCsrXHJcbiAgICApIHtcclxuICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KHJlbmRlckluZGV4KSBhcyBhbnk7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xyXG4gICAgICBjb250ZXh0LmNvdW50ID0gY291bnQ7XHJcbiAgICAgIGNvbnRleHQuZmlyc3QgPSByZW5kZXJJbmRleCA9PT0gMDtcclxuICAgICAgY29udGV4dC5sYXN0ID0gcmVuZGVySW5kZXggPT09IGNvdW50IC0gMTtcclxuICAgICAgY29udGV4dC5ldmVuID0gcmVuZGVySW5kZXggJSAyID09PSAwO1xyXG4gICAgICBjb250ZXh0Lm9kZCA9ICFjb250ZXh0LmV2ZW47XHJcbiAgICAgIGNvbnRleHQuaW5kZXggPSByZW5kZXJJbmRleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBhbmltYXRlIHRoZSBjYXJvdXNlbCBpdGVtcyAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsQW5pbWF0b3IoXHJcbiAgICBkaXJlY3Rpb246IG51bWJlcixcclxuICAgIHN0YXJ0OiBudW1iZXIsXHJcbiAgICBlbmQ6IG51bWJlcixcclxuICAgIHNwZWVkOiBudW1iZXIsXHJcbiAgICBsZW5ndGg6IG51bWJlcixcclxuICAgIHZpZXdDb250YWluZXIgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXJcclxuICApOiB2b2lkIHtcclxuICAgIGxldCB2YWwgPSBsZW5ndGggPCA1ID8gbGVuZ3RoIDogNTtcclxuICAgIHZhbCA9IHZhbCA9PT0gMSA/IDMgOiB2YWw7XHJcbiAgICBjb25zdCBjb2xsZWN0SW5kZXggPSBbXTtcclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydCAtIDE7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgIGNvbGxlY3RJbmRleC5wdXNoKGkpO1xyXG4gICAgICAgIHZhbCA9IHZhbCAqIDI7XHJcbiAgICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KGkpIGFzIGFueTtcclxuICAgICAgICBpZiAodmlld1JlZikge1xyXG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgICAgICBjb250ZXh0LmFuaW1hdGUgPSB7dmFsdWU6IHRydWUsIHBhcmFtczoge2Rpc3RhbmNlOiB2YWx9fTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSBlbmQgLSAxOyBpID49IHN0YXJ0IC0gMTsgaS0tKSB7XHJcbiAgICAgICAgY29sbGVjdEluZGV4LnB1c2goaSk7XHJcbiAgICAgICAgdmFsID0gdmFsICogMjtcclxuICAgICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQoaSkgYXMgYW55O1xyXG4gICAgICAgIGlmICh2aWV3UmVmKSB7XHJcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcclxuICAgICAgICAgIGNvbnRleHQuYW5pbWF0ZSA9IHt2YWx1ZTogdHJ1ZSwgcGFyYW1zOiB7ZGlzdGFuY2U6IC12YWx9fTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3JlbW92ZUFuaW1hdGlvbnMoY29sbGVjdEluZGV4KTtcclxuICAgIH0sIHNwZWVkICogMC43KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3JlbW92ZUFuaW1hdGlvbnMoaW5kZXhzOiBudW1iZXJbXSkge1xyXG4gICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lcjtcclxuICAgIGluZGV4cy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQoaSkgYXMgYW55O1xyXG4gICAgICBpZiAodmlld1JlZikge1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xyXG4gICAgICAgIGNvbnRleHQuYW5pbWF0ZSA9IHt2YWx1ZTogZmFsc2UsIHBhcmFtczoge2Rpc3RhbmNlOiAwfX07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKiogU2hvcnQgZm9ybSBmb3Igc2V0RWxlbWVudFN0eWxlICovXHJcbiAgcHJpdmF0ZSBfc2V0U3R5bGUoZWw6IGFueSwgcHJvcDogYW55LCB2YWw6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwsIHByb3AsIHZhbCk7XHJcbiAgfVxyXG5cclxuICAvKiogRm9yIGdlbmVyYXRpbmcgc3R5bGUgdGFnICovXHJcbiAgcHJpdmF0ZSBfY3JlYXRlU3R5bGVFbGVtKGRhdGFzPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzdHlsZUl0ZW0gPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgaWYgKGRhdGFzKSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlVGV4dCA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZVRleHQoZGF0YXMpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUl0ZW0sIHN0eWxlVGV4dCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmNhcm91c2VsLCBzdHlsZUl0ZW0pO1xyXG4gICAgcmV0dXJuIHN0eWxlSXRlbTtcclxuICB9XHJcbn1cclxuIl19