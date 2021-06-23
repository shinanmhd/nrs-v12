(self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["src_app_control_control_module_ts"],{

/***/ 6687:
/*!******************************************************!*\
  !*** ./src/app/control/cg-text/cg-text.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CgTextComponent": function() { return /* binding */ CgTextComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

class CgTextComponent {
    constructor() { }
    ngOnInit() {
    }
}
CgTextComponent.ɵfac = function CgTextComponent_Factory(t) { return new (t || CgTextComponent)(); };
CgTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CgTextComponent, selectors: [["app-cg-text"]], decls: 2, vars: 0, template: function CgTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " cg-text works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZy10ZXh0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 21477:
/*!*******************************************!*\
  !*** ./src/app/control/control.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlModule": function() { return /* binding */ ControlModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _news_cg_news_cg_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-cg/news-cg.component */ 34680);
/* harmony import */ var _cg_text_cg_text_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cg-text/cg-text.component */ 6687);
/* harmony import */ var _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticker/ticker.component */ 81813);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _control_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control.routing */ 92227);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 84051);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demo-material-module */ 55408);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5052);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-dragula */ 88989);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ 62800);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ 53863);
/* harmony import */ var _store_control_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/control.reducer */ 54962);
/* harmony import */ var _store_control_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/control.effects */ 11173);
/* harmony import */ var _onair_onair_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./onair/onair.component */ 97296);
/* harmony import */ var _slide_data_dialog_slide_data_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slide-data-dialog/slide-data-dialog.component */ 79084);
/* harmony import */ var _sms_sms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sms/sms.component */ 9014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 74788);
























class ControlModule {
}
ControlModule.ɵfac = function ControlModule_Factory(t) { return new (t || ControlModule)(); };
ControlModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: ControlModule });
ControlModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(_control_routing__WEBPACK_IMPORTED_MODULE_3__.ControlRoutes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _demo_material_module__WEBPACK_IMPORTED_MODULE_4__.DemoMaterialModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PerfectScrollbarModule,
            ng2_dragula__WEBPACK_IMPORTED_MODULE_17__.DragulaModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__.NgxDatatableModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_19__.StoreModule.forFeature('ControlState', _store_control_reducer__WEBPACK_IMPORTED_MODULE_6__.reducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__.EffectsModule.forFeature([_store_control_effects__WEBPACK_IMPORTED_MODULE_7__.ControlEffects]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ControlModule, { declarations: [_news_cg_news_cg_component__WEBPACK_IMPORTED_MODULE_0__.NewsCgComponent,
        _cg_text_cg_text_component__WEBPACK_IMPORTED_MODULE_1__.CgTextComponent,
        _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_2__.TickerComponent,
        _onair_onair_component__WEBPACK_IMPORTED_MODULE_8__.OnairComponent,
        _slide_data_dialog_slide_data_dialog_component__WEBPACK_IMPORTED_MODULE_9__.SlideDataDialogComponent,
        _sms_sms_component__WEBPACK_IMPORTED_MODULE_10__.SmsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_4__.DemoMaterialModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PerfectScrollbarModule,
        ng2_dragula__WEBPACK_IMPORTED_MODULE_17__.DragulaModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__.NgxDatatableModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_19__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__.EffectsFeatureModule] }); })();


/***/ }),

/***/ 92227:
/*!********************************************!*\
  !*** ./src/app/control/control.routing.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlRoutes": function() { return /* binding */ ControlRoutes; }
/* harmony export */ });
/* harmony import */ var _news_cg_news_cg_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-cg/news-cg.component */ 34680);
/* harmony import */ var _cg_text_cg_text_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cg-text/cg-text.component */ 6687);
/* harmony import */ var _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticker/ticker.component */ 81813);
/* harmony import */ var _onair_onair_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onair/onair.component */ 97296);
/* harmony import */ var _sms_sms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sms/sms.component */ 9014);





const ControlRoutes = [
    {
        path: '',
        children: [
            {
                path: 'news-cg',
                component: _news_cg_news_cg_component__WEBPACK_IMPORTED_MODULE_0__.NewsCgComponent,
                data: { role: 'control' }
            }, {
                path: 'cg-text',
                component: _cg_text_cg_text_component__WEBPACK_IMPORTED_MODULE_1__.CgTextComponent,
                data: { role: 'control' }
            }, {
                path: 'ticker',
                component: _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_2__.TickerComponent,
                data: { role: 'control' }
            }, {
                path: 'on-air',
                component: _onair_onair_component__WEBPACK_IMPORTED_MODULE_3__.OnairComponent,
                data: { role: 'control' }
            }, {
                path: 'sms',
                component: _sms_sms_component__WEBPACK_IMPORTED_MODULE_4__.SmsComponent,
                data: { role: 'control' }
            }
        ]
    }
];


/***/ }),

/***/ 34680:
/*!******************************************************!*\
  !*** ./src/app/control/news-cg/news-cg.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsCgComponent": function() { return /* binding */ NewsCgComponent; }
/* harmony export */ });
/* harmony import */ var _news_models_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../news/models/news */ 26318);
/* harmony import */ var _store_control_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/control.actions */ 74560);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 53863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 62800);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 7639);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 49356);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 84051);













