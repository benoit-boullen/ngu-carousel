/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NguCarouselStore = /** @class */ (function () {
    function NguCarouselStore(touch, vertical, interval, transform, button, visibleItems, deviceType, type, token, items, load, deviceWidth, carouselWidth, itemWidth, slideItems, itemWidthPer, itemLength, currentSlide, easing, speed, loop, dexVal, touchTransform, isEnd, isFirst, isLast, RTL, point, velocity) {
        if (touch === void 0) { touch = new Touch(); }
        if (vertical === void 0) { vertical = new Vertical(); }
        if (transform === void 0) { transform = new Transfrom(); }
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
export { NguCarouselStore };
if (false) {
    /** @type {?} */
    NguCarouselStore.prototype.touch;
    /** @type {?} */
    NguCarouselStore.prototype.vertical;
    /** @type {?} */
    NguCarouselStore.prototype.interval;
    /** @type {?} */
    NguCarouselStore.prototype.transform;
    /** @type {?} */
    NguCarouselStore.prototype.button;
    /** @type {?} */
    NguCarouselStore.prototype.visibleItems;
    /** @type {?} */
    NguCarouselStore.prototype.deviceType;
    /** @type {?} */
    NguCarouselStore.prototype.type;
    /** @type {?} */
    NguCarouselStore.prototype.token;
    /** @type {?} */
    NguCarouselStore.prototype.items;
    /** @type {?} */
    NguCarouselStore.prototype.load;
    /** @type {?} */
    NguCarouselStore.prototype.deviceWidth;
    /** @type {?} */
    NguCarouselStore.prototype.carouselWidth;
    /** @type {?} */
    NguCarouselStore.prototype.itemWidth;
    /** @type {?} */
    NguCarouselStore.prototype.slideItems;
    /** @type {?} */
    NguCarouselStore.prototype.itemWidthPer;
    /** @type {?} */
    NguCarouselStore.prototype.itemLength;
    /** @type {?} */
    NguCarouselStore.prototype.currentSlide;
    /** @type {?} */
    NguCarouselStore.prototype.easing;
    /** @type {?} */
    NguCarouselStore.prototype.speed;
    /** @type {?} */
    NguCarouselStore.prototype.loop;
    /** @type {?} */
    NguCarouselStore.prototype.dexVal;
    /** @type {?} */
    NguCarouselStore.prototype.touchTransform;
    /** @type {?} */
    NguCarouselStore.prototype.isEnd;
    /** @type {?} */
    NguCarouselStore.prototype.isFirst;
    /** @type {?} */
    NguCarouselStore.prototype.isLast;
    /** @type {?} */
    NguCarouselStore.prototype.RTL;
    /** @type {?} */
    NguCarouselStore.prototype.point;
    /** @type {?} */
    NguCarouselStore.prototype.velocity;
}
/** @typedef {?} */
var DeviceType;
export { DeviceType };
/** @typedef {?} */
var ButtonVisible;
export { ButtonVisible };
var ItemsControl = /** @class */ (function () {
    function ItemsControl() {
    }
    return ItemsControl;
}());
export { ItemsControl };
if (false) {
    /** @type {?} */
    ItemsControl.prototype.start;
    /** @type {?} */
    ItemsControl.prototype.end;
}
var Vertical = /** @class */ (function () {
    function Vertical() {
    }
    return Vertical;
}());
export { Vertical };
if (false) {
    /** @type {?} */
    Vertical.prototype.enabled;
    /** @type {?} */
    Vertical.prototype.height;
}
var NguButton = /** @class */ (function () {
    function NguButton() {
    }
    return NguButton;
}());
export { NguButton };
if (false) {
    /** @type {?} */
    NguButton.prototype.visibility;
    /** @type {?} */
    NguButton.prototype.elastic;
}
var Touch = /** @class */ (function () {
    function Touch() {
    }
    return Touch;
}());
export { Touch };
if (false) {
    /** @type {?} */
    Touch.prototype.active;
    /** @type {?} */
    Touch.prototype.swipe;
    /** @type {?} */
    Touch.prototype.velocity;
}
var Transfrom = /** @class */ (function () {
    function Transfrom(xs, sm, md, lg, all) {
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
    return Transfrom;
}());
export { Transfrom };
if (false) {
    /** @type {?} */
    Transfrom.prototype.xs;
    /** @type {?} */
    Transfrom.prototype.sm;
    /** @type {?} */
    Transfrom.prototype.md;
    /** @type {?} */
    Transfrom.prototype.lg;
    /** @type {?} */
    Transfrom.prototype.all;
}
var NguCarouselConfig = /** @class */ (function () {
    function NguCarouselConfig() {
    }
    return NguCarouselConfig;
}());
export { NguCarouselConfig };
if (false) {
    /** @type {?} */
    NguCarouselConfig.prototype.grid;
    /** @type {?} */
    NguCarouselConfig.prototype.slide;
    /** @type {?} */
    NguCarouselConfig.prototype.speed;
    /** @type {?} */
    NguCarouselConfig.prototype.interval;
    /** @type {?} */
    NguCarouselConfig.prototype.animation;
    /** @type {?} */
    NguCarouselConfig.prototype.point;
    /** @type {?} */
    NguCarouselConfig.prototype.type;
    /** @type {?} */
    NguCarouselConfig.prototype.load;
    /** @type {?} */
    NguCarouselConfig.prototype.custom;
    /** @type {?} */
    NguCarouselConfig.prototype.loop;
    /** @type {?} */
    NguCarouselConfig.prototype.touch;
    /** @type {?} */
    NguCarouselConfig.prototype.easing;
    /** @type {?} */
    NguCarouselConfig.prototype.RTL;
    /** @type {?} */
    NguCarouselConfig.prototype.button;
    /** @type {?} */
    NguCarouselConfig.prototype.vertical;
    /** @type {?} */
    NguCarouselConfig.prototype.velocity;
}
/** @typedef {?} */
var Custom;
export { Custom };
/** @typedef {?} */
var Animate;
export { Animate };
/**
 * @record
 */
export function Point() { }
/** @type {?} */
Point.prototype.visible;
/** @type {?|undefined} */
Point.prototype.hideOnSingleSlide;
/**
 * @record
 */
export function Animation() { }
/** @type {?|undefined} */
Animation.prototype.type;
/** @type {?|undefined} */
Animation.prototype.animateStyles;
/**
 * @record
 */
export function AnimationStyles() { }
/** @type {?|undefined} */
AnimationStyles.prototype.style;
/** @type {?|undefined} */
AnimationStyles.prototype.open;
/** @type {?|undefined} */
AnimationStyles.prototype.close;
/** @type {?|undefined} */
AnimationStyles.prototype.stagger;
/**
 * @record
 */
export function CarouselInterval() { }
/** @type {?} */
CarouselInterval.prototype.timing;
/** @type {?|undefined} */
CarouselInterval.prototype.initialDelay;
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
 * @template T
 */
export { NguCarouselOutletContext };
if (false) {
    /**
     * Data for the node.
     * @type {?}
     */
    NguCarouselOutletContext.prototype.$implicit;
    /**
     * Depth of the node.
     * @type {?}
     */
    NguCarouselOutletContext.prototype.level;
    /**
     * Index location of the node.
     * @type {?}
     */
    NguCarouselOutletContext.prototype.index;
    /**
     * Length of the number of total dataNodes.
     * @type {?}
     */
    NguCarouselOutletContext.prototype.count;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1LWNhcm91c2VsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVub2l0LmJvdWxsZW4vY2Fyb3VzZWwvIiwic291cmNlcyI6WyJsaWIvbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBQTtJQUNFLDBCQUNTLE9BQ0EsVUFDQSxVQUNBLFdBQ0EsUUFDQSxjQUNBLFlBQ0EsTUFDQSxPQUNBLE9BQ0EsTUFDQSxhQUNBLGVBQ0EsV0FDQSxZQUNBLGNBQ0EsWUFDQSxjQUNBLFFBQ0EsT0FDQSxNQUNBLFFBQ0EsZ0JBQ0EsT0FDQSxTQUNBLFFBQ0EsS0FDQSxPQUNBOzRDQTVCWSxLQUFLO2tEQUNGLFFBQVE7b0RBRVAsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFIekIsVUFBSyxHQUFMLEtBQUs7UUFDTCxhQUFRLEdBQVIsUUFBUTtRQUNSLGFBQVEsR0FBUixRQUFRO1FBQ1IsY0FBUyxHQUFULFNBQVM7UUFDVCxXQUFNLEdBQU4sTUFBTTtRQUNOLGlCQUFZLEdBQVosWUFBWTtRQUNaLGVBQVUsR0FBVixVQUFVO1FBQ1YsU0FBSSxHQUFKLElBQUk7UUFDSixVQUFLLEdBQUwsS0FBSztRQUNMLFVBQUssR0FBTCxLQUFLO1FBQ0wsU0FBSSxHQUFKLElBQUk7UUFDSixnQkFBVyxHQUFYLFdBQVc7UUFDWCxrQkFBYSxHQUFiLGFBQWE7UUFDYixjQUFTLEdBQVQsU0FBUztRQUNULGVBQVUsR0FBVixVQUFVO1FBQ1YsaUJBQVksR0FBWixZQUFZO1FBQ1osZUFBVSxHQUFWLFVBQVU7UUFDVixpQkFBWSxHQUFaLFlBQVk7UUFDWixXQUFNLEdBQU4sTUFBTTtRQUNOLFVBQUssR0FBTCxLQUFLO1FBQ0wsU0FBSSxHQUFKLElBQUk7UUFDSixXQUFNLEdBQU4sTUFBTTtRQUNOLG1CQUFjLEdBQWQsY0FBYztRQUNkLFVBQUssR0FBTCxLQUFLO1FBQ0wsWUFBTyxHQUFQLE9BQU87UUFDUCxXQUFNLEdBQU4sTUFBTTtRQUNOLFFBQUcsR0FBSCxHQUFHO1FBQ0gsVUFBSyxHQUFMLEtBQUs7UUFDTCxhQUFRLEdBQVIsUUFBUTtLQUNiOzJCQS9CTjtJQWdDQyxDQUFBO0FBaENELDRCQWdDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtELElBQUE7Ozt1QkFyQ0E7SUF3Q0MsQ0FBQTtBQUhELHdCQUdDOzs7Ozs7O0FBRUQsSUFBQTs7O21CQTFDQTtJQThDQyxDQUFBO0FBSkQsb0JBSUM7Ozs7Ozs7QUFFRCxJQUFBOzs7b0JBaERBO0lBbURDLENBQUE7QUFIRCxxQkFHQzs7Ozs7OztBQUVELElBQUE7OztnQkFyREE7SUF5REMsQ0FBQTtBQUpELGlCQUlDOzs7Ozs7Ozs7QUFFRCxJQUFBO0lBQ0UsbUJBQ1MsSUFDQSxJQUNBLElBQ0EsSUFDQTs7Ozs7O1FBSkEsT0FBRSxHQUFGLEVBQUU7UUFDRixPQUFFLEdBQUYsRUFBRTtRQUNGLE9BQUUsR0FBRixFQUFFO1FBQ0YsT0FBRSxHQUFGLEVBQUU7UUFDRixRQUFHLEdBQUgsR0FBRztLQUNSO29CQWxFTjtJQW1FQyxDQUFBO0FBUkQscUJBUUM7Ozs7Ozs7Ozs7Ozs7QUFFRCxJQUFBOzs7NEJBckVBO0lBc0ZDLENBQUE7QUFqQkQsNkJBaUJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCRDs7O0FBQUE7SUFhRSxrQ0FBWSxJQUFPO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0tBQ3ZCO21DQWhJSDtJQWlJQyxDQUFBOzs7O0FBaEJELG9DQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbFN0b3JlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB0b3VjaCA9IG5ldyBUb3VjaCgpLFxyXG4gICAgcHVibGljIHZlcnRpY2FsID0gbmV3IFZlcnRpY2FsKCksXHJcbiAgICBwdWJsaWMgaW50ZXJ2YWw/OiBDYXJvdXNlbEludGVydmFsLFxyXG4gICAgcHVibGljIHRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zyb20oKSxcclxuICAgIHB1YmxpYyBidXR0b24/OiBOZ3VCdXR0b24sXHJcbiAgICBwdWJsaWMgdmlzaWJsZUl0ZW1zPzogSXRlbXNDb250cm9sLFxyXG4gICAgcHVibGljIGRldmljZVR5cGU/OiBEZXZpY2VUeXBlLFxyXG4gICAgcHVibGljIHR5cGUgPSAnZml4ZWQnLFxyXG4gICAgcHVibGljIHRva2VuID0gJycsXHJcbiAgICBwdWJsaWMgaXRlbXMgPSAwLFxyXG4gICAgcHVibGljIGxvYWQgPSAwLFxyXG4gICAgcHVibGljIGRldmljZVdpZHRoID0gMCxcclxuICAgIHB1YmxpYyBjYXJvdXNlbFdpZHRoID0gMCxcclxuICAgIHB1YmxpYyBpdGVtV2lkdGggPSAwLFxyXG4gICAgcHVibGljIHNsaWRlSXRlbXMgPSAwLFxyXG4gICAgcHVibGljIGl0ZW1XaWR0aFBlciA9IDAsXHJcbiAgICBwdWJsaWMgaXRlbUxlbmd0aCA9IDAsXHJcbiAgICBwdWJsaWMgY3VycmVudFNsaWRlID0gMCxcclxuICAgIHB1YmxpYyBlYXNpbmcgPSAnY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLFxyXG4gICAgcHVibGljIHNwZWVkID0gMjAwLFxyXG4gICAgcHVibGljIGxvb3AgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBkZXhWYWwgPSAwLFxyXG4gICAgcHVibGljIHRvdWNoVHJhbnNmb3JtID0gMCxcclxuICAgIHB1YmxpYyBpc0VuZCA9IGZhbHNlLFxyXG4gICAgcHVibGljIGlzRmlyc3QgPSB0cnVlLFxyXG4gICAgcHVibGljIGlzTGFzdCA9IGZhbHNlLFxyXG4gICAgcHVibGljIFJUTCA9IGZhbHNlLFxyXG4gICAgcHVibGljIHBvaW50ID0gdHJ1ZSxcclxuICAgIHB1YmxpYyB2ZWxvY2l0eSA9IDFcclxuICApIHt9XHJcbn1cclxuZXhwb3J0IHR5cGUgRGV2aWNlVHlwZSA9ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAnYWxsJztcclxuXHJcbmV4cG9ydCB0eXBlIEJ1dHRvblZpc2libGUgPSAnZGlzYWJsZWQnIHwgJ2hpZGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29udHJvbCB7XHJcbiAgc3RhcnQ6IG51bWJlcjtcclxuICBlbmQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsIHtcclxuICBlbmFibGVkOiBib29sZWFuO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIC8vIG51bUhlaWdodD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ndUJ1dHRvbiB7XHJcbiAgdmlzaWJpbGl0eT86IEJ1dHRvblZpc2libGU7XHJcbiAgZWxhc3RpYz86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvdWNoIHtcclxuICBhY3RpdmU/OiBib29sZWFuO1xyXG4gIHN3aXBlOiBzdHJpbmc7XHJcbiAgdmVsb2NpdHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyYW5zZnJvbSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgeHMgPSAwLFxyXG4gICAgcHVibGljIHNtID0gMCxcclxuICAgIHB1YmxpYyBtZCA9IDAsXHJcbiAgICBwdWJsaWMgbGcgPSAwLFxyXG4gICAgcHVibGljIGFsbCA9IDBcclxuICApIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbENvbmZpZyB7XHJcbiAgZ3JpZDogVHJhbnNmcm9tO1xyXG4gIHNsaWRlPzogbnVtYmVyO1xyXG4gIHNwZWVkPzogbnVtYmVyO1xyXG4gIGludGVydmFsPzogQ2Fyb3VzZWxJbnRlcnZhbDtcclxuICBhbmltYXRpb24/OiBBbmltYXRlO1xyXG4gIHBvaW50PzogUG9pbnQ7XHJcbiAgdHlwZT86IHN0cmluZztcclxuICBsb2FkPzogbnVtYmVyO1xyXG4gIGN1c3RvbT86IEN1c3RvbTtcclxuICBsb29wPzogYm9vbGVhbjtcclxuICB0b3VjaD86IGJvb2xlYW47XHJcbiAgZWFzaW5nPzogc3RyaW5nO1xyXG4gIFJUTD86IGJvb2xlYW47XHJcbiAgYnV0dG9uPzogTmd1QnV0dG9uO1xyXG4gIHZlcnRpY2FsPzogVmVydGljYWw7XHJcbiAgdmVsb2NpdHk/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEN1c3RvbSA9ICdiYW5uZXInO1xyXG5leHBvcnQgdHlwZSBBbmltYXRlID0gJ2xhenknO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XHJcbiAgdmlzaWJsZTogYm9vbGVhbjtcclxuICBoaWRlT25TaW5nbGVTbGlkZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uIHtcclxuICB0eXBlPzogQW5pbWF0ZTtcclxuICBhbmltYXRlU3R5bGVzPzogQW5pbWF0aW9uU3R5bGVzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvblN0eWxlcyB7XHJcbiAgc3R5bGU/OiBzdHJpbmc7XHJcbiAgb3Blbj86IHN0cmluZztcclxuICBjbG9zZT86IHN0cmluZztcclxuICBzdGFnZ2VyPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhcm91c2VsSW50ZXJ2YWwge1xyXG4gIHRpbWluZzogbnVtYmVyO1xyXG4gIGluaXRpYWxEZWxheT86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsT3V0bGV0Q29udGV4dDxUPiB7XHJcbiAgLyoqIERhdGEgZm9yIHRoZSBub2RlLiAqL1xyXG4gICRpbXBsaWNpdDogVDtcclxuXHJcbiAgLyoqIERlcHRoIG9mIHRoZSBub2RlLiAqL1xyXG4gIGxldmVsOiBudW1iZXI7XHJcblxyXG4gIC8qKiBJbmRleCBsb2NhdGlvbiBvZiB0aGUgbm9kZS4gKi9cclxuICBpbmRleD86IG51bWJlcjtcclxuXHJcbiAgLyoqIExlbmd0aCBvZiB0aGUgbnVtYmVyIG9mIHRvdGFsIGRhdGFOb2Rlcy4gKi9cclxuICBjb3VudD86IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogVCkge1xyXG4gICAgdGhpcy4kaW1wbGljaXQgPSBkYXRhO1xyXG4gIH1cclxufVxyXG4iXX0=