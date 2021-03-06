(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmaterialpro"] = self["webpackChunkmaterialpro"] || []).push([["src_app_material-component_material_module_ts"], {
    /***/
    89549:
    /*!*****************************************************************!*\
      !*** ./src/app/material-component/buttons/buttons.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonsComponent": function ButtonsComponent() {
          return (
            /* binding */
            _ButtonsComponent
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      42542);

      var _ButtonsComponent = function _ButtonsComponent() {
        _classCallCheck(this, _ButtonsComponent);
      };

      _ButtonsComponent.??fac = function ButtonsComponent_Factory(t) {
        return new (t || _ButtonsComponent)();
      };

      _ButtonsComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _ButtonsComponent,
        selectors: [["app-buttons"]],
        decls: 133,
        vars: 1,
        consts: [["href", "https://material.angular.io/components/button/overview", "target", "_blank"], [1, "bg-light"], [1, "button-row"], ["mat-button", ""], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent"], ["mat-button", "", "color", "warn"], ["mat-button", "", "disabled", ""], ["mat-button", "", "routerLink", "."], ["mat-raised-button", ""], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "routerLink", "."], ["mat-icon-button", ""], ["aria-label", "Example icon-button with a heart icon"], ["mat-icon-button", "", "color", "primary"], ["mat-icon-button", "", "color", "accent"], ["mat-icon-button", "", "color", "warn"], ["mat-icon-button", "", "disabled", ""], ["mat-fab", ""], ["mat-fab", "", "color", "primary"], ["mat-fab", "", "color", "accent"], ["mat-fab", "", "color", "warn"], ["mat-fab", "", "disabled", ""], ["mat-fab", "", "routerLink", "."], ["mat-mini-fab", ""], ["mat-mini-fab", "", "color", "primary"], ["mat-mini-fab", "", "color", "accent"], ["mat-mini-fab", "", "color", "warn"], ["mat-mini-fab", "", "disabled", ""], ["mat-mini-fab", "", "routerLink", "."], ["group", "matButtonToggleGroup"], ["value", "left"], ["value", "center"], ["value", "right"], ["value", "justify", "disabled", ""], [1, "m-t-20"]],
        template: function ButtonsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Angular Material buttons are native ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " button or a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " elements enhanced with Material Design styling and ink ripples. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Official Doc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Basic Buttons ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "<button mat-button color=\"primary\">Primary</button>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Accent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Warn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Raised Buttons ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "<button mat-raised-button color=\"primary\">Primary</button>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Accent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Warn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Icon Buttons ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "<button mat-icon-button color=\"primary\"> ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "\xA0\xA0\xA0\xA0<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "</button>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Fab Buttons ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "<button mat-fab color=\"primary\">Primary</button>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Accent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Warn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Mini Fab Buttons ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "<button mat-mini-fab color=\"primary\">Primary</button>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Base");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Pri");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Acc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Warn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Dis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Button toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "mat-button-toggle-group", null, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "mat-button-toggle", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "format_align_left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "mat-button-toggle", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "format_align_center");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "mat-button-toggle", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "format_align_right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "mat-button-toggle", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "format_align_justify");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](118);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Selected value: ", _r0.value, "");
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__.MatButtonToggle],
        styles: [".example-button-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUNGIiwiZmlsZSI6ImJ1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1idXR0b24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59Il19 */"]
      });
      /***/
    },

    /***/
    89332:
    /*!*************************************************************!*\
      !*** ./src/app/material-component/cards/cards.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CardsComponent": function CardsComponent() {
          return (
            /* binding */
            _CardsComponent
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      var _CardsComponent = function _CardsComponent() {
        _classCallCheck(this, _CardsComponent);
      };

      _CardsComponent.??fac = function CardsComponent_Factory(t) {
        return new (t || _CardsComponent)();
      };

      _CardsComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _CardsComponent,
        selectors: [["app-cards"]],
        decls: 167,
        vars: 0,
        consts: [["href", "https://material.angular.io/components/card/overview", "target", "_blank"], ["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "33.33%", "fxFlex", "100"], ["mat-card-avatar", ""], ["src", "assets/images/users/1.jpg", 1, "img-fluid", "img-circle"], ["mat-card-image", "", "src", "assets/images/big/img4.jpg", "alt", "Photo of a Shiba Inu"], ["mat-raised-button", "", "color", "accent"], ["mat-button", ""], ["src", "assets/images/users/2.jpg", 1, "img-fluid", "img-circle"], ["mat-card-image", "", "src", "assets/images/big/img3.jpg", "alt", "Photo of a Shiba Inu"], ["src", "assets/images/users/3.jpg", 1, "img-fluid", "img-circle"], ["mat-card-image", "", "src", "assets/images/big/img5.jpg", "alt", "Photo of a Shiba Inu"], ["fxLayout", "row"], ["fxFlex.gt-sm", "100%"], ["mat-icon-button", "", "color", "accent"], ["mat-icon-button", ""], ["fxFlex.gt-sm", "50%", "fxFlex", "100"], [1, "m-0"], [1, "bg-primary", "text-white"], [1, "bg-info", "text-white"], [1, "bg-danger", "text-white"], [1, "bg-warning", "text-white"], ["fxFlex.gt-sm", "33.33%"], [1, "bg-inverse", "text-white"], [1, "bg-success", "text-white"]],
        template: function CardsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Simple card just use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "<mat-card> <mat-card-content> ... </mat-card-content> </mat-card>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Official Doc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Shiba Inu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Dog Breed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "LIKE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "SHARE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Shiba Inu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Dog Breed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "LIKE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "SHARE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Shiba Inu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Dog Breed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "LIKE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "SHARE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Card with title and footer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "<mat-card-title>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "This is the subtitle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "<mat-card-subtitle>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "share");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Half width Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "This is the subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Half width Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "This is the subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "mat-card-header", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Card bg-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "This is the subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "mat-card-header", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Card bg-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "This is the subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "mat-card-header", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Card bg-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "This is the subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "mat-card-header", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Card bg-warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "This is the subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "mat-card-header", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Card bg-inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "This is the subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "mat-card-header", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Card bg-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "This is the subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    80327:
    /*!*************************************************************!*\
      !*** ./src/app/material-component/chips/chips.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChipsComponent": function ChipsComponent() {
          return (
            /* binding */
            _ChipsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      36461);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      93738);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/chips */
      58341);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      function ChipsComponent_mat_chip_29_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ChipsComponent_mat_chip_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-chip", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("remove", function ChipsComponent_mat_chip_29_Template_mat_chip_remove_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

            var fruit_r3 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r5.remove(fruit_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ChipsComponent_mat_chip_29_mat_icon_2_Template, 2, 0, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var fruit_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", fruit_r3.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.removable);
        }
      }

      function ChipsComponent_mat_chip_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-chip", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focus", function ChipsComponent_mat_chip_41_Template_mat_chip_focus_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var aColor_r7 = restoredCtx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r8.color = aColor_r7.color;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var aColor_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("color", aColor_r7.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", aColor_r7.name, " ");
        }
      }

      var _ChipsComponent = /*#__PURE__*/function () {
        function _ChipsComponent() {
          _classCallCheck(this, _ChipsComponent);

          this.visible = true;
          this.selectable = true;
          this.removable = true;
          this.addOnBlur = true; // Enter, comma

          this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.COMMA];
          this.fruits = [{
            name: 'Lemon'
          }, {
            name: 'Lime'
          }, {
            name: 'Apple'
          }];
          this.availableColors = [{
            name: 'none',
            color: 'gray'
          }, {
            name: 'Primary',
            color: 'primary'
          }, {
            name: 'Accent',
            color: 'accent'
          }, {
            name: 'Warn',
            color: 'warn'
          }];
        }

        _createClass(_ChipsComponent, [{
          key: "add",
          value: function add(event) {
            var input = event.input;
            var value = event.value; // Add our fruit

            if ((value || '').trim()) {
              this.fruits.push({
                name: value.trim()
              });
            } // Reset the input value


            if (input) {
              input.value = '';
            }
          }
        }, {
          key: "remove",
          value: function remove(fruit) {
            var index = this.fruits.indexOf(fruit);

            if (index >= 0) {
              this.fruits.splice(index, 1);
            }
          }
        }]);

        return _ChipsComponent;
      }();

      _ChipsComponent.??fac = function ChipsComponent_Factory(t) {
        return new (t || _ChipsComponent)();
      };

      _ChipsComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _ChipsComponent,
        selectors: [["app-chips"]],
        decls: 42,
        vars: 5,
        consts: [[1, ""], ["href", "https://material.angular.io/components/chips/overview"], ["color", "primary", "selected", "true"], ["color", "accent", "selected", "true"], [1, "demo-chip-list"], ["chipList", ""], [3, "selectable", "removable", "remove", 4, "ngFor", "ngForOf"], ["placeholder", "New fruit...", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [1, "mat-chip-list-stacked"], ["selected", "true", 3, "color", "focus", 4, "ngFor", "ngForOf"], [3, "selectable", "removable", "remove"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], ["selected", "true", 3, "color", "focus"]],
        template: function ChipsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Basic Chips");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "<mat-chip>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "displays a list of values as individual, keyboard accessible, chips. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "code", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Official Component");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "One fish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-chip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Two fish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-chip", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Primary fish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-chip", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Accent fish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Chip input");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "The MatChipInput directive can be used together with a chip-list to streamline the interaction between the two components. This directive adds chip-specific behaviors to the input element within for adding and removing chips. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-chip-list", null, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, ChipsComponent_mat_chip_29_Template, 3, 4, "mat-chip", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("matChipInputTokenEnd", function ChipsComponent_Template_input_matChipInputTokenEnd_30_listener($event) {
              return ctx.add($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Stacked Chips");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "You can also stack the chips if you want them on top of each other and/or use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "(focus)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " event to run custom code.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "mat-chip-list", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, ChipsComponent_mat_chip_41_Template, 2, 2, "mat-chip", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.fruits);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.availableColors);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__.MatChip, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__.MatChipInput, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__.MatChipRemove],
        styles: [".demo-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6ImNoaXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tY2hpcC1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
      });
      /***/
    },

    /***/
    6766:
    /*!***************************************************************!*\
      !*** ./src/app/material-component/dialog/dialog.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DialogOverviewExampleDialogComponent": function DialogOverviewExampleDialogComponent() {
          return (
            /* binding */
            _DialogOverviewExampleDialogComponent
          );
        },

        /* harmony export */
        "DialogComponent": function DialogComponent() {
          return (
            /* binding */
            _DialogComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      93738);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function DialogComponent_li_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " You chose: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.animal);
        }
      }

      var _DialogOverviewExampleDialogComponent = /*#__PURE__*/function () {
        function _DialogOverviewExampleDialogComponent(dialogRef, data) {
          _classCallCheck(this, _DialogOverviewExampleDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(_DialogOverviewExampleDialogComponent, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }]);

        return _DialogOverviewExampleDialogComponent;
      }();

      _DialogOverviewExampleDialogComponent.??fac = function DialogOverviewExampleDialogComponent_Factory(t) {
        return new (t || _DialogOverviewExampleDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
      };

      _DialogOverviewExampleDialogComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _DialogOverviewExampleDialogComponent,
        selectors: [["app-dialog-overview-example-dialog"]],
        decls: 12,
        vars: 3,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", "tabindex", "1", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", "tabindex", "2", 3, "mat-dialog-close"], ["mat-button", "", "tabindex", "-1", 3, "click"]],
        template: function DialogOverviewExampleDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "What's your favorite animal?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DialogOverviewExampleDialogComponent_Template_input_ngModelChange_6_listener($event) {
              return ctx.data.animal = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Ok");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DialogOverviewExampleDialogComponent_Template_button_click_10_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "No Thanks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Hi ", ctx.data.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.data.animal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("mat-dialog-close", ctx.data.animal);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose],
        encapsulation: 2
      });

      var _DialogComponent = /*#__PURE__*/function () {
        function _DialogComponent(dialog) {
          _classCallCheck(this, _DialogComponent);

          this.dialog = dialog;
        }

        _createClass(_DialogComponent, [{
          key: "openDialog",
          value: function openDialog() {
            var _this = this;

            var dialogRef = this.dialog.open(_DialogOverviewExampleDialogComponent, {
              width: '250px',
              data: {
                name: this.name,
                animal: this.animal
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
              _this.animal = result;
            });
          }
        }]);

        return _DialogComponent;
      }();

      _DialogComponent.??fac = function DialogComponent_Factory(t) {
        return new (t || _DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog));
      };

      _DialogComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _DialogComponent,
        selectors: [["app-dialog"]],
        decls: 19,
        vars: 2,
        consts: [["fxLayout", "row"], ["fxFlex.gt-sm", "100%"], ["matInput", "", "placeholder", "What's your name?", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"], [4, "ngIf"]],
        template: function DialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Dialog Overview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "<MatDialog>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " service can be used to open modal dialogs with Material Design styling and animations.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DialogComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DialogComponent_Template_button_click_16_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Pick one");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, DialogComponent_li_18_Template, 4, 1, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.animal);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardSubtitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    24262:
    /*!*********************************************************************!*\
      !*** ./src/app/material-component/expansion/expansion.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExpansionComponent": function ExpansionComponent() {
          return (
            /* binding */
            _ExpansionComponent
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


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/expansion */
      1562);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);

      var _ExpansionComponent = /*#__PURE__*/function () {
        function _ExpansionComponent() {
          _classCallCheck(this, _ExpansionComponent);

          this.panelOpenState = false;
          this.step = 0;
        }

        _createClass(_ExpansionComponent, [{
          key: "setStep",
          value: function setStep(index) {
            this.step = index;
          }
        }, {
          key: "nextStep",
          value: function nextStep() {
            this.step++;
          }
        }, {
          key: "prevStep",
          value: function prevStep() {
            this.step--;
          }
        }]);

        return _ExpansionComponent;
      }();

      _ExpansionComponent.??fac = function ExpansionComponent_Factory(t) {
        return new (t || _ExpansionComponent)();
      };

      _ExpansionComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _ExpansionComponent,
        selectors: [["app-expansion"]],
        decls: 82,
        vars: 5,
        consts: [[1, ""], ["href", "https://material.angular.io/components/expansion/overview"], ["matInput", "", "placeholder", "First name"], ["matInput", "", "placeholder", "Age"], [3, "opened", "closed"], [1, "example-headers-align"], ["hideToggle", "true", 3, "expanded", "opened"], ["matInput", "", "type", "number", "min", "1", "placeholder", "Age"], ["mat-button", "", "color", "primary", 3, "click"], ["matInput", "", "placeholder", "Country"], ["mat-button", "", "color", "warn", 3, "click"], ["matInput", "", "placeholder", "Date", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]],
        template: function ExpansionComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Basic Expansion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Expansion panel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "code", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Official Component");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Personal data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Type your name and age ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-expansion-panel", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("opened", function ExpansionComponent_Template_mat_expansion_panel_opened_20_listener() {
              return ctx.panelOpenState = true;
            })("closed", function ExpansionComponent_Template_mat_expansion_panel_closed_20_listener() {
              return ctx.panelOpenState = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Self aware panel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "I'm visible because I am open");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Expansion panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-accordion", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-expansion-panel", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("opened", function ExpansionComponent_Template_mat_expansion_panel_opened_35_listener() {
              return ctx.setStep(0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Personal data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " Type your name and age ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "mat-action-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ExpansionComponent_Template_button_click_48_listener() {
              return ctx.nextStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "mat-expansion-panel", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("opened", function ExpansionComponent_Template_mat_expansion_panel_opened_50_listener() {
              return ctx.setStep(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " Destination ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " Type the country name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "map");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "mat-action-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ExpansionComponent_Template_button_click_61_listener() {
              return ctx.prevStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ExpansionComponent_Template_button_click_63_listener() {
              return ctx.nextStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "mat-expansion-panel", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("opened", function ExpansionComponent_Template_mat_expansion_panel_opened_65_listener() {
              return ctx.setStep(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " Day of the trip ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "mat-panel-description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " Inform the date you wish to travel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "date_range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focus", function ExpansionComponent_Template_input_focus_74_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](76);

              return _r0.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "mat-datepicker", null, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "mat-action-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ExpansionComponent_Template_button_click_78_listener() {
              return ctx.prevStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ExpansionComponent_Template_button_click_80_listener() {
              return ctx.nextStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "End");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Currently I am ", ctx.panelOpenState ? "open" : "closed", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("expanded", ctx.step === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("expanded", ctx.step === 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("expanded", ctx.step === 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matDatepicker", _r0);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelDescription, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelActionRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepicker],
        styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGFuc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiZXhwYW5zaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsIFxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBmbGV4LWJhc2lzOiAwO1xufVxuXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    25100:
    /*!***********************************************************!*\
      !*** ./src/app/material-component/grid/grid.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GridComponent": function GridComponent() {
          return (
            /* binding */
            _GridComponent
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


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/grid-list */
      4929);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function GridComponent_mat_grid_tile_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-grid-tile", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var tile_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background", tile_r1.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("colspan", tile_r1.cols)("rowspan", tile_r1.rows);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", tile_r1.text, " ");
        }
      }

      var _GridComponent = function _GridComponent() {
        _classCallCheck(this, _GridComponent);

        this.tiles = [{
          text: 'One',
          cols: 3,
          rows: 1,
          color: 'lightblue'
        }, {
          text: 'Two',
          cols: 1,
          rows: 2,
          color: 'lightgreen'
        }, {
          text: 'Three',
          cols: 1,
          rows: 1,
          color: 'lightpink'
        }, {
          text: 'Four',
          cols: 2,
          rows: 1,
          color: '#DDBDF1'
        }];
      };

      _GridComponent.??fac = function GridComponent_Factory(t) {
        return new (t || _GridComponent)();
      };

      _GridComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _GridComponent,
        selectors: [["app-grid"]],
        decls: 34,
        vars: 1,
        consts: [["fxLayout", "row"], ["fxFlex.gt-sm", "100%"], ["href", "https://material.io/guidelines/components/grid-lists.html"], ["cols", "4", "rowHeight", "100px"], [3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], ["cols", "2", "rowHeight", "2:1"], [3, "colspan", "rowspan"]],
        template: function GridComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Fixed height grid-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "<mat-grid-list>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " is a two-dimensional list view that arranges cells into grid-based layout. See Material Design spec. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Official Doc here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-grid-list", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, GridComponent_mat_grid_tile_14_Template, 2, 5, "mat-grid-tile", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Basic grid-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "<mat-grid-list>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " is a two-dimensional list view that arranges cells into grid-based layout. See Material Design spec. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-grid-list", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.tiles);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__.MatGridList, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__.MatGridTile],
        styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6ImdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    34058:
    /*!*************************************************************!*\
      !*** ./src/app/material-component/lists/lists.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListsComponent": function ListsComponent() {
          return (
            /* binding */
            _ListsComponent
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/divider */
      1769);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      function ListsComponent_mat_list_option_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-list-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var shoe_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", shoe_r6, " ");
        }
      }

      function ListsComponent_mat_list_item_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var message_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r7.from);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r7.subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r7.content);
        }
      }

      function ListsComponent_mat_list_item_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var message_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("alt", "Image of ", message_r8.from, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", message_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r8.from);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r8.content);
        }
      }

      function ListsComponent_mat_list_item_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "folder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var folder_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](folder_r9.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 2, folder_r9.updated), " ");
        }
      }

      function ListsComponent_mat_list_item_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "note");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var note_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](note_r10.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 2, note_r10.updated), " ");
        }
      }

      var _ListsComponent = function _ListsComponent() {
        _classCallCheck(this, _ListsComponent);

        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        this.messages = [{
          from: 'Nirav joshi (nbj@gmail.com)',
          image: 'assets/images/users/1.jpg',
          subject: 'Material angular',
          content: 'This is the material angular template'
        }, {
          from: 'Sunil joshi (sbj@gmail.com)',
          image: 'assets/images/users/2.jpg',
          subject: 'Wrappixel',
          content: 'We have wrappixel launched'
        }, {
          from: 'Vishal Bhatt (bht@gmail.com)',
          image: 'assets/images/users/3.jpg',
          subject: 'Task list',
          content: 'This is the latest task hasbeen done'
        }];
        this.folders = [{
          name: 'Photos',
          updated: new Date('1/1/16')
        }, {
          name: 'Recipes',
          updated: new Date('1/17/16')
        }, {
          name: 'Work',
          updated: new Date('1/28/16')
        }];
        this.notes = [{
          name: 'Vacation Itinerary',
          updated: new Date('2/20/16')
        }, {
          name: 'Kitchen Remodel',
          updated: new Date('1/18/16')
        }];
      };

      _ListsComponent.??fac = function ListsComponent_Factory(t) {
        return new (t || _ListsComponent)();
      };

      _ListsComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _ListsComponent,
        selectors: [["app-lists"]],
        decls: 70,
        vars: 6,
        consts: [["fxLayout", "row"], ["fxFlex.gt-sm", "100%"], ["href", "https://material.angular.io/components/list/overview"], ["role", "list"], ["role", "listitem"], ["fxFlex.gt-sm", "50%"], ["shoes", ""], [4, "ngFor", "ngForOf"], [1, "p-b-0", "m-b-0"], [1, "p-t-0"], ["mat-subheader", ""], ["matLine", ""], ["matLine", "", 1, "text-muted"], ["mat-list-avatar", "", 3, "src", "alt"], ["mat-list-icon", ""], ["mat-line", ""]],
        template: function ListsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Basic list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "<mat-list>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " is a container component that wraps and formats a series of line items. As the base list component, it provides Material Design styling, but no behavior of its own.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Official Doc here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-list", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-list-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Item 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-list-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Item 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-list-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Item 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "List with selection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "A selection list provides an interface for selecting values, where each list item is an option.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-selection-list", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, ListsComponent_mat_list_option_30_Template, 2, 1, "mat-list-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Multiline lists");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "A selection list provides an interface for selecting values, where each list item is an option.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, ListsComponent_mat_list_item_41_Template, 7, 3, "mat-list-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Multiline lists");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "A selection list provides an interface for selecting values, where each list item is an option.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, ListsComponent_mat_list_item_51_Template, 6, 4, "mat-list-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "mat-card-content", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "List with sections");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "A selection list provides an interface for selecting values, where each list item is an option.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "mat-card-content", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "h3", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Folders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](64, ListsComponent_mat_list_item_64_Template, 8, 4, "mat-list-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "h3", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Notes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](69, ListsComponent_mat_list_item_69_Template, 8, 4, "mat-list-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.typesOfShoes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Options selected: ", _r0.selectedOptions.selected.length, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.messages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.messages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.folders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.notes);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatSelectionList, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListSubheaderCssMatStyler, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListAvatarCssMatStyler, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListIconCssMatStyler],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0cy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    48877:
    /*!*******************************************************!*\
      !*** ./src/app/material-component/material.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaterialComponentsModule": function MaterialComponentsModule() {
          return (
            /* binding */
            _MaterialComponentsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _demo_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../demo-material-module */
      55408);
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/cdk/table */
      20552);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _material_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./material.routing */
      50256);
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      89549);
      /* harmony import */


      var _cards_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cards/cards.component */
      89332);
      /* harmony import */


      var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./grid/grid.component */
      25100);
      /* harmony import */


      var _lists_lists_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lists/lists.component */
      34058);
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menu/menu.component */
      16158);
      /* harmony import */


      var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tabs/tabs.component */
      55623);
      /* harmony import */


      var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./stepper/stepper.component */
      73386);
      /* harmony import */


      var _expansion_expansion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./expansion/expansion.component */
      24262);
      /* harmony import */


      var _chips_chips_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./chips/chips.component */
      80327);
      /* harmony import */


      var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./toolbar/toolbar.component */
      11485);
      /* harmony import */


      var _progress_snipper_progress_snipper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./progress-snipper/progress-snipper.component */
      97202);
      /* harmony import */


      var _progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./progress/progress.component */
      46076);
      /* harmony import */


      var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./dialog/dialog.component */
      6766);
      /* harmony import */


      var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./tooltip/tooltip.component */
      16563);
      /* harmony import */


      var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./snackbar/snackbar.component */
      41907);
      /* harmony import */


      var _slider_slider_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./slider/slider.component */
      65060);
      /* harmony import */


      var _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./slide-toggle/slide-toggle.component */
      28223);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /*import { HttpModule } from '@angular/http';*/
      // replacement for 'HttpModule' for upgrade


      var _MaterialComponentsModule = function _MaterialComponentsModule() {
        _classCallCheck(this, _MaterialComponentsModule);
      };

      _MaterialComponentsModule.??fac = function MaterialComponentsModule_Factory(t) {
        return new (t || _MaterialComponentsModule)();
      };

      _MaterialComponentsModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineNgModule"]({
        type: _MaterialComponentsModule
      });
      _MaterialComponentsModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["????defineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule.forChild(_material_routing__WEBPACK_IMPORTED_MODULE_1__.MaterialRoutes), _demo_material_module__WEBPACK_IMPORTED_MODULE_0__.DemoMaterialModule,
        /*HttpModule,*/
        _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__.FlexLayoutModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_25__.CdkTableModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["????setNgModuleScope"](_MaterialComponentsModule, {
          declarations: [_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__.ButtonsComponent, _cards_cards_component__WEBPACK_IMPORTED_MODULE_3__.CardsComponent, _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__.GridComponent, _lists_lists_component__WEBPACK_IMPORTED_MODULE_5__.ListsComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__.MenuComponent, _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_7__.TabsComponent, _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_8__.StepperComponent, _expansion_expansion_component__WEBPACK_IMPORTED_MODULE_9__.ExpansionComponent, _chips_chips_component__WEBPACK_IMPORTED_MODULE_10__.ChipsComponent, _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__.ToolbarComponent, _progress_snipper_progress_snipper_component__WEBPACK_IMPORTED_MODULE_12__.ProgressSnipperComponent, _progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__.DialogComponent, _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__.DialogOverviewExampleDialogComponent, _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_15__.TooltipComponent, _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_16__.SnackbarComponent, _slider_slider_component__WEBPACK_IMPORTED_MODULE_17__.SliderComponent, _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_18__.SlideToggleComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, _demo_material_module__WEBPACK_IMPORTED_MODULE_0__.DemoMaterialModule,
          /*HttpModule,*/
          _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__.FlexLayoutModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_25__.CdkTableModule]
        });
      })();
      /***/

    },

    /***/
    50256:
    /*!********************************************************!*\
      !*** ./src/app/material-component/material.routing.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaterialRoutes": function MaterialRoutes() {
          return (
            /* binding */
            _MaterialRoutes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      89549);
      /* harmony import */


      var _cards_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cards/cards.component */
      89332);
      /* harmony import */


      var _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./grid/grid.component */
      25100);
      /* harmony import */


      var _lists_lists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lists/lists.component */
      34058);
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./menu/menu.component */
      16158);
      /* harmony import */


      var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs/tabs.component */
      55623);
      /* harmony import */


      var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./stepper/stepper.component */
      73386);
      /* harmony import */


      var _expansion_expansion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./expansion/expansion.component */
      24262);
      /* harmony import */


      var _chips_chips_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./chips/chips.component */
      80327);
      /* harmony import */


      var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./toolbar/toolbar.component */
      11485);
      /* harmony import */


      var _progress_snipper_progress_snipper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./progress-snipper/progress-snipper.component */
      97202);
      /* harmony import */


      var _progress_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./progress/progress.component */
      46076);
      /* harmony import */


      var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./dialog/dialog.component */
      6766);
      /* harmony import */


      var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./tooltip/tooltip.component */
      16563);
      /* harmony import */


      var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./snackbar/snackbar.component */
      41907);
      /* harmony import */


      var _slider_slider_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./slider/slider.component */
      65060);
      /* harmony import */


      var _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./slide-toggle/slide-toggle.component */
      28223);

      var _MaterialRoutes = [{
        path: '',
        children: [{
          path: 'button',
          component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__.ButtonsComponent
        }, {
          path: 'cards',
          component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_1__.CardsComponent
        }, {
          path: 'grid',
          component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__.GridComponent
        }, {
          path: 'lists',
          component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_3__.ListsComponent
        }, {
          path: 'menu',
          component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__.MenuComponent
        }, {
          path: 'tabs',
          component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__.TabsComponent
        }, {
          path: 'stepper',
          component: _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_6__.StepperComponent
        }, {
          path: 'expansion',
          component: _expansion_expansion_component__WEBPACK_IMPORTED_MODULE_7__.ExpansionComponent
        }, {
          path: 'chips',
          component: _chips_chips_component__WEBPACK_IMPORTED_MODULE_8__.ChipsComponent
        }, {
          path: 'toolbar',
          component: _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__.ToolbarComponent
        }, {
          path: 'progress-snipper',
          component: _progress_snipper_progress_snipper_component__WEBPACK_IMPORTED_MODULE_10__.ProgressSnipperComponent
        }, {
          path: 'progress',
          component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_11__.ProgressComponent
        }, {
          path: 'dialog',
          component: _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__.DialogComponent
        }, {
          path: 'tooltip',
          component: _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_13__.TooltipComponent
        }, {
          path: 'snackbar',
          component: _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_14__.SnackbarComponent
        }, {
          path: 'slider',
          component: _slider_slider_component__WEBPACK_IMPORTED_MODULE_15__.SliderComponent
        }, {
          path: 'slide-toggle',
          component: _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_16__.SlideToggleComponent
        }]
      }];
      /***/
    },

    /***/
    16158:
    /*!***********************************************************!*\
      !*** ./src/app/material-component/menu/menu.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuComponent": function MenuComponent() {
          return (
            /* binding */
            _MenuComponent
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      var _MenuComponent = function _MenuComponent() {
        _classCallCheck(this, _MenuComponent);
      };

      _MenuComponent.??fac = function MenuComponent_Factory(t) {
        return new (t || _MenuComponent)();
      };

      _MenuComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _MenuComponent,
        selectors: [["app-menu"]],
        decls: 141,
        vars: 9,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100%", "fxFlex", "100"], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu2", "matMenu"], ["mat-raised-button", "", "color", "accent", 3, "matMenuTriggerFor"], ["animals", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["vertebrates", "matMenu"], ["invertebrates", "matMenu"], ["fish", "matMenu"], ["amphibians", "matMenu"], ["reptiles", "matMenu"], ["mat-menu-item", "", "disabled", ""], ["menu4", "matMenu"]],
        template: function MenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Basic menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "<mat-menu>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " is a floating panel containing list of options.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-menu", null, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Item 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Item 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "On icon menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "<mat-menu>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " is a floating panel containing list of options.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-menu", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Item 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Item 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Nested menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "<mat-menu>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " is a floating panel containing list of options.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Animal index");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "mat-menu", null, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Vertebrates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Invertebrates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "mat-menu", null, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Fishes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Amphibians");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Reptiles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Birds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Mammals");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "mat-menu", null, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Insects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Molluscs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Crustaceans");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Corals");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Arachnids");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Velvet worms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Horseshoe crabs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "mat-menu", null, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Baikal oilfish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Bala shark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Ballan wrasse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Bamboo shark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Banded killifish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "mat-menu", null, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Sonoran desert toad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Western toad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Arroyo toad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Yosemite toad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "mat-menu", null, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Banded Day Gecko");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Banded Gila Monster");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Black Tree Monitor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Blue Spiny Lizard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Velociraptor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "With icon menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "<mat-menu>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, " is a floating panel containing list of options.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "mat-menu", null, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "dialpad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Redial");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "voicemail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Check voicemail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "notifications_off");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Disable alerts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](30);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](46);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](52);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](64);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](80);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](92);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](102);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](125);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r8);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    97202:
    /*!***********************************************************************************!*\
      !*** ./src/app/material-component/progress-snipper/progress-snipper.component.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProgressSnipperComponent": function ProgressSnipperComponent() {
          return (
            /* binding */
            _ProgressSnipperComponent
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


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/radio */
      82613);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/slider */
      54436);

      function ProgressSnipperComponent_section_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Progress:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-slider", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProgressSnipperComponent_section_35_Template_mat_slider_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r1.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.value);
        }
      }

      var _ProgressSnipperComponent = function _ProgressSnipperComponent() {
        _classCallCheck(this, _ProgressSnipperComponent);

        this.color = 'warn';
        this.mode = 'determinate';
        this.value = 50;
      };

      _ProgressSnipperComponent.??fac = function ProgressSnipperComponent_Factory(t) {
        return new (t || _ProgressSnipperComponent)();
      };

      _ProgressSnipperComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _ProgressSnipperComponent,
        selectors: [["app-snipper"]],
        decls: 39,
        vars: 6,
        consts: [["fxLayout", "row"], ["fxFlex.gt-sm", "100%"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], ["value", "determinate", 1, "example-margin"], ["value", "indeterminate", 1, "example-margin"], ["class", "example-section", 4, "ngIf"], [1, "example-h2"], [1, "example-margin", 3, "color", "mode", "value"], [1, "example-margin", 3, "ngModel", "ngModelChange"]],
        template: function ProgressSnipperComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Basic Progress spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "<mat-progress-spinner>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " are a circular indicators of progress and activity.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "mat-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Configurable progress spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Color:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-radio-group", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProgressSnipperComponent_Template_mat_radio_group_ngModelChange_18_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-radio-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Primary ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-radio-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Accent ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-radio-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Warn ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Mode:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-radio-group", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProgressSnipperComponent_Template_mat_radio_group_ngModelChange_29_listener($event) {
              return ctx.mode = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-radio-button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Determinate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-radio-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " Indeterminate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, ProgressSnipperComponent_section_35_Template, 4, 1, "section", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h4", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Result");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "mat-progress-spinner", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.mode == "determinate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("color", ctx.color)("mode", ctx.mode)("value", ctx.value);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatSpinner, _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__.MatRadioButton, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinner, _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__.MatSlider],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1zbmlwcGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    46076:
    /*!*******************************************************************!*\
      !*** ./src/app/material-component/progress/progress.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProgressComponent": function ProgressComponent() {
          return (
            /* binding */
            _ProgressComponent
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


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      12178);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/radio */
      82613);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/slider */
      54436);

      function ProgressComponent_section_92_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Progress:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-slider", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProgressComponent_section_92_Template_mat_slider_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r2.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.value);
        }
      }

      function ProgressComponent_section_93_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Buffer:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-slider", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProgressComponent_section_93_Template_mat_slider_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r4.bufferValue = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r1.bufferValue);
        }
      }

      var _ProgressComponent = function _ProgressComponent() {
        _classCallCheck(this, _ProgressComponent);

        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
      };

      _ProgressComponent.??fac = function ProgressComponent_Factory(t) {
        return new (t || _ProgressComponent)();
      };

      _ProgressComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _ProgressComponent,
        selectors: [["app-progress"]],
        decls: 98,
        vars: 8,
        consts: [["fxLayout", "row"], ["fxFlex.gt-sm", "100%"], ["mode", "determinate", "value", "40"], ["mode", "indeterminate", "value", "40"], ["mode", "buffer"], ["mode", "query"], ["mode", "determinate", "value", "40", "color", "primary"], ["mode", "determinate", "value", "80", "color", "accent"], ["mode", "determinate", "value", "20", "color", "warn"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], ["value", "determinate", 1, "example-margin"], ["value", "indeterminate", 1, "example-margin"], ["value", "buffer", 1, "example-margin"], ["value", "query", 1, "example-margin"], ["class", "example-section", 4, "ngIf"], [1, "example-h2"], [1, "example-margin", 3, "color", "mode", "value", "bufferValue"], [1, "example-margin", 3, "ngModel", "ngModelChange"]],
        template: function ProgressComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Determinate progress-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "<mat-progress-bar mode=\"determinate\">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " is a horizontal progress-bar for indicating progress and activity.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "mat-progress-bar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Indeterminate progress-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "<mat-progress-bar mode=\"indeterminate\">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " is a horizontal progress-bar for indicating progress and activity.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "mat-progress-bar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Buffer progress-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "<mat-progress-bar mode=\"buffer\">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " is a horizontal progress-bar for indicating progress and activity.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "mat-progress-bar", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Query progress-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "<mat-progress-bar mode=\"query\">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " is a horizontal progress-bar for indicating progress and activity.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "mat-progress-bar", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Colored progress-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "<mat-progress-bar mode=\"determinate\">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " is a horizontal progress-bar for indicating progress and activity.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "mat-progress-bar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "mat-progress-bar", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "mat-progress-bar", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Configurable progress-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "<mat-progress-bar mode=\"query\">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " is a horizontal progress-bar for indicating progress and activity.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "section", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Color:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "mat-radio-group", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProgressComponent_Template_mat_radio_group_ngModelChange_72_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "mat-radio-button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " Primary ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "mat-radio-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " Accent ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "mat-radio-button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, " Warn ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "section", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Mode:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "mat-radio-group", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProgressComponent_Template_mat_radio_group_ngModelChange_83_listener($event) {
              return ctx.mode = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "mat-radio-button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, " Determinate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "mat-radio-button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, " Indeterminate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "mat-radio-button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, " Buffer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "mat-radio-button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " Query ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](92, ProgressComponent_section_92_Template, 4, 1, "section", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](93, ProgressComponent_section_93_Template, 4, 1, "section", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h2", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Result");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "section", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "mat-progress-bar", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.mode == "determinate" || ctx.mode == "buffer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.mode == "buffer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("color", ctx.color)("mode", ctx.mode)("value", ctx.value)("bufferValue", ctx.bufferValue);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__.MatProgressBar, _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__.MatRadioButton, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__.MatSlider],
        styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oMiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmV4YW1wbGUtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uZXhhbXBsZS1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    28223:
    /*!***************************************************************************!*\
      !*** ./src/app/material-component/slide-toggle/slide-toggle.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SlideToggleComponent": function SlideToggleComponent() {
          return (
            /* binding */
            _SlideToggleComponent
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


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      45396);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/radio */
      82613);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);

      var _SlideToggleComponent = function _SlideToggleComponent() {
        _classCallCheck(this, _SlideToggleComponent);

        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
      };

      _SlideToggleComponent.??fac = function SlideToggleComponent_Factory(t) {
        return new (t || _SlideToggleComponent)();
      };

      _SlideToggleComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _SlideToggleComponent,
        selectors: [["app-slide-toggle"]],
        decls: 41,
        vars: 6,
        consts: [["fxLayout", "row"], ["fxFlex.gt-sm", "100%"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["color", "primary", "value", "primary", 1, "example-margin"], ["color", "accent", "value", "accent", 1, "example-margin"], ["color", "warn", "value", "warn", 1, "example-margin"], [1, "example-margin", 3, "ngModel", "ngModelChange"], [1, "example-h2"], [1, "example-margin", 3, "color", "checked", "disabled"]],
        template: function SlideToggleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Basic slide-toggles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "<mat-slide-toggle>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " is an on/off control that can be toggled via clicking or dragging.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-slide-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Slide me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Basic grid-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "<mat-slide-toggle>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " is an on/off control that can be toggled via clicking or dragging.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Color:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-radio-group", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SlideToggleComponent_Template_mat_radio_group_ngModelChange_23_listener($event) {
              return ctx.color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-radio-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Primary ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-radio-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Accent ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-radio-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " Warn ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-checkbox", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SlideToggleComponent_Template_mat_checkbox_ngModelChange_31_listener($event) {
              return ctx.checked = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Checked");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-checkbox", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SlideToggleComponent_Template_mat_checkbox_ngModelChange_34_listener($event) {
              return ctx.disabled = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h2", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Result");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-slide-toggle", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " Slide me! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.color);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.checked);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("color", ctx.color)("checked", ctx.checked)("disabled", ctx.disabled);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__.MatSlideToggle, _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__.MatRadioButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckbox],
        styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlLXRvZ2dsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6InNsaWRlLXRvZ2dsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWgyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5leGFtcGxlLW1hcmdpbiB7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    65060:
    /*!***************************************************************!*\
      !*** ./src/app/material-component/slider/slider.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SliderComponent": function SliderComponent() {
          return (
            /* binding */
            _SliderComponent
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


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/slider */
      54436);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _SliderComponent = function _SliderComponent() {
        _classCallCheck(this, _SliderComponent);

        this.val = 50;
        this.min = 0;
        this.max = 100;
      };

      _SliderComponent.??fac = function SliderComponent_Factory(t) {
        return new (t || _SliderComponent)();
      };

      _SliderComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _SliderComponent,
        selectors: [["app-slider"]],
        decls: 64,
        vars: 12,
        consts: [[1, ""], ["href", "https://material.angular.io/components/slider/overview"], [1, "m-b-0"], ["color", "warn", "value", "40"], ["color", "primary", "value", "40"], ["slidey", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["tick-interval", "5", "color", "warn", 3, "min", "max"], ["slider2", ""], ["disabled", ""], ["slider3", ""], ["vertical", "", "value", "50"], ["min", "1", "max", "100", "step", "20"], ["slider5", ""], ["tick-interval", "auto"], ["tick-interval", "9"], ["thumb-label", ""], ["step", "40", 3, "value"], ["step", "40", 3, "ngModel", "ngModelChange"], ["invert", "", "value", "50", "tick-interval", "5"], ["vertical", "", "invert", "", "thumb-label", "", "tick-interval", "auto", "value", "50"]],
        template: function SliderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Slider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "mat-slider allows for the selection of a value from a range via mouse, touch, or keyboard, similar to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "code", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Official Component");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Basic Slider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "mat-slider", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "value Slider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Label ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "mat-slider", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "With Min and Max");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SliderComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.min = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SliderComponent_Template_input_ngModelChange_23_listener($event) {
              return ctx.max = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "mat-slider", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Disabled Slider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "mat-slider", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Vertical slider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "mat-slider", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Selecting a value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "mat-slider", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Slider with set tick interval");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "mat-slider", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "mat-slider", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Slider with Thumb Label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "mat-slider", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Slider with one-way binding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "mat-slider", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SliderComponent_Template_input_ngModelChange_52_listener($event) {
              return ctx.val = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Slider with two-way binding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "mat-slider", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SliderComponent_Template_mat_slider_ngModelChange_55_listener($event) {
              return ctx.demo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SliderComponent_Template_input_ngModelChange_57_listener($event) {
              return ctx.demo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Inverted slider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "mat-slider", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Inverted vertical slider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "mat-slider", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](16);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](26);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](31);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _r0.value, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.min);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.max);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("min", ctx.min)("max", ctx.max);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _r1.value, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _r2.value, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _r3.value, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx.val);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.val);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.demo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.demo);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__.MatSlider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbGlkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    41907:
    /*!*******************************************************************!*\
      !*** ./src/app/material-component/snackbar/snackbar.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SnackbarComponent": function SnackbarComponent() {
          return (
            /* binding */
            _SnackbarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      93738);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      51095);

      var _SnackbarComponent = /*#__PURE__*/function () {
        function _SnackbarComponent(snackBar) {
          _classCallCheck(this, _SnackbarComponent);

          this.snackBar = snackBar;
        }

        _createClass(_SnackbarComponent, [{
          key: "openSnackBar",
          value: function openSnackBar(message, action) {
            this.snackBar.open(message, action, {
              duration: 2000
            });
          }
        }]);

        return _SnackbarComponent;
      }();

      _SnackbarComponent.??fac = function SnackbarComponent_Factory(t) {
        return new (t || _SnackbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar));
      };

      _SnackbarComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _SnackbarComponent,
        selectors: [["app-snackbar"]],
        decls: 17,
        vars: 0,
        consts: [[1, ""], ["href", "https://material.angular.io/components/snack-bar/overview"], ["matInput", "", "value", "Disco party!", "placeholder", "Message"], ["message", ""], ["matInput", "", "value", "Dance", "placeholder", "Action"], ["action", ""], ["mat-raised-button", "", "color", "warn", 3, "click"]],
        template: function SnackbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Basic snack-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "matSnackBar is a service for displaying snack-bar notifications. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "code", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Official Component");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SnackbarComponent_Template_button_click_15_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](11);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](14);

              return ctx.openSnackBar(_r0.value, _r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Show snack-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbmFja2Jhci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    73386:
    /*!*****************************************************************!*\
      !*** ./src/app/material-component/stepper/stepper.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StepperComponent": function StepperComponent() {
          return (
            /* binding */
            _StepperComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/stepper */
      94553);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      83166);

      function StepperComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Fill out your name");
        }
      }

      function StepperComponent_ng_template_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Fill out your address");
        }
      }

      function StepperComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Done");
        }
      }

      var _StepperComponent = /*#__PURE__*/function () {
        function _StepperComponent(_formBuilder) {
          _classCallCheck(this, _StepperComponent);

          this._formBuilder = _formBuilder;
          this.isLinear = false;
        }

        _createClass(_StepperComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.firstFormGroup = this._formBuilder.group({
              firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
              secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
            });
          }
        }]);

        return _StepperComponent;
      }();

      _StepperComponent.??fac = function StepperComponent_Factory(t) {
        return new (t || _StepperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
      };

      _StepperComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _StepperComponent,
        selectors: [["app-stepper"]],
        decls: 38,
        vars: 5,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100%", "fxFlex", "100"], [1, ""], ["href", "https://material.angular.io/components/stepper/overview"], ["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-raised-button", "", "color", "warn", "matStepperNext", ""], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-raised-button", "", "color", "accent", "matStepperPrevious", ""]],
        template: function StepperComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Stepper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Check the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "code", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Official Component");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function StepperComponent_Template_button_click_11_listener() {
              return ctx.isLinear = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Enable linear mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-horizontal-stepper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-step", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, StepperComponent_ng_template_16_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-step", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, StepperComponent_ng_template_24_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, StepperComponent_ng_template_33_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " You are now done. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("linear", ctx.isLinear);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("stepControl", ctx.firstFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.firstFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("stepControl", ctx.secondFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.secondFormGroup);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__.MatStep, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__.MatStepLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__.MatStepperNext, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__.MatStepperPrevious],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwcGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    55623:
    /*!***********************************************************!*\
      !*** ./src/app/material-component/tabs/tabs.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsComponent": function TabsComponent() {
          return (
            /* binding */
            _TabsComponent
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


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);

      function TabsComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " \u2B50 ");
        }
      }

      var _TabsComponent = function _TabsComponent() {
        _classCallCheck(this, _TabsComponent);
      };

      _TabsComponent.??fac = function TabsComponent_Factory(t) {
        return new (t || _TabsComponent)();
      };

      _TabsComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _TabsComponent,
        selectors: [["app-tabs"]],
        decls: 44,
        vars: 0,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100%", "fxFlex", "100"], [1, ""], ["href", "https://material.angular.io/components/tabs/overview"], ["label", "Tab 1"], ["label", "Tab 2"], [1, "demo-tab-group"], [1, "demo-tab-content"], ["mat-tab-label", ""], ["label", "Tab 3", "disabled", ""], ["label", "Tab 4"], ["label", "Tab 5"], ["label", "Tab 6"]],
        template: function TabsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Basic Tab ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Check the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "code", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Official Component");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-tab", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Content 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Content 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Complex Tab Example (Responsive tab)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-tab-group", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-tab", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, TabsComponent_ng_template_29_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-tab", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " No content ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-tab", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "mat-tab", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " No content ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-tab", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " No content ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabLabel],
        styles: [".demo-tab-group[_ngcontent-%COMP%] {\n  border: 1px solid #e8e8e8;\n}\n\n.demo-tab-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6InRhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby10YWItZ3JvdXAge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xufVxuXG4uZGVtby10YWItY29udGVudCB7XG4gIHBhZGRpbmc6IDI0cHg7XG59Il19 */"]
      });
      /***/
    },

    /***/
    11485:
    /*!*****************************************************************!*\
      !*** ./src/app/material-component/toolbar/toolbar.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ToolbarComponent": function ToolbarComponent() {
          return (
            /* binding */
            _ToolbarComponent
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


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/toolbar */
      12522);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      var _ToolbarComponent = /*#__PURE__*/function () {
        function _ToolbarComponent() {
          _classCallCheck(this, _ToolbarComponent);
        }

        _createClass(_ToolbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ToolbarComponent;
      }();

      _ToolbarComponent.??fac = function ToolbarComponent_Factory(t) {
        return new (t || _ToolbarComponent)();
      };

      _ToolbarComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _ToolbarComponent,
        selectors: [["app-toolbar"]],
        decls: 68,
        vars: 0,
        consts: [[1, "no-shadow"], [1, ""], ["href", "https://material.angular.io/components/toolbar/overview"], ["color", "primary"], ["fxFlex", ""], ["mat-button", "", "href", "#", "mat-icon-button", ""], [1, "example-fill-remaining-space"], ["color", "accent"], ["color", "warn", 1, "bg-success"], [1, "example-spacer"], [1, "example-icon"]],
        template: function ToolbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "matToolbar is a container for headers, titles, or actions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "code", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Official Component");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Basic toolbar:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "My App");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "The primary color toolbar:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-toolbar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Primary Toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Multiple row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "First Row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Second Row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Positining toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-toolbar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Application Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Right Aligned Text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "An accent toolbar using the second toolbar row:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-toolbar", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Second Line Toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "A primary toolbar using the third toolbar row:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "mat-toolbar", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Custom Toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Second Line");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "verified_user");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Third Line");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarRow],
        styles: [".no-shadow[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n.example-fill-remaining-space[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUNBO0VBR0UsY0FBQTtBQUFGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tc2hhZG93IG1hdC10b29sYmFye1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gIC8vIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gXG4gIC8vIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuXG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLmV4YW1wbGUtaWNvbiB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59Il19 */"]
      });
      /***/
    },

    /***/
    16563:
    /*!*****************************************************************!*\
      !*** ./src/app/material-component/tooltip/tooltip.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TooltipComponent": function TooltipComponent() {
          return (
            /* binding */
            _TooltipComponent
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


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      5015);

      var _TooltipComponent = function _TooltipComponent() {
        _classCallCheck(this, _TooltipComponent);

        this.position = 'before';
      };

      _TooltipComponent.??fac = function TooltipComponent_Factory(t) {
        return new (t || _TooltipComponent)();
      };

      _TooltipComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _TooltipComponent,
        selectors: [["app-tooltip"]],
        decls: 57,
        vars: 2,
        consts: [["fxLayout", "row"], ["fxFlex.gt-sm", "100%"], ["matTooltip", "Tooltip!"], ["mat-raised-button", "", "color", "accent", "matTooltip", "Tooltip!", "matTooltipPosition", "above"], ["mat-raised-button", "", "color", "warn", "matTooltip", "Tooltip!", "matTooltipPosition", "below"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Tooltip!", "matTooltipPosition", "left"], ["mat-raised-button", "", "color", "warn", "matTooltip", "Tooltip!", "matTooltipPosition", "right"], ["mat-raised-button", "", "color", "accent", "matTooltip", "Tooltip!", "matTooltipPosition", "before"], ["matTooltip", "Tooltip!", 1, "example-tooltip-host", 3, "matTooltipPosition"], [1, "example-select", 3, "ngModel", "ngModelChange"], ["value", "before"], ["value", "after"], ["value", "above"], ["value", "below"], ["value", "left"], ["value", "right"]],
        template: function TooltipComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Basic Tooltip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "The Angular Material tooltip provides a text label that is displayed when the user hovers over or longpresses an element. add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "matTooltip=\"yourtext\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " to any element ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "I have a tooltip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Positioning Tooltip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "matTooltipPosition=\"below, above, left, right, before, after\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " to any element");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Above tooltip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "below tooltip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "left tooltip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "right tooltip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Before tooltip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Tooltip with custom position");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "The Angular Material tooltip provides a text label that is displayed when the user hovers over or longpresses an element.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Show tooltip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function TooltipComponent_Template_mat_select_ngModelChange_44_listener($event) {
              return ctx.position = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Before");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "After");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Above");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Below");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltipPosition", ctx.position);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.position);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption],
        styles: [".example-tooltip-host[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin: 50px;\n}\n\n.example-select[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2x0aXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InRvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS10b29sdGlwLWhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA1MHB4O1xufVxuXG4uZXhhbXBsZS1zZWxlY3Qge1xuICBtYXJnaW46IDAgMTBweDtcbn0iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_material-component_material_module_ts-es5.js.map