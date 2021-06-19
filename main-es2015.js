(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shinan/Sites/angular/newsroom-rtv-update/src/main.ts */"zUnb");


/***/ }),

/***/ "2EDt":
/*!******************************************************!*\
  !*** ./src/app/authentication/store/user.effects.ts ***!
  \******************************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/auth.service */ "IYfF");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.actions */ "b7cN");
/* harmony import */ var _news_store_news_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../news/store/news.actions */ "5WGB");
/* harmony import */ var _editor_store_news_editor_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../editor/store/news-editor.actions */ "RI8/");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/session.service */ "mZtN");
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
            pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_user_actions__WEBPACK_IMPORTED_MODULE_7__["USER_LOGIN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(payload => {
            return this.authService.signIn(payload.email, payload.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((user) => {
                // console.log(user);
                this.authService.doSignIn(user);
                return new _user_actions__WEBPACK_IMPORTED_MODULE_7__["UserLoginSuccess"](user);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
                console.log(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(new _user_actions__WEBPACK_IMPORTED_MODULE_7__["UserLoginError"]());
            }));
        }));
        this.LogInSuccess = this.actions.
            pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_user_actions__WEBPACK_IMPORTED_MODULE_7__["USER_LOGIN_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((user) => {
            // console.log(user);
            if (this.sessionService.saveSession(user)) {
                // this.router.navigate(['/dashboard/default']);
                // this._location.back();
            }
            // localStorage.setItem('token', user.user.token.token);
        }));
        this.GetUserSettings = this.actions.
            pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_user_actions__WEBPACK_IMPORTED_MODULE_7__["USER_GET_SETTINGS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((action) => action), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(payload => {
            return this.sessionService.getUserSetting()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((user) => {
                return new _user_actions__WEBPACK_IMPORTED_MODULE_7__["GetUserSettingsSuccess"](user);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
                console.log(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(new _user_actions__WEBPACK_IMPORTED_MODULE_7__["GetUserSettingsError"]());
            }));
        }));
        this.ServerGetUserSettings = this.actions.
            pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_user_actions__WEBPACK_IMPORTED_MODULE_7__["SERVER_USER_GET_SETTINGS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((action) => action), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(payload => {
            return this.sessionService.updateUserSettings().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((user) => {
                this.sessionService.saveSession(user);
                return new _user_actions__WEBPACK_IMPORTED_MODULE_7__["ServerGetUserSettingsSuccess"](user);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
                console.log(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(new _user_actions__WEBPACK_IMPORTED_MODULE_7__["ServerGetUserSettingsError"]());
            }));
        }));
        this.UserLogout = this.actions.
            pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_user_actions__WEBPACK_IMPORTED_MODULE_7__["USER_LOGOUT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((action) => action), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(payload => {
            this.store.dispatch(new _news_store_news_actions__WEBPACK_IMPORTED_MODULE_8__["LogoutNewsState"]());
            this.store.dispatch(new _editor_store_news_editor_actions__WEBPACK_IMPORTED_MODULE_9__["LogoutEditorState"]());
            this.authService.doSignOut();
            this.router.navigate(['/authentication/login']);
            // return Observable.of(new UserActions.UserLogoutSuccess(this.sessionService.getUserLogoutSetting()));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(new _user_actions__WEBPACK_IMPORTED_MODULE_7__["UserLogoutSuccess"]());
        }));
        this.UserLogoutSuccess = this.actions.
            pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_user_actions__WEBPACK_IMPORTED_MODULE_7__["USER_LOGOUT_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((action) => {
            //location.reload();
            this.router.navigate(['/authentication/login']);
        }));
        this.User401 = this.actions.
            pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_user_actions__WEBPACK_IMPORTED_MODULE_7__["USER_401"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(payload => {
            console.warn('401 user found!!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(new _user_actions__WEBPACK_IMPORTED_MODULE_7__["UserLogout"]());
        }));
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac });
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"])
], UserEffects.prototype, "LogIn", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])({ dispatch: false }),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"])
], UserEffects.prototype, "LogInSuccess", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"])
], UserEffects.prototype, "GetUserSettings", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"])
], UserEffects.prototype, "ServerGetUserSettings", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"])
], UserEffects.prototype, "UserLogout", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"])
], UserEffects.prototype, "User401", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](UserEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { LogIn: [], LogInSuccess: [], GetUserSettings: [], ServerGetUserSettings: [], UserLogout: [], User401: [] }); })();


/***/ }),

/***/ "2h+y":
/*!***********************************************!*\
  !*** ./src/app/shared/services/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "IYfF");
/* harmony import */ var _route_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route-role.service */ "RmCq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");










class AuthGuard {
    constructor(auth, router, role) {
        this.auth = auth;
        this.router = router;
        this.role = role;
        this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    canActivate(next, state) {
        this.loggedInSub = this.auth.loggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroySubject$)).subscribe(loggedIn => {
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
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_route_role_service__WEBPACK_IMPORTED_MODULE_4__["RouteRoleService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _route_role_service__WEBPACK_IMPORTED_MODULE_4__["RouteRoleService"] }]; }, null); })();


/***/ }),

/***/ "5WGB":
/*!********************************************!*\
  !*** ./src/app/news/store/news.actions.ts ***!
  \********************************************/
/*! exports provided: GET_A_NEWS, GET_A_NEWS_SUCCESS, GET_A_NEWS_ERROR, GET_MY_NEWS, GET_MY_NEWS_SUCCESS, GET_MY_NEWS_ERROR, GET_TRASH_NEWS, GET_TRASH_NEWS_SUCCESS, GET_TRASH_NEWS_ERROR, DELETE_NEWS, DELETE_NEWS_SUCCESS, DELETE_NEWS_ERROR, RESTORE_NEWS, RESTORE_NEWS_SUCCESS, RESTORE_NEWS_ERROR, CHANGE_NEWS_LOADED, CHANGE_MY_NEWS_LOADED, CHANGE_TRASH_NEWS_LOADED, DESTROY_NEWS, DESTROY_NEWS_SUCCESS, DESTROY_NEWS_ERROR, GET_TICKERS, GET_TICKERS_SUCCESS, GET_TICKERS_ERROR, ADD_TICKER_NEWS, ADD_TICKER_NEWS_SUCCESS, ADD_TICKER_NEWS_ERROR, APPROVE_TICKER_NEWS, APPROVE_TICKER_NEWS_SUCCESS, APPROVE_TICKER_NEWS_ERROR, DISAPPROVE_TICKER_NEWS, DISAPPROVE_TICKER_NEWS_SUCCESS, DISAPPROVE_TICKER_NEWS_ERROR, DELETE_TICKER_NEWS, DELETE_TICKER_NEWS_SUCCESS, DELETE_TICKER_NEWS_ERROR, ADD_TICKER, ADD_TICKER_SUCCESS, ADD_TICKER_ERROR, LOGOUT_NEWS_STATE, GetMyNews, GetMyNewsSuccess, GetMyNewsError, GetTrashNews, GetTrashNewsSuccess, GetTrashNewsError, GetNews, GetNewsSuccess, GetNewsError, DeleteNews, DeleteNewsSuccess, DeleteNewsError, RestoreNews, RestoreNewsSuccess, RestoreNewsError, UpdateNewsLoaded, UpdateMyNewsLoaded, UpdateTrashNewsLoaded, DestroyNews, DestroyNewsSuccess, DestroyNewsError, GetTickers, GetTickersSuccess, GetTickersError, AddTickerNews, AddTickerNewsSuccess, AddTickerNewsError, ApproveTickerNews, ApproveTickerNewsSuccess, ApproveTickerNewsError, DisApproveTickerNews, DisApproveTickerNewsSuccess, DisApproveTickerNewsError, DeleteTickerNews, DeleteTickerNewsSuccess, DeleteTickerNewsError, AddTicker, AddTickerSuccess, AddTickerError, LogoutNewsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_A_NEWS", function() { return GET_A_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_A_NEWS_SUCCESS", function() { return GET_A_NEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_A_NEWS_ERROR", function() { return GET_A_NEWS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MY_NEWS", function() { return GET_MY_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MY_NEWS_SUCCESS", function() { return GET_MY_NEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MY_NEWS_ERROR", function() { return GET_MY_NEWS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TRASH_NEWS", function() { return GET_TRASH_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TRASH_NEWS_SUCCESS", function() { return GET_TRASH_NEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TRASH_NEWS_ERROR", function() { return GET_TRASH_NEWS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_NEWS", function() { return DELETE_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_NEWS_SUCCESS", function() { return DELETE_NEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_NEWS_ERROR", function() { return DELETE_NEWS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESTORE_NEWS", function() { return RESTORE_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESTORE_NEWS_SUCCESS", function() { return RESTORE_NEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESTORE_NEWS_ERROR", function() { return RESTORE_NEWS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NEWS_LOADED", function() { return CHANGE_NEWS_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_MY_NEWS_LOADED", function() { return CHANGE_MY_NEWS_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_TRASH_NEWS_LOADED", function() { return CHANGE_TRASH_NEWS_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTROY_NEWS", function() { return DESTROY_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTROY_NEWS_SUCCESS", function() { return DESTROY_NEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTROY_NEWS_ERROR", function() { return DESTROY_NEWS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TICKERS", function() { return GET_TICKERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TICKERS_SUCCESS", function() { return GET_TICKERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TICKERS_ERROR", function() { return GET_TICKERS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TICKER_NEWS", function() { return ADD_TICKER_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TICKER_NEWS_SUCCESS", function() { return ADD_TICKER_NEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TICKER_NEWS_ERROR", function() { return ADD_TICKER_NEWS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPROVE_TICKER_NEWS", function() { return APPROVE_TICKER_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPROVE_TICKER_NEWS_SUCCESS", function() { return APPROVE_TICKER_NEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPROVE_TICKER_NEWS_ERROR", function() { return APPROVE_TICKER_NEWS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISAPPROVE_TICKER_NEWS", function() { return DISAPPROVE_TICKER_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISAPPROVE_TICKER_NEWS_SUCCESS", function() { return DISAPPROVE_TICKER_NEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISAPPROVE_TICKER_NEWS_ERROR", function() { return DISAPPROVE_TICKER_NEWS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_TICKER_NEWS", function() { return DELETE_TICKER_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_TICKER_NEWS_SUCCESS", function() { return DELETE_TICKER_NEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_TICKER_NEWS_ERROR", function() { return DELETE_TICKER_NEWS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TICKER", function() { return ADD_TICKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TICKER_SUCCESS", function() { return ADD_TICKER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TICKER_ERROR", function() { return ADD_TICKER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_NEWS_STATE", function() { return LOGOUT_NEWS_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMyNews", function() { return GetMyNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMyNewsSuccess", function() { return GetMyNewsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMyNewsError", function() { return GetMyNewsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTrashNews", function() { return GetTrashNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTrashNewsSuccess", function() { return GetTrashNewsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTrashNewsError", function() { return GetTrashNewsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNews", function() { return GetNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNewsSuccess", function() { return GetNewsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNewsError", function() { return GetNewsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteNews", function() { return DeleteNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteNewsSuccess", function() { return DeleteNewsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteNewsError", function() { return DeleteNewsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreNews", function() { return RestoreNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreNewsSuccess", function() { return RestoreNewsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreNewsError", function() { return RestoreNewsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNewsLoaded", function() { return UpdateNewsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMyNewsLoaded", function() { return UpdateMyNewsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTrashNewsLoaded", function() { return UpdateTrashNewsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestroyNews", function() { return DestroyNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestroyNewsSuccess", function() { return DestroyNewsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestroyNewsError", function() { return DestroyNewsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTickers", function() { return GetTickers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTickersSuccess", function() { return GetTickersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTickersError", function() { return GetTickersError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTickerNews", function() { return AddTickerNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTickerNewsSuccess", function() { return AddTickerNewsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTickerNewsError", function() { return AddTickerNewsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveTickerNews", function() { return ApproveTickerNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveTickerNewsSuccess", function() { return ApproveTickerNewsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveTickerNewsError", function() { return ApproveTickerNewsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisApproveTickerNews", function() { return DisApproveTickerNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisApproveTickerNewsSuccess", function() { return DisApproveTickerNewsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisApproveTickerNewsError", function() { return DisApproveTickerNewsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTickerNews", function() { return DeleteTickerNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTickerNewsSuccess", function() { return DeleteTickerNewsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTickerNewsError", function() { return DeleteTickerNewsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTicker", function() { return AddTicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTickerSuccess", function() { return AddTickerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTickerError", function() { return AddTickerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutNewsState", function() { return LogoutNewsState; });
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

/***/ "ADQ8":
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


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
            /*{state: 'ticker', name: 'Tickers', type: 'link'},
            {state: 'cg-text', name: 'CG Text', type: 'link'},*/
            { state: 'on-air', name: 'On Air', type: 'link' },
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
MenuItems.ɵfac = function MenuItems_Factory(t) { return new (t || MenuItems)(); };
MenuItems.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuItems, factory: MenuItems.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItems, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
    }
};


