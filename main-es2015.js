(self["webpackChunkmaterialpro"] = self["webpackChunkmaterialpro"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication/store/user.actions */ 61184);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/auth.service */ 10629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/spinner.component */ 23812);











class AppComponent {
    constructor(auth, store, router, _location) {
        this.auth = auth;
        this.store = store;
        this.router = router;
        this._location = _location;
    }
    ngOnInit() {
        console.log('app comp init!');
        this.loggedInSub = this.auth.loggedIn$.subscribe(loggedIn => {
            this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_0__.GetUserSettings());
            // redirect if logged in
            // this._location.back();
        });
    }
    ngOnDestroy() {
        this.loggedInSub.unsubscribe();
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location)); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__.SpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routing */ 76738);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/full/full.component */ 76729);
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/blank/blank.component */ 71658);
/* harmony import */ var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/full/header/header.component */ 21183);
/* harmony import */ var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/full/sidebar/sidebar.component */ 2991);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo-material-module */ 55408);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/spinner.component */ 23812);
/* harmony import */ var _shared_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/http-interceptor.service */ 19077);
/* harmony import */ var _shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/component/confirm-dialog/confirm-dialog.component */ 12329);
/* harmony import */ var _shared_component_view_news_dialog_view_news_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/component/view-news-dialog/view-news-dialog.component */ 37173);
/* harmony import */ var _shared_component_add_ticker_news_dialog_add_ticker_news_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/component/add-ticker-news-dialog/add-ticker-news-dialog.component */ 74075);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngrx/store-devtools */ 93572);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/app.reducer */ 5754);
/* harmony import */ var _authentication_store_user_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./authentication/store/user.effects */ 3134);
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-contextmenu */ 67396);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/fire */ 50057);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/fire/firestore */ 56717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);




























//import { SmsComponent } from './sms/sms.component';










const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true,
};
class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
            useClass: _shared_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_9__.HttpInterceptorService,
            multi: true,
        },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_19__.LocationStrategy,
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_19__.HashLocationStrategy
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
            _demo_material_module__WEBPACK_IMPORTED_MODULE_6__.DemoMaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__.FlexLayoutModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule.forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_0__.AppRoutes, { relativeLinkResolution: 'legacy' }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_25__.StoreModule.forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_13__.reducers, { metaReducers: _store_app_reducer__WEBPACK_IMPORTED_MODULE_13__.metaReducers }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__.EffectsModule.forRoot([_authentication_store_user_effects__WEBPACK_IMPORTED_MODULE_14__.UserEffects]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_27__.StoreDevtoolsModule.instrument({ maxAge: 50 }),
            ngx_contextmenu__WEBPACK_IMPORTED_MODULE_28__.ContextMenuModule.forRoot(),
            _angular_fire__WEBPACK_IMPORTED_MODULE_29__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__.environment.firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_30__.AngularFirestoreModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__.FullComponent,
        _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_4__.AppHeaderComponent,
        _shared_spinner_component__WEBPACK_IMPORTED_MODULE_8__.SpinnerComponent,
        _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_3__.AppBlankComponent,
        _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.AppSidebarComponent,
        _shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__.ConfirmDialogComponent,
        _shared_component_view_news_dialog_view_news_dialog_component__WEBPACK_IMPORTED_MODULE_11__.ViewNewsDialogComponent,
        _shared_component_add_ticker_news_dialog_add_ticker_news_dialog_component__WEBPACK_IMPORTED_MODULE_12__.AddTickerNewsDialogComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_6__.DemoMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__.FlexLayoutModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_25__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_26__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_27__.StoreDevtoolsModule, ngx_contextmenu__WEBPACK_IMPORTED_MODULE_28__.ContextMenuModule, _angular_fire__WEBPACK_IMPORTED_MODULE_29__.AngularFireModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_30__.AngularFirestoreModule] }); })();


/***/ }),

/***/ 76738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutes": function() { return /* binding */ AppRoutes; }
/* harmony export */ });
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ 76729);
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/blank/blank.component */ 71658);
/* harmony import */ var _shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/auth.guard */ 91643);



const AppRoutes = [{
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__.FullComponent,
        children: [
            {
                path: 'admin',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_ng2-dragula___ivy_ngcc___dist_fesm2015_ng2-dragula_js"), __webpack_require__.e("src_app_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 77095)).then(m => m.AdminModule),
                // canActivate: [AuthGuard],
                // data: { isPublic: false, role: 'editor' }
            }, {
                path: '',
                redirectTo: '/user',
                pathMatch: 'full'
            }, {
                path: 'user',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js-node_modules_ng2-charts-0b3cb0"), __webpack_require__.e("src_app_dashboards_dashboards_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboards/dashboards.module */ 28515)).then(m => m.DashboardsModule),
                canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
                data: { isPublic: true, role: 'user' }
            },
            {
                path: 'editor',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-dragula___ivy_ngcc___dist_fesm2015_ng2-dragula_js"), __webpack_require__.e("src_app_editor_editor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./editor/editor.module */ 93164)).then(m => m.EditorModule),
                // canActivate: [AuthGuard],
                // data: { isPublic: false, role: 'editor' }
            },
            {
                path: 'news',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_news_news_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./news/news.module */ 51926)).then(m => m.NewsModule),
                canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
                data: { isPublic: false, role: 'journalist' }
            },
            {
                path: 'control',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("default-node_modules_ng2-dragula___ivy_ngcc___dist_fesm2015_ng2-dragula_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_control_control_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./control/control.module */ 21477)).then(m => m.ControlModule),
                canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
                data: { isPublic: false, role: 'journalist' }
            },
            {
                path: 'material',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_material-component_material_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./material-component/material.module */ 48877)).then(m => m.MaterialComponentsModule)
            },
            {
                path: 'apps',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-dragula___ivy_ngcc___dist_fesm2015_ng2-dragula_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_ngx-quill___ivy_ngcc___fesm2015_ngx-quill_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_apps_apps_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./apps/apps.module */ 99269)).then(m => m.AppsModule)
            },
            {
                path: 'forms',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-validation___ivy_ngcc___dist_index_js"), __webpack_require__.e("default-node_modules_ngx-quill___ivy_ngcc___fesm2015_ngx-quill_js"), __webpack_require__.e("src_app_forms_forms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./forms/forms.module */ 71366)).then(m => m.FormModule)
            },
            {
                path: 'tables',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("src_app_tables_tables_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tables/tables.module */ 81439)).then(m => m.TablesModule)
            },
            {
                path: 'datatables',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("src_app_datatables_datatables_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./datatables/datatables.module */ 59630)).then(m => m.DataTablesModule)
            },
            {
                path: 'pages',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js"), __webpack_require__.e("src_app_pages_pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 18950)).then(m => m.PagesModule)
            },
            {
                path: 'widgets',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_widgets_widgets_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./widgets/widgets.module */ 50546)).then(m => m.WidgetsModule)
            },
            {
                path: 'charts',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js-node_modules_ng2-charts-0b3cb0"), __webpack_require__.e("src_app_charts_chartslib_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./charts/chartslib.module */ 73689)).then(m => m.ChartslibModule)
            }
        ]
    },
    {
        path: '',
        component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__.AppBlankComponent,
        children: [{
                path: 'authentication',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-validation___ivy_ngcc___dist_index_js"), __webpack_require__.e("src_app_authentication_authentication_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/authentication.module */ 41082)).then(m => m.AuthenticationModule)
            }],
        data: { isPublic: true }
    },
    {
        path: '**',
        redirectTo: 'authentication/404'
    }];


/***/ }),

/***/ 61184:
/*!******************************************************!*\
  !*** ./src/app/authentication/store/user.actions.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USER_LOGIN": function() { return /* binding */ USER_LOGIN; },
/* harmony export */   "USER_LOGIN_SUCCESS": function() { return /* binding */ USER_LOGIN_SUCCESS; },
/* harmony export */   "USER_LOGIN_ERROR": function() { return /* binding */ USER_LOGIN_ERROR; },
/* harmony export */   "USER_LOGOUT": function() { return /* binding */ USER_LOGOUT; },
/* harmony export */   "USER_LOGOUT_SUCCESS": function() { return /* binding */ USER_LOGOUT_SUCCESS; },
/* harmony export */   "USER_LOGOUT_ERROR": function() { return /* binding */ USER_LOGOUT_ERROR; },
/* harmony export */   "USER_GET_SETTINGS": function() { return /* binding */ USER_GET_SETTINGS; },
/* harmony export */   "USER_GET_SETTINGS_SUCCESS": function() { return /* binding */ USER_GET_SETTINGS_SUCCESS; },
/* harmony export */   "USER_GET_SETTINGS_ERROR": function() { return /* binding */ USER_GET_SETTINGS_ERROR; },
/* harmony export */   "SERVER_USER_GET_SETTINGS": function() { return /* binding */ SERVER_USER_GET_SETTINGS; },
/* harmony export */   "SERVER_USER_GET_SETTINGS_SUCCESS": function() { return /* binding */ SERVER_USER_GET_SETTINGS_SUCCESS; },
/* harmony export */   "SERVER_USER_GET_SETTINGS_ERROR": function() { return /* binding */ SERVER_USER_GET_SETTINGS_ERROR; },
/* harmony export */   "USER_GET_ROLES": function() { return /* binding */ USER_GET_ROLES; },
/* harmony export */   "USER_401": function() { return /* binding */ USER_401; },
/* harmony export */   "UserLogin": function() { return /* binding */ UserLogin; },
/* harmony export */   "UserLoginSuccess": function() { return /* binding */ UserLoginSuccess; },
/* harmony export */   "UserLoginError": function() { return /* binding */ UserLoginError; },
/* harmony export */   "UserLogout": function() { return /* binding */ UserLogout; },
/* harmony export */   "UserLogoutSuccess": function() { return /* binding */ UserLogoutSuccess; },
/* harmony export */   "UserLogoutError": function() { return /* binding */ UserLogoutError; },
/* harmony export */   "User401": function() { return /* binding */ User401; },
/* harmony export */   "GetUserSettings": function() { return /* binding */ GetUserSettings; },
/* harmony export */   "GetUserSettingsSuccess": function() { return /* binding */ GetUserSettingsSuccess; },
/* harmony export */   "GetUserSettingsError": function() { return /* binding */ GetUserSettingsError; },
/* harmony export */   "GetUserRoles": function() { return /* binding */ GetUserRoles; },
/* harmony export */   "ServerGetUserSettings": function() { return /* binding */ ServerGetUserSettings; },
/* harmony export */   "ServerGetUserSettingsSuccess": function() { return /* binding */ ServerGetUserSettingsSuccess; },
/* harmony export */   "ServerGetUserSettingsError": function() { return /* binding */ ServerGetUserSettingsError; }
/* harmony export */ });
const USER_LOGIN = '[User] USER_LOGIN';
const USER_LOGIN_SUCCESS = '[User] USER_LOGIN_SUCCESS';
const USER_LOGIN_ERROR = '[User] USER_LOGIN_ERROR';
const USER_LOGOUT = '[User] USER_LOGOUT';
const USER_LOGOUT_SUCCESS = '[User] USER_LOGOUT_SUCCESS';
const USER_LOGOUT_ERROR = '[User] USER_LOGOUT_ERROR';
const USER_GET_SETTINGS = '[User] USER_GET_SETTINGS';
const USER_GET_SETTINGS_SUCCESS = '[User] USER_GET_SETTINGS_SUCCESS';
const USER_GET_SETTINGS_ERROR = '[User] USER_GET_SETTINGS_ERROR';
const SERVER_USER_GET_SETTINGS = '[User] SERVER_USER_GET_SETTINGS';
const SERVER_USER_GET_SETTINGS_SUCCESS = '[User] SERVER_USER_GET_SETTINGS_SUCCESS';
const SERVER_USER_GET_SETTINGS_ERROR = '[User] SERVER_USER_GET_SETTINGS_ERROR';
const USER_GET_ROLES = '[User] USER_GET_ROLES';
const USER_401 = '[User] USER_401';
class UserLogin {
    constructor(payload) {
        this.payload = payload;
        this.type = USER_LOGIN;
    }
}
class UserLoginSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = USER_LOGIN_SUCCESS;
    }
}
class UserLoginError {
    constructor() {
        this.type = USER_LOGIN_ERROR;
    }
}
class UserLogout {
    constructor() {
        this.type = USER_LOGOUT;
    }
}
class UserLogoutSuccess {
    constructor() {
        this.type = USER_LOGOUT_SUCCESS;
        //constructor(public payload: User) {}
    }
}
class UserLogoutError {
    constructor() {
        this.type = USER_LOGOUT_ERROR;
    }
}
class User401 {
    constructor() {
        this.type = USER_401;
    }
}
class GetUserSettings {
    constructor() {
        this.type = USER_GET_SETTINGS;
    }
}
class GetUserSettingsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = USER_GET_SETTINGS_SUCCESS;
    }
}
class GetUserSettingsError {
    constructor() {
        this.type = USER_GET_SETTINGS_ERROR;
    }
}
class GetUserRoles {
    constructor() {
        this.type = USER_GET_ROLES;
    }
}
/**
 * Fetch user settings from server
 */
class ServerGetUserSettings {
    constructor() {
        this.type = SERVER_USER_GET_SETTINGS;
    }
}
class ServerGetUserSettingsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = SERVER_USER_GET_SETTINGS_SUCCESS;
    }
}
class ServerGetUserSettingsError {
    constructor() {
        this.type = SERVER_USER_GET_SETTINGS_ERROR;
    }
}


/***/ }),

/***/ 3134:
/*!******************************************************!*\
  !*** ./src/app/authentication/store/user.effects.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEffects": function() { return /* binding */ UserEffects; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/auth.service */ 10629);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.actions */ 61184);
/* harmony import */ var _news_store_news_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../news/store/news.actions */ 15490);
/* harmony import */ var _editor_store_news_editor_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../editor/store/news-editor.actions */ 23239);
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/session.service */ 75986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















