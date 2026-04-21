import {
  takeUntilDestroyed
} from "./chunk-MGCNT23V.js";
import {
  NgbConfig
} from "./chunk-Y74BDHYX.js";
import {
  isDefined,
  ngbRunTransition,
  reflow
} from "./chunk-T3UYF4PN.js";
import {
  NgTemplateOutlet
} from "./chunk-TRMZSHJ7.js";
import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
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
  ViewChildren,
  ViewEncapsulation,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
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
  ɵɵdomProperty,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-RCRTD27T.js";
import {
  Subject,
  distinctUntilChanged,
  skip,
  startWith
} from "./chunk-6P4RME4L.js";

// node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-nav.mjs
var _c0 = ["ngbNavOutlet", ""];
var _c1 = (a0) => ({
  $implicit: a0
});
function NgbNavOutlet_For_1_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NgbNavOutlet_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵtemplate(1, NgbNavOutlet_For_1_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("item", item_r1)("nav", ctx_r1.nav)("role", ctx_r1.paneRole);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (item_r1.contentTpl == null ? null : item_r1.contentTpl.templateRef) || null)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c1, item_r1.active || ctx_r1.isPanelTransitioning(item_r1)));
  }
}
function NgbNavOutlet_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, NgbNavOutlet_For_1_Conditional_0_Template, 2, 7, "div", 0);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(item_r1.isPanelInDom() || ctx_r1.isPanelTransitioning(item_r1) ? 0 : -1);
  }
}
var NgbNavConfig = class _NgbNavConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.destroyOnHide = true;
    this.orientation = "horizontal";
    this.roles = "tablist";
    this.keyboard = true;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.ɵfac = function NgbNavConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbNavConfig,
      factory: _NgbNavConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var isValidNavId = (id) => isDefined(id) && id !== "";
