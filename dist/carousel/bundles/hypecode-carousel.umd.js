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
                        template: "<ng-content select=\"[NguCarouselPoint]\"></ng-content>\n\n<div class=\"carousel-wrapper\">\n  <div class=\"btn-wrapper btn-previous\">\n    <ng-content select=\"[NguCarouselPrev]\"></ng-content>\n  </div>\n\n  <div class=\"btn-wrapper btn-next\">\n    <ng-content select=\"[NguCarouselNext]\"></ng-content>\n  </div>\n\n  <div #ngucarousel class=\"ngucarousel\">\n    <div #touchContainer class=\"ngu-touch-container\">\n      <div #nguItemsContainer class=\"ngucarousel-items\">\n        <ng-container nguCarouselOutlet></ng-container>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n\n",
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
                        template: "<ng-content></ng-content>\n",
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
                        template: "<div class=\"tile\">\n  <ng-content></ng-content>\n</div>\n",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlwZWNvZGUtY2Fyb3VzZWwudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL25ndS1jYXJvdXNlbC9uZ3UtY2Fyb3VzZWwudHMiLCJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC9saWIvbmd1LWNhcm91c2VsLnNlcnZpY2UudHMiLCJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL25ndS1jYXJvdXNlbC5kaXJlY3RpdmUudHMiLCJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC9saWIvbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC5jb21wb25lbnQudHMiLCJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC9saWIvbmd1LWl0ZW0vbmd1LWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL25ndS10aWxlL25ndS10aWxlLmNvbXBvbmVudC50cyIsIm5nOi8vQGh5cGVjb2RlL2Nhcm91c2VsL2xpYi9uZ3UtY2Fyb3VzZWwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbFN0b3JlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRvdWNoID0gbmV3IFRvdWNoKCksXG4gICAgcHVibGljIHZlcnRpY2FsID0gbmV3IFZlcnRpY2FsKCksXG4gICAgcHVibGljIGludGVydmFsPzogQ2Fyb3VzZWxJbnRlcnZhbCxcbiAgICBwdWJsaWMgdHJhbnNmb3JtID0gbmV3IE5ndVRyYW5zZnJvbSgpLFxuICAgIHB1YmxpYyBidXR0b24/OiBOZ3VCdXR0b24sXG4gICAgcHVibGljIHZpc2libGVJdGVtcz86IEl0ZW1zQ29udHJvbCxcbiAgICBwdWJsaWMgZGV2aWNlVHlwZT86IERldmljZVR5cGUsXG4gICAgcHVibGljIHR5cGUgPSAnZml4ZWQnLFxuICAgIHB1YmxpYyB0b2tlbiA9ICcnLFxuICAgIHB1YmxpYyBpdGVtcyA9IDAsXG4gICAgcHVibGljIGxvYWQgPSAwLFxuICAgIHB1YmxpYyBkZXZpY2VXaWR0aCA9IDAsXG4gICAgcHVibGljIGNhcm91c2VsV2lkdGggPSAwLFxuICAgIHB1YmxpYyBpdGVtV2lkdGggPSAwLFxuICAgIHB1YmxpYyBzbGlkZUl0ZW1zID0gMCxcbiAgICBwdWJsaWMgaXRlbVdpZHRoUGVyID0gMCxcbiAgICBwdWJsaWMgaXRlbUxlbmd0aCA9IDAsXG4gICAgcHVibGljIGN1cnJlbnRTbGlkZSA9IDAsXG4gICAgcHVibGljIGVhc2luZyA9ICdjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKScsXG4gICAgcHVibGljIHNwZWVkID0gMjAwLFxuICAgIHB1YmxpYyBsb29wID0gZmFsc2UsXG4gICAgcHVibGljIGRleFZhbCA9IDAsXG4gICAgcHVibGljIHRvdWNoVHJhbnNmb3JtID0gMCxcbiAgICBwdWJsaWMgaXNFbmQgPSBmYWxzZSxcbiAgICBwdWJsaWMgaXNGaXJzdCA9IHRydWUsXG4gICAgcHVibGljIGlzTGFzdCA9IGZhbHNlLFxuICAgIHB1YmxpYyBSVEwgPSBmYWxzZSxcbiAgICBwdWJsaWMgcG9pbnQgPSB0cnVlLFxuICAgIHB1YmxpYyB2ZWxvY2l0eSA9IDFcbiAgKSB7fVxufVxuZXhwb3J0IHR5cGUgRGV2aWNlVHlwZSA9ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAnYWxsJztcblxuZXhwb3J0IHR5cGUgQnV0dG9uVmlzaWJsZSA9ICdkaXNhYmxlZCcgfCAnaGlkZSc7XG5cbmV4cG9ydCBjbGFzcyBJdGVtc0NvbnRyb2wge1xuICBzdGFydDogbnVtYmVyO1xuICBlbmQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsIHtcbiAgZW5hYmxlZDogYm9vbGVhbjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8vIG51bUhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE5ndUJ1dHRvbiB7XG4gIHZpc2liaWxpdHk/OiBCdXR0b25WaXNpYmxlO1xuICBlbGFzdGljPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgVG91Y2gge1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBzd2lwZTogc3RyaW5nO1xuICB2ZWxvY2l0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTmd1VHJhbnNmcm9tIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHhzID0gMCxcbiAgICBwdWJsaWMgc20gPSAwLFxuICAgIHB1YmxpYyBtZCA9IDAsXG4gICAgcHVibGljIGxnID0gMCxcbiAgICBwdWJsaWMgYWxsID0gMFxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbENvbmZpZyB7XG4gIGdyaWQ6IE5ndVRyYW5zZnJvbTtcbiAgc2xpZGU/OiBudW1iZXI7XG4gIHNwZWVkPzogbnVtYmVyO1xuICBpbnRlcnZhbD86IENhcm91c2VsSW50ZXJ2YWw7XG4gIGFuaW1hdGlvbj86IEFuaW1hdGU7XG4gIHBvaW50PzogUG9pbnQ7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIGxvYWQ/OiBudW1iZXI7XG4gIGN1c3RvbT86IEN1c3RvbTtcbiAgbG9vcD86IGJvb2xlYW47XG4gIHRvdWNoPzogYm9vbGVhbjtcbiAgZWFzaW5nPzogc3RyaW5nO1xuICBSVEw/OiBib29sZWFuO1xuICBidXR0b24/OiBOZ3VCdXR0b247XG4gIHZlcnRpY2FsPzogVmVydGljYWw7XG4gIHZlbG9jaXR5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBDdXN0b20gPSAnYmFubmVyJztcbmV4cG9ydCB0eXBlIEFuaW1hdGUgPSAnbGF6eSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICB2aXNpYmxlOiBib29sZWFuO1xuICBoaWRlT25TaW5nbGVTbGlkZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uIHtcbiAgdHlwZT86IEFuaW1hdGU7XG4gIGFuaW1hdGVTdHlsZXM/OiBBbmltYXRpb25TdHlsZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uU3R5bGVzIHtcbiAgc3R5bGU/OiBzdHJpbmc7XG4gIG9wZW4/OiBzdHJpbmc7XG4gIGNsb3NlPzogc3RyaW5nO1xuICBzdGFnZ2VyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcm91c2VsSW50ZXJ2YWwge1xuICB0aW1pbmc6IG51bWJlcjtcbiAgaW5pdGlhbERlbGF5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxPdXRsZXRDb250ZXh0PFQ+IHtcbiAgLyoqIERhdGEgZm9yIHRoZSBub2RlLiAqL1xuICAkaW1wbGljaXQ6IFQ7XG5cbiAgLyoqIERlcHRoIG9mIHRoZSBub2RlLiAqL1xuICBsZXZlbDogbnVtYmVyO1xuXG4gIC8qKiBJbmRleCBsb2NhdGlvbiBvZiB0aGUgbm9kZS4gKi9cbiAgaW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqIExlbmd0aCBvZiB0aGUgbnVtYmVyIG9mIHRvdGFsIGRhdGFOb2Rlcy4gKi9cbiAgY291bnQ/OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogVCkge1xuICAgIHRoaXMuJGltcGxpY2l0ID0gZGF0YTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd1Q2Fyb3VzZWwgfSBmcm9tICcuL25ndS1jYXJvdXNlbC9uZ3UtY2Fyb3VzZWwuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsU2VydmljZSB7XG5cblxuICBjYXJvdXNlbDogTmd1Q2Fyb3VzZWw8YW55PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgc2V0Q2Fyb3VzZWwoY2Fyb3VzZWw6IE5ndUNhcm91c2VsPGFueT4pIHtcbiAgICB0aGlzLmNhcm91c2VsID0gY2Fyb3VzZWw7XG4gIH1cblxuICBnZXRDYXJvdXNlbCgpOiBOZ3VDYXJvdXNlbDxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jYXJvdXNlbDtcbiAgfVxuXG5cbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tOZ3VDYXJvdXNlbEl0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUge31cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbTmd1Q2Fyb3VzZWxOZXh0XSdcbn0pXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlIHtcbiAgLy8gQEhvc3RCaW5kaW5nKCdkaXNhYmxlZCcpIGRpc2FibGVkOiBib29sZWFuO1xuICAvLyBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKSBkaXNwbGF5ID0gJ2Jsb2NrJztcbiAgLy8gQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICAvLyBvbkNsaWNrKCkge1xuICAvLyB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW05ndUNhcm91c2VsUHJldl0nXG59KVxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSB7XG4gIC8vIEBIb3N0QmluZGluZygnZGlzYWJsZWQnKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgLy8gQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgZGlzcGxheSA9ICdibG9jayc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW05ndUNhcm91c2VsUG9pbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbFBvaW50RGlyZWN0aXZlIHt9XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW25ndUNhcm91c2VsRGVmXSdcbn0pXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmU8VD4ge1xuICB3aGVuOiAoaW5kZXg6IG51bWJlciwgbm9kZURhdGE6IFQpID0+IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tuZ3VDYXJvdXNlbE91dGxldF0nXG59KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE91dGxldCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tuZ3VDYXJvdXNlbFdyYXBwZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbFdyYXBwZXJEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IEVsZW1lbnRSZWY8YW55Pikge31cbn1cbiIsImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRG9DaGVjayxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgaXNEZXZNb2RlLFxyXG4gIEl0ZXJhYmxlQ2hhbmdlUmVjb3JkLFxyXG4gIEl0ZXJhYmxlQ2hhbmdlcyxcclxuICBJdGVyYWJsZURpZmZlcixcclxuICBJdGVyYWJsZURpZmZlcnMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUExBVEZPUk1fSUQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUcmFja0J5RnVuY3Rpb24sXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZW1wdHksIGZyb21FdmVudCwgaW50ZXJ2YWwsIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcFRvLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTmd1Q2Fyb3VzZWxDb25maWcsIE5ndUNhcm91c2VsT3V0bGV0Q29udGV4dCwgTmd1Q2Fyb3VzZWxTdG9yZSB9IGZyb20gJy4vbmd1LWNhcm91c2VsJztcclxuaW1wb3J0IHsgTmd1Q2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi4vbmd1LWNhcm91c2VsLnNlcnZpY2UnO1xyXG5pbXBvcnQge1xyXG4gIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbE91dGxldCxcclxuICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxXcmFwcGVyRGlyZWN0aXZlXHJcbn0gZnJvbSAnLi4vbmd1LWNhcm91c2VsLmRpcmVjdGl2ZSc7XHJcblxyXG5cclxuLy8gVE9ETyBjYWxjdWxlciBsYSB0YWlsbGUgcG9zc2libGUgcG91ciBsZSAubmd1Y2Fyc291bCBlbiBmb25jdGlvbiBkZXMgYm91dG9ucyBwcmV2L25leHRcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ25ndS1jYXJvdXNlbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICduZ3UtY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyduZ3UtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MnXSxcclxuICB2aWV3UHJvdmlkZXJzOiBbTmd1Q2Fyb3VzZWxTZXJ2aWNlXSxcclxuICBwcm92aWRlcnM6IFtOZ3VDYXJvdXNlbFNlcnZpY2VdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtY2xhc3Mtc3VmZml4XHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbDxUPiBleHRlbmRzIE5ndUNhcm91c2VsU3RvcmVcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcclxuICBfZGF0YVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIF9kYXRhRGlmZmVyOiBJdGVyYWJsZURpZmZlcjx7fT47XHJcbiAgc3R5bGVpZDogc3RyaW5nO1xyXG4gIGFjdGl2ZVBvaW50OiBudW1iZXI7XHJcbiAgaXNIb3ZlcmVkID0gZmFsc2U7XHJcbiAgLy8gaXNGaXJzdHNzID0gMDtcclxuICBhcnJheUNoYW5nZXM6IEl0ZXJhYmxlQ2hhbmdlczx7fT47XHJcbiAgY2Fyb3VzZWxJbnQ6IFN1YnNjcmlwdGlvbjtcclxuICBAVmlld0NoaWxkKE5ndUNhcm91c2VsT3V0bGV0KVxyXG4gIF9ub2RlT3V0bGV0OiBOZ3VDYXJvdXNlbE91dGxldDtcclxuICBAVmlld0NoaWxkKE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZSlcclxuICBfY2Fyb3VzZWxXcmFwcGVyOiBOZ3VDYXJvdXNlbFdyYXBwZXJEaXJlY3RpdmU7XHJcbiAgcG9pbnROdW1iZXJzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgLy8gaXNGaXJzdHNzID0gMDtcclxuICBsaXN0ZW5lcjE6ICgpID0+IHZvaWQ7XHJcbiAgbGlzdGVuZXIyOiAoKSA9PiB2b2lkO1xyXG4gIGxpc3RlbmVyMzogKCkgPT4gdm9pZDtcclxuICBsaXN0ZW5lcjQ6ICgpID0+IHZvaWQ7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcclxuICBAT3V0cHV0KCdvbk1vdmUnKVxyXG4gIHB1YmxpYyBvbk1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE5ndUNhcm91c2VsPFQ+PigpO1xyXG4gIHByaXZhdGUgX2RlZmF1bHROb2RlRGVmOiBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxhbnk+IHwgbnVsbDtcclxuICBAQ29udGVudENoaWxkcmVuKE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlKVxyXG4gIHByaXZhdGUgX2RlZkRpcmVjOiBRdWVyeUxpc3Q8Tmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmU8YW55Pj47XHJcbiAgcHJpdmF0ZSBkaXJlY3Rpb25TeW06IHN0cmluZztcclxuICBwcml2YXRlIGNhcm91c2VsQ3NzTm9kZTogYW55O1xyXG4gIHByaXZhdGUgcG9pbnRJbmRleDogbnVtYmVyO1xyXG4gIHByaXZhdGUgd2l0aEFuaW0gPSB0cnVlO1xyXG4gIEBJbnB1dCgnaW5wdXRzJylcclxuICBwcml2YXRlIGlucHV0czogTmd1Q2Fyb3VzZWxDb25maWc7XHJcbiAgQE91dHB1dCgnY2Fyb3VzZWxMb2FkJylcclxuICBwcml2YXRlIGNhcm91c2VsTG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAVmlld0NoaWxkKCduZ3VjYXJvdXNlbCcsIHtyZWFkOiBFbGVtZW50UmVmfSlcclxuICBwcml2YXRlIGNhcm91c2VsTWFpbjE6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ25ndUl0ZW1zQ29udGFpbmVyJywge3JlYWQ6IEVsZW1lbnRSZWZ9KVxyXG4gIHByaXZhdGUgbmd1SXRlbXNDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RvdWNoQ29udGFpbmVyJywge3JlYWQ6IEVsZW1lbnRSZWZ9KVxyXG4gIHByaXZhdGUgdG91Y2hDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBfaW50ZXJ2YWxDb250cm9sbGVyJCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcclxuICBwcml2YXRlIGNhcm91c2VsOiBhbnk7XHJcbiAgcHJpdmF0ZSBvblJlc2l6ZTogYW55O1xyXG4gIHByaXZhdGUgb25TY3JvbGxpbmc6IGFueTtcclxuICBwcml2YXRlIF90cmFja0J5Rm46IFRyYWNrQnlGdW5jdGlvbjxUPjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIF9kaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgY2Fyb3VzZWxTZXJ2aWNlOiBOZ3VDYXJvdXNlbFNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmNhcm91c2VsU2VydmljZS5zZXRDYXJvdXNlbCh0aGlzKTtcclxuICB9XHJcblxyXG4gIF9kYXRhU291cmNlOiBhbnk7XHJcblxyXG4gIEBJbnB1dCgnZGF0YVNvdXJjZScpXHJcbiAgZ2V0IGRhdGFTb3VyY2UoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRhdGFTb3VyY2UoZGF0YTogYW55KSB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLCB0aGlzLmRhdGFTb3VyY2UpO1xyXG4gICAgICAvLyB0aGlzLmlzRmlyc3RzcysrO1xyXG4gICAgICB0aGlzLl9zd2l0Y2hEYXRhU291cmNlKGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKiBUaGUgc2V0dGVyIGlzIHVzZWQgdG8gY2F0Y2ggdGhlIGJ1dHRvbiBpZiB0aGUgYnV0dG9uIGhhcyBuZ0lmXHJcbiAgICogaXNzdWUgaWQgIzkxXHJcbiAgICovXHJcbiAgQENvbnRlbnRDaGlsZChOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsIHtyZWFkOiBFbGVtZW50UmVmfSlcclxuICBzZXQgbmV4dEJ0bihidG46IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMubGlzdGVuZXIyICYmIHRoaXMubGlzdGVuZXIyKCk7XHJcbiAgICBpZiAoYnRuKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXIyID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKGJ0bi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoKSA9PlxyXG4gICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKDEpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogVGhlIHNldHRlciBpcyB1c2VkIHRvIGNhdGNoIHRoZSBidXR0b24gaWYgdGhlIGJ1dHRvbiBoYXMgbmdJZlxyXG4gICAqIGlzc3VlIGlkICM5MVxyXG4gICAqL1xyXG4gIEBDb250ZW50Q2hpbGQoTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgc2V0IHByZXZCdG4oYnRuOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmxpc3RlbmVyMSAmJiB0aGlzLmxpc3RlbmVyMSgpO1xyXG4gICAgaWYgKGJ0bikge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyMSA9IHRoaXMuX3JlbmRlcmVyLmxpc3RlbihidG4ubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKCkgPT5cclxuICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZSgwKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJhY2tpbmcgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2hlY2sgdGhlIGRpZmZlcmVuY2VzIGluIGRhdGEgY2hhbmdlcy4gVXNlZCBzaW1pbGFybHlcclxuICAgKiB0byBgbmdGb3JgIGB0cmFja0J5YCBmdW5jdGlvbi4gT3B0aW1pemUgSXRlbXMgb3BlcmF0aW9ucyBieSBpZGVudGlmeWluZyBhIEl0ZW1zIGJhc2VkIG9uIGl0cyBkYXRhXHJcbiAgICogcmVsYXRpdmUgdG8gdGhlIGZ1bmN0aW9uIHRvIGtub3cgaWYgYSBJdGVtcyBzaG91bGQgYmUgYWRkZWQvcmVtb3ZlZC9tb3ZlZC5cclxuICAgKiBBY2NlcHRzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gcGFyYW1ldGVycywgYGluZGV4YCBhbmQgYGl0ZW1gLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHRyYWNrQnkoKTogVHJhY2tCeUZ1bmN0aW9uPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLl90cmFja0J5Rm47XHJcbiAgfVxyXG5cclxuICBzZXQgdHJhY2tCeShmbjogVHJhY2tCeUZ1bmN0aW9uPFQ+KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGlzRGV2TW9kZSgpICYmXHJcbiAgICAgIGZuICE9IG51bGwgJiZcclxuICAgICAgdHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nICYmXHJcbiAgICAgIDxhbnk+Y29uc29sZSAmJlxyXG4gICAgICA8YW55PmNvbnNvbGUud2FyblxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBgdHJhY2tCeSBtdXN0IGJlIGEgZnVuY3Rpb24sIGJ1dCByZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KGZuKX0uYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdHJhY2tCeUZuID0gZm47XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuX2RhdGFEaWZmZXIgPSB0aGlzLl9kaWZmZXJzXHJcbiAgICAgIC5maW5kKFtdKVxyXG4gICAgICAuY3JlYXRlKChfaTogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFja0J5ID8gdGhpcy50cmFja0J5KGl0ZW0uZGF0YUluZGV4LCBpdGVtLmRhdGEpIDogaXRlbTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICB0aGlzLmFycmF5Q2hhbmdlcyA9IHRoaXMuX2RhdGFEaWZmZXIuZGlmZih0aGlzLmRhdGFTb3VyY2UpO1xyXG4gICAgaWYgKHRoaXMuYXJyYXlDaGFuZ2VzICYmIHRoaXMuX2RlZkRpcmVjKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdDaGFuZ2VzIGRldGVjdGVkIScpO1xyXG4gICAgICB0aGlzLl9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jYXJvdXNlbCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLl9pbnB1dFZhbGlkYXRpb24oKTtcclxuXHJcbiAgICB0aGlzLmNhcm91c2VsQ3NzTm9kZSA9IHRoaXMuX2NyZWF0ZVN0eWxlRWxlbSgpO1xyXG5cclxuICAgIC8vIHRoaXMuX2J1dHRvbkNvbnRyb2woKTtcclxuXHJcbiAgICBpZiAod2luZG93KSB7XHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsSW50ZXJ2YWwoKTtcclxuICAgICAgaWYgKCF0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLl90b3VjaCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGlzdGVuZXIzID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMuX29uUmVzaXppbmcoZXZlbnQpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fb25XaW5kb3dTY3JvbGxpbmcoKTtcclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKTtcclxuXHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG5cclxuICAvKiogVXNlZCB0byByZXNldCB0aGUgY2Fyb3VzZWwgKi9cclxuICBwdWJsaWMgcmVzZXQod2l0aE91dEFuaW1hdGlvbj86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHdpdGhPdXRBbmltYXRpb24gJiYgKHRoaXMud2l0aEFuaW0gPSBmYWxzZSk7XHJcbiAgICBpZiAodGhpcy5jYXJvdXNlbENzc05vZGUpIHtcclxuICAgICAgdGhpcy5jYXJvdXNlbENzc05vZGUuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICB0aGlzLm1vdmVUbygwKTtcclxuICAgICAgdGhpcy5fY2Fyb3VzZWxQb2ludCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBzY29sbCB0aGUgY2Fyb3VzZWwgd2hlbiBwb2ludCBpcyBjbGlja2VkICovXHJcbiAgcHVibGljIG1vdmVUbyhzbGlkZTogbnVtYmVyLCB3aXRoT3V0QW5pbWF0aW9uPzogYm9vbGVhbikge1xyXG4gICAgLy8gc2xpZGUgPSBzbGlkZSAtIDE7XHJcbiAgICB3aXRoT3V0QW5pbWF0aW9uICYmICh0aGlzLndpdGhBbmltID0gZmFsc2UpO1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlUG9pbnQgIT09IHNsaWRlICYmIHNsaWRlIDwgdGhpcy5wb2ludEluZGV4KSB7XHJcbiAgICAgIGxldCBzbGlkZXJlbWFpbnM7XHJcbiAgICAgIGNvbnN0IGJ0bnMgPSB0aGlzLmN1cnJlbnRTbGlkZSA8IHNsaWRlID8gMSA6IDA7XHJcblxyXG4gICAgICBzd2l0Y2ggKHNsaWRlKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgICAgIHNsaWRlcmVtYWlucyA9IHNsaWRlICogdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSB0aGlzLnBvaW50SW5kZXggLSAxOlxyXG4gICAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcclxuICAgICAgICAgIHNsaWRlcmVtYWlucyA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLml0ZW1zO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMCk7XHJcbiAgICAgICAgICBzbGlkZXJlbWFpbnMgPSBzbGlkZSAqIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbFR3byhidG5zLCBzbGlkZXJlbWFpbnMsIHRoaXMuc3BlZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgLy8gY2xlYXJJbnRlcnZhbCh0aGlzLmNhcm91c2VsSW50KTtcclxuICAgIHRoaXMuY2Fyb3VzZWxJbnQgJiYgdGhpcy5jYXJvdXNlbEludC51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJC51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5jYXJvdXNlbExvYWQuY29tcGxldGUoKTtcclxuICAgIHRoaXMub25Nb3ZlLmNvbXBsZXRlKCk7XHJcblxyXG4gICAgLyoqIHJlbW92ZSBsaXN0ZW5lcnMgKi9cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xyXG4gICAgICBjb25zdCBzdHIgPSBgbGlzdGVuZXIke2l9YDtcclxuICAgICAgdGhpc1tzdHJdICYmIHRoaXNbc3RyXSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc3dpdGNoRGF0YVNvdXJjZShkYXRhU291cmNlOiBhbnkpOiBhbnkge1xyXG4gICAgdGhpcy5fZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XHJcbiAgICBpZiAodGhpcy5fZGVmRGlyZWMpIHtcclxuICAgICAgdGhpcy5fb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyTm9kZUNoYW5nZXMoXHJcbiAgICBkYXRhOiBhbnlbXSxcclxuICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXJcclxuICApIHtcclxuICAgIGlmICghdGhpcy5hcnJheUNoYW5nZXMpIHJldHVybjtcclxuICAgIHRoaXMuYXJyYXlDaGFuZ2VzLmZvckVhY2hPcGVyYXRpb24oXHJcbiAgICAgIChcclxuICAgICAgICBpdGVtOiBJdGVyYWJsZUNoYW5nZVJlY29yZDxhbnk+LFxyXG4gICAgICAgIGFkanVzdGVkUHJldmlvdXNJbmRleDogbnVtYmVyLFxyXG4gICAgICAgIGN1cnJlbnRJbmRleDogbnVtYmVyXHJcbiAgICAgICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9nZXROb2RlRGVmKGRhdGFbY3VycmVudEluZGV4XSwgY3VycmVudEluZGV4KTtcclxuICAgICAgICBpZiAoaXRlbS5wcmV2aW91c0luZGV4ID09PSBudWxsKSB7XHJcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gbmV3IE5ndUNhcm91c2VsT3V0bGV0Q29udGV4dDxhbnk+KGRhdGFbY3VycmVudEluZGV4XSk7XHJcbiAgICAgICAgICBjb250ZXh0LmluZGV4ID0gY3VycmVudEluZGV4O1xyXG4gICAgICAgICAgdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcoXHJcbiAgICAgICAgICAgIG5vZGUudGVtcGxhdGUsXHJcbiAgICAgICAgICAgIGNvbnRleHQsXHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgdmlld0NvbnRhaW5lci5yZW1vdmUoYWRqdXN0ZWRQcmV2aW91c0luZGV4KTtcclxuICAgICAgICAgIHZpZXdDb250YWluZXIuY2xlYXIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgdmlldyA9IHZpZXdDb250YWluZXIuZ2V0KGFkanVzdGVkUHJldmlvdXNJbmRleCk7XHJcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLm1vdmUodmlldywgY3VycmVudEluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICB0aGlzLl91cGRhdGVJdGVtSW5kZXhDb250ZXh0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2Fyb3VzZWwpIHtcclxuICAgICAgdGhpcy5fc3RvcmVDYXJvdXNlbERhdGEoKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSBpbmRleC1yZWxhdGVkIGNvbnRleHQgZm9yIGVhY2ggcm93IHRvIHJlZmxlY3QgYW55IGNoYW5nZXMgaW4gdGhlIGluZGV4IG9mIHRoZSByb3dzLFxyXG4gICAqIGUuZy4gZmlyc3QvbGFzdC9ldmVuL29kZC5cclxuICAgKi9cclxuICBwcml2YXRlIF91cGRhdGVJdGVtSW5kZXhDb250ZXh0KCkge1xyXG4gICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lcjtcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCByZW5kZXJJbmRleCA9IDAsIGNvdW50ID0gdmlld0NvbnRhaW5lci5sZW5ndGg7XHJcbiAgICAgIHJlbmRlckluZGV4IDwgY291bnQ7XHJcbiAgICAgIHJlbmRlckluZGV4KytcclxuICAgICkge1xyXG4gICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQocmVuZGVySW5kZXgpIGFzIGFueTtcclxuICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgIGNvbnRleHQuY291bnQgPSBjb3VudDtcclxuXHJcbiAgICAgIGNvbnRleHQuZmlyc3QgPSByZW5kZXJJbmRleCA9PT0gMDtcclxuICAgICAgY29udGV4dC5sYXN0ID0gcmVuZGVySW5kZXggPT09IGNvdW50IC0gMTtcclxuICAgICAgY29udGV4dC5ldmVuID0gcmVuZGVySW5kZXggJSAyID09PSAwO1xyXG4gICAgICBjb250ZXh0Lm9kZCA9ICFjb250ZXh0LmV2ZW47XHJcbiAgICAgIGNvbnRleHQuaW5kZXggPSByZW5kZXJJbmRleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldE5vZGVEZWYoZGF0YTogYW55LCBpOiBudW1iZXIpOiBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxhbnk+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2RlZkRpcmVjKTtcclxuICAgIGlmICh0aGlzLl9kZWZEaXJlYy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2RlZkRpcmVjLmZpcnN0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vZGVEZWYgPVxyXG4gICAgICB0aGlzLl9kZWZEaXJlYy5maW5kKGRlZiA9PiBkZWYud2hlbiAmJiBkZWYud2hlbihpLCBkYXRhKSkgfHxcclxuICAgICAgdGhpcy5fZGVmYXVsdE5vZGVEZWY7XHJcblxyXG4gICAgcmV0dXJuIG5vZGVEZWY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpIHtcclxuICAgIGxldCBkYXRhU3RyZWFtOiBPYnNlcnZhYmxlPGFueVtdPiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBpZiAodGhpcy5fZGF0YVNvdXJjZSBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcclxuICAgICAgZGF0YVN0cmVhbSA9IHRoaXMuX2RhdGFTb3VyY2U7XHJcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5fZGF0YVNvdXJjZSkpIHtcclxuICAgICAgZGF0YVN0cmVhbSA9IG9mKHRoaXMuX2RhdGFTb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhU3RyZWFtKSB7XHJcbiAgICAgIHRoaXMuX2RhdGFTdWJzY3JpcHRpb24gPSBkYXRhU3RyZWFtXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2ludGVydmFsQ29udHJvbGxlciQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlck5vZGVDaGFuZ2VzKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5pc0xhc3QgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2lucHV0VmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMudHlwZSA9IHRoaXMuaW5wdXRzLmdyaWQuYWxsICE9PSAwID8gJ2ZpeGVkJyA6ICdyZXNwb25zaXZlJztcclxuICAgIHRoaXMubG9vcCA9IHRoaXMuaW5wdXRzLmxvb3AgfHwgZmFsc2U7XHJcbiAgICB0aGlzLmlucHV0cy5lYXNpbmcgPSB0aGlzLmlucHV0cy5lYXNpbmcgfHwgJ2N1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJztcclxuICAgIHRoaXMudG91Y2guYWN0aXZlID0gdGhpcy5pbnB1dHMudG91Y2ggfHwgZmFsc2U7XHJcbiAgICB0aGlzLlJUTCA9IHRoaXMuaW5wdXRzLlJUTCA/IHRydWUgOiBmYWxzZTtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSB0aGlzLmlucHV0cy5pbnRlcnZhbCB8fCBudWxsO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLmlucHV0cy52ZWxvY2l0eSA9PT0gJ251bWJlcidcclxuICAgICAgICA/IHRoaXMuaW5wdXRzLnZlbG9jaXR5XHJcbiAgICAgICAgOiB0aGlzLnZlbG9jaXR5O1xyXG5cclxuICAgIGlmICh0aGlzLmlucHV0cy52ZXJ0aWNhbCAmJiB0aGlzLmlucHV0cy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMudmVydGljYWwuZW5hYmxlZCA9IHRoaXMuaW5wdXRzLnZlcnRpY2FsLmVuYWJsZWQ7XHJcbiAgICAgIHRoaXMudmVydGljYWwuaGVpZ2h0ID0gdGhpcy5pbnB1dHMudmVydGljYWwuaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgdGhpcy5kaXJlY3Rpb25TeW0gPSB0aGlzLlJUTCA/ICcnIDogJy0nO1xyXG4gICAgdGhpcy5wb2ludCA9XHJcbiAgICAgIHRoaXMuaW5wdXRzLnBvaW50ICYmIHR5cGVvZiB0aGlzLmlucHV0cy5wb2ludC52aXNpYmxlICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gdGhpcy5pbnB1dHMucG9pbnQudmlzaWJsZVxyXG4gICAgICAgIDogdHJ1ZTtcclxuXHJcbiAgICB0aGlzLl9jYXJvdXNlbFNpemUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uUmVzaXppbmcoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMub25SZXNpemUpO1xyXG4gICAgdGhpcy5vblJlc2l6ZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5kZXZpY2VXaWR0aCAhPT0gZXZlbnQudGFyZ2V0Lm91dGVyV2lkdGgpIHtcclxuICAgICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgYGApO1xyXG4gICAgICAgIHRoaXMuX3N0b3JlQ2Fyb3VzZWxEYXRhKCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDUwMCk7XHJcbiAgfVxyXG5cclxuICAvKiogR2V0IFRvdWNoIGlucHV0ICovXHJcbiAgcHJpdmF0ZSBfdG91Y2goKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dHMudG91Y2gpIHtcclxuICAgICAgY29uc3QgaGFtbWVydGltZSA9IG5ldyBIYW1tZXIodGhpcy50b3VjaENvbnRhaW5lci5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgaGFtbWVydGltZS5nZXQoJ3BhbicpLnNldCh7ZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0hPUklaT05UQUx9KTtcclxuXHJcbiAgICAgIGhhbW1lcnRpbWUub24oJ3BhbnN0YXJ0JywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmNhcm91c2VsV2lkdGggPSB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgLy8gdGhpcy50b3VjaFRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtW3RoaXMuZGV2aWNlVHlwZV07XHJcbiAgICAgICAgdGhpcy5kZXhWYWwgPSAwO1xyXG4gICAgICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCAnJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFudXAnLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fdG91Y2hIYW5kbGluZygncGFubGVmdCcsIGV2KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5kb3duJywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbnJpZ2h0JywgZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhhbW1lcnRpbWUub24oJ3BhbmxlZnQnLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fdG91Y2hIYW5kbGluZygncGFubGVmdCcsIGV2KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5yaWdodCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5yaWdodCcsIGV2KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICAvKmhhbW1lcnRpbWUub24oJ3BhbmVuZCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGV2LnZlbG9jaXR5KSA+PSB0aGlzLnZlbG9jaXR5KSB7XHJcbiAgICAgICAgICB0aGlzLnRvdWNoLnZlbG9jaXR5ID0gZXYudmVsb2NpdHk7XHJcbiAgICAgICAgICBsZXQgZGlyZWMgPSAwO1xyXG4gICAgICAgICAgaWYgKCF0aGlzLlJUTCkge1xyXG4gICAgICAgICAgICBkaXJlYyA9IHRoaXMudG91Y2guc3dpcGUgPT09ICdwYW5yaWdodCcgPyAwIDogMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpcmVjID0gdGhpcy50b3VjaC5zd2lwZSA9PT0gJ3BhbnJpZ2h0JyA/IDEgOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoZGlyZWMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRleFZhbCA9IDA7XHJcbiAgICAgICAgICB0aGlzLl9zZXRTdHlsZShcclxuICAgICAgICAgICAgdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgICAndHJhbnNpdGlvbicsXHJcbiAgICAgICAgICAgICd0cmFuc2Zvcm0gMzI0bXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgLy8gdGhpcy5fc2V0U3R5bGUodGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7Ki9cclxuICAgICAgaGFtbWVydGltZS5vbignaGFtbWVyLmlucHV0JywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgLy8gYWxsb3cgbmVzdGVkIHRvdWNoIGV2ZW50cyB0byBubyBwcm9wYWdhdGUsIHRoaXMgbWF5IGhhdmUgb3RoZXIgc2lkZSBhZmZlY3RzIGJ1dCB3b3JrcyBmb3Igbm93LlxyXG4gICAgICAgIC8vIFRPRE86IEl0IGlzIHByb2JhYmx5IGJldHRlciB0byBjaGVjayB0aGUgc291cmNlIGVsZW1lbnQgb2YgdGhlIGV2ZW50IGFuZCBvbmx5IGFwcGx5IHRoZSBoYW5kbGUgdG8gdGhlIGNvcnJlY3QgY2Fyb3VzZWxcclxuICAgICAgICBldi5zcmNFdmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogaGFuZGxlIHRvdWNoIGlucHV0ICovXHJcbiAgcHJpdmF0ZSBfdG91Y2hIYW5kbGluZyhlOiBzdHJpbmcsIGV2OiBhbnkpOiB2b2lkIHtcclxuICAgIC8vIHZlcnRpY2FsIHRvdWNoIGV2ZW50cyBzZWVtIHRvIGNhdXNlIHRvIHBhbnN0YXJ0IGV2ZW50IHdpdGggYW4gb2RkIGRlbHRhXHJcbiAgICAvLyBhbmQgYSBjZW50ZXIgb2Yge3g6MCx5OjB9IHNvIHRoaXMgd2lsbCBpZ25vcmUgdGhlbVxyXG4gICAgaWYgKGV2LmNlbnRlci54ID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBldiA9IE1hdGguYWJzKHRoaXMudmVydGljYWwuZW5hYmxlZCA/IGV2LmRlbHRhWSA6IGV2LmRlbHRhWCk7XHJcbiAgICBsZXQgdmFsdCA9IGV2IC0gdGhpcy5kZXhWYWw7XHJcbiAgICB2YWx0ID1cclxuICAgICAgdGhpcy50eXBlID09PSAncmVzcG9uc2l2ZSdcclxuICAgICAgICA/IChNYXRoLmFicyhldiAtIHRoaXMuZGV4VmFsKSAvXHJcbiAgICAgICAgKHRoaXMudmVydGljYWwuZW5hYmxlZFxyXG4gICAgICAgICAgPyB0aGlzLnZlcnRpY2FsLmhlaWdodFxyXG4gICAgICAgICAgOiB0aGlzLmNhcm91c2VsV2lkdGgpKSAqXHJcbiAgICAgICAgMTAwXHJcbiAgICAgICAgOiB2YWx0O1xyXG4gICAgdGhpcy5kZXhWYWwgPSBldjtcclxuICAgIHRoaXMudG91Y2guc3dpcGUgPSBlO1xyXG4gICAgdGhpcy5fc2V0VG91Y2hUcmFuc2Zyb20oZSwgdmFsdCk7XHJcbiAgICB0aGlzLl9zZXRUcmFuc2Zvcm1Gcm9tVG91Y2goKTtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRUb3VjaFRyYW5zZnJvbShlOiBzdHJpbmcsIHZhbHQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy5SVEwgPyAncGFucmlnaHQnIDogJ3BhbmxlZnQnO1xyXG4gICAgdGhpcy50b3VjaFRyYW5zZm9ybSA9XHJcbiAgICAgIGUgPT09IGNvbmRpdGlvbiA/IHZhbHQgKyB0aGlzLnRvdWNoVHJhbnNmb3JtIDogdGhpcy50b3VjaFRyYW5zZm9ybSAtIHZhbHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRUcmFuc2Zvcm1Gcm9tVG91Y2goKSB7XHJcblxyXG4gICAgaWYgKHRoaXMudG91Y2hUcmFuc2Zvcm0gPCAwKSB7XHJcbiAgICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPSAwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnID8gJyUnIDogJ3B4JztcclxuXHJcbiAgICBsZXQgIG1heFRyYW5zbGF0ZSA9ICh0aGlzLml0ZW1XaWR0aCAqIHRoaXMuX2RhdGFTb3VyY2UubGVuZ3RoKSAtIHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xyXG4gICAgICBtYXhUcmFuc2xhdGUgPSAobWF4VHJhbnNsYXRlIC8gdGhpcy5jYXJvdXNlbE1haW4xLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgpICogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtYXhUcmFuc2xhdGUgPD0gdGhpcy50b3VjaFRyYW5zZm9ybSkge1xyXG4gICAgICB0aGlzLnRvdWNoVHJhbnNmb3JtID0gbWF4VHJhbnNsYXRlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbk1vdmUuZW1pdCh0aGlzKTtcclxuICAgIHRoaXMuX3NldFN0eWxlKFxyXG4gICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICB0aGlzLnZlcnRpY2FsLmVuYWJsZWRcclxuICAgICAgICA/IGB0cmFuc2xhdGUzZCgwLCAke3RoaXMuZGlyZWN0aW9uU3ltfSR7dGhpcy50b3VjaFRyYW5zZm9ybX0ke3R5cGV9LCAwKWBcclxuICAgICAgICA6IGB0cmFuc2xhdGUzZCgke3RoaXMuZGlyZWN0aW9uU3ltfSR7dGhpcy50b3VjaFRyYW5zZm9ybX0ke3R5cGV9LCAwLCAwKWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiogdGhpcyBmbiB1c2VkIHRvIGRpc2FibGUgdGhlIGludGVydmFsIHdoZW4gaXQgaXMgbm90IG9uIHRoZSB2aWV3cG9ydCAqL1xyXG4gIHByaXZhdGUgX29uV2luZG93U2Nyb2xsaW5nKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdG9wID0gdGhpcy5jYXJvdXNlbC5vZmZzZXRUb3A7XHJcbiAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICBjb25zdCBoZWlnaHR0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgY29uc3QgY2Fyb3VzZWxIZWlnaHQgPSB0aGlzLmNhcm91c2VsLm9mZnNldEhlaWdodDtcclxuICAgIGNvbnN0IGlzQ2Fyb3VzZWxPblNjcmVlbiA9XHJcbiAgICAgIHRvcCA8PSBzY3JvbGxZICsgaGVpZ2h0dCAtIGNhcm91c2VsSGVpZ2h0IC8gNCAmJlxyXG4gICAgICB0b3AgKyBjYXJvdXNlbEhlaWdodCAvIDIgPj0gc2Nyb2xsWTtcclxuXHJcbiAgICBpZiAoaXNDYXJvdXNlbE9uU2NyZWVuKSB7XHJcbiAgICAgIHRoaXMuX2ludGVydmFsQ29udHJvbGxlciQubmV4dCgxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2ludGVydmFsQ29udHJvbGxlciQubmV4dCgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBzdG9yZSBkYXRhIGJhc2VkIG9uIHdpZHRoIG9mIHRoZSBzY3JlZW4gZm9yIHRoZSBjYXJvdXNlbCAqL1xyXG4gIHByaXZhdGUgX3N0b3JlQ2Fyb3VzZWxEYXRhKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXZpY2VXaWR0aCA9IGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZClcclxuICAgICAgPyB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgICA6IDEyMDA7XHJcblxyXG4gICAgdGhpcy5jYXJvdXNlbFdpZHRoID0gdGhpcy5jYXJvdXNlbE1haW4xLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnKSB7XHJcbiAgICAgIHRoaXMuZGV2aWNlVHlwZSA9XHJcbiAgICAgICAgdGhpcy5kZXZpY2VXaWR0aCA+PSAxMjAwXHJcbiAgICAgICAgICA/ICdsZydcclxuICAgICAgICAgIDogdGhpcy5kZXZpY2VXaWR0aCA+PSA5OTJcclxuICAgICAgICAgID8gJ21kJ1xyXG4gICAgICAgICAgOiB0aGlzLmRldmljZVdpZHRoID49IDc2OFxyXG4gICAgICAgICAgICA/ICdzbSdcclxuICAgICAgICAgICAgOiAneHMnO1xyXG5cclxuICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaW5wdXRzLmdyaWRbdGhpcy5kZXZpY2VUeXBlXTtcclxuICAgICAgdGhpcy5pdGVtV2lkdGggPSB0aGlzLmNhcm91c2VsV2lkdGggLyB0aGlzLml0ZW1zO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pdGVtcyA9IE1hdGguY2VpbCh0aGlzLmNhcm91c2VsV2lkdGggLyB0aGlzLmlucHV0cy5ncmlkLmFsbCk7XHJcbiAgICAgIHRoaXMuaXRlbVdpZHRoID0gdGhpcy5pbnB1dHMuZ3JpZC5hbGw7XHJcbiAgICAgIHRoaXMuZGV2aWNlVHlwZSA9ICdhbGwnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2xpZGVJdGVtcyA9ICsodGhpcy5pbnB1dHMuc2xpZGUgPCB0aGlzLml0ZW1zXHJcbiAgICAgID8gdGhpcy5pbnB1dHMuc2xpZGVcclxuICAgICAgOiB0aGlzLml0ZW1zKTtcclxuICAgIHRoaXMubG9hZCA9XHJcbiAgICAgIHRoaXMuaW5wdXRzLmxvYWQgPj0gdGhpcy5zbGlkZUl0ZW1zID8gdGhpcy5pbnB1dHMubG9hZCA6IHRoaXMuc2xpZGVJdGVtcztcclxuICAgIHRoaXMuc3BlZWQgPVxyXG4gICAgICB0aGlzLmlucHV0cy5zcGVlZCAmJiB0aGlzLmlucHV0cy5zcGVlZCA+IC0xID8gdGhpcy5pbnB1dHMuc3BlZWQgOiA0MDA7XHJcblxyXG4gICAgdGhpcy5fY2Fyb3VzZWxQb2ludCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEluaXQgY2Fyb3VzZWwgcG9pbnQgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFBvaW50KCk6IHZvaWQge1xyXG4gICAgLy8gZGVidWdnZXI7XHJcbiAgICAvLyBpZiAodGhpcy51c2VyRGF0YS5wb2ludC52aXNpYmxlID09PSB0cnVlKSB7XHJcbiAgICBjb25zdCBOb3MgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gKHRoaXMuaXRlbXMgLSB0aGlzLnNsaWRlSXRlbXMpO1xyXG4gICAgdGhpcy5wb2ludEluZGV4ID0gTWF0aC5jZWlsKE5vcyAvIHRoaXMuc2xpZGVJdGVtcyk7XHJcbiAgICBjb25zdCBwb2ludGVycyA9IFtdO1xyXG5cclxuICAgIGlmICh0aGlzLnBvaW50SW5kZXggPiAxIHx8ICF0aGlzLmlucHV0cy5wb2ludC5oaWRlT25TaW5nbGVTbGlkZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnRJbmRleDsgaSsrKSB7XHJcbiAgICAgICAgcG9pbnRlcnMucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5wb2ludE51bWJlcnMgPSBwb2ludGVycztcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9pbnROdW1iZXJzKTtcclxuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk7XHJcbiAgICBpZiAodGhpcy5wb2ludEluZGV4IDw9IDEpIHtcclxuICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiAhdGhpcy5sb29wKSB7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICAvKiogY2hhbmdlIHRoZSBhY3RpdmUgcG9pbnQgaW4gY2Fyb3VzZWwgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFBvaW50QWN0aXZlcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGkgPSBNYXRoLmNlaWwodGhpcy5jdXJyZW50U2xpZGUgLyB0aGlzLnNsaWRlSXRlbXMpO1xyXG4gICAgdGhpcy5hY3RpdmVQb2ludCA9IGk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKiogc2V0IHRoZSBzdHlsZSBvZiB0aGUgY2Fyb3VzZWwgYmFzZWQgdGhlIGlucHV0cyBkYXRhICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxTaXplKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b2tlbiA9IHRoaXMuX2dlbmVyYXRlSUQoKTtcclxuICAgIGxldCBkaXNtID0gJyc7XHJcbiAgICB0aGlzLnN0eWxlaWQgPSBgLiR7XHJcbiAgICAgIHRoaXMudG9rZW5cclxuICAgICAgfSA+IC5jYXJvdXNlbC13cmFwcGVyID4gLm5ndWNhcm91c2VsID4gLm5ndS10b3VjaC1jb250YWluZXIgPiAubmd1Y2Fyb3VzZWwtaXRlbXNgO1xyXG5cclxuICAgIGlmICh0aGlzLmlucHV0cy5jdXN0b20gPT09ICdiYW5uZXInKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuY2Fyb3VzZWwsICdiYW5uZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnB1dHMuYW5pbWF0aW9uID09PSAnbGF6eScpIHtcclxuICAgICAgZGlzbSArPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge3RyYW5zaXRpb246IHRyYW5zZm9ybSAuNnMgZWFzZTt9YDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXRlbVN0eWxlID0gJyc7XHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF94cyA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcclxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQueHN9cHh9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX3NtID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxyXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC5zbX1weH1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfbWQgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXHJcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLm1kfXB4fWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9sZyA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcclxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQubGd9cHh9YDtcclxuXHJcbiAgICAgIGl0ZW1TdHlsZSA9IGBAbWVkaWEgKG1heC13aWR0aDo3NjdweCl7JHtpdGVtV2lkdGhfeHN9fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXske2l0ZW1XaWR0aF9zbX19XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6OTkycHgpeyR7aXRlbVdpZHRoX21kfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpeyR7aXRlbVdpZHRoX2xnfX1gO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfeHMgPVxyXG4gICAgICAgIHRoaXMuaW5wdXRzLnR5cGUgPT09ICdtb2JpbGUnXHJcbiAgICAgICAgICA/IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAkezk1IC9cclxuICAgICAgICAgICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7IHdpZHRoOiAkezk1IC8gK3RoaXMuaW5wdXRzLmdyaWQueHN9JTt9YFxyXG4gICAgICAgICAgOiBgJHt0aGlzLnN0eWxlaWR9IC5pdGVtIHtmbGV4OiAwIDAgJHsxMDAgL1xyXG4gICAgICAgICAgK3RoaXMuaW5wdXRzLmdyaWQueHN9JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQueHN9JTt9YDtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9zbSA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cclxuICAgICAgK3RoaXMuaW5wdXRzLmdyaWQuc219JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQuc219JX1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfbWQgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXHJcbiAgICAgICt0aGlzLmlucHV0cy5ncmlkLm1kfSU7IHdpZHRoOiAkezEwMCAvICt0aGlzLmlucHV0cy5ncmlkLm1kfSV9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX2xnID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtmbGV4OiAwIDAgJHsxMDAgL1xyXG4gICAgICArdGhpcy5pbnB1dHMuZ3JpZC5sZ30lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC5sZ30lfWA7XHJcblxyXG4gICAgICBpdGVtU3R5bGUgPSBgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpeyR7aXRlbVdpZHRoX3hzfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7JHtpdGVtV2lkdGhfc219fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXske2l0ZW1XaWR0aF9tZH19XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXske2l0ZW1XaWR0aF9sZ319YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW1TdHlsZSA9IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAke1xyXG4gICAgICAgIHRoaXMuaW5wdXRzLmdyaWQuYWxsXHJcbiAgICAgICAgfXB4OyB3aWR0aDogJHt0aGlzLmlucHV0cy5ncmlkLmFsbH1weDt9YDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgdGhpcy50b2tlbik7XHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxyXG4gICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAnbmd1dmVydGljYWwnXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgIGAke3RoaXMudmVydGljYWwuaGVpZ2h0fXB4YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG4gICAgdGhpcy5SVEwgJiZcclxuICAgICF0aGlzLnZlcnRpY2FsLmVuYWJsZWQgJiZcclxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuY2Fyb3VzZWwsICduZ3VydGwnKTtcclxuICAgIHRoaXMuX2NyZWF0ZVN0eWxlRWxlbShgJHtkaXNtfSAke2l0ZW1TdHlsZX1gKTtcclxuICAgIHRoaXMuX3N0b3JlQ2Fyb3VzZWxEYXRhKCk7XHJcbiAgfVxyXG5cclxuICAvKiogbG9naWMgdG8gc2Nyb2xsIHRoZSBjYXJvdXNlbCBzdGVwIDEgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFNjcm9sbE9uZShCdG46IG51bWJlcik6IHZvaWQge1xyXG4gICAgbGV0IGl0ZW1TcGVlZCA9IHRoaXMuc3BlZWQ7XHJcbiAgICBsZXQgdHJhbnNsYXRlWHZhbCxcclxuICAgICAgY3VycmVudFNsaWRlID0gMDtcclxuICAgIGNvbnN0IHRvdWNoTW92ZSA9IE1hdGguY2VpbCh0aGlzLmRleFZhbCAvIHRoaXMuaXRlbVdpZHRoKTtcclxuICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICcnKTtcclxuXHJcbiAgICBpZiAodGhpcy5wb2ludEluZGV4ID09PSAxKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAoQnRuID09PSAwICYmICgoIXRoaXMubG9vcCAmJiAhdGhpcy5pc0ZpcnN0KSB8fCB0aGlzLmxvb3ApKSB7XHJcbiAgICAgIGNvbnN0IHNsaWRlID0gdGhpcy5zbGlkZUl0ZW1zICogdGhpcy5wb2ludEluZGV4O1xyXG5cclxuICAgICAgY29uc3QgY3VycmVudFNsaWRlRCA9IHRoaXMuY3VycmVudFNsaWRlIC0gdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICBjb25zdCBNb3ZlU2xpZGUgPSBjdXJyZW50U2xpZGVEICsgdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUgPT09IDApIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5pdGVtcztcclxuICAgICAgICBpdGVtU3BlZWQgPSA0MDA7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlSXRlbXMgPj0gTW92ZVNsaWRlKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gdHJhbnNsYXRlWHZhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICAgIGlmICh0b3VjaE1vdmUgPiB0aGlzLnNsaWRlSXRlbXMpIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlIC0gdG91Y2hNb3ZlO1xyXG4gICAgICAgICAgaXRlbVNwZWVkID0gMjAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZSAtIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxUd28oQnRuLCBjdXJyZW50U2xpZGUsIGl0ZW1TcGVlZCk7XHJcbiAgICB9IGVsc2UgaWYgKEJ0biA9PT0gMSAmJiAoKCF0aGlzLmxvb3AgJiYgIXRoaXMuaXNMYXN0KSB8fCB0aGlzLmxvb3ApKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIDw9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLml0ZW1zICsgdGhpcy5zbGlkZUl0ZW1zICYmXHJcbiAgICAgICAgIXRoaXMuaXNMYXN0XHJcbiAgICAgICkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLml0ZW1zO1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0xhc3QpIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSB0cmFuc2xhdGVYdmFsID0gMDtcclxuICAgICAgICBpdGVtU3BlZWQgPSA0MDA7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICAgIGlmICh0b3VjaE1vdmUgPiB0aGlzLnNsaWRlSXRlbXMpIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5zbGlkZUl0ZW1zICsgKHRvdWNoTW92ZSAtIHRoaXMuc2xpZGVJdGVtcyk7XHJcbiAgICAgICAgICBpdGVtU3BlZWQgPSAyMDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbFR3byhCdG4sIGN1cnJlbnRTbGlkZSwgaXRlbVNwZWVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBsb2dpYyB0byBzY3JvbGwgdGhlIGNhcm91c2VsIHN0ZXAgMiAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsU2Nyb2xsVHdvKFxyXG4gICAgQnRuOiBudW1iZXIsXHJcbiAgICBjdXJyZW50U2xpZGU6IG51bWJlcixcclxuICAgIGl0ZW1TcGVlZDogbnVtYmVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cclxuXHJcbiAgICBpZiAodGhpcy5kZXhWYWwgIT09IDApIHtcclxuICAgICAgY29uc3QgdmFsID0gTWF0aC5hYnModGhpcy50b3VjaC52ZWxvY2l0eSk7XHJcbiAgICAgIGxldCBzb210ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAodGhpcy5kZXhWYWwgLyB2YWwgLyB0aGlzLmRleFZhbCkgKiAodGhpcy5kZXZpY2VXaWR0aCAtIHRoaXMuZGV4VmFsKVxyXG4gICAgICApO1xyXG4gICAgICBzb210ID0gc29tdCA+IGl0ZW1TcGVlZCA/IGl0ZW1TcGVlZCA6IHNvbXQ7XHJcbiAgICAgIGl0ZW1TcGVlZCA9IHNvbXQgPCAyMDAgPyAyMDAgOiBzb210O1xyXG4gICAgICB0aGlzLmRleFZhbCA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy53aXRoQW5pbSkge1xyXG4gICAgICB0aGlzLl9zZXRTdHlsZShcclxuICAgICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ3RyYW5zaXRpb24nLFxyXG4gICAgICAgIGB0cmFuc2Zvcm0gJHtpdGVtU3BlZWR9bXMgJHt0aGlzLmlucHV0cy5lYXNpbmd9YFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmlucHV0cy5hbmltYXRpb24gJiZcclxuICAgICAgdGhpcy5fY2Fyb3VzZWxBbmltYXRvcihcclxuICAgICAgICBCdG4sXHJcbiAgICAgICAgY3VycmVudFNsaWRlICsgMSxcclxuICAgICAgICBjdXJyZW50U2xpZGUgKyB0aGlzLml0ZW1zLFxyXG4gICAgICAgIGl0ZW1TcGVlZCxcclxuICAgICAgICBNYXRoLmFicyh0aGlzLmN1cnJlbnRTbGlkZSAtIGN1cnJlbnRTbGlkZSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCBgYCk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGFTb3VyY2UpO1xyXG4gICAgdGhpcy5pdGVtTGVuZ3RoID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aDtcclxuICAgIHRoaXMuX3RyYW5zZm9ybVN0eWxlKGN1cnJlbnRTbGlkZSk7XHJcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IGN1cnJlbnRTbGlkZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uTW92ZS5lbWl0KHRoaXMpO1xyXG4gICAgfSwgNDAwKTtcclxuXHJcbiAgICB0aGlzLl9jYXJvdXNlbFBvaW50QWN0aXZlcigpO1xyXG4gICAgdGhpcy5fY2Fyb3VzZWxMb2FkVHJpZ2dlcigpO1xyXG4gICAgdGhpcy53aXRoQW5pbSA9IHRydWU7XHJcbiAgICAvLyBpZiAoY3VycmVudFNsaWRlID09PSAxMikge1xyXG4gICAgLy8gICB0aGlzLl9zd2l0Y2hEYXRhU291cmNlKHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICAvKiogYm9vbGVhbiBmdW5jdGlvbiBmb3IgbWFraW5nIGlzRmlyc3QgYW5kIGlzTGFzdCAqL1xyXG4gIHByaXZhdGUgX2J0bkJvb2xlYW4oZmlyc3Q6IG51bWJlciwgbGFzdDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmlzRmlyc3QgPSAhIWZpcnN0O1xyXG4gICAgdGhpcy5pc0xhc3QgPSAhIWxhc3Q7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90cmFuc2Zvcm1TdHJpbmcoZ3JpZDogc3RyaW5nLCBzbGlkZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGxldCBjb2xsZWN0ID0gJyc7XHJcbiAgICBjb2xsZWN0ICs9IGAke3RoaXMuc3R5bGVpZH0geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKGA7XHJcblxyXG4gICAgaWYgKHRoaXMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybVtncmlkXSA9XHJcbiAgICAgICAgKHRoaXMudmVydGljYWwuaGVpZ2h0IC8gdGhpcy5pbnB1dHMuZ3JpZFtncmlkXSkgKiBzbGlkZTtcclxuICAgICAgY29sbGVjdCArPSBgMCwgLSR7dGhpcy50cmFuc2Zvcm1bZ3JpZF19cHgsIDBgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1bZ3JpZF0gPSAoMTAwIC8gdGhpcy5pbnB1dHMuZ3JpZFtncmlkXSkgKiBzbGlkZTtcclxuICAgICAgY29sbGVjdCArPSBgJHt0aGlzLmRpcmVjdGlvblN5bX0ke3RoaXMudHJhbnNmb3JtW2dyaWRdfSUsIDAsIDBgO1xyXG4gICAgfVxyXG4gICAgY29sbGVjdCArPSBgKTsgfWA7XHJcbiAgICByZXR1cm4gY29sbGVjdDtcclxuICB9XHJcblxyXG4gIC8qKiBzZXQgdGhlIHRyYW5zZm9ybSBzdHlsZSB0byBzY3JvbGwgdGhlIGNhcm91c2VsICAqL1xyXG4gIHByaXZhdGUgX3RyYW5zZm9ybVN0eWxlKHNsaWRlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGxldCBzbGlkZUNzcyA9ICcnO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnKSB7XHJcbiAgICAgIHNsaWRlQ3NzID0gYEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKFxyXG4gICAgICAgICd4cycsXHJcbiAgICAgICAgc2xpZGVcclxuICAgICAgKX19XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKCdzbScsIHNsaWRlKX0gfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHske3RoaXMuX3RyYW5zZm9ybVN0cmluZygnbWQnLCBzbGlkZSl9IH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKCdsZycsIHNsaWRlKX0gfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5hbGwgPSB0aGlzLmlucHV0cy5ncmlkLmFsbCAqIHNsaWRlO1xyXG4gICAgICB0aGlzLnRvdWNoVHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm0uYWxsO1xyXG4gICAgICBzbGlkZUNzcyA9IGAke3RoaXMuc3R5bGVpZH0geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25TeW1cclxuICAgICAgICB9JHt0aGlzLnRyYW5zZm9ybS5hbGx9cHgsIDAsIDApO2A7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNhcm91c2VsQ3NzTm9kZS5pbm5lckhUTUwgPSBzbGlkZUNzcztcclxuICB9XHJcblxyXG4gIC8qKiB0aGlzIHdpbGwgdHJpZ2dlciB0aGUgY2Fyb3VzZWwgdG8gbG9hZCB0aGUgaXRlbXMgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbExvYWRUcmlnZ2VyKCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmlucHV0cy5sb2FkID09PSAnbnVtYmVyJykge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5sb2FkIDw9IHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5pdGVtcyAmJlxyXG4gICAgICB0aGlzLmNhcm91c2VsTG9hZC5lbWl0KHRoaXMuY3VycmVudFNsaWRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBnZW5lcmF0ZSBDbGFzcyBmb3IgZWFjaCBjYXJvdXNlbCB0byBzZXQgc3BlY2lmaWMgc3R5bGUgKi9cclxuICBwcml2YXRlIF9nZW5lcmF0ZUlEKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgdGV4dCA9ICcnO1xyXG4gICAgY29uc3QgcG9zc2libGUgPVxyXG4gICAgICAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgIHRleHQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBuZ3VjYXJvdXNlbCR7dGV4dH1gO1xyXG4gIH1cclxuXHJcbiAgLyoqIGhhbmRsZSB0aGUgYXV0byBzbGlkZSAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsSW50ZXJ2YWwoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudDtcclxuICAgIGlmICh0aGlzLmludGVydmFsICYmIHRoaXMubG9vcCkge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyNCA9IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5vblNjcm9sbGluZyk7XHJcbiAgICAgICAgdGhpcy5vblNjcm9sbGluZyA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fb25XaW5kb3dTY3JvbGxpbmcoKTtcclxuICAgICAgICB9LCA2MDApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHBsYXkkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ21vdXNlbGVhdmUnKS5waXBlKG1hcFRvKDEpKTtcclxuICAgICAgY29uc3QgcGF1c2UkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ21vdXNlZW50ZXInKS5waXBlKG1hcFRvKDApKTtcclxuXHJcbiAgICAgIGNvbnN0IHRvdWNoUGxheSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAndG91Y2hzdGFydCcpLnBpcGUobWFwVG8oMSkpO1xyXG4gICAgICBjb25zdCB0b3VjaFBhdXNlJCA9IGZyb21FdmVudChjb250YWluZXIsICd0b3VjaGVuZCcpLnBpcGUobWFwVG8oMCkpO1xyXG5cclxuICAgICAgY29uc3QgaW50ZXJ2YWwkID0gaW50ZXJ2YWwodGhpcy5pbnB1dHMuaW50ZXJ2YWwudGltaW5nKS5waXBlKG1hcFRvKDEpKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxJbnQgPSBtZXJnZShcclxuICAgICAgICAgIHBsYXkkLFxyXG4gICAgICAgICAgdG91Y2hQbGF5JCxcclxuICAgICAgICAgIHBhdXNlJCxcclxuICAgICAgICAgIHRvdWNoUGF1c2UkLFxyXG4gICAgICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJFxyXG4gICAgICAgIClcclxuICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBzdGFydFdpdGgoMSksXHJcbiAgICAgICAgICAgIHN3aXRjaE1hcCh2YWwgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNIb3ZlcmVkID0gIXZhbDtcclxuICAgICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgICAgICByZXR1cm4gdmFsID8gaW50ZXJ2YWwkIDogZW1wdHkoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoMSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSwgdGhpcy5pbnRlcnZhbC5pbml0aWFsRGVsYXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdXBkYXRlSXRlbUluZGV4Q29udGV4dEFuaSgpIHtcclxuICAgIGNvbnN0IHZpZXdDb250YWluZXIgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXI7XHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgcmVuZGVySW5kZXggPSAwLCBjb3VudCA9IHZpZXdDb250YWluZXIubGVuZ3RoO1xyXG4gICAgICByZW5kZXJJbmRleCA8IGNvdW50O1xyXG4gICAgICByZW5kZXJJbmRleCsrXHJcbiAgICApIHtcclxuICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KHJlbmRlckluZGV4KSBhcyBhbnk7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xyXG4gICAgICBjb250ZXh0LmNvdW50ID0gY291bnQ7XHJcbiAgICAgIGNvbnRleHQuZmlyc3QgPSByZW5kZXJJbmRleCA9PT0gMDtcclxuICAgICAgY29udGV4dC5sYXN0ID0gcmVuZGVySW5kZXggPT09IGNvdW50IC0gMTtcclxuICAgICAgY29udGV4dC5ldmVuID0gcmVuZGVySW5kZXggJSAyID09PSAwO1xyXG4gICAgICBjb250ZXh0Lm9kZCA9ICFjb250ZXh0LmV2ZW47XHJcbiAgICAgIGNvbnRleHQuaW5kZXggPSByZW5kZXJJbmRleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBhbmltYXRlIHRoZSBjYXJvdXNlbCBpdGVtcyAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsQW5pbWF0b3IoXHJcbiAgICBkaXJlY3Rpb246IG51bWJlcixcclxuICAgIHN0YXJ0OiBudW1iZXIsXHJcbiAgICBlbmQ6IG51bWJlcixcclxuICAgIHNwZWVkOiBudW1iZXIsXHJcbiAgICBsZW5ndGg6IG51bWJlcixcclxuICAgIHZpZXdDb250YWluZXIgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXJcclxuICApOiB2b2lkIHtcclxuICAgIGxldCB2YWwgPSBsZW5ndGggPCA1ID8gbGVuZ3RoIDogNTtcclxuICAgIHZhbCA9IHZhbCA9PT0gMSA/IDMgOiB2YWw7XHJcbiAgICBjb25zdCBjb2xsZWN0SW5kZXggPSBbXTtcclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydCAtIDE7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgIGNvbGxlY3RJbmRleC5wdXNoKGkpO1xyXG4gICAgICAgIHZhbCA9IHZhbCAqIDI7XHJcbiAgICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KGkpIGFzIGFueTtcclxuICAgICAgICBpZiAodmlld1JlZikge1xyXG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgICAgICBjb250ZXh0LmFuaW1hdGUgPSB7dmFsdWU6IHRydWUsIHBhcmFtczoge2Rpc3RhbmNlOiB2YWx9fTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSBlbmQgLSAxOyBpID49IHN0YXJ0IC0gMTsgaS0tKSB7XHJcbiAgICAgICAgY29sbGVjdEluZGV4LnB1c2goaSk7XHJcbiAgICAgICAgdmFsID0gdmFsICogMjtcclxuICAgICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQoaSkgYXMgYW55O1xyXG4gICAgICAgIGlmICh2aWV3UmVmKSB7XHJcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcclxuICAgICAgICAgIGNvbnRleHQuYW5pbWF0ZSA9IHt2YWx1ZTogdHJ1ZSwgcGFyYW1zOiB7ZGlzdGFuY2U6IC12YWx9fTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3JlbW92ZUFuaW1hdGlvbnMoY29sbGVjdEluZGV4KTtcclxuICAgIH0sIHNwZWVkICogMC43KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3JlbW92ZUFuaW1hdGlvbnMoaW5kZXhzOiBudW1iZXJbXSkge1xyXG4gICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lcjtcclxuICAgIGluZGV4cy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQoaSkgYXMgYW55O1xyXG4gICAgICBpZiAodmlld1JlZikge1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xyXG4gICAgICAgIGNvbnRleHQuYW5pbWF0ZSA9IHt2YWx1ZTogZmFsc2UsIHBhcmFtczoge2Rpc3RhbmNlOiAwfX07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKiogU2hvcnQgZm9ybSBmb3Igc2V0RWxlbWVudFN0eWxlICovXHJcbiAgcHJpdmF0ZSBfc2V0U3R5bGUoZWw6IGFueSwgcHJvcDogYW55LCB2YWw6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwsIHByb3AsIHZhbCk7XHJcbiAgfVxyXG5cclxuICAvKiogRm9yIGdlbmVyYXRpbmcgc3R5bGUgdGFnICovXHJcbiAgcHJpdmF0ZSBfY3JlYXRlU3R5bGVFbGVtKGRhdGFzPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzdHlsZUl0ZW0gPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgaWYgKGRhdGFzKSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlVGV4dCA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZVRleHQoZGF0YXMpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUl0ZW0sIHN0eWxlVGV4dCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmNhcm91c2VsLCBzdHlsZUl0ZW0pO1xyXG4gICAgcmV0dXJuIHN0eWxlSXRlbTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ25ndS1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICduZ3UtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyduZ3UtaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5ndUl0ZW1Db21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLml0ZW0nKSBjbGFzc2VzID0gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduZ3UtdGlsZScsXG4gIHRlbXBsYXRlVXJsOiAnbmd1LXRpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbmd1LXRpbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3VUaWxlQ29tcG9uZW50IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pdGVtJykgY2xhc3NlcyA9IHRydWU7XG59XG4iLCJpbXBvcnQge1xuICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcbiAgTmd1Q2Fyb3VzZWxJdGVtRGlyZWN0aXZlLFxuICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXG4gIE5ndUNhcm91c2VsT3V0bGV0LFxuICBOZ3VDYXJvdXNlbFBvaW50RGlyZWN0aXZlLFxuICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsIE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZVxufSBmcm9tICcuL25ndS1jYXJvdXNlbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd1SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbmd1LWl0ZW0vbmd1LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmd1Q2Fyb3VzZWwgfSBmcm9tICcuL25ndS1jYXJvdXNlbC9uZ3UtY2Fyb3VzZWwuY29tcG9uZW50JztcbmltcG9ydCB7IE5ndVRpbGVDb21wb25lbnQgfSBmcm9tICcuL25ndS10aWxlL25ndS10aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3VDYXJvdXNlbFNlcnZpY2UgfSBmcm9tICcuL25ndS1jYXJvdXNlbC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZ3VDYXJvdXNlbCxcbiAgICBOZ3VJdGVtQ29tcG9uZW50LFxuICAgIE5ndVRpbGVDb21wb25lbnQsXG4gICAgTmd1Q2Fyb3VzZWxQb2ludERpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLFxuICAgIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbFdyYXBwZXJEaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxPdXRsZXRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmd1Q2Fyb3VzZWwsXG4gICAgTmd1SXRlbUNvbXBvbmVudCxcbiAgICBOZ3VUaWxlQ29tcG9uZW50LFxuICAgIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxJdGVtRGlyZWN0aXZlLFxuICAgIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxXcmFwcGVyRGlyZWN0aXZlLFxuICAgIE5ndUNhcm91c2VsT3V0bGV0XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE5ndUNhcm91c2VsU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiRGlyZWN0aXZlIiwiVGVtcGxhdGVSZWYiLCJWaWV3Q29udGFpbmVyUmVmIiwiRWxlbWVudFJlZiIsInRzbGliXzEuX19leHRlbmRzIiwiRXZlbnRFbWl0dGVyIiwiU3ViamVjdCIsImlzRGV2TW9kZSIsIk9ic2VydmFibGUiLCJvZiIsInRha2VVbnRpbCIsImlzUGxhdGZvcm1Ccm93c2VyIiwiZnJvbUV2ZW50IiwibWFwVG8iLCJpbnRlcnZhbCIsIm1lcmdlIiwic3RhcnRXaXRoIiwic3dpdGNoTWFwIiwiZW1wdHkiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIlJlbmRlcmVyMiIsIkl0ZXJhYmxlRGlmZmVycyIsIkluamVjdCIsIlBMQVRGT1JNX0lEIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJWaWV3Q2hpbGQiLCJPdXRwdXQiLCJDb250ZW50Q2hpbGRyZW4iLCJJbnB1dCIsIkNvbnRlbnRDaGlsZCIsIkhvc3RCaW5kaW5nIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQUNFLDBCQUNTLEtBQW1CLEVBQ25CLFFBQXlCLEVBQ3pCLFFBQTJCLEVBQzNCLFNBQThCLEVBQzlCLE1BQWtCLEVBQ2xCLFlBQTJCLEVBQzNCLFVBQXVCLEVBQ3ZCLElBQWMsRUFDZCxLQUFVLEVBQ1YsS0FBUyxFQUNULElBQVEsRUFDUixXQUFlLEVBQ2YsYUFBaUIsRUFDakIsU0FBYSxFQUNi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