function NewsCgComponent_div_8_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.selectedNews.news.heading);
} }
function NewsCgComponent_div_8_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.selectedNews.news.heading);
} }
function NewsCgComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NewsCgComponent_div_8_div_1_span_4_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NewsCgComponent_div_8_div_1_span_5_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.selectedNews.news.news_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.selectedNews.news.language.language_code == "Dhv");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.selectedNews.news.language.language_code != "Dhv");
} }
function NewsCgComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NewsCgComponent_div_8_div_1_Template, 6, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.selectedNews);
} }
function NewsCgComponent_mat_card_content_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-content", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "No News in the List");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NewsCgComponent_mat_card_content_10_ng_template_3_strong_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "strong", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r8.title);
} }
function NewsCgComponent_mat_card_content_10_ng_template_3_strong_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r8.title);
} }
function NewsCgComponent_mat_card_content_10_ng_template_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r8.detail);
} }
function NewsCgComponent_mat_card_content_10_ng_template_3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r8.detail);
} }
function NewsCgComponent_mat_card_content_10_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NewsCgComponent_mat_card_content_10_ng_template_3_strong_0_Template, 2, 1, "strong", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NewsCgComponent_mat_card_content_10_ng_template_3_strong_1_Template, 2, 1, "strong", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NewsCgComponent_mat_card_content_10_ng_template_3_span_3_Template, 2, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NewsCgComponent_mat_card_content_10_ng_template_3_span_4_Template, 2, 1, "span", 30);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.selectedNews.news.language.language_code == "Dhv");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.selectedNews.news.language.language_code != "Dhv");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.selectedNews.news.language.language_code == "Dhv");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.selectedNews.news.language.language_code != "Dhv");
} }
function NewsCgComponent_mat_card_content_10_ng_template_5_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsCgComponent_mat_card_content_10_ng_template_5_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().row; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r20.updateCg(row_r17.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "play_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NewsCgComponent_mat_card_content_10_ng_template_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsCgComponent_mat_card_content_10_ng_template_5_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().row; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r23.updateCg(row_r17.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "play_circle_filled");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NewsCgComponent_mat_card_content_10_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NewsCgComponent_mat_card_content_10_ng_template_5_button_0_Template, 3, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NewsCgComponent_mat_card_content_10_ng_template_5_button_1_Template, 3, 0, "button", 33);
} if (rf & 2) {
    const row_r17 = ctx.row;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.viewingKey != row_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.viewingKey == row_r17.id);
} }
function NewsCgComponent_mat_card_content_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-content", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngx-datatable", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ngx-datatable-column", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NewsCgComponent_mat_card_content_10_ng_template_3_Template, 5, 4, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ngx-datatable-column", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NewsCgComponent_mat_card_content_10_ng_template_5_Template, 2, 2, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx_r2.selectedNews.news.newsbar)("columnMode", "flex")("headerHeight", 50)("footerHeight", 0)("rowHeight", "auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("flexGrow", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("flexGrow", 1);
} }
class NewsCgComponent {
    constructor(store, updates$) {
        this.store = store;
        this.updates$ = updates$;
        this.NewsList = new _news_models_news__WEBPACK_IMPORTED_MODULE_0__.NewsList();
        this.selectedNewsKey = 0;
        this.viewingKeyTmp = null;
        this.viewingKey = null;
    }
    ngOnInit() {
        this.store.dispatch(new _store_control_actions__WEBPACK_IMPORTED_MODULE_1__.GetNewsCgNews());
        this.updates$
            .pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_store_control_actions__WEBPACK_IMPORTED_MODULE_1__.GET_NEWS_CG_NEWS_SUCCESS))
            .subscribe(() => {
            this.store.select(store => store.ControlState.newsCgState)
                .subscribe((list) => {
                this.NewsList = list;
                if (this.NewsList.list_news) {
                    this.selectedNews = this.NewsList.list_news[this.selectedNewsKey];
                }
                else {
                    this.selectedNews = null;
                }
            });
        });
        this.updates$
            .pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_store_control_actions__WEBPACK_IMPORTED_MODULE_1__.UPDATE_NEWS_CG_NEWS_SUCCESS))
            .subscribe(() => {
            this.viewingKey = this.viewingKeyTmp;
        });
    }
    nextNews() {
        if (this.selectedNewsKey < (this.NewsList.list_news.length - 1)) {
            this.selectedNewsKey = this.selectedNewsKey + 1;
        }
        this.selectedNews = this.NewsList.list_news[this.selectedNewsKey];
    }
    previousNews() {
        if (this.selectedNewsKey > 0) {
            this.selectedNewsKey = this.selectedNewsKey - 1;
        }
        this.selectedNews = this.NewsList.list_news[this.selectedNewsKey];
    }
    updateCg(id) {
        this.viewingKeyTmp = id;
        this.store.dispatch(new _store_control_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateNewsCgNews({ news_bar_id: id }));
    }
    stopCg() {
        this.store.dispatch(new _store_control_actions__WEBPACK_IMPORTED_MODULE_1__.StopNewsCg());
    }
}
NewsCgComponent.ɵfac = function NewsCgComponent_Factory(t) { return new (t || NewsCgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions)); };
NewsCgComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NewsCgComponent, selectors: [["app-news-cg"]], decls: 19, vars: 6, consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-lg", "75", "fxFlex.gt-md", "60", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "mb-1"], [1, "mt-0"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "bg-light"], [1, "d-flex"], ["mat-icon-button", "", "color", "primary", 3, "disabled", "click"], ["aria-label", "Example icon-button with a heart icon"], ["fxFlex.gt-xs", "100", "fxFlex", "100", 4, "ngIf"], ["fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "text-danger", "font-bold", 2, "text-align", "center"], ["fxLayout", "column"], ["class", "dhv", "style", "text-align:center;", 4, "ngIf"], ["style", "text-align:center;", 4, "ngIf"], [1, "dhv", 2, "text-align", "center"], [2, "text-align", "center"], [1, "table-responsive"], [2, "padding-top", "100px"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "height", "100%", "padding", "0", "margin", "0", "display", "-webkit-box", "display", "-moz-box", "display", "-ms-flexbox", "display", "-webkit-flex", "display", "flex", "align-items", "center", "justify-content", "center"], ["fxLayout", "row"], ["src", "/assets/images/nothing-states/nothing-in-list.png", 2, "width", "auto", "height", "200px"], [1, "material", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight"], ["name", "News Bar", 3, "flexGrow"], ["ngx-datatable-cell-template", ""], ["name", "Action", 3, "flexGrow"], ["class", "dhv", 4, "ngIf"], [4, "ngIf"], ["class", "mat-text-muted", "class", "dhv", 4, "ngIf"], ["class", "mat-text-muted", 4, "ngIf"], [1, "dhv"], [1, "mat-text-muted"], ["mat-icon-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["aria-label", "Play CG"]], template: function NewsCgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NewsCgComponent_div_8_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NewsCgComponent_mat_card_content_9_Template, 10, 0, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NewsCgComponent_mat_card_content_10_Template, 6, 7, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-card-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsCgComponent_Template_button_click_13_listener() { return ctx.previousNews(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewsCgComponent_Template_button_click_16_listener() { return ctx.nextNews(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.NewsList.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.NewsList.list_news.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.NewsList.list_news.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.NewsList.list_news.length > 0 && ctx.selectedNews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.NewsList.list_news);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.NewsList.list_news);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__.DataTableColumnCellDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLWNnLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 97296:
/*!**************************************************!*\
  !*** ./src/app/control/onair/onair.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnairComponent": function() { return /* binding */ OnairComponent; },
/* harmony export */   "Slide": function() { return /* binding */ Slide; },
/* harmony export */   "slideData": function() { return /* binding */ slideData; }
/* harmony export */ });
/* harmony import */ var _services_onair_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/onair.service */ 46393);
/* harmony import */ var _slide_data_dialog_slide_data_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slide-data-dialog/slide-data-dialog.component */ 79084);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _news_models_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../news/models/news */ 26318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 20592);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3069);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 20630);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 7639);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 4008);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 12057);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 73121);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 46833);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 64372);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 12895);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ 45363);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 49356);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 64677);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 23021);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 64855);




