class UserEffects {
    constructor(actions, authService, sessionService, store, router) {
        this.actions = actions;
        this.authService = authService;
        this.sessionService = sessionService;
        this.store = store;
        this.router = router;
        this.LogIn = this.actions.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.USER_LOGIN), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((action) => action.payload), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(payload => {
            return this.authService.signIn(payload.email, payload.password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((user) => {
                // console.log(user);
                this.authService.doSignIn(user);
                return new _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserLoginSuccess(user);
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => {
                console.log(error);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserLoginError());
            }));
        }));
        this.LogInSuccess = this.actions.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.USER_LOGIN_SUCCESS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((action) => action.payload), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((user) => {
            // console.log(user);
            if (this.sessionService.saveSession(user)) {
                // this.router.navigate(['/dashboard/default']);
                // this._location.back();
            }
            // localStorage.setItem('token', user.user.token.token);
        }));
        this.GetUserSettings = this.actions.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.USER_GET_SETTINGS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((action) => action), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(payload => {
            return this.sessionService.getUserSetting()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((user) => {
                return new _user_actions__WEBPACK_IMPORTED_MODULE_1__.GetUserSettingsSuccess(user);
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => {
                console.log(error);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _user_actions__WEBPACK_IMPORTED_MODULE_1__.GetUserSettingsError());
            }));
        }));
        this.ServerGetUserSettings = this.actions.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.SERVER_USER_GET_SETTINGS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((action) => action), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(payload => {
            return this.sessionService.updateUserSettings().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((user) => {
                this.sessionService.saveSession(user);
                return new _user_actions__WEBPACK_IMPORTED_MODULE_1__.ServerGetUserSettingsSuccess(user);
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => {
                console.log(error);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _user_actions__WEBPACK_IMPORTED_MODULE_1__.ServerGetUserSettingsError());
            }));
        }));
        this.UserLogout = this.actions.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.USER_LOGOUT), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((action) => action), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(payload => {
            this.store.dispatch(new _news_store_news_actions__WEBPACK_IMPORTED_MODULE_2__.LogoutNewsState());
            this.store.dispatch(new _editor_store_news_editor_actions__WEBPACK_IMPORTED_MODULE_3__.LogoutEditorState());
            this.authService.doSignOut();
            this.router.navigate(['/authentication/login']);
            // return Observable.of(new UserActions.UserLogoutSuccess(this.sessionService.getUserLogoutSetting()));
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserLogoutSuccess());
        }));
        this.UserLogoutSuccess = this.actions.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.USER_LOGOUT_SUCCESS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((action) => {
            //location.reload();
            this.router.navigate(['/authentication/login']);
        }));
        this.User401 = this.actions.
            pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.USER_401), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(payload => {
            console.warn('401 user found!!');
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(new _user_actions__WEBPACK_IMPORTED_MODULE_1__.UserLogout());
        }));
    }
}
UserEffects.??fac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["????inject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????inject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????inject"](_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????inject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router)); };
UserEffects.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineInjectable"]({ token: UserEffects, factory: UserEffects.??fac });
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_13__.Observable)
], UserEffects.prototype, "LogIn", void 0);
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Effect)({ dispatch: false }),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_13__.Observable)
], UserEffects.prototype, "LogInSuccess", void 0);
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_13__.Observable)
], UserEffects.prototype, "GetUserSettings", void 0);
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_13__.Observable)
], UserEffects.prototype, "ServerGetUserSettings", void 0);
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_13__.Observable)
], UserEffects.prototype, "UserLogout", void 0);
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Effect)(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_13__.Observable)
], UserEffects.prototype, "User401", void 0);


/***/ }),

/***/ 56876:
/*!******************************************************!*\
  !*** ./src/app/authentication/store/user.reducer.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "reducer": function() { return /* binding */ reducer; },
/* harmony export */   "getUserState": function() { return /* binding */ getUserState; },
/* harmony export */   "getUser": function() { return /* binding */ getUser; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.actions */ 61184);
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/user */ 90193);



const myuser = { user: { email: null, name: null, token: { token: null }, roles: null, roles_a: null, profile: new _shared_models_user__WEBPACK_IMPORTED_MODULE_1__.Profile() } };
const initialState = myuser;
function reducer(state = initialState, action) {
    switch (action.type) {
        case _user_actions__WEBPACK_IMPORTED_MODULE_0__.USER_LOGIN: {
            return Object.assign({}, state);
        }
        case _user_actions__WEBPACK_IMPORTED_MODULE_0__.USER_LOGIN_SUCCESS: {
            return Object.assign(Object.assign({}, state), { user: action.payload });
        }
        case _user_actions__WEBPACK_IMPORTED_MODULE_0__.USER_GET_SETTINGS: {
            return Object.assign({}, state);
        }
        case _user_actions__WEBPACK_IMPORTED_MODULE_0__.USER_GET_SETTINGS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { user: action.payload });
        }
        case _user_actions__WEBPACK_IMPORTED_MODULE_0__.USER_LOGOUT: {
            // return {
            //   ...state
            // };
            return initialState;
        }
        case _user_actions__WEBPACK_IMPORTED_MODULE_0__.USER_LOGOUT_SUCCESS: {
            // return {
            //   // ...state,
            //   // user: action.payload,
            //   user: { email: null, name: null, token: {token: null}, roles: null, roles_a: null }
            // };
            return initialState;
        }
        case _user_actions__WEBPACK_IMPORTED_MODULE_0__.SERVER_USER_GET_SETTINGS: {
            return Object.assign({}, state);
        }
        case _user_actions__WEBPACK_IMPORTED_MODULE_0__.SERVER_USER_GET_SETTINGS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { user: action.payload });
        }
        default: {
            return state;
        }
    }
}
const getUserState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('userState');
const getUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getUserState, (state) => state.user);


/***/ }),

/***/ 55408:
/*!*****************************************!*\
  !*** ./src/app/demo-material-module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoMaterialModule": function() { return /* binding */ DemoMaterialModule; }
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ 42542);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ 58341);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ 94935);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slider */ 54436);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/stepper */ 94553);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/table */ 20552);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/accordion */ 97091);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/a11y */ 19238);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/bidi */ 70946);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/overlay */ 58203);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/platform */ 80521);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/observers */ 18553);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/portal */ 87636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);








































/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
class DemoMaterialModule {
}
DemoMaterialModule.??fac = function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); };
DemoMaterialModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: DemoMaterialModule });
DemoMaterialModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__.MatSliderModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__.CdkTableModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__.A11yModule,
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__.BidiModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__.CdkAccordionModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_36__.ObserversModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_37__.OverlayModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__.PlatformModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__.PortalModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DemoMaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__.MatSliderModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__.CdkTableModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__.A11yModule,
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__.BidiModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_35__.CdkAccordionModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_36__.ObserversModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_37__.OverlayModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__.PlatformModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__.PortalModule] }); })();


/***/ }),

/***/ 23239:
/*!*****************************************************!*\
  !*** ./src/app/editor/store/news-editor.actions.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_REVIEW_NEWS": function() { return /* binding */ GET_REVIEW_NEWS; },
/* harmony export */   "GET_REVIEW_NEWS_SUCCESS": function() { return /* binding */ GET_REVIEW_NEWS_SUCCESS; },
/* harmony export */   "GET_REVIEW_NEWS_ERROR": function() { return /* binding */ GET_REVIEW_NEWS_ERROR; },
/* harmony export */   "APPROVE_NEWS": function() { return /* binding */ APPROVE_NEWS; },
/* harmony export */   "APPROVE_NEWS_SUCCESS": function() { return /* binding */ APPROVE_NEWS_SUCCESS; },
/* harmony export */   "APPROVE_NEWS_ERROR": function() { return /* binding */ APPROVE_NEWS_ERROR; },
/* harmony export */   "REJECT_NEWS": function() { return /* binding */ REJECT_NEWS; },
/* harmony export */   "REJECT_NEWS_SUCCESS": function() { return /* binding */ REJECT_NEWS_SUCCESS; },
/* harmony export */   "REJECT_NEWS_ERROR": function() { return /* binding */ REJECT_NEWS_ERROR; },
/* harmony export */   "GET_LISTS": function() { return /* binding */ GET_LISTS; },
/* harmony export */   "GET_LISTS_SUCCESS": function() { return /* binding */ GET_LISTS_SUCCESS; },
/* harmony export */   "GET_LISTS_ERROR": function() { return /* binding */ GET_LISTS_ERROR; },
/* harmony export */   "GET_LISTS_BY_DATE": function() { return /* binding */ GET_LISTS_BY_DATE; },
/* harmony export */   "GET_LISTS_BY_DATE_SUCCESS": function() { return /* binding */ GET_LISTS_BY_DATE_SUCCESS; },
/* harmony export */   "GET_LISTS_BY_DATE_ERROR": function() { return /* binding */ GET_LISTS_BY_DATE_ERROR; },
/* harmony export */   "ADD_TO_LIST": function() { return /* binding */ ADD_TO_LIST; },
/* harmony export */   "ADD_TO_LIST_SUCCESS": function() { return /* binding */ ADD_TO_LIST_SUCCESS; },
/* harmony export */   "ADD_TO_LIST_ERROR": function() { return /* binding */ ADD_TO_LIST_ERROR; },
/* harmony export */   "REMOVE_FROM_LIST": function() { return /* binding */ REMOVE_FROM_LIST; },
/* harmony export */   "REMOVE_FROM_LIST_SUCCESS": function() { return /* binding */ REMOVE_FROM_LIST_SUCCESS; },
/* harmony export */   "REMOVE_FROM_LIST_ERROR": function() { return /* binding */ REMOVE_FROM_LIST_ERROR; },
/* harmony export */   "UPDATE_LIST_ORDER": function() { return /* binding */ UPDATE_LIST_ORDER; },
/* harmony export */   "UPDATE_LIST_ORDER_SUCCESS": function() { return /* binding */ UPDATE_LIST_ORDER_SUCCESS; },
/* harmony export */   "UPDATE_LIST_ORDER_ERROR": function() { return /* binding */ UPDATE_LIST_ORDER_ERROR; },
/* harmony export */   "UPDATE_SELECTED_LIST": function() { return /* binding */ UPDATE_SELECTED_LIST; },
/* harmony export */   "UPDATE_SELECTED_LIST_SUCCESS": function() { return /* binding */ UPDATE_SELECTED_LIST_SUCCESS; },
/* harmony export */   "UPDATE_SELECTED_LIST_ERROR": function() { return /* binding */ UPDATE_SELECTED_LIST_ERROR; },
/* harmony export */   "GET_SELECTED_LIST": function() { return /* binding */ GET_SELECTED_LIST; },
/* harmony export */   "GET_SELECTED_LIST_SUCCESS": function() { return /* binding */ GET_SELECTED_LIST_SUCCESS; },
/* harmony export */   "GET_SELECTED_LIST_ERROR": function() { return /* binding */ GET_SELECTED_LIST_ERROR; },
/* harmony export */   "CHANGE_REVIEW_NEWS_LOADED": function() { return /* binding */ CHANGE_REVIEW_NEWS_LOADED; },
/* harmony export */   "LOGOUT_EDITOR_STATE": function() { return /* binding */ LOGOUT_EDITOR_STATE; },
/* harmony export */   "GetReviewNews": function() { return /* binding */ GetReviewNews; },
/* harmony export */   "GetReviewNewsSuccess": function() { return /* binding */ GetReviewNewsSuccess; },
/* harmony export */   "GetReviewNewsError": function() { return /* binding */ GetReviewNewsError; },
/* harmony export */   "ApproveNews": function() { return /* binding */ ApproveNews; },
/* harmony export */   "ApproveNewsSuccess": function() { return /* binding */ ApproveNewsSuccess; },
/* harmony export */   "ApproveNewsError": function() { return /* binding */ ApproveNewsError; },
/* harmony export */   "RejectNews": function() { return /* binding */ RejectNews; },
/* harmony export */   "RejectNewsSuccess": function() { return /* binding */ RejectNewsSuccess; },
/* harmony export */   "RejectNewsError": function() { return /* binding */ RejectNewsError; },
/* harmony export */   "GetLists": function() { return /* binding */ GetLists; },
/* harmony export */   "GetListsSuccess": function() { return /* binding */ GetListsSuccess; },
/* harmony export */   "GetListsError": function() { return /* binding */ GetListsError; },
/* harmony export */   "GetListsByDate": function() { return /* binding */ GetListsByDate; },
/* harmony export */   "GetListsByDateSuccess": function() { return /* binding */ GetListsByDateSuccess; },
/* harmony export */   "GetListsByDateError": function() { return /* binding */ GetListsByDateError; },
/* harmony export */   "AddToList": function() { return /* binding */ AddToList; },
/* harmony export */   "AddToListSuccess": function() { return /* binding */ AddToListSuccess; },
/* harmony export */   "AddToListError": function() { return /* binding */ AddToListError; },
/* harmony export */   "RemoveFromList": function() { return /* binding */ RemoveFromList; },
/* harmony export */   "RemoveFromListSuccess": function() { return /* binding */ RemoveFromListSuccess; },
/* harmony export */   "RemoveFromListError": function() { return /* binding */ RemoveFromListError; },
/* harmony export */   "UpdateListOrder": function() { return /* binding */ UpdateListOrder; },
/* harmony export */   "UpdateListOrderSuccess": function() { return /* binding */ UpdateListOrderSuccess; },
/* harmony export */   "UpdateListOrderError": function() { return /* binding */ UpdateListOrderError; },
/* harmony export */   "GetSelectedList": function() { return /* binding */ GetSelectedList; },
/* harmony export */   "GetSelectedListSuccess": function() { return /* binding */ GetSelectedListSuccess; },
/* harmony export */   "GetSelectedListError": function() { return /* binding */ GetSelectedListError; },
/* harmony export */   "UpdateSelectedList": function() { return /* binding */ UpdateSelectedList; },
/* harmony export */   "UpdateSelectedListSuccess": function() { return /* binding */ UpdateSelectedListSuccess; },
/* harmony export */   "UpdateSelectedListError": function() { return /* binding */ UpdateSelectedListError; },
/* harmony export */   "LogoutEditorState": function() { return /* binding */ LogoutEditorState; },
/* harmony export */   "UpdateReviewNewsLoaded": function() { return /* binding */ UpdateReviewNewsLoaded; }
/* harmony export */ });
const GET_REVIEW_NEWS = '[NewsEditor] GET_REVIEW_NEWS';
const GET_REVIEW_NEWS_SUCCESS = '[NewsEditor] GET_REVIEW_NEWS_SUCCESS';
const GET_REVIEW_NEWS_ERROR = '[NewsEditor] GET_REVIEW_NEWS_ERROR';
const APPROVE_NEWS = '[NewsEditor] APPROVE_NEWS';
const APPROVE_NEWS_SUCCESS = '[NewsEditor] APPROVE_NEWS_SUCCESS';
const APPROVE_NEWS_ERROR = '[NewsEditor] APPROVE_NEWS_ERROR';
const REJECT_NEWS = '[NewsEditor] REJECT_NEWS';
const REJECT_NEWS_SUCCESS = '[NewsEditor] REJECT_NEWS_SUCCESS';
const REJECT_NEWS_ERROR = '[NewsEditor] REJECT_NEWS_ERROR';
/**
 * ------------------------------------------------------------------------------> LIST ACTIONS
 */
