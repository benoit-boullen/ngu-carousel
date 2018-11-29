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
export { LogLevel };
LogLevel[LogLevel.Off] = 'Off';
LogLevel[LogLevel.Error] = 'Error';
LogLevel[LogLevel.Warning] = 'Warning';
LogLevel[LogLevel.Info] = 'Info';
LogLevel[LogLevel.Debug] = 'Debug';
export class Logger {
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
if (false) {
    /**
     * Current logging level.
     * Set it to LogLevel.Off to disable logs completely.
     * @type {?}
     */
    Logger.level;
    /**
     * Additional log outputs.
     * @type {?}
     */
    Logger.outputs;
    /** @type {?} */
    Logger.previousTime;
    /** @type {?} */
    Logger.sumTiming;
    /** @type {?} */
    Logger.prototype.source;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJsaWIvbG9nZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFDRSxNQUFPO0lBQ1AsUUFBSztJQUNMLFVBQU87SUFDUCxPQUFJO0lBQ0osUUFBSzs7Ozs7Ozs7QUFRUCxNQUFNOzs7O0lBaUJKLFlBQW9CLE1BQWU7UUFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO0lBQ25DLENBQUM7Ozs7OztJQU1ELE1BQU0sQ0FBQyxvQkFBb0I7UUFDekIsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQVcsRUFBRSxVQUFtQixLQUFLOztjQUNwQyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUU7O2NBRWQsSUFBSSxHQUFVLENBQUMsR0FBRyxDQUFDO1FBRXpCLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTs7a0JBQ2pCLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7WUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzQjtZQUNELE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO1NBQy9CO1FBQ0QsTUFBTSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDOzs7Ozs7O0lBS0QsS0FBSyxDQUFDLEdBQUcsT0FBYztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7O0lBTUQsSUFBSSxDQUFDLEdBQUcsT0FBYztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7O0lBTUQsSUFBSSxDQUFDLEdBQUcsT0FBYztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7Ozs7O0lBTUQsS0FBSyxDQUFDLEdBQUcsT0FBYztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7O0lBRU8sR0FBRyxDQUFDLElBQWMsRUFBRSxLQUFlLEVBQUUsT0FBYztRQUN6RCxJQUFJLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFOztrQkFDbkIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO1lBQzdFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRztJQUNILENBQUM7O0FBdkZEOzs7R0FHRztBQUNJLFlBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0FBRTlCOztHQUVHO0FBQ0ksY0FBTyxHQUFnQixFQUFFLENBQUM7QUFFMUIsbUJBQVksR0FBUyxJQUFJLENBQUM7QUFFbkIsZ0JBQVMsR0FBUSxFQUFFLENBQUM7Ozs7Ozs7SUFUbEMsYUFBOEI7Ozs7O0lBSzlCLGVBQWlDOztJQUVqQyxvQkFBaUM7O0lBRWpDLGlCQUFrQzs7SUFFdEIsd0JBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFNpbXBsZSBsb2dnZXIgc3lzdGVtIHdpdGggdGhlIHBvc3NpYmlsaXR5IG9mIHJlZ2lzdGVyaW5nIGN1c3RvbSBvdXRwdXRzLlxyXG4gKlxyXG4gKiA0IGRpZmZlcmVudCBsb2cgbGV2ZWxzIGFyZSBwcm92aWRlZCwgd2l0aCBjb3JyZXNwb25kaW5nIG1ldGhvZHM6XHJcbiAqIC0gZGVidWcgICA6IGZvciBkZWJ1ZyBpbmZvcm1hdGlvblxyXG4gKiAtIGluZm8gICAgOiBmb3IgaW5mb3JtYXRpdmUgc3RhdHVzIG9mIHRoZSBhcHBsaWNhdGlvbiAoc3VjY2VzcywgLi4uKVxyXG4gKiAtIHdhcm5pbmcgOiBmb3Igbm9uLWNyaXRpY2FsIGVycm9ycyB0aGF0IGRvIG5vdCBwcmV2ZW50IG5vcm1hbCBhcHBsaWNhdGlvbiBiZWhhdmlvclxyXG4gKiAtIGVycm9yICAgOiBmb3IgY3JpdGljYWwgZXJyb3JzIHRoYXQgcHJldmVudCBub3JtYWwgYXBwbGljYXRpb24gYmVoYXZpb3JcclxuICpcclxuICogRXhhbXBsZSB1c2FnZTpcclxuICogYGBgXHJcbiAqIGltcG9ydCB7IExvZ2dlciB9IGZyb20gJ2FwcC9jb3JlL2xvZ2dlci5zZXJ2aWNlJztcclxuICpcclxuICogY29uc3QgbG9nID0gbmV3IExvZ2dlcignbXlGaWxlJyk7XHJcbiAqIC4uLlxyXG4gKiBsb2cuZGVidWcoJ3NvbWV0aGluZyBoYXBwZW5lZCcpO1xyXG4gKiBgYGBcclxuICpcclxuICogVG8gZGlzYWJsZSBkZWJ1ZyBhbmQgaW5mbyBsb2dzIGluIHByb2R1Y3Rpb24sIGFkZCB0aGlzIHNuaXBwZXQgdG8geW91ciByb290IGNvbXBvbmVudDpcclxuICogYGBgXHJcbiAqIGV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gKiAgIG5nT25Jbml0KCkge1xyXG4gKiAgICAgaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcclxuICogICAgICAgTG9nZ2VyLmVuYWJsZVByb2R1Y3Rpb25Nb2RlKCk7XHJcbiAqICAgICB9XHJcbiAqICAgICAuLi5cclxuICogICB9XHJcbiAqIH1cclxuICpcclxuICogSWYgeW91IHdhbnQgdG8gcHJvY2VzcyBsb2dzIHRocm91Z2ggb3RoZXIgb3V0cHV0cyB0aGFuIGNvbnNvbGUsIHlvdSBjYW4gYWRkIExvZ091dHB1dCBmdW5jdGlvbnMgdG8gTG9nZ2VyLm91dHB1dHMuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBwb3NzaWJsZSBsb2cgbGV2ZWxzLlxyXG4gKiBMb2dMZXZlbC5PZmYgaXMgbmV2ZXIgZW1pdHRlZCBhbmQgb25seSB1c2VkIHdpdGggTG9nZ2VyLmxldmVsIHByb3BlcnR5IHRvIGRpc2FibGUgbG9ncy5cclxuICovXHJcbmV4cG9ydCBlbnVtIExvZ0xldmVsIHtcclxuICBPZmYgPSAwLFxyXG4gIEVycm9yLFxyXG4gIFdhcm5pbmcsXHJcbiAgSW5mbyxcclxuICBEZWJ1Z1xyXG59XHJcblxyXG4vKipcclxuICogTG9nIG91dHB1dCBoYW5kbGVyIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTG9nT3V0cHV0ID0gKHNvdXJjZTogc3RyaW5nLCBsZXZlbDogTG9nTGV2ZWwsIC4uLm9iamVjdHM6IGFueVtdKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2dlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEN1cnJlbnQgbG9nZ2luZyBsZXZlbC5cclxuICAgKiBTZXQgaXQgdG8gTG9nTGV2ZWwuT2ZmIHRvIGRpc2FibGUgbG9ncyBjb21wbGV0ZWx5LlxyXG4gICAqL1xyXG4gIHN0YXRpYyBsZXZlbCA9IExvZ0xldmVsLkRlYnVnO1xyXG5cclxuICAvKipcclxuICAgKiBBZGRpdGlvbmFsIGxvZyBvdXRwdXRzLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBvdXRwdXRzOiBMb2dPdXRwdXRbXSA9IFtdO1xyXG5cclxuICBzdGF0aWMgcHJldmlvdXNUaW1lOiBEYXRlID0gbnVsbDtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBzdW1UaW1pbmc6IGFueSA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNvdXJjZT86IHN0cmluZykge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW5hYmxlcyBwcm9kdWN0aW9uIG1vZGUuXHJcbiAgICogU2V0cyBsb2dnaW5nIGxldmVsIHRvIExvZ0xldmVsLldhcm5pbmcuXHJcbiAgICovXHJcbiAgc3RhdGljIGVuYWJsZVByb2R1Y3Rpb25Nb2RlKCkge1xyXG4gICAgTG9nZ2VyLmxldmVsID0gTG9nTGV2ZWwuV2FybmluZztcclxuICB9XHJcblxyXG4gIHJlc2V0U3VtKCkge1xyXG4gICAgTG9nZ2VyLnN1bVRpbWluZyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgdGltaW5nKHRhZzogc3RyaW5nLCBkaXNwbGF5OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGxvZ3M6IGFueVtdID0gW3RhZ107XHJcblxyXG4gICAgaWYgKExvZ2dlci5wcmV2aW91c1RpbWUpIHtcclxuICAgICAgY29uc3QgZGlmZiA9IGQuZ2V0VGltZSgpIC0gTG9nZ2VyLnByZXZpb3VzVGltZS5nZXRUaW1lKCk7XHJcbiAgICAgIGxvZ3MudW5zaGlmdCgnWycgKyBkaWZmICsgJ10nKTtcclxuICAgICAgaWYgKCFMb2dnZXIuc3VtVGltaW5nW3RhZ10pIHtcclxuICAgICAgICBMb2dnZXIuc3VtVGltaW5nW3RhZ10gPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIExvZ2dlci5zdW1UaW1pbmdbdGFnXSArPSBkaWZmO1xyXG4gICAgfVxyXG4gICAgTG9nZ2VyLnByZXZpb3VzVGltZSA9IGQ7XHJcbiAgICBsb2dzLnVuc2hpZnQoZC5nZXRTZWNvbmRzKCkgKyAnLicgKyBkLmdldE1pbGxpc2Vjb25kcygpKTtcclxuICAgIGlmIChkaXNwbGF5KSB7XHJcbiAgICAgIHRoaXMubG9nKGNvbnNvbGUubG9nLCBMb2dMZXZlbC5JbmZvLCBsb2dzKTtcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogTG9ncyBtZXNzYWdlcyBvciBvYmplY3RzICB3aXRoIHRoZSBkZWJ1ZyBsZXZlbC5cclxuICAgKiBXb3JrcyB0aGUgc2FtZSBhcyBjb25zb2xlLmxvZygpLlxyXG4gICAqL1xyXG4gIGRlYnVnKC4uLm9iamVjdHM6IGFueVtdKSB7XHJcbiAgICB0aGlzLmxvZyhjb25zb2xlLmxvZywgTG9nTGV2ZWwuRGVidWcsIG9iamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9ncyBtZXNzYWdlcyBvciBvYmplY3RzICB3aXRoIHRoZSBpbmZvIGxldmVsLlxyXG4gICAqIFdvcmtzIHRoZSBzYW1lIGFzIGNvbnNvbGUubG9nKCkuXHJcbiAgICovXHJcbiAgaW5mbyguLi5vYmplY3RzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5sb2coY29uc29sZS5pbmZvLCBMb2dMZXZlbC5JbmZvLCBvYmplY3RzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ3MgbWVzc2FnZXMgb3Igb2JqZWN0cyAgd2l0aCB0aGUgd2FybmluZyBsZXZlbC5cclxuICAgKiBXb3JrcyB0aGUgc2FtZSBhcyBjb25zb2xlLmxvZygpLlxyXG4gICAqL1xyXG4gIHdhcm4oLi4ub2JqZWN0czogYW55W10pIHtcclxuICAgIHRoaXMubG9nKGNvbnNvbGUud2FybiwgTG9nTGV2ZWwuV2FybmluZywgb2JqZWN0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2dzIG1lc3NhZ2VzIG9yIG9iamVjdHMgIHdpdGggdGhlIGVycm9yIGxldmVsLlxyXG4gICAqIFdvcmtzIHRoZSBzYW1lIGFzIGNvbnNvbGUubG9nKCkuXHJcbiAgICovXHJcbiAgZXJyb3IoLi4ub2JqZWN0czogYW55W10pIHtcclxuICAgIHRoaXMubG9nKGNvbnNvbGUuZXJyb3IsIExvZ0xldmVsLkVycm9yLCBvYmplY3RzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9nKGZ1bmM6IEZ1bmN0aW9uLCBsZXZlbDogTG9nTGV2ZWwsIG9iamVjdHM6IGFueVtdKSB7XHJcbiAgICBpZiAobGV2ZWwgPD0gTG9nZ2VyLmxldmVsKSB7XHJcbiAgICAgIGNvbnN0IGxvZyA9IHRoaXMuc291cmNlID8gWydbJyArIHRoaXMuc291cmNlICsgJ10nXS5jb25jYXQob2JqZWN0cykgOiBvYmplY3RzO1xyXG4gICAgICBmdW5jLmFwcGx5KGNvbnNvbGUsIGxvZyk7XHJcbiAgICAgIExvZ2dlci5vdXRwdXRzLmZvckVhY2goKG91dHB1dCkgPT4gb3V0cHV0LmFwcGx5KG91dHB1dCwgW3RoaXMuc291cmNlLCBsZXZlbF0uY29uY2F0KG9iamVjdHMpKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=