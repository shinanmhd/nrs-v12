(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmaterialpro"] = self["webpackChunkmaterialpro"] || []).push([["src_app_pages_pages_module_ts"], {
    /***/
    43436:
    /*!**********************************************************!*\
      !*** ./src/app/pages/helper-classes/helper.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HelperComponent": function HelperComponent() {
          return (
            /* binding */
            _HelperComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      93738);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      77746);

      var _HelperComponent = /*#__PURE__*/function () {
        function _HelperComponent() {
          _classCallCheck(this, _HelperComponent);
        }

        _createClass(_HelperComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HelperComponent;
      }();

      _HelperComponent.ɵfac = function HelperComponent_Factory(t) {
        return new (t || _HelperComponent)();
      };

      _HelperComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _HelperComponent,
        selectors: [["app-helper"]],
        decls: 475,
        vars: 0,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-md", "50"], ["role", "list"], ["fxFlex.gt-md", "50", "fxFlex", "100"], ["fxFlex.gt-md", "25", "fxFlex", "100"]],
        template: function HelperComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Text Color Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".text-muted");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ".text-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ".text-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ".text-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ".text-warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ".text-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Border Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ".b-all");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " : Border all side");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ".b-0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " : Border none all side");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ".b-t");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " : Border top");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, ".b-b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " : Border bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ".b-l");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " : Border left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, ".b-r");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " : Border right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Background Colors ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, ".bg-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ".bg-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, ".bg-warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, ".bg-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, ".bg-inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, ".bg-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Extra Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, ".oh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " : overflow Hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, ".relative");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " : Position Relative");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, ".absolute");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, ": Position Absolute");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, ".d-flex");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, ": Display flex");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, ".db");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " : Display Blcok");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, ".dl");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " : Display Inline block");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Margin Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, ".m-0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Margin zero to all");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, ".m-t-5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Only Margin top will be 5px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, ".m-t-10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Only Margin top will be 10px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, ".m-t-15");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Only Margin top will be 15px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, ".m-t-20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Only Margin top will be 20px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, ".m-t-30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Only Margin top will be 30px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, ".m-t-40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Only Margin top will be 40px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Margin Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, ".m-b-5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Only Margin Bottom will be 5px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, ".m-b-10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Only Margin Bottom will be 10px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, ".m-b-15");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Only Margin Bottom will be 15px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, ".m-b-20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " Only Margin Bottom will be 20px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, ".m-b-30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Only Margin Bottom will be 30px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, ".m-t-40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Only Margin top will be 40px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Margin Classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, ".m-r-5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Only Margin Right will be 5px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, ".m-r-10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " Only Margin Right will be 10px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, ".m-r-15");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " Only Margin Right will be 15px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, ".m-r-20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " Only Margin Right will be 20px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, ".m-r-30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " Only Margin Right will be 30px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, ".m-r-40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " Only Margin Right will be 40px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Margin Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, ".m-l-5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " Only Margin Left will be 5px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, ".m-l-10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " Only Margin Left will be 10px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, ".m-l-15");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " Only Margin Left will be 15px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, ".m-l-20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " Only Margin Left will be 20px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, ".m-l-30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " Only Margin Left will be 30px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, ".m-l-40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " Only Margin Left will be 40px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Padding Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, ".p-0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " Padding will be 0px from all side.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, ".p-10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " Padding will be 10px from all side.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, ".p-20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " Padding will be 20px from all side");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Padding Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, ".p-l-0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " Only Padding Left will be 0px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, ".p-l-10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " Only Padding Left will be 10px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, ".p-l-20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " Only Padding Left will be 20px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Padding Classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, ".p-r-0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " Only Padding right will be 0px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, ".p-r-10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " Only Padding right will be 10px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, ".p-r-20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, " Only Padding right will be 20px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Padding Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, ".p-t-0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, " Only Padding top will be 0px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, ".p-t-10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, " Only Padding top will be 10px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, ".p-t-20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " Only Padding top will be 20px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Font Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, ".font-bold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, " Font bold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, ".font-normal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, " Font Normal.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, ".font-light");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, " Font Light");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "font Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, ".font-medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, " Font Medium.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, ".font-10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, " Font size 10px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, ".font-12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, " Font size 12px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Font Classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, ".font-14");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, " font-size 14px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, ".font-16");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, " font size 16px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, ".font-20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, " font size 20px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Extra Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, ".img-circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, " Image transform in circle.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, ".radius");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, " Rounded corner to the element.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, ".thumb-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, " Thumbnail 88px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, ".thumb-md");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, " Thumbnail 48px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, ".thumb-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, " Thumbnail 32px.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Round Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, ".round-lg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, " round-lg 60px ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, ".round-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, " Round green.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, ".round-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, " Round Blue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, ".round-warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, " Round yellow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, ".round-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, " Round Red");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, ".round-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, " Round perple");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Lebel Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, ".label-rounded");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, " rounded label ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, ".label-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, " label green.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, ".label-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, " label Blue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, ".label-warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, " label yellow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, ".label-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, " label Red");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, ".label-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, " label perple");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "Lebel Light Classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, ".label-light-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, " label light green.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, ".label-light-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, " label light Blue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, ".label-light-warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, " label light yellow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, ".label-light-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, " label light Red");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, ".label-light-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, " label light perple");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem],
        styles: [".mat-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  height: auto;\n  margin: 5px -16px;\n}\n.mat-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSxpQkFBQTtBQUFKO0FBQ0k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFDUiIsImZpbGUiOiJoZWxwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWxpc3QgLm1hdC1saXN0LWl0ZW17XG4gICAgXG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjo1cHggLTE2cHg7XG4gICAgY29kZXtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cbiAgICBcbn1cblxuIl19 */"]
      });
      /***/
    },

    /***/
    91046:
    /*!****************************************************!*\
      !*** ./src/app/pages/invoice/invoice.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvoiceComponent": function InvoiceComponent() {
          return (
            /* binding */
            _InvoiceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      93738);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function InvoiceComponent_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r4 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r4.subtitle);
        }
      }

      function InvoiceComponent_ng_template_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r5 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 1, row_r5.price, "USD", "symbol", "1.2-2"));
        }
      }

      function InvoiceComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r6 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r6.quantity);
        }
      }

      function InvoiceComponent_ng_template_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r7 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 1, row_r7.price * row_r7.quantity, "USD", "symbol", "1.2-2"));
        }
      }

      var _InvoiceComponent = /*#__PURE__*/function () {
        function _InvoiceComponent() {
          _classCallCheck(this, _InvoiceComponent);

          this.invoiceItems = [{
            'title': 'Ample Admin',
            'subtitle': 'The ultimate admin template',
            'price': 499.00,
            'quantity': 1
          }, {
            'title': 'Material Pro Admin',
            'subtitle': 'Material Based admin template',
            'price': 399.00,
            'quantity': 1
          }, {
            'title': 'Wrapkit',
            'subtitle': 'Bootstrap 4 UI kit',
            'price': 599.00,
            'quantity': 1
          }, {
            'title': 'Admin Wrap',
            'subtitle': 'Free admin template with UI kit',
            'price': 0.00,
            'quantity': 1
          }];
          this.invoiceTotals = [{
            'subtotal': this.getSubTotal(),
            'tax': this.getCalculatedTax(),
            'discount': 0.00,
            'total': 0
          }];
        }

        _createClass(_InvoiceComponent, [{
          key: "getSubTotal",
          value: function getSubTotal() {
            var total = 0.00;

            for (var i = 1; i < this.invoiceItems.length; i++) {
              total += this.invoiceItems[i].price * this.invoiceItems[i].quantity;
            }

            return total;
          }
        }, {
          key: "getCalculatedTax",
          value: function getCalculatedTax() {
            return 2 * this.getSubTotal() / 100;
          }
        }, {
          key: "getTotal",
          value: function getTotal() {
            return this.getSubTotal() + this.getCalculatedTax();
          }
        }]);

        return _InvoiceComponent;
      }();

      _InvoiceComponent.ɵfac = function InvoiceComponent_Factory(t) {
        return new (t || _InvoiceComponent)();
      };

      _InvoiceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _InvoiceComponent,
        selectors: [["app-invoice"]],
        decls: 60,
        vars: 27,
        consts: [[1, "mb-1"], [1, "mt-0"], ["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-xs", "50", "fxFlex", "100"], [1, "text-danger", "font-bold"], ["fxLayout", "column"], ["fxFlex.gt-xs", "50", "fxFlex", "100", 1, "text-right"], [1, "font-bold"], [1, "table-responsive"], [1, "material", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight"], ["name", "Description", 3, "flexGrow"], ["ngx-datatable-cell-template", ""], ["name", "Unit Price", 3, "flexGrow"], ["name", "Quantity", 3, "flexGrow"], ["name", "Total", 3, "flexGrow"], [1, "bg-light"], [1, "d-flex", "align-items-center"], [1, "text-right", "ml-auto"], [1, "text-uppercase", "text-md", "ma-0", "text-bold"], [1, "text-uppercase", "text-sm", "ma-0", "text-bold"], [1, "m-l-10"], [1, "font-medium"], [1, "mat-text-muted"]],
        template: function InvoiceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "INVOICE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Material Pro Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Invoice No: #0001");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "E 104, Dharti-2,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nr' Viswakarma Temple,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Talaja Road, Bhavnagar - 364002");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Gaala & Sons,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "company@address.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "E 105, ODharti-2,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Nr' Viswakarma Temple,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Talaja Road, Ahmedabad - 364002");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-content", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ngx-datatable", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ngx-datatable-column", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, InvoiceComponent_ng_template_34_Template, 5, 2, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ngx-datatable-column", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, InvoiceComponent_ng_template_36_Template, 3, 6, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, InvoiceComponent_ng_template_38_Template, 2, 1, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, InvoiceComponent_ng_template_40_Template, 3, 6, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card-content", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Subtotal :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h6", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Tax (2%) :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h6", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Total :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.invoiceItems)("columnMode", "flex")("headerHeight", 50)("footerHeight", 0)("rowHeight", "auto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexGrow", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexGrow", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexGrow", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexGrow", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](53, 12, ctx.getSubTotal(), "USD", "symbol", "1.2-2"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](56, 17, ctx.getCalculatedTax(), "USD", "symbol", "1.2-2"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](59, 22, ctx.getTotal(), "USD", "symbol", "1.2-2"));
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnCellDirective],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    6094:
    /*!************************************************************!*\
      !*** ./src/app/pages/material-icons/mat-icon.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatIconComponent": function MatIconComponent() {
          return (
            /* binding */
            _MatIconComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _mock_mat_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mock-mat-icon */
      96940);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      93738);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      function MatIconComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var maticon_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](maticon_r1.iconName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](maticon_r1.iconClass);
        }
      }

      var _MatIconComponent = /*#__PURE__*/function () {
        function _MatIconComponent() {
          _classCallCheck(this, _MatIconComponent);

          this.maticons = _mock_mat_icon__WEBPACK_IMPORTED_MODULE_0__.MATICONS;
        }

        _createClass(_MatIconComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _MatIconComponent;
      }();

      _MatIconComponent.ɵfac = function MatIconComponent_Factory(t) {
        return new (t || _MatIconComponent)();
      };

      _MatIconComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MatIconComponent,
        selectors: [["app-icon"]],
        decls: 12,
        vars: 1,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["class", "icon-box", 4, "ngFor", "ngForOf"], [1, "icon-box"], [1, "text-muted"]],
        template: function MatIconComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Material Icon list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Simple and easy to use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "<mat-icon> ... </mat-icon>");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MatIconComponent_div_11_Template, 5, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.maticons);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
        styles: [".icon-box[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdC1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoibWF0LWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1ib3h7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */"]
      });
      /***/
    },

    /***/
    96940:
    /*!*******************************************************!*\
      !*** ./src/app/pages/material-icons/mock-mat-icon.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MATICONS": function MATICONS() {
          return (
            /* binding */
            _MATICONS
          );
        }
        /* harmony export */

      });
      /*tslint:disable:max-line-length*/


      var _MATICONS = [{
        iconName: '3d_rotation',
        iconClass: '3d_rotation'
      }, {
        iconName: 'ac_unit',
        iconClass: 'ac_unit'
      }, {
        iconName: 'access_alarm',
        iconClass: 'access_alarm'
      }, {
        iconName: 'access_alarms',
        iconClass: 'access_alarms'
      }, {
        iconName: 'access_time',
        iconClass: 'access_time'
      }, {
        iconName: 'accessibility',
        iconClass: 'accessibility'
      }, {
        iconName: 'accessible',
        iconClass: 'accessible'
      }, {
        iconName: 'account_balance',
        iconClass: 'account_balance'
      }, {
        iconName: 'account_balance_wallet',
        iconClass: 'account_balance_wallet'
      }, {
        iconName: 'account_box',
        iconClass: 'account_box'
      }, {
        iconName: 'account_circle',
        iconClass: 'account_circle'
      }, {
        iconName: 'adb',
        iconClass: 'adb'
      }, {
        iconName: 'add',
        iconClass: 'add'
      }, {
        iconName: 'add_a_photo',
        iconClass: 'add_a_photo'
      }, {
        iconName: 'add_alarm',
        iconClass: 'add_alarm'
      }, {
        iconName: 'add_alert',
        iconClass: 'add_alert'
      }, {
        iconName: 'add_box',
        iconClass: 'add_box'
      }, {
        iconName: 'add_circle',
        iconClass: 'add_circle'
      }, {
        iconName: 'add_circle_outline',
        iconClass: 'add_circle_outline'
      }, {
        iconName: 'add_location',
        iconClass: 'add_location'
      }, {
        iconName: 'add_shopping_cart',
        iconClass: 'add_shopping_cart'
      }, {
        iconName: 'add_to_photos',
        iconClass: 'add_to_photos'
      }, {
        iconName: 'add_to_queue',
        iconClass: 'add_to_queue'
      }, {
        iconName: 'adjust',
        iconClass: 'adjust'
      }, {
        iconName: 'airline_seat_flat',
        iconClass: 'airline_seat_flat'
      }, {
        iconName: 'airline_seat_flat_angled',
        iconClass: 'airline_seat_flat_angled'
      }, {
        iconName: 'airline_seat_individual_suite',
        iconClass: 'airline_seat_individual_suite'
      }, {
        iconName: 'airline_seat_legroom_extra',
        iconClass: 'airline_seat_legroom_extra'
      }, {
        iconName: 'airline_seat_legroom_normal',
        iconClass: 'airline_seat_legroom_normal'
      }, {
        iconName: 'airline_seat_legroom_reduced',
        iconClass: 'airline_seat_legroom_reduced'
      }, {
        iconName: 'airline_seat_recline_extra',
        iconClass: 'airline_seat_recline_extra'
      }, {
        iconName: 'airline_seat_recline_normal',
        iconClass: 'airline_seat_recline_normal'
      }, {
        iconName: 'airplanemode_active',
        iconClass: 'airplanemode_active'
      }, {
        iconName: 'airplanemode_inactive',
        iconClass: 'airplanemode_inactive'
      }, {
        iconName: 'airplay',
        iconClass: 'airplay'
      }, {
        iconName: 'airport_shuttle',
        iconClass: 'airport_shuttle'
      }, {
        iconName: 'alarm',
        iconClass: 'alarm'
      }, {
        iconName: 'alarm_add',
        iconClass: 'alarm_add'
      }, {
        iconName: 'alarm_off',
        iconClass: 'alarm_off'
      }, {
        iconName: 'alarm_on',
        iconClass: 'alarm_on'
      }, {
        iconName: 'album',
        iconClass: 'album'
      }, {
        iconName: 'all_inclusive',
        iconClass: 'all_inclusive'
      }, {
        iconName: 'all_out',
        iconClass: 'all_out'
      }, {
        iconName: 'android',
        iconClass: 'android'
      }, {
        iconName: 'announcement',
        iconClass: 'announcement'
      }, {
        iconName: 'apps',
        iconClass: 'apps'
      }, {
        iconName: 'archive',
        iconClass: 'archive'
      }, {
        iconName: 'arrow_back',
        iconClass: 'arrow_back'
      }, {
        iconName: 'arrow_downward',
        iconClass: 'arrow_downward'
      }, {
        iconName: 'arrow_drop_down',
        iconClass: 'arrow_drop_down'
      }, {
        iconName: 'arrow_drop_down_circle',
        iconClass: 'arrow_drop_down_circle'
      }, {
        iconName: 'arrow_drop_up',
        iconClass: 'arrow_drop_up'
      }, {
        iconName: 'arrow_forward',
        iconClass: 'arrow_forward'
      }, {
        iconName: 'arrow_upward',
        iconClass: 'arrow_upward'
      }, {
        iconName: 'art_track',
        iconClass: 'art_track'
      }, {
        iconName: 'aspect_ratio',
        iconClass: 'aspect_ratio'
      }, {
        iconName: 'assessment',
        iconClass: 'assessment'
      }, {
        iconName: 'assignment',
        iconClass: 'assignment'
      }, {
        iconName: 'assignment_ind',
        iconClass: 'assignment_ind'
      }, {
        iconName: 'assignment_late',
        iconClass: 'assignment_late'
      }, {
        iconName: 'assignment_return',
        iconClass: 'assignment_return'
      }, {
        iconName: 'assignment_returned',
        iconClass: 'assignment_returned'
      }, {
        iconName: 'assignment_turned_in',
        iconClass: 'assignment_turned_in'
      }, {
        iconName: 'assistant',
        iconClass: 'assistant'
      }, {
        iconName: 'assistant_photo',
        iconClass: 'assistant_photo'
      }, {
        iconName: 'attach_file',
        iconClass: 'attach_file'
      }, {
        iconName: 'attach_money',
        iconClass: 'attach_money'
      }, {
        iconName: 'attachment',
        iconClass: 'attachment'
      }, {
        iconName: 'audiotrack',
        iconClass: 'audiotrack'
      }, {
        iconName: 'autorenew',
        iconClass: 'autorenew'
      }, {
        iconName: 'av_timer',
        iconClass: 'av_timer'
      }, {
        iconName: 'backspace',
        iconClass: 'backspace'
      }, {
        iconName: 'backup',
        iconClass: 'backup'
      }, {
        iconName: 'battery_alert',
        iconClass: 'battery_alert'
      }, {
        iconName: 'battery_charging_full',
        iconClass: 'battery_charging_full'
      }, {
        iconName: 'battery_full',
        iconClass: 'battery_full'
      }, {
        iconName: 'battery_std',
        iconClass: 'battery_std'
      }, {
        iconName: 'battery_unknown',
        iconClass: 'battery_unknown'
      }, {
        iconName: 'beach_access',
        iconClass: 'beach_access'
      }, {
        iconName: 'beenhere',
        iconClass: 'beenhere'
      }, {
        iconName: 'block',
        iconClass: 'block'
      }, {
        iconName: 'bluetooth',
        iconClass: 'bluetooth'
      }, {
        iconName: 'bluetooth_audio',
        iconClass: 'bluetooth_audio'
      }, {
        iconName: 'bluetooth_connected',
        iconClass: 'bluetooth_connected'
      }, {
        iconName: 'bluetooth_disabled',
        iconClass: 'bluetooth_disabled'
      }, {
        iconName: 'bluetooth_searching',
        iconClass: 'bluetooth_searching'
      }, {
        iconName: 'blur_circular',
        iconClass: 'blur_circular'
      }, {
        iconName: 'blur_linear',
        iconClass: 'blur_linear'
      }, {
        iconName: 'blur_off',
        iconClass: 'blur_off'
      }, {
        iconName: 'blur_on',
        iconClass: 'blur_on'
      }, {
        iconName: 'book',
        iconClass: 'book'
      }, {
        iconName: 'bookmark',
        iconClass: 'bookmark'
      }, {
        iconName: 'bookmark_border',
        iconClass: 'bookmark_border'
      }, {
        iconName: 'border_all',
        iconClass: 'border_all'
      }, {
        iconName: 'border_bottom',
        iconClass: 'border_bottom'
      }, {
        iconName: 'border_clear',
        iconClass: 'border_clear'
      }, {
        iconName: 'border_color',
        iconClass: 'border_color'
      }, {
        iconName: 'border_horizontal',
        iconClass: 'border_horizontal'
      }, {
        iconName: 'border_inner',
        iconClass: 'border_inner'
      }, {
        iconName: 'border_left',
        iconClass: 'border_left'
      }, {
        iconName: 'border_outer',
        iconClass: 'border_outer'
      }, {
        iconName: 'border_right',
        iconClass: 'border_right'
      }, {
        iconName: 'border_style',
        iconClass: 'border_style'
      }, {
        iconName: 'border_top',
        iconClass: 'border_top'
      }, {
        iconName: 'border_vertical',
        iconClass: 'border_vertical'
      }, {
        iconName: 'branding_watermark',
        iconClass: 'branding_watermark'
      }, {
        iconName: 'brightness_1',
        iconClass: 'brightness_1'
      }, {
        iconName: 'brightness_2',
        iconClass: 'brightness_2'
      }, {
        iconName: 'brightness_3',
        iconClass: 'brightness_3'
      }, {
        iconName: 'brightness_4',
        iconClass: 'brightness_4'
      }, {
        iconName: 'brightness_5',
        iconClass: 'brightness_5'
      }, {
        iconName: 'brightness_6',
        iconClass: 'brightness_6'
      }, {
        iconName: 'brightness_7',
        iconClass: 'brightness_7'
      }, {
        iconName: 'brightness_auto',
        iconClass: 'brightness_auto'
      }, {
        iconName: 'brightness_high',
        iconClass: 'brightness_high'
      }, {
        iconName: 'brightness_low',
        iconClass: 'brightness_low'
      }, {
        iconName: 'brightness_medium',
        iconClass: 'brightness_medium'
      }, {
        iconName: 'broken_image',
        iconClass: 'broken_image'
      }, {
        iconName: 'brush',
        iconClass: 'brush'
      }, {
        iconName: 'bubble_chart',
        iconClass: 'bubble_chart'
      }, {
        iconName: 'bug_report',
        iconClass: 'bug_report'
      }, {
        iconName: 'build',
        iconClass: 'build'
      }, {
        iconName: 'burst_mode',
        iconClass: 'burst_mode'
      }, {
        iconName: 'business',
        iconClass: 'business'
      }, {
        iconName: 'business_center',
        iconClass: 'business_center'
      }, {
        iconName: 'cached',
        iconClass: 'cached'
      }, {
        iconName: 'cake',
        iconClass: 'cake'
      }, {
        iconName: 'call',
        iconClass: 'call'
      }, {
        iconName: 'call_end',
        iconClass: 'call_end'
      }, {
        iconName: 'call_made',
        iconClass: 'call_made'
      }, {
        iconName: 'call_merge',
        iconClass: 'call_merge'
      }, {
        iconName: 'call_missed',
        iconClass: 'call_missed'
      }, {
        iconName: 'call_missed_outgoing',
        iconClass: 'call_missed_outgoing'
      }, {
        iconName: 'call_received',
        iconClass: 'call_received'
      }, {
        iconName: 'call_split',
        iconClass: 'call_split'
      }, {
        iconName: 'call_to_action',
        iconClass: 'call_to_action'
      }, {
        iconName: 'camera',
        iconClass: 'camera'
      }, {
        iconName: 'camera_alt',
        iconClass: 'camera_alt'
      }, {
        iconName: 'camera_enhance',
        iconClass: 'camera_enhance'
      }, {
        iconName: 'camera_front',
        iconClass: 'camera_front'
      }, {
        iconName: 'camera_rear',
        iconClass: 'camera_rear'
      }, {
        iconName: 'camera_roll',
        iconClass: 'camera_roll'
      }, {
        iconName: 'cancel',
        iconClass: 'cancel'
      }, {
        iconName: 'card_giftcard',
        iconClass: 'card_giftcard'
      }, {
        iconName: 'card_membership',
        iconClass: 'card_membership'
      }, {
        iconName: 'card_travel',
        iconClass: 'card_travel'
      }, {
        iconName: 'casino',
        iconClass: 'casino'
      }, {
        iconName: 'cast',
        iconClass: 'cast'
      }, {
        iconName: 'cast_connected',
        iconClass: 'cast_connected'
      }, {
        iconName: 'center_focus_strong',
        iconClass: 'center_focus_strong'
      }, {
        iconName: 'center_focus_weak',
        iconClass: 'center_focus_weak'
      }, {
        iconName: 'change_history',
        iconClass: 'change_history'
      }, {
        iconName: 'chat',
        iconClass: 'chat'
      }, {
        iconName: 'chat_bubble',
        iconClass: 'chat_bubble'
      }, {
        iconName: 'chat_bubble_outline',
        iconClass: 'chat_bubble_outline'
      }, {
        iconName: 'check',
        iconClass: 'check'
      }, {
        iconName: 'check_box',
        iconClass: 'check_box'
      }, {
        iconName: 'check_box_outline_blank',
        iconClass: 'check_box_outline_blank'
      }, {
        iconName: 'check_circle',
        iconClass: 'check_circle'
      }, {
        iconName: 'chevron_left',
        iconClass: 'chevron_left'
      }, {
        iconName: 'chevron_right',
        iconClass: 'chevron_right'
      }, {
        iconName: 'child_care',
        iconClass: 'child_care'
      }, {
        iconName: 'child_friendly',
        iconClass: 'child_friendly'
      }, {
        iconName: 'chrome_reader_mode',
        iconClass: 'chrome_reader_mode'
      }, {
        iconName: 'class',
        iconClass: 'class'
      }, {
        iconName: 'clear',
        iconClass: 'clear'
      }, {
        iconName: 'clear_all',
        iconClass: 'clear_all'
      }, {
        iconName: 'close',
        iconClass: 'close'
      }, {
        iconName: 'closed_caption',
        iconClass: 'closed_caption'
      }, {
        iconName: 'cloud',
        iconClass: 'cloud'
      }, {
        iconName: 'cloud_circle',
        iconClass: 'cloud_circle'
      }, {
        iconName: 'cloud_done',
        iconClass: 'cloud_done'
      }, {
        iconName: 'cloud_download',
        iconClass: 'cloud_download'
      }, {
        iconName: 'cloud_off',
        iconClass: 'cloud_off'
      }, {
        iconName: 'cloud_queue',
        iconClass: 'cloud_queue'
      }, {
        iconName: 'cloud_upload',
        iconClass: 'cloud_upload'
      }, {
        iconName: 'code',
        iconClass: 'code'
      }, {
        iconName: 'collections',
        iconClass: 'collections'
      }, {
        iconName: 'collections_bookmark',
        iconClass: 'collections_bookmark'
      }, {
        iconName: 'color_lens',
        iconClass: 'color_lens'
      }, {
        iconName: 'colorize',
        iconClass: 'colorize'
      }, {
        iconName: 'comment',
        iconClass: 'comment'
      }, {
        iconName: 'compare',
        iconClass: 'compare'
      }, {
        iconName: 'compare_arrows',
        iconClass: 'compare_arrows'
      }, {
        iconName: 'computer',
        iconClass: 'computer'
      }, {
        iconName: 'confirmation_number',
        iconClass: 'confirmation_number'
      }, {
        iconName: 'contact_mail',
        iconClass: 'contact_mail'
      }, {
        iconName: 'contact_phone',
        iconClass: 'contact_phone'
      }, {
        iconName: 'contacts',
        iconClass: 'contacts'
      }, {
        iconName: 'content_copy',
        iconClass: 'content_copy'
      }, {
        iconName: 'content_cut',
        iconClass: 'content_cut'
      }, {
        iconName: 'content_paste',
        iconClass: 'content_paste'
      }, {
        iconName: 'control_point',
        iconClass: 'control_point'
      }, {
        iconName: 'control_point_duplicate',
        iconClass: 'control_point_duplicate'
      }, {
        iconName: 'copyright',
        iconClass: 'copyright'
      }, {
        iconName: 'create',
        iconClass: 'create'
      }, {
        iconName: 'create_new_folder',
        iconClass: 'create_new_folder'
      }, {
        iconName: 'credit_card',
        iconClass: 'credit_card'
      }, {
        iconName: 'crop',
        iconClass: 'crop'
      }, {
        iconName: 'crop_16_9',
        iconClass: 'crop_16_9'
      }, {
        iconName: 'crop_3_2',
        iconClass: 'crop_3_2'
      }, {
        iconName: 'crop_5_4',
        iconClass: 'crop_5_4'
      }, {
        iconName: 'crop_7_5',
        iconClass: 'crop_7_5'
      }, {
        iconName: 'crop_din',
        iconClass: 'crop_din'
      }, {
        iconName: 'crop_free',
        iconClass: 'crop_free'
      }, {
        iconName: 'crop_landscape',
        iconClass: 'crop_landscape'
      }, {
        iconName: 'crop_original',
        iconClass: 'crop_original'
      }, {
        iconName: 'crop_portrait',
        iconClass: 'crop_portrait'
      }, {
        iconName: 'crop_rotate',
        iconClass: 'crop_rotate'
      }, {
        iconName: 'crop_square',
        iconClass: 'crop_square'
      }, {
        iconName: 'dashboard',
        iconClass: 'dashboard'
      }, {
        iconName: 'data_usage',
        iconClass: 'data_usage'
      }, {
        iconName: 'date_range',
        iconClass: 'date_range'
      }, {
        iconName: 'dehaze',
        iconClass: 'dehaze'
      }, {
        iconName: 'delete',
        iconClass: 'delete'
      }, {
        iconName: 'delete_forever',
        iconClass: 'delete_forever'
      }, {
        iconName: 'delete_sweep',
        iconClass: 'delete_sweep'
      }, {
        iconName: 'description',
        iconClass: 'description'
      }, {
        iconName: 'desktop_mac',
        iconClass: 'desktop_mac'
      }, {
        iconName: 'desktop_windows',
        iconClass: 'desktop_windows'
      }, {
        iconName: 'details',
        iconClass: 'details'
      }, {
        iconName: 'developer_board',
        iconClass: 'developer_board'
      }, {
        iconName: 'developer_mode',
        iconClass: 'developer_mode'
      }, {
        iconName: 'device_hub',
        iconClass: 'device_hub'
      }, {
        iconName: 'devices',
        iconClass: 'devices'
      }, {
        iconName: 'devices_other',
        iconClass: 'devices_other'
      }, {
        iconName: 'dialer_sip',
        iconClass: 'dialer_sip'
      }, {
        iconName: 'dialpad',
        iconClass: 'dialpad'
      }, {
        iconName: 'directions',
        iconClass: 'directions'
      }, {
        iconName: 'directions_bike',
        iconClass: 'directions_bike'
      }, {
        iconName: 'directions_boat',
        iconClass: 'directions_boat'
      }, {
        iconName: 'directions_bus',
        iconClass: 'directions_bus'
      }, {
        iconName: 'directions_car',
        iconClass: 'directions_car'
      }, {
        iconName: 'directions_railway',
        iconClass: 'directions_railway'
      }, {
        iconName: 'directions_run',
        iconClass: 'directions_run'
      }, {
        iconName: 'directions_subway',
        iconClass: 'directions_subway'
      }, {
        iconName: 'directions_transit',
        iconClass: 'directions_transit'
      }, {
        iconName: 'directions_walk',
        iconClass: 'directions_walk'
      }, {
        iconName: 'disc_full',
        iconClass: 'disc_full'
      }, {
        iconName: 'dns',
        iconClass: 'dns'
      }, {
        iconName: 'do_not_disturb',
        iconClass: 'do_not_disturb'
      }, {
        iconName: 'do_not_disturb_alt',
        iconClass: 'do_not_disturb_alt'
      }, {
        iconName: 'do_not_disturb_off',
        iconClass: 'do_not_disturb_off'
      }, {
        iconName: 'do_not_disturb_on',
        iconClass: 'do_not_disturb_on'
      }, {
        iconName: 'dock',
        iconClass: 'dock'
      }, {
        iconName: 'domain',
        iconClass: 'domain'
      }, {
        iconName: 'done',
        iconClass: 'done'
      }, {
        iconName: 'done_all',
        iconClass: 'done_all'
      }, {
        iconName: 'donut_large',
        iconClass: 'donut_large'
      }, {
        iconName: 'donut_small',
        iconClass: 'donut_small'
      }, {
        iconName: 'drafts',
        iconClass: 'drafts'
      }, {
        iconName: 'drag_handle',
        iconClass: 'drag_handle'
      }, {
        iconName: 'drive_eta',
        iconClass: 'drive_eta'
      }, {
        iconName: 'dvr',
        iconClass: 'dvr'
      }, {
        iconName: 'edit',
        iconClass: 'edit'
      }, {
        iconName: 'edit_location',
        iconClass: 'edit_location'
      }, {
        iconName: 'eject',
        iconClass: 'eject'
      }, {
        iconName: 'email',
        iconClass: 'email'
      }, {
        iconName: 'enhanced_encryption',
        iconClass: 'enhanced_encryption'
      }, {
        iconName: 'equalizer',
        iconClass: 'equalizer'
      }, {
        iconName: 'error',
        iconClass: 'error'
      }, {
        iconName: 'error_outline',
        iconClass: 'error_outline'
      }, {
        iconName: 'euro_symbol',
        iconClass: 'euro_symbol'
      }, {
        iconName: 'ev_station',
        iconClass: 'ev_station'
      }, {
        iconName: 'event',
        iconClass: 'event'
      }, {
        iconName: 'event_available',
        iconClass: 'event_available'
      }, {
        iconName: 'event_busy',
        iconClass: 'event_busy'
      }, {
        iconName: 'event_note',
        iconClass: 'event_note'
      }, {
        iconName: 'event_seat',
        iconClass: 'event_seat'
      }, {
        iconName: 'exit_to_app',
        iconClass: 'exit_to_app'
      }, {
        iconName: 'expand_less',
        iconClass: 'expand_less'
      }, {
        iconName: 'expand_more',
        iconClass: 'expand_more'
      }, {
        iconName: 'explicit',
        iconClass: 'explicit'
      }, {
        iconName: 'explore',
        iconClass: 'explore'
      }, {
        iconName: 'exposure',
        iconClass: 'exposure'
      }, {
        iconName: 'exposure_neg_1',
        iconClass: 'exposure_neg_1'
      }, {
        iconName: 'exposure_neg_2',
        iconClass: 'exposure_neg_2'
      }, {
        iconName: 'exposure_plus_1',
        iconClass: 'exposure_plus_1'
      }, {
        iconName: 'exposure_plus_2',
        iconClass: 'exposure_plus_2'
      }, {
        iconName: 'exposure_zero',
        iconClass: 'exposure_zero'
      }, {
        iconName: 'extension',
        iconClass: 'extension'
      }, {
        iconName: 'face',
        iconClass: 'face'
      }, {
        iconName: 'fast_forward',
        iconClass: 'fast_forward'
      }, {
        iconName: 'fast_rewind',
        iconClass: 'fast_rewind'
      }, {
        iconName: 'favorite',
        iconClass: 'favorite'
      }, {
        iconName: 'favorite_border',
        iconClass: 'favorite_border'
      }, {
        iconName: 'featured_play_list',
        iconClass: 'featured_play_list'
      }, {
        iconName: 'featured_video',
        iconClass: 'featured_video'
      }, {
        iconName: 'feedback',
        iconClass: 'feedback'
      }, {
        iconName: 'fiber_dvr',
        iconClass: 'fiber_dvr'
      }, {
        iconName: 'fiber_manual_record',
        iconClass: 'fiber_manual_record'
      }, {
        iconName: 'fiber_new',
        iconClass: 'fiber_new'
      }, {
        iconName: 'fiber_pin',
        iconClass: 'fiber_pin'
      }, {
        iconName: 'fiber_smart_record',
        iconClass: 'fiber_smart_record'
      }, {
        iconName: 'file_download',
        iconClass: 'file_download'
      }, {
        iconName: 'file_upload',
        iconClass: 'file_upload'
      }, {
        iconName: 'filter',
        iconClass: 'filter'
      }, {
        iconName: 'filter_1',
        iconClass: 'filter_1'
      }, {
        iconName: 'filter_2',
        iconClass: 'filter_2'
      }, {
        iconName: 'filter_3',
        iconClass: 'filter_3'
      }, {
        iconName: 'filter_4',
        iconClass: 'filter_4'
      }, {
        iconName: 'filter_5',
        iconClass: 'filter_5'
      }, {
        iconName: 'filter_6',
        iconClass: 'filter_6'
      }, {
        iconName: 'filter_7',
        iconClass: 'filter_7'
      }, {
        iconName: 'filter_8',
        iconClass: 'filter_8'
      }, {
        iconName: 'filter_9',
        iconClass: 'filter_9'
      }, {
        iconName: 'filter_9_plus',
        iconClass: 'filter_9_plus'
      }, {
        iconName: 'filter_b_and_w',
        iconClass: 'filter_b_and_w'
      }, {
        iconName: 'filter_center_focus',
        iconClass: 'filter_center_focus'
      }, {
        iconName: 'filter_drama',
        iconClass: 'filter_drama'
      }, {
        iconName: 'filter_frames',
        iconClass: 'filter_frames'
      }, {
        iconName: 'filter_hdr',
        iconClass: 'filter_hdr'
      }, {
        iconName: 'filter_list',
        iconClass: 'filter_list'
      }, {
        iconName: 'filter_none',
        iconClass: 'filter_none'
      }, {
        iconName: 'filter_tilt_shift',
        iconClass: 'filter_tilt_shift'
      }, {
        iconName: 'filter_vintage',
        iconClass: 'filter_vintage'
      }, {
        iconName: 'find_in_page',
        iconClass: 'find_in_page'
      }, {
        iconName: 'find_replace',
        iconClass: 'find_replace'
      }, {
        iconName: 'fingerprint',
        iconClass: 'fingerprint'
      }, {
        iconName: 'first_page',
        iconClass: 'first_page'
      }, {
        iconName: 'fitness_center',
        iconClass: 'fitness_center'
      }, {
        iconName: 'flag',
        iconClass: 'flag'
      }, {
        iconName: 'flare',
        iconClass: 'flare'
      }, {
        iconName: 'flash_auto',
        iconClass: 'flash_auto'
      }, {
        iconName: 'flash_off',
        iconClass: 'flash_off'
      }, {
        iconName: 'flash_on',
        iconClass: 'flash_on'
      }, {
        iconName: 'flight',
        iconClass: 'flight'
      }, {
        iconName: 'flight_land',
        iconClass: 'flight_land'
      }, {
        iconName: 'flight_takeoff',
        iconClass: 'flight_takeoff'
      }, {
        iconName: 'flip',
        iconClass: 'flip'
      }, {
        iconName: 'flip_to_back',
        iconClass: 'flip_to_back'
      }, {
        iconName: 'flip_to_front',
        iconClass: 'flip_to_front'
      }, {
        iconName: 'folder',
        iconClass: 'folder'
      }, {
        iconName: 'folder_open',
        iconClass: 'folder_open'
      }, {
        iconName: 'folder_shared',
        iconClass: 'folder_shared'
      }, {
        iconName: 'folder_special',
        iconClass: 'folder_special'
      }, {
        iconName: 'font_download',
        iconClass: 'font_download'
      }, {
        iconName: 'format_align_center',
        iconClass: 'format_align_center'
      }, {
        iconName: 'format_align_justify',
        iconClass: 'format_align_justify'
      }, {
        iconName: 'format_align_left',
        iconClass: 'format_align_left'
      }, {
        iconName: 'format_align_right',
        iconClass: 'format_align_right'
      }, {
        iconName: 'format_bold',
        iconClass: 'format_bold'
      }, {
        iconName: 'format_clear',
        iconClass: 'format_clear'
      }, {
        iconName: 'format_color_fill',
        iconClass: 'format_color_fill'
      }, {
        iconName: 'format_color_reset',
        iconClass: 'format_color_reset'
      }, {
        iconName: 'format_color_text',
        iconClass: 'format_color_text'
      }, {
        iconName: 'format_indent_decrease',
        iconClass: 'format_indent_decrease'
      }, {
        iconName: 'format_indent_increase',
        iconClass: 'format_indent_increase'
      }, {
        iconName: 'format_italic',
        iconClass: 'format_italic'
      }, {
        iconName: 'format_line_spacing',
        iconClass: 'format_line_spacing'
      }, {
        iconName: 'format_list_bulleted',
        iconClass: 'format_list_bulleted'
      }, {
        iconName: 'format_list_numbered',
        iconClass: 'format_list_numbered'
      }, {
        iconName: 'format_paint',
        iconClass: 'format_paint'
      }, {
        iconName: 'format_quote',
        iconClass: 'format_quote'
      }, {
        iconName: 'format_shapes',
        iconClass: 'format_shapes'
      }, {
        iconName: 'format_size',
        iconClass: 'format_size'
      }, {
        iconName: 'format_strikethrough',
        iconClass: 'format_strikethrough'
      }, {
        iconName: 'format_textdirection_l_to_r',
        iconClass: 'format_textdirection_l_to_r'
      }, {
        iconName: 'format_textdirection_r_to_l',
        iconClass: 'format_textdirection_r_to_l'
      }, {
        iconName: 'format_underlined',
        iconClass: 'format_underlined'
      }, {
        iconName: 'forum',
        iconClass: 'forum'
      }, {
        iconName: 'forward',
        iconClass: 'forward'
      }, {
        iconName: 'forward_10',
        iconClass: 'forward_10'
      }, {
        iconName: 'forward_30',
        iconClass: 'forward_30'
      }, {
        iconName: 'forward_5',
        iconClass: 'forward_5'
      }, {
        iconName: 'free_breakfast',
        iconClass: 'free_breakfast'
      }, {
        iconName: 'fullscreen',
        iconClass: 'fullscreen'
      }, {
        iconName: 'fullscreen_exit',
        iconClass: 'fullscreen_exit'
      }, {
        iconName: 'functions',
        iconClass: 'functions'
      }, {
        iconName: 'g_translate',
        iconClass: 'g_translate'
      }, {
        iconName: 'gamepad',
        iconClass: 'gamepad'
      }, {
        iconName: 'games',
        iconClass: 'games'
      }, {
        iconName: 'gavel',
        iconClass: 'gavel'
      }, {
        iconName: 'gesture',
        iconClass: 'gesture'
      }, {
        iconName: 'get_app',
        iconClass: 'get_app'
      }, {
        iconName: 'gif',
        iconClass: 'gif'
      }, {
        iconName: 'golf_course',
        iconClass: 'golf_course'
      }, {
        iconName: 'gps_fixed',
        iconClass: 'gps_fixed'
      }, {
        iconName: 'gps_not_fixed',
        iconClass: 'gps_not_fixed'
      }, {
        iconName: 'gps_off',
        iconClass: 'gps_off'
      }, {
        iconName: 'grade',
        iconClass: 'grade'
      }, {
        iconName: 'gradient',
        iconClass: 'gradient'
      }, {
        iconName: 'grain',
        iconClass: 'grain'
      }, {
        iconName: 'graphic_eq',
        iconClass: 'graphic_eq'
      }, {
        iconName: 'grid_off',
        iconClass: 'grid_off'
      }, {
        iconName: 'grid_on',
        iconClass: 'grid_on'
      }, {
        iconName: 'group',
        iconClass: 'group'
      }, {
        iconName: 'group_add',
        iconClass: 'group_add'
      }, {
        iconName: 'group_work',
        iconClass: 'group_work'
      }, {
        iconName: 'hd',
        iconClass: 'hd'
      }, {
        iconName: 'hdr_off',
        iconClass: 'hdr_off'
      }, {
        iconName: 'hdr_on',
        iconClass: 'hdr_on'
      }, {
        iconName: 'hdr_strong',
        iconClass: 'hdr_strong'
      }, {
        iconName: 'hdr_weak',
        iconClass: 'hdr_weak'
      }, {
        iconName: 'headset',
        iconClass: 'headset'
      }, {
        iconName: 'headset_mic',
        iconClass: 'headset_mic'
      }, {
        iconName: 'healing',
        iconClass: 'healing'
      }, {
        iconName: 'hearing',
        iconClass: 'hearing'
      }, {
        iconName: 'help',
        iconClass: 'help'
      }, {
        iconName: 'help_outline',
        iconClass: 'help_outline'
      }, {
        iconName: 'high_quality',
        iconClass: 'high_quality'
      }, {
        iconName: 'highlight',
        iconClass: 'highlight'
      }, {
        iconName: 'highlight_off',
        iconClass: 'highlight_off'
      }, {
        iconName: 'history',
        iconClass: 'history'
      }, {
        iconName: 'home',
        iconClass: 'home'
      }, {
        iconName: 'hot_tub',
        iconClass: 'hot_tub'
      }, {
        iconName: 'hotel',
        iconClass: 'hotel'
      }, {
        iconName: 'hourglass_empty',
        iconClass: 'hourglass_empty'
      }, {
        iconName: 'hourglass_full',
        iconClass: 'hourglass_full'
      }, {
        iconName: 'http',
        iconClass: 'http'
      }, {
        iconName: 'https',
        iconClass: 'https'
      }, {
        iconName: 'image',
        iconClass: 'image'
      }, {
        iconName: 'image_aspect_ratio',
        iconClass: 'image_aspect_ratio'
      }, {
        iconName: 'import_contacts',
        iconClass: 'import_contacts'
      }, {
        iconName: 'import_export',
        iconClass: 'import_export'
      }, {
        iconName: 'important_devices',
        iconClass: 'important_devices'
      }, {
        iconName: 'inbox',
        iconClass: 'inbox'
      }, {
        iconName: 'indeterminate_check_box',
        iconClass: 'indeterminate_check_box'
      }, {
        iconName: 'info',
        iconClass: 'info'
      }, {
        iconName: 'info_outline',
        iconClass: 'info_outline'
      }, {
        iconName: 'input',
        iconClass: 'input'
      }, {
        iconName: 'insert_chart',
        iconClass: 'insert_chart'
      }, {
        iconName: 'insert_comment',
        iconClass: 'insert_comment'
      }, {
        iconName: 'insert_drive_file',
        iconClass: 'insert_drive_file'
      }, {
        iconName: 'insert_emoticon',
        iconClass: 'insert_emoticon'
      }, {
        iconName: 'insert_invitation',
        iconClass: 'insert_invitation'
      }, {
        iconName: 'insert_link',
        iconClass: 'insert_link'
      }, {
        iconName: 'insert_photo',
        iconClass: 'insert_photo'
      }, {
        iconName: 'invert_colors',
        iconClass: 'invert_colors'
      }, {
        iconName: 'invert_colors_off',
        iconClass: 'invert_colors_off'
      }, {
        iconName: 'iso',
        iconClass: 'iso'
      }, {
        iconName: 'keyboard',
        iconClass: 'keyboard'
      }, {
        iconName: 'keyboard_arrow_down',
        iconClass: 'keyboard_arrow_down'
      }, {
        iconName: 'keyboard_arrow_left',
        iconClass: 'keyboard_arrow_left'
      }, {
        iconName: 'keyboard_arrow_right',
        iconClass: 'keyboard_arrow_right'
      }, {
        iconName: 'keyboard_arrow_up',
        iconClass: 'keyboard_arrow_up'
      }, {
        iconName: 'keyboard_backspace',
        iconClass: 'keyboard_backspace'
      }, {
        iconName: 'keyboard_capslock',
        iconClass: 'keyboard_capslock'
      }, {
        iconName: 'keyboard_hide',
        iconClass: 'keyboard_hide'
      }, {
        iconName: 'keyboard_return',
        iconClass: 'keyboard_return'
      }, {
        iconName: 'keyboard_tab',
        iconClass: 'keyboard_tab'
      }, {
        iconName: 'keyboard_voice',
        iconClass: 'keyboard_voice'
      }, {
        iconName: 'kitchen',
        iconClass: 'kitchen'
      }, {
        iconName: 'label',
        iconClass: 'label'
      }, {
        iconName: 'label_outline',
        iconClass: 'label_outline'
      }, {
        iconName: 'landscape',
        iconClass: 'landscape'
      }, {
        iconName: 'language',
        iconClass: 'language'
      }, {
        iconName: 'laptop',
        iconClass: 'laptop'
      }, {
        iconName: 'laptop_chromebook',
        iconClass: 'laptop_chromebook'
      }, {
        iconName: 'laptop_mac',
        iconClass: 'laptop_mac'
      }, {
        iconName: 'laptop_windows',
        iconClass: 'laptop_windows'
      }, {
        iconName: 'last_page',
        iconClass: 'last_page'
      }, {
        iconName: 'launch',
        iconClass: 'launch'
      }, {
        iconName: 'layers',
        iconClass: 'layers'
      }, {
        iconName: 'layers_clear',
        iconClass: 'layers_clear'
      }, {
        iconName: 'leak_add',
        iconClass: 'leak_add'
      }, {
        iconName: 'leak_remove',
        iconClass: 'leak_remove'
      }, {
        iconName: 'lens',
        iconClass: 'lens'
      }, {
        iconName: 'library_add',
        iconClass: 'library_add'
      }, {
        iconName: 'library_books',
        iconClass: 'library_books'
      }, {
        iconName: 'library_music',
        iconClass: 'library_music'
      }, {
        iconName: 'lightbulb_outline',
        iconClass: 'lightbulb_outline'
      }, {
        iconName: 'line_style',
        iconClass: 'line_style'
      }, {
        iconName: 'line_weight',
        iconClass: 'line_weight'
      }, {
        iconName: 'linear_scale',
        iconClass: 'linear_scale'
      }, {
        iconName: 'link',
        iconClass: 'link'
      }, {
        iconName: 'linked_camera',
        iconClass: 'linked_camera'
      }, {
        iconName: 'list',
        iconClass: 'list'
      }, {
        iconName: 'live_help',
        iconClass: 'live_help'
      }, {
        iconName: 'live_tv',
        iconClass: 'live_tv'
      }, {
        iconName: 'local_activity',
        iconClass: 'local_activity'
      }, {
        iconName: 'local_airport',
        iconClass: 'local_airport'
      }, {
        iconName: 'local_atm',
        iconClass: 'local_atm'
      }, {
        iconName: 'local_bar',
        iconClass: 'local_bar'
      }, {
        iconName: 'local_cafe',
        iconClass: 'local_cafe'
      }, {
        iconName: 'local_car_wash',
        iconClass: 'local_car_wash'
      }, {
        iconName: 'local_convenience_store',
        iconClass: 'local_convenience_store'
      }, {
        iconName: 'local_dining',
        iconClass: 'local_dining'
      }, {
        iconName: 'local_drink',
        iconClass: 'local_drink'
      }, {
        iconName: 'local_florist',
        iconClass: 'local_florist'
      }, {
        iconName: 'local_gas_station',
        iconClass: 'local_gas_station'
      }, {
        iconName: 'local_grocery_store',
        iconClass: 'local_grocery_store'
      }, {
        iconName: 'local_hospital',
        iconClass: 'local_hospital'
      }, {
        iconName: 'local_hotel',
        iconClass: 'local_hotel'
      }, {
        iconName: 'local_laundry_service',
        iconClass: 'local_laundry_service'
      }, {
        iconName: 'local_library',
        iconClass: 'local_library'
      }, {
        iconName: 'local_mall',
        iconClass: 'local_mall'
      }, {
        iconName: 'local_movies',
        iconClass: 'local_movies'
      }, {
        iconName: 'local_offer',
        iconClass: 'local_offer'
      }, {
        iconName: 'local_parking',
        iconClass: 'local_parking'
      }, {
        iconName: 'local_pharmacy',
        iconClass: 'local_pharmacy'
      }, {
        iconName: 'local_phone',
        iconClass: 'local_phone'
      }, {
        iconName: 'local_pizza',
        iconClass: 'local_pizza'
      }, {
        iconName: 'local_play',
        iconClass: 'local_play'
      }, {
        iconName: 'local_post_office',
        iconClass: 'local_post_office'
      }, {
        iconName: 'local_printshop',
        iconClass: 'local_printshop'
      }, {
        iconName: 'local_see',
        iconClass: 'local_see'
      }, {
        iconName: 'local_shipping',
        iconClass: 'local_shipping'
      }, {
        iconName: 'local_taxi',
        iconClass: 'local_taxi'
      }, {
        iconName: 'location_city',
        iconClass: 'location_city'
      }, {
        iconName: 'location_disabled',
        iconClass: 'location_disabled'
      }, {
        iconName: 'location_off',
        iconClass: 'location_off'
      }, {
        iconName: 'location_on',
        iconClass: 'location_on'
      }, {
        iconName: 'location_searching',
        iconClass: 'location_searching'
      }, {
        iconName: 'lock',
        iconClass: 'lock'
      }, {
        iconName: 'lock_open',
        iconClass: 'lock_open'
      }, {
        iconName: 'lock_outline',
        iconClass: 'lock_outline'
      }, {
        iconName: 'looks',
        iconClass: 'looks'
      }, {
        iconName: 'looks_3',
        iconClass: 'looks_3'
      }, {
        iconName: 'looks_4',
        iconClass: 'looks_4'
      }, {
        iconName: 'looks_5',
        iconClass: 'looks_5'
      }, {
        iconName: 'looks_6',
        iconClass: 'looks_6'
      }, {
        iconName: 'looks_one',
        iconClass: 'looks_one'
      }, {
        iconName: 'looks_two',
        iconClass: 'looks_two'
      }, {
        iconName: 'loop',
        iconClass: 'loop'
      }, {
        iconName: 'loupe',
        iconClass: 'loupe'
      }, {
        iconName: 'low_priority',
        iconClass: 'low_priority'
      }, {
        iconName: 'loyalty',
        iconClass: 'loyalty'
      }, {
        iconName: 'mail',
        iconClass: 'mail'
      }, {
        iconName: 'mail_outline',
        iconClass: 'mail_outline'
      }, {
        iconName: 'map',
        iconClass: 'map'
      }, {
        iconName: 'markunread',
        iconClass: 'markunread'
      }, {
        iconName: 'markunread_mailbox',
        iconClass: 'markunread_mailbox'
      }, {
        iconName: 'memory',
        iconClass: 'memory'
      }, {
        iconName: 'menu',
        iconClass: 'menu'
      }, {
        iconName: 'merge_type',
        iconClass: 'merge_type'
      }, {
        iconName: 'message',
        iconClass: 'message'
      }, {
        iconName: 'mic',
        iconClass: 'mic'
      }, {
        iconName: 'mic_none',
        iconClass: 'mic_none'
      }, {
        iconName: 'mic_off',
        iconClass: 'mic_off'
      }, {
        iconName: 'mms',
        iconClass: 'mms'
      }, {
        iconName: 'mode_comment',
        iconClass: 'mode_comment'
      }, {
        iconName: 'mode_edit',
        iconClass: 'mode_edit'
      }, {
        iconName: 'monetization_on',
        iconClass: 'monetization_on'
      }, {
        iconName: 'money_off',
        iconClass: 'money_off'
      }, {
        iconName: 'monochrome_photos',
        iconClass: 'monochrome_photos'
      }, {
        iconName: 'mood',
        iconClass: 'mood'
      }, {
        iconName: 'mood_bad',
        iconClass: 'mood_bad'
      }, {
        iconName: 'more',
        iconClass: 'more'
      }, {
        iconName: 'more_horiz',
        iconClass: 'more_horiz'
      }, {
        iconName: 'more_vert',
        iconClass: 'more_vert'
      }, {
        iconName: 'motorcycle',
        iconClass: 'motorcycle'
      }, {
        iconName: 'mouse',
        iconClass: 'mouse'
      }, {
        iconName: 'move_to_inbox',
        iconClass: 'move_to_inbox'
      }, {
        iconName: 'movie',
        iconClass: 'movie'
      }, {
        iconName: 'movie_creation',
        iconClass: 'movie_creation'
      }, {
        iconName: 'movie_filter',
        iconClass: 'movie_filter'
      }, {
        iconName: 'multiline_chart',
        iconClass: 'multiline_chart'
      }, {
        iconName: 'music_note',
        iconClass: 'music_note'
      }, {
        iconName: 'music_video',
        iconClass: 'music_video'
      }, {
        iconName: 'my_location',
        iconClass: 'my_location'
      }, {
        iconName: 'nature',
        iconClass: 'nature'
      }, {
        iconName: 'nature_people',
        iconClass: 'nature_people'
      }, {
        iconName: 'navigate_before',
        iconClass: 'navigate_before'
      }, {
        iconName: 'navigate_next',
        iconClass: 'navigate_next'
      }, {
        iconName: 'navigation',
        iconClass: 'navigation'
      }, {
        iconName: 'near_me',
        iconClass: 'near_me'
      }, {
        iconName: 'network_cell',
        iconClass: 'network_cell'
      }, {
        iconName: 'network_check',
        iconClass: 'network_check'
      }, {
        iconName: 'network_locked',
        iconClass: 'network_locked'
      }, {
        iconName: 'network_wifi',
        iconClass: 'network_wifi'
      }, {
        iconName: 'new_releases',
        iconClass: 'new_releases'
      }, {
        iconName: 'next_week',
        iconClass: 'next_week'
      }, {
        iconName: 'nfc',
        iconClass: 'nfc'
      }, {
        iconName: 'no_encryption',
        iconClass: 'no_encryption'
      }, {
        iconName: 'no_sim',
        iconClass: 'no_sim'
      }, {
        iconName: 'not_interested',
        iconClass: 'not_interested'
      }, {
        iconName: 'note',
        iconClass: 'note'
      }, {
        iconName: 'note_add',
        iconClass: 'note_add'
      }, {
        iconName: 'notifications',
        iconClass: 'notifications'
      }, {
        iconName: 'notifications_active',
        iconClass: 'notifications_active'
      }, {
        iconName: 'notifications_none',
        iconClass: 'notifications_none'
      }, {
        iconName: 'notifications_off',
        iconClass: 'notifications_off'
      }, {
        iconName: 'notifications_paused',
        iconClass: 'notifications_paused'
      }, {
        iconName: 'offline_pin',
        iconClass: 'offline_pin'
      }, {
        iconName: 'ondemand_video',
        iconClass: 'ondemand_video'
      }, {
        iconName: 'opacity',
        iconClass: 'opacity'
      }, {
        iconName: 'open_in_browser',
        iconClass: 'open_in_browser'
      }, {
        iconName: 'open_in_new',
        iconClass: 'open_in_new'
      }, {
        iconName: 'open_with',
        iconClass: 'open_with'
      }, {
        iconName: 'pages',
        iconClass: 'pages'
      }, {
        iconName: 'pageview',
        iconClass: 'pageview'
      }, {
        iconName: 'palette',
        iconClass: 'palette'
      }, {
        iconName: 'pan_tool',
        iconClass: 'pan_tool'
      }, {
        iconName: 'panorama',
        iconClass: 'panorama'
      }, {
        iconName: 'panorama_fish_eye',
        iconClass: 'panorama_fish_eye'
      }, {
        iconName: 'panorama_horizontal',
        iconClass: 'panorama_horizontal'
      }, {
        iconName: 'panorama_vertical',
        iconClass: 'panorama_vertical'
      }, {
        iconName: 'panorama_wide_angle',
        iconClass: 'panorama_wide_angle'
      }, {
        iconName: 'party_mode',
        iconClass: 'party_mode'
      }, {
        iconName: 'pause',
        iconClass: 'pause'
      }, {
        iconName: 'pause_circle_filled',
        iconClass: 'pause_circle_filled'
      }, {
        iconName: 'pause_circle_outline',
        iconClass: 'pause_circle_outline'
      }, {
        iconName: 'payment',
        iconClass: 'payment'
      }, {
        iconName: 'people',
        iconClass: 'people'
      }, {
        iconName: 'people_outline',
        iconClass: 'people_outline'
      }, {
        iconName: 'perm_camera_mic',
        iconClass: 'perm_camera_mic'
      }, {
        iconName: 'perm_contact_calendar',
        iconClass: 'perm_contact_calendar'
      }, {
        iconName: 'perm_data_setting',
        iconClass: 'perm_data_setting'
      }, {
        iconName: 'perm_device_information',
        iconClass: 'perm_device_information'
      }, {
        iconName: 'perm_identity',
        iconClass: 'perm_identity'
      }, {
        iconName: 'perm_media',
        iconClass: 'perm_media'
      }, {
        iconName: 'perm_phone_msg',
        iconClass: 'perm_phone_msg'
      }, {
        iconName: 'perm_scan_wifi',
        iconClass: 'perm_scan_wifi'
      }, {
        iconName: 'person',
        iconClass: 'person'
      }, {
        iconName: 'person_add',
        iconClass: 'person_add'
      }, {
        iconName: 'person_outline',
        iconClass: 'person_outline'
      }, {
        iconName: 'person_pin',
        iconClass: 'person_pin'
      }, {
        iconName: 'person_pin_circle',
        iconClass: 'person_pin_circle'
      }, {
        iconName: 'personal_video',
        iconClass: 'personal_video'
      }, {
        iconName: 'pets',
        iconClass: 'pets'
      }, {
        iconName: 'phone',
        iconClass: 'phone'
      }, {
        iconName: 'phone_android',
        iconClass: 'phone_android'
      }, {
        iconName: 'phone_bluetooth_speaker',
        iconClass: 'phone_bluetooth_speaker'
      }, {
        iconName: 'phone_forwarded',
        iconClass: 'phone_forwarded'
      }, {
        iconName: 'phone_in_talk',
        iconClass: 'phone_in_talk'
      }, {
        iconName: 'phone_iphone',
        iconClass: 'phone_iphone'
      }, {
        iconName: 'phone_locked',
        iconClass: 'phone_locked'
      }, {
        iconName: 'phone_missed',
        iconClass: 'phone_missed'
      }, {
        iconName: 'phone_paused',
        iconClass: 'phone_paused'
      }, {
        iconName: 'phonelink',
        iconClass: 'phonelink'
      }, {
        iconName: 'phonelink_erase',
        iconClass: 'phonelink_erase'
      }, {
        iconName: 'phonelink_lock',
        iconClass: 'phonelink_lock'
      }, {
        iconName: 'phonelink_off',
        iconClass: 'phonelink_off'
      }, {
        iconName: 'phonelink_ring',
        iconClass: 'phonelink_ring'
      }, {
        iconName: 'phonelink_setup',
        iconClass: 'phonelink_setup'
      }, {
        iconName: 'photo',
        iconClass: 'photo'
      }, {
        iconName: 'photo_album',
        iconClass: 'photo_album'
      }, {
        iconName: 'photo_camera',
        iconClass: 'photo_camera'
      }, {
        iconName: 'photo_filter',
        iconClass: 'photo_filter'
      }, {
        iconName: 'photo_library',
        iconClass: 'photo_library'
      }, {
        iconName: 'photo_size_select_actual',
        iconClass: 'photo_size_select_actual'
      }, {
        iconName: 'photo_size_select_large',
        iconClass: 'photo_size_select_large'
      }, {
        iconName: 'photo_size_select_small',
        iconClass: 'photo_size_select_small'
      }, {
        iconName: 'picture_as_pdf',
        iconClass: 'picture_as_pdf'
      }, {
        iconName: 'picture_in_picture',
        iconClass: 'picture_in_picture'
      }, {
        iconName: 'picture_in_picture_alt',
        iconClass: 'picture_in_picture_alt'
      }, {
        iconName: 'pie_chart',
        iconClass: 'pie_chart'
      }, {
        iconName: 'pie_chart_outlined',
        iconClass: 'pie_chart_outlined'
      }, {
        iconName: 'pin_drop',
        iconClass: 'pin_drop'
      }, {
        iconName: 'place',
        iconClass: 'place'
      }, {
        iconName: 'play_arrow',
        iconClass: 'play_arrow'
      }, {
        iconName: 'play_circle_filled',
        iconClass: 'play_circle_filled'
      }, {
        iconName: 'play_circle_outline',
        iconClass: 'play_circle_outline'
      }, {
        iconName: 'play_for_work',
        iconClass: 'play_for_work'
      }, {
        iconName: 'playlist_add',
        iconClass: 'playlist_add'
      }, {
        iconName: 'playlist_add_check',
        iconClass: 'playlist_add_check'
      }, {
        iconName: 'playlist_play',
        iconClass: 'playlist_play'
      }, {
        iconName: 'plus_one',
        iconClass: 'plus_one'
      }, {
        iconName: 'poll',
        iconClass: 'poll'
      }, {
        iconName: 'polymer',
        iconClass: 'polymer'
      }, {
        iconName: 'pool',
        iconClass: 'pool'
      }, {
        iconName: 'portable_wifi_off',
        iconClass: 'portable_wifi_off'
      }, {
        iconName: 'portrait',
        iconClass: 'portrait'
      }, {
        iconName: 'power',
        iconClass: 'power'
      }, {
        iconName: 'power_input',
        iconClass: 'power_input'
      }, {
        iconName: 'power_settings_new',
        iconClass: 'power_settings_new'
      }, {
        iconName: 'pregnant_woman',
        iconClass: 'pregnant_woman'
      }, {
        iconName: 'present_to_all',
        iconClass: 'present_to_all'
      }, {
        iconName: 'print',
        iconClass: 'print'
      }, {
        iconName: 'priority_high',
        iconClass: 'priority_high'
      }, {
        iconName: 'public',
        iconClass: 'public'
      }, {
        iconName: 'publish',
        iconClass: 'publish'
      }, {
        iconName: 'query_builder',
        iconClass: 'query_builder'
      }, {
        iconName: 'question_answer',
        iconClass: 'question_answer'
      }, {
        iconName: 'queue',
        iconClass: 'queue'
      }, {
        iconName: 'queue_music',
        iconClass: 'queue_music'
      }, {
        iconName: 'queue_play_next',
        iconClass: 'queue_play_next'
      }, {
        iconName: 'radio',
        iconClass: 'radio'
      }, {
        iconName: 'radio_button_checked',
        iconClass: 'radio_button_checked'
      }, {
        iconName: 'radio_button_unchecked',
        iconClass: 'radio_button_unchecked'
      }, {
        iconName: 'rate_review',
        iconClass: 'rate_review'
      }, {
        iconName: 'receipt',
        iconClass: 'receipt'
      }, {
        iconName: 'recent_actors',
        iconClass: 'recent_actors'
      }, {
        iconName: 'record_voice_over',
        iconClass: 'record_voice_over'
      }, {
        iconName: 'redeem',
        iconClass: 'redeem'
      }, {
        iconName: 'redo',
        iconClass: 'redo'
      }, {
        iconName: 'refresh',
        iconClass: 'refresh'
      }, {
        iconName: 'remove',
        iconClass: 'remove'
      }, {
        iconName: 'remove_circle',
        iconClass: 'remove_circle'
      }, {
        iconName: 'remove_circle_outline',
        iconClass: 'remove_circle_outline'
      }, {
        iconName: 'remove_from_queue',
        iconClass: 'remove_from_queue'
      }, {
        iconName: 'remove_red_eye',
        iconClass: 'remove_red_eye'
      }, {
        iconName: 'remove_shopping_cart',
        iconClass: 'remove_shopping_cart'
      }, {
        iconName: 'reorder',
        iconClass: 'reorder'
      }, {
        iconName: 'repeat',
        iconClass: 'repeat'
      }, {
        iconName: 'repeat_one',
        iconClass: 'repeat_one'
      }, {
        iconName: 'replay',
        iconClass: 'replay'
      }, {
        iconName: 'replay_10',
        iconClass: 'replay_10'
      }, {
        iconName: 'replay_30',
        iconClass: 'replay_30'
      }, {
        iconName: 'replay_5',
        iconClass: 'replay_5'
      }, {
        iconName: 'reply',
        iconClass: 'reply'
      }, {
        iconName: 'reply_all',
        iconClass: 'reply_all'
      }, {
        iconName: 'report',
        iconClass: 'report'
      }, {
        iconName: 'report_problem',
        iconClass: 'report_problem'
      }, {
        iconName: 'restaurant',
        iconClass: 'restaurant'
      }, {
        iconName: 'restaurant_menu',
        iconClass: 'restaurant_menu'
      }, {
        iconName: 'restore',
        iconClass: 'restore'
      }, {
        iconName: 'restore_page',
        iconClass: 'restore_page'
      }, {
        iconName: 'ring_volume',
        iconClass: 'ring_volume'
      }, {
        iconName: 'room',
        iconClass: 'room'
      }, {
        iconName: 'room_service',
        iconClass: 'room_service'
      }, {
        iconName: 'rotate_90_degrees_ccw',
        iconClass: 'rotate_90_degrees_ccw'
      }, {
        iconName: 'rotate_left',
        iconClass: 'rotate_left'
      }, {
        iconName: 'rotate_right',
        iconClass: 'rotate_right'
      }, {
        iconName: 'rounded_corner',
        iconClass: 'rounded_corner'
      }, {
        iconName: 'router',
        iconClass: 'router'
      }, {
        iconName: 'rowing',
        iconClass: 'rowing'
      }, {
        iconName: 'rss_feed',
        iconClass: 'rss_feed'
      }, {
        iconName: 'rv_hookup',
        iconClass: 'rv_hookup'
      }, {
        iconName: 'satellite',
        iconClass: 'satellite'
      }, {
        iconName: 'save',
        iconClass: 'save'
      }, {
        iconName: 'scanner',
        iconClass: 'scanner'
      }, {
        iconName: 'schedule',
        iconClass: 'schedule'
      }, {
        iconName: 'school',
        iconClass: 'school'
      }, {
        iconName: 'screen_lock_landscape',
        iconClass: 'screen_lock_landscape'
      }, {
        iconName: 'screen_lock_portrait',
        iconClass: 'screen_lock_portrait'
      }, {
        iconName: 'screen_lock_rotation',
        iconClass: 'screen_lock_rotation'
      }, {
        iconName: 'screen_rotation',
        iconClass: 'screen_rotation'
      }, {
        iconName: 'screen_share',
        iconClass: 'screen_share'
      }, {
        iconName: 'sd_card',
        iconClass: 'sd_card'
      }, {
        iconName: 'sd_storage',
        iconClass: 'sd_storage'
      }, {
        iconName: 'search',
        iconClass: 'search'
      }, {
        iconName: 'security',
        iconClass: 'security'
      }, {
        iconName: 'select_all',
        iconClass: 'select_all'
      }, {
        iconName: 'send',
        iconClass: 'send'
      }, {
        iconName: 'sentiment_dissatisfied',
        iconClass: 'sentiment_dissatisfied'
      }, {
        iconName: 'sentiment_neutral',
        iconClass: 'sentiment_neutral'
      }, {
        iconName: 'sentiment_satisfied',
        iconClass: 'sentiment_satisfied'
      }, {
        iconName: 'sentiment_very_dissatisfied',
        iconClass: 'sentiment_very_dissatisfied'
      }, {
        iconName: 'sentiment_very_satisfied',
        iconClass: 'sentiment_very_satisfied'
      }, {
        iconName: 'settings',
        iconClass: 'settings'
      }, {
        iconName: 'settings_applications',
        iconClass: 'settings_applications'
      }, {
        iconName: 'settings_backup_restore',
        iconClass: 'settings_backup_restore'
      }, {
        iconName: 'settings_bluetooth',
        iconClass: 'settings_bluetooth'
      }, {
        iconName: 'settings_brightness',
        iconClass: 'settings_brightness'
      }, {
        iconName: 'settings_cell',
        iconClass: 'settings_cell'
      }, {
        iconName: 'settings_ethernet',
        iconClass: 'settings_ethernet'
      }, {
        iconName: 'settings_input_antenna',
        iconClass: 'settings_input_antenna'
      }, {
        iconName: 'settings_input_component',
        iconClass: 'settings_input_component'
      }, {
        iconName: 'settings_input_composite',
        iconClass: 'settings_input_composite'
      }, {
        iconName: 'settings_input_hdmi',
        iconClass: 'settings_input_hdmi'
      }, {
        iconName: 'settings_input_svideo',
        iconClass: 'settings_input_svideo'
      }, {
        iconName: 'settings_overscan',
        iconClass: 'settings_overscan'
      }, {
        iconName: 'settings_phone',
        iconClass: 'settings_phone'
      }, {
        iconName: 'settings_power',
        iconClass: 'settings_power'
      }, {
        iconName: 'settings_remote',
        iconClass: 'settings_remote'
      }, {
        iconName: 'settings_system_daydream',
        iconClass: 'settings_system_daydream'
      }, {
        iconName: 'settings_voice',
        iconClass: 'settings_voice'
      }, {
        iconName: 'share',
        iconClass: 'share'
      }, {
        iconName: 'shop',
        iconClass: 'shop'
      }, {
        iconName: 'shop_two',
        iconClass: 'shop_two'
      }, {
        iconName: 'shopping_basket',
        iconClass: 'shopping_basket'
      }, {
        iconName: 'shopping_cart',
        iconClass: 'shopping_cart'
      }, {
        iconName: 'short_text',
        iconClass: 'short_text'
      }, {
        iconName: 'show_chart',
        iconClass: 'show_chart'
      }, {
        iconName: 'shuffle',
        iconClass: 'shuffle'
      }, {
        iconName: 'signal_cellular_4_bar',
        iconClass: 'signal_cellular_4_bar'
      }, {
        iconName: 'signal_cellular_connected_no_internet_4_bar',
        iconClass: 'signal_cellular_connected_no_internet_4_bar'
      }, {
        iconName: 'signal_cellular_no_sim',
        iconClass: 'signal_cellular_no_sim'
      }, {
        iconName: 'signal_cellular_null',
        iconClass: 'signal_cellular_null'
      }, {
        iconName: 'signal_cellular_off',
        iconClass: 'signal_cellular_off'
      }, {
        iconName: 'signal_wifi_4_bar',
        iconClass: 'signal_wifi_4_bar'
      }, {
        iconName: 'signal_wifi_4_bar_lock',
        iconClass: 'signal_wifi_4_bar_lock'
      }, {
        iconName: 'signal_wifi_off',
        iconClass: 'signal_wifi_off'
      }, {
        iconName: 'sim_card',
        iconClass: 'sim_card'
      }, {
        iconName: 'sim_card_alert',
        iconClass: 'sim_card_alert'
      }, {
        iconName: 'skip_next',
        iconClass: 'skip_next'
      }, {
        iconName: 'skip_previous',
        iconClass: 'skip_previous'
      }, {
        iconName: 'slideshow',
        iconClass: 'slideshow'
      }, {
        iconName: 'slow_motion_video',
        iconClass: 'slow_motion_video'
      }, {
        iconName: 'smartphone',
        iconClass: 'smartphone'
      }, {
        iconName: 'smoke_free',
        iconClass: 'smoke_free'
      }, {
        iconName: 'smoking_rooms',
        iconClass: 'smoking_rooms'
      }, {
        iconName: 'sms',
        iconClass: 'sms'
      }, {
        iconName: 'sms_failed',
        iconClass: 'sms_failed'
      }, {
        iconName: 'snooze',
        iconClass: 'snooze'
      }, {
        iconName: 'sort',
        iconClass: 'sort'
      }, {
        iconName: 'sort_by_alpha',
        iconClass: 'sort_by_alpha'
      }, {
        iconName: 'spa',
        iconClass: 'spa'
      }, {
        iconName: 'space_bar',
        iconClass: 'space_bar'
      }, {
        iconName: 'speaker',
        iconClass: 'speaker'
      }, {
        iconName: 'speaker_group',
        iconClass: 'speaker_group'
      }, {
        iconName: 'speaker_notes',
        iconClass: 'speaker_notes'
      }, {
        iconName: 'speaker_notes_off',
        iconClass: 'speaker_notes_off'
      }, {
        iconName: 'speaker_phone',
        iconClass: 'speaker_phone'
      }, {
        iconName: 'spellcheck',
        iconClass: 'spellcheck'
      }, {
        iconName: 'star',
        iconClass: 'star'
      }, {
        iconName: 'star_border',
        iconClass: 'star_border'
      }, {
        iconName: 'star_half',
        iconClass: 'star_half'
      }, {
        iconName: 'stars',
        iconClass: 'stars'
      }, {
        iconName: 'stay_current_landscape',
        iconClass: 'stay_current_landscape'
      }, {
        iconName: 'stay_current_portrait',
        iconClass: 'stay_current_portrait'
      }, {
        iconName: 'stay_primary_landscape',
        iconClass: 'stay_primary_landscape'
      }, {
        iconName: 'stay_primary_portrait',
        iconClass: 'stay_primary_portrait'
      }, {
        iconName: 'stop',
        iconClass: 'stop'
      }, {
        iconName: 'stop_screen_share',
        iconClass: 'stop_screen_share'
      }, {
        iconName: 'storage',
        iconClass: 'storage'
      }, {
        iconName: 'store',
        iconClass: 'store'
      }, {
        iconName: 'store_mall_directory',
        iconClass: 'store_mall_directory'
      }, {
        iconName: 'straighten',
        iconClass: 'straighten'
      }, {
        iconName: 'streetview',
        iconClass: 'streetview'
      }, {
        iconName: 'strikethrough_s',
        iconClass: 'strikethrough_s'
      }, {
        iconName: 'style',
        iconClass: 'style'
      }, {
        iconName: 'subdirectory_arrow_left',
        iconClass: 'subdirectory_arrow_left'
      }, {
        iconName: 'subdirectory_arrow_right',
        iconClass: 'subdirectory_arrow_right'
      }, {
        iconName: 'subject',
        iconClass: 'subject'
      }, {
        iconName: 'subscriptions',
        iconClass: 'subscriptions'
      }, {
        iconName: 'subtitles',
        iconClass: 'subtitles'
      }, {
        iconName: 'subway',
        iconClass: 'subway'
      }, {
        iconName: 'supervisor_account',
        iconClass: 'supervisor_account'
      }, {
        iconName: 'surround_sound',
        iconClass: 'surround_sound'
      }, {
        iconName: 'swap_calls',
        iconClass: 'swap_calls'
      }, {
        iconName: 'swap_horiz',
        iconClass: 'swap_horiz'
      }, {
        iconName: 'swap_vert',
        iconClass: 'swap_vert'
      }, {
        iconName: 'swap_vertical_circle',
        iconClass: 'swap_vertical_circle'
      }, {
        iconName: 'switch_camera',
        iconClass: 'switch_camera'
      }, {
        iconName: 'switch_video',
        iconClass: 'switch_video'
      }, {
        iconName: 'sync',
        iconClass: 'sync'
      }, {
        iconName: 'sync_disabled',
        iconClass: 'sync_disabled'
      }, {
        iconName: 'sync_problem',
        iconClass: 'sync_problem'
      }, {
        iconName: 'system_update',
        iconClass: 'system_update'
      }, {
        iconName: 'system_update_alt',
        iconClass: 'system_update_alt'
      }, {
        iconName: 'tab',
        iconClass: 'tab'
      }, {
        iconName: 'tab_unselected',
        iconClass: 'tab_unselected'
      }, {
        iconName: 'tablet',
        iconClass: 'tablet'
      }, {
        iconName: 'tablet_android',
        iconClass: 'tablet_android'
      }, {
        iconName: 'tablet_mac',
        iconClass: 'tablet_mac'
      }, {
        iconName: 'tag_faces',
        iconClass: 'tag_faces'
      }, {
        iconName: 'tap_and_play',
        iconClass: 'tap_and_play'
      }, {
        iconName: 'terrain',
        iconClass: 'terrain'
      }, {
        iconName: 'text_fields',
        iconClass: 'text_fields'
      }, {
        iconName: 'text_format',
        iconClass: 'text_format'
      }, {
        iconName: 'textsms',
        iconClass: 'textsms'
      }, {
        iconName: 'texture',
        iconClass: 'texture'
      }, {
        iconName: 'theaters',
        iconClass: 'theaters'
      }, {
        iconName: 'thumb_down',
        iconClass: 'thumb_down'
      }, {
        iconName: 'thumb_up',
        iconClass: 'thumb_up'
      }, {
        iconName: 'thumbs_up_down',
        iconClass: 'thumbs_up_down'
      }, {
        iconName: 'time_to_leave',
        iconClass: 'time_to_leave'
      }, {
        iconName: 'timelapse',
        iconClass: 'timelapse'
      }, {
        iconName: 'timeline',
        iconClass: 'timeline'
      }, {
        iconName: 'timer',
        iconClass: 'timer'
      }, {
        iconName: 'timer_10',
        iconClass: 'timer_10'
      }, {
        iconName: 'timer_3',
        iconClass: 'timer_3'
      }, {
        iconName: 'timer_off',
        iconClass: 'timer_off'
      }, {
        iconName: 'title',
        iconClass: 'title'
      }, {
        iconName: 'toc',
        iconClass: 'toc'
      }, {
        iconName: 'today',
        iconClass: 'today'
      }, {
        iconName: 'toll',
        iconClass: 'toll'
      }, {
        iconName: 'tonality',
        iconClass: 'tonality'
      }, {
        iconName: 'touch_app',
        iconClass: 'touch_app'
      }, {
        iconName: 'toys',
        iconClass: 'toys'
      }, {
        iconName: 'track_changes',
        iconClass: 'track_changes'
      }, {
        iconName: 'traffic',
        iconClass: 'traffic'
      }, {
        iconName: 'train',
        iconClass: 'train'
      }, {
        iconName: 'tram',
        iconClass: 'tram'
      }, {
        iconName: 'transfer_within_a_station',
        iconClass: 'transfer_within_a_station'
      }, {
        iconName: 'transform',
        iconClass: 'transform'
      }, {
        iconName: 'translate',
        iconClass: 'translate'
      }, {
        iconName: 'trending_down',
        iconClass: 'trending_down'
      }, {
        iconName: 'trending_flat',
        iconClass: 'trending_flat'
      }, {
        iconName: 'trending_up',
        iconClass: 'trending_up'
      }, {
        iconName: 'tune',
        iconClass: 'tune'
      }, {
        iconName: 'turned_in',
        iconClass: 'turned_in'
      }, {
        iconName: 'turned_in_not',
        iconClass: 'turned_in_not'
      }, {
        iconName: 'tv',
        iconClass: 'tv'
      }, {
        iconName: 'unarchive',
        iconClass: 'unarchive'
      }, {
        iconName: 'undo',
        iconClass: 'undo'
      }, {
        iconName: 'unfold_less',
        iconClass: 'unfold_less'
      }, {
        iconName: 'unfold_more',
        iconClass: 'unfold_more'
      }, {
        iconName: 'update',
        iconClass: 'update'
      }, {
        iconName: 'usb',
        iconClass: 'usb'
      }, {
        iconName: 'verified_user',
        iconClass: 'verified_user'
      }, {
        iconName: 'vertical_align_bottom',
        iconClass: 'vertical_align_bottom'
      }, {
        iconName: 'vertical_align_center',
        iconClass: 'vertical_align_center'
      }, {
        iconName: 'vertical_align_top',
        iconClass: 'vertical_align_top'
      }, {
        iconName: 'vibration',
        iconClass: 'vibration'
      }, {
        iconName: 'video_call',
        iconClass: 'video_call'
      }, {
        iconName: 'video_label',
        iconClass: 'video_label'
      }, {
        iconName: 'video_library',
        iconClass: 'video_library'
      }, {
        iconName: 'videocam',
        iconClass: 'videocam'
      }, {
        iconName: 'videocam_off',
        iconClass: 'videocam_off'
      }, {
        iconName: 'videogame_asset',
        iconClass: 'videogame_asset'
      }, {
        iconName: 'view_agenda',
        iconClass: 'view_agenda'
      }, {
        iconName: 'view_array',
        iconClass: 'view_array'
      }, {
        iconName: 'view_carousel',
        iconClass: 'view_carousel'
      }, {
        iconName: 'view_column',
        iconClass: 'view_column'
      }, {
        iconName: 'view_comfy',
        iconClass: 'view_comfy'
      }, {
        iconName: 'view_compact',
        iconClass: 'view_compact'
      }, {
        iconName: 'view_day',
        iconClass: 'view_day'
      }, {
        iconName: 'view_headline',
        iconClass: 'view_headline'
      }, {
        iconName: 'view_list',
        iconClass: 'view_list'
      }, {
        iconName: 'view_module',
        iconClass: 'view_module'
      }, {
        iconName: 'view_quilt',
        iconClass: 'view_quilt'
      }, {
        iconName: 'view_stream',
        iconClass: 'view_stream'
      }, {
        iconName: 'view_week',
        iconClass: 'view_week'
      }, {
        iconName: 'vignette',
        iconClass: 'vignette'
      }, {
        iconName: 'visibility',
        iconClass: 'visibility'
      }, {
        iconName: 'visibility_off',
        iconClass: 'visibility_off'
      }, {
        iconName: 'voice_chat',
        iconClass: 'voice_chat'
      }, {
        iconName: 'voicemail',
        iconClass: 'voicemail'
      }, {
        iconName: 'volume_down',
        iconClass: 'volume_down'
      }, {
        iconName: 'volume_mute',
        iconClass: 'volume_mute'
      }, {
        iconName: 'volume_off',
        iconClass: 'volume_off'
      }, {
        iconName: 'volume_up',
        iconClass: 'volume_up'
      }, {
        iconName: 'vpn_key',
        iconClass: 'vpn_key'
      }, {
        iconName: 'vpn_lock',
        iconClass: 'vpn_lock'
      }, {
        iconName: 'wallpaper',
        iconClass: 'wallpaper'
      }, {
        iconName: 'warning',
        iconClass: 'warning'
      }, {
        iconName: 'watch',
        iconClass: 'watch'
      }, {
        iconName: 'watch_later',
        iconClass: 'watch_later'
      }, {
        iconName: 'wb_auto',
        iconClass: 'wb_auto'
      }, {
        iconName: 'wb_cloudy',
        iconClass: 'wb_cloudy'
      }, {
        iconName: 'wb_incandescent',
        iconClass: 'wb_incandescent'
      }, {
        iconName: 'wb_iridescent',
        iconClass: 'wb_iridescent'
      }, {
        iconName: 'wb_sunny',
        iconClass: 'wb_sunny'
      }, {
        iconName: 'wc',
        iconClass: 'wc'
      }, {
        iconName: 'web',
        iconClass: 'web'
      }, {
        iconName: 'web_asset',
        iconClass: 'web_asset'
      }, {
        iconName: 'weekend',
        iconClass: 'weekend'
      }, {
        iconName: 'whatshot',
        iconClass: 'whatshot'
      }, {
        iconName: 'widgets',
        iconClass: 'widgets'
      }, {
        iconName: 'wifi',
        iconClass: 'wifi'
      }, {
        iconName: 'wifi_lock',
        iconClass: 'wifi_lock'
      }, {
        iconName: 'wifi_tethering',
        iconClass: 'wifi_tethering'
      }, {
        iconName: 'work',
        iconClass: 'work'
      }, {
        iconName: 'wrap_text',
        iconClass: 'wrap_text'
      }, {
        iconName: 'youtube_searched_for',
        iconClass: 'youtube_searched_for'
      }, {
        iconName: 'zoom_in',
        iconClass: 'zoom_in'
      }, {
        iconName: 'zoom_out',
        iconClass: 'zoom_out'
      }, {
        iconName: 'zoom_out_map',
        iconClass: 'zoom_out_map'
      }];
      /***/
    },

    /***/
    18950:
    /*!***************************************!*\
      !*** ./src/app/pages/pages.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PagesModule": function PagesModule() {
          return (
            /* binding */
            _PagesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _demo_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../demo-material-module */
      55408);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _pages_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages.routing */
      63360);
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);
      /* harmony import */


      var _material_icons_mat_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./material-icons/mat-icon.component */
      6094);
      /* harmony import */


      var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./timeline/timeline.component */
      21165);
      /* harmony import */


      var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./invoice/invoice.component */
      91046);
      /* harmony import */


      var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pricing/pricing.component */
      45761);
      /* harmony import */


      var _helper_classes_helper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./helper-classes/helper.component */
      43436);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PagesModule = function _PagesModule() {
        _classCallCheck(this, _PagesModule);
      };

      _PagesModule.ɵfac = function PagesModule_Factory(t) {
        return new (t || _PagesModule)();
      };

      _PagesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _PagesModule
      });
      _PagesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_1__.PagesRoutes), _demo_material_module__WEBPACK_IMPORTED_MODULE_0__.DemoMaterialModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__.NgxDatatableModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_PagesModule, {
          declarations: [_material_icons_mat_icon_component__WEBPACK_IMPORTED_MODULE_2__.MatIconComponent, _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__.TimelineComponent, _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_4__.InvoiceComponent, _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__.PricingComponent, _helper_classes_helper_component__WEBPACK_IMPORTED_MODULE_6__.HelperComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _demo_material_module__WEBPACK_IMPORTED_MODULE_0__.DemoMaterialModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__.NgxDatatableModule]
        });
      })();
      /***/

    },

    /***/
    63360:
    /*!****************************************!*\
      !*** ./src/app/pages/pages.routing.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PagesRoutes": function PagesRoutes() {
          return (
            /* binding */
            _PagesRoutes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _material_icons_mat_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./material-icons/mat-icon.component */
      6094);
      /* harmony import */


      var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./timeline/timeline.component */
      21165);
      /* harmony import */


      var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./invoice/invoice.component */
      91046);
      /* harmony import */


      var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pricing/pricing.component */
      45761);
      /* harmony import */


      var _helper_classes_helper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./helper-classes/helper.component */
      43436);

      var _PagesRoutes = [{
        path: '',
        children: [{
          path: 'icons',
          component: _material_icons_mat_icon_component__WEBPACK_IMPORTED_MODULE_0__.MatIconComponent
        }, {
          path: 'timeline',
          component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__.TimelineComponent
        }, {
          path: 'invoice',
          component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_2__.InvoiceComponent
        }, {
          path: 'pricing',
          component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_3__.PricingComponent
        }, {
          path: 'helper',
          component: _helper_classes_helper_component__WEBPACK_IMPORTED_MODULE_4__.HelperComponent
        }]
      }];
      /***/
    },

    /***/
    45761:
    /*!****************************************************!*\
      !*** ./src/app/pages/pricing/pricing.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PricingComponent": function PricingComponent() {
          return (
            /* binding */
            _PricingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      93738);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      77746);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      51095);

      var _PricingComponent = /*#__PURE__*/function () {
        function _PricingComponent() {
          _classCallCheck(this, _PricingComponent);
        }

        _createClass(_PricingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PricingComponent;
      }();

      _PricingComponent.ɵfac = function PricingComponent_Factory(t) {
        return new (t || _PricingComponent)();
      };

      _PricingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _PricingComponent,
        selectors: [["app-pricing"]],
        decls: 89,
        vars: 0,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap", "fxLayoutAlign", "center start", 1, "pricing-box"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], [1, "card-group", "text-center"], [1, "pricing-plan"], [1, "mat-text-primary"], [1, "price-listing"], ["mat-raised-button", "", "color", "primary"], [1, "pricing-plan", "popular-plan"], [1, "pop-tag"], ["mat-raised-button", "", "color", "warn"]],
        template: function PricingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Silver");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "sup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-subtitle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "per month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "3 Members");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Single Device");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "50GB Storage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Monthly Backups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Choose Plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Gold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "sup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "34");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-subtitle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "per month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-list", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "5 Members");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Single Device");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "80GB Storage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Monthly Backups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Choose Plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Popular");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Platinum");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "sup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "45");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card-subtitle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "per month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-list", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "10 Members");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Single Device");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "120GB Storage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Monthly Backups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Choose Plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Dimond");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "sup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "54");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-card-subtitle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "per month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-list", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "15 Members");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Single Device");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "1TB Storage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Monthly Backups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Choose Plan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton],
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\");\n\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.mat-option[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-option[_ngcontent-%COMP%]:hover:not(.mat-option-disabled), .mat-option[_ngcontent-%COMP%]:focus:not(.mat-option-disabled) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple):not(.mat-option-disabled) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-option.mat-active[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.04);\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-option.mat-option-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #1e88e5;\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #3f51b5;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #e91e63;\n}\n.mat-optgroup-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-optgroup-disabled[_ngcontent-%COMP%]   .mat-optgroup-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-pseudo-checkbox[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-pseudo-checkbox[_ngcontent-%COMP%]::after {\n  color: #fafafa;\n}\n.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #1e88e5;\n}\n.mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #3f51b5;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #e91e63;\n}\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%] {\n  background: #b0b0b0;\n}\n.mat-app-background[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-elevation-z0[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z1[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z2[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z3[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z4[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z5[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z6[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z7[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z9[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z10[_ngcontent-%COMP%] {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z11[_ngcontent-%COMP%] {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z12[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z13[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z14[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z15[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z16[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z17[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z18[_ngcontent-%COMP%] {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z19[_ngcontent-%COMP%] {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z20[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z21[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z22[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z23[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z24[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n.mat-theme-loaded-marker[_ngcontent-%COMP%] {\n  display: none;\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%] {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover) {\n  background: white;\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-badge-content[_ngcontent-%COMP%] {\n  color: white;\n  background: #1e88e5;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  outline: solid 1px;\n  border-radius: 0;\n}\n.mat-badge-accent[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  background: #3f51b5;\n  color: white;\n}\n.mat-badge-warn[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  color: white;\n  background: #e91e63;\n}\n.mat-badge[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-badge-hidden[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  display: none;\n}\n.mat-badge-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  background: #b9b9b9;\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-badge-content[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: transform 200ms ease-in-out;\n  transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none;\n}\n.ng-animate-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%], .mat-badge-content._mat-animation-noopable[_ngcontent-%COMP%] {\n  transition: none;\n}\n.mat-badge-content.mat-badge-active[_ngcontent-%COMP%] {\n  transform: none;\n}\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n}\n.mat-badge-small.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -8px;\n}\n.mat-badge-small.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -8px;\n}\n.mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -16px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -16px;\n}\n.mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -16px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -16px;\n}\n.mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -8px;\n}\n.mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -8px;\n}\n.mat-badge-medium[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n}\n.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -11px;\n}\n.mat-badge-medium.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -11px;\n}\n.mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -22px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -22px;\n}\n.mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -22px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -22px;\n}\n.mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -11px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -11px;\n}\n.mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -11px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -11px;\n}\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n}\n.mat-badge-large.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -14px;\n}\n.mat-badge-large.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -14px;\n}\n.mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -28px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -28px;\n}\n.mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -28px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -28px;\n}\n.mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -14px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -14px;\n}\n.mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -14px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -14px;\n}\n.mat-bottom-sheet-container[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%] {\n  color: inherit;\n  background: transparent;\n}\n.mat-button.mat-primary[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-button.mat-accent[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-button.mat-warn[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.mat-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  opacity: 0.1;\n  background-color: currentColor;\n}\n.mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background: black;\n}\n.mat-stroked-button[_ngcontent-%COMP%]:not(.mat-button-disabled) {\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.mat-flat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white;\n}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-flat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-flat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-stroked-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-flat-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-fab[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-fab.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-standalone[_ngcontent-%COMP%], .mat-button-toggle-group[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.mat-button-toggle[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-button-toggle[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  background: white;\n}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n  border-top: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-button-toggle-checked.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-button-toggle-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n  background-color: #eeeeee;\n}\n.mat-button-toggle-disabled.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-button-toggle-disabled.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #bdbdbd;\n}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%] {\n  border: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-label-content[_ngcontent-%COMP%] {\n  line-height: 48px;\n}\n.mat-card[_ngcontent-%COMP%] {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-card.mat-card-flat[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox-frame[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox-checkmark[_ngcontent-%COMP%] {\n  fill: #fafafa;\n}\n.mat-checkbox-checkmark-path[_ngcontent-%COMP%] {\n  stroke: #fafafa !important;\n}\n.mat-checkbox-mixedmark[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n}\n.mat-checkbox-indeterminate.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-checkbox-indeterminate.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-checkbox-disabled.mat-checkbox-checked[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-disabled.mat-checkbox-indeterminate[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #b0b0b0;\n}\n.mat-checkbox-disabled[_ngcontent-%COMP%]:not(.mat-checkbox-checked)   .mat-checkbox-frame[_ngcontent-%COMP%] {\n  border-color: #b0b0b0;\n}\n.mat-checkbox-disabled[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #1e88e5;\n}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #3f51b5;\n}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #e91e63;\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled):active {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled)   .mat-chip-remove[_ngcontent-%COMP%]:hover {\n  opacity: 0.54;\n}\n.mat-chip.mat-standard-chip.mat-chip-disabled[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]::after {\n  background: black;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n  color: white;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: white;\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n  color: white;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: white;\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: white;\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-table[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], [mat-header-row][_ngcontent-%COMP%], [mat-row][_ngcontent-%COMP%], [mat-footer-row][_ngcontent-%COMP%], .mat-table-sticky[_ngcontent-%COMP%] {\n  background: inherit;\n}\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-calendar-arrow[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.54);\n}\n.mat-datepicker-toggle[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-next-button[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-previous-button[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-calendar-table-header[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-table-header-divider[_ngcontent-%COMP%]::after {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-calendar-body-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-calendar-body-cell-content[_ngcontent-%COMP%], .mat-date-range-input-separator[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent;\n}\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-date-range-input-separator[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-body-in-preview[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.24);\n}\n.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: rgba(0, 0, 0, 0.18);\n}\n.mat-calendar-body-in-range[_ngcontent-%COMP%]::before {\n  background: rgba(30, 136, 229, 0.2);\n}\n.mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n.mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to right, rgba(30, 136, 229, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to left, rgba(30, 136, 229, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-calendar-body-in-range[_ngcontent-%COMP%]    > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after {\n  background: #a8dab5;\n}\n.mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background: #46a35e;\n}\n.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n  color: white;\n}\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(30, 136, 229, 0.4);\n}\n.mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px white;\n}\n.mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: rgba(30, 136, 229, 0.3);\n}\n.mat-datepicker-content[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]::before {\n  background: rgba(63, 81, 181, 0.2);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to right, rgba(63, 81, 181, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to left, rgba(63, 81, 181, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]    > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after {\n  background: #a8dab5;\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background: #46a35e;\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(63, 81, 181, 0.4);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px white;\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: rgba(63, 81, 181, 0.3);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]::before {\n  background: rgba(233, 30, 99, 0.2);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to right, rgba(233, 30, 99, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to left, rgba(233, 30, 99, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]    > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after {\n  background: #a8dab5;\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background: #46a35e;\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n  color: white;\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(233, 30, 99, 0.4);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px white;\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: rgba(233, 30, 99, 0.3);\n}\n.mat-datepicker-content-touch[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n.mat-datepicker-toggle-active[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-datepicker-toggle-active.mat-accent[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-datepicker-toggle-active.mat-warn[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-date-range-input-inner[disabled][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-dialog-container[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-divider[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-divider-vertical[_ngcontent-%COMP%] {\n  border-right-color: rgba(0, 0, 0, 0.12);\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-action-row[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-keyboard-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-program-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover:not([aria-disabled=true]) {\n  background: rgba(0, 0, 0, 0.04);\n}\n@media (hover: none) {\n  .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded):not([aria-disabled=true])   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n    background: white;\n  }\n}\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-indicator[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: 48px;\n}\n.mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%] {\n  height: 64px;\n}\n.mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mat-hint[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-warn[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-focused[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-warn[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid)   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #1e88e5;\n}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-accent   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #3f51b5;\n}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-warn   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #e91e63;\n}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-error[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-legacy.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n.mat-form-field-appearance-standard[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-standard.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before {\n  background-color: transparent;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.12);\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-form-field-appearance-outline.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-form-field-appearance-outline.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.06);\n}\n.mat-icon.mat-primary[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-icon.mat-accent[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-icon.mat-warn[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field-type-mat-native-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-input-element[_ngcontent-%COMP%]:disabled, .mat-form-field-type-mat-native-select.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #1e88e5;\n}\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]::placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field.mat-accent[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #3f51b5;\n}\n.mat-form-field.mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%], .mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #e91e63;\n}\n.mat-form-field-type-mat-native-select.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #e91e63;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-list-item-disabled[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n}\n.mat-list-option[_ngcontent-%COMP%]:hover, .mat-list-option[_ngcontent-%COMP%]:focus, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-list-single-selected-option[_ngcontent-%COMP%], .mat-list-single-selected-option[_ngcontent-%COMP%]:hover, .mat-list-single-selected-option[_ngcontent-%COMP%]:focus {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-menu-panel[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-menu-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-menu-item[_ngcontent-%COMP%] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-menu-item[disabled][_ngcontent-%COMP%], .mat-menu-item[disabled][_ngcontent-%COMP%]::after, .mat-menu-item[disabled][_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-menu-item[_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%], .mat-menu-item-submenu-trigger[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-menu-item[_ngcontent-%COMP%]:hover:not([disabled]), .mat-menu-item.cdk-program-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item.cdk-keyboard-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item-highlighted[_ngcontent-%COMP%]:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-paginator[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-paginator-decrement[_ngcontent-%COMP%], .mat-paginator-increment[_ngcontent-%COMP%] {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54);\n}\n.mat-paginator-first[_ngcontent-%COMP%], .mat-paginator-last[_ngcontent-%COMP%] {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n}\n.mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-decrement[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-increment[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-first[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-last[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-paginator-container[_ngcontent-%COMP%] {\n  min-height: 56px;\n}\n.mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #c3def5;\n}\n.mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #c3def5;\n}\n.mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #1e88e5;\n}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #cbd0e9;\n}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #cbd0e9;\n}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #3f51b5;\n}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #f6c3d4;\n}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #f6c3d4;\n}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #e91e63;\n}\n.mat-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #1e88e5;\n}\n.mat-progress-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #3f51b5;\n}\n.mat-progress-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #e91e63;\n}\n.mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.54);\n}\n.mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #1e88e5;\n}\n.mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #3f51b5;\n}\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #e91e63;\n}\n.mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-radio-button.mat-radio-disabled.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-label-content[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.mat-select-value[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-select-placeholder[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-select-arrow[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-select-panel[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-select-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-select-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-form-field.mat-focused.mat-primary[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-form-field.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-form-field.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-invalid[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-drawer[_ngcontent-%COMP%] {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-drawer.mat-drawer-push[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side) {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-side[_ngcontent-%COMP%] {\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n  border-right: none;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n  border-right: none;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(63, 81, 181, 0.54);\n}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(30, 136, 229, 0.54);\n}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(233, 30, 99, 0.54);\n}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-slide-toggle[_ngcontent-%COMP%]:not(.mat-checked)   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background-color: #fafafa;\n}\n.mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(30, 136, 229, 0.2);\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(63, 81, 181, 0.2);\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(233, 30, 99, 0.2);\n}\n.mat-slider[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%], .cdk-focused[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-disabled[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-min-value[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing)   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent;\n}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-has-ticks[_ngcontent-%COMP%]   .mat-slider-wrapper[_ngcontent-%COMP%]::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n.mat-slider-horizontal[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%] {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n}\n.mat-slider-vertical[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%] {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n}\n.mat-step-header.cdk-keyboard-focused[_ngcontent-%COMP%], .mat-step-header.cdk-program-focused[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n@media (hover: none) {\n  .mat-step-header[_ngcontent-%COMP%]:hover {\n    background: none;\n  }\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-optional[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.54);\n  color: white;\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n  color: white;\n}\n.mat-step-header.mat-accent[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-step-header.mat-accent[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header.mat-accent[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header.mat-accent[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n}\n.mat-step-header.mat-warn[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-step-header.mat-warn[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header.mat-warn[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header.mat-warn[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n  color: white;\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-error[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #e91e63;\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-active[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-error[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-stepper-vertical-line[_ngcontent-%COMP%]::before {\n  border-left-color: rgba(0, 0, 0, 0.12);\n}\n.mat-horizontal-stepper-header[_ngcontent-%COMP%]::before, .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-horizontal-stepper-header[_ngcontent-%COMP%] {\n  height: 72px;\n}\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%], .mat-vertical-stepper-header[_ngcontent-%COMP%] {\n  padding: 24px 24px;\n}\n.mat-stepper-vertical-line[_ngcontent-%COMP%]::before {\n  top: -16px;\n  bottom: -16px;\n}\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]::before {\n  top: 36px;\n}\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  top: 36px;\n}\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #757575;\n}\n.mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none;\n}\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.87);\n}\n.mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-tab-group[class*=mat-background-][_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar[class*=mat-background-][_ngcontent-%COMP%] {\n  border-bottom: none;\n  border-top: none;\n}\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3);\n}\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-tab-group.mat-primary.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-group.mat-primary.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3);\n}\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-tab-group.mat-accent.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-group.mat-accent.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(248, 187, 208, 0.3);\n}\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-tab-group.mat-warn.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-group.mat-warn.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3);\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before {\n  border-color: white;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before {\n  border-color: white;\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(248, 187, 208, 0.3);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before {\n  border-color: white;\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.mat-toolbar[_ngcontent-%COMP%] {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background: #1e88e5;\n  color: white;\n}\n.mat-toolbar.mat-accent[_ngcontent-%COMP%] {\n  background: #3f51b5;\n  color: white;\n}\n.mat-toolbar.mat-warn[_ngcontent-%COMP%] {\n  background: #e91e63;\n  color: white;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: currentColor;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: currentColor;\n}\n.mat-toolbar-multiple-rows[_ngcontent-%COMP%] {\n  min-height: 64px;\n}\n.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%] {\n  height: 64px;\n}\n@media (max-width: 599px) {\n  .mat-toolbar-multiple-rows[_ngcontent-%COMP%] {\n    min-height: 56px;\n  }\n\n  .mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%] {\n    height: 56px;\n  }\n}\n.mat-tooltip[_ngcontent-%COMP%] {\n  background: rgba(97, 97, 97, 0.9);\n}\n.mat-tree[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-tree-node[_ngcontent-%COMP%] {\n  min-height: 48px;\n}\n.mat-snack-bar-container[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  background: #323232;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-simple-snackbar-action[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n\n\n\n\n\n.pricing-box[_ngcontent-%COMP%] {\n  padding-top: 60px;\n  padding-bottom: 40px;\n}\n.pricing-plan[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.pricing-plan[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 7px 0;\n  font-size: 55px;\n}\n.pricing-plan[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.pricing-plan[_ngcontent-%COMP%]   .price-listing[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-list-item-content[_ngcontent-%COMP%] {\n  padding: 15px 0;\n}\n.pricing-plan[_ngcontent-%COMP%]   .pop-tag[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  border-radius: 4px;\n  background: #1e88e5;\n  position: absolute;\n  top: -13px;\n  color: #ffffff;\n  font-size: 12px;\n  width: 100px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLXRoZW1lLnNjc3MiLCJwcmljaW5nLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUvb3B0aW9uL19vcHRpb24tdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL29wdGlvbi9fb3B0Z3JvdXAtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3NlbGVjdGlvbi9wc2V1ZG8tY2hlY2tib3gvX3BzZXVkby1jaGVja2JveC10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUvX2NvcmUtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL19lbGV2YXRpb24uc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUvX2F1dG9jb21wbGV0ZS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2JhZGdlL19iYWRnZS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Nkay9hMTF5L19pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldC9fYm90dG9tLXNoZWV0LXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uL19idXR0b24tdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL19idXR0b24tdG9nZ2xlLXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZC9fY2FyZC10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94L19jaGVja2JveC10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzL19jaGlwcy10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlL190YWJsZS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXIvX2RhdGVwaWNrZXItdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cvX2RpYWxvZy10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXIvX2RpdmlkZXItdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9leHBhbnNpb24vX2V4cGFuc2lvbi10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvbi9fZXhwYW5zaW9uLW1peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQvX2Zvcm0tZmllbGQtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkL19mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUvc3R5bGUvX2Zvcm0tY29tbW9uLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZC9fZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQvX2Zvcm0tZmllbGQtZmlsbC10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQvX2Zvcm0tZmllbGQtb3V0bGluZS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2ljb24vX2ljb24tdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9pbnB1dC9faW5wdXQtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL192ZW5kb3ItcHJlZml4ZXMuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9saXN0L19saXN0LXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudS9fbWVudS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvci9fcGFnaW5hdG9yLXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyL19wcm9ncmVzcy1iYXItdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyL19wcm9ncmVzcy1zcGlubmVyLXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8vX3JhZGlvLXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0L19zZWxlY3QtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2L19zaWRlbmF2LXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL19zbGlkZS10b2dnbGUtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9zbGlkZXIvX3NsaWRlci10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3N0ZXBwZXIvX3N0ZXBwZXItdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9zb3J0L19zb3J0LXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvdGFicy9fdGFicy10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXIvX3Rvb2xiYXItdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC90b29sdGlwL190b29sdGlwLXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZS9fdHJlZS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhci9fc25hY2stYmFyLXRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU1Esa0ZBQUE7QUFUUjs7Ozs7Q0FBQTtBQWVBLHdCQUFBO0FDSkU7RUFJSSxvQ0FBQTtBQ0xOO0FDR0U7RUFDRSwwQkFBQTtBREFKO0FDRUk7RUFFRSwrQkFBQTtBREROO0FDS0k7RUFDRSwrQkFBQTtBREhOO0FDTUk7RUFDRSwrQkFBQTtFQUNBLDBCQUFBO0FESk47QUNPSTtFQUNFLDBCQUFBO0FETE47QUNTRTtFQUNFLGNBQUE7QUROSjtBQ1NFO0VBQ0UsY0FBQTtBRE5KO0FDU0U7RUFDRSxjQUFBO0FETko7QUU5QkU7RUFDRSwwQkFBQTtBRmlDSjtBRTlCRTtFQUNFLDBCQUFBO0FGaUNKO0FHNUJFO0VBQ0UsMEJBQUE7QUgrQko7QUc3Qkk7RUFDRSxjQUFBO0FIK0JOO0FHM0JFO0VBQ0UsY0FaZTtBSDBDbkI7QUczQkU7O0VBRUUsbUJBQUE7QUg4Qko7QUd0QkU7Ozs7RUFJRSxtQkFBQTtBSHlCSjtBR3RCRTs7RUFFRSxtQkFBQTtBSHlCSjtBR3BCSTs7RUFDRSxtQkF4Q2E7QUhnRW5CO0FJakVFO0VBSUUseUJBQUE7RUFDQSwwQkFBQTtBSmlFSjtBSTFESTtFQ2tJRix3SEFBQTtBTHBFRjtBSTlESTtFQ2tJRix5SEFBQTtBTGhFRjtBSWxFSTtFQ2tJRix5SEFBQTtBTDVERjtBSXRFSTtFQ2tJRix5SEFBQTtBTHhERjtBSTFFSTtFQ2tJRiwwSEFBQTtBTHBERjtBSTlFSTtFQ2tJRiwwSEFBQTtBTGhERjtBSWxGSTtFQ2tJRiwySEFBQTtBTDVDRjtBSXRGSTtFQ2tJRiwySEFBQTtBTHhDRjtBSTFGSTtFQ2tJRiwySEFBQTtBTHBDRjtBSTlGSTtFQ2tJRiwySEFBQTtBTGhDRjtBSWxHSTtFQ2tJRiw0SEFBQTtBTDVCRjtBSXRHSTtFQ2tJRiw0SEFBQTtBTHhCRjtBSTFHSTtFQ2tJRiw0SEFBQTtBTHBCRjtBSTlHSTtFQ2tJRiw0SEFBQTtBTGhCRjtBSWxISTtFQ2tJRiw0SEFBQTtBTFpGO0FJdEhJO0VDa0lGLDRIQUFBO0FMUkY7QUkxSEk7RUNrSUYsNkhBQUE7QUxKRjtBSTlISTtFQ2tJRiw2SEFBQTtBTEFGO0FJbElJO0VDa0lGLDZIQUFBO0FMSUY7QUl0SUk7RUNrSUYsNkhBQUE7QUxRRjtBSTFJSTtFQ2tJRiw4SEFBQTtBTFlGO0FJOUlJO0VDa0lGLDhIQUFBO0FMZ0JGO0FJbEpJO0VDa0lGLDhIQUFBO0FMb0JGO0FJdEpJO0VDa0lGLDhIQUFBO0FMd0JGO0FJMUpJO0VDa0lGLDhIQUFBO0FMNEJGO0FJdkpJO0VBQ0UsYUFBQTtBSjBKTjtBTXBMRTtFQUVFLGlCQUFBO0VBQ0EsMEJBQUE7QU5zTEo7QUsxQkU7RUFYQSwwSEFBQTtBTHdDRjtBTWxMSTtFQUNFLGlCQUFBO0FOb0xOO0FNbExNO0VBQ0UsMEJBQUE7QU5vTFI7QU9wR0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QVB1R0o7QVF6S0k7RURxRUUsa0JBQUE7RUFDQSxnQkFBQTtBUHVHTjtBT2xHSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBUHFHTjtBT2hHSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBUG1HTjtBTy9GRTtFQUNFLGtCQUFBO0FQa0dKO0FPOUZJO0VBQ0UsYUFBQTtBUGlHTjtBTzVGSTtFQVdJLG1CQUFBO0VBTUYsMEJBQUE7QVBnRk47QU81RUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBUCtFSjtBTzVFRTs7RUFFRSxnQkFBQTtBUCtFSjtBTzFFRTtFQUVFLGVBQUE7QVA0RUo7QU81T0U7RUFDRSxXQVJTO0VBU1QsWUFUUztFQVVULGlCQVZTO0FQeVBiO0FPM09JO0VBQ0UsU0FBQTtBUDZPTjtBT3hPSTtFQUNFLFlBQUE7QVAwT047QU9yT0k7RUFDRSxXQUFBO0FQdU9OO0FPbE9JO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QVBvT047QU8vTkk7RUFDRSxZQUFBO0FQaU9OO0FPNU5JO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QVA4Tk47QU94Tk07RUFDRSxVQUFBO0FQME5SO0FPck5NO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QVB1TlI7QU9sTk07RUFDRSxXQUFBO0FQb05SO0FPL01NO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QVBpTlI7QU9wUkU7RUFDRSxXQVRXO0VBVVgsWUFWVztFQVdYLGlCQVhXO0FQa1NmO0FPblJJO0VBQ0UsVUFBQTtBUHFSTjtBT2hSSTtFQUNFLGFBQUE7QVBrUk47QU83UUk7RUFDRSxXQUFBO0FQK1FOO0FPMVFJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QVA0UU47QU92UUk7RUFDRSxZQUFBO0FQeVFOO0FPcFFJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QVBzUU47QU9oUU07RUFDRSxXQUFBO0FQa1FSO0FPN1BNO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QVArUFI7QU8xUE07RUFDRSxZQUFBO0FQNFBSO0FPdlBNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QVB5UFI7QU81VEU7RUFDRSxXQVBTO0VBUVQsWUFSUztFQVNULGlCQVRTO0FQd1ViO0FPM1RJO0VBQ0UsVUFBQTtBUDZUTjtBT3hUSTtFQUNFLGFBQUE7QVAwVE47QU9yVEk7RUFDRSxXQUFBO0FQdVROO0FPbFRJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QVBvVE47QU8vU0k7RUFDRSxZQUFBO0FQaVROO0FPNVNJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QVA4U047QU94U007RUFDRSxXQUFBO0FQMFNSO0FPclNNO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QVB1U1I7QU9sU007RUFDRSxZQUFBO0FQb1NSO0FPL1JNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QVBpU1I7QVM5V0U7RUprSkEsNkhBQUE7RUloSkUsaUJBQUE7RUFDQSwwQkFBQTtBVGlYSjtBVS9SRTtFQUtFLGNBQUE7RUFDQSx1QkFBQTtBVjhSSjtBVTlURTtFQUNFLGNBQUE7QVZnVUo7QVU5VEU7RUFDRSxjQUFBO0FWZ1VKO0FVOVRFO0VBQ0UsY0FBQTtBVmdVSjtBVTVUSTtFQUVFLDBCQUFBO0FWNlROO0FVaFlFO0VBQ0UseUJBQUE7QVZrWUo7QVUvWEU7RUFDRSx5QkFBQTtBVmlZSjtBVTlYRTtFQUNFLHlCQUFBO0FWZ1lKO0FVN1hFO0VBQ0UsNkJBQUE7QVYrWEo7QVU5U0k7RUFDRSxZQXhHWTtFQXlHWiw4QkFBQTtBVmdUTjtBVTVTRTtFQUNFLGlCQUFBO0FWK1NKO0FVMVNFO0VBQ0UsaUNBQUE7QVY2U0o7QVUxU0U7RUFFRSwwQkFBQTtFQUNBLHVCQUFBO0FWNFNKO0FVdldFO0VBQ0UsWUFBQTtBVnlXSjtBVXZXRTtFQUNFLFlBQUE7QVZ5V0o7QVV2V0U7RUFDRSxZQUFBO0FWeVdKO0FVcldJO0VBRUUsMEJBQUE7QVZzV047QVVuWEU7RUFDRSx5QkFBQTtBVnFYSjtBVW5YRTtFQUNFLHlCQUFBO0FWcVhKO0FVblhFO0VBQ0UseUJBQUE7QVZxWEo7QVVqWEk7RUFFRSxxQ0FBQTtBVmtYTjtBVXBaRTtFQVhBLDBDQURtQjtBVm1hckI7QVVuWkU7RUFmQSwwQ0FEbUI7QVZzYXJCO0FVbFpFO0VBbkJBLDBDQURtQjtBVnlhckI7QUt0U0U7RUFYQSx3SEFBQTtBTHFURjtBSzFTRTtFQVhBLHlIQUFBO0FMeVRGO0FLOVNFO0VBWEEsMkhBQUE7QUw0VEY7QUtqVEU7RUFYQSx3SEFBQTtBTCtURjtBS3BURTtFQVhBLDJIQUFBO0FMbVVGO0FLeFRFO0VBWEEsNEhBQUE7QUxzVUY7QUszVEU7RUFYQSx3SEFBQTtBTHlVRjtBV3hkRTs7RU4rSUEseUhBQUE7QUw4VUY7QVd4ZEU7O0VBRUUsZ0JBQUE7QVgyZEo7QVd4ZEU7RUFDRSwwQkFBQTtBWDJkSjtBV3pkSTtFQUNFLHFDQUFBO0FYMmROO0FXdmRFO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBWDBkSjtBV3hkSTtFQUNFLHVCQUFBO0FYMGROO0FXdGRFO0VBQ0UsMENBQUE7QVh5ZEo7QVd0ZEU7RUFDRSxpQkFBQTtFQUNBLDJDQUFBO0FYeWRKO0FXcmRJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FYd2ROO0FXcGRFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBWHVkSjtBV3JkSTtFQUNFLDBCQUFBO0FYdWROO0FXbmRFO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtBWHNkSjtBV3BkSTtFQUNFLGlCQUFBO0FYc2ROO0FXbmRJO0VBQ0UseUJBQUE7QVhxZE47QVdqZEU7O0VBRUUscUNBQUE7QVhvZEo7QVdsY0k7RUFDRSxpQkFMYztBWDBjcEI7QVk5aEJFO0VBRUUsaUJBQUE7RUFDQSwwQkFBQTtBWmdpQko7QUt2WUU7RUFYQSx5SEFBQTtBTHFaRjtBSzFZRTtFQVhBLHdIQUFBO0FMd1pGO0FZOWhCRTtFQUNFLDBCQUFBO0FaaWlCSjtBYS9oQkU7RUFDRSxpQ0FBQTtBYmtpQko7QWEvaEJFO0VBQ0UsYUFkb0I7QWJnakJ4QjtBYS9oQkU7RUFHRSwwQkFBQTtBYmdpQko7QWE3aEJFO0VBQ0UseUJBeEJvQjtBYndqQnhCO0FhNWhCSTtFQUNFLHlCQUFBO0FiK2hCTjtBYTVoQkk7RUFDRSx5QkFBQTtBYjhoQk47QWEzaEJJO0VBQ0UseUJBQUE7QWI2aEJOO0FhdGhCTTtFQUNFLHlCQXRDVztBYitqQm5CO0FhcGhCTTtFQUNFLHFCQTVDVztBYmtrQm5CO0FhbGhCSTtFQUNFLDBCQUFBO0Fib2hCTjtBYTlnQkU7RUFDRSx1QkFBQTtBYmloQko7QWE1Z0JJOztFQUNFLG1CQUFBO0FiZ2hCTjtBYTdnQkk7O0VBQ0UsbUJBQUE7QWJnaEJOO0FhN2dCSTs7RUFDRSxtQkFBQTtBYmdoQk47QWN4akJFO0VBNUNBLHlCQXlDd0I7RUF4Q3hCLDBCQXlDd0I7QWQrakIxQjtBY3RtQkU7RUFDRSwwQkFzQ3NCO0VBckN0QixZQUFBO0Fkd21CSjtBYzdqQk07RVRtR0oseUhBQUE7QUw2ZEY7QWM1akJNO0VBQ0UsYUFBQTtBZDhqQlI7QWMxakJJO0VBQ0UsWUFBQTtBZDRqQk47QWN6akJJO0VBQ0UsaUJBQUE7QWQyakJOO0FjdGpCSTtFQW5FRix5QkF5QkU7RUF4QkYsWUF1QndCO0Fkc21CMUI7QWMzbkJFO0VBQ0UsWUFvQnNCO0VBbkJ0QixZQUFBO0FkNm5CSjtBY3ZtQkU7RUFWQSwwQ0FEbUI7QWRxbkJyQjtBYzlqQkk7RUF2RUYseUJBeUJFO0VBeEJGLFlBdUJ3QjtBZGluQjFCO0FjdG9CRTtFQUNFLFlBb0JzQjtFQW5CdEIsWUFBQTtBZHdvQko7QWNsbkJFO0VBVkEsMENBRG1CO0FkZ29CckI7QWNya0JJO0VBM0VGLHlCQXlCRTtFQXhCRixZQXVCd0I7QWQ0bkIxQjtBY2pwQkU7RUFDRSxZQW9Cc0I7RUFuQnRCLFlBQUE7QWRtcEJKO0FjN25CRTtFQVZBLDBDQURtQjtBZDJvQnJCO0FlM3BCRTtFQUNFLGlCQUFBO0FmOHBCSjtBZTNwQkU7Ozs7RUFJRSxtQkFBQTtBZjhwQko7QWUzcEJFOztFQUVFLHdDQUFBO0FmOHBCSjtBZTNwQkU7RUFDRSwwQkFBQTtBZjhwQko7QWUzcEJFO0VBQ0UsMEJBQUE7QWY4cEJKO0FnQnpuQkU7RUFDRSxxQ0FBQTtBaEI0bkJKO0FnQnZuQkU7OztFQUdFLDBCQUFBO0FoQjBuQko7QWdCdm5CRTtFQUNFLDBCQUFBO0FoQjBuQko7QWdCdm5CRTtFQUNFLCtCQUFBO0FoQjBuQko7QWdCdm5CRTtFQUNFLDBCQUFBO0FoQjBuQko7QWdCdm5CRTs7RUFFRSwwQkFBQTtFQUNBLHlCQUFBO0FoQjBuQko7QWdCaHFCRTtFQTJDSSwwQkFsQ2E7QWhCMnBCbkI7QWdCcm5CRTtFQUNFLDBCQXZDZTtBaEIrcEJuQjtBZ0JybkJFO0VBT0ksMEJBQUE7QWhCa25CTjtBZ0I1cUJFO0VBcUVJLGlDQUFBO0FoQjJtQk47QWdCaHJCRTtFQThFTSxpQ0FBQTtBaEJzbUJSO0FnQnBoQkU7RUFDRSxtQ0F2TUE7QWhCOHRCSjtBZ0JwaEJFOztFQUVFLGtDQVZpQjtBaEJpaUJyQjtBZ0JwaEJFOztFQUVFLDhGQUFBO0FoQnVoQko7QWdCcGhCRTs7RUFFRSw2RkFBQTtBaEJ1aEJKO0FnQnBoQkU7O0VBRUUsbUJBeEJjO0FoQitpQmxCO0FnQnBoQkU7O0VBRUUsbUJBNUJ1QjtBaEJtakIzQjtBZ0JydkJFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FoQnd2Qko7QWdCcnZCRTtFQUlJLHlDQUFBO0FoQnF2Qk47QWdCNXVCRTtFQUNFLGlDQUFBO0FoQit1Qko7QWdCOXRCRTs7O0VBUk0seUNBQUE7QWhCNHVCUjtBZ0J4b0JFO0VYUUEsMEhBQUE7RVdORSx1QkFBQTtFQUNBLDBCQUFBO0FoQjJvQko7QWdCMWtCRTtFQUNFLGtDQXZNQTtBaEJteEJKO0FnQnprQkU7O0VBRUUsa0NBVmlCO0FoQnFsQnJCO0FnQnhrQkU7O0VBRUUsNkZBQUE7QWhCMGtCSjtBZ0J2a0JFOztFQUVFLDRGQUFBO0FoQnlrQko7QWdCdGtCRTs7RUFFRSxtQkF4QmM7QWhCZ21CbEI7QWdCcmtCRTs7RUFFRSxtQkE1QnVCO0FoQm1tQjNCO0FnQnJ5QkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QWhCdXlCSjtBZ0JweUJFO0VBSUksd0NBQUE7QWhCbXlCTjtBZ0IxeEJFO0VBQ0UsaUNBQUE7QWhCNHhCSjtBZ0Izd0JFOzs7RUFSTSx3Q0FBQTtBaEJ3eEJSO0FnQmhuQkU7RUFDRSxrQ0F2TUE7QWhCeXpCSjtBZ0IvbUJFOztFQUVFLGtDQVZpQjtBaEIybkJyQjtBZ0I5bUJFOztFQUVFLDZGQUFBO0FoQmduQko7QWdCN21CRTs7RUFFRSw0RkFBQTtBaEIrbUJKO0FnQjVtQkU7O0VBRUUsbUJBeEJjO0FoQnNvQmxCO0FnQjNtQkU7O0VBRUUsbUJBNUJ1QjtBaEJ5b0IzQjtBZ0IzMEJFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FoQjYwQko7QWdCMTBCRTtFQUlJLHdDQUFBO0FoQnkwQk47QWdCaDBCRTtFQUNFLGlDQUFBO0FoQmswQko7QWdCanpCRTs7O0VBUk0sd0NBQUE7QWhCOHpCUjtBZ0I1c0JFO0VYTkEsOEhBQUE7QUxzdEJGO0FnQjVzQkU7RUFDRSxjQUFBO0FoQitzQko7QWdCN3NCSTtFQUNFLGNBQUE7QWhCK3NCTjtBZ0I1c0JJO0VBQ0UsY0FBQTtBaEI4c0JOO0FnQjFzQkU7RUFDRSwwQkFBQTtBaEI2c0JKO0FpQnIzQkU7RVppSkEsOEhBQUE7RVkvSUUsaUJBQUE7RUFDQSwwQkFBQTtBakJ3M0JKO0FrQmg0QkU7RUFDRSxxQ0FBQTtBbEJtNEJKO0FrQmg0QkU7RUFDRSx1Q0FBQTtBbEJtNEJKO0FtQmo0QkU7RUFFRSxpQkFBQTtFQUNBLDBCQUFBO0FuQm00Qko7QUs1dUJFO0VBWEEseUhBQUE7QUwwdkJGO0FtQm40QkU7RUFDRSxxQ0FBQTtBbkJzNEJKO0FvQnQ1Qk07RURvQkYsK0JBQUE7QW5CczRCSjtBbUJqNEJFO0VBQ0U7SUFFRSxpQkFBQTtFbkJtNEJKO0FBQ0Y7QW1CaDRCRTtFQUNFLDBCQUFBO0FuQms0Qko7QW1CLzNCRTs7RUFFRSwwQkFBQTtBbkJrNEJKO0FtQi8zQkU7RUFDRSwwQkFBQTtBbkJrNEJKO0FtQmg0Qkk7O0VBRUUsY0FBQTtBbkJrNEJOO0FtQnIyQkk7RUFDRSxZQUxlO0FuQjYyQnJCO0FtQnQyQk07RUFDRSxZQVZZO0FuQmszQnBCO0FxQjM1QkU7RUFDRSx5QkFaQTtBckIwNkJKO0FxQjM1QkU7RUFDRSx5QkFoQkE7QXJCODZCSjtBcUIzNUJFO0VBQ0UsY0FuQm9CO0FyQmk3QnhCO0FxQjU1Qkk7RUFDRSxjQWhCcUI7QXJCODZCM0I7QXFCMzVCSTtFQUNFLGNBbkJtQjtBckJnN0J6QjtBcUJ6NUJFO0VBQ0UsY0E5QnFCO0FyQjA3QnpCO0FxQno1QkU7RUFDRSxxQ0E5QkE7QXJCMDdCSjtBcUJ4NUJJO0VBQ0UseUJBaENzQjtBckIyN0I1QjtBcUJ6NUJNO0VBQ0UseUJBckNtQjtBckJnOEIzQjtBcUJ4NUJNO0VBQ0UseUJBeENpQjtBckJrOEJ6QjtBcUJwNUJJO0VBQ0UsY0E5Q3NCO0FyQnE4QjVCO0FxQnA1Qkk7RUFDRSxjQXBEcUI7QXJCMDhCM0I7QXFCbjVCSTtFQUNFLGNBdkRtQjtBckI0OEJ6QjtBcUI3NEJJO0VBQ0UsY0FoRW1CO0FyQmc5QnpCO0FxQjk0Qk07O0VBRUUsY0FwRWlCO0FyQm85QnpCO0FxQjU0Qkk7O0VBRUUseUJBMUVtQjtBckJ3OUJ6QjtBcUIxNEJFO0VBQ0UsY0EvRXFCO0FyQjQ5QnpCO0FzQnYrQkk7RUFDRSwwQkFOVTtBdEJnL0JoQjtBc0J2K0JJO0VBQ0UsMEJBVlU7QXRCbS9CaEI7QXNCdCtCSTtFQUNFLHFDQVpGO0F0Qm8vQko7QXNCcitCSTtFQ3hCRiw0R0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QXZCZ2dDRjtBd0IxL0JJO0VBQ0UscUNBSkY7QXhCaWdDSjtBd0IxL0JJO0VEWkYsNEdBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0F2QnlnQ0Y7QXlCNS9CSTtFQUNFLHFDQVRGO0F6QndnQ0o7QXlCNS9CSTtFQUNFLHFDQVhGO0F6QnlnQ0o7QXlCMy9CSTtFQUNFLHFDQWJGO0F6QjBnQ0o7QXlCei9CTTtFQUNFLDBCQWpCaUI7QXpCNGdDekI7QXlCeC9CTTtFQUNFLDZCQUFBO0F6QjAvQlI7QTBCdGdDSTtFQUNFLDBCQVhGO0ExQm9oQ0o7QTBCdGdDSTtFQUNFLDBCQWJGO0ExQnFoQ0o7QTBCcGdDTTtFQUNFLGNBakJrQjtBMUJ1aEMxQjtBMEJuZ0NNO0VBQ0UsY0FwQmlCO0ExQnloQ3pCO0EwQmxnQ007RUFDRSxjQXZCZTtBMUIyaEN2QjtBMEI5L0JNO0VBQ0UsY0E5QmU7QTFCOGhDdkI7QTBCMy9CTTtFQUNFLDBCQTNDaUI7QTFCd2lDekI7QTBCMS9CTTtFQUNFLDBCQXRDSjtBMUJraUNKO0EyQi9pQ0k7RUFDRSxjQUFBO0EzQmtqQ047QTJCL2lDSTtFQUNFLGNBQUE7QTNCaWpDTjtBMkI5aUNJO0VBQ0UsY0FBQTtBM0JnakNOO0E0QnJqQ0U7RUFDRSwwQkFBQTtBNUJ3akNKO0E0QnJqQ0U7O0VBRUUsMEJBQUE7QTVCd2pDSjtBNEJyakNFO0VBQ0Usb0JBQUE7QTVCd2pDSjtBNkJ6a0NFO0VEb0JJLDBCQUFBO0E1QndqQ047QTZCNWtDRTtFRG9CSSwwQkFBQTtBNUJ3akNOO0E2QnhrQ0U7RURnQkksMEJBQUE7QTVCMmpDTjtBNkJ2a0NFO0VEWUksMEJBQUE7QTVCOGpDTjtBNkJ0a0NFO0VEUUksMEJBQUE7QTVCaWtDTjtBNEI5aUNFO0VBQ0Usb0JBQUE7QTVCaWpDSjtBNEI5aUNFOztFQUVFLG9CQUFBO0E1QmlqQ0o7QTRCOWlDRTtFQUNFLGNBQUE7QTVCaWpDSjtBOEI5bENJO0VBQ0UsMEJBQUE7QTlCaW1DTjtBOEI5bENJO0VBQ0UsMEJBQUE7QTlCZ21DTjtBOEI3bENJO0VBQ0UsMEJBQUE7QTlCK2xDTjtBOEIzbENFO0VBQ0UseUJBQUE7QTlCOGxDSjtBOEJ4bENJOzs7OztFQUNFLCtCQUFBO0E5QitsQ047QThCMWxDSTtFQUNFLCtCQUFBO0E5QjZsQ047QStCem5DRTtFQUVFLGlCQUFBO0EvQjJuQ0o7QUtqK0JFO0VBWEEsMEhBQUE7QUwrK0JGO0ErQjNuQ0U7RUFDRSx1QkFBQTtFQUNBLDBCQUFBO0EvQjhuQ0o7QStCM25DTTs7RUFHRSwwQkFBQTtBL0I0bkNSO0ErQnZuQ0U7O0VBRUUsMEJBQUE7QS9CMG5DSjtBK0JubkNJOzs7O0VBQ0UsK0JBQUE7QS9CeW5DTjtBZ0NycENFO0VBQ0UsaUJBQUE7QWhDd3BDSjtBZ0NycENFOztFQUVFLDBCQUFBO0FoQ3dwQ0o7QWdDcnBDRTs7RUFFRSx5Q0FBQTtFQUNBLDJDQUFBO0FoQ3dwQ0o7QWdDcnBDRTs7RUFFRSx5Q0FBQTtBaEN3cENKO0FnQ3BwQ0k7Ozs7RUFJRSxpQ0FBQTtBaEN1cENOO0FnQ2hvQ0k7RUFDRSxnQkFMSztBaEN3b0NYO0FpQ3pxQ0U7RUFDRSxhQUFBO0FqQzRxQ0o7QWlDenFDRTtFQUNFLHlCQUFBO0FqQzRxQ0o7QWlDenFDRTtFQUNFLHlCQUFBO0FqQzRxQ0o7QWlDeHFDSTtFQUNFLGFBQUE7QWpDMnFDTjtBaUN4cUNJO0VBQ0UseUJBQUE7QWpDMHFDTjtBaUN2cUNJO0VBQ0UseUJBQUE7QWpDeXFDTjtBaUNwcUNJO0VBQ0UsYUFBQTtBakN1cUNOO0FpQ3BxQ0k7RUFDRSx5QkFBQTtBakNzcUNOO0FpQ25xQ0k7RUFDRSx5QkFBQTtBakNxcUNOO0FrQ3R0Q0k7RUFDRSxlQUFBO0FsQ3l0Q047QWtDdHRDSTtFQUNFLGVBQUE7QWxDd3RDTjtBa0NydENJO0VBQ0UsZUFBQTtBbEN1dENOO0FtQ2h0Q0U7RUFDRSxpQ0FBQTtBbkNtdENKO0FtQ3h1Q0U7RUFDRSxxQkFBQTtBbkMydUNKO0FtQ3h1Q0U7O0VBSUUseUJBQUE7QW5Dd3VDSjtBbUNodkNFO0VBQ0UscUJBQUE7QW5Da3ZDSjtBbUMvdUNFOztFQUlFLHlCQUFBO0FuQyt1Q0o7QW1DdnZDRTtFQUNFLHFCQUFBO0FuQ3l2Q0o7QW1DdHZDRTs7RUFJRSx5QkFBQTtBbkNzdkNKO0FtQ3J0Q007O0VBRUUsaUNBQUE7QW5DdXRDUjtBbUNwdENNOztFQUVFLHFDQUFBO0FuQ3N0Q1I7QW1DbnRDTTtFQUNFLDBCQUFBO0FuQ3F0Q1I7QW1DL3NDSTtFQUNFLHVCQUFBO0FuQ2l0Q047QW9DbHdDRTtFQUNFLDBCQUFBO0FwQ3F3Q0o7QW9DbHdDRTtFQUNFLDBCQUFBO0FwQ3F3Q0o7QW9DbHdDRTtFQUNFLDBCQUFBO0FwQ3F3Q0o7QW9DbHdDRTtFQUNFLDBCQUFBO0FwQ3F3Q0o7QW9DbHdDRTtFQUNFLGlCQUFBO0FwQ3F3Q0o7QUs5bkNFO0VBWEEsMEhBQUE7QUw0b0NGO0FvQ3J3Q0k7RUFDRSwrQkFBQTtBcEN1d0NOO0FvQ2p3Q007RUFDRSxjQUFBO0FwQ293Q1I7QW9DandDTTtFQUNFLGNBQUE7QXBDbXdDUjtBb0Nod0NNO0VBQ0UsY0FBQTtBcENrd0NSO0FvQzl2Q0k7RUFDRSxjQUFBO0FwQ2d3Q047QW9DN3ZDSTtFQUNFLDBCQUFBO0FwQyt2Q047QXFDenlDRTtFQUNFLHlCQUxtQztFQU1uQywwQkFBQTtBckM0eUNKO0FxQ3p5Q0U7RUFDRSx1QkFYd0I7RUFZeEIsMEJBQUE7QXJDNHlDSjtBcUMxeUNJO0VBQ0UsdUJBYjJCO0FyQ3l6Q2pDO0FxQ3p5Q0k7RWhDNkhGLDZIQUFBO0FMK3FDRjtBcUNyeUNFO0VBQ0UsMkNBdkJtQjtBckMrekN2QjtBcUN0eUNJO0VBQ0UsMENBMUJpQjtFQTJCakIsa0JBQUE7QXJDd3lDTjtBcUNweUNFO0VBQ0UsMENBaENtQjtFQWlDbkIsa0JBQUE7QXJDdXlDSjtBcUNyeUNJO0VBQ0UsaUJBQUE7RUFDQSwyQ0FyQ2lCO0FyQzQwQ3ZCO0FxQ255Q0U7RUFRSSxvQ0FBQTtBckMreENOO0FzQ3gxQ0k7RUFDRSx5QkFBQTtBdEMyMUNOO0FzQ3gxQ0k7RUFHRSx5Q0FBQTtBdEN3MUNOO0FzQ3IxQ0k7RUFHRSx5QkFBQTtBdENxMUNOO0FzQ2wyQ0k7RUFDRSx5QkFBQTtBdENvMkNOO0FzQ2oyQ0k7RUFHRSwwQ0FBQTtBdENpMkNOO0FzQzkxQ0k7RUFHRSx5QkFBQTtBdEM4MUNOO0FzQzMyQ0k7RUFDRSx5QkFBQTtBdEM2MkNOO0FzQzEyQ0k7RUFHRSx5Q0FBQTtBdEMwMkNOO0FzQ3YyQ0k7RUFHRSx5QkFBQTtBdEN1MkNOO0FzQ2wwQ0k7RUFHRSx1QkFoQnFCO0F0Q2sxQzNCO0FzQzl6Q0U7RWpDMkZBLHlIQUFBO0VpQ3pGRSx5QkFBQTtBdENpMENKO0FzQzl6Q0U7RUFDRSxxQ0EzQm9CO0F0QzQxQ3hCO0F1Q3YxQ0U7RUFDRSxxQ0FicUI7QXZDdTJDekI7QXVDdDRDRTs7O0VBR0UseUJBQUE7QXZDeTRDSjtBdUN0NENFO0VBQ0UsWUFBQTtBdkN3NENKO0F1Q3I0Q0U7RUFHRSx5Q0FEUTtBdkNzNENaO0F1Q2w1Q0U7OztFQUdFLHlCQUFBO0F2Q3E1Q0o7QXVDbDVDRTtFQUNFLFlBQUE7QXZDbzVDSjtBdUNqNUNFO0VBR0Usd0NBRFE7QXZDazVDWjtBdUM5NUNFOzs7RUFHRSx5QkFBQTtBdkNpNkNKO0F1Qzk1Q0U7RUFDRSxZQUFBO0F2Q2c2Q0o7QXVDNzVDRTtFQUdFLHdDQURRO0F2Qzg1Q1o7QXVDNzJDSTs7RUFDRSxxQ0E5QjJCO0F2Qys0Q2pDO0F1QzUyQ0k7OztFQUdFLHFDQXJDd0I7QXZDbzVDOUI7QXVDMzJDTTtFQUNFLHFDQTFDc0I7QXZDdTVDOUI7QXVDdjJDSTtFQUdFLHFDQURRO0F2Q3kyQ2Q7QXVDOTFDTTs7RUFFRSxxQ0E3REo7QXZDNjVDSjtBdUM1MUNROztFQUVFLHFDQWpFTjtBdkMrNUNKO0F1Q3gxQ007RUFDRSxpQ0E5RWlCO0VBK0VqQiw2QkFBQTtBdkMwMUNSO0F1Q3IxQ1E7RUFDRSxpQ0FwRnVCO0F2QzI2Q2pDO0F1Q3AxQ1E7RUFDRSxpQ0F2Rm9CO0F2QzY2QzlCO0F1Q2gxQ0U7RUFDRSxnQ0F2RkE7QXZDMDZDSjtBdUMxMENFO0VBQ0UsNkhBQUE7RUFJQSxtSUFBQTtBdkMwMENKO0F1Q2gwQ0U7RUFDRSw4SEFBQTtBdkNtMENKO0F3Q2w5Q0k7RUFHRSxxQ0FBQTtBeENtOUNOO0F3Qzc4Q0k7RUFDRTtJQUNFLGdCQUFBO0V4Qys4Q047QUFDRjtBd0M1OENJOztFQUlFLDBCQUFBO0F4QzQ4Q047QXdDejhDSTtFQUdFLHFDQUFBO0VBQ0EsWUFBQTtBeEN5OENOO0F3Q3Q4Q0k7OztFQUdFLHlCQUFBO0VBQ0EsWUFBQTtBeEN3OENOO0F3Q3A4Q007RUFDRSxZQUFBO0F4Q3M4Q1I7QXdDbjhDTTs7O0VBR0UseUJBQUE7RUFDQSxZQUFBO0F4Q3E4Q1I7QXdDaDhDTTtFQUNFLFlBQUE7QXhDazhDUjtBd0MvN0NNOzs7RUFHRSx5QkFBQTtFQUNBLFlBQUE7QXhDaThDUjtBd0M3N0NJO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0F4Qys3Q047QXdDNTdDSTtFQUNFLDBCQUFBO0F4Qzg3Q047QXdDMzdDSTtFQUNFLGNBQUE7QXhDNjdDTjtBd0N6N0NFO0VBQ0UsdUJBQUE7QXhDNDdDSjtBd0N6N0NFO0VBQ0Usc0NBQUE7QXhDNDdDSjtBd0N6N0NFOzs7RUFHRSxxQ0FBQTtBeEM0N0NKO0F3Q241Q0k7RUFDRSxZQU5LO0F4QzQ1Q1g7QXdDbjVDSTs7RUFFRSxrQkFBQTtBeENzNUNOO0F3Q2o1Q0k7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBeENvNUNOO0F3Qy80Q007RUFDRSxTQUFBO0F4Q2s1Q1I7QXdDNzRDSTtFQUNFLFNBQUE7QXhDZzVDTjtBeUMvaURFO0VBWUksY0FBQTtBekN1aUROO0EwQy9pREU7O0VBRUUsNENBSmM7QTFDc2pEbEI7QTBDOWlESTs7RUFFRSx5Q0FWWTtFQVdaLG1CQUFBO0ExQ2lqRE47QTBDN2lERTtFQUNFLDBCQUFBO0ExQ2dqREo7QTBDOWlESTtFQUNFLDBCQUFBO0ExQ2dqRE47QTBDNWlERTtFQUNFLGlDQUFBO0ExQytpREo7QTBDNWlERTtFQUNFLGlDQUFBO0ExQytpREo7QTBDM2lERTs7RUFFRSxtQkFBQTtFQUNBLGdCQUFBO0ExQzhpREo7QTBDaGdETTs7Ozs7RUFDRSwwQ0FBQTtBMUN1Z0RSO0EwQ2xoREU7RUFDRSx5QkFBQTtBMUNvaERKO0EwQ3JoREU7RUFDRSx1QkFBQTtBMUN1aERKO0EwQzlnRE07Ozs7O0VBQ0UsMENBQUE7QTFDb2hEUjtBMEMvaERFO0VBQ0UseUJBQUE7QTFDaWlESjtBMENsaURFO0VBQ0UsdUJBQUE7QTFDb2lESjtBMEMzaERNOzs7OztFQUNFLDBDQUFBO0ExQ2lpRFI7QTBDNWlERTtFQUNFLHlCQUFBO0ExQzhpREo7QTBDL2lERTtFQUNFLHVCQUFBO0ExQ2lqREo7QTBDeGlETTs7Ozs7RUFDRSwwQ0FBQTtBMUM4aURSO0EwQ25pREU7RUFDRSx5QkFBQTtBMUNxaURKO0EwQ2ppREU7RUFDRSxZQUFBO0ExQ21pREo7QTBDamlESTtFQUNFLCtCQUFBO0ExQ21pRE47QTBDOWhERTs7Ozs7OztFQUlFLG1CQUFBO0ExQ21pREo7QTBDaGlERTs7O0VBRUUsc0NBQUE7QTFDbWlESjtBMEM5aERFOzs7OztFQUdFLDJDQUFBO0ExQ2tpREo7QTBDN2tETTs7Ozs7RUFDRSwwQ0FBQTtBMUNtbERSO0EwQ3hrREU7RUFDRSx5QkFBQTtBMUMwa0RKO0EwQ3RrREU7RUFDRSxZQUFBO0ExQ3drREo7QTBDdGtESTtFQUNFLCtCQUFBO0ExQ3drRE47QTBDbmtERTs7Ozs7OztFQUlFLG1CQUFBO0ExQ3drREo7QTBDcmtERTs7O0VBRUUsc0NBQUE7QTFDd2tESjtBMENua0RFOzs7OztFQUdFLDJDQUFBO0ExQ3VrREo7QTBDbG5ETTs7Ozs7RUFDRSwwQ0FBQTtBMUN3bkRSO0EwQzdtREU7RUFDRSx5QkFBQTtBMUMrbURKO0EwQzNtREU7RUFDRSxZQUFBO0ExQzZtREo7QTBDM21ESTtFQUNFLCtCQUFBO0ExQzZtRE47QTBDeG1ERTs7Ozs7OztFQUlFLG1CQUFBO0ExQzZtREo7QTBDMW1ERTs7O0VBRUUsc0NBQUE7QTFDNm1ESjtBMEN4bURFOzs7OztFQUdFLDJDQUFBO0ExQzRtREo7QTJDbHNERTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7QTNDcXNESjtBMkNuc0RJO0VBcENGLG1CQUFBO0VBQ0EsWUFBQTtBM0MwdURGO0EyQ25zREk7RUF4Q0YsbUJBQUE7RUFDQSxZQUFBO0EzQzh1REY7QTJDbnNESTtFQTVDRixtQkFBQTtFQUNBLFlBQUE7QTNDa3ZERjtBMkM5dURFOzs7RUFHRSw4QkFBQTtBM0NndkRKO0EyQzd1REU7Ozs7O0VBS0UsY0FBQTtBM0MrdURKO0EyQzV1REU7RUFDRSx5QkFBQTtBM0M4dURKO0EyQzN3REU7RUFDRSxnQkE2RWU7QTNDaXNEbkI7QTJDNXdERTtFQUNFLFlBMEVlO0EzQ3FzRG5CO0EyQ3pyREk7RUExRkY7SUFDRSxnQkErRWM7RTNDd3NEaEI7O0UyQ3J4REE7SUFDRSxZQTRFYztFM0M0c0RoQjtBQUNGO0E0Q3B4REU7RUFDRSxpQ0FBQTtBNUNzeERKO0E2Qzd4REU7RUFDRSxpQkFBQTtBN0NneURKO0E2Qzd4REU7O0VBRUUsMEJBQUE7QTdDZ3lESjtBNkN4d0RJO0VBQ0UsZ0JBTEs7QTdDZ3hEWDtBOEMxeURFO0VBR0UsK0JBQUE7RUFDQSxtQkFBQTtFekM2SUYsMkhBQUE7QUwrcERGO0E4Q3Z5REU7RUFDRSxjQUFBO0E5QzB5REo7QUZseURBLGVBQUE7QUFtQkEsa0JBQUE7QUFhQSxlQUFBO0FBb0JBLGVBQUE7QUFRQSxpQkFBQTtBRXpGQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUF1MERKO0FBcDBESTtFQUNJLGdCQUFBO0FBdTBEUjtBQXIwREk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQXUwRFI7QUFyMERJO0VBQ0ksZUFBQTtBQXUwRFI7QUFuMERZO0VBQ0ksZUFBQTtBQXEwRGhCO0FBajBESTtFQUNJLGNBQUE7RUFDQSxrQkZ3RUM7RUV2RUQsbUJGbUJLO0VFbEJMLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNGc0RBO0VFckRBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBbTBEUiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblRlbXBsYXRlIE5hbWU6IE1hdGVyaWFsIFBybyBBZG1pblxuQXV0aG9yOiBUaGVtZWRlc2lnbmVyXG5FbWFpbDogbmlyYXZqb3NoaTg3QGdtYWlsLmNvbVxuRmlsZTogc2Nzc1xuKi9cbi8vIGZvbnQgZmFtaWx5LCBhbHNvIHBhc3RlIHRoaXMgaW1wb3J0IGludG8gc3R5bGVzLmNzcyBmaWxlLlxuXG5AdXNlICd+QGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwJyk7XG5cbiRib2R5Zm9udDonUG9wcGlucycsIHNhbnMtc2VyaWY7XG4kaGVhZGluZ2ZvbnQ6J1BvcHBpbnMnLCBzYW5zLXNlcmlmOyBcblxuXG4vKk1hdGVyaWFsIFRoZW1lIENvbG9ycyovXG5cbiRwcmltYXJ5OiBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRibHVlLXBhbGV0dGUsIDYwMCk7XG4kYWNjZW50OiBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRpbmRpZ28tcGFsZXR0ZSwgNTAwKTtcbiR3YXJuOiBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRwaW5rLXBhbGV0dGUsIDUwMCk7XG4kdGhlbWU6IG1hdC5kZWZpbmUtbGlnaHQtdGhlbWUoJHByaW1hcnksICRhY2NlbnQsICR3YXJuKTtcbiRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4kZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4vLyBEZWZhdWx0IFRoZW1lXG5AaW5jbHVkZSBtYXQuYWxsLWNvbXBvbmVudC10aGVtZXMoJHRoZW1lKTtcblxuXG4vLyBEYXJrIFRoZW1lXG5cbi8qVGhlbWUgQ29sb3JzKi9cbiBcbiR0b3BiYXI6ICMyMTk2ZjM7XG4kc2lkZWJhcjogI2ZmZjtcbiRzaWRlYmFyLXdoaXRlOiAjZTVlZGVmO1xuJHNpZGViYXItYWx0OiNmMmY2Zjg7XG4kYm9keWNvbG9yOiAjZWVmNWY5O1xuJGhlYWRpbmd0ZXh0OiAjNDU1YTY0O1xuJGJvZHl0ZXh0OiAjNjc3NTdjOyBcbiRzaWRlYmFyLXRleHQ6ICM4Zjk5OWU7XG4kc2lkZWJhci1pY29uczogIzk5YWJiNCA7XG5cbiRmb250LTE2OiAxNnB4O1xuXG4kbGlnaHQtdGV4dDogI2E2YjdiZjtcbiR0aGVtZWNvbG9yOiAjMWU4OGU1O1xuJHRoZW1lY29sb3ItYWx0OiAjMjZjNmRhO1xuJHRoZW1lY29sb3ItZGFyazogIzAyOGVlMTtcblxuLypib290c3RyYXAgQ29sb3IqL1xuJGRhbmdlcjogI2ZjNGI2YztcbiRzdWNjZXNzOiAjMjZjNmRhO1xuJHdhcm5pbmc6ICNmZmIyMmI7XG4kcHJpbWFyeTogIzc0NjBlZTtcbiRpbmZvOiAjMWU4OGU1O1xuJGludmVyc2U6ICMyZjNkNGE7XG4kbXV0ZWQ6ICM5OWFiYjQ7XG4kZGFyazogIzI2MzIzODtcbiRsaWdodDogI2YyZjRmODtcbiRleHRyYS1saWdodDogI2ViZjNmNTtcbiRzZWNvbmRhcnk6ICM3MjdiODQ7XG5cbi8qTGlnaHQgY29sb3JzKi9cbiRsaWdodC1kYW5nZXI6ICNmOWU3ZWI7XG4kbGlnaHQtc3VjY2VzczogI2U4ZmRmODtcbiRsaWdodC13YXJuaW5nOiAjZmZmOGVjO1xuJGxpZ2h0LXByaW1hcnk6ICNmMWVmZmQ7XG4kbGlnaHQtaW5mbzogI2UzZjNmZDtcbiRsaWdodC1pbnZlcnNlOiAjZjZmNmY2O1xuJGxpZ2h0LW1lZ25hOiAjZTBmMmY0OyBcblxuXG5cbiRkYW5nZXItZGFyazogI2U2Mjk0YjtcbiRzdWNjZXNzLWRhcms6ICMxZWFjYmU7XG4kd2FybmluZy1kYXJrOiAjZTlhYjJlO1xuJHByaW1hcnktZGFyazogIzYzNTJjZTtcbiRpbmZvLWRhcms6ICMwMjhlZTE7XG4kcmVkLWRhcms6ICNkNjFmMWY7XG4kaW52ZXJzZS1kYXJrOiAjMjMyYTM3O1xuJGRhcmstdHJhbnNwYXJlbnQ6cmdiYSgwLCAwLCAwLCAwLjA1KTtcblxuLypOb3JtYWwgQ29sb3IqL1xuJHdoaXRlOiAjZmZmZmZmO1xuJHJlZDogI2ZiM2EzYTtcbiR5ZWxsb3c6ICNhMGFlYzQ7XG4kcHVycGxlOiAjNzQ2MGVlO1xuJGJsdWU6ICMwMmJlYzk7XG4kbWVnbmE6ICMwMDg5N2I7XG5cbi8qRXh0cmEgVmFyaWFibGUqL1xuJHJndDogcmlnaHQ7XG4kbGZ0OiBsZWZ0O1xuJGJvcmRlcjogcmdiYSgxMjAsIDEzMCwgMTQwLCAwLjEzKTtcbiR0YWJsZS1ib3JkZXI6I2YzZjFmMTtcbiRjYXJkLWJyZDojZDdkZmUzO1xuJGRhcmstdGV4dDogIzg0OGE5NjtcbiRyYWRpdXM6IDRweDtcbiRmb3JtLWJyZDogI2Q5ZDlkOTtcblxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJy4uL3RoZW1pbmcvdGhlbWluZyc7XG5cbi8vIENvbG9ycyBmb3IgdGhlIHJpcHBsZSBlbGVtZW50cy5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRmb3JlZ3JvdW5kLWJhc2U6IG1hcC5nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICAkY29sb3Itb3BhY2l0eTogMC4xO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIC8vIElmIHRoZSByaXBwbGUgY29sb3IgaXMgcmVzb2x2ZXMgdG8gYSBjb2xvciAqdHlwZSosIHdlIGNhbiB1c2UgaXQgZGlyZWN0bHksIG90aGVyd2lzZVxuICAgIC8vIChlLmcuIGl0IHJlc29sdmVzIHRvIGEgQ1NTIHZhcmlhYmxlKSB3ZSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGNvbG9yIGFuZCBzZXR0aW5nIGFuIG9wYWNpdHkuXG4gICAgQGlmIChtZXRhLnR5cGUtb2YoJGZvcmVncm91bmQtYmFzZSkgPT0gY29sb3IpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGZvcmVncm91bmQtYmFzZSwgJGNvbG9yLW9wYWNpdHkpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1iYXNlO1xuICAgICAgb3BhY2l0eTogJGNvbG9yLW9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1yaXBwbGUnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlXCI7XG4ucHJpY2luZy1ib3h7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG4ucHJpY2luZy1wbGFue1xuICAgIG1hdC1jYXJkLXRpdGxle1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbiAgICBoMXtcbiAgICAgICAgbWFyZ2luOiA3cHggMDtcbiAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgIH1cbiAgICBzdXB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLnByaWNlLWxpc3Rpbmd7XG4gICAgICAgIC5tYXQtbGlzdC1pdGVte1xuICAgICAgICAgICAgLm1hdC1saXN0LWl0ZW0tY29udGVudHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBvcC10YWd7XG4gICAgICAgIHBhZGRpbmc6MCA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgICAgIGJhY2tncm91bmQ6ICR0aGVtZWNvbG9yO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDotMTNweDtcbiAgICAgICAgY29sb3I6JHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcblxuICAubWF0LW9wdGlvbiB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksXG4gICAgJjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIEluIG11bHRpcGxlIG1vZGUgdGhlcmUgaXMgYSBjaGVja2JveCB0byBzaG93IHRoYXQgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAmLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtb3B0aW9uLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5LCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LW9wdGlvbiB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1vcHRpb24nKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5LXV0aWxzLnR5cG9ncmFwaHktbGV2ZWwoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LW9wdGdyb3VwJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uLy4uL3RoZW1pbmcvdGhlbWluZyc7XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC5nZXQoJGNvbmZpZywgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG4gICRjb2xvcmVkLWJveC1zZWxlY3RvcjogJy5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUnO1xuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCksIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICBjb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUobWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KSk7XG4gIH1cblxuICAvLyBEZWZhdWx0IHRvIHRoZSBhY2NlbnQgY29sb3IuIE5vdGUgdGhhdCB0aGUgcHNldWRvIGNoZWNrYm94ZXMgYXJlIG1lYW50IHRvIGluaGVyaXQgdGhlXG4gIC8vIHRoZW1lIGZyb20gdGhlaXIgcGFyZW50LCByYXRoZXIgdGhhbiBpbXBsZW1lbnRpbmcgdGhlaXIgb3duIHRoZW1pbmcsIHdoaWNoIGlzIHdoeSB3ZVxuICAvLyBkb24ndCBhdHRhY2ggdG8gdGhlIGBtYXQtKmAgY2xhc3Nlcy4gQWxzbyBub3RlIHRoYXQgdGhpcyBuZWVkcyB0byBiZSBiZWxvdyBgLm1hdC1wcmltYXJ5YFxuICAvLyBpbiBvcmRlciB0byBhbGxvdyBmb3IgdGhlIGNvbG9yIHRvIGJlIG92ZXJ3cml0dGVuIGlmIHRoZSBjaGVja2JveCBpcyBpbnNpZGUgYSBwYXJlbnQgdGhhdFxuICAvLyBoYXMgYG1hdC1hY2NlbnRgIGFuZCBpcyBwbGFjZWQgaW5zaWRlIGFub3RoZXIgcGFyZW50IHRoYXQgaGFzIGBtYXQtcHJpbWFyeWAuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZShtYXAuZ2V0KCRjb25maWcsIGFjY2VudCkpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUobWFwLmdldCgkY29uZmlnLCB3YXJuKSk7XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAmLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogJGRpc2FibGVkLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXBzZXVkby1jaGVja2JveCcpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICd0aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi9zdHlsZS9wcml2YXRlJztcbkB1c2UgJy4vcmlwcGxlL3JpcHBsZS10aGVtZSc7XG5AdXNlICcuL29wdGlvbi9vcHRpb24tdGhlbWUnO1xuQHVzZSAnLi9vcHRpb24vb3B0Z3JvdXAtdGhlbWUnO1xuQHVzZSAnLi9zZWxlY3Rpb24vcHNldWRvLWNoZWNrYm94L3BzZXVkby1jaGVja2JveC10aGVtZSc7XG5AdXNlICcuL3N0eWxlL2VsZXZhdGlvbic7XG5cblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAvLyBXcmFwcGVyIGVsZW1lbnQgdGhhdCBwcm92aWRlcyB0aGUgdGhlbWUgYmFja2dyb3VuZCB3aGVuIHRoZSB1c2VyJ3MgY29udGVudCBpc24ndFxuICAvLyBpbnNpZGUgb2YgYSBgbWF0LXNpZGVuYXYtY29udGFpbmVyYC4gTm90ZSB0aGF0IHdlIG5lZWQgdG8gZXhjbHVkZSB0aGUgYW1wZXJzYW5kXG4gIC8vIHNlbGVjdG9yIGluIGNhc2UgdGhlIG1peGluIGlzIGluY2x1ZGVkIGF0IHRoZSB0b3AgbGV2ZWwuXG4gIC5tYXQtYXBwLWJhY2tncm91bmQje2lmKCYsICcsICYubWF0LWFwcC1iYWNrZ3JvdW5kJywgJycpfSB7XG4gICAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLy8gUHJvdmlkZXMgZXh0ZXJuYWwgQ1NTIGNsYXNzZXMgZm9yIGVhY2ggZWxldmF0aW9uIHZhbHVlLiBFYWNoIENTUyBjbGFzcyBpcyBmb3JtYXR0ZWQgYXNcbiAgLy8gYG1hdC1lbGV2YXRpb24teiR6VmFsdWVgIHdoZXJlIGAkelZhbHVlYCBjb3JyZXNwb25kcyB0byB0aGUgei1zcGFjZSB0byB3aGljaCB0aGUgZWxlbWVudCBpc1xuICAvLyBlbGV2YXRlZC5cbiAgQGZvciAkelZhbHVlIGZyb20gMCB0aHJvdWdoIDI0IHtcbiAgICAuI3tlbGV2YXRpb24uJHByZWZpeH0jeyR6VmFsdWV9IHtcbiAgICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgLy8gTWFya2VyIHRoYXQgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgdXNlciBoYXMgYWRkZWQgYSB0aGVtZSB0byB0aGVpciBwYWdlLlxuICBAYXQtcm9vdCB7XG4gICAgLm1hdC10aGVtZS1sb2FkZWQtbWFya2VyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgZGVwZW5kIG9uIHRoZSB0aGVtZS5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIC8vIFdyYXAgdGhlIHN1Yi10aGVtZSBpbmNsdWRlcyBpbiB0aGUgZHVwbGljYXRlIHRoZW1lIHN0eWxlcyBtaXhpbi4gVGhpcyBlbnN1cmVzIHRoYXRcbiAgLy8gdGhlcmUgd29uJ3QgYmUgbXVsdGlwbGUgd2FybmluZ3MuIGUuZy4gaWYgYG1hdC1jb3JlLXRoZW1lYCByZXBvcnRzIGEgd2FybmluZywgdGhlblxuICAvLyB0aGUgaW1wb3J0ZWQgdGhlbWVzIChzdWNoIGFzIGBtYXQtcmlwcGxlLXRoZW1lYCkgc2hvdWxkIG5vdCByZXBvcnQgYWdhaW4uXG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1jb3JlJykge1xuICAgIEBpbmNsdWRlIHJpcHBsZS10aGVtZS50aGVtZSgkdGhlbWUpO1xuICAgIEBpbmNsdWRlIG9wdGlvbi10aGVtZS50aGVtZSgkdGhlbWUpO1xuICAgIEBpbmNsdWRlIG9wdGdyb3VwLXRoZW1lLnRoZW1lKCR0aGVtZSk7XG4gICAgQGluY2x1ZGUgcHNldWRvLWNoZWNrYm94LXRoZW1lLnRoZW1lKCR0aGVtZSk7XG5cbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptYXRoJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICd2YXJpYWJsZXMnO1xuXG5cbi8vIEEgY29sbGVjdGlvbiBvZiBtaXhpbnMgYW5kIENTUyBjbGFzc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgZWxldmF0aW9uIHRvIGEgbWF0ZXJpYWxcbi8vIGVsZW1lbnQuXG4vLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2Vudmlyb25tZW50L2VsZXZhdGlvbi5odG1sXG4vLyBFeGFtcGxlczpcbi8vXG4vL1xuLy8gLm1hdC1mb28ge1xuLy8gICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbigyKTtcbi8vXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbig4KTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIDxkaXYgaWQ9XCJleHRlcm5hbC1jYXJkXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXoyXCI+PHA+U29tZSBjb250ZW50PC9wPjwvZGl2PlxuLy9cbi8vIEZvciBhbiBleHBsYW5hdGlvbiBvZiB0aGUgZGVzaWduIGJlaGluZCBob3cgZWxldmF0aW9uIGlzIGltcGxlbWVudGVkLCBzZWUgdGhlIGRlc2lnbiBkb2MgYXRcbi8vIGh0dHBzOi8vZ29vLmdsL0txMGs5Wi5cblxuLy8gQ29sb3JzIGZvciB1bWJyYSwgcGVudW1icmEsIGFuZCBhbWJpZW50IHNoYWRvd3MuIEFzIGRlc2NyaWJlZCBpbiB0aGUgZGVzaWduIGRvYywgZWFjaCBlbGV2YXRpb25cbi8vIGxldmVsIGlzIGNyZWF0ZWQgdXNpbmcgYSBzZXQgb2YgMyBzaGFkb3cgdmFsdWVzLCBvbmUgZm9yIHVtYnJhICh0aGUgc2hhZG93IHJlcHJlc2VudGluZyB0aGVcbi8vIHNwYWNlIGNvbXBsZXRlbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0IHJlbGF0aXZlIHRvIGl0cyBsaWdodCBzb3VyY2UpLCBvbmUgZm9yIHBlbnVtYnJhICh0aGVcbi8vIHNwYWNlIHBhcnRpYWxseSBvYnNjdXJlZCBieSBhbiBvYmplY3QpLCBhbmQgb25lIGZvciBhbWJpZW50ICh0aGUgc3BhY2Ugd2hpY2ggY29udGFpbnMgdGhlIG9iamVjdFxuLy8gaXRzZWxmKS4gRm9yIGEgZnVydGhlciBleHBsYW5hdGlvbiBvZiB0aGVzZSB0ZXJtcyBhbmQgdGhlaXIgbWVhbmluZ3MsIHNlZVxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW1icmEsX3BlbnVtYnJhX2FuZF9hbnR1bWJyYS5cblxuLy8gTWFwcyBmb3IgdGhlIGRpZmZlcmVudCBzaGFkb3cgc2V0cyBhbmQgdGhlaXIgdmFsdWVzIHdpdGhpbiBlYWNoIHotc3BhY2UuIFRoZXNlIHZhbHVlcyB3ZXJlXG4vLyBjcmVhdGVkIGJ5IHRha2luZyBhIGZldyByZWZlcmVuY2Ugc2hhZG93IHNldHMgY3JlYXRlZCBieSBHb29nbGUncyBEZXNpZ25lcnMgYW5kIGludGVycG9sYXRpbmdcbi8vIGFsbCBvZiB0aGUgdmFsdWVzIGJldHdlZW4gdGhlbS5cblxuQGZ1bmN0aW9uIF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDJweCAxcHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDNweCAxcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCAzcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDJweCA0cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDRweCA1cHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDVweCA1cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDVweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA2cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNnB4IDdweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggN3B4IDlweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDhweCA5cHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA4cHggMTBweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDhweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggOXB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA5cHggMTJweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDEwcHggMTRweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDExcHggMTRweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDExcHggMTVweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDNweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAxcHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDFweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMXB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggMXB4IDE0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggMXB4IDE4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggMnB4IDE2cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggM3B4IDE0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggM3B4IDE2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDRweCAxOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA0cHggMjBweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggNXB4IDIycHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDVweCAyNHB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA1cHggMjZweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggNnB4IDI4cHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDZweCAzMHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA2cHggMzJweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggN3B4IDM0cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDdweCAzNnB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCA4cHggMzhweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggOHB4IDQwcHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDhweCA0MnB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCA5cHggNDRweCA4cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggOXB4IDQ2cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbi8vIFRoZSBkZWZhdWx0IGR1cmF0aW9uIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXJpYWJsZXMuJGZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uO1xuXG4vLyBUaGUgZGVmYXVsdCBjb2xvciBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kY29sb3I6IGJsYWNrICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBvcGFjaXR5IHNjYWxpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJHByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIGVsZXZhdGlvbigkelZhbHVlLCAkY29sb3I6ICRjb2xvciwgJG9wYWNpdHk6ICRvcGFjaXR5KSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCBtYXRoLmlzLXVuaXRsZXNzKCR6VmFsdWUpIHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBhIHVuaXRsZXNzIG51bWJlcic7XG4gIH1cbiAgQGlmICR6VmFsdWUgPCAwIG9yICR6VmFsdWUgPiAyNCB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNCc7XG4gIH1cblxuICBib3gtc2hhZG93OiAje21hcC5nZXQoX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAuZ2V0KF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLmdldChfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX07XG59XG5cbi8vIEFwcGxpZXMgdGhlIGVsZXZhdGlvbiB0byBhbiBlbGVtZW50IGluIGEgbWFubmVyIHRoYXQgYWxsb3dzXG4vLyBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgaXQgdmlhIHRoZSBNYXRlcmlhbCBlbGV2YXRpb24gY2xhc3Nlcy5cbkBtaXhpbiBvdmVycmlkYWJsZS1lbGV2YXRpb24oXG4gICAgJHpWYWx1ZSxcbiAgICAkY29sb3I6ICRjb2xvcixcbiAgICAkb3BhY2l0eTogJG9wYWNpdHkpIHtcbiAgJjpub3QoW2NsYXNzKj0nI3skcHJlZml4fSddKSB7XG4gICAgQGluY2x1ZGUgZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvciwgJG9wYWNpdHkpO1xuICB9XG59XG5cbi8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBmb3IgZWxldmF0aW9uLlxuLy8gQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIGEgY29tcG9uZW50IG5lZWRzIHRvIHRyYW5zaXRpb25cbi8vIG1vcmUgdGhhbiBvbmUgcHJvcGVydHkuXG4vL1xuLy8gLmZvbyB7XG4vLyAgIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgpLCBvcGFjaXR5IDEwMG1zIGVhc2U7XG4vLyB9XG5AZnVuY3Rpb24gcHJpdmF0ZS10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKFxuICAgICRkdXJhdGlvbjogJHRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gZWxldmF0aW9uLXRyYW5zaXRpb24oXG4gICAgJGR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgdHJhbnNpdGlvbjogcHJpdmF0ZS10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCRkdXJhdGlvbiwgJGVhc2luZyk7XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCB7XG4gICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkY29uZmlnKTtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gU2VsZWN0ZWQgb3B0aW9ucyBpbiBhdXRvY29tcGxldGVzIHNob3VsZCBub3QgYmUgZ3JheSwgYnV0IHdlXG4gICAgLy8gb25seSB3YW50IHRvIG92ZXJyaWRlIHRoZSBiYWNrZ3JvdW5kIGZvciBzZWxlY3RlZCBvcHRpb25zIGlmXG4gICAgLy8gdGhleSBhcmUgKm5vdCogaW4gaG92ZXIgb3IgZm9jdXMgc3RhdGUuIFRoaXMgY2hhbmdlIGhhcyB0byBiZVxuICAgIC8vIG1hZGUgaGVyZSBiZWNhdXNlIGJhc2Ugb3B0aW9uIHN0eWxlcyBhcmUgc2hhcmVkIGJldHdlZW4gdGhlXG4gICAgLy8gYXV0b2NvbXBsZXRlIGFuZCB0aGUgc2VsZWN0LlxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpIHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAgICY6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWF1dG9jb21wbGV0ZScpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGlzIGNvbnRhaW5zIGFsbCBvZiB0aGUgc3R5bGVzIGZvciB0aGUgYmFkZ2Vcbi8vIHJhdGhlciB0aGFuIGp1c3QgdGhlIGNvbG9yL3RoZW1lIGJlY2F1c2Ugb2Zcbi8vIG5vIHN0eWxlIHNoZWV0IHN1cHBvcnQgZm9yIGRpcmVjdGl2ZXMuXG5AdXNlICdzYXNzOmNvbG9yJztcbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5AdXNlICcuLi8uLi9jZGsvYTExeSc7XG5cbiRmb250LXNpemU6IDEycHg7XG4kZm9udC13ZWlnaHQ6IDYwMDtcbiRkZWZhdWx0LXNpemU6IDIycHggIWRlZmF1bHQ7XG4kc21hbGwtc2l6ZTogJGRlZmF1bHQtc2l6ZSAtIDY7XG4kbGFyZ2Utc2l6ZTogJGRlZmF1bHQtc2l6ZSArIDY7XG5cbi8vIE1peGluIGZvciBidWlsZGluZyBvZmZzZXQgZ2l2ZW4gZGlmZmVyZW50IHNpemVzXG5AbWl4aW4gX2JhZGdlLXNpemUoJHNpemUpIHtcbiAgLy8gVGhpcyBtaXhpbiBpc24ndCB1c2VkIGluIHRoZSBjb250ZXh0IG9mIGEgdGhlbWUgc28gd2UgY2FuIGRpc2FibGUgdGhlIGFtcGVyc2FuZCBjaGVjay5cbiAgLy8gc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tYW1wZXJzYW5kLWJleW9uZC1zZWxlY3Rvci1zdGFydFxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gICYubWF0LWJhZGdlLWFib3ZlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgdG9wOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlbG93IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYm90dG9tOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1vdmVybGFwIHtcbiAgICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIHN0eWxlbGludC1lbmFibGVcbn1cblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5KTtcblxuICAgIEBpbmNsdWRlIGExMXkuaGlnaC1jb250cmFzdChhY3RpdmUsIG9mZikge1xuICAgICAgb3V0bGluZTogc29saWQgMXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWFjY2VudCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50KTtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS13YXJuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2FybiwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtaGlkZGVuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWRpc2FibGVkIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgJGFwcC1iYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsICdiYWNrZ3JvdW5kJyk7XG4gICAgICAkYmFkZ2UtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcblxuICAgICAgLy8gVGhlIGRpc2FibGVkIGNvbG9yIHVzdWFsbHkgaGFzIHNvbWUga2luZCBvZiBvcGFjaXR5LCBidXQgYmVjYXVzZSB0aGUgYmFkZ2UgaXMgb3ZlcmxheWVkXG4gICAgICAvLyBvbiB0b3Agb2Ygc29tZXRoaW5nIGVsc2UsIGl0IHdvbid0IGxvb2sgZ29vZCBpZiBpdCdzIG9wYXF1ZS4gSWYgaXQgaXMgYSBjb2xvciAqdHlwZSosXG4gICAgICAvLyB3ZSBjb252ZXJ0IGl0IGludG8gYSBzb2xpZCBjb2xvciBieSB0YWtpbmcgdGhlIG9wYWNpdHkgZnJvbSB0aGUgcmdiYSB2YWx1ZSBhbmQgdXNpbmdcbiAgICAgIC8vIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZCB3aGVuXG4gICAgICAvLyBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci5cbiAgICAgIEBpZiAobWV0YS50eXBlLW9mKCRiYWRnZS1jb2xvcikgPT0gY29sb3IgYW5kIG1ldGEudHlwZS1vZigkYXBwLWJhY2tncm91bmQpID09IGNvbG9yKSB7XG4gICAgICAgICRiYWRnZS1vcGFjaXR5OiBvcGFjaXR5KCRiYWRnZS1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQ6IGNvbG9yLm1peCgkYXBwLWJhY2tncm91bmQsIHJnYmEoJGJhZGdlLWNvbG9yLCAxKSwgKDEgLSAkYmFkZ2Utb3BhY2l0eSkgKiAxMDAlKTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGJhZGdlLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5uZy1hbmltYXRlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudCxcbiAgLm1hdC1iYWRnZS1jb250ZW50Ll9tYXQtYW5pbWF0aW9uLW5vb3BhYmxlIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgLy8gVGhlIGFjdGl2ZSBjbGFzcyBpcyBhZGRlZCBhZnRlciB0aGUgZWxlbWVudCBpcyBhZGRlZFxuICAvLyBzbyBpdCBjYW4gYW5pbWF0ZSBzY2FsZSB0byBkZWZhdWx0XG4gIC5tYXQtYmFkZ2UtY29udGVudC5tYXQtYmFkZ2UtYWN0aXZlIHtcbiAgICAvLyBTY2FsZSB0byBgbm9uZWAgaW5zdGVhZCBvZiBgMWAgdG8gYXZvaWQgYmx1cnJ5IHRleHQgaW4gc29tZSBicm93c2Vycy5cbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIHtcbiAgICBAaW5jbHVkZSBfYmFkZ2Utc2l6ZSgkc21hbGwtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1tZWRpdW0ge1xuICAgIEBpbmNsdWRlIF9iYWRnZS1zaXplKCRkZWZhdWx0LXNpemUpO1xuICB9XG4gIC5tYXQtYmFkZ2UtbGFyZ2Uge1xuICAgIEBpbmNsdWRlIF9iYWRnZS1zaXplKCRsYXJnZS1zaXplKTtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgIGZvbnQtZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIC8vIFNldCB0aGUgZm9udCBzaXplIHRvIDc1JSBvZiB0aGUgb3JpZ2luYWwuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplICogMC43NTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUgKiAyO1xuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtYmFkZ2UnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8vIEVtaXRzIGEgQ1NTIGNsYXNzLCBgLmNkay12aXN1YWxseS1oaWRkZW5gLiBUaGlzIGNsYXNzIGNhbiBiZSBhcHBsaWVkIHRvIGFuIGVsZW1lbnRcbi8vLyB0byBtYWtlIHRoYXQgZWxlbWVudCB2aXN1YWxseSBoaWRkZW4gd2hpbGUgcmVtYWluaW5nIGF2YWlsYWJsZSB0byBhc3NpdGl2ZSB0ZWNobm9sb2d5LlxuQG1peGluIGExMXktdmlzdWFsbHktaGlkZGVuKCkge1xuICAuY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDFweDtcblxuICAgIC8vIFRoaXMgd29ya3MgYXJvdW5kIGEgQ2hyb21lIGJ1ZyB0aGF0IGNhbiBjYXVzZSB0aGUgdGFiIHRvIGNyYXNoIHdoZW4gbGFyZ2UgYW1vdW50cyBvZlxuICAgIC8vIG5vbi1FbmdsaXNoIHRleHQgZ2V0IHdyYXBwZWQ6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEyMDE0NDRcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgLy8gQXZvaWQgYnJvd3NlcnMgcmVuZGVyaW5nIHRoZSBmb2N1cyByaW5nIGluIHNvbWUgY2FzZXMuXG4gICAgb3V0bGluZTogMDtcblxuICAgIC8vIEF2b2lkIHNvbWUgY2FzZXMgd2hlcmUgdGhlIGJyb3dzZXIgd2lsbCBzdGlsbCByZW5kZXIgdGhlIG5hdGl2ZSBjb250cm9scyAoc2VlICM5MDQ5KS5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICB9XG59XG5cbi8vLyBAZGVwcmVjYXRlZCBVc2UgYGExMXktdmlzdWFsbHktaGlkZGVuYC5cbkBtaXhpbiBhMTF5KCkge1xuICBAaW5jbHVkZSBhMTF5LXZpc3VhbGx5LWhpZGRlbjtcbn1cblxuLy8vIEVtaXRzIHRoZSBtaXhpbidzIGNvbnRlbnQgbmVzdGVkIHVuZGVyIGAkc2VsZWN0b3ItY29udGV4dGAgaWYgYCRzZWxlY3Rvci1jb250ZXh0YFxuLy8vIGlzIG5vbi1lbXB0eS5cbi8vLyBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3ItY29udGV4dCBUaGUgc2VsZWN0b3IgdW5kZXIgd2hpY2ggdG8gbmVzdCB0aGUgbWl4aW4ncyBjb250ZW50LlxuQG1peGluIF9vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICBAaWYgKCRzZWxlY3Rvci1jb250ZXh0ID09ICcnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGVsc2Uge1xuICAgICN7JHNlbGVjdG9yLWNvbnRleHR9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLy8gQXBwbGllcyBzdHlsZXMgZm9yIHVzZXJzIGluIGhpZ2ggY29udHJhc3QgbW9kZS4gTm90ZSB0aGF0IHRoaXMgb25seSBhcHBsaWVzXG4vLy8gdG8gTWljcm9zb2Z0IGJyb3dzZXJzLiBDaHJvbWUgY2FuIGJlIGluY2x1ZGVkIGJ5IGNoZWNraW5nIGZvciB0aGUgYGh0bWxbaGNdYFxuLy8vIGF0dHJpYnV0ZSwgaG93ZXZlciBDaHJvbWUgaGFuZGxlcyBoaWdoIGNvbnRyYXN0IGRpZmZlcmVudGx5LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9IHRhcmdldCBUeXBlIG9mIGhpZ2ggY29udHJhc3Qgc2V0dGluZyB0byB0YXJnZXQuIERlZmF1bHRzIHRvIGBhY3RpdmVgLCBjYW4gYmVcbi8vLyAgICAgYHdoaXRlLW9uLWJsYWNrYCBvciBgYmxhY2stb24td2hpdGVgLlxuLy8vIEBwYXJhbSB7U3RyaW5nfSBlbmNhcHN1bGF0aW9uIFdoZXRoZXIgdG8gZW1pdCBzdHlsZXMgZm9yIHZpZXcgZW5jYXBzdWxhdGlvbi4gVmFsdWVzIGFyZTpcbi8vLyAgICAgKiBgb25gIC0gd29ya3MgZm9yIGBFbXVsYXRlZGAsIGBOYXRpdmVgLCBhbmQgYFNoYWRvd0RvbWBcbi8vLyAgICAgKiBgb2ZmYCAtIHdvcmtzIGZvciBgTm9uZWBcbi8vLyAgICAgKiBgYW55YCAtIHdvcmtzIGZvciBhbGwgZW5jYXBzdWxhdGlvbiBtb2RlcyBieSBlbWl0dGluZyB0aGUgQ1NTIHR3aWNlIChkZWZhdWx0KS5cbkBtaXhpbiBoaWdoLWNvbnRyYXN0KCR0YXJnZXQ6IGFjdGl2ZSwgJGVuY2Fwc3VsYXRpb246ICdhbnknKSB7XG4gIEBpZiAoJHRhcmdldCAhPSAnYWN0aXZlJyBhbmQgJHRhcmdldCAhPSAnYmxhY2stb24td2hpdGUnIGFuZCAkdGFyZ2V0ICE9ICd3aGl0ZS1vbi1ibGFjaycpIHtcbiAgICBAZXJyb3IgJ1Vua25vd24gY2RrLWhpZ2gtY29udHJhc3QgdmFsdWUgXCIjeyR0YXJnZXR9XCIgcHJvdmlkZWQuICcgK1xuICAgICAgICAgICAnQWxsb3dlZCB2YWx1ZXMgYXJlIFwiYWN0aXZlXCIsIFwiYmxhY2stb24td2hpdGVcIiwgYW5kIFwid2hpdGUtb24tYmxhY2tcIic7XG4gIH1cblxuICBAaWYgKCRlbmNhcHN1bGF0aW9uICE9ICdvbicgYW5kICRlbmNhcHN1bGF0aW9uICE9ICdvZmYnIGFuZCAkZW5jYXBzdWxhdGlvbiAhPSAnYW55Jykge1xuICAgIEBlcnJvciAnVW5rbm93biBjZGstaGlnaC1jb250cmFzdCBlbmNhcHN1bGF0aW9uIFwiI3skZW5jYXBzdWxhdGlvbn1cIiBwcm92aWRlZC4gJyArXG4gICAgICAgICAgICdBbGxvd2VkIHZhbHVlcyBhcmUgXCJvblwiLCBcIm9mZlwiLCBhbmQgXCJhbnlcIic7XG4gIH1cblxuICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGV4dCBoYXMgbXVsdGlwbGUgcGFydHMsIHN1Y2ggYXMgYC5zZWN0aW9uLCAucmVnaW9uYCwganVzdCBkb2luZ1xuICAvLyBgLmNkay1oaWdoLWNvbnRyYXN0LXh4eCAjeyZ9YCB3aWxsIG9ubHkgYXBwbHkgdGhlIHBhcmVudCBzZWxlY3RvciB0byB0aGUgZmlyc3QgcGFydCBvZiB0aGVcbiAgLy8gY29udGV4dC4gV2UgYWRkcmVzcyB0aGlzIGJ5IG5lc3RpbmcgdGhlIHNlbGVjdG9yIGNvbnRleHQgdW5kZXIgLmNkay1oaWdoLWNvbnRyYXN0LlxuICBAYXQtcm9vdCB7XG4gICAgJHNlbGVjdG9yLWNvbnRleHQ6ICN7Jn07XG5cbiAgICBAaWYgKCRlbmNhcHN1bGF0aW9uICE9ICdvbicpIHtcbiAgICAgIC8vIE5vdGUgdGhhdCBpZiB0aGlzIHNlbGVjdG9yIGlzIHVwZGF0ZWQsIHRoZSBzYW1lIGNoYW5nZSBoYXMgdG8gYmUgbWFkZSBpbnNpZGVcbiAgICAgIC8vIGBfb3ZlcmxheS5zY3NzYCB3aGljaCBjYW4ndCBkZXBlbmQgb24gdGhpcyBtaXhpbiBkdWUgdG8gc29tZSBpbmZyYXN0cnVjdHVyZSBsaW1pdGF0aW9ucy5cbiAgICAgIC5jZGstaGlnaC1jb250cmFzdC0jeyR0YXJnZXR9IHtcbiAgICAgICAgQGluY2x1ZGUgX29wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgKCRlbmNhcHN1bGF0aW9uICE9ICdvZmYnKSB7XG4gICAgICAuY2RrLWhpZ2gtY29udHJhc3QtI3skdGFyZ2V0fSA6aG9zdCB7XG4gICAgICAgIEBpbmNsdWRlIF9vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1lbGV2YXRpb24oMTYsICRjb25maWcpO1xuICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIHR5cG9ncmFwaHktdXRpbHMudHlwb2dyYXBoeS1sZXZlbCgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtYm90dG9tLXNoZWV0Jykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG4kX3JpcHBsZS1vcGFjaXR5OiAwLjE7XG5cbi8vIEFwcGxpZXMgYSBmb2N1cyBzdHlsZSB0byBhbiBtYXQtYnV0dG9uIGVsZW1lbnQgZm9yIGVhY2ggb2YgdGhlIHN1cHBvcnRlZCBwYWxldHRlcy5cbkBtaXhpbiBfZm9jdXMtb3ZlcmxheS1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHByaW1hcnkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuKTtcbiAgfVxuXG4gICYubWF0LWJ1dHRvbi1kaXNhYmxlZCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBhIHJpcHBsZS4gSWYgdGhlIHZhbHVlIHByb3ZpZGVkIGlzIG5vdCBhIFNhc3MgY29sb3IsXG4vLyB3ZSBhc3N1bWUgdGhhdCB3ZSd2ZSBiZWVuIGdpdmVuIGEgQ1NTIHZhcmlhYmxlLiBTaW5jZSB3ZSBjYW4ndCBwZXJmb3JtIGFscGhhLWJsZW5kaW5nXG4vLyBvbiBhIENTUyB2YXJpYWJsZSwgd2UgaW5zdGVhZCBhZGQgdGhlIG9wYWNpdHkgZGlyZWN0bHkgdG8gdGhlIHJpcHBsZSBlbGVtZW50LlxuQG1peGluIF9yaXBwbGUtYmFja2dyb3VuZCgkcGFsZXR0ZSwgJGh1ZSwgJG9wYWNpdHkpIHtcbiAgJGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSwgJGh1ZSwgJG9wYWNpdHkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgQGlmIChtZXRhLnR5cGUtb2YoJGJhY2tncm91bmQtY29sb3IpICE9IGNvbG9yKSB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIH1cbn1cblxuQG1peGluIF9yaXBwbGUtY29sb3IoJHRoZW1lLCAkaHVlLCAkb3BhY2l0eTogJF9yaXBwbGUtb3BhY2l0eSkge1xuICAkcHJpbWFyeTogbWFwLmdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAmLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIEBpbmNsdWRlIF9yaXBwbGUtYmFja2dyb3VuZCgkcHJpbWFyeSwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIEBpbmNsdWRlIF9yaXBwbGUtYmFja2dyb3VuZCgkYWNjZW50LCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cblxuICAmLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIEBpbmNsdWRlIF9yaXBwbGUtYmFja2dyb3VuZCgkd2FybiwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG59XG5cbi8vIEFwcGxpZXMgYSBwcm9wZXJ0eSB0byBhbiBtYXQtYnV0dG9uIGVsZW1lbnQgZm9yIGVhY2ggb2YgdGhlIHN1cHBvcnRlZCBwYWxldHRlcy5cbkBtaXhpbiBfdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAkcHJvcGVydHksICRodWUpIHtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJi5tYXQtcHJpbWFyeSB7XG4gICAgI3skcHJvcGVydHl9OiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHByaW1hcnksICRodWUpO1xuICB9XG4gICYubWF0LWFjY2VudCB7XG4gICAgI3skcHJvcGVydHl9OiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCwgJGh1ZSk7XG4gIH1cbiAgJi5tYXQtd2FybiB7XG4gICAgI3skcHJvcGVydHl9OiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4sICRodWUpO1xuICB9XG5cbiAgJi5tYXQtcHJpbWFyeSwgJi5tYXQtYWNjZW50LCAmLm1hdC13YXJuLCAmLm1hdC1idXR0b24tZGlzYWJsZWQge1xuICAgICYubWF0LWJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgICAkcGFsZXR0ZTogaWYoJHByb3BlcnR5ID09ICdjb2xvcicsICRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCk7XG4gICAgICAjeyRwcm9wZXJ0eX06IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgICAvLyBCdXR0b25zIHdpdGhvdXQgYSBiYWNrZ3JvdW5kIGNvbG9yIHNob3VsZCBpbmhlcml0IHRoZSBmb250IGNvbG9yLiBUaGlzIGlzIG5lY2Vzc2FyeSB0b1xuICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBidXR0b24gaXMgcmVhZGFibGUgb24gY3VzdG9tIGJhY2tncm91bmQgY29sb3JzLiBJdCdzIHdyb25nIHRvIGFsd2F5cyBhc3N1bWVcbiAgICAvLyB0aGF0IHRob3NlIGJ1dHRvbnMgYXJlIGFsd2F5cyBwbGFjZWQgaW5zaWRlIG9mIGNvbnRhaW5lcnMgd2l0aCB0aGUgZGVmYXVsdCBiYWNrZ3JvdW5kXG4gICAgLy8gY29sb3Igb2YgdGhlIHRoZW1lIChlLmcuIHRoZW1lZCB0b29sYmFycykuXG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICBAaW5jbHVkZSBfdGhlbWUtcHJvcGVydHkoJGNvbmZpZywgJ2NvbG9yJywgdGV4dCk7XG4gICAgQGluY2x1ZGUgX2ZvY3VzLW92ZXJsYXktY29sb3IoJGNvbmZpZyk7XG5cbiAgICAvLyBTZXR1cCB0aGUgcmlwcGxlIGNvbG9yIHRvIGJlIGJhc2VkIG9uIHRoZSB0ZXh0IGNvbG9yLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgcmlwcGxlc1xuICAgIC8vIGFyZSBtYXRjaGluZyB3aXRoIHRoZSBjdXJyZW50IHRoZW1lIHBhbGV0dGUgYW5kIGFyZSBpbiBjb250cmFzdCB0byB0aGUgYmFja2dyb3VuZCBjb2xvclxuICAgIC8vIChlLmcgaW4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIG9wYWNpdHk6ICRfcmlwcGxlLW9wYWNpdHk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZDogbWFwLmdldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gIH1cblxuICAvLyBOb3RlOiB0aGlzIG5lZWRzIGEgYml0IGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHdlJ3JlIG5vdCBndWFyYW50ZWVkIHRoZSBpbmNsdXNpb25cbiAgLy8gb3JkZXIgb2YgdGhlIHRoZW1lIHN0eWxlcyBhbmQgdGhlIGJ1dHRvbiByZXNldCBtYXkgZW5kIHVwIHJlc2V0dGluZyB0aGlzIGFzIHdlbGwuXG4gIC5tYXQtc3Ryb2tlZC1idXR0b246bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKSB7XG4gICAgYm9yZGVyLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgLy8gRGVmYXVsdCBmb250IGFuZCBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gbm90IHVzaW5nIGFueSBjb2xvciBwYWxldHRlLlxuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgcmFpc2VkLWJ1dHRvbik7XG5cbiAgICBAaW5jbHVkZSBfdGhlbWUtcHJvcGVydHkoJGNvbmZpZywgJ2NvbG9yJywgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgQGluY2x1ZGUgX3RoZW1lLXByb3BlcnR5KCRjb25maWcsICdiYWNrZ3JvdW5kLWNvbG9yJywgZGVmYXVsdCk7XG4gICAgQGluY2x1ZGUgX3JpcHBsZS1jb2xvcigkY29uZmlnLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtc3Ryb2tlZC1idXR0b24sIC5tYXQtZmxhdC1idXR0b24ge1xuICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXJhaXNlZC1idXR0b24ge1xuICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJGNvbmZpZyk7XG5cbiAgICAmOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCk6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oOCwgJGNvbmZpZyk7XG4gICAgfVxuXG4gICAgJi5tYXQtYnV0dG9uLWRpc2FibGVkIHtcbiAgICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNiwgJGNvbmZpZyk7XG5cbiAgICAmOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCk6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMTIsICRjb25maWcpO1xuICAgIH1cblxuICAgICYubWF0LWJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICRjb25maWcpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uLFxuICAubWF0LWZsYXQtYnV0dG9uLCAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtYnV0dG9uJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvcHJpdmF0ZSc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5AdXNlICcuLi9jb3JlL2RlbnNpdHkvcHJpdmF0ZS9jb21wYXRpYmlsaXR5JztcbkB1c2UgJy4vYnV0dG9uLXRvZ2dsZS12YXJpYWJsZXMnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGRpdmlkZXItY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLWVsZXZhdGlvbigyLCAkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBmb2N1c2VkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uLCAxKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwge1xuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBzZWxlY3RlZC1idXR0b24pO1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24tdG9nZ2xlKTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgZm9udC1mYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuQG1peGluIGRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkZGVuc2l0eS1zY2FsZTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRzdGFuZGFyZC1oZWlnaHQ6IGNvbXBhdGliaWxpdHkucHJpdmF0ZS1kZW5zaXR5LXByb3AtdmFsdWUoXG4gICAgICBidXR0b24tdG9nZ2xlLXZhcmlhYmxlcy4kc3RhbmRhcmQtZGVuc2l0eS1jb25maWcsICRkZW5zaXR5LXNjYWxlLCBoZWlnaHQpO1xuXG4gIEBpbmNsdWRlIGNvbXBhdGliaWxpdHkucHJpdmF0ZS1kZW5zaXR5LWxlZ2FjeS1jb21wYXRpYmlsaXR5KCkge1xuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkc3RhbmRhcmQtaGVpZ2h0O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtYnV0dG9uLXRvZ2dsZScpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvcHJpdmF0ZSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1jYXJkIHtcbiAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDEsICRjb25maWcpO1xuICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAvLyBOZWVkcyBleHRyYSBzcGVjaWZpY2l0eSB0byBiZSBhYmxlIHRvIG92ZXJyaWRlIHRoZSBlbGV2YXRpb24gc2VsZWN0b3JzLlxuICAgICYubWF0LWNhcmQtZmxhdCB7XG4gICAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICRjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtY2FyZCB7XG4gICAgZm9udC1mYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGhlYWRsaW5lKTtcbiAgICAgIHdlaWdodDogdHlwb2dyYXBoeS11dGlscy5mb250LXdlaWdodCgkY29uZmlnLCB0aXRsZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgdGl0bGUpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlLFxuICAubWF0LWNhcmQtY29udGVudCB7XG4gICAgZm9udC1zaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtY2FyZCcpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLmdldCgkY29uZmlnLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuXG4gIC8vIFRoZSBjb2xvciBvZiB0aGUgY2hlY2tib3gncyBjaGVja21hcmsgLyBtaXhlZG1hcmsuXG4gICRjaGVja2JveC1tYXJrLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuXG4gIC8vIE5PVEUodHJhdmlza2F1Zm1hbik6IFdoaWxlIHRoZSBzcGVjIGNhbGxzIGZvciB0cmFuc2x1Y2VudCBibGFja3Mvd2hpdGVzIGZvciBkaXNhYmxlZCBjb2xvcnMsXG4gIC8vIHRoaXMgZG9lcyBub3Qgd29yayB3ZWxsIHdpdGggZWxlbWVudHMgbGF5ZXJlZCBvbiB0b3Agb2Ygb25lIGFub3RoZXIuIFRvIGdldCBhcm91bmQgdGhpcyB3ZVxuICAvLyBibGVuZCB0aGUgY29sb3JzIHRvZ2V0aGVyIGJhc2VkIG9uIHRoZSBiYXNlIGNvbG9yIGFuZCB0aGUgdGhlbWUgYmFja2dyb3VuZC5cbiAgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyazogIzY4Njg2ODtcbiAgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQ6ICNiMGIwYjA7XG4gICRkaXNhYmxlZC1jb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcmssICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0KTtcblxuICAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICBib3JkZXItY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja21hcmsge1xuICAgIGZpbGw6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XG4gICAgLy8gIWltcG9ydGFudCBpcyBuZWVkZWQgaGVyZSBiZWNhdXNlIGEgc3Ryb2tlIG11c3QgYmUgc2V0IGFzIGFuXG4gICAgLy8gYXR0cmlidXRlIG9uIHRoZSBTVkcgaW4gb3JkZXIgZm9yIGxpbmUgYW5pbWF0aW9uIHRvIHdvcmsgcHJvcGVybHkuXG4gICAgc3Ryb2tlOiAkY2hlY2tib3gtbWFyay1jb2xvciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1taXhlZG1hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLCAubWF0LWNoZWNrYm94LWNoZWNrZWQge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAmLm1hdC1jaGVja2JveC1jaGVja2VkLFxuICAgICYubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgICAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkge1xuICAgICAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFN3aXRjaCB0aGlzIHRvIGEgc29saWQgY29sb3Igc2luY2Ugd2UncmUgdXNpbmcgYG9wYWNpdHlgXG4gIC8vIHRvIGNvbnRyb2wgaG93IG9wYXF1ZSB0aGUgcmlwcGxlIHNob3VsZCBiZS5cbiAgLm1hdC1jaGVja2JveCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAuZ2V0KG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCksIGJhc2UpO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja2VkOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKSxcbiAgLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpIHtcbiAgICAmLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtY2hlY2tib3gge1xuICAgIGZvbnQtZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLy8gVE9ETyhrYXJhKTogUmVtb3ZlIHRoaXMgc3R5bGUgd2hlbiBmaXhpbmcgdmVydGljYWwgYmFzZWxpbmVcbiAgLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMubGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWNoZWNrYm94Jykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG4kY2hpcC1yZW1vdmUtZm9udC1zaXplOiAxOHB4O1xuXG5AbWl4aW4gX2VsZW1lbnQtY29sb3IoJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBjb2xvcjogJGZvcmVncm91bmQ7XG5cbiAgLm1hdC1jaGlwLXJlbW92ZSB7XG4gICAgY29sb3I6ICRmb3JlZ3JvdW5kO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxufVxuXG5cbi8vIEFwcGxpZXMgdGhlIGJhY2tncm91bmQgY29sb3IgZm9yIGEgcmlwcGxlIGVsZW1lbnQuXG4vLyBJZiB0aGUgY29sb3IgdmFsdWUgcHJvdmlkZWQgaXMgbm90IGEgU2FzcyBjb2xvcixcbi8vIHdlIGFzc3VtZSB0aGF0IHdlJ3ZlIGJlZW4gZ2l2ZW4gYSBDU1MgdmFyaWFibGUuXG4vLyBTaW5jZSB3ZSBjYW4ndCBwZXJmb3JtIGFscGhhLWJsZW5kaW5nIG9uIGEgQ1NTIHZhcmlhYmxlLFxuLy8gd2UgaW5zdGVhZCBhZGQgdGhlIG9wYWNpdHkgZGlyZWN0bHkgdG8gdGhlIHJpcHBsZSBlbGVtZW50LlxuQG1peGluIF9yaXBwbGUtYmFja2dyb3VuZCgkcGFsZXR0ZSwgJGRlZmF1bHQtY29udHJhc3QsICRvcGFjaXR5KSB7XG4gICRiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUsICRkZWZhdWx0LWNvbnRyYXN0LCAkb3BhY2l0eSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICBAaWYgKG1ldGEudHlwZS1vZigkYmFja2dyb3VuZC1jb2xvcikgIT0gY29sb3IpIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgfVxufVxuXG5AbWl4aW4gX3BhbGV0dGUtc3R5bGVzKCRwYWxldHRlKSB7XG4gIEBpbmNsdWRlIF9lbGVtZW50LWNvbG9yKHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCksXG4gICAgdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlKSk7XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgQGluY2x1ZGUgX3JpcHBsZS1iYWNrZ3JvdW5kKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEpO1xuICB9XG59XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC5nZXQoJGNvbmZpZywgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCB1bnNlbGVjdGVkLWNoaXApO1xuICAkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gICAgQGluY2x1ZGUgX2VsZW1lbnQtY29sb3IoJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZCwgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZCk7XG5cbiAgICAmOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIHtcbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLWVsZXZhdGlvbigzLCAkY29uZmlnKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1jaGlwLXJlbW92ZTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtY2hpcC1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWFwLmdldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9wYWxldHRlLXN0eWxlcygkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfcGFsZXR0ZS1zdHlsZXMoJHdhcm4pO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfcGFsZXR0ZS1zdHlsZXMoJGFjY2VudCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtY2hpcCB7XG4gICAgZm9udC1zaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgIGZvbnQtd2VpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG5cbiAgICAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbixcbiAgICAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJGNoaXAtcmVtb3ZlLWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1jaGlwcycpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXRhYmxlIHRoZWFkLCAubWF0LXRhYmxlIHRib2R5LCAubWF0LXRhYmxlIHRmb290LFxuICBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIFttYXQtaGVhZGVyLXJvd10sIFttYXQtcm93XSwgW21hdC1mb290ZXItcm93XSxcbiAgLm1hdC10YWJsZS1zdGlja3kge1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIH1cblxuICBtYXQtcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIHRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC10YWJsZSB7XG4gICAgZm9udC1mYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBmb250LXNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgIGZvbnQtd2VpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXRhYmxlJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6Y29sb3InO1xuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptYXRoJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG5cbiRzZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoOiAxcHg7XG4kc2VsZWN0ZWQtZmFkZS1hbW91bnQ6IDAuNjtcbiRyYW5nZS1mYWRlLWFtb3VudDogMC4yO1xuJHRvZGF5LWZhZGUtYW1vdW50OiAwLjI7XG4kY2FsZW5kYXItYm9keS1mb250LXNpemU6IDEzcHggIWRlZmF1bHQ7XG4kY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU6IDExcHggIWRlZmF1bHQ7XG5cbkBtaXhpbiBfY29sb3IoJHBhbGV0dGUpIHtcbiAgQGluY2x1ZGUgZGF0ZS1yYW5nZS1jb2xvcnMoXG4gICAgdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlLCBkZWZhdWx0LCAkcmFuZ2UtZmFkZS1hbW91bnQpKTtcblxuICAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSk7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgICRiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUpO1xuXG4gICAgQGlmIChtZXRhLnR5cGUtb2YoJGJhY2tncm91bmQpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5hZGp1c3QoJGJhY2tncm91bmQsICRhbHBoYTogLSRzZWxlY3RlZC1mYWRlLWFtb3VudCk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGNvdWxkbid0IHJlc29sdmUgdG8gYmFja2dyb3VuZCB0byBhIGNvbG9yIChlLmcuIGl0J3MgYSBDU1MgdmFyaWFibGUpLFxuICAgICAgLy8gZmFsbCBiYWNrIHRvIGZhZGluZyB0aGUgY29udGVudCBvdXQgdmlhIGBvcGFjaXR5YC5cbiAgICAgIG9wYWNpdHk6ICR0b2RheS1mYWRlLWFtb3VudDtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwICRzZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoXG4gICAgICAgICAgICAgICAgdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyLFxuICAuY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSxcbiAgLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSB7XG4gICAgJiA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQge1xuICAgICAgQGluY2x1ZGUgX3Vuc2VsZWN0ZWQtY2VsbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSwgMC4zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXRpbGl0eSBtaXhpbiB0byB0YXJnZXQgY2VsbHMgdGhhdCBhcmVuJ3Qgc2VsZWN0ZWQuIFVzZWQgdG8gbWFrZSBzZWxlY3RvciBlYXNpZXIgdG8gZm9sbG93LlxuQG1peGluIF91bnNlbGVjdGVkLWNlbGwge1xuICAmOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGRpc2FibGVkLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuXG4gIC5tYXQtY2FsZW5kYXItYXJyb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgaWNvbik7XG4gIH1cblxuICAvLyBUaGUgcHJldi9uZXh0IGJ1dHRvbnMgbmVlZCBhIGJpdCBtb3JlIHNwZWNpZmljaXR5IHRvXG4gIC8vIGF2b2lkIGJlaW5nIG92ZXJ3cml0dGVuIGJ5IHRoZSAubWF0LWljb24tYnV0dG9uLlxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLFxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLW5leHQtYnV0dG9uLFxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgaWNvbik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50LFxuICAubWF0LWRhdGUtcmFuZ2UtaW5wdXQtc2VwYXJhdG9yIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudCB7XG4gICAgQGluY2x1ZGUgX3Vuc2VsZWN0ZWQtY2VsbCB7XG4gICAgICBjb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWRhdGUtcmFuZ2UtaW5wdXQtc2VwYXJhdG9yIHtcbiAgICBjb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWluLXByZXZpZXcge1xuICAgICRkaXZpZGVyLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gICAgQGlmIG1ldGEudHlwZS1vZigkZGl2aWRlci1jb2xvcikgPT0gY29sb3Ige1xuICAgICAgLy8gVGhlIGRpdmlkZXIgY29sb3IgaXMgc2V0IHVuZGVyIHRoZSBhc3N1bXB0aW9uIHRoYXQgaXQnbGwgYmUgdXNlZFxuICAgICAgLy8gZm9yIGEgc29saWQgYm9yZGVyLCBidXQgYmVjYXVzZSB3ZSdyZSB1c2luZyBhIGRhc2hlZCBib3JkZXIgZm9yIHRoZVxuICAgICAgLy8gcHJldmlldyByYW5nZSwgd2UgbmVlZCB0byBidW1wIGl0cyBvcGFjaXR5IHRvIGVuc3VyZSB0aGF0IGl0J3MgdmlzaWJsZS5cbiAgICAgIGNvbG9yOiByZ2JhKCRkaXZpZGVyLWNvbG9yLCBtYXRoLm1pbihvcGFjaXR5KCRkaXZpZGVyLWNvbG9yKSAqIDIsIDEpKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgY29sb3I6ICRkaXZpZGVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheSB7XG4gICAgQGluY2x1ZGUgX3Vuc2VsZWN0ZWQtY2VsbCB7XG4gICAgICAvLyBOb3RlOiB0aG91Z2ggaXQncyBub3QgdGV4dCwgdGhlIGJvcmRlciBpcyBhIGhpbnQgYWJvdXQgdGhlIGZhY3QgdGhhdCB0aGlzIGlzIHRvZGF5J3MgZGF0ZSxcbiAgICAgIC8vIHNvIHdlIHVzZSB0aGUgaGludCBjb2xvci5cbiAgICAgIGJvcmRlci1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS10b2RheSB7XG4gICAgQGluY2x1ZGUgX3Vuc2VsZWN0ZWQtY2VsbCB7XG4gICAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcblxuICAgICAgQGlmIChtZXRhLnR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgICBib3JkZXItY29sb3I6IGNvbG9yLmFkanVzdCgkY29sb3IsICRhbHBoYTogLSR0b2RheS1mYWRlLWFtb3VudCk7XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZSBjb2xvciBkaWRuJ3QgcmVzb2x2ZSB0byBhIGNvbG9yIHZhbHVlLCBidXQgc29tZXRoaW5nIGxpa2UgYSBDU1MgdmFyaWFibGUsIHdlIGNhbid0XG4gICAgICAgIC8vIGZhZGUgaXQgb3V0IHNvIHdlIGZhbGwgYmFjayB0byByZWR1Y2luZyB0aGUgZWxlbWVudCBvcGFjaXR5LiBOb3RlIHRoYXQgd2UgZG9uJ3QgdXNlIHRoZVxuICAgICAgICAvLyAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQsIGJlY2F1c2UgaGludCB0ZXh0IHVzdWFsbHkgaGFzIHNvbWUgb3BhY2l0eSBhcHBsaWVkXG4gICAgICAgIC8vIHRvIGl0IGFscmVhZHkgYW5kIHdlIGRvbid0IHdhbnQgdGhlbSB0byBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlci5cbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIF9jb2xvcihtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpKTtcblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCB7XG4gICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLWVsZXZhdGlvbig0LCAkY29uZmlnKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9jb2xvcihtYXAuZ2V0KCRjb25maWcsIGFjY2VudCkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX2NvbG9yKG1hcC5nZXQoJGNvbmZpZywgd2FybikpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoIHtcbiAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtZWxldmF0aW9uKDI0LCAkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSksIHRleHQpO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUobWFwLmdldCgkY29uZmlnLCBhY2NlbnQpLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUobWFwLmdldCgkY29uZmlnLCB3YXJuKSwgdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kYXRlLXJhbmdlLWlucHV0LWlubmVyW2Rpc2FibGVkXSB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1jYWxlbmRhciB7XG4gICAgZm9udC1mYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHkge1xuICAgIGZvbnQtc2l6ZTogJGNhbGVuZGFyLWJvZHktZm9udC1zaXplO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsLFxuICAubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMuZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogJGNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplO1xuICAgICAgd2VpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBkYXRlLXJhbmdlLWNvbG9ycyhcbiAgJHJhbmdlLWNvbG9yLFxuICAkY29tcGFyaXNvbi1jb2xvcjogcmdiYSgjZjlhYjAwLCAkcmFuZ2UtZmFkZS1hbW91bnQpLFxuICAkb3ZlcmxhcC1jb2xvcjogI2E4ZGFiNSxcbiAgJG92ZXJsYXAtc2VsZWN0ZWQtY29sb3I6IGNvbG9yLmFkanVzdCgkb3ZlcmxhcC1jb2xvciwgJGxpZ2h0bmVzczogLTMwJSkpIHtcblxuICAubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2U6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogJHJhbmdlLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLFxuICAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZTo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29tcGFyaXNvbi1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3JlLFxuICBbZGlyPSdydGwnXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHJhbmdlLWNvbG9yIDUwJSwgJGNvbXBhcmlzb24tY29sb3IgNTAlKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1lbmQ6OmJlZm9yZSxcbiAgW2Rpcj0ncnRsJ10gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLXN0YXJ0OjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAkcmFuZ2UtY29sb3IgNTAlLCAkY29tcGFyaXNvbi1jb2xvciA1MCUpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlID4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLFxuICAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICRvdmVybGFwLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkLFxuICAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZSA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZDogJG92ZXJsYXAtc2VsZWN0ZWQtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1kYXRlcGlja2VyJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvcHJpdmF0ZSc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtZWxldmF0aW9uKDI0LCAkY29uZmlnKTtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgIEBpbmNsdWRlIHR5cG9ncmFwaHktdXRpbHMudHlwb2dyYXBoeS1sZXZlbCgkY29uZmlnLCB0aXRsZSk7XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1kaWFsb2cnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGl2aWRlciB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZGl2aWRlcicpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL2RlbnNpdHkvcHJpdmF0ZS9jb21wYXRpYmlsaXR5JztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvcHJpdmF0ZSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5AdXNlICcuL2V4cGFuc2lvbi12YXJpYWJsZXMnO1xuQHVzZSAnLi9leHBhbnNpb24tbWl4aW5zJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtYWN0aW9uLXJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIEBpbmNsdWRlIGV4cGFuc2lvbi1taXhpbnMucHJpdmF0ZS1leHBhbnNpb24tZm9jdXMge1xuICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgaG92ZXIpO1xuICB9XG5cbiAgLy8gRGlzYWJsZSB0aGUgaG92ZXIgb24gdG91Y2ggZGV2aWNlcyBzaW5jZSBpdCBjYW4gYXBwZWFyIGxpa2UgaXQgaXMgc3R1Y2suIFdlIGNhbid0IHVzZVxuICAvLyBgQG1lZGlhIChob3ZlcilgIGFib3ZlLCBiZWNhdXNlIHRoZSBkZXNrdG9wIHN1cHBvcnQgYnJvd3NlciBzdXBwb3J0IGlzbid0IGdyZWF0LlxuICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKVxuICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbixcbiAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcblxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgICBzaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgICAgd2VpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtd2VpZ2h0KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gICAgQGluY2x1ZGUgdHlwb2dyYXBoeS11dGlscy50eXBvZ3JhcGh5LWxldmVsKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuQG1peGluIGRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkZGVuc2l0eS1zY2FsZTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRleHBhbmRlZC1oZWlnaHQ6IGNvbXBhdGliaWxpdHkucHJpdmF0ZS1kZW5zaXR5LXByb3AtdmFsdWUoXG4gICAgICAgIGV4cGFuc2lvbi12YXJpYWJsZXMuJGhlYWRlci1kZW5zaXR5LWNvbmZpZywgJGRlbnNpdHktc2NhbGUsIGV4cGFuZGVkLWhlaWdodCk7XG4gICRjb2xsYXBzZWQtaGVpZ2h0OiBjb21wYXRpYmlsaXR5LnByaXZhdGUtZGVuc2l0eS1wcm9wLXZhbHVlKFxuICAgICAgZXhwYW5zaW9uLXZhcmlhYmxlcy4kaGVhZGVyLWRlbnNpdHktY29uZmlnLCAkZGVuc2l0eS1zY2FsZSwgY29sbGFwc2VkLWhlaWdodCk7XG5cbiAgQGluY2x1ZGUgY29tcGF0aWJpbGl0eS5wcml2YXRlLWRlbnNpdHktbGVnYWN5LWNvbXBhdGliaWxpdHkoKSB7XG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICAgIGhlaWdodDogJGNvbGxhcHNlZC1oZWlnaHQ7XG5cbiAgICAgICYubWF0LWV4cGFuZGVkIHtcbiAgICAgICAgaGVpZ2h0OiAkZXhwYW5kZWQtaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZXhwYW5zaW9uJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIHByaXZhdGUtZXhwYW5zaW9uLWZvY3VzIHtcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgICYgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gICAgJjpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgICAgICY6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cbkB1c2UgJy4vZm9ybS1maWVsZC1maWxsLXRoZW1lLnNjc3MnO1xuQHVzZSAnLi9mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZS5zY3NzJztcbkB1c2UgJy4vZm9ybS1maWVsZC1vdXRsaW5lLXRoZW1lLnNjc3MnO1xuQHVzZSAnLi9mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lLnNjc3MnO1xuXG4vLyBDb2xvciBzdHlsZXMgdGhhdCBhcHBseSB0byBhbGwgYXBwZWFyYW5jZXMgb2YgdGhlIGZvcm0tZmllbGQuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAuZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuXG4gIC8vIExhYmVsIGNvbG9ycy4gUmVxdWlyZWQgaXMgdXNlZCBmb3IgdGhlIGAqYCBzdGFyIHNob3duIGluIHRoZSBsYWJlbC5cbiAgJGxhYmVsLWNvbG9yOlxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNikpO1xuICAkZm9jdXNlZC1sYWJlbC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5LCB0ZXh0KTtcbiAgJHJlcXVpcmVkLWxhYmVsLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCwgdGV4dCk7XG5cbiAgLy8gVW5kZXJsaW5lIGNvbG9ycy5cbiAgJHVuZGVybGluZS1jb2xvci1iYXNlOlxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJHVuZGVybGluZS1jb2xvci1hY2NlbnQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50LCB0ZXh0KTtcbiAgJHVuZGVybGluZS1jb2xvci13YXJuOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4sIHRleHQpO1xuICAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSwgdGV4dCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1oaW50IHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRmb2N1c2VkLWxhYmVsLWNvbG9yO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgIGNvbG9yOiAkcmVxdWlyZWQtbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWJhc2U7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yO1xuXG4gICAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIFN0eWxpbmcgZm9yIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgZm9ybSBmaWVsZC4gTm90ZSB0aGF0IHdoaWxlIHRoZSBzYW1lIGNhbiBiZVxuICAvLyBhY2hpZXZlZCB3aXRoIHRoZSBuZy0qIGNsYXNzZXMsIHdlIHVzZSB0aGlzIGFwcHJvYWNoIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IHRoZSBzYW1lXG4gIC8vIGxvZ2ljIGlzIHVzZWQgdG8gc3R5bGUgdGhlIGVycm9yIHN0YXRlIGFuZCB0byBzaG93IHRoZSBlcnJvciBtZXNzYWdlcy5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuXG4gICAgICAmLm1hdC1hY2NlbnQsXG4gICAgICAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1lcnJvciB7XG4gICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgfVxuXG4gIEBpbmNsdWRlIGZvcm0tZmllbGQtbGVnYWN5LXRoZW1lLmxlZ2FjeS1jb2xvcigkY29uZmlnKTtcbiAgQGluY2x1ZGUgZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZS5zdGFuZGFyZC1jb2xvcigkY29uZmlnKTtcbiAgQGluY2x1ZGUgZm9ybS1maWVsZC1maWxsLXRoZW1lLmZpbGwtY29sb3IoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIGZvcm0tZmllbGQtb3V0bGluZS10aGVtZS5vdXRsaW5lLWNvbG9yKCRjb25maWcpO1xufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRkZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRkZWR1cGU7XG5cbiAgJGRlZHVwZTogJGRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgcHJlZml4IGFuZCBzdWZmaXggaWNvbnMuXG4gICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZTogMS41O1xuXG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRoZSBpbmZpeC4gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUuXG4gICRpbmZpeC1wYWRkaW5nOiAwLjVlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gRm9udCBzaXplIHRvIHVzZSBmb3IgdGhlIGxhYmVsIGFuZCBzdWJzY3JpcHQgdGV4dC5cbiAgJHN1YnNjcmlwdC1mb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMTAwJTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIEBpbmNsdWRlIHR5cG9ncmFwaHktdXRpbHMudHlwb2dyYXBoeS1sZXZlbCgkY29uZmlnLCBpbnB1dCk7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1ib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCxcbiAgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCB7XG4gICAgLy8gQWxsb3cgaWNvbnMgaW4gYSBwcmVmaXggb3Igc3VmZml4IHRvIGFkYXB0IHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNpemU7XG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIEFsbG93IGljb24gYnV0dG9ucyBpbiBhIHByZWZpeCBvciBzdWZmaXggdG8gYWRhcHQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAubWF0LWljb24tYnV0dG9uIHtcbiAgICAgIGhlaWdodDogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMWVtO1xuICAgICAgd2lkdGg6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDFlbTtcblxuICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAxZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwO1xuICAgIC8vIFRocm93cyBvZmYgdGhlIGJhc2VsaW5lIGlmIHdlIGRvIGl0IGFzIGEgcmVhbCBtYXJnaW4sIHNvIHdlIGRvIGl0IGFzIGEgYm9yZGVyIGluc3RlYWQuXG4gICAgYm9yZGVyLXRvcDogJGluZml4LW1hcmdpbi10b3Agc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgQGluY2x1ZGUgX2xhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgfVxuXG4gICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgQGluY2x1ZGUgX2xhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICAgIHRvcDogLSRpbmZpeC1tYXJnaW4tdG9wO1xuICAgIHBhZGRpbmctdG9wOiAkaW5maXgtbWFyZ2luLXRvcDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgLy8gV2Ugd2FudCB0aGUgdW5kZXJsaW5lIHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50LlxuICAgIGJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgIGZvbnQtc2l6ZTogJHN1YnNjcmlwdC1mb250LXNpemU7XG4gICAgbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1tYXJnaW4tdG9wO1xuXG4gICAgLy8gV2Ugd2FudCB0aGUgc3Vic2NyaXB0IHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50IChhZGp1c3RlZCBmb3IgdGhlIHNtYWxsZXIgZm9udCBzaXplKTtcbiAgICB0b3A6IGNhbGMoMTAwJSAtICN7JHdyYXBwZXItcGFkZGluZy1ib3R0b20gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGV9KTtcbiAgfVxuXG4gIEBpbmNsdWRlIGZvcm0tZmllbGQtbGVnYWN5LXRoZW1lLmxlZ2FjeS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBmb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lLnN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIGZvcm0tZmllbGQtZmlsbC10aGVtZS5maWxsLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIGZvcm0tZmllbGQtb3V0bGluZS10aGVtZS5vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cbkBtaXhpbiBkZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGRlbnNpdHktc2NhbGU6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICBAaW5jbHVkZSBmb3JtLWZpZWxkLWxlZ2FjeS10aGVtZS5wcml2YXRlLWZvcm0tZmllbGQtbGVnYWN5LWRlbnNpdHkoJGRlbnNpdHktc2NhbGUpO1xuICBAaW5jbHVkZSBmb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lLnByaXZhdGUtZm9ybS1maWVsZC1zdGFuZGFyZC1kZW5zaXR5KCRkZW5zaXR5LXNjYWxlKTtcbiAgQGluY2x1ZGUgZm9ybS1maWVsZC1maWxsLXRoZW1lLnByaXZhdGUtZm9ybS1maWVsZC1maWxsLWRlbnNpdHkoJGRlbnNpdHktc2NhbGUpO1xuICBAaW5jbHVkZSBmb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUucHJpdmF0ZS1mb3JtLWZpZWxkLW91dGxpbmUtZGVuc2l0eSgkZGVuc2l0eS1zY2FsZSk7XG59XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1mb3JtLWZpZWxkJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9mb3JtLWNvbW1vbic7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgbGVnYWN5IGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBsZWdhY3ktY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLmdldCgkY29uZmlnLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAkdW5kZXJsaW5lLWNvbG9yOlxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1oaW50IHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBmb3JtLWNvbW1vbi5wcml2YXRlLWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCR1bmRlcmxpbmUtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRsZWdhY3ktZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX2xhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gV2UgdXNlIHBlcnNwZWN0aXZlIHRvIGZpeCB0aGUgdGV4dCBibHVycmluZXNzIGFzIGRlc2NyaWJlZCBoZXJlOlxuICAvLyBodHRwOi8vd3d3LnVzZXJhZ2VudG1hbi5jb20vYmxvZy8yMDE0LzA1LzA0L2ZpeGluZy10eXBvZ3JhcGh5LWluc2lkZS1vZi0yLWQtY3NzLXRyYW5zZm9ybXMvXG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcpIHNjYWxlKCRmb250LXNjYWxlKSBwZXJzcGVjdGl2ZSgxMDBweClcbiAgdHJhbnNsYXRlWigwLjAwMXB4ICsgJGxlZ2FjeS1kZWR1cGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJGxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG5cbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRsZWdhY3ktZGVkdXBlO1xuXG4gICRsZWdhY3ktZGVkdXBlOiAkbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuLy8gU2FtZSBhcyBtaXhpbiBhYm92ZSwgYnV0IG9taXRzIHRoZSB0cmFuc2xhdGVaIGZvciBwcmludGluZyBwdXJwb3Nlcy5cbkBtaXhpbiBfbGFiZWwtZmxvYXRpbmctcHJpbnQoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICAvLyBUaGlzIHJlc3VsdHMgaW4gYSBzbWFsbCBqaXR0ZXIgYWZ0ZXIgdGhlIGxhYmVsIGZsb2F0cyBvbiBGaXJlZm94LCB3aGljaCB0aGVcbiAgLy8gdHJhbnNsYXRlWiBmaXhlcy5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJGxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIC8vIFRoZSB0cmlja3MgYWJvdmUgdXNlZCB0byBzbW9vdGggb3V0IHRoZSBhbmltYXRpb24gb24gY2hyb21lIGFuZCBmaXJlZm94IGFjdHVhbGx5IG1ha2UgdGhpbmdzXG4gIC8vIHdvcnNlIG9uIElFLCBzbyB3ZSBkb24ndCBpbmNsdWRlIHRoZW0gaW4gdGhlIElFIHZlcnNpb24uXG4gICRsZWdhY3ktZGVkdXBlOiAkbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIGxlZ2FjeS10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogdHlwb2dyYXBoeS11dGlscy5saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHNlZW0gdG8gbWVhc3VyZSBmcm9tIHRoZSBlZGdlXG4gIC8vIG9mIHRoZSB0ZXh0IGl0c2VsZiwgbm90IHRoZSBlZGdlIG9mIHRoZSBsaW5lOyB0aGVyZWZvcmUgd2Ugc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcuXG4gICRpbmZpeC1wYWRkaW5nOiAwLjVlbSAtICRsaW5lLXNwYWNpbmc7XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLiBXZSBhZ2FpbiBuZWVkIHRvIHN1YnRyYWN0IG9mZiB0aGUgbGluZSBzcGFjaW5nIHNpbmNlIHRoZSBtb2NrcyBtZWFzdXJlIHRvIHRoZSBlZGdlIG9mIHRoZVxuICAvLyB0ZXh0LCBub3QgdGhlICBlZGdlIG9mIHRoZSBsaW5lLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlIC0gKCRsaW5lLXNwYWNpbmcgKiAyKTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX2xhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICAgIGJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgICAgLy8gV2Ugd2FudCB0aGUgc3Vic2NyaXB0IHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gdHJhbnNsYXRlWiBjYXVzZXMgdGhlIGxhYmVsIHRvIG5vdCBhcHBlYXIgd2hpbGUgcHJpbnRpbmcsIHNvIHdlIG92ZXJyaWRlIGl0IHRvIG5vdFxuICAvLyBhcHBseSB0cmFuc2xhdGVaIHdoaWxlIHByaW50aW5nXG4gIEBtZWRpYSBwcmludCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX2xhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcHJpdmF0ZS1mb3JtLWZpZWxkLWxlZ2FjeS1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBsZWdhY3ktdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZm9ybS1maWVsZC1sZWdhY3knKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBsZWdhY3ktY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgcHJpdmF0ZS1mb3JtLWZpZWxkLWxlZ2FjeS1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbGVnYWN5LXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vdGhlbWluZy90aGVtaW5nJztcblxuLy8gUmVuZGVycyBhIGdyYWRpZW50IGZvciBzaG93aW5nIHRoZSBkYXNoZWQgbGluZSB3aGVuIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbi8vIFVubGlrZSB1c2luZyBhIGJvcmRlciwgYSBncmFkaWVudCBhbGxvd3MgdXMgdG8gYWRqdXN0IHRoZSBzcGFjaW5nIG9mIHRoZSBkb3R0ZWQgbGluZVxuLy8gdG8gbWF0Y2ggdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuQG1peGluIHByaXZhdGUtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yIDAlLCAkY29sb3IgMzMlLCB0cmFuc3BhcmVudCAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogNHB4IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gRmlndXJlcyBvdXQgdGhlIGNvbG9yIG9mIHRoZSBwbGFjZWhvbGRlciBmb3IgYSBmb3JtIGNvbnRyb2wuXG4vLyBVc2VkIHByaW1hcmlseSB0byBwcmV2ZW50IHRoZSB2YXJpb3VzIGZvcm0gY29udHJvbHMgZnJvbVxuLy8gYmVjb21pbmcgb3V0IG9mIHN5bmMgc2luY2UgdGhlc2UgY29sb3JzIGFyZW4ndCBpbiBhIHBhbGV0dGUuXG5AZnVuY3Rpb24gcHJpdmF0ZS1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCRjb25maWcpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAuZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuICBAcmV0dXJuIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQsXG4gICAgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9mb3JtLWNvbW1vbic7XG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgc3RhbmRhcmQgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIHN0YW5kYXJkLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC5nZXQoJGNvbmZpZywgaXMtZGFyayk7XG4gICR1bmRlcmxpbmUtY29sb3I6XG4gICAgdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjQyKSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgZm9ybS1jb21tb24ucHJpdmF0ZS1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHByaXZhdGUtZm9ybS1maWVsZC1zdGFuZGFyZC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBzdGFuZGFyZC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1mb3JtLWZpZWxkLXN0YW5kYXJkJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgc3RhbmRhcmQtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgcHJpdmF0ZS1mb3JtLWZpZWxkLXN0YW5kYXJkLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBzdGFuZGFyZC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBmaWxsIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBmaWxsLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC5nZXQoJGNvbmZpZywgaXMtZGFyayk7XG5cbiAgJGZpbGwtYmFja2dyb3VuZDpcbiAgICB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjEsIDAuMDQpKTtcbiAgJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDpcbiAgICB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjA1LCAwLjAyKSk7XG4gICR1bmRlcmxpbmUtY29sb3I6XG4gICAgdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRmaWxsLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRmaWxsLWRlZHVwZSlcbiAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkZmlsbC1kZWR1cGU7XG5cbiAgJGZpbGwtZGVkdXBlOiAkZmlsbC1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBmaWxsLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdG9wIG9mIHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctdG9wOiAwLjI1ZW07XG4gIC8vIFRoZSBwYWRkaW5nIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctYm90dG9tOiAwLjc1ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBmaWxsIGFwcGVhcmFuY2UuXG4gICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC41ZW07XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nLXRvcCAwICRpbmZpeC1wYWRkaW5nLWJvdHRvbSAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmctdG9wO1xuICAgICAgbWFyZ2luLXRvcDogJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBwcml2YXRlLWZvcm0tZmllbGQtZmlsbC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBmaWxsLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWZvcm0tZmllbGQtZmlsbCcpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGZpbGwtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgcHJpdmF0ZS1mb3JtLWZpZWxkLWZpbGwtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGZpbGwtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgb3V0bGluZSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gb3V0bGluZS1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLmdldCgkY29uZmlnLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICRvdXRsaW5lLWNvbG9yOlxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMywgMC4xMikpO1xuICAkb3V0bGluZS1jb2xvci1ob3ZlcjpcbiAgICB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAxLCAwLjg3KSk7XG4gICRvdXRsaW5lLWNvbG9yLXByaW1hcnk6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSk7XG4gICRvdXRsaW5lLWNvbG9yLWFjY2VudDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQpO1xuICAkb3V0bGluZS1jb2xvci13YXJuOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4pO1xuICAkb3V0bGluZS1jb2xvci1kaXNhYmxlZDpcbiAgICB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjE1LCAwLjA2KSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1ob3ZlcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXByaW1hcnk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1hY2NlbnQ7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbGFzcyByZXBlYXRlZCBzbyB0aGF0IHJ1bGUgaXMgc3BlY2lmaWMgZW5vdWdoIHRvIG92ZXJyaWRlIGZvY3VzZWQgYWNjZW50IGNvbG9yIGNhc2UuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRvdXRsaW5lLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWRlZHVwZSlcbiAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG91dGxpbmUtZGVkdXBlO1xuXG4gICRvdXRsaW5lLWRlZHVwZTogJG91dGxpbmUtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gb3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogdHlwb2dyYXBoeS11dGlscy5saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBwYWRkaW5nIGFib3ZlIGFuZCBiZWxvdyB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nOiAxZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2UuXG4gICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC4yNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICAgIG1hcmdpbi10b3A6ICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX2xhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHByaXZhdGUtZm9ybS1maWVsZC1vdXRsaW5lLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG91dGxpbmUtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZm9ybS1maWVsZC1vdXRsaW5lJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgb3V0bGluZS1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBwcml2YXRlLWZvcm0tZmllbGQtb3V0bGluZS1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgb3V0bGluZS10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1pY29uIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHByaW1hcnksIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQsIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2FybiwgdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtaWNvbicpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy9wYWxldHRlJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvZm9ybS1jb21tb24nO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS92ZW5kb3ItcHJlZml4ZXMnO1xuXG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudDpkaXNhYmxlZCxcbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHByaW1hcnksIHRleHQpO1xuXG4gICAgQGluY2x1ZGUgdmVuZG9yLXByZWZpeGVzLmlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiBmb3JtLWNvbW1vbi5wcml2YXRlLWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLy8gT24gZGFyayB0aGVtZXMgd2Ugc2V0IHRoZSBuYXRpdmUgYHNlbGVjdGAgY29sb3IgdG8gc29tZSBzaGFkZSBvZiB3aGl0ZSxcbiAgICAvLyBob3dldmVyIHRoZSBjb2xvciBwcm9wYWdhdGVzIHRvIGFsbCBvZiB0aGUgYG9wdGlvbmAgZWxlbWVudHMsIHdoaWNoIGFyZVxuICAgIC8vIGFsd2F5cyBvbiBhIHdoaXRlIGJhY2tncm91bmQgaW5zaWRlIHRoZSBkcm9wZG93biwgY2F1c2luZyB0aGVtIHRvIGJsZW5kIGluLlxuICAgIC8vIFNpbmNlIHdlIGNhbid0IGNoYW5nZSBiYWNrZ3JvdW5kIG9mIHRoZSBkcm9wZG93biwgd2UgbmVlZCB0byBleHBsaWNpdGx5XG4gICAgLy8gcmVzZXQgdGhlIGNvbG9yIG9mIHRoZSBvcHRpb25zIHRvIHNvbWV0aGluZyBkYXJrLlxuICAgIEBpZiAobWFwLmdldCgkY29uZmlnLCBpcy1kYXJrKSkge1xuICAgICAgb3B0aW9uIHtcbiAgICAgICAgY29sb3I6IHBhbGV0dGUuJGRhcmstcHJpbWFyeS10ZXh0O1xuICAgICAgfVxuXG4gICAgICBvcHRpb246ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogcGFsZXR0ZS4kZGFyay1kaXNhYmxlZC10ZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtYWNjZW50IC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50LCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQsXG4gIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2FybiwgdGV4dCk7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4sIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogdHlwb2dyYXBoeS11dGlscy5saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuXG4gIC8vIDxpbnB1dD4gZWxlbWVudHMgc2VlbSB0byBoYXZlIHRoZWlyIGhlaWdodCBzZXQgc2xpZ2h0bHkgdG9vIGxhcmdlIG9uIFNhZmFyaSBjYXVzaW5nIHRoZSB0ZXh0IHRvXG4gIC8vIGJlIG1pc2FsaWduZWQgdy5yLnQuIHRoZSBwbGFjZWhvbGRlci4gQWRkaW5nIHRoaXMgbWFyZ2luIGNvcnJlY3RzIGl0LlxuICBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgbWFyZ2luLXRvcDogLSRsaW5lLXNwYWNpbmcgKiAxZW07XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1pbnB1dCcpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBzdHlsZWxpbnQtZGlzYWJsZSBtYXRlcmlhbC9uby1wcmVmaXhlc1xuQG1peGluIHVzZXItc2VsZWN0KCR2YWx1ZSkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tb3otdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgLW1zLXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIHVzZXItc2VsZWN0OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGN1cnNvci1ncmFiIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG4gIGN1cnNvcjogZ3JhYjtcbn1cblxuQG1peGluIGN1cnNvci1ncmFiYmluZyB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cblxuQG1peGluIGJhY2tmYWNlLXZpc2liaWxpdHkoJHZhbHVlKSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBwb3NpdGlvbi1zdGlja3koJGltcG9ydGFudDogZmFsc2UpIHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5ICN7aWYoJGltcG9ydGFudCwgJyFpbXBvcnRhbnQnLCAnJyl9O1xuICBwb3NpdGlvbjogc3RpY2t5ICN7aWYoJGltcG9ydGFudCwgJyFpbXBvcnRhbnQnLCAnJyl9O1xufVxuLy8gc3R5bGVsaW50LWVuYWJsZVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9saXN0LWNvbW1vbic7XG5cblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1saXN0LWJhc2Uge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtbGlzdC1pdGVtLWRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGRpc2FibGVkLWxpc3Qtb3B0aW9uKTtcbiAgfVxuXG4gIC5tYXQtbGlzdC1vcHRpb24sXG4gIC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW0sXG4gIC5tYXQtYWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW0ge1xuICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCAnaG92ZXInKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbiB7XG4gICAgJiwgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGhvdmVyLCAwLjEyKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgJGZvbnQtZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcpO1xuXG4gIC5tYXQtbGlzdC1pdGVtIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgbGlzdFxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgICAgQGluY2x1ZGUgbGlzdC1jb21tb24uYmFzZSh0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIGxpc3QtY29tbW9uLmJhc2UodHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgZm9udC1mYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG5cbiAgLy8gRGVuc2UgbGlzdFxuICAubWF0LWxpc3QtYmFzZVtkZW5zZV0ge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBAaW5jbHVkZSBsaXN0LWNvbW1vbi5iYXNlKHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBAaW5jbHVkZSBsaXN0LWNvbW1vbi5iYXNlKHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICAgICAgZm9udC1zaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtbGlzdCcpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbWVudS1wYW5lbCB7XG4gICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkY29uZmlnKTtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgJ3RleHQnKTtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICYsXG4gICAgICAmOjphZnRlcixcbiAgICAgIC5tYXQtaWNvbi1uby1jb2xvciB7XG4gICAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtIC5tYXQtaWNvbi1uby1jb2xvcixcbiAgLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlciB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtOmhvdmVyLFxuICAubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgICB3ZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMuZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1tZW51Jykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuQHVzZSAnLi4vY29yZS9kZW5zaXR5L3ByaXZhdGUvY29tcGF0aWJpbGl0eSc7XG5AdXNlICcuL3BhZ2luYXRvci12YXJpYWJsZXMnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LXBhZ2luYXRvciB7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1maXJzdCxcbiAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LFxuICAgIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAgIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICAgICAgYm9yZGVyLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRkZW5zaXR5LXNjYWxlOiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGhlaWdodDogY29tcGF0aWJpbGl0eS5wcml2YXRlLWRlbnNpdHktcHJvcC12YWx1ZShwYWdpbmF0b3ItdmFyaWFibGVzLiRkZW5zaXR5LWNvbmZpZyxcbiAgICAkZGVuc2l0eS1zY2FsZSwgaGVpZ2h0KTtcblxuICBAaW5jbHVkZSBjb21wYXRpYmlsaXR5LnByaXZhdGUtZGVuc2l0eS1sZWdhY3ktY29tcGF0aWJpbGl0eSgpIHtcbiAgICAubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICAgICAgbWluLWhlaWdodDogJGhlaWdodDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXBhZ2luYXRvcicpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICdzYXNzOmNvbG9yJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcblxuLy8gQXBwcm94aW1hdGVzIHRoZSBjb3JyZWN0IGJ1ZmZlciBjb2xvciBieSB1c2luZyBhIG1peCBiZXR3ZWVuIHRoZSB0aGVtZSBjb2xvclxuLy8gYW5kIHRoZSB0aGVtZSdzIGJhY2tncm91bmQgY29sb3IuXG5AZnVuY3Rpb24gX2dldC1idWZmZXItY29sb3IoJHRoZW1lLCAkYmFja2dyb3VuZCkge1xuICAkdGhlbWUtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkdGhlbWUpO1xuICAvLyBSZXR1cm4gZmFsbGJhY2sgY29sb3IgaWYgdGhlIHRoZW1lIHVzZXMgdmFyaWFibGVzIHRvIGRlZmluZSBjb2xvcnMuXG4gIEBpZiAobWV0YS50eXBlLW9mKCR0aGVtZS1jb2xvcikgIT0gJ2NvbG9yJyBvciBtZXRhLnR5cGUtb2YoJGJhY2tncm91bmQpICE9ICdjb2xvcicpIHtcbiAgICBAcmV0dXJuIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkdGhlbWUsIGxpZ2h0ZXIpO1xuICB9XG4gIEByZXR1cm4gY29sb3IubWl4KCR0aGVtZS1jb2xvciwgJGJhY2tncm91bmQsICR3ZWlnaHQ6IDI1JSk7XG59XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCksIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgIGZpbGw6IF9nZXQtYnVmZmVyLWNvbG9yKCRwcmltYXJ5LCAkYmFja2dyb3VuZCk7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IF9nZXQtYnVmZmVyLWNvbG9yKCRwcmltYXJ5LCAkYmFja2dyb3VuZCk7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogX2dldC1idWZmZXItY29sb3IoJGFjY2VudCwgJGJhY2tncm91bmQpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBfZ2V0LWJ1ZmZlci1jb2xvcigkYWNjZW50LCAkYmFja2dyb3VuZCk7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IF9nZXQtYnVmZmVyLWNvbG9yKCR3YXJuLCAkYmFja2dyb3VuZCk7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IF9nZXQtYnVmZmVyLWNvbG9yKCR3YXJuLCAkYmFja2dyb3VuZCk7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1wcm9ncmVzcy1iYXInKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1zcGlubmVyLCAubWF0LXNwaW5uZXIge1xuICAgIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IGNpcmNsZSB7XG4gICAgICBzdHJva2U6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcicpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cbkBtaXhpbiBfY29sb3IoJHBhbGV0dGUpIHtcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsXG4gIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLFxuICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsXG4gICY6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSk7XG4gIH1cbn1cblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX2NvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX2NvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX2NvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIG5lZWRzIGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHRoZSBjbGFzc2VzIGFib3ZlIGFyZSBjb21iaW5lZFxuICAgIC8vIChlLmcuIGAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50YCkgd2hpY2ggaW5jcmVhc2VzIHRoZWlyIHNwZWNpZmljaXR5IGEgbG90LlxuICAgIC8vIFRPRE86IGNvbnNpZGVyIG1ha2luZyB0aGUgc2VsZWN0b3JzIGludG8gZGVzY2VuZGFudHMgKGAubWF0LXByaW1hcnkgLm1hdC1yYWRpby1idXR0b25gKS5cbiAgICAmLm1hdC1yYWRpby1kaXNhYmxlZCB7XG4gICAgICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLFxuICAgICAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgICAgICBib3JkZXItY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LFxuICAgICAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50IHtcbiAgICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN3aXRjaCB0aGlzIHRvIGEgc29saWQgY29sb3Igc2luY2Ugd2UncmUgdXNpbmcgYG9wYWNpdHlgXG4gICAgLy8gdG8gY29udHJvbCBob3cgb3BhcXVlIHRoZSByaXBwbGUgc2hvdWxkIGJlLlxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLmdldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXJhZGlvJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvcHJpdmF0ZSc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL2Zvcm0tY29tbW9uJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG5cbiAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBmb3JtLWNvbW1vbi5wcml2YXRlLWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkY29uZmlnKTtcblxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpIHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgaG92ZXIsIDAuMTIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAmLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSwgdGV4dCk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCwgdGV4dCk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuLCB0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWludmFsaWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2FybiwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAubWF0LXNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodCAqIDFlbTtcbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXNlbGVjdCcpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOmNvbG9yJztcbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I6ICB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLXNpZGUtYm9yZGVyOiBzb2xpZCAxcHggdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWRyYXdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtZHJhd2VyLXB1c2gge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1kcmF3ZXItc2lkZSkge1xuICAgICAgLy8gVGhlIGVsZXZhdGlvbiBvZiB6LTE2IGlzIG5vdGVkIGluIHRoZSBkZXNpZ24gc3BlY2lmaWNhdGlvbnMuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWRyYXdlci5odG1sXG4gICAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtZWxldmF0aW9uKDE2LCAkY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93biB7XG4gICAgJG9wYWNpdHk6IDAuNjtcbiAgICAkYmFja2Ryb3AtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgY2FyZCwgJG9wYWNpdHkpO1xuXG4gICAgQGlmIChtZXRhLnR5cGUtb2YoJGJhY2tkcm9wLWNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgLy8gV2UgdXNlIGludmVydCgpIGhlcmUgdG8gaGF2ZSB0aGUgZGFya2VuIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGV4cGVjdGVkIHRvIGJlIHVzZWQuIElmIHRoZVxuICAgICAgLy8gYmFja2dyb3VuZCBpcyBsaWdodCwgd2UgdXNlIGEgZGFyayBiYWNrZHJvcC4gSWYgdGhlIGJhY2tncm91bmQgaXMgZGFyayxcbiAgICAgIC8vIHdlIHVzZSBhIGxpZ2h0IGJhY2tkcm9wLlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IuaW52ZXJ0KCRiYWNrZHJvcC1jb2xvcik7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGNvdWxkbid0IHJlc29sdmUgdGhlIGJhY2tkcm9wIGNvbG9yIHRvIGEgY29sb3IgdmFsdWUsIGZhbGwgYmFjayB0byB1c2luZ1xuICAgICAgLy8gYG9wYWNpdHlgIHRvIG1ha2UgaXQgb3BhcXVlIHNpbmNlIGl0cyBlbmQgdmFsdWUgY291bGQgYmUgYSBzb2xpZCBjb2xvci5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZHJvcC1jb2xvcjtcbiAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXNpZGVuYXYnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9wcml2YXRlJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy9wYWxldHRlJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuQG1peGluIF9jaGVja2VkLWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpIHtcbiAgJi5tYXQtY2hlY2tlZCB7XG4gICAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgICAvLyBPcGFjaXR5IGlzIGRldGVybWluZWQgZnJvbSB0aGUgc3BlY3MgZm9yIHRoZSBzZWxlY3Rpb24gY29udHJvbHMuXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvc2VsZWN0aW9uLWNvbnRyb2xzLmh0bWwjc3BlY3NcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlLCAwLjU0KTtcbiAgICB9XG5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkaXMtZGFyazogbWFwLmdldCgkY29uZmlnLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAvLyBDb2xvciBodWVzIGFyZSBiYXNlZCBvbiB0aGUgc3BlY3Mgd2hpY2ggYnJpZWZseSBzaG93IHRoZSBodWVzIHRoYXQgYXJlIGFwcGxpZWQgdG8gYSBzd2l0Y2guXG4gIC8vIFRoZSAyMDE4IHNwZWNzIG5vIGxvbmdlciBkZXNjcmliZSBob3cgZGFyayBzd2l0Y2hlcyBzaG91bGQgbG9vayBsaWtlLiBEdWUgdG8gdGhlIGxhY2sgb2ZcbiAgLy8gaW5mb3JtYXRpb24gZm9yIGRhcmsgdGhlbWVkIHN3aXRjaGVzLCB3ZSBwYXJ0aWFsbHkga2VlcCB0aGUgb2xkIGJlaGF2aW9yIHRoYXQgaXMgYmFzZWQgb25cbiAgLy8gdGhlIHByZXZpb3VzIHNwZWNpZmljYXRpb25zLiBGb3IgdGhlIGNoZWNrZWQgY29sb3Igd2UgYWx3YXlzIHVzZSB0aGUgYGRlZmF1bHRgIGh1ZSBiZWNhdXNlXG4gIC8vIHRoYXQgZm9sbG93cyBNREMgYW5kIGFsc28gbWFrZXMgaXQgZWFzaWVyIGZvciBwZW9wbGUgdG8gY3JlYXRlIGEgY3VzdG9tIHRoZW1lIHdpdGhvdXQgbmVlZGluZ1xuICAvLyB0byBzcGVjaWZ5IGVhY2ggaHVlIGluZGl2aWR1YWxseS5cbiAgJHRodW1iLXVuY2hlY2tlZC1odWU6IGlmKCRpcy1kYXJrLCA0MDAsIDUwKTtcbiAgJHRodW1iLWNoZWNrZWQtaHVlOiBkZWZhdWx0O1xuXG4gICRiYXItdW5jaGVja2VkLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgJHJpcHBsZS11bmNoZWNrZWQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUge1xuICAgIEBpbmNsdWRlIF9jaGVja2VkLWNvbG9yKCRhY2NlbnQsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG5cbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9jaGVja2VkLWNvbG9yKCRwcmltYXJ5LCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX2NoZWNrZWQtY29sb3IoJHdhcm4sICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtZWxldmF0aW9uKDEsICRjb25maWcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZShwYWxldHRlLiRncmV5LXBhbGV0dGUsICR0aHVtYi11bmNoZWNrZWQtaHVlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhci11bmNoZWNrZWQtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1zbGlkZS10b2dnbGUnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG5AbWl4aW4gX2lubmVyLWNvbnRlbnQtdGhlbWUoJHBhbGV0dGUpIHtcbiAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgLm1hdC1zbGlkZXItdGh1bWIsXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICAkb3BhY2l0eTogMC4yO1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlLCBkZWZhdWx0LCAkb3BhY2l0eSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmIChtZXRhLnR5cGUtb2YoJGNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAkbWF0LXNsaWRlci1vZmYtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNsaWRlci1vZmYtYWN0aXZlKTtcbiAgJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yOlxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2xpZGVyLW1pbik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yOlxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTogMC43O1xuICAkbWF0LXNsaWRlci10aWNrLWNvbG9yOlxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgYmFzZSwgJG1hdC1zbGlkZXItdGljay1vcGFjaXR5KTtcbiAgJG1hdC1zbGlkZXItdGljay1zaXplOiAycHg7XG5cbiAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBfaW5uZXItY29udGVudC10aGVtZSgkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LWFjY2VudCB7XG4gICAgQGluY2x1ZGUgX2lubmVyLWNvbnRlbnQtdGhlbWUoJGFjY2VudCk7XG4gIH1cblxuICAubWF0LXdhcm4ge1xuICAgIEBpbmNsdWRlIF9pbm5lci1jb250ZW50LXRoZW1lKCR3YXJuKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyOmhvdmVyLFxuICAuY2RrLWZvY3VzZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItZGlzYWJsZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXG4gICAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1taW4tdmFsdWUge1xuICAgIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICAgICAgJG9wYWNpdHk6IDAuMTI7XG4gICAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgYmFzZSwgJG9wYWNpdHkpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gICAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgICAgQGlmIChtZXRhLnR5cGUtb2YoJGNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyB7XG4gICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItY29sb3I7XG4gICAgICB9XG5cbiAgICAgICYuY2RrLWZvY3VzZWQge1xuICAgICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXIge1xuICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItdGljay1jb2xvcjtcblxuICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgIEBpZiAobWV0YS50eXBlLW9mKCRtYXQtc2xpZGVyLXRpY2stY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICBvcGFjaXR5OiAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgICAvLyBGaXJlZm94IGRvZXNuJ3QgZHJhdyB0aGUgZ3JhZGllbnQgY29ycmVjdGx5IHdpdGggJ3RvIHJpZ2h0J1xuICAgIC8vIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTMxNDMxOSkuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDAuMDAwMWRlZywgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcblxuICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgIEBpZiAobWV0YS50eXBlLW9mKCRtYXQtc2xpZGVyLXRpY2stY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICBvcGFjaXR5OiAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItdmVydGljYWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmIChtZXRhLnR5cGUtb2YoJG1hdC1zbGlkZXItdGljay1jb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICB3ZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMuZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1zbGlkZXInKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuQHVzZSAnLi4vY29yZS9kZW5zaXR5L3ByaXZhdGUvY29tcGF0aWJpbGl0eSc7XG5AdXNlICcuL3N0ZXBwZXItdmFyaWFibGVzJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuXG4gIC5tYXQtc3RlcC1oZWFkZXIge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgLy8gT24gdG91Y2ggZGV2aWNlcyB0aGUgOmhvdmVyIHN0YXRlIHdpbGwgbGluZ2VyIG9uIHRoZSBlbGVtZW50IGFmdGVyIGEgdGFwLlxuICAgIC8vIFJlc2V0IGl0IHZpYSBgQG1lZGlhYCBhZnRlciB0aGUgZGVjbGFyYXRpb24sIGJlY2F1c2UgdGhlIG1lZGlhIHF1ZXJ5IGlzbid0XG4gICAgLy8gc3VwcG9ydGVkIGJ5IGFsbCBicm93c2VycyB5ZXQuXG4gICAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLFxuICAgIC5tYXQtc3RlcC1vcHRpb25hbCB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbiB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSk7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgLm1hdC1zdGVwLWljb24ge1xuICAgICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbiAgICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4gICAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQpO1xuICAgICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgLm1hdC1zdGVwLWljb24ge1xuICAgICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4gICAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxuICAgICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2Fybik7XG4gICAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4sIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVycm9yIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2FybiwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZSB7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2FybiwgdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwsIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgfVxuXG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmUge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsXG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICAgIGJvcmRlci10b3AtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLCAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gICAgZm9udC1mYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgICB3ZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMuZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9O1xuICB9XG5cbiAgLm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvciB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gICAgZm9udC1zaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVkIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgd2VpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfTtcbiAgfVxufVxuXG5AbWl4aW4gZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRkZW5zaXR5LXNjYWxlOiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGhlaWdodDogY29tcGF0aWJpbGl0eS5wcml2YXRlLWRlbnNpdHktcHJvcC12YWx1ZShzdGVwcGVyLXZhcmlhYmxlcy4kZGVuc2l0eS1jb25maWcsXG4gICAgJGRlbnNpdHktc2NhbGUsIGhlaWdodCk7XG4gICR2ZXJ0aWNhbC1wYWRkaW5nOiAoJGhlaWdodCAtIHN0ZXBwZXItdmFyaWFibGVzLiRsYWJlbC1oZWFkZXItaGVpZ2h0KSAvIDI7XG5cbiAgQGluY2x1ZGUgY29tcGF0aWJpbGl0eS5wcml2YXRlLWRlbnNpdHktbGVnYWN5LWNvbXBhdGliaWxpdHkoKSB7XG4gICAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcbiAgICAgIGhlaWdodDogJGhlaWdodDtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcixcbiAgICAubWF0LXZlcnRpY2FsLXN0ZXBwZXItaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6ICR2ZXJ0aWNhbC1wYWRkaW5nIHN0ZXBwZXItdmFyaWFibGVzLiRzaWRlLWdhcDtcbiAgICB9XG5cbiAgICAvLyBFbnN1cmVzIHRoYXQgdGhlIHZlcnRpY2FsIGxpbmVzIGZvciB0aGUgc3RlcCBjb250ZW50IGV4Y2VlZCBpbnRvIHRoZSBzdGVwXG4gICAgLy8gaGVhZGVycyB3aXRoIGEgZ2l2ZW4gZGlzdGFuY2UgKGAkbWF0LXN0ZXBwZXItbGluZS1nYXBgKSB0byB0aGUgc3RlcCBpY29uLlxuICAgIC5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmUge1xuICAgICAgdG9wOiBzdGVwcGVyLXZhcmlhYmxlcy4kbGluZS1nYXAgLSAkdmVydGljYWwtcGFkZGluZztcbiAgICAgIGJvdHRvbTogc3RlcHBlci12YXJpYWJsZXMuJGxpbmUtZ2FwIC0gJHZlcnRpY2FsLXBhZGRpbmc7XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlcyB0aGF0IHRoZSBob3Jpem9udGFsIGxpbmVzIGZvciB0aGUgc3RlcCBoZWFkZXIgYXJlIGNlbnRlcmVkIHZlcnRpY2FsbHkuXG4gICAgLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xuICAgICAgJjo6YWZ0ZXIsICY6OmJlZm9yZSB7XG4gICAgICAgIHRvcDogJHZlcnRpY2FsLXBhZGRpbmcgKyBzdGVwcGVyLXZhcmlhYmxlcy4kbGFiZWwtaGVhZGVyLWhlaWdodCAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlcyB0aGF0IHRoZSBob3Jpem9udGFsIGxpbmUgZm9yIHRoZSBzdGVwIGNvbnRlbnQgaXMgYWxpZ25lZCBjZW50ZXJlZCB2ZXJ0aWNhbGx5LlxuICAgIC5tYXQtc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20gLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG4gICAgICB0b3A6ICR2ZXJ0aWNhbC1wYWRkaW5nICsgc3RlcHBlci12YXJpYWJsZXMuJGxhYmVsLWhlYWRlci1oZWlnaHQgLyAyO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc3RlcHBlcicpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6Y29sb3InO1xuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XG4gICAgJHRhYmxlLWJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgICAkdGV4dC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAvLyBCZWNhdXNlIHRoZSBhcnJvdyBpcyBtYWRlIHVwIG9mIG11bHRpcGxlIGVsZW1lbnRzIHRoYXQgYXJlIHN0YWNrZWQgb24gdG9wIG9mIGVhY2ggb3RoZXIsXG4gICAgLy8gd2UgY2FuJ3QgdXNlIHRoZSBzZW1pLXRyYW5zcGFyZW50IGNvbG9yIGZyb20gdGhlIHRoZW1lIGRpcmVjdGx5LiBJZiB0aGUgdmFsdWUgaXMgYSBjb2xvclxuICAgIC8vICp0eXBlKiwgd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kXG4gICAgLy8gdXNpbmcgdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGUgcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kXG4gICAgLy8gd2hlbiBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci4gT3RoZXJ3aXNlLCBpZiBpdCByZXNvbHZlcyB0byBzb21ldGhpbmcgZGlmZmVyZW50XG4gICAgLy8gKGUuZy4gaXQgcmVzb2x2ZXMgdG8gYSBDU1MgdmFyaWFibGUpLCB3ZSB1c2UgdGhlIGNvbG9yIGRpcmVjdGx5LlxuICAgIEBpZiAobWV0YS50eXBlLW9mKCR0YWJsZS1iYWNrZ3JvdW5kKSA9PSBjb2xvciBhbmQgbWV0YS50eXBlLW9mKCR0ZXh0LWNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgJHRleHQtb3BhY2l0eTogb3BhY2l0eSgkdGV4dC1jb2xvcik7XG4gICAgICBjb2xvcjogY29sb3IubWl4KCR0YWJsZS1iYWNrZ3JvdW5kLCByZ2JhKCR0ZXh0LWNvbG9yLCAxKSwgKDEgLSAkdGV4dC1vcGFjaXR5KSAqIDEwMCUpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc29ydCcpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGhlYWRlci1ib3JkZXI6IDFweCBzb2xpZCB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtdGFiLW5hdi1iYXIsXG4gIC5tYXQtdGFiLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogJGhlYWRlci1ib3JkZXI7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIge1xuICAgIC5tYXQtdGFiLW5hdi1iYXIsXG4gICAgLm1hdC10YWItaGVhZGVyIHtcbiAgICAgIGJvcmRlci10b3A6ICRoZWFkZXItYm9yZGVyO1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC10YWItZGlzYWJsZWQge1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGhlYWRlciBib3JkZXIgd2hlbiB0aGVyZSBpcyBhIGJhY2tncm91bmQgY29sb3JcbiAgLm1hdC10YWItZ3JvdXBbY2xhc3MqPSdtYXQtYmFja2dyb3VuZC0nXSAubWF0LXRhYi1oZWFkZXIsXG4gIC5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPSdtYXQtYmFja2dyb3VuZC0nXSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG5cbiAgLm1hdC10YWItZ3JvdXAsIC5tYXQtdGFiLW5hdi1iYXIge1xuICAgICR0aGVtZS1jb2xvcnM6IChcbiAgICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgICAgYWNjZW50OiAkYWNjZW50LFxuICAgICAgd2FybjogJHdhcm5cbiAgICApO1xuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCB0aGUgZm9yZWdyb3VuZCBjb2xvciBvZiB0aGUgdGFic1xuICAgICAgJi5tYXQtI3skbmFtZX0ge1xuICAgICAgICBAaW5jbHVkZSBfbGFiZWwtZm9jdXMtY29sb3IoJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgX2luay1iYXItY29sb3IoJGNvbG9yKTtcblxuICAgICAgICAvLyBPdmVycmlkZSBpbmsgYmFyIHdoZW4gYmFja2dyb3VuZCBjb2xvciBpcyB0aGUgc2FtZVxuICAgICAgICAmLm1hdC1iYWNrZ3JvdW5kLSN7JG5hbWV9IHtcbiAgICAgICAgICA+IC5tYXQtdGFiLWhlYWRlciwgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBAaW5jbHVkZSBfaW5rLWJhci1jb2xvcigkY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWNvbG9ycyB7XG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgdGFicyBhbmQgb3ZlcnJpZGUgZm9jdXMgY29sb3JcbiAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICBAaW5jbHVkZSBfbGFiZWwtZm9jdXMtY29sb3IoJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgX3RhYnMtYmFja2dyb3VuZCgkY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX2luay1iYXItY29sb3IoJGNvbG9yLCAkaHVlOiBkZWZhdWx0KSB7XG4gIC5tYXQtaW5rLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRjb2xvciwgJGh1ZSk7XG4gIH1cbn1cblxuQG1peGluIF9sYWJlbC1mb2N1cy1jb2xvcigkdGFiLWZvY3VzLWNvbG9yKSB7XG4gIC5tYXQtdGFiLWxhYmVsLFxuICAubWF0LXRhYi1saW5rIHtcbiAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCB7XG4gICAgICAmOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHRhYi1mb2N1cy1jb2xvciwgbGlnaHRlciwgMC4zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF90YWJzLWJhY2tncm91bmQoJGJhY2tncm91bmQtY29sb3IpIHtcbiAgLy8gTm90ZSB0aGF0IHRoZXNlIHNlbGVjdG9ycyB0YXJnZXQgZGlyZWN0IGRlc2NlbmRhbnRzIHNvXG4gIC8vIHRoYXQgdGhlIHN0eWxlcyBkb24ndCBhcHBseSB0byBhbnkgbmVzdGVkIHRhYiBncm91cHMuXG5cbiAgLy8gU2V0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSB0YWIgZ3JvdXBcbiAgPiAubWF0LXRhYi1oZWFkZXIsID4gLm1hdC10YWItbGluay1jb250YWluZXIsID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZC1jb2xvcik7XG4gIH1cblxuICAvLyBTZXQgbGFiZWxzIHRvIGNvbnRyYXN0IGFnYWluc3QgYmFja2dyb3VuZFxuICA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1sYWJlbCwgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldCBwYWdpbmF0aW9uIGNoZXZyb25zIHRvIGNvbnRyYXN0IGJhY2tncm91bmRcbiAgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbixcbiAgPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLFxuICA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUsXG4gID4gLm1hdC10YWItaGVhZGVyIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUge1xuICAgIGJvcmRlci1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gID4gLm1hdC10YWItaGVhZGVyIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sXG4gID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gIH1cblxuICAvLyBTZXQgcmlwcGxlcyBjb2xvciB0byBiZSB0aGUgY29udHJhc3QgY29sb3Igb2YgdGhlIG5ldyBiYWNrZ3JvdW5kLiBPdGhlcndpc2UgdGhlIHJpcHBsZVxuICAvLyBjb2xvciB3aWxsIGJlIGJhc2VkIG9uIHRoZSBhcHAgYmFja2dyb3VuZCBjb2xvci5cbiAgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1yaXBwbGUtZWxlbWVudCxcbiAgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXJpcHBsZS1lbGVtZW50LFxuICA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC4xMik7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC10YWItZ3JvdXAge1xuICAgIGZvbnQtZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogdHlwb2dyYXBoeS11dGlscy5mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXRhYnMnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS9kZW5zaXR5L3ByaXZhdGUvY29tcGF0aWJpbGl0eSc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ZhcmlhYmxlcyc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5AdXNlICcuL3Rvb2xiYXItdmFyaWFibGVzJztcblxuQG1peGluIF9oZWlnaHQoJGhlaWdodCkge1xuICAubWF0LXRvb2xiYXItbXVsdGlwbGUtcm93cyB7XG4gICAgbWluLWhlaWdodDogJGhlaWdodDtcbiAgfVxuICAubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xuICB9XG59XG5cbkBtaXhpbiBfcGFsZXR0ZS1zdHlsZXMoJHBhbGV0dGUpIHtcbiAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlKTtcbiAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG59XG5cbkBtaXhpbiBfZm9ybS1maWVsZC1vdmVycmlkZXMge1xuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lLFxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LXNlbGVjdC12YWx1ZSxcbiAgLm1hdC1zZWxlY3QtYXJyb3csXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cbn1cblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBhcHAtYmFyKTtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX3BhbGV0dGUtc3R5bGVzKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX3BhbGV0dGUtc3R5bGVzKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX3BhbGV0dGUtc3R5bGVzKCR3YXJuKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBfZm9ybS1maWVsZC1vdmVycmlkZXM7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC10b29sYmFyLFxuICAubWF0LXRvb2xiYXIgaDEsXG4gIC5tYXQtdG9vbGJhciBoMixcbiAgLm1hdC10b29sYmFyIGgzLFxuICAubWF0LXRvb2xiYXIgaDQsXG4gIC5tYXQtdG9vbGJhciBoNSxcbiAgLm1hdC10b29sYmFyIGg2IHtcbiAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5LXV0aWxzLnR5cG9ncmFwaHktbGV2ZWwoJGNvbmZpZywgdGl0bGUpO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG5AbWl4aW4gZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRkZW5zaXR5LXNjYWxlOiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGhlaWdodC1kZXNrdG9wOiBjb21wYXRpYmlsaXR5LnByaXZhdGUtZGVuc2l0eS1wcm9wLXZhbHVlKFxuICAgICAgdG9vbGJhci12YXJpYWJsZXMuJGRlc2t0b3AtZGVuc2l0eS1jb25maWcsICRkZW5zaXR5LXNjYWxlLCBoZWlnaHQpO1xuICAkaGVpZ2h0LW1vYmlsZTogY29tcGF0aWJpbGl0eS5wcml2YXRlLWRlbnNpdHktcHJvcC12YWx1ZShcbiAgICAgIHRvb2xiYXItdmFyaWFibGVzLiRtb2JpbGUtZGVuc2l0eS1jb25maWcsICRkZW5zaXR5LXNjYWxlLCBoZWlnaHQpO1xuXG4gIEBpbmNsdWRlIGNvbXBhdGliaWxpdHkucHJpdmF0ZS1kZW5zaXR5LWxlZ2FjeS1jb21wYXRpYmlsaXR5KCkge1xuICAgIC8vIFNldCB0aGUgZGVmYXVsdCBoZWlnaHQgZm9yIHRoZSB0b29sYmFyLlxuICAgIEBpbmNsdWRlIF9oZWlnaHQoJGhlaWdodC1kZXNrdG9wKTtcblxuICAgIC8vIEFzIHBlciBzcGVjcywgdG9vbGJhcnMgc2hvdWxkIGhhdmUgYSBkaWZmZXJlbnQgaGVpZ2h0IGluIG1vYmlsZSBkZXZpY2VzLiBUaGlzIGhhcyBiZWVuXG4gICAgLy8gc3BlY2lmaWVkIGluIHRoZSBvbGQgZ3VpZGVsaW5lcyBhbmQgaXMgc3RpbGwgb2JzZXJ2YWJsZSBpbiB0aGUgbmV3IHNwZWNpZmljYXRpb25zIGJ5XG4gICAgLy8gbG9va2luZyBhdCB0aGUgc3BlYyBpbWFnZXMuIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9hcHAtYmFycy10b3AuaHRtbCNhbmF0b215XG4gICAgQG1lZGlhICh2YXJpYWJsZXMuJHhzbWFsbCkge1xuICAgICAgQGluY2x1ZGUgX2hlaWdodCgkaGVpZ2h0LW1vYmlsZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC10b29sYmFyJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG4kdGFyZ2V0LWhlaWdodDogMjJweDtcbiRmb250LXNpemU6IDEwcHg7XG4kdmVydGljYWwtcGFkZGluZzogKCR0YXJnZXQtaGVpZ2h0IC0gJGZvbnQtc2l6ZSkgLyAyO1xuXG4kaGFuZHNldC10YXJnZXQtaGVpZ2h0OiAzMHB4O1xuJGhhbmRzZXQtZm9udC1zaXplOiAxNHB4O1xuJGhhbmRzZXQtdmVydGljYWwtcGFkZGluZzpcbiAgICAoJGhhbmRzZXQtdGFyZ2V0LWhlaWdodCAtICRoYW5kc2V0LWZvbnQtc2l6ZSkgLyAyO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCB0b29sdGlwLCAwLjkpO1xuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgZm9udC1mYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJHZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cblxuICAubWF0LXRvb2x0aXAtaGFuZHNldCB7XG4gICAgZm9udC1zaXplOiAkaGFuZHNldC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRoYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICRoYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC10b29sdGlwJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS9kZW5zaXR5L3ByaXZhdGUvY29tcGF0aWJpbGl0eSc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5AdXNlICcuL3RyZWUtdmFyaWFibGVzJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10cmVlIHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXRyZWUtbm9kZSxcbiAgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LXRyZWUge1xuICAgIGZvbnQtZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgZm9udC13ZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMuZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICBmb250LXNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuQG1peGluIGRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkZGVuc2l0eS1zY2FsZTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRoZWlnaHQ6IGNvbXBhdGliaWxpdHkucHJpdmF0ZS1kZW5zaXR5LXByb3AtdmFsdWUodHJlZS12YXJpYWJsZXMuJGRlbnNpdHktY29uZmlnLFxuICAgICRkZW5zaXR5LXNjYWxlLCBoZWlnaHQpO1xuXG4gIEBpbmNsdWRlIGNvbXBhdGliaWxpdHkucHJpdmF0ZS1kZW5zaXR5LWxlZ2FjeS1jb21wYXRpYmlsaXR5KCkge1xuICAgIC5tYXQtdHJlZS1ub2RlIHtcbiAgICAgIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC10cmVlJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvcGFsZXR0ZSc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAuZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG5cbiAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgICAvLyBVc2UgdGhlIHByaW1hcnkgdGV4dCBvbiB0aGUgZGFyayB0aGVtZSwgZXZlbiB0aG91Z2ggdGhlIGxpZ2h0ZXIgb25lIHVzZXNcbiAgICAvLyBhIHNlY29uZGFyeSwgYmVjYXVzZSB0aGUgY29udHJhc3Qgb24gdGhlIGxpZ2h0IHByaW1hcnkgdGV4dCBpcyBwb29yLlxuICAgIGNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgcGFsZXR0ZS4kZGFyay1wcmltYXJ5LXRleHQsIHBhbGV0dGUuJGxpZ2h0LXNlY29uZGFyeS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiBpZigkaXMtZGFyay10aGVtZSwgbWFwLmdldChwYWxldHRlLiRncmV5LXBhbGV0dGUsIDUwKSwgIzMyMzIzMik7XG5cbiAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtZWxldmF0aW9uKDYsICRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsIGluaGVyaXQsIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50LCB0ZXh0KSk7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1zaW1wbGUtc25hY2tiYXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogaW5oZXJpdDtcbiAgICAgIHNpemU6IGluaGVyaXQ7XG4gICAgICB3ZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMuZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1zbmFjay1iYXInKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    21165:
    /*!******************************************************!*\
      !*** ./src/app/pages/timeline/timeline.component.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimelineComponent": function TimelineComponent() {
          return (
            /* binding */
            _TimelineComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      93738);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      var _TimelineComponent = /*#__PURE__*/function () {
        function _TimelineComponent() {
          _classCallCheck(this, _TimelineComponent);

          this.stacked = false;
        }

        _createClass(_TimelineComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _TimelineComponent;
      }();

      _TimelineComponent.ɵfac = function TimelineComponent_Factory(t) {
        return new (t || _TimelineComponent)();
      };

      _TimelineComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TimelineComponent,
        selectors: [["app-timeline"]],
        decls: 77,
        vars: 1,
        consts: [[1, "timeline"], [1, "timeline-badge", "success"], ["alt", "user", "src", "assets/images/users/1.jpg", "alt", "img", 1, "img-responsive"], [1, "timeline-panel"], [1, "timeline-heading"], [1, "timeline-title"], [1, "text-muted"], [1, "fa", "fa-clock-o"], [1, "timeline-body"], [1, "timeline-inverted"], [1, "timeline-badge", "warning"], ["alt", "user", "src", "assets/images/users/2.jpg", "alt", "img", 1, "img-responsive"], ["alt", "user", "src", "assets/images/users/3.jpg", "alt", "img", 1, "img-responsive"], [1, "timeline-badge", "danger"], [1, "fa", "fa-bomb"], [1, "timeline-badge", "info"], [1, "fa", "fa-save"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu2", "matMenu"], ["mat-menu-item", ""], [1, "fa", "fa-graduation-cap"]],
        template: function TimelineComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Genelia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 11 hours ago via Twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ritesh Deshmukh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Lorem ipsum dolor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Lorem ipsum dolor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Lorem ipsum dolor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "more_horiz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-menu", null, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Item 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Item 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Lorem ipsum dolor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuItem],
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\");\n\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.mat-option[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-option[_ngcontent-%COMP%]:hover:not(.mat-option-disabled), .mat-option[_ngcontent-%COMP%]:focus:not(.mat-option-disabled) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple):not(.mat-option-disabled) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-option.mat-active[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.04);\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-option.mat-option-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #1e88e5;\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #3f51b5;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #e91e63;\n}\n.mat-optgroup-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-optgroup-disabled[_ngcontent-%COMP%]   .mat-optgroup-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-pseudo-checkbox[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-pseudo-checkbox[_ngcontent-%COMP%]::after {\n  color: #fafafa;\n}\n.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #1e88e5;\n}\n.mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #3f51b5;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #e91e63;\n}\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%] {\n  background: #b0b0b0;\n}\n.mat-app-background[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-elevation-z0[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z1[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z2[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z3[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z4[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z5[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z6[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z7[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z9[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z10[_ngcontent-%COMP%] {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z11[_ngcontent-%COMP%] {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z12[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z13[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z14[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z15[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z16[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z17[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z18[_ngcontent-%COMP%] {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z19[_ngcontent-%COMP%] {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z20[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z21[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z22[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z23[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z24[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n.mat-theme-loaded-marker[_ngcontent-%COMP%] {\n  display: none;\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%] {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover) {\n  background: white;\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-badge-content[_ngcontent-%COMP%] {\n  color: white;\n  background: #1e88e5;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  outline: solid 1px;\n  border-radius: 0;\n}\n.mat-badge-accent[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  background: #3f51b5;\n  color: white;\n}\n.mat-badge-warn[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  color: white;\n  background: #e91e63;\n}\n.mat-badge[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-badge-hidden[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  display: none;\n}\n.mat-badge-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  background: #b9b9b9;\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-badge-content[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: transform 200ms ease-in-out;\n  transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none;\n}\n.ng-animate-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%], .mat-badge-content._mat-animation-noopable[_ngcontent-%COMP%] {\n  transition: none;\n}\n.mat-badge-content.mat-badge-active[_ngcontent-%COMP%] {\n  transform: none;\n}\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n}\n.mat-badge-small.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -8px;\n}\n.mat-badge-small.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -8px;\n}\n.mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -16px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -16px;\n}\n.mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -16px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -16px;\n}\n.mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -8px;\n}\n.mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -8px;\n}\n.mat-badge-medium[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n}\n.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -11px;\n}\n.mat-badge-medium.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -11px;\n}\n.mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -22px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -22px;\n}\n.mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -22px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -22px;\n}\n.mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -11px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -11px;\n}\n.mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -11px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -11px;\n}\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n}\n.mat-badge-large.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -14px;\n}\n.mat-badge-large.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -14px;\n}\n.mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -28px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -28px;\n}\n.mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -28px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -28px;\n}\n.mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -14px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -14px;\n}\n.mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -14px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -14px;\n}\n.mat-bottom-sheet-container[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%] {\n  color: inherit;\n  background: transparent;\n}\n.mat-button.mat-primary[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-button.mat-accent[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-button.mat-warn[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.mat-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  opacity: 0.1;\n  background-color: currentColor;\n}\n.mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background: black;\n}\n.mat-stroked-button[_ngcontent-%COMP%]:not(.mat-button-disabled) {\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.mat-flat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white;\n}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-flat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-flat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-stroked-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-flat-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-fab[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-fab.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-standalone[_ngcontent-%COMP%], .mat-button-toggle-group[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.mat-button-toggle[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-button-toggle[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  background: white;\n}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n  border-top: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-button-toggle-checked.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-button-toggle-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n  background-color: #eeeeee;\n}\n.mat-button-toggle-disabled.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-button-toggle-disabled.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #bdbdbd;\n}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%] {\n  border: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-label-content[_ngcontent-%COMP%] {\n  line-height: 48px;\n}\n.mat-card[_ngcontent-%COMP%] {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-card.mat-card-flat[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox-frame[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox-checkmark[_ngcontent-%COMP%] {\n  fill: #fafafa;\n}\n.mat-checkbox-checkmark-path[_ngcontent-%COMP%] {\n  stroke: #fafafa !important;\n}\n.mat-checkbox-mixedmark[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n}\n.mat-checkbox-indeterminate.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-checkbox-indeterminate.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-checkbox-disabled.mat-checkbox-checked[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-disabled.mat-checkbox-indeterminate[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #b0b0b0;\n}\n.mat-checkbox-disabled[_ngcontent-%COMP%]:not(.mat-checkbox-checked)   .mat-checkbox-frame[_ngcontent-%COMP%] {\n  border-color: #b0b0b0;\n}\n.mat-checkbox-disabled[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #1e88e5;\n}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #3f51b5;\n}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #e91e63;\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled):active {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled)   .mat-chip-remove[_ngcontent-%COMP%]:hover {\n  opacity: 0.54;\n}\n.mat-chip.mat-standard-chip.mat-chip-disabled[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]::after {\n  background: black;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n  color: white;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: white;\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n  color: white;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: white;\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: white;\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-table[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], [mat-header-row][_ngcontent-%COMP%], [mat-row][_ngcontent-%COMP%], [mat-footer-row][_ngcontent-%COMP%], .mat-table-sticky[_ngcontent-%COMP%] {\n  background: inherit;\n}\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-calendar-arrow[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.54);\n}\n.mat-datepicker-toggle[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-next-button[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-previous-button[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-calendar-table-header[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-table-header-divider[_ngcontent-%COMP%]::after {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-calendar-body-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-calendar-body-cell-content[_ngcontent-%COMP%], .mat-date-range-input-separator[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent;\n}\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-date-range-input-separator[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-body-in-preview[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.24);\n}\n.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: rgba(0, 0, 0, 0.18);\n}\n.mat-calendar-body-in-range[_ngcontent-%COMP%]::before {\n  background: rgba(30, 136, 229, 0.2);\n}\n.mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n.mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to right, rgba(30, 136, 229, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to left, rgba(30, 136, 229, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-calendar-body-in-range[_ngcontent-%COMP%]    > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after {\n  background: #a8dab5;\n}\n.mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background: #46a35e;\n}\n.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n  color: white;\n}\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(30, 136, 229, 0.4);\n}\n.mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px white;\n}\n.mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: rgba(30, 136, 229, 0.3);\n}\n.mat-datepicker-content[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]::before {\n  background: rgba(63, 81, 181, 0.2);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to right, rgba(63, 81, 181, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to left, rgba(63, 81, 181, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]    > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after {\n  background: #a8dab5;\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background: #46a35e;\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(63, 81, 181, 0.4);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px white;\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: rgba(63, 81, 181, 0.3);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]::before {\n  background: rgba(233, 30, 99, 0.2);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to right, rgba(233, 30, 99, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to left, rgba(233, 30, 99, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]    > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after {\n  background: #a8dab5;\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background: #46a35e;\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n  color: white;\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(233, 30, 99, 0.4);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px white;\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: rgba(233, 30, 99, 0.3);\n}\n.mat-datepicker-content-touch[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n.mat-datepicker-toggle-active[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-datepicker-toggle-active.mat-accent[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-datepicker-toggle-active.mat-warn[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-date-range-input-inner[disabled][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-dialog-container[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-divider[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-divider-vertical[_ngcontent-%COMP%] {\n  border-right-color: rgba(0, 0, 0, 0.12);\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-action-row[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-keyboard-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-program-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover:not([aria-disabled=true]) {\n  background: rgba(0, 0, 0, 0.04);\n}\n@media (hover: none) {\n  .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded):not([aria-disabled=true])   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n    background: white;\n  }\n}\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-indicator[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: 48px;\n}\n.mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%] {\n  height: 64px;\n}\n.mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mat-hint[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-warn[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-focused[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-warn[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid)   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #1e88e5;\n}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-accent   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #3f51b5;\n}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-warn   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #e91e63;\n}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-error[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-legacy.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n.mat-form-field-appearance-standard[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-standard.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before {\n  background-color: transparent;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.12);\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-form-field-appearance-outline.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-form-field-appearance-outline.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.06);\n}\n.mat-icon.mat-primary[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-icon.mat-accent[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-icon.mat-warn[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field-type-mat-native-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-input-element[_ngcontent-%COMP%]:disabled, .mat-form-field-type-mat-native-select.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #1e88e5;\n}\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]::placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field.mat-accent[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #3f51b5;\n}\n.mat-form-field.mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%], .mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #e91e63;\n}\n.mat-form-field-type-mat-native-select.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #e91e63;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-list-item-disabled[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n}\n.mat-list-option[_ngcontent-%COMP%]:hover, .mat-list-option[_ngcontent-%COMP%]:focus, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-list-single-selected-option[_ngcontent-%COMP%], .mat-list-single-selected-option[_ngcontent-%COMP%]:hover, .mat-list-single-selected-option[_ngcontent-%COMP%]:focus {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-menu-panel[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-menu-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-menu-item[_ngcontent-%COMP%] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-menu-item[disabled][_ngcontent-%COMP%], .mat-menu-item[disabled][_ngcontent-%COMP%]::after, .mat-menu-item[disabled][_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-menu-item[_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%], .mat-menu-item-submenu-trigger[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-menu-item[_ngcontent-%COMP%]:hover:not([disabled]), .mat-menu-item.cdk-program-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item.cdk-keyboard-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item-highlighted[_ngcontent-%COMP%]:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-paginator[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-paginator-decrement[_ngcontent-%COMP%], .mat-paginator-increment[_ngcontent-%COMP%] {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54);\n}\n.mat-paginator-first[_ngcontent-%COMP%], .mat-paginator-last[_ngcontent-%COMP%] {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n}\n.mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-decrement[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-increment[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-first[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-last[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-paginator-container[_ngcontent-%COMP%] {\n  min-height: 56px;\n}\n.mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #c3def5;\n}\n.mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #c3def5;\n}\n.mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #1e88e5;\n}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #cbd0e9;\n}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #cbd0e9;\n}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #3f51b5;\n}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #f6c3d4;\n}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #f6c3d4;\n}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #e91e63;\n}\n.mat-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #1e88e5;\n}\n.mat-progress-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #3f51b5;\n}\n.mat-progress-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #e91e63;\n}\n.mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.54);\n}\n.mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #1e88e5;\n}\n.mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #3f51b5;\n}\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #e91e63;\n}\n.mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-radio-button.mat-radio-disabled.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-label-content[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.mat-select-value[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-select-placeholder[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-select-arrow[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-select-panel[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-select-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-select-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-form-field.mat-focused.mat-primary[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-form-field.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-form-field.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-invalid[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-drawer[_ngcontent-%COMP%] {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-drawer.mat-drawer-push[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side) {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-side[_ngcontent-%COMP%] {\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n  border-right: none;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n  border-right: none;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(63, 81, 181, 0.54);\n}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(30, 136, 229, 0.54);\n}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(233, 30, 99, 0.54);\n}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-slide-toggle[_ngcontent-%COMP%]:not(.mat-checked)   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background-color: #fafafa;\n}\n.mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(30, 136, 229, 0.2);\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(63, 81, 181, 0.2);\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(233, 30, 99, 0.2);\n}\n.mat-slider[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%], .cdk-focused[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-disabled[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-min-value[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing)   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent;\n}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-has-ticks[_ngcontent-%COMP%]   .mat-slider-wrapper[_ngcontent-%COMP%]::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n.mat-slider-horizontal[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%] {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n}\n.mat-slider-vertical[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%] {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n}\n.mat-step-header.cdk-keyboard-focused[_ngcontent-%COMP%], .mat-step-header.cdk-program-focused[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n@media (hover: none) {\n  .mat-step-header[_ngcontent-%COMP%]:hover {\n    background: none;\n  }\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-optional[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.54);\n  color: white;\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n  color: white;\n}\n.mat-step-header.mat-accent[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-step-header.mat-accent[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header.mat-accent[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header.mat-accent[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n}\n.mat-step-header.mat-warn[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-step-header.mat-warn[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header.mat-warn[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header.mat-warn[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n  color: white;\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-error[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #e91e63;\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-active[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-error[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-stepper-vertical-line[_ngcontent-%COMP%]::before {\n  border-left-color: rgba(0, 0, 0, 0.12);\n}\n.mat-horizontal-stepper-header[_ngcontent-%COMP%]::before, .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-horizontal-stepper-header[_ngcontent-%COMP%] {\n  height: 72px;\n}\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%], .mat-vertical-stepper-header[_ngcontent-%COMP%] {\n  padding: 24px 24px;\n}\n.mat-stepper-vertical-line[_ngcontent-%COMP%]::before {\n  top: -16px;\n  bottom: -16px;\n}\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]::before {\n  top: 36px;\n}\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  top: 36px;\n}\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #757575;\n}\n.mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none;\n}\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.87);\n}\n.mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-tab-group[class*=mat-background-][_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar[class*=mat-background-][_ngcontent-%COMP%] {\n  border-bottom: none;\n  border-top: none;\n}\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3);\n}\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-tab-group.mat-primary.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-group.mat-primary.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3);\n}\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-tab-group.mat-accent.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-group.mat-accent.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(248, 187, 208, 0.3);\n}\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-tab-group.mat-warn.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-group.mat-warn.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3);\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before {\n  border-color: white;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before {\n  border-color: white;\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(248, 187, 208, 0.3);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before, .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-focus-indicator[_ngcontent-%COMP%]::before {\n  border-color: white;\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-link-container[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]    > .mat-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.mat-toolbar[_ngcontent-%COMP%] {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background: #1e88e5;\n  color: white;\n}\n.mat-toolbar.mat-accent[_ngcontent-%COMP%] {\n  background: #3f51b5;\n  color: white;\n}\n.mat-toolbar.mat-warn[_ngcontent-%COMP%] {\n  background: #e91e63;\n  color: white;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: currentColor;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: currentColor;\n}\n.mat-toolbar-multiple-rows[_ngcontent-%COMP%] {\n  min-height: 64px;\n}\n.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%] {\n  height: 64px;\n}\n@media (max-width: 599px) {\n  .mat-toolbar-multiple-rows[_ngcontent-%COMP%] {\n    min-height: 56px;\n  }\n\n  .mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%] {\n    height: 56px;\n  }\n}\n.mat-tooltip[_ngcontent-%COMP%] {\n  background: rgba(97, 97, 97, 0.9);\n}\n.mat-tree[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-tree-node[_ngcontent-%COMP%] {\n  min-height: 48px;\n}\n.mat-snack-bar-container[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  background: #323232;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-simple-snackbar-action[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n\n\n\n\n\n\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.timeline[_ngcontent-%COMP%]:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #f2f4f8;\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before, .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: table;\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before, .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: table;\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid rgba(120, 130, 140, 0.13);\n  border-radius: 4px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -8px;\n  border-top: 8px solid transparent;\n  border-right: 0 solid rgba(120, 130, 140, 0.13);\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid rgba(120, 130, 140, 0.13);\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -7px;\n  border-top: 7px solid transparent;\n  border-right: 0 solid #ffffff;\n  border-bottom: 7px solid transparent;\n  border-left: 7px solid #ffffff;\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-badge[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  overflow: hidden;\n}\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n  float: right;\n}\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:before {\n  right: auto;\n  left: -8px;\n  border-right-width: 8px;\n  border-left-width: 0;\n}\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:after {\n  right: auto;\n  left: -7px;\n  border-right-width: 7px;\n  border-left-width: 0;\n}\n.timeline-badge.primary[_ngcontent-%COMP%] {\n  background-color: #7460ee;\n}\n.timeline-badge.success[_ngcontent-%COMP%] {\n  background-color: #26c6da;\n}\n.timeline-badge.warning[_ngcontent-%COMP%] {\n  background-color: #ffb22b;\n}\n.timeline-badge.danger[_ngcontent-%COMP%] {\n  background-color: #fc4b6c;\n}\n.timeline-badge.info[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.timeline-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: inherit;\n  font-weight: 400;\n}\n.timeline-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .timeline-body[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.timeline-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n@media (max-width: 767px) {\n  \n  ul.timeline[_ngcontent-%COMP%]:before {\n    left: 40px;\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n    width: calc(100% - 90px);\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-badge[_ngcontent-%COMP%] {\n    top: 16px;\n    left: 15px;\n    margin-left: 0;\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n    float: right;\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0;\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLXRoZW1lLnNjc3MiLCJ0aW1lbGluZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL29wdGlvbi9fb3B0aW9uLXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9vcHRpb24vX29wdGdyb3VwLXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zZWxlY3Rpb24vcHNldWRvLWNoZWNrYm94L19wc2V1ZG8tY2hlY2tib3gtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL19jb3JlLXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS9fZWxldmF0aW9uLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL19hdXRvY29tcGxldGUtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9iYWRnZS9fYmFkZ2UtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvYTExeS9faW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQvX2JvdHRvbS1zaGVldC10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi9fYnV0dG9uLXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZS9fYnV0dG9uLXRvZ2dsZS10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQvX2NhcmQtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveC9fY2hlY2tib3gtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jaGlwcy9fY2hpcHMtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC90YWJsZS9fdGFibGUtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyL19kYXRlcGlja2VyLXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nL19kaWFsb2ctdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyL19kaXZpZGVyLXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uL19leHBhbnNpb24tdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9leHBhbnNpb24vX2V4cGFuc2lvbi1taXhpbnMuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkL19mb3JtLWZpZWxkLXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZC9fZm9ybS1maWVsZC1sZWdhY3ktdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL19mb3JtLWNvbW1vbi5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQvX2Zvcm0tZmllbGQtc3RhbmRhcmQtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkL19mb3JtLWZpZWxkLWZpbGwtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkL19mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9pY29uL19pY29uLXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQvX2lucHV0LXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS9fdmVuZG9yLXByZWZpeGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdC9fbGlzdC10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL21lbnUvX21lbnUtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3IvX3BhZ2luYXRvci10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhci9fcHJvZ3Jlc3MtYmFyLXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lci9fcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvL19yYWRpby10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdC9fc2VsZWN0LXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdi9fc2lkZW5hdi10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZS9fc2xpZGUtdG9nZ2xlLXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyL19zbGlkZXItdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9zdGVwcGVyL19zdGVwcGVyLXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydC9fc29ydC10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMvX3RhYnMtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC90b29sYmFyL190b29sYmFyLXRoZW1lLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcC9fdG9vbHRpcC10aGVtZS5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUvX3RyZWUtdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXIvX3NuYWNrLWJhci10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNRLGtGQUFBO0FBVFI7Ozs7O0NBQUE7QUFlQSx3QkFBQTtBQ0pFO0VBSUksb0NBQUE7QUNMTjtBQ0dFO0VBQ0UsMEJBQUE7QURBSjtBQ0VJO0VBRUUsK0JBQUE7QURETjtBQ0tJO0VBQ0UsK0JBQUE7QURITjtBQ01JO0VBQ0UsK0JBQUE7RUFDQSwwQkFBQTtBREpOO0FDT0k7RUFDRSwwQkFBQTtBRExOO0FDU0U7RUFDRSxjQUFBO0FETko7QUNTRTtFQUNFLGNBQUE7QUROSjtBQ1NFO0VBQ0UsY0FBQTtBRE5KO0FFOUJFO0VBQ0UsMEJBQUE7QUZpQ0o7QUU5QkU7RUFDRSwwQkFBQTtBRmlDSjtBRzVCRTtFQUNFLDBCQUFBO0FIK0JKO0FHN0JJO0VBQ0UsY0FBQTtBSCtCTjtBRzNCRTtFQUNFLGNBWmU7QUgwQ25CO0FHM0JFOztFQUVFLG1CQUFBO0FIOEJKO0FHdEJFOzs7O0VBSUUsbUJBQUE7QUh5Qko7QUd0QkU7O0VBRUUsbUJBQUE7QUh5Qko7QUdwQkk7O0VBQ0UsbUJBeENhO0FIZ0VuQjtBSWpFRTtFQUlFLHlCQUFBO0VBQ0EsMEJBQUE7QUppRUo7QUkxREk7RUNrSUYsd0hBQUE7QUxwRUY7QUk5REk7RUNrSUYseUhBQUE7QUxoRUY7QUlsRUk7RUNrSUYseUhBQUE7QUw1REY7QUl0RUk7RUNrSUYseUhBQUE7QUx4REY7QUkxRUk7RUNrSUYsMEhBQUE7QUxwREY7QUk5RUk7RUNrSUYsMEhBQUE7QUxoREY7QUlsRkk7RUNrSUYsMkhBQUE7QUw1Q0Y7QUl0Rkk7RUNrSUYsMkhBQUE7QUx4Q0Y7QUkxRkk7RUNrSUYsMkhBQUE7QUxwQ0Y7QUk5Rkk7RUNrSUYsMkhBQUE7QUxoQ0Y7QUlsR0k7RUNrSUYsNEhBQUE7QUw1QkY7QUl0R0k7RUNrSUYsNEhBQUE7QUx4QkY7QUkxR0k7RUNrSUYsNEhBQUE7QUxwQkY7QUk5R0k7RUNrSUYsNEhBQUE7QUxoQkY7QUlsSEk7RUNrSUYsNEhBQUE7QUxaRjtBSXRISTtFQ2tJRiw0SEFBQTtBTFJGO0FJMUhJO0VDa0lGLDZIQUFBO0FMSkY7QUk5SEk7RUNrSUYsNkhBQUE7QUxBRjtBSWxJSTtFQ2tJRiw2SEFBQTtBTElGO0FJdElJO0VDa0lGLDZIQUFBO0FMUUY7QUkxSUk7RUNrSUYsOEhBQUE7QUxZRjtBSTlJSTtFQ2tJRiw4SEFBQTtBTGdCRjtBSWxKSTtFQ2tJRiw4SEFBQTtBTG9CRjtBSXRKSTtFQ2tJRiw4SEFBQTtBTHdCRjtBSTFKSTtFQ2tJRiw4SEFBQTtBTDRCRjtBSXZKSTtFQUNFLGFBQUE7QUowSk47QU1wTEU7RUFFRSxpQkFBQTtFQUNBLDBCQUFBO0FOc0xKO0FLMUJFO0VBWEEsMEhBQUE7QUx3Q0Y7QU1sTEk7RUFDRSxpQkFBQTtBTm9MTjtBTWxMTTtFQUNFLDBCQUFBO0FOb0xSO0FPcEdFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FQdUdKO0FRektJO0VEcUVFLGtCQUFBO0VBQ0EsZ0JBQUE7QVB1R047QU9sR0k7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QVBxR047QU9oR0k7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QVBtR047QU8vRkU7RUFDRSxrQkFBQTtBUGtHSjtBTzlGSTtFQUNFLGFBQUE7QVBpR047QU81Rkk7RUFXSSxtQkFBQTtFQU1GLDBCQUFBO0FQZ0ZOO0FPNUVFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QVArRUo7QU81RUU7O0VBRUUsZ0JBQUE7QVArRUo7QU8xRUU7RUFFRSxlQUFBO0FQNEVKO0FPNU9FO0VBQ0UsV0FSUztFQVNULFlBVFM7RUFVVCxpQkFWUztBUHlQYjtBTzNPSTtFQUNFLFNBQUE7QVA2T047QU94T0k7RUFDRSxZQUFBO0FQME9OO0FPck9JO0VBQ0UsV0FBQTtBUHVPTjtBT2xPSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FQb09OO0FPL05JO0VBQ0UsWUFBQTtBUGlPTjtBTzVOSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FQOE5OO0FPeE5NO0VBQ0UsVUFBQTtBUDBOUjtBT3JOTTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FQdU5SO0FPbE5NO0VBQ0UsV0FBQTtBUG9OUjtBTy9NTTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FQaU5SO0FPcFJFO0VBQ0UsV0FUVztFQVVYLFlBVlc7RUFXWCxpQkFYVztBUGtTZjtBT25SSTtFQUNFLFVBQUE7QVBxUk47QU9oUkk7RUFDRSxhQUFBO0FQa1JOO0FPN1FJO0VBQ0UsV0FBQTtBUCtRTjtBTzFRSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FQNFFOO0FPdlFJO0VBQ0UsWUFBQTtBUHlRTjtBT3BRSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FQc1FOO0FPaFFNO0VBQ0UsV0FBQTtBUGtRUjtBTzdQTTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FQK1BSO0FPMVBNO0VBQ0UsWUFBQTtBUDRQUjtBT3ZQTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FQeVBSO0FPNVRFO0VBQ0UsV0FQUztFQVFULFlBUlM7RUFTVCxpQkFUUztBUHdVYjtBTzNUSTtFQUNFLFVBQUE7QVA2VE47QU94VEk7RUFDRSxhQUFBO0FQMFROO0FPclRJO0VBQ0UsV0FBQTtBUHVUTjtBT2xUSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FQb1ROO0FPL1NJO0VBQ0UsWUFBQTtBUGlUTjtBTzVTSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FQOFNOO0FPeFNNO0VBQ0UsV0FBQTtBUDBTUjtBT3JTTTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FQdVNSO0FPbFNNO0VBQ0UsWUFBQTtBUG9TUjtBTy9STTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FQaVNSO0FTOVdFO0VKa0pBLDZIQUFBO0VJaEpFLGlCQUFBO0VBQ0EsMEJBQUE7QVRpWEo7QVUvUkU7RUFLRSxjQUFBO0VBQ0EsdUJBQUE7QVY4Uko7QVU5VEU7RUFDRSxjQUFBO0FWZ1VKO0FVOVRFO0VBQ0UsY0FBQTtBVmdVSjtBVTlURTtFQUNFLGNBQUE7QVZnVUo7QVU1VEk7RUFFRSwwQkFBQTtBVjZUTjtBVWhZRTtFQUNFLHlCQUFBO0FWa1lKO0FVL1hFO0VBQ0UseUJBQUE7QVZpWUo7QVU5WEU7RUFDRSx5QkFBQTtBVmdZSjtBVTdYRTtFQUNFLDZCQUFBO0FWK1hKO0FVOVNJO0VBQ0UsWUF4R1k7RUF5R1osOEJBQUE7QVZnVE47QVU1U0U7RUFDRSxpQkFBQTtBVitTSjtBVTFTRTtFQUNFLGlDQUFBO0FWNlNKO0FVMVNFO0VBRUUsMEJBQUE7RUFDQSx1QkFBQTtBVjRTSjtBVXZXRTtFQUNFLFlBQUE7QVZ5V0o7QVV2V0U7RUFDRSxZQUFBO0FWeVdKO0FVdldFO0VBQ0UsWUFBQTtBVnlXSjtBVXJXSTtFQUVFLDBCQUFBO0FWc1dOO0FVblhFO0VBQ0UseUJBQUE7QVZxWEo7QVVuWEU7RUFDRSx5QkFBQTtBVnFYSjtBVW5YRTtFQUNFLHlCQUFBO0FWcVhKO0FValhJO0VBRUUscUNBQUE7QVZrWE47QVVwWkU7RUFYQSwwQ0FEbUI7QVZtYXJCO0FVblpFO0VBZkEsMENBRG1CO0FWc2FyQjtBVWxaRTtFQW5CQSwwQ0FEbUI7QVZ5YXJCO0FLdFNFO0VBWEEsd0hBQUE7QUxxVEY7QUsxU0U7RUFYQSx5SEFBQTtBTHlURjtBSzlTRTtFQVhBLDJIQUFBO0FMNFRGO0FLalRFO0VBWEEsd0hBQUE7QUwrVEY7QUtwVEU7RUFYQSwySEFBQTtBTG1VRjtBS3hURTtFQVhBLDRIQUFBO0FMc1VGO0FLM1RFO0VBWEEsd0hBQUE7QUx5VUY7QVd4ZEU7O0VOK0lBLHlIQUFBO0FMOFVGO0FXeGRFOztFQUVFLGdCQUFBO0FYMmRKO0FXeGRFO0VBQ0UsMEJBQUE7QVgyZEo7QVd6ZEk7RUFDRSxxQ0FBQTtBWDJkTjtBV3ZkRTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QVgwZEo7QVd4ZEk7RUFDRSx1QkFBQTtBWDBkTjtBV3RkRTtFQUNFLDBDQUFBO0FYeWRKO0FXdGRFO0VBQ0UsaUJBQUE7RUFDQSwyQ0FBQTtBWHlkSjtBV3JkSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBWHdkTjtBV3BkRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QVh1ZEo7QVdyZEk7RUFDRSwwQkFBQTtBWHVkTjtBV25kRTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7QVhzZEo7QVdwZEk7RUFDRSxpQkFBQTtBWHNkTjtBV25kSTtFQUNFLHlCQUFBO0FYcWROO0FXamRFOztFQUVFLHFDQUFBO0FYb2RKO0FXbGNJO0VBQ0UsaUJBTGM7QVgwY3BCO0FZOWhCRTtFQUVFLGlCQUFBO0VBQ0EsMEJBQUE7QVpnaUJKO0FLdllFO0VBWEEseUhBQUE7QUxxWkY7QUsxWUU7RUFYQSx3SEFBQTtBTHdaRjtBWTloQkU7RUFDRSwwQkFBQTtBWmlpQko7QWEvaEJFO0VBQ0UsaUNBQUE7QWJraUJKO0FhL2hCRTtFQUNFLGFBZG9CO0FiZ2pCeEI7QWEvaEJFO0VBR0UsMEJBQUE7QWJnaUJKO0FhN2hCRTtFQUNFLHlCQXhCb0I7QWJ3akJ4QjtBYTVoQkk7RUFDRSx5QkFBQTtBYitoQk47QWE1aEJJO0VBQ0UseUJBQUE7QWI4aEJOO0FhM2hCSTtFQUNFLHlCQUFBO0FiNmhCTjtBYXRoQk07RUFDRSx5QkF0Q1c7QWIrakJuQjtBYXBoQk07RUFDRSxxQkE1Q1c7QWJra0JuQjtBYWxoQkk7RUFDRSwwQkFBQTtBYm9oQk47QWE5Z0JFO0VBQ0UsdUJBQUE7QWJpaEJKO0FhNWdCSTs7RUFDRSxtQkFBQTtBYmdoQk47QWE3Z0JJOztFQUNFLG1CQUFBO0FiZ2hCTjtBYTdnQkk7O0VBQ0UsbUJBQUE7QWJnaEJOO0FjeGpCRTtFQTVDQSx5QkF5Q3dCO0VBeEN4QiwwQkF5Q3dCO0FkK2pCMUI7QWN0bUJFO0VBQ0UsMEJBc0NzQjtFQXJDdEIsWUFBQTtBZHdtQko7QWM3akJNO0VUbUdKLHlIQUFBO0FMNmRGO0FjNWpCTTtFQUNFLGFBQUE7QWQ4akJSO0FjMWpCSTtFQUNFLFlBQUE7QWQ0akJOO0FjempCSTtFQUNFLGlCQUFBO0FkMmpCTjtBY3RqQkk7RUFuRUYseUJBeUJFO0VBeEJGLFlBdUJ3QjtBZHNtQjFCO0FjM25CRTtFQUNFLFlBb0JzQjtFQW5CdEIsWUFBQTtBZDZuQko7QWN2bUJFO0VBVkEsMENBRG1CO0FkcW5CckI7QWM5akJJO0VBdkVGLHlCQXlCRTtFQXhCRixZQXVCd0I7QWRpbkIxQjtBY3RvQkU7RUFDRSxZQW9Cc0I7RUFuQnRCLFlBQUE7QWR3b0JKO0FjbG5CRTtFQVZBLDBDQURtQjtBZGdvQnJCO0FjcmtCSTtFQTNFRix5QkF5QkU7RUF4QkYsWUF1QndCO0FkNG5CMUI7QWNqcEJFO0VBQ0UsWUFvQnNCO0VBbkJ0QixZQUFBO0FkbXBCSjtBYzduQkU7RUFWQSwwQ0FEbUI7QWQyb0JyQjtBZTNwQkU7RUFDRSxpQkFBQTtBZjhwQko7QWUzcEJFOzs7O0VBSUUsbUJBQUE7QWY4cEJKO0FlM3BCRTs7RUFFRSx3Q0FBQTtBZjhwQko7QWUzcEJFO0VBQ0UsMEJBQUE7QWY4cEJKO0FlM3BCRTtFQUNFLDBCQUFBO0FmOHBCSjtBZ0J6bkJFO0VBQ0UscUNBQUE7QWhCNG5CSjtBZ0J2bkJFOzs7RUFHRSwwQkFBQTtBaEIwbkJKO0FnQnZuQkU7RUFDRSwwQkFBQTtBaEIwbkJKO0FnQnZuQkU7RUFDRSwrQkFBQTtBaEIwbkJKO0FnQnZuQkU7RUFDRSwwQkFBQTtBaEIwbkJKO0FnQnZuQkU7O0VBRUUsMEJBQUE7RUFDQSx5QkFBQTtBaEIwbkJKO0FnQmhxQkU7RUEyQ0ksMEJBbENhO0FoQjJwQm5CO0FnQnJuQkU7RUFDRSwwQkF2Q2U7QWhCK3BCbkI7QWdCcm5CRTtFQU9JLDBCQUFBO0FoQmtuQk47QWdCNXFCRTtFQXFFSSxpQ0FBQTtBaEIybUJOO0FnQmhyQkU7RUE4RU0saUNBQUE7QWhCc21CUjtBZ0JwaEJFO0VBQ0UsbUNBdk1BO0FoQjh0Qko7QWdCcGhCRTs7RUFFRSxrQ0FWaUI7QWhCaWlCckI7QWdCcGhCRTs7RUFFRSw4RkFBQTtBaEJ1aEJKO0FnQnBoQkU7O0VBRUUsNkZBQUE7QWhCdWhCSjtBZ0JwaEJFOztFQUVFLG1CQXhCYztBaEIraUJsQjtBZ0JwaEJFOztFQUVFLG1CQTVCdUI7QWhCbWpCM0I7QWdCcnZCRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBaEJ3dkJKO0FnQnJ2QkU7RUFJSSx5Q0FBQTtBaEJxdkJOO0FnQjV1QkU7RUFDRSxpQ0FBQTtBaEIrdUJKO0FnQjl0QkU7OztFQVJNLHlDQUFBO0FoQjR1QlI7QWdCeG9CRTtFWFFBLDBIQUFBO0VXTkUsdUJBQUE7RUFDQSwwQkFBQTtBaEIyb0JKO0FnQjFrQkU7RUFDRSxrQ0F2TUE7QWhCbXhCSjtBZ0J6a0JFOztFQUVFLGtDQVZpQjtBaEJxbEJyQjtBZ0J4a0JFOztFQUVFLDZGQUFBO0FoQjBrQko7QWdCdmtCRTs7RUFFRSw0RkFBQTtBaEJ5a0JKO0FnQnRrQkU7O0VBRUUsbUJBeEJjO0FoQmdtQmxCO0FnQnJrQkU7O0VBRUUsbUJBNUJ1QjtBaEJtbUIzQjtBZ0JyeUJFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FoQnV5Qko7QWdCcHlCRTtFQUlJLHdDQUFBO0FoQm15Qk47QWdCMXhCRTtFQUNFLGlDQUFBO0FoQjR4Qko7QWdCM3dCRTs7O0VBUk0sd0NBQUE7QWhCd3hCUjtBZ0JobkJFO0VBQ0Usa0NBdk1BO0FoQnl6Qko7QWdCL21CRTs7RUFFRSxrQ0FWaUI7QWhCMm5CckI7QWdCOW1CRTs7RUFFRSw2RkFBQTtBaEJnbkJKO0FnQjdtQkU7O0VBRUUsNEZBQUE7QWhCK21CSjtBZ0I1bUJFOztFQUVFLG1CQXhCYztBaEJzb0JsQjtBZ0IzbUJFOztFQUVFLG1CQTVCdUI7QWhCeW9CM0I7QWdCMzBCRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBaEI2MEJKO0FnQjEwQkU7RUFJSSx3Q0FBQTtBaEJ5MEJOO0FnQmgwQkU7RUFDRSxpQ0FBQTtBaEJrMEJKO0FnQmp6QkU7OztFQVJNLHdDQUFBO0FoQjh6QlI7QWdCNXNCRTtFWE5BLDhIQUFBO0FMc3RCRjtBZ0I1c0JFO0VBQ0UsY0FBQTtBaEIrc0JKO0FnQjdzQkk7RUFDRSxjQUFBO0FoQitzQk47QWdCNXNCSTtFQUNFLGNBQUE7QWhCOHNCTjtBZ0Ixc0JFO0VBQ0UsMEJBQUE7QWhCNnNCSjtBaUJyM0JFO0VaaUpBLDhIQUFBO0VZL0lFLGlCQUFBO0VBQ0EsMEJBQUE7QWpCdzNCSjtBa0JoNEJFO0VBQ0UscUNBQUE7QWxCbTRCSjtBa0JoNEJFO0VBQ0UsdUNBQUE7QWxCbTRCSjtBbUJqNEJFO0VBRUUsaUJBQUE7RUFDQSwwQkFBQTtBbkJtNEJKO0FLNXVCRTtFQVhBLHlIQUFBO0FMMHZCRjtBbUJuNEJFO0VBQ0UscUNBQUE7QW5CczRCSjtBb0J0NUJNO0VEb0JGLCtCQUFBO0FuQnM0Qko7QW1CajRCRTtFQUNFO0lBRUUsaUJBQUE7RW5CbTRCSjtBQUNGO0FtQmg0QkU7RUFDRSwwQkFBQTtBbkJrNEJKO0FtQi8zQkU7O0VBRUUsMEJBQUE7QW5CazRCSjtBbUIvM0JFO0VBQ0UsMEJBQUE7QW5CazRCSjtBbUJoNEJJOztFQUVFLGNBQUE7QW5CazRCTjtBbUJyMkJJO0VBQ0UsWUFMZTtBbkI2MkJyQjtBbUJ0MkJNO0VBQ0UsWUFWWTtBbkJrM0JwQjtBcUIzNUJFO0VBQ0UseUJBWkE7QXJCMDZCSjtBcUIzNUJFO0VBQ0UseUJBaEJBO0FyQjg2Qko7QXFCMzVCRTtFQUNFLGNBbkJvQjtBckJpN0J4QjtBcUI1NUJJO0VBQ0UsY0FoQnFCO0FyQjg2QjNCO0FxQjM1Qkk7RUFDRSxjQW5CbUI7QXJCZzdCekI7QXFCejVCRTtFQUNFLGNBOUJxQjtBckIwN0J6QjtBcUJ6NUJFO0VBQ0UscUNBOUJBO0FyQjA3Qko7QXFCeDVCSTtFQUNFLHlCQWhDc0I7QXJCMjdCNUI7QXFCejVCTTtFQUNFLHlCQXJDbUI7QXJCZzhCM0I7QXFCeDVCTTtFQUNFLHlCQXhDaUI7QXJCazhCekI7QXFCcDVCSTtFQUNFLGNBOUNzQjtBckJxOEI1QjtBcUJwNUJJO0VBQ0UsY0FwRHFCO0FyQjA4QjNCO0FxQm41Qkk7RUFDRSxjQXZEbUI7QXJCNDhCekI7QXFCNzRCSTtFQUNFLGNBaEVtQjtBckJnOUJ6QjtBcUI5NEJNOztFQUVFLGNBcEVpQjtBckJvOUJ6QjtBcUI1NEJJOztFQUVFLHlCQTFFbUI7QXJCdzlCekI7QXFCMTRCRTtFQUNFLGNBL0VxQjtBckI0OUJ6QjtBc0J2K0JJO0VBQ0UsMEJBTlU7QXRCZy9CaEI7QXNCditCSTtFQUNFLDBCQVZVO0F0Qm0vQmhCO0FzQnQrQkk7RUFDRSxxQ0FaRjtBdEJvL0JKO0FzQnIrQkk7RUN4QkYsNEdBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0F2QmdnQ0Y7QXdCMS9CSTtFQUNFLHFDQUpGO0F4QmlnQ0o7QXdCMS9CSTtFRFpGLDRHQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBdkJ5Z0NGO0F5QjUvQkk7RUFDRSxxQ0FURjtBekJ3Z0NKO0F5QjUvQkk7RUFDRSxxQ0FYRjtBekJ5Z0NKO0F5QjMvQkk7RUFDRSxxQ0FiRjtBekIwZ0NKO0F5QnovQk07RUFDRSwwQkFqQmlCO0F6QjRnQ3pCO0F5QngvQk07RUFDRSw2QkFBQTtBekIwL0JSO0EwQnRnQ0k7RUFDRSwwQkFYRjtBMUJvaENKO0EwQnRnQ0k7RUFDRSwwQkFiRjtBMUJxaENKO0EwQnBnQ007RUFDRSxjQWpCa0I7QTFCdWhDMUI7QTBCbmdDTTtFQUNFLGNBcEJpQjtBMUJ5aEN6QjtBMEJsZ0NNO0VBQ0UsY0F2QmU7QTFCMmhDdkI7QTBCOS9CTTtFQUNFLGNBOUJlO0ExQjhoQ3ZCO0EwQjMvQk07RUFDRSwwQkEzQ2lCO0ExQndpQ3pCO0EwQjEvQk07RUFDRSwwQkF0Q0o7QTFCa2lDSjtBMkIvaUNJO0VBQ0UsY0FBQTtBM0JrakNOO0EyQi9pQ0k7RUFDRSxjQUFBO0EzQmlqQ047QTJCOWlDSTtFQUNFLGNBQUE7QTNCZ2pDTjtBNEJyakNFO0VBQ0UsMEJBQUE7QTVCd2pDSjtBNEJyakNFOztFQUVFLDBCQUFBO0E1QndqQ0o7QTRCcmpDRTtFQUNFLG9CQUFBO0E1QndqQ0o7QTZCemtDRTtFRG9CSSwwQkFBQTtBNUJ3akNOO0E2QjVrQ0U7RURvQkksMEJBQUE7QTVCd2pDTjtBNkJ4a0NFO0VEZ0JJLDBCQUFBO0E1QjJqQ047QTZCdmtDRTtFRFlJLDBCQUFBO0E1QjhqQ047QTZCdGtDRTtFRFFJLDBCQUFBO0E1QmlrQ047QTRCOWlDRTtFQUNFLG9CQUFBO0E1QmlqQ0o7QTRCOWlDRTs7RUFFRSxvQkFBQTtBNUJpakNKO0E0QjlpQ0U7RUFDRSxjQUFBO0E1QmlqQ0o7QThCOWxDSTtFQUNFLDBCQUFBO0E5QmltQ047QThCOWxDSTtFQUNFLDBCQUFBO0E5QmdtQ047QThCN2xDSTtFQUNFLDBCQUFBO0E5QitsQ047QThCM2xDRTtFQUNFLHlCQUFBO0E5QjhsQ0o7QThCeGxDSTs7Ozs7RUFDRSwrQkFBQTtBOUIrbENOO0E4QjFsQ0k7RUFDRSwrQkFBQTtBOUI2bENOO0ErQnpuQ0U7RUFFRSxpQkFBQTtBL0IybkNKO0FLaitCRTtFQVhBLDBIQUFBO0FMKytCRjtBK0IzbkNFO0VBQ0UsdUJBQUE7RUFDQSwwQkFBQTtBL0I4bkNKO0ErQjNuQ007O0VBR0UsMEJBQUE7QS9CNG5DUjtBK0J2bkNFOztFQUVFLDBCQUFBO0EvQjBuQ0o7QStCbm5DSTs7OztFQUNFLCtCQUFBO0EvQnluQ047QWdDcnBDRTtFQUNFLGlCQUFBO0FoQ3dwQ0o7QWdDcnBDRTs7RUFFRSwwQkFBQTtBaEN3cENKO0FnQ3JwQ0U7O0VBRUUseUNBQUE7RUFDQSwyQ0FBQTtBaEN3cENKO0FnQ3JwQ0U7O0VBRUUseUNBQUE7QWhDd3BDSjtBZ0NwcENJOzs7O0VBSUUsaUNBQUE7QWhDdXBDTjtBZ0Nob0NJO0VBQ0UsZ0JBTEs7QWhDd29DWDtBaUN6cUNFO0VBQ0UsYUFBQTtBakM0cUNKO0FpQ3pxQ0U7RUFDRSx5QkFBQTtBakM0cUNKO0FpQ3pxQ0U7RUFDRSx5QkFBQTtBakM0cUNKO0FpQ3hxQ0k7RUFDRSxhQUFBO0FqQzJxQ047QWlDeHFDSTtFQUNFLHlCQUFBO0FqQzBxQ047QWlDdnFDSTtFQUNFLHlCQUFBO0FqQ3lxQ047QWlDcHFDSTtFQUNFLGFBQUE7QWpDdXFDTjtBaUNwcUNJO0VBQ0UseUJBQUE7QWpDc3FDTjtBaUNucUNJO0VBQ0UseUJBQUE7QWpDcXFDTjtBa0N0dENJO0VBQ0UsZUFBQTtBbEN5dENOO0FrQ3R0Q0k7RUFDRSxlQUFBO0FsQ3d0Q047QWtDcnRDSTtFQUNFLGVBQUE7QWxDdXRDTjtBbUNodENFO0VBQ0UsaUNBQUE7QW5DbXRDSjtBbUN4dUNFO0VBQ0UscUJBQUE7QW5DMnVDSjtBbUN4dUNFOztFQUlFLHlCQUFBO0FuQ3d1Q0o7QW1DaHZDRTtFQUNFLHFCQUFBO0FuQ2t2Q0o7QW1DL3VDRTs7RUFJRSx5QkFBQTtBbkMrdUNKO0FtQ3Z2Q0U7RUFDRSxxQkFBQTtBbkN5dkNKO0FtQ3R2Q0U7O0VBSUUseUJBQUE7QW5Dc3ZDSjtBbUNydENNOztFQUVFLGlDQUFBO0FuQ3V0Q1I7QW1DcHRDTTs7RUFFRSxxQ0FBQTtBbkNzdENSO0FtQ250Q007RUFDRSwwQkFBQTtBbkNxdENSO0FtQy9zQ0k7RUFDRSx1QkFBQTtBbkNpdENOO0FvQ2x3Q0U7RUFDRSwwQkFBQTtBcENxd0NKO0FvQ2x3Q0U7RUFDRSwwQkFBQTtBcENxd0NKO0FvQ2x3Q0U7RUFDRSwwQkFBQTtBcENxd0NKO0FvQ2x3Q0U7RUFDRSwwQkFBQTtBcENxd0NKO0FvQ2x3Q0U7RUFDRSxpQkFBQTtBcENxd0NKO0FLOW5DRTtFQVhBLDBIQUFBO0FMNG9DRjtBb0Nyd0NJO0VBQ0UsK0JBQUE7QXBDdXdDTjtBb0Nqd0NNO0VBQ0UsY0FBQTtBcENvd0NSO0FvQ2p3Q007RUFDRSxjQUFBO0FwQ213Q1I7QW9DaHdDTTtFQUNFLGNBQUE7QXBDa3dDUjtBb0M5dkNJO0VBQ0UsY0FBQTtBcENnd0NOO0FvQzd2Q0k7RUFDRSwwQkFBQTtBcEMrdkNOO0FxQ3p5Q0U7RUFDRSx5QkFMbUM7RUFNbkMsMEJBQUE7QXJDNHlDSjtBcUN6eUNFO0VBQ0UsdUJBWHdCO0VBWXhCLDBCQUFBO0FyQzR5Q0o7QXFDMXlDSTtFQUNFLHVCQWIyQjtBckN5ekNqQztBcUN6eUNJO0VoQzZIRiw2SEFBQTtBTCtxQ0Y7QXFDcnlDRTtFQUNFLDJDQXZCbUI7QXJDK3pDdkI7QXFDdHlDSTtFQUNFLDBDQTFCaUI7RUEyQmpCLGtCQUFBO0FyQ3d5Q047QXFDcHlDRTtFQUNFLDBDQWhDbUI7RUFpQ25CLGtCQUFBO0FyQ3V5Q0o7QXFDcnlDSTtFQUNFLGlCQUFBO0VBQ0EsMkNBckNpQjtBckM0MEN2QjtBcUNueUNFO0VBUUksb0NBQUE7QXJDK3hDTjtBc0N4MUNJO0VBQ0UseUJBQUE7QXRDMjFDTjtBc0N4MUNJO0VBR0UseUNBQUE7QXRDdzFDTjtBc0NyMUNJO0VBR0UseUJBQUE7QXRDcTFDTjtBc0NsMkNJO0VBQ0UseUJBQUE7QXRDbzJDTjtBc0NqMkNJO0VBR0UsMENBQUE7QXRDaTJDTjtBc0M5MUNJO0VBR0UseUJBQUE7QXRDODFDTjtBc0MzMkNJO0VBQ0UseUJBQUE7QXRDNjJDTjtBc0MxMkNJO0VBR0UseUNBQUE7QXRDMDJDTjtBc0N2MkNJO0VBR0UseUJBQUE7QXRDdTJDTjtBc0NsMENJO0VBR0UsdUJBaEJxQjtBdENrMUMzQjtBc0M5ekNFO0VqQzJGQSx5SEFBQTtFaUN6RkUseUJBQUE7QXRDaTBDSjtBc0M5ekNFO0VBQ0UscUNBM0JvQjtBdEM0MUN4QjtBdUN2MUNFO0VBQ0UscUNBYnFCO0F2Q3UyQ3pCO0F1Q3Q0Q0U7OztFQUdFLHlCQUFBO0F2Q3k0Q0o7QXVDdDRDRTtFQUNFLFlBQUE7QXZDdzRDSjtBdUNyNENFO0VBR0UseUNBRFE7QXZDczRDWjtBdUNsNUNFOzs7RUFHRSx5QkFBQTtBdkNxNUNKO0F1Q2w1Q0U7RUFDRSxZQUFBO0F2Q281Q0o7QXVDajVDRTtFQUdFLHdDQURRO0F2Q2s1Q1o7QXVDOTVDRTs7O0VBR0UseUJBQUE7QXZDaTZDSjtBdUM5NUNFO0VBQ0UsWUFBQTtBdkNnNkNKO0F1Qzc1Q0U7RUFHRSx3Q0FEUTtBdkM4NUNaO0F1QzcyQ0k7O0VBQ0UscUNBOUIyQjtBdkMrNENqQztBdUM1MkNJOzs7RUFHRSxxQ0FyQ3dCO0F2Q281QzlCO0F1QzMyQ007RUFDRSxxQ0ExQ3NCO0F2Q3U1QzlCO0F1Q3YyQ0k7RUFHRSxxQ0FEUTtBdkN5MkNkO0F1QzkxQ007O0VBRUUscUNBN0RKO0F2QzY1Q0o7QXVDNTFDUTs7RUFFRSxxQ0FqRU47QXZDKzVDSjtBdUN4MUNNO0VBQ0UsaUNBOUVpQjtFQStFakIsNkJBQUE7QXZDMDFDUjtBdUNyMUNRO0VBQ0UsaUNBcEZ1QjtBdkMyNkNqQztBdUNwMUNRO0VBQ0UsaUNBdkZvQjtBdkM2NkM5QjtBdUNoMUNFO0VBQ0UsZ0NBdkZBO0F2QzA2Q0o7QXVDMTBDRTtFQUNFLDZIQUFBO0VBSUEsbUlBQUE7QXZDMDBDSjtBdUNoMENFO0VBQ0UsOEhBQUE7QXZDbTBDSjtBd0NsOUNJO0VBR0UscUNBQUE7QXhDbTlDTjtBd0M3OENJO0VBQ0U7SUFDRSxnQkFBQTtFeEMrOENOO0FBQ0Y7QXdDNThDSTs7RUFJRSwwQkFBQTtBeEM0OENOO0F3Q3o4Q0k7RUFHRSxxQ0FBQTtFQUNBLFlBQUE7QXhDeThDTjtBd0N0OENJOzs7RUFHRSx5QkFBQTtFQUNBLFlBQUE7QXhDdzhDTjtBd0NwOENNO0VBQ0UsWUFBQTtBeENzOENSO0F3Q244Q007OztFQUdFLHlCQUFBO0VBQ0EsWUFBQTtBeENxOENSO0F3Q2g4Q007RUFDRSxZQUFBO0F4Q2s4Q1I7QXdDLzdDTTs7O0VBR0UseUJBQUE7RUFDQSxZQUFBO0F4Q2k4Q1I7QXdDNzdDSTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtBeEMrN0NOO0F3QzU3Q0k7RUFDRSwwQkFBQTtBeEM4N0NOO0F3QzM3Q0k7RUFDRSxjQUFBO0F4QzY3Q047QXdDejdDRTtFQUNFLHVCQUFBO0F4QzQ3Q0o7QXdDejdDRTtFQUNFLHNDQUFBO0F4QzQ3Q0o7QXdDejdDRTs7O0VBR0UscUNBQUE7QXhDNDdDSjtBd0NuNUNJO0VBQ0UsWUFOSztBeEM0NUNYO0F3Q241Q0k7O0VBRUUsa0JBQUE7QXhDczVDTjtBd0NqNUNJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QXhDbzVDTjtBd0MvNENNO0VBQ0UsU0FBQTtBeENrNUNSO0F3Qzc0Q0k7RUFDRSxTQUFBO0F4Q2c1Q047QXlDL2lERTtFQVlJLGNBQUE7QXpDdWlETjtBMEMvaURFOztFQUVFLDRDQUpjO0ExQ3NqRGxCO0EwQzlpREk7O0VBRUUseUNBVlk7RUFXWixtQkFBQTtBMUNpakROO0EwQzdpREU7RUFDRSwwQkFBQTtBMUNnakRKO0EwQzlpREk7RUFDRSwwQkFBQTtBMUNnakROO0EwQzVpREU7RUFDRSxpQ0FBQTtBMUMraURKO0EwQzVpREU7RUFDRSxpQ0FBQTtBMUMraURKO0EwQzNpREU7O0VBRUUsbUJBQUE7RUFDQSxnQkFBQTtBMUM4aURKO0EwQ2hnRE07Ozs7O0VBQ0UsMENBQUE7QTFDdWdEUjtBMENsaERFO0VBQ0UseUJBQUE7QTFDb2hESjtBMENyaERFO0VBQ0UsdUJBQUE7QTFDdWhESjtBMEM5Z0RNOzs7OztFQUNFLDBDQUFBO0ExQ29oRFI7QTBDL2hERTtFQUNFLHlCQUFBO0ExQ2lpREo7QTBDbGlERTtFQUNFLHVCQUFBO0ExQ29pREo7QTBDM2hETTs7Ozs7RUFDRSwwQ0FBQTtBMUNpaURSO0EwQzVpREU7RUFDRSx5QkFBQTtBMUM4aURKO0EwQy9pREU7RUFDRSx1QkFBQTtBMUNpakRKO0EwQ3hpRE07Ozs7O0VBQ0UsMENBQUE7QTFDOGlEUjtBMENuaURFO0VBQ0UseUJBQUE7QTFDcWlESjtBMENqaURFO0VBQ0UsWUFBQTtBMUNtaURKO0EwQ2ppREk7RUFDRSwrQkFBQTtBMUNtaUROO0EwQzloREU7Ozs7Ozs7RUFJRSxtQkFBQTtBMUNtaURKO0EwQ2hpREU7OztFQUVFLHNDQUFBO0ExQ21pREo7QTBDOWhERTs7Ozs7RUFHRSwyQ0FBQTtBMUNraURKO0EwQzdrRE07Ozs7O0VBQ0UsMENBQUE7QTFDbWxEUjtBMEN4a0RFO0VBQ0UseUJBQUE7QTFDMGtESjtBMEN0a0RFO0VBQ0UsWUFBQTtBMUN3a0RKO0EwQ3RrREk7RUFDRSwrQkFBQTtBMUN3a0ROO0EwQ25rREU7Ozs7Ozs7RUFJRSxtQkFBQTtBMUN3a0RKO0EwQ3JrREU7OztFQUVFLHNDQUFBO0ExQ3drREo7QTBDbmtERTs7Ozs7RUFHRSwyQ0FBQTtBMUN1a0RKO0EwQ2xuRE07Ozs7O0VBQ0UsMENBQUE7QTFDd25EUjtBMEM3bURFO0VBQ0UseUJBQUE7QTFDK21ESjtBMEMzbURFO0VBQ0UsWUFBQTtBMUM2bURKO0EwQzNtREk7RUFDRSwrQkFBQTtBMUM2bUROO0EwQ3htREU7Ozs7Ozs7RUFJRSxtQkFBQTtBMUM2bURKO0EwQzFtREU7OztFQUVFLHNDQUFBO0ExQzZtREo7QTBDeG1ERTs7Ozs7RUFHRSwyQ0FBQTtBMUM0bURKO0EyQ2xzREU7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0EzQ3FzREo7QTJDbnNESTtFQXBDRixtQkFBQTtFQUNBLFlBQUE7QTNDMHVERjtBMkNuc0RJO0VBeENGLG1CQUFBO0VBQ0EsWUFBQTtBM0M4dURGO0EyQ25zREk7RUE1Q0YsbUJBQUE7RUFDQSxZQUFBO0EzQ2t2REY7QTJDOXVERTs7O0VBR0UsOEJBQUE7QTNDZ3ZESjtBMkM3dURFOzs7OztFQUtFLGNBQUE7QTNDK3VESjtBMkM1dURFO0VBQ0UseUJBQUE7QTNDOHVESjtBMkMzd0RFO0VBQ0UsZ0JBNkVlO0EzQ2lzRG5CO0EyQzV3REU7RUFDRSxZQTBFZTtBM0Nxc0RuQjtBMkN6ckRJO0VBMUZGO0lBQ0UsZ0JBK0VjO0UzQ3dzRGhCOztFMkNyeERBO0lBQ0UsWUE0RWM7RTNDNHNEaEI7QUFDRjtBNENweERFO0VBQ0UsaUNBQUE7QTVDc3hESjtBNkM3eERFO0VBQ0UsaUJBQUE7QTdDZ3lESjtBNkM3eERFOztFQUVFLDBCQUFBO0E3Q2d5REo7QTZDeHdESTtFQUNFLGdCQUxLO0E3Q2d4RFg7QThDMXlERTtFQUdFLCtCQUFBO0VBQ0EsbUJBQUE7RXpDNklGLDJIQUFBO0FMK3BERjtBOEN2eURFO0VBQ0UsY0FBQTtBOUMweURKO0FGbHlEQSxlQUFBO0FBbUJBLGtCQUFBO0FBYUEsZUFBQTtBQW9CQSxlQUFBO0FBUUEsaUJBQUE7QUV6RkE7O2tCQUFBO0FBR0E7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUF1MERKO0FBcDBEQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCRnNDSTtBRWl5RFI7QUFwMERBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQXUwREo7QUFwMERBOztFQUVJLFlBQUE7RUFDQSxjQUFBO0FBdTBESjtBQXAwREE7RUFDSSxXQUFBO0FBdTBESjtBQXAwREE7O0VBRUksWUFBQTtFQUNBLGNBQUE7QUF1MERKO0FBcDBEQTtFQUNJLFdBQUE7QUF1MERKO0FBcDBEQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkYyQ0s7RUV6Q0wseUNBQUE7QUF1MERKO0FBcDBEQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxnREFBQTtBQXUwREo7QUFwMERBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0FBdTBESjtBQXAwREE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXUwREo7QUFuMERBO0VBQ0ksWUFBQTtBQXMwREo7QUFuMERBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBczBESjtBQW4wREE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFzMERKO0FBbjBEQTtFQUNJLHlCRmxFTTtBRXc0RFY7QUFuMERBO0VBQ0kseUJGeEVNO0FFODREVjtBQW4wREE7RUFDSSx5QkYzRU07QUVpNURWO0FBbjBEQTtFQUNJLHlCRmpGSztBRXU1RFQ7QUFuMERBO0VBQ0kseUJGakZHO0FFdTVEUDtBQW4wREE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBczBESjtBQW4wREE7O0VBRUksZ0JBQUE7QUFzMERKO0FBbjBEQTtFQUNJLGVBQUE7QUFzMERKO0FBajBEQTtFQUNBLFdBQUE7RUFDSTtJQUNJLFVBQUE7RUFvMEROOztFQWwwREU7SUFDSSx3QkFBQTtFQXEwRE47O0VBbjBERTtJQUNJLFNBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtFQXMwRE47O0VBcDBERTtJQUNJLFlBQUE7RUF1MEROOztFQXIwREU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0lBQ0Esb0JBQUE7RUF3MEROOztFQXQwREU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0lBQ0Esb0JBQUE7RUF5MEROO0FBQ0YiLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVGVtcGxhdGUgTmFtZTogTWF0ZXJpYWwgUHJvIEFkbWluXG5BdXRob3I6IFRoZW1lZGVzaWduZXJcbkVtYWlsOiBuaXJhdmpvc2hpODdAZ21haWwuY29tXG5GaWxlOiBzY3NzXG4qL1xuLy8gZm9udCBmYW1pbHksIGFsc28gcGFzdGUgdGhpcyBpbXBvcnQgaW50byBzdHlsZXMuY3NzIGZpbGUuXG5cbkB1c2UgJ35AYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDAnKTtcblxuJGJvZHlmb250OidQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiRoZWFkaW5nZm9udDonUG9wcGlucycsIHNhbnMtc2VyaWY7IFxuXG5cbi8qTWF0ZXJpYWwgVGhlbWUgQ29sb3JzKi9cblxuJHByaW1hcnk6IG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJGJsdWUtcGFsZXR0ZSwgNjAwKTtcbiRhY2NlbnQ6IG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJGluZGlnby1wYWxldHRlLCA1MDApO1xuJHdhcm46IG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJHBpbmstcGFsZXR0ZSwgNTAwKTtcbiR0aGVtZTogbWF0LmRlZmluZS1saWdodC10aGVtZSgkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm4pO1xuJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbi8vIERlZmF1bHQgVGhlbWVcbkBpbmNsdWRlIG1hdC5hbGwtY29tcG9uZW50LXRoZW1lcygkdGhlbWUpO1xuXG5cbi8vIERhcmsgVGhlbWVcblxuLypUaGVtZSBDb2xvcnMqL1xuIFxuJHRvcGJhcjogIzIxOTZmMztcbiRzaWRlYmFyOiAjZmZmO1xuJHNpZGViYXItd2hpdGU6ICNlNWVkZWY7XG4kc2lkZWJhci1hbHQ6I2YyZjZmODtcbiRib2R5Y29sb3I6ICNlZWY1Zjk7XG4kaGVhZGluZ3RleHQ6ICM0NTVhNjQ7XG4kYm9keXRleHQ6ICM2Nzc1N2M7IFxuJHNpZGViYXItdGV4dDogIzhmOTk5ZTtcbiRzaWRlYmFyLWljb25zOiAjOTlhYmI0IDtcblxuJGZvbnQtMTY6IDE2cHg7XG5cbiRsaWdodC10ZXh0OiAjYTZiN2JmO1xuJHRoZW1lY29sb3I6ICMxZTg4ZTU7XG4kdGhlbWVjb2xvci1hbHQ6ICMyNmM2ZGE7XG4kdGhlbWVjb2xvci1kYXJrOiAjMDI4ZWUxO1xuXG4vKmJvb3RzdHJhcCBDb2xvciovXG4kZGFuZ2VyOiAjZmM0YjZjO1xuJHN1Y2Nlc3M6ICMyNmM2ZGE7XG4kd2FybmluZzogI2ZmYjIyYjtcbiRwcmltYXJ5OiAjNzQ2MGVlO1xuJGluZm86ICMxZTg4ZTU7XG4kaW52ZXJzZTogIzJmM2Q0YTtcbiRtdXRlZDogIzk5YWJiNDtcbiRkYXJrOiAjMjYzMjM4O1xuJGxpZ2h0OiAjZjJmNGY4O1xuJGV4dHJhLWxpZ2h0OiAjZWJmM2Y1O1xuJHNlY29uZGFyeTogIzcyN2I4NDtcblxuLypMaWdodCBjb2xvcnMqL1xuJGxpZ2h0LWRhbmdlcjogI2Y5ZTdlYjtcbiRsaWdodC1zdWNjZXNzOiAjZThmZGY4O1xuJGxpZ2h0LXdhcm5pbmc6ICNmZmY4ZWM7XG4kbGlnaHQtcHJpbWFyeTogI2YxZWZmZDtcbiRsaWdodC1pbmZvOiAjZTNmM2ZkO1xuJGxpZ2h0LWludmVyc2U6ICNmNmY2ZjY7XG4kbGlnaHQtbWVnbmE6ICNlMGYyZjQ7IFxuXG5cblxuJGRhbmdlci1kYXJrOiAjZTYyOTRiO1xuJHN1Y2Nlc3MtZGFyazogIzFlYWNiZTtcbiR3YXJuaW5nLWRhcms6ICNlOWFiMmU7XG4kcHJpbWFyeS1kYXJrOiAjNjM1MmNlO1xuJGluZm8tZGFyazogIzAyOGVlMTtcbiRyZWQtZGFyazogI2Q2MWYxZjtcbiRpbnZlcnNlLWRhcms6ICMyMzJhMzc7XG4kZGFyay10cmFuc3BhcmVudDpyZ2JhKDAsIDAsIDAsIDAuMDUpO1xuXG4vKk5vcm1hbCBDb2xvciovXG4kd2hpdGU6ICNmZmZmZmY7XG4kcmVkOiAjZmIzYTNhO1xuJHllbGxvdzogI2EwYWVjNDtcbiRwdXJwbGU6ICM3NDYwZWU7XG4kYmx1ZTogIzAyYmVjOTtcbiRtZWduYTogIzAwODk3YjtcblxuLypFeHRyYSBWYXJpYWJsZSovXG4kcmd0OiByaWdodDtcbiRsZnQ6IGxlZnQ7XG4kYm9yZGVyOiByZ2JhKDEyMCwgMTMwLCAxNDAsIDAuMTMpO1xuJHRhYmxlLWJvcmRlcjojZjNmMWYxO1xuJGNhcmQtYnJkOiNkN2RmZTM7XG4kZGFyay10ZXh0OiAjODQ4YTk2O1xuJHJhZGl1czogNHB4O1xuJGZvcm0tYnJkOiAjZDlkOWQ5O1xuXG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAnLi4vdGhlbWluZy90aGVtaW5nJztcblxuLy8gQ29sb3JzIGZvciB0aGUgcmlwcGxlIGVsZW1lbnRzLlxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQtYmFzZTogbWFwLmdldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICRjb2xvci1vcGFjaXR5OiAwLjE7XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgLy8gSWYgdGhlIHJpcHBsZSBjb2xvciBpcyByZXNvbHZlcyB0byBhIGNvbG9yICp0eXBlKiwgd2UgY2FuIHVzZSBpdCBkaXJlY3RseSwgb3RoZXJ3aXNlXG4gICAgLy8gKGUuZy4gaXQgcmVzb2x2ZXMgdG8gYSBDU1MgdmFyaWFibGUpIHdlIGZhbGwgYmFjayB0byB1c2luZyB0aGUgY29sb3IgYW5kIHNldHRpbmcgYW4gb3BhY2l0eS5cbiAgICBAaWYgKG1ldGEudHlwZS1vZigkZm9yZWdyb3VuZC1iYXNlKSA9PSBjb2xvcikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZm9yZWdyb3VuZC1iYXNlLCAkY29sb3Itb3BhY2l0eSk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWJhc2U7XG4gICAgICBvcGFjaXR5OiAkY29sb3Itb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXJpcHBsZScpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVcIjtcbi8qKioqKioqKioqKioqKioqKioqXG5UaW1lbGluZSBwYWdlXG4qKioqKioqKioqKioqKioqKiovXG4udGltZWxpbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMjBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1heC13aWR0aDoxMjAwcHg7XG4gICAgbWFyZ2luOjAgYXV0bztcbn1cblxuLnRpbWVsaW5lOmJlZm9yZSB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiAzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XG59XG5cbi50aW1lbGluZSA+IGxpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRpbWVsaW5lID4gbGk6YmVmb3JlLFxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUgPiBsaTphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZSA+IGxpOmJlZm9yZSxcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA0NiU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLDAsMCwwLjA1KTtcbiAgICBib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLDAsMCwwLjA1KTtcbn1cblxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjZweDtcbiAgICByaWdodDogLThweDtcbiAgICBib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkICRib3JkZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgJGJvcmRlcjtcbn1cblxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyN3B4O1xuICAgIHJpZ2h0OiAtN3B4O1xuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDAgc29saWQgJHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICR3aGl0ZTtcbn1cblxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtYmFkZ2Uge1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2cHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICBcbn1cblxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWwge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAtOHB4O1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogOHB4O1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xufVxuXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogLTdweDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDdweDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcbn1cblxuLnRpbWVsaW5lLWJhZGdlLnByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xufVxuXG4udGltZWxpbmUtYmFkZ2Uuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3M7XG59XG5cbi50aW1lbGluZS1iYWRnZS53YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2FybmluZztcbn1cblxuLnRpbWVsaW5lLWJhZGdlLmRhbmdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhbmdlcjtcbn1cblxuLnRpbWVsaW5lLWJhZGdlLmluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbmZvO1xufVxuXG4udGltZWxpbmUtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6NDAwO1xufVxuXG4udGltZWxpbmUtYm9keSA+IHAsXG4udGltZWxpbmUtYm9keSA+IHVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udGltZWxpbmUtYm9keSA+IHAgKyBwIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cblxuLy9UaGlzIGlzIGZvciB0aGUgcmVzcG9uc2l2ZSB0aW1lbGluZVxuQG1lZGlhKG1heC13aWR0aDo3NjdweCkge1xuLypUaW1lbGluZSovXG4gICAgdWwudGltZWxpbmU6YmVmb3JlIHtcbiAgICAgICAgbGVmdDogNDBweDtcbiAgICB9XG4gICAgdWwudGltZWxpbmU+bGk+LnRpbWVsaW5lLXBhbmVsIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xuICAgIH1cbiAgICB1bC50aW1lbGluZT5saT4udGltZWxpbmUtYmFkZ2Uge1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgICB1bC50aW1lbGluZT5saT4udGltZWxpbmUtcGFuZWwge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICAgIHVsLnRpbWVsaW5lPmxpPi50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMTVweDtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgfVxuICAgIHVsLnRpbWVsaW5lPmxpPi50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAtMTRweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNHB4O1xuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgICB9XG59IiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG5cbiAgLm1hdC1vcHRpb24ge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLFxuICAgICY6Zm9jdXM6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAvLyBJbiBtdWx0aXBsZSBtb2RlIHRoZXJlIGlzIGEgY2hlY2tib3ggdG8gc2hvdyB0aGF0IHRoZSBvcHRpb24gaXMgc2VsZWN0ZWQuXG4gICAgJi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgICYubWF0LWFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LW9wdGlvbi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSwgdGV4dCk7XG4gIH1cblxuICAubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50LCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2FybiwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1vcHRpb24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICAgIHNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtb3B0aW9uJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgQGluY2x1ZGUgdHlwb2dyYXBoeS11dGlscy50eXBvZ3JhcGh5LWxldmVsKCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1vcHRncm91cCcpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi8uLi90aGVtaW5nL3RoZW1pbmcnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAuZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuICAkY29sb3JlZC1ib3gtc2VsZWN0b3I6ICcubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlJztcblxuICAubWF0LXBzZXVkby1jaGVja2JveCB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZShtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSkpO1xuICB9XG5cbiAgLy8gRGVmYXVsdCB0byB0aGUgYWNjZW50IGNvbG9yLiBOb3RlIHRoYXQgdGhlIHBzZXVkbyBjaGVja2JveGVzIGFyZSBtZWFudCB0byBpbmhlcml0IHRoZVxuICAvLyB0aGVtZSBmcm9tIHRoZWlyIHBhcmVudCwgcmF0aGVyIHRoYW4gaW1wbGVtZW50aW5nIHRoZWlyIG93biB0aGVtaW5nLCB3aGljaCBpcyB3aHkgd2VcbiAgLy8gZG9uJ3QgYXR0YWNoIHRvIHRoZSBgbWF0LSpgIGNsYXNzZXMuIEFsc28gbm90ZSB0aGF0IHRoaXMgbmVlZHMgdG8gYmUgYmVsb3cgYC5tYXQtcHJpbWFyeWBcbiAgLy8gaW4gb3JkZXIgdG8gYWxsb3cgZm9yIHRoZSBjb2xvciB0byBiZSBvdmVyd3JpdHRlbiBpZiB0aGUgY2hlY2tib3ggaXMgaW5zaWRlIGEgcGFyZW50IHRoYXRcbiAgLy8gaGFzIGBtYXQtYWNjZW50YCBhbmQgaXMgcGxhY2VkIGluc2lkZSBhbm90aGVyIHBhcmVudCB0aGF0IGhhcyBgbWF0LXByaW1hcnlgLlxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUobWFwLmdldCgkY29uZmlnLCBhY2NlbnQpKTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKG1hcC5nZXQoJGNvbmZpZywgd2FybikpO1xuICB9XG5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgJi5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1wc2V1ZG8tY2hlY2tib3gnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAndGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4vc3R5bGUvcHJpdmF0ZSc7XG5AdXNlICcuL3JpcHBsZS9yaXBwbGUtdGhlbWUnO1xuQHVzZSAnLi9vcHRpb24vb3B0aW9uLXRoZW1lJztcbkB1c2UgJy4vb3B0aW9uL29wdGdyb3VwLXRoZW1lJztcbkB1c2UgJy4vc2VsZWN0aW9uL3BzZXVkby1jaGVja2JveC9wc2V1ZG8tY2hlY2tib3gtdGhlbWUnO1xuQHVzZSAnLi9zdHlsZS9lbGV2YXRpb24nO1xuXG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLy8gV3JhcHBlciBlbGVtZW50IHRoYXQgcHJvdmlkZXMgdGhlIHRoZW1lIGJhY2tncm91bmQgd2hlbiB0aGUgdXNlcidzIGNvbnRlbnQgaXNuJ3RcbiAgLy8gaW5zaWRlIG9mIGEgYG1hdC1zaWRlbmF2LWNvbnRhaW5lcmAuIE5vdGUgdGhhdCB3ZSBuZWVkIHRvIGV4Y2x1ZGUgdGhlIGFtcGVyc2FuZFxuICAvLyBzZWxlY3RvciBpbiBjYXNlIHRoZSBtaXhpbiBpcyBpbmNsdWRlZCBhdCB0aGUgdG9wIGxldmVsLlxuICAubWF0LWFwcC1iYWNrZ3JvdW5kI3tpZigmLCAnLCAmLm1hdC1hcHAtYmFja2dyb3VuZCcsICcnKX0ge1xuICAgICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAgICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC8vIFByb3ZpZGVzIGV4dGVybmFsIENTUyBjbGFzc2VzIGZvciBlYWNoIGVsZXZhdGlvbiB2YWx1ZS4gRWFjaCBDU1MgY2xhc3MgaXMgZm9ybWF0dGVkIGFzXG4gIC8vIGBtYXQtZWxldmF0aW9uLXokelZhbHVlYCB3aGVyZSBgJHpWYWx1ZWAgY29ycmVzcG9uZHMgdG8gdGhlIHotc3BhY2UgdG8gd2hpY2ggdGhlIGVsZW1lbnQgaXNcbiAgLy8gZWxldmF0ZWQuXG4gIEBmb3IgJHpWYWx1ZSBmcm9tIDAgdGhyb3VnaCAyNCB7XG4gICAgLiN7ZWxldmF0aW9uLiRwcmVmaXh9I3skelZhbHVlfSB7XG4gICAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtZWxldmF0aW9uKCR6VmFsdWUsICRjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1hcmtlciB0aGF0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHVzZXIgaGFzIGFkZGVkIGEgdGhlbWUgdG8gdGhlaXIgcGFnZS5cbiAgQGF0LXJvb3Qge1xuICAgIC5tYXQtdGhlbWUtbG9hZGVkLW1hcmtlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGRlcGVuZCBvbiB0aGUgdGhlbWUuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAvLyBXcmFwIHRoZSBzdWItdGhlbWUgaW5jbHVkZXMgaW4gdGhlIGR1cGxpY2F0ZSB0aGVtZSBzdHlsZXMgbWl4aW4uIFRoaXMgZW5zdXJlcyB0aGF0XG4gIC8vIHRoZXJlIHdvbid0IGJlIG11bHRpcGxlIHdhcm5pbmdzLiBlLmcuIGlmIGBtYXQtY29yZS10aGVtZWAgcmVwb3J0cyBhIHdhcm5pbmcsIHRoZW5cbiAgLy8gdGhlIGltcG9ydGVkIHRoZW1lcyAoc3VjaCBhcyBgbWF0LXJpcHBsZS10aGVtZWApIHNob3VsZCBub3QgcmVwb3J0IGFnYWluLlxuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtY29yZScpIHtcbiAgICBAaW5jbHVkZSByaXBwbGUtdGhlbWUudGhlbWUoJHRoZW1lKTtcbiAgICBAaW5jbHVkZSBvcHRpb24tdGhlbWUudGhlbWUoJHRoZW1lKTtcbiAgICBAaW5jbHVkZSBvcHRncm91cC10aGVtZS50aGVtZSgkdGhlbWUpO1xuICAgIEBpbmNsdWRlIHBzZXVkby1jaGVja2JveC10aGVtZS50aGVtZSgkdGhlbWUpO1xuXG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWF0aCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAndmFyaWFibGVzJztcblxuXG4vLyBBIGNvbGxlY3Rpb24gb2YgbWl4aW5zIGFuZCBDU1MgY2xhc3NlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IGVsZXZhdGlvbiB0byBhIG1hdGVyaWFsXG4vLyBlbGVtZW50LlxuLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9lbnZpcm9ubWVudC9lbGV2YXRpb24uaHRtbFxuLy8gRXhhbXBsZXM6XG4vL1xuLy9cbi8vIC5tYXQtZm9vIHtcbi8vICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oMik7XG4vL1xuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oOCk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyA8ZGl2IGlkPVwiZXh0ZXJuYWwtY2FyZFwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16MlwiPjxwPlNvbWUgY29udGVudDwvcD48L2Rpdj5cbi8vXG4vLyBGb3IgYW4gZXhwbGFuYXRpb24gb2YgdGhlIGRlc2lnbiBiZWhpbmQgaG93IGVsZXZhdGlvbiBpcyBpbXBsZW1lbnRlZCwgc2VlIHRoZSBkZXNpZ24gZG9jIGF0XG4vLyBodHRwczovL2dvby5nbC9LcTBrOVouXG5cbi8vIENvbG9ycyBmb3IgdW1icmEsIHBlbnVtYnJhLCBhbmQgYW1iaWVudCBzaGFkb3dzLiBBcyBkZXNjcmliZWQgaW4gdGhlIGRlc2lnbiBkb2MsIGVhY2ggZWxldmF0aW9uXG4vLyBsZXZlbCBpcyBjcmVhdGVkIHVzaW5nIGEgc2V0IG9mIDMgc2hhZG93IHZhbHVlcywgb25lIGZvciB1bWJyYSAodGhlIHNoYWRvdyByZXByZXNlbnRpbmcgdGhlXG4vLyBzcGFjZSBjb21wbGV0ZWx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCByZWxhdGl2ZSB0byBpdHMgbGlnaHQgc291cmNlKSwgb25lIGZvciBwZW51bWJyYSAodGhlXG4vLyBzcGFjZSBwYXJ0aWFsbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0KSwgYW5kIG9uZSBmb3IgYW1iaWVudCAodGhlIHNwYWNlIHdoaWNoIGNvbnRhaW5zIHRoZSBvYmplY3Rcbi8vIGl0c2VsZikuIEZvciBhIGZ1cnRoZXIgZXhwbGFuYXRpb24gb2YgdGhlc2UgdGVybXMgYW5kIHRoZWlyIG1lYW5pbmdzLCBzZWVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VtYnJhLF9wZW51bWJyYV9hbmRfYW50dW1icmEuXG5cbi8vIE1hcHMgZm9yIHRoZSBkaWZmZXJlbnQgc2hhZG93IHNldHMgYW5kIHRoZWlyIHZhbHVlcyB3aXRoaW4gZWFjaCB6LXNwYWNlLiBUaGVzZSB2YWx1ZXMgd2VyZVxuLy8gY3JlYXRlZCBieSB0YWtpbmcgYSBmZXcgcmVmZXJlbmNlIHNoYWRvdyBzZXRzIGNyZWF0ZWQgYnkgR29vZ2xlJ3MgRGVzaWduZXJzIGFuZCBpbnRlcnBvbGF0aW5nXG4vLyBhbGwgb2YgdGhlIHZhbHVlcyBiZXR3ZWVuIHRoZW0uXG5cbkBmdW5jdGlvbiBfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAycHggMXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAzcHggMXB4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAzcHggM3B4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAycHggNHB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAzcHggNXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAzcHggNXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCA0cHggNXB4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCA1cHggNXB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCA1cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNnB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDZweCA3cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDdweCA5cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA4cHggOXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggOHB4IDEwcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA4cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDlweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggOXB4IDEycHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCAxMHB4IDEzcHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAxMHB4IDEzcHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAxMHB4IDE0cHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCAxMXB4IDE0cHggLTdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAxMXB4IDE1cHggLTdweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZihtZXRhLnR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAxcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMnB4IDJweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAzcHggNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDRweCA1cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggNXB4IDhweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCA2cHggMTBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCA3cHggMTBweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCA4cHggMTBweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCA5cHggMTJweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggMTBweCAxNHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCAxMXB4IDE1cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDEycHggMTdweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggMTNweCAxOXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCAxNHB4IDIxcHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDE1cHggMjJweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggMTZweCAyNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCAxN3B4IDI2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDE4cHggMjhweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggMTlweCAyOXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCAyMHB4IDMxcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDIxcHggMzNweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMjJweCAzNXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCAyM3B4IDM2cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDI0cHggMzhweCAzcHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZihtZXRhLnR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAzcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMXB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAxcHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDFweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDFweCAxNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDFweCAxOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDJweCAxNnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDNweCAxNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDNweCAxNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA0cHggMThweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNHB4IDIwcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDVweCAyMnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA1cHggMjRweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggNXB4IDI2cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDZweCAyOHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA2cHggMzBweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggNnB4IDMycHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDdweCAzNHB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA3cHggMzZweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggOHB4IDM4cHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDhweCA0MHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCA4cHggNDJweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggOXB4IDQ0cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDlweCA0NnB4IDhweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG4vLyBUaGUgZGVmYXVsdCBkdXJhdGlvbiB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJHRyYW5zaXRpb24tZHVyYXRpb246IDI4MG1zICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBlYXNpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyaWFibGVzLiRmYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjtcblxuLy8gVGhlIGRlZmF1bHQgY29sb3IgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJGNvbG9yOiBibGFjayAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgb3BhY2l0eSBzY2FsaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRvcGFjaXR5OiAxICFkZWZhdWx0O1xuXG4vLyBQcmVmaXggZm9yIGVsZXZhdGlvbi1yZWxhdGVkIHNlbGVjdG9ycy5cbiRwcmVmaXg6ICdtYXQtZWxldmF0aW9uLXonO1xuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyB0byBhbiBlbGVtZW50IHRvIGdpdmUgaXQgdGhlIGVsZXZhdGlvbiBzcGVjaWZpZWQgYnkgJHpWYWx1ZS5cbi8vIFRoZSAkelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNC5cbkBtaXhpbiBlbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yOiAkY29sb3IsICRvcGFjaXR5OiAkb3BhY2l0eSkge1xuICBAaWYgbWV0YS50eXBlLW9mKCR6VmFsdWUpICE9IG51bWJlciBvciBub3QgbWF0aC5pcy11bml0bGVzcygkelZhbHVlKSB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYSB1bml0bGVzcyBudW1iZXInO1xuICB9XG4gIEBpZiAkelZhbHVlIDwgMCBvciAkelZhbHVlID4gMjQge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQnO1xuICB9XG5cbiAgYm94LXNoYWRvdzogI3ttYXAuZ2V0KF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLmdldChfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC5nZXQoX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9O1xufVxuXG4vLyBBcHBsaWVzIHRoZSBlbGV2YXRpb24gdG8gYW4gZWxlbWVudCBpbiBhIG1hbm5lciB0aGF0IGFsbG93c1xuLy8gY29uc3VtZXJzIHRvIG92ZXJyaWRlIGl0IHZpYSB0aGUgTWF0ZXJpYWwgZWxldmF0aW9uIGNsYXNzZXMuXG5AbWl4aW4gb3ZlcnJpZGFibGUtZWxldmF0aW9uKFxuICAgICR6VmFsdWUsXG4gICAgJGNvbG9yOiAkY29sb3IsXG4gICAgJG9wYWNpdHk6ICRvcGFjaXR5KSB7XG4gICY6bm90KFtjbGFzcyo9JyN7JHByZWZpeH0nXSkge1xuICAgIEBpbmNsdWRlIGVsZXZhdGlvbigkelZhbHVlLCAkY29sb3IsICRvcGFjaXR5KTtcbiAgfVxufVxuXG4vLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIGZvciBhIHRyYW5zaXRpb24gcHJvcGVydHkgZm9yIGVsZXZhdGlvbi5cbi8vIENhbGxpbmcgdGhpcyBmdW5jdGlvbiBkaXJlY3RseSBpcyB1c2VmdWwgaW4gc2l0dWF0aW9ucyB3aGVyZSBhIGNvbXBvbmVudCBuZWVkcyB0byB0cmFuc2l0aW9uXG4vLyBtb3JlIHRoYW4gb25lIHByb3BlcnR5LlxuLy9cbi8vIC5mb28ge1xuLy8gICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoKSwgb3BhY2l0eSAxMDBtcyBlYXNlO1xuLy8gfVxuQGZ1bmN0aW9uIHByaXZhdGUtdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZShcbiAgICAkZHVyYXRpb246ICR0cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICBAcmV0dXJuIGJveC1zaGFkb3cgI3skZHVyYXRpb259ICN7JGVhc2luZ307XG59XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIG5lZWRlZCB0byBoYXZlIGFuIGVsZW1lbnQgdHJhbnNpdGlvbiBiZXR3ZWVuIGVsZXZhdGlvbnMuXG4vLyBUaGlzIG1peGluIHNob3VsZCBiZSBhcHBsaWVkIHRvIGVsZW1lbnRzIHdob3NlIGVsZXZhdGlvbiB2YWx1ZXMgd2lsbCBjaGFuZ2UgZGVwZW5kaW5nIG9uIHRoZWlyXG4vLyBjb250ZXh0IChlLmcuIHdoZW4gYWN0aXZlIG9yIGRpc2FibGVkKS5cbi8vXG4vLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBCb3RoIHRoaXMgbWl4aW4gYW5kIHRoZSBhYm92ZSBmdW5jdGlvbiB1c2UgZGVmYXVsdCBwYXJhbWV0ZXJzIHNvIHRoZXkgY2FuXG4vLyBiZSB1c2VkIGluIHRoZSBzYW1lIHdheSBieSBjbGllbnRzLlxuQG1peGluIGVsZXZhdGlvbi10cmFuc2l0aW9uKFxuICAgICRkdXJhdGlvbjogJHRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIHRyYW5zaXRpb246IHByaXZhdGUtdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgkZHVyYXRpb24sICRlYXNpbmcpO1xufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9wcml2YXRlJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIFNlbGVjdGVkIG9wdGlvbnMgaW4gYXV0b2NvbXBsZXRlcyBzaG91bGQgbm90IGJlIGdyYXksIGJ1dCB3ZVxuICAgIC8vIG9ubHkgd2FudCB0byBvdmVycmlkZSB0aGUgYmFja2dyb3VuZCBmb3Igc2VsZWN0ZWQgb3B0aW9ucyBpZlxuICAgIC8vIHRoZXkgYXJlICpub3QqIGluIGhvdmVyIG9yIGZvY3VzIHN0YXRlLiBUaGlzIGNoYW5nZSBoYXMgdG8gYmVcbiAgICAvLyBtYWRlIGhlcmUgYmVjYXVzZSBiYXNlIG9wdGlvbiBzdHlsZXMgYXJlIHNoYXJlZCBiZXR3ZWVuIHRoZVxuICAgIC8vIGF1dG9jb21wbGV0ZSBhbmQgdGhlIHNlbGVjdC5cbiAgICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKSB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGNhcmQpO1xuXG4gICAgICAmOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1hdXRvY29tcGxldGUnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gVGhpcyBjb250YWlucyBhbGwgb2YgdGhlIHN0eWxlcyBmb3IgdGhlIGJhZGdlXG4vLyByYXRoZXIgdGhhbiBqdXN0IHRoZSBjb2xvci90aGVtZSBiZWNhdXNlIG9mXG4vLyBubyBzdHlsZSBzaGVldCBzdXBwb3J0IGZvciBkaXJlY3RpdmVzLlxuQHVzZSAnc2Fzczpjb2xvcic7XG5AdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuQHVzZSAnLi4vLi4vY2RrL2ExMXknO1xuXG4kZm9udC1zaXplOiAxMnB4O1xuJGZvbnQtd2VpZ2h0OiA2MDA7XG4kZGVmYXVsdC1zaXplOiAyMnB4ICFkZWZhdWx0O1xuJHNtYWxsLXNpemU6ICRkZWZhdWx0LXNpemUgLSA2O1xuJGxhcmdlLXNpemU6ICRkZWZhdWx0LXNpemUgKyA2O1xuXG4vLyBNaXhpbiBmb3IgYnVpbGRpbmcgb2Zmc2V0IGdpdmVuIGRpZmZlcmVudCBzaXplc1xuQG1peGluIF9iYWRnZS1zaXplKCRzaXplKSB7XG4gIC8vIFRoaXMgbWl4aW4gaXNuJ3QgdXNlZCBpbiB0aGUgY29udGV4dCBvZiBhIHRoZW1lIHNvIHdlIGNhbiBkaXNhYmxlIHRoZSBhbXBlcnNhbmQgY2hlY2suXG4gIC8vIHN0eWxlbGludC1kaXNhYmxlIG1hdGVyaWFsL25vLWFtcGVyc2FuZC1iZXlvbmQtc2VsZWN0b3Itc3RhcnRcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICB3aWR0aDogJHNpemU7XG4gICAgaGVpZ2h0OiAkc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJHNpemU7XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hYm92ZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHRvcDogLSRzaXplIC8gMjtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1iZWxvdyB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJvdHRvbTogLSRzaXplIC8gMjtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2Utb3ZlcmxhcCB7XG4gICAgJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBzdHlsZWxpbnQtZW5hYmxlXG59XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSk7XG5cbiAgICBAaW5jbHVkZSBhMTF5LmhpZ2gtY29udHJhc3QoYWN0aXZlLCBvZmYpIHtcbiAgICAgIG91dGxpbmU6IHNvbGlkIDFweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1hY2NlbnQge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCk7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Utd2FybiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4sIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWF0LWJhZGdlLWhpZGRlbiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1kaXNhYmxlZCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICRhcHAtYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCAnYmFja2dyb3VuZCcpO1xuICAgICAgJGJhZGdlLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG5cbiAgICAgIC8vIFRoZSBkaXNhYmxlZCBjb2xvciB1c3VhbGx5IGhhcyBzb21lIGtpbmQgb2Ygb3BhY2l0eSwgYnV0IGJlY2F1c2UgdGhlIGJhZGdlIGlzIG92ZXJsYXllZFxuICAgICAgLy8gb24gdG9wIG9mIHNvbWV0aGluZyBlbHNlLCBpdCB3b24ndCBsb29rIGdvb2QgaWYgaXQncyBvcGFxdWUuIElmIGl0IGlzIGEgY29sb3IgKnR5cGUqLFxuICAgICAgLy8gd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kIHVzaW5nXG4gICAgICAvLyB0aGUgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBiYWNrZ3JvdW5kIHRvIHB1dCBpbnRvIGZvcmVncm91bmQgd2hlblxuICAgICAgLy8gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuXG4gICAgICBAaWYgKG1ldGEudHlwZS1vZigkYmFkZ2UtY29sb3IpID09IGNvbG9yIGFuZCBtZXRhLnR5cGUtb2YoJGFwcC1iYWNrZ3JvdW5kKSA9PSBjb2xvcikge1xuICAgICAgICAkYmFkZ2Utb3BhY2l0eTogb3BhY2l0eSgkYmFkZ2UtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvci5taXgoJGFwcC1iYWNrZ3JvdW5kLCByZ2JhKCRiYWRnZS1jb2xvciwgMSksICgxIC0gJGJhZGdlLW9wYWNpdHkpICogMTAwJSk7XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRiYWRnZS1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAubmctYW5pbWF0ZS1kaXNhYmxlZCAubWF0LWJhZGdlLWNvbnRlbnQsXG4gIC5tYXQtYmFkZ2UtY29udGVudC5fbWF0LWFuaW1hdGlvbi1ub29wYWJsZSB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIC8vIFRoZSBhY3RpdmUgY2xhc3MgaXMgYWRkZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgYWRkZWRcbiAgLy8gc28gaXQgY2FuIGFuaW1hdGUgc2NhbGUgdG8gZGVmYXVsdFxuICAubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZSB7XG4gICAgLy8gU2NhbGUgdG8gYG5vbmVgIGluc3RlYWQgb2YgYDFgIHRvIGF2b2lkIGJsdXJyeSB0ZXh0IGluIHNvbWUgYnJvd3NlcnMuXG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCB7XG4gICAgQGluY2x1ZGUgX2JhZGdlLXNpemUoJHNtYWxsLXNpemUpO1xuICB9XG4gIC5tYXQtYmFkZ2UtbWVkaXVtIHtcbiAgICBAaW5jbHVkZSBfYmFkZ2Utc2l6ZSgkZGVmYXVsdC1zaXplKTtcbiAgfVxuICAubWF0LWJhZGdlLWxhcmdlIHtcbiAgICBAaW5jbHVkZSBfYmFkZ2Utc2l6ZSgkbGFyZ2Utc2l6ZSk7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBmb250LWZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAvLyBTZXQgdGhlIGZvbnQgc2l6ZSB0byA3NSUgb2YgdGhlIG9yaWdpbmFsLlxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqIDAuNzU7XG4gIH1cblxuICAubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplICogMjtcbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWJhZGdlJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vLyBFbWl0cyBhIENTUyBjbGFzcywgYC5jZGstdmlzdWFsbHktaGlkZGVuYC4gVGhpcyBjbGFzcyBjYW4gYmUgYXBwbGllZCB0byBhbiBlbGVtZW50XG4vLy8gdG8gbWFrZSB0aGF0IGVsZW1lbnQgdmlzdWFsbHkgaGlkZGVuIHdoaWxlIHJlbWFpbmluZyBhdmFpbGFibGUgdG8gYXNzaXRpdmUgdGVjaG5vbG9neS5cbkBtaXhpbiBhMTF5LXZpc3VhbGx5LWhpZGRlbigpIHtcbiAgLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICAgIGJvcmRlcjogMDtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7XG5cbiAgICAvLyBUaGlzIHdvcmtzIGFyb3VuZCBhIENocm9tZSBidWcgdGhhdCBjYW4gY2F1c2UgdGhlIHRhYiB0byBjcmFzaCB3aGVuIGxhcmdlIGFtb3VudHMgb2ZcbiAgICAvLyBub24tRW5nbGlzaCB0ZXh0IGdldCB3cmFwcGVkOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMjAxNDQ0XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgIC8vIEF2b2lkIGJyb3dzZXJzIHJlbmRlcmluZyB0aGUgZm9jdXMgcmluZyBpbiBzb21lIGNhc2VzLlxuICAgIG91dGxpbmU6IDA7XG5cbiAgICAvLyBBdm9pZCBzb21lIGNhc2VzIHdoZXJlIHRoZSBicm93c2VyIHdpbGwgc3RpbGwgcmVuZGVyIHRoZSBuYXRpdmUgY29udHJvbHMgKHNlZSAjOTA0OSkuXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxufVxuXG4vLy8gQGRlcHJlY2F0ZWQgVXNlIGBhMTF5LXZpc3VhbGx5LWhpZGRlbmAuXG5AbWl4aW4gYTExeSgpIHtcbiAgQGluY2x1ZGUgYTExeS12aXN1YWxseS1oaWRkZW47XG59XG5cbi8vLyBFbWl0cyB0aGUgbWl4aW4ncyBjb250ZW50IG5lc3RlZCB1bmRlciBgJHNlbGVjdG9yLWNvbnRleHRgIGlmIGAkc2VsZWN0b3ItY29udGV4dGBcbi8vLyBpcyBub24tZW1wdHkuXG4vLy8gQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yLWNvbnRleHQgVGhlIHNlbGVjdG9yIHVuZGVyIHdoaWNoIHRvIG5lc3QgdGhlIG1peGluJ3MgY29udGVudC5cbkBtaXhpbiBfb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgQGlmICgkc2VsZWN0b3ItY29udGV4dCA9PSAnJykge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBlbHNlIHtcbiAgICAjeyRzZWxlY3Rvci1jb250ZXh0fSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8vIEFwcGxpZXMgc3R5bGVzIGZvciB1c2VycyBpbiBoaWdoIGNvbnRyYXN0IG1vZGUuIE5vdGUgdGhhdCB0aGlzIG9ubHkgYXBwbGllc1xuLy8vIHRvIE1pY3Jvc29mdCBicm93c2Vycy4gQ2hyb21lIGNhbiBiZSBpbmNsdWRlZCBieSBjaGVja2luZyBmb3IgdGhlIGBodG1sW2hjXWBcbi8vLyBhdHRyaWJ1dGUsIGhvd2V2ZXIgQ2hyb21lIGhhbmRsZXMgaGlnaCBjb250cmFzdCBkaWZmZXJlbnRseS5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSB0YXJnZXQgVHlwZSBvZiBoaWdoIGNvbnRyYXN0IHNldHRpbmcgdG8gdGFyZ2V0LiBEZWZhdWx0cyB0byBgYWN0aXZlYCwgY2FuIGJlXG4vLy8gICAgIGB3aGl0ZS1vbi1ibGFja2Agb3IgYGJsYWNrLW9uLXdoaXRlYC5cbi8vLyBAcGFyYW0ge1N0cmluZ30gZW5jYXBzdWxhdGlvbiBXaGV0aGVyIHRvIGVtaXQgc3R5bGVzIGZvciB2aWV3IGVuY2Fwc3VsYXRpb24uIFZhbHVlcyBhcmU6XG4vLy8gICAgICogYG9uYCAtIHdvcmtzIGZvciBgRW11bGF0ZWRgLCBgTmF0aXZlYCwgYW5kIGBTaGFkb3dEb21gXG4vLy8gICAgICogYG9mZmAgLSB3b3JrcyBmb3IgYE5vbmVgXG4vLy8gICAgICogYGFueWAgLSB3b3JrcyBmb3IgYWxsIGVuY2Fwc3VsYXRpb24gbW9kZXMgYnkgZW1pdHRpbmcgdGhlIENTUyB0d2ljZSAoZGVmYXVsdCkuXG5AbWl4aW4gaGlnaC1jb250cmFzdCgkdGFyZ2V0OiBhY3RpdmUsICRlbmNhcHN1bGF0aW9uOiAnYW55Jykge1xuICBAaWYgKCR0YXJnZXQgIT0gJ2FjdGl2ZScgYW5kICR0YXJnZXQgIT0gJ2JsYWNrLW9uLXdoaXRlJyBhbmQgJHRhcmdldCAhPSAnd2hpdGUtb24tYmxhY2snKSB7XG4gICAgQGVycm9yICdVbmtub3duIGNkay1oaWdoLWNvbnRyYXN0IHZhbHVlIFwiI3skdGFyZ2V0fVwiIHByb3ZpZGVkLiAnICtcbiAgICAgICAgICAgJ0FsbG93ZWQgdmFsdWVzIGFyZSBcImFjdGl2ZVwiLCBcImJsYWNrLW9uLXdoaXRlXCIsIGFuZCBcIndoaXRlLW9uLWJsYWNrXCInO1xuICB9XG5cbiAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb24nIGFuZCAkZW5jYXBzdWxhdGlvbiAhPSAnb2ZmJyBhbmQgJGVuY2Fwc3VsYXRpb24gIT0gJ2FueScpIHtcbiAgICBAZXJyb3IgJ1Vua25vd24gY2RrLWhpZ2gtY29udHJhc3QgZW5jYXBzdWxhdGlvbiBcIiN7JGVuY2Fwc3VsYXRpb259XCIgcHJvdmlkZWQuICcgK1xuICAgICAgICAgICAnQWxsb3dlZCB2YWx1ZXMgYXJlIFwib25cIiwgXCJvZmZcIiwgYW5kIFwiYW55XCInO1xuICB9XG5cbiAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRleHQgaGFzIG11bHRpcGxlIHBhcnRzLCBzdWNoIGFzIGAuc2VjdGlvbiwgLnJlZ2lvbmAsIGp1c3QgZG9pbmdcbiAgLy8gYC5jZGstaGlnaC1jb250cmFzdC14eHggI3smfWAgd2lsbCBvbmx5IGFwcGx5IHRoZSBwYXJlbnQgc2VsZWN0b3IgdG8gdGhlIGZpcnN0IHBhcnQgb2YgdGhlXG4gIC8vIGNvbnRleHQuIFdlIGFkZHJlc3MgdGhpcyBieSBuZXN0aW5nIHRoZSBzZWxlY3RvciBjb250ZXh0IHVuZGVyIC5jZGstaGlnaC1jb250cmFzdC5cbiAgQGF0LXJvb3Qge1xuICAgICRzZWxlY3Rvci1jb250ZXh0OiAjeyZ9O1xuXG4gICAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb24nKSB7XG4gICAgICAvLyBOb3RlIHRoYXQgaWYgdGhpcyBzZWxlY3RvciBpcyB1cGRhdGVkLCB0aGUgc2FtZSBjaGFuZ2UgaGFzIHRvIGJlIG1hZGUgaW5zaWRlXG4gICAgICAvLyBgX292ZXJsYXkuc2Nzc2Agd2hpY2ggY2FuJ3QgZGVwZW5kIG9uIHRoaXMgbWl4aW4gZHVlIHRvIHNvbWUgaW5mcmFzdHJ1Y3R1cmUgbGltaXRhdGlvbnMuXG4gICAgICAuY2RrLWhpZ2gtY29udHJhc3QtI3skdGFyZ2V0fSB7XG4gICAgICAgIEBpbmNsdWRlIF9vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb2ZmJykge1xuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LSN7JHRhcmdldH0gOmhvc3Qge1xuICAgICAgICBAaW5jbHVkZSBfb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9wcml2YXRlJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtZWxldmF0aW9uKDE2LCAkY29uZmlnKTtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5LXV0aWxzLnR5cG9ncmFwaHktbGV2ZWwoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWJvdHRvbS1zaGVldCcpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9wcml2YXRlJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuJF9yaXBwbGUtb3BhY2l0eTogMC4xO1xuXG4vLyBBcHBsaWVzIGEgZm9jdXMgc3R5bGUgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX2ZvY3VzLW92ZXJsYXktY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuXG4gICYubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5KTtcbiAgfVxuXG4gICYubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCk7XG4gIH1cblxuICAmLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2Fybik7XG4gIH1cblxuICAmLm1hdC1idXR0b24tZGlzYWJsZWQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuLy8gQXBwbGllcyB0aGUgYmFja2dyb3VuZCBjb2xvciBmb3IgYSByaXBwbGUuIElmIHRoZSB2YWx1ZSBwcm92aWRlZCBpcyBub3QgYSBTYXNzIGNvbG9yLFxuLy8gd2UgYXNzdW1lIHRoYXQgd2UndmUgYmVlbiBnaXZlbiBhIENTUyB2YXJpYWJsZS4gU2luY2Ugd2UgY2FuJ3QgcGVyZm9ybSBhbHBoYS1ibGVuZGluZ1xuLy8gb24gYSBDU1MgdmFyaWFibGUsIHdlIGluc3RlYWQgYWRkIHRoZSBvcGFjaXR5IGRpcmVjdGx5IHRvIHRoZSByaXBwbGUgZWxlbWVudC5cbkBtaXhpbiBfcmlwcGxlLWJhY2tncm91bmQoJHBhbGV0dGUsICRodWUsICRvcGFjaXR5KSB7XG4gICRiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUsICRodWUsICRvcGFjaXR5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIEBpZiAobWV0YS50eXBlLW9mKCRiYWNrZ3JvdW5kLWNvbG9yKSAhPSBjb2xvcikge1xuICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICB9XG59XG5cbkBtaXhpbiBfcmlwcGxlLWNvbG9yKCR0aGVtZSwgJGh1ZSwgJG9wYWNpdHk6ICRfcmlwcGxlLW9wYWNpdHkpIHtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBAaW5jbHVkZSBfcmlwcGxlLWJhY2tncm91bmQoJHByaW1hcnksICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBAaW5jbHVkZSBfcmlwcGxlLWJhY2tncm91bmQoJGFjY2VudCwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBAaW5jbHVkZSBfcmlwcGxlLWJhY2tncm91bmQoJHdhcm4sICRodWUsICRvcGFjaXR5KTtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIGEgcHJvcGVydHkgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX3RoZW1lLXByb3BlcnR5KCR0aGVtZSwgJHByb3BlcnR5LCAkaHVlKSB7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICYubWF0LXByaW1hcnkge1xuICAgICN7JHByb3BlcnR5fTogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5LCAkaHVlKTtcbiAgfVxuICAmLm1hdC1hY2NlbnQge1xuICAgICN7JHByb3BlcnR5fTogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQsICRodWUpO1xuICB9XG4gICYubWF0LXdhcm4ge1xuICAgICN7JHByb3BlcnR5fTogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuLCAkaHVlKTtcbiAgfVxuXG4gICYubWF0LXByaW1hcnksICYubWF0LWFjY2VudCwgJi5tYXQtd2FybiwgJi5tYXQtYnV0dG9uLWRpc2FibGVkIHtcbiAgICAmLm1hdC1idXR0b24tZGlzYWJsZWQge1xuICAgICAgJHBhbGV0dGU6IGlmKCRwcm9wZXJ0eSA9PSAnY29sb3InLCAkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpO1xuICAgICAgI3skcHJvcGVydHl9OiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gICAgLy8gQnV0dG9ucyB3aXRob3V0IGEgYmFja2dyb3VuZCBjb2xvciBzaG91bGQgaW5oZXJpdCB0aGUgZm9udCBjb2xvci4gVGhpcyBpcyBuZWNlc3NhcnkgdG9cbiAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYnV0dG9uIGlzIHJlYWRhYmxlIG9uIGN1c3RvbSBiYWNrZ3JvdW5kIGNvbG9ycy4gSXQncyB3cm9uZyB0byBhbHdheXMgYXNzdW1lXG4gICAgLy8gdGhhdCB0aG9zZSBidXR0b25zIGFyZSBhbHdheXMgcGxhY2VkIGluc2lkZSBvZiBjb250YWluZXJzIHdpdGggdGhlIGRlZmF1bHQgYmFja2dyb3VuZFxuICAgIC8vIGNvbG9yIG9mIHRoZSB0aGVtZSAoZS5nLiB0aGVtZWQgdG9vbGJhcnMpLlxuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgQGluY2x1ZGUgX3RoZW1lLXByb3BlcnR5KCRjb25maWcsICdjb2xvcicsIHRleHQpO1xuICAgIEBpbmNsdWRlIF9mb2N1cy1vdmVybGF5LWNvbG9yKCRjb25maWcpO1xuXG4gICAgLy8gU2V0dXAgdGhlIHJpcHBsZSBjb2xvciB0byBiZSBiYXNlZCBvbiB0aGUgdGV4dCBjb2xvci4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHJpcHBsZXNcbiAgICAvLyBhcmUgbWF0Y2hpbmcgd2l0aCB0aGUgY3VycmVudCB0aGVtZSBwYWxldHRlIGFuZCBhcmUgaW4gY29udHJhc3QgdG8gdGhlIGJhY2tncm91bmQgY29sb3JcbiAgICAvLyAoZS5nIGluIHRoZW1lZCB0b29sYmFycykuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBvcGFjaXR5OiAkX3JpcHBsZS1vcGFjaXR5O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQ6IG1hcC5nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICB9XG5cbiAgLy8gTm90ZTogdGhpcyBuZWVkcyBhIGJpdCBleHRyYSBzcGVjaWZpY2l0eSwgYmVjYXVzZSB3ZSdyZSBub3QgZ3VhcmFudGVlZCB0aGUgaW5jbHVzaW9uXG4gIC8vIG9yZGVyIG9mIHRoZSB0aGVtZSBzdHlsZXMgYW5kIHRoZSBidXR0b24gcmVzZXQgbWF5IGVuZCB1cCByZXNldHRpbmcgdGhpcyBhcyB3ZWxsLlxuICAubWF0LXN0cm9rZWQtYnV0dG9uOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCkge1xuICAgIGJvcmRlci1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIC8vIERlZmF1bHQgZm9udCBhbmQgYmFja2dyb3VuZCBjb2xvciB3aGVuIG5vdCB1c2luZyBhbnkgY29sb3IgcGFsZXR0ZS5cbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIHJhaXNlZC1idXR0b24pO1xuXG4gICAgQGluY2x1ZGUgX3RoZW1lLXByb3BlcnR5KCRjb25maWcsICdjb2xvcicsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIEBpbmNsdWRlIF90aGVtZS1wcm9wZXJ0eSgkY29uZmlnLCAnYmFja2dyb3VuZC1jb2xvcicsIGRlZmF1bHQpO1xuICAgIEBpbmNsdWRlIF9yaXBwbGUtY29sb3IoJGNvbmZpZywgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXN0cm9rZWQtYnV0dG9uLCAubWF0LWZsYXQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDIsICRjb25maWcpO1xuXG4gICAgJjpub3QoLm1hdC1idXR0b24tZGlzYWJsZWQpOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDgsICRjb25maWcpO1xuICAgIH1cblxuICAgICYubWF0LWJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICRjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDYsICRjb25maWcpO1xuXG4gICAgJjpub3QoLm1hdC1idXR0b24tZGlzYWJsZWQpOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDEyLCAkY29uZmlnKTtcbiAgICB9XG5cbiAgICAmLm1hdC1idXR0b24tZGlzYWJsZWQge1xuICAgICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkY29uZmlnKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbixcbiAgLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogdHlwb2dyYXBoeS11dGlscy5mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWJ1dHRvbicpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuQHVzZSAnLi4vY29yZS9kZW5zaXR5L3ByaXZhdGUvY29tcGF0aWJpbGl0eSc7XG5AdXNlICcuL2J1dHRvbi10b2dnbGUtdmFyaWFibGVzJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRkaXZpZGVyLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1lbGV2YXRpb24oMiwgJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcblxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgZm9jdXNlZC1idXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGNhcmQpO1xuXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBmb2N1c2VkLWJ1dHRvbiwgMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG5cbiAgW2Rpcj0ncnRsJ10gLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1idXR0b24tdG9nZ2xlLXZlcnRpY2FsIHtcbiAgICAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgc2VsZWN0ZWQtYnV0dG9uKTtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAmLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZSk7XG5cbiAgICAmLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICB9XG5cbiAgICAmLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGZvbnQtZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cbkBtaXhpbiBkZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGRlbnNpdHktc2NhbGU6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkc3RhbmRhcmQtaGVpZ2h0OiBjb21wYXRpYmlsaXR5LnByaXZhdGUtZGVuc2l0eS1wcm9wLXZhbHVlKFxuICAgICAgYnV0dG9uLXRvZ2dsZS12YXJpYWJsZXMuJHN0YW5kYXJkLWRlbnNpdHktY29uZmlnLCAkZGVuc2l0eS1zY2FsZSwgaGVpZ2h0KTtcblxuICBAaW5jbHVkZSBjb21wYXRpYmlsaXR5LnByaXZhdGUtZGVuc2l0eS1sZWdhY3ktY29tcGF0aWJpbGl0eSgpIHtcbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XG4gICAgICBsaW5lLWhlaWdodDogJHN0YW5kYXJkLWhlaWdodDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWJ1dHRvbi10b2dnbGUnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBkZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtY2FyZCB7XG4gICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigxLCAkY29uZmlnKTtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gTmVlZHMgZXh0cmEgc3BlY2lmaWNpdHkgdG8gYmUgYWJsZSB0byBvdmVycmlkZSB0aGUgZWxldmF0aW9uIHNlbGVjdG9ycy5cbiAgICAmLm1hdC1jYXJkLWZsYXQge1xuICAgICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LWNhcmQge1xuICAgIGZvbnQtZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBoZWFkbGluZSk7XG4gICAgICB3ZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMuZm9udC13ZWlnaHQoJGNvbmZpZywgdGl0bGUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIHRpdGxlKTtcbiAgfVxuXG4gIC5tYXQtY2FyZC1zdWJ0aXRsZSxcbiAgLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWNhcmQnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC5nZXQoJGNvbmZpZywgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cblxuICAvLyBUaGUgY29sb3Igb2YgdGhlIGNoZWNrYm94J3MgY2hlY2ttYXJrIC8gbWl4ZWRtYXJrLlxuICAkY2hlY2tib3gtbWFyay1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG5cbiAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgYm9yZGVyLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrIHtcbiAgICBmaWxsOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGgge1xuICAgIC8vICFpbXBvcnRhbnQgaXMgbmVlZGVkIGhlcmUgYmVjYXVzZSBhIHN0cm9rZSBtdXN0IGJlIHNldCBhcyBhblxuICAgIC8vIGF0dHJpYnV0ZSBvbiB0aGUgU1ZHIGluIG9yZGVyIGZvciBsaW5lIGFuaW1hdGlvbiB0byB3b3JrIHByb3Blcmx5LlxuICAgIHN0cm9rZTogJGNoZWNrYm94LW1hcmstY29sb3IgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtbWl4ZWRtYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSwgLm1hdC1jaGVja2JveC1jaGVja2VkIHtcbiAgICAmLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgJi5tYXQtY2hlY2tib3gtY2hlY2tlZCxcbiAgICAmLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAgIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWNoZWNrYm94LWNoZWNrZWQpIHtcbiAgICAgIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgICAgICBib3JkZXItY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAvLyBTd2l0Y2ggdGhpcyB0byBhIHNvbGlkIGNvbG9yIHNpbmNlIHdlJ3JlIHVzaW5nIGBvcGFjaXR5YFxuICAvLyB0byBjb250cm9sIGhvdyBvcGFxdWUgdGhlIHJpcHBsZSBzaG91bGQgYmUuXG4gIC5tYXQtY2hlY2tib3ggLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLmdldChtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpLCBiYXNlKTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCksXG4gIC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKSB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LWNoZWNrYm94IHtcbiAgICBmb250LWZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC8vIFRPRE8oa2FyYSk6IFJlbW92ZSB0aGlzIHN0eWxlIHdoZW4gZml4aW5nIHZlcnRpY2FsIGJhc2VsaW5lXG4gIC5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1jaGVja2JveCcpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9wcml2YXRlJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuJGNoaXAtcmVtb3ZlLWZvbnQtc2l6ZTogMThweDtcblxuQG1peGluIF9lbGVtZW50LWNvbG9yKCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgY29sb3I6ICRmb3JlZ3JvdW5kO1xuXG4gIC5tYXQtY2hpcC1yZW1vdmUge1xuICAgIGNvbG9yOiAkZm9yZWdyb3VuZDtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbn1cblxuXG4vLyBBcHBsaWVzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBhIHJpcHBsZSBlbGVtZW50LlxuLy8gSWYgdGhlIGNvbG9yIHZhbHVlIHByb3ZpZGVkIGlzIG5vdCBhIFNhc3MgY29sb3IsXG4vLyB3ZSBhc3N1bWUgdGhhdCB3ZSd2ZSBiZWVuIGdpdmVuIGEgQ1NTIHZhcmlhYmxlLlxuLy8gU2luY2Ugd2UgY2FuJ3QgcGVyZm9ybSBhbHBoYS1ibGVuZGluZyBvbiBhIENTUyB2YXJpYWJsZSxcbi8vIHdlIGluc3RlYWQgYWRkIHRoZSBvcGFjaXR5IGRpcmVjdGx5IHRvIHRoZSByaXBwbGUgZWxlbWVudC5cbkBtaXhpbiBfcmlwcGxlLWJhY2tncm91bmQoJHBhbGV0dGUsICRkZWZhdWx0LWNvbnRyYXN0LCAkb3BhY2l0eSkge1xuICAkYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlLCAkZGVmYXVsdC1jb250cmFzdCwgJG9wYWNpdHkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgQGlmIChtZXRhLnR5cGUtb2YoJGJhY2tncm91bmQtY29sb3IpICE9IGNvbG9yKSB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIH1cbn1cblxuQG1peGluIF9wYWxldHRlLXN0eWxlcygkcGFsZXR0ZSkge1xuICBAaW5jbHVkZSBfZWxlbWVudC1jb2xvcih0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpLFxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSkpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIEBpbmNsdWRlIF9yaXBwbGUtYmFja2dyb3VuZCgkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCwgMC4xKTtcbiAgfVxufVxuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAuZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gICR1bnNlbGVjdGVkLWJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgdW5zZWxlY3RlZC1jaGlwKTtcbiAgJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAge1xuICAgIEBpbmNsdWRlIF9lbGVtZW50LWNvbG9yKCR1bnNlbGVjdGVkLWZvcmVncm91bmQsICR1bnNlbGVjdGVkLWJhY2tncm91bmQpO1xuXG4gICAgJjpub3QoLm1hdC1jaGlwLWRpc2FibGVkKSB7XG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1lbGV2YXRpb24oMywgJGNvbmZpZyk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjU0O1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWNoaXAtZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hcC5nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZCB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfcGFsZXR0ZS1zdHlsZXMoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX3BhbGV0dGUtc3R5bGVzKCR3YXJuKTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX3BhbGV0dGUtc3R5bGVzKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LWNoaXAge1xuICAgIGZvbnQtc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICBmb250LXdlaWdodDogdHlwb2dyYXBoeS11dGlscy5mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuXG4gICAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb24sXG4gICAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRjaGlwLXJlbW92ZS1mb250LXNpemU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtY2hpcHMnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10YWJsZSB7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10YWJsZSB0aGVhZCwgLm1hdC10YWJsZSB0Ym9keSwgLm1hdC10YWJsZSB0Zm9vdCxcbiAgbWF0LWhlYWRlci1yb3csIG1hdC1yb3csIG1hdC1mb290ZXItcm93LFxuICBbbWF0LWhlYWRlci1yb3ddLCBbbWF0LXJvd10sIFttYXQtZm9vdGVyLXJvd10sXG4gIC5tYXQtdGFibGUtc3RpY2t5IHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICB9XG5cbiAgbWF0LXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1mb290ZXItcm93LFxuICB0aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtdGFibGUge1xuICAgIGZvbnQtZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICBmb250LXdlaWdodDogdHlwb2dyYXBoeS11dGlscy5mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBmb250LXNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC10YWJsZScpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOmNvbG9yJztcbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWF0aCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9wcml2YXRlJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuXG4kc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aDogMXB4O1xuJHNlbGVjdGVkLWZhZGUtYW1vdW50OiAwLjY7XG4kcmFuZ2UtZmFkZS1hbW91bnQ6IDAuMjtcbiR0b2RheS1mYWRlLWFtb3VudDogMC4yO1xuJGNhbGVuZGFyLWJvZHktZm9udC1zaXplOiAxM3B4ICFkZWZhdWx0O1xuJGNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplOiAxMXB4ICFkZWZhdWx0O1xuXG5AbWl4aW4gX2NvbG9yKCRwYWxldHRlKSB7XG4gIEBpbmNsdWRlIGRhdGUtcmFuZ2UtY29sb3JzKFxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSwgZGVmYXVsdCwgJHJhbmdlLWZhZGUtYW1vdW50KSk7XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUpO1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICAkYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlKTtcblxuICAgIEBpZiAobWV0YS50eXBlLW9mKCRiYWNrZ3JvdW5kKSA9PSBjb2xvcikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IuYWRqdXN0KCRiYWNrZ3JvdW5kLCAkYWxwaGE6IC0kc2VsZWN0ZWQtZmFkZS1hbW91bnQpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBjb3VsZG4ndCByZXNvbHZlIHRvIGJhY2tncm91bmQgdG8gYSBjb2xvciAoZS5nLiBpdCdzIGEgQ1NTIHZhcmlhYmxlKSxcbiAgICAgIC8vIGZhbGwgYmFjayB0byBmYWRpbmcgdGhlIGNvbnRlbnQgb3V0IHZpYSBgb3BhY2l0eWAuXG4gICAgICBvcGFjaXR5OiAkdG9kYXktZmFkZS1hbW91bnQ7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aFxuICAgICAgICAgICAgICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3ZlcixcbiAgLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUsXG4gIC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUge1xuICAgICYgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50IHtcbiAgICAgIEBpbmNsdWRlIF91bnNlbGVjdGVkLWNlbGwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUsIDAuMyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFV0aWxpdHkgbWl4aW4gdG8gdGFyZ2V0IGNlbGxzIHRoYXQgYXJlbid0IHNlbGVjdGVkLiBVc2VkIHRvIG1ha2Ugc2VsZWN0b3IgZWFzaWVyIHRvIGZvbGxvdy5cbkBtaXhpbiBfdW5zZWxlY3RlZC1jZWxsIHtcbiAgJjpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRkaXNhYmxlZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcblxuICAubWF0LWNhbGVuZGFyLWFycm93IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGljb24pO1xuICB9XG5cbiAgLy8gVGhlIHByZXYvbmV4dCBidXR0b25zIG5lZWQgYSBiaXQgbW9yZSBzcGVjaWZpY2l0eSB0b1xuICAvLyBhdm9pZCBiZWluZyBvdmVyd3JpdHRlbiBieSB0aGUgLm1hdC1pY29uLWJ1dHRvbi5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSxcbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbixcbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b24ge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGljb24pO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudCxcbiAgLm1hdC1kYXRlLXJhbmdlLWlucHV0LXNlcGFyYXRvciB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIF91bnNlbGVjdGVkLWNlbGwge1xuICAgICAgY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1kYXRlLXJhbmdlLWlucHV0LXNlcGFyYXRvciB7XG4gICAgY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1pbi1wcmV2aWV3IHtcbiAgICAkZGl2aWRlci1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAgIEBpZiBtZXRhLnR5cGUtb2YoJGRpdmlkZXItY29sb3IpID09IGNvbG9yIHtcbiAgICAgIC8vIFRoZSBkaXZpZGVyIGNvbG9yIGlzIHNldCB1bmRlciB0aGUgYXNzdW1wdGlvbiB0aGF0IGl0J2xsIGJlIHVzZWRcbiAgICAgIC8vIGZvciBhIHNvbGlkIGJvcmRlciwgYnV0IGJlY2F1c2Ugd2UncmUgdXNpbmcgYSBkYXNoZWQgYm9yZGVyIGZvciB0aGVcbiAgICAgIC8vIHByZXZpZXcgcmFuZ2UsIHdlIG5lZWQgdG8gYnVtcCBpdHMgb3BhY2l0eSB0byBlbnN1cmUgdGhhdCBpdCdzIHZpc2libGUuXG4gICAgICBjb2xvcjogcmdiYSgkZGl2aWRlci1jb2xvciwgbWF0aC5taW4ob3BhY2l0eSgkZGl2aWRlci1jb2xvcikgKiAyLCAxKSk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIGNvbG9yOiAkZGl2aWRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkge1xuICAgIEBpbmNsdWRlIF91bnNlbGVjdGVkLWNlbGwge1xuICAgICAgLy8gTm90ZTogdGhvdWdoIGl0J3Mgbm90IHRleHQsIHRoZSBib3JkZXIgaXMgYSBoaW50IGFib3V0IHRoZSBmYWN0IHRoYXQgdGhpcyBpcyB0b2RheSdzIGRhdGUsXG4gICAgICAvLyBzbyB3ZSB1c2UgdGhlIGhpbnQgY29sb3IuXG4gICAgICBib3JkZXItY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkge1xuICAgIEBpbmNsdWRlIF91bnNlbGVjdGVkLWNlbGwge1xuICAgICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICAgIEBpZiAobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IpIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBjb2xvci5hZGp1c3QoJGNvbG9yLCAkYWxwaGE6IC0kdG9kYXktZmFkZS1hbW91bnQpO1xuICAgICAgfVxuICAgICAgQGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgY29sb3IgZGlkbid0IHJlc29sdmUgdG8gYSBjb2xvciB2YWx1ZSwgYnV0IHNvbWV0aGluZyBsaWtlIGEgQ1NTIHZhcmlhYmxlLCB3ZSBjYW4ndFxuICAgICAgICAvLyBmYWRlIGl0IG91dCBzbyB3ZSBmYWxsIGJhY2sgdG8gcmVkdWNpbmcgdGhlIGVsZW1lbnQgb3BhY2l0eS4gTm90ZSB0aGF0IHdlIGRvbid0IHVzZSB0aGVcbiAgICAgICAgLy8gJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50LCBiZWNhdXNlIGhpbnQgdGV4dCB1c3VhbGx5IGhhcyBzb21lIG9wYWNpdHkgYXBwbGllZFxuICAgICAgICAvLyB0byBpdCBhbHJlYWR5IGFuZCB3ZSBkb24ndCB3YW50IHRoZW0gdG8gc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIuXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBfY29sb3IobWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KSk7XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1lbGV2YXRpb24oNCwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfY29sb3IobWFwLmdldCgkY29uZmlnLCBhY2NlbnQpKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9jb2xvcihtYXAuZ2V0KCRjb25maWcsIHdhcm4pKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudC10b3VjaCB7XG4gICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLWVsZXZhdGlvbigyNCwgJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZSB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZShtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpLCB0ZXh0KTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KSwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKG1hcC5nZXQoJGNvbmZpZywgd2FybiksIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1pbm5lcltkaXNhYmxlZF0ge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtY2FsZW5kYXIge1xuICAgIGZvbnQtZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5IHtcbiAgICBmb250LXNpemU6ICRjYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCxcbiAgLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9uIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGgge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6ICRjYWxlbmRhci13ZWVrZGF5LXRhYmxlLWZvbnQtc2l6ZTtcbiAgICAgIHdlaWdodDogdHlwb2dyYXBoeS11dGlscy5mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gZGF0ZS1yYW5nZS1jb2xvcnMoXG4gICRyYW5nZS1jb2xvcixcbiAgJGNvbXBhcmlzb24tY29sb3I6IHJnYmEoI2Y5YWIwMCwgJHJhbmdlLWZhZGUtYW1vdW50KSxcbiAgJG92ZXJsYXAtY29sb3I6ICNhOGRhYjUsXG4gICRvdmVybGFwLXNlbGVjdGVkLWNvbG9yOiBjb2xvci5hZGp1c3QoJG92ZXJsYXAtY29sb3IsICRsaWdodG5lc3M6IC0zMCUpKSB7XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICRyYW5nZS1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCxcbiAgLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2U6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogJGNvbXBhcmlzb24tY29sb3I7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZSxcbiAgW2Rpcj0ncnRsJ10gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRyYW5nZS1jb2xvciA1MCUsICRjb21wYXJpc29uLWNvbG9yIDUwJSk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUsXG4gIFtkaXI9J3J0bCddIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgJHJhbmdlLWNvbG9yIDUwJSwgJGNvbXBhcmlzb24tY29sb3IgNTAlKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCxcbiAgLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2UubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2U6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkb3ZlcmxhcC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCxcbiAgLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2UgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQ6ICRvdmVybGFwLXNlbGVjdGVkLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZGF0ZXBpY2tlcicpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLWVsZXZhdGlvbigyNCwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5LXV0aWxzLnR5cG9ncmFwaHktbGV2ZWwoJGNvbmZpZywgdGl0bGUpO1xuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZGlhbG9nJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpdmlkZXIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWRpdmlkZXItdmVydGljYWwge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWRpdmlkZXInKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS9kZW5zaXR5L3ByaXZhdGUvY29tcGF0aWJpbGl0eSc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuQHVzZSAnLi9leHBhbnNpb24tdmFyaWFibGVzJztcbkB1c2UgJy4vZXhwYW5zaW9uLW1peGlucyc7XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBwcml2YXRlLnByaXZhdGUtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDIsICRjb25maWcpO1xuICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWFjdGlvbi1yb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICBAaW5jbHVkZSBleHBhbnNpb24tbWl4aW5zLnByaXZhdGUtZXhwYW5zaW9uLWZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgfVxuXG4gIC8vIERpc2FibGUgdGhlIGhvdmVyIG9uIHRvdWNoIGRldmljZXMgc2luY2UgaXQgY2FuIGFwcGVhciBsaWtlIGl0IGlzIHN0dWNrLiBXZSBjYW4ndCB1c2VcbiAgLy8gYEBtZWRpYSAoaG92ZXIpYCBhYm92ZSwgYmVjYXVzZSB0aGUgZGVza3RvcCBzdXBwb3J0IGJyb3dzZXIgc3VwcG9ydCBpc24ndCBncmVhdC5cbiAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSlcbiAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sXG4gIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPSd0cnVlJ10ge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG5cbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgICAgc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHdlaWdodDogdHlwb2dyYXBoeS11dGlscy5mb250LXdlaWdodCgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIHR5cG9ncmFwaHktdXRpbHMudHlwb2dyYXBoeS1sZXZlbCgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cbkBtaXhpbiBkZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGRlbnNpdHktc2NhbGU6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZXhwYW5kZWQtaGVpZ2h0OiBjb21wYXRpYmlsaXR5LnByaXZhdGUtZGVuc2l0eS1wcm9wLXZhbHVlKFxuICAgICAgICBleHBhbnNpb24tdmFyaWFibGVzLiRoZWFkZXItZGVuc2l0eS1jb25maWcsICRkZW5zaXR5LXNjYWxlLCBleHBhbmRlZC1oZWlnaHQpO1xuICAkY29sbGFwc2VkLWhlaWdodDogY29tcGF0aWJpbGl0eS5wcml2YXRlLWRlbnNpdHktcHJvcC12YWx1ZShcbiAgICAgIGV4cGFuc2lvbi12YXJpYWJsZXMuJGhlYWRlci1kZW5zaXR5LWNvbmZpZywgJGRlbnNpdHktc2NhbGUsIGNvbGxhcHNlZC1oZWlnaHQpO1xuXG4gIEBpbmNsdWRlIGNvbXBhdGliaWxpdHkucHJpdmF0ZS1kZW5zaXR5LWxlZ2FjeS1jb21wYXRpYmlsaXR5KCkge1xuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgICBoZWlnaHQ6ICRjb2xsYXBzZWQtaGVpZ2h0O1xuXG4gICAgICAmLm1hdC1leHBhbmRlZCB7XG4gICAgICAgIGhlaWdodDogJGV4cGFuZGVkLWhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWV4cGFuc2lvbicpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBwcml2YXRlLWV4cGFuc2lvbi1mb2N1cyB7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICAmIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICY6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gICAgICAmOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG5AdXNlICcuL2Zvcm0tZmllbGQtZmlsbC10aGVtZS5zY3NzJztcbkB1c2UgJy4vZm9ybS1maWVsZC1sZWdhY3ktdGhlbWUuc2Nzcyc7XG5AdXNlICcuL2Zvcm0tZmllbGQtb3V0bGluZS10aGVtZS5zY3NzJztcbkB1c2UgJy4vZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZS5zY3NzJztcblxuLy8gQ29sb3Igc3R5bGVzIHRoYXQgYXBwbHkgdG8gYWxsIGFwcGVhcmFuY2VzIG9mIHRoZSBmb3JtLWZpZWxkLlxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLmdldCgkY29uZmlnLCBpcy1kYXJrKTtcblxuICAvLyBMYWJlbCBjb2xvcnMuIFJlcXVpcmVkIGlzIHVzZWQgZm9yIHRoZSBgKmAgc3RhciBzaG93biBpbiB0aGUgbGFiZWwuXG4gICRsYWJlbC1jb2xvcjpcbiAgICB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjYpKTtcbiAgJGZvY3VzZWQtbGFiZWwtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSwgdGV4dCk7XG4gICRyZXF1aXJlZC1sYWJlbC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQsIHRleHQpO1xuXG4gIC8vIFVuZGVybGluZSBjb2xvcnMuXG4gICR1bmRlcmxpbmUtY29sb3ItYmFzZTpcbiAgICB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAxLCAwLjg3KSk7XG4gICR1bmRlcmxpbmUtY29sb3ItYWNjZW50OiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCwgdGV4dCk7XG4gICR1bmRlcmxpbmUtY29sb3Itd2FybjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuLCB0ZXh0KTtcbiAgJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHByaW1hcnksIHRleHQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtaGludCB7XG4gICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkZm9jdXNlZC1sYWJlbC1jb2xvcjtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICBjb2xvcjogJHJlcXVpcmVkLWxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci1iYXNlO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjtcblxuICAgICAgJi5tYXQtYWNjZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAvLyBTdHlsaW5nIGZvciB0aGUgZXJyb3Igc3RhdGUgb2YgdGhlIGZvcm0gZmllbGQuIE5vdGUgdGhhdCB3aGlsZSB0aGUgc2FtZSBjYW4gYmVcbiAgLy8gYWNoaWV2ZWQgd2l0aCB0aGUgbmctKiBjbGFzc2VzLCB3ZSB1c2UgdGhpcyBhcHByb2FjaCBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCB0aGUgc2FtZVxuICAvLyBsb2dpYyBpcyB1c2VkIHRvIHN0eWxlIHRoZSBlcnJvciBzdGF0ZSBhbmQgdG8gc2hvdyB0aGUgZXJyb3IgbWVzc2FnZXMuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcblxuICAgICAgJi5tYXQtYWNjZW50LFxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXJyb3Ige1xuICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gIH1cblxuICBAaW5jbHVkZSBmb3JtLWZpZWxkLWxlZ2FjeS10aGVtZS5sZWdhY3ktY29sb3IoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIGZvcm0tZmllbGQtc3RhbmRhcmQtdGhlbWUuc3RhbmRhcmQtY29sb3IoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIGZvcm0tZmllbGQtZmlsbC10aGVtZS5maWxsLWNvbG9yKCRjb25maWcpO1xuICBAaW5jbHVkZSBmb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUub3V0bGluZS1jb2xvcigkY29uZmlnKTtcbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX2xhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJGRlZHVwZSlcbiAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkZGVkdXBlO1xuXG4gICRkZWR1cGU6ICRkZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogdHlwb2dyYXBoeS11dGlscy5saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGU6IDEuNTtcblxuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBsYWJlbCBhbmQgc3Vic2NyaXB0IHRleHQuXG4gICRzdWJzY3JpcHQtZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5LXV0aWxzLnR5cG9ncmFwaHktbGV2ZWwoJGNvbmZpZywgaW5wdXQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgsXG4gIC5tYXQtZm9ybS1maWVsZC1zdWZmaXgge1xuICAgIC8vIEFsbG93IGljb25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplO1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyBpY29uIGJ1dHRvbnMgaW4gYSBwcmVmaXggb3Igc3VmZml4IHRvIGFkYXB0IHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgLm1hdC1pY29uLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDFlbTtcbiAgICAgIHdpZHRoOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG5cbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICAvLyBUaHJvd3Mgb2ZmIHRoZSBiYXNlbGluZSBpZiB3ZSBkbyBpdCBhcyBhIHJlYWwgbWFyZ2luLCBzbyB3ZSBkbyBpdCBhcyBhIGJvcmRlciBpbnN0ZWFkLlxuICAgIGJvcmRlci10b3A6ICRpbmZpeC1tYXJnaW4tdG9wIHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cblxuICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICB0b3A6IC0kaW5maXgtbWFyZ2luLXRvcDtcbiAgICBwYWRkaW5nLXRvcDogJGluZml4LW1hcmdpbi10b3A7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICBmb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zaXplO1xuICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gIH1cblxuICBAaW5jbHVkZSBmb3JtLWZpZWxkLWxlZ2FjeS10aGVtZS5sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZS5zdGFuZGFyZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBmb3JtLWZpZWxkLWZpbGwtdGhlbWUuZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBmb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUub3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5AbWl4aW4gZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRkZW5zaXR5LXNjYWxlOiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgQGluY2x1ZGUgZm9ybS1maWVsZC1sZWdhY3ktdGhlbWUucHJpdmF0ZS1mb3JtLWZpZWxkLWxlZ2FjeS1kZW5zaXR5KCRkZW5zaXR5LXNjYWxlKTtcbiAgQGluY2x1ZGUgZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZS5wcml2YXRlLWZvcm0tZmllbGQtc3RhbmRhcmQtZGVuc2l0eSgkZGVuc2l0eS1zY2FsZSk7XG4gIEBpbmNsdWRlIGZvcm0tZmllbGQtZmlsbC10aGVtZS5wcml2YXRlLWZvcm0tZmllbGQtZmlsbC1kZW5zaXR5KCRkZW5zaXR5LXNjYWxlKTtcbiAgQGluY2x1ZGUgZm9ybS1maWVsZC1vdXRsaW5lLXRoZW1lLnByaXZhdGUtZm9ybS1maWVsZC1vdXRsaW5lLWRlbnNpdHkoJGRlbnNpdHktc2NhbGUpO1xufVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZm9ybS1maWVsZCcpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvZm9ybS1jb21tb24nO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIGxlZ2FjeSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbGVnYWN5LWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC5nZXQoJGNvbmZpZywgaXMtZGFyayk7XG5cbiAgJGxhYmVsLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgJHVuZGVybGluZS1jb2xvcjpcbiAgICB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNDIpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtaGludCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgZm9ybS1jb21tb24ucHJpdmF0ZS1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbGVnYWN5LWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIC8vIFdlIHVzZSBwZXJzcGVjdGl2ZSB0byBmaXggdGhlIHRleHQgYmx1cnJpbmVzcyBhcyBkZXNjcmliZWQgaGVyZTpcbiAgLy8gaHR0cDovL3d3dy51c2VyYWdlbnRtYW4uY29tL2Jsb2cvMjAxNC8wNS8wNC9maXhpbmctdHlwb2dyYXBoeS1pbnNpZGUtb2YtMi1kLWNzcy10cmFuc2Zvcm1zL1xuICAvLyBUaGlzIHJlc3VsdHMgaW4gYSBzbWFsbCBqaXR0ZXIgYWZ0ZXIgdGhlIGxhYmVsIGZsb2F0cyBvbiBGaXJlZm94LCB3aGljaCB0aGVcbiAgLy8gdHJhbnNsYXRlWiBmaXhlcy5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nKSBzY2FsZSgkZm9udC1zY2FsZSkgcGVyc3BlY3RpdmUoMTAwcHgpXG4gIHRyYW5zbGF0ZVooMC4wMDFweCArICRsZWdhY3ktZGVkdXBlKTtcbiAgLy8gVGhlIHRyaWNrcyBhYm92ZSB1c2VkIHRvIHNtb290aCBvdXQgdGhlIGFuaW1hdGlvbiBvbiBjaHJvbWUgYW5kIGZpcmVmb3ggYWN0dWFsbHkgbWFrZSB0aGluZ3NcbiAgLy8gd29yc2Ugb24gSUUsIHNvIHdlIGRvbid0IGluY2x1ZGUgdGhlbSBpbiB0aGUgSUUgdmVyc2lvbi5cbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRsZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuXG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbGVnYWN5LWRlZHVwZTtcblxuICAkbGVnYWN5LWRlZHVwZTogJGxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbi8vIFNhbWUgYXMgbWl4aW4gYWJvdmUsIGJ1dCBvbWl0cyB0aGUgdHJhbnNsYXRlWiBmb3IgcHJpbnRpbmcgcHVycG9zZXMuXG5AbWl4aW4gX2xhYmVsLWZsb2F0aW5nLXByaW50KCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRsZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAkbGVnYWN5LWRlZHVwZTogJGxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBsZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMubGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgbGluZSBhbmQgdGhlIHRvcCBvZiB0aGUgYWN0dWFsIHRleHRcbiAgLy8gKGFzIGEgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZSkuXG4gICRsaW5lLXNwYWNpbmc6ICgkbGluZS1oZWlnaHQgLSAxKSAvIDI7XG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRoZSBpbmZpeC4gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCBzZWVtIHRvIG1lYXN1cmUgZnJvbSB0aGUgZWRnZVxuICAvLyBvZiB0aGUgdGV4dCBpdHNlbGYsIG5vdCB0aGUgZWRnZSBvZiB0aGUgbGluZTsgdGhlcmVmb3JlIHdlIHN1YnRyYWN0IG9mZiB0aGUgbGluZSBzcGFjaW5nLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW0gLSAkbGluZS1zcGFjaW5nO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS4gV2UgYWdhaW4gbmVlZCB0byBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZyBzaW5jZSB0aGUgbW9ja3MgbWVhc3VyZSB0byB0aGUgZWRnZSBvZiB0aGVcbiAgLy8gdGV4dCwgbm90IHRoZSAgZWRnZSBvZiB0aGUgbGluZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZSAtICgkbGluZS1zcGFjaW5nICogMik7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgd2lsbCByZWx5IG9uIEF1dG9maWxsTW9uaXRvciBpbnN0ZWFkLlxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX2xhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgLy8gV2Ugd2FudCB0aGUgdW5kZXJsaW5lIHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50IChhZGp1c3RlZCBmb3IgdGhlIHNtYWxsZXIgZm9udCBzaXplKTtcbiAgICAgIHRvcDogY2FsYygxMDAlIC0gI3skd3JhcHBlci1wYWRkaW5nLWJvdHRvbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZX0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRyYW5zbGF0ZVogY2F1c2VzIHRoZSBsYWJlbCB0byBub3QgYXBwZWFyIHdoaWxlIHByaW50aW5nLCBzbyB3ZSBvdmVycmlkZSBpdCB0byBub3RcbiAgLy8gYXBwbHkgdHJhbnNsYXRlWiB3aGlsZSBwcmludGluZ1xuICBAbWVkaWEgcHJpbnQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgd2lsbCByZWx5IG9uIEF1dG9maWxsTW9uaXRvciBpbnN0ZWFkLlxuICAgICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHByaXZhdGUtZm9ybS1maWVsZC1sZWdhY3ktZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbGVnYWN5LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWZvcm0tZmllbGQtbGVnYWN5Jykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbGVnYWN5LWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHByaXZhdGUtZm9ybS1maWVsZC1sZWdhY3ktZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGxlZ2FjeS10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL3RoZW1pbmcvdGhlbWluZyc7XG5cbi8vIFJlbmRlcnMgYSBncmFkaWVudCBmb3Igc2hvd2luZyB0aGUgZGFzaGVkIGxpbmUgd2hlbiB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4vLyBVbmxpa2UgdXNpbmcgYSBib3JkZXIsIGEgZ3JhZGllbnQgYWxsb3dzIHVzIHRvIGFkanVzdCB0aGUgc3BhY2luZyBvZiB0aGUgZG90dGVkIGxpbmVcbi8vIHRvIG1hdGNoIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3BlYy5cbkBtaXhpbiBwcml2YXRlLWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvciAwJSwgJGNvbG9yIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIEZpZ3VyZXMgb3V0IHRoZSBjb2xvciBvZiB0aGUgcGxhY2Vob2xkZXIgZm9yIGEgZm9ybSBjb250cm9sLlxuLy8gVXNlZCBwcmltYXJpbHkgdG8gcHJldmVudCB0aGUgdmFyaW91cyBmb3JtIGNvbnRyb2xzIGZyb21cbi8vIGJlY29taW5nIG91dCBvZiBzeW5jIHNpbmNlIHRoZXNlIGNvbG9ycyBhcmVuJ3QgaW4gYSBwYWxldHRlLlxuQGZ1bmN0aW9uIHByaXZhdGUtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkY29uZmlnKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLmdldCgkY29uZmlnLCBpcy1kYXJrKTtcbiAgQHJldHVybiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LFxuICAgIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjUsIDAuNDIpKTtcbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvZm9ybS1jb21tb24nO1xuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIHN0YW5kYXJkIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBzdGFuZGFyZC1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAuZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuICAkdW5kZXJsaW5lLWNvbG9yOlxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIGZvcm0tY29tbW9uLnByaXZhdGUtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBzdGFuZGFyZC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBwcml2YXRlLWZvcm0tZmllbGQtc3RhbmRhcmQtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gc3RhbmRhcmQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZm9ybS1maWVsZC1zdGFuZGFyZCcpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHN0YW5kYXJkLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHByaXZhdGUtZm9ybS1maWVsZC1zdGFuZGFyZC1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgc3RhbmRhcmQtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgZmlsbCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gZmlsbC1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAuZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuXG4gICRmaWxsLWJhY2tncm91bmQ6XG4gICAgdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4xLCAwLjA0KSk7XG4gICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ6XG4gICAgdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4wNSwgMC4wMikpO1xuICAkdW5kZXJsaW5lLWNvbG9yOlxuICAgIHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpbGwtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBjb2xvcjogJGxhYmVsLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kZmlsbC1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkZmlsbC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJGZpbGwtZGVkdXBlO1xuXG4gICRmaWxsLWRlZHVwZTogJGZpbGwtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gZmlsbC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogdHlwb2dyYXBoeS11dGlscy5saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRvcCBvZiB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nLXRvcDogMC4yNWVtO1xuICAvLyBUaGUgcGFkZGluZyBiZWxvdyB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nLWJvdHRvbTogMC43NWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgYW1vdW50IHdlIG9mZnNldCB0aGUgbGFiZWwgZnJvbSB0aGUgaW5wdXQgdGV4dCBpbiB0aGUgZmlsbCBhcHBlYXJhbmNlLlxuICAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogLTAuNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZy10b3AgMCAkaW5maXgtcGFkZGluZy1ib3R0b20gMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nLXRvcDtcbiAgICAgIG1hcmdpbi10b3A6ICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX2xhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX2xhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcHJpdmF0ZS1mb3JtLWZpZWxkLWZpbGwtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gZmlsbC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1mb3JtLWZpZWxkLWZpbGwnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBmaWxsLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHByaXZhdGUtZm9ybS1maWVsZC1maWxsLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBmaWxsLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIG91dGxpbmUgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG91dGxpbmUtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC5nZXQoJGNvbmZpZywgaXMtZGFyayk7XG5cbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAkb3V0bGluZS1jb2xvcjpcbiAgICB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjMsIDAuMTIpKTtcbiAgJG91dGxpbmUtY29sb3ItaG92ZXI6XG4gICAgdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkb3V0bGluZS1jb2xvci1wcmltYXJ5OiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHByaW1hcnkpO1xuICAkb3V0bGluZS1jb2xvci1hY2NlbnQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50KTtcbiAgJG91dGxpbmUtY29sb3Itd2FybjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuKTtcbiAgJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ6XG4gICAgdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC4xNSwgMC4wNikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItaG92ZXI7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1wcmltYXJ5O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xhc3MgcmVwZWF0ZWQgc28gdGhhdCBydWxlIGlzIHNwZWNpZmljIGVub3VnaCB0byBvdmVycmlkZSBmb2N1c2VkIGFjY2VudCBjb2xvciBjYXNlLlxuICAgICYubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBjb2xvcjogJGxhYmVsLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1kaXNhYmxlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kb3V0bGluZS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1kZWR1cGUpXG4gIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRvdXRsaW5lLWRlZHVwZTtcblxuICAkb3V0bGluZS1kZWR1cGU6ICRvdXRsaW5lLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG91dGxpbmUtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMubGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBhYm92ZSBhbmQgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZzogMWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgYW1vdW50IHdlIG9mZnNldCB0aGUgbGFiZWwgZnJvbSB0aGUgaW5wdXQgdGV4dCBpbiB0aGUgb3V0bGluZSBhcHBlYXJhbmNlLlxuICAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogLTAuMjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMCAkaW5maXgtcGFkZGluZyAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gICAgICBtYXJnaW4tdG9wOiAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX2xhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBwcml2YXRlLWZvcm0tZmllbGQtb3V0bGluZS1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBvdXRsaW5lLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWZvcm0tZmllbGQtb3V0bGluZScpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG91dGxpbmUtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgcHJpdmF0ZS1mb3JtLWZpZWxkLW91dGxpbmUtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG91dGxpbmUtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtaWNvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5LCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50LCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4sIHRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWljb24nKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvcGFsZXR0ZSc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL2Zvcm0tY29tbW9uJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvdmVuZG9yLXByZWZpeGVzJztcblxuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWQsXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5LCB0ZXh0KTtcblxuICAgIEBpbmNsdWRlIHZlbmRvci1wcmVmaXhlcy5pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogZm9ybS1jb21tb24ucHJpdmF0ZS1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCRjb25maWcpO1xuICAgIH1cblxuICAgIC8vIE9uIGRhcmsgdGhlbWVzIHdlIHNldCB0aGUgbmF0aXZlIGBzZWxlY3RgIGNvbG9yIHRvIHNvbWUgc2hhZGUgb2Ygd2hpdGUsXG4gICAgLy8gaG93ZXZlciB0aGUgY29sb3IgcHJvcGFnYXRlcyB0byBhbGwgb2YgdGhlIGBvcHRpb25gIGVsZW1lbnRzLCB3aGljaCBhcmVcbiAgICAvLyBhbHdheXMgb24gYSB3aGl0ZSBiYWNrZ3JvdW5kIGluc2lkZSB0aGUgZHJvcGRvd24sIGNhdXNpbmcgdGhlbSB0byBibGVuZCBpbi5cbiAgICAvLyBTaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgYmFja2dyb3VuZCBvZiB0aGUgZHJvcGRvd24sIHdlIG5lZWQgdG8gZXhwbGljaXRseVxuICAgIC8vIHJlc2V0IHRoZSBjb2xvciBvZiB0aGUgb3B0aW9ucyB0byBzb21ldGhpbmcgZGFyay5cbiAgICBAaWYgKG1hcC5nZXQoJGNvbmZpZywgaXMtZGFyaykpIHtcbiAgICAgIG9wdGlvbiB7XG4gICAgICAgIGNvbG9yOiBwYWxldHRlLiRkYXJrLXByaW1hcnktdGV4dDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uOmRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6IHBhbGV0dGUuJGRhcmstZGlzYWJsZWQtdGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50LFxuICAubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4sIHRleHQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMubGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcblxuICAvLyA8aW5wdXQ+IGVsZW1lbnRzIHNlZW0gdG8gaGF2ZSB0aGVpciBoZWlnaHQgc2V0IHNsaWdodGx5IHRvbyBsYXJnZSBvbiBTYWZhcmkgY2F1c2luZyB0aGUgdGV4dCB0b1xuICAvLyBiZSBtaXNhbGlnbmVkIHcuci50LiB0aGUgcGxhY2Vob2xkZXIuIEFkZGluZyB0aGlzIG1hcmdpbiBjb3JyZWN0cyBpdC5cbiAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIG1hcmdpbi10b3A6IC0kbGluZS1zcGFjaW5nICogMWVtO1xuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtaW5wdXQnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXNcbkBtaXhpbiB1c2VyLXNlbGVjdCgkdmFsdWUpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbW96LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tcy11c2VyLXNlbGVjdDogJHZhbHVlO1xuICB1c2VyLXNlbGVjdDogJHZhbHVlO1xufVxuXG5AbWl4aW4gaW5wdXQtcGxhY2Vob2xkZXIge1xuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYiB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYmJpbmcge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG5cbkBtaXhpbiBiYWNrZmFjZS12aXNpYmlsaXR5KCR2YWx1ZSkge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gcG9zaXRpb24tc3RpY2t5KCRpbXBvcnRhbnQ6IGZhbHNlKSB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAje2lmKCRpbXBvcnRhbnQsICchaW1wb3J0YW50JywgJycpfTtcbiAgcG9zaXRpb246IHN0aWNreSAje2lmKCRpbXBvcnRhbnQsICchaW1wb3J0YW50JywgJycpfTtcbn1cbi8vIHN0eWxlbGludC1lbmFibGVcbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvbGlzdC1jb21tb24nO1xuXG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWxpc3QtaXRlbS1kaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1saXN0LW9wdGlvbik7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uLFxuICAubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtLFxuICAubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtIHtcbiAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1saXN0LXNpbmdsZS1zZWxlY3RlZC1vcHRpb24ge1xuICAgICYsICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBob3ZlciwgMC4xMik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gICRmb250LWZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnKTtcblxuICAubWF0LWxpc3QtaXRlbSB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cblxuICAvLyBEZWZhdWx0IGxpc3RcbiAgLm1hdC1saXN0LWJhc2Uge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIGxpc3QtY29tbW9uLmJhc2UodHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgICBAaW5jbHVkZSBsaXN0LWNvbW1vbi5iYXNlKHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXdlaWdodDogdHlwb2dyYXBoeS11dGlscy5mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlbnNlIGxpc3RcbiAgLm1hdC1saXN0LWJhc2VbZGVuc2VdIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbGlzdC1jb21tb24uYmFzZSh0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbGlzdC1jb21tb24uYmFzZSh0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgICAgIGZvbnQtc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBmb250LXdlaWdodDogdHlwb2dyYXBoeS11dGlscy5mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWxpc3QnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9wcml2YXRlJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LW1lbnUtcGFuZWwge1xuICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsICd0ZXh0Jyk7XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAmLFxuICAgICAgJjo6YWZ0ZXIsXG4gICAgICAubWF0LWljb24tbm8tY29sb3Ige1xuICAgICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXG4gIC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbTpob3ZlcixcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSk7XG4gICAgICBzaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtbWVudScpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcbkB1c2UgJy4uL2NvcmUvZGVuc2l0eS9wcml2YXRlL2NvbXBhdGliaWxpdHknO1xuQHVzZSAnLi9wYWdpbmF0b3ItdmFyaWFibGVzJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1wYWdpbmF0b3Ige1xuICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLFxuICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LFxuICAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsICdpY29uJyk7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4gIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LFxuICAgIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCxcbiAgICAubWF0LXBhZ2luYXRvci1maXJzdCxcbiAgICAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgICAgIGJvcmRlci1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBzaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkZGVuc2l0eS1zY2FsZTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRoZWlnaHQ6IGNvbXBhdGliaWxpdHkucHJpdmF0ZS1kZW5zaXR5LXByb3AtdmFsdWUocGFnaW5hdG9yLXZhcmlhYmxlcy4kZGVuc2l0eS1jb25maWcsXG4gICAgJGRlbnNpdHktc2NhbGUsIGhlaWdodCk7XG5cbiAgQGluY2x1ZGUgY29tcGF0aWJpbGl0eS5wcml2YXRlLWRlbnNpdHktbGVnYWN5LWNvbXBhdGliaWxpdHkoKSB7XG4gICAgLm1hdC1wYWdpbmF0b3ItY29udGFpbmVyIHtcbiAgICAgIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1wYWdpbmF0b3InKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBkZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAnc2Fzczpjb2xvcic7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5cbi8vIEFwcHJveGltYXRlcyB0aGUgY29ycmVjdCBidWZmZXIgY29sb3IgYnkgdXNpbmcgYSBtaXggYmV0d2VlbiB0aGUgdGhlbWUgY29sb3Jcbi8vIGFuZCB0aGUgdGhlbWUncyBiYWNrZ3JvdW5kIGNvbG9yLlxuQGZ1bmN0aW9uIF9nZXQtYnVmZmVyLWNvbG9yKCR0aGVtZSwgJGJhY2tncm91bmQpIHtcbiAgJHRoZW1lLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHRoZW1lKTtcbiAgLy8gUmV0dXJuIGZhbGxiYWNrIGNvbG9yIGlmIHRoZSB0aGVtZSB1c2VzIHZhcmlhYmxlcyB0byBkZWZpbmUgY29sb3JzLlxuICBAaWYgKG1ldGEudHlwZS1vZigkdGhlbWUtY29sb3IpICE9ICdjb2xvcicgb3IgbWV0YS50eXBlLW9mKCRiYWNrZ3JvdW5kKSAhPSAnY29sb3InKSB7XG4gICAgQHJldHVybiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHRoZW1lLCBsaWdodGVyKTtcbiAgfVxuICBAcmV0dXJuIGNvbG9yLm1peCgkdGhlbWUtY29sb3IsICRiYWNrZ3JvdW5kLCAkd2VpZ2h0OiAyNSUpO1xufVxuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLmdldChtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICBmaWxsOiBfZ2V0LWJ1ZmZlci1jb2xvcigkcHJpbWFyeSwgJGJhY2tncm91bmQpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBfZ2V0LWJ1ZmZlci1jb2xvcigkcHJpbWFyeSwgJGJhY2tncm91bmQpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IF9nZXQtYnVmZmVyLWNvbG9yKCRhY2NlbnQsICRiYWNrZ3JvdW5kKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogX2dldC1idWZmZXItY29sb3IoJGFjY2VudCwgJGJhY2tncm91bmQpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiB7XG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgICBmaWxsOiBfZ2V0LWJ1ZmZlci1jb2xvcigkd2FybiwgJGJhY2tncm91bmQpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBfZ2V0LWJ1ZmZlci1jb2xvcigkd2FybiwgJGJhY2tncm91bmQpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtcHJvZ3Jlc3MtYmFyJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuXG4gIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciwgLm1hdC1zcGlubmVyIHtcbiAgICBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXByb2dyZXNzLXNwaW5uZXInKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG5AbWl4aW4gX2NvbG9yKCRwYWxldHRlKSB7XG4gICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSxcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLFxuICAmOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUpO1xuICB9XG59XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBuZWVkcyBleHRyYSBzcGVjaWZpY2l0eSwgYmVjYXVzZSB0aGUgY2xhc3NlcyBhYm92ZSBhcmUgY29tYmluZWRcbiAgICAvLyAoZS5nLiBgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudGApIHdoaWNoIGluY3JlYXNlcyB0aGVpciBzcGVjaWZpY2l0eSBhIGxvdC5cbiAgICAvLyBUT0RPOiBjb25zaWRlciBtYWtpbmcgdGhlIHNlbGVjdG9ycyBpbnRvIGRlc2NlbmRhbnRzIChgLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8tYnV0dG9uYCkuXG4gICAgJi5tYXQtcmFkaW8tZGlzYWJsZWQge1xuICAgICAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSxcbiAgICAgIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCxcbiAgICAgIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudCB7XG4gICAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTd2l0Y2ggdGhpcyB0byBhIHNvbGlkIGNvbG9yIHNpbmNlIHdlJ3JlIHVzaW5nIGBvcGFjaXR5YFxuICAgIC8vIHRvIGNvbnRyb2wgaG93IG9wYXF1ZSB0aGUgcmlwcGxlIHNob3VsZCBiZS5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC5nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1yYWRpbycpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3ByaXZhdGUnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9mb3JtLWNvbW1vbic7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuXG4gIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogZm9ybS1jb21tb24ucHJpdmF0ZS1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIEBpbmNsdWRlIHByaXZhdGUucHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJGNvbmZpZyk7XG5cbiAgICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKSB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGhvdmVyLCAwLjEyKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgICYubWF0LWZvY3VzZWQge1xuICAgICAgJi5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHByaW1hcnksIHRleHQpO1xuICAgICAgfVxuXG4gICAgICAmLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQsIHRleHQpO1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2FybiwgdGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4sIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogdHlwb2dyYXBoeS11dGlscy5saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLm1hdC1zZWxlY3Qge1xuICAgIGZvbnQtZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAxZW07XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1zZWxlY3QnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2Fzczpjb2xvcic7XG5AdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9wcml2YXRlJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gICRkcmF3ZXItYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLWNvbnRhaW5lci1iYWNrZ3JvdW5kLWNvbG9yOiAgdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgJGRyYXdlci1zaWRlLWJvcmRlcjogc29saWQgMXB4IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWNvbnRhaW5lci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1kcmF3ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LWRyYXdlci1wdXNoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItcHVzaC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cblxuICAgICY6bm90KC5tYXQtZHJhd2VyLXNpZGUpIHtcbiAgICAgIC8vIFRoZSBlbGV2YXRpb24gb2Ygei0xNiBpcyBub3RlZCBpbiB0aGUgZGVzaWduIHNwZWNpZmljYXRpb25zLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1kcmF3ZXIuaHRtbFxuICAgICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLWVsZXZhdGlvbigxNiwgJGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd24ge1xuICAgICRvcGFjaXR5OiAwLjY7XG4gICAgJGJhY2tkcm9wLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsIGNhcmQsICRvcGFjaXR5KTtcblxuICAgIEBpZiAobWV0YS50eXBlLW9mKCRiYWNrZHJvcC1jb2xvcikgPT0gY29sb3IpIHtcbiAgICAgIC8vIFdlIHVzZSBpbnZlcnQoKSBoZXJlIHRvIGhhdmUgdGhlIGRhcmtlbiB0aGUgYmFja2dyb3VuZCBjb2xvciBleHBlY3RlZCB0byBiZSB1c2VkLiBJZiB0aGVcbiAgICAgIC8vIGJhY2tncm91bmQgaXMgbGlnaHQsIHdlIHVzZSBhIGRhcmsgYmFja2Ryb3AuIElmIHRoZSBiYWNrZ3JvdW5kIGlzIGRhcmssXG4gICAgICAvLyB3ZSB1c2UgYSBsaWdodCBiYWNrZHJvcC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLmludmVydCgkYmFja2Ryb3AtY29sb3IpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBjb3VsZG4ndCByZXNvbHZlIHRoZSBiYWNrZHJvcCBjb2xvciB0byBhIGNvbG9yIHZhbHVlLCBmYWxsIGJhY2sgdG8gdXNpbmdcbiAgICAgIC8vIGBvcGFjaXR5YCB0byBtYWtlIGl0IG9wYXF1ZSBzaW5jZSBpdHMgZW5kIHZhbHVlIGNvdWxkIGJlIGEgc29saWQgY29sb3IuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2Ryb3AtY29sb3I7XG4gICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1zaWRlbmF2Jykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvc3R5bGUvcHJpdmF0ZSc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvcGFsZXR0ZSc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS11dGlscyc7XG5cbkBtaXhpbiBfY2hlY2tlZC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKSB7XG4gICYubWF0LWNoZWNrZWQge1xuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgICAgLy8gT3BhY2l0eSBpcyBkZXRlcm1pbmVkIGZyb20gdGhlIHNwZWNzIGZvciB0aGUgc2VsZWN0aW9uIGNvbnRyb2xzLlxuICAgICAgLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL3NlbGVjdGlvbi1jb250cm9scy5odG1sI3NwZWNzXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSwgMC41NCk7XG4gICAgfVxuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGlzLWRhcms6IG1hcC5nZXQoJGNvbmZpZywgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLy8gQ29sb3IgaHVlcyBhcmUgYmFzZWQgb24gdGhlIHNwZWNzIHdoaWNoIGJyaWVmbHkgc2hvdyB0aGUgaHVlcyB0aGF0IGFyZSBhcHBsaWVkIHRvIGEgc3dpdGNoLlxuICAvLyBUaGUgMjAxOCBzcGVjcyBubyBsb25nZXIgZGVzY3JpYmUgaG93IGRhcmsgc3dpdGNoZXMgc2hvdWxkIGxvb2sgbGlrZS4gRHVlIHRvIHRoZSBsYWNrIG9mXG4gIC8vIGluZm9ybWF0aW9uIGZvciBkYXJrIHRoZW1lZCBzd2l0Y2hlcywgd2UgcGFydGlhbGx5IGtlZXAgdGhlIG9sZCBiZWhhdmlvciB0aGF0IGlzIGJhc2VkIG9uXG4gIC8vIHRoZSBwcmV2aW91cyBzcGVjaWZpY2F0aW9ucy4gRm9yIHRoZSBjaGVja2VkIGNvbG9yIHdlIGFsd2F5cyB1c2UgdGhlIGBkZWZhdWx0YCBodWUgYmVjYXVzZVxuICAvLyB0aGF0IGZvbGxvd3MgTURDIGFuZCBhbHNvIG1ha2VzIGl0IGVhc2llciBmb3IgcGVvcGxlIHRvIGNyZWF0ZSBhIGN1c3RvbSB0aGVtZSB3aXRob3V0IG5lZWRpbmdcbiAgLy8gdG8gc3BlY2lmeSBlYWNoIGh1ZSBpbmRpdmlkdWFsbHkuXG4gICR0aHVtYi11bmNoZWNrZWQtaHVlOiBpZigkaXMtZGFyaywgNDAwLCA1MCk7XG4gICR0aHVtYi1jaGVja2VkLWh1ZTogZGVmYXVsdDtcblxuICAkYmFyLXVuY2hlY2tlZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgICBAaW5jbHVkZSBfY2hlY2tlZC1jb2xvcigkYWNjZW50LCAkdGh1bWItY2hlY2tlZC1odWUpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfY2hlY2tlZC1jb2xvcigkcHJpbWFyeSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9jaGVja2VkLWNvbG9yKCR3YXJuLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tlZCkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmlwcGxlLXVuY2hlY2tlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLWVsZXZhdGlvbigxLCAkY29uZmlnKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUocGFsZXR0ZS4kZ3JleS1wYWxldHRlLCAkdGh1bWItdW5jaGVja2VkLWh1ZSk7XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXItdW5jaGVja2VkLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc2xpZGUtdG9nZ2xlJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuQG1peGluIF9pbm5lci1jb250ZW50LXRoZW1lKCRwYWxldHRlKSB7XG4gIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gIC5tYXQtc2xpZGVyLXRodW1iLFxuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgJG9wYWNpdHk6IDAuMjtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSwgZGVmYXVsdCwgJG9wYWNpdHkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcblxuICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgIEBpZiAobWV0YS50eXBlLW9mKCRjb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgJG1hdC1zbGlkZXItb2ZmLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmLWFjdGl2ZSk7XG4gICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1jb2xvcjpcbiAgICB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNsaWRlci1taW4pO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjpcbiAgICB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHk6IDAuNztcbiAgJG1hdC1zbGlkZXItdGljay1jb2xvcjpcbiAgICB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGJhc2UsICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eSk7XG4gICRtYXQtc2xpZGVyLXRpY2stc2l6ZTogMnB4O1xuXG4gIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSB7XG4gICAgQGluY2x1ZGUgX2lubmVyLWNvbnRlbnQtdGhlbWUoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1hY2NlbnQge1xuICAgIEBpbmNsdWRlIF9pbm5lci1jb250ZW50LXRoZW1lKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIHtcbiAgICBAaW5jbHVkZSBfaW5uZXItY29udGVudC10aGVtZSgkd2Fybik7XG4gIH1cblxuICAubWF0LXNsaWRlcjpob3ZlcixcbiAgLmNkay1mb2N1c2VkIHtcbiAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWRpc2FibGVkIHtcbiAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItbWluLXZhbHVlIHtcbiAgICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICAgICRvcGFjaXR5OiAwLjEyO1xuICAgICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGJhc2UsICRvcGFjaXR5KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcblxuICAgICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICAgIEBpZiAobWV0YS50eXBlLW9mKCRjb2xvcikgIT0gY29sb3IpIHtcbiAgICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyLFxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVyIHtcbiAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLXRpY2stY29sb3I7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKG1ldGEudHlwZS1vZigkbWF0LXNsaWRlci10aWNrLWNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgb3BhY2l0eTogJG1hdC1zbGlkZXItdGljay1vcGFjaXR5O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gICAgLy8gRmlyZWZveCBkb2Vzbid0IGRyYXcgdGhlIGdyYWRpZW50IGNvcnJlY3RseSB3aXRoICd0byByaWdodCdcbiAgICAvLyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEzMTQzMTkpLlxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKG1ldGEudHlwZS1vZigkbWF0LXNsaWRlci10aWNrLWNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgb3BhY2l0eTogJG1hdC1zbGlkZXItdGljay1vcGFjaXR5O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcblxuICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgIEBpZiAobWV0YS50eXBlLW9mKCRtYXQtc2xpZGVyLXRpY2stY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICBvcGFjaXR5OiAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICAgIHNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgd2VpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc2xpZGVyJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcbkB1c2UgJy4uL2NvcmUvZGVuc2l0eS9wcml2YXRlL2NvbXBhdGliaWxpdHknO1xuQHVzZSAnLi9zdGVwcGVyLXZhcmlhYmxlcyc7XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLmdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLmdldCgkY29uZmlnLCB3YXJuKTtcblxuICAubWF0LXN0ZXAtaGVhZGVyIHtcbiAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIE9uIHRvdWNoIGRldmljZXMgdGhlIDpob3ZlciBzdGF0ZSB3aWxsIGxpbmdlciBvbiB0aGUgZWxlbWVudCBhZnRlciBhIHRhcC5cbiAgICAvLyBSZXNldCBpdCB2aWEgYEBtZWRpYWAgYWZ0ZXIgdGhlIGRlY2xhcmF0aW9uLCBiZWNhdXNlIHRoZSBtZWRpYSBxdWVyeSBpc24ndFxuICAgIC8vIHN1cHBvcnRlZCBieSBhbGwgYnJvd3NlcnMgeWV0LlxuICAgIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbCxcbiAgICAubWF0LXN0ZXAtb3B0aW9uYWwge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24ge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHByaW1hcnkpO1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIC5tYXQtc3RlcC1pY29uIHtcbiAgICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4gICAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxuICAgICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50KTtcbiAgICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIC5tYXQtc3RlcC1pY29uIHtcbiAgICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2FybiwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuICAgICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbiAgICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4pO1xuICAgICAgICBjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4sIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1hY3RpdmUge1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHdhcm4sIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLCAubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgY2FyZCk7XG4gIH1cblxuICAubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3JlIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YmVmb3JlLFxuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLFxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCwgLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuICAgIGZvbnQtZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogdHlwb2dyYXBoeS11dGlscy5mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIHdlaWdodDogdHlwb2dyYXBoeS11dGlscy5mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH07XG4gIH1cbn1cblxuQG1peGluIGRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkZGVuc2l0eS1zY2FsZTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRoZWlnaHQ6IGNvbXBhdGliaWxpdHkucHJpdmF0ZS1kZW5zaXR5LXByb3AtdmFsdWUoc3RlcHBlci12YXJpYWJsZXMuJGRlbnNpdHktY29uZmlnLFxuICAgICRkZW5zaXR5LXNjYWxlLCBoZWlnaHQpO1xuICAkdmVydGljYWwtcGFkZGluZzogKCRoZWlnaHQgLSBzdGVwcGVyLXZhcmlhYmxlcy4kbGFiZWwtaGVhZGVyLWhlaWdodCkgLyAyO1xuXG4gIEBpbmNsdWRlIGNvbXBhdGliaWxpdHkucHJpdmF0ZS1kZW5zaXR5LWxlZ2FjeS1jb21wYXRpYmlsaXR5KCkge1xuICAgIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG4gICAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIsXG4gICAgLm1hdC12ZXJ0aWNhbC1zdGVwcGVyLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAkdmVydGljYWwtcGFkZGluZyBzdGVwcGVyLXZhcmlhYmxlcy4kc2lkZS1nYXA7XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlcyB0aGF0IHRoZSB2ZXJ0aWNhbCBsaW5lcyBmb3IgdGhlIHN0ZXAgY29udGVudCBleGNlZWQgaW50byB0aGUgc3RlcFxuICAgIC8vIGhlYWRlcnMgd2l0aCBhIGdpdmVuIGRpc3RhbmNlIChgJG1hdC1zdGVwcGVyLWxpbmUtZ2FwYCkgdG8gdGhlIHN0ZXAgaWNvbi5cbiAgICAubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3JlIHtcbiAgICAgIHRvcDogc3RlcHBlci12YXJpYWJsZXMuJGxpbmUtZ2FwIC0gJHZlcnRpY2FsLXBhZGRpbmc7XG4gICAgICBib3R0b206IHN0ZXBwZXItdmFyaWFibGVzLiRsaW5lLWdhcCAtICR2ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZXMgdGhhdCB0aGUgaG9yaXpvbnRhbCBsaW5lcyBmb3IgdGhlIHN0ZXAgaGVhZGVyIGFyZSBjZW50ZXJlZCB2ZXJ0aWNhbGx5LlxuICAgIC5tYXQtc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20gLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcbiAgICAgICY6OmFmdGVyLCAmOjpiZWZvcmUge1xuICAgICAgICB0b3A6ICR2ZXJ0aWNhbC1wYWRkaW5nICsgc3RlcHBlci12YXJpYWJsZXMuJGxhYmVsLWhlYWRlci1oZWlnaHQgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVuc3VyZXMgdGhhdCB0aGUgaG9yaXpvbnRhbCBsaW5lIGZvciB0aGUgc3RlcCBjb250ZW50IGlzIGFsaWduZWQgY2VudGVyZWQgdmVydGljYWxseS5cbiAgICAubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICAgICAgdG9wOiAkdmVydGljYWwtcGFkZGluZyArIHN0ZXBwZXItdmFyaWFibGVzLiRsYWJlbC1oZWFkZXItaGVpZ2h0IC8gMjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXN0ZXBwZXInKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBkZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOmNvbG9yJztcbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICAgICR0YWJsZS1iYWNrZ3JvdW5kOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gICAgJHRleHQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgLy8gQmVjYXVzZSB0aGUgYXJyb3cgaXMgbWFkZSB1cCBvZiBtdWx0aXBsZSBlbGVtZW50cyB0aGF0IGFyZSBzdGFja2VkIG9uIHRvcCBvZiBlYWNoIG90aGVyLFxuICAgIC8vIHdlIGNhbid0IHVzZSB0aGUgc2VtaS10cmFuc3BhcmVudCBjb2xvciBmcm9tIHRoZSB0aGVtZSBkaXJlY3RseS4gSWYgdGhlIHZhbHVlIGlzIGEgY29sb3JcbiAgICAvLyAqdHlwZSosIHdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkIGNvbG9yIGJ5IHRha2luZyB0aGUgb3BhY2l0eSBmcm9tIHRoZSByZ2JhIHZhbHVlIGFuZFxuICAgIC8vIHVzaW5nIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZFxuICAgIC8vIHdoZW4gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuIE90aGVyd2lzZSwgaWYgaXQgcmVzb2x2ZXMgdG8gc29tZXRoaW5nIGRpZmZlcmVudFxuICAgIC8vIChlLmcuIGl0IHJlc29sdmVzIHRvIGEgQ1NTIHZhcmlhYmxlKSwgd2UgdXNlIHRoZSBjb2xvciBkaXJlY3RseS5cbiAgICBAaWYgKG1ldGEudHlwZS1vZigkdGFibGUtYmFja2dyb3VuZCkgPT0gY29sb3IgYW5kIG1ldGEudHlwZS1vZigkdGV4dC1jb2xvcikgPT0gY29sb3IpIHtcbiAgICAgICR0ZXh0LW9wYWNpdHk6IG9wYWNpdHkoJHRleHQtY29sb3IpO1xuICAgICAgY29sb3I6IGNvbG9yLm1peCgkdGFibGUtYmFja2dyb3VuZCwgcmdiYSgkdGV4dC1jb2xvciwgMSksICgxIC0gJHRleHQtb3BhY2l0eSkgKiAxMDAlKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX2RlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIHRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiB0aGVtaW5nLnByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXNvcnQnKSB7XG4gICAgJGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBjb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuXG5AbWl4aW4gY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0aGVtaW5nLmdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAuZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAuZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAuZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRoZWFkZXItYm9yZGVyOiAxcHggc29saWQgdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LXRhYi1uYXYtYmFyLFxuICAubWF0LXRhYi1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206ICRoZWFkZXItYm9yZGVyO1xuICB9XG5cbiAgLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIHtcbiAgICAubWF0LXRhYi1uYXYtYmFyLFxuICAgIC5tYXQtdGFiLWhlYWRlciB7XG4gICAgICBib3JkZXItdG9wOiAkaGVhZGVyLWJvcmRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBoZWFkZXIgYm9yZGVyIHdoZW4gdGhlcmUgaXMgYSBiYWNrZ3JvdW5kIGNvbG9yXG4gIC5tYXQtdGFiLWdyb3VwW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10gLm1hdC10YWItaGVhZGVyLFxuICAubWF0LXRhYi1uYXYtYmFyW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10ge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLCAubWF0LXRhYi1uYXYtYmFyIHtcbiAgICAkdGhlbWUtY29sb3JzOiAoXG4gICAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICAgIGFjY2VudDogJGFjY2VudCxcbiAgICAgIHdhcm46ICR3YXJuXG4gICAgKTtcblxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWNvbG9ycyB7XG4gICAgICAvLyBTZXQgdGhlIGZvcmVncm91bmQgY29sb3Igb2YgdGhlIHRhYnNcbiAgICAgICYubWF0LSN7JG5hbWV9IHtcbiAgICAgICAgQGluY2x1ZGUgX2xhYmVsLWZvY3VzLWNvbG9yKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9pbmstYmFyLWNvbG9yKCRjb2xvcik7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgaW5rIGJhciB3aGVuIGJhY2tncm91bmQgY29sb3IgaXMgdGhlIHNhbWVcbiAgICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgICAgPiAubWF0LXRhYi1oZWFkZXIsID4gLm1hdC10YWItbGluay1jb250YWluZXIge1xuICAgICAgICAgICAgQGluY2x1ZGUgX2luay1iYXItY29sb3IoJGNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRhYnMgYW5kIG92ZXJyaWRlIGZvY3VzIGNvbG9yXG4gICAgICAmLm1hdC1iYWNrZ3JvdW5kLSN7JG5hbWV9IHtcbiAgICAgICAgQGluY2x1ZGUgX2xhYmVsLWZvY3VzLWNvbG9yKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF90YWJzLWJhY2tncm91bmQoJGNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9pbmstYmFyLWNvbG9yKCRjb2xvciwgJGh1ZTogZGVmYXVsdCkge1xuICAubWF0LWluay1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkY29sb3IsICRodWUpO1xuICB9XG59XG5cbkBtaXhpbiBfbGFiZWwtZm9jdXMtY29sb3IoJHRhYi1mb2N1cy1jb2xvcikge1xuICAubWF0LXRhYi1sYWJlbCxcbiAgLm1hdC10YWItbGluayB7XG4gICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQge1xuICAgICAgJjpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR0YWItZm9jdXMtY29sb3IsIGxpZ2h0ZXIsIDAuMyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfdGFicy1iYWNrZ3JvdW5kKCRiYWNrZ3JvdW5kLWNvbG9yKSB7XG4gIC8vIE5vdGUgdGhhdCB0aGVzZSBzZWxlY3RvcnMgdGFyZ2V0IGRpcmVjdCBkZXNjZW5kYW50cyBzb1xuICAvLyB0aGF0IHRoZSBzdHlsZXMgZG9uJ3QgYXBwbHkgdG8gYW55IG5lc3RlZCB0YWIgZ3JvdXBzLlxuXG4gIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgdGFiIGdyb3VwXG4gID4gLm1hdC10YWItaGVhZGVyLCA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyLCA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQtY29sb3IpO1xuICB9XG5cbiAgLy8gU2V0IGxhYmVscyB0byBjb250cmFzdCBhZ2FpbnN0IGJhY2tncm91bmRcbiAgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWwsID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC10YWItbGluayB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG5cbiAgICAmLm1hdC10YWItZGlzYWJsZWQge1xuICAgICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgcGFnaW5hdGlvbiBjaGV2cm9ucyB0byBjb250cmFzdCBiYWNrZ3JvdW5kXG4gID4gLm1hdC10YWItaGVhZGVyIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sXG4gID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbixcbiAgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlLFxuICA+IC5tYXQtdGFiLWhlYWRlciAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlIHtcbiAgICBib3JkZXItY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLFxuICA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICB9XG5cbiAgLy8gU2V0IHJpcHBsZXMgY29sb3IgdG8gYmUgdGhlIGNvbnRyYXN0IGNvbG9yIG9mIHRoZSBuZXcgYmFja2dyb3VuZC4gT3RoZXJ3aXNlIHRoZSByaXBwbGVcbiAgLy8gY29sb3Igd2lsbCBiZSBiYXNlZCBvbiB0aGUgYXBwIGJhY2tncm91bmQgY29sb3IuXG4gID4gLm1hdC10YWItaGVhZGVyIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4gID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC1yaXBwbGUtZWxlbWVudCxcbiAgPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuMTIpO1xuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtdGFiLWdyb3VwIHtcbiAgICBmb250LWZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IHR5cG9ncmFwaHktdXRpbHMuZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiB0aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogdGhlbWluZy5wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC10YWJzJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvZGVuc2l0eS9wcml2YXRlL2NvbXBhdGliaWxpdHknO1xuQHVzZSAnLi4vY29yZS9zdHlsZS92YXJpYWJsZXMnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuQHVzZSAnLi90b29sYmFyLXZhcmlhYmxlcyc7XG5cbkBtaXhpbiBfaGVpZ2h0KCRoZWlnaHQpIHtcbiAgLm1hdC10b29sYmFyLW11bHRpcGxlLXJvd3Mge1xuICAgIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG4gIH1cbiAgLm1hdC10b29sYmFyLXJvdywgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICAgIGhlaWdodDogJGhlaWdodDtcbiAgfVxufVxuXG5AbWl4aW4gX3BhbGV0dGUtc3R5bGVzKCRwYWxldHRlKSB7XG4gIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcGFsZXR0ZSk7XG4gIGNvbG9yOiB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xufVxuXG5AbWl4aW4gX2Zvcm0tZmllbGQtb3ZlcnJpZGVzIHtcbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSxcbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1zZWxlY3QtdmFsdWUsXG4gIC5tYXQtc2VsZWN0LWFycm93LFxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC5nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC5nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC5nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLmdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgYXBwLWJhcik7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9wYWxldHRlLXN0eWxlcygkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9wYWxldHRlLXN0eWxlcygkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9wYWxldHRlLXN0eWxlcygkd2Fybik7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgX2Zvcm0tZmllbGQtb3ZlcnJpZGVzO1xuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtdG9vbGJhcixcbiAgLm1hdC10b29sYmFyIGgxLFxuICAubWF0LXRvb2xiYXIgaDIsXG4gIC5tYXQtdG9vbGJhciBoMyxcbiAgLm1hdC10b29sYmFyIGg0LFxuICAubWF0LXRvb2xiYXIgaDUsXG4gIC5tYXQtdG9vbGJhciBoNiB7XG4gICAgQGluY2x1ZGUgdHlwb2dyYXBoeS11dGlscy50eXBvZ3JhcGh5LWxldmVsKCRjb25maWcsIHRpdGxlKTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuQG1peGluIGRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkZGVuc2l0eS1zY2FsZTogdGhlbWluZy5nZXQtZGVuc2l0eS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRoZWlnaHQtZGVza3RvcDogY29tcGF0aWJpbGl0eS5wcml2YXRlLWRlbnNpdHktcHJvcC12YWx1ZShcbiAgICAgIHRvb2xiYXItdmFyaWFibGVzLiRkZXNrdG9wLWRlbnNpdHktY29uZmlnLCAkZGVuc2l0eS1zY2FsZSwgaGVpZ2h0KTtcbiAgJGhlaWdodC1tb2JpbGU6IGNvbXBhdGliaWxpdHkucHJpdmF0ZS1kZW5zaXR5LXByb3AtdmFsdWUoXG4gICAgICB0b29sYmFyLXZhcmlhYmxlcy4kbW9iaWxlLWRlbnNpdHktY29uZmlnLCAkZGVuc2l0eS1zY2FsZSwgaGVpZ2h0KTtcblxuICBAaW5jbHVkZSBjb21wYXRpYmlsaXR5LnByaXZhdGUtZGVuc2l0eS1sZWdhY3ktY29tcGF0aWJpbGl0eSgpIHtcbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgaGVpZ2h0IGZvciB0aGUgdG9vbGJhci5cbiAgICBAaW5jbHVkZSBfaGVpZ2h0KCRoZWlnaHQtZGVza3RvcCk7XG5cbiAgICAvLyBBcyBwZXIgc3BlY3MsIHRvb2xiYXJzIHNob3VsZCBoYXZlIGEgZGlmZmVyZW50IGhlaWdodCBpbiBtb2JpbGUgZGV2aWNlcy4gVGhpcyBoYXMgYmVlblxuICAgIC8vIHNwZWNpZmllZCBpbiB0aGUgb2xkIGd1aWRlbGluZXMgYW5kIGlzIHN0aWxsIG9ic2VydmFibGUgaW4gdGhlIG5ldyBzcGVjaWZpY2F0aW9ucyBieVxuICAgIC8vIGxvb2tpbmcgYXQgdGhlIHNwZWMgaW1hZ2VzLiBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvYXBwLWJhcnMtdG9wLmh0bWwjYW5hdG9teVxuICAgIEBtZWRpYSAodmFyaWFibGVzLiR4c21hbGwpIHtcbiAgICAgIEBpbmNsdWRlIF9oZWlnaHQoJGhlaWdodC1tb2JpbGUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtdG9vbGJhcicpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LXV0aWxzJztcblxuJHRhcmdldC1oZWlnaHQ6IDIycHg7XG4kZm9udC1zaXplOiAxMHB4O1xuJHZlcnRpY2FsLXBhZGRpbmc6ICgkdGFyZ2V0LWhlaWdodCAtICRmb250LXNpemUpIC8gMjtcblxuJGhhbmRzZXQtdGFyZ2V0LWhlaWdodDogMzBweDtcbiRoYW5kc2V0LWZvbnQtc2l6ZTogMTRweDtcbiRoYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc6XG4gICAgKCRoYW5kc2V0LXRhcmdldC1oZWlnaHQgLSAkaGFuZHNldC1mb250LXNpemUpIC8gMjtcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLmdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LXRvb2x0aXAge1xuICAgIGJhY2tncm91bmQ6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYmFja2dyb3VuZCwgdG9vbHRpcCwgMC45KTtcbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHR5cG9ncmFwaHkucHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKFxuICAgICAgdGhlbWluZy5nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSkpO1xuICAubWF0LXRvb2x0aXAge1xuICAgIGZvbnQtZmFtaWx5OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJHZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICR2ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG5cbiAgLm1hdC10b29sdGlwLWhhbmRzZXQge1xuICAgIGZvbnQtc2l6ZTogJGhhbmRzZXQtZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtdG9vbHRpcCcpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvcmUvZGVuc2l0eS9wcml2YXRlL2NvbXBhdGliaWxpdHknO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuQHVzZSAnLi90cmVlLXZhcmlhYmxlcyc7XG5cbkBtaXhpbiBjb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC5nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAuZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdHJlZSB7XG4gICAgYmFja2dyb3VuZDogdGhlbWluZy5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIHR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiB0eXBvZ3JhcGh5LnByaXZhdGUtdHlwb2dyYXBoeS10by0yMDE0LWNvbmZpZyhcbiAgICAgIHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpKTtcbiAgLm1hdC10cmVlIHtcbiAgICBmb250LWZhbWlseTogdHlwb2dyYXBoeS11dGlscy5mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtdHJlZS1ub2RlLFxuICAubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICAgIGZvbnQtd2VpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgZm9udC1zaXplOiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cbkBtaXhpbiBkZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGRlbnNpdHktc2NhbGU6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkaGVpZ2h0OiBjb21wYXRpYmlsaXR5LnByaXZhdGUtZGVuc2l0eS1wcm9wLXZhbHVlKHRyZWUtdmFyaWFibGVzLiRkZW5zaXR5LWNvbmZpZyxcbiAgICAkZGVuc2l0eS1zY2FsZSwgaGVpZ2h0KTtcblxuICBAaW5jbHVkZSBjb21wYXRpYmlsaXR5LnByaXZhdGUtZGVuc2l0eS1sZWdhY3ktY29tcGF0aWJpbGl0eSgpIHtcbiAgICAubWF0LXRyZWUtbm9kZSB7XG4gICAgICBtaW4taGVpZ2h0OiAkaGVpZ2h0O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtdHJlZScpIHtcbiAgICAkY29sb3I6IHRoZW1pbmcuZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiB0aGVtaW5nLmdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIGRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHktdXRpbHMnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3BhbGV0dGUnO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9wcml2YXRlJztcblxuQG1peGluIGNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLmdldCgkY29uZmlnLCBpcy1kYXJrKTtcbiAgJGFjY2VudDogbWFwLmdldCgkY29uZmlnLCBhY2NlbnQpO1xuXG4gIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XG4gICAgLy8gVXNlIHRoZSBwcmltYXJ5IHRleHQgb24gdGhlIGRhcmsgdGhlbWUsIGV2ZW4gdGhvdWdoIHRoZSBsaWdodGVyIG9uZSB1c2VzXG4gICAgLy8gYSBzZWNvbmRhcnksIGJlY2F1c2UgdGhlIGNvbnRyYXN0IG9uIHRoZSBsaWdodCBwcmltYXJ5IHRleHQgaXMgcG9vci5cbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsIHBhbGV0dGUuJGRhcmstcHJpbWFyeS10ZXh0LCBwYWxldHRlLiRsaWdodC1zZWNvbmRhcnktdGV4dCk7XG4gICAgYmFja2dyb3VuZDogaWYoJGlzLWRhcmstdGhlbWUsIG1hcC5nZXQocGFsZXR0ZS4kZ3JleS1wYWxldHRlLCA1MCksICMzMjMyMzIpO1xuXG4gICAgQGluY2x1ZGUgcHJpdmF0ZS5wcml2YXRlLXRoZW1lLWVsZXZhdGlvbig2LCAkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCBpbmhlcml0LCB0aGVtaW5nLmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCwgdGV4dCkpO1xuICB9XG59XG5cbkBtaXhpbiB0eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogdHlwb2dyYXBoeS5wcml2YXRlLXR5cG9ncmFwaHktdG8tMjAxNC1jb25maWcoXG4gICAgICB0aGVtaW5nLmdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSk7XG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IGluaGVyaXQ7XG4gICAgICBzaXplOiBpbmhlcml0O1xuICAgICAgd2VpZ2h0OiB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IHRoZW1pbmcucHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc25hY2stYmFyJykge1xuICAgICRjb2xvcjogdGhlbWluZy5nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IHRoZW1pbmcuZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IHRoZW1pbmcuZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX2RlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pages_module_ts-es5.js.map