const GET_LISTS = '[NewsEditor] GET_LISTS';
const GET_LISTS_SUCCESS = '[NewsEditor] GET_LISTS_SUCCESS';
const GET_LISTS_ERROR = '[NewsEditor] GET_LISTS_ERROR';
const GET_LISTS_BY_DATE = '[NewsEditor] GET_LISTS_BY_DATE';
const GET_LISTS_BY_DATE_SUCCESS = '[NewsEditor] GET_LISTS_BY_DATE_SUCCESS';
const GET_LISTS_BY_DATE_ERROR = '[NewsEditor] GET_LISTS_BY_DATE_ERROR';
const ADD_TO_LIST = '[NewsEditor] ADD_TO_LISTS';
const ADD_TO_LIST_SUCCESS = '[NewsEditor] ADD_TO_LISTS_SUCCESS';
const ADD_TO_LIST_ERROR = '[NewsEditor] ADD_TO_LISTS_ERROR';
const REMOVE_FROM_LIST = '[NewsEditor] REMOVE_FROM_LIST';
const REMOVE_FROM_LIST_SUCCESS = '[NewsEditor] REMOVE_FROM_LIST_SUCCESS';
const REMOVE_FROM_LIST_ERROR = '[NewsEditor] REMOVE_FROM_LIST_ERROR';
const UPDATE_LIST_ORDER = '[NewsEditor] UPDATE_LIST_ORDER';
const UPDATE_LIST_ORDER_SUCCESS = '[NewsEditor] UPDATE_LIST_ORDER_SUCCESS';
const UPDATE_LIST_ORDER_ERROR = '[NewsEditor] UPDATE_LIST_ORDER_ERROR';
const UPDATE_SELECTED_LIST = '[NewsEditor] UPDATE_SELECTED_LIST';
const UPDATE_SELECTED_LIST_SUCCESS = '[NewsEditor] UPDATE_SELECTED_LIST_SUCCESS';
const UPDATE_SELECTED_LIST_ERROR = '[NewsEditor] UPDATE_SELECTED_LIST_ERROR';
const GET_SELECTED_LIST = '[NewsEditor] GET_SELECTED_LIST';
const GET_SELECTED_LIST_SUCCESS = '[NewsEditor] GET_SELECTED_LIST_SUCCESS';
const GET_SELECTED_LIST_ERROR = '[NewsEditor] GET_SELECTED_LIST_ERROR';
const CHANGE_REVIEW_NEWS_LOADED = '[NewsEditor] CHANGE_REVIEW_NEWS_LOADED';
const LOGOUT_EDITOR_STATE = '[NewsEditor] LOGOUT_EDITOR_STATE';
/**
 * ---------------------------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------> REVIEW NEWS ACTIONS
 * ---------------------------------------------------------------------------------------------------
 *
 *
 * ------------------------------------------------------------------------------> GET REVIEW NEWS
 */
class GetReviewNews {
    constructor() {
        this.type = GET_REVIEW_NEWS;
    }
}
class GetReviewNewsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_REVIEW_NEWS_SUCCESS;
    }
}
class GetReviewNewsError {
    constructor() {
        this.type = GET_REVIEW_NEWS_ERROR;
    }
}
/**
 * ------------------------------------------------------------------------------> APPROVE NEWS
 */
class ApproveNews {
    constructor(payload) {
        this.payload = payload;
        this.type = APPROVE_NEWS;
    }
}
class ApproveNewsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = APPROVE_NEWS_SUCCESS;
    }
}
class ApproveNewsError {
    constructor() {
        this.type = APPROVE_NEWS_ERROR;
    }
}
/**
 * ------------------------------------------------------------------------------> REJECT NEWS
 */
class RejectNews {
    constructor(payload) {
        this.payload = payload;
        this.type = REJECT_NEWS;
    }
}
class RejectNewsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = REJECT_NEWS_SUCCESS;
    }
}
class RejectNewsError {
    constructor() {
        this.type = REJECT_NEWS_ERROR;
    }
}
/**
 * -------------------------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------> NEWS LIST ACTIONS
 * -------------------------------------------------------------------------------------------------
 *
 *
 * ------------------------------------------------------------------------------> GET LISTS
 */
class GetLists {
    constructor() {
        this.type = GET_LISTS;
    }
    ;
}
class GetListsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_LISTS_SUCCESS;
    }
}
class GetListsError {
    constructor() {
        this.type = GET_LISTS_ERROR;
    }
}
/**
 * ------------------------------------------------------------------------------> GET LISTS BY DATE
 */
class GetListsByDate {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_LISTS_BY_DATE;
    }
    ;
}
class GetListsByDateSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_LISTS_BY_DATE_SUCCESS;
    }
}
class GetListsByDateError {
    constructor() {
        this.type = GET_LISTS_BY_DATE_ERROR;
    }
}
/**
 * ------------------------------------------------------------------------------> ADD NEWS TO LIST
 */
class AddToList {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_TO_LIST;
    }
    ;
}
class AddToListSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_TO_LIST_SUCCESS;
    }
}
class AddToListError {
    constructor() {
        this.type = ADD_TO_LIST_ERROR;
    }
}
/**
 * ------------------------------------------------------------------------------> REMOVE NEWS FROM LIST
 */
class RemoveFromList {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_FROM_LIST;
    }
    ;
}
class RemoveFromListSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_FROM_LIST_SUCCESS;
    }
}
class RemoveFromListError {
    constructor() {
        this.type = REMOVE_FROM_LIST_ERROR;
    }
}
/**
 * ------------------------------------------------------------------------------> UPDATE LIST ORDER
 */
class UpdateListOrder {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_LIST_ORDER;
    }
    ;
}
class UpdateListOrderSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_LIST_ORDER_SUCCESS;
    }
}
class UpdateListOrderError {
    constructor() {
        this.type = UPDATE_LIST_ORDER_ERROR;
    }
}
/**
 * ------------------------------------------------------------------------------> GET SELECTED LIST
 */
class GetSelectedList {
    constructor() {
        this.type = GET_SELECTED_LIST;
        // constructor(public payload: { list_id: number }) {};
    }
}
class GetSelectedListSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_SELECTED_LIST_SUCCESS;
    }
}
class GetSelectedListError {
    constructor() {
        this.type = GET_SELECTED_LIST_ERROR;
    }
}
/**
 * ------------------------------------------------------------------------------> UPDATE SELECTED LIST
 */
class UpdateSelectedList {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_SELECTED_LIST;
    }
    ;
}
class UpdateSelectedListSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_SELECTED_LIST_SUCCESS;
    }
}
class UpdateSelectedListError {
    constructor() {
        this.type = UPDATE_SELECTED_LIST_ERROR;
    }
}
class LogoutEditorState {
    constructor() {
        this.type = LOGOUT_EDITOR_STATE;
    }
}
class UpdateReviewNewsLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = CHANGE_REVIEW_NEWS_LOADED;
    }
}


/***/ }),

/***/ 29021:
/*!*****************************************************!*\
  !*** ./src/app/editor/store/news-editor.reducer.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "reducer": function() { return /* binding */ reducer; },
/* harmony export */   "getReviewNewsState": function() { return /* binding */ getReviewNewsState; },
/* harmony export */   "getMyNews": function() { return /* binding */ getMyNews; },
/* harmony export */   "getNewsById": function() { return /* binding */ getNewsById; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-editor.actions */ 23239);


const initialState = {
    news: [],
    isLoaded: false,
    // pageState: {currentPage: null, perPage: null, lastPages: null, totalResults: null},
    lists: [],
    isListLoaded: false,
    selectedList: null,
};
function reducer(state = initialState, action) {
    console.log(state, action);
    switch (action.type) {
        /**
         * --------------------------------------------------------------------------------------> REVIEW NEWS
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_REVIEW_NEWS: {
            return Object.assign(Object.assign({}, state), { news: [], isLoaded: false });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_REVIEW_NEWS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { news: action.payload, isLoaded: true });
        }
        /**
         * --------------------------------------------------------------------------------------> APPROVE NEWS
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.APPROVE_NEWS: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.APPROVE_NEWS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { news: [
                    ...(state.news.filter((news) => news.id !== action.payload.id)),
                ], isLoaded: true });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.APPROVE_NEWS_ERROR: {
            return Object.assign(Object.assign({}, state), { isLoaded: true });
        }
        /**
         * --------------------------------------------------------------------------------------> REJECT NEWS
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.REJECT_NEWS: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.REJECT_NEWS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { news: [
                    ...(state.news.filter((news) => news.id !== action.payload.news_id)),
                ], isLoaded: true });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.REJECT_NEWS_ERROR: {
            return Object.assign(Object.assign({}, state), { isLoaded: true });
        }
        /**
         * ---------------------------------------------------------------------------------------------------------
         * --------------------------------------------------------------------------------------> NEWS LIST ACTIONS
         * ---------------------------------------------------------------------------------------------------------
         */
        /**
         * --------------------------------------------------------------------------------------> GET LIST
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_LISTS: {
            return Object.assign(Object.assign({}, state), { isListLoaded: false });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_LISTS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { lists: action.payload, isListLoaded: true });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_LISTS_ERROR: {
            return Object.assign(Object.assign({}, state), { isListLoaded: true });
        }
        /**
         * --------------------------------------------------------------------------------------> GET LIST BY DATE
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_LISTS_BY_DATE: {
            return Object.assign(Object.assign({}, state), { isListLoaded: false });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_LISTS_BY_DATE_SUCCESS: {
            return Object.assign(Object.assign({}, state), { lists: action.payload, isListLoaded: true });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_LISTS_BY_DATE_ERROR: {
            return Object.assign(Object.assign({}, state), { isListLoaded: true });
        }
        /**
         * --------------------------------------------------------------------------------------> ADD TO LIST
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TO_LIST: {
            return Object.assign(Object.assign({}, state), { isListLoaded: true });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TO_LIST_SUCCESS: {
            return Object.assign(Object.assign({}, state), { isListLoaded: false, 
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
                lists: action.payload });
        }
        /**
         * --------------------------------------------------------------------------------------> REMOVE FROM LIST
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_FROM_LIST: {
            return Object.assign(Object.assign({}, state), { isListLoaded: true });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_FROM_LIST_SUCCESS: {
            return Object.assign(Object.assign({}, state), { isListLoaded: false, lists: action.payload });
        }
        /**
         * --------------------------------------------------------------------------------------> UPDATE LIST ORDER
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.UPDATE_LIST_ORDER: {
            return Object.assign(Object.assign({}, state), { isListLoaded: true });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.UPDATE_LIST_ORDER_SUCCESS: {
            return Object.assign(Object.assign({}, state), { isListLoaded: false, lists: action.payload });
        }
        /**
         * --------------------------------------------------------------------------------------> GET SELECTED LIST
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.GET_SELECTED_LIST_SUCCESS: {
            return Object.assign(Object.assign({}, state), { selectedList: action.payload.list_id });
        }
        /**
         * --------------------------------------------------------------------------------------> UPDATE SELECTED LIST
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.UPDATE_SELECTED_LIST_SUCCESS: {
            return Object.assign(Object.assign({}, state), { selectedList: action.payload.list_id });
        }
        /**
         * --------------------------------------------------------------------------------------> OTHER ACTIONS
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_REVIEW_NEWS_LOADED: {
            return Object.assign(Object.assign({}, state), { isLoaded: action.payload.isLoaded });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_0__.LOGOUT_EDITOR_STATE: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
const getReviewNewsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)('ReviewNewsState');
const getMyNews = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getReviewNewsState, (state) => state.news);
const getNewsById = (newsBox, id) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getReviewNewsState, (allItems) => {
    if (allItems) {
        return allItems[newsBox].find(item => {
            return item.id === id;
        });
    }
    else {
        return {};
    }
});


/***/ }),

/***/ 71658:
/*!**************************************************!*\
  !*** ./src/app/layouts/blank/blank.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppBlankComponent": function() { return /* binding */ AppBlankComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ 94935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



class AppBlankComponent {
}
AppBlankComponent.??fac = function AppBlankComponent_Factory(t) { return new (t || AppBlankComponent)(); };
AppBlankComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppBlankComponent, selectors: [["app-blank"]], decls: 2, vars: 0, template: function AppBlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__.MatSidenavContainer, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 76729:
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullComponent": function() { return /* binding */ FullComponent; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ 42647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ 65072);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ 70946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 21183);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ 94935);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 2991);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/spinner.component */ 23812);

























const _c0 = function (a0, a1, a2, a3, a4, a5) { return { "minisidebar": a0, "boxed": a1, "danger": a2, "blue": a3, "green": a4, "dark": a5 }; };
const _c1 = function (a0) { return { "minisidebar": a0 }; };
/** @title Responsive sidenav */
class FullComponent {
    constructor(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.dir = 'ltr';
        this.config = {};
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngAfterViewInit() {
        // This is for the topbar search
        jquery__WEBPACK_IMPORTED_MODULE_0__('.srh-btn, .cl-srh-btn').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__('.app-search').toggle(200);
        });
        // This is for the megamenu
    }
}
FullComponent.??fac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__.MenuItems)); };
FullComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], decls: 50, vars: 23, consts: [[1, "main-container", 3, "dir", "ngClass"], ["color", "primary", 1, "topbar", "telative"], [1, "navbar-header"], ["href", "/", 1, "navbar-brand"], ["src", "assets/images/logo-icon.png", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo-light-icon.png", "alt", "homepage", 1, "light-logo"], ["fxShow", "false", "fxShow.gt-xs", ""], ["src", "assets/images/logo-text.png", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo-light-text.png", "alt", "homepage", 1, "light-logo"], ["mat-icon-button", "", "value", "sidebarclosed", 3, "click"], ["fxFlex", ""], [1, "example-sidenav-container", 3, "ngClass"], ["id", "snav", "fixedTopGap", "0", 1, "pl-xs", 3, "mode", "opened", "disableClose", "perfectScrollbar", "open", "close"], ["snav", ""], [1, "app-sidebar"], ["position", "end", "mode", "over", "opened", "false", 1, "chat-panel"], ["end", ""], [1, "scroll"], ["mat-subheader", "", 1, "text-uppercase", "font-weight-bold"], ["color", "warn", 3, "change"], ["color", "warn", 3, "ngModel", "ngModelChange"], ["color", "warn", 1, "text-danger", 3, "ngModel", "ngModelChange", "change"], ["color", "warn", 1, "text-megna", 3, "ngModel", "ngModelChange", "change"], ["color", "warn", 1, "text-info", 3, "ngModel", "ngModelChange", "change"], ["color", "warn", 3, "ngModel", "ngModelChange", "change"], [1, "page-wrapper"], [1, "page-content"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function FullComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](17); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](12, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](14, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "mat-sidenav-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "mat-sidenav", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("open", function FullComponent_Template_mat_sidenav_open_16_listener() { return ctx.sidebarOpened = true; })("close", function FullComponent_Template_mat_sidenav_close_16_listener() { return ctx.sidebarOpened = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](18, "app-sidebar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "mat-sidenav", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](24, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](26, "mat-slide-toggle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function FullComponent_Template_mat_slide_toggle_change_26_listener() { return ctx.dir = ctx.dir == "rtl" ? "ltr" : "rtl"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](27, "RTL");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "mat-slide-toggle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function FullComponent_Template_mat_slide_toggle_ngModelChange_29_listener($event) { return ctx.boxed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](30, "Boxed Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](31, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](32, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](33, "Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](34, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](35, "mat-checkbox", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_35_listener($event) { return ctx.danger = $event; })("change", function FullComponent_Template_mat_checkbox_change_35_listener() { return ctx.green = ctx.blue = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](36, "Red");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](37, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](38, "mat-checkbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_38_listener($event) { return ctx.green = $event; })("change", function FullComponent_Template_mat_checkbox_change_38_listener() { return ctx.danger = ctx.blue = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](39, "Teal Green");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](40, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](41, "mat-checkbox", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_41_listener($event) { return ctx.blue = $event; })("change", function FullComponent_Template_mat_checkbox_change_41_listener() { return ctx.green = ctx.danger = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](42, "Blue");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](43, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](44, "mat-checkbox", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_44_listener($event) { return ctx.dark = $event; })("change", function FullComponent_Template_mat_checkbox_change_44_listener() { return ctx.green = ctx.blue = ctx.danger = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](45, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](46, "mat-sidenav-content", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](48, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](49, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("dir", ctx.dir)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction6"](14, _c0, ctx.minisidebar, ctx.boxed, ctx.danger, ctx.blue, ctx.green, ctx.dark));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????styleProp"]("margin-top", ctx.mobileQuery.matches ? 0 : 0, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction1"](21, _c1, ctx.minisidebar));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("mode", ctx.mobileQuery.matches ? "side" : "over")("opened", ctx.mobileQuery.matches)("disableClose", ctx.mobileQuery.matches)("perfectScrollbar", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngModel", ctx.boxed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngModel", ctx.danger);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngModel", ctx.green);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngModel", ctx.blue);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngModel", ctx.dark);
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.Dir, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultClassDirective, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultShowHideDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.AppHeaderComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenav, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarDirective, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.AppSidebarComponent, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListSubheaderCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListItem, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDivider, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckbox, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_4__.SpinnerComponent], encapsulation: 2 });


