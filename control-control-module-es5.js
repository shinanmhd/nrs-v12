(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["control-control-module"], {
    /***/
    "/AqX":
    /*!*****************************************************!*\
      !*** ./src/app/control/services/control.service.ts ***!
      \*****************************************************/

    /*! exports provided: ControlService */

    /***/
    function AqX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlService", function () {
        return ControlService;
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

      var ControlService = /*#__PURE__*/function () {
        function ControlService(http) {
          _classCallCheck(this, ControlService);

          this.http = http;
          this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        } // get selected list


        _createClass(ControlService, [{
          key: "getNewsCgNews",
          value: function getNewsCgNews() {
            return this.http.get(this.apiUrl + 'control/news/cg');
          } // get selected list

        }, {
          key: "getNewsCgSettings",
          value: function getNewsCgSettings() {
            console.log('Getting cg settings'); //return this.http.get<any>(this.apiUrl + 'control/cg/settings/all');

            return this.http.get(this.apiUrl + 'control/news/cg');
          } //update news cg text

        }, {
          key: "updateNewsCgText",
          value: function updateNewsCgText(news_bar_id) {
            return this.http.put(this.apiUrl + 'control/news/cg/update/', {
              "news_bar_id": news_bar_id,
              "ip": ''
            });
          }
        }, {
          key: "stopNewsCg",
          value: function stopNewsCg() {
            return this.http.post(this.apiUrl + 'control/cg/news/stop', {});
          }
        }]);

        return ControlService;
      }();

      ControlService.ɵfac = function ControlService_Factory(t) {
        return new (t || ControlService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ControlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ControlService,
        factory: ControlService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlService, [{
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
    "10ev":
    /*!**************************************************!*\
      !*** ./src/app/control/store/control.actions.ts ***!
      \**************************************************/

    /*! exports provided: LOGOUT_CONTROL, GET_NEWS_CG_NEWS, GET_NEWS_CG_NEWS_SUCCESS, GET_NEWS_CG_NEWS_ERROR, UPDATE_NEWS_CG_NEWS, UPDATE_NEWS_CG_NEWS_SUCCESS, UPDATE_NEWS_CG_NEWS_ERROR, GET_CG_SETTINGS, GET_CG_SETTINGS_SUCCESS, GET_CG_SETTINGS_ERROR, STOP_NEWS_CG, STOP_NEWS_CG_SUCCESS, STOP_NEWS_CG_ERROR, LogoutEditorState, GetNewsCgNews, GetNewsCgNewsSuccess, GetNewsCgNewsError, GetCgSettings, GetCgSettingsSuccess, GetCgSettingsError, UpdateNewsCgNews, UpdateNewsCgNewsSuccess, UpdateNewsCgNewsError, StopNewsCg, StopNewsCgSuccess, StopNewsCgError */

    /***/
    function ev(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOGOUT_CONTROL", function () {
        return LOGOUT_CONTROL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GET_NEWS_CG_NEWS", function () {
        return GET_NEWS_CG_NEWS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GET_NEWS_CG_NEWS_SUCCESS", function () {
        return GET_NEWS_CG_NEWS_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GET_NEWS_CG_NEWS_ERROR", function () {
        return GET_NEWS_CG_NEWS_ERROR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UPDATE_NEWS_CG_NEWS", function () {
        return UPDATE_NEWS_CG_NEWS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UPDATE_NEWS_CG_NEWS_SUCCESS", function () {
        return UPDATE_NEWS_CG_NEWS_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UPDATE_NEWS_CG_NEWS_ERROR", function () {
        return UPDATE_NEWS_CG_NEWS_ERROR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GET_CG_SETTINGS", function () {
        return GET_CG_SETTINGS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GET_CG_SETTINGS_SUCCESS", function () {
        return GET_CG_SETTINGS_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GET_CG_SETTINGS_ERROR", function () {
        return GET_CG_SETTINGS_ERROR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STOP_NEWS_CG", function () {
        return STOP_NEWS_CG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STOP_NEWS_CG_SUCCESS", function () {
        return STOP_NEWS_CG_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STOP_NEWS_CG_ERROR", function () {
        return STOP_NEWS_CG_ERROR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutEditorState", function () {
        return LogoutEditorState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetNewsCgNews", function () {
        return GetNewsCgNews;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetNewsCgNewsSuccess", function () {
        return GetNewsCgNewsSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetNewsCgNewsError", function () {
        return GetNewsCgNewsError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetCgSettings", function () {
        return GetCgSettings;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetCgSettingsSuccess", function () {
        return GetCgSettingsSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetCgSettingsError", function () {
        return GetCgSettingsError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateNewsCgNews", function () {
        return UpdateNewsCgNews;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateNewsCgNewsSuccess", function () {
        return UpdateNewsCgNewsSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateNewsCgNewsError", function () {
        return UpdateNewsCgNewsError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StopNewsCg", function () {
        return StopNewsCg;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StopNewsCgSuccess", function () {
        return StopNewsCgSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StopNewsCgError", function () {
        return StopNewsCgError;
      });

      var LOGOUT_CONTROL = '[Control] LOGOUT_CONTROL';
      var GET_NEWS_CG_NEWS = '[Control] GET_NEWS_CG_NEWS';
      var GET_NEWS_CG_NEWS_SUCCESS = '[Control] GET_NEWS_CG_NEWS_SUCCESS';
      var GET_NEWS_CG_NEWS_ERROR = '[Control] GET_NEWS_CG_NEWS_ERROR';
      var UPDATE_NEWS_CG_NEWS = '[Control] UPDATE_NEWS_CG_NEWS';
      var UPDATE_NEWS_CG_NEWS_SUCCESS = '[Control] UPDATE_NEWS_CG_NEWS_SUCCESS';
      var UPDATE_NEWS_CG_NEWS_ERROR = '[Control] UPDATE_NEWS_CG_NEWS_ERROR';
      var GET_CG_SETTINGS = '[Control] GET_CG_SETTINGS';
      var GET_CG_SETTINGS_SUCCESS = '[Control] GET_CG_SETTINGS_SUCCESS';
      var GET_CG_SETTINGS_ERROR = '[Control] GET_CG_SETTINGS_ERROR';
      var STOP_NEWS_CG = '[Control] STOP_NEWS_CG';
      var STOP_NEWS_CG_SUCCESS = '[Control] STOP_NEWS_CG_SUCCESS';
      var STOP_NEWS_CG_ERROR = '[Control] STOP_NEWS_CG_ERROR';

      var LogoutEditorState = function LogoutEditorState() {
        _classCallCheck(this, LogoutEditorState);

        this.type = LOGOUT_CONTROL;
      };
      /**
       * --------------------------------------------------> Get cg news
       */


      var GetNewsCgNews = function GetNewsCgNews() {
        _classCallCheck(this, GetNewsCgNews);

        this.type = GET_NEWS_CG_NEWS;
      };

      var GetNewsCgNewsSuccess = function GetNewsCgNewsSuccess(payload) {
        _classCallCheck(this, GetNewsCgNewsSuccess);

        this.payload = payload;
        this.type = GET_NEWS_CG_NEWS_SUCCESS;
      };

      var GetNewsCgNewsError = function GetNewsCgNewsError() {
        _classCallCheck(this, GetNewsCgNewsError);

        this.type = GET_NEWS_CG_NEWS_ERROR;
      };
      /**
       * --------------------------------------------------> Get cg Settings
       */


      var GetCgSettings = function GetCgSettings() {
        _classCallCheck(this, GetCgSettings);

        this.type = GET_CG_SETTINGS;
      };

      var GetCgSettingsSuccess = function GetCgSettingsSuccess(payload) {
        _classCallCheck(this, GetCgSettingsSuccess);

        this.payload = payload;
        this.type = GET_CG_SETTINGS_SUCCESS;
      };

      var GetCgSettingsError = function GetCgSettingsError() {
        _classCallCheck(this, GetCgSettingsError);

        this.type = GET_CG_SETTINGS_ERROR;
      };
      /**
       * --------------------------------------------------> Update cg news
       */


      var UpdateNewsCgNews = function UpdateNewsCgNews(payload) {
        _classCallCheck(this, UpdateNewsCgNews);

        this.payload = payload;
        this.type = UPDATE_NEWS_CG_NEWS;
      };

      var UpdateNewsCgNewsSuccess = function UpdateNewsCgNewsSuccess() {
        _classCallCheck(this, UpdateNewsCgNewsSuccess);

        this.type = UPDATE_NEWS_CG_NEWS_SUCCESS;
      };

      var UpdateNewsCgNewsError = function UpdateNewsCgNewsError() {
        _classCallCheck(this, UpdateNewsCgNewsError);

        this.type = UPDATE_NEWS_CG_NEWS_ERROR;
      };
      /**
       * --------------------------------------------------> stop cg
       */


      var StopNewsCg = function StopNewsCg() {
        _classCallCheck(this, StopNewsCg);

        this.type = STOP_NEWS_CG; //constructor(public payload: { news_bar_id: number }) {}
      };

      var StopNewsCgSuccess = function StopNewsCgSuccess() {
        _classCallCheck(this, StopNewsCgSuccess);

        this.type = STOP_NEWS_CG_SUCCESS;
      };

      var StopNewsCgError = function StopNewsCgError() {
        _classCallCheck(this, StopNewsCgError);

        this.type = STOP_NEWS_CG_ERROR;
      };
      /***/

    },

    /***/
    "IYfO":
    /*!**************************************************!*\
      !*** ./src/app/control/store/control.reducer.ts ***!
      \**************************************************/

    /*! exports provided: initialState, reducer, getReviewNewsState */

    /***/
    function IYfO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialState", function () {
        return initialState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reducer", function () {
        return reducer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getReviewNewsState", function () {
        return getReviewNewsState;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _control_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./control.actions */
      "10ev");

      var initialState = {
        // news: [],
        // isLoaded: false,
        // // pageState: {currentPage: null, perPage: null, lastPages: null, totalResults: null},
        // lists: [],
        isLoaded: true,
        cgSettings: null,
        newsCgState: null
      };

      function reducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;
        console.log(state, action);

        switch (action.type) {
          case _control_actions__WEBPACK_IMPORTED_MODULE_1__["GET_NEWS_CG_NEWS"]:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: false
              });
            }

          case _control_actions__WEBPACK_IMPORTED_MODULE_1__["GET_NEWS_CG_NEWS_SUCCESS"]:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: true,
                newsCgState: action.payload
              });
            }

          case _control_actions__WEBPACK_IMPORTED_MODULE_1__["GET_CG_SETTINGS"]:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: false
              });
            }

          case _control_actions__WEBPACK_IMPORTED_MODULE_1__["GET_CG_SETTINGS_SUCCESS"]:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: true,
                cgSettings: action.payload
              });
            }

          case _control_actions__WEBPACK_IMPORTED_MODULE_1__["LOGOUT_CONTROL"]:
            {
              return initialState;
            }

          default:
            {
              return state;
            }
        }
      }

      var getReviewNewsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('ControlState');
      /***/
    },

    /***/
    "Shj0":
    /*!**************************************************!*\
      !*** ./src/app/control/store/control.effects.ts ***!
      \**************************************************/

    /*! exports provided: ControlEffects */

    /***/
    function Shj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlEffects", function () {
        return ControlEffects;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _control_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./control.actions */
      "10ev");
      /* harmony import */


      var _services_control_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/control.service */
      "/AqX");

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

      var ControlEffects = function ControlEffects(actions$, controlService) {
        var _this = this;

        _classCallCheck(this, ControlEffects);

        this.actions$ = actions$;
        this.controlService = controlService;
        this.GetNewsCgNews$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_control_actions__WEBPACK_IMPORTED_MODULE_4__["GET_NEWS_CG_NEWS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) {
          return _this.controlService.getNewsCgNews().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
            console.log(data);
            return new _control_actions__WEBPACK_IMPORTED_MODULE_4__["GetNewsCgNewsSuccess"](data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _control_actions__WEBPACK_IMPORTED_MODULE_4__["GetNewsCgNewsError"]());
          }));
        }));
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

        this.UpdateNewsCgNews$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_control_actions__WEBPACK_IMPORTED_MODULE_4__["UPDATE_NEWS_CG_NEWS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) {
          return _this.controlService.updateNewsCgText(action.payload.news_bar_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
            console.log(data);
            return new _control_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateNewsCgNewsSuccess"]();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _control_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateNewsCgNewsError"]());
          }));
        }));
        this.StopNewsCg$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_control_actions__WEBPACK_IMPORTED_MODULE_4__["STOP_NEWS_CG"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) {
          return _this.controlService.stopNewsCg().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
            console.log(data);
            return new _control_actions__WEBPACK_IMPORTED_MODULE_4__["StopNewsCgSuccess"]();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _control_actions__WEBPACK_IMPORTED_MODULE_4__["StopNewsCgError"]());
          }));
        }));
      };

      ControlEffects.ɵfac = function ControlEffects_Factory(t) {
        return new (t || ControlEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_control_service__WEBPACK_IMPORTED_MODULE_5__["ControlService"]));
      };

      ControlEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ControlEffects,
        factory: ControlEffects.ɵfac
      });

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])], ControlEffects.prototype, "GetNewsCgNews$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])], ControlEffects.prototype, "UpdateNewsCgNews$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])], ControlEffects.prototype, "StopNewsCg$", void 0);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
          }, {
            type: _services_control_service__WEBPACK_IMPORTED_MODULE_5__["ControlService"]
          }];
        }, {
          GetNewsCgNews$: [],
          UpdateNewsCgNews$: [],
          StopNewsCg$: []
        });
      })();
      /***/

    },

    /***/
    "UZp1":
    /*!****************************************************!*\
      !*** ./src/app/control/ticker/ticker.component.ts ***!
      \****************************************************/

    /*! exports provided: TickerComponent */

    /***/
    function UZp1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TickerComponent", function () {
        return TickerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TickerComponent = /*#__PURE__*/function () {
        function TickerComponent() {
          _classCallCheck(this, TickerComponent);
        }

        _createClass(TickerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TickerComponent;
      }();

      TickerComponent.ɵfac = function TickerComponent_Factory(t) {
        return new (t || TickerComponent)();
      };

      TickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TickerComponent,
        selectors: [["app-ticker"]],
        decls: 2,
        vars: 0,
        template: function TickerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ticker works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2wvdGlja2VyL3RpY2tlci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ticker',
            templateUrl: './ticker.component.html',
            styleUrls: ['./ticker.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "aU1c":
    /*!**************************************************!*\
      !*** ./src/app/control/onair/onair.component.ts ***!
      \**************************************************/

    /*! exports provided: OnairComponent, Slide, slideData */

    /***/
    function aU1c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnairComponent", function () {
        return OnairComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Slide", function () {
        return Slide;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "slideData", function () {
        return slideData;
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


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _services_onair_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/onair.service */
      "iCKO");
      /* harmony import */


      var _slide_data_dialog_slide_data_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../slide-data-dialog/slide-data-dialog.component */
      "h34r");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _news_models_news__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../news/models/news */
      "mhfV");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
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


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      var _c0 = ["sidebar"];

      function OnairComponent_mat_list_item_15_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "subdirectory_arrow_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OnairComponent_mat_list_item_15_mat_icon_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "offline_pin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OnairComponent_mat_list_item_15_button_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r8);
        }
      }

      function OnairComponent_mat_list_item_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnairComponent_mat_list_item_15_Template_mat_list_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var slide_r4 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.onSelectSlide(slide_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OnairComponent_mat_list_item_15_mat_icon_1_Template, 2, 0, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OnairComponent_mat_list_item_15_mat_icon_6_Template, 2, 0, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OnairComponent_mat_list_item_15_button_7_Template, 3, 1, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 29, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnairComponent_mat_list_item_15_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var slide_r4 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.updateSelectedSlide(slide_r4.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Set Selected");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slide_r4 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", slide_r4 == ctx_r2.selectedSlide ? "rgba(127, 255, 212, 0.6)" : "rgba(255, 255, 255, 0)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r4 == ctx_r2.selectedSlide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r4.slide_name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r4.slide_id, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r4.id == ctx_r2.settings_selected_slide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r4.id != ctx_r2.settings_selected_slide);
        }
      }

      function OnairComponent_div_28_div_8_button_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "zoom_in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OnairComponent_div_28_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OnairComponent_div_28_div_8_button_4_Template, 3, 0, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnairComponent_div_28_div_8_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var slide_content_r13 = ctx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.deleteContent(slide_content_r13.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slide_content_r13 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("table-row status_", slide_content_r13.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", slide_content_r13.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_content_r13.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.active === 1);
        }
      }

      function OnairComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OnairComponent_div_28_div_8_Template, 8, 6, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.selectedSlide.onairslidecontent);
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          "side-panel-opened": a0,
          "side-panel-closed": a1
        };
      };

      var OnairComponent = /*#__PURE__*/function () {
        function OnairComponent(onAirService, dialog, snackBar) {
          _classCallCheck(this, OnairComponent);

          this.onAirService = onAirService;
          this.dialog = dialog;
          this.snackBar = snackBar;
          this.sidePanelOpened = true;
          this.sidePanelOpened_noNews = true;
          this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        }

        _createClass(OnairComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.onAirService.getSlides().subscribe(function (onair) {
              _this2.slides = onair;
              console.log(_this2.slides);
            });
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
        }, {
          key: "onSelectSlide",
          value: function onSelectSlide(slide) {
            this.selectedSlide = slide;
            this.settings_selected_slide = slide.id;
            console.log(slide);
          }
        }, {
          key: "addSlideData",
          value: function addSlideData(slideId) {
            var _this3 = this;

            var content = new slideData(null, new _news_models_news__WEBPACK_IMPORTED_MODULE_7__["Language"]('Dhv'), this.settings_selected_slide, 0);
            var dialogRef = this.dialog.open(_slide_data_dialog_slide_data_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SlideDataDialogComponent"], {
              width: '40%',
              height: 'auto',
              maxHeight: '95%',
              data: content
            });
            dialogRef.componentInstance.onAdd.subscribe(function (result) {
              console.log(result);

              _this3.onAirService.addSlideData(result).subscribe(function (re) {
                console.log(re);
                _this3.slides = re;

                _this3.slides.forEach(function (data) {
                  if (data.id === _this3.settings_selected_slide) {
                    _this3.selectedSlide = data;
                  }
                });
              });
            }, function (err) {
              console.log("status code--->" + err.status);
            });
          }
        }, {
          key: "deleteContent",
          value: function deleteContent(id) {
            var _this4 = this;

            this.onAirService.deleteSlideData(id).subscribe(function (re) {
              _this4.onAirService.getSlides().subscribe(function (onair) {
                _this4.slides = onair;

                _this4.slides.forEach(function (data) {
                  if (data.id === _this4.settings_selected_slide) {
                    _this4.selectedSlide = data;
                  }
                });
              });
            }, function (err) {
              console.log("Err Deleting Slide Data, status code--->" + err.status);
            });
          }
        }]);

        return OnairComponent;
      }();

      OnairComponent.ɵfac = function OnairComponent_Factory(t) {
        return new (t || OnairComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_onair_service__WEBPACK_IMPORTED_MODULE_4__["OnairService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
      };

      OnairComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OnairComponent,
        selectors: [["app-onair"]],
        viewQuery: function OnairComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
          }
        },
        decls: 33,
        vars: 11,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center start"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex", "100"], [1, "mat-card-top"], [3, "ngClass"], [3, "mode", "opened", "open", "close"], ["sidebar", ""], ["color", "primary", 1, "no-shadow"], ["fxLayout", "row", "fxFlex", "100"], [1, "m-t-0", "font-14"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [3, "background-color", "click", 4, "ngFor", "ngForOf"], ["color", "warn", 1, "bg-success", "no-shadow", "chat-right-panel"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "center center"], ["mat-icon-button", "", 1, "mr-1", 3, "click"], ["fxFlex", ""], [1, "font-14"], [1, "chat-middle-box", 2, "min-height", "700px"], ["class", "table-rasponsive", 4, "ngIf"], [1, "chat-footer"], ["align", "end"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "click"], ["color", "primary", 4, "ngIf"], ["matLine", ""], ["matLine", "", 1, "text-muted"], ["color", "warn", 4, "ngIf"], ["mat-icon-button", "", "class", "ml-1", 3, "matMenuTriggerFor", 4, "ngIf"], ["x-position", "before"], ["them", "matMenu"], ["mat-menu-item", "", "color", "primary", 3, "click"], ["color", "primary"], ["color", "warn"], ["mat-icon-button", "", 1, "ml-1", 3, "matMenuTriggerFor"], [1, "table-rasponsive"], [1, "table"], [1, "table-header"], [1, "header__item", "column-value"], [1, "header__item", "column-actions"], [1, "table-content"], [3, "class", "id", 4, "ngFor", "ngForOf"], [3, "id"], [1, "table-data", "column-value"], [1, "table-data", "column-actions"], ["mat-icon-button", "", "color", "basic", "matTooltip", "View News", "matTooltipPosition", "below", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Remove News", "matTooltipPosition", "below", 3, "click"], ["aria-label", "Edit"], ["mat-icon-button", "", "color", "basic", "matTooltip", "View News", "matTooltipPosition", "below"], ["aria-label", "view news"]],
        template: function OnairComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("open", function OnairComponent_Template_mat_sidenav_open_4_listener() {
              return ctx.sidePanelOpened = true || false;
            })("close", function OnairComponent_Template_mat_sidenav_close_4_listener() {
              return ctx.sidePanelOpened = false || ctx.sidePanelOpened_noNews == false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-datepicker-toggle", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-datepicker", null, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OnairComponent_mat_list_item_15_Template, 12, 7, "mat-list-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-toolbar", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnairComponent_Template_button_click_18_listener() {
              return ctx.sideBarToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "short_text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "News");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-content", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, OnairComponent_div_28_Template, 9, 1, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-actions", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnairComponent_Template_button_click_31_listener() {
              return ctx.addSlideData(ctx.selectedSlide.id);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Add New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, ctx.sidePanelOpened, !ctx.sidePanelOpened));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.isOver() ? "over" : "side")("opened", !ctx.isOver());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedSlide);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectedSlide);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepicker"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatLine"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuTrigger"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltip"]],
        styles: [".table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px solid #EEEEEE;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 10px 0;\n  font-size: 12px;\n  border-bottom: 1px solid #EEEEEE;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding-left: 10px 0;\n  border-bottom: 1px solid #EEEEEE;\n  transition: all 0.2s ease-in-out;\n}\n\n.table-row[_ngcontent-%COMP%]:hover{\n  background-color: rgba(97, 97, 97, 0.068);\n}\n\n\n\n.table-row.status_breaker[_ngcontent-%COMP%]{\n  background-color: rgba(127, 255, 212, 0.2)\n}\n\n.table-row[_ngcontent-%COMP%]:hover.status_breaker{\n  background-color: rgba(127, 255, 212, 0.7)\n}\n\n.table-row[_ngcontent-%COMP%]:nth-of-type(odd) {\n  \n}\n\n.table-data[_ngcontent-%COMP%], .header__item[_ngcontent-%COMP%] {\n  flex: 1 1 20%;\n  text-align: center;\n  padding: 5px;\n}\n\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.filter__link[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n.filter__link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: -18px;\n  color: white;\n  font-size: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.filter__link.desc[_ngcontent-%COMP%]::after {\n  content: \"(desc)\";\n}\n\n.filter__link.asc[_ngcontent-%COMP%]::after {\n  content: \"(asc)\";\n}\n\n.column-value[_ngcontent-%COMP%]{\n  flex: 0 0 80%;\n  font-size: 12px;\n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n\n\n.column-actions[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbC9vbmFpci9vbmFpci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBS2hDLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQSxZQUFZOztBQUNaO0VBQ0U7QUFDRjs7QUFDQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0RBQWdEO0VBQ2hELGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFFBQVE7RUFDUiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBS0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnREFBZ0Q7QUFDbEQ7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUJFOztBQUNGO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29udHJvbC9vbmFpci9vbmFpci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwcHggc29saWQgI0VFRUVFRTtcbn1cblxuLnRhYmxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUVFRUU7XG59XG5cbi50YWJsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFRUVFO1xuXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi50YWJsZS1yb3c6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMC4wNjgpO1xufVxuXG4vKiBCUkVBS0VSICovXG4udGFibGUtcm93LnN0YXR1c19icmVha2Vye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuMilcbn1cbi50YWJsZS1yb3c6aG92ZXIuc3RhdHVzX2JyZWFrZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyNTUsIDIxMiwgMC43KVxufVxuXG4udGFibGUtcm93Om50aC1vZi10eXBlKG9kZCkge1xuICAvKmJhY2tncm91bmQ6ICNFRUVFRUU7Ki9cbn1cblxuLnRhYmxlLWRhdGEsXG4uaGVhZGVyX19pdGVtIHtcbiAgZmxleDogMSAxIDIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5oZWFkZXJfX2l0ZW0ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5maWx0ZXJfX2xpbmsge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cbi5maWx0ZXJfX2xpbms6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmZpbHRlcl9fbGluay5kZXNjOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKGRlc2MpXCI7XG59XG4uZmlsdGVyX19saW5rLmFzYzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIihhc2MpXCI7XG59XG5cblxuXG5cbi5jb2x1bW4tdmFsdWV7XG4gIGZsZXg6IDAgMCA4MCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xufVxuXG4vKi5jb2x1bW4taGVhZGluZ3tcbiAgZmxleDogMCAwIDUzJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG59XG4uY29sdW1uLWhlYWRpbmcuZGh2e1xuICBmb250LWZhbWlseTogJ01WX0Zhc2V5aGEnO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbi5jb2x1bW4tZGF0ZXtcbiAgZmxleDogMCAwIDclO1xuICBmb250LXNpemU6IDEycHg7XG59Ki9cbi5jb2x1bW4tYWN0aW9uc3tcbiAgZmxleDogMCAwIDIwJTtcbn1cblxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnairComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-onair',
            templateUrl: './onair.component.html',
            styleUrls: ['./onair.component.css']
          }]
        }], function () {
          return [{
            type: _services_onair_service__WEBPACK_IMPORTED_MODULE_4__["OnairService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }];
        }, {
          sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidebar', {
              "static": true
            }]
          }]
        });
      })();

      var Slide = function Slide() {
        _classCallCheck(this, Slide);
      };

      var slideData = function slideData(data, lang, s_id, active) {
        _classCallCheck(this, slideData);

        this.data = data;
        this.language = lang;
        this.on_air_slides_id = s_id;
        this.active = active;
      };
      /***/

    },

    /***/
    "dgxB":
    /*!*******************************************!*\
      !*** ./src/app/control/control.module.ts ***!
      \*******************************************/

    /*! exports provided: ControlModule */

    /***/
    function dgxB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlModule", function () {
        return ControlModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _news_cg_news_cg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./news-cg/news-cg.component */
      "wB8T");
      /* harmony import */


      var _cg_text_cg_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cg-text/cg-text.component */
      "xqo9");
      /* harmony import */


      var _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ticker/ticker.component */
      "UZp1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _control_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./control.routing */
      "nZpj");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _demo_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../demo-material-module */
      "onrN");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "bFKe");
      /* harmony import */


      var ng2_dragula__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng2-dragula */
      "9Ejp");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _store_control_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./store/control.reducer */
      "IYfO");
      /* harmony import */


      var _store_control_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./store/control.effects */
      "Shj0");
      /* harmony import */


      var _onair_onair_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./onair/onair.component */
      "aU1c");
      /* harmony import */


      var _slide_data_dialog_slide_data_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./slide-data-dialog/slide-data-dialog.component */
      "h34r");
      /* harmony import */


      var _sms_sms_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./sms/sms.component */
      "mrFX");

      var ControlModule = function ControlModule() {
        _classCallCheck(this, ControlModule);
      };

      ControlModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ControlModule
      });
      ControlModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ControlModule_Factory(t) {
          return new (t || ControlModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_control_routing__WEBPACK_IMPORTED_MODULE_6__["ControlRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_9__["DemoMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_12__["DragulaModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forFeature('ControlState', _store_control_reducer__WEBPACK_IMPORTED_MODULE_16__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__["EffectsModule"].forFeature([_store_control_effects__WEBPACK_IMPORTED_MODULE_17__["ControlEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ControlModule, {
          declarations: [_news_cg_news_cg_component__WEBPACK_IMPORTED_MODULE_2__["NewsCgComponent"], _cg_text_cg_text_component__WEBPACK_IMPORTED_MODULE_3__["CgTextComponent"], _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_4__["TickerComponent"], _onair_onair_component__WEBPACK_IMPORTED_MODULE_18__["OnairComponent"], _slide_data_dialog_slide_data_dialog_component__WEBPACK_IMPORTED_MODULE_19__["SlideDataDialogComponent"], _sms_sms_component__WEBPACK_IMPORTED_MODULE_20__["SmsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_9__["DemoMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_12__["DragulaModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__["EffectsFeatureModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_control_routing__WEBPACK_IMPORTED_MODULE_6__["ControlRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_9__["DemoMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_12__["DragulaModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forFeature('ControlState', _store_control_reducer__WEBPACK_IMPORTED_MODULE_16__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__["EffectsModule"].forFeature([_store_control_effects__WEBPACK_IMPORTED_MODULE_17__["ControlEffects"]])],
            declarations: [_news_cg_news_cg_component__WEBPACK_IMPORTED_MODULE_2__["NewsCgComponent"], _cg_text_cg_text_component__WEBPACK_IMPORTED_MODULE_3__["CgTextComponent"], _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_4__["TickerComponent"], _onair_onair_component__WEBPACK_IMPORTED_MODULE_18__["OnairComponent"], _slide_data_dialog_slide_data_dialog_component__WEBPACK_IMPORTED_MODULE_19__["SlideDataDialogComponent"], _sms_sms_component__WEBPACK_IMPORTED_MODULE_20__["SmsComponent"]],
            entryComponents: [_slide_data_dialog_slide_data_dialog_component__WEBPACK_IMPORTED_MODULE_19__["SlideDataDialogComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "h34r":
    /*!**************************************************************************!*\
      !*** ./src/app/control/slide-data-dialog/slide-data-dialog.component.ts ***!
      \**************************************************************************/

    /*! exports provided: SlideDataDialogComponent */

    /***/
    function h34r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlideDataDialogComponent", function () {
        return SlideDataDialogComponent;
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


      var _onair_onair_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../onair/onair.component */
      "aU1c");
      /* harmony import */


      var _news_models_news__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../news/models/news */
      "mhfV");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _shared_directives_thaana_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/directives/thaana.directive */
      "nJ5Y");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var SlideDataDialogComponent = /*#__PURE__*/function () {
        function SlideDataDialogComponent(dialogRef, data) {
          _classCallCheck(this, SlideDataDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.dhivehiEnabled = true;
          this.slide_data = new _onair_onair_component__WEBPACK_IMPORTED_MODULE_2__["slideData"](null, new _news_models_news__WEBPACK_IMPORTED_MODULE_3__["Language"]('Dhv'), null);
          this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(SlideDataDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.slide_data = this.data;
          }
        }, {
          key: "closeDialog",
          value: function closeDialog(confirmation) {
            this.dialogRef.close(confirmation);
          }
        }, {
          key: "changeLanguage",
          value: function changeLanguage() {
            if (this.dhivehiEnabled) {
              this.slide_data.language.language_code = 'Dhv';
            } else {
              this.slide_data.language.language_code = 'Eng';
            }
          }
        }, {
          key: "addData",
          value: function addData() {
            // this.store.dispatch(new adminActions.CreateUser(this.user));
            this.onAdd.emit(this.slide_data);
            this.dialogRef.close(true);
          }
        }]);

        return SlideDataDialogComponent;
      }();

      SlideDataDialogComponent.ɵfac = function SlideDataDialogComponent_Factory(t) {
        return new (t || SlideDataDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      SlideDataDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SlideDataDialogComponent,
        selectors: [["app-slide-data-dialog"]],
        inputs: {
          dhivehiEnabled: "dhivehiEnabled"
        },
        decls: 20,
        vars: 8,
        consts: [["mat-dialog-title", ""], ["labelPosition", "after", "color", "secondary", 3, "ngModel", "ngModelChange"], [1, "basic-form"], ["userForm", "ngForm"], ["mat-dialog-content", ""], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-top", "20px"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["appearance", "outline"], ["matInput", "", "mat-autosize", "", "required", "", "name", "templateName", 3, "ngModel", "appDnrmsThaana", "ngModelChange"], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "color", "basic", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
        template: function SlideDataDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Data To Slide");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-slide-toggle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SlideDataDialogComponent_Template_mat_slide_toggle_ngModelChange_2_listener($event) {
              return ctx.dhivehiEnabled = $event;
            })("ngModelChange", function SlideDataDialogComponent_Template_mat_slide_toggle_ngModelChange_2_listener() {
              return ctx.changeLanguage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Slide Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SlideDataDialogComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.slide_data.data = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideDataDialogComponent_Template_button_click_16_listener() {
              return ctx.closeDialog(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideDataDialogComponent_Template_button_click_18_listener() {
              return ctx.addData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dhivehiEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.slide_data.language.language_code);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.slide_data.data)("appDnrmsThaana", ctx.dhivehiEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 6, ctx.slide_data), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _shared_directives_thaana_directive__WEBPACK_IMPORTED_MODULE_9__["ThaanaDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["JsonPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2wvc2xpZGUtZGF0YS1kaWFsb2cvc2xpZGUtZGF0YS1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideDataDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-slide-data-dialog',
            templateUrl: './slide-data-dialog.component.html',
            styleUrls: ['./slide-data-dialog.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: _onair_onair_component__WEBPACK_IMPORTED_MODULE_2__["slideData"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
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
    "iCKO":
    /*!***************************************************!*\
      !*** ./src/app/control/services/onair.service.ts ***!
      \***************************************************/

    /*! exports provided: OnairService */

    /***/
    function iCKO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnairService", function () {
        return OnairService;
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

      var OnairService = /*#__PURE__*/function () {
        function OnairService(http) {
          _classCallCheck(this, OnairService);

          this.http = http;
          this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        } // get selected list


        _createClass(OnairService, [{
          key: "getSlides",
          value: function getSlides() {
            return this.http.get(this.apiUrl + 'control/onair/slides');
          } //add slide data

        }, {
          key: "addSlideData",
          value: function addSlideData(data) {
            return this.http.post(this.apiUrl + 'control/onair/slide/data', data);
          } //add slide data

        }, {
          key: "deleteSlideData",
          value: function deleteSlideData(id) {
            return this.http["delete"](this.apiUrl + 'control/onair/slide/data/' + id);
          }
        }]);

        return OnairService;
      }();

      OnairService.ɵfac = function OnairService_Factory(t) {
        return new (t || OnairService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      OnairService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: OnairService,
        factory: OnairService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnairService, [{
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
    "mrFX":
    /*!**********************************************!*\
      !*** ./src/app/control/sms/sms.component.ts ***!
      \**********************************************/

    /*! exports provided: SmsComponent */

    /***/
    function mrFX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SmsComponent", function () {
        return SmsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SmsComponent = /*#__PURE__*/function () {
        function SmsComponent() {
          _classCallCheck(this, SmsComponent);
        }

        _createClass(SmsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SmsComponent;
      }();

      SmsComponent.ɵfac = function SmsComponent_Factory(t) {
        return new (t || SmsComponent)();
      };

      SmsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SmsComponent,
        selectors: [["app-sms"]],
        decls: 2,
        vars: 0,
        template: function SmsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sms works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2wvc21zL3Ntcy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SmsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sms',
            templateUrl: './sms.component.html',
            styleUrls: ['./sms.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "nZpj":
    /*!********************************************!*\
      !*** ./src/app/control/control.routing.ts ***!
      \********************************************/

    /*! exports provided: ControlRoutes */

    /***/
    function nZpj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlRoutes", function () {
        return ControlRoutes;
      });
      /* harmony import */


      var _news_cg_news_cg_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./news-cg/news-cg.component */
      "wB8T");
      /* harmony import */


      var _cg_text_cg_text_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cg-text/cg-text.component */
      "xqo9");
      /* harmony import */


      var _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ticker/ticker.component */
      "UZp1");
      /* harmony import */


      var _onair_onair_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./onair/onair.component */
      "aU1c");
      /* harmony import */


      var _sms_sms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sms/sms.component */
      "mrFX");

      var ControlRoutes = [{
        path: '',
        children: [{
          path: 'news-cg',
          component: _news_cg_news_cg_component__WEBPACK_IMPORTED_MODULE_0__["NewsCgComponent"],
          data: {
            role: 'control'
          }
        }, {
          path: 'cg-text',
          component: _cg_text_cg_text_component__WEBPACK_IMPORTED_MODULE_1__["CgTextComponent"],
          data: {
            role: 'control'
          }
        }, {
          path: 'ticker',
          component: _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_2__["TickerComponent"],
          data: {
            role: 'control'
          }
        }, {
          path: 'on-air',
          component: _onair_onair_component__WEBPACK_IMPORTED_MODULE_3__["OnairComponent"],
          data: {
            role: 'control'
          }
        }, {
          path: 'sms',
          component: _sms_sms_component__WEBPACK_IMPORTED_MODULE_4__["SmsComponent"],
          data: {
            role: 'control'
          }
        }]
      }];
      /***/
    },

    /***/
    "wB8T":
    /*!******************************************************!*\
      !*** ./src/app/control/news-cg/news-cg.component.ts ***!
      \******************************************************/

    /*! exports provided: NewsCgComponent */

    /***/
    function wB8T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsCgComponent", function () {
        return NewsCgComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _news_models_news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../news/models/news */
      "mhfV");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_control_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../store/control.actions */
      "10ev");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");

      function NewsCgComponent_div_8_div_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.selectedNews.news.heading);
        }
      }

      function NewsCgComponent_div_8_div_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.selectedNews.news.heading);
        }
      }

      function NewsCgComponent_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewsCgComponent_div_8_div_1_span_4_Template, 2, 1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NewsCgComponent_div_8_div_1_span_5_Template, 2, 1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.selectedNews.news.news_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selectedNews.news.language.language_code == "Dhv");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selectedNews.news.language.language_code != "Dhv");
        }
      }

      function NewsCgComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsCgComponent_div_8_div_1_Template, 6, 3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedNews);
        }
      }

      function NewsCgComponent_mat_card_content_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "No News in the List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NewsCgComponent_mat_card_content_10_ng_template_3_strong_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r8.title);
        }
      }

      function NewsCgComponent_mat_card_content_10_ng_template_3_strong_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r8.title);
        }
      }

      function NewsCgComponent_mat_card_content_10_ng_template_3_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r8.detail);
        }
      }

      function NewsCgComponent_mat_card_content_10_ng_template_3_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r8.detail);
        }
      }

      function NewsCgComponent_mat_card_content_10_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewsCgComponent_mat_card_content_10_ng_template_3_strong_0_Template, 2, 1, "strong", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsCgComponent_mat_card_content_10_ng_template_3_strong_1_Template, 2, 1, "strong", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewsCgComponent_mat_card_content_10_ng_template_3_span_3_Template, 2, 1, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewsCgComponent_mat_card_content_10_ng_template_3_span_4_Template, 2, 1, "span", 30);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.selectedNews.news.language.language_code == "Dhv");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.selectedNews.news.language.language_code != "Dhv");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.selectedNews.news.language.language_code == "Dhv");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.selectedNews.news.language.language_code != "Dhv");
        }
      }

      function NewsCgComponent_mat_card_content_10_ng_template_5_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsCgComponent_mat_card_content_10_ng_template_5_button_0_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.updateCg(row_r17.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "play_circle_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NewsCgComponent_mat_card_content_10_ng_template_5_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsCgComponent_mat_card_content_10_ng_template_5_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.updateCg(row_r17.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "play_circle_filled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NewsCgComponent_mat_card_content_10_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewsCgComponent_mat_card_content_10_ng_template_5_button_0_Template, 3, 0, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsCgComponent_mat_card_content_10_ng_template_5_button_1_Template, 3, 0, "button", 33);
        }

        if (rf & 2) {
          var row_r17 = ctx.row;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.viewingKey != row_r17.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.viewingKey == row_r17.id);
        }
      }

      function NewsCgComponent_mat_card_content_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-datatable", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-datatable-column", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewsCgComponent_mat_card_content_10_ng_template_3_Template, 5, 4, "ng-template", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-datatable-column", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NewsCgComponent_mat_card_content_10_ng_template_5_Template, 2, 2, "ng-template", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r2.selectedNews.news.newsbar)("columnMode", "flex")("headerHeight", 50)("footerHeight", 0)("rowHeight", "auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexGrow", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flexGrow", 1);
        }
      }

      var NewsCgComponent = /*#__PURE__*/function () {
        function NewsCgComponent(store, updates$) {
          _classCallCheck(this, NewsCgComponent);

          this.store = store;
          this.updates$ = updates$;
          this.NewsList = new _news_models_news__WEBPACK_IMPORTED_MODULE_1__["NewsList"]();
          this.selectedNewsKey = 0;
          this.viewingKeyTmp = null;
          this.viewingKey = null;
        }

        _createClass(NewsCgComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.store.dispatch(new _store_control_actions__WEBPACK_IMPORTED_MODULE_3__["GetNewsCgNews"]());
            this.updates$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_store_control_actions__WEBPACK_IMPORTED_MODULE_3__["GET_NEWS_CG_NEWS_SUCCESS"])).subscribe(function () {
              _this5.store.select(function (store) {
                return store.ControlState.newsCgState;
              }).subscribe(function (list) {
                _this5.NewsList = list;

                if (_this5.NewsList.list_news) {
                  _this5.selectedNews = _this5.NewsList.list_news[_this5.selectedNewsKey];
                } else {
                  _this5.selectedNews = null;
                }
              });
            });
            this.updates$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_store_control_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_NEWS_CG_NEWS_SUCCESS"])).subscribe(function () {
              _this5.viewingKey = _this5.viewingKeyTmp;
            });
          }
        }, {
          key: "nextNews",
          value: function nextNews() {
            if (this.selectedNewsKey < this.NewsList.list_news.length - 1) {
              this.selectedNewsKey = this.selectedNewsKey + 1;
            }

            this.selectedNews = this.NewsList.list_news[this.selectedNewsKey];
          }
        }, {
          key: "previousNews",
          value: function previousNews() {
            if (this.selectedNewsKey > 0) {
              this.selectedNewsKey = this.selectedNewsKey - 1;
            }

            this.selectedNews = this.NewsList.list_news[this.selectedNewsKey];
          }
        }, {
          key: "updateCg",
          value: function updateCg(id) {
            this.viewingKeyTmp = id;
            this.store.dispatch(new _store_control_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateNewsCgNews"]({
              news_bar_id: id
            }));
          }
        }, {
          key: "stopCg",
          value: function stopCg() {
            this.store.dispatch(new _store_control_actions__WEBPACK_IMPORTED_MODULE_3__["StopNewsCg"]());
          }
        }]);

        return NewsCgComponent;
      }();

      NewsCgComponent.ɵfac = function NewsCgComponent_Factory(t) {
        return new (t || NewsCgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]));
      };

      NewsCgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NewsCgComponent,
        selectors: [["app-news-cg"]],
        decls: 19,
        vars: 6,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-lg", "75", "fxFlex.gt-md", "60", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "mb-1"], [1, "mt-0"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "bg-light"], [1, "d-flex"], ["mat-icon-button", "", "color", "primary", 3, "disabled", "click"], ["aria-label", "Example icon-button with a heart icon"], ["fxFlex.gt-xs", "100", "fxFlex", "100", 4, "ngIf"], ["fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "text-danger", "font-bold", 2, "text-align", "center"], ["fxLayout", "column"], ["class", "dhv", "style", "text-align:center;", 4, "ngIf"], ["style", "text-align:center;", 4, "ngIf"], [1, "dhv", 2, "text-align", "center"], [2, "text-align", "center"], [1, "table-responsive"], [2, "padding-top", "100px"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "height", "100%", "padding", "0", "margin", "0", "display", "-webkit-box", "display", "-moz-box", "display", "-ms-flexbox", "display", "-webkit-flex", "display", "flex", "align-items", "center", "justify-content", "center"], ["fxLayout", "row"], ["src", "/assets/images/nothing-states/nothing-in-list.png", 2, "width", "auto", "height", "200px"], [1, "material", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight"], ["name", "News Bar", 3, "flexGrow"], ["ngx-datatable-cell-template", ""], ["name", "Action", 3, "flexGrow"], ["class", "dhv", 4, "ngIf"], [4, "ngIf"], ["class", "mat-text-muted", "class", "dhv", 4, "ngIf"], ["class", "mat-text-muted", 4, "ngIf"], [1, "dhv"], [1, "mat-text-muted"], ["mat-icon-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["aria-label", "Play CG"]],
        template: function NewsCgComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NewsCgComponent_div_8_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NewsCgComponent_mat_card_content_9_Template, 10, 0, "mat-card-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NewsCgComponent_mat_card_content_10_Template, 6, 7, "mat-card-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsCgComponent_Template_button_click_13_listener() {
              return ctx.previousNews();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "chevron_left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsCgComponent_Template_button_click_16_listener() {
              return ctx.nextNews();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "chevron_right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.NewsList.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.NewsList.list_news.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.NewsList.list_news.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.NewsList.list_news.length > 0 && ctx.selectedNews);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.NewsList.list_news);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.NewsList.list_news);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableColumnCellDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2wvbmV3cy1jZy9uZXdzLWNnLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsCgComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-news-cg',
            templateUrl: './news-cg.component.html',
            styleUrls: ['./news-cg.component.css']
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
          }, {
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "xqo9":
    /*!******************************************************!*\
      !*** ./src/app/control/cg-text/cg-text.component.ts ***!
      \******************************************************/

    /*! exports provided: CgTextComponent */

    /***/
    function xqo9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CgTextComponent", function () {
        return CgTextComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CgTextComponent = /*#__PURE__*/function () {
        function CgTextComponent() {
          _classCallCheck(this, CgTextComponent);
        }

        _createClass(CgTextComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CgTextComponent;
      }();

      CgTextComponent.ɵfac = function CgTextComponent_Factory(t) {
        return new (t || CgTextComponent)();
      };

      CgTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CgTextComponent,
        selectors: [["app-cg-text"]],
        decls: 2,
        vars: 0,
        template: function CgTextComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " cg-text works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2wvY2ctdGV4dC9jZy10ZXh0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CgTextComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cg-text',
            templateUrl: './cg-text.component.html',
            styleUrls: ['./cg-text.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=control-control-module-es5.js.map