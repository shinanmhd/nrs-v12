(self["webpackChunkmaterialpro"] = self["webpackChunkmaterialpro"] || []).push([["src_app_editor_editor_module_ts"],{

/***/ 46511:
/*!***************************************************************************!*\
  !*** ./src/app/editor/add-to-list-dialog/add-to-list-dialog.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToListDialogComponent": function() { return /* binding */ AddToListDialogComponent; },
/* harmony export */   "NewsListDataSource": function() { return /* binding */ NewsListDataSource; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _services_editor_news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/editor-news.service */ 79032);
/* harmony import */ var _news_models_news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../news/models/news */ 26318);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/table */ 38345);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/news-editor.actions */ 23239);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ 58341);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 76627);






/*import 'rxjs/add/observable/of';*/

















function AddToListDialogComponent_mat_header_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " News Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r104.news_name), " ");
} }
function AddToListDialogComponent_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Heading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r105 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("dhv_nosize", news_r105.language.language_code == "Dhv");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", news_r105.heading, " ");
} }
function AddToListDialogComponent_mat_header_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_22_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r106.created_at));
} }
function AddToListDialogComponent_mat_cell_22_mat_chip_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r106.created_at));
} }
function AddToListDialogComponent_mat_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, AddToListDialogComponent_mat_cell_22_span_4_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](8, AddToListDialogComponent_mat_cell_22_mat_chip_8_Template, 3, 3, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r106 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](1, 4, news_r106.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("className", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 7, news_r106.created_at) != _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](3, 9, news_r106.updated_at) ? "nottodays" : "todays");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](5, 11, news_r106.created_at) === _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](6, 13, news_r106.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](9, 15, news_r106.created_at) != _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](10, 17, news_r106.updated_at));
} }
function AddToListDialogComponent_mat_header_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_25_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_25_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_25_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "In-Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_25_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddToListDialogComponent_mat_cell_25_mat_chip_2_Template, 2, 0, "mat-chip", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, AddToListDialogComponent_mat_cell_25_mat_chip_3_Template, 2, 0, "mat-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, AddToListDialogComponent_mat_cell_25_mat_chip_4_Template, 2, 0, "mat-chip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](5, AddToListDialogComponent_mat_cell_25_mat_chip_5_Template, 2, 0, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r111 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r111.newsstatus.status == "draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r111.newsstatus.status == "published");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r111.newsstatus.status == "ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r111.newsstatus.status == "reject");
} }
function AddToListDialogComponent_mat_header_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_29_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AddToListDialogComponent_mat_cell_29_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r118); const news_r116 = restoredCtx.$implicit; const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r117.addToList(news_r116.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_header_row_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-header-row");
} }
function AddToListDialogComponent_mat_row_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-row");
} }
function AddToListDialogComponent_mat_header_cell_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " News Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r121 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r121.news_name), " ");
} }
function AddToListDialogComponent_mat_header_cell_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Heading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r122 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("dhv_nosize", news_r122.language.language_code == "Dhv");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", news_r122.heading, " ");
} }
function AddToListDialogComponent_mat_header_cell_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_45_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r123.created_at));
} }
function AddToListDialogComponent_mat_cell_45_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r123.created_at));
} }
function AddToListDialogComponent_mat_cell_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddToListDialogComponent_mat_cell_45_span_2_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, AddToListDialogComponent_mat_cell_45_mat_chip_6_Template, 3, 3, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r123 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](1, 3, news_r123.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](3, 6, news_r123.created_at) === _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](4, 8, news_r123.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](7, 10, news_r123.created_at) != _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](8, 12, news_r123.updated_at));
} }
function AddToListDialogComponent_mat_header_cell_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_48_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_48_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_48_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "In-Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_48_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddToListDialogComponent_mat_cell_48_mat_chip_2_Template, 2, 0, "mat-chip", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, AddToListDialogComponent_mat_cell_48_mat_chip_3_Template, 2, 0, "mat-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, AddToListDialogComponent_mat_cell_48_mat_chip_4_Template, 2, 0, "mat-chip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](5, AddToListDialogComponent_mat_cell_48_mat_chip_5_Template, 2, 0, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r128 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r128.newsstatus.status == "draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r128.newsstatus.status == "published");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r128.newsstatus.status == "ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r128.newsstatus.status == "reject");
} }
function AddToListDialogComponent_mat_header_cell_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_52_Template(rf, ctx) { if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AddToListDialogComponent_mat_cell_52_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r135); const news_r133 = restoredCtx.$implicit; const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r134.addToList(news_r133.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_header_row_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-header-row");
} }
function AddToListDialogComponent_mat_row_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-row");
} }
function AddToListDialogComponent_mat_header_cell_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " News Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r138 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r138.news_name), " ");
} }
function AddToListDialogComponent_mat_header_cell_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Heading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("dhv_nosize", news_r139.language.language_code == "Dhv");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", news_r139.heading, " ");
} }
function AddToListDialogComponent_mat_header_cell_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_68_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r140.created_at));
} }
function AddToListDialogComponent_mat_cell_68_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r140.created_at));
} }
function AddToListDialogComponent_mat_cell_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddToListDialogComponent_mat_cell_68_span_2_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, AddToListDialogComponent_mat_cell_68_mat_chip_6_Template, 3, 3, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r140 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](1, 3, news_r140.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](3, 6, news_r140.created_at) === _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](4, 8, news_r140.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](7, 10, news_r140.created_at) != _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](8, 12, news_r140.updated_at));
} }
function AddToListDialogComponent_mat_header_cell_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_71_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_71_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_71_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "In-Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_71_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddToListDialogComponent_mat_cell_71_mat_chip_2_Template, 2, 0, "mat-chip", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, AddToListDialogComponent_mat_cell_71_mat_chip_3_Template, 2, 0, "mat-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, AddToListDialogComponent_mat_cell_71_mat_chip_4_Template, 2, 0, "mat-chip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](5, AddToListDialogComponent_mat_cell_71_mat_chip_5_Template, 2, 0, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r145 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r145.newsstatus.status == "draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r145.newsstatus.status == "published");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r145.newsstatus.status == "ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r145.newsstatus.status == "reject");
} }
function AddToListDialogComponent_mat_header_cell_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_75_Template(rf, ctx) { if (rf & 1) {
    const _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AddToListDialogComponent_mat_cell_75_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r152); const news_r150 = restoredCtx.$implicit; const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r151.addToList(news_r150.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_header_row_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-header-row");
} }
function AddToListDialogComponent_mat_row_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-row");
} }
function AddToListDialogComponent_mat_header_cell_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " News Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r155 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r155.news_name), " ");
} }
function AddToListDialogComponent_mat_header_cell_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Heading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r156 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("dhv_nosize", news_r156.language.language_code == "Dhv");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", news_r156.heading, " ");
} }
function AddToListDialogComponent_mat_header_cell_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_91_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r157.created_at));
} }
function AddToListDialogComponent_mat_cell_91_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r157.created_at));
} }
function AddToListDialogComponent_mat_cell_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddToListDialogComponent_mat_cell_91_span_2_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, AddToListDialogComponent_mat_cell_91_mat_chip_6_Template, 3, 3, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r157 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](1, 3, news_r157.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](3, 6, news_r157.created_at) === _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](4, 8, news_r157.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](7, 10, news_r157.created_at) != _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](8, 12, news_r157.updated_at));
} }
function AddToListDialogComponent_mat_header_cell_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_94_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_94_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_94_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "In-Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_94_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddToListDialogComponent_mat_cell_94_mat_chip_2_Template, 2, 0, "mat-chip", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, AddToListDialogComponent_mat_cell_94_mat_chip_3_Template, 2, 0, "mat-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, AddToListDialogComponent_mat_cell_94_mat_chip_4_Template, 2, 0, "mat-chip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](5, AddToListDialogComponent_mat_cell_94_mat_chip_5_Template, 2, 0, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r162 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r162.newsstatus.status == "draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r162.newsstatus.status == "published");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r162.newsstatus.status == "ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r162.newsstatus.status == "reject");
} }
function AddToListDialogComponent_mat_header_cell_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_98_Template(rf, ctx) { if (rf & 1) {
    const _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AddToListDialogComponent_mat_cell_98_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r169); const news_r167 = restoredCtx.$implicit; const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r168.addToList(news_r167.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_header_row_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-header-row");
} }
function AddToListDialogComponent_mat_row_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-row");
} }
function AddToListDialogComponent_mat_header_cell_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " News Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r172 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r172.news_name), " ");
} }
function AddToListDialogComponent_mat_header_cell_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Heading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r173 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("dhv_nosize", news_r173.language.language_code == "Dhv");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", news_r173.heading, " ");
} }
function AddToListDialogComponent_mat_header_cell_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_114_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r174.created_at));
} }
function AddToListDialogComponent_mat_cell_114_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r174.created_at));
} }
function AddToListDialogComponent_mat_cell_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddToListDialogComponent_mat_cell_114_span_2_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, AddToListDialogComponent_mat_cell_114_mat_chip_6_Template, 3, 3, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r174 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](1, 3, news_r174.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](3, 6, news_r174.created_at) === _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](4, 8, news_r174.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](7, 10, news_r174.created_at) != _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](8, 12, news_r174.updated_at));
} }
function AddToListDialogComponent_mat_header_cell_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_117_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_117_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_117_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "In-Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_117_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddToListDialogComponent_mat_cell_117_mat_chip_2_Template, 2, 0, "mat-chip", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, AddToListDialogComponent_mat_cell_117_mat_chip_3_Template, 2, 0, "mat-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, AddToListDialogComponent_mat_cell_117_mat_chip_4_Template, 2, 0, "mat-chip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](5, AddToListDialogComponent_mat_cell_117_mat_chip_5_Template, 2, 0, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r179 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r179.newsstatus.status == "draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r179.newsstatus.status == "published");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r179.newsstatus.status == "ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r179.newsstatus.status == "reject");
} }
function AddToListDialogComponent_mat_header_cell_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_121_Template(rf, ctx) { if (rf & 1) {
    const _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AddToListDialogComponent_mat_cell_121_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r186); const news_r184 = restoredCtx.$implicit; const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r185.addToList(news_r184.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_header_row_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-header-row");
} }
function AddToListDialogComponent_mat_row_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-row");
} }
function AddToListDialogComponent_mat_header_cell_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " News Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r189 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r189.news_name), " ");
} }
function AddToListDialogComponent_mat_header_cell_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Heading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r190 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("dhv_nosize", news_r190.language.language_code == "Dhv");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", news_r190.heading, " ");
} }
function AddToListDialogComponent_mat_header_cell_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_137_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r191.created_at));
} }
function AddToListDialogComponent_mat_cell_137_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r191.created_at));
} }
function AddToListDialogComponent_mat_cell_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddToListDialogComponent_mat_cell_137_span_2_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, AddToListDialogComponent_mat_cell_137_mat_chip_6_Template, 3, 3, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r191 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](1, 3, news_r191.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](3, 6, news_r191.created_at) === _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](4, 8, news_r191.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](7, 10, news_r191.created_at) != _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](8, 12, news_r191.updated_at));
} }
function AddToListDialogComponent_mat_header_cell_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_140_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_140_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_140_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "In-Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_140_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddToListDialogComponent_mat_cell_140_mat_chip_2_Template, 2, 0, "mat-chip", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, AddToListDialogComponent_mat_cell_140_mat_chip_3_Template, 2, 0, "mat-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, AddToListDialogComponent_mat_cell_140_mat_chip_4_Template, 2, 0, "mat-chip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](5, AddToListDialogComponent_mat_cell_140_mat_chip_5_Template, 2, 0, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r196 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r196.newsstatus.status == "draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r196.newsstatus.status == "published");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r196.newsstatus.status == "ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r196.newsstatus.status == "reject");
} }
function AddToListDialogComponent_mat_header_cell_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_144_Template(rf, ctx) { if (rf & 1) {
    const _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AddToListDialogComponent_mat_cell_144_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r203); const news_r201 = restoredCtx.$implicit; const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r202.addToList(news_r201.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_header_row_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-header-row");
} }
function AddToListDialogComponent_mat_row_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-row");
} }
function AddToListDialogComponent_mat_header_cell_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " News Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r206 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r206.news_name), " ");
} }
function AddToListDialogComponent_mat_header_cell_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Heading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r207 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("dhv_nosize", news_r207.language.language_code == "Dhv");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", news_r207.heading, " ");
} }
function AddToListDialogComponent_mat_header_cell_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_160_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r208.created_at));
} }
function AddToListDialogComponent_mat_cell_160_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r208.created_at));
} }
function AddToListDialogComponent_mat_cell_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddToListDialogComponent_mat_cell_160_span_2_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, AddToListDialogComponent_mat_cell_160_mat_chip_6_Template, 3, 3, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r208 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](1, 3, news_r208.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](3, 6, news_r208.created_at) === _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](4, 8, news_r208.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](7, 10, news_r208.created_at) != _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](8, 12, news_r208.updated_at));
} }
function AddToListDialogComponent_mat_header_cell_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_163_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_163_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_163_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "In-Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_163_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddToListDialogComponent_mat_cell_163_mat_chip_2_Template, 2, 0, "mat-chip", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, AddToListDialogComponent_mat_cell_163_mat_chip_3_Template, 2, 0, "mat-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, AddToListDialogComponent_mat_cell_163_mat_chip_4_Template, 2, 0, "mat-chip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](5, AddToListDialogComponent_mat_cell_163_mat_chip_5_Template, 2, 0, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r213 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r213.newsstatus.status == "draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r213.newsstatus.status == "published");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r213.newsstatus.status == "ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r213.newsstatus.status == "reject");
} }
function AddToListDialogComponent_mat_header_cell_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_167_Template(rf, ctx) { if (rf & 1) {
    const _r220 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AddToListDialogComponent_mat_cell_167_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r220); const news_r218 = restoredCtx.$implicit; const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r219.addToList(news_r218.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_header_row_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-header-row");
} }
function AddToListDialogComponent_mat_row_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-row");
} }
function AddToListDialogComponent_mat_header_cell_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " News Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r223 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r223.news_name), " ");
} }
function AddToListDialogComponent_mat_header_cell_179_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Heading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r224 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("dhv_nosize", news_r224.language.language_code == "Dhv");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", news_r224.heading, " ");
} }
function AddToListDialogComponent_mat_header_cell_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_183_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r225.created_at));
} }
function AddToListDialogComponent_mat_cell_183_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, news_r225.created_at));
} }
function AddToListDialogComponent_mat_cell_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddToListDialogComponent_mat_cell_183_span_2_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, AddToListDialogComponent_mat_cell_183_mat_chip_6_Template, 3, 3, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r225 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](1, 3, news_r225.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](3, 6, news_r225.created_at) === _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](4, 8, news_r225.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](7, 10, news_r225.created_at) != _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](8, 12, news_r225.updated_at));
} }
function AddToListDialogComponent_mat_header_cell_185_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_186_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_186_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_186_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "In-Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_186_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AddToListDialogComponent_mat_cell_186_mat_chip_2_Template, 2, 0, "mat-chip", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, AddToListDialogComponent_mat_cell_186_mat_chip_3_Template, 2, 0, "mat-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, AddToListDialogComponent_mat_cell_186_mat_chip_4_Template, 2, 0, "mat-chip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](5, AddToListDialogComponent_mat_cell_186_mat_chip_5_Template, 2, 0, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const news_r230 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r230.newsstatus.status == "draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r230.newsstatus.status == "published");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r230.newsstatus.status == "ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", news_r230.newsstatus.status == "reject");
} }
function AddToListDialogComponent_mat_header_cell_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_cell_190_Template(rf, ctx) { if (rf & 1) {
    const _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AddToListDialogComponent_mat_cell_190_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r237); const news_r235 = restoredCtx.$implicit; const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r236.addToList(news_r235.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AddToListDialogComponent_mat_header_row_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-header-row");
} }
function AddToListDialogComponent_mat_row_192_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-row");
} }
class AddToListDialogComponent {
    constructor(dialogRef, apiService, store, updates$, data) {
        this.dialogRef = dialogRef;
        this.apiService = apiService;
        this.store = store;
        this.updates$ = updates$;
        this.data = data;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.onUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        // mat table
        this.displayedColumns = ['news_name', 'heading', 'date', 'actions'];
        this.displayedColumnsBreaker = ['heading_br', 'actions_br'];
    }
    ngOnInit() {
        // console.log(this.data)
        this.apiService.getTodaysNews().subscribe((news) => {
            this.newsData = news;
            this.loadDataSource(this.newsData);
        });
    }
    loadDataSource(news_data) {
        this.dataSource = new NewsListDataSource(this.checkIfInList(news_data["1"]["data"]));
        this.dataSource1 = new NewsListDataSource(this.checkIfInList(news_data["2"]["data"]));
        this.dataSource2 = new NewsListDataSource(this.checkIfInList(news_data["3"]["data"]));
        this.dataSource3 = new NewsListDataSource(this.checkIfInList(news_data["4"]["data"]));
        this.dataSource4 = new NewsListDataSource(this.checkIfInList(news_data["5"]["data"]));
        this.dataSource5 = new NewsListDataSource(this.checkIfInList(news_data["6"]["data"]));
        this.dataSource6 = new NewsListDataSource(this.checkIfInList(news_data["7"]["data"]));
        this.dataSourceBreakers = new NewsListDataSource(this.checkIfInList(news_data["breakers"]));
    }
    addToList(id) {
        console.log(id);
        // this.store.dispatch(new newsActions.UpdateMyNewsLoaded({ isMyNewsLoaded: false }));
        this.store.dispatch(new _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_2__.AddToList({ list_id: this.data.list.id, news_id: id }));
        this.onAdd.emit({ list_id: this.data.list.id, news_id: id });
        this.updates$
            .pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_store_news_editor_actions__WEBPACK_IMPORTED_MODULE_2__.ADD_TO_LIST_SUCCESS))
            .subscribe(() => {
            this.store.select(news_store => news_store.ReviewNews.lists)
                .subscribe(list => {
                list.forEach((element) => {
                    if (element.id === this.data.list.id) {
                        // console.log(element)
                        this.data = { list: element };
                        this.loadDataSource(this.newsData);
                    }
                });
            });
        });
    }
    checkIfInList(news_data) {
        let news_re = [];
        let i_index = 0;
        news_data.forEach((news, index) => {
            let found = false;
            this.data.list.list_news.forEach((list_news, list_index) => {
                if (news.id === list_news.news.id) {
                    found = true;
                }
            });
            if (!found) {
                news_re[i_index] = news;
                i_index = i_index + 1;
            }
        });
        return news_re;
    }
    closeDialog(confirmation) {
        this.dialogRef.close(confirmation);
    }
    doDelete(id) {
        this.closeDialog(false);
        this.onDelete.emit(id);
    }
    doAdd(id) {
        this.closeDialog(false);
        this.onAdd.emit(id);
    }
    doUndo(id) {
        this.closeDialog(false);
        this.onUndo.emit(id);
    }
}
AddToListDialogComponent.??fac = function AddToListDialogComponent_Factory(t) { return new (t || AddToListDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_services_editor_news_service__WEBPACK_IMPORTED_MODULE_0__.EditorNewsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
AddToListDialogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: AddToListDialogComponent, selectors: [["app-add-to-list-dialog"]], decls: 193, vars: 31, consts: [["mat-dialog-title", ""], ["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["label", "Todays News"], [1, "table-rasponsive"], [3, "dataSource"], ["table", ""], ["matColumnDef", "news_name"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "heading"], [3, "dhv_nosize", 4, "matCellDef"], ["matColumnDef", "date"], ["matTooltipPosition", "below", 3, "matTooltip", "className", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["style", "display: flex; justify-content: flex-end;", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "label"], ["matTooltipPosition", "below", 3, "matTooltip", 4, "matCellDef"], ["label", "Breakers"], ["matColumnDef", "heading_br"], ["matColumnDef", "actions_br"], ["matTooltipPosition", "below", 3, "matTooltip", "className"], [4, "ngIf"], ["selected", "true", "class", "bg-warning", 4, "ngIf"], ["selected", "true", 1, "bg-warning"], ["selected", "false", 4, "ngIf"], ["class", "bg-success", "selected", "true", 4, "ngIf"], ["color", "primary", "selected", "true", 4, "ngIf"], ["selected", "false"], ["selected", "true", 1, "bg-success"], ["color", "primary", "selected", "true"], [2, "display", "flex", "justify-content", "flex-end"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Add to List", "matTooltipPosition", "below", 3, "click"], ["aria-label", "Edit"], ["matTooltipPosition", "below", 3, "matTooltip"]], template: function AddToListDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Add News To: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "mat-table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](14, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](15, AddToListDialogComponent_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](16, AddToListDialogComponent_mat_cell_16_Template, 3, 3, "mat-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](17, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](18, AddToListDialogComponent_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](19, AddToListDialogComponent_mat_cell_19_Template, 2, 3, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](20, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](21, AddToListDialogComponent_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](22, AddToListDialogComponent_mat_cell_22_Template, 11, 19, "mat-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](23, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](24, AddToListDialogComponent_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](25, AddToListDialogComponent_mat_cell_25_Template, 6, 4, "mat-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](27, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](28, AddToListDialogComponent_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](29, AddToListDialogComponent_mat_cell_29_Template, 4, 0, "mat-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](30, AddToListDialogComponent_mat_header_row_30_Template, 1, 0, "mat-header-row", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](31, AddToListDialogComponent_mat_row_31_Template, 1, 0, "mat-row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "mat-tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "mat-table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](37, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](38, AddToListDialogComponent_mat_header_cell_38_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](39, AddToListDialogComponent_mat_cell_39_Template, 3, 3, "mat-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](40, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](41, AddToListDialogComponent_mat_header_cell_41_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](42, AddToListDialogComponent_mat_cell_42_Template, 2, 3, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](43, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](44, AddToListDialogComponent_mat_header_cell_44_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](45, AddToListDialogComponent_mat_cell_45_Template, 9, 14, "mat-cell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](46, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](47, AddToListDialogComponent_mat_header_cell_47_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](48, AddToListDialogComponent_mat_cell_48_Template, 6, 4, "mat-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](50, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](51, AddToListDialogComponent_mat_header_cell_51_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](52, AddToListDialogComponent_mat_cell_52_Template, 4, 0, "mat-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](53, AddToListDialogComponent_mat_header_row_53_Template, 1, 0, "mat-header-row", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](54, AddToListDialogComponent_mat_row_54_Template, 1, 0, "mat-row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "mat-tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](56, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](58, "mat-table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](60, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](61, AddToListDialogComponent_mat_header_cell_61_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](62, AddToListDialogComponent_mat_cell_62_Template, 3, 3, "mat-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](63, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](64, AddToListDialogComponent_mat_header_cell_64_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](65, AddToListDialogComponent_mat_cell_65_Template, 2, 3, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](66, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](67, AddToListDialogComponent_mat_header_cell_67_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](68, AddToListDialogComponent_mat_cell_68_Template, 9, 14, "mat-cell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](69, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](70, AddToListDialogComponent_mat_header_cell_70_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](71, AddToListDialogComponent_mat_cell_71_Template, 6, 4, "mat-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](73, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](74, AddToListDialogComponent_mat_header_cell_74_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](75, AddToListDialogComponent_mat_cell_75_Template, 4, 0, "mat-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](76, AddToListDialogComponent_mat_header_row_76_Template, 1, 0, "mat-header-row", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](77, AddToListDialogComponent_mat_row_77_Template, 1, 0, "mat-row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](78, "mat-tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](79, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](80, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](81, "mat-table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](83, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](84, AddToListDialogComponent_mat_header_cell_84_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](85, AddToListDialogComponent_mat_cell_85_Template, 3, 3, "mat-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](86, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](87, AddToListDialogComponent_mat_header_cell_87_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](88, AddToListDialogComponent_mat_cell_88_Template, 2, 3, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](89, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](90, AddToListDialogComponent_mat_header_cell_90_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](91, AddToListDialogComponent_mat_cell_91_Template, 9, 14, "mat-cell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](92, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](93, AddToListDialogComponent_mat_header_cell_93_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](94, AddToListDialogComponent_mat_cell_94_Template, 6, 4, "mat-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](95, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](96, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](97, AddToListDialogComponent_mat_header_cell_97_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](98, AddToListDialogComponent_mat_cell_98_Template, 4, 0, "mat-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](99, AddToListDialogComponent_mat_header_row_99_Template, 1, 0, "mat-header-row", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](100, AddToListDialogComponent_mat_row_100_Template, 1, 0, "mat-row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](101, "mat-tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](102, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](103, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](104, "mat-table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](106, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](107, AddToListDialogComponent_mat_header_cell_107_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](108, AddToListDialogComponent_mat_cell_108_Template, 3, 3, "mat-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](109, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](110, AddToListDialogComponent_mat_header_cell_110_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](111, AddToListDialogComponent_mat_cell_111_Template, 2, 3, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](112, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](113, AddToListDialogComponent_mat_header_cell_113_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](114, AddToListDialogComponent_mat_cell_114_Template, 9, 14, "mat-cell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](115, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](116, AddToListDialogComponent_mat_header_cell_116_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](117, AddToListDialogComponent_mat_cell_117_Template, 6, 4, "mat-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](118, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](119, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](120, AddToListDialogComponent_mat_header_cell_120_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](121, AddToListDialogComponent_mat_cell_121_Template, 4, 0, "mat-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](122, AddToListDialogComponent_mat_header_row_122_Template, 1, 0, "mat-header-row", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](123, AddToListDialogComponent_mat_row_123_Template, 1, 0, "mat-row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](124, "mat-tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](125, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](126, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](127, "mat-table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](129, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](130, AddToListDialogComponent_mat_header_cell_130_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](131, AddToListDialogComponent_mat_cell_131_Template, 3, 3, "mat-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](132, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](133, AddToListDialogComponent_mat_header_cell_133_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](134, AddToListDialogComponent_mat_cell_134_Template, 2, 3, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](135, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](136, AddToListDialogComponent_mat_header_cell_136_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](137, AddToListDialogComponent_mat_cell_137_Template, 9, 14, "mat-cell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](138, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](139, AddToListDialogComponent_mat_header_cell_139_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](140, AddToListDialogComponent_mat_cell_140_Template, 6, 4, "mat-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](141, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](142, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](143, AddToListDialogComponent_mat_header_cell_143_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](144, AddToListDialogComponent_mat_cell_144_Template, 4, 0, "mat-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](145, AddToListDialogComponent_mat_header_row_145_Template, 1, 0, "mat-header-row", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](146, AddToListDialogComponent_mat_row_146_Template, 1, 0, "mat-row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](147, "mat-tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](148, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](149, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](150, "mat-table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](152, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](153, AddToListDialogComponent_mat_header_cell_153_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](154, AddToListDialogComponent_mat_cell_154_Template, 3, 3, "mat-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](155, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](156, AddToListDialogComponent_mat_header_cell_156_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](157, AddToListDialogComponent_mat_cell_157_Template, 2, 3, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](158, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](159, AddToListDialogComponent_mat_header_cell_159_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](160, AddToListDialogComponent_mat_cell_160_Template, 9, 14, "mat-cell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](161, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](162, AddToListDialogComponent_mat_header_cell_162_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](163, AddToListDialogComponent_mat_cell_163_Template, 6, 4, "mat-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](164, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](165, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](166, AddToListDialogComponent_mat_header_cell_166_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](167, AddToListDialogComponent_mat_cell_167_Template, 4, 0, "mat-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](168, AddToListDialogComponent_mat_header_row_168_Template, 1, 0, "mat-header-row", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](169, AddToListDialogComponent_mat_row_169_Template, 1, 0, "mat-row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](170, "mat-tab", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](171, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](172, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](173, "mat-table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](175, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](176, AddToListDialogComponent_mat_header_cell_176_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](177, AddToListDialogComponent_mat_cell_177_Template, 3, 3, "mat-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](178, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](179, AddToListDialogComponent_mat_header_cell_179_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](180, AddToListDialogComponent_mat_cell_180_Template, 2, 3, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](181, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](182, AddToListDialogComponent_mat_header_cell_182_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](183, AddToListDialogComponent_mat_cell_183_Template, 9, 14, "mat-cell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](184, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](185, AddToListDialogComponent_mat_header_cell_185_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](186, AddToListDialogComponent_mat_cell_186_Template, 6, 4, "mat-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](187, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](188, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](189, AddToListDialogComponent_mat_header_cell_189_Template, 2, 0, "mat-header-cell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](190, AddToListDialogComponent_mat_cell_190_Template, 4, 0, "mat-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](191, AddToListDialogComponent_mat_header_row_191_Template, 1, 0, "mat-header-row", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](192, AddToListDialogComponent_mat_row_192_Template, 1, 0, "mat-row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.data.list.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("label", ctx.newsData["2"]["date"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("dataSource", ctx.dataSource1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("label", ctx.newsData["3"]["date"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("dataSource", ctx.dataSource2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("label", ctx.newsData["4"]["date"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("dataSource", ctx.dataSource3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("label", ctx.newsData["5"]["date"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("dataSource", ctx.dataSource4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("label", ctx.newsData["6"]["date"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("dataSource", ctx.dataSource5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("label", ctx.newsData["7"]["date"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("dataSource", ctx.dataSource6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("dataSource", ctx.dataSourceBreakers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matHeaderRowDef", ctx.displayedColumnsBreaker);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matRowDefColumns", ctx.displayedColumnsBreaker);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTab, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChip, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: [".table-rasponsive[_ngcontent-%COMP%]   .mat-column-news_name[_ngcontent-%COMP%]{\n  flex: 0 0 15%;\n}\n.table-rasponsive[_ngcontent-%COMP%]   .mat-column-heading[_ngcontent-%COMP%]{\n  flex: 0 0 54%;\n  \n}\n.table-rasponsive[_ngcontent-%COMP%]   .mat-column-date[_ngcontent-%COMP%]{\n  flex: 0 0 11%;\n}\n.table-rasponsive[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{\n  flex: 0 0 8%;\n}\n.table-rasponsive[_ngcontent-%COMP%]   .mat-column-actions[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n}\n.table-rasponsive-pub[_ngcontent-%COMP%]   .mat-column-news_name[_ngcontent-%COMP%]{\n  flex: 0 0 15%;\n}\n.table-rasponsive-pub[_ngcontent-%COMP%]   .mat-column-heading[_ngcontent-%COMP%]{\n  flex: 0 0 74%;\n  \n}\n.table-rasponsive-pub[_ngcontent-%COMP%]   .mat-column-date[_ngcontent-%COMP%]{\n  flex: 0 0 11%;\n}\n.table-rasponsive-pub[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{\n  flex: 0 0 8%;\n}\n.table-rasponsive-pub[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]{\n  cursor: zoom-in;\n}\n.table-rasponsive[_ngcontent-%COMP%]   .mat-column-heading_br[_ngcontent-%COMP%]{\n  flex: 0 0 90%;\n  \n}\n.table-rasponsive[_ngcontent-%COMP%]   .mat-column-actions_br[_ngcontent-%COMP%]{\n  flex: 0 0 10%;\n}\n.table-rasponsive-pub[_ngcontent-%COMP%]   .mat-column-heading_br[_ngcontent-%COMP%]{\n  flex: 0 0 90%;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC10by1saXN0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBR0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBS0E7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7QUFDOUIiLCJmaWxlIjoiYWRkLXRvLWxpc3QtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtcmFzcG9uc2l2ZSAubWF0LWNvbHVtbi1uZXdzX25hbWV7XG4gIGZsZXg6IDAgMCAxNSU7XG59XG4udGFibGUtcmFzcG9uc2l2ZSAubWF0LWNvbHVtbi1oZWFkaW5ne1xuICBmbGV4OiAwIDAgNTQlO1xuICAvKmp1c3RpZnktY29udGVudDpmbGV4LWVuZDsqL1xufVxuLnRhYmxlLXJhc3BvbnNpdmUgLm1hdC1jb2x1bW4tZGF0ZXtcbiAgZmxleDogMCAwIDExJTtcbn1cbi50YWJsZS1yYXNwb25zaXZlIC5tYXQtY29sdW1uLXN0YXR1c3tcbiAgZmxleDogMCAwIDglO1xufVxuLnRhYmxlLXJhc3BvbnNpdmUgLm1hdC1jb2x1bW4tYWN0aW9uc3tcbiAgZmxleDogMCAwIDIwJTtcbn1cblxuXG4udGFibGUtcmFzcG9uc2l2ZS1wdWIgLm1hdC1jb2x1bW4tbmV3c19uYW1le1xuICBmbGV4OiAwIDAgMTUlO1xufVxuLnRhYmxlLXJhc3BvbnNpdmUtcHViIC5tYXQtY29sdW1uLWhlYWRpbmd7XG4gIGZsZXg6IDAgMCA3NCU7XG4gIC8qanVzdGlmeS1jb250ZW50OmZsZXgtZW5kOyovXG59XG4udGFibGUtcmFzcG9uc2l2ZS1wdWIgLm1hdC1jb2x1bW4tZGF0ZXtcbiAgZmxleDogMCAwIDExJTtcbn1cbi50YWJsZS1yYXNwb25zaXZlLXB1YiAubWF0LWNvbHVtbi1zdGF0dXN7XG4gIGZsZXg6IDAgMCA4JTtcbn1cbi50YWJsZS1yYXNwb25zaXZlLXB1YiAubWF0LXJvd3tcbiAgY3Vyc29yOiB6b29tLWluO1xufVxuXG5cblxuXG4udGFibGUtcmFzcG9uc2l2ZSAubWF0LWNvbHVtbi1oZWFkaW5nX2Jye1xuICBmbGV4OiAwIDAgOTAlO1xuICAvKmp1c3RpZnktY29udGVudDpmbGV4LWVuZDsqL1xufVxuLnRhYmxlLXJhc3BvbnNpdmUgLm1hdC1jb2x1bW4tYWN0aW9uc19icntcbiAgZmxleDogMCAwIDEwJTtcbn1cblxuLnRhYmxlLXJhc3BvbnNpdmUtcHViIC5tYXQtY29sdW1uLWhlYWRpbmdfYnJ7XG4gIGZsZXg6IDAgMCA5MCU7XG4gIC8qanVzdGlmeS1jb250ZW50OmZsZXgtZW5kOyovXG59XG4iXX0= */"] });
class NewsListDataSource extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_16__.DataSource {
    constructor(staticData) {
        super();
        this.staticData = staticData;
    }
    connect() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(this.staticData);
    }
    disconnect() { }
}


/***/ }),

/***/ 3200:
/*!***********************************************!*\
  !*** ./src/app/editor/edit/edit.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditComponent": function() { return /* binding */ EditComponent; }