/***/ }),

/***/ "C0NU":
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





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
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe(e => this.checkOpenLinks());
    }
}
AccordionDirective.ɵfac = function AccordionDirective_Factory(t) { return new (t || AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AccordionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionDirective, selectors: [["", "appAccordion", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccordionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[appAccordion]',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Ds2H":
/*!*****************************************************!*\
  !*** ./src/app/editor/store/news-editor.reducer.ts ***!
  \*****************************************************/
/*! exports provided: initialState, reducer, getReviewNewsState, getMyNews, getNewsById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReviewNewsState", function() { return getReviewNewsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyNews", function() { return getMyNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsById", function() { return getNewsById; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-editor.actions */ "RI8/");


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
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["GET_REVIEW_NEWS"]: {
            return Object.assign(Object.assign({}, state), { news: [], isLoaded: false });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["GET_REVIEW_NEWS_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { news: action.payload, isLoaded: true });
        }
        /**
         * --------------------------------------------------------------------------------------> APPROVE NEWS
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["APPROVE_NEWS"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["APPROVE_NEWS_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { news: [
                    ...(state.news.filter((news) => news.id !== action.payload.id)),
                ], isLoaded: true });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["APPROVE_NEWS_ERROR"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: true });
        }
        /**
         * --------------------------------------------------------------------------------------> REJECT NEWS
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["REJECT_NEWS"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["REJECT_NEWS_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { news: [
                    ...(state.news.filter((news) => news.id !== action.payload.news_id)),
                ], isLoaded: true });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["REJECT_NEWS_ERROR"]: {
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
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["GET_LISTS"]: {
            return Object.assign(Object.assign({}, state), { isListLoaded: false });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["GET_LISTS_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { lists: action.payload, isListLoaded: true });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["GET_LISTS_ERROR"]: {
            return Object.assign(Object.assign({}, state), { isListLoaded: true });
        }
        /**
         * --------------------------------------------------------------------------------------> GET LIST BY DATE
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["GET_LISTS_BY_DATE"]: {
            return Object.assign(Object.assign({}, state), { isListLoaded: false });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["GET_LISTS_BY_DATE_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { lists: action.payload, isListLoaded: true });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["GET_LISTS_BY_DATE_ERROR"]: {
            return Object.assign(Object.assign({}, state), { isListLoaded: true });
        }
        /**
         * --------------------------------------------------------------------------------------> ADD TO LIST
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_LIST"]: {
            return Object.assign(Object.assign({}, state), { isListLoaded: true });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_LIST_SUCCESS"]: {
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
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FROM_LIST"]: {
            return Object.assign(Object.assign({}, state), { isListLoaded: true });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FROM_LIST_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { isListLoaded: false, lists: action.payload });
        }
        /**
         * --------------------------------------------------------------------------------------> UPDATE LIST ORDER
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LIST_ORDER"]: {
            return Object.assign(Object.assign({}, state), { isListLoaded: true });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LIST_ORDER_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { isListLoaded: false, lists: action.payload });
        }
        /**
         * --------------------------------------------------------------------------------------> GET SELECTED LIST
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["GET_SELECTED_LIST_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { selectedList: action.payload.list_id });
        }
        /**
         * --------------------------------------------------------------------------------------> UPDATE SELECTED LIST
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_SELECTED_LIST_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { selectedList: action.payload.list_id });
        }
        /**
         * --------------------------------------------------------------------------------------> OTHER ACTIONS
         */
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_REVIEW_NEWS_LOADED"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: action.payload.isLoaded });
        }
        case _news_editor_actions__WEBPACK_IMPORTED_MODULE_1__["LOGOUT_EDITOR_STATE"]: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
const getReviewNewsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('ReviewNewsState');
const getMyNews = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReviewNewsState, (state) => state.news);
const getNewsById = (newsBox, id) => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getReviewNewsState, (allItems) => {
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

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session.service */ "mZtN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../environments/environment */ "AytR");








/*import { NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core/src/view/provider';*/
class AuthService {
    constructor(session, http) {
        this.session = session;
        this.http = http;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.loggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.loggedIn);
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
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "JNRg":
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.directive */ "C0NU");




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
AccordionLinkDirective.ɵfac = function AccordionLinkDirective_Factory(t) { return new (t || AccordionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"])); };
AccordionLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AccordionLinkDirective, selectors: [["", "appAccordionLink", ""]], hostVars: 2, hostBindings: function AccordionLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx.selected);
    } }, inputs: { group: "group", selected: "selected" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAccordionLink]'
            }]
    }], function () { return [{ type: _accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]]
            }] }]; }, { group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.selected']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "KOJr":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/component/view-news-dialog/view-news-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewNewsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNewsDialogComponent", function() { return ViewNewsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _news_models_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../news/models/news */ "mhfV");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");













function ViewNewsDialogComponent_mat_tab_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bar_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("label", "Bar ", i_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.data.language.language_code == "Dhv" ? "dhv" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bar_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.data.language.language_code == "Dhv" ? "dhv m-t-20" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bar_r4.detail);
} }
function ViewNewsDialogComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewNewsDialogComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.doDelete(ctx_r6.data.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewNewsDialogComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewNewsDialogComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.closeDialog(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/news/", ctx_r2.data.id, "");
} }
function ViewNewsDialogComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewNewsDialogComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.doUndo(ctx_r10.data.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Restore");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ViewNewsDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
ViewNewsDialogComponent.ɵfac = function ViewNewsDialogComponent_Factory(t) { return new (t || ViewNewsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ViewNewsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewNewsDialogComponent, selectors: [["app-view-news-dialog"]], decls: 23, vars: 11, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["fxLayout", "column", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["fxFlex.gt-sm", "100", "fxFlex", "100", 1, "m-t-20"], [2, "white-space", "pre-wrap", 3, "innerHTML"], [3, "label", 4, "ngFor", "ngForOf"], ["align", "end", "mat-dialog-actions", "", "align", "end"], ["mat-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "basic", 3, "routerLink", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], [3, "label"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-button", "", "color", "basic", 3, "routerLink", "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function ViewNewsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "News Bar(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ViewNewsDialogComponent_mat_tab_18_Template, 6, 7, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ViewNewsDialogComponent_button_20_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ViewNewsDialogComponent_button_21_Template, 2, 1, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ViewNewsDialogComponent_button_22_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.news_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dhv-title", ctx.data.language.language_code == "Dhv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.heading, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dhv", ctx.data.language.language_code == "Dhv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.data.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.newsbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.newsstatus.status != "published");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.newsstatus.status != "published" && ctx.data.newsstatus.status != "deleted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.newsstatus.status === "deleted");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewNewsDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-news-dialog',
                templateUrl: './view-news-dialog.component.html'
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _news_models_news__WEBPACK_IMPORTED_MODULE_2__["News"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "MOmx":
/*!**************************************************!*\
  !*** ./src/app/layouts/blank/blank.component.ts ***!
  \**************************************************/
/*! exports provided: AppBlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBlankComponent", function() { return AppBlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppBlankComponent {
}
AppBlankComponent.ɵfac = function AppBlankComponent_Factory(t) { return new (t || AppBlankComponent)(); };
AppBlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppBlankComponent, selectors: [["app-blank"]], decls: 2, vars: 0, template: function AppBlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppBlankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blank',
                templateUrl: './blank.component.html',
                styleUrls: []
            }]
    }], null, null); })();


/***/ }),

/***/ "MwDm":
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ "xXHC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"]; });

/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "JNRg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]; });

/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "C0NU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]; });






/***/ }),