var navCounter = 0;
var NgbNavContent = class _NgbNavContent {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbNavContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbNavContent,
      selectors: [["ng-template", "ngbNavContent", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbNavContent]"
    }]
  }], null, null);
})();
var NgbNavItemRole = class _NgbNavItemRole {
  constructor(role) {
    this.role = role;
    this.nav = inject(NgbNav);
  }
  static {
    this.ɵfac = function NgbNavItemRole_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavItemRole)(ɵɵinjectAttribute("role"));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbNavItemRole,
      selectors: [["", "ngbNavItem", "", 5, "ng-container"]],
      hostVars: 1,
      hostBindings: function NgbNavItemRole_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("role", ctx.role ? ctx.role : ctx.nav.roles ? "presentation" : void 0);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavItemRole, [{
    type: Directive,
    args: [{
      selector: "[ngbNavItem]:not(ng-container)",
      host: {
        "[attr.role]": `role ? role : nav.roles ? 'presentation' : undefined`
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["role"]
    }]
  }], null);
})();
var NgbNavItem = class _NgbNavItem {
  constructor() {
    this._nav = inject(NgbNav);
    this._nativeElement = inject(ElementRef).nativeElement;
    this.disabled = false;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
  }
  ngOnInit() {
    if (!isDefined(this.domId)) {
      this.domId = `ngb-nav-${navCounter++}`;
    }
  }
  get active() {
    return this._nav.activeId === this.id;
  }
  get id() {
    return isValidNavId(this._id) ? this._id : this.domId;
  }
  get panelDomId() {
    return `${this.domId}-panel`;
  }
  isPanelInDom() {
    return (isDefined(this.destroyOnHide) ? !this.destroyOnHide : !this._nav.destroyOnHide) || this.active;
  }
  /**
   * @internal
   */
  isNgContainer() {
    return this._nativeElement.nodeType === Node.COMMENT_NODE;
  }
  static {
    this.ɵfac = function NgbNavItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavItem)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbNavItem,
      selectors: [["", "ngbNavItem", ""]],
      contentQueries: function NgbNavItem_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbNavContent, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTpl = _t.first);
        }
      },
      hostAttrs: [1, "nav-item"],
      inputs: {
        destroyOnHide: "destroyOnHide",
        disabled: "disabled",
        domId: "domId",
        _id: [0, "ngbNavItem", "_id"]
      },
      outputs: {
        shown: "shown",
        hidden: "hidden"
      },
      exportAs: ["ngbNavItem"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavItem, [{
    type: Directive,
    args: [{
      selector: "[ngbNavItem]",
      exportAs: "ngbNavItem",
      host: {
        class: "nav-item"
      }
    }]
  }], null, {
    destroyOnHide: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    domId: [{
      type: Input
    }],
    _id: [{
      type: Input,
      args: ["ngbNavItem"]
    }],
    shown: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }],
    contentTpl: [{
      type: ContentChild,
      args: [NgbNavContent, {
        descendants: false
      }]
    }]
  });
})();
var NgbNav = class _NgbNav {
  constructor(role) {
    this.role = role;
    this._config = inject(NgbNavConfig);
    this._cd = inject(ChangeDetectorRef);
    this._document = inject(DOCUMENT);
    this._nativeElement = inject(ElementRef).nativeElement;
    this.destroyRef = inject(DestroyRef);
    this._navigatingWithKeyboard = false;
    this.activeIdChange = new EventEmitter();
    this.animation = this._config.animation;
    this.destroyOnHide = this._config.destroyOnHide;
    this.orientation = this._config.orientation;
    this.roles = this._config.roles;
    this.keyboard = this._config.keyboard;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
    this.navItemChange$ = new Subject();
    this.navChange = new EventEmitter();
  }
  click(item) {
    if (!item.disabled) {
      this._updateActiveId(item.id);
    }
  }
  onFocusout({
    relatedTarget
  }) {
    if (!this._nativeElement.contains(relatedTarget)) {
      this._navigatingWithKeyboard = false;
    }
  }
  onKeyDown(event) {
    if (this.roles !== "tablist" || !this.keyboard) {
      return;
    }
    const enabledLinks = this.links.filter((link) => !link.navItem.disabled);
    const {
      length
    } = enabledLinks;
    let position = -1;
    enabledLinks.forEach((link, index) => {
      if (link.nativeElement === this._document.activeElement) {
        position = index;
      }
    });
    if (length) {
      switch (event.key) {
        case "ArrowUp":
        case "ArrowLeft":
          position = (position - 1 + length) % length;
          break;
        case "ArrowRight":
        case "ArrowDown":
          position = (position + 1) % length;
          break;
        case "Home":
          position = 0;
          break;
        case "End":
          position = length - 1;
          break;
      }
      if (this.keyboard === "changeWithArrows") {
        this.select(enabledLinks[position].navItem.id);
      }
      enabledLinks[position].nativeElement.focus();
      this._navigatingWithKeyboard = true;
      event.preventDefault();
    }
  }
  /**
   * Selects the nav with the given id and shows its associated pane.
   * Any other nav that was previously selected becomes unselected and its associated pane is hidden.
   */
  select(id) {
    this._updateActiveId(id, false);
  }
  ngAfterContentInit() {
    if (!isDefined(this.activeId)) {
      const nextId = this.items.first ? this.items.first.id : null;
      if (isValidNavId(nextId)) {
        this._updateActiveId(nextId, false);
        this._cd.detectChanges();
      }
    }
    this.items.changes.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this._notifyItemChanged(this.activeId));
  }
  ngOnChanges({
    activeId
  }) {
    if (activeId && !activeId.firstChange) {
      this._notifyItemChanged(activeId.currentValue);
    }
  }
  _updateActiveId(nextId, emitNavChange = true) {
    if (this.activeId !== nextId) {
      let defaultPrevented = false;
      if (emitNavChange) {
        this.navChange.emit({
          activeId: this.activeId,
          nextId,
          preventDefault: () => {
            defaultPrevented = true;
          }
        });
      }
      if (!defaultPrevented) {
        this.activeId = nextId;
        this.activeIdChange.emit(nextId);
        this._notifyItemChanged(nextId);
      }
    }
  }
  _notifyItemChanged(nextItemId) {
    this.navItemChange$.next(this._getItemById(nextItemId));
  }
  _getItemById(itemId) {
    return this.items && this.items.find((item) => item.id === itemId) || null;
  }
  static {
    this.ɵfac = function NgbNav_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNav)(ɵɵinjectAttribute("role"));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbNav,
      selectors: [["", "ngbNav", ""]],
      contentQueries: function NgbNav_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbNavItem, 4)(dirIndex, NgbNavLinkBase, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.links = _t);
        }
      },
      hostAttrs: [1, "nav"],
      hostVars: 4,
      hostBindings: function NgbNav_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.arrowLeft", function NgbNav_keydown_arrowLeft_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("keydown.arrowRight", function NgbNav_keydown_arrowRight_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("keydown.arrowDown", function NgbNav_keydown_arrowDown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("keydown.arrowUp", function NgbNav_keydown_arrowUp_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("keydown.Home", function NgbNav_keydown_Home_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("keydown.End", function NgbNav_keydown_End_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("focusout", function NgbNav_focusout_HostBindingHandler($event) {
            return ctx.onFocusout($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("aria-orientation", ctx.orientation === "vertical" && ctx.roles === "tablist" ? "vertical" : void 0)("role", ctx.role ? ctx.role : ctx.roles ? "tablist" : void 0);
          ɵɵclassProp("flex-column", ctx.orientation === "vertical");
        }
      },
      inputs: {
        activeId: "activeId",
        animation: "animation",
        destroyOnHide: "destroyOnHide",
        orientation: "orientation",
        roles: "roles",
        keyboard: "keyboard"
      },
      outputs: {
        activeIdChange: "activeIdChange",
        shown: "shown",
        hidden: "hidden",
        navChange: "navChange"
      },
      exportAs: ["ngbNav"],
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNav, [{
    type: Directive,
    args: [{
      selector: "[ngbNav]",
      exportAs: "ngbNav",
      host: {
        class: "nav",
        "[class.flex-column]": `orientation === 'vertical'`,
        "[attr.aria-orientation]": `orientation === 'vertical' && roles === 'tablist' ? 'vertical' : undefined`,
        "[attr.role]": `role ? role : roles ? 'tablist' : undefined`,
        "(keydown.arrowLeft)": "onKeyDown($any($event))",
        "(keydown.arrowRight)": "onKeyDown($any($event))",
        "(keydown.arrowDown)": "onKeyDown($any($event))",
        "(keydown.arrowUp)": "onKeyDown($any($event))",
        "(keydown.Home)": "onKeyDown($any($event))",
        "(keydown.End)": "onKeyDown($any($event))",
        "(focusout)": "onFocusout($any($event))"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["role"]
    }]
  }], {
    activeId: [{
      type: Input
    }],
    activeIdChange: [{
      type: Output
    }],
    animation: [{
      type: Input
    }],
    destroyOnHide: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    roles: [{
      type: Input
    }],
    keyboard: [{
      type: Input
    }],
    shown: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }],
    items: [{
      type: ContentChildren,
      args: [NgbNavItem]
    }],
    links: [{
      type: ContentChildren,
      args: [forwardRef(() => NgbNavLinkBase), {
        descendants: true
      }]
    }],
    navChange: [{
      type: Output
    }]
  });
})();
var NgbNavLinkBase = class _NgbNavLinkBase {
  constructor(role) {
    this.role = role;
    this.navItem = inject(NgbNavItem);
    this.nav = inject(NgbNav);
    this.nativeElement = inject(ElementRef).nativeElement;
  }
  get tabindex() {
    if (this.nav.keyboard === false) {
      return this.navItem.disabled ? -1 : void 0;
    }
    if (this.nav._navigatingWithKeyboard) {
      return -1;
    }
    return this.navItem.disabled || !this.navItem.active ? -1 : void 0;
  }
  static {
    this.ɵfac = function NgbNavLinkBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavLinkBase)(ɵɵinjectAttribute("role"));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbNavLinkBase,
      selectors: [["", "ngbNavLink", ""]],
      hostAttrs: [1, "nav-link"],
      hostVars: 12,
      hostBindings: function NgbNavLinkBase_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.navItem.domId);
          ɵɵattribute("role", ctx.role ? ctx.role : ctx.nav.roles ? "tab" : void 0)("tabindex", ctx.tabindex)("aria-controls", ctx.navItem.isPanelInDom() ? ctx.navItem.panelDomId : null)("aria-selected", ctx.navItem.active)("aria-disabled", ctx.navItem.disabled);
          ɵɵclassProp("nav-item", ctx.navItem.isNgContainer())("active", ctx.navItem.active)("disabled", ctx.navItem.disabled);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavLinkBase, [{
    type: Directive,
    args: [{
      selector: "[ngbNavLink]",
      host: {
        "[id]": "navItem.domId",
        class: "nav-link",
        "[class.nav-item]": "navItem.isNgContainer()",
        "[attr.role]": `role ? role : nav.roles ? 'tab' : undefined`,
        "[class.active]": "navItem.active",
        "[class.disabled]": "navItem.disabled",
        "[attr.tabindex]": "tabindex",
        "[attr.aria-controls]": "navItem.isPanelInDom() ? navItem.panelDomId : null",
        "[attr.aria-selected]": "navItem.active",
        "[attr.aria-disabled]": "navItem.disabled"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["role"]
    }]
  }], null);
})();
var NgbNavLinkButton = class _NgbNavLinkButton extends NgbNavLinkBase {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbNavLinkButton_BaseFactory;
      return function NgbNavLinkButton_Factory(__ngFactoryType__) {
        return (ɵNgbNavLinkButton_BaseFactory || (ɵNgbNavLinkButton_BaseFactory = ɵɵgetInheritedFactory(_NgbNavLinkButton)))(__ngFactoryType__ || _NgbNavLinkButton);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbNavLinkButton,
      selectors: [["button", "ngbNavLink", ""]],
      hostAttrs: ["type", "button"],
      hostVars: 1,
      hostBindings: function NgbNavLinkButton_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NgbNavLinkButton_click_HostBindingHandler() {
            return ctx.nav.click(ctx.navItem);
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("disabled", ctx.navItem.disabled);
        }
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavLinkButton, [{
    type: Directive,
    args: [{
      selector: "button[ngbNavLink]",
      host: {
        type: "button",
        "[disabled]": "navItem.disabled",
        "(click)": "nav.click(navItem)"
      }
    }]
  }], null, null);
})();
var NgbNavLink = class _NgbNavLink extends NgbNavLinkBase {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbNavLink_BaseFactory;
      return function NgbNavLink_Factory(__ngFactoryType__) {
        return (ɵNgbNavLink_BaseFactory || (ɵNgbNavLink_BaseFactory = ɵɵgetInheritedFactory(_NgbNavLink)))(__ngFactoryType__ || _NgbNavLink);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbNavLink,
      selectors: [["a", "ngbNavLink", ""]],
      hostAttrs: ["href", ""],
      hostBindings: function NgbNavLink_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NgbNavLink_click_HostBindingHandler($event) {
            ctx.nav.click(ctx.navItem);
            return $event.preventDefault();
          });
        }
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavLink, [{
    type: Directive,
    args: [{
      selector: "a[ngbNavLink]",
      host: {
        href: "",
        "(click)": "nav.click(navItem); $event.preventDefault()"
      }
    }]
  }], null, null);
})();
var ngbNavFadeOutTransition = ({
  classList
}) => {
  classList.remove("show");
  return () => classList.remove("active");
};
var ngbNavFadeInTransition = (element, animation) => {
  if (animation) {
    reflow(element);
  }
  element.classList.add("show");
};
var NgbNavPane = class _NgbNavPane {
  constructor() {
    this.nativeElement = inject(ElementRef).nativeElement;
  }
  static {
    this.ɵfac = function NgbNavPane_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavPane)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbNavPane,
      selectors: [["", "ngbNavPane", ""]],
      hostAttrs: [1, "tab-pane"],
      hostVars: 5,
      hostBindings: function NgbNavPane_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.item.panelDomId);
          ɵɵattribute("role", ctx.role ? ctx.role : ctx.nav.roles ? "tabpanel" : void 0)("aria-labelledby", ctx.item.domId);
          ɵɵclassProp("fade", ctx.nav.animation);
        }
      },
      inputs: {
        item: "item",
        nav: "nav",
        role: "role"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavPane, [{
    type: Directive,
    args: [{
      selector: "[ngbNavPane]",
      host: {
        "[id]": "item.panelDomId",
        class: "tab-pane",
        "[class.fade]": "nav.animation",
        "[attr.role]": 'role ? role : nav.roles ? "tabpanel" : undefined',
        "[attr.aria-labelledby]": "item.domId"
      }
    }]
  }], null, {
    item: [{
      type: Input
    }],
    nav: [{
      type: Input
    }],
    role: [{
      type: Input
    }]
  });
})();
var NgbNavOutlet = class _NgbNavOutlet {
  constructor() {
    this._cd = inject(ChangeDetectorRef);
    this._ngZone = inject(NgZone);
    this._activePane = null;
  }
  isPanelTransitioning(item) {
    return this._activePane?.item === item;
  }
  ngAfterViewInit() {
    this._updateActivePane();
    this.nav.navItemChange$.pipe(takeUntilDestroyed(this.nav.destroyRef), startWith(this._activePane?.item || null), distinctUntilChanged(), skip(1)).subscribe((nextItem) => {
      const options = {
        animation: this.nav.animation,
        runningTransition: "stop"
      };
      this._cd.detectChanges();
      if (this._activePane) {
        ngbRunTransition(this._ngZone, this._activePane.nativeElement, ngbNavFadeOutTransition, options).subscribe(() => {
          const activeItem = this._activePane?.item;
          this._activePane = this._getPaneForItem(nextItem);
          this._cd.markForCheck();
          if (this._activePane) {
            this._activePane.nativeElement.classList.add("active");
            ngbRunTransition(this._ngZone, this._activePane.nativeElement, ngbNavFadeInTransition, options).subscribe(() => {
              if (nextItem) {
                nextItem.shown.emit();
                this.nav.shown.emit(nextItem.id);
              }
            });
          }
          if (activeItem) {
            activeItem.hidden.emit();
            this.nav.hidden.emit(activeItem.id);
          }
        });
      } else {
        this._updateActivePane();
      }
    });
  }
  _updateActivePane() {
    this._activePane = this._getActivePane();
    this._activePane?.nativeElement.classList.add("show", "active");
  }
  _getPaneForItem(item) {
    return this._panes && this._panes.find((pane) => pane.item === item) || null;
  }
  _getActivePane() {
    return this._panes && this._panes.find((pane) => pane.item.active) || null;
  }
  static {
    this.ɵfac = function NgbNavOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavOutlet)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbNavOutlet,
      selectors: [["", "ngbNavOutlet", ""]],
      viewQuery: function NgbNavOutlet_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(NgbNavPane, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._panes = _t);
        }
      },
      hostAttrs: [1, "tab-content"],
      inputs: {
        paneRole: "paneRole",
        nav: [0, "ngbNavOutlet", "nav"]
      },
      attrs: _c0,
      decls: 2,
      vars: 0,
      consts: [["ngbNavPane", "", 3, "item", "nav", "role"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NgbNavOutlet_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵrepeaterCreate(0, NgbNavOutlet_For_1_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
        }
        if (rf & 2) {
          ɵɵrepeater(ctx.nav.items);
        }
      },
      dependencies: [NgbNavPane, NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavOutlet, [{
    type: Component,
    args: [{
      selector: "[ngbNavOutlet]",
      imports: [NgbNavPane, NgTemplateOutlet],
      host: {
        class: "tab-content"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
		@for (item of nav.items; track item) {
			@if (item.isPanelInDom() || isPanelTransitioning(item)) {
				<div ngbNavPane [item]="item" [nav]="nav" [role]="paneRole">
					<ng-template
						[ngTemplateOutlet]="item.contentTpl?.templateRef || null"
						[ngTemplateOutletContext]="{ $implicit: item.active || isPanelTransitioning(item) }"
					/>
				</div>
			}
		}
	`
    }]
  }], null, {
    _panes: [{
      type: ViewChildren,
      args: [NgbNavPane]
    }],
    paneRole: [{
      type: Input
    }],
    nav: [{
      type: Input,
      args: ["ngbNavOutlet"]
    }]
  });
})();
var NGB_NAV_DIRECTIVES = [NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkButton, NgbNavLinkBase, NgbNavOutlet, NgbNavPane];
var NgbNavModule = class _NgbNavModule {
  static {
    this.ɵfac = function NgbNavModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbNavModule,
      imports: [NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkButton, NgbNavLinkBase, NgbNavOutlet, NgbNavPane],
      exports: [NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkButton, NgbNavLinkBase, NgbNavOutlet, NgbNavPane]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavModule, [{
    type: NgModule,
    args: [{
      imports: NGB_NAV_DIRECTIVES,
      exports: NGB_NAV_DIRECTIVES
    }]
  }], null, null);
})();

export {
  NgbNavConfig,
  NgbNavContent,
  NgbNavItemRole,
  NgbNavItem,
  NgbNav,
  NgbNavLinkBase,
  NgbNavLinkButton,
  NgbNavLink,
  NgbNavPane,
  NgbNavOutlet,
  NgbNavModule
};
//# sourceMappingURL=chunk-PCWH37BR.js.map