/* harmony export */ });
/* harmony import */ var _news_models_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../news/models/news */ 26318);
/* harmony import */ var _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/news-editor.actions */ 23239);
/* harmony import */ var _services_editor_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/editor-news.service */ 79032);
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-contextmenu */ 67396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/chips */ 58341);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _shared_directives_thaana_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/directives/thaana.directive */ 76274);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 33935);
































const _c0 = ["news_body"];
function EditComponent_div_0_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EditComponent_div_0_mat_chip_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Published");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EditComponent_div_0_mat_chip_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-toolbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "mat-toolbar-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](5, "Edit News\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](6, EditComponent_div_0_mat_chip_6_Template, 2, 0, "mat-chip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](7, EditComponent_div_0_mat_chip_7_Template, 2, 0, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](8, EditComponent_div_0_mat_chip_8_Template, 2, 0, "mat-chip", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "mat-slide-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function EditComponent_div_0_Template_mat_slide_toggle_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r8.dhivehiEnabled = $event; })("ngModelChange", function EditComponent_div_0_Template_mat_slide_toggle_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r10.changeLanguage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](12, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "mat-slide-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function EditComponent_div_0_Template_mat_slide_toggle_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r11.tickerEnabled = $event; })("ngModelChange", function EditComponent_div_0_Template_mat_slide_toggle_ngModelChange_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r12.toggleTicker(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](14, "Ticker");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("hidden", ctx_r0.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r0.new_news.newsstatus.status == "draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r0.new_news.newsstatus.status == "published");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r0.new_news.newsstatus.status == "ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx_r0.dhivehiEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx_r0.new_news.language.language_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx_r0.tickerEnabled);
} }
function EditComponent_form_1_mat_card_29_mat_toolbar_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](i_r20 + 1);
} }
function EditComponent_form_1_mat_card_29_mat_toolbar_1_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditComponent_form_1_mat_card_29_mat_toolbar_1_mat_icon_8_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r30); const i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2).index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2); return ctx_r28.removeBar(i_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EditComponent_form_1_mat_card_29_mat_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-toolbar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, " News Bar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](4, EditComponent_form_1_mat_card_29_mat_toolbar_1_span_4_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](5, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditComponent_form_1_mat_card_29_mat_toolbar_1_Template_mat_icon_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](3); return ctx_r31.addBar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](7, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](8, EditComponent_form_1_mat_card_29_mat_toolbar_1_mat_icon_8_Template, 2, 0, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", i_r20 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", i_r20 !== 0);
} }
function EditComponent_form_1_mat_card_29_mat_toolbar_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](i_r20 + 1);
} }
function EditComponent_form_1_mat_card_29_mat_toolbar_2_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditComponent_form_1_mat_card_29_mat_toolbar_2_mat_icon_8_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r39); const cBar_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2).$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2); return ctx_r37.removeBar(cBar_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EditComponent_form_1_mat_card_29_mat_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-toolbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, " News Bar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](4, EditComponent_form_1_mat_card_29_mat_toolbar_2_span_4_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](5, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditComponent_form_1_mat_card_29_mat_toolbar_2_Template_mat_icon_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](3); return ctx_r40.addBar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](7, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](8, EditComponent_form_1_mat_card_29_mat_toolbar_2_mat_icon_8_Template, 2, 0, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", i_r20 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", i_r20 !== 0);
} }
function EditComponent_form_1_mat_card_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](1, EditComponent_form_1_mat_card_29_mat_toolbar_1_Template, 9, 2, "mat-toolbar", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](2, EditComponent_form_1_mat_card_29_mat_toolbar_2_Template, 9, 2, "mat-toolbar", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8, "Bar Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "textarea", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function EditComponent_form_1_mat_card_29_Template_textarea_ngModelChange_9_listener($event) { const cBar_r19 = ctx.$implicit; return cBar_r19.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](14, "Bar Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "textarea", 40, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function EditComponent_form_1_mat_card_29_Template_textarea_ngModelChange_15_listener($event) { const cBar_r19 = ctx.$implicit; return cBar_r19.detail = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const cBar_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", i_r20 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", i_r20 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate1"]("name", "BarTitledhvInput", i_r20, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("appDnrmsThaana", ctx_r17.dhivehiEnabled)("ngModel", cBar_r19.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate1"]("name", "BarDetailedhvInput", i_r20, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("appDnrmsThaana", ctx_r17.dhivehiEnabled)("ngModel", cBar_r19.detail);
} }
function EditComponent_form_1_span_30_mat_card_1_mat_toolbar_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](i_r47 + 1);
} }
function EditComponent_form_1_span_30_mat_card_1_mat_toolbar_1_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditComponent_form_1_span_30_mat_card_1_mat_toolbar_1_mat_icon_8_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r56); const i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2).index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](3); return ctx_r54.removeTicker(i_r47); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EditComponent_form_1_span_30_mat_card_1_mat_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-toolbar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, " Ticker News ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](4, EditComponent_form_1_span_30_mat_card_1_mat_toolbar_1_span_4_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](5, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditComponent_form_1_span_30_mat_card_1_mat_toolbar_1_Template_mat_icon_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](4); return ctx_r57.addTicker(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](7, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](8, EditComponent_form_1_span_30_mat_card_1_mat_toolbar_1_mat_icon_8_Template, 2, 0, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", i_r47 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", i_r47 !== 0);
} }
function EditComponent_form_1_span_30_mat_card_1_mat_toolbar_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](i_r47 + 1);
} }
function EditComponent_form_1_span_30_mat_card_1_mat_toolbar_2_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditComponent_form_1_span_30_mat_card_1_mat_toolbar_2_mat_icon_8_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r65); const i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2).index; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](3); return ctx_r63.removeTicker(i_r47); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EditComponent_form_1_span_30_mat_card_1_mat_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-toolbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, " Ticker News ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](4, EditComponent_form_1_span_30_mat_card_1_mat_toolbar_2_span_4_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](5, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditComponent_form_1_span_30_mat_card_1_mat_toolbar_2_Template_mat_icon_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](4); return ctx_r66.addTicker(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](7, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](8, EditComponent_form_1_span_30_mat_card_1_mat_toolbar_2_mat_icon_8_Template, 2, 0, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", i_r47 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", i_r47 !== 0);
} }
function EditComponent_form_1_span_30_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](1, EditComponent_form_1_span_30_mat_card_1_mat_toolbar_1_Template, 9, 2, "mat-toolbar", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](2, EditComponent_form_1_span_30_mat_card_1_mat_toolbar_2_Template, 9, 2, "mat-toolbar", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8, "Ticker Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "textarea", 40, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function EditComponent_form_1_span_30_mat_card_1_Template_textarea_ngModelChange_9_listener($event) { const cTicker_r46 = ctx.$implicit; return cTicker_r46.news = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const cTicker_r46 = ctx.$implicit;
    const i_r47 = ctx.index;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", i_r47 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", i_r47 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate1"]("name", "tickerdhvInput", i_r47, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("appDnrmsThaana", ctx_r45.dhivehiEnabled)("ngModel", cTicker_r46.news);
} }
function EditComponent_form_1_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](1, EditComponent_form_1_span_30_mat_card_1_Template, 11, 5, "mat-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx_r18.new_news.tickernews);
} }
function EditComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "form", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "mat-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "mat-toolbar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8, "Body");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](14, "News Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function EditComponent_form_1_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r70.new_news.news_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](20, "News Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "textarea", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function EditComponent_form_1_Template_textarea_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r71); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r72.new_news.heading = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](24, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](26, "News Body");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "textarea", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function EditComponent_form_1_Template_textarea_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r71); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r73.new_news.body = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](29, EditComponent_form_1_mat_card_29_Template, 17, 8, "mat-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](30, EditComponent_form_1_span_30_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](31, "mat-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](32, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](33, "mat-card-actions", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](35, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditComponent_form_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r71); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r74.cancelWrite(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](36, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](37, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EditComponent_form_1_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r71); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r75.onSubmit(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](38, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("hidden", ctx_r1.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx_r1.new_news.news_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("appDnrmsThaana", ctx_r1.dhivehiEnabled)("ngModel", ctx_r1.new_news.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("appDnrmsThaana", ctx_r1.dhivehiEnabled)("ngModel", ctx_r1.new_news.body)("contextMenu", ctx_r1.basicMenu)("contextMenuSubject", ctx_r1.dhvInputBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx_r1.new_news.newsbar);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r1.tickerEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", !_r13.form.valid);
} }
function EditComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](6, "Saving News");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](7, "mat-progress-bar", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EditComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, " Add Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EditComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, " Highlight Selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
class EditComponent {
    constructor(snackBar, router, newsService, aRoute, store, dialog, location) {
        this.snackBar = snackBar;
        this.router = router;
        this.newsService = newsService;
        this.aRoute = aRoute;
        this.store = store;
        this.dialog = dialog;
        this.location = location;
        this.news_bar = new _news_models_news__WEBPACK_IMPORTED_MODULE_0__.NewsBar('', '');
        this.ticker_news = new _news_models_news__WEBPACK_IMPORTED_MODULE_0__.TickerNews('');
        this.edit_id = this.aRoute.snapshot.params.id;
        this.tickerEnabled = false;
        this.submitted = false;
        this.loaded = false;
        this.loaded2 = false;
        this.loadEditNews(this.edit_id);
    }
    ngOnInit() {
    }
    loadEditNews(id) {
        this.loaded = false;
        this.edit_id = id;
        this.newsService.editNews(this.edit_id)
            .subscribe((response) => {
            this.new_news = response;
            if (this.new_news.language.language_code === 'Dhv') {
                this.dhivehiEnabled = true;
            }
            else {
                this.dhivehiEnabled = false;
            }
            this.loaded = true;
        }, (error) => {
            this.submitted = false;
            const message = '';
            this.snackBar.open(message, 'dismiss');
        });
    }
    onSubmit(draft) {
        this.submitted = true;
        this.new_news.draft = draft;
        this.newsService.updateNews(this.new_news, this.edit_id)
            .subscribe((response) => {
            this.store.dispatch(new _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateReviewNewsLoaded({ isLoaded: false }));
            // this.location.back();
            this.router.navigate(['/editor/review']);
        }, (error) => {
            this.submitted = false;
        });
    }
    cancelWrite() {
        this.router.navigate(['/editor/review']);
    }
    approveNews(id) {
        this.store.dispatch(new _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.ApproveNews({ id: id }));
        this.router.navigate(['/editor/review']);
        this.store.dispatch(new _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateReviewNewsLoaded({ isLoaded: false }));
    }
    changeLanguage() {
        if (this.dhivehiEnabled) {
            this.new_news.language.language_code = 'Dhv';
        }
        else {
            this.new_news.language.language_code = 'Eng';
        }
    }
    addBar() {
        const nBar = new _news_models_news__WEBPACK_IMPORTED_MODULE_0__.NewsBar(null, null, null, null, null, null);
        this.new_news.newsbar.push(nBar);
    }
    removeBar(barId) {
        // let dialogRef = this.dialog.open( ConfirmDialogComponent, { width: '350px' });
        // dialogRef.afterClosed().subscribe((result: string) => {
        //     dialogRef = null;
        //     if (result) { // user confirmed to delete
        //       this.newsService.destroyBar(barId)
        //       .subscribe(
        //         (response) => {
        //           /*
        //           ---------- // TODO
        //           instead of reloading the model, remove the bar from fiest loaded model ->'this.new_news'
        //           because now the if the user had made any changes before removing a bar,
        //           the changes made earlier are reloaded with the old data from database.
        //           */
        //           this.loadEditNews(this.edit_id);
        //           console.log(response);
        //         }
        //       );
        //     }
        // });
    }
    addTicker() {
        const ticker = new _news_models_news__WEBPACK_IMPORTED_MODULE_0__.TickerNews('');
        this.new_news.tickernews.push(ticker);
    }
    removeTicker(tickerIndex) {
        this.new_news.tickernews.splice(tickerIndex, 1);
    }
    toggleTicker() {
        if (!this.tickerEnabled) {
            this.new_news.tickernews = null;
        }
        else {
            const ticker = new _news_models_news__WEBPACK_IMPORTED_MODULE_0__.TickerNews('');
            this.new_news.tickernews = [ticker];
        }
    }
    // TODO: Remove this when we're done, this is here for debugging purpose
    get diagnostic() { return JSON.stringify(this.new_news); }
    selectionchange(e) {
        let ev = this.el.nativeElement;
        console.log(ev.selectionStart);
        const start = ev.selectionStart;
        const end = ev.selectionEnd;
        console.log(ev.value.substr(start, end - start));
        let newBodyText = ev.value.substr(0, start) + '<review>' + ev.value.substr(start, end - start) + '</review>' + ev.value.substr(end, ev.value.toString().length);
        this.new_news.body = newBodyText;
    }
}
EditComponent.??fac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_editor_news_service__WEBPACK_IMPORTED_MODULE_2__.EditorNewsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location)); };
EditComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: EditComponent, selectors: [["app-edit"]], viewQuery: function EditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](ngx_contextmenu__WEBPACK_IMPORTED_MODULE_10__.ContextMenuComponent, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.basicMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.el = _t.first);
    } }, inputs: { dhivehiEnabled: "dhivehiEnabled", tickerEnabled: "tickerEnabled", loaded: "loaded" }, decls: 6, vars: 4, consts: [[3, "hidden", 4, "ngIf"], ["class", "basic-form", 3, "hidden", 4, "ngIf"], [4, "ngIf"], [3, "menuClass"], ["contextMenuItem", "", 3, "execute"], [3, "hidden"], ["color", "secondary", 1, "no-shadow"], ["fxFlex", "", "fxShow", "false", "fxShow.gt-xs", ""], ["selected", "false", 4, "ngIf"], ["color", "warn", "selected", "true", 4, "ngIf"], ["color", "primary", "selected", "true", 4, "ngIf"], ["fxShow", "false", "fxShow.gt-xs", ""], ["labelPosition", "after", "color", "secondary", 3, "ngModel", "ngModelChange"], ["selected", "false"], ["color", "warn", "selected", "true"], ["color", "primary", "selected", "true"], [1, "basic-form", 3, "hidden"], ["newsForm", "ngForm"], ["fxLayout", "row", "fxLayoutAlign", "center start"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex", "100"], [1, "mat-card-top"], ["color", "primary", 1, "no-shadow"], ["fxLayout", "row", "fxFlex", "100"], [1, "m-t-0", "font-14"], ["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-md", "100", "fxFlex", "100"], ["appearance", "outline"], ["matInput", "", "placeholder", "News Name", "required", "", "name", "newsName", 3, "ngModel", "ngModelChange"], ["newsName", ""], ["matInput", "", "mat-autosize", "", "matAutosizeMinRows", "2", "required", "", "name", "dhvHeading", 3, "appDnrmsThaana", "ngModel", "ngModelChange"], ["dhvHeading", ""], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["matInput", "", "mat-autosize", "", "matAutosizeMinRows", "20", "required", "", "name", "dhvInputBody", 3, "appDnrmsThaana", "ngModel", "contextMenu", "contextMenuSubject", "ngModelChange"], ["news_body", ""], ["class", "mat-card-top", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-button", "", "color", "warn", 3, "click"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["color", "primary", "class", "no-shadow", 4, "ngIf"], ["color", "secondary", "class", "no-shadow", 4, "ngIf"], ["matInput", "", "mat-autosize", "", "matAutosizeMinRows", "2", "required", "", 3, "appDnrmsThaana", "ngModel", "name", "ngModelChange"], ["BarTitledhvInput{{i}}", ""], ["BarDetailedhvInput{{i}}", ""], [1, "example-fill-remaining-space"], [3, "click"], [3, "click", 4, "ngIf"], ["tickerdhvInput{{i}}", ""], ["fxLayout", "row"], ["fxFlex.gt-sm", "100%"], ["mode", "indeterminate", "value", "40", 1, "m-t-30"], ["mat-menu-item", ""]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](0, EditComponent_div_0_Template, 15, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](1, EditComponent_form_1_Template, 39, 11, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](2, EditComponent_div_2_Template, 8, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "context-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](4, EditComponent_ng_template_4_Template, 4, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("execute", function EditComponent_Template_ng_template_execute_4_listener($event) { return ctx.selectionchange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](5, EditComponent_ng_template_5_Template, 4, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("execute", function EditComponent_Template_ng_template_execute_5_listener() { return ctx.selectionchange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.submitted || ctx.loaded2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("menuClass", "c-menu");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ngx_contextmenu__WEBPACK_IMPORTED_MODULE_10__.ContextMenuComponent, ngx_contextmenu__WEBPACK_IMPORTED_MODULE_10__.ContextMenuItemDirective, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarRow, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__.DefaultShowHideDirective, _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__.MatChipList, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__.MatChip, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgForm, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RequiredValidator, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatTextareaAutosize, _shared_directives_thaana_directive__WEBPACK_IMPORTED_MODULE_3__.ThaanaDirective, ngx_contextmenu__WEBPACK_IMPORTED_MODULE_10__.ContextMenuAttachDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__.MatProgressBar, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuItem], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 42487:
/*!***********************************************************************!*\
  !*** ./src/app/editor/editor-dashboard/editor-dashboard.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorDashboardComponent": function() { return /* binding */ EditorDashboardComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class EditorDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditorDashboardComponent.??fac = function EditorDashboardComponent_Factory(t) { return new (t || EditorDashboardComponent)(); };
EditorDashboardComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: EditorDashboardComponent, selectors: [["app-editor-dashboard"]], decls: 2, vars: 0, template: function EditorDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " editor-dashboard works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0b3ItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 93164:
/*!*****************************************!*\
  !*** ./src/app/editor/editor.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorModule": function() { return /* binding */ EditorModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _editor_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.routing */ 26509);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../demo-material-module */ 55408);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-dragula */ 88989);
