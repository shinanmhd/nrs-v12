(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards-dashboards-module"], {
    /***/
    "0zKl":
    /*!***************************************************************!*\
      !*** ./src/app/dashboards/dashboard1/dashboard1.component.ts ***!
      \***************************************************************/

    /*! exports provided: Dashboard1Component */

    /***/
    function zKl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Dashboard1Component", function () {
        return Dashboard1Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-chartist */
      "Cr32");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function Dashboard1Component_div_198_img_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 65);
        }

        if (rf & 2) {
          var mytimeline_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("alt", "Image of ", mytimeline_r1.attachment, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", mytimeline_r1.attachment, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function Dashboard1Component_div_198_button_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Check Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var mytimeline_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("color", mytimeline_r1.buttons);
        }
      }

      function Dashboard1Component_div_198_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "small", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, Dashboard1Component_div_198_img_12_Template, 1, 2, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, Dashboard1Component_div_198_button_13_Template, 2, 1, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var mytimeline_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("alt", "Image of ", mytimeline_r1.from, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", mytimeline_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", mytimeline_r1.from, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mytimeline_r1.time);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mytimeline_r1.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", mytimeline_r1.attachment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", mytimeline_r1.buttons);
        }
      }

      var data = __webpack_require__(
      /*! ./data.json */
      "s/5U");

      var Dashboard1Component = /*#__PURE__*/function () {
        function Dashboard1Component() {
          _classCallCheck(this, Dashboard1Component);

          // Barchart
          this.barChart1 = {
            type: 'Bar',
            data: data['Bar'],
            options: {
              seriesBarDistance: 15,
              high: 12,
              axisX: {
                showGrid: false,
                offset: 20
              },
              axisY: {
                showGrid: true,
                offset: 40
              }
            },
            responsiveOptions: [['screen and (min-width: 640px)', {
              axisX: {
                labelInterpolationFnc: function labelInterpolationFnc(value, index) {
                  return index % 1 === 0 ? "".concat(value) : null;
                }
              }
            }]]
          }; // This is for the donute chart

          this.donuteChart1 = {
            type: 'Pie',
            data: data['Pie'],
            options: {
              donut: true,
              showLabel: false,
              donutWidth: 30
            } // events: {
            //   draw(data: any): boolean {
            //     return data;
            //   }
            // }

          }; // This is for the line chart
          // Line chart

          this.lineChart1 = {
            type: 'Line',
            data: data['LineWithArea'],
            options: {
              low: 0,
              high: 35000,
              showArea: true,
              fullWidth: true
            }
          }; // Timeline

          this.mytimelines = [{
            from: 'Nirav joshi',
            time: '(5 minute ago)',
            image: 'assets/images/users/1.jpg',
            attachment: 'assets/images/big/img2.jpg',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper'
          }, {
            from: 'Sunil joshi',
            time: '(3 minute ago)',
            image: 'assets/images/users/2.jpg',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper',
            buttons: 'primary'
          }, {
            from: 'Vishal Bhatt',
            time: '(1 minute ago)',
            image: 'assets/images/users/3.jpg',
            attachment: 'assets/images/big/img1.jpg',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper'
          }, {
            from: 'Dhiren Adesara',
            time: '(1 minute ago)',
            image: 'assets/images/users/4.jpg',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper',
            buttons: 'warn'
          }];
        }

        _createClass(Dashboard1Component, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            //Sparkline chart
            var sparklineLogin = function sparklineLogin() {
              // spark count
              $('.spark-count').sparkline([4, 5, 0, 10, 9, 12, 4, 9, 4, 5, 3, 10, 9, 12, 10, 9, 12, 4, 9], {
                type: 'bar',
                width: '100%',
                height: '70',
                barWidth: '2',
                resize: true,
                barSpacing: '6',
                barColor: 'rgba(255, 255, 255, 0.3)'
              });
            };

            var sparkResize;
            $(window).resize(function (e) {
              clearTimeout(sparkResize);
              sparkResize = setTimeout(sparklineLogin, 500);
            });
            sparklineLogin();
          }
        }]);

        return Dashboard1Component;
      }();

      Dashboard1Component.??fac = function Dashboard1Component_Factory(t) {
        return new (t || Dashboard1Component)();
      };

      Dashboard1Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Dashboard1Component,
        selectors: [["app-dashboard"]],
        decls: 229,
        vars: 16,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "25", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "d-flex", "no-block"], [1, "m-r-10", "no-shrink"], ["mat-fab", "", "mat-card-icon", "", 1, "shadow-none", "bg-inverse", "bg-success"], [1, "m-0"], [1, "text-muted", "m-0"], ["mat-fab", "", "color", "warn", "mat-card-icon", "", 1, "shadow-none", "bg-warning"], ["mat-fab", "", "color", "accent", "mat-card-icon", "", 1, "shadow-none"], ["mat-fab", "", "color", "warn", "mat-card-icon", "", 1, "shadow-none", "bg-danger"], ["fxFlex.gt-lg", "75", "fxFlex.gt-md", "60", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "barchrt", 2, "height", "360px"], [1, "", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "list-inline", "text-center"], [1, "text-muted", "text-success", "m-0"], [1, "fa", "fa-circle", "font-10", "m-r-10"], [1, "text-muted", "text-info", "m-0"], ["fxFlex.gt-lg", "25", "fxFlex.gt-md", "40", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "piechart"], [1, "text-muted", "text-purple", "m-0"], ["fxFlex.gt-sm", "33.33", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "bg-info"], [1, "d-flex", "no-block", "align-items-center"], [1, "stats"], [1, "text-white", "m-0"], [1, "text-white", "m-t-0"], [1, "spark-count", "ml-auto"], [1, "bg-purple"], [1, "bg-success"], [1, "oh"], ["mat-card-image", "", "src", "assets/images/big/img1.jpg", "alt", "Photo of a Shiba Inu"], ["mat-raised-button", "", "color", "accent"], ["mat-button", ""], [1, "linearea", 2, "height", "360px"], [1, "list-inline", "text-center", "p-t-10"], [1, "oh", "text-center", "little-profile"], ["mat-card-image", "", "src", "assets/images/background/profile-bg.jpg", "alt", "Photo of a Shiba Inu"], [1, "pro-img"], ["src", "assets/images/users/4.jpg", "width", "100", "alt", "user"], [1, "m-b-0"], [1, "m-t-0"], ["mat-raised-button", "", "color", "warn"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 1, "m-t-30"], ["fxFlex.gt-sm", "33.33%", "fxFlex.gt-xs", "33.33%", "fxFlex", "100"], [1, "m-0", "font-light"], ["label", "Activity"], ["class", "d-flex no-blcok", 4, "ngFor", "ngForOf"], ["label", "Profile"], [1, "basic-form"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["matInput", "", "placeholder", "Some text value"], ["matInput", "", "placeholder", "EmailId", "type", "email"], ["matInput", "", "placeholder", "Password", "type", "password"], ["placeholder", "Select"], ["value", "option"], ["matInput", "", "placeholder", "Textarea"], ["mat-raised-button", "", "color", "primary"], [1, "d-flex", "no-blcok"], [1, "m-r-20"], ["width", "50", 1, "img-circle", 3, "src", "alt"], [1, "p-b-20", "b-b", "m-b-30"], [1, "text-muted"], ["fxFlex.gt-sm", "20", "fxFlex", "100"], ["class", "img-responsive rounded", 3, "src", "alt", 4, "ngIf"], ["mat-raised-button", "", 3, "color", 4, "ngIf"], [1, "img-responsive", "rounded", 3, "src", "alt"], ["mat-raised-button", "", 3, "color"]],
        template: function Dashboard1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "386");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h6", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "New Clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "local_mall");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "2408");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h6", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "All Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "stars");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "352");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h6", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "New Items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "content_paste");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "159");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h6", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "New Invoices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Sales Overview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Ample Admin Vs Material Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "x-chartist", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "h6", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Ample");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "h6", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Pixel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Our Visitors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Different Devices Used to Visit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "x-chartist", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "h6", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "h6", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Desktop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "h6", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Tablet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "mat-card", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "h3", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Purchase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "h6", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "March 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "h1", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "35487");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "mat-card", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "h3", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Expense");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "h6", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "March 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "h1", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "35487");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "mat-card", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "h3", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Income");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "h6", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "March 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "h1", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "35487");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "mat-card", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](136, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "LIKE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "SHARE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Newsletter Campaign");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Overview of Newsletter Campaign");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "x-chartist", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "ul", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "h6", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](157, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Sent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "h6", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Clicked");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "mat-card", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](169, "img", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "h3", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Angela Dominic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "h6", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "Web Designer & Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "Follow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "h3", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "1099");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "Articles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "h3", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "23,469");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Followers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "h3", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "6035");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "Likes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "mat-tab", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](198, Dashboard1Component_div_198_Template, 14, 7, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "mat-tab", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "Form Basic Layouts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "form", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](207, "input", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](210, "input", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](213, "input", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "mat-select", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "mat-option", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "Option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "mat-option", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "Option2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "mat-option", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "Option3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](225, "textarea", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "button", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "Update Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.barChart1.data)("type", ctx.barChart1.type)("options", ctx.barChart1.options)("responsiveOptions", ctx.barChart1.responsiveOptions)("events", ctx.barChart1.events);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.donuteChart1.data)("type", ctx.donuteChart1.type)("options", ctx.donuteChart1.options)("responsiveOptions", ctx.donuteChart1.responsiveOptions)("events", ctx.donuteChart1.events);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.lineChart1.data)("type", ctx.lineChart1.type)("options", ctx.lineChart1.options)("responsiveOptions", ctx.lineChart1.responsiveOptions)("events", ctx.lineChart1.events);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.mytimelines);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], ng_chartist__WEBPACK_IMPORTED_MODULE_5__["ChartistComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
        styles: [".piechart[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 280px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkcy9kYXNoYm9hcmQxL2Rhc2hib2FyZDEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osWUFBVztFQUNYLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmRzL2Rhc2hib2FyZDEvZGFzaGJvYXJkMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWVjaGFydHtcbiAgICBoZWlnaHQ6MzAwcHg7IFxuICAgIHdpZHRoOjI4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Dashboard1Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard1.component.html',
            styleUrls: ['./dashboard1.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "BNDV":
    /*!*************************************************!*\
      !*** ./src/app/dashboards/dashboards.module.ts ***!
      \*************************************************/

    /*! exports provided: DashboardsModule */

    /***/
    function BNDV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardsModule", function () {
        return DashboardsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _demo_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../demo-material-module */
      "onrN");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _dashboards_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboards.routing */
      "RJkT");
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-chartist */
      "Cr32");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./dashboard1/dashboard1.component */
      "0zKl");
      /* harmony import */


      var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./dashboard2/dashboard2.component */
      "micC");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./user-dashboard/user-dashboard.component */
      "EtvK");
      /* harmony import */


      var _change_password_dialog_change_password_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./change-password-dialog/change-password-dialog.component */
      "w7xh");
      /* harmony import */


      var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./edit-profile/edit-profile.component */
      "nvcu");
      /* harmony import */


      var _chat_chat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./chat/chat.component */
      "tu+H");

      var DashboardsModule = function DashboardsModule() {
        _classCallCheck(this, DashboardsModule);
      };

      DashboardsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: DashboardsModule
      });
      DashboardsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function DashboardsModule_Factory(t) {
          return new (t || DashboardsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_6__["ChartistModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboards_routing__WEBPACK_IMPORTED_MODULE_5__["DashboardsRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DashboardsModule, {
          declarations: [_dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_8__["Dashboard1Component"], _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_9__["Dashboard2Component"], _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["UserDashboardComponent"], _change_password_dialog_change_password_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ChangePasswordDialogComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_13__["EditProfileComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_14__["ChatComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_6__["ChartistModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_6__["ChartistModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboards_routing__WEBPACK_IMPORTED_MODULE_5__["DashboardsRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]],
            declarations: [_dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_8__["Dashboard1Component"], _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_9__["Dashboard2Component"], _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["UserDashboardComponent"], _change_password_dialog_change_password_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ChangePasswordDialogComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_13__["EditProfileComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_14__["ChatComponent"]],
            entryComponents: [_change_password_dialog_change_password_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ChangePasswordDialogComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "EtvK":
    /*!***********************************************************************!*\
      !*** ./src/app/dashboards/user-dashboard/user-dashboard.component.ts ***!
      \***********************************************************************/

    /*! exports provided: UserDashboardComponent */

    /***/
    function EtvK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function () {
        return UserDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _change_password_dialog_change_password_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../change-password-dialog/change-password-dialog.component */
      "w7xh");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/user.service */
      "dU4z");
      /* harmony import */


      var _shared_models_user_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/models/user-data */
      "FwIL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function UserDashboardComponent_img_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 19);
        }
      }

      function UserDashboardComponent_img_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 20);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate2"]("src", "", ctx_r1.storagePath + "profiles/cover/" + ctx_r1.userState.profile.coverimage, "?", ctx_r1.random_number, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function UserDashboardComponent_img_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 21);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx_r2.storagePath + "profiles/default.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function UserDashboardComponent_img_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 21);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx_r3.storagePath + "profiles/user/" + ctx_r3.userState.profile.profilepic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function UserDashboardComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 11);
        }
      }

      function UserDashboardComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-list", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Phone: ", ctx_r5.userState.profile.phone, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Email: ", ctx_r5.userState.profile.email, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", ctx_r5.userState.profile.fb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", ctx_r5.userState.profile.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", ctx_r5.userState.profile.insta, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function UserDashboardComponent_mat_card_content_29_div_3_div_12_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var lnews_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](lnews_r9.heading);
        }
      }

      function UserDashboardComponent_mat_card_content_29_div_3_div_12_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var lnews_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](lnews_r9.heading);
        }
      }

      function UserDashboardComponent_mat_card_content_29_div_3_div_12_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var lnews_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("matTooltip", lnews_r9.created_at);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 2, lnews_r9.created_at));
        }
      }

      function UserDashboardComponent_mat_card_content_29_div_3_div_12_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserDashboardComponent_mat_card_content_29_div_3_div_12_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserDashboardComponent_mat_card_content_29_div_3_div_12_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20);

            var lnews_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r18.viewNews(lnews_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "zoom_in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function UserDashboardComponent_mat_card_content_29_div_3_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, UserDashboardComponent_mat_card_content_29_div_3_div_12_div_3_Template, 2, 1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, UserDashboardComponent_mat_card_content_29_div_3_div_12_div_4_Template, 2, 1, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, UserDashboardComponent_mat_card_content_29_div_3_div_12_div_5_Template, 3, 4, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, UserDashboardComponent_mat_card_content_29_div_3_div_12_div_6_Template, 2, 0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, UserDashboardComponent_mat_card_content_29_div_3_div_12_button_8_Template, 3, 0, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var lnews_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("id", lnews_r9.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](lnews_r9.news_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lnews_r9.language.language_code === "Dhv");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lnews_r9.language.language_code != "Dhv");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lnews_r9.newsstatus.status != "breaker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lnews_r9.newsstatus.status == "breaker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lnews_r9.newsstatus.status != "breaker");
        }
      }

      function UserDashboardComponent_mat_card_content_29_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "News Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, UserDashboardComponent_mat_card_content_29_div_3_div_12_Template, 9, 7, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r7.userData.news);
        }
      }

      function UserDashboardComponent_mat_card_content_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "My Latest News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, UserDashboardComponent_mat_card_content_29_div_3_Template, 13, 1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r6.userData.news);
        }
      }

      var _c0 = function _c0() {
        return ["/user/profile/edit"];
      };

      var UserDashboardComponent = /*#__PURE__*/function () {
        function UserDashboardComponent(store, dialog, userService) {
          _classCallCheck(this, UserDashboardComponent);

          this.store = store;
          this.dialog = dialog;
          this.userService = userService;
          this.userData = new _shared_models_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"]();
        }

        _createClass(UserDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.random_number = Math.floor(Math.random() * (999999 - 100000)) + 100000;
            this.storagePath = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storageUrl;
            this.store.select(function (store) {
              return store.UserState.user;
            }).subscribe(function (user) {
              _this.userState = user; //get user data

              if (_this.userState.id) {
                _this.userService.getDashboardData(_this.userState.id).subscribe(function (data) {
                  _this.userData = data;
                });
              }
            });
          }
        }, {
          key: "changePass",
          value: function changePass() {
            var dialogRef = this.dialog.open(_change_password_dialog_change_password_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordDialogComponent"], {
              width: '40%',
              height: 'auto',
              maxHeight: '95%',
              data: {
                email: this.userState.email
              }
            });
          }
        }]);

        return UserDashboardComponent;
      }();

      UserDashboardComponent.??fac = function UserDashboardComponent_Factory(t) {
        return new (t || UserDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
      };

      UserDashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: UserDashboardComponent,
        selectors: [["app-user-dashboard"]],
        decls: 30,
        vars: 13,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-lg", "100", "fxFlex.gt-md", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "oh", "text-center", "little-profile"], ["mat-card-image", "", "src", "assets/images/background/profile-bg.jpg", "alt", "Arial Image of Male.", 4, "ngIf"], ["mat-card-image", "", "alt", "Arial Image of Male.", 3, "src", 4, "ngIf"], [1, "pro-img"], ["width", "100", "alt", "user", "style", "border: 2px solid #ffffff;", 3, "src", 4, "ngIf"], [1, "m-b-0"], [1, "m-t-0"], ["mat-raised-button", "", "color", "basic", 3, "routerLink"], ["mat-raised-button", "", "color", "basic", 3, "click"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 1, "m-t-30"], ["fxLayout", "row", "fxLayoutWrap", "wrap", "class", "m-t-30", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "wrap", "fxLayoutAlign", "center start", 1, "pricing-box"], ["fxFlex.gt-sm", "30", "fxFlex", "30"], ["class", "card-group text-left", 4, "ngIf"], ["fxFlex.gt-sm", "70", "fxFlex", "70"], [1, "pricing-plan"], [4, "ngIf"], ["mat-card-image", "", "src", "assets/images/background/profile-bg.jpg", "alt", "Arial Image of Male."], ["mat-card-image", "", "alt", "Arial Image of Male.", 3, "src"], ["width", "100", "alt", "user", 2, "border", "2px solid #ffffff", 3, "src"], [1, "card-group", "text-left"], [1, "profile-listing"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 1, "m-t-30", "text-center"], ["fxFlex.gt-sm", "33.33%", "fxFlex.gt-xs", "33.33%", "fxFlex", "100", 1, "social-widget"], ["target", "_blank", 1, "soc-header", "box-facebook", 2, "width", "100%", "display", "block", 3, "href"], [1, "fa", "fa-facebook", "display-5"], ["target", "_blank", 1, "soc-header", "box-twitter", 2, "width", "100%", "display", "block", 3, "href"], [1, "fa", "fa-twitter", "display-5"], ["target", "_blank", 1, "soc-header", "box-linkedin", 2, "width", "100%", "display", "block", 3, "href"], [1, "fa", "fa-instagram", "display-5"], ["class", "table-rasponsive", 4, "ngIf"], [1, "table-rasponsive"], [1, "table"], [1, "table-header"], [1, "header__item", "column-news_name"], [1, "header__item", "column-heading"], [1, "header__item", "column-date"], [1, "header__item", "column-actions"], [1, "table-content"], ["class", "table-row", 3, "id", 4, "ngFor", "ngForOf"], [1, "table-row", 3, "id"], [1, "table-data", "column-news_name"], ["class", "table-data column-heading dhv", 4, "ngIf"], ["class", "table-data column-heading", 4, "ngIf"], ["class", "table-data column-date", "matTooltipPosition", "below", 3, "matTooltip", 4, "ngIf"], ["class", "table-data column-date", 4, "ngIf"], [1, "table-data", "column-actions"], ["mat-icon-button", "", "color", "basic", "matTooltip", "View News", "matTooltipPosition", "below", 3, "click", 4, "ngIf"], [1, "table-data", "column-heading", "dhv"], [1, "table-data", "column-heading"], ["matTooltipPosition", "below", 1, "table-data", "column-date", 3, "matTooltip"], [1, "table-data", "column-date"], ["mat-icon-button", "", "color", "basic", "matTooltip", "View News", "matTooltipPosition", "below", 3, "click"], ["aria-label", "view news"]],
        template: function UserDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, UserDashboardComponent_img_3_Template, 1, 0, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, UserDashboardComponent_img_4_Template, 1, 2, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, UserDashboardComponent_img_7_Template, 1, 1, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, UserDashboardComponent_img_8_Template, 1, 1, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h6", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "login:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Edit Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserDashboardComponent_Template_button_click_19_listener() {
              return ctx.changePass();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Change Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, UserDashboardComponent_div_22_Template, 1, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, UserDashboardComponent_div_25_Template, 18, 5, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-card", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, UserDashboardComponent_mat_card_content_29_Template, 4, 1, "mat-card-content", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.userState.profile.coverimage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userState.profile.coverimage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.userState.profile.profilepic);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userState.profile.profilepic);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](11, 10, ctx.userState.name));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.userState.email, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userState.profile);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userState.profile.id != "null");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userData.news);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
        styles: [".profile-listing[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{\n  margin: 0px;\n  padding: 0px;\n  height: 30px;\n}\n.profile-listing[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   .mat-list-item-content[_ngcontent-%COMP%]{\n  margin: 0px;\n  padding: 0px;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px solid #EEEEEE;\n}\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 10px 0;\n  font-size: 12px;\n  border-bottom: 1px solid #EEEEEE;\n}\n.table-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding-left: 10px 0;\n  border-bottom: 1px solid #EEEEEE;\n  transition: all 0.2s ease-in-out;\n}\n.table-row[_ngcontent-%COMP%]:hover{\n  background-color: rgba(97, 97, 97, 0.068);\n}\n\n.table-row.status_0[_ngcontent-%COMP%]{\n  background-color: rgba(255, 127, 159, 0.1)\n}\n.table-row[_ngcontent-%COMP%]:hover.status_0{\n  background-color: rgba(255, 127, 159, 0.4)\n}\n.table-row[_ngcontent-%COMP%]:nth-of-type(odd) {\n  \n}\n\n.table-row.status_breaker[_ngcontent-%COMP%]{\n  background-color: rgba(127, 255, 212, 0.2)\n}\n.table-row[_ngcontent-%COMP%]:hover.status_breaker{\n  background-color: rgba(127, 255, 212, 0.7)\n}\n.table-data[_ngcontent-%COMP%], .header__item[_ngcontent-%COMP%] {\n  flex: 1 1 20%;\n  text-align: center;\n  padding: 5px;\n}\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: bold;\n  font-size: 12px;\n}\n.filter__link[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n.filter__link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: -18px;\n  color: white;\n  font-size: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.filter__link.desc[_ngcontent-%COMP%]::after {\n  content: \"(desc)\";\n}\n.filter__link.asc[_ngcontent-%COMP%]::after {\n  content: \"(asc)\";\n}\n.column-news_name[_ngcontent-%COMP%]{\n  flex: 0 0 25%;\n  font-size: 12px;\n  \n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n.column-journalist[_ngcontent-%COMP%]{\n  flex: 0 0 10%;\n  font-size: 12px;\n  \n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n.column-heading[_ngcontent-%COMP%]{\n  flex: 0 0 50%;\n  font-size: 12px;\n  \n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n.column-heading.dhv[_ngcontent-%COMP%]{\n  font-family: 'MV_Faseyha';\n  font-size: 16px;\n  text-align: right;\n  line-height: 32px;\n  direction: rtl;\n  padding-right: 20px;\n}\n.column-date[_ngcontent-%COMP%]{\n  flex: 0 0 10%;\n  font-size: 12px;\n}\n.column-actions[_ngcontent-%COMP%]{\n  flex: 0 0 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkcy91c2VyLWRhc2hib2FyZC91c2VyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFjQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGdDQUFnQztFQUtoQyxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHlDQUF5QztBQUMzQztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFO0FBQ0Y7QUFDQTtFQUNFO0FBQ0Y7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBLFlBQVk7QUFDWjtFQUNFO0FBQ0Y7QUFDQTtFQUNFO0FBQ0Y7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdEQUFnRDtFQUNoRCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsUUFBUTtFQUNSLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFLQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkcy91c2VyLWRhc2hib2FyZC91c2VyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtbGlzdGluZyBtYXQtbGlzdC1pdGVte1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4ucHJvZmlsZS1saXN0aW5nIG1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWl0ZW0tY29udGVudHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNFRUVFRUU7XG59XG5cbi50YWJsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFRUVFO1xufVxuXG4udGFibGUtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRUVFRTtcblxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4udGFibGUtcm93OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDAuMDY4KTtcbn1cblxuLyogbm90IGFwcHJvdmVkICovXG4udGFibGUtcm93LnN0YXR1c18we1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTI3LCAxNTksIDAuMSlcbn1cbi50YWJsZS1yb3c6aG92ZXIuc3RhdHVzXzB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMjcsIDE1OSwgMC40KVxufVxuXG4udGFibGUtcm93Om50aC1vZi10eXBlKG9kZCkge1xuICAvKmJhY2tncm91bmQ6ICNFRUVFRUU7Ki9cbn1cblxuLyogQlJFQUtFUiAqL1xuLnRhYmxlLXJvdy5zdGF0dXNfYnJlYWtlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLCAwLjIpXG59XG4udGFibGUtcm93OmhvdmVyLnN0YXR1c19icmVha2Vye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuNylcbn1cblxuLnRhYmxlLWRhdGEsXG4uaGVhZGVyX19pdGVtIHtcbiAgZmxleDogMSAxIDIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5oZWFkZXJfX2l0ZW0ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5maWx0ZXJfX2xpbmsge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cbi5maWx0ZXJfX2xpbms6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmZpbHRlcl9fbGluay5kZXNjOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKGRlc2MpXCI7XG59XG4uZmlsdGVyX19saW5rLmFzYzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIihhc2MpXCI7XG59XG5cblxuXG5cbi5jb2x1bW4tbmV3c19uYW1le1xuICBmbGV4OiAwIDAgMjUlO1xuICBmb250LXNpemU6IDEycHg7XG4gIC8qanVzdGlmeS1jb250ZW50OmZsZXgtZW5kOyovXG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbn1cbi5jb2x1bW4tam91cm5hbGlzdHtcbiAgZmxleDogMCAwIDEwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAvKmp1c3RpZnktY29udGVudDpmbGV4LWVuZDsqL1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG59XG4uY29sdW1uLWhlYWRpbmd7XG4gIGZsZXg6IDAgMCA1MCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLypqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7Ki9cbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xufVxuLmNvbHVtbi1oZWFkaW5nLmRodntcbiAgZm9udC1mYW1pbHk6ICdNVl9GYXNleWhhJztcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uY29sdW1uLWRhdGV7XG4gIGZsZXg6IDAgMCAxMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb2x1bW4tYWN0aW9uc3tcbiAgZmxleDogMCAwIDUlO1xufVxuXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-dashboard',
            templateUrl: './user-dashboard.component.html',
            styleUrls: ['./user-dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "FwIL":
    /*!********************************************!*\
      !*** ./src/app/shared/models/user-data.ts ***!
      \********************************************/

    /*! exports provided: UserData */

    /***/
    function FwIL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserData", function () {
        return UserData;
      });

      var UserData = function UserData() {
        _classCallCheck(this, UserData);

        this.news = null;
      };
      /***/

    },

    /***/
    "RJkT":
    /*!**************************************************!*\
      !*** ./src/app/dashboards/dashboards.routing.ts ***!
      \**************************************************/

    /*! exports provided: DashboardsRoutes */

    /***/
    function RJkT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardsRoutes", function () {
        return DashboardsRoutes;
      });
      /* harmony import */


      var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard1/dashboard1.component */
      "0zKl");
      /* harmony import */


      var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard2/dashboard2.component */
      "micC");
      /* harmony import */


      var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-dashboard/user-dashboard.component */
      "EtvK");
      /* harmony import */


      var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-profile/edit-profile.component */
      "nvcu");
      /* harmony import */


      var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./chat/chat.component */
      "tu+H");

      var DashboardsRoutes = [{
        path: '',
        children: [{
          path: '',
          component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["UserDashboardComponent"]
        }, {
          path: 'profile',
          component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["UserDashboardComponent"]
        }, {
          path: 'dashboard',
          component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["UserDashboardComponent"]
        }, {
          path: 'default1',
          component: _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_0__["Dashboard1Component"]
        }, {
          path: 'default2',
          component: _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_1__["Dashboard2Component"]
        }, {
          path: 'profile/edit',
          component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_3__["EditProfileComponent"]
        }, {
          path: 'chat',
          component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"]
        }
        /*, {
            path: 'todo',
            component: TodoComponent
          }*/
        ]
      }];
      /***/
    },

    /***/
    "dU4z":
    /*!*****************************************************!*\
      !*** ./src/app/dashboards/services/user.service.ts ***!
      \*****************************************************/

    /*! exports provided: UserService */

    /***/
    function dU4z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../environments/environment */
      "AytR");

      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        }

        _createClass(UserService, [{
          key: "checkOldPassword",
          value: function checkOldPassword(postStr) {
            return this.http.post(this.apiUrl + 'checkpass', postStr);
          }
        }, {
          key: "changePassword",
          value: function changePassword(postStr) {
            return this.http.post(this.apiUrl + 'changepass', postStr);
          }
        }, {
          key: "getDashboardData",
          value: function getDashboardData(userid) {
            return this.http.get(this.apiUrl + 'userdata/profile/' + userid);
          }
        }]);

        return UserService;
      }();

      UserService.??fac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      UserService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: UserService,
        factory: UserService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "micC":
    /*!***************************************************************!*\
      !*** ./src/app/dashboards/dashboard2/dashboard2.component.ts ***!
      \***************************************************************/

    /*! exports provided: Dashboard2Component */

    /***/
    function micC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function () {
        return Dashboard2Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-chartist */
      "Cr32");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function Dashboard2Component_mat_header_cell_138_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Pic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function Dashboard2Component_mat_cell_139_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", element_r14.position, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        }
      }

      function Dashboard2Component_mat_header_cell_141_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function Dashboard2Component_mat_cell_142_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](element_r15.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r15.weight, " ");
        }
      }

      function Dashboard2Component_mat_header_cell_144_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Weight ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function Dashboard2Component_mat_cell_145_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r16.weight, " ");
        }
      }

      function Dashboard2Component_mat_header_cell_147_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Designation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function Dashboard2Component_mat_cell_148_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var element_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r17.designation, " ");
        }
      }

      function Dashboard2Component_mat_header_row_149_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-header-row");
        }
      }

      function Dashboard2Component_mat_row_150_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-row");
        }
      }

      function Dashboard2Component_div_162_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var mycomment_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", mycomment_r19.profile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mycomment_r19.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mycomment_r19.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mycomment_r19.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("label label-", mycomment_r19["class"], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mycomment_r19.status);
        }
      }

      function Dashboard2Component_a_172_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var mymessage_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", mymessage_r20.useravatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("profile-status ", mymessage_r20.status, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mymessage_r20.from);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mymessage_r20.subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](mymessage_r20.time);
        }
      }

      var _c0 = function _c0() {
        return ["#1976d2", "#26dad2", "#dadada"];
      };

      var _c1 = function _c1(a0) {
        return {
          backgroundColor: a0
        };
      };

      var _c2 = function _c2(a0) {
        return [a0];
      };

      var _c3 = function _c3() {
        return [5, 10, 20];
      };

      var data = __webpack_require__(
      /*! ./data.json */
      "rbV7");

      var Dashboard2Component = /*#__PURE__*/function () {
        function Dashboard2Component() {
          _classCallCheck(this, Dashboard2Component);

          // Barchart
          this.barChart1 = {
            type: 'Bar',
            data: data['Bar'],
            options: {
              seriesBarDistance: 15,
              high: 12,
              axisX: {
                showGrid: false,
                offset: 20
              },
              axisY: {
                showGrid: true,
                offset: 40
              }
            },
            responsiveOptions: [['screen and (min-width: 640px)', {
              axisX: {
                labelInterpolationFnc: function labelInterpolationFnc(value, index) {
                  return index % 1 === 0 ? "".concat(value) : null;
                }
              }
            }]]
          }; // Doughnut

          this.doughnutChartLabels = ['Desktop', 'Mobile', 'Tablet'];
          this.doughnutChartOptions = {
            responsive: false
          };
          this.doughnutChartData = [350, 450, 100];
          this.doughnutChartType = 'doughnut';
          this.doughnutChartLegend = false; // This is for the table

          this.displayedColumns = ['position', 'name', 'weight', 'designation'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA); // This is for the comments

          this.mycomments = [{
            name: 'James Anderson',
            content: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
            profile: 'assets/images/users/1.jpg',
            status: 'Pending',
            "class": 'info',
            date: 'April 14, 2016'
          }, {
            name: 'Michael Jorden',
            content: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
            profile: 'assets/images/users/2.jpg',
            status: 'Approved',
            "class": 'light-success',
            date: 'April 14, 2016'
          }, {
            name: 'James Anderson',
            content: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
            profile: 'assets/images/users/3.jpg',
            status: 'Pending',
            "class": 'danger',
            date: 'April 14, 2016'
          }, {
            name: 'Johnathan Doeting',
            content: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
            profile: 'assets/images/users/1.jpg',
            status: 'Pending',
            "class": 'info',
            date: 'April 14, 2016'
          }]; // This is for Mymessages

          this.mymessages = [{
            useravatar: 'assets/images/users/1.jpg',
            status: 'online',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:30 AM'
          }, {
            useravatar: 'assets/images/users/2.jpg',
            status: 'busy',
            from: 'Sonu Nigam',
            subject: 'I have sung a song! See you at',
            time: '9:10 AM'
          }, {
            useravatar: 'assets/images/users/3.jpg',
            status: 'away',
            from: 'Arijit Sinh',
            subject: 'I am a singer!',
            time: '9:08 AM'
          }, {
            useravatar: 'assets/images/users/4.jpg',
            status: 'busy',
            from: 'Sonu Nigam',
            subject: 'I have sung a song! See you at',
            time: '9:10 AM'
          }, {
            useravatar: 'assets/images/users/6.jpg',
            status: 'away',
            from: 'Arijit Sinh',
            subject: 'I am a singer!',
            time: '9:08 AM'
          }, {
            useravatar: 'assets/images/users/7.jpg',
            status: 'busy',
            from: 'Sonu Nigam',
            subject: 'I have sung a song! See you at',
            time: '9:10 AM'
          }, {
            useravatar: 'assets/images/users/8.jpg',
            status: 'away',
            from: 'Arijit Sinh',
            subject: 'I am a singer!',
            time: '9:08 AM'
          }, {
            useravatar: 'assets/images/users/6.jpg',
            status: 'offline',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:00 AM'
          }];
        }

        _createClass(Dashboard2Component, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            //Sparkline chart
            var sparklineLogin = function sparklineLogin() {
              // spark count
              $('.spark-count').sparkline([4, 5, 0, 10, 9, 12, 4, 9, 4, 5, 3, 10, 9, 12, 10, 9, 12, 4, 9], {
                type: 'bar',
                width: '100%',
                height: '70',
                barWidth: '2',
                resize: true,
                barSpacing: '6',
                barColor: 'rgba(255, 255, 255, 0.3)'
              });
            };

            var sparkResize;
            $(window).resize(function (e) {
              clearTimeout(sparkResize);
              sparkResize = setTimeout(sparklineLogin, 500);
            });
            sparklineLogin();
            /**
            * Set the paginator after the view init since this component will
            * be able to query its view for the initialized paginator.
            */

            this.dataSource.paginator = this.paginator;
          }
        }]);

        return Dashboard2Component;
      }();

      Dashboard2Component.??fac = function Dashboard2Component_Factory(t) {
        return new (t || Dashboard2Component)();
      };

      Dashboard2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Dashboard2Component,
        selectors: [["app-dashboard2"]],
        viewQuery: function Dashboard2Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 173,
        vars: 24,
        consts: [[1, "card-group"], [1, "text-info"], [1, "m-0"], [1, "text-muted", "m-t-0", "m-b-10"], ["mode", "determinate", "value", "40"], [1, "text-danger"], ["color", "warn", "mode", "determinate", "value", "60"], [1, "text-purple"], ["color", "accent", "mode", "determinate", "value", "80"], ["mode", "indeterminate", "value", "40"], ["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-md", "33.33", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "bg-success"], [1, "d-flex", "p-t-20", "p-b-20", "no-block", "align-items-center"], [1, "stats"], [1, "text-white", "m-0"], [1, "text-white", "m-t-0"], [1, "spark-count", "ml-auto"], [1, "bg-purple"], [1, "text-center"], ["baseChart", "", "width", "230", "height", "230", 1, "m-auto", 3, "data", "labels", "legend", "options", "chartType", "colors"], [1, "list-inline", "text-center"], [1, "text-muted", "text-success", "m-0"], [1, "fa", "fa-circle", "font-10", "m-r-10"], [1, "text-muted", "text-info", "m-0"], [1, "text-muted", "text-purple", "m-0"], [1, "barchrt", 2, "height", "325px"], [1, "", 3, "data", "type", "options", "responsiveOptions", "events"], ["fxFlex.gt-lg", "25", "fxFlex.gt-md", "40", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "oh", "text-center", "little-profile"], ["mat-card-image", "", "src", "assets/images/background/profile-bg.jpg", "alt", "Photo of a Shiba Inu"], [1, "pro-img"], ["src", "assets/images/users/4.jpg", "width", "100", "alt", "user"], [1, "m-b-0"], [1, "m-t-0"], ["mat-raised-button", "", "color", "warn"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 1, "m-t-30"], ["fxFlex.gt-sm", "33.33%", "fxFlex.gt-xs", "33.33%", "fxFlex", "100"], [1, "m-0", "font-light"], ["fxFlex.gt-lg", "75", "fxFlex.gt-md", "60", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "contactlist", 3, "dataSource"], ["table", ""], ["matColumnDef", "position"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "designation"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions"], ["paginator", ""], ["fxFlex.gt-lg", "50", "fxFlex.gt-md", "50", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "comment-widgets"], ["class", "d-flex flex-row comment-row", 4, "ngFor", "ngForOf"], [1, "mailbox", "message-widget"], [1, "message-center"], ["href", "#", 4, "ngFor", "ngForOf"], ["width", "30", 1, "img-circle", 3, "src"], [1, "d-flex", "flex-row", "comment-row"], [1, "p-2"], [1, "round"], ["alt", "user", "width", "50", 3, "src"], [1, "comment-text", "w-100"], [1, "m-b-5"], [1, "comment-footer"], [1, "text-muted", "pull-right"], [1, "action-icons"], ["href", "javascript:void(0)"], [1, "ti-pencil-alt"], [1, "ti-check"], [1, "ti-heart"], ["href", "#"], [1, "user-img"], ["alt", "user", "width", "40", 1, "img-circle", 3, "src"], [1, "mail-content"], [1, "mail-desc"], [1, "time"]],
        template: function Dashboard2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "386");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "New Clients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "mat-progress-bar", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "local_mall");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "1386");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "New Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "mat-progress-bar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "stars");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "986");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "New Items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "mat-progress-bar", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "content_paste");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "786");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "New Invoices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "mat-progress-bar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "mat-card", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h3", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h6", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "March 2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h1", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "35487");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "mat-card", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "h3", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Purchase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h6", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "March 2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "h1", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "35487");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Our Visitors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Different Devices Used to Visit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "canvas", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "ul", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h6", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Desktop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "h6", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Tablet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Sales Yealry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "This is the simple example of bar chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "x-chartist", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "mat-card", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "h3", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Angela Dominic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "h6", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Web Designer & Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Follow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "h3", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "1099");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Articles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "h3", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "23,469");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Followers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "h3", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "6035");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Likes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Contact list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Overview of Newsletter Campaign");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "mat-table", 41, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](137, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](138, Dashboard2Component_mat_header_cell_138_Template, 2, 0, "mat-header-cell", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](139, Dashboard2Component_mat_cell_139_Template, 2, 1, "mat-cell", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](140, 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](141, Dashboard2Component_mat_header_cell_141_Template, 2, 0, "mat-header-cell", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](142, Dashboard2Component_mat_cell_142_Template, 4, 2, "mat-cell", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](143, 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](144, Dashboard2Component_mat_header_cell_144_Template, 2, 0, "mat-header-cell", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](145, Dashboard2Component_mat_cell_145_Template, 2, 1, "mat-cell", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](146, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](147, Dashboard2Component_mat_header_cell_147_Template, 2, 0, "mat-header-cell", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](148, Dashboard2Component_mat_cell_148_Template, 2, 1, "mat-cell", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](149, Dashboard2Component_mat_header_row_149_Template, 1, 0, "mat-header-row", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](150, Dashboard2Component_mat_row_150_Template, 1, 0, "mat-row", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](151, "mat-paginator", 51, 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Recent Comments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Latest Comments on users from Material");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](162, Dashboard2Component_div_162_Template, 21, 8, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Recent Messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "Latest Messages on users from Material");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](172, Dashboard2Component_a_172_Template, 11, 7, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("legend", ctx.doughnutChartLegend)("options", ctx.doughnutChartOptions)("chartType", ctx.doughnutChartType)("colors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](21, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](19, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](18, _c0))));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.barChart1.data)("type", ctx.barChart1.type)("options", ctx.barChart1.options)("responsiveOptions", ctx.barChart1.responsiveOptions)("events", ctx.barChart1.events);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](23, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.mycomments);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.mymessages);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["BaseChartDirective"], ng_chartist__WEBPACK_IMPORTED_MODULE_8__["ChartistComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        styles: [".saleschart[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.contactlist[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkcy9kYXNoYm9hcmQyL2Rhc2hib2FyZDIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0FBQ2Y7O0FBRUE7RUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmRzL2Rhc2hib2FyZDIvZGFzaGJvYXJkMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWxlc2NoYXJ0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxufVxuLmNvbnRhY3RsaXN0IC5tYXQtcm93e1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDsgXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Dashboard2Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard2',
            templateUrl: './dashboard2.component.html',
            styleUrls: ['./dashboard2.component.scss']
          }]
        }], null, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], {
              "static": true
            }]
          }]
        });
      })();

      var ELEMENT_DATA = [{
        position: 'assets/images/users/1.jpg',
        name: 'Nirav joshi',
        weight: 1.0079,
        designation: 'H'
      }, {
        position: 'assets/images/users/2.jpg',
        name: 'Sunil joshi',
        weight: 4.0026,
        designation: 'He'
      }, {
        position: 'assets/images/users/3.jpg',
        name: 'Vishal Bhatt',
        weight: 6.941,
        designation: 'Li'
      }, {
        position: 'assets/images/users/4.jpg',
        name: 'Beryllium Lon',
        weight: 9.0122,
        designation: 'Be'
      }, {
        position: 'assets/images/users/5.jpg',
        name: 'Boron son',
        weight: 10.811,
        designation: 'B'
      }, {
        position: 'assets/images/users/6.jpg',
        name: 'Carbon hryt',
        weight: 12.0107,
        designation: 'C'
      }, {
        position: 'assets/images/users/7.jpg',
        name: 'Nitro oxur',
        weight: 14.0067,
        designation: 'N'
      }, {
        position: 'assets/images/users/8.jpg',
        name: 'Oxyg rigch',
        weight: 15.9994,
        designation: 'O'
      }];
      /***/
    },

    /***/
    "nvcu":
    /*!*******************************************************************!*\
      !*** ./src/app/dashboards/edit-profile/edit-profile.component.ts ***!
      \*******************************************************************/

    /*! exports provided: EditProfileComponent */

    /***/
    function nvcu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function () {
        return EditProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/models/user */
      "NlNA");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../environments/environment */
      "AytR");
      /* harmony import */


      var _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../authentication/store/user.actions */
      "b7cN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var EditProfileComponent = /*#__PURE__*/function () {
        function EditProfileComponent(store, http, router) {
          _classCallCheck(this, EditProfileComponent);

          this.store = store;
          this.http = http;
          this.router = router;
          this.formData = new FormData();
        }

        _createClass(EditProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.store.select(function (store) {
              return store.UserState.user;
            }).subscribe(function (user) {
              _this2.userState = user;

              if (!_this2.userState.profile.id) {
                _this2.userState.profile = new _shared_models_user__WEBPACK_IMPORTED_MODULE_1__["Profile"]();
              }
            });
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(event, image) {
            var elem = event.target;

            if (elem.files.length > 0) {
              if (image === 'pp') {
                this.formData.set('profilepic', elem.files[0]);
              } else if (image === 'cp') {
                this.formData.set('coverimage', elem.files[0]);
              }
            }
          }
        }, {
          key: "appendForm",
          value: function appendForm(key, event) {
            // switch(key){
            //   case 'email':
            //     this.formData.set('email', event.value);
            //   break;
            // }
            console.log(event);
          }
        }, {
          key: "updateProfile",
          value: function updateProfile() {
            var _this3 = this;

            this.formData.append('user_id', this.userState.profile.user_id);
            this.formData.append('dob', this.userState.profile.dob);
            this.formData.append('gender', this.userState.profile.gender);
            this.formData.append('fb', this.userState.profile.fb);
            this.formData.append('insta', this.userState.profile.insta);
            this.formData.append('twitter', this.userState.profile.twitter);
            this.formData.append('email', this.userState.profile.email);
            this.formData.append('phone', this.userState.profile.phone);
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'updateprofile/', this.formData).subscribe(function (response) {
              if (response === 200) {
                //update session
                _this3.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_5__["ServerGetUserSettings"]());

                _this3.router.navigate(['/user/profile']);
              }
            });
          }
        }]);

        return EditProfileComponent;
      }();

      EditProfileComponent.??fac = function EditProfileComponent_Factory(t) {
        return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      EditProfileComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EditProfileComponent,
        selectors: [["app-edit-profile"]],
        decls: 62,
        vars: 14,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], [1, "basic-form", "m-t-40"], ["profileForm", "ngForm"], ["fxFlex.gt-md", "45", "fxFlex", "45"], ["matInput", "", "placeholder", "Name", "name", "name", "required", "", "disabled", "", 3, "ngModel", "ngModelChange"], ["fxFlex.gt-sm", "5", "fxFlex", "5", 1, "m-b-20"], ["fxFlex.gt-sm", "15", "fxFlex", "15", 1, "m-t-30", "m-b-20"], ["name", "gender", "required", "", 3, "ngModel", "ngModelChange"], ["color", "primary", 1, "m-r-10", 3, "value", "checked", "change"], ["color", "warn", 1, "m-r-10", 3, "value", "checked", "change"], ["fxFlex.gt-sm", "35", "fxFlex", "35", 1, "m-b-20"], ["fxFlex.gt-sm", "45", "fxFlex", "45"], ["matInput", "", "required", "", "placeholder", "Choose date of birth", "name", "dob", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "required", "", "placeholder", "EmailId", "type", "email", "name", "email", 3, "ngModel", "ngModelChange"], ["fxFlex.gt-sm", "45", "fxFlex", "45", 1, "m-b-20"], ["placeholder", "Profile Picture", "type", "file", 1, "form-control", "b-b", 3, "change"], ["placeholder", "Cover Image", "type", "file", 1, "form-control", "b-b", 3, "change"], ["matInput", "", "required", "", "placeholder", "Facebook Id", "type", "text", "name", "fb", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "placeholder", "Twitter Id", "type", "text", "name", "twitter", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "placeholder", "Instagram Id", "type", "text", "name", "insta", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", "placeholder", "Phone Number", "type", "text", "name", "phone", 3, "ngModel", "ngModelChange"], ["fxFlex.gt-sm", "100", "fxFlex", "100", "align", "right"], ["mat-raised-button", "", "color", "basic", "routerLink", "/user/profile", 1, "m-r-10", "m-t-40"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
        template: function EditProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Edit Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "form", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.userState.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-radio-group", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EditProfileComponent_Template_mat_radio_group_ngModelChange_14_listener($event) {
              return ctx.userState.profile.gender = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-radio-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EditProfileComponent_Template_mat_radio_button_change_15_listener($event) {
              return ctx.appendForm("gender", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Male");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-radio-button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EditProfileComponent_Template_mat_radio_button_change_17_listener($event) {
              return ctx.appendForm("gender", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Female");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.userState.profile.dob = $event;
            })("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.appendForm("dob", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "mat-datepicker-toggle", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "mat-datepicker", null, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_29_listener($event) {
              return ctx.userState.profile.email = $event;
            })("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_29_listener($event) {
              return ctx.appendForm("email", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Profile Picture");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EditProfileComponent_Template_input_change_34_listener($event) {
              return ctx.uploadFile($event, "pp");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Cover Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EditProfileComponent_Template_input_change_39_listener($event) {
              return ctx.uploadFile($event, "cp");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_43_listener($event) {
              return ctx.userState.profile.fb = $event;
            })("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_43_listener($event) {
              return ctx.appendForm("fb", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_47_listener($event) {
              return ctx.userState.profile.twitter = $event;
            })("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_47_listener($event) {
              return ctx.appendForm("twitter", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_51_listener($event) {
              return ctx.userState.profile.insta = $event;
            })("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_51_listener($event) {
              return ctx.appendForm("insta", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_55_listener($event) {
              return ctx.userState.profile.phone = $event;
            })("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_55_listener($event) {
              return ctx.appendForm("phone", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditProfileComponent_Template_button_click_60_listener() {
              return ctx.updateProfile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Save");

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
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userState.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userState.profile.gender);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 1)("checked", ctx.userState.profile.gender == "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 2)("checked", ctx.userState.profile.gender == "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matDatepicker", _r1)("ngModel", ctx.userState.profile.dob);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("for", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userState.profile.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userState.profile.fb);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userState.profile.twitter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userState.profile.insta);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userState.profile.phone);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioButton"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EditProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-profile',
            templateUrl: './edit-profile.component.html',
            styleUrls: ['./edit-profile.component.css']
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rbV7":
    /*!*************************************************!*\
      !*** ./src/app/dashboards/dashboard2/data.json ***!
      \*************************************************/

    /*! exports provided: Bar, LineWithArea, Pie, default */

    /***/
    function rbV7(module) {
      module.exports = JSON.parse("{\"Bar\":{\"labels\":[\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\"],\"series\":[[9,4,11,7,10,12],[3,2,9,5,8,10]]},\"LineWithArea\":{\"labels\":[1,2,3,4,5,6,7,8],\"series\":[[0,5000,15000,8000,15000,9000,30000,0],[0,3000,5000,2000,8000,1000,5000,0]]},\"Pie\":{\"series\":[20,10,30,40]}}");
      /***/
    },

    /***/
    "s/5U":
    /*!*************************************************!*\
      !*** ./src/app/dashboards/dashboard1/data.json ***!
      \*************************************************/

    /*! exports provided: Bar, LineWithArea, Pie, default */

    /***/
    function s5U(module) {
      module.exports = JSON.parse("{\"Bar\":{\"labels\":[\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\"],\"series\":[[9,4,11,7,10,12],[3,2,9,5,8,10]]},\"LineWithArea\":{\"labels\":[1,2,3,4,5,6,7,8],\"series\":[[0,5000,15000,8000,15000,9000,30000,0],[0,3000,5000,2000,8000,1000,5000,0]]},\"Pie\":{\"series\":[20,10,30,40]}}");
      /***/
    },

    /***/
    "tu+H":
    /*!***************************************************!*\
      !*** ./src/app/dashboards/chat/chat.component.ts ***!
      \***************************************************/

    /*! exports provided: ChatComponent */

    /***/
    function tuH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
        return ChatComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/models/user */
      "NlNA");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _shared_services_ds_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/services/ds.service */
      "POxX");

      var _c0 = ["messagesDiv"];

      var ChatComponent = /*#__PURE__*/function () {
        function ChatComponent(ds, store) {
          _classCallCheck(this, ChatComponent);

          this.ds = ds;
          this.store = store;
          this.userData = new _shared_models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
          this.storagePath = null;
          this.title = 'deepChat';
          this.username = null;
          this.chatMessage = '';
          this.chatArray = [];
          this.sidePanelOpened = true;
        }

        _createClass(ChatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.storagePath = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].storageUrl;
            this.store.select(function (store) {
              return store.UserState;
            }).subscribe(function (userdata) {
              _this4.userData = userdata.user;

              _this4.chantInit();

              _this4.scrollToBottom();
            });
          }
        }, {
          key: "isOver",
          value: function isOver() {
            return window.matchMedia("(max-width: 960px)").matches;
          }
        }, {
          key: "chantInit",
          value: function chantInit() {
            var _this5 = this;

            this.username = this.userData.email; // Login without credentials

            this.ds.login(null, this.loginHandler);
            this.chats = this.ds.getList('chats');
            this.chats.subscribe(function (msg) {
              console.log(msg);
              msg.forEach(function (element) {
                _this5.ds.getRecord(element).subscribe(function (m) {
                  console.log(m);

                  _this5.chatArray.push(m);

                  _this5.scrollToBottom();
                });
              });
            }); // this.chats.on('entry-added', recordName => {
            //   this.ds.getRecord( recordName ).whenReady( record => {
            //     record.subscribe( (data) => {
            //       if(data.username && data.text) {
            //         // Update bindable property
            //         this.chatArray.push(data);
            //         console.log(this.chatArray)
            //       }
            //     }, true );
            //   });
            // })
          }
        }, {
          key: "loginHandler",
          value: function loginHandler(success, data) {
            console.log('logged in', success, data);
          }
        }, {
          key: "scrollToBottom",
          value: function scrollToBottom() {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight + 20;
            console.log(this.myScrollContainer.nativeElement.scrollHeight);
          }
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            var recordName = 'chat/' + this.ds.dsInstance.getUid(); //const recordName = 'chat/' + this.userData.id;

            var chatRecord = this.ds.getRecord(recordName);
            chatRecord.set({
              uid: this.userData.id,
              username: this.username,
              text: this.chatMessage,
              userimage: this.userData.profile.profilepic,
              date: new Date()
            });
            this.chatMessage = ''; // Update the chats list

            this.chats.addEntry(recordName);
          }
        }]);

        return ChatComponent;
      }();

      ChatComponent.??fac = function ChatComponent_Factory(t) {
        return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_ds_service__WEBPACK_IMPORTED_MODULE_4__["DsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
      };

      ChatComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ChatComponent,
        selectors: [["app-chat"]],
        viewQuery: function ChatComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.myScrollContainer = _t.first);
          }
        },
        decls: 0,
        vars: 0,
        template: function ChatComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChatComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.scss']
          }]
        }], function () {
          return [{
            type: _shared_services_ds_service__WEBPACK_IMPORTED_MODULE_4__["DsService"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
          }];
        }, {
          myScrollContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['messagesDiv', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "w7xh":
    /*!***************************************************************************************!*\
      !*** ./src/app/dashboards/change-password-dialog/change-password-dialog.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: ChangePasswordDialogComponent */

    /***/
    function w7xh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordDialogComponent", function () {
        return ChangePasswordDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/user.service */
      "dU4z");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function ChangePasswordDialogComponent_div_7_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var msg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](msg_r4.msg);
        }
      }

      function ChangePasswordDialogComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ChangePasswordDialogComponent_div_7_small_1_Template, 2, 1, "small", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var msg_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", msg_r4.show);
        }
      }

      function ChangePasswordDialogComponent_div_14_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var msg_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](msg_r7.msg);
        }
      }

      function ChangePasswordDialogComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ChangePasswordDialogComponent_div_14_small_1_Template, 2, 1, "small", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var msg_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", msg_r7.show);
        }
      }

      function ChangePasswordDialogComponent_div_21_small_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "small", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var msg_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](msg_r10.msg);
        }
      }

      function ChangePasswordDialogComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ChangePasswordDialogComponent_div_21_small_1_Template, 2, 1, "small", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var msg_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", msg_r10.show);
        }
      }

      var ChangePasswordDialogComponent = /*#__PURE__*/function () {
        function ChangePasswordDialogComponent(dialogRef, data, store, updates$, userService, snackBar) {
          _classCallCheck(this, ChangePasswordDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.store = store;
          this.updates$ = updates$;
          this.userService = userService;
          this.snackBar = snackBar;
          this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.password = {
            oldpassword: '',
            oldpasswordmsg: [{
              id: 1,
              show: false,
              msg: 'Please enter old password!'
            }, {
              id: 2,
              show: false,
              msg: 'Incorrect old password!'
            }],
            newpassword: '',
            newpasswordmsg: [{
              id: 1,
              show: false,
              msg: 'Password must contain at least 8 characters!'
            }, {
              id: 2,
              show: false,
              msg: ''
            }, {
              id: 3,
              show: false,
              msg: 'Passwords do not match!'
            }],
            confirmnewpassword: '',
            confirmnewpasswordmsg: [{
              id: 1,
              show: false,
              msg: 'Password must contain at least 8 characters!'
            }, {
              id: 2,
              show: false,
              msg: 'Passwords do not match!'
            }]
          };
          this.oldPassOk = false;
          this.passwordValid = false;
        }

        _createClass(ChangePasswordDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "checkPass",
          value: function checkPass(event) {
            var _this6 = this;

            var err = false;

            if (this.password.oldpassword.length === 0) {
              this.password.oldpasswordmsg[0].show = true;
              err = true;
            } else {
              this.password.oldpasswordmsg[0].show = false;
              err = false;
            }

            if (!err) {
              this.userService.checkOldPassword({
                email: this.data.email,
                password: this.password.oldpassword
              }).subscribe(function (response) {
                if (response === 403) {
                  _this6.password.oldpasswordmsg[1].show = true;
                  _this6.oldPassOk = false;
                } else if (response === 200) {
                  _this6.password.oldpasswordmsg[1].show = false;
                  _this6.oldPassOk = true;
                }

                _this6.checkPasswordValidity();
              });
            }

            this.checkPasswordValidity();
          }
        }, {
          key: "checkNewPass",
          value: function checkNewPass(e) {
            if (this.password.newpassword.length < 8) {
              this.password.newpasswordmsg[0].show = true;
            } else {
              this.password.newpasswordmsg[0].show = false;
            }

            if (this.password.confirmnewpassword.length > 0) {
              if (this.password.confirmnewpassword != this.password.newpassword) {
                this.password.confirmnewpasswordmsg[1].show = true;
                this.password.newpasswordmsg[2].show = true;
              } else {
                this.password.confirmnewpasswordmsg[1].show = false;
                this.password.newpasswordmsg[2].show = false;
              }
            }

            this.checkPasswordValidity();
          }
        }, {
          key: "checkConfirmPass",
          value: function checkConfirmPass(e) {
            if (this.password.confirmnewpassword.length < 8) {
              this.password.confirmnewpasswordmsg[0].show = true;
            } else {
              this.password.confirmnewpasswordmsg[0].show = false;
            }

            if (this.password.confirmnewpassword != this.password.newpassword) {
              this.password.confirmnewpasswordmsg[1].show = true;
              this.password.newpasswordmsg[2].show = true;
            } else {
              this.password.confirmnewpasswordmsg[1].show = false;
              this.password.newpasswordmsg[2].show = false;
            }

            this.checkPasswordValidity();
          }
        }, {
          key: "checkPasswordValidity",
          value: function checkPasswordValidity() {
            if (this.oldPassOk) {
              if (this.password.confirmnewpassword.length > 0 && this.password.newpassword.length > 0) {
                if (this.password.confirmnewpassword === this.password.newpassword) {
                  this.passwordValid = true;
                } else {
                  this.passwordValid = false;
                }
              } else {
                this.passwordValid = false;
              }
            } else {
              this.passwordValid = false;
            }
          }
        }, {
          key: "changePassword",
          value: function changePassword() {
            var _this7 = this;

            if (this.passwordValid) {
              this.userService.changePassword({
                email: this.data.email,
                oldpassword: this.password.oldpassword,
                newpassword: this.password.newpassword
              }).subscribe(function (response) {
                _this7.dialogRef.close(true);

                if (response === 200) {
                  _this7.openSnackBar('Password Updated!');
                } else if (response === 403) {
                  _this7.openSnackBar('Unauthorized! pleasse check your old password and try again!');
                } else if (response === 500) {
                  _this7.openSnackBar('Unable to change password at this time, please try later!');
                }
              });
            }
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar(message) {
            var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'close';
            this.snackBar.open(message, action, {
              duration: 1000
            });
          }
        }, {
          key: "addUser",
          value: function addUser() {
            this.onAdd.emit();
            this.dialogRef.close(true);
          }
        }, {
          key: "closeDialog",
          value: function closeDialog(confirmation) {
            this.dialogRef.close(confirmation);
          }
        }]);

        return ChangePasswordDialogComponent;
      }();

      ChangePasswordDialogComponent.??fac = function ChangePasswordDialogComponent_Factory(t) {
        return new (t || ChangePasswordDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
      };

      ChangePasswordDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ChangePasswordDialogComponent,
        selectors: [["change-password-dialog"]],
        decls: 31,
        vars: 7,
        consts: [["mat-dialog-title", ""], [1, "basic-form"], ["userForm", "ngForm"], ["mat-dialog-content", ""], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-top", "20px"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], [4, "ngFor", "ngForOf"], ["appearance", "outline"], ["type", "password", "matInput", "", "mat-autosize", "", "required", "", "name", "oldpass", 3, "ngModel", "focusout", "ngModelChange"], ["fxLayout", "row", "fxLayoutWrap", "wrap"], ["type", "password", "matInput", "", "mat-autosize", "", "required", "", "name", "newpass", 3, "ngModel", "focusout", "ngModelChange"], ["type", "password", "matInput", "", "mat-autosize", "", "required", "", "name", "confirmnewpass", 3, "ngModel", "focusout", "ngModelChange"], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "color", "basic", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["class", "text-danger font-14", 4, "ngIf"], [1, "text-danger", "font-14"]],
        template: function ChangePasswordDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Change Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ChangePasswordDialogComponent_div_7_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Current Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focusout", function ChangePasswordDialogComponent_Template_input_focusout_11_listener($event) {
              return ctx.checkPass($event);
            })("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.password.oldpassword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ChangePasswordDialogComponent_div_14_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "New Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focusout", function ChangePasswordDialogComponent_Template_input_focusout_18_listener($event) {
              return ctx.checkNewPass($event);
            })("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.password.newpassword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, ChangePasswordDialogComponent_div_21_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Confirm new Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("focusout", function ChangePasswordDialogComponent_Template_input_focusout_25_listener($event) {
              return ctx.checkConfirmPass($event);
            })("ngModelChange", function ChangePasswordDialogComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.password.confirmnewpassword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChangePasswordDialogComponent_Template_button_click_27_listener() {
              return ctx.closeDialog(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChangePasswordDialogComponent_Template_button_click_29_listener() {
              return ctx.changePassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Change Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.password.oldpasswordmsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.password.oldpassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.password.newpasswordmsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.password.newpassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.password.confirmnewpasswordmsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.password.confirmnewpassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.passwordValid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
        styles: [".table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px solid #EEEEEE;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 10px 0;\n  font-size: 12px;\n  border-bottom: 1px solid #EEEEEE;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding-left: 10px 0;\n  border-bottom: 1px solid #EEEEEE;\n  transition: all 0.2s ease-in-out;\n}\n\n.table-row[_ngcontent-%COMP%]:hover{\n  background-color: rgba(97, 97, 97, 0.068);\n}\n\n\n\n.table-row.role_assigned[_ngcontent-%COMP%]{\n  background-color: rgba(127, 255, 212, 0.2)\n}\n\n.table-row[_ngcontent-%COMP%]:hover.role_assigned{\n  background-color: rgba(127, 255, 212, 0.7)\n}\n\n.table-row[_ngcontent-%COMP%]:nth-of-type(odd) {\n  \n}\n\n.table-data[_ngcontent-%COMP%], .header__item[_ngcontent-%COMP%] {\n  flex: 1 1 20%;\n  text-align: center;\n  padding: 5px;\n}\n\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 12px;\n}\n\n.filter__link[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n.filter__link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: -18px;\n  color: white;\n  font-size: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.filter__link.desc[_ngcontent-%COMP%]::after {\n  content: \"(desc)\";\n}\n\n.filter__link.asc[_ngcontent-%COMP%]::after {\n  content: \"(asc)\";\n}\n\n.column-role[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n  font-size: 12px;\n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.column-name[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n  font-size: 12px;\n  \n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.column-detail[_ngcontent-%COMP%]{\n  flex: 0 0 40%;\n  font-size: 12px;\n}\n\n.column-actions[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkcy9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGdDQUFnQztFQUtoQyxnQ0FBZ0M7QUFDbEM7O0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUEsWUFBWTs7QUFDWjtFQUNFO0FBQ0Y7O0FBQ0E7RUFDRTtBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdEQUFnRDtFQUNoRCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFFBQVE7RUFDUiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBS0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnREFBZ0Q7QUFDbEQ7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsZ0RBQWdEO0FBQ2xEOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmRzL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwcHggc29saWQgI0VFRUVFRTtcbn1cblxuLnRhYmxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUVFRUU7XG59XG5cbi50YWJsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFRUVFO1xuXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi50YWJsZS1yb3c6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMC4wNjgpO1xufVxuXG4vKiBCUkVBS0VSICovXG4udGFibGUtcm93LnJvbGVfYXNzaWduZWR7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyNTUsIDIxMiwgMC4yKVxufVxuLnRhYmxlLXJvdzpob3Zlci5yb2xlX2Fzc2lnbmVke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuNylcbn1cblxuLnRhYmxlLXJvdzpudGgtb2YtdHlwZShvZGQpIHtcbiAgLypiYWNrZ3JvdW5kOiAjRUVFRUVFOyovXG59XG5cbi50YWJsZS1kYXRhLFxuLmhlYWRlcl9faXRlbSB7XG4gIGZsZXg6IDEgMSAyMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaGVhZGVyX19pdGVtIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5maWx0ZXJfX2xpbmsge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cbi5maWx0ZXJfX2xpbms6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmZpbHRlcl9fbGluay5kZXNjOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKGRlc2MpXCI7XG59XG4uZmlsdGVyX19saW5rLmFzYzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIihhc2MpXCI7XG59XG5cblxuXG5cbi5jb2x1bW4tcm9sZXtcbiAgZmxleDogMCAwIDIwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG59XG4uY29sdW1uLW5hbWV7XG4gIGZsZXg6IDAgMCAyMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLypqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7Ki9cbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xufVxuLmNvbHVtbi1kZXRhaWx7XG4gIGZsZXg6IDAgMCA0MCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbHVtbi1hY3Rpb25ze1xuICBmbGV4OiAwIDAgMjAlO1xufVxuXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChangePasswordDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'change-password-dialog',
            templateUrl: './change-password-dialog.component.html',
            styleUrls: ['./change-password-dialog.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
          }, {
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=dashboards-dashboards-module-es5.js.map