(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./authentication/store/user.actions */
      61184);
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/services/auth.service */
      10629);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      62800);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/spinner.component */
      23812);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(auth, store, router, _location) {
          _classCallCheck(this, _AppComponent);

          this.auth = auth;
          this.store = store;
          this.router = router;
          this._location = _location;
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            console.log('app comp init!');
            this.loggedInSub = this.auth.loggedIn$.subscribe(function (loggedIn) {
              _this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_0__.GetUserSettings()); // redirect if logged in
              // this._location.back();

            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.loggedInSub.unsubscribe();
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__.SpinnerComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/platform-browser */
      91211);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/forms */
      24751);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common/http */
      58497);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.routing */
      76738);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layouts/full/full.component */
      76729);
      /* harmony import */


      var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layouts/blank/blank.component */
      71658);
      /* harmony import */


      var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./layouts/full/header/header.component */
      21183);
      /* harmony import */


      var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./layouts/full/sidebar/sidebar.component */
      2991);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      27094);
      /* harmony import */


      var _demo_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./demo-material-module */
      55408);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      5052);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/shared.module */
      44466);
      /* harmony import */


      var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/spinner.component */
      23812);
      /* harmony import */


      var _shared_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./shared/services/http-interceptor.service */
      19077);
      /* harmony import */


      var _shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shared/component/confirm-dialog/confirm-dialog.component */
      12329);
      /* harmony import */


      var _shared_component_view_news_dialog_view_news_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./shared/component/view-news-dialog/view-news-dialog.component */
      37173);
      /* harmony import */


      var _shared_component_add_ticker_news_dialog_add_ticker_news_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./shared/component/add-ticker-news-dialog/add-ticker-news-dialog.component */
      74075);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @ngrx/store */
      62800);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ngrx/effects */
      53863);
      /* harmony import */


      var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @ngrx/store-devtools */
      23706);
      /* harmony import */


      var _store_app_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./store/app.reducer */
      5754);
      /* harmony import */


      var _authentication_store_user_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./authentication/store/user.effects */
      3134);
      /* harmony import */


      var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ngx-contextmenu */
      88028);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../environments/environment */
      92340);
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/fire */
      77667);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/fire/firestore */
      20630);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      74788); //import { SmsComponent } from './sms/sms.component';


      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true,
        wheelSpeed: 2,
        wheelPropagation: true
      };

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
          useClass: _shared_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_9__.HttpInterceptorService,
          multi: true
        }, {
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_19__.LocationStrategy,
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_19__.HashLocationStrategy
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule, _demo_material_module__WEBPACK_IMPORTED_MODULE_6__.DemoMaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__.FlexLayoutModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule.forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_0__.AppRoutes, {
          relativeLinkResolution: 'legacy'
        }), _ngrx_store__WEBPACK_IMPORTED_MODULE_25__.StoreModule.forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_13__.reducers, {
          metaReducers: _store_app_reducer__WEBPACK_IMPORTED_MODULE_13__.metaReducers
        }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__.EffectsModule.forRoot([_authentication_store_user_effects__WEBPACK_IMPORTED_MODULE_14__.UserEffects]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_27__.StoreDevtoolsModule.instrument({
          maxAge: 50
        }), ngx_contextmenu__WEBPACK_IMPORTED_MODULE_28__.ContextMenuModule.forRoot(), _angular_fire__WEBPACK_IMPORTED_MODULE_29__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__.environment.firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_30__.AngularFirestoreModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__.FullComponent, _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_4__.AppHeaderComponent, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_8__.SpinnerComponent, _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_3__.AppBlankComponent, _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.AppSidebarComponent, _shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__.ConfirmDialogComponent, _shared_component_view_news_dialog_view_news_dialog_component__WEBPACK_IMPORTED_MODULE_11__.ViewNewsDialogComponent, _shared_component_add_ticker_news_dialog_add_ticker_news_dialog_component__WEBPACK_IMPORTED_MODULE_12__.AddTickerNewsDialogComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule, _demo_material_module__WEBPACK_IMPORTED_MODULE_6__.DemoMaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__.FlexLayoutModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_25__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_27__.StoreDevtoolsModule, ngx_contextmenu__WEBPACK_IMPORTED_MODULE_28__.ContextMenuModule, _angular_fire__WEBPACK_IMPORTED_MODULE_29__.AngularFireModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_30__.AngularFirestoreModule]
        });
      })();
      /***/

    },

    /***/
    76738:
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutes": function AppRoutes() {
          return (
            /* binding */
            _AppRoutes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layouts/full/full.component */
      76729);
      /* harmony import */


      var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layouts/blank/blank.component */
      71658);
      /* harmony import */


      var _shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/services/auth.guard */
      91643);

      var _AppRoutes = [{
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__.FullComponent,
        children: [{
          path: 'admin',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_ng2-dragula___ivy_ngcc___dist_fesm2015_ng2-dragula_js"), __webpack_require__.e("src_app_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./admin/admin.module */
            77095)).then(function (m) {
              return m.AdminModule;
            });
          } // canActivate: [AuthGuard],
          // data: { isPublic: false, role: 'editor' }

        }, {
          path: '',
          redirectTo: '/user',
          pathMatch: 'full'
        }, {
          path: 'user',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js-node_modules_ng2-charts-0b3cb0"), __webpack_require__.e("src_app_dashboards_dashboards_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./dashboards/dashboards.module */
            28515)).then(function (m) {
              return m.DashboardsModule;
            });
          },
          canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
          data: {
            isPublic: true,
            role: 'user'
          }
        }, {
          path: 'editor',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_ng2-dragula___ivy_ngcc___dist_fesm2015_ng2-dragula_js"), __webpack_require__.e("src_app_editor_editor_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./editor/editor.module */
            93164)).then(function (m) {
              return m.EditorModule;
            });
          } // canActivate: [AuthGuard],
          // data: { isPublic: false, role: 'editor' }

        }, {
          path: 'news',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_news_news_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./news/news.module */
            51926)).then(function (m) {
              return m.NewsModule;
            });
          },
          canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
          data: {
            isPublic: false,
            role: 'journalist'
          }
        }, {
          path: 'control',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_ng2-dragula___ivy_ngcc___dist_fesm2015_ng2-dragula_js"), __webpack_require__.e("src_app_control_control_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./control/control.module */
            21477)).then(function (m) {
              return m.ControlModule;
            });
          },
          canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
          data: {
            isPublic: false,
            role: 'journalist'
          }
        }, {
          path: 'material',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_material-component_material_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./material-component/material.module */
            48877)).then(function (m) {
              return m.MaterialComponentsModule;
            });
          }
        }, {
          path: 'apps',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_ng2-dragula___ivy_ngcc___dist_fesm2015_ng2-dragula_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_ngx-quill_fesm2015_ngx-quill_js"), __webpack_require__.e("src_app_apps_apps_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./apps/apps.module */
            99269)).then(function (m) {
              return m.AppsModule;
            });
          }
        }, {
          path: 'forms',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_ng2-validation_dist_index_js"), __webpack_require__.e("default-node_modules_ngx-quill_fesm2015_ngx-quill_js"), __webpack_require__.e("src_app_forms_forms_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./forms/forms.module */
            71366)).then(function (m) {
              return m.FormModule;
            });
          }
        }, {
          path: 'tables',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("src_app_tables_tables_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./tables/tables.module */
            81439)).then(function (m) {
              return m.TablesModule;
            });
          }
        }, {
          path: 'datatables',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("src_app_datatables_datatables_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./datatables/datatables.module */
            59630)).then(function (m) {
              return m.DataTablesModule;
            });
          }
        }, {
          path: 'pages',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("src_app_pages_pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./pages/pages.module */
            18950)).then(function (m) {
              return m.PagesModule;
            });
          }
        }, {
          path: 'widgets',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_widgets_widgets_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./widgets/widgets.module */
            50546)).then(function (m) {
              return m.WidgetsModule;
            });
          }
        }, {
          path: 'charts',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js-node_modules_ng2-charts-0b3cb0"), __webpack_require__.e("src_app_charts_chartslib_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./charts/chartslib.module */
            73689)).then(function (m) {
              return m.ChartslibModule;
            });
          }
        }]
      }, {
        path: '',
        component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__.AppBlankComponent,
        children: [{
          path: 'authentication',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_ng2-validation_dist_index_js"), __webpack_require__.e("src_app_authentication_authentication_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./authentication/authentication.module */
            41082)).then(function (m) {
              return m.AuthenticationModule;
            });
          }
        }],
        data: {
          isPublic: true
        }
      }, {
        path: '**',
        redirectTo: 'authentication/404'
      }];
      /***/
    },

    /***/
    61184:
    /*!******************************************************!*\
      !*** ./src/app/authentication/store/user.actions.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "USER_LOGIN": function USER_LOGIN() {
          return (
            /* binding */
            _USER_LOGIN
          );
        },

        /* harmony export */
        "USER_LOGIN_SUCCESS": function USER_LOGIN_SUCCESS() {
          return (
            /* binding */
            _USER_LOGIN_SUCCESS
          );
        },

        /* harmony export */
        "USER_LOGIN_ERROR": function USER_LOGIN_ERROR() {
          return (
            /* binding */
            _USER_LOGIN_ERROR
          );
        },

        /* harmony export */
        "USER_LOGOUT": function USER_LOGOUT() {
          return (
            /* binding */
            _USER_LOGOUT
          );
        },

        /* harmony export */
        "USER_LOGOUT_SUCCESS": function USER_LOGOUT_SUCCESS() {
          return (
            /* binding */
            _USER_LOGOUT_SUCCESS
          );
        },

        /* harmony export */
        "USER_LOGOUT_ERROR": function USER_LOGOUT_ERROR() {
          return (
            /* binding */
            _USER_LOGOUT_ERROR
          );
        },

        /* harmony export */
        "USER_GET_SETTINGS": function USER_GET_SETTINGS() {
          return (
            /* binding */
            _USER_GET_SETTINGS
          );
        },

        /* harmony export */
        "USER_GET_SETTINGS_SUCCESS": function USER_GET_SETTINGS_SUCCESS() {
          return (
            /* binding */
            _USER_GET_SETTINGS_SUCCESS
          );
        },

        /* harmony export */
        "USER_GET_SETTINGS_ERROR": function USER_GET_SETTINGS_ERROR() {
          return (
            /* binding */
            _USER_GET_SETTINGS_ERROR
          );
        },

        /* harmony export */
        "SERVER_USER_GET_SETTINGS": function SERVER_USER_GET_SETTINGS() {
          return (
            /* binding */
            _SERVER_USER_GET_SETTINGS
          );
        },

        /* harmony export */
        "SERVER_USER_GET_SETTINGS_SUCCESS": function SERVER_USER_GET_SETTINGS_SUCCESS() {
          return (
            /* binding */
            _SERVER_USER_GET_SETTINGS_SUCCESS
          );
        },

        /* harmony export */
        "SERVER_USER_GET_SETTINGS_ERROR": function SERVER_USER_GET_SETTINGS_ERROR() {
          return (
            /* binding */
            _SERVER_USER_GET_SETTINGS_ERROR
          );
        },

        /* harmony export */
        "USER_GET_ROLES": function USER_GET_ROLES() {
          return (
            /* binding */
            _USER_GET_ROLES
          );
        },

        /* harmony export */
        "USER_401": function USER_401() {
          return (
            /* binding */
            _USER_
          );
        },

        /* harmony export */
        "UserLogin": function UserLogin() {
          return (
            /* binding */
            _UserLogin
          );
        },

        /* harmony export */
        "UserLoginSuccess": function UserLoginSuccess() {
          return (
            /* binding */
            _UserLoginSuccess
          );
        },

        /* harmony export */
        "UserLoginError": function UserLoginError() {
          return (
            /* binding */
            _UserLoginError
          );
        },

        /* harmony export */
        "UserLogout": function UserLogout() {
          return (
            /* binding */
            _UserLogout
          );
        },

        /* harmony export */
        "UserLogoutSuccess": function UserLogoutSuccess() {
          return (
            /* binding */
            _UserLogoutSuccess
          );
        },

        /* harmony export */
        "UserLogoutError": function UserLogoutError() {
          return (
            /* binding */
            _UserLogoutError
          );
        },

        /* harmony export */
        "User401": function User401() {
          return (
            /* binding */
            _User
          );
        },

        /* harmony export */
        "GetUserSettings": function GetUserSettings() {
          return (
            /* binding */
            _GetUserSettings
          );
        },

        /* harmony export */
        "GetUserSettingsSuccess": function GetUserSettingsSuccess() {
          return (
            /* binding */
            _GetUserSettingsSuccess
          );
        },

        /* harmony export */
        "GetUserSettingsError": function GetUserSettingsError() {
          return (
            /* binding */
            _GetUserSettingsError
          );
        },

        /* harmony export */
        "GetUserRoles": function GetUserRoles() {
          return (
            /* binding */
            _GetUserRoles
          );
        },

        /* harmony export */
        "ServerGetUserSettings": function ServerGetUserSettings() {
          return (
            /* binding */
            _ServerGetUserSettings
          );
        },

        /* harmony export */
        "ServerGetUserSettingsSuccess": function ServerGetUserSettingsSuccess() {
          return (
            /* binding */
            _ServerGetUserSettingsSuccess
          );
        },

        /* harmony export */
        "ServerGetUserSettingsError": function ServerGetUserSettingsError() {
          return (
            /* binding */
            _ServerGetUserSettingsError
          );
        }
        /* harmony export */

      });

      var _USER_LOGIN = '[User] USER_LOGIN';
      var _USER_LOGIN_SUCCESS = '[User] USER_LOGIN_SUCCESS';
      var _USER_LOGIN_ERROR = '[User] USER_LOGIN_ERROR';
      var _USER_LOGOUT = '[User] USER_LOGOUT';
      var _USER_LOGOUT_SUCCESS = '[User] USER_LOGOUT_SUCCESS';
      var _USER_LOGOUT_ERROR = '[User] USER_LOGOUT_ERROR';
      var _USER_GET_SETTINGS = '[User] USER_GET_SETTINGS';
      var _USER_GET_SETTINGS_SUCCESS = '[User] USER_GET_SETTINGS_SUCCESS';
      var _USER_GET_SETTINGS_ERROR = '[User] USER_GET_SETTINGS_ERROR';
      var _SERVER_USER_GET_SETTINGS = '[User] SERVER_USER_GET_SETTINGS';
      var _SERVER_USER_GET_SETTINGS_SUCCESS = '[User] SERVER_USER_GET_SETTINGS_SUCCESS';
      var _SERVER_USER_GET_SETTINGS_ERROR = '[User] SERVER_USER_GET_SETTINGS_ERROR';
      var _USER_GET_ROLES = '[User] USER_GET_ROLES';
      var _USER_ = '[User] USER_401';

      var _UserLogin = function _UserLogin(payload) {
        _classCallCheck(this, _UserLogin);

        this.payload = payload;
        this.type = _USER_LOGIN;
      };

      var _UserLoginSuccess = function _UserLoginSuccess(payload) {
        _classCallCheck(this, _UserLoginSuccess);

        this.payload = payload;
        this.type = _USER_LOGIN_SUCCESS;
      };

      var _UserLoginError = function _UserLoginError() {
        _classCallCheck(this, _UserLoginError);

        this.type = _USER_LOGIN_ERROR;
      };

      var _UserLogout = function _UserLogout() {
        _classCallCheck(this, _UserLogout);

        this.type = _USER_LOGOUT;
      };

      var _UserLogoutSuccess = function _UserLogoutSuccess() {
        _classCallCheck(this, _UserLogoutSuccess);

        this.type = _USER_LOGOUT_SUCCESS; //constructor(public payload: User) {}
      };

      var _UserLogoutError = function _UserLogoutError() {
        _classCallCheck(this, _UserLogoutError);

        this.type = _USER_LOGOUT_ERROR;
      };

      var _User = function _User() {
        _classCallCheck(this, _User);

        this.type = _USER_;
      };

      var _GetUserSettings = function _GetUserSettings() {
        _classCallCheck(this, _GetUserSettings);

        this.type = _USER_GET_SETTINGS;
      };

      var _GetUserSettingsSuccess = function _GetUserSettingsSuccess(payload) {
        _classCallCheck(this, _GetUserSettingsSuccess);

        this.payload = payload;
        this.type = _USER_GET_SETTINGS_SUCCESS;
      };

      var _GetUserSettingsError = function _GetUserSettingsError() {
        _classCallCheck(this, _GetUserSettingsError);

        this.type = _USER_GET_SETTINGS_ERROR;
      };

      var _GetUserRoles = function _GetUserRoles() {
        _classCallCheck(this, _GetUserRoles);

        this.type = _USER_GET_ROLES;
      };
      /**
       * Fetch user settings from server
       */


      var _ServerGetUserSettings = function _ServerGetUserSettings() {
        _classCallCheck(this, _ServerGetUserSettings);

        this.type = _SERVER_USER_GET_SETTINGS;
      };

      var _ServerGetUserSettingsSuccess = function _ServerGetUserSettingsSuccess(payload) {
        _classCallCheck(this, _ServerGetUserSettingsSuccess);

        this.payload = payload;
        this.type = _SERVER_USER_GET_SETTINGS_SUCCESS;
      };

      var _ServerGetUserSettingsError = function _ServerGetUserSettingsError() {
        _classCallCheck(this, _ServerGetUserSettingsError);

        this.type = _SERVER_USER_GET_SETTINGS_ERROR;
      };
      /***/

    },

    /***/
    3134:
    /*!******************************************************!*\
      !*** ./src/app/authentication/store/user.effects.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserEffects": function UserEffects() {
          return (
            /* binding */
            _UserEffects
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      69165);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/effects */
      53863);
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/services/auth.service */
      10629);
      /* harmony import */


      var _user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user.actions */
      61184);
      /* harmony import */


      var _news_store_news_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../news/store/news.actions */
      15490);
      /* harmony import */


      var _editor_store_news_editor_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../editor/store/news-editor.actions */
      23239);
      /* harmony import */


      var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/services/session.service */
      75986);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngrx/store */
      62800);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      3984);

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

      var _UserEffects = function _UserEffects(actions, authService, sessionService, store, router) {
        var _this2 = this;

        _classCallCheck(this, _UserEffects);

        this.actions = actions;
        this.authService = authService;
        this.sessionService = sessionService;
        this.store = store;
        this.router = router;
        this.LogIn = this.actions.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.USER_LOGIN), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (action) {
          return action.payload;
        }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (payload) {
          return _this2.authService.signIn(payload.email, payload.password).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (user) {
            // console.log(user);
            _this2.authService.doSignIn(user);

            return new _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserLoginSuccess(user);
          }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(function (error) {
            console.log(error);
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserLoginError());
          }));
        }));
        this.LogInSuccess = this.actions.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.USER_LOGIN_SUCCESS), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (action) {
          return action.payload;
        }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (user) {
          // console.log(user);
          if (_this2.sessionService.saveSession(user)) {// this.router.navigate(['/dashboard/default']);
            // this._location.back();
          } // localStorage.setItem('token', user.user.token.token);

        }));
        this.GetUserSettings = this.actions.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.USER_GET_SETTINGS), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (action) {
          return action;
        }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (payload) {
          return _this2.sessionService.getUserSetting().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (user) {
            return new _user_actions__WEBPACK_IMPORTED_MODULE_1__.GetUserSettingsSuccess(user);
          }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(function (error) {
            console.log(error);
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _user_actions__WEBPACK_IMPORTED_MODULE_1__.GetUserSettingsError());
          }));
        }));
        this.ServerGetUserSettings = this.actions.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.SERVER_USER_GET_SETTINGS), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (action) {
          return action;
        }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (payload) {
          return _this2.sessionService.updateUserSettings().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (user) {
            _this2.sessionService.saveSession(user);

            return new _user_actions__WEBPACK_IMPORTED_MODULE_1__.ServerGetUserSettingsSuccess(user);
          }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(function (error) {
            console.log(error);
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _user_actions__WEBPACK_IMPORTED_MODULE_1__.ServerGetUserSettingsError());
          }));
        }));
        this.UserLogout = this.actions.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.USER_LOGOUT), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (action) {
          return action;
        }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (payload) {
          _this2.store.dispatch(new _news_store_news_actions__WEBPACK_IMPORTED_MODULE_2__.LogoutNewsState());

          _this2.store.dispatch(new _editor_store_news_editor_actions__WEBPACK_IMPORTED_MODULE_3__.LogoutEditorState());

          _this2.authService.doSignOut();

          _this2.router.navigate(['/authentication/login']); // return Observable.of(new UserActions.UserLogoutSuccess(this.sessionService.getUserLogoutSetting()));


          return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserLogoutSuccess());
        }));
        this.UserLogoutSuccess = this.actions.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.USER_LOGOUT_SUCCESS), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (action) {
          //location.reload();
          _this2.router.navigate(['/authentication/login']);
        }));
        this.User401 = this.actions.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.USER_401), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (payload) {
          console.warn('401 user found!!');
          return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserLogout());
        }));
      };

      _UserEffects.ɵfac = function UserEffects_Factory(t) {
        return new (t || _UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
      };

      _UserEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
        token: _UserEffects,
        factory: _UserEffects.ɵfac
      });

      __decorate([(0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Effect)(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_13__.Observable)], _UserEffects.prototype, "LogIn", void 0);

      __decorate([(0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Effect)({
        dispatch: false
      }), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_13__.Observable)], _UserEffects.prototype, "LogInSuccess", void 0);

      __decorate([(0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Effect)(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_13__.Observable)], _UserEffects.prototype, "GetUserSettings", void 0);

      __decorate([(0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Effect)(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_13__.Observable)], _UserEffects.prototype, "ServerGetUserSettings", void 0);

      __decorate([(0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Effect)(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_13__.Observable)], _UserEffects.prototype, "UserLogout", void 0);

      __decorate([(0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Effect)(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_13__.Observable)], _UserEffects.prototype, "User401", void 0);
      /***/

    },

    /***/
    56876:
    /*!******************************************************!*\
      !*** ./src/app/authentication/store/user.reducer.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "initialState": function initialState() {
          return (
            /* binding */
            _initialState
          );
        },

        /* harmony export */
        "reducer": function reducer() {
          return (
            /* binding */
            _reducer
          );
        },

        /* harmony export */
        "getUserState": function getUserState() {
          return (
            /* binding */
            _getUserState
          );
        },

        /* harmony export */
        "getUser": function getUser() {
          return (
            /* binding */
            _getUser
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      62800);
      /* harmony import */


      var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user.actions */
      61184);
      /* harmony import */


      var _shared_models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/models/user */
      90193);

      var myuser = {
        user: {
          email: null,
          name: null,
          token: {
            token: null
          },
          roles: null,
          roles_a: null,
          profile: new _shared_models_user__WEBPACK_IMPORTED_MODULE_1__.Profile()
        }
      };
      var _initialState = myuser;

      function _reducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _user_actions__WEBPACK_IMPORTED_MODULE_0__.USER_LOGIN:
            {
              return Object.assign({}, state);
            }

          case _user_actions__WEBPACK_IMPORTED_MODULE_0__.USER_LOGIN_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                user: action.payload
              });
            }

          case _user_actions__WEBPACK_IMPORTED_MODULE_0__.USER_GET_SETTINGS:
            {
              return Object.assign({}, state);
            }

          case _user_actions__WEBPACK_IMPORTED_MODULE_0__.USER_GET_SETTINGS_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                user: action.payload
              });
            }

          case _user_actions__WEBPACK_IMPORTED_MODULE_0__.USER_LOGOUT:
            {
              // return {
              //   ...state
              // };
              return _initialState;
            }

          case _user_actions__WEBPACK_IMPORTED_MODULE_0__.USER_LOGOUT_SUCCESS:
            {
              // return {
              //   // ...state,
              //   // user: action.payload,
              //   user: { email: null, name: null, token: {token: null}, roles: null, roles_a: null }
              // };
              return _initialState;
            }

          case _user_actions__WEBPACK_IMPORTED_MODULE_0__.SERVER_USER_GET_SETTINGS:
            {
              return Object.assign({}, state);
            }

          case _user_actions__WEBPACK_IMPORTED_MODULE_0__.SERVER_USER_GET_SETTINGS_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                user: action.payload
              });
            }

          default:
            {
              return state;
            }
        }
      }

      var _getUserState = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('userState');

      var _getUser = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(_getUserState, function (state) {
        return state.user;
      });
      /***/

    },

    /***/
    55408:
    /*!*****************************************!*\
      !*** ./src/app/demo-material-module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DemoMaterialModule": function DemoMaterialModule() {
          return (
            /* binding */
            _DemoMaterialModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      50296);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      2895);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      31141);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      7639);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/checkbox */
      89713);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/chips */
      23202);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/datepicker */
      12895);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      20592);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/expansion */
      23900);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      46833);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/grid-list */
      81197);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      49356);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      64372);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/list */
      45363);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/menu */
      23021);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/paginator */
      23487);
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      73985);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      49453);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/radio */
      72742);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/select */
      61260);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/sidenav */
      4008);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      73624);
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/slider */
      68956);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      3069);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/sort */
      60857);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/stepper */
      89240);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/table */
      589);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/tabs */
      40859);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/toolbar */
      73121);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/tooltip */
      64855);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/core */
      64677);
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/cdk/table */
      3818);
      /* harmony import */


      var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/cdk/accordion */
      1638);
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      32371);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      46794);
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      933);
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/cdk/platform */
      99642);
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/cdk/observers */
      7721);
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/cdk/portal */
      2414);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /**
       * NgModule that includes all Material modules that are required to serve the demo-app.
       */


      var _DemoMaterialModule = function _DemoMaterialModule() {
        _classCallCheck(this, _DemoMaterialModule);
      };

      _DemoMaterialModule.ɵfac = function DemoMaterialModule_Factory(t) {
        return new (t || _DemoMaterialModule)();
      };

      _DemoMaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _DemoMaterialModule
      });
      _DemoMaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipsModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__.MatSliderModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__.MatStepperModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__.CdkTableModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__.A11yModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__.BidiModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__.CdkAccordionModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_36__.ObserversModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_37__.OverlayModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__.PlatformModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__.PortalModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_DemoMaterialModule, {
          exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipsModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__.MatSliderModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__.MatStepperModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__.CdkTableModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__.A11yModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__.BidiModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__.CdkAccordionModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_36__.ObserversModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_37__.OverlayModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__.PlatformModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__.PortalModule]
        });
      })();
      /***/

    },

    /***/
    23239:
    /*!*****************************************************!*\
      !*** ./src/app/editor/store/news-editor.actions.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GET_REVIEW_NEWS": function GET_REVIEW_NEWS() {
          return (
            /* binding */
            _GET_REVIEW_NEWS
          );
        },

        /* harmony export */
        "GET_REVIEW_NEWS_SUCCESS": function GET_REVIEW_NEWS_SUCCESS() {
          return (
            /* binding */
            _GET_REVIEW_NEWS_SUCCESS
          );
        },

        /* harmony export */
        "GET_REVIEW_NEWS_ERROR": function GET_REVIEW_NEWS_ERROR() {
          return (
            /* binding */
            _GET_REVIEW_NEWS_ERROR
          );
        },

        /* harmony export */
        "APPROVE_NEWS": function APPROVE_NEWS() {
          return (
            /* binding */
            _APPROVE_NEWS
          );
        },

        /* harmony export */
        "APPROVE_NEWS_SUCCESS": function APPROVE_NEWS_SUCCESS() {
          return (
            /* binding */
            _APPROVE_NEWS_SUCCESS
          );
        },

        /* harmony export */
        "APPROVE_NEWS_ERROR": function APPROVE_NEWS_ERROR() {
          return (
            /* binding */
            _APPROVE_NEWS_ERROR
          );
        },

        /* harmony export */
        "REJECT_NEWS": function REJECT_NEWS() {
          return (
            /* binding */
            _REJECT_NEWS
          );
        },

        /* harmony export */
        "REJECT_NEWS_SUCCESS": function REJECT_NEWS_SUCCESS() {
          return (
            /* binding */
            _REJECT_NEWS_SUCCESS
          );
        },

        /* harmony export */
        "REJECT_NEWS_ERROR": function REJECT_NEWS_ERROR() {
          return (
            /* binding */
            _REJECT_NEWS_ERROR
          );
        },

        /* harmony export */
        "GET_LISTS": function GET_LISTS() {
          return (
            /* binding */
            _GET_LISTS
          );
        },

        /* harmony export */
        "GET_LISTS_SUCCESS": function GET_LISTS_SUCCESS() {
          return (
            /* binding */
            _GET_LISTS_SUCCESS
          );
        },

        /* harmony export */
        "GET_LISTS_ERROR": function GET_LISTS_ERROR() {
          return (
            /* binding */
            _GET_LISTS_ERROR
          );
        },

        /* harmony export */
        "GET_LISTS_BY_DATE": function GET_LISTS_BY_DATE() {
          return (
            /* binding */
            _GET_LISTS_BY_DATE
          );
        },

        /* harmony export */
        "GET_LISTS_BY_DATE_SUCCESS": function GET_LISTS_BY_DATE_SUCCESS() {
          return (
            /* binding */
            _GET_LISTS_BY_DATE_SUCCESS
          );
        },

        /* harmony export */
        "GET_LISTS_BY_DATE_ERROR": function GET_LISTS_BY_DATE_ERROR() {
          return (
            /* binding */
            _GET_LISTS_BY_DATE_ERROR
          );
        },

        /* harmony export */
        "ADD_TO_LIST": function ADD_TO_LIST() {
          return (
            /* binding */
            _ADD_TO_LIST
          );
        },

        /* harmony export */
        "ADD_TO_LIST_SUCCESS": function ADD_TO_LIST_SUCCESS() {
          return (
            /* binding */
            _ADD_TO_LIST_SUCCESS
          );
        },

        /* harmony export */
        "ADD_TO_LIST_ERROR": function ADD_TO_LIST_ERROR() {
          return (
            /* binding */
            _ADD_TO_LIST_ERROR
          );
        },

        /* harmony export */
        "REMOVE_FROM_LIST": function REMOVE_FROM_LIST() {
          return (
            /* binding */
            _REMOVE_FROM_LIST
          );
        },

        /* harmony export */
        "REMOVE_FROM_LIST_SUCCESS": function REMOVE_FROM_LIST_SUCCESS() {
          return (
            /* binding */
            _REMOVE_FROM_LIST_SUCCESS
          );
        },

        /* harmony export */
        "REMOVE_FROM_LIST_ERROR": function REMOVE_FROM_LIST_ERROR() {
          return (
            /* binding */
            _REMOVE_FROM_LIST_ERROR
          );
        },

        /* harmony export */
        "UPDATE_LIST_ORDER": function UPDATE_LIST_ORDER() {
          return (
            /* binding */
            _UPDATE_LIST_ORDER
          );
        },

        /* harmony export */
        "UPDATE_LIST_ORDER_SUCCESS": function UPDATE_LIST_ORDER_SUCCESS() {
          return (
            /* binding */
            _UPDATE_LIST_ORDER_SUCCESS
          );
        },

        /* harmony export */
        "UPDATE_LIST_ORDER_ERROR": function UPDATE_LIST_ORDER_ERROR() {
          return (
            /* binding */
            _UPDATE_LIST_ORDER_ERROR
          );
        },

        /* harmony export */
        "UPDATE_SELECTED_LIST": function UPDATE_SELECTED_LIST() {
          return (
            /* binding */
            _UPDATE_SELECTED_LIST
          );
        },

        /* harmony export */
        "UPDATE_SELECTED_LIST_SUCCESS": function UPDATE_SELECTED_LIST_SUCCESS() {
          return (
            /* binding */
            _UPDATE_SELECTED_LIST_SUCCESS
          );
        },

        /* harmony export */
        "UPDATE_SELECTED_LIST_ERROR": function UPDATE_SELECTED_LIST_ERROR() {
          return (
            /* binding */
            _UPDATE_SELECTED_LIST_ERROR
          );
        },

        /* harmony export */
        "GET_SELECTED_LIST": function GET_SELECTED_LIST() {
          return (
            /* binding */
            _GET_SELECTED_LIST
          );
        },

        /* harmony export */
        "GET_SELECTED_LIST_SUCCESS": function GET_SELECTED_LIST_SUCCESS() {
          return (
            /* binding */
            _GET_SELECTED_LIST_SUCCESS
          );
        },

        /* harmony export */
        "GET_SELECTED_LIST_ERROR": function GET_SELECTED_LIST_ERROR() {
          return (
            /* binding */
            _GET_SELECTED_LIST_ERROR
          );
        },

        /* harmony export */
        "CHANGE_REVIEW_NEWS_LOADED": function CHANGE_REVIEW_NEWS_LOADED() {
          return (
            /* binding */
            _CHANGE_REVIEW_NEWS_LOADED
          );
        },

        /* harmony export */
        "LOGOUT_EDITOR_STATE": function LOGOUT_EDITOR_STATE() {
          return (
            /* binding */
            _LOGOUT_EDITOR_STATE
          );
        },

        /* harmony export */
        "GetReviewNews": function GetReviewNews() {
          return (
            /* binding */
            _GetReviewNews
          );
        },

        /* harmony export */
        "GetReviewNewsSuccess": function GetReviewNewsSuccess() {
          return (
            /* binding */
            _GetReviewNewsSuccess
          );
        },

        /* harmony export */
        "GetReviewNewsError": function GetReviewNewsError() {
          return (
            /* binding */
            _GetReviewNewsError
          );
        },

        /* harmony export */
        "ApproveNews": function ApproveNews() {
          return (
            /* binding */
            _ApproveNews
          );
        },

        /* harmony export */
        "ApproveNewsSuccess": function ApproveNewsSuccess() {
          return (
            /* binding */
            _ApproveNewsSuccess
          );
        },

        /* harmony export */
        "ApproveNewsError": function ApproveNewsError() {
          return (
            /* binding */
            _ApproveNewsError
          );
        },

        /* harmony export */
        "RejectNews": function RejectNews() {
          return (
            /* binding */
            _RejectNews
          );
        },

        /* harmony export */
        "RejectNewsSuccess": function RejectNewsSuccess() {
          return (
            /* binding */
            _RejectNewsSuccess
          );
        },

        /* harmony export */
        "RejectNewsError": function RejectNewsError() {
          return (
            /* binding */
            _RejectNewsError
          );
        },

        /* harmony export */
        "GetLists": function GetLists() {
          return (
            /* binding */
            _GetLists
          );
        },

        /* harmony export */
        "GetListsSuccess": function GetListsSuccess() {
          return (
            /* binding */
            _GetListsSuccess
          );
        },

        /* harmony export */
        "GetListsError": function GetListsError() {
          return (
            /* binding */
            _GetListsError
          );
        },

        /* harmony export */
        "GetListsByDate": function GetListsByDate() {
          return (
            /* binding */
            _GetListsByDate
          );
        },

        /* harmony export */
        "GetListsByDateSuccess": function GetListsByDateSuccess() {
          return (
            /* binding */
            _GetListsByDateSuccess
          );
        },

        /* harmony export */
        "GetListsByDateError": function GetListsByDateError() {
          return (
            /* binding */
            _GetListsByDateError
          );
        },

        /* harmony export */
        "AddToList": function AddToList() {
          return (
            /* binding */
            _AddToList
          );
        },

        /* harmony export */
        "AddToListSuccess": function AddToListSuccess() {
          return (
            /* binding */
            _AddToListSuccess
          );
        },

        /* harmony export */
        "AddToListError": function AddToListError() {
          return (
            /* binding */
            _AddToListError
          );
        },

        /* harmony export */
        "RemoveFromList": function RemoveFromList() {
          return (
            /* binding */
            _RemoveFromList
          );
        },

        /* harmony export */
        "RemoveFromListSuccess": function RemoveFromListSuccess() {
          return (
            /* binding */
            _RemoveFromListSuccess
          );
        },

        /* harmony export */
        "RemoveFromListError": function RemoveFromListError() {
          return (
            /* binding */
            _RemoveFromListError
          );
        },

        /* harmony export */
        "UpdateListOrder": function UpdateListOrder() {
          return (
            /* binding */
            _UpdateListOrder
          );
        },

        /* harmony export */
        "UpdateListOrderSuccess": function UpdateListOrderSuccess() {
          return (
            /* binding */
            _UpdateListOrderSuccess
          );
        },

        /* harmony export */
        "UpdateListOrderError": function UpdateListOrderError() {
          return (
            /* binding */
            _UpdateListOrderError
          );
        },

        /* harmony export */
        "GetSelectedList": function GetSelectedList() {
          return (
            /* binding */
            _GetSelectedList
          );
        },

        /* harmony export */
        "GetSelectedListSuccess": function GetSelectedListSuccess() {
          return (
            /* binding */
            _GetSelectedListSuccess
          );
        },

        /* harmony export */
        "GetSelectedListError": function GetSelectedListError() {
          return (
            /* binding */
            _GetSelectedListError
          );
        },

        /* harmony export */
        "UpdateSelectedList": function UpdateSelectedList() {
          return (
            /* binding */
            _UpdateSelectedList
          );
        },

        /* harmony export */
        "UpdateSelectedListSuccess": function UpdateSelectedListSuccess() {
          return (
            /* binding */
            _UpdateSelectedListSuccess
          );
        },

        /* harmony export */
        "UpdateSelectedListError": function UpdateSelectedListError() {
          return (
            /* binding */
            _UpdateSelectedListError
          );
        },

        /* harmony export */
        "LogoutEditorState": function LogoutEditorState() {
          return (
            /* binding */
            _LogoutEditorState
          );
        },

        /* harmony export */
        "UpdateReviewNewsLoaded": function UpdateReviewNewsLoaded() {
          return (
            /* binding */
            _UpdateReviewNewsLoaded
          );
        }
        /* harmony export */

      });

      var _GET_REVIEW_NEWS = '[NewsEditor] GET_REVIEW_NEWS';
      var _GET_REVIEW_NEWS_SUCCESS = '[NewsEditor] GET_REVIEW_NEWS_SUCCESS';
      var _GET_REVIEW_NEWS_ERROR = '[NewsEditor] GET_REVIEW_NEWS_ERROR';
      var _APPROVE_NEWS = '[NewsEditor] APPROVE_NEWS';
      var _APPROVE_NEWS_SUCCESS = '[NewsEditor] APPROVE_NEWS_SUCCESS';
      var _APPROVE_NEWS_ERROR = '[NewsEditor] APPROVE_NEWS_ERROR';
      var _REJECT_NEWS = '[NewsEditor] REJECT_NEWS';
      var _REJECT_NEWS_SUCCESS = '[NewsEditor] REJECT_NEWS_SUCCESS';
      var _REJECT_NEWS_ERROR = '[NewsEditor] REJECT_NEWS_ERROR';
      /**
       * ------------------------------------------------------------------------------> LIST ACTIONS
       */

      var _GET_LISTS = '[NewsEditor] GET_LISTS';
      var _GET_LISTS_SUCCESS = '[NewsEditor] GET_LISTS_SUCCESS';
      var _GET_LISTS_ERROR = '[NewsEditor] GET_LISTS_ERROR';
      var _GET_LISTS_BY_DATE = '[NewsEditor] GET_LISTS_BY_DATE';
      var _GET_LISTS_BY_DATE_SUCCESS = '[NewsEditor] GET_LISTS_BY_DATE_SUCCESS';
      var _GET_LISTS_BY_DATE_ERROR = '[NewsEditor] GET_LISTS_BY_DATE_ERROR';
      var _ADD_TO_LIST = '[NewsEditor] ADD_TO_LISTS';
      var _ADD_TO_LIST_SUCCESS = '[NewsEditor] ADD_TO_LISTS_SUCCESS';
      var _ADD_TO_LIST_ERROR = '[NewsEditor] ADD_TO_LISTS_ERROR';
      var _REMOVE_FROM_LIST = '[NewsEditor] REMOVE_FROM_LIST';
      var _REMOVE_FROM_LIST_SUCCESS = '[NewsEditor] REMOVE_FROM_LIST_SUCCESS';
      var _REMOVE_FROM_LIST_ERROR = '[NewsEditor] REMOVE_FROM_LIST_ERROR';
      var _UPDATE_LIST_ORDER = '[NewsEditor] UPDATE_LIST_ORDER';
      var _UPDATE_LIST_ORDER_SUCCESS = '[NewsEditor] UPDATE_LIST_ORDER_SUCCESS';
      var _UPDATE_LIST_ORDER_ERROR = '[NewsEditor] UPDATE_LIST_ORDER_ERROR';
      var _UPDATE_SELECTED_LIST = '[NewsEditor] UPDATE_SELECTED_LIST';
      var _UPDATE_SELECTED_LIST_SUCCESS = '[NewsEditor] UPDATE_SELECTED_LIST_SUCCESS';
      var _UPDATE_SELECTED_LIST_ERROR = '[NewsEditor] UPDATE_SELECTED_LIST_ERROR';
      var _GET_SELECTED_LIST = '[NewsEditor] GET_SELECTED_LIST';
      var _GET_SELECTED_LIST_SUCCESS = '[NewsEditor] GET_SELECTED_LIST_SUCCESS';
      var _GET_SELECTED_LIST_ERROR = '[NewsEditor] GET_SELECTED_LIST_ERROR';
      var _CHANGE_REVIEW_NEWS_LOADED = '[NewsEditor] CHANGE_REVIEW_NEWS_LOADED';
      var _LOGOUT_EDITOR_STATE = '[NewsEditor] LOGOUT_EDITOR_STATE';
      /**
       * ---------------------------------------------------------------------------------------------------
       * ------------------------------------------------------------------------------> REVIEW NEWS ACTIONS
       * ---------------------------------------------------------------------------------------------------
       *
       *
       * ------------------------------------------------------------------------------> GET REVIEW NEWS
       */

      var _GetReviewNews = function _GetReviewNews() {
        _classCallCheck(this, _GetReviewNews);

        this.type = _GET_REVIEW_NEWS;
      };

      var _GetReviewNewsSuccess = function _GetReviewNewsSuccess(payload) {
        _classCallCheck(this, _GetReviewNewsSuccess);

        this.payload = payload;
        this.type = _GET_REVIEW_NEWS_SUCCESS;
      };

      var _GetReviewNewsError = function _GetReviewNewsError() {
        _classCallCheck(this, _GetReviewNewsError);

        this.type = _GET_REVIEW_NEWS_ERROR;
      };
      /**
       * ------------------------------------------------------------------------------> APPROVE NEWS
       */


      var _ApproveNews = function _ApproveNews(payload) {
        _classCallCheck(this, _ApproveNews);

        this.payload = payload;
        this.type = _APPROVE_NEWS;
      };

      var _ApproveNewsSuccess = function _ApproveNewsSuccess(payload) {
        _classCallCheck(this, _ApproveNewsSuccess);

        this.payload = payload;
        this.type = _APPROVE_NEWS_SUCCESS;
      };

      var _ApproveNewsError = function _ApproveNewsError() {
        _classCallCheck(this, _ApproveNewsError);

        this.type = _APPROVE_NEWS_ERROR;
      };
      /**
       * ------------------------------------------------------------------------------> REJECT NEWS
       */


      var _RejectNews = function _RejectNews(payload) {
        _classCallCheck(this, _RejectNews);

        this.payload = payload;
        this.type = _REJECT_NEWS;
      };

      var _RejectNewsSuccess = function _RejectNewsSuccess(payload) {
        _classCallCheck(this, _RejectNewsSuccess);

        this.payload = payload;
        this.type = _REJECT_NEWS_SUCCESS;
      };

      var _RejectNewsError = function _RejectNewsError() {
        _classCallCheck(this, _RejectNewsError);

        this.type = _REJECT_NEWS_ERROR;
      };
      /**
       * -------------------------------------------------------------------------------------------------
       * ------------------------------------------------------------------------------> NEWS LIST ACTIONS
       * -------------------------------------------------------------------------------------------------
       *
       *
       * ------------------------------------------------------------------------------> GET LISTS
       */


      var _GetLists = function _GetLists() {
        _classCallCheck(this, _GetLists);

        this.type = _GET_LISTS;
      };

      var _GetListsSuccess = function _GetListsSuccess(payload) {
        _classCallCheck(this, _GetListsSuccess);

        this.payload = payload;
        this.type = _GET_LISTS_SUCCESS;
      };

      var _GetListsError = function _GetListsError() {
        _classCallCheck(this, _GetListsError);

        this.type = _GET_LISTS_ERROR;
      };
      /**
       * ------------------------------------------------------------------------------> GET LISTS BY DATE
       */


      var _GetListsByDate = function _GetListsByDate(payload) {
        _classCallCheck(this, _GetListsByDate);

        this.payload = payload;
        this.type = _GET_LISTS_BY_DATE;
      };

      var _GetListsByDateSuccess = function _GetListsByDateSuccess(payload) {
        _classCallCheck(this, _GetListsByDateSuccess);

        this.payload = payload;
        this.type = _GET_LISTS_BY_DATE_SUCCESS;
      };

      var _GetListsByDateError = function _GetListsByDateError() {
        _classCallCheck(this, _GetListsByDateError);

        this.type = _GET_LISTS_BY_DATE_ERROR;
      };
      /**
       * ------------------------------------------------------------------------------> ADD NEWS TO LIST
       */


      var _AddToList = function _AddToList(payload) {
        _classCallCheck(this, _AddToList);

        this.payload = payload;
        this.type = _ADD_TO_LIST;
      };

      var _AddToListSuccess = function _AddToListSuccess(payload) {
        _classCallCheck(this, _AddToListSuccess);

        this.payload = payload;
        this.type = _ADD_TO_LIST_SUCCESS;
      };

      var _AddToListError = function _AddToListError() {
        _classCallCheck(this, _AddToListError);

        this.type = _ADD_TO_LIST_ERROR;
      };
      /**
       * ------------------------------------------------------------------------------> REMOVE NEWS FROM LIST
       */


      var _RemoveFromList = function _RemoveFromList(payload) {
        _classCallCheck(this, _RemoveFromList);

        this.payload = payload;
        this.type = _REMOVE_FROM_LIST;
      };

      var _RemoveFromListSuccess = function _RemoveFromListSuccess(payload) {
        _classCallCheck(this, _RemoveFromListSuccess);

        this.payload = payload;
        this.type = _REMOVE_FROM_LIST_SUCCESS;
      };

      var _RemoveFromListError = function _RemoveFromListError() {
        _classCallCheck(this, _RemoveFromListError);

        this.type = _REMOVE_FROM_LIST_ERROR;
      };
      /**
       * ------------------------------------------------------------------------------> UPDATE LIST ORDER
       */


      var _UpdateListOrder = function _UpdateListOrder(payload) {
        _classCallCheck(this, _UpdateListOrder);

        this.payload = payload;
        this.type = _UPDATE_LIST_ORDER;
      };

      var _UpdateListOrderSuccess = function _UpdateListOrderSuccess(payload) {
        _classCallCheck(this, _UpdateListOrderSuccess);

        this.payload = payload;
        this.type = _UPDATE_LIST_ORDER_SUCCESS;
      };

      var _UpdateListOrderError = function _UpdateListOrderError() {
        _classCallCheck(this, _UpdateListOrderError);

        this.type = _UPDATE_LIST_ORDER_ERROR;
      };
      /**
       * ------------------------------------------------------------------------------> GET SELECTED LIST
       */


      var _GetSelectedList = function _GetSelectedList() {
        _classCallCheck(this, _GetSelectedList);

        this.type = _GET_SELECTED_LIST; // constructor(public payload: { list_id: number }) {};
      };

      var _GetSelectedListSuccess = function _GetSelectedListSuccess(payload) {
        _classCallCheck(this, _GetSelectedListSuccess);

        this.payload = payload;
        this.type = _GET_SELECTED_LIST_SUCCESS;
      };

      var _GetSelectedListError = function _GetSelectedListError() {
        _classCallCheck(this, _GetSelectedListError);

        this.type = _GET_SELECTED_LIST_ERROR;
      };
      /**
       * ------------------------------------------------------------------------------> UPDATE SELECTED LIST
       */


      var _UpdateSelectedList = function _UpdateSelectedList(payload) {
        _classCallCheck(this, _UpdateSelectedList);

        this.payload = payload;
        this.type = _UPDATE_SELECTED_LIST;
      };

      var _UpdateSelectedListSuccess = function _UpdateSelectedListSuccess(payload) {
        _classCallCheck(this, _UpdateSelectedListSuccess);

        this.payload = payload;
        this.type = _UPDATE_SELECTED_LIST_SUCCESS;
      };

      var _UpdateSelectedListError = function _UpdateSelectedListError() {
        _classCallCheck(this, _UpdateSelectedListError);

        this.type = _UPDATE_SELECTED_LIST_ERROR;
      };

      var _LogoutEditorState = function _LogoutEditorState() {
        _classCallCheck(this, _LogoutEditorState);

        this.type = _LOGOUT_EDITOR_STATE;
      };

      var _UpdateReviewNewsLoaded = function _UpdateReviewNewsLoaded(payload) {
        _classCallCheck(this, _UpdateReviewNewsLoaded);

        this.payload = payload;
        this.type = _CHANGE_REVIEW_NEWS_LOADED;
      };
      /***/

    },

    /***/
    29021:
    /*!*****************************************************!*\
      !*** ./src/app/editor/store/news-editor.reducer.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "initialState": function initialState() {
          return (
            /* binding */
            _initialState2
          );
        },

        /* harmony export */
        "reducer": function reducer() {
          return (
            /* binding */
            _reducer2
          );
        },

        /* harmony export */
        "getReviewNewsState": function getReviewNewsState() {
          return (
            /* binding */
            _getReviewNewsState
          );
        },

        /* harmony export */
        "getMyNews": function getMyNews() {
          return (
            /* binding */
            _getMyNews
          );
        },

        /* harmony export */
        "getNewsById": function getNewsById() {
          return (
            /* binding */
            _getNewsById
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      62800);
      /* harmony import */


      var _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./news-editor.actions */
      23239);

      var _initialState2 = {
        news: [],
        isLoaded: false,
        // pageState: {currentPage: null, perPage: null, lastPages: null, totalResults: null},
        lists: [],
        isListLoaded: false,
        selectedList: null
      };

      function _reducer2() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2;
        var action = arguments.length > 1 ? arguments[1] : undefined;
        console.log(state, action);

        switch (action.type) {
          /**
           * --------------------------------------------------------------------------------------> REVIEW NEWS
           */
          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_REVIEW_NEWS:
            {
              return Object.assign(Object.assign({}, state), {
                news: [],
                isLoaded: false
              });
            }

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_REVIEW_NEWS_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                news: action.payload,
                isLoaded: true
              });
            }

          /**
           * --------------------------------------------------------------------------------------> APPROVE NEWS
           */

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.APPROVE_NEWS:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: false
              });
            }

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.APPROVE_NEWS_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                news: _toConsumableArray(state.news.filter(function (news) {
                  return news.id !== action.payload.id;
                })),
                isLoaded: true
              });
            }

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.APPROVE_NEWS_ERROR:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: true
              });
            }

          /**
           * --------------------------------------------------------------------------------------> REJECT NEWS
           */

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.REJECT_NEWS:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: false
              });
            }

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.REJECT_NEWS_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                news: _toConsumableArray(state.news.filter(function (news) {
                  return news.id !== action.payload.news_id;
                })),
                isLoaded: true
              });
            }

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.REJECT_NEWS_ERROR:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: true
              });
            }

          /**
           * ---------------------------------------------------------------------------------------------------------
           * --------------------------------------------------------------------------------------> NEWS LIST ACTIONS
           * ---------------------------------------------------------------------------------------------------------
           */

          /**
           * --------------------------------------------------------------------------------------> GET LIST
           */

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_LISTS:
            {
              return Object.assign(Object.assign({}, state), {
                isListLoaded: false
              });
            }

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_LISTS_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                lists: action.payload,
                isListLoaded: true
              });
            }

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_LISTS_ERROR:
            {
              return Object.assign(Object.assign({}, state), {
                isListLoaded: true
              });
            }

          /**
           * --------------------------------------------------------------------------------------> GET LIST BY DATE
           */

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_LISTS_BY_DATE:
            {
              return Object.assign(Object.assign({}, state), {
                isListLoaded: false
              });
            }

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_LISTS_BY_DATE_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                lists: action.payload,
                isListLoaded: true
              });
            }

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_LISTS_BY_DATE_ERROR:
            {
              return Object.assign(Object.assign({}, state), {
                isListLoaded: true
              });
            }

          /**
           * --------------------------------------------------------------------------------------> ADD TO LIST
           */

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TO_LIST:
            {
              return Object.assign(Object.assign({}, state), {
                isListLoaded: true
              });
            }

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TO_LIST_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                isListLoaded: false,
                // lists: [action.payload, ...state.lists]
                // lists: [
                //   ...(state.lists.filter( (list) => list.id !== action.payload.id )),
                // ]
                // lists: state.lists.map(
                //   list => list.id === action.payload.id ? {
                //       ...list,
                //       lists: action.payload,
                //   } : list,
                // ),
                // lists: {
                //   ...state.lists,
                //   [action.payload.id] : action.payload
                // }
                lists: action.payload
              });
            }

          /**
           * --------------------------------------------------------------------------------------> REMOVE FROM LIST
           */

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_FROM_LIST:
            {
              return Object.assign(Object.assign({}, state), {
                isListLoaded: true
              });
            }

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_FROM_LIST_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                isListLoaded: false,
                lists: action.payload
              });
            }

          /**
           * --------------------------------------------------------------------------------------> UPDATE LIST ORDER
           */

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.UPDATE_LIST_ORDER:
            {
              return Object.assign(Object.assign({}, state), {
                isListLoaded: true
              });
            }

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.UPDATE_LIST_ORDER_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                isListLoaded: false,
                lists: action.payload
              });
            }

          /**
           * --------------------------------------------------------------------------------------> GET SELECTED LIST
           */

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_SELECTED_LIST_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                selectedList: action.payload.list_id
              });
            }

          /**
           * --------------------------------------------------------------------------------------> UPDATE SELECTED LIST
           */

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.UPDATE_SELECTED_LIST_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                selectedList: action.payload.list_id
              });
            }

          /**
           * --------------------------------------------------------------------------------------> OTHER ACTIONS
           */

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_REVIEW_NEWS_LOADED:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: action.payload.isLoaded
              });
            }

          case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.LOGOUT_EDITOR_STATE:
            {
              return _initialState2;
            }

          default:
            {
              return state;
            }
        }
      }

      var _getReviewNewsState = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)('ReviewNewsState');

      var _getMyNews = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_getReviewNewsState, function (state) {
        return state.news;
      });

      var _getNewsById = function _getNewsById(newsBox, id) {
        return (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_getReviewNewsState, function (allItems) {
          if (allItems) {
            return allItems[newsBox].find(function (item) {
              return item.id === id;
            });
          } else {
            return {};
          }
        });
      };
      /***/

    },

    /***/
    71658:
    /*!**************************************************!*\
      !*** ./src/app/layouts/blank/blank.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppBlankComponent": function AppBlankComponent() {
          return (
            /* binding */
            _AppBlankComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/sidenav */
      4008);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      3984);

      var _AppBlankComponent = function _AppBlankComponent() {
        _classCallCheck(this, _AppBlankComponent);
      };

      _AppBlankComponent.ɵfac = function AppBlankComponent_Factory(t) {
        return new (t || _AppBlankComponent)();
      };

      _AppBlankComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppBlankComponent,
        selectors: [["app-blank"]],
        decls: 2,
        vars: 0,
        template: function AppBlankComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__.MatSidenavContainer, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
        encapsulation: 2
      });
      /***/
    },

    /***/
    76729:
    /*!************************************************!*\
      !*** ./src/app/layouts/full/full.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FullComponent": function FullComponent() {
          return (
            /* binding */
            _FullComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jquery */
      91704);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/menu-items/menu-items */
      42647);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/layout */
      80568);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      46794);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      88030);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/toolbar */
      73121);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      2895);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      49356);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header/header.component */
      21183);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/sidenav */
      4008);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      5052);
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      2991);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/list */
      45363);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      73624);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      24751);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/divider */
      50591);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/checkbox */
      89713);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/spinner.component */
      23812);

      var _c0 = function _c0(a0, a1, a2, a3, a4, a5) {
        return {
          "minisidebar": a0,
          "boxed": a1,
          "danger": a2,
          "blue": a3,
          "green": a4,
          "dark": a5
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "minisidebar": a0
        };
      };
      /** @title Responsive sidenav */


      var _FullComponent = /*#__PURE__*/function () {
        function _FullComponent(changeDetectorRef, media, menuItems) {
          _classCallCheck(this, _FullComponent);

          this.menuItems = menuItems;
          this.dir = 'ltr';
          this.config = {};
          this.mobileQuery = media.matchMedia('(min-width: 768px)');

          this._mobileQueryListener = function () {
            return changeDetectorRef.detectChanges();
          };

          this.mobileQuery.addListener(this._mobileQueryListener);
        }

        _createClass(_FullComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.mobileQuery.removeListener(this._mobileQueryListener);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // This is for the topbar search
            jquery__WEBPACK_IMPORTED_MODULE_0__('.srh-btn, .cl-srh-btn').on('click', function () {
              jquery__WEBPACK_IMPORTED_MODULE_0__('.app-search').toggle(200);
            }); // This is for the megamenu
          }
        }]);

        return _FullComponent;
      }();

      _FullComponent.ɵfac = function FullComponent_Factory(t) {
        return new (t || _FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__.MenuItems));
      };

      _FullComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _FullComponent,
        selectors: [["app-full-layout"]],
        decls: 50,
        vars: 23,
        consts: [[1, "main-container", 3, "dir", "ngClass"], ["color", "primary", 1, "topbar", "telative"], [1, "navbar-header"], ["href", "/", 1, "navbar-brand"], ["src", "assets/images/logo-icon.png", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo-light-icon.png", "alt", "homepage", 1, "light-logo"], ["fxShow", "false", "fxShow.gt-xs", ""], ["src", "assets/images/logo-text.png", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo-light-text.png", "alt", "homepage", 1, "light-logo"], ["mat-icon-button", "", "value", "sidebarclosed", 3, "click"], ["fxFlex", ""], [1, "example-sidenav-container", 3, "ngClass"], ["id", "snav", "fixedTopGap", "0", 1, "pl-xs", 3, "mode", "opened", "disableClose", "perfectScrollbar", "open", "close"], ["snav", ""], [1, "app-sidebar"], ["position", "end", "mode", "over", "opened", "false", 1, "chat-panel"], ["end", ""], [1, "scroll"], ["mat-subheader", "", 1, "text-uppercase", "font-weight-bold"], ["color", "warn", 3, "change"], ["color", "warn", 3, "ngModel", "ngModelChange"], ["color", "warn", 1, "text-danger", 3, "ngModel", "ngModelChange", "change"], ["color", "warn", 1, "text-megna", 3, "ngModel", "ngModelChange", "change"], ["color", "warn", 1, "text-info", 3, "ngModel", "ngModelChange", "change"], ["color", "warn", 3, "ngModel", "ngModelChange", "change"], [1, "page-wrapper"], [1, "page-content"]],
        template: function FullComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FullComponent_Template_button_click_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-sidenav-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-sidenav", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("open", function FullComponent_Template_mat_sidenav_open_16_listener() {
              return ctx.sidebarOpened = true;
            })("close", function FullComponent_Template_mat_sidenav_close_16_listener() {
              return ctx.sidebarOpened = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "app-sidebar", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-sidenav", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "h3", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-slide-toggle", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FullComponent_Template_mat_slide_toggle_change_26_listener() {
              return ctx.dir = ctx.dir == "rtl" ? "ltr" : "rtl";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "RTL");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-slide-toggle", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_slide_toggle_ngModelChange_29_listener($event) {
              return ctx.boxed = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Boxed Layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "h3", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Colors");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-checkbox", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_35_listener($event) {
              return ctx.danger = $event;
            })("change", function FullComponent_Template_mat_checkbox_change_35_listener() {
              return ctx.green = ctx.blue = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Red");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-checkbox", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_38_listener($event) {
              return ctx.green = $event;
            })("change", function FullComponent_Template_mat_checkbox_change_38_listener() {
              return ctx.danger = ctx.blue = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Teal Green");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-checkbox", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_41_listener($event) {
              return ctx.blue = $event;
            })("change", function FullComponent_Template_mat_checkbox_change_41_listener() {
              return ctx.green = ctx.danger = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Blue");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "mat-checkbox", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_44_listener($event) {
              return ctx.dark = $event;
            })("change", function FullComponent_Template_mat_checkbox_change_44_listener() {
              return ctx.green = ctx.blue = ctx.danger = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-sidenav-content", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "app-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dir", ctx.dir)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction6"](14, _c0, ctx.minisidebar, ctx.boxed, ctx.danger, ctx.blue, ctx.green, ctx.dark));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 0 : 0, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](21, _c1, ctx.minisidebar));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "side" : "over")("opened", ctx.mobileQuery.matches)("disableClose", ctx.mobileQuery.matches)("perfectScrollbar", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.boxed);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.danger);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.green);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.blue);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.dark);
          }
        },
        directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.Dir, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultClassDirective, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultShowHideDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.AppHeaderComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenav, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarDirective, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.AppSidebarComponent, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListSubheaderCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListItem, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDivider, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckbox, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_4__.SpinnerComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    21183:
    /*!*********************************************************!*\
      !*** ./src/app/layouts/full/header/header.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppHeaderComponent": function AppHeaderComponent() {
          return (
            /* binding */
            _AppHeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/services/auth.service */
      10629);
      /* harmony import */


      var _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../authentication/store/user.actions */
      61184);
      /* harmony import */


      var _shared_services_ds_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/services/ds.service */
      87253);
      /* harmony import */


      var _shared_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/models/user */
      90193);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/store */
      62800);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      2895);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/menu */
      23021);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      5052);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      49356);

      var _c0 = function _c0() {
        return ["/authentication/login/"];
      };

      function AppHeaderComponent_button_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "account_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
        }
      }

      function AppHeaderComponent_a_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mymessage_r5 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.storagePath, "profiles/user/", mymessage_r5.userimage, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](mymessage_r5.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](mymessage_r5.text);
        }
      }

      function AppHeaderComponent_button_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "account_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        }
      }

      var _c1 = function _c1() {
        return ["/user/profile"];
      };

      var _AppHeaderComponent = /*#__PURE__*/function () {
        function _AppHeaderComponent(auth, store, ds, store2) {
          var _this3 = this;

          _classCallCheck(this, _AppHeaderComponent);

          this.auth = auth;
          this.store = store;
          this.ds = ds;
          this.store2 = store2;
          this.config = {};
          this.logged_in = false;
          this.show_top_icons = false;
          this.userData = new _shared_models_user__WEBPACK_IMPORTED_MODULE_3__.User();
          this.storagePath = null;
          this.title = 'deepChat';
          this.text = 'first chat record';
          this.chatArray = [];
          this.storagePath = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.storageUrl; // get user authentication status

          this.loggedInSub = this.auth.loggedIn$.subscribe(function (loggedIn) {
            return _this3.logged_in = loggedIn;
          });
          this.store2.select(function (store) {
            return store.UserState;
          }).subscribe(function (userdata) {
            _this3.userData = userdata.user; //this.chantInit();
          });
        }

        _createClass(_AppHeaderComponent, [{
          key: "logOut",
          value: function logOut() {
            // this.auth.doSignOut();
            this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_1__.UserLogout());
          }
        }]);

        return _AppHeaderComponent;
      }();

      _AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) {
        return new (t || _AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_ds_service__WEBPACK_IMPORTED_MODULE_2__.DsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
      };

      _AppHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _AppHeaderComponent,
        selectors: [["app-header"]],
        decls: 21,
        vars: 7,
        consts: [["mat-icon-button", "", "alt", "log in", "class", "m-r-5", 3, "routerLink", 4, "ngIf"], ["mat-icon-button", "", 1, "m-r-10", 3, "matMenuTriggerFor"], [1, "mymessage"], ["message", "matMenu"], [1, "mailbox"], [1, "message-center"], [3, "config"], ["href", "#", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "class", "m-r-5", 3, "matMenuTriggerFor", 4, "ngIf"], [1, "mymegamenu"], ["profile", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", "alt", "log in", 1, "m-r-5", 3, "routerLink"], [2, "color", "#ffffff"], ["href", "#"], [1, "user-img"], ["alt", "user", "width", "40", 1, "img-circle", 3, "src"], [1, "mail-content"], [1, "mail-desc"], ["mat-icon-button", "", 1, "m-r-5", 3, "matMenuTriggerFor"]],
        template: function AppHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AppHeaderComponent_button_0_Template, 3, 2, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-menu", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "perfect-scrollbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AppHeaderComponent_a_9_Template, 8, 4, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AppHeaderComponent_button_10_Template, 3, 1, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-menu", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "account_box");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_17_listener() {
              return ctx.logOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Sign Out ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.logged_in);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.chatArray);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.logged_in);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c1));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon],
        encapsulation: 2
      });
      /***/
    },

    /***/
    2991:
    /*!***********************************************************!*\
      !*** ./src/app/layouts/full/sidebar/sidebar.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppSidebarComponent": function AppSidebarComponent() {
          return (
            /* binding */
            _AppSidebarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/menu-items/menu-items */
      42647);
      /* harmony import */


      var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/services/session.service */
      75986);
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/services/auth.service */
      10629);
      /* harmony import */


      var _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../authentication/store/user.actions */
      61184);
      /* harmony import */


      var _shared_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/models/user */
      90193);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/layout */
      80568);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngrx/store */
      62800);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/menu */
      23021);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      49356);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/list */
      45363);
      /* harmony import */


      var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/accordion/accordion.directive */
      65903);
      /* harmony import */


      var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/accordion/accordionlink.directive */
      67725);
      /* harmony import */


      var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/accordion/accordionanchor.directive */
      9502);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      88030);

      function AppSidebarComponent_div_1_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 13);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r6.storagePath + "profiles/default.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
        }
      }

      function AppSidebarComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AppSidebarComponent_div_1_img_1_Template, 1, 1, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.userData == null);
        }
      }

      function AppSidebarComponent_div_2_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 13);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r7.storagePath + "profiles/user/" + ctx_r7.userData.profile.profilepic, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
        }
      }

      function AppSidebarComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AppSidebarComponent_div_2_img_1_Template, 1, 1, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.userData.profile.profilepic);
        }
      }

      function AppSidebarComponent_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.username, " ");
        }
      }

      function AppSidebarComponent_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r3.username, " ");
        }
      }

      function AppSidebarComponent_mat_list_item_17_a_1_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var badge_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("label label-", badge_r16.type, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](badge_r16.value);
        }
      }

      var _c0 = function _c0(a1) {
        return ["/", a1];
      };

      function AppSidebarComponent_mat_list_item_17_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_17_a_1_span_6_Template, 2, 4, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](4, _c0, menuitem_r8.state));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menuitem_r8.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menuitem_r8.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", menuitem_r8.badge);
        }
      }

      function AppSidebarComponent_mat_list_item_17_a_2_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var badge_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("label label-", badge_r19.type, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](badge_r19.value);
        }
      }

      function AppSidebarComponent_mat_list_item_17_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_17_a_2_span_6_Template, 2, 4, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("href", menuitem_r8.state, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menuitem_r8.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menuitem_r8.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", menuitem_r8.badge);
        }
      }

      function AppSidebarComponent_mat_list_item_17_a_3_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var badge_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("label label-", badge_r22.type, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](badge_r22.value);
        }
      }

      function AppSidebarComponent_mat_list_item_17_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_17_a_3_span_6_Template, 2, 4, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("href", menuitem_r8.state, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menuitem_r8.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menuitem_r8.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", menuitem_r8.badge);
        }
      }

      function AppSidebarComponent_mat_list_item_17_a_4_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var badge_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("label label-", badge_r25.type, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](badge_r25.value);
        }
      }

      function AppSidebarComponent_mat_list_item_17_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_17_a_4_span_6_Template, 2, 4, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "keyboard_arrow_down");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menuitem_r8.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menuitem_r8.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", menuitem_r8.badge);
        }
      }

      var _c1 = function _c1(a1, a2) {
        return ["/", a1, a2];
      };

      function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childitem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          var menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](2, _c1, menuitem_r8.state, childitem_r29.state));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](childitem_r29.name);
        }
      }

      function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-list-item", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_1_a_1_Template, 2, 5, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childitem_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", childitem_r29.type === "link");
        }
      }

      function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);

            return ctx_r36.clickEvent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "keyboard_arrow_down");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childitem_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r34.status ? "selected" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](childitem_r33.name);
        }
      }

      var _c2 = function _c2(a1, a2, a3) {
        return ["/", a1, a2, a3];
      };

      function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_mat_list_item_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-list-item", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var child_r40 = ctx.$implicit;

          var childitem_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;

          var menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](2, _c2, menuitem_r8.state, childitem_r33.state, child_r40.state));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](child_r40.name);
        }
      }

      function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-nav-list", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_mat_list_item_1_Template, 3, 6, "mat-list-item", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childitem_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", childitem_r33.subchildren);
        }
      }

      function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_a_1_Template, 6, 2, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_Template, 2, 1, "mat-nav-list", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childitem_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", childitem_r33.type === "subchild");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", childitem_r33.type === "subchild");
        }
      }

      function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-nav-list", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_1_Template, 2, 1, "mat-list-item", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_Template, 3, 2, "mat-list-item", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", menuitem_r8.children);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", menuitem_r8.children);
        }
      }

      function AppSidebarComponent_mat_list_item_17_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](menuitem_r8.name);
        }
      }

      function AppSidebarComponent_mat_list_item_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-list-item", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_17_a_1_Template, 7, 6, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AppSidebarComponent_mat_list_item_17_a_2_Template, 7, 4, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, AppSidebarComponent_mat_list_item_17_a_3_Template, 7, 4, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, AppSidebarComponent_mat_list_item_17_a_4_Template, 9, 3, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_Template, 3, 2, "mat-nav-list", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_17_div_6_Template, 3, 1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuitem_r8 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("group", menuitem_r8.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuitem_r8.type === "link" && ctx_r5.checkRole(menuitem_r8.role));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuitem_r8.type === "extLink" && ctx_r5.checkRole(menuitem_r8.role));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuitem_r8.type === "extTabLink" && ctx_r5.checkRole(menuitem_r8.role));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuitem_r8.type === "sub" && ctx_r5.checkRole(menuitem_r8.role));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuitem_r8.type === "sub" && ctx_r5.checkRole(menuitem_r8.role));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuitem_r8.type === "saperator");
        }
      }

      var _c3 = function _c3() {
        return ["/user/profile"];
      };

      var _AppSidebarComponent = /*#__PURE__*/function () {
        function _AppSidebarComponent(changeDetectorRef, media, menuItems, session, auth, store, store2) {
          var _this4 = this;

          _classCallCheck(this, _AppSidebarComponent);

          this.menuItems = menuItems;
          this.session = session;
          this.auth = auth;
          this.store = store;
          this.store2 = store2;
          this.username = 'Guest';
          this.config = {};
          this.logged_in = false;
          this.userData = new _shared_models_user__WEBPACK_IMPORTED_MODULE_4__.User();
          this.status = false;
          this.mobileQuery = media.matchMedia('(min-width: 768px)');

          this._mobileQueryListener = function () {
            return changeDetectorRef.detectChanges();
          };

          this.mobileQuery.addListener(this._mobileQueryListener); // get user authentication status

          this.loggedInSub = this.auth.loggedIn$.subscribe(function (loggedIn) {
            return _this4.logged_in = loggedIn;
          });
          this.username = session.getSession('name');
        }

        _createClass(_AppSidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.storagePath = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.storageUrl;
            this.store2.select(function (store) {
              return store.UserState;
            }).subscribe(function (userdata) {
              _this5.userData = userdata.user;
            });
          }
        }, {
          key: "clickEvent",
          value: function clickEvent() {
            this.status = !this.status;
          }
        }, {
          key: "subclickEvent",
          value: function subclickEvent() {
            this.status = true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.mobileQuery.removeListener(this._mobileQueryListener);
          }
        }, {
          key: "checkRole",
          value: function checkRole(role) {
            return this.session.checkRole(role);
          }
        }, {
          key: "logOut",
          value: function logOut() {
            this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_3__.UserLogout());
          }
        }]);

        return _AppSidebarComponent;
      }();

      _AppSidebarComponent.ɵfac = function AppSidebarComponent_Factory(t) {
        return new (t || _AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__.MenuItems), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store));
      };

      _AppSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: _AppSidebarComponent,
        selectors: [["app-sidebar"]],
        decls: 18,
        vars: 7,
        consts: [[1, "user-profile", 2, "background", "url(assets/images/background/user-info.jpg) no-repeat"], ["class", "profile-img", 4, "ngIf"], [1, "profile-text"], ["class", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["class", "", 4, "ngIf"], [1, "mymegamenu"], ["sdprofile", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["appAccordion", ""], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group", 4, "ngFor", "ngForOf"], [1, "profile-img"], ["alt", "user", 3, "src", 4, "ngIf"], ["alt", "user", 3, "src"], [1, "", 3, "matMenuTriggerFor"], [1, "ti-angle-down", "font-12", "m-l-5"], [1, ""], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group"], ["class", "", "appAccordionToggle", "", 3, "routerLink", 4, "ngIf"], ["class", "", "appAccordionToggle", "", 3, "href", 4, "ngIf"], ["class", "", "appAccordionToggle", "", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "", "appAccordionToggle", "", "href", "javascript:;", 4, "ngIf"], ["class", "sub-item", 4, "ngIf"], ["class", "saperator text-muted", 4, "ngIf"], ["appAccordionToggle", "", 1, "", 3, "routerLink"], ["fxFlex", ""], [3, "class", 4, "ngFor", "ngForOf"], ["appAccordionToggle", "", 1, "", 3, "href"], ["appAccordionToggle", "", "target", "_blank", 1, "", 3, "href"], ["appAccordionToggle", "", "href", "javascript:;", 1, ""], [1, "dd-icon"], [1, "sub-item"], ["routerLinkActive", "selected", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "selected"], ["class", "relative", "routerLinkActive", "selected", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "selected", 1, "relative", 3, "routerLink"], ["class", "", "href", "javascript: void(0);", 3, "ngClass", "click", 4, "ngIf"], ["class", "child-sub-item", 4, "ngIf"], ["href", "javascript: void(0);", 1, "", 3, "ngClass", "click"], [1, "child-sub-item"], ["routerLinkActive", "selected", 3, "routerLink"], [1, "saperator", "text-muted"]],
        template: function AppSidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AppSidebarComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AppSidebarComponent_div_2_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, AppSidebarComponent_a_4_Template, 3, 2, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, AppSidebarComponent_a_5_Template, 2, 1, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-menu", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "account_box");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppSidebarComponent_Template_button_click_12_listener() {
              return ctx.logOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, " Sign Out ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "mat-nav-list", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, AppSidebarComponent_mat_list_item_17_Template, 7, 7, "mat-list-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.userData.id == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.userData.id != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.logged_in);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.logged_in);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](6, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.menuItems.getMenuitem());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatNavList, _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_6__.AccordionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListItem, _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_7__.AccordionLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_8__.AccordionAnchorDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__.DefaultClassDirective],
        encapsulation: 2
      });
      /***/
    },

    /***/
    26318:
    /*!*************************************!*\
      !*** ./src/app/news/models/news.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "News": function News() {
          return (
            /* binding */
            _News
          );
        },

        /* harmony export */
        "NewsBar": function NewsBar() {
          return (
            /* binding */
            _NewsBar
          );
        },

        /* harmony export */
        "TickerNews": function TickerNews() {
          return (
            /* binding */
            _TickerNews
          );
        },

        /* harmony export */
        "Language": function Language() {
          return (
            /* binding */
            _Language
          );
        },

        /* harmony export */
        "Newsstatus": function Newsstatus() {
          return (
            /* binding */
            _Newsstatus
          );
        },

        /* harmony export */
        "NewNotes": function NewNotes() {
          return (
            /* binding */
            _NewNotes
          );
        },

        /* harmony export */
        "NewsList": function NewsList() {
          return (
            /* binding */
            _NewsList
          );
        },

        /* harmony export */
        "ListNews": function ListNews() {
          return (
            /* binding */
            _ListNews
          );
        },

        /* harmony export */
        "ListOrder": function ListOrder() {
          return (
            /* binding */
            _ListOrder
          );
        },

        /* harmony export */
        "Ticker": function Ticker() {
          return (
            /* binding */
            _Ticker
          );
        },

        /* harmony export */
        "TickersNews": function TickersNews() {
          return (
            /* binding */
            _TickersNews
          );
        },

        /* harmony export */
        "JournalistDashboard": function JournalistDashboard() {
          return (
            /* binding */
            _JournalistDashboard
          );
        },

        /* harmony export */
        "JournalistDashboardNewsNumbers": function JournalistDashboardNewsNumbers() {
          return (
            /* binding */
            _JournalistDashboardNewsNumbers
          );
        }
        /* harmony export */

      });

      var _News = /*#__PURE__*/function () {
        function _News() {
          _classCallCheck(this, _News);

          this.news_name = '';
          this.heading = '';
          this.body = '';
          this.newsstatus_id = 0;
          this.user_id = 0;
          this.language = new _Language('', '');
          this.newsbar = [new _NewsBar('', '')];
          this.draft = false;
        }

        _createClass(_News, null, [{
          key: "generateMockNews",
          value: function generateMockNews() {
            return new _News();
          }
        }]);

        return _News;
      }();

      var _NewsBar = function _NewsBar(title, detail, id, news_id, created_at, updated_a) {
        _classCallCheck(this, _NewsBar);

        this.title = title;
        this.detail = detail;
        this.id = id;
        this.news_id = news_id;
        this.created_at = created_at;
        this.updated_a = updated_a;
      };

      var _TickerNews = function _TickerNews(news) {
        _classCallCheck(this, _TickerNews);

        this.news = news;
      };

      var _Language = function _Language(language_code, language, id) {
        _classCallCheck(this, _Language);

        this.language_code = language_code;
        this.language = language;
        this.id = id;
      };

      var _Newsstatus = function _Newsstatus(id, status, detail) {
        _classCallCheck(this, _Newsstatus);

        this.id = id;
        this.status = status;
        this.detail = detail;
      };

      var _NewNotes = function _NewNotes(id, news_id, note) {
        _classCallCheck(this, _NewNotes);

        this.id = id;
        this.news_id = news_id;
        this.note = note;
      };

      var _NewsList = function _NewsList() {
        _classCallCheck(this, _NewsList);

        this.id = null;
        this.name = '';
        this.created_at = '';
        this.updated_at = '';
        this.list_news = [new _ListNews()];
      };

      var _ListNews = function _ListNews() {
        _classCallCheck(this, _ListNews);

        this.id = null;
        this.news_list_id = null;
        this.news_id = null;
        this.created_at = null;
        this.updated_at = null;
        this.news = new _News();
      };

      var _ListOrder = function _ListOrder(list_id, news_id, order) {
        _classCallCheck(this, _ListOrder);

        this.list_id = list_id;
        this.news_id = news_id;
        this.order = order;
      };

      var _Ticker = function _Ticker() {
        _classCallCheck(this, _Ticker);

        this.name = '';
      };

      var _TickersNews = function _TickersNews() {
        _classCallCheck(this, _TickersNews);

        this.news = '';
        this.language = new _Language('', '');
      };

      var _JournalistDashboard = function _JournalistDashboard() {
        _classCallCheck(this, _JournalistDashboard);

        this.news_numbers = new _JournalistDashboardNewsNumbers();
        this.lists = [];
      };

      var _JournalistDashboardNewsNumbers = function _JournalistDashboardNewsNumbers() {
        _classCallCheck(this, _JournalistDashboardNewsNumbers);

        this.my = 0;
        this.reject = 0;
        this.approved = 0;
        this.in_review = 0;
      };
      /***/

    },

    /***/
    15490:
    /*!********************************************!*\
      !*** ./src/app/news/store/news.actions.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GET_A_NEWS": function GET_A_NEWS() {
          return (
            /* binding */
            _GET_A_NEWS
          );
        },

        /* harmony export */
        "GET_A_NEWS_SUCCESS": function GET_A_NEWS_SUCCESS() {
          return (
            /* binding */
            _GET_A_NEWS_SUCCESS
          );
        },

        /* harmony export */
        "GET_A_NEWS_ERROR": function GET_A_NEWS_ERROR() {
          return (
            /* binding */
            _GET_A_NEWS_ERROR
          );
        },

        /* harmony export */
        "GET_MY_NEWS": function GET_MY_NEWS() {
          return (
            /* binding */
            _GET_MY_NEWS
          );
        },

        /* harmony export */
        "GET_MY_NEWS_SUCCESS": function GET_MY_NEWS_SUCCESS() {
          return (
            /* binding */
            _GET_MY_NEWS_SUCCESS
          );
        },

        /* harmony export */
        "GET_MY_NEWS_ERROR": function GET_MY_NEWS_ERROR() {
          return (
            /* binding */
            _GET_MY_NEWS_ERROR
          );
        },

        /* harmony export */
        "GET_TRASH_NEWS": function GET_TRASH_NEWS() {
          return (
            /* binding */
            _GET_TRASH_NEWS
          );
        },

        /* harmony export */
        "GET_TRASH_NEWS_SUCCESS": function GET_TRASH_NEWS_SUCCESS() {
          return (
            /* binding */
            _GET_TRASH_NEWS_SUCCESS
          );
        },

        /* harmony export */
        "GET_TRASH_NEWS_ERROR": function GET_TRASH_NEWS_ERROR() {
          return (
            /* binding */
            _GET_TRASH_NEWS_ERROR
          );
        },

        /* harmony export */
        "DELETE_NEWS": function DELETE_NEWS() {
          return (
            /* binding */
            _DELETE_NEWS
          );
        },

        /* harmony export */
        "DELETE_NEWS_SUCCESS": function DELETE_NEWS_SUCCESS() {
          return (
            /* binding */
            _DELETE_NEWS_SUCCESS
          );
        },

        /* harmony export */
        "DELETE_NEWS_ERROR": function DELETE_NEWS_ERROR() {
          return (
            /* binding */
            _DELETE_NEWS_ERROR
          );
        },

        /* harmony export */
        "RESTORE_NEWS": function RESTORE_NEWS() {
          return (
            /* binding */
            _RESTORE_NEWS
          );
        },

        /* harmony export */
        "RESTORE_NEWS_SUCCESS": function RESTORE_NEWS_SUCCESS() {
          return (
            /* binding */
            _RESTORE_NEWS_SUCCESS
          );
        },

        /* harmony export */
        "RESTORE_NEWS_ERROR": function RESTORE_NEWS_ERROR() {
          return (
            /* binding */
            _RESTORE_NEWS_ERROR
          );
        },

        /* harmony export */
        "CHANGE_NEWS_LOADED": function CHANGE_NEWS_LOADED() {
          return (
            /* binding */
            _CHANGE_NEWS_LOADED
          );
        },

        /* harmony export */
        "CHANGE_MY_NEWS_LOADED": function CHANGE_MY_NEWS_LOADED() {
          return (
            /* binding */
            _CHANGE_MY_NEWS_LOADED
          );
        },

        /* harmony export */
        "CHANGE_TRASH_NEWS_LOADED": function CHANGE_TRASH_NEWS_LOADED() {
          return (
            /* binding */
            _CHANGE_TRASH_NEWS_LOADED
          );
        },

        /* harmony export */
        "DESTROY_NEWS": function DESTROY_NEWS() {
          return (
            /* binding */
            _DESTROY_NEWS
          );
        },

        /* harmony export */
        "DESTROY_NEWS_SUCCESS": function DESTROY_NEWS_SUCCESS() {
          return (
            /* binding */
            _DESTROY_NEWS_SUCCESS
          );
        },

        /* harmony export */
        "DESTROY_NEWS_ERROR": function DESTROY_NEWS_ERROR() {
          return (
            /* binding */
            _DESTROY_NEWS_ERROR
          );
        },

        /* harmony export */
        "GET_TICKERS": function GET_TICKERS() {
          return (
            /* binding */
            _GET_TICKERS
          );
        },

        /* harmony export */
        "GET_TICKERS_SUCCESS": function GET_TICKERS_SUCCESS() {
          return (
            /* binding */
            _GET_TICKERS_SUCCESS
          );
        },

        /* harmony export */
        "GET_TICKERS_ERROR": function GET_TICKERS_ERROR() {
          return (
            /* binding */
            _GET_TICKERS_ERROR
          );
        },

        /* harmony export */
        "ADD_TICKER_NEWS": function ADD_TICKER_NEWS() {
          return (
            /* binding */
            _ADD_TICKER_NEWS
          );
        },

        /* harmony export */
        "ADD_TICKER_NEWS_SUCCESS": function ADD_TICKER_NEWS_SUCCESS() {
          return (
            /* binding */
            _ADD_TICKER_NEWS_SUCCESS
          );
        },

        /* harmony export */
        "ADD_TICKER_NEWS_ERROR": function ADD_TICKER_NEWS_ERROR() {
          return (
            /* binding */
            _ADD_TICKER_NEWS_ERROR
          );
        },

        /* harmony export */
        "APPROVE_TICKER_NEWS": function APPROVE_TICKER_NEWS() {
          return (
            /* binding */
            _APPROVE_TICKER_NEWS
          );
        },

        /* harmony export */
        "APPROVE_TICKER_NEWS_SUCCESS": function APPROVE_TICKER_NEWS_SUCCESS() {
          return (
            /* binding */
            _APPROVE_TICKER_NEWS_SUCCESS
          );
        },

        /* harmony export */
        "APPROVE_TICKER_NEWS_ERROR": function APPROVE_TICKER_NEWS_ERROR() {
          return (
            /* binding */
            _APPROVE_TICKER_NEWS_ERROR
          );
        },

        /* harmony export */
        "DISAPPROVE_TICKER_NEWS": function DISAPPROVE_TICKER_NEWS() {
          return (
            /* binding */
            _DISAPPROVE_TICKER_NEWS
          );
        },

        /* harmony export */
        "DISAPPROVE_TICKER_NEWS_SUCCESS": function DISAPPROVE_TICKER_NEWS_SUCCESS() {
          return (
            /* binding */
            _DISAPPROVE_TICKER_NEWS_SUCCESS
          );
        },

        /* harmony export */
        "DISAPPROVE_TICKER_NEWS_ERROR": function DISAPPROVE_TICKER_NEWS_ERROR() {
          return (
            /* binding */
            _DISAPPROVE_TICKER_NEWS_ERROR
          );
        },

        /* harmony export */
        "DELETE_TICKER_NEWS": function DELETE_TICKER_NEWS() {
          return (
            /* binding */
            _DELETE_TICKER_NEWS
          );
        },

        /* harmony export */
        "DELETE_TICKER_NEWS_SUCCESS": function DELETE_TICKER_NEWS_SUCCESS() {
          return (
            /* binding */
            _DELETE_TICKER_NEWS_SUCCESS
          );
        },

        /* harmony export */
        "DELETE_TICKER_NEWS_ERROR": function DELETE_TICKER_NEWS_ERROR() {
          return (
            /* binding */
            _DELETE_TICKER_NEWS_ERROR
          );
        },

        /* harmony export */
        "ADD_TICKER": function ADD_TICKER() {
          return (
            /* binding */
            _ADD_TICKER
          );
        },

        /* harmony export */
        "ADD_TICKER_SUCCESS": function ADD_TICKER_SUCCESS() {
          return (
            /* binding */
            _ADD_TICKER_SUCCESS
          );
        },

        /* harmony export */
        "ADD_TICKER_ERROR": function ADD_TICKER_ERROR() {
          return (
            /* binding */
            _ADD_TICKER_ERROR
          );
        },

        /* harmony export */
        "LOGOUT_NEWS_STATE": function LOGOUT_NEWS_STATE() {
          return (
            /* binding */
            _LOGOUT_NEWS_STATE
          );
        },

        /* harmony export */
        "GetMyNews": function GetMyNews() {
          return (
            /* binding */
            _GetMyNews
          );
        },

        /* harmony export */
        "GetMyNewsSuccess": function GetMyNewsSuccess() {
          return (
            /* binding */
            _GetMyNewsSuccess
          );
        },

        /* harmony export */
        "GetMyNewsError": function GetMyNewsError() {
          return (
            /* binding */
            _GetMyNewsError
          );
        },

        /* harmony export */
        "GetTrashNews": function GetTrashNews() {
          return (
            /* binding */
            _GetTrashNews
          );
        },

        /* harmony export */
        "GetTrashNewsSuccess": function GetTrashNewsSuccess() {
          return (
            /* binding */
            _GetTrashNewsSuccess
          );
        },

        /* harmony export */
        "GetTrashNewsError": function GetTrashNewsError() {
          return (
            /* binding */
            _GetTrashNewsError
          );
        },

        /* harmony export */
        "GetNews": function GetNews() {
          return (
            /* binding */
            _GetNews
          );
        },

        /* harmony export */
        "GetNewsSuccess": function GetNewsSuccess() {
          return (
            /* binding */
            _GetNewsSuccess
          );
        },

        /* harmony export */
        "GetNewsError": function GetNewsError() {
          return (
            /* binding */
            _GetNewsError
          );
        },

        /* harmony export */
        "DeleteNews": function DeleteNews() {
          return (
            /* binding */
            _DeleteNews
          );
        },

        /* harmony export */
        "DeleteNewsSuccess": function DeleteNewsSuccess() {
          return (
            /* binding */
            _DeleteNewsSuccess
          );
        },

        /* harmony export */
        "DeleteNewsError": function DeleteNewsError() {
          return (
            /* binding */
            _DeleteNewsError
          );
        },

        /* harmony export */
        "RestoreNews": function RestoreNews() {
          return (
            /* binding */
            _RestoreNews
          );
        },

        /* harmony export */
        "RestoreNewsSuccess": function RestoreNewsSuccess() {
          return (
            /* binding */
            _RestoreNewsSuccess
          );
        },

        /* harmony export */
        "RestoreNewsError": function RestoreNewsError() {
          return (
            /* binding */
            _RestoreNewsError
          );
        },

        /* harmony export */
        "UpdateNewsLoaded": function UpdateNewsLoaded() {
          return (
            /* binding */
            _UpdateNewsLoaded
          );
        },

        /* harmony export */
        "UpdateMyNewsLoaded": function UpdateMyNewsLoaded() {
          return (
            /* binding */
            _UpdateMyNewsLoaded
          );
        },

        /* harmony export */
        "UpdateTrashNewsLoaded": function UpdateTrashNewsLoaded() {
          return (
            /* binding */
            _UpdateTrashNewsLoaded
          );
        },

        /* harmony export */
        "DestroyNews": function DestroyNews() {
          return (
            /* binding */
            _DestroyNews
          );
        },

        /* harmony export */
        "DestroyNewsSuccess": function DestroyNewsSuccess() {
          return (
            /* binding */
            _DestroyNewsSuccess
          );
        },

        /* harmony export */
        "DestroyNewsError": function DestroyNewsError() {
          return (
            /* binding */
            _DestroyNewsError
          );
        },

        /* harmony export */
        "GetTickers": function GetTickers() {
          return (
            /* binding */
            _GetTickers
          );
        },

        /* harmony export */
        "GetTickersSuccess": function GetTickersSuccess() {
          return (
            /* binding */
            _GetTickersSuccess
          );
        },

        /* harmony export */
        "GetTickersError": function GetTickersError() {
          return (
            /* binding */
            _GetTickersError
          );
        },

        /* harmony export */
        "AddTickerNews": function AddTickerNews() {
          return (
            /* binding */
            _AddTickerNews
          );
        },

        /* harmony export */
        "AddTickerNewsSuccess": function AddTickerNewsSuccess() {
          return (
            /* binding */
            _AddTickerNewsSuccess
          );
        },

        /* harmony export */
        "AddTickerNewsError": function AddTickerNewsError() {
          return (
            /* binding */
            _AddTickerNewsError
          );
        },

        /* harmony export */
        "ApproveTickerNews": function ApproveTickerNews() {
          return (
            /* binding */
            _ApproveTickerNews
          );
        },

        /* harmony export */
        "ApproveTickerNewsSuccess": function ApproveTickerNewsSuccess() {
          return (
            /* binding */
            _ApproveTickerNewsSuccess
          );
        },

        /* harmony export */
        "ApproveTickerNewsError": function ApproveTickerNewsError() {
          return (
            /* binding */
            _ApproveTickerNewsError
          );
        },

        /* harmony export */
        "DisApproveTickerNews": function DisApproveTickerNews() {
          return (
            /* binding */
            _DisApproveTickerNews
          );
        },

        /* harmony export */
        "DisApproveTickerNewsSuccess": function DisApproveTickerNewsSuccess() {
          return (
            /* binding */
            _DisApproveTickerNewsSuccess
          );
        },

        /* harmony export */
        "DisApproveTickerNewsError": function DisApproveTickerNewsError() {
          return (
            /* binding */
            _DisApproveTickerNewsError
          );
        },

        /* harmony export */
        "DeleteTickerNews": function DeleteTickerNews() {
          return (
            /* binding */
            _DeleteTickerNews
          );
        },

        /* harmony export */
        "DeleteTickerNewsSuccess": function DeleteTickerNewsSuccess() {
          return (
            /* binding */
            _DeleteTickerNewsSuccess
          );
        },

        /* harmony export */
        "DeleteTickerNewsError": function DeleteTickerNewsError() {
          return (
            /* binding */
            _DeleteTickerNewsError
          );
        },

        /* harmony export */
        "AddTicker": function AddTicker() {
          return (
            /* binding */
            _AddTicker
          );
        },

        /* harmony export */
        "AddTickerSuccess": function AddTickerSuccess() {
          return (
            /* binding */
            _AddTickerSuccess
          );
        },

        /* harmony export */
        "AddTickerError": function AddTickerError() {
          return (
            /* binding */
            _AddTickerError
          );
        },

        /* harmony export */
        "LogoutNewsState": function LogoutNewsState() {
          return (
            /* binding */
            _LogoutNewsState
          );
        }
        /* harmony export */

      });

      var _GET_A_NEWS = '[News] GET_A_NEWS';
      var _GET_A_NEWS_SUCCESS = '[News] GET_A_NEWS_SUCCESS';
      var _GET_A_NEWS_ERROR = '[News] GET_A_NEWS_ERROR';
      var _GET_MY_NEWS = '[News] GET_MY_NEWS';
      var _GET_MY_NEWS_SUCCESS = '[News] GET_MY_NEWS_SUCCESS';
      var _GET_MY_NEWS_ERROR = '[News] GET_MY_NEWS_ERROR';
      var _GET_TRASH_NEWS = '[News] GET_TRASH_NEWS';
      var _GET_TRASH_NEWS_SUCCESS = '[News] GET_TRASH_NEWS_SUCCESS';
      var _GET_TRASH_NEWS_ERROR = '[News] GET_TRASH_NEWS_ERROR';
      var _DELETE_NEWS = '[News] DELETE_NEWS';
      var _DELETE_NEWS_SUCCESS = '[News] DELETE_NEWS_SUCCESS';
      var _DELETE_NEWS_ERROR = '[News] DELETE_NEWS_ERROR';
      var _RESTORE_NEWS = '[News] RESTORE_NEWS';
      var _RESTORE_NEWS_SUCCESS = '[News] RESTORE_NEWS_SUCCESS';
      var _RESTORE_NEWS_ERROR = '[News] RESTORE_NEWS_ERROR';
      var _CHANGE_NEWS_LOADED = '[News] CHANGE_NEWS_LOADED';
      var _CHANGE_MY_NEWS_LOADED = '[News] CHANGE_MY_NEWS_LOADED';
      var _CHANGE_TRASH_NEWS_LOADED = '[News] CHANGE_TRASH_NEWS_LOADED';
      var _DESTROY_NEWS = '[News] DESTROY_NEWS';
      var _DESTROY_NEWS_SUCCESS = '[News] DESTROY_NEWS_SUCCESS';
      var _DESTROY_NEWS_ERROR = '[News] DESTROY_NEWS_ERROR';
      var _GET_TICKERS = '[News] GET_TICKERS';
      var _GET_TICKERS_SUCCESS = '[News] GET_TICKERS_SUCCESS';
      var _GET_TICKERS_ERROR = '[News] GET_TICKERS_ERROR';
      var _ADD_TICKER_NEWS = '[News] ADD_TICKER_NEWS';
      var _ADD_TICKER_NEWS_SUCCESS = '[News] ADD_TICKER_NEWS_SUCCESS';
      var _ADD_TICKER_NEWS_ERROR = '[News] ADD_TICKER_NEWS_ERROR';
      var _APPROVE_TICKER_NEWS = '[News] APPROVE_TICKER_NEWS';
      var _APPROVE_TICKER_NEWS_SUCCESS = '[News] APPROVE_TICKER_NEWS_SUCCESS';
      var _APPROVE_TICKER_NEWS_ERROR = '[News] APPROVE_TICKER_NEWS_ERROR';
      var _DISAPPROVE_TICKER_NEWS = '[News] DISAPPROVE_TICKER_NEWS';
      var _DISAPPROVE_TICKER_NEWS_SUCCESS = '[News] DISAPPROVE_TICKER_NEWS_SUCCESS';
      var _DISAPPROVE_TICKER_NEWS_ERROR = '[News] DISAPPROVE_TICKER_NEWS_ERROR';
      var _DELETE_TICKER_NEWS = '[News] DELETE_TICKER_NEWS';
      var _DELETE_TICKER_NEWS_SUCCESS = '[News] DELETE_TICKER_NEWS_SUCCESS';
      var _DELETE_TICKER_NEWS_ERROR = '[News] DELETE_TICKER_NEWS_ERROR';
      var _ADD_TICKER = '[News] ADD_TICKER';
      var _ADD_TICKER_SUCCESS = '[News] ADD_TICKER_SUCCESS';
      var _ADD_TICKER_ERROR = '[News] ADD_TICKER_ERROR';
      var _LOGOUT_NEWS_STATE = '[News] LOGOUT_NEWS_STATE'; // clears news state when user logout is called

      /** -------------------------------------------------->MY NEWS LOADING ACTIONS */

      var _GetMyNews = function _GetMyNews(payload) {
        _classCallCheck(this, _GetMyNews);

        this.payload = payload;
        this.type = _GET_MY_NEWS;
      };

      var _GetMyNewsSuccess = function _GetMyNewsSuccess(payload) {
        _classCallCheck(this, _GetMyNewsSuccess);

        this.payload = payload;
        this.type = _GET_MY_NEWS_SUCCESS;
      };

      var _GetMyNewsError = function _GetMyNewsError() {
        _classCallCheck(this, _GetMyNewsError);

        this.type = _GET_MY_NEWS_ERROR;
      };
      /** -------------------------------------------------->TRASH NEWS LOADING ACTIONS */


      var _GetTrashNews = function _GetTrashNews(payload) {
        _classCallCheck(this, _GetTrashNews);

        this.payload = payload;
        this.type = _GET_TRASH_NEWS;
      };

      var _GetTrashNewsSuccess = function _GetTrashNewsSuccess(payload) {
        _classCallCheck(this, _GetTrashNewsSuccess);

        this.payload = payload;
        this.type = _GET_TRASH_NEWS_SUCCESS;
      };

      var _GetTrashNewsError = function _GetTrashNewsError() {
        _classCallCheck(this, _GetTrashNewsError);

        this.type = _GET_TRASH_NEWS_ERROR;
      };
      /**
       * -------------------------------------------------->GET ONE NEWS FROM STORE
       * --------------------------------------------------//TODO - remove later
       * */


      var _GetNews = function _GetNews(payload) {
        _classCallCheck(this, _GetNews);

        this.payload = payload;
        this.type = _GET_A_NEWS;
      };

      var _GetNewsSuccess = function _GetNewsSuccess(payload) {
        _classCallCheck(this, _GetNewsSuccess);

        this.payload = payload;
        this.type = _GET_A_NEWS_SUCCESS;
      };

      var _GetNewsError = function _GetNewsError() {
        _classCallCheck(this, _GetNewsError);

        this.type = _GET_A_NEWS_ERROR;
      };
      /**
       * -------------------------------------------------->NEWS DELETING (TRASHING) ACTIONS,
       * -------------------------------------------------->sets news status to deleted
      */


      var _DeleteNews = function _DeleteNews(payload) {
        _classCallCheck(this, _DeleteNews);

        this.payload = payload;
        this.type = _DELETE_NEWS;
      };

      var _DeleteNewsSuccess = function _DeleteNewsSuccess(payload) {
        _classCallCheck(this, _DeleteNewsSuccess);

        this.payload = payload;
        this.type = _DELETE_NEWS_SUCCESS;
      };

      var _DeleteNewsError = function _DeleteNewsError() {
        _classCallCheck(this, _DeleteNewsError);

        this.type = _DELETE_NEWS_ERROR;
      };
      /** -------------------------------------------------->NEWS RESTORING ACTIONS */


      var _RestoreNews = function _RestoreNews(payload) {
        _classCallCheck(this, _RestoreNews);

        this.payload = payload;
        this.type = _RESTORE_NEWS;
      };

      var _RestoreNewsSuccess = function _RestoreNewsSuccess(payload) {
        _classCallCheck(this, _RestoreNewsSuccess);

        this.payload = payload;
        this.type = _RESTORE_NEWS_SUCCESS;
      };

      var _RestoreNewsError = function _RestoreNewsError() {
        _classCallCheck(this, _RestoreNewsError);

        this.type = _RESTORE_NEWS_ERROR;
      };
      /**
       * -------------------------------------------------->ACTIONS TO SET LOADING FLAGS
       * -------------------------------------------------->inorder for the controllers to load new news from api
       */


      var _UpdateNewsLoaded = function _UpdateNewsLoaded(payload) {
        _classCallCheck(this, _UpdateNewsLoaded);

        this.payload = payload;
        this.type = _CHANGE_NEWS_LOADED;
      };

      var _UpdateMyNewsLoaded = function _UpdateMyNewsLoaded(payload) {
        _classCallCheck(this, _UpdateMyNewsLoaded);

        this.payload = payload;
        this.type = _CHANGE_MY_NEWS_LOADED;
      };

      var _UpdateTrashNewsLoaded = function _UpdateTrashNewsLoaded(payload) {
        _classCallCheck(this, _UpdateTrashNewsLoaded);

        this.payload = payload;
        this.type = _CHANGE_TRASH_NEWS_LOADED;
      };
      /**
       * -------------------------------------------------->ACTIONS FOR REMOVING NEWS FROM DATABASE
       * -------------------------------------------------->compleatly destroy them
       */


      var _DestroyNews = function _DestroyNews(payload) {
        _classCallCheck(this, _DestroyNews);

        this.payload = payload;
        this.type = _DESTROY_NEWS;
      };

      var _DestroyNewsSuccess = function _DestroyNewsSuccess(payload) {
        _classCallCheck(this, _DestroyNewsSuccess);

        this.payload = payload;
        this.type = _DESTROY_NEWS_SUCCESS;
      };

      var _DestroyNewsError = function _DestroyNewsError() {
        _classCallCheck(this, _DestroyNewsError);

        this.type = _DESTROY_NEWS_ERROR;
      };
      /**
       * -------------------------------------------------->TICKER ACTIONS
       * -------------------------------------------------->users cannot remove, disable or enable ticker or ticker news
       * -------------------------------------------------->users can add ticker news, but the added news is marked unpublished (an editor have to publish the news)
       */

      /**
       * -------------------------------------------------->GET TICKERS
       */


      var _GetTickers = function _GetTickers() {
        _classCallCheck(this, _GetTickers);

        this.type = _GET_TICKERS;
      };

      var _GetTickersSuccess = function _GetTickersSuccess(payload) {
        _classCallCheck(this, _GetTickersSuccess);

        this.payload = payload;
        this.type = _GET_TICKERS_SUCCESS;
      };

      var _GetTickersError = function _GetTickersError() {
        _classCallCheck(this, _GetTickersError);

        this.type = _GET_TICKERS_ERROR;
      };
      /**
       * -------------------------------------------------->ADD TICKER NEWS
       */


      var _AddTickerNews = function _AddTickerNews(payload) {
        _classCallCheck(this, _AddTickerNews);

        this.payload = payload;
        this.type = _ADD_TICKER_NEWS;
      };

      var _AddTickerNewsSuccess = function _AddTickerNewsSuccess(payload) {
        _classCallCheck(this, _AddTickerNewsSuccess);

        this.payload = payload;
        this.type = _ADD_TICKER_NEWS_SUCCESS;
      };

      var _AddTickerNewsError = function _AddTickerNewsError() {
        _classCallCheck(this, _AddTickerNewsError);

        this.type = _ADD_TICKER_NEWS_ERROR;
      };
      /**
       * -------------------------------------------------->APPROVE TICKER NEWS
       */


      var _ApproveTickerNews = function _ApproveTickerNews(payload) {
        _classCallCheck(this, _ApproveTickerNews);

        this.payload = payload;
        this.type = _APPROVE_TICKER_NEWS;
      };

      var _ApproveTickerNewsSuccess = function _ApproveTickerNewsSuccess(payload) {
        _classCallCheck(this, _ApproveTickerNewsSuccess);

        this.payload = payload;
        this.type = _APPROVE_TICKER_NEWS_SUCCESS;
      };

      var _ApproveTickerNewsError = function _ApproveTickerNewsError() {
        _classCallCheck(this, _ApproveTickerNewsError);

        this.type = _APPROVE_TICKER_NEWS_ERROR;
      };
      /**
       * -------------------------------------------------->DISAPPROVE TICKER NEWS
       */


      var _DisApproveTickerNews = function _DisApproveTickerNews(payload) {
        _classCallCheck(this, _DisApproveTickerNews);

        this.payload = payload;
        this.type = _DISAPPROVE_TICKER_NEWS;
      };

      var _DisApproveTickerNewsSuccess = function _DisApproveTickerNewsSuccess(payload) {
        _classCallCheck(this, _DisApproveTickerNewsSuccess);

        this.payload = payload;
        this.type = _DISAPPROVE_TICKER_NEWS_SUCCESS;
      };

      var _DisApproveTickerNewsError = function _DisApproveTickerNewsError() {
        _classCallCheck(this, _DisApproveTickerNewsError);

        this.type = _DISAPPROVE_TICKER_NEWS_ERROR;
      };
      /**
       * -------------------------------------------------->DELETE TICKER NEWS
       */


      var _DeleteTickerNews = function _DeleteTickerNews(payload) {
        _classCallCheck(this, _DeleteTickerNews);

        this.payload = payload;
        this.type = _DELETE_TICKER_NEWS;
      };

      var _DeleteTickerNewsSuccess = function _DeleteTickerNewsSuccess(payload) {
        _classCallCheck(this, _DeleteTickerNewsSuccess);

        this.payload = payload;
        this.type = _DELETE_TICKER_NEWS_SUCCESS;
      };

      var _DeleteTickerNewsError = function _DeleteTickerNewsError() {
        _classCallCheck(this, _DeleteTickerNewsError);

        this.type = _DELETE_TICKER_NEWS_ERROR;
      };
      /**
       * -------------------------------------------------->ADD A TICKER
       */


      var _AddTicker = function _AddTicker(payload) {
        _classCallCheck(this, _AddTicker);

        this.payload = payload;
        this.type = _ADD_TICKER;
      };

      var _AddTickerSuccess = function _AddTickerSuccess(payload) {
        _classCallCheck(this, _AddTickerSuccess);

        this.payload = payload;
        this.type = _ADD_TICKER_SUCCESS;
      };

      var _AddTickerError = function _AddTickerError() {
        _classCallCheck(this, _AddTickerError);

        this.type = _ADD_TICKER_ERROR;
      };
      /** action called when user logs out of the system to clear the "NewsState" */


      var _LogoutNewsState = function _LogoutNewsState() {
        _classCallCheck(this, _LogoutNewsState);

        this.type = _LOGOUT_NEWS_STATE;
      };
      /***/

    },

    /***/
    3504:
    /*!********************************************!*\
      !*** ./src/app/news/store/news.reducer.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "initialState": function initialState() {
          return (
            /* binding */
            _initialState3
          );
        },

        /* harmony export */
        "reducer": function reducer() {
          return (
            /* binding */
            _reducer3
          );
        },

        /* harmony export */
        "getNewsState": function getNewsState() {
          return (
            /* binding */
            _getNewsState
          );
        },

        /* harmony export */
        "getMyNews": function getMyNews() {
          return (
            /* binding */
            _getMyNews2
          );
        },

        /* harmony export */
        "getNewsById": function getNewsById() {
          return (
            /* binding */
            _getNewsById2
          );
        },

        /* harmony export */
        "getMyNewsByStatus": function getMyNewsByStatus() {
          return (
            /* binding */
            _getMyNewsByStatus
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      62800);
      /* harmony import */


      var _news_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./news.actions */
      15490);

      var _initialState3 = {
        myNews: [],
        myNewsPageState: {
          currentPage: null,
          perPage: null,
          lastPages: null,
          totalResults: null
        },
        trashNews: [],
        trashNewsPageState: {
          currentPage: null,
          perPage: null,
          lastPages: null,
          totalResults: null
        },
        isLoaded: false,
        isMyNewsLoaded: false,
        isTrashLoaded: false,
        tickers: null
      };

      function _reducer3() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState3;
        var action = arguments.length > 1 ? arguments[1] : undefined;
        console.log(state, action);
        console.log('News REDUCER Call!');

        switch (action.type) {
          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.GET_MY_NEWS:
            {
              return Object.assign(Object.assign({}, state), {
                myNewsPageState: {
                  currentPage: action.payload.currentPage,
                  perPage: action.payload.perPage
                },
                isMyNewsLoaded: false,
                isLoaded: false
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.GET_MY_NEWS_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                myNews: action.payload.data,
                myNewsPageState: {
                  currentPage: action.payload.current_page,
                  perPage: Number(action.payload.per_page),
                  lastPages: action.payload.last_page,
                  totalResults: action.payload.total
                },
                isMyNewsLoaded: true,
                isLoaded: true
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.GET_TRASH_NEWS:
            {
              return Object.assign(Object.assign({}, state), {
                trashNewsPageState: {
                  currentPage: action.payload.currentPage,
                  perPage: action.payload.perPage
                },
                isTrashLoaded: false,
                isLoaded: false
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.GET_TRASH_NEWS_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                trashNews: action.payload.data,
                trashNewsPageState: {
                  currentPage: action.payload.current_page,
                  perPage: Number(action.payload.per_page),
                  lastPages: action.payload.last_page,
                  totalResults: action.payload.total
                },
                isTrashLoaded: true,
                isLoaded: true
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DELETE_NEWS:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: false
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DELETE_NEWS_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                myNews: state.myNews.filter(function (news) {
                  return news.id !== action.payload.id;
                }),
                trashNews: [].concat(_toConsumableArray(state.trashNews), _toConsumableArray(Object.assign(state.myNews.filter(function (news) {
                  return news.id === action.payload.id;
                }), {
                  newsstatus: {
                    status: 'deleted'
                  }
                }))),
                isLoaded: true,
                isMyNewsLoaded: false,
                isTrashLoaded: false
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.RESTORE_NEWS_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                myNews: [].concat(_toConsumableArray(state.myNews), _toConsumableArray(state.trashNews.filter(function (news) {
                  return news.id === action.payload.id;
                }))),
                trashNews: state.trashNews.filter(function (news) {
                  return news.id !== action.payload.id;
                }),
                isLoaded: false,
                isMyNewsLoaded: false,
                isTrashLoaded: false
              });
            }

          /**
           * ----------------------------------------------------------------------------------
           * ---------------------------------------------------------------------> Ticker News
           * ----------------------------------------------------------------------------------
           */

          /**
           * ---------------------------------------------------------------------> GET TICKERS
           */

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.GET_TICKERS:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: false
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.GET_TICKERS_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: true,
                tickers: action.payload
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.GET_TICKERS_ERROR:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: true
              });
            }

          /**
           * ---------------------------------------------------------------------> ADD TICKER NEWS
           */

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TICKER_NEWS:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: false
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TICKER_NEWS_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: true,
                tickers: action.payload
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TICKER_NEWS_ERROR:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: true
              });
            }

          /**
           * ---------------------------------------------------------------------> APPROVE TICKER NEWS
           */

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.APPROVE_TICKER_NEWS:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: false
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.APPROVE_TICKER_NEWS_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: true,
                tickers: action.payload
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.APPROVE_TICKER_NEWS_ERROR:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: true
              });
            }

          /**
           * ---------------------------------------------------------------------> DISAPPROVE TICKER NEWS
           */

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DISAPPROVE_TICKER_NEWS:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: false
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DISAPPROVE_TICKER_NEWS_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: true,
                tickers: action.payload
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DISAPPROVE_TICKER_NEWS_ERROR:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: true
              });
            }

          /**
           * ---------------------------------------------------------------------> DELETE TICKER NEWS
           */

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DELETE_TICKER_NEWS:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: false
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DELETE_TICKER_NEWS_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: true,
                tickers: action.payload
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DELETE_TICKER_NEWS_ERROR:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: true
              });
            }

          /**
           * ---------------------------------------------------------------------> ADD TICKER
           */

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TICKER:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: false
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TICKER_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: true,
                tickers: action.payload
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TICKER_ERROR:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: true
              });
            }
          // when set to false myNews will be fetched from api

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_NEWS_LOADED:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: action.payload.isLoaded
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_MY_NEWS_LOADED:
            {
              return Object.assign(Object.assign({}, state), {
                isMyNewsLoaded: action.payload.isMyNewsLoaded
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_TRASH_NEWS_LOADED:
            {
              return Object.assign(Object.assign({}, state), {
                isTrashLoaded: action.payload.isTrashNewsLoaded
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DESTROY_NEWS:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: false
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DESTROY_NEWS_SUCCESS:
            {
              return Object.assign(Object.assign({}, state), {
                trashNews: state.trashNews.filter(function (news) {
                  return news.id !== action.payload.id;
                }),
                isLoaded: true
              });
            }

          case _news_actions__WEBPACK_IMPORTED_MODULE_0__.LOGOUT_NEWS_STATE:
            {
              // return {
              //   myNews: [],
              //   myNewsPageState: {currentPage: null, perPage: null, lastPages: null, totalResults: null},
              //   trashNews: [],
              //   trashNewsPageState: {currentPage: null, perPage: null, lastPages: null, totalResults: null},
              //   isLoaded: false,
              //   isMyNewsLoaded: false,
              //   isTrashLoaded: false
              // };
              return _initialState3;
            }

          default:
            {
              return state;
            }
        }
      }

      var _getNewsState = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)('NewsState');

      var _getMyNews2 = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_getNewsState, function (state) {
        return state.myNews;
      });

      var _getNewsById2 = function _getNewsById2(newsBox, id) {
        return (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_getNewsState, function (allItems) {
          if (allItems) {
            return allItems[newsBox].find(function (item) {
              return item.id === id;
            });
          } else {
            return {};
          }
        });
      };

      var _getMyNewsByStatus = function _getMyNewsByStatus(status) {
        return (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_getNewsState, function (state) {
          return state.myNews.filter(function (x) {
            return x.newsstatus.status === status;
          });
        });
      };
      /***/

    },

    /***/
    65903:
    /*!*********************************************************!*\
      !*** ./src/app/shared/accordion/accordion.directive.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccordionDirective": function AccordionDirective() {
          return (
            /* binding */
            _AccordionDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _AccordionDirective = /*#__PURE__*/function () {
        function _AccordionDirective(router) {
          var _this6 = this;

          _classCallCheck(this, _AccordionDirective);

          this.router = router;
          this.navlinks = [];
          setTimeout(function () {
            return _this6.checkOpenLinks();
          });
        }

        _createClass(_AccordionDirective, [{
          key: "closeOtherLinks",
          value: function closeOtherLinks(selectedLink) {
            this.navlinks.forEach(function (link) {
              if (link !== selectedLink) {
                link.selected = false;
              }
            });
          }
        }, {
          key: "addLink",
          value: function addLink(link) {
            this.navlinks.push(link);
          }
        }, {
          key: "removeGroup",
          value: function removeGroup(link) {
            var index = this.navlinks.indexOf(link);

            if (index !== -1) {
              this.navlinks.splice(index, 1);
            }
          }
        }, {
          key: "checkOpenLinks",
          value: function checkOpenLinks() {
            var _this7 = this;

            this.navlinks.forEach(function (link) {
              if (link.group) {
                var routeUrl = _this7.router.url;
                var currentUrl = routeUrl.split('/');

                if (currentUrl.indexOf(link.group) > 0) {
                  link.selected = true;

                  _this7.closeOtherLinks(link);
                }
              }
            });
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            var _this8 = this;

            this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd;
            })).subscribe(function (e) {
              return _this8.checkOpenLinks();
            });
          }
        }]);

        return _AccordionDirective;
      }();

      _AccordionDirective.ɵfac = function AccordionDirective_Factory(t) {
        return new (t || _AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };

      _AccordionDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _AccordionDirective,
        selectors: [["", "appAccordion", ""]]
      });
      /***/
    },

    /***/
    9502:
    /*!***************************************************************!*\
      !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccordionAnchorDirective": function AccordionAnchorDirective() {
          return (
            /* binding */
            _AccordionAnchorDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./accordionlink.directive */
      67725);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _AccordionAnchorDirective = /*#__PURE__*/function () {
        function _AccordionAnchorDirective(navlink) {
          _classCallCheck(this, _AccordionAnchorDirective);

          this.navlink = navlink;
        }

        _createClass(_AccordionAnchorDirective, [{
          key: "onClick",
          value: function onClick(e) {
            this.navlink.toggle();
          }
        }]);

        return _AccordionAnchorDirective;
      }();

      _AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) {
        return new (t || _AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionLinkDirective));
      };

      _AccordionAnchorDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _AccordionAnchorDirective,
        selectors: [["", "appAccordionToggle", ""]],
        hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        }
      });
      /***/
    },

    /***/
    67725:
    /*!*************************************************************!*\
      !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccordionLinkDirective": function AccordionLinkDirective() {
          return (
            /* binding */
            _AccordionLinkDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _accordion_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./accordion.directive */
      65903);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _AccordionLinkDirective = /*#__PURE__*/function () {
        function _AccordionLinkDirective(nav) {
          _classCallCheck(this, _AccordionLinkDirective);

          this.nav = nav;
        }

        _createClass(_AccordionLinkDirective, [{
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            this._selected = value;

            if (value) {
              this.nav.closeOtherLinks(this);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.nav.addLink(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.nav.removeGroup(this);
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.selected = !this.selected;
          }
        }]);

        return _AccordionLinkDirective;
      }();

      _AccordionLinkDirective.ɵfac = function AccordionLinkDirective_Factory(t) {
        return new (t || _AccordionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionDirective));
      };

      _AccordionLinkDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _AccordionLinkDirective,
        selectors: [["", "appAccordionLink", ""]],
        hostVars: 2,
        hostBindings: function AccordionLinkDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.selected);
          }
        },
        inputs: {
          group: "group",
          selected: "selected"
        }
      });
      /***/
    },

    /***/
    98836:
    /*!*******************************************!*\
      !*** ./src/app/shared/accordion/index.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccordionAnchorDirective": function AccordionAnchorDirective() {
          return (
            /* reexport safe */
            _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionAnchorDirective
          );
        },

        /* harmony export */
        "AccordionLinkDirective": function AccordionLinkDirective() {
          return (
            /* reexport safe */
            _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective
          );
        },

        /* harmony export */
        "AccordionDirective": function AccordionDirective() {
          return (
            /* reexport safe */
            _accordion_directive__WEBPACK_IMPORTED_MODULE_2__.AccordionDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./accordionanchor.directive */
      9502);
      /* harmony import */


      var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./accordionlink.directive */
      67725);
      /* harmony import */


      var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./accordion.directive */
      65903);
      /***/

    },

    /***/
    74075:
    /*!*********************************************************************************************!*\
      !*** ./src/app/shared/component/add-ticker-news-dialog/add-ticker-news-dialog.component.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddTickerNewsDialogComponent": function AddTickerNewsDialogComponent() {
          return (
            /* binding */
            _AddTickerNewsDialogComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      20592);
      /* harmony import */


      var _news_models_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../news/models/news */
      26318);
      /* harmony import */


      var _news_store_news_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../news/store/news.actions */
      15490);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      62800);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/toolbar */
      73121);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      88030);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      73624);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      24751);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      46833);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      64372);
      /* harmony import */


      var _directives_thaana_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../directives/thaana.directive */
      76274);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      2895);

      var _AddTickerNewsDialogComponent = /*#__PURE__*/function () {
        function _AddTickerNewsDialogComponent(dialogRef, data, store) {
          _classCallCheck(this, _AddTickerNewsDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.store = store;
          this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.tickerNews = new _news_models_news__WEBPACK_IMPORTED_MODULE_0__.TickersNews();
          this.dhivehiEnabled = true;
        }

        _createClass(_AddTickerNewsDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.tickerNews.language.language_code = 'Dhv';
            this.tickerNews.ticker_id = this.data.id;
            this.tickerNews.enabled = 0; // ticker news are disabled when added
          }
        }, {
          key: "changeLanguage",
          value: function changeLanguage() {
            if (this.dhivehiEnabled) {
              this.tickerNews.language.language_code = 'Dhv';
            } else {
              this.tickerNews.language.language_code = 'Eng';
            }
          }
        }, {
          key: "closeDialog",
          value: function closeDialog(confirmation) {
            this.dialogRef.close(confirmation);
          }
        }, {
          key: "doAdd",
          value: function doAdd(id) {
            this.closeDialog(true); //this.onAdd.emit(this.tickerNews);

            this.store.dispatch(new _news_store_news_actions__WEBPACK_IMPORTED_MODULE_1__.AddTickerNews(this.tickerNews));
            this.onAdd.emit();
          }
        }]);

        return _AddTickerNewsDialogComponent;
      }();

      _AddTickerNewsDialogComponent.ɵfac = function AddTickerNewsDialogComponent_Factory(t) {
        return new (t || _AddTickerNewsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
      };

      _AddTickerNewsDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AddTickerNewsDialogComponent,
        selectors: [["app-add-ticker-news-dialog"]],
        inputs: {
          dhivehiEnabled: "dhivehiEnabled"
        },
        decls: 20,
        vars: 5,
        consts: [["color", "secondary", 1, "no-shadow"], ["fxFlex", "", "fxShow", "false", "fxShow.gt-xs", ""], ["fxShow", "false", "fxShow.gt-xs", ""], ["labelPosition", "after", "color", "secondary", 3, "ngModel", "ngModelChange"], ["mat-dialog-content", ""], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-top", "20px"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["appearance", "outline"], ["matInput", "", "mat-autosize", "", "matAutosizeMinRows", "5", "required", "", "name", "dhvInput", 3, "appDnrmsThaana", "ngModel", "ngModelChange"], ["dhvInput", ""], ["align", "end", "mat-dialog-actions", "", "align", "end"], ["mat-button", "", "color", "basic", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
        template: function AddTickerNewsDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-slide-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddTickerNewsDialogComponent_Template_mat_slide_toggle_ngModelChange_5_listener($event) {
              return ctx.dhivehiEnabled = $event;
            })("ngModelChange", function AddTickerNewsDialogComponent_Template_mat_slide_toggle_ngModelChange_5_listener() {
              return ctx.changeLanguage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Ticker News");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "textarea", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddTickerNewsDialogComponent_Template_textarea_ngModelChange_13_listener($event) {
              return ctx.tickerNews.news = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddTickerNewsDialogComponent_Template_button_click_16_listener() {
              return ctx.closeDialog(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddTickerNewsDialogComponent_Template_button_click_18_listener() {
              return ctx.doAdd(ctx.data.id);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Add News to ", ctx.data.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.dhivehiEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.tickerNews.language.language_code);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appDnrmsThaana", ctx.dhivehiEnabled)("ngModel", ctx.tickerNews.news);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarRow, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultShowHideDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatTextareaAutosize, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _directives_thaana_directive__WEBPACK_IMPORTED_MODULE_2__.ThaanaDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton],
        encapsulation: 2
      });
      /***/
    },

    /***/
    12329:
    /*!*****************************************************************************!*\
      !*** ./src/app/shared/component/confirm-dialog/confirm-dialog.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfirmDialogComponent": function ConfirmDialogComponent() {
          return (
            /* binding */
            _ConfirmDialogComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      20592);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      2895);

      var _ConfirmDialogComponent = /*#__PURE__*/function () {
        function _ConfirmDialogComponent(dialogRef, data) {
          _classCallCheck(this, _ConfirmDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(_ConfirmDialogComponent, [{
          key: "closeDialog",
          value: function closeDialog(confirmation) {
            this.dialogRef.close(confirmation);
          }
        }]);

        return _ConfirmDialogComponent;
      }();

      _ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
        return new (t || _ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
      };

      _ConfirmDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ConfirmDialogComponent,
        selectors: [["app-confirm-dialog"]],
        decls: 10,
        vars: 2,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "tabindex", "2", 3, "click"], ["mat-button", "", "tabindex", "-1", 3, "click"]],
        template: function ConfirmDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() {
              return ctx.closeDialog(false);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() {
              return ctx.closeDialog(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
        encapsulation: 2
      });
      /***/
    },

    /***/
    37173:
    /*!*********************************************************************************!*\
      !*** ./src/app/shared/component/view-news-dialog/view-news-dialog.component.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewNewsDialogComponent": function ViewNewsDialogComponent() {
          return (
            /* binding */
            _ViewNewsDialogComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      20592);
      /* harmony import */


      var _news_models_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../news/models/news */
      26318);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/divider */
      50591);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      7639);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tabs */
      40859);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      2895);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      3984);

      function ViewNewsDialogComponent_mat_tab_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tab", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bar_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("label", "Bar ", i_r5 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.data.language.language_code == "Dhv" ? "dhv" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bar_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.data.language.language_code == "Dhv" ? "dhv m-t-20" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bar_r4.detail);
        }
      }

      function ViewNewsDialogComponent_button_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewNewsDialogComponent_button_20_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.doDelete(ctx_r6.data.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ViewNewsDialogComponent_button_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewNewsDialogComponent_button_21_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.closeDialog(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/news/", ctx_r2.data.id, "");
        }
      }

      function ViewNewsDialogComponent_button_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewNewsDialogComponent_button_22_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.doUndo(ctx_r10.data.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Restore");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _ViewNewsDialogComponent = /*#__PURE__*/function () {
        function _ViewNewsDialogComponent(dialogRef, data) {
          _classCallCheck(this, _ViewNewsDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.onUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_ViewNewsDialogComponent, [{
          key: "closeDialog",
          value: function closeDialog(confirmation) {
            this.dialogRef.close(confirmation);
          }
        }, {
          key: "doDelete",
          value: function doDelete(id) {
            this.closeDialog(false);
            this.onDelete.emit(id);
          }
        }, {
          key: "doUndo",
          value: function doUndo(id) {
            this.closeDialog(false);
            this.onUndo.emit(id);
          }
        }]);

        return _ViewNewsDialogComponent;
      }();

      _ViewNewsDialogComponent.ɵfac = function ViewNewsDialogComponent_Factory(t) {
        return new (t || _ViewNewsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
      };

      _ViewNewsDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ViewNewsDialogComponent,
        selectors: [["app-view-news-dialog"]],
        decls: 23,
        vars: 11,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["fxLayout", "column", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["fxFlex.gt-sm", "100", "fxFlex", "100", 1, "m-t-20"], [2, "white-space", "pre-wrap", 3, "innerHTML"], [3, "label", 4, "ngFor", "ngForOf"], ["align", "end", "mat-dialog-actions", "", "align", "end"], ["mat-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "basic", 3, "routerLink", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], [3, "label"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-button", "", "color", "basic", 3, "routerLink", "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
        template: function ViewNewsDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "News Bar(s)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ViewNewsDialogComponent_mat_tab_18_Template, 6, 7, "mat-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ViewNewsDialogComponent_button_20_Template, 2, 0, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ViewNewsDialogComponent_button_21_Template, 2, 1, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ViewNewsDialogComponent_button_22_Template, 2, 0, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.news_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("dhv-title", ctx.data.language.language_code == "Dhv");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.heading, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("dhv", ctx.data.language.language_code == "Dhv");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.data.body, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.newsbar);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.newsstatus.status != "published");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.newsstatus.status != "published" && ctx.data.newsstatus.status != "deleted");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.newsstatus.status === "deleted");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabGroup, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTab, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink],
        encapsulation: 2
      });
      /***/
    },

    /***/
    76274:
    /*!*******************************************************!*\
      !*** ./src/app/shared/directives/thaana.directive.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ThaanaDirective": function ThaanaDirective() {
          return (
            /* binding */
            _ThaanaDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      24751); // '[value]': 'appDnrmsThaana',
      // '(ngModelChange)': 'keyupEvent()'


      var _ThaanaDirective = /*#__PURE__*/function () {
        function _ThaanaDirective(elem, _model, control, renderer) {
          _classCallCheck(this, _ThaanaDirective);

          this.elem = elem;
          this._model = _model;
          this.control = control;
          this.renderer = renderer;
          this.appDnrmsThaana = true;
          this.firstChar = true;
          this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this._transFrom = 'qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>?()';
          this._transToKbd = {
            'phonetic': 'ްއެރތޔުިޮޕ][\\ަސދފގހޖކލ؛\'ޒ×ޗވބނމ،./ޤޢޭޜޓޠޫީޯ÷}{|ާށޑﷲޣޙޛޚޅ:\"ޡޘޝޥޞޏޟ><؟)(',
            'phonetic-hh': 'ޤަެރތޔުިޮޕ][\\އސދފގހޖކލ؛\'ޒޝްވބނމ،./ﷲާޭޜޓޠޫީޯޕ}{|ޢށޑޟޣޙޛޚޅ:\"ޡޘޗޥޞޏމ><؟)(',
            'typewriter': 'ޫޮާީޭގރމތހލ[]ިުްަެވއނކފﷲޒޑސޔޅދބށޓޯ×’“/:ޤޜޣޠޙ÷{}<>.،\"ޥޢޘޚޡ؛ޖޕޏޗޟޛޝ\\ޞ؟)('
          };
        }

        _createClass(_ThaanaDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selStart = this.elem.nativeElement.selectionStart;
            this.selEnd = this.elem.nativeElement.selectionEnd;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.applyDhivehiStyles(this.appDnrmsThaana);
          }
        }, {
          key: "applyDhivehiStyles",
          value: function applyDhivehiStyles(apply) {
            if (apply) {
              this.elem.nativeElement.style.color = '#2d2b2d';
              this.elem.nativeElement.style.fontSize = '20px';
              this.elem.nativeElement.style.textAlign = 'right';
              this.elem.nativeElement.style.direction = 'rtl';
              this.elem.nativeElement.style.lineHeight = '38px';
              this.elem.nativeElement.style.fontFamily = 'MV Faseyha';
              this.renderer.addClass(this.elem.nativeElement, 'dhv'); // this.elem.nativeElement.style.unicodeBidi = 'bidi-override';
            } else {
              this.elem.nativeElement.style.color = '#2d2b2d';
              this.elem.nativeElement.style.fontSize = '16px';
              this.elem.nativeElement.style.textAlign = 'left';
              this.elem.nativeElement.style.direction = 'ltr';
              this.elem.nativeElement.style.unicodeBidi = '';
              this.elem.nativeElement.style.lineHeight = '28px';
              this.elem.nativeElement.style.fontFamily = 'Poppins';
              this.renderer.removeClass(this.elem.nativeElement, 'dhv');
            }
          } //  @HostListener('ngModelChange', ['$event'])
          //   onEvent(event) {
          //     if (!this.appDnrmsThaana) {
          //       this.applyDhivehiStyles(false);
          //       return;
          //     } else {
          //       this.applyDhivehiStyles(true);
          //     }
          //     const nElm = this.elem.nativeElement;
          //     const _inputValue = nElm.value; // nElm.value;
          //     let _key = event.key;
          //     let _keyChar = '';
          //     let ctrl: any;
          //     if (_inputValue.length === 0) {
          //       return true;
          //     } else if (_inputValue.length <= 1) {
          //       // _keyChar = this.elem.nativeElement.value;
          //       _keyChar = _inputValue;
          //     } else {
          //       // _keyChar = this.elem.nativeElement.value.substr(this.elem.nativeElement.selectionStart - 1, 1);
          //       // _keyChar = _inputValue.substr(nElm.selectionStart - 1, 1);
          //       _keyChar = _inputValue.substr(_inputValue.length - 1, 1);
          //     }
          //     if (event.which == null) {
          //       // IE:
          //       _key = event.key;
          //     }else if (event.which > 0) {
          //       // Non-IE printable chars:
          //       _key = event.which;
          //       // Handle special keys misfire in Opera
          //       if ([45, 46, 35, 36].indexOf(event.key) === 1) {
          //         return true;
          //       }
          //     }else {
          //       // Ignore special keys
          //       return true;
          //     }
          //     // Check for CTRL modifier key
          //     if (event.modifier) {
          //       ctrl = event.modifiers && event.CONTROL_MASK;
          //     }else if (typeof(event.ctrlKey) !== 'undefined') {
          //       ctrl = event.ctrlKey;
          //     }
          //     const selOld: number = nElm.selectionEnd;
          //     try {
          //       const transIndex = this._transFrom.indexOf(_keyChar);
          //       if (transIndex === -1 || ctrl) {
          //         return true;
          //       }
          //       const tChar = this._transToKbd['phonetic'].substr(transIndex, 1);
          //       if (this.firstChar) {
          //         // this.new_text  = tChar;
          //         this.firstChar = false;
          //         this.new_text = _inputValue.substring(0, nElm.selectionStart - 1)
          //                       + tChar
          //                       + _inputValue.substring(nElm.selectionEnd, _inputValue.length);
          //       } else {
          //         this.new_text = _inputValue.substring(0, nElm.selectionStart - 1)
          //                       + tChar
          //                       + _inputValue.substring(nElm.selectionEnd, _inputValue.length);
          //       }
          //         this.elem.nativeElement.value = this.new_text;
          //         // this._model.valueAccessor.writeValue(this.new_text);
          //         this.ngModelChange.emit(this.new_text);
          //         // console.log(this.new_text);
          //         // console.log(nElm.value);
          //         // this.render.setElementProperty(this.elem.nativeElement, 'value', this.new_text);
          //       }catch (error) {
          //         console.error(error);
          //       }
          //       nElm.setSelectionRange(selOld, selOld);
          //       nElm.focus();
          //   }
          // @HostListener('focus', ['$event'])
          //   onFocus(event) {
          // const nElm = this.elem.nativeElement;
          // const _inputValue = nElm.value;
          // nElm.setSelectionRange(nElm.selectionStart, nElm.selectionStart);
          // nElm.focus();
          // this.model_value = _inputValue;
          // this.selStart = nElm.selectionStart;
          // this.selEnd   = nElm.selectionEnd;
          //  }

        }, {
          key: "translate",
          value: function translate(event) {
            if (!this.appDnrmsThaana) {
              this.applyDhivehiStyles(false);
              return;
            } else {
              this.applyDhivehiStyles(true);
            }

            var nElm = this.elem.nativeElement;
            var _inputValue = nElm.value; // nElm.value;

            var _key = event.key;
            var _keyChar = '';
            var ctrl;

            if (_inputValue.length === 0) {
              return true;
            } else if (_inputValue.length <= 1) {
              // _keyChar = this.elem.nativeElement.value;
              _keyChar = _inputValue;
            } else {
              // _keyChar = this.elem.nativeElement.value.substr(this.elem.nativeElement.selectionStart - 1, 1);
              _keyChar = _inputValue.substr(nElm.selectionStart - 1, 1); // _keyChar = _inputValue.substr(_inputValue.length - 1, 1);
            }

            if (event.which == null) {
              // IE:
              _key = event.key;
            } else if (event.which > 0) {
              // Non-IE printable chars:
              _key = event.which; // Handle special keys misfire in Opera

              if ([45, 46, 35, 36].indexOf(event.key) === 1) {
                return true;
              }
            } else {// Ignore special keys
              // return true;
            } // Check for CTRL modifier key


            if (event.modifier) {
              ctrl = event.modifiers && event.CONTROL_MASK;
            } else if (typeof event.ctrlKey !== 'undefined') {
              ctrl = event.ctrlKey;
            }

            var selOld = nElm.selectionEnd;
            this.selEnd = nElm.selectionEnd;
            this.selStart = nElm.selectionStart;

            try {
              var transIndex = this._transFrom.indexOf(_keyChar);

              if (transIndex === -1 || ctrl) {
                return true;
              }

              var tChar = this._transToKbd['phonetic'].substr(transIndex, 1);

              if (this.firstChar) {
                // this.new_text  = tChar;
                this.firstChar = false;
                this.new_text = _inputValue.substring(0, nElm.selectionStart - 1) + tChar + _inputValue.substring(nElm.selectionEnd, _inputValue.length);
              } else {
                this.new_text = _inputValue.substring(0, nElm.selectionStart - 1) + tChar + _inputValue.substring(nElm.selectionEnd, _inputValue.length);
              }

              this.ngModelChange.emit(this.new_text);

              this._model.valueAccessor.writeValue(this.new_text);
            } catch (error) {
              console.error(error);
            }

            this.setCursor();
          }
        }, {
          key: "setCursor",
          value: function setCursor() {
            // console.log('SELECTION: '+this.selStart+'||||'+this.selEnd)
            this.elem.nativeElement.focus();
            this.elem.nativeElement.setSelectionRange(this.selStart, this.selEnd);
          }
        }]);

        return _ThaanaDirective;
      }();

      _ThaanaDirective.ɵfac = function ThaanaDirective_Factory(t) {
        return new (t || _ThaanaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
      };

      _ThaanaDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ThaanaDirective,
        selectors: [["", "appDnrmsThaana", ""]],
        hostBindings: function ThaanaDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ThaanaDirective_input_HostBindingHandler($event) {
              return ctx.translate($event);
            });
          }
        },
        inputs: {
          appDnrmsThaana: "appDnrmsThaana"
        },
        outputs: {
          ngModelChange: "ngModelChange"
        }
      });
      /***/
    },

    /***/
    42647:
    /*!*************************************************!*\
      !*** ./src/app/shared/menu-items/menu-items.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuItems": function MenuItems() {
          return (
            /* binding */
            _MenuItems
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var MENUITEMS = [
      /*{ state: '',
        name: 'Personal',
        type: 'saperator',
        icon: 'av_timer'
      }, {
        state: 'dashboards',
        name: 'Dashboards',
        type: 'sub',
        icon: 'av_timer',
        children: [
          {state: 'dashboard1', name: 'Dashboard 1'},
          {state: 'dashboard2', name: 'Dashboard 2'},
        ]
      },
        {
        state: 'material',
        name: 'Material Ui',
        type: 'sub',
        icon: 'bubble_chart',
        badge: [
          {type: 'red', value: '17'}
        ],
        children: [
          {state: 'button', name: 'Buttons'},
          {state: 'cards', name: 'Cards'},
          {state: 'grid', name: 'Grid List'},
          {state: 'lists', name: 'Lists'},
          {state: 'menu', name: 'Menu'},
          {state: 'tabs', name: 'Tabs'},
          {state: 'stepper', name: 'Stepper'},
          {state: 'expansion', name: 'Expansion Panel'},
          {state: 'chips', name: 'Chips'},
          {state: 'toolbar', name: 'Toolbar'},
          {state: 'progress-snipper', name: 'Progress snipper'},
          {state: 'progress', name: 'Progress Bar'},
          {state: 'dialog', name: 'Dialog'},
          {state: 'tooltip', name: 'Tooltip'},
          {state: 'snackbar', name: 'Snackbar'},
          {state: 'slider', name: 'Slider'},
          {state: 'slide-toggle', name: 'Slide Toggle'}
        ]
      },
      {
        state: 'apps',
        name: 'Apps',
        type: 'sub',
        icon: 'apps',
        children: [
          {state: 'calendar', name: 'Calendar'},
          {state: 'messages', name: 'Mail box'},
          {state: 'chat', name: 'Chat'},
          {state: 'taskboard', name: 'Taskboard'}
        ]
      },
        {
        state: '',
        name: 'Forms, Table & Widgets',
        type: 'saperator',
        icon: 'av_timer'
      }, {
        state: 'forms',
        name: 'Forms',
        type: 'sub',
        icon: 'insert_drive_file',
           children: [
             {state: 'form-layout', name: 'Form-Layout'},
          {state: 'autocomplete', name: 'Autocomplete'},
          {state: 'checkbox', name: 'Checkbox'},
          {state: 'datepicker', name: 'Datepicker'},
          {state: 'editor', name: 'Editor'},
          {state: 'form-validation', name: 'Form Validation'},
          {state: 'file-upload', name: 'File Upload'},
          {state: 'wizard', name: 'Wizard'}
           ]
      }, {
        state: 'tables',
        name: 'Tables',
        type: 'sub',
        icon: 'web',
           children: [
             {state: 'basictable', name: 'Basic Table'},
          {state: 'filterable', name: 'Filterable Table'},
          {state: 'pagination', name: 'Pagination Table'},
          {state: 'sortable', name: 'Sortable Table'},
          {state: 'mix', name: 'Mix Table'},
          {state: 'smarttable', name: 'Smart Table'}
           ]
      }, {
        state: 'datatables',
        name: 'Data Tables',
        type: 'sub',
        icon: 'border_all',
           children: [
          {state: 'basicdatatable', name: 'Basic Data Table'},
          {state: 'filter', name: 'Filterable'},
          {state: 'editing', name: 'Editing'},
        ]
      }, {
        state: 'widgets',
        name: 'Widgets',
        type: 'link',
        icon: 'widgets'
      }, {
        state: '',
        name: 'Extra Component',
        type: 'saperator',
        icon: 'av_timer'
      },
        {
        state: 'authentication',
        name: 'Authentication',
        type: 'sub',
        icon: 'perm_contact_calendar',
           children: [
          {state: 'login', name: 'Login'},
          {state: 'register', name: 'Register'},
          {state: 'forgot', name: 'Forgot'},
          {state: 'lockscreen', name: 'Lockscreen'},
          {state: '404', name: 'Error'}
           ]
      }, {
        state: 'charts',
        name: 'Charts',
        type: 'sub',
        icon: 'insert_chart',
           children: [
          {state: 'chartjs', name: 'Chart Js'},
          {state: 'chartistjs', name: 'Chartist Js'},
          {state: 'ngxchart', name: 'Ngx Charts'}
           ]
      }, {
        state: 'pages',
        name: 'Pages',
        type: 'sub',
        icon: 'content_copy',
           children: [
          {state: 'icons', name: 'Material Icons'},
          {state: 'timeline', name: 'Timeline'},
          {state: 'invoice', name: 'Invoice'},
          {state: 'pricing', name: 'Pricing'},
          {state: 'helper', name: 'Helper Classes'}
        ]
      }*/
      {
        state: 'admin',
        name: 'App Management',
        role: 'admin',
        type: 'sub',
        icon: 'vpn_key',
        children: [{
          state: 'admin-dashboard',
          name: 'Dashboard',
          type: 'link'
        }, {
          state: 'user-console',
          name: 'User Console',
          type: 'link'
        }, {
          state: 'news-settings',
          name: 'News Settings',
          type: 'subchild',
          subchildren: [{
            state: 'list',
            name: 'News Lists',
            type: 'link'
          }, {
            state: 'breakers',
            name: 'News Breakers',
            type: 'link'
          }]
        }]
      }, {
        state: 'user',
        name: 'Dashboard',
        role: 'user',
        type: 'sub',
        icon: 'av_timer',
        children: [{
          state: 'profile',
          name: 'User Dashboard',
          type: 'link'
        }, {
          state: 'chat',
          name: 'Message Board',
          type: 'link'
        }]
      }, {
        state: 'editor',
        name: 'News Editor',
        role: 'news-editor',
        type: 'sub',
        icon: 'featured_play_list',
        children: [{
          state: 'dashboard',
          name: 'Dashboard',
          type: 'link'
        }, {
          state: 'review',
          name: 'Review News',
          type: 'link'
        }, {
          state: 'list',
          name: 'News List',
          type: 'link'
        }]
      }, {
        state: 'news',
        name: 'News',
        role: 'journalist',
        type: 'sub',
        icon: 'view_headline',
        children: [{
          state: 'dashboard',
          name: 'News Dashboard',
          type: 'link'
        }, {
          state: 'write',
          name: 'Write News',
          type: 'link'
        }, {
          state: 'my',
          name: 'My News',
          type: 'link' // badge: [
          //   {type: 'primary', value: '17'}
          // ],

        }, {
          state: 'ticker',
          name: 'Ticker News',
          type: 'link'
        }, {
          state: 'trash',
          name: 'Trash',
          type: 'link' // badge: [
          //   {type: 'red', value: '17'}
          // ],

        }]
      }, {
        state: 'control',
        name: 'Controller',
        role: 'control',
        type: 'sub',
        icon: 'traffic',
        children: [{
          state: 'news-cg',
          name: 'News CG',
          type: 'link'
        },
        /*{state: 'ticker', name: 'Tickers', type: 'link'},
        {state: 'cg-text', name: 'CG Text', type: 'link'},*/
        {
          state: 'on-air',
          name: 'On Air',
          type: 'link'
        } // {state: 'sms', name: 'SMS', type: 'link'},
        ]
      }];

      var _MenuItems = /*#__PURE__*/function () {
        function _MenuItems() {
          _classCallCheck(this, _MenuItems);

          this.trash = 2;
        }

        _createClass(_MenuItems, [{
          key: "OnInit",
          value: function OnInit() {// get user array
          }
        }, {
          key: "getMenuitem",
          value: function getMenuitem() {
            return MENUITEMS;
          }
        }]);

        return _MenuItems;
      }();

      _MenuItems.ɵfac = function MenuItems_Factory(t) {
        return new (t || _MenuItems)();
      };

      _MenuItems.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _MenuItems,
        factory: _MenuItems.ɵfac
      });
      /***/
    },

    /***/
    90193:
    /*!***************************************!*\
      !*** ./src/app/shared/models/user.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "User": function User() {
          return (
            /* binding */
            _User2
          );
        },

        /* harmony export */
        "Token": function Token() {
          return (
            /* binding */
            _Token
          );
        },

        /* harmony export */
        "Role": function Role() {
          return (
            /* binding */
            _Role
          );
        },

        /* harmony export */
        "Profile": function Profile() {
          return (
            /* binding */
            _Profile
          );
        }
        /* harmony export */

      });

      var _User2 = function _User2() {
        _classCallCheck(this, _User2);

        this.id = null;
      };

      var _Token = function _Token() {
        _classCallCheck(this, _Token);
      };

      var _Role = function _Role() {
        _classCallCheck(this, _Role);
      };

      var _Profile = function _Profile() {
        _classCallCheck(this, _Profile);

        this.user_id = null;
        this.dob = null;
        this.gender = null;
        this.fb = null;
        this.insta = null;
        this.twitter = null;
        this.email = null;
        this.phone = null;
        this.profilepic = '';
        this.coverimage = '';
      };
      /***/

    },

    /***/
    91643:
    /*!***********************************************!*\
      !*** ./src/app/shared/services/auth.guard.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.service */
      10629);
      /* harmony import */


      var _route_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./route-role.service */
      63293);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      3984);

      var _AuthGuard = /*#__PURE__*/function () {
        function _AuthGuard(auth, router, role) {
          _classCallCheck(this, _AuthGuard);

          this.auth = auth;
          this.router = router;
          this.role = role;
          this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        }

        _createClass(_AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var _this9 = this;

            this.loggedInSub = this.auth.loggedIn$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroySubject$)).subscribe(function (loggedIn) {
              if (!loggedIn) {
                _this9.router.navigate(['/authentication/login']);
              }

              _this9.role.initialize();
            });
            return true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroySubject$.next();
          }
        }]);

        return _AuthGuard;
      }();

      _AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || _AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_route_role_service__WEBPACK_IMPORTED_MODULE_1__.RouteRoleService));
      };

      _AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _AuthGuard,
        factory: _AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    10629:
    /*!*************************************************!*\
      !*** ./src/app/shared/services/auth.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./session.service */
      75986);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      58497);
      /*import { NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core/src/view/provider';*/


      var _AuthService = /*#__PURE__*/function () {
        function _AuthService(session, http) {
          _classCallCheck(this, _AuthService);

          this.session = session;
          this.http = http;
          this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl; // Create a stream of logged in status to communicate throughout app

          this.loggedIn = false;
          this.loggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.loggedIn);

          if (this.session.getSession('dnms_token')) {
            this.loggedIn$.next(true);
            this.loggedIn = true;
          }
        }

        _createClass(_AuthService, [{
          key: "isSignedIn",
          value: function isSignedIn() {
            return !!this.session.getSession('dnms_token');
          }
        }, {
          key: "doSignOut",
          value: function doSignOut() {
            console.log('sign out');
            this.loggedIn$.next(false);
            this.loggedIn = false;
            this.session.destroy();
          }
        }, {
          key: "signIn",
          value: function signIn(email, password) {
            return this.http.post(this.API_URL + 'authenticate/', {
              email: email,
              password: password
            });
          } // public doSignIn(accessToken: string, name: string, email: string, roles: string, roles_all: any[]) {

        }, {
          key: "doSignIn",
          value: function doSignIn(loginUser) {
            if (!loginUser.token || !loginUser.name) {
              return;
            }

            this.loggedIn$.next(true);
            this.loggedIn = true;
            this.session.saveSession(loginUser);
          }
        }, {
          key: "refreshToken",
          value: function refreshToken(token) {
            /**
             *    token refresh is not working from api
             *     //TODO need to fix token refreshing from API
              */
            // const headers = new HttpHeaders({'Authorization': 'Bearer ' + token});

            /*const ttoken = '{token: \'' + token + '\'}';
            const post_token = JSON.parse(JSON.stringify(ttoken));
            console.log(post_token);*/
            return this.http.post(this.API_URL + 'refresh/?token=' + token, null);
          }
        }, {
          key: "getUserSettings",
          value: function getUserSettings() {
            return this.session.getUserSetting;
          }
        }]);

        return _AuthService;
      }();

      _AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || _AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
      };

      _AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _AuthService,
        factory: _AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    87253:
    /*!***********************************************!*\
      !*** ./src/app/shared/services/ds.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DsService": function DsService() {
          return (
            /* binding */
            _DsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _DsService = /*#__PURE__*/function () {
        function _DsService() {
          _classCallCheck(this, _DsService);

          this.ds = this.dsInstance = deepstream('192.168.1.70:6020');
        }

        _createClass(_DsService, [{
          key: "login",
          value: function login(credentials, loginHandler) {
            // {username: 'chris', password:'password'}
            this.ds.login(credentials, loginHandler);
          }
        }, {
          key: "getRecord",
          value: function getRecord(name) {
            return this.ds.record.getRecord(name);
          }
        }, {
          key: "getList",
          value: function getList(name) {
            return this.ds.record.getList(name);
          }
        }]);

        return _DsService;
      }();

      _DsService.ɵfac = function DsService_Factory(t) {
        return new (t || _DsService)();
      };

      _DsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _DsService,
        factory: _DsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    19077:
    /*!*************************************************************!*\
      !*** ./src/app/shared/services/http-interceptor.service.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpInterceptorService": function HttpInterceptorService() {
          return (
            /* binding */
            _HttpInterceptorService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      58497);
      /* harmony import */


      var _session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./session.service */
      75986);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      10629);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      68307);
      /* harmony import */


      var _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../authentication/store/user.actions */
      61184);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      3069);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngrx/store */
      62800);

      var _HttpInterceptorService = /*#__PURE__*/function () {
        function _HttpInterceptorService(sessonService, authService, snackBar, store) {
          _classCallCheck(this, _HttpInterceptorService);

          this.sessonService = sessonService;
          this.authService = authService;
          this.snackBar = snackBar;
          this.store = store;
          this.isRefreshingToken = false;
          this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        }

        _createClass(_HttpInterceptorService, [{
          key: "addToken",
          value: function addToken(req, token) {
            return req.clone({
              setHeaders: {
                Authorization: 'Bearer ' + token
              }
            });
          }
        }, {
          key: "intercept",
          value: function intercept(request, next) {
            var _this10 = this;

            return next.handle(this.addToken(request, this.sessonService.getSession('dnms_token'))).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse) {
                // console.log(`Request for ${request.urlWithParams} with method ${request.method}`);
                if (event.status === 200) {// OK
                  // this.snackBar.open(event.statusText, 'dismiss', {duration: 1000});
                } else if (event.status === 201) {
                  // created
                  _this10.snackBar.open(event.statusText, 'dismiss', {
                    duration: 1000
                  });
                } else if (event.status === 202) {
                  // accepted
                  _this10.snackBar.open(event.statusText, 'dismiss', {
                    duration: 1000
                  });
                } else if (event.status === 204) {
                  // no content (delete)
                  _this10.snackBar.open(event.statusText, 'dismiss', {
                    duration: 1000
                  });
                }
              }
            }, function (error) {
              // console.error('NICE ERROR', error);
              switch (error.status) {
                case 400:
                  return _this10.handle400Error(error);

                case 401:
                  return _this10.handle401Error(request, next);

                case 403:
                  return _this10.snackBar.open(error.error, 'dismiss');

                case 500:
                  return _this10.snackBar.open('Server Error!', 'dismiss');
              }
            }));
            /*try {
                 return next.handle(this.addToken(request, this.sessonService.getSession('dnms_token')));
               } catch (error) {
              if (error instanceof HttpErrorResponse) {
                   switch ((<HttpErrorResponse>error).status) {
                    case 400:
                        // return this.handle400Error(error);
                    case 401:
                        this.handle401Error(request, next);
                }
              } else {
                  return Observable.throw(error);
              }
            }*/
          }
        }, {
          key: "handle401Error",
          value: function handle401Error(req, next) {
            // logged_inthis.store.dispatch(new User401());
            console.log('signing out from interceptor');
            this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_2__.User401()); // return this.authService.doSignOut();

            /*if (!this.isRefreshingToken) {
              console.log('handling 401');
                this.isRefreshingToken = true;
                   // Reset here so that the following requests wait until the token
                // comes back from the refreshToken call.
                this.tokenSubject.next(null);
                   return this.authService.refreshToken(this.sessonService.getSession('dnms_token'))
                    .map((newToken: string) => {
                        if (newToken) {
                            this.tokenSubject.next(newToken);
                            console.log(newToken);
                            return next.handle(this.addToken(req, newToken));
                        }
                           // If we don't get a new token, we are in trouble so logout.
                        return this.authService.doSignOut();
                    })
                    .subscribe(error => {
                        // If there is an exception calling 'refreshToken', bad news so logout.
                        return this.authService.doSignOut();
                    })
                    .finally(() => {
                        this.isRefreshingToken = false;
                    });
            } else {
                return this.tokenSubject
                    .filter(token => token != null)
                    // .take(1)
                    .map(token => {
                        return next.handle(this.addToken(req, token));
                    });
            }*/
          }
        }, {
          key: "handle400Error",
          value: function handle400Error(error) {
            this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_2__.User401()); // if (error && error.status === 400 && error.error && error.error.error === 'invalid_grant') {
            //     // If we get a 400 and the error message is 'invalid_grant', the token is no longer valid so logout.
            //     return this.authService.doSignOut();
            // }
            // return Observable.throw(error);
          }
        }]);

        return _HttpInterceptorService;
      }();

      _HttpInterceptorService.ɵfac = function HttpInterceptorService_Factory(t) {
        return new (t || _HttpInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store));
      };

      _HttpInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: _HttpInterceptorService,
        factory: _HttpInterceptorService.ɵfac
      });
      /***/
    },

    /***/
    63293:
    /*!*******************************************************!*\
      !*** ./src/app/shared/services/route-role.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RouteRoleService": function RouteRoleService() {
          return (
            /* binding */
            _RouteRoleService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./session.service */
      75986);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      62800);

      var _RouteRoleService = /*#__PURE__*/function () {
        function _RouteRoleService(session, router, route, store) {
          _classCallCheck(this, _RouteRoleService);

          this.session = session;
          this.router = router;
          this.route = route;
          this.store = store;
          this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        }

        _createClass(_RouteRoleService, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "initialize",
          value: function initialize() {
            var _this11 = this;

            this.routeObserver$ = this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroySubject$)).subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.RoutesRecognized) {
                _this11.guardRoute(event);
              }
              /*else if (event instanceof NavigationEnd) {
              this.checkRole(event);
              }*/

            });
          }
        }, {
          key: "guardRoute",
          value: function guardRoute(event) {
            if (this.isPublic(event)) {
              return;
            }

            if (!this.callCheckToken(event)) {
              return;
            }
          }
        }, {
          key: "callCheckToken",
          value: function callCheckToken(event) {
            // const token_date = new Date(this.session.getSession('expiry'));
            // const now_date   = new Date().getTime();
            // if (token_date.getTime() < now_date) {
            //   this.store.dispatch(new userActions.UserLogout());
            //   //this.routeObserver$.unsubscribe();
            //   return false;
            // }
            return true;
          }
        }, {
          key: "isPublic",
          value: function isPublic(event) {
            return event.state.root.firstChild.data.isPublic;
          }
        }, {
          key: "checkRole",
          value: function checkRole(event) {
            var roles_ = false;
            var sRoutes = event.url.split('/');
            this.roleSubscription$ = this.store.select(function (RootStore) {
              return RootStore.UserState.user.roles;
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroySubject$)).subscribe(function (roles) {
              if (sRoutes.includes('authentication') || sRoutes.includes('dashboard')) {
                roles_ = true;
              }

              if (roles) {
                Object.keys(roles).forEach(function (key) {
                  Object.keys(roles[key].permissions).forEach(function (role_key) {
                    // console.log(sRoutes);
                    // console.log('PERM= ' + roles[key].permissions[role_key].permission);
                    if (sRoutes.includes(roles[key].permissions[role_key].permission)) {
                      roles_ = true;
                    }
                  });
                });
              }
            }); // user have permission to this route

            if (roles_) {
              return;
            } // the user does not have the required permission


            if (!roles_) {
              this.router.navigate(['/authentication/401']);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroySubject$.next(); // this.routeObserver$.unsubscribe();
            // this.roleSubscription$.unsubscribe();
          }
        }]);

        return _RouteRoleService;
      }();

      _RouteRoleService.ɵfac = function RouteRoleService_Factory(t) {
        return new (t || _RouteRoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
      };

      _RouteRoleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _RouteRoleService,
        factory: _RouteRoleService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    75986:
    /*!****************************************************!*\
      !*** ./src/app/shared/services/session.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SessionService": function SessionService() {
          return (
            /* binding */
            _SessionService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      69165);
      /* harmony import */


      var _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../authentication/store/user.actions */
      61184);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/store */
      62800);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      58497);

      var _SessionService = /*#__PURE__*/function () {
        function _SessionService(store, http) {
          _classCallCheck(this, _SessionService);

          this.store = store;
          this.http = http;
          this.sessionExpiryTime = 1; //token expiry time local

          this.checkSessionExpiry = false;
          this.id = '';
          this.name = 'Guest';
          this.email = '';
          this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        }

        _createClass(_SessionService, [{
          key: "destroy",
          value: function destroy() {
            sessionStorage.clear();
            this.accessToken = null;
            this.name = 'Guest';
            this.email = '';
            this.roles = '';
            this.roles_all = '';
          }
        }, {
          key: "saveSession",
          value: function saveSession(loginUser) {
            // set token expiry time
            var date = new Date();
            date.setFullYear(date.getFullYear() + this.sessionExpiryTime);
            sessionStorage.setItem('id', loginUser.id);
            sessionStorage.setItem('name', loginUser.name);
            sessionStorage.setItem('email', loginUser.email);

            if (loginUser.token) {
              sessionStorage.setItem('dnms_token', loginUser.token.token);
            }

            sessionStorage.setItem('roles', JSON.stringify(loginUser.roles));
            sessionStorage.setItem('expiry', date.toJSON()); //sessionStorage.setItem('roles_all', JSON.stringify(loginUser.roles_a));
            //profile

            sessionStorage.setItem('profile', JSON.stringify(loginUser.profile));
            this.id = this.getSession('id');
            this.name = this.getSession('name');
            this.email = this.getSession('email');
            this.accessToken = this.getSession('dnms_token.token');
            this.roles = this.getSession('roles');
            this.roles_all = this.getSession('roles_all');
            return true;
          }
          /**
           * pass user data as an observable (from session storage)
           * called when page is refreshed for user state to update
           */

        }, {
          key: "getUserSetting",
          value: function getUserSetting() {
            var _this12 = this;

            if (!this.getSession('dnms_token')) {
              return this.getUserLogoutSetting(); // return false;
            }

            return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(function (observer) {
              var profile = JSON.parse(_this12.getSession('profile'));
              console.log(profile);
              var user = {
                id: _this12.getSession('id'),
                email: _this12.getSession('email'),
                name: _this12.getSession('name'),
                token: {
                  token: _this12.getSession('dnms_token')
                },
                roles: JSON.parse(_this12.getSession('roles')),
                roles_a: JSON.parse(_this12.getSession('roles_all')),
                profile: {
                  'id': profile.id,
                  'user_id': profile.user_id,
                  'dob': profile.dob,
                  'gender': profile.gender,
                  'insta': profile.insta,
                  'fb': profile.fb,
                  'twitter': profile.twitter,
                  'email': profile.email,
                  'phone': profile.phone,
                  'profilepic': profile.profilepic,
                  'coverimage': profile.coverimage
                }
              };
              observer.next(user);
              observer.complete();
            });
          }
          /**
           *  update user data from server
           *  called when user updates their profile
           */

        }, {
          key: "updateUserSettings",
          value: function updateUserSettings() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + 'userdata/all');
          }
          /**
           * Check Expiry
           * experiment to check if users token has expired
           *
           * year, month, day
           * hour,min, sec
           */

        }, {
          key: "checkExpiry",
          value: function checkExpiry() {
            if (this.checkSessionExpiry) {
              var nowDate = new Date(); //nowDate.setMinutes(nowDate.getMinutes() + this.sessionExpiryTime);

              var sessionDate = new Date(sessionStorage.getItem('expiry')); // console.log(nowDate)
              // console.log(new Date(sessionDate))

              if (nowDate.getFullYear() > sessionDate.getFullYear()) {
                console.log('this!!!!');
                this.CallLogoutState();
                return false;
              } else if (nowDate.getMonth() > sessionDate.getMonth()) {
                console.log('this!!!!');
                this.CallLogoutState();
                return false;
              } else if (nowDate.getDay() > sessionDate.getDay()) {
                console.log('this!!!!');
                this.CallLogoutState();
                return false;
              }

              var nowTime = nowDate.getHours() + ':' + nowDate.getMinutes() + ':' + nowDate.getSeconds();
              var sessionTime = sessionDate.getHours() + ':' + sessionDate.getMinutes() + ':' + sessionDate.getSeconds(); //if(nowTime > sessionTime) {

              var regExp = /(\d{1,2})\:(\d{1,2})\:(\d{1,2})/;

              if (parseInt(nowTime.replace(regExp, "$1$2$3")) > parseInt(sessionTime.replace(regExp, "$1$2$3"))) {
                console.log('this!!!!', nowTime, sessionTime);
                this.CallLogoutState();
                return false;
              }
            }

            return true;
          }
        }, {
          key: "CallLogoutState",
          value: function CallLogoutState() {
            this.destroySubject$.next(); //this.subscription.unsubscribe();

            this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_0__.UserLogout());
          }
          /**
           * pass null user data as an observable
           * called when user logs out
           */

        }, {
          key: "getUserLogoutSetting",
          value: function getUserLogoutSetting() {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(function (observer) {
              var user = {
                email: null,
                name: null,
                token: {
                  token: null
                },
                roles: null,
                roles_a: null
              };
              observer.next(user); // This method same as resolve() method from Angular 1
              // console.log('am done');

              observer.complete(); // to show we are done with our processing
              // observer.error(new Error("error message"));
            });
          } //get a key from session storage

        }, {
          key: "getSession",
          value: function getSession(key) {
            return sessionStorage.getItem(key);
          }
          /**
           *  Check if the logged in user have a given role or permission
           */

        }, {
          key: "checkRole",
          value: function checkRole(role) {
            var found = false;

            if (this.checkExpiry()) {
              this.store.select(function (state) {
                return state.UserState.user.roles;
              }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroySubject$)).subscribe(function (list) {
                if (list) {
                  //if(Object.keys(list).length > 0){
                  list.forEach(function (user_role) {
                    if (user_role.role === role) {
                      found = true;
                    }
                  });
                }
              });
            } else {//this.subscription.unsubscribe();
            }

            return found;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            //this.subscription.unsubscribe();
            this.destroySubject$.next();
          }
        }]);

        return _SessionService;
      }();

      _SessionService.ɵfac = function SessionService_Factory(t) {
        return new (t || _SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
      };

      _SessionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _SessionService,
        factory: _SessionService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    44466:
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./menu-items/menu-items */
      42647);
      /* harmony import */


      var _accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./accordion */
      98836);
      /* harmony import */


      var _directives_thaana_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./directives/thaana.directive */
      76274);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _SharedModule = function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      };

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__.MenuItems]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_SharedModule, {
          declarations: [_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionAnchorDirective, _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective, _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionDirective, _directives_thaana_directive__WEBPACK_IMPORTED_MODULE_2__.ThaanaDirective],
          exports: [_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionAnchorDirective, _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective, _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionDirective, _directives_thaana_directive__WEBPACK_IMPORTED_MODULE_2__.ThaanaDirective]
        });
      })();
      /***/

    },

    /***/
    23812:
    /*!*********************************************!*\
      !*** ./src/app/shared/spinner.component.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SpinnerComponent": function SpinnerComponent() {
          return (
            /* binding */
            _SpinnerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);

      function SpinnerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _SpinnerComponent = /*#__PURE__*/function () {
        function _SpinnerComponent(router, document) {
          var _this13 = this;

          _classCallCheck(this, _SpinnerComponent);

          this.router = router;
          this.document = document;
          this.isSpinnerVisible = true;
          this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
              _this13.isSpinnerVisible = true;
            } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationCancel || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationError) {
              _this13.isSpinnerVisible = false;
            }
          }, function () {
            _this13.isSpinnerVisible = false;
          });
        }

        _createClass(_SpinnerComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.isSpinnerVisible = false;
          }
        }]);

        return _SpinnerComponent;
      }();

      _SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
        return new (t || _SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
      };

      _SpinnerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _SpinnerComponent,
        selectors: [["app-spinner"]],
        inputs: {
          backgroundColor: "backgroundColor"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]],
        template: function SpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
        encapsulation: 2
      });
      /***/
    },

    /***/
    5754:
    /*!**************************************!*\
      !*** ./src/app/store/app.reducer.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "reducers": function reducers() {
          return (
            /* binding */
            _reducers
          );
        },

        /* harmony export */
        "logger": function logger() {
          return (
            /* binding */
            _logger
          );
        },

        /* harmony export */
        "metaReducers": function metaReducers() {
          return (
            /* binding */
            _metaReducers
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var _authentication_store_user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../authentication/store/user.reducer */
      56876);
      /* harmony import */


      var _news_store_news_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../news/store/news.reducer */
      3504);
      /* harmony import */


      var _editor_store_news_editor_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../editor/store/news-editor.reducer */
      29021);

      var _reducers = {
        UserState: _authentication_store_user_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer,
        NewsState: _news_store_news_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer,
        ReviewNews: _editor_store_news_editor_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer
      };

      function _logger(reducer) {
        return function (state, action) {
          console.log('state', state);
          console.log('action', action); // if (action.type === userAction.USER_LOGOUT_SUCCESS) {
          //   console.log('x-x ROOT REDUCER LOGOUT x-x');
          //   // state = { UserState: { user: { email: null, name: null, token: {token: null}, roles: null, roles_a: null } }, NewsState: {myNews: null, myNewsPageState: { currentPage: null, perPage: null, lastPages: null, totalResults: null }, trashNewsPageState: null, trashNews: null} };
          //   state = undefined;
          //   this.router.navigate(['/authentication/login']);
          // }

          return reducer(state, action);
        };
      }

      var _metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [_logger] : [];
      /***/

    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var _environment = {
        production: false,
        apiUrl: 'http://192.168.18.18/nrs/api/',
        storageUrl: 'http://192.168.18.18/nrs/storage/',

        /*apiUrl: 'http://203.104.25.202:84/api/',
        storageUrl: 'http://203.104.25.202:84/nrs/storage/',*/
        pusher: {
          key: '5289e5ee971f625d85fa',
          cluster: 'ap2'
        },
        firebaseConfig: {
          apiKey: "AIzaSyAIGm6zOh3hIyxjPgnMk49I3GKGOemtJz8",
          authDomain: "dnrs-rtv.firebaseapp.com",
          projectId: "dnrs-rtv",
          storageBucket: "dnrs-rtv.appspot.com",
          messagingSenderId: "1020243579171",
          appId: "1:1020243579171:web:5c846ab2199fbc4dcf7c96",
          measurementId: "G-DCPJM2FPR0"
        }
      };
      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      91211);
      /* harmony import */


      var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/compiler */
      89101);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map