/* harmony import */ var _editor_dashboard_editor_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-dashboard/editor-dashboard.component */ 42487);
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./review/review.component */ 19464);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _store_news_editor_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/news-editor.effects */ 7327);
/* harmony import */ var _store_news_editor_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/news-editor.reducer */ 29021);
/* harmony import */ var _notes_dialog_notes_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notes-dialog/notes-dialog.component */ 58780);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ 3200);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list/list.component */ 97995);
/* harmony import */ var _add_to_list_dialog_add_to_list_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-to-list-dialog/add-to-list-dialog.component */ 46511);
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-contextmenu */ 67396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);







/*import { DragulaModule } from 'ng2-dragula/ng2-dragula';*/



















class EditorModule {
}
EditorModule.??fac = function EditorModule_Factory(t) { return new (t || EditorModule)(); };
EditorModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineNgModule"]({ type: EditorModule });
EditorModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(_editor_routing__WEBPACK_IMPORTED_MODULE_0__.NewsEditorRoutes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PerfectScrollbarModule,
            ng2_dragula__WEBPACK_IMPORTED_MODULE_17__.DragulaModule.forRoot(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreModule.forFeature('ReviewNews', _store_news_editor_reducer__WEBPACK_IMPORTED_MODULE_5__.reducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__.EffectsModule.forFeature([_store_news_editor_effects__WEBPACK_IMPORTED_MODULE_4__.NewsEditorEffects]),
            ngx_contextmenu__WEBPACK_IMPORTED_MODULE_20__.ContextMenuModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["????setNgModuleScope"](EditorModule, { declarations: [_editor_dashboard_editor_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.EditorDashboardComponent,
        _review_review_component__WEBPACK_IMPORTED_MODULE_3__.ReviewComponent,
        _notes_dialog_notes_dialog_component__WEBPACK_IMPORTED_MODULE_6__.NotesDialogComponent,
        _add_to_list_dialog_add_to_list_dialog_component__WEBPACK_IMPORTED_MODULE_10__.AddToListDialogComponent,
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__.EditComponent,
        _list_list_component__WEBPACK_IMPORTED_MODULE_9__.ListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PerfectScrollbarModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_17__.DragulaModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__.EffectsFeatureModule, ngx_contextmenu__WEBPACK_IMPORTED_MODULE_20__.ContextMenuModule] }); })();


/***/ }),