/***/ }),

/***/ 21183:
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/header/header.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHeaderComponent": function() { return /* binding */ AppHeaderComponent; }
/* harmony export */ });
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/auth.service */ 10629);
/* harmony import */ var _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../authentication/store/user.actions */ 61184);
/* harmony import */ var _shared_services_ds_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/ds.service */ 87253);
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/models/user */ 90193);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 76627);
















const _c0 = function () { return ["/authentication/login/"]; };
function AppHeaderComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](1, _c0));
} }
function AppHeaderComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const mymessage_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate2"]("src", "", ctx_r2.storagePath, "profiles/user/", mymessage_r5.userimage, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](mymessage_r5.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](mymessage_r5.text);
} }
function AppHeaderComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matMenuTriggerFor", _r4);
} }
const _c1 = function () { return ["/user/profile"]; };
class AppHeaderComponent {
    constructor(auth, store, ds, store2) {
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
        this.storagePath = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.storageUrl;
        // get user authentication status
        this.loggedInSub = this.auth.loggedIn$.subscribe(loggedIn => this.logged_in = loggedIn);
        this.store2.select(store => store.UserState).subscribe(userdata => {
            this.userData = userdata.user;
            //this.chantInit();
        });
    }
    logOut() {
        // this.auth.doSignOut();
        this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_1__.UserLogout());
    }
}
AppHeaderComponent.??fac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_shared_services_ds_service__WEBPACK_IMPORTED_MODULE_2__.DsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)); };
AppHeaderComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 21, vars: 7, consts: [["mat-icon-button", "", "alt", "log in", "class", "m-r-5", 3, "routerLink", 4, "ngIf"], ["mat-icon-button", "", 1, "m-r-10", 3, "matMenuTriggerFor"], [1, "mymessage"], ["message", "matMenu"], [1, "mailbox"], [1, "message-center"], [3, "config"], ["href", "#", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "class", "m-r-5", 3, "matMenuTriggerFor", 4, "ngIf"], [1, "mymegamenu"], ["profile", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", "alt", "log in", 1, "m-r-5", 3, "routerLink"], [2, "color", "#ffffff"], ["href", "#"], [1, "user-img"], ["alt", "user", "width", "40", 1, "img-circle", 3, "src"], [1, "mail-content"], [1, "mail-desc"], ["mat-icon-button", "", 1, "m-r-5", 3, "matMenuTriggerFor"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](0, AppHeaderComponent_button_0_Template, 3, 2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "mat-menu", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "perfect-scrollbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](9, AppHeaderComponent_a_9_Template, 8, 4, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](10, AppHeaderComponent_button_10_Template, 3, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "mat-menu", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](15, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](16, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AppHeaderComponent_Template_button_click_17_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](19, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](20, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx.chatArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](6, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon], encapsulation: 2 });


/***/ }),

/***/ 2991:
/*!***********************************************************!*\
  !*** ./src/app/layouts/full/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSidebarComponent": function() { return /* binding */ AppSidebarComponent; }
/* harmony export */ });
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/menu-items/menu-items */ 42647);
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/session.service */ 75986);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/auth.service */ 10629);
/* harmony import */ var _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../authentication/store/user.actions */ 61184);
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/models/user */ 90193);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ 65072);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/accordion/accordion.directive */ 65903);
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/accordion/accordionlink.directive */ 67725);
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/accordion/accordionanchor.directive */ 9502);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);

























function AppSidebarComponent_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](0, "img", 13);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????propertyInterpolate"]("src", ctx_r6.storagePath + "profiles/default.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_9__["????sanitizeUrl"]);
} }
function AppSidebarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](1, AppSidebarComponent_div_1_img_1_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r0.userData == null);
} }
function AppSidebarComponent_div_2_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](0, "img", 13);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????propertyInterpolate"]("src", ctx_r7.storagePath + "profiles/user/" + ctx_r7.userData.profile.profilepic, _angular_core__WEBPACK_IMPORTED_MODULE_9__["????sanitizeUrl"]);
} }
function AppSidebarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](1, AppSidebarComponent_div_2_img_1_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r1.userData.profile.profilepic);
} }
function AppSidebarComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????reference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("matMenuTriggerFor", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", ctx_r2.username, " ");
} }
function AppSidebarComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", ctx_r3.username, " ");
} }
function AppSidebarComponent_mat_list_item_17_a_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const badge_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????classMapInterpolate1"]("label label-", badge_r16.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](badge_r16.value);
} }
const _c0 = function (a1) { return ["/", a1]; };
function AppSidebarComponent_mat_list_item_17_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](6, AppSidebarComponent_mat_list_item_17_a_1_span_6_Template, 2, 4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pureFunction1"](4, _c0, menuitem_r8.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](menuitem_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](menuitem_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngForOf", menuitem_r8.badge);
} }
function AppSidebarComponent_mat_list_item_17_a_2_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const badge_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????classMapInterpolate1"]("label label-", badge_r19.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](badge_r19.value);
} }
function AppSidebarComponent_mat_list_item_17_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](6, AppSidebarComponent_mat_list_item_17_a_2_span_6_Template, 2, 4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????propertyInterpolate"]("href", menuitem_r8.state, _angular_core__WEBPACK_IMPORTED_MODULE_9__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](menuitem_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](menuitem_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngForOf", menuitem_r8.badge);
} }
function AppSidebarComponent_mat_list_item_17_a_3_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const badge_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????classMapInterpolate1"]("label label-", badge_r22.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](badge_r22.value);
} }
function AppSidebarComponent_mat_list_item_17_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](6, AppSidebarComponent_mat_list_item_17_a_3_span_6_Template, 2, 4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????propertyInterpolate"]("href", menuitem_r8.state, _angular_core__WEBPACK_IMPORTED_MODULE_9__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](menuitem_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](menuitem_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngForOf", menuitem_r8.badge);
} }
function AppSidebarComponent_mat_list_item_17_a_4_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const badge_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????classMapInterpolate1"]("label label-", badge_r25.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](badge_r25.value);
} }
function AppSidebarComponent_mat_list_item_17_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](6, AppSidebarComponent_mat_list_item_17_a_4_span_6_Template, 2, 4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](7, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](8, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](menuitem_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](menuitem_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngForOf", menuitem_r8.badge);
} }
const _c1 = function (a1, a2) { return ["/", a1, a2]; };
function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const childitem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]().$implicit;
    const menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pureFunction2"](2, _c1, menuitem_r8.state, childitem_r29.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](childitem_r29.name);
} }
function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-list-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](1, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_1_a_1_Template, 2, 5, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const childitem_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", childitem_r29.type === "link");
} }
function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["????restoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](4); return ctx_r36.clickEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](5, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const childitem_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]().$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngClass", ctx_r34.status ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](childitem_r33.name);
} }
const _c2 = function (a1, a2, a3) { return ["/", a1, a2, a3]; };
function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-list-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const child_r40 = ctx.$implicit;
    const childitem_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2).$implicit;
    const menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pureFunction3"](2, _c2, menuitem_r8.state, childitem_r33.state, child_r40.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](child_r40.name);
} }
function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-nav-list", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](1, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_mat_list_item_1_Template, 3, 6, "mat-list-item", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const childitem_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngForOf", childitem_r33.subchildren);
} }
function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](1, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_a_1_Template, 6, 2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](2, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_Template, 2, 1, "mat-nav-list", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const childitem_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", childitem_r33.type === "subchild");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", childitem_r33.type === "subchild");
} }
function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-nav-list", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](1, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_1_Template, 2, 1, "mat-list-item", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](2, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_Template, 3, 2, "mat-list-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngForOf", menuitem_r8.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngForOf", menuitem_r8.children);
} }
function AppSidebarComponent_mat_list_item_17_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](menuitem_r8.name);
} }
function AppSidebarComponent_mat_list_item_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "mat-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](1, AppSidebarComponent_mat_list_item_17_a_1_Template, 7, 6, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](2, AppSidebarComponent_mat_list_item_17_a_2_Template, 7, 4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](3, AppSidebarComponent_mat_list_item_17_a_3_Template, 7, 4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](4, AppSidebarComponent_mat_list_item_17_a_4_Template, 9, 3, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](5, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_Template, 3, 2, "mat-nav-list", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](6, AppSidebarComponent_mat_list_item_17_div_6_Template, 3, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const menuitem_r8 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????propertyInterpolate"]("group", menuitem_r8.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", menuitem_r8.type === "link" && ctx_r5.checkRole(menuitem_r8.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", menuitem_r8.type === "extLink" && ctx_r5.checkRole(menuitem_r8.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", menuitem_r8.type === "extTabLink" && ctx_r5.checkRole(menuitem_r8.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", menuitem_r8.type === "sub" && ctx_r5.checkRole(menuitem_r8.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", menuitem_r8.type === "sub" && ctx_r5.checkRole(menuitem_r8.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", menuitem_r8.type === "saperator");
} }
const _c3 = function () { return ["/user/profile"]; };
class AppSidebarComponent {
    constructor(changeDetectorRef, media, menuItems, session, auth, store, store2) {
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
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        // get user authentication status
        this.loggedInSub = this.auth.loggedIn$.subscribe(loggedIn => this.logged_in = loggedIn);
        this.username = session.getSession('name');
    }
    ngOnInit() {
        this.storagePath = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.storageUrl;
        this.store2.select(store => store.UserState).subscribe(userdata => {
            this.userData = userdata.user;
        });
    }
    clickEvent() {
        this.status = !this.status;
    }
    subclickEvent() {
        this.status = true;
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    checkRole(role) {
        return this.session.checkRole(role);
    }
    logOut() {
        this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_3__.UserLogout());
    }
}
AppSidebarComponent.??fac = function AppSidebarComponent_Factory(t) { return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__.MenuItems), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store)); };
AppSidebarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineComponent"]({ type: AppSidebarComponent, selectors: [["app-sidebar"]], decls: 18, vars: 7, consts: [[1, "user-profile", 2, "background", "url(assets/images/background/user-info.jpg) no-repeat"], ["class", "profile-img", 4, "ngIf"], [1, "profile-text"], ["class", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["class", "", 4, "ngIf"], [1, "mymegamenu"], ["sdprofile", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["appAccordion", ""], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group", 4, "ngFor", "ngForOf"], [1, "profile-img"], ["alt", "user", 3, "src", 4, "ngIf"], ["alt", "user", 3, "src"], [1, "", 3, "matMenuTriggerFor"], [1, "ti-angle-down", "font-12", "m-l-5"], [1, ""], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group"], ["class", "", "appAccordionToggle", "", 3, "routerLink", 4, "ngIf"], ["class", "", "appAccordionToggle", "", 3, "href", 4, "ngIf"], ["class", "", "appAccordionToggle", "", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "", "appAccordionToggle", "", "href", "javascript:;", 4, "ngIf"], ["class", "sub-item", 4, "ngIf"], ["class", "saperator text-muted", 4, "ngIf"], ["appAccordionToggle", "", 1, "", 3, "routerLink"], ["fxFlex", ""], [3, "class", 4, "ngFor", "ngForOf"], ["appAccordionToggle", "", 1, "", 3, "href"], ["appAccordionToggle", "", "target", "_blank", 1, "", 3, "href"], ["appAccordionToggle", "", "href", "javascript:;", 1, ""], [1, "dd-icon"], [1, "sub-item"], ["routerLinkActive", "selected", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "selected"], ["class", "relative", "routerLinkActive", "selected", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "selected", 1, "relative", 3, "routerLink"], ["class", "", "href", "javascript: void(0);", 3, "ngClass", "click", 4, "ngIf"], ["class", "child-sub-item", 4, "ngIf"], ["href", "javascript: void(0);", 1, "", 3, "ngClass", "click"], [1, "child-sub-item"], ["routerLinkActive", "selected", 3, "routerLink"], [1, "saperator", "text-muted"]], template: function AppSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](1, AppSidebarComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](2, AppSidebarComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](4, AppSidebarComponent_a_4_Template, 3, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](5, AppSidebarComponent_a_5_Template, 2, 1, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](6, "mat-menu", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](10, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](11, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function AppSidebarComponent_Template_button_click_12_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](14, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](15, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](16, "mat-nav-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](17, AppSidebarComponent_mat_list_item_17_Template, 7, 7, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.userData.id == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.userData.id != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", !ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pureFunction0"](6, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngForOf", ctx.menuItems.getMenuitem());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatNavList, _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_6__.AccordionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListItem, _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_7__.AccordionLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_8__.AccordionAnchorDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__.DefaultClassDirective], encapsulation: 2 });


/***/ }),

/***/ 26318:
/*!*************************************!*\
  !*** ./src/app/news/models/news.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "News": function() { return /* binding */ News; },
