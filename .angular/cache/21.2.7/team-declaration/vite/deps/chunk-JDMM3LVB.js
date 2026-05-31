import {
  isInteger,
  isNumber,
  padNumber,
  toInteger
} from "./chunk-T3UYF4PN.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-FMMPXMIC.js";
import {
  formatDate
} from "./chunk-TRMZSHJ7.js";
import {
  ChangeDetectorRef,
  Component,
  Injectable,
  Input,
  LOCALE_ID,
  NgModule,
  ViewEncapsulation,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementContainerEnd,
  ɵɵdomElementContainerStart,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵi18n,
  ɵɵi18nApply,
  ɵɵi18nExp,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RCRTD27T.js";

// node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-timepicker.mjs
function NgbTimepicker_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 15);
    ɵɵdomListener("click", function NgbTimepicker_Conditional_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeHour(ctx_r1.hourStep));
    });
    ɵɵdomElement(1, "span", 16);
    ɵɵdomElementStart(2, "span", 17);
    ɵɵi18n(3, 0);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    ɵɵdomProperty("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 15);
    ɵɵdomListener("click", function NgbTimepicker_Conditional_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeHour(-ctx_r1.hourStep));
    });
    ɵɵdomElement(1, "span", 18);
    ɵɵdomElementStart(2, "span", 17);
    ɵɵi18n(3, 1);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    ɵɵdomProperty("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 15);
    ɵɵdomListener("click", function NgbTimepicker_Conditional_9_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeMinute(ctx_r1.minuteStep));
    });
    ɵɵdomElement(1, "span", 16);
    ɵɵdomElementStart(2, "span", 17);
    ɵɵi18n(3, 2);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    ɵɵdomProperty("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 15);
    ɵɵdomListener("click", function NgbTimepicker_Conditional_11_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeMinute(-ctx_r1.minuteStep));
    });
    ɵɵdomElement(1, "span", 18);
    ɵɵdomElementStart(2, "span", 17);
    ɵɵi18n(3, 3);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    ɵɵdomProperty("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 15);
    ɵɵdomListener("click", function NgbTimepicker_Conditional_12_Conditional_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.changeSecond(ctx_r1.secondStep));
    });
    ɵɵdomElement(1, "span", 16);
    ɵɵdomElementStart(2, "span", 17);
    ɵɵi18n(3, 4);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    ɵɵdomProperty("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 15);
    ɵɵdomListener("click", function NgbTimepicker_Conditional_12_Conditional_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.changeSecond(-ctx_r1.secondStep));
    });
    ɵɵdomElement(1, "span", 18);
    ɵɵdomElementStart(2, "span", 17);
    ɵɵi18n(3, 5);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    ɵɵdomProperty("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "div", 12);
    ɵɵtext(1, ":");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(2, "div", 19);
    ɵɵconditionalCreate(3, NgbTimepicker_Conditional_12_Conditional_3_Template, 4, 7, "button", 10);
    ɵɵdomElementStart(4, "input", 20);
    ɵɵdomListener("change", function NgbTimepicker_Conditional_12_Template_input_change_4_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateSecond($event.target.value));
    })("blur", function NgbTimepicker_Conditional_12_Template_input_blur_4_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleBlur());
    })("input", function NgbTimepicker_Conditional_12_Template_input_input_4_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.formatInput($event.target));
    })("keydown.ArrowUp", function NgbTimepicker_Conditional_12_Template_input_keydown_ArrowUp_4_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.changeSecond(ctx_r1.secondStep);
      return ɵɵresetView($event.preventDefault());
    })("keydown.ArrowDown", function NgbTimepicker_Conditional_12_Template_input_keydown_ArrowDown_4_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.changeSecond(-ctx_r1.secondStep);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵdomElementEnd();
    ɵɵconditionalCreate(5, NgbTimepicker_Conditional_12_Conditional_5_Template, 4, 7, "button", 10);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵconditional(ctx_r1.spinners ? 3 : -1);
    ɵɵadvance();
    ɵɵclassProp("form-control-sm", ctx_r1.isSmallSize)("form-control-lg", ctx_r1.isLargeSize);
    ɵɵdomProperty("value", ctx_r1.formatMinSec(ctx_r1.model == null ? null : ctx_r1.model.second))("readOnly", ctx_r1.readonlyInputs)("disabled", ctx_r1.disabled);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.spinners ? 5 : -1);
  }
}
function NgbTimepicker_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementContainerStart(0);
    ɵɵi18n(1, 6);
    ɵɵdomElementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵi18nExp(ctx_r1.i18n.getAfternoonPeriod());
    ɵɵi18nApply(1);
  }
}
function NgbTimepicker_Conditional_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementContainerStart(0);
    ɵɵtext(1);
    ɵɵdomElementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.i18n.getMorningPeriod());
  }
}
function NgbTimepicker_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵdomElement(0, "div", 12);
    ɵɵdomElementStart(1, "div", 21)(2, "button", 22);
    ɵɵdomListener("click", function NgbTimepicker_Conditional_13_Template_button_click_2_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleMeridian());
    });
    ɵɵconditionalCreate(3, NgbTimepicker_Conditional_13_Conditional_3_Template, 2, 1, "ng-container")(4, NgbTimepicker_Conditional_13_Conditional_4_Template, 2, 1, "ng-container");
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵclassProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    ɵɵdomProperty("disabled", ctx_r1.disabled);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.model && ctx_r1.model.hour >= 12 ? 3 : 4);
  }
}
var NgbTime = class {
  constructor(hour, minute, second) {
    this.hour = toInteger(hour);
    this.minute = toInteger(minute);
    this.second = toInteger(second);
  }
  changeHour(step = 1) {
    this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
  }
  updateHour(hour) {
    if (isNumber(hour)) {
      this.hour = (hour < 0 ? 24 + hour : hour) % 24;
    } else {
      this.hour = NaN;
    }
  }
  changeMinute(step = 1) {
    this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
  }
  updateMinute(minute) {
    if (isNumber(minute)) {
      this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
      this.changeHour(Math.floor(minute / 60));
    } else {
      this.minute = NaN;
    }
  }
  changeSecond(step = 1) {
    this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
  }
  updateSecond(second) {
    if (isNumber(second)) {
      this.second = second < 0 ? 60 + second % 60 : second % 60;
      this.changeMinute(Math.floor(second / 60));
    } else {
      this.second = NaN;
    }
  }
  isValid(checkSecs = true) {
    return isNumber(this.hour) && isNumber(this.minute) && (checkSecs ? isNumber(this.second) : true);
  }
  toString() {
    return `${this.hour || 0}:${this.minute || 0}:${this.second || 0}`;
  }
};
var NgbTimepickerConfig = class _NgbTimepickerConfig {
  constructor() {
    this.meridian = false;
    this.spinners = true;
    this.seconds = false;
    this.hourStep = 1;
    this.minuteStep = 1;
    this.secondStep = 1;
    this.disabled = false;
    this.readonlyInputs = false;
    this.size = "medium";
  }
  static {
    this.ɵfac = function NgbTimepickerConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTimepickerConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbTimepickerConfig,
      factory: _NgbTimepickerConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function NGB_DATEPICKER_TIME_ADAPTER_FACTORY() {
  return new NgbTimeStructAdapter();
}
var NgbTimeAdapter = class _NgbTimeAdapter {
  static {
    this.ɵfac = function NgbTimeAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTimeAdapter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbTimeAdapter,
      factory: () => NGB_DATEPICKER_TIME_ADAPTER_FACTORY(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimeAdapter, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY
    }]
  }], null, null);
})();
var NgbTimeStructAdapter = class _NgbTimeStructAdapter extends NgbTimeAdapter {
  /**
   * Converts a NgbTimeStruct value into NgbTimeStruct value
   */
  fromModel(time) {
    return time && isInteger(time.hour) && isInteger(time.minute) ? {
      hour: time.hour,
      minute: time.minute,
      second: isInteger(time.second) ? time.second : null
    } : null;
  }
  /**
   * Converts a NgbTimeStruct value into NgbTimeStruct value
   */
  toModel(time) {
    return time && isInteger(time.hour) && isInteger(time.minute) ? {
      hour: time.hour,
      minute: time.minute,
      second: isInteger(time.second) ? time.second : null
    } : null;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbTimeStructAdapter_BaseFactory;
      return function NgbTimeStructAdapter_Factory(__ngFactoryType__) {
        return (ɵNgbTimeStructAdapter_BaseFactory || (ɵNgbTimeStructAdapter_BaseFactory = ɵɵgetInheritedFactory(_NgbTimeStructAdapter)))(__ngFactoryType__ || _NgbTimeStructAdapter);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbTimeStructAdapter,
      factory: _NgbTimeStructAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimeStructAdapter, [{
    type: Injectable
  }], null, null);
})();
var NgbTimepickerI18n = class _NgbTimepickerI18n {
  static {
    this.ɵfac = function NgbTimepickerI18n_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTimepickerI18n)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbTimepickerI18n,
      factory: () => (() => new NgbTimepickerI18nDefault())(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimepickerI18n, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new NgbTimepickerI18nDefault()
    }]
  }], null, null);
})();
var NgbTimepickerI18nDefault = class _NgbTimepickerI18nDefault extends NgbTimepickerI18n {
  constructor() {
    super(...arguments);
    this._locale = inject(LOCALE_ID);
    this._periods = [formatDate(/* @__PURE__ */ new Date(36e5), "a", this._locale, "UTC"), formatDate(new Date(36e5 * 13), "a", this._locale, "UTC")];
  }
  getMorningPeriod() {
    return this._periods[0];
  }
  getAfternoonPeriod() {
    return this._periods[1];
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbTimepickerI18nDefault_BaseFactory;
      return function NgbTimepickerI18nDefault_Factory(__ngFactoryType__) {
        return (ɵNgbTimepickerI18nDefault_BaseFactory || (ɵNgbTimepickerI18nDefault_BaseFactory = ɵɵgetInheritedFactory(_NgbTimepickerI18nDefault)))(__ngFactoryType__ || _NgbTimepickerI18nDefault);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbTimepickerI18nDefault,
      factory: _NgbTimepickerI18nDefault.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimepickerI18nDefault, [{
    type: Injectable
  }], null, null);
})();
var FILTER_REGEX = /[^0-9]/g;
var NgbTimepicker = class _NgbTimepicker {
  /**
   * The number of hours to add/subtract when clicking hour spinners.
   */
  set hourStep(step) {
    this._hourStep = isInteger(step) ? step : this._config.hourStep;
  }
  get hourStep() {
    return this._hourStep;
  }
  /**
   * The number of minutes to add/subtract when clicking minute spinners.
   */
  set minuteStep(step) {
    this._minuteStep = isInteger(step) ? step : this._config.minuteStep;
  }
  get minuteStep() {
    return this._minuteStep;
  }
  /**
   * The number of seconds to add/subtract when clicking second spinners.
   */
  set secondStep(step) {
    this._secondStep = isInteger(step) ? step : this._config.secondStep;
  }
  get secondStep() {
    return this._secondStep;
  }
  constructor(_config, _ngbTimeAdapter, _cd, i18n) {
    this._config = _config;
    this._ngbTimeAdapter = _ngbTimeAdapter;
    this._cd = _cd;
    this.i18n = i18n;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
    this.meridian = _config.meridian;
    this.spinners = _config.spinners;
    this.seconds = _config.seconds;
    this.hourStep = _config.hourStep;
    this.minuteStep = _config.minuteStep;
    this.secondStep = _config.secondStep;
    this.disabled = _config.disabled;
    this.readonlyInputs = _config.readonlyInputs;
    this.size = _config.size;
  }
  writeValue(value) {
    const structValue = this._ngbTimeAdapter.fromModel(value);
    this.model = structValue ? new NgbTime(structValue.hour, structValue.minute, structValue.second) : new NgbTime();
    if (!this.seconds && (!structValue || !isNumber(structValue.second))) {
      this.model.second = 0;
    }
    this._cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /**
   * Increments the hours by the given step.
   */
  changeHour(step) {
    this.model?.changeHour(step);
    this.propagateModelChange();
  }
  /**
   * Increments the minutes by the given step.
   */
  changeMinute(step) {
    this.model?.changeMinute(step);
    this.propagateModelChange();
  }
  /**
   * Increments the seconds by the given step.
   */
  changeSecond(step) {
    this.model?.changeSecond(step);
    this.propagateModelChange();
  }
  /**
   * Update hours with the new value.
   */
  updateHour(newVal) {
    const isPM = this.model ? this.model.hour >= 12 : false;
    const enteredHour = toInteger(newVal);
    if (this.meridian && (isPM && enteredHour < 12 || !isPM && enteredHour === 12)) {
      this.model?.updateHour(enteredHour + 12);
    } else {
      this.model?.updateHour(enteredHour);
    }
    this.propagateModelChange();
  }
  /**
   * Update minutes with the new value.
   */
  updateMinute(newVal) {
    this.model?.updateMinute(toInteger(newVal));
    this.propagateModelChange();
  }
  /**
   * Update seconds with the new value.
   */
  updateSecond(newVal) {
    this.model?.updateSecond(toInteger(newVal));
    this.propagateModelChange();
  }
  toggleMeridian() {
    if (this.model && isNumber(this.model.hour) && this.meridian) {
      this.changeHour(12);
    }
  }
  formatInput(input) {
    input.value = input.value.replace(FILTER_REGEX, "");
  }
  formatHour(value) {
    if (isNumber(value)) {
      if (this.meridian) {
        return padNumber(value % 12 === 0 ? 12 : value % 12);
      } else {
        return padNumber(value % 24);
      }
    } else {
      return padNumber(NaN);
    }
  }
  formatMinSec(value) {
    return padNumber(isNumber(value) ? value : NaN);
  }
  handleBlur() {
    this.onTouched();
  }
  get isSmallSize() {
    return this.size === "small";
  }
  get isLargeSize() {
    return this.size === "large";
  }
  ngOnChanges(changes) {
    if (changes["seconds"] && !this.seconds && this.model && !isNumber(this.model.second)) {
      this.model.second = 0;
      this.propagateModelChange(false);
    }
  }
  propagateModelChange(touched = true) {
    if (touched) {
      this.onTouched();
    }
    if (this.model?.isValid(this.seconds)) {
      this.onChange(this._ngbTimeAdapter.toModel({
        hour: this.model.hour,
        minute: this.model.minute,
        second: this.model.second
      }));
    } else {
      this.onChange(this._ngbTimeAdapter.toModel(null));
    }
  }
  static {
    this.ɵfac = function NgbTimepicker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTimepicker)(ɵɵdirectiveInject(NgbTimepickerConfig), ɵɵdirectiveInject(NgbTimeAdapter), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgbTimepickerI18n));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbTimepicker,
      selectors: [["ngb-timepicker"]],
      inputs: {
        meridian: "meridian",
        spinners: "spinners",
        seconds: "seconds",
        hourStep: "hourStep",
        minuteStep: "minuteStep",
        secondStep: "secondStep",
        readonlyInputs: "readonlyInputs",
        size: "size"
      },
      exportAs: ["ngbTimepicker"],
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgbTimepicker),
        multi: true
      }]), ɵɵNgOnChangesFeature],
      decls: 14,
      vars: 23,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_0 = goog.getMsg("HH");
          i18n_0 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_0;
        } else {
          i18n_0 = $localize`:@@ngb.timepicker.HH:HH`;
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_1 = goog.getMsg("Hours");
          i18n_1 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_1;
        } else {
          i18n_1 = $localize`:@@ngb.timepicker.hours:Hours`;
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_2 = goog.getMsg("MM");
          i18n_2 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_2;
        } else {
          i18n_2 = $localize`:@@ngb.timepicker.MM:MM`;
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_3 = goog.getMsg("Minutes");
          i18n_3 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_3;
        } else {
          i18n_3 = $localize`:@@ngb.timepicker.minutes:Minutes`;
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_4 = goog.getMsg("Increment hours");
          i18n_4 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_4;
        } else {
          i18n_4 = $localize`:@@ngb.timepicker.increment-hours:Increment hours`;
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_5 = goog.getMsg("Decrement hours");
          i18n_5 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_5;
        } else {
          i18n_5 = $localize`:@@ngb.timepicker.decrement-hours:Decrement hours`;
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_6 = goog.getMsg("Increment minutes");
          i18n_6 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_6;
        } else {
          i18n_6 = $localize`:@@ngb.timepicker.increment-minutes:Increment minutes`;
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_7 = goog.getMsg("Decrement minutes");
          i18n_7 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_7;
        } else {
          i18n_7 = $localize`:@@ngb.timepicker.decrement-minutes:Decrement minutes`;
        }
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_8 = goog.getMsg("SS");
          i18n_8 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_8;
        } else {
          i18n_8 = $localize`:@@ngb.timepicker.SS:SS`;
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_9 = goog.getMsg("Seconds");
          i18n_9 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_9;
        } else {
          i18n_9 = $localize`:@@ngb.timepicker.seconds:Seconds`;
        }
        let i18n_10;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_10 = goog.getMsg("Increment seconds");
          i18n_10 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_10;
        } else {
          i18n_10 = $localize`:@@ngb.timepicker.increment-seconds:Increment seconds`;
        }
        let i18n_11;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_11 = goog.getMsg("Decrement seconds");
          i18n_11 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_11;
        } else {
          i18n_11 = $localize`:@@ngb.timepicker.decrement-seconds:Decrement seconds`;
        }
        let i18n_12;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_12 = goog.getMsg("{$interpolation}", {
            "interpolation": "�0�"
          }, {
            original_code: {
              "interpolation": "{{ i18n.getAfternoonPeriod() }}"
            }
          });
          i18n_12 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TIMEPICKER_MJS_12;
        } else {
          i18n_12 = $localize`:@@ngb.timepicker.PM:${"�0�"}:INTERPOLATION:`;
        }
        return [i18n_4, i18n_5, i18n_6, i18n_7, i18n_10, i18n_11, i18n_12, [3, "disabled"], [1, "ngb-tp"], [1, "ngb-tp-input-container", "ngb-tp-hour"], ["tabindex", "-1", "type", "button", 1, "btn", "btn-link", 3, "btn-sm", "btn-lg", "disabled"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_0, "aria-label", i18n_1, 1, "ngb-tp-input", "form-control", 3, "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown", "value", "readOnly", "disabled"], [1, "ngb-tp-spacer"], [1, "ngb-tp-input-container", "ngb-tp-minute"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_2, "aria-label", i18n_3, 1, "ngb-tp-input", "form-control", 3, "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown", "value", "readOnly", "disabled"], ["tabindex", "-1", "type", "button", 1, "btn", "btn-link", 3, "click", "disabled"], [1, "chevron", "ngb-tp-chevron"], [1, "visually-hidden"], [1, "chevron", "ngb-tp-chevron", "bottom"], [1, "ngb-tp-input-container", "ngb-tp-second"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_8, "aria-label", i18n_9, 1, "ngb-tp-input", "form-control", 3, "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown", "value", "readOnly", "disabled"], [1, "ngb-tp-meridian"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"]];
      },
      template: function NgbTimepicker_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElementStart(0, "fieldset", 7)(1, "div", 8)(2, "div", 9);
          ɵɵconditionalCreate(3, NgbTimepicker_Conditional_3_Template, 4, 7, "button", 10);
          ɵɵdomElementStart(4, "input", 11);
          ɵɵdomListener("change", function NgbTimepicker_Template_input_change_4_listener($event) {
            return ctx.updateHour($event.target.value);
          })("blur", function NgbTimepicker_Template_input_blur_4_listener() {
            return ctx.handleBlur();
          })("input", function NgbTimepicker_Template_input_input_4_listener($event) {
            return ctx.formatInput($event.target);
          })("keydown.ArrowUp", function NgbTimepicker_Template_input_keydown_ArrowUp_4_listener($event) {
            ctx.changeHour(ctx.hourStep);
            return $event.preventDefault();
          })("keydown.ArrowDown", function NgbTimepicker_Template_input_keydown_ArrowDown_4_listener($event) {
            ctx.changeHour(-ctx.hourStep);
            return $event.preventDefault();
          });
          ɵɵdomElementEnd();
          ɵɵconditionalCreate(5, NgbTimepicker_Conditional_5_Template, 4, 7, "button", 10);
          ɵɵdomElementEnd();
          ɵɵdomElementStart(6, "div", 12);
          ɵɵtext(7, ":");
          ɵɵdomElementEnd();
          ɵɵdomElementStart(8, "div", 13);
          ɵɵconditionalCreate(9, NgbTimepicker_Conditional_9_Template, 4, 7, "button", 10);
          ɵɵdomElementStart(10, "input", 14);
          ɵɵdomListener("change", function NgbTimepicker_Template_input_change_10_listener($event) {
            return ctx.updateMinute($event.target.value);
          })("blur", function NgbTimepicker_Template_input_blur_10_listener() {
            return ctx.handleBlur();
          })("input", function NgbTimepicker_Template_input_input_10_listener($event) {
            return ctx.formatInput($event.target);
          })("keydown.ArrowUp", function NgbTimepicker_Template_input_keydown_ArrowUp_10_listener($event) {
            ctx.changeMinute(ctx.minuteStep);
            return $event.preventDefault();
          })("keydown.ArrowDown", function NgbTimepicker_Template_input_keydown_ArrowDown_10_listener($event) {
            ctx.changeMinute(-ctx.minuteStep);
            return $event.preventDefault();
          });
          ɵɵdomElementEnd();
          ɵɵconditionalCreate(11, NgbTimepicker_Conditional_11_Template, 4, 7, "button", 10);
          ɵɵdomElementEnd();
          ɵɵconditionalCreate(12, NgbTimepicker_Conditional_12_Template, 6, 9);
          ɵɵconditionalCreate(13, NgbTimepicker_Conditional_13_Template, 5, 8);
          ɵɵdomElementEnd()();
        }
        if (rf & 2) {
          ɵɵclassProp("disabled", ctx.disabled);
          ɵɵdomProperty("disabled", ctx.disabled);
          ɵɵadvance(3);
          ɵɵconditional(ctx.spinners ? 3 : -1);
          ɵɵadvance();
          ɵɵclassProp("form-control-sm", ctx.isSmallSize)("form-control-lg", ctx.isLargeSize);
          ɵɵdomProperty("value", ctx.formatHour(ctx.model == null ? null : ctx.model.hour))("readOnly", ctx.readonlyInputs)("disabled", ctx.disabled);
          ɵɵadvance();
          ɵɵconditional(ctx.spinners ? 5 : -1);
          ɵɵadvance(4);
          ɵɵconditional(ctx.spinners ? 9 : -1);
          ɵɵadvance();
          ɵɵclassProp("form-control-sm", ctx.isSmallSize)("form-control-lg", ctx.isLargeSize);
          ɵɵdomProperty("value", ctx.formatMinSec(ctx.model == null ? null : ctx.model.minute))("readOnly", ctx.readonlyInputs)("disabled", ctx.disabled);
          ɵɵadvance();
          ɵɵconditional(ctx.spinners ? 11 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.seconds ? 12 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.meridian ? 13 : -1);
        }
      },
      styles: ['ngb-timepicker{font-size:1rem}.ngb-tp{display:flex;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron:before{border-style:solid;border-width:.29em .29em 0 0;content:"";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-minute,.ngb-tp-second,.ngb-tp-meridian{display:flex;flex-direction:column;align-items:center;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimepicker, [{
    type: Component,
    args: [{
      exportAs: "ngbTimepicker",
      selector: "ngb-timepicker",
      encapsulation: ViewEncapsulation.None,
      template: `
		<fieldset [disabled]="disabled" [class.disabled]="disabled">
			<div class="ngb-tp">
				<div class="ngb-tp-input-container ngb-tp-hour">
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeHour(hourStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.increment-hours">Increment hours</span>
						</button>
					}
					<input
						type="text"
						class="ngb-tp-input form-control"
						[class.form-control-sm]="isSmallSize"
						[class.form-control-lg]="isLargeSize"
						maxlength="2"
						inputmode="numeric"
						placeholder="HH"
						i18n-placeholder="@@ngb.timepicker.HH"
						[value]="formatHour(model?.hour)"
						(change)="updateHour($any($event).target.value)"
						[readOnly]="readonlyInputs"
						[disabled]="disabled"
						aria-label="Hours"
						i18n-aria-label="@@ngb.timepicker.hours"
						(blur)="handleBlur()"
						(input)="formatInput($any($event).target)"
						(keydown.ArrowUp)="changeHour(hourStep); $event.preventDefault()"
						(keydown.ArrowDown)="changeHour(-hourStep); $event.preventDefault()"
					/>
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeHour(-hourStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron bottom"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-hours">Decrement hours</span>
						</button>
					}
				</div>
				<div class="ngb-tp-spacer">:</div>
				<div class="ngb-tp-input-container ngb-tp-minute">
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeMinute(minuteStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.increment-minutes">Increment minutes</span>
						</button>
					}
					<input
						type="text"
						class="ngb-tp-input form-control"
						[class.form-control-sm]="isSmallSize"
						[class.form-control-lg]="isLargeSize"
						maxlength="2"
						inputmode="numeric"
						placeholder="MM"
						i18n-placeholder="@@ngb.timepicker.MM"
						[value]="formatMinSec(model?.minute)"
						(change)="updateMinute($any($event).target.value)"
						[readOnly]="readonlyInputs"
						[disabled]="disabled"
						aria-label="Minutes"
						i18n-aria-label="@@ngb.timepicker.minutes"
						(blur)="handleBlur()"
						(input)="formatInput($any($event).target)"
						(keydown.ArrowUp)="changeMinute(minuteStep); $event.preventDefault()"
						(keydown.ArrowDown)="changeMinute(-minuteStep); $event.preventDefault()"
					/>
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeMinute(-minuteStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron bottom"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-minutes">Decrement minutes</span>
						</button>
					}
				</div>
				@if (seconds) {
					<div class="ngb-tp-spacer">:</div>
					<div class="ngb-tp-input-container ngb-tp-second">
						@if (spinners) {
							<button
								tabindex="-1"
								type="button"
								(click)="changeSecond(secondStep)"
								class="btn btn-link"
								[class.btn-sm]="isSmallSize"
								[class.btn-lg]="isLargeSize"
								[class.disabled]="disabled"
								[disabled]="disabled"
							>
								<span class="chevron ngb-tp-chevron"></span>
								<span class="visually-hidden" i18n="@@ngb.timepicker.increment-seconds">Increment seconds</span>
							</button>
						}
						<input
							type="text"
							class="ngb-tp-input form-control"
							[class.form-control-sm]="isSmallSize"
							[class.form-control-lg]="isLargeSize"
							maxlength="2"
							inputmode="numeric"
							placeholder="SS"
							i18n-placeholder="@@ngb.timepicker.SS"
							[value]="formatMinSec(model?.second)"
							(change)="updateSecond($any($event).target.value)"
							[readOnly]="readonlyInputs"
							[disabled]="disabled"
							aria-label="Seconds"
							i18n-aria-label="@@ngb.timepicker.seconds"
							(blur)="handleBlur()"
							(input)="formatInput($any($event).target)"
							(keydown.ArrowUp)="changeSecond(secondStep); $event.preventDefault()"
							(keydown.ArrowDown)="changeSecond(-secondStep); $event.preventDefault()"
						/>
						@if (spinners) {
							<button
								tabindex="-1"
								type="button"
								(click)="changeSecond(-secondStep)"
								class="btn btn-link"
								[class.btn-sm]="isSmallSize"
								[class.btn-lg]="isLargeSize"
								[class.disabled]="disabled"
								[disabled]="disabled"
							>
								<span class="chevron ngb-tp-chevron bottom"></span>
								<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-seconds">Decrement seconds</span>
							</button>
						}
					</div>
				}
				@if (meridian) {
					<div class="ngb-tp-spacer"></div>
					<div class="ngb-tp-meridian">
						<button
							type="button"
							class="btn btn-outline-primary"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[disabled]="disabled"
							[class.disabled]="disabled"
							(click)="toggleMeridian()"
						>
							@if (model && model.hour >= 12) {
								<ng-container i18n="@@ngb.timepicker.PM">{{ i18n.getAfternoonPeriod() }}</ng-container>
							} @else {
								<ng-container>{{ i18n.getMorningPeriod() }}</ng-container>
							}
						</button>
					</div>
				}
			</div>
		</fieldset>
	`,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgbTimepicker),
        multi: true
      }],
      styles: ['ngb-timepicker{font-size:1rem}.ngb-tp{display:flex;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron:before{border-style:solid;border-width:.29em .29em 0 0;content:"";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-minute,.ngb-tp-second,.ngb-tp-meridian{display:flex;flex-direction:column;align-items:center;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}\n']
    }]
  }], () => [{
    type: NgbTimepickerConfig
  }, {
    type: NgbTimeAdapter
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgbTimepickerI18n
  }], {
    meridian: [{
      type: Input
    }],
    spinners: [{
      type: Input
    }],
    seconds: [{
      type: Input
    }],
    hourStep: [{
      type: Input
    }],
    minuteStep: [{
      type: Input
    }],
    secondStep: [{
      type: Input
    }],
    readonlyInputs: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var NgbTimepickerModule = class _NgbTimepickerModule {
  static {
    this.ɵfac = function NgbTimepickerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTimepickerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbTimepickerModule,
      imports: [NgbTimepicker],
      exports: [NgbTimepicker]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimepickerModule, [{
    type: NgModule,
    args: [{
      imports: [NgbTimepicker],
      exports: [NgbTimepicker]
    }]
  }], null, null);
})();

export {
  NgbTimepickerConfig,
  NgbTimeAdapter,
  NgbTimepickerI18n,
  NgbTimepicker,
  NgbTimepickerModule
};
//# sourceMappingURL=chunk-JDMM3LVB.js.map