/***/ 26509:
/*!******************************************!*\
  !*** ./src/app/editor/editor.routing.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsEditorRoutes": function() { return /* binding */ NewsEditorRoutes; }
/* harmony export */ });
/* harmony import */ var _editor_dashboard_editor_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-dashboard/editor-dashboard.component */ 42487);
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review/review.component */ 19464);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ 3200);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ 97995);




const NewsEditorRoutes = [
    {
        path: '',
        children: [{
                path: 'dashboard',
                component: _editor_dashboard_editor_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.EditorDashboardComponent,
                data: { role: 'editor' }
            },
            {
                path: 'review',
                component: _review_review_component__WEBPACK_IMPORTED_MODULE_1__.ReviewComponent,
                data: { role: 'editor' }
            }, {
                path: 'edit/:id',
                component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__.EditComponent,
                data: { role: 'editor' }
            }, {
                path: 'list',
                component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__.ListComponent,
                data: { role: 'editor' }
            }]
    }
];


/***/ }),

/***/ 97995:
/*!***********************************************!*\
  !*** ./src/app/editor/list/list.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": function() { return /* binding */ ListComponent; },
/* harmony export */   "NewsListDataSource": function() { return /* binding */ NewsListDataSource; }
/* harmony export */ });
/* harmony import */ var _news_models_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../news/models/news */ 26318);
/* harmony import */ var _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/news-editor.actions */ 23239);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/table */ 38345);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _shared_component_view_news_dialog_view_news_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/component/view-news-dialog/view-news-dialog.component */ 37173);
/* harmony import */ var _add_to_list_dialog_add_to_list_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-to-list-dialog/add-to-list-dialog.component */ 46511);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var Rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Rxjs */ 10826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/overlay */ 58203);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-dragula */ 88989);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ 94935);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);







































