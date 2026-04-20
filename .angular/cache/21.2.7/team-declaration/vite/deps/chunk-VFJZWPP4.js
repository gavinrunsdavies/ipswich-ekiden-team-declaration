import {
  takeUntilDestroyed
} from "./chunk-MGCNT23V.js";
import {
  isPlatformBrowser
} from "./chunk-WGIH4H76.js";
import {
  isString
} from "./chunk-T3UYF4PN.js";
import {
  ChangeDetectorRef,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  inject,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵqueryRefresh
} from "./chunk-RCRTD27T.js";
import {
  Subject,
  __spreadValues,
  distinctUntilChanged
} from "./chunk-6P4RME4L.js";

// node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-scrollspy.mjs
function toFragmentElement(container, id) {
  if (!container || id == null) {
    return null;
  }
  return isString(id) ? container.querySelector(`#${CSS.escape(id)}`) : id;
}
function getOrderedFragments(container, fragments) {
  const selector = [...fragments].map(({
    id
  }) => `#${CSS.escape(id)}`).join(",");
  return Array.from(container.querySelectorAll(selector));
}
var defaultProcessChanges = (state, changeActive, ctx) => {
  const {
    rootElement,
    fragments,
    scrollSpy,
    options,
    entries
  } = state;
  const orderedFragments = getOrderedFragments(rootElement, fragments);
  if (!ctx.initialized) {
    ctx.initialized = true;
    ctx.gapFragment = null;
    ctx.visibleFragments = /* @__PURE__ */ new Set();
    const preSelectedFragment = toFragmentElement(rootElement, options?.initialFragment);
    if (preSelectedFragment) {
      scrollSpy.scrollTo(preSelectedFragment);
      return;
    }
  }
  for (const entry of entries) {
    const {
      isIntersecting,
      target: fragment
    } = entry;
    if (isIntersecting) {
      if (ctx.gapFragment) {
        ctx.visibleFragments.delete(ctx.gapFragment);
        ctx.gapFragment = null;
      }
      ctx.visibleFragments.add(fragment);
    } else {
      ctx.visibleFragments.delete(fragment);
      if (ctx.visibleFragments.size === 0 && scrollSpy.active !== "") {
        if (entry.boundingClientRect.top < entry.rootBounds.top) {
          ctx.gapFragment = fragment;
          ctx.visibleFragments.add(ctx.gapFragment);
        } else {
          if (fragment === orderedFragments[0]) {
            ctx.gapFragment = null;
            ctx.visibleFragments.clear();
            changeActive("");
            return;
          } else {
            const fragmentIndex = orderedFragments.indexOf(fragment);
            ctx.gapFragment = orderedFragments[fragmentIndex - 1] || null;
            if (ctx.gapFragment) {
              ctx.visibleFragments.add(ctx.gapFragment);
            }
          }
        }
      }
    }
  }
  for (const fragment of orderedFragments) {
    if (ctx.visibleFragments.has(fragment)) {
      changeActive(fragment.id);
      break;
    }
  }
};
var NgbScrollSpyConfig = class _NgbScrollSpyConfig {
  constructor() {
    this.scrollBehavior = "smooth";
    this.processChanges = defaultProcessChanges;
  }
  static {
    this.ɵfac = function NgbScrollSpyConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbScrollSpyConfig,
      factory: _NgbScrollSpyConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MATCH_THRESHOLD = 3;
var NgbScrollSpyService = class _NgbScrollSpyService {
  constructor() {
    this._observer = null;
    this._containerElement = null;
    this._fragments = /* @__PURE__ */ new Set();
    this._preRegisteredFragments = /* @__PURE__ */ new Set();
    this._active$ = new Subject();
    this._distinctActive$ = this._active$.pipe(distinctUntilChanged());
    this._active = "";
    this._config = inject(NgbScrollSpyConfig);
    this._document = inject(DOCUMENT);
    this._platformId = inject(PLATFORM_ID);
    this._scrollBehavior = this._config.scrollBehavior;
    this._diChangeDetectorRef = inject(ChangeDetectorRef, {
      optional: true
    });
    this._changeDetectorRef = this._diChangeDetectorRef;
    this._zone = inject(NgZone);
    this._distinctActive$.pipe(takeUntilDestroyed()).subscribe((active) => {
      this._active = active;
      this._changeDetectorRef?.markForCheck();
    });
  }
  /**
   * Getter for the currently active fragment id. Returns empty string if none.
   */
  get active() {
    return this._active;
  }
  /**
   * An observable emitting the currently active fragment. Emits empty string if none.
   */
  get active$() {
    return this._distinctActive$;
  }
  /**
   * Starts the scrollspy service and observes specified fragments.
   *
   * You can specify a list of options to pass, like the root element, initial fragment, scroll behavior, etc.
   * See the [`NgbScrollSpyOptions`](#/components/scrollspy/api#NgbScrollSpyOptions) interface for more details.
   */
  start(options) {
    if (isPlatformBrowser(this._platformId)) {
      this._cleanup();
      const {
        root,
        rootMargin,
        scrollBehavior,
        threshold,
        fragments,
        changeDetectorRef,
        processChanges
      } = __spreadValues({}, options);
      this._containerElement = root ?? this._document.documentElement;
      this._changeDetectorRef = changeDetectorRef ?? this._diChangeDetectorRef;
      this._scrollBehavior = scrollBehavior ?? this._config.scrollBehavior;
      const processChangesFn = processChanges ?? this._config.processChanges;
      const context = {};
      this._observer = new IntersectionObserver((entries) => processChangesFn({
        entries,
        rootElement: this._containerElement,
        fragments: this._fragments,
        scrollSpy: this,
        options: __spreadValues({}, options)
      }, (active) => this._active$.next(active), context), __spreadValues(__spreadValues({
        root: root ?? this._document
      }, rootMargin && {
        rootMargin
      }), threshold && {
        threshold
      }));
      for (const element of [...this._preRegisteredFragments, ...fragments ?? []]) {
        this.observe(element);
      }
      this._preRegisteredFragments.clear();
    }
  }
  /**
   * Stops the service and unobserves all fragments.
   */
  stop() {
    this._cleanup();
    this._active$.next("");
  }
  /**
   * Scrolls to a fragment, it must be known to the service and contained in the root element.
   * An id or an element reference can be passed.
   *
   * [`NgbScrollToOptions`](#/components/scrollspy/api#NgbScrollToOptions) can be passed.
   */
  scrollTo(fragment, options) {
    const {
      behavior
    } = __spreadValues({
      behavior: this._scrollBehavior
    }, options);
    if (this._containerElement) {
      const fragmentElement = toFragmentElement(this._containerElement, fragment);
      if (fragmentElement) {
        const heightPx = fragmentElement.offsetTop - this._containerElement.offsetTop;
        this._containerElement.scrollTo({
          top: heightPx,
          behavior
        });
        let lastOffset = this._containerElement.scrollTop;
        let matchCounter = 0;
        const containerElement = this._containerElement;
        this._zone.runOutsideAngular(() => {
          const updateActiveWhenScrollingIsFinished = () => {
            const sameOffsetAsLastTime = lastOffset === containerElement.scrollTop;
            if (sameOffsetAsLastTime) {
              matchCounter++;
            } else {
              matchCounter = 0;
            }
            if (!sameOffsetAsLastTime || sameOffsetAsLastTime && matchCounter < MATCH_THRESHOLD) {
              lastOffset = containerElement.scrollTop;
              requestAnimationFrame(updateActiveWhenScrollingIsFinished);
            } else {
              this._zone.run(() => this._active$.next(fragmentElement.id));
            }
          };
          requestAnimationFrame(updateActiveWhenScrollingIsFinished);
        });
      }
    }
  }
  /**
   * Adds a fragment to observe. It must be contained in the root element.
   * An id or an element reference can be passed.
   */
  observe(fragment) {
    if (!this._observer) {
      this._preRegisteredFragments.add(fragment);
      return;
    }
    const fragmentElement = toFragmentElement(this._containerElement, fragment);
    if (fragmentElement && !this._fragments.has(fragmentElement)) {
      this._fragments.add(fragmentElement);
      this._observer.observe(fragmentElement);
    }
  }
  /**
   * Unobserves a fragment.
   * An id or an element reference can be passed.
   */
  unobserve(fragment) {
    if (!this._observer) {
      this._preRegisteredFragments.delete(fragment);
      return;
    }
    const fragmentElement = toFragmentElement(this._containerElement, fragment);
    if (fragmentElement) {
      this._fragments.delete(fragmentElement);
      this._observer.disconnect();
      for (const fragment2 of this._fragments) {
        this._observer.observe(fragment2);
      }
    }
  }
  ngOnDestroy() {
    this._cleanup();
  }
  _cleanup() {
    this._fragments.clear();
    this._observer?.disconnect();
    this._changeDetectorRef = this._diChangeDetectorRef;
    this._scrollBehavior = this._config.scrollBehavior;
    this._observer = null;
    this._containerElement = null;
  }
  static {
    this.ɵfac = function NgbScrollSpyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbScrollSpyService,
      factory: _NgbScrollSpyService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var NgbScrollSpyItem = class _NgbScrollSpyItem {
  constructor() {
    this._changeDetector = inject(ChangeDetectorRef);
    this._scrollSpyMenu = inject(NgbScrollSpyMenu, {
      optional: true
    });
    this._scrollSpyAPI = this._scrollSpyMenu ?? inject(NgbScrollSpyService);
    this._destroyRef = inject(DestroyRef);
    this._isActive = false;
  }
  /**
   * References the scroll spy directive, the id of the associated fragment and the parent menu item.
   *
   * Can be used like:
   *  - `ngbScrollSpyItem="fragmentId"`
   *  - `[ngbScrollSpyItem]="scrollSpy" fragment="fragmentId"
   *  - `[ngbScrollSpyItem]="[scrollSpy, 'fragmentId']"` parent="parentId"`
   *  - `[ngbScrollSpyItem]="[scrollSpy, 'fragmentId', 'parentId']"`
   *
   *  As well as together with `[fragment]` and `[parent]` inputs.
   */
  set data(data) {
    if (Array.isArray(data)) {
      this._scrollSpyAPI = data[0];
      this.fragment = data[1];
      this.parent ??= data[2];
    } else if (data instanceof NgbScrollSpy) {
      this._scrollSpyAPI = data;
    } else if (isString(data)) {
      this.fragment = data;
    }
  }
  ngOnInit() {
    if (!this._scrollSpyMenu) {
      this._scrollSpyAPI.active$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((active) => {
        if (active === this.fragment) {
          this._activate();
        } else {
          this._deactivate();
        }
        this._changeDetector.markForCheck();
      });
    }
  }
  /**
   * @internal
   */
  _activate() {
    this._isActive = true;
    if (this._scrollSpyMenu) {
      this._scrollSpyMenu.getItem(this.parent ?? "")?._activate();
    }
  }
  /**
   * @internal
   */
  _deactivate() {
    this._isActive = false;
    if (this._scrollSpyMenu) {
      this._scrollSpyMenu.getItem(this.parent ?? "")?._deactivate();
    }
  }
  /**
   * Returns `true`, if the associated fragment is active.
   */
  isActive() {
    return this._isActive;
  }
  /**
   * Scrolls to the associated fragment.
   */
  scrollTo(options) {
    this._scrollSpyAPI.scrollTo(this.fragment, options);
  }
  static {
    this.ɵfac = function NgbScrollSpyItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyItem)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbScrollSpyItem,
      selectors: [["", "ngbScrollSpyItem", ""]],
      hostVars: 2,
      hostBindings: function NgbScrollSpyItem_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NgbScrollSpyItem_click_HostBindingHandler() {
            return ctx.scrollTo();
          });
        }
        if (rf & 2) {
          ɵɵclassProp("active", ctx.isActive());
        }
      },
      inputs: {
        data: [0, "ngbScrollSpyItem", "data"],
        fragment: "fragment",
        parent: "parent"
      },
      exportAs: ["ngbScrollSpyItem"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyItem, [{
    type: Directive,
    args: [{
      selector: "[ngbScrollSpyItem]",
      exportAs: "ngbScrollSpyItem",
      host: {
        "[class.active]": "isActive()",
        "(click)": "scrollTo();"
      }
    }]
  }], null, {
    data: [{
      type: Input,
      args: ["ngbScrollSpyItem"]
    }],
    fragment: [{
      type: Input
    }],
    parent: [{
      type: Input
    }]
  });
})();
var NgbScrollSpyMenu = class _NgbScrollSpyMenu {
  constructor() {
    this._scrollSpyRef = inject(NgbScrollSpyService);
    this._destroyRef = inject(DestroyRef);
    this._map = /* @__PURE__ */ new Map();
    this._lastActiveItem = null;
  }
  set scrollSpy(scrollSpy) {
    this._scrollSpyRef = scrollSpy;
  }
  get active() {
    return this._scrollSpyRef.active;
  }
  get active$() {
    return this._scrollSpyRef.active$;
  }
  scrollTo(fragment, options) {
    this._scrollSpyRef.scrollTo(fragment, options);
  }
  getItem(id) {
    return this._map.get(id);
  }
  ngAfterViewInit() {
    this._items.changes.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._rebuildMap());
    this._rebuildMap();
    this._scrollSpyRef.active$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((activeId) => {
      this._lastActiveItem?._deactivate();
      const item = this._map.get(activeId);
      if (item) {
        item._activate();
        this._lastActiveItem = item;
      }
    });
  }
  _rebuildMap() {
    this._map.clear();
    for (let item of this._items) {
      this._map.set(item.fragment, item);
    }
  }
  static {
    this.ɵfac = function NgbScrollSpyMenu_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyMenu)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbScrollSpyMenu,
      selectors: [["", "ngbScrollSpyMenu", ""]],
      contentQueries: function NgbScrollSpyMenu_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbScrollSpyItem, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._items = _t);
        }
      },
      inputs: {
        scrollSpy: [0, "ngbScrollSpyMenu", "scrollSpy"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyMenu, [{
    type: Directive,
    args: [{
      selector: "[ngbScrollSpyMenu]"
    }]
  }], null, {
    _items: [{
      type: ContentChildren,
      args: [NgbScrollSpyItem, {
        descendants: true
      }]
    }],
    scrollSpy: [{
      type: Input,
      args: ["ngbScrollSpyMenu"]
    }]
  });
})();
var NgbScrollSpy = class _NgbScrollSpy {
  constructor() {
    this._initialFragment = null;
    this._service = inject(NgbScrollSpyService);
    this._nativeElement = inject(ElementRef).nativeElement;
    this.activeChange = this._service.active$;
  }
  set active(fragment) {
    this._initialFragment = fragment;
    this.scrollTo(fragment);
  }
  /**
   * Getter/setter for the currently active fragment id.
   */
  get active() {
    return this._service.active;
  }
  /**
   * Returns an observable that emits currently active section id.
   */
  get active$() {
    return this._service.active$;
  }
  ngAfterViewInit() {
    this._service.start(__spreadValues({
      processChanges: this.processChanges,
      root: this._nativeElement,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    }, this._initialFragment && {
      initialFragment: this._initialFragment
    }));
  }
  /**
   * @internal
   */
  _registerFragment(fragment) {
    this._service.observe(fragment.id);
  }
  /**
   * @internal
   */
  _unregisterFragment(fragment) {
    this._service.unobserve(fragment.id);
  }
  /**
   * Scrolls to a fragment that is identified by the `ngbScrollSpyFragment` directive.
   * An id or an element reference can be passed.
   */
  scrollTo(fragment, options) {
    this._service.scrollTo(fragment, __spreadValues(__spreadValues({}, this.scrollBehavior && {
      behavior: this.scrollBehavior
    }), options));
  }
  static {
    this.ɵfac = function NgbScrollSpy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpy)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbScrollSpy,
      selectors: [["", "ngbScrollSpy", ""]],
      hostAttrs: ["tabindex", "0", 2, "overflow-y", "auto"],
      inputs: {
        processChanges: "processChanges",
        rootMargin: "rootMargin",
        scrollBehavior: "scrollBehavior",
        threshold: "threshold",
        active: "active"
      },
      outputs: {
        activeChange: "activeChange"
      },
      exportAs: ["ngbScrollSpy"],
      features: [ɵɵProvidersFeature([NgbScrollSpyService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpy, [{
    type: Directive,
    args: [{
      selector: "[ngbScrollSpy]",
      exportAs: "ngbScrollSpy",
      host: {
        tabindex: "0",
        style: "overflow-y: auto"
      },
      providers: [NgbScrollSpyService]
    }]
  }], null, {
    processChanges: [{
      type: Input
    }],
    rootMargin: [{
      type: Input
    }],
    scrollBehavior: [{
      type: Input
    }],
    threshold: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    activeChange: [{
      type: Output
    }]
  });
})();
var NgbScrollSpyFragment = class _NgbScrollSpyFragment {
  constructor() {
    this._destroyRef = inject(DestroyRef);
    this._scrollSpy = inject(NgbScrollSpy);
  }
  ngAfterViewInit() {
    this._scrollSpy._registerFragment(this);
    this._destroyRef.onDestroy(() => this._scrollSpy._unregisterFragment(this));
  }
  static {
    this.ɵfac = function NgbScrollSpyFragment_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyFragment)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbScrollSpyFragment,
      selectors: [["", "ngbScrollSpyFragment", ""]],
      hostVars: 1,
      hostBindings: function NgbScrollSpyFragment_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.id);
        }
      },
      inputs: {
        id: [0, "ngbScrollSpyFragment", "id"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyFragment, [{
    type: Directive,
    args: [{
      selector: "[ngbScrollSpyFragment]",
      host: {
        "[id]": "id"
      }
    }]
  }], null, {
    id: [{
      type: Input,
      args: ["ngbScrollSpyFragment"]
    }]
  });
})();
var NgbScrollSpyModule = class _NgbScrollSpyModule {
  static {
    this.ɵfac = function NgbScrollSpyModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbScrollSpyModule,
      imports: [NgbScrollSpy, NgbScrollSpyItem, NgbScrollSpyFragment, NgbScrollSpyMenu],
      exports: [NgbScrollSpy, NgbScrollSpyItem, NgbScrollSpyFragment, NgbScrollSpyMenu]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyModule, [{
    type: NgModule,
    args: [{
      imports: [NgbScrollSpy, NgbScrollSpyItem, NgbScrollSpyFragment, NgbScrollSpyMenu],
      exports: [NgbScrollSpy, NgbScrollSpyItem, NgbScrollSpyFragment, NgbScrollSpyMenu]
    }]
  }], null, null);
})();

export {
  NgbScrollSpyConfig,
  NgbScrollSpyService,
  NgbScrollSpyItem,
  NgbScrollSpyMenu,
  NgbScrollSpy,
  NgbScrollSpyFragment,
  NgbScrollSpyModule
};
//# sourceMappingURL=chunk-VFJZWPP4.js.map
