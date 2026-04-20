import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-RCRTD27T.js";

// node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-config.mjs
var NgbConfig = class _NgbConfig {
  constructor() {
    this.animation = true;
  }
  static {
    this.ɵfac = function NgbConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbConfig,
      factory: _NgbConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  NgbConfig
};
//# sourceMappingURL=chunk-Y74BDHYX.js.map