/* harmony export */   "NewsBar": function() { return /* binding */ NewsBar; },
/* harmony export */   "TickerNews": function() { return /* binding */ TickerNews; },
/* harmony export */   "Language": function() { return /* binding */ Language; },
/* harmony export */   "Newsstatus": function() { return /* binding */ Newsstatus; },
/* harmony export */   "NewNotes": function() { return /* binding */ NewNotes; },
/* harmony export */   "NewsList": function() { return /* binding */ NewsList; },
/* harmony export */   "ListNews": function() { return /* binding */ ListNews; },
/* harmony export */   "ListOrder": function() { return /* binding */ ListOrder; },
/* harmony export */   "Ticker": function() { return /* binding */ Ticker; },
/* harmony export */   "TickersNews": function() { return /* binding */ TickersNews; },
/* harmony export */   "JournalistDashboard": function() { return /* binding */ JournalistDashboard; },
/* harmony export */   "JournalistDashboardNewsNumbers": function() { return /* binding */ JournalistDashboardNewsNumbers; }
/* harmony export */ });
class News {
    constructor() {
        this.news_name = '';
        this.heading = '';
        this.body = '';
        this.newsstatus_id = 0;
        this.user_id = 0;
        this.language = new Language('', '');
        this.newsbar = [new NewsBar('', '')];
        this.draft = false;
    }
    static generateMockNews() {
        return new News();
    }
}
class NewsBar {
    constructor(title, detail, id, news_id, created_at, updated_a) {
        this.title = title;
        this.detail = detail;
        this.id = id;
        this.news_id = news_id;
        this.created_at = created_at;
        this.updated_a = updated_a;
    }
}
class TickerNews {
    constructor(news) {
        this.news = news;
    }
}
class Language {
    constructor(language_code, language, id) {
        this.language_code = language_code;
        this.language = language;
        this.id = id;
    }
}
class Newsstatus {
    constructor(id, status, detail) {
        this.id = id;
        this.status = status;
        this.detail = detail;
    }
}
class NewNotes {
    constructor(id, news_id, note) {
        this.id = id;
        this.news_id = news_id;
        this.note = note;
    }
}
class NewsList {
    constructor() {
        this.id = null;
        this.name = '';
        this.created_at = '';
        this.updated_at = '';
        this.list_news = [new ListNews()];
    }
}
class ListNews {
    constructor() {
        this.id = null;
        this.news_list_id = null;
        this.news_id = null;
        this.created_at = null;
        this.updated_at = null;
        this.news = new News();
    }
}
class ListOrder {
    constructor(list_id, news_id, order) {
        this.list_id = list_id;
        this.news_id = news_id;
        this.order = order;
    }
}
class Ticker {
    constructor() {
        this.name = '';
    }
}
class TickersNews {
    constructor() {
        this.news = '';
        this.language = new Language('', '');
    }
}
class JournalistDashboard {
    constructor() {
        this.news_numbers = new JournalistDashboardNewsNumbers();
        this.lists = [];
    }
}
class JournalistDashboardNewsNumbers {
    constructor() {
        this.my = 0;
        this.reject = 0;
        this.approved = 0;
        this.in_review = 0;
    }
}


/***/ }),

/***/ 15490:
/*!********************************************!*\
  !*** ./src/app/news/store/news.actions.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_A_NEWS": function() { return /* binding */ GET_A_NEWS; },
/* harmony export */   "GET_A_NEWS_SUCCESS": function() { return /* binding */ GET_A_NEWS_SUCCESS; },
/* harmony export */   "GET_A_NEWS_ERROR": function() { return /* binding */ GET_A_NEWS_ERROR; },
/* harmony export */   "GET_MY_NEWS": function() { return /* binding */ GET_MY_NEWS; },
/* harmony export */   "GET_MY_NEWS_SUCCESS": function() { return /* binding */ GET_MY_NEWS_SUCCESS; },
/* harmony export */   "GET_MY_NEWS_ERROR": function() { return /* binding */ GET_MY_NEWS_ERROR; },
/* harmony export */   "GET_TRASH_NEWS": function() { return /* binding */ GET_TRASH_NEWS; },
/* harmony export */   "GET_TRASH_NEWS_SUCCESS": function() { return /* binding */ GET_TRASH_NEWS_SUCCESS; },
/* harmony export */   "GET_TRASH_NEWS_ERROR": function() { return /* binding */ GET_TRASH_NEWS_ERROR; },
/* harmony export */   "DELETE_NEWS": function() { return /* binding */ DELETE_NEWS; },
/* harmony export */   "DELETE_NEWS_SUCCESS": function() { return /* binding */ DELETE_NEWS_SUCCESS; },
/* harmony export */   "DELETE_NEWS_ERROR": function() { return /* binding */ DELETE_NEWS_ERROR; },
/* harmony export */   "RESTORE_NEWS": function() { return /* binding */ RESTORE_NEWS; },
/* harmony export */   "RESTORE_NEWS_SUCCESS": function() { return /* binding */ RESTORE_NEWS_SUCCESS; },
/* harmony export */   "RESTORE_NEWS_ERROR": function() { return /* binding */ RESTORE_NEWS_ERROR; },
/* harmony export */   "CHANGE_NEWS_LOADED": function() { return /* binding */ CHANGE_NEWS_LOADED; },
/* harmony export */   "CHANGE_MY_NEWS_LOADED": function() { return /* binding */ CHANGE_MY_NEWS_LOADED; },
/* harmony export */   "CHANGE_TRASH_NEWS_LOADED": function() { return /* binding */ CHANGE_TRASH_NEWS_LOADED; },
/* harmony export */   "DESTROY_NEWS": function() { return /* binding */ DESTROY_NEWS; },
/* harmony export */   "DESTROY_NEWS_SUCCESS": function() { return /* binding */ DESTROY_NEWS_SUCCESS; },
/* harmony export */   "DESTROY_NEWS_ERROR": function() { return /* binding */ DESTROY_NEWS_ERROR; },
/* harmony export */   "GET_TICKERS": function() { return /* binding */ GET_TICKERS; },
/* harmony export */   "GET_TICKERS_SUCCESS": function() { return /* binding */ GET_TICKERS_SUCCESS; },
/* harmony export */   "GET_TICKERS_ERROR": function() { return /* binding */ GET_TICKERS_ERROR; },
/* harmony export */   "ADD_TICKER_NEWS": function() { return /* binding */ ADD_TICKER_NEWS; },
/* harmony export */   "ADD_TICKER_NEWS_SUCCESS": function() { return /* binding */ ADD_TICKER_NEWS_SUCCESS; },
/* harmony export */   "ADD_TICKER_NEWS_ERROR": function() { return /* binding */ ADD_TICKER_NEWS_ERROR; },
/* harmony export */   "APPROVE_TICKER_NEWS": function() { return /* binding */ APPROVE_TICKER_NEWS; },
/* harmony export */   "APPROVE_TICKER_NEWS_SUCCESS": function() { return /* binding */ APPROVE_TICKER_NEWS_SUCCESS; },
/* harmony export */   "APPROVE_TICKER_NEWS_ERROR": function() { return /* binding */ APPROVE_TICKER_NEWS_ERROR; },
/* harmony export */   "DISAPPROVE_TICKER_NEWS": function() { return /* binding */ DISAPPROVE_TICKER_NEWS; },
/* harmony export */   "DISAPPROVE_TICKER_NEWS_SUCCESS": function() { return /* binding */ DISAPPROVE_TICKER_NEWS_SUCCESS; },
/* harmony export */   "DISAPPROVE_TICKER_NEWS_ERROR": function() { return /* binding */ DISAPPROVE_TICKER_NEWS_ERROR; },
/* harmony export */   "DELETE_TICKER_NEWS": function() { return /* binding */ DELETE_TICKER_NEWS; },
/* harmony export */   "DELETE_TICKER_NEWS_SUCCESS": function() { return /* binding */ DELETE_TICKER_NEWS_SUCCESS; },
/* harmony export */   "DELETE_TICKER_NEWS_ERROR": function() { return /* binding */ DELETE_TICKER_NEWS_ERROR; },
/* harmony export */   "ADD_TICKER": function() { return /* binding */ ADD_TICKER; },
/* harmony export */   "ADD_TICKER_SUCCESS": function() { return /* binding */ ADD_TICKER_SUCCESS; },
/* harmony export */   "ADD_TICKER_ERROR": function() { return /* binding */ ADD_TICKER_ERROR; },
/* harmony export */   "LOGOUT_NEWS_STATE": function() { return /* binding */ LOGOUT_NEWS_STATE; },
/* harmony export */   "GetMyNews": function() { return /* binding */ GetMyNews; },
/* harmony export */   "GetMyNewsSuccess": function() { return /* binding */ GetMyNewsSuccess; },
/* harmony export */   "GetMyNewsError": function() { return /* binding */ GetMyNewsError; },
/* harmony export */   "GetTrashNews": function() { return /* binding */ GetTrashNews; },
/* harmony export */   "GetTrashNewsSuccess": function() { return /* binding */ GetTrashNewsSuccess; },
/* harmony export */   "GetTrashNewsError": function() { return /* binding */ GetTrashNewsError; },
/* harmony export */   "GetNews": function() { return /* binding */ GetNews; },
/* harmony export */   "GetNewsSuccess": function() { return /* binding */ GetNewsSuccess; },
/* harmony export */   "GetNewsError": function() { return /* binding */ GetNewsError; },
/* harmony export */   "DeleteNews": function() { return /* binding */ DeleteNews; },
/* harmony export */   "DeleteNewsSuccess": function() { return /* binding */ DeleteNewsSuccess; },
/* harmony export */   "DeleteNewsError": function() { return /* binding */ DeleteNewsError; },
/* harmony export */   "RestoreNews": function() { return /* binding */ RestoreNews; },
/* harmony export */   "RestoreNewsSuccess": function() { return /* binding */ RestoreNewsSuccess; },
/* harmony export */   "RestoreNewsError": function() { return /* binding */ RestoreNewsError; },
/* harmony export */   "UpdateNewsLoaded": function() { return /* binding */ UpdateNewsLoaded; },
/* harmony export */   "UpdateMyNewsLoaded": function() { return /* binding */ UpdateMyNewsLoaded; },
/* harmony export */   "UpdateTrashNewsLoaded": function() { return /* binding */ UpdateTrashNewsLoaded; },
/* harmony export */   "DestroyNews": function() { return /* binding */ DestroyNews; },
/* harmony export */   "DestroyNewsSuccess": function() { return /* binding */ DestroyNewsSuccess; },
/* harmony export */   "DestroyNewsError": function() { return /* binding */ DestroyNewsError; },
/* harmony export */   "GetTickers": function() { return /* binding */ GetTickers; },
/* harmony export */   "GetTickersSuccess": function() { return /* binding */ GetTickersSuccess; },
/* harmony export */   "GetTickersError": function() { return /* binding */ GetTickersError; },
/* harmony export */   "AddTickerNews": function() { return /* binding */ AddTickerNews; },
/* harmony export */   "AddTickerNewsSuccess": function() { return /* binding */ AddTickerNewsSuccess; },
/* harmony export */   "AddTickerNewsError": function() { return /* binding */ AddTickerNewsError; },
/* harmony export */   "ApproveTickerNews": function() { return /* binding */ ApproveTickerNews; },
/* harmony export */   "ApproveTickerNewsSuccess": function() { return /* binding */ ApproveTickerNewsSuccess; },
/* harmony export */   "ApproveTickerNewsError": function() { return /* binding */ ApproveTickerNewsError; },
/* harmony export */   "DisApproveTickerNews": function() { return /* binding */ DisApproveTickerNews; },
/* harmony export */   "DisApproveTickerNewsSuccess": function() { return /* binding */ DisApproveTickerNewsSuccess; },
/* harmony export */   "DisApproveTickerNewsError": function() { return /* binding */ DisApproveTickerNewsError; },
/* harmony export */   "DeleteTickerNews": function() { return /* binding */ DeleteTickerNews; },
/* harmony export */   "DeleteTickerNewsSuccess": function() { return /* binding */ DeleteTickerNewsSuccess; },
/* harmony export */   "DeleteTickerNewsError": function() { return /* binding */ DeleteTickerNewsError; },
/* harmony export */   "AddTicker": function() { return /* binding */ AddTicker; },
/* harmony export */   "AddTickerSuccess": function() { return /* binding */ AddTickerSuccess; },
/* harmony export */   "AddTickerError": function() { return /* binding */ AddTickerError; },
/* harmony export */   "LogoutNewsState": function() { return /* binding */ LogoutNewsState; }
/* harmony export */ });
const GET_A_NEWS = '[News] GET_A_NEWS';
const GET_A_NEWS_SUCCESS = '[News] GET_A_NEWS_SUCCESS';
const GET_A_NEWS_ERROR = '[News] GET_A_NEWS_ERROR';
const GET_MY_NEWS = '[News] GET_MY_NEWS';
const GET_MY_NEWS_SUCCESS = '[News] GET_MY_NEWS_SUCCESS';
const GET_MY_NEWS_ERROR = '[News] GET_MY_NEWS_ERROR';
const GET_TRASH_NEWS = '[News] GET_TRASH_NEWS';
const GET_TRASH_NEWS_SUCCESS = '[News] GET_TRASH_NEWS_SUCCESS';
const GET_TRASH_NEWS_ERROR = '[News] GET_TRASH_NEWS_ERROR';
const DELETE_NEWS = '[News] DELETE_NEWS';
const DELETE_NEWS_SUCCESS = '[News] DELETE_NEWS_SUCCESS';
const DELETE_NEWS_ERROR = '[News] DELETE_NEWS_ERROR';
const RESTORE_NEWS = '[News] RESTORE_NEWS';
const RESTORE_NEWS_SUCCESS = '[News] RESTORE_NEWS_SUCCESS';
const RESTORE_NEWS_ERROR = '[News] RESTORE_NEWS_ERROR';
const CHANGE_NEWS_LOADED = '[News] CHANGE_NEWS_LOADED';
const CHANGE_MY_NEWS_LOADED = '[News] CHANGE_MY_NEWS_LOADED';
const CHANGE_TRASH_NEWS_LOADED = '[News] CHANGE_TRASH_NEWS_LOADED';
const DESTROY_NEWS = '[News] DESTROY_NEWS';
const DESTROY_NEWS_SUCCESS = '[News] DESTROY_NEWS_SUCCESS';
const DESTROY_NEWS_ERROR = '[News] DESTROY_NEWS_ERROR';
const GET_TICKERS = '[News] GET_TICKERS';
const GET_TICKERS_SUCCESS = '[News] GET_TICKERS_SUCCESS';
const GET_TICKERS_ERROR = '[News] GET_TICKERS_ERROR';
const ADD_TICKER_NEWS = '[News] ADD_TICKER_NEWS';
const ADD_TICKER_NEWS_SUCCESS = '[News] ADD_TICKER_NEWS_SUCCESS';
const ADD_TICKER_NEWS_ERROR = '[News] ADD_TICKER_NEWS_ERROR';
const APPROVE_TICKER_NEWS = '[News] APPROVE_TICKER_NEWS';
const APPROVE_TICKER_NEWS_SUCCESS = '[News] APPROVE_TICKER_NEWS_SUCCESS';
const APPROVE_TICKER_NEWS_ERROR = '[News] APPROVE_TICKER_NEWS_ERROR';
const DISAPPROVE_TICKER_NEWS = '[News] DISAPPROVE_TICKER_NEWS';
const DISAPPROVE_TICKER_NEWS_SUCCESS = '[News] DISAPPROVE_TICKER_NEWS_SUCCESS';
const DISAPPROVE_TICKER_NEWS_ERROR = '[News] DISAPPROVE_TICKER_NEWS_ERROR';
const DELETE_TICKER_NEWS = '[News] DELETE_TICKER_NEWS';
const DELETE_TICKER_NEWS_SUCCESS = '[News] DELETE_TICKER_NEWS_SUCCESS';
const DELETE_TICKER_NEWS_ERROR = '[News] DELETE_TICKER_NEWS_ERROR';
const ADD_TICKER = '[News] ADD_TICKER';
const ADD_TICKER_SUCCESS = '[News] ADD_TICKER_SUCCESS';
const ADD_TICKER_ERROR = '[News] ADD_TICKER_ERROR';
const LOGOUT_NEWS_STATE = '[News] LOGOUT_NEWS_STATE'; // clears news state when user logout is called
/** -------------------------------------------------->MY NEWS LOADING ACTIONS */
class GetMyNews {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_MY_NEWS;
    }
}
class GetMyNewsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_MY_NEWS_SUCCESS;
    }
}
class GetMyNewsError {
    constructor() {
        this.type = GET_MY_NEWS_ERROR;
    }
}
/** -------------------------------------------------->TRASH NEWS LOADING ACTIONS */
class GetTrashNews {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_TRASH_NEWS;
    }
}
class GetTrashNewsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_TRASH_NEWS_SUCCESS;
    }
}
class GetTrashNewsError {
    constructor() {
        this.type = GET_TRASH_NEWS_ERROR;
    }
}
/**
 * -------------------------------------------------->GET ONE NEWS FROM STORE
 * --------------------------------------------------//TODO - remove later
 * */
