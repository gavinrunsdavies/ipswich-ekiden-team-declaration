import {
  getValueInRange,
  isNumber
} from "./chunk-T3UYF4PN.js";
import {
  PercentPipe
} from "./chunk-TRMZSHJ7.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  Input,
  NgModule,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵi18n,
  ɵɵi18nApply,
  ɵɵi18nExp,
  ɵɵinterpolate2,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵstyleProp
} from "./chunk-RCRTD27T.js";

// node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-progressbar.mjs
var _c0 = ["*"];
function NgbProgressbar_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "span");
    ɵɵi18n(1, 0);
    ɵɵpipe(2, "percent");
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵi18nExp(ɵɵpipeBind1(2, 1, ctx_r0.getValue() / ctx_r0.max));
    ɵɵi18nApply(1);
  }
}
var NgbProgressbarConfig = class _NgbProgressbarConfig {
  constructor() {
    this.max = 100;
    this.animated = false;
    this.ariaLabel = "progress bar";
    this.striped = false;
    this.showValue = false;
  }
  static {
    this.ɵfac = function NgbProgressbarConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbProgressbarConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbProgressbarConfig,
      factory: _NgbProgressbarConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbProgressbarConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbProgressbar = class _NgbProgressbar {
  /**
   * The maximal value to be displayed in the progress bar.
   *
   * Should be a positive number. Will default to 100 otherwise.
   */
  set max(max) {
    this._max = !isNumber(max) || max <= 0 ? 100 : max;
  }
  get max() {
    return this._max;
  }
  constructor() {
    this._config = inject(NgbProgressbarConfig);
    this.stacked = inject(NgbProgressbarStacked, {
      optional: true
    });
    this.animated = this._config.animated;
    this.ariaLabel = this._config.ariaLabel;
    this.striped = this._config.striped;
    this.showValue = this._config.showValue;
    this.textType = this._config.textType;
    this.type = this._config.type;
    this.value = 0;
    this.height = this._config.height;
    this.max = this._config.max;
  }
  getValue() {
    return getValueInRange(this.value, this.max);
  }
  getPercentValue() {
    return 100 * this.getValue() / this.max;
  }
  static {
    this.ɵfac = function NgbProgressbar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbProgressbar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbProgressbar,
      selectors: [["ngb-progressbar"]],
      hostAttrs: ["role", "progressbar", "aria-valuemin", "0", 1, "progress"],
      hostVars: 7,
      hostBindings: function NgbProgressbar_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("aria-valuenow", ctx.getValue())("aria-valuemax", ctx.max)("aria-label", ctx.ariaLabel);
          ɵɵstyleProp("width", ctx.stacked ? ctx.getPercentValue() : null, "%")("height", ctx.height);
        }
      },
      inputs: {
        max: "max",
        animated: "animated",
        ariaLabel: "ariaLabel",
        striped: "striped",
        showValue: "showValue",
        textType: "textType",
        type: "type",
        value: "value",
        height: "height"
      },
      ngContentSelectors: _c0,
      decls: 3,
      vars: 11,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PROGRESSBAR_MJS_0 = goog.getMsg("{$interpolation}", {
            "interpolation": "�0�"
          }, {
            original_code: {
              "interpolation": "{{ getValue() / max | percent }}"
            }
          });
          i18n_0 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_PROGRESSBAR_MJS_0;
        } else {
          i18n_0 = $localize`:@@ngb.progressbar.value:${"�0�"}:INTERPOLATION:`;
        }
        return [i18n_0];
      },
      template: function NgbProgressbar_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵdomElementStart(0, "div");
          ɵɵconditionalCreate(1, NgbProgressbar_Conditional_1_Template, 3, 3, "span");
          ɵɵprojection(2);
          ɵɵdomElementEnd();
        }
        if (rf & 2) {
          ɵɵclassMap(ɵɵinterpolate2("progress-bar", ctx.type ? ctx.textType ? " bg-" + ctx.type : " text-bg-" + ctx.type : "", "", ctx.textType ? " text-" + ctx.textType : ""));
          ɵɵstyleProp("width", !ctx.stacked ? ctx.getPercentValue() : null, "%");
          ɵɵclassProp("progress-bar-animated", ctx.animated)("progress-bar-striped", ctx.striped);
          ɵɵadvance();
          ɵɵconditional(ctx.showValue ? 1 : -1);
        }
      },
      dependencies: [PercentPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbProgressbar, [{
    type: Component,
    args: [{
      selector: "ngb-progressbar",
      imports: [PercentPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "progress",
        role: "progressbar",
        "[attr.aria-valuenow]": "getValue()",
        "aria-valuemin": "0",
        "[attr.aria-valuemax]": "max",
        "[attr.aria-label]": "ariaLabel",
        "[style.width.%]": "stacked ? getPercentValue() : null",
        "[style.height]": "height"
      },
      template: `
		<div
			class="progress-bar{{ type ? (textType ? ' bg-' + type : ' text-bg-' + type) : '' }}{{
				textType ? ' text-' + textType : ''
			}}"
			[class.progress-bar-animated]="animated"
			[class.progress-bar-striped]="striped"
			[style.width.%]="!stacked ? getPercentValue() : null"
		>
			@if (showValue) {
				<span i18n="@@ngb.progressbar.value">{{ getValue() / max | percent }}</span>
			}
			<ng-content />
		</div>
	`
    }]
  }], () => [], {
    max: [{
      type: Input
    }],
    animated: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    striped: [{
      type: Input
    }],
    showValue: [{
      type: Input
    }],
    textType: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        required: true
      }]
    }],
    height: [{
      type: Input
    }]
  });
})();
var NgbProgressbarStacked = class _NgbProgressbarStacked {
  static {
    this.ɵfac = function NgbProgressbarStacked_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbProgressbarStacked)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbProgressbarStacked,
      selectors: [["ngb-progressbar-stacked"]],
      hostAttrs: [1, "progress-stacked"],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function NgbProgressbarStacked_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbProgressbarStacked, [{
    type: Component,
    args: [{
      selector: "ngb-progressbar-stacked",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "progress-stacked"
      },
      template: `<ng-content></ng-content>`
    }]
  }], null, null);
})();
var NgbProgressbarModule = class _NgbProgressbarModule {
  static {
    this.ɵfac = function NgbProgressbarModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbProgressbarModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbProgressbarModule,
      imports: [NgbProgressbar, NgbProgressbarStacked],
      exports: [NgbProgressbar, NgbProgressbarStacked]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbProgressbarModule, [{
    type: NgModule,
    args: [{
      imports: [NgbProgressbar, NgbProgressbarStacked],
      exports: [NgbProgressbar, NgbProgressbarStacked]
    }]
  }], null, null);
})();

export {
  NgbProgressbarConfig,
  NgbProgressbar,
  NgbProgressbarStacked,
  NgbProgressbarModule
};
//# sourceMappingURL=chunk-ZYDWGSML.js.map