const _c0 = ["sidebar"];
function ListComponent_mat_list_item_15_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "subdirectory_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function ListComponent_mat_list_item_15_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "offline_pin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function ListComponent_mat_list_item_15_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("matMenuTriggerFor", _r9);
} }
function ListComponent_mat_list_item_15_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-list-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ListComponent_mat_list_item_15_Template_mat_list_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r11); const list_r5 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r10.onSelectList(list_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](1, ListComponent_mat_list_item_15_mat_icon_1_Template, 2, 0, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](6, ListComponent_mat_list_item_15_mat_icon_6_Template, 2, 0, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](7, ListComponent_mat_list_item_15_button_7_Template, 3, 1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "mat-menu", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ListComponent_mat_list_item_15_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r11); const list_r5 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r12.updateSelectedList(list_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](11, "Set Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const list_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????styleProp"]("background-color", list_r5 == ctx_r2.selectedList ? "rgba(127, 255, 212, 0.6)" : "rgba(255, 255, 255, 0)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", list_r5 == ctx_r2.selectedList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", list_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", list_r5.list_news.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", list_r5.id == ctx_r2.settings_selected_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", list_r5.id != ctx_r2.settings_selected_list);
} }
function ListComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](2, 2, ctx_r3.selectedList.created_at), " ", ctx_r3.selectedList.name, "");
} }
function ListComponent_div_26_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const news_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](news_r14.news.heading);
} }
function ListComponent_div_26_div_12_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const news_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](news_r14.news.heading);
} }
function ListComponent_div_26_div_12_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ListComponent_div_26_div_12_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r22); const news_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2); return ctx_r20.viewNews(news_r14.news); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "zoom_in");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function ListComponent_div_26_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](3, ListComponent_div_26_div_12_div_3_Template, 2, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](4, ListComponent_div_26_div_12_div_4_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](9, ListComponent_div_26_div_12_button_9_Template, 3, 0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ListComponent_div_26_div_12_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r24); const news_r14 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2); return ctx_r23.deleteNews(news_r14.id, ctx_r23.selectedList.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const news_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????classMapInterpolate1"]("table-row status_", news_r14.news.newsstatus.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate"]("id", news_r14.news.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](news_r14.news.news_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", news_r14.news.language.language_code === "Dhv");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", news_r14.news.language.language_code != "Dhv");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate"]("matTooltip", news_r14.news.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](7, 10, news_r14.news.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", news_r14.news.newsstatus.status != "breaker");
} }
function ListComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](4, "News Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](6, "Heading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](10, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](12, ListComponent_div_26_div_12_Template, 13, 12, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("dragula", "news-list")("dragulaModel", ctx_r4.selectedList.list_news);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx_r4.selectedList.list_news);
} }
const _c1 = function (a0, a1) { return { "side-panel-opened": a0, "side-panel-closed": a1 }; };
class ListComponent {
    constructor(dialog, store, router, updates$, overlay, dragulaService) {
        this.dialog = dialog;
        this.store = store;
        this.router = router;
        this.updates$ = updates$;
        this.overlay = overlay;
        this.dragulaService = dragulaService;
        this.displayedColumns = ['news_name', 'heading', 'date', 'status', 'actions'];
        this.displayedColumnsPublished = ['news_name', 'heading', 'date', 'status'];
        this.sidePanelOpened = true;
        this.sidePanelOpened_noNews = true;
        //date for selected dates lists
        this.show_list_date = new Date();
        this.show_list_date_f = (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.formatDate)(new Date(), 'dd/MM/yyyy', 'en-US');
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.subs = new Rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
        this.subs.add(this.dragulaService.dropModel('news-list')
            .subscribe(({ sourceModel, targetModel, item }) => {
            let post_str = [];
            targetModel.forEach((news, index) => {
                post_str[index] = new _news_models_news__WEBPACK_IMPORTED_MODULE_0__.ListOrder(this.selectedList.id, news.id, index + 1);
                console.log(post_str);
            });
            //update order
            this.store.dispatch(new _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateListOrder(post_str));
            // update selected list selection
            this.updates$
                .pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.UPDATE_LIST_ORDER_SUCCESS))
                .subscribe(() => {
                let sub = this.store.select(news_store => news_store.ReviewNews.lists)
                    .subscribe(list => {
                    list.forEach((element) => {
                        if (element.id === this.selectedList.id) {
                            this.selectedList = element;
                            this.dataSource = new NewsListDataSource(element.list_news);
                            // sub.unsubscribe();
                        }
                    });
                });
            });
        }));
    }
    /*this.dragulaService.dropModel('news-list').pipe(
      takeUntil(this.destroy$)
    ).subscribe((result) => {
      let post_str: ListOrder[] = [];
      this.selectedList.list_news.forEach((news, index) => {
        post_str[index] = new ListOrder(this.selectedList.id, news.id, index + 1);
        console.log(post_str)
      });

        //update order
        this.store.dispatch(new editorActions.UpdateListOrder(post_str));

        // update selected list selection
        this.updates$
        .pipe(ofType(editorActions.UPDATE_LIST_ORDER_SUCCESS))
        .subscribe(() => {
          let sub = this.store.select(news_store => news_store.ReviewNews.lists)
          .subscribe(list => {
            list.forEach((element: NewsList) => {
              if (element.id === this.selectedList.id) {
                this.selectedList = element
                this.dataSource = new NewsListDataSource(element.list_news);
                // sub.unsubscribe();
              }
            });
          });
        });
      }
    );
  }*/
    ngOnInit() {
        // this.init_news$ = this.store.select(store => store.ReviewNews.isListLoaded)
        // .take(1)
        // .subscribe(
        //   (isLoaded) => {
        //     if (!isLoaded) {
        //       console.log('Loading News Lists!');
        //       this.store.dispatch(new editorActions.GetLists());
        //     } else {
        //       this.lists = this.store.select(news_store => news_store.ReviewNews.lists);
        //     }
        //   }
        // );
        this.store.dispatch(new _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GetLists());
        //this.lists = this.store.select(news_store => news_store.ReviewNews.lists);
        this.updates$
            .pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GET_LISTS_SUCCESS))
            .subscribe(() => {
            this.store.dispatch(new _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GetSelectedList());
        });
        //this.store.dispatch(new editorActions.GetSelectedList());
        this.updates$
            .pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GET_SELECTED_LIST_SUCCESS))
            .subscribe(() => {
            this.lists = this.store.select(news_store => news_store.ReviewNews.lists);
            this.store.select(news_store => news_store.ReviewNews.selectedList)
                .subscribe(val => {
                this.settings_selected_list = val;
            });
        });
    }
    onSelectList(list) {
        if (this.selectedList && this.selectedList.id === list.id) {
            this.selectedList = null;
        }
        else {
            this.selectedList = list;
            this.dataSource = new NewsListDataSource(list.list_news);
        }
        console.log('LIST SELECTION');
    }
    viewNews(news) {
        let dialogRef = this.dialog.open(_shared_component_view_news_dialog_view_news_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ViewNewsDialogComponent, { width: '90%', data: news });
        dialogRef.afterClosed().subscribe((result) => {
            dialogRef = null;
            if (result) {
            }
        });
        return false;
    }
    addNewsToList(id) {
        let dialogRef = this.dialog.open(_add_to_list_dialog_add_to_list_dialog_component__WEBPACK_IMPORTED_MODULE_3__.AddToListDialogComponent, { width: '95%', height: '90%', maxHeight: '95%', data: { list: this.selectedList } });
        dialogRef.componentInstance.onAdd.subscribe((result) => {
            console.log(result);
            this.updates$
                .pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_LIST_SUCCESS))
                .subscribe(() => {
                this.store.select(news_store => news_store.ReviewNews.lists)
                    .subscribe(list => {
                    list.forEach((element) => {
                        if (element.id === result.list_id) {
                            this.selectedList = element;
                            this.dataSource = new NewsListDataSource(element.list_news);
                        }
                    });
                });
            });
        });
        dialogRef.afterClosed().subscribe((result) => {
            dialogRef = null;
            if (result) {
            }
        });
        return false;
    }
    deleteNews(news_id, list_id) {
        this.store.dispatch(new _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.RemoveFromList({ id: news_id }));
        this.updates$
            .pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.REMOVE_FROM_LIST_SUCCESS))
            .subscribe(() => {
            this.store.select(news_store => news_store.ReviewNews.lists)
                .subscribe(list => {
                list.forEach((element) => {
                    if (element.id === list_id) {
                        // console.log('LISTTTTTTTTTTT'+news_id)
                        this.selectedList = element;
                        this.dataSource = new NewsListDataSource(element.list_news);
                    }
                });
            });
        });
    }
    updateSelectedList(_list_id) {
        console.log(_list_id);
        this.store.dispatch(new _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateSelectedList({ list_id: _list_id }));
    }
    sideBarToggle() {
        this.sidenav.toggle();
    }
    isOver() {
        return window.matchMedia(`(max-width: 960px)`).matches;
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    // Load Lists for selected date
    loadDateList(event) {
        this.show_list_date = new Date(event);
        this.show_list_date_f = (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.formatDate)(event, 'yyyy-M-dd', 'en-US');
        console.log(this.show_list_date_f);
        //get selected date's lists
        this.store.dispatch(new _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GetListsByDate({ date: this.show_list_date_f }));
        this.updates$
            .pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GET_LISTS_BY_DATE_SUCCESS))
            .subscribe(() => {
            this.store.dispatch(new _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GetSelectedList());
        });
        //this.store.dispatch(new editorActions.GetSelectedList());
        this.updates$
            .pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_store_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GET_SELECTED_LIST_SUCCESS))
            .subscribe(() => {
            this.lists = this.store.select(news_store => news_store.ReviewNews.lists);
            this.store.select(news_store => news_store.ReviewNews.selectedList)
                .subscribe(val => {
                this.settings_selected_list = val;
            });
        });
    }
}
ListComponent.??fac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](ng2_dragula__WEBPACK_IMPORTED_MODULE_13__.DragulaService)); };
ListComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: ListComponent, selectors: [["app-list"]], viewQuery: function ListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????viewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????loadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 31, vars: 15, consts: [["fxLayout", "row", "fxLayoutAlign", "center start"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex", "100"], [1, "mat-card-top"], [3, "ngClass"], [3, "mode", "opened", "open", "close"], ["sidebar", ""], ["color", "primary", 1, "no-shadow"], ["fxLayout", "row", "fxFlex", "100"], [1, "m-t-0", "font-14"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [3, "background-color", "click", 4, "ngFor", "ngForOf"], ["color", "warn", 1, "bg-success", "no-shadow", "chat-right-panel"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "center center"], ["mat-icon-button", "", 1, "mr-1", 3, "click"], ["fxFlex", ""], ["class", "font-14", 4, "ngIf"], [1, "chat-middle-box", 2, "min-height", "700px"], ["class", "table-rasponsive", 4, "ngIf"], [1, "chat-footer"], ["align", "end"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "click"], ["color", "primary", 4, "ngIf"], ["matLine", ""], ["matLine", "", 1, "text-muted"], ["color", "warn", 4, "ngIf"], ["mat-icon-button", "", "class", "ml-1", 3, "matMenuTriggerFor", 4, "ngIf"], ["x-position", "before"], ["them", "matMenu"], ["mat-menu-item", "", "color", "primary", 3, "click"], ["color", "primary"], ["color", "warn"], ["mat-icon-button", "", 1, "ml-1", 3, "matMenuTriggerFor"], [1, "font-14"], [1, "table-rasponsive"], [1, "table"], [1, "table-header"], [1, "header__item", "column-news_name"], [1, "header__item", "column-heading"], [1, "header__item", "column-date"], [1, "header__item", "column-actions"], [1, "table-content", 3, "dragula", "dragulaModel"], [3, "class", "id", 4, "ngFor", "ngForOf"], [3, "id"], [1, "table-data", "column-news_name"], ["class", "table-data column-heading dhv", 4, "ngIf"], ["class", "table-data column-heading", 4, "ngIf"], ["matTooltipPosition", "below", 1, "table-data", "column-date", 3, "matTooltip"], [1, "table-data", "column-actions"], ["mat-icon-button", "", "color", "basic", "matTooltip", "View News", "matTooltipPosition", "below", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Remove News", "matTooltipPosition", "below", 3, "click"], ["aria-label", "Edit"], [1, "table-data", "column-heading", "dhv"], [1, "table-data", "column-heading"], ["mat-icon-button", "", "color", "basic", "matTooltip", "View News", "matTooltipPosition", "below", 3, "click"], ["aria-label", "view news"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "mat-sidenav-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "mat-sidenav", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("open", function ListComponent_Template_mat_sidenav_open_4_listener() { return ctx.sidePanelOpened =  true || 0; })("close", function ListComponent_Template_mat_sidenav_close_4_listener() { return ctx.sidePanelOpened =  false || ctx.sidePanelOpened_noNews == false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "mat-toolbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function ListComponent_Template_input_ngModelChange_10_listener($event) { return ctx.show_list_date = $event; })("ngModelChange", function ListComponent_Template_input_ngModelChange_10_listener($event) { return ctx.loadDateList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](11, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](12, "mat-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](15, ListComponent_mat_list_item_15_Template, 12, 7, "mat-list-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "mat-toolbar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ListComponent_Template_button_click_19_listener() { return ctx.sideBarToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](21, "short_text");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](23, ListComponent_div_23_Template, 3, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](25, "mat-card-content", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](26, ListComponent_div_26_Template, 13, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "mat-card-actions", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](29, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ListComponent_Template_button_click_29_listener() { return ctx.addNewsToList(ctx.selectedList.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](30, "Add News To List");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction2"](12, _c1, ctx.sidePanelOpened, !ctx.sidePanelOpened));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("mode", ctx.isOver() ? "over" : "side")("opened", !ctx.isOver());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("matDatepicker", _r1)("ngModel", ctx.show_list_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](16, 10, ctx.lists));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.selectedList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.selectedList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", !ctx.selectedList);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenavContainer, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__.DefaultClassDirective, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenav, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__.MatToolbar, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgModel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepicker, _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatNavList, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardActions, _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatLine, _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__.MatMenuTrigger, ng2_dragula__WEBPACK_IMPORTED_MODULE_13__.DragulaDirective, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltip], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: [".table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px solid #EEEEEE;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 10px 0;\n  font-size: 12px;\n  border-bottom: 1px solid #EEEEEE;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding-left: 10px 0;\n  border-bottom: 1px solid #EEEEEE;\n  transition: all 0.2s ease-in-out;\n}\n\n.table-row[_ngcontent-%COMP%]:hover{\n  background-color: rgba(97, 97, 97, 0.068);\n}\n\n\n\n.table-row.status_breaker[_ngcontent-%COMP%]{\n  background-color: rgba(127, 255, 212, 0.2)\n}\n\n.table-row[_ngcontent-%COMP%]:hover.status_breaker{\n  background-color: rgba(127, 255, 212, 0.7)\n}\n\n.table-row[_ngcontent-%COMP%]:nth-of-type(odd) {\n  \n}\n\n.table-data[_ngcontent-%COMP%], .header__item[_ngcontent-%COMP%] {\n  flex: 1 1 20%;\n  text-align: center;\n  padding: 5px;\n}\n\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.filter__link[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n.filter__link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: -18px;\n  color: white;\n  font-size: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.filter__link.desc[_ngcontent-%COMP%]::after {\n  content: \"(desc)\";\n}\n\n.filter__link.asc[_ngcontent-%COMP%]::after {\n  content: \"(asc)\";\n}\n\n.column-news_name[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n  font-size: 12px;\n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.column-heading[_ngcontent-%COMP%]{\n  flex: 0 0 53%;\n  font-size: 14px;\n  \n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.column-heading.dhv[_ngcontent-%COMP%]{\n  font-family: 'MV_Faseyha';\n  font-size: 16px;\n  text-align: right;\n  line-height: 36px;\n  direction: rtl;\n}\n\n.column-date[_ngcontent-%COMP%]{\n  flex: 0 0 7%;\n  font-size: 12px;\n}\n\n.column-actions[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGdDQUFnQztFQUtoQyxnQ0FBZ0M7QUFDbEM7O0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUEsWUFBWTs7QUFDWjtFQUNFO0FBQ0Y7O0FBQ0E7RUFDRTtBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdEQUFnRDtFQUNoRCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixRQUFRO0VBQ1IsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUtBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0RBQWdEO0FBQ2xEOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtBQUNsRDs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoibGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwcHggc29saWQgI0VFRUVFRTtcbn1cblxuLnRhYmxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUVFRUU7XG59XG5cbi50YWJsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFRUVFO1xuXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi50YWJsZS1yb3c6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMC4wNjgpO1xufVxuXG4vKiBCUkVBS0VSICovXG4udGFibGUtcm93LnN0YXR1c19icmVha2Vye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuMilcbn1cbi50YWJsZS1yb3c6aG92ZXIuc3RhdHVzX2JyZWFrZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyNTUsIDIxMiwgMC43KVxufVxuXG4udGFibGUtcm93Om50aC1vZi10eXBlKG9kZCkge1xuICAvKmJhY2tncm91bmQ6ICNFRUVFRUU7Ki9cbn1cblxuLnRhYmxlLWRhdGEsXG4uaGVhZGVyX19pdGVtIHtcbiAgZmxleDogMSAxIDIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5oZWFkZXJfX2l0ZW0ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5maWx0ZXJfX2xpbmsge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cbi5maWx0ZXJfX2xpbms6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmZpbHRlcl9fbGluay5kZXNjOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKGRlc2MpXCI7XG59XG4uZmlsdGVyX19saW5rLmFzYzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIihhc2MpXCI7XG59XG5cblxuXG5cbi5jb2x1bW4tbmV3c19uYW1le1xuICBmbGV4OiAwIDAgMjAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbn1cbi5jb2x1bW4taGVhZGluZ3tcbiAgZmxleDogMCAwIDUzJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAvKmp1c3RpZnktY29udGVudDpmbGV4LWVuZDsqL1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG59XG4uY29sdW1uLWhlYWRpbmcuZGh2e1xuICBmb250LWZhbWlseTogJ01WX0Zhc2V5aGEnO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbi5jb2x1bW4tZGF0ZXtcbiAgZmxleDogMCAwIDclO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29sdW1uLWFjdGlvbnN7XG4gIGZsZXg6IDAgMCAyMCU7XG59XG5cbiJdfQ== */"] });
class NewsListDataSource extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_30__.DataSource {
    constructor(staticData) {
        super();
        this.staticData = staticData;
    }
    connect() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_31__.of)(this.staticData);
    }
    disconnect() { }
}