/***/ "NlNA":
/*!***************************************!*\
  !*** ./src/app/shared/models/user.ts ***!
  \***************************************/
/*! exports provided: User, Token, Role, Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
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

/***/ "P42M":
/*!***********************************************************!*\
  !*** ./src/app/layouts/full/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/*! exports provided: AppSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarComponent", function() { return AppSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/menu-items/menu-items */ "ADQ8");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/session.service */ "mZtN");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "IYfF");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../authentication/store/user.actions */ "b7cN");
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/models/user */ "NlNA");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/accordion/accordion.directive */ "C0NU");
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/accordion/accordionlink.directive */ "JNRg");
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/accordion/accordionanchor.directive */ "xXHC");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");

























function AppSidebarComponent_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r6.storagePath + "profiles/default.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AppSidebarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_div_1_img_1_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userData == null);
} }
function AppSidebarComponent_div_2_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.storagePath + "profiles/user/" + ctx_r7.userData.profile.profilepic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AppSidebarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_div_2_img_1_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userData.profile.profilepic);
} }
function AppSidebarComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.username, " ");
} }
function AppSidebarComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.username, " ");
} }
function AppSidebarComponent_mat_list_item_17_a_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r16.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r16.value);
} }
const _c0 = function (a1) { return ["/", a1]; };
function AppSidebarComponent_mat_list_item_17_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_17_a_1_span_6_Template, 2, 4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, menuitem_r8.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r8.badge);
} }
function AppSidebarComponent_mat_list_item_17_a_2_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r19.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r19.value);
} }
function AppSidebarComponent_mat_list_item_17_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_17_a_2_span_6_Template, 2, 4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", menuitem_r8.state, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r8.badge);
} }
function AppSidebarComponent_mat_list_item_17_a_3_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r22.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r22.value);
} }
function AppSidebarComponent_mat_list_item_17_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_17_a_3_span_6_Template, 2, 4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", menuitem_r8.state, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r8.badge);
} }
function AppSidebarComponent_mat_list_item_17_a_4_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", badge_r25.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r25.value);
} }
function AppSidebarComponent_mat_list_item_17_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_17_a_4_span_6_Template, 2, 4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r8.badge);
} }
const _c1 = function (a1, a2) { return ["/", a1, a2]; };
function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childitem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, menuitem_r8.state, childitem_r29.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childitem_r29.name);
} }
function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_1_a_1_Template, 2, 5, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childitem_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childitem_r29.type === "link");
} }
function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r36.clickEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childitem_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r34.status ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childitem_r33.name);
} }
const _c2 = function (a1, a2, a3) { return ["/", a1, a2, a3]; };
function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r40 = ctx.$implicit;
    const childitem_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c2, menuitem_r8.state, childitem_r33.state, child_r40.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r40.name);
} }
function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_mat_list_item_1_Template, 3, 6, "mat-list-item", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childitem_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", childitem_r33.subchildren);
} }
function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_a_1_Template, 6, 2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_mat_nav_list_2_Template, 2, 1, "mat-nav-list", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const childitem_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childitem_r33.type === "subchild");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childitem_r33.type === "subchild");
} }
function AppSidebarComponent_mat_list_item_17_mat_nav_list_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_1_Template, 2, 1, "mat-list-item", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_mat_list_item_2_Template, 3, 2, "mat-list-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r8.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuitem_r8.children);
} }
function AppSidebarComponent_mat_list_item_17_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuitem_r8.name);
} }
function AppSidebarComponent_mat_list_item_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_17_a_1_Template, 7, 6, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppSidebarComponent_mat_list_item_17_a_2_Template, 7, 4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppSidebarComponent_mat_list_item_17_a_3_Template, 7, 4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppSidebarComponent_mat_list_item_17_a_4_Template, 9, 3, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppSidebarComponent_mat_list_item_17_mat_nav_list_5_Template, 3, 2, "mat-nav-list", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_17_div_6_Template, 3, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r8 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", menuitem_r8.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r8.type === "link" && ctx_r5.checkRole(menuitem_r8.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r8.type === "extLink" && ctx_r5.checkRole(menuitem_r8.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r8.type === "extTabLink" && ctx_r5.checkRole(menuitem_r8.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r8.type === "sub" && ctx_r5.checkRole(menuitem_r8.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r8.type === "sub" && ctx_r5.checkRole(menuitem_r8.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuitem_r8.type === "saperator");
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
        this.userData = new _shared_models_user__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.status = false;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        // get user authentication status
        this.loggedInSub = this.auth.loggedIn$.subscribe(loggedIn => this.logged_in = loggedIn);
        this.username = session.getSession('name');
    }
    ngOnInit() {
        this.storagePath = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].storageUrl;
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
        this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_6__["UserLogout"]());
    }
}
AppSidebarComponent.ɵfac = function AppSidebarComponent_Factory(t) { return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
AppSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppSidebarComponent, selectors: [["app-sidebar"]], decls: 18, vars: 7, consts: [[1, "user-profile", 2, "background", "url(assets/images/background/user-info.jpg) no-repeat"], ["class", "profile-img", 4, "ngIf"], [1, "profile-text"], ["class", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["class", "", 4, "ngIf"], [1, "mymegamenu"], ["sdprofile", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["appAccordion", ""], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group", 4, "ngFor", "ngForOf"], [1, "profile-img"], ["alt", "user", 3, "src", 4, "ngIf"], ["alt", "user", 3, "src"], [1, "", 3, "matMenuTriggerFor"], [1, "ti-angle-down", "font-12", "m-l-5"], [1, ""], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group"], ["class", "", "appAccordionToggle", "", 3, "routerLink", 4, "ngIf"], ["class", "", "appAccordionToggle", "", 3, "href", 4, "ngIf"], ["class", "", "appAccordionToggle", "", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "", "appAccordionToggle", "", "href", "javascript:;", 4, "ngIf"], ["class", "sub-item", 4, "ngIf"], ["class", "saperator text-muted", 4, "ngIf"], ["appAccordionToggle", "", 1, "", 3, "routerLink"], ["fxFlex", ""], [3, "class", 4, "ngFor", "ngForOf"], ["appAccordionToggle", "", 1, "", 3, "href"], ["appAccordionToggle", "", "target", "_blank", 1, "", 3, "href"], ["appAccordionToggle", "", "href", "javascript:;", 1, ""], [1, "dd-icon"], [1, "sub-item"], ["routerLinkActive", "selected", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "selected"], ["class", "relative", "routerLinkActive", "selected", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "selected", 1, "relative", 3, "routerLink"], ["class", "", "href", "javascript: void(0);", 3, "ngClass", "click", 4, "ngIf"], ["class", "child-sub-item", 4, "ngIf"], ["href", "javascript: void(0);", 1, "", 3, "ngClass", "click"], [1, "child-sub-item"], ["routerLinkActive", "selected", 3, "routerLink"], [1, "saperator", "text-muted"]], template: function AppSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppSidebarComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppSidebarComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppSidebarComponent_a_4_Template, 3, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppSidebarComponent_a_5_Template, 2, 1, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppSidebarComponent_Template_button_click_12_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-nav-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppSidebarComponent_mat_list_item_17_Template, 7, 7, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData.id == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData.id != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems.getMenuitem());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatNavList"], _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_14__["AccordionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_15__["AccordionLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_16__["AccordionAnchorDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["DefaultClassDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] }, { type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"] }, { type: _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items/menu-items */ "ADQ8");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion */ "MwDm");
/* harmony import */ var _directives_thaana_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/thaana.directive */ "nJ5Y");





