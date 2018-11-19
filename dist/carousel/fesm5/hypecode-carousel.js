import { Injectable, Directive, ElementRef, TemplateRef, ViewContainerRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, EventEmitter, Inject, Input, isDevMode, IterableDiffers, Output, PLATFORM_ID, Renderer2, ViewChild, HostBinding, NgModule } from '@angular/core';
import { __extends } from 'tslib';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { empty, fromEvent, interval, merge, Observable, of, Subject } from 'rxjs';
import { mapTo, startWith, switchMap, takeUntil } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NguCarouselStore = /** @class */ (function () {
    function NguCarouselStore(touch, vertical, interval$$1, transform, button, visibleItems, deviceType, type, token, items, load, deviceWidth, carouselWidth, itemWidth, slideItems, itemWidthPer, itemLength, currentSlide, easing, speed, loop, dexVal, touchTransform, isEnd, isFirst, isLast, RTL, point, velocity) {
        if (touch === void 0) { touch = new Touch(); }
        if (vertical === void 0) { vertical = new Vertical(); }
        if (transform === void 0) { transform = new NguTransfrom(); }
        if (type === void 0) { type = 'fixed'; }
        if (token === void 0) { token = ''; }
        if (items === void 0) { items = 0; }
        if (load === void 0) { load = 0; }
        if (deviceWidth === void 0) { deviceWidth = 0; }
        if (carouselWidth === void 0) { carouselWidth = 0; }
        if (itemWidth === void 0) { itemWidth = 0; }
        if (slideItems === void 0) { slideItems = 0; }
        if (itemWidthPer === void 0) { itemWidthPer = 0; }
        if (itemLength === void 0) { itemLength = 0; }
        if (currentSlide === void 0) { currentSlide = 0; }
        if (easing === void 0) { easing = 'cubic-bezier(0, 0, 0.2, 1)'; }
        if (speed === void 0) { speed = 200; }
        if (loop === void 0) { loop = false; }
        if (dexVal === void 0) { dexVal = 0; }
        if (touchTransform === void 0) { touchTransform = 0; }
        if (isEnd === void 0) { isEnd = false; }
        if (isFirst === void 0) { isFirst = true; }
        if (isLast === void 0) { isLast = false; }
        if (RTL === void 0) { RTL = false; }
        if (point === void 0) { point = true; }
        if (velocity === void 0) { velocity = 1; }
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
    return NguCarouselStore;
}());
var ItemsControl = /** @class */ (function () {
    function ItemsControl() {
    }
    return ItemsControl;
}());
var Vertical = /** @class */ (function () {
    function Vertical() {
    }
    return Vertical;
}());
var NguButton = /** @class */ (function () {
    function NguButton() {
    }
    return NguButton;
}());
var Touch = /** @class */ (function () {
    function Touch() {
    }
    return Touch;
}());
var NguTransfrom = /** @class */ (function () {
    function NguTransfrom(xs, sm, md, lg, all) {
        if (xs === void 0) { xs = 0; }
        if (sm === void 0) { sm = 0; }
        if (md === void 0) { md = 0; }
        if (lg === void 0) { lg = 0; }
        if (all === void 0) { all = 0; }
        this.xs = xs;
        this.sm = sm;
        this.md = md;
        this.lg = lg;
        this.all = all;
    }
    return NguTransfrom;
}());
var NguCarouselConfig = /** @class */ (function () {
    function NguCarouselConfig() {
    }
    return NguCarouselConfig;
}());
/**
 * @template T
 */
var /**
 * @template T
 */
NguCarouselOutletContext = /** @class */ (function () {
    function NguCarouselOutletContext(data) {
        this.$implicit = data;
    }
    return NguCarouselOutletContext;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NguCarouselService = /** @class */ (function () {
    function NguCarouselService() {
    }
    /**
     * @param {?} carousel
     * @return {?}
     */
    NguCarouselService.prototype.setCarousel = /**
     * @param {?} carousel
     * @return {?}
     */
    function (carousel) {
        this.carousel = carousel;
    };
    /**
     * @return {?}
     */
    NguCarouselService.prototype.getCarousel = /**
     * @return {?}
     */
    function () {
        return this.carousel;
    };
    NguCarouselService.decorators = [
        { type: Injectable }
    ];
    NguCarouselService.ctorParameters = function () { return []; };
    return NguCarouselService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NguCarouselItemDirective = /** @class */ (function () {
    function NguCarouselItemDirective() {
    }
    NguCarouselItemDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[NguCarouselItem]'
                },] }
    ];
    return NguCarouselItemDirective;
}());
var NguCarouselNextDirective = /** @class */ (function () {
    function NguCarouselNextDirective() {
    }
    NguCarouselNextDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[NguCarouselNext]'
                },] }
    ];
    return NguCarouselNextDirective;
}());
var NguCarouselPrevDirective = /** @class */ (function () {
    function NguCarouselPrevDirective() {
    }
    NguCarouselPrevDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[NguCarouselPrev]'
                },] }
    ];
    return NguCarouselPrevDirective;
}());
var NguCarouselPointDirective = /** @class */ (function () {
    function NguCarouselPointDirective() {
    }
    NguCarouselPointDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[NguCarouselPoint]'
                },] }
    ];
    return NguCarouselPointDirective;
}());
/**
 * @template T
 */
var NguCarouselDefDirective = /** @class */ (function () {
    function NguCarouselDefDirective(template) {
        this.template = template;
    }
    NguCarouselDefDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[nguCarouselDef]'
                },] }
    ];
    NguCarouselDefDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return NguCarouselDefDirective;
}());
var NguCarouselOutlet = /** @class */ (function () {
    function NguCarouselOutlet(viewContainer) {
        this.viewContainer = viewContainer;
    }
    NguCarouselOutlet.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[nguCarouselOutlet]'
                },] }
    ];
    NguCarouselOutlet.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    return NguCarouselOutlet;
}());
var NguCarouselWrapperDirective = /** @class */ (function () {
    function NguCarouselWrapperDirective(template) {
        this.template = template;
    }
    NguCarouselWrapperDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[nguCarouselWrapper]'
                },] }
    ];
    NguCarouselWrapperDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return NguCarouselWrapperDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// TODO calculer la taille possible pour le .ngucarsoul en fonction des boutons prev/next
/**
 * @template T
 */
