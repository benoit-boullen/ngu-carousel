(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@hypecode/carousel', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global.hypecode = global.hypecode || {}, global.hypecode.carousel = {}),global.ng.core,global.ng.common,global.rxjs,global.rxjs.operators));
}(this, (function (exports,core,common,rxjs,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NguCarouselStore = /** @class */ (function () {
        function NguCarouselStore(touch, vertical, interval, transform, button, visibleItems, deviceType, type, token, items, load, deviceWidth, carouselWidth, itemWidth, slideItems, itemWidthPer, itemLength, currentSlide, easing, speed, loop, dexVal, touchTransform, isEnd, isFirst, isLast, RTL, point, velocity) {
            if (touch === void 0) {
                touch = new Touch();
            }
            if (vertical === void 0) {
                vertical = new Vertical();
            }
            if (transform === void 0) {
                transform = new NguTransfrom();
            }
            if (type === void 0) {
                type = 'fixed';
            }
            if (token === void 0) {
                token = '';
            }
            if (items === void 0) {
                items = 0;
            }
            if (load === void 0) {
                load = 0;
            }
            if (deviceWidth === void 0) {
                deviceWidth = 0;
            }
            if (carouselWidth === void 0) {
                carouselWidth = 0;
            }
            if (itemWidth === void 0) {
                itemWidth = 0;
            }
            if (slideItems === void 0) {
                slideItems = 0;
            }
            if (itemWidthPer === void 0) {
                itemWidthPer = 0;
            }
            if (itemLength === void 0) {
                itemLength = 0;
            }
            if (currentSlide === void 0) {
                currentSlide = 0;
            }
            if (easing === void 0) {
                easing = 'cubic-bezier(0, 0, 0.2, 1)';
            }
            if (speed === void 0) {
                speed = 200;
            }
            if (loop === void 0) {
                loop = false;
            }
            if (dexVal === void 0) {
                dexVal = 0;
            }
            if (touchTransform === void 0) {
                touchTransform = 0;
            }
            if (isEnd === void 0) {
                isEnd = false;
            }
            if (isFirst === void 0) {
                isFirst = true;
            }
            if (isLast === void 0) {
                isLast = false;
            }
            if (RTL === void 0) {
                RTL = false;
            }
            if (point === void 0) {
                point = true;
            }
            if (velocity === void 0) {
                velocity = 1;
            }
            this.touch = touch;
            this.vertical = vertical;
            this.interval = interval;
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
            if (xs === void 0) {
                xs = 0;
            }
            if (sm === void 0) {
                sm = 0;
            }
            if (md === void 0) {
                md = 0;
            }
            if (lg === void 0) {
                lg = 0;
            }
            if (all === void 0) {
                all = 0;
            }
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
     */ NguCarouselOutletContext = /** @class */ (function () {
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
            { type: core.Injectable }
        ];
        NguCarouselService.ctorParameters = function () { return []; };
        return NguCarouselService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NguCarouselItemDirective = /** @class */ (function () {
        function NguCarouselItemDirective() {
        }
        NguCarouselItemDirective.decorators = [
            { type: core.Directive, args: [{
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
            { type: core.Directive, args: [{
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
            { type: core.Directive, args: [{
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
            { type: core.Directive, args: [{
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
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[nguCarouselDef]'
                    },] }
        ];
        NguCarouselDefDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef }
            ];
        };
        return NguCarouselDefDirective;
    }());
    var NguCarouselOutlet = /** @class */ (function () {
        function NguCarouselOutlet(viewContainer) {
            this.viewContainer = viewContainer;
        }
        NguCarouselOutlet.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[nguCarouselOutlet]'
                    },] }
        ];
        NguCarouselOutlet.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef }
            ];
        };
        return NguCarouselOutlet;
    }());
    var NguCarouselWrapperDirective = /** @class */ (function () {
        function NguCarouselWrapperDirective(template) {
            this.template = template;
        }
        NguCarouselWrapperDirective.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[nguCarouselWrapper]'
                    },] }
        ];
        NguCarouselWrapperDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
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
            _this.onMove = new core.EventEmitter();
            _this.withAnim = true;
            _this.carouselLoad = new core.EventEmitter();
            _this._intervalController$ = new rxjs.Subject();
            _this.carouselService.setCarousel(_this);
            return _this;
        }
        Object.defineProperty(NguCarousel.prototype, "dataSource", {
            get: /**
             * @return {?}
             */ function () {
                return this._dataSource;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */ function (data) {
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
             */ function (btn) {
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
             */ function (btn) {
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
             */ function () {
                return this._trackByFn;
            },
            set: /**
             * @param {?} fn
             * @return {?}
             */ function (fn) {
                if (core.isDevMode() &&
                    fn != null &&
                    typeof fn !== 'function' &&
                    ( /** @type {?} */(console)) &&
                    ( /** @type {?} */(console.warn))) {
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
                if (viewContainer === void 0) {
                    viewContainer = this._nodeOutlet.viewContainer;
                }
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
                    var viewRef = ( /** @type {?} */(viewContainer.get(renderIndex)));
                    /** @type {?} */
                    var context = ( /** @type {?} */(viewRef.context));
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
                if (this._dataSource instanceof rxjs.Observable) {
                    dataStream = this._dataSource;
                }
                else if (Array.isArray(this._dataSource)) {
                    dataStream = rxjs.of(this._dataSource);
                }
                if (dataStream) {
                    this._dataSubscription = dataStream
                        .pipe(operators.takeUntil(this._intervalController$))
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
                console.log(this.touchTransform, maxTranslate, this.itemWidth, this._dataSource.length, this.carouselMain1.nativeElement.offsetWidth);
                console.log(this.itemWidth * this.touchTransform / 100);
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
                this.deviceWidth = common.isPlatformBrowser(this.platformId)
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
                    var play$_1 = rxjs.fromEvent(container, 'mouseleave').pipe(operators.mapTo(1));
                    /** @type {?} */
                    var pause$_1 = rxjs.fromEvent(container, 'mouseenter').pipe(operators.mapTo(0));
                    /** @type {?} */
                    var touchPlay$_1 = rxjs.fromEvent(container, 'touchstart').pipe(operators.mapTo(1));
                    /** @type {?} */
                    var touchPause$_1 = rxjs.fromEvent(container, 'touchend').pipe(operators.mapTo(0));
                    /** @type {?} */
                    var interval$_1 = rxjs.interval(this.inputs.interval.timing).pipe(operators.mapTo(1));
                    setTimeout(function () {
                        _this.carouselInt = rxjs.merge(play$_1, touchPlay$_1, pause$_1, touchPause$_1, _this._intervalController$)
                            .pipe(operators.startWith(1), operators.switchMap(function (val) {
                            _this.isHovered = !val;
                            _this.cdr.markForCheck();
                            return val ? interval$_1 : rxjs.empty();
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
                    var viewRef = ( /** @type {?} */(viewContainer.get(renderIndex)));
                    /** @type {?} */
                    var context = ( /** @type {?} */(viewRef.context));
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
                if (viewContainer === void 0) {
                    viewContainer = this._nodeOutlet.viewContainer;
                }
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
                        var viewRef = ( /** @type {?} */(viewContainer.get(i)));
                        if (viewRef) {
                            /** @type {?} */
                            var context = ( /** @type {?} */(viewRef.context));
                            context.animate = { value: true, params: { distance: val } };
                        }
                    }
                }
                else {
                    for (var i = end - 1; i >= start - 1; i--) {
                        collectIndex.push(i);
                        val = val * 2;
                        /** @type {?} */
                        var viewRef = ( /** @type {?} */(viewContainer.get(i)));
                        if (viewRef) {
                            /** @type {?} */
                            var context = ( /** @type {?} */(viewRef.context));
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
                    var viewRef = ( /** @type {?} */(viewContainer.get(i)));
                    if (viewRef) {
                        /** @type {?} */
                        var context = ( /** @type {?} */(viewRef.context));
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
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'ngu-carousel',
                        template: "<ng-content select=\"[NguCarouselPoint]\"></ng-content>\r\n\r\n<div class=\"carousel-wrapper\">\r\n  <div class=\"btn-wrapper btn-previous\">\r\n    <ng-content select=\"[NguCarouselPrev]\"></ng-content>\r\n  </div>\r\n\r\n  <div class=\"btn-wrapper btn-next\">\r\n    <ng-content select=\"[NguCarouselNext]\"></ng-content>\r\n  </div>\r\n\r\n  <div #ngucarousel class=\"ngucarousel\">\r\n    <div #touchContainer class=\"ngu-touch-container\">\r\n      <div #nguItemsContainer class=\"ngucarousel-items\">\r\n        <ng-container nguCarouselOutlet></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n",
                        viewProviders: [NguCarouselService],
                        providers: [NguCarouselService],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block;position:relative}:host.ngurtl{direction:rtl}.carousel-wrapper{display:flex;flex-direction:row;overflow:visible;max-width:100%}.ngucarousel{position:relative;flex-wrap:nowrap;z-index:10;order:2;flex:1;min-width:0}.ngucarousel .ngucarousel-items{position:relative;display:flex;height:100%}.btn-wrapper{z-index:11;flex:0 0 auto}.btn-previous{order:1}.btn-next{order:3}.nguvertical{flex-direction:column}.myPoint{list-style-type:none;text-align:right;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.myPoint li{background:#6b6b6b;display:inline-block;padding:4px;margin:0 3px;transition:.4s;opacity:.5}.myPoint li.active{opacity:1;-webkit-transform:scale(1.2);transform:scale(1.2)}"]
                    }] }
        ];
        NguCarousel.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: core.IterableDiffers },
                { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
                { type: core.ChangeDetectorRef },
                { type: NguCarouselService }
            ];
        };
        NguCarousel.propDecorators = {
            _nodeOutlet: [{ type: core.ViewChild, args: [NguCarouselOutlet,] }],
            _carouselWrapper: [{ type: core.ViewChild, args: [NguCarouselWrapperDirective,] }],
            onMove: [{ type: core.Output, args: ['onMove',] }],
            _defDirec: [{ type: core.ContentChildren, args: [NguCarouselDefDirective,] }],
            inputs: [{ type: core.Input, args: ['inputs',] }],
            carouselLoad: [{ type: core.Output, args: ['carouselLoad',] }],
            carouselMain1: [{ type: core.ViewChild, args: ['ngucarousel', { read: core.ElementRef },] }],
            nguItemsContainer: [{ type: core.ViewChild, args: ['nguItemsContainer', { read: core.ElementRef },] }],
            touchContainer: [{ type: core.ViewChild, args: ['touchContainer', { read: core.ElementRef },] }],
            dataSource: [{ type: core.Input, args: ['dataSource',] }],
            nextBtn: [{ type: core.ContentChild, args: [NguCarouselNextDirective, { read: core.ElementRef },] }],
            prevBtn: [{ type: core.ContentChild, args: [NguCarouselPrevDirective, { read: core.ElementRef },] }],
            trackBy: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'ngu-item',
                        template: "<ng-content></ng-content>\r\n",
                        styles: [""]
                    }] }
        ];
        NguItemComponent.propDecorators = {
            classes: [{ type: core.HostBinding, args: ['class.item',] }]
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
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'ngu-tile',
                        template: "<div class=\"tile\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                        styles: [":host{padding:10px;box-sizing:border-box}"]
                    }] }
        ];
        NguTileComponent.propDecorators = {
            classes: [{ type: core.HostBinding, args: ['class.item',] }]
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.NguCarouselConfig = NguCarouselConfig;
    exports.NguCarouselStore = NguCarouselStore;
    exports.NguTransfrom = NguTransfrom;
    exports.NguCarouselService = NguCarouselService;
    exports.NguCarousel = NguCarousel;
    exports.NguCarouselModule = NguCarouselModule;
    exports.ɵg = NguCarouselDefDirective;
    exports.ɵc = NguCarouselItemDirective;
    exports.ɵd = NguCarouselNextDirective;
    exports.ɵh = NguCarouselOutlet;
    exports.ɵf = NguCarouselPointDirective;
    exports.ɵe = NguCarouselPrevDirective;
    exports.ɵi = NguCarouselWrapperDirective;
    exports.ɵa = ItemsControl;
    exports.ɵb = NguButton;
    exports.ɵj = NguItemComponent;
    exports.ɵk = NguTileComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlwZWNvZGUtY2Fyb3VzZWwudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL25ndS1jYXJvdXNlbC9uZ3UtY2Fyb3VzZWwudHMiLCJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC9saWIvbmd1LWNhcm91c2VsLnNlcnZpY2UudHMiLCJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL25ndS1jYXJvdXNlbC5kaXJlY3RpdmUudHMiLCJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC9saWIvbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC5jb21wb25lbnQudHMiLCJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC9saWIvbmd1LWl0ZW0vbmd1LWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL25ndS10aWxlL25ndS10aWxlLmNvbXBvbmVudC50cyIsIm5nOi8vQGh5cGVjb2RlL2Nhcm91c2VsL2xpYi9uZ3UtY2Fyb3VzZWwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbFN0b3JlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB0b3VjaCA9IG5ldyBUb3VjaCgpLFxyXG4gICAgcHVibGljIHZlcnRpY2FsID0gbmV3IFZlcnRpY2FsKCksXHJcbiAgICBwdWJsaWMgaW50ZXJ2YWw/OiBDYXJvdXNlbEludGVydmFsLFxyXG4gICAgcHVibGljIHRyYW5zZm9ybSA9IG5ldyBOZ3VUcmFuc2Zyb20oKSxcclxuICAgIHB1YmxpYyBidXR0b24/OiBOZ3VCdXR0b24sXHJcbiAgICBwdWJsaWMgdmlzaWJsZUl0ZW1zPzogSXRlbXNDb250cm9sLFxyXG4gICAgcHVibGljIGRldmljZVR5cGU/OiBEZXZpY2VUeXBlLFxyXG4gICAgcHVibGljIHR5cGUgPSAnZml4ZWQnLFxyXG4gICAgcHVibGljIHRva2VuID0gJycsXHJcbiAgICBwdWJsaWMgaXRlbXMgPSAwLFxyXG4gICAgcHVibGljIGxvYWQgPSAwLFxyXG4gICAgcHVibGljIGRldmljZVdpZHRoID0gMCxcclxuICAgIHB1YmxpYyBjYXJvdXNlbFdpZHRoID0gMCxcclxuICAgIHB1YmxpYyBpdGVtV2lkdGggPSAwLFxyXG4gICAgcHVibGljIHNsaWRlSXRlbXMgPSAwLFxyXG4gICAgcHVibGljIGl0ZW1XaWR0aFBlciA9IDAsXHJcbiAgICBwdWJsaWMgaXRlbUxlbmd0aCA9IDAsXHJcbiAgICBwdWJsaWMgY3VycmVudFNsaWRlID0gMCxcclxuICAgIHB1YmxpYyBlYXNpbmcgPSAnY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLFxyXG4gICAgcHVibGljIHNwZWVkID0gMjAwLFxyXG4gICAgcHVibGljIGxvb3AgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBkZXhWYWwgPSAwLFxyXG4gICAgcHVibGljIHRvdWNoVHJhbnNmb3JtID0gMCxcclxuICAgIHB1YmxpYyBpc0VuZCA9IGZhbHNlLFxyXG4gICAgcHVibGljIGlzRmlyc3QgPSB0cnVlLFxyXG4gICAgcHVibGljIGlzTGFzdCA9IGZhbHNlLFxyXG4gICAgcHVibGljIFJUTCA9IGZhbHNlLFxyXG4gICAgcHVibGljIHBvaW50ID0gdHJ1ZSxcclxuICAgIHB1YmxpYyB2ZWxvY2l0eSA9IDFcclxuICApIHt9XHJcbn1cclxuZXhwb3J0IHR5cGUgRGV2aWNlVHlwZSA9ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAnYWxsJztcclxuXHJcbmV4cG9ydCB0eXBlIEJ1dHRvblZpc2libGUgPSAnZGlzYWJsZWQnIHwgJ2hpZGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29udHJvbCB7XHJcbiAgc3RhcnQ6IG51bWJlcjtcclxuICBlbmQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsIHtcclxuICBlbmFibGVkOiBib29sZWFuO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIC8vIG51bUhlaWdodD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ndUJ1dHRvbiB7XHJcbiAgdmlzaWJpbGl0eT86IEJ1dHRvblZpc2libGU7XHJcbiAgZWxhc3RpYz86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvdWNoIHtcclxuICBhY3RpdmU/OiBib29sZWFuO1xyXG4gIHN3aXBlOiBzdHJpbmc7XHJcbiAgdmVsb2NpdHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ndVRyYW5zZnJvbSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgeHMgPSAwLFxyXG4gICAgcHVibGljIHNtID0gMCxcclxuICAgIHB1YmxpYyBtZCA9IDAsXHJcbiAgICBwdWJsaWMgbGcgPSAwLFxyXG4gICAgcHVibGljIGFsbCA9IDBcclxuICApIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbENvbmZpZyB7XHJcbiAgZ3JpZDogTmd1VHJhbnNmcm9tO1xyXG4gIHNsaWRlPzogbnVtYmVyO1xyXG4gIHNwZWVkPzogbnVtYmVyO1xyXG4gIGludGVydmFsPzogQ2Fyb3VzZWxJbnRlcnZhbDtcclxuICBhbmltYXRpb24/OiBBbmltYXRlO1xyXG4gIHBvaW50PzogUG9pbnQ7XHJcbiAgdHlwZT86IHN0cmluZztcclxuICBsb2FkPzogbnVtYmVyO1xyXG4gIGN1c3RvbT86IEN1c3RvbTtcclxuICBsb29wPzogYm9vbGVhbjtcclxuICB0b3VjaD86IGJvb2xlYW47XHJcbiAgZWFzaW5nPzogc3RyaW5nO1xyXG4gIFJUTD86IGJvb2xlYW47XHJcbiAgYnV0dG9uPzogTmd1QnV0dG9uO1xyXG4gIHZlcnRpY2FsPzogVmVydGljYWw7XHJcbiAgdmVsb2NpdHk/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEN1c3RvbSA9ICdiYW5uZXInO1xyXG5leHBvcnQgdHlwZSBBbmltYXRlID0gJ2xhenknO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XHJcbiAgdmlzaWJsZTogYm9vbGVhbjtcclxuICBoaWRlT25TaW5nbGVTbGlkZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uIHtcclxuICB0eXBlPzogQW5pbWF0ZTtcclxuICBhbmltYXRlU3R5bGVzPzogQW5pbWF0aW9uU3R5bGVzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvblN0eWxlcyB7XHJcbiAgc3R5bGU/OiBzdHJpbmc7XHJcbiAgb3Blbj86IHN0cmluZztcclxuICBjbG9zZT86IHN0cmluZztcclxuICBzdGFnZ2VyPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhcm91c2VsSW50ZXJ2YWwge1xyXG4gIHRpbWluZzogbnVtYmVyO1xyXG4gIGluaXRpYWxEZWxheT86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsT3V0bGV0Q29udGV4dDxUPiB7XHJcbiAgLyoqIERhdGEgZm9yIHRoZSBub2RlLiAqL1xyXG4gICRpbXBsaWNpdDogVDtcclxuXHJcbiAgLyoqIERlcHRoIG9mIHRoZSBub2RlLiAqL1xyXG4gIGxldmVsOiBudW1iZXI7XHJcblxyXG4gIC8qKiBJbmRleCBsb2NhdGlvbiBvZiB0aGUgbm9kZS4gKi9cclxuICBpbmRleD86IG51bWJlcjtcclxuXHJcbiAgLyoqIExlbmd0aCBvZiB0aGUgbnVtYmVyIG9mIHRvdGFsIGRhdGFOb2Rlcy4gKi9cclxuICBjb3VudD86IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogVCkge1xyXG4gICAgdGhpcy4kaW1wbGljaXQgPSBkYXRhO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5ndUNhcm91c2VsIH0gZnJvbSAnLi9uZ3UtY2Fyb3VzZWwvbmd1LWNhcm91c2VsLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbFNlcnZpY2Uge1xyXG5cclxuXHJcbiAgY2Fyb3VzZWw6IE5ndUNhcm91c2VsPGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG4gIHNldENhcm91c2VsKGNhcm91c2VsOiBOZ3VDYXJvdXNlbDxhbnk+KSB7XHJcbiAgICB0aGlzLmNhcm91c2VsID0gY2Fyb3VzZWw7XHJcbiAgfVxyXG5cclxuICBnZXRDYXJvdXNlbCgpOiBOZ3VDYXJvdXNlbDxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmNhcm91c2VsO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW05ndUNhcm91c2VsSXRlbV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUge31cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tOZ3VDYXJvdXNlbE5leHRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlIHtcclxuICAvLyBASG9zdEJpbmRpbmcoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgLy8gQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgZGlzcGxheSA9ICdibG9jayc7XHJcbiAgLy8gQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIC8vIG9uQ2xpY2soKSB7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbTmd1Q2Fyb3VzZWxQcmV2XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSB7XHJcbiAgLy8gQEhvc3RCaW5kaW5nKCdkaXNhYmxlZCcpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIC8vIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIGRpc3BsYXkgPSAnYmxvY2snO1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbTmd1Q2Fyb3VzZWxQb2ludF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbFBvaW50RGlyZWN0aXZlIHt9XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbbmd1Q2Fyb3VzZWxEZWZdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmU8VD4ge1xyXG4gIHdoZW46IChpbmRleDogbnVtYmVyLCBub2RlRGF0YTogVCkgPT4gYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbbmd1Q2Fyb3VzZWxPdXRsZXRdJ1xyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxPdXRsZXQge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbbmd1Q2Fyb3VzZWxXcmFwcGVyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBFbGVtZW50UmVmPGFueT4pIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBEb0NoZWNrLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBpc0Rldk1vZGUsXHJcbiAgSXRlcmFibGVDaGFuZ2VSZWNvcmQsXHJcbiAgSXRlcmFibGVDaGFuZ2VzLFxyXG4gIEl0ZXJhYmxlRGlmZmVyLFxyXG4gIEl0ZXJhYmxlRGlmZmVycyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBQTEFURk9STV9JRCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRyYWNrQnlGdW5jdGlvbixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBlbXB0eSwgZnJvbUV2ZW50LCBpbnRlcnZhbCwgbWVyZ2UsIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwVG8sIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOZ3VDYXJvdXNlbENvbmZpZywgTmd1Q2Fyb3VzZWxPdXRsZXRDb250ZXh0LCBOZ3VDYXJvdXNlbFN0b3JlIH0gZnJvbSAnLi9uZ3UtY2Fyb3VzZWwnO1xyXG5pbXBvcnQgeyBOZ3VDYXJvdXNlbFNlcnZpY2UgfSBmcm9tICcuLi9uZ3UtY2Fyb3VzZWwuc2VydmljZSc7XHJcbmltcG9ydCB7XHJcbiAgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsT3V0bGV0LFxyXG4gIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbFdyYXBwZXJEaXJlY3RpdmVcclxufSBmcm9tICcuLi9uZ3UtY2Fyb3VzZWwuZGlyZWN0aXZlJztcclxuXHJcblxyXG4vLyBUT0RPIGNhbGN1bGVyIGxhIHRhaWxsZSBwb3NzaWJsZSBwb3VyIGxlIC5uZ3VjYXJzb3VsIGVuIGZvbmN0aW9uIGRlcyBib3V0b25zIHByZXYvbmV4dFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnbmd1LWNhcm91c2VsJyxcclxuICB0ZW1wbGF0ZVVybDogJ25ndS1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ25ndS1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHZpZXdQcm92aWRlcnM6IFtOZ3VDYXJvdXNlbFNlcnZpY2VdLFxyXG4gIHByb3ZpZGVyczogW05ndUNhcm91c2VsU2VydmljZV0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1jbGFzcy1zdWZmaXhcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsPFQ+IGV4dGVuZHMgTmd1Q2Fyb3VzZWxTdG9yZVxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xyXG4gIF9kYXRhU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgX2RhdGFEaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPHt9PjtcclxuICBzdHlsZWlkOiBzdHJpbmc7XHJcbiAgYWN0aXZlUG9pbnQ6IG51bWJlcjtcclxuICBpc0hvdmVyZWQgPSBmYWxzZTtcclxuICAvLyBpc0ZpcnN0c3MgPSAwO1xyXG4gIGFycmF5Q2hhbmdlczogSXRlcmFibGVDaGFuZ2VzPHt9PjtcclxuICBjYXJvdXNlbEludDogU3Vic2NyaXB0aW9uO1xyXG4gIEBWaWV3Q2hpbGQoTmd1Q2Fyb3VzZWxPdXRsZXQpXHJcbiAgX25vZGVPdXRsZXQ6IE5ndUNhcm91c2VsT3V0bGV0O1xyXG4gIEBWaWV3Q2hpbGQoTmd1Q2Fyb3VzZWxXcmFwcGVyRGlyZWN0aXZlKVxyXG4gIF9jYXJvdXNlbFdyYXBwZXI6IE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZTtcclxuICBwb2ludE51bWJlcnM6IEFycmF5PGFueT4gPSBbXTtcclxuICAvLyBpc0ZpcnN0c3MgPSAwO1xyXG4gIGxpc3RlbmVyMTogKCkgPT4gdm9pZDtcclxuICBsaXN0ZW5lcjI6ICgpID0+IHZvaWQ7XHJcbiAgbGlzdGVuZXIzOiAoKSA9PiB2b2lkO1xyXG4gIGxpc3RlbmVyNDogKCkgPT4gdm9pZDtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxyXG4gIEBPdXRwdXQoJ29uTW92ZScpXHJcbiAgcHVibGljIG9uTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Tmd1Q2Fyb3VzZWw8VD4+KCk7XHJcbiAgcHJpdmF0ZSBfZGVmYXVsdE5vZGVEZWY6IE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPGFueT4gfCBudWxsO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUpXHJcbiAgcHJpdmF0ZSBfZGVmRGlyZWM6IFF1ZXJ5TGlzdDxOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxhbnk+PjtcclxuICBwcml2YXRlIGRpcmVjdGlvblN5bTogc3RyaW5nO1xyXG4gIHByaXZhdGUgY2Fyb3VzZWxDc3NOb2RlOiBhbnk7XHJcbiAgcHJpdmF0ZSBwb2ludEluZGV4OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB3aXRoQW5pbSA9IHRydWU7XHJcbiAgQElucHV0KCdpbnB1dHMnKVxyXG4gIHByaXZhdGUgaW5wdXRzOiBOZ3VDYXJvdXNlbENvbmZpZztcclxuICBAT3V0cHV0KCdjYXJvdXNlbExvYWQnKVxyXG4gIHByaXZhdGUgY2Fyb3VzZWxMb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBWaWV3Q2hpbGQoJ25ndWNhcm91c2VsJywge3JlYWQ6IEVsZW1lbnRSZWZ9KVxyXG4gIHByaXZhdGUgY2Fyb3VzZWxNYWluMTogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbmd1SXRlbXNDb250YWluZXInLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgcHJpdmF0ZSBuZ3VJdGVtc0NvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZCgndG91Y2hDb250YWluZXInLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgcHJpdmF0ZSB0b3VjaENvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIF9pbnRlcnZhbENvbnRyb2xsZXIkID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xyXG4gIHByaXZhdGUgY2Fyb3VzZWw6IGFueTtcclxuICBwcml2YXRlIG9uUmVzaXplOiBhbnk7XHJcbiAgcHJpdmF0ZSBvblNjcm9sbGluZzogYW55O1xyXG4gIHByaXZhdGUgX3RyYWNrQnlGbjogVHJhY2tCeUZ1bmN0aW9uPFQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBjYXJvdXNlbFNlcnZpY2U6IE5ndUNhcm91c2VsU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuY2Fyb3VzZWxTZXJ2aWNlLnNldENhcm91c2VsKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgX2RhdGFTb3VyY2U6IGFueTtcclxuXHJcbiAgQElucHV0KCdkYXRhU291cmNlJylcclxuICBnZXQgZGF0YVNvdXJjZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2U7XHJcbiAgfVxyXG5cclxuICBzZXQgZGF0YVNvdXJjZShkYXRhOiBhbnkpIHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsIHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICAgIC8vIHRoaXMuaXNGaXJzdHNzKys7XHJcbiAgICAgIHRoaXMuX3N3aXRjaERhdGFTb3VyY2UoZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIFRoZSBzZXR0ZXIgaXMgdXNlZCB0byBjYXRjaCB0aGUgYnV0dG9uIGlmIHRoZSBidXR0b24gaGFzIG5nSWZcclxuICAgKiBpc3N1ZSBpZCAjOTFcclxuICAgKi9cclxuICBAQ29udGVudENoaWxkKE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSwge3JlYWQ6IEVsZW1lbnRSZWZ9KVxyXG4gIHNldCBuZXh0QnRuKGJ0bjogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5saXN0ZW5lcjIgJiYgdGhpcy5saXN0ZW5lcjIoKTtcclxuICAgIGlmIChidG4pIHtcclxuICAgICAgdGhpcy5saXN0ZW5lcjIgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oYnRuLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsICgpID0+XHJcbiAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoMSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBUaGUgc2V0dGVyIGlzIHVzZWQgdG8gY2F0Y2ggdGhlIGJ1dHRvbiBpZiB0aGUgYnV0dG9uIGhhcyBuZ0lmXHJcbiAgICogaXNzdWUgaWQgIzkxXHJcbiAgICovXHJcbiAgQENvbnRlbnRDaGlsZChOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsIHtyZWFkOiBFbGVtZW50UmVmfSlcclxuICBzZXQgcHJldkJ0bihidG46IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMubGlzdGVuZXIxICYmIHRoaXMubGlzdGVuZXIxKCk7XHJcbiAgICBpZiAoYnRuKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXIxID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKGJ0bi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoKSA9PlxyXG4gICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKDApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmFja2luZyBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCB0byBjaGVjayB0aGUgZGlmZmVyZW5jZXMgaW4gZGF0YSBjaGFuZ2VzLiBVc2VkIHNpbWlsYXJseVxyXG4gICAqIHRvIGBuZ0ZvcmAgYHRyYWNrQnlgIGZ1bmN0aW9uLiBPcHRpbWl6ZSBJdGVtcyBvcGVyYXRpb25zIGJ5IGlkZW50aWZ5aW5nIGEgSXRlbXMgYmFzZWQgb24gaXRzIGRhdGFcclxuICAgKiByZWxhdGl2ZSB0byB0aGUgZnVuY3Rpb24gdG8ga25vdyBpZiBhIEl0ZW1zIHNob3VsZCBiZSBhZGRlZC9yZW1vdmVkL21vdmVkLlxyXG4gICAqIEFjY2VwdHMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBwYXJhbWV0ZXJzLCBgaW5kZXhgIGFuZCBgaXRlbWAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdHJhY2tCeSgpOiBUcmFja0J5RnVuY3Rpb248VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RyYWNrQnlGbjtcclxuICB9XHJcblxyXG4gIHNldCB0cmFja0J5KGZuOiBUcmFja0J5RnVuY3Rpb248VD4pIHtcclxuICAgIGlmIChcclxuICAgICAgaXNEZXZNb2RlKCkgJiZcclxuICAgICAgZm4gIT0gbnVsbCAmJlxyXG4gICAgICB0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicgJiZcclxuICAgICAgPGFueT5jb25zb2xlICYmXHJcbiAgICAgIDxhbnk+Y29uc29sZS53YXJuXHJcbiAgICApIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGB0cmFja0J5IG11c3QgYmUgYSBmdW5jdGlvbiwgYnV0IHJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoZm4pfS5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl90cmFja0J5Rm4gPSBmbjtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5fZGF0YURpZmZlciA9IHRoaXMuX2RpZmZlcnNcclxuICAgICAgLmZpbmQoW10pXHJcbiAgICAgIC5jcmVhdGUoKF9pOiBudW1iZXIsIGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYWNrQnkgPyB0aGlzLnRyYWNrQnkoaXRlbS5kYXRhSW5kZXgsIGl0ZW0uZGF0YSkgOiBpdGVtO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIHRoaXMuYXJyYXlDaGFuZ2VzID0gdGhpcy5fZGF0YURpZmZlci5kaWZmKHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICBpZiAodGhpcy5hcnJheUNoYW5nZXMgJiYgdGhpcy5fZGVmRGlyZWMpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ0NoYW5nZXMgZGV0ZWN0ZWQhJyk7XHJcbiAgICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNhcm91c2VsID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuX2lucHV0VmFsaWRhdGlvbigpO1xyXG5cclxuICAgIHRoaXMuY2Fyb3VzZWxDc3NOb2RlID0gdGhpcy5fY3JlYXRlU3R5bGVFbGVtKCk7XHJcblxyXG4gICAgLy8gdGhpcy5fYnV0dG9uQ29udHJvbCgpO1xyXG5cclxuICAgIGlmICh3aW5kb3cpIHtcclxuICAgICAgdGhpcy5fY2Fyb3VzZWxJbnRlcnZhbCgpO1xyXG4gICAgICBpZiAoIXRoaXMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuX3RvdWNoKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saXN0ZW5lcjMgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdyZXNpemUnLCBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5fb25SZXNpemluZyhldmVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9vbldpbmRvd1Njcm9sbGluZygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpO1xyXG5cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKiBVc2VkIHRvIHJlc2V0IHRoZSBjYXJvdXNlbCAqL1xyXG4gIHB1YmxpYyByZXNldCh3aXRoT3V0QW5pbWF0aW9uPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgd2l0aE91dEFuaW1hdGlvbiAmJiAodGhpcy53aXRoQW5pbSA9IGZhbHNlKTtcclxuICAgIGlmICh0aGlzLmNhcm91c2VsQ3NzTm9kZSkge1xyXG4gICAgICB0aGlzLmNhcm91c2VsQ3NzTm9kZS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgIHRoaXMubW92ZVRvKDApO1xyXG4gICAgICB0aGlzLl9jYXJvdXNlbFBvaW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogdGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHNjb2xsIHRoZSBjYXJvdXNlbCB3aGVuIHBvaW50IGlzIGNsaWNrZWQgKi9cclxuICBwdWJsaWMgbW92ZVRvKHNsaWRlOiBudW1iZXIsIHdpdGhPdXRBbmltYXRpb24/OiBib29sZWFuKSB7XHJcbiAgICAvLyBzbGlkZSA9IHNsaWRlIC0gMTtcclxuICAgIHdpdGhPdXRBbmltYXRpb24gJiYgKHRoaXMud2l0aEFuaW0gPSBmYWxzZSk7XHJcbiAgICBpZiAodGhpcy5hY3RpdmVQb2ludCAhPT0gc2xpZGUgJiYgc2xpZGUgPCB0aGlzLnBvaW50SW5kZXgpIHtcclxuICAgICAgbGV0IHNsaWRlcmVtYWlucztcclxuICAgICAgY29uc3QgYnRucyA9IHRoaXMuY3VycmVudFNsaWRlIDwgc2xpZGUgPyAxIDogMDtcclxuXHJcbiAgICAgIHN3aXRjaCAoc2xpZGUpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xyXG4gICAgICAgICAgc2xpZGVyZW1haW5zID0gc2xpZGUgKiB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIHRoaXMucG9pbnRJbmRleCAtIDE6XHJcbiAgICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xyXG4gICAgICAgICAgc2xpZGVyZW1haW5zID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtIHRoaXMuaXRlbXM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcclxuICAgICAgICAgIHNsaWRlcmVtYWlucyA9IHNsaWRlICogdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsVHdvKGJ0bnMsIHNsaWRlcmVtYWlucywgdGhpcy5zcGVlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjbGVhckludGVydmFsKHRoaXMuY2Fyb3VzZWxJbnQpO1xyXG4gICAgdGhpcy5jYXJvdXNlbEludCAmJiB0aGlzLmNhcm91c2VsSW50LnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmNhcm91c2VsTG9hZC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5vbk1vdmUuY29tcGxldGUoKTtcclxuXHJcbiAgICAvKiogcmVtb3ZlIGxpc3RlbmVycyAqL1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHN0ciA9IGBsaXN0ZW5lciR7aX1gO1xyXG4gICAgICB0aGlzW3N0cl0gJiYgdGhpc1tzdHJdKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zd2l0Y2hEYXRhU291cmNlKGRhdGFTb3VyY2U6IGFueSk6IGFueSB7XHJcbiAgICB0aGlzLl9kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcclxuICAgIGlmICh0aGlzLl9kZWZEaXJlYykge1xyXG4gICAgICB0aGlzLl9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJOb2RlQ2hhbmdlcyhcclxuICAgIGRhdGE6IGFueVtdLFxyXG4gICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lclxyXG4gICkge1xyXG4gICAgaWYgKCF0aGlzLmFycmF5Q2hhbmdlcykgcmV0dXJuO1xyXG4gICAgdGhpcy5hcnJheUNoYW5nZXMuZm9yRWFjaE9wZXJhdGlvbihcclxuICAgICAgKFxyXG4gICAgICAgIGl0ZW06IEl0ZXJhYmxlQ2hhbmdlUmVjb3JkPGFueT4sXHJcbiAgICAgICAgYWRqdXN0ZWRQcmV2aW91c0luZGV4OiBudW1iZXIsXHJcbiAgICAgICAgY3VycmVudEluZGV4OiBudW1iZXJcclxuICAgICAgKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuX2dldE5vZGVEZWYoZGF0YVtjdXJyZW50SW5kZXhdLCBjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIGlmIChpdGVtLnByZXZpb3VzSW5kZXggPT09IG51bGwpIHtcclxuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgTmd1Q2Fyb3VzZWxPdXRsZXRDb250ZXh0PGFueT4oZGF0YVtjdXJyZW50SW5kZXhdKTtcclxuICAgICAgICAgIGNvbnRleHQuaW5kZXggPSBjdXJyZW50SW5kZXg7XHJcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhcclxuICAgICAgICAgICAgbm9kZS50ZW1wbGF0ZSxcclxuICAgICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgICAgY3VycmVudEluZGV4XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEluZGV4ID09PSBudWxsKSB7XHJcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLnJlbW92ZShhZGp1c3RlZFByZXZpb3VzSW5kZXgpO1xyXG4gICAgICAgICAgdmlld0NvbnRhaW5lci5jbGVhcigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCB2aWV3ID0gdmlld0NvbnRhaW5lci5nZXQoYWRqdXN0ZWRQcmV2aW91c0luZGV4KTtcclxuICAgICAgICAgIHZpZXdDb250YWluZXIubW92ZSh2aWV3LCBjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHRoaXMuX3VwZGF0ZUl0ZW1JbmRleENvbnRleHQoKTtcclxuXHJcbiAgICBpZiAodGhpcy5jYXJvdXNlbCkge1xyXG4gICAgICB0aGlzLl9zdG9yZUNhcm91c2VsRGF0YSgpO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhU291cmNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIGluZGV4LXJlbGF0ZWQgY29udGV4dCBmb3IgZWFjaCByb3cgdG8gcmVmbGVjdCBhbnkgY2hhbmdlcyBpbiB0aGUgaW5kZXggb2YgdGhlIHJvd3MsXHJcbiAgICogZS5nLiBmaXJzdC9sYXN0L2V2ZW4vb2RkLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3VwZGF0ZUl0ZW1JbmRleENvbnRleHQoKSB7XHJcbiAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyO1xyXG4gICAgZm9yIChcclxuICAgICAgbGV0IHJlbmRlckluZGV4ID0gMCwgY291bnQgPSB2aWV3Q29udGFpbmVyLmxlbmd0aDtcclxuICAgICAgcmVuZGVySW5kZXggPCBjb3VudDtcclxuICAgICAgcmVuZGVySW5kZXgrK1xyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChyZW5kZXJJbmRleCkgYXMgYW55O1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcclxuICAgICAgY29udGV4dC5jb3VudCA9IGNvdW50O1xyXG5cclxuICAgICAgY29udGV4dC5maXJzdCA9IHJlbmRlckluZGV4ID09PSAwO1xyXG4gICAgICBjb250ZXh0Lmxhc3QgPSByZW5kZXJJbmRleCA9PT0gY291bnQgLSAxO1xyXG4gICAgICBjb250ZXh0LmV2ZW4gPSByZW5kZXJJbmRleCAlIDIgPT09IDA7XHJcbiAgICAgIGNvbnRleHQub2RkID0gIWNvbnRleHQuZXZlbjtcclxuICAgICAgY29udGV4dC5pbmRleCA9IHJlbmRlckluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0Tm9kZURlZihkYXRhOiBhbnksIGk6IG51bWJlcik6IE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPGFueT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5fZGVmRGlyZWMpO1xyXG4gICAgaWYgKHRoaXMuX2RlZkRpcmVjLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZGVmRGlyZWMuZmlyc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm9kZURlZiA9XHJcbiAgICAgIHRoaXMuX2RlZkRpcmVjLmZpbmQoZGVmID0+IGRlZi53aGVuICYmIGRlZi53aGVuKGksIGRhdGEpKSB8fFxyXG4gICAgICB0aGlzLl9kZWZhdWx0Tm9kZURlZjtcclxuXHJcbiAgICByZXR1cm4gbm9kZURlZjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29ic2VydmVSZW5kZXJDaGFuZ2VzKCkge1xyXG4gICAgbGV0IGRhdGFTdHJlYW06IE9ic2VydmFibGU8YW55W10+IHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIGlmICh0aGlzLl9kYXRhU291cmNlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xyXG4gICAgICBkYXRhU3RyZWFtID0gdGhpcy5fZGF0YVNvdXJjZTtcclxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9kYXRhU291cmNlKSkge1xyXG4gICAgICBkYXRhU3RyZWFtID0gb2YodGhpcy5fZGF0YVNvdXJjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGFTdHJlYW0pIHtcclxuICAgICAgdGhpcy5fZGF0YVN1YnNjcmlwdGlvbiA9IGRhdGFTdHJlYW1cclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyTm9kZUNoYW5nZXMoZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLmlzTGFzdCA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5wdXRWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy50eXBlID0gdGhpcy5pbnB1dHMuZ3JpZC5hbGwgIT09IDAgPyAnZml4ZWQnIDogJ3Jlc3BvbnNpdmUnO1xyXG4gICAgdGhpcy5sb29wID0gdGhpcy5pbnB1dHMubG9vcCB8fCBmYWxzZTtcclxuICAgIHRoaXMuaW5wdXRzLmVhc2luZyA9IHRoaXMuaW5wdXRzLmVhc2luZyB8fCAnY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknO1xyXG4gICAgdGhpcy50b3VjaC5hY3RpdmUgPSB0aGlzLmlucHV0cy50b3VjaCB8fCBmYWxzZTtcclxuICAgIHRoaXMuUlRMID0gdGhpcy5pbnB1dHMuUlRMID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IHRoaXMuaW5wdXRzLmludGVydmFsIHx8IG51bGw7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID1cclxuICAgICAgdHlwZW9mIHRoaXMuaW5wdXRzLnZlbG9jaXR5ID09PSAnbnVtYmVyJ1xyXG4gICAgICAgID8gdGhpcy5pbnB1dHMudmVsb2NpdHlcclxuICAgICAgICA6IHRoaXMudmVsb2NpdHk7XHJcblxyXG4gICAgaWYgKHRoaXMuaW5wdXRzLnZlcnRpY2FsICYmIHRoaXMuaW5wdXRzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy52ZXJ0aWNhbC5lbmFibGVkID0gdGhpcy5pbnB1dHMudmVydGljYWwuZW5hYmxlZDtcclxuICAgICAgdGhpcy52ZXJ0aWNhbC5oZWlnaHQgPSB0aGlzLmlucHV0cy52ZXJ0aWNhbC5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpcmVjdGlvblN5bSA9IHRoaXMuUlRMID8gJycgOiAnLSc7XHJcbiAgICB0aGlzLnBvaW50ID1cclxuICAgICAgdGhpcy5pbnB1dHMucG9pbnQgJiYgdHlwZW9mIHRoaXMuaW5wdXRzLnBvaW50LnZpc2libGUgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgPyB0aGlzLmlucHV0cy5wb2ludC52aXNpYmxlXHJcbiAgICAgICAgOiB0cnVlO1xyXG5cclxuICAgIHRoaXMuX2Nhcm91c2VsU2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb25SZXNpemluZyhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5vblJlc2l6ZSk7XHJcbiAgICB0aGlzLm9uUmVzaXplID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmRldmljZVdpZHRoICE9PSBldmVudC50YXJnZXQub3V0ZXJXaWR0aCkge1xyXG4gICAgICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCBgYCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcmVDYXJvdXNlbERhdGEoKTtcclxuICAgICAgfVxyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcblxyXG4gIC8qKiBHZXQgVG91Y2ggaW5wdXQgKi9cclxuICBwcml2YXRlIF90b3VjaCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0cy50b3VjaCkge1xyXG4gICAgICBjb25zdCBoYW1tZXJ0aW1lID0gbmV3IEhhbW1lcih0aGlzLnRvdWNoQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICBoYW1tZXJ0aW1lLmdldCgncGFuJykuc2V0KHtkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fSE9SSVpPTlRBTH0pO1xyXG5cclxuICAgICAgaGFtbWVydGltZS5vbigncGFuc3RhcnQnLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxXaWR0aCA9IHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAvLyB0aGlzLnRvdWNoVHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm1bdGhpcy5kZXZpY2VUeXBlXTtcclxuICAgICAgICB0aGlzLmRleFZhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5fc2V0U3R5bGUodGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsICcnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW51cCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5sZWZ0JywgZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGhhbW1lcnRpbWUub24oJ3BhbmRvd24nLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fdG91Y2hIYW5kbGluZygncGFucmlnaHQnLCBldik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFubGVmdCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5sZWZ0JywgZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGhhbW1lcnRpbWUub24oJ3BhbnJpZ2h0JywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbnJpZ2h0JywgZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8qaGFtbWVydGltZS5vbigncGFuZW5kJywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoTWF0aC5hYnMoZXYudmVsb2NpdHkpID49IHRoaXMudmVsb2NpdHkpIHtcclxuICAgICAgICAgIHRoaXMudG91Y2gudmVsb2NpdHkgPSBldi52ZWxvY2l0eTtcclxuICAgICAgICAgIGxldCBkaXJlYyA9IDA7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuUlRMKSB7XHJcbiAgICAgICAgICAgIGRpcmVjID0gdGhpcy50b3VjaC5zd2lwZSA9PT0gJ3BhbnJpZ2h0JyA/IDAgOiAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlyZWMgPSB0aGlzLnRvdWNoLnN3aXBlID09PSAncGFucmlnaHQnID8gMSA6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZShkaXJlYyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZGV4VmFsID0gMDtcclxuICAgICAgICAgIHRoaXMuX3NldFN0eWxlKFxyXG4gICAgICAgICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJyxcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybSAzMjRtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSdcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAvLyB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTsqL1xyXG4gICAgICBoYW1tZXJ0aW1lLm9uKCdoYW1tZXIuaW5wdXQnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAvLyBhbGxvdyBuZXN0ZWQgdG91Y2ggZXZlbnRzIHRvIG5vIHByb3BhZ2F0ZSwgdGhpcyBtYXkgaGF2ZSBvdGhlciBzaWRlIGFmZmVjdHMgYnV0IHdvcmtzIGZvciBub3cuXHJcbiAgICAgICAgLy8gVE9ETzogSXQgaXMgcHJvYmFibHkgYmV0dGVyIHRvIGNoZWNrIHRoZSBzb3VyY2UgZWxlbWVudCBvZiB0aGUgZXZlbnQgYW5kIG9ubHkgYXBwbHkgdGhlIGhhbmRsZSB0byB0aGUgY29ycmVjdCBjYXJvdXNlbFxyXG4gICAgICAgIGV2LnNyY0V2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBoYW5kbGUgdG91Y2ggaW5wdXQgKi9cclxuICBwcml2YXRlIF90b3VjaEhhbmRsaW5nKGU6IHN0cmluZywgZXY6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gdmVydGljYWwgdG91Y2ggZXZlbnRzIHNlZW0gdG8gY2F1c2UgdG8gcGFuc3RhcnQgZXZlbnQgd2l0aCBhbiBvZGQgZGVsdGFcclxuICAgIC8vIGFuZCBhIGNlbnRlciBvZiB7eDowLHk6MH0gc28gdGhpcyB3aWxsIGlnbm9yZSB0aGVtXHJcbiAgICBpZiAoZXYuY2VudGVyLnggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ID0gTWF0aC5hYnModGhpcy52ZXJ0aWNhbC5lbmFibGVkID8gZXYuZGVsdGFZIDogZXYuZGVsdGFYKTtcclxuICAgIGxldCB2YWx0ID0gZXYgLSB0aGlzLmRleFZhbDtcclxuICAgIHZhbHQgPVxyXG4gICAgICB0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJ1xyXG4gICAgICAgID8gKE1hdGguYWJzKGV2IC0gdGhpcy5kZXhWYWwpIC9cclxuICAgICAgICAodGhpcy52ZXJ0aWNhbC5lbmFibGVkXHJcbiAgICAgICAgICA/IHRoaXMudmVydGljYWwuaGVpZ2h0XHJcbiAgICAgICAgICA6IHRoaXMuY2Fyb3VzZWxXaWR0aCkpICpcclxuICAgICAgICAxMDBcclxuICAgICAgICA6IHZhbHQ7XHJcbiAgICB0aGlzLmRleFZhbCA9IGV2O1xyXG4gICAgdGhpcy50b3VjaC5zd2lwZSA9IGU7XHJcbiAgICB0aGlzLl9zZXRUb3VjaFRyYW5zZnJvbShlLCB2YWx0KTtcclxuICAgIHRoaXMuX3NldFRyYW5zZm9ybUZyb21Ub3VjaCgpO1xyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldFRvdWNoVHJhbnNmcm9tKGU6IHN0cmluZywgdmFsdDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLlJUTCA/ICdwYW5yaWdodCcgOiAncGFubGVmdCc7XHJcbiAgICB0aGlzLnRvdWNoVHJhbnNmb3JtID1cclxuICAgICAgZSA9PT0gY29uZGl0aW9uID8gdmFsdCArIHRoaXMudG91Y2hUcmFuc2Zvcm0gOiB0aGlzLnRvdWNoVHJhbnNmb3JtIC0gdmFsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldFRyYW5zZm9ybUZyb21Ub3VjaCgpIHtcclxuXHJcbiAgICBpZiAodGhpcy50b3VjaFRyYW5zZm9ybSA8IDApIHtcclxuICAgICAgdGhpcy50b3VjaFRyYW5zZm9ybSA9IDA7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScgPyAnJScgOiAncHgnO1xyXG5cclxuICAgIGNvbnN0IG1heFRyYW5zbGF0ZSA9ICh0aGlzLml0ZW1XaWR0aCAqIHRoaXMuX2RhdGFTb3VyY2UubGVuZ3RoKSAtIHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgY29uc29sZS5sb2codGhpcy50b3VjaFRyYW5zZm9ybSwgbWF4VHJhbnNsYXRlLCB0aGlzLml0ZW1XaWR0aCwgdGhpcy5fZGF0YVNvdXJjZS5sZW5ndGgsIHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLml0ZW1XaWR0aCAqIHRoaXMudG91Y2hUcmFuc2Zvcm0gLyAxMDApO1xyXG4gICAgaWYgKG1heFRyYW5zbGF0ZSA8PSB0aGlzLnRvdWNoVHJhbnNmb3JtKSB7XHJcbiAgICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPSBtYXhUcmFuc2xhdGU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uTW92ZS5lbWl0KHRoaXMpO1xyXG4gICAgdGhpcy5fc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgIHRoaXMudmVydGljYWwuZW5hYmxlZFxyXG4gICAgICAgID8gYHRyYW5zbGF0ZTNkKDAsICR7dGhpcy5kaXJlY3Rpb25TeW19JHt0aGlzLnRvdWNoVHJhbnNmb3JtfSR7dHlwZX0sIDApYFxyXG4gICAgICAgIDogYHRyYW5zbGF0ZTNkKCR7dGhpcy5kaXJlY3Rpb25TeW19JHt0aGlzLnRvdWNoVHJhbnNmb3JtfSR7dHlwZX0sIDAsIDApYFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKiB0aGlzIGZuIHVzZWQgdG8gZGlzYWJsZSB0aGUgaW50ZXJ2YWwgd2hlbiBpdCBpcyBub3Qgb24gdGhlIHZpZXdwb3J0ICovXHJcbiAgcHJpdmF0ZSBfb25XaW5kb3dTY3JvbGxpbmcoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0b3AgPSB0aGlzLmNhcm91c2VsLm9mZnNldFRvcDtcclxuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIGNvbnN0IGhlaWdodHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBjb25zdCBjYXJvdXNlbEhlaWdodCA9IHRoaXMuY2Fyb3VzZWwub2Zmc2V0SGVpZ2h0O1xyXG4gICAgY29uc3QgaXNDYXJvdXNlbE9uU2NyZWVuID1cclxuICAgICAgdG9wIDw9IHNjcm9sbFkgKyBoZWlnaHR0IC0gY2Fyb3VzZWxIZWlnaHQgLyA0ICYmXHJcbiAgICAgIHRvcCArIGNhcm91c2VsSGVpZ2h0IC8gMiA+PSBzY3JvbGxZO1xyXG5cclxuICAgIGlmIChpc0Nhcm91c2VsT25TY3JlZW4pIHtcclxuICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJC5uZXh0KDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJC5uZXh0KDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIHN0b3JlIGRhdGEgYmFzZWQgb24gd2lkdGggb2YgdGhlIHNjcmVlbiBmb3IgdGhlIGNhcm91c2VsICovXHJcbiAgcHJpdmF0ZSBfc3RvcmVDYXJvdXNlbERhdGEoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRldmljZVdpZHRoID0gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKVxyXG4gICAgICA/IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICAgIDogMTIwMDtcclxuXHJcbiAgICB0aGlzLmNhcm91c2VsV2lkdGggPSB0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScpIHtcclxuICAgICAgdGhpcy5kZXZpY2VUeXBlID1cclxuICAgICAgICB0aGlzLmRldmljZVdpZHRoID49IDEyMDBcclxuICAgICAgICAgID8gJ2xnJ1xyXG4gICAgICAgICAgOiB0aGlzLmRldmljZVdpZHRoID49IDk5MlxyXG4gICAgICAgICAgPyAnbWQnXHJcbiAgICAgICAgICA6IHRoaXMuZGV2aWNlV2lkdGggPj0gNzY4XHJcbiAgICAgICAgICAgID8gJ3NtJ1xyXG4gICAgICAgICAgICA6ICd4cyc7XHJcblxyXG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5pbnB1dHMuZ3JpZFt0aGlzLmRldmljZVR5cGVdO1xyXG4gICAgICB0aGlzLml0ZW1XaWR0aCA9IHRoaXMuY2Fyb3VzZWxXaWR0aCAvIHRoaXMuaXRlbXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLml0ZW1zID0gTWF0aC5jZWlsKHRoaXMuY2Fyb3VzZWxXaWR0aCAvIHRoaXMuaW5wdXRzLmdyaWQuYWxsKTtcclxuICAgICAgdGhpcy5pdGVtV2lkdGggPSB0aGlzLmlucHV0cy5ncmlkLmFsbDtcclxuICAgICAgdGhpcy5kZXZpY2VUeXBlID0gJ2FsbCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zbGlkZUl0ZW1zID0gKyh0aGlzLmlucHV0cy5zbGlkZSA8IHRoaXMuaXRlbXNcclxuICAgICAgPyB0aGlzLmlucHV0cy5zbGlkZVxyXG4gICAgICA6IHRoaXMuaXRlbXMpO1xyXG4gICAgdGhpcy5sb2FkID1cclxuICAgICAgdGhpcy5pbnB1dHMubG9hZCA+PSB0aGlzLnNsaWRlSXRlbXMgPyB0aGlzLmlucHV0cy5sb2FkIDogdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgdGhpcy5zcGVlZCA9XHJcbiAgICAgIHRoaXMuaW5wdXRzLnNwZWVkICYmIHRoaXMuaW5wdXRzLnNwZWVkID4gLTEgPyB0aGlzLmlucHV0cy5zcGVlZCA6IDQwMDtcclxuXHJcbiAgICB0aGlzLl9jYXJvdXNlbFBvaW50KCk7XHJcbiAgfVxyXG5cclxuICAvKiogSW5pdCBjYXJvdXNlbCBwb2ludCAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsUG9pbnQoKTogdm9pZCB7XHJcbiAgICAvLyBkZWJ1Z2dlcjtcclxuICAgIC8vIGlmICh0aGlzLnVzZXJEYXRhLnBvaW50LnZpc2libGUgPT09IHRydWUpIHtcclxuICAgIGNvbnN0IE5vcyA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSAodGhpcy5pdGVtcyAtIHRoaXMuc2xpZGVJdGVtcyk7XHJcbiAgICB0aGlzLnBvaW50SW5kZXggPSBNYXRoLmNlaWwoTm9zIC8gdGhpcy5zbGlkZUl0ZW1zKTtcclxuICAgIGNvbnN0IHBvaW50ZXJzID0gW107XHJcblxyXG4gICAgaWYgKHRoaXMucG9pbnRJbmRleCA+IDEgfHwgIXRoaXMuaW5wdXRzLnBvaW50LmhpZGVPblNpbmdsZVNsaWRlKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb2ludEluZGV4OyBpKyspIHtcclxuICAgICAgICBwb2ludGVycy5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnBvaW50TnVtYmVycyA9IHBvaW50ZXJzO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wb2ludE51bWJlcnMpO1xyXG4gICAgdGhpcy5fY2Fyb3VzZWxQb2ludEFjdGl2ZXIoKTtcclxuICAgIGlmICh0aGlzLnBvaW50SW5kZXggPD0gMSkge1xyXG4gICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFNsaWRlID09PSAwICYmICF0aGlzLmxvb3ApIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIC8qKiBjaGFuZ2UgdGhlIGFjdGl2ZSBwb2ludCBpbiBjYXJvdXNlbCAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaSA9IE1hdGguY2VpbCh0aGlzLmN1cnJlbnRTbGlkZSAvIHRoaXMuc2xpZGVJdGVtcyk7XHJcbiAgICB0aGlzLmFjdGl2ZVBvaW50ID0gaTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKiBzZXQgdGhlIHN0eWxlIG9mIHRoZSBjYXJvdXNlbCBiYXNlZCB0aGUgaW5wdXRzIGRhdGEgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFNpemUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRva2VuID0gdGhpcy5fZ2VuZXJhdGVJRCgpO1xyXG4gICAgbGV0IGRpc20gPSAnJztcclxuICAgIHRoaXMuc3R5bGVpZCA9IGAuJHtcclxuICAgICAgdGhpcy50b2tlblxyXG4gICAgICB9ID4gLmNhcm91c2VsLXdyYXBwZXIgPiAubmd1Y2Fyb3VzZWwgPiAubmd1LXRvdWNoLWNvbnRhaW5lciA+IC5uZ3VjYXJvdXNlbC1pdGVtc2A7XHJcblxyXG4gICAgaWYgKHRoaXMuaW5wdXRzLmN1c3RvbSA9PT0gJ2Jhbm5lcicpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgJ2Jhbm5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlucHV0cy5hbmltYXRpb24gPT09ICdsYXp5Jykge1xyXG4gICAgICBkaXNtICs9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7dHJhbnNpdGlvbjogdHJhbnNmb3JtIC42cyBlYXNlO31gO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpdGVtU3R5bGUgPSAnJztcclxuICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX3hzID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxyXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC54c31weH1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfc20gPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXHJcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLnNtfXB4fWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9tZCA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcclxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQubWR9cHh9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX2xnID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxyXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC5sZ31weH1gO1xyXG5cclxuICAgICAgaXRlbVN0eWxlID0gYEBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXske2l0ZW1XaWR0aF94c319XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpeyR7aXRlbVdpZHRoX3NtfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7JHtpdGVtV2lkdGhfbWR9fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7JHtpdGVtV2lkdGhfbGd9fWA7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF94cyA9XHJcbiAgICAgICAgdGhpcy5pbnB1dHMudHlwZSA9PT0gJ21vYmlsZSdcclxuICAgICAgICAgID8gYCR7dGhpcy5zdHlsZWlkfSAuaXRlbSB7ZmxleDogMCAwICR7OTUgL1xyXG4gICAgICAgICAgK3RoaXMuaW5wdXRzLmdyaWQueHN9JTsgd2lkdGg6ICR7OTUgLyArdGhpcy5pbnB1dHMuZ3JpZC54c30lO31gXHJcbiAgICAgICAgICA6IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXHJcbiAgICAgICAgICArdGhpcy5pbnB1dHMuZ3JpZC54c30lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC54c30lO31gO1xyXG5cclxuICAgICAgY29uc3QgaXRlbVdpZHRoX3NtID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtmbGV4OiAwIDAgJHsxMDAgL1xyXG4gICAgICArdGhpcy5pbnB1dHMuZ3JpZC5zbX0lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC5zbX0lfWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9tZCA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cclxuICAgICAgK3RoaXMuaW5wdXRzLmdyaWQubWR9JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQubWR9JX1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfbGcgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXHJcbiAgICAgICt0aGlzLmlucHV0cy5ncmlkLmxnfSU7IHdpZHRoOiAkezEwMCAvICt0aGlzLmlucHV0cy5ncmlkLmxnfSV9YDtcclxuXHJcbiAgICAgIGl0ZW1TdHlsZSA9IGBAbWVkaWEgKG1heC13aWR0aDo3NjdweCl7JHtpdGVtV2lkdGhfeHN9fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXske2l0ZW1XaWR0aF9zbX19XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6OTkycHgpeyR7aXRlbVdpZHRoX21kfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpeyR7aXRlbVdpZHRoX2xnfX1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbVN0eWxlID0gYCR7dGhpcy5zdHlsZWlkfSAuaXRlbSB7ZmxleDogMCAwICR7XHJcbiAgICAgICAgdGhpcy5pbnB1dHMuZ3JpZC5hbGxcclxuICAgICAgICB9cHg7IHdpZHRoOiAke3RoaXMuaW5wdXRzLmdyaWQuYWxsfXB4O31gO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNhcm91c2VsLCB0aGlzLnRva2VuKTtcclxuICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXHJcbiAgICAgICAgdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICduZ3V2ZXJ0aWNhbCdcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbE1haW4xLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ2hlaWdodCcsXHJcbiAgICAgICAgYCR7dGhpcy52ZXJ0aWNhbC5oZWlnaHR9cHhgXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXHJcbiAgICB0aGlzLlJUTCAmJlxyXG4gICAgIXRoaXMudmVydGljYWwuZW5hYmxlZCAmJlxyXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgJ25ndXJ0bCcpO1xyXG4gICAgdGhpcy5fY3JlYXRlU3R5bGVFbGVtKGAke2Rpc219ICR7aXRlbVN0eWxlfWApO1xyXG4gICAgdGhpcy5fc3RvcmVDYXJvdXNlbERhdGEoKTtcclxuICB9XHJcblxyXG4gIC8qKiBsb2dpYyB0byBzY3JvbGwgdGhlIGNhcm91c2VsIHN0ZXAgMSAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsU2Nyb2xsT25lKEJ0bjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBsZXQgaXRlbVNwZWVkID0gdGhpcy5zcGVlZDtcclxuICAgIGxldCB0cmFuc2xhdGVYdmFsLFxyXG4gICAgICBjdXJyZW50U2xpZGUgPSAwO1xyXG4gICAgY29uc3QgdG91Y2hNb3ZlID0gTWF0aC5jZWlsKHRoaXMuZGV4VmFsIC8gdGhpcy5pdGVtV2lkdGgpO1xyXG4gICAgdGhpcy5fc2V0U3R5bGUodGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJycpO1xyXG5cclxuICAgIGlmICh0aGlzLnBvaW50SW5kZXggPT09IDEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmIChCdG4gPT09IDAgJiYgKCghdGhpcy5sb29wICYmICF0aGlzLmlzRmlyc3QpIHx8IHRoaXMubG9vcCkpIHtcclxuICAgICAgY29uc3Qgc2xpZGUgPSB0aGlzLnNsaWRlSXRlbXMgKiB0aGlzLnBvaW50SW5kZXg7XHJcblxyXG4gICAgICBjb25zdCBjdXJyZW50U2xpZGVEID0gdGhpcy5jdXJyZW50U2xpZGUgLSB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgIGNvbnN0IE1vdmVTbGlkZSA9IGN1cnJlbnRTbGlkZUQgKyB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLml0ZW1zO1xyXG4gICAgICAgIGl0ZW1TcGVlZCA9IDQwMDtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2xpZGVJdGVtcyA+PSBNb3ZlU2xpZGUpIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSB0cmFuc2xhdGVYdmFsID0gMDtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMCk7XHJcbiAgICAgICAgaWYgKHRvdWNoTW92ZSA+IHRoaXMuc2xpZGVJdGVtcykge1xyXG4gICAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUgLSB0b3VjaE1vdmU7XHJcbiAgICAgICAgICBpdGVtU3BlZWQgPSAyMDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlIC0gdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbFR3byhCdG4sIGN1cnJlbnRTbGlkZSwgaXRlbVNwZWVkKTtcclxuICAgIH0gZWxzZSBpZiAoQnRuID09PSAxICYmICgoIXRoaXMubG9vcCAmJiAhdGhpcy5pc0xhc3QpIHx8IHRoaXMubG9vcCkpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggPD1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZSArIHRoaXMuaXRlbXMgKyB0aGlzLnNsaWRlSXRlbXMgJiZcclxuICAgICAgICAhdGhpcy5pc0xhc3RcclxuICAgICAgKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtIHRoaXMuaXRlbXM7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTGFzdCkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRyYW5zbGF0ZVh2YWwgPSAwO1xyXG4gICAgICAgIGl0ZW1TcGVlZCA9IDQwMDtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMCk7XHJcbiAgICAgICAgaWYgKHRvdWNoTW92ZSA+IHRoaXMuc2xpZGVJdGVtcykge1xyXG4gICAgICAgICAgY3VycmVudFNsaWRlID1cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLnNsaWRlSXRlbXMgKyAodG91Y2hNb3ZlIC0gdGhpcy5zbGlkZUl0ZW1zKTtcclxuICAgICAgICAgIGl0ZW1TcGVlZCA9IDIwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsVHdvKEJ0biwgY3VycmVudFNsaWRlLCBpdGVtU3BlZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGxvZ2ljIHRvIHNjcm9sbCB0aGUgY2Fyb3VzZWwgc3RlcCAyICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxTY3JvbGxUd28oXHJcbiAgICBCdG46IG51bWJlcixcclxuICAgIGN1cnJlbnRTbGlkZTogbnVtYmVyLFxyXG4gICAgaXRlbVNwZWVkOiBudW1iZXJcclxuICApOiB2b2lkIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG5cclxuICAgIGlmICh0aGlzLmRleFZhbCAhPT0gMCkge1xyXG4gICAgICBjb25zdCB2YWwgPSBNYXRoLmFicyh0aGlzLnRvdWNoLnZlbG9jaXR5KTtcclxuICAgICAgbGV0IHNvbXQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICh0aGlzLmRleFZhbCAvIHZhbCAvIHRoaXMuZGV4VmFsKSAqICh0aGlzLmRldmljZVdpZHRoIC0gdGhpcy5kZXhWYWwpXHJcbiAgICAgICk7XHJcbiAgICAgIHNvbXQgPSBzb210ID4gaXRlbVNwZWVkID8gaXRlbVNwZWVkIDogc29tdDtcclxuICAgICAgaXRlbVNwZWVkID0gc29tdCA8IDIwMCA/IDIwMCA6IHNvbXQ7XHJcbiAgICAgIHRoaXMuZGV4VmFsID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLndpdGhBbmltKSB7XHJcbiAgICAgIHRoaXMuX3NldFN0eWxlKFxyXG4gICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAndHJhbnNpdGlvbicsXHJcbiAgICAgICAgYHRyYW5zZm9ybSAke2l0ZW1TcGVlZH1tcyAke3RoaXMuaW5wdXRzLmVhc2luZ31gXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuaW5wdXRzLmFuaW1hdGlvbiAmJlxyXG4gICAgICB0aGlzLl9jYXJvdXNlbEFuaW1hdG9yKFxyXG4gICAgICAgIEJ0bixcclxuICAgICAgICBjdXJyZW50U2xpZGUgKyAxLFxyXG4gICAgICAgIGN1cnJlbnRTbGlkZSArIHRoaXMuaXRlbXMsXHJcbiAgICAgICAgaXRlbVNwZWVkLFxyXG4gICAgICAgIE1hdGguYWJzKHRoaXMuY3VycmVudFNsaWRlIC0gY3VycmVudFNsaWRlKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2V0U3R5bGUodGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsIGBgKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICB0aGlzLml0ZW1MZW5ndGggPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoO1xyXG4gICAgdGhpcy5fdHJhbnNmb3JtU3R5bGUoY3VycmVudFNsaWRlKTtcclxuICAgIHRoaXMuY3VycmVudFNsaWRlID0gY3VycmVudFNsaWRlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMub25Nb3ZlLmVtaXQodGhpcyk7XHJcbiAgICB9LCA0MDApO1xyXG5cclxuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk7XHJcbiAgICB0aGlzLl9jYXJvdXNlbExvYWRUcmlnZ2VyKCk7XHJcbiAgICB0aGlzLndpdGhBbmltID0gdHJ1ZTtcclxuICAgIC8vIGlmIChjdXJyZW50U2xpZGUgPT09IDEyKSB7XHJcbiAgICAvLyAgIHRoaXMuX3N3aXRjaERhdGFTb3VyY2UodGhpcy5kYXRhU291cmNlKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIC8qKiBib29sZWFuIGZ1bmN0aW9uIGZvciBtYWtpbmcgaXNGaXJzdCBhbmQgaXNMYXN0ICovXHJcbiAgcHJpdmF0ZSBfYnRuQm9vbGVhbihmaXJzdDogbnVtYmVyLCBsYXN0OiBudW1iZXIpIHtcclxuICAgIHRoaXMuaXNGaXJzdCA9ICEhZmlyc3Q7XHJcbiAgICB0aGlzLmlzTGFzdCA9ICEhbGFzdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybVN0cmluZyhncmlkOiBzdHJpbmcsIHNsaWRlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IGNvbGxlY3QgPSAnJztcclxuICAgIGNvbGxlY3QgKz0gYCR7dGhpcy5zdHlsZWlkfSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoYDtcclxuXHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtW2dyaWRdID1cclxuICAgICAgICAodGhpcy52ZXJ0aWNhbC5oZWlnaHQgLyB0aGlzLmlucHV0cy5ncmlkW2dyaWRdKSAqIHNsaWRlO1xyXG4gICAgICBjb2xsZWN0ICs9IGAwLCAtJHt0aGlzLnRyYW5zZm9ybVtncmlkXX1weCwgMGA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybVtncmlkXSA9ICgxMDAgLyB0aGlzLmlucHV0cy5ncmlkW2dyaWRdKSAqIHNsaWRlO1xyXG4gICAgICBjb2xsZWN0ICs9IGAke3RoaXMuZGlyZWN0aW9uU3ltfSR7dGhpcy50cmFuc2Zvcm1bZ3JpZF19JSwgMCwgMGA7XHJcbiAgICB9XHJcbiAgICBjb2xsZWN0ICs9IGApOyB9YDtcclxuICAgIHJldHVybiBjb2xsZWN0O1xyXG4gIH1cclxuXHJcbiAgLyoqIHNldCB0aGUgdHJhbnNmb3JtIHN0eWxlIHRvIHNjcm9sbCB0aGUgY2Fyb3VzZWwgICovXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtU3R5bGUoc2xpZGU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgbGV0IHNsaWRlQ3NzID0gJyc7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScpIHtcclxuICAgICAgc2xpZGVDc3MgPSBgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoXHJcbiAgICAgICAgJ3hzJyxcclxuICAgICAgICBzbGlkZVxyXG4gICAgICApfX1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoJ3NtJywgc2xpZGUpfSB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKCdtZCcsIHNsaWRlKX0gfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoJ2xnJywgc2xpZGUpfSB9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLmFsbCA9IHRoaXMuaW5wdXRzLmdyaWQuYWxsICogc2xpZGU7XHJcbiAgICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybS5hbGw7XHJcbiAgICAgIHNsaWRlQ3NzID0gYCR7dGhpcy5zdHlsZWlkfSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvblN5bVxyXG4gICAgICAgIH0ke3RoaXMudHJhbnNmb3JtLmFsbH1weCwgMCwgMCk7YDtcclxuICAgIH1cclxuICAgIHRoaXMuY2Fyb3VzZWxDc3NOb2RlLmlubmVySFRNTCA9IHNsaWRlQ3NzO1xyXG4gIH1cclxuXHJcbiAgLyoqIHRoaXMgd2lsbCB0cmlnZ2VyIHRoZSBjYXJvdXNlbCB0byBsb2FkIHRoZSBpdGVtcyAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsTG9hZFRyaWdnZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuaW5wdXRzLmxvYWQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLmxvYWQgPD0gdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLml0ZW1zICYmXHJcbiAgICAgIHRoaXMuY2Fyb3VzZWxMb2FkLmVtaXQodGhpcy5jdXJyZW50U2xpZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGdlbmVyYXRlIENsYXNzIGZvciBlYWNoIGNhcm91c2VsIHRvIHNldCBzcGVjaWZpYyBzdHlsZSAqL1xyXG4gIHByaXZhdGUgX2dlbmVyYXRlSUQoKTogc3RyaW5nIHtcclxuICAgIGxldCB0ZXh0ID0gJyc7XHJcbiAgICBjb25zdCBwb3NzaWJsZSA9XHJcbiAgICAgICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYG5ndWNhcm91c2VsJHt0ZXh0fWA7XHJcbiAgfVxyXG5cclxuICAvKiogaGFuZGxlIHRoZSBhdXRvIHNsaWRlICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxJbnRlcnZhbCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwgJiYgdGhpcy5sb29wKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXI0ID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAnc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm9uU2Nyb2xsaW5nKTtcclxuICAgICAgICB0aGlzLm9uU2Nyb2xsaW5nID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9vbldpbmRvd1Njcm9sbGluZygpO1xyXG4gICAgICAgIH0sIDYwMCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcGxheSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAnbW91c2VsZWF2ZScpLnBpcGUobWFwVG8oMSkpO1xyXG4gICAgICBjb25zdCBwYXVzZSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAnbW91c2VlbnRlcicpLnBpcGUobWFwVG8oMCkpO1xyXG5cclxuICAgICAgY29uc3QgdG91Y2hQbGF5JCA9IGZyb21FdmVudChjb250YWluZXIsICd0b3VjaHN0YXJ0JykucGlwZShtYXBUbygxKSk7XHJcbiAgICAgIGNvbnN0IHRvdWNoUGF1c2UkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ3RvdWNoZW5kJykucGlwZShtYXBUbygwKSk7XHJcblxyXG4gICAgICBjb25zdCBpbnRlcnZhbCQgPSBpbnRlcnZhbCh0aGlzLmlucHV0cy5pbnRlcnZhbC50aW1pbmcpLnBpcGUobWFwVG8oMSkpO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbEludCA9IG1lcmdlKFxyXG4gICAgICAgICAgcGxheSQsXHJcbiAgICAgICAgICB0b3VjaFBsYXkkLFxyXG4gICAgICAgICAgcGF1c2UkLFxyXG4gICAgICAgICAgdG91Y2hQYXVzZSQsXHJcbiAgICAgICAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIHN0YXJ0V2l0aCgxKSxcclxuICAgICAgICAgICAgc3dpdGNoTWFwKHZhbCA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0hvdmVyZWQgPSAhdmFsO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgICAgIHJldHVybiB2YWwgPyBpbnRlcnZhbCQgOiBlbXB0eSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZSgxKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9LCB0aGlzLmludGVydmFsLmluaXRpYWxEZWxheSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGVJdGVtSW5kZXhDb250ZXh0QW5pKCkge1xyXG4gICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lcjtcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCByZW5kZXJJbmRleCA9IDAsIGNvdW50ID0gdmlld0NvbnRhaW5lci5sZW5ndGg7XHJcbiAgICAgIHJlbmRlckluZGV4IDwgY291bnQ7XHJcbiAgICAgIHJlbmRlckluZGV4KytcclxuICAgICkge1xyXG4gICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQocmVuZGVySW5kZXgpIGFzIGFueTtcclxuICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgIGNvbnRleHQuY291bnQgPSBjb3VudDtcclxuICAgICAgY29udGV4dC5maXJzdCA9IHJlbmRlckluZGV4ID09PSAwO1xyXG4gICAgICBjb250ZXh0Lmxhc3QgPSByZW5kZXJJbmRleCA9PT0gY291bnQgLSAxO1xyXG4gICAgICBjb250ZXh0LmV2ZW4gPSByZW5kZXJJbmRleCAlIDIgPT09IDA7XHJcbiAgICAgIGNvbnRleHQub2RkID0gIWNvbnRleHQuZXZlbjtcclxuICAgICAgY29udGV4dC5pbmRleCA9IHJlbmRlckluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGFuaW1hdGUgdGhlIGNhcm91c2VsIGl0ZW1zICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxBbmltYXRvcihcclxuICAgIGRpcmVjdGlvbjogbnVtYmVyLFxyXG4gICAgc3RhcnQ6IG51bWJlcixcclxuICAgIGVuZDogbnVtYmVyLFxyXG4gICAgc3BlZWQ6IG51bWJlcixcclxuICAgIGxlbmd0aDogbnVtYmVyLFxyXG4gICAgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lclxyXG4gICk6IHZvaWQge1xyXG4gICAgbGV0IHZhbCA9IGxlbmd0aCA8IDUgPyBsZW5ndGggOiA1O1xyXG4gICAgdmFsID0gdmFsID09PSAxID8gMyA6IHZhbDtcclxuICAgIGNvbnN0IGNvbGxlY3RJbmRleCA9IFtdO1xyXG5cclxuICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0IC0gMTsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgY29sbGVjdEluZGV4LnB1c2goaSk7XHJcbiAgICAgICAgdmFsID0gdmFsICogMjtcclxuICAgICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQoaSkgYXMgYW55O1xyXG4gICAgICAgIGlmICh2aWV3UmVmKSB7XHJcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcclxuICAgICAgICAgIGNvbnRleHQuYW5pbWF0ZSA9IHt2YWx1ZTogdHJ1ZSwgcGFyYW1zOiB7ZGlzdGFuY2U6IHZhbH19O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IGVuZCAtIDE7IGkgPj0gc3RhcnQgLSAxOyBpLS0pIHtcclxuICAgICAgICBjb2xsZWN0SW5kZXgucHVzaChpKTtcclxuICAgICAgICB2YWwgPSB2YWwgKiAyO1xyXG4gICAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChpKSBhcyBhbnk7XHJcbiAgICAgICAgaWYgKHZpZXdSZWYpIHtcclxuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xyXG4gICAgICAgICAgY29udGV4dC5hbmltYXRlID0ge3ZhbHVlOiB0cnVlLCBwYXJhbXM6IHtkaXN0YW5jZTogLXZhbH19O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5fcmVtb3ZlQW5pbWF0aW9ucyhjb2xsZWN0SW5kZXgpO1xyXG4gICAgfSwgc3BlZWQgKiAwLjcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmVtb3ZlQW5pbWF0aW9ucyhpbmRleHM6IG51bWJlcltdKSB7XHJcbiAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyO1xyXG4gICAgaW5kZXhzLmZvckVhY2goaSA9PiB7XHJcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChpKSBhcyBhbnk7XHJcbiAgICAgIGlmICh2aWV3UmVmKSB7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgICAgY29udGV4dC5hbmltYXRlID0ge3ZhbHVlOiBmYWxzZSwgcGFyYW1zOiB7ZGlzdGFuY2U6IDB9fTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKiBTaG9ydCBmb3JtIGZvciBzZXRFbGVtZW50U3R5bGUgKi9cclxuICBwcml2YXRlIF9zZXRTdHlsZShlbDogYW55LCBwcm9wOiBhbnksIHZhbDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbCwgcHJvcCwgdmFsKTtcclxuICB9XHJcblxyXG4gIC8qKiBGb3IgZ2VuZXJhdGluZyBzdHlsZSB0YWcgKi9cclxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUVsZW0oZGF0YXM/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHN0eWxlSXRlbSA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICBpZiAoZGF0YXMpIHtcclxuICAgICAgY29uc3Qgc3R5bGVUZXh0ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlVGV4dChkYXRhcyk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHN0eWxlSXRlbSwgc3R5bGVUZXh0KTtcclxuICAgIH1cclxuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuY2Fyb3VzZWwsIHN0eWxlSXRlbSk7XHJcbiAgICByZXR1cm4gc3R5bGVJdGVtO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICduZ3UtaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICduZ3UtaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ25ndS1pdGVtLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUl0ZW1Db21wb25lbnQge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXRlbScpIGNsYXNzZXMgPSB0cnVlO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ25ndS10aWxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ25ndS10aWxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbmd1LXRpbGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1VGlsZUNvbXBvbmVudCB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pdGVtJykgY2xhc3NlcyA9IHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsT3V0bGV0LFxyXG4gIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlLCBOZ3VDYXJvdXNlbFdyYXBwZXJEaXJlY3RpdmVcclxufSBmcm9tICcuL25ndS1jYXJvdXNlbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOZ3VJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3UtaXRlbS9uZ3UtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ3VDYXJvdXNlbCB9IGZyb20gJy4vbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3VUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3UtdGlsZS9uZ3UtdGlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3VDYXJvdXNlbFNlcnZpY2UgfSBmcm9tICcuL25ndS1jYXJvdXNlbC5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTmd1Q2Fyb3VzZWwsXHJcbiAgICBOZ3VJdGVtQ29tcG9uZW50LFxyXG4gICAgTmd1VGlsZUNvbXBvbmVudCxcclxuICAgIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsT3V0bGV0XHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5ndUNhcm91c2VsLFxyXG4gICAgTmd1SXRlbUNvbXBvbmVudCxcclxuICAgIE5ndVRpbGVDb21wb25lbnQsXHJcbiAgICBOZ3VDYXJvdXNlbFBvaW50RGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxJdGVtRGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbFdyYXBwZXJEaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbE91dGxldFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBOZ3VDYXJvdXNlbFNlcnZpY2VcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE1vZHVsZSB7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJEaXJlY3RpdmUiLCJUZW1wbGF0ZVJlZiIsIlZpZXdDb250YWluZXJSZWYiLCJFbGVtZW50UmVmIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJFdmVudEVtaXR0ZXIiLCJTdWJqZWN0IiwiaXNEZXZNb2RlIiwiT2JzZXJ2YWJsZSIsIm9mIiwidGFrZVVudGlsIiwiaXNQbGF0Zm9ybUJyb3dzZXIiLCJmcm9tRXZlbnQiLCJtYXBUbyIsImludGVydmFsIiwibWVyZ2UiLCJzdGFydFdpdGgiLCJzd2l0Y2hNYXAiLCJlbXB0eSIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiUmVuZGVyZXIyIiwiSXRlcmFibGVEaWZmZXJzIiwiSW5qZWN0IiwiUExBVEZPUk1fSUQiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIlZpZXdDaGlsZCIsIk91dHB1dCIsIkNvbnRlbnRDaGlsZHJlbiIsIklucHV0IiwiQ29udGVudENoaWxkIiwiSG9zdEJpbmRpbmciLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBQ0UsMEJBQ1MsS0FBbUIsRUFDbkIsUUFBeUIsRUFDekIsUUFBMkIsRUFDM0IsU0FBOEIsRUFDOUIsTUFBa0IsRUFDbEIsWUFBMkIsRUFDM0IsVUFBdUIsRUFDdkIsSUFBYyxFQUNkLEtBQVUsRUFDVixLQUFTLEVBQ1QsSUFBUSxFQUNSLFdBQWUsRUFDZixhQUFpQixFQUNqQixTQUFhLEVBQ2IsVUFBYyxFQUNkLFlBQWdCLEVBQ2hCLFVBQWMsRUFDZCxZQUFnQixFQUNoQixNQUFxQyxFQUNyQyxLQUFXLEVBQ1gsSUFBWSxFQUNaLE1BQVUsRUFDVixjQUFrQixFQUNsQixLQUFhLEVBQ2IsT0FBYyxFQUNkLE1BQWMsRUFDZCxHQUFXLEVBQ1gsS0FBWSxFQUNaLFFBQVk7WUE1Qlosc0JBQUE7Z0JBQUEsWUFBWSxLQUFLLEVBQUU7O1lBQ25CLHlCQUFBO2dCQUFBLGVBQWUsUUFBUSxFQUFFOztZQUV6QiwwQkFBQTtnQkFBQSxnQkFBZ0IsWUFBWSxFQUFFOztZQUk5QixxQkFBQTtnQkFB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