(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"], {
    /***/
    "/OYN":
    /*!***********************************************!*\
      !*** ./src/app/news/services/news.service.ts ***!
      \***********************************************/

    /*! exports provided: NewsService */

    /***/
    function OYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsService", function () {
        return NewsService;
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

      var NewsService = /*#__PURE__*/function () {
        function NewsService(http) {
          _classCallCheck(this, NewsService);

          this.http = http;
          this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        } //get dashboard data


        _createClass(NewsService, [{
          key: "getDashboard",
          value: function getDashboard() {
            return this.http.get(this.apiUrl + 'news/dashboard');
          } // get the news that belongs to me, with status & bar(s)

        }, {
          key: "myNews",
          value: function myNews() {
            var perpage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            return this.http.get(this.apiUrl + 'news', {
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('no_result', perpage.toString()).set('page', page.toString())
            });
          } // get the trashed news that belongs to me, with status & bar(s)

        }, {
          key: "trashNews",
          value: function trashNews() {
            var perpage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            return this.http.get(this.apiUrl + 'news/trash', {
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('no_result', perpage.toString()).set('page', page.toString())
            });
          } // get a news, with status & bar(s)

        }, {
          key: "getNews",
          value: function getNews(id) {
            return this.http.get(this.apiUrl + 'news/' + id);
          } // save a news, with bar(s) & ticker(s)

        }, {
          key: "saveNews",
          value: function saveNews(save_news) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json; charset=utf-8'
            });
            save_news.newsstatus_id = 1;
            var post_str = JSON.parse(JSON.stringify(save_news));
            console.log(post_str);
            return this.http.post(this.apiUrl + 'news', post_str, {
              headers: headers
            });
          } // untrash a news

        }, {
          key: "unTrashNews",
          value: function unTrashNews(id) {
            return this.http.put(this.apiUrl + 'news/untrash/' + id, null);
          } // deleate a news

        }, {
          key: "destroyNews",
          value: function destroyNews(id) {
            return this.http["delete"](this.apiUrl + 'news/' + id);
          } // deleate a news

        }, {
          key: "destroyNewsForever",
          value: function destroyNewsForever(id) {
            return this.http["delete"](this.apiUrl + 'news/destroy/' + id);
          } // deleate a news bar

        }, {
          key: "destroyBar",
          value: function destroyBar(id) {
            return this.http["delete"](this.apiUrl + 'news/bar/' + id);
          } // get a news for editing

        }, {
          key: "editNews",
          value: function editNews(id) {
            return this.http.get(this.apiUrl + 'news/edit/' + id);
          } // save a news, with bar(s) & ticker(s)

        }, {
          key: "updateNews",
          value: function updateNews(save_news, id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json; charset=utf-8'
            });
            save_news.newsstatus_id = 1;
            var post_str = JSON.parse(JSON.stringify(save_news));
            return this.http.put(this.apiUrl + 'news/' + id, post_str, {
              headers: headers
            });
          } // Get tickers, tickers are returned with ticker news

        }, {
          key: "GetTickers",
          value: function GetTickers() {
            return this.http.get(this.apiUrl + 'news/ticker/tickers');
          } // Add a news to a ticker

        }, {
          key: "AddTickerNews",
          value: function AddTickerNews(ticker_news) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json; charset=utf-8'
            });
            return this.http.post(this.apiUrl + 'news/ticker/news/add', ticker_news, {
              headers: headers
            });
          } // Enable a ticker news

        }, {
          key: "ApproveTickerNews",
          value: function ApproveTickerNews(ticker_news_id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json; charset=utf-8'
            });
            return this.http.put(this.apiUrl + 'news/ticker/news/enable', {
              ticker_news_id: ticker_news_id
            }, {
              headers: headers
            });
          } // Disable a ticker news

        }, {
          key: "DisApproveTickerNews",
          value: function DisApproveTickerNews(ticker_news_id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json; charset=utf-8'
            });
            return this.http.put(this.apiUrl + 'news/ticker/news/disable', {
              ticker_news_id: ticker_news_id
            }, {
              headers: headers
            });
          } // deleate a ticker news

        }, {
          key: "destroyTickerNews",
          value: function destroyTickerNews(ticker_news_id) {
            return this.http["delete"](this.apiUrl + 'news/ticker/news/' + ticker_news_id);
          } // Add a ticker

        }, {
          key: "AddTicker",
          value: function AddTicker(ticker) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json; charset=utf-8'
            });
            return this.http.post(this.apiUrl + 'news/ticker/add/new', ticker, {
              headers: headers
            });
          }
        }]);

        return NewsService;
      }();

      NewsService.??fac = function NewsService_Factory(t) {
        return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      NewsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: NewsService,
        factory: NewsService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewsService, [{
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
    "0fKI":
    /*!*************************************************!*\
      !*** ./src/app/news/mynews/mynews.component.ts ***!
      \*************************************************/

    /*! exports provided: MynewsComponent, NewsDataSource */

    /***/
    function fKI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MynewsComponent", function () {
        return MynewsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsDataSource", function () {
        return NewsDataSource;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_services_pusher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../shared/services/pusher.service */
      "izU/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/table */
      "f6nW");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../shared/component/confirm-dialog/confirm-dialog.component */
      "l8SP");
      /* harmony import */


      var _shared_component_view_news_dialog_view_news_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../shared/component/view-news-dialog/view-news-dialog.component */
      "KOJr");
      /* harmony import */


      var _store_news_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../store/news.actions */
      "5WGB");
      /* harmony import */


      var _store_news_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../store/news.reducer */
      "m/2J");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");

      function MynewsComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "You Have No News");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_8_mat_header_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " News Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_8_mat_cell_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 1, news_r19.news_name), " ");
        }
      }

      function MynewsComponent_div_8_mat_header_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Heading ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_8_mat_cell_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("dhv_nosize", news_r20.language.language_code == "Dhv");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", news_r20.heading, " ");
        }
      }

      function MynewsComponent_div_8_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_8_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](1, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](1, 2, news_r21.created_at, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](3, 5, news_r21.created_at), " ");
        }
      }

      function MynewsComponent_div_8_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_8_mat_cell_14_mat_chip_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Draft");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_8_mat_cell_14_mat_chip_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Approved");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_8_mat_cell_14_mat_chip_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "In-Review");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_8_mat_cell_14_mat_chip_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Rejected");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_8_mat_cell_14_mat_chip_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "NEWS BREAKER");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_8_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, MynewsComponent_div_8_mat_cell_14_mat_chip_2_Template, 2, 0, "mat-chip", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, MynewsComponent_div_8_mat_cell_14_mat_chip_3_Template, 2, 0, "mat-chip", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, MynewsComponent_div_8_mat_cell_14_mat_chip_4_Template, 2, 0, "mat-chip", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, MynewsComponent_div_8_mat_cell_14_mat_chip_5_Template, 2, 0, "mat-chip", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, MynewsComponent_div_8_mat_cell_14_mat_chip_6_Template, 2, 0, "mat-chip", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r22.newsstatus.status == "draft");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r22.newsstatus.status == "published");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r22.newsstatus.status == "ready");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r22.newsstatus.status == "reject");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r22.newsstatus.status == "breaker");
        }
      }

      function MynewsComponent_div_8_mat_header_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Actions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_8_mat_cell_18_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function MynewsComponent_div_8_mat_cell_18_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r34);

            var news_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r32.deleteNews(news_r28.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-icon", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_8_mat_cell_18_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-icon", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate1"]("routerLink", "/news/", news_r28.id, "");
        }
      }

      function MynewsComponent_div_8_mat_cell_18_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function MynewsComponent_div_8_mat_cell_18_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r38);

            var news_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r36.viewNews(news_r28.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-icon", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "note");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_8_mat_cell_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, MynewsComponent_div_8_mat_cell_18_button_1_Template, 3, 0, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, MynewsComponent_div_8_mat_cell_18_button_2_Template, 3, 1, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function MynewsComponent_div_8_mat_cell_18_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r40);

            var news_r28 = ctx.$implicit;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r39.viewNews(news_r28.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "zoom_in");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, MynewsComponent_div_8_mat_cell_18_button_6_Template, 3, 0, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !(news_r28.newsstatus.status === "published" || news_r28.newsstatus.status === "breaker"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r28.newsstatus.status != "published");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r28.newsnotes[0]);
        }
      }

      function MynewsComponent_div_8_mat_header_row_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "mat-header-row");
        }
      }

      function MynewsComponent_div_8_mat_row_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-row", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("mouseenter", function MynewsComponent_div_8_mat_row_20_Template_mat_row_mouseenter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r44);

            var i_r42 = ctx.index;

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r43.hover(i_r42);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-table", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](3, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, MynewsComponent_div_8_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, MynewsComponent_div_8_mat_cell_5_Template, 3, 3, "mat-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](6, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, MynewsComponent_div_8_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, MynewsComponent_div_8_mat_cell_8_Template, 2, 3, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](9, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, MynewsComponent_div_8_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, MynewsComponent_div_8_mat_cell_11_Template, 4, 7, "mat-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](12, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](13, MynewsComponent_div_8_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, MynewsComponent_div_8_mat_cell_14_Template, 7, 5, "mat-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](16, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](17, MynewsComponent_div_8_mat_header_cell_17_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](18, MynewsComponent_div_8_mat_cell_18_Template, 7, 3, "mat-cell", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](19, MynewsComponent_div_8_mat_header_row_19_Template, 1, 0, "mat-header-row", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](20, MynewsComponent_div_8_mat_row_20_Template, 1, 0, "mat-row", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "mat-paginator", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("page", function MynewsComponent_div_8_Template_mat_paginator_page_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r46);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r45.pageEvent = ctx_r45.onPaginateChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("dataSource", ctx_r1.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("hidden", ctx_r1.iii != ctx_r1.hoveredIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matHeaderRowDef", ctx_r1.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matRowDefColumns", ctx_r1.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("length", ctx_r1.length)("pageSize", ctx_r1.pageSize)("pageSizeOptions", ctx_r1.pageSizeOptions);
        }
      }

      function MynewsComponent_div_11_mat_header_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " News Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_11_mat_cell_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r61 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 1, news_r61.news_name), " ");
        }
      }

      function MynewsComponent_div_11_mat_header_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Heading ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_11_mat_cell_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r62 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("dhv_nosize", news_r62.language.language_code == "Dhv");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", news_r62.heading, " ");
        }
      }

      function MynewsComponent_div_11_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_11_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r63 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 1, news_r63.created_at), " ");
        }
      }

      function MynewsComponent_div_11_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_11_mat_cell_14_mat_chip_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Draft");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_11_mat_cell_14_mat_chip_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Approved");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_11_mat_cell_14_mat_chip_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "In-Review");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_11_mat_cell_14_mat_chip_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Rejected");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_11_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, MynewsComponent_div_11_mat_cell_14_mat_chip_2_Template, 2, 0, "mat-chip", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, MynewsComponent_div_11_mat_cell_14_mat_chip_3_Template, 2, 0, "mat-chip", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, MynewsComponent_div_11_mat_cell_14_mat_chip_4_Template, 2, 0, "mat-chip", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, MynewsComponent_div_11_mat_cell_14_mat_chip_5_Template, 2, 0, "mat-chip", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r64 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r64.newsstatus.status == "draft");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r64.newsstatus.status == "published");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r64.newsstatus.status == "ready");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r64.newsstatus.status == "reject");
        }
      }

      function MynewsComponent_div_11_mat_header_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Actions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_11_mat_cell_17_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function MynewsComponent_div_11_mat_cell_17_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r75);

            var news_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r73.deleteNews(news_r69.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_11_mat_cell_17_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate1"]("routerLink", "/news/", news_r69.id, "");
        }
      }

      function MynewsComponent_div_11_mat_cell_17_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function MynewsComponent_div_11_mat_cell_17_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r79);

            var news_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r77.viewNews(news_r69.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-icon", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "note");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_11_mat_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, MynewsComponent_div_11_mat_cell_17_button_1_Template, 2, 0, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, MynewsComponent_div_11_mat_cell_17_button_2_Template, 2, 1, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function MynewsComponent_div_11_mat_cell_17_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r81);

            var news_r69 = ctx.$implicit;

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r80.viewNews(news_r69.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "zoom_in");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, MynewsComponent_div_11_mat_cell_17_button_6_Template, 3, 0, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r69 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r69.newsstatus.status != "published");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r69.newsstatus.status != "published");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r69.newsnotes[0]);
        }
      }

      function MynewsComponent_div_11_mat_header_row_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "mat-header-row");
        }
      }

      function MynewsComponent_div_11_mat_row_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "mat-row");
        }
      }

      function MynewsComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-table", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](3, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, MynewsComponent_div_11_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, MynewsComponent_div_11_mat_cell_5_Template, 3, 3, "mat-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](6, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, MynewsComponent_div_11_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, MynewsComponent_div_11_mat_cell_8_Template, 2, 3, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](9, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, MynewsComponent_div_11_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, MynewsComponent_div_11_mat_cell_11_Template, 3, 3, "mat-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](12, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](13, MynewsComponent_div_11_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, MynewsComponent_div_11_mat_cell_14_Template, 6, 4, "mat-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](15, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](16, MynewsComponent_div_11_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](17, MynewsComponent_div_11_mat_cell_17_Template, 7, 3, "mat-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](18, MynewsComponent_div_11_mat_header_row_18_Template, 1, 0, "mat-header-row", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](19, MynewsComponent_div_11_mat_row_19_Template, 1, 0, "mat-row", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "mat-paginator", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("page", function MynewsComponent_div_11_Template_mat_paginator_page_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r84);

            var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r83.pageEvent = ctx_r83.onPaginateChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("dataSource", ctx_r2.inReviewList);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matHeaderRowDef", ctx_r2.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matRowDefColumns", ctx_r2.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("length", ctx_r2.length)("pageSize", ctx_r2.pageSize)("pageSizeOptions", ctx_r2.pageSizeOptions);
        }
      }

      function MynewsComponent_div_14_mat_header_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " News Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_14_mat_cell_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function MynewsComponent_div_14_mat_cell_5_Template_mat_cell_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r101);

            var news_r99 = ctx.$implicit;

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r100.viewNews(news_r99.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r99 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 1, news_r99.news_name), " ");
        }
      }

      function MynewsComponent_div_14_mat_header_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Heading ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_14_mat_cell_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function MynewsComponent_div_14_mat_cell_8_Template_mat_cell_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r104);

            var news_r102 = ctx.$implicit;

            var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r103.viewNews(news_r102.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r102 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("dhv_nosize", news_r102.language.language_code == "Dhv");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", news_r102.heading, " ");
        }
      }

      function MynewsComponent_div_14_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_14_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function MynewsComponent_div_14_mat_cell_11_Template_mat_cell_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r107);

            var news_r105 = ctx.$implicit;

            var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r106.viewNews(news_r105.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r105 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 1, news_r105.created_at), " ");
        }
      }

      function MynewsComponent_div_14_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_14_mat_cell_14_mat_chip_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Draft");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_14_mat_cell_14_mat_chip_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Approved");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_14_mat_cell_14_mat_chip_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "In-Review");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_14_mat_cell_14_mat_chip_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Rejected");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_14_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function MynewsComponent_div_14_mat_cell_14_Template_mat_cell_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r114);

            var news_r108 = ctx.$implicit;

            var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r113.viewNews(news_r108.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, MynewsComponent_div_14_mat_cell_14_mat_chip_2_Template, 2, 0, "mat-chip", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, MynewsComponent_div_14_mat_cell_14_mat_chip_3_Template, 2, 0, "mat-chip", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, MynewsComponent_div_14_mat_cell_14_mat_chip_4_Template, 2, 0, "mat-chip", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, MynewsComponent_div_14_mat_cell_14_mat_chip_5_Template, 2, 0, "mat-chip", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r108 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r108.newsstatus.status == "draft");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r108.newsstatus.status == "published");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r108.newsstatus.status == "ready");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r108.newsstatus.status == "reject");
        }
      }

      function MynewsComponent_div_14_mat_header_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Actions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_14_mat_cell_17_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function MynewsComponent_div_14_mat_cell_17_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r121);

            var news_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

            var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r119.deleteNews(news_r115.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_14_mat_cell_17_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate1"]("routerLink", "/news/", news_r115.id, "");
        }
      }

      function MynewsComponent_div_14_mat_cell_17_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function MynewsComponent_div_14_mat_cell_17_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r125);

            var news_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

            var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r123.viewNews(news_r115.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-icon", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "note");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_14_mat_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, MynewsComponent_div_14_mat_cell_17_button_1_Template, 2, 0, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, MynewsComponent_div_14_mat_cell_17_button_2_Template, 2, 1, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function MynewsComponent_div_14_mat_cell_17_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r127);

            var news_r115 = ctx.$implicit;

            var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r126.viewNews(news_r115.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "zoom_in");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, MynewsComponent_div_14_mat_cell_17_button_6_Template, 3, 0, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r115 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r115.newsstatus.status != "published");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r115.newsstatus.status != "published");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r115.newsnotes[0]);
        }
      }

      function MynewsComponent_div_14_mat_header_row_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "mat-header-row");
        }
      }

      function MynewsComponent_div_14_mat_row_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "mat-row");
        }
      }

      function MynewsComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-table", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](3, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, MynewsComponent_div_14_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, MynewsComponent_div_14_mat_cell_5_Template, 3, 3, "mat-cell", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](6, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, MynewsComponent_div_14_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, MynewsComponent_div_14_mat_cell_8_Template, 2, 3, "mat-cell", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](9, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, MynewsComponent_div_14_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, MynewsComponent_div_14_mat_cell_11_Template, 3, 3, "mat-cell", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](12, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](13, MynewsComponent_div_14_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, MynewsComponent_div_14_mat_cell_14_Template, 6, 4, "mat-cell", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](15, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](16, MynewsComponent_div_14_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](17, MynewsComponent_div_14_mat_cell_17_Template, 7, 3, "mat-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](18, MynewsComponent_div_14_mat_header_row_18_Template, 1, 0, "mat-header-row", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](19, MynewsComponent_div_14_mat_row_19_Template, 1, 0, "mat-row", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "mat-paginator", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("page", function MynewsComponent_div_14_Template_mat_paginator_page_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r130);

            var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r129.pageEvent = ctx_r129.onPaginateChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("dataSource", ctx_r3.publishedNews);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matHeaderRowDef", ctx_r3.displayedColumnsPublished);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matRowDefColumns", ctx_r3.displayedColumnsPublished);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("length", ctx_r3.length)("pageSize", ctx_r3.pageSize)("pageSizeOptions", ctx_r3.pageSizeOptions);
        }
      }

      function MynewsComponent_div_17_mat_header_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " News Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_17_mat_cell_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r145 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 1, news_r145.news_name), " ");
        }
      }

      function MynewsComponent_div_17_mat_header_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Heading ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_17_mat_cell_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r146 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("dhv_nosize", news_r146.language.language_code == "Dhv");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", news_r146.heading, " ");
        }
      }

      function MynewsComponent_div_17_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_17_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r147 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 1, news_r147.created_at), " ");
        }
      }

      function MynewsComponent_div_17_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_17_mat_cell_14_mat_chip_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Draft");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_17_mat_cell_14_mat_chip_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Approved");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_17_mat_cell_14_mat_chip_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "In-Review");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_17_mat_cell_14_mat_chip_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Rejected");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_17_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, MynewsComponent_div_17_mat_cell_14_mat_chip_2_Template, 2, 0, "mat-chip", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, MynewsComponent_div_17_mat_cell_14_mat_chip_3_Template, 2, 0, "mat-chip", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, MynewsComponent_div_17_mat_cell_14_mat_chip_4_Template, 2, 0, "mat-chip", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, MynewsComponent_div_17_mat_cell_14_mat_chip_5_Template, 2, 0, "mat-chip", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r148 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r148.newsstatus.status == "draft");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r148.newsstatus.status == "published");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r148.newsstatus.status == "ready");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r148.newsstatus.status == "reject");
        }
      }

      function MynewsComponent_div_17_mat_header_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Actions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_17_mat_cell_17_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function MynewsComponent_div_17_mat_cell_17_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r159);

            var news_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

            var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r157.deleteNews(news_r153.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_17_mat_cell_17_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate1"]("routerLink", "/news/", news_r153.id, "");
        }
      }

      function MynewsComponent_div_17_mat_cell_17_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function MynewsComponent_div_17_mat_cell_17_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r163);

            var news_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;

            var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r161.viewNews(news_r153.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-icon", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "note");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function MynewsComponent_div_17_mat_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, MynewsComponent_div_17_mat_cell_17_button_1_Template, 2, 0, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, MynewsComponent_div_17_mat_cell_17_button_2_Template, 2, 1, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function MynewsComponent_div_17_mat_cell_17_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r165);

            var news_r153 = ctx.$implicit;

            var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r164.viewNews(news_r153.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "zoom_in");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, MynewsComponent_div_17_mat_cell_17_button_6_Template, 3, 0, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r153 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r153.newsstatus.status != "published");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r153.newsstatus.status != "published");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", news_r153.newsnotes[0]);
        }
      }

      function MynewsComponent_div_17_mat_header_row_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "mat-header-row");
        }
      }

      function MynewsComponent_div_17_mat_row_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "mat-row");
        }
      }

      function MynewsComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-table", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](3, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, MynewsComponent_div_17_mat_header_cell_4_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, MynewsComponent_div_17_mat_cell_5_Template, 3, 3, "mat-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](6, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, MynewsComponent_div_17_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, MynewsComponent_div_17_mat_cell_8_Template, 2, 3, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](9, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, MynewsComponent_div_17_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, MynewsComponent_div_17_mat_cell_11_Template, 3, 3, "mat-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](12, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](13, MynewsComponent_div_17_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, MynewsComponent_div_17_mat_cell_14_Template, 6, 4, "mat-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](15, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](16, MynewsComponent_div_17_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](17, MynewsComponent_div_17_mat_cell_17_Template, 7, 3, "mat-cell", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](18, MynewsComponent_div_17_mat_header_row_18_Template, 1, 0, "mat-header-row", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](19, MynewsComponent_div_17_mat_row_19_Template, 1, 0, "mat-row", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "mat-paginator", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("page", function MynewsComponent_div_17_Template_mat_paginator_page_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r168);

            var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r167.pageEvent = ctx_r167.onPaginateChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("dataSource", ctx_r4.RejectedNews);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matHeaderRowDef", ctx_r4.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matRowDefColumns", ctx_r4.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("length", ctx_r4.length)("pageSize", ctx_r4.pageSize)("pageSizeOptions", ctx_r4.pageSizeOptions);
        }
      }

      var MynewsComponent = /*#__PURE__*/function () {
        function MynewsComponent(dialog, store, pusher) {
          _classCallCheck(this, MynewsComponent);

          this.dialog = dialog;
          this.store = store;
          this.pusher = pusher;
          this.displayedColumns = ['news_name', 'heading', 'date', 'status', 'actions'];
          this.displayedColumnsPublished = ['news_name', 'heading', 'date', 'status'];
          this.dataSource = new NewsDataSource(this.store);
          this.my_news_count = 0;
          this.pageIndex = 1;
          this.pageSize = 100;
          this.pageSizeOptions = [5, 10, 25, 50, 100];
          this.iii = null;
          this.hoveredIndex = null;
        }

        _createClass(MynewsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.init_news$ = this.store.select(function (store) {
              return store.NewsState.isMyNewsLoaded;
            }).subscribe(function (isLoaded) {
              if (!isLoaded) {
                console.log('loading news');

                _this2.store.dispatch(new _store_news_actions__WEBPACK_IMPORTED_MODULE_8__["GetMyNews"]({
                  perPage: _this2.pageSize,
                  currentPage: _this2.pageIndex
                }));

                _this2.dialog.closeAll();
              } else {
                console.log('fetching news from store!');
                _this2.publishedNews = _this2.store.select(Object(_store_news_reducer__WEBPACK_IMPORTED_MODULE_9__["getMyNewsByStatus"])('published'));
                _this2.inReviewList = _this2.store.select(Object(_store_news_reducer__WEBPACK_IMPORTED_MODULE_9__["getMyNewsByStatus"])('ready'));
                _this2.RejectedNews = _this2.store.select(Object(_store_news_reducer__WEBPACK_IMPORTED_MODULE_9__["getMyNewsByStatus"])('reject'));
                _this2.dataSource = new NewsDataSource(_this2.store);

                _this2.updateNewsCount();

                _this2.setPagination();
              }
            }); // reload news when editor reviews the news

            this.pusher.channel.bind('App\\Events\\EditorReviewEvent', function (data) {
              _this2.store.dispatch(new _store_news_actions__WEBPACK_IMPORTED_MODULE_8__["UpdateMyNewsLoaded"]({
                isMyNewsLoaded: false
              }));
            });
          }
        }, {
          key: "hover",
          value: function hover(i, hoverInder) {
            this.hoveredIndex = hoverInder;
            this.iii = i;
            console.log(this.hoveredIndex);
          }
        }, {
          key: "setPagination",
          value: function setPagination() {
            var _this3 = this;

            this.news_page_state$ = this.store.select(function (store) {
              return store.NewsState;
            }).subscribe(function (response) {
              _this3.length = response.myNewsPageState.totalResults;
              _this3.pageIndex = response.myNewsPageState.currentPage;
              _this3.pageSize = response.myNewsPageState.perPage;
            });
          }
        }, {
          key: "onPaginateChange",
          value: function onPaginateChange(event) {
            var page_number = Number(event.pageIndex) + 1;
            this.pageIndex = page_number;
            this.pageSize = event.pageSize;
            this.store.dispatch(new _store_news_actions__WEBPACK_IMPORTED_MODULE_8__["UpdateMyNewsLoaded"]({
              isMyNewsLoaded: false
            }));
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "updateNewsCount",
          value: function updateNewsCount() {
            var _this4 = this;

            this.store.select(function (store) {
              return store.NewsState.myNews;
            }).subscribe(function (response) {
              _this4.my_news_count = response.length;
            });
          }
        }, {
          key: "viewNews",
          value: function viewNews(id) {
            var _this5 = this;

            this.view_dialog$ = this.store.select(Object(_store_news_reducer__WEBPACK_IMPORTED_MODULE_9__["getNewsById"])('myNews', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1)).subscribe(function (news) {
              var dialogRef = _this5.dialog.open(_shared_component_view_news_dialog_view_news_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ViewNewsDialogComponent"], {
                width: '90%',
                data: news
              });

              dialogRef.afterClosed().subscribe(function (result) {
                dialogRef = null;

                if (result) {}
              });
              dialogRef.componentInstance.onDelete.subscribe(function (result) {
                _this5.deleteNews(result);
              });
            });
            return false;
          }
        }, {
          key: "deleteNews",
          value: function deleteNews(id) {
            var _this6 = this;

            console.log('doing delete');
            var dialogRef = this.dialog.open(_shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
              width: '350px',
              data: {
                title: 'Delete News',
                message: 'Are you sure you want to delete this news?'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              dialogRef = null;

              if (result) {
                _this6.store.dispatch(new _store_news_actions__WEBPACK_IMPORTED_MODULE_8__["DeleteNews"]({
                  id: id
                }));
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.init_news$.unsubscribe();
            this.news_page_state$.unsubscribe();
          }
        }]);

        return MynewsComponent;
      }();

      MynewsComponent.??fac = function MynewsComponent_Factory(t) {
        return new (t || MynewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_shared_services_pusher_service__WEBPACK_IMPORTED_MODULE_1__["PusherService"]));
      };

      MynewsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: MynewsComponent,
        selectors: [["app-mynews"]],
        viewQuery: function MynewsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????staticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 21,
        vars: 5,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["label", "My News"], ["style", "padding-top:100px;", 4, "ngIf"], ["class", "table-rasponsive", 4, "ngIf"], ["label", "In-Review"], ["label", "Approved"], ["class", "table-rasponsive-pub", 4, "ngIf"], ["label", "Rejected"], ["mat-fab", "", "color", "warn", "routerLink", "/news/write", 1, "bottom-right"], [1, "mat-24"], [2, "padding-top", "100px"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "height", "100%", "padding", "0", "margin", "0", "display", "-webkit-box", "display", "-moz-box", "display", "-ms-flexbox", "display", "-webkit-flex", "display", "flex", "align-items", "center", "justify-content", "center"], ["fxLayout", "row"], ["src", "/assets/images/nothing-states/news.png", 2, "width", "auto", "height", "200px"], [1, "table-rasponsive"], [3, "dataSource"], ["table", ""], ["matColumnDef", "news_name"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "heading"], [3, "dhv_nosize", 4, "matCellDef"], ["matColumnDef", "date"], ["matTooltipPosition", "below", 3, "matTooltip", 4, "matCellDef"], ["matColumnDef", "status"], [3, "hidden"], ["matColumnDef", "actions"], ["style", "display: flex; justify-content: flex-end;", 4, "matCellDef"], [4, "matHeaderRowDef"], [3, "mouseenter", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSize", "pageSizeOptions", "page"], ["paginator", ""], ["matTooltipPosition", "below", 3, "matTooltip"], ["selected", "false", 4, "ngIf"], ["class", "bg-success", "selected", "true", 4, "ngIf"], ["color", "primary", "selected", "true", 4, "ngIf"], ["selected", "true", "class", "bg-warning", 4, "ngIf"], ["selected", "true", "class", "bg-danger", 4, "ngIf"], ["selected", "false"], ["selected", "true", 1, "bg-success"], ["color", "primary", "selected", "true"], ["selected", "true", 1, "bg-warning"], ["selected", "true", 1, "bg-danger"], [2, "display", "flex", "justify-content", "flex-end"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Delete News", "matTooltipPosition", "below", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "basic", "matTooltip", "Edit News", "matTooltipPosition", "below", 3, "routerLink", 4, "ngIf"], ["mat-icon-button", "", "color", "basic", "matTooltip", "View News", "matTooltipPosition", "below", 3, "click"], ["aria-label", "view news"], ["mat-icon-button", "", "color", "basic", "matTooltip", "Review Notes", "matTooltipPosition", "below", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Delete News", "matTooltipPosition", "below", 3, "click"], ["aria-label", "Edit"], ["mat-icon-button", "", "color", "basic", "matTooltip", "Edit News", "matTooltipPosition", "below", 3, "routerLink"], ["mat-icon-button", "", "color", "basic", "matTooltip", "Review Notes", "matTooltipPosition", "below", 3, "click"], ["aria-label", "view news", 2, "color", "#ffb22b"], [3, "mouseenter"], [4, "matRowDef", "matRowDefColumns"], ["color", "warn", "selected", "true", 4, "ngIf"], ["color", "warn", "selected", "true"], ["mat-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "basic", 3, "routerLink", 4, "ngIf"], ["mat-icon-button", "", "color", "basic", 3, "click"], ["mat-icon-button", "", "color", "basic", "class", "bg-warning", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-button", "", "color", "basic", 3, "routerLink"], ["mat-icon-button", "", "color", "basic", 1, "bg-warning", 3, "click"], ["aria-label", "view news", 2, "color", "#ffffff"], [1, "table-rasponsive-pub"], [3, "click", 4, "matCellDef"], [3, "dhv_nosize", "click", 4, "matCellDef"], [3, "click"]],
        template: function MynewsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "mat-tab", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, MynewsComponent_div_7_Template, 9, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, MynewsComponent_div_8_Template, 23, 7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "mat-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, MynewsComponent_div_11_Template, 22, 6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "mat-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, MynewsComponent_div_14_Template, 22, 6, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "mat-tab", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](17, MynewsComponent_div_17_Template, 22, 6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "create");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.my_news_count == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.my_news_count != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.my_news_count != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.my_news_count != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.my_news_count != 0);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]],
        styles: [".table-rasponsive[_ngcontent-%COMP%]   .mat-column-news_name[_ngcontent-%COMP%]{\n  flex: 0 0 15%;\n}\n.table-rasponsive[_ngcontent-%COMP%]   .mat-column-heading[_ngcontent-%COMP%]{\n  flex: 0 0 50%;\n  \n}\n.table-rasponsive[_ngcontent-%COMP%]   .mat-column-date[_ngcontent-%COMP%]{\n  flex: 0 0 7%;\n}\n.table-rasponsive[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{\n  flex: 0 0 8%;\n}\n.table-rasponsive[_ngcontent-%COMP%]   .mat-column-actions[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n}\n.table-rasponsive-pub[_ngcontent-%COMP%]   .mat-column-news_name[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n}\n.table-rasponsive-pub[_ngcontent-%COMP%]   .mat-column-heading[_ngcontent-%COMP%]{\n  flex: 0 0 65%;\n  \n}\n.table-rasponsive-pub[_ngcontent-%COMP%]   .mat-column-date[_ngcontent-%COMP%]{\n  flex: 0 0 7%;\n}\n.table-rasponsive-pub[_ngcontent-%COMP%]   .mat-column-status[_ngcontent-%COMP%]{\n  flex: 0 0 8%;\n}\n.table-rasponsive-pub[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]{\n  cursor: zoom-in;\n}\n.table-rasponsive[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   .mat-column-news_name[_ngcontent-%COMP%], .table-rasponsive-pub[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]   .mat-column-news_name[_ngcontent-%COMP%]{\n  font-size: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9teW5ld3MvbXluZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFHQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFHQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9uZXdzL215bmV3cy9teW5ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1yYXNwb25zaXZlIC5tYXQtY29sdW1uLW5ld3NfbmFtZXtcbiAgZmxleDogMCAwIDE1JTtcbn1cbi50YWJsZS1yYXNwb25zaXZlIC5tYXQtY29sdW1uLWhlYWRpbmd7XG4gIGZsZXg6IDAgMCA1MCU7XG4gIC8qanVzdGlmeS1jb250ZW50OmZsZXgtZW5kOyovXG59XG4udGFibGUtcmFzcG9uc2l2ZSAubWF0LWNvbHVtbi1kYXRle1xuICBmbGV4OiAwIDAgNyU7XG59XG4udGFibGUtcmFzcG9uc2l2ZSAubWF0LWNvbHVtbi1zdGF0dXN7XG4gIGZsZXg6IDAgMCA4JTtcbn1cbi50YWJsZS1yYXNwb25zaXZlIC5tYXQtY29sdW1uLWFjdGlvbnN7XG4gIGZsZXg6IDAgMCAyMCU7XG59XG5cblxuLnRhYmxlLXJhc3BvbnNpdmUtcHViIC5tYXQtY29sdW1uLW5ld3NfbmFtZXtcbiAgZmxleDogMCAwIDIwJTtcbn1cbi50YWJsZS1yYXNwb25zaXZlLXB1YiAubWF0LWNvbHVtbi1oZWFkaW5ne1xuICBmbGV4OiAwIDAgNjUlO1xuICAvKmp1c3RpZnktY29udGVudDpmbGV4LWVuZDsqL1xufVxuLnRhYmxlLXJhc3BvbnNpdmUtcHViIC5tYXQtY29sdW1uLWRhdGV7XG4gIGZsZXg6IDAgMCA3JTtcbn1cbi50YWJsZS1yYXNwb25zaXZlLXB1YiAubWF0LWNvbHVtbi1zdGF0dXN7XG4gIGZsZXg6IDAgMCA4JTtcbn1cbi50YWJsZS1yYXNwb25zaXZlLXB1YiAubWF0LXJvd3tcbiAgY3Vyc29yOiB6b29tLWluO1xufVxuXG5cbi50YWJsZS1yYXNwb25zaXZlIC5tYXQtcm93IC5tYXQtY29sdW1uLW5ld3NfbmFtZSwgLnRhYmxlLXJhc3BvbnNpdmUtcHViIC5tYXQtcm93IC5tYXQtY29sdW1uLW5ld3NfbmFtZXtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](MynewsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'app-mynews',
            templateUrl: './mynews.component.html',
            styleUrls: ['./mynews.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]
          }, {
            type: _shared_services_pusher_service__WEBPACK_IMPORTED_MODULE_1__["PusherService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
              "static": true
            }]
          }]
        });
      })();

      var NewsDataSource = /*#__PURE__*/function (_angular_cdk_table__W) {
        _inherits(NewsDataSource, _angular_cdk_table__W);

        var _super2 = _createSuper(NewsDataSource);

        function NewsDataSource(store) {
          var _this7;

          _classCallCheck(this, NewsDataSource);

          _this7 = _super2.call(this);
          _this7.store = store;
          return _this7;
        }

        _createClass(NewsDataSource, [{
          key: "connect",
          value: function connect() {
            return this.store.select(function (store) {
              return store.NewsState.myNews;
            });
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
        }]);

        return NewsDataSource;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["DataSource"]);
      /***/

    },

    /***/
    "3EV/":
    /*!***********************************************!*\
      !*** ./src/app/news/trash/trash.component.ts ***!
      \***********************************************/

    /*! exports provided: TrashComponent, NewsDataSource */

    /***/
    function EV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrashComponent", function () {
        return TrashComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsDataSource", function () {
        return NewsDataSource;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _news_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../news/services/news.service */
      "/OYN");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/table */
      "f6nW");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../shared/component/confirm-dialog/confirm-dialog.component */
      "l8SP");
      /* harmony import */


      var _shared_component_view_news_dialog_view_news_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../shared/component/view-news-dialog/view-news-dialog.component */
      "KOJr");
      /* harmony import */


      var _store_news_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../store/news.reducer */
      "m/2J");
      /* harmony import */


      var _store_news_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../store/news.actions */
      "5WGB");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function TrashComponent_div_0_mat_header_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " News Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function TrashComponent_div_0_mat_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", news_r16.news_name, " ");
        }
      }

      function TrashComponent_div_0_mat_header_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Heading ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function TrashComponent_div_0_mat_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", news_r17.heading, " ");
        }
      }

      function TrashComponent_div_0_mat_header_cell_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function TrashComponent_div_0_mat_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, news_r18.created_at), " ");
        }
      }

      function TrashComponent_div_0_mat_header_cell_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function TrashComponent_div_0_mat_cell_22_mat_chip_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-chip", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Draft");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function TrashComponent_div_0_mat_cell_22_mat_chip_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-chip", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Trashed");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function TrashComponent_div_0_mat_cell_22_mat_chip_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-chip", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function TrashComponent_div_0_mat_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, TrashComponent_div_0_mat_cell_22_mat_chip_2_Template, 2, 0, "mat-chip", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, TrashComponent_div_0_mat_cell_22_mat_chip_3_Template, 2, 0, "mat-chip", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, TrashComponent_div_0_mat_cell_22_mat_chip_4_Template, 2, 0, "mat-chip", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", news_r19.newsstatus.status == "draft");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", news_r19.newsstatus.status == "deleted");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", news_r19.newsstatus.status == "ready");
        }
      }

      function TrashComponent_div_0_mat_header_cell_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Actions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function TrashComponent_div_0_mat_cell_25_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TrashComponent_div_0_mat_cell_25_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r27);

            var news_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r25.undo(news_r23.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Restore");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function TrashComponent_div_0_mat_cell_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TrashComponent_div_0_mat_cell_25_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r29);

            var news_r23 = ctx.$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r28.deleteNews(news_r23.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, TrashComponent_div_0_mat_cell_25_button_3_Template, 2, 0, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TrashComponent_div_0_mat_cell_25_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r29);

            var news_r23 = ctx.$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r30.viewNews(news_r23.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "zoom_in");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", news_r23.newsstatus.status != "published");
        }
      }

      function TrashComponent_div_0_mat_header_row_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "mat-header-row");
        }
      }

      function TrashComponent_div_0_mat_row_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "mat-row");
        }
      }

      function TrashComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-toolbar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Trash News");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "mat-table", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](11, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, TrashComponent_div_0_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, TrashComponent_div_0_mat_cell_13_Template, 2, 1, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](14, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, TrashComponent_div_0_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, TrashComponent_div_0_mat_cell_16_Template, 2, 1, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](17, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, TrashComponent_div_0_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, TrashComponent_div_0_mat_cell_19_Template, 3, 3, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](20, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, TrashComponent_div_0_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, TrashComponent_div_0_mat_cell_22_Template, 5, 3, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](23, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](24, TrashComponent_div_0_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](25, TrashComponent_div_0_mat_cell_25_Template, 7, 1, "mat-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](26, TrashComponent_div_0_mat_header_row_26_Template, 1, 0, "mat-header-row", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](27, TrashComponent_div_0_mat_row_27_Template, 1, 0, "mat-row", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "mat-paginator", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("page", function TrashComponent_div_0_Template_mat_paginator_page_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r32.pageEvent = ctx_r32.onPaginateChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("dataSource", ctx_r0.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matHeaderRowDef", ctx_r0.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matRowDefColumns", ctx_r0.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("length", ctx_r0.length)("pageSize", ctx_r0.pageSize)("pageSizeOptions", ctx_r0.pageSizeOptions);
        }
      }

      function TrashComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "No News in Trash");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var TrashComponent = /*#__PURE__*/function () {
        function TrashComponent(newsService, dialog, store, viewContainerRef) {
          _classCallCheck(this, TrashComponent);

          this.newsService = newsService;
          this.dialog = dialog;
          this.store = store;
          this.viewContainerRef = viewContainerRef;
          this.displayedColumns = ['news_name', 'heading', 'date', 'status', 'actions'];
          this.dataSource = new NewsDataSource(this.store);
          this.trash_news_count = 0;
          this.pageIndex = 1;
          this.pageSize = 10;
          this.pageSizeOptions = [5, 10, 25, 50, 100];
        }

        _createClass(TrashComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.init_news$ = this.store.select(function (store) {
              return store.NewsState.isTrashLoaded;
            }).subscribe(function (isLoaded) {
              if (!isLoaded) {
                _this8.store.dispatch(new _store_news_actions__WEBPACK_IMPORTED_MODULE_8__["GetTrashNews"]({
                  perPage: _this8.pageSize,
                  currentPage: _this8.pageIndex
                }));
              } else {
                _this8.dataSource = new NewsDataSource(_this8.store);

                _this8.updateNewsCount();

                _this8.setPagination();

                _this8.dialog.closeAll();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.init_news$.unsubscribe(); //this.news_page_state$.unsubscribe();
          }
        }, {
          key: "setPagination",
          value: function setPagination() {
            var _this9 = this;

            this.news_page_state$ = this.store.select(function (store) {
              return store.NewsState;
            }).subscribe(function (response) {
              _this9.length = response.trashNewsPageState.totalResults;
              _this9.pageIndex = response.trashNewsPageState.currentPage;
              _this9.pageSize = response.trashNewsPageState.perPage;
            });
          }
        }, {
          key: "onPaginateChange",
          value: function onPaginateChange(event) {
            var page_number = Number(event.pageIndex) + 1;
            this.pageIndex = page_number;
            this.pageSize = event.pageSize;
            this.store.dispatch(new _store_news_actions__WEBPACK_IMPORTED_MODULE_8__["UpdateTrashNewsLoaded"]({
              isTrashNewsLoaded: false
            }));
          }
        }, {
          key: "updateNewsCount",
          value: function updateNewsCount() {
            var _this10 = this;

            this.store.select(function (store) {
              return store.NewsState.trashNews;
            }).subscribe(function (response) {
              _this10.trash_news_count = response.length;
            });
          }
        }, {
          key: "viewNews",
          value: function viewNews(id) {
            var _this11 = this;

            // this.newsService.getNews(id)
            //   .subscribe(
            //     (response) => {
            //       const dialog_news = response;
            //       let dialogRef = this.dialog.open(ViewNewsDialogComponent,
            //         { width: '90%', data: dialog_news });
            //       dialogRef.afterClosed().subscribe((result: string) => {
            //         dialogRef = null;
            //         if (result) {
            //           // actions from dialog if any
            //           console.log(result);
            //         }
            //       });
            //       // user called for delete
            //       dialogRef.componentInstance.onDelete.subscribe((result: number) => {
            //         this.deleteNews(result);
            //       });
            //       // user called for undo delete
            //       dialogRef.componentInstance.onUndo.subscribe((result: number) => {
            //         this.undo(result);
            //       });
            //     }
            // );
            this.view_news_dialog$ = this.store.select(Object(_store_news_reducer__WEBPACK_IMPORTED_MODULE_7__["getNewsById"])('trashNews', id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1)).subscribe(function (news) {
              var dialogRef = _this11.dialog.open(_shared_component_view_news_dialog_view_news_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ViewNewsDialogComponent"], {
                width: '90%',
                data: news
              });

              dialogRef.afterClosed().subscribe(function (result) {
                dialogRef = null;

                _this11.view_news_dialog$.unsubscribe();

                console.log('unsubscribed');

                if (result) {
                  console.log(result);
                }
              }); // user called for delete (destroy)

              dialogRef.componentInstance.onDelete.subscribe(function (result) {
                _this11.deleteNews(result);
              }); // user called for undo delete

              dialogRef.componentInstance.onUndo.subscribe(function (result) {
                _this11.undo(result);
              });
            });
            return false;
          }
        }, {
          key: "deleteNews",
          value: function deleteNews(id) {
            var _this12 = this;

            var dialogRef_del = this.dialog.open(_shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
              width: '350px',
              data: {
                title: 'Delete News',
                message: 'Are you sure you want to delete this news forever?'
              }
            });
            dialogRef_del.afterClosed().subscribe(function (result) {
              dialogRef_del = null;

              if (result) {
                // user confirmed to delete
                _this12.store.dispatch(new _store_news_actions__WEBPACK_IMPORTED_MODULE_8__["DestroyNews"]({
                  id: id
                }));
              }
            });
          }
        }, {
          key: "undo",
          value: function undo(id) {
            this.store.dispatch(new _store_news_actions__WEBPACK_IMPORTED_MODULE_8__["RestoreNews"]({
              id: id
            }));
          }
        }]);

        return TrashComponent;
      }();

      TrashComponent.??fac = function TrashComponent_Factory(t) {
        return new (t || TrashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_news_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]));
      };

      TrashComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: TrashComponent,
        selectors: [["app-trash"]],
        decls: 2,
        vars: 2,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap", 4, "ngIf"], ["style", "padding-top:100px;", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["color", "warn", 1, "no-shadow"], ["fxLayout", "row", "fxFlex", "100"], [1, "m-t-0", "font-14"], [1, "table-rasponsive"], [3, "dataSource"], ["table", ""], ["matColumnDef", "news_name"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "heading"], ["matColumnDef", "date"], ["matColumnDef", "status"], ["matColumnDef", "actions"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSize", "pageSizeOptions", "page"], ["paginator", ""], ["selected", "false", 4, "ngIf"], ["color", "info", "selected", "true", 4, "ngIf"], ["color", "accent", "selected", "true", 4, "ngIf"], ["selected", "false"], ["color", "info", "selected", "true"], ["color", "accent", "selected", "true"], ["mat-raised-button", "", "color", "warn", 1, "no-shadow", 3, "click"], ["mat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "basic", 3, "click"], ["aria-label", "view news"], ["mat-button", "", "color", "primary", 3, "click"], [2, "padding-top", "100px"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "height", "100%", "padding", "0", "margin", "0", "display", "-webkit-box", "display", "-moz-box", "display", "-ms-flexbox", "display", "-webkit-flex", "display", "flex", "align-items", "center", "justify-content", "center"], ["fxLayout", "row"], ["src", "/assets/images/nothing-states/trash.png", 2, "width", "auto", "height", "200px"]],
        template: function TrashComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, TrashComponent_div_0_Template, 30, 6, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, TrashComponent_div_1_Template, 9, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.trash_news_count != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.trash_news_count == 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCell"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChip"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
        styles: [".mat-column-news_name[_ngcontent-%COMP%]{\n  flex: 0 0 15%;\n}\n.mat-column-heading[_ngcontent-%COMP%]{\n  flex: 0 0 50%;\n  \n}\n.mat-column-date[_ngcontent-%COMP%]{\n  flex: 0 0 7%;\n}\n.mat-column-status[_ngcontent-%COMP%]{\n  flex: 0 0 8%;\n}\n.mat-column-actions[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy90cmFzaC90cmFzaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvbmV3cy90cmFzaC90cmFzaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jb2x1bW4tbmV3c19uYW1le1xuICBmbGV4OiAwIDAgMTUlO1xufVxuLm1hdC1jb2x1bW4taGVhZGluZ3tcbiAgZmxleDogMCAwIDUwJTtcbiAgLypqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7Ki9cbn1cbi5tYXQtY29sdW1uLWRhdGV7XG4gIGZsZXg6IDAgMCA3JTtcbn1cbi5tYXQtY29sdW1uLXN0YXR1c3tcbiAgZmxleDogMCAwIDglO1xufVxuLm1hdC1jb2x1bW4tYWN0aW9uc3tcbiAgZmxleDogMCAwIDIwJTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](TrashComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-trash',
            templateUrl: './trash.component.html',
            styleUrls: ['./trash.component.css']
          }]
        }], function () {
          return [{
            type: _news_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
          }];
        }, null);
      })();

      var NewsDataSource = /*#__PURE__*/function (_angular_cdk_table__W2) {
        _inherits(NewsDataSource, _angular_cdk_table__W2);

        var _super3 = _createSuper(NewsDataSource);

        function NewsDataSource(store) {
          var _this13;

          _classCallCheck(this, NewsDataSource);

          _this13 = _super3.call(this);
          _this13.store = store;
          return _this13;
        }

        _createClass(NewsDataSource, [{
          key: "connect",
          value: function connect() {
            return this.store.select(function (store) {
              return store.NewsState.trashNews;
            });
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
        }]);

        return NewsDataSource;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["DataSource"]);
      /***/

    },

    /***/
    "4Wg5":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs-compat/add/operator/switchMap.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function Wg5(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var switchMap_1 = __webpack_require__(
      /*! ../../operator/switchMap */
      "nZYK");

      rxjs_1.Observable.prototype.switchMap = switchMap_1.switchMap; //# sourceMappingURL=switchMap.js.map

      /***/
    },

    /***/
    "5EVD":
    /*!*************************************************!*\
      !*** ./src/app/news/ticker/ticker.component.ts ***!
      \*************************************************/

    /*! exports provided: TickerComponent */

    /***/
    function EVD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TickerComponent", function () {
        return TickerComponent;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _shared_component_add_ticker_news_dialog_add_ticker_news_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/component/add-ticker-news-dialog/add-ticker-news-dialog.component */
      "tjh/");
      /* harmony import */


      var _shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../shared/component/confirm-dialog/confirm-dialog.component */
      "l8SP");
      /* harmony import */


      var _add_ticker_dialog_add_ticker_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../add-ticker-dialog/add-ticker-dialog.component */
      "G8Mk");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_news_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../store/news.actions */
      "5WGB");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shared/services/session.service */
      "mZtN");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["sidebar"];

      function TickerComponent_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TickerComponent_button_10_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r5.onAddTicker();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "playlist_add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function TickerComponent_mat_list_item_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-list-item", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TickerComponent_mat_list_item_12_Template_mat_list_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r9);

            var ticker_r7 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r8.onSelectTicker(ticker_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ticker_r7 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("background-color", ticker_r7 == ctx_r2.selectedTicker ? "rgba(127, 255, 212, 0.6)" : "rgba(255, 255, 255, 0)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ticker_r7.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ticker_r7.tickernews.length, " ");
        }
      }

      function TickerComponent_div_27_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](news_r11.news);
        }
      }

      function TickerComponent_div_27_div_10_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](news_r11.news);
        }
      }

      function TickerComponent_div_27_div_10_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TickerComponent_div_27_div_10_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r21);

            var news_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r19.onDeleteTickerNews(news_r11.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-icon", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function TickerComponent_div_27_div_10_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TickerComponent_div_27_div_10_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r24);

            var news_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r22.onApproveTickerNews(news_r11.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-icon", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function TickerComponent_div_27_div_10_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TickerComponent_div_27_div_10_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r27);

            var news_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r25.onDisApproveTickerNews(news_r11.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-icon", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "do_not_disturb_on");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function TickerComponent_div_27_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, TickerComponent_div_27_div_10_div_1_Template, 2, 1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, TickerComponent_div_27_div_10_div_2_Template, 2, 1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, TickerComponent_div_27_div_10_button_7_Template, 3, 0, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, TickerComponent_div_27_div_10_button_8_Template, 3, 0, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, TickerComponent_div_27_div_10_button_9_Template, 3, 0, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var news_r11 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classMapInterpolate1"]("table-row status_", news_r11.enabled, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("id", news_r11.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", news_r11.language.language_code === "Dhv");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", news_r11.language.language_code != "Dhv");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("matTooltip", news_r11.created_at);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](5, 11, news_r11.created_at));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r10.checkRight());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r10.checkRight() && news_r11.enabled === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r10.checkRight() && news_r11.enabled === 1);
        }
      }

      function TickerComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Ticker News");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, TickerComponent_div_27_div_10_Template, 10, 13, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r4.selectedTicker.tickernews);
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          "side-panel-opened": a0,
          "side-panel-closed": a1
        };
      };

      var TickerComponent = /*#__PURE__*/function () {
        function TickerComponent(store, dialog, updates$, sessionService) {
          _classCallCheck(this, TickerComponent);

          this.store = store;
          this.dialog = dialog;
          this.updates$ = updates$;
          this.sessionService = sessionService;
          this.sidePanelOpened = true;
          this.sidePanelOpened_noNews = true;
        }

        _createClass(TickerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.store.dispatch(new _store_news_actions__WEBPACK_IMPORTED_MODULE_8__["UpdateNewsLoaded"]({
              isLoaded: true
            }));
            this.store.dispatch(new _store_news_actions__WEBPACK_IMPORTED_MODULE_8__["GetTickers"]()); // update selected list selection

            this.updates$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["ofType"])(_store_news_actions__WEBPACK_IMPORTED_MODULE_8__["GET_TICKERS_SUCCESS"])).subscribe(function () {
              var sub = _this14.store.select(function (news_store) {
                return news_store.NewsState.tickers;
              }).subscribe(function (tickers) {
                _this14.tickers = tickers;
              });
            });
          }
        }, {
          key: "onSelectTicker",
          value: function onSelectTicker(ticker) {
            if (this.selectedTicker && this.selectedTicker.id === ticker.id) {
              this.selectedTicker = null;
            } else {
              this.selectedTicker = ticker;
            }
          }
        }, {
          key: "onAddTicker",
          value: function onAddTicker() {
            var _this15 = this;

            var dialogRef = this.dialog.open(_add_ticker_dialog_add_ticker_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddTickerDialogComponent"], {
              width: '25%'
            });
            dialogRef.componentInstance.onAdd.subscribe(function (result) {
              // this.updates$
              // .ofType(newsActions.ADD_TICKER_SUCCESS)
              // .subscribe(() => {
              //   let sub = this.store.select(news_store => news_store.NewsState.tickers)
              //   .subscribe(tickers => {
              // console.log('TICKER ADDED', tickers)
              //     this.tickers = tickers;
              //   });
              // });
              _this15.UpdateTickerSelection(_store_news_actions__WEBPACK_IMPORTED_MODULE_8__["ADD_TICKER_SUCCESS"], true);
            });
          }
        }, {
          key: "onAddTickerNews",
          value: function onAddTickerNews() {
            var _this16 = this;

            var dialogRef = this.dialog.open(_shared_component_add_ticker_news_dialog_add_ticker_news_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddTickerNewsDialogComponent"], {
              width: '95%',
              data: this.selectedTicker
            });
            dialogRef.componentInstance.onAdd.subscribe(function (result) {
              _this16.UpdateTickerSelection(_store_news_actions__WEBPACK_IMPORTED_MODULE_8__["ADD_TICKER_NEWS_SUCCESS"]);
            });
          }
        }, {
          key: "onApproveTickerNews",
          value: function onApproveTickerNews(t_news_id) {
            this.store.dispatch(new _store_news_actions__WEBPACK_IMPORTED_MODULE_8__["ApproveTickerNews"]({
              ticker_news_id: t_news_id
            }));
            this.UpdateTickerSelection(_store_news_actions__WEBPACK_IMPORTED_MODULE_8__["APPROVE_TICKER_NEWS_SUCCESS"]);
          }
        }, {
          key: "onDisApproveTickerNews",
          value: function onDisApproveTickerNews(t_news_id) {
            this.store.dispatch(new _store_news_actions__WEBPACK_IMPORTED_MODULE_8__["DisApproveTickerNews"]({
              ticker_news_id: t_news_id
            }));
            this.UpdateTickerSelection(_store_news_actions__WEBPACK_IMPORTED_MODULE_8__["DISAPPROVE_TICKER_NEWS_SUCCESS"]);
          }
        }, {
          key: "onDeleteTickerNews",
          value: function onDeleteTickerNews(t_news_id) {
            var _this17 = this;

            var dialogRef = this.dialog.open(_shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
              width: '350px',
              data: {
                title: 'Delete Ticker News',
                message: 'Are you sure you want to delete this news from ticker?'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              dialogRef = null;

              if (result) {
                _this17.store.dispatch(new _store_news_actions__WEBPACK_IMPORTED_MODULE_8__["DeleteTickerNews"]({
                  ticker_news_id: t_news_id
                }));

                _this17.UpdateTickerSelection(_store_news_actions__WEBPACK_IMPORTED_MODULE_8__["DELETE_TICKER_NEWS_SUCCESS"]);
              }
            });
          }
        }, {
          key: "UpdateTickerSelection",
          value: function UpdateTickerSelection(newsAction) {
            var _this18 = this;

            var reloadTickers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.updates$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["ofType"])(newsAction)).subscribe(function () {
              var sub = _this18.store.select(function (news_store) {
                return news_store.NewsState.tickers;
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1)).subscribe(function (list) {
                if (reloadTickers) {
                  _this18.tickers = list;
                }

                if (_this18.selectedTicker) {
                  list.forEach(function (element) {
                    if (element.id === _this18.selectedTicker.id) {
                      _this18.selectedTicker = element;
                    }
                  });
                }
              });
            });
          }
        }, {
          key: "checkRight",
          value: function checkRight() {
            if (this.sessionService.checkRole('ticker-editor')) {
              return true;
            } else if (this.sessionService.checkRole('news-editor')) {
              return true;
            }

            return false;
          }
        }, {
          key: "sideBarToggle",
          value: function sideBarToggle() {
            this.sidenav.toggle();
          }
        }, {
          key: "isOver",
          value: function isOver() {
            return window.matchMedia("(max-width: 960px)").matches;
          }
        }]);

        return TickerComponent;
      }();

      TickerComponent.??fac = function TickerComponent_Factory(t) {
        return new (t || TickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]));
      };

      TickerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: TickerComponent,
        selectors: [["app-ticker"]],
        viewQuery: function TickerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????staticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.sidenav = _t.first);
          }
        },
        decls: 32,
        vars: 11,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center start"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex", "100"], [1, "mat-card-top"], [3, "ngClass"], [3, "mode", "opened", "open", "close"], ["sidebar", ""], ["color", "primary", 1, "no-shadow"], ["fxLayout", "row", "fxFlex", "100"], [1, "m-t-0", "font-14"], ["mat-mini-fab", "", "color", "basic", "class", "mr-1", "align", "end", "matTooltip", "Add Ticker", "matTooltipPosition", "below", 3, "click", 4, "ngIf"], [3, "background-color", "click", 4, "ngFor", "ngForOf"], ["color", "warn", 1, "bg-success", "no-shadow", "chat-right-panel"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "center center"], ["mat-icon-button", "", 1, "mr-1", 3, "click"], ["fxFlex", ""], [1, "font-14"], ["mat-icon-button", "", 1, "ml-1", 3, "matMenuTriggerFor"], ["x-position", "before"], ["them", "matMenu"], [1, "chat-middle-box", 2, "min-height", "700px"], ["class", "table-rasponsive", 4, "ngIf"], [1, "chat-footer"], ["align", "end"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-mini-fab", "", "color", "basic", "align", "end", "matTooltip", "Add Ticker", "matTooltipPosition", "below", 1, "mr-1", 3, "click"], [3, "click"], ["matLine", ""], ["matLine", "", 1, "text-muted"], [1, "table-rasponsive"], [1, "table"], [1, "table-header"], [1, "header__item", "column-news"], [1, "header__item", "column-date"], [1, "header__item", "column-actions"], [1, "table-content"], [3, "class", "id", 4, "ngFor", "ngForOf"], [3, "id"], ["class", "table-data column-news dhv", 4, "ngIf"], ["class", "table-data column-news", 4, "ngIf"], ["matTooltipPosition", "below", 1, "table-data", "column-date", 3, "matTooltip"], [1, "table-data", "column-actions"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Remove News", "matTooltipPosition", "below", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "basic", "matTooltip", "Approve News", "matTooltipPosition", "below", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Disapprove News", "matTooltipPosition", "below", 3, "click", 4, "ngIf"], [1, "table-data", "column-news", "dhv"], [1, "table-data", "column-news"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Remove News", "matTooltipPosition", "below", 3, "click"], ["aria-label", "Edit"], ["mat-icon-button", "", "color", "basic", "matTooltip", "Approve News", "matTooltipPosition", "below", 3, "click"], ["aria-label", "Approve"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Disapprove News", "matTooltipPosition", "below", 3, "click"]],
        template: function TickerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-sidenav-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-sidenav", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("open", function TickerComponent_Template_mat_sidenav_open_4_listener() {
              return ctx.sidePanelOpened = true || false;
            })("close", function TickerComponent_Template_mat_sidenav_close_4_listener() {
              return ctx.sidePanelOpened = false || ctx.sidePanelOpened_noNews == false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-toolbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, " Tickers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, TickerComponent_button_10_Template, 3, 0, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, TickerComponent_mat_list_item_12_Template, 5, 4, "mat-list-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-toolbar", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TickerComponent_Template_button_click_15_listener() {
              return ctx.sideBarToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "short_text");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "News");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "mat-menu", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "mat-card-content", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](27, TickerComponent_div_27_Template, 11, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "mat-card-actions", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function TickerComponent_Template_button_click_30_listener() {
              return ctx.onAddTickerNews();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Add News To Ticker");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction2"](8, _c1, ctx.sidePanelOpened, !ctx.sidePanelOpened));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("mode", ctx.isOver() ? "over" : "side")("opened", !ctx.isOver());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.checkRight());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.tickers);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matMenuTriggerFor", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.selectedTicker);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx.selectedTicker);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["DefaultClassDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["_MatMenu"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardActions"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltip"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatLine"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
        styles: [".table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px solid #EEEEEE;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 10px 0;\n  font-size: 12px;\n  border-bottom: 1px solid #EEEEEE;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding-left: 10px 0;\n  border-bottom: 1px solid #EEEEEE;\n  transition: all 0.2s ease-in-out;\n}\n\n.table-row[_ngcontent-%COMP%]:hover{\n  background-color: rgba(97, 97, 97, 0.068);\n}\n\n\n\n.table-row.status_0[_ngcontent-%COMP%]{\n  background-color: rgba(255, 127, 159, 0.1)\n}\n\n.table-row[_ngcontent-%COMP%]:hover.status_0{\n  background-color: rgba(255, 127, 159, 0.4)\n}\n\n.table-row[_ngcontent-%COMP%]:nth-of-type(odd) {\n  \n}\n\n.table-data[_ngcontent-%COMP%], .header__item[_ngcontent-%COMP%] {\n  flex: 1 1 20%;\n  text-align: center;\n  padding: 5px;\n}\n\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.filter__link[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n.filter__link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: -18px;\n  color: white;\n  font-size: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.filter__link.desc[_ngcontent-%COMP%]::after {\n  content: \"(desc)\";\n}\n\n.filter__link.asc[_ngcontent-%COMP%]::after {\n  content: \"(asc)\";\n}\n\n.column-news[_ngcontent-%COMP%]{\n  flex: 0 0 77%;\n  font-size: 14px;\n  \n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.column-news.dhv[_ngcontent-%COMP%]{\n  font-family: 'MV_Faseyha';\n  font-size: 16px;\n  text-align: right;\n  line-height: 36px;\n  direction: rtl;\n}\n\n.column-date[_ngcontent-%COMP%]{\n  flex: 0 0 8%;\n  font-size: 12px;\n}\n\n.column-actions[_ngcontent-%COMP%]{\n  flex: 0 0 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy90aWNrZXIvdGlja2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQ0FBZ0M7RUFLaEMsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRTtBQUNGOztBQUNBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnREFBZ0Q7RUFDaEQsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsUUFBUTtFQUNSLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFNQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixnREFBZ0Q7QUFDbEQ7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvbmV3cy90aWNrZXIvdGlja2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDBweCBzb2xpZCAjRUVFRUVFO1xufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRUVFRTtcbn1cblxuLnRhYmxlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUVFRUU7XG5cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLnRhYmxlLXJvdzpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NywgOTcsIDk3LCAwLjA2OCk7XG59XG5cbi8qIG5vdCBhcHByb3ZlZCAqL1xuLnRhYmxlLXJvdy5zdGF0dXNfMHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEyNywgMTU5LCAwLjEpXG59XG4udGFibGUtcm93OmhvdmVyLnN0YXR1c18we1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTI3LCAxNTksIDAuNClcbn1cblxuLnRhYmxlLXJvdzpudGgtb2YtdHlwZShvZGQpIHtcbiAgLypiYWNrZ3JvdW5kOiAjRUVFRUVFOyovXG59XG5cbi50YWJsZS1kYXRhLFxuLmhlYWRlcl9faXRlbSB7XG4gIGZsZXg6IDEgMSAyMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaGVhZGVyX19pdGVtIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZmlsdGVyX19saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG59XG4uZmlsdGVyX19saW5rOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5maWx0ZXJfX2xpbmsuZGVzYzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIihkZXNjKVwiO1xufVxuLmZpbHRlcl9fbGluay5hc2M6OmFmdGVyIHtcbiAgY29udGVudDogXCIoYXNjKVwiO1xufVxuXG5cblxuXG5cbi5jb2x1bW4tbmV3c3tcbiAgZmxleDogMCAwIDc3JTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAvKmp1c3RpZnktY29udGVudDpmbGV4LWVuZDsqL1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG59XG4uY29sdW1uLW5ld3MuZGh2e1xuICBmb250LWZhbWlseTogJ01WX0Zhc2V5aGEnO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbi5jb2x1bW4tZGF0ZXtcbiAgZmxleDogMCAwIDglO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29sdW1uLWFjdGlvbnN7XG4gIGZsZXg6IDAgMCAxNSU7XG59XG5cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](TickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-ticker',
            templateUrl: './ticker.component.html',
            styleUrls: ['./ticker.component.css']
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }, {
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["Actions"]
          }, {
            type: _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]
          }];
        }, {
          sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['sidebar', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "93oI":
    /*!*******************************************************!*\
      !*** ./src/app/news/dashboard/dashboard.component.ts ***!
      \*******************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function oI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/news.service */
      "/OYN");
      /* harmony import */


      var _models_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/news */
      "mhfV");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _shared_component_view_news_dialog_view_news_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../shared/component/view-news-dialog/view-news-dialog.component */
      "KOJr");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      function DashboardComponent_mat_tab_53_div_16_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var lnews_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](lnews_r3.news.news_name);
        }
      }

      function DashboardComponent_mat_tab_53_div_16_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_mat_tab_53_div_16_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var lnews_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](lnews_r3.news.heading);
        }
      }

      function DashboardComponent_mat_tab_53_div_16_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var lnews_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](lnews_r3.news.heading);
        }
      }

      function DashboardComponent_mat_tab_53_div_16_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var lnews_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](lnews_r3.news.user.name);
        }
      }

      function DashboardComponent_mat_tab_53_div_16_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_mat_tab_53_div_16_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var lnews_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("matTooltip", lnews_r3.news.created_at);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 2, lnews_r3.news.created_at));
        }
      }

      function DashboardComponent_mat_tab_53_div_16_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_mat_tab_53_div_16_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_mat_tab_53_div_16_button_10_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20);

            var lnews_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r18.viewNews(lnews_r3.news);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "zoom_in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_mat_tab_53_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DashboardComponent_mat_tab_53_div_16_div_1_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, DashboardComponent_mat_tab_53_div_16_div_2_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, DashboardComponent_mat_tab_53_div_16_div_3_Template, 2, 1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DashboardComponent_mat_tab_53_div_16_div_4_Template, 2, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardComponent_mat_tab_53_div_16_div_5_Template, 2, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DashboardComponent_mat_tab_53_div_16_div_6_Template, 2, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, DashboardComponent_mat_tab_53_div_16_div_7_Template, 3, 4, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, DashboardComponent_mat_tab_53_div_16_div_8_Template, 2, 0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, DashboardComponent_mat_tab_53_div_16_button_10_Template, 3, 0, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var lnews_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("table-row status_", lnews_r3.news.newsstatus.status, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("id", lnews_r3.news.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lnews_r3.news.newsstatus.status != "breaker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lnews_r3.news.newsstatus.status == "breaker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lnews_r3.news.language.language_code === "Dhv");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lnews_r3.news.language.language_code != "Dhv");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lnews_r3.news.newsstatus.status != "breaker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lnews_r3.news.newsstatus.status == "breaker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lnews_r3.news.newsstatus.status != "breaker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lnews_r3.news.newsstatus.status == "breaker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", lnews_r3.news.newsstatus.status != "breaker");
        }
      }

      function DashboardComponent_mat_tab_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "News Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Journalist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, DashboardComponent_mat_tab_53_div_16_Template, 11, 13, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var list_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("label", list_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", list_r1.list_news);
        }
      }

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(newsService, dialog) {
          _classCallCheck(this, DashboardComponent);

          this.newsService = newsService;
          this.dialog = dialog;
          this.dashboardData = new _models_news__WEBPACK_IMPORTED_MODULE_2__["JournalistDashboard"]();
          this.isDataLoaded = false;
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.newsService.getDashboard().subscribe(function (data) {
              _this19.dashboardData = data;
              _this19.isDataLoaded = true;
            });
          }
        }, {
          key: "viewNews",
          value: function viewNews(news) {
            var dialogRef = this.dialog.open(_shared_component_view_news_dialog_view_news_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ViewNewsDialogComponent"], {
              width: '90%',
              data: news
            });
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.??fac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
      };

      DashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DashboardComponent,
        selectors: [["app-news-dashboard"]],
        decls: 54,
        vars: 5,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-lg", "25", "fxFlex.gt-md", "50", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "d-flex", "no-block"], [1, "m-r-10", "no-shrink"], ["mat-fab", "", "mat-card-icon", "", 1, "shadow-none", "bg-inverse", "bg-success"], [1, "m-0", 3, "innerHTML"], [1, "text-muted", "m-0"], ["mat-fab", "", "color", "accent", "mat-card-icon", "", 1, "shadow-none"], ["mat-fab", "", "color", "warn", "mat-card-icon", "", 1, "shadow-none", "bg-warning"], ["mat-fab", "", "color", "warn", "mat-card-icon", "", 1, "shadow-none", "bg-danger"], ["fxFlex.gt-lg", "100", "fxFlex.gt-md", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [1, "table-rasponsive"], [1, "table"], [1, "table-header"], [1, "header__item", "column-news_name"], [1, "header__item", "column-heading"], [1, "header__item", "column-journalist"], [1, "header__item", "column-date"], [1, "header__item", "column-actions"], [1, "table-content"], [3, "class", "id", 4, "ngFor", "ngForOf"], [3, "id"], ["class", "table-data column-news_name", 4, "ngIf"], ["class", "table-data column-heading dhv", 4, "ngIf"], ["class", "table-data column-heading", 4, "ngIf"], ["class", "table-data column-journalist", 4, "ngIf"], ["class", "table-data column-date", "matTooltipPosition", "below", 3, "matTooltip", 4, "ngIf"], ["class", "table-data column-date", 4, "ngIf"], [1, "table-data", "column-actions"], ["mat-icon-button", "", "color", "basic", "matTooltip", "View News", "matTooltipPosition", "below", 3, "click", 4, "ngIf"], [1, "table-data", "column-news_name"], [1, "table-data", "column-heading", "dhv"], [1, "table-data", "column-heading"], [1, "table-data", "column-journalist"], ["matTooltipPosition", "below", 1, "table-data", "column-date", 3, "matTooltip"], [1, "table-data", "column-date"], ["mat-icon-button", "", "color", "basic", "matTooltip", "View News", "matTooltipPosition", "below", 3, "click"], ["aria-label", "view news"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "view_headline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h6", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "News Written");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "spellcheck");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h6", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "News Approved");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "remove_red_eye");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h6", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "In Review");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h6", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "News Rejected");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](53, DashboardComponent_mat_tab_53_Template, 17, 2, "mat-tab", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx.dashboardData.news_numbers.my, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx.dashboardData.news_numbers.approved, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx.dashboardData.news_numbers.in_review, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx.dashboardData.news_numbers.reject, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.dashboardData.lists);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
        styles: [".table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px solid #EEEEEE;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 10px 0;\n  font-size: 12px;\n  border-bottom: 1px solid #EEEEEE;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding-left: 10px 0;\n  border-bottom: 1px solid #EEEEEE;\n  transition: all 0.2s ease-in-out;\n}\n\n.table-row[_ngcontent-%COMP%]:hover{\n  background-color: rgba(97, 97, 97, 0.068);\n}\n\n\n\n.table-row.status_0[_ngcontent-%COMP%]{\n  background-color: rgba(255, 127, 159, 0.1)\n}\n\n.table-row[_ngcontent-%COMP%]:hover.status_0{\n  background-color: rgba(255, 127, 159, 0.4)\n}\n\n.table-row[_ngcontent-%COMP%]:nth-of-type(odd) {\n  \n}\n\n\n\n.table-row.status_breaker[_ngcontent-%COMP%]{\n  background-color: rgba(127, 255, 212, 0.2)\n}\n\n.table-row[_ngcontent-%COMP%]:hover.status_breaker{\n  background-color: rgba(127, 255, 212, 0.7)\n}\n\n.table-data[_ngcontent-%COMP%], .header__item[_ngcontent-%COMP%] {\n  flex: 1 1 20%;\n  text-align: center;\n  padding: 5px;\n}\n\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.filter__link[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n.filter__link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: -18px;\n  color: white;\n  font-size: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.filter__link.desc[_ngcontent-%COMP%]::after {\n  content: \"(desc)\";\n}\n\n.filter__link.asc[_ngcontent-%COMP%]::after {\n  content: \"(asc)\";\n}\n\n.column-news_name[_ngcontent-%COMP%]{\n  flex: 0 0 25%;\n  font-size: 12px;\n  \n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.column-journalist[_ngcontent-%COMP%]{\n  flex: 0 0 10%;\n  font-size: 12px;\n  \n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.column-heading[_ngcontent-%COMP%]{\n  flex: 0 0 50%;\n  font-size: 12px;\n  \n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.column-heading.dhv[_ngcontent-%COMP%]{\n  font-family: 'MV_Faseyha';\n  font-size: 16px;\n  text-align: right;\n  line-height: 32px;\n  direction: rtl;\n  padding-right: 20px;\n}\n\n.column-date[_ngcontent-%COMP%]{\n  flex: 0 0 10%;\n  font-size: 12px;\n}\n\n.column-actions[_ngcontent-%COMP%]{\n  flex: 0 0 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQ0FBZ0M7RUFLaEMsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRTtBQUNGOztBQUNBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSxZQUFZOztBQUNaO0VBQ0U7QUFDRjs7QUFDQTtFQUNFO0FBQ0Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0RBQWdEO0VBQ2hELGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFFBQVE7RUFDUiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBS0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsZ0RBQWdEO0FBQ2xEOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtBQUNsRDs7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixnREFBZ0Q7QUFDbEQ7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDBweCBzb2xpZCAjRUVFRUVFO1xufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRUVFRTtcbn1cblxuLnRhYmxlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUVFRUU7XG5cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLnRhYmxlLXJvdzpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NywgOTcsIDk3LCAwLjA2OCk7XG59XG5cbi8qIG5vdCBhcHByb3ZlZCAqL1xuLnRhYmxlLXJvdy5zdGF0dXNfMHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEyNywgMTU5LCAwLjEpXG59XG4udGFibGUtcm93OmhvdmVyLnN0YXR1c18we1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTI3LCAxNTksIDAuNClcbn1cblxuLnRhYmxlLXJvdzpudGgtb2YtdHlwZShvZGQpIHtcbiAgLypiYWNrZ3JvdW5kOiAjRUVFRUVFOyovXG59XG5cbi8qIEJSRUFLRVIgKi9cbi50YWJsZS1yb3cuc3RhdHVzX2JyZWFrZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyNTUsIDIxMiwgMC4yKVxufVxuLnRhYmxlLXJvdzpob3Zlci5zdGF0dXNfYnJlYWtlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLCAwLjcpXG59XG5cbi50YWJsZS1kYXRhLFxuLmhlYWRlcl9faXRlbSB7XG4gIGZsZXg6IDEgMSAyMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaGVhZGVyX19pdGVtIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZmlsdGVyX19saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG59XG4uZmlsdGVyX19saW5rOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5maWx0ZXJfX2xpbmsuZGVzYzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIihkZXNjKVwiO1xufVxuLmZpbHRlcl9fbGluay5hc2M6OmFmdGVyIHtcbiAgY29udGVudDogXCIoYXNjKVwiO1xufVxuXG5cblxuXG4uY29sdW1uLW5ld3NfbmFtZXtcbiAgZmxleDogMCAwIDI1JTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAvKmp1c3RpZnktY29udGVudDpmbGV4LWVuZDsqL1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG59XG4uY29sdW1uLWpvdXJuYWxpc3R7XG4gIGZsZXg6IDAgMCAxMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLypqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7Ki9cbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xufVxuLmNvbHVtbi1oZWFkaW5ne1xuICBmbGV4OiAwIDAgNTAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIC8qanVzdGlmeS1jb250ZW50OmZsZXgtZW5kOyovXG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbn1cbi5jb2x1bW4taGVhZGluZy5kaHZ7XG4gIGZvbnQtZmFtaWx5OiAnTVZfRmFzZXloYSc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmNvbHVtbi1kYXRle1xuICBmbGV4OiAwIDAgMTAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29sdW1uLWFjdGlvbnN7XG4gIGZsZXg6IDAgMCA1JTtcbn1cblxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-news-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "G8Mk":
    /*!***********************************************************************!*\
      !*** ./src/app/news/add-ticker-dialog/add-ticker-dialog.component.ts ***!
      \***********************************************************************/

    /*! exports provided: AddTickerDialogComponent */

    /***/
    function G8Mk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddTickerDialogComponent", function () {
        return AddTickerDialogComponent;
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


      var _models_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/news */
      "mhfV");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_news_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../store/news.actions */
      "5WGB");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_directives_thaana_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/directives/thaana.directive */
      "nJ5Y");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var AddTickerDialogComponent = /*#__PURE__*/function () {
        function AddTickerDialogComponent(dialogRef, data, store) {
          _classCallCheck(this, AddTickerDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.store = store;
          this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.ticker = new _models_news__WEBPACK_IMPORTED_MODULE_2__["Ticker"]();
          this.dhivehiEnabled = true;
        }

        _createClass(AddTickerDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ticker.color = '#000000';
            this.ticker.enabled = 1;
          }
        }, {
          key: "closeDialog",
          value: function closeDialog(confirmation) {
            this.dialogRef.close(confirmation);
          }
        }, {
          key: "doAdd",
          value: function doAdd() {
            this.closeDialog(true); //this.onAdd.emit(this.tickerNews);

            this.store.dispatch(new _store_news_actions__WEBPACK_IMPORTED_MODULE_4__["AddTicker"](this.ticker));
            this.onAdd.emit();
          }
        }]);

        return AddTickerDialogComponent;
      }();

      AddTickerDialogComponent.??fac = function AddTickerDialogComponent_Factory(t) {
        return new (t || AddTickerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
      };

      AddTickerDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AddTickerDialogComponent,
        selectors: [["app-add-ticker-dialog"]],
        inputs: {
          dhivehiEnabled: "dhivehiEnabled"
        },
        decls: 22,
        vars: 4,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-top", "20px"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["appearance", "outline"], ["matInput", "", "mat-autosize", "", "required", "", "name", "tickerName", 3, "appDnrmsThaana", "ngModel", "ngModelChange"], ["dhvInput", ""], ["fxLayout", "row", "fxLayoutWrap", "wrap"], ["align", "end", "mat-dialog-actions", "", "align", "end"], ["mat-button", "", "color", "basic", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
        template: function AddTickerDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Add New Ticker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Ticker Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddTickerDialogComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.ticker.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Separator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddTickerDialogComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.ticker.separator = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddTickerDialogComponent_Template_button_click_18_listener() {
              return ctx.closeDialog(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddTickerDialogComponent_Template_button_click_20_listener() {
              return ctx.doAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("appDnrmsThaana", false)("ngModel", ctx.ticker.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("appDnrmsThaana", false)("ngModel", ctx.ticker.separator);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _shared_directives_thaana_directive__WEBPACK_IMPORTED_MODULE_9__["ThaanaDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddTickerDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-ticker-dialog',
            templateUrl: './add-ticker-dialog.component.html'
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
          }];
        }, {
          dhivehiEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "MKA9":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs/add/operator/switchMap.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function MKA9(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __webpack_require__(
      /*! rxjs-compat/add/operator/switchMap */
      "4Wg5"); //# sourceMappingURL=switchMap.js.map

      /***/

    },

    /***/
    "TLw/":
    /*!*********************************************!*\
      !*** ./src/app/news/edit/edit.component.ts ***!
      \*********************************************/

    /*! exports provided: EditComponent */

    /***/
    function TLw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
        return EditComponent;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _news_models_news__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../news/models/news */
      "mhfV");
      /* harmony import */


      var _news_services_news_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../news/services/news.service */
      "/OYN");
      /* harmony import */


      var _store_news_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../store/news.actions */
      "5WGB");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../shared/component/confirm-dialog/confirm-dialog.component */
      "l8SP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _shared_directives_thaana_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../shared/directives/thaana.directive */
      "nJ5Y");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");

      function EditComponent_div_0_mat_chip_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-chip", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Draft");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EditComponent_div_0_mat_chip_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-chip", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Published");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EditComponent_div_0_mat_chip_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-chip", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EditComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-toolbar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Edit News\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, EditComponent_div_0_mat_chip_6_Template, 2, 0, "mat-chip", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, EditComponent_div_0_mat_chip_7_Template, 2, 0, "mat-chip", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, EditComponent_div_0_mat_chip_8_Template, 2, 0, "mat-chip", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "mat-slide-toggle", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function EditComponent_div_0_Template_mat_slide_toggle_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r6.dhivehiEnabled = $event;
          })("ngModelChange", function EditComponent_div_0_Template_mat_slide_toggle_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r8.changeLanguage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, " \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-slide-toggle", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function EditComponent_div_0_Template_mat_slide_toggle_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r7);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r9.tickerEnabled = $event;
          })("ngModelChange", function EditComponent_div_0_Template_mat_slide_toggle_ngModelChange_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r7);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r10.toggleTicker();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Ticker");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", ctx_r0.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.new_news.newsstatus.status == "draft");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.new_news.newsstatus.status == "published");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.new_news.newsstatus.status == "ready");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r0.dhivehiEnabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.new_news.language.language_code);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r0.tickerEnabled);
        }
      }

      function EditComponent_form_1_mat_card_32_mat_toolbar_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](i_r19 + 1);
        }
      }

      function EditComponent_form_1_mat_card_32_mat_toolbar_1_mat_icon_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function EditComponent_form_1_mat_card_32_mat_toolbar_1_mat_icon_8_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r29);

            var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).index;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r27.removeBar(i_r19);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EditComponent_form_1_mat_card_32_mat_toolbar_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-toolbar", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, " News Bar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, EditComponent_form_1_mat_card_32_mat_toolbar_1_span_4_Template, 2, 1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function EditComponent_form_1_mat_card_32_mat_toolbar_1_Template_mat_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](3);

            return ctx_r30.addBar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "add_circle_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, EditComponent_form_1_mat_card_32_mat_toolbar_1_mat_icon_8_Template, 2, 0, "mat-icon", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", i_r19 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", i_r19 !== 0);
        }
      }

      function EditComponent_form_1_mat_card_32_mat_toolbar_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](i_r19 + 1);
        }
      }

      function EditComponent_form_1_mat_card_32_mat_toolbar_2_mat_icon_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function EditComponent_form_1_mat_card_32_mat_toolbar_2_mat_icon_8_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r38);

            var cBar_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r36.removeBar(cBar_r18.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EditComponent_form_1_mat_card_32_mat_toolbar_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-toolbar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, " News Bar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, EditComponent_form_1_mat_card_32_mat_toolbar_2_span_4_Template, 2, 1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function EditComponent_form_1_mat_card_32_mat_toolbar_2_Template_mat_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r40);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](3);

            return ctx_r39.addBar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "add_circle_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, EditComponent_form_1_mat_card_32_mat_toolbar_2_mat_icon_8_Template, 2, 0, "mat-icon", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", i_r19 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", i_r19 !== 0);
        }
      }

      function EditComponent_form_1_mat_card_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, EditComponent_form_1_mat_card_32_mat_toolbar_1_Template, 9, 2, "mat-toolbar", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, EditComponent_form_1_mat_card_32_mat_toolbar_2_Template, 9, 2, "mat-toolbar", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Bar Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "textarea", 39, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function EditComponent_form_1_mat_card_32_Template_textarea_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r43);

            var cBar_r18 = ctx.$implicit;
            return cBar_r18.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Bar Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "textarea", 39, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function EditComponent_form_1_mat_card_32_Template_textarea_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r43);

            var cBar_r18 = ctx.$implicit;
            return cBar_r18.detail = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var cBar_r18 = ctx.$implicit;
          var i_r19 = ctx.index;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", i_r19 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", i_r19 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("name", "BarTitledhvInput", i_r19, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("appDnrmsThaana", ctx_r15.dhivehiEnabled)("ngModel", cBar_r18.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("name", "BarDetailedhvInput", i_r19, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("appDnrmsThaana", ctx_r15.dhivehiEnabled)("ngModel", cBar_r18.detail);
        }
      }

      function EditComponent_form_1_span_33_mat_card_1_mat_toolbar_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](i_r47 + 1);
        }
      }

      function EditComponent_form_1_span_33_mat_card_1_mat_toolbar_1_mat_icon_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function EditComponent_form_1_span_33_mat_card_1_mat_toolbar_1_mat_icon_8_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r56);

            var i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).index;

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](3);

            return ctx_r54.removeTicker(i_r47);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EditComponent_form_1_span_33_mat_card_1_mat_toolbar_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-toolbar", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, " Ticker News ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, EditComponent_form_1_span_33_mat_card_1_mat_toolbar_1_span_4_Template, 2, 1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function EditComponent_form_1_span_33_mat_card_1_mat_toolbar_1_Template_mat_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r58);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](4);

            return ctx_r57.addTicker();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "add_circle_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, EditComponent_form_1_span_33_mat_card_1_mat_toolbar_1_mat_icon_8_Template, 2, 0, "mat-icon", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", i_r47 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", i_r47 !== 0);
        }
      }

      function EditComponent_form_1_span_33_mat_card_1_mat_toolbar_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](i_r47 + 1);
        }
      }

      function EditComponent_form_1_span_33_mat_card_1_mat_toolbar_2_mat_icon_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function EditComponent_form_1_span_33_mat_card_1_mat_toolbar_2_mat_icon_8_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r65);

            var i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).index;

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](3);

            return ctx_r63.removeTicker(i_r47);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function EditComponent_form_1_span_33_mat_card_1_mat_toolbar_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-toolbar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, " Ticker News ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, EditComponent_form_1_span_33_mat_card_1_mat_toolbar_2_span_4_Template, 2, 1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function EditComponent_form_1_span_33_mat_card_1_mat_toolbar_2_Template_mat_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r67);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](4);

            return ctx_r66.addTicker();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "add_circle_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, EditComponent_form_1_span_33_mat_card_1_mat_toolbar_2_mat_icon_8_Template, 2, 0, "mat-icon", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", i_r47 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", i_r47 !== 0);
        }
      }

      function EditComponent_form_1_span_33_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, EditComponent_form_1_span_33_mat_card_1_mat_toolbar_1_Template, 9, 2, "mat-toolbar", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, EditComponent_form_1_span_33_mat_card_1_mat_toolbar_2_Template, 9, 2, "mat-toolbar", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Ticker Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "textarea", 39, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function EditComponent_form_1_span_33_mat_card_1_Template_textarea_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r70);

            var cTicker_r46 = ctx.$implicit;
            return cTicker_r46.news = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var cTicker_r46 = ctx.$implicit;
          var i_r47 = ctx.index;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", i_r47 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", i_r47 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("name", "tickerdhvInput", i_r47, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("appDnrmsThaana", ctx_r45.dhivehiEnabled)("ngModel", cTicker_r46.news);
        }
      }

      function EditComponent_form_1_span_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, EditComponent_form_1_span_33_mat_card_1_Template, 11, 5, "mat-card", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r16.new_news.tickernews);
        }
      }

      function EditComponent_form_1_button_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function EditComponent_form_1_button_40_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r72);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r71.onSubmit(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Save Draft");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !_r11.form.valid);
        }
      }

      function EditComponent_form_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-toolbar", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Body");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "News Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "input", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function EditComponent_form_1_Template_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r74);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r73.new_news.news_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "News Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "textarea", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function EditComponent_form_1_Template_textarea_ngModelChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r74);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r75.new_news.heading = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "News Body");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "textarea", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function EditComponent_form_1_Template_textarea_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r74);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r76.new_news.body = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](32, EditComponent_form_1_mat_card_32_Template, 17, 8, "mat-card", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](33, EditComponent_form_1_span_33_Template, 2, 1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "mat-card-actions", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function EditComponent_form_1_Template_button_click_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r74);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r77.cancelWrite();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](40, EditComponent_form_1_button_40_Template, 2, 1, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function EditComponent_form_1_Template_button_click_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r74);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r78.onSubmit(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](1);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", ctx_r1.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r1.diagnostic);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r1.new_news.news_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("appDnrmsThaana", ctx_r1.dhivehiEnabled)("ngModel", ctx_r1.new_news.heading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("appDnrmsThaana", ctx_r1.dhivehiEnabled)("ngModel", ctx_r1.new_news.body);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r1.new_news.newsbar);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.tickerEnabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.new_news.newsstatus.status != "draft");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !_r11.form.valid);
        }
      }

      function EditComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Saving News");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "mat-progress-bar", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      var EditComponent = /*#__PURE__*/function () {
        function EditComponent(snackBar, router, newsService, aRoute, store, dialog, loaded_store) {
          _classCallCheck(this, EditComponent);

          this.snackBar = snackBar;
          this.router = router;
          this.newsService = newsService;
          this.aRoute = aRoute;
          this.store = store;
          this.dialog = dialog;
          this.loaded_store = loaded_store;
          this.news_bar = new _news_models_news__WEBPACK_IMPORTED_MODULE_4__["NewsBar"]('', '');
          this.ticker_news = new _news_models_news__WEBPACK_IMPORTED_MODULE_4__["TickerNews"]('');
          this.edit_id = this.aRoute.snapshot.params.id;
          this.tickerEnabled = false;
          this.submitted = false;
          this.loaded = false;
          this.loaded2 = false;
          this.loadEditNews(this.edit_id);
        }

        _createClass(EditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            // this.changeLanguage();
            // this.toggleTicker();
            this.init_news$ = this.loaded_store.select(function (store) {
              return store.NewsState.isMyNewsLoaded;
            }).subscribe(function (isLoaded) {
              if (!isLoaded) {
                console.log('News Store not Loaded, Rerouting to "My News"');

                _this20.router.navigate(['/news/my']);
              }
            });
          }
        }, {
          key: "loadEditNews",
          value: function loadEditNews(id) {
            var _this21 = this;

            this.loaded = false;
            this.edit_id = id;
            this.newsService.editNews(this.edit_id).subscribe(function (response) {
              _this21.new_news = response;

              if (_this21.new_news.language.language_code === 'Dhv') {
                _this21.dhivehiEnabled = true;
              } else {
                _this21.dhivehiEnabled = false;
              }

              _this21.loaded = true;
            }, function (error) {
              _this21.submitted = false;
              var message = '';

              _this21.snackBar.open(message, 'dismiss');
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(draft) {
            var _this22 = this;

            this.submitted = true;
            this.new_news.draft = draft;
            this.newsService.updateNews(this.new_news, this.edit_id).subscribe(function (response) {
              // console.log(response);
              // this.snackBar.open('News Saved!', null, {duration: 3000});
              _this22.store.dispatch(new _store_news_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateMyNewsLoaded"]({
                isMyNewsLoaded: false
              }));

              _this22.router.navigate(['/news/my']);
            }, function (error) {
              _this22.submitted = false;
              /*let message = '';
              if (error.status === 401) {
                message = 'Sorry you do not have access to add news';
              } else {
                message = 'News Saved';
              }
              this.snackBar.open(message, 'dismiss');*/
            });
          }
        }, {
          key: "cancelWrite",
          value: function cancelWrite() {
            this.router.navigate(['/news/my']);
          }
        }, {
          key: "changeLanguage",
          value: function changeLanguage() {
            if (this.dhivehiEnabled) {
              this.new_news.language.language_code = 'Dhv';
            } else {
              this.new_news.language.language_code = 'Eng';
            }
          }
        }, {
          key: "addBar",
          value: function addBar() {
            var nBar = new _news_models_news__WEBPACK_IMPORTED_MODULE_4__["NewsBar"](null, null, null, null, null, null);
            this.new_news.newsbar.push(nBar);
          }
        }, {
          key: "removeBar",
          value: function removeBar(barId) {
            var _this23 = this;

            // this.new_news.newsbar.splice(barIndex, 1);
            var dialogRef = this.dialog.open(_shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogComponent"], {
              width: '350px'
            });
            dialogRef.afterClosed().subscribe(function (result) {
              dialogRef = null;

              if (result) {
                // user confirmed to delete
                _this23.newsService.destroyBar(barId).subscribe(function (response) {
                  /*
                  ---------- // TODO
                  instead of reloading the model, remove the bar from fiest loaded model ->'this.new_news'
                  because now the if the user had made any changes before removing a bar,
                  the changes made earlier are reloaded with the old data from database.
                  */
                  _this23.loadEditNews(_this23.edit_id);

                  console.log(response);
                });
              }
            });
          }
        }, {
          key: "addTicker",
          value: function addTicker() {
            var ticker = new _news_models_news__WEBPACK_IMPORTED_MODULE_4__["TickerNews"]('');
            this.new_news.tickernews.push(ticker);
          }
        }, {
          key: "removeTicker",
          value: function removeTicker(tickerIndex) {
            this.new_news.tickernews.splice(tickerIndex, 1);
          }
        }, {
          key: "toggleTicker",
          value: function toggleTicker() {
            if (!this.tickerEnabled) {
              this.new_news.tickernews = null;
            } else {
              var ticker = new _news_models_news__WEBPACK_IMPORTED_MODULE_4__["TickerNews"]('');
              this.new_news.tickernews = [ticker];
            }
          } // TODO: Remove this when we're done, this is here for debugging purpose

        }, {
          key: "diagnostic",
          get: function get() {
            return JSON.stringify(this.new_news);
          }
        }]);

        return EditComponent;
      }();

      EditComponent.??fac = function EditComponent_Factory(t) {
        return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_news_services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]));
      };

      EditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: EditComponent,
        selectors: [["app-edit"]],
        inputs: {
          dhivehiEnabled: "dhivehiEnabled",
          tickerEnabled: "tickerEnabled",
          loaded: "loaded"
        },
        decls: 3,
        vars: 3,
        consts: [[3, "hidden", 4, "ngIf"], ["class", "basic-form", 3, "hidden", 4, "ngIf"], [4, "ngIf"], [3, "hidden"], ["color", "secondary", 1, "no-shadow"], ["fxFlex", "", "fxShow", "false", "fxShow.gt-xs", ""], ["selected", "false", 4, "ngIf"], ["color", "warn", "selected", "true", 4, "ngIf"], ["color", "primary", "selected", "true", 4, "ngIf"], ["fxShow", "false", "fxShow.gt-xs", ""], ["labelPosition", "after", "color", "secondary", 3, "ngModel", "ngModelChange"], ["selected", "false"], ["color", "warn", "selected", "true"], ["color", "primary", "selected", "true"], [1, "basic-form", 3, "hidden"], ["newsForm", "ngForm"], ["fxLayout", "column", "fxLayoutAlign", "center start"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex", "100"], [1, "mat-card-top"], ["color", "primary", 1, "no-shadow"], ["fxLayout", "row", "fxFlex", "100"], [1, "m-t-0", "font-14"], ["fxLayout", "column", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["fxFlex.gt-md", "100", "fxFlex", "100"], ["appearance", "outline"], ["matInput", "", "placeholder", "News Name", "required", "", "name", "newsName", 3, "ngModel", "ngModelChange"], ["newsName", ""], ["matInput", "", "mat-autosize", "", "matAutosizeMinRows", "2", "required", "", "name", "dhvHeading", 3, "appDnrmsThaana", "ngModel", "ngModelChange"], ["dhvHeading", ""], ["matInput", "", "mat-autosize", "", "matAutosizeMinRows", "20", "required", "", "name", "dhvInput", 3, "appDnrmsThaana", "ngModel", "ngModelChange"], ["dhvInput", ""], ["class", "mat-card-top", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-button", "", "color", "warn", 3, "click"], ["type", "button", "mat-button", "", "color", "link", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["color", "primary", "class", "no-shadow", 4, "ngIf"], ["color", "secondary", "class", "no-shadow", 4, "ngIf"], ["matInput", "", "mat-autosize", "", "matAutosizeMinRows", "2", "required", "", 3, "appDnrmsThaana", "ngModel", "name", "ngModelChange"], ["BarTitledhvInput{{i}}", ""], ["BarDetailedhvInput{{i}}", ""], [1, "example-fill-remaining-space"], [3, "click"], [3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "wrap"], ["tickerdhvInput{{i}}", ""], ["type", "button", "mat-button", "", "color", "link", 3, "disabled", "click"], ["fxLayout", "row"], ["fxFlex.gt-sm", "100%"], ["mode", "indeterminate", "value", "40", 1, "m-t-30"]],
        template: function EditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, EditComponent_div_0_Template, 15, 7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, EditComponent_form_1_Template, 43, 11, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, EditComponent_div_2_Template, 8, 0, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.submitted || ctx.loaded2);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultShowHideDirective"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipList"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChip"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["RequiredValidator"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatTextareaAutosize"], _shared_directives_thaana_directive__WEBPACK_IMPORTED_MODULE_19__["ThaanaDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardTitle"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBar"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](EditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-edit',
            templateUrl: './edit.component.html',
            styleUrls: ['./edit.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _news_services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]
          }];
        }, {
          dhivehiEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          tickerEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          loaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "XTHu":
    /*!***********************************************!*\
      !*** ./src/app/news/write/write.component.ts ***!
      \***********************************************/

    /*! exports provided: WriteComponent */

    /***/
    function XTHu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WriteComponent", function () {
        return WriteComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _news_models_news__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../news/models/news */
      "mhfV");
      /* harmony import */


      var _news_services_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../news/services/news.service */
      "/OYN");
      /* harmony import */


      var _store_news_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../store/news.actions */
      "5WGB");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _shared_directives_thaana_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../shared/directives/thaana.directive */
      "nJ5Y");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function WriteComponent_mat_card_40_mat_toolbar_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r7 + 1);
        }
      }

      function WriteComponent_mat_card_40_mat_toolbar_1_mat_icon_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WriteComponent_mat_card_40_mat_toolbar_1_mat_icon_8_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

            var i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r15.removeBar(i_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WriteComponent_mat_card_40_mat_toolbar_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-toolbar", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " News Bar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, WriteComponent_mat_card_40_mat_toolbar_1_span_4_Template, 2, 1, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WriteComponent_mat_card_40_mat_toolbar_1_Template_mat_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r18.addBar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "add_circle_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, WriteComponent_mat_card_40_mat_toolbar_1_mat_icon_8_Template, 2, 0, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r7 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r7 !== 0);
        }
      }

      function WriteComponent_mat_card_40_mat_toolbar_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r7 + 1);
        }
      }

      function WriteComponent_mat_card_40_mat_toolbar_2_mat_icon_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WriteComponent_mat_card_40_mat_toolbar_2_mat_icon_8_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).index;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r24.removeBar(i_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WriteComponent_mat_card_40_mat_toolbar_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " News Bar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, WriteComponent_mat_card_40_mat_toolbar_2_span_4_Template, 2, 1, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WriteComponent_mat_card_40_mat_toolbar_2_Template_mat_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r27.addBar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "add_circle_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, WriteComponent_mat_card_40_mat_toolbar_2_mat_icon_8_Template, 2, 0, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r7 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r7 !== 0);
        }
      }

      function WriteComponent_mat_card_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, WriteComponent_mat_card_40_mat_toolbar_1_Template, 9, 2, "mat-toolbar", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, WriteComponent_mat_card_40_mat_toolbar_2_Template, 9, 2, "mat-toolbar", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Bar Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "textarea", 34, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function WriteComponent_mat_card_40_Template_textarea_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

            var cBar_r6 = ctx.$implicit;
            return cBar_r6.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Bar Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "textarea", 34, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function WriteComponent_mat_card_40_Template_textarea_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

            var cBar_r6 = ctx.$implicit;
            return cBar_r6.detail = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var cBar_r6 = ctx.$implicit;
          var i_r7 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r7 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r7 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("name", "BarTitledhvInput", i_r7, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("appDnrmsThaana", ctx_r4.dhivehiEnabled)("ngModel", cBar_r6.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("name", "BarDetailedhvInput", i_r7, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("appDnrmsThaana", ctx_r4.dhivehiEnabled)("ngModel", cBar_r6.detail);
        }
      }

      function WriteComponent_span_41_mat_card_1_mat_toolbar_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r35 + 1);
        }
      }

      function WriteComponent_span_41_mat_card_1_mat_toolbar_1_mat_icon_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WriteComponent_span_41_mat_card_1_mat_toolbar_1_mat_icon_8_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r44);

            var i_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).index;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r42.removeTicker(i_r35);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WriteComponent_span_41_mat_card_1_mat_toolbar_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-toolbar", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Ticker News ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, WriteComponent_span_41_mat_card_1_mat_toolbar_1_span_4_Template, 2, 1, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WriteComponent_span_41_mat_card_1_mat_toolbar_1_Template_mat_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r46);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r45.addTicker();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "add_circle_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, WriteComponent_span_41_mat_card_1_mat_toolbar_1_mat_icon_8_Template, 2, 0, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r35 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r35 !== 0);
        }
      }

      function WriteComponent_span_41_mat_card_1_mat_toolbar_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r35 + 1);
        }
      }

      function WriteComponent_span_41_mat_card_1_mat_toolbar_2_mat_icon_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WriteComponent_span_41_mat_card_1_mat_toolbar_2_mat_icon_8_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r53);

            var i_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).index;

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r51.removeTicker(i_r35);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function WriteComponent_span_41_mat_card_1_mat_toolbar_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Ticker News ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, WriteComponent_span_41_mat_card_1_mat_toolbar_2_span_4_Template, 2, 1, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WriteComponent_span_41_mat_card_1_mat_toolbar_2_Template_mat_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r54.addTicker();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "add_circle_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, WriteComponent_span_41_mat_card_1_mat_toolbar_2_mat_icon_8_Template, 2, 0, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r35 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r35 !== 0);
        }
      }

      function WriteComponent_span_41_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, WriteComponent_span_41_mat_card_1_mat_toolbar_1_Template, 9, 2, "mat-toolbar", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, WriteComponent_span_41_mat_card_1_mat_toolbar_2_Template, 9, 2, "mat-toolbar", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Ticker Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "textarea", 34, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function WriteComponent_span_41_mat_card_1_Template_textarea_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r58);

            var cTicker_r34 = ctx.$implicit;
            return cTicker_r34.news = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var cTicker_r34 = ctx.$implicit;
          var i_r35 = ctx.index;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r35 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r35 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("name", "tickerdhvInput", i_r35, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("appDnrmsThaana", ctx_r33.dhivehiEnabled)("ngModel", cTicker_r34.news);
        }
      }

      function WriteComponent_span_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, WriteComponent_span_41_mat_card_1_Template, 11, 5, "mat-card", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r5.new_news.tickernews);
        }
      }

      var WriteComponent = /*#__PURE__*/function () {
        function WriteComponent(snackBar, router, newsService, store) {
          _classCallCheck(this, WriteComponent);

          this.snackBar = snackBar;
          this.router = router;
          this.newsService = newsService;
          this.store = store;
          this.news_bar = new _news_models_news__WEBPACK_IMPORTED_MODULE_3__["NewsBar"]('', '-');
          this.ticker_news = new _news_models_news__WEBPACK_IMPORTED_MODULE_3__["TickerNews"](''); // new_news = new News(null, null, null, null, null, { language_code: 'Dhv' }, [this.news_bar], [this.ticker_news]);

          this.new_news = new _news_models_news__WEBPACK_IMPORTED_MODULE_3__["News"]();
          this.dhivehiEnabled = true;
          this.tickerEnabled = false;
          this.submitted = false;
        }

        _createClass(WriteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.changeLanguage();
            this.toggleTicker();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(draft) {
            var _this24 = this;

            this.submitted = true;
            this.new_news.draft = draft;
            this.new_news.newsbar.forEach(function (bar) {
              bar.detail = bar.title;
            });
            this.newsService.saveNews(this.new_news).subscribe(function (response) {
              _this24.store.dispatch(new _store_news_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateMyNewsLoaded"]({
                isMyNewsLoaded: false
              }));

              _this24.router.navigate(['/news/my']);
            }, function (error) {
              _this24.submitted = false;
            });
          }
        }, {
          key: "cancelWrite",
          value: function cancelWrite() {
            this.router.navigate(['/news/my']);
          }
        }, {
          key: "changeLanguage",
          value: function changeLanguage() {
            if (this.dhivehiEnabled) {
              this.new_news.language.language_code = 'Dhv';
            } else {
              this.new_news.language.language_code = 'Eng';
            }
          }
        }, {
          key: "addBar",
          value: function addBar() {
            var newBar = new _news_models_news__WEBPACK_IMPORTED_MODULE_3__["NewsBar"]('', '-');
            this.new_news.newsbar.push(newBar);
          }
        }, {
          key: "removeBar",
          value: function removeBar(barIndex) {
            this.new_news.newsbar.splice(barIndex, 1);
          }
        }, {
          key: "addTicker",
          value: function addTicker() {
            var ticker = new _news_models_news__WEBPACK_IMPORTED_MODULE_3__["TickerNews"]('');
            this.new_news.tickernews.push(ticker);
          }
        }, {
          key: "removeTicker",
          value: function removeTicker(tickerIndex) {
            this.new_news.tickernews.splice(tickerIndex, 1);
          }
        }, {
          key: "toggleTicker",
          value: function toggleTicker() {
            if (!this.tickerEnabled) {
              this.new_news.tickernews = null;
            } else {
              var ticker = new _news_models_news__WEBPACK_IMPORTED_MODULE_3__["TickerNews"]('');
              this.new_news.tickernews = [ticker];
            }
          } // TODO: Remove this when we're done

        }, {
          key: "diagnostic",
          get: function get() {
            return JSON.stringify(this.new_news);
          }
        }]);

        return WriteComponent;
      }();

      WriteComponent.??fac = function WriteComponent_Factory(t) {
        return new (t || WriteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_news_services_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]));
      };

      WriteComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: WriteComponent,
        selectors: [["app-news-write"]],
        inputs: {
          dhivehiEnabled: "dhivehiEnabled",
          tickerEnabled: "tickerEnabled"
        },
        decls: 60,
        vars: 15,
        consts: [[3, "hidden"], ["color", "secondary", 1, "no-shadow"], ["fxFlex", "", "fxShow", "false", "fxShow.gt-xs", ""], ["fxShow", "false", "fxShow.gt-xs", ""], ["labelPosition", "after", "color", "secondary", 3, "ngModel", "ngModelChange"], [1, "basic-form", 3, "hidden"], ["newsForm", "ngForm"], ["fxLayout", "row", "fxLayoutAlign", "center start"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex", "100"], [1, "mat-card-top"], ["color", "primary", 1, "no-shadow"], ["fxLayout", "row", "fxFlex", "100"], [1, "m-t-0", "font-14"], ["fxLayout", "column", "fxLayoutWrap", "wrap"], ["fxFlex.gt-md", "100", "fxFlex", "100"], ["appearance", "outline"], ["matInput", "", "placeholder", "News Name", "required", "", "name", "newsName", 3, "ngModel", "ngModelChange"], ["newsName", ""], ["matInput", "", "mat-autosize", "", "matAutosizeMinRows", "2", "required", "", "name", "dhvHeading", 3, "appDnrmsThaana", "ngModel", "ngModelChange"], ["dhvHeading", ""], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["matInput", "", "mat-autosize", "", "matAutosizeMinRows", "20", "required", "", "name", "dhvInput", 3, "appDnrmsThaana", "ngModel", "ngModelChange"], ["dhvInput", ""], ["class", "mat-card-top", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["align", "end"], ["mat-button", "", "color", "warn", 3, "click"], ["type", "button", "mat-button", "", "color", "link", 3, "disabled", "click"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["fxLayout", "row"], ["fxFlex.gt-sm", "100%"], ["mode", "indeterminate", "value", "40", 1, "m-t-30"], ["color", "primary", "class", "no-shadow", 4, "ngIf"], ["color", "secondary", "class", "no-shadow", 4, "ngIf"], ["matInput", "", "mat-autosize", "", "matAutosizeMinRows", "2", "required", "", 3, "appDnrmsThaana", "ngModel", "name", "ngModelChange"], ["BarTitledhvInput{{i}}", ""], ["BarDetailedhvInput{{i}}", ""], ["fxLayout", "column", "fxFlex", "100"], [1, "example-fill-remaining-space"], [3, "click"], [3, "click", 4, "ngIf"], ["tickerdhvInput{{i}}", ""]],
        template: function WriteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Write News");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-slide-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function WriteComponent_Template_mat_slide_toggle_ngModelChange_6_listener($event) {
              return ctx.dhivehiEnabled = $event;
            })("ngModelChange", function WriteComponent_Template_mat_slide_toggle_ngModelChange_6_listener() {
              return ctx.changeLanguage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-slide-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function WriteComponent_Template_mat_slide_toggle_ngModelChange_9_listener($event) {
              return ctx.tickerEnabled = $event;
            })("ngModelChange", function WriteComponent_Template_mat_slide_toggle_ngModelChange_9_listener() {
              return ctx.toggleTicker();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Ticker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "form", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-toolbar", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "News Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function WriteComponent_Template_input_ngModelChange_26_listener($event) {
              return ctx.new_news.news_name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "News Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "textarea", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function WriteComponent_Template_textarea_ngModelChange_32_listener($event) {
              return ctx.new_news.heading = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "News Body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "textarea", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function WriteComponent_Template_textarea_ngModelChange_38_listener($event) {
              return ctx.new_news.body = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, WriteComponent_mat_card_40_Template, 17, 8, "mat-card", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, WriteComponent_span_41_Template, 2, 1, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-card-actions", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WriteComponent_Template_button_click_46_listener() {
              return ctx.cancelWrite();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WriteComponent_Template_button_click_48_listener() {
              return ctx.onSubmit(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Save Draft");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function WriteComponent_Template_button_click_50_listener() {
              return ctx.onSubmit(false);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Saving News");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "mat-progress-bar", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.dhivehiEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.new_news.language.language_code);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.tickerEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.new_news.news_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("appDnrmsThaana", ctx.dhivehiEnabled)("ngModel", ctx.new_news.heading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("appDnrmsThaana", ctx.dhivehiEnabled)("ngModel", ctx.new_news.body);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.new_news.newsbar);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.tickerEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !_r0.form.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !_r0.form.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.submitted);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultShowHideDirective"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatTextareaAutosize"], _shared_directives_thaana_directive__WEBPACK_IMPORTED_MODULE_15__["ThaanaDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3Mvd3JpdGUvd3JpdGUuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WriteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-news-write',
            templateUrl: './write.component.html',
            styleUrls: ['./write.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _news_services_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
          }];
        }, {
          dhivehiEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tickerEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "YXEz":
    /*!*************************************!*\
      !*** ./src/app/news/news.module.ts ***!
      \*************************************/

    /*! exports provided: NewsModule */

    /***/
    function YXEz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsModule", function () {
        return NewsModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "93oI");
      /* harmony import */


      var _mynews_mynews_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./mynews/mynews.component */
      "0fKI");
      /* harmony import */


      var _news_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./news.routing */
      "zuV3");
      /* harmony import */


      var _write_write_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./write/write.component */
      "XTHu");
      /* harmony import */


      var _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./edit/edit.component */
      "TLw/");
      /* harmony import */


      var _trash_trash_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./trash/trash.component */
      "3EV/");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _store_news_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./store/news.effects */
      "khSh");
      /* harmony import */


      var _store_news_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./store/news.reducer */
      "m/2J");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./ticker/ticker.component */
      "5EVD");
      /* harmony import */


      var _add_ticker_dialog_add_ticker_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./add-ticker-dialog/add-ticker-dialog.component */
      "G8Mk"); // import { MatButtonModule, MatToolbarModule, MatTabsModule, MatDivider, MatDividerModule } from '@angular/material';
      // import { MatIconModule, MatCardModule, MatInputModule, MatCheckboxModule} from '@angular/material';
      // import { MatSlideToggleModule } from '@angular/material/slide-toggle';


      var NewsModule = function NewsModule() {
        _classCallCheck(this, NewsModule);
      };

      NewsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: NewsModule
      });
      NewsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function NewsModule_Factory(t) {
          return new (t || NewsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_news_routing__WEBPACK_IMPORTED_MODULE_8__["NewsRoutes"]), _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forFeature('NewsState', _store_news_reducer__WEBPACK_IMPORTED_MODULE_15__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forFeature([_store_news_effects__WEBPACK_IMPORTED_MODULE_14__["NewsEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](NewsModule, {
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _mynews_mynews_component__WEBPACK_IMPORTED_MODULE_7__["MynewsComponent"], _write_write_component__WEBPACK_IMPORTED_MODULE_9__["WriteComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"], _trash_trash_component__WEBPACK_IMPORTED_MODULE_11__["TrashComponent"], _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_17__["TickerComponent"], _add_ticker_dialog_add_ticker_dialog_component__WEBPACK_IMPORTED_MODULE_18__["AddTickerDialogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsFeatureModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_news_routing__WEBPACK_IMPORTED_MODULE_8__["NewsRoutes"]), _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forFeature('NewsState', _store_news_reducer__WEBPACK_IMPORTED_MODULE_15__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forFeature([_store_news_effects__WEBPACK_IMPORTED_MODULE_14__["NewsEffects"]])],
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _mynews_mynews_component__WEBPACK_IMPORTED_MODULE_7__["MynewsComponent"], _write_write_component__WEBPACK_IMPORTED_MODULE_9__["WriteComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"], _trash_trash_component__WEBPACK_IMPORTED_MODULE_11__["TrashComponent"], _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_17__["TickerComponent"], _add_ticker_dialog_add_ticker_dialog_component__WEBPACK_IMPORTED_MODULE_18__["AddTickerDialogComponent"]],
            entryComponents: [_add_ticker_dialog_add_ticker_dialog_component__WEBPACK_IMPORTED_MODULE_18__["AddTickerDialogComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "eC5B":
    /*!***************************************************!*\
      !*** ./node_modules/pusher-js/dist/web/pusher.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function eC5B(module, exports, __webpack_require__) {
      /*!
       * Pusher JavaScript Library v4.4.0
       * https://pusher.com/
       *
       * Copyright 2017, Pusher
       * Released under the MIT licence.
       */
      (function webpackUniversalModuleDefinition(root, factory) {
        if (true) module.exports = factory();else {}
      })(this, function () {
        return (
          /******/
          function (modules) {
            // webpackBootstrap

            /******/
            // The module cache

            /******/
            var installedModules = {};
            /******/
            // The require function

            /******/

            function __webpack_require__(moduleId) {
              /******/
              // Check if module is in cache

              /******/
              if (installedModules[moduleId])
                /******/
                return installedModules[moduleId].exports;
              /******/
              // Create a new module (and put it into the cache)

              /******/

              var module = installedModules[moduleId] = {
                /******/
                exports: {},

                /******/
                id: moduleId,

                /******/
                loaded: false
                /******/

              };
              /******/
              // Execute the module function

              /******/

              modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
              /******/
              // Flag the module as loaded

              /******/

              module.loaded = true;
              /******/
              // Return the exports of the module

              /******/

              return module.exports;
              /******/
            }
            /******/
            // expose the modules object (__webpack_modules__)

            /******/


            __webpack_require__.m = modules;
            /******/
            // expose the module cache

            /******/

            __webpack_require__.c = installedModules;
            /******/
            // __webpack_public_path__

            /******/

            __webpack_require__.p = "";
            /******/
            // Load entry module and return exports

            /******/

            return __webpack_require__(0);
            /******/
          }(
          /************************************************************************/

          /******/
          [
          /* 0 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var pusher_1 = __webpack_require__(1);

            module.exports = pusher_1["default"];
            /***/
          },
          /* 1 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var runtime_1 = __webpack_require__(2);

            var Collections = __webpack_require__(9);

            var dispatcher_1 = __webpack_require__(24);

            var timeline_1 = __webpack_require__(39);

            var level_1 = __webpack_require__(40);

            var StrategyBuilder = __webpack_require__(41);

            var timers_1 = __webpack_require__(12);

            var defaults_1 = __webpack_require__(5);

            var DefaultConfig = __webpack_require__(71);

            var logger_1 = __webpack_require__(8);

            var factory_1 = __webpack_require__(43);

            var url_store_1 = __webpack_require__(14);

            var Pusher = function () {
              function Pusher(app_key, options) {
                var _this = this;

                checkAppKey(app_key);
                options = options || {};

                if (!options.cluster && !(options.wsHost || options.httpHost)) {
                  var suffix = url_store_1["default"].buildLogSuffix("javascriptQuickStart");
                  logger_1["default"].warn("You should always specify a cluster when connecting. " + suffix);
                }

                this.key = app_key;
                this.config = Collections.extend(DefaultConfig.getGlobalConfig(), options.cluster ? DefaultConfig.getClusterConfig(options.cluster) : {}, options);
                this.channels = factory_1["default"].createChannels();
                this.global_emitter = new dispatcher_1["default"]();
                this.sessionID = Math.floor(Math.random() * 1000000000);
                this.timeline = new timeline_1["default"](this.key, this.sessionID, {
                  cluster: this.config.cluster,
                  features: Pusher.getClientFeatures(),
                  params: this.config.timelineParams || {},
                  limit: 50,
                  level: level_1["default"].INFO,
                  version: defaults_1["default"].VERSION
                });

                if (!this.config.disableStats) {
                  this.timelineSender = factory_1["default"].createTimelineSender(this.timeline, {
                    host: this.config.statsHost,
                    path: "/timeline/v2/" + runtime_1["default"].TimelineTransport.name
                  });
                }

                var getStrategy = function getStrategy(options) {
                  var config = Collections.extend({}, _this.config, options);
                  return StrategyBuilder.build(runtime_1["default"].getDefaultStrategy(config), config);
                };

                this.connection = factory_1["default"].createConnectionManager(this.key, Collections.extend({
                  getStrategy: getStrategy,
                  timeline: this.timeline,
                  activityTimeout: this.config.activity_timeout,
                  pongTimeout: this.config.pong_timeout,
                  unavailableTimeout: this.config.unavailable_timeout
                }, this.config, {
                  useTLS: this.shouldUseTLS()
                }));
                this.connection.bind('connected', function () {
                  _this.subscribeAll();

                  if (_this.timelineSender) {
                    _this.timelineSender.send(_this.connection.isUsingTLS());
                  }
                });
                this.connection.bind('message', function (event) {
                  var eventName = event.event;
                  var internal = eventName.indexOf('pusher_internal:') === 0;

                  if (event.channel) {
                    var channel = _this.channel(event.channel);

                    if (channel) {
                      channel.handleEvent(event);
                    }
                  }

                  if (!internal) {
                    _this.global_emitter.emit(event.event, event.data);
                  }
                });
                this.connection.bind('connecting', function () {
                  _this.channels.disconnect();
                });
                this.connection.bind('disconnected', function () {
                  _this.channels.disconnect();
                });
                this.connection.bind('error', function (err) {
                  logger_1["default"].warn('Error', err);
                });
                Pusher.instances.push(this);
                this.timeline.info({
                  instances: Pusher.instances.length
                });

                if (Pusher.isReady) {
                  this.connect();
                }
              }

              Pusher.ready = function () {
                Pusher.isReady = true;

                for (var i = 0, l = Pusher.instances.length; i < l; i++) {
                  Pusher.instances[i].connect();
                }
              };

              Pusher.log = function (message) {
                if (Pusher.logToConsole && window.console && window.console.log) {
                  window.console.log(message);
                }
              };

              Pusher.getClientFeatures = function () {
                return Collections.keys(Collections.filterObject({
                  "ws": runtime_1["default"].Transports.ws
                }, function (t) {
                  return t.isSupported({});
                }));
              };

              Pusher.prototype.channel = function (name) {
                return this.channels.find(name);
              };

              Pusher.prototype.allChannels = function () {
                return this.channels.all();
              };

              Pusher.prototype.connect = function () {
                this.connection.connect();

                if (this.timelineSender) {
                  if (!this.timelineSenderTimer) {
                    var usingTLS = this.connection.isUsingTLS();
                    var timelineSender = this.timelineSender;
                    this.timelineSenderTimer = new timers_1.PeriodicTimer(60000, function () {
                      timelineSender.send(usingTLS);
                    });
                  }
                }
              };

              Pusher.prototype.disconnect = function () {
                this.connection.disconnect();

                if (this.timelineSenderTimer) {
                  this.timelineSenderTimer.ensureAborted();
                  this.timelineSenderTimer = null;
                }
              };

              Pusher.prototype.bind = function (event_name, callback, context) {
                this.global_emitter.bind(event_name, callback, context);
                return this;
              };

              Pusher.prototype.unbind = function (event_name, callback, context) {
                this.global_emitter.unbind(event_name, callback, context);
                return this;
              };

              Pusher.prototype.bind_global = function (callback) {
                this.global_emitter.bind_global(callback);
                return this;
              };

              Pusher.prototype.unbind_global = function (callback) {
                this.global_emitter.unbind_global(callback);
                return this;
              };

              Pusher.prototype.unbind_all = function (callback) {
                this.global_emitter.unbind_all();
                return this;
              };

              Pusher.prototype.subscribeAll = function () {
                var channelName;

                for (channelName in this.channels.channels) {
                  if (this.channels.channels.hasOwnProperty(channelName)) {
                    this.subscribe(channelName);
                  }
                }
              };

              Pusher.prototype.subscribe = function (channel_name) {
                var channel = this.channels.add(channel_name, this);

                if (channel.subscriptionPending && channel.subscriptionCancelled) {
                  channel.reinstateSubscription();
                } else if (!channel.subscriptionPending && this.connection.state === "connected") {
                  channel.subscribe();
                }

                return channel;
              };

              Pusher.prototype.unsubscribe = function (channel_name) {
                var channel = this.channels.find(channel_name);

                if (channel && channel.subscriptionPending) {
                  channel.cancelSubscription();
                } else {
                  channel = this.channels.remove(channel_name);

                  if (channel && this.connection.state === "connected") {
                    channel.unsubscribe();
                  }
                }
              };

              Pusher.prototype.send_event = function (event_name, data, channel) {
                return this.connection.send_event(event_name, data, channel);
              };

              Pusher.prototype.shouldUseTLS = function () {
                if (runtime_1["default"].getProtocol() === "https:") {
                  return true;
                } else if (this.config.forceTLS === true) {
                  return true;
                } else {
                  return Boolean(this.config.encrypted);
                }
              };

              Pusher.instances = [];
              Pusher.isReady = false;
              Pusher.logToConsole = false;
              Pusher.Runtime = runtime_1["default"];
              Pusher.ScriptReceivers = runtime_1["default"].ScriptReceivers;
              Pusher.DependenciesReceivers = runtime_1["default"].DependenciesReceivers;
              Pusher.auth_callbacks = runtime_1["default"].auth_callbacks;
              return Pusher;
            }();

            exports.__esModule = true;
            exports["default"] = Pusher;

            function checkAppKey(key) {
              if (key === null || key === undefined) {
                throw "You must pass your app key when you instantiate Pusher.";
              }
            }

            runtime_1["default"].setup(Pusher);
            /***/
          },
          /* 2 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var dependencies_1 = __webpack_require__(3);

            var xhr_auth_1 = __webpack_require__(7);

            var jsonp_auth_1 = __webpack_require__(15);

            var script_request_1 = __webpack_require__(16);

            var jsonp_request_1 = __webpack_require__(17);

            var script_receiver_factory_1 = __webpack_require__(4);

            var jsonp_timeline_1 = __webpack_require__(18);

            var transports_1 = __webpack_require__(19);

            var net_info_1 = __webpack_require__(26);

            var default_strategy_1 = __webpack_require__(27);

            var transport_connection_initializer_1 = __webpack_require__(28);

            var http_1 = __webpack_require__(29);

            var Runtime = {
              nextAuthCallbackID: 1,
              auth_callbacks: {},
              ScriptReceivers: script_receiver_factory_1.ScriptReceivers,
              DependenciesReceivers: dependencies_1.DependenciesReceivers,
              getDefaultStrategy: default_strategy_1["default"],
              Transports: transports_1["default"],
              transportConnectionInitializer: transport_connection_initializer_1["default"],
              HTTPFactory: http_1["default"],
              TimelineTransport: jsonp_timeline_1["default"],
              getXHRAPI: function getXHRAPI() {
                return window.XMLHttpRequest;
              },
              getWebSocketAPI: function getWebSocketAPI() {
                return window.WebSocket || window.MozWebSocket;
              },
              setup: function setup(PusherClass) {
                var _this = this;

                window.Pusher = PusherClass;

                var initializeOnDocumentBody = function initializeOnDocumentBody() {
                  _this.onDocumentBody(PusherClass.ready);
                };

                if (!window.JSON) {
                  dependencies_1.Dependencies.load("json2", {}, initializeOnDocumentBody);
                } else {
                  initializeOnDocumentBody();
                }
              },
              getDocument: function getDocument() {
                return document;
              },
              getProtocol: function getProtocol() {
                return this.getDocument().location.protocol;
              },
              getAuthorizers: function getAuthorizers() {
                return {
                  ajax: xhr_auth_1["default"],
                  jsonp: jsonp_auth_1["default"]
                };
              },
              onDocumentBody: function onDocumentBody(callback) {
                var _this = this;

                if (document.body) {
                  callback();
                } else {
                  setTimeout(function () {
                    _this.onDocumentBody(callback);
                  }, 0);
                }
              },
              createJSONPRequest: function createJSONPRequest(url, data) {
                return new jsonp_request_1["default"](url, data);
              },
              createScriptRequest: function createScriptRequest(src) {
                return new script_request_1["default"](src);
              },
              getLocalStorage: function getLocalStorage() {
                try {
                  return window.localStorage;
                } catch (e) {
                  return undefined;
                }
              },
              createXHR: function createXHR() {
                if (this.getXHRAPI()) {
                  return this.createXMLHttpRequest();
                } else {
                  return this.createMicrosoftXHR();
                }
              },
              createXMLHttpRequest: function createXMLHttpRequest() {
                var Constructor = this.getXHRAPI();
                return new Constructor();
              },
              createMicrosoftXHR: function createMicrosoftXHR() {
                return new ActiveXObject("Microsoft.XMLHTTP");
              },
              getNetwork: function getNetwork() {
                return net_info_1.Network;
              },
              createWebSocket: function createWebSocket(url) {
                var Constructor = this.getWebSocketAPI();
                return new Constructor(url);
              },
              createSocketRequest: function createSocketRequest(method, url) {
                if (this.isXHRSupported()) {
                  return this.HTTPFactory.createXHR(method, url);
                } else if (this.isXDRSupported(url.indexOf("https:") === 0)) {
                  return this.HTTPFactory.createXDR(method, url);
                } else {
                  throw "Cross-origin HTTP requests are not supported";
                }
              },
              isXHRSupported: function isXHRSupported() {
                var Constructor = this.getXHRAPI();
                return Boolean(Constructor) && new Constructor().withCredentials !== undefined;
              },
              isXDRSupported: function isXDRSupported(useTLS) {
                var protocol = useTLS ? "https:" : "http:";
                var documentProtocol = this.getProtocol();
                return Boolean(window['XDomainRequest']) && documentProtocol === protocol;
              },
              addUnloadListener: function addUnloadListener(listener) {
                if (window.addEventListener !== undefined) {
                  window.addEventListener("unload", listener, false);
                } else if (window.attachEvent !== undefined) {
                  window.attachEvent("onunload", listener);
                }
              },
              removeUnloadListener: function removeUnloadListener(listener) {
                if (window.addEventListener !== undefined) {
                  window.removeEventListener("unload", listener, false);
                } else if (window.detachEvent !== undefined) {
                  window.detachEvent("onunload", listener);
                }
              }
            };
            exports.__esModule = true;
            exports["default"] = Runtime;
            /***/
          },
          /* 3 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var script_receiver_factory_1 = __webpack_require__(4);

            var defaults_1 = __webpack_require__(5);

            var dependency_loader_1 = __webpack_require__(6);

            exports.DependenciesReceivers = new script_receiver_factory_1.ScriptReceiverFactory("_pusher_dependencies", "Pusher.DependenciesReceivers");
            exports.Dependencies = new dependency_loader_1["default"]({
              cdn_http: defaults_1["default"].cdn_http,
              cdn_https: defaults_1["default"].cdn_https,
              version: defaults_1["default"].VERSION,
              suffix: defaults_1["default"].dependency_suffix,
              receivers: exports.DependenciesReceivers
            });
            /***/
          },
          /* 4 */

          /***/
          function (module, exports) {
            "use strict";

            var ScriptReceiverFactory = function () {
              function ScriptReceiverFactory(prefix, name) {
                this.lastId = 0;
                this.prefix = prefix;
                this.name = name;
              }

              ScriptReceiverFactory.prototype.create = function (callback) {
                this.lastId++;
                var number = this.lastId;
                var id = this.prefix + number;
                var name = this.name + "[" + number + "]";
                var called = false;

                var callbackWrapper = function callbackWrapper() {
                  if (!called) {
                    callback.apply(null, arguments);
                    called = true;
                  }
                };

                this[number] = callbackWrapper;
                return {
                  number: number,
                  id: id,
                  name: name,
                  callback: callbackWrapper
                };
              };

              ScriptReceiverFactory.prototype.remove = function (receiver) {
                delete this[receiver.number];
              };

              return ScriptReceiverFactory;
            }();

            exports.ScriptReceiverFactory = ScriptReceiverFactory;
            exports.ScriptReceivers = new ScriptReceiverFactory("_pusher_script_", "Pusher.ScriptReceivers");
            /***/
          },
          /* 5 */

          /***/
          function (module, exports) {
            "use strict";

            var Defaults = {
              VERSION: "4.4.0",
              PROTOCOL: 7,
              host: 'ws.pusherapp.com',
              ws_port: 80,
              wss_port: 443,
              ws_path: '',
              sockjs_host: 'sockjs.pusher.com',
              sockjs_http_port: 80,
              sockjs_https_port: 443,
              sockjs_path: "/pusher",
              stats_host: 'stats.pusher.com',
              channel_auth_endpoint: '/pusher/auth',
              channel_auth_transport: 'ajax',
              activity_timeout: 120000,
              pong_timeout: 30000,
              unavailable_timeout: 10000,
              cdn_http: 'http://js.pusher.com',
              cdn_https: 'https://js.pusher.com',
              dependency_suffix: ''
            };
            exports.__esModule = true;
            exports["default"] = Defaults;
            /***/
          },
          /* 6 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var script_receiver_factory_1 = __webpack_require__(4);

            var runtime_1 = __webpack_require__(2);

            var DependencyLoader = function () {
              function DependencyLoader(options) {
                this.options = options;
                this.receivers = options.receivers || script_receiver_factory_1.ScriptReceivers;
                this.loading = {};
              }

              DependencyLoader.prototype.load = function (name, options, callback) {
                var self = this;

                if (self.loading[name] && self.loading[name].length > 0) {
                  self.loading[name].push(callback);
                } else {
                  self.loading[name] = [callback];
                  var request = runtime_1["default"].createScriptRequest(self.getPath(name, options));
                  var receiver = self.receivers.create(function (error) {
                    self.receivers.remove(receiver);

                    if (self.loading[name]) {
                      var callbacks = self.loading[name];
                      delete self.loading[name];

                      var successCallback = function successCallback(wasSuccessful) {
                        if (!wasSuccessful) {
                          request.cleanup();
                        }
                      };

                      for (var i = 0; i < callbacks.length; i++) {
                        callbacks[i](error, successCallback);
                      }
                    }
                  });
                  request.send(receiver);
                }
              };

              DependencyLoader.prototype.getRoot = function (options) {
                var cdn;
                var protocol = runtime_1["default"].getDocument().location.protocol;

                if (options && options.useTLS || protocol === "https:") {
                  cdn = this.options.cdn_https;
                } else {
                  cdn = this.options.cdn_http;
                }

                return cdn.replace(/\/*$/, "") + "/" + this.options.version;
              };

              DependencyLoader.prototype.getPath = function (name, options) {
                return this.getRoot(options) + '/' + name + this.options.suffix + '.js';
              };

              ;
              return DependencyLoader;
            }();

            exports.__esModule = true;
            exports["default"] = DependencyLoader;
            /***/
          },
          /* 7 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var logger_1 = __webpack_require__(8);

            var runtime_1 = __webpack_require__(2);

            var url_store_1 = __webpack_require__(14);

            var ajax = function ajax(context, socketId, callback) {
              var self = this,
                  xhr;
              xhr = runtime_1["default"].createXHR();
              xhr.open("POST", self.options.authEndpoint, true);
              xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

              for (var headerName in this.authOptions.headers) {
                xhr.setRequestHeader(headerName, this.authOptions.headers[headerName]);
              }

              xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                    var data,
                        parsed = false;

                    try {
                      data = JSON.parse(xhr.responseText);
                      parsed = true;
                    } catch (e) {
                      callback(true, 'JSON returned from webapp was invalid, yet status code was 200. Data was: ' + xhr.responseText);
                    }

                    if (parsed) {
                      callback(false, data);
                    }
                  } else {
                    var suffix = url_store_1["default"].buildLogSuffix("authenticationEndpoint");
                    logger_1["default"].warn("Couldn't retrieve authentication info. " + xhr.status + ("Clients must be authenticated to join private or presence channels. " + suffix));
                    callback(true, xhr.status);
                  }
                }
              };

              xhr.send(this.composeQuery(socketId));
              return xhr;
            };

            exports.__esModule = true;
            exports["default"] = ajax;
            /***/
          },
          /* 8 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var collections_1 = __webpack_require__(9);

            var pusher_1 = __webpack_require__(1);

            var Logger = {
              debug: function debug() {
                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i - 0] = arguments[_i];
                }

                if (!pusher_1["default"].log) {
                  return;
                }

                pusher_1["default"].log(collections_1.stringify.apply(this, arguments));
              },
              warn: function warn() {
                var args = [];

                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i - 0] = arguments[_i];
                }

                var message = collections_1.stringify.apply(this, arguments);

                if (pusher_1["default"].log) {
                  pusher_1["default"].log(message);
                } else if (window.console) {
                  if (window.console.warn) {
                    window.console.warn(message);
                  } else if (window.console.log) {
                    window.console.log(message);
                  }
                }
              }
            };
            exports.__esModule = true;
            exports["default"] = Logger;
            /***/
          },
          /* 9 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var base64_1 = __webpack_require__(10);

            var util_1 = __webpack_require__(11);

            function extend(target) {
              var sources = [];

              for (var _i = 1; _i < arguments.length; _i++) {
                sources[_i - 1] = arguments[_i];
              }

              for (var i = 0; i < sources.length; i++) {
                var extensions = sources[i];

                for (var property in extensions) {
                  if (extensions[property] && extensions[property].constructor && extensions[property].constructor === Object) {
                    target[property] = extend(target[property] || {}, extensions[property]);
                  } else {
                    target[property] = extensions[property];
                  }
                }
              }

              return target;
            }

            exports.extend = extend;

            function stringify() {
              var m = ["Pusher"];

              for (var i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] === "string") {
                  m.push(arguments[i]);
                } else {
                  m.push(safeJSONStringify(arguments[i]));
                }
              }

              return m.join(" : ");
            }

            exports.stringify = stringify;

            function arrayIndexOf(array, item) {
              var nativeIndexOf = Array.prototype.indexOf;

              if (array === null) {
                return -1;
              }

              if (nativeIndexOf && array.indexOf === nativeIndexOf) {
                return array.indexOf(item);
              }

              for (var i = 0, l = array.length; i < l; i++) {
                if (array[i] === item) {
                  return i;
                }
              }

              return -1;
            }

            exports.arrayIndexOf = arrayIndexOf;

            function objectApply(object, f) {
              for (var key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                  f(object[key], key, object);
                }
              }
            }

            exports.objectApply = objectApply;

            function keys(object) {
              var keys = [];
              objectApply(object, function (_, key) {
                keys.push(key);
              });
              return keys;
            }

            exports.keys = keys;

            function values(object) {
              var values = [];
              objectApply(object, function (value) {
                values.push(value);
              });
              return values;
            }

            exports.values = values;

            function apply(array, f, context) {
              for (var i = 0; i < array.length; i++) {
                f.call(context || window, array[i], i, array);
              }
            }

            exports.apply = apply;

            function map(array, f) {
              var result = [];

              for (var i = 0; i < array.length; i++) {
                result.push(f(array[i], i, array, result));
              }

              return result;
            }

            exports.map = map;

            function mapObject(object, f) {
              var result = {};
              objectApply(object, function (value, key) {
                result[key] = f(value);
              });
              return result;
            }

            exports.mapObject = mapObject;

            function filter(array, test) {
              test = test || function (value) {
                return !!value;
              };

              var result = [];

              for (var i = 0; i < array.length; i++) {
                if (test(array[i], i, array, result)) {
                  result.push(array[i]);
                }
              }

              return result;
            }

            exports.filter = filter;

            function filterObject(object, test) {
              var result = {};
              objectApply(object, function (value, key) {
                if (test && test(value, key, object, result) || Boolean(value)) {
                  result[key] = value;
                }
              });
              return result;
            }

            exports.filterObject = filterObject;

            function flatten(object) {
              var result = [];
              objectApply(object, function (value, key) {
                result.push([key, value]);
              });
              return result;
            }

            exports.flatten = flatten;

            function any(array, test) {
              for (var i = 0; i < array.length; i++) {
                if (test(array[i], i, array)) {
                  return true;
                }
              }

              return false;
            }

            exports.any = any;

            function all(array, test) {
              for (var i = 0; i < array.length; i++) {
                if (!test(array[i], i, array)) {
                  return false;
                }
              }

              return true;
            }

            exports.all = all;

            function encodeParamsObject(data) {
              return mapObject(data, function (value) {
                if (typeof value === "object") {
                  value = safeJSONStringify(value);
                }

                return encodeURIComponent(base64_1["default"](value.toString()));
              });
            }

            exports.encodeParamsObject = encodeParamsObject;

            function buildQueryString(data) {
              var params = filterObject(data, function (value) {
                return value !== undefined;
              });
              var query = map(flatten(encodeParamsObject(params)), util_1["default"].method("join", "=")).join("&");
              return query;
            }

            exports.buildQueryString = buildQueryString;

            function decycleObject(object) {
              var objects = [],
                  paths = [];
              return function derez(value, path) {
                var i, name, nu;

                switch (typeof value) {
                  case 'object':
                    if (!value) {
                      return null;
                    }

                    for (i = 0; i < objects.length; i += 1) {
                      if (objects[i] === value) {
                        return {
                          $ref: paths[i]
                        };
                      }
                    }

                    objects.push(value);
                    paths.push(path);

                    if (Object.prototype.toString.apply(value) === '[object Array]') {
                      nu = [];

                      for (i = 0; i < value.length; i += 1) {
                        nu[i] = derez(value[i], path + '[' + i + ']');
                      }
                    } else {
                      nu = {};

                      for (name in value) {
                        if (Object.prototype.hasOwnProperty.call(value, name)) {
                          nu[name] = derez(value[name], path + '[' + JSON.stringify(name) + ']');
                        }
                      }
                    }

                    return nu;

                  case 'number':
                  case 'string':
                  case 'boolean':
                    return value;
                }
              }(object, '$');
            }

            exports.decycleObject = decycleObject;

            function safeJSONStringify(source) {
              try {
                return JSON.stringify(source);
              } catch (e) {
                return JSON.stringify(decycleObject(source));
              }
            }

            exports.safeJSONStringify = safeJSONStringify;
            /***/
          },
          /* 10 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            function encode(s) {
              return btoa(utob(s));
            }

            exports.__esModule = true;
            exports["default"] = encode;
            var fromCharCode = String.fromCharCode;
            var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            var b64tab = {};

            for (var i = 0, l = b64chars.length; i < l; i++) {
              b64tab[b64chars.charAt(i)] = i;
            }

            var cb_utob = function cb_utob(c) {
              var cc = c.charCodeAt(0);
              return cc < 0x80 ? c : cc < 0x800 ? fromCharCode(0xc0 | cc >>> 6) + fromCharCode(0x80 | cc & 0x3f) : fromCharCode(0xe0 | cc >>> 12 & 0x0f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
            };

            var utob = function utob(u) {
              return u.replace(/[^\x00-\x7F]/g, cb_utob);
            };

            var cb_encode = function cb_encode(ccc) {
              var padlen = [0, 2, 1][ccc.length % 3];
              var ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0);
              var chars = [b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? '=' : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? '=' : b64chars.charAt(ord & 63)];
              return chars.join('');
            };

            var btoa = window.btoa || function (b) {
              return b.replace(/[\s\S]{1,3}/g, cb_encode);
            };
            /***/

          },
          /* 11 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var timers_1 = __webpack_require__(12);

            var Util = {
              now: function now() {
                if (Date.now) {
                  return Date.now();
                } else {
                  return new Date().valueOf();
                }
              },
              defer: function defer(callback) {
                return new timers_1.OneOffTimer(0, callback);
              },
              method: function method(name) {
                var args = [];

                for (var _i = 1; _i < arguments.length; _i++) {
                  args[_i - 1] = arguments[_i];
                }

                var boundArguments = Array.prototype.slice.call(arguments, 1);
                return function (object) {
                  return object[name].apply(object, boundArguments.concat(arguments));
                };
              }
            };
            exports.__esModule = true;
            exports["default"] = Util;
            /***/
          },
          /* 12 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var __extends = this && this.__extends || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };

            var abstract_timer_1 = __webpack_require__(13);

            function clearTimeout(timer) {
              window.clearTimeout(timer);
            }

            function clearInterval(timer) {
              window.clearInterval(timer);
            }

            var OneOffTimer = function (_super) {
              __extends(OneOffTimer, _super);

              function OneOffTimer(delay, callback) {
                _super.call(this, setTimeout, clearTimeout, delay, function (timer) {
                  callback();
                  return null;
                });
              }

              return OneOffTimer;
            }(abstract_timer_1["default"]);

            exports.OneOffTimer = OneOffTimer;

            var PeriodicTimer = function (_super) {
              __extends(PeriodicTimer, _super);

              function PeriodicTimer(delay, callback) {
                _super.call(this, setInterval, clearInterval, delay, function (timer) {
                  callback();
                  return timer;
                });
              }

              return PeriodicTimer;
            }(abstract_timer_1["default"]);

            exports.PeriodicTimer = PeriodicTimer;
            /***/
          },
          /* 13 */

          /***/
          function (module, exports) {
            "use strict";

            var Timer = function () {
              function Timer(set, clear, delay, callback) {
                var _this = this;

                this.clear = clear;
                this.timer = set(function () {
                  if (_this.timer) {
                    _this.timer = callback(_this.timer);
                  }
                }, delay);
              }

              Timer.prototype.isRunning = function () {
                return this.timer !== null;
              };

              Timer.prototype.ensureAborted = function () {
                if (this.timer) {
                  this.clear(this.timer);
                  this.timer = null;
                }
              };

              return Timer;
            }();

            exports.__esModule = true;
            exports["default"] = Timer;
            /***/
          },
          /* 14 */

          /***/
          function (module, exports) {
            "use strict";

            var urlStore = {
              baseUrl: "https://pusher.com",
              urls: {
                authenticationEndpoint: {
                  path: "/docs/authenticating_users"
                },
                javascriptQuickStart: {
                  path: "/docs/javascript_quick_start"
                },
                triggeringClientEvents: {
                  path: "/docs/client_api_guide/client_events#trigger-events"
                }
              }
            };

            var buildLogSuffix = function buildLogSuffix(key) {
              var urlPrefix = "See:";
              var urlObj = urlStore.urls[key];
              if (!urlObj) return "";
              var url;

              if (urlObj.fullUrl) {
                url = urlObj.fullUrl;
              } else if (urlObj.path) {
                url = urlStore.baseUrl + urlObj.path;
              }

              if (!url) return "";
              return urlPrefix + " " + url;
            };

            exports.__esModule = true;
            exports["default"] = {
              buildLogSuffix: buildLogSuffix
            };
            /***/
          },
          /* 15 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var logger_1 = __webpack_require__(8);

            var jsonp = function jsonp(context, socketId, callback) {
              if (this.authOptions.headers !== undefined) {
                logger_1["default"].warn("Warn", "To send headers with the auth request, you must use AJAX, rather than JSONP.");
              }

              var callbackName = context.nextAuthCallbackID.toString();
              context.nextAuthCallbackID++;
              var document = context.getDocument();
              var script = document.createElement("script");

              context.auth_callbacks[callbackName] = function (data) {
                callback(false, data);
              };

              var callback_name = "Pusher.auth_callbacks['" + callbackName + "']";
              script.src = this.options.authEndpoint + '?callback=' + encodeURIComponent(callback_name) + '&' + this.composeQuery(socketId);
              var head = document.getElementsByTagName("head")[0] || document.documentElement;
              head.insertBefore(script, head.firstChild);
            };

            exports.__esModule = true;
            exports["default"] = jsonp;
            /***/
          },
          /* 16 */

          /***/
          function (module, exports) {
            "use strict";

            var ScriptRequest = function () {
              function ScriptRequest(src) {
                this.src = src;
              }

              ScriptRequest.prototype.send = function (receiver) {
                var self = this;
                var errorString = "Error loading " + self.src;
                self.script = document.createElement("script");
                self.script.id = receiver.id;
                self.script.src = self.src;
                self.script.type = "text/javascript";
                self.script.charset = "UTF-8";

                if (self.script.addEventListener) {
                  self.script.onerror = function () {
                    receiver.callback(errorString);
                  };

                  self.script.onload = function () {
                    receiver.callback(null);
                  };
                } else {
                  self.script.onreadystatechange = function () {
                    if (self.script.readyState === 'loaded' || self.script.readyState === 'complete') {
                      receiver.callback(null);
                    }
                  };
                }

                if (self.script.async === undefined && document.attachEvent && /opera/i.test(navigator.userAgent)) {
                  self.errorScript = document.createElement("script");
                  self.errorScript.id = receiver.id + "_error";
                  self.errorScript.text = receiver.name + "('" + errorString + "');";
                  self.script.async = self.errorScript.async = false;
                } else {
                  self.script.async = true;
                }

                var head = document.getElementsByTagName('head')[0];
                head.insertBefore(self.script, head.firstChild);

                if (self.errorScript) {
                  head.insertBefore(self.errorScript, self.script.nextSibling);
                }
              };

              ScriptRequest.prototype.cleanup = function () {
                if (this.script) {
                  this.script.onload = this.script.onerror = null;
                  this.script.onreadystatechange = null;
                }

                if (this.script && this.script.parentNode) {
                  this.script.parentNode.removeChild(this.script);
                }

                if (this.errorScript && this.errorScript.parentNode) {
                  this.errorScript.parentNode.removeChild(this.errorScript);
                }

                this.script = null;
                this.errorScript = null;
              };

              return ScriptRequest;
            }();

            exports.__esModule = true;
            exports["default"] = ScriptRequest;
            /***/
          },
          /* 17 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var Collections = __webpack_require__(9);

            var runtime_1 = __webpack_require__(2);

            var JSONPRequest = function () {
              function JSONPRequest(url, data) {
                this.url = url;
                this.data = data;
              }

              JSONPRequest.prototype.send = function (receiver) {
                if (this.request) {
                  return;
                }

                var query = Collections.buildQueryString(this.data);
                var url = this.url + "/" + receiver.number + "?" + query;
                this.request = runtime_1["default"].createScriptRequest(url);
                this.request.send(receiver);
              };

              JSONPRequest.prototype.cleanup = function () {
                if (this.request) {
                  this.request.cleanup();
                }
              };

              return JSONPRequest;
            }();

            exports.__esModule = true;
            exports["default"] = JSONPRequest;
            /***/
          },
          /* 18 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var runtime_1 = __webpack_require__(2);

            var script_receiver_factory_1 = __webpack_require__(4);

            var getAgent = function getAgent(sender, useTLS) {
              return function (data, callback) {
                var scheme = "http" + (useTLS ? "s" : "") + "://";
                var url = scheme + (sender.host || sender.options.host) + sender.options.path;
                var request = runtime_1["default"].createJSONPRequest(url, data);
                var receiver = runtime_1["default"].ScriptReceivers.create(function (error, result) {
                  script_receiver_factory_1.ScriptReceivers.remove(receiver);
                  request.cleanup();

                  if (result && result.host) {
                    sender.host = result.host;
                  }

                  if (callback) {
                    callback(error, result);
                  }
                });
                request.send(receiver);
              };
            };

            var jsonp = {
              name: 'jsonp',
              getAgent: getAgent
            };
            exports.__esModule = true;
            exports["default"] = jsonp;
            /***/
          },
          /* 19 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var transports_1 = __webpack_require__(20);

            var transport_1 = __webpack_require__(22);

            var URLSchemes = __webpack_require__(21);

            var runtime_1 = __webpack_require__(2);

            var dependencies_1 = __webpack_require__(3);

            var Collections = __webpack_require__(9);

            var SockJSTransport = new transport_1["default"]({
              file: "sockjs",
              urls: URLSchemes.sockjs,
              handlesActivityChecks: true,
              supportsPing: false,
              isSupported: function isSupported() {
                return true;
              },
              isInitialized: function isInitialized() {
                return window.SockJS !== undefined;
              },
              getSocket: function getSocket(url, options) {
                return new window.SockJS(url, null, {
                  js_path: dependencies_1.Dependencies.getPath("sockjs", {
                    useTLS: options.useTLS
                  }),
                  ignore_null_origin: options.ignoreNullOrigin
                });
              },
              beforeOpen: function beforeOpen(socket, path) {
                socket.send(JSON.stringify({
                  path: path
                }));
              }
            });
            var xdrConfiguration = {
              isSupported: function isSupported(environment) {
                var yes = runtime_1["default"].isXDRSupported(environment.useTLS);
                return yes;
              }
            };
            var XDRStreamingTransport = new transport_1["default"](Collections.extend({}, transports_1.streamingConfiguration, xdrConfiguration));
            var XDRPollingTransport = new transport_1["default"](Collections.extend({}, transports_1.pollingConfiguration, xdrConfiguration));
            transports_1["default"].xdr_streaming = XDRStreamingTransport;
            transports_1["default"].xdr_polling = XDRPollingTransport;
            transports_1["default"].sockjs = SockJSTransport;
            exports.__esModule = true;
            exports["default"] = transports_1["default"];
            /***/
          },
          /* 20 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var URLSchemes = __webpack_require__(21);

            var transport_1 = __webpack_require__(22);

            var Collections = __webpack_require__(9);

            var runtime_1 = __webpack_require__(2);

            var WSTransport = new transport_1["default"]({
              urls: URLSchemes.ws,
              handlesActivityChecks: false,
              supportsPing: false,
              isInitialized: function isInitialized() {
                return Boolean(runtime_1["default"].getWebSocketAPI());
              },
              isSupported: function isSupported() {
                return Boolean(runtime_1["default"].getWebSocketAPI());
              },
              getSocket: function getSocket(url) {
                return runtime_1["default"].createWebSocket(url);
              }
            });
            var httpConfiguration = {
              urls: URLSchemes.http,
              handlesActivityChecks: false,
              supportsPing: true,
              isInitialized: function isInitialized() {
                return true;
              }
            };
            exports.streamingConfiguration = Collections.extend({
              getSocket: function getSocket(url) {
                return runtime_1["default"].HTTPFactory.createStreamingSocket(url);
              }
            }, httpConfiguration);
            exports.pollingConfiguration = Collections.extend({
              getSocket: function getSocket(url) {
                return runtime_1["default"].HTTPFactory.createPollingSocket(url);
              }
            }, httpConfiguration);
            var xhrConfiguration = {
              isSupported: function isSupported() {
                return runtime_1["default"].isXHRSupported();
              }
            };
            var XHRStreamingTransport = new transport_1["default"](Collections.extend({}, exports.streamingConfiguration, xhrConfiguration));
            var XHRPollingTransport = new transport_1["default"](Collections.extend({}, exports.pollingConfiguration, xhrConfiguration));
            var Transports = {
              ws: WSTransport,
              xhr_streaming: XHRStreamingTransport,
              xhr_polling: XHRPollingTransport
            };
            exports.__esModule = true;
            exports["default"] = Transports;
            /***/
          },
          /* 21 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var defaults_1 = __webpack_require__(5);

            function getGenericURL(baseScheme, params, path) {
              var scheme = baseScheme + (params.useTLS ? "s" : "");
              var host = params.useTLS ? params.hostTLS : params.hostNonTLS;
              return scheme + "://" + host + path;
            }

            function getGenericPath(key, queryString) {
              var path = "/app/" + key;
              var query = "?protocol=" + defaults_1["default"].PROTOCOL + "&client=js" + "&version=" + defaults_1["default"].VERSION + (queryString ? "&" + queryString : "");
              return path + query;
            }

            exports.ws = {
              getInitial: function getInitial(key, params) {
                var path = (params.httpPath || "") + getGenericPath(key, "flash=false");
                return getGenericURL("ws", params, path);
              }
            };
            exports.http = {
              getInitial: function getInitial(key, params) {
                var path = (params.httpPath || "/pusher") + getGenericPath(key);
                return getGenericURL("http", params, path);
              }
            };
            exports.sockjs = {
              getInitial: function getInitial(key, params) {
                return getGenericURL("http", params, params.httpPath || "/pusher");
              },
              getPath: function getPath(key, params) {
                return getGenericPath(key);
              }
            };
            /***/
          },
          /* 22 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var transport_connection_1 = __webpack_require__(23);

            var Transport = function () {
              function Transport(hooks) {
                this.hooks = hooks;
              }

              Transport.prototype.isSupported = function (environment) {
                return this.hooks.isSupported(environment);
              };

              Transport.prototype.createConnection = function (name, priority, key, options) {
                return new transport_connection_1["default"](this.hooks, name, priority, key, options);
              };

              return Transport;
            }();

            exports.__esModule = true;
            exports["default"] = Transport;
            /***/
          },
          /* 23 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var __extends = this && this.__extends || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };

            var util_1 = __webpack_require__(11);

            var Collections = __webpack_require__(9);

            var dispatcher_1 = __webpack_require__(24);

            var logger_1 = __webpack_require__(8);

            var runtime_1 = __webpack_require__(2);

            var TransportConnection = function (_super) {
              __extends(TransportConnection, _super);

              function TransportConnection(hooks, name, priority, key, options) {
                _super.call(this);

                this.initialize = runtime_1["default"].transportConnectionInitializer;
                this.hooks = hooks;
                this.name = name;
                this.priority = priority;
                this.key = key;
                this.options = options;
                this.state = "new";
                this.timeline = options.timeline;
                this.activityTimeout = options.activityTimeout;
                this.id = this.timeline.generateUniqueID();
              }

              TransportConnection.prototype.handlesActivityChecks = function () {
                return Boolean(this.hooks.handlesActivityChecks);
              };

              TransportConnection.prototype.supportsPing = function () {
                return Boolean(this.hooks.supportsPing);
              };

              TransportConnection.prototype.connect = function () {
                var _this = this;

                if (this.socket || this.state !== "initialized") {
                  return false;
                }

                var url = this.hooks.urls.getInitial(this.key, this.options);

                try {
                  this.socket = this.hooks.getSocket(url, this.options);
                } catch (e) {
                  util_1["default"].defer(function () {
                    _this.onError(e);

                    _this.changeState("closed");
                  });
                  return false;
                }

                this.bindListeners();
                logger_1["default"].debug("Connecting", {
                  transport: this.name,
                  url: url
                });
                this.changeState("connecting");
                return true;
              };

              TransportConnection.prototype.close = function () {
                if (this.socket) {
                  this.socket.close();
                  return true;
                } else {
                  return false;
                }
              };

              TransportConnection.prototype.send = function (data) {
                var _this = this;

                if (this.state === "open") {
                  util_1["default"].defer(function () {
                    if (_this.socket) {
                      _this.socket.send(data);
                    }
                  });
                  return true;
                } else {
                  return false;
                }
              };

              TransportConnection.prototype.ping = function () {
                if (this.state === "open" && this.supportsPing()) {
                  this.socket.ping();
                }
              };

              TransportConnection.prototype.onOpen = function () {
                if (this.hooks.beforeOpen) {
                  this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options));
                }

                this.changeState("open");
                this.socket.onopen = undefined;
              };

              TransportConnection.prototype.onError = function (error) {
                this.emit("error", {
                  type: 'WebSocketError',
                  error: error
                });
                this.timeline.error(this.buildTimelineMessage({
                  error: error.toString()
                }));
              };

              TransportConnection.prototype.onClose = function (closeEvent) {
                if (closeEvent) {
                  this.changeState("closed", {
                    code: closeEvent.code,
                    reason: closeEvent.reason,
                    wasClean: closeEvent.wasClean
                  });
                } else {
                  this.changeState("closed");
                }

                this.unbindListeners();
                this.socket = undefined;
              };

              TransportConnection.prototype.onMessage = function (message) {
                this.emit("message", message);
              };

              TransportConnection.prototype.onActivity = function () {
                this.emit("activity");
              };

              TransportConnection.prototype.bindListeners = function () {
                var _this = this;

                this.socket.onopen = function () {
                  _this.onOpen();
                };

                this.socket.onerror = function (error) {
                  _this.onError(error);
                };

                this.socket.onclose = function (closeEvent) {
                  _this.onClose(closeEvent);
                };

                this.socket.onmessage = function (message) {
                  _this.onMessage(message);
                };

                if (this.supportsPing()) {
                  this.socket.onactivity = function () {
                    _this.onActivity();
                  };
                }
              };

              TransportConnection.prototype.unbindListeners = function () {
                if (this.socket) {
                  this.socket.onopen = undefined;
                  this.socket.onerror = undefined;
                  this.socket.onclose = undefined;
                  this.socket.onmessage = undefined;

                  if (this.supportsPing()) {
                    this.socket.onactivity = undefined;
                  }
                }
              };

              TransportConnection.prototype.changeState = function (state, params) {
                this.state = state;
                this.timeline.info(this.buildTimelineMessage({
                  state: state,
                  params: params
                }));
                this.emit(state, params);
              };

              TransportConnection.prototype.buildTimelineMessage = function (message) {
                return Collections.extend({
                  cid: this.id
                }, message);
              };

              return TransportConnection;
            }(dispatcher_1["default"]);

            exports.__esModule = true;
            exports["default"] = TransportConnection;
            /***/
          },
          /* 24 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var Collections = __webpack_require__(9);

            var callback_registry_1 = __webpack_require__(25);

            var Dispatcher = function () {
              function Dispatcher(failThrough) {
                this.callbacks = new callback_registry_1["default"]();
                this.global_callbacks = [];
                this.failThrough = failThrough;
              }

              Dispatcher.prototype.bind = function (eventName, callback, context) {
                this.callbacks.add(eventName, callback, context);
                return this;
              };

              Dispatcher.prototype.bind_global = function (callback) {
                this.global_callbacks.push(callback);
                return this;
              };

              Dispatcher.prototype.unbind = function (eventName, callback, context) {
                this.callbacks.remove(eventName, callback, context);
                return this;
              };

              Dispatcher.prototype.unbind_global = function (callback) {
                if (!callback) {
                  this.global_callbacks = [];
                  return this;
                }

                this.global_callbacks = Collections.filter(this.global_callbacks || [], function (c) {
                  return c !== callback;
                });
                return this;
              };

              Dispatcher.prototype.unbind_all = function () {
                this.unbind();
                this.unbind_global();
                return this;
              };

              Dispatcher.prototype.emit = function (eventName, data, metadata) {
                for (var i = 0; i < this.global_callbacks.length; i++) {
                  this.global_callbacks[i](eventName, data);
                }

                var callbacks = this.callbacks.get(eventName);
                var args = [];

                if (metadata) {
                  args.push(data, metadata);
                } else if (data) {
                  args.push(data);
                }

                if (callbacks && callbacks.length > 0) {
                  for (var i = 0; i < callbacks.length; i++) {
                    callbacks[i].fn.apply(callbacks[i].context || window, args);
                  }
                } else if (this.failThrough) {
                  this.failThrough(eventName, data);
                }

                return this;
              };

              return Dispatcher;
            }();

            exports.__esModule = true;
            exports["default"] = Dispatcher;
            /***/
          },
          /* 25 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var Collections = __webpack_require__(9);

            var CallbackRegistry = function () {
              function CallbackRegistry() {
                this._callbacks = {};
              }

              CallbackRegistry.prototype.get = function (name) {
                return this._callbacks[prefix(name)];
              };

              CallbackRegistry.prototype.add = function (name, callback, context) {
                var prefixedEventName = prefix(name);
                this._callbacks[prefixedEventName] = this._callbacks[prefixedEventName] || [];

                this._callbacks[prefixedEventName].push({
                  fn: callback,
                  context: context
                });
              };

              CallbackRegistry.prototype.remove = function (name, callback, context) {
                if (!name && !callback && !context) {
                  this._callbacks = {};
                  return;
                }

                var names = name ? [prefix(name)] : Collections.keys(this._callbacks);

                if (callback || context) {
                  this.removeCallback(names, callback, context);
                } else {
                  this.removeAllCallbacks(names);
                }
              };

              CallbackRegistry.prototype.removeCallback = function (names, callback, context) {
                Collections.apply(names, function (name) {
                  this._callbacks[name] = Collections.filter(this._callbacks[name] || [], function (binding) {
                    return callback && callback !== binding.fn || context && context !== binding.context;
                  });

                  if (this._callbacks[name].length === 0) {
                    delete this._callbacks[name];
                  }
                }, this);
              };

              CallbackRegistry.prototype.removeAllCallbacks = function (names) {
                Collections.apply(names, function (name) {
                  delete this._callbacks[name];
                }, this);
              };

              return CallbackRegistry;
            }();

            exports.__esModule = true;
            exports["default"] = CallbackRegistry;

            function prefix(name) {
              return "_" + name;
            }
            /***/

          },
          /* 26 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var __extends = this && this.__extends || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };

            var dispatcher_1 = __webpack_require__(24);

            var NetInfo = function (_super) {
              __extends(NetInfo, _super);

              function NetInfo() {
                _super.call(this);

                var self = this;

                if (window.addEventListener !== undefined) {
                  window.addEventListener("online", function () {
                    self.emit('online');
                  }, false);
                  window.addEventListener("offline", function () {
                    self.emit('offline');
                  }, false);
                }
              }

              NetInfo.prototype.isOnline = function () {
                if (window.navigator.onLine === undefined) {
                  return true;
                } else {
                  return window.navigator.onLine;
                }
              };

              return NetInfo;
            }(dispatcher_1["default"]);

            exports.NetInfo = NetInfo;
            exports.Network = new NetInfo();
            /***/
          },
          /* 27 */

          /***/
          function (module, exports) {
            "use strict";

            var getDefaultStrategy = function getDefaultStrategy(config) {
              var wsStrategy;

              if (config.useTLS) {
                wsStrategy = [":best_connected_ever", ":ws_loop", [":delayed", 2000, [":http_fallback_loop"]]];
              } else {
                wsStrategy = [":best_connected_ever", ":ws_loop", [":delayed", 2000, [":wss_loop"]], [":delayed", 5000, [":http_fallback_loop"]]];
              }

              return [[":def", "ws_options", {
                hostNonTLS: config.wsHost + ":" + config.wsPort,
                hostTLS: config.wsHost + ":" + config.wssPort,
                httpPath: config.wsPath
              }], [":def", "wss_options", [":extend", ":ws_options", {
                useTLS: true
              }]], [":def", "sockjs_options", {
                hostNonTLS: config.httpHost + ":" + config.httpPort,
                hostTLS: config.httpHost + ":" + config.httpsPort,
                httpPath: config.httpPath
              }], [":def", "timeouts", {
                loop: true,
                timeout: 15000,
                timeoutLimit: 60000
              }], [":def", "ws_manager", [":transport_manager", {
                lives: 2,
                minPingDelay: 10000,
                maxPingDelay: config.activity_timeout
              }]], [":def", "streaming_manager", [":transport_manager", {
                lives: 2,
                minPingDelay: 10000,
                maxPingDelay: config.activity_timeout
              }]], [":def_transport", "ws", "ws", 3, ":ws_options", ":ws_manager"], [":def_transport", "wss", "ws", 3, ":wss_options", ":ws_manager"], [":def_transport", "sockjs", "sockjs", 1, ":sockjs_options"], [":def_transport", "xhr_streaming", "xhr_streaming", 1, ":sockjs_options", ":streaming_manager"], [":def_transport", "xdr_streaming", "xdr_streaming", 1, ":sockjs_options", ":streaming_manager"], [":def_transport", "xhr_polling", "xhr_polling", 1, ":sockjs_options"], [":def_transport", "xdr_polling", "xdr_polling", 1, ":sockjs_options"], [":def", "ws_loop", [":sequential", ":timeouts", ":ws"]], [":def", "wss_loop", [":sequential", ":timeouts", ":wss"]], [":def", "sockjs_loop", [":sequential", ":timeouts", ":sockjs"]], [":def", "streaming_loop", [":sequential", ":timeouts", [":if", [":is_supported", ":xhr_streaming"], ":xhr_streaming", ":xdr_streaming"]]], [":def", "polling_loop", [":sequential", ":timeouts", [":if", [":is_supported", ":xhr_polling"], ":xhr_polling", ":xdr_polling"]]], [":def", "http_loop", [":if", [":is_supported", ":streaming_loop"], [":best_connected_ever", ":streaming_loop", [":delayed", 4000, [":polling_loop"]]], [":polling_loop"]]], [":def", "http_fallback_loop", [":if", [":is_supported", ":http_loop"], [":http_loop"], [":sockjs_loop"]]], [":def", "strategy", [":cached", 1800000, [":first_connected", [":if", [":is_supported", ":ws"], wsStrategy, ":http_fallback_loop"]]]]];
            };

            exports.__esModule = true;
            exports["default"] = getDefaultStrategy;
            /***/
          },
          /* 28 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var dependencies_1 = __webpack_require__(3);

            function default_1() {
              var self = this;
              self.timeline.info(self.buildTimelineMessage({
                transport: self.name + (self.options.useTLS ? "s" : "")
              }));

              if (self.hooks.isInitialized()) {
                self.changeState("initialized");
              } else if (self.hooks.file) {
                self.changeState("initializing");
                dependencies_1.Dependencies.load(self.hooks.file, {
                  useTLS: self.options.useTLS
                }, function (error, callback) {
                  if (self.hooks.isInitialized()) {
                    self.changeState("initialized");
                    callback(true);
                  } else {
                    if (error) {
                      self.onError(error);
                    }

                    self.onClose();
                    callback(false);
                  }
                });
              } else {
                self.onClose();
              }
            }

            exports.__esModule = true;
            exports["default"] = default_1;
            /***/
          },
          /* 29 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var http_xdomain_request_1 = __webpack_require__(30);

            var http_1 = __webpack_require__(32);

            http_1["default"].createXDR = function (method, url) {
              return this.createRequest(http_xdomain_request_1["default"], method, url);
            };

            exports.__esModule = true;
            exports["default"] = http_1["default"];
            /***/
          },
          /* 30 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var Errors = __webpack_require__(31);

            var hooks = {
              getRequest: function getRequest(socket) {
                var xdr = new window.XDomainRequest();

                xdr.ontimeout = function () {
                  socket.emit("error", new Errors.RequestTimedOut());
                  socket.close();
                };

                xdr.onerror = function (e) {
                  socket.emit("error", e);
                  socket.close();
                };

                xdr.onprogress = function () {
                  if (xdr.responseText && xdr.responseText.length > 0) {
                    socket.onChunk(200, xdr.responseText);
                  }
                };

                xdr.onload = function () {
                  if (xdr.responseText && xdr.responseText.length > 0) {
                    socket.onChunk(200, xdr.responseText);
                  }

                  socket.emit("finished", 200);
                  socket.close();
                };

                return xdr;
              },
              abortRequest: function abortRequest(xdr) {
                xdr.ontimeout = xdr.onerror = xdr.onprogress = xdr.onload = null;
                xdr.abort();
              }
            };
            exports.__esModule = true;
            exports["default"] = hooks;
            /***/
          },
          /* 31 */

          /***/
          function (module, exports) {
            "use strict";

            var __extends = this && this.__extends || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };

            var BadEventName = function (_super) {
              __extends(BadEventName, _super);

              function BadEventName() {
                _super.apply(this, arguments);
              }

              return BadEventName;
            }(Error);

            exports.BadEventName = BadEventName;

            var RequestTimedOut = function (_super) {
              __extends(RequestTimedOut, _super);

              function RequestTimedOut() {
                _super.apply(this, arguments);
              }

              return RequestTimedOut;
            }(Error);

            exports.RequestTimedOut = RequestTimedOut;

            var TransportPriorityTooLow = function (_super) {
              __extends(TransportPriorityTooLow, _super);

              function TransportPriorityTooLow() {
                _super.apply(this, arguments);
              }

              return TransportPriorityTooLow;
            }(Error);

            exports.TransportPriorityTooLow = TransportPriorityTooLow;

            var TransportClosed = function (_super) {
              __extends(TransportClosed, _super);

              function TransportClosed() {
                _super.apply(this, arguments);
              }

              return TransportClosed;
            }(Error);

            exports.TransportClosed = TransportClosed;

            var UnsupportedFeature = function (_super) {
              __extends(UnsupportedFeature, _super);

              function UnsupportedFeature() {
                _super.apply(this, arguments);
              }

              return UnsupportedFeature;
            }(Error);

            exports.UnsupportedFeature = UnsupportedFeature;

            var UnsupportedTransport = function (_super) {
              __extends(UnsupportedTransport, _super);

              function UnsupportedTransport() {
                _super.apply(this, arguments);
              }

              return UnsupportedTransport;
            }(Error);

            exports.UnsupportedTransport = UnsupportedTransport;

            var UnsupportedStrategy = function (_super) {
              __extends(UnsupportedStrategy, _super);

              function UnsupportedStrategy() {
                _super.apply(this, arguments);
              }

              return UnsupportedStrategy;
            }(Error);

            exports.UnsupportedStrategy = UnsupportedStrategy;
            /***/
          },
          /* 32 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var http_request_1 = __webpack_require__(33);

            var http_socket_1 = __webpack_require__(34);

            var http_streaming_socket_1 = __webpack_require__(36);

            var http_polling_socket_1 = __webpack_require__(37);

            var http_xhr_request_1 = __webpack_require__(38);

            var HTTP = {
              createStreamingSocket: function createStreamingSocket(url) {
                return this.createSocket(http_streaming_socket_1["default"], url);
              },
              createPollingSocket: function createPollingSocket(url) {
                return this.createSocket(http_polling_socket_1["default"], url);
              },
              createSocket: function createSocket(hooks, url) {
                return new http_socket_1["default"](hooks, url);
              },
              createXHR: function createXHR(method, url) {
                return this.createRequest(http_xhr_request_1["default"], method, url);
              },
              createRequest: function createRequest(hooks, method, url) {
                return new http_request_1["default"](hooks, method, url);
              }
            };
            exports.__esModule = true;
            exports["default"] = HTTP;
            /***/
          },
          /* 33 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var __extends = this && this.__extends || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };

            var runtime_1 = __webpack_require__(2);

            var dispatcher_1 = __webpack_require__(24);

            var MAX_BUFFER_LENGTH = 256 * 1024;

            var HTTPRequest = function (_super) {
              __extends(HTTPRequest, _super);

              function HTTPRequest(hooks, method, url) {
                _super.call(this);

                this.hooks = hooks;
                this.method = method;
                this.url = url;
              }

              HTTPRequest.prototype.start = function (payload) {
                var _this = this;

                this.position = 0;
                this.xhr = this.hooks.getRequest(this);

                this.unloader = function () {
                  _this.close();
                };

                runtime_1["default"].addUnloadListener(this.unloader);
                this.xhr.open(this.method, this.url, true);

                if (this.xhr.setRequestHeader) {
                  this.xhr.setRequestHeader("Content-Type", "application/json");
                }

                this.xhr.send(payload);
              };

              HTTPRequest.prototype.close = function () {
                if (this.unloader) {
                  runtime_1["default"].removeUnloadListener(this.unloader);
                  this.unloader = null;
                }

                if (this.xhr) {
                  this.hooks.abortRequest(this.xhr);
                  this.xhr = null;
                }
              };

              HTTPRequest.prototype.onChunk = function (status, data) {
                while (true) {
                  var chunk = this.advanceBuffer(data);

                  if (chunk) {
                    this.emit("chunk", {
                      status: status,
                      data: chunk
                    });
                  } else {
                    break;
                  }
                }

                if (this.isBufferTooLong(data)) {
                  this.emit("buffer_too_long");
                }
              };

              HTTPRequest.prototype.advanceBuffer = function (buffer) {
                var unreadData = buffer.slice(this.position);
                var endOfLinePosition = unreadData.indexOf("\n");

                if (endOfLinePosition !== -1) {
                  this.position += endOfLinePosition + 1;
                  return unreadData.slice(0, endOfLinePosition);
                } else {
                  return null;
                }
              };

              HTTPRequest.prototype.isBufferTooLong = function (buffer) {
                return this.position === buffer.length && buffer.length > MAX_BUFFER_LENGTH;
              };

              return HTTPRequest;
            }(dispatcher_1["default"]);

            exports.__esModule = true;
            exports["default"] = HTTPRequest;
            /***/
          },
          /* 34 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var state_1 = __webpack_require__(35);

            var util_1 = __webpack_require__(11);

            var runtime_1 = __webpack_require__(2);

            var autoIncrement = 1;

            var HTTPSocket = function () {
              function HTTPSocket(hooks, url) {
                this.hooks = hooks;
                this.session = randomNumber(1000) + "/" + randomString(8);
                this.location = getLocation(url);
                this.readyState = state_1["default"].CONNECTING;
                this.openStream();
              }

              HTTPSocket.prototype.send = function (payload) {
                return this.sendRaw(JSON.stringify([payload]));
              };

              HTTPSocket.prototype.ping = function () {
                this.hooks.sendHeartbeat(this);
              };

              HTTPSocket.prototype.close = function (code, reason) {
                this.onClose(code, reason, true);
              };

              HTTPSocket.prototype.sendRaw = function (payload) {
                if (this.readyState === state_1["default"].OPEN) {
                  try {
                    runtime_1["default"].createSocketRequest("POST", getUniqueURL(getSendURL(this.location, this.session))).start(payload);
                    return true;
                  } catch (e) {
                    return false;
                  }
                } else {
                  return false;
                }
              };

              HTTPSocket.prototype.reconnect = function () {
                this.closeStream();
                this.openStream();
              };

              ;

              HTTPSocket.prototype.onClose = function (code, reason, wasClean) {
                this.closeStream();
                this.readyState = state_1["default"].CLOSED;

                if (this.onclose) {
                  this.onclose({
                    code: code,
                    reason: reason,
                    wasClean: wasClean
                  });
                }
              };

              HTTPSocket.prototype.onChunk = function (chunk) {
                if (chunk.status !== 200) {
                  return;
                }

                if (this.readyState === state_1["default"].OPEN) {
                  this.onActivity();
                }

                var payload;
                var type = chunk.data.slice(0, 1);

                switch (type) {
                  case 'o':
                    payload = JSON.parse(chunk.data.slice(1) || '{}');
                    this.onOpen(payload);
                    break;

                  case 'a':
                    payload = JSON.parse(chunk.data.slice(1) || '[]');

                    for (var i = 0; i < payload.length; i++) {
                      this.onEvent(payload[i]);
                    }

                    break;

                  case 'm':
                    payload = JSON.parse(chunk.data.slice(1) || 'null');
                    this.onEvent(payload);
                    break;

                  case 'h':
                    this.hooks.onHeartbeat(this);
                    break;

                  case 'c':
                    payload = JSON.parse(chunk.data.slice(1) || '[]');
                    this.onClose(payload[0], payload[1], true);
                    break;
                }
              };

              HTTPSocket.prototype.onOpen = function (options) {
                if (this.readyState === state_1["default"].CONNECTING) {
                  if (options && options.hostname) {
                    this.location.base = replaceHost(this.location.base, options.hostname);
                  }

                  this.readyState = state_1["default"].OPEN;

                  if (this.onopen) {
                    this.onopen();
                  }
                } else {
                  this.onClose(1006, "Server lost session", true);
                }
              };

              HTTPSocket.prototype.onEvent = function (event) {
                if (this.readyState === state_1["default"].OPEN && this.onmessage) {
                  this.onmessage({
                    data: event
                  });
                }
              };

              HTTPSocket.prototype.onActivity = function () {
                if (this.onactivity) {
                  this.onactivity();
                }
              };

              HTTPSocket.prototype.onError = function (error) {
                if (this.onerror) {
                  this.onerror(error);
                }
              };

              HTTPSocket.prototype.openStream = function () {
                var _this = this;

                this.stream = runtime_1["default"].createSocketRequest("POST", getUniqueURL(this.hooks.getReceiveURL(this.location, this.session)));
                this.stream.bind("chunk", function (chunk) {
                  _this.onChunk(chunk);
                });
                this.stream.bind("finished", function (status) {
                  _this.hooks.onFinished(_this, status);
                });
                this.stream.bind("buffer_too_long", function () {
                  _this.reconnect();
                });

                try {
                  this.stream.start();
                } catch (error) {
                  util_1["default"].defer(function () {
                    _this.onError(error);

                    _this.onClose(1006, "Could not start streaming", false);
                  });
                }
              };

              HTTPSocket.prototype.closeStream = function () {
                if (this.stream) {
                  this.stream.unbind_all();
                  this.stream.close();
                  this.stream = null;
                }
              };

              return HTTPSocket;
            }();

            function getLocation(url) {
              var parts = /([^\?]*)\/*(\??.*)/.exec(url);
              return {
                base: parts[1],
                queryString: parts[2]
              };
            }

            function getSendURL(url, session) {
              return url.base + "/" + session + "/xhr_send";
            }

            function getUniqueURL(url) {
              var separator = url.indexOf('?') === -1 ? "?" : "&";
              return url + separator + "t=" + +new Date() + "&n=" + autoIncrement++;
            }

            function replaceHost(url, hostname) {
              var urlParts = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(url);
              return urlParts[1] + hostname + urlParts[3];
            }

            function randomNumber(max) {
              return Math.floor(Math.random() * max);
            }

            function randomString(length) {
              var result = [];

              for (var i = 0; i < length; i++) {
                result.push(randomNumber(32).toString(32));
              }

              return result.join('');
            }

            exports.__esModule = true;
            exports["default"] = HTTPSocket;
            /***/
          },
          /* 35 */

          /***/
          function (module, exports) {
            "use strict";

            var State;

            (function (State) {
              State[State["CONNECTING"] = 0] = "CONNECTING";
              State[State["OPEN"] = 1] = "OPEN";
              State[State["CLOSED"] = 3] = "CLOSED";
            })(State || (State = {}));

            exports.__esModule = true;
            exports["default"] = State;
            /***/
          },
          /* 36 */

          /***/
          function (module, exports) {
            "use strict";

            var hooks = {
              getReceiveURL: function getReceiveURL(url, session) {
                return url.base + "/" + session + "/xhr_streaming" + url.queryString;
              },
              onHeartbeat: function onHeartbeat(socket) {
                socket.sendRaw("[]");
              },
              sendHeartbeat: function sendHeartbeat(socket) {
                socket.sendRaw("[]");
              },
              onFinished: function onFinished(socket, status) {
                socket.onClose(1006, "Connection interrupted (" + status + ")", false);
              }
            };
            exports.__esModule = true;
            exports["default"] = hooks;
            /***/
          },
          /* 37 */

          /***/
          function (module, exports) {
            "use strict";

            var hooks = {
              getReceiveURL: function getReceiveURL(url, session) {
                return url.base + "/" + session + "/xhr" + url.queryString;
              },
              onHeartbeat: function onHeartbeat() {},
              sendHeartbeat: function sendHeartbeat(socket) {
                socket.sendRaw("[]");
              },
              onFinished: function onFinished(socket, status) {
                if (status === 200) {
                  socket.reconnect();
                } else {
                  socket.onClose(1006, "Connection interrupted (" + status + ")", false);
                }
              }
            };
            exports.__esModule = true;
            exports["default"] = hooks;
            /***/
          },
          /* 38 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var runtime_1 = __webpack_require__(2);

            var hooks = {
              getRequest: function getRequest(socket) {
                var Constructor = runtime_1["default"].getXHRAPI();
                var xhr = new Constructor();

                xhr.onreadystatechange = xhr.onprogress = function () {
                  switch (xhr.readyState) {
                    case 3:
                      if (xhr.responseText && xhr.responseText.length > 0) {
                        socket.onChunk(xhr.status, xhr.responseText);
                      }

                      break;

                    case 4:
                      if (xhr.responseText && xhr.responseText.length > 0) {
                        socket.onChunk(xhr.status, xhr.responseText);
                      }

                      socket.emit("finished", xhr.status);
                      socket.close();
                      break;
                  }
                };

                return xhr;
              },
              abortRequest: function abortRequest(xhr) {
                xhr.onreadystatechange = null;
                xhr.abort();
              }
            };
            exports.__esModule = true;
            exports["default"] = hooks;
            /***/
          },
          /* 39 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var Collections = __webpack_require__(9);

            var util_1 = __webpack_require__(11);

            var level_1 = __webpack_require__(40);

            var Timeline = function () {
              function Timeline(key, session, options) {
                this.key = key;
                this.session = session;
                this.events = [];
                this.options = options || {};
                this.sent = 0;
                this.uniqueID = 0;
              }

              Timeline.prototype.log = function (level, event) {
                if (level <= this.options.level) {
                  this.events.push(Collections.extend({}, event, {
                    timestamp: util_1["default"].now()
                  }));

                  if (this.options.limit && this.events.length > this.options.limit) {
                    this.events.shift();
                  }
                }
              };

              Timeline.prototype.error = function (event) {
                this.log(level_1["default"].ERROR, event);
              };

              Timeline.prototype.info = function (event) {
                this.log(level_1["default"].INFO, event);
              };

              Timeline.prototype.debug = function (event) {
                this.log(level_1["default"].DEBUG, event);
              };

              Timeline.prototype.isEmpty = function () {
                return this.events.length === 0;
              };

              Timeline.prototype.send = function (sendfn, callback) {
                var _this = this;

                var data = Collections.extend({
                  session: this.session,
                  bundle: this.sent + 1,
                  key: this.key,
                  lib: "js",
                  version: this.options.version,
                  cluster: this.options.cluster,
                  features: this.options.features,
                  timeline: this.events
                }, this.options.params);
                this.events = [];
                sendfn(data, function (error, result) {
                  if (!error) {
                    _this.sent++;
                  }

                  if (callback) {
                    callback(error, result);
                  }
                });
                return true;
              };

              Timeline.prototype.generateUniqueID = function () {
                this.uniqueID++;
                return this.uniqueID;
              };

              return Timeline;
            }();

            exports.__esModule = true;
            exports["default"] = Timeline;
            /***/
          },
          /* 40 */

          /***/
          function (module, exports) {
            "use strict";

            var TimelineLevel;

            (function (TimelineLevel) {
              TimelineLevel[TimelineLevel["ERROR"] = 3] = "ERROR";
              TimelineLevel[TimelineLevel["INFO"] = 6] = "INFO";
              TimelineLevel[TimelineLevel["DEBUG"] = 7] = "DEBUG";
            })(TimelineLevel || (TimelineLevel = {}));

            exports.__esModule = true;
            exports["default"] = TimelineLevel;
            /***/
          },
          /* 41 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var Collections = __webpack_require__(9);

            var util_1 = __webpack_require__(11);

            var transport_manager_1 = __webpack_require__(42);

            var Errors = __webpack_require__(31);

            var transport_strategy_1 = __webpack_require__(64);

            var sequential_strategy_1 = __webpack_require__(65);

            var best_connected_ever_strategy_1 = __webpack_require__(66);

            var cached_strategy_1 = __webpack_require__(67);

            var delayed_strategy_1 = __webpack_require__(68);

            var if_strategy_1 = __webpack_require__(69);

            var first_connected_strategy_1 = __webpack_require__(70);

            var runtime_1 = __webpack_require__(2);

            var Transports = runtime_1["default"].Transports;

            exports.build = function (scheme, options) {
              var context = Collections.extend({}, globalContext, options);
              return evaluate(scheme, context)[1].strategy;
            };

            var UnsupportedStrategy = {
              isSupported: function isSupported() {
                return false;
              },
              connect: function connect(_, callback) {
                var deferred = util_1["default"].defer(function () {
                  callback(new Errors.UnsupportedStrategy());
                });
                return {
                  abort: function abort() {
                    deferred.ensureAborted();
                  },
                  forceMinPriority: function forceMinPriority() {}
                };
              }
            };

            function returnWithOriginalContext(f) {
              return function (context) {
                return [f.apply(this, arguments), context];
              };
            }

            var globalContext = {
              extend: function extend(context, first, second) {
                return [Collections.extend({}, first, second), context];
              },
              def: function def(context, name, value) {
                if (context[name] !== undefined) {
                  throw "Redefining symbol " + name;
                }

                context[name] = value;
                return [undefined, context];
              },
              def_transport: function def_transport(context, name, type, priority, options, manager) {
                var transportClass = Transports[type];

                if (!transportClass) {
                  throw new Errors.UnsupportedTransport(type);
                }

                var enabled = (!context.enabledTransports || Collections.arrayIndexOf(context.enabledTransports, name) !== -1) && (!context.disabledTransports || Collections.arrayIndexOf(context.disabledTransports, name) === -1);
                var transport;

                if (enabled) {
                  transport = new transport_strategy_1["default"](name, priority, manager ? manager.getAssistant(transportClass) : transportClass, Collections.extend({
                    key: context.key,
                    useTLS: context.useTLS,
                    timeline: context.timeline,
                    ignoreNullOrigin: context.ignoreNullOrigin
                  }, options));
                } else {
                  transport = UnsupportedStrategy;
                }

                var newContext = context.def(context, name, transport)[1];
                newContext.Transports = context.Transports || {};
                newContext.Transports[name] = transport;
                return [undefined, newContext];
              },
              transport_manager: returnWithOriginalContext(function (_, options) {
                return new transport_manager_1["default"](options);
              }),
              sequential: returnWithOriginalContext(function (_, options) {
                var strategies = Array.prototype.slice.call(arguments, 2);
                return new sequential_strategy_1["default"](strategies, options);
              }),
              cached: returnWithOriginalContext(function (context, ttl, strategy) {
                return new cached_strategy_1["default"](strategy, context.Transports, {
                  ttl: ttl,
                  timeline: context.timeline,
                  useTLS: context.useTLS
                });
              }),
              first_connected: returnWithOriginalContext(function (_, strategy) {
                return new first_connected_strategy_1["default"](strategy);
              }),
              best_connected_ever: returnWithOriginalContext(function () {
                var strategies = Array.prototype.slice.call(arguments, 1);
                return new best_connected_ever_strategy_1["default"](strategies);
              }),
              delayed: returnWithOriginalContext(function (_, delay, strategy) {
                return new delayed_strategy_1["default"](strategy, {
                  delay: delay
                });
              }),
              "if": returnWithOriginalContext(function (_, test, trueBranch, falseBranch) {
                return new if_strategy_1["default"](test, trueBranch, falseBranch);
              }),
              is_supported: returnWithOriginalContext(function (_, strategy) {
                return function () {
                  return strategy.isSupported();
                };
              })
            };

            function isSymbol(expression) {
              return typeof expression === "string" && expression.charAt(0) === ":";
            }

            function getSymbolValue(expression, context) {
              return context[expression.slice(1)];
            }

            function evaluateListOfExpressions(expressions, context) {
              if (expressions.length === 0) {
                return [[], context];
              }

              var head = evaluate(expressions[0], context);
              var tail = evaluateListOfExpressions(expressions.slice(1), head[1]);
              return [[head[0]].concat(tail[0]), tail[1]];
            }

            function evaluateString(expression, context) {
              if (!isSymbol(expression)) {
                return [expression, context];
              }

              var value = getSymbolValue(expression, context);

              if (value === undefined) {
                throw "Undefined symbol " + expression;
              }

              return [value, context];
            }

            function evaluateArray(expression, context) {
              if (isSymbol(expression[0])) {
                var f = getSymbolValue(expression[0], context);

                if (expression.length > 1) {
                  if (typeof f !== "function") {
                    throw "Calling non-function " + expression[0];
                  }

                  var args = [Collections.extend({}, context)].concat(Collections.map(expression.slice(1), function (arg) {
                    return evaluate(arg, Collections.extend({}, context))[0];
                  }));
                  return f.apply(this, args);
                } else {
                  return [f, context];
                }
              } else {
                return evaluateListOfExpressions(expression, context);
              }
            }

            function evaluate(expression, context) {
              if (typeof expression === "string") {
                return evaluateString(expression, context);
              } else if (typeof expression === "object") {
                if (expression instanceof Array && expression.length > 0) {
                  return evaluateArray(expression, context);
                }
              }

              return [expression, context];
            }
            /***/

          },
          /* 42 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var factory_1 = __webpack_require__(43);

            var TransportManager = function () {
              function TransportManager(options) {
                this.options = options || {};
                this.livesLeft = this.options.lives || Infinity;
              }

              TransportManager.prototype.getAssistant = function (transport) {
                return factory_1["default"].createAssistantToTheTransportManager(this, transport, {
                  minPingDelay: this.options.minPingDelay,
                  maxPingDelay: this.options.maxPingDelay
                });
              };

              TransportManager.prototype.isAlive = function () {
                return this.livesLeft > 0;
              };

              TransportManager.prototype.reportDeath = function () {
                this.livesLeft -= 1;
              };

              return TransportManager;
            }();

            exports.__esModule = true;
            exports["default"] = TransportManager;
            /***/
          },
          /* 43 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var assistant_to_the_transport_manager_1 = __webpack_require__(44);

            var handshake_1 = __webpack_require__(45);

            var pusher_authorizer_1 = __webpack_require__(48);

            var timeline_sender_1 = __webpack_require__(49);

            var presence_channel_1 = __webpack_require__(50);

            var private_channel_1 = __webpack_require__(51);

            var encrypted_channel_1 = __webpack_require__(54);

            var channel_1 = __webpack_require__(52);

            var connection_manager_1 = __webpack_require__(62);

            var channels_1 = __webpack_require__(63);

            var Factory = {
              createChannels: function createChannels() {
                return new channels_1["default"]();
              },
              createConnectionManager: function createConnectionManager(key, options) {
                return new connection_manager_1["default"](key, options);
              },
              createChannel: function createChannel(name, pusher) {
                return new channel_1["default"](name, pusher);
              },
              createPrivateChannel: function createPrivateChannel(name, pusher) {
                return new private_channel_1["default"](name, pusher);
              },
              createPresenceChannel: function createPresenceChannel(name, pusher) {
                return new presence_channel_1["default"](name, pusher);
              },
              createEncryptedChannel: function createEncryptedChannel(name, pusher) {
                return new encrypted_channel_1["default"](name, pusher);
              },
              createTimelineSender: function createTimelineSender(timeline, options) {
                return new timeline_sender_1["default"](timeline, options);
              },
              createAuthorizer: function createAuthorizer(channel, options) {
                if (options.authorizer) {
                  return options.authorizer(channel, options);
                }

                return new pusher_authorizer_1["default"](channel, options);
              },
              createHandshake: function createHandshake(transport, callback) {
                return new handshake_1["default"](transport, callback);
              },
              createAssistantToTheTransportManager: function createAssistantToTheTransportManager(manager, transport, options) {
                return new assistant_to_the_transport_manager_1["default"](manager, transport, options);
              }
            };
            exports.__esModule = true;
            exports["default"] = Factory;
            /***/
          },
          /* 44 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var util_1 = __webpack_require__(11);

            var Collections = __webpack_require__(9);

            var AssistantToTheTransportManager = function () {
              function AssistantToTheTransportManager(manager, transport, options) {
                this.manager = manager;
                this.transport = transport;
                this.minPingDelay = options.minPingDelay;
                this.maxPingDelay = options.maxPingDelay;
                this.pingDelay = undefined;
              }

              AssistantToTheTransportManager.prototype.createConnection = function (name, priority, key, options) {
                var _this = this;

                options = Collections.extend({}, options, {
                  activityTimeout: this.pingDelay
                });
                var connection = this.transport.createConnection(name, priority, key, options);
                var openTimestamp = null;

                var onOpen = function onOpen() {
                  connection.unbind("open", onOpen);
                  connection.bind("closed", onClosed);
                  openTimestamp = util_1["default"].now();
                };

                var onClosed = function onClosed(closeEvent) {
                  connection.unbind("closed", onClosed);

                  if (closeEvent.code === 1002 || closeEvent.code === 1003) {
                    _this.manager.reportDeath();
                  } else if (!closeEvent.wasClean && openTimestamp) {
                    var lifespan = util_1["default"].now() - openTimestamp;

                    if (lifespan < 2 * _this.maxPingDelay) {
                      _this.manager.reportDeath();

                      _this.pingDelay = Math.max(lifespan / 2, _this.minPingDelay);
                    }
                  }
                };

                connection.bind("open", onOpen);
                return connection;
              };

              AssistantToTheTransportManager.prototype.isSupported = function (environment) {
                return this.manager.isAlive() && this.transport.isSupported(environment);
              };

              return AssistantToTheTransportManager;
            }();

            exports.__esModule = true;
            exports["default"] = AssistantToTheTransportManager;
            /***/
          },
          /* 45 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var Collections = __webpack_require__(9);

            var Protocol = __webpack_require__(46);

            var connection_1 = __webpack_require__(47);

            var Handshake = function () {
              function Handshake(transport, callback) {
                this.transport = transport;
                this.callback = callback;
                this.bindListeners();
              }

              Handshake.prototype.close = function () {
                this.unbindListeners();
                this.transport.close();
              };

              Handshake.prototype.bindListeners = function () {
                var _this = this;

                this.onMessage = function (m) {
                  _this.unbindListeners();

                  var result;

                  try {
                    result = Protocol.processHandshake(m);
                  } catch (e) {
                    _this.finish("error", {
                      error: e
                    });

                    _this.transport.close();

                    return;
                  }

                  if (result.action === "connected") {
                    _this.finish("connected", {
                      connection: new connection_1["default"](result.id, _this.transport),
                      activityTimeout: result.activityTimeout
                    });
                  } else {
                    _this.finish(result.action, {
                      error: result.error
                    });

                    _this.transport.close();
                  }
                };

                this.onClosed = function (closeEvent) {
                  _this.unbindListeners();

                  var action = Protocol.getCloseAction(closeEvent) || "backoff";
                  var error = Protocol.getCloseError(closeEvent);

                  _this.finish(action, {
                    error: error
                  });
                };

                this.transport.bind("message", this.onMessage);
                this.transport.bind("closed", this.onClosed);
              };

              Handshake.prototype.unbindListeners = function () {
                this.transport.unbind("message", this.onMessage);
                this.transport.unbind("closed", this.onClosed);
              };

              Handshake.prototype.finish = function (action, params) {
                this.callback(Collections.extend({
                  transport: this.transport,
                  action: action
                }, params));
              };

              return Handshake;
            }();

            exports.__esModule = true;
            exports["default"] = Handshake;
            /***/
          },
          /* 46 */

          /***/
          function (module, exports) {
            "use strict";

            exports.decodeMessage = function (messageEvent) {
              try {
                var messageData = JSON.parse(messageEvent.data);
                var pusherEventData = messageData.data;

                if (typeof pusherEventData === 'string') {
                  try {
                    pusherEventData = JSON.parse(messageData.data);
                  } catch (e) {}
                }

                var pusherEvent = {
                  event: messageData.event,
                  channel: messageData.channel,
                  data: pusherEventData
                };

                if (messageData.user_id) {
                  pusherEvent.user_id = messageData.user_id;
                }

                return pusherEvent;
              } catch (e) {
                throw {
                  type: 'MessageParseError',
                  error: e,
                  data: messageEvent.data
                };
              }
            };

            exports.encodeMessage = function (event) {
              return JSON.stringify(event);
            };

            exports.processHandshake = function (messageEvent) {
              var message = exports.decodeMessage(messageEvent);

              if (message.event === "pusher:connection_established") {
                if (!message.data.activity_timeout) {
                  throw "No activity timeout specified in handshake";
                }

                return {
                  action: "connected",
                  id: message.data.socket_id,
                  activityTimeout: message.data.activity_timeout * 1000
                };
              } else if (message.event === "pusher:error") {
                return {
                  action: this.getCloseAction(message.data),
                  error: this.getCloseError(message.data)
                };
              } else {
                throw "Invalid handshake";
              }
            };

            exports.getCloseAction = function (closeEvent) {
              if (closeEvent.code < 4000) {
                if (closeEvent.code >= 1002 && closeEvent.code <= 1004) {
                  return "backoff";
                } else {
                  return null;
                }
              } else if (closeEvent.code === 4000) {
                return "tls_only";
              } else if (closeEvent.code < 4100) {
                return "refused";
              } else if (closeEvent.code < 4200) {
                return "backoff";
              } else if (closeEvent.code < 4300) {
                return "retry";
              } else {
                return "refused";
              }
            };

            exports.getCloseError = function (closeEvent) {
              if (closeEvent.code !== 1000 && closeEvent.code !== 1001) {
                return {
                  type: 'PusherError',
                  data: {
                    code: closeEvent.code,
                    message: closeEvent.reason || closeEvent.message
                  }
                };
              } else {
                return null;
              }
            };
            /***/

          },
          /* 47 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var __extends = this && this.__extends || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };

            var Collections = __webpack_require__(9);

            var dispatcher_1 = __webpack_require__(24);

            var Protocol = __webpack_require__(46);

            var logger_1 = __webpack_require__(8);

            var Connection = function (_super) {
              __extends(Connection, _super);

              function Connection(id, transport) {
                _super.call(this);

                this.id = id;
                this.transport = transport;
                this.activityTimeout = transport.activityTimeout;
                this.bindListeners();
              }

              Connection.prototype.handlesActivityChecks = function () {
                return this.transport.handlesActivityChecks();
              };

              Connection.prototype.send = function (data) {
                return this.transport.send(data);
              };

              Connection.prototype.send_event = function (name, data, channel) {
                var event = {
                  event: name,
                  data: data
                };

                if (channel) {
                  event.channel = channel;
                }

                logger_1["default"].debug('Event sent', event);
                return this.send(Protocol.encodeMessage(event));
              };

              Connection.prototype.ping = function () {
                if (this.transport.supportsPing()) {
                  this.transport.ping();
                } else {
                  this.send_event('pusher:ping', {});
                }
              };

              Connection.prototype.close = function () {
                this.transport.close();
              };

              Connection.prototype.bindListeners = function () {
                var _this = this;

                var listeners = {
                  message: function message(messageEvent) {
                    var pusherEvent;

                    try {
                      pusherEvent = Protocol.decodeMessage(messageEvent);
                    } catch (e) {
                      _this.emit('error', {
                        type: 'MessageParseError',
                        error: e,
                        data: messageEvent.data
                      });
                    }

                    if (pusherEvent !== undefined) {
                      logger_1["default"].debug('Event recd', pusherEvent);

                      switch (pusherEvent.event) {
                        case 'pusher:error':
                          _this.emit('error', {
                            type: 'PusherError',
                            data: pusherEvent.data
                          });

                          break;

                        case 'pusher:ping':
                          _this.emit("ping");

                          break;

                        case 'pusher:pong':
                          _this.emit("pong");

                          break;
                      }

                      _this.emit('message', pusherEvent);
                    }
                  },
                  activity: function activity() {
                    _this.emit("activity");
                  },
                  error: function error(_error) {
                    _this.emit("error", {
                      type: "WebSocketError",
                      error: _error
                    });
                  },
                  closed: function closed(closeEvent) {
                    unbindListeners();

                    if (closeEvent && closeEvent.code) {
                      _this.handleCloseEvent(closeEvent);
                    }

                    _this.transport = null;

                    _this.emit("closed");
                  }
                };

                var unbindListeners = function unbindListeners() {
                  Collections.objectApply(listeners, function (listener, event) {
                    _this.transport.unbind(event, listener);
                  });
                };

                Collections.objectApply(listeners, function (listener, event) {
                  _this.transport.bind(event, listener);
                });
              };

              Connection.prototype.handleCloseEvent = function (closeEvent) {
                var action = Protocol.getCloseAction(closeEvent);
                var error = Protocol.getCloseError(closeEvent);

                if (error) {
                  this.emit('error', error);
                }

                if (action) {
                  this.emit(action, {
                    action: action,
                    error: error
                  });
                }
              };

              return Connection;
            }(dispatcher_1["default"]);

            exports.__esModule = true;
            exports["default"] = Connection;
            /***/
          },
          /* 48 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var runtime_1 = __webpack_require__(2);

            var PusherAuthorizer = function () {
              function PusherAuthorizer(channel, options) {
                this.channel = channel;
                var authTransport = options.authTransport;

                if (typeof runtime_1["default"].getAuthorizers()[authTransport] === "undefined") {
                  throw "'" + authTransport + "' is not a recognized auth transport";
                }

                this.type = authTransport;
                this.options = options;
                this.authOptions = (options || {}).auth || {};
              }

              PusherAuthorizer.prototype.composeQuery = function (socketId) {
                var query = 'socket_id=' + encodeURIComponent(socketId) + '&channel_name=' + encodeURIComponent(this.channel.name);

                for (var i in this.authOptions.params) {
                  query += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(this.authOptions.params[i]);
                }

                return query;
              };

              PusherAuthorizer.prototype.authorize = function (socketId, callback) {
                PusherAuthorizer.authorizers = PusherAuthorizer.authorizers || runtime_1["default"].getAuthorizers();
                return PusherAuthorizer.authorizers[this.type].call(this, runtime_1["default"], socketId, callback);
              };

              return PusherAuthorizer;
            }();

            exports.__esModule = true;
            exports["default"] = PusherAuthorizer;
            /***/
          },
          /* 49 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var runtime_1 = __webpack_require__(2);

            var TimelineSender = function () {
              function TimelineSender(timeline, options) {
                this.timeline = timeline;
                this.options = options || {};
              }

              TimelineSender.prototype.send = function (useTLS, callback) {
                if (this.timeline.isEmpty()) {
                  return;
                }

                this.timeline.send(runtime_1["default"].TimelineTransport.getAgent(this, useTLS), callback);
              };

              return TimelineSender;
            }();

            exports.__esModule = true;
            exports["default"] = TimelineSender;
            /***/
          },
          /* 50 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var __extends = this && this.__extends || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };

            var private_channel_1 = __webpack_require__(51);

            var logger_1 = __webpack_require__(8);

            var members_1 = __webpack_require__(53);

            var url_store_1 = __webpack_require__(14);

            var PresenceChannel = function (_super) {
              __extends(PresenceChannel, _super);

              function PresenceChannel(name, pusher) {
                _super.call(this, name, pusher);

                this.members = new members_1["default"]();
              }

              PresenceChannel.prototype.authorize = function (socketId, callback) {
                var _this = this;

                _super.prototype.authorize.call(this, socketId, function (error, authData) {
                  if (!error) {
                    if (authData.channel_data === undefined) {
                      var suffix = url_store_1["default"].buildLogSuffix("authenticationEndpoint");
                      logger_1["default"].warn("Invalid auth response for channel '" + _this.name + "'," + ("expected 'channel_data' field. " + suffix));
                      callback("Invalid auth response");
                      return;
                    }

                    var channelData = JSON.parse(authData.channel_data);

                    _this.members.setMyID(channelData.user_id);
                  }

                  callback(error, authData);
                });
              };

              PresenceChannel.prototype.handleEvent = function (event) {
                var eventName = event.event;

                if (eventName.indexOf("pusher_internal:") === 0) {
                  this.handleInternalEvent(event);
                } else {
                  var data = event.data;
                  var metadata = {};

                  if (event.user_id) {
                    metadata.user_id = event.user_id;
                  }

                  this.emit(eventName, data, metadata);
                }
              };

              PresenceChannel.prototype.handleInternalEvent = function (event) {
                var eventName = event.event;
                var data = event.data;

                switch (eventName) {
                  case "pusher_internal:subscription_succeeded":
                    this.handleSubscriptionSucceededEvent(event);
                    break;

                  case "pusher_internal:member_added":
                    var addedMember = this.members.addMember(data);
                    this.emit('pusher:member_added', addedMember);
                    break;

                  case "pusher_internal:member_removed":
                    var removedMember = this.members.removeMember(data);

                    if (removedMember) {
                      this.emit('pusher:member_removed', removedMember);
                    }

                    break;
                }
              };

              PresenceChannel.prototype.handleSubscriptionSucceededEvent = function (event) {
                this.subscriptionPending = false;
                this.subscribed = true;

                if (this.subscriptionCancelled) {
                  this.pusher.unsubscribe(this.name);
                } else {
                  this.members.onSubscription(event.data);
                  this.emit("pusher:subscription_succeeded", this.members);
                }
              };

              PresenceChannel.prototype.disconnect = function () {
                this.members.reset();

                _super.prototype.disconnect.call(this);
              };

              return PresenceChannel;
            }(private_channel_1["default"]);

            exports.__esModule = true;
            exports["default"] = PresenceChannel;
            /***/
          },
          /* 51 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var __extends = this && this.__extends || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };

            var factory_1 = __webpack_require__(43);

            var channel_1 = __webpack_require__(52);

            var PrivateChannel = function (_super) {
              __extends(PrivateChannel, _super);

              function PrivateChannel() {
                _super.apply(this, arguments);
              }

              PrivateChannel.prototype.authorize = function (socketId, callback) {
                var authorizer = factory_1["default"].createAuthorizer(this, this.pusher.config);
                return authorizer.authorize(socketId, callback);
              };

              return PrivateChannel;
            }(channel_1["default"]);

            exports.__esModule = true;
            exports["default"] = PrivateChannel;
            /***/
          },
          /* 52 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var __extends = this && this.__extends || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };

            var dispatcher_1 = __webpack_require__(24);

            var Errors = __webpack_require__(31);

            var logger_1 = __webpack_require__(8);

            var url_store_1 = __webpack_require__(14);

            var Channel = function (_super) {
              __extends(Channel, _super);

              function Channel(name, pusher) {
                _super.call(this, function (event, data) {
                  logger_1["default"].debug('No callbacks on ' + name + ' for ' + event);
                });

                this.name = name;
                this.pusher = pusher;
                this.subscribed = false;
                this.subscriptionPending = false;
                this.subscriptionCancelled = false;
              }

              Channel.prototype.authorize = function (socketId, callback) {
                return callback(false, {});
              };

              Channel.prototype.trigger = function (event, data) {
                if (event.indexOf("client-") !== 0) {
                  throw new Errors.BadEventName("Event '" + event + "' does not start with 'client-'");
                }

                if (!this.subscribed) {
                  var suffix = url_store_1["default"].buildLogSuffix("triggeringClientEvents");
                  logger_1["default"].warn("Client event triggered before channel 'subscription_succeeded' event . " + suffix);
                }

                return this.pusher.send_event(event, data, this.name);
              };

              Channel.prototype.disconnect = function () {
                this.subscribed = false;
                this.subscriptionPending = false;
              };

              Channel.prototype.handleEvent = function (event) {
                var eventName = event.event;
                var data = event.data;

                if (eventName === "pusher_internal:subscription_succeeded") {
                  this.handleSubscriptionSucceededEvent(event);
                } else if (eventName.indexOf("pusher_internal:") !== 0) {
                  var metadata = {};
                  this.emit(eventName, data, metadata);
                }
              };

              Channel.prototype.handleSubscriptionSucceededEvent = function (event) {
                this.subscriptionPending = false;
                this.subscribed = true;

                if (this.subscriptionCancelled) {
                  this.pusher.unsubscribe(this.name);
                } else {
                  this.emit("pusher:subscription_succeeded", event.data);
                }
              };

              Channel.prototype.subscribe = function () {
                var _this = this;

                if (this.subscribed) {
                  return;
                }

                this.subscriptionPending = true;
                this.subscriptionCancelled = false;
                this.authorize(this.pusher.connection.socket_id, function (error, data) {
                  if (error) {
                    _this.emit('pusher:subscription_error', data);
                  } else {
                    _this.pusher.send_event('pusher:subscribe', {
                      auth: data.auth,
                      channel_data: data.channel_data,
                      channel: _this.name
                    });
                  }
                });
              };

              Channel.prototype.unsubscribe = function () {
                this.subscribed = false;
                this.pusher.send_event('pusher:unsubscribe', {
                  channel: this.name
                });
              };

              Channel.prototype.cancelSubscription = function () {
                this.subscriptionCancelled = true;
              };

              Channel.prototype.reinstateSubscription = function () {
                this.subscriptionCancelled = false;
              };

              return Channel;
            }(dispatcher_1["default"]);

            exports.__esModule = true;
            exports["default"] = Channel;
            /***/
          },
          /* 53 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var Collections = __webpack_require__(9);

            var Members = function () {
              function Members() {
                this.reset();
              }

              Members.prototype.get = function (id) {
                if (Object.prototype.hasOwnProperty.call(this.members, id)) {
                  return {
                    id: id,
                    info: this.members[id]
                  };
                } else {
                  return null;
                }
              };

              Members.prototype.each = function (callback) {
                var _this = this;

                Collections.objectApply(this.members, function (member, id) {
                  callback(_this.get(id));
                });
              };

              Members.prototype.setMyID = function (id) {
                this.myID = id;
              };

              Members.prototype.onSubscription = function (subscriptionData) {
                this.members = subscriptionData.presence.hash;
                this.count = subscriptionData.presence.count;
                this.me = this.get(this.myID);
              };

              Members.prototype.addMember = function (memberData) {
                if (this.get(memberData.user_id) === null) {
                  this.count++;
                }

                this.members[memberData.user_id] = memberData.user_info;
                return this.get(memberData.user_id);
              };

              Members.prototype.removeMember = function (memberData) {
                var member = this.get(memberData.user_id);

                if (member) {
                  delete this.members[memberData.user_id];
                  this.count--;
                }

                return member;
              };

              Members.prototype.reset = function () {
                this.members = {};
                this.count = 0;
                this.myID = null;
                this.me = null;
              };

              return Members;
            }();

            exports.__esModule = true;
            exports["default"] = Members;
            /***/
          },
          /* 54 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var __extends = this && this.__extends || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };

            var private_channel_1 = __webpack_require__(51);

            var Errors = __webpack_require__(31);

            var logger_1 = __webpack_require__(8);

            var tweetnacl_1 = __webpack_require__(55);

            var tweetnacl_util_1 = __webpack_require__(57);

            var EncryptedChannel = function (_super) {
              __extends(EncryptedChannel, _super);

              function EncryptedChannel() {
                _super.apply(this, arguments);

                this.key = null;
              }

              EncryptedChannel.prototype.authorize = function (socketId, callback) {
                var _this = this;

                _super.prototype.authorize.call(this, socketId, function (error, authData) {
                  if (error) {
                    callback(true, authData);
                    return;
                  }

                  var sharedSecret = authData["shared_secret"];

                  if (!sharedSecret) {
                    var errorMsg = "No shared_secret key in auth payload for encrypted channel: " + _this.name;
                    callback(true, errorMsg);
                    logger_1["default"].warn("Error: " + errorMsg);
                    return;
                  }

                  _this.key = tweetnacl_util_1.decodeBase64(sharedSecret);
                  delete authData["shared_secret"];
                  callback(false, authData);
                });
              };

              EncryptedChannel.prototype.trigger = function (event, data) {
                throw new Errors.UnsupportedFeature('Client events are not currently supported for encrypted channels');
              };

              EncryptedChannel.prototype.handleEvent = function (event) {
                var eventName = event.event;
                var data = event.data;

                if (eventName.indexOf("pusher_internal:") === 0 || eventName.indexOf("pusher:") === 0) {
                  _super.prototype.handleEvent.call(this, event);

                  return;
                }

                this.handleEncryptedEvent(eventName, data);
              };

              EncryptedChannel.prototype.handleEncryptedEvent = function (event, data) {
                var _this = this;

                if (!this.key) {
                  logger_1["default"].debug('Received encrypted event before key has been retrieved from the authEndpoint');
                  return;
                }

                if (!data.ciphertext || !data.nonce) {
                  logger_1["default"].warn('Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: ' + data);
                  return;
                }

                var cipherText = tweetnacl_util_1.decodeBase64(data.ciphertext);

                if (cipherText.length < tweetnacl_1.secretbox.overheadLength) {
                  logger_1["default"].warn("Expected encrypted event ciphertext length to be " + tweetnacl_1.secretbox.overheadLength + ", got: " + cipherText.length);
                  return;
                }

                var nonce = tweetnacl_util_1.decodeBase64(data.nonce);

                if (nonce.length < tweetnacl_1.secretbox.nonceLength) {
                  logger_1["default"].warn("Expected encrypted event nonce length to be " + tweetnacl_1.secretbox.nonceLength + ", got: " + nonce.length);
                  return;
                }

                var bytes = tweetnacl_1.secretbox.open(cipherText, nonce, this.key);

                if (bytes === null) {
                  logger_1["default"].debug('Failed to decrypted an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint...');
                  this.authorize(this.pusher.connection.socket_id, function (error, authData) {
                    if (error) {
                      logger_1["default"].warn("Failed to make a request to the authEndpoint: " + authData + ". Unable to fetch new key, so dropping encrypted event");
                      return;
                    }

                    bytes = tweetnacl_1.secretbox.open(cipherText, nonce, _this.key);

                    if (bytes === null) {
                      logger_1["default"].warn("Failed to decrypt event with new key. Dropping encrypted event");
                      return;
                    }

                    _this.emitJSON(event, tweetnacl_util_1.encodeUTF8(bytes));

                    return;
                  });
                  return;
                }

                this.emitJSON(event, tweetnacl_util_1.encodeUTF8(bytes));
              };

              EncryptedChannel.prototype.emitJSON = function (eventName, data) {
                try {
                  this.emit(eventName, JSON.parse(data));
                } catch (e) {
                  this.emit(eventName, data);
                }

                return this;
              };

              return EncryptedChannel;
            }(private_channel_1["default"]);

            exports.__esModule = true;
            exports["default"] = EncryptedChannel;
            /***/
          },
          /* 55 */

          /***/
          function (module, exports, __webpack_require__) {
            (function (nacl) {
              'use strict'; // Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
              // Public domain.
              //
              // Implementation derived from TweetNaCl version 20140427.
              // See for details: http://tweetnacl.cr.yp.to/

              var gf = function gf(init) {
                var i,
                    r = new Float64Array(16);
                if (init) for (i = 0; i < init.length; i++) {
                  r[i] = init[i];
                }
                return r;
              }; //  Pluggable, initialized in high-level API below.


              var randombytes = function randombytes()
              /* x, n */
              {
                throw new Error('no PRNG');
              };

              var _0 = new Uint8Array(16);

              var _9 = new Uint8Array(32);

              _9[0] = 9;

              var gf0 = gf(),
                  gf1 = gf([1]),
                  _121665 = gf([0xdb41, 1]),
                  D = gf([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]),
                  D2 = gf([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]),
                  X = gf([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]),
                  Y = gf([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]),
                  I = gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);

              function ts64(x, i, h, l) {
                x[i] = h >> 24 & 0xff;
                x[i + 1] = h >> 16 & 0xff;
                x[i + 2] = h >> 8 & 0xff;
                x[i + 3] = h & 0xff;
                x[i + 4] = l >> 24 & 0xff;
                x[i + 5] = l >> 16 & 0xff;
                x[i + 6] = l >> 8 & 0xff;
                x[i + 7] = l & 0xff;
              }

              function vn(x, xi, y, yi, n) {
                var i,
                    d = 0;

                for (i = 0; i < n; i++) {
                  d |= x[xi + i] ^ y[yi + i];
                }

                return (1 & d - 1 >>> 8) - 1;
              }

              function crypto_verify_16(x, xi, y, yi) {
                return vn(x, xi, y, yi, 16);
              }

              function crypto_verify_32(x, xi, y, yi) {
                return vn(x, xi, y, yi, 32);
              }

              function core_salsa20(o, p, k, c) {
                var j0 = c[0] & 0xff | (c[1] & 0xff) << 8 | (c[2] & 0xff) << 16 | (c[3] & 0xff) << 24,
                    j1 = k[0] & 0xff | (k[1] & 0xff) << 8 | (k[2] & 0xff) << 16 | (k[3] & 0xff) << 24,
                    j2 = k[4] & 0xff | (k[5] & 0xff) << 8 | (k[6] & 0xff) << 16 | (k[7] & 0xff) << 24,
                    j3 = k[8] & 0xff | (k[9] & 0xff) << 8 | (k[10] & 0xff) << 16 | (k[11] & 0xff) << 24,
                    j4 = k[12] & 0xff | (k[13] & 0xff) << 8 | (k[14] & 0xff) << 16 | (k[15] & 0xff) << 24,
                    j5 = c[4] & 0xff | (c[5] & 0xff) << 8 | (c[6] & 0xff) << 16 | (c[7] & 0xff) << 24,
                    j6 = p[0] & 0xff | (p[1] & 0xff) << 8 | (p[2] & 0xff) << 16 | (p[3] & 0xff) << 24,
                    j7 = p[4] & 0xff | (p[5] & 0xff) << 8 | (p[6] & 0xff) << 16 | (p[7] & 0xff) << 24,
                    j8 = p[8] & 0xff | (p[9] & 0xff) << 8 | (p[10] & 0xff) << 16 | (p[11] & 0xff) << 24,
                    j9 = p[12] & 0xff | (p[13] & 0xff) << 8 | (p[14] & 0xff) << 16 | (p[15] & 0xff) << 24,
                    j10 = c[8] & 0xff | (c[9] & 0xff) << 8 | (c[10] & 0xff) << 16 | (c[11] & 0xff) << 24,
                    j11 = k[16] & 0xff | (k[17] & 0xff) << 8 | (k[18] & 0xff) << 16 | (k[19] & 0xff) << 24,
                    j12 = k[20] & 0xff | (k[21] & 0xff) << 8 | (k[22] & 0xff) << 16 | (k[23] & 0xff) << 24,
                    j13 = k[24] & 0xff | (k[25] & 0xff) << 8 | (k[26] & 0xff) << 16 | (k[27] & 0xff) << 24,
                    j14 = k[28] & 0xff | (k[29] & 0xff) << 8 | (k[30] & 0xff) << 16 | (k[31] & 0xff) << 24,
                    j15 = c[12] & 0xff | (c[13] & 0xff) << 8 | (c[14] & 0xff) << 16 | (c[15] & 0xff) << 24;
                var x0 = j0,
                    x1 = j1,
                    x2 = j2,
                    x3 = j3,
                    x4 = j4,
                    x5 = j5,
                    x6 = j6,
                    x7 = j7,
                    x8 = j8,
                    x9 = j9,
                    x10 = j10,
                    x11 = j11,
                    x12 = j12,
                    x13 = j13,
                    x14 = j14,
                    x15 = j15,
                    u;

                for (var i = 0; i < 20; i += 2) {
                  u = x0 + x12 | 0;
                  x4 ^= u << 7 | u >>> 32 - 7;
                  u = x4 + x0 | 0;
                  x8 ^= u << 9 | u >>> 32 - 9;
                  u = x8 + x4 | 0;
                  x12 ^= u << 13 | u >>> 32 - 13;
                  u = x12 + x8 | 0;
                  x0 ^= u << 18 | u >>> 32 - 18;
                  u = x5 + x1 | 0;
                  x9 ^= u << 7 | u >>> 32 - 7;
                  u = x9 + x5 | 0;
                  x13 ^= u << 9 | u >>> 32 - 9;
                  u = x13 + x9 | 0;
                  x1 ^= u << 13 | u >>> 32 - 13;
                  u = x1 + x13 | 0;
                  x5 ^= u << 18 | u >>> 32 - 18;
                  u = x10 + x6 | 0;
                  x14 ^= u << 7 | u >>> 32 - 7;
                  u = x14 + x10 | 0;
                  x2 ^= u << 9 | u >>> 32 - 9;
                  u = x2 + x14 | 0;
                  x6 ^= u << 13 | u >>> 32 - 13;
                  u = x6 + x2 | 0;
                  x10 ^= u << 18 | u >>> 32 - 18;
                  u = x15 + x11 | 0;
                  x3 ^= u << 7 | u >>> 32 - 7;
                  u = x3 + x15 | 0;
                  x7 ^= u << 9 | u >>> 32 - 9;
                  u = x7 + x3 | 0;
                  x11 ^= u << 13 | u >>> 32 - 13;
                  u = x11 + x7 | 0;
                  x15 ^= u << 18 | u >>> 32 - 18;
                  u = x0 + x3 | 0;
                  x1 ^= u << 7 | u >>> 32 - 7;
                  u = x1 + x0 | 0;
                  x2 ^= u << 9 | u >>> 32 - 9;
                  u = x2 + x1 | 0;
                  x3 ^= u << 13 | u >>> 32 - 13;
                  u = x3 + x2 | 0;
                  x0 ^= u << 18 | u >>> 32 - 18;
                  u = x5 + x4 | 0;
                  x6 ^= u << 7 | u >>> 32 - 7;
                  u = x6 + x5 | 0;
                  x7 ^= u << 9 | u >>> 32 - 9;
                  u = x7 + x6 | 0;
                  x4 ^= u << 13 | u >>> 32 - 13;
                  u = x4 + x7 | 0;
                  x5 ^= u << 18 | u >>> 32 - 18;
                  u = x10 + x9 | 0;
                  x11 ^= u << 7 | u >>> 32 - 7;
                  u = x11 + x10 | 0;
                  x8 ^= u << 9 | u >>> 32 - 9;
                  u = x8 + x11 | 0;
                  x9 ^= u << 13 | u >>> 32 - 13;
                  u = x9 + x8 | 0;
                  x10 ^= u << 18 | u >>> 32 - 18;
                  u = x15 + x14 | 0;
                  x12 ^= u << 7 | u >>> 32 - 7;
                  u = x12 + x15 | 0;
                  x13 ^= u << 9 | u >>> 32 - 9;
                  u = x13 + x12 | 0;
                  x14 ^= u << 13 | u >>> 32 - 13;
                  u = x14 + x13 | 0;
                  x15 ^= u << 18 | u >>> 32 - 18;
                }

                x0 = x0 + j0 | 0;
                x1 = x1 + j1 | 0;
                x2 = x2 + j2 | 0;
                x3 = x3 + j3 | 0;
                x4 = x4 + j4 | 0;
                x5 = x5 + j5 | 0;
                x6 = x6 + j6 | 0;
                x7 = x7 + j7 | 0;
                x8 = x8 + j8 | 0;
                x9 = x9 + j9 | 0;
                x10 = x10 + j10 | 0;
                x11 = x11 + j11 | 0;
                x12 = x12 + j12 | 0;
                x13 = x13 + j13 | 0;
                x14 = x14 + j14 | 0;
                x15 = x15 + j15 | 0;
                o[0] = x0 >>> 0 & 0xff;
                o[1] = x0 >>> 8 & 0xff;
                o[2] = x0 >>> 16 & 0xff;
                o[3] = x0 >>> 24 & 0xff;
                o[4] = x1 >>> 0 & 0xff;
                o[5] = x1 >>> 8 & 0xff;
                o[6] = x1 >>> 16 & 0xff;
                o[7] = x1 >>> 24 & 0xff;
                o[8] = x2 >>> 0 & 0xff;
                o[9] = x2 >>> 8 & 0xff;
                o[10] = x2 >>> 16 & 0xff;
                o[11] = x2 >>> 24 & 0xff;
                o[12] = x3 >>> 0 & 0xff;
                o[13] = x3 >>> 8 & 0xff;
                o[14] = x3 >>> 16 & 0xff;
                o[15] = x3 >>> 24 & 0xff;
                o[16] = x4 >>> 0 & 0xff;
                o[17] = x4 >>> 8 & 0xff;
                o[18] = x4 >>> 16 & 0xff;
                o[19] = x4 >>> 24 & 0xff;
                o[20] = x5 >>> 0 & 0xff;
                o[21] = x5 >>> 8 & 0xff;
                o[22] = x5 >>> 16 & 0xff;
                o[23] = x5 >>> 24 & 0xff;
                o[24] = x6 >>> 0 & 0xff;
                o[25] = x6 >>> 8 & 0xff;
                o[26] = x6 >>> 16 & 0xff;
                o[27] = x6 >>> 24 & 0xff;
                o[28] = x7 >>> 0 & 0xff;
                o[29] = x7 >>> 8 & 0xff;
                o[30] = x7 >>> 16 & 0xff;
                o[31] = x7 >>> 24 & 0xff;
                o[32] = x8 >>> 0 & 0xff;
                o[33] = x8 >>> 8 & 0xff;
                o[34] = x8 >>> 16 & 0xff;
                o[35] = x8 >>> 24 & 0xff;
                o[36] = x9 >>> 0 & 0xff;
                o[37] = x9 >>> 8 & 0xff;
                o[38] = x9 >>> 16 & 0xff;
                o[39] = x9 >>> 24 & 0xff;
                o[40] = x10 >>> 0 & 0xff;
                o[41] = x10 >>> 8 & 0xff;
                o[42] = x10 >>> 16 & 0xff;
                o[43] = x10 >>> 24 & 0xff;
                o[44] = x11 >>> 0 & 0xff;
                o[45] = x11 >>> 8 & 0xff;
                o[46] = x11 >>> 16 & 0xff;
                o[47] = x11 >>> 24 & 0xff;
                o[48] = x12 >>> 0 & 0xff;
                o[49] = x12 >>> 8 & 0xff;
                o[50] = x12 >>> 16 & 0xff;
                o[51] = x12 >>> 24 & 0xff;
                o[52] = x13 >>> 0 & 0xff;
                o[53] = x13 >>> 8 & 0xff;
                o[54] = x13 >>> 16 & 0xff;
                o[55] = x13 >>> 24 & 0xff;
                o[56] = x14 >>> 0 & 0xff;
                o[57] = x14 >>> 8 & 0xff;
                o[58] = x14 >>> 16 & 0xff;
                o[59] = x14 >>> 24 & 0xff;
                o[60] = x15 >>> 0 & 0xff;
                o[61] = x15 >>> 8 & 0xff;
                o[62] = x15 >>> 16 & 0xff;
                o[63] = x15 >>> 24 & 0xff;
              }

              function core_hsalsa20(o, p, k, c) {
                var j0 = c[0] & 0xff | (c[1] & 0xff) << 8 | (c[2] & 0xff) << 16 | (c[3] & 0xff) << 24,
                    j1 = k[0] & 0xff | (k[1] & 0xff) << 8 | (k[2] & 0xff) << 16 | (k[3] & 0xff) << 24,
                    j2 = k[4] & 0xff | (k[5] & 0xff) << 8 | (k[6] & 0xff) << 16 | (k[7] & 0xff) << 24,
                    j3 = k[8] & 0xff | (k[9] & 0xff) << 8 | (k[10] & 0xff) << 16 | (k[11] & 0xff) << 24,
                    j4 = k[12] & 0xff | (k[13] & 0xff) << 8 | (k[14] & 0xff) << 16 | (k[15] & 0xff) << 24,
                    j5 = c[4] & 0xff | (c[5] & 0xff) << 8 | (c[6] & 0xff) << 16 | (c[7] & 0xff) << 24,
                    j6 = p[0] & 0xff | (p[1] & 0xff) << 8 | (p[2] & 0xff) << 16 | (p[3] & 0xff) << 24,
                    j7 = p[4] & 0xff | (p[5] & 0xff) << 8 | (p[6] & 0xff) << 16 | (p[7] & 0xff) << 24,
                    j8 = p[8] & 0xff | (p[9] & 0xff) << 8 | (p[10] & 0xff) << 16 | (p[11] & 0xff) << 24,
                    j9 = p[12] & 0xff | (p[13] & 0xff) << 8 | (p[14] & 0xff) << 16 | (p[15] & 0xff) << 24,
                    j10 = c[8] & 0xff | (c[9] & 0xff) << 8 | (c[10] & 0xff) << 16 | (c[11] & 0xff) << 24,
                    j11 = k[16] & 0xff | (k[17] & 0xff) << 8 | (k[18] & 0xff) << 16 | (k[19] & 0xff) << 24,
                    j12 = k[20] & 0xff | (k[21] & 0xff) << 8 | (k[22] & 0xff) << 16 | (k[23] & 0xff) << 24,
                    j13 = k[24] & 0xff | (k[25] & 0xff) << 8 | (k[26] & 0xff) << 16 | (k[27] & 0xff) << 24,
                    j14 = k[28] & 0xff | (k[29] & 0xff) << 8 | (k[30] & 0xff) << 16 | (k[31] & 0xff) << 24,
                    j15 = c[12] & 0xff | (c[13] & 0xff) << 8 | (c[14] & 0xff) << 16 | (c[15] & 0xff) << 24;
                var x0 = j0,
                    x1 = j1,
                    x2 = j2,
                    x3 = j3,
                    x4 = j4,
                    x5 = j5,
                    x6 = j6,
                    x7 = j7,
                    x8 = j8,
                    x9 = j9,
                    x10 = j10,
                    x11 = j11,
                    x12 = j12,
                    x13 = j13,
                    x14 = j14,
                    x15 = j15,
                    u;

                for (var i = 0; i < 20; i += 2) {
                  u = x0 + x12 | 0;
                  x4 ^= u << 7 | u >>> 32 - 7;
                  u = x4 + x0 | 0;
                  x8 ^= u << 9 | u >>> 32 - 9;
                  u = x8 + x4 | 0;
                  x12 ^= u << 13 | u >>> 32 - 13;
                  u = x12 + x8 | 0;
                  x0 ^= u << 18 | u >>> 32 - 18;
                  u = x5 + x1 | 0;
                  x9 ^= u << 7 | u >>> 32 - 7;
                  u = x9 + x5 | 0;
                  x13 ^= u << 9 | u >>> 32 - 9;
                  u = x13 + x9 | 0;
                  x1 ^= u << 13 | u >>> 32 - 13;
                  u = x1 + x13 | 0;
                  x5 ^= u << 18 | u >>> 32 - 18;
                  u = x10 + x6 | 0;
                  x14 ^= u << 7 | u >>> 32 - 7;
                  u = x14 + x10 | 0;
                  x2 ^= u << 9 | u >>> 32 - 9;
                  u = x2 + x14 | 0;
                  x6 ^= u << 13 | u >>> 32 - 13;
                  u = x6 + x2 | 0;
                  x10 ^= u << 18 | u >>> 32 - 18;
                  u = x15 + x11 | 0;
                  x3 ^= u << 7 | u >>> 32 - 7;
                  u = x3 + x15 | 0;
                  x7 ^= u << 9 | u >>> 32 - 9;
                  u = x7 + x3 | 0;
                  x11 ^= u << 13 | u >>> 32 - 13;
                  u = x11 + x7 | 0;
                  x15 ^= u << 18 | u >>> 32 - 18;
                  u = x0 + x3 | 0;
                  x1 ^= u << 7 | u >>> 32 - 7;
                  u = x1 + x0 | 0;
                  x2 ^= u << 9 | u >>> 32 - 9;
                  u = x2 + x1 | 0;
                  x3 ^= u << 13 | u >>> 32 - 13;
                  u = x3 + x2 | 0;
                  x0 ^= u << 18 | u >>> 32 - 18;
                  u = x5 + x4 | 0;
                  x6 ^= u << 7 | u >>> 32 - 7;
                  u = x6 + x5 | 0;
                  x7 ^= u << 9 | u >>> 32 - 9;
                  u = x7 + x6 | 0;
                  x4 ^= u << 13 | u >>> 32 - 13;
                  u = x4 + x7 | 0;
                  x5 ^= u << 18 | u >>> 32 - 18;
                  u = x10 + x9 | 0;
                  x11 ^= u << 7 | u >>> 32 - 7;
                  u = x11 + x10 | 0;
                  x8 ^= u << 9 | u >>> 32 - 9;
                  u = x8 + x11 | 0;
                  x9 ^= u << 13 | u >>> 32 - 13;
                  u = x9 + x8 | 0;
                  x10 ^= u << 18 | u >>> 32 - 18;
                  u = x15 + x14 | 0;
                  x12 ^= u << 7 | u >>> 32 - 7;
                  u = x12 + x15 | 0;
                  x13 ^= u << 9 | u >>> 32 - 9;
                  u = x13 + x12 | 0;
                  x14 ^= u << 13 | u >>> 32 - 13;
                  u = x14 + x13 | 0;
                  x15 ^= u << 18 | u >>> 32 - 18;
                }

                o[0] = x0 >>> 0 & 0xff;
                o[1] = x0 >>> 8 & 0xff;
                o[2] = x0 >>> 16 & 0xff;
                o[3] = x0 >>> 24 & 0xff;
                o[4] = x5 >>> 0 & 0xff;
                o[5] = x5 >>> 8 & 0xff;
                o[6] = x5 >>> 16 & 0xff;
                o[7] = x5 >>> 24 & 0xff;
                o[8] = x10 >>> 0 & 0xff;
                o[9] = x10 >>> 8 & 0xff;
                o[10] = x10 >>> 16 & 0xff;
                o[11] = x10 >>> 24 & 0xff;
                o[12] = x15 >>> 0 & 0xff;
                o[13] = x15 >>> 8 & 0xff;
                o[14] = x15 >>> 16 & 0xff;
                o[15] = x15 >>> 24 & 0xff;
                o[16] = x6 >>> 0 & 0xff;
                o[17] = x6 >>> 8 & 0xff;
                o[18] = x6 >>> 16 & 0xff;
                o[19] = x6 >>> 24 & 0xff;
                o[20] = x7 >>> 0 & 0xff;
                o[21] = x7 >>> 8 & 0xff;
                o[22] = x7 >>> 16 & 0xff;
                o[23] = x7 >>> 24 & 0xff;
                o[24] = x8 >>> 0 & 0xff;
                o[25] = x8 >>> 8 & 0xff;
                o[26] = x8 >>> 16 & 0xff;
                o[27] = x8 >>> 24 & 0xff;
                o[28] = x9 >>> 0 & 0xff;
                o[29] = x9 >>> 8 & 0xff;
                o[30] = x9 >>> 16 & 0xff;
                o[31] = x9 >>> 24 & 0xff;
              }

              function crypto_core_salsa20(out, inp, k, c) {
                core_salsa20(out, inp, k, c);
              }

              function crypto_core_hsalsa20(out, inp, k, c) {
                core_hsalsa20(out, inp, k, c);
              }

              var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]); // "expand 32-byte k"

              function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
                var z = new Uint8Array(16),
                    x = new Uint8Array(64);
                var u, i;

                for (i = 0; i < 16; i++) {
                  z[i] = 0;
                }

                for (i = 0; i < 8; i++) {
                  z[i] = n[i];
                }

                while (b >= 64) {
                  crypto_core_salsa20(x, z, k, sigma);

                  for (i = 0; i < 64; i++) {
                    c[cpos + i] = m[mpos + i] ^ x[i];
                  }

                  u = 1;

                  for (i = 8; i < 16; i++) {
                    u = u + (z[i] & 0xff) | 0;
                    z[i] = u & 0xff;
                    u >>>= 8;
                  }

                  b -= 64;
                  cpos += 64;
                  mpos += 64;
                }

                if (b > 0) {
                  crypto_core_salsa20(x, z, k, sigma);

                  for (i = 0; i < b; i++) {
                    c[cpos + i] = m[mpos + i] ^ x[i];
                  }
                }

                return 0;
              }

              function crypto_stream_salsa20(c, cpos, b, n, k) {
                var z = new Uint8Array(16),
                    x = new Uint8Array(64);
                var u, i;

                for (i = 0; i < 16; i++) {
                  z[i] = 0;
                }

                for (i = 0; i < 8; i++) {
                  z[i] = n[i];
                }

                while (b >= 64) {
                  crypto_core_salsa20(x, z, k, sigma);

                  for (i = 0; i < 64; i++) {
                    c[cpos + i] = x[i];
                  }

                  u = 1;

                  for (i = 8; i < 16; i++) {
                    u = u + (z[i] & 0xff) | 0;
                    z[i] = u & 0xff;
                    u >>>= 8;
                  }

                  b -= 64;
                  cpos += 64;
                }

                if (b > 0) {
                  crypto_core_salsa20(x, z, k, sigma);

                  for (i = 0; i < b; i++) {
                    c[cpos + i] = x[i];
                  }
                }

                return 0;
              }

              function crypto_stream(c, cpos, d, n, k) {
                var s = new Uint8Array(32);
                crypto_core_hsalsa20(s, n, k, sigma);
                var sn = new Uint8Array(8);

                for (var i = 0; i < 8; i++) {
                  sn[i] = n[i + 16];
                }

                return crypto_stream_salsa20(c, cpos, d, sn, s);
              }

              function crypto_stream_xor(c, cpos, m, mpos, d, n, k) {
                var s = new Uint8Array(32);
                crypto_core_hsalsa20(s, n, k, sigma);
                var sn = new Uint8Array(8);

                for (var i = 0; i < 8; i++) {
                  sn[i] = n[i + 16];
                }

                return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, sn, s);
              }
              /*
              * Port of Andrew Moon's Poly1305-donna-16. Public domain.
              * https://github.com/floodyberry/poly1305-donna
              */


              var poly1305 = function poly1305(key) {
                this.buffer = new Uint8Array(16);
                this.r = new Uint16Array(10);
                this.h = new Uint16Array(10);
                this.pad = new Uint16Array(8);
                this.leftover = 0;
                this.fin = 0;
                var t0, t1, t2, t3, t4, t5, t6, t7;
                t0 = key[0] & 0xff | (key[1] & 0xff) << 8;
                this.r[0] = t0 & 0x1fff;
                t1 = key[2] & 0xff | (key[3] & 0xff) << 8;
                this.r[1] = (t0 >>> 13 | t1 << 3) & 0x1fff;
                t2 = key[4] & 0xff | (key[5] & 0xff) << 8;
                this.r[2] = (t1 >>> 10 | t2 << 6) & 0x1f03;
                t3 = key[6] & 0xff | (key[7] & 0xff) << 8;
                this.r[3] = (t2 >>> 7 | t3 << 9) & 0x1fff;
                t4 = key[8] & 0xff | (key[9] & 0xff) << 8;
                this.r[4] = (t3 >>> 4 | t4 << 12) & 0x00ff;
                this.r[5] = t4 >>> 1 & 0x1ffe;
                t5 = key[10] & 0xff | (key[11] & 0xff) << 8;
                this.r[6] = (t4 >>> 14 | t5 << 2) & 0x1fff;
                t6 = key[12] & 0xff | (key[13] & 0xff) << 8;
                this.r[7] = (t5 >>> 11 | t6 << 5) & 0x1f81;
                t7 = key[14] & 0xff | (key[15] & 0xff) << 8;
                this.r[8] = (t6 >>> 8 | t7 << 8) & 0x1fff;
                this.r[9] = t7 >>> 5 & 0x007f;
                this.pad[0] = key[16] & 0xff | (key[17] & 0xff) << 8;
                this.pad[1] = key[18] & 0xff | (key[19] & 0xff) << 8;
                this.pad[2] = key[20] & 0xff | (key[21] & 0xff) << 8;
                this.pad[3] = key[22] & 0xff | (key[23] & 0xff) << 8;
                this.pad[4] = key[24] & 0xff | (key[25] & 0xff) << 8;
                this.pad[5] = key[26] & 0xff | (key[27] & 0xff) << 8;
                this.pad[6] = key[28] & 0xff | (key[29] & 0xff) << 8;
                this.pad[7] = key[30] & 0xff | (key[31] & 0xff) << 8;
              };

              poly1305.prototype.blocks = function (m, mpos, bytes) {
                var hibit = this.fin ? 0 : 1 << 11;
                var t0, t1, t2, t3, t4, t5, t6, t7, c;
                var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
                var h0 = this.h[0],
                    h1 = this.h[1],
                    h2 = this.h[2],
                    h3 = this.h[3],
                    h4 = this.h[4],
                    h5 = this.h[5],
                    h6 = this.h[6],
                    h7 = this.h[7],
                    h8 = this.h[8],
                    h9 = this.h[9];
                var r0 = this.r[0],
                    r1 = this.r[1],
                    r2 = this.r[2],
                    r3 = this.r[3],
                    r4 = this.r[4],
                    r5 = this.r[5],
                    r6 = this.r[6],
                    r7 = this.r[7],
                    r8 = this.r[8],
                    r9 = this.r[9];

                while (bytes >= 16) {
                  t0 = m[mpos + 0] & 0xff | (m[mpos + 1] & 0xff) << 8;
                  h0 += t0 & 0x1fff;
                  t1 = m[mpos + 2] & 0xff | (m[mpos + 3] & 0xff) << 8;
                  h1 += (t0 >>> 13 | t1 << 3) & 0x1fff;
                  t2 = m[mpos + 4] & 0xff | (m[mpos + 5] & 0xff) << 8;
                  h2 += (t1 >>> 10 | t2 << 6) & 0x1fff;
                  t3 = m[mpos + 6] & 0xff | (m[mpos + 7] & 0xff) << 8;
                  h3 += (t2 >>> 7 | t3 << 9) & 0x1fff;
                  t4 = m[mpos + 8] & 0xff | (m[mpos + 9] & 0xff) << 8;
                  h4 += (t3 >>> 4 | t4 << 12) & 0x1fff;
                  h5 += t4 >>> 1 & 0x1fff;
                  t5 = m[mpos + 10] & 0xff | (m[mpos + 11] & 0xff) << 8;
                  h6 += (t4 >>> 14 | t5 << 2) & 0x1fff;
                  t6 = m[mpos + 12] & 0xff | (m[mpos + 13] & 0xff) << 8;
                  h7 += (t5 >>> 11 | t6 << 5) & 0x1fff;
                  t7 = m[mpos + 14] & 0xff | (m[mpos + 15] & 0xff) << 8;
                  h8 += (t6 >>> 8 | t7 << 8) & 0x1fff;
                  h9 += t7 >>> 5 | hibit;
                  c = 0;
                  d0 = c;
                  d0 += h0 * r0;
                  d0 += h1 * (5 * r9);
                  d0 += h2 * (5 * r8);
                  d0 += h3 * (5 * r7);
                  d0 += h4 * (5 * r6);
                  c = d0 >>> 13;
                  d0 &= 0x1fff;
                  d0 += h5 * (5 * r5);
                  d0 += h6 * (5 * r4);
                  d0 += h7 * (5 * r3);
                  d0 += h8 * (5 * r2);
                  d0 += h9 * (5 * r1);
                  c += d0 >>> 13;
                  d0 &= 0x1fff;
                  d1 = c;
                  d1 += h0 * r1;
                  d1 += h1 * r0;
                  d1 += h2 * (5 * r9);
                  d1 += h3 * (5 * r8);
                  d1 += h4 * (5 * r7);
                  c = d1 >>> 13;
                  d1 &= 0x1fff;
                  d1 += h5 * (5 * r6);
                  d1 += h6 * (5 * r5);
                  d1 += h7 * (5 * r4);
                  d1 += h8 * (5 * r3);
                  d1 += h9 * (5 * r2);
                  c += d1 >>> 13;
                  d1 &= 0x1fff;
                  d2 = c;
                  d2 += h0 * r2;
                  d2 += h1 * r1;
                  d2 += h2 * r0;
                  d2 += h3 * (5 * r9);
                  d2 += h4 * (5 * r8);
                  c = d2 >>> 13;
                  d2 &= 0x1fff;
                  d2 += h5 * (5 * r7);
                  d2 += h6 * (5 * r6);
                  d2 += h7 * (5 * r5);
                  d2 += h8 * (5 * r4);
                  d2 += h9 * (5 * r3);
                  c += d2 >>> 13;
                  d2 &= 0x1fff;
                  d3 = c;
                  d3 += h0 * r3;
                  d3 += h1 * r2;
                  d3 += h2 * r1;
                  d3 += h3 * r0;
                  d3 += h4 * (5 * r9);
                  c = d3 >>> 13;
                  d3 &= 0x1fff;
                  d3 += h5 * (5 * r8);
                  d3 += h6 * (5 * r7);
                  d3 += h7 * (5 * r6);
                  d3 += h8 * (5 * r5);
                  d3 += h9 * (5 * r4);
                  c += d3 >>> 13;
                  d3 &= 0x1fff;
                  d4 = c;
                  d4 += h0 * r4;
                  d4 += h1 * r3;
                  d4 += h2 * r2;
                  d4 += h3 * r1;
                  d4 += h4 * r0;
                  c = d4 >>> 13;
                  d4 &= 0x1fff;
                  d4 += h5 * (5 * r9);
                  d4 += h6 * (5 * r8);
                  d4 += h7 * (5 * r7);
                  d4 += h8 * (5 * r6);
                  d4 += h9 * (5 * r5);
                  c += d4 >>> 13;
                  d4 &= 0x1fff;
                  d5 = c;
                  d5 += h0 * r5;
                  d5 += h1 * r4;
                  d5 += h2 * r3;
                  d5 += h3 * r2;
                  d5 += h4 * r1;
                  c = d5 >>> 13;
                  d5 &= 0x1fff;
                  d5 += h5 * r0;
                  d5 += h6 * (5 * r9);
                  d5 += h7 * (5 * r8);
                  d5 += h8 * (5 * r7);
                  d5 += h9 * (5 * r6);
                  c += d5 >>> 13;
                  d5 &= 0x1fff;
                  d6 = c;
                  d6 += h0 * r6;
                  d6 += h1 * r5;
                  d6 += h2 * r4;
                  d6 += h3 * r3;
                  d6 += h4 * r2;
                  c = d6 >>> 13;
                  d6 &= 0x1fff;
                  d6 += h5 * r1;
                  d6 += h6 * r0;
                  d6 += h7 * (5 * r9);
                  d6 += h8 * (5 * r8);
                  d6 += h9 * (5 * r7);
                  c += d6 >>> 13;
                  d6 &= 0x1fff;
                  d7 = c;
                  d7 += h0 * r7;
                  d7 += h1 * r6;
                  d7 += h2 * r5;
                  d7 += h3 * r4;
                  d7 += h4 * r3;
                  c = d7 >>> 13;
                  d7 &= 0x1fff;
                  d7 += h5 * r2;
                  d7 += h6 * r1;
                  d7 += h7 * r0;
                  d7 += h8 * (5 * r9);
                  d7 += h9 * (5 * r8);
                  c += d7 >>> 13;
                  d7 &= 0x1fff;
                  d8 = c;
                  d8 += h0 * r8;
                  d8 += h1 * r7;
                  d8 += h2 * r6;
                  d8 += h3 * r5;
                  d8 += h4 * r4;
                  c = d8 >>> 13;
                  d8 &= 0x1fff;
                  d8 += h5 * r3;
                  d8 += h6 * r2;
                  d8 += h7 * r1;
                  d8 += h8 * r0;
                  d8 += h9 * (5 * r9);
                  c += d8 >>> 13;
                  d8 &= 0x1fff;
                  d9 = c;
                  d9 += h0 * r9;
                  d9 += h1 * r8;
                  d9 += h2 * r7;
                  d9 += h3 * r6;
                  d9 += h4 * r5;
                  c = d9 >>> 13;
                  d9 &= 0x1fff;
                  d9 += h5 * r4;
                  d9 += h6 * r3;
                  d9 += h7 * r2;
                  d9 += h8 * r1;
                  d9 += h9 * r0;
                  c += d9 >>> 13;
                  d9 &= 0x1fff;
                  c = (c << 2) + c | 0;
                  c = c + d0 | 0;
                  d0 = c & 0x1fff;
                  c = c >>> 13;
                  d1 += c;
                  h0 = d0;
                  h1 = d1;
                  h2 = d2;
                  h3 = d3;
                  h4 = d4;
                  h5 = d5;
                  h6 = d6;
                  h7 = d7;
                  h8 = d8;
                  h9 = d9;
                  mpos += 16;
                  bytes -= 16;
                }

                this.h[0] = h0;
                this.h[1] = h1;
                this.h[2] = h2;
                this.h[3] = h3;
                this.h[4] = h4;
                this.h[5] = h5;
                this.h[6] = h6;
                this.h[7] = h7;
                this.h[8] = h8;
                this.h[9] = h9;
              };

              poly1305.prototype.finish = function (mac, macpos) {
                var g = new Uint16Array(10);
                var c, mask, f, i;

                if (this.leftover) {
                  i = this.leftover;
                  this.buffer[i++] = 1;

                  for (; i < 16; i++) {
                    this.buffer[i] = 0;
                  }

                  this.fin = 1;
                  this.blocks(this.buffer, 0, 16);
                }

                c = this.h[1] >>> 13;
                this.h[1] &= 0x1fff;

                for (i = 2; i < 10; i++) {
                  this.h[i] += c;
                  c = this.h[i] >>> 13;
                  this.h[i] &= 0x1fff;
                }

                this.h[0] += c * 5;
                c = this.h[0] >>> 13;
                this.h[0] &= 0x1fff;
                this.h[1] += c;
                c = this.h[1] >>> 13;
                this.h[1] &= 0x1fff;
                this.h[2] += c;
                g[0] = this.h[0] + 5;
                c = g[0] >>> 13;
                g[0] &= 0x1fff;

                for (i = 1; i < 10; i++) {
                  g[i] = this.h[i] + c;
                  c = g[i] >>> 13;
                  g[i] &= 0x1fff;
                }

                g[9] -= 1 << 13;
                mask = (c ^ 1) - 1;

                for (i = 0; i < 10; i++) {
                  g[i] &= mask;
                }

                mask = ~mask;

                for (i = 0; i < 10; i++) {
                  this.h[i] = this.h[i] & mask | g[i];
                }

                this.h[0] = (this.h[0] | this.h[1] << 13) & 0xffff;
                this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 0xffff;
                this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 0xffff;
                this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 0xffff;
                this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 0xffff;
                this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 0xffff;
                this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 0xffff;
                this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 0xffff;
                f = this.h[0] + this.pad[0];
                this.h[0] = f & 0xffff;

                for (i = 1; i < 8; i++) {
                  f = (this.h[i] + this.pad[i] | 0) + (f >>> 16) | 0;
                  this.h[i] = f & 0xffff;
                }

                mac[macpos + 0] = this.h[0] >>> 0 & 0xff;
                mac[macpos + 1] = this.h[0] >>> 8 & 0xff;
                mac[macpos + 2] = this.h[1] >>> 0 & 0xff;
                mac[macpos + 3] = this.h[1] >>> 8 & 0xff;
                mac[macpos + 4] = this.h[2] >>> 0 & 0xff;
                mac[macpos + 5] = this.h[2] >>> 8 & 0xff;
                mac[macpos + 6] = this.h[3] >>> 0 & 0xff;
                mac[macpos + 7] = this.h[3] >>> 8 & 0xff;
                mac[macpos + 8] = this.h[4] >>> 0 & 0xff;
                mac[macpos + 9] = this.h[4] >>> 8 & 0xff;
                mac[macpos + 10] = this.h[5] >>> 0 & 0xff;
                mac[macpos + 11] = this.h[5] >>> 8 & 0xff;
                mac[macpos + 12] = this.h[6] >>> 0 & 0xff;
                mac[macpos + 13] = this.h[6] >>> 8 & 0xff;
                mac[macpos + 14] = this.h[7] >>> 0 & 0xff;
                mac[macpos + 15] = this.h[7] >>> 8 & 0xff;
              };

              poly1305.prototype.update = function (m, mpos, bytes) {
                var i, want;

                if (this.leftover) {
                  want = 16 - this.leftover;
                  if (want > bytes) want = bytes;

                  for (i = 0; i < want; i++) {
                    this.buffer[this.leftover + i] = m[mpos + i];
                  }

                  bytes -= want;
                  mpos += want;
                  this.leftover += want;
                  if (this.leftover < 16) return;
                  this.blocks(this.buffer, 0, 16);
                  this.leftover = 0;
                }

                if (bytes >= 16) {
                  want = bytes - bytes % 16;
                  this.blocks(m, mpos, want);
                  mpos += want;
                  bytes -= want;
                }

                if (bytes) {
                  for (i = 0; i < bytes; i++) {
                    this.buffer[this.leftover + i] = m[mpos + i];
                  }

                  this.leftover += bytes;
                }
              };

              function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
                var s = new poly1305(k);
                s.update(m, mpos, n);
                s.finish(out, outpos);
                return 0;
              }

              function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
                var x = new Uint8Array(16);
                crypto_onetimeauth(x, 0, m, mpos, n, k);
                return crypto_verify_16(h, hpos, x, 0);
              }

              function crypto_secretbox(c, m, d, n, k) {
                var i;
                if (d < 32) return -1;
                crypto_stream_xor(c, 0, m, 0, d, n, k);
                crypto_onetimeauth(c, 16, c, 32, d - 32, c);

                for (i = 0; i < 16; i++) {
                  c[i] = 0;
                }

                return 0;
              }

              function crypto_secretbox_open(m, c, d, n, k) {
                var i;
                var x = new Uint8Array(32);
                if (d < 32) return -1;
                crypto_stream(x, 0, 32, n, k);
                if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0) return -1;
                crypto_stream_xor(m, 0, c, 0, d, n, k);

                for (i = 0; i < 32; i++) {
                  m[i] = 0;
                }

                return 0;
              }

              function set25519(r, a) {
                var i;

                for (i = 0; i < 16; i++) {
                  r[i] = a[i] | 0;
                }
              }

              function car25519(o) {
                var i,
                    v,
                    c = 1;

                for (i = 0; i < 16; i++) {
                  v = o[i] + c + 65535;
                  c = Math.floor(v / 65536);
                  o[i] = v - c * 65536;
                }

                o[0] += c - 1 + 37 * (c - 1);
              }

              function sel25519(p, q, b) {
                var t,
                    c = ~(b - 1);

                for (var i = 0; i < 16; i++) {
                  t = c & (p[i] ^ q[i]);
                  p[i] ^= t;
                  q[i] ^= t;
                }
              }

              function pack25519(o, n) {
                var i, j, b;
                var m = gf(),
                    t = gf();

                for (i = 0; i < 16; i++) {
                  t[i] = n[i];
                }

                car25519(t);
                car25519(t);
                car25519(t);

                for (j = 0; j < 2; j++) {
                  m[0] = t[0] - 0xffed;

                  for (i = 1; i < 15; i++) {
                    m[i] = t[i] - 0xffff - (m[i - 1] >> 16 & 1);
                    m[i - 1] &= 0xffff;
                  }

                  m[15] = t[15] - 0x7fff - (m[14] >> 16 & 1);
                  b = m[15] >> 16 & 1;
                  m[14] &= 0xffff;
                  sel25519(t, m, 1 - b);
                }

                for (i = 0; i < 16; i++) {
                  o[2 * i] = t[i] & 0xff;
                  o[2 * i + 1] = t[i] >> 8;
                }
              }

              function neq25519(a, b) {
                var c = new Uint8Array(32),
                    d = new Uint8Array(32);
                pack25519(c, a);
                pack25519(d, b);
                return crypto_verify_32(c, 0, d, 0);
              }

              function par25519(a) {
                var d = new Uint8Array(32);
                pack25519(d, a);
                return d[0] & 1;
              }

              function unpack25519(o, n) {
                var i;

                for (i = 0; i < 16; i++) {
                  o[i] = n[2 * i] + (n[2 * i + 1] << 8);
                }

                o[15] &= 0x7fff;
              }

              function A(o, a, b) {
                for (var i = 0; i < 16; i++) {
                  o[i] = a[i] + b[i];
                }
              }

              function Z(o, a, b) {
                for (var i = 0; i < 16; i++) {
                  o[i] = a[i] - b[i];
                }
              }

              function M(o, a, b) {
                var v,
                    c,
                    t0 = 0,
                    t1 = 0,
                    t2 = 0,
                    t3 = 0,
                    t4 = 0,
                    t5 = 0,
                    t6 = 0,
                    t7 = 0,
                    t8 = 0,
                    t9 = 0,
                    t10 = 0,
                    t11 = 0,
                    t12 = 0,
                    t13 = 0,
                    t14 = 0,
                    t15 = 0,
                    t16 = 0,
                    t17 = 0,
                    t18 = 0,
                    t19 = 0,
                    t20 = 0,
                    t21 = 0,
                    t22 = 0,
                    t23 = 0,
                    t24 = 0,
                    t25 = 0,
                    t26 = 0,
                    t27 = 0,
                    t28 = 0,
                    t29 = 0,
                    t30 = 0,
                    b0 = b[0],
                    b1 = b[1],
                    b2 = b[2],
                    b3 = b[3],
                    b4 = b[4],
                    b5 = b[5],
                    b6 = b[6],
                    b7 = b[7],
                    b8 = b[8],
                    b9 = b[9],
                    b10 = b[10],
                    b11 = b[11],
                    b12 = b[12],
                    b13 = b[13],
                    b14 = b[14],
                    b15 = b[15];
                v = a[0];
                t0 += v * b0;
                t1 += v * b1;
                t2 += v * b2;
                t3 += v * b3;
                t4 += v * b4;
                t5 += v * b5;
                t6 += v * b6;
                t7 += v * b7;
                t8 += v * b8;
                t9 += v * b9;
                t10 += v * b10;
                t11 += v * b11;
                t12 += v * b12;
                t13 += v * b13;
                t14 += v * b14;
                t15 += v * b15;
                v = a[1];
                t1 += v * b0;
                t2 += v * b1;
                t3 += v * b2;
                t4 += v * b3;
                t5 += v * b4;
                t6 += v * b5;
                t7 += v * b6;
                t8 += v * b7;
                t9 += v * b8;
                t10 += v * b9;
                t11 += v * b10;
                t12 += v * b11;
                t13 += v * b12;
                t14 += v * b13;
                t15 += v * b14;
                t16 += v * b15;
                v = a[2];
                t2 += v * b0;
                t3 += v * b1;
                t4 += v * b2;
                t5 += v * b3;
                t6 += v * b4;
                t7 += v * b5;
                t8 += v * b6;
                t9 += v * b7;
                t10 += v * b8;
                t11 += v * b9;
                t12 += v * b10;
                t13 += v * b11;
                t14 += v * b12;
                t15 += v * b13;
                t16 += v * b14;
                t17 += v * b15;
                v = a[3];
                t3 += v * b0;
                t4 += v * b1;
                t5 += v * b2;
                t6 += v * b3;
                t7 += v * b4;
                t8 += v * b5;
                t9 += v * b6;
                t10 += v * b7;
                t11 += v * b8;
                t12 += v * b9;
                t13 += v * b10;
                t14 += v * b11;
                t15 += v * b12;
                t16 += v * b13;
                t17 += v * b14;
                t18 += v * b15;
                v = a[4];
                t4 += v * b0;
                t5 += v * b1;
                t6 += v * b2;
                t7 += v * b3;
                t8 += v * b4;
                t9 += v * b5;
                t10 += v * b6;
                t11 += v * b7;
                t12 += v * b8;
                t13 += v * b9;
                t14 += v * b10;
                t15 += v * b11;
                t16 += v * b12;
                t17 += v * b13;
                t18 += v * b14;
                t19 += v * b15;
                v = a[5];
                t5 += v * b0;
                t6 += v * b1;
                t7 += v * b2;
                t8 += v * b3;
                t9 += v * b4;
                t10 += v * b5;
                t11 += v * b6;
                t12 += v * b7;
                t13 += v * b8;
                t14 += v * b9;
                t15 += v * b10;
                t16 += v * b11;
                t17 += v * b12;
                t18 += v * b13;
                t19 += v * b14;
                t20 += v * b15;
                v = a[6];
                t6 += v * b0;
                t7 += v * b1;
                t8 += v * b2;
                t9 += v * b3;
                t10 += v * b4;
                t11 += v * b5;
                t12 += v * b6;
                t13 += v * b7;
                t14 += v * b8;
                t15 += v * b9;
                t16 += v * b10;
                t17 += v * b11;
                t18 += v * b12;
                t19 += v * b13;
                t20 += v * b14;
                t21 += v * b15;
                v = a[7];
                t7 += v * b0;
                t8 += v * b1;
                t9 += v * b2;
                t10 += v * b3;
                t11 += v * b4;
                t12 += v * b5;
                t13 += v * b6;
                t14 += v * b7;
                t15 += v * b8;
                t16 += v * b9;
                t17 += v * b10;
                t18 += v * b11;
                t19 += v * b12;
                t20 += v * b13;
                t21 += v * b14;
                t22 += v * b15;
                v = a[8];
                t8 += v * b0;
                t9 += v * b1;
                t10 += v * b2;
                t11 += v * b3;
                t12 += v * b4;
                t13 += v * b5;
                t14 += v * b6;
                t15 += v * b7;
                t16 += v * b8;
                t17 += v * b9;
                t18 += v * b10;
                t19 += v * b11;
                t20 += v * b12;
                t21 += v * b13;
                t22 += v * b14;
                t23 += v * b15;
                v = a[9];
                t9 += v * b0;
                t10 += v * b1;
                t11 += v * b2;
                t12 += v * b3;
                t13 += v * b4;
                t14 += v * b5;
                t15 += v * b6;
                t16 += v * b7;
                t17 += v * b8;
                t18 += v * b9;
                t19 += v * b10;
                t20 += v * b11;
                t21 += v * b12;
                t22 += v * b13;
                t23 += v * b14;
                t24 += v * b15;
                v = a[10];
                t10 += v * b0;
                t11 += v * b1;
                t12 += v * b2;
                t13 += v * b3;
                t14 += v * b4;
                t15 += v * b5;
                t16 += v * b6;
                t17 += v * b7;
                t18 += v * b8;
                t19 += v * b9;
                t20 += v * b10;
                t21 += v * b11;
                t22 += v * b12;
                t23 += v * b13;
                t24 += v * b14;
                t25 += v * b15;
                v = a[11];
                t11 += v * b0;
                t12 += v * b1;
                t13 += v * b2;
                t14 += v * b3;
                t15 += v * b4;
                t16 += v * b5;
                t17 += v * b6;
                t18 += v * b7;
                t19 += v * b8;
                t20 += v * b9;
                t21 += v * b10;
                t22 += v * b11;
                t23 += v * b12;
                t24 += v * b13;
                t25 += v * b14;
                t26 += v * b15;
                v = a[12];
                t12 += v * b0;
                t13 += v * b1;
                t14 += v * b2;
                t15 += v * b3;
                t16 += v * b4;
                t17 += v * b5;
                t18 += v * b6;
                t19 += v * b7;
                t20 += v * b8;
                t21 += v * b9;
                t22 += v * b10;
                t23 += v * b11;
                t24 += v * b12;
                t25 += v * b13;
                t26 += v * b14;
                t27 += v * b15;
                v = a[13];
                t13 += v * b0;
                t14 += v * b1;
                t15 += v * b2;
                t16 += v * b3;
                t17 += v * b4;
                t18 += v * b5;
                t19 += v * b6;
                t20 += v * b7;
                t21 += v * b8;
                t22 += v * b9;
                t23 += v * b10;
                t24 += v * b11;
                t25 += v * b12;
                t26 += v * b13;
                t27 += v * b14;
                t28 += v * b15;
                v = a[14];
                t14 += v * b0;
                t15 += v * b1;
                t16 += v * b2;
                t17 += v * b3;
                t18 += v * b4;
                t19 += v * b5;
                t20 += v * b6;
                t21 += v * b7;
                t22 += v * b8;
                t23 += v * b9;
                t24 += v * b10;
                t25 += v * b11;
                t26 += v * b12;
                t27 += v * b13;
                t28 += v * b14;
                t29 += v * b15;
                v = a[15];
                t15 += v * b0;
                t16 += v * b1;
                t17 += v * b2;
                t18 += v * b3;
                t19 += v * b4;
                t20 += v * b5;
                t21 += v * b6;
                t22 += v * b7;
                t23 += v * b8;
                t24 += v * b9;
                t25 += v * b10;
                t26 += v * b11;
                t27 += v * b12;
                t28 += v * b13;
                t29 += v * b14;
                t30 += v * b15;
                t0 += 38 * t16;
                t1 += 38 * t17;
                t2 += 38 * t18;
                t3 += 38 * t19;
                t4 += 38 * t20;
                t5 += 38 * t21;
                t6 += 38 * t22;
                t7 += 38 * t23;
                t8 += 38 * t24;
                t9 += 38 * t25;
                t10 += 38 * t26;
                t11 += 38 * t27;
                t12 += 38 * t28;
                t13 += 38 * t29;
                t14 += 38 * t30; // t15 left as is
                // first car

                c = 1;
                v = t0 + c + 65535;
                c = Math.floor(v / 65536);
                t0 = v - c * 65536;
                v = t1 + c + 65535;
                c = Math.floor(v / 65536);
                t1 = v - c * 65536;
                v = t2 + c + 65535;
                c = Math.floor(v / 65536);
                t2 = v - c * 65536;
                v = t3 + c + 65535;
                c = Math.floor(v / 65536);
                t3 = v - c * 65536;
                v = t4 + c + 65535;
                c = Math.floor(v / 65536);
                t4 = v - c * 65536;
                v = t5 + c + 65535;
                c = Math.floor(v / 65536);
                t5 = v - c * 65536;
                v = t6 + c + 65535;
                c = Math.floor(v / 65536);
                t6 = v - c * 65536;
                v = t7 + c + 65535;
                c = Math.floor(v / 65536);
                t7 = v - c * 65536;
                v = t8 + c + 65535;
                c = Math.floor(v / 65536);
                t8 = v - c * 65536;
                v = t9 + c + 65535;
                c = Math.floor(v / 65536);
                t9 = v - c * 65536;
                v = t10 + c + 65535;
                c = Math.floor(v / 65536);
                t10 = v - c * 65536;
                v = t11 + c + 65535;
                c = Math.floor(v / 65536);
                t11 = v - c * 65536;
                v = t12 + c + 65535;
                c = Math.floor(v / 65536);
                t12 = v - c * 65536;
                v = t13 + c + 65535;
                c = Math.floor(v / 65536);
                t13 = v - c * 65536;
                v = t14 + c + 65535;
                c = Math.floor(v / 65536);
                t14 = v - c * 65536;
                v = t15 + c + 65535;
                c = Math.floor(v / 65536);
                t15 = v - c * 65536;
                t0 += c - 1 + 37 * (c - 1); // second car

                c = 1;
                v = t0 + c + 65535;
                c = Math.floor(v / 65536);
                t0 = v - c * 65536;
                v = t1 + c + 65535;
                c = Math.floor(v / 65536);
                t1 = v - c * 65536;
                v = t2 + c + 65535;
                c = Math.floor(v / 65536);
                t2 = v - c * 65536;
                v = t3 + c + 65535;
                c = Math.floor(v / 65536);
                t3 = v - c * 65536;
                v = t4 + c + 65535;
                c = Math.floor(v / 65536);
                t4 = v - c * 65536;
                v = t5 + c + 65535;
                c = Math.floor(v / 65536);
                t5 = v - c * 65536;
                v = t6 + c + 65535;
                c = Math.floor(v / 65536);
                t6 = v - c * 65536;
                v = t7 + c + 65535;
                c = Math.floor(v / 65536);
                t7 = v - c * 65536;
                v = t8 + c + 65535;
                c = Math.floor(v / 65536);
                t8 = v - c * 65536;
                v = t9 + c + 65535;
                c = Math.floor(v / 65536);
                t9 = v - c * 65536;
                v = t10 + c + 65535;
                c = Math.floor(v / 65536);
                t10 = v - c * 65536;
                v = t11 + c + 65535;
                c = Math.floor(v / 65536);
                t11 = v - c * 65536;
                v = t12 + c + 65535;
                c = Math.floor(v / 65536);
                t12 = v - c * 65536;
                v = t13 + c + 65535;
                c = Math.floor(v / 65536);
                t13 = v - c * 65536;
                v = t14 + c + 65535;
                c = Math.floor(v / 65536);
                t14 = v - c * 65536;
                v = t15 + c + 65535;
                c = Math.floor(v / 65536);
                t15 = v - c * 65536;
                t0 += c - 1 + 37 * (c - 1);
                o[0] = t0;
                o[1] = t1;
                o[2] = t2;
                o[3] = t3;
                o[4] = t4;
                o[5] = t5;
                o[6] = t6;
                o[7] = t7;
                o[8] = t8;
                o[9] = t9;
                o[10] = t10;
                o[11] = t11;
                o[12] = t12;
                o[13] = t13;
                o[14] = t14;
                o[15] = t15;
              }

              function S(o, a) {
                M(o, a, a);
              }

              function inv25519(o, i) {
                var c = gf();
                var a;

                for (a = 0; a < 16; a++) {
                  c[a] = i[a];
                }

                for (a = 253; a >= 0; a--) {
                  S(c, c);
                  if (a !== 2 && a !== 4) M(c, c, i);
                }

                for (a = 0; a < 16; a++) {
                  o[a] = c[a];
                }
              }

              function pow2523(o, i) {
                var c = gf();
                var a;

                for (a = 0; a < 16; a++) {
                  c[a] = i[a];
                }

                for (a = 250; a >= 0; a--) {
                  S(c, c);
                  if (a !== 1) M(c, c, i);
                }

                for (a = 0; a < 16; a++) {
                  o[a] = c[a];
                }
              }

              function crypto_scalarmult(q, n, p) {
                var z = new Uint8Array(32);
                var x = new Float64Array(80),
                    r,
                    i;
                var a = gf(),
                    b = gf(),
                    c = gf(),
                    d = gf(),
                    e = gf(),
                    f = gf();

                for (i = 0; i < 31; i++) {
                  z[i] = n[i];
                }

                z[31] = n[31] & 127 | 64;
                z[0] &= 248;
                unpack25519(x, p);

                for (i = 0; i < 16; i++) {
                  b[i] = x[i];
                  d[i] = a[i] = c[i] = 0;
                }

                a[0] = d[0] = 1;

                for (i = 254; i >= 0; --i) {
                  r = z[i >>> 3] >>> (i & 7) & 1;
                  sel25519(a, b, r);
                  sel25519(c, d, r);
                  A(e, a, c);
                  Z(a, a, c);
                  A(c, b, d);
                  Z(b, b, d);
                  S(d, e);
                  S(f, a);
                  M(a, c, a);
                  M(c, b, e);
                  A(e, a, c);
                  Z(a, a, c);
                  S(b, a);
                  Z(c, d, f);
                  M(a, c, _121665);
                  A(a, a, d);
                  M(c, c, a);
                  M(a, d, f);
                  M(d, b, x);
                  S(b, e);
                  sel25519(a, b, r);
                  sel25519(c, d, r);
                }

                for (i = 0; i < 16; i++) {
                  x[i + 16] = a[i];
                  x[i + 32] = c[i];
                  x[i + 48] = b[i];
                  x[i + 64] = d[i];
                }

                var x32 = x.subarray(32);
                var x16 = x.subarray(16);
                inv25519(x32, x32);
                M(x16, x16, x32);
                pack25519(q, x16);
                return 0;
              }

              function crypto_scalarmult_base(q, n) {
                return crypto_scalarmult(q, n, _9);
              }

              function crypto_box_keypair(y, x) {
                randombytes(x, 32);
                return crypto_scalarmult_base(y, x);
              }

              function crypto_box_beforenm(k, y, x) {
                var s = new Uint8Array(32);
                crypto_scalarmult(s, x, y);
                return crypto_core_hsalsa20(k, _0, s, sigma);
              }

              var crypto_box_afternm = crypto_secretbox;
              var crypto_box_open_afternm = crypto_secretbox_open;

              function crypto_box(c, m, d, n, y, x) {
                var k = new Uint8Array(32);
                crypto_box_beforenm(k, y, x);
                return crypto_box_afternm(c, m, d, n, k);
              }

              function crypto_box_open(m, c, d, n, y, x) {
                var k = new Uint8Array(32);
                crypto_box_beforenm(k, y, x);
                return crypto_box_open_afternm(m, c, d, n, k);
              }

              var K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

              function crypto_hashblocks_hl(hh, hl, m, n) {
                var wh = new Int32Array(16),
                    wl = new Int32Array(16),
                    bh0,
                    bh1,
                    bh2,
                    bh3,
                    bh4,
                    bh5,
                    bh6,
                    bh7,
                    bl0,
                    bl1,
                    bl2,
                    bl3,
                    bl4,
                    bl5,
                    bl6,
                    bl7,
                    th,
                    tl,
                    i,
                    j,
                    h,
                    l,
                    a,
                    b,
                    c,
                    d;
                var ah0 = hh[0],
                    ah1 = hh[1],
                    ah2 = hh[2],
                    ah3 = hh[3],
                    ah4 = hh[4],
                    ah5 = hh[5],
                    ah6 = hh[6],
                    ah7 = hh[7],
                    al0 = hl[0],
                    al1 = hl[1],
                    al2 = hl[2],
                    al3 = hl[3],
                    al4 = hl[4],
                    al5 = hl[5],
                    al6 = hl[6],
                    al7 = hl[7];
                var pos = 0;

                while (n >= 128) {
                  for (i = 0; i < 16; i++) {
                    j = 8 * i + pos;
                    wh[i] = m[j + 0] << 24 | m[j + 1] << 16 | m[j + 2] << 8 | m[j + 3];
                    wl[i] = m[j + 4] << 24 | m[j + 5] << 16 | m[j + 6] << 8 | m[j + 7];
                  }

                  for (i = 0; i < 80; i++) {
                    bh0 = ah0;
                    bh1 = ah1;
                    bh2 = ah2;
                    bh3 = ah3;
                    bh4 = ah4;
                    bh5 = ah5;
                    bh6 = ah6;
                    bh7 = ah7;
                    bl0 = al0;
                    bl1 = al1;
                    bl2 = al2;
                    bl3 = al3;
                    bl4 = al4;
                    bl5 = al5;
                    bl6 = al6;
                    bl7 = al7; // add

                    h = ah7;
                    l = al7;
                    a = l & 0xffff;
                    b = l >>> 16;
                    c = h & 0xffff;
                    d = h >>> 16; // Sigma1

                    h = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
                    l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16; // Ch

                    h = ah4 & ah5 ^ ~ah4 & ah6;
                    l = al4 & al5 ^ ~al4 & al6;
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16; // K

                    h = K[i * 2];
                    l = K[i * 2 + 1];
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16; // w

                    h = wh[i % 16];
                    l = wl[i % 16];
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    b += a >>> 16;
                    c += b >>> 16;
                    d += c >>> 16;
                    th = c & 0xffff | d << 16;
                    tl = a & 0xffff | b << 16; // add

                    h = th;
                    l = tl;
                    a = l & 0xffff;
                    b = l >>> 16;
                    c = h & 0xffff;
                    d = h >>> 16; // Sigma0

                    h = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
                    l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16; // Maj

                    h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
                    l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    b += a >>> 16;
                    c += b >>> 16;
                    d += c >>> 16;
                    bh7 = c & 0xffff | d << 16;
                    bl7 = a & 0xffff | b << 16; // add

                    h = bh3;
                    l = bl3;
                    a = l & 0xffff;
                    b = l >>> 16;
                    c = h & 0xffff;
                    d = h >>> 16;
                    h = th;
                    l = tl;
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    b += a >>> 16;
                    c += b >>> 16;
                    d += c >>> 16;
                    bh3 = c & 0xffff | d << 16;
                    bl3 = a & 0xffff | b << 16;
                    ah1 = bh0;
                    ah2 = bh1;
                    ah3 = bh2;
                    ah4 = bh3;
                    ah5 = bh4;
                    ah6 = bh5;
                    ah7 = bh6;
                    ah0 = bh7;
                    al1 = bl0;
                    al2 = bl1;
                    al3 = bl2;
                    al4 = bl3;
                    al5 = bl4;
                    al6 = bl5;
                    al7 = bl6;
                    al0 = bl7;

                    if (i % 16 === 15) {
                      for (j = 0; j < 16; j++) {
                        // add
                        h = wh[j];
                        l = wl[j];
                        a = l & 0xffff;
                        b = l >>> 16;
                        c = h & 0xffff;
                        d = h >>> 16;
                        h = wh[(j + 9) % 16];
                        l = wl[(j + 9) % 16];
                        a += l & 0xffff;
                        b += l >>> 16;
                        c += h & 0xffff;
                        d += h >>> 16; // sigma0

                        th = wh[(j + 1) % 16];
                        tl = wl[(j + 1) % 16];
                        h = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
                        l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
                        a += l & 0xffff;
                        b += l >>> 16;
                        c += h & 0xffff;
                        d += h >>> 16; // sigma1

                        th = wh[(j + 14) % 16];
                        tl = wl[(j + 14) % 16];
                        h = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
                        l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
                        a += l & 0xffff;
                        b += l >>> 16;
                        c += h & 0xffff;
                        d += h >>> 16;
                        b += a >>> 16;
                        c += b >>> 16;
                        d += c >>> 16;
                        wh[j] = c & 0xffff | d << 16;
                        wl[j] = a & 0xffff | b << 16;
                      }
                    }
                  } // add


                  h = ah0;
                  l = al0;
                  a = l & 0xffff;
                  b = l >>> 16;
                  c = h & 0xffff;
                  d = h >>> 16;
                  h = hh[0];
                  l = hl[0];
                  a += l & 0xffff;
                  b += l >>> 16;
                  c += h & 0xffff;
                  d += h >>> 16;
                  b += a >>> 16;
                  c += b >>> 16;
                  d += c >>> 16;
                  hh[0] = ah0 = c & 0xffff | d << 16;
                  hl[0] = al0 = a & 0xffff | b << 16;
                  h = ah1;
                  l = al1;
                  a = l & 0xffff;
                  b = l >>> 16;
                  c = h & 0xffff;
                  d = h >>> 16;
                  h = hh[1];
                  l = hl[1];
                  a += l & 0xffff;
                  b += l >>> 16;
                  c += h & 0xffff;
                  d += h >>> 16;
                  b += a >>> 16;
                  c += b >>> 16;
                  d += c >>> 16;
                  hh[1] = ah1 = c & 0xffff | d << 16;
                  hl[1] = al1 = a & 0xffff | b << 16;
                  h = ah2;
                  l = al2;
                  a = l & 0xffff;
                  b = l >>> 16;
                  c = h & 0xffff;
                  d = h >>> 16;
                  h = hh[2];
                  l = hl[2];
                  a += l & 0xffff;
                  b += l >>> 16;
                  c += h & 0xffff;
                  d += h >>> 16;
                  b += a >>> 16;
                  c += b >>> 16;
                  d += c >>> 16;
                  hh[2] = ah2 = c & 0xffff | d << 16;
                  hl[2] = al2 = a & 0xffff | b << 16;
                  h = ah3;
                  l = al3;
                  a = l & 0xffff;
                  b = l >>> 16;
                  c = h & 0xffff;
                  d = h >>> 16;
                  h = hh[3];
                  l = hl[3];
                  a += l & 0xffff;
                  b += l >>> 16;
                  c += h & 0xffff;
                  d += h >>> 16;
                  b += a >>> 16;
                  c += b >>> 16;
                  d += c >>> 16;
                  hh[3] = ah3 = c & 0xffff | d << 16;
                  hl[3] = al3 = a & 0xffff | b << 16;
                  h = ah4;
                  l = al4;
                  a = l & 0xffff;
                  b = l >>> 16;
                  c = h & 0xffff;
                  d = h >>> 16;
                  h = hh[4];
                  l = hl[4];
                  a += l & 0xffff;
                  b += l >>> 16;
                  c += h & 0xffff;
                  d += h >>> 16;
                  b += a >>> 16;
                  c += b >>> 16;
                  d += c >>> 16;
                  hh[4] = ah4 = c & 0xffff | d << 16;
                  hl[4] = al4 = a & 0xffff | b << 16;
                  h = ah5;
                  l = al5;
                  a = l & 0xffff;
                  b = l >>> 16;
                  c = h & 0xffff;
                  d = h >>> 16;
                  h = hh[5];
                  l = hl[5];
                  a += l & 0xffff;
                  b += l >>> 16;
                  c += h & 0xffff;
                  d += h >>> 16;
                  b += a >>> 16;
                  c += b >>> 16;
                  d += c >>> 16;
                  hh[5] = ah5 = c & 0xffff | d << 16;
                  hl[5] = al5 = a & 0xffff | b << 16;
                  h = ah6;
                  l = al6;
                  a = l & 0xffff;
                  b = l >>> 16;
                  c = h & 0xffff;
                  d = h >>> 16;
                  h = hh[6];
                  l = hl[6];
                  a += l & 0xffff;
                  b += l >>> 16;
                  c += h & 0xffff;
                  d += h >>> 16;
                  b += a >>> 16;
                  c += b >>> 16;
                  d += c >>> 16;
                  hh[6] = ah6 = c & 0xffff | d << 16;
                  hl[6] = al6 = a & 0xffff | b << 16;
                  h = ah7;
                  l = al7;
                  a = l & 0xffff;
                  b = l >>> 16;
                  c = h & 0xffff;
                  d = h >>> 16;
                  h = hh[7];
                  l = hl[7];
                  a += l & 0xffff;
                  b += l >>> 16;
                  c += h & 0xffff;
                  d += h >>> 16;
                  b += a >>> 16;
                  c += b >>> 16;
                  d += c >>> 16;
                  hh[7] = ah7 = c & 0xffff | d << 16;
                  hl[7] = al7 = a & 0xffff | b << 16;
                  pos += 128;
                  n -= 128;
                }

                return n;
              }

              function crypto_hash(out, m, n) {
                var hh = new Int32Array(8),
                    hl = new Int32Array(8),
                    x = new Uint8Array(256),
                    i,
                    b = n;
                hh[0] = 0x6a09e667;
                hh[1] = 0xbb67ae85;
                hh[2] = 0x3c6ef372;
                hh[3] = 0xa54ff53a;
                hh[4] = 0x510e527f;
                hh[5] = 0x9b05688c;
                hh[6] = 0x1f83d9ab;
                hh[7] = 0x5be0cd19;
                hl[0] = 0xf3bcc908;
                hl[1] = 0x84caa73b;
                hl[2] = 0xfe94f82b;
                hl[3] = 0x5f1d36f1;
                hl[4] = 0xade682d1;
                hl[5] = 0x2b3e6c1f;
                hl[6] = 0xfb41bd6b;
                hl[7] = 0x137e2179;
                crypto_hashblocks_hl(hh, hl, m, n);
                n %= 128;

                for (i = 0; i < n; i++) {
                  x[i] = m[b - n + i];
                }

                x[n] = 128;
                n = 256 - 128 * (n < 112 ? 1 : 0);
                x[n - 9] = 0;
                ts64(x, n - 8, b / 0x20000000 | 0, b << 3);
                crypto_hashblocks_hl(hh, hl, x, n);

                for (i = 0; i < 8; i++) {
                  ts64(out, 8 * i, hh[i], hl[i]);
                }

                return 0;
              }

              function add(p, q) {
                var a = gf(),
                    b = gf(),
                    c = gf(),
                    d = gf(),
                    e = gf(),
                    f = gf(),
                    g = gf(),
                    h = gf(),
                    t = gf();
                Z(a, p[1], p[0]);
                Z(t, q[1], q[0]);
                M(a, a, t);
                A(b, p[0], p[1]);
                A(t, q[0], q[1]);
                M(b, b, t);
                M(c, p[3], q[3]);
                M(c, c, D2);
                M(d, p[2], q[2]);
                A(d, d, d);
                Z(e, b, a);
                Z(f, d, c);
                A(g, d, c);
                A(h, b, a);
                M(p[0], e, f);
                M(p[1], h, g);
                M(p[2], g, f);
                M(p[3], e, h);
              }

              function cswap(p, q, b) {
                var i;

                for (i = 0; i < 4; i++) {
                  sel25519(p[i], q[i], b);
                }
              }

              function pack(r, p) {
                var tx = gf(),
                    ty = gf(),
                    zi = gf();
                inv25519(zi, p[2]);
                M(tx, p[0], zi);
                M(ty, p[1], zi);
                pack25519(r, ty);
                r[31] ^= par25519(tx) << 7;
              }

              function scalarmult(p, q, s) {
                var b, i;
                set25519(p[0], gf0);
                set25519(p[1], gf1);
                set25519(p[2], gf1);
                set25519(p[3], gf0);

                for (i = 255; i >= 0; --i) {
                  b = s[i / 8 | 0] >> (i & 7) & 1;
                  cswap(p, q, b);
                  add(q, p);
                  add(p, p);
                  cswap(p, q, b);
                }
              }

              function scalarbase(p, s) {
                var q = [gf(), gf(), gf(), gf()];
                set25519(q[0], X);
                set25519(q[1], Y);
                set25519(q[2], gf1);
                M(q[3], X, Y);
                scalarmult(p, q, s);
              }

              function crypto_sign_keypair(pk, sk, seeded) {
                var d = new Uint8Array(64);
                var p = [gf(), gf(), gf(), gf()];
                var i;
                if (!seeded) randombytes(sk, 32);
                crypto_hash(d, sk, 32);
                d[0] &= 248;
                d[31] &= 127;
                d[31] |= 64;
                scalarbase(p, d);
                pack(pk, p);

                for (i = 0; i < 32; i++) {
                  sk[i + 32] = pk[i];
                }

                return 0;
              }

              var L = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10]);

              function modL(r, x) {
                var carry, i, j, k;

                for (i = 63; i >= 32; --i) {
                  carry = 0;

                  for (j = i - 32, k = i - 12; j < k; ++j) {
                    x[j] += carry - 16 * x[i] * L[j - (i - 32)];
                    carry = x[j] + 128 >> 8;
                    x[j] -= carry * 256;
                  }

                  x[j] += carry;
                  x[i] = 0;
                }

                carry = 0;

                for (j = 0; j < 32; j++) {
                  x[j] += carry - (x[31] >> 4) * L[j];
                  carry = x[j] >> 8;
                  x[j] &= 255;
                }

                for (j = 0; j < 32; j++) {
                  x[j] -= carry * L[j];
                }

                for (i = 0; i < 32; i++) {
                  x[i + 1] += x[i] >> 8;
                  r[i] = x[i] & 255;
                }
              }

              function reduce(r) {
                var x = new Float64Array(64),
                    i;

                for (i = 0; i < 64; i++) {
                  x[i] = r[i];
                }

                for (i = 0; i < 64; i++) {
                  r[i] = 0;
                }

                modL(r, x);
              } // Note: difference from C - smlen returned, not passed as argument.


              function crypto_sign(sm, m, n, sk) {
                var d = new Uint8Array(64),
                    h = new Uint8Array(64),
                    r = new Uint8Array(64);
                var i,
                    j,
                    x = new Float64Array(64);
                var p = [gf(), gf(), gf(), gf()];
                crypto_hash(d, sk, 32);
                d[0] &= 248;
                d[31] &= 127;
                d[31] |= 64;
                var smlen = n + 64;

                for (i = 0; i < n; i++) {
                  sm[64 + i] = m[i];
                }

                for (i = 0; i < 32; i++) {
                  sm[32 + i] = d[32 + i];
                }

                crypto_hash(r, sm.subarray(32), n + 32);
                reduce(r);
                scalarbase(p, r);
                pack(sm, p);

                for (i = 32; i < 64; i++) {
                  sm[i] = sk[i];
                }

                crypto_hash(h, sm, n + 64);
                reduce(h);

                for (i = 0; i < 64; i++) {
                  x[i] = 0;
                }

                for (i = 0; i < 32; i++) {
                  x[i] = r[i];
                }

                for (i = 0; i < 32; i++) {
                  for (j = 0; j < 32; j++) {
                    x[i + j] += h[i] * d[j];
                  }
                }

                modL(sm.subarray(32), x);
                return smlen;
              }

              function unpackneg(r, p) {
                var t = gf(),
                    chk = gf(),
                    num = gf(),
                    den = gf(),
                    den2 = gf(),
                    den4 = gf(),
                    den6 = gf();
                set25519(r[2], gf1);
                unpack25519(r[1], p);
                S(num, r[1]);
                M(den, num, D);
                Z(num, num, r[2]);
                A(den, r[2], den);
                S(den2, den);
                S(den4, den2);
                M(den6, den4, den2);
                M(t, den6, num);
                M(t, t, den);
                pow2523(t, t);
                M(t, t, num);
                M(t, t, den);
                M(t, t, den);
                M(r[0], t, den);
                S(chk, r[0]);
                M(chk, chk, den);
                if (neq25519(chk, num)) M(r[0], r[0], I);
                S(chk, r[0]);
                M(chk, chk, den);
                if (neq25519(chk, num)) return -1;
                if (par25519(r[0]) === p[31] >> 7) Z(r[0], gf0, r[0]);
                M(r[3], r[0], r[1]);
                return 0;
              }

              function crypto_sign_open(m, sm, n, pk) {
                var i, mlen;
                var t = new Uint8Array(32),
                    h = new Uint8Array(64);
                var p = [gf(), gf(), gf(), gf()],
                    q = [gf(), gf(), gf(), gf()];
                mlen = -1;
                if (n < 64) return -1;
                if (unpackneg(q, pk)) return -1;

                for (i = 0; i < n; i++) {
                  m[i] = sm[i];
                }

                for (i = 0; i < 32; i++) {
                  m[i + 32] = pk[i];
                }

                crypto_hash(h, m, n);
                reduce(h);
                scalarmult(p, q, h);
                scalarbase(q, sm.subarray(32));
                add(p, q);
                pack(t, p);
                n -= 64;

                if (crypto_verify_32(sm, 0, t, 0)) {
                  for (i = 0; i < n; i++) {
                    m[i] = 0;
                  }

                  return -1;
                }

                for (i = 0; i < n; i++) {
                  m[i] = sm[i + 64];
                }

                mlen = n;
                return mlen;
              }

              var crypto_secretbox_KEYBYTES = 32,
                  crypto_secretbox_NONCEBYTES = 24,
                  crypto_secretbox_ZEROBYTES = 32,
                  crypto_secretbox_BOXZEROBYTES = 16,
                  crypto_scalarmult_BYTES = 32,
                  crypto_scalarmult_SCALARBYTES = 32,
                  crypto_box_PUBLICKEYBYTES = 32,
                  crypto_box_SECRETKEYBYTES = 32,
                  crypto_box_BEFORENMBYTES = 32,
                  crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES,
                  crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES,
                  crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES,
                  crypto_sign_BYTES = 64,
                  crypto_sign_PUBLICKEYBYTES = 32,
                  crypto_sign_SECRETKEYBYTES = 64,
                  crypto_sign_SEEDBYTES = 32,
                  crypto_hash_BYTES = 64;
              nacl.lowlevel = {
                crypto_core_hsalsa20: crypto_core_hsalsa20,
                crypto_stream_xor: crypto_stream_xor,
                crypto_stream: crypto_stream,
                crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
                crypto_stream_salsa20: crypto_stream_salsa20,
                crypto_onetimeauth: crypto_onetimeauth,
                crypto_onetimeauth_verify: crypto_onetimeauth_verify,
                crypto_verify_16: crypto_verify_16,
                crypto_verify_32: crypto_verify_32,
                crypto_secretbox: crypto_secretbox,
                crypto_secretbox_open: crypto_secretbox_open,
                crypto_scalarmult: crypto_scalarmult,
                crypto_scalarmult_base: crypto_scalarmult_base,
                crypto_box_beforenm: crypto_box_beforenm,
                crypto_box_afternm: crypto_box_afternm,
                crypto_box: crypto_box,
                crypto_box_open: crypto_box_open,
                crypto_box_keypair: crypto_box_keypair,
                crypto_hash: crypto_hash,
                crypto_sign: crypto_sign,
                crypto_sign_keypair: crypto_sign_keypair,
                crypto_sign_open: crypto_sign_open,
                crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
                crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
                crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
                crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
                crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
                crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
                crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
                crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
                crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
                crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
                crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
                crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
                crypto_sign_BYTES: crypto_sign_BYTES,
                crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
                crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
                crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
                crypto_hash_BYTES: crypto_hash_BYTES
              };
              /* High-level API */

              function checkLengths(k, n) {
                if (k.length !== crypto_secretbox_KEYBYTES) throw new Error('bad key size');
                if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error('bad nonce size');
              }

              function checkBoxLengths(pk, sk) {
                if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error('bad public key size');
                if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
              }

              function checkArrayTypes() {
                for (var i = 0; i < arguments.length; i++) {
                  if (!(arguments[i] instanceof Uint8Array)) throw new TypeError('unexpected type, use Uint8Array');
                }
              }

              function cleanup(arr) {
                for (var i = 0; i < arr.length; i++) {
                  arr[i] = 0;
                }
              }

              nacl.randomBytes = function (n) {
                var b = new Uint8Array(n);
                randombytes(b, n);
                return b;
              };

              nacl.secretbox = function (msg, nonce, key) {
                checkArrayTypes(msg, nonce, key);
                checkLengths(key, nonce);
                var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
                var c = new Uint8Array(m.length);

                for (var i = 0; i < msg.length; i++) {
                  m[i + crypto_secretbox_ZEROBYTES] = msg[i];
                }

                crypto_secretbox(c, m, m.length, nonce, key);
                return c.subarray(crypto_secretbox_BOXZEROBYTES);
              };

              nacl.secretbox.open = function (box, nonce, key) {
                checkArrayTypes(box, nonce, key);
                checkLengths(key, nonce);
                var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
                var m = new Uint8Array(c.length);

                for (var i = 0; i < box.length; i++) {
                  c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
                }

                if (c.length < 32) return null;
                if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
                return m.subarray(crypto_secretbox_ZEROBYTES);
              };

              nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
              nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
              nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;

              nacl.scalarMult = function (n, p) {
                checkArrayTypes(n, p);
                if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
                if (p.length !== crypto_scalarmult_BYTES) throw new Error('bad p size');
                var q = new Uint8Array(crypto_scalarmult_BYTES);
                crypto_scalarmult(q, n, p);
                return q;
              };

              nacl.scalarMult.base = function (n) {
                checkArrayTypes(n);
                if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
                var q = new Uint8Array(crypto_scalarmult_BYTES);
                crypto_scalarmult_base(q, n);
                return q;
              };

              nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
              nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;

              nacl.box = function (msg, nonce, publicKey, secretKey) {
                var k = nacl.box.before(publicKey, secretKey);
                return nacl.secretbox(msg, nonce, k);
              };

              nacl.box.before = function (publicKey, secretKey) {
                checkArrayTypes(publicKey, secretKey);
                checkBoxLengths(publicKey, secretKey);
                var k = new Uint8Array(crypto_box_BEFORENMBYTES);
                crypto_box_beforenm(k, publicKey, secretKey);
                return k;
              };

              nacl.box.after = nacl.secretbox;

              nacl.box.open = function (msg, nonce, publicKey, secretKey) {
                var k = nacl.box.before(publicKey, secretKey);
                return nacl.secretbox.open(msg, nonce, k);
              };

              nacl.box.open.after = nacl.secretbox.open;

              nacl.box.keyPair = function () {
                var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
                var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
                crypto_box_keypair(pk, sk);
                return {
                  publicKey: pk,
                  secretKey: sk
                };
              };

              nacl.box.keyPair.fromSecretKey = function (secretKey) {
                checkArrayTypes(secretKey);
                if (secretKey.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
                var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
                crypto_scalarmult_base(pk, secretKey);
                return {
                  publicKey: pk,
                  secretKey: new Uint8Array(secretKey)
                };
              };

              nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
              nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
              nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
              nacl.box.nonceLength = crypto_box_NONCEBYTES;
              nacl.box.overheadLength = nacl.secretbox.overheadLength;

              nacl.sign = function (msg, secretKey) {
                checkArrayTypes(msg, secretKey);
                if (secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error('bad secret key size');
                var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
                crypto_sign(signedMsg, msg, msg.length, secretKey);
                return signedMsg;
              };

              nacl.sign.open = function (signedMsg, publicKey) {
                checkArrayTypes(signedMsg, publicKey);
                if (publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error('bad public key size');
                var tmp = new Uint8Array(signedMsg.length);
                var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
                if (mlen < 0) return null;
                var m = new Uint8Array(mlen);

                for (var i = 0; i < m.length; i++) {
                  m[i] = tmp[i];
                }

                return m;
              };

              nacl.sign.detached = function (msg, secretKey) {
                var signedMsg = nacl.sign(msg, secretKey);
                var sig = new Uint8Array(crypto_sign_BYTES);

                for (var i = 0; i < sig.length; i++) {
                  sig[i] = signedMsg[i];
                }

                return sig;
              };

              nacl.sign.detached.verify = function (msg, sig, publicKey) {
                checkArrayTypes(msg, sig, publicKey);
                if (sig.length !== crypto_sign_BYTES) throw new Error('bad signature size');
                if (publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error('bad public key size');
                var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
                var m = new Uint8Array(crypto_sign_BYTES + msg.length);
                var i;

                for (i = 0; i < crypto_sign_BYTES; i++) {
                  sm[i] = sig[i];
                }

                for (i = 0; i < msg.length; i++) {
                  sm[i + crypto_sign_BYTES] = msg[i];
                }

                return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
              };

              nacl.sign.keyPair = function () {
                var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
                var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
                crypto_sign_keypair(pk, sk);
                return {
                  publicKey: pk,
                  secretKey: sk
                };
              };

              nacl.sign.keyPair.fromSecretKey = function (secretKey) {
                checkArrayTypes(secretKey);
                if (secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error('bad secret key size');
                var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);

                for (var i = 0; i < pk.length; i++) {
                  pk[i] = secretKey[32 + i];
                }

                return {
                  publicKey: pk,
                  secretKey: new Uint8Array(secretKey)
                };
              };

              nacl.sign.keyPair.fromSeed = function (seed) {
                checkArrayTypes(seed);
                if (seed.length !== crypto_sign_SEEDBYTES) throw new Error('bad seed size');
                var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
                var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);

                for (var i = 0; i < 32; i++) {
                  sk[i] = seed[i];
                }

                crypto_sign_keypair(pk, sk, true);
                return {
                  publicKey: pk,
                  secretKey: sk
                };
              };

              nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
              nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
              nacl.sign.seedLength = crypto_sign_SEEDBYTES;
              nacl.sign.signatureLength = crypto_sign_BYTES;

              nacl.hash = function (msg) {
                checkArrayTypes(msg);
                var h = new Uint8Array(crypto_hash_BYTES);
                crypto_hash(h, msg, msg.length);
                return h;
              };

              nacl.hash.hashLength = crypto_hash_BYTES;

              nacl.verify = function (x, y) {
                checkArrayTypes(x, y); // Zero length arguments are considered not equal.

                if (x.length === 0 || y.length === 0) return false;
                if (x.length !== y.length) return false;
                return vn(x, 0, y, 0, x.length) === 0 ? true : false;
              };

              nacl.setPRNG = function (fn) {
                randombytes = fn;
              };

              (function () {
                // Initialize PRNG if environment provides CSPRNG.
                // If not, methods calling randombytes will throw.
                var crypto = typeof self !== 'undefined' ? self.crypto || self.msCrypto : null;

                if (crypto && crypto.getRandomValues) {
                  // Browsers.
                  var QUOTA = 65536;
                  nacl.setPRNG(function (x, n) {
                    var i,
                        v = new Uint8Array(n);

                    for (i = 0; i < n; i += QUOTA) {
                      crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
                    }

                    for (i = 0; i < n; i++) {
                      x[i] = v[i];
                    }

                    cleanup(v);
                  });
                } else if (true) {
                  // Node.js.
                  crypto = __webpack_require__(56);

                  if (crypto && crypto.randomBytes) {
                    nacl.setPRNG(function (x, n) {
                      var i,
                          v = crypto.randomBytes(n);

                      for (i = 0; i < n; i++) {
                        x[i] = v[i];
                      }

                      cleanup(v);
                    });
                  }
                }
              })();
            })(typeof module !== 'undefined' && module.exports ? module.exports : self.nacl = self.nacl || {});
            /***/

          },
          /* 56 */

          /***/
          function (module, exports) {
            /* (ignored) */

            /***/
          },
          /* 57 */

          /***/
          function (module, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */
            (function (Buffer) {
              // Written in 2014-2016 by Dmitry Chestnykh and Devi Mandiri.
              // Public domain.
              (function (root, f) {
                'use strict';

                if (typeof module !== 'undefined' && module.exports) module.exports = f();else if (root.nacl) root.nacl.util = f();else {
                  root.nacl = {};
                  root.nacl.util = f();
                }
              })(this, function () {
                'use strict';

                var util = {};

                function validateBase64(s) {
                  if (!/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(s)) {
                    throw new TypeError('invalid encoding');
                  }
                }

                util.decodeUTF8 = function (s) {
                  if (typeof s !== 'string') throw new TypeError('expected string');
                  var i,
                      d = unescape(encodeURIComponent(s)),
                      b = new Uint8Array(d.length);

                  for (i = 0; i < d.length; i++) {
                    b[i] = d.charCodeAt(i);
                  }

                  return b;
                };

                util.encodeUTF8 = function (arr) {
                  var i,
                      s = [];

                  for (i = 0; i < arr.length; i++) {
                    s.push(String.fromCharCode(arr[i]));
                  }

                  return decodeURIComponent(escape(s.join('')));
                };

                if (typeof atob === 'undefined') {
                  // Node.js
                  if (typeof Buffer.from !== 'undefined') {
                    // Node v6 and later
                    util.encodeBase64 = function (arr) {
                      // v6 and later
                      return Buffer.from(arr).toString('base64');
                    };

                    util.decodeBase64 = function (s) {
                      validateBase64(s);
                      return new Uint8Array(Array.prototype.slice.call(Buffer.from(s, 'base64'), 0));
                    };
                  } else {
                    // Node earlier than v6
                    util.encodeBase64 = function (arr) {
                      // v6 and later
                      return new Buffer(arr).toString('base64');
                    };

                    util.decodeBase64 = function (s) {
                      validateBase64(s);
                      return new Uint8Array(Array.prototype.slice.call(new Buffer(s, 'base64'), 0));
                    };
                  }
                } else {
                  // Browsers
                  util.encodeBase64 = function (arr) {
                    var i,
                        s = [],
                        len = arr.length;

                    for (i = 0; i < len; i++) {
                      s.push(String.fromCharCode(arr[i]));
                    }

                    return btoa(s.join(''));
                  };

                  util.decodeBase64 = function (s) {
                    validateBase64(s);
                    var i,
                        d = atob(s),
                        b = new Uint8Array(d.length);

                    for (i = 0; i < d.length; i++) {
                      b[i] = d.charCodeAt(i);
                    }

                    return b;
                  };
                }

                return util;
              });
              /* WEBPACK VAR INJECTION */

            }).call(exports, __webpack_require__(58).Buffer);
            /***/
          },
          /* 58 */

          /***/
          function (module, exports, __webpack_require__) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */

            /* eslint-disable no-proto */
            'use strict';

            var base64 = __webpack_require__(59);

            var ieee754 = __webpack_require__(60);

            var isArray = __webpack_require__(61);

            exports.Buffer = Buffer;
            exports.SlowBuffer = SlowBuffer;
            exports.INSPECT_MAX_BYTES = 50;
            /**
             * If `Buffer.TYPED_ARRAY_SUPPORT`:
             *   === true    Use Uint8Array implementation (fastest)
             *   === false   Use Object implementation (most compatible, even IE6)
             *
             * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
             * Opera 11.6+, iOS 4.2+.
             *
             * Due to various browser bugs, sometimes the Object implementation will be used even
             * when the browser supports typed arrays.
             *
             * Note:
             *
             *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
             *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
             *
             *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
             *
             *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
             *     incorrect length in some situations.
            	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
             * get the Object implementation, which is slower but behaves correctly.
             */

            Buffer.TYPED_ARRAY_SUPPORT = window.TYPED_ARRAY_SUPPORT !== undefined ? window.TYPED_ARRAY_SUPPORT : typedArraySupport();
            /*
             * Export kMaxLength after typed array support is determined.
             */

            exports.kMaxLength = kMaxLength();

            function typedArraySupport() {
              try {
                var arr = new Uint8Array(1);
                arr.__proto__ = {
                  __proto__: Uint8Array.prototype,
                  foo: function foo() {
                    return 42;
                  }
                };
                return arr.foo() === 42 && // typed array instances can be augmented
                typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
                arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
              } catch (e) {
                return false;
              }
            }

            function kMaxLength() {
              return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
            }

            function createBuffer(that, length) {
              if (kMaxLength() < length) {
                throw new RangeError('Invalid typed array length');
              }

              if (Buffer.TYPED_ARRAY_SUPPORT) {
                // Return an augmented `Uint8Array` instance, for best performance
                that = new Uint8Array(length);
                that.__proto__ = Buffer.prototype;
              } else {
                // Fallback: Return an object instance of the Buffer class
                if (that === null) {
                  that = new Buffer(length);
                }

                that.length = length;
              }

              return that;
            }
            /**
             * The Buffer constructor returns instances of `Uint8Array` that have their
             * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
             * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
             * and the `Uint8Array` methods. Square bracket notation works as expected -- it
             * returns a single octet.
             *
             * The `Uint8Array` prototype remains unmodified.
             */


            function Buffer(arg, encodingOrOffset, length) {
              if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
                return new Buffer(arg, encodingOrOffset, length);
              } // Common case.


              if (typeof arg === 'number') {
                if (typeof encodingOrOffset === 'string') {
                  throw new Error('If encoding is specified then the first argument must be a string');
                }

                return allocUnsafe(this, arg);
              }

              return from(this, arg, encodingOrOffset, length);
            }

            Buffer.poolSize = 8192; // not used by this implementation
            // TODO: Legacy, not needed anymore. Remove in next major version.

            Buffer._augment = function (arr) {
              arr.__proto__ = Buffer.prototype;
              return arr;
            };

            function from(that, value, encodingOrOffset, length) {
              if (typeof value === 'number') {
                throw new TypeError('"value" argument must not be a number');
              }

              if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
                return fromArrayBuffer(that, value, encodingOrOffset, length);
              }

              if (typeof value === 'string') {
                return fromString(that, value, encodingOrOffset);
              }

              return fromObject(that, value);
            }
            /**
             * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
             * if value is a number.
             * Buffer.from(str[, encoding])
             * Buffer.from(array)
             * Buffer.from(buffer)
             * Buffer.from(arrayBuffer[, byteOffset[, length]])
             **/


            Buffer.from = function (value, encodingOrOffset, length) {
              return from(null, value, encodingOrOffset, length);
            };

            if (Buffer.TYPED_ARRAY_SUPPORT) {
              Buffer.prototype.__proto__ = Uint8Array.prototype;
              Buffer.__proto__ = Uint8Array;

              if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
                // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
                Object.defineProperty(Buffer, Symbol.species, {
                  value: null,
                  configurable: true
                });
              }
            }

            function assertSize(size) {
              if (typeof size !== 'number') {
                throw new TypeError('"size" argument must be a number');
              } else if (size < 0) {
                throw new RangeError('"size" argument must not be negative');
              }
            }

            function alloc(that, size, fill, encoding) {
              assertSize(size);

              if (size <= 0) {
                return createBuffer(that, size);
              }

              if (fill !== undefined) {
                // Only pay attention to encoding if it's a string. This
                // prevents accidentally sending in a number that would
                // be interpretted as a start offset.
                return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
              }

              return createBuffer(that, size);
            }
            /**
             * Creates a new filled Buffer instance.
             * alloc(size[, fill[, encoding]])
             **/


            Buffer.alloc = function (size, fill, encoding) {
              return alloc(null, size, fill, encoding);
            };

            function allocUnsafe(that, size) {
              assertSize(size);
              that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

              if (!Buffer.TYPED_ARRAY_SUPPORT) {
                for (var i = 0; i < size; ++i) {
                  that[i] = 0;
                }
              }

              return that;
            }
            /**
             * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
             * */


            Buffer.allocUnsafe = function (size) {
              return allocUnsafe(null, size);
            };
            /**
             * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
             */


            Buffer.allocUnsafeSlow = function (size) {
              return allocUnsafe(null, size);
            };

            function fromString(that, string, encoding) {
              if (typeof encoding !== 'string' || encoding === '') {
                encoding = 'utf8';
              }

              if (!Buffer.isEncoding(encoding)) {
                throw new TypeError('"encoding" must be a valid string encoding');
              }

              var length = byteLength(string, encoding) | 0;
              that = createBuffer(that, length);
              var actual = that.write(string, encoding);

              if (actual !== length) {
                // Writing a hex string, for example, that contains invalid characters will
                // cause everything after the first invalid character to be ignored. (e.g.
                // 'abxxcd' will be treated as 'ab')
                that = that.slice(0, actual);
              }

              return that;
            }

            function fromArrayLike(that, array) {
              var length = array.length < 0 ? 0 : checked(array.length) | 0;
              that = createBuffer(that, length);

              for (var i = 0; i < length; i += 1) {
                that[i] = array[i] & 255;
              }

              return that;
            }

            function fromArrayBuffer(that, array, byteOffset, length) {
              array.byteLength; // this throws if `array` is not a valid ArrayBuffer

              if (byteOffset < 0 || array.byteLength < byteOffset) {
                throw new RangeError('\'offset\' is out of bounds');
              }

              if (array.byteLength < byteOffset + (length || 0)) {
                throw new RangeError('\'length\' is out of bounds');
              }

              if (byteOffset === undefined && length === undefined) {
                array = new Uint8Array(array);
              } else if (length === undefined) {
                array = new Uint8Array(array, byteOffset);
              } else {
                array = new Uint8Array(array, byteOffset, length);
              }

              if (Buffer.TYPED_ARRAY_SUPPORT) {
                // Return an augmented `Uint8Array` instance, for best performance
                that = array;
                that.__proto__ = Buffer.prototype;
              } else {
                // Fallback: Return an object instance of the Buffer class
                that = fromArrayLike(that, array);
              }

              return that;
            }

            function fromObject(that, obj) {
              if (Buffer.isBuffer(obj)) {
                var len = checked(obj.length) | 0;
                that = createBuffer(that, len);

                if (that.length === 0) {
                  return that;
                }

                obj.copy(that, 0, 0, len);
                return that;
              }

              if (obj) {
                if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
                  if (typeof obj.length !== 'number' || isnan(obj.length)) {
                    return createBuffer(that, 0);
                  }

                  return fromArrayLike(that, obj);
                }

                if (obj.type === 'Buffer' && isArray(obj.data)) {
                  return fromArrayLike(that, obj.data);
                }
              }

              throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
            }

            function checked(length) {
              // Note: cannot use `length < kMaxLength()` here because that fails when
              // length is NaN (which is otherwise coerced to zero.)
              if (length >= kMaxLength()) {
                throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
              }

              return length | 0;
            }

            function SlowBuffer(length) {
              if (+length != length) {
                // eslint-disable-line eqeqeq
                length = 0;
              }

              return Buffer.alloc(+length);
            }

            Buffer.isBuffer = function isBuffer(b) {
              return !!(b != null && b._isBuffer);
            };

            Buffer.compare = function compare(a, b) {
              if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
                throw new TypeError('Arguments must be Buffers');
              }

              if (a === b) return 0;
              var x = a.length;
              var y = b.length;

              for (var i = 0, len = Math.min(x, y); i < len; ++i) {
                if (a[i] !== b[i]) {
                  x = a[i];
                  y = b[i];
                  break;
                }
              }

              if (x < y) return -1;
              if (y < x) return 1;
              return 0;
            };

            Buffer.isEncoding = function isEncoding(encoding) {
              switch (String(encoding).toLowerCase()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'latin1':
                case 'binary':
                case 'base64':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return true;

                default:
                  return false;
              }
            };

            Buffer.concat = function concat(list, length) {
              if (!isArray(list)) {
                throw new TypeError('"list" argument must be an Array of Buffers');
              }

              if (list.length === 0) {
                return Buffer.alloc(0);
              }

              var i;

              if (length === undefined) {
                length = 0;

                for (i = 0; i < list.length; ++i) {
                  length += list[i].length;
                }
              }

              var buffer = Buffer.allocUnsafe(length);
              var pos = 0;

              for (i = 0; i < list.length; ++i) {
                var buf = list[i];

                if (!Buffer.isBuffer(buf)) {
                  throw new TypeError('"list" argument must be an Array of Buffers');
                }

                buf.copy(buffer, pos);
                pos += buf.length;
              }

              return buffer;
            };

            function byteLength(string, encoding) {
              if (Buffer.isBuffer(string)) {
                return string.length;
              }

              if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
                return string.byteLength;
              }

              if (typeof string !== 'string') {
                string = '' + string;
              }

              var len = string.length;
              if (len === 0) return 0; // Use a for loop to avoid recursion

              var loweredCase = false;

              for (;;) {
                switch (encoding) {
                  case 'ascii':
                  case 'latin1':
                  case 'binary':
                    return len;

                  case 'utf8':
                  case 'utf-8':
                  case undefined:
                    return utf8ToBytes(string).length;

                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return len * 2;

                  case 'hex':
                    return len >>> 1;

                  case 'base64':
                    return base64ToBytes(string).length;

                  default:
                    if (loweredCase) return utf8ToBytes(string).length; // assume utf8

                    encoding = ('' + encoding).toLowerCase();
                    loweredCase = true;
                }
              }
            }

            Buffer.byteLength = byteLength;

            function slowToString(encoding, start, end) {
              var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
              // property of a typed array.
              // This behaves neither like String nor Uint8Array in that we set start/end
              // to their upper/lower bounds if the value passed is out of range.
              // undefined is handled specially as per ECMA-262 6th Edition,
              // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

              if (start === undefined || start < 0) {
                start = 0;
              } // Return early if start > this.length. Done here to prevent potential uint32
              // coercion fail below.


              if (start > this.length) {
                return '';
              }

              if (end === undefined || end > this.length) {
                end = this.length;
              }

              if (end <= 0) {
                return '';
              } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


              end >>>= 0;
              start >>>= 0;

              if (end <= start) {
                return '';
              }

              if (!encoding) encoding = 'utf8';

              while (true) {
                switch (encoding) {
                  case 'hex':
                    return hexSlice(this, start, end);

                  case 'utf8':
                  case 'utf-8':
                    return utf8Slice(this, start, end);

                  case 'ascii':
                    return asciiSlice(this, start, end);

                  case 'latin1':
                  case 'binary':
                    return latin1Slice(this, start, end);

                  case 'base64':
                    return base64Slice(this, start, end);

                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return utf16leSlice(this, start, end);

                  default:
                    if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                    encoding = (encoding + '').toLowerCase();
                    loweredCase = true;
                }
              }
            } // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
            // Buffer instances.


            Buffer.prototype._isBuffer = true;

            function swap(b, n, m) {
              var i = b[n];
              b[n] = b[m];
              b[m] = i;
            }

            Buffer.prototype.swap16 = function swap16() {
              var len = this.length;

              if (len % 2 !== 0) {
                throw new RangeError('Buffer size must be a multiple of 16-bits');
              }

              for (var i = 0; i < len; i += 2) {
                swap(this, i, i + 1);
              }

              return this;
            };

            Buffer.prototype.swap32 = function swap32() {
              var len = this.length;

              if (len % 4 !== 0) {
                throw new RangeError('Buffer size must be a multiple of 32-bits');
              }

              for (var i = 0; i < len; i += 4) {
                swap(this, i, i + 3);
                swap(this, i + 1, i + 2);
              }

              return this;
            };

            Buffer.prototype.swap64 = function swap64() {
              var len = this.length;

              if (len % 8 !== 0) {
                throw new RangeError('Buffer size must be a multiple of 64-bits');
              }

              for (var i = 0; i < len; i += 8) {
                swap(this, i, i + 7);
                swap(this, i + 1, i + 6);
                swap(this, i + 2, i + 5);
                swap(this, i + 3, i + 4);
              }

              return this;
            };

            Buffer.prototype.toString = function toString() {
              var length = this.length | 0;
              if (length === 0) return '';
              if (arguments.length === 0) return utf8Slice(this, 0, length);
              return slowToString.apply(this, arguments);
            };

            Buffer.prototype.equals = function equals(b) {
              if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
              if (this === b) return true;
              return Buffer.compare(this, b) === 0;
            };

            Buffer.prototype.inspect = function inspect() {
              var str = '';
              var max = exports.INSPECT_MAX_BYTES;

              if (this.length > 0) {
                str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
                if (this.length > max) str += ' ... ';
              }

              return '<Buffer ' + str + '>';
            };

            Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
              if (!Buffer.isBuffer(target)) {
                throw new TypeError('Argument must be a Buffer');
              }

              if (start === undefined) {
                start = 0;
              }

              if (end === undefined) {
                end = target ? target.length : 0;
              }

              if (thisStart === undefined) {
                thisStart = 0;
              }

              if (thisEnd === undefined) {
                thisEnd = this.length;
              }

              if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
                throw new RangeError('out of range index');
              }

              if (thisStart >= thisEnd && start >= end) {
                return 0;
              }

              if (thisStart >= thisEnd) {
                return -1;
              }

              if (start >= end) {
                return 1;
              }

              start >>>= 0;
              end >>>= 0;
              thisStart >>>= 0;
              thisEnd >>>= 0;
              if (this === target) return 0;
              var x = thisEnd - thisStart;
              var y = end - start;
              var len = Math.min(x, y);
              var thisCopy = this.slice(thisStart, thisEnd);
              var targetCopy = target.slice(start, end);

              for (var i = 0; i < len; ++i) {
                if (thisCopy[i] !== targetCopy[i]) {
                  x = thisCopy[i];
                  y = targetCopy[i];
                  break;
                }
              }

              if (x < y) return -1;
              if (y < x) return 1;
              return 0;
            }; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
            // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
            //
            // Arguments:
            // - buffer - a Buffer to search
            // - val - a string, Buffer, or number
            // - byteOffset - an index into `buffer`; will be clamped to an int32
            // - encoding - an optional encoding, relevant is val is a string
            // - dir - true for indexOf, false for lastIndexOf


            function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
              // Empty buffer means no match
              if (buffer.length === 0) return -1; // Normalize byteOffset

              if (typeof byteOffset === 'string') {
                encoding = byteOffset;
                byteOffset = 0;
              } else if (byteOffset > 0x7fffffff) {
                byteOffset = 0x7fffffff;
              } else if (byteOffset < -0x80000000) {
                byteOffset = -0x80000000;
              }

              byteOffset = +byteOffset; // Coerce to Number.

              if (isNaN(byteOffset)) {
                // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
                byteOffset = dir ? 0 : buffer.length - 1;
              } // Normalize byteOffset: negative offsets start from the end of the buffer


              if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

              if (byteOffset >= buffer.length) {
                if (dir) return -1;else byteOffset = buffer.length - 1;
              } else if (byteOffset < 0) {
                if (dir) byteOffset = 0;else return -1;
              } // Normalize val


              if (typeof val === 'string') {
                val = Buffer.from(val, encoding);
              } // Finally, search either indexOf (if dir is true) or lastIndexOf


              if (Buffer.isBuffer(val)) {
                // Special case: looking for empty string/buffer always fails
                if (val.length === 0) {
                  return -1;
                }

                return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
              } else if (typeof val === 'number') {
                val = val & 0xFF; // Search for a byte value [0-255]

                if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
                  if (dir) {
                    return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
                  } else {
                    return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                  }
                }

                return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
              }

              throw new TypeError('val must be string, number or Buffer');
            }

            function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
              var indexSize = 1;
              var arrLength = arr.length;
              var valLength = val.length;

              if (encoding !== undefined) {
                encoding = String(encoding).toLowerCase();

                if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
                  if (arr.length < 2 || val.length < 2) {
                    return -1;
                  }

                  indexSize = 2;
                  arrLength /= 2;
                  valLength /= 2;
                  byteOffset /= 2;
                }
              }

              function read(buf, i) {
                if (indexSize === 1) {
                  return buf[i];
                } else {
                  return buf.readUInt16BE(i * indexSize);
                }
              }

              var i;

              if (dir) {
                var foundIndex = -1;

                for (i = byteOffset; i < arrLength; i++) {
                  if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                    if (foundIndex === -1) foundIndex = i;
                    if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                  } else {
                    if (foundIndex !== -1) i -= i - foundIndex;
                    foundIndex = -1;
                  }
                }
              } else {
                if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

                for (i = byteOffset; i >= 0; i--) {
                  var found = true;

                  for (var j = 0; j < valLength; j++) {
                    if (read(arr, i + j) !== read(val, j)) {
                      found = false;
                      break;
                    }
                  }

                  if (found) return i;
                }
              }

              return -1;
            }

            Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
              return this.indexOf(val, byteOffset, encoding) !== -1;
            };

            Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
              return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
            };

            Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
              return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
            };

            function hexWrite(buf, string, offset, length) {
              offset = Number(offset) || 0;
              var remaining = buf.length - offset;

              if (!length) {
                length = remaining;
              } else {
                length = Number(length);

                if (length > remaining) {
                  length = remaining;
                }
              } // must be an even number of digits


              var strLen = string.length;
              if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

              if (length > strLen / 2) {
                length = strLen / 2;
              }

              for (var i = 0; i < length; ++i) {
                var parsed = parseInt(string.substr(i * 2, 2), 16);
                if (isNaN(parsed)) return i;
                buf[offset + i] = parsed;
              }

              return i;
            }

            function utf8Write(buf, string, offset, length) {
              return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
            }

            function asciiWrite(buf, string, offset, length) {
              return blitBuffer(asciiToBytes(string), buf, offset, length);
            }

            function latin1Write(buf, string, offset, length) {
              return asciiWrite(buf, string, offset, length);
            }

            function base64Write(buf, string, offset, length) {
              return blitBuffer(base64ToBytes(string), buf, offset, length);
            }

            function ucs2Write(buf, string, offset, length) {
              return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
            }

            Buffer.prototype.write = function write(string, offset, length, encoding) {
              // Buffer#write(string)
              if (offset === undefined) {
                encoding = 'utf8';
                length = this.length;
                offset = 0; // Buffer#write(string, encoding)
              } else if (length === undefined && typeof offset === 'string') {
                encoding = offset;
                length = this.length;
                offset = 0; // Buffer#write(string, offset[, length][, encoding])
              } else if (isFinite(offset)) {
                offset = offset | 0;

                if (isFinite(length)) {
                  length = length | 0;
                  if (encoding === undefined) encoding = 'utf8';
                } else {
                  encoding = length;
                  length = undefined;
                } // legacy write(string, encoding, offset, length) - remove in v0.13

              } else {
                throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
              }

              var remaining = this.length - offset;
              if (length === undefined || length > remaining) length = remaining;

              if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
                throw new RangeError('Attempt to write outside buffer bounds');
              }

              if (!encoding) encoding = 'utf8';
              var loweredCase = false;

              for (;;) {
                switch (encoding) {
                  case 'hex':
                    return hexWrite(this, string, offset, length);

                  case 'utf8':
                  case 'utf-8':
                    return utf8Write(this, string, offset, length);

                  case 'ascii':
                    return asciiWrite(this, string, offset, length);

                  case 'latin1':
                  case 'binary':
                    return latin1Write(this, string, offset, length);

                  case 'base64':
                    // Warning: maxLength not taken into account in base64Write
                    return base64Write(this, string, offset, length);

                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return ucs2Write(this, string, offset, length);

                  default:
                    if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                    encoding = ('' + encoding).toLowerCase();
                    loweredCase = true;
                }
              }
            };

            Buffer.prototype.toJSON = function toJSON() {
              return {
                type: 'Buffer',
                data: Array.prototype.slice.call(this._arr || this, 0)
              };
            };

            function base64Slice(buf, start, end) {
              if (start === 0 && end === buf.length) {
                return base64.fromByteArray(buf);
              } else {
                return base64.fromByteArray(buf.slice(start, end));
              }
            }

            function utf8Slice(buf, start, end) {
              end = Math.min(buf.length, end);
              var res = [];
              var i = start;

              while (i < end) {
                var firstByte = buf[i];
                var codePoint = null;
                var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

                if (i + bytesPerSequence <= end) {
                  var secondByte, thirdByte, fourthByte, tempCodePoint;

                  switch (bytesPerSequence) {
                    case 1:
                      if (firstByte < 0x80) {
                        codePoint = firstByte;
                      }

                      break;

                    case 2:
                      secondByte = buf[i + 1];

                      if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

                        if (tempCodePoint > 0x7F) {
                          codePoint = tempCodePoint;
                        }
                      }

                      break;

                    case 3:
                      secondByte = buf[i + 1];
                      thirdByte = buf[i + 2];

                      if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                          codePoint = tempCodePoint;
                        }
                      }

                      break;

                    case 4:
                      secondByte = buf[i + 1];
                      thirdByte = buf[i + 2];
                      fourthByte = buf[i + 3];

                      if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                          codePoint = tempCodePoint;
                        }
                      }

                  }
                }

                if (codePoint === null) {
                  // we did not generate a valid codePoint so insert a
                  // replacement char (U+FFFD) and advance only 1 byte
                  codePoint = 0xFFFD;
                  bytesPerSequence = 1;
                } else if (codePoint > 0xFFFF) {
                  // encode to utf16 (surrogate pair dance)
                  codePoint -= 0x10000;
                  res.push(codePoint >>> 10 & 0x3FF | 0xD800);
                  codePoint = 0xDC00 | codePoint & 0x3FF;
                }

                res.push(codePoint);
                i += bytesPerSequence;
              }

              return decodeCodePointsArray(res);
            } // Based on http://stackoverflow.com/a/22747272/680742, the browser with
            // the lowest limit is Chrome, with 0x10000 args.
            // We go 1 magnitude less, for safety


            var MAX_ARGUMENTS_LENGTH = 0x1000;

            function decodeCodePointsArray(codePoints) {
              var len = codePoints.length;

              if (len <= MAX_ARGUMENTS_LENGTH) {
                return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
              } // Decode in chunks to avoid "call stack size exceeded".


              var res = '';
              var i = 0;

              while (i < len) {
                res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
              }

              return res;
            }

            function asciiSlice(buf, start, end) {
              var ret = '';
              end = Math.min(buf.length, end);

              for (var i = start; i < end; ++i) {
                ret += String.fromCharCode(buf[i] & 0x7F);
              }

              return ret;
            }

            function latin1Slice(buf, start, end) {
              var ret = '';
              end = Math.min(buf.length, end);

              for (var i = start; i < end; ++i) {
                ret += String.fromCharCode(buf[i]);
              }

              return ret;
            }

            function hexSlice(buf, start, end) {
              var len = buf.length;
              if (!start || start < 0) start = 0;
              if (!end || end < 0 || end > len) end = len;
              var out = '';

              for (var i = start; i < end; ++i) {
                out += toHex(buf[i]);
              }

              return out;
            }

            function utf16leSlice(buf, start, end) {
              var bytes = buf.slice(start, end);
              var res = '';

              for (var i = 0; i < bytes.length; i += 2) {
                res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
              }

              return res;
            }

            Buffer.prototype.slice = function slice(start, end) {
              var len = this.length;
              start = ~~start;
              end = end === undefined ? len : ~~end;

              if (start < 0) {
                start += len;
                if (start < 0) start = 0;
              } else if (start > len) {
                start = len;
              }

              if (end < 0) {
                end += len;
                if (end < 0) end = 0;
              } else if (end > len) {
                end = len;
              }

              if (end < start) end = start;
              var newBuf;

              if (Buffer.TYPED_ARRAY_SUPPORT) {
                newBuf = this.subarray(start, end);
                newBuf.__proto__ = Buffer.prototype;
              } else {
                var sliceLen = end - start;
                newBuf = new Buffer(sliceLen, undefined);

                for (var i = 0; i < sliceLen; ++i) {
                  newBuf[i] = this[i + start];
                }
              }

              return newBuf;
            };
            /*
             * Need to make sure that buffer isn't trying to write out of bounds.
             */


            function checkOffset(offset, ext, length) {
              if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
              if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
            }

            Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
              offset = offset | 0;
              byteLength = byteLength | 0;
              if (!noAssert) checkOffset(offset, byteLength, this.length);
              var val = this[offset];
              var mul = 1;
              var i = 0;

              while (++i < byteLength && (mul *= 0x100)) {
                val += this[offset + i] * mul;
              }

              return val;
            };

            Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
              offset = offset | 0;
              byteLength = byteLength | 0;

              if (!noAssert) {
                checkOffset(offset, byteLength, this.length);
              }

              var val = this[offset + --byteLength];
              var mul = 1;

              while (byteLength > 0 && (mul *= 0x100)) {
                val += this[offset + --byteLength] * mul;
              }

              return val;
            };

            Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
              if (!noAssert) checkOffset(offset, 1, this.length);
              return this[offset];
            };

            Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
              if (!noAssert) checkOffset(offset, 2, this.length);
              return this[offset] | this[offset + 1] << 8;
            };

            Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
              if (!noAssert) checkOffset(offset, 2, this.length);
              return this[offset] << 8 | this[offset + 1];
            };

            Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
              if (!noAssert) checkOffset(offset, 4, this.length);
              return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
            };

            Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
              if (!noAssert) checkOffset(offset, 4, this.length);
              return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
            };

            Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
              offset = offset | 0;
              byteLength = byteLength | 0;
              if (!noAssert) checkOffset(offset, byteLength, this.length);
              var val = this[offset];
              var mul = 1;
              var i = 0;

              while (++i < byteLength && (mul *= 0x100)) {
                val += this[offset + i] * mul;
              }

              mul *= 0x80;
              if (val >= mul) val -= Math.pow(2, 8 * byteLength);
              return val;
            };

            Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
              offset = offset | 0;
              byteLength = byteLength | 0;
              if (!noAssert) checkOffset(offset, byteLength, this.length);
              var i = byteLength;
              var mul = 1;
              var val = this[offset + --i];

              while (i > 0 && (mul *= 0x100)) {
                val += this[offset + --i] * mul;
              }

              mul *= 0x80;
              if (val >= mul) val -= Math.pow(2, 8 * byteLength);
              return val;
            };

            Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
              if (!noAssert) checkOffset(offset, 1, this.length);
              if (!(this[offset] & 0x80)) return this[offset];
              return (0xff - this[offset] + 1) * -1;
            };

            Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
              if (!noAssert) checkOffset(offset, 2, this.length);
              var val = this[offset] | this[offset + 1] << 8;
              return val & 0x8000 ? val | 0xFFFF0000 : val;
            };

            Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
              if (!noAssert) checkOffset(offset, 2, this.length);
              var val = this[offset + 1] | this[offset] << 8;
              return val & 0x8000 ? val | 0xFFFF0000 : val;
            };

            Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
              if (!noAssert) checkOffset(offset, 4, this.length);
              return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
            };

            Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
              if (!noAssert) checkOffset(offset, 4, this.length);
              return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
            };

            Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
              if (!noAssert) checkOffset(offset, 4, this.length);
              return ieee754.read(this, offset, true, 23, 4);
            };

            Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
              if (!noAssert) checkOffset(offset, 4, this.length);
              return ieee754.read(this, offset, false, 23, 4);
            };

            Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
              if (!noAssert) checkOffset(offset, 8, this.length);
              return ieee754.read(this, offset, true, 52, 8);
            };

            Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
              if (!noAssert) checkOffset(offset, 8, this.length);
              return ieee754.read(this, offset, false, 52, 8);
            };

            function checkInt(buf, value, offset, ext, max, min) {
              if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
              if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
              if (offset + ext > buf.length) throw new RangeError('Index out of range');
            }

            Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
              value = +value;
              offset = offset | 0;
              byteLength = byteLength | 0;

              if (!noAssert) {
                var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                checkInt(this, value, offset, byteLength, maxBytes, 0);
              }

              var mul = 1;
              var i = 0;
              this[offset] = value & 0xFF;

              while (++i < byteLength && (mul *= 0x100)) {
                this[offset + i] = value / mul & 0xFF;
              }

              return offset + byteLength;
            };

            Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
              value = +value;
              offset = offset | 0;
              byteLength = byteLength | 0;

              if (!noAssert) {
                var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                checkInt(this, value, offset, byteLength, maxBytes, 0);
              }

              var i = byteLength - 1;
              var mul = 1;
              this[offset + i] = value & 0xFF;

              while (--i >= 0 && (mul *= 0x100)) {
                this[offset + i] = value / mul & 0xFF;
              }

              return offset + byteLength;
            };

            Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
              if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
              this[offset] = value & 0xff;
              return offset + 1;
            };

            function objectWriteUInt16(buf, value, offset, littleEndian) {
              if (value < 0) value = 0xffff + value + 1;

              for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
                buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
              }
            }

            Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

              if (Buffer.TYPED_ARRAY_SUPPORT) {
                this[offset] = value & 0xff;
                this[offset + 1] = value >>> 8;
              } else {
                objectWriteUInt16(this, value, offset, true);
              }

              return offset + 2;
            };

            Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

              if (Buffer.TYPED_ARRAY_SUPPORT) {
                this[offset] = value >>> 8;
                this[offset + 1] = value & 0xff;
              } else {
                objectWriteUInt16(this, value, offset, false);
              }

              return offset + 2;
            };

            function objectWriteUInt32(buf, value, offset, littleEndian) {
              if (value < 0) value = 0xffffffff + value + 1;

              for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
                buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
              }
            }

            Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

              if (Buffer.TYPED_ARRAY_SUPPORT) {
                this[offset + 3] = value >>> 24;
                this[offset + 2] = value >>> 16;
                this[offset + 1] = value >>> 8;
                this[offset] = value & 0xff;
              } else {
                objectWriteUInt32(this, value, offset, true);
              }

              return offset + 4;
            };

            Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

              if (Buffer.TYPED_ARRAY_SUPPORT) {
                this[offset] = value >>> 24;
                this[offset + 1] = value >>> 16;
                this[offset + 2] = value >>> 8;
                this[offset + 3] = value & 0xff;
              } else {
                objectWriteUInt32(this, value, offset, false);
              }

              return offset + 4;
            };

            Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
              value = +value;
              offset = offset | 0;

              if (!noAssert) {
                var limit = Math.pow(2, 8 * byteLength - 1);
                checkInt(this, value, offset, byteLength, limit - 1, -limit);
              }

              var i = 0;
              var mul = 1;
              var sub = 0;
              this[offset] = value & 0xFF;

              while (++i < byteLength && (mul *= 0x100)) {
                if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
                  sub = 1;
                }

                this[offset + i] = (value / mul >> 0) - sub & 0xFF;
              }

              return offset + byteLength;
            };

            Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
              value = +value;
              offset = offset | 0;

              if (!noAssert) {
                var limit = Math.pow(2, 8 * byteLength - 1);
                checkInt(this, value, offset, byteLength, limit - 1, -limit);
              }

              var i = byteLength - 1;
              var mul = 1;
              var sub = 0;
              this[offset + i] = value & 0xFF;

              while (--i >= 0 && (mul *= 0x100)) {
                if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
                  sub = 1;
                }

                this[offset + i] = (value / mul >> 0) - sub & 0xFF;
              }

              return offset + byteLength;
            };

            Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
              if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
              if (value < 0) value = 0xff + value + 1;
              this[offset] = value & 0xff;
              return offset + 1;
            };

            Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

              if (Buffer.TYPED_ARRAY_SUPPORT) {
                this[offset] = value & 0xff;
                this[offset + 1] = value >>> 8;
              } else {
                objectWriteUInt16(this, value, offset, true);
              }

              return offset + 2;
            };

            Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

              if (Buffer.TYPED_ARRAY_SUPPORT) {
                this[offset] = value >>> 8;
                this[offset + 1] = value & 0xff;
              } else {
                objectWriteUInt16(this, value, offset, false);
              }

              return offset + 2;
            };

            Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

              if (Buffer.TYPED_ARRAY_SUPPORT) {
                this[offset] = value & 0xff;
                this[offset + 1] = value >>> 8;
                this[offset + 2] = value >>> 16;
                this[offset + 3] = value >>> 24;
              } else {
                objectWriteUInt32(this, value, offset, true);
              }

              return offset + 4;
            };

            Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
              value = +value;
              offset = offset | 0;
              if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
              if (value < 0) value = 0xffffffff + value + 1;

              if (Buffer.TYPED_ARRAY_SUPPORT) {
                this[offset] = value >>> 24;
                this[offset + 1] = value >>> 16;
                this[offset + 2] = value >>> 8;
                this[offset + 3] = value & 0xff;
              } else {
                objectWriteUInt32(this, value, offset, false);
              }

              return offset + 4;
            };

            function checkIEEE754(buf, value, offset, ext, max, min) {
              if (offset + ext > buf.length) throw new RangeError('Index out of range');
              if (offset < 0) throw new RangeError('Index out of range');
            }

            function writeFloat(buf, value, offset, littleEndian, noAssert) {
              if (!noAssert) {
                checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
              }

              ieee754.write(buf, value, offset, littleEndian, 23, 4);
              return offset + 4;
            }

            Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
              return writeFloat(this, value, offset, true, noAssert);
            };

            Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
              return writeFloat(this, value, offset, false, noAssert);
            };

            function writeDouble(buf, value, offset, littleEndian, noAssert) {
              if (!noAssert) {
                checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
              }

              ieee754.write(buf, value, offset, littleEndian, 52, 8);
              return offset + 8;
            }

            Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
              return writeDouble(this, value, offset, true, noAssert);
            };

            Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
              return writeDouble(this, value, offset, false, noAssert);
            }; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


            Buffer.prototype.copy = function copy(target, targetStart, start, end) {
              if (!start) start = 0;
              if (!end && end !== 0) end = this.length;
              if (targetStart >= target.length) targetStart = target.length;
              if (!targetStart) targetStart = 0;
              if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

              if (end === start) return 0;
              if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

              if (targetStart < 0) {
                throw new RangeError('targetStart out of bounds');
              }

              if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
              if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

              if (end > this.length) end = this.length;

              if (target.length - targetStart < end - start) {
                end = target.length - targetStart + start;
              }

              var len = end - start;
              var i;

              if (this === target && start < targetStart && targetStart < end) {
                // descending copy from end
                for (i = len - 1; i >= 0; --i) {
                  target[i + targetStart] = this[i + start];
                }
              } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
                // ascending copy from start
                for (i = 0; i < len; ++i) {
                  target[i + targetStart] = this[i + start];
                }
              } else {
                Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
              }

              return len;
            }; // Usage:
            //    buffer.fill(number[, offset[, end]])
            //    buffer.fill(buffer[, offset[, end]])
            //    buffer.fill(string[, offset[, end]][, encoding])


            Buffer.prototype.fill = function fill(val, start, end, encoding) {
              // Handle string cases:
              if (typeof val === 'string') {
                if (typeof start === 'string') {
                  encoding = start;
                  start = 0;
                  end = this.length;
                } else if (typeof end === 'string') {
                  encoding = end;
                  end = this.length;
                }

                if (val.length === 1) {
                  var code = val.charCodeAt(0);

                  if (code < 256) {
                    val = code;
                  }
                }

                if (encoding !== undefined && typeof encoding !== 'string') {
                  throw new TypeError('encoding must be a string');
                }

                if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
                  throw new TypeError('Unknown encoding: ' + encoding);
                }
              } else if (typeof val === 'number') {
                val = val & 255;
              } // Invalid ranges are not set to a default, so can range check early.


              if (start < 0 || this.length < start || this.length < end) {
                throw new RangeError('Out of range index');
              }

              if (end <= start) {
                return this;
              }

              start = start >>> 0;
              end = end === undefined ? this.length : end >>> 0;
              if (!val) val = 0;
              var i;

              if (typeof val === 'number') {
                for (i = start; i < end; ++i) {
                  this[i] = val;
                }
              } else {
                var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
                var len = bytes.length;

                for (i = 0; i < end - start; ++i) {
                  this[i + start] = bytes[i % len];
                }
              }

              return this;
            }; // HELPER FUNCTIONS
            // ================


            var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

            function base64clean(str) {
              // Node strips out invalid characters like \n and \t from the string, base64-js does not
              str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

              if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

              while (str.length % 4 !== 0) {
                str = str + '=';
              }

              return str;
            }

            function stringtrim(str) {
              if (str.trim) return str.trim();
              return str.replace(/^\s+|\s+$/g, '');
            }

            function toHex(n) {
              if (n < 16) return '0' + n.toString(16);
              return n.toString(16);
            }

            function utf8ToBytes(string, units) {
              units = units || Infinity;
              var codePoint;
              var length = string.length;
              var leadSurrogate = null;
              var bytes = [];

              for (var i = 0; i < length; ++i) {
                codePoint = string.charCodeAt(i); // is surrogate component

                if (codePoint > 0xD7FF && codePoint < 0xE000) {
                  // last char was a lead
                  if (!leadSurrogate) {
                    // no lead yet
                    if (codePoint > 0xDBFF) {
                      // unexpected trail
                      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                      continue;
                    } else if (i + 1 === length) {
                      // unpaired lead
                      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                      continue;
                    } // valid lead


                    leadSurrogate = codePoint;
                    continue;
                  } // 2 leads in a row


                  if (codePoint < 0xDC00) {
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    leadSurrogate = codePoint;
                    continue;
                  } // valid surrogate pair


                  codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
                } else if (leadSurrogate) {
                  // valid bmp char, but last char was a lead
                  if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                }

                leadSurrogate = null; // encode utf8

                if (codePoint < 0x80) {
                  if ((units -= 1) < 0) break;
                  bytes.push(codePoint);
                } else if (codePoint < 0x800) {
                  if ((units -= 2) < 0) break;
                  bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
                } else if (codePoint < 0x10000) {
                  if ((units -= 3) < 0) break;
                  bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
                } else if (codePoint < 0x110000) {
                  if ((units -= 4) < 0) break;
                  bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
                } else {
                  throw new Error('Invalid code point');
                }
              }

              return bytes;
            }

            function asciiToBytes(str) {
              var byteArray = [];

              for (var i = 0; i < str.length; ++i) {
                // Node's code seems to be doing this and not & 0x7F..
                byteArray.push(str.charCodeAt(i) & 0xFF);
              }

              return byteArray;
            }

            function utf16leToBytes(str, units) {
              var c, hi, lo;
              var byteArray = [];

              for (var i = 0; i < str.length; ++i) {
                if ((units -= 2) < 0) break;
                c = str.charCodeAt(i);
                hi = c >> 8;
                lo = c % 256;
                byteArray.push(lo);
                byteArray.push(hi);
              }

              return byteArray;
            }

            function base64ToBytes(str) {
              return base64.toByteArray(base64clean(str));
            }

            function blitBuffer(src, dst, offset, length) {
              for (var i = 0; i < length; ++i) {
                if (i + offset >= dst.length || i >= src.length) break;
                dst[i + offset] = src[i];
              }

              return i;
            }

            function isnan(val) {
              return val !== val; // eslint-disable-line no-self-compare
            }
            /***/

          },
          /* 59 */

          /***/
          function (module, exports) {
            'use strict';

            exports.byteLength = byteLength;
            exports.toByteArray = toByteArray;
            exports.fromByteArray = fromByteArray;
            var lookup = [];
            var revLookup = [];
            var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
            var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

            for (var i = 0, len = code.length; i < len; ++i) {
              lookup[i] = code[i];
              revLookup[code.charCodeAt(i)] = i;
            } // Support decoding URL-safe base64 strings, as Node.js does.
            // See: https://en.wikipedia.org/wiki/Base64#URL_applications


            revLookup['-'.charCodeAt(0)] = 62;
            revLookup['_'.charCodeAt(0)] = 63;

            function getLens(b64) {
              var len = b64.length;

              if (len % 4 > 0) {
                throw new Error('Invalid string. Length must be a multiple of 4');
              } // Trim off extra bytes after placeholder bytes are found
              // See: https://github.com/beatgammit/base64-js/issues/42


              var validLen = b64.indexOf('=');
              if (validLen === -1) validLen = len;
              var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
              return [validLen, placeHoldersLen];
            } // base64 is 4/3 + up to two characters of the original data


            function byteLength(b64) {
              var lens = getLens(b64);
              var validLen = lens[0];
              var placeHoldersLen = lens[1];
              return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
            }

            function _byteLength(b64, validLen, placeHoldersLen) {
              return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
            }

            function toByteArray(b64) {
              var tmp;
              var lens = getLens(b64);
              var validLen = lens[0];
              var placeHoldersLen = lens[1];
              var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
              var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

              var len = placeHoldersLen > 0 ? validLen - 4 : validLen;

              for (var i = 0; i < len; i += 4) {
                tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
                arr[curByte++] = tmp >> 16 & 0xFF;
                arr[curByte++] = tmp >> 8 & 0xFF;
                arr[curByte++] = tmp & 0xFF;
              }

              if (placeHoldersLen === 2) {
                tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
                arr[curByte++] = tmp & 0xFF;
              }

              if (placeHoldersLen === 1) {
                tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
                arr[curByte++] = tmp >> 8 & 0xFF;
                arr[curByte++] = tmp & 0xFF;
              }

              return arr;
            }

            function tripletToBase64(num) {
              return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
            }

            function encodeChunk(uint8, start, end) {
              var tmp;
              var output = [];

              for (var i = start; i < end; i += 3) {
                tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
                output.push(tripletToBase64(tmp));
              }

              return output.join('');
            }

            function fromByteArray(uint8) {
              var tmp;
              var len = uint8.length;
              var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

              var parts = [];
              var maxChunkLength = 16383; // must be multiple of 3
              // go through the array every three bytes, we'll deal with trailing stuff later

              for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
                parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
              } // pad the end with zeros, but make sure to not forget the extra bytes


              if (extraBytes === 1) {
                tmp = uint8[len - 1];
                parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
              } else if (extraBytes === 2) {
                tmp = (uint8[len - 2] << 8) + uint8[len - 1];
                parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
              }

              return parts.join('');
            }
            /***/

          },
          /* 60 */

          /***/
          function (module, exports) {
            exports.read = function (buffer, offset, isLE, mLen, nBytes) {
              var e, m;
              var eLen = nBytes * 8 - mLen - 1;
              var eMax = (1 << eLen) - 1;
              var eBias = eMax >> 1;
              var nBits = -7;
              var i = isLE ? nBytes - 1 : 0;
              var d = isLE ? -1 : 1;
              var s = buffer[offset + i];
              i += d;
              e = s & (1 << -nBits) - 1;
              s >>= -nBits;
              nBits += eLen;

              for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

              m = e & (1 << -nBits) - 1;
              e >>= -nBits;
              nBits += mLen;

              for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

              if (e === 0) {
                e = 1 - eBias;
              } else if (e === eMax) {
                return m ? NaN : (s ? -1 : 1) * Infinity;
              } else {
                m = m + Math.pow(2, mLen);
                e = e - eBias;
              }

              return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
            };

            exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
              var e, m, c;
              var eLen = nBytes * 8 - mLen - 1;
              var eMax = (1 << eLen) - 1;
              var eBias = eMax >> 1;
              var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
              var i = isLE ? 0 : nBytes - 1;
              var d = isLE ? 1 : -1;
              var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
              value = Math.abs(value);

              if (isNaN(value) || value === Infinity) {
                m = isNaN(value) ? 1 : 0;
                e = eMax;
              } else {
                e = Math.floor(Math.log(value) / Math.LN2);

                if (value * (c = Math.pow(2, -e)) < 1) {
                  e--;
                  c *= 2;
                }

                if (e + eBias >= 1) {
                  value += rt / c;
                } else {
                  value += rt * Math.pow(2, 1 - eBias);
                }

                if (value * c >= 2) {
                  e++;
                  c /= 2;
                }

                if (e + eBias >= eMax) {
                  m = 0;
                  e = eMax;
                } else if (e + eBias >= 1) {
                  m = (value * c - 1) * Math.pow(2, mLen);
                  e = e + eBias;
                } else {
                  m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                  e = 0;
                }
              }

              for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

              e = e << mLen | m;
              eLen += mLen;

              for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

              buffer[offset + i - d] |= s * 128;
            };
            /***/

          },
          /* 61 */

          /***/
          function (module, exports) {
            var toString = {}.toString;

            module.exports = Array.isArray || function (arr) {
              return toString.call(arr) == '[object Array]';
            };
            /***/

          },
          /* 62 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var __extends = this && this.__extends || function (d, b) {
              for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
              }

              function __() {
                this.constructor = d;
              }

              d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };

            var dispatcher_1 = __webpack_require__(24);

            var timers_1 = __webpack_require__(12);

            var logger_1 = __webpack_require__(8);

            var Collections = __webpack_require__(9);

            var runtime_1 = __webpack_require__(2);

            var ConnectionManager = function (_super) {
              __extends(ConnectionManager, _super);

              function ConnectionManager(key, options) {
                var _this = this;

                _super.call(this);

                this.key = key;
                this.options = options || {};
                this.state = "initialized";
                this.connection = null;
                this.usingTLS = !!options.useTLS;
                this.timeline = this.options.timeline;
                this.errorCallbacks = this.buildErrorCallbacks();
                this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks);
                this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
                var Network = runtime_1["default"].getNetwork();
                Network.bind("online", function () {
                  _this.timeline.info({
                    netinfo: "online"
                  });

                  if (_this.state === "connecting" || _this.state === "unavailable") {
                    _this.retryIn(0);
                  }
                });
                Network.bind("offline", function () {
                  _this.timeline.info({
                    netinfo: "offline"
                  });

                  if (_this.connection) {
                    _this.sendActivityCheck();
                  }
                });
                this.updateStrategy();
              }

              ConnectionManager.prototype.connect = function () {
                if (this.connection || this.runner) {
                  return;
                }

                if (!this.strategy.isSupported()) {
                  this.updateState("failed");
                  return;
                }

                this.updateState("connecting");
                this.startConnecting();
                this.setUnavailableTimer();
              };

              ;

              ConnectionManager.prototype.send = function (data) {
                if (this.connection) {
                  return this.connection.send(data);
                } else {
                  return false;
                }
              };

              ;

              ConnectionManager.prototype.send_event = function (name, data, channel) {
                if (this.connection) {
                  return this.connection.send_event(name, data, channel);
                } else {
                  return false;
                }
              };

              ;

              ConnectionManager.prototype.disconnect = function () {
                this.disconnectInternally();
                this.updateState("disconnected");
              };

              ;

              ConnectionManager.prototype.isUsingTLS = function () {
                return this.usingTLS;
              };

              ;

              ConnectionManager.prototype.startConnecting = function () {
                var _this = this;

                var callback = function callback(error, handshake) {
                  if (error) {
                    _this.runner = _this.strategy.connect(0, callback);
                  } else {
                    if (handshake.action === "error") {
                      _this.emit("error", {
                        type: "HandshakeError",
                        error: handshake.error
                      });

                      _this.timeline.error({
                        handshakeError: handshake.error
                      });
                    } else {
                      _this.abortConnecting();

                      _this.handshakeCallbacks[handshake.action](handshake);
                    }
                  }
                };

                this.runner = this.strategy.connect(0, callback);
              };

              ;

              ConnectionManager.prototype.abortConnecting = function () {
                if (this.runner) {
                  this.runner.abort();
                  this.runner = null;
                }
              };

              ;

              ConnectionManager.prototype.disconnectInternally = function () {
                this.abortConnecting();
                this.clearRetryTimer();
                this.clearUnavailableTimer();

                if (this.connection) {
                  var connection = this.abandonConnection();
                  connection.close();
                }
              };

              ;

              ConnectionManager.prototype.updateStrategy = function () {
                this.strategy = this.options.getStrategy({
                  key: this.key,
                  timeline: this.timeline,
                  useTLS: this.usingTLS
                });
              };

              ;

              ConnectionManager.prototype.retryIn = function (delay) {
                var _this = this;

                this.timeline.info({
                  action: "retry",
                  delay: delay
                });

                if (delay > 0) {
                  this.emit("connecting_in", Math.round(delay / 1000));
                }

                this.retryTimer = new timers_1.OneOffTimer(delay || 0, function () {
                  _this.disconnectInternally();

                  _this.connect();
                });
              };

              ;

              ConnectionManager.prototype.clearRetryTimer = function () {
                if (this.retryTimer) {
                  this.retryTimer.ensureAborted();
                  this.retryTimer = null;
                }
              };

              ;

              ConnectionManager.prototype.setUnavailableTimer = function () {
                var _this = this;

                this.unavailableTimer = new timers_1.OneOffTimer(this.options.unavailableTimeout, function () {
                  _this.updateState("unavailable");
                });
              };

              ;

              ConnectionManager.prototype.clearUnavailableTimer = function () {
                if (this.unavailableTimer) {
                  this.unavailableTimer.ensureAborted();
                }
              };

              ;

              ConnectionManager.prototype.sendActivityCheck = function () {
                var _this = this;

                this.stopActivityCheck();
                this.connection.ping();
                this.activityTimer = new timers_1.OneOffTimer(this.options.pongTimeout, function () {
                  _this.timeline.error({
                    pong_timed_out: _this.options.pongTimeout
                  });

                  _this.retryIn(0);
                });
              };

              ;

              ConnectionManager.prototype.resetActivityCheck = function () {
                var _this = this;

                this.stopActivityCheck();

                if (this.connection && !this.connection.handlesActivityChecks()) {
                  this.activityTimer = new timers_1.OneOffTimer(this.activityTimeout, function () {
                    _this.sendActivityCheck();
                  });
                }
              };

              ;

              ConnectionManager.prototype.stopActivityCheck = function () {
                if (this.activityTimer) {
                  this.activityTimer.ensureAborted();
                }
              };

              ;

              ConnectionManager.prototype.buildConnectionCallbacks = function (errorCallbacks) {
                var _this = this;

                return Collections.extend({}, errorCallbacks, {
                  message: function message(_message) {
                    _this.resetActivityCheck();

                    _this.emit('message', _message);
                  },
                  ping: function ping() {
                    _this.send_event('pusher:pong', {});
                  },
                  activity: function activity() {
                    _this.resetActivityCheck();
                  },
                  error: function error(_error2) {
                    _this.emit("error", {
                      type: "WebSocketError",
                      error: _error2
                    });
                  },
                  closed: function closed() {
                    _this.abandonConnection();

                    if (_this.shouldRetry()) {
                      _this.retryIn(1000);
                    }
                  }
                });
              };

              ;

              ConnectionManager.prototype.buildHandshakeCallbacks = function (errorCallbacks) {
                var _this = this;

                return Collections.extend({}, errorCallbacks, {
                  connected: function connected(handshake) {
                    _this.activityTimeout = Math.min(_this.options.activityTimeout, handshake.activityTimeout, handshake.connection.activityTimeout || Infinity);

                    _this.clearUnavailableTimer();

                    _this.setConnection(handshake.connection);

                    _this.socket_id = _this.connection.id;

                    _this.updateState("connected", {
                      socket_id: _this.socket_id
                    });
                  }
                });
              };

              ;

              ConnectionManager.prototype.buildErrorCallbacks = function () {
                var _this = this;

                var withErrorEmitted = function withErrorEmitted(callback) {
                  return function (result) {
                    if (result.error) {
                      _this.emit("error", {
                        type: "WebSocketError",
                        error: result.error
                      });
                    }

                    callback(result);
                  };
                };

                return {
                  tls_only: withErrorEmitted(function () {
                    _this.usingTLS = true;

                    _this.updateStrategy();

                    _this.retryIn(0);
                  }),
                  refused: withErrorEmitted(function () {
                    _this.disconnect();
                  }),
                  backoff: withErrorEmitted(function () {
                    _this.retryIn(1000);
                  }),
                  retry: withErrorEmitted(function () {
                    _this.retryIn(0);
                  })
                };
              };

              ;

              ConnectionManager.prototype.setConnection = function (connection) {
                this.connection = connection;

                for (var event in this.connectionCallbacks) {
                  this.connection.bind(event, this.connectionCallbacks[event]);
                }

                this.resetActivityCheck();
              };

              ;

              ConnectionManager.prototype.abandonConnection = function () {
                if (!this.connection) {
                  return;
                }

                this.stopActivityCheck();

                for (var event in this.connectionCallbacks) {
                  this.connection.unbind(event, this.connectionCallbacks[event]);
                }

                var connection = this.connection;
                this.connection = null;
                return connection;
              };

              ConnectionManager.prototype.updateState = function (newState, data) {
                var previousState = this.state;
                this.state = newState;

                if (previousState !== newState) {
                  var newStateDescription = newState;

                  if (newStateDescription === "connected") {
                    newStateDescription += " with new socket ID " + data.socket_id;
                  }

                  logger_1["default"].debug('State changed', previousState + ' -> ' + newStateDescription);
                  this.timeline.info({
                    state: newState,
                    params: data
                  });
                  this.emit('state_change', {
                    previous: previousState,
                    current: newState
                  });
                  this.emit(newState, data);
                }
              };

              ConnectionManager.prototype.shouldRetry = function () {
                return this.state === "connecting" || this.state === "connected";
              };

              return ConnectionManager;
            }(dispatcher_1["default"]);

            exports.__esModule = true;
            exports["default"] = ConnectionManager;
            /***/
          },
          /* 63 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var Collections = __webpack_require__(9);

            var factory_1 = __webpack_require__(43);

            var Errors = __webpack_require__(31);

            var Channels = function () {
              function Channels() {
                this.channels = {};
              }

              Channels.prototype.add = function (name, pusher) {
                if (!this.channels[name]) {
                  this.channels[name] = createChannel(name, pusher);
                }

                return this.channels[name];
              };

              Channels.prototype.all = function () {
                return Collections.values(this.channels);
              };

              Channels.prototype.find = function (name) {
                return this.channels[name];
              };

              Channels.prototype.remove = function (name) {
                var channel = this.channels[name];
                delete this.channels[name];
                return channel;
              };

              Channels.prototype.disconnect = function () {
                Collections.objectApply(this.channels, function (channel) {
                  channel.disconnect();
                });
              };

              return Channels;
            }();

            exports.__esModule = true;
            exports["default"] = Channels;

            function createChannel(name, pusher) {
              if (name.indexOf('private-encrypted-') === 0) {
                if (navigator.product == "ReactNative") {
                  var errorMsg = "Encrypted channels are not yet supported when using React Native builds.";
                  throw new Errors.UnsupportedFeature(errorMsg);
                }

                return factory_1["default"].createEncryptedChannel(name, pusher);
              } else if (name.indexOf('private-') === 0) {
                return factory_1["default"].createPrivateChannel(name, pusher);
              } else if (name.indexOf('presence-') === 0) {
                return factory_1["default"].createPresenceChannel(name, pusher);
              } else {
                return factory_1["default"].createChannel(name, pusher);
              }
            }
            /***/

          },
          /* 64 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var factory_1 = __webpack_require__(43);

            var util_1 = __webpack_require__(11);

            var Errors = __webpack_require__(31);

            var Collections = __webpack_require__(9);

            var TransportStrategy = function () {
              function TransportStrategy(name, priority, transport, options) {
                this.name = name;
                this.priority = priority;
                this.transport = transport;
                this.options = options || {};
              }

              TransportStrategy.prototype.isSupported = function () {
                return this.transport.isSupported({
                  useTLS: this.options.useTLS
                });
              };

              TransportStrategy.prototype.connect = function (minPriority, callback) {
                var _this = this;

                if (!this.isSupported()) {
                  return failAttempt(new Errors.UnsupportedStrategy(), callback);
                } else if (this.priority < minPriority) {
                  return failAttempt(new Errors.TransportPriorityTooLow(), callback);
                }

                var connected = false;
                var transport = this.transport.createConnection(this.name, this.priority, this.options.key, this.options);
                var handshake = null;

                var onInitialized = function onInitialized() {
                  transport.unbind("initialized", onInitialized);
                  transport.connect();
                };

                var onOpen = function onOpen() {
                  handshake = factory_1["default"].createHandshake(transport, function (result) {
                    connected = true;
                    unbindListeners();
                    callback(null, result);
                  });
                };

                var onError = function onError(error) {
                  unbindListeners();
                  callback(error);
                };

                var onClosed = function onClosed() {
                  unbindListeners();
                  var serializedTransport;
                  serializedTransport = Collections.safeJSONStringify(transport);
                  callback(new Errors.TransportClosed(serializedTransport));
                };

                var unbindListeners = function unbindListeners() {
                  transport.unbind("initialized", onInitialized);
                  transport.unbind("open", onOpen);
                  transport.unbind("error", onError);
                  transport.unbind("closed", onClosed);
                };

                transport.bind("initialized", onInitialized);
                transport.bind("open", onOpen);
                transport.bind("error", onError);
                transport.bind("closed", onClosed);
                transport.initialize();
                return {
                  abort: function abort() {
                    if (connected) {
                      return;
                    }

                    unbindListeners();

                    if (handshake) {
                      handshake.close();
                    } else {
                      transport.close();
                    }
                  },
                  forceMinPriority: function forceMinPriority(p) {
                    if (connected) {
                      return;
                    }

                    if (_this.priority < p) {
                      if (handshake) {
                        handshake.close();
                      } else {
                        transport.close();
                      }
                    }
                  }
                };
              };

              return TransportStrategy;
            }();

            exports.__esModule = true;
            exports["default"] = TransportStrategy;

            function failAttempt(error, callback) {
              util_1["default"].defer(function () {
                callback(error);
              });
              return {
                abort: function abort() {},
                forceMinPriority: function forceMinPriority() {}
              };
            }
            /***/

          },
          /* 65 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var Collections = __webpack_require__(9);

            var util_1 = __webpack_require__(11);

            var timers_1 = __webpack_require__(12);

            var SequentialStrategy = function () {
              function SequentialStrategy(strategies, options) {
                this.strategies = strategies;
                this.loop = Boolean(options.loop);
                this.failFast = Boolean(options.failFast);
                this.timeout = options.timeout;
                this.timeoutLimit = options.timeoutLimit;
              }

              SequentialStrategy.prototype.isSupported = function () {
                return Collections.any(this.strategies, util_1["default"].method("isSupported"));
              };

              SequentialStrategy.prototype.connect = function (minPriority, callback) {
                var _this = this;

                var strategies = this.strategies;
                var current = 0;
                var timeout = this.timeout;
                var runner = null;

                var tryNextStrategy = function tryNextStrategy(error, handshake) {
                  if (handshake) {
                    callback(null, handshake);
                  } else {
                    current = current + 1;

                    if (_this.loop) {
                      current = current % strategies.length;
                    }

                    if (current < strategies.length) {
                      if (timeout) {
                        timeout = timeout * 2;

                        if (_this.timeoutLimit) {
                          timeout = Math.min(timeout, _this.timeoutLimit);
                        }
                      }

                      runner = _this.tryStrategy(strategies[current], minPriority, {
                        timeout: timeout,
                        failFast: _this.failFast
                      }, tryNextStrategy);
                    } else {
                      callback(true);
                    }
                  }
                };

                runner = this.tryStrategy(strategies[current], minPriority, {
                  timeout: timeout,
                  failFast: this.failFast
                }, tryNextStrategy);
                return {
                  abort: function abort() {
                    runner.abort();
                  },
                  forceMinPriority: function forceMinPriority(p) {
                    minPriority = p;

                    if (runner) {
                      runner.forceMinPriority(p);
                    }
                  }
                };
              };

              SequentialStrategy.prototype.tryStrategy = function (strategy, minPriority, options, callback) {
                var timer = null;
                var runner = null;

                if (options.timeout > 0) {
                  timer = new timers_1.OneOffTimer(options.timeout, function () {
                    runner.abort();
                    callback(true);
                  });
                }

                runner = strategy.connect(minPriority, function (error, handshake) {
                  if (error && timer && timer.isRunning() && !options.failFast) {
                    return;
                  }

                  if (timer) {
                    timer.ensureAborted();
                  }

                  callback(error, handshake);
                });
                return {
                  abort: function abort() {
                    if (timer) {
                      timer.ensureAborted();
                    }

                    runner.abort();
                  },
                  forceMinPriority: function forceMinPriority(p) {
                    runner.forceMinPriority(p);
                  }
                };
              };

              return SequentialStrategy;
            }();

            exports.__esModule = true;
            exports["default"] = SequentialStrategy;
            /***/
          },
          /* 66 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var Collections = __webpack_require__(9);

            var util_1 = __webpack_require__(11);

            var BestConnectedEverStrategy = function () {
              function BestConnectedEverStrategy(strategies) {
                this.strategies = strategies;
              }

              BestConnectedEverStrategy.prototype.isSupported = function () {
                return Collections.any(this.strategies, util_1["default"].method("isSupported"));
              };

              BestConnectedEverStrategy.prototype.connect = function (minPriority, callback) {
                return connect(this.strategies, minPriority, function (i, runners) {
                  return function (error, handshake) {
                    runners[i].error = error;

                    if (error) {
                      if (allRunnersFailed(runners)) {
                        callback(true);
                      }

                      return;
                    }

                    Collections.apply(runners, function (runner) {
                      runner.forceMinPriority(handshake.transport.priority);
                    });
                    callback(null, handshake);
                  };
                });
              };

              return BestConnectedEverStrategy;
            }();

            exports.__esModule = true;
            exports["default"] = BestConnectedEverStrategy;

            function connect(strategies, minPriority, callbackBuilder) {
              var runners = Collections.map(strategies, function (strategy, i, _, rs) {
                return strategy.connect(minPriority, callbackBuilder(i, rs));
              });
              return {
                abort: function abort() {
                  Collections.apply(runners, abortRunner);
                },
                forceMinPriority: function forceMinPriority(p) {
                  Collections.apply(runners, function (runner) {
                    runner.forceMinPriority(p);
                  });
                }
              };
            }

            function allRunnersFailed(runners) {
              return Collections.all(runners, function (runner) {
                return Boolean(runner.error);
              });
            }

            function abortRunner(runner) {
              if (!runner.error && !runner.aborted) {
                runner.abort();
                runner.aborted = true;
              }
            }
            /***/

          },
          /* 67 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var util_1 = __webpack_require__(11);

            var runtime_1 = __webpack_require__(2);

            var sequential_strategy_1 = __webpack_require__(65);

            var Collections = __webpack_require__(9);

            var CachedStrategy = function () {
              function CachedStrategy(strategy, transports, options) {
                this.strategy = strategy;
                this.transports = transports;
                this.ttl = options.ttl || 1800 * 1000;
                this.usingTLS = options.useTLS;
                this.timeline = options.timeline;
              }

              CachedStrategy.prototype.isSupported = function () {
                return this.strategy.isSupported();
              };

              CachedStrategy.prototype.connect = function (minPriority, callback) {
                var usingTLS = this.usingTLS;
                var info = fetchTransportCache(usingTLS);
                var strategies = [this.strategy];

                if (info && info.timestamp + this.ttl >= util_1["default"].now()) {
                  var transport = this.transports[info.transport];

                  if (transport) {
                    this.timeline.info({
                      cached: true,
                      transport: info.transport,
                      latency: info.latency
                    });
                    strategies.push(new sequential_strategy_1["default"]([transport], {
                      timeout: info.latency * 2 + 1000,
                      failFast: true
                    }));
                  }
                }

                var startTimestamp = util_1["default"].now();
                var runner = strategies.pop().connect(minPriority, function cb(error, handshake) {
                  if (error) {
                    flushTransportCache(usingTLS);

                    if (strategies.length > 0) {
                      startTimestamp = util_1["default"].now();
                      runner = strategies.pop().connect(minPriority, cb);
                    } else {
                      callback(error);
                    }
                  } else {
                    storeTransportCache(usingTLS, handshake.transport.name, util_1["default"].now() - startTimestamp);
                    callback(null, handshake);
                  }
                });
                return {
                  abort: function abort() {
                    runner.abort();
                  },
                  forceMinPriority: function forceMinPriority(p) {
                    minPriority = p;

                    if (runner) {
                      runner.forceMinPriority(p);
                    }
                  }
                };
              };

              return CachedStrategy;
            }();

            exports.__esModule = true;
            exports["default"] = CachedStrategy;

            function getTransportCacheKey(usingTLS) {
              return "pusherTransport" + (usingTLS ? "TLS" : "NonTLS");
            }

            function fetchTransportCache(usingTLS) {
              var storage = runtime_1["default"].getLocalStorage();

              if (storage) {
                try {
                  var serializedCache = storage[getTransportCacheKey(usingTLS)];

                  if (serializedCache) {
                    return JSON.parse(serializedCache);
                  }
                } catch (e) {
                  flushTransportCache(usingTLS);
                }
              }

              return null;
            }

            function storeTransportCache(usingTLS, transport, latency) {
              var storage = runtime_1["default"].getLocalStorage();

              if (storage) {
                try {
                  storage[getTransportCacheKey(usingTLS)] = Collections.safeJSONStringify({
                    timestamp: util_1["default"].now(),
                    transport: transport,
                    latency: latency
                  });
                } catch (e) {}
              }
            }

            function flushTransportCache(usingTLS) {
              var storage = runtime_1["default"].getLocalStorage();

              if (storage) {
                try {
                  delete storage[getTransportCacheKey(usingTLS)];
                } catch (e) {}
              }
            }
            /***/

          },
          /* 68 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var timers_1 = __webpack_require__(12);

            var DelayedStrategy = function () {
              function DelayedStrategy(strategy, _a) {
                var number = _a.delay;
                this.strategy = strategy;
                this.options = {
                  delay: number
                };
              }

              DelayedStrategy.prototype.isSupported = function () {
                return this.strategy.isSupported();
              };

              DelayedStrategy.prototype.connect = function (minPriority, callback) {
                var strategy = this.strategy;
                var runner;
                var timer = new timers_1.OneOffTimer(this.options.delay, function () {
                  runner = strategy.connect(minPriority, callback);
                });
                return {
                  abort: function abort() {
                    timer.ensureAborted();

                    if (runner) {
                      runner.abort();
                    }
                  },
                  forceMinPriority: function forceMinPriority(p) {
                    minPriority = p;

                    if (runner) {
                      runner.forceMinPriority(p);
                    }
                  }
                };
              };

              return DelayedStrategy;
            }();

            exports.__esModule = true;
            exports["default"] = DelayedStrategy;
            /***/
          },
          /* 69 */

          /***/
          function (module, exports) {
            "use strict";

            var IfStrategy = function () {
              function IfStrategy(test, trueBranch, falseBranch) {
                this.test = test;
                this.trueBranch = trueBranch;
                this.falseBranch = falseBranch;
              }

              IfStrategy.prototype.isSupported = function () {
                var branch = this.test() ? this.trueBranch : this.falseBranch;
                return branch.isSupported();
              };

              IfStrategy.prototype.connect = function (minPriority, callback) {
                var branch = this.test() ? this.trueBranch : this.falseBranch;
                return branch.connect(minPriority, callback);
              };

              return IfStrategy;
            }();

            exports.__esModule = true;
            exports["default"] = IfStrategy;
            /***/
          },
          /* 70 */

          /***/
          function (module, exports) {
            "use strict";

            var FirstConnectedStrategy = function () {
              function FirstConnectedStrategy(strategy) {
                this.strategy = strategy;
              }

              FirstConnectedStrategy.prototype.isSupported = function () {
                return this.strategy.isSupported();
              };

              FirstConnectedStrategy.prototype.connect = function (minPriority, callback) {
                var runner = this.strategy.connect(minPriority, function (error, handshake) {
                  if (handshake) {
                    runner.abort();
                  }

                  callback(error, handshake);
                });
                return runner;
              };

              return FirstConnectedStrategy;
            }();

            exports.__esModule = true;
            exports["default"] = FirstConnectedStrategy;
            /***/
          },
          /* 71 */

          /***/
          function (module, exports, __webpack_require__) {
            "use strict";

            var defaults_1 = __webpack_require__(5);

            exports.getGlobalConfig = function () {
              return {
                wsHost: defaults_1["default"].host,
                wsPort: defaults_1["default"].ws_port,
                wssPort: defaults_1["default"].wss_port,
                wsPath: defaults_1["default"].ws_path,
                httpHost: defaults_1["default"].sockjs_host,
                httpPort: defaults_1["default"].sockjs_http_port,
                httpsPort: defaults_1["default"].sockjs_https_port,
                httpPath: defaults_1["default"].sockjs_path,
                statsHost: defaults_1["default"].stats_host,
                authEndpoint: defaults_1["default"].channel_auth_endpoint,
                authTransport: defaults_1["default"].channel_auth_transport,
                activity_timeout: defaults_1["default"].activity_timeout,
                pong_timeout: defaults_1["default"].pong_timeout,
                unavailable_timeout: defaults_1["default"].unavailable_timeout
              };
            };

            exports.getClusterConfig = function (clusterName) {
              return {
                wsHost: "ws-" + clusterName + ".pusher.com",
                httpHost: "sockjs-" + clusterName + ".pusher.com"
              };
            };
            /***/

          }
          /******/
          ])
        );
      });

      ;
      /***/
    },

    /***/
    "izU/":
    /*!***************************************************!*\
      !*** ./src/app/shared/services/pusher.service.ts ***!
      \***************************************************/

    /*! exports provided: PusherService */

    /***/
    function izU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PusherService", function () {
        return PusherService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var pusher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! pusher-js */
      "eC5B");
      /* harmony import */


      var pusher_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var PusherService = /*#__PURE__*/function () {
        function PusherService(http) {
          _classCallCheck(this, PusherService);

          this.http = http;
          this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_3__(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].pusher.key, {
            cluster: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].pusher.cluster,
            encrypted: true
          });
          this.channel = this.pusher.subscribe('DNRMS-development');
        }

        _createClass(PusherService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroySubject$.next();
          }
        }]);

        return PusherService;
      }();

      PusherService.??fac = function PusherService_Factory(t) {
        return new (t || PusherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      PusherService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: PusherService,
        factory: PusherService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PusherService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "khSh":
    /*!********************************************!*\
      !*** ./src/app/news/store/news.effects.ts ***!
      \********************************************/

    /*! exports provided: NewsEffects */

    /***/
    function khSh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsEffects", function () {
        return NewsEffects;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _news_services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../news/services/news.service */
      "/OYN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/add/operator/switchMap */
      "MKA9");
      /* harmony import */


      var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _news_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./news.actions */
      "5WGB");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var NewsEffects = function NewsEffects(actions$, newsService) {
        var _this25 = this;

        _classCallCheck(this, NewsEffects);

        this.actions$ = actions$;
        this.newsService = newsService;
        this.GetMyNews$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_news_actions__WEBPACK_IMPORTED_MODULE_6__["GET_MY_NEWS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) {
          return _this25.newsService.myNews(action.payload.perPage, action.payload.currentPage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
            return new _news_actions__WEBPACK_IMPORTED_MODULE_6__["GetMyNewsSuccess"](data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _news_actions__WEBPACK_IMPORTED_MODULE_6__["GetMyNewsError"]());
          }));
        }));
        this.GetTrashNews$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_news_actions__WEBPACK_IMPORTED_MODULE_6__["GET_TRASH_NEWS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) {
          return _this25.newsService.trashNews(action.payload.perPage, action.payload.currentPage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
            return new _news_actions__WEBPACK_IMPORTED_MODULE_6__["GetTrashNewsSuccess"](data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _news_actions__WEBPACK_IMPORTED_MODULE_6__["GetTrashNewsError"]());
          }));
        })); // moves news to trash

        this.DeleteNews = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_news_actions__WEBPACK_IMPORTED_MODULE_6__["DELETE_NEWS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (action) {
          return action.payload;
        })).switchMap(function (payload) {
          return _this25.newsService.destroyNews(payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
            return new _news_actions__WEBPACK_IMPORTED_MODULE_6__["DeleteNewsSuccess"]({
              id: payload.id
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            console.log(error);
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(new _news_actions__WEBPACK_IMPORTED_MODULE_6__["DeleteNewsError"]());
          }));
        }); // restore trashed news to myNews

        this.RestoreNews = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_news_actions__WEBPACK_IMPORTED_MODULE_6__["RESTORE_NEWS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (action) {
          return action.payload;
        })).switchMap(function (payload) {
          return _this25.newsService.unTrashNews(payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
            return new _news_actions__WEBPACK_IMPORTED_MODULE_6__["RestoreNewsSuccess"]({
              id: payload.id
            }); // return new NewsActions.GetMyNews();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            console.log(error);
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(new _news_actions__WEBPACK_IMPORTED_MODULE_6__["RestoreNewsError"]());
          }));
        }); // removes news from database

        this.DestroyNews = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_news_actions__WEBPACK_IMPORTED_MODULE_6__["DESTROY_NEWS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (action) {
          return action.payload;
        })).switchMap(function (payload) {
          return _this25.newsService.destroyNewsForever(payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
            return new _news_actions__WEBPACK_IMPORTED_MODULE_6__["DestroyNewsSuccess"]({
              id: payload.id
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            console.log(error);
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(new _news_actions__WEBPACK_IMPORTED_MODULE_6__["DestroyNewsError"]());
          }));
        }); // get tickers, returned with ticker's news

        this.GetTickers$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_news_actions__WEBPACK_IMPORTED_MODULE_6__["GET_TICKERS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) {
          return _this25.newsService.GetTickers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
            return new _news_actions__WEBPACK_IMPORTED_MODULE_6__["GetTickersSuccess"](data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _news_actions__WEBPACK_IMPORTED_MODULE_6__["GetTickersError"]());
          }));
        })); // add a news to ticker

        this.AddTickerNews$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_news_actions__WEBPACK_IMPORTED_MODULE_6__["ADD_TICKER_NEWS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) {
          return _this25.newsService.AddTickerNews(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
            return new _news_actions__WEBPACK_IMPORTED_MODULE_6__["AddTickerNewsSuccess"](data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _news_actions__WEBPACK_IMPORTED_MODULE_6__["AddTickerNewsError"]());
          }));
        })); // approve a news to ticker

        this.ApproveTickerNews$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_news_actions__WEBPACK_IMPORTED_MODULE_6__["APPROVE_TICKER_NEWS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) {
          return _this25.newsService.ApproveTickerNews(action.payload.ticker_news_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
            return new _news_actions__WEBPACK_IMPORTED_MODULE_6__["ApproveTickerNewsSuccess"](data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _news_actions__WEBPACK_IMPORTED_MODULE_6__["ApproveTickerNewsError"]());
          }));
        })); // dis-approve a ticker news

        this.DisApproveTickerNews$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_news_actions__WEBPACK_IMPORTED_MODULE_6__["DISAPPROVE_TICKER_NEWS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) {
          return _this25.newsService.DisApproveTickerNews(action.payload.ticker_news_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
            return new _news_actions__WEBPACK_IMPORTED_MODULE_6__["DisApproveTickerNewsSuccess"](data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _news_actions__WEBPACK_IMPORTED_MODULE_6__["DisApproveTickerNewsError"]());
          }));
        })); // delete a ticker news

        this.DeleteTickerNews$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_news_actions__WEBPACK_IMPORTED_MODULE_6__["DELETE_TICKER_NEWS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) {
          return _this25.newsService.destroyTickerNews(action.payload.ticker_news_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
            return new _news_actions__WEBPACK_IMPORTED_MODULE_6__["DeleteTickerNewsSuccess"](data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _news_actions__WEBPACK_IMPORTED_MODULE_6__["DeleteTickerNewsError"]());
          }));
        })); // add a ticker

        this.AddTicker$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_news_actions__WEBPACK_IMPORTED_MODULE_6__["ADD_TICKER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) {
          return _this25.newsService.AddTicker(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
            return new _news_actions__WEBPACK_IMPORTED_MODULE_6__["AddTickerSuccess"](data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _news_actions__WEBPACK_IMPORTED_MODULE_6__["AddTickerError"]());
          }));
        }));
      };

      NewsEffects.??fac = function NewsEffects_Factory(t) {
        return new (t || NewsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_news_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]));
      };

      NewsEffects.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({
        token: NewsEffects,
        factory: NewsEffects.??fac
      });

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], NewsEffects.prototype, "GetMyNews$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], NewsEffects.prototype, "GetTrashNews$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], NewsEffects.prototype, "DeleteNews", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], NewsEffects.prototype, "RestoreNews", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], NewsEffects.prototype, "DestroyNews", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], NewsEffects.prototype, "GetTickers$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], NewsEffects.prototype, "AddTickerNews$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], NewsEffects.prototype, "ApproveTickerNews$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], NewsEffects.prototype, "DisApproveTickerNews$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], NewsEffects.prototype, "DeleteTickerNews$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], NewsEffects.prototype, "AddTicker$", void 0);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](NewsEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"]
          }, {
            type: _news_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]
          }];
        }, {
          GetMyNews$: [],
          GetTrashNews$: [],
          DeleteNews: [],
          RestoreNews: [],
          DestroyNews: [],
          GetTickers$: [],
          AddTickerNews$: [],
          ApproveTickerNews$: [],
          DisApproveTickerNews$: [],
          DeleteTickerNews$: [],
          AddTicker$: []
        });
      })();
      /***/

    },

    /***/
    "nZYK":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs-compat/operator/switchMap.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function nZYK(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Projects each source value to an Observable which is merged in the output
       * Observable, emitting values only from the most recently projected Observable.
       *
       * <span class="informal">Maps each value to an Observable, then flattens all of
       * these inner Observables using {@link switch}.</span>
       *
       * <img src="./img/switchMap.png" width="100%">
       *
       * Returns an Observable that emits items based on applying a function that you
       * supply to each item emitted by the source Observable, where that function
       * returns an (so-called "inner") Observable. Each time it observes one of these
       * inner Observables, the output Observable begins emitting the items emitted by
       * that inner Observable. When a new inner Observable is emitted, `switchMap`
       * stops emitting items from the earlier-emitted inner Observable and begins
       * emitting items from the new one. It continues to behave like this for
       * subsequent inner Observables.
       *
       * @example <caption>Rerun an interval Observable on every click event</caption>
       * var clicks = Rx.Observable.fromEvent(document, 'click');
       * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
       * result.subscribe(x => console.log(x));
       *
       * @see {@link concatMap}
       * @see {@link exhaustMap}
       * @see {@link mergeMap}
       * @see {@link switch}
       * @see {@link switchMapTo}
       *
       * @param {function(value: T, ?index: number): ObservableInput} project A function
       * that, when applied to an item emitted by the source Observable, returns an
       * Observable.
       * @return {Observable} An Observable that emits the result of applying the
       * projection function (and the optional `resultSelector`) to each item emitted
       * by the source Observable and taking only the values from the most recently
       * projected inner Observable.
       * @method switchMap
       * @owner Observable
       */


      function switchMap(project) {
        return operators_1.switchMap(project)(this);
      }

      exports.switchMap = switchMap; //# sourceMappingURL=switchMap.js.map

      /***/
    },

    /***/
    "zuV3":
    /*!**************************************!*\
      !*** ./src/app/news/news.routing.ts ***!
      \**************************************/

    /*! exports provided: NewsRoutes */

    /***/
    function zuV3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsRoutes", function () {
        return NewsRoutes;
      });
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "93oI");
      /* harmony import */


      var _mynews_mynews_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mynews/mynews.component */
      "0fKI");
      /* harmony import */


      var _write_write_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./write/write.component */
      "XTHu");
      /* harmony import */


      var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit/edit.component */
      "TLw/");
      /* harmony import */


      var _trash_trash_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./trash/trash.component */
      "3EV/");
      /* harmony import */


      var _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ticker/ticker.component */
      "5EVD");

      var NewsRoutes = [{
        path: '',
        children: [{
          path: 'dashboard',
          component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
          data: {
            role: 'journalist'
          }
        }, {
          path: 'ticker',
          component: _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_5__["TickerComponent"]
        }, {
          path: 'my',
          component: _mynews_mynews_component__WEBPACK_IMPORTED_MODULE_1__["MynewsComponent"]
        }, {
          path: 'write',
          component: _write_write_component__WEBPACK_IMPORTED_MODULE_2__["WriteComponent"]
        }, {
          path: 'trash',
          component: _trash_trash_component__WEBPACK_IMPORTED_MODULE_4__["TrashComponent"]
        }, {
          path: ':id',
          component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]
        }]
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=news-news-module-es5.js.map