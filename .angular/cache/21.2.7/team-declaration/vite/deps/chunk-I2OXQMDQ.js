import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from "./chunk-M4FT3XAX.js";
import {
  takeUntilDestroyed
} from "./chunk-MGCNT23V.js";
import {
  NgTemplateOutlet,
  formatDate
} from "./chunk-WGIH4H76.js";
import {
  addPopperOffset,
  isInteger,
  isNumber,
  isString,
  ngbAutoClose,
  ngbFocusTrap,
  ngbPositioning,
  padNumber,
  toInteger
} from "./chunk-T3UYF4PN.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  LOCALE_ID,
  NgModule,
  NgZone,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  afterEveryRender,
  afterNextRender,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-RCRTD27T.js";
import {
  fromEvent,
  merge
} from "./chunk-QDTSZMXX.js";
import {
  Subject,
  __spreadProps,
  __spreadValues,
  filter
} from "./chunk-6P4RME4L.js";

// node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-datepicker.mjs
var _c0 = ["ngbDatepickerDayView", ""];
var _c1 = ["month"];
var _c2 = ["year"];
function NgbDatepickerNavigationSelect_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "option", 3);
    ɵɵtext(1);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵdomProperty("value", m_r1);
    ɵɵattribute("aria-label", ctx_r1.i18n.getMonthFullName(m_r1, ctx_r1.date.year));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.i18n.getMonthShortName(m_r1, ctx_r1.date.year));
  }
}
function NgbDatepickerNavigationSelect_For_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "option", 3);
    ɵɵtext(1);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const y_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵdomProperty("value", y_r3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.i18n.getYearNumerals(y_r3));
  }
}
function _forTrack0($index, $item) {
  return this.idMonth($item);
}
function NgbDatepickerNavigation_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngb-datepicker-navigation-select", 7);
    ɵɵlistener("select", function NgbDatepickerNavigation_Conditional_3_Template_ngb_datepicker_navigation_select_select_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.select.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("date", ctx_r1.date)("disabled", ctx_r1.disabled)("months", ctx_r1.selectBoxes.months)("years", ctx_r1.selectBoxes.years);
  }
}
function NgbDatepickerNavigation_Conditional_4_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 8);
  }
}
function NgbDatepickerNavigation_Conditional_4_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 8);
  }
}
function NgbDatepickerNavigation_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, NgbDatepickerNavigation_Conditional_4_For_1_Conditional_0_Template, 1, 0, "div", 8);
    ɵɵelementStart(1, "div", 9);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵconditionalCreate(3, NgbDatepickerNavigation_Conditional_4_For_1_Conditional_3_Template, 1, 0, "div", 8);
  }
  if (rf & 2) {
    const month_r3 = ctx.$implicit;
    const ɵ$index_11_r4 = ctx.$index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional(ɵ$index_11_r4 > 0 ? 0 : -1);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.i18n.getMonthLabel(month_r3.firstDate), " ");
    ɵɵadvance();
    ɵɵconditional(ɵ$index_11_r4 !== ctx_r1.months.length - 1 ? 3 : -1);
  }
}
function NgbDatepickerNavigation_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NgbDatepickerNavigation_Conditional_4_For_1_Template, 4, 3, null, null, _forTrack0, true);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵrepeater(ctx_r1.months);
  }
}
function NgbDatepickerNavigation_For_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const month_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.i18n.getMonthLabel(month_r5.firstDate));
  }
}
function NgbDatepickerMonth_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.i18n.getWeekLabel());
  }
}
function NgbDatepickerMonth_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const weekday_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(weekday_r2);
  }
}
function NgbDatepickerMonth_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵconditionalCreate(1, NgbDatepickerMonth_Conditional_0_Conditional_1_Template, 2, 1, "div", 1);
    ɵɵrepeaterCreate(2, NgbDatepickerMonth_Conditional_0_For_3_Template, 2, 1, "div", 2, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.datepicker.showWeekNumbers ? 1 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.viewModel.weekdays);
  }
}
function NgbDatepickerMonth_For_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const week_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.i18n.getWeekNumerals(week_r3.number));
  }
}
function NgbDatepickerMonth_For_2_Conditional_0_For_3_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NgbDatepickerMonth_For_2_Conditional_0_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NgbDatepickerMonth_For_2_Conditional_0_For_3_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const day_r5 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.datepicker.dayTemplate)("ngTemplateOutletContext", day_r5.context);
  }
}
function NgbDatepickerMonth_For_2_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("click", function NgbDatepickerMonth_For_2_Conditional_0_For_3_Template_div_click_0_listener($event) {
      const day_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r0 = ɵɵnextContext(3);
      ctx_r0.doSelect(day_r5);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵconditionalCreate(1, NgbDatepickerMonth_For_2_Conditional_0_For_3_Conditional_1_Template, 1, 2, null, 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const day_r5 = ctx.$implicit;
    ɵɵclassProp("disabled", day_r5.context.disabled)("hidden", day_r5.hidden)("ngb-dp-today", day_r5.context.today);
    ɵɵproperty("tabindex", day_r5.tabindex);
    ɵɵattribute("aria-label", day_r5.ariaLabel)("aria-disabled", day_r5.context.disabled)("aria-selected", day_r5.context.selected);
    ɵɵadvance();
    ɵɵconditional(!day_r5.hidden ? 1 : -1);
  }
}
function NgbDatepickerMonth_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵconditionalCreate(1, NgbDatepickerMonth_For_2_Conditional_0_Conditional_1_Template, 2, 1, "div", 4);
    ɵɵrepeaterCreate(2, NgbDatepickerMonth_For_2_Conditional_0_For_3_Template, 2, 11, "div", 5, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const week_r3 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.datepicker.showWeekNumbers ? 1 : -1);
    ɵɵadvance();
    ɵɵrepeater(week_r3.days);
  }
}
function NgbDatepickerMonth_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, NgbDatepickerMonth_For_2_Conditional_0_Template, 4, 1, "div", 3);
  }
  if (rf & 2) {
    const week_r3 = ctx.$implicit;
    ɵɵconditional(!week_r3.collapsed ? 0 : -1);
  }
}
var _c3 = ["defaultDayTemplate"];
var _c4 = ["content"];
var _c5 = (a0) => ({
  $implicit: a0
});
function NgbDatepicker_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 8);
  }
  if (rf & 2) {
    const date_r1 = ctx.date;
    const currentMonth_r2 = ctx.currentMonth;
    const selected_r3 = ctx.selected;
    const disabled_r4 = ctx.disabled;
    const focused_r5 = ctx.focused;
    ɵɵproperty("date", date_r1)("currentMonth", currentMonth_r2)("selected", selected_r3)("disabled", disabled_r4)("focused", focused_r5);
  }
}
function NgbDatepicker_ng_template_2_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const month_r6 = ɵɵnextContext().$implicit;
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r6.i18n.getMonthLabel(month_r6.firstDate), " ");
  }
}
function NgbDatepicker_ng_template_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵconditionalCreate(1, NgbDatepicker_ng_template_2_For_1_Conditional_1_Template, 2, 1, "div", 10);
    ɵɵelement(2, "ngb-datepicker-month", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const month_r6 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r6.navigation === "none" || ctx_r6.displayMonths > 1 && ctx_r6.navigation === "select" ? 1 : -1);
    ɵɵadvance();
    ɵɵproperty("month", month_r6.firstDate);
  }
}
function NgbDatepicker_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NgbDatepicker_ng_template_2_For_1_Template, 3, 2, "div", 9, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵrepeater(ctx_r6.model.months);
  }
}
function NgbDatepicker_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngb-datepicker-navigation", 12);
    ɵɵlistener("navigate", function NgbDatepicker_Conditional_5_Template_ngb_datepicker_navigation_navigate_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.onNavigateEvent($event));
    })("select", function NgbDatepicker_Conditional_5_Template_ngb_datepicker_navigation_select_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.onNavigateDateSelect($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("date", ctx_r6.model.firstDate)("months", ctx_r6.model.months)("disabled", ctx_r6.model.disabled)("showSelect", ctx_r6.model.navigation === "select")("prevDisabled", ctx_r6.model.prevDisabled)("nextDisabled", ctx_r6.model.nextDisabled)("selectBoxes", ctx_r6.model.selectBoxes);
  }
}
function NgbDatepicker_ng_template_8_Template(rf, ctx) {
}
function NgbDatepicker_ng_template_9_Template(rf, ctx) {
}
var NgbDate = class _NgbDate {
  /**
   * A **static method** that creates a new date object from the `NgbDateStruct`,
   *
   * ex. `NgbDate.from({year: 2000, month: 5, day: 1})`.
   *
   * If the `date` is already of `NgbDate` type, the method will return the same object.
   */
  static from(date) {
    if (date instanceof _NgbDate) {
      return date;
    }
    return date ? new _NgbDate(date.year, date.month, date.day) : null;
  }
  constructor(year, month, day) {
    this.year = isInteger(year) ? year : null;
    this.month = isInteger(month) ? month : null;
    this.day = isInteger(day) ? day : null;
  }
  /**
   * Checks if the current date is equal to another date.
   */
  equals(other) {
    return other != null && this.year === other.year && this.month === other.month && this.day === other.day;
  }
  /**
   * Checks if the current date is before another date.
   */
  before(other) {
    if (!other) {
      return false;
    }
    if (this.year === other.year) {
      if (this.month === other.month) {
        return this.day === other.day ? false : this.day < other.day;
      } else {
        return this.month < other.month;
      }
    } else {
      return this.year < other.year;
    }
  }
  /**
   * Checks if the current date is after another date.
   */
  after(other) {
    if (!other) {
      return false;
    }
    if (this.year === other.year) {
      if (this.month === other.month) {
        return this.day === other.day ? false : this.day > other.day;
      } else {
        return this.month > other.month;
      }
    } else {
      return this.year > other.year;
    }
  }
};
function fromJSDate(jsDate) {
  return new NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
function toJSDate(date) {
  const jsDate = new Date(date.year, date.month - 1, date.day, 12);
  if (!isNaN(jsDate.getTime())) {
    jsDate.setFullYear(date.year);
  }
  return jsDate;
}
function NGB_DATEPICKER_CALENDAR_FACTORY() {
  return new NgbCalendarGregorian();
}
var NgbCalendar = class _NgbCalendar {
  static {
    this.ɵfac = function NgbCalendar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCalendar)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendar,
      factory: () => NGB_DATEPICKER_CALENDAR_FACTORY(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendar, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: NGB_DATEPICKER_CALENDAR_FACTORY
    }]
  }], null, null);
})();
var NgbCalendarGregorian = class _NgbCalendarGregorian extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
  getWeeksPerMonth() {
    return 6;
  }
  getNext(date, period = "d", number = 1) {
    let jsDate = toJSDate(date);
    let checkMonth = true;
    let expectedMonth = jsDate.getMonth();
    switch (period) {
      case "y":
        jsDate.setFullYear(jsDate.getFullYear() + number);
        break;
      case "m":
        expectedMonth += number;
        jsDate.setMonth(expectedMonth);
        expectedMonth = expectedMonth % 12;
        if (expectedMonth < 0) {
          expectedMonth = expectedMonth + 12;
        }
        break;
      case "d":
        jsDate.setDate(jsDate.getDate() + number);
        checkMonth = false;
        break;
      default:
        return date;
    }
    if (checkMonth && jsDate.getMonth() !== expectedMonth) {
      jsDate.setDate(0);
    }
    return fromJSDate(jsDate);
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    let jsDate = toJSDate(date);
    let day = jsDate.getDay();
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    let date = week[thursdayIndex];
    const jsDate = toJSDate(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7));
    const time = jsDate.getTime();
    jsDate.setMonth(0);
    jsDate.setDate(1);
    return Math.floor(Math.round((time - jsDate.getTime()) / 864e5) / 7) + 1;
  }
  getToday() {
    return fromJSDate(/* @__PURE__ */ new Date());
  }
  isValid(date) {
    if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
      return false;
    }
    if (date.year === 0) {
      return false;
    }
    const jsDate = toJSDate(date);
    return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month && jsDate.getDate() === date.day;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbCalendarGregorian_BaseFactory;
      return function NgbCalendarGregorian_Factory(__ngFactoryType__) {
        return (ɵNgbCalendarGregorian_BaseFactory || (ɵNgbCalendarGregorian_BaseFactory = ɵɵgetInheritedFactory(_NgbCalendarGregorian)))(__ngFactoryType__ || _NgbCalendarGregorian);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendarGregorian,
      factory: _NgbCalendarGregorian.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarGregorian, [{
    type: Injectable
  }], null, null);
})();
function isChangedDate(prev, next) {
  return !dateComparator(prev, next);
}
function isChangedMonth(prev, next) {
  return !prev && !next ? false : !prev || !next ? true : prev.year !== next.year || prev.month !== next.month;
}
function dateComparator(prev, next) {
  return !prev && !next || !!prev && !!next && prev.equals(next);
}
function checkMinBeforeMax(minDate, maxDate) {
  if (maxDate && minDate && maxDate.before(minDate)) {
    throw new Error(`'maxDate' ${maxDate} should be greater than 'minDate' ${minDate}`);
  }
}
function checkDateInRange(date, minDate, maxDate) {
  if (date && minDate && date.before(minDate)) {
    return minDate;
  }
  if (date && maxDate && date.after(maxDate)) {
    return maxDate;
  }
  return date || null;
}
function isDateSelectable(date, state) {
  const {
    minDate,
    maxDate,
    disabled,
    markDisabled
  } = state;
  return !(date === null || date === void 0 || disabled || markDisabled && markDisabled(date, {
    year: date.year,
    month: date.month
  }) || minDate && date.before(minDate) || maxDate && date.after(maxDate));
}
function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
  if (!date) {
    return [];
  }
  let months = calendar.getMonths(date.year);
  if (minDate && date.year === minDate.year) {
    const index = months.findIndex((month) => month === minDate.month);
    months = months.slice(index);
  }
  if (maxDate && date.year === maxDate.year) {
    const index = months.findIndex((month) => month === maxDate.month);
    months = months.slice(0, index + 1);
  }
  return months;
}
function generateSelectBoxYears(date, minDate, maxDate) {
  if (!date) {
    return [];
  }
  const start = minDate ? Math.max(minDate.year, date.year - 500) : date.year - 10;
  const end = maxDate ? Math.min(maxDate.year, date.year + 500) : date.year + 10;
  const length = end - start + 1;
  const numbers = Array(length);
  for (let i = 0; i < length; i++) {
    numbers[i] = start + i;
  }
  return numbers;
}
function nextMonthDisabled(calendar, date, maxDate) {
  const nextDate = Object.assign(calendar.getNext(date, "m"), {
    day: 1
  });
  return maxDate != null && nextDate.after(maxDate);
}
function prevMonthDisabled(calendar, date, minDate) {
  const prevDate = Object.assign(calendar.getPrev(date, "m"), {
    day: 1
  });
  return minDate != null && (prevDate.year === minDate.year && prevDate.month < minDate.month || prevDate.year < minDate.year && minDate.month === 1);
}
function buildMonths(calendar, date, state, i18n, force) {
  const {
    displayMonths,
    months
  } = state;
  const monthsToReuse = months.splice(0, months.length);
  const firstDates = Array.from({
    length: displayMonths
  }, (_, i) => {
    const firstDate = Object.assign(calendar.getNext(date, "m", i), {
      day: 1
    });
    months[i] = null;
    if (!force) {
      const reusedIndex = monthsToReuse.findIndex((month) => month.firstDate.equals(firstDate));
      if (reusedIndex !== -1) {
        months[i] = monthsToReuse.splice(reusedIndex, 1)[0];
      }
    }
    return firstDate;
  });
  firstDates.forEach((firstDate, i) => {
    if (months[i] === null) {
      months[i] = buildMonth(calendar, firstDate, state, i18n, monthsToReuse.shift() || {});
    }
  });
  return months;
}
function buildMonth(calendar, date, state, i18n, month = {}) {
  const {
    dayTemplateData,
    minDate,
    maxDate,
    firstDayOfWeek,
    markDisabled,
    outsideDays,
    weekdayWidth,
    weekdaysVisible
  } = state;
  const calendarToday = calendar.getToday();
  month.firstDate = null;
  month.lastDate = null;
  month.number = date.month;
  month.year = date.year;
  month.weeks = month.weeks || [];
  month.weekdays = month.weekdays || [];
  date = getFirstViewDate(calendar, date, firstDayOfWeek);
  if (!weekdaysVisible) {
    month.weekdays.length = 0;
  }
  for (let week = 0; week < calendar.getWeeksPerMonth(); week++) {
    let weekObject = month.weeks[week];
    if (!weekObject) {
      weekObject = month.weeks[week] = {
        number: 0,
        days: [],
        collapsed: true
      };
    }
    const days = weekObject.days;
    for (let day = 0; day < calendar.getDaysPerWeek(); day++) {
      if (week === 0 && weekdaysVisible) {
        month.weekdays[day] = i18n.getWeekdayLabel(calendar.getWeekday(date), weekdayWidth);
      }
      const newDate = new NgbDate(date.year, date.month, date.day);
      const nextDate = calendar.getNext(newDate);
      const ariaLabel = i18n.getDayAriaLabel(newDate);
      let disabled = !!(minDate && newDate.before(minDate) || maxDate && newDate.after(maxDate));
      if (!disabled && markDisabled) {
        disabled = markDisabled(newDate, {
          month: month.number,
          year: month.year
        });
      }
      let today = newDate.equals(calendarToday);
      let contextUserData = dayTemplateData ? dayTemplateData(newDate, {
        month: month.number,
        year: month.year
      }) : void 0;
      if (month.firstDate === null && newDate.month === month.number) {
        month.firstDate = newDate;
      }
      if (newDate.month === month.number && nextDate.month !== month.number) {
        month.lastDate = newDate;
      }
      let dayObject = days[day];
      if (!dayObject) {
        dayObject = days[day] = {};
      }
      dayObject.date = newDate;
      dayObject.context = Object.assign(dayObject.context || {}, {
        $implicit: newDate,
        date: newDate,
        data: contextUserData,
        currentMonth: month.number,
        currentYear: month.year,
        disabled,
        focused: false,
        selected: false,
        today
      });
      dayObject.tabindex = -1;
      dayObject.ariaLabel = ariaLabel;
      dayObject.hidden = false;
      date = nextDate;
    }
    weekObject.number = calendar.getWeekNumber(days.map((day) => day.date), firstDayOfWeek);
    weekObject.collapsed = outsideDays === "collapsed" && days[0].date.month !== month.number && days[days.length - 1].date.month !== month.number;
  }
  return month;
}
function getFirstViewDate(calendar, date, firstDayOfWeek) {
  const daysPerWeek = calendar.getDaysPerWeek();
  const firstMonthDate = new NgbDate(date.year, date.month, 1);
  const dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
  return calendar.getPrev(firstMonthDate, "d", (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
}
var NgbDatepickerI18n = class _NgbDatepickerI18n {
  /**
   * Returns the text label to display above the day view.
   *
   * @since 9.1.0
   */
  getMonthLabel(date) {
    return `${this.getMonthFullName(date.month, date.year)} ${this.getYearNumerals(date.year)}`;
  }
  /**
   * Returns the textual representation of a day that is rendered in a day cell.
   *
   * @since 3.0.0
   */
  getDayNumerals(date) {
    return `${date.day}`;
  }
  /**
   * Returns the textual representation of a week number rendered by datepicker.
   *
   * @since 3.0.0
   */
  getWeekNumerals(weekNumber) {
    return `${weekNumber}`;
  }
  /**
   * Returns the textual representation of a year that is rendered in the datepicker year select box.
   *
   * @since 3.0.0
   */
  getYearNumerals(year) {
    return `${year}`;
  }
  /**
   * Returns the week label to display in the heading of the month view.
   *
   * @since 9.1.0
   */
  getWeekLabel() {
    return "";
  }
  static {
    this.ɵfac = function NgbDatepickerI18n_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerI18n)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDatepickerI18n,
      factory: () => (() => new NgbDatepickerI18nDefault())(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerI18n, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new NgbDatepickerI18nDefault()
    }]
  }], null, null);
})();
var NgbDatepickerI18nDefault = class _NgbDatepickerI18nDefault extends NgbDatepickerI18n {
  constructor() {
    super(...arguments);
    this._locale = inject(LOCALE_ID);
    this._monthsShort = [...Array(12).keys()].map((month) => Intl.DateTimeFormat(this._locale, {
      month: "short",
      timeZone: "UTC"
    }).format(Date.UTC(2e3, month)));
    this._monthsFull = [...Array(12).keys()].map((month) => Intl.DateTimeFormat(this._locale, {
      month: "long",
      timeZone: "UTC"
    }).format(Date.UTC(2e3, month)));
  }
  getWeekdayLabel(weekday, width = "narrow") {
    const weekdays = [1, 2, 3, 4, 5, 6, 7].map((day) => Intl.DateTimeFormat(this._locale, {
      weekday: width,
      timeZone: "UTC"
    }).format(Date.UTC(2e3, 4, day)));
    return weekdays[weekday - 1] || "";
  }
  getMonthShortName(month) {
    return this._monthsShort[month - 1] || "";
  }
  getMonthFullName(month) {
    return this._monthsFull[month - 1] || "";
  }
  getDayAriaLabel(date) {
    const jsDate = new Date(date.year, date.month - 1, date.day);
    return formatDate(jsDate, "fullDate", this._locale);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbDatepickerI18nDefault_BaseFactory;
      return function NgbDatepickerI18nDefault_Factory(__ngFactoryType__) {
        return (ɵNgbDatepickerI18nDefault_BaseFactory || (ɵNgbDatepickerI18nDefault_BaseFactory = ɵɵgetInheritedFactory(_NgbDatepickerI18nDefault)))(__ngFactoryType__ || _NgbDatepickerI18nDefault);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDatepickerI18nDefault,
      factory: _NgbDatepickerI18nDefault.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerI18nDefault, [{
    type: Injectable
  }], null, null);
})();
var NgbDatepickerService = class _NgbDatepickerService {
  constructor() {
    this._VALIDATORS = {
      dayTemplateData: (dayTemplateData) => {
        if (this._state.dayTemplateData !== dayTemplateData) {
          return {
            dayTemplateData
          };
        }
      },
      displayMonths: (displayMonths) => {
        displayMonths = toInteger(displayMonths);
        if (isInteger(displayMonths) && displayMonths > 0 && this._state.displayMonths !== displayMonths) {
          return {
            displayMonths
          };
        }
      },
      disabled: (disabled) => {
        if (this._state.disabled !== disabled) {
          return {
            disabled
          };
        }
      },
      firstDayOfWeek: (firstDayOfWeek) => {
        firstDayOfWeek = toInteger(firstDayOfWeek);
        if (isInteger(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
          return {
            firstDayOfWeek
          };
        }
      },
      focusVisible: (focusVisible) => {
        if (this._state.focusVisible !== focusVisible && !this._state.disabled) {
          return {
            focusVisible
          };
        }
      },
      markDisabled: (markDisabled) => {
        if (this._state.markDisabled !== markDisabled) {
          return {
            markDisabled
          };
        }
      },
      maxDate: (date) => {
        const maxDate = this.toValidDate(date, null);
        if (isChangedDate(this._state.maxDate, maxDate)) {
          return {
            maxDate
          };
        }
      },
      minDate: (date) => {
        const minDate = this.toValidDate(date, null);
        if (isChangedDate(this._state.minDate, minDate)) {
          return {
            minDate
          };
        }
      },
      navigation: (navigation) => {
        if (this._state.navigation !== navigation) {
          return {
            navigation
          };
        }
      },
      outsideDays: (outsideDays) => {
        if (this._state.outsideDays !== outsideDays) {
          return {
            outsideDays
          };
        }
      },
      weekdays: (weekdays) => {
        const weekdayWidth = weekdays === true || weekdays === false ? "narrow" : weekdays;
        const weekdaysVisible = weekdays === true || weekdays === false ? weekdays : true;
        if (this._state.weekdayWidth !== weekdayWidth || this._state.weekdaysVisible !== weekdaysVisible) {
          return {
            weekdayWidth,
            weekdaysVisible
          };
        }
      }
    };
    this._calendar = inject(NgbCalendar);
    this._i18n = inject(NgbDatepickerI18n);
    this._model$ = new Subject();
    this._dateSelect$ = new Subject();
    this._state = {
      dayTemplateData: null,
      markDisabled: null,
      maxDate: null,
      minDate: null,
      disabled: false,
      displayMonths: 1,
      firstDate: null,
      firstDayOfWeek: 1,
      lastDate: null,
      focusDate: null,
      focusVisible: false,
      months: [],
      navigation: "select",
      outsideDays: "visible",
      prevDisabled: false,
      nextDisabled: false,
      selectedDate: null,
      selectBoxes: {
        years: [],
        months: []
      },
      weekdayWidth: "narrow",
      weekdaysVisible: true
    };
  }
  get model$() {
    return this._model$.pipe(filter((model) => model.months.length > 0));
  }
  get dateSelect$() {
    return this._dateSelect$.pipe(filter((date) => date !== null));
  }
  set(options) {
    let patch = Object.keys(options).map((key) => this._VALIDATORS[key](options[key])).reduce((obj, part) => __spreadValues(__spreadValues({}, obj), part), {});
    if (Object.keys(patch).length > 0) {
      this._nextState(patch);
    }
  }
  focus(date) {
    const focusedDate = this.toValidDate(date, null);
    if (focusedDate != null && !this._state.disabled && isChangedDate(this._state.focusDate, focusedDate)) {
      this._nextState({
        focusDate: date
      });
    }
  }
  focusSelect() {
    if (isDateSelectable(this._state.focusDate, this._state)) {
      this.select(this._state.focusDate, {
        emitEvent: true
      });
    }
  }
  open(date) {
    const firstDate = this.toValidDate(date, this._calendar.getToday());
    if (firstDate != null && !this._state.disabled && (!this._state.firstDate || isChangedMonth(this._state.firstDate, firstDate))) {
      this._nextState({
        firstDate
      });
    }
  }
  select(date, options = {}) {
    const selectedDate = this.toValidDate(date, null);
    if (selectedDate != null && !this._state.disabled) {
      if (isChangedDate(this._state.selectedDate, selectedDate)) {
        this._nextState({
          selectedDate
        });
      }
      if (options.emitEvent && isDateSelectable(selectedDate, this._state)) {
        this._dateSelect$.next(selectedDate);
      }
    }
  }
  toValidDate(date, defaultValue) {
    const ngbDate = NgbDate.from(date);
    if (defaultValue === void 0) {
      defaultValue = this._calendar.getToday();
    }
    return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
  }
  getMonth(struct) {
    for (let month of this._state.months) {
      if (struct.month === month.number && struct.year === month.year) {
        return month;
      }
    }
    throw new Error(`month ${struct.month} of year ${struct.year} not found`);
  }
  _nextState(patch) {
    const newState = this._updateState(patch);
    this._patchContexts(newState);
    this._state = newState;
    this._model$.next(this._state);
  }
  _patchContexts(state) {
    const {
      months,
      displayMonths,
      selectedDate,
      focusDate,
      focusVisible,
      disabled,
      outsideDays
    } = state;
    state.months.forEach((month) => {
      month.weeks.forEach((week) => {
        week.days.forEach((day) => {
          if (focusDate) {
            day.context.focused = focusDate.equals(day.date) && focusVisible;
          }
          day.tabindex = !disabled && focusDate && day.date.equals(focusDate) && focusDate.month === month.number ? 0 : -1;
          if (disabled === true) {
            day.context.disabled = true;
          }
          if (selectedDate !== void 0) {
            day.context.selected = selectedDate !== null && selectedDate.equals(day.date);
          }
          if (month.number !== day.date.month) {
            day.hidden = outsideDays === "hidden" || outsideDays === "collapsed" || displayMonths > 1 && day.date.after(months[0].firstDate) && day.date.before(months[displayMonths - 1].lastDate);
          }
        });
      });
    });
  }
  _updateState(patch) {
    const state = Object.assign({}, this._state, patch);
    let startDate = state.firstDate;
    if ("minDate" in patch || "maxDate" in patch) {
      checkMinBeforeMax(state.minDate, state.maxDate);
      state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
      state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
      startDate = state.focusDate;
    }
    if ("disabled" in patch) {
      state.focusVisible = false;
    }
    if ("selectedDate" in patch && this._state.months.length === 0) {
      startDate = state.selectedDate;
    }
    if ("focusVisible" in patch) {
      return state;
    }
    if ("focusDate" in patch) {
      state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
      startDate = state.focusDate;
      if (state.months.length !== 0 && state.focusDate && !state.focusDate.before(state.firstDate) && !state.focusDate.after(state.lastDate)) {
        return state;
      }
    }
    if ("firstDate" in patch) {
      state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
      startDate = state.firstDate;
    }
    if (startDate) {
      const forceRebuild = "dayTemplateData" in patch || "firstDayOfWeek" in patch || "markDisabled" in patch || "minDate" in patch || "maxDate" in patch || "disabled" in patch || "outsideDays" in patch || "weekdaysVisible" in patch;
      const months = buildMonths(this._calendar, startDate, state, this._i18n, forceRebuild);
      state.months = months;
      state.firstDate = months[0].firstDate;
      state.lastDate = months[months.length - 1].lastDate;
      if ("selectedDate" in patch && !isDateSelectable(state.selectedDate, state)) {
        state.selectedDate = null;
      }
      if ("firstDate" in patch) {
        if (!state.focusDate || state.focusDate.before(state.firstDate) || state.focusDate.after(state.lastDate)) {
          state.focusDate = startDate;
        }
      }
      const yearChanged = !this._state.firstDate || this._state.firstDate.year !== state.firstDate.year;
      const monthChanged = !this._state.firstDate || this._state.firstDate.month !== state.firstDate.month;
      if (state.navigation === "select") {
        if ("minDate" in patch || "maxDate" in patch || state.selectBoxes.years.length === 0 || yearChanged) {
          state.selectBoxes.years = generateSelectBoxYears(state.firstDate, state.minDate, state.maxDate);
        }
        if ("minDate" in patch || "maxDate" in patch || state.selectBoxes.months.length === 0 || yearChanged) {
          state.selectBoxes.months = generateSelectBoxMonths(this._calendar, state.firstDate, state.minDate, state.maxDate);
        }
      } else {
        state.selectBoxes = {
          years: [],
          months: []
        };
      }
      if ((state.navigation === "arrows" || state.navigation === "select") && (monthChanged || yearChanged || "minDate" in patch || "maxDate" in patch || "disabled" in patch)) {
        state.prevDisabled = state.disabled || prevMonthDisabled(this._calendar, state.firstDate, state.minDate);
        state.nextDisabled = state.disabled || nextMonthDisabled(this._calendar, state.lastDate, state.maxDate);
      }
    }
    return state;
  }
  static {
    this.ɵfac = function NgbDatepickerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDatepickerService,
      factory: _NgbDatepickerService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerService, [{
    type: Injectable
  }], null, null);
})();
var NavigationEvent;
(function(NavigationEvent2) {
  NavigationEvent2[NavigationEvent2["PREV"] = 0] = "PREV";
  NavigationEvent2[NavigationEvent2["NEXT"] = 1] = "NEXT";
})(NavigationEvent || (NavigationEvent = {}));
var NgbDatepickerConfig = class _NgbDatepickerConfig {
  constructor() {
    this.displayMonths = 1;
    this.firstDayOfWeek = 1;
    this.navigation = "select";
    this.outsideDays = "visible";
    this.showWeekNumbers = false;
    this.weekdays = "narrow";
  }
  static {
    this.ɵfac = function NgbDatepickerConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDatepickerConfig,
      factory: _NgbDatepickerConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function NGB_DATEPICKER_DATE_ADAPTER_FACTORY() {
  return new NgbDateStructAdapter();
}
var NgbDateAdapter = class _NgbDateAdapter {
  static {
    this.ɵfac = function NgbDateAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDateAdapter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDateAdapter,
      factory: () => NGB_DATEPICKER_DATE_ADAPTER_FACTORY(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateAdapter, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY
    }]
  }], null, null);
})();
var NgbDateStructAdapter = class _NgbDateStructAdapter extends NgbDateAdapter {
  /**
   * Converts a NgbDateStruct value into NgbDateStruct value
   */
  fromModel(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? {
      year: date.year,
      month: date.month,
      day: date.day
    } : null;
  }
  /**
   * Converts a NgbDateStruct value into NgbDateStruct value
   */
  toModel(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? {
      year: date.year,
      month: date.month,
      day: date.day
    } : null;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbDateStructAdapter_BaseFactory;
      return function NgbDateStructAdapter_Factory(__ngFactoryType__) {
        return (ɵNgbDateStructAdapter_BaseFactory || (ɵNgbDateStructAdapter_BaseFactory = ɵɵgetInheritedFactory(_NgbDateStructAdapter)))(__ngFactoryType__ || _NgbDateStructAdapter);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDateStructAdapter,
      factory: _NgbDateStructAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateStructAdapter, [{
    type: Injectable
  }], null, null);
})();
var NgbDatepickerKeyboardService = class _NgbDatepickerKeyboardService {
  /**
   * Processes a keyboard event.
   */
  processKey(event, datepicker) {
    const {
      state,
      calendar
    } = datepicker;
    switch (event.key) {
      case "PageUp":
        datepicker.focusDate(calendar.getPrev(state.focusedDate, event.shiftKey ? "y" : "m", 1));
        break;
      case "PageDown":
        datepicker.focusDate(calendar.getNext(state.focusedDate, event.shiftKey ? "y" : "m", 1));
        break;
      case "End":
        datepicker.focusDate(event.shiftKey ? state.maxDate : state.lastDate);
        break;
      case "Home":
        datepicker.focusDate(event.shiftKey ? state.minDate : state.firstDate);
        break;
      case "ArrowLeft":
        datepicker.focusDate(calendar.getPrev(state.focusedDate, "d", 1));
        break;
      case "ArrowUp":
        datepicker.focusDate(calendar.getPrev(state.focusedDate, "d", calendar.getDaysPerWeek()));
        break;
      case "ArrowRight":
        datepicker.focusDate(calendar.getNext(state.focusedDate, "d", 1));
        break;
      case "ArrowDown":
        datepicker.focusDate(calendar.getNext(state.focusedDate, "d", calendar.getDaysPerWeek()));
        break;
      case "Enter":
      case " ":
        datepicker.focusSelect();
        break;
      default:
        return;
    }
    event.preventDefault();
    event.stopPropagation();
  }
  static {
    this.ɵfac = function NgbDatepickerKeyboardService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerKeyboardService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDatepickerKeyboardService,
      factory: _NgbDatepickerKeyboardService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerKeyboardService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbDatepickerDayView = class _NgbDatepickerDayView {
  constructor() {
    this.i18n = inject(NgbDatepickerI18n);
  }
  isMuted() {
    return !this.selected && (this.date.month !== this.currentMonth || this.disabled);
  }
  static {
    this.ɵfac = function NgbDatepickerDayView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerDayView)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbDatepickerDayView,
      selectors: [["", "ngbDatepickerDayView", ""]],
      hostAttrs: [1, "btn-light"],
      hostVars: 10,
      hostBindings: function NgbDatepickerDayView_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("bg-primary", ctx.selected)("text-white", ctx.selected)("text-muted", ctx.isMuted())("outside", ctx.isMuted())("active", ctx.focused);
        }
      },
      inputs: {
        currentMonth: "currentMonth",
        date: "date",
        disabled: "disabled",
        focused: "focused",
        selected: "selected"
      },
      attrs: _c0,
      decls: 1,
      vars: 1,
      template: function NgbDatepickerDayView_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtext(0);
        }
        if (rf & 2) {
          ɵɵtextInterpolate(ctx.i18n.getDayNumerals(ctx.date));
        }
      },
      styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:transparent}[ngbDatepickerDayView]:hover:not(.bg-primary),[ngbDatepickerDayView].active:not(.bg-primary){background-color:var(--bs-tertiary-bg);outline:1px solid var(--bs-border-color)}[ngbDatepickerDayView].outside{opacity:.5}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerDayView, [{
    type: Component,
    args: [{
      selector: "[ngbDatepickerDayView]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "btn-light",
        "[class.bg-primary]": "selected",
        "[class.text-white]": "selected",
        "[class.text-muted]": "isMuted()",
        "[class.outside]": "isMuted()",
        "[class.active]": "focused"
      },
      template: `{{ i18n.getDayNumerals(date) }}`,
      styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:transparent}[ngbDatepickerDayView]:hover:not(.bg-primary),[ngbDatepickerDayView].active:not(.bg-primary){background-color:var(--bs-tertiary-bg);outline:1px solid var(--bs-border-color)}[ngbDatepickerDayView].outside{opacity:.5}\n"]
    }]
  }], null, {
    currentMonth: [{
      type: Input
    }],
    date: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    focused: [{
      type: Input
    }],
    selected: [{
      type: Input
    }]
  });
})();
var NgbDatepickerNavigationSelect = class _NgbDatepickerNavigationSelect {
  constructor() {
    this._month = -1;
    this._year = -1;
    this.i18n = inject(NgbDatepickerI18n);
    this.select = new EventEmitter();
  }
  changeMonth(month) {
    this.select.emit(new NgbDate(this.date.year, toInteger(month), 1));
  }
  changeYear(year) {
    this.select.emit(new NgbDate(toInteger(year), this.date.month, 1));
  }
  ngAfterViewChecked() {
    if (this.date) {
      if (this.date.month !== this._month) {
        this._month = this.date.month;
        this.monthSelect.nativeElement.value = `${this._month}`;
      }
      if (this.date.year !== this._year) {
        this._year = this.date.year;
        this.yearSelect.nativeElement.value = `${this._year}`;
      }
    }
  }
  static {
    this.ɵfac = function NgbDatepickerNavigationSelect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerNavigationSelect)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbDatepickerNavigationSelect,
      selectors: [["ngb-datepicker-navigation-select"]],
      viewQuery: function NgbDatepickerNavigationSelect_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c1, 7, ElementRef)(_c2, 7, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.monthSelect = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.yearSelect = _t.first);
        }
      },
      inputs: {
        date: "date",
        disabled: "disabled",
        months: "months",
        years: "years"
      },
      outputs: {
        select: "select"
      },
      decls: 8,
      vars: 2,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_DATEPICKER_MJS_0 = goog.getMsg("Select month");
          i18n_0 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_DATEPICKER_MJS_0;
        } else {
          i18n_0 = $localize`:@@ngb.datepicker.select-month:Select month`;
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_DATEPICKER_MJS_1 = goog.getMsg("Select month");
          i18n_1 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_DATEPICKER_MJS_1;
        } else {
          i18n_1 = $localize`:@@ngb.datepicker.select-month:Select month`;
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_DATEPICKER_MJS_2 = goog.getMsg("Select year");
          i18n_2 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_DATEPICKER_MJS_2;
        } else {
          i18n_2 = $localize`:@@ngb.datepicker.select-year:Select year`;
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_DATEPICKER_MJS_3 = goog.getMsg("Select year");
          i18n_3 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_DATEPICKER_MJS_3;
        } else {
          i18n_3 = $localize`:@@ngb.datepicker.select-year:Select year`;
        }
        return [["month", ""], ["year", ""], ["aria-label", i18n_0, "title", i18n_1, 1, "form-select", 3, "change", "disabled"], [3, "value"], ["aria-label", i18n_2, "title", i18n_3, 1, "form-select", 3, "change", "disabled"]];
      },
      template: function NgbDatepickerNavigationSelect_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElementStart(0, "select", 2, 0);
          ɵɵdomListener("change", function NgbDatepickerNavigationSelect_Template_select_change_0_listener($event) {
            return ctx.changeMonth($event.target.value);
          });
          ɵɵrepeaterCreate(2, NgbDatepickerNavigationSelect_For_3_Template, 2, 3, "option", 3, ɵɵrepeaterTrackByIdentity);
          ɵɵdomElementEnd();
          ɵɵdomElementStart(4, "select", 4, 1);
          ɵɵdomListener("change", function NgbDatepickerNavigationSelect_Template_select_change_4_listener($event) {
            return ctx.changeYear($event.target.value);
          });
          ɵɵrepeaterCreate(6, NgbDatepickerNavigationSelect_For_7_Template, 2, 2, "option", 3, ɵɵrepeaterTrackByIdentity);
          ɵɵdomElementEnd();
        }
        if (rf & 2) {
          ɵɵdomProperty("disabled", ctx.disabled);
          ɵɵadvance(2);
          ɵɵrepeater(ctx.months);
          ɵɵadvance(2);
          ɵɵdomProperty("disabled", ctx.disabled);
          ɵɵadvance(2);
          ɵɵrepeater(ctx.years);
        }
      },
      styles: ["ngb-datepicker-navigation-select>.form-select{flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.form-select:focus{z-index:1}ngb-datepicker-navigation-select>.form-select::-ms-value{background-color:transparent!important}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerNavigationSelect, [{
    type: Component,
    args: [{
      selector: "ngb-datepicker-navigation-select",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
		<select
			#month
			[disabled]="disabled"
			class="form-select"
			i18n-aria-label="@@ngb.datepicker.select-month"
			aria-label="Select month"
			i18n-title="@@ngb.datepicker.select-month"
			title="Select month"
			(change)="changeMonth($any($event).target.value)"
		>
			@for (m of months; track m) {
				<option [attr.aria-label]="i18n.getMonthFullName(m, date.year)" [value]="m">{{
					i18n.getMonthShortName(m, date.year)
				}}</option>
			}</select
		><select
			#year
			[disabled]="disabled"
			class="form-select"
			i18n-aria-label="@@ngb.datepicker.select-year"
			aria-label="Select year"
			i18n-title="@@ngb.datepicker.select-year"
			title="Select year"
			(change)="changeYear($any($event).target.value)"
		>
			@for (y of years; track y) {
				<option [value]="y">{{ i18n.getYearNumerals(y) }}</option>
			}
		</select>
	`,
      styles: ["ngb-datepicker-navigation-select>.form-select{flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.form-select:focus{z-index:1}ngb-datepicker-navigation-select>.form-select::-ms-value{background-color:transparent!important}\n"]
    }]
  }], null, {
    date: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    months: [{
      type: Input
    }],
    years: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    monthSelect: [{
      type: ViewChild,
      args: ["month", {
        static: true,
        read: ElementRef
      }]
    }],
    yearSelect: [{
      type: ViewChild,
      args: ["year", {
        static: true,
        read: ElementRef
      }]
    }]
  });
})();
var NgbDatepickerNavigation = class _NgbDatepickerNavigation {
  constructor() {
    this.navigation = NavigationEvent;
    this.i18n = inject(NgbDatepickerI18n);
    this.months = [];
    this.navigate = new EventEmitter();
    this.select = new EventEmitter();
  }
  onClickPrev(event) {
    event.currentTarget.focus();
    this.navigate.emit(this.navigation.PREV);
  }
  onClickNext(event) {
    event.currentTarget.focus();
    this.navigate.emit(this.navigation.NEXT);
  }
  idMonth(month) {
    return month;
  }
  static {
    this.ɵfac = function NgbDatepickerNavigation_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerNavigation)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbDatepickerNavigation,
      selectors: [["ngb-datepicker-navigation"]],
      inputs: {
        date: "date",
        disabled: "disabled",
        months: "months",
        showSelect: "showSelect",
        prevDisabled: "prevDisabled",
        nextDisabled: "nextDisabled",
        selectBoxes: "selectBoxes"
      },
      outputs: {
        navigate: "navigate",
        select: "select"
      },
      decls: 11,
      vars: 4,
      consts: () => {
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_DATEPICKER_MJS_4 = goog.getMsg("Previous month");
          i18n_4 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_DATEPICKER_MJS_4;
        } else {
          i18n_4 = $localize`:@@ngb.datepicker.previous-month:Previous month`;
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_DATEPICKER_MJS_5 = goog.getMsg("Previous month");
          i18n_5 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_DATEPICKER_MJS_5;
        } else {
          i18n_5 = $localize`:@@ngb.datepicker.previous-month:Previous month`;
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_DATEPICKER_MJS_6 = goog.getMsg("Next month");
          i18n_6 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_DATEPICKER_MJS_6;
        } else {
          i18n_6 = $localize`:@@ngb.datepicker.next-month:Next month`;
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_DATEPICKER_MJS_7 = goog.getMsg("Next month");
          i18n_7 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_DATEPICKER_MJS_7;
        } else {
          i18n_7 = $localize`:@@ngb.datepicker.next-month:Next month`;
        }
        return [[1, "ngb-dp-arrow", "ngb-dp-arrow-prev"], ["type", "button", "aria-label", i18n_4, "title", i18n_5, 1, "btn", "btn-link", "ngb-dp-arrow-btn", 3, "click", "disabled"], [1, "ngb-dp-navigation-chevron"], [1, "ngb-dp-navigation-select", 3, "date", "disabled", "months", "years"], ["aria-live", "polite", 1, "visually-hidden"], [1, "ngb-dp-arrow", "ngb-dp-arrow-next"], ["type", "button", "aria-label", i18n_6, "title", i18n_7, 1, "btn", "btn-link", "ngb-dp-arrow-btn", 3, "click", "disabled"], [1, "ngb-dp-navigation-select", 3, "select", "date", "disabled", "months", "years"], [1, "ngb-dp-arrow"], [1, "ngb-dp-month-name"]];
      },
      template: function NgbDatepickerNavigation_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "button", 1);
          ɵɵlistener("click", function NgbDatepickerNavigation_Template_button_click_1_listener($event) {
            return ctx.onClickPrev($event);
          });
          ɵɵelement(2, "span", 2);
          ɵɵelementEnd()();
          ɵɵconditionalCreate(3, NgbDatepickerNavigation_Conditional_3_Template, 1, 4, "ngb-datepicker-navigation-select", 3);
          ɵɵconditionalCreate(4, NgbDatepickerNavigation_Conditional_4_Template, 2, 0);
          ɵɵelementStart(5, "div", 4);
          ɵɵrepeaterCreate(6, NgbDatepickerNavigation_For_7_Template, 2, 1, "span", null, _forTrack0, true);
          ɵɵelementEnd();
          ɵɵelementStart(8, "div", 5)(9, "button", 6);
          ɵɵlistener("click", function NgbDatepickerNavigation_Template_button_click_9_listener($event) {
            return ctx.onClickNext($event);
          });
          ɵɵelement(10, "span", 2);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.prevDisabled);
          ɵɵadvance(2);
          ɵɵconditional(ctx.showSelect ? 3 : -1);
          ɵɵadvance();
          ɵɵconditional(!ctx.showSelect ? 4 : -1);
          ɵɵadvance(2);
          ɵɵrepeater(ctx.months);
          ɵɵadvance(3);
          ɵɵproperty("disabled", ctx.nextDisabled);
        }
      },
      dependencies: [NgbDatepickerNavigationSelect],
      styles: ["ngb-datepicker-navigation{display:flex;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;transform:rotate(-135deg)}.ngb-dp-arrow{display:flex;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow-next{justify-content:flex-end}.ngb-dp-arrow-next .ngb-dp-navigation-chevron{transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:flex;flex:1 1 9rem}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerNavigation, [{
    type: Component,
    args: [{
      selector: "ngb-datepicker-navigation",
      imports: [NgbDatepickerNavigationSelect],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
		<div class="ngb-dp-arrow ngb-dp-arrow-prev">
			<button
				type="button"
				class="btn btn-link ngb-dp-arrow-btn"
				(click)="onClickPrev($event)"
				[disabled]="prevDisabled"
				i18n-aria-label="@@ngb.datepicker.previous-month"
				aria-label="Previous month"
				i18n-title="@@ngb.datepicker.previous-month"
				title="Previous month"
			>
				<span class="ngb-dp-navigation-chevron"></span>
			</button>
		</div>
		@if (showSelect) {
			<ngb-datepicker-navigation-select
				class="ngb-dp-navigation-select"
				[date]="date"
				[disabled]="disabled"
				[months]="selectBoxes.months"
				[years]="selectBoxes.years"
				(select)="select.emit($event)"
			/>
		}

		@if (!showSelect) {
			@for (month of months; track idMonth(month); let i = $index) {
				@if (i > 0) {
					<div class="ngb-dp-arrow"></div>
				}
				<div class="ngb-dp-month-name">
					{{ i18n.getMonthLabel(month.firstDate) }}
				</div>
				@if (i !== months.length - 1) {
					<div class="ngb-dp-arrow"></div>
				}
			}
		}
		<div class="visually-hidden" aria-live="polite">
			@for (month of months; track idMonth(month)) {
				<span>{{ i18n.getMonthLabel(month.firstDate) }}</span>
			}
		</div>

		<div class="ngb-dp-arrow ngb-dp-arrow-next">
			<button
				type="button"
				class="btn btn-link ngb-dp-arrow-btn"
				(click)="onClickNext($event)"
				[disabled]="nextDisabled"
				i18n-aria-label="@@ngb.datepicker.next-month"
				aria-label="Next month"
				i18n-title="@@ngb.datepicker.next-month"
				title="Next month"
			>
				<span class="ngb-dp-navigation-chevron"></span>
			</button>
		</div>
	`,
      styles: ["ngb-datepicker-navigation{display:flex;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;transform:rotate(-135deg)}.ngb-dp-arrow{display:flex;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow-next{justify-content:flex-end}.ngb-dp-arrow-next .ngb-dp-navigation-chevron{transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:flex;flex:1 1 9rem}\n"]
    }]
  }], null, {
    date: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    months: [{
      type: Input
    }],
    showSelect: [{
      type: Input
    }],
    prevDisabled: [{
      type: Input
    }],
    nextDisabled: [{
      type: Input
    }],
    selectBoxes: [{
      type: Input
    }],
    navigate: [{
      type: Output
    }],
    select: [{
      type: Output
    }]
  });
})();
var NgbDatepickerContent = class _NgbDatepickerContent {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbDatepickerContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbDatepickerContent,
      selectors: [["ng-template", "ngbDatepickerContent", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbDatepickerContent]"
    }]
  }], null, null);
})();
var NgbDatepickerMonth = class _NgbDatepickerMonth {
  constructor() {
    this._keyboardService = inject(NgbDatepickerKeyboardService);
    this._service = inject(NgbDatepickerService);
    this.i18n = inject(NgbDatepickerI18n);
    this.datepicker = inject(NgbDatepicker);
  }
  /**
   * The first date of month to be rendered.
   *
   * This month must one of the months present in the
   * [datepicker state](#/components/datepicker/api#NgbDatepickerState).
   */
  set month(month) {
    this.viewModel = this._service.getMonth(month);
  }
  onKeyDown(event) {
    this._keyboardService.processKey(event, this.datepicker);
  }
  doSelect(day) {
    if (!day.context.disabled && !day.hidden) {
      this.datepicker.onDateSelect(day.date);
    }
  }
  static {
    this.ɵfac = function NgbDatepickerMonth_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerMonth)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbDatepickerMonth,
      selectors: [["ngb-datepicker-month"]],
      hostAttrs: ["role", "grid"],
      hostBindings: function NgbDatepickerMonth_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown", function NgbDatepickerMonth_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          });
        }
      },
      inputs: {
        month: "month"
      },
      decls: 3,
      vars: 1,
      consts: [["role", "row", 1, "ngb-dp-week", "ngb-dp-weekdays"], [1, "ngb-dp-weekday", "ngb-dp-showweek", "small"], ["role", "columnheader", 1, "ngb-dp-weekday", "small"], ["role", "row", 1, "ngb-dp-week"], [1, "ngb-dp-week-number", "small", "text-muted"], ["role", "gridcell", 1, "ngb-dp-day", 3, "disabled", "tabindex", "hidden", "ngb-dp-today"], ["role", "gridcell", 1, "ngb-dp-day", 3, "click", "tabindex"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NgbDatepickerMonth_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, NgbDatepickerMonth_Conditional_0_Template, 4, 1, "div", 0);
          ɵɵrepeaterCreate(1, NgbDatepickerMonth_For_2_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.viewModel.weekdays.length > 0 ? 0 : -1);
          ɵɵadvance();
          ɵɵrepeater(ctx.viewModel.weeks);
        }
      },
      dependencies: [NgTemplateOutlet],
      styles: ['ngb-datepicker-month{display:block}.ngb-dp-weekday,.ngb-dp-week-number{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:var(--bs-info)}.ngb-dp-week{border-radius:.25rem;display:flex}.ngb-dp-weekdays{border-bottom:1px solid var(--bs-border-color);border-radius:0;background-color:var(--bs-tertiary-bg)}.ngb-dp-day,.ngb-dp-weekday,.ngb-dp-week-number{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex="0"]{z-index:1}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerMonth, [{
    type: Component,
    args: [{
      selector: "ngb-datepicker-month",
      imports: [NgTemplateOutlet],
      host: {
        role: "grid",
        "(keydown)": "onKeyDown($event)"
      },
      encapsulation: ViewEncapsulation.None,
      template: `
		@if (viewModel.weekdays.length > 0) {
			<div class="ngb-dp-week ngb-dp-weekdays" role="row">
				@if (datepicker.showWeekNumbers) {
					<div class="ngb-dp-weekday ngb-dp-showweek small">{{ i18n.getWeekLabel() }}</div>
				}
				@for (weekday of viewModel.weekdays; track $index) {
					<div class="ngb-dp-weekday small" role="columnheader">{{ weekday }}</div>
				}
			</div>
		}
		@for (week of viewModel.weeks; track week) {
			@if (!week.collapsed) {
				<div class="ngb-dp-week" role="row">
					@if (datepicker.showWeekNumbers) {
						<div class="ngb-dp-week-number small text-muted">{{ i18n.getWeekNumerals(week.number) }}</div>
					}
					@for (day of week.days; track day) {
						<div
							(click)="doSelect(day); $event.preventDefault()"
							class="ngb-dp-day"
							role="gridcell"
							[class.disabled]="day.context.disabled"
							[tabindex]="day.tabindex"
							[class.hidden]="day.hidden"
							[class.ngb-dp-today]="day.context.today"
							[attr.aria-label]="day.ariaLabel"
							[attr.aria-disabled]="day.context.disabled"
							[attr.aria-selected]="day.context.selected"
						>
							@if (!day.hidden) {
								<ng-template [ngTemplateOutlet]="datepicker.dayTemplate" [ngTemplateOutletContext]="day.context" />
							}
						</div>
					}
				</div>
			}
		}
	`,
      styles: ['ngb-datepicker-month{display:block}.ngb-dp-weekday,.ngb-dp-week-number{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:var(--bs-info)}.ngb-dp-week{border-radius:.25rem;display:flex}.ngb-dp-weekdays{border-bottom:1px solid var(--bs-border-color);border-radius:0;background-color:var(--bs-tertiary-bg)}.ngb-dp-day,.ngb-dp-weekday,.ngb-dp-week-number{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex="0"]{z-index:1}\n']
    }]
  }], null, {
    month: [{
      type: Input
    }]
  });
})();
var NgbDatepicker = class _NgbDatepicker {
  constructor() {
    this.injector = inject(Injector);
    this._service = inject(NgbDatepickerService);
    this._calendar = inject(NgbCalendar);
    this._i18n = inject(NgbDatepickerI18n);
    this._config = inject(NgbDatepickerConfig);
    this._nativeElement = inject(ElementRef).nativeElement;
    this._ngbDateAdapter = inject(NgbDateAdapter);
    this._ngZone = inject(NgZone);
    this._destroyRef = inject(DestroyRef);
    this._injector = inject(Injector);
    this._controlValue = null;
    this._publicState = {};
    this._initialized = false;
    this.dayTemplate = this._config.dayTemplate;
    this.dayTemplateData = this._config.dayTemplateData;
    this.displayMonths = this._config.displayMonths;
    this.firstDayOfWeek = this._config.firstDayOfWeek;
    this.footerTemplate = this._config.footerTemplate;
    this.markDisabled = this._config.markDisabled;
    this.maxDate = this._config.maxDate;
    this.minDate = this._config.minDate;
    this.navigation = this._config.navigation;
    this.outsideDays = this._config.outsideDays;
    this.showWeekNumbers = this._config.showWeekNumbers;
    this.startDate = this._config.startDate;
    this.weekdays = this._config.weekdays;
    this.navigate = new EventEmitter();
    this.dateSelect = new EventEmitter();
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
    const cd = inject(ChangeDetectorRef);
    this._service.dateSelect$.pipe(takeUntilDestroyed()).subscribe((date) => {
      this.dateSelect.emit(date);
    });
    this._service.model$.pipe(takeUntilDestroyed()).subscribe((model) => {
      const newDate = model.firstDate;
      const oldDate = this.model ? this.model.firstDate : null;
      this._publicState = {
        maxDate: model.maxDate,
        minDate: model.minDate,
        firstDate: model.firstDate,
        lastDate: model.lastDate,
        focusedDate: model.focusDate,
        months: model.months.map((viewModel) => viewModel.firstDate)
      };
      let navigationPrevented = false;
      if (!newDate.equals(oldDate)) {
        this.navigate.emit({
          current: oldDate ? {
            year: oldDate.year,
            month: oldDate.month
          } : null,
          next: {
            year: newDate.year,
            month: newDate.month
          },
          preventDefault: () => navigationPrevented = true
        });
        if (navigationPrevented && oldDate !== null) {
          this._service.open(oldDate);
          return;
        }
      }
      const newSelectedDate = model.selectedDate;
      const newFocusedDate = model.focusDate;
      const oldFocusedDate = this.model ? this.model.focusDate : null;
      this.model = model;
      if (isChangedDate(newSelectedDate, this._controlValue)) {
        this._controlValue = newSelectedDate;
        this.onTouched();
        this.onChange(this._ngbDateAdapter.toModel(newSelectedDate));
      }
      if (isChangedDate(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
        this.focus();
      }
      cd.markForCheck();
    });
  }
  /**
   *  Returns the readonly public state of the datepicker
   *
   * @since 5.2.0
   */
  get state() {
    return this._publicState;
  }
  /**
   *  Returns the calendar service used in the specific datepicker instance.
   *
   *  @since 5.3.0
   */
  get calendar() {
    return this._calendar;
  }
  /**
   * Returns the i18n service used in the specific datepicker instance.
   *
   * @since 14.2.0
   */
  get i18n() {
    return this._i18n;
  }
  /**
   *  Focuses on given date.
   */
  focusDate(date) {
    this._service.focus(NgbDate.from(date));
  }
  /**
   *  Selects focused date.
   */
  focusSelect() {
    this._service.focusSelect();
  }
  focus() {
    afterNextRender({
      read: () => {
        this._nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]')?.focus();
      }
    }, {
      injector: this._injector
    });
  }
  /**
   * Navigates to the provided date.
   *
   * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
   * If nothing or invalid date provided calendar will open current month.
   *
   * Use the `[startDate]` input as an alternative.
   */
  navigateTo(date) {
    this._service.open(NgbDate.from(date ? date.day ? date : __spreadProps(__spreadValues({}, date), {
      day: 1
    }) : null));
  }
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      const focusIns$ = fromEvent(this._contentEl.nativeElement, "focusin");
      const focusOuts$ = fromEvent(this._contentEl.nativeElement, "focusout");
      merge(focusIns$, focusOuts$).pipe(filter((focusEvent) => {
        const target = focusEvent.target;
        const relatedTarget = focusEvent.relatedTarget;
        return !(target?.classList.contains("ngb-dp-day") && relatedTarget?.classList.contains("ngb-dp-day") && this._nativeElement.contains(target) && this._nativeElement.contains(relatedTarget));
      }), takeUntilDestroyed(this._destroyRef)).subscribe(({
        type
      }) => this._ngZone.run(() => this._service.set({
        focusVisible: type === "focusin"
      })));
    });
  }
  ngOnInit() {
    if (this.model === void 0) {
      const inputs = {};
      ["dayTemplateData", "displayMonths", "markDisabled", "firstDayOfWeek", "navigation", "minDate", "maxDate", "outsideDays", "weekdays"].forEach((name) => inputs[name] = this[name]);
      this._service.set(inputs);
      this.navigateTo(this.startDate);
    }
    if (!this.dayTemplate) {
      this.dayTemplate = this._defaultDayTemplate;
    }
    this._initialized = true;
  }
  ngOnChanges(changes) {
    const inputs = {};
    ["dayTemplateData", "displayMonths", "markDisabled", "firstDayOfWeek", "navigation", "minDate", "maxDate", "outsideDays", "weekdays"].filter((name) => name in changes).forEach((name) => inputs[name] = this[name]);
    this._service.set(inputs);
    if ("startDate" in changes && this._initialized) {
      const {
        currentValue,
        previousValue
      } = changes.startDate;
      if (isChangedMonth(previousValue, currentValue)) {
        this.navigateTo(this.startDate);
      }
    }
  }
  onDateSelect(date) {
    this._service.focus(date);
    this._service.select(date, {
      emitEvent: true
    });
  }
  onNavigateDateSelect(date) {
    this._service.open(date);
  }
  onNavigateEvent(event) {
    switch (event) {
      case NavigationEvent.PREV:
        this._service.open(this._calendar.getPrev(this.model.firstDate, "m", 1));
        break;
      case NavigationEvent.NEXT:
        this._service.open(this._calendar.getNext(this.model.firstDate, "m", 1));
        break;
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(disabled) {
    this._service.set({
      disabled
    });
  }
  writeValue(value) {
    this._controlValue = NgbDate.from(this._ngbDateAdapter.fromModel(value));
    this._service.select(this._controlValue);
  }
  static {
    this.ɵfac = function NgbDatepicker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepicker)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbDatepicker,
      selectors: [["ngb-datepicker"]],
      contentQueries: function NgbDatepicker_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbDatepickerContent, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplateFromContent = _t.first);
        }
      },
      viewQuery: function NgbDatepicker_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 7)(_c4, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._defaultDayTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._contentEl = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function NgbDatepicker_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("disabled", ctx.model.disabled);
        }
      },
      inputs: {
        contentTemplate: "contentTemplate",
        dayTemplate: "dayTemplate",
        dayTemplateData: "dayTemplateData",
        displayMonths: "displayMonths",
        firstDayOfWeek: "firstDayOfWeek",
        footerTemplate: "footerTemplate",
        markDisabled: "markDisabled",
        maxDate: "maxDate",
        minDate: "minDate",
        navigation: "navigation",
        outsideDays: "outsideDays",
        showWeekNumbers: "showWeekNumbers",
        startDate: "startDate",
        weekdays: "weekdays"
      },
      outputs: {
        navigate: "navigate",
        dateSelect: "dateSelect"
      },
      exportAs: ["ngbDatepicker"],
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgbDatepicker),
        multi: true
      }, NgbDatepickerService]), ɵɵNgOnChangesFeature],
      decls: 10,
      vars: 9,
      consts: [["defaultDayTemplate", ""], ["defaultContentTemplate", ""], ["content", ""], [1, "ngb-dp-header"], [3, "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes"], [1, "ngb-dp-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", "ngTemplateOutletInjector"], [3, "ngTemplateOutlet"], ["ngbDatepickerDayView", "", 3, "date", "currentMonth", "selected", "disabled", "focused"], [1, "ngb-dp-month"], [1, "ngb-dp-month-name"], [3, "month"], [3, "navigate", "select", "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes"]],
      template: function NgbDatepicker_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NgbDatepicker_ng_template_0_Template, 1, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NgbDatepicker_ng_template_2_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
          ɵɵelementStart(4, "div", 3);
          ɵɵconditionalCreate(5, NgbDatepicker_Conditional_5_Template, 1, 7, "ngb-datepicker-navigation", 4);
          ɵɵelementEnd();
          ɵɵelementStart(6, "div", 5, 2);
          ɵɵtemplate(8, NgbDatepicker_ng_template_8_Template, 0, 0, "ng-template", 6);
          ɵɵelementEnd();
          ɵɵtemplate(9, NgbDatepicker_ng_template_9_Template, 0, 0, "ng-template", 7);
        }
        if (rf & 2) {
          const defaultContentTemplate_r9 = ɵɵreference(3);
          ɵɵadvance(5);
          ɵɵconditional(ctx.navigation !== "none" ? 5 : -1);
          ɵɵadvance();
          ɵɵclassProp("ngb-dp-months", !ctx.contentTemplate);
          ɵɵadvance(2);
          ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate || (ctx.contentTemplateFromContent == null ? null : ctx.contentTemplateFromContent.templateRef) || defaultContentTemplate_r9)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c5, ctx))("ngTemplateOutletInjector", ctx.injector);
          ɵɵadvance();
          ɵɵproperty("ngTemplateOutlet", ctx.footerTemplate);
        }
      },
      dependencies: [NgTemplateOutlet, NgbDatepickerDayView, NgbDatepickerMonth, NgbDatepickerNavigation],
      styles: ["ngb-datepicker{border:1px solid var(--bs-border-color);border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}ngb-datepicker.disabled .ngb-dp-weekday,ngb-datepicker.disabled .ngb-dp-week-number,ngb-datepicker.disabled .ngb-dp-month-name{color:var(--bs-text-muted)}.ngb-dp-body{z-index:1055}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:var(--bs-tertiary-bg)}.ngb-dp-months{display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:var(--bs-tertiary-bg)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepicker, [{
    type: Component,
    args: [{
      exportAs: "ngbDatepicker",
      selector: "ngb-datepicker",
      imports: [NgTemplateOutlet, NgbDatepickerDayView, NgbDatepickerMonth, NgbDatepickerNavigation],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class.disabled]": "model.disabled"
      },
      template: `
		<ng-template
			#defaultDayTemplate
			let-date="date"
			let-currentMonth="currentMonth"
			let-selected="selected"
			let-disabled="disabled"
			let-focused="focused"
		>
			<div
				ngbDatepickerDayView
				[date]="date"
				[currentMonth]="currentMonth"
				[selected]="selected"
				[disabled]="disabled"
				[focused]="focused"
			>
			</div>
		</ng-template>

		<ng-template #defaultContentTemplate>
			@for (month of model.months; track month) {
				<div class="ngb-dp-month">
					@if (navigation === 'none' || (displayMonths > 1 && navigation === 'select')) {
						<div class="ngb-dp-month-name">
							{{ i18n.getMonthLabel(month.firstDate) }}
						</div>
					}
					<ngb-datepicker-month [month]="month.firstDate" />
				</div>
			}
		</ng-template>

		<div class="ngb-dp-header">
			@if (navigation !== 'none') {
				<ngb-datepicker-navigation
					[date]="model.firstDate!"
					[months]="model.months"
					[disabled]="model.disabled"
					[showSelect]="model.navigation === 'select'"
					[prevDisabled]="model.prevDisabled"
					[nextDisabled]="model.nextDisabled"
					[selectBoxes]="model.selectBoxes"
					(navigate)="onNavigateEvent($event)"
					(select)="onNavigateDateSelect($event)"
				/>
			}
		</div>

		<div class="ngb-dp-content" [class.ngb-dp-months]="!contentTemplate" #content>
			<ng-template
				[ngTemplateOutlet]="contentTemplate || contentTemplateFromContent?.templateRef || defaultContentTemplate"
				[ngTemplateOutletContext]="{ $implicit: this }"
				[ngTemplateOutletInjector]="injector"
			/>
		</div>

		<ng-template [ngTemplateOutlet]="footerTemplate" />
	`,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgbDatepicker),
        multi: true
      }, NgbDatepickerService],
      styles: ["ngb-datepicker{border:1px solid var(--bs-border-color);border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}ngb-datepicker.disabled .ngb-dp-weekday,ngb-datepicker.disabled .ngb-dp-week-number,ngb-datepicker.disabled .ngb-dp-month-name{color:var(--bs-text-muted)}.ngb-dp-body{z-index:1055}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:var(--bs-tertiary-bg)}.ngb-dp-months{display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:var(--bs-tertiary-bg)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}\n"]
    }]
  }], () => [], {
    _defaultDayTemplate: [{
      type: ViewChild,
      args: ["defaultDayTemplate", {
        static: true
      }]
    }],
    _contentEl: [{
      type: ViewChild,
      args: ["content", {
        static: true
      }]
    }],
    contentTemplate: [{
      type: Input
    }],
    contentTemplateFromContent: [{
      type: ContentChild,
      args: [NgbDatepickerContent, {
        static: true
      }]
    }],
    dayTemplate: [{
      type: Input
    }],
    dayTemplateData: [{
      type: Input
    }],
    displayMonths: [{
      type: Input
    }],
    firstDayOfWeek: [{
      type: Input
    }],
    footerTemplate: [{
      type: Input
    }],
    markDisabled: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    navigation: [{
      type: Input
    }],
    outsideDays: [{
      type: Input
    }],
    showWeekNumbers: [{
      type: Input
    }],
    startDate: [{
      type: Input
    }],
    weekdays: [{
      type: Input
    }],
    navigate: [{
      type: Output
    }],
    dateSelect: [{
      type: Output
    }]
  });
})();
function NGB_DATEPICKER_PARSER_FORMATTER_FACTORY() {
  return new NgbDateISOParserFormatter();
}
var NgbDateParserFormatter = class _NgbDateParserFormatter {
  static {
    this.ɵfac = function NgbDateParserFormatter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDateParserFormatter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDateParserFormatter,
      factory: () => NGB_DATEPICKER_PARSER_FORMATTER_FACTORY(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateParserFormatter, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY
    }]
  }], null, null);
})();
var NgbDateISOParserFormatter = class _NgbDateISOParserFormatter extends NgbDateParserFormatter {
  parse(value) {
    if (value != null) {
      const dateParts = value.trim().split("-");
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return {
          year: toInteger(dateParts[0]),
          month: null,
          day: null
        };
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return {
          year: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          day: null
        };
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return {
          year: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          day: toInteger(dateParts[2])
        };
      }
    }
    return null;
  }
  format(date) {
    return date ? `${date.year}-${isNumber(date.month) ? padNumber(date.month) : ""}-${isNumber(date.day) ? padNumber(date.day) : ""}` : "";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbDateISOParserFormatter_BaseFactory;
      return function NgbDateISOParserFormatter_Factory(__ngFactoryType__) {
        return (ɵNgbDateISOParserFormatter_BaseFactory || (ɵNgbDateISOParserFormatter_BaseFactory = ɵɵgetInheritedFactory(_NgbDateISOParserFormatter)))(__ngFactoryType__ || _NgbDateISOParserFormatter);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDateISOParserFormatter,
      factory: _NgbDateISOParserFormatter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateISOParserFormatter, [{
    type: Injectable
  }], null, null);
})();
var NgbInputDatepickerConfig = class _NgbInputDatepickerConfig extends NgbDatepickerConfig {
  constructor() {
    super(...arguments);
    this.autoClose = true;
    this.placement = ["bottom-start", "bottom-end", "top-start", "top-end"];
    this.popperOptions = (options) => options;
    this.restoreFocus = true;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbInputDatepickerConfig_BaseFactory;
      return function NgbInputDatepickerConfig_Factory(__ngFactoryType__) {
        return (ɵNgbInputDatepickerConfig_BaseFactory || (ɵNgbInputDatepickerConfig_BaseFactory = ɵɵgetInheritedFactory(_NgbInputDatepickerConfig)))(__ngFactoryType__ || _NgbInputDatepickerConfig);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbInputDatepickerConfig,
      factory: _NgbInputDatepickerConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbInputDatepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbInputDatepicker = class _NgbInputDatepicker {
  constructor() {
    this._parserFormatter = inject(NgbDateParserFormatter);
    this._elRef = inject(ElementRef);
    this._vcRef = inject(ViewContainerRef);
    this._ngZone = inject(NgZone);
    this._calendar = inject(NgbCalendar);
    this._dateAdapter = inject(NgbDateAdapter);
    this._document = inject(DOCUMENT);
    this._changeDetector = inject(ChangeDetectorRef);
    this._injector = inject(Injector);
    this._config = inject(NgbInputDatepickerConfig);
    this._cRef = null;
    this._disabled = false;
    this._elWithFocus = null;
    this._model = null;
    this._positioning = ngbPositioning();
    this._destroyCloseHandlers$ = new Subject();
    this.autoClose = this._config.autoClose;
    this.placement = this._config.placement;
    this.popperOptions = this._config.popperOptions;
    this.container = this._config.container;
    this.positionTarget = this._config.positionTarget;
    this.dateSelect = new EventEmitter();
    this.navigate = new EventEmitter();
    this.closed = new EventEmitter();
    this._onChange = (_) => {
    };
    this._onTouched = () => {
    };
    this._validatorChange = () => {
    };
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value === "" || value && value !== "false";
    if (this.isOpen()) {
      this._cRef.instance.setDisabledState(this._disabled);
    }
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  registerOnValidatorChange(fn) {
    this._validatorChange = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  validate(c) {
    const {
      value
    } = c;
    if (value != null) {
      const ngbDate = this._fromDateStruct(this._dateAdapter.fromModel(value));
      if (!ngbDate) {
        return {
          ngbDate: {
            invalid: value
          }
        };
      }
      if (this.minDate && ngbDate.before(NgbDate.from(this.minDate))) {
        return {
          ngbDate: {
            minDate: {
              minDate: this.minDate,
              actual: value
            }
          }
        };
      }
      if (this.maxDate && ngbDate.after(NgbDate.from(this.maxDate))) {
        return {
          ngbDate: {
            maxDate: {
              maxDate: this.maxDate,
              actual: value
            }
          }
        };
      }
    }
    return null;
  }
  writeValue(value) {
    this._model = this._fromDateStruct(this._dateAdapter.fromModel(value));
    this._writeModelValue(this._model);
  }
  manualDateChange(value, updateView = false) {
    const inputValueChanged = value !== this._inputValue;
    if (inputValueChanged) {
      this._inputValue = value;
      this._model = this._fromDateStruct(this._parserFormatter.parse(value));
    }
    if (inputValueChanged || !updateView) {
      this._onChange(this._model ? this._dateAdapter.toModel(this._model) : value === "" ? null : value);
    }
    if (updateView && this._model) {
      this._writeModelValue(this._model);
    }
  }
  isOpen() {
    return !!this._cRef;
  }
  /**
   * Opens the datepicker popup.
   *
   * If the related form control contains a valid date, the corresponding month will be opened.
   */
  open() {
    if (!this.isOpen()) {
      this._cRef = this._vcRef.createComponent(NgbDatepicker, {
        injector: this._injector
      });
      this._applyPopupStyling(this._cRef.location.nativeElement);
      this._applyDatepickerInputs(this._cRef);
      this._subscribeForDatepickerOutputs(this._cRef.instance);
      this._cRef.instance.ngOnInit();
      this._cRef.instance.writeValue(this._dateAdapter.toModel(this._model));
      this._cRef.instance.registerOnChange((selectedDate) => {
        this.writeValue(selectedDate);
        this._onChange(selectedDate);
        this._onTouched();
      });
      this._cRef.changeDetectorRef.detectChanges();
      this._cRef.instance.setDisabledState(this.disabled);
      if (this.container === "body") {
        this._document.querySelector(this.container)?.appendChild(this._cRef.location.nativeElement);
      }
      this._elWithFocus = this._document.activeElement;
      ngbFocusTrap(this._ngZone, this._cRef.location.nativeElement, this.closed, true);
      setTimeout(() => this._cRef?.instance.focus());
      let hostElement;
      if (isString(this.positionTarget)) {
        hostElement = this._document.querySelector(this.positionTarget);
      } else if (this.positionTarget instanceof HTMLElement) {
        hostElement = this.positionTarget;
      } else {
        hostElement = this._elRef.nativeElement;
      }
      if (this.positionTarget && !hostElement) {
        throw new Error("ngbDatepicker could not find element declared in [positionTarget] to position against.");
      }
      this._ngZone.runOutsideAngular(() => {
        if (this._cRef && hostElement) {
          this._positioning.createPopper({
            hostElement,
            targetElement: this._cRef.location.nativeElement,
            placement: this.placement,
            updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 2])(options))
          });
          this._afterRenderRef = afterEveryRender({
            mixedReadWrite: () => {
              this._positioning.update();
            }
          }, {
            injector: this._injector
          });
        }
      });
      this._setCloseHandlers();
    }
  }
  /**
   * Closes the datepicker popup.
   */
  close() {
    if (this.isOpen()) {
      this._cRef?.destroy();
      this._cRef = null;
      this._positioning.destroy();
      this._afterRenderRef?.destroy();
      this._destroyCloseHandlers$.next();
      this.closed.emit();
      this._changeDetector.markForCheck();
      let elementToFocus = this._elWithFocus;
      if (isString(this.restoreFocus)) {
        elementToFocus = this._document.querySelector(this.restoreFocus);
      } else if (this.restoreFocus !== void 0) {
        elementToFocus = this.restoreFocus;
      }
      if (elementToFocus && elementToFocus["focus"]) {
        elementToFocus.focus();
      } else {
        this._document.body.focus();
      }
    }
  }
  /**
   * Toggles the datepicker popup.
   */
  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Navigates to the provided date.
   *
   * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
   * If nothing or invalid date provided calendar will open current month.
   *
   * Use the `[startDate]` input as an alternative.
   */
  navigateTo(date) {
    if (this.isOpen()) {
      this._cRef.instance.navigateTo(date);
    }
  }
  onBlur() {
    this._onTouched();
  }
  onFocus() {
    this._elWithFocus = this._elRef.nativeElement;
  }
  ngOnChanges(changes) {
    if (changes["minDate"] || changes["maxDate"]) {
      this._validatorChange();
      if (this.isOpen()) {
        if (changes["minDate"]) {
          this._cRef.setInput("minDate", this.minDate);
        }
        if (changes["maxDate"]) {
          this._cRef.setInput("maxDate", this.maxDate);
        }
      }
    }
    if (changes["datepickerClass"]) {
      const {
        currentValue,
        previousValue
      } = changes["datepickerClass"];
      this._applyPopupClass(currentValue, previousValue);
    }
    if (changes["autoClose"] && this.isOpen()) {
      this._setCloseHandlers();
    }
  }
  ngOnDestroy() {
    this.close();
  }
  _applyDatepickerInputs(datepickerComponentRef) {
    ["contentTemplate", "dayTemplate", "dayTemplateData", "displayMonths", "firstDayOfWeek", "footerTemplate", "markDisabled", "minDate", "maxDate", "navigation", "outsideDays", "showNavigation", "showWeekNumbers", "weekdays"].forEach((inputName) => {
      if (this[inputName] !== void 0) {
        datepickerComponentRef.setInput(inputName, this[inputName]);
      }
    });
    datepickerComponentRef.setInput("startDate", this.startDate || this._model);
  }
  _applyPopupClass(newClass, oldClass) {
    const popupEl = this._cRef?.location.nativeElement;
    if (popupEl) {
      if (newClass) {
        popupEl.classList.add(newClass);
      }
      if (oldClass) {
        popupEl.classList.remove(oldClass);
      }
    }
  }
  _applyPopupStyling(nativeElement) {
    nativeElement.classList.add("dropdown-menu", "show");
    if (this.container === "body") {
      nativeElement.classList.add("ngb-dp-body");
    }
    this._applyPopupClass(this.datepickerClass);
  }
  _subscribeForDatepickerOutputs(datepickerInstance) {
    datepickerInstance.navigate.subscribe((navigateEvent) => this.navigate.emit(navigateEvent));
    datepickerInstance.dateSelect.subscribe((date) => {
      this.dateSelect.emit(date);
      if (this.autoClose === true || this.autoClose === "inside") {
        this.close();
      }
    });
  }
  _writeModelValue(model) {
    const value = this._parserFormatter.format(model);
    this._inputValue = value;
    this._elRef.nativeElement.value = value;
    if (this.isOpen()) {
      this._cRef.instance.writeValue(this._dateAdapter.toModel(model));
      this._onTouched();
    }
  }
  _fromDateStruct(date) {
    const ngbDate = date ? new NgbDate(date.year, date.month, date.day) : null;
    return this._calendar.isValid(ngbDate) ? ngbDate : null;
  }
  _setCloseHandlers() {
    this._destroyCloseHandlers$.next();
    ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this._destroyCloseHandlers$, [], [this._elRef.nativeElement, this._cRef.location.nativeElement]);
  }
  static {
    this.ɵfac = function NgbInputDatepicker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbInputDatepicker)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbInputDatepicker,
      selectors: [["input", "ngbDatepicker", ""]],
      hostVars: 1,
      hostBindings: function NgbInputDatepicker_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function NgbInputDatepicker_input_HostBindingHandler($event) {
            return ctx.manualDateChange($event.target.value);
          })("change", function NgbInputDatepicker_change_HostBindingHandler($event) {
            return ctx.manualDateChange($event.target.value, true);
          })("focus", function NgbInputDatepicker_focus_HostBindingHandler() {
            return ctx.onFocus();
          })("blur", function NgbInputDatepicker_blur_HostBindingHandler() {
            return ctx.onBlur();
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("disabled", ctx.disabled);
        }
      },
      inputs: {
        autoClose: "autoClose",
        contentTemplate: "contentTemplate",
        datepickerClass: "datepickerClass",
        dayTemplate: "dayTemplate",
        dayTemplateData: "dayTemplateData",
        displayMonths: "displayMonths",
        firstDayOfWeek: "firstDayOfWeek",
        footerTemplate: "footerTemplate",
        markDisabled: "markDisabled",
        minDate: "minDate",
        maxDate: "maxDate",
        navigation: "navigation",
        outsideDays: "outsideDays",
        placement: "placement",
        popperOptions: "popperOptions",
        restoreFocus: "restoreFocus",
        showWeekNumbers: "showWeekNumbers",
        startDate: "startDate",
        container: "container",
        positionTarget: "positionTarget",
        weekdays: "weekdays",
        disabled: "disabled"
      },
      outputs: {
        dateSelect: "dateSelect",
        navigate: "navigate",
        closed: "closed"
      },
      exportAs: ["ngbDatepicker"],
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgbInputDatepicker),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _NgbInputDatepicker),
        multi: true
      }, {
        provide: NgbDatepickerConfig,
        useExisting: NgbInputDatepickerConfig
      }]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbInputDatepicker, [{
    type: Directive,
    args: [{
      selector: "input[ngbDatepicker]",
      exportAs: "ngbDatepicker",
      host: {
        "(input)": "manualDateChange($any($event).target.value)",
        "(change)": "manualDateChange($any($event).target.value, true)",
        "(focus)": "onFocus()",
        "(blur)": "onBlur()",
        "[disabled]": "disabled"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgbInputDatepicker),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => NgbInputDatepicker),
        multi: true
      }, {
        provide: NgbDatepickerConfig,
        useExisting: NgbInputDatepickerConfig
      }]
    }]
  }], null, {
    autoClose: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }],
    datepickerClass: [{
      type: Input
    }],
    dayTemplate: [{
      type: Input
    }],
    dayTemplateData: [{
      type: Input
    }],
    displayMonths: [{
      type: Input
    }],
    firstDayOfWeek: [{
      type: Input
    }],
    footerTemplate: [{
      type: Input
    }],
    markDisabled: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    navigation: [{
      type: Input
    }],
    outsideDays: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    popperOptions: [{
      type: Input
    }],
    restoreFocus: [{
      type: Input
    }],
    showWeekNumbers: [{
      type: Input
    }],
    startDate: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    positionTarget: [{
      type: Input
    }],
    weekdays: [{
      type: Input
    }],
    dateSelect: [{
      type: Output
    }],
    navigate: [{
      type: Output
    }],
    closed: [{
      type: Output
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var NgbCalendarHijri = class _NgbCalendarHijri extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
  getWeeksPerMonth() {
    return 6;
  }
  getNext(date, period = "d", number = 1) {
    date = new NgbDate(date.year, date.month, date.day);
    switch (period) {
      case "y":
        date = this._setYear(date, date.year + number);
        date.month = 1;
        date.day = 1;
        return date;
      case "m":
        date = this._setMonth(date, date.month + number);
        date.day = 1;
        return date;
      case "d":
        return this._setDay(date, date.day + number);
      default:
        return date;
    }
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    const day = this.toGregorian(date).getDay();
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    const date = week[thursdayIndex];
    const jsDate = this.toGregorian(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7));
    const time = jsDate.getTime();
    const MuhDate = this.toGregorian(new NgbDate(date.year, 1, 1));
    return Math.floor(Math.round((time - MuhDate.getTime()) / 864e5) / 7) + 1;
  }
  getToday() {
    return this.fromGregorian(/* @__PURE__ */ new Date());
  }
  isValid(date) {
    return date != null && isNumber(date.year) && isNumber(date.month) && isNumber(date.day) && !isNaN(this.toGregorian(date).getTime());
  }
  _setDay(date, day) {
    day = +day;
    let mDays = this.getDaysPerMonth(date.month, date.year);
    if (day <= 0) {
      while (day <= 0) {
        date = this._setMonth(date, date.month - 1);
        mDays = this.getDaysPerMonth(date.month, date.year);
        day += mDays;
      }
    } else if (day > mDays) {
      while (day > mDays) {
        day -= mDays;
        date = this._setMonth(date, date.month + 1);
        mDays = this.getDaysPerMonth(date.month, date.year);
      }
    }
    date.day = day;
    return date;
  }
  _setMonth(date, month) {
    month = +month;
    date.year = date.year + Math.floor((month - 1) / 12);
    date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
    return date;
  }
  _setYear(date, year) {
    date.year = +year;
    return date;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbCalendarHijri_BaseFactory;
      return function NgbCalendarHijri_Factory(__ngFactoryType__) {
        return (ɵNgbCalendarHijri_BaseFactory || (ɵNgbCalendarHijri_BaseFactory = ɵɵgetInheritedFactory(_NgbCalendarHijri)))(__ngFactoryType__ || _NgbCalendarHijri);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendarHijri,
      factory: _NgbCalendarHijri.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarHijri, [{
    type: Injectable
  }], null, null);
})();
function isIslamicLeapYear(hYear) {
  return (14 + 11 * hYear) % 30 < 11;
}
function isGregorianLeapYear$1(gDate) {
  const year = gDate.getFullYear();
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function getIslamicMonthStart(hYear, hMonth) {
  return Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30);
}
function getIslamicYearStart(year) {
  return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30);
}
function mod$1(a, b) {
  return a - b * Math.floor(a / b);
}
var GREGORIAN_EPOCH$1 = 17214255e-1;
var ISLAMIC_EPOCH = 19484395e-1;
var NgbCalendarIslamicCivil = class _NgbCalendarIslamicCivil extends NgbCalendarHijri {
  /**
   * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
   * `gDate` is a JS Date to be converted to Hijri.
   */
  fromGregorian(gDate) {
    const gYear = gDate.getFullYear(), gMonth = gDate.getMonth(), gDay = gDate.getDate();
    let julianDay = GREGORIAN_EPOCH$1 - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) + -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) + Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear$1(gDate) ? -1 : -2) + gDay);
    julianDay = Math.floor(julianDay) + 0.5;
    const days = julianDay - ISLAMIC_EPOCH;
    const hYear = Math.floor((30 * days + 10646) / 10631);
    let hMonth = Math.ceil((days - 29 - getIslamicYearStart(hYear)) / 29.5);
    hMonth = Math.min(hMonth, 11);
    const hDay = Math.ceil(days - getIslamicMonthStart(hYear, hMonth)) + 1;
    return new NgbDate(hYear, hMonth + 1, hDay);
  }
  /**
   * Returns the equivalent JS date value for a give input islamic(civil) date.
   * `hDate` is an islamic(civil) date to be converted to Gregorian.
   */
  toGregorian(hDate) {
    const hYear = hDate.year;
    const hMonth = hDate.month - 1;
    const hDay = hDate.day;
    const julianDay = hDay + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
    const wjd = Math.floor(julianDay - 0.5) + 0.5, depoch = wjd - GREGORIAN_EPOCH$1, quadricent = Math.floor(depoch / 146097), dqc = mod$1(depoch, 146097), cent = Math.floor(dqc / 36524), dcent = mod$1(dqc, 36524), quad = Math.floor(dcent / 1461), dquad = mod$1(dcent, 1461), yindex = Math.floor(dquad / 365);
    let year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
    if (!(cent === 4 || yindex === 4)) {
      year++;
    }
    const gYearStart = GREGORIAN_EPOCH$1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400);
    const yearday = wjd - gYearStart;
    const tjd = GREGORIAN_EPOCH$1 - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear$1(new Date(year, 3, 1)) ? -1 : -2) + 1);
    const leapadj = wjd < tjd ? 0 : isGregorianLeapYear$1(new Date(year, 3, 1)) ? 1 : 2;
    const month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
    const tjd2 = GREGORIAN_EPOCH$1 - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear$1(new Date(year, month - 1, 1)) ? -1 : -2) + 1);
    const day = wjd - tjd2 + 1;
    return new Date(year, month - 1, day);
  }
  /**
   * Returns the number of days in a specific Hijri month.
   * `month` is 1 for Muharram, 2 for Safar, etc.
   * `year` is any Hijri year.
   */
  getDaysPerMonth(month, year) {
    year = year + Math.floor(month / 13);
    month = (month - 1) % 12 + 1;
    let length = 29 + month % 2;
    if (month === 12 && isIslamicLeapYear(year)) {
      length++;
    }
    return length;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbCalendarIslamicCivil_BaseFactory;
      return function NgbCalendarIslamicCivil_Factory(__ngFactoryType__) {
        return (ɵNgbCalendarIslamicCivil_BaseFactory || (ɵNgbCalendarIslamicCivil_BaseFactory = ɵɵgetInheritedFactory(_NgbCalendarIslamicCivil)))(__ngFactoryType__ || _NgbCalendarIslamicCivil);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendarIslamicCivil,
      factory: _NgbCalendarIslamicCivil.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarIslamicCivil, [{
    type: Injectable
  }], null, null);
})();
var GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
var GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
var HIJRI_BEGIN = 1300;
var HIJRI_END = 1600;
var ONE_DAY = 1e3 * 60 * 60 * 24;
var MONTH_LENGTH = [
  // 1300-1304
  "101010101010",
  "110101010100",
  "111011001001",
  "011011010100",
  "011011101010",
  // 1305-1309
  "001101101100",
  "101010101101",
  "010101010101",
  "011010101001",
  "011110010010",
  // 1310-1314
  "101110101001",
  "010111010100",
  "101011011010",
  "010101011100",
  "110100101101",
  // 1315-1319
  "011010010101",
  "011101001010",
  "101101010100",
  "101101101010",
  "010110101101",
  // 1320-1324
  "010010101110",
  "101001001111",
  "010100010111",
  "011010001011",
  "011010100101",
  // 1325-1329
  "101011010101",
  "001011010110",
  "100101011011",
  "010010011101",
  "101001001101",
  // 1330-1334
  "110100100110",
  "110110010101",
  "010110101100",
  "100110110110",
  "001010111010",
  // 1335-1339
  "101001011011",
  "010100101011",
  "101010010101",
  "011011001010",
  "101011101001",
  // 1340-1344
  "001011110100",
  "100101110110",
  "001010110110",
  "100101010110",
  "101011001010",
  // 1345-1349
  "101110100100",
  "101111010010",
  "010111011001",
  "001011011100",
  "100101101101",
  // 1350-1354
  "010101001101",
  "101010100101",
  "101101010010",
  "101110100101",
  "010110110100",
  // 1355-1359
  "100110110110",
  "010101010111",
  "001010010111",
  "010101001011",
  "011010100011",
  // 1360-1364
  "011101010010",
  "101101100101",
  "010101101010",
  "101010101011",
  "010100101011",
  // 1365-1369
  "110010010101",
  "110101001010",
  "110110100101",
  "010111001010",
  "101011010110",
  // 1370-1374
  "100101010111",
  "010010101011",
  "100101001011",
  "101010100101",
  "101101010010",
  // 1375-1379
  "101101101010",
  "010101110101",
  "001001110110",
  "100010110111",
  "010001011011",
  // 1380-1384
  "010101010101",
  "010110101001",
  "010110110100",
  "100111011010",
  "010011011101",
  // 1385-1389
  "001001101110",
  "100100110110",
  "101010101010",
  "110101010100",
  "110110110010",
  // 1390-1394
  "010111010101",
  "001011011010",
  "100101011011",
  "010010101011",
  "101001010101",
  // 1395-1399
  "101101001001",
  "101101100100",
  "101101110001",
  "010110110100",
  "101010110101",
  // 1400-1404
  "101001010101",
  "110100100101",
  "111010010010",
  "111011001001",
  "011011010100",
  // 1405-1409
  "101011101001",
  "100101101011",
  "010010101011",
  "101010010011",
  "110101001001",
  // 1410-1414
  "110110100100",
  "110110110010",
  "101010111001",
  "010010111010",
  "101001011011",
  // 1415-1419
  "010100101011",
  "101010010101",
  "101100101010",
  "101101010101",
  "010101011100",
  // 1420-1424
  "010010111101",
  "001000111101",
  "100100011101",
  "101010010101",
  "101101001010",
  // 1425-1429
  "101101011010",
  "010101101101",
  "001010110110",
  "100100111011",
  "010010011011",
  // 1430-1434
  "011001010101",
  "011010101001",
  "011101010100",
  "101101101010",
  "010101101100",
  // 1435-1439
  "101010101101",
  "010101010101",
  "101100101001",
  "101110010010",
  "101110101001",
  // 1440-1444
  "010111010100",
  "101011011010",
  "010101011010",
  "101010101011",
  "010110010101",
  // 1445-1449
  "011101001001",
  "011101100100",
  "101110101010",
  "010110110101",
  "001010110110",
  // 1450-1454
  "101001010110",
  "111001001101",
  "101100100101",
  "101101010010",
  "101101101010",
  // 1455-1459
  "010110101101",
  "001010101110",
  "100100101111",
  "010010010111",
  "011001001011",
  // 1460-1464
  "011010100101",
  "011010101100",
  "101011010110",
  "010101011101",
  "010010011101",
  // 1465-1469
  "101001001101",
  "110100010110",
  "110110010101",
  "010110101010",
  "010110110101",
  // 1470-1474
  "001011011010",
  "100101011011",
  "010010101101",
  "010110010101",
  "011011001010",
  // 1475-1479
  "011011100100",
  "101011101010",
  "010011110101",
  "001010110110",
  "100101010110",
  // 1480-1484
  "101010101010",
  "101101010100",
  "101111010010",
  "010111011001",
  "001011101010",
  // 1485-1489
  "100101101101",
  "010010101101",
  "101010010101",
  "101101001010",
  "101110100101",
  // 1490-1494
  "010110110010",
  "100110110101",
  "010011010110",
  "101010010111",
  "010101000111",
  // 1495-1499
  "011010010011",
  "011101001001",
  "101101010101",
  "010101101010",
  "101001101011",
  // 1500-1504
  "010100101011",
  "101010001011",
  "110101000110",
  "110110100011",
  "010111001010",
  // 1505-1509
  "101011010110",
  "010011011011",
  "001001101011",
  "100101001011",
  "101010100101",
  // 1510-1514
  "101101010010",
  "101101101001",
  "010101110101",
  "000101110110",
  "100010110111",
  // 1515-1519
  "001001011011",
  "010100101011",
  "010101100101",
  "010110110100",
  "100111011010",
  // 1520-1524
  "010011101101",
  "000101101101",
  "100010110110",
  "101010100110",
  "110101010010",
  // 1525-1529
  "110110101001",
  "010111010100",
  "101011011010",
  "100101011011",
  "010010101011",
  // 1530-1534
  "011001010011",
  "011100101001",
  "011101100010",
  "101110101001",
  "010110110010",
  // 1535-1539
  "101010110101",
  "010101010101",
  "101100100101",
  "110110010010",
  "111011001001",
  // 1540-1544
  "011011010010",
  "101011101001",
  "010101101011",
  "010010101011",
  "101001010101",
  // 1545-1549
  "110100101001",
  "110101010100",
  "110110101010",
  "100110110101",
  "010010111010",
  // 1550-1554
  "101000111011",
  "010010011011",
  "101001001101",
  "101010101010",
  "101011010101",
  // 1555-1559
  "001011011010",
  "100101011101",
  "010001011110",
  "101000101110",
  "110010011010",
  // 1560-1564
  "110101010101",
  "011010110010",
  "011010111001",
  "010010111010",
  "101001011101",
  // 1565-1569
  "010100101101",
  "101010010101",
  "101101010010",
  "101110101000",
  "101110110100",
  // 1570-1574
  "010110111001",
  "001011011010",
  "100101011010",
  "101101001010",
  "110110100100",
  // 1575-1579
  "111011010001",
  "011011101000",
  "101101101010",
  "010101101101",
  "010100110101",
  // 1580-1584
  "011010010101",
  "110101001010",
  "110110101000",
  "110111010100",
  "011011011010",
  // 1585-1589
  "010101011011",
  "001010011101",
  "011000101011",
  "101100010101",
  "101101001010",
  // 1590-1594
  "101110010101",
  "010110101010",
  "101010101110",
  "100100101110",
  "110010001111",
  // 1595-1599
  "010100100111",
  "011010010101",
  "011010101010",
  "101011010110",
  "010101011101",
  // 1600
  "001010011101"
];
function getDaysDiff(date1, date2) {
  const time1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const time2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  const diff = Math.abs(time1 - time2);
  return Math.round(diff / ONE_DAY);
}
var NgbCalendarIslamicUmalqura = class _NgbCalendarIslamicUmalqura extends NgbCalendarIslamicCivil {
  /**
   * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
   * `gdate` is s JS Date to be converted to Hijri.
   */
  fromGregorian(gDate) {
    let hDay = 1, hMonth = 0, hYear = 1300;
    let daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);
    if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
      let year = 1300;
      for (let i = 0; i < MONTH_LENGTH.length; i++, year++) {
        for (let j = 0; j < 12; j++) {
          let numOfDays = +MONTH_LENGTH[i][j] + 29;
          if (daysDiff <= numOfDays) {
            hDay = daysDiff + 1;
            if (hDay > numOfDays) {
              hDay = 1;
              j++;
            }
            if (j > 11) {
              j = 0;
              year++;
            }
            hMonth = j;
            hYear = year;
            return new NgbDate(hYear, hMonth + 1, hDay);
          }
          daysDiff = daysDiff - numOfDays;
        }
      }
      return null;
    } else {
      return super.fromGregorian(gDate);
    }
  }
  /**
   * Converts the current Hijri date to Gregorian.
   */
  toGregorian(hDate) {
    const hYear = hDate.year;
    const hMonth = hDate.month - 1;
    const hDay = hDate.day;
    let gDate = new Date(GREGORIAN_FIRST_DATE);
    let dayDiff = hDay - 1;
    if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
      for (let y = 0; y < hYear - HIJRI_BEGIN; y++) {
        for (let m = 0; m < 12; m++) {
          dayDiff += +MONTH_LENGTH[y][m] + 29;
        }
      }
      for (let m = 0; m < hMonth; m++) {
        dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][m] + 29;
      }
      gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
    } else {
      gDate = super.toGregorian(hDate);
    }
    return gDate;
  }
  /**
   * Returns the number of days in a specific Hijri hMonth.
   * `hMonth` is 1 for Muharram, 2 for Safar, etc.
   * `hYear` is any Hijri hYear.
   */
  getDaysPerMonth(hMonth, hYear) {
    if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
      const pos = hYear - HIJRI_BEGIN;
      return +MONTH_LENGTH[pos][hMonth - 1] + 29;
    }
    return super.getDaysPerMonth(hMonth, hYear);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbCalendarIslamicUmalqura_BaseFactory;
      return function NgbCalendarIslamicUmalqura_Factory(__ngFactoryType__) {
        return (ɵNgbCalendarIslamicUmalqura_BaseFactory || (ɵNgbCalendarIslamicUmalqura_BaseFactory = ɵɵgetInheritedFactory(_NgbCalendarIslamicUmalqura)))(__ngFactoryType__ || _NgbCalendarIslamicUmalqura);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendarIslamicUmalqura,
      factory: _NgbCalendarIslamicUmalqura.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarIslamicUmalqura, [{
    type: Injectable
  }], null, null);
})();
function toGregorian$3(jalaliDate) {
  let jdn = jalaliToJulian(jalaliDate.year, jalaliDate.month, jalaliDate.day);
  let date = julianToGregorian$1(jdn);
  date.setHours(6, 30, 3, 200);
  return date;
}
function fromGregorian$3(gdate) {
  let g2d = gregorianToJulian$1(gdate.getFullYear(), gdate.getMonth() + 1, gdate.getDate());
  return julianToJalali(g2d);
}
function setJalaliYear(date, yearValue) {
  date.year = +yearValue;
  return date;
}
function setJalaliMonth(date, month) {
  month = +month;
  date.year = date.year + Math.floor((month - 1) / 12);
  date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
  return date;
}
function setJalaliDay(date, day) {
  let mDays = getDaysPerMonth$1(date.month, date.year);
  if (day <= 0) {
    while (day <= 0) {
      date = setJalaliMonth(date, date.month - 1);
      mDays = getDaysPerMonth$1(date.month, date.year);
      day += mDays;
    }
  } else if (day > mDays) {
    while (day > mDays) {
      day -= mDays;
      date = setJalaliMonth(date, date.month + 1);
      mDays = getDaysPerMonth$1(date.month, date.year);
    }
  }
  date.day = day;
  return date;
}
function mod(a, b) {
  return a - b * Math.floor(a / b);
}
function div(a, b) {
  return Math.trunc(a / b);
}
function jalCal(jalaliYear) {
  let breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
  const breaksLength = breaks.length;
  const gYear = jalaliYear + 621;
  let leapJ = -14;
  let jp = breaks[0];
  if (jalaliYear < jp || jalaliYear >= breaks[breaksLength - 1]) {
    throw new Error("Invalid Jalali year " + jalaliYear);
  }
  let jump;
  for (let i = 1; i < breaksLength; i += 1) {
    const jm = breaks[i];
    jump = jm - jp;
    if (jalaliYear < jm) {
      break;
    }
    leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
    jp = jm;
  }
  let n = jalaliYear - jp;
  leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
  if (mod(jump, 33) === 4 && jump - n === 4) {
    leapJ += 1;
  }
  const leapG = div(gYear, 4) - div((div(gYear, 100) + 1) * 3, 4) - 150;
  const march = 20 + leapJ - leapG;
  if (jump - n < 6) {
    n = n - jump + div(jump + 4, 33) * 33;
  }
  let leap = mod(mod(n + 1, 33) - 1, 4);
  if (leap === -1) {
    leap = 4;
  }
  return {
    leap,
    gy: gYear,
    march
  };
}
function julianToGregorian$1(julianDayNumber) {
  let j = 4 * julianDayNumber + 139361631;
  j = j + div(div(4 * julianDayNumber + 183187720, 146097) * 3, 4) * 4 - 3908;
  const i = div(mod(j, 1461), 4) * 5 + 308;
  const gDay = div(mod(i, 153), 5) + 1;
  const gMonth = mod(div(i, 153), 12) + 1;
  const gYear = div(j, 1461) - 100100 + div(8 - gMonth, 6);
  return new Date(gYear, gMonth - 1, gDay);
}
function gregorianToJulian$1(gy, gm, gd) {
  let d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
  return d;
}
function julianToJalali(julianDayNumber) {
  let gy = julianToGregorian$1(julianDayNumber).getFullYear(), jalaliYear = gy - 621, r = jalCal(jalaliYear), gregorianDay = gregorianToJulian$1(gy, 3, r.march), jalaliDay, jalaliMonth, numberOfDays;
  numberOfDays = julianDayNumber - gregorianDay;
  if (numberOfDays >= 0) {
    if (numberOfDays <= 185) {
      jalaliMonth = 1 + div(numberOfDays, 31);
      jalaliDay = mod(numberOfDays, 31) + 1;
      return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
    } else {
      numberOfDays -= 186;
    }
  } else {
    jalaliYear -= 1;
    numberOfDays += 179;
    if (r.leap === 1) {
      numberOfDays += 1;
    }
  }
  jalaliMonth = 7 + div(numberOfDays, 30);
  jalaliDay = mod(numberOfDays, 30) + 1;
  return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
}
function jalaliToJulian(jYear, jMonth, jDay) {
  let r = jalCal(jYear);
  return gregorianToJulian$1(r.gy, 3, r.march) + (jMonth - 1) * 31 - div(jMonth, 7) * (jMonth - 7) + jDay - 1;
}
function getDaysPerMonth$1(month, year) {
  if (month <= 6) {
    return 31;
  }
  if (month <= 11) {
    return 30;
  }
  if (jalCal(year).leap === 0) {
    return 30;
  }
  return 29;
}
var NgbCalendarPersian = class _NgbCalendarPersian extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
  getWeeksPerMonth() {
    return 6;
  }
  getNext(date, period = "d", number = 1) {
    date = new NgbDate(date.year, date.month, date.day);
    switch (period) {
      case "y":
        date = setJalaliYear(date, date.year + number);
        date.month = 1;
        date.day = 1;
        return date;
      case "m":
        date = setJalaliMonth(date, date.month + number);
        date.day = 1;
        return date;
      case "d":
        return setJalaliDay(date, date.day + number);
      default:
        return date;
    }
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    const day = toGregorian$3(date).getDay();
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    const date = week[thursdayIndex];
    const jsDate = toGregorian$3(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7));
    const time = jsDate.getTime();
    const startDate = toGregorian$3(new NgbDate(date.year, 1, 1));
    return Math.floor(Math.round((time - startDate.getTime()) / 864e5) / 7) + 1;
  }
  getToday() {
    return fromGregorian$3(/* @__PURE__ */ new Date());
  }
  isValid(date) {
    return date != null && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) && !isNaN(toGregorian$3(date).getTime());
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbCalendarPersian_BaseFactory;
      return function NgbCalendarPersian_Factory(__ngFactoryType__) {
        return (ɵNgbCalendarPersian_BaseFactory || (ɵNgbCalendarPersian_BaseFactory = ɵɵgetInheritedFactory(_NgbCalendarPersian)))(__ngFactoryType__ || _NgbCalendarPersian);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendarPersian,
      factory: _NgbCalendarPersian.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarPersian, [{
    type: Injectable
  }], null, null);
})();
var PARTS_PER_HOUR = 1080;
var PARTS_PER_DAY = 24 * PARTS_PER_HOUR;
var PARTS_FRACTIONAL_MONTH = 12 * PARTS_PER_HOUR + 793;
var PARTS_PER_MONTH = 29 * PARTS_PER_DAY + PARTS_FRACTIONAL_MONTH;
var BAHARAD = 11 * PARTS_PER_HOUR + 204;
var HEBREW_DAY_ON_JAN_1_1970 = 2092591;
var GREGORIAN_EPOCH = 17214255e-1;
function isGregorianLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function numberOfFirstDayInYear(year) {
  let monthsBeforeYear = Math.floor((235 * year - 234) / 19);
  let fractionalMonthsBeforeYear = monthsBeforeYear * PARTS_FRACTIONAL_MONTH + BAHARAD;
  let dayNumber = monthsBeforeYear * 29 + Math.floor(fractionalMonthsBeforeYear / PARTS_PER_DAY);
  let timeOfDay = fractionalMonthsBeforeYear % PARTS_PER_DAY;
  let dayOfWeek = dayNumber % 7;
  if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6) {
    dayNumber++;
    dayOfWeek = dayNumber % 7;
  }
  if (dayOfWeek === 1 && timeOfDay > 15 * PARTS_PER_HOUR + 204 && !isHebrewLeapYear(year)) {
    dayNumber += 2;
  } else if (dayOfWeek === 0 && timeOfDay > 21 * PARTS_PER_HOUR + 589 && isHebrewLeapYear(year - 1)) {
    dayNumber++;
  }
  return dayNumber;
}
function getDaysInGregorianMonth(month, year) {
  let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (isGregorianLeapYear(year)) {
    days[1]++;
  }
  return days[month - 1];
}
function getHebrewMonths(year) {
  return isHebrewLeapYear(year) ? 13 : 12;
}
function getDaysInHebrewYear(year) {
  return numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
}
function isHebrewLeapYear(year) {
  if (year != null) {
    let b = (year * 12 + 17) % 19;
    return b >= (b < 0 ? -7 : 12);
  }
  return false;
}
function getDaysInHebrewMonth(month, year) {
  let yearLength = numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
  let yearType = (yearLength <= 380 ? yearLength : yearLength - 30) - 353;
  let leapYear = isHebrewLeapYear(year);
  let daysInMonth = leapYear ? [30, 29, 29, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29] : [30, 29, 29, 29, 30, 29, 30, 29, 30, 29, 30, 29];
  if (yearType > 0) {
    daysInMonth[2]++;
  }
  if (yearType > 1) {
    daysInMonth[1]++;
  }
  return daysInMonth[month - 1];
}
function getDayNumberInHebrewYear(date) {
  let numberOfDay = 0;
  for (let i = 1; i < date.month; i++) {
    numberOfDay += getDaysInHebrewMonth(i, date.year);
  }
  return numberOfDay + date.day;
}
function setHebrewMonth(date, val) {
  let after = val >= 0;
  if (!after) {
    val = -val;
  }
  while (val > 0) {
    if (after) {
      if (val > getHebrewMonths(date.year) - date.month) {
        val -= getHebrewMonths(date.year) - date.month + 1;
        date.year++;
        date.month = 1;
      } else {
        date.month += val;
        val = 0;
      }
    } else {
      if (val >= date.month) {
        date.year--;
        val -= date.month;
        date.month = getHebrewMonths(date.year);
      } else {
        date.month -= val;
        val = 0;
      }
    }
  }
  return date;
}
function setHebrewDay(date, val) {
  let after = val >= 0;
  if (!after) {
    val = -val;
  }
  while (val > 0) {
    if (after) {
      if (val > getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date)) {
        val -= getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date) + 1;
        date.year++;
        date.month = 1;
        date.day = 1;
      } else if (val > getDaysInHebrewMonth(date.month, date.year) - date.day) {
        val -= getDaysInHebrewMonth(date.month, date.year) - date.day + 1;
        date.month++;
        date.day = 1;
      } else {
        date.day += val;
        val = 0;
      }
    } else {
      if (val >= date.day) {
        val -= date.day;
        date.month--;
        if (date.month === 0) {
          date.year--;
          date.month = getHebrewMonths(date.year);
        }
        date.day = getDaysInHebrewMonth(date.month, date.year);
      } else {
        date.day -= val;
        val = 0;
      }
    }
  }
  return date;
}
function fromGregorian$2(gdate) {
  const date = new Date(gdate);
  const gYear = date.getFullYear(), gMonth = date.getMonth(), gDay = date.getDate();
  let julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) - Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) + Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(gYear) ? -1 : -2) + gDay);
  julianDay = Math.floor(julianDay + 0.5);
  let daysSinceHebEpoch = julianDay - 347997;
  let monthsSinceHebEpoch = Math.floor(daysSinceHebEpoch * PARTS_PER_DAY / PARTS_PER_MONTH);
  let hYear = Math.floor((monthsSinceHebEpoch * 19 + 234) / 235) + 1;
  let firstDayOfThisYear = numberOfFirstDayInYear(hYear);
  let dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
  while (dayOfYear < 1) {
    hYear--;
    firstDayOfThisYear = numberOfFirstDayInYear(hYear);
    dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
  }
  let hMonth = 1;
  let hDay = dayOfYear;
  while (hDay > getDaysInHebrewMonth(hMonth, hYear)) {
    hDay -= getDaysInHebrewMonth(hMonth, hYear);
    hMonth++;
  }
  return new NgbDate(hYear, hMonth, hDay);
}
function toGregorian$2(hebrewDate) {
  const hYear = hebrewDate.year;
  const hMonth = hebrewDate.month;
  const hDay = hebrewDate.day;
  let days = numberOfFirstDayInYear(hYear);
  for (let i = 1; i < hMonth; i++) {
    days += getDaysInHebrewMonth(i, hYear);
  }
  days += hDay;
  let diffDays = days - HEBREW_DAY_ON_JAN_1_1970;
  let after = diffDays >= 0;
  if (!after) {
    diffDays = -diffDays;
  }
  let gYear = 1970;
  let gMonth = 1;
  let gDay = 1;
  while (diffDays > 0) {
    if (after) {
      if (diffDays >= (isGregorianLeapYear(gYear) ? 366 : 365)) {
        diffDays -= isGregorianLeapYear(gYear) ? 366 : 365;
        gYear++;
      } else if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
        diffDays -= getDaysInGregorianMonth(gMonth, gYear);
        gMonth++;
      } else {
        gDay += diffDays;
        diffDays = 0;
      }
    } else {
      if (diffDays >= (isGregorianLeapYear(gYear - 1) ? 366 : 365)) {
        diffDays -= isGregorianLeapYear(gYear - 1) ? 366 : 365;
        gYear--;
      } else {
        if (gMonth > 1) {
          gMonth--;
        } else {
          gMonth = 12;
          gYear--;
        }
        if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
          diffDays -= getDaysInGregorianMonth(gMonth, gYear);
        } else {
          gDay = getDaysInGregorianMonth(gMonth, gYear) - diffDays + 1;
          diffDays = 0;
        }
      }
    }
  }
  return new Date(gYear, gMonth - 1, gDay);
}
function hebrewNumerals(numerals) {
  if (!numerals) {
    return "";
  }
  const hArray0_9 = ["", "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט"];
  const hArray10_19 = ["י", "יא", "יב", "יג", "יד", "טו", "טז", "יז", "יח", "יט"];
  const hArray20_90 = ["", "", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ"];
  const hArray100_900 = ["", "ק", "ר", "ש", "ת", "תק", "תר", "תש", "תת", "תתק"];
  const hArray1000_9000 = ["", "א", "ב", "בא", "בב", "ה", "הא", "הב", "הבא", "הבב"];
  const geresh = "׳", gershaim = "״";
  let mem = 0;
  let result = [];
  let step = 0;
  while (numerals > 0) {
    let m = numerals % 10;
    if (step === 0) {
      mem = m;
    } else if (step === 1) {
      if (m !== 1) {
        result.unshift(hArray20_90[m], hArray0_9[mem]);
      } else {
        result.unshift(hArray10_19[mem]);
      }
    } else if (step === 2) {
      result.unshift(hArray100_900[m]);
    } else {
      if (m !== 5) {
        result.unshift(hArray1000_9000[m], geresh, " ");
      }
      break;
    }
    numerals = Math.floor(numerals / 10);
    if (step === 0 && numerals === 0) {
      result.unshift(hArray0_9[m]);
    }
    step++;
  }
  result = result.join("").split("");
  if (result.length === 1) {
    result.push(geresh);
  } else if (result.length > 1) {
    result.splice(result.length - 1, 0, gershaim);
  }
  return result.join("");
}
var NgbCalendarHebrew = class _NgbCalendarHebrew extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths(year) {
    if (year && isHebrewLeapYear(year)) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    } else {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    }
  }
  getWeeksPerMonth() {
    return 6;
  }
  isValid(date) {
    if (date != null) {
      let b = isNumber(date.year) && isNumber(date.month) && isNumber(date.day);
      b = b && date.month > 0 && date.month <= (isHebrewLeapYear(date.year) ? 13 : 12);
      b = b && date.day > 0 && date.day <= getDaysInHebrewMonth(date.month, date.year);
      return b && !isNaN(toGregorian$2(date).getTime());
    }
    return false;
  }
  getNext(date, period = "d", number = 1) {
    date = new NgbDate(date.year, date.month, date.day);
    switch (period) {
      case "y":
        date.year += number;
        date.month = 1;
        date.day = 1;
        return date;
      case "m":
        date = setHebrewMonth(date, number);
        date.day = 1;
        return date;
      case "d":
        return setHebrewDay(date, number);
      default:
        return date;
    }
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    const day = toGregorian$2(date).getDay();
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    const date = week[week.length - 1];
    return Math.ceil(getDayNumberInHebrewYear(date) / 7);
  }
  getToday() {
    return fromGregorian$2(/* @__PURE__ */ new Date());
  }
  /**
   * @since 3.4.0
   */
  toGregorian(date) {
    return fromJSDate(toGregorian$2(date));
  }
  /**
   * @since 3.4.0
   */
  fromGregorian(date) {
    return fromGregorian$2(toJSDate(date));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbCalendarHebrew_BaseFactory;
      return function NgbCalendarHebrew_Factory(__ngFactoryType__) {
        return (ɵNgbCalendarHebrew_BaseFactory || (ɵNgbCalendarHebrew_BaseFactory = ɵɵgetInheritedFactory(_NgbCalendarHebrew)))(__ngFactoryType__ || _NgbCalendarHebrew);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendarHebrew,
      factory: _NgbCalendarHebrew.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarHebrew, [{
    type: Injectable
  }], null, null);
})();
var WEEKDAYS$1 = ["שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"];
var MONTHS$1 = ["תשרי", "חשון", "כסלו", "טבת", "שבט", "אדר", "ניסן", "אייר", "סיון", "תמוז", "אב", "אלול"];
var MONTHS_LEAP = ["תשרי", "חשון", "כסלו", "טבת", "שבט", "אדר א׳", "אדר ב׳", "ניסן", "אייר", "סיון", "תמוז", "אב", "אלול"];
var NgbDatepickerI18nHebrew = class _NgbDatepickerI18nHebrew extends NgbDatepickerI18n {
  getMonthShortName(month, year) {
    return this.getMonthFullName(month, year);
  }
  getMonthFullName(month, year) {
    return isHebrewLeapYear(year) ? MONTHS_LEAP[month - 1] || "" : MONTHS$1[month - 1] || "";
  }
  getWeekdayLabel(weekday, width) {
    return WEEKDAYS$1[weekday - 1] || "";
  }
  getDayAriaLabel(date) {
    return `${hebrewNumerals(date.day)} ${this.getMonthFullName(date.month, date.year)} ${hebrewNumerals(date.year)}`;
  }
  getDayNumerals(date) {
    return hebrewNumerals(date.day);
  }
  getWeekNumerals(weekNumber) {
    return hebrewNumerals(weekNumber);
  }
  getYearNumerals(year) {
    return hebrewNumerals(year);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbDatepickerI18nHebrew_BaseFactory;
      return function NgbDatepickerI18nHebrew_Factory(__ngFactoryType__) {
        return (ɵNgbDatepickerI18nHebrew_BaseFactory || (ɵNgbDatepickerI18nHebrew_BaseFactory = ɵɵgetInheritedFactory(_NgbDatepickerI18nHebrew)))(__ngFactoryType__ || _NgbDatepickerI18nHebrew);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDatepickerI18nHebrew,
      factory: _NgbDatepickerI18nHebrew.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerI18nHebrew, [{
    type: Injectable
  }], null, null);
})();
function toGregorian$1(date) {
  return new Date(date.year - 543, date.month - 1, date.day);
}
function fromGregorian$1(gdate) {
  return new NgbDate(gdate.getFullYear() + 543, gdate.getMonth() + 1, gdate.getDate());
}
var NgbCalendarBuddhist = class _NgbCalendarBuddhist extends NgbCalendarGregorian {
  getToday() {
    return fromGregorian$1(/* @__PURE__ */ new Date());
  }
  getNext(date, period = "d", number = 1) {
    let jsDate = toGregorian$1(date);
    let checkMonth = true;
    let expectedMonth = jsDate.getMonth();
    switch (period) {
      case "y":
        jsDate.setFullYear(jsDate.getFullYear() + number);
        break;
      case "m":
        expectedMonth += number;
        jsDate.setMonth(expectedMonth);
        expectedMonth = expectedMonth % 12;
        if (expectedMonth < 0) {
          expectedMonth = expectedMonth + 12;
        }
        break;
      case "d":
        jsDate.setDate(jsDate.getDate() + number);
        checkMonth = false;
        break;
      default:
        return date;
    }
    if (checkMonth && jsDate.getMonth() !== expectedMonth) {
      jsDate.setDate(0);
    }
    return fromGregorian$1(jsDate);
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    let jsDate = toGregorian$1(date);
    let day = jsDate.getDay();
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    let date = week[thursdayIndex];
    const jsDate = toGregorian$1(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7));
    const time = jsDate.getTime();
    jsDate.setMonth(0);
    jsDate.setDate(1);
    return Math.floor(Math.round((time - jsDate.getTime()) / 864e5) / 7) + 1;
  }
  isValid(date) {
    if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
      return false;
    }
    if (date.year === 0) {
      return false;
    }
    const jsDate = toGregorian$1(date);
    return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year - 543 && jsDate.getMonth() + 1 === date.month && jsDate.getDate() === date.day;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbCalendarBuddhist_BaseFactory;
      return function NgbCalendarBuddhist_Factory(__ngFactoryType__) {
        return (ɵNgbCalendarBuddhist_BaseFactory || (ɵNgbCalendarBuddhist_BaseFactory = ɵɵgetInheritedFactory(_NgbCalendarBuddhist)))(__ngFactoryType__ || _NgbCalendarBuddhist);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendarBuddhist,
      factory: _NgbCalendarBuddhist.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarBuddhist, [{
    type: Injectable
  }], null, null);
})();
var JD_EPOCH = 17242205e-1;
var DAYSPERMONTH = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 5];
function isEthiopianLeapYear(year) {
  if (year != null) {
    return year % 4 == 3 || year % 4 == -1;
  }
  return false;
}
function setEthiopianYear(date, yearValue) {
  date.year = +yearValue;
  return date;
}
function setEthiopianMonth(date, val) {
  val = +val;
  date.year = date.year + Math.floor((val - 1) / 13);
  date.month = Math.floor(((val - 1) % 13 + 13) % 13) + 1;
  return date;
}
function setEthiopianDay(date, day) {
  let mDays = getDaysPerMonth(date.month, date.year);
  if (day <= 0) {
    while (day <= 0) {
      date = setEthiopianMonth(date, date.month - 1);
      mDays = getDaysPerMonth(date.month, date.year);
      day += mDays;
    }
  } else if (day > mDays) {
    while (day > mDays) {
      day -= mDays;
      date = setEthiopianMonth(date, date.month + 1);
      mDays = getDaysPerMonth(date.month, date.year);
    }
  }
  date.day = day;
  return date;
}
function getDaysPerMonth(month, year) {
  let leapYear = isEthiopianLeapYear(year);
  return DAYSPERMONTH[month - 1] + (month === 13 && leapYear ? 1 : 0);
}
function toGregorian(ethiopianDate) {
  let jdn = ethiopianToJulian(ethiopianDate.year, ethiopianDate.month, ethiopianDate.day);
  let date = julianToGregorian(jdn);
  date.setHours(6, 30, 3, 200);
  return date;
}
function fromGregorian(gdate) {
  let g2d = gregorianToJulian(gdate.getFullYear(), gdate.getMonth() + 1, gdate.getDate());
  return juilianToEthiopia(g2d);
}
function ethiopianToJulian(year, month, day) {
  if (year < 0) {
    year++;
  }
  return day + (month - 1) * 30 + (year - 1) * 365 + Math.floor(year / 4) + JD_EPOCH - 1;
}
function juilianToEthiopia(jd) {
  let c = Math.floor(jd) + 0.5 - JD_EPOCH;
  let year = Math.floor((c - Math.floor((c + 366) / 1461)) / 365) + 1;
  if (year <= 0) {
    year--;
  }
  c = Math.floor(jd) + 0.5 - ethiopianToJulian(year, 1, 1);
  let month = Math.floor(c / 30) + 1;
  let day = c - (month - 1) * 30 + 1;
  return new NgbDate(year, month, day);
}
function julianToGregorian(jd) {
  let z = Math.floor(jd + 0.5);
  let a = Math.floor((z - 186721625e-2) / 36524.25);
  a = z + 1 + a - Math.floor(a / 4);
  let b = a + 1524;
  let c = Math.floor((b - 122.1) / 365.25);
  let d = Math.floor(365.25 * c);
  let e = Math.floor((b - d) / 30.6001);
  let day = b - d - Math.floor(e * 30.6001);
  let month = e - (e > 13.5 ? 13 : 1);
  let year = c - (month > 2.5 ? 4716 : 4715);
  if (year <= 0) {
    year--;
  }
  return new Date(year, month, day);
}
function gregorianToJulian(year, month, day) {
  if (year < 0) {
    year++;
  }
  if (month < 3) {
    month += 12;
    year--;
  }
  let a = Math.floor(year / 100);
  let b = 2 - a + Math.floor(a / 4);
  return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + b - 1524.5;
}
var NgbCalendarEthiopian = class _NgbCalendarEthiopian extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths(year) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  }
  getNext(date, period = "d", number = 1) {
    date = new NgbDate(date.year, date.month, date.day);
    switch (period) {
      case "y":
        date = setEthiopianYear(date, date.year + number);
        date.month = 1;
        date.day = 1;
        return date;
      case "m":
        date = setEthiopianMonth(date, date.month + number);
        date.day = 1;
        return date;
      case "d":
        return setEthiopianDay(date, date.day + number);
      default:
        return date;
    }
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    const dt = Math.floor(ethiopianToJulian(date.year, date.month, date.day) + 3) % 7;
    return dt === 0 ? 7 : dt;
  }
  getWeekNumber(week, firstDayOfWeek) {
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    const date = week[thursdayIndex];
    const jsDate = toGregorian(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7));
    const time = jsDate.getTime();
    const startDate = toGregorian(new NgbDate(date.year, 1, 1));
    return Math.floor(Math.round((time - startDate.getTime()) / 864e5) / 7) + 1;
  }
  getWeeksPerMonth() {
    return 6;
  }
  getToday() {
    return fromGregorian(/* @__PURE__ */ new Date());
  }
  isValid(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) && !isNaN(toGregorian(date).getTime());
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbCalendarEthiopian_BaseFactory;
      return function NgbCalendarEthiopian_Factory(__ngFactoryType__) {
        return (ɵNgbCalendarEthiopian_BaseFactory || (ɵNgbCalendarEthiopian_BaseFactory = ɵɵgetInheritedFactory(_NgbCalendarEthiopian)))(__ngFactoryType__ || _NgbCalendarEthiopian);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendarEthiopian,
      factory: _NgbCalendarEthiopian.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarEthiopian, [{
    type: Injectable
  }], null, null);
})();
var WEEKDAYS = ["እሑድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሓሙስ", "ዓርብ", "ቅዳሜ"];
var MONTHS = ["መስከረም", "ጥቅምት", "ኅዳር", "ታህሣሥ", "ጥር", "የካቲት", "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜ"];
var NgbDatepickerI18nAmharic = class _NgbDatepickerI18nAmharic extends NgbDatepickerI18n {
  getMonthShortName(month, year) {
    return this.getMonthFullName(month, year);
  }
  getMonthFullName(month, year) {
    return MONTHS[month - 1];
  }
  getWeekdayLabel(weekday, width) {
    return WEEKDAYS[weekday - 1];
  }
  getDayAriaLabel(date) {
    return `${date.day} ${this.getMonthFullName(date.month, date.year)} ${date.year}`;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbDatepickerI18nAmharic_BaseFactory;
      return function NgbDatepickerI18nAmharic_Factory(__ngFactoryType__) {
        return (ɵNgbDatepickerI18nAmharic_BaseFactory || (ɵNgbDatepickerI18nAmharic_BaseFactory = ɵɵgetInheritedFactory(_NgbDatepickerI18nAmharic)))(__ngFactoryType__ || _NgbDatepickerI18nAmharic);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDatepickerI18nAmharic,
      factory: _NgbDatepickerI18nAmharic.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerI18nAmharic, [{
    type: Injectable
  }], null, null);
})();
var NgbDateNativeAdapter = class _NgbDateNativeAdapter extends NgbDateAdapter {
  /**
   * Converts a native `Date` to a `NgbDateStruct`.
   */
  fromModel(date) {
    return date instanceof Date && !isNaN(date.getTime()) ? this._fromNativeDate(date) : null;
  }
  /**
   * Converts a `NgbDateStruct` to a native `Date`.
   */
  toModel(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? this._toNativeDate(date) : null;
  }
  _fromNativeDate(date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }
  _toNativeDate(date) {
    const jsDate = new Date(date.year, date.month - 1, date.day, 12);
    jsDate.setFullYear(date.year);
    return jsDate;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbDateNativeAdapter_BaseFactory;
      return function NgbDateNativeAdapter_Factory(__ngFactoryType__) {
        return (ɵNgbDateNativeAdapter_BaseFactory || (ɵNgbDateNativeAdapter_BaseFactory = ɵɵgetInheritedFactory(_NgbDateNativeAdapter)))(__ngFactoryType__ || _NgbDateNativeAdapter);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDateNativeAdapter,
      factory: _NgbDateNativeAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateNativeAdapter, [{
    type: Injectable
  }], null, null);
})();
var NgbDateNativeUTCAdapter = class _NgbDateNativeUTCAdapter extends NgbDateNativeAdapter {
  _fromNativeDate(date) {
    return {
      year: date.getUTCFullYear(),
      month: date.getUTCMonth() + 1,
      day: date.getUTCDate()
    };
  }
  _toNativeDate(date) {
    const jsDate = new Date(Date.UTC(date.year, date.month - 1, date.day));
    jsDate.setUTCFullYear(date.year);
    return jsDate;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbDateNativeUTCAdapter_BaseFactory;
      return function NgbDateNativeUTCAdapter_Factory(__ngFactoryType__) {
        return (ɵNgbDateNativeUTCAdapter_BaseFactory || (ɵNgbDateNativeUTCAdapter_BaseFactory = ɵɵgetInheritedFactory(_NgbDateNativeUTCAdapter)))(__ngFactoryType__ || _NgbDateNativeUTCAdapter);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDateNativeUTCAdapter,
      factory: _NgbDateNativeUTCAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateNativeUTCAdapter, [{
    type: Injectable
  }], null, null);
})();
var NGB_DATEPICKER_DIRECTIVES = [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth];
var NgbDatepickerModule = class _NgbDatepickerModule {
  static {
    this.ɵfac = function NgbDatepickerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbDatepickerModule,
      imports: [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth],
      exports: [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerModule, [{
    type: NgModule,
    args: [{
      exports: NGB_DATEPICKER_DIRECTIVES,
      imports: NGB_DATEPICKER_DIRECTIVES
    }]
  }], null, null);
})();

export {
  NgbDate,
  NgbCalendar,
  NgbCalendarGregorian,
  NgbDatepickerI18n,
  NgbDatepickerI18nDefault,
  NgbDatepickerConfig,
  NgbDateAdapter,
  NgbDateStructAdapter,
  NgbDatepickerKeyboardService,
  NgbDatepickerContent,
  NgbDatepickerMonth,
  NgbDatepicker,
  NgbDateParserFormatter,
  NgbInputDatepickerConfig,
  NgbInputDatepicker,
  NgbCalendarIslamicCivil,
  NgbCalendarIslamicUmalqura,
  NgbCalendarPersian,
  NgbCalendarHebrew,
  NgbDatepickerI18nHebrew,
  NgbCalendarBuddhist,
  NgbCalendarEthiopian,
  NgbDatepickerI18nAmharic,
  NgbDateNativeAdapter,
  NgbDateNativeUTCAdapter,
  NgbDatepickerModule
};
//# sourceMappingURL=chunk-I2OXQMDQ.js.map
