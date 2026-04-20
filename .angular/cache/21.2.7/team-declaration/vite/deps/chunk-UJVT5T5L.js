import {
  NgbConfig
} from "./chunk-Y74BDHYX.js";
import {
  NgTemplateOutlet
} from "./chunk-WGIH4H76.js";
import {
  PopupService,
  addPopperOffset,
  isString,
  listenToTriggers,
  ngbAutoClose,
  ngbCompleteTransition,
  ngbPositioning
} from "./chunk-T3UYF4PN.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  TemplateRef,
  ViewEncapsulation,
  afterEveryRender,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RCRTD27T.js";
import {
  Subject
} from "./chunk-6P4RME4L.js";

// node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-popover.mjs
var _c0 = ["*"];
function NgbPopoverWindow_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵtextInterpolate(ctx_r0.title);
  }
}
function NgbPopoverWindow_Conditional_1_ng_template_3_Template(rf, ctx) {
}
function NgbPopoverWindow_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h3", 2);
    ɵɵtemplate(1, NgbPopoverWindow_Conditional_1_ng_template_1_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, NgbPopoverWindow_Conditional_1_ng_template_3_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const simpleTitle_r2 = ɵɵreference(2);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.isTitleTemplate() ? ctx_r0.title : simpleTitle_r2)("ngTemplateOutletContext", ctx_r0.context);
  }
}
var NgbPopoverConfig = class _NgbPopoverConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.autoClose = true;
    this.placement = "auto";
    this.popperOptions = (options) => options;
    this.triggers = "click";
    this.disablePopover = false;
    this.openDelay = 0;
    this.closeDelay = 0;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.ɵfac = function NgbPopoverConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPopoverConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbPopoverConfig,
      factory: _NgbPopoverConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPopoverConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var nextId = 0;
