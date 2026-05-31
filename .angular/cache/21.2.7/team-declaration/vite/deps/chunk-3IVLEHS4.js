import {
  NgbConfig
} from "./chunk-Y74BDHYX.js";
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
  ViewEncapsulation,
  afterEveryRender,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-RCRTD27T.js";
import {
  Subject
} from "./chunk-6P4RME4L.js";

// node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-tooltip.mjs
var _c0 = ["*"];
var NgbTooltipConfig = class _NgbTooltipConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.autoClose = true;
    this.placement = "auto";
    this.popperOptions = (options) => options;
    this.triggers = "hover focus";
    this.disableTooltip = false;
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
    this.ɵfac = function NgbTooltipConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTooltipConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbTooltipConfig,
      factory: _NgbTooltipConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTooltipConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var nextId = 0;
var NgbTooltipWindow = class _NgbTooltipWindow {
  static {
    this.ɵfac = function NgbTooltipWindow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTooltipWindow)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbTooltipWindow,
      selectors: [["ngb-tooltip-window"]],
      hostAttrs: ["role", "tooltip"],
      hostVars: 5,
      hostBindings: function NgbTooltipWindow_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mouseenter", function NgbTooltipWindow_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          })("mouseleave", function NgbTooltipWindow_mouseleave_HostBindingHandler() {
            return ctx.onMouseLeave();
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.id);
          ɵɵclassMap("tooltip" + (ctx.tooltipClass ? " " + ctx.tooltipClass : ""));
          ɵɵclassProp("fade", ctx.animation);
        }
      },
      inputs: {
        animation: "animation",
        id: "id",
        tooltipClass: "tooltipClass",
        onMouseEnter: "onMouseEnter",
        onMouseLeave: "onMouseLeave"
      },
      ngContentSelectors: _c0,
      decls: 3,
      vars: 0,
      consts: [["data-popper-arrow", "", 1, "tooltip-arrow"], [1, "tooltip-inner"]],
      template: function NgbTooltipWindow_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵdomElement(0, "div", 0);
          ɵɵdomElementStart(1, "div", 1);
          ɵɵprojection(2);
          ɵɵdomElementEnd();
        }
      },
      styles: ["ngb-tooltip-window{pointer-events:none;position:absolute}ngb-tooltip-window .tooltip-inner{pointer-events:auto}ngb-tooltip-window.bs-tooltip-top,ngb-tooltip-window.bs-tooltip-bottom{padding-left:0;padding-right:0}ngb-tooltip-window.bs-tooltip-start,ngb-tooltip-window.bs-tooltip-end{padding-top:0;padding-bottom:0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTooltipWindow, [{
    type: Component,
    args: [{
      selector: "ngb-tooltip-window",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": '"tooltip" + (tooltipClass ? " " + tooltipClass : "")',
        "[class.fade]": "animation",
        role: "tooltip",
        "[id]": "id",
        "(mouseenter)": "onMouseEnter()",
        "(mouseleave)": "onMouseLeave()"
      },
      template: `
		<div class="tooltip-arrow" data-popper-arrow></div>
		<div class="tooltip-inner">
			<ng-content />
		</div>
	`,
      styles: ["ngb-tooltip-window{pointer-events:none;position:absolute}ngb-tooltip-window .tooltip-inner{pointer-events:auto}ngb-tooltip-window.bs-tooltip-top,ngb-tooltip-window.bs-tooltip-bottom{padding-left:0;padding-right:0}ngb-tooltip-window.bs-tooltip-start,ngb-tooltip-window.bs-tooltip-end{padding-top:0;padding-bottom:0}\n"]
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    tooltipClass: [{
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
var NgbTooltip = class _NgbTooltip {
  constructor() {
    this._config = inject(NgbTooltipConfig);
    this.animation = this._config.animation;
    this.autoClose = this._config.autoClose;
    this.placement = this._config.placement;
    this.popperOptions = this._config.popperOptions;
    this.triggers = this._config.triggers;
    this.container = this._config.container;
    this.disableTooltip = this._config.disableTooltip;
    this.tooltipClass = this._config.tooltipClass;
    this.openDelay = this._config.openDelay;
    this.closeDelay = this._config.closeDelay;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
    this._nativeElement = inject(ElementRef).nativeElement;
    this._ngZone = inject(NgZone);
    this._document = inject(DOCUMENT);
    this._changeDetector = inject(ChangeDetectorRef);
    this._injector = inject(Injector);
    this._ngbTooltipWindowId = `ngb-tooltip-${nextId++}`;
    this._popupService = new PopupService(NgbTooltipWindow);
    this._windowRef = null;
    this._positioning = ngbPositioning();
    this._mouseEnterTooltip = new Subject();
    this._mouseLeaveTooltip = new Subject();
    this._opening = true;
    this._transitioning = false;
  }
  /**
   * The string content or a `TemplateRef` for the content to be displayed in the tooltip.
   *
   * If the content if falsy, the tooltip won't open.
   */
  set ngbTooltip(value) {
    this._ngbTooltip = value;
    if (!value && this._windowRef) {
      this.close();
    }
  }
  get ngbTooltip() {
    return this._ngbTooltip;
  }
  /**
   * Opens the tooltip.
   *
   * This is considered to be a "manual" triggering.
   * The `context` is an optional value to be injected into the tooltip template when it is created.
   */
  open(context) {
    if (!this._opening && this._transitioning) {
      this._transitioning = false;
      ngbCompleteTransition(this._windowRef.location.nativeElement);
    }
    if (!this._windowRef && this._ngbTooltip && !this.disableTooltip) {
      const {
        windowRef,
        transition$
      } = this._popupService.open(this._ngbTooltip, context ?? this.tooltipContext, this.animation);
      this._opening = true;
      this._transitioning = true;
      this._windowRef = windowRef;
      this._windowRef.setInput("animation", this.animation);
      this._windowRef.setInput("tooltipClass", this.tooltipClass);
      this._windowRef.setInput("id", this._ngbTooltipWindowId);
      this._windowRef.setInput("onMouseEnter", () => this._mouseEnterTooltip.next());
      this._windowRef.setInput("onMouseLeave", () => this._mouseLeaveTooltip.next());
      this._getPositionTargetElement().setAttribute("aria-describedby", this._ngbTooltipWindowId);
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
          baseClass: "bs-tooltip",
          updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 6])(options))
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
      ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden, [this._windowRef.location.nativeElement], [this._nativeElement]);
      transition$.subscribe(() => {
        if (this._transitioning) {
          this._transitioning = false;
          this.shown.emit();
        }
      });
    }
  }
  /**
   * Closes the tooltip.
   *
   * This is considered to be a "manual" triggering of the tooltip.
   */
  close(animation = this.animation) {
    if (this._opening && this._transitioning) {
      this._transitioning = false;
      ngbCompleteTransition(this._windowRef.location.nativeElement);
    }
    if (this._windowRef != null) {
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
   * Toggles the tooltip.
   *
   * This is considered to be a "manual" triggering of the tooltip.
   */
  toggle() {
    if (this._windowRef) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Returns `true`, if the tooltip is currently shown.
   */
  isOpen() {
    return this._windowRef != null;
  }
  ngOnInit() {
    this._unregisterListenersFn = listenToTriggers(this._nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay, this._mouseEnterTooltip, this._mouseLeaveTooltip);
  }
  ngOnChanges({
    tooltipClass
  }) {
    if (tooltipClass && this.isOpen()) {
      this._windowRef.setInput("tooltipClass", tooltipClass.currentValue);
    }
  }
  ngOnDestroy() {
    this.close(false);
    this._unregisterListenersFn?.();
  }
  _getPositionTargetElement() {
    return (isString(this.positionTarget) ? this._document.querySelector(this.positionTarget) : this.positionTarget) || this._nativeElement;
  }
  static {
    this.ɵfac = function NgbTooltip_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTooltip)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbTooltip,
      selectors: [["", "ngbTooltip", ""]],
      inputs: {
        animation: "animation",
        autoClose: "autoClose",
        placement: "placement",
        popperOptions: "popperOptions",
        triggers: "triggers",
        positionTarget: "positionTarget",
        container: "container",
        disableTooltip: "disableTooltip",
        tooltipClass: "tooltipClass",
        tooltipContext: "tooltipContext",
        openDelay: "openDelay",
        closeDelay: "closeDelay",
        ngbTooltip: "ngbTooltip"
      },
      outputs: {
        shown: "shown",
        hidden: "hidden"
      },
      exportAs: ["ngbTooltip"],
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTooltip, [{
    type: Directive,
    args: [{
      selector: "[ngbTooltip]",
      exportAs: "ngbTooltip"
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    autoClose: [{
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
    disableTooltip: [{
      type: Input
    }],
    tooltipClass: [{
      type: Input
    }],
    tooltipContext: [{
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
    }],
    ngbTooltip: [{
      type: Input
    }]
  });
})();
var NgbTooltipModule = class _NgbTooltipModule {
  static {
    this.ɵfac = function NgbTooltipModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTooltipModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbTooltipModule,
      imports: [NgbTooltip],
      exports: [NgbTooltip]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTooltipModule, [{
    type: NgModule,
    args: [{
      imports: [NgbTooltip],
      exports: [NgbTooltip]
    }]
  }], null, null);
})();

export {
  NgbTooltipConfig,
  NgbTooltip,
  NgbTooltipModule
};
//# sourceMappingURL=chunk-3IVLEHS4.js.map