const _c0 = ["sidebar"];
function OnairComponent_mat_list_item_15_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "subdirectory_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function OnairComponent_mat_list_item_15_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "offline_pin");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function OnairComponent_mat_list_item_15_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r8);
} }
function OnairComponent_mat_list_item_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OnairComponent_mat_list_item_15_Template_mat_list_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const slide_r4 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.onSelectSlide(slide_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, OnairComponent_mat_list_item_15_mat_icon_1_Template, 2, 0, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, OnairComponent_mat_list_item_15_mat_icon_6_Template, 2, 0, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, OnairComponent_mat_list_item_15_button_7_Template, 3, 1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-menu", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OnairComponent_mat_list_item_15_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const slide_r4 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.updateSelectedSlide(slide_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Set Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", slide_r4 == ctx_r2.selectedSlide ? "rgba(127, 255, 212, 0.6)" : "rgba(255, 255, 255, 0)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", slide_r4 == ctx_r2.selectedSlide);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", slide_r4.slide_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", slide_r4.slide_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", slide_r4.id == ctx_r2.settings_selected_slide);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", slide_r4.id != ctx_r2.settings_selected_slide);
} }
function OnairComponent_div_28_div_8_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "zoom_in");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function OnairComponent_div_28_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, OnairComponent_div_28_div_8_button_4_Template, 3, 0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OnairComponent_div_28_div_8_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const slide_content_r13 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r15.deleteContent(slide_content_r13.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_content_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("table-row status_", slide_content_r13.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", slide_content_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](slide_content_r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.active === 1);
} }
function OnairComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, OnairComponent_div_28_div_8_Template, 8, 6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.selectedSlide.onairslidecontent);
} }
const _c1 = function (a0, a1) { return { "side-panel-opened": a0, "side-panel-closed": a1 }; };
class OnairComponent {
    constructor(onAirService, dialog, snackBar, angularFirestore) {
        this.onAirService = onAirService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.angularFirestore = angularFirestore;
        this.sidePanelOpened = true;
        this.sidePanelOpened_noNews = true;
        this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.onAirService.getSlides().subscribe(onair => {
            this.slides = onair;
            this.slides.forEach(slide => {
                this.angularFirestore
                    .collection("onair-slides-collection")
                    .doc(slide.slide_id)
                    .set(slide)
                    .then(response => { console.log(response); }, error => error);
            });
            console.log(this.slides);
        });
    }
    sideBarToggle() {
        this.sidenav.toggle();
    }
    isOver() {
        return window.matchMedia(`(max-width: 960px)`).matches;
    }
    onSelectSlide(slide) {
        this.selectedSlide = slide;
        this.settings_selected_slide = slide.id;
        console.log(slide);
    }
    addSlideData(slideId) {
        let content = new slideData(null, new _news_models_news__WEBPACK_IMPORTED_MODULE_2__.Language('Dhv'), this.settings_selected_slide, 0);
        let dialogRef = this.dialog.open(_slide_data_dialog_slide_data_dialog_component__WEBPACK_IMPORTED_MODULE_1__.SlideDataDialogComponent, { width: '40%', height: 'auto', maxHeight: '95%', data: content });
        dialogRef.componentInstance.onAdd.subscribe((result) => {
            console.log(result);
            this.onAirService.addSlideData(result).subscribe(re => {
                console.log(re);
                this.slides = re;
                this.slides.forEach(data => {
                    if (data.id === this.settings_selected_slide) {
                        this.selectedSlide = data;
                    }
                });
            });
        }, err => {
            console.log("status code--->" + err.status);
        });
    }
    deleteContent(id) {
        this.onAirService.deleteSlideData(id).subscribe(re => {
            this.onAirService.getSlides().subscribe(onair => {
                this.slides = onair;
                this.slides.forEach(data => {
                    if (data.id === this.settings_selected_slide) {
                        this.selectedSlide = data;
                    }
                });
            });
        }, err => {
            console.log("Err Deleting Slide Data, status code--->" + err.status);
        });
    }
}
OnairComponent.ɵfac = function OnairComponent_Factory(t) { return new (t || OnairComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_onair_service__WEBPACK_IMPORTED_MODULE_0__.OnairService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore)); };
OnairComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: OnairComponent, selectors: [["app-onair"]], viewQuery: function OnairComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 33, vars: 11, consts: [["fxLayout", "row", "fxLayoutAlign", "center start"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex", "100"], [1, "mat-card-top"], [3, "ngClass"], [3, "mode", "opened", "open", "close"], ["sidebar", ""], ["color", "primary", 1, "no-shadow"], ["fxLayout", "row", "fxFlex", "100"], [1, "m-t-0", "font-14"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [3, "background-color", "click", 4, "ngFor", "ngForOf"], ["color", "warn", 1, "bg-success", "no-shadow", "chat-right-panel"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "center center"], ["mat-icon-button", "", 1, "mr-1", 3, "click"], ["fxFlex", ""], [1, "font-14"], [1, "chat-middle-box", 2, "min-height", "700px"], ["class", "table-rasponsive", 4, "ngIf"], [1, "chat-footer"], ["align", "end"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "click"], ["color", "primary", 4, "ngIf"], ["matLine", ""], ["matLine", "", 1, "text-muted"], ["color", "warn", 4, "ngIf"], ["mat-icon-button", "", "class", "ml-1", 3, "matMenuTriggerFor", 4, "ngIf"], ["x-position", "before"], ["them", "matMenu"], ["mat-menu-item", "", "color", "primary", 3, "click"], ["color", "primary"], ["color", "warn"], ["mat-icon-button", "", 1, "ml-1", 3, "matMenuTriggerFor"], [1, "table-rasponsive"], [1, "table"], [1, "table-header"], [1, "header__item", "column-value"], [1, "header__item", "column-actions"], [1, "table-content"], [3, "class", "id", 4, "ngFor", "ngForOf"], [3, "id"], [1, "table-data", "column-value"], [1, "table-data", "column-actions"], ["mat-icon-button", "", "color", "basic", "matTooltip", "View News", "matTooltipPosition", "below", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Remove News", "matTooltipPosition", "below", 3, "click"], ["aria-label", "Edit"], ["mat-icon-button", "", "color", "basic", "matTooltip", "View News", "matTooltipPosition", "below"], ["aria-label", "view news"]], template: function OnairComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-sidenav-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-sidenav", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("open", function OnairComponent_Template_mat_sidenav_open_4_listener() { return ctx.sidePanelOpened =  true || 0; })("close", function OnairComponent_Template_mat_sidenav_close_4_listener() { return ctx.sidePanelOpened =  false || ctx.sidePanelOpened_noNews == false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-toolbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "mat-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, OnairComponent_mat_list_item_15_Template, 12, 7, "mat-list-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-toolbar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OnairComponent_Template_button_click_18_listener() { return ctx.sideBarToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "short_text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-card-content", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, OnairComponent_div_28_Template, 9, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-card-actions", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OnairComponent_Template_button_click_31_listener() { return ctx.addSlideData(ctx.selectedSlide.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](8, _c1, ctx.sidePanelOpened, !ctx.sidePanelOpened));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mode", ctx.isOver() ? "over" : "side")("opened", !ctx.isOver());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedSlide);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.selectedSlide);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContainer, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenav, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbar, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepicker, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatNavList, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardActions, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatLine, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip], styles: [".table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px solid #EEEEEE;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 10px 0;\n  font-size: 12px;\n  border-bottom: 1px solid #EEEEEE;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding-left: 10px 0;\n  border-bottom: 1px solid #EEEEEE;\n  transition: all 0.2s ease-in-out;\n}\n\n.table-row[_ngcontent-%COMP%]:hover{\n  background-color: rgba(97, 97, 97, 0.068);\n}\n\n\n\n.table-row.status_breaker[_ngcontent-%COMP%]{\n  background-color: rgba(127, 255, 212, 0.2)\n}\n\n.table-row[_ngcontent-%COMP%]:hover.status_breaker{\n  background-color: rgba(127, 255, 212, 0.7)\n}\n\n.table-row[_ngcontent-%COMP%]:nth-of-type(odd) {\n  \n}\n\n.table-data[_ngcontent-%COMP%], .header__item[_ngcontent-%COMP%] {\n  flex: 1 1 20%;\n  text-align: center;\n  padding: 5px;\n}\n\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.filter__link[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n.filter__link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: -18px;\n  color: white;\n  font-size: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.filter__link.desc[_ngcontent-%COMP%]::after {\n  content: \"(desc)\";\n}\n\n.filter__link.asc[_ngcontent-%COMP%]::after {\n  content: \"(asc)\";\n}\n\n.column-value[_ngcontent-%COMP%]{\n  flex: 0 0 80%;\n  font-size: 12px;\n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n\n\n.column-actions[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uYWlyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQ0FBZ0M7RUFLaEMsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBLFlBQVk7O0FBQ1o7RUFDRTtBQUNGOztBQUNBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnREFBZ0Q7RUFDaEQsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsUUFBUTtFQUNSLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFLQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtBQUNsRDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpQkU7O0FBQ0Y7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoib25haXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNFRUVFRUU7XG59XG5cbi50YWJsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFRUVFO1xufVxuXG4udGFibGUtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRUVFRTtcblxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4udGFibGUtcm93OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDAuMDY4KTtcbn1cblxuLyogQlJFQUtFUiAqL1xuLnRhYmxlLXJvdy5zdGF0dXNfYnJlYWtlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLCAwLjIpXG59XG4udGFibGUtcm93OmhvdmVyLnN0YXR1c19icmVha2Vye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuNylcbn1cblxuLnRhYmxlLXJvdzpudGgtb2YtdHlwZShvZGQpIHtcbiAgLypiYWNrZ3JvdW5kOiAjRUVFRUVFOyovXG59XG5cbi50YWJsZS1kYXRhLFxuLmhlYWRlcl9faXRlbSB7XG4gIGZsZXg6IDEgMSAyMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaGVhZGVyX19pdGVtIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZmlsdGVyX19saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG59XG4uZmlsdGVyX19saW5rOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5maWx0ZXJfX2xpbmsuZGVzYzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIihkZXNjKVwiO1xufVxuLmZpbHRlcl9fbGluay5hc2M6OmFmdGVyIHtcbiAgY29udGVudDogXCIoYXNjKVwiO1xufVxuXG5cblxuXG4uY29sdW1uLXZhbHVle1xuICBmbGV4OiAwIDAgODAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbn1cblxuLyouY29sdW1uLWhlYWRpbmd7XG4gIGZsZXg6IDAgMCA1MyU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xufVxuLmNvbHVtbi1oZWFkaW5nLmRodntcbiAgZm9udC1mYW1pbHk6ICdNVl9GYXNleWhhJztcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG4uY29sdW1uLWRhdGV7XG4gIGZsZXg6IDAgMCA3JTtcbiAgZm9udC1zaXplOiAxMnB4O1xufSovXG4uY29sdW1uLWFjdGlvbnN7XG4gIGZsZXg6IDAgMCAyMCU7XG59XG5cbiJdfQ== */"] });
class Slide {
}
class slideData {
    constructor(data, lang, s_id, active) {
        this.data = data;
        this.language = lang;
        this.on_air_slides_id = s_id;
        this.active = active;
    }
}