var NgbPopoverWindow = class _NgbPopoverWindow {
  isTitleTemplate() {
    return this.title instanceof TemplateRef;
  }
  static {
    this.ɵfac = function NgbPopoverWindow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPopoverWindow)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbPopoverWindow,
      selectors: [["ngb-popover-window"]],
      hostAttrs: ["role", "tooltip", 2, "position", "absolute"],
      hostVars: 5,
      hostBindings: function NgbPopoverWindow_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mouseenter", function NgbPopoverWindow_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          })("mouseleave", function NgbPopoverWindow_mouseleave_HostBindingHandler() {
            return ctx.onMouseLeave();
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.id);
          ɵɵclassMap("popover" + (ctx.popoverClass ? " " + ctx.popoverClass : ""));
          ɵɵclassProp("fade", ctx.animation);
        }
      },
      inputs: {
        animation: "animation",
        title: "title",
        id: "id",
        popoverClass: "popoverClass",
        context: "context",
        onMouseEnter: "onMouseEnter",
        onMouseLeave: "onMouseLeave"
      },
      ngContentSelectors: _c0,
      decls: 4,
      vars: 1,
      consts: [["simpleTitle", ""], ["data-popper-arrow", "", 1, "popover-arrow"], [1, "popover-header"], [1, "popover-body"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NgbPopoverWindow_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelement(0, "div", 1);
          ɵɵconditionalCreate(1, NgbPopoverWindow_Conditional_1_Template, 4, 2, "h3", 2);
          ɵɵelementStart(2, "div", 3);
          ɵɵprojection(3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(ctx.title ? 1 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPopoverWindow, [{
    type: Component,
    args: [{
      selector: "ngb-popover-window",
      imports: [NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": '"popover" + (popoverClass ? " " + popoverClass : "")',
        "[class.fade]": "animation",
        role: "tooltip",
        "[id]": "id",
        style: "position: absolute;",
        "(mouseenter)": "onMouseEnter()",
        "(mouseleave)": "onMouseLeave()"
      },
      template: `
		<div class="popover-arrow" data-popper-arrow></div>
		@if (title) {
			<h3 class="popover-header">
				<ng-template #simpleTitle>{{ title }}</ng-template>
				<ng-template
					[ngTemplateOutlet]="isTitleTemplate() ? $any(title) : simpleTitle"
					[ngTemplateOutletContext]="context"
				/>
			</h3>
		}
		<div class="popover-body">
			<ng-content />
		</div>
	`
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    popoverClass: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    onMouseEnter: [{
      type: Input
    }],
    onMouseLeave: [{
      type: Input
    }]
  });
})();
var NgbPopover = class _NgbPopover {
  constructor() {
    this._config = inject(NgbPopoverConfig);
    this.animation = this._config.animation;
    this.autoClose = this._config.autoClose;
    this.placement = this._config.placement;
    this.popperOptions = this._config.popperOptions;
    this.triggers = this._config.triggers;
    this.container = this._config.container;
    this.disablePopover = this._config.disablePopover;
    this.popoverClass = this._config.popoverClass;
    this.openDelay = this._config.openDelay;
    this.closeDelay = this._config.closeDelay;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
    this._nativeElement = inject(ElementRef).nativeElement;
    this._ngZone = inject(NgZone);
    this._document = inject(DOCUMENT);
    this._changeDetector = inject(ChangeDetectorRef);
    this._injector = inject(Injector);
    this._ngbPopoverWindowId = `ngb-popover-${nextId++}`;
    this._popupService = new PopupService(NgbPopoverWindow);
    this._windowRef = null;
    this._positioning = ngbPositioning();
    this._mouseEnterPopover = new Subject();
    this._mouseLeavePopover = new Subject();
    this._opening = true;
    this._transitioning = false;
  }
  /**
   * Opens the popover.
   *
   * This is considered to be a "manual" triggering.
   * The `context` is an optional value to be injected into the popover template when it is created.
   */
  open(context) {
    if (!this._opening && this._transitioning) {
      this._transitioning = false;
      ngbCompleteTransition(this._windowRef.location.nativeElement);
    }
    if (!this._windowRef && !this._isDisabled()) {
      const {
        windowRef,
        transition$
      } = this._popupService.open(this.ngbPopover, context ?? this.popoverContext, this.animation);
      this._opening = true;
      this._transitioning = true;
      this._windowRef = windowRef;
      this._windowRef.setInput("animation", this.animation);
      this._windowRef.setInput("title", this.popoverTitle);
      this._windowRef.setInput("context", context ?? this.popoverContext);
      this._windowRef.setInput("popoverClass", this.popoverClass);
      this._windowRef.setInput("id", this._ngbPopoverWindowId);
      this._windowRef.setInput("onMouseEnter", () => this._mouseEnterPopover.next());
      this._windowRef.setInput("onMouseLeave", () => this._mouseLeavePopover.next());
      this._getPositionTargetElement().setAttribute("aria-describedby", this._ngbPopoverWindowId);
      if (this.container === "body") {
        this._document.body.appendChild(this._windowRef.location.nativeElement);
      }
      this._windowRef.changeDetectorRef.detectChanges();
      this._windowRef.changeDetectorRef.markForCheck();
      this._ngZone.runOutsideAngular(() => {
        this._positioning.createPopper({
          hostElement: this._getPositionTargetElement(),
          targetElement: this._windowRef.location.nativeElement,
          placement: this.placement,
          baseClass: "bs-popover",
          updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 8])(options))
        });
        Promise.resolve().then(() => {
          this._positioning.update();
        });
        this._afterRenderRef = afterEveryRender({
          mixedReadWrite: () => {
            this._positioning.update();
          }
        }, {
          injector: this._injector
        });
      });
      ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden, [this._windowRef.location.nativeElement]);
      transition$.subscribe(() => {
        if (this._transitioning) {
          this._transitioning = false;
          this.shown.emit();
        }
      });
    }
  }
  /**
   * Closes the popover.
   *
   * This is considered to be a "manual" triggering of the popover.
   */
  close(animation = this.animation) {
    if (this._opening && this._transitioning) {
      this._transitioning = false;
      ngbCompleteTransition(this._windowRef.location.nativeElement);
    }
    if (this._windowRef) {
      this._getPositionTargetElement().removeAttribute("aria-describedby");
      this._opening = false;
      this._transitioning = true;
      this._popupService.close(animation).subscribe(() => {
        this._windowRef = null;
        this._positioning.destroy();
        this._afterRenderRef?.destroy();
        if (this._transitioning) {
          this._transitioning = false;
          this.hidden.emit();
        }
        this._changeDetector.markForCheck();
      });
    }
  }
  /**
   * Toggles the popover.
   *
   * This is considered to be a "manual" triggering of the popover.
   */
  toggle() {
    if (this._windowRef) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Returns `true`, if the popover is currently shown.
   */
  isOpen() {
    return this._windowRef != null;
  }
  ngOnInit() {
    this._unregisterListenersFn = listenToTriggers(this._nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay, this._mouseEnterPopover, this._mouseLeavePopover);
  }
  ngOnChanges({
    ngbPopover,
    popoverTitle,
    disablePopover,
    popoverClass
  }) {
    if (popoverClass && this.isOpen()) {
      this._windowRef.setInput("popoverClass", popoverClass.currentValue);
    }
    if ((ngbPopover || popoverTitle || disablePopover) && this._isDisabled()) {
      this.close();
    }
  }
  ngOnDestroy() {
    this.close(false);
    this._unregisterListenersFn?.();
  }
  _isDisabled() {
    return this.disablePopover ? true : !this.ngbPopover && !this.popoverTitle;
  }
  _getPositionTargetElement() {
    return (isString(this.positionTarget) ? this._document.querySelector(this.positionTarget) : this.positionTarget) || this._nativeElement;
  }
  static {
    this.ɵfac = function NgbPopover_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPopover)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbPopover,
      selectors: [["", "ngbPopover", ""]],
      inputs: {
        animation: "animation",
        autoClose: "autoClose",
        ngbPopover: "ngbPopover",
        popoverTitle: "popoverTitle",
        placement: "placement",
        popperOptions: "popperOptions",
        triggers: "triggers",
        positionTarget: "positionTarget",
        container: "container",
        disablePopover: "disablePopover",
        popoverClass: "popoverClass",
        popoverContext: "popoverContext",
        openDelay: "openDelay",
        closeDelay: "closeDelay"
      },
      outputs: {
        shown: "shown",
        hidden: "hidden"
      },
      exportAs: ["ngbPopover"],
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPopover, [{
    type: Directive,
    args: [{
      selector: "[ngbPopover]",
      exportAs: "ngbPopover"
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    autoClose: [{
      type: Input
    }],
    ngbPopover: [{
      type: Input
    }],
    popoverTitle: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    popperOptions: [{
      type: Input
    }],
    triggers: [{
      type: Input
    }],
    positionTarget: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    disablePopover: [{
      type: Input
    }],
    popoverClass: [{
      type: Input
    }],
    popoverContext: [{
      type: Input
    }],
    openDelay: [{
      type: Input
    }],
    closeDelay: [{
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
var NgbPopoverModule = class _NgbPopoverModule {
  static {
    this.ɵfac = function NgbPopoverModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPopoverModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbPopoverModule,
      imports: [NgbPopover],
      exports: [NgbPopover]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPopoverModule, [{
    type: NgModule,
    args: [{
      imports: [NgbPopover],
      exports: [NgbPopover]
    }]
  }], null, null);
})();

export {
  NgbPopoverConfig,
  NgbPopover,
  NgbPopoverModule
};
//# sourceMappingURL=chunk-UJVT5T5L.js.map
