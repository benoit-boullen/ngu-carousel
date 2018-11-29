/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class NguCarouselStore {
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
    constructor(touch = new Touch(), vertical = new Vertical(), interval, transform = new NguTransfrom(), button, visibleItems, deviceType, type = 'fixed', token = '', items = 0, load = 0, _carouselWidth = 0, itemWidth = 0, slideItems = 0, itemWidthPer = 0, itemLength = 0, currentSlide = 0, easing = 'cubic-bezier(0, 0, 0.2, 1)', speed = 200, loop = false, dexVal = 0, touchTransform = 0, isEnd = false, isFirst = true, isLast = false, RTL = false, point = true, velocity = 1) {
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
if (false) {
    /** @type {?} */
    NguCarouselStore.deviceWidth;
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
    NguCarouselStore.prototype._carouselWidth;
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
export class ItemsControl {
}
if (false) {
    /** @type {?} */
    ItemsControl.prototype.start;
    /** @type {?} */
    ItemsControl.prototype.end;
}
export class Vertical {
}
if (false) {
    /** @type {?} */
    Vertical.prototype.enabled;
    /** @type {?} */
    Vertical.prototype.height;
}
export class NguButton {
}
if (false) {
    /** @type {?} */
    NguButton.prototype.visibility;
    /** @type {?} */
    NguButton.prototype.elastic;
}
export class Touch {
}
if (false) {
    /** @type {?} */
    Touch.prototype.active;
    /** @type {?} */
    Touch.prototype.swipe;
    /** @type {?} */
    Touch.prototype.velocity;
}
export class NguTransfrom {
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
if (false) {
    /** @type {?} */
    NguTransfrom.prototype.xs;
    /** @type {?} */
    NguTransfrom.prototype.sm;
    /** @type {?} */
    NguTransfrom.prototype.md;
    /** @type {?} */
    NguTransfrom.prototype.lg;
    /** @type {?} */
    NguTransfrom.prototype.all;
}
export class NguCarouselConfig {
}
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
/**
 * @record
 */
export function Point() { }
if (false) {
    /** @type {?} */
    Point.prototype.visible;
    /** @type {?|undefined} */
    Point.prototype.hideOnSingleSlide;
}
/**
 * @record
 */
export function Animation() { }
if (false) {
    /** @type {?|undefined} */
    Animation.prototype.type;
    /** @type {?|undefined} */
    Animation.prototype.animateStyles;
}
/**
 * @record
 */
export function AnimationStyles() { }
if (false) {
    /** @type {?|undefined} */
    AnimationStyles.prototype.style;
    /** @type {?|undefined} */
    AnimationStyles.prototype.open;
    /** @type {?|undefined} */
    AnimationStyles.prototype.close;
    /** @type {?|undefined} */
    AnimationStyles.prototype.stagger;
}
/**
 * @record
 */
export function CarouselInterval() { }
if (false) {
    /** @type {?} */
    CarouselInterval.prototype.timing;
    /** @type {?|undefined} */
    CarouselInterval.prototype.initialDelay;
}
/**
 * @template T
 */
export class NguCarouselOutletContext {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.$implicit = data;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1LWNhcm91c2VsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGh5cGVjb2RlL2Nhcm91c2VsLyIsInNvdXJjZXMiOlsibGliL25ndS1jYXJvdXNlbC9uZ3UtY2Fyb3VzZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFSixZQUNTLFFBQVEsSUFBSSxLQUFLLEVBQUUsRUFDbkIsV0FBVyxJQUFJLFFBQVEsRUFBRSxFQUN6QixRQUEyQixFQUMzQixZQUFZLElBQUksWUFBWSxFQUFFLEVBQzlCLE1BQWtCLEVBQ2xCLFlBQTJCLEVBQzNCLFVBQXVCLEVBQ3ZCLE9BQU8sT0FBTyxFQUNkLFFBQVEsRUFBRSxFQUNWLFFBQVEsQ0FBQyxFQUNULE9BQU8sQ0FBQyxFQUNMLGlCQUFpQixDQUFDLEVBQ3JCLFlBQVksQ0FBQyxFQUNiLGFBQWEsQ0FBQyxFQUNkLGVBQWUsQ0FBQyxFQUNoQixhQUFhLENBQUMsRUFDZCxlQUFlLENBQUMsRUFDaEIsU0FBUyw0QkFBNEIsRUFDckMsUUFBUSxHQUFHLEVBQ1gsT0FBTyxLQUFLLEVBQ1osU0FBUyxDQUFDLEVBQ1YsaUJBQWlCLENBQUMsRUFDbEIsUUFBUSxLQUFLLEVBQ2IsVUFBVSxJQUFJLEVBQ2QsU0FBUyxLQUFLLEVBQ2QsTUFBTSxLQUFLLEVBQ1gsUUFBUSxJQUFJLEVBQ1osV0FBVyxDQUFDO1FBM0JaLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNsQixpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUMzQixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLFNBQUksR0FBSixJQUFJLENBQVU7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQ1YsVUFBSyxHQUFM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O0lBRkMsa0NBQWU7O0lBQ2Ysd0NBQXNCOzs7OztBQUd4QixNQUFNOzs7O0lBYUosWUFBWSxJQUFPO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7Q0FDRjs7Ozs7O0lBZEMsNkNBQWE7Ozs7O0lBR2IseUNBQWM7Ozs7O0lBR2QseUNBQWU7Ozs7O0lBR2YseUNBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxTdG9yZSB7XHJcbiAgcHVibGljIHN0YXRpYyBkZXZpY2VXaWR0aCA9IDA7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgdG91Y2ggPSBuZXcgVG91Y2goKSxcclxuICAgIHB1YmxpYyB2ZXJ0aWNhbCA9IG5ldyBWZXJ0aWNhbCgpLFxyXG4gICAgcHVibGljIGludGVydmFsPzogQ2Fyb3VzZWxJbnRlcnZhbCxcclxuICAgIHB1YmxpYyB0cmFuc2Zvcm0gPSBuZXcgTmd1VHJhbnNmcm9tKCksXHJcbiAgICBwdWJsaWMgYnV0dG9uPzogTmd1QnV0dG9uLFxyXG4gICAgcHVibGljIHZpc2libGVJdGVtcz86IEl0ZW1zQ29udHJvbCxcclxuICAgIHB1YmxpYyBkZXZpY2VUeXBlPzogRGV2aWNlVHlwZSxcclxuICAgIHB1YmxpYyB0eXBlID0gJ2ZpeGVkJyxcclxuICAgIHB1YmxpYyB0b2tlbiA9ICcnLFxyXG4gICAgcHVibGljIGl0ZW1zID0gMCxcclxuICAgIHB1YmxpYyBsb2FkID0gMCxcclxuICAgIHByb3RlY3RlZCBfY2Fyb3VzZWxXaWR0aCA9IDAsXHJcbiAgICBwdWJsaWMgaXRlbVdpZHRoID0gMCxcclxuICAgIHB1YmxpYyBzbGlkZUl0ZW1zID0gMCxcclxuICAgIHB1YmxpYyBpdGVtV2lkdGhQZXIgPSAwLFxyXG4gICAgcHVibGljIGl0ZW1MZW5ndGggPSAwLFxyXG4gICAgcHVibGljIGN1cnJlbnRTbGlkZSA9IDAsXHJcbiAgICBwdWJsaWMgZWFzaW5nID0gJ2N1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJyxcclxuICAgIHB1YmxpYyBzcGVlZCA9IDIwMCxcclxuICAgIHB1YmxpYyBsb29wID0gZmFsc2UsXHJcbiAgICBwdWJsaWMgZGV4VmFsID0gMCxcclxuICAgIHB1YmxpYyB0b3VjaFRyYW5zZm9ybSA9IDAsXHJcbiAgICBwdWJsaWMgaXNFbmQgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBpc0ZpcnN0ID0gdHJ1ZSxcclxuICAgIHB1YmxpYyBpc0xhc3QgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBSVEwgPSBmYWxzZSxcclxuICAgIHB1YmxpYyBwb2ludCA9IHRydWUsXHJcbiAgICBwdWJsaWMgdmVsb2NpdHkgPSAxXHJcbiAgKSB7fVxyXG59XHJcbmV4cG9ydCB0eXBlIERldmljZVR5cGUgPSAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ2FsbCc7XHJcblxyXG5leHBvcnQgdHlwZSBCdXR0b25WaXNpYmxlID0gJ2Rpc2FibGVkJyB8ICdoaWRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbnRyb2wge1xyXG4gIHN0YXJ0OiBudW1iZXI7XHJcbiAgZW5kOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbCB7XHJcbiAgZW5hYmxlZDogYm9vbGVhbjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICAvLyBudW1IZWlnaHQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3VCdXR0b24ge1xyXG4gIHZpc2liaWxpdHk/OiBCdXR0b25WaXNpYmxlO1xyXG4gIGVsYXN0aWM/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb3VjaCB7XHJcbiAgYWN0aXZlPzogYm9vbGVhbjtcclxuICBzd2lwZTogc3RyaW5nO1xyXG4gIHZlbG9jaXR5OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3VUcmFuc2Zyb20ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHhzID0gMCxcclxuICAgIHB1YmxpYyBzbSA9IDAsXHJcbiAgICBwdWJsaWMgbWQgPSAwLFxyXG4gICAgcHVibGljIGxnID0gMCxcclxuICAgIHB1YmxpYyBhbGwgPSAwXHJcbiAgKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxDb25maWcge1xyXG4gIGdyaWQ6IE5ndVRyYW5zZnJvbTtcclxuICBzbGlkZT86IG51bWJlcjtcclxuICBzcGVlZD86IG51bWJlcjtcclxuICBpbnRlcnZhbD86IENhcm91c2VsSW50ZXJ2YWw7XHJcbiAgYW5pbWF0aW9uPzogQW5pbWF0ZTtcclxuICBwb2ludD86IFBvaW50O1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbiAgbG9hZD86IG51bWJlcjtcclxuICBjdXN0b20/OiBDdXN0b207XHJcbiAgbG9vcD86IGJvb2xlYW47XHJcbiAgdG91Y2g/OiBib29sZWFuO1xyXG4gIGVhc2luZz86IHN0cmluZztcclxuICBSVEw/OiBib29sZWFuO1xyXG4gIGJ1dHRvbj86IE5ndUJ1dHRvbjtcclxuICB2ZXJ0aWNhbD86IFZlcnRpY2FsO1xyXG4gIHZlbG9jaXR5PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDdXN0b20gPSAnYmFubmVyJztcclxuZXhwb3J0IHR5cGUgQW5pbWF0ZSA9ICdsYXp5JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xyXG4gIHZpc2libGU6IGJvb2xlYW47XHJcbiAgaGlkZU9uU2luZ2xlU2xpZGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvbiB7XHJcbiAgdHlwZT86IEFuaW1hdGU7XHJcbiAgYW5pbWF0ZVN0eWxlcz86IEFuaW1hdGlvblN0eWxlcztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25TdHlsZXMge1xyXG4gIHN0eWxlPzogc3RyaW5nO1xyXG4gIG9wZW4/OiBzdHJpbmc7XHJcbiAgY2xvc2U/OiBzdHJpbmc7XHJcbiAgc3RhZ2dlcj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJvdXNlbEludGVydmFsIHtcclxuICB0aW1pbmc6IG51bWJlcjtcclxuICBpbml0aWFsRGVsYXk/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE91dGxldENvbnRleHQ8VD4ge1xyXG4gIC8qKiBEYXRhIGZvciB0aGUgbm9kZS4gKi9cclxuICAkaW1wbGljaXQ6IFQ7XHJcblxyXG4gIC8qKiBEZXB0aCBvZiB0aGUgbm9kZS4gKi9cclxuICBsZXZlbDogbnVtYmVyO1xyXG5cclxuICAvKiogSW5kZXggbG9jYXRpb24gb2YgdGhlIG5vZGUuICovXHJcbiAgaW5kZXg/OiBudW1iZXI7XHJcblxyXG4gIC8qKiBMZW5ndGggb2YgdGhlIG51bWJlciBvZiB0b3RhbCBkYXRhTm9kZXMuICovXHJcbiAgY291bnQ/OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFQpIHtcclxuICAgIHRoaXMuJGltcGxpY2l0ID0gZGF0YTtcclxuICB9XHJcbn1cclxuIl19