/***/ }),

/***/ 47997:
/*!*****************************************************!*\
  !*** ./src/app/control/services/control.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlService": function() { return /* binding */ ControlService; }
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58497);




class ControlService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    // get selected list
    getNewsCgNews() {
        return this.http.get(this.apiUrl + 'control/news/cg');
    }
    // get selected list
    getNewsCgSettings() {
        console.log('Getting cg settings');
        //return this.http.get<any>(this.apiUrl + 'control/cg/settings/all');
        return this.http.get(this.apiUrl + 'control/news/cg');
    }
    //update news cg text
    updateNewsCgText(news_bar_id) {
        return this.http.put(this.apiUrl + 'control/news/cg/update/', { "news_bar_id": news_bar_id, "ip": '' });
    }
    stopNewsCg() {
        return this.http.post(this.apiUrl + 'control/cg/news/stop', {});
    }
}
ControlService.ɵfac = function ControlService_Factory(t) { return new (t || ControlService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ControlService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ControlService, factory: ControlService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 46393:
/*!***************************************************!*\
  !*** ./src/app/control/services/onair.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnairService": function() { return /* binding */ OnairService; }
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58497);




class OnairService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    // get selected list
    getSlides() {
        return this.http.get(this.apiUrl + 'control/onair/slides');
    }
    //add slide data
    addSlideData(data) {
        return this.http.post(this.apiUrl + 'control/onair/slide/data', data);
    }
    //add slide data
    deleteSlideData(id) {
        return this.http.delete(this.apiUrl + 'control/onair/slide/data/' + id);
    }
}
OnairService.ɵfac = function OnairService_Factory(t) { return new (t || OnairService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
OnairService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OnairService, factory: OnairService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 79084:
/*!**************************************************************************!*\
  !*** ./src/app/control/slide-data-dialog/slide-data-dialog.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideDataDialogComponent": function() { return /* binding */ SlideDataDialogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 74788);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 20592);