/***/ }),

/***/ 58780:
/*!***************************************************************!*\
  !*** ./src/app/editor/notes-dialog/notes-dialog.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotesDialogComponent": function() { return /* binding */ NotesDialogComponent; },
/* harmony export */   "RejectNotes": function() { return /* binding */ RejectNotes; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);












function NotesDialogComponent_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-list-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const note_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", note_r3, " ");
} }
function NotesDialogComponent_mat_list_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-list-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Reject without any notes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class NotesDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.onReject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.editorNotes = new RejectNotes(this.data.id);
        console.log(this.data);
    }
    closeDialog(confirmation) {
        this.dialogRef.close(confirmation);
    }
    addNote() {
        const tmpNote = this.noteInp;
        this.editorNotes.addNote(tmpNote);
        this.noteInp = '';
    }
    doReject() {
        this.closeDialog(false);
        this.onReject.emit(this.editorNotes);
    }
}
NotesDialogComponent.??fac = function NotesDialogComponent_Factory(t) { return new (t || NotesDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
NotesDialogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NotesDialogComponent, selectors: [["app-notes-dialog"]], decls: 25, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["fxLayout", "row", "fxLayoutWrap", "wrap"], ["role", "list"], ["role", "listitem", 4, "ngFor", "ngForOf"], ["role", "listitem", 4, "ngIf"], ["fxFlex.gt-sm", "100", "fxFlex", "100", 1, "m-t-20"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 1, "m-t-30"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["appearance", "outline"], ["matInput", "", "mat-autosize", "", "matAutosizeMinRows", "2", "name", "rejectNote", 3, "ngModel", "ngModelChange"], ["rejectNote", ""], ["mat-button", "", "color", "primary", 3, "click"], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "tabindex", "2", 3, "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"], ["role", "listitem"]], template: function NotesDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Add Note to news");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, NotesDialogComponent_mat_list_item_5_Template, 2, 1, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, NotesDialogComponent_mat_list_item_6_Template, 3, 0, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "textarea", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NotesDialogComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.noteInp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotesDialogComponent_Template_button_click_18_listener() { return ctx.addNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Add Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotesDialogComponent_Template_button_click_21_listener() { return ctx.closeDialog(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotesDialogComponent_Template_button_click_23_listener() { return ctx.doReject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.editorNotes.notes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.editorNotes.notes[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.noteInp);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatList, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatTextareaAutosize, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem], encapsulation: 2 });
class RejectNotes {
    constructor(newsId) {
        this.notes = [];
        this.containNotes = false;
        this.news_id = newsId;
    }
    addNote(note) {
        this.containNotes = true;
        this.notes.push(note);
    }
}


/***/ }),

