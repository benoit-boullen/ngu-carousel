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
                this.carouselCssNode.innerHTML = '';
                this.moveTo(0);
                this._carouselPoint();
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
                    // const node = this._defDirec.find(items => item.item);
                    /** @type {?} */
                    var node = _this._getNodeDef(data[currentIndex], currentIndex);
                    if (item.previousIndex == null) {
                        /** @type {?} */
                        var context = new NguCarouselOutletContext(data[currentIndex]);
                        context.index = currentIndex;
                        viewContainer.createEmbeddedView(node.template, context, currentIndex);
                    }
                    else if (currentIndex == null) {
                        viewContainer.remove(adjustedPreviousIndex);
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
                    hammertime.on('panend', function (ev) {
                        if (Math.abs(ev.velocity) >= _this.velocity) {
                            _this.touch.velocity = ev.velocity;
                            /** @type {?} */
                            var direc = 0;
                            if (!_this.RTL) {
                                direc = _this.touch.swipe === 'panright' ? 0 : 1;
                            }
                            else {
                                direc = _this.touch.swipe === 'panright' ? 1 : 0;
                            }
                            _this._carouselScrollOne(direc);
                        }
                        else {
                            _this.dexVal = 0;
                            _this._setStyle(_this.nguItemsContainer.nativeElement, 'transition', 'transform 324ms cubic-bezier(0, 0, 0.2, 1)');
                            // this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
                        }
                    });
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
                // cubic-bezier(0.15, 1.04, 0.54, 1.13)
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlwZWNvZGUtY2Fyb3VzZWwudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL25ndS1jYXJvdXNlbC9uZ3UtY2Fyb3VzZWwudHMiLCJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC9saWIvbmd1LWNhcm91c2VsLnNlcnZpY2UudHMiLCJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL25ndS1jYXJvdXNlbC5kaXJlY3RpdmUudHMiLCJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC9saWIvbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC5jb21wb25lbnQudHMiLCJuZzovL0BoeXBlY29kZS9jYXJvdXNlbC9saWIvbmd1LWl0ZW0vbmd1LWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvbGliL25ndS10aWxlL25ndS10aWxlLmNvbXBvbmVudC50cyIsIm5nOi8vQGh5cGVjb2RlL2Nhcm91c2VsL2xpYi9uZ3UtY2Fyb3VzZWwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbFN0b3JlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB0b3VjaCA9IG5ldyBUb3VjaCgpLFxyXG4gICAgcHVibGljIHZlcnRpY2FsID0gbmV3IFZlcnRpY2FsKCksXHJcbiAgICBwdWJsaWMgaW50ZXJ2YWw/OiBDYXJvdXNlbEludGVydmFsLFxyXG4gICAgcHVibGljIHRyYW5zZm9ybSA9IG5ldyBOZ3VUcmFuc2Zyb20oKSxcclxuICAgIHB1YmxpYyBidXR0b24/OiBOZ3VCdXR0b24sXHJcbiAgICBwdWJsaWMgdmlzaWJsZUl0ZW1zPzogSXRlbXNDb250cm9sLFxyXG4gICAgcHVibGljIGRldmljZVR5cGU/OiBEZXZpY2VUeXBlLFxyXG4gICAgcHVibGljIHR5cGUgPSAnZml4ZWQnLFxyXG4gICAgcHVibGljIHRva2VuID0gJycsXHJcbiAgICBwdWJsaWMgaXRlbXMgPSAwLFxyXG4gICAgcHVibGljIGxvYWQgPSAwLFxyXG4gICAgcHVibGljIGRldmljZVdpZHRoID0gMCxcclxuICAgIHB1YmxpYyBjYXJvdXNlbFdpZHRoID0gMCxcclxuICAgIHB1YmxpYyBpdGVtV2lkdGggPSAwLFxyXG4gICAgcHVibGljIHNsaWRlSXRlbXMgPSAwLFxyXG4gICAgcHVibGljIGl0ZW1XaWR0aFBlciA9IDAsXHJcbiAgICBwdWJsaWMgaXRlbUxlbmd0aCA9IDAsXHJcbiAgICBwdWJsaWMgY3VycmVudFNsaWRlID0gMCxcclxuICAgIHB1YmxpYyBlYXNpbmcgPSAnY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLFxyXG4gICAgcHVibGljIHNwZWVkID0gMjAwLFxyXG4gICAgcHVibGljIGxvb3AgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBkZXhWYWwgPSAwLFxyXG4gICAgcHVibGljIHRvdWNoVHJhbnNmb3JtID0gMCxcclxuICAgIHB1YmxpYyBpc0VuZCA9IGZhbHNlLFxyXG4gICAgcHVibGljIGlzRmlyc3QgPSB0cnVlLFxyXG4gICAgcHVibGljIGlzTGFzdCA9IGZhbHNlLFxyXG4gICAgcHVibGljIFJUTCA9IGZhbHNlLFxyXG4gICAgcHVibGljIHBvaW50ID0gdHJ1ZSxcclxuICAgIHB1YmxpYyB2ZWxvY2l0eSA9IDFcclxuICApIHt9XHJcbn1cclxuZXhwb3J0IHR5cGUgRGV2aWNlVHlwZSA9ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAnYWxsJztcclxuXHJcbmV4cG9ydCB0eXBlIEJ1dHRvblZpc2libGUgPSAnZGlzYWJsZWQnIHwgJ2hpZGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29udHJvbCB7XHJcbiAgc3RhcnQ6IG51bWJlcjtcclxuICBlbmQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsIHtcclxuICBlbmFibGVkOiBib29sZWFuO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIC8vIG51bUhlaWdodD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ndUJ1dHRvbiB7XHJcbiAgdmlzaWJpbGl0eT86IEJ1dHRvblZpc2libGU7XHJcbiAgZWxhc3RpYz86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvdWNoIHtcclxuICBhY3RpdmU/OiBib29sZWFuO1xyXG4gIHN3aXBlOiBzdHJpbmc7XHJcbiAgdmVsb2NpdHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ndVRyYW5zZnJvbSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgeHMgPSAwLFxyXG4gICAgcHVibGljIHNtID0gMCxcclxuICAgIHB1YmxpYyBtZCA9IDAsXHJcbiAgICBwdWJsaWMgbGcgPSAwLFxyXG4gICAgcHVibGljIGFsbCA9IDBcclxuICApIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbENvbmZpZyB7XHJcbiAgZ3JpZDogTmd1VHJhbnNmcm9tO1xyXG4gIHNsaWRlPzogbnVtYmVyO1xyXG4gIHNwZWVkPzogbnVtYmVyO1xyXG4gIGludGVydmFsPzogQ2Fyb3VzZWxJbnRlcnZhbDtcclxuICBhbmltYXRpb24/OiBBbmltYXRlO1xyXG4gIHBvaW50PzogUG9pbnQ7XHJcbiAgdHlwZT86IHN0cmluZztcclxuICBsb2FkPzogbnVtYmVyO1xyXG4gIGN1c3RvbT86IEN1c3RvbTtcclxuICBsb29wPzogYm9vbGVhbjtcclxuICB0b3VjaD86IGJvb2xlYW47XHJcbiAgZWFzaW5nPzogc3RyaW5nO1xyXG4gIFJUTD86IGJvb2xlYW47XHJcbiAgYnV0dG9uPzogTmd1QnV0dG9uO1xyXG4gIHZlcnRpY2FsPzogVmVydGljYWw7XHJcbiAgdmVsb2NpdHk/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEN1c3RvbSA9ICdiYW5uZXInO1xyXG5leHBvcnQgdHlwZSBBbmltYXRlID0gJ2xhenknO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XHJcbiAgdmlzaWJsZTogYm9vbGVhbjtcclxuICBoaWRlT25TaW5nbGVTbGlkZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uIHtcclxuICB0eXBlPzogQW5pbWF0ZTtcclxuICBhbmltYXRlU3R5bGVzPzogQW5pbWF0aW9uU3R5bGVzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvblN0eWxlcyB7XHJcbiAgc3R5bGU/OiBzdHJpbmc7XHJcbiAgb3Blbj86IHN0cmluZztcclxuICBjbG9zZT86IHN0cmluZztcclxuICBzdGFnZ2VyPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhcm91c2VsSW50ZXJ2YWwge1xyXG4gIHRpbWluZzogbnVtYmVyO1xyXG4gIGluaXRpYWxEZWxheT86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsT3V0bGV0Q29udGV4dDxUPiB7XHJcbiAgLyoqIERhdGEgZm9yIHRoZSBub2RlLiAqL1xyXG4gICRpbXBsaWNpdDogVDtcclxuXHJcbiAgLyoqIERlcHRoIG9mIHRoZSBub2RlLiAqL1xyXG4gIGxldmVsOiBudW1iZXI7XHJcblxyXG4gIC8qKiBJbmRleCBsb2NhdGlvbiBvZiB0aGUgbm9kZS4gKi9cclxuICBpbmRleD86IG51bWJlcjtcclxuXHJcbiAgLyoqIExlbmd0aCBvZiB0aGUgbnVtYmVyIG9mIHRvdGFsIGRhdGFOb2Rlcy4gKi9cclxuICBjb3VudD86IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogVCkge1xyXG4gICAgdGhpcy4kaW1wbGljaXQgPSBkYXRhO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5ndUNhcm91c2VsIH0gZnJvbSAnLi9uZ3UtY2Fyb3VzZWwvbmd1LWNhcm91c2VsLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbFNlcnZpY2Uge1xyXG5cclxuXHJcbiAgY2Fyb3VzZWw6IE5ndUNhcm91c2VsPGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG4gIHNldENhcm91c2VsKGNhcm91c2VsOiBOZ3VDYXJvdXNlbDxhbnk+KSB7XHJcbiAgICB0aGlzLmNhcm91c2VsID0gY2Fyb3VzZWw7XHJcbiAgfVxyXG5cclxuICBnZXRDYXJvdXNlbCgpOiBOZ3VDYXJvdXNlbDxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmNhcm91c2VsO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW05ndUNhcm91c2VsSXRlbV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUge31cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tOZ3VDYXJvdXNlbE5leHRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlIHtcclxuICAvLyBASG9zdEJpbmRpbmcoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgLy8gQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgZGlzcGxheSA9ICdibG9jayc7XHJcbiAgLy8gQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIC8vIG9uQ2xpY2soKSB7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbTmd1Q2Fyb3VzZWxQcmV2XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSB7XHJcbiAgLy8gQEhvc3RCaW5kaW5nKCdkaXNhYmxlZCcpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIC8vIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIGRpc3BsYXkgPSAnYmxvY2snO1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbTmd1Q2Fyb3VzZWxQb2ludF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbFBvaW50RGlyZWN0aXZlIHt9XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbbmd1Q2Fyb3VzZWxEZWZdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmU8VD4ge1xyXG4gIHdoZW46IChpbmRleDogbnVtYmVyLCBub2RlRGF0YTogVCkgPT4gYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbbmd1Q2Fyb3VzZWxPdXRsZXRdJ1xyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxPdXRsZXQge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbbmd1Q2Fyb3VzZWxXcmFwcGVyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBFbGVtZW50UmVmPGFueT4pIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLCBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRG9DaGVjayxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgaXNEZXZNb2RlLFxyXG4gIEl0ZXJhYmxlQ2hhbmdlUmVjb3JkLFxyXG4gIEl0ZXJhYmxlQ2hhbmdlcyxcclxuICBJdGVyYWJsZURpZmZlcixcclxuICBJdGVyYWJsZURpZmZlcnMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUExBVEZPUk1fSUQsIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVHJhY2tCeUZ1bmN0aW9uLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGVtcHR5LCBmcm9tRXZlbnQsIGludGVydmFsLCBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXBUbywgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE5ndUNhcm91c2VsQ29uZmlnLCBOZ3VDYXJvdXNlbE91dGxldENvbnRleHQsIE5ndUNhcm91c2VsU3RvcmUgfSBmcm9tICcuL25ndS1jYXJvdXNlbCc7XHJcbmltcG9ydCB7IE5ndUNhcm91c2VsU2VydmljZSB9IGZyb20gJy4uL25ndS1jYXJvdXNlbC5zZXJ2aWNlJztcclxuaW1wb3J0IHtcclxuICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxPdXRsZXQsXHJcbiAgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZVxyXG59IGZyb20gJy4uL25ndS1jYXJvdXNlbC5kaXJlY3RpdmUnO1xyXG5cclxuXHJcbi8vIFRPRE8gY2FsY3VsZXIgbGEgdGFpbGxlIHBvc3NpYmxlIHBvdXIgbGUgLm5ndWNhcnNvdWwgZW4gZm9uY3Rpb24gZGVzIGJvdXRvbnMgcHJldi9uZXh0XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICduZ3UtY2Fyb3VzZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnbmd1LWNhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbmd1LWNhcm91c2VsLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgdmlld1Byb3ZpZGVyczogW05ndUNhcm91c2VsU2VydmljZV0sXHJcbiAgcHJvdmlkZXJzOiBbTmd1Q2Fyb3VzZWxTZXJ2aWNlXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LWNsYXNzLXN1ZmZpeFxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWw8VD4gZXh0ZW5kcyBOZ3VDYXJvdXNlbFN0b3JlXHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XHJcbiAgX2RhdGFTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBfZGF0YURpZmZlcjogSXRlcmFibGVEaWZmZXI8e30+O1xyXG4gIHN0eWxlaWQ6IHN0cmluZztcclxuICBhY3RpdmVQb2ludDogbnVtYmVyO1xyXG4gIGlzSG92ZXJlZCA9IGZhbHNlO1xyXG4gIC8vIGlzRmlyc3RzcyA9IDA7XHJcbiAgYXJyYXlDaGFuZ2VzOiBJdGVyYWJsZUNoYW5nZXM8e30+O1xyXG4gIGNhcm91c2VsSW50OiBTdWJzY3JpcHRpb247XHJcbiAgQFZpZXdDaGlsZChOZ3VDYXJvdXNlbE91dGxldClcclxuICBfbm9kZU91dGxldDogTmd1Q2Fyb3VzZWxPdXRsZXQ7XHJcbiAgQFZpZXdDaGlsZChOZ3VDYXJvdXNlbFdyYXBwZXJEaXJlY3RpdmUpXHJcbiAgX2Nhcm91c2VsV3JhcHBlcjogTmd1Q2Fyb3VzZWxXcmFwcGVyRGlyZWN0aXZlO1xyXG4gIHBvaW50TnVtYmVyczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIC8vIGlzRmlyc3RzcyA9IDA7XHJcbiAgbGlzdGVuZXIxOiAoKSA9PiB2b2lkO1xyXG4gIGxpc3RlbmVyMjogKCkgPT4gdm9pZDtcclxuICBsaXN0ZW5lcjM6ICgpID0+IHZvaWQ7XHJcbiAgbGlzdGVuZXI0OiAoKSA9PiB2b2lkO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtb24tcHJlZml4XHJcbiAgQE91dHB1dCgnb25Nb3ZlJylcclxuICBwdWJsaWMgb25Nb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxOZ3VDYXJvdXNlbDxUPj4oKTtcclxuICBwcml2YXRlIF9kZWZhdWx0Tm9kZURlZjogTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmU8YW55PiB8IG51bGw7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSlcclxuICBwcml2YXRlIF9kZWZEaXJlYzogUXVlcnlMaXN0PE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPGFueT4+O1xyXG4gIHByaXZhdGUgZGlyZWN0aW9uU3ltOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBjYXJvdXNlbENzc05vZGU6IGFueTtcclxuICBwcml2YXRlIHBvaW50SW5kZXg6IG51bWJlcjtcclxuICBwcml2YXRlIHdpdGhBbmltID0gdHJ1ZTtcclxuICBASW5wdXQoJ2lucHV0cycpXHJcbiAgcHJpdmF0ZSBpbnB1dHM6IE5ndUNhcm91c2VsQ29uZmlnO1xyXG4gIEBPdXRwdXQoJ2Nhcm91c2VsTG9hZCcpXHJcbiAgcHJpdmF0ZSBjYXJvdXNlbExvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQFZpZXdDaGlsZCgnbmd1Y2Fyb3VzZWwnLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgcHJpdmF0ZSBjYXJvdXNlbE1haW4xOiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkKCduZ3VJdGVtc0NvbnRhaW5lcicsIHtyZWFkOiBFbGVtZW50UmVmfSlcclxuICBwcml2YXRlIG5ndUl0ZW1zQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkKCd0b3VjaENvbnRhaW5lcicsIHtyZWFkOiBFbGVtZW50UmVmfSlcclxuICBwcml2YXRlIHRvdWNoQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIHByaXZhdGUgX2ludGVydmFsQ29udHJvbGxlciQgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XHJcbiAgcHJpdmF0ZSBjYXJvdXNlbDogYW55O1xyXG4gIHByaXZhdGUgb25SZXNpemU6IGFueTtcclxuICBwcml2YXRlIG9uU2Nyb2xsaW5nOiBhbnk7XHJcbiAgcHJpdmF0ZSBfdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248VD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxyXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGNhcm91c2VsU2VydmljZTogTmd1Q2Fyb3VzZWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5jYXJvdXNlbFNlcnZpY2Uuc2V0Q2Fyb3VzZWwodGhpcyk7XHJcbiAgfVxyXG5cclxuICBfZGF0YVNvdXJjZTogYW55O1xyXG5cclxuICBASW5wdXQoJ2RhdGFTb3VyY2UnKVxyXG4gIGdldCBkYXRhU291cmNlKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZTtcclxuICB9XHJcblxyXG4gIHNldCBkYXRhU291cmNlKGRhdGE6IGFueSkge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSwgdGhpcy5kYXRhU291cmNlKTtcclxuICAgICAgLy8gdGhpcy5pc0ZpcnN0c3MrKztcclxuICAgICAgdGhpcy5fc3dpdGNoRGF0YVNvdXJjZShkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKiogVGhlIHNldHRlciBpcyB1c2VkIHRvIGNhdGNoIHRoZSBidXR0b24gaWYgdGhlIGJ1dHRvbiBoYXMgbmdJZlxyXG4gICAqIGlzc3VlIGlkICM5MVxyXG4gICAqL1xyXG4gIEBDb250ZW50Q2hpbGQoTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLCB7cmVhZDogRWxlbWVudFJlZn0pXHJcbiAgc2V0IG5leHRCdG4oYnRuOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmxpc3RlbmVyMiAmJiB0aGlzLmxpc3RlbmVyMigpO1xyXG4gICAgaWYgKGJ0bikge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyMiA9IHRoaXMuX3JlbmRlcmVyLmxpc3RlbihidG4ubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKCkgPT5cclxuICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZSgxKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFRoZSBzZXR0ZXIgaXMgdXNlZCB0byBjYXRjaCB0aGUgYnV0dG9uIGlmIHRoZSBidXR0b24gaGFzIG5nSWZcclxuICAgKiBpc3N1ZSBpZCAjOTFcclxuICAgKi9cclxuICBAQ29udGVudENoaWxkKE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSwge3JlYWQ6IEVsZW1lbnRSZWZ9KVxyXG4gIHNldCBwcmV2QnRuKGJ0bjogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5saXN0ZW5lcjEgJiYgdGhpcy5saXN0ZW5lcjEoKTtcclxuICAgIGlmIChidG4pIHtcclxuICAgICAgdGhpcy5saXN0ZW5lcjEgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oYnRuLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsICgpID0+XHJcbiAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoMClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyYWNraW5nIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNoZWNrIHRoZSBkaWZmZXJlbmNlcyBpbiBkYXRhIGNoYW5nZXMuIFVzZWQgc2ltaWxhcmx5XHJcbiAgICogdG8gYG5nRm9yYCBgdHJhY2tCeWAgZnVuY3Rpb24uIE9wdGltaXplIEl0ZW1zIG9wZXJhdGlvbnMgYnkgaWRlbnRpZnlpbmcgYSBJdGVtcyBiYXNlZCBvbiBpdHMgZGF0YVxyXG4gICAqIHJlbGF0aXZlIHRvIHRoZSBmdW5jdGlvbiB0byBrbm93IGlmIGEgSXRlbXMgc2hvdWxkIGJlIGFkZGVkL3JlbW92ZWQvbW92ZWQuXHJcbiAgICogQWNjZXB0cyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIHBhcmFtZXRlcnMsIGBpbmRleGAgYW5kIGBpdGVtYC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB0cmFja0J5KCk6IFRyYWNrQnlGdW5jdGlvbjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHJhY2tCeUZuO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRyYWNrQnkoZm46IFRyYWNrQnlGdW5jdGlvbjxUPikge1xyXG4gICAgaWYgKFxyXG4gICAgICBpc0Rldk1vZGUoKSAmJlxyXG4gICAgICBmbiAhPSBudWxsICYmXHJcbiAgICAgIHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJyAmJlxyXG4gICAgICA8YW55PmNvbnNvbGUgJiZcclxuICAgICAgPGFueT5jb25zb2xlLndhcm5cclxuICAgICkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYHRyYWNrQnkgbXVzdCBiZSBhIGZ1bmN0aW9uLCBidXQgcmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShmbil9LmBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3RyYWNrQnlGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLl9kYXRhRGlmZmVyID0gdGhpcy5fZGlmZmVyc1xyXG4gICAgICAuZmluZChbXSlcclxuICAgICAgLmNyZWF0ZSgoX2k6IG51bWJlciwgaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhY2tCeSA/IHRoaXMudHJhY2tCeShpdGVtLmRhdGFJbmRleCwgaXRlbS5kYXRhKSA6IGl0ZW07XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCkge1xyXG4gICAgdGhpcy5hcnJheUNoYW5nZXMgPSB0aGlzLl9kYXRhRGlmZmVyLmRpZmYodGhpcy5kYXRhU291cmNlKTtcclxuICAgIGlmICh0aGlzLmFycmF5Q2hhbmdlcyAmJiB0aGlzLl9kZWZEaXJlYykge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnQ2hhbmdlcyBkZXRlY3RlZCEnKTtcclxuICAgICAgdGhpcy5fb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuY2Fyb3VzZWwgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5faW5wdXRWYWxpZGF0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5jYXJvdXNlbENzc05vZGUgPSB0aGlzLl9jcmVhdGVTdHlsZUVsZW0oKTtcclxuXHJcbiAgICAvLyB0aGlzLl9idXR0b25Db250cm9sKCk7XHJcblxyXG4gICAgaWYgKHdpbmRvdykge1xyXG4gICAgICB0aGlzLl9jYXJvdXNlbEludGVydmFsKCk7XHJcbiAgICAgIGlmICghdGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgICAgdGhpcy5fdG91Y2goKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpc3RlbmVyMyA9IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsIGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLl9vblJlc2l6aW5nKGV2ZW50KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX29uV2luZG93U2Nyb2xsaW5nKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XHJcblxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIFVzZWQgdG8gcmVzZXQgdGhlIGNhcm91c2VsICovXHJcbiAgcHVibGljIHJlc2V0KHdpdGhPdXRBbmltYXRpb24/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB3aXRoT3V0QW5pbWF0aW9uICYmICh0aGlzLndpdGhBbmltID0gZmFsc2UpO1xyXG4gICAgdGhpcy5jYXJvdXNlbENzc05vZGUuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aGlzLm1vdmVUbygwKTtcclxuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnQoKTtcclxuICB9XHJcblxyXG4gIC8qKiB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gc2NvbGwgdGhlIGNhcm91c2VsIHdoZW4gcG9pbnQgaXMgY2xpY2tlZCAqL1xyXG4gIHB1YmxpYyBtb3ZlVG8oc2xpZGU6IG51bWJlciwgd2l0aE91dEFuaW1hdGlvbj86IGJvb2xlYW4pIHtcclxuICAgIC8vIHNsaWRlID0gc2xpZGUgLSAxO1xyXG4gICAgd2l0aE91dEFuaW1hdGlvbiAmJiAodGhpcy53aXRoQW5pbSA9IGZhbHNlKTtcclxuICAgIGlmICh0aGlzLmFjdGl2ZVBvaW50ICE9PSBzbGlkZSAmJiBzbGlkZSA8IHRoaXMucG9pbnRJbmRleCkge1xyXG4gICAgICBsZXQgc2xpZGVyZW1haW5zO1xyXG4gICAgICBjb25zdCBidG5zID0gdGhpcy5jdXJyZW50U2xpZGUgPCBzbGlkZSA/IDEgOiAwO1xyXG5cclxuICAgICAgc3dpdGNoIChzbGlkZSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMSwgMCk7XHJcbiAgICAgICAgICBzbGlkZXJlbWFpbnMgPSBzbGlkZSAqIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgdGhpcy5wb2ludEluZGV4IC0gMTpcclxuICAgICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XHJcbiAgICAgICAgICBzbGlkZXJlbWFpbnMgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5pdGVtcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICAgICAgc2xpZGVyZW1haW5zID0gc2xpZGUgKiB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxUd28oYnRucywgc2xpZGVyZW1haW5zLCB0aGlzLnNwZWVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNsZWFySW50ZXJ2YWwodGhpcy5jYXJvdXNlbEludCk7XHJcbiAgICB0aGlzLmNhcm91c2VsSW50ICYmIHRoaXMuY2Fyb3VzZWxJbnQudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX2ludGVydmFsQ29udHJvbGxlciQudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuY2Fyb3VzZWxMb2FkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLm9uTW92ZS5jb21wbGV0ZSgpO1xyXG5cclxuICAgIC8qKiByZW1vdmUgbGlzdGVuZXJzICovXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcclxuICAgICAgY29uc3Qgc3RyID0gYGxpc3RlbmVyJHtpfWA7XHJcbiAgICAgIHRoaXNbc3RyXSAmJiB0aGlzW3N0cl0oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3N3aXRjaERhdGFTb3VyY2UoZGF0YVNvdXJjZTogYW55KTogYW55IHtcclxuICAgIHRoaXMuX2RhdGFTb3VyY2UgPSBkYXRhU291cmNlO1xyXG4gICAgaWYgKHRoaXMuX2RlZkRpcmVjKSB7XHJcbiAgICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJOb2RlQ2hhbmdlcyhcclxuICAgIGRhdGE6IGFueVtdLFxyXG4gICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lclxyXG4gICkge1xyXG4gICAgaWYgKCF0aGlzLmFycmF5Q2hhbmdlcykgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuYXJyYXlDaGFuZ2VzLmZvckVhY2hPcGVyYXRpb24oXHJcbiAgICAgIChcclxuICAgICAgICBpdGVtOiBJdGVyYWJsZUNoYW5nZVJlY29yZDxhbnk+LFxyXG4gICAgICAgIGFkanVzdGVkUHJldmlvdXNJbmRleDogbnVtYmVyLFxyXG4gICAgICAgIGN1cnJlbnRJbmRleDogbnVtYmVyXHJcbiAgICAgICkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnN0IG5vZGUgPSB0aGlzLl9kZWZEaXJlYy5maW5kKGl0ZW1zID0+IGl0ZW0uaXRlbSk7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuX2dldE5vZGVEZWYoZGF0YVtjdXJyZW50SW5kZXhdLCBjdXJyZW50SW5kZXgpO1xyXG5cclxuICAgICAgICBpZiAoaXRlbS5wcmV2aW91c0luZGV4ID09IG51bGwpIHtcclxuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgTmd1Q2Fyb3VzZWxPdXRsZXRDb250ZXh0PGFueT4oZGF0YVtjdXJyZW50SW5kZXhdKTtcclxuICAgICAgICAgIGNvbnRleHQuaW5kZXggPSBjdXJyZW50SW5kZXg7XHJcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhcclxuICAgICAgICAgICAgbm9kZS50ZW1wbGF0ZSxcclxuICAgICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgICAgY3VycmVudEluZGV4XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEluZGV4ID09IG51bGwpIHtcclxuICAgICAgICAgIHZpZXdDb250YWluZXIucmVtb3ZlKGFkanVzdGVkUHJldmlvdXNJbmRleCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHZpZXcgPSB2aWV3Q29udGFpbmVyLmdldChhZGp1c3RlZFByZXZpb3VzSW5kZXgpO1xyXG4gICAgICAgICAgdmlld0NvbnRhaW5lci5tb3ZlKHZpZXcsIGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgdGhpcy5fdXBkYXRlSXRlbUluZGV4Q29udGV4dCgpO1xyXG5cclxuICAgIGlmICh0aGlzLmNhcm91c2VsKSB7XHJcbiAgICAgIHRoaXMuX3N0b3JlQ2Fyb3VzZWxEYXRhKCk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGFTb3VyY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgaW5kZXgtcmVsYXRlZCBjb250ZXh0IGZvciBlYWNoIHJvdyB0byByZWZsZWN0IGFueSBjaGFuZ2VzIGluIHRoZSBpbmRleCBvZiB0aGUgcm93cyxcclxuICAgKiBlLmcuIGZpcnN0L2xhc3QvZXZlbi9vZGQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfdXBkYXRlSXRlbUluZGV4Q29udGV4dCgpIHtcclxuICAgIGNvbnN0IHZpZXdDb250YWluZXIgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXI7XHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgcmVuZGVySW5kZXggPSAwLCBjb3VudCA9IHZpZXdDb250YWluZXIubGVuZ3RoO1xyXG4gICAgICByZW5kZXJJbmRleCA8IGNvdW50O1xyXG4gICAgICByZW5kZXJJbmRleCsrXHJcbiAgICApIHtcclxuICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KHJlbmRlckluZGV4KSBhcyBhbnk7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xyXG4gICAgICBjb250ZXh0LmNvdW50ID0gY291bnQ7XHJcbiAgICAgIGNvbnRleHQuZmlyc3QgPSByZW5kZXJJbmRleCA9PT0gMDtcclxuICAgICAgY29udGV4dC5sYXN0ID0gcmVuZGVySW5kZXggPT09IGNvdW50IC0gMTtcclxuICAgICAgY29udGV4dC5ldmVuID0gcmVuZGVySW5kZXggJSAyID09PSAwO1xyXG4gICAgICBjb250ZXh0Lm9kZCA9ICFjb250ZXh0LmV2ZW47XHJcbiAgICAgIGNvbnRleHQuaW5kZXggPSByZW5kZXJJbmRleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldE5vZGVEZWYoZGF0YTogYW55LCBpOiBudW1iZXIpOiBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxhbnk+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2RlZkRpcmVjKTtcclxuICAgIGlmICh0aGlzLl9kZWZEaXJlYy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2RlZkRpcmVjLmZpcnN0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vZGVEZWYgPVxyXG4gICAgICB0aGlzLl9kZWZEaXJlYy5maW5kKGRlZiA9PiBkZWYud2hlbiAmJiBkZWYud2hlbihpLCBkYXRhKSkgfHxcclxuICAgICAgdGhpcy5fZGVmYXVsdE5vZGVEZWY7XHJcblxyXG4gICAgcmV0dXJuIG5vZGVEZWY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpIHtcclxuICAgIGxldCBkYXRhU3RyZWFtOiBPYnNlcnZhYmxlPGFueVtdPiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBpZiAodGhpcy5fZGF0YVNvdXJjZSBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcclxuICAgICAgZGF0YVN0cmVhbSA9IHRoaXMuX2RhdGFTb3VyY2U7XHJcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5fZGF0YVNvdXJjZSkpIHtcclxuICAgICAgZGF0YVN0cmVhbSA9IG9mKHRoaXMuX2RhdGFTb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhU3RyZWFtKSB7XHJcbiAgICAgIHRoaXMuX2RhdGFTdWJzY3JpcHRpb24gPSBkYXRhU3RyZWFtXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2ludGVydmFsQ29udHJvbGxlciQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlck5vZGVDaGFuZ2VzKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5pc0xhc3QgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2lucHV0VmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMudHlwZSA9IHRoaXMuaW5wdXRzLmdyaWQuYWxsICE9PSAwID8gJ2ZpeGVkJyA6ICdyZXNwb25zaXZlJztcclxuICAgIHRoaXMubG9vcCA9IHRoaXMuaW5wdXRzLmxvb3AgfHwgZmFsc2U7XHJcbiAgICB0aGlzLmlucHV0cy5lYXNpbmcgPSB0aGlzLmlucHV0cy5lYXNpbmcgfHwgJ2N1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJztcclxuICAgIHRoaXMudG91Y2guYWN0aXZlID0gdGhpcy5pbnB1dHMudG91Y2ggfHwgZmFsc2U7XHJcbiAgICB0aGlzLlJUTCA9IHRoaXMuaW5wdXRzLlJUTCA/IHRydWUgOiBmYWxzZTtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSB0aGlzLmlucHV0cy5pbnRlcnZhbCB8fCBudWxsO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLmlucHV0cy52ZWxvY2l0eSA9PT0gJ251bWJlcidcclxuICAgICAgICA/IHRoaXMuaW5wdXRzLnZlbG9jaXR5XHJcbiAgICAgICAgOiB0aGlzLnZlbG9jaXR5O1xyXG5cclxuICAgIGlmICh0aGlzLmlucHV0cy52ZXJ0aWNhbCAmJiB0aGlzLmlucHV0cy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMudmVydGljYWwuZW5hYmxlZCA9IHRoaXMuaW5wdXRzLnZlcnRpY2FsLmVuYWJsZWQ7XHJcbiAgICAgIHRoaXMudmVydGljYWwuaGVpZ2h0ID0gdGhpcy5pbnB1dHMudmVydGljYWwuaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgdGhpcy5kaXJlY3Rpb25TeW0gPSB0aGlzLlJUTCA/ICcnIDogJy0nO1xyXG4gICAgdGhpcy5wb2ludCA9XHJcbiAgICAgIHRoaXMuaW5wdXRzLnBvaW50ICYmIHR5cGVvZiB0aGlzLmlucHV0cy5wb2ludC52aXNpYmxlICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gdGhpcy5pbnB1dHMucG9pbnQudmlzaWJsZVxyXG4gICAgICAgIDogdHJ1ZTtcclxuXHJcbiAgICB0aGlzLl9jYXJvdXNlbFNpemUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uUmVzaXppbmcoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMub25SZXNpemUpO1xyXG4gICAgdGhpcy5vblJlc2l6ZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5kZXZpY2VXaWR0aCAhPT0gZXZlbnQudGFyZ2V0Lm91dGVyV2lkdGgpIHtcclxuICAgICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgYGApO1xyXG4gICAgICAgIHRoaXMuX3N0b3JlQ2Fyb3VzZWxEYXRhKCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDUwMCk7XHJcbiAgfVxyXG5cclxuICAvKiogR2V0IFRvdWNoIGlucHV0ICovXHJcbiAgcHJpdmF0ZSBfdG91Y2goKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dHMudG91Y2gpIHtcclxuICAgICAgY29uc3QgaGFtbWVydGltZSA9IG5ldyBIYW1tZXIodGhpcy50b3VjaENvbnRhaW5lci5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgaGFtbWVydGltZS5nZXQoJ3BhbicpLnNldCh7ZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0hPUklaT05UQUx9KTtcclxuXHJcbiAgICAgIGhhbW1lcnRpbWUub24oJ3BhbnN0YXJ0JywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmNhcm91c2VsV2lkdGggPSB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgLy8gdGhpcy50b3VjaFRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtW3RoaXMuZGV2aWNlVHlwZV07XHJcbiAgICAgICAgdGhpcy5kZXhWYWwgPSAwO1xyXG4gICAgICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCAnJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFudXAnLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fdG91Y2hIYW5kbGluZygncGFubGVmdCcsIGV2KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5kb3duJywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbnJpZ2h0JywgZXYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhhbW1lcnRpbWUub24oJ3BhbmxlZnQnLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fdG91Y2hIYW5kbGluZygncGFubGVmdCcsIGV2KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5yaWdodCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5yaWdodCcsIGV2KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5lbmQnLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhldi52ZWxvY2l0eSkgPj0gdGhpcy52ZWxvY2l0eSkge1xyXG4gICAgICAgICAgdGhpcy50b3VjaC52ZWxvY2l0eSA9IGV2LnZlbG9jaXR5O1xyXG4gICAgICAgICAgbGV0IGRpcmVjID0gMDtcclxuICAgICAgICAgIGlmICghdGhpcy5SVEwpIHtcclxuICAgICAgICAgICAgZGlyZWMgPSB0aGlzLnRvdWNoLnN3aXBlID09PSAncGFucmlnaHQnID8gMCA6IDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXJlYyA9IHRoaXMudG91Y2guc3dpcGUgPT09ICdwYW5yaWdodCcgPyAxIDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKGRpcmVjKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5kZXhWYWwgPSAwO1xyXG4gICAgICAgICAgdGhpcy5fc2V0U3R5bGUoXHJcbiAgICAgICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICAgJ3RyYW5zaXRpb24nLFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtIDMyNG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIC8vIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBoYW1tZXJ0aW1lLm9uKCdoYW1tZXIuaW5wdXQnLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAvLyBhbGxvdyBuZXN0ZWQgdG91Y2ggZXZlbnRzIHRvIG5vIHByb3BhZ2F0ZSwgdGhpcyBtYXkgaGF2ZSBvdGhlciBzaWRlIGFmZmVjdHMgYnV0IHdvcmtzIGZvciBub3cuXHJcbiAgICAgICAgLy8gVE9ETzogSXQgaXMgcHJvYmFibHkgYmV0dGVyIHRvIGNoZWNrIHRoZSBzb3VyY2UgZWxlbWVudCBvZiB0aGUgZXZlbnQgYW5kIG9ubHkgYXBwbHkgdGhlIGhhbmRsZSB0byB0aGUgY29ycmVjdCBjYXJvdXNlbFxyXG4gICAgICAgIGV2LnNyY0V2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBoYW5kbGUgdG91Y2ggaW5wdXQgKi9cclxuICBwcml2YXRlIF90b3VjaEhhbmRsaW5nKGU6IHN0cmluZywgZXY6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gdmVydGljYWwgdG91Y2ggZXZlbnRzIHNlZW0gdG8gY2F1c2UgdG8gcGFuc3RhcnQgZXZlbnQgd2l0aCBhbiBvZGQgZGVsdGFcclxuICAgIC8vIGFuZCBhIGNlbnRlciBvZiB7eDowLHk6MH0gc28gdGhpcyB3aWxsIGlnbm9yZSB0aGVtXHJcbiAgICBpZiAoZXYuY2VudGVyLnggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ID0gTWF0aC5hYnModGhpcy52ZXJ0aWNhbC5lbmFibGVkID8gZXYuZGVsdGFZIDogZXYuZGVsdGFYKTtcclxuICAgIGxldCB2YWx0ID0gZXYgLSB0aGlzLmRleFZhbDtcclxuICAgIHZhbHQgPVxyXG4gICAgICB0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJ1xyXG4gICAgICAgID8gKE1hdGguYWJzKGV2IC0gdGhpcy5kZXhWYWwpIC9cclxuICAgICAgICAodGhpcy52ZXJ0aWNhbC5lbmFibGVkXHJcbiAgICAgICAgICA/IHRoaXMudmVydGljYWwuaGVpZ2h0XHJcbiAgICAgICAgICA6IHRoaXMuY2Fyb3VzZWxXaWR0aCkpICpcclxuICAgICAgICAxMDBcclxuICAgICAgICA6IHZhbHQ7XHJcbiAgICB0aGlzLmRleFZhbCA9IGV2O1xyXG4gICAgdGhpcy50b3VjaC5zd2lwZSA9IGU7XHJcbiAgICB0aGlzLl9zZXRUb3VjaFRyYW5zZnJvbShlLCB2YWx0KTtcclxuICAgIHRoaXMuX3NldFRyYW5zZm9ybUZyb21Ub3VjaCgpO1xyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldFRvdWNoVHJhbnNmcm9tKGU6IHN0cmluZywgdmFsdDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLlJUTCA/ICdwYW5yaWdodCcgOiAncGFubGVmdCc7XHJcbiAgICB0aGlzLnRvdWNoVHJhbnNmb3JtID1cclxuICAgICAgZSA9PT0gY29uZGl0aW9uID8gdmFsdCArIHRoaXMudG91Y2hUcmFuc2Zvcm0gOiB0aGlzLnRvdWNoVHJhbnNmb3JtIC0gdmFsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldFRyYW5zZm9ybUZyb21Ub3VjaCgpIHtcclxuICAgIGlmICh0aGlzLnRvdWNoVHJhbnNmb3JtIDwgMCkge1xyXG4gICAgICB0aGlzLnRvdWNoVHJhbnNmb3JtID0gMDtcclxuICAgIH1cclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJyA/ICclJyA6ICdweCc7XHJcblxyXG4gICAgY29uc3QgbWF4VHJhbnNsYXRlID0gKHRoaXMuaXRlbVdpZHRoICogdGhpcy5fZGF0YVNvdXJjZS5sZW5ndGgpIC0gdGhpcy5jYXJvdXNlbE1haW4xLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICBpZiAobWF4VHJhbnNsYXRlIDw9IHRoaXMudG91Y2hUcmFuc2Zvcm0pIHtcclxuICAgICAgdGhpcy50b3VjaFRyYW5zZm9ybSA9IG1heFRyYW5zbGF0ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLm9uTW92ZS5lbWl0KHRoaXMpO1xyXG4gICAgdGhpcy5fc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgIHRoaXMudmVydGljYWwuZW5hYmxlZFxyXG4gICAgICAgID8gYHRyYW5zbGF0ZTNkKDAsICR7dGhpcy5kaXJlY3Rpb25TeW19JHt0aGlzLnRvdWNoVHJhbnNmb3JtfSR7dHlwZX0sIDApYFxyXG4gICAgICAgIDogYHRyYW5zbGF0ZTNkKCR7dGhpcy5kaXJlY3Rpb25TeW19JHt0aGlzLnRvdWNoVHJhbnNmb3JtfSR7dHlwZX0sIDAsIDApYFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKiB0aGlzIGZuIHVzZWQgdG8gZGlzYWJsZSB0aGUgaW50ZXJ2YWwgd2hlbiBpdCBpcyBub3Qgb24gdGhlIHZpZXdwb3J0ICovXHJcbiAgcHJpdmF0ZSBfb25XaW5kb3dTY3JvbGxpbmcoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0b3AgPSB0aGlzLmNhcm91c2VsLm9mZnNldFRvcDtcclxuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIGNvbnN0IGhlaWdodHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBjb25zdCBjYXJvdXNlbEhlaWdodCA9IHRoaXMuY2Fyb3VzZWwub2Zmc2V0SGVpZ2h0O1xyXG4gICAgY29uc3QgaXNDYXJvdXNlbE9uU2NyZWVuID1cclxuICAgICAgdG9wIDw9IHNjcm9sbFkgKyBoZWlnaHR0IC0gY2Fyb3VzZWxIZWlnaHQgLyA0ICYmXHJcbiAgICAgIHRvcCArIGNhcm91c2VsSGVpZ2h0IC8gMiA+PSBzY3JvbGxZO1xyXG5cclxuICAgIGlmIChpc0Nhcm91c2VsT25TY3JlZW4pIHtcclxuICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJC5uZXh0KDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJC5uZXh0KDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIHN0b3JlIGRhdGEgYmFzZWQgb24gd2lkdGggb2YgdGhlIHNjcmVlbiBmb3IgdGhlIGNhcm91c2VsICovXHJcbiAgcHJpdmF0ZSBfc3RvcmVDYXJvdXNlbERhdGEoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRldmljZVdpZHRoID0gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKVxyXG4gICAgICA/IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICAgIDogMTIwMDtcclxuXHJcbiAgICB0aGlzLmNhcm91c2VsV2lkdGggPSB0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScpIHtcclxuICAgICAgdGhpcy5kZXZpY2VUeXBlID1cclxuICAgICAgICB0aGlzLmRldmljZVdpZHRoID49IDEyMDBcclxuICAgICAgICAgID8gJ2xnJ1xyXG4gICAgICAgICAgOiB0aGlzLmRldmljZVdpZHRoID49IDk5MlxyXG4gICAgICAgICAgPyAnbWQnXHJcbiAgICAgICAgICA6IHRoaXMuZGV2aWNlV2lkdGggPj0gNzY4XHJcbiAgICAgICAgICAgID8gJ3NtJ1xyXG4gICAgICAgICAgICA6ICd4cyc7XHJcblxyXG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5pbnB1dHMuZ3JpZFt0aGlzLmRldmljZVR5cGVdO1xyXG4gICAgICB0aGlzLml0ZW1XaWR0aCA9IHRoaXMuY2Fyb3VzZWxXaWR0aCAvIHRoaXMuaXRlbXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLml0ZW1zID0gTWF0aC5jZWlsKHRoaXMuY2Fyb3VzZWxXaWR0aCAvIHRoaXMuaW5wdXRzLmdyaWQuYWxsKTtcclxuICAgICAgdGhpcy5pdGVtV2lkdGggPSB0aGlzLmlucHV0cy5ncmlkLmFsbDtcclxuICAgICAgdGhpcy5kZXZpY2VUeXBlID0gJ2FsbCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zbGlkZUl0ZW1zID0gKyh0aGlzLmlucHV0cy5zbGlkZSA8IHRoaXMuaXRlbXNcclxuICAgICAgPyB0aGlzLmlucHV0cy5zbGlkZVxyXG4gICAgICA6IHRoaXMuaXRlbXMpO1xyXG4gICAgdGhpcy5sb2FkID1cclxuICAgICAgdGhpcy5pbnB1dHMubG9hZCA+PSB0aGlzLnNsaWRlSXRlbXMgPyB0aGlzLmlucHV0cy5sb2FkIDogdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgdGhpcy5zcGVlZCA9XHJcbiAgICAgIHRoaXMuaW5wdXRzLnNwZWVkICYmIHRoaXMuaW5wdXRzLnNwZWVkID4gLTEgPyB0aGlzLmlucHV0cy5zcGVlZCA6IDQwMDtcclxuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBJbml0IGNhcm91c2VsIHBvaW50ICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxQb2ludCgpOiB2b2lkIHtcclxuICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgLy8gaWYgKHRoaXMudXNlckRhdGEucG9pbnQudmlzaWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgY29uc3QgTm9zID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtICh0aGlzLml0ZW1zIC0gdGhpcy5zbGlkZUl0ZW1zKTtcclxuICAgIHRoaXMucG9pbnRJbmRleCA9IE1hdGguY2VpbChOb3MgLyB0aGlzLnNsaWRlSXRlbXMpO1xyXG4gICAgY29uc3QgcG9pbnRlcnMgPSBbXTtcclxuXHJcbiAgICBpZiAodGhpcy5wb2ludEluZGV4ID4gMSB8fCAhdGhpcy5pbnB1dHMucG9pbnQuaGlkZU9uU2luZ2xlU2xpZGUpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50SW5kZXg7IGkrKykge1xyXG4gICAgICAgIHBvaW50ZXJzLnB1c2goaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMucG9pbnROdW1iZXJzID0gcG9pbnRlcnM7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBvaW50TnVtYmVycyk7XHJcbiAgICB0aGlzLl9jYXJvdXNlbFBvaW50QWN0aXZlcigpO1xyXG4gICAgaWYgKHRoaXMucG9pbnRJbmRleCA8PSAxKSB7XHJcbiAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMSwgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUgPT09IDAgJiYgIXRoaXMubG9vcCkge1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMSwgMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgLyoqIGNoYW5nZSB0aGUgYWN0aXZlIHBvaW50IGluIGNhcm91c2VsICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxQb2ludEFjdGl2ZXIoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpID0gTWF0aC5jZWlsKHRoaXMuY3VycmVudFNsaWRlIC8gdGhpcy5zbGlkZUl0ZW1zKTtcclxuICAgIHRoaXMuYWN0aXZlUG9pbnQgPSBpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIHNldCB0aGUgc3R5bGUgb2YgdGhlIGNhcm91c2VsIGJhc2VkIHRoZSBpbnB1dHMgZGF0YSAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsU2l6ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudG9rZW4gPSB0aGlzLl9nZW5lcmF0ZUlEKCk7XHJcbiAgICBsZXQgZGlzbSA9ICcnO1xyXG4gICAgdGhpcy5zdHlsZWlkID0gYC4ke1xyXG4gICAgICB0aGlzLnRva2VuXHJcbiAgICAgIH0gPiAuY2Fyb3VzZWwtd3JhcHBlciA+IC5uZ3VjYXJvdXNlbCA+IC5uZ3UtdG91Y2gtY29udGFpbmVyID4gLm5ndWNhcm91c2VsLWl0ZW1zYDtcclxuXHJcbiAgICBpZiAodGhpcy5pbnB1dHMuY3VzdG9tID09PSAnYmFubmVyJykge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNhcm91c2VsLCAnYmFubmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5wdXRzLmFuaW1hdGlvbiA9PT0gJ2xhenknKSB7XHJcbiAgICAgIGRpc20gKz0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHt0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjZzIGVhc2U7fWA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGl0ZW1TdHlsZSA9ICcnO1xyXG4gICAgaWYgKHRoaXMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfeHMgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXHJcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLnhzfXB4fWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9zbSA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcclxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQuc219cHh9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX21kID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxyXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC5tZH1weH1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfbGcgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXHJcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLmxnfXB4fWA7XHJcblxyXG4gICAgICBpdGVtU3R5bGUgPSBgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpeyR7aXRlbVdpZHRoX3hzfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7JHtpdGVtV2lkdGhfc219fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXske2l0ZW1XaWR0aF9tZH19XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXske2l0ZW1XaWR0aF9sZ319YDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScpIHtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX3hzID1cclxuICAgICAgICB0aGlzLmlucHV0cy50eXBlID09PSAnbW9iaWxlJ1xyXG4gICAgICAgICAgPyBgJHt0aGlzLnN0eWxlaWR9IC5pdGVtIHtmbGV4OiAwIDAgJHs5NSAvXHJcbiAgICAgICAgICArdGhpcy5pbnB1dHMuZ3JpZC54c30lOyB3aWR0aDogJHs5NSAvICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7fWBcclxuICAgICAgICAgIDogYCR7dGhpcy5zdHlsZWlkfSAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cclxuICAgICAgICAgICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7IHdpZHRoOiAkezEwMCAvICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7fWA7XHJcblxyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfc20gPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXHJcbiAgICAgICt0aGlzLmlucHV0cy5ncmlkLnNtfSU7IHdpZHRoOiAkezEwMCAvICt0aGlzLmlucHV0cy5ncmlkLnNtfSV9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX21kID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtmbGV4OiAwIDAgJHsxMDAgL1xyXG4gICAgICArdGhpcy5pbnB1dHMuZ3JpZC5tZH0lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC5tZH0lfWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9sZyA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cclxuICAgICAgK3RoaXMuaW5wdXRzLmdyaWQubGd9JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQubGd9JX1gO1xyXG5cclxuICAgICAgaXRlbVN0eWxlID0gYEBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXske2l0ZW1XaWR0aF94c319XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpeyR7aXRlbVdpZHRoX3NtfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7JHtpdGVtV2lkdGhfbWR9fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7JHtpdGVtV2lkdGhfbGd9fWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtU3R5bGUgPSBgJHt0aGlzLnN0eWxlaWR9IC5pdGVtIHtmbGV4OiAwIDAgJHtcclxuICAgICAgICB0aGlzLmlucHV0cy5ncmlkLmFsbFxyXG4gICAgICAgIH1weDsgd2lkdGg6ICR7dGhpcy5pbnB1dHMuZ3JpZC5hbGx9cHg7fWA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuY2Fyb3VzZWwsIHRoaXMudG9rZW4pO1xyXG4gICAgaWYgKHRoaXMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcclxuICAgICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ25ndXZlcnRpY2FsJ1xyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICB0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAnaGVpZ2h0JyxcclxuICAgICAgICBgJHt0aGlzLnZlcnRpY2FsLmhlaWdodH1weGBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cclxuICAgIHRoaXMuUlRMICYmXHJcbiAgICAhdGhpcy52ZXJ0aWNhbC5lbmFibGVkICYmXHJcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNhcm91c2VsLCAnbmd1cnRsJyk7XHJcbiAgICB0aGlzLl9jcmVhdGVTdHlsZUVsZW0oYCR7ZGlzbX0gJHtpdGVtU3R5bGV9YCk7XHJcbiAgICB0aGlzLl9zdG9yZUNhcm91c2VsRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIGxvZ2ljIHRvIHNjcm9sbCB0aGUgY2Fyb3VzZWwgc3RlcCAxICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxTY3JvbGxPbmUoQnRuOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGxldCBpdGVtU3BlZWQgPSB0aGlzLnNwZWVkO1xyXG4gICAgbGV0IHRyYW5zbGF0ZVh2YWwsXHJcbiAgICAgIGN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICBjb25zdCB0b3VjaE1vdmUgPSBNYXRoLmNlaWwodGhpcy5kZXhWYWwgLyB0aGlzLml0ZW1XaWR0aCk7XHJcbiAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnJyk7XHJcblxyXG4gICAgaWYgKHRoaXMucG9pbnRJbmRleCA9PT0gMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKEJ0biA9PT0gMCAmJiAoKCF0aGlzLmxvb3AgJiYgIXRoaXMuaXNGaXJzdCkgfHwgdGhpcy5sb29wKSkge1xyXG4gICAgICBjb25zdCBzbGlkZSA9IHRoaXMuc2xpZGVJdGVtcyAqIHRoaXMucG9pbnRJbmRleDtcclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZUQgPSB0aGlzLmN1cnJlbnRTbGlkZSAtIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgY29uc3QgTW92ZVNsaWRlID0gY3VycmVudFNsaWRlRCArIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFNsaWRlID09PSAwKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtIHRoaXMuaXRlbXM7XHJcbiAgICAgICAgaXRlbVNwZWVkID0gNDAwO1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGlkZUl0ZW1zID49IE1vdmVTbGlkZSkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRyYW5zbGF0ZVh2YWwgPSAwO1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMSwgMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcclxuICAgICAgICBpZiAodG91Y2hNb3ZlID4gdGhpcy5zbGlkZUl0ZW1zKSB7XHJcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZSAtIHRvdWNoTW92ZTtcclxuICAgICAgICAgIGl0ZW1TcGVlZCA9IDIwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUgLSB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsVHdvKEJ0biwgY3VycmVudFNsaWRlLCBpdGVtU3BlZWQpO1xyXG4gICAgfSBlbHNlIGlmIChCdG4gPT09IDEgJiYgKCghdGhpcy5sb29wICYmICF0aGlzLmlzTGFzdCkgfHwgdGhpcy5sb29wKSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxlbmd0aCA8PVxyXG4gICAgICAgIHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5pdGVtcyArIHRoaXMuc2xpZGVJdGVtcyAmJlxyXG4gICAgICAgICF0aGlzLmlzTGFzdFxyXG4gICAgICApIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5pdGVtcztcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNMYXN0KSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gdHJhbnNsYXRlWHZhbCA9IDA7XHJcbiAgICAgICAgaXRlbVNwZWVkID0gNDAwO1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMSwgMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcclxuICAgICAgICBpZiAodG91Y2hNb3ZlID4gdGhpcy5zbGlkZUl0ZW1zKSB7XHJcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZSArIHRoaXMuc2xpZGVJdGVtcyArICh0b3VjaE1vdmUgLSB0aGlzLnNsaWRlSXRlbXMpO1xyXG4gICAgICAgICAgaXRlbVNwZWVkID0gMjAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZSArIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxUd28oQnRuLCBjdXJyZW50U2xpZGUsIGl0ZW1TcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY3ViaWMtYmV6aWVyKDAuMTUsIDEuMDQsIDAuNTQsIDEuMTMpXHJcbiAgfVxyXG5cclxuICAvKiogbG9naWMgdG8gc2Nyb2xsIHRoZSBjYXJvdXNlbCBzdGVwIDIgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFNjcm9sbFR3byhcclxuICAgIEJ0bjogbnVtYmVyLFxyXG4gICAgY3VycmVudFNsaWRlOiBudW1iZXIsXHJcbiAgICBpdGVtU3BlZWQ6IG51bWJlclxyXG4gICk6IHZvaWQge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXHJcblxyXG4gICAgaWYgKHRoaXMuZGV4VmFsICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IE1hdGguYWJzKHRoaXMudG91Y2gudmVsb2NpdHkpO1xyXG4gICAgICBsZXQgc29tdCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgKHRoaXMuZGV4VmFsIC8gdmFsIC8gdGhpcy5kZXhWYWwpICogKHRoaXMuZGV2aWNlV2lkdGggLSB0aGlzLmRleFZhbClcclxuICAgICAgKTtcclxuICAgICAgc29tdCA9IHNvbXQgPiBpdGVtU3BlZWQgPyBpdGVtU3BlZWQgOiBzb210O1xyXG4gICAgICBpdGVtU3BlZWQgPSBzb210IDwgMjAwID8gMjAwIDogc29tdDtcclxuICAgICAgdGhpcy5kZXhWYWwgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMud2l0aEFuaW0pIHtcclxuICAgICAgdGhpcy5fc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICd0cmFuc2l0aW9uJyxcclxuICAgICAgICBgdHJhbnNmb3JtICR7aXRlbVNwZWVkfW1zICR7dGhpcy5pbnB1dHMuZWFzaW5nfWBcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5pbnB1dHMuYW5pbWF0aW9uICYmXHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsQW5pbWF0b3IoXHJcbiAgICAgICAgQnRuLFxyXG4gICAgICAgIGN1cnJlbnRTbGlkZSArIDEsXHJcbiAgICAgICAgY3VycmVudFNsaWRlICsgdGhpcy5pdGVtcyxcclxuICAgICAgICBpdGVtU3BlZWQsXHJcbiAgICAgICAgTWF0aC5hYnModGhpcy5jdXJyZW50U2xpZGUgLSBjdXJyZW50U2xpZGUpXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgYGApO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhU291cmNlKTtcclxuICAgIHRoaXMuaXRlbUxlbmd0aCA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGg7XHJcbiAgICB0aGlzLl90cmFuc2Zvcm1TdHlsZShjdXJyZW50U2xpZGUpO1xyXG4gICAgdGhpcy5jdXJyZW50U2xpZGUgPSBjdXJyZW50U2xpZGU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5vbk1vdmUuZW1pdCh0aGlzKTtcclxuICAgIH0sIDQwMCk7XHJcblxyXG4gICAgdGhpcy5fY2Fyb3VzZWxQb2ludEFjdGl2ZXIoKTtcclxuICAgIHRoaXMuX2Nhcm91c2VsTG9hZFRyaWdnZXIoKTtcclxuICAgIHRoaXMud2l0aEFuaW0gPSB0cnVlO1xyXG4gICAgLy8gaWYgKGN1cnJlbnRTbGlkZSA9PT0gMTIpIHtcclxuICAgIC8vICAgdGhpcy5fc3dpdGNoRGF0YVNvdXJjZSh0aGlzLmRhdGFTb3VyY2UpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgLyoqIGJvb2xlYW4gZnVuY3Rpb24gZm9yIG1ha2luZyBpc0ZpcnN0IGFuZCBpc0xhc3QgKi9cclxuICBwcml2YXRlIF9idG5Cb29sZWFuKGZpcnN0OiBudW1iZXIsIGxhc3Q6IG51bWJlcikge1xyXG4gICAgdGhpcy5pc0ZpcnN0ID0gISFmaXJzdDtcclxuICAgIHRoaXMuaXNMYXN0ID0gISFsYXN0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtU3RyaW5nKGdyaWQ6IHN0cmluZywgc2xpZGU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgY29sbGVjdCA9ICcnO1xyXG4gICAgY29sbGVjdCArPSBgJHt0aGlzLnN0eWxlaWR9IHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChgO1xyXG5cclxuICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1bZ3JpZF0gPVxyXG4gICAgICAgICh0aGlzLnZlcnRpY2FsLmhlaWdodCAvIHRoaXMuaW5wdXRzLmdyaWRbZ3JpZF0pICogc2xpZGU7XHJcbiAgICAgIGNvbGxlY3QgKz0gYDAsIC0ke3RoaXMudHJhbnNmb3JtW2dyaWRdfXB4LCAwYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtW2dyaWRdID0gKDEwMCAvIHRoaXMuaW5wdXRzLmdyaWRbZ3JpZF0pICogc2xpZGU7XHJcbiAgICAgIGNvbGxlY3QgKz0gYCR7dGhpcy5kaXJlY3Rpb25TeW19JHt0aGlzLnRyYW5zZm9ybVtncmlkXX0lLCAwLCAwYDtcclxuICAgIH1cclxuICAgIGNvbGxlY3QgKz0gYCk7IH1gO1xyXG4gICAgcmV0dXJuIGNvbGxlY3Q7XHJcbiAgfVxyXG5cclxuICAvKiogc2V0IHRoZSB0cmFuc2Zvcm0gc3R5bGUgdG8gc2Nyb2xsIHRoZSBjYXJvdXNlbCAgKi9cclxuICBwcml2YXRlIF90cmFuc2Zvcm1TdHlsZShzbGlkZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBsZXQgc2xpZGVDc3MgPSAnJztcclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xyXG4gICAgICBzbGlkZUNzcyA9IGBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHske3RoaXMuX3RyYW5zZm9ybVN0cmluZyhcclxuICAgICAgICAneHMnLFxyXG4gICAgICAgIHNsaWRlXHJcbiAgICAgICl9fVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHske3RoaXMuX3RyYW5zZm9ybVN0cmluZygnc20nLCBzbGlkZSl9IH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoJ21kJywgc2xpZGUpfSB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHske3RoaXMuX3RyYW5zZm9ybVN0cmluZygnbGcnLCBzbGlkZSl9IH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0uYWxsID0gdGhpcy5pbnB1dHMuZ3JpZC5hbGwgKiBzbGlkZTtcclxuICAgICAgdGhpcy50b3VjaFRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtLmFsbDtcclxuICAgICAgc2xpZGVDc3MgPSBgJHt0aGlzLnN0eWxlaWR9IHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgke1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uU3ltXHJcbiAgICAgICAgfSR7dGhpcy50cmFuc2Zvcm0uYWxsfXB4LCAwLCAwKTtgO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYXJvdXNlbENzc05vZGUuaW5uZXJIVE1MID0gc2xpZGVDc3M7XHJcbiAgfVxyXG5cclxuICAvKiogdGhpcyB3aWxsIHRyaWdnZXIgdGhlIGNhcm91c2VsIHRvIGxvYWQgdGhlIGl0ZW1zICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxMb2FkVHJpZ2dlcigpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5pbnB1dHMubG9hZCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtIHRoaXMubG9hZCA8PSB0aGlzLmN1cnJlbnRTbGlkZSArIHRoaXMuaXRlbXMgJiZcclxuICAgICAgdGhpcy5jYXJvdXNlbExvYWQuZW1pdCh0aGlzLmN1cnJlbnRTbGlkZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogZ2VuZXJhdGUgQ2xhc3MgZm9yIGVhY2ggY2Fyb3VzZWwgdG8gc2V0IHNwZWNpZmljIHN0eWxlICovXHJcbiAgcHJpdmF0ZSBfZ2VuZXJhdGVJRCgpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRleHQgPSAnJztcclxuICAgIGNvbnN0IHBvc3NpYmxlID1cclxuICAgICAgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICB0ZXh0ICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBgbmd1Y2Fyb3VzZWwke3RleHR9YDtcclxuICB9XHJcblxyXG4gIC8qKiBoYW5kbGUgdGhlIGF1dG8gc2xpZGUgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbEludGVydmFsKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jYXJvdXNlbE1haW4xLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5pbnRlcnZhbCAmJiB0aGlzLmxvb3ApIHtcclxuICAgICAgdGhpcy5saXN0ZW5lcjQgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMub25TY3JvbGxpbmcpO1xyXG4gICAgICAgIHRoaXMub25TY3JvbGxpbmcgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX29uV2luZG93U2Nyb2xsaW5nKCk7XHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBwbGF5JCA9IGZyb21FdmVudChjb250YWluZXIsICdtb3VzZWxlYXZlJykucGlwZShtYXBUbygxKSk7XHJcbiAgICAgIGNvbnN0IHBhdXNlJCA9IGZyb21FdmVudChjb250YWluZXIsICdtb3VzZWVudGVyJykucGlwZShtYXBUbygwKSk7XHJcblxyXG4gICAgICBjb25zdCB0b3VjaFBsYXkkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ3RvdWNoc3RhcnQnKS5waXBlKG1hcFRvKDEpKTtcclxuICAgICAgY29uc3QgdG91Y2hQYXVzZSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAndG91Y2hlbmQnKS5waXBlKG1hcFRvKDApKTtcclxuXHJcbiAgICAgIGNvbnN0IGludGVydmFsJCA9IGludGVydmFsKHRoaXMuaW5wdXRzLmludGVydmFsLnRpbWluZykucGlwZShtYXBUbygxKSk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmNhcm91c2VsSW50ID0gbWVyZ2UoXHJcbiAgICAgICAgICBwbGF5JCxcclxuICAgICAgICAgIHRvdWNoUGxheSQsXHJcbiAgICAgICAgICBwYXVzZSQsXHJcbiAgICAgICAgICB0b3VjaFBhdXNlJCxcclxuICAgICAgICAgIHRoaXMuX2ludGVydmFsQ29udHJvbGxlciRcclxuICAgICAgICApXHJcbiAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgc3RhcnRXaXRoKDEpLFxyXG4gICAgICAgICAgICBzd2l0Y2hNYXAodmFsID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmlzSG92ZXJlZCA9ICF2YWw7XHJcbiAgICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbCA/IGludGVydmFsJCA6IGVtcHR5KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKDEpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sIHRoaXMuaW50ZXJ2YWwuaW5pdGlhbERlbGF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZUl0ZW1JbmRleENvbnRleHRBbmkoKSB7XHJcbiAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyO1xyXG4gICAgZm9yIChcclxuICAgICAgbGV0IHJlbmRlckluZGV4ID0gMCwgY291bnQgPSB2aWV3Q29udGFpbmVyLmxlbmd0aDtcclxuICAgICAgcmVuZGVySW5kZXggPCBjb3VudDtcclxuICAgICAgcmVuZGVySW5kZXgrK1xyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChyZW5kZXJJbmRleCkgYXMgYW55O1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcclxuICAgICAgY29udGV4dC5jb3VudCA9IGNvdW50O1xyXG4gICAgICBjb250ZXh0LmZpcnN0ID0gcmVuZGVySW5kZXggPT09IDA7XHJcbiAgICAgIGNvbnRleHQubGFzdCA9IHJlbmRlckluZGV4ID09PSBjb3VudCAtIDE7XHJcbiAgICAgIGNvbnRleHQuZXZlbiA9IHJlbmRlckluZGV4ICUgMiA9PT0gMDtcclxuICAgICAgY29udGV4dC5vZGQgPSAhY29udGV4dC5ldmVuO1xyXG4gICAgICBjb250ZXh0LmluZGV4ID0gcmVuZGVySW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogYW5pbWF0ZSB0aGUgY2Fyb3VzZWwgaXRlbXMgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbEFuaW1hdG9yKFxyXG4gICAgZGlyZWN0aW9uOiBudW1iZXIsXHJcbiAgICBzdGFydDogbnVtYmVyLFxyXG4gICAgZW5kOiBudW1iZXIsXHJcbiAgICBzcGVlZDogbnVtYmVyLFxyXG4gICAgbGVuZ3RoOiBudW1iZXIsXHJcbiAgICB2aWV3Q29udGFpbmVyID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICBsZXQgdmFsID0gbGVuZ3RoIDwgNSA/IGxlbmd0aCA6IDU7XHJcbiAgICB2YWwgPSB2YWwgPT09IDEgPyAzIDogdmFsO1xyXG4gICAgY29uc3QgY29sbGVjdEluZGV4ID0gW107XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gc3RhcnQgLSAxOyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICBjb2xsZWN0SW5kZXgucHVzaChpKTtcclxuICAgICAgICB2YWwgPSB2YWwgKiAyO1xyXG4gICAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChpKSBhcyBhbnk7XHJcbiAgICAgICAgaWYgKHZpZXdSZWYpIHtcclxuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xyXG4gICAgICAgICAgY29udGV4dC5hbmltYXRlID0ge3ZhbHVlOiB0cnVlLCBwYXJhbXM6IHtkaXN0YW5jZTogdmFsfX07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gZW5kIC0gMTsgaSA+PSBzdGFydCAtIDE7IGktLSkge1xyXG4gICAgICAgIGNvbGxlY3RJbmRleC5wdXNoKGkpO1xyXG4gICAgICAgIHZhbCA9IHZhbCAqIDI7XHJcbiAgICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KGkpIGFzIGFueTtcclxuICAgICAgICBpZiAodmlld1JlZikge1xyXG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgICAgICBjb250ZXh0LmFuaW1hdGUgPSB7dmFsdWU6IHRydWUsIHBhcmFtczoge2Rpc3RhbmNlOiAtdmFsfX07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9yZW1vdmVBbmltYXRpb25zKGNvbGxlY3RJbmRleCk7XHJcbiAgICB9LCBzcGVlZCAqIDAuNyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZW1vdmVBbmltYXRpb25zKGluZGV4czogbnVtYmVyW10pIHtcclxuICAgIGNvbnN0IHZpZXdDb250YWluZXIgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXI7XHJcbiAgICBpbmRleHMuZm9yRWFjaChpID0+IHtcclxuICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KGkpIGFzIGFueTtcclxuICAgICAgaWYgKHZpZXdSZWYpIHtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcclxuICAgICAgICBjb250ZXh0LmFuaW1hdGUgPSB7dmFsdWU6IGZhbHNlLCBwYXJhbXM6IHtkaXN0YW5jZTogMH19O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNob3J0IGZvcm0gZm9yIHNldEVsZW1lbnRTdHlsZSAqL1xyXG4gIHByaXZhdGUgX3NldFN0eWxlKGVsOiBhbnksIHByb3A6IGFueSwgdmFsOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLCBwcm9wLCB2YWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZvciBnZW5lcmF0aW5nIHN0eWxlIHRhZyAqL1xyXG4gIHByaXZhdGUgX2NyZWF0ZVN0eWxlRWxlbShkYXRhcz86IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3R5bGVJdGVtID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgIGlmIChkYXRhcykge1xyXG4gICAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVUZXh0KGRhdGFzKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVJdGVtLCBzdHlsZVRleHQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jYXJvdXNlbCwgc3R5bGVJdGVtKTtcclxuICAgIHJldHVybiBzdHlsZUl0ZW07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ25ndS1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJ25ndS1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbmd1LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd1SXRlbUNvbXBvbmVudCB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pdGVtJykgY2xhc3NlcyA9IHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnbmd1LXRpbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnbmd1LXRpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyduZ3UtdGlsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3VUaWxlQ29tcG9uZW50IHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLml0ZW0nKSBjbGFzc2VzID0gdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxyXG4gIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxPdXRsZXQsXHJcbiAgTmd1Q2Fyb3VzZWxQb2ludERpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsIE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZVxyXG59IGZyb20gJy4vbmd1LWNhcm91c2VsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE5ndUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL25ndS1pdGVtL25ndS1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5ndUNhcm91c2VsIH0gZnJvbSAnLi9uZ3UtY2Fyb3VzZWwvbmd1LWNhcm91c2VsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5ndVRpbGVDb21wb25lbnQgfSBmcm9tICcuL25ndS10aWxlL25ndS10aWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5ndUNhcm91c2VsU2VydmljZSB9IGZyb20gJy4vbmd1LWNhcm91c2VsLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOZ3VDYXJvdXNlbCxcclxuICAgIE5ndUl0ZW1Db21wb25lbnQsXHJcbiAgICBOZ3VUaWxlQ29tcG9uZW50LFxyXG4gICAgTmd1Q2Fyb3VzZWxQb2ludERpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxXcmFwcGVyRGlyZWN0aXZlLFxyXG4gICAgTmd1Q2Fyb3VzZWxPdXRsZXRcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTmd1Q2Fyb3VzZWwsXHJcbiAgICBOZ3VJdGVtQ29tcG9uZW50LFxyXG4gICAgTmd1VGlsZUNvbXBvbmVudCxcclxuICAgIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsXHJcbiAgICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsV3JhcHBlckRpcmVjdGl2ZSxcclxuICAgIE5ndUNhcm91c2VsT3V0bGV0XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE5ndUNhcm91c2VsU2VydmljZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsTW9kdWxlIHtcclxufVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkRpcmVjdGl2ZSIsIlRlbXBsYXRlUmVmIiwiVmlld0NvbnRhaW5lclJlZiIsIkVsZW1lbnRSZWYiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkV2ZW50RW1pdHRlciIsIlN1YmplY3QiLCJpc0Rldk1vZGUiLCJPYnNlcnZhYmxlIiwib2YiLCJ0YWtlVW50aWwiLCJpc1BsYXRmb3JtQnJvd3NlciIsImZyb21FdmVudCIsIm1hcFRvIiwiaW50ZXJ2YWwiLCJtZXJnZSIsInN0YXJ0V2l0aCIsInN3aXRjaE1hcCIsImVtcHR5IiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJSZW5kZXJlcjIiLCJJdGVyYWJsZURpZmZlcnMiLCJJbmplY3QiLCJQTEFURk9STV9JRCIsIkNoYW5nZURldGVjdG9yUmVmIiwiVmlld0NoaWxkIiwiT3V0cHV0IiwiQ29udGVudENoaWxkcmVuIiwiSW5wdXQiLCJDb250ZW50Q2hpbGQiLCJIb3N0QmluZGluZyIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFDRSwwQkFDUyxLQUFtQixFQUNuQixRQUF5QixFQUN6QixRQUEyQixFQUMzQixTQUE4QixFQUM5QixNQUFrQixFQUNsQixZQUEyQixFQUMzQixVQUF1QixFQUN2QixJQUFjLEVBQ2QsS0FBVSxFQUNWLEtBQVMsRUFDVCxJQUFRLEVBQ1IsV0FBZSxFQUNmLGFBQWlCLEVBQ2pCLFNBQWEsRUFDYixVQUFjLEVBQ2QsWUFBZ0IsRUFDaEIsVUFBYyxFQUNkLFlBQWdCLEVBQ2hCLE1BQXFDLEVBQ3JDLEtBQVcsRUFDWCxJQUFZLEVBQ1osTUFBVSxFQUNWLGNBQWtCLEVBQ2xCLEtBQWEsRUFDYixPQUFjLEVBQ2QsTUFBYyxFQUNkLEdBQVcsRUFDWCxLQUFZLEVBQ1osUUFBWTtZQTVCWixzQkFBQTtnQkFBQSxZQUFZLEtBQUssRUFBRTs7WUFDbkIseUJBQUE7Z0JBQUEsZUFBZSxRQUFRLEVBQUU7O1lBRXpCLDBCQUFBO2dCQUFBLGdCQUFnQixZQUFZLEVBQUU7O1lBSTlCLHFCQUFBO2dCQUFBLGNBQWM7O1lBQ2Qsc0JBQUE7Z0JBQUEsVUFBVTs7WUFDVixzQkFBQTtnQkFBQSxTQUFTOztZQUNULHFCQUFBO2dCQUFBLFFBQVE7O1lBQ1IsNEJBQUE7Z0JBQUEsZUFBZTs7WUFDZiw4QkFBQTtnQkFBQSxpQkFBaUI7O1lBQ2pCLDBCQUFBO2dCQUFBLGFBQWE7O1lBQ2IsMkJBQUE7Z0JBQUEsY0FBYzs7WUFDZCw2QkFBQTtnQkFBQSxnQkFB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