var NguCarousel = /** @class */ (function (_super) {
    __extends(NguCarousel, _super);
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
                // console.log(data, this.dataSource);
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
            // console.log('Changes detected!');
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
        // console.log(this.dataSource);
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
        // console.log(this._defDirec);
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
            if (_this.deviceWidth !== event.target.outerWidth) {
                _this._setStyle(_this.nguItemsContainer.nativeElement, 'transition', "");
                _this._storeCarouselData();
            }
        }, 500);
    };
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
                _this.carouselWidth = _this.nguItemsContainer.nativeElement.offsetWidth;
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
                        : this.carouselWidth)) *
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
        if (this.touchTransform < 0) {
            this.touchTransform = 0;
        }
        /** @type {?} */
        var type = this.type === 'responsive' ? '%' : 'px';
        /** @type {?} */
        var maxTranslate = (this.itemWidth * this._dataSource.length) - this.carouselMain1.nativeElement.offsetWidth;
        if (this.type === 'responsive') {
            maxTranslate = (maxTranslate / this.carouselMain1.nativeElement.offsetWidth) * 100;
        }
        if (maxTranslate <= this.touchTransform) {
            this.touchTransform = maxTranslate;
            return;
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
        // debugger;
        // if (this.userData.point.visible === true) {
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
        // console.log(this.data);
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
            var somt = Math.floor((this.dexVal / val / this.dexVal) * (this.deviceWidth - this.dexVal));
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
        // console.log(this.dataSource);
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
                    template: "<ng-content select=\"[NguCarouselPoint]\"></ng-content>\n\n<div class=\"carousel-wrapper\">\n  <div class=\"btn-wrapper btn-previous\">\n    <ng-content select=\"[NguCarouselPrev]\"></ng-content>\n  </div>\n\n  <div class=\"btn-wrapper btn-next\">\n    <ng-content select=\"[NguCarouselNext]\"></ng-content>\n  </div>\n\n  <div #ngucarousel class=\"ngucarousel\">\n    <div #touchContainer class=\"ngu-touch-container\">\n      <div #nguItemsContainer class=\"ngucarousel-items\">\n        <ng-container nguCarouselOutlet></ng-container>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n\n",
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NguItemComponent = /** @class */ (function () {
    function NguItemComponent() {
        this.classes = true;
    }
    NguItemComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ngu-item',
                    template: "<ng-content></ng-content>\n",
                    styles: [""]
                }] }
    ];
    NguItemComponent.propDecorators = {
        classes: [{ type: HostBinding, args: ['class.item',] }]
    };
    return NguItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NguTileComponent = /** @class */ (function () {
    function NguTileComponent() {
        this.classes = true;
    }
    NguTileComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ngu-tile',
                    template: "<div class=\"tile\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host{padding:10px;box-sizing:border-box}"]
                }] }
    ];
    NguTileComponent.propDecorators = {
        classes: [{ type: HostBinding, args: ['class.item',] }]
    };
    return NguTileComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NguCarouselModule = /** @class */ (function () {
    function NguCarouselModule() {
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
    return NguCarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NguCarouselConfig, NguCarouselStore, NguTransfrom, NguCarouselService, NguCarousel, NguCarouselModule, NguCarouselDefDirective as ɵg, NguCarouselItemDirective as ɵc, NguCarouselNextDirective as ɵd, NguCarouselOutlet as ɵh, NguCarouselPointDirective as ɵf, NguCarouselPrevDirective as ɵe, NguCarouselWrapperDirective as ɵi, ItemsControl as ɵa, NguButton as ɵb, NguItemComponent as ɵj, NguTileComponent as ɵk };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlwZWNvZGUtY2Fyb3VzZWwuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC9saWIvbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC50cyIsIm5nOi8vQGh5cGVjb2RlL2Nhcm91c2VsL2xpYi9uZ3UtY2Fyb3VzZWwuc2VydmljZS50cyIsIm5nOi8vQGh5cGVjb2RlL2Nhcm91c2VsL2xpYi9uZ3UtY2Fyb3VzZWwuZGlyZWN0aXZlLnRzIiwibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL25ndS1jYXJvdXNlbC9uZ3UtY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL25ndS1pdGVtL25ndS1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGh5cGVjb2RlL2Nhcm91c2VsL2xpYi9uZ3UtdGlsZS9uZ3UtdGlsZS5jb21wb25lbnQudHMiLCJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC9saWIvbmd1LWNhcm91c2VsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB0b3VjaCA9IG5ldyBUb3VjaCgpLFxuICAgIHB1YmxpYyB2ZXJ0aWNhbCA9IG5ldyBWZXJ0aWNhbCgpLFxuICAgIHB1YmxpYyBpbnRlcnZhbD86IENhcm91c2VsSW50ZXJ2YWwsXG4gICAgcHVibGljIHRyYW5zZm9ybSA9IG5ldyBOZ3VUcmFuc2Zyb20oKSxcbiAgICBwdWJsaWMgYnV0dG9uPzogTmd1QnV0dG9uLFxuICAgIHB1YmxpYyB2aXNpYmxlSXRlbXM/OiBJdGVtc0NvbnRyb2wsXG4gICAgcHVibGljIGRldmljZVR5cGU/OiBEZXZpY2VUeXBlLFxuICAgIHB1YmxpYyB0eXBlID0gJ2ZpeGVkJyxcbiAgICBwdWJsaWMgdG9rZW4gPSAnJyxcbiAgICBwdWJsaWMgaXRlbXMgPSAwLFxuICAgIHB1YmxpYyBsb2FkID0gMCxcbiAgICBwdWJsaWMgZGV2aWNlV2lkdGggPSAwLFxuICAgIHB1YmxpYyBjYXJvdXNlbFdpZHRoID0gMCxcbiAgICBwdWJsaWMgaXRlbVdpZHRoID0gMCxcbiAgICBwdWJsaWMgc2xpZGVJdGVtcyA9IDAsXG4gICAgcHVibGljIGl0ZW1XaWR0aFBlciA9IDAsXG4gICAgcHVibGljIGl0ZW1MZW5ndGggPSAwLFxuICAgIHB1YmxpYyBjdXJyZW50U2xpZGUgPSAwLFxuICAgIHB1YmxpYyBlYXNpbmcgPSAnY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLFxuICAgIHB1YmxpYyBzcGVlZCA9IDIwMCxcbiAgICBwdWJsaWMgbG9vcCA9IGZhbHNlLFxuICAgIHB1YmxpYyBkZXhWYWwgPSAwLFxuICAgIHB1YmxpYyB0b3VjaFRyYW5zZm9ybSA9IDAsXG4gICAgcHVibGljIGlzRW5kID0gZmFsc2UsXG4gICAgcHVibGljIGlzRmlyc3QgPSB0cnVlLFxuICAgIHB1YmxpYyBpc0xhc3QgPSBmYWxzZSxcbiAgICBwdWJsaWMgUlRMID0gZmFsc2UsXG4gICAgcHVibGljIHBvaW50ID0gdHJ1ZSxcbiAgICBwdWJsaWMgdmVsb2NpdHkgPSAxXG4gICkge31cbn1cbmV4cG9ydCB0eXBlIERldmljZVR5cGUgPSAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ2FsbCc7XG5cbmV4cG9ydCB0eXBlIEJ1dHRvblZpc2libGUgPSAnZGlzYWJsZWQnIHwgJ2hpZGUnO1xuXG5leHBvcnQgY2xhc3MgSXRlbXNDb250cm9sIHtcbiAgc3RhcnQ6IG51bWJlcjtcbiAgZW5kOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbCB7XG4gIGVuYWJsZWQ6IGJvb2xlYW47XG4gIGhlaWdodDogbnVtYmVyO1xuICAvLyBudW1IZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOZ3VCdXR0b24ge1xuICB2aXNpYmlsaXR5PzogQnV0dG9uVmlzaWJsZTtcbiAgZWxhc3RpYz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFRvdWNoIHtcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgc3dpcGU6IHN0cmluZztcbiAgdmVsb2NpdHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE5ndVRyYW5zZnJvbSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB4cyA9IDAsXG4gICAgcHVibGljIHNtID0gMCxcbiAgICBwdWJsaWMgbWQgPSAwLFxuICAgIHB1YmxpYyBsZyA9IDAsXG4gICAgcHVibGljIGFsbCA9IDBcbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxDb25maWcge1xuICBncmlkOiBOZ3VUcmFuc2Zyb207XG4gIHNsaWRlPzogbnVtYmVyO1xuICBzcGVlZD86IG51bWJlcjtcbiAgaW50ZXJ2YWw/OiBDYXJvdXNlbEludGVydmFsO1xuICBhbmltYXRpb24/OiBBbmltYXRlO1xuICBwb2ludD86IFBvaW50O1xuICB0eXBlPzogc3RyaW5nO1xuICBsb2FkPzogbnVtYmVyO1xuICBjdXN0b20/OiBDdXN0b207XG4gIGxvb3A/OiBib29sZWFuO1xuICB0b3VjaD86IGJvb2xlYW47XG4gIGVhc2luZz86IHN0cmluZztcbiAgUlRMPzogYm9vbGVhbjtcbiAgYnV0dG9uPzogTmd1QnV0dG9uO1xuICB2ZXJ0aWNhbD86IFZlcnRpY2FsO1xuICB2ZWxvY2l0eT86IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgQ3VzdG9tID0gJ2Jhbm5lcic7XG5leHBvcnQgdHlwZSBBbmltYXRlID0gJ2xhenknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgaGlkZU9uU2luZ2xlU2xpZGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvbiB7XG4gIHR5cGU/OiBBbmltYXRlO1xuICBhbmltYXRlU3R5bGVzPzogQW5pbWF0aW9uU3R5bGVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvblN0eWxlcyB7XG4gIHN0eWxlPzogc3RyaW5nO1xuICBvcGVuPzogc3RyaW5nO1xuICBjbG9zZT86IHN0cmluZztcbiAgc3RhZ2dlcj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbEludGVydmFsIHtcbiAgdGltaW5nOiBudW1iZXI7XG4gIGluaXRpYWxEZWxheT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsT3V0bGV0Q29udGV4dDxUPiB7XG4gIC8qKiBEYXRhIGZvciB0aGUgbm9kZS4gKi9cbiAgJGltcGxpY2l0OiBUO1xuXG4gIC8qKiBEZXB0aCBvZiB0aGUgbm9kZS4gKi9cbiAgbGV2ZWw6IG51bWJlcjtcblxuICAvKiogSW5kZXggbG9jYXRpb24gb2YgdGhlIG5vZGUuICovXG4gIGluZGV4PzogbnVtYmVyO1xuXG4gIC8qKiBMZW5ndGggb2YgdGhlIG51bWJlciBvZiB0b3RhbCBkYXRhTm9kZXMuICovXG4gIGNvdW50PzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFQpIHtcbiAgICB0aGlzLiRpbXBsaWNpdCA9IGRhdGE7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5ndUNhcm91c2VsIH0gZnJvbSAnLi9uZ3UtY2Fyb3VzZWwvbmd1LWNhcm91c2VsLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbFNlcnZpY2Uge1xuXG5cbiAgY2Fyb3VzZWw6IE5ndUNhcm91c2VsPGFueT47XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIHNldENhcm91c2VsKGNhcm91c2VsOiBOZ3VDYXJvdXNlbDxhbnk+KSB7XG4gICAgdGhpcy5jYXJvdXNlbCA9IGNhcm91c2VsO1xuICB9XG5cbiAgZ2V0Q2Fyb3VzZWwoKTogTmd1Q2Fyb3VzZWw8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY2Fyb3VzZWw7XG4gIH1cblxuXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW05ndUNhcm91c2VsSXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tOZ3VDYXJvdXNlbE5leHRdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUge1xuICAvLyBASG9zdEJpbmRpbmcoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8vIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIGRpc3BsYXkgPSAnYmxvY2snO1xuICAvLyBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIC8vIG9uQ2xpY2soKSB7XG4gIC8vIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbTmd1Q2Fyb3VzZWxQcmV2XSdcbn0pXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlIHtcbiAgLy8gQEhvc3RCaW5kaW5nKCdkaXNhYmxlZCcpIGRpc2FibGVkOiBib29sZWFuO1xuICAvLyBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKSBkaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbTmd1Q2Fyb3VzZWxQb2ludF0nXG59KVxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUge31cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmd1Q2Fyb3VzZWxEZWZdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxUPiB7XG4gIHdoZW46IChpbmRleDogbnVtYmVyLCBub2RlRGF0YTogVCkgPT4gYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW25ndUNhcm91c2VsT3V0bGV0XSdcbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsT3V0bGV0IHtcbiAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHt9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW25ndUNhcm91c2VsV3JhcHBlcl0nXG59KVxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogRWxlbWVudFJlZjxhbnk+KSB7fVxufVxuIiwiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBEb0NoZWNrLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBpc0Rldk1vZGUsXHJcbiAgSXRlcmFibGVDaGFuZ2VSZWNvcmQsXHJcbiAgSXRlcmFibGVDaGFuZ2VzLFxyXG4gIEl0ZXJhYmxlRGlmZmVyLFxyXG4gIEl0ZXJhYmxlRGlmZmVycyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBQTEFURk9STV9JRCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRyYWNrQnlGdW5jdGlvbixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBlbXB0eSwgZnJvbUV2ZW50LCBpbnRlcnZhbCwgbWVyZ2UsIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwVG8sIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOZ3VDYXJvdXNlbENvbmZpZywgTmd1Q2Fyb3VzZWxPdXRsZXRDb250ZXh0LCBOZ3VDYXJvdXNlbFN0b3JlIH0gZnJvbSAnLi9uZ3UtY2Fyb3VzZWwnO1xyXG5pbXBvcnQgeyBOZ3VDYXJvdXNlbFNlcnZpY2UgfSBmcm9tICcuLi9uZ3UtY2Fyb3VzZWwuc2VydmljZSc7XHJcbmltcG9ydCB7XHJcbiAgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsT3V0bGV0LFxyXG4gIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbFdyYXBwZXJEaXJlY3RpdmVcclxufSBmcm9tICcuLi9uZ3UtY2Fyb3VzZWwuZGlyZWN0aXZlJztcclxuXHJcblxyXG4vLyBUT0RPIGNhbGN1bGVyIGxhIHRhaWxsZSBwb3NzaWJsZSBwb3VyIGxlIC5uZ3VjYXJzb3VsIGVuIGZvbmN0aW9uIGRlcyBib3V0b25zIHByZXYvbmV4dFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnbmd1LWNhcm91c2VsJyxcclxuICB0ZW1wbGF0ZVVybDogJ25ndS1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ25ndS1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHZpZXdQcm92aWRlcnM6IFtOZ3VDYXJvdXNlbFNlcnZpY2VdLFxyXG4gIHByb3ZpZGVyczogW05ndUNhcm91c2VsU2VydmljZV0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1jbGFzcy1zdWZmaXhcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsPFQ+IGV4dGVuZHMgTmd1Q2Fyb3VzZWxTdG9yZVxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xyXG4gIF9kYXRhU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgX2RhdGFEaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPHt9PjtcclxuICBzdHlsZWlkOiBzdHJpbmc7XHJcbiAgYWN0aXZlUG9pbnQ6IG51bWJlcjtcclxuICBpc0hvdmVyZWQgPSBmYWxzZTtcclxuICAvLyBpc0ZpcnN0c3MgPSAwO1xyXG4gIGFycmF5Q2hhbmdlczogSXRlcmFibGVDaGFuZ2VzPHt9PjtcclxuICBjYXJvdXNlbEludDogU3Vic2NyaXB0aW9uO1xyXG4gIEBWaWV3Q2hpbGQoTmd1Q2Fyb3VzZWxPdXRsZXQpXHJcbiAgX25vZGVPdXRsZXQ6IE5ndUNhcm91c2VsT3V0bGV0O1xyXG4gIEBWaWV3Q2hpbGQoTmd1Q2Fyb3VzZWxXcmFwcGVyRGlyZWN0aXZlKVxyXG4gIF9jYXJvdXNlbFdyYXBwZXI6IE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZTtcclxuICBwb2ludE51bWJlcnM6IEFycmF5PGFueT4gPSBbXTtcclxuICAvLyBpc0ZpcnN0c3MgPSAwO1xyXG4gIGxpc3RlbmVyMTogKCkgPT4gdm9pZDtcclxuICBsaXN0ZW5lcjI6ICgpID0+IHZvaWQ7XHJcbiAgbGlzdGVuZXIzOiAoKSA9PiB2b2lkO1xyXG4gIGxpc3RlbmVyNDogKCkgPT4gdm9pZDtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxyXG4gIEBPdXRwdXQoJ29uTW92ZScpXHJcbiAgcHVibGljIG9uTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Tmd1Q2Fyb3VzZWw8VD4+KCk7XHJcbiAgcHJpdmF0ZSBfZGVmYXVsdE5vZGVEZWY6IE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPGFueT4gfCBudWxsO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUpXHJcbiAgcHJpdmF0ZSBfZGVmRGlyZWM6IFF1ZXJ5TGlzdDxOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxhbnk+PjtcclxuICBwcml2YXRlIGRpcmVjdGlvblN5bTogc3RyaW5nO1xyXG4gIHByaXZhdGUgY2Fyb3VzZWxDc3NOb2RlOiBhbnk7XHJcbiAgcHJpdmF0ZSBwb2ludEluZGV4OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB3aXRoQW5pbSA9IHRydWU7XHJcbiAgQElucHV0KCdpbnB1dHMnKVxyXG4gIHByaXZhdGUgaW5wdXRzOiBOZ3VDYXJvdXNlbENvbmZpZztcclxuICBAT3V0cHV0KCdjYXJvdXNlbExvYWQnKVxyXG4gIHByaXZhdGUgY2Fyb3VzZWxMb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBWaWV3Q2hpbGQoJ25ndWNhcm91c2VsJywge3JlYWQ6IEVsZW1lbnRSZWZ9KVxyXG4gIHByaXZhdGUgY2Fyb3VzZWxNYWluMTogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbmd1SXRlbXNDb250YWluZXInLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgcHJpdmF0ZSBuZ3VJdGVtc0NvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZCgndG91Y2hDb250YWluZXInLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgcHJpdmF0ZSB0b3VjaENvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIF9pbnRlcnZhbENvbnRyb2xsZXIkID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xyXG4gIHByaXZhdGUgY2Fyb3VzZWw6IGFueTtcclxuICBwcml2YXRlIG9uUmVzaXplOiBhbnk7XHJcbiAgcHJpdmF0ZSBvblNjcm9sbGluZzogYW55O1xyXG4gIHByaXZhdGUgX3RyYWNrQnlGbjogVHJhY2tCeUZ1bmN0aW9uPFQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBjYXJvdXNlbFNlcnZpY2U6IE5ndUNhcm91c2VsU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuY2Fyb3VzZWxTZXJ2aWNlLnNldENhcm91c2VsKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgX2RhdGFTb3VyY2U6IGFueTtcclxuXHJcbiAgQElucHV0KCdkYXRhU291cmNlJylcclxuICBnZXQgZGF0YVNvdXJjZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2U7XHJcbiAgfVxyXG5cclxuICBzZXQgZGF0YVNvdXJjZShkYXRhOiBhbnkpIHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsIHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICAgIC8vIHRoaXMuaXNGaXJzdHNzKys7XHJcbiAgICAgIHRoaXMuX3N3aXRjaERhdGFTb3VyY2UoZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIFRoZSBzZXR0ZXIgaXMgdXNlZCB0byBjYXRjaCB0aGUgYnV0dG9uIGlmIHRoZSBidXR0b24gaGFzIG5nSWZcclxuICAgKiBpc3N1ZSBpZCAjOTFcclxuICAgKi9cclxuICBAQ29udGVudENoaWxkKE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSwge3JlYWQ6IEVsZW1lbnRSZWZ9KVxyXG4gIHNldCBuZXh0QnRuKGJ0bjogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5saXN0ZW5lcjIgJiYgdGhpcy5saXN0ZW5lcjIoKTtcclxuICAgIGlmIChidG4pIHtcclxuICAgICAgdGhpcy5saXN0ZW5lcjIgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oYnRuLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsICgpID0+XHJcbiAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoMSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBUaGUgc2V0dGVyIGlzIHVzZWQgdG8gY2F0Y2ggdGhlIGJ1dHRvbiBpZiB0aGUgYnV0dG9uIGhhcyBuZ0lmXHJcbiAgICogaXNzdWUgaWQgIzkxXHJcbiAgICovXHJcbiAgQENvbnRlbnRDaGlsZChOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsIHtyZWFkOiBFbGVtZW50UmVmfSlcclxuICBzZXQgcHJldkJ0bihidG46IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMubGlzdGVuZXIxICYmIHRoaXMubGlzdGVuZXIxKCk7XHJcbiAgICBpZiAoYnRuKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXIxID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKGJ0bi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoKSA9PlxyXG4gICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKDApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmFja2luZyBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCB0byBjaGVjayB0aGUgZGlmZmVyZW5jZXMgaW4gZGF0YSBjaGFuZ2VzLiBVc2VkIHNpbWlsYXJseVxyXG4gICAqIHRvIGBuZ0ZvcmAgYHRyYWNrQnlgIGZ1bmN0aW9uLiBPcHRpbWl6ZSBJdGVtcyBvcGVyYXRpb25zIGJ5IGlkZW50aWZ5aW5nIGEgSXRlbXMgYmFzZWQgb24gaXRzIGRhdGFcclxuICAgKiByZWxhdGl2ZSB0byB0aGUgZnVuY3Rpb24gdG8ga25vdyBpZiBhIEl0ZW1zIHNob3VsZCBiZSBhZGRlZC9yZW1vdmVkL21vdmVkLlxyXG4gICAqIEFjY2VwdHMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBwYXJhbWV0ZXJzLCBgaW5kZXhgIGFuZCBgaXRlbWAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdHJhY2tCeSgpOiBUcmFja0J5RnVuY3Rpb248VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RyYWNrQnlGbjtcclxuICB9XHJcblxyXG4gIHNldCB0cmFja0J5KGZuOiBUcmFja0J5RnVuY3Rpb248VD4pIHtcclxuICAgIGlmIChcclxuICAgICAgaXNEZXZNb2RlKCkgJiZcclxuICAgICAgZm4gIT0gbnVsbCAmJlxyXG4gICAgICB0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicgJiZcclxuICAgICAgPGFueT5jb25zb2xlICYmXHJcbiAgICAgIDxhbnk+Y29uc29sZS53YXJuXHJcbiAgICApIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGB0cmFja0J5IG11c3QgYmUgYSBmdW5jdGlvbiwgYnV0IHJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoZm4pfS5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl90cmFja0J5Rm4gPSBmbjtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5fZGF0YURpZmZlciA9IHRoaXMuX2RpZmZlcnNcclxuICAgICAgLmZpbmQoW10pXHJcbiAgICAgIC5jcmVhdGUoKF9pOiBudW1iZXIsIGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYWNrQnkgPyB0aGlzLnRyYWNrQnkoaXRlbS5kYXRhSW5kZXgsIGl0ZW0uZGF0YSkgOiBpdGVtO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIHRoaXMuYXJyYXlDaGFuZ2VzID0gdGhpcy5fZGF0YURpZmZlci5kaWZmKHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICBpZiAodGhpcy5hcnJheUNoYW5nZXMgJiYgdGhpcy5fZGVmRGlyZWMpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ0NoYW5nZXMgZGV0ZWN0ZWQhJyk7XHJcbiAgICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNhcm91c2VsID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuX2lucHV0VmFsaWRhdGlvbigpO1xyXG5cclxuICAgIHRoaXMuY2Fyb3VzZWxDc3NOb2RlID0gdGhpcy5fY3JlYXRlU3R5bGVFbGVtKCk7XHJcblxyXG4gICAgLy8gdGhpcy5fYnV0dG9uQ29udHJvbCgpO1xyXG5cclxuICAgIGlmICh3aW5kb3cpIHtcclxuICAgICAgdGhpcy5fY2Fyb3VzZWxJbnRlcnZhbCgpO1xyXG4gICAgICBpZiAoIXRoaXMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuX3RvdWNoKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saXN0ZW5lcjMgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdyZXNpemUnLCBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5fb25SZXNpemluZyhldmVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9vbldpbmRvd1Njcm9sbGluZygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpO1xyXG5cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKiBVc2VkIHRvIHJlc2V0IHRoZSBjYXJvdXNlbCAqL1xyXG4gIHB1YmxpYyByZXNldCh3aXRoT3V0QW5pbWF0aW9uPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgd2l0aE91dEFuaW1hdGlvbiAmJiAodGhpcy53aXRoQW5pbSA9IGZhbHNlKTtcclxuICAgIGlmICh0aGlzLmNhcm91c2VsQ3NzTm9kZSkge1xyXG4gICAgICB0aGlzLmNhcm91c2VsQ3NzTm9kZS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgIHRoaXMubW92ZVRvKDApO1xyXG4gICAgICB0aGlzLl9jYXJvdXNlbFBvaW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogdGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHNjb2xsIHRoZSBjYXJvdXNlbCB3aGVuIHBvaW50IGlzIGNsaWNrZWQgKi9cclxuICBwdWJsaWMgbW92ZVRvKHNsaWRlOiBudW1iZXIsIHdpdGhPdXRBbmltYXRpb24/OiBib29sZWFuKSB7XHJcbiAgICAvLyBzbGlkZSA9IHNsaWRlIC0gMTtcclxuICAgIHdpdGhPdXRBbmltYXRpb24gJiYgKHRoaXMud2l0aEFuaW0gPSBmYWxzZSk7XHJcbiAgICBpZiAodGhpcy5hY3RpdmVQb2ludCAhPT0gc2xpZGUgJiYgc2xpZGUgPCB0aGlzLnBvaW50SW5kZXgpIHtcclxuICAgICAgbGV0IHNsaWRlcmVtYWlucztcclxuICAgICAgY29uc3QgYnRucyA9IHRoaXMuY3VycmVudFNsaWRlIDwgc2xpZGUgPyAxIDogMDtcclxuXHJcbiAgICAgIHN3aXRjaCAoc2xpZGUpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xyXG4gICAgICAgICAgc2xpZGVyZW1haW5zID0gc2xpZGUgKiB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIHRoaXMucG9pbnRJbmRleCAtIDE6XHJcbiAgICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xyXG4gICAgICAgICAgc2xpZGVyZW1haW5zID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtIHRoaXMuaXRlbXM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcclxuICAgICAgICAgIHNsaWRlcmVtYWlucyA9IHNsaWRlICogdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsVHdvKGJ0bnMsIHNsaWRlcmVtYWlucywgdGhpcy5zcGVlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjbGVhckludGVydmFsKHRoaXMuY2Fyb3VzZWxJbnQpO1xyXG4gICAgdGhpcy5jYXJvdXNlbEludCAmJiB0aGlzLmNhcm91c2VsSW50LnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmNhcm91c2VsTG9hZC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5vbk1vdmUuY29tcGxldGUoKTtcclxuXHJcbiAgICAvKiogcmVtb3ZlIGxpc3RlbmVycyAqL1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHN0ciA9IGBsaXN0ZW5lciR7aX1gO1xyXG4gICAgICB0aGlzW3N0cl0gJiYgdGhpc1tzdHJdKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zd2l0Y2hEYXRhU291cmNlKGRhdGFTb3VyY2U6IGFueSk6IGFueSB7XHJcbiAgICB0aGlzLl9kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcclxuICAgIGlmICh0aGlzLl9kZWZEaXJlYykge1xyXG4gICAgICB0aGlzLl9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJOb2RlQ2hhbmdlcyhcclxuICAgIGRhdGE6IGFueVtdLFxyXG4gICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lclxyXG4gICkge1xyXG4gICAgaWYgKCF0aGlzLmFycmF5Q2hhbmdlcykgcmV0dXJuO1xyXG4gICAgdGhpcy5hcnJheUNoYW5nZXMuZm9yRWFjaE9wZXJhdGlvbihcclxuICAgICAgKFxyXG4gICAgICAgIGl0ZW06IEl0ZXJhYmxlQ2hhbmdlUmVjb3JkPGFueT4sXHJcbiAgICAgICAgYWRqdXN0ZWRQcmV2aW91c0luZGV4OiBudW1iZXIsXHJcbiAgICAgICAgY3VycmVudEluZGV4OiBudW1iZXJcclxuICAgICAgKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuX2dldE5vZGVEZWYoZGF0YVtjdXJyZW50SW5kZXhdLCBjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIGlmIChpdGVtLnByZXZpb3VzSW5kZXggPT09IG51bGwpIHtcclxuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgTmd1Q2Fyb3VzZWxPdXRsZXRDb250ZXh0PGFueT4oZGF0YVtjdXJyZW50SW5kZXhdKTtcclxuICAgICAgICAgIGNvbnRleHQuaW5kZXggPSBjdXJyZW50SW5kZXg7XHJcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhcclxuICAgICAgICAgICAgbm9kZS50ZW1wbGF0ZSxcclxuICAgICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgICAgY3VycmVudEluZGV4XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEluZGV4ID09PSBudWxsKSB7XHJcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLnJlbW92ZShhZGp1c3RlZFByZXZpb3VzSW5kZXgpO1xyXG4gICAgICAgICAgdmlld0NvbnRhaW5lci5jbGVhcigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCB2aWV3ID0gdmlld0NvbnRhaW5lci5nZXQoYWRqdXN0ZWRQcmV2aW91c0luZGV4KTtcclxuICAgICAgICAgIHZpZXdDb250YWluZXIubW92ZSh2aWV3LCBjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHRoaXMuX3VwZGF0ZUl0ZW1JbmRleENvbnRleHQoKTtcclxuXHJcbiAgICBpZiAodGhpcy5jYXJvdXNlbCkge1xyXG4gICAgICB0aGlzLl9zdG9yZUNhcm91c2VsRGF0YSgpO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhU291cmNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIGluZGV4LXJlbGF0ZWQgY29udGV4dCBmb3IgZWFjaCByb3cgdG8gcmVmbGVjdCBhbnkgY2hhbmdlcyBpbiB0aGUgaW5kZXggb2YgdGhlIHJvd3MsXHJcbiAgICogZS5nLiBmaXJzdC9sYXN0L2V2ZW4vb2RkLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3VwZGF0ZUl0ZW1JbmRleENvbnRleHQoKSB7XHJcbiAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyO1xyXG4gICAgZm9yIChcclxuICAgICAgbGV0IHJlbmRlckluZGV4ID0gMCwgY291bnQgPSB2aWV3Q29udGFpbmVyLmxlbmd0aDtcclxuICAgICAgcmVuZGVySW5kZXggPCBjb3VudDtcclxuICAgICAgcmVuZGVySW5kZXgrK1xyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChyZW5kZXJJbmRleCkgYXMgYW55O1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcclxuICAgICAgY29udGV4dC5jb3VudCA9IGNvdW50O1xyXG5cclxuICAgICAgY29udGV4dC5maXJzdCA9IHJlbmRlckluZGV4ID09PSAwO1xyXG4gICAgICBjb250ZXh0Lmxhc3QgPSByZW5kZXJJbmRleCA9PT0gY291bnQgLSAxO1xyXG4gICAgICBjb250ZXh0LmV2ZW4gPSByZW5kZXJJbmRleCAlIDIgPT09IDA7XHJcbiAgICAgIGNvbnRleHQub2RkID0gIWNvbnRleHQuZXZlbjtcclxuICAgICAgY29udGV4dC5pbmRleCA9IHJlbmRlckluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0Tm9kZURlZihkYXRhOiBhbnksIGk6IG51bWJlcik6IE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPGFueT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5fZGVmRGlyZWMpO1xyXG4gICAgaWYgKHRoaXMuX2RlZkRpcmVjLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZGVmRGlyZWMuZmlyc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm9kZURlZiA9XHJcbiAgICAgIHRoaXMuX2RlZkRpcmVjLmZpbmQoZGVmID0+IGRlZi53aGVuICYmIGRlZi53aGVuKGksIGRhdGEpKSB8fFxyXG4gICAgICB0aGlzLl9kZWZhdWx0Tm9kZURlZjtcclxuXHJcbiAgICByZXR1cm4gbm9kZURlZjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29ic2VydmVSZW5kZXJDaGFuZ2VzKCkge1xyXG4gICAgbGV0IGRhdGFTdHJlYW06IE9ic2VydmFibGU8YW55W10+IHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIGlmICh0aGlzLl9kYXRhU291cmNlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xyXG4gICAgICBkYXRhU3RyZWFtID0gdGhpcy5fZGF0YVNvdXJjZTtcclxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9kYXRhU291cmNlKSkge1xyXG4gICAgICBkYXRhU3RyZWFtID0gb2YodGhpcy5fZGF0YVNvdXJjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGFTdHJlYW0pIHtcclxuICAgICAgdGhpcy5fZGF0YVN1YnNjcmlwdGlvbiA9IGRhdGFTdHJlYW1cclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyTm9kZUNoYW5nZXMoZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLmlzTGFzdCA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5wdXRWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy50eXBlID0gdGhpcy5pbnB1dHMuZ3JpZC5hbGwgIT09IDAgPyAnZml4ZWQnIDogJ3Jlc3BvbnNpdmUnO1xyXG4gICAgdGhpcy5sb29wID0gdGhpcy5pbnB1dHMubG9vcCB8fCBmYWxzZTtcclxuICAgIHRoaXMuaW5wdXRzLmVhc2luZyA9IHRoaXMuaW5wdXRzLmVhc2luZyB8fCAnY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknO1xyXG4gICAgdGhpcy50b3VjaC5hY3RpdmUgPSB0aGlzLmlucHV0cy50b3VjaCB8fCBmYWxzZTtcclxuICAgIHRoaXMuUlRMID0gdGhpcy5pbnB1dHMuUlRMID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IHRoaXMuaW5wdXRzLmludGVydmFsIHx8IG51bGw7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID1cclxuICAgICAgdHlwZW9mIHRoaXMuaW5wdXRzLnZlbG9jaXR5ID09PSAnbnVtYmVyJ1xyXG4gICAgICAgID8gdGhpcy5pbnB1dHMudmVsb2NpdHlcclxuICAgICAgICA6IHRoaXMudmVsb2NpdHk7XHJcblxyXG4gICAgaWYgKHRoaXMuaW5wdXRzLnZlcnRpY2FsICYmIHRoaXMuaW5wdXRzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy52ZXJ0aWNhbC5lbmFibGVkID0gdGhpcy5pbnB1dHMudmVydGljYWwuZW5hYmxlZDtcclxuICAgICAgdGhpcy52ZXJ0aWNhbC5oZWlnaHQgPSB0aGlzLmlucHV0cy52ZXJ0aWNhbC5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpcmVjdGlvblN5bSA9IHRoaXMuUlRMID8gJycgOiAnLSc7XHJcbiAgICB0aGlzLnBvaW50ID1cclxuICAgICAgdGhpcy5pbnB1dHMucG9pbnQgJiYgdHlwZW9mIHRoaXMuaW5wdXRzLnBvaW50LnZpc2libGUgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgPyB0aGlzLmlucHV0cy5wb2ludC52aXNpYmxlXHJcbiAgICAgICAgOiB0cnVlO1xyXG5cclxuICAgIHRoaXMuX2Nhcm91c2VsU2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb25SZXNpemluZyhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5vblJlc2l6ZSk7XHJcbiAgICB0aGlzLm9uUmVzaXplID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmRldmljZVdpZHRoICE9PSBldmVudC50YXJnZXQub3V0ZXJXaWR0aCkge1xyXG4gICAgICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCBgYCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcmVDYXJvdXNlbERhdGEoKTtcclxuICAgICAgfVxyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcblxyXG4gIC8qKiBHZXQgVG91Y2ggaW5wdXQgKi9cclxuICBwcml2YXRlIF90b3VjaCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0cy50b3VjaCkge1xyXG4gICAgICBjb25zdCBoYW1tZXJ0aW1lID0gbmV3IEhhbW1lcih0aGlzLnRvdWNoQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICBoYW1tZXJ0aW1lLmdldCgncGFuJykuc2V0KHtkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fSE9SSVpPTlRBTH0pO1xyXG5cclxuICAgICAgaGFtbWVydGltZS5vbigncGFuc3RhcnQnLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxXaWR0aCA9IHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAvLyB0aGlzLnRvdWNoVHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm1bdGhpcy5kZXZpY2VUeXBlXTtcclxuICAgICAgICB0aGlzLmRleFZhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5fc2V0U3R5bGUodGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsICcnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW51cCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5sZWZ0JywgZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGhhbW1lcnRpbWUub24oJ3BhbmRvd24nLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fdG91Y2hIYW5kbGluZygncGFucmlnaHQnLCBldik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFubGVmdCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5sZWZ0JywgZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGhhbW1lcnRpbWUub24oJ3BhbnJpZ2h0JywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbnJpZ2h0JywgZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8qaGFtbWVydGltZS5vbigncGFuZW5kJywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoTWF0aC5hYnMoZXYudmVsb2NpdHkpID49IHRoaXMudmVsb2NpdHkpIHtcclxuICAgICAgICAgIHRoaXMudG91Y2gudmVsb2NpdHkgPSBldi52ZWxvY2l0eTtcclxuICAgICAgICAgIGxldCBkaXJlYyA9IDA7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuUlRMKSB7XHJcbiAgICAgICAgICAgIGRpcmVjID0gdGhpcy50b3VjaC5zd2lwZSA9PT0gJ3BhbnJpZ2h0JyA/IDAgOiAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlyZWMgPSB0aGlzLnRvdWNoLnN3aXBlID09PSAncGFucmlnaHQnID8gMSA6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZShkaXJlYyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZGV4VmFsID0gMDtcclxuICAgICAgICAgIHRoaXMuX3NldFN0eWxlKFxyXG4gICAgICAgICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJyxcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybSAzMjRtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSdcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAvLyB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTsqL1xyXG4gICAgICBoYW1tZXJ0aW1lLm9uKCdoYW1tZXIuaW5wdXQnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAvLyBhbGxvdyBuZXN0ZWQgdG91Y2ggZXZlbnRzIHRvIG5vIHByb3BhZ2F0ZSwgdGhpcyBtYXkgaGF2ZSBvdGhlciBzaWRlIGFmZmVjdHMgYnV0IHdvcmtzIGZvciBub3cuXHJcbiAgICAgICAgLy8gVE9ETzogSXQgaXMgcHJvYmFibHkgYmV0dGVyIHRvIGNoZWNrIHRoZSBzb3VyY2UgZWxlbWVudCBvZiB0aGUgZXZlbnQgYW5kIG9ubHkgYXBwbHkgdGhlIGhhbmRsZSB0byB0aGUgY29ycmVjdCBjYXJvdXNlbFxyXG4gICAgICAgIGV2LnNyY0V2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBoYW5kbGUgdG91Y2ggaW5wdXQgKi9cclxuICBwcml2YXRlIF90b3VjaEhhbmRsaW5nKGU6IHN0cmluZywgZXY6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gdmVydGljYWwgdG91Y2ggZXZlbnRzIHNlZW0gdG8gY2F1c2UgdG8gcGFuc3RhcnQgZXZlbnQgd2l0aCBhbiBvZGQgZGVsdGFcclxuICAgIC8vIGFuZCBhIGNlbnRlciBvZiB7eDowLHk6MH0gc28gdGhpcyB3aWxsIGlnbm9yZSB0aGVtXHJcbiAgICBpZiAoZXYuY2VudGVyLnggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ID0gTWF0aC5hYnModGhpcy52ZXJ0aWNhbC5lbmFibGVkID8gZXYuZGVsdGFZIDogZXYuZGVsdGFYKTtcclxuICAgIGxldCB2YWx0ID0gZXYgLSB0aGlzLmRleFZhbDtcclxuICAgIHZhbHQgPVxyXG4gICAgICB0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJ1xyXG4gICAgICAgID8gKE1hdGguYWJzKGV2IC0gdGhpcy5kZXhWYWwpIC9cclxuICAgICAgICAodGhpcy52ZXJ0aWNhbC5lbmFibGVkXHJcbiAgICAgICAgICA/IHRoaXMudmVydGljYWwuaGVpZ2h0XHJcbiAgICAgICAgICA6IHRoaXMuY2Fyb3VzZWxXaWR0aCkpICpcclxuICAgICAgICAxMDBcclxuICAgICAgICA6IHZhbHQ7XHJcbiAgICB0aGlzLmRleFZhbCA9IGV2O1xyXG4gICAgdGhpcy50b3VjaC5zd2lwZSA9IGU7XHJcbiAgICB0aGlzLl9zZXRUb3VjaFRyYW5zZnJvbShlLCB2YWx0KTtcclxuICAgIHRoaXMuX3NldFRyYW5zZm9ybUZyb21Ub3VjaCgpO1xyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldFRvdWNoVHJhbnNmcm9tKGU6IHN0cmluZywgdmFsdDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLlJUTCA/ICdwYW5yaWdodCcgOiAncGFubGVmdCc7XHJcbiAgICB0aGlzLnRvdWNoVHJhbnNmb3JtID1cclxuICAgICAgZSA9PT0gY29uZGl0aW9uID8gdmFsdCArIHRoaXMudG91Y2hUcmFuc2Zvcm0gOiB0aGlzLnRvdWNoVHJhbnNmb3JtIC0gdmFsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldFRyYW5zZm9ybUZyb21Ub3VjaCgpIHtcclxuXHJcbiAgICBpZiAodGhpcy50b3VjaFRyYW5zZm9ybSA8IDApIHtcclxuICAgICAgdGhpcy50b3VjaFRyYW5zZm9ybSA9IDA7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScgPyAnJScgOiAncHgnO1xyXG5cclxuICAgIGxldCAgbWF4VHJhbnNsYXRlID0gKHRoaXMuaXRlbVdpZHRoICogdGhpcy5fZGF0YVNvdXJjZS5sZW5ndGgpIC0gdGhpcy5jYXJvdXNlbE1haW4xLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnKSB7XHJcbiAgICAgIG1heFRyYW5zbGF0ZSA9IChtYXhUcmFuc2xhdGUgLyB0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCkgKiAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1heFRyYW5zbGF0ZSA8PSB0aGlzLnRvdWNoVHJhbnNmb3JtKSB7XHJcbiAgICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPSBtYXhUcmFuc2xhdGU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uTW92ZS5lbWl0KHRoaXMpO1xyXG4gICAgdGhpcy5fc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgIHRoaXMudmVydGljYWwuZW5hYmxlZFxyXG4gICAgICAgID8gYHRyYW5zbGF0ZTNkKDAsICR7dGhpcy5kaXJlY3Rpb25TeW19JHt0aGlzLnRvdWNoVHJhbnNmb3JtfSR7dHlwZX0sIDApYFxyXG4gICAgICAgIDogYHRyYW5zbGF0ZTNkKCR7dGhpcy5kaXJlY3Rpb25TeW19JHt0aGlzLnRvdWNoVHJhbnNmb3JtfSR7dHlwZX0sIDAsIDApYFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKiB0aGlzIGZuIHVzZWQgdG8gZGlzYWJsZSB0aGUgaW50ZXJ2YWwgd2hlbiBpdCBpcyBub3Qgb24gdGhlIHZpZXdwb3J0ICovXHJcbiAgcHJpdmF0ZSBfb25XaW5kb3dTY3JvbGxpbmcoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0b3AgPSB0aGlzLmNhcm91c2VsLm9mZnNldFRvcDtcclxuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIGNvbnN0IGhlaWdodHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBjb25zdCBjYXJvdXNlbEhlaWdodCA9IHRoaXMuY2Fyb3VzZWwub2Zmc2V0SGVpZ2h0O1xyXG4gICAgY29uc3QgaXNDYXJvdXNlbE9uU2NyZWVuID1cclxuICAgICAgdG9wIDw9IHNjcm9sbFkgKyBoZWlnaHR0IC0gY2Fyb3VzZWxIZWlnaHQgLyA0ICYmXHJcbiAgICAgIHRvcCArIGNhcm91c2VsSGVpZ2h0IC8gMiA+PSBzY3JvbGxZO1xyXG5cclxuICAgIGlmIChpc0Nhcm91c2VsT25TY3JlZW4pIHtcclxuICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJC5uZXh0KDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJC5uZXh0KDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIHN0b3JlIGRhdGEgYmFzZWQgb24gd2lkdGggb2YgdGhlIHNjcmVlbiBmb3IgdGhlIGNhcm91c2VsICovXHJcbiAgcHJpdmF0ZSBfc3RvcmVDYXJvdXNlbERhdGEoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRldmljZVdpZHRoID0gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKVxyXG4gICAgICA/IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICAgIDogMTIwMDtcclxuXHJcbiAgICB0aGlzLmNhcm91c2VsV2lkdGggPSB0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScpIHtcclxuICAgICAgdGhpcy5kZXZpY2VUeXBlID1cclxuICAgICAgICB0aGlzLmRldmljZVdpZHRoID49IDEyMDBcclxuICAgICAgICAgID8gJ2xnJ1xyXG4gICAgICAgICAgOiB0aGlzLmRldmljZVdpZHRoID49IDk5MlxyXG4gICAgICAgICAgPyAnbWQnXHJcbiAgICAgICAgICA6IHRoaXMuZGV2aWNlV2lkdGggPj0gNzY4XHJcbiAgICAgICAgICAgID8gJ3NtJ1xyXG4gICAgICAgICAgICA6ICd4cyc7XHJcblxyXG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5pbnB1dHMuZ3JpZFt0aGlzLmRldmljZVR5cGVdO1xyXG4gICAgICB0aGlzLml0ZW1XaWR0aCA9IHRoaXMuY2Fyb3VzZWxXaWR0aCAvIHRoaXMuaXRlbXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLml0ZW1zID0gTWF0aC5jZWlsKHRoaXMuY2Fyb3VzZWxXaWR0aCAvIHRoaXMuaW5wdXRzLmdyaWQuYWxsKTtcclxuICAgICAgdGhpcy5pdGVtV2lkdGggPSB0aGlzLmlucHV0cy5ncmlkLmFsbDtcclxuICAgICAgdGhpcy5kZXZpY2VUeXBlID0gJ2FsbCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zbGlkZUl0ZW1zID0gKyh0aGlzLmlucHV0cy5zbGlkZSA8IHRoaXMuaXRlbXNcclxuICAgICAgPyB0aGlzLmlucHV0cy5zbGlkZVxyXG4gICAgICA6IHRoaXMuaXRlbXMpO1xyXG4gICAgdGhpcy5sb2FkID1cclxuICAgICAgdGhpcy5pbnB1dHMubG9hZCA+PSB0aGlzLnNsaWRlSXRlbXMgPyB0aGlzLmlucHV0cy5sb2FkIDogdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgdGhpcy5zcGVlZCA9XHJcbiAgICAgIHRoaXMuaW5wdXRzLnNwZWVkICYmIHRoaXMuaW5wdXRzLnNwZWVkID4gLTEgPyB0aGlzLmlucHV0cy5zcGVlZCA6IDQwMDtcclxuXHJcbiAgICB0aGlzLl9jYXJvdXNlbFBvaW50KCk7XHJcbiAgfVxyXG5cclxuICAvKiogSW5pdCBjYXJvdXNlbCBwb2ludCAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsUG9pbnQoKTogdm9pZCB7XHJcbiAgICAvLyBkZWJ1Z2dlcjtcclxuICAgIC8vIGlmICh0aGlzLnVzZXJEYXRhLnBvaW50LnZpc2libGUgPT09IHRydWUpIHtcclxuICAgIGNvbnN0IE5vcyA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSAodGhpcy5pdGVtcyAtIHRoaXMuc2xpZGVJdGVtcyk7XHJcbiAgICB0aGlzLnBvaW50SW5kZXggPSBNYXRoLmNlaWwoTm9zIC8gdGhpcy5zbGlkZUl0ZW1zKTtcclxuICAgIGNvbnN0IHBvaW50ZXJzID0gW107XHJcblxyXG4gICAgaWYgKHRoaXMucG9pbnRJbmRleCA+IDEgfHwgIXRoaXMuaW5wdXRzLnBvaW50LmhpZGVPblNpbmdsZVNsaWRlKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb2ludEluZGV4OyBpKyspIHtcclxuICAgICAgICBwb2ludGVycy5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnBvaW50TnVtYmVycyA9IHBvaW50ZXJzO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wb2ludE51bWJlcnMpO1xyXG4gICAgdGhpcy5fY2Fyb3VzZWxQb2ludEFjdGl2ZXIoKTtcclxuICAgIGlmICh0aGlzLnBvaW50SW5kZXggPD0gMSkge1xyXG4gICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFNsaWRlID09PSAwICYmICF0aGlzLmxvb3ApIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIC8qKiBjaGFuZ2UgdGhlIGFjdGl2ZSBwb2ludCBpbiBjYXJvdXNlbCAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaSA9IE1hdGguY2VpbCh0aGlzLmN1cnJlbnRTbGlkZSAvIHRoaXMuc2xpZGVJdGVtcyk7XHJcbiAgICB0aGlzLmFjdGl2ZVBvaW50ID0gaTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKiBzZXQgdGhlIHN0eWxlIG9mIHRoZSBjYXJvdXNlbCBiYXNlZCB0aGUgaW5wdXRzIGRhdGEgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFNpemUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRva2VuID0gdGhpcy5fZ2VuZXJhdGVJRCgpO1xyXG4gICAgbGV0IGRpc20gPSAnJztcclxuICAgIHRoaXMuc3R5bGVpZCA9IGAuJHtcclxuICAgICAgdGhpcy50b2tlblxyXG4gICAgICB9ID4gLmNhcm91c2VsLXdyYXBwZXIgPiAubmd1Y2Fyb3VzZWwgPiAubmd1LXRvdWNoLWNvbnRhaW5lciA+IC5uZ3VjYXJvdXNlbC1pdGVtc2A7XHJcblxyXG4gICAgaWYgKHRoaXMuaW5wdXRzLmN1c3RvbSA9PT0gJ2Jhbm5lcicpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgJ2Jhbm5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlucHV0cy5hbmltYXRpb24gPT09ICdsYXp5Jykge1xyXG4gICAgICBkaXNtICs9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7dHJhbnNpdGlvbjogdHJhbnNmb3JtIC42cyBlYXNlO31gO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpdGVtU3R5bGUgPSAnJztcclxuICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX3hzID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxyXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC54c31weH1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfc20gPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXHJcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLnNtfXB4fWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9tZCA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcclxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQubWR9cHh9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX2xnID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxyXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC5sZ31weH1gO1xyXG5cclxuICAgICAgaXRlbVN0eWxlID0gYEBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXske2l0ZW1XaWR0aF94c319XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpeyR7aXRlbVdpZHRoX3NtfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7JHtpdGVtV2lkdGhfbWR9fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7JHtpdGVtV2lkdGhfbGd9fWA7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF94cyA9XHJcbiAgICAgICAgdGhpcy5pbnB1dHMudHlwZSA9PT0gJ21vYmlsZSdcclxuICAgICAgICAgID8gYCR7dGhpcy5zdHlsZWlkfSAuaXRlbSB7ZmxleDogMCAwICR7OTUgL1xyXG4gICAgICAgICAgK3RoaXMuaW5wdXRzLmdyaWQueHN9JTsgd2lkdGg6ICR7OTUgLyArdGhpcy5pbnB1dHMuZ3JpZC54c30lO31gXHJcbiAgICAgICAgICA6IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXHJcbiAgICAgICAgICArdGhpcy5pbnB1dHMuZ3JpZC54c30lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC54c30lO31gO1xyXG5cclxuICAgICAgY29uc3QgaXRlbVdpZHRoX3NtID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtmbGV4OiAwIDAgJHsxMDAgL1xyXG4gICAgICArdGhpcy5pbnB1dHMuZ3JpZC5zbX0lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC5zbX0lfWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9tZCA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cclxuICAgICAgK3RoaXMuaW5wdXRzLmdyaWQubWR9JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQubWR9JX1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfbGcgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXHJcbiAgICAgICt0aGlzLmlucHV0cy5ncmlkLmxnfSU7IHdpZHRoOiAkezEwMCAvICt0aGlzLmlucHV0cy5ncmlkLmxnfSV9YDtcclxuXHJcbiAgICAgIGl0ZW1TdHlsZSA9IGBAbWVkaWEgKG1heC13aWR0aDo3NjdweCl7JHtpdGVtV2lkdGhfeHN9fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXske2l0ZW1XaWR0aF9zbX19XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6OTkycHgpeyR7aXRlbVdpZHRoX21kfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpeyR7aXRlbVdpZHRoX2xnfX1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbVN0eWxlID0gYCR7dGhpcy5zdHlsZWlkfSAuaXRlbSB7ZmxleDogMCAwICR7XHJcbiAgICAgICAgdGhpcy5pbnB1dHMuZ3JpZC5hbGxcclxuICAgICAgICB9cHg7IHdpZHRoOiAke3RoaXMuaW5wdXRzLmdyaWQuYWxsfXB4O31gO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNhcm91c2VsLCB0aGlzLnRva2VuKTtcclxuICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXHJcbiAgICAgICAgdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICduZ3V2ZXJ0aWNhbCdcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbE1haW4xLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgYCR7dGhpcy52ZXJ0aWNhbC5oZWlnaHR9cHhgXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXHJcbiAgICB0aGlzLlJUTCAmJlxyXG4gICAgIXRoaXMudmVydGljYWwuZW5hYmxlZCAmJlxyXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgJ25ndXJ0bCcpO1xyXG4gICAgdGhpcy5fY3JlYXRlU3R5bGVFbGVtKGAke2Rpc219ICR7aXRlbVN0eWxlfWApO1xyXG4gICAgdGhpcy5fc3RvcmVDYXJvdXNlbERhdGEoKTtcclxuICB9XHJcblxyXG4gIC8qKiBsb2dpYyB0byBzY3JvbGwgdGhlIGNhcm91c2VsIHN0ZXAgMSAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsU2Nyb2xsT25lKEJ0bjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBsZXQgaXRlbVNwZWVkID0gdGhpcy5zcGVlZDtcclxuICAgIGxldCB0cmFuc2xhdGVYdmFsLFxyXG4gICAgICBjdXJyZW50U2xpZGUgPSAwO1xyXG4gICAgY29uc3QgdG91Y2hNb3ZlID0gTWF0aC5jZWlsKHRoaXMuZGV4VmFsIC8gdGhpcy5pdGVtV2lkdGgpO1xyXG4gICAgdGhpcy5fc2V0U3R5bGUodGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJycpO1xyXG5cclxuICAgIGlmICh0aGlzLnBvaW50SW5kZXggPT09IDEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmIChCdG4gPT09IDAgJiYgKCghdGhpcy5sb29wICYmICF0aGlzLmlzRmlyc3QpIHx8IHRoaXMubG9vcCkpIHtcclxuICAgICAgY29uc3Qgc2xpZGUgPSB0aGlzLnNsaWRlSXRlbXMgKiB0aGlzLnBvaW50SW5kZXg7XHJcblxyXG4gICAgICBjb25zdCBjdXJyZW50U2xpZGVEID0gdGhpcy5jdXJyZW50U2xpZGUgLSB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgIGNvbnN0IE1vdmVTbGlkZSA9IGN1cnJlbnRTbGlkZUQgKyB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLml0ZW1zO1xyXG4gICAgICAgIGl0ZW1TcGVlZCA9IDQwMDtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2xpZGVJdGVtcyA+PSBNb3ZlU2xpZGUpIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSB0cmFuc2xhdGVYdmFsID0gMDtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMCk7XHJcbiAgICAgICAgaWYgKHRvdWNoTW92ZSA+IHRoaXMuc2xpZGVJdGVtcykge1xyXG4gICAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUgLSB0b3VjaE1vdmU7XHJcbiAgICAgICAgICBpdGVtU3BlZWQgPSAyMDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlIC0gdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbFR3byhCdG4sIGN1cnJlbnRTbGlkZSwgaXRlbVNwZWVkKTtcclxuICAgIH0gZWxzZSBpZiAoQnRuID09PSAxICYmICgoIXRoaXMubG9vcCAmJiAhdGhpcy5pc0xhc3QpIHx8IHRoaXMubG9vcCkpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggPD1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZSArIHRoaXMuaXRlbXMgKyB0aGlzLnNsaWRlSXRlbXMgJiZcclxuICAgICAgICAhdGhpcy5pc0xhc3RcclxuICAgICAgKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtIHRoaXMuaXRlbXM7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTGFzdCkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRyYW5zbGF0ZVh2YWwgPSAwO1xyXG4gICAgICAgIGl0ZW1TcGVlZCA9IDQwMDtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMCk7XHJcbiAgICAgICAgaWYgKHRvdWNoTW92ZSA+IHRoaXMuc2xpZGVJdGVtcykge1xyXG4gICAgICAgICAgY3VycmVudFNsaWRlID1cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLnNsaWRlSXRlbXMgKyAodG91Y2hNb3ZlIC0gdGhpcy5zbGlkZUl0ZW1zKTtcclxuICAgICAgICAgIGl0ZW1TcGVlZCA9IDIwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsVHdvKEJ0biwgY3VycmVudFNsaWRlLCBpdGVtU3BlZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGxvZ2ljIHRvIHNjcm9sbCB0aGUgY2Fyb3VzZWwgc3RlcCAyICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxTY3JvbGxUd28oXHJcbiAgICBCdG46IG51bWJlcixcclxuICAgIGN1cnJlbnRTbGlkZTogbnVtYmVyLFxyXG4gICAgaXRlbVNwZWVkOiBudW1iZXJcclxuICApOiB2b2lkIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG5cclxuICAgIGlmICh0aGlzLmRleFZhbCAhPT0gMCkge1xyXG4gICAgICBjb25zdCB2YWwgPSBNYXRoLmFicyh0aGlzLnRvdWNoLnZlbG9jaXR5KTtcclxuICAgICAgbGV0IHNvbXQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICh0aGlzLmRleFZhbCAvIHZhbCAvIHRoaXMuZGV4VmFsKSAqICh0aGlzLmRldmljZVdpZHRoIC0gdGhpcy5kZXhWYWwpXHJcbiAgICAgICk7XHJcbiAgICAgIHNvbXQgPSBzb210ID4gaXRlbVNwZWVkID8gaXRlbVNwZWVkIDogc29tdDtcclxuICAgICAgaXRlbVNwZWVkID0gc29tdCA8IDIwMCA/IDIwMCA6IHNvbXQ7XHJcbiAgICAgIHRoaXMuZGV4VmFsID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLndpdGhBbmltKSB7XHJcbiAgICAgIHRoaXMuX3NldFN0eWxlKFxyXG4gICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAndHJhbnNpdGlvbicsXHJcbiAgICAgICAgYHRyYW5zZm9ybSAke2l0ZW1TcGVlZH1tcyAke3RoaXMuaW5wdXRzLmVhc2luZ31gXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuaW5wdXRzLmFuaW1hdGlvbiAmJlxyXG4gICAgICB0aGlzLl9jYXJvdXNlbEFuaW1hdG9yKFxyXG4gICAgICAgIEJ0bixcclxuICAgICAgICBjdXJyZW50U2xpZGUgKyAxLFxyXG4gICAgICAgIGN1cnJlbnRTbGlkZSArIHRoaXMuaXRlbXMsXHJcbiAgICAgICAgaXRlbVNwZWVkLFxyXG4gICAgICAgIE1hdGguYWJzKHRoaXMuY3VycmVudFNsaWRlIC0gY3VycmVudFNsaWRlKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2V0U3R5bGUodGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsIGBgKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICB0aGlzLml0ZW1MZW5ndGggPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoO1xyXG4gICAgdGhpcy5fdHJhbnNmb3JtU3R5bGUoY3VycmVudFNsaWRlKTtcclxuICAgIHRoaXMuY3VycmVudFNsaWRlID0gY3VycmVudFNsaWRlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMub25Nb3ZlLmVtaXQodGhpcyk7XHJcbiAgICB9LCA0MDApO1xyXG5cclxuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk7XHJcbiAgICB0aGlzLl9jYXJvdXNlbExvYWRUcmlnZ2VyKCk7XHJcbiAgICB0aGlzLndpdGhBbmltID0gdHJ1ZTtcclxuICAgIC8vIGlmIChjdXJyZW50U2xpZGUgPT09IDEyKSB7XHJcbiAgICAvLyAgIHRoaXMuX3N3aXRjaERhdGFTb3VyY2UodGhpcy5kYXRhU291cmNlKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIC8qKiBib29sZWFuIGZ1bmN0aW9uIGZvciBtYWtpbmcgaXNGaXJzdCBhbmQgaXNMYXN0ICovXHJcbiAgcHJpdmF0ZSBfYnRuQm9vbGVhbihmaXJzdDogbnVtYmVyLCBsYXN0OiBudW1iZXIpIHtcclxuICAgIHRoaXMuaXNGaXJzdCA9ICEhZmlyc3Q7XHJcbiAgICB0aGlzLmlzTGFzdCA9ICEhbGFzdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybVN0cmluZyhncmlkOiBzdHJpbmcsIHNsaWRlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IGNvbGxlY3QgPSAnJztcclxuICAgIGNvbGxlY3QgKz0gYCR7dGhpcy5zdHlsZWlkfSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoYDtcclxuXHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtW2dyaWRdID1cclxuICAgICAgICAodGhpcy52ZXJ0aWNhbC5oZWlnaHQgLyB0aGlzLmlucHV0cy5ncmlkW2dyaWRdKSAqIHNsaWRlO1xyXG4gICAgICBjb2xsZWN0ICs9IGAwLCAtJHt0aGlzLnRyYW5zZm9ybVtncmlkXX1weCwgMGA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybVtncmlkXSA9ICgxMDAgLyB0aGlzLmlucHV0cy5ncmlkW2dyaWRdKSAqIHNsaWRlO1xyXG4gICAgICBjb2xsZWN0ICs9IGAke3RoaXMuZGlyZWN0aW9uU3ltfSR7dGhpcy50cmFuc2Zvcm1bZ3JpZF19JSwgMCwgMGA7XHJcbiAgICB9XHJcbiAgICBjb2xsZWN0ICs9IGApOyB9YDtcclxuICAgIHJldHVybiBjb2xsZWN0O1xyXG4gIH1cclxuXHJcbiAgLyoqIHNldCB0aGUgdHJhbnNmb3JtIHN0eWxlIHRvIHNjcm9sbCB0aGUgY2Fyb3VzZWwgICovXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtU3R5bGUoc2xpZGU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgbGV0IHNsaWRlQ3NzID0gJyc7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScpIHtcclxuICAgICAgc2xpZGVDc3MgPSBgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoXHJcbiAgICAgICAgJ3hzJyxcclxuICAgICAgICBzbGlkZVxyXG4gICAgICApfX1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoJ3NtJywgc2xpZGUpfSB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKCdtZCcsIHNsaWRlKX0gfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoJ2xnJywgc2xpZGUpfSB9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLmFsbCA9IHRoaXMuaW5wdXRzLmdyaWQuYWxsICogc2xpZGU7XHJcbiAgICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybS5hbGw7XHJcbiAgICAgIHNsaWRlQ3NzID0gYCR7dGhpcy5zdHlsZWlkfSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvblN5bVxyXG4gICAgICAgIH0ke3RoaXMudHJhbnNmb3JtLmFsbH1weCwgMCwgMCk7YDtcclxuICAgIH1cclxuICAgIHRoaXMuY2Fyb3VzZWxDc3NOb2RlLmlubmVySFRNTCA9IHNsaWRlQ3NzO1xyXG4gIH1cclxuXHJcbiAgLyoqIHRoaXMgd2lsbCB0cmlnZ2VyIHRoZSBjYXJvdXNlbCB0byBsb2FkIHRoZSBpdGVtcyAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsTG9hZFRyaWdnZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuaW5wdXRzLmxvYWQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLmxvYWQgPD0gdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLml0ZW1zICYmXHJcbiAgICAgIHRoaXMuY2Fyb3VzZWxMb2FkLmVtaXQodGhpcy5jdXJyZW50U2xpZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGdlbmVyYXRlIENsYXNzIGZvciBlYWNoIGNhcm91c2VsIHRvIHNldCBzcGVjaWZpYyBzdHlsZSAqL1xyXG4gIHByaXZhdGUgX2dlbmVyYXRlSUQoKTogc3RyaW5nIHtcclxuICAgIGxldCB0ZXh0ID0gJyc7XHJcbiAgICBjb25zdCBwb3NzaWJsZSA9XHJcbiAgICAgICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYG5ndWNhcm91c2VsJHt0ZXh0fWA7XHJcbiAgfVxyXG5cclxuICAvKiogaGFuZGxlIHRoZSBhdXRvIHNsaWRlICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxJbnRlcnZhbCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwgJiYgdGhpcy5sb29wKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXI0ID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAnc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm9uU2Nyb2xsaW5nKTtcclxuICAgICAgICB0aGlzLm9uU2Nyb2xsaW5nID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9vbldpbmRvd1Njcm9sbGluZygpO1xyXG4gICAgICAgIH0sIDYwMCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcGxheSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAnbW91c2VsZWF2ZScpLnBpcGUobWFwVG8oMSkpO1xyXG4gICAgICBjb25zdCBwYXVzZSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAnbW91c2VlbnRlcicpLnBpcGUobWFwVG8oMCkpO1xyXG5cclxuICAgICAgY29uc3QgdG91Y2hQbGF5JCA9IGZyb21FdmVudChjb250YWluZXIsICd0b3VjaHN0YXJ0JykucGlwZShtYXBUbygxKSk7XHJcbiAgICAgIGNvbnN0IHRvdWNoUGF1c2UkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ3RvdWNoZW5kJykucGlwZShtYXBUbygwKSk7XHJcblxyXG4gICAgICBjb25zdCBpbnRlcnZhbCQgPSBpbnRlcnZhbCh0aGlzLmlucHV0cy5pbnRlcnZhbC50aW1pbmcpLnBpcGUobWFwVG8oMSkpO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbEludCA9IG1lcmdlKFxyXG4gICAgICAgICAgcGxheSQsXHJcbiAgICAgICAgICB0b3VjaFBsYXkkLFxyXG4gICAgICAgICAgcGF1c2UkLFxyXG4gICAgICAgICAgdG91Y2hQYXVzZSQsXHJcbiAgICAgICAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIHN0YXJ0V2l0aCgxKSxcclxuICAgICAgICAgICAgc3dpdGNoTWFwKHZhbCA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0hvdmVyZWQgPSAhdmFsO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgICAgIHJldHVybiB2YWwgPyBpbnRlcnZhbCQgOiBlbXB0eSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZSgxKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9LCB0aGlzLmludGVydmFsLmluaXRpYWxEZWxheSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGVJdGVtSW5kZXhDb250ZXh0QW5pKCkge1xyXG4gICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lcjtcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCByZW5kZXJJbmRleCA9IDAsIGNvdW50ID0gdmlld0NvbnRhaW5lci5sZW5ndGg7XHJcbiAgICAgIHJlbmRlckluZGV4IDwgY291bnQ7XHJcbiAgICAgIHJlbmRlckluZGV4KytcclxuICAgICkge1xyXG4gICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQocmVuZGVySW5kZXgpIGFzIGFueTtcclxuICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgIGNvbnRleHQuY291bnQgPSBjb3VudDtcclxuICAgICAgY29udGV4dC5maXJzdCA9IHJlbmRlckluZGV4ID09PSAwO1xyXG4gICAgICBjb250ZXh0Lmxhc3QgPSByZW5kZXJJbmRleCA9PT0gY291bnQgLSAxO1xyXG4gICAgICBjb250ZXh0LmV2ZW4gPSByZW5kZXJJbmRleCAlIDIgPT09IDA7XHJcbiAgICAgIGNvbnRleHQub2RkID0gIWNvbnRleHQuZXZlbjtcclxuICAgICAgY29udGV4dC5pbmRleCA9IHJlbmRlckluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGFuaW1hdGUgdGhlIGNhcm91c2VsIGl0ZW1zICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxBbmltYXRvcihcclxuICAgIGRpcmVjdGlvbjogbnVtYmVyLFxyXG4gICAgc3RhcnQ6IG51bWJlcixcclxuICAgIGVuZDogbnVtYmVyLFxyXG4gICAgc3BlZWQ6IG51bWJlcixcclxuICAgIGxlbmd0aDogbnVtYmVyLFxyXG4gICAgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lclxyXG4gICk6IHZvaWQge1xyXG4gICAgbGV0IHZhbCA9IGxlbmd0aCA8IDUgPyBsZW5ndGggOiA1O1xyXG4gICAgdmFsID0gdmFsID09PSAxID8gMyA6IHZhbDtcclxuICAgIGNvbnN0IGNvbGxlY3RJbmRleCA9IFtdO1xyXG5cclxuICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0IC0gMTsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgY29sbGVjdEluZGV4LnB1c2goaSk7XHJcbiAgICAgICAgdmFsID0gdmFsICogMjtcclxuICAgICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQoaSkgYXMgYW55O1xyXG4gICAgICAgIGlmICh2aWV3UmVmKSB7XHJcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcclxuICAgICAgICAgIGNvbnRleHQuYW5pbWF0ZSA9IHt2YWx1ZTogdHJ1ZSwgcGFyYW1zOiB7ZGlzdGFuY2U6IHZhbH19O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IGVuZCAtIDE7IGkgPj0gc3RhcnQgLSAxOyBpLS0pIHtcclxuICAgICAgICBjb2xsZWN0SW5kZXgucHVzaChpKTtcclxuICAgICAgICB2YWwgPSB2YWwgKiAyO1xyXG4gICAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChpKSBhcyBhbnk7XHJcbiAgICAgICAgaWYgKHZpZXdSZWYpIHtcclxuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xyXG4gICAgICAgICAgY29udGV4dC5hbmltYXRlID0ge3ZhbHVlOiB0cnVlLCBwYXJhbXM6IHtkaXN0YW5jZTogLXZhbH19O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5fcmVtb3ZlQW5pbWF0aW9ucyhjb2xsZWN0SW5kZXgpO1xyXG4gICAgfSwgc3BlZWQgKiAwLjcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmVtb3ZlQW5pbWF0aW9ucyhpbmRleHM6IG51bWJlcltdKSB7XHJcbiAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyO1xyXG4gICAgaW5kZXhzLmZvckVhY2goaSA9PiB7XHJcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChpKSBhcyBhbnk7XHJcbiAgICAgIGlmICh2aWV3UmVmKSB7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgICAgY29udGV4dC5hbmltYXRlID0ge3ZhbHVlOiBmYWxzZSwgcGFyYW1zOiB7ZGlzdGFuY2U6IDB9fTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKiBTaG9ydCBmb3JtIGZvciBzZXRFbGVtZW50U3R5bGUgKi9cclxuICBwcml2YXRlIF9zZXRTdHlsZShlbDogYW55LCBwcm9wOiBhbnksIHZhbDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbCwgcHJvcCwgdmFsKTtcclxuICB9XHJcblxyXG4gIC8qKiBGb3IgZ2VuZXJhdGluZyBzdHlsZSB0YWcgKi9cclxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUVsZW0oZGF0YXM/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHN0eWxlSXRlbSA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICBpZiAoZGF0YXMpIHtcclxuICAgICAgY29uc3Qgc3R5bGVUZXh0ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlVGV4dChkYXRhcyk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHN0eWxlSXRlbSwgc3R5bGVUZXh0KTtcclxuICAgIH1cclxuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuY2Fyb3VzZWwsIHN0eWxlSXRlbSk7XHJcbiAgICByZXR1cm4gc3R5bGVJdGVtO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbmd1LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJ25ndS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ25ndS1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd1SXRlbUNvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXRlbScpIGNsYXNzZXMgPSB0cnVlO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ25ndS10aWxlJyxcbiAgdGVtcGxhdGVVcmw6ICduZ3UtdGlsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyduZ3UtdGlsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5ndVRpbGVDb21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLml0ZW0nKSBjbGFzc2VzID0gdHJ1ZTtcbn1cbiIsImltcG9ydCB7XG4gIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxuICBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXG4gIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSxcbiAgTmd1Q2Fyb3VzZWxPdXRsZXQsXG4gIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUsXG4gIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSwgTmd1Q2Fyb3VzZWxXcmFwcGVyRGlyZWN0aXZlXG59IGZyb20gJy4vbmd1LWNhcm91c2VsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3VJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3UtaXRlbS9uZ3UtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ3VDYXJvdXNlbCB9IGZyb20gJy4vbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd1VGlsZUNvbXBvbmVudCB9IGZyb20gJy4vbmd1LXRpbGUvbmd1LXRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IE5ndUNhcm91c2VsU2VydmljZSB9IGZyb20gJy4vbmd1LWNhcm91c2VsLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIE5ndUNhcm91c2VsLFxuICAgIE5ndUl0ZW1Db21wb25lbnQsXG4gICAgTmd1VGlsZUNvbXBvbmVudCxcbiAgICBOZ3VDYXJvdXNlbFBvaW50RGlyZWN0aXZlLFxuICAgIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlLFxuICAgIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxuICAgIE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbE91dGxldFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ3VDYXJvdXNlbCxcbiAgICBOZ3VJdGVtQ29tcG9uZW50LFxuICAgIE5ndVRpbGVDb21wb25lbnQsXG4gICAgTmd1Q2Fyb3VzZWxQb2ludERpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLFxuICAgIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbFdyYXBwZXJEaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxPdXRsZXRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTmd1Q2Fyb3VzZWxTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxNb2R1bGUge1xufVxuIl0sIm5hbWVzIjpbImludGVydmFsIiwidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUNFLDBCQUNTLEtBQW1CLEVBQ25CLFFBQXlCLEVBQ3pCQSxXQUEyQixFQUMzQixTQUE4QixFQUM5QixNQUFrQixFQUNsQixZQUEyQixFQUMzQixVQUF1QixFQUN2QixJQUFjLEVBQ2QsS0FBVSxFQUNWLEtBQVMsRUFDVCxJQUFRLEVBQ1IsV0FBZSxFQUNmLGFBQWlCLEVBQ2pCLFNBQWEsRUFDYixVQUFjLEVBQ2QsWUFBZ0IsRUFDaEIsVUFBYyxFQUNkLFlBQWdCLEVBQ2hCLE1BQXFDLEVBQ3JD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