/* harmony import */ var _onair_onair_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../onair/onair.component */ 97296);
/* harmony import */ var _news_models_news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../news/models/news */ 26318);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ 73624);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 24751);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 46833);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 64372);
/* harmony import */ var _shared_directives_thaana_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directives/thaana.directive */ 76274);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 2895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 12057);















class SlideDataDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dhivehiEnabled = true;
        this.slide_data = new _onair_onair_component__WEBPACK_IMPORTED_MODULE_0__.slideData(null, new _news_models_news__WEBPACK_IMPORTED_MODULE_1__.Language('Dhv'), null);
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        this.slide_data = this.data;
    }
    closeDialog(confirmation) {
        this.dialogRef.close(confirmation);
    }
    changeLanguage() {
        if (this.dhivehiEnabled) {
            this.slide_data.language.language_code = 'Dhv';
        }
        else {
            this.slide_data.language.language_code = 'Eng';
        }
    }
    addData() {
        // this.store.dispatch(new adminActions.CreateUser(this.user));
        this.onAdd.emit(this.slide_data);
        this.dialogRef.close(true);
    }
}
SlideDataDialogComponent.ɵfac = function SlideDataDialogComponent_Factory(t) { return new (t || SlideDataDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
SlideDataDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SlideDataDialogComponent, selectors: [["app-slide-data-dialog"]], inputs: { dhivehiEnabled: "dhivehiEnabled" }, decls: 20, vars: 8, consts: [["mat-dialog-title", ""], ["labelPosition", "after", "color", "secondary", 3, "ngModel", "ngModelChange"], [1, "basic-form"], ["userForm", "ngForm"], ["mat-dialog-content", ""], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-top", "20px"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["appearance", "outline"], ["matInput", "", "mat-autosize", "", "required", "", "name", "templateName", 3, "ngModel", "appDnrmsThaana", "ngModelChange"], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "color", "basic", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]], template: function SlideDataDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Add Data To Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-slide-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SlideDataDialogComponent_Template_mat_slide_toggle_ngModelChange_2_listener($event) { return ctx.dhivehiEnabled = $event; })("ngModelChange", function SlideDataDialogComponent_Template_mat_slide_toggle_ngModelChange_2_listener() { return ctx.changeLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Slide Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SlideDataDialogComponent_Template_input_ngModelChange_12_listener($event) { return ctx.slide_data.data = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SlideDataDialogComponent_Template_button_click_16_listener() { return ctx.closeDialog(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SlideDataDialogComponent_Template_button_click_18_listener() { return ctx.addData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.dhivehiEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.slide_data.language.language_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.slide_data.data)("appDnrmsThaana", ctx.dhivehiEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 6, ctx.slide_data), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _shared_directives_thaana_directive__WEBPACK_IMPORTED_MODULE_2__.ThaanaDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.JsonPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbGlkZS1kYXRhLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9014:
/*!**********************************************!*\
  !*** ./src/app/control/sms/sms.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmsComponent": function() { return /* binding */ SmsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

class SmsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SmsComponent.ɵfac = function SmsComponent_Factory(t) { return new (t || SmsComponent)(); };
SmsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmsComponent, selectors: [["app-sms"]], decls: 2, vars: 0, template: function SmsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sms works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 74560:
/*!**************************************************!*\
  !*** ./src/app/control/store/control.actions.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOGOUT_CONTROL": function() { return /* binding */ LOGOUT_CONTROL; },
/* harmony export */   "GET_NEWS_CG_NEWS": function() { return /* binding */ GET_NEWS_CG_NEWS; },
/* harmony export */   "GET_NEWS_CG_NEWS_SUCCESS": function() { return /* binding */ GET_NEWS_CG_NEWS_SUCCESS; },
/* harmony export */   "GET_NEWS_CG_NEWS_ERROR": function() { return /* binding */ GET_NEWS_CG_NEWS_ERROR; },
/* harmony export */   "UPDATE_NEWS_CG_NEWS": function() { return /* binding */ UPDATE_NEWS_CG_NEWS; },
/* harmony export */   "UPDATE_NEWS_CG_NEWS_SUCCESS": function() { return /* binding */ UPDATE_NEWS_CG_NEWS_SUCCESS; },
/* harmony export */   "UPDATE_NEWS_CG_NEWS_ERROR": function() { return /* binding */ UPDATE_NEWS_CG_NEWS_ERROR; },
/* harmony export */   "GET_CG_SETTINGS": function() { return /* binding */ GET_CG_SETTINGS; },
/* harmony export */   "GET_CG_SETTINGS_SUCCESS": function() { return /* binding */ GET_CG_SETTINGS_SUCCESS; },
/* harmony export */   "GET_CG_SETTINGS_ERROR": function() { return /* binding */ GET_CG_SETTINGS_ERROR; },
/* harmony export */   "STOP_NEWS_CG": function() { return /* binding */ STOP_NEWS_CG; },
/* harmony export */   "STOP_NEWS_CG_SUCCESS": function() { return /* binding */ STOP_NEWS_CG_SUCCESS; },
/* harmony export */   "STOP_NEWS_CG_ERROR": function() { return /* binding */ STOP_NEWS_CG_ERROR; },
/* harmony export */   "LogoutEditorState": function() { return /* binding */ LogoutEditorState; },
/* harmony export */   "GetNewsCgNews": function() { return /* binding */ GetNewsCgNews; },
/* harmony export */   "GetNewsCgNewsSuccess": function() { return /* binding */ GetNewsCgNewsSuccess; },
/* harmony export */   "GetNewsCgNewsError": function() { return /* binding */ GetNewsCgNewsError; },
/* harmony export */   "GetCgSettings": function() { return /* binding */ GetCgSettings; },
/* harmony export */   "GetCgSettingsSuccess": function() { return /* binding */ GetCgSettingsSuccess; },
/* harmony export */   "GetCgSettingsError": function() { return /* binding */ GetCgSettingsError; },
/* harmony export */   "UpdateNewsCgNews": function() { return /* binding */ UpdateNewsCgNews; },
/* harmony export */   "UpdateNewsCgNewsSuccess": function() { return /* binding */ UpdateNewsCgNewsSuccess; },
/* harmony export */   "UpdateNewsCgNewsError": function() { return /* binding */ UpdateNewsCgNewsError; },
/* harmony export */   "StopNewsCg": function() { return /* binding */ StopNewsCg; },
/* harmony export */   "StopNewsCgSuccess": function() { return /* binding */ StopNewsCgSuccess; },
/* harmony export */   "StopNewsCgError": function() { return /* binding */ StopNewsCgError; }
/* harmony export */ });
const LOGOUT_CONTROL = '[Control] LOGOUT_CONTROL';
const GET_NEWS_CG_NEWS = '[Control] GET_NEWS_CG_NEWS';
const GET_NEWS_CG_NEWS_SUCCESS = '[Control] GET_NEWS_CG_NEWS_SUCCESS';
const GET_NEWS_CG_NEWS_ERROR = '[Control] GET_NEWS_CG_NEWS_ERROR';
const UPDATE_NEWS_CG_NEWS = '[Control] UPDATE_NEWS_CG_NEWS';
const UPDATE_NEWS_CG_NEWS_SUCCESS = '[Control] UPDATE_NEWS_CG_NEWS_SUCCESS';
const UPDATE_NEWS_CG_NEWS_ERROR = '[Control] UPDATE_NEWS_CG_NEWS_ERROR';
const GET_CG_SETTINGS = '[Control] GET_CG_SETTINGS';
const GET_CG_SETTINGS_SUCCESS = '[Control] GET_CG_SETTINGS_SUCCESS';
const GET_CG_SETTINGS_ERROR = '[Control] GET_CG_SETTINGS_ERROR';
const STOP_NEWS_CG = '[Control] STOP_NEWS_CG';
const STOP_NEWS_CG_SUCCESS = '[Control] STOP_NEWS_CG_SUCCESS';
const STOP_NEWS_CG_ERROR = '[Control] STOP_NEWS_CG_ERROR';
class LogoutEditorState {
    constructor() {
        this.type = LOGOUT_CONTROL;
    }
}
/**
 * --------------------------------------------------> Get cg news
 */
