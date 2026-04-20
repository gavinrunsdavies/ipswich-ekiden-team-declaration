import {
  NgbConfig
} from "./chunk-Y74BDHYX.js";
import {
  NgTemplateOutlet
} from "./chunk-WGIH4H76.js";
import {
  ngbRunTransition,
  reflow
} from "./chunk-T3UYF4PN.js";
import {
  Attribute,
  Component,
  ContentChild,
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
  afterNextRender,
  inject,
  setClassMetadata,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RCRTD27T.js";

// node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-toast.mjs
var _c0 = ["*"];
function NgbToast_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "strong", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.header);
  }
}
function NgbToast_Conditional_2_ng_template_1_Template(rf, ctx) {
}
function NgbToast_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, NgbToast_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementStart(2, "button", 5);
    ɵɵlistener("click", function NgbToast_Conditional_2_Template_button_click_2_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.hide());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const headerTpl_r3 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentHeaderTpl || headerTpl_r3);
  }
}
var NgbToastConfig = class _NgbToastConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.autohide = true;
    this.delay = 5e3;
    this.ariaLive = "polite";
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.ɵfac = function NgbToastConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbToastConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbToastConfig,
      factory: _NgbToastConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbToastConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ngbToastFadeInTransition = (element, animation) => {
  const {
    classList
  } = element;
  if (animation) {
    classList.add("fade");
  } else {
    classList.add("show");
    return;
  }
  reflow(element);
  classList.add("show", "showing");
  return () => {
    classList.remove("showing");
  };
};
var ngbToastFadeOutTransition = ({
  classList
}) => {
  classList.add("showing");
  return () => {
    classList.remove("show", "showing");
  };
};
var NgbToastHeader = class _NgbToastHeader {
  static {
    this.ɵfac = function NgbToastHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbToastHeader)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbToastHeader,
      selectors: [["", "ngbToastHeader", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbToastHeader, [{
    type: Directive,
    args: [{
      selector: "[ngbToastHeader]"
    }]
  }], null, null);
})();
var NgbToast = class _NgbToast {
  constructor(ariaLive) {
    this.ariaLive = ariaLive;
    this._config = inject(NgbToastConfig);
    this._zone = inject(NgZone);
    this._injector = inject(Injector);
    this._element = inject(ElementRef);
    this.animation = this._config.animation;
    this.delay = this._config.delay;
    this.autohide = this._config.autohide;
    this.contentHeaderTpl = null;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
    this.ariaLive ??= this._config.ariaLive;
  }
  ngAfterContentInit() {
    afterNextRender({
      mixedReadWrite: () => {
        this._init();
        this.show();
      }
    }, {
      injector: this._injector
    });
  }
  ngOnChanges(changes) {
    if ("autohide" in changes) {
      this._clearTimeout();
      this._init();
    }
  }
  /**
   * Triggers toast closing programmatically.
   *
   * The returned observable will emit and be completed once the closing transition has finished.
   * If the animations are turned off this happens synchronously.
   *
   * Alternatively you could listen or subscribe to the `(hidden)` output
   *
   * @since 8.0.0
   */
  hide() {
    this._clearTimeout();
    const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbToastFadeOutTransition, {
      animation: this.animation,
      runningTransition: "stop"
    });
    transition.subscribe(() => {
      this.hidden.emit();
    });
    return transition;
  }
  /**
   * Triggers toast opening programmatically.
   *
   * The returned observable will emit and be completed once the opening transition has finished.
   * If the animations are turned off this happens synchronously.
   *
   * Alternatively you could listen or subscribe to the `(shown)` output
   *
   * @since 8.0.0
   */
  show() {
    const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbToastFadeInTransition, {
      animation: this.animation,
      runningTransition: "continue"
    });
    transition.subscribe(() => {
      this.shown.emit();
    });
    return transition;
  }
  _init() {
    if (this.autohide && !this._timeoutID) {
      this._timeoutID = setTimeout(() => this.hide(), this.delay);
    }
  }
  _clearTimeout() {
    if (this._timeoutID) {
      clearTimeout(this._timeoutID);
      this._timeoutID = null;
    }
  }
  static {
    this.ɵfac = function NgbToast_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbToast)(ɵɵinjectAttribute("aria-live"));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbToast,
      selectors: [["ngb-toast"]],
      contentQueries: function NgbToast_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbToastHeader, 7, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentHeaderTpl = _t.first);
        }
      },
      hostAttrs: ["role", "alert", "aria-atomic", "true", 1, "toast"],
      hostVars: 3,
      hostBindings: function NgbToast_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("aria-live", ctx.ariaLive);
          ɵɵclassProp("fade", ctx.animation);
        }
      },
      inputs: {
        animation: "animation",
        delay: "delay",
        autohide: "autohide",
        header: "header"
      },
      outputs: {
        shown: "shown",
        hidden: "hidden"
      },
      exportAs: ["ngbToast"],
      features: [ɵɵNgOnChangesFeature],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 1,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TOAST_MJS_0 = goog.getMsg("Close");
          i18n_0 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_TOAST_MJS_0;
        } else {
          i18n_0 = $localize`:@@ngb.toast.close-aria:Close`;
        }
        return [["headerTpl", ""], [1, "toast-header"], [1, "toast-body"], [1, "me-auto"], [3, "ngTemplateOutlet"], ["type", "button", "aria-label", i18n_0, 1, "btn-close", 3, "click"]];
      },
      template: function NgbToast_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, NgbToast_ng_template_0_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵconditionalCreate(2, NgbToast_Conditional_2_Template, 3, 1, "div", 1);
          ɵɵelementStart(3, "div", 2);
          ɵɵprojection(4);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵconditional(ctx.contentHeaderTpl || ctx.header ? 2 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      styles: ["ngb-toast{display:block}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}\n"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbToast, [{
    type: Component,
    args: [{
      selector: "ngb-toast",
      exportAs: "ngbToast",
      imports: [NgTemplateOutlet],
      encapsulation: ViewEncapsulation.None,
      host: {
        role: "alert",
        "[attr.aria-live]": "ariaLive",
        "aria-atomic": "true",
        class: "toast",
        "[class.fade]": "animation"
      },
      template: `
		<ng-template #headerTpl>
			<strong class="me-auto">{{ header }}</strong>
		</ng-template>
		@if (contentHeaderTpl || header) {
			<div class="toast-header">
				<ng-template [ngTemplateOutlet]="contentHeaderTpl || headerTpl" />
				<button
					type="button"
					class="btn-close"
					aria-label="Close"
					i18n-aria-label="@@ngb.toast.close-aria"
					(click)="hide()"
				>
				</button>
			</div>
		}
		<div class="toast-body">
			<ng-content />
		</div>
	`,
      styles: ["ngb-toast{display:block}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["aria-live"]
    }]
  }], {
    animation: [{
      type: Input
    }],
    delay: [{
      type: Input
    }],
    autohide: [{
      type: Input
    }],
    header: [{
      type: Input
    }],
    contentHeaderTpl: [{
      type: ContentChild,
      args: [NgbToastHeader, {
        read: TemplateRef,
        static: true
      }]
    }],
    shown: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }]
  });
})();
var NgbToastModule = class _NgbToastModule {
  static {
    this.ɵfac = function NgbToastModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbToastModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbToastModule,
      imports: [NgbToast, NgbToastHeader],
      exports: [NgbToast, NgbToastHeader]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbToastModule, [{
    type: NgModule,
    args: [{
      imports: [NgbToast, NgbToastHeader],
      exports: [NgbToast, NgbToastHeader]
    }]
  }], null, null);
})();

export {
  NgbToastConfig,
  NgbToastHeader,
  NgbToast,
  NgbToastModule
};
//# sourceMappingURL=chunk-G5ZYVMLG.js.map