class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"],
        _directives_thaana_directive__WEBPACK_IMPORTED_MODULE_3__["ThaanaDirective"]], exports: [_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"],
        _directives_thaana_directive__WEBPACK_IMPORTED_MODULE_3__["ThaanaDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"],
                    _directives_thaana_directive__WEBPACK_IMPORTED_MODULE_3__["ThaanaDirective"]
                ],
                exports: [
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"],
                    _directives_thaana_directive__WEBPACK_IMPORTED_MODULE_3__["ThaanaDirective"]
                ],
                providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "POxX":
/*!***********************************************!*\
  !*** ./src/app/shared/services/ds.service.ts ***!
  \***********************************************/
/*! exports provided: DsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsService", function() { return DsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


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
DsService.ɵfac = function DsService_Factory(t) { return new (t || DsService)(); };
DsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DsService, factory: DsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RI8/":
/*!*****************************************************!*\
  !*** ./src/app/editor/store/news-editor.actions.ts ***!
  \*****************************************************/
/*! exports provided: GET_REVIEW_NEWS, GET_REVIEW_NEWS_SUCCESS, GET_REVIEW_NEWS_ERROR, APPROVE_NEWS, APPROVE_NEWS_SUCCESS, APPROVE_NEWS_ERROR, REJECT_NEWS, REJECT_NEWS_SUCCESS, REJECT_NEWS_ERROR, GET_LISTS, GET_LISTS_SUCCESS, GET_LISTS_ERROR, GET_LISTS_BY_DATE, GET_LISTS_BY_DATE_SUCCESS, GET_LISTS_BY_DATE_ERROR, ADD_TO_LIST, ADD_TO_LIST_SUCCESS, ADD_TO_LIST_ERROR, REMOVE_FROM_LIST, REMOVE_FROM_LIST_SUCCESS, REMOVE_FROM_LIST_ERROR, UPDATE_LIST_ORDER, UPDATE_LIST_ORDER_SUCCESS, UPDATE_LIST_ORDER_ERROR, UPDATE_SELECTED_LIST, UPDATE_SELECTED_LIST_SUCCESS, UPDATE_SELECTED_LIST_ERROR, GET_SELECTED_LIST, GET_SELECTED_LIST_SUCCESS, GET_SELECTED_LIST_ERROR, CHANGE_REVIEW_NEWS_LOADED, LOGOUT_EDITOR_STATE, GetReviewNews, GetReviewNewsSuccess, GetReviewNewsError, ApproveNews, ApproveNewsSuccess, ApproveNewsError, RejectNews, RejectNewsSuccess, RejectNewsError, GetLists, GetListsSuccess, GetListsError, GetListsByDate, GetListsByDateSuccess, GetListsByDateError, AddToList, AddToListSuccess, AddToListError, RemoveFromList, RemoveFromListSuccess, RemoveFromListError, UpdateListOrder, UpdateListOrderSuccess, UpdateListOrderError, GetSelectedList, GetSelectedListSuccess, GetSelectedListError, UpdateSelectedList, UpdateSelectedListSuccess, UpdateSelectedListError, LogoutEditorState, UpdateReviewNewsLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_REVIEW_NEWS", function() { return GET_REVIEW_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_REVIEW_NEWS_SUCCESS", function() { return GET_REVIEW_NEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_REVIEW_NEWS_ERROR", function() { return GET_REVIEW_NEWS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPROVE_NEWS", function() { return APPROVE_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPROVE_NEWS_SUCCESS", function() { return APPROVE_NEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPROVE_NEWS_ERROR", function() { return APPROVE_NEWS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REJECT_NEWS", function() { return REJECT_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REJECT_NEWS_SUCCESS", function() { return REJECT_NEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REJECT_NEWS_ERROR", function() { return REJECT_NEWS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LISTS", function() { return GET_LISTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LISTS_SUCCESS", function() { return GET_LISTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LISTS_ERROR", function() { return GET_LISTS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LISTS_BY_DATE", function() { return GET_LISTS_BY_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LISTS_BY_DATE_SUCCESS", function() { return GET_LISTS_BY_DATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LISTS_BY_DATE_ERROR", function() { return GET_LISTS_BY_DATE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_LIST", function() { return ADD_TO_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_LIST_SUCCESS", function() { return ADD_TO_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_LIST_ERROR", function() { return ADD_TO_LIST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_LIST", function() { return REMOVE_FROM_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_LIST_SUCCESS", function() { return REMOVE_FROM_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_LIST_ERROR", function() { return REMOVE_FROM_LIST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LIST_ORDER", function() { return UPDATE_LIST_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LIST_ORDER_SUCCESS", function() { return UPDATE_LIST_ORDER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LIST_ORDER_ERROR", function() { return UPDATE_LIST_ORDER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SELECTED_LIST", function() { return UPDATE_SELECTED_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SELECTED_LIST_SUCCESS", function() { return UPDATE_SELECTED_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SELECTED_LIST_ERROR", function() { return UPDATE_SELECTED_LIST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SELECTED_LIST", function() { return GET_SELECTED_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SELECTED_LIST_SUCCESS", function() { return GET_SELECTED_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SELECTED_LIST_ERROR", function() { return GET_SELECTED_LIST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_REVIEW_NEWS_LOADED", function() { return CHANGE_REVIEW_NEWS_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_EDITOR_STATE", function() { return LOGOUT_EDITOR_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetReviewNews", function() { return GetReviewNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetReviewNewsSuccess", function() { return GetReviewNewsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetReviewNewsError", function() { return GetReviewNewsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveNews", function() { return ApproveNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveNewsSuccess", function() { return ApproveNewsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveNewsError", function() { return ApproveNewsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectNews", function() { return RejectNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectNewsSuccess", function() { return RejectNewsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectNewsError", function() { return RejectNewsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLists", function() { return GetLists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetListsSuccess", function() { return GetListsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetListsError", function() { return GetListsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetListsByDate", function() { return GetListsByDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetListsByDateSuccess", function() { return GetListsByDateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetListsByDateError", function() { return GetListsByDateError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToList", function() { return AddToList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToListSuccess", function() { return AddToListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToListError", function() { return AddToListError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFromList", function() { return RemoveFromList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFromListSuccess", function() { return RemoveFromListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFromListError", function() { return RemoveFromListError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateListOrder", function() { return UpdateListOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateListOrderSuccess", function() { return UpdateListOrderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateListOrderError", function() { return UpdateListOrderError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSelectedList", function() { return GetSelectedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSelectedListSuccess", function() { return GetSelectedListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSelectedListError", function() { return GetSelectedListError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSelectedList", function() { return UpdateSelectedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSelectedListSuccess", function() { return UpdateSelectedListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSelectedListError", function() { return UpdateSelectedListError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutEditorState", function() { return LogoutEditorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateReviewNewsLoaded", function() { return UpdateReviewNewsLoaded; });
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

/***/ "RmCq":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/route-role.service.ts ***!
  \*******************************************************/
/*! exports provided: RouteRoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteRoleService", function() { return RouteRoleService; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.service */ "mZtN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");










class RouteRoleService {
    constructor(session, router, route, store) {
        this.session = session;
        this.router = router;
        this.route = route;
        this.store = store;
        this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
    }
    initialize() {
        this.routeObserver$ = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroySubject$))
            .subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RoutesRecognized"]) {
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroySubject$))
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
RouteRoleService.ɵfac = function RouteRoleService_Factory(t) { return new (t || RouteRoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
RouteRoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RouteRoleService, factory: RouteRoleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](RouteRoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"] }]; }, null); })();


/***/ }),