class GetNewsCgNews {
    constructor() {
        this.type = GET_NEWS_CG_NEWS;
    }
}
class GetNewsCgNewsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_NEWS_CG_NEWS_SUCCESS;
    }
}
class GetNewsCgNewsError {
    constructor() {
        this.type = GET_NEWS_CG_NEWS_ERROR;
    }
}
/**
 * --------------------------------------------------> Get cg Settings
 */
class GetCgSettings {
    constructor() {
        this.type = GET_CG_SETTINGS;
    }
}
class GetCgSettingsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_CG_SETTINGS_SUCCESS;
    }
}
class GetCgSettingsError {
    constructor() {
        this.type = GET_CG_SETTINGS_ERROR;
    }
}
/**
 * --------------------------------------------------> Update cg news
 */
class UpdateNewsCgNews {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_NEWS_CG_NEWS;
    }
}
class UpdateNewsCgNewsSuccess {
    constructor() {
        this.type = UPDATE_NEWS_CG_NEWS_SUCCESS;
    }
}
class UpdateNewsCgNewsError {
    constructor() {
        this.type = UPDATE_NEWS_CG_NEWS_ERROR;
    }
}
/**
 * --------------------------------------------------> stop cg
 */
class StopNewsCg {
    constructor() {
        this.type = STOP_NEWS_CG;
        //constructor(public payload: { news_bar_id: number }) {}
    }
}
class StopNewsCgSuccess {
    constructor() {
        this.type = STOP_NEWS_CG_SUCCESS;
    }
}
class StopNewsCgError {
    constructor() {
        this.type = STOP_NEWS_CG_ERROR;
    }
}