class GetNews {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_A_NEWS;
    }
}
class GetNewsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_A_NEWS_SUCCESS;
    }
}
class GetNewsError {
    constructor() {
        this.type = GET_A_NEWS_ERROR;
    }
}
/**
 * -------------------------------------------------->NEWS DELETING (TRASHING) ACTIONS,
 * -------------------------------------------------->sets news status to deleted
*/
class DeleteNews {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_NEWS;
    }
}
class DeleteNewsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_NEWS_SUCCESS;
    }
}
class DeleteNewsError {
    constructor() {
        this.type = DELETE_NEWS_ERROR;
    }
}
/** -------------------------------------------------->NEWS RESTORING ACTIONS */
class RestoreNews {
    constructor(payload) {
        this.payload = payload;
        this.type = RESTORE_NEWS;
    }
}
class RestoreNewsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = RESTORE_NEWS_SUCCESS;
    }
}
class RestoreNewsError {
    constructor() {
        this.type = RESTORE_NEWS_ERROR;
    }
}
/**
 * -------------------------------------------------->ACTIONS TO SET LOADING FLAGS
 * -------------------------------------------------->inorder for the controllers to load new news from api
 */
class UpdateNewsLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = CHANGE_NEWS_LOADED;
    }
}
class UpdateMyNewsLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = CHANGE_MY_NEWS_LOADED;
    }
}
class UpdateTrashNewsLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = CHANGE_TRASH_NEWS_LOADED;
    }
}
/**
 * -------------------------------------------------->ACTIONS FOR REMOVING NEWS FROM DATABASE
 * -------------------------------------------------->compleatly destroy them
 */
class DestroyNews {
    constructor(payload) {
        this.payload = payload;
        this.type = DESTROY_NEWS;
    }
}
class DestroyNewsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = DESTROY_NEWS_SUCCESS;
    }
}
class DestroyNewsError {
    constructor() {
        this.type = DESTROY_NEWS_ERROR;
    }
}
/**
 * -------------------------------------------------->TICKER ACTIONS
 * -------------------------------------------------->users cannot remove, disable or enable ticker or ticker news
 * -------------------------------------------------->users can add ticker news, but the added news is marked unpublished (an editor have to publish the news)
 */
/**
 * -------------------------------------------------->GET TICKERS
 */
class GetTickers {
    constructor() {
        this.type = GET_TICKERS;
    }
}
class GetTickersSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_TICKERS_SUCCESS;
    }
}
class GetTickersError {
    constructor() {
        this.type = GET_TICKERS_ERROR;
    }
}
/**
 * -------------------------------------------------->ADD TICKER NEWS
 */
class AddTickerNews {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_TICKER_NEWS;
    }
}
class AddTickerNewsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_TICKER_NEWS_SUCCESS;
    }
}
class AddTickerNewsError {
    constructor() {
        this.type = ADD_TICKER_NEWS_ERROR;
    }
}
/**
 * -------------------------------------------------->APPROVE TICKER NEWS
 */
class ApproveTickerNews {
    constructor(payload) {
        this.payload = payload;
        this.type = APPROVE_TICKER_NEWS;
    }
}
class ApproveTickerNewsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = APPROVE_TICKER_NEWS_SUCCESS;
    }
}
class ApproveTickerNewsError {
    constructor() {
        this.type = APPROVE_TICKER_NEWS_ERROR;
    }
}
/**
 * -------------------------------------------------->DISAPPROVE TICKER NEWS
 */
class DisApproveTickerNews {
    constructor(payload) {
        this.payload = payload;
        this.type = DISAPPROVE_TICKER_NEWS;
    }
}
class DisApproveTickerNewsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = DISAPPROVE_TICKER_NEWS_SUCCESS;
    }
}
class DisApproveTickerNewsError {
    constructor() {
        this.type = DISAPPROVE_TICKER_NEWS_ERROR;
    }
}
/**
 * -------------------------------------------------->DELETE TICKER NEWS
 */
class DeleteTickerNews {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_TICKER_NEWS;
    }
}
class DeleteTickerNewsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_TICKER_NEWS_SUCCESS;
    }
}
class DeleteTickerNewsError {
    constructor() {
        this.type = DELETE_TICKER_NEWS_ERROR;
    }
}
/**
 * -------------------------------------------------->ADD A TICKER
 */
class AddTicker {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_TICKER;
    }
}
class AddTickerSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_TICKER_SUCCESS;
    }
}
class AddTickerError {
    constructor() {
        this.type = ADD_TICKER_ERROR;
    }
}
/** action called when user logs out of the system to clear the "NewsState" */
class LogoutNewsState {
    constructor() {
        this.type = LOGOUT_NEWS_STATE;
    }
}


/***/ }),

/***/ 3504:
/*!********************************************!*\
  !*** ./src/app/news/store/news.reducer.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "reducer": function() { return /* binding */ reducer; },
/* harmony export */   "getNewsState": function() { return /* binding */ getNewsState; },
/* harmony export */   "getMyNews": function() { return /* binding */ getMyNews; },
/* harmony export */   "getNewsById": function() { return /* binding */ getNewsById; },
/* harmony export */   "getMyNewsByStatus": function() { return /* binding */ getMyNewsByStatus; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _news_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.actions */ 15490);


const initialState = {
    myNews: [],
    myNewsPageState: { currentPage: null, perPage: null, lastPages: null, totalResults: null },
    trashNews: [],
    trashNewsPageState: { currentPage: null, perPage: null, lastPages: null, totalResults: null },
    isLoaded: false,
    isMyNewsLoaded: false,
    isTrashLoaded: false,
    tickers: null,
};
function reducer(state = initialState, action) {
    console.log(state, action);
    console.log('News REDUCER Call!');
    switch (action.type) {
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.GET_MY_NEWS: {
            return Object.assign(Object.assign({}, state), { myNewsPageState: {
                    currentPage: action.payload.currentPage,
                    perPage: action.payload.perPage,
                }, isMyNewsLoaded: false, isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.GET_MY_NEWS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { myNews: action.payload.data, myNewsPageState: {
                    currentPage: action.payload.current_page,
                    perPage: Number(action.payload.per_page),
                    lastPages: action.payload.last_page,
                    totalResults: action.payload.total,
                }, isMyNewsLoaded: true, isLoaded: true });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.GET_TRASH_NEWS: {
            return Object.assign(Object.assign({}, state), { trashNewsPageState: {
                    currentPage: action.payload.currentPage,
                    perPage: action.payload.perPage,
                }, isTrashLoaded: false, isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.GET_TRASH_NEWS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { trashNews: action.payload.data, trashNewsPageState: {
                    currentPage: action.payload.current_page,
                    perPage: Number(action.payload.per_page),
                    lastPages: action.payload.last_page,
                    totalResults: action.payload.total,
                }, isTrashLoaded: true, isLoaded: true });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DELETE_NEWS: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DELETE_NEWS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { myNews: state.myNews.filter((news) => news.id !== action.payload.id), trashNews: [
                    ...state.trashNews,
                    ...Object.assign(state.myNews.filter((news) => news.id === action.payload.id), { newsstatus: { status: 'deleted' } })
                ], isLoaded: true, isMyNewsLoaded: false, isTrashLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.RESTORE_NEWS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { myNews: [
                    ...state.myNews,
                    ...(state.trashNews.filter((news) => news.id === action.payload.id))
                ], trashNews: state.trashNews.filter((news) => news.id !== action.payload.id), isLoaded: false, isMyNewsLoaded: false, isTrashLoaded: false });
        }
        /**
         * ----------------------------------------------------------------------------------
         * ---------------------------------------------------------------------> Ticker News
         * ----------------------------------------------------------------------------------
         */
        /**
         * ---------------------------------------------------------------------> GET TICKERS
         */
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.GET_TICKERS: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.GET_TICKERS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { isLoaded: true, tickers: action.payload });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.GET_TICKERS_ERROR: {
            return Object.assign(Object.assign({}, state), { isLoaded: true });
        }
        /**
         * ---------------------------------------------------------------------> ADD TICKER NEWS
         */
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TICKER_NEWS: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TICKER_NEWS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { isLoaded: true, tickers: action.payload });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TICKER_NEWS_ERROR: {
            return Object.assign(Object.assign({}, state), { isLoaded: true });
        }
        /**
         * ---------------------------------------------------------------------> APPROVE TICKER NEWS
         */
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.APPROVE_TICKER_NEWS: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.APPROVE_TICKER_NEWS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { isLoaded: true, tickers: action.payload });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.APPROVE_TICKER_NEWS_ERROR: {
            return Object.assign(Object.assign({}, state), { isLoaded: true });
        }
        /**
         * ---------------------------------------------------------------------> DISAPPROVE TICKER NEWS
         */
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DISAPPROVE_TICKER_NEWS: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DISAPPROVE_TICKER_NEWS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { isLoaded: true, tickers: action.payload });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DISAPPROVE_TICKER_NEWS_ERROR: {
            return Object.assign(Object.assign({}, state), { isLoaded: true });
        }
        /**
         * ---------------------------------------------------------------------> DELETE TICKER NEWS
         */
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DELETE_TICKER_NEWS: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DELETE_TICKER_NEWS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { isLoaded: true, tickers: action.payload });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DELETE_TICKER_NEWS_ERROR: {
            return Object.assign(Object.assign({}, state), { isLoaded: true });
        }
        /**
         * ---------------------------------------------------------------------> ADD TICKER
         */
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TICKER: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TICKER_SUCCESS: {
            return Object.assign(Object.assign({}, state), { isLoaded: true, tickers: action.payload });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TICKER_ERROR: {
            return Object.assign(Object.assign({}, state), { isLoaded: true });
        }
        // when set to false myNews will be fetched from api
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_NEWS_LOADED: {
            return Object.assign(Object.assign({}, state), { isLoaded: action.payload.isLoaded });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_MY_NEWS_LOADED: {
            return Object.assign(Object.assign({}, state), { isMyNewsLoaded: action.payload.isMyNewsLoaded });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_TRASH_NEWS_LOADED: {
            return Object.assign(Object.assign({}, state), { isTrashLoaded: action.payload.isTrashNewsLoaded });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DESTROY_NEWS: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.DESTROY_NEWS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { trashNews: state.trashNews.filter((news) => news.id !== action.payload.id), isLoaded: true });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_0__.LOGOUT_NEWS_STATE: {
            // return {
            //   myNews: [],
            //   myNewsPageState: {currentPage: null, perPage: null, lastPages: null, totalResults: null},
            //   trashNews: [],
            //   trashNewsPageState: {currentPage: null, perPage: null, lastPages: null, totalResults: null},
            //   isLoaded: false,
            //   isMyNewsLoaded: false,
            //   isTrashLoaded: false
            // };
            return initialState;
        }
        default: {
            return state;
        }
    }
}
const getNewsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)('NewsState');
const getMyNews = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getNewsState, (state) => state.myNews);
const getNewsById = (newsBox, id) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getNewsState, (allItems) => {
    if (allItems) {
        return allItems[newsBox].find(item => {
            return item.id === id;
        });
    }
    else {
        return {};
    }
});
const getMyNewsByStatus = (status) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getNewsState, state => state.myNews.filter(x => x.newsstatus.status === status));


/***/ }),

/***/ 65903:
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionDirective": function() { return /* binding */ AccordionDirective; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class AccordionDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        setTimeout(() => this.checkOpenLinks());
    }
    closeOtherLinks(selectedLink) {
        this.navlinks.forEach((link) => {
            if (link !== selectedLink) {
                link.selected = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    checkOpenLinks() {
        this.navlinks.forEach((link) => {
            if (link.group) {
                const routeUrl = this.router.url;
                const currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.selected = true;
                    this.closeOtherLinks(link);
                }
            }
        });
    }
    ngAfterContentChecked() {
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)).subscribe(e => this.checkOpenLinks());
    }
}
AccordionDirective.??fac = function AccordionDirective_Factory(t) { return new (t || AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AccordionDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineDirective"]({ type: AccordionDirective, selectors: [["", "appAccordion", ""]] });


/***/ }),

/***/ 9502:
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionAnchorDirective": function() { return /* binding */ AccordionAnchorDirective; }
/* harmony export */ });
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionlink.directive */ 67725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
AccordionAnchorDirective.??fac = function AccordionAnchorDirective_Factory(t) { return new (t || AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionLinkDirective)); };
AccordionAnchorDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({ type: AccordionAnchorDirective, selectors: [["", "appAccordionToggle", ""]], hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });


/***/ }),

/***/ 67725:
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionLinkDirective": function() { return /* binding */ AccordionLinkDirective; }
/* harmony export */ });
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.directive */ 65903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



class AccordionLinkDirective {
    constructor(nav) {
        this.nav = nav;
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.selected = !this.selected;
    }
}
AccordionLinkDirective.??fac = function AccordionLinkDirective_Factory(t) { return new (t || AccordionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionDirective)); };
AccordionLinkDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({ type: AccordionLinkDirective, selectors: [["", "appAccordionLink", ""]], hostVars: 2, hostBindings: function AccordionLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("selected", ctx.selected);
    } }, inputs: { group: "group", selected: "selected" } });


/***/ }),

/***/ 98836:
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionAnchorDirective": function() { return /* reexport safe */ _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionAnchorDirective; },
/* harmony export */   "AccordionLinkDirective": function() { return /* reexport safe */ _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective; },
/* harmony export */   "AccordionDirective": function() { return /* reexport safe */ _accordion_directive__WEBPACK_IMPORTED_MODULE_2__.AccordionDirective; }
/* harmony export */ });
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ 9502);
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ 67725);
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ 65903);





/***/ }),

/***/ 74075:
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/component/add-ticker-news-dialog/add-ticker-news-dialog.component.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTickerNewsDialogComponent": function() { return /* binding */ AddTickerNewsDialogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _news_models_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../news/models/news */ 26318);
/* harmony import */ var _news_store_news_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../news/store/news.actions */ 15490);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _directives_thaana_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/thaana.directive */ 76274);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 51095);


