/***/ "RxpE":
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ "ADQ8");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "widY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "P42M");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/spinner.component */ "oj/z");

























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
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"])); };
FullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], decls: 50, vars: 23, consts: [[1, "main-container", 3, "dir", "ngClass"], ["color", "primary", 1, "topbar", "telative"], [1, "navbar-header"], ["href", "/", 1, "navbar-brand"], ["src", "assets/images/logo-icon.png", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo-light-icon.png", "alt", "homepage", 1, "light-logo"], ["fxShow", "false", "fxShow.gt-xs", ""], ["src", "assets/images/logo-text.png", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo-light-text.png", "alt", "homepage", 1, "light-logo"], ["mat-icon-button", "", "value", "sidebarclosed", 3, "click"], ["fxFlex", ""], [1, "example-sidenav-container", 3, "ngClass"], ["id", "snav", "fixedTopGap", "0", 1, "pl-xs", 3, "mode", "opened", "disableClose", "perfectScrollbar", "open", "close"], ["snav", ""], [1, "app-sidebar"], ["position", "end", "mode", "over", "opened", "false", 1, "chat-panel"], ["end", ""], [1, "scroll"], ["mat-subheader", "", 1, "text-uppercase", "font-weight-bold"], ["color", "warn", 3, "change"], ["color", "warn", 3, "ngModel", "ngModelChange"], ["color", "warn", 1, "text-danger", 3, "ngModel", "ngModelChange", "change"], ["color", "warn", 1, "text-megna", 3, "ngModel", "ngModelChange", "change"], ["color", "warn", 1, "text-info", 3, "ngModel", "ngModelChange", "change"], ["color", "warn", 3, "ngModel", "ngModelChange", "change"], [1, "page-wrapper"], [1, "page-content"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FullComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-sidenav-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-sidenav", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("open", function FullComponent_Template_mat_sidenav_open_16_listener() { return ctx.sidebarOpened = true; })("close", function FullComponent_Template_mat_sidenav_close_16_listener() { return ctx.sidebarOpened = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-sidebar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-sidenav", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-slide-toggle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FullComponent_Template_mat_slide_toggle_change_26_listener() { return ctx.dir = ctx.dir == "rtl" ? "ltr" : "rtl"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "RTL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-slide-toggle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_slide_toggle_ngModelChange_29_listener($event) { return ctx.boxed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Boxed Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-checkbox", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_35_listener($event) { return ctx.danger = $event; })("change", function FullComponent_Template_mat_checkbox_change_35_listener() { return ctx.green = ctx.blue = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Red");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-checkbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_38_listener($event) { return ctx.green = $event; })("change", function FullComponent_Template_mat_checkbox_change_38_listener() { return ctx.danger = ctx.blue = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Teal Green");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-checkbox", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_41_listener($event) { return ctx.blue = $event; })("change", function FullComponent_Template_mat_checkbox_change_41_listener() { return ctx.green = ctx.danger = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Blue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-checkbox", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_44_listener($event) { return ctx.dark = $event; })("change", function FullComponent_Template_mat_checkbox_change_44_listener() { return ctx.green = ctx.blue = ctx.danger = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-sidenav-content", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", ctx.dir)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction6"](14, _c0, ctx.minisidebar, ctx.boxed, ctx.danger, ctx.blue, ctx.green, ctx.dark));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 0 : 0, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](21, _c1, ctx.minisidebar));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "side" : "over")("opened", ctx.mobileQuery.matches)("disableClose", ctx.mobileQuery.matches)("perfectScrollbar", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.boxed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.danger);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.green);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.blue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.dark);
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["AppHeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenav"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarDirective"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["AppSidebarComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListItem"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDivider"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckbox"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterOutlet"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_21__["SpinnerComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FullComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-full-layout',
                templateUrl: 'full.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] }, { type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"] }]; }, null); })();


/***/ }),

/***/ "S3+y":
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/*! exports provided: reducers, logger, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _authentication_store_user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication/store/user.reducer */ "x8YU");
/* harmony import */ var _news_store_news_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news/store/news.reducer */ "m/2J");
/* harmony import */ var _editor_store_news_editor_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editor/store/news-editor.reducer */ "Ds2H");




const reducers = {
    UserState: _authentication_store_user_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    NewsState: _news_store_news_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    ReviewNews: _editor_store_news_editor_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"],
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
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production
    ? [logger]
    : [];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/store/user.actions */ "b7cN");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/auth.service */ "IYfF");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/spinner.component */ "oj/z");












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
            this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_4__["GetUserSettings"]());
            // redirect if logged in
            // this._location.back();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/full/full.component */ "RxpE");
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "MOmx");
/* harmony import */ var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/full/header/header.component */ "widY");
/* harmony import */ var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/full/sidebar/sidebar.component */ "P42M");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./demo-material-module */ "onrN");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/spinner.component */ "oj/z");
/* harmony import */ var _shared_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/services/http-interceptor.service */ "i4Tb");
/* harmony import */ var _shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/component/confirm-dialog/confirm-dialog.component */ "l8SP");
/* harmony import */ var _shared_component_view_news_dialog_view_news_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/component/view-news-dialog/view-news-dialog.component */ "KOJr");
/* harmony import */ var _shared_component_add_ticker_news_dialog_add_ticker_news_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/component/add-ticker-news-dialog/add-ticker-news-dialog.component */ "tjh/");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./store/app.reducer */ "S3+y");
/* harmony import */ var _authentication_store_user_effects__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./authentication/store/user.effects */ "2EDt");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-contextmenu */ "JU/d");



