/***/ 19464:
/*!***************************************************!*\
  !*** ./src/app/editor/review/review.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewComponent": function() { return /* binding */ ReviewComponent; }
/* harmony export */ });
/* harmony import */ var _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/news-editor.actions */ 23239);
/* harmony import */ var _notes_dialog_notes_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../notes-dialog/notes-dialog.component */ 58780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 94935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ 65939);























const _c0 = ["sidebar"];
function ReviewComponent_mat_list_item_14_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "subdirectory_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ReviewComponent_mat_list_item_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ReviewComponent_mat_list_item_14_Template_mat_list_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r9); const news_r6 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r8.onSelect(news_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, ReviewComponent_mat_list_item_14_mat_icon_1_Template, 2, 0, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const news_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????styleProp"]("background-color", news_r6 == ctx_r1.selectedNews ? "rgba(127, 255, 212, 0.6)" : "rgba(255, 255, 255, 0)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r6 == ctx_r1.selectedNews);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", news_r6.news_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", news_r6.user.name, " ");
} }
function ReviewComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r2.selectedNews.news_name);
} }
function ReviewComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Select a news from left sidebar to view");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ReviewComponent_div_35_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "No news to Approve !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ReviewComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, ReviewComponent_div_35_div_1_Template, 4, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, ReviewComponent_div_35_div_2_Template, 4, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r4.review_news_count > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r4.review_news_count <= 0);
} }
function ReviewComponent_div_36_mat_tab_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-tab", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const bar_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate1"]("label", "Bar ", i_r14 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classMap"](ctx_r12.selectedNews.language.language_code == "Dhv" ? "dhv" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](bar_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classMap"](ctx_r12.selectedNews.language.language_code == "Dhv" ? "dhv m-t-20" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](bar_r13.detail);
} }
function ReviewComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](9, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](14, "News Bar(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "mat-tab-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](16, ReviewComponent_div_36_mat_tab_16_Template, 6, 7, "mat-tab", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("dhv-title", ctx_r5.selectedNews.language.language_code == "Dhv");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r5.selectedNews.heading, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("dhv", ctx_r5.selectedNews.language.language_code == "Dhv");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerHTML", ctx_r5.selectedNews.body, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r5.selectedNews.newsbar);
} }
const _c1 = function (a0, a1) { return { "side-panel-opened": a0, "side-panel-closed": a1 }; };
class ReviewComponent {
    constructor(store, dialog, router) {
        this.store = store;
        this.dialog = dialog;
        this.router = router;
        this.sidePanelOpened = true;
        this.sidePanelOpened_noNews = true;
        this.review_news_count = null;
        // this.selectedMessage = this.messages[1];
    }
    ngOnInit() {
        // this.init_news$ = this.store.select(store => store.ReviewNews.isLoaded)
        // .take(1)
        // .subscribe(
        //   (isLoaded) => {
        //     if (!isLoaded) {
        //       console.log('loading news for review');
        //       this.store.dispatch(new editorActions.GetReviewNews());
        //     }
        //   }
        // );
        this.store.dispatch(new _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GetReviewNews());
        // no of news for approval count
        this.init_news$ = this.store.select(store => store.ReviewNews)
            .subscribe((ReviewNews) => {
            if (ReviewNews.isLoaded) {
                this.review_news_count = Object.keys(ReviewNews.news).length;
                if (this.review_news_count <= 0) {
                    this.sideBarToggle();
                }
            }
        });
        this.reviewList = this.store.select(news_store => news_store.ReviewNews.news);
    }
    sideBarToggle() {
        this.sidenav.toggle();
    }
    isOver() {
        return window.matchMedia(`(max-width: 960px)`).matches;
    }
    onSelect(news) {
        if (this.selectedNews && this.selectedNews.id === news.id) {
            this.selectedNews = null;
        }
        else {
            this.selectedNews = news;
        }
    }
    approveNews(toApprove) {
        this.store.dispatch(new _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.ApproveNews({ id: toApprove.id }));
        this.selectedNews = null;
    }
    rejectNews() {
        let dialogRef = this.dialog.open(_notes_dialog_notes_dialog_component__WEBPACK_IMPORTED_MODULE_1__.NotesDialogComponent, { width: '50%', data: this.selectedNews });
        dialogRef.afterClosed().subscribe((result) => {
            dialogRef = null;
            if (result) {
            }
        });
        dialogRef.componentInstance.onReject.subscribe((result) => {
            this.store.dispatch(new _store_news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.RejectNews(result));
            this.selectedNews = null;
        });
        return false;
    }
    onEdit() {
        if (this.selectedNews) {
            const url = '/editor/edit/' + this.selectedNews.id;
            this.router.navigateByUrl(url, { skipLocationChange: true });
        }
    }
}
ReviewComponent.??fac = function ReviewComponent_Factory(t) { return new (t || ReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
ReviewComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ReviewComponent, selectors: [["app-review"]], viewQuery: function ReviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 45, vars: 19, consts: [["fxLayout", "row", "fxLayoutAlign", "center start"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex", "100"], [1, "mat-card-top"], [3, "ngClass"], [3, "mode", "opened", "open", "close"], ["sidebar", ""], ["color", "primary", 1, "no-shadow"], ["fxLayout", "row", "fxFlex", "100"], [1, "m-t-0", "font-14"], ["mat-icon-button", "", 1, "mr-1"], [3, "background-color", "click", 4, "ngFor", "ngForOf"], ["color", "warn", 1, "bg-success", "no-shadow", "chat-right-panel"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "center center"], ["mat-icon-button", "", 1, "mr-1", 3, "click"], ["fxFlex", ""], ["class", "font-14", 4, "ngIf"], ["mat-icon-button", "", 1, "ml-1", 3, "matMenuTriggerFor"], ["x-position", "before"], ["them", "matMenu"], ["mat-menu-item", "", "color", "primary", 3, "disabled"], ["mat-menu-item", "", "color", "warn", 3, "disabled"], ["mat-menu-item", "", "color", "link", 3, "disabled"], [1, "chat-middle-box", 2, "min-height", "700px"], [4, "ngIf"], [1, "chat-footer"], ["align", "end"], ["mat-button", "", "color", "basic", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "click"], ["color", "primary", 4, "ngIf"], ["matLine", ""], ["matLine", "", 1, "text-muted"], ["color", "primary"], [1, "font-14"], ["class", "login-register-box error-card text-center", "style", "margin: 200px auto;", 4, "ngIf"], [1, "login-register-box", "error-card", "text-center", 2, "margin", "200px auto"], ["src", "/assets/images/nothing-states/select_to_view.png", 2, "width", "auto", "height", "150px"], [1, "text-muted", "m-t-30", "m-b-30"], ["src", "/assets/images/nothing-states/nothing-to-approve.png", 2, "width", "auto", "height", "150px"], ["fxLayout", "column", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["fxFlex.gt-sm", "100", "fxFlex", "100", 1, "m-t-20"], [2, "white-space", "pre-wrap", 3, "innerHTML"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"]], template: function ReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-sidenav-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "mat-sidenav", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("open", function ReviewComponent_Template_mat_sidenav_open_4_listener() { return ctx.sidePanelOpened =  true || 0; })("close", function ReviewComponent_Template_mat_sidenav_close_4_listener() { return ctx.sidePanelOpened =  false || ctx.sidePanelOpened_noNews == false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "mat-toolbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, " News in Review ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, ReviewComponent_mat_list_item_14_Template, 6, 5, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "mat-toolbar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ReviewComponent_Template_button_click_18_listener() { return ctx.sideBarToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "short_text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](22, ReviewComponent_div_22_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "mat-menu", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "Approve");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31, "Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](33, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "mat-card-content", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](35, ReviewComponent_div_35_Template, 3, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](36, ReviewComponent_div_36_Template, 17, 7, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "mat-card-actions", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ReviewComponent_Template_button_click_39_listener() { return ctx.onEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](40, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ReviewComponent_Template_button_click_41_listener() { return ctx.rejectNews(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42, "Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](43, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ReviewComponent_Template_button_click_43_listener() { return ctx.approveNews(ctx.selectedNews); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](44, "Approve");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](16, _c1, ctx.sidePanelOpened, !ctx.sidePanelOpened));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("mode", ctx.isOver() ? "over" : "side")("opened", !ctx.isOver());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](15, 14, ctx.reviewList));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.selectedNews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx.selectedNews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx.selectedNews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx.selectedNews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx.selectedNews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.selectedNews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx.selectedNews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx.selectedNews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx.selectedNews);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavContainer, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultClassDirective, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenav, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatNavList, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuItem, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardActions, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatLine, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTab], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXcuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 79032:
/*!********************************************************!*\
  !*** ./src/app/editor/services/editor-news.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorNewsService": function() { return /* binding */ EditorNewsService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class EditorNewsService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    // get all news in ready status (review)
    getReviewNews() {
        return this.http.get(this.apiUrl + 'news/editor/ready');
    }
    // get all news in ready status (review)
    approveNews(id) {
        return this.http.post(this.apiUrl + 'news/editor/approve', { newsId: id });
    }
    // reject news
    reJectNews(reject) {
        return this.http.post(this.apiUrl + 'news/editor/reject', reject);
        // { news_id: reject.news_id, notes: reject.notes, containNotes: reject.containNotes }
    }
    // get a news for editing
    editNews(id) {
        return this.http.get(this.apiUrl + 'news/editor/edit/' + id);
    }
    // save a news, with bar(s) & ticker(s)
    updateNews(save_news, id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        save_news.newsstatus_id = 1;
        const post_str = JSON.parse(JSON.stringify(save_news));
        return this.http.put(this.apiUrl + 'news/editor/' + id, post_str, { headers: headers });
    }
    /**
     * News List Services
     */
    // get todays lists
    getNewsLists() {
        return this.http.get(this.apiUrl + 'news/editor/lists');
    }
    // get lists for given date, date format = 'Y-m-d' eg: 2018-11-20
    getNewsListsByDate(date) {
        return this.http.get(this.apiUrl + 'news/editor/lists/' + date);
    }
    // get all news written today if published
    getTodaysNews() {
        return this.http.get(this.apiUrl + 'news/editor/news/todays');
    }
    // add a news to a list
    addNewsToList(data) {
        return this.http.post(this.apiUrl + 'news/editor/list/news/add', data);
    }
    // add a news to a list
    removeNewsFromList(news_id) {
        return this.http.delete(this.apiUrl + 'news/editor/list/news/remove/' + news_id);
    }
    //order news in a list
    orderList(ordered_list) {
        return this.http.post(this.apiUrl + 'news/editor/list/order/update', ordered_list);
    }
    //update selected news list
    updateSelectedList(list_id) {
        return this.http.put(this.apiUrl + 'news/editor/list/selected/update', { "settings_value": list_id });
    }
    // get selected list
    getSelectedList() {
        return this.http.get(this.apiUrl + 'news/lists/selected-list');
    }
}
EditorNewsService.??fac = function EditorNewsService_Factory(t) { return new (t || EditorNewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
EditorNewsService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: EditorNewsService, factory: EditorNewsService.??fac, providedIn: 'root' });


