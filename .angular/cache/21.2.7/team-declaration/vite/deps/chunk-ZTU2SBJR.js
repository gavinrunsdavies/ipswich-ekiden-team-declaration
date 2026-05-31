import {
  takeUntilDestroyed
} from "./chunk-MGCNT23V.js";
import {
  NgbConfig
} from "./chunk-Y74BDHYX.js";
import {
  isString,
  ngbCollapsingTransition,
  ngbRunTransition
} from "./chunk-T3UYF4PN.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  inject,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementContainer,
  ɵɵdomProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-RCRTD27T.js";

// node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-collapse.mjs
var NgbCollapseConfig = class _NgbCollapseConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.horizontal = false;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.ɵfac = function NgbCollapseConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCollapseConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCollapseConfig,
      factory: _NgbCollapseConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCollapseConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbCollapse = class _NgbCollapse {
  constructor() {
    this._config = inject(NgbCollapseConfig);
    this._element = inject(ElementRef);
    this._zone = inject(NgZone);
    this.animation = this._config.animation;
    this._afterInit = false;
    this._isCollapsed = false;
    this.ngbCollapseChange = new EventEmitter();
    this.horizontal = this._config.horizontal;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
  }
  /**
   * If `true`, will collapse the element or show it otherwise.
   */
  set collapsed(isCollapsed) {
    if (this._isCollapsed !== isCollapsed) {
      this._isCollapsed = isCollapsed;
      if (this._afterInit) {
        this._runTransitionWithEvents(isCollapsed, this.animation);
      }
    }
  }
  ngOnInit() {
    this._runTransition(this._isCollapsed, false);
    this._afterInit = true;
  }
  /**
   * Triggers collapsing programmatically.
   *
   * If there is a collapsing transition running already, it will be reversed.
   * If the animations are turned off this happens synchronously.
   *
   * @since 8.0.0
   */
  toggle(open = this._isCollapsed) {
    this.collapsed = !open;
    this.ngbCollapseChange.next(this._isCollapsed);
  }
  _runTransition(collapsed, animation) {
    return ngbRunTransition(this._zone, this._element.nativeElement, ngbCollapsingTransition, {
      animation,
      runningTransition: "stop",
      context: {
        direction: collapsed ? "hide" : "show",
        dimension: this.horizontal ? "width" : "height"
      }
    });
  }
  _runTransitionWithEvents(collapsed, animation) {
    this._runTransition(collapsed, animation).subscribe(() => {
      if (collapsed) {
        this.hidden.emit();
      } else {
        this.shown.emit();
      }
    });
  }
  static {
    this.ɵfac = function NgbCollapse_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCollapse)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbCollapse,
      selectors: [["", "ngbCollapse", ""]],
      hostVars: 2,
      hostBindings: function NgbCollapse_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("collapse-horizontal", ctx.horizontal);
        }
      },
      inputs: {
        animation: "animation",
        collapsed: [0, "ngbCollapse", "collapsed"],
        horizontal: "horizontal"
      },
      outputs: {
        ngbCollapseChange: "ngbCollapseChange",
        shown: "shown",
        hidden: "hidden"
      },
      exportAs: ["ngbCollapse"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCollapse, [{
    type: Directive,
    args: [{
      selector: "[ngbCollapse]",
      exportAs: "ngbCollapse",
      host: {
        "[class.collapse-horizontal]": "horizontal"
      }
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    collapsed: [{
      type: Input,
      args: ["ngbCollapse"]
    }],
    ngbCollapseChange: [{
      type: Output
    }],
    horizontal: [{
      type: Input
    }],
    shown: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }]
  });
})();
var NgbCollapseModule = class _NgbCollapseModule {
  static {
    this.ɵfac = function NgbCollapseModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCollapseModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbCollapseModule,
      imports: [NgbCollapse],
      exports: [NgbCollapse]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCollapseModule, [{
    type: NgModule,
    args: [{
      imports: [NgbCollapse],
      exports: [NgbCollapse]
    }]
  }], null, null);
})();