//import { SmsComponent } from './sms/sms.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true,
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _shared_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["HttpInterceptorService"],
            multi: true,
        },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"]
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _demo_material_module__WEBPACK_IMPORTED_MODULE_14__["DemoMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutes"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_22__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_25__["reducers"], { metaReducers: _store_app_reducer__WEBPACK_IMPORTED_MODULE_25__["metaReducers"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_23__["EffectsModule"].forRoot([_authentication_store_user_effects__WEBPACK_IMPORTED_MODULE_26__["UserEffects"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__["StoreDevtoolsModule"].instrument({ maxAge: 50 }),
            ngx_contextmenu__WEBPACK_IMPORTED_MODULE_27__["ContextMenuModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_9__["FullComponent"],
        _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_11__["AppHeaderComponent"],
        _shared_spinner_component__WEBPACK_IMPORTED_MODULE_17__["SpinnerComponent"],
        _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_10__["AppBlankComponent"],
        _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["AppSidebarComponent"],
        _shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogComponent"],
        _shared_component_view_news_dialog_view_news_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ViewNewsDialogComponent"],
        _shared_component_add_ticker_news_dialog_add_ticker_news_dialog_component__WEBPACK_IMPORTED_MODULE_21__["AddTickerNewsDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
        _demo_material_module__WEBPACK_IMPORTED_MODULE_14__["DemoMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_22__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_23__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__["StoreDevtoolsModule"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_27__["ContextMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_9__["FullComponent"],
                    _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_11__["AppHeaderComponent"],
                    _shared_spinner_component__WEBPACK_IMPORTED_MODULE_17__["SpinnerComponent"],
                    _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_10__["AppBlankComponent"],
                    _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["AppSidebarComponent"],
                    _shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogComponent"],
                    _shared_component_view_news_dialog_view_news_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ViewNewsDialogComponent"],
                    _shared_component_add_ticker_news_dialog_add_ticker_news_dialog_component__WEBPACK_IMPORTED_MODULE_21__["AddTickerNewsDialogComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                    _demo_material_module__WEBPACK_IMPORTED_MODULE_14__["DemoMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutes"]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_22__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_25__["reducers"], { metaReducers: _store_app_reducer__WEBPACK_IMPORTED_MODULE_25__["metaReducers"] }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_23__["EffectsModule"].forRoot([_authentication_store_user_effects__WEBPACK_IMPORTED_MODULE_26__["UserEffects"]]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__["StoreDevtoolsModule"].instrument({ maxAge: 50 }),
                    ngx_contextmenu__WEBPACK_IMPORTED_MODULE_27__["ContextMenuModule"].forRoot(),
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: _shared_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["HttpInterceptorService"],
                        multi: true,
                    },
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                    {
                        provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
                        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"]
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
                entryComponents: [_shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogComponent"], _shared_component_view_news_dialog_view_news_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ViewNewsDialogComponent"], _shared_component_add_ticker_news_dialog_add_ticker_news_dialog_component__WEBPACK_IMPORTED_MODULE_21__["AddTickerNewsDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "b7cN":
/*!******************************************************!*\
  !*** ./src/app/authentication/store/user.actions.ts ***!
  \******************************************************/
/*! exports provided: USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, USER_LOGOUT, USER_LOGOUT_SUCCESS, USER_LOGOUT_ERROR, USER_GET_SETTINGS, USER_GET_SETTINGS_SUCCESS, USER_GET_SETTINGS_ERROR, SERVER_USER_GET_SETTINGS, SERVER_USER_GET_SETTINGS_SUCCESS, SERVER_USER_GET_SETTINGS_ERROR, USER_GET_ROLES, USER_401, UserLogin, UserLoginSuccess, UserLoginError, UserLogout, UserLogoutSuccess, UserLogoutError, User401, GetUserSettings, GetUserSettingsSuccess, GetUserSettingsError, GetUserRoles, ServerGetUserSettings, ServerGetUserSettingsSuccess, ServerGetUserSettingsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGIN", function() { return USER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGIN_SUCCESS", function() { return USER_LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGIN_ERROR", function() { return USER_LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGOUT", function() { return USER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGOUT_SUCCESS", function() { return USER_LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGOUT_ERROR", function() { return USER_LOGOUT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_GET_SETTINGS", function() { return USER_GET_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_GET_SETTINGS_SUCCESS", function() { return USER_GET_SETTINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_GET_SETTINGS_ERROR", function() { return USER_GET_SETTINGS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_USER_GET_SETTINGS", function() { return SERVER_USER_GET_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_USER_GET_SETTINGS_SUCCESS", function() { return SERVER_USER_GET_SETTINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_USER_GET_SETTINGS_ERROR", function() { return SERVER_USER_GET_SETTINGS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_GET_ROLES", function() { return USER_GET_ROLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_401", function() { return USER_401; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogin", function() { return UserLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginSuccess", function() { return UserLoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginError", function() { return UserLoginError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogout", function() { return UserLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogoutSuccess", function() { return UserLogoutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogoutError", function() { return UserLogoutError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User401", function() { return User401; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserSettings", function() { return GetUserSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserSettingsSuccess", function() { return GetUserSettingsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserSettingsError", function() { return GetUserSettingsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserRoles", function() { return GetUserRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerGetUserSettings", function() { return ServerGetUserSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerGetUserSettingsSuccess", function() { return ServerGetUserSettingsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerGetUserSettingsError", function() { return ServerGetUserSettingsError; });
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

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ "RxpE");
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "MOmx");
/* harmony import */ var _shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/auth.guard */ "2h+y");



const AppRoutes = [{
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
        children: [
            {
                path: 'admin',
                loadChildren: () => Promise.all(/*! import() | admin-admin-module */[__webpack_require__.e("default~admin-admin-module~charts-chartslib-module~control-control-module~datatables-datatables-modu~aca3d9a5"), __webpack_require__.e("default~admin-admin-module~control-control-module~datatables-datatables-module~pages-pages-module"), __webpack_require__.e("default~admin-admin-module~apps-apps-module~control-control-module~editor-editor-module"), __webpack_require__.e("admin-admin-module")]).then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then(m => m.AdminModule),
            }, {
                path: '',
                redirectTo: '/user',
                pathMatch: 'full'
            }, {
                path: 'user',
                loadChildren: () => Promise.all(/*! import() | dashboards-dashboards-module */[__webpack_require__.e("default~apps-apps-module~charts-chartslib-module~dashboards-dashboards-module"), __webpack_require__.e("default~charts-chartslib-module~dashboards-dashboards-module~tables-tables-module"), __webpack_require__.e("default~charts-chartslib-module~dashboards-dashboards-module"), __webpack_require__.e("dashboards-dashboards-module")]).then(__webpack_require__.bind(null, /*! ./dashboards/dashboards.module */ "BNDV")).then(m => m.DashboardsModule),
                canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                data: { isPublic: true, role: 'user' }
            },
            {
                path: 'editor',
                loadChildren: () => Promise.all(/*! import() | editor-editor-module */[__webpack_require__.e("default~admin-admin-module~apps-apps-module~control-control-module~editor-editor-module"), __webpack_require__.e("editor-editor-module")]).then(__webpack_require__.bind(null, /*! ./editor/editor.module */ "ALb8")).then(m => m.EditorModule),
            },
            {
                path: 'news',
                loadChildren: () => __webpack_require__.e(/*! import() | news-news-module */ "news-news-module").then(__webpack_require__.bind(null, /*! ./news/news.module */ "YXEz")).then(m => m.NewsModule),
                canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                data: { isPublic: false, role: 'journalist' }
            },
            {
                path: 'control',
                loadChildren: () => Promise.all(/*! import() | control-control-module */[__webpack_require__.e("default~admin-admin-module~charts-chartslib-module~control-control-module~datatables-datatables-modu~aca3d9a5"), __webpack_require__.e("default~admin-admin-module~control-control-module~datatables-datatables-module~pages-pages-module"), __webpack_require__.e("default~admin-admin-module~apps-apps-module~control-control-module~editor-editor-module"), __webpack_require__.e("control-control-module")]).then(__webpack_require__.bind(null, /*! ./control/control.module */ "dgxB")).then(m => m.ControlModule),
                canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                data: { isPublic: false, role: 'journalist' }
            },
            {
                path: 'material',
                loadChildren: () => __webpack_require__.e(/*! import() | material-component-material-module */ "material-component-material-module").then(__webpack_require__.bind(null, /*! ./material-component/material.module */ "76PZ")).then(m => m.MaterialComponentsModule)
            },
            {
                path: 'apps',
                loadChildren: () => Promise.all(/*! import() | apps-apps-module */[__webpack_require__.e("default~admin-admin-module~apps-apps-module~control-control-module~editor-editor-module"), __webpack_require__.e("default~apps-apps-module~charts-chartslib-module~dashboards-dashboards-module"), __webpack_require__.e("default~apps-apps-module~forms-forms-module"), __webpack_require__.e("default~apps-apps-module~tables-tables-module"), __webpack_require__.e("apps-apps-module")]).then(__webpack_require__.bind(null, /*! ./apps/apps.module */ "IYw8")).then(m => m.AppsModule)
            },
            {
                path: 'forms',
                loadChildren: () => Promise.all(/*! import() | forms-forms-module */[__webpack_require__.e("default~apps-apps-module~forms-forms-module"), __webpack_require__.e("default~authentication-authentication-module~forms-forms-module"), __webpack_require__.e("forms-forms-module")]).then(__webpack_require__.bind(null, /*! ./forms/forms.module */ "9Nm5")).then(m => m.FormModule)
            },
            {
                path: 'tables',
                loadChildren: () => Promise.all(/*! import() | tables-tables-module */[__webpack_require__.e("default~admin-admin-module~charts-chartslib-module~control-control-module~datatables-datatables-modu~aca3d9a5"), __webpack_require__.e("default~charts-chartslib-module~dashboards-dashboards-module~tables-tables-module"), __webpack_require__.e("default~apps-apps-module~tables-tables-module"), __webpack_require__.e("tables-tables-module")]).then(__webpack_require__.bind(null, /*! ./tables/tables.module */ "w7GV")).then(m => m.TablesModule)
            },
            {
                path: 'datatables',
                loadChildren: () => Promise.all(/*! import() | datatables-datatables-module */[__webpack_require__.e("default~admin-admin-module~charts-chartslib-module~control-control-module~datatables-datatables-modu~aca3d9a5"), __webpack_require__.e("default~admin-admin-module~control-control-module~datatables-datatables-module~pages-pages-module"), __webpack_require__.e("datatables-datatables-module")]).then(__webpack_require__.bind(null, /*! ./datatables/datatables.module */ "Im+f")).then(m => m.DataTablesModule)
            },
            {
                path: 'pages',
                loadChildren: () => Promise.all(/*! import() | pages-pages-module */[__webpack_require__.e("default~admin-admin-module~charts-chartslib-module~control-control-module~datatables-datatables-modu~aca3d9a5"), __webpack_require__.e("default~admin-admin-module~control-control-module~datatables-datatables-module~pages-pages-module"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "dgmN")).then(m => m.PagesModule)
            },
            {
                path: 'widgets',
                loadChildren: () => __webpack_require__.e(/*! import() | widgets-widgets-module */ "widgets-widgets-module").then(__webpack_require__.bind(null, /*! ./widgets/widgets.module */ "3QYm")).then(m => m.WidgetsModule)
            },
            {
                path: 'charts',
                loadChildren: () => Promise.all(/*! import() | charts-chartslib-module */[__webpack_require__.e("default~admin-admin-module~charts-chartslib-module~control-control-module~datatables-datatables-modu~aca3d9a5"), __webpack_require__.e("default~apps-apps-module~charts-chartslib-module~dashboards-dashboards-module"), __webpack_require__.e("default~charts-chartslib-module~dashboards-dashboards-module~tables-tables-module"), __webpack_require__.e("default~charts-chartslib-module~dashboards-dashboards-module"), __webpack_require__.e("charts-chartslib-module")]).then(__webpack_require__.bind(null, /*! ./charts/chartslib.module */ "tGi7")).then(m => m.ChartslibModule)
            }
        ]
    },
    {
        path: '',
        component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__["AppBlankComponent"],
        children: [{
                path: 'authentication',
                loadChildren: () => Promise.all(/*! import() | authentication-authentication-module */[__webpack_require__.e("default~authentication-authentication-module~forms-forms-module"), __webpack_require__.e("authentication-authentication-module")]).then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "OpKh")).then(m => m.AuthenticationModule)
            }],
        data: { isPublic: true }
    },
    {
        path: '**',
        redirectTo: 'authentication/404'
    }];


/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "i4Tb":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/http-interceptor.service.ts ***!
  \*************************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session.service */ "mZtN");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "IYfF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../authentication/store/user.actions */ "b7cN");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");














class HttpInterceptorService {
    constructor(sessonService, authService, snackBar, store) {
        this.sessonService = sessonService;
        this.authService = authService;
        this.snackBar = snackBar;
        this.store = store;
        this.isRefreshingToken = false;
        this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    addToken(req, token) {
        return req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
    }
    intercept(request, next) {
        return next.handle(this.addToken(request, this.sessonService.getSession('dnms_token')))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
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
        this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_7__["User401"]());
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
        this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_7__["User401"]());
        // if (error && error.status === 400 && error.error && error.error.error === 'invalid_grant') {
        //     // If we get a 400 and the error message is 'invalid_grant', the token is no longer valid so logout.
        //     return this.authService.doSignOut();
        // }
        // return Observable.throw(error);
    }
}
HttpInterceptorService.ɵfac = function HttpInterceptorService_Factory(t) { return new (t || HttpInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"])); };
HttpInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpInterceptorService, factory: HttpInterceptorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }]; }, null); })();


/***/ }),

