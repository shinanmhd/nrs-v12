(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
    /***/
    "+R+I":
    /*!***************************************************!*\
      !*** ./src/app/admin/models/admin-news.models.ts ***!
      \***************************************************/

    /*! exports provided: NewsListTemplate, SettingsKey */

    /***/
    function RI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsListTemplate", function () {
        return NewsListTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsKey", function () {
        return SettingsKey;
      });

      var NewsListTemplate = function NewsListTemplate() {
        _classCallCheck(this, NewsListTemplate);

        this.list_name = '';
      };

      var SettingsKey = function SettingsKey() {
        _classCallCheck(this, SettingsKey);
      };
      /***/

    },

    /***/
    "4vHk":
    /*!**********************************************!*\
      !*** ./src/app/admin/store/admin.effects.ts ***!
      \**********************************************/

    /*! exports provided: AdminEffects */

    /***/
    function vHk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminEffects", function () {
        return AdminEffects;
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


      var _admin_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./admin.actions */
      "oSKX");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/user.service */
      "CHqn");

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

      var AdminEffects = function AdminEffects(actions$, userService) {
        var _this = this;

        _classCallCheck(this, AdminEffects);

        this.actions$ = actions$;
        this.userService = userService; //Effects go here

        this.GetMyNews$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_admin_actions__WEBPACK_IMPORTED_MODULE_4__["GET_USERS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) {
          return _this.userService.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
            //console.log(data);
            return new _admin_actions__WEBPACK_IMPORTED_MODULE_4__["GetUsersSuccess"](data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _admin_actions__WEBPACK_IMPORTED_MODULE_4__["GetUsersError"]());
          }));
        }));
        this.AssignRole$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_admin_actions__WEBPACK_IMPORTED_MODULE_4__["ASSIGN_ROLE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) {
          return _this.userService.assignRole({
            user_id: action.payload.user_id,
            role_id: action.payload.role_id
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
            console.log(data);
            return new _admin_actions__WEBPACK_IMPORTED_MODULE_4__["AssignRoleSuccess"](data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _admin_actions__WEBPACK_IMPORTED_MODULE_4__["AssignRoleError"]());
          }));
        }));
        this.RemoveRole$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_admin_actions__WEBPACK_IMPORTED_MODULE_4__["REMOVE_ROLE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) {
          return _this.userService.removeRole({
            user_id: action.payload.user_id,
            role_id: action.payload.role_id
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
            console.log(data);
            return new _admin_actions__WEBPACK_IMPORTED_MODULE_4__["RemoveRoleSuccess"](data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _admin_actions__WEBPACK_IMPORTED_MODULE_4__["RemovenRoleError"]());
          }));
        }));
        this.CreateUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_admin_actions__WEBPACK_IMPORTED_MODULE_4__["CREATE_USER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) {
          return _this.userService.createUser(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
            console.log(data);
            return new _admin_actions__WEBPACK_IMPORTED_MODULE_4__["CreateUserSuccess"](data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _admin_actions__WEBPACK_IMPORTED_MODULE_4__["CreateUserError"]());
          }));
        }));
        this.UpdateUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_admin_actions__WEBPACK_IMPORTED_MODULE_4__["UPDATE_USER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (action) {
          return _this.userService.updateUser(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
            console.log(data);
            return new _admin_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateUserSuccess"](data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _admin_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateUserError"]());
          }));
        }));
      };

      AdminEffects.ɵfac = function AdminEffects_Factory(t) {
        return new (t || AdminEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
      };

      AdminEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AdminEffects,
        factory: AdminEffects.ɵfac
      });

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])], AdminEffects.prototype, "GetMyNews$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])], AdminEffects.prototype, "AssignRole$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])], AdminEffects.prototype, "RemoveRole$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])], AdminEffects.prototype, "CreateUser$", void 0);

      __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])], AdminEffects.prototype, "UpdateUser$", void 0);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
          }];
        }, {
          GetMyNews$: [],
          AssignRole$: [],
          RemoveRole$: [],
          CreateUser$: [],
          UpdateUser$: []
        });
      })();
      /***/

    },

    /***/
    "8UFg":
    /*!**********************************************!*\
      !*** ./src/app/admin/user/user.component.ts ***!
      \**********************************************/

    /*! exports provided: UserComponent */

    /***/
    function UFg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
        return UserComponent;
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


      var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/user.model */
      "b/Lf");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _store_admin_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../store/admin.actions */
      "oSKX");
      /* harmony import */


      var _assign_role_dialog_assign_role_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../assign-role-dialog/assign-role-dialog.component */
      "PLLj");
      /* harmony import */


      var _add_user_dialog_add_user_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../add-user-dialog/add-user-dialog.component */
      "c3U6");
      /* harmony import */


      var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/services/session.service */
      "mZtN");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");

      function UserComponent_mat_nav_list_16_mat_list_item_1_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserComponent_mat_nav_list_16_mat_list_item_1_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "account_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserComponent_mat_nav_list_16_mat_list_item_1_mat_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserComponent_mat_nav_list_16_mat_list_item_1_mat_icon_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "security");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserComponent_mat_nav_list_16_mat_list_item_1_mat_icon_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "security");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserComponent_mat_nav_list_16_mat_list_item_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_mat_nav_list_16_mat_list_item_1_Template_mat_list_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var user_r7 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.onSelect(user_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_mat_nav_list_16_mat_list_item_1_mat_icon_1_Template, 2, 0, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserComponent_mat_nav_list_16_mat_list_item_1_mat_icon_2_Template, 2, 0, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserComponent_mat_nav_list_16_mat_list_item_1_mat_icon_3_Template, 2, 0, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserComponent_mat_nav_list_16_mat_list_item_1_mat_icon_4_Template, 2, 0, "mat-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserComponent_mat_nav_list_16_mat_list_item_1_mat_icon_5_Template, 2, 0, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r7 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", user_r7.email == ctx_r6.currentUserEmail ? "rgba(127, 255, 212, 0.2)" : "rgba(255, 255, 255, 0)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r7.roles.length > 0 && !ctx_r6.checkRight("admin", user_r7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r7.roles.length > 0 && ctx_r6.checkRight("news-editor", user_r7) || ctx_r6.checkRight("n-editor", user_r7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r7.roles.length <= 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.checkRight("admin", user_r7) && ctx_r6.checkRight("create-user", user_r7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.checkRight("admin", user_r7) && !ctx_r6.checkRight("create-user", user_r7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.email);
        }
      }

      function UserComponent_mat_nav_list_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_mat_nav_list_16_mat_list_item_1_Template, 10, 9, "mat-list-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.users);
        }
      }

      function UserComponent_span_22_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 37);
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r15.storagePath + "profiles/default.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function UserComponent_span_22_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 37);
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r16.storagePath + "profiles/user/" + ctx_r16.selectedUser.profile.profilepic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function UserComponent_span_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserComponent_span_22_img_1_Template, 1, 1, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserComponent_span_22_img_2_Template, 1, 1, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.selectedUser.profile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedUser.profile);
        }
      }

      function UserComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.selectedUser.name);
        }
      }

      function UserComponent_div_26_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var activity_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r20.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r20.log_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r20.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r20.subject_type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 5, activity_r20.created_at, "medium"));
        }
      }

      function UserComponent_div_26_div_57_mat_chip_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var perm_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](perm_r23.name);
        }
      }

      function UserComponent_div_26_div_57_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserComponent_div_26_div_57_mat_chip_9_Template, 2, 1, "mat-chip", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_26_div_57_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var role_r21 = ctx.$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r24.onRemoveRole(role_r21.id, ctx_r24.selectedUser.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var role_r21 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r21.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r21.display_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r21.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", role_r21.permissions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r19.selectedUser.email == ctx_r19.currentUserEmail || !ctx_r19.checkMyRight("create-user"));
        }
      }

      function UserComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 43, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_div_26_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.updateUser.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_div_26_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.updateUser.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_div_26_Template_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.updateUser.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_26_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.onUpdateProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Update Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-tab", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Log Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Log Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Subject Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Log Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, UserComponent_div_26_div_40_Template, 12, 8, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-tab", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Role Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Permission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, UserComponent_div_26_div_57_Template, 14, 5, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.updateUser.name)("disabled", !ctx_r4.checkMyRight("create-user"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.updateUser.email)("disabled", ctx_r4.selectedUser.email == ctx_r4.currentUserEmail || !ctx_r4.checkMyRight("create-user"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.updateUser.password)("disabled", !ctx_r4.checkMyRight("create-user"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r17.form.valid || !ctx_r4.checkMyRight("create-user"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Last 200 Activity performed by ", ctx_r4.selectedUser.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.selectedUser.activity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.selectedUser.roles);
        }
      }

      function UserComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 39);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "side-panel-opened": a0,
          "side-panel-closed": a1
        };
      };

      var UserComponent = /*#__PURE__*/function () {
        function UserComponent(store, updates$, dialog, sessionService, snackBar) {
          _classCallCheck(this, UserComponent);

          this.store = store;
          this.updates$ = updates$;
          this.dialog = dialog;
          this.sessionService = sessionService;
          this.snackBar = snackBar;
          this.sidePanelOpened = true;
          this.users = [];
          this.selectedUser = null;
          this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
          this.updateUser = null;
        }

        _createClass(UserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.storagePath = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].storageUrl;
            this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_6__["GetUsers"]()); // update selected list selection

            this.updates$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_6__["GET_USERS_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroySubject$)).subscribe(function () {
              var sub = _this2.store.select(function (adminStore) {
                return adminStore.Admin.users;
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(_this2.destroySubject$)).subscribe(function (userList) {
                _this2.users = userList;
              });
            }); //get current user email

            this.store.select(function (store) {
              return store.UserState.user.email;
            }) //.take(1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroySubject$)).subscribe(function (email) {
              return _this2.currentUserEmail = email;
            });
          }
        }, {
          key: "onAddRole",
          value: function onAddRole() {
            var _this3 = this;

            var dialogRef = this.dialog.open(_assign_role_dialog_assign_role_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AssignRoleDialogComponent"], {
              width: '95%',
              height: '60%',
              maxHeight: '95%',
              data: this.selectedUser
            });
            dialogRef.componentInstance.onAdd.subscribe(function (result) {
              _this3.updates$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_6__["ASSIGN_ROLE_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(_this3.destroySubject$)).subscribe(function () {
                _this3.openSnackBar('Role Added to User!');

                _this3.store.select(function (store) {
                  return store.Admin.users;
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(_this3.destroySubject$)).subscribe(function (users) {
                  users.forEach(function (user) {
                    if (user.id === result.user_id) {
                      _this3.selectedUser = user;
                    }
                  });
                });
              });
            });
          }
        }, {
          key: "onRemoveRole",
          value: function onRemoveRole(roleid, userid) {
            var _this4 = this;

            this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_6__["RemoveRole"]({
              user_id: this.selectedUser.id,
              role_id: roleid
            }));
            this.updates$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_6__["REMOVE_ROLE_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroySubject$)).subscribe(function () {
              _this4.openSnackBar('Role Removed from User!');

              _this4.store.select(function (store) {
                return store.Admin.users;
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(_this4.destroySubject$)).subscribe(function (users) {
                users.forEach(function (user) {
                  if (user.id === userid) {
                    _this4.selectedUser = user;
                  }
                });
              });
            });
          }
        }, {
          key: "onAddUser",
          value: function onAddUser() {
            var _this5 = this;

            var dialogRef = this.dialog.open(_add_user_dialog_add_user_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AddUserDialogComponent"], {
              width: '40%',
              height: 'auto',
              maxHeight: '95%'
            });
            dialogRef.componentInstance.onAdd.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroySubject$)).subscribe(function (result) {
              _this5.updates$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_6__["CREATE_USER_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(_this5.destroySubject$)).subscribe(function () {
                _this5.openSnackBar('User Created!'); // this.store.select(store => store.Admin.users)
                // .subscribe(users => {
                //   users.forEach((user: Users) => {
                //     if (user.id === this.selectedUser.id) {
                //       this.selectedUser = user;
                //     }
                //   });
                // });

              });
            });
          }
        }, {
          key: "checkRight",
          value: function checkRight(role, user) {
            var re = false;
            user.roles.forEach(function (urole) {
              if (urole.name === role) {
                re = true;
              }
            });
            return re;
          }
        }, {
          key: "isOver",
          value: function isOver() {
            return window.matchMedia("(max-width: 960px)").matches;
          }
        }, {
          key: "onSelect",
          value: function onSelect(user) {
            this.selectedUser = user;
            this.updateUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["Users"](this.selectedUser.name, this.selectedUser.email, null);
            this.updateUser.id = this.selectedUser.id;
          }
        }, {
          key: "onUpdateProfile",
          value: function onUpdateProfile() {
            var _this6 = this;

            this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateUser"](this.updateUser)); // update selected list selection

            this.updates$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_6__["UPDATE_USER_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroySubject$)).subscribe(function () {
              //show notification
              _this6.openSnackBar('User Data Updated!');

              var sub = _this6.store.select(function (adminStore) {
                return adminStore.Admin.users;
              }).subscribe(function (userList) {
                _this6.users = userList;
              });
            });
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
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroySubject$.next();
          }
        }, {
          key: "checkMyRight",
          value: function checkMyRight(right) {
            if (this.sessionService.checkRole('ticker-editor')) {
              return true;
            } else if (this.sessionService.checkRole('news-editor')) {
              return true;
            }

            return false;
          }
        }]);

        return UserComponent;
      }();

      UserComponent.ɵfac = function UserComponent_Factory(t) {
        return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
      };

      UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserComponent,
        selectors: [["app-user"]],
        decls: 32,
        vars: 13,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center start"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex", "100"], [1, "mat-card-top"], [3, "ngClass"], [3, "mode", "opened", "open", "close"], ["chatnav", ""], ["color", "primary", 1, "no-shadow"], ["fxLayout", "row", "fxFlex", "100"], [1, "m-t-0", "font-14"], ["mat-icon-button", "", 1, "mr-1"], ["mat-mini-fab", "", "color", "basic", "align", "end", "matTooltip", "Add User", "matTooltipPosition", "below", 1, "mr-1", 3, "disabled", "click"], [4, "ngIf"], ["color", "warn", 1, "bg-success", "no-shadow", "chat-right-panel"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "center center"], ["mat-icon-button", "", 1, "mr-1", 3, "click"], ["class", "top-avatar m-r-10", 4, "ngIf"], ["fxFlex", ""], ["class", "font-14", 4, "ngIf"], [1, "chat-middle-box"], ["style", "min-height: 500px;", 4, "ngIf"], [1, "chat-footer"], ["align", "end"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "background-color", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["color", "basic", 4, "ngIf"], ["color", "primary", 4, "ngIf"], ["class", "label-light-warning", 4, "ngIf"], ["color", "warn", 4, "ngIf"], ["matLine", ""], ["matLine", "", 1, "text-muted"], ["color", "basic"], ["color", "primary"], [1, "label-light-warning"], ["color", "warn"], [1, "top-avatar", "m-r-10"], ["class", "img-circle", 3, "src", 4, "ngIf"], [1, "img-circle", 3, "src"], [1, "font-14"], [2, "min-height", "500px"], ["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-lg", "100", "fxFlex.gt-md", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["label", "Profile"], [1, "basic-form"], ["profileForm", "ngForm"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["matInput", "", "placeholder", "Name", "required", "", "name", "profileName", 3, "ngModel", "disabled", "ngModelChange"], ["matInput", "", "placeholder", "Email", "required", "", "type", "email", "name", "profileEmail", 3, "ngModel", "disabled", "ngModelChange"], ["matInput", "", "placeholder", "Password", "type", "password", "name", "profilePassword", 3, "ngModel", "disabled", "ngModelChange"], ["label", "Activity"], [1, "table-rasponsive"], [1, "table"], [1, "table-header"], [1, "header__item", "column-log_id"], [1, "header__item", "column-log_name"], [1, "header__item", "column-description"], [1, "header__item", "column-subject"], [1, "header__item", "column-date"], [1, "table-content"], ["class", "table-row", 4, "ngFor", "ngForOf"], ["label", "Roles & Permissions"], [1, "header__item", "column-role"], [1, "header__item", "column-name"], [1, "header__item", "column-detail"], [1, "header__item", "column-permission"], [1, "header__item", "column-actions"], [1, "table-row"], [1, "table-data", "column-log_id"], [1, "table-data", "column-log_name"], ["matTooltipPosition", "below", 1, "table-data", "column-description"], ["matTooltipPosition", "below", 1, "table-data", "column-subject"], [1, "table-data", "column-date"], [1, "table-data", "column-role"], [1, "table-data", "column-name"], ["matTooltipPosition", "below", 1, "table-data", "column-detail"], ["matTooltipPosition", "below", 1, "table-data", "column-permissions"], ["color", "primary", 4, "ngFor", "ngForOf"], [1, "table-data", "column-actions"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Remove Role", "matTooltipPosition", "below", 3, "disabled", "click"], ["aria-label", "Edit"]],
        template: function UserComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("open", function UserComponent_Template_mat_sidenav_open_4_listener() {
              return ctx.sidePanelOpened = true;
            })("close", function UserComponent_Template_mat_sidenav_close_4_listener() {
              return ctx.sidePanelOpened = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "contacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Users ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_button_click_13_listener() {
              return ctx.onAddUser();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "person_add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserComponent_mat_nav_list_16_Template, 2, 1, "mat-nav-list", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-toolbar", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_button_click_19_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "short_text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UserComponent_span_22_Template, 3, 2, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UserComponent_div_24_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-content", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserComponent_div_26_Template, 58, 10, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UserComponent_div_27_Template, 1, 0, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-actions", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_button_click_30_listener() {
              return ctx.onAddRole();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Assign Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx.sidePanelOpened, !ctx.sidePanelOpened));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.isOver() ? "over" : "side")("opened", !ctx.isOver());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.checkMyRight("create-user"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users.length !== 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectedUser || !ctx.checkMyRight("create-user"));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__["DefaultClassDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardActions"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatLine"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardSubtitle"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__["MatChip"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]],
        styles: [".ngx-datatable.datatable-body.datatable-row-wrapper.datatable-body-row.datatable-row-group.datatable-body-cell[_ngcontent-%COMP%]   .ngx-datatable[_ngcontent-%COMP%]{\n  padding: 2px;\n  font-family: 'Courier New', Courier, monospace;\n}\n\n\n\n\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px solid #EEEEEE;\n}\n\n\n\n\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 10px 0;\n  font-size: 12px;\n  border-bottom: 1px solid #EEEEEE;\n}\n\n\n\n\n\n.table-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding-left: 10px 0;\n  border-bottom: 1px solid #EEEEEE;\n  transition: all 0.2s ease-in-out;\n}\n\n\n\n\n\n.table-row[_ngcontent-%COMP%]:hover{\n  background-color: rgba(97, 97, 97, 0.068);\n}\n\n\n\n\n\n\n\n\n\n\n\n.table-row.status_breaker[_ngcontent-%COMP%]{\n  background-color: rgba(127, 255, 212, 0.2)\n}\n\n\n\n\n\n.table-row[_ngcontent-%COMP%]:hover.status_breaker{\n  background-color: rgba(127, 255, 212, 0.7)\n}\n\n\n\n\n\n.table-row[_ngcontent-%COMP%]:nth-of-type(odd) {\n  \n}\n\n\n\n\n\n.table-data[_ngcontent-%COMP%], .header__item[_ngcontent-%COMP%] {\n  flex: 1 1 20%;\n  text-align: center;\n  padding: 5px;\n}\n\n\n\n\n\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 12px;\n}\n\n\n\n\n\n.filter__link[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n\n\n\n\n.filter__link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: -18px;\n  color: white;\n  font-size: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n\n\n\n\n.filter__link.desc[_ngcontent-%COMP%]::after {\n  content: \"(desc)\";\n}\n\n\n\n\n\n.filter__link.asc[_ngcontent-%COMP%]::after {\n  content: \"(asc)\";\n}\n\n\n\n\n\n.column-role[_ngcontent-%COMP%]{\n  flex: 0 0 15%;\n  font-size: 12px;\n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n\n\n\n\n.column-name[_ngcontent-%COMP%]{\n  flex: 0 0 15%;\n  font-size: 12px;\n  \n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n\n\n\n\n.column-detail[_ngcontent-%COMP%]{\n  flex: 0 0 30%;\n  font-size: 12px;\n}\n\n\n\n\n\n.column-permissions[_ngcontent-%COMP%]{\n  flex: 0 0 30%;\n  font-size: 12px;\n  text-align: center;\n}\n\n\n\n\n\n.column-actions[_ngcontent-%COMP%]{\n  flex: 0 0 10%;\n}\n\n\n\n\n\n\n\n\n\n\n\n.column-log_id[_ngcontent-%COMP%]{\n  flex: 0 0 10%;\n  font-size: 12px;\n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n\n\n\n\n.column-log_name[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n  font-size: 12px;\n  \n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n\n\n\n\n.column-description[_ngcontent-%COMP%]{\n  flex: 0 0 25%;\n  font-size: 12px;\n}\n\n\n\n\n\n.column-subject[_ngcontent-%COMP%]{\n  flex: 0 0 25%;\n  font-size: 12px;\n}\n\n\n\n\n\n.column-date[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osOENBQThDO0FBQ2hEOzs7Ozs7QUFNQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7Ozs7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7Ozs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQ0FBZ0M7RUFLaEMsZ0NBQWdDO0FBQ2xDOzs7Ozs7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7Ozs7O0FBRUEsWUFBWTs7Ozs7O0FBQ1o7RUFDRTtBQUNGOzs7Ozs7QUFDQTtFQUNFO0FBQ0Y7Ozs7OztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOzs7Ozs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7Ozs7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0RBQWdEO0VBQ2hELGVBQWU7QUFDakI7Ozs7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7Ozs7OztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixRQUFRO0VBQ1IsMkJBQTJCO0FBQzdCOzs7Ozs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7Ozs7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7Ozs7OztBQUtBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0RBQWdEO0FBQ2xEOzs7Ozs7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixnREFBZ0Q7QUFDbEQ7Ozs7OztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7Ozs7OztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7Ozs7OztBQUVBO0VBQ0UsYUFBYTtBQUNmOzs7Ozs7QUFHQSxxQkFBcUI7Ozs7OztBQUNyQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtBQUNsRDs7Ozs7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsZ0RBQWdEO0FBQ2xEOzs7Ozs7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOzs7Ozs7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOzs7Ozs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmd4LWRhdGF0YWJsZS5kYXRhdGFibGUtYm9keS5kYXRhdGFibGUtcm93LXdyYXBwZXIuZGF0YXRhYmxlLWJvZHktcm93LmRhdGF0YWJsZS1yb3ctZ3JvdXAuZGF0YXRhYmxlLWJvZHktY2VsbCAubmd4LWRhdGF0YWJsZXtcbiAgcGFkZGluZzogMnB4O1xuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG5cblxuXG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDBweCBzb2xpZCAjRUVFRUVFO1xufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRUVFRTtcbn1cblxuLnRhYmxlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUVFRUU7XG5cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLnRhYmxlLXJvdzpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NywgOTcsIDk3LCAwLjA2OCk7XG59XG5cbi8qIEJSRUFLRVIgKi9cbi50YWJsZS1yb3cuc3RhdHVzX2JyZWFrZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyNTUsIDIxMiwgMC4yKVxufVxuLnRhYmxlLXJvdzpob3Zlci5zdGF0dXNfYnJlYWtlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLCAwLjcpXG59XG5cbi50YWJsZS1yb3c6bnRoLW9mLXR5cGUob2RkKSB7XG4gIC8qYmFja2dyb3VuZDogI0VFRUVFRTsqL1xufVxuXG4udGFibGUtZGF0YSxcbi5oZWFkZXJfX2l0ZW0ge1xuICBmbGV4OiAxIDEgMjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmhlYWRlcl9faXRlbSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZmlsdGVyX19saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG59XG4uZmlsdGVyX19saW5rOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5maWx0ZXJfX2xpbmsuZGVzYzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIihkZXNjKVwiO1xufVxuLmZpbHRlcl9fbGluay5hc2M6OmFmdGVyIHtcbiAgY29udGVudDogXCIoYXNjKVwiO1xufVxuXG5cblxuXG4uY29sdW1uLXJvbGV7XG4gIGZsZXg6IDAgMCAxNSU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xufVxuLmNvbHVtbi1uYW1le1xuICBmbGV4OiAwIDAgMTUlO1xuICBmb250LXNpemU6IDEycHg7XG4gIC8qanVzdGlmeS1jb250ZW50OmZsZXgtZW5kOyovXG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbn1cbi5jb2x1bW4tZGV0YWlse1xuICBmbGV4OiAwIDAgMzAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29sdW1uLXBlcm1pc3Npb25ze1xuICBmbGV4OiAwIDAgMzAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbHVtbi1hY3Rpb25ze1xuICBmbGV4OiAwIDAgMTAlO1xufVxuXG5cbi8qIGxvZyB0YWJsZSBzdHlsZXMgKi9cbi5jb2x1bW4tbG9nX2lke1xuICBmbGV4OiAwIDAgMTAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbn1cbi5jb2x1bW4tbG9nX25hbWV7XG4gIGZsZXg6IDAgMCAyMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLypqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7Ki9cbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xufVxuLmNvbHVtbi1kZXNjcmlwdGlvbntcbiAgZmxleDogMCAwIDI1JTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbHVtbi1zdWJqZWN0e1xuICBmbGV4OiAwIDAgMjUlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb2x1bW4tZGF0ZXtcbiAgZmxleDogMCAwIDIwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
          }, {
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "CHqn":
    /*!************************************************!*\
      !*** ./src/app/admin/services/user.service.ts ***!
      \************************************************/

    /*! exports provided: UserService */

    /***/
    function CHqn(module, __webpack_exports__, __webpack_require__) {
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
        } // get selected list


        _createClass(UserService, [{
          key: "getUsers",
          value: function getUsers() {
            return this.http.get(this.apiUrl + 'management-console/users');
          } // get all roles for assignment

        }, {
          key: "getRoles",
          value: function getRoles() {
            return this.http.get(this.apiUrl + 'management-console/user/get-roles');
          } // assign role to user

        }, {
          key: "assignRole",
          value: function assignRole(user_role) {
            return this.http.put(this.apiUrl + 'management-console/user/assign-role', user_role);
          } // remove role from user

        }, {
          key: "removeRole",
          value: function removeRole(user_role) {
            return this.http.put(this.apiUrl + 'management-console/user/remove-role', user_role);
          } // create user

        }, {
          key: "createUser",
          value: function createUser(user) {
            return this.http.post(this.apiUrl + 'management-console/user/create', user);
          } // update user

        }, {
          key: "updateUser",
          value: function updateUser(user) {
            return this.http.put(this.apiUrl + 'management-console/user/update', user);
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
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
    "FxsZ":
    /*!************************************************************************************************!*\
      !*** ./src/app/admin/add-news-list-template-dialog/add-news-list-template-dialog.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: AddNewsListDialogComponent */

    /***/
    function FxsZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewsListDialogComponent", function () {
        return AddNewsListDialogComponent;
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


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/user.service */
      "CHqn");
      /* harmony import */


      var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/user.model */
      "b/Lf");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _models_admin_news_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../models/admin-news.models */
      "+R+I");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
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

      var AddNewsListDialogComponent = /*#__PURE__*/function () {
        function AddNewsListDialogComponent(dialogRef, data, store, userService, updates$) {
          _classCallCheck(this, AddNewsListDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.store = store;
          this.userService = userService;
          this.updates$ = updates$;
          this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.template = new _models_admin_news_models__WEBPACK_IMPORTED_MODULE_6__["NewsListTemplate"]();
        }

        _createClass(AddNewsListDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.template.enabled = true;
          }
        }, {
          key: "addTemplate",
          value: function addTemplate() {
            // this.store.dispatch(new adminActions.CreateUser(this.user));
            this.onAdd.emit(this.template);
            this.dialogRef.close(true);
          }
        }, {
          key: "closeDialog",
          value: function closeDialog(confirmation) {
            this.dialogRef.close(confirmation);
          }
        }]);

        return AddNewsListDialogComponent;
      }();

      AddNewsListDialogComponent.ɵfac = function AddNewsListDialogComponent_Factory(t) {
        return new (t || AddNewsListDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"]));
      };

      AddNewsListDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddNewsListDialogComponent,
        selectors: [["add-news-list-template-dialog"]],
        decls: 16,
        vars: 2,
        consts: [["mat-dialog-title", ""], [1, "basic-form"], ["userForm", "ngForm"], ["mat-dialog-content", ""], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-top", "20px"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["appearance", "outline"], ["matInput", "", "mat-autosize", "", "required", "", "name", "templateName", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "color", "basic", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
        template: function AddNewsListDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add News List Template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Template Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNewsListDialogComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.template.list_name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewsListDialogComponent_Template_button_click_12_listener() {
              return ctx.closeDialog(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewsListDialogComponent_Template_button_click_14_listener() {
              return ctx.addTemplate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add Template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.template.list_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]],
        styles: [".table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px solid #EEEEEE;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 10px 0;\n  font-size: 12px;\n  border-bottom: 1px solid #EEEEEE;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding-left: 10px 0;\n  border-bottom: 1px solid #EEEEEE;\n  transition: all 0.2s ease-in-out;\n}\n\n.table-row[_ngcontent-%COMP%]:hover{\n  background-color: rgba(97, 97, 97, 0.068);\n}\n\n\n\n.table-row.role_assigned[_ngcontent-%COMP%]{\n  background-color: rgba(127, 255, 212, 0.2)\n}\n\n.table-row[_ngcontent-%COMP%]:hover.role_assigned{\n  background-color: rgba(127, 255, 212, 0.7)\n}\n\n\n\n.table-data[_ngcontent-%COMP%], .header__item[_ngcontent-%COMP%] {\n  flex: 1 1 20%;\n  text-align: center;\n  padding: 5px;\n}\n\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 12px;\n}\n\n.filter__link[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n.filter__link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: -18px;\n  color: white;\n  font-size: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.filter__link.desc[_ngcontent-%COMP%]::after {\n  content: \"(desc)\";\n}\n\n.filter__link.asc[_ngcontent-%COMP%]::after {\n  content: \"(asc)\";\n}\n\n.column-role[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n  font-size: 12px;\n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.column-name[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n  font-size: 12px;\n  \n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.column-detail[_ngcontent-%COMP%]{\n  flex: 0 0 40%;\n  font-size: 12px;\n}\n\n.column-actions[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkLW5ld3MtbGlzdC10ZW1wbGF0ZS1kaWFsb2cvYWRkLW5ld3MtbGlzdC10ZW1wbGF0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGdDQUFnQztFQUtoQyxnQ0FBZ0M7QUFDbEM7O0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUEsWUFBWTs7QUFDWjtFQUNFO0FBQ0Y7O0FBQ0E7RUFDRTtBQUNGOztBQUVBOztHQUVHOztBQUVIOztFQUVFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdEQUFnRDtFQUNoRCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFFBQVE7RUFDUiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBS0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnREFBZ0Q7QUFDbEQ7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsZ0RBQWdEO0FBQ2xEOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZGQtbmV3cy1saXN0LXRlbXBsYXRlLWRpYWxvZy9hZGQtbmV3cy1saXN0LXRlbXBsYXRlLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwcHggc29saWQgI0VFRUVFRTtcbn1cblxuLnRhYmxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUVFRUU7XG59XG5cbi50YWJsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFRUVFO1xuXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi50YWJsZS1yb3c6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMC4wNjgpO1xufVxuXG4vKiBCUkVBS0VSICovXG4udGFibGUtcm93LnJvbGVfYXNzaWduZWR7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyNTUsIDIxMiwgMC4yKVxufVxuLnRhYmxlLXJvdzpob3Zlci5yb2xlX2Fzc2lnbmVke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuNylcbn1cblxuLyogLnRhYmxlLXJvdzpudGgtb2YtdHlwZShvZGQpIHtcbiAgYmFja2dyb3VuZDogI0VFRUVFRTtcbn0gKi9cblxuLnRhYmxlLWRhdGEsXG4uaGVhZGVyX19pdGVtIHtcbiAgZmxleDogMSAxIDIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5oZWFkZXJfX2l0ZW0ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZpbHRlcl9fbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xufVxuLmZpbHRlcl9fbGluazo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uZmlsdGVyX19saW5rLmRlc2M6OmFmdGVyIHtcbiAgY29udGVudDogXCIoZGVzYylcIjtcbn1cbi5maWx0ZXJfX2xpbmsuYXNjOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKGFzYylcIjtcbn1cblxuXG5cblxuLmNvbHVtbi1yb2xle1xuICBmbGV4OiAwIDAgMjAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbn1cbi5jb2x1bW4tbmFtZXtcbiAgZmxleDogMCAwIDIwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAvKmp1c3RpZnktY29udGVudDpmbGV4LWVuZDsqL1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG59XG4uY29sdW1uLWRldGFpbHtcbiAgZmxleDogMCAwIDQwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29sdW1uLWFjdGlvbnN7XG4gIGZsZXg6IDAgMCAyMCU7XG59XG5cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNewsListDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'add-news-list-template-dialog',
            templateUrl: './add-news-list-template-dialog.component.html',
            styleUrls: ['./add-news-list-template-dialog.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: _models_user_model__WEBPACK_IMPORTED_MODULE_4__["Users"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "II7t":
    /*!********************************************************!*\
      !*** ./src/app/admin/news-list/news-list.component.ts ***!
      \********************************************************/

    /*! exports provided: NewsListComponent */

    /***/
    function II7t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsListComponent", function () {
        return NewsListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/news.service */
      "jgUR");
      /* harmony import */


      var _models_admin_news_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/admin-news.models */
      "+R+I");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _add_news_list_template_dialog_add_news_list_template_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../add-news-list-template-dialog/add-news-list-template-dialog.component */
      "FxsZ");
      /* harmony import */


      var _shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/component/confirm-dialog/confirm-dialog.component */
      "l8SP");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function NewsListComponent_div_16_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsListComponent_div_16_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var list_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.enable(list_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NewsListComponent_div_16_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsListComponent_div_16_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var list_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.disable(list_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "do_not_disturb_on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NewsListComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsListComponent_div_16_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var list_r2 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.onDeleteTemplate(list_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewsListComponent_div_16_button_7_Template, 3, 0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NewsListComponent_div_16_button_8_Template, 3, 0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("table-row status_", list_r2.enabled, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r2.list_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !list_r2.enabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r2.enabled);
        }
      }

      var NewsListComponent = /*#__PURE__*/function () {
        function NewsListComponent(adminNewsService, dialog, snackBar) {
          _classCallCheck(this, NewsListComponent);

          this.adminNewsService = adminNewsService;
          this.dialog = dialog;
          this.snackBar = snackBar;
          this.templates = [];
          this.generationTime = new _models_admin_news_models__WEBPACK_IMPORTED_MODULE_2__["SettingsKey"]();
          this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        }

        _createClass(NewsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.generationTime.key = 'list_generation_time';
            this.adminNewsService.getListTemplates().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroySubject$)).subscribe(function (templates) {
              return _this7.templates = templates;
            });
            this.adminNewsService.getListGenTime().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroySubject$)).subscribe(function (time) {
              return _this7.generationTime.value = time.value;
            });
          }
        }, {
          key: "enable",
          value: function enable(id) {
            var _this8 = this;

            this.adminNewsService.enableListTemplate({
              template_id: id
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroySubject$)).subscribe(function (data) {
              _this8.templates = data;
            });
          }
        }, {
          key: "disable",
          value: function disable(id) {
            var _this9 = this;

            this.adminNewsService.disableListTemplate({
              template_id: id
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroySubject$)).subscribe(function (data) {
              _this9.templates = data;
            });
          }
        }, {
          key: "updateTime",
          value: function updateTime() {
            var _this10 = this;

            this.adminNewsService.setSettingsKey(this.generationTime).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroySubject$)).subscribe(function (data) {
              _this10.generationTime = data;

              _this10.openSnackBar('List Generations Time updated!');
            });
          }
        }, {
          key: "onAddTemplate",
          value: function onAddTemplate() {
            var _this11 = this;

            var dialogRef = this.dialog.open(_add_news_list_template_dialog_add_news_list_template_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddNewsListDialogComponent"], {
              width: '40%',
              height: 'auto',
              maxHeight: '95%'
            });
            dialogRef.componentInstance.onAdd.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroySubject$)).subscribe(function (result) {
              _this11.adminNewsService.createListTemplate(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(_this11.destroySubject$)).subscribe(function (data) {
                _this11.templates = data;
              });
            });
          }
        }, {
          key: "onDeleteTemplate",
          value: function onDeleteTemplate(id) {
            var _this12 = this;

            var dialogRef = this.dialog.open(_shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
              width: '350px',
              data: {
                title: 'Delete News List Template',
                message: 'Are you sure you want to delete this Template?'
              }
            });
            dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroySubject$)).subscribe(function (result) {
              dialogRef = null;

              if (result) {
                _this12.adminNewsService.deleteListTemplate(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(_this12.destroySubject$)).subscribe(function (data) {
                  _this12.templates = data;
                });
              }
            });
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
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroySubject$.next();
          }
        }]);

        return NewsListComponent;
      }();

      NewsListComponent.ɵfac = function NewsListComponent_Factory(t) {
        return new (t || NewsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      };

      NewsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NewsListComponent,
        selectors: [["app-news-list"]],
        decls: 35,
        vars: 2,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-lg", "85", "fxFlex.gt-md", "75", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "table-rasponsive"], [1, "table"], [1, "table-header"], [1, "header__item", "column-name"], [1, "header__item", "column-actions"], [1, "table-content"], [3, "class", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["fxFlex.gt-lg", "15", "fxFlex.gt-md", "25", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "oh"], ["fxFlex.gt-md", "100", "fxFlex", "100"], ["appearance", "outline"], ["matInput", "", "placeholder", "News List Generation Time", "required", "", "name", "ListTime", 3, "ngModel", "ngModelChange"], ["ListTime", ""], [1, "table-data", "column-name"], [1, "table-data", "column-actions"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Remove Template", "matTooltipPosition", "below", 3, "click"], ["aria-label", "Edit"], ["mat-icon-button", "", "color", "basic", "matTooltip", "Enable Template", "matTooltipPosition", "below", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Disable Template", "matTooltipPosition", "below", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "basic", "matTooltip", "Enable Template", "matTooltipPosition", "below", 3, "click"], ["aria-label", "Approve"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Disable Template", "matTooltipPosition", "below", 3, "click"]],
        template: function NewsListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "List Templates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "News Lists to be generated everyday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "List Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NewsListComponent_div_16_Template, 9, 6, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsListComponent_Template_button_click_18_listener() {
              return ctx.onAddTemplate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add a Template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " News Lists generation time ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsListComponent_Template_input_ngModelChange_30_listener($event) {
              return ctx.generationTime.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-actions", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsListComponent_Template_button_click_33_listener() {
              return ctx.updateTime();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Update Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.templates);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.generationTime.value);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]],
        styles: [".table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px solid #EEEEEE;\n  margin-bottom: 20px;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 10px 0;\n  font-size: 12px;\n  border-bottom: 1px solid #EEEEEE;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding-left: 10px 0;\n  border-bottom: 1px solid #EEEEEE;\n  transition: all 0.2s ease-in-out;\n}\n\n.table-row[_ngcontent-%COMP%]:hover{\n  background-color: rgba(97, 97, 97, 0.068);\n}\n\n\n\n.table-row.status_breaker[_ngcontent-%COMP%]{\n  background-color: rgba(127, 255, 212, 0.2)\n}\n\n.table-row[_ngcontent-%COMP%]:hover.status_breaker{\n  background-color: rgba(127, 255, 212, 0.7)\n}\n\n\n\n.table-row.status_0[_ngcontent-%COMP%]{\n  background-color: rgba(255, 127, 159, 0.1)\n}\n\n.table-row[_ngcontent-%COMP%]:hover.status_0{\n  background-color: rgba(255, 127, 159, 0.4)\n}\n\n.table-row[_ngcontent-%COMP%]:nth-of-type(odd) {\n  \n}\n\n.table-data[_ngcontent-%COMP%], .header__item[_ngcontent-%COMP%] {\n  flex: 1 1 20%;\n  text-align: center;\n  padding: 5px;\n}\n\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 12px;\n}\n\n.filter__link[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n.filter__link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: -18px;\n  color: white;\n  font-size: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.filter__link.desc[_ngcontent-%COMP%]::after {\n  content: \"(desc)\";\n}\n\n.filter__link.asc[_ngcontent-%COMP%]::after {\n  content: \"(asc)\";\n}\n\n.column-name[_ngcontent-%COMP%]{\n  flex: 0 0 85%;\n  font-size: 12px;\n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: left;\n}\n\n.column-actions[_ngcontent-%COMP%]{\n  flex: 0 0 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbmV3cy1saXN0L25ld3MtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGdDQUFnQztFQUtoQyxnQ0FBZ0M7QUFDbEM7O0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUEsWUFBWTs7QUFDWjtFQUNFO0FBQ0Y7O0FBQ0E7RUFDRTtBQUNGOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRTtBQUNGOztBQUNBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnREFBZ0Q7RUFDaEQsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixRQUFRO0VBQ1IsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUtBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0RBQWdEO0VBQ2hELGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL25ld3MtbGlzdC9uZXdzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNFRUVFRUU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50YWJsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFRUVFO1xufVxuXG4udGFibGUtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRUVFRTtcblxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4udGFibGUtcm93OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDAuMDY4KTtcbn1cblxuLyogQlJFQUtFUiAqL1xuLnRhYmxlLXJvdy5zdGF0dXNfYnJlYWtlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLCAwLjIpXG59XG4udGFibGUtcm93OmhvdmVyLnN0YXR1c19icmVha2Vye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuNylcbn1cblxuLyogbm90IGFwcHJvdmVkICovXG4udGFibGUtcm93LnN0YXR1c18we1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTI3LCAxNTksIDAuMSlcbn1cbi50YWJsZS1yb3c6aG92ZXIuc3RhdHVzXzB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMjcsIDE1OSwgMC40KVxufVxuXG4udGFibGUtcm93Om50aC1vZi10eXBlKG9kZCkge1xuICAvKmJhY2tncm91bmQ6ICNFRUVFRUU7Ki9cbn1cblxuLnRhYmxlLWRhdGEsXG4uaGVhZGVyX19pdGVtIHtcbiAgZmxleDogMSAxIDIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5oZWFkZXJfX2l0ZW0ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZpbHRlcl9fbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xufVxuLmZpbHRlcl9fbGluazo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uZmlsdGVyX19saW5rLmRlc2M6OmFmdGVyIHtcbiAgY29udGVudDogXCIoZGVzYylcIjtcbn1cbi5maWx0ZXJfX2xpbmsuYXNjOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKGFzYylcIjtcbn1cblxuXG5cblxuLmNvbHVtbi1uYW1le1xuICBmbGV4OiAwIDAgODUlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbHVtbi1hY3Rpb25ze1xuICBmbGV4OiAwIDAgMTUlO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-news-list',
            templateUrl: './news-list.component.html',
            styleUrls: ['./news-list.component.css']
          }]
        }], function () {
          return [{
            type: _services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "KCdu":
    /*!****************************************************************!*\
      !*** ./src/app/admin/news-breakers/news-breakers.component.ts ***!
      \****************************************************************/

    /*! exports provided: NewsBreakersComponent */

    /***/
    function KCdu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsBreakersComponent", function () {
        return NewsBreakersComponent;
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


      var _shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/component/confirm-dialog/confirm-dialog.component */
      "l8SP");
      /* harmony import */


      var _services_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/news.service */
      "jgUR");
      /* harmony import */


      var _add_news_breaker_dialog_add_news_breaker_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../add-news-breaker-dialog/add-news-breaker-dialog.component */
      "MkcL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function NewsBreakersComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsBreakersComponent_div_14_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var breaker_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onDeleteBreaker(breaker_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var breaker_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breaker_r1.news_name);
        }
      }

      var NewsBreakersComponent = /*#__PURE__*/function () {
        function NewsBreakersComponent(adminNewsService, dialog, snackBar) {
          _classCallCheck(this, NewsBreakersComponent);

          this.adminNewsService = adminNewsService;
          this.dialog = dialog;
          this.snackBar = snackBar;
          this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        }

        _createClass(NewsBreakersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.adminNewsService.getBreakers().subscribe(function (breakers) {
              _this13.breakers = breakers;
            });
          }
        }, {
          key: "onAddBreaker",
          value: function onAddBreaker() {
            var _this14 = this;

            var dialogRef = this.dialog.open(_add_news_breaker_dialog_add_news_breaker_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddNewsBreakerDialogComponent"], {
              width: '40%',
              height: 'auto',
              maxHeight: '95%'
            });
            dialogRef.componentInstance.onAdd.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroySubject$)).subscribe(function (result) {
              _this14.adminNewsService.createBreaker(result).subscribe(function (data) {
                _this14.breakers = data;
              });
            });
          }
        }, {
          key: "onDeleteBreaker",
          value: function onDeleteBreaker(id) {
            var _this15 = this;

            var dialogRef = this.dialog.open(_shared_component_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
              width: '350px',
              data: {
                title: 'Delete News Breaker',
                message: 'Are you sure you want to delete this Breaker?'
              }
            });
            dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroySubject$)).subscribe(function (result) {
              dialogRef = null;

              if (result) {
                _this15.adminNewsService.deleteBreakers(id).subscribe(function (data) {
                  _this15.breakers = data;
                });
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroySubject$.next();
          }
        }]);

        return NewsBreakersComponent;
      }();

      NewsBreakersComponent.ɵfac = function NewsBreakersComponent_Factory(t) {
        return new (t || NewsBreakersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
      };

      NewsBreakersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NewsBreakersComponent,
        selectors: [["app-news-breakers"]],
        decls: 18,
        vars: 1,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-lg", "85", "fxFlex.gt-md", "75", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "table-rasponsive"], [1, "table"], [1, "table-header"], [1, "header__item", "column-name"], [1, "header__item", "column-actions"], [1, "table-content"], ["class", "table-row", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "table-row"], [1, "table-data", "column-name"], [1, "table-data", "column-actions"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Remove Template", "matTooltipPosition", "below", 3, "click"], ["aria-label", "Edit"]],
        template: function NewsBreakersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "News Breakers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Breaker Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NewsBreakersComponent_div_14_Template, 7, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsBreakersComponent_Template_button_click_16_listener() {
              return ctx.onAddBreaker();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add Breaker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breakers);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"]],
        styles: [".table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px solid #EEEEEE;\n  margin-bottom: 20px;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 10px 0;\n  font-size: 12px;\n  border-bottom: 1px solid #EEEEEE;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding-left: 10px 0;\n  border-bottom: 1px solid #EEEEEE;\n  transition: all 0.2s ease-in-out;\n}\n\n.table-row[_ngcontent-%COMP%]:hover{\n  background-color: rgba(97, 97, 97, 0.068);\n}\n\n\n\n.table-row.status_breaker[_ngcontent-%COMP%]{\n  background-color: rgba(127, 255, 212, 0.2)\n}\n\n.table-row[_ngcontent-%COMP%]:hover.status_breaker{\n  background-color: rgba(127, 255, 212, 0.7)\n}\n\n\n\n.table-row.status_0[_ngcontent-%COMP%]{\n  background-color: rgba(255, 127, 159, 0.1)\n}\n\n.table-row[_ngcontent-%COMP%]:hover.status_0{\n  background-color: rgba(255, 127, 159, 0.4)\n}\n\n.table-row[_ngcontent-%COMP%]:nth-of-type(odd) {\n  \n}\n\n.table-data[_ngcontent-%COMP%], .header__item[_ngcontent-%COMP%] {\n  flex: 1 1 20%;\n  text-align: center;\n  padding: 5px;\n}\n\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 12px;\n}\n\n.filter__link[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n.filter__link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: -18px;\n  color: white;\n  font-size: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.filter__link.desc[_ngcontent-%COMP%]::after {\n  content: \"(desc)\";\n}\n\n.filter__link.asc[_ngcontent-%COMP%]::after {\n  content: \"(asc)\";\n}\n\n.column-name[_ngcontent-%COMP%]{\n  flex: 0 0 85%;\n  font-size: 12px;\n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: left;\n}\n\n.column-actions[_ngcontent-%COMP%]{\n  flex: 0 0 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbmV3cy1icmVha2Vycy9uZXdzLWJyZWFrZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBS2hDLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQSxZQUFZOztBQUNaO0VBQ0U7QUFDRjs7QUFDQTtFQUNFO0FBQ0Y7O0FBRUEsaUJBQWlCOztBQUNqQjtFQUNFO0FBQ0Y7O0FBQ0E7RUFDRTtBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdEQUFnRDtFQUNoRCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFFBQVE7RUFDUiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBS0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnREFBZ0Q7RUFDaEQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vbmV3cy1icmVha2Vycy9uZXdzLWJyZWFrZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDBweCBzb2xpZCAjRUVFRUVFO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRUVFRTtcbn1cblxuLnRhYmxlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUVFRUU7XG5cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLnRhYmxlLXJvdzpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NywgOTcsIDk3LCAwLjA2OCk7XG59XG5cbi8qIEJSRUFLRVIgKi9cbi50YWJsZS1yb3cuc3RhdHVzX2JyZWFrZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyNTUsIDIxMiwgMC4yKVxufVxuLnRhYmxlLXJvdzpob3Zlci5zdGF0dXNfYnJlYWtlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLCAwLjcpXG59XG5cbi8qIG5vdCBhcHByb3ZlZCAqL1xuLnRhYmxlLXJvdy5zdGF0dXNfMHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEyNywgMTU5LCAwLjEpXG59XG4udGFibGUtcm93OmhvdmVyLnN0YXR1c18we1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTI3LCAxNTksIDAuNClcbn1cblxuLnRhYmxlLXJvdzpudGgtb2YtdHlwZShvZGQpIHtcbiAgLypiYWNrZ3JvdW5kOiAjRUVFRUVFOyovXG59XG5cbi50YWJsZS1kYXRhLFxuLmhlYWRlcl9faXRlbSB7XG4gIGZsZXg6IDEgMSAyMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaGVhZGVyX19pdGVtIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5maWx0ZXJfX2xpbmsge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cbi5maWx0ZXJfX2xpbms6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmZpbHRlcl9fbGluay5kZXNjOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKGRlc2MpXCI7XG59XG4uZmlsdGVyX19saW5rLmFzYzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIihhc2MpXCI7XG59XG5cblxuXG5cbi5jb2x1bW4tbmFtZXtcbiAgZmxleDogMCAwIDg1JTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb2x1bW4tYWN0aW9uc3tcbiAgZmxleDogMCAwIDE1JTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsBreakersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-news-breakers',
            templateUrl: './news-breakers.component.html',
            styleUrls: ['./news-breakers.component.css']
          }]
        }], function () {
          return [{
            type: _services_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MkcL":
    /*!************************************************************************************!*\
      !*** ./src/app/admin/add-news-breaker-dialog/add-news-breaker-dialog.component.ts ***!
      \************************************************************************************/

    /*! exports provided: AddNewsBreakerDialogComponent */

    /***/
    function MkcL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewsBreakerDialogComponent", function () {
        return AddNewsBreakerDialogComponent;
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


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/user.service */
      "CHqn");
      /* harmony import */


      var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/user.model */
      "b/Lf");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _news_models_news__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../news/models/news */
      "mhfV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
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

      var AddNewsBreakerDialogComponent = /*#__PURE__*/function () {
        function AddNewsBreakerDialogComponent(dialogRef, data, store, userService, updates$) {
          _classCallCheck(this, AddNewsBreakerDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.store = store;
          this.userService = userService;
          this.updates$ = updates$;
          this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.breaker = new _news_models_news__WEBPACK_IMPORTED_MODULE_6__["News"]();
        }

        _createClass(AddNewsBreakerDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addBreaker",
          value: function addBreaker() {
            // this.store.dispatch(new adminActions.CreateUser(this.user));
            this.onAdd.emit(this.breaker);
            this.dialogRef.close(true);
            console.log(JSON.stringify(this.breaker));
          }
        }, {
          key: "closeDialog",
          value: function closeDialog(confirmation) {
            this.dialogRef.close(confirmation);
          }
        }]);

        return AddNewsBreakerDialogComponent;
      }();

      AddNewsBreakerDialogComponent.ɵfac = function AddNewsBreakerDialogComponent_Factory(t) {
        return new (t || AddNewsBreakerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"]));
      };

      AddNewsBreakerDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddNewsBreakerDialogComponent,
        selectors: [["add-news-breaker-dialog"]],
        decls: 16,
        vars: 2,
        consts: [["mat-dialog-title", ""], [1, "basic-form"], ["userForm", "ngForm"], ["mat-dialog-content", ""], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-top", "20px"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["appearance", "outline"], ["matInput", "", "mat-autosize", "", "required", "", "name", "templateName", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "color", "basic", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
        template: function AddNewsBreakerDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add News Breaker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Breaker Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNewsBreakerDialogComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.breaker.news_name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewsBreakerDialogComponent_Template_button_click_12_listener() {
              return ctx.closeDialog(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewsBreakerDialogComponent_Template_button_click_14_listener() {
              return ctx.addBreaker();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add Breaker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.breaker.news_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]],
        styles: [".table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px solid #EEEEEE;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 10px 0;\n  font-size: 12px;\n  border-bottom: 1px solid #EEEEEE;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding-left: 10px 0;\n  border-bottom: 1px solid #EEEEEE;\n  transition: all 0.2s ease-in-out;\n}\n\n.table-row[_ngcontent-%COMP%]:hover{\n  background-color: rgba(97, 97, 97, 0.068);\n}\n\n\n\n.table-row.role_assigned[_ngcontent-%COMP%]{\n  background-color: rgba(127, 255, 212, 0.2)\n}\n\n.table-row[_ngcontent-%COMP%]:hover.role_assigned{\n  background-color: rgba(127, 255, 212, 0.7)\n}\n\n\n\n.table-data[_ngcontent-%COMP%], .header__item[_ngcontent-%COMP%] {\n  flex: 1 1 20%;\n  text-align: center;\n  padding: 5px;\n}\n\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 12px;\n}\n\n.filter__link[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n.filter__link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: -18px;\n  color: white;\n  font-size: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.filter__link.desc[_ngcontent-%COMP%]::after {\n  content: \"(desc)\";\n}\n\n.filter__link.asc[_ngcontent-%COMP%]::after {\n  content: \"(asc)\";\n}\n\n.column-role[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n  font-size: 12px;\n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.column-name[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n  font-size: 12px;\n  \n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.column-detail[_ngcontent-%COMP%]{\n  flex: 0 0 40%;\n  font-size: 12px;\n}\n\n.column-actions[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkLW5ld3MtYnJlYWtlci1kaWFsb2cvYWRkLW5ld3MtYnJlYWtlci1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGdDQUFnQztFQUtoQyxnQ0FBZ0M7QUFDbEM7O0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUEsWUFBWTs7QUFDWjtFQUNFO0FBQ0Y7O0FBQ0E7RUFDRTtBQUNGOztBQUVBOztHQUVHOztBQUVIOztFQUVFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdEQUFnRDtFQUNoRCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFFBQVE7RUFDUiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBS0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnREFBZ0Q7QUFDbEQ7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsZ0RBQWdEO0FBQ2xEOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZGQtbmV3cy1icmVha2VyLWRpYWxvZy9hZGQtbmV3cy1icmVha2VyLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwcHggc29saWQgI0VFRUVFRTtcbn1cblxuLnRhYmxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUVFRUU7XG59XG5cbi50YWJsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFRUVFO1xuXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi50YWJsZS1yb3c6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMC4wNjgpO1xufVxuXG4vKiBCUkVBS0VSICovXG4udGFibGUtcm93LnJvbGVfYXNzaWduZWR7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyNTUsIDIxMiwgMC4yKVxufVxuLnRhYmxlLXJvdzpob3Zlci5yb2xlX2Fzc2lnbmVke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuNylcbn1cblxuLyogLnRhYmxlLXJvdzpudGgtb2YtdHlwZShvZGQpIHtcbiAgYmFja2dyb3VuZDogI0VFRUVFRTtcbn0gKi9cblxuLnRhYmxlLWRhdGEsXG4uaGVhZGVyX19pdGVtIHtcbiAgZmxleDogMSAxIDIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5oZWFkZXJfX2l0ZW0ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZpbHRlcl9fbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xufVxuLmZpbHRlcl9fbGluazo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uZmlsdGVyX19saW5rLmRlc2M6OmFmdGVyIHtcbiAgY29udGVudDogXCIoZGVzYylcIjtcbn1cbi5maWx0ZXJfX2xpbmsuYXNjOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKGFzYylcIjtcbn1cblxuXG5cblxuLmNvbHVtbi1yb2xle1xuICBmbGV4OiAwIDAgMjAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbn1cbi5jb2x1bW4tbmFtZXtcbiAgZmxleDogMCAwIDIwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAvKmp1c3RpZnktY29udGVudDpmbGV4LWVuZDsqL1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG59XG4uY29sdW1uLWRldGFpbHtcbiAgZmxleDogMCAwIDQwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29sdW1uLWFjdGlvbnN7XG4gIGZsZXg6IDAgMCAyMCU7XG59XG5cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNewsBreakerDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'add-news-breaker-dialog',
            templateUrl: './add-news-breaker-dialog.component.html',
            styleUrls: ['./add-news-breaker-dialog.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: _models_user_model__WEBPACK_IMPORTED_MODULE_4__["Users"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PLLj":
    /*!**************************************************************************!*\
      !*** ./src/app/admin/assign-role-dialog/assign-role-dialog.component.ts ***!
      \**************************************************************************/

    /*! exports provided: AssignRoleDialogComponent */

    /***/
    function PLLj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignRoleDialogComponent", function () {
        return AssignRoleDialogComponent;
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


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_admin_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../store/admin.actions */
      "oSKX");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/user.service */
      "CHqn");
      /* harmony import */


      var _models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../models/user.model */
      "b/Lf");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function AssignRoleDialogComponent_div_5_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignRoleDialogComponent_div_5_div_12_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var role_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r3.assignRole(role_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var role_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("role_assigned", ctx_r1.userHasRole(role_r2.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r2.display_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r2.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.userHasRole(role_r2.name));
        }
      }

      function AssignRoleDialogComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Role Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AssignRoleDialogComponent_div_5_div_12_Template, 11, 6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.roles);
        }
      }

      var AssignRoleDialogComponent = /*#__PURE__*/function () {
        function AssignRoleDialogComponent(dialogRef, data, store, userService, updates$) {
          _classCallCheck(this, AssignRoleDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.store = store;
          this.userService = userService;
          this.updates$ = updates$;
          this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.roles = [];
          this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        }

        _createClass(AssignRoleDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.userService.getRoles().subscribe(function (roles) {
              _this16.roles = roles;
            });
          }
        }, {
          key: "userHasRole",
          value: function userHasRole(role_) {
            var re = false;
            this.data.roles.forEach(function (element) {
              if (element.name === role_) {
                re = true; //console.log(element.name, role_)
              }
            });
            return re;
          }
        }, {
          key: "assignRole",
          value: function assignRole(roleid) {
            var _this17 = this;

            this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_3__["AssignRole"]({
              user_id: this.data.id,
              role_id: roleid
            }));
            this.onAdd.emit({
              user_id: this.data.id
            });
            this.updates$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_3__["ASSIGN_ROLE_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroySubject$)).subscribe(function () {
              _this17.store.select(function (store) {
                return store.Admin.users;
              }).subscribe(function (users) {
                users.forEach(function (user) {
                  if (user.id === _this17.data.id) {
                    // console.log(element)
                    _this17.data = user;
                  }
                });
              });
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog(confirmation) {
            this.dialogRef.close(confirmation);
          }
        }, {
          key: "doAdd",
          value: function doAdd() {
            this.closeDialog(true);
            this.onAdd.emit();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroySubject$.next();
          }
        }]);

        return AssignRoleDialogComponent;
      }();

      AssignRoleDialogComponent.ɵfac = function AssignRoleDialogComponent_Factory(t) {
        return new (t || AssignRoleDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Actions"]));
      };

      AssignRoleDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AssignRoleDialogComponent,
        selectors: [["assign-role-dialog"]],
        decls: 6,
        vars: 2,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-top", "20px"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["class", "table-rasponsive", 4, "ngIf"], [1, "table-rasponsive"], [1, "table"], [1, "table-header"], [1, "header__item", "column-role"], [1, "header__item", "column-name"], [1, "header__item", "column-detail"], [1, "header__item", "column-actions"], [1, "table-content"], ["class", "table-row", 3, "role_assigned", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "table-data", "column-role"], [1, "table-data", "column-name"], ["matTooltipPosition", "below", 1, "table-data", "column-detail"], [1, "table-data", "column-actions"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Assign Role", "matTooltipPosition", "below", 3, "disabled", "click"], ["aria-label", "Edit"]],
        template: function AssignRoleDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AssignRoleDialogComponent_div_5_Template, 13, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Assign Role to ", ctx.data.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roles);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"]],
        styles: [".table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px solid #EEEEEE;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 10px 0;\n  font-size: 12px;\n  border-bottom: 1px solid #EEEEEE;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding-left: 10px 0;\n  border-bottom: 1px solid #EEEEEE;\n  transition: all 0.2s ease-in-out;\n}\n\n.table-row[_ngcontent-%COMP%]:hover{\n  background-color: rgba(97, 97, 97, 0.068);\n}\n\n\n\n.table-row.role_assigned[_ngcontent-%COMP%]{\n  background-color: rgba(127, 255, 212, 0.2)\n}\n\n.table-row[_ngcontent-%COMP%]:hover.role_assigned{\n  background-color: rgba(127, 255, 212, 0.7)\n}\n\n.table-row[_ngcontent-%COMP%]:nth-of-type(odd) {\n  \n}\n\n.table-data[_ngcontent-%COMP%], .header__item[_ngcontent-%COMP%] {\n  flex: 1 1 20%;\n  text-align: center;\n  padding: 5px;\n}\n\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 12px;\n}\n\n.filter__link[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n.filter__link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: -18px;\n  color: white;\n  font-size: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.filter__link.desc[_ngcontent-%COMP%]::after {\n  content: \"(desc)\";\n}\n\n.filter__link.asc[_ngcontent-%COMP%]::after {\n  content: \"(asc)\";\n}\n\n.column-role[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n  font-size: 12px;\n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.column-name[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n  font-size: 12px;\n  \n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.column-detail[_ngcontent-%COMP%]{\n  flex: 0 0 40%;\n  font-size: 12px;\n}\n\n.column-actions[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYXNzaWduLXJvbGUtZGlhbG9nL2Fzc2lnbi1yb2xlLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBS2hDLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQSxZQUFZOztBQUNaO0VBQ0U7QUFDRjs7QUFDQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0RBQWdEO0VBQ2hELGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsUUFBUTtFQUNSLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFLQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtBQUNsRDs7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixnREFBZ0Q7QUFDbEQ7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Fzc2lnbi1yb2xlLWRpYWxvZy9hc3NpZ24tcm9sZS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNFRUVFRUU7XG59XG5cbi50YWJsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFRUVFO1xufVxuXG4udGFibGUtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRUVFRTtcblxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4udGFibGUtcm93OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDAuMDY4KTtcbn1cblxuLyogQlJFQUtFUiAqL1xuLnRhYmxlLXJvdy5yb2xlX2Fzc2lnbmVke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuMilcbn1cbi50YWJsZS1yb3c6aG92ZXIucm9sZV9hc3NpZ25lZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLCAwLjcpXG59XG5cbi50YWJsZS1yb3c6bnRoLW9mLXR5cGUob2RkKSB7XG4gIC8qYmFja2dyb3VuZDogI0VFRUVFRTsqL1xufVxuXG4udGFibGUtZGF0YSxcbi5oZWFkZXJfX2l0ZW0ge1xuICBmbGV4OiAxIDEgMjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmhlYWRlcl9faXRlbSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZmlsdGVyX19saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG59XG4uZmlsdGVyX19saW5rOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5maWx0ZXJfX2xpbmsuZGVzYzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIihkZXNjKVwiO1xufVxuLmZpbHRlcl9fbGluay5hc2M6OmFmdGVyIHtcbiAgY29udGVudDogXCIoYXNjKVwiO1xufVxuXG5cblxuXG4uY29sdW1uLXJvbGV7XG4gIGZsZXg6IDAgMCAyMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xufVxuLmNvbHVtbi1uYW1le1xuICBmbGV4OiAwIDAgMjAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIC8qanVzdGlmeS1jb250ZW50OmZsZXgtZW5kOyovXG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbn1cbi5jb2x1bW4tZGV0YWlse1xuICBmbGV4OiAwIDAgNDAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb2x1bW4tYWN0aW9uc3tcbiAgZmxleDogMCAwIDIwJTtcbn1cblxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignRoleDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'assign-role-dialog',
            templateUrl: './assign-role-dialog.component.html',
            styleUrls: ['./assign-role-dialog.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: _models_user_model__WEBPACK_IMPORTED_MODULE_5__["Users"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }, {
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Actions"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "b/Lf":
    /*!********************************************!*\
      !*** ./src/app/admin/models/user.model.ts ***!
      \********************************************/

    /*! exports provided: Users, Roles, Permissions, Activity, Profile */

    /***/
    function bLf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Users", function () {
        return Users;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Roles", function () {
        return Roles;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Permissions", function () {
        return Permissions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Activity", function () {
        return Activity;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Profile", function () {
        return Profile;
      });

      var Users = function Users(name, email, password) {
        _classCallCheck(this, Users);

        this.name = name;
        this.email = email;
        this.password = password;
      };

      var Roles = function Roles() {
        _classCallCheck(this, Roles);
      };

      var Permissions = function Permissions() {
        _classCallCheck(this, Permissions);
      };

      var Activity = function Activity() {
        _classCallCheck(this, Activity);
      };

      var Profile = function Profile() {
        _classCallCheck(this, Profile);

        this.user_id = '-';
        this.dob = '-';
        this.gender = '-';
        this.fb = '-';
        this.insta = '-';
        this.twitter = '-';
        this.email = '-';
        this.phone = '-';
        this.profilepic = '';
        this.coverimage = '';
      };
      /***/

    },

    /***/
    "c3U6":
    /*!********************************************************************!*\
      !*** ./src/app/admin/add-user-dialog/add-user-dialog.component.ts ***!
      \********************************************************************/

    /*! exports provided: AddUserDialogComponent */

    /***/
    function c3U6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddUserDialogComponent", function () {
        return AddUserDialogComponent;
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


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_admin_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../store/admin.actions */
      "oSKX");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/user.service */
      "CHqn");
      /* harmony import */


      var _models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../models/user.model */
      "b/Lf");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
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
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AddUserDialogComponent = /*#__PURE__*/function () {
        function AddUserDialogComponent(dialogRef, data, store, userService, updates$) {
          _classCallCheck(this, AddUserDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.store = store;
          this.userService = userService;
          this.updates$ = updates$;
          this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_5__["Users"](null, null, null);
        }

        _createClass(AddUserDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addUser",
          value: function addUser() {
            this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_3__["CreateUser"](this.user));
            this.onAdd.emit();
            this.dialogRef.close(true);
          }
        }, {
          key: "closeDialog",
          value: function closeDialog(confirmation) {
            this.dialogRef.close(confirmation);
          }
        }]);

        return AddUserDialogComponent;
      }();

      AddUserDialogComponent.ɵfac = function AddUserDialogComponent_Factory(t) {
        return new (t || AddUserDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Actions"]));
      };

      AddUserDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddUserDialogComponent,
        selectors: [["add-user-dialog"]],
        decls: 33,
        vars: 7,
        consts: [["mat-dialog-title", ""], [1, "basic-form"], ["userForm", "ngForm"], ["mat-dialog-content", ""], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-top", "20px"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["appearance", "outline"], ["matInput", "", "mat-autosize", "", "required", "", "name", "tickerName", 3, "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutWrap", "wrap"], ["type", "password", "matInput", "", "mat-autosize", "", "required", "", "name", "tickerName", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "color", "basic", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
        template: function AddUserDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddUserDialogComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.user.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddUserDialogComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.user.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddUserDialogComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.user.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserDialogComponent_Template_button_click_29_listener() {
              return ctx.closeDialog(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserDialogComponent_Template_button_click_31_listener() {
              return ctx.addUser();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Add User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 5, ctx.user));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["JsonPipe"]],
        styles: [".table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px solid #EEEEEE;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 10px 0;\n  font-size: 12px;\n  border-bottom: 1px solid #EEEEEE;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding-left: 10px 0;\n  border-bottom: 1px solid #EEEEEE;\n  transition: all 0.2s ease-in-out;\n}\n\n.table-row[_ngcontent-%COMP%]:hover{\n  background-color: rgba(97, 97, 97, 0.068);\n}\n\n\n\n.table-row.role_assigned[_ngcontent-%COMP%]{\n  background-color: rgba(127, 255, 212, 0.2)\n}\n\n.table-row[_ngcontent-%COMP%]:hover.role_assigned{\n  background-color: rgba(127, 255, 212, 0.7)\n}\n\n.table-row[_ngcontent-%COMP%]:nth-of-type(odd) {\n  \n}\n\n.table-data[_ngcontent-%COMP%], .header__item[_ngcontent-%COMP%] {\n  flex: 1 1 20%;\n  text-align: center;\n  padding: 5px;\n}\n\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 12px;\n}\n\n.filter__link[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n.filter__link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: -18px;\n  color: white;\n  font-size: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.filter__link.desc[_ngcontent-%COMP%]::after {\n  content: \"(desc)\";\n}\n\n.filter__link.asc[_ngcontent-%COMP%]::after {\n  content: \"(asc)\";\n}\n\n.column-role[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n  font-size: 12px;\n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.column-name[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n  font-size: 12px;\n  \n  text-align: left;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.column-detail[_ngcontent-%COMP%]{\n  flex: 0 0 40%;\n  font-size: 12px;\n}\n\n.column-actions[_ngcontent-%COMP%]{\n  flex: 0 0 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkLXVzZXItZGlhbG9nL2FkZC11c2VyLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBS2hDLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQSxZQUFZOztBQUNaO0VBQ0U7QUFDRjs7QUFDQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0RBQWdEO0VBQ2hELGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsUUFBUTtFQUNSLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFLQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtBQUNsRDs7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixnREFBZ0Q7QUFDbEQ7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZC11c2VyLWRpYWxvZy9hZGQtdXNlci1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNFRUVFRUU7XG59XG5cbi50YWJsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFRUVFO1xufVxuXG4udGFibGUtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRUVFRTtcblxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4udGFibGUtcm93OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDAuMDY4KTtcbn1cblxuLyogQlJFQUtFUiAqL1xuLnRhYmxlLXJvdy5yb2xlX2Fzc2lnbmVke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuMilcbn1cbi50YWJsZS1yb3c6aG92ZXIucm9sZV9hc3NpZ25lZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLCAwLjcpXG59XG5cbi50YWJsZS1yb3c6bnRoLW9mLXR5cGUob2RkKSB7XG4gIC8qYmFja2dyb3VuZDogI0VFRUVFRTsqL1xufVxuXG4udGFibGUtZGF0YSxcbi5oZWFkZXJfX2l0ZW0ge1xuICBmbGV4OiAxIDEgMjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmhlYWRlcl9faXRlbSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZmlsdGVyX19saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG59XG4uZmlsdGVyX19saW5rOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5maWx0ZXJfX2xpbmsuZGVzYzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIihkZXNjKVwiO1xufVxuLmZpbHRlcl9fbGluay5hc2M6OmFmdGVyIHtcbiAgY29udGVudDogXCIoYXNjKVwiO1xufVxuXG5cblxuXG4uY29sdW1uLXJvbGV7XG4gIGZsZXg6IDAgMCAyMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xufVxuLmNvbHVtbi1uYW1le1xuICBmbGV4OiAwIDAgMjAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIC8qanVzdGlmeS1jb250ZW50OmZsZXgtZW5kOyovXG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbn1cbi5jb2x1bW4tZGV0YWlse1xuICBmbGV4OiAwIDAgNDAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb2x1bW4tYWN0aW9uc3tcbiAgZmxleDogMCAwIDIwJTtcbn1cblxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUserDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'add-user-dialog',
            templateUrl: './add-user-dialog.component.html',
            styleUrls: ['./add-user-dialog.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: _models_user_model__WEBPACK_IMPORTED_MODULE_5__["Users"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }, {
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Actions"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cfIb":
    /*!****************************************!*\
      !*** ./src/app/admin/admin.routing.ts ***!
      \****************************************/

    /*! exports provided: AdminRoutes */

    /***/
    function cfIb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminRoutes", function () {
        return AdminRoutes;
      });
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "o8Ft");
      /* harmony import */


      var _user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user/user.component */
      "8UFg");
      /* harmony import */


      var _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./news-list/news-list.component */
      "II7t");
      /* harmony import */


      var _news_breakers_news_breakers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./news-breakers/news-breakers.component */
      "KCdu");

      var AdminRoutes = [{
        path: '',
        children: [{
          path: 'admin-dashboard',
          component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
          data: {
            role: 'admin'
          }
        }, {
          path: 'user-console',
          component: _user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"],
          data: {
            role: 'admin'
          }
        }, {
          path: 'news-settings/list',
          component: _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_2__["NewsListComponent"],
          data: {
            role: 'admin'
          }
        }, {
          path: 'news-settings/breakers',
          component: _news_breakers_news_breakers_component__WEBPACK_IMPORTED_MODULE_3__["NewsBreakersComponent"],
          data: {
            role: 'admin'
          }
        }]
      }];
      /***/
    },

    /***/
    "jgUR":
    /*!************************************************!*\
      !*** ./src/app/admin/services/news.service.ts ***!
      \************************************************/

    /*! exports provided: NewsService */

    /***/
    function jgUR(module, __webpack_exports__, __webpack_require__) {
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
        } // get list templates


        _createClass(NewsService, [{
          key: "getListTemplates",
          value: function getListTemplates() {
            return this.http.get(this.apiUrl + 'management-console/news/list-templates');
          } // get list generation time

        }, {
          key: "getListGenTime",
          value: function getListGenTime() {
            return this.http.get(this.apiUrl + 'management-console/news/list-templates/time');
          } // enable news list template

        }, {
          key: "enableListTemplate",
          value: function enableListTemplate(body) {
            return this.http.put(this.apiUrl + 'management-console/news/list-templates/enable', body);
          } // enable news list template

        }, {
          key: "disableListTemplate",
          value: function disableListTemplate(body) {
            return this.http.put(this.apiUrl + 'management-console/news/list-templates/disable', body);
          } // set value for a settings key

        }, {
          key: "setSettingsKey",
          value: function setSettingsKey(body) {
            return this.http.put(this.apiUrl + 'management-console/settings/set', body);
          } // create a news list template

        }, {
          key: "createListTemplate",
          value: function createListTemplate(template) {
            return this.http.post(this.apiUrl + 'management-console/news/list-templates/create', template);
          } // delete a news list template

        }, {
          key: "deleteListTemplate",
          value: function deleteListTemplate(id) {
            return this.http["delete"](this.apiUrl + 'management-console/news/list-templates/' + id);
          }
          /**---------------------------------------------------------------------------------
           * ------------------------------------------------------------------> News Breakers
           ---------------------------------------------------------------------------------*/
          // get breakers

        }, {
          key: "getBreakers",
          value: function getBreakers() {
            return this.http.get(this.apiUrl + 'management-console/news/breakers/manage/get');
          } // create a news breaker

        }, {
          key: "createBreaker",
          value: function createBreaker(template) {
            return this.http.post(this.apiUrl + 'management-console/news/breakers/manage/create', template);
          } // delete a news breaker

        }, {
          key: "deleteBreakers",
          value: function deleteBreakers(id) {
            return this.http["delete"](this.apiUrl + 'management-console/news/breakers/manage/delete/' + id);
          }
        }]);

        return NewsService;
      }();

      NewsService.ɵfac = function NewsService_Factory(t) {
        return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NewsService,
        factory: NewsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsService, [{
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
    "jkDv":
    /*!***************************************!*\
      !*** ./src/app/admin/admin.module.ts ***!
      \***************************************/

    /*! exports provided: AdminModule */

    /***/
    function jkDv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
        return AdminModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _admin_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./admin.routing */
      "cfIb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _demo_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../demo-material-module */
      "onrN");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "bFKe");
      /* harmony import */


      var ng2_dragula__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng2-dragula */
      "9Ejp");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "o8Ft");
      /* harmony import */


      var _store_admin_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./store/admin.reducer */
      "wxZs");
      /* harmony import */


      var _store_admin_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./store/admin.effects */
      "4vHk");
      /* harmony import */


      var _user_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./user/user.component */
      "8UFg");
      /* harmony import */


      var _assign_role_dialog_assign_role_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./assign-role-dialog/assign-role-dialog.component */
      "PLLj");
      /* harmony import */


      var _add_user_dialog_add_user_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./add-user-dialog/add-user-dialog.component */
      "c3U6");
      /* harmony import */


      var _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./news-list/news-list.component */
      "II7t");
      /* harmony import */


      var _news_breakers_news_breakers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./news-breakers/news-breakers.component */
      "KCdu");
      /* harmony import */


      var _add_news_list_template_dialog_add_news_list_template_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./add-news-list-template-dialog/add-news-list-template-dialog.component */
      "FxsZ");
      /* harmony import */


      var _add_news_breaker_dialog_add_news_breaker_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./add-news-breaker-dialog/add-news-breaker-dialog.component */
      "MkcL");
      /*import { DragulaModule } from 'ng2-dragula/ng2-dragula';*/


      var AdminModule = function AdminModule() {
        _classCallCheck(this, AdminModule);
      };

      AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AdminModule
      });
      AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AdminModule_Factory(t) {
          return new (t || AdminModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_admin_routing__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_9__["DragulaModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature('Admin', _store_admin_reducer__WEBPACK_IMPORTED_MODULE_14__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forFeature([_store_admin_effects__WEBPACK_IMPORTED_MODULE_15__["AdminEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, {
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"], _assign_role_dialog_assign_role_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AssignRoleDialogComponent"], _add_user_dialog_add_user_dialog_component__WEBPACK_IMPORTED_MODULE_18__["AddUserDialogComponent"], _add_news_list_template_dialog_add_news_list_template_dialog_component__WEBPACK_IMPORTED_MODULE_21__["AddNewsListDialogComponent"], _add_news_breaker_dialog_add_news_breaker_dialog_component__WEBPACK_IMPORTED_MODULE_22__["AddNewsBreakerDialogComponent"], _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_19__["NewsListComponent"], _news_breakers_news_breakers_component__WEBPACK_IMPORTED_MODULE_20__["NewsBreakersComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_9__["DragulaModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsFeatureModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_admin_routing__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_9__["DragulaModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature('Admin', _store_admin_reducer__WEBPACK_IMPORTED_MODULE_14__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forFeature([_store_admin_effects__WEBPACK_IMPORTED_MODULE_15__["AdminEffects"]])],
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"], _assign_role_dialog_assign_role_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AssignRoleDialogComponent"], _add_user_dialog_add_user_dialog_component__WEBPACK_IMPORTED_MODULE_18__["AddUserDialogComponent"], _add_news_list_template_dialog_add_news_list_template_dialog_component__WEBPACK_IMPORTED_MODULE_21__["AddNewsListDialogComponent"], _add_news_breaker_dialog_add_news_breaker_dialog_component__WEBPACK_IMPORTED_MODULE_22__["AddNewsBreakerDialogComponent"], _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_19__["NewsListComponent"], _news_breakers_news_breakers_component__WEBPACK_IMPORTED_MODULE_20__["NewsBreakersComponent"]],
            entryComponents: [_assign_role_dialog_assign_role_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AssignRoleDialogComponent"], _add_user_dialog_add_user_dialog_component__WEBPACK_IMPORTED_MODULE_18__["AddUserDialogComponent"], _add_news_list_template_dialog_add_news_list_template_dialog_component__WEBPACK_IMPORTED_MODULE_21__["AddNewsListDialogComponent"], _add_news_breaker_dialog_add_news_breaker_dialog_component__WEBPACK_IMPORTED_MODULE_22__["AddNewsBreakerDialogComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "o8Ft":
    /*!********************************************************!*\
      !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
      \********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function o8Ft(module, __webpack_exports__, __webpack_require__) {
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

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)();
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 2,
        vars: 0,
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " dashboard works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "oSKX":
    /*!**********************************************!*\
      !*** ./src/app/admin/store/admin.actions.ts ***!
      \**********************************************/

    /*! exports provided: GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR, ASSIGN_ROLE, ASSIGN_ROLE_SUCCESS, ASSIGN_ROLE_ERROR, REMOVE_ROLE, REMOVE_ROLE_SUCCESS, REMOVE_ROLE_ERROR, CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_ERROR, UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR, CHANGE_LOADED, LOGOUT_ADMIN_STATE, GetUsers, GetUsersSuccess, GetUsersError, AssignRole, AssignRoleSuccess, AssignRoleError, RemoveRole, RemoveRoleSuccess, RemovenRoleError, CreateUser, CreateUserSuccess, CreateUserError, UpdateUser, UpdateUserSuccess, UpdateUserError, LogoutAdminState, UpdateLoaded */

    /***/
    function oSKX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GET_USERS", function () {
        return GET_USERS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GET_USERS_SUCCESS", function () {
        return GET_USERS_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GET_USERS_ERROR", function () {
        return GET_USERS_ERROR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ASSIGN_ROLE", function () {
        return ASSIGN_ROLE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ASSIGN_ROLE_SUCCESS", function () {
        return ASSIGN_ROLE_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ASSIGN_ROLE_ERROR", function () {
        return ASSIGN_ROLE_ERROR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "REMOVE_ROLE", function () {
        return REMOVE_ROLE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "REMOVE_ROLE_SUCCESS", function () {
        return REMOVE_ROLE_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "REMOVE_ROLE_ERROR", function () {
        return REMOVE_ROLE_ERROR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CREATE_USER", function () {
        return CREATE_USER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CREATE_USER_SUCCESS", function () {
        return CREATE_USER_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CREATE_USER_ERROR", function () {
        return CREATE_USER_ERROR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function () {
        return UPDATE_USER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UPDATE_USER_SUCCESS", function () {
        return UPDATE_USER_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UPDATE_USER_ERROR", function () {
        return UPDATE_USER_ERROR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CHANGE_LOADED", function () {
        return CHANGE_LOADED;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOGOUT_ADMIN_STATE", function () {
        return LOGOUT_ADMIN_STATE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUsers", function () {
        return GetUsers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUsersSuccess", function () {
        return GetUsersSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetUsersError", function () {
        return GetUsersError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignRole", function () {
        return AssignRole;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignRoleSuccess", function () {
        return AssignRoleSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignRoleError", function () {
        return AssignRoleError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemoveRole", function () {
        return RemoveRole;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemoveRoleSuccess", function () {
        return RemoveRoleSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemovenRoleError", function () {
        return RemovenRoleError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateUser", function () {
        return CreateUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateUserSuccess", function () {
        return CreateUserSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateUserError", function () {
        return CreateUserError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateUser", function () {
        return UpdateUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateUserSuccess", function () {
        return UpdateUserSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateUserError", function () {
        return UpdateUserError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutAdminState", function () {
        return LogoutAdminState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateLoaded", function () {
        return UpdateLoaded;
      });

      var GET_USERS = '[Admin] GET_USERS';
      var GET_USERS_SUCCESS = '[Admin] GET_USERS_SUCCESS';
      var GET_USERS_ERROR = '[Admin] GET_USERS_ERROR';
      var ASSIGN_ROLE = '[Admin] ASSIGN_ROLE';
      var ASSIGN_ROLE_SUCCESS = '[Admin] ASSIGN_ROLE_SUCCESS';
      var ASSIGN_ROLE_ERROR = '[Admin] ASSIGN_ROLE_ERROR';
      var REMOVE_ROLE = '[Admin] REMOVE_ROLE';
      var REMOVE_ROLE_SUCCESS = '[Admin] REMOVE_ROLE_SUCCESS';
      var REMOVE_ROLE_ERROR = '[Admin] REMOVE_ROLE_ERROR';
      var CREATE_USER = '[Admin] CREATE_USER';
      var CREATE_USER_SUCCESS = '[Admin] CREATE_USER_SUCCESS';
      var CREATE_USER_ERROR = '[Admin] CREATE_USER_ERROR';
      var UPDATE_USER = '[Admin] UPDATE_USER';
      var UPDATE_USER_SUCCESS = '[Admin] UPDATE_USER_SUCCESS';
      var UPDATE_USER_ERROR = '[Admin] UPDATE_USER_ERROR';
      var CHANGE_LOADED = '[Admin] CHANGE_LOADED';
      var LOGOUT_ADMIN_STATE = '[Admin] LOGOUT_ADMIN_STATE';
      /**
       * -------------------------------------------------------------------------------------------------------
       * ------------------------------------------------------------------------------> USER MANAGEMENT ACTIONS
       * -------------------------------------------------------------------------------------------------------
       *
       *
       * ------------------------------------------------------------------------------> GET USERS
       */

      var GetUsers = function GetUsers() {
        _classCallCheck(this, GetUsers);

        this.type = GET_USERS;
      };

      var GetUsersSuccess = function GetUsersSuccess(payload) {
        _classCallCheck(this, GetUsersSuccess);

        this.payload = payload;
        this.type = GET_USERS_SUCCESS;
      };

      var GetUsersError = function GetUsersError() {
        _classCallCheck(this, GetUsersError);

        this.type = GET_USERS_ERROR;
      };
      /*
      * ------------------------------------------------------------------------------> ASSIGN ROLE
      */


      var AssignRole = function AssignRole(payload) {
        _classCallCheck(this, AssignRole);

        this.payload = payload;
        this.type = ASSIGN_ROLE;
      };

      var AssignRoleSuccess = function AssignRoleSuccess(payload) {
        _classCallCheck(this, AssignRoleSuccess);

        this.payload = payload;
        this.type = ASSIGN_ROLE_SUCCESS;
      };

      var AssignRoleError = function AssignRoleError() {
        _classCallCheck(this, AssignRoleError);

        this.type = ASSIGN_ROLE_ERROR;
      };
      /*
      * ------------------------------------------------------------------------------> REMOVE ROLE
      */


      var RemoveRole = function RemoveRole(payload) {
        _classCallCheck(this, RemoveRole);

        this.payload = payload;
        this.type = REMOVE_ROLE;
      };

      var RemoveRoleSuccess = function RemoveRoleSuccess(payload) {
        _classCallCheck(this, RemoveRoleSuccess);

        this.payload = payload;
        this.type = REMOVE_ROLE_SUCCESS;
      };

      var RemovenRoleError = function RemovenRoleError() {
        _classCallCheck(this, RemovenRoleError);

        this.type = REMOVE_ROLE_ERROR;
      };
      /*
      * ------------------------------------------------------------------------------> CREATE USER
      */


      var CreateUser = function CreateUser(payload) {
        _classCallCheck(this, CreateUser);

        this.payload = payload;
        this.type = CREATE_USER;
      };

      var CreateUserSuccess = function CreateUserSuccess(payload) {
        _classCallCheck(this, CreateUserSuccess);

        this.payload = payload;
        this.type = CREATE_USER_SUCCESS;
      };

      var CreateUserError = function CreateUserError() {
        _classCallCheck(this, CreateUserError);

        this.type = CREATE_USER_ERROR;
      };
      /*
      * ------------------------------------------------------------------------------> UPDATE USER
      */


      var UpdateUser = function UpdateUser(payload) {
        _classCallCheck(this, UpdateUser);

        this.payload = payload;
        this.type = UPDATE_USER;
      };

      var UpdateUserSuccess = function UpdateUserSuccess(payload) {
        _classCallCheck(this, UpdateUserSuccess);

        this.payload = payload;
        this.type = UPDATE_USER_SUCCESS;
      };

      var UpdateUserError = function UpdateUserError() {
        _classCallCheck(this, UpdateUserError);

        this.type = UPDATE_USER_ERROR;
      };
      /**
       * --------------------------------------------------------------------------------------------
       * ------------------------------------------------------------------------------> MISC ACTIONS
       * --------------------------------------------------------------------------------------------
       */


      var LogoutAdminState = function LogoutAdminState() {
        _classCallCheck(this, LogoutAdminState);

        this.type = LOGOUT_ADMIN_STATE;
      };

      var UpdateLoaded = function UpdateLoaded(payload) {
        _classCallCheck(this, UpdateLoaded);

        this.payload = payload;
        this.type = CHANGE_LOADED;
      };
      /***/

    },

    /***/
    "wxZs":
    /*!**********************************************!*\
      !*** ./src/app/admin/store/admin.reducer.ts ***!
      \**********************************************/

    /*! exports provided: initialState, reducer, getAdminState */

    /***/
    function wxZs(module, __webpack_exports__, __webpack_require__) {
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


      __webpack_require__.d(__webpack_exports__, "getAdminState", function () {
        return getAdminState;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _admin_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin.actions */
      "oSKX");

      var initialState = {
        isLoaded: false,
        users: []
      };

      function reducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          /**
           * ---------------------------------------------------------------------------------------------------------------
           * --------------------------------------------------------------------------------------> USER MANAGEMENT ACTIONS
           * ---------------------------------------------------------------------------------------------------------------
           */

          /**
           * --------------------------------------------------------------------------------------> GET USERS
           */
          case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["GET_USERS"]:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: false
              });
            }

          case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["GET_USERS_SUCCESS"]:
            {
              return Object.assign(Object.assign({}, state), {
                users: action.payload,
                isLoaded: true
              });
            }

          /**
           * --------------------------------------------------------------------------------------> ASSIGN ROLE
           */

          case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["ASSIGN_ROLE"]:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: false
              });
            }

          case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["ASSIGN_ROLE_SUCCESS"]:
            {
              return Object.assign(Object.assign({}, state), {
                users: action.payload,
                isLoaded: true
              });
            }

          /**
           * --------------------------------------------------------------------------------------> REMOVE ROLE
           */

          case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["REMOVE_ROLE"]:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: false
              });
            }

          case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["REMOVE_ROLE_SUCCESS"]:
            {
              return Object.assign(Object.assign({}, state), {
                users: action.payload,
                isLoaded: true
              });
            }

          /**
           * --------------------------------------------------------------------------------------> CREATE USER
           */

          case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["CREATE_USER"]:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: false
              });
            }

          case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["CREATE_USER_SUCCESS"]:
            {
              return Object.assign(Object.assign({}, state), {
                users: action.payload,
                isLoaded: true
              });
            }

          /**
           * --------------------------------------------------------------------------------------> UPDATE USER
           */

          case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER"]:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: false
              });
            }

          case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER_SUCCESS"]:
            {
              return Object.assign(Object.assign({}, state), {
                users: action.payload,
                isLoaded: true
              });
            }

          case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["GET_USERS_ERROR"]:
            {
              return Object.assign(Object.assign({}, state), {
                isLoaded: true
              });
            }

          default:
            {
              return state;
            }
        }
      }

      var getAdminState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('Admin');
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-admin-module-es5.js.map