class AddTickerNewsDialogComponent {
    constructor(dialogRef, data, store) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.store = store;
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.tickerNews = new _news_models_news__WEBPACK_IMPORTED_MODULE_0__.TickersNews();
        this.dhivehiEnabled = true;
    }
    ngOnInit() {
        this.tickerNews.language.language_code = 'Dhv';
        this.tickerNews.ticker_id = this.data.id;
        this.tickerNews.enabled = 0; // ticker news are disabled when added
    }
    changeLanguage() {
        if (this.dhivehiEnabled) {
            this.tickerNews.language.language_code = 'Dhv';
        }
        else {
            this.tickerNews.language.language_code = 'Eng';
        }
    }
    closeDialog(confirmation) {
        this.dialogRef.close(confirmation);
    }
    doAdd(id) {
        this.closeDialog(true);
        //this.onAdd.emit(this.tickerNews);
        this.store.dispatch(new _news_store_news_actions__WEBPACK_IMPORTED_MODULE_1__.AddTickerNews(this.tickerNews));
        this.onAdd.emit();
    }
}
AddTickerNewsDialogComponent.??fac = function AddTickerNewsDialogComponent_Factory(t) { return new (t || AddTickerNewsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
AddTickerNewsDialogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: AddTickerNewsDialogComponent, selectors: [["app-add-ticker-news-dialog"]], inputs: { dhivehiEnabled: "dhivehiEnabled" }, decls: 20, vars: 5, consts: [["color", "secondary", 1, "no-shadow"], ["fxFlex", "", "fxShow", "false", "fxShow.gt-xs", ""], ["fxShow", "false", "fxShow.gt-xs", ""], ["labelPosition", "after", "color", "secondary", 3, "ngModel", "ngModelChange"], ["mat-dialog-content", ""], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-top", "20px"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["appearance", "outline"], ["matInput", "", "mat-autosize", "", "matAutosizeMinRows", "5", "required", "", "name", "dhvInput", 3, "appDnrmsThaana", "ngModel", "ngModelChange"], ["dhvInput", ""], ["align", "end", "mat-dialog-actions", "", "align", "end"], ["mat-button", "", "color", "basic", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function AddTickerNewsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "mat-slide-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function AddTickerNewsDialogComponent_Template_mat_slide_toggle_ngModelChange_5_listener($event) { return ctx.dhivehiEnabled = $event; })("ngModelChange", function AddTickerNewsDialogComponent_Template_mat_slide_toggle_ngModelChange_5_listener() { return ctx.changeLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, "Ticker News");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "textarea", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function AddTickerNewsDialogComponent_Template_textarea_ngModelChange_13_listener($event) { return ctx.tickerNews.news = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AddTickerNewsDialogComponent_Template_button_click_16_listener() { return ctx.closeDialog(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AddTickerNewsDialogComponent_Template_button_click_18_listener() { return ctx.doAdd(ctx.data.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("Add News to ", ctx.data.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx.dhivehiEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.tickerNews.language.language_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("appDnrmsThaana", ctx.dhivehiEnabled)("ngModel", ctx.tickerNews.news);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarRow, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultShowHideDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatTextareaAutosize, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _directives_thaana_directive__WEBPACK_IMPORTED_MODULE_2__.ThaanaDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton], encapsulation: 2 });


/***/ }),

/***/ 12329:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/component/confirm-dialog/confirm-dialog.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": function() { return /* binding */ ConfirmDialogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 51095);




class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    closeDialog(confirmation) {
        this.dialogRef.close(confirmation);
    }
}
ConfirmDialogComponent.??fac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ConfirmDialogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 10, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "tabindex", "2", 3, "click"], ["mat-button", "", "tabindex", "-1", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() { return ctx.closeDialog(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() { return ctx.closeDialog(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.data.message);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton], encapsulation: 2 });


/***/ }),

/***/ 37173:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/component/view-news-dialog/view-news-dialog.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewNewsDialogComponent": function() { return /* binding */ ViewNewsDialogComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _news_models_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../news/models/news */ 26318);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);













function ViewNewsDialogComponent_mat_tab_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-tab", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const bar_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("label", "Bar ", i_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classMap"](ctx_r0.data.language.language_code == "Dhv" ? "dhv" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](bar_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classMap"](ctx_r0.data.language.language_code == "Dhv" ? "dhv m-t-20" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](bar_r4.detail);
} }
function ViewNewsDialogComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ViewNewsDialogComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r6.doDelete(ctx_r6.data.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function ViewNewsDialogComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ViewNewsDialogComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r8.closeDialog(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("routerLink", "/news/", ctx_r2.data.id, "");
} }
function ViewNewsDialogComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ViewNewsDialogComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r10.doUndo(ctx_r10.data.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Restore");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
class ViewNewsDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.onUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    closeDialog(confirmation) {
        this.dialogRef.close(confirmation);
    }
    doDelete(id) {
        this.closeDialog(false);
        this.onDelete.emit(id);
    }
    doUndo(id) {
        this.closeDialog(false);
        this.onUndo.emit(id);
    }
}
ViewNewsDialogComponent.??fac = function ViewNewsDialogComponent_Factory(t) { return new (t || ViewNewsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
ViewNewsDialogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ViewNewsDialogComponent, selectors: [["app-view-news-dialog"]], decls: 23, vars: 11, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["fxLayout", "column", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["fxFlex.gt-sm", "100", "fxFlex", "100", 1, "m-t-20"], [2, "white-space", "pre-wrap", 3, "innerHTML"], [3, "label", 4, "ngFor", "ngForOf"], ["align", "end", "mat-dialog-actions", "", "align", "end"], ["mat-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "basic", 3, "routerLink", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], [3, "label"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-button", "", "color", "basic", 3, "routerLink", "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function ViewNewsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "News Bar(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, ViewNewsDialogComponent_mat_tab_18_Template, 6, 7, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, ViewNewsDialogComponent_button_20_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, ViewNewsDialogComponent_button_21_Template, 2, 1, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, ViewNewsDialogComponent_button_22_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.data.news_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("dhv-title", ctx.data.language.language_code == "Dhv");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.data.heading, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("dhv", ctx.data.language.language_code == "Dhv");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("innerHTML", ctx.data.body, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.data.newsbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.data.newsstatus.status != "published");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.data.newsstatus.status != "published" && ctx.data.newsstatus.status != "deleted");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.data.newsstatus.status === "deleted");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabGroup, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTab, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink], encapsulation: 2 });


/***/ }),

/***/ 76274:
/*!*******************************************************!*\
  !*** ./src/app/shared/directives/thaana.directive.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThaanaDirective": function() { return /* binding */ ThaanaDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);




// '[value]': 'appDnrmsThaana',
// '(ngModelChange)': 'keyupEvent()'
class ThaanaDirective {
    constructor(elem, _model, control, renderer) {
        this.elem = elem;
        this._model = _model;
        this.control = control;
        this.renderer = renderer;
        this.appDnrmsThaana = true;
        this.firstChar = true;
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._transFrom = 'qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>?()';
        this._transToKbd = {
            'phonetic': '????????????????????][\\????????????????????\'????????????????./????????????????????}{|???????????????????:\"??????????????><??)(',
            'phonetic-hh': '????????????????????][\\????????????????????\'????????????????./?????????????????????}{|??????????????????:\"??????????????><??)(',
            'typewriter': '??????????????????????[]???????????????????????????????????????????????????/:????????????{}<>.??\"??????????????????????????\\????)('
        };
    }
    ngOnInit() {
        this.selStart = this.elem.nativeElement.selectionStart;
        this.selEnd = this.elem.nativeElement.selectionEnd;
    }
    ngAfterViewInit() {
        this.applyDhivehiStyles(this.appDnrmsThaana);
    }
    applyDhivehiStyles(apply) {
        if (apply) {
            this.elem.nativeElement.style.color = '#2d2b2d';
            this.elem.nativeElement.style.fontSize = '20px';
            this.elem.nativeElement.style.textAlign = 'right';
            this.elem.nativeElement.style.direction = 'rtl';
            this.elem.nativeElement.style.lineHeight = '38px';
            this.elem.nativeElement.style.fontFamily = 'MV Faseyha';
            this.renderer.addClass(this.elem.nativeElement, 'dhv');
            // this.elem.nativeElement.style.unicodeBidi = 'bidi-override';
        }
        else {
            this.elem.nativeElement.style.color = '#2d2b2d';
            this.elem.nativeElement.style.fontSize = '16px';
            this.elem.nativeElement.style.textAlign = 'left';
            this.elem.nativeElement.style.direction = 'ltr';
            this.elem.nativeElement.style.unicodeBidi = '';
            this.elem.nativeElement.style.lineHeight = '28px';
            this.elem.nativeElement.style.fontFamily = 'Poppins';
            this.renderer.removeClass(this.elem.nativeElement, 'dhv');
        }
    }
    //  @HostListener('ngModelChange', ['$event'])
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
    translate(event) {
        if (!this.appDnrmsThaana) {
            this.applyDhivehiStyles(false);
            return;
        }
        else {
            this.applyDhivehiStyles(true);
        }
        const nElm = this.elem.nativeElement;
        const _inputValue = nElm.value; // nElm.value;
        let _key = event.key;
        let _keyChar = '';
        let ctrl;
        if (_inputValue.length === 0) {
            return true;
        }
        else if (_inputValue.length <= 1) {
            // _keyChar = this.elem.nativeElement.value;
            _keyChar = _inputValue;
        }
        else {
            // _keyChar = this.elem.nativeElement.value.substr(this.elem.nativeElement.selectionStart - 1, 1);
            _keyChar = _inputValue.substr(nElm.selectionStart - 1, 1);
            // _keyChar = _inputValue.substr(_inputValue.length - 1, 1);
        }
        if (event.which == null) {
            // IE:
            _key = event.key;
        }
        else if (event.which > 0) {
            // Non-IE printable chars:
            _key = event.which;
            // Handle special keys misfire in Opera
            if ([45, 46, 35, 36].indexOf(event.key) === 1) {
                return true;
            }
        }
        else {
            // Ignore special keys
            // return true;
        }
        // Check for CTRL modifier key
        if (event.modifier) {
            ctrl = event.modifiers && event.CONTROL_MASK;
        }
        else if (typeof (event.ctrlKey) !== 'undefined') {
            ctrl = event.ctrlKey;
        }
        const selOld = nElm.selectionEnd;
        this.selEnd = nElm.selectionEnd;
        this.selStart = nElm.selectionStart;
        try {
            const transIndex = this._transFrom.indexOf(_keyChar);
            if (transIndex === -1 || ctrl) {
                return true;
            }
            const tChar = this._transToKbd['phonetic'].substr(transIndex, 1);
            if (this.firstChar) {
                // this.new_text  = tChar;
                this.firstChar = false;
                this.new_text = _inputValue.substring(0, nElm.selectionStart - 1)
                    + tChar
                    + _inputValue.substring(nElm.selectionEnd, _inputValue.length);
            }
            else {
                this.new_text = _inputValue.substring(0, nElm.selectionStart - 1)
                    + tChar
                    + _inputValue.substring(nElm.selectionEnd, _inputValue.length);
            }
            this.ngModelChange.emit(this.new_text);
            this._model.valueAccessor.writeValue(this.new_text);
        }
        catch (error) {
            console.error(error);
        }
        this.setCursor();
    }
    setCursor() {
        // console.log('SELECTION: '+this.selStart+'||||'+this.selEnd)
        this.elem.nativeElement.focus();
        this.elem.nativeElement.setSelectionRange(this.selStart, this.selEnd);
    }
}
ThaanaDirective.??fac = function ThaanaDirective_Factory(t) { return new (t || ThaanaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
ThaanaDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: ThaanaDirective, selectors: [["", "appDnrmsThaana", ""]], hostBindings: function ThaanaDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function ThaanaDirective_input_HostBindingHandler($event) { return ctx.translate($event); });
    } }, inputs: { appDnrmsThaana: "appDnrmsThaana" }, outputs: { ngModelChange: "ngModelChange" } });


/***/ }),

/***/ 42647:
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItems": function() { return /* binding */ MenuItems; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

const MENUITEMS = [
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
        children: [
            { state: 'admin-dashboard', name: 'Dashboard', type: 'link' },
            { state: 'user-console', name: 'User Console', type: 'link' },
            {
                state: 'news-settings',
                name: 'News Settings',
                type: 'subchild',
                subchildren: [
                    {
                        state: 'list',
                        name: 'News Lists',
                        type: 'link'
                    },
                    {
                        state: 'breakers',
                        name: 'News Breakers',
                        type: 'link'
                    }
                ]
            }
        ]
    },
    {
        state: 'user',
        name: 'Dashboard',
        role: 'user',
        type: 'sub',
        icon: 'av_timer',
        children: [
            { state: 'profile', name: 'User Dashboard', type: 'link' },
            { state: 'chat', name: 'Message Board', type: 'link' }
        ]
    },
    {
        state: 'editor',
        name: 'News Editor',
        role: 'news-editor',
        type: 'sub',
        icon: 'featured_play_list',
        children: [
            { state: 'dashboard', name: 'Dashboard', type: 'link' },
            { state: 'review', name: 'Review News', type: 'link' },
            { state: 'list', name: 'News List', type: 'link' },
        ]
    },
    {
        state: 'news',
        name: 'News',
        role: 'journalist',
        type: 'sub',
        icon: 'view_headline',
        children: [
            { state: 'dashboard', name: 'News Dashboard', type: 'link' },
            { state: 'write', name: 'Write News', type: 'link' },
            {
                state: 'my',
                name: 'My News', type: 'link'
                // badge: [
                //   {type: 'primary', value: '17'}
                // ],
            },
            { state: 'ticker', name: 'Ticker News', type: 'link' },
            {
                state: 'trash',
                name: 'Trash', type: 'link'
                // badge: [
                //   {type: 'red', value: '17'}
                // ],
            }
        ]
    },
    {
        state: 'control',
        name: 'Controller',
        role: 'control',
        type: 'sub',
        icon: 'traffic',
        children: [
            { state: 'news-cg', name: 'News CG', type: 'link' },
            { state: 'ticker', name: 'Tickers', type: 'link' },
            /*{state: 'ticker', name: 'Tickers', type: 'link'},
            {state: 'cg-text', name: 'CG Text', type: 'link'},*/
            { state: 'on-air', name: 'On Air', type: 'link' },
            // {state: 'sms', name: 'SMS', type: 'link'},
        ]
    }
];
class MenuItems {
    constructor() {
        this.trash = 2;
    }
    OnInit() {
        // get user array
    }
    getMenuitem() {
        return MENUITEMS;
    }
}
MenuItems.??fac = function MenuItems_Factory(t) { return new (t || MenuItems)(); };
MenuItems.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: MenuItems, factory: MenuItems.??fac });


/***/ }),

/***/ 90193:
/*!***************************************!*\
  !*** ./src/app/shared/models/user.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": function() { return /* binding */ User; },