/***/ "l8SP":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/component/confirm-dialog/confirm-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    closeDialog(confirmation) {
        this.dialogRef.close(confirmation);
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 10, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "tabindex", "2", 3, "click"], ["mat-button", "", "tabindex", "-1", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() { return ctx.closeDialog(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() { return ctx.closeDialog(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-dialog',
                templateUrl: './confirm-dialog.component.html'
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "m/2J":
/*!********************************************!*\
  !*** ./src/app/news/store/news.reducer.ts ***!
  \********************************************/
/*! exports provided: initialState, reducer, getNewsState, getMyNews, getNewsById, getMyNewsByStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsState", function() { return getNewsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyNews", function() { return getMyNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsById", function() { return getNewsById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyNewsByStatus", function() { return getMyNewsByStatus; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _news_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.actions */ "5WGB");


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
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MY_NEWS"]: {
            return Object.assign(Object.assign({}, state), { myNewsPageState: {
                    currentPage: action.payload.currentPage,
                    perPage: action.payload.perPage,
                }, isMyNewsLoaded: false, isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MY_NEWS_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { myNews: action.payload.data, myNewsPageState: {
                    currentPage: action.payload.current_page,
                    perPage: Number(action.payload.per_page),
                    lastPages: action.payload.last_page,
                    totalResults: action.payload.total,
                }, isMyNewsLoaded: true, isLoaded: true });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["GET_TRASH_NEWS"]: {
            return Object.assign(Object.assign({}, state), { trashNewsPageState: {
                    currentPage: action.payload.currentPage,
                    perPage: action.payload.perPage,
                }, isTrashLoaded: false, isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["GET_TRASH_NEWS_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { trashNews: action.payload.data, trashNewsPageState: {
                    currentPage: action.payload.current_page,
                    perPage: Number(action.payload.per_page),
                    lastPages: action.payload.last_page,
                    totalResults: action.payload.total,
                }, isTrashLoaded: true, isLoaded: true });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_NEWS"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_NEWS_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { myNews: state.myNews.filter((news) => news.id !== action.payload.id), trashNews: [
                    ...state.trashNews,
                    ...Object.assign(state.myNews.filter((news) => news.id === action.payload.id), { newsstatus: { status: 'deleted' } })
                ], isLoaded: true, isMyNewsLoaded: false, isTrashLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["RESTORE_NEWS_SUCCESS"]: {
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
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["GET_TICKERS"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["GET_TICKERS_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: true, tickers: action.payload });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["GET_TICKERS_ERROR"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: true });
        }
        /**
         * ---------------------------------------------------------------------> ADD TICKER NEWS
         */
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_TICKER_NEWS"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_TICKER_NEWS_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: true, tickers: action.payload });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_TICKER_NEWS_ERROR"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: true });
        }
        /**
         * ---------------------------------------------------------------------> APPROVE TICKER NEWS
         */
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["APPROVE_TICKER_NEWS"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["APPROVE_TICKER_NEWS_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: true, tickers: action.payload });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["APPROVE_TICKER_NEWS_ERROR"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: true });
        }
        /**
         * ---------------------------------------------------------------------> DISAPPROVE TICKER NEWS
         */
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["DISAPPROVE_TICKER_NEWS"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["DISAPPROVE_TICKER_NEWS_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: true, tickers: action.payload });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["DISAPPROVE_TICKER_NEWS_ERROR"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: true });
        }
        /**
         * ---------------------------------------------------------------------> DELETE TICKER NEWS
         */
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_TICKER_NEWS"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_TICKER_NEWS_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: true, tickers: action.payload });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_TICKER_NEWS_ERROR"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: true });
        }
        /**
         * ---------------------------------------------------------------------> ADD TICKER
         */
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_TICKER"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_TICKER_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: true, tickers: action.payload });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_TICKER_ERROR"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: true });
        }
        // when set to false myNews will be fetched from api
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NEWS_LOADED"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: action.payload.isLoaded });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_MY_NEWS_LOADED"]: {
            return Object.assign(Object.assign({}, state), { isMyNewsLoaded: action.payload.isMyNewsLoaded });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_TRASH_NEWS_LOADED"]: {
            return Object.assign(Object.assign({}, state), { isTrashLoaded: action.payload.isTrashNewsLoaded });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["DESTROY_NEWS"]: {
            return Object.assign(Object.assign({}, state), { isLoaded: false });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["DESTROY_NEWS_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { trashNews: state.trashNews.filter((news) => news.id !== action.payload.id), isLoaded: true });
        }
        case _news_actions__WEBPACK_IMPORTED_MODULE_1__["LOGOUT_NEWS_STATE"]: {
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
const getNewsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('NewsState');
const getMyNews = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNewsState, (state) => state.myNews);
const getNewsById = (newsBox, id) => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNewsState, (allItems) => {
    if (allItems) {
        return allItems[newsBox].find(item => {
            return item.id === id;
        });
    }
    else {
        return {};
    }
});
const getMyNewsByStatus = (status) => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNewsState, state => state.myNews.filter(x => x.newsstatus.status === status));


/***/ }),

/***/ "mZtN":
/*!****************************************************!*\
  !*** ./src/app/shared/services/session.service.ts ***!
  \****************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication/store/user.actions */ "b7cN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../environments/environment */ "AytR");