/***/ }),

/***/ 11173:
/*!**************************************************!*\
  !*** ./src/app/control/store/control.effects.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlEffects": function() { return /* binding */ ControlEffects; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 53863);
/* harmony import */ var _control_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control.actions */ 74560);
/* harmony import */ var _services_control_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/control.service */ 47997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 74788);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








class ControlEffects {
    constructor(actions$, controlService) {
        this.actions$ = actions$;
        this.controlService = controlService;
        this.GetNewsCgNews$ = this.actions$.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_control_actions__WEBPACK_IMPORTED_MODULE_0__.GET_NEWS_CG_NEWS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.controlService.getNewsCgNews().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            console.log(data);
            return new _control_actions__WEBPACK_IMPORTED_MODULE_0__.GetNewsCgNewsSuccess(data);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _control_actions__WEBPACK_IMPORTED_MODULE_0__.GetNewsCgNewsError())))));
        /*GetCgSettings$: Observable<Action> = this.actions$.
          ofType<ControlActions.GetNewsCgNews>(ControlActions.GET_NEWS_CG_NEWS)
          .mergeMap(action =>
            this.controlService.getNewsCgSettings()
            .map((data) => {
              console.log(data);
              return new ControlActions.GetCgSettingsSuccess(data);
            })
            .catch(() => of(new ControlActions.GetCgSettingsError()))
          );*/
        this.UpdateNewsCgNews$ = this.actions$.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_control_actions__WEBPACK_IMPORTED_MODULE_0__.UPDATE_NEWS_CG_NEWS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.controlService.updateNewsCgText(action.payload.news_bar_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            console.log(data);
            return new _control_actions__WEBPACK_IMPORTED_MODULE_0__.UpdateNewsCgNewsSuccess();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _control_actions__WEBPACK_IMPORTED_MODULE_0__.UpdateNewsCgNewsError())))));
        this.StopNewsCg$ = this.actions$.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_control_actions__WEBPACK_IMPORTED_MODULE_0__.STOP_NEWS_CG), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.controlService.stopNewsCg().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            console.log(data);
            return new _control_actions__WEBPACK_IMPORTED_MODULE_0__.StopNewsCgSuccess();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _control_actions__WEBPACK_IMPORTED_MODULE_0__.StopNewsCgError())))));
    }
}
ControlEffects.ɵfac = function ControlEffects_Factory(t) { return new (t || ControlEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_control_service__WEBPACK_IMPORTED_MODULE_1__.ControlService)); };
ControlEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: ControlEffects, factory: ControlEffects.ɵfac });
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable)
], ControlEffects.prototype, "GetNewsCgNews$", void 0);
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable)
], ControlEffects.prototype, "UpdateNewsCgNews$", void 0);
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable)
], ControlEffects.prototype, "StopNewsCg$", void 0);


