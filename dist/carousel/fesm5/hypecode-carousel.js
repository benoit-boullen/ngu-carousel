import { Injectable, Directive, ElementRef, TemplateRef, ViewContainerRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, EventEmitter, Inject, Input, isDevMode, IterableDiffers, Output, PLATFORM_ID, Renderer2, ViewChild, HostBinding, NgModule } from '@angular/core';
import { __extends } from 'tslib';
import { empty, fromEvent, interval, merge, Observable, of, Subject } from 'rxjs';
import { mapTo, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NguCarouselStore = /** @class */ (function () {
    function NguCarouselStore(touch, vertical, interval$$1, transform, button, visibleItems, deviceType, type, token, items, load, _carouselWidth, itemWidth, slideItems, itemWidthPer, itemLength, currentSlide, easing, speed, loop, dexVal, touchTransform, isEnd, isFirst, isLast, RTL, point, velocity) {
        if (touch === void 0) { touch = new Touch(); }
        if (vertical === void 0) { vertical = new Vertical(); }
        if (transform === void 0) { transform = new NguTransfrom(); }
        if (type === void 0) { type = 'fixed'; }
        if (token === void 0) { token = ''; }
        if (items === void 0) { items = 0; }
        if (load === void 0) { load = 0; }
        if (_carouselWidth === void 0) { _carouselWidth = 0; }
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
    NguCarouselStore.deviceWidth = 0;
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
var LogLevel = {
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
var Logger = /** @class */ (function () {
    function Logger(source) {
        this.source = source;
    }
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     * @return {?}
     */
    Logger.enableProductionMode = /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     * @return {?}
     */
    function () {
        Logger.level = LogLevel.Warning;
    };
    /**
     * @return {?}
     */
    Logger.prototype.resetSum = /**
     * @return {?}
     */
    function () {
        Logger.sumTiming = {};
    };
    /**
     * @param {?} tag
     * @param {?=} display
     * @return {?}
     */
    Logger.prototype.timing = /**
     * @param {?} tag
     * @param {?=} display
     * @return {?}
     */
    function (tag, display) {
        if (display === void 0) { display = false; }
        /** @type {?} */
        var d = new Date();
        /** @type {?} */
        var logs = [tag];
        if (Logger.previousTime) {
            /** @type {?} */
            var diff = d.getTime() - Logger.previousTime.getTime();
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
    };
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     */
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     * @param {...?} objects
     * @return {?}
     */
    Logger.prototype.debug = /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     * @param {...?} objects
     * @return {?}
     */
    function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.log, LogLevel.Debug, objects);
    };
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     */
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     * @param {...?} objects
     * @return {?}
     */
    Logger.prototype.info = /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     * @param {...?} objects
     * @return {?}
     */
    function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.info, LogLevel.Info, objects);
    };
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     */
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     * @param {...?} objects
     * @return {?}
     */
    Logger.prototype.warn = /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     * @param {...?} objects
     * @return {?}
     */
    function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.warn, LogLevel.Warning, objects);
    };
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     */
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     * @param {...?} objects
     * @return {?}
     */
    Logger.prototype.error = /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     * @param {...?} objects
     * @return {?}
     */
    function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.error, LogLevel.Error, objects);
    };
    /**
     * @param {?} func
     * @param {?} level
     * @param {?} objects
     * @return {?}
     */
    Logger.prototype.log = /**
     * @param {?} func
     * @param {?} level
     * @param {?} objects
     * @return {?}
     */
    function (func, level, objects) {
        var _this = this;
        if (level <= Logger.level) {
            /** @type {?} */
            var log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach(function (output) { return output.apply(output, [_this.source, level].concat(objects)); });
        }
    };
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
    return Logger;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var log = new Logger('NgUCarousel');
// TODO calculer la taille possible pour le .ngucarsoul en fonction des boutons prev/next
/**
 * @template T
 */