class SessionService {
    constructor(store, http) {
        this.store = store;
        this.http = http;
        this.sessionExpiryTime = 1; //token expiry time local
        this.checkSessionExpiry = false;
        this.id = '';
        this.name = 'Guest';
        this.email = '';
        this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
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
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(observer => {
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
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + 'userdata/all');
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
        this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_3__["UserLogout"]());
    }
    /**
     * pass null user data as an observable
     * called when user logs out
     */
    getUserLogoutSetting() {
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(observer => {
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroySubject$))
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
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "mhfV":
/*!*************************************!*\
  !*** ./src/app/news/models/news.ts ***!
  \*************************************/
/*! exports provided: News, NewsBar, TickerNews, Language, Newsstatus, NewNotes, NewsList, ListNews, ListOrder, Ticker, TickersNews, JournalistDashboard, JournalistDashboardNewsNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsBar", function() { return NewsBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickerNews", function() { return TickerNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Newsstatus", function() { return Newsstatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewNotes", function() { return NewNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsList", function() { return NewsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNews", function() { return ListNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOrder", function() { return ListOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticker", function() { return Ticker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickersNews", function() { return TickersNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalistDashboard", function() { return JournalistDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalistDashboardNewsNumbers", function() { return JournalistDashboardNewsNumbers; });
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

/***/ "nJ5Y":
/*!*******************************************************!*\
  !*** ./src/app/shared/directives/thaana.directive.ts ***!
  \*******************************************************/
/*! exports provided: ThaanaDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThaanaDirective", function() { return ThaanaDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




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
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._transFrom = 'qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>?()';
        this._transToKbd = {
            'phonetic': 'ްއެރތޔުިޮޕ][\\ަސދފގހޖކލ؛\'ޒ×ޗވބނމ،./ޤޢޭޜޓޠޫީޯ÷}{|ާށޑﷲޣޙޛޚޅ:\"ޡޘޝޥޞޏޟ><؟)(',
            'phonetic-hh': 'ޤަެރތޔުިޮޕ][\\އސދފގހޖކލ؛\'ޒޝްވބނމ،./ﷲާޭޜޓޠޫީޯޕ}{|ޢށޑޟޣޙޛޚޅ:\"ޡޘޗޥޞޏމ><؟)(',
            'typewriter': 'ޫޮާީޭގރމތހލ[]ިުްަެވއނކފﷲޒޑސޔޅދބށޓޯ×’“/:ޤޜޣޠޙ÷{}<>.،\"ޥޢޘޚޡ؛ޖޕޏޗޟޛޝ\\ޞ؟)('
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
ThaanaDirective.ɵfac = function ThaanaDirective_Factory(t) { return new (t || ThaanaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ThaanaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ThaanaDirective, selectors: [["", "appDnrmsThaana", ""]], hostBindings: function ThaanaDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ThaanaDirective_input_HostBindingHandler($event) { return ctx.translate($event); });
    } }, inputs: { appDnrmsThaana: "appDnrmsThaana" }, outputs: { ngModelChange: "ngModelChange" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThaanaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDnrmsThaana]',
                // providers: [NgModel],
                host: {
                    '(input)': 'translate($event)',
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { appDnrmsThaana: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ngModelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "oj/z":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
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
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { backgroundColor: "backgroundColor" }, decls: 1, vars: 1, consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                template: `<div class="preloader" *ngIf="isSpinnerVisible">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
    </div>`,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, { backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "onrN":
/*!*****************************************!*\
  !*** ./src/app/demo-material-module.ts ***!
  \*****************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/accordion */ "N/qJ");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









































/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
class DemoMaterialModule {
}
DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoMaterialModule });
DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); }, imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__["CdkTableModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["A11yModule"],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_35__["BidiModule"],
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_33__["CdkAccordionModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__["ObserversModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_36__["OverlayModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_37__["PlatformModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__["PortalModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__["CdkTableModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["A11yModule"],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_35__["BidiModule"],
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_33__["CdkAccordionModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__["ObserversModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_36__["OverlayModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_37__["PlatformModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__["PortalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__["CdkTableModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["A11yModule"],
                    _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_35__["BidiModule"],
                    _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_33__["CdkAccordionModule"],
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__["ObserversModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_36__["OverlayModule"],
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_37__["PlatformModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__["PortalModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "tjh/":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/component/add-ticker-news-dialog/add-ticker-news-dialog.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddTickerNewsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTickerNewsDialogComponent", function() { return AddTickerNewsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _news_models_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../news/models/news */ "mhfV");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _news_store_news_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../news/store/news.actions */ "5WGB");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _directives_thaana_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../directives/thaana.directive */ "nJ5Y");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");


















class AddTickerNewsDialogComponent {
    constructor(dialogRef, data, store) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.store = store;
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tickerNews = new _news_models_news__WEBPACK_IMPORTED_MODULE_2__["TickersNews"]();
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
        this.store.dispatch(new _news_store_news_actions__WEBPACK_IMPORTED_MODULE_4__["AddTickerNews"](this.tickerNews));
        this.onAdd.emit();
    }
}
AddTickerNewsDialogComponent.ɵfac = function AddTickerNewsDialogComponent_Factory(t) { return new (t || AddTickerNewsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
AddTickerNewsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddTickerNewsDialogComponent, selectors: [["app-add-ticker-news-dialog"]], inputs: { dhivehiEnabled: "dhivehiEnabled" }, decls: 20, vars: 5, consts: [["color", "secondary", 1, "no-shadow"], ["fxFlex", "", "fxShow", "false", "fxShow.gt-xs", ""], ["fxShow", "false", "fxShow.gt-xs", ""], ["labelPosition", "after", "color", "secondary", 3, "ngModel", "ngModelChange"], ["mat-dialog-content", ""], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-top", "20px"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["appearance", "outline"], ["matInput", "", "mat-autosize", "", "matAutosizeMinRows", "5", "required", "", "name", "dhvInput", 3, "appDnrmsThaana", "ngModel", "ngModelChange"], ["dhvInput", ""], ["align", "end", "mat-dialog-actions", "", "align", "end"], ["mat-button", "", "color", "basic", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function AddTickerNewsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-slide-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTickerNewsDialogComponent_Template_mat_slide_toggle_ngModelChange_5_listener($event) { return ctx.dhivehiEnabled = $event; })("ngModelChange", function AddTickerNewsDialogComponent_Template_mat_slide_toggle_ngModelChange_5_listener() { return ctx.changeLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ticker News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "textarea", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTickerNewsDialogComponent_Template_textarea_ngModelChange_13_listener($event) { return ctx.tickerNews.news = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTickerNewsDialogComponent_Template_button_click_16_listener() { return ctx.closeDialog(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTickerNewsDialogComponent_Template_button_click_18_listener() { return ctx.doAdd(ctx.data.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Add News to ", ctx.data.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dhivehiEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tickerNews.language.language_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appDnrmsThaana", ctx.dhivehiEnabled)("ngModel", ctx.tickerNews.news);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultShowHideDirective"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _directives_thaana_directive__WEBPACK_IMPORTED_MODULE_12__["ThaanaDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTickerNewsDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-ticker-news-dialog',
                templateUrl: './add-ticker-news-dialog.component.html'
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _news_models_news__WEBPACK_IMPORTED_MODULE_2__["TickersNews"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, { dhivehiEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "widY":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "IYfF");
/* harmony import */ var _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../authentication/store/user.actions */ "b7cN");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _shared_services_ds_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/ds.service */ "POxX");
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/models/user */ "NlNA");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");

















const _c0 = function () { return ["/authentication/login/"]; };
function AppHeaderComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function AppHeaderComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mymessage_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.storagePath, "profiles/user/", mymessage_r5.userimage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mymessage_r5.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mymessage_r5.text);
} }
function AppHeaderComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
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
        this.userData = new _shared_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.storagePath = null;
        this.title = 'deepChat';
        this.text = 'first chat record';
        this.chatArray = [];
        this.storagePath = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].storageUrl;
        // get user authentication status
        this.loggedInSub = this.auth.loggedIn$.subscribe(loggedIn => this.logged_in = loggedIn);
        this.store2.select(store => store.UserState).subscribe(userdata => {
            this.userData = userdata.user;
            //this.chantInit();
        });
    }
    logOut() {
        // this.auth.doSignOut();
        this.store.dispatch(new _authentication_store_user_actions__WEBPACK_IMPORTED_MODULE_2__["UserLogout"]());
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_ds_service__WEBPACK_IMPORTED_MODULE_4__["DsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 21, vars: 7, consts: [["mat-icon-button", "", "alt", "log in", "class", "m-r-5", 3, "routerLink", 4, "ngIf"], ["mat-icon-button", "", 1, "m-r-10", 3, "matMenuTriggerFor"], [1, "mymessage"], ["message", "matMenu"], [1, "mailbox"], [1, "message-center"], [3, "config"], ["href", "#", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "class", "m-r-5", 3, "matMenuTriggerFor", 4, "ngIf"], [1, "mymegamenu"], ["profile", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", "alt", "log in", 1, "m-r-5", 3, "routerLink"], [2, "color", "#ffffff"], ["href", "#"], [1, "user-img"], ["alt", "user", "width", "40", 1, "img-circle", 3, "src"], [1, "mail-content"], [1, "mail-desc"], ["mat-icon-button", "", 1, "m-r-5", 3, "matMenuTriggerFor"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppHeaderComponent_button_0_Template, 3, 2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-menu", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "perfect-scrollbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppHeaderComponent_a_9_Template, 8, 4, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppHeaderComponent_button_10_Template, 3, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-menu", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_17_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chatArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _shared_services_ds_service__WEBPACK_IMPORTED_MODULE_4__["DsService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "x8YU":
/*!******************************************************!*\
  !*** ./src/app/authentication/store/user.reducer.ts ***!
  \******************************************************/
/*! exports provided: initialState, reducer, getUserState, getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return getUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.actions */ "b7cN");
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/user */ "NlNA");



const myuser = { user: { email: null, name: null, token: { token: null }, roles: null, roles_a: null, profile: new _shared_models_user__WEBPACK_IMPORTED_MODULE_2__["Profile"]() } };
const initialState = myuser;
function reducer(state = initialState, action) {
    switch (action.type) {
        case _user_actions__WEBPACK_IMPORTED_MODULE_1__["USER_LOGIN"]: {
            return Object.assign({}, state);
        }
        case _user_actions__WEBPACK_IMPORTED_MODULE_1__["USER_LOGIN_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { user: action.payload });
        }
        case _user_actions__WEBPACK_IMPORTED_MODULE_1__["USER_GET_SETTINGS"]: {
            return Object.assign({}, state);
        }
        case _user_actions__WEBPACK_IMPORTED_MODULE_1__["USER_GET_SETTINGS_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { user: action.payload });
        }
        case _user_actions__WEBPACK_IMPORTED_MODULE_1__["USER_LOGOUT"]: {
            // return {
            //   ...state
            // };
            return initialState;
        }
        case _user_actions__WEBPACK_IMPORTED_MODULE_1__["USER_LOGOUT_SUCCESS"]: {
            // return {
            //   // ...state,
            //   // user: action.payload,
            //   user: { email: null, name: null, token: {token: null}, roles: null, roles_a: null }
            // };
            return initialState;
        }
        case _user_actions__WEBPACK_IMPORTED_MODULE_1__["SERVER_USER_GET_SETTINGS"]: {
            return Object.assign({}, state);
        }
        case _user_actions__WEBPACK_IMPORTED_MODULE_1__["SERVER_USER_GET_SETTINGS_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { user: action.payload });
        }
        default: {
            return state;
        }
    }
}
const getUserState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('userState');
const getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, (state) => state.user);


/***/ }),

/***/ "xXHC":
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "JNRg");




class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) { return new (t || AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"])); };
AccordionAnchorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AccordionAnchorDirective, selectors: [["", "appAccordionToggle", ""]], hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionAnchorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAccordionToggle]'
            }]
    }], function () { return [{ type: _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]]
            }] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/compiler */ "1uSB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map