// node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-accordion.mjs
var _c0 = ["container"];
var _c1 = ["ngbAccordionBody", ""];
var _c2 = ["*"];
var NgbAccordionConfig = class _NgbAccordionConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.closeOthers = false;
    this.destroyOnHide = true;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.ɵfac = function NgbAccordionConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbAccordionConfig,
      factory: _NgbAccordionConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var nextId = 0;
var NgbAccordionBody = class _NgbAccordionBody {
  constructor() {
    this._item = inject(NgbAccordionItem);
    this._viewRef = null;
    this.elementRef = inject(ElementRef);
  }
  ngAfterContentChecked() {
    if (this._bodyTpl) {
      if (this._item._shouldBeInDOM) {
        this._createViewIfNotExists();
      } else {
        this._destroyViewIfExists();
      }
    }
  }
  ngOnDestroy() {
    this._destroyViewIfExists();
  }
  _destroyViewIfExists() {
    this._viewRef?.destroy();
    this._viewRef = null;
  }
  _createViewIfNotExists() {
    if (!this._viewRef) {
      this._viewRef = this._vcr.createEmbeddedView(this._bodyTpl);
      this._viewRef.detectChanges();
    }
  }
  static {
    this.ɵfac = function NgbAccordionBody_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionBody)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbAccordionBody,
      selectors: [["", "ngbAccordionBody", ""]],
      contentQueries: function NgbAccordionBody_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TemplateRef, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._bodyTpl = _t.first);
        }
      },
      viewQuery: function NgbAccordionBody_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7, ViewContainerRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._vcr = _t.first);
        }
      },
      hostAttrs: [1, "accordion-body"],
      attrs: _c1,
      ngContentSelectors: _c2,
      decls: 3,
      vars: 0,
      consts: [["container", ""]],
      template: function NgbAccordionBody_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵdomElementContainer(0, null, 0);
          ɵɵprojection(2);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionBody, [{
    type: Component,
    args: [{
      selector: "[ngbAccordionBody]",
      template: `
		<ng-container #container />
		<ng-content />
	`,
      host: {
        class: "accordion-body"
      }
    }]
  }], null, {
    _vcr: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    _bodyTpl: [{
      type: ContentChild,
      args: [TemplateRef, {
        static: true
      }]
    }]
  });
})();
var NgbAccordionCollapse = class _NgbAccordionCollapse {
  constructor() {
    this.item = inject(NgbAccordionItem);
    this.ngbCollapse = inject(NgbCollapse);
  }
  static {
    this.ɵfac = function NgbAccordionCollapse_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionCollapse)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbAccordionCollapse,
      selectors: [["", "ngbAccordionCollapse", ""]],
      hostAttrs: ["role", "region", 1, "accordion-collapse"],
      hostVars: 2,
      hostBindings: function NgbAccordionCollapse_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.item.collapseId);
          ɵɵattribute("aria-labelledby", ctx.item.toggleId);
        }
      },
      exportAs: ["ngbAccordionCollapse"],
      features: [ɵɵHostDirectivesFeature([NgbCollapse])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionCollapse, [{
    type: Directive,
    args: [{
      exportAs: "ngbAccordionCollapse",
      selector: "[ngbAccordionCollapse]",
      host: {
        role: "region",
        class: "accordion-collapse",
        "[id]": "item.collapseId",
        "[attr.aria-labelledby]": "item.toggleId"
      },
      hostDirectives: [NgbCollapse]
    }]
  }], null, null);
})();
var NgbAccordionToggle = class _NgbAccordionToggle {
  constructor() {
    this.item = inject(NgbAccordionItem);
    this.accordion = inject(NgbAccordionDirective);
  }
  static {
    this.ɵfac = function NgbAccordionToggle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionToggle)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbAccordionToggle,
      selectors: [["", "ngbAccordionToggle", ""]],
      hostVars: 5,
      hostBindings: function NgbAccordionToggle_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NgbAccordionToggle_click_HostBindingHandler() {
            return !ctx.item.disabled && ctx.accordion.toggle(ctx.item.id);
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.item.toggleId);
          ɵɵattribute("aria-controls", ctx.item.collapseId)("aria-expanded", !ctx.item.collapsed);
          ɵɵclassProp("collapsed", ctx.item.collapsed);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionToggle, [{
    type: Directive,
    args: [{
      selector: "[ngbAccordionToggle]",
      host: {
        "[id]": "item.toggleId",
        "[class.collapsed]": "item.collapsed",
        "[attr.aria-controls]": "item.collapseId",
        "[attr.aria-expanded]": "!item.collapsed",
        "(click)": "!item.disabled && accordion.toggle(item.id)"
      }
    }]
  }], null, null);
})();
var NgbAccordionButton = class _NgbAccordionButton {
  constructor() {
    this.item = inject(NgbAccordionItem);
  }
  static {
    this.ɵfac = function NgbAccordionButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionButton)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbAccordionButton,
      selectors: [["button", "ngbAccordionButton", ""]],
      hostAttrs: ["type", "button", 1, "accordion-button"],
      hostVars: 1,
      hostBindings: function NgbAccordionButton_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("disabled", ctx.item.disabled);
        }
      },
      features: [ɵɵHostDirectivesFeature([NgbAccordionToggle])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionButton, [{
    type: Directive,
    args: [{
      selector: "button[ngbAccordionButton]",
      host: {
        "[disabled]": "item.disabled",
        class: "accordion-button",
        type: "button"
      },
      hostDirectives: [NgbAccordionToggle]
    }]
  }], null, null);
})();
var NgbAccordionHeader = class _NgbAccordionHeader {
  constructor() {
    this.item = inject(NgbAccordionItem);
  }
  static {
    this.ɵfac = function NgbAccordionHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionHeader)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbAccordionHeader,
      selectors: [["", "ngbAccordionHeader", ""]],
      hostAttrs: ["role", "heading", 1, "accordion-header"],
      hostVars: 2,
      hostBindings: function NgbAccordionHeader_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("collapsed", ctx.item.collapsed);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionHeader, [{
    type: Directive,
    args: [{
      selector: "[ngbAccordionHeader]",
      host: {
        role: "heading",
        class: "accordion-header",
        "[class.collapsed]": "item.collapsed"
      }
    }]
  }], null, null);
})();
var NgbAccordionItem = class _NgbAccordionItem {
  constructor() {
    this._accordion = inject(NgbAccordionDirective);
    this._cd = inject(ChangeDetectorRef);
    this._destroyRef = inject(DestroyRef);
    this._collapsed = true;
    this._id = `ngb-accordion-item-${nextId++}`;
    this._collapseAnimationRunning = false;
    this.disabled = false;
    this.show = new EventEmitter();
    this.shown = new EventEmitter();
    this.hide = new EventEmitter();
    this.hidden = new EventEmitter();
  }
  /**
   * Sets the custom ID of the accordion item. It must be unique for the document.
   *
   * @param id The ID of the accordion item, must be a non-empty string
   */
  set id(id) {
    if (isString(id) && id !== "") {
      this._id = id;
    }
  }
  /**
   * If `true`, the content of the accordion item's body will be removed from the DOM. It will be just hidden otherwise.
   *
   * This property can also be set up on the parent [`NgbAccordion` directive](#/components/accordion/api#NgbAccordionDirective).
   */
  set destroyOnHide(destroyOnHide) {
    this._destroyOnHide = destroyOnHide;
  }
  get destroyOnHide() {
    return this._destroyOnHide === void 0 ? this._accordion.destroyOnHide : this._destroyOnHide;
  }
  /**
   *	If `true`, the accordion item will be collapsed. Otherwise, it will be expanded.
   *
   * @param collapsed New state of the accordion item.
   */
  set collapsed(collapsed) {
    if (collapsed) {
      this.collapse();
    } else {
      this.expand();
    }
  }
  get collapsed() {
    return this._collapsed;
  }
  get id() {
    return `${this._id}`;
  }
  get toggleId() {
    return `${this.id}-toggle`;
  }
  get collapseId() {
    return `${this.id}-collapse`;
  }
  get _shouldBeInDOM() {
    return !this.collapsed || this._collapseAnimationRunning || !this.destroyOnHide;
  }
  ngAfterContentInit() {
    const {
      ngbCollapse
    } = this._collapse;
    ngbCollapse.animation = false;
    ngbCollapse.collapsed = this.collapsed;
    ngbCollapse.animation = this._accordion.animation;
    ngbCollapse.hidden.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._collapseAnimationRunning = false;
      this.hidden.emit();
      this._accordion.hidden.emit(this.id);
      this._cd.markForCheck();
    });
    ngbCollapse.shown.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this.shown.emit();
      this._accordion.shown.emit(this.id);
      this._cd.markForCheck();
    });
  }
  /**
   * Toggles an accordion item.
   */
  toggle() {
    this.collapsed = !this.collapsed;
  }
  /**
   * Expands an accordion item.
   */
  expand() {
    if (this.collapsed) {
      if (!this._accordion._ensureCanExpand(this)) {
        return;
      }
      this._collapsed = false;
      this._cd.markForCheck();
      this._cd.detectChanges();
      this.show.emit();
      this._accordion.show.emit(this.id);
      this._collapse.ngbCollapse.animation = this._accordion.animation;
      this._collapse.ngbCollapse.collapsed = false;
    }
  }
  /**
   * Collapses an accordion item.
   */
  collapse() {
    if (!this.collapsed) {
      this._collapsed = true;
      this._collapseAnimationRunning = true;
      this._cd.markForCheck();
      this.hide.emit();
      this._accordion.hide.emit(this.id);
      this._collapse.ngbCollapse.animation = this._accordion.animation;
      this._collapse.ngbCollapse.collapsed = true;
    }
  }
  static {
    this.ɵfac = function NgbAccordionItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionItem)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbAccordionItem,
      selectors: [["", "ngbAccordionItem", ""]],
      contentQueries: function NgbAccordionItem_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbAccordionCollapse, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._collapse = _t.first);
        }
      },
      hostAttrs: [1, "accordion-item"],
      hostVars: 1,
      hostBindings: function NgbAccordionItem_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.id);
        }
      },
      inputs: {
        id: [0, "ngbAccordionItem", "id"],
        destroyOnHide: "destroyOnHide",
        disabled: "disabled",
        collapsed: "collapsed"
      },
      outputs: {
        show: "show",
        shown: "shown",
        hide: "hide",
        hidden: "hidden"
      },
      exportAs: ["ngbAccordionItem"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionItem, [{
    type: Directive,
    args: [{
      selector: "[ngbAccordionItem]",
      exportAs: "ngbAccordionItem",
      host: {
        "[id]": "id",
        class: "accordion-item"
      }
    }]
  }], null, {
    _collapse: [{
      type: ContentChild,
      args: [NgbAccordionCollapse, {
        static: true
      }]
    }],
    id: [{
      type: Input,
      args: ["ngbAccordionItem"]
    }],
    destroyOnHide: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    collapsed: [{
      type: Input
    }],
    show: [{
      type: Output
    }],
    shown: [{
      type: Output
    }],
    hide: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }]
  });
})();
var NgbAccordionDirective = class _NgbAccordionDirective {
  constructor() {
    this._config = inject(NgbAccordionConfig);
    this._anItemWasAlreadyExpandedDuringInitialisation = false;
    this.animation = this._config.animation;
    this.closeOthers = this._config.closeOthers;
    this.destroyOnHide = this._config.destroyOnHide;
    this.show = new EventEmitter();
    this.shown = new EventEmitter();
    this.hide = new EventEmitter();
    this.hidden = new EventEmitter();
  }
  /**
   * Toggles an item with the given id.
   *
   * It will toggle an item, even if it is disabled.
   *
   * @param itemId The id of the item to toggle.
   */
  toggle(itemId) {
    this._getItem(itemId)?.toggle();
  }
  /**
   * Expands an item with the given id.
   *
   * If `closeOthers` is `true`, it will collapse other panels.
   *
   * @param itemId The id of the item to expand.
   */
  expand(itemId) {
    this._getItem(itemId)?.expand();
  }
  /**
   * Expands all items.
   *
   * If `closeOthers` is `true` and all items are closed, it will open the first one. Otherwise, it will keep the opened one.
   */
  expandAll() {
    if (this._items) {
      if (this.closeOthers) {
        if (!this._items.find((item) => !item.collapsed)) {
          this._items.first.expand();
        }
      } else {
        this._items.forEach((item) => item.expand());
      }
    }
  }
  /**
   * Collapses an item with the given id.
   *
   * Has no effect if the `itemId` does not correspond to any item.
   *
   * @param itemId The id of the item to collapse.
   */
  collapse(itemId) {
    this._getItem(itemId)?.collapse();
  }
  /**
   * Collapses all items.
   */
  collapseAll() {
    this._items?.forEach((item) => item.collapse());
  }
  /**
   * Checks if an item with the given id is expanded.
   *
   * If the `itemId` does not correspond to any item, it returns `false`.
   *
   * @param itemId The id of the item to check.
   */
  isExpanded(itemId) {
    const item = this._getItem(itemId);
    return item ? !item.collapsed : false;
  }
  /**
   * It checks, if the item can be expanded in the current state of the accordion.
   * With `closeOthers` there can be only one expanded item at a time.
   *
   * @internal
   */
  _ensureCanExpand(toExpand) {
    if (!this.closeOthers) {
      return true;
    }
    if (!this._items) {
      if (!this._anItemWasAlreadyExpandedDuringInitialisation) {
        this._anItemWasAlreadyExpandedDuringInitialisation = true;
        return true;
      }
      return false;
    }
    this._items.find((item) => !item.collapsed && toExpand !== item)?.collapse();
    return true;
  }
  _getItem(itemId) {
    return this._items?.find((item) => item.id === itemId);
  }
  static {
    this.ɵfac = function NgbAccordionDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbAccordionDirective,
      selectors: [["", "ngbAccordion", ""]],
      contentQueries: function NgbAccordionDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbAccordionItem, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._items = _t);
        }
      },
      hostAttrs: [1, "accordion"],
      inputs: {
        animation: "animation",
        closeOthers: "closeOthers",
        destroyOnHide: "destroyOnHide"
      },
      outputs: {
        show: "show",
        shown: "shown",
        hide: "hide",
        hidden: "hidden"
      },
      exportAs: ["ngbAccordion"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionDirective, [{
    type: Directive,
    args: [{
      selector: "[ngbAccordion]",
      exportAs: "ngbAccordion",
      host: {
        class: "accordion"
      }
    }]
  }], null, {
    _items: [{
      type: ContentChildren,
      args: [NgbAccordionItem, {
        descendants: false
      }]
    }],
    animation: [{
      type: Input
    }],
    closeOthers: [{
      type: Input
    }],
    destroyOnHide: [{
      type: Input
    }],
    show: [{
      type: Output
    }],
    shown: [{
      type: Output
    }],
    hide: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }]
  });
})();
var NGB_ACCORDION_DIRECTIVES = [NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionBody, NgbAccordionCollapse];
var NgbAccordionModule = class _NgbAccordionModule {
  static {
    this.ɵfac = function NgbAccordionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbAccordionModule,
      imports: [NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionBody, NgbAccordionCollapse],
      exports: [NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionBody, NgbAccordionCollapse]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionModule, [{
    type: NgModule,
    args: [{
      imports: NGB_ACCORDION_DIRECTIVES,
      exports: NGB_ACCORDION_DIRECTIVES
    }]
  }], null, null);
})();

export {
  NgbCollapseConfig,
  NgbCollapse,
  NgbCollapseModule,
  NgbAccordionConfig,
  NgbAccordionBody,
  NgbAccordionCollapse,
  NgbAccordionToggle,
  NgbAccordionButton,
  NgbAccordionHeader,
  NgbAccordionItem,
  NgbAccordionDirective,
  NgbAccordionModule
};
//# sourceMappingURL=chunk-ZTU2SBJR.js.map
