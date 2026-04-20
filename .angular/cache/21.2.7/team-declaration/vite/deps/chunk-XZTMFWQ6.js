import {
  FOCUSABLE_ELEMENTS_SELECTOR,
  addPopperOffset,
  getActiveElement,
  ngbAutoClose,
  ngbPositioning
} from "./chunk-T3UYF4PN.js";
import {
  ChangeDetectorRef,
  ContentChild,
  ContentChildren,
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
  afterEveryRender,
  afterNextRender,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵqueryRefresh
} from "./chunk-RCRTD27T.js";
import {
  fromEvent
} from "./chunk-QDTSZMXX.js";
import {
  Subject,
  take
} from "./chunk-6P4RME4L.js";

// node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-dropdown.mjs
var NgbDropdownConfig = class _NgbDropdownConfig {
  constructor() {
    this.autoClose = true;
    this.placement = ["bottom-start", "bottom-end", "top-start", "top-end"];
    this.popperOptions = (options) => options;
    this.container = null;
  }
  static {
    this.ɵfac = function NgbDropdownConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDropdownConfig,
      factory: _NgbDropdownConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbDropdownItem = class _NgbDropdownItem {
  constructor() {
    this._disabled = false;
    this.nativeElement = inject(ElementRef).nativeElement;
    this.tabindex = 0;
  }
  set disabled(value) {
    this._disabled = value === "" || value === true;
  }
  get disabled() {
    return this._disabled;
  }
  static {
    this.ɵfac = function NgbDropdownItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownItem)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbDropdownItem,
      selectors: [["", "ngbDropdownItem", ""]],
      hostAttrs: [1, "dropdown-item"],
      hostVars: 3,
      hostBindings: function NgbDropdownItem_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("tabIndex", ctx.disabled ? -1 : ctx.tabindex);
          ɵɵclassProp("disabled", ctx.disabled);
        }
      },
      inputs: {
        tabindex: "tabindex",
        disabled: "disabled"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownItem, [{
    type: Directive,
    args: [{
      selector: "[ngbDropdownItem]",
      host: {
        class: "dropdown-item",
        "[class.disabled]": "disabled",
        "[tabIndex]": "disabled ? -1 : tabindex"
      }
    }]
  }], null, {
    tabindex: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var NgbDropdownButtonItem = class _NgbDropdownButtonItem {
  constructor() {
    this.item = inject(NgbDropdownItem);
  }
  static {
    this.ɵfac = function NgbDropdownButtonItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownButtonItem)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbDropdownButtonItem,
      selectors: [["button", "ngbDropdownItem", ""]],
      hostVars: 1,
      hostBindings: function NgbDropdownButtonItem_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("disabled", ctx.item.disabled);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownButtonItem, [{
    type: Directive,
    args: [{
      selector: "button[ngbDropdownItem]",
      host: {
        "[disabled]": "item.disabled"
      }
    }]
  }], null, null);
})();
var NgbDropdownMenu = class _NgbDropdownMenu {
  constructor() {
    this.dropdown = inject(NgbDropdown);
    this.nativeElement = inject(ElementRef).nativeElement;
  }
  static {
    this.ɵfac = function NgbDropdownMenu_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownMenu)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbDropdownMenu,
      selectors: [["", "ngbDropdownMenu", ""]],
      contentQueries: function NgbDropdownMenu_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbDropdownItem, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menuItems = _t);
        }
      },
      hostAttrs: [1, "dropdown-menu"],
      hostVars: 2,
      hostBindings: function NgbDropdownMenu_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.ArrowUp", function NgbDropdownMenu_keydown_ArrowUp_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.ArrowDown", function NgbDropdownMenu_keydown_ArrowDown_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Home", function NgbDropdownMenu_keydown_Home_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.End", function NgbDropdownMenu_keydown_End_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Enter", function NgbDropdownMenu_keydown_Enter_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Space", function NgbDropdownMenu_keydown_Space_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Tab", function NgbDropdownMenu_keydown_Tab_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Shift.Tab", function NgbDropdownMenu_keydown_Shift_Tab_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("show", ctx.dropdown.isOpen());
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownMenu, [{
    type: Directive,
    args: [{
      selector: "[ngbDropdownMenu]",
      host: {
        class: "dropdown-menu",
        "[class.show]": "dropdown.isOpen()",
        "(keydown.ArrowUp)": "dropdown.onKeyDown($any($event))",
        "(keydown.ArrowDown)": "dropdown.onKeyDown($any($event))",
        "(keydown.Home)": "dropdown.onKeyDown($any($event))",
        "(keydown.End)": "dropdown.onKeyDown($any($event))",
        "(keydown.Enter)": "dropdown.onKeyDown($any($event))",
        "(keydown.Space)": "dropdown.onKeyDown($any($event))",
        "(keydown.Tab)": "dropdown.onKeyDown($any($event))",
        "(keydown.Shift.Tab)": "dropdown.onKeyDown($any($event))"
      }
    }]
  }], null, {
    menuItems: [{
      type: ContentChildren,
      args: [NgbDropdownItem]
    }]
  });
})();
var NgbDropdownAnchor = class _NgbDropdownAnchor {
  constructor() {
    this.dropdown = inject(NgbDropdown);
    this.nativeElement = inject(ElementRef).nativeElement;
  }
  static {
    this.ɵfac = function NgbDropdownAnchor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownAnchor)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbDropdownAnchor,
      selectors: [["", "ngbDropdownAnchor", ""]],
      hostAttrs: [1, "dropdown-toggle"],
      hostVars: 3,
      hostBindings: function NgbDropdownAnchor_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("aria-expanded", ctx.dropdown.isOpen());
          ɵɵclassProp("show", ctx.dropdown.isOpen());
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownAnchor, [{
    type: Directive,
    args: [{
      selector: "[ngbDropdownAnchor]",
      host: {
        class: "dropdown-toggle",
        "[class.show]": "dropdown.isOpen()",
        "[attr.aria-expanded]": "dropdown.isOpen()"
      }
    }]
  }], null, null);
})();
var NgbDropdownToggle = class _NgbDropdownToggle extends NgbDropdownAnchor {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbDropdownToggle_BaseFactory;
      return function NgbDropdownToggle_Factory(__ngFactoryType__) {
        return (ɵNgbDropdownToggle_BaseFactory || (ɵNgbDropdownToggle_BaseFactory = ɵɵgetInheritedFactory(_NgbDropdownToggle)))(__ngFactoryType__ || _NgbDropdownToggle);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbDropdownToggle,
      selectors: [["", "ngbDropdownToggle", ""]],
      hostAttrs: [1, "dropdown-toggle"],
      hostVars: 3,
      hostBindings: function NgbDropdownToggle_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NgbDropdownToggle_click_HostBindingHandler() {
            return ctx.dropdown.toggle();
          })("keydown.ArrowUp", function NgbDropdownToggle_keydown_ArrowUp_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.ArrowDown", function NgbDropdownToggle_keydown_ArrowDown_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Home", function NgbDropdownToggle_keydown_Home_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.End", function NgbDropdownToggle_keydown_End_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Tab", function NgbDropdownToggle_keydown_Tab_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Shift.Tab", function NgbDropdownToggle_keydown_Shift_Tab_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("aria-expanded", ctx.dropdown.isOpen());
          ɵɵclassProp("show", ctx.dropdown.isOpen());
        }
      },
      features: [ɵɵProvidersFeature([{
        provide: NgbDropdownAnchor,
        useExisting: forwardRef(() => _NgbDropdownToggle)
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownToggle, [{
    type: Directive,
    args: [{
      selector: "[ngbDropdownToggle]",
      host: {
        class: "dropdown-toggle",
        "[class.show]": "dropdown.isOpen()",
        "[attr.aria-expanded]": "dropdown.isOpen()",
        "(click)": "dropdown.toggle()",
        "(keydown.ArrowUp)": "dropdown.onKeyDown($any($event))",
        "(keydown.ArrowDown)": "dropdown.onKeyDown($any($event))",
        "(keydown.Home)": "dropdown.onKeyDown($any($event))",
        "(keydown.End)": "dropdown.onKeyDown($any($event))",
        "(keydown.Tab)": "dropdown.onKeyDown($any($event))",
        "(keydown.Shift.Tab)": "dropdown.onKeyDown($any($event))"
      },
      providers: [{
        provide: NgbDropdownAnchor,
        useExisting: forwardRef(() => NgbDropdownToggle)
      }]
    }]
  }], null, null);
})();
var NgbDropdown = class _NgbDropdown {
  constructor() {
    this._changeDetector = inject(ChangeDetectorRef);
    this._config = inject(NgbDropdownConfig);
    this._document = inject(DOCUMENT);
    this._injector = inject(Injector);
    this._ngZone = inject(NgZone);
    this._nativeElement = inject(ElementRef).nativeElement;
    this._destroyCloseHandlers$ = new Subject();
    this._bodyContainer = null;
    this._positioning = ngbPositioning();
    this.autoClose = this._config.autoClose;
    this._open = false;
    this.placement = this._config.placement;
    this.popperOptions = this._config.popperOptions;
    this.container = this._config.container;
    this.openChange = new EventEmitter();
  }
  ngOnInit() {
    if (!this.display) {
      this.display = this._nativeElement.closest(".navbar") ? "static" : "dynamic";
    }
  }
  ngAfterContentInit() {
    afterNextRender({
      write: () => {
        this._applyPlacementClasses();
        if (this._open) {
          this._setCloseHandlers();
        }
      }
    }, {
      injector: this._injector
    });
  }
  ngOnChanges(changes) {
    if (changes.container && this._open) {
      this._applyContainer(this.container);
    }
    if (changes.placement && !changes.placement.firstChange) {
      this._positioning.setOptions({
        hostElement: this._anchor.nativeElement,
        targetElement: this._bodyContainer || this._menu.nativeElement,
        placement: this.placement
      });
      this._applyPlacementClasses();
    }
    if (changes.dropdownClass) {
      const {
        currentValue,
        previousValue
      } = changes.dropdownClass;
      this._applyCustomDropdownClass(currentValue, previousValue);
    }
    if (changes.autoClose && this._open) {
      this.autoClose = changes.autoClose.currentValue;
      this._setCloseHandlers();
    }
  }
  /**
   * Checks if the dropdown menu is open.
   */
  isOpen() {
    return this._open;
  }
  /**
   * Opens the dropdown menu.
   */
  open() {
    if (!this._open) {
      this._open = true;
      this._applyContainer(this.container);
      this.openChange.emit(true);
      this._setCloseHandlers();
      if (this._anchor) {
        this._anchor.nativeElement.focus();
        if (this.display === "dynamic") {
          this._ngZone.runOutsideAngular(() => {
            this._positioning.createPopper({
              hostElement: this._anchor.nativeElement,
              targetElement: this._bodyContainer || this._menu.nativeElement,
              placement: this.placement,
              updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 2])(options))
            });
            this._applyPlacementClasses();
            this._afterRenderRef = afterEveryRender({
              write: () => {
                this._positionMenu();
              }
            }, {
              injector: this._injector
            });
          });
        }
      }
    }
  }
  _setCloseHandlers() {
    this._destroyCloseHandlers$.next();
    ngbAutoClose(this._ngZone, this._document, this.autoClose, (source) => {
      this.close();
      if (source === 0) {
        this._anchor.nativeElement.focus();
      }
    }, this._destroyCloseHandlers$, this._menu ? [this._menu.nativeElement] : [], this._anchor ? [this._anchor.nativeElement] : [], ".dropdown-item,.dropdown-divider");
  }
  /**
   * Closes the dropdown menu.
   */
  close() {
    if (this._open) {
      this._open = false;
      this._resetContainer();
      this._positioning.destroy();
      this._afterRenderRef?.destroy();
      this._destroyCloseHandlers$.next();
      this.openChange.emit(false);
      this._changeDetector.markForCheck();
    }
  }
  /**
   * Toggles the dropdown menu.
   */
  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
  ngOnDestroy() {
    this.close();
  }
  onKeyDown(event) {
    const {
      key
    } = event;
    const itemElements = this._getMenuElements();
    let position = -1;
    let itemElement = null;
    const isEventFromToggle = this._isEventFromToggle(event);
    if (!isEventFromToggle && itemElements.length) {
      itemElements.forEach((item, index) => {
        if (item.contains(event.target)) {
          itemElement = item;
        }
        if (item === getActiveElement(this._document)) {
          position = index;
        }
      });
    }
    if (key === " " || key === "Enter") {
      if (itemElement && (this.autoClose === true || this.autoClose === "inside")) {
        fromEvent(itemElement, "click").pipe(take(1)).subscribe(() => this.close());
      }
      return;
    }
    if (key === "Tab") {
      if (event.target && this.isOpen() && this.autoClose) {
        if (this._anchor.nativeElement === event.target) {
          if (this.container === "body" && !event.shiftKey) {
            this._menu.nativeElement.setAttribute("tabindex", "0");
            this._menu.nativeElement.focus();
            this._menu.nativeElement.removeAttribute("tabindex");
          } else if (event.shiftKey) {
            this.close();
          }
          return;
        } else if (this.container === "body") {
          const focusableElements = this._menu.nativeElement.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR);
          if (event.shiftKey && event.target === focusableElements[0]) {
            this._anchor.nativeElement.focus();
            event.preventDefault();
          } else if (!event.shiftKey && event.target === focusableElements[focusableElements.length - 1]) {
            this._anchor.nativeElement.focus();
            this.close();
          }
        } else {
          fromEvent(event.target, "focusout").pipe(take(1)).subscribe(({
            relatedTarget
          }) => {
            if (!this._nativeElement.contains(relatedTarget)) {
              this.close();
            }
          });
        }
      }
      return;
    }
    if (isEventFromToggle || itemElement) {
      this.open();
      if (itemElements.length) {
        switch (key) {
          case "ArrowDown":
            position = Math.min(position + 1, itemElements.length - 1);
            break;
          case "ArrowUp":
            if (this._isDropup() && position === -1) {
              position = itemElements.length - 1;
              break;
            }
            position = Math.max(position - 1, 0);
            break;
          case "Home":
            position = 0;
            break;
          case "End":
            position = itemElements.length - 1;
            break;
        }
        itemElements[position].focus();
      }
      event.preventDefault();
    }
  }
  _isDropup() {
    return this._nativeElement.classList.contains("dropup");
  }
  _isEventFromToggle(event) {
    return this._anchor.nativeElement.contains(event.target);
  }
  _getMenuElements() {
    return this._menu ? this._menu.menuItems.filter(({
      disabled
    }) => !disabled).map(({
      nativeElement
    }) => nativeElement) : [];
  }
  _positionMenu() {
    const menu = this._menu;
    if (this.isOpen() && menu) {
      if (this.display === "dynamic") {
        this._positioning.update();
        this._applyPlacementClasses();
      } else {
        this._applyPlacementClasses(this._getFirstPlacement(this.placement));
      }
    }
  }
  _getFirstPlacement(placement) {
    return Array.isArray(placement) ? placement[0] : placement.split(" ")[0];
  }
  _resetContainer() {
    if (this._menu) {
      this._nativeElement.appendChild(this._menu.nativeElement);
    }
    if (this._bodyContainer) {
      this._document.body.removeChild(this._bodyContainer);
      this._bodyContainer = null;
    }
  }
  _applyContainer(container = null) {
    this._resetContainer();
    if (container === "body") {
      const dropdownMenuElement = this._menu.nativeElement;
      const bodyContainer = this._bodyContainer = this._bodyContainer || this._document.createElement("div");
      bodyContainer.style.position = "absolute";
      dropdownMenuElement.style.position = "static";
      bodyContainer.style.zIndex = "1055";
      bodyContainer.appendChild(dropdownMenuElement);
      this._document.body.appendChild(bodyContainer);
    }
    this._applyCustomDropdownClass(this.dropdownClass);
  }
  _applyCustomDropdownClass(newClass, oldClass) {
    const targetElement = this.container === "body" ? this._bodyContainer : this._nativeElement;
    if (targetElement) {
      if (oldClass) {
        targetElement.classList.remove(oldClass);
      }
      if (newClass) {
        targetElement.classList.add(newClass);
      }
    }
  }
  _applyPlacementClasses(placement) {
    if (this._menu) {
      if (!placement) {
        placement = this._getFirstPlacement(this.placement);
      }
      this._nativeElement.classList.remove("dropup", "dropdown");
      if (this.display === "static") {
        this._menu.nativeElement.setAttribute("data-bs-popper", "static");
      } else {
        this._menu.nativeElement.removeAttribute("data-bs-popper");
      }
      const dropdownClass = placement.search("^top") !== -1 ? "dropup" : "dropdown";
      this._nativeElement.classList.add(dropdownClass);
      if (this._bodyContainer) {
        this._bodyContainer.classList.remove("dropup", "dropdown");
        this._bodyContainer.classList.add(dropdownClass);
      }
    }
  }
  static {
    this.ɵfac = function NgbDropdown_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdown)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbDropdown,
      selectors: [["", "ngbDropdown", ""]],
      contentQueries: function NgbDropdown_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbDropdownMenu, 5)(dirIndex, NgbDropdownAnchor, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._menu = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._anchor = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function NgbDropdown_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("show", ctx.isOpen());
        }
      },
      inputs: {
        autoClose: "autoClose",
        dropdownClass: "dropdownClass",
        _open: [0, "open", "_open"],
        placement: "placement",
        popperOptions: "popperOptions",
        container: "container",
        display: "display"
      },
      outputs: {
        openChange: "openChange"
      },
      exportAs: ["ngbDropdown"],
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdown, [{
    type: Directive,
    args: [{
      selector: "[ngbDropdown]",
      exportAs: "ngbDropdown",
      host: {
        "[class.show]": "isOpen()"
      }
    }]
  }], null, {
    _menu: [{
      type: ContentChild,
      args: [NgbDropdownMenu, {
        static: false
      }]
    }],
    _anchor: [{
      type: ContentChild,
      args: [NgbDropdownAnchor, {
        static: false
      }]
    }],
    autoClose: [{
      type: Input
    }],
    dropdownClass: [{
      type: Input
    }],
    _open: [{
      type: Input,
      args: ["open"]
    }],
    placement: [{
      type: Input
    }],
    popperOptions: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    display: [{
      type: Input
    }],
    openChange: [{
      type: Output
    }]
  });
})();
var NGB_DROPDOWN_DIRECTIVES = [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem];
var NgbDropdownModule = class _NgbDropdownModule {
  static {
    this.ɵfac = function NgbDropdownModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbDropdownModule,
      imports: [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem],
      exports: [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownModule, [{
    type: NgModule,
    args: [{
      imports: NGB_DROPDOWN_DIRECTIVES,
      exports: NGB_DROPDOWN_DIRECTIVES
    }]
  }], null, null);
})();

export {
  NgbDropdownConfig,
  NgbDropdownItem,
  NgbDropdownButtonItem,
  NgbDropdownMenu,
  NgbDropdownAnchor,
  NgbDropdownToggle,
  NgbDropdown,
  NgbDropdownModule
};
//# sourceMappingURL=chunk-XZTMFWQ6.js.map
