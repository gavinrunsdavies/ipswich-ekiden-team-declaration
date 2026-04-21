import {
  getValueInRange,
  isNumber
} from "./chunk-T3UYF4PN.js";
import {
  NgTemplateOutlet
} from "./chunk-TRMZSHJ7.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  TemplateRef,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵi18n,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RCRTD27T.js";

// node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-pagination.mjs
var _c0 = (a0, a1, a2) => ({
  $implicit: a0,
  pages: a1,
  disabled: a2
});
var _c1 = (a0) => ({
  disabled: true,
  currentPage: a0
});
var _c2 = (a0, a1, a2) => ({
  disabled: a0,
  $implicit: a1,
  currentPage: a2
});
var _c3 = (a0, a1) => ({
  disabled: a0,
  currentPage: a1
});
var _c4 = (a0) => ({
  disabled: a0
});
function NgbPagination_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵi18n(1, 7);
    ɵɵelementEnd();
  }
}
function NgbPagination_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵi18n(1, 8);
    ɵɵelementEnd();
  }
}
function NgbPagination_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵi18n(1, 9);
    ɵɵelementEnd();
  }
}
function NgbPagination_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵi18n(1, 10);
    ɵɵelementEnd();
  }
}
function NgbPagination_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, "...");
  }
}
function NgbPagination_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const page_r1 = ctx.$implicit;
    ɵɵtextInterpolate(page_r1);
  }
}
function NgbPagination_ng_template_12_For_1_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function NgbPagination_ng_template_12_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 16);
    ɵɵtemplate(1, NgbPagination_ng_template_12_For_1_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const page_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    const ellipsis_r4 = ɵɵreference(9);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r2.tplEllipsis == null ? null : ctx_r2.tplEllipsis.templateRef) || ellipsis_r4)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, page_r2));
  }
}
function NgbPagination_ng_template_12_For_1_Conditional_2_ng_template_1_Template(rf, ctx) {
}
function NgbPagination_ng_template_12_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 18);
    ɵɵlistener("click", function NgbPagination_ng_template_12_For_1_Conditional_2_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r5);
      const pageNumber_r6 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      ctx_r2.selectPage(pageNumber_r6);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵtemplate(1, NgbPagination_ng_template_12_For_1_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const pageNumber_r6 = ɵɵnextContext().$implicit;
    const ctx_r6 = ɵɵnextContext();
    const page_r2 = ctx_r6.$implicit;
    const disabled_r8 = ctx_r6.disabled;
    const ctx_r2 = ɵɵnextContext();
    const defaultNumber_r9 = ɵɵreference(11);
    ɵɵattribute("tabindex", disabled_r8 ? "-1" : null)("aria-disabled", disabled_r8 ? "true" : null)("aria-current", pageNumber_r6 === page_r2 ? "page" : null);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r2.tplNumber == null ? null : ctx_r2.tplNumber.templateRef) || defaultNumber_r9)("ngTemplateOutletContext", ɵɵpureFunction3(5, _c2, disabled_r8, pageNumber_r6, page_r2));
  }
}
function NgbPagination_ng_template_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 15);
    ɵɵconditionalCreate(1, NgbPagination_ng_template_12_For_1_Conditional_1_Template, 2, 4, "a", 16)(2, NgbPagination_ng_template_12_For_1_Conditional_2_Template, 2, 9, "a", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const pageNumber_r6 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext();
    const page_r2 = ctx_r6.$implicit;
    const disabled_r8 = ctx_r6.disabled;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("active", pageNumber_r6 === page_r2)("disabled", ctx_r2.isEllipsis(pageNumber_r6) || disabled_r8);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.isEllipsis(pageNumber_r6) ? 1 : 2);
  }
}
function NgbPagination_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NgbPagination_ng_template_12_For_1_Template, 3, 5, "li", 14, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const pages_r10 = ctx.pages;
    ɵɵrepeater(pages_r10);
  }
}
function NgbPagination_Conditional_15_ng_template_2_Template(rf, ctx) {
}
function NgbPagination_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15)(1, "a", 19);
    ɵɵlistener("click", function NgbPagination_Conditional_15_Template_a_click_1_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r2 = ɵɵnextContext();
      ctx_r2.selectPage(1);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵtemplate(2, NgbPagination_Conditional_15_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const first_r12 = ɵɵreference(1);
    ɵɵclassProp("disabled", ctx_r2.previousDisabled());
    ɵɵadvance();
    ɵɵattribute("tabindex", ctx_r2.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r2.previousDisabled() ? "true" : null);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r2.tplFirst == null ? null : ctx_r2.tplFirst.templateRef) || first_r12)("ngTemplateOutletContext", ɵɵpureFunction2(6, _c3, ctx_r2.previousDisabled(), ctx_r2.page));
  }
}
function NgbPagination_Conditional_16_ng_template_2_Template(rf, ctx) {
}
function NgbPagination_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15)(1, "a", 20);
    ɵɵlistener("click", function NgbPagination_Conditional_16_Template_a_click_1_listener($event) {
      ɵɵrestoreView(_r13);
      const ctx_r2 = ɵɵnextContext();
      ctx_r2.selectPage(ctx_r2.page - 1);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵtemplate(2, NgbPagination_Conditional_16_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const previous_r14 = ɵɵreference(3);
    ɵɵclassProp("disabled", ctx_r2.previousDisabled());
    ɵɵadvance();
    ɵɵattribute("tabindex", ctx_r2.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r2.previousDisabled() ? "true" : null);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r2.tplPrevious == null ? null : ctx_r2.tplPrevious.templateRef) || previous_r14)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c4, ctx_r2.previousDisabled()));
  }
}
function NgbPagination_ng_template_17_Template(rf, ctx) {
}
function NgbPagination_Conditional_18_ng_template_2_Template(rf, ctx) {
}
function NgbPagination_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15)(1, "a", 21);
    ɵɵlistener("click", function NgbPagination_Conditional_18_Template_a_click_1_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r2 = ɵɵnextContext();
      ctx_r2.selectPage(ctx_r2.page + 1);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵtemplate(2, NgbPagination_Conditional_18_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const next_r16 = ɵɵreference(5);
    ɵɵclassProp("disabled", ctx_r2.nextDisabled());
    ɵɵadvance();
    ɵɵattribute("tabindex", ctx_r2.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r2.nextDisabled() ? "true" : null);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r2.tplNext == null ? null : ctx_r2.tplNext.templateRef) || next_r16)("ngTemplateOutletContext", ɵɵpureFunction2(6, _c3, ctx_r2.nextDisabled(), ctx_r2.page));
  }
}
function NgbPagination_Conditional_19_ng_template_2_Template(rf, ctx) {
}
function NgbPagination_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15)(1, "a", 22);
    ɵɵlistener("click", function NgbPagination_Conditional_19_Template_a_click_1_listener($event) {
      ɵɵrestoreView(_r17);
      const ctx_r2 = ɵɵnextContext();
      ctx_r2.selectPage(ctx_r2.pageCount);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵtemplate(2, NgbPagination_Conditional_19_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const last_r18 = ɵɵreference(7);
    ɵɵclassProp("disabled", ctx_r2.nextDisabled());
    ɵɵadvance();
    ɵɵattribute("tabindex", ctx_r2.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r2.nextDisabled() ? "true" : null);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r2.tplLast == null ? null : ctx_r2.tplLast.templateRef) || last_r18)("ngTemplateOutletContext", ɵɵpureFunction2(6, _c3, ctx_r2.nextDisabled(), ctx_r2.page));
  }
}
var NgbPaginationConfig = class _NgbPaginationConfig {
  constructor() {
    this.disabled = false;
    this.boundaryLinks = false;
    this.directionLinks = true;
    this.ellipses = true;
    this.maxSize = 0;
    this.pageSize = 10;
    this.rotate = false;
  }
  static {
    this.ɵfac = function NgbPaginationConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbPaginationConfig,
      factory: _NgbPaginationConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbPaginationEllipsis = class _NgbPaginationEllipsis {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbPaginationEllipsis_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationEllipsis)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbPaginationEllipsis,
      selectors: [["ng-template", "ngbPaginationEllipsis", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationEllipsis, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationEllipsis]"
    }]
  }], null, null);
})();
var NgbPaginationFirst = class _NgbPaginationFirst {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbPaginationFirst_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationFirst)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbPaginationFirst,
      selectors: [["ng-template", "ngbPaginationFirst", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationFirst, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationFirst]"
    }]
  }], null, null);
})();
var NgbPaginationLast = class _NgbPaginationLast {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbPaginationLast_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationLast)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbPaginationLast,
      selectors: [["ng-template", "ngbPaginationLast", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationLast, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationLast]"
    }]
  }], null, null);
})();
var NgbPaginationNext = class _NgbPaginationNext {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbPaginationNext_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationNext)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbPaginationNext,
      selectors: [["ng-template", "ngbPaginationNext", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationNext, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationNext]"
    }]
  }], null, null);
})();
var NgbPaginationNumber = class _NgbPaginationNumber {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbPaginationNumber_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationNumber)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbPaginationNumber,
      selectors: [["ng-template", "ngbPaginationNumber", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationNumber, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationNumber]"
    }]
  }], null, null);
})();
var NgbPaginationPrevious = class _NgbPaginationPrevious {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbPaginationPrevious_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationPrevious)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbPaginationPrevious,
      selectors: [["ng-template", "ngbPaginationPrevious", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationPrevious, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationPrevious]"
    }]
  }], null, null);
})();
var NgbPaginationPages = class _NgbPaginationPages {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbPaginationPages_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationPages)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbPaginationPages,
      selectors: [["ng-template", "ngbPaginationPages", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationPages, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationPages]"
    }]
  }], null, null);
})();
var NgbPagination = class _NgbPagination {
  constructor() {
    this._config = inject(NgbPaginationConfig);
    this.pageCount = 0;
    this.pages = [];
    this.disabled = this._config.disabled;
    this.boundaryLinks = this._config.boundaryLinks;
    this.directionLinks = this._config.directionLinks;
    this.ellipses = this._config.ellipses;
    this.rotate = this._config.rotate;
    this.maxSize = this._config.maxSize;
    this.page = 1;
    this.pageSize = this._config.pageSize;
    this.pageChange = new EventEmitter(true);
    this.size = this._config.size;
  }
  hasPrevious() {
    return this.page > 1;
  }
  hasNext() {
    return this.page < this.pageCount;
  }
  nextDisabled() {
    return !this.hasNext() || this.disabled;
  }
  previousDisabled() {
    return !this.hasPrevious() || this.disabled;
  }
  selectPage(pageNumber) {
    this._updatePages(pageNumber);
  }
  ngOnChanges(changes) {
    this._updatePages(this.page);
  }
  isEllipsis(pageNumber) {
    return pageNumber === -1;
  }
  /**
   * Appends ellipses and first/last page number to the displayed pages
   */
  _applyEllipses(start, end) {
    if (this.ellipses) {
      if (start > 0) {
        if (start > 2) {
          this.pages.unshift(-1);
        } else if (start === 2) {
          this.pages.unshift(2);
        }
        this.pages.unshift(1);
      }
      if (end < this.pageCount) {
        if (end < this.pageCount - 2) {
          this.pages.push(-1);
        } else if (end === this.pageCount - 2) {
          this.pages.push(this.pageCount - 1);
        }
        this.pages.push(this.pageCount);
      }
    }
  }
  /**
   * Rotates page numbers based on maxSize items visible.
   * Currently selected page stays in the middle:
   *
   * Ex. for selected page = 6:
   * [5,*6*,7] for maxSize = 3
   * [4,5,*6*,7] for maxSize = 4
   */
  _applyRotation() {
    let start = 0;
    let end = this.pageCount;
    let leftOffset = Math.floor(this.maxSize / 2);
    let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
    if (this.page <= leftOffset) {
      end = this.maxSize;
    } else if (this.pageCount - this.page < leftOffset) {
      start = this.pageCount - this.maxSize;
    } else {
      start = this.page - leftOffset - 1;
      end = this.page + rightOffset;
    }
    return [start, end];
  }
  /**
   * Paginates page numbers based on maxSize items per page.
   */
  _applyPagination() {
    let page = Math.ceil(this.page / this.maxSize) - 1;
    let start = page * this.maxSize;
    let end = start + this.maxSize;
    return [start, end];
  }
  _setPageInRange(newPageNo) {
    const prevPageNo = this.page;
    this.page = getValueInRange(newPageNo, this.pageCount, 1);
    if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
      this.pageChange.emit(this.page);
    }
  }
  _updatePages(newPage) {
    this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
    if (!isNumber(this.pageCount)) {
      this.pageCount = 0;
    }
    this.pages.length = 0;
    for (let i = 1; i <= this.pageCount; i++) {
      this.pages.push(i);
    }
    this._setPageInRange(newPage);
    if (this.maxSize > 0 && this.pageCount > this.maxSize) {
      let start = 0;
      let end = this.pageCount;
      if (this.rotate) {
        [start, end] = this._applyRotation();
      } else {
        [start, end] = this._applyPagination();
      }
      this.pages = this.pages.slice(start, end);
      this._applyEllipses(start, end);
    }
  }
  static {
    this.ɵfac = function NgbPagination_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPagination)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbPagination,
      selectors: [["ngb-pagination"]],
      contentQueries: function NgbPagination_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbPaginationEllipsis, 5)(dirIndex, NgbPaginationFirst, 5)(dirIndex, NgbPaginationLast, 5)(dirIndex, NgbPaginationNext, 5)(dirIndex, NgbPaginationNumber, 5)(dirIndex, NgbPaginationPrevious, 5)(dirIndex, NgbPaginationPages, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tplEllipsis = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tplFirst = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tplLast = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tplNext = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tplNumber = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tplPrevious = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tplPages = _t.first);
        }
      },
      hostAttrs: ["role", "navigation"],
      inputs: {
        disabled: "disabled",
        boundaryLinks: "boundaryLinks",
        directionLinks: "directionLinks",
        ellipses: "ellipses",
        rotate: "rotate",
        collectionSize: "collectionSize",
        maxSize: "maxSize",
        page: "page",
        pageSize: "pageSize",
        size: "size"
      },
      outputs: {
        pageChange: "pageChange"
      },
      features: [ɵɵNgOnChangesFeature],
      decls: 20,
      vars: 12,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PAGINATION_MJS_0 = goog.getMsg("««");
          i18n_0 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PAGINATION_MJS_0;
        } else {
          i18n_0 = $localize`:@@ngb.pagination.first:««`;
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PAGINATION_MJS_1 = goog.getMsg("«");
          i18n_1 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PAGINATION_MJS_1;
        } else {
          i18n_1 = $localize`:@@ngb.pagination.previous:«`;
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PAGINATION_MJS_2 = goog.getMsg("»");
          i18n_2 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PAGINATION_MJS_2;
        } else {
          i18n_2 = $localize`:@@ngb.pagination.next:»`;
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PAGINATION_MJS_3 = goog.getMsg("»»");
          i18n_3 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PAGINATION_MJS_3;
        } else {
          i18n_3 = $localize`:@@ngb.pagination.last:»»`;
        }
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PAGINATION_MJS_4 = goog.getMsg("First");
          i18n_4 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PAGINATION_MJS_4;
        } else {
          i18n_4 = $localize`:@@ngb.pagination.first-aria:First`;
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PAGINATION_MJS_5 = goog.getMsg("Previous");
          i18n_5 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PAGINATION_MJS_5;
        } else {
          i18n_5 = $localize`:@@ngb.pagination.previous-aria:Previous`;
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PAGINATION_MJS_6 = goog.getMsg("Next");
          i18n_6 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PAGINATION_MJS_6;
        } else {
          i18n_6 = $localize`:@@ngb.pagination.next-aria:Next`;
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PAGINATION_MJS_7 = goog.getMsg("Last");
          i18n_7 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PAGINATION_MJS_7;
        } else {
          i18n_7 = $localize`:@@ngb.pagination.last-aria:Last`;
        }
        return [["first", ""], ["previous", ""], ["next", ""], ["last", ""], ["ellipsis", ""], ["defaultNumber", ""], ["defaultPages", ""], i18n_0, i18n_1, i18n_2, i18n_3, [1, "page-item", 3, "disabled"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true"], [1, "page-item", 3, "active", "disabled"], [1, "page-item"], ["tabindex", "-1", "aria-disabled", "true", 1, "page-link"], ["href", "", 1, "page-link"], ["href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_4, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_5, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_6, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_7, "href", "", 1, "page-link", 3, "click"]];
      },
      template: function NgbPagination_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NgbPagination_ng_template_0_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NgbPagination_ng_template_2_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, NgbPagination_ng_template_4_Template, 2, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor)(6, NgbPagination_ng_template_6_Template, 2, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor)(8, NgbPagination_ng_template_8_Template, 1, 0, "ng-template", null, 4, ɵɵtemplateRefExtractor)(10, NgbPagination_ng_template_10_Template, 1, 1, "ng-template", null, 5, ɵɵtemplateRefExtractor)(12, NgbPagination_ng_template_12_Template, 2, 0, "ng-template", null, 6, ɵɵtemplateRefExtractor);
          ɵɵelementStart(14, "ul");
          ɵɵconditionalCreate(15, NgbPagination_Conditional_15_Template, 3, 9, "li", 11);
          ɵɵconditionalCreate(16, NgbPagination_Conditional_16_Template, 3, 8, "li", 11);
          ɵɵtemplate(17, NgbPagination_ng_template_17_Template, 0, 0, "ng-template", 12);
          ɵɵconditionalCreate(18, NgbPagination_Conditional_18_Template, 3, 9, "li", 11);
          ɵɵconditionalCreate(19, NgbPagination_Conditional_19_Template, 3, 9, "li", 11);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const defaultPages_r19 = ɵɵreference(13);
          ɵɵadvance(14);
          ɵɵclassMap("pagination" + (ctx.size ? " pagination-" + ctx.size : ""));
          ɵɵadvance();
          ɵɵconditional(ctx.boundaryLinks ? 15 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.directionLinks ? 16 : -1);
          ɵɵadvance();
          ɵɵproperty("ngTemplateOutlet", (ctx.tplPages == null ? null : ctx.tplPages.templateRef) || defaultPages_r19)("ngTemplateOutletContext", ɵɵpureFunction3(8, _c0, ctx.page, ctx.pages, ctx.disabled));
          ɵɵadvance();
          ɵɵconditional(ctx.directionLinks ? 18 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.boundaryLinks ? 19 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPagination, [{
    type: Component,
    args: [{
      selector: "ngb-pagination",
      imports: [NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        role: "navigation"
      },
      template: `
		<ng-template #first><span aria-hidden="true" i18n="@@ngb.pagination.first">&laquo;&laquo;</span></ng-template>
		<ng-template #previous><span aria-hidden="true" i18n="@@ngb.pagination.previous">&laquo;</span></ng-template>
		<ng-template #next><span aria-hidden="true" i18n="@@ngb.pagination.next">&raquo;</span></ng-template>
		<ng-template #last><span aria-hidden="true" i18n="@@ngb.pagination.last">&raquo;&raquo;</span></ng-template>
		<ng-template #ellipsis>...</ng-template>
		<ng-template #defaultNumber let-page let-currentPage="currentPage">{{ page }}</ng-template>
		<ng-template #defaultPages let-page let-pages="pages" let-disabled="disabled">
			@for (pageNumber of pages; track $index) {
				<li
					class="page-item"
					[class.active]="pageNumber === page"
					[class.disabled]="isEllipsis(pageNumber) || disabled"
				>
					@if (isEllipsis(pageNumber)) {
						<a class="page-link" tabindex="-1" aria-disabled="true">
							<ng-template
								[ngTemplateOutlet]="tplEllipsis?.templateRef || ellipsis"
								[ngTemplateOutletContext]="{ disabled: true, currentPage: page }"
							/>
						</a>
					} @else {
						<a
							class="page-link"
							href
							(click)="selectPage(pageNumber); $event.preventDefault()"
							[attr.tabindex]="disabled ? '-1' : null"
							[attr.aria-disabled]="disabled ? 'true' : null"
							[attr.aria-current]="pageNumber === page ? 'page' : null"
						>
							<ng-template
								[ngTemplateOutlet]="tplNumber?.templateRef || defaultNumber"
								[ngTemplateOutletContext]="{ disabled: disabled, $implicit: pageNumber, currentPage: page }"
							/>
						</a>
					}
				</li>
			}
		</ng-template>
		<ul [class]="'pagination' + (size ? ' pagination-' + size : '')">
			@if (boundaryLinks) {
				<li class="page-item" [class.disabled]="previousDisabled()">
					<a
						aria-label="First"
						i18n-aria-label="@@ngb.pagination.first-aria"
						class="page-link"
						href
						(click)="selectPage(1); $event.preventDefault()"
						[attr.tabindex]="previousDisabled() ? '-1' : null"
						[attr.aria-disabled]="previousDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplFirst?.templateRef || first"
							[ngTemplateOutletContext]="{ disabled: previousDisabled(), currentPage: page }"
						/>
					</a>
				</li>
			}
			@if (directionLinks) {
				<li class="page-item" [class.disabled]="previousDisabled()">
					<a
						aria-label="Previous"
						i18n-aria-label="@@ngb.pagination.previous-aria"
						class="page-link"
						href
						(click)="selectPage(page - 1); $event.preventDefault()"
						[attr.tabindex]="previousDisabled() ? '-1' : null"
						[attr.aria-disabled]="previousDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplPrevious?.templateRef || previous"
							[ngTemplateOutletContext]="{ disabled: previousDisabled() }"
						/>
					</a>
				</li>
			}
			<ng-template
				[ngTemplateOutlet]="tplPages?.templateRef || defaultPages"
				[ngTemplateOutletContext]="{ $implicit: page, pages: pages, disabled: disabled }"
			/>
			@if (directionLinks) {
				<li class="page-item" [class.disabled]="nextDisabled()">
					<a
						aria-label="Next"
						i18n-aria-label="@@ngb.pagination.next-aria"
						class="page-link"
						href
						(click)="selectPage(page + 1); $event.preventDefault()"
						[attr.tabindex]="nextDisabled() ? '-1' : null"
						[attr.aria-disabled]="nextDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplNext?.templateRef || next"
							[ngTemplateOutletContext]="{ disabled: nextDisabled(), currentPage: page }"
						/>
					</a>
				</li>
			}
			@if (boundaryLinks) {
				<li class="page-item" [class.disabled]="nextDisabled()">
					<a
						aria-label="Last"
						i18n-aria-label="@@ngb.pagination.last-aria"
						class="page-link"
						href
						(click)="selectPage(pageCount); $event.preventDefault()"
						[attr.tabindex]="nextDisabled() ? '-1' : null"
						[attr.aria-disabled]="nextDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplLast?.templateRef || last"
							[ngTemplateOutletContext]="{ disabled: nextDisabled(), currentPage: page }"
						/>
					</a>
				</li>
			}
		</ul>
	`
    }]
  }], null, {
    tplEllipsis: [{
      type: ContentChild,
      args: [NgbPaginationEllipsis, {
        static: false
      }]
    }],
    tplFirst: [{
      type: ContentChild,
      args: [NgbPaginationFirst, {
        static: false
      }]
    }],
    tplLast: [{
      type: ContentChild,
      args: [NgbPaginationLast, {
        static: false
      }]
    }],
    tplNext: [{
      type: ContentChild,
      args: [NgbPaginationNext, {
        static: false
      }]
    }],
    tplNumber: [{
      type: ContentChild,
      args: [NgbPaginationNumber, {
        static: false
      }]
    }],
    tplPrevious: [{
      type: ContentChild,
      args: [NgbPaginationPrevious, {
        static: false
      }]
    }],
    tplPages: [{
      type: ContentChild,
      args: [NgbPaginationPages, {
        static: false
      }]
    }],
    disabled: [{
      type: Input
    }],
    boundaryLinks: [{
      type: Input
    }],
    directionLinks: [{
      type: Input
    }],
    ellipses: [{
      type: Input
    }],
    rotate: [{
      type: Input
    }],
    collectionSize: [{
      type: Input,
      args: [{
        required: true
      }]
    }],
    maxSize: [{
      type: Input
    }],
    page: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    pageChange: [{
      type: Output
    }],
    size: [{
      type: Input
    }]
  });
})();
var NGB_PAGINATION_DIRECTIVES = [NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPaginationPages];
var NgbPaginationModule = class _NgbPaginationModule {
  static {
    this.ɵfac = function NgbPaginationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbPaginationModule,
      imports: [NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPaginationPages],
      exports: [NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPaginationPages]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationModule, [{
    type: NgModule,
    args: [{
      imports: NGB_PAGINATION_DIRECTIVES,
      exports: NGB_PAGINATION_DIRECTIVES
    }]
  }], null, null);
})();

export {
  NgbPaginationConfig,
  NgbPaginationEllipsis,
  NgbPaginationFirst,
  NgbPaginationLast,
  NgbPaginationNext,
  NgbPaginationNumber,
  NgbPaginationPrevious,
  NgbPaginationPages,
  NgbPagination,
  NgbPaginationModule
};
//# sourceMappingURL=chunk-2FXQJS4C.js.map