var NguCarousel = /** @class */ (function (_super) {
    __extends(NguCarousel, _super);
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
            if (!!this._carouselWidth) {
                this._carouselWidth = this.nguItemsContainer.nativeElement.offsetWidth;
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
        log.debug('_touch');
        if (this.inputs.touch) {
            /** @type {?} */
            var hammertime = new Hammer(this.touchContainer.nativeElement);
            hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
            hammertime.on('panstart', function (ev) {
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
        log.debug('_touchHandling', this._carouselWidth, this.carouselWidth);
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
        log.debug(valt);
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
        /*this.deviceWidth = isPlatformBrowser(this.platformId)
          ? window.innerWidth
          : 1200;
    */
        log.timing('m555');
        // this.carouselWidth = this.carouselMain1.nativeElement.offsetWidth;
        log.timing('m557');
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
            console.log(this.itemWidth);
        }
        else {
            this.items = Math.ceil(this.carouselWidth / this.inputs.grid.all);
            this.itemWidth = this.inputs.grid.all;
            this.deviceType = 'all';
        }
        log.timing('m575');
        this.slideItems = +(this.inputs.slide < this.items
            ? this.inputs.slide
            : this.items);
        this.load =
            this.inputs.load >= this.slideItems ? this.inputs.load : this.slideItems;
        this.speed =
            this.inputs.speed && this.inputs.speed > -1 ? this.inputs.speed : 400;
        log.timing('end');
        // this._carouselPoint();
        // console.log(Logger.sumTiming);
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
                    template: "<ng-content></ng-content>\r\n",
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
                    template: "<div class=\"tile\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlwZWNvZGUtY2Fyb3VzZWwuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC9saWIvbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC50cyIsIm5nOi8vQGh5cGVjb2RlL2Nhcm91c2VsL2xpYi9uZ3UtY2Fyb3VzZWwuc2VydmljZS50cyIsIm5nOi8vQGh5cGVjb2RlL2Nhcm91c2VsL2xpYi9uZ3UtY2Fyb3VzZWwuZGlyZWN0aXZlLnRzIiwibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL2xvZ2dlci5zZXJ2aWNlLnRzIiwibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL25ndS1jYXJvdXNlbC9uZ3UtY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL25ndS1pdGVtL25ndS1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGh5cGVjb2RlL2Nhcm91c2VsL2xpYi9uZ3UtdGlsZS9uZ3UtdGlsZS5jb21wb25lbnQudHMiLCJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC9saWIvbmd1LWNhcm91c2VsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxTdG9yZSB7XHJcbiAgcHVibGljIHN0YXRpYyBkZXZpY2VXaWR0aCA9IDA7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgdG91Y2ggPSBuZXcgVG91Y2goKSxcclxuICAgIHB1YmxpYyB2ZXJ0aWNhbCA9IG5ldyBWZXJ0aWNhbCgpLFxyXG4gICAgcHVibGljIGludGVydmFsPzogQ2Fyb3VzZWxJbnRlcnZhbCxcclxuICAgIHB1YmxpYyB0cmFuc2Zvcm0gPSBuZXcgTmd1VHJhbnNmcm9tKCksXHJcbiAgICBwdWJsaWMgYnV0dG9uPzogTmd1QnV0dG9uLFxyXG4gICAgcHVibGljIHZpc2libGVJdGVtcz86IEl0ZW1zQ29udHJvbCxcclxuICAgIHB1YmxpYyBkZXZpY2VUeXBlPzogRGV2aWNlVHlwZSxcclxuICAgIHB1YmxpYyB0eXBlID0gJ2ZpeGVkJyxcclxuICAgIHB1YmxpYyB0b2tlbiA9ICcnLFxyXG4gICAgcHVibGljIGl0ZW1zID0gMCxcclxuICAgIHB1YmxpYyBsb2FkID0gMCxcclxuICAgIHByb3RlY3RlZCBfY2Fyb3VzZWxXaWR0aCA9IDAsXHJcbiAgICBwdWJsaWMgaXRlbVdpZHRoID0gMCxcclxuICAgIHB1YmxpYyBzbGlkZUl0ZW1zID0gMCxcclxuICAgIHB1YmxpYyBpdGVtV2lkdGhQZXIgPSAwLFxyXG4gICAgcHVibGljIGl0ZW1MZW5ndGggPSAwLFxyXG4gICAgcHVibGljIGN1cnJlbnRTbGlkZSA9IDAsXHJcbiAgICBwdWJsaWMgZWFzaW5nID0gJ2N1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJyxcclxuICAgIHB1YmxpYyBzcGVlZCA9IDIwMCxcclxuICAgIHB1YmxpYyBsb29wID0gZmFsc2UsXHJcbiAgICBwdWJsaWMgZGV4VmFsID0gMCxcclxuICAgIHB1YmxpYyB0b3VjaFRyYW5zZm9ybSA9IDAsXHJcbiAgICBwdWJsaWMgaXNFbmQgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBpc0ZpcnN0ID0gdHJ1ZSxcclxuICAgIHB1YmxpYyBpc0xhc3QgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBSVEwgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBwb2ludCA9IHRydWUsXHJcbiAgICBwdWJsaWMgdmVsb2NpdHkgPSAxXHJcbiAgKSB7fVxyXG59XHJcbmV4cG9ydCB0eXBlIERldmljZVR5cGUgPSAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ2FsbCc7XHJcblxyXG5leHBvcnQgdHlwZSBCdXR0b25WaXNpYmxlID0gJ2Rpc2FibGVkJyB8ICdoaWRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbnRyb2wge1xyXG4gIHN0YXJ0OiBudW1iZXI7XHJcbiAgZW5kOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbCB7XHJcbiAgZW5hYmxlZDogYm9vbGVhbjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICAvLyBudW1IZWlnaHQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3VCdXR0b24ge1xyXG4gIHZpc2liaWxpdHk/OiBCdXR0b25WaXNpYmxlO1xyXG4gIGVsYXN0aWM/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb3VjaCB7XHJcbiAgYWN0aXZlPzogYm9vbGVhbjtcclxuICBzd2lwZTogc3RyaW5nO1xyXG4gIHZlbG9jaXR5OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3VUcmFuc2Zyb20ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHhzID0gMCxcclxuICAgIHB1YmxpYyBzbSA9IDAsXHJcbiAgICBwdWJsaWMgbWQgPSAwLFxyXG4gICAgcHVibGljIGxnID0gMCxcclxuICAgIHB1YmxpYyBhbGwgPSAwXHJcbiAgKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxDb25maWcge1xyXG4gIGdyaWQ6IE5ndVRyYW5zZnJvbTtcclxuICBzbGlkZT86IG51bWJlcjtcclxuICBzcGVlZD86IG51bWJlcjtcclxuICBpbnRlcnZhbD86IENhcm91c2VsSW50ZXJ2YWw7XHJcbiAgYW5pbWF0aW9uPzogQW5pbWF0ZTtcclxuICBwb2ludD86IFBvaW50O1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbiAgbG9hZD86IG51bWJlcjtcclxuICBjdXN0b20/OiBDdXN0b207XHJcbiAgbG9vcD86IGJvb2xlYW47XHJcbiAgdG91Y2g/OiBib29sZWFuO1xyXG4gIGVhc2luZz86IHN0cmluZztcclxuICBSVEw/OiBib29sZWFuO1xyXG4gIGJ1dHRvbj86IE5ndUJ1dHRvbjtcclxuICB2ZXJ0aWNhbD86IFZlcnRpY2FsO1xyXG4gIHZlbG9jaXR5PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDdXN0b20gPSAnYmFubmVyJztcclxuZXhwb3J0IHR5cGUgQW5pbWF0ZSA9ICdsYXp5JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xyXG4gIHZpc2libGU6IGJvb2xlYW47XHJcbiAgaGlkZU9uU2luZ2xlU2xpZGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvbiB7XHJcbiAgdHlwZT86IEFuaW1hdGU7XHJcbiAgYW5pbWF0ZVN0eWxlcz86IEFuaW1hdGlvblN0eWxlcztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25TdHlsZXMge1xyXG4gIHN0eWxlPzogc3RyaW5nO1xyXG4gIG9wZW4/OiBzdHJpbmc7XHJcbiAgY2xvc2U/OiBzdHJpbmc7XHJcbiAgc3RhZ2dlcj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbEludGVydmFsIHtcclxuICB0aW1pbmc6IG51bWJlcjtcclxuICBpbml0aWFsRGVsYXk/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE91dGxldENvbnRleHQ8VD4ge1xyXG4gIC8qKiBEYXRhIGZvciB0aGUgbm9kZS4gKi9cclxuICAkaW1wbGljaXQ6IFQ7XHJcblxyXG4gIC8qKiBEZXB0aCBvZiB0aGUgbm9kZS4gKi9cclxuICBsZXZlbDogbnVtYmVyO1xyXG5cclxuICAvKiogSW5kZXggbG9jYXRpb24gb2YgdGhlIG5vZGUuICovXHJcbiAgaW5kZXg/OiBudW1iZXI7XHJcblxyXG4gIC8qKiBMZW5ndGggb2YgdGhlIG51bWJlciBvZiB0b3RhbCBkYXRhTm9kZXMuICovXHJcbiAgY291bnQ/OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFQpIHtcclxuICAgIHRoaXMuJGltcGxpY2l0ID0gZGF0YTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3VDYXJvdXNlbCB9IGZyb20gJy4vbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxTZXJ2aWNlIHtcclxuXHJcblxyXG4gIGNhcm91c2VsOiBOZ3VDYXJvdXNlbDxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgfVxyXG5cclxuICBzZXRDYXJvdXNlbChjYXJvdXNlbDogTmd1Q2Fyb3VzZWw8YW55Pikge1xyXG4gICAgdGhpcy5jYXJvdXNlbCA9IGNhcm91c2VsO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2Fyb3VzZWwoKTogTmd1Q2Fyb3VzZWw8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYXJvdXNlbDtcclxuICB9XHJcblxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbTmd1Q2Fyb3VzZWxJdGVtXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSB7fVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW05ndUNhcm91c2VsTmV4dF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUge1xyXG4gIC8vIEBIb3N0QmluZGluZygnZGlzYWJsZWQnKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAvLyBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKSBkaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAvLyBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgLy8gb25DbGljaygpIHtcclxuICAvLyB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tOZ3VDYXJvdXNlbFByZXZdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlIHtcclxuICAvLyBASG9zdEJpbmRpbmcoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgLy8gQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgZGlzcGxheSA9ICdibG9jayc7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tOZ3VDYXJvdXNlbFBvaW50XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUge31cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tuZ3VDYXJvdXNlbERlZl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxUPiB7XHJcbiAgd2hlbjogKGluZGV4OiBudW1iZXIsIG5vZGVEYXRhOiBUKSA9PiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tuZ3VDYXJvdXNlbE91dGxldF0nXHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE91dGxldCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHt9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tuZ3VDYXJvdXNlbFdyYXBwZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxXcmFwcGVyRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IEVsZW1lbnRSZWY8YW55Pikge31cclxufVxyXG4iLCIvKipcclxuICogU2ltcGxlIGxvZ2dlciBzeXN0ZW0gd2l0aCB0aGUgcG9zc2liaWxpdHkgb2YgcmVnaXN0ZXJpbmcgY3VzdG9tIG91dHB1dHMuXHJcbiAqXHJcbiAqIDQgZGlmZmVyZW50IGxvZyBsZXZlbHMgYXJlIHByb3ZpZGVkLCB3aXRoIGNvcnJlc3BvbmRpbmcgbWV0aG9kczpcclxuICogLSBkZWJ1ZyAgIDogZm9yIGRlYnVnIGluZm9ybWF0aW9uXHJcbiAqIC0gaW5mbyAgICA6IGZvciBpbmZvcm1hdGl2ZSBzdGF0dXMgb2YgdGhlIGFwcGxpY2F0aW9uIChzdWNjZXNzLCAuLi4pXHJcbiAqIC0gd2FybmluZyA6IGZvciBub24tY3JpdGljYWwgZXJyb3JzIHRoYXQgZG8gbm90IHByZXZlbnQgbm9ybWFsIGFwcGxpY2F0aW9uIGJlaGF2aW9yXHJcbiAqIC0gZXJyb3IgICA6IGZvciBjcml0aWNhbCBlcnJvcnMgdGhhdCBwcmV2ZW50IG5vcm1hbCBhcHBsaWNhdGlvbiBiZWhhdmlvclxyXG4gKlxyXG4gKiBFeGFtcGxlIHVzYWdlOlxyXG4gKiBgYGBcclxuICogaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnYXBwL2NvcmUvbG9nZ2VyLnNlcnZpY2UnO1xyXG4gKlxyXG4gKiBjb25zdCBsb2cgPSBuZXcgTG9nZ2VyKCdteUZpbGUnKTtcclxuICogLi4uXHJcbiAqIGxvZy5kZWJ1Zygnc29tZXRoaW5nIGhhcHBlbmVkJyk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUbyBkaXNhYmxlIGRlYnVnIGFuZCBpbmZvIGxvZ3MgaW4gcHJvZHVjdGlvbiwgYWRkIHRoaXMgc25pcHBldCB0byB5b3VyIHJvb3QgY29tcG9uZW50OlxyXG4gKiBgYGBcclxuICogZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAqICAgbmdPbkluaXQoKSB7XHJcbiAqICAgICBpZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xyXG4gKiAgICAgICBMb2dnZXIuZW5hYmxlUHJvZHVjdGlvbk1vZGUoKTtcclxuICogICAgIH1cclxuICogICAgIC4uLlxyXG4gKiAgIH1cclxuICogfVxyXG4gKlxyXG4gKiBJZiB5b3Ugd2FudCB0byBwcm9jZXNzIGxvZ3MgdGhyb3VnaCBvdGhlciBvdXRwdXRzIHRoYW4gY29uc29sZSwgeW91IGNhbiBhZGQgTG9nT3V0cHV0IGZ1bmN0aW9ucyB0byBMb2dnZXIub3V0cHV0cy5cclxuICovXHJcblxyXG4vKipcclxuICogVGhlIHBvc3NpYmxlIGxvZyBsZXZlbHMuXHJcbiAqIExvZ0xldmVsLk9mZiBpcyBuZXZlciBlbWl0dGVkIGFuZCBvbmx5IHVzZWQgd2l0aCBMb2dnZXIubGV2ZWwgcHJvcGVydHkgdG8gZGlzYWJsZSBsb2dzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xyXG4gIE9mZiA9IDAsXHJcbiAgRXJyb3IsXHJcbiAgV2FybmluZyxcclxuICBJbmZvLFxyXG4gIERlYnVnXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMb2cgb3V0cHV0IGhhbmRsZXIgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBMb2dPdXRwdXQgPSAoc291cmNlOiBzdHJpbmcsIGxldmVsOiBMb2dMZXZlbCwgLi4ub2JqZWN0czogYW55W10pID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3VycmVudCBsb2dnaW5nIGxldmVsLlxyXG4gICAqIFNldCBpdCB0byBMb2dMZXZlbC5PZmYgdG8gZGlzYWJsZSBsb2dzIGNvbXBsZXRlbHkuXHJcbiAgICovXHJcbiAgc3RhdGljIGxldmVsID0gTG9nTGV2ZWwuRGVidWc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgbG9nIG91dHB1dHMuXHJcbiAgICovXHJcbiAgc3RhdGljIG91dHB1dHM6IExvZ091dHB1dFtdID0gW107XHJcblxyXG4gIHN0YXRpYyBwcmV2aW91c1RpbWU6IERhdGUgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIHN1bVRpbWluZzogYW55ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc291cmNlPzogc3RyaW5nKSB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbmFibGVzIHByb2R1Y3Rpb24gbW9kZS5cclxuICAgKiBTZXRzIGxvZ2dpbmcgbGV2ZWwgdG8gTG9nTGV2ZWwuV2FybmluZy5cclxuICAgKi9cclxuICBzdGF0aWMgZW5hYmxlUHJvZHVjdGlvbk1vZGUoKSB7XHJcbiAgICBMb2dnZXIubGV2ZWwgPSBMb2dMZXZlbC5XYXJuaW5nO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRTdW0oKSB7XHJcbiAgICBMb2dnZXIuc3VtVGltaW5nID0ge307XHJcbiAgfVxyXG5cclxuICB0aW1pbmcodGFnOiBzdHJpbmcsIGRpc3BsYXk6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgY29uc3QgbG9nczogYW55W10gPSBbdGFnXTtcclxuXHJcbiAgICBpZiAoTG9nZ2VyLnByZXZpb3VzVGltZSkge1xyXG4gICAgICBjb25zdCBkaWZmID0gZC5nZXRUaW1lKCkgLSBMb2dnZXIucHJldmlvdXNUaW1lLmdldFRpbWUoKTtcclxuICAgICAgbG9ncy51bnNoaWZ0KCdbJyArIGRpZmYgKyAnXScpO1xyXG4gICAgICBpZiAoIUxvZ2dlci5zdW1UaW1pbmdbdGFnXSkge1xyXG4gICAgICAgIExvZ2dlci5zdW1UaW1pbmdbdGFnXSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgTG9nZ2VyLnN1bVRpbWluZ1t0YWddICs9IGRpZmY7XHJcbiAgICB9XHJcbiAgICBMb2dnZXIucHJldmlvdXNUaW1lID0gZDtcclxuICAgIGxvZ3MudW5zaGlmdChkLmdldFNlY29uZHMoKSArICcuJyArIGQuZ2V0TWlsbGlzZWNvbmRzKCkpO1xyXG4gICAgaWYgKGRpc3BsYXkpIHtcclxuICAgICAgdGhpcy5sb2coY29uc29sZS5sb2csIExvZ0xldmVsLkluZm8sIGxvZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBMb2dzIG1lc3NhZ2VzIG9yIG9iamVjdHMgIHdpdGggdGhlIGRlYnVnIGxldmVsLlxyXG4gICAqIFdvcmtzIHRoZSBzYW1lIGFzIGNvbnNvbGUubG9nKCkuXHJcbiAgICovXHJcbiAgZGVidWcoLi4ub2JqZWN0czogYW55W10pIHtcclxuICAgIHRoaXMubG9nKGNvbnNvbGUubG9nLCBMb2dMZXZlbC5EZWJ1Zywgb2JqZWN0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2dzIG1lc3NhZ2VzIG9yIG9iamVjdHMgIHdpdGggdGhlIGluZm8gbGV2ZWwuXHJcbiAgICogV29ya3MgdGhlIHNhbWUgYXMgY29uc29sZS5sb2coKS5cclxuICAgKi9cclxuICBpbmZvKC4uLm9iamVjdHM6IGFueVtdKSB7XHJcbiAgICB0aGlzLmxvZyhjb25zb2xlLmluZm8sIExvZ0xldmVsLkluZm8sIG9iamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9ncyBtZXNzYWdlcyBvciBvYmplY3RzICB3aXRoIHRoZSB3YXJuaW5nIGxldmVsLlxyXG4gICAqIFdvcmtzIHRoZSBzYW1lIGFzIGNvbnNvbGUubG9nKCkuXHJcbiAgICovXHJcbiAgd2FybiguLi5vYmplY3RzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5sb2coY29uc29sZS53YXJuLCBMb2dMZXZlbC5XYXJuaW5nLCBvYmplY3RzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ3MgbWVzc2FnZXMgb3Igb2JqZWN0cyAgd2l0aCB0aGUgZXJyb3IgbGV2ZWwuXHJcbiAgICogV29ya3MgdGhlIHNhbWUgYXMgY29uc29sZS5sb2coKS5cclxuICAgKi9cclxuICBlcnJvciguLi5vYmplY3RzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5sb2coY29uc29sZS5lcnJvciwgTG9nTGV2ZWwuRXJyb3IsIG9iamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2coZnVuYzogRnVuY3Rpb24sIGxldmVsOiBMb2dMZXZlbCwgb2JqZWN0czogYW55W10pIHtcclxuICAgIGlmIChsZXZlbCA8PSBMb2dnZXIubGV2ZWwpIHtcclxuICAgICAgY29uc3QgbG9nID0gdGhpcy5zb3VyY2UgPyBbJ1snICsgdGhpcy5zb3VyY2UgKyAnXSddLmNvbmNhdChvYmplY3RzKSA6IG9iamVjdHM7XHJcbiAgICAgIGZ1bmMuYXBwbHkoY29uc29sZSwgbG9nKTtcclxuICAgICAgTG9nZ2VyLm91dHB1dHMuZm9yRWFjaCgob3V0cHV0KSA9PiBvdXRwdXQuYXBwbHkob3V0cHV0LCBbdGhpcy5zb3VyY2UsIGxldmVsXS5jb25jYXQob2JqZWN0cykpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRG9DaGVjayxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgaXNEZXZNb2RlLFxyXG4gIEl0ZXJhYmxlQ2hhbmdlUmVjb3JkLFxyXG4gIEl0ZXJhYmxlQ2hhbmdlcyxcclxuICBJdGVyYWJsZURpZmZlcixcclxuICBJdGVyYWJsZURpZmZlcnMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUExBVEZPUk1fSUQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUcmFja0J5RnVuY3Rpb24sXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZW1wdHksIGZyb21FdmVudCwgaW50ZXJ2YWwsIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcFRvLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTmd1Q2Fyb3VzZWxDb25maWcsIE5ndUNhcm91c2VsT3V0bGV0Q29udGV4dCwgTmd1Q2Fyb3VzZWxTdG9yZSB9IGZyb20gJy4vbmd1LWNhcm91c2VsJztcclxuaW1wb3J0IHsgTmd1Q2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi4vbmd1LWNhcm91c2VsLnNlcnZpY2UnO1xyXG5pbXBvcnQge1xyXG4gIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbE91dGxldCxcclxuICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxXcmFwcGVyRGlyZWN0aXZlXHJcbn0gZnJvbSAnLi4vbmd1LWNhcm91c2VsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL2xvZ2dlci5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IGxvZyA9IG5ldyBMb2dnZXIoJ05nVUNhcm91c2VsJyk7XHJcblxyXG4vLyBUT0RPIGNhbGN1bGVyIGxhIHRhaWxsZSBwb3NzaWJsZSBwb3VyIGxlIC5uZ3VjYXJzb3VsIGVuIGZvbmN0aW9uIGRlcyBib3V0b25zIHByZXYvbmV4dFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnbmd1LWNhcm91c2VsJyxcclxuICB0ZW1wbGF0ZVVybDogJ25ndS1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ25ndS1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHZpZXdQcm92aWRlcnM6IFtOZ3VDYXJvdXNlbFNlcnZpY2VdLFxyXG4gIHByb3ZpZGVyczogW05ndUNhcm91c2VsU2VydmljZV0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1jbGFzcy1zdWZmaXhcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsPFQ+IGV4dGVuZHMgTmd1Q2Fyb3VzZWxTdG9yZVxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xyXG4gIF9kYXRhU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgX2RhdGFEaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPHt9PjtcclxuICBzdHlsZWlkOiBzdHJpbmc7XHJcbiAgYWN0aXZlUG9pbnQ6IG51bWJlcjtcclxuICBpc0hvdmVyZWQgPSBmYWxzZTtcclxuICAvLyBpc0ZpcnN0c3MgPSAwO1xyXG4gIGFycmF5Q2hhbmdlczogSXRlcmFibGVDaGFuZ2VzPHt9PjtcclxuICBjYXJvdXNlbEludDogU3Vic2NyaXB0aW9uO1xyXG4gIEBWaWV3Q2hpbGQoTmd1Q2Fyb3VzZWxPdXRsZXQpXHJcbiAgX25vZGVPdXRsZXQ6IE5ndUNhcm91c2VsT3V0bGV0O1xyXG4gIEBWaWV3Q2hpbGQoTmd1Q2Fyb3VzZWxXcmFwcGVyRGlyZWN0aXZlKVxyXG4gIF9jYXJvdXNlbFdyYXBwZXI6IE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZTtcclxuICBwb2ludE51bWJlcnM6IEFycmF5PGFueT4gPSBbXTtcclxuICAvLyBpc0ZpcnN0c3MgPSAwO1xyXG4gIGxpc3RlbmVyMTogKCkgPT4gdm9pZDtcclxuICBsaXN0ZW5lcjI6ICgpID0+IHZvaWQ7XHJcbiAgbGlzdGVuZXIzOiAoKSA9PiB2b2lkO1xyXG4gIGxpc3RlbmVyNDogKCkgPT4gdm9pZDtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxyXG4gIEBPdXRwdXQoJ29uTW92ZScpXHJcbiAgcHVibGljIG9uTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Tmd1Q2Fyb3VzZWw8VD4+KCk7XHJcbiAgcHJpdmF0ZSBfZGVmYXVsdE5vZGVEZWY6IE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPGFueT4gfCBudWxsO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUpXHJcbiAgcHJpdmF0ZSBfZGVmRGlyZWM6IFF1ZXJ5TGlzdDxOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxhbnk+PjtcclxuICBwcml2YXRlIGRpcmVjdGlvblN5bTogc3RyaW5nO1xyXG4gIHByaXZhdGUgY2Fyb3VzZWxDc3NOb2RlOiBhbnk7XHJcbiAgcHJpdmF0ZSBwb2ludEluZGV4OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB3aXRoQW5pbSA9IHRydWU7XHJcbiAgQElucHV0KCdpbnB1dHMnKVxyXG4gIHByaXZhdGUgaW5wdXRzOiBOZ3VDYXJvdXNlbENvbmZpZztcclxuICBAT3V0cHV0KCdjYXJvdXNlbExvYWQnKVxyXG4gIHByaXZhdGUgY2Fyb3VzZWxMb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBWaWV3Q2hpbGQoJ25ndWNhcm91c2VsJywge3JlYWQ6IEVsZW1lbnRSZWZ9KVxyXG4gIHByaXZhdGUgY2Fyb3VzZWxNYWluMTogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbmd1SXRlbXNDb250YWluZXInLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgcHJpdmF0ZSBuZ3VJdGVtc0NvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZCgndG91Y2hDb250YWluZXInLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgcHJpdmF0ZSB0b3VjaENvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIF9pbnRlcnZhbENvbnRyb2xsZXIkID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xyXG4gIHByaXZhdGUgY2Fyb3VzZWw6IGFueTtcclxuICBwcml2YXRlIG9uUmVzaXplOiBhbnk7XHJcbiAgcHJpdmF0ZSBvblNjcm9sbGluZzogYW55O1xyXG4gIHByaXZhdGUgX3RyYWNrQnlGbjogVHJhY2tCeUZ1bmN0aW9uPFQ+O1xyXG5cclxuICAvLyBwcm90ZWN0ZWQgX2Nhcm91c2VsV2lkdGggPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBjYXJvdXNlbFNlcnZpY2U6IE5ndUNhcm91c2VsU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuY2Fyb3VzZWxTZXJ2aWNlLnNldENhcm91c2VsKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgX2RhdGFTb3VyY2U6IGFueTtcclxuXHJcbiAgQElucHV0KCdkYXRhU291cmNlJylcclxuICBnZXQgZGF0YVNvdXJjZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2U7XHJcbiAgfVxyXG5cclxuICBzZXQgZGF0YVNvdXJjZShkYXRhOiBhbnkpIHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsIHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICAgIC8vIHRoaXMuaXNGaXJzdHNzKys7XHJcbiAgICAgIHRoaXMuX3N3aXRjaERhdGFTb3VyY2UoZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIFRoZSBzZXR0ZXIgaXMgdXNlZCB0byBjYXRjaCB0aGUgYnV0dG9uIGlmIHRoZSBidXR0b24gaGFzIG5nSWZcclxuICAgKiBpc3N1ZSBpZCAjOTFcclxuICAgKi9cclxuICBAQ29udGVudENoaWxkKE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSwge3JlYWQ6IEVsZW1lbnRSZWZ9KVxyXG4gIHNldCBuZXh0QnRuKGJ0bjogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5saXN0ZW5lcjIgJiYgdGhpcy5saXN0ZW5lcjIoKTtcclxuICAgIGlmIChidG4pIHtcclxuICAgICAgdGhpcy5saXN0ZW5lcjIgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oYnRuLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsICgpID0+XHJcbiAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoMSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBUaGUgc2V0dGVyIGlzIHVzZWQgdG8gY2F0Y2ggdGhlIGJ1dHRvbiBpZiB0aGUgYnV0dG9uIGhhcyBuZ0lmXHJcbiAgICogaXNzdWUgaWQgIzkxXHJcbiAgICovXHJcbiAgQENvbnRlbnRDaGlsZChOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsIHtyZWFkOiBFbGVtZW50UmVmfSlcclxuICBzZXQgcHJldkJ0bihidG46IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMubGlzdGVuZXIxICYmIHRoaXMubGlzdGVuZXIxKCk7XHJcbiAgICBpZiAoYnRuKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXIxID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKGJ0bi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoKSA9PlxyXG4gICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKDApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmFja2luZyBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCB0byBjaGVjayB0aGUgZGlmZmVyZW5jZXMgaW4gZGF0YSBjaGFuZ2VzLiBVc2VkIHNpbWlsYXJseVxyXG4gICAqIHRvIGBuZ0ZvcmAgYHRyYWNrQnlgIGZ1bmN0aW9uLiBPcHRpbWl6ZSBJdGVtcyBvcGVyYXRpb25zIGJ5IGlkZW50aWZ5aW5nIGEgSXRlbXMgYmFzZWQgb24gaXRzIGRhdGFcclxuICAgKiByZWxhdGl2ZSB0byB0aGUgZnVuY3Rpb24gdG8ga25vdyBpZiBhIEl0ZW1zIHNob3VsZCBiZSBhZGRlZC9yZW1vdmVkL21vdmVkLlxyXG4gICAqIEFjY2VwdHMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBwYXJhbWV0ZXJzLCBgaW5kZXhgIGFuZCBgaXRlbWAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdHJhY2tCeSgpOiBUcmFja0J5RnVuY3Rpb248VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RyYWNrQnlGbjtcclxuICB9XHJcblxyXG4gIHNldCB0cmFja0J5KGZuOiBUcmFja0J5RnVuY3Rpb248VD4pIHtcclxuICAgIGlmIChcclxuICAgICAgaXNEZXZNb2RlKCkgJiZcclxuICAgICAgZm4gIT0gbnVsbCAmJlxyXG4gICAgICB0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicgJiZcclxuICAgICAgPGFueT5jb25zb2xlICYmXHJcbiAgICAgIDxhbnk+Y29uc29sZS53YXJuXHJcbiAgICApIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGB0cmFja0J5IG11c3QgYmUgYSBmdW5jdGlvbiwgYnV0IHJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoZm4pfS5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl90cmFja0J5Rm4gPSBmbjtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5fZGF0YURpZmZlciA9IHRoaXMuX2RpZmZlcnNcclxuICAgICAgLmZpbmQoW10pXHJcbiAgICAgIC5jcmVhdGUoKF9pOiBudW1iZXIsIGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYWNrQnkgPyB0aGlzLnRyYWNrQnkoaXRlbS5kYXRhSW5kZXgsIGl0ZW0uZGF0YSkgOiBpdGVtO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIHRoaXMuYXJyYXlDaGFuZ2VzID0gdGhpcy5fZGF0YURpZmZlci5kaWZmKHRoaXMuZGF0YVNvdXJjZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuYXJyYXlDaGFuZ2VzICYmIHRoaXMuX2RlZkRpcmVjKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdDaGFuZ2VzIGRldGVjdGVkIScpO1xyXG4gICAgICB0aGlzLl9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jYXJvdXNlbCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLl9pbnB1dFZhbGlkYXRpb24oKTtcclxuXHJcbiAgICB0aGlzLmNhcm91c2VsQ3NzTm9kZSA9IHRoaXMuX2NyZWF0ZVN0eWxlRWxlbSgpO1xyXG5cclxuICAgIC8vIHRoaXMuX2J1dHRvbkNvbnRyb2woKTtcclxuXHJcbiAgICBpZiAod2luZG93KSB7XHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsSW50ZXJ2YWwoKTtcclxuICAgICAgaWYgKCF0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLl90b3VjaCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGlzdGVuZXIzID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMuX29uUmVzaXppbmcoZXZlbnQpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fb25XaW5kb3dTY3JvbGxpbmcoKTtcclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKiBVc2VkIHRvIHJlc2V0IHRoZSBjYXJvdXNlbCAqL1xyXG4gIHB1YmxpYyByZXNldCh3aXRoT3V0QW5pbWF0aW9uPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgd2l0aE91dEFuaW1hdGlvbiAmJiAodGhpcy53aXRoQW5pbSA9IGZhbHNlKTtcclxuICAgIGlmICh0aGlzLmNhcm91c2VsQ3NzTm9kZSkge1xyXG4gICAgICB0aGlzLmNhcm91c2VsQ3NzTm9kZS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgIHRoaXMubW92ZVRvKDApO1xyXG4gICAgICB0aGlzLl9jYXJvdXNlbFBvaW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogdGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHNjb2xsIHRoZSBjYXJvdXNlbCB3aGVuIHBvaW50IGlzIGNsaWNrZWQgKi9cclxuICBwdWJsaWMgbW92ZVRvKHNsaWRlOiBudW1iZXIsIHdpdGhPdXRBbmltYXRpb24/OiBib29sZWFuKSB7XHJcbiAgICAvLyBzbGlkZSA9IHNsaWRlIC0gMTtcclxuICAgIHdpdGhPdXRBbmltYXRpb24gJiYgKHRoaXMud2l0aEFuaW0gPSBmYWxzZSk7XHJcbiAgICBpZiAodGhpcy5hY3RpdmVQb2ludCAhPT0gc2xpZGUgJiYgc2xpZGUgPCB0aGlzLnBvaW50SW5kZXgpIHtcclxuICAgICAgbGV0IHNsaWRlcmVtYWlucztcclxuICAgICAgY29uc3QgYnRucyA9IHRoaXMuY3VycmVudFNsaWRlIDwgc2xpZGUgPyAxIDogMDtcclxuXHJcbiAgICAgIHN3aXRjaCAoc2xpZGUpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xyXG4gICAgICAgICAgc2xpZGVyZW1haW5zID0gc2xpZGUgKiB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIHRoaXMucG9pbnRJbmRleCAtIDE6XHJcbiAgICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xyXG4gICAgICAgICAgc2xpZGVyZW1haW5zID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtIHRoaXMuaXRlbXM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcclxuICAgICAgICAgIHNsaWRlcmVtYWlucyA9IHNsaWRlICogdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsVHdvKGJ0bnMsIHNsaWRlcmVtYWlucywgdGhpcy5zcGVlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjbGVhckludGVydmFsKHRoaXMuY2Fyb3VzZWxJbnQpO1xyXG4gICAgdGhpcy5jYXJvdXNlbEludCAmJiB0aGlzLmNhcm91c2VsSW50LnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmNhcm91c2VsTG9hZC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5vbk1vdmUuY29tcGxldGUoKTtcclxuXHJcbiAgICAvKiogcmVtb3ZlIGxpc3RlbmVycyAqL1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHN0ciA9IGBsaXN0ZW5lciR7aX1gO1xyXG4gICAgICB0aGlzW3N0cl0gJiYgdGhpc1tzdHJdKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zd2l0Y2hEYXRhU291cmNlKGRhdGFTb3VyY2U6IGFueSk6IGFueSB7XHJcbiAgICB0aGlzLl9kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcclxuICAgIGlmICh0aGlzLl9kZWZEaXJlYykge1xyXG4gICAgICB0aGlzLl9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJOb2RlQ2hhbmdlcyhcclxuICAgIGRhdGE6IGFueVtdLFxyXG4gICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lclxyXG4gICkge1xyXG5cclxuICAgIGlmICghdGhpcy5hcnJheUNoYW5nZXMpIHJldHVybjtcclxuICAgIHRoaXMuYXJyYXlDaGFuZ2VzLmZvckVhY2hPcGVyYXRpb24oXHJcbiAgICAgIChcclxuICAgICAgICBpdGVtOiBJdGVyYWJsZUNoYW5nZVJlY29yZDxhbnk+LFxyXG4gICAgICAgIGFkanVzdGVkUHJldmlvdXNJbmRleDogbnVtYmVyLFxyXG4gICAgICAgIGN1cnJlbnRJbmRleDogbnVtYmVyXHJcbiAgICAgICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9nZXROb2RlRGVmKGRhdGFbY3VycmVudEluZGV4XSwgY3VycmVudEluZGV4KTtcclxuICAgICAgICBpZiAoaXRlbS5wcmV2aW91c0luZGV4ID09PSBudWxsKSB7XHJcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gbmV3IE5ndUNhcm91c2VsT3V0bGV0Q29udGV4dDxhbnk+KGRhdGFbY3VycmVudEluZGV4XSk7XHJcbiAgICAgICAgICBjb250ZXh0LmluZGV4ID0gY3VycmVudEluZGV4O1xyXG4gICAgICAgICAgdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcoXHJcbiAgICAgICAgICAgIG5vZGUudGVtcGxhdGUsXHJcbiAgICAgICAgICAgIGNvbnRleHQsXHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgdmlld0NvbnRhaW5lci5yZW1vdmUoYWRqdXN0ZWRQcmV2aW91c0luZGV4KTtcclxuICAgICAgICAgIHZpZXdDb250YWluZXIuY2xlYXIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgdmlldyA9IHZpZXdDb250YWluZXIuZ2V0KGFkanVzdGVkUHJldmlvdXNJbmRleCk7XHJcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLm1vdmUodmlldywgY3VycmVudEluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICB0aGlzLl91cGRhdGVJdGVtSW5kZXhDb250ZXh0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2Fyb3VzZWwpIHtcclxuICAgICAgdGhpcy5fc3RvcmVDYXJvdXNlbERhdGEoKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSBpbmRleC1yZWxhdGVkIGNvbnRleHQgZm9yIGVhY2ggcm93IHRvIHJlZmxlY3QgYW55IGNoYW5nZXMgaW4gdGhlIGluZGV4IG9mIHRoZSByb3dzLFxyXG4gICAqIGUuZy4gZmlyc3QvbGFzdC9ldmVuL29kZC5cclxuICAgKi9cclxuICBwcml2YXRlIF91cGRhdGVJdGVtSW5kZXhDb250ZXh0KCkge1xyXG4gICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lcjtcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCByZW5kZXJJbmRleCA9IDAsIGNvdW50ID0gdmlld0NvbnRhaW5lci5sZW5ndGg7XHJcbiAgICAgIHJlbmRlckluZGV4IDwgY291bnQ7XHJcbiAgICAgIHJlbmRlckluZGV4KytcclxuICAgICkge1xyXG4gICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQocmVuZGVySW5kZXgpIGFzIGFueTtcclxuICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgIGNvbnRleHQuY291bnQgPSBjb3VudDtcclxuXHJcbiAgICAgIGNvbnRleHQuZmlyc3QgPSByZW5kZXJJbmRleCA9PT0gMDtcclxuICAgICAgY29udGV4dC5sYXN0ID0gcmVuZGVySW5kZXggPT09IGNvdW50IC0gMTtcclxuICAgICAgY29udGV4dC5ldmVuID0gcmVuZGVySW5kZXggJSAyID09PSAwO1xyXG4gICAgICBjb250ZXh0Lm9kZCA9ICFjb250ZXh0LmV2ZW47XHJcbiAgICAgIGNvbnRleHQuaW5kZXggPSByZW5kZXJJbmRleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldE5vZGVEZWYoZGF0YTogYW55LCBpOiBudW1iZXIpOiBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxhbnk+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2RlZkRpcmVjKTtcclxuICAgIGlmICh0aGlzLl9kZWZEaXJlYy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2RlZkRpcmVjLmZpcnN0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vZGVEZWYgPVxyXG4gICAgICB0aGlzLl9kZWZEaXJlYy5maW5kKGRlZiA9PiBkZWYud2hlbiAmJiBkZWYud2hlbihpLCBkYXRhKSkgfHxcclxuICAgICAgdGhpcy5fZGVmYXVsdE5vZGVEZWY7XHJcblxyXG4gICAgcmV0dXJuIG5vZGVEZWY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpIHtcclxuICAgIGxldCBkYXRhU3RyZWFtOiBPYnNlcnZhYmxlPGFueVtdPiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBpZiAodGhpcy5fZGF0YVNvdXJjZSBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcclxuICAgICAgZGF0YVN0cmVhbSA9IHRoaXMuX2RhdGFTb3VyY2U7XHJcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5fZGF0YVNvdXJjZSkpIHtcclxuICAgICAgZGF0YVN0cmVhbSA9IG9mKHRoaXMuX2RhdGFTb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhU3RyZWFtKSB7XHJcbiAgICAgIHRoaXMuX2RhdGFTdWJzY3JpcHRpb24gPSBkYXRhU3RyZWFtXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2ludGVydmFsQ29udHJvbGxlciQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlck5vZGVDaGFuZ2VzKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5pc0xhc3QgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2lucHV0VmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMudHlwZSA9IHRoaXMuaW5wdXRzLmdyaWQuYWxsICE9PSAwID8gJ2ZpeGVkJyA6ICdyZXNwb25zaXZlJztcclxuICAgIHRoaXMubG9vcCA9IHRoaXMuaW5wdXRzLmxvb3AgfHwgZmFsc2U7XHJcbiAgICB0aGlzLmlucHV0cy5lYXNpbmcgPSB0aGlzLmlucHV0cy5lYXNpbmcgfHwgJ2N1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJztcclxuICAgIHRoaXMudG91Y2guYWN0aXZlID0gdGhpcy5pbnB1dHMudG91Y2ggfHwgZmFsc2U7XHJcbiAgICB0aGlzLlJUTCA9IHRoaXMuaW5wdXRzLlJUTCA/IHRydWUgOiBmYWxzZTtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSB0aGlzLmlucHV0cy5pbnRlcnZhbCB8fCBudWxsO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLmlucHV0cy52ZWxvY2l0eSA9PT0gJ251bWJlcidcclxuICAgICAgICA/IHRoaXMuaW5wdXRzLnZlbG9jaXR5XHJcbiAgICAgICAgOiB0aGlzLnZlbG9jaXR5O1xyXG5cclxuICAgIGlmICh0aGlzLmlucHV0cy52ZXJ0aWNhbCAmJiB0aGlzLmlucHV0cy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMudmVydGljYWwuZW5hYmxlZCA9IHRoaXMuaW5wdXRzLnZlcnRpY2FsLmVuYWJsZWQ7XHJcbiAgICAgIHRoaXMudmVydGljYWwuaGVpZ2h0ID0gdGhpcy5pbnB1dHMudmVydGljYWwuaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgdGhpcy5kaXJlY3Rpb25TeW0gPSB0aGlzLlJUTCA/ICcnIDogJy0nO1xyXG4gICAgdGhpcy5wb2ludCA9XHJcbiAgICAgIHRoaXMuaW5wdXRzLnBvaW50ICYmIHR5cGVvZiB0aGlzLmlucHV0cy5wb2ludC52aXNpYmxlICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gdGhpcy5pbnB1dHMucG9pbnQudmlzaWJsZVxyXG4gICAgICAgIDogdHJ1ZTtcclxuXHJcbiAgICB0aGlzLl9jYXJvdXNlbFNpemUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uUmVzaXppbmcoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMub25SZXNpemUpO1xyXG4gICAgdGhpcy5vblJlc2l6ZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoTmd1Q2Fyb3VzZWwuZGV2aWNlV2lkdGggIT09IGV2ZW50LnRhcmdldC5vdXRlcldpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0U3R5bGUodGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsIGBgKTtcclxuICAgICAgICB0aGlzLl9zdG9yZUNhcm91c2VsRGF0YSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVmcmVzaENhcm91c2VsV2lkdGgoKTtcclxuXHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaENhcm91c2VsV2lkdGgoKSB7XHJcbiAgICB0aGlzLl9jYXJvdXNlbFdpZHRoID0gdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNhcm91c2VsV2lkdGgoKSB7XHJcbiAgICBsb2cudGltaW5nKCdjYXJvdXNlbFdpZHRoIHN0YXJ0Jyk7XHJcbiAgICBpZiAoISF0aGlzLl9jYXJvdXNlbFdpZHRoKSB7XHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsV2lkdGggPSB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICB9XHJcbiAgICBsb2cudGltaW5nKCdjYXJvdXNlbFdpZHRoIGVuZCcpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2Nhcm91c2VsV2lkdGg7XHJcbiAgfVxyXG5cclxuICAvKiogR2V0IFRvdWNoIGlucHV0ICovXHJcbiAgcHJpdmF0ZSBfdG91Y2goKTogdm9pZCB7XHJcbiAgICBsb2cuZGVidWcoJ190b3VjaCcpO1xyXG4gICAgaWYgKHRoaXMuaW5wdXRzLnRvdWNoKSB7XHJcbiAgICAgIGNvbnN0IGhhbW1lcnRpbWUgPSBuZXcgSGFtbWVyKHRoaXMudG91Y2hDb250YWluZXIubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIGhhbW1lcnRpbWUuZ2V0KCdwYW4nKS5zZXQoe2RpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9IT1JJWk9OVEFMfSk7XHJcblxyXG4gICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5zdGFydCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gdGhpcy5jYXJvdXNlbFdpZHRoID0gdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIC8vIHRoaXMudG91Y2hUcmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybVt0aGlzLmRldmljZVR5cGVdO1xyXG4gICAgICAgIHRoaXMuZGV4VmFsID0gMDtcclxuICAgICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgJycpO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICAgIGhhbW1lcnRpbWUub24oJ3BhbnVwJywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbmxlZnQnLCBldik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFuZG93bicsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5yaWdodCcsIGV2KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5sZWZ0JywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbmxlZnQnLCBldik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFucmlnaHQnLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fdG91Y2hIYW5kbGluZygncGFucmlnaHQnLCBldik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLypoYW1tZXJ0aW1lLm9uKCdwYW5lbmQnLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhldi52ZWxvY2l0eSkgPj0gdGhpcy52ZWxvY2l0eSkge1xyXG4gICAgICAgICAgdGhpcy50b3VjaC52ZWxvY2l0eSA9IGV2LnZlbG9jaXR5O1xyXG4gICAgICAgICAgbGV0IGRpcmVjID0gMDtcclxuICAgICAgICAgIGlmICghdGhpcy5SVEwpIHtcclxuICAgICAgICAgICAgZGlyZWMgPSB0aGlzLnRvdWNoLnN3aXBlID09PSAncGFucmlnaHQnID8gMCA6IDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXJlYyA9IHRoaXMudG91Y2guc3dpcGUgPT09ICdwYW5yaWdodCcgPyAxIDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKGRpcmVjKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5kZXhWYWwgPSAwO1xyXG4gICAgICAgICAgdGhpcy5fc2V0U3R5bGUoXHJcbiAgICAgICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICAgJ3RyYW5zaXRpb24nLFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtIDMyNG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIC8vIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pOyovXHJcbiAgICAgIGhhbW1lcnRpbWUub24oJ2hhbW1lci5pbnB1dCcsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIC8vIGFsbG93IG5lc3RlZCB0b3VjaCBldmVudHMgdG8gbm8gcHJvcGFnYXRlLCB0aGlzIG1heSBoYXZlIG90aGVyIHNpZGUgYWZmZWN0cyBidXQgd29ya3MgZm9yIG5vdy5cclxuICAgICAgICAvLyBUT0RPOiBJdCBpcyBwcm9iYWJseSBiZXR0ZXIgdG8gY2hlY2sgdGhlIHNvdXJjZSBlbGVtZW50IG9mIHRoZSBldmVudCBhbmQgb25seSBhcHBseSB0aGUgaGFuZGxlIHRvIHRoZSBjb3JyZWN0IGNhcm91c2VsXHJcbiAgICAgICAgZXYuc3JjRXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGhhbmRsZSB0b3VjaCBpbnB1dCAqL1xyXG4gIHByaXZhdGUgX3RvdWNoSGFuZGxpbmcoZTogc3RyaW5nLCBldjogYW55KTogdm9pZCB7XHJcbiAgICBsb2cuZGVidWcoJ190b3VjaEhhbmRsaW5nJywgdGhpcy5fY2Fyb3VzZWxXaWR0aCwgdGhpcy5jYXJvdXNlbFdpZHRoKTtcclxuICAgIC8vIHZlcnRpY2FsIHRvdWNoIGV2ZW50cyBzZWVtIHRvIGNhdXNlIHRvIHBhbnN0YXJ0IGV2ZW50IHdpdGggYW4gb2RkIGRlbHRhXHJcbiAgICAvLyBhbmQgYSBjZW50ZXIgb2Yge3g6MCx5OjB9IHNvIHRoaXMgd2lsbCBpZ25vcmUgdGhlbVxyXG5cclxuICAgIGlmIChldi5jZW50ZXIueCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZXYgPSBNYXRoLmFicyh0aGlzLnZlcnRpY2FsLmVuYWJsZWQgPyBldi5kZWx0YVkgOiBldi5kZWx0YVgpO1xyXG4gICAgbGV0IHZhbHQgPSBldiAtIHRoaXMuZGV4VmFsO1xyXG4gICAgdmFsdCA9XHJcbiAgICAgIHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnXHJcbiAgICAgICAgPyAoTWF0aC5hYnMoZXYgLSB0aGlzLmRleFZhbCkgL1xyXG4gICAgICAgICh0aGlzLnZlcnRpY2FsLmVuYWJsZWRcclxuICAgICAgICAgID8gdGhpcy52ZXJ0aWNhbC5oZWlnaHRcclxuICAgICAgICAgIDogdGhpcy5fY2Fyb3VzZWxXaWR0aCkpICpcclxuICAgICAgICAxMDBcclxuICAgICAgICA6IHZhbHQ7XHJcbiAgICBsb2cuZGVidWcodmFsdCk7XHJcblxyXG4gICAgdGhpcy5kZXhWYWwgPSBldjtcclxuICAgIHRoaXMudG91Y2guc3dpcGUgPSBlO1xyXG4gICAgdGhpcy5fc2V0VG91Y2hUcmFuc2Zyb20oZSwgdmFsdCk7XHJcbiAgICB0aGlzLl9zZXRUcmFuc2Zvcm1Gcm9tVG91Y2goKTtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRUb3VjaFRyYW5zZnJvbShlOiBzdHJpbmcsIHZhbHQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy5SVEwgPyAncGFucmlnaHQnIDogJ3BhbmxlZnQnO1xyXG4gICAgdGhpcy50b3VjaFRyYW5zZm9ybSA9XHJcbiAgICAgIGUgPT09IGNvbmRpdGlvbiA/IHZhbHQgKyB0aGlzLnRvdWNoVHJhbnNmb3JtIDogdGhpcy50b3VjaFRyYW5zZm9ybSAtIHZhbHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRUcmFuc2Zvcm1Gcm9tVG91Y2goKSB7XHJcblxyXG4gICAgaWYgKHRoaXMudG91Y2hUcmFuc2Zvcm0gPCAwKSB7XHJcbiAgICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPSAwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnID8gJyUnIDogJ3B4JztcclxuXHJcbiAgICBsZXQgIG1heFRyYW5zbGF0ZSA9ICh0aGlzLml0ZW1XaWR0aCAqIHRoaXMuX2RhdGFTb3VyY2UubGVuZ3RoKSAtIHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xyXG4gICAgICBtYXhUcmFuc2xhdGUgPSAobWF4VHJhbnNsYXRlIC8gdGhpcy5jYXJvdXNlbE1haW4xLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgpICogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtYXhUcmFuc2xhdGUgPD0gdGhpcy50b3VjaFRyYW5zZm9ybSkge1xyXG4gICAgICB0aGlzLnRvdWNoVHJhbnNmb3JtID0gbWF4VHJhbnNsYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub25Nb3ZlLmVtaXQodGhpcyk7XHJcbiAgICB0aGlzLl9zZXRTdHlsZShcclxuICAgICAgdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgdGhpcy52ZXJ0aWNhbC5lbmFibGVkXHJcbiAgICAgICAgPyBgdHJhbnNsYXRlM2QoMCwgJHt0aGlzLmRpcmVjdGlvblN5bX0ke3RoaXMudG91Y2hUcmFuc2Zvcm19JHt0eXBlfSwgMClgXHJcbiAgICAgICAgOiBgdHJhbnNsYXRlM2QoJHt0aGlzLmRpcmVjdGlvblN5bX0ke3RoaXMudG91Y2hUcmFuc2Zvcm19JHt0eXBlfSwgMCwgMClgXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqIHRoaXMgZm4gdXNlZCB0byBkaXNhYmxlIHRoZSBpbnRlcnZhbCB3aGVuIGl0IGlzIG5vdCBvbiB0aGUgdmlld3BvcnQgKi9cclxuICBwcml2YXRlIF9vbldpbmRvd1Njcm9sbGluZygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRvcCA9IHRoaXMuY2Fyb3VzZWwub2Zmc2V0VG9wO1xyXG4gICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgY29uc3QgaGVpZ2h0dCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNvbnN0IGNhcm91c2VsSGVpZ2h0ID0gdGhpcy5jYXJvdXNlbC5vZmZzZXRIZWlnaHQ7XHJcbiAgICBjb25zdCBpc0Nhcm91c2VsT25TY3JlZW4gPVxyXG4gICAgICB0b3AgPD0gc2Nyb2xsWSArIGhlaWdodHQgLSBjYXJvdXNlbEhlaWdodCAvIDQgJiZcclxuICAgICAgdG9wICsgY2Fyb3VzZWxIZWlnaHQgLyAyID49IHNjcm9sbFk7XHJcblxyXG4gICAgaWYgKGlzQ2Fyb3VzZWxPblNjcmVlbikge1xyXG4gICAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkLm5leHQoMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkLm5leHQoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogc3RvcmUgZGF0YSBiYXNlZCBvbiB3aWR0aCBvZiB0aGUgc2NyZWVuIGZvciB0aGUgY2Fyb3VzZWwgKi9cclxuICBwcml2YXRlIF9zdG9yZUNhcm91c2VsRGF0YSgpOiB2b2lkIHtcclxuICAgIGxvZy50aW1pbmcoJ3N0YXJ0Jyk7XHJcblxyXG4gICAgLyp0aGlzLmRldmljZVdpZHRoID0gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKVxyXG4gICAgICA/IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICAgIDogMTIwMDtcclxuKi9cclxuICAgIGxvZy50aW1pbmcoJ201NTUnKTtcclxuICAgICAvLyB0aGlzLmNhcm91c2VsV2lkdGggPSB0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgIGxvZy50aW1pbmcoJ201NTcnKTtcclxuXHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScpIHtcclxuICAgICAgdGhpcy5kZXZpY2VUeXBlID1cclxuICAgICAgICBOZ3VDYXJvdXNlbC5kZXZpY2VXaWR0aCA+PSAxMjAwXHJcbiAgICAgICAgICA/ICdsZydcclxuICAgICAgICAgIDogTmd1Q2Fyb3VzZWwuZGV2aWNlV2lkdGggPj0gOTkyXHJcbiAgICAgICAgICA/ICdtZCdcclxuICAgICAgICAgIDogTmd1Q2Fyb3VzZWwuZGV2aWNlV2lkdGggPj0gNzY4XHJcbiAgICAgICAgICAgID8gJ3NtJ1xyXG4gICAgICAgICAgICA6ICd4cyc7XHJcblxyXG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5pbnB1dHMuZ3JpZFt0aGlzLmRldmljZVR5cGVdO1xyXG4gICAgICB0aGlzLml0ZW1XaWR0aCA9IHRoaXMuY2Fyb3VzZWxXaWR0aCAvIHRoaXMuaXRlbXM7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXRlbVdpZHRoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBNYXRoLmNlaWwodGhpcy5jYXJvdXNlbFdpZHRoIC8gdGhpcy5pbnB1dHMuZ3JpZC5hbGwpO1xyXG4gICAgICB0aGlzLml0ZW1XaWR0aCA9IHRoaXMuaW5wdXRzLmdyaWQuYWxsO1xyXG4gICAgICB0aGlzLmRldmljZVR5cGUgPSAnYWxsJztcclxuICAgIH1cclxuICAgIGxvZy50aW1pbmcoJ201NzUnKTtcclxuICAgIHRoaXMuc2xpZGVJdGVtcyA9ICsodGhpcy5pbnB1dHMuc2xpZGUgPCB0aGlzLml0ZW1zXHJcbiAgICAgID8gdGhpcy5pbnB1dHMuc2xpZGVcclxuICAgICAgOiB0aGlzLml0ZW1zKTtcclxuICAgIHRoaXMubG9hZCA9XHJcbiAgICAgIHRoaXMuaW5wdXRzLmxvYWQgPj0gdGhpcy5zbGlkZUl0ZW1zID8gdGhpcy5pbnB1dHMubG9hZCA6IHRoaXMuc2xpZGVJdGVtcztcclxuICAgIHRoaXMuc3BlZWQgPVxyXG4gICAgICB0aGlzLmlucHV0cy5zcGVlZCAmJiB0aGlzLmlucHV0cy5zcGVlZCA+IC0xID8gdGhpcy5pbnB1dHMuc3BlZWQgOiA0MDA7XHJcbiAgICBsb2cudGltaW5nKCdlbmQnKTtcclxuICAgIC8vIHRoaXMuX2Nhcm91c2VsUG9pbnQoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKExvZ2dlci5zdW1UaW1pbmcpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEluaXQgY2Fyb3VzZWwgcG9pbnQgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFBvaW50KCk6IHZvaWQge1xyXG4gICAgLy8gZGVidWdnZXI7XHJcbiAgICAvLyBpZiAodGhpcy51c2VyRGF0YS5wb2ludC52aXNpYmxlID09PSB0cnVlKSB7XHJcbiAgICBjb25zdCBOb3MgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gKHRoaXMuaXRlbXMgLSB0aGlzLnNsaWRlSXRlbXMpO1xyXG4gICAgdGhpcy5wb2ludEluZGV4ID0gTWF0aC5jZWlsKE5vcyAvIHRoaXMuc2xpZGVJdGVtcyk7XHJcbiAgICBjb25zdCBwb2ludGVycyA9IFtdO1xyXG5cclxuICAgIGlmICh0aGlzLnBvaW50SW5kZXggPiAxIHx8ICF0aGlzLmlucHV0cy5wb2ludC5oaWRlT25TaW5nbGVTbGlkZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnRJbmRleDsgaSsrKSB7XHJcbiAgICAgICAgcG9pbnRlcnMucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5wb2ludE51bWJlcnMgPSBwb2ludGVycztcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9pbnROdW1iZXJzKTtcclxuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk7XHJcbiAgICBpZiAodGhpcy5wb2ludEluZGV4IDw9IDEpIHtcclxuICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiAhdGhpcy5sb29wKSB7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICAvKiogY2hhbmdlIHRoZSBhY3RpdmUgcG9pbnQgaW4gY2Fyb3VzZWwgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFBvaW50QWN0aXZlcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGkgPSBNYXRoLmNlaWwodGhpcy5jdXJyZW50U2xpZGUgLyB0aGlzLnNsaWRlSXRlbXMpO1xyXG4gICAgdGhpcy5hY3RpdmVQb2ludCA9IGk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKiogc2V0IHRoZSBzdHlsZSBvZiB0aGUgY2Fyb3VzZWwgYmFzZWQgdGhlIGlucHV0cyBkYXRhICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxTaXplKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b2tlbiA9IHRoaXMuX2dlbmVyYXRlSUQoKTtcclxuICAgIGxldCBkaXNtID0gJyc7XHJcbiAgICB0aGlzLnN0eWxlaWQgPSBgLiR7XHJcbiAgICAgIHRoaXMudG9rZW5cclxuICAgICAgfSA+IC5jYXJvdXNlbC13cmFwcGVyID4gLm5ndWNhcm91c2VsID4gLm5ndS10b3VjaC1jb250YWluZXIgPiAubmd1Y2Fyb3VzZWwtaXRlbXNgO1xyXG5cclxuICAgIGlmICh0aGlzLmlucHV0cy5jdXN0b20gPT09ICdiYW5uZXInKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuY2Fyb3VzZWwsICdiYW5uZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnB1dHMuYW5pbWF0aW9uID09PSAnbGF6eScpIHtcclxuICAgICAgZGlzbSArPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge3RyYW5zaXRpb246IHRyYW5zZm9ybSAuNnMgZWFzZTt9YDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXRlbVN0eWxlID0gJyc7XHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF94cyA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcclxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQueHN9cHh9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX3NtID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxyXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC5zbX1weH1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfbWQgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXHJcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLm1kfXB4fWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9sZyA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcclxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQubGd9cHh9YDtcclxuXHJcbiAgICAgIGl0ZW1TdHlsZSA9IGBAbWVkaWEgKG1heC13aWR0aDo3NjdweCl7JHtpdGVtV2lkdGhfeHN9fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXske2l0ZW1XaWR0aF9zbX19XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6OTkycHgpeyR7aXRlbVdpZHRoX21kfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpeyR7aXRlbVdpZHRoX2xnfX1gO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfeHMgPVxyXG4gICAgICAgIHRoaXMuaW5wdXRzLnR5cGUgPT09ICdtb2JpbGUnXHJcbiAgICAgICAgICA/IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAkezk1IC9cclxuICAgICAgICAgICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7IHdpZHRoOiAkezk1IC8gK3RoaXMuaW5wdXRzLmdyaWQueHN9JTt9YFxyXG4gICAgICAgICAgOiBgJHt0aGlzLnN0eWxlaWR9IC5pdGVtIHtmbGV4OiAwIDAgJHsxMDAgL1xyXG4gICAgICAgICAgK3RoaXMuaW5wdXRzLmdyaWQueHN9JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQueHN9JTt9YDtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9zbSA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cclxuICAgICAgK3RoaXMuaW5wdXRzLmdyaWQuc219JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQuc219JX1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfbWQgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXHJcbiAgICAgICt0aGlzLmlucHV0cy5ncmlkLm1kfSU7IHdpZHRoOiAkezEwMCAvICt0aGlzLmlucHV0cy5ncmlkLm1kfSV9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX2xnID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtmbGV4OiAwIDAgJHsxMDAgL1xyXG4gICAgICArdGhpcy5pbnB1dHMuZ3JpZC5sZ30lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC5sZ30lfWA7XHJcblxyXG4gICAgICBpdGVtU3R5bGUgPSBgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpeyR7aXRlbVdpZHRoX3hzfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7JHtpdGVtV2lkdGhfc219fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXske2l0ZW1XaWR0aF9tZH19XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXske2l0ZW1XaWR0aF9sZ319YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW1TdHlsZSA9IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAke1xyXG4gICAgICAgIHRoaXMuaW5wdXRzLmdyaWQuYWxsXHJcbiAgICAgICAgfXB4OyB3aWR0aDogJHt0aGlzLmlucHV0cy5ncmlkLmFsbH1weDt9YDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgdGhpcy50b2tlbik7XHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxyXG4gICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAnbmd1dmVydGljYWwnXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgIGAke3RoaXMudmVydGljYWwuaGVpZ2h0fXB4YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG4gICAgdGhpcy5SVEwgJiZcclxuICAgICF0aGlzLnZlcnRpY2FsLmVuYWJsZWQgJiZcclxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuY2Fyb3VzZWwsICduZ3VydGwnKTtcclxuICAgIHRoaXMuX2NyZWF0ZVN0eWxlRWxlbShgJHtkaXNtfSAke2l0ZW1TdHlsZX1gKTtcclxuICAgIHRoaXMuX3N0b3JlQ2Fyb3VzZWxEYXRhKCk7XHJcbiAgfVxyXG5cclxuICAvKiogbG9naWMgdG8gc2Nyb2xsIHRoZSBjYXJvdXNlbCBzdGVwIDEgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFNjcm9sbE9uZShCdG46IG51bWJlcik6IHZvaWQge1xyXG4gICAgbGV0IGl0ZW1TcGVlZCA9IHRoaXMuc3BlZWQ7XHJcbiAgICBsZXQgdHJhbnNsYXRlWHZhbCxcclxuICAgICAgY3VycmVudFNsaWRlID0gMDtcclxuICAgIGNvbnN0IHRvdWNoTW92ZSA9IE1hdGguY2VpbCh0aGlzLmRleFZhbCAvIHRoaXMuaXRlbVdpZHRoKTtcclxuICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICcnKTtcclxuXHJcbiAgICBpZiAodGhpcy5wb2ludEluZGV4ID09PSAxKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAoQnRuID09PSAwICYmICgoIXRoaXMubG9vcCAmJiAhdGhpcy5pc0ZpcnN0KSB8fCB0aGlzLmxvb3ApKSB7XHJcbiAgICAgIGNvbnN0IHNsaWRlID0gdGhpcy5zbGlkZUl0ZW1zICogdGhpcy5wb2ludEluZGV4O1xyXG5cclxuICAgICAgY29uc3QgY3VycmVudFNsaWRlRCA9IHRoaXMuY3VycmVudFNsaWRlIC0gdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICBjb25zdCBNb3ZlU2xpZGUgPSBjdXJyZW50U2xpZGVEICsgdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUgPT09IDApIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5pdGVtcztcclxuICAgICAgICBpdGVtU3BlZWQgPSA0MDA7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlSXRlbXMgPj0gTW92ZVNsaWRlKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gdHJhbnNsYXRlWHZhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICAgIGlmICh0b3VjaE1vdmUgPiB0aGlzLnNsaWRlSXRlbXMpIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlIC0gdG91Y2hNb3ZlO1xyXG4gICAgICAgICAgaXRlbVNwZWVkID0gMjAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZSAtIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxUd28oQnRuLCBjdXJyZW50U2xpZGUsIGl0ZW1TcGVlZCk7XHJcbiAgICB9IGVsc2UgaWYgKEJ0biA9PT0gMSAmJiAoKCF0aGlzLmxvb3AgJiYgIXRoaXMuaXNMYXN0KSB8fCB0aGlzLmxvb3ApKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIDw9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLml0ZW1zICsgdGhpcy5zbGlkZUl0ZW1zICYmXHJcbiAgICAgICAgIXRoaXMuaXNMYXN0XHJcbiAgICAgICkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLml0ZW1zO1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0xhc3QpIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSB0cmFuc2xhdGVYdmFsID0gMDtcclxuICAgICAgICBpdGVtU3BlZWQgPSA0MDA7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICAgIGlmICh0b3VjaE1vdmUgPiB0aGlzLnNsaWRlSXRlbXMpIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5zbGlkZUl0ZW1zICsgKHRvdWNoTW92ZSAtIHRoaXMuc2xpZGVJdGVtcyk7XHJcbiAgICAgICAgICBpdGVtU3BlZWQgPSAyMDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbFR3byhCdG4sIGN1cnJlbnRTbGlkZSwgaXRlbVNwZWVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBsb2dpYyB0byBzY3JvbGwgdGhlIGNhcm91c2VsIHN0ZXAgMiAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsU2Nyb2xsVHdvKFxyXG4gICAgQnRuOiBudW1iZXIsXHJcbiAgICBjdXJyZW50U2xpZGU6IG51bWJlcixcclxuICAgIGl0ZW1TcGVlZDogbnVtYmVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cclxuXHJcbiAgICBpZiAodGhpcy5kZXhWYWwgIT09IDApIHtcclxuICAgICAgY29uc3QgdmFsID0gTWF0aC5hYnModGhpcy50b3VjaC52ZWxvY2l0eSk7XHJcbiAgICAgIGxldCBzb210ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAodGhpcy5kZXhWYWwgLyB2YWwgLyB0aGlzLmRleFZhbCkgKiAoTmd1Q2Fyb3VzZWwuZGV2aWNlV2lkdGggLSB0aGlzLmRleFZhbClcclxuICAgICAgKTtcclxuICAgICAgc29tdCA9IHNvbXQgPiBpdGVtU3BlZWQgPyBpdGVtU3BlZWQgOiBzb210O1xyXG4gICAgICBpdGVtU3BlZWQgPSBzb210IDwgMjAwID8gMjAwIDogc29tdDtcclxuICAgICAgdGhpcy5kZXhWYWwgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMud2l0aEFuaW0pIHtcclxuICAgICAgdGhpcy5fc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICd0cmFuc2l0aW9uJyxcclxuICAgICAgICBgdHJhbnNmb3JtICR7aXRlbVNwZWVkfW1zICR7dGhpcy5pbnB1dHMuZWFzaW5nfWBcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5pbnB1dHMuYW5pbWF0aW9uICYmXHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsQW5pbWF0b3IoXHJcbiAgICAgICAgQnRuLFxyXG4gICAgICAgIGN1cnJlbnRTbGlkZSArIDEsXHJcbiAgICAgICAgY3VycmVudFNsaWRlICsgdGhpcy5pdGVtcyxcclxuICAgICAgICBpdGVtU3BlZWQsXHJcbiAgICAgICAgTWF0aC5hYnModGhpcy5jdXJyZW50U2xpZGUgLSBjdXJyZW50U2xpZGUpXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgYGApO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhU291cmNlKTtcclxuICAgIHRoaXMuaXRlbUxlbmd0aCA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGg7XHJcbiAgICB0aGlzLl90cmFuc2Zvcm1TdHlsZShjdXJyZW50U2xpZGUpO1xyXG4gICAgdGhpcy5jdXJyZW50U2xpZGUgPSBjdXJyZW50U2xpZGU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5vbk1vdmUuZW1pdCh0aGlzKTtcclxuICAgIH0sIDQwMCk7XHJcblxyXG4gICAgdGhpcy5fY2Fyb3VzZWxQb2ludEFjdGl2ZXIoKTtcclxuICAgIHRoaXMuX2Nhcm91c2VsTG9hZFRyaWdnZXIoKTtcclxuICAgIHRoaXMud2l0aEFuaW0gPSB0cnVlO1xyXG4gICAgLy8gaWYgKGN1cnJlbnRTbGlkZSA9PT0gMTIpIHtcclxuICAgIC8vICAgdGhpcy5fc3dpdGNoRGF0YVNvdXJjZSh0aGlzLmRhdGFTb3VyY2UpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgLyoqIGJvb2xlYW4gZnVuY3Rpb24gZm9yIG1ha2luZyBpc0ZpcnN0IGFuZCBpc0xhc3QgKi9cclxuICBwcml2YXRlIF9idG5Cb29sZWFuKGZpcnN0OiBudW1iZXIsIGxhc3Q6IG51bWJlcikge1xyXG4gICAgdGhpcy5pc0ZpcnN0ID0gISFmaXJzdDtcclxuICAgIHRoaXMuaXNMYXN0ID0gISFsYXN0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtU3RyaW5nKGdyaWQ6IHN0cmluZywgc2xpZGU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgY29sbGVjdCA9ICcnO1xyXG4gICAgY29sbGVjdCArPSBgJHt0aGlzLnN0eWxlaWR9IHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChgO1xyXG5cclxuICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1bZ3JpZF0gPVxyXG4gICAgICAgICh0aGlzLnZlcnRpY2FsLmhlaWdodCAvIHRoaXMuaW5wdXRzLmdyaWRbZ3JpZF0pICogc2xpZGU7XHJcbiAgICAgIGNvbGxlY3QgKz0gYDAsIC0ke3RoaXMudHJhbnNmb3JtW2dyaWRdfXB4LCAwYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtW2dyaWRdID0gKDEwMCAvIHRoaXMuaW5wdXRzLmdyaWRbZ3JpZF0pICogc2xpZGU7XHJcbiAgICAgIGNvbGxlY3QgKz0gYCR7dGhpcy5kaXJlY3Rpb25TeW19JHt0aGlzLnRyYW5zZm9ybVtncmlkXX0lLCAwLCAwYDtcclxuICAgIH1cclxuICAgIGNvbGxlY3QgKz0gYCk7IH1gO1xyXG4gICAgcmV0dXJuIGNvbGxlY3Q7XHJcbiAgfVxyXG5cclxuICAvKiogc2V0IHRoZSB0cmFuc2Zvcm0gc3R5bGUgdG8gc2Nyb2xsIHRoZSBjYXJvdXNlbCAgKi9cclxuICBwcml2YXRlIF90cmFuc2Zvcm1TdHlsZShzbGlkZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBsZXQgc2xpZGVDc3MgPSAnJztcclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xyXG4gICAgICBzbGlkZUNzcyA9IGBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHske3RoaXMuX3RyYW5zZm9ybVN0cmluZyhcclxuICAgICAgICAneHMnLFxyXG4gICAgICAgIHNsaWRlXHJcbiAgICAgICl9fVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHske3RoaXMuX3RyYW5zZm9ybVN0cmluZygnc20nLCBzbGlkZSl9IH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoJ21kJywgc2xpZGUpfSB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHske3RoaXMuX3RyYW5zZm9ybVN0cmluZygnbGcnLCBzbGlkZSl9IH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0uYWxsID0gdGhpcy5pbnB1dHMuZ3JpZC5hbGwgKiBzbGlkZTtcclxuICAgICAgdGhpcy50b3VjaFRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtLmFsbDtcclxuICAgICAgc2xpZGVDc3MgPSBgJHt0aGlzLnN0eWxlaWR9IHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgke1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uU3ltXHJcbiAgICAgICAgfSR7dGhpcy50cmFuc2Zvcm0uYWxsfXB4LCAwLCAwKTtgO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYXJvdXNlbENzc05vZGUuaW5uZXJIVE1MID0gc2xpZGVDc3M7XHJcbiAgfVxyXG5cclxuICAvKiogdGhpcyB3aWxsIHRyaWdnZXIgdGhlIGNhcm91c2VsIHRvIGxvYWQgdGhlIGl0ZW1zICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxMb2FkVHJpZ2dlcigpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5pbnB1dHMubG9hZCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtIHRoaXMubG9hZCA8PSB0aGlzLmN1cnJlbnRTbGlkZSArIHRoaXMuaXRlbXMgJiZcclxuICAgICAgdGhpcy5jYXJvdXNlbExvYWQuZW1pdCh0aGlzLmN1cnJlbnRTbGlkZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogZ2VuZXJhdGUgQ2xhc3MgZm9yIGVhY2ggY2Fyb3VzZWwgdG8gc2V0IHNwZWNpZmljIHN0eWxlICovXHJcbiAgcHJpdmF0ZSBfZ2VuZXJhdGVJRCgpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRleHQgPSAnJztcclxuICAgIGNvbnN0IHBvc3NpYmxlID1cclxuICAgICAgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICB0ZXh0ICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBgbmd1Y2Fyb3VzZWwke3RleHR9YDtcclxuICB9XHJcblxyXG4gIC8qKiBoYW5kbGUgdGhlIGF1dG8gc2xpZGUgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbEludGVydmFsKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jYXJvdXNlbE1haW4xLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5pbnRlcnZhbCAmJiB0aGlzLmxvb3ApIHtcclxuICAgICAgdGhpcy5saXN0ZW5lcjQgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMub25TY3JvbGxpbmcpO1xyXG4gICAgICAgIHRoaXMub25TY3JvbGxpbmcgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX29uV2luZG93U2Nyb2xsaW5nKCk7XHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBwbGF5JCA9IGZyb21FdmVudChjb250YWluZXIsICdtb3VzZWxlYXZlJykucGlwZShtYXBUbygxKSk7XHJcbiAgICAgIGNvbnN0IHBhdXNlJCA9IGZyb21FdmVudChjb250YWluZXIsICdtb3VzZWVudGVyJykucGlwZShtYXBUbygwKSk7XHJcblxyXG4gICAgICBjb25zdCB0b3VjaFBsYXkkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ3RvdWNoc3RhcnQnKS5waXBlKG1hcFRvKDEpKTtcclxuICAgICAgY29uc3QgdG91Y2hQYXVzZSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAndG91Y2hlbmQnKS5waXBlKG1hcFRvKDApKTtcclxuXHJcbiAgICAgIGNvbnN0IGludGVydmFsJCA9IGludGVydmFsKHRoaXMuaW5wdXRzLmludGVydmFsLnRpbWluZykucGlwZShtYXBUbygxKSk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmNhcm91c2VsSW50ID0gbWVyZ2UoXHJcbiAgICAgICAgICBwbGF5JCxcclxuICAgICAgICAgIHRvdWNoUGxheSQsXHJcbiAgICAgICAgICBwYXVzZSQsXHJcbiAgICAgICAgICB0b3VjaFBhdXNlJCxcclxuICAgICAgICAgIHRoaXMuX2ludGVydmFsQ29udHJvbGxlciRcclxuICAgICAgICApXHJcbiAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgc3RhcnRXaXRoKDEpLFxyXG4gICAgICAgICAgICBzd2l0Y2hNYXAodmFsID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmlzSG92ZXJlZCA9ICF2YWw7XHJcbiAgICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbCA/IGludGVydmFsJCA6IGVtcHR5KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKDEpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sIHRoaXMuaW50ZXJ2YWwuaW5pdGlhbERlbGF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZUl0ZW1JbmRleENvbnRleHRBbmkoKSB7XHJcbiAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyO1xyXG4gICAgZm9yIChcclxuICAgICAgbGV0IHJlbmRlckluZGV4ID0gMCwgY291bnQgPSB2aWV3Q29udGFpbmVyLmxlbmd0aDtcclxuICAgICAgcmVuZGVySW5kZXggPCBjb3VudDtcclxuICAgICAgcmVuZGVySW5kZXgrK1xyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChyZW5kZXJJbmRleCkgYXMgYW55O1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcclxuICAgICAgY29udGV4dC5jb3VudCA9IGNvdW50O1xyXG4gICAgICBjb250ZXh0LmZpcnN0ID0gcmVuZGVySW5kZXggPT09IDA7XHJcbiAgICAgIGNvbnRleHQubGFzdCA9IHJlbmRlckluZGV4ID09PSBjb3VudCAtIDE7XHJcbiAgICAgIGNvbnRleHQuZXZlbiA9IHJlbmRlckluZGV4ICUgMiA9PT0gMDtcclxuICAgICAgY29udGV4dC5vZGQgPSAhY29udGV4dC5ldmVuO1xyXG4gICAgICBjb250ZXh0LmluZGV4ID0gcmVuZGVySW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogYW5pbWF0ZSB0aGUgY2Fyb3VzZWwgaXRlbXMgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbEFuaW1hdG9yKFxyXG4gICAgZGlyZWN0aW9uOiBudW1iZXIsXHJcbiAgICBzdGFydDogbnVtYmVyLFxyXG4gICAgZW5kOiBudW1iZXIsXHJcbiAgICBzcGVlZDogbnVtYmVyLFxyXG4gICAgbGVuZ3RoOiBudW1iZXIsXHJcbiAgICB2aWV3Q29udGFpbmVyID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICBsZXQgdmFsID0gbGVuZ3RoIDwgNSA/IGxlbmd0aCA6IDU7XHJcbiAgICB2YWwgPSB2YWwgPT09IDEgPyAzIDogdmFsO1xyXG4gICAgY29uc3QgY29sbGVjdEluZGV4ID0gW107XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gc3RhcnQgLSAxOyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICBjb2xsZWN0SW5kZXgucHVzaChpKTtcclxuICAgICAgICB2YWwgPSB2YWwgKiAyO1xyXG4gICAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChpKSBhcyBhbnk7XHJcbiAgICAgICAgaWYgKHZpZXdSZWYpIHtcclxuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xyXG4gICAgICAgICAgY29udGV4dC5hbmltYXRlID0ge3ZhbHVlOiB0cnVlLCBwYXJhbXM6IHtkaXN0YW5jZTogdmFsfX07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gZW5kIC0gMTsgaSA+PSBzdGFydCAtIDE7IGktLSkge1xyXG4gICAgICAgIGNvbGxlY3RJbmRleC5wdXNoKGkpO1xyXG4gICAgICAgIHZhbCA9IHZhbCAqIDI7XHJcbiAgICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KGkpIGFzIGFueTtcclxuICAgICAgICBpZiAodmlld1JlZikge1xyXG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgICAgICBjb250ZXh0LmFuaW1hdGUgPSB7dmFsdWU6IHRydWUsIHBhcmFtczoge2Rpc3RhbmNlOiAtdmFsfX07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9yZW1vdmVBbmltYXRpb25zKGNvbGxlY3RJbmRleCk7XHJcbiAgICB9LCBzcGVlZCAqIDAuNyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZW1vdmVBbmltYXRpb25zKGluZGV4czogbnVtYmVyW10pIHtcclxuICAgIGNvbnN0IHZpZXdDb250YWluZXIgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXI7XHJcbiAgICBpbmRleHMuZm9yRWFjaChpID0+IHtcclxuICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KGkpIGFzIGFueTtcclxuICAgICAgaWYgKHZpZXdSZWYpIHtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcclxuICAgICAgICBjb250ZXh0LmFuaW1hdGUgPSB7dmFsdWU6IGZhbHNlLCBwYXJhbXM6IHtkaXN0YW5jZTogMH19O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNob3J0IGZvcm0gZm9yIHNldEVsZW1lbnRTdHlsZSAqL1xyXG4gIHByaXZhdGUgX3NldFN0eWxlKGVsOiBhbnksIHByb3A6IGFueSwgdmFsOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLCBwcm9wLCB2YWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZvciBnZW5lcmF0aW5nIHN0eWxlIHRhZyAqL1xyXG4gIHByaXZhdGUgX2NyZWF0ZVN0eWxlRWxlbShkYXRhcz86IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3R5bGVJdGVtID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgIGlmIChkYXRhcykge1xyXG4gICAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVUZXh0KGRhdGFzKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVJdGVtLCBzdHlsZVRleHQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jYXJvdXNlbCwgc3R5bGVJdGVtKTtcclxuICAgIHJldHVybiBzdHlsZUl0ZW07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ25ndS1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJ25ndS1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbmd1LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1SXRlbUNvbXBvbmVudCB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pdGVtJykgY2xhc3NlcyA9IHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnbmd1LXRpbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnbmd1LXRpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyduZ3UtdGlsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VUaWxlQ29tcG9uZW50IHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLml0ZW0nKSBjbGFzc2VzID0gdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxPdXRsZXQsXHJcbiAgTmd1Q2Fyb3VzZWxQb2ludERpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsIE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZVxyXG59IGZyb20gJy4vbmd1LWNhcm91c2VsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE5ndUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL25ndS1pdGVtL25ndS1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5ndUNhcm91c2VsIH0gZnJvbSAnLi9uZ3UtY2Fyb3VzZWwvbmd1LWNhcm91c2VsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5ndVRpbGVDb21wb25lbnQgfSBmcm9tICcuL25ndS10aWxlL25ndS10aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5ndUNhcm91c2VsU2VydmljZSB9IGZyb20gJy4vbmd1LWNhcm91c2VsLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOZ3VDYXJvdXNlbCxcclxuICAgIE5ndUl0ZW1Db21wb25lbnQsXHJcbiAgICBOZ3VUaWxlQ29tcG9uZW50LFxyXG4gICAgTmd1Q2Fyb3VzZWxQb2ludERpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxXcmFwcGVyRGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxPdXRsZXRcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTmd1Q2Fyb3VzZWwsXHJcbiAgICBOZ3VJdGVtQ29tcG9uZW50LFxyXG4gICAgTmd1VGlsZUNvbXBvbmVudCxcclxuICAgIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsT3V0bGV0XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE5ndUNhcm91c2VsU2VydmljZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsTW9kdWxlIHtcclxufVxyXG4iXSwibmFtZXMiOlsiaW50ZXJ2YWwiLCJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBRUUsMEJBQ1MsS0FBbUIsRUFDbkIsUUFBeUIsRUFDekJBLFdBQTJCLEVBQzNCLFNBQThCLEVBQzlCLE1BQWtCLEVBQ2xCLFlBQTJCLEVBQzNCLFVBQXVCLEVBQ3ZCLElBQWMsRUFDZCxLQUFVLEVBQ1YsS0FBUyxFQUNULElBQVEsRUFDTCxjQUFrQixFQUNyQixTQUFhLEVBQ2IsVUFBYyxFQUNkLFlBQWdCLEVBQ2hCLFVBQWMsRUFDZCxZQUFnQixFQUNoQixNQUFxQyxFQUNyQyxLQUFXLEVBQ1gsSUFBWSxFQUNaLE1BQVUsRUFDVixjQUFrQixFQUNsQixLQUFhLEVBQ2IsT0FBYyxFQUNkLE1BQWMsRUFDZCxHQUFXLEVBQ1gsS0FBWSxFQUNaLFFBQVk7UUEzQlosc0JBQUEsRUFBQSxZQUFZLEtBQUssRUFBRTtRQUNuQix5QkFBQSxFQUFBLGVBQWUsUUFBUSxFQUFFO1FBRXpCLDBCQUFBLEVBQUEsZ0JBQWdCLFlBQVksRUFBRTtRQUk5QixxQkFBQSxFQUFBLGNBQWM7UUFDZCxzQkFBQSxFQUFBLFVBQVU7UUFDVixzQkFBQSxFQUFBLFNBQVM7UUFDVCxxQkFBQSxFQUFBLFFBQVE7UUFDTCwrQkFBQSxFQUFBLGtCQUFrQjtRQUNyQiwwQkFBQSxFQUFBLGFBQWE7UUFDYiwyQkFBQSxFQUFBLGNBQWM7UUFDZCw2QkFBQSxFQUFBLGdCQUFnQjtRQUNoQiwyQkFBQSxFQUFBLGNBQWM7UUFDZCw2QkFBQSxFQUFBLGdCQUFnQjtRQUNoQix1QkFBQSxFQUFBLHFDQUFxQztRQUNyQyxzQkFBQSxFQUFBLFdBQVc7UUFDWCxxQkFBQSxFQUFBLFlBQVk7UUFDWix1QkFBQSxFQUFBLFVBQVU7UUFDViwrQkFBQSxFQUFBLGtCQUFrQjtRQUNsQixzQkFBQSxFQUFBLGFBQWE7UUFDYix3QkFBQSxFQUFBLGNBQWM7UUFDZCx1QkFBQSxFQUFBLGNBQWM7UUFDZCxvQkFBQSxFQUFBLFdBQVc7UUFDWCxzQkFBQSxFQUFBLFlBQVk7UUFDWix5QkFBQSxFQUFBLFlBQVk7UUEzQlosVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixhQUFRLEdBQVJBLFdBQVEsQ0FBbUI7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNsQixpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUMzQixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLFNBQUksR0FBSixJQUFJLENBQVU7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQ1YsVUFBSyxHQUFMLEtBQUssQ0FBSTtRQUNULFNBQUksR0FBSixJQUFJLENBQUk7UUFDTCxtQkFBYyxHQUFkLGNBQWMsQ0FBSTtRQUNyQixjQUFTLEdBQVQsU0FBUyxDQUFJO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBSTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFJO1FBQ2hCLGVBQVUsR0FBVixVQUFVLENBQUk7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBSTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUErQjtRQUNyQyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQU0sR0FBTixNQUFNLENBQUk7UUFDVixtQkFBYyxHQUFkLGNBQWMsQ0FBSTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLGFBQVEsR0FBUixRQUFRLENBQUk7S0FDakI7SUE5QlUsNEJBQVcsR0FBRyxDQUFDLENBQUM7SUErQmhDLHVCQUFDO0NBaENELElBZ0NDOztJQUtEO0tBR0M7SUFBRCxtQkFBQztDQUFBLElBQUE7QUFFRDtJQUFBO0tBSUM7SUFBRCxlQUFDO0NBQUEsSUFBQTs7SUFFRDtLQUdDO0lBQUQsZ0JBQUM7Q0FBQSxJQUFBO0FBRUQ7SUFBQTtLQUlDO0lBQUQsWUFBQztDQUFBLElBQUE7O0lBR0Msc0JBQ1MsRUFBTSxFQUNOLEVBQU0sRUFDTixFQUFNLEVBQ04sRUFBTSxFQUNOLEdBQU87UUFKUCxtQkFBQSxFQUFBLE1BQU07UUFDTixtQkFBQSxFQUFBLE1BQU07UUFDTixtQkFBQSxFQUFBLE1BQU07UUFDTixtQkFBQSxFQUFBLE1BQU07UUFDTixvQkFBQSxFQUFBLE9BQU87UUFKUCxPQUFFLEdBQUYsRUFBRSxDQUFJO1FBQ04sT0FBRSxHQUFGLEVBQUUsQ0FBSTtRQUNOLE9BQUUsR0FBRixFQUFFLENBQUk7UUFDTixPQUFFLEdBQUYsRUFBRSxDQUFJO1FBQ04sUUFBRyxHQUFILEdBQUcsQ0FBSTtLQUNaO0lBQ04sbUJBQUM7Q0FBQSxJQUFBOztJQUVEO0tBaUJDO0lBQUQsd0JBQUM7Q0FBQSxJQUFBOzs7O0FBMkJEOzs7O0lBYUUsa0NBQVksSUFBTztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztLQUN2QjtJQUNILCtCQUFDO0NBQUEsSUFBQTs7Ozs7O0FDaklEO0lBU0U7S0FFQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksUUFBMEI7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDMUI7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEI7O2dCQWhCRixVQUFVOzs7SUFtQlgseUJBQUM7Q0FuQkQ7Ozs7OztBQ0hBO0lBRUE7S0FJd0M7O2dCQUp2QyxTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxtQkFBbUI7aUJBQzlCOztJQUNzQywrQkFBQztDQUp4QyxJQUl3Qzs7SUFFeEM7S0FVQzs7Z0JBVkEsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsbUJBQW1CO2lCQUM5Qjs7SUFPRCwrQkFBQztDQVZELElBVUM7O0lBRUQ7S0FPQzs7Z0JBUEEsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsbUJBQW1CO2lCQUM5Qjs7SUFJRCwrQkFBQztDQVBELElBT0M7O0lBRUQ7S0FJeUM7O2dCQUp4QyxTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COztJQUN1QyxnQ0FBQztDQUp6QyxJQUl5Qzs7OztBQUV6QztJQU9FLGlDQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtLQUFJOztnQkFQbEQsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7O2dCQXRDK0IsV0FBVzs7SUEyQzNDLDhCQUFDO0NBUkQsSUFRQzs7SUFRQywyQkFBbUIsYUFBK0I7UUFBL0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO0tBQUk7O2dCQU52RCxTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2hDOzs7Z0JBaEQ0QyxnQkFBZ0I7O0lBb0Q3RCx3QkFBQztDQVBELElBT0M7O0lBT0MscUNBQW1CLFFBQXlCO1FBQXpCLGFBQVEsR0FBUixRQUFRLENBQWlCO0tBQUk7O2dCQUxqRCxTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxzQkFBc0I7aUJBQ2pDOzs7Z0JBekRtQixVQUFVOztJQTREOUIsa0NBQUM7Q0FORDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDakJFLE1BQU87SUFDUCxRQUFLO0lBQ0wsVUFBTztJQUNQLE9BQUk7SUFDSixRQUFLOzs7Ozs7O0FBUVA7SUFpQkUsZ0JBQW9CLE1BQWU7UUFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO0tBQ2xDOzs7Ozs7Ozs7O0lBTU0sMkJBQW9COzs7OztJQUEzQjtRQUNFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztLQUNqQzs7OztJQUVELHlCQUFROzs7SUFBUjtRQUNFLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3ZCOzs7Ozs7SUFFRCx1QkFBTTs7Ozs7SUFBTixVQUFPLEdBQVcsRUFBRSxPQUF3QjtRQUF4Qix3QkFBQSxFQUFBLGVBQXdCOztZQUNwQyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUU7O1lBRWQsSUFBSSxHQUFVLENBQUMsR0FBRyxDQUFDO1FBRXpCLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTs7Z0JBQ2pCLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7WUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzQjtZQUNELE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO1NBQy9CO1FBQ0QsTUFBTSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDNUM7S0FDRjs7Ozs7Ozs7Ozs7SUFLRCxzQkFBSzs7Ozs7O0lBQUw7UUFBTSxpQkFBaUI7YUFBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO1lBQWpCLDRCQUFpQjs7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDaEQ7Ozs7Ozs7Ozs7O0lBTUQscUJBQUk7Ozs7OztJQUFKO1FBQUssaUJBQWlCO2FBQWpCLFVBQWlCLEVBQWpCLHFCQUFpQixFQUFqQixJQUFpQjtZQUFqQiw0QkFBaUI7O1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2hEOzs7Ozs7Ozs7OztJQU1ELHFCQUFJOzs7Ozs7SUFBSjtRQUFLLGlCQUFpQjthQUFqQixVQUFpQixFQUFqQixxQkFBaUIsRUFBakIsSUFBaUI7WUFBakIsNEJBQWlCOztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNuRDs7Ozs7Ozs7Ozs7SUFNRCxzQkFBSzs7Ozs7O0lBQUw7UUFBTSxpQkFBaUI7YUFBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO1lBQWpCLDRCQUFpQjs7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDbEQ7Ozs7Ozs7SUFFTyxvQkFBRzs7Ozs7O0lBQVgsVUFBWSxJQUFjLEVBQUUsS0FBZSxFQUFFLE9BQWM7UUFBM0QsaUJBTUM7UUFMQyxJQUFJLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFOztnQkFDbkIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTztZQUM3RSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7U0FDaEc7S0FDRjs7Ozs7SUFuRk0sWUFBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7Ozs7SUFLdkIsY0FBTyxHQUFnQixFQUFFLENBQUM7SUFFMUIsbUJBQVksR0FBUyxJQUFJLENBQUM7SUFFbkIsZ0JBQVMsR0FBUSxFQUFFLENBQUM7SUE0RXBDLGFBQUM7Q0EzRkQsSUEyRkM7Ozs7Ozs7SUNqR0ssR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQzs7Ozs7QUFJckM7SUFVb0NDLCtCQUFnQjs7SUFrRGxELHFCQUNVLEdBQWUsRUFDZixTQUFvQixFQUNwQixRQUF5QixFQUNKLFVBQWtCLEVBQ3ZDLEdBQXNCLEVBQ3RCLGVBQW1DO1FBTjdDLFlBUUUsaUJBQU8sU0FFUjtRQVRTLFNBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixlQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGNBQVEsR0FBUixRQUFRLENBQWlCO1FBQ0osZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsU0FBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIscUJBQWUsR0FBZixlQUFlLENBQW9CO1FBbEQ3QyxlQUFTLEdBQUcsS0FBSyxDQUFDO1FBUWxCLGtCQUFZLEdBQWUsRUFBRSxDQUFDOztRQVF2QixZQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFPM0MsY0FBUSxHQUFHLElBQUksQ0FBQztRQUloQixrQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFTbEMsMEJBQW9CLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQWlCbkQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLENBQUM7O0tBQ3hDO0lBSUQsc0JBQ0ksbUNBQVU7Ozs7UUFEZDtZQUVFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN6Qjs7Ozs7UUFFRCxVQUFlLElBQVM7WUFDdEIsSUFBSSxJQUFJLEVBQUU7OztnQkFHUixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDOUI7U0FDRjs7O09BUkE7SUFjRCxzQkFDSSxnQ0FBTzs7Ozs7Ozs7OztRQURYLFVBQ1ksR0FBZTtZQUQzQixpQkFRQztZQU5DLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25DLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUU7b0JBQ2pFLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztpQkFBQSxDQUMzQixDQUFDO2FBQ0g7U0FDRjs7O09BQUE7SUFLRCxzQkFDSSxnQ0FBTzs7Ozs7Ozs7OztRQURYLFVBQ1ksR0FBZTtZQUQzQixpQkFRQztZQU5DLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25DLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUU7b0JBQ2pFLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztpQkFBQSxDQUMzQixDQUFDO2FBQ0g7U0FDRjs7O09BQUE7SUFRRCxzQkFDSSxnQ0FBTzs7Ozs7Ozs7Ozs7Ozs7UUFEWDtZQUVFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4Qjs7Ozs7UUFFRCxVQUFZLEVBQXNCO1lBQ2hDLElBQ0UsU0FBUyxFQUFFO2dCQUNYLEVBQUUsSUFBSSxJQUFJO2dCQUNWLE9BQU8sRUFBRSxLQUFLLFVBQVU7bUNBQ25CLE9BQU8sRUFBQTttQ0FDUCxPQUFPLENBQUMsSUFBSSxFQUFBLEVBQ2pCO2dCQUNBLE9BQU8sQ0FBQyxJQUFJLENBQ1YsOENBQTRDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQUcsQ0FDbEUsQ0FBQzthQUNIO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDdEI7OztPQWZBOzs7O0lBaUJELDhCQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUTthQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ1IsTUFBTSxDQUFDLFVBQUMsRUFBVSxFQUFFLElBQVM7WUFDNUIsT0FBTyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3RFLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsK0JBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFM0QsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7O1lBRXZDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQzlCO0tBQ0Y7Ozs7SUFFRCxxQ0FBZTs7O0lBQWY7UUFBQSxpQkFvQkM7UUFuQkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOztRQUkvQyxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Y7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBQSxLQUFLO2dCQUM5RCxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0tBR0Y7Ozs7SUFFRCx3Q0FBa0I7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDekI7Ozs7Ozs7SUFJTSwyQkFBSzs7Ozs7SUFBWixVQUFhLGdCQUEwQjtRQUNyQyxnQkFBZ0IsS0FBSyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFFcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtLQUNGOzs7Ozs7OztJQUdNLDRCQUFNOzs7Ozs7SUFBYixVQUFjLEtBQWEsRUFBRSxnQkFBMEI7O1FBRXJELGdCQUFnQixLQUFLLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTs7Z0JBQ3JELFlBQVksU0FBQTs7Z0JBQ1YsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBRTlDLFFBQVEsS0FBSztnQkFDWCxLQUFLLENBQUM7b0JBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLFlBQVksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDdkMsTUFBTTtnQkFDUixLQUFLLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUNuRCxNQUFNO2dCQUNSO29CQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QixZQUFZLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDMUM7WUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekQ7S0FDRjs7OztJQUdELGlDQUFXOzs7SUFBWDs7UUFFRSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7UUFHdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQ3JCLEdBQUcsR0FBRyxhQUFXLENBQUc7WUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1NBQzFCO0tBQ0Y7Ozs7O0lBRU8sdUNBQWlCOzs7O0lBQXpCLFVBQTBCLFVBQWU7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQzlCO0tBQ0Y7Ozs7OztJQUVPLHVDQUFpQjs7Ozs7SUFBekIsVUFDRSxJQUFXLEVBQ1gsYUFBZ0U7UUFGbEUsaUJBb0NDO1FBbENDLDhCQUFBLEVBQUEsZ0JBQWtDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYTtRQUdoRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQ2hDLFVBQ0UsSUFBK0IsRUFDL0IscUJBQTZCLEVBQzdCLFlBQW9COztnQkFFZCxJQUFJLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsWUFBWSxDQUFDO1lBQy9ELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQUU7O29CQUN6QixPQUFPLEdBQUcsSUFBSSx3QkFBd0IsQ0FBTSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3JFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO2dCQUM3QixhQUFhLENBQUMsa0JBQWtCLENBQzlCLElBQUksQ0FBQyxRQUFRLEVBQ2IsT0FBTyxFQUNQLFlBQVksQ0FDYixDQUFDO2FBQ0g7aUJBQU0sSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUNoQyxhQUFhLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQzVDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN2QjtpQkFBTTs7b0JBQ0MsSUFBSSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JELGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQ3hDO1NBQ0YsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFFL0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCOztLQUVGOzs7Ozs7Ozs7O0lBTU8sNkNBQXVCOzs7OztJQUEvQjs7WUFDUSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhO1FBQ3BELEtBQ0UsSUFBSSxXQUFXLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxhQUFhLENBQUMsTUFBTSxFQUNqRCxXQUFXLEdBQUcsS0FBSyxFQUNuQixXQUFXLEVBQUUsRUFDYjs7Z0JBQ00sT0FBTyxzQkFBRyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFPOztnQkFDL0MsT0FBTyxzQkFBRyxPQUFPLENBQUMsT0FBTyxFQUFPO1lBQ3RDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBRXRCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsV0FBVyxLQUFLLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDNUIsT0FBTyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7U0FDN0I7S0FDRjs7Ozs7O0lBRU8saUNBQVc7Ozs7O0lBQW5CLFVBQW9CLElBQVMsRUFBRSxDQUFTOztRQUV0QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQzdCOztZQUVLLE9BQU8sR0FDWCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUEsQ0FBQztZQUN6RCxJQUFJLENBQUMsZUFBZTtRQUV0QixPQUFPLE9BQU8sQ0FBQztLQUNoQjs7OztJQUVPLDJDQUFxQjs7O0lBQTdCO1FBQUEsaUJBaUJDOztZQWhCSyxVQUF5QztRQUU3QyxJQUFJLElBQUksQ0FBQyxXQUFXLFlBQVksVUFBVSxFQUFFO1lBQzFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQy9CO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUMxQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNuQztRQUVELElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVU7aUJBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7aUJBQzFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQ2IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQixDQUFDLENBQUM7U0FDTjtLQUNGOzs7O0lBRU8sc0NBQWdCOzs7SUFBeEI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsT0FBTyxHQUFHLFlBQVksQ0FBQztRQUNoRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSw0QkFBNEIsQ0FBQztRQUN4RSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7UUFDL0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRO1lBQ1gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxRQUFRO2tCQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7a0JBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUNwRDtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssV0FBVztrQkFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTztrQkFDekIsSUFBSSxDQUFDO1FBRVgsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3RCOzs7OztJQUVPLGlDQUFXOzs7O0lBQW5CLFVBQW9CLEtBQVU7UUFBOUIsaUJBVUM7UUFUQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1lBQ3pCLElBQUksV0FBVyxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDdkQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdkUsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDM0I7WUFDRCxLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUU3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ1Q7Ozs7SUFFRCwwQ0FBb0I7OztJQUFwQjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7S0FDeEU7SUFFRCxzQkFBSSxzQ0FBYTs7OztRQUFqQjtZQUNFLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO2FBQ3hFO1lBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUM1Qjs7O09BQUE7Ozs7OztJQUdPLDRCQUFNOzs7O0lBQWQ7UUFBQSxpQkFxREM7UUFwREMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFOztnQkFDZixVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7WUFDaEUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLG9CQUFvQixFQUFDLENBQUMsQ0FBQztZQUVwRSxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFDLEVBQU87OztnQkFHaEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDeEUsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDekIsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxFQUFPO29CQUM3QixLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztpQkFDcEMsQ0FBQyxDQUFDO2dCQUNILFVBQVUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsRUFBTztvQkFDL0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQ3JDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLFVBQVUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsRUFBTztvQkFDL0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQ3BDLENBQUMsQ0FBQztnQkFDSCxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFDLEVBQU87b0JBQ2hDLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUNyQyxDQUFDLENBQUM7YUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJELFVBQVUsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRTs7O2dCQUd4QyxFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQy9CLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7Ozs7O0lBR08sb0NBQWM7Ozs7OztJQUF0QixVQUF1QixDQUFTLEVBQUUsRUFBTztRQUN2QyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs7UUFJckUsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBRUQsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7O1lBQ3pELElBQUksR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDM0IsSUFBSTtZQUNGLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWTtrQkFDdEIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO3FCQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87MEJBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTswQkFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQztvQkFDeEIsR0FBRztrQkFDRCxJQUFJLENBQUM7UUFDWCxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0tBRS9COzs7Ozs7SUFFTyx3Q0FBa0I7Ozs7O0lBQTFCLFVBQTJCLENBQVMsRUFBRSxJQUFZOztZQUMxQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLEdBQUcsU0FBUztRQUNuRCxJQUFJLENBQUMsY0FBYztZQUNqQixDQUFDLEtBQUssU0FBUyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0tBQzdFOzs7O0lBRU8sNENBQXNCOzs7SUFBOUI7UUFFRSxJQUFJLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCOztZQUNLLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksR0FBRyxHQUFHLEdBQUcsSUFBSTs7WUFFL0MsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXO1FBRTdHLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7WUFDOUIsWUFBWSxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUM7U0FDcEY7UUFFRCxJQUFJLFlBQVksSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUNwQyxXQUFXLEVBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPO2NBQ2pCLG9CQUFrQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxTQUFNO2NBQ3RFLGlCQUFlLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFlBQVMsQ0FDM0UsQ0FBQztLQUNIOzs7Ozs7SUFHTyx3Q0FBa0I7Ozs7SUFBMUI7O1lBQ1EsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUzs7WUFDN0IsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPOztZQUN4QixPQUFPLEdBQUcsTUFBTSxDQUFDLFdBQVc7O1lBQzVCLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVk7O1lBQzNDLGtCQUFrQixHQUN0QixHQUFHLElBQUksT0FBTyxHQUFHLE9BQU8sR0FBRyxjQUFjLEdBQUcsQ0FBQztZQUM3QyxHQUFHLEdBQUcsY0FBYyxHQUFHLENBQUMsSUFBSSxPQUFPO1FBRXJDLElBQUksa0JBQWtCLEVBQUU7WUFDdEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQztLQUNGOzs7Ozs7SUFHTyx3Q0FBa0I7Ozs7SUFBMUI7UUFDRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7OztRQU1wQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUVuQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5CLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFVBQVU7Z0JBQ2IsV0FBVyxDQUFDLFdBQVcsSUFBSSxJQUFJO3NCQUMzQixJQUFJO3NCQUNKLFdBQVcsQ0FBQyxXQUFXLElBQUksR0FBRzswQkFDOUIsSUFBSTswQkFDSixXQUFXLENBQUMsV0FBVyxJQUFJLEdBQUc7OEJBQzVCLElBQUk7OEJBQ0osSUFBSSxDQUFDO1lBRWIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0I7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO1FBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7Y0FDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2NBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSTtZQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzRSxJQUFJLENBQUMsS0FBSztZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUN4RSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7S0FHbkI7Ozs7OztJQUdPLG9DQUFjOzs7O0lBQXRCOzs7O1lBR1EsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs7WUFDN0MsUUFBUSxHQUFHLEVBQUU7UUFFbkIsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFO1lBQy9ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQzs7UUFFN0IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3hCO1NBQ0Y7O0tBRUY7Ozs7OztJQUdPLDJDQUFxQjs7OztJQUE3Qjs7WUFDUSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDeEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7O1FBRXJCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDekI7Ozs7OztJQUdPLG1DQUFhOzs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7O1lBQzVCLElBQUksR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUNiLElBQUksQ0FBQyxLQUFLLG9GQUN1RSxDQUFDO1FBRXBGLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUNwQyxJQUFJLElBQU8sSUFBSSxDQUFDLE9BQU8sK0NBQTRDLENBQUM7U0FDckU7O1lBRUcsU0FBUyxHQUFHLEVBQUU7UUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTs7Z0JBQ25CLFlBQVksR0FBTSxJQUFJLENBQUMsT0FBTywwQkFBcUIsSUFBSSxDQUFDLFFBQVE7aUJBQ25FLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBSzs7Z0JBQy9CLFlBQVksR0FBTSxJQUFJLENBQUMsT0FBTywwQkFBcUIsSUFBSSxDQUFDLFFBQVE7aUJBQ25FLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBSzs7Z0JBQy9CLFlBQVksR0FBTSxJQUFJLENBQUMsT0FBTywwQkFBcUIsSUFBSSxDQUFDLFFBQVE7aUJBQ25FLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBSzs7Z0JBQy9CLFlBQVksR0FBTSxJQUFJLENBQUMsT0FBTywwQkFBcUIsSUFBSSxDQUFDLFFBQVE7aUJBQ25FLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBSztZQUVyQyxTQUFTLEdBQUcsOEJBQTRCLFlBQVksd0RBQ1gsWUFBWSx3REFDWixZQUFZLHlEQUNYLFlBQVksTUFBRyxDQUFDO1NBQzNEO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRTs7Z0JBQy9CLFlBQVksR0FDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUTtrQkFDdEIsSUFBSSxDQUFDLE9BQU8sMEJBQXFCLEVBQUU7b0JBQ3hDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxrQkFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQUs7a0JBQzFELElBQUksQ0FBQyxPQUFPLDBCQUFxQixHQUFHO29CQUN6QyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsa0JBQWEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFLOztnQkFFOUQsWUFBWSxHQUFNLElBQUksQ0FBQyxPQUFPLDRCQUF1QixHQUFHO2dCQUM5RCxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsa0JBQWEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFJOztnQkFDekQsWUFBWSxHQUFNLElBQUksQ0FBQyxPQUFPLDRCQUF1QixHQUFHO2dCQUM5RCxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsa0JBQWEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFJOztnQkFDekQsWUFBWSxHQUFNLElBQUksQ0FBQyxPQUFPLDRCQUF1QixHQUFHO2dCQUM5RCxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsa0JBQWEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFJO1lBRS9ELFNBQVMsR0FBRyw4QkFBNEIsWUFBWSx3REFDWCxZQUFZLHdEQUNaLFlBQVkseURBQ1gsWUFBWSxNQUFHLENBQUM7U0FDM0Q7YUFBTTtZQUNMLFNBQVMsR0FBTSxJQUFJLENBQUMsT0FBTywwQkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxtQkFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQU0sQ0FBQztTQUM1QztRQUdELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQ3BDLGFBQWEsQ0FDZCxDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUNoQyxRQUFRLEVBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLE9BQUksQ0FDNUIsQ0FBQztTQUNIOztRQUdELElBQUksQ0FBQyxHQUFHO1lBQ1IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUksSUFBSSxTQUFJLFNBQVcsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0tBQzNCOzs7Ozs7O0lBR08sd0NBQWtCOzs7OztJQUExQixVQUEyQixHQUFXOztZQUNoQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUs7O1lBQ3RCLGFBQWE7O1lBQ2YsWUFBWSxHQUFHLENBQUM7O1lBQ1osU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFdEUsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtZQUN6QixPQUFPO1NBQ1I7YUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTs7Z0JBQzlELEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVOztnQkFFekMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVU7O2dCQUNuRCxTQUFTLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVO1lBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDLEVBQUU7Z0JBQzNCLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNuRCxTQUFTLEdBQUcsR0FBRyxDQUFDO2dCQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN4QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksU0FBUyxFQUFFO2dCQUN2QyxZQUFZLEdBQUcsYUFBYSxHQUFHLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQy9CLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztvQkFDN0MsU0FBUyxHQUFHLEdBQUcsQ0FBQztpQkFDakI7cUJBQU07b0JBQ0wsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztpQkFDcEQ7YUFDRjtZQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZEO2FBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkUsSUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU07Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVTtnQkFDaEQsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNaO2dCQUNBLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN4QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3RCLFlBQVksR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxTQUFTLEdBQUcsR0FBRyxDQUFDO2dCQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDL0IsWUFBWTt3QkFDVixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDdEUsU0FBUyxHQUFHLEdBQUcsQ0FBQztpQkFDakI7cUJBQU07b0JBQ0wsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztpQkFDcEQ7YUFDRjtZQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZEO0tBQ0Y7Ozs7Ozs7OztJQUdPLHdDQUFrQjs7Ozs7OztJQUExQixVQUNFLEdBQVcsRUFDWCxZQUFvQixFQUNwQixTQUFpQjs7UUFIbkIsaUJBK0NDO1FBeENDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O2dCQUNmLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDOztnQkFDckMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQ25CLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDNUU7WUFDRCxJQUFJLEdBQUcsSUFBSSxHQUFHLFNBQVMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzNDLFNBQVMsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDakI7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUNwQyxZQUFZLEVBQ1osZUFBYSxTQUFTLFdBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFRLENBQ2pELENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7Z0JBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FDcEIsR0FBRyxFQUNILFlBQVksR0FBRyxDQUFDLEVBQ2hCLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUN6QixTQUFTLEVBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxDQUMzQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDeEU7O1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1NBQ3hCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs7OztLQUl0Qjs7Ozs7Ozs7SUFHTyxpQ0FBVzs7Ozs7O0lBQW5CLFVBQW9CLEtBQWEsRUFBRSxJQUFZO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDdEI7Ozs7OztJQUVPLHNDQUFnQjs7Ozs7SUFBeEIsVUFBeUIsSUFBWSxFQUFFLEtBQWE7O1lBQzlDLE9BQU8sR0FBRyxFQUFFO1FBQ2hCLE9BQU8sSUFBTyxJQUFJLENBQUMsT0FBTywrQkFBNEIsQ0FBQztRQUV2RCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNsQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQztZQUMxRCxPQUFPLElBQUksU0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFPLENBQUM7U0FDL0M7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDO1lBQzlELE9BQU8sSUFBSSxLQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBUyxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxJQUFJLE1BQU0sQ0FBQztRQUNsQixPQUFPLE9BQU8sQ0FBQztLQUNoQjs7Ozs7OztJQUdPLHFDQUFlOzs7OztJQUF2QixVQUF3QixLQUFhOztZQUMvQixRQUFRLEdBQUcsRUFBRTtRQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO1lBQzlCLFFBQVEsR0FBRyxnQ0FBOEIsSUFBSSxDQUFDLGdCQUFnQixDQUM1RCxJQUFJLEVBQ0osS0FBSyxDQUNOLDRDQUM0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyw2Q0FDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsOENBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQUksQ0FBQztTQUN0RTthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUNsRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pDLFFBQVEsR0FBTSxJQUFJLENBQUMsT0FBTyxrQ0FDeEIsSUFBSSxDQUFDLFlBQVksR0FDZCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsZUFBWSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0tBQzNDOzs7Ozs7SUFHTywwQ0FBb0I7Ozs7SUFBNUI7UUFDRSxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSztnQkFDcEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzNDO0tBQ0Y7Ozs7OztJQUdPLGlDQUFXOzs7O0lBQW5COztZQUNNLElBQUksR0FBRyxFQUFFOztZQUNQLFFBQVEsR0FDWixnRUFBZ0U7UUFFbEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixJQUFJLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN0RTtRQUNELE9BQU8sZ0JBQWMsSUFBTSxDQUFDO0tBQzdCOzs7Ozs7SUFHTyx1Q0FBaUI7Ozs7SUFBekI7UUFBQSxpQkF1Q0M7O1lBdENPLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWE7UUFDbEQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFO2dCQUN6RCxZQUFZLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMvQixLQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztvQkFDNUIsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7aUJBQzNCLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDVCxDQUFDLENBQUM7O2dCQUVHLE9BQUssR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUN6RCxRQUFNLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztnQkFFMUQsWUFBVSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBQzlELGFBQVcsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUU3RCxXQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFdEUsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUN0QixPQUFLLEVBQ0wsWUFBVSxFQUNWLFFBQU0sRUFDTixhQUFXLEVBQ1gsS0FBSSxDQUFDLG9CQUFvQixDQUMxQjtxQkFDRSxJQUFJLENBQ0gsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUNaLFNBQVMsQ0FBQyxVQUFBLEdBQUc7b0JBQ1gsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQztvQkFDdEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDeEIsT0FBTyxHQUFHLEdBQUcsV0FBUyxHQUFHLEtBQUssRUFBRSxDQUFDO2lCQUNsQyxDQUFDLENBQ0g7cUJBQ0EsU0FBUyxDQUFDLFVBQUEsR0FBRztvQkFDWixLQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzVCLENBQUMsQ0FBQzthQUNOLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoQztLQUNGOzs7O0lBRU8sZ0RBQTBCOzs7SUFBbEM7O1lBQ1EsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYTtRQUNwRCxLQUNFLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFDakQsV0FBVyxHQUFHLEtBQUssRUFDbkIsV0FBVyxFQUFFLEVBQ2I7O2dCQUNNLE9BQU8sc0JBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBTzs7Z0JBQy9DLE9BQU8sc0JBQUcsT0FBTyxDQUFDLE9BQU8sRUFBTztZQUN0QyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUN0QixPQUFPLENBQUMsS0FBSyxHQUFHLFdBQVcsS0FBSyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1NBQzdCO0tBQ0Y7Ozs7Ozs7Ozs7OztJQUdPLHVDQUFpQjs7Ozs7Ozs7OztJQUF6QixVQUNFLFNBQWlCLEVBQ2pCLEtBQWEsRUFDYixHQUFXLEVBQ1gsS0FBYSxFQUNiLE1BQWMsRUFDZCxhQUE4QztRQU5oRCxpQkFxQ0M7UUEvQkMsOEJBQUEsRUFBQSxnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhOztZQUUxQyxHQUFHLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQztRQUNqQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDOztZQUNwQixZQUFZLEdBQUcsRUFBRTtRQUV2QixJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDOztvQkFDUixPQUFPLHNCQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQU87Z0JBQzNDLElBQUksT0FBTyxFQUFFOzt3QkFDTCxPQUFPLHNCQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQU87b0JBQ3RDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsRUFBQyxDQUFDO2lCQUMxRDthQUNGO1NBQ0Y7YUFBTTtZQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7O29CQUNSLE9BQU8sc0JBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBTztnQkFDM0MsSUFBSSxPQUFPLEVBQUU7O3dCQUNMLE9BQU8sc0JBQUcsT0FBTyxDQUFDLE9BQU8sRUFBTztvQkFDdEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsQ0FBQztpQkFDM0Q7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdEMsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDakI7Ozs7O0lBRU8sdUNBQWlCOzs7O0lBQXpCLFVBQTBCLE1BQWdCOztZQUNsQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhO1FBQ3BELE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDOztnQkFDUixPQUFPLHNCQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQU87WUFDM0MsSUFBSSxPQUFPLEVBQUU7O29CQUNMLE9BQU8sc0JBQUcsT0FBTyxDQUFDLE9BQU8sRUFBTztnQkFDdEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBQyxFQUFDLENBQUM7YUFDekQ7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3pCOzs7Ozs7Ozs7SUFHTywrQkFBUzs7Ozs7OztJQUFqQixVQUFrQixFQUFPLEVBQUUsSUFBUyxFQUFFLEdBQVE7UUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN4Qzs7Ozs7OztJQUdPLHNDQUFnQjs7Ozs7SUFBeEIsVUFBeUIsS0FBYzs7WUFDL0IsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUN2RCxJQUFJLEtBQUssRUFBRTs7Z0JBQ0gsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sU0FBUyxDQUFDO0tBQ2xCOztnQkFoOUJGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLHFvQkFBMEM7b0JBRTFDLGFBQWEsRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUNuQyxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDL0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7O2dCQTdDQyxVQUFVO2dCQWNWLFNBQVM7Z0JBTlQsZUFBZTtnQkE2RjRCLE1BQU0sdUJBQTlDLE1BQU0sU0FBQyxXQUFXO2dCQTFHckIsaUJBQWlCO2dCQTRCVixrQkFBa0I7Ozs4QkFrQ3hCLFNBQVMsU0FBQyxpQkFBaUI7bUNBRTNCLFNBQVMsU0FBQywyQkFBMkI7eUJBU3JDLE1BQU0sU0FBQyxRQUFROzRCQUdmLGVBQWUsU0FBQyx1QkFBdUI7eUJBTXZDLEtBQUssU0FBQyxRQUFROytCQUVkLE1BQU0sU0FBQyxjQUFjO2dDQUVyQixTQUFTLFNBQUMsYUFBYSxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQztvQ0FHM0MsU0FBUyxTQUFDLG1CQUFtQixFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQztpQ0FHakQsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQzs2QkF3QjlDLEtBQUssU0FBQyxZQUFZOzBCQWlCbEIsWUFBWSxTQUFDLHdCQUF3QixFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQzswQkFhekQsWUFBWSxTQUFDLHdCQUF3QixFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQzswQkFnQnpELEtBQUs7O0lBeTFCUixrQkFBQztDQUFBLENBdjhCbUMsZ0JBQWdCOzs7Ozs7QUN6RHBEO0lBRUE7UUFPNkIsWUFBTyxHQUFHLElBQUksQ0FBQztLQUMzQzs7Z0JBUkEsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIseUNBQXNDOztpQkFFdkM7OzswQkFFRSxXQUFXLFNBQUMsWUFBWTs7SUFDM0IsdUJBQUM7Q0FSRDs7Ozs7O0FDRkE7SUFFQTtRQU82QixZQUFPLEdBQUcsSUFBSSxDQUFDO0tBQzNDOztnQkFSQSxTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxVQUFVO29CQUNwQiw2RUFBc0M7O2lCQUV2Qzs7OzBCQUVFLFdBQVcsU0FBQyxZQUFZOztJQUMzQix1QkFBQztDQVJEOzs7Ozs7QUNGQTtJQWVBO0tBK0JDOztnQkEvQkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFO3dCQUNQLFdBQVc7d0JBQ1gsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLHlCQUF5Qjt3QkFDekIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3dCQUN2QiwyQkFBMkI7d0JBQzNCLGlCQUFpQjtxQkFDbEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLFdBQVc7d0JBQ1gsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLHlCQUF5Qjt3QkFDekIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3dCQUN2QiwyQkFBMkI7d0JBQzNCLGlCQUFpQjtxQkFDbEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULGtCQUFrQjtxQkFDbkI7aUJBQ0Y7O0lBRUQsd0JBQUM7Q0EvQkQ7Ozs7Ozs7Ozs7Ozs7OyJ9