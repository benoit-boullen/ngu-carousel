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
export { LogLevel };
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
export { Logger };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaHlwZWNvZGUvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJsaWIvbG9nZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFDRSxNQUFPO0lBQ1AsUUFBSztJQUNMLFVBQU87SUFDUCxPQUFJO0lBQ0osUUFBSzs7Ozs7Ozs7QUFRUDtJQWlCRSxnQkFBb0IsTUFBZTtRQUFmLFdBQU0sR0FBTixNQUFNLENBQVM7SUFDbkMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0ksMkJBQW9COzs7OztJQUEzQjtRQUNFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQseUJBQVE7OztJQUFSO1FBQ0UsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBRUQsdUJBQU07Ozs7O0lBQU4sVUFBTyxHQUFXLEVBQUUsT0FBd0I7UUFBeEIsd0JBQUEsRUFBQSxlQUF3Qjs7WUFDcEMsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFOztZQUVkLElBQUksR0FBVSxDQUFDLEdBQUcsQ0FBQztRQUV6QixJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7O2dCQUNqQixJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO1lBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDMUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0I7WUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJ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KipcclxuICogU2ltcGxlIGxvZ2dlciBzeXN0ZW0gd2l0aCB0aGUgcG9zc2liaWxpdHkgb2YgcmVnaXN0ZXJpbmcgY3VzdG9tIG91dHB1dHMuXHJcbiAqXHJcbiAqIDQgZGlmZmVyZW50IGxvZyBsZXZlbHMgYXJlIHByb3ZpZGVkLCB3aXRoIGNvcnJlc3BvbmRpbmcgbWV0aG9kczpcclxuICogLSBkZWJ1ZyAgIDogZm9yIGRlYnVnIGluZm9ybWF0aW9uXHJcbiAqIC0gaW5mbyAgICA6IGZvciBpbmZvcm1hdGl2ZSBzdGF0dXMgb2YgdGhlIGFwcGxpY2F0aW9uIChzdWNjZXNzLCAuLi4pXHJcbiAqIC0gd2FybmluZyA6IGZvciBub24tY3JpdGljYWwgZXJyb3JzIHRoYXQgZG8gbm90IHByZXZlbnQgbm9ybWFsIGFwcGxpY2F0aW9uIGJlaGF2aW9yXHJcbiAqIC0gZXJyb3IgICA6IGZvciBjcml0aWNhbCBlcnJvcnMgdGhhdCBwcmV2ZW50IG5vcm1hbCBhcHBsaWNhdGlvbiBiZWhhdmlvclxyXG4gKlxyXG4gKiBFeGFtcGxlIHVzYWdlOlxyXG4gKiBgYGBcclxuICogaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnYXBwL2NvcmUvbG9nZ2VyLnNlcnZpY2UnO1xyXG4gKlxyXG4gKiBjb25zdCBsb2cgPSBuZXcgTG9nZ2VyKCdteUZpbGUnKTtcclxuICogLi4uXHJcbiAqIGxvZy5kZWJ1Zygnc29tZXRoaW5nIGhhcHBlbmVkJyk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUbyBkaXNhYmxlIGRlYnVnIGFuZCBpbmZvIGxvZ3MgaW4gcHJvZHVjdGlvbiwgYWRkIHRoaXMgc25pcHBldCB0byB5b3VyIHJvb3QgY29tcG9uZW50OlxyXG4gKiBgYGBcclxuICogZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAqICAgbmdPbkluaXQoKSB7XHJcbiAqICAgICBpZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xyXG4gKiAgICAgICBMb2dnZXIuZW5hYmxlUHJvZHVjdGlvbk1vZGUoKTtcclxuICogICAgIH1cclxuICogICAgIC4uLlxyXG4gKiAgIH1cclxuICogfVxyXG4gKlxyXG4gKiBJZiB5b3Ugd2FudCB0byBwcm9jZXNzIGxvZ3MgdGhyb3VnaCBvdGhlciBvdXRwdXRzIHRoYW4gY29uc29sZSwgeW91IGNhbiBhZGQgTG9nT3V0cHV0IGZ1bmN0aW9ucyB0byBMb2dnZXIub3V0cHV0cy5cclxuICovXHJcblxyXG4vKipcclxuICogVGhlIHBvc3NpYmxlIGxvZyBsZXZlbHMuXHJcbiAqIExvZ0xldmVsLk9mZiBpcyBuZXZlciBlbWl0dGVkIGFuZCBvbmx5IHVzZWQgd2l0aCBMb2dnZXIubGV2ZWwgcHJvcGVydHkgdG8gZGlzYWJsZSBsb2dzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xyXG4gIE9mZiA9IDAsXHJcbiAgRXJyb3IsXHJcbiAgV2FybmluZyxcclxuICBJbmZvLFxyXG4gIERlYnVnXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMb2cgb3V0cHV0IGhhbmRsZXIgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBMb2dPdXRwdXQgPSAoc291cmNlOiBzdHJpbmcsIGxldmVsOiBMb2dMZXZlbCwgLi4ub2JqZWN0czogYW55W10pID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3VycmVudCBsb2dnaW5nIGxldmVsLlxyXG4gICAqIFNldCBpdCB0byBMb2dMZXZlbC5PZmYgdG8gZGlzYWJsZSBsb2dzIGNvbXBsZXRlbHkuXHJcbiAgICovXHJcbiAgc3RhdGljIGxldmVsID0gTG9nTGV2ZWwuRGVidWc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgbG9nIG91dHB1dHMuXHJcbiAgICovXHJcbiAgc3RhdGljIG91dHB1dHM6IExvZ091dHB1dFtdID0gW107XHJcblxyXG4gIHN0YXRpYyBwcmV2aW91c1RpbWU6IERhdGUgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIHN1bVRpbWluZzogYW55ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc291cmNlPzogc3RyaW5nKSB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbmFibGVzIHByb2R1Y3Rpb24gbW9kZS5cclxuICAgKiBTZXRzIGxvZ2dpbmcgbGV2ZWwgdG8gTG9nTGV2ZWwuV2FybmluZy5cclxuICAgKi9cclxuICBzdGF0aWMgZW5hYmxlUHJvZHVjdGlvbk1vZGUoKSB7XHJcbiAgICBMb2dnZXIubGV2ZWwgPSBMb2dMZXZlbC5XYXJuaW5nO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRTdW0oKSB7XHJcbiAgICBMb2dnZXIuc3VtVGltaW5nID0ge307XHJcbiAgfVxyXG5cclxuICB0aW1pbmcodGFnOiBzdHJpbmcsIGRpc3BsYXk6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgY29uc3QgbG9nczogYW55W10gPSBbdGFnXTtcclxuXHJcbiAgICBpZiAoTG9nZ2VyLnByZXZpb3VzVGltZSkge1xyXG4gICAgICBjb25zdCBkaWZmID0gZC5nZXRUaW1lKCkgLSBMb2dnZXIucHJldmlvdXNUaW1lLmdldFRpbWUoKTtcclxuICAgICAgbG9ncy51bnNoaWZ0KCdbJyArIGRpZmYgKyAnXScpO1xyXG4gICAgICBpZiAoIUxvZ2dlci5zdW1UaW1pbmdbdGFnXSkge1xyXG4gICAgICAgIExvZ2dlci5zdW1UaW1pbmdbdGFnXSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgTG9nZ2VyLnN1bVRpbWluZ1t0YWddICs9IGRpZmY7XHJcbiAgICB9XHJcbiAgICBMb2dnZXIucHJldmlvdXNUaW1lID0gZDtcclxuICAgIGxvZ3MudW5zaGlmdChkLmdldFNlY29uZHMoKSArICcuJyArIGQuZ2V0TWlsbGlzZWNvbmRzKCkpO1xyXG4gICAgaWYgKGRpc3BsYXkpIHtcclxuICAgICAgdGhpcy5sb2coY29uc29sZS5sb2csIExvZ0xldmVsLkluZm8sIGxvZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBMb2dzIG1lc3NhZ2VzIG9yIG9iamVjdHMgIHdpdGggdGhlIGRlYnVnIGxldmVsLlxyXG4gICAqIFdvcmtzIHRoZSBzYW1lIGFzIGNvbnNvbGUubG9nKCkuXHJcbiAgICovXHJcbiAgZGVidWcoLi4ub2JqZWN0czogYW55W10pIHtcclxuICAgIHRoaXMubG9nKGNvbnNvbGUubG9nLCBMb2dMZXZlbC5EZWJ1Zywgb2JqZWN0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2dzIG1lc3NhZ2VzIG9yIG9iamVjdHMgIHdpdGggdGhlIGluZm8gbGV2ZWwuXHJcbiAgICogV29ya3MgdGhlIHNhbWUgYXMgY29uc29sZS5sb2coKS5cclxuICAgKi9cclxuICBpbmZvKC4uLm9iamVjdHM6IGFueVtdKSB7XHJcbiAgICB0aGlzLmxvZyhjb25zb2xlLmluZm8sIExvZ0xldmVsLkluZm8sIG9iamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9ncyBtZXNzYWdlcyBvciBvYmplY3RzICB3aXRoIHRoZSB3YXJuaW5nIGxldmVsLlxyXG4gICAqIFdvcmtzIHRoZSBzYW1lIGFzIGNvbnNvbGUubG9nKCkuXHJcbiAgICovXHJcbiAgd2FybiguLi5vYmplY3RzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5sb2coY29uc29sZS53YXJuLCBMb2dMZXZlbC5XYXJuaW5nLCBvYmplY3RzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ3MgbWVzc2FnZXMgb3Igb2JqZWN0cyAgd2l0aCB0aGUgZXJyb3IgbGV2ZWwuXHJcbiAgICogV29ya3MgdGhlIHNhbWUgYXMgY29uc29sZS5sb2coKS5cclxuICAgKi9cclxuICBlcnJvciguLi5vYmplY3RzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5sb2coY29uc29sZS5lcnJvciwgTG9nTGV2ZWwuRXJyb3IsIG9iamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2coZnVuYzogRnVuY3Rpb24sIGxldmVsOiBMb2dMZXZlbCwgb2JqZWN0czogYW55W10pIHtcclxuICAgIGlmIChsZXZlbCA8PSBMb2dnZXIubGV2ZWwpIHtcclxuICAgICAgY29uc3QgbG9nID0gdGhpcy5zb3VyY2UgPyBbJ1snICsgdGhpcy5zb3VyY2UgKyAnXSddLmNvbmNhdChvYmplY3RzKSA6IG9iamVjdHM7XHJcbiAgICAgIGZ1bmMuYXBwbHkoY29uc29sZSwgbG9nKTtcclxuICAgICAgTG9nZ2VyLm91dHB1dHMuZm9yRWFjaCgob3V0cHV0KSA9PiBvdXRwdXQuYXBwbHkob3V0cHV0LCBbdGhpcy5zb3VyY2UsIGxldmVsXS5jb25jYXQob2JqZWN0cykpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==