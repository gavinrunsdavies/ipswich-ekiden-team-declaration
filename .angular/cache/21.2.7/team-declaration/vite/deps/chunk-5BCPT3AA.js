import {
  takeUntilDestroyed
} from "./chunk-MGCNT23V.js";
import {
  NgbConfig
} from "./chunk-Y74BDHYX.js";
import {
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-WGIH4H76.js";
import {
  ngbCompleteTransition,
  ngbRunTransition,
  reflow
} from "./chunk-T3UYF4PN.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  TemplateRef,
  ViewEncapsulation,
  afterNextRender,
  inject,
  setClassMetadata,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵi18n,
  ɵɵi18nApply,
  ɵɵi18nExp,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-RCRTD27T.js";
import {
  NEVER
} from "./chunk-QDTSZMXX.js";
import {
  BehaviorSubject,
  combineLatest,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
  take,
  timer,
  zip
} from "./chunk-6P4RME4L.js";

// node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-carousel.mjs
function NgbCarousel_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function NgbCarousel_For_2_Template_button_click_0_listener() {
      const slide_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      ctx_r2.focus();
      return ɵɵresetView(ctx_r2.select(slide_r2.id, ctx_r2.NgbSlideEventSource.INDICATOR));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("active", slide_r2.id === ctx_r2.activeId);
    ɵɵattribute("aria-labelledby", "slide-" + slide_r2.id)("aria-controls", "slide-" + slide_r2.id)("aria-selected", slide_r2.id === ctx_r2.activeId);
  }
}
function NgbCarousel_For_5_ng_template_3_Template(rf, ctx) {
}
function NgbCarousel_For_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "span", 8);
    ɵɵi18n(2, 0);
    ɵɵelementEnd();
    ɵɵtemplate(3, NgbCarousel_For_5_ng_template_3_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    const ɵ$index_8_r5 = ctx.$index;
    const ɵ$count_8_r6 = ctx.$count;
    ɵɵproperty("id", "slide-" + slide_r4.id);
    ɵɵadvance(2);
    ɵɵi18nExp(ɵ$index_8_r5 + 1)(ɵ$count_8_r6);
    ɵɵi18nApply(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", slide_r4.templateRef);
  }
}
function NgbCarousel_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function NgbCarousel_Conditional_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.arrowLeft());
    });
    ɵɵelement(1, "span", 11);
    ɵɵelementStart(2, "span", 12);
    ɵɵi18n(3, 1);
    ɵɵelementEnd()();
    ɵɵelementStart(4, "button", 13);
    ɵɵlistener("click", function NgbCarousel_Conditional_6_Template_button_click_4_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.arrowRight());
    });
    ɵɵelement(5, "span", 14);
    ɵɵelementStart(6, "span", 12);
    ɵɵi18n(7, 2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("aria-labelledby", ctx_r2.id + "-previous");
    ɵɵadvance(2);
    ɵɵproperty("id", ctx_r2.id + "-previous");
    ɵɵadvance(2);
    ɵɵattribute("aria-labelledby", ctx_r2.id + "-next");
    ɵɵadvance(2);
    ɵɵproperty("id", ctx_r2.id + "-next");
  }
}
var NgbCarouselConfig = class _NgbCarouselConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.interval = 5e3;
    this.wrap = true;
    this.keyboard = true;
    this.pauseOnHover = true;
    this.pauseOnFocus = true;
    this.showNavigationArrows = true;
    this.showNavigationIndicators = true;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.ɵfac = function NgbCarouselConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCarouselConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCarouselConfig,
      factory: _NgbCarouselConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCarouselConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbSlideEventDirection;
(function(NgbSlideEventDirection2) {
  NgbSlideEventDirection2["START"] = "start";
  NgbSlideEventDirection2["END"] = "end";
})(NgbSlideEventDirection || (NgbSlideEventDirection = {}));
var isBeingAnimated = ({
  classList
}) => {
  return classList.contains("carousel-item-start") || classList.contains("carousel-item-end");
};
var removeDirectionClasses = (classList) => {
  classList.remove("carousel-item-start", "carousel-item-end");
};
var removeClasses = (classList) => {
  removeDirectionClasses(classList);
  classList.remove("carousel-item-prev", "carousel-item-next");
};
var ngbCarouselTransitionIn = (element, animation, {
  direction
}) => {
  const {
    classList
  } = element;
  if (!animation) {
    removeClasses(classList);
    classList.add("active");
    return;
  }
  if (isBeingAnimated(element)) {
    removeDirectionClasses(classList);
  } else {
    classList.add("carousel-item-" + (direction === NgbSlideEventDirection.START ? "next" : "prev"));
    reflow(element);
    classList.add("carousel-item-" + direction);
  }
  return () => {
    removeClasses(classList);
    classList.add("active");
  };
};
var ngbCarouselTransitionOut = (element, animation, {
  direction
}) => {
  const {
    classList
  } = element;
  if (!animation) {
    removeClasses(classList);
    classList.remove("active");
    return;
  }
  if (isBeingAnimated(element)) {
    removeDirectionClasses(classList);
  } else {
    classList.add("carousel-item-" + direction);
  }
  return () => {
    removeClasses(classList);
    classList.remove("active");
  };
};
var nextId = 0;
var carouselId = 0;
var NgbSlide = class _NgbSlide {
  constructor() {
    this.templateRef = inject(TemplateRef);
    this.id = `ngb-slide-${nextId++}`;
    this.slid = new EventEmitter();
  }
  static {
    this.ɵfac = function NgbSlide_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbSlide)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbSlide,
      selectors: [["ng-template", "ngbSlide", ""]],
      inputs: {
        id: "id"
      },
      outputs: {
        slid: "slid"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbSlide, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbSlide]"
    }]
  }], null, {
    id: [{
      type: Input
    }],
    slid: [{
      type: Output
    }]
  });
})();
var NgbCarousel = class _NgbCarousel {
  constructor() {
    this.NgbSlideEventSource = NgbSlideEventSource;
    this._config = inject(NgbCarouselConfig);
    this._platformId = inject(PLATFORM_ID);
    this._ngZone = inject(NgZone);
    this._cd = inject(ChangeDetectorRef);
    this._container = inject(ElementRef);
    this._destroyRef = inject(DestroyRef);
    this._injector = inject(Injector);
    this._interval$ = new BehaviorSubject(this._config.interval);
    this._mouseHover$ = new BehaviorSubject(false);
    this._focused$ = new BehaviorSubject(false);
    this._pauseOnHover$ = new BehaviorSubject(this._config.pauseOnHover);
    this._pauseOnFocus$ = new BehaviorSubject(this._config.pauseOnFocus);
    this._pause$ = new BehaviorSubject(false);
    this._wrap$ = new BehaviorSubject(this._config.wrap);
    this.id = `ngb-carousel-${carouselId++}`;
    this.animation = this._config.animation;
    this.keyboard = this._config.keyboard;
    this.showNavigationArrows = this._config.showNavigationArrows;
    this.showNavigationIndicators = this._config.showNavigationIndicators;
    this.slide = new EventEmitter();
    this.slid = new EventEmitter();
    this._transitionIds = null;
  }
  /**
   * Time in milliseconds before the next slide is shown.
   */
  set interval(value) {
    this._interval$.next(value);
  }
  get interval() {
    return this._interval$.value;
  }
  /**
   * If `true`, will 'wrap' the carousel by switching from the last slide back to the first.
   */
  set wrap(value) {
    this._wrap$.next(value);
  }
  get wrap() {
    return this._wrap$.value;
  }
  /**
   * If `true`, will pause slide switching when mouse cursor hovers the slide.
   *
   * @since 2.2.0
   */
  set pauseOnHover(value) {
    this._pauseOnHover$.next(value);
  }
  get pauseOnHover() {
    return this._pauseOnHover$.value;
  }
  /**
   * If `true`, will pause slide switching when the focus is inside the carousel.
   */
  set pauseOnFocus(value) {
    this._pauseOnFocus$.next(value);
  }
  get pauseOnFocus() {
    return this._pauseOnFocus$.value;
  }
  set mouseHover(value) {
    this._mouseHover$.next(value);
  }
  get mouseHover() {
    return this._mouseHover$.value;
  }
  set focused(value) {
    this._focused$.next(value);
  }
  get focused() {
    return this._focused$.value;
  }
  arrowLeft() {
    this.focus();
    this.prev(NgbSlideEventSource.ARROW_LEFT);
  }
  arrowRight() {
    this.focus();
    this.next(NgbSlideEventSource.ARROW_RIGHT);
  }
  ngAfterContentInit() {
    if (isPlatformBrowser(this._platformId)) {
      this._ngZone.runOutsideAngular(() => {
        const hasNextSlide$ = combineLatest([this.slide.pipe(map((slideEvent) => slideEvent.current), startWith(this.activeId)), this._wrap$, this.slides.changes.pipe(startWith(null))]).pipe(map(([currentSlideId, wrap]) => {
          const slideArr = this.slides.toArray();
          const currentSlideIdx = this._getSlideIdxById(currentSlideId);
          return wrap ? slideArr.length > 1 : currentSlideIdx < slideArr.length - 1;
        }), distinctUntilChanged());
        combineLatest([this._pause$, this._pauseOnHover$, this._mouseHover$, this._pauseOnFocus$, this._focused$, this._interval$, hasNextSlide$]).pipe(map(([pause, pauseOnHover, mouseHover, pauseOnFocus, focused, interval, hasNextSlide]) => pause || pauseOnHover && mouseHover || pauseOnFocus && focused || !hasNextSlide ? 0 : interval), distinctUntilChanged(), switchMap((interval) => interval > 0 ? timer(interval, interval) : NEVER), takeUntilDestroyed(this._destroyRef)).subscribe(() => this._ngZone.run(() => this.next(NgbSlideEventSource.TIMER)));
      });
    }
    this.slides.changes.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._transitionIds?.forEach((id) => ngbCompleteTransition(this._getSlideElement(id)));
      this._transitionIds = null;
      this._cd.markForCheck();
      afterNextRender({
        mixedReadWrite: () => {
          for (const {
            id
          } of this.slides) {
            const element = this._getSlideElement(id);
            if (id === this.activeId) {
              element.classList.add("active");
            } else {
              element.classList.remove("active");
            }
          }
        }
      }, {
        injector: this._injector
      });
    });
  }
  ngAfterContentChecked() {
    let activeSlide = this._getSlideById(this.activeId);
    this.activeId = activeSlide ? activeSlide.id : this.slides.length ? this.slides.first.id : "";
  }
  ngAfterViewInit() {
    if (this.activeId) {
      const element = this._getSlideElement(this.activeId);
      if (element) {
        element.classList.add("active");
      }
    }
  }
  /**
   * Navigates to a slide with the specified identifier.
   */
  select(slideId, source) {
    this._cycleToSelected(slideId, this._getSlideEventDirection(this.activeId, slideId), source);
  }
  /**
   * Navigates to the previous slide.
   */
  prev(source) {
    this._cycleToSelected(this._getPrevSlide(this.activeId), NgbSlideEventDirection.END, source);
  }
  /**
   * Navigates to the next slide.
   */
  next(source) {
    this._cycleToSelected(this._getNextSlide(this.activeId), NgbSlideEventDirection.START, source);
  }
  /**
   * Pauses cycling through the slides.
   */
  pause() {
    this._pause$.next(true);
  }
  /**
   * Restarts cycling through the slides from start to end.
   */
  cycle() {
    this._pause$.next(false);
  }
  /**
   * Set the focus on the carousel.
   */
  focus() {
    this._container.nativeElement.focus();
  }
  _cycleToSelected(slideIdx, direction, source) {
    const transitionIds = this._transitionIds;
    if (transitionIds && (transitionIds[0] !== slideIdx || transitionIds[1] !== this.activeId)) {
      return;
    }
    let selectedSlide = this._getSlideById(slideIdx);
    if (selectedSlide && selectedSlide.id !== this.activeId) {
      this._transitionIds = [this.activeId, slideIdx];
      this.slide.emit({
        prev: this.activeId,
        current: selectedSlide.id,
        direction,
        paused: this._pause$.value,
        source
      });
      const options = {
        animation: this.animation,
        runningTransition: "stop",
        context: {
          direction
        }
      };
      const transitions = [];
      const activeSlide = this._getSlideById(this.activeId);
      if (activeSlide) {
        const activeSlideTransition = ngbRunTransition(this._ngZone, this._getSlideElement(activeSlide.id), ngbCarouselTransitionOut, options);
        activeSlideTransition.subscribe(() => {
          activeSlide.slid.emit({
            isShown: false,
            direction,
            source
          });
        });
        transitions.push(activeSlideTransition);
      }
      const previousId = this.activeId;
      this.activeId = selectedSlide.id;
      const nextSlide = this._getSlideById(this.activeId);
      const transition = ngbRunTransition(this._ngZone, this._getSlideElement(selectedSlide.id), ngbCarouselTransitionIn, options);
      transition.subscribe(() => {
        nextSlide?.slid.emit({
          isShown: true,
          direction,
          source
        });
      });
      transitions.push(transition);
      zip(...transitions).pipe(take(1)).subscribe(() => {
        this._transitionIds = null;
        this.slid.emit({
          prev: previousId,
          current: selectedSlide.id,
          direction,
          paused: this._pause$.value,
          source
        });
      });
    }
    this._cd.markForCheck();
  }
  _getSlideEventDirection(currentActiveSlideId, nextActiveSlideId) {
    const currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);
    const nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);
    return currentActiveSlideIdx > nextActiveSlideIdx ? NgbSlideEventDirection.END : NgbSlideEventDirection.START;
  }
  _getSlideById(slideId) {
    return this.slides.find((slide) => slide.id === slideId) || null;
  }
  _getSlideIdxById(slideId) {
    const slide = this._getSlideById(slideId);
    return slide != null ? this.slides.toArray().indexOf(slide) : -1;
  }
  _getNextSlide(currentSlideId) {
    const slideArr = this.slides.toArray();
    const currentSlideIdx = this._getSlideIdxById(currentSlideId);
    const isLastSlide = currentSlideIdx === slideArr.length - 1;
    return isLastSlide ? this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id : slideArr[currentSlideIdx + 1].id;
  }
  _getPrevSlide(currentSlideId) {
    const slideArr = this.slides.toArray();
    const currentSlideIdx = this._getSlideIdxById(currentSlideId);
    const isFirstSlide = currentSlideIdx === 0;
    return isFirstSlide ? this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id : slideArr[currentSlideIdx - 1].id;
  }
  _getSlideElement(slideId) {
    return this._container.nativeElement.querySelector(`#slide-${slideId}`);
  }
  static {
    this.ɵfac = function NgbCarousel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCarousel)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbCarousel,
      selectors: [["ngb-carousel"]],
      contentQueries: function NgbCarousel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbSlide, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slides = _t);
        }
      },
      hostAttrs: ["tabIndex", "0", 1, "carousel", "slide"],
      hostVars: 2,
      hostBindings: function NgbCarousel_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.arrowLeft", function NgbCarousel_keydown_arrowLeft_HostBindingHandler() {
            return ctx.keyboard && ctx.arrowLeft();
          })("keydown.arrowRight", function NgbCarousel_keydown_arrowRight_HostBindingHandler() {
            return ctx.keyboard && ctx.arrowRight();
          })("mouseenter", function NgbCarousel_mouseenter_HostBindingHandler() {
            return ctx.mouseHover = true;
          })("mouseleave", function NgbCarousel_mouseleave_HostBindingHandler() {
            return ctx.mouseHover = false;
          })("focusin", function NgbCarousel_focusin_HostBindingHandler() {
            return ctx.focused = true;
          })("focusout", function NgbCarousel_focusout_HostBindingHandler() {
            return ctx.focused = false;
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("display", "block");
        }
      },
      inputs: {
        animation: "animation",
        activeId: "activeId",
        interval: "interval",
        wrap: "wrap",
        keyboard: "keyboard",
        pauseOnHover: "pauseOnHover",
        pauseOnFocus: "pauseOnFocus",
        showNavigationArrows: "showNavigationArrows",
        showNavigationIndicators: "showNavigationIndicators"
      },
      outputs: {
        slide: "slide",
        slid: "slid"
      },
      exportAs: ["ngbCarousel"],
      decls: 7,
      vars: 3,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_CAROUSEL_MJS_0 = goog.getMsg(" Slide {$interpolation} of {$interpolation_1} ", {
            "interpolation": "�0�",
            "interpolation_1": "�1�"
          }, {
            original_code: {
              "interpolation": "{{ i + 1 }}",
              "interpolation_1": "{{ c }}"
            }
          });
          i18n_0 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_CAROUSEL_MJS_0;
        } else {
          i18n_0 = $localize`:Currently selected slide number read by screen reader@@ngb.carousel.slide-number: Slide ${"�0�"}:INTERPOLATION: of ${"�1�"}:INTERPOLATION_1: `;
        }
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_CAROUSEL_MJS_1 = goog.getMsg("Previous");
          i18n_1 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_CAROUSEL_MJS_1;
        } else {
          i18n_1 = $localize`:@@ngb.carousel.previous:Previous`;
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_CAROUSEL_MJS_2 = goog.getMsg("Next");
          i18n_2 = MSG_C__USERS_GAVIN_GITHUB_IPSWICH_EKIDEN_TEAM_DECLARATION_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_NG_BOOTSTRAP_CAROUSEL_MJS_2;
        } else {
          i18n_2 = $localize`:@@ngb.carousel.next:Next`;
        }
        return [i18n_0, i18n_1, i18n_2, ["role", "tablist", 1, "carousel-indicators"], ["type", "button", "data-bs-target", "", "role", "tab", 3, "active"], [1, "carousel-inner"], ["role", "tabpanel", 1, "carousel-item", 3, "id"], ["type", "button", "data-bs-target", "", "role", "tab", 3, "click"], [1, "visually-hidden"], [3, "ngTemplateOutlet"], ["type", "button", 1, "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden", 3, "id"], ["type", "button", 1, "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]];
      },
      template: function NgbCarousel_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 3);
          ɵɵrepeaterCreate(1, NgbCarousel_For_2_Template, 1, 5, "button", 4, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd();
          ɵɵelementStart(3, "div", 5);
          ɵɵrepeaterCreate(4, NgbCarousel_For_5_Template, 4, 4, "div", 6, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd();
          ɵɵconditionalCreate(6, NgbCarousel_Conditional_6_Template, 8, 4);
        }
        if (rf & 2) {
          ɵɵclassProp("visually-hidden", !ctx.showNavigationIndicators);
          ɵɵadvance();
          ɵɵrepeater(ctx.slides);
          ɵɵadvance(3);
          ɵɵrepeater(ctx.slides);
          ɵɵadvance(2);
          ɵɵconditional(ctx.showNavigationArrows ? 6 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCarousel, [{
    type: Component,
    args: [{
      selector: "ngb-carousel",
      exportAs: "ngbCarousel",
      imports: [NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "carousel slide",
        "[style.display]": '"block"',
        tabIndex: "0",
        "(keydown.arrowLeft)": "keyboard && arrowLeft()",
        "(keydown.arrowRight)": "keyboard && arrowRight()",
        "(mouseenter)": "mouseHover = true",
        "(mouseleave)": "mouseHover = false",
        "(focusin)": "focused = true",
        "(focusout)": "focused = false"
      },
      template: `
		<div class="carousel-indicators" [class.visually-hidden]="!showNavigationIndicators" role="tablist">
			@for (slide of slides; track slide) {
				<button
					type="button"
					data-bs-target
					[class.active]="slide.id === activeId"
					role="tab"
					[attr.aria-labelledby]="'slide-' + slide.id"
					[attr.aria-controls]="'slide-' + slide.id"
					[attr.aria-selected]="slide.id === activeId"
					(click)="focus(); select(slide.id, NgbSlideEventSource.INDICATOR)"
				></button>
			}
		</div>
		<div class="carousel-inner">
			@for (slide of slides; track slide; let i = $index; let c = $count) {
				<div class="carousel-item" [id]="'slide-' + slide.id" role="tabpanel">
					<span
						class="visually-hidden"
						i18n="Currently selected slide number read by screen reader@@ngb.carousel.slide-number"
					>
						Slide {{ i + 1 }} of {{ c }}
					</span>
					<ng-template [ngTemplateOutlet]="slide.templateRef" />
				</div>
			}
		</div>
		@if (showNavigationArrows) {
			<button
				class="carousel-control-prev"
				type="button"
				(click)="arrowLeft()"
				[attr.aria-labelledby]="id + '-previous'"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden" i18n="@@ngb.carousel.previous" [id]="id + '-previous'">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" (click)="arrowRight()" [attr.aria-labelledby]="id + '-next'">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden" i18n="@@ngb.carousel.next" [id]="id + '-next'">Next</span>
			</button>
		}
	`
    }]
  }], null, {
    slides: [{
      type: ContentChildren,
      args: [NgbSlide]
    }],
    animation: [{
      type: Input
    }],
    activeId: [{
      type: Input
    }],
    interval: [{
      type: Input
    }],
    wrap: [{
      type: Input
    }],
    keyboard: [{
      type: Input
    }],
    pauseOnHover: [{
      type: Input
    }],
    pauseOnFocus: [{
      type: Input
    }],
    showNavigationArrows: [{
      type: Input
    }],
    showNavigationIndicators: [{
      type: Input
    }],
    slide: [{
      type: Output
    }],
    slid: [{
      type: Output
    }]
  });
})();
var NgbSlideEventSource;
(function(NgbSlideEventSource2) {
  NgbSlideEventSource2["TIMER"] = "timer";
  NgbSlideEventSource2["ARROW_LEFT"] = "arrowLeft";
  NgbSlideEventSource2["ARROW_RIGHT"] = "arrowRight";
  NgbSlideEventSource2["INDICATOR"] = "indicator";
})(NgbSlideEventSource || (NgbSlideEventSource = {}));
var NgbCarouselModule = class _NgbCarouselModule {
  static {
    this.ɵfac = function NgbCarouselModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCarouselModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbCarouselModule,
      imports: [NgbCarousel, NgbSlide],
      exports: [NgbCarousel, NgbSlide]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCarouselModule, [{
    type: NgModule,
    args: [{
      imports: [NgbCarousel, NgbSlide],
      exports: [NgbCarousel, NgbSlide]
    }]
  }], null, null);
})();

export {
  NgbCarouselConfig,
  NgbSlideEventDirection,
  NgbSlide,
  NgbCarousel,
  NgbSlideEventSource,
  NgbCarouselModule
};
//# sourceMappingURL=chunk-5BCPT3AA.js.map