/***/ }),

/***/ 54962:
/*!**************************************************!*\
  !*** ./src/app/control/store/control.reducer.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "reducer": function() { return /* binding */ reducer; },
/* harmony export */   "getReviewNewsState": function() { return /* binding */ getReviewNewsState; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 62800);
/* harmony import */ var _control_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control.actions */ 74560);


const initialState = {
    // news: [],
    // isLoaded: false,
    // // pageState: {currentPage: null, perPage: null, lastPages: null, totalResults: null},
    // lists: [],
    isLoaded: true,
    cgSettings: null,
    newsCgState: null
};
function reducer(state = initialState, action) {
    console.log(state, action);
    switch (action.type) {
        case _control_actions__WEBPACK_IMPORTED_MODULE_0__.GET_NEWS_CG_NEWS: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _control_actions__WEBPACK_IMPORTED_MODULE_0__.GET_NEWS_CG_NEWS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { isLoaded: true, newsCgState: action.payload });
        }
        case _control_actions__WEBPACK_IMPORTED_MODULE_0__.GET_CG_SETTINGS: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _control_actions__WEBPACK_IMPORTED_MODULE_0__.GET_CG_SETTINGS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { isLoaded: true, cgSettings: action.payload });
        }
        case _control_actions__WEBPACK_IMPORTED_MODULE_0__.LOGOUT_CONTROL: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
const getReviewNewsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)('ControlState');


/***/ }),

/***/ 81813:
/*!****************************************************!*\
  !*** ./src/app/control/ticker/ticker.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TickerComponent": function() { return /* binding */ TickerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 74788);

class TickerComponent {
    constructor() { }
    ngOnInit() {
    }
}
TickerComponent.ɵfac = function TickerComponent_Factory(t) { return new (t || TickerComponent)(); };
TickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TickerComponent, selectors: [["app-ticker"]], decls: 2, vars: 0, template: function TickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ticker works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aWNrZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_control_control_module_ts-es2015.js.map