/* harmony export */   "Token": function() { return /* binding */ Token; },
/* harmony export */   "Role": function() { return /* binding */ Role; },
/* harmony export */   "Profile": function() { return /* binding */ Profile; }
/* harmony export */ });
class User {
    constructor() {
        this.id = null;
    }
}
class Token {
}
class Role {
}
class Profile {
    constructor() {
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
    }
}


/***/ }),

/***/ 91643:
/*!***********************************************!*\
  !*** ./src/app/shared/services/auth.guard.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 10629);
/* harmony import */ var _route_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-role.service */ 63293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);










class AuthGuard {
    constructor(auth, router, role) {
        this.auth = auth;
        this.router = router;
        this.role = role;
        this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    canActivate(next, state) {
        this.loggedInSub = this.auth.loggedIn$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroySubject$)).subscribe(loggedIn => {
            if (!loggedIn) {
                this.router.navigate(['/authentication/login']);
            }
            this.role.initialize();
        });
        return true;
    }
    ngOnDestroy() {
        this.destroySubject$.next();
    }
}
AuthGuard.??fac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_route_role_service__WEBPACK_IMPORTED_MODULE_1__.RouteRoleService)); };
AuthGuard.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: AuthGuard, factory: AuthGuard.??fac, providedIn: 'root' });


/***/ }),

/***/ 10629:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session.service */ 75986);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);







/*import { NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core/src/view/provider';*/
class AuthService {
    constructor(session, http) {
        this.session = session;
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
        // Create a stream of logged in status to communicate throughout app
        this.loggedIn = false;
        this.loggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.loggedIn);
        if (this.session.getSession('dnms_token')) {
            this.loggedIn$.next(true);
            this.loggedIn = true;
        }
    }
    isSignedIn() {
        return !!this.session.getSession('dnms_token');
    }
    doSignOut() {
        console.log('sign out');
        this.loggedIn$.next(false);
        this.loggedIn = false;
        this.session.destroy();
    }
    signIn(email, password) {
        return this.http.post(this.API_URL + 'authenticate/', { email, password });
    }
    // public doSignIn(accessToken: string, name: string, email: string, roles: string, roles_all: any[]) {
    doSignIn(loginUser) {
        if ((!loginUser.token) || (!loginUser.name)) {
            return;
        }
        this.loggedIn$.next(true);
        this.loggedIn = true;
        this.session.saveSession(loginUser);
    }
    refreshToken(token) {
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
    getUserSettings() {
        return this.session.getUserSetting;
    }
}
AuthService.??fac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
AuthService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: AuthService, factory: AuthService.??fac, providedIn: 'root' });


/***/ }),

/***/ 87253:
/*!***********************************************!*\
  !*** ./src/app/shared/services/ds.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DsService": function() { return /* binding */ DsService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class DsService {
    constructor() {
        this.ds = this.dsInstance = deepstream('192.168.1.70:6020');
    }
    login(credentials, loginHandler) {
        // {username: 'chris', password:'password'}
        this.ds.login(credentials, loginHandler);
    }
    getRecord(name) {
        return this.ds.record.getRecord(name);
    }
    getList(name) {
        return this.ds.record.getList(name);
    }
}
DsService.??fac = function DsService_Factory(t) { return new (t || DsService)(); };
DsService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: DsService, factory: DsService.??fac, providedIn: 'root' });


/***/ }),

/***/ 19077:
/*!*************************************************************!*\
  !*** ./src/app/shared/services/http-interceptor.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpInterceptorService": function() { return /* binding */ HttpInterceptorService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session.service */ 75986);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 10629);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authentication/store/user.actions */ 61184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 86710);













class HttpInterceptorService {
    constructor(sessonService, authService, snackBar, store) {
        this.sessonService = sessonService;
        this.authService = authService;
        this.snackBar = snackBar;
        this.store = store;
        this.isRefreshingToken = false;
        this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    }
    addToken(req, token) {
        return req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
    }
    intercept(request, next) {
        return next.handle(this.addToken(request, this.sessonService.getSession('dnms_token')))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse) {
                // console.log(`Request for ${request.urlWithParams} with method ${request.method}`);
                if (event.status === 200) { // OK
                    // this.snackBar.open(event.statusText, 'dismiss', {duration: 1000});
                }
                else if (event.status === 201) { // created
                    this.snackBar.open(event.statusText, 'dismiss', { duration: 1000 });
                }
                else if (event.status === 202) { // accepted
                    this.snackBar.open(event.statusText, 'dismiss', { duration: 1000 });
                }
                else if (event.status === 204) { // no content (delete)
                    this.snackBar.open(event.statusText, 'dismiss', { duration: 1000 });
                }
            }
        }, error => {
            // console.error('NICE ERROR', error);
            switch (error.status) {
                case 400:
                    return this.handle400Error(error);
                case 401:
                    return this.handle401Error(request, next);
                case 403:
                    return this.snackBar.open(error.error, 'dismiss');
                case 500:
                    return this.snackBar.open('Server Error!', 'dismiss');
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
    handle401Error(req, next) {
        // logged_inthis.store.dispatch(new User401());
        console.log('signing out from interceptor');
        this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_2__.User401());
        // return this.authService.doSignOut();
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
    handle400Error(error) {
        this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_2__.User401());
        // if (error && error.status === 400 && error.error && error.error.error === 'invalid_grant') {
        //     // If we get a 400 and the error message is 'invalid_grant', the token is no longer valid so logout.
        //     return this.authService.doSignOut();
        // }
        // return Observable.throw(error);
    }
}
HttpInterceptorService.??fac = function HttpInterceptorService_Factory(t) { return new (t || HttpInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????inject"](_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????inject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????inject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????inject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store)); };
HttpInterceptorService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjectable"]({ token: HttpInterceptorService, factory: HttpInterceptorService.??fac });


/***/ }),

/***/ 63293:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/route-role.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteRoleService": function() { return /* binding */ RouteRoleService; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session.service */ 75986);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 86710);









class RouteRoleService {
    constructor(session, router, route, store) {
        this.session = session;
        this.router = router;
        this.route = route;
        this.store = store;
        this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    ngOnInit() {
    }
    initialize() {
        this.routeObserver$ = this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroySubject$))
            .subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.RoutesRecognized) {
                this.guardRoute(event);
            } /*else if (event instanceof NavigationEnd) {
              this.checkRole(event);
            }*/
        });
    }
    guardRoute(event) {
        if (this.isPublic(event)) {
            return;
        }
        if (!this.callCheckToken(event)) {
            return;
        }
    }
    callCheckToken(event) {
        // const token_date = new Date(this.session.getSession('expiry'));
        // const now_date   = new Date().getTime();
        // if (token_date.getTime() < now_date) {
        //   this.store.dispatch(new userActions.UserLogout());
        //   //this.routeObserver$.unsubscribe();
        //   return false;
        // }
        return true;
    }
    isPublic(event) {
        return event.state.root.firstChild.data.isPublic;
    }
    checkRole(event) {
        let roles_ = false;
        const sRoutes = event.url.split('/');
        this.roleSubscription$ = this.store.select(RootStore => RootStore.UserState.user.roles)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroySubject$))
            .subscribe(roles => {
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
        });
        // user have permission to this route
        if (roles_) {
            return;
        }
        // the user does not have the required permission
        if (!roles_) {
            this.router.navigate(['/authentication/401']);
        }
    }
    ngOnDestroy() {
        this.destroySubject$.next();
        // this.routeObserver$.unsubscribe();
        // this.roleSubscription$.unsubscribe();
    }
}
RouteRoleService.??fac = function RouteRoleService_Factory(t) { return new (t || RouteRoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
RouteRoleService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: RouteRoleService, factory: RouteRoleService.??fac, providedIn: 'root' });


/***/ }),

/***/ 75986:
/*!****************************************************!*\
  !*** ./src/app/shared/services/session.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionService": function() { return /* binding */ SessionService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../authentication/store/user.actions */ 61184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);









class SessionService {
    constructor(store, http) {
        this.store = store;
        this.http = http;
        this.sessionExpiryTime = 1; //token expiry time local
        this.checkSessionExpiry = false;
        this.id = '';
        this.name = 'Guest';
        this.email = '';
        this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    destroy() {
        sessionStorage.clear();
        this.accessToken = null;
        this.name = 'Guest';
        this.email = '';
        this.roles = '';
        this.roles_all = '';
    }
    saveSession(loginUser) {
        // set token expiry time
        const date = new Date();
        date.setFullYear(date.getFullYear() + this.sessionExpiryTime);
        sessionStorage.setItem('id', loginUser.id);
        sessionStorage.setItem('name', loginUser.name);
        sessionStorage.setItem('email', loginUser.email);
        if (loginUser.token) {
            sessionStorage.setItem('dnms_token', loginUser.token.token);
        }
        sessionStorage.setItem('roles', JSON.stringify(loginUser.roles));
        sessionStorage.setItem('expiry', date.toJSON());
        //sessionStorage.setItem('roles_all', JSON.stringify(loginUser.roles_a));
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
    getUserSetting() {
        if (!this.getSession('dnms_token')) {
            return this.getUserLogoutSetting();
            // return false;
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(observer => {
            let profile = JSON.parse(this.getSession('profile'));
            console.log(profile);
            const user = {
                id: this.getSession('id'),
                email: this.getSession('email'),
                name: this.getSession('name'),
                token: { token: this.getSession('dnms_token') },
                roles: JSON.parse(this.getSession('roles')),
                roles_a: JSON.parse(this.getSession('roles_all')),
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
                    'coverimage': profile.coverimage,
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
    updateUserSettings() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + 'userdata/all');
    }
    /**
     * Check Expiry
     * experiment to check if users token has expired
     *
     * year, month, day
     * hour,min, sec
     */
    checkExpiry() {
        if (this.checkSessionExpiry) {
            let nowDate = new Date();
            //nowDate.setMinutes(nowDate.getMinutes() + this.sessionExpiryTime);
            let sessionDate = new Date(sessionStorage.getItem('expiry'));
            // console.log(nowDate)
            // console.log(new Date(sessionDate))
            if (nowDate.getFullYear() > sessionDate.getFullYear()) {
                console.log('this!!!!');
                this.CallLogoutState();
                return false;
            }
            else if (nowDate.getMonth() > sessionDate.getMonth()) {
                console.log('this!!!!');
                this.CallLogoutState();
                return false;
            }
            else if (nowDate.getDay() > sessionDate.getDay()) {
                console.log('this!!!!');
                this.CallLogoutState();
                return false;
            }
            let nowTime = nowDate.getHours() + ':' + nowDate.getMinutes() + ':' + nowDate.getSeconds();
            let sessionTime = sessionDate.getHours() + ':' + sessionDate.getMinutes() + ':' + sessionDate.getSeconds();
            //if(nowTime > sessionTime) {
            var regExp = /(\d{1,2})\:(\d{1,2})\:(\d{1,2})/;
            if (parseInt(nowTime.replace(regExp, "$1$2$3")) > parseInt(sessionTime.replace(regExp, "$1$2$3"))) {
                console.log('this!!!!', nowTime, sessionTime);
                this.CallLogoutState();
                return false;
            }
        }
        return true;
    }
    CallLogoutState() {
        this.destroySubject$.next();
        //this.subscription.unsubscribe();
        this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_0__.UserLogout());
    }
    /**
     * pass null user data as an observable
     * called when user logs out
     */
    getUserLogoutSetting() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(observer => {
            const user = {
                email: null,
                name: null,
                token: { token: null },
                roles: null,
                roles_a: null
            };
            observer.next(user); // This method same as resolve() method from Angular 1
            // console.log('am done');
            observer.complete(); // to show we are done with our processing
            // observer.error(new Error("error message"));
        });
    }
    //get a key from session storage
    getSession(key) {
        return sessionStorage.getItem(key);
    }
    /**
     *  Check if the logged in user have a given role or permission
     */
    checkRole(role) {
        let found = false;
        if (this.checkExpiry()) {
            this.store.select(state => state.UserState.user.roles)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroySubject$))
                .subscribe(list => {
                if (list) {
                    //if(Object.keys(list).length > 0){
                    list.forEach((user_role) => {
                        if (user_role.role === role) {
                            found = true;
                        }
                    });
                }
            });
        }
        else {
            //this.subscription.unsubscribe();
        }
        return found;
    }
    ngOnDestroy() {
        //this.subscription.unsubscribe();
        this.destroySubject$.next();
    }
}
SessionService.??fac = function SessionService_Factory(t) { return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????inject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient)); };
SessionService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjectable"]({ token: SessionService, factory: SessionService.??fac, providedIn: 'root' });


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items/menu-items */ 42647);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion */ 98836);
/* harmony import */ var _directives_thaana_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/thaana.directive */ 76274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




class SharedModule {
}
SharedModule.??fac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: SharedModule });
SharedModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__.MenuItems] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](SharedModule, { declarations: [_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionAnchorDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionDirective,
        _directives_thaana_directive__WEBPACK_IMPORTED_MODULE_2__.ThaanaDirective], exports: [_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionAnchorDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionDirective,
        _directives_thaana_directive__WEBPACK_IMPORTED_MODULE_2__.ThaanaDirective] }); })();


/***/ }),

/***/ 23812:
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": function() { return /* binding */ SpinnerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);





function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationCancel || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationError) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
}
SpinnerComponent.??fac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
SpinnerComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { backgroundColor: "backgroundColor" }, decls: 1, vars: 1, consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isSpinnerVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 5754:
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducers": function() { return /* binding */ reducers; },
/* harmony export */   "logger": function() { return /* binding */ logger; },
/* harmony export */   "metaReducers": function() { return /* binding */ metaReducers; }
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _authentication_store_user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication/store/user.reducer */ 56876);
/* harmony import */ var _news_store_news_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news/store/news.reducer */ 3504);
/* harmony import */ var _editor_store_news_editor_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editor/store/news-editor.reducer */ 29021);




const reducers = {
    UserState: _authentication_store_user_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer,
    NewsState: _news_store_news_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer,
    ReviewNews: _editor_store_news_editor_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer,
};
function logger(reducer) {
    return function (state, action) {
        console.log('state', state);
        console.log('action', action);
        // if (action.type === userAction.USER_LOGOUT_SUCCESS) {
        //   console.log('x-x ROOT REDUCER LOGOUT x-x');
        //   // state = { UserState: { user: { email: null, name: null, token: {token: null}, roles: null, roles_a: null } }, NewsState: {myNews: null, myNewsPageState: { currentPage: null, perPage: null, lastPages: null, totalResults: null }, trashNewsPageState: null, trashNews: null} };
        //   state = undefined;
        //   this.router.navigate(['/authentication/login']);
        // }
        return reducer(state, action);
    };
}
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production
    ? [logger]
    : [];


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    /*apiUrl: 'http://192.168.18.18/nrs/api/',
    storageUrl: 'http://192.168.18.18/nrs/storage/',*/
    apiUrl: 'http://203.104.25.202:84/api/',
    storageUrl: 'http://203.104.25.202:84/nrs/storage/',
    pusher: {
        key: '5289e5ee971f625d85fa',
        cluster: 'ap2',
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


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/compiler */ 89101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 92340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch(err => console.log(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map