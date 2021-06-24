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

  (self["webpackChunkmaterialpro"] = self["webpackChunkmaterialpro"] || []).push([["common"], {
    /***/
    20945:
    /*!********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "interval": function interval() {
          return (
            /* binding */
            _interval
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Observable */
      69165);
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../scheduler/async */
      33637);
      /* harmony import */


      var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/isNumeric */
      26561);

      function _interval() {
        var period = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;

        if (!(0, _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
          period = 0;
        }

        if (!scheduler || typeof scheduler.schedule !== 'function') {
          scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(function (subscriber) {
          subscriber.add(scheduler.schedule(dispatch, period, {
            subscriber: subscriber,
            counter: 0,
            period: period
          }));
          return subscriber;
        });
      }

      function dispatch(state) {
        var subscriber = state.subscriber,
            counter = state.counter,
            period = state.period;
        subscriber.next(counter);
        this.schedule({
          subscriber: subscriber,
          counter: counter + 1,
          period: period
        }, period);
      } //# sourceMappingURL=interval.js.map

      /***/

    },

    /***/
    34150:
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/count.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "count": function count() {
          return (
            /* binding */
            _count
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscriber */
      77393);

      function _count(predicate) {
        return function (source) {
          return source.lift(new CountOperator(predicate, source));
        };
      }

      var CountOperator = /*#__PURE__*/function () {
        function CountOperator(predicate, source) {
          _classCallCheck(this, CountOperator);

          this.predicate = predicate;
          this.source = source;
        }

        _createClass(CountOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
          }
        }]);

        return CountOperator;
      }();

      var CountSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
        _inherits(CountSubscriber, _Subscriber__WEBPACK_);

        var _super = _createSuper(CountSubscriber);

        function CountSubscriber(destination, predicate, source) {
          var _this;

          _classCallCheck(this, CountSubscriber);

          _this = _super.call(this, destination);
          _this.predicate = predicate;
          _this.source = source;
          _this.count = 0;
          _this.index = 0;
          return _this;
        }

        _createClass(CountSubscriber, [{
          key: "_next",
          value: function _next(value) {
            if (this.predicate) {
              this._tryPredicate(value);
            } else {
              this.count++;
            }
          }
        }, {
          key: "_tryPredicate",
          value: function _tryPredicate(value) {
            var result;

            try {
              result = this.predicate(value, this.index++, this.source);
            } catch (err) {
              this.destination.error(err);
              return;
            }

            if (result) {
              this.count++;
            }
          }
        }, {
          key: "_complete",
          value: function _complete() {
            this.destination.next(this.count);
            this.destination.complete();
          }
        }]);

        return CountSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber); //# sourceMappingURL=count.js.map

      /***/

    },

    /***/
    7334:
    /*!***********************************************************************!*\
      !*** ./src/app/news/add-ticker-dialog/add-ticker-dialog.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddTickerDialogComponent": function AddTickerDialogComponent() {
          return (
            /* binding */
            _AddTickerDialogComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _models_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/news */
      26318);
      /* harmony import */


      var _store_news_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../store/news.actions */
      15490);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      86710);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _shared_directives_thaana_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/directives/thaana.directive */
      76274);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      51095);

      var _AddTickerDialogComponent = /*#__PURE__*/function () {
        function _AddTickerDialogComponent(dialogRef, data, store) {
          _classCallCheck(this, _AddTickerDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.store = store;
          this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.ticker = new _models_news__WEBPACK_IMPORTED_MODULE_0__.Ticker();
          this.dhivehiEnabled = true;
        }

        _createClass(_AddTickerDialogComponent, [{
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

            this.store.dispatch(new _store_news_actions__WEBPACK_IMPORTED_MODULE_1__.AddTicker(this.ticker));
            this.onAdd.emit();
          }
        }]);

        return _AddTickerDialogComponent;
      }();

      _AddTickerDialogComponent.ɵfac = function AddTickerDialogComponent_Factory(t) {
        return new (t || _AddTickerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
      };

      _AddTickerDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AddTickerDialogComponent,
        selectors: [["app-add-ticker-dialog"]],
        inputs: {
          dhivehiEnabled: "dhivehiEnabled"
        },
        decls: 22,
        vars: 4,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-top", "20px"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["appearance", "outline"], ["matInput", "", "mat-autosize", "", "required", "", "name", "tickerName", 3, "appDnrmsThaana", "ngModel", "ngModelChange"], ["dhvInput", ""], ["fxLayout", "row", "fxLayoutWrap", "wrap"], ["align", "end", "mat-dialog-actions", "", "align", "end"], ["mat-button", "", "color", "basic", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
        template: function AddTickerDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Add New Ticker");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Ticker Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddTickerDialogComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.ticker.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Separator");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddTickerDialogComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.ticker.separator = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddTickerDialogComponent_Template_button_click_18_listener() {
              return ctx.closeDialog(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddTickerDialogComponent_Template_button_click_20_listener() {
              return ctx.doAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appDnrmsThaana", false)("ngModel", ctx.ticker.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appDnrmsThaana", false)("ngModel", ctx.ticker.separator);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _shared_directives_thaana_directive__WEBPACK_IMPORTED_MODULE_2__.ThaanaDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton],
        encapsulation: 2
      });
      /***/
    },

    /***/
    32829:
    /*!***********************************************!*\
      !*** ./src/app/news/services/news.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewsService": function NewsService() {
          return (
            /* binding */
            _NewsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _NewsService = /*#__PURE__*/function () {
        function _NewsService(http) {
          _classCallCheck(this, _NewsService);

          this.http = http;
          this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        } //get dashboard data


        _createClass(_NewsService, [{
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
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('no_result', perpage.toString()).set('page', page.toString())
            });
          } // get the trashed news that belongs to me, with status & bar(s)

        }, {
          key: "trashNews",
          value: function trashNews() {
            var perpage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            return this.http.get(this.apiUrl + 'news/trash', {
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('no_result', perpage.toString()).set('page', page.toString())
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
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
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
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
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
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
              'Content-Type': 'application/json; charset=utf-8'
            });
            return this.http.post(this.apiUrl + 'news/ticker/news/add', ticker_news, {
              headers: headers
            });
          } // Enable a ticker news

        }, {
          key: "ApproveTickerNews",
          value: function ApproveTickerNews(ticker_news_id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
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
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
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
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
              'Content-Type': 'application/json; charset=utf-8'
            });
            return this.http.post(this.apiUrl + 'news/ticker/add/new', ticker, {
              headers: headers
            });
          }
        }]);

        return _NewsService;
      }();

      _NewsService.ɵfac = function NewsService_Factory(t) {
        return new (t || _NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _NewsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _NewsService,
        factory: _NewsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map