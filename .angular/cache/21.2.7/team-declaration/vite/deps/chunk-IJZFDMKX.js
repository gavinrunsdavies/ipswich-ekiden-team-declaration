import {
  Live,
  PopupService,
  addPopperOffset,
  isDefined,
  ngbAutoClose,
  ngbPositioning,
  regExpEscape,
  removeAccents,
  toString
} from "./chunk-T3UYF4PN.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-FMMPXMIC.js";
import {
  NgTemplateOutlet
} from "./chunk-TRMZSHJ7.js";
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
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementContainerEnd,
  ɵɵdomElementContainerStart,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RCRTD27T.js";
import {
  fromEvent
} from "./chunk-QDTSZMXX.js";
import {
  BehaviorSubject,
  Subject,
  map,
  of,
  switchMap,
  tap
} from "./chunk-6P4RME4L.js";

// node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-typeahead.mjs
function NgbHighlight_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "span");
    ɵɵtext(1);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const part_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.highlightClass);
    ɵɵadvance();
    ɵɵtextInterpolate(part_r1);
  }
}
function NgbHighlight_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementContainerStart(0);
    ɵɵtext(1);
    ɵɵdomElementContainerEnd();
  }
  if (rf & 2) {
    const part_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(part_r1);
  }
}
function NgbHighlight_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, NgbHighlight_For_1_Conditional_0_Template, 2, 3, "span", 0)(1, NgbHighlight_For_1_Conditional_1_Template, 2, 1, "ng-container");
  }
  if (rf & 2) {
    const ɵ$index_1_r3 = ctx.$index;
    ɵɵconditional(ɵ$index_1_r3 % 2 !== 0 ? 0 : 1);
  }
}
var _c0 = (a0, a1, a2) => ({
  result: a0,
  term: a1,
  formatter: a2
});
function NgbTypeaheadWindow_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ngb-highlight", 2);
  }
  if (rf & 2) {
    const result_r1 = ctx.result;
    const term_r2 = ctx.term;
    const formatter_r3 = ctx.formatter;
    ɵɵproperty("result", formatter_r3(result_r1))("term", term_r2);
  }
}
function NgbTypeaheadWindow_For_3_ng_template_1_Template(rf, ctx) {
}
function NgbTypeaheadWindow_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("mouseenter", function NgbTypeaheadWindow_For_3_Template_button_mouseenter_0_listener() {
      const $index_r5 = ɵɵrestoreView(_r4).$index;
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.markActive($index_r5));
    })("click", function NgbTypeaheadWindow_For_3_Template_button_click_0_listener() {
      const result_r7 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.select(result_r7));
    });
    ɵɵtemplate(1, NgbTypeaheadWindow_For_3_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const result_r7 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const ctx_r5 = ɵɵnextContext();
    const rt_r8 = ɵɵreference(1);
    ɵɵclassProp("active", $index_r5 === ctx_r5.activeIdx);
    ɵɵproperty("id", ctx_r5.id + "-" + $index_r5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r5.resultTemplate || rt_r8)("ngTemplateOutletContext", ɵɵpureFunction3(5, _c0, result_r7, ctx_r5.term, ctx_r5.formatter));
  }
}
var NgbHighlight = class _NgbHighlight {
  constructor() {
    this.highlightClass = "ngb-highlight";
    this.accentSensitive = true;
  }
  ngOnChanges(changes) {
    if (!this.accentSensitive && !String.prototype.normalize) {
      console.warn("The `accentSensitive` input in `ngb-highlight` cannot be set to `false` in a browser that does not implement the `String.normalize` function. You will have to include a polyfill in your application to use this feature in the current browser.");
      this.accentSensitive = true;
    }
    const result = toString(this.result);
    const terms = Array.isArray(this.term) ? this.term : [this.term];
    const prepareTerm = (term) => this.accentSensitive ? term : removeAccents(term);
    const escapedTerms = terms.map((term) => regExpEscape(prepareTerm(toString(term)))).filter((term) => term);
    const toSplit = this.accentSensitive ? result : removeAccents(result);
    const parts = escapedTerms.length ? toSplit.split(new RegExp(`(${escapedTerms.join("|")})`, "gmi")) : [result];
    if (this.accentSensitive) {
      this.parts = parts;
    } else {
      let offset = 0;
      this.parts = parts.map((part) => result.substring(offset, offset += part.length));
    }
  }
  static {
    this.ɵfac = function NgbHighlight_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbHighlight)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbHighlight,
      selectors: [["ngb-highlight"]],
      inputs: {
        highlightClass: "highlightClass",
        result: "result",
        term: "term",
        accentSensitive: "accentSensitive"
      },
      features: [ɵɵNgOnChangesFeature],
      decls: 2,
      vars: 0,
      consts: [[3, "class"]],
      template: function NgbHighlight_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵrepeaterCreate(0, NgbHighlight_For_1_Template, 2, 1, null, null, ɵɵrepeaterTrackByIndex);
        }
        if (rf & 2) {
          ɵɵrepeater(ctx.parts);
        }
      },
      styles: [".ngb-highlight{font-weight:700}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbHighlight, [{
    type: Component,
    args: [{
      selector: "ngb-highlight",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
		@for (part of parts; track $index) {
			@if ($odd) {
				<span class="{{ highlightClass }}">{{ part }}</span>
			} @else {
				<ng-container>{{ part }}</ng-container>
			}
		}
	`,
      styles: [".ngb-highlight{font-weight:700}\n"]
    }]
  }], null, {
    highlightClass: [{
      type: Input
    }],
    result: [{
      type: Input,
      args: [{
        required: true
      }]
    }],
    term: [{
      type: Input,
      args: [{
        required: true
      }]
    }],
    accentSensitive: [{
      type: Input
    }]
  });
})();
var NgbTypeaheadConfig = class _NgbTypeaheadConfig {
  constructor() {
    this.editable = true;
    this.focusFirst = true;
    this.selectOnExact = false;
    this.showHint = false;
    this.placement = ["bottom-start", "bottom-end", "top-start", "top-end"];
    this.popperOptions = (options) => options;
  }
  static {
    this.ɵfac = function NgbTypeaheadConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTypeaheadConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbTypeaheadConfig,
      factory: _NgbTypeaheadConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTypeaheadConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbTypeaheadWindow = class _NgbTypeaheadWindow {
  constructor() {
    this.activeIdx = 0;
    this.focusFirst = true;
    this.formatter = toString;
    this.selectEvent = new EventEmitter();
    this.activeChangeEvent = new EventEmitter();
  }
  hasActive() {
    return this.activeIdx > -1 && this.activeIdx < this.results.length;
  }
  getActive() {
    return this.results[this.activeIdx];
  }
  markActive(activeIdx) {
    this.activeIdx = activeIdx;
    this._activeChanged();
  }
  next() {
    if (this.activeIdx === this.results.length - 1) {
      this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
    } else {
      this.activeIdx++;
    }
    this._activeChanged();
  }
  prev() {
    if (this.activeIdx < 0) {
      this.activeIdx = this.results.length - 1;
    } else if (this.activeIdx === 0) {
      this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
    } else {
      this.activeIdx--;
    }
    this._activeChanged();
  }
  resetActive() {
    this.activeIdx = this.focusFirst ? 0 : -1;
    this._activeChanged();
  }
  select(item) {
    this.selectEvent.emit(item);
  }
  ngOnInit() {
    this.resetActive();
  }
  _activeChanged() {
    this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + "-" + this.activeIdx : void 0);
  }
  static {
    this.ɵfac = function NgbTypeaheadWindow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTypeaheadWindow)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbTypeaheadWindow,
      selectors: [["ngb-typeahead-window"]],
      hostAttrs: ["role", "listbox"],
      hostVars: 3,
      hostBindings: function NgbTypeaheadWindow_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousedown", function NgbTypeaheadWindow_mousedown_HostBindingHandler($event) {
            return $event.preventDefault();
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.id);
          ɵɵclassMap("dropdown-menu show" + (ctx.popupClass ? " " + ctx.popupClass : ""));
        }
      },
      inputs: {
        id: "id",
        focusFirst: "focusFirst",
        results: "results",
        term: "term",
        formatter: "formatter",
        resultTemplate: "resultTemplate",
        popupClass: "popupClass"
      },
      outputs: {
        selectEvent: "select",
        activeChangeEvent: "activeChange"
      },
      exportAs: ["ngbTypeaheadWindow"],
      decls: 4,
      vars: 0,
      consts: [["rt", ""], ["type", "button", "role", "option", 1, "dropdown-item", 3, "id", "active"], [3, "result", "term"], ["type", "button", "role", "option", 1, "dropdown-item", 3, "mouseenter", "click", "id"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NgbTypeaheadWindow_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NgbTypeaheadWindow_ng_template_0_Template, 1, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵrepeaterCreate(2, NgbTypeaheadWindow_For_3_Template, 2, 9, "button", 1, ɵɵrepeaterTrackByIndex);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵrepeater(ctx.results);
        }
      },
      dependencies: [NgbHighlight, NgTemplateOutlet],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTypeaheadWindow, [{
    type: Component,
    args: [{
      selector: "ngb-typeahead-window",
      exportAs: "ngbTypeaheadWindow",
      imports: [NgbHighlight, NgTemplateOutlet],
      encapsulation: ViewEncapsulation.None,
      host: {
        "(mousedown)": "$event.preventDefault()",
        "[class]": '"dropdown-menu show" + (popupClass ? " " + popupClass : "")',
        role: "listbox",
        "[id]": "id"
      },
      template: `
		<ng-template #rt let-result="result" let-term="term" let-formatter="formatter">
			<ngb-highlight [result]="formatter(result)" [term]="term" />
		</ng-template>
		@for (result of results; track $index) {
			<button
				type="button"
				class="dropdown-item"
				role="option"
				[id]="id + '-' + $index"
				[class.active]="$index === activeIdx"
				(mouseenter)="markActive($index)"
				(click)="select(result)"
			>
				<ng-template
					[ngTemplateOutlet]="resultTemplate || rt"
					[ngTemplateOutletContext]="{ result: result, term: term, formatter: formatter }"
				/>
			</button>
		}
	`
    }]
  }], null, {
    id: [{
      type: Input
    }],
    focusFirst: [{
      type: Input
    }],
    results: [{
      type: Input
    }],
    term: [{
      type: Input
    }],
    formatter: [{
      type: Input
    }],
    resultTemplate: [{
      type: Input
    }],
    popupClass: [{
      type: Input
    }],
    selectEvent: [{
      type: Output,
      args: ["select"]
    }],
    activeChangeEvent: [{
      type: Output,
      args: ["activeChange"]
    }]
  });
})();
var nextWindowId = 0;
var NgbTypeahead = class _NgbTypeahead {
  constructor() {
    this._nativeElement = inject(ElementRef).nativeElement;
    this._config = inject(NgbTypeaheadConfig);
    this._live = inject(Live);
    this._document = inject(DOCUMENT);
    this._ngZone = inject(NgZone);
    this._changeDetector = inject(ChangeDetectorRef);
    this._injector = inject(Injector);
    this._popupService = new PopupService(NgbTypeaheadWindow);
    this._positioning = ngbPositioning();
    this._subscription = null;
    this._closed$ = new Subject();
    this._inputValueBackup = null;
    this._inputValueForSelectOnExact = null;
    this._valueChanges$ = fromEvent(this._nativeElement, "input").pipe(map(($event) => $event.target.value));
    this._resubscribeTypeahead$ = new BehaviorSubject(null);
    this._windowRef = null;
    this.autocomplete = "off";
    this.container = this._config.container;
    this.editable = this._config.editable;
    this.focusFirst = this._config.focusFirst;
    this.selectOnExact = this._config.selectOnExact;
    this.showHint = this._config.showHint;
    this.placement = this._config.placement;
    this.popperOptions = this._config.popperOptions;
    this.selectItem = new EventEmitter();
    this.activeDescendant = null;
    this.popupId = `ngb-typeahead-${nextWindowId++}`;
    this._onTouched = () => {
    };
    this._onChange = (_) => {
    };
  }
  ngOnInit() {
    this._subscribeToUserInput();
  }
  ngOnChanges({
    ngbTypeahead
  }) {
    if (ngbTypeahead && !ngbTypeahead.firstChange) {
      this._unsubscribeFromUserInput();
      this._subscribeToUserInput();
    }
  }
  ngOnDestroy() {
    this._closePopup();
    this._unsubscribeFromUserInput();
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  writeValue(value) {
    this._writeInputValue(this._formatItemForInput(value));
    if (this.showHint) {
      this._inputValueBackup = value;
    }
  }
  setDisabledState(isDisabled) {
    this._nativeElement.disabled = isDisabled;
  }
  /**
   * Dismisses typeahead popup window
   */
  dismissPopup() {
    if (this.isPopupOpen()) {
      this._resubscribeTypeahead$.next(null);
      this._closePopup();
      if (this.showHint && this._inputValueBackup !== null) {
        this._writeInputValue(this._inputValueBackup);
      }
      this._changeDetector.markForCheck();
    }
  }
  /**
   * Returns true if the typeahead popup window is displayed
   */
  isPopupOpen() {
    return this._windowRef != null;
  }
  handleBlur() {
    this._resubscribeTypeahead$.next(null);
    this._onTouched();
  }
  handleKeyDown(event) {
    if (!this.isPopupOpen()) {
      return;
    }
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        this._windowRef.instance.next();
        this._showHint();
        break;
      case "ArrowUp":
        event.preventDefault();
        this._windowRef.instance.prev();
        this._showHint();
        break;
      case "Enter":
      case "Tab": {
        const result = this._windowRef.instance.getActive();
        if (isDefined(result)) {
          event.preventDefault();
          event.stopPropagation();
          this._selectResult(result);
        }
        this._closePopup();
        break;
      }
    }
  }
  _openPopup() {
    if (!this.isPopupOpen()) {
      this._inputValueBackup = this._nativeElement.value;
      const {
        windowRef
      } = this._popupService.open();
      this._windowRef = windowRef;
      this._windowRef.setInput("id", this.popupId);
      this._windowRef.setInput("popupClass", this.popupClass);
      this._windowRef.instance.selectEvent.subscribe((result) => this._selectResultClosePopup(result));
      this._windowRef.instance.activeChangeEvent.subscribe((activeId) => this.activeDescendant = activeId);
      if (this.container === "body") {
        this._windowRef.location.nativeElement.style.zIndex = "1055";
        this._document.body.appendChild(this._windowRef.location.nativeElement);
      }
      this._changeDetector.markForCheck();
      this._ngZone.runOutsideAngular(() => {
        if (this._windowRef) {
          this._positioning.createPopper({
            hostElement: this._nativeElement,
            targetElement: this._windowRef.location.nativeElement,
            placement: this.placement,
            updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 2])(options))
          });
          this._afterRenderRef = afterEveryRender({
            mixedReadWrite: () => {
              this._positioning.update();
            }
          }, {
            injector: this._injector
          });
        }
      });
      ngbAutoClose(this._ngZone, this._document, "outside", () => this.dismissPopup(), this._closed$, [this._nativeElement, this._windowRef.location.nativeElement]);
    }
  }
  _closePopup() {
    this._popupService.close().subscribe(() => {
      this._positioning.destroy();
      this._afterRenderRef?.destroy();
      this._closed$.next();
      this._windowRef = null;
      this.activeDescendant = null;
    });
  }
  _selectResult(result) {
    let defaultPrevented = false;
    this.selectItem.emit({
      item: result,
      preventDefault: () => {
        defaultPrevented = true;
      }
    });
    this._resubscribeTypeahead$.next(null);
    if (!defaultPrevented) {
      this.writeValue(result);
      this._onChange(result);
    }
  }
  _selectResultClosePopup(result) {
    this._selectResult(result);
    this._closePopup();
  }
  _showHint() {
    if (this.showHint && this._windowRef?.instance.hasActive() && this._inputValueBackup != null) {
      const userInputLowerCase = this._inputValueBackup.toLowerCase();
      const formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
      if (userInputLowerCase === formattedVal.substring(0, this._inputValueBackup.length).toLowerCase()) {
        this._writeInputValue(this._inputValueBackup + formattedVal.substring(this._inputValueBackup.length));
        this._nativeElement["setSelectionRange"].apply(this._nativeElement, [this._inputValueBackup.length, formattedVal.length]);
      } else {
        this._writeInputValue(formattedVal);
      }
    }
  }
  _formatItemForInput(item) {
    return item != null && this.inputFormatter ? this.inputFormatter(item) : toString(item);
  }
  _writeInputValue(value) {
    this._nativeElement.value = toString(value);
  }
  _subscribeToUserInput() {
    const results$ = this._valueChanges$.pipe(tap((value) => {
      this._inputValueBackup = this.showHint ? value : null;
      this._inputValueForSelectOnExact = this.selectOnExact ? value : null;
      this._onChange(this.editable ? value : null);
    }), this.ngbTypeahead ? this.ngbTypeahead : () => of([]));
    this._subscription = this._resubscribeTypeahead$.pipe(switchMap(() => results$)).subscribe((results) => {
      if (!results || results.length === 0) {
        this._closePopup();
      } else {
        if (this.selectOnExact && results.length === 1 && this._formatItemForInput(results[0]) === this._inputValueForSelectOnExact) {
          this._selectResult(results[0]);
          this._closePopup();
        } else {
          this._openPopup();
          this._windowRef.setInput("focusFirst", this.focusFirst);
          this._windowRef.setInput("results", results);
          this._windowRef.setInput("term", this._nativeElement.value);
          if (this.resultFormatter) {
            this._windowRef.setInput("formatter", this.resultFormatter);
          }
          if (this.resultTemplate) {
            this._windowRef.setInput("resultTemplate", this.resultTemplate);
          }
          this._windowRef.instance.resetActive();
          this._windowRef.changeDetectorRef.detectChanges();
          this._showHint();
        }
      }
      const count = results ? results.length : 0;
      this._live.say(count === 0 ? "No results available" : `${count} result${count === 1 ? "" : "s"} available`);
    });
  }
  _unsubscribeFromUserInput() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    this._subscription = null;
  }
  static {
    this.ɵfac = function NgbTypeahead_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTypeahead)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbTypeahead,
      selectors: [["input", "ngbTypeahead", ""]],
      hostAttrs: ["autocapitalize", "off", "autocorrect", "off", "role", "combobox"],
      hostVars: 7,
      hostBindings: function NgbTypeahead_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("blur", function NgbTypeahead_blur_HostBindingHandler() {
            return ctx.handleBlur();
          })("keydown", function NgbTypeahead_keydown_HostBindingHandler($event) {
            return ctx.handleKeyDown($event);
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("autocomplete", ctx.autocomplete);
          ɵɵattribute("aria-autocomplete", ctx.showHint ? "both" : "list")("aria-activedescendant", ctx.activeDescendant)("aria-controls", ctx.isPopupOpen() ? ctx.popupId : null)("aria-expanded", ctx.isPopupOpen());
          ɵɵclassProp("open", ctx.isPopupOpen());
        }
      },
      inputs: {
        autocomplete: "autocomplete",
        container: "container",
        editable: "editable",
        focusFirst: "focusFirst",
        inputFormatter: "inputFormatter",
        ngbTypeahead: "ngbTypeahead",
        resultFormatter: "resultFormatter",
        resultTemplate: "resultTemplate",
        selectOnExact: "selectOnExact",
        showHint: "showHint",
        placement: "placement",
        popperOptions: "popperOptions",
        popupClass: "popupClass"
      },
      outputs: {
        selectItem: "selectItem"
      },
      exportAs: ["ngbTypeahead"],
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgbTypeahead),
        multi: true
      }]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTypeahead, [{
    type: Directive,
    args: [{
      selector: "input[ngbTypeahead]",
      exportAs: "ngbTypeahead",
      host: {
        "(blur)": "handleBlur()",
        "[class.open]": "isPopupOpen()",
        "(keydown)": "handleKeyDown($event)",
        "[autocomplete]": "autocomplete",
        autocapitalize: "off",
        autocorrect: "off",
        role: "combobox",
        "[attr.aria-autocomplete]": 'showHint ? "both" : "list"',
        "[attr.aria-activedescendant]": "activeDescendant",
        "[attr.aria-controls]": "isPopupOpen() ? popupId : null",
        "[attr.aria-expanded]": "isPopupOpen()"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgbTypeahead),
        multi: true
      }]
    }]
  }], null, {
    autocomplete: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    editable: [{
      type: Input
    }],
    focusFirst: [{
      type: Input
    }],
    inputFormatter: [{
      type: Input
    }],
    ngbTypeahead: [{
      type: Input
    }],
    resultFormatter: [{
      type: Input
    }],
    resultTemplate: [{
      type: Input
    }],
    selectOnExact: [{
      type: Input
    }],
    showHint: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    popperOptions: [{
      type: Input
    }],
    popupClass: [{
      type: Input
    }],
    selectItem: [{
      type: Output
    }]
  });
})();
var NgbTypeaheadModule = class _NgbTypeaheadModule {
  static {
    this.ɵfac = function NgbTypeaheadModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTypeaheadModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbTypeaheadModule,
      imports: [NgbHighlight, NgbTypeahead],
      exports: [NgbHighlight, NgbTypeahead]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTypeaheadModule, [{
    type: NgModule,
    args: [{
      imports: [NgbHighlight, NgbTypeahead],
      exports: [NgbHighlight, NgbTypeahead]
    }]
  }], null, null);
})();

export {
  NgbHighlight,
  NgbTypeaheadConfig,
  NgbTypeahead,
  NgbTypeaheadModule
};
//# sourceMappingURL=chunk-IJZFDMKX.js.map