/***/ }),

/***/ 7327:
/*!*****************************************************!*\
  !*** ./src/app/editor/store/news-editor.effects.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsEditorEffects": function() { return /* binding */ NewsEditorEffects; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _services_editor_news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/editor-news.service */ 79032);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-editor.actions */ 23239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








class NewsEditorEffects {
    constructor(actions$, newsService) {
        this.actions$ = actions$;
        this.newsService = newsService;
        this.GetMyNews$ = this.actions$.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GET_REVIEW_NEWS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.newsService.getReviewNews().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            console.log(data);
            return new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GetReviewNewsSuccess(data);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GetReviewNewsError())))));
        this.ApproveNews$ = this.actions$.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.APPROVE_NEWS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.newsService.approveNews(action.payload.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            console.log(data);
            return new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.ApproveNewsSuccess({ id: action.payload.id });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.ApproveNewsError())))));
        this.RejectNews$ = this.actions$.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.REJECT_NEWS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.newsService.reJectNews(action.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            console.log(data);
            return new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.RejectNewsSuccess(action.payload);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.RejectNewsError())))));
        // @Effect()
        // GetTrashNews$: Observable<Action> = this.actions$.
        //   ofType<NewsActions.GetReviewNews>(NewsActions.GET_REVIEW_NEWS)
        //   .mergeMap(action =>
        //     this.newsService.trashNews(action.payload.perPage, action.payload.currentPage)
        //     .map((data) => {
        //       return new NewsActions.GetReviewNewsSuccess(data);
        //     })
        //     .catch(() => of(new NewsActions.GetReviewNewsError()))
        //   );
        this.getLists$ = this.actions$.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GET_LISTS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.newsService.getNewsLists().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            console.log(data);
            // new NewsActions.GetSelectedList(); //load selected list
            return new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GetListsSuccess(data);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GetListsError())))));
        this.getListsByDate$ = this.actions$.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GET_LISTS_BY_DATE), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.newsService.getNewsListsByDate(action.payload.date).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            console.log(data);
            // new NewsActions.GetSelectedList(); //load selected list
            return new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GetListsByDateSuccess(data);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GetListsByDateError())))));
        this.AddToList$ = this.actions$.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_LIST), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.newsService.addNewsToList({ list_id: action.payload.list_id, news_id: action.payload.news_id }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            console.log(data);
            return new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.AddToListSuccess(data);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.AddToListError())))));
        this.RemoveFromList$ = this.actions$.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.REMOVE_FROM_LIST), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.newsService.removeNewsFromList(action.payload.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            //console.log(data);
            return new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.RemoveFromListSuccess(data);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.RemoveFromListError())))));
        this.UpdateListOrder$ = this.actions$.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.UPDATE_LIST_ORDER), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.newsService.orderList(action.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            //console.log(data);
            return new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateListOrderSuccess(data);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateListOrderError())))));
        this.GetSelectedList$ = this.actions$.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GET_SELECTED_LIST), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.newsService.getSelectedList().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            //console.log(data);
            return new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GetSelectedListSuccess({ list_id: data });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.GetSelectedListError())))));
        this.UpdateSelectedList$ = this.actions$.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.UPDATE_SELECTED_LIST), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => this.newsService.updateSelectedList(action.payload.list_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            //console.log(data);
            return new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateSelectedListSuccess({ list_id: data });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateSelectedListError())))));
    }
}
NewsEditorEffects.??fac = function NewsEditorEffects_Factory(t) { return new (t || NewsEditorEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????inject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????inject"](_services_editor_news_service__WEBPACK_IMPORTED_MODULE_0__.EditorNewsService)); };
NewsEditorEffects.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjectable"]({ token: NewsEditorEffects, factory: NewsEditorEffects.??fac });
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable)
], NewsEditorEffects.prototype, "GetMyNews$", void 0);
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable)
], NewsEditorEffects.prototype, "ApproveNews$", void 0);
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable)
], NewsEditorEffects.prototype, "RejectNews$", void 0);
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable)
], NewsEditorEffects.prototype, "getLists$", void 0);
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable)
], NewsEditorEffects.prototype, "getListsByDate$", void 0);
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable)
], NewsEditorEffects.prototype, "AddToList$", void 0);
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable)
], NewsEditorEffects.prototype, "RemoveFromList$", void 0);
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable)
], NewsEditorEffects.prototype, "UpdateListOrder$", void 0);
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable)
], NewsEditorEffects.prototype, "GetSelectedList$", void 0);
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable)
], NewsEditorEffects.prototype, "UpdateSelectedList$", void 0);


/***/ })

}]);
//# sourceMappingURL=src_app_editor_editor_module_ts-es2015.js.map