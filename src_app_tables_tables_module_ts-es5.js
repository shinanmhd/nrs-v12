(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["src_app_tables_tables_module_ts"], {
    /***/
    99199:
    /*!**************************************************************************!*\
      !*** ./node_modules/ng2-completer/__ivy_ngcc__/esm2015/ng2-completer.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CompleterCmp": function CompleterCmp() {
          return (
            /* binding */
            _CompleterCmp
          );
        },

        /* harmony export */
        "CompleterListItemCmp": function CompleterListItemCmp() {
          return (
            /* binding */
            _CompleterListItemCmp
          );
        },

        /* harmony export */
        "CompleterService": function CompleterService() {
          return (
            /* binding */
            _CompleterService
          );
        },

        /* harmony export */
        "CtrCompleter": function CtrCompleter() {
          return (
            /* binding */
            _CtrCompleter
          );
        },

        /* harmony export */
        "CtrDropdown": function CtrDropdown() {
          return (
            /* binding */
            _CtrDropdown
          );
        },

        /* harmony export */
        "CtrInput": function CtrInput() {
          return (
            /* binding */
            _CtrInput
          );
        },

        /* harmony export */
        "CtrList": function CtrList() {
          return (
            /* binding */
            _CtrList
          );
        },

        /* harmony export */
        "CtrRow": function CtrRow() {
          return (
            /* binding */
            _CtrRow
          );
        },

        /* harmony export */
        "LocalData": function LocalData() {
          return (
            /* binding */
            _LocalData
          );
        },

        /* harmony export */
        "LocalDataFactory": function LocalDataFactory() {
          return (
            /* binding */
            _LocalDataFactory
          );
        },

        /* harmony export */
        "Ng2CompleterModule": function Ng2CompleterModule() {
          return (
            /* binding */
            _Ng2CompleterModule
          );
        },

        /* harmony export */
        "RemoteData": function RemoteData() {
          return (
            /* binding */
            _RemoteData
          );
        },

        /* harmony export */
        "RemoteDataFactory": function RemoteDataFactory() {
          return (
            /* binding */
            _RemoteDataFactory
          );
        },

        /* harmony export */
        "ɵa": function ɵa() {
          return (
            /* binding */
            CtrListContext
          );
        },

        /* harmony export */
        "ɵb": function ɵb() {
          return (
            /* binding */
            CompleterBaseData
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      69165);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      46797);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      15257);
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      58497);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      24751);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /**
       * @license ng2-completer
       * MIT license
       */


      function CompleterListItemCmp_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var part_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", part_r1.isMatch ? ctx_r0.matchClass : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](part_r1.text);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "completer-title": a0,
          "completer-description": a1
        };
      };

      var _c1 = ["ctrInput"];

      function CompleterCmp_div_3_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7._textSearching);
        }
      }

      function CompleterCmp_div_3_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8._textNoResults);
        }
      }

      function CompleterCmp_div_3_div_1_div_3_div_2_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CompleterCmp_div_3_div_1_div_3_div_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 22);
        }
      }

      function CompleterCmp_div_3_div_1_div_3_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompleterCmp_div_3_div_1_div_3_div_2_img_1_Template, 1, 1, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompleterCmp_div_3_div_1_div_3_div_2_div_2_Template, 1, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.image != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.image === "");
        }
      }

      function CompleterCmp_div_3_div_1_div_3_completer_list_item_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "completer-list-item", 23);
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", item_r10.description)("matchClass", ctx_r13.matchClass)("searchStr", ctx_r13.searchStr)("type", "description");
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "completer-item-text-image": a0
        };
      };

      function CompleterCmp_div_3_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompleterCmp_div_3_div_1_div_3_div_2_Template, 3, 2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "completer-list-item", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CompleterCmp_div_3_div_1_div_3_completer_list_item_5_Template, 1, 4, "completer-list-item", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;
          var rowIndex_r11 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ctrRow", rowIndex_r11)("dataItem", item_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.image || item_r10.image === "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, item_r10.image || item_r10.image === ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", item_r10.title)("matchClass", ctx_r9.matchClass)("searchStr", ctx_r9.searchStr)("type", "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.description && item_r10.description != "");
        }
      }

      function CompleterCmp_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompleterCmp_div_3_div_1_div_1_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompleterCmp_div_3_div_1_div_2_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CompleterCmp_div_3_div_1_div_3_Template, 6, 11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var searchActive_r3 = ctx_r19.searching;
          var items_r2 = ctx_r19.results;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", searchActive_r3 && ctx_r6.displaySearching);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !searchActive_r3 && (!items_r2 || (items_r2 == null ? null : items_r2.length) === 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r2);
        }
      }

      function CompleterCmp_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompleterCmp_div_3_div_1_Template, 4, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r2 = ctx.results;
          var searchActive_r3 = ctx.searching;
          var isInitialized_r4 = ctx.searchInitialized;
          var isOpen_r5 = ctx.isOpen;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isInitialized_r4 && isOpen_r5 && ((items_r2 == null ? null : items_r2.length) > 0 || ctx_r1.displayNoResults && !searchActive_r3 || searchActive_r3 && ctx_r1.displaySearching));
        }
      }

      var MAX_CHARS = 524288; // the default max length per the html maxlength attribute

      var MIN_SEARCH_LENGTH = 3;
      var PAUSE = 10;
      var TEXT_SEARCHING = "Searching...";
      var TEXT_NO_RESULTS = "No results found";
      var CLEAR_TIMEOUT = 50;

      function isNil(value) {
        return typeof value === "undefined" || value === null;
      }

      var CompleterBaseData = /*#__PURE__*/function (_rxjs__WEBPACK_IMPORT) {
        _inherits(CompleterBaseData, _rxjs__WEBPACK_IMPORT);

        var _super = _createSuper(CompleterBaseData);

        function CompleterBaseData() {
          var _this;

          _classCallCheck(this, CompleterBaseData);

          _this = _super.call(this);
          _this._searchFields = null;
          _this._titleField = null;
          _this._descriptionField = undefined;
          _this._imageField = undefined;
          return _this;
        }

        _createClass(CompleterBaseData, [{
          key: "cancel",
          value: function cancel() {
            return;
          }
        }, {
          key: "searchFields",
          value: function searchFields(_searchFields) {
            this._searchFields = _searchFields;
            return this;
          }
        }, {
          key: "titleField",
          value: function titleField(_titleField) {
            this._titleField = _titleField;
            return this;
          }
        }, {
          key: "descriptionField",
          value: function descriptionField(_descriptionField) {
            this._descriptionField = _descriptionField;
            return this;
          }
        }, {
          key: "imageField",
          value: function imageField(_imageField) {
            this._imageField = _imageField;
            return this;
          }
        }, {
          key: "convertToItem",
          value: function convertToItem(data) {
            var image = null;
            var formattedText;
            var formattedDesc = null;

            if (this._titleField) {
              formattedText = this.extractTitle(data);
            } else {
              formattedText = data;
            }

            if (typeof formattedText !== "string") {
              formattedText = JSON.stringify(formattedText);
            }

            if (this._descriptionField) {
              formattedDesc = this.extractValue(data, this._descriptionField);
            }

            if (this._imageField) {
              image = this.extractValue(data, this._imageField);
            }

            if (isNil(formattedText)) {
              return null;
            }

            return {
              description: formattedDesc,
              image: image,
              originalObject: data,
              title: formattedText
            };
          }
        }, {
          key: "extractMatches",
          value: function extractMatches(data, term) {
            var _this2 = this;

            var matches = [];
            var searchFields = this._searchFields ? this._searchFields.split(",") : null;

            if (this._searchFields !== null && this._searchFields !== undefined && term !== "") {
              matches = data.filter(function (item) {
                var values = searchFields ? _this2.extractBySearchFields(searchFields, item) : [item];
                return values.some(function (value) {
                  return value.toString().toLowerCase().indexOf(term.toString().toLowerCase()) >= 0;
                });
              });
            } else {
              matches = data;
            }

            return matches;
          }
        }, {
          key: "extractTitle",
          value: function extractTitle(item) {
            var _this3 = this;

            // split title fields and run extractValue for each and join with ' '
            if (!this._titleField) {
              return "";
            }

            return this._titleField.split(",").map(function (field) {
              return _this3.extractValue(item, field);
            }).reduce(function (acc, titlePart) {
              return acc ? "".concat(acc, " ").concat(titlePart) : titlePart;
            });
          }
        }, {
          key: "extractValue",
          value: function extractValue(obj, key) {
            var keys;
            var result;

            if (key) {
              keys = key.split(".");
              result = obj;

              var _iterator = _createForOfIteratorHelper(keys),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  key = _step.value;

                  if (result) {
                    result = result[key];
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else {
              result = obj;
            }

            return result;
          }
        }, {
          key: "processResults",
          value: function processResults(matches) {
            var i;
            var results = [];

            if (matches && matches.length > 0) {
              for (i = 0; i < matches.length; i++) {
                var item = this.convertToItem(matches[i]);

                if (item) {
                  results.push(item);
                }
              }
            }

            return results;
          }
        }, {
          key: "extractBySearchFields",
          value: function extractBySearchFields(searchFields, item) {
            var _this4 = this;

            return searchFields.map(function (searchField) {
              return _this4.extractValue(item, searchField);
            }).filter(function (value) {
              return !!value;
            });
          }
        }]);

        return CompleterBaseData;
      }(rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject);

      var _LocalData = /*#__PURE__*/function (_CompleterBaseData) {
        _inherits(_LocalData, _CompleterBaseData);

        var _super2 = _createSuper(_LocalData);

        function _LocalData() {
          var _this5;

          _classCallCheck(this, _LocalData);

          _this5 = _super2.call(this);
          _this5.dataSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          _this5._data = [];
          _this5.savedTerm = null;
          return _this5;
        }

        _createClass(_LocalData, [{
          key: "data",
          value: function data(_data) {
            var _this6 = this;

            if (_data instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable) {
              var data$ = _data;
              data$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function () {
                return [];
              })).subscribe(function (res) {
                _this6._data = res;

                if (_this6.savedTerm) {
                  _this6.search(_this6.savedTerm);
                }

                _this6.dataSourceChange.emit();
              });
            } else {
              this._data = _data;
            }

            this.dataSourceChange.emit();
            return this;
          }
        }, {
          key: "search",
          value: function search(term) {
            if (!this._data) {
              this.savedTerm = term;
            } else {
              this.savedTerm = null;
              var matches = this.extractMatches(this._data, term);
              this.next(this.processResults(matches));
            }
          }
        }, {
          key: "convertToItem",
          value: function convertToItem(data) {
            return _get(_getPrototypeOf(_LocalData.prototype), "convertToItem", this).call(this, data);
          }
        }]);

        return _LocalData;
      }(CompleterBaseData);

      var _RemoteData = /*#__PURE__*/function (_CompleterBaseData2) {
        _inherits(_RemoteData, _CompleterBaseData2);

        var _super3 = _createSuper(_RemoteData);

        function _RemoteData(http) {
          var _this7;

          _classCallCheck(this, _RemoteData);

          _this7 = _super3.call(this);
          _this7.http = http;
          _this7.dataSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          _this7._remoteUrl = null;
          _this7.remoteSearch = null;
          _this7._urlFormater = null;
          _this7._dataField = null;
          return _this7;
        }

        _createClass(_RemoteData, [{
          key: "remoteUrl",
          value: function remoteUrl(_remoteUrl) {
            this._remoteUrl = _remoteUrl;
            this.dataSourceChange.emit();
            return this;
          }
        }, {
          key: "urlFormater",
          value: function urlFormater(_urlFormater) {
            this._urlFormater = _urlFormater;
          }
        }, {
          key: "dataField",
          value: function dataField(_dataField) {
            this._dataField = _dataField;
          }
        }, {
          key: "requestOptions",
          value: function requestOptions(_requestOptions) {
            this._requestOptions = _requestOptions;
          }
        }, {
          key: "search",
          value: function search(term) {
            var _this8 = this;

            this.cancel(); // let params = {};

            var url = "";

            if (this._urlFormater) {
              url = this._urlFormater(term);
            } else {
              url = this._remoteUrl + encodeURIComponent(term);
            }

            this.remoteSearch = this.http.get(url, Object.assign({}, this._requestOptions)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (data) {
              var matches = _this8.extractValue(data, _this8._dataField);

              return _this8.extractMatches(matches, term);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function () {
              return [];
            })).subscribe(function (matches) {
              var results = _this8.processResults(matches);

              _this8.next(results);
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            if (this.remoteSearch) {
              this.remoteSearch.unsubscribe();
            }
          }
        }, {
          key: "convertToItem",
          value: function convertToItem(data) {
            return _get(_getPrototypeOf(_RemoteData.prototype), "convertToItem", this).call(this, data);
          }
        }]);

        return _RemoteData;
      }(CompleterBaseData);

      var _LocalDataFactory = /*#__PURE__*/function () {
        function LocalDataFactory() {
          _classCallCheck(this, LocalDataFactory);
        }

        _createClass(LocalDataFactory, [{
          key: "create",
          value: function create() {
            return new _LocalData();
          }
        }]);

        return LocalDataFactory;
      }();

      _LocalDataFactory.ɵfac = function LocalDataFactory_Factory(t) {
        return new (t || _LocalDataFactory)();
      };

      _LocalDataFactory.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _LocalDataFactory,
        factory: function factory(t) {
          return _LocalDataFactory.ɵfac(t);
        }
      });

      var _RemoteDataFactory = /*#__PURE__*/function () {
        function RemoteDataFactory(http) {
          _classCallCheck(this, RemoteDataFactory);

          this.http = http;
        }

        _createClass(RemoteDataFactory, [{
          key: "create",
          value: function create() {
            return new _RemoteData(this.http);
          }
        }]);

        return RemoteDataFactory;
      }();

      _RemoteDataFactory.ɵfac = function RemoteDataFactory_Factory(t) {
        return new (t || _RemoteDataFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
      };

      _RemoteDataFactory.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _RemoteDataFactory,
        factory: function factory(t) {
          return _RemoteDataFactory.ɵfac(t);
        }
      });
      _RemoteDataFactory = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient])], _RemoteDataFactory);

      var _CompleterService = /*#__PURE__*/function () {
        function CompleterService(localDataFactory, // Using any instead of () => LocalData because of AoT errors
        remoteDataFactory // Using any instead of () => LocalData because of AoT errors
        ) {
          _classCallCheck(this, CompleterService);

          this.localDataFactory = localDataFactory;
          this.remoteDataFactory = remoteDataFactory;
        }

        _createClass(CompleterService, [{
          key: "local",
          value: function local(data) {
            var searchFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var titleField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            var localData = this.localDataFactory.create();
            return localData.data(data).searchFields(searchFields).titleField(titleField);
          }
        }, {
          key: "remote",
          value: function remote(url) {
            var searchFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var titleField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            var remoteData = this.remoteDataFactory.create();
            return remoteData.remoteUrl(url).searchFields(searchFields).titleField(titleField);
          }
        }]);

        return CompleterService;
      }();

      _CompleterService.ɵfac = function CompleterService_Factory(t) {
        return new (t || _CompleterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_LocalDataFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_RemoteDataFactory // Using any instead of () => LocalData because of AoT errors
        ));
      };

      _CompleterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _CompleterService,
        factory: function factory(t) {
          return _CompleterService.ɵfac(t);
        }
      });
      _CompleterService = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_LocalDataFactory, _RemoteDataFactory // Using any instead of () => LocalData because of AoT errors
      ])], _CompleterService);

      var _CtrCompleter = /*#__PURE__*/function () {
        function CtrCompleter() {
          _classCallCheck(this, CtrCompleter);

          this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.highlighted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.dataSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.list = null;
          this.dropdown = null;
          this._hasHighlighted = false;
          this._hasSelected = false;
          this._cancelBlur = false;
          this._isOpen = false;
          this._autoHighlightIndex = null;
        }

        _createClass(CtrCompleter, [{
          key: "registerList",
          value: function registerList(list) {
            this.list = list;
          }
        }, {
          key: "registerDropdown",
          value: function registerDropdown(dropdown) {
            this.dropdown = dropdown;
          }
        }, {
          key: "onHighlighted",
          value: function onHighlighted(item) {
            this.highlighted.emit(item);
            this._hasHighlighted = !!item;
          }
        }, {
          key: "onSelected",
          value: function onSelected(item) {
            var clearList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            this.selected.emit(item);

            if (item) {
              this._hasSelected = true;
            }

            if (clearList) {
              this.clear();
            }
          }
        }, {
          key: "onDataSourceChange",
          value: function onDataSourceChange() {
            if (this.hasSelected) {
              this.selected.emit(null);
              this._hasSelected = false;
            }

            this.dataSourceChange.emit();
          }
        }, {
          key: "search",
          value: function search(term) {
            if (this._hasSelected) {
              this.selected.emit(null);
              this._hasSelected = false;
            }

            if (this.list) {
              this.list.search(term);
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this._hasHighlighted = false;
            this.isOpen = false;

            if (this.dropdown) {
              this.dropdown.clear();
            }

            if (this.list) {
              this.list.clear();
            }
          }
        }, {
          key: "selectCurrent",
          value: function selectCurrent() {
            if (this.dropdown) {
              this.dropdown.selectCurrent();
            }
          }
        }, {
          key: "nextRow",
          value: function nextRow() {
            if (this.dropdown) {
              this.dropdown.nextRow();
            }
          }
        }, {
          key: "prevRow",
          value: function prevRow() {
            if (this.dropdown) {
              this.dropdown.prevRow();
            }
          }
        }, {
          key: "hasHighlighted",
          value: function hasHighlighted() {
            return this._hasHighlighted;
          }
        }, {
          key: "cancelBlur",
          value: function cancelBlur(cancel) {
            this._cancelBlur = cancel;
          }
        }, {
          key: "isCancelBlur",
          value: function isCancelBlur() {
            return this._cancelBlur;
          }
        }, {
          key: "open",
          value: function open() {
            if (!this._isOpen && !!this.list) {
              this.isOpen = true;
              this.list.open();
            }
          }
        }, {
          key: "isOpen",
          get: function get() {
            return this._isOpen;
          },
          set: function set(open) {
            this._isOpen = open;
            this.opened.emit(this._isOpen);

            if (this.list) {
              this.list.isOpen(open);
            }
          }
        }, {
          key: "autoHighlightIndex",
          get: function get() {
            return this._autoHighlightIndex;
          },
          set: function set(index) {
            this._autoHighlightIndex = index;

            if (this.dropdown) {
              this.dropdown.highlightRow(this._autoHighlightIndex);
            }
          }
        }, {
          key: "hasSelected",
          get: function get() {
            return this._hasSelected;
          }
        }]);

        return CtrCompleter;
      }();

      _CtrCompleter.ɵfac = function CtrCompleter_Factory(t) {
        return new (t || _CtrCompleter)();
      };

      _CtrCompleter.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CtrCompleter,
        selectors: [["", "ctrCompleter", ""]],
        outputs: {
          selected: "selected",
          highlighted: "highlighted",
          opened: "opened",
          dataSourceChange: "dataSourceChange"
        }
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CtrCompleter.prototype, "selected", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CtrCompleter.prototype, "highlighted", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CtrCompleter.prototype, "opened", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CtrCompleter.prototype, "dataSourceChange", void 0);

      var CtrRowItem = function CtrRowItem(row, index) {
        _classCallCheck(this, CtrRowItem);

        this.row = row;
        this.index = index;
      };

      var _CtrDropdown = /*#__PURE__*/function () {
        function CtrDropdown(completer, el, zone) {
          _classCallCheck(this, CtrDropdown);

          this.completer = completer;
          this.el = el;
          this.zone = zone;
          this.rows = [];
          this.isScrollOn = false;
          this._rowMouseDown = false;
          this.completer.registerDropdown(this);
        }

        _createClass(CtrDropdown, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.completer.registerDropdown(null);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this9 = this;

            var css = getComputedStyle(this.el.nativeElement);
            var autoHighlightIndex = this.completer.autoHighlightIndex;
            this.isScrollOn = !!css.maxHeight && css.overflowY === "auto";

            if (autoHighlightIndex) {
              this.zone.run(function () {
                _this9.highlightRow(autoHighlightIndex);
              });
            }
          }
        }, {
          key: "onMouseDown",
          value: function onMouseDown(event) {
            var _this10 = this;

            // Support for canceling blur on IE (issue #158)
            if (!this._rowMouseDown) {
              this.completer.cancelBlur(true);
              this.zone.run(function () {
                _this10.completer.cancelBlur(false);
              });
            } else {
              this._rowMouseDown = false;
            }
          }
        }, {
          key: "registerRow",
          value: function registerRow(row) {
            var arrIndex = this.rows.findIndex(function (_row) {
              return _row.index === row.index;
            });

            if (arrIndex >= 0) {
              this.rows[arrIndex] = row;
            } else {
              this.rows.push(row);
            }
          }
        }, {
          key: "unregisterRow",
          value: function unregisterRow(rowIndex) {
            var arrIndex = this.rows.findIndex(function (_row) {
              return _row.index === rowIndex;
            });
            this.rows.splice(arrIndex, 1);

            if (this.currHighlighted && rowIndex === this.currHighlighted.index) {
              this.highlightRow(null);
            }
          }
        }, {
          key: "highlightRow",
          value: function highlightRow(index) {
            var highlighted = this.rows.find(function (row) {
              return row.index === index;
            });

            if (isNil(index) || index < 0) {
              if (this.currHighlighted) {
                this.currHighlighted.row.setHighlighted(false);
              }

              this.currHighlighted = undefined;
              this.completer.onHighlighted(null);
              return;
            }

            if (!highlighted) {
              return;
            }

            if (this.currHighlighted) {
              this.currHighlighted.row.setHighlighted(false);
            }

            this.currHighlighted = highlighted;
            this.currHighlighted.row.setHighlighted(true);
            this.completer.onHighlighted(this.currHighlighted.row.getDataItem());

            if (this.isScrollOn && this.currHighlighted) {
              var rowTop = this.dropdownRowTop();

              if (!rowTop) {
                return;
              }

              if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
              } else {
                var row = this.currHighlighted.row.getNativeElement();

                if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                  this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));

                  if (this.el.nativeElement.getBoundingClientRect().bottom - this.dropdownRowOffsetHeight(row) < row.getBoundingClientRect().top) {
                    this.dropdownScrollTopTo(row.getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top + parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10)));
                  }
                }
              }
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this.rows = [];
          }
        }, {
          key: "onSelected",
          value: function onSelected(item) {
            this.completer.onSelected(item);
          }
        }, {
          key: "rowMouseDown",
          value: function rowMouseDown() {
            this._rowMouseDown = true;
          }
        }, {
          key: "selectCurrent",
          value: function selectCurrent() {
            if (!!this.currHighlighted && !!this.currHighlighted.row) {
              this.onSelected(this.currHighlighted.row.getDataItem());
            } else if (this.rows.length > 0) {
              this.onSelected(this.rows[0].row.getDataItem());
            }
          }
        }, {
          key: "nextRow",
          value: function nextRow() {
            var nextRowIndex = 0;

            if (this.currHighlighted) {
              nextRowIndex = this.currHighlighted.index + 1;
            }

            this.highlightRow(nextRowIndex);
          }
        }, {
          key: "prevRow",
          value: function prevRow() {
            var nextRowIndex = -1;

            if (this.currHighlighted) {
              nextRowIndex = this.currHighlighted.index - 1;
            }

            this.highlightRow(nextRowIndex);
          }
        }, {
          key: "dropdownScrollTopTo",
          value: function dropdownScrollTopTo(offset) {
            this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
          }
        }, {
          key: "dropdownRowTop",
          value: function dropdownRowTop() {
            if (!this.currHighlighted) {
              return;
            }

            return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top + parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
          }
        }, {
          key: "dropdownHeight",
          value: function dropdownHeight() {
            return this.el.nativeElement.getBoundingClientRect().top + parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
          }
        }, {
          key: "dropdownRowOffsetHeight",
          value: function dropdownRowOffsetHeight(row) {
            var css = getComputedStyle(row.parentElement);
            return row.parentElement.offsetHeight + parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
          }
        }]);

        return CtrDropdown;
      }();

      _CtrDropdown.ɵfac = function CtrDropdown_Factory(t) {
        return new (t || _CtrDropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_CtrCompleter, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };

      _CtrDropdown.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CtrDropdown,
        selectors: [["", "ctrDropdown", ""]],
        hostBindings: function CtrDropdown_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function CtrDropdown_mousedown_HostBindingHandler($event) {
              return ctx.onMouseDown($event);
            });
          }
        }
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)("mousedown", ["$event"]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Function), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Object]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:returntype", void 0)], _CtrDropdown.prototype, "onMouseDown", null);
      _CtrDropdown = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_6__.__param)(0, (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host)()), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_CtrCompleter, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone])], _CtrDropdown); // keyboard events

      var KEY_DW = 40;
      var KEY_RT = 39;
      var KEY_UP = 38;
      var KEY_LF = 37;
      var KEY_ES = 27;
      var KEY_EN = 13;
      var KEY_TAB = 9;
      var KEY_BK = 8;
      var KEY_SH = 16;
      var KEY_CL = 20;
      var KEY_F1 = 112;
      var KEY_F12 = 123;

      var _CtrInput = /*#__PURE__*/function () {
        function CtrInput(completer, ngModel, el) {
          var _this11 = this;

          _classCallCheck(this, CtrInput);

          this.completer = completer;
          this.ngModel = ngModel;
          this.el = el;
          this.clearSelected = false;
          this.clearUnselected = false;
          this.overrideSuggested = false;
          this.fillHighlighted = true;
          this.openOnFocus = false;
          this.openOnClick = false;
          this.selectOnClick = false;
          this.selectOnFocus = false;
          this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this._searchStr = "";
          this._displayStr = "";
          this.blurTimer = null;
          this.completer.selected.subscribe(function (item) {
            if (!item) {
              return;
            }

            if (_this11.clearSelected) {
              _this11.searchStr = "";
            } else {
              _this11.searchStr = item.title;
            }

            _this11.ngModelChange.emit(_this11.searchStr);
          });
          this.completer.highlighted.subscribe(function (item) {
            if (_this11.fillHighlighted) {
              if (item) {
                _this11._displayStr = item.title;

                _this11.ngModelChange.emit(item.title);
              } else {
                _this11._displayStr = _this11.searchStr;

                _this11.ngModelChange.emit(_this11.searchStr);
              }
            }
          });
          this.completer.dataSourceChange.subscribe(function () {
            _this11.completer.search(_this11.searchStr);
          });

          if (this.ngModel.valueChanges) {
            this.ngModel.valueChanges.subscribe(function (value) {
              if (!isNil(value) && _this11._displayStr !== value) {
                if (_this11.searchStr !== value) {
                  _this11.completer.search(value);
                }

                _this11.searchStr = value;
              }
            });
          }
        }

        _createClass(CtrInput, [{
          key: "keyupHandler",
          value: function keyupHandler(event) {
            if (event.keyCode === KEY_LF || event.keyCode === KEY_RT || event.keyCode === KEY_TAB) {
              // do nothing
              return;
            }

            if (event.keyCode === KEY_UP || event.keyCode === KEY_EN) {
              event.preventDefault();
            } else if (event.keyCode === KEY_DW) {
              event.preventDefault();
              this.completer.search(this.searchStr);
            } else if (event.keyCode === KEY_ES) {
              if (this.completer.isOpen) {
                this.restoreSearchValue();
                this.completer.clear();
                event.stopPropagation();
                event.preventDefault();
              }
            }
          }
        }, {
          key: "pasteHandler",
          value: function pasteHandler(event) {
            this.completer.open();
          }
        }, {
          key: "keydownHandler",
          value: function keydownHandler(event) {
            var keyCode = event.keyCode || event.which;

            if (keyCode === KEY_EN) {
              if (this.completer.hasHighlighted()) {
                event.preventDefault();
              }

              this.handleSelection();
            } else if (keyCode === KEY_DW) {
              event.preventDefault();
              this.completer.open();
              this.completer.nextRow();
            } else if (keyCode === KEY_UP) {
              event.preventDefault();
              this.completer.prevRow();
            } else if (keyCode === KEY_TAB) {
              this.handleSelection();
            } else if (keyCode === KEY_BK) {
              this.completer.open();
            } else if (keyCode === KEY_ES) {
              // This is very specific to IE10/11 #272
              // without this, IE clears the input text
              event.preventDefault();

              if (this.completer.isOpen) {
                event.stopPropagation();
              }
            } else {
              if (keyCode !== 0 && keyCode !== KEY_SH && keyCode !== KEY_CL && (keyCode <= KEY_F1 || keyCode >= KEY_F12) && !event.ctrlKey && !event.metaKey && !event.altKey) {
                this.completer.open();
              }
            }
          }
        }, {
          key: "onBlur",
          value: function onBlur(event) {
            var _this12 = this;

            // Check if we need to cancel Blur for IE
            if (this.completer.isCancelBlur()) {
              setTimeout(function () {
                // get the focus back
                _this12.el.nativeElement.focus();
              }, 0);
              return;
            }

            if (this.completer.isOpen) {
              this.blurTimer = (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(200).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(function () {
                return _this12.doBlur();
              });
            }
          }
        }, {
          key: "onfocus",
          value: function onfocus() {
            if (this.blurTimer) {
              this.blurTimer.unsubscribe();
              this.blurTimer = null;
            }

            if (this.selectOnFocus) {
              this.el.nativeElement.select();
            }

            if (this.openOnFocus) {
              this.completer.open();
            }
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            if (this.selectOnClick) {
              this.el.nativeElement.select();
            }

            if (this.openOnClick) {
              if (this.completer.isOpen) {
                this.completer.clear();
              } else {
                this.completer.open();
              }
            }
          }
        }, {
          key: "searchStr",
          get: function get() {
            return this._searchStr;
          },
          set: function set(term) {
            this._searchStr = term;
            this._displayStr = term;
          }
        }, {
          key: "handleSelection",
          value: function handleSelection() {
            if (this.completer.hasHighlighted()) {
              this._searchStr = "";
              this.completer.selectCurrent();
            } else if (this.overrideSuggested) {
              this.completer.onSelected({
                title: this.searchStr,
                originalObject: null
              });
            } else {
              if (this.clearUnselected && !this.completer.hasSelected) {
                this.searchStr = "";
                this.ngModelChange.emit(this.searchStr);
              }

              this.completer.clear();
            }
          }
        }, {
          key: "restoreSearchValue",
          value: function restoreSearchValue() {
            if (this.fillHighlighted) {
              if (this._displayStr !== this.searchStr) {
                this._displayStr = this.searchStr;
                this.ngModelChange.emit(this.searchStr);
              }
            }
          }
        }, {
          key: "doBlur",
          value: function doBlur() {
            if (this.blurTimer) {
              this.blurTimer.unsubscribe();
              this.blurTimer = null;
            }

            if (this.overrideSuggested) {
              this.completer.onSelected({
                title: this.searchStr,
                originalObject: null
              });
            } else {
              if (this.clearUnselected && !this.completer.hasSelected) {
                this.searchStr = "";
                this.ngModelChange.emit(this.searchStr);
              } else {
                this.restoreSearchValue();
              }
            }

            this.completer.clear();
          }
        }]);

        return CtrInput;
      }();

      _CtrInput.ɵfac = function CtrInput_Factory(t) {
        return new (t || _CtrInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_CtrCompleter, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _CtrInput.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CtrInput,
        selectors: [["", "ctrInput", ""]],
        hostBindings: function CtrInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CtrInput_keyup_HostBindingHandler($event) {
              return ctx.keyupHandler($event);
            })("paste", function CtrInput_paste_HostBindingHandler($event) {
              return ctx.pasteHandler($event);
            })("keydown", function CtrInput_keydown_HostBindingHandler($event) {
              return ctx.keydownHandler($event);
            })("blur", function CtrInput_blur_HostBindingHandler($event) {
              return ctx.onBlur($event);
            })("focus", function CtrInput_focus_HostBindingHandler() {
              return ctx.onfocus();
            })("click", function CtrInput_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        },
        inputs: {
          clearSelected: "clearSelected",
          clearUnselected: "clearUnselected",
          overrideSuggested: "overrideSuggested",
          fillHighlighted: "fillHighlighted",
          openOnFocus: "openOnFocus",
          openOnClick: "openOnClick",
          selectOnClick: "selectOnClick",
          selectOnFocus: "selectOnFocus"
        },
        outputs: {
          ngModelChange: "ngModelChange"
        }
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)("clearSelected"), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CtrInput.prototype, "clearSelected", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)("clearUnselected"), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CtrInput.prototype, "clearUnselected", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)("overrideSuggested"), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CtrInput.prototype, "overrideSuggested", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)("fillHighlighted"), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CtrInput.prototype, "fillHighlighted", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)("openOnFocus"), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CtrInput.prototype, "openOnFocus", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)("openOnClick"), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CtrInput.prototype, "openOnClick", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)("selectOnClick"), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CtrInput.prototype, "selectOnClick", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)("selectOnFocus"), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CtrInput.prototype, "selectOnFocus", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter)], _CtrInput.prototype, "ngModelChange", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)("keyup", ["$event"]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Function), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Object]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:returntype", void 0)], _CtrInput.prototype, "keyupHandler", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)("paste", ["$event"]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Function), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Object]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:returntype", void 0)], _CtrInput.prototype, "pasteHandler", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)("keydown", ["$event"]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Function), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Object]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:returntype", void 0)], _CtrInput.prototype, "keydownHandler", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)("blur", ["$event"]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Function), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Object]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:returntype", void 0)], _CtrInput.prototype, "onBlur", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)("focus", []), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Function), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", []), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:returntype", void 0)], _CtrInput.prototype, "onfocus", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)("click", ["$event"]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Function), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Object]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:returntype", void 0)], _CtrInput.prototype, "onClick", null);
      _CtrInput = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_6__.__param)(0, (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host)()), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_CtrCompleter, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef])], _CtrInput);

      var CtrListContext = function CtrListContext(results, searching, searchInitialized, isOpen) {
        _classCallCheck(this, CtrListContext);

        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
        this.isOpen = isOpen;
      };

      var _CtrList = /*#__PURE__*/function () {
        function CtrList(completer, templateRef, viewContainer, cd, zone) {
          _classCallCheck(this, CtrList);

          this.completer = completer;
          this.templateRef = templateRef;
          this.viewContainer = viewContainer;
          this.cd = cd;
          this.zone = zone;
          this.ctrListMinSearchLength = MIN_SEARCH_LENGTH;
          this.ctrListPause = PAUSE;
          this.ctrListAutoMatch = false;
          this.ctrListAutoHighlight = false;
          this.ctrListDisplaySearching = true;
          this._dataService = null; // private results: CompleterItem[] = [];

          this.term = null; // private searching = false;

          this.searchTimer = null;
          this.clearTimer = null;
          this.ctx = new CtrListContext([], false, false, false);
          this._initialValue = null;
          this.viewRef = null;
        }

        _createClass(CtrList, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.completer.registerList(this);
            this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false, false));
          }
        }, {
          key: "dataService",
          set: function set(newService) {
            this._dataService = newService;
            this.dataServiceSubscribe();
          }
        }, {
          key: "initialValue",
          set: function set(value) {
            var _this13 = this;

            if (this._dataService && typeof this._dataService.convertToItem === "function") {
              this.zone.run(function () {
                var initialItem = _this13._dataService && _this13._dataService.convertToItem(value);

                if (initialItem) {
                  _this13.completer.onSelected(initialItem, false);
                }
              });
            } else if (!this._dataService) {
              this._initialValue = value;
            }
          }
        }, {
          key: "search",
          value: function search(term) {
            var _this14 = this;

            if (!isNil(term) && term.length >= this.ctrListMinSearchLength && this.term !== term) {
              if (this.searchTimer) {
                this.searchTimer.unsubscribe();
                this.searchTimer = null;
              }

              if (!this.ctx.searching) {
                if (this.ctrListDisplaySearching) {
                  this.ctx.results = [];
                }

                this.ctx.searching = true;
                this.ctx.searchInitialized = true;
                this.refreshTemplate();
              }

              if (this.clearTimer) {
                this.clearTimer.unsubscribe();
              }

              this.searchTimer = (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(this.ctrListPause).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(function () {
                _this14.searchTimerComplete(term);
              });
            } else if (!isNil(term) && term.length < this.ctrListMinSearchLength) {
              this.clear();
              this.term = "";
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            var _this15 = this;

            if (this.searchTimer) {
              this.searchTimer.unsubscribe();
            }

            this.clearTimer = (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(CLEAR_TIMEOUT).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(function () {
              _this15._clear();
            });
          }
        }, {
          key: "open",
          value: function open() {
            if (!this.ctx.searchInitialized) {
              this.search("");
            }

            this.refreshTemplate();
          }
        }, {
          key: "isOpen",
          value: function isOpen(open) {
            this.ctx.isOpen = open;
          }
        }, {
          key: "_clear",
          value: function _clear() {
            if (this.searchTimer) {
              this.searchTimer.unsubscribe();
              this.searchTimer = null;
            }

            if (this.dataService) {
              this.dataService.cancel();
            }

            this.viewContainer.clear();
            this.viewRef = null;
          }
        }, {
          key: "searchTimerComplete",
          value: function searchTimerComplete(term) {
            // Begin the search
            if (isNil(term) || term.length < this.ctrListMinSearchLength) {
              this.ctx.searching = false;
              return;
            }

            this.term = term;

            if (this._dataService) {
              this._dataService.search(term);
            }
          }
        }, {
          key: "refreshTemplate",
          value: function refreshTemplate() {
            // create the template if it doesn't exist
            if (!this.viewRef) {
              this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
            } else if (!this.viewRef.destroyed) {
              // refresh the template
              this.viewRef.context.isOpen = this.ctx.isOpen;
              this.viewRef.context.results = this.ctx.results;
              this.viewRef.context.searching = this.ctx.searching;
              this.viewRef.context.searchInitialized = this.ctx.searchInitialized;
              this.viewRef.detectChanges();
            }

            this.cd.markForCheck();
          }
        }, {
          key: "getBestMatchIndex",
          value: function getBestMatchIndex() {
            var _this16 = this;

            if (!this.ctx.results || !this.term) {
              return null;
            } // First try to find the exact term


            var bestMatch = this.ctx.results.findIndex(function (item) {
              return item.title.toLowerCase() === _this16.term.toLocaleLowerCase();
            }); // If not try to find the first item that starts with the term

            if (bestMatch < 0) {
              bestMatch = this.ctx.results.findIndex(function (item) {
                return item.title.toLowerCase().startsWith(_this16.term.toLocaleLowerCase());
              });
            } // If not try to find the first item that includes the term


            if (bestMatch < 0) {
              bestMatch = this.ctx.results.findIndex(function (item) {
                return item.title.toLowerCase().includes(_this16.term.toLocaleLowerCase());
              });
            }

            return bestMatch < 0 ? null : bestMatch;
          }
        }, {
          key: "dataServiceSubscribe",
          value: function dataServiceSubscribe() {
            var _this17 = this;

            if (this._dataService) {
              this._dataService.subscribe(function (results) {
                _this17.ctx.searchInitialized = true;
                _this17.ctx.searching = false;
                _this17.ctx.results = results;

                if (_this17.ctrListAutoMatch && results && results.length === 1 && results[0].title && !isNil(_this17.term) && results[0].title.toLocaleLowerCase() === _this17.term.toLocaleLowerCase()) {
                  // Do automatch
                  _this17.completer.onSelected(results[0]);

                  return;
                }

                _this17.refreshTemplate();

                if (_this17.ctrListAutoHighlight) {
                  _this17.completer.autoHighlightIndex = _this17.getBestMatchIndex();
                }
              }, function (error) {
                // tslint:disable-next-line:no-console
                console.error(error); // tslint:disable-next-line:no-console

                console.error("Unexpected error in dataService: errors should be handled by the dataService Observable");
                return [];
              });

              if (this._dataService.dataSourceChange) {
                this._dataService.dataSourceChange.subscribe(function () {
                  _this17.term = null;
                  _this17.ctx.searchInitialized = false;
                  _this17.ctx.searching = false;
                  _this17.ctx.results = [];

                  _this17.refreshTemplate();

                  _this17.completer.onDataSourceChange();
                });
              }
            }
          }
        }]);

        return CtrList;
      }();

      _CtrList.ɵfac = function CtrList_Factory(t) {
        return new (t || _CtrList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_CtrCompleter, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };

      _CtrList.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CtrList,
        selectors: [["", "ctrList", ""]],
        inputs: {
          ctrListMinSearchLength: "ctrListMinSearchLength",
          ctrListPause: "ctrListPause",
          ctrListAutoMatch: "ctrListAutoMatch",
          ctrListAutoHighlight: "ctrListAutoHighlight",
          ctrListDisplaySearching: "ctrListDisplaySearching",
          dataService: ["ctrList", "dataService"],
          initialValue: ["ctrListInitialValue", "initialValue"]
        }
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CtrList.prototype, "ctrListMinSearchLength", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CtrList.prototype, "ctrListPause", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CtrList.prototype, "ctrListAutoMatch", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CtrList.prototype, "ctrListAutoHighlight", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CtrList.prototype, "ctrListDisplaySearching", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)("ctrList"), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Object])], _CtrList.prototype, "dataService", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)("ctrListInitialValue"), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Object])], _CtrList.prototype, "initialValue", null);
      _CtrList = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_6__.__param)(0, (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host)()), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_CtrCompleter, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone])], _CtrList);

      var _CtrRow = /*#__PURE__*/function () {
        function CtrRow(el, renderer, dropdown) {
          _classCallCheck(this, CtrRow);

          this.el = el;
          this.renderer = renderer;
          this.dropdown = dropdown;
          this.selected = false;
          this._rowIndex = 0;
          this._item = null;
        }

        _createClass(CtrRow, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._rowIndex) {
              this.dropdown.unregisterRow(this._rowIndex);
            }
          }
        }, {
          key: "ctrRow",
          set: function set(index) {
            this._rowIndex = index;
            this.dropdown.registerRow(new CtrRowItem(this, this._rowIndex));
          }
        }, {
          key: "dataItem",
          set: function set(item) {
            this._item = item;
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            this.dropdown.onSelected(this._item);
          }
        }, {
          key: "onMouseEnter",
          value: function onMouseEnter(event) {
            this.dropdown.highlightRow(this._rowIndex);
          }
        }, {
          key: "onMouseDown",
          value: function onMouseDown(event) {
            this.dropdown.rowMouseDown();
          }
        }, {
          key: "setHighlighted",
          value: function setHighlighted(selected) {
            this.selected = selected;

            if (this.selected) {
              this.renderer.addClass(this.el.nativeElement, "completer-selected-row");
            } else {
              this.renderer.removeClass(this.el.nativeElement, "completer-selected-row");
            }
          }
        }, {
          key: "getNativeElement",
          value: function getNativeElement() {
            return this.el.nativeElement;
          }
        }, {
          key: "getDataItem",
          value: function getDataItem() {
            return this._item;
          }
        }]);

        return CtrRow;
      }();

      _CtrRow.ɵfac = function CtrRow_Factory(t) {
        return new (t || _CtrRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_CtrDropdown, 1));
      };

      _CtrRow.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CtrRow,
        selectors: [["", "ctrRow", ""]],
        hostBindings: function CtrRow_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CtrRow_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            })("mouseenter", function CtrRow_mouseenter_HostBindingHandler($event) {
              return ctx.onMouseEnter($event);
            })("mousedown", function CtrRow_mousedown_HostBindingHandler($event) {
              return ctx.onMouseDown($event);
            });
          }
        },
        inputs: {
          ctrRow: "ctrRow",
          dataItem: "dataItem"
        }
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Number), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Number])], _CtrRow.prototype, "ctrRow", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Object])], _CtrRow.prototype, "dataItem", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)("click", ["$event"]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Function), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Object]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:returntype", void 0)], _CtrRow.prototype, "onClick", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)("mouseenter", ["$event"]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Function), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Object]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:returntype", void 0)], _CtrRow.prototype, "onMouseEnter", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)("mousedown", ["$event"]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Function), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Object]), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:returntype", void 0)], _CtrRow.prototype, "onMouseDown", null);
      _CtrRow = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_6__.__param)(2, (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host)()), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2, _CtrDropdown])], _CtrRow);

      var _CompleterListItemCmp = /*#__PURE__*/function () {
        function CompleterListItemCmp() {
          _classCallCheck(this, CompleterListItemCmp);

          this.text = "";
          this.searchStr = "";
          this.matchClass = "";
          this.type = "";
          this.parts = [];
        }

        _createClass(CompleterListItemCmp, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.searchStr) {
              this.parts.push({
                isMatch: false,
                text: this.text
              });
              return;
            }

            var matchStr = this.text.toLowerCase();
            var matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
            var startIndex = 0;

            while (matchPos >= 0) {
              var matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);

              if (matchPos === 0) {
                this.parts.push({
                  isMatch: true,
                  text: matchText
                });
                startIndex += this.searchStr.length;
              } else if (matchPos > 0) {
                var matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({
                  isMatch: false,
                  text: matchPart
                });
                this.parts.push({
                  isMatch: true,
                  text: matchText
                });
                startIndex += this.searchStr.length + matchPart.length;
              }

              matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
            }

            if (startIndex < this.text.length) {
              this.parts.push({
                isMatch: false,
                text: this.text.slice(startIndex, this.text.length)
              });
            }
          }
        }]);

        return CompleterListItemCmp;
      }();

      _CompleterListItemCmp.ɵfac = function CompleterListItemCmp_Factory(t) {
        return new (t || _CompleterListItemCmp)();
      };

      _CompleterListItemCmp.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CompleterListItemCmp,
        selectors: [["completer-list-item"]],
        inputs: {
          text: "text",
          searchStr: "searchStr",
          matchClass: "matchClass",
          type: "type"
        },
        decls: 2,
        vars: 5,
        consts: [[1, "completer-list-item-holder", 3, "ngClass"], ["class", "completer-list-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "completer-list-item", 3, "ngClass"]],
        template: function CompleterListItemCmp_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompleterListItemCmp_span_1_Template, 2, 2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.type === "title", ctx.type === "description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parts);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf],
        encapsulation: 2
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)], _CompleterListItemCmp.prototype, "text", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)], _CompleterListItemCmp.prototype, "searchStr", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)], _CompleterListItemCmp.prototype, "matchClass", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)], _CompleterListItemCmp.prototype, "type", void 0);

      var noop = function noop() {
        return;
      };

      var COMPLETER_CONTROL_VALUE_ACCESSOR = {
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _CompleterCmp;
        })
      };

      var _CompleterCmp = /*#__PURE__*/function () {
        function CompleterCmp(completerService, cdr) {
          _classCallCheck(this, CompleterCmp);

          this.completerService = completerService;
          this.cdr = cdr;
          this.inputName = "";
          this.inputId = "";
          this.pause = PAUSE;
          this.minSearchLength = MIN_SEARCH_LENGTH;
          this.maxChars = MAX_CHARS;
          this.overrideSuggested = false;
          this.clearSelected = false;
          this.clearUnselected = false;
          this.fillHighlighted = true;
          this.placeholder = "";
          this.autoMatch = false;
          this.disableInput = false;
          this.autofocus = false;
          this.openOnFocus = false;
          this.openOnClick = false;
          this.selectOnClick = false;
          this.selectOnFocus = false;
          this.autoHighlight = false;
          this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.highlighted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.keyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("");
          this.displaySearching = true;
          this.displayNoResults = true;
          this._textNoResults = TEXT_NO_RESULTS;
          this._textSearching = TEXT_SEARCHING;
          this._onTouchedCallback = noop;
          this._onChangeCallback = noop;
          this._focus = false;
          this._open = false;
          this._searchStr = "";
        }

        _createClass(CompleterCmp, [{
          key: "value",
          get: function get() {
            return this.searchStr;
          },
          set: function set(v) {
            if (v !== this.searchStr) {
              this.searchStr = v;
            } // Propagate the change in any case


            this._onChangeCallback(v);
          }
        }, {
          key: "searchStr",
          get: function get() {
            return this._searchStr;
          },
          set: function set(value) {
            if (typeof value === "string" || isNil(value)) {
              this._searchStr = value;
            } else {
              this._searchStr = JSON.stringify(value);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this18 = this;

            if (this.autofocus) {
              this._focus = true;
            }

            if (!this.completer) {
              return;
            }

            this.completer.selected.subscribe(function (item) {
              _this18.selected.emit(item);
            });
            this.completer.highlighted.subscribe(function (item) {
              _this18.highlighted.emit(item);
            });
            this.completer.opened.subscribe(function (isOpen) {
              _this18._open = isOpen;

              _this18.opened.emit(isOpen);
            });
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var _this19 = this;

            if (this._focus) {
              setTimeout(function () {
                if (!!_this19.ctrInput) {
                  _this19.ctrInput.nativeElement.focus();

                  _this19._focus = false;
                }
              }, 0);
            }
          }
        }, {
          key: "onTouched",
          value: function onTouched() {
            this._onTouchedCallback();
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.searchStr = value;
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChangeCallback = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouchedCallback = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disableInput = isDisabled;
          }
        }, {
          key: "datasource",
          set: function set(source) {
            if (source) {
              if (source instanceof Array) {
                this.dataService = this.completerService.local(source);
              } else if (typeof source === "string") {
                this.dataService = this.completerService.remote(source);
              } else {
                this.dataService = source;
              }
            }
          }
        }, {
          key: "textNoResults",
          set: function set(text) {
            if (this._textNoResults !== text) {
              this._textNoResults = text;
              this.displayNoResults = !!this._textNoResults && this._textNoResults !== "false";
            }
          }
        }, {
          key: "textSearching",
          set: function set(text) {
            if (this._textSearching !== text) {
              this._textSearching = text;
              this.displaySearching = !!this._textSearching && this._textSearching !== "false";
            }
          }
        }, {
          key: "onBlur",
          value: function onBlur() {
            this.blurEvent.emit();
            this.onTouched();
            this.cdr.detectChanges();
          }
        }, {
          key: "onFocus",
          value: function onFocus() {
            this.focusEvent.emit();
            this.onTouched();
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            this.click.emit(event);
            this.onTouched();
          }
        }, {
          key: "onKeyup",
          value: function onKeyup(event) {
            this.keyup.emit(event);
            event.stopPropagation();
          }
        }, {
          key: "onKeydown",
          value: function onKeydown(event) {
            this.keydown.emit(event);
            event.stopPropagation();
          }
        }, {
          key: "onChange",
          value: function onChange(value) {
            this.value = value;
          }
        }, {
          key: "open",
          value: function open() {
            if (!this.completer) {
              return;
            }

            this.completer.open();
          }
        }, {
          key: "close",
          value: function close() {
            if (!this.completer) {
              return;
            }

            this.completer.clear();
          }
        }, {
          key: "focus",
          value: function focus() {
            if (this.ctrInput) {
              this.ctrInput.nativeElement.focus();
            } else {
              this._focus = true;
            }
          }
        }, {
          key: "blur",
          value: function blur() {
            if (this.ctrInput) {
              this.ctrInput.nativeElement.blur();
            } else {
              this._focus = false;
            }
          }
        }, {
          key: "isOpen",
          value: function isOpen() {
            return this._open;
          }
        }]);

        return CompleterCmp;
      }();

      _CompleterCmp.ɵfac = function CompleterCmp_Factory(t) {
        return new (t || _CompleterCmp)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_CompleterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };

      _CompleterCmp.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CompleterCmp,
        selectors: [["ng2-completer"]],
        viewQuery: function CompleterCmp_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_CtrCompleter, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.completer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ctrInput = _t.first);
          }
        },
        inputs: {
          inputName: "inputName",
          inputId: "inputId",
          pause: "pause",
          minSearchLength: "minSearchLength",
          maxChars: "maxChars",
          overrideSuggested: "overrideSuggested",
          clearSelected: "clearSelected",
          clearUnselected: "clearUnselected",
          fillHighlighted: "fillHighlighted",
          placeholder: "placeholder",
          autoMatch: "autoMatch",
          disableInput: "disableInput",
          autofocus: "autofocus",
          openOnFocus: "openOnFocus",
          openOnClick: "openOnClick",
          selectOnClick: "selectOnClick",
          selectOnFocus: "selectOnFocus",
          autoHighlight: "autoHighlight",
          datasource: "datasource",
          dataService: "dataService",
          textNoResults: "textNoResults",
          textSearching: "textSearching",
          matchClass: "matchClass",
          fieldTabindex: "fieldTabindex",
          inputClass: "inputClass",
          initialValue: "initialValue"
        },
        outputs: {
          selected: "selected",
          highlighted: "highlighted",
          blurEvent: "blur",
          click: "click",
          focusEvent: "focus",
          opened: "opened",
          keyup: "keyup",
          keydown: "keydown"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([COMPLETER_CONTROL_VALUE_ACCESSOR])],
        decls: 4,
        vars: 23,
        consts: [["ctrCompleter", "", 1, "completer-holder"], ["type", "search", "ctrInput", "", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", 1, "completer-input", 3, "ngClass", "ngModel", "placeholder", "tabindex", "disabled", "clearSelected", "clearUnselected", "overrideSuggested", "openOnFocus", "fillHighlighted", "openOnClick", "selectOnClick", "selectOnFocus", "ngModelChange", "blur", "focus", "keyup", "keydown", "click"], ["ctrInput", ""], ["class", "completer-dropdown-holder", 4, "ctrList", "ctrListMinSearchLength", "ctrListPause", "ctrListAutoMatch", "ctrListInitialValue", "ctrListAutoHighlight", "ctrListDisplaySearching"], [1, "completer-dropdown-holder"], ["class", "completer-dropdown", "ctrDropdown", "", 4, "ngIf"], ["ctrDropdown", "", 1, "completer-dropdown"], ["class", "completer-searching", 4, "ngIf"], ["class", "completer-no-results", 4, "ngIf"], ["class", "completer-row-wrapper", 4, "ngFor", "ngForOf"], [1, "completer-searching"], [1, "completer-no-results"], [1, "completer-row-wrapper"], [1, "completer-row", 3, "ctrRow", "dataItem"], ["class", "completer-image-holder", 4, "ngIf"], [1, "completer-item-text", 3, "ngClass"], [1, "completer-title", 3, "text", "matchClass", "searchStr", "type"], ["class", "completer-description", 3, "text", "matchClass", "searchStr", "type", 4, "ngIf"], [1, "completer-image-holder"], ["class", "completer-image", 3, "src", 4, "ngIf"], ["class", "completer-image-default", 4, "ngIf"], [1, "completer-image", 3, "src"], [1, "completer-image-default"], [1, "completer-description", 3, "text", "matchClass", "searchStr", "type"]],
        template: function CompleterCmp_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompleterCmp_Template_input_ngModelChange_1_listener($event) {
              return ctx.searchStr = $event;
            })("ngModelChange", function CompleterCmp_Template_input_ngModelChange_1_listener($event) {
              return ctx.onChange($event);
            })("blur", function CompleterCmp_Template_input_blur_1_listener() {
              return ctx.onBlur();
            })("focus", function CompleterCmp_Template_input_focus_1_listener() {
              return ctx.onFocus();
            })("keyup", function CompleterCmp_Template_input_keyup_1_listener($event) {
              return ctx.onKeyup($event);
            })("keydown", function CompleterCmp_Template_input_keydown_1_listener($event) {
              return ctx.onKeydown($event);
            })("click", function CompleterCmp_Template_input_click_1_listener($event) {
              return ctx.onClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CompleterCmp_div_3_Template, 2, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.inputClass)("ngModel", ctx.searchStr)("placeholder", ctx.placeholder)("tabindex", ctx.fieldTabindex)("disabled", ctx.disableInput)("clearSelected", ctx.clearSelected)("clearUnselected", ctx.clearUnselected)("overrideSuggested", ctx.overrideSuggested)("openOnFocus", ctx.openOnFocus)("fillHighlighted", ctx.fillHighlighted)("openOnClick", ctx.openOnClick)("selectOnClick", ctx.selectOnClick)("selectOnFocus", ctx.selectOnFocus);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId.length > 0 ? ctx.inputId : null)("name", ctx.inputName)("maxlength", ctx.maxChars);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ctrList", ctx.dataService)("ctrListMinSearchLength", ctx.minSearchLength)("ctrListPause", ctx.pause)("ctrListAutoMatch", ctx.autoMatch)("ctrListInitialValue", ctx.initialValue)("ctrListAutoHighlight", ctx.autoHighlight)("ctrListDisplaySearching", ctx.displaySearching);
          }
        },
        directives: [_CtrCompleter, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _CtrInput, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _CtrList, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _CtrDropdown, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _CtrRow, _CompleterListItemCmp],
        styles: [".completer-dropdown[_ngcontent-%COMP%] {\n        border-color: #ececec;\n        border-width: 1px;\n        border-style: solid;\n        border-radius: 2px;\n        width: 250px;\n        padding: 6px;\n        cursor: pointer;\n        z-index: 9999;\n        position: absolute;\n        margin-top: -6px;\n        background-color: #ffffff;\n    }\n\n    .completer-row[_ngcontent-%COMP%] {\n        padding: 5px;\n        color: #000000;\n        margin-bottom: 4px;\n        clear: both;\n        display: inline-block;\n        width: 103%;\n    }\n\n    .completer-selected-row[_ngcontent-%COMP%] {\n        background-color: lightblue;\n        color: #ffffff;\n    }\n\n    .completer-description[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .completer-image-default[_ngcontent-%COMP%] {\n        width: 16px;\n        height: 16px;\n        background-image: url(\"demo/res/img/default.png\");\n    }\n\n    .completer-image-holder[_ngcontent-%COMP%] {\n        float: left;\n        width: 10%;\n    }\n    .completer-item-text-image[_ngcontent-%COMP%] {\n        float: right;\n        width: 90%;\n    }"]
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "dataService", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "inputName", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)], _CompleterCmp.prototype, "inputId", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "pause", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "minSearchLength", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "maxChars", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "overrideSuggested", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "clearSelected", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "clearUnselected", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "fillHighlighted", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "placeholder", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "matchClass", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "fieldTabindex", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "autoMatch", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "disableInput", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "inputClass", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "autofocus", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "openOnFocus", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "openOnClick", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "selectOnClick", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "selectOnFocus", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "initialValue", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "autoHighlight", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "selected", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "highlighted", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)("blur"), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "blurEvent", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "click", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)("focus"), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "focusEvent", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "opened", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter)], _CompleterCmp.prototype, "keyup", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter)], _CompleterCmp.prototype, "keydown", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)(_CtrCompleter, {
        "static": false
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "completer", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)("ctrInput", {
        "static": false
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object)], _CompleterCmp.prototype, "ctrInput", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Object), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [Object])], _CompleterCmp.prototype, "datasource", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [String])], _CompleterCmp.prototype, "textNoResults", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [String])], _CompleterCmp.prototype, "textSearching", null);
      _CompleterCmp = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_CompleterService, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef])], _CompleterCmp);
      var Ng2CompleterModule_1;
      var providers = [_CompleterService, _LocalDataFactory, _RemoteDataFactory];

      var _Ng2CompleterModule = Ng2CompleterModule_1 = /*#__PURE__*/function () {
        function Ng2CompleterModule() {
          _classCallCheck(this, Ng2CompleterModule);
        }

        _createClass(Ng2CompleterModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: Ng2CompleterModule_1,
              providers: providers
            };
          }
        }, {
          key: "forChild",
          value: function forChild() {
            return {
              ngModule: Ng2CompleterModule_1,
              providers: providers
            };
          }
        }]);

        return Ng2CompleterModule;
      }();

      _Ng2CompleterModule.ɵfac = function Ng2CompleterModule_Factory(t) {
        return new (t || _Ng2CompleterModule)();
      };

      _Ng2CompleterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _Ng2CompleterModule
      });
      _Ng2CompleterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: providers,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_LocalDataFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
        }], null, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_RemoteDataFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CompleterService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
        }], function () {
          return [{
            type: _LocalDataFactory
          }, {
            type: _RemoteDataFactory // Using any instead of () => LocalData because of AoT errors

          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CtrCompleter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: "[ctrCompleter]"
          }]
        }], function () {
          return [];
        }, {
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          highlighted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          dataSourceChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CtrDropdown, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: "[ctrDropdown]"
          }]
        }], function () {
          return [{
            type: _CtrCompleter,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }];
        }, {
          onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["mousedown", ["$event"]]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CtrInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: "[ctrInput]"
          }]
        }], function () {
          return [{
            type: _CtrCompleter,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, {
          clearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ["clearSelected"]
          }],
          clearUnselected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ["clearUnselected"]
          }],
          overrideSuggested: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ["overrideSuggested"]
          }],
          fillHighlighted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ["fillHighlighted"]
          }],
          openOnFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ["openOnFocus"]
          }],
          openOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ["openOnClick"]
          }],
          selectOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ["selectOnClick"]
          }],
          selectOnFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ["selectOnFocus"]
          }],
          ngModelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          keyupHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["keyup", ["$event"]]
          }],
          pasteHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["paste", ["$event"]]
          }],
          keydownHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["keydown", ["$event"]]
          }],
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["blur", ["$event"]]
          }],
          onfocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["focus", []]
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["click", ["$event"]]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CtrList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: "[ctrList]"
          }]
        }], function () {
          return [{
            type: _CtrCompleter,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }];
        }, {
          ctrListMinSearchLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          ctrListPause: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          ctrListAutoMatch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          ctrListAutoHighlight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          ctrListDisplaySearching: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          dataService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ["ctrList"]
          }],
          initialValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ["ctrListInitialValue"]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CtrRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: "[ctrRow]"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _CtrDropdown,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }]
          }];
        }, {
          ctrRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          dataItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["click", ["$event"]]
          }],
          onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["mouseenter", ["$event"]]
          }],
          onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["mousedown", ["$event"]]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CompleterListItemCmp, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: "completer-list-item",
            template: "<span class=\"completer-list-item-holder\" [ngClass]= \"{'completer-title': type === 'title', 'completer-description': type === 'description'}\" >\n        <span class=\"completer-list-item\" *ngFor=\"let part of parts\" [ngClass]= \"part.isMatch ? matchClass : null\">{{part.text}}</span>\n    </span>"
          }]
        }], function () {
          return [];
        }, {
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          searchStr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          matchClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CompleterCmp, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: "ng2-completer",
            template: "\n        <div class=\"completer-holder\" ctrCompleter>\n            <input #ctrInput [attr.id]=\"inputId.length > 0 ? inputId : null\" type=\"search\"\n                class=\"completer-input\" ctrInput [ngClass]=\"inputClass\"\n                [(ngModel)]=\"searchStr\" (ngModelChange)=\"onChange($event)\"\n                [attr.name]=\"inputName\" [placeholder]=\"placeholder\"\n                [attr.maxlength]=\"maxChars\" [tabindex]=\"fieldTabindex\" [disabled]=\"disableInput\"\n                [clearSelected]=\"clearSelected\" [clearUnselected]=\"clearUnselected\"\n                [overrideSuggested]=\"overrideSuggested\" [openOnFocus]=\"openOnFocus\" [fillHighlighted]=\"fillHighlighted\"\n                [openOnClick]=\"openOnClick\" [selectOnClick]=\"selectOnClick\" [selectOnFocus]=\"selectOnFocus\"\n                (blur)=\"onBlur()\" (focus)=\"onFocus()\" (keyup)=\"onKeyup($event)\"\n                (keydown)=\"onKeydown($event)\" (click)=\"onClick($event)\"\n                autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" />\n\n            <div class=\"completer-dropdown-holder\"\n                *ctrList=\"dataService;\n                    minSearchLength: minSearchLength;\n                    pause: pause;\n                    autoMatch: autoMatch;\n                    initialValue: initialValue;\n                    autoHighlight: autoHighlight;\n                    displaySearching: displaySearching;\n                    let items = results;\n                    let searchActive = searching;\n                    let isInitialized = searchInitialized;\n                    let isOpen = isOpen;\">\n                <div class=\"completer-dropdown\" ctrDropdown\n                    *ngIf=\"isInitialized && isOpen && (( items?.length > 0|| (displayNoResults && !searchActive)) || (searchActive && displaySearching))\">\n                    <div *ngIf=\"searchActive && displaySearching\" class=\"completer-searching\">{{ _textSearching }}</div>\n                    <div *ngIf=\"!searchActive && (!items || items?.length === 0)\"\n                    class=\"completer-no-results\">{{ _textNoResults }}</div>\n                    <div class=\"completer-row-wrapper\" *ngFor=\"let item of items; let rowIndex=index\">\n                        <div class=\"completer-row\" [ctrRow]=\"rowIndex\" [dataItem]=\"item\">\n                            <div *ngIf=\"item.image || item.image === ''\" class=\"completer-image-holder\">\n                                <img *ngIf=\"item.image != ''\" src=\"{{item.image}}\" class=\"completer-image\" />\n                                <div *ngIf=\"item.image === ''\" class=\"completer-image-default\"></div>\n                            </div>\n                            <div class=\"completer-item-text\"\n                            [ngClass]=\"{'completer-item-text-image': item.image || item.image === '' }\">\n                                <completer-list-item\n                                class=\"completer-title\" [text]=\"item.title\" [matchClass]=\"matchClass\"\n                                [searchStr]=\"searchStr\" [type]=\"'title'\"></completer-list-item>\n                                <completer-list-item *ngIf=\"item.description && item.description != ''\"\n                                class=\"completer-description\" [text]=\"item.description\"\n                                    [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'description'\">\n                                </completer-list-item>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
            styles: ["\n    .completer-dropdown {\n        border-color: #ececec;\n        border-width: 1px;\n        border-style: solid;\n        border-radius: 2px;\n        width: 250px;\n        padding: 6px;\n        cursor: pointer;\n        z-index: 9999;\n        position: absolute;\n        margin-top: -6px;\n        background-color: #ffffff;\n    }\n\n    .completer-row {\n        padding: 5px;\n        color: #000000;\n        margin-bottom: 4px;\n        clear: both;\n        display: inline-block;\n        width: 103%;\n    }\n\n    .completer-selected-row {\n        background-color: lightblue;\n        color: #ffffff;\n    }\n\n    .completer-description {\n        font-size: 14px;\n    }\n\n    .completer-image-default {\n        width: 16px;\n        height: 16px;\n        background-image: url(\"demo/res/img/default.png\");\n    }\n\n    .completer-image-holder {\n        float: left;\n        width: 10%;\n    }\n    .completer-item-text-image {\n        float: right;\n        width: 90%;\n    }\n    "],
            providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _CompleterService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }];
        }, {
          inputName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          inputId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pause: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          minSearchLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          maxChars: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          overrideSuggested: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          clearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          clearUnselected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          fillHighlighted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          autoMatch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          disableInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          autofocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          openOnFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          openOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectOnFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          autoHighlight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          highlighted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          blurEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ["blur"]
          }],
          click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          focusEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ["focus"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          keyup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          keydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          datasource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          dataService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          textNoResults: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          textSearching: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          matchClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          fieldTabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          initialValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          completer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_CtrCompleter, {
              "static": false
            }]
          }],
          ctrInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ["ctrInput", {
              "static": false
            }]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_Ng2CompleterModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [_CompleterListItemCmp, _CtrCompleter, _CtrDropdown, _CtrInput, _CtrList, _CtrRow, _CompleterCmp],
            exports: [_CompleterListItemCmp, _CtrCompleter, _CtrDropdown, _CtrInput, _CtrList, _CtrRow, _CompleterCmp],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule],
            providers: providers
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_Ng2CompleterModule, {
          declarations: function declarations() {
            return [_CompleterListItemCmp, _CtrCompleter, _CtrDropdown, _CtrInput, _CtrList, _CtrRow, _CompleterCmp];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule];
          },
          exports: function exports() {
            return [_CompleterListItemCmp, _CtrCompleter, _CtrDropdown, _CtrInput, _CtrList, _CtrRow, _CompleterCmp];
          }
        });
      })(); //# sourceMappingURL=ng2-completer.js.map

      /***/

    },

    /***/
    64965:
    /*!******************************************************************!*\
      !*** ./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Cell": function Cell() {
          return (
            /* binding */
            _Cell
          );
        },

        /* harmony export */
        "DefaultEditor": function DefaultEditor() {
          return (
            /* binding */
            _DefaultEditor
          );
        },

        /* harmony export */
        "DefaultFilter": function DefaultFilter() {
          return (
            /* binding */
            _DefaultFilter
          );
        },

        /* harmony export */
        "LocalDataSource": function LocalDataSource() {
          return (
            /* binding */
            _LocalDataSource
          );
        },

        /* harmony export */
        "Ng2SmartTableComponent": function Ng2SmartTableComponent() {
          return (
            /* binding */
            _Ng2SmartTableComponent
          );
        },

        /* harmony export */
        "Ng2SmartTableModule": function Ng2SmartTableModule() {
          return (
            /* binding */
            _Ng2SmartTableModule
          );
        },

        /* harmony export */
        "ServerDataSource": function ServerDataSource() {
          return (
            /* binding */
            _ServerDataSource
          );
        },

        /* harmony export */
        "ɵa": function ɵa() {
          return (
            /* binding */
            CellModule
          );
        },

        /* harmony export */
        "ɵb": function ɵb() {
          return (
            /* binding */
            CellComponent
          );
        },

        /* harmony export */
        "ɵba": function ɵba() {
          return (
            /* binding */
            TbodyEditDeleteComponent
          );
        },

        /* harmony export */
        "ɵbb": function ɵbb() {
          return (
            /* binding */
            TbodyCustomComponent
          );
        },

        /* harmony export */
        "ɵbc": function ɵbc() {
          return (
            /* binding */
            Ng2SmartTableTbodyComponent
          );
        },

        /* harmony export */
        "ɵbd": function ɵbd() {
          return (
            /* binding */
            THeadModule
          );
        },

        /* harmony export */
        "ɵbe": function ɵbe() {
          return (
            /* binding */
            ActionsComponent
          );
        },

        /* harmony export */
        "ɵbf": function ɵbf() {
          return (
            /* binding */
            ActionsTitleComponent
          );
        },

        /* harmony export */
        "ɵbg": function ɵbg() {
          return (
            /* binding */
            AddButtonComponent
          );
        },

        /* harmony export */
        "ɵbh": function ɵbh() {
          return (
            /* binding */
            CheckboxSelectAllComponent
          );
        },

        /* harmony export */
        "ɵbi": function ɵbi() {
          return (
            /* binding */
            ColumnTitleComponent
          );
        },

        /* harmony export */
        "ɵbj": function ɵbj() {
          return (
            /* binding */
            TitleComponent
          );
        },

        /* harmony export */
        "ɵbk": function ɵbk() {
          return (
            /* binding */
            TheadFitlersRowComponent
          );
        },

        /* harmony export */
        "ɵbl": function ɵbl() {
          return (
            /* binding */
            TheadFormRowComponent
          );
        },

        /* harmony export */
        "ɵbm": function ɵbm() {
          return (
            /* binding */
            TheadTitlesRowComponent
          );
        },

        /* harmony export */
        "ɵbn": function ɵbn() {
          return (
            /* binding */
            Ng2SmartTableTheadComponent
          );
        },

        /* harmony export */
        "ɵbo": function ɵbo() {
          return (
            /* binding */
            Row
          );
        },

        /* harmony export */
        "ɵbp": function ɵbp() {
          return (
            /* binding */
            DataSet
          );
        },

        /* harmony export */
        "ɵbq": function ɵbq() {
          return (
            /* binding */
            DataSource
          );
        },

        /* harmony export */
        "ɵc": function ɵc() {
          return (
            /* binding */
            EditCellDefault
          );
        },

        /* harmony export */
        "ɵd": function ɵd() {
          return (
            /* binding */
            CustomEditComponent
          );
        },

        /* harmony export */
        "ɵe": function ɵe() {
          return (
            /* binding */
            DefaultEditComponent
          );
        },

        /* harmony export */
        "ɵf": function ɵf() {
          return (
            /* binding */
            EditCellComponent
          );
        },

        /* harmony export */
        "ɵg": function ɵg() {
          return (
            /* binding */
            CheckboxEditorComponent
          );
        },

        /* harmony export */
        "ɵh": function ɵh() {
          return (
            /* binding */
            CompleterEditorComponent
          );
        },

        /* harmony export */
        "ɵi": function ɵi() {
          return (
            /* binding */
            InputEditorComponent
          );
        },

        /* harmony export */
        "ɵj": function ɵj() {
          return (
            /* binding */
            SelectEditorComponent
          );
        },

        /* harmony export */
        "ɵk": function ɵk() {
          return (
            /* binding */
            TextareaEditorComponent
          );
        },

        /* harmony export */
        "ɵl": function ɵl() {
          return (
            /* binding */
            CustomViewComponent
          );
        },

        /* harmony export */
        "ɵm": function ɵm() {
          return (
            /* binding */
            ViewCellComponent
          );
        },

        /* harmony export */
        "ɵn": function ɵn() {
          return (
            /* binding */
            FilterModule
          );
        },

        /* harmony export */
        "ɵo": function ɵo() {
          return (
            /* binding */
            FilterDefault
          );
        },

        /* harmony export */
        "ɵp": function ɵp() {
          return (
            /* binding */
            FilterComponent
          );
        },

        /* harmony export */
        "ɵq": function ɵq() {
          return (
            /* binding */
            DefaultFilterComponent
          );
        },

        /* harmony export */
        "ɵr": function ɵr() {
          return (
            /* binding */
            CustomFilterComponent
          );
        },

        /* harmony export */
        "ɵs": function ɵs() {
          return (
            /* binding */
            CheckboxFilterComponent
          );
        },

        /* harmony export */
        "ɵt": function ɵt() {
          return (
            /* binding */
            CompleterFilterComponent
          );
        },

        /* harmony export */
        "ɵu": function ɵu() {
          return (
            /* binding */
            InputFilterComponent
          );
        },

        /* harmony export */
        "ɵv": function ɵv() {
          return (
            /* binding */
            SelectFilterComponent
          );
        },

        /* harmony export */
        "ɵw": function ɵw() {
          return (
            /* binding */
            PagerModule
          );
        },

        /* harmony export */
        "ɵx": function ɵx() {
          return (
            /* binding */
            PagerComponent
          );
        },

        /* harmony export */
        "ɵy": function ɵy() {
          return (
            /* binding */
            TBodyModule
          );
        },

        /* harmony export */
        "ɵz": function ɵz() {
          return (
            /* binding */
            TbodyCreateCancelComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      24751);
      /* harmony import */


      var ng2_completer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng2-completer */
      99199);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! lodash */
      23815);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      54395);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      87519);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      13653);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      58497);
      /**
       * Extending object that entered in first argument.
       *
       * Returns extended object or false if have no target object or incorrect type.
       *
       * If you wish to clone source object (without modify it), just use empty new
       * object as first argument, like this:
       *   deepExtend({}, yourObj_1, [yourObj_N]);
       */


      function CellComponent_table_cell_view_mode_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "table-cell-view-mode", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cell", ctx_r0.cell);
        }
      }

      function CellComponent_table_cell_edit_mode_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table-cell-edit-mode", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("edited", function CellComponent_table_cell_edit_mode_1_Template_table_cell_edit_mode_edited_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2.onEdited($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
        }
      }

      var _c0 = ["dynamicTarget"];

      function CustomEditComponent_ng_template_0_Template(rf, ctx) {}

      function DefaultEditComponent_select_editor_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select-editor", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function DefaultEditComponent_select_editor_1_Template_select_editor_onClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r5.onClick($event);
          })("onEdited", function DefaultEditComponent_select_editor_1_Template_select_editor_onEdited_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.onEdited($event);
          })("onStopEditing", function DefaultEditComponent_select_editor_1_Template_select_editor_onStopEditing_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.onStopEditing();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cell", ctx_r0.cell)("inputClass", ctx_r0.inputClass);
        }
      }

      function DefaultEditComponent_textarea_editor_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "textarea-editor", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r9.onClick($event);
          })("onEdited", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onEdited_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r11.onEdited($event);
          })("onStopEditing", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onStopEditing_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r12.onStopEditing();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
        }
      }

      function DefaultEditComponent_checkbox_editor_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "checkbox-editor", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function DefaultEditComponent_checkbox_editor_3_Template_checkbox_editor_onClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.onClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cell", ctx_r2.cell)("inputClass", ctx_r2.inputClass);
        }
      }

      function DefaultEditComponent_completer_editor_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "completer-editor", 7);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cell", ctx_r3.cell);
        }
      }

      function DefaultEditComponent_input_editor_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input-editor", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function DefaultEditComponent_input_editor_5_Template_input_editor_onClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r15.onClick($event);
          })("onEdited", function DefaultEditComponent_input_editor_5_Template_input_editor_onEdited_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r17.onEdited($event);
          })("onStopEditing", function DefaultEditComponent_input_editor_5_Template_input_editor_onStopEditing_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r18.onStopEditing();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cell", ctx_r4.cell)("inputClass", ctx_r4.inputClass);
        }
      }

      function EditCellComponent_table_cell_custom_editor_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table-cell-custom-editor", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("edited", function EditCellComponent_table_cell_custom_editor_1_Template_table_cell_custom_editor_edited_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2.onEdited($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cell", ctx_r0.cell)("inputClass", ctx_r0.inputClass);
        }
      }

      function EditCellComponent_table_cell_default_editor_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table-cell-default-editor", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("edited", function EditCellComponent_table_cell_default_editor_2_Template_table_cell_default_editor_edited_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.onEdited($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
        }
      }

      var _c1 = "[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{line-height:normal;padding:.375em .75em;width:100%}";

      function SelectEditorComponent_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r1.value)("selected", option_r1.value === ctx_r0.cell.getValue());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", option_r1.title, " ");
        }
      }

      function CustomViewComponent_ng_template_0_Template(rf, ctx) {}

      function ViewCellComponent_custom_view_component_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "custom-view-component", 4);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cell", ctx_r0.cell);
        }
      }

      function ViewCellComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 5);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r1.cell.getValue(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        }
      }

      function ViewCellComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.cell.getValue());
        }
      }

      function FilterComponent_div_0_custom_table_filter_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "custom-table-filter", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("filter", function FilterComponent_div_0_custom_table_filter_1_Template_custom_table_filter_filter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r3.onFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("query", ctx_r1.query)("column", ctx_r1.column)("source", ctx_r1.source)("inputClass", ctx_r1.inputClass);
        }
      }

      function FilterComponent_div_0_default_table_filter_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "default-table-filter", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("filter", function FilterComponent_div_0_default_table_filter_2_Template_default_table_filter_filter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r5.onFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("query", ctx_r2.query)("column", ctx_r2.column)("source", ctx_r2.source)("inputClass", ctx_r2.inputClass);
        }
      }

      function FilterComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FilterComponent_div_0_custom_table_filter_1_Template, 1, 4, "custom-table-filter", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FilterComponent_div_0_default_table_filter_2_Template, 1, 4, "default-table-filter", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r0.column.getFilterType());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "custom");
        }
      }

      function DefaultFilterComponent_select_filter_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select-filter", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("filter", function DefaultFilterComponent_select_filter_1_Template_select_filter_filter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.onFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("query", ctx_r0.query)("ngClass", ctx_r0.inputClass)("column", ctx_r0.column);
        }
      }

      function DefaultFilterComponent_checkbox_filter_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "checkbox-filter", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("filter", function DefaultFilterComponent_checkbox_filter_2_Template_checkbox_filter_filter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.onFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("query", ctx_r1.query)("ngClass", ctx_r1.inputClass)("column", ctx_r1.column);
        }
      }

      function DefaultFilterComponent_completer_filter_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "completer-filter", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("filter", function DefaultFilterComponent_completer_filter_3_Template_completer_filter_filter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.onFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("query", ctx_r2.query)("ngClass", ctx_r2.inputClass)("column", ctx_r2.column);
        }
      }

      function DefaultFilterComponent_input_filter_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input-filter", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("filter", function DefaultFilterComponent_input_filter_4_Template_input_filter_filter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r10.onFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("query", ctx_r3.query)("ngClass", ctx_r3.inputClass)("column", ctx_r3.column);
        }
      }

      function CustomFilterComponent_ng_template_0_Template(rf, ctx) {}

      function CheckboxFilterComponent_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckboxFilterComponent_a_1_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r1.resetFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var tmp_0_0;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](((tmp_0_0 = ctx_r0.column.getFilterConfig()) == null ? null : tmp_0_0.resetText) || "reset");
        }
      }

      var _c2 = ["inputControl"];

      function SelectFilterComponent_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r2.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r2.title, " ");
        }
      }

      function PagerComponent_nav_0_li_14_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var page_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", page_r3, " ");
        }
      }

      function PagerComponent_nav_0_li_14_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PagerComponent_nav_0_li_14_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var page_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r7.paginate(page_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var page_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](page_r3);
        }
      }

      var _c3 = function _c3(a0) {
        return {
          active: a0
        };
      };

      function PagerComponent_nav_0_li_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PagerComponent_nav_0_li_14_span_1_Template, 4, 1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PagerComponent_nav_0_li_14_a_2_Template, 2, 1, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var page_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c3, ctx_r2.getPage() == page_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.getPage() == page_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.getPage() != page_r3);
        }
      }

      var _c4 = function _c4(a0) {
        return {
          disabled: a0
        };
      };

      function PagerComponent_nav_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PagerComponent_nav_0_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r11.getPage() == 1 ? false : ctx_r11.paginate(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\xAB");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "First");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PagerComponent_nav_0_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.getPage() == 1 ? false : ctx_r13.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "<");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Prev");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, PagerComponent_nav_0_li_14_Template, 3, 5, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PagerComponent_nav_0_Template_a_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r14.getPage() == ctx_r14.getLast() ? false : ctx_r14.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, ">");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PagerComponent_nav_0_Template_a_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r15.getPage() == ctx_r15.getLast() ? false : ctx_r15.paginate(ctx_r15.getLast());
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\xBB");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Last");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c4, ctx_r0.getPage() == 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c4, ctx_r0.getPage() == 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.getPages());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c4, ctx_r0.getPage() == ctx_r0.getLast()));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c4, ctx_r0.getPage() == ctx_r0.getLast()));
        }
      }

      function PagerComponent_nav_1_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r17);
        }
      }

      function PagerComponent_nav_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Per Page: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function PagerComponent_nav_1_Template_select_change_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r18.onChangePerPage($event);
          })("ngModelChange", function PagerComponent_nav_1_Template_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r20.currentPerPage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PagerComponent_nav_1_option_4_Template, 2, 2, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.currentPerPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.perPageSelect);
        }
      }

      var _c5 = ["ng2-st-tbody", ""];

      function Ng2SmartTableTbodyComponent_tr_0_td_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Ng2SmartTableTbodyComponent_tr_0_td_1_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

            var row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r9.multipleSelectRow.emit(row_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", row_r2.isSelected);
        }
      }

      function Ng2SmartTableTbodyComponent_tr_0_td_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ng2-st-tbody-custom", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("custom", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_custom_custom_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r13.custom.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ng2-st-tbody-edit-delete", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("edit", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_edit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r15.edit.emit(row_r2);
          })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_delete_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r17["delete"].emit(row_r2);
          })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r19.editRowSelect.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx_r4.grid)("row", row_r2)("source", ctx_r4.source);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx_r4.grid)("deleteConfirm", ctx_r4.deleteConfirm)("editConfirm", ctx_r4.editConfirm)("row", row_r2)("source", ctx_r4.source);
        }
      }

      function Ng2SmartTableTbodyComponent_tr_0_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ng2-st-tbody-create-cancel", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx_r5.grid)("row", row_r2)("editConfirm", ctx_r5.editConfirm);
        }
      }

      function Ng2SmartTableTbodyComponent_tr_0_td_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ng2-smart-table-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r22 = ctx.$implicit;

          var row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cell", cell_r22)("grid", ctx_r6.grid)("row", row_r2)("isNew", false)("mode", ctx_r6.mode)("editConfirm", ctx_r6.editConfirm)("inputClass", ctx_r6.editInputClass)("isInEditing", row_r2.isInEditing);
        }
      }

      function Ng2SmartTableTbodyComponent_tr_0_td_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ng2-st-tbody-create-cancel", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx_r7.grid)("row", row_r2)("editConfirm", ctx_r7.editConfirm);
        }
      }

      function Ng2SmartTableTbodyComponent_tr_0_td_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ng2-st-tbody-custom", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("custom", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_custom_custom_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r25.custom.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ng2-st-tbody-edit-delete", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("edit", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_edit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);

            var row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r27.edit.emit(row_r2);
          })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_delete_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);

            var row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r29["delete"].emit(row_r2);
          })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r31.editRowSelect.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx_r8.grid)("row", row_r2)("source", ctx_r8.source);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx_r8.grid)("deleteConfirm", ctx_r8.deleteConfirm)("editConfirm", ctx_r8.editConfirm)("row", row_r2)("source", ctx_r8.source);
        }
      }

      var _c6 = function _c6(a0) {
        return {
          selected: a0
        };
      };

      function Ng2SmartTableTbodyComponent_tr_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);

            var row_r2 = restoredCtx.$implicit;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r33.userSelectRow.emit(row_r2);
          })("mouseover", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_mouseover_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);

            var row_r2 = restoredCtx.$implicit;

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r35.rowHover.emit(row_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Ng2SmartTableTbodyComponent_tr_0_td_1_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Ng2SmartTableTbodyComponent_tr_0_td_2_Template, 3, 8, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, Ng2SmartTableTbodyComponent_tr_0_td_3_Template, 2, 3, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, Ng2SmartTableTbodyComponent_tr_0_td_4_Template, 2, 8, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, Ng2SmartTableTbodyComponent_tr_0_td_5_Template, 2, 3, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, Ng2SmartTableTbodyComponent_tr_0_td_6_Template, 3, 8, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("className", ctx_r0.rowClassFunction(row_r2))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c6, row_r2.isSelected));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isMultiSelectVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !row_r2.isInEditing && ctx_r0.showActionColumnLeft);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", row_r2.isInEditing && ctx_r0.showActionColumnLeft);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.getVisibleCells(row_r2.cells));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", row_r2.isInEditing && ctx_r0.showActionColumnRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !row_r2.isInEditing && ctx_r0.showActionColumnRight);
        }
      }

      function Ng2SmartTableTbodyComponent_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("colspan", ctx_r1.tableColumnsCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.noDataMessage, " ");
        }
      }

      function TbodyEditDeleteComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TbodyEditDeleteComponent_a_0_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2.onEdit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.editRowButtonContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        }
      }

      function TbodyEditDeleteComponent_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TbodyEditDeleteComponent_a_1_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.onDelete($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r1.deleteRowButtonContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        }
      }

      function TbodyCustomComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TbodyCustomComponent_a_0_Template_a_click_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var action_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2.onCustom(action_r1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", action_r1.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        }
      }

      var _c7 = ["ng2-st-thead", ""];

      function Ng2SmartTableTheadComponent_tr_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sort", function Ng2SmartTableTheadComponent_tr_0_Template_tr_sort_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.sort.emit($event);
          })("selectAllRows", function Ng2SmartTableTheadComponent_tr_0_Template_tr_selectAllRows_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r5.selectAllRows.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx_r0.grid)("isAllSelected", ctx_r0.isAllSelected)("source", ctx_r0.source);
        }
      }

      function Ng2SmartTableTheadComponent_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("create", function Ng2SmartTableTheadComponent_tr_1_Template_tr_create_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.create.emit($event);
          })("filter", function Ng2SmartTableTheadComponent_tr_1_Template_tr_filter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.filter.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx_r1.grid)("source", ctx_r1.source);
        }
      }

      function Ng2SmartTableTheadComponent_tr_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 5);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx_r2.grid)("createConfirm", ctx_r2.createConfirm);
        }
      }

      var _c8 = ["ng2-st-actions-title", ""];
      var _c9 = ["ng2-st-add-button", ""];

      function AddButtonComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddButtonComponent_a_0_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r1.onAdd($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.addNewButtonContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        }
      }

      var _c10 = ["ng2-st-checkbox-select-all", ""];

      function TitleComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TitleComponent_a_0_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2._sort($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.currentDirection);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.column.title, " ");
        }
      }

      function TitleComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.column.title);
        }
      }

      var _c11 = ["ng2-st-thead-filters-row", ""];

      function TheadFitlersRowComponent_th_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "th");
        }
      }

      function TheadFitlersRowComponent_th_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("create", function TheadFitlersRowComponent_th_1_Template_th_create_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.create.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx_r1.grid);
        }
      }

      function TheadFitlersRowComponent_th_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ng2-smart-table-filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("filter", function TheadFitlersRowComponent_th_2_Template_ng2_smart_table_filter_filter_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.filter.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r6 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("ng2-smart-th ", column_r6.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("source", ctx_r2.source)("column", column_r6)("inputClass", ctx_r2.filterInputClass);
        }
      }

      function TheadFitlersRowComponent_th_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("create", function TheadFitlersRowComponent_th_3_Template_th_create_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r9.create.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx_r3.grid)("source", ctx_r3.source);
        }
      }

      var _c12 = ["ng2-st-thead-form-row", ""];

      function TheadFormRowComponent_td_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "td");
        }
      }

      function TheadFormRowComponent_td_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ng2-st-actions", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("create", function TheadFormRowComponent_td_1_Template_ng2_st_actions_create_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.onCreate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx_r1.grid);
        }
      }

      function TheadFormRowComponent_td_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ng2-smart-table-cell", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("edited", function TheadFormRowComponent_td_2_Template_ng2_smart_table_cell_edited_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.onCreate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r6 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cell", cell_r6)("grid", ctx_r2.grid)("isNew", true)("createConfirm", ctx_r2.createConfirm)("inputClass", ctx_r2.addInputClass)("isInEditing", ctx_r2.grid.getNewRow().isInEditing);
        }
      }

      function TheadFormRowComponent_td_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ng2-st-actions", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("create", function TheadFormRowComponent_td_3_Template_ng2_st_actions_create_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r9.onCreate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx_r3.grid);
        }
      }

      var _c13 = ["ng2-st-thead-titles-row", ""];

      function TheadTitlesRowComponent_th_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TheadTitlesRowComponent_th_0_Template_th_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.selectAllRows.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx_r0.grid)("source", ctx_r0.source)("isAllSelected", ctx_r0.isAllSelected);
        }
      }

      function TheadTitlesRowComponent_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "th", 4);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx_r1.grid);
        }
      }

      function TheadTitlesRowComponent_th_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ng2-st-column-title", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sort", function TheadTitlesRowComponent_th_2_Template_ng2_st_column_title_sort_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.sort.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r6 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("ng2-smart-th ", column_r6.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", column_r6.width);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", column_r6["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("source", ctx_r2.source)("column", column_r6);
        }
      }

      function TheadTitlesRowComponent_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "th", 4);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx_r3.grid);
        }
      }

      function Ng2SmartTableComponent_thead_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "thead", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("create", function Ng2SmartTableComponent_thead_1_Template_thead_create_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2.create.emit($event);
          })("selectAllRows", function Ng2SmartTableComponent_thead_1_Template_thead_selectAllRows_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.onSelectAllRows($event);
          })("sort", function Ng2SmartTableComponent_thead_1_Template_thead_sort_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r5.sort($event);
          })("filter", function Ng2SmartTableComponent_thead_1_Template_thead_filter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.filter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx_r0.grid)("isAllSelected", ctx_r0.isAllSelected)("source", ctx_r0.source)("createConfirm", ctx_r0.createConfirm);
        }
      }

      function Ng2SmartTableComponent_ng2_smart_table_pager_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng2-smart-table-pager", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("changePage", function Ng2SmartTableComponent_ng2_smart_table_pager_3_Template_ng2_smart_table_pager_changePage_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.changePage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("source", ctx_r1.source)("perPageSelect", ctx_r1.perPageSelect);
        }
      }

      var deepExtend = function deepExtend() {
        for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
          objects[_key] = arguments[_key];
        }

        if (arguments.length < 1 || typeof arguments[0] !== 'object') {
          return false;
        }

        if (arguments.length < 2) {
          return arguments[0];
        }

        var target = arguments[0]; // convert arguments to array and cut off target object

        var args = Array.prototype.slice.call(arguments, 1);
        var val, src;
        args.forEach(function (obj) {
          // skip argument if it is array or isn't object
          if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
          }

          Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value

            val = obj[key]; // new value
            // recursion prevention

            if (val === target) {
              return;
              /**
               * if new value isn't object then just overwrite by new value
               * instead of extending.
               */
            } else if (typeof val !== 'object' || val === null) {
              target[key] = val;
              return; // just clone arrays (and recursive clone objects inside)
            } else if (Array.isArray(val)) {
              target[key] = (0, lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(val);
              return; // overwrite by new value if source isn't object or array
            } else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
              target[key] = deepExtend({}, val);
              return; // source value and new value is objects both, extending...
            } else {
              target[key] = deepExtend(src, val);
              return;
            }
          });
        });
        return target;
      };

      var Deferred = function Deferred() {
        var _this20 = this;

        _classCallCheck(this, Deferred);

        this.promise = new Promise(function (resolve, reject) {
          _this20.resolve = resolve;
          _this20.reject = reject;
        });
      }; // getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1


      function getDeepFromObject() {
        var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var name = arguments.length > 1 ? arguments[1] : undefined;
        var defaultValue = arguments.length > 2 ? arguments[2] : undefined;
        var keys = name.split('.'); // clone the object

        var level = deepExtend({}, object);
        keys.forEach(function (k) {
          if (level && typeof level[k] !== 'undefined') {
            level = level[k];
          }
        });
        return typeof level === 'undefined' ? defaultValue : level;
      }

      function getPageForRowIndex(index, perPage) {
        // we need to add 1 to convert 0-based index to 1-based page number.
        return Math.floor(index / perPage) + 1;
      }

      function prepareValue(value) {
        return value;
      }

      var _Cell = /*#__PURE__*/function () {
        function _Cell(value, row, column, dataSet) {
          _classCallCheck(this, _Cell);

          this.value = value;
          this.row = row;
          this.column = column;
          this.dataSet = dataSet;
          this.newValue = '';
          this.newValue = value;
        }

        _createClass(_Cell, [{
          key: "getColumn",
          value: function getColumn() {
            return this.column;
          }
        }, {
          key: "getRow",
          value: function getRow() {
            return this.row;
          }
        }, {
          key: "getValue",
          value: function getValue() {
            var valid = this.column.getValuePrepareFunction() instanceof Function;
            var prepare = valid ? this.column.getValuePrepareFunction() : _Cell.PREPARE;
            return prepare.call(null, this.value, this.row.getData(), this);
          }
        }, {
          key: "setValue",
          value: function setValue(value) {
            this.newValue = value;
          }
        }, {
          key: "getId",
          value: function getId() {
            return this.getColumn().id;
          }
        }, {
          key: "getTitle",
          value: function getTitle() {
            return this.getColumn().title;
          }
        }, {
          key: "isEditable",
          value: function isEditable() {
            if (this.getRow().index === -1) {
              return this.getColumn().isAddable;
            } else {
              return this.getColumn().isEditable;
            }
          }
        }]);

        return _Cell;
      }();

      _Cell.PREPARE = prepareValue;

      var Row = /*#__PURE__*/function () {
        function Row(index, data, _dataSet) {
          _classCallCheck(this, Row);

          this.index = index;
          this.data = data;
          this._dataSet = _dataSet;
          this.isSelected = false;
          this.isInEditing = false;
          this.cells = [];
          this.process();
        }

        _createClass(Row, [{
          key: "getCell",
          value: function getCell(column) {
            return this.cells.find(function (el) {
              return el.getColumn() === column;
            });
          }
        }, {
          key: "getCells",
          value: function getCells() {
            return this.cells;
          }
        }, {
          key: "getData",
          value: function getData() {
            return this.data;
          }
        }, {
          key: "getIsSelected",
          value: function getIsSelected() {
            return this.isSelected;
          }
        }, {
          key: "getNewData",
          value: function getNewData() {
            var values = Object.assign({}, this.data);
            this.getCells().forEach(function (cell) {
              return values[cell.getColumn().id] = cell.newValue;
            });
            return values;
          }
        }, {
          key: "setData",
          value: function setData(data) {
            this.data = data;
            this.process();
          }
        }, {
          key: "process",
          value: function process() {
            var _this21 = this;

            this.cells = [];

            this._dataSet.getColumns().forEach(function (column) {
              var cell = _this21.createCell(column);

              _this21.cells.push(cell);
            });
          }
        }, {
          key: "createCell",
          value: function createCell(column) {
            var defValue = column.settings.defaultValue ? column.settings.defaultValue : '';
            var value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
            return new _Cell(value, this, column, this._dataSet);
          }
        }]);

        return Row;
      }();

      var Column = /*#__PURE__*/function () {
        function Column(id, settings, dataSet) {
          _classCallCheck(this, Column);

          this.id = id;
          this.settings = settings;
          this.dataSet = dataSet;
          this.title = '';
          this.type = '';
          this["class"] = '';
          this.width = '';
          this.hide = false;
          this.isSortable = false;
          this.isEditable = true;
          this.isAddable = true;
          this.isFilterable = false;
          this.sortDirection = '';
          this.defaultSortDirection = '';
          this.editor = {
            type: '',
            config: {},
            component: null
          };
          this.filter = {
            type: '',
            config: {},
            component: null
          };
          this.renderComponent = null;
          this.process();
        }

        _createClass(Column, [{
          key: "getOnComponentInitFunction",
          value: function getOnComponentInitFunction() {
            return this.onComponentInitFunction;
          }
        }, {
          key: "getCompareFunction",
          value: function getCompareFunction() {
            return this.compareFunction;
          }
        }, {
          key: "getValuePrepareFunction",
          value: function getValuePrepareFunction() {
            return this.valuePrepareFunction;
          }
        }, {
          key: "getFilterFunction",
          value: function getFilterFunction() {
            return this.filterFunction;
          }
        }, {
          key: "getConfig",
          value: function getConfig() {
            return this.editor && this.editor.config;
          }
        }, {
          key: "getFilterType",
          value: function getFilterType() {
            return this.filter && this.filter.type;
          }
        }, {
          key: "getFilterConfig",
          value: function getFilterConfig() {
            return this.filter && this.filter.config;
          }
        }, {
          key: "process",
          value: function process() {
            this.title = this.settings['title'];
            this["class"] = this.settings['class'];
            this.width = this.settings['width'];
            this.hide = !!this.settings['hide'];
            this.type = this.prepareType();
            this.editor = this.settings['editor'];
            this.filter = this.settings['filter'];
            this.renderComponent = this.settings['renderComponent'];
            this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
            this.defaultSortDirection = ['asc', 'desc'].indexOf(this.settings['sortDirection']) !== -1 ? this.settings['sortDirection'] : '';
            this.isSortable = typeof this.settings['sort'] === 'undefined' ? true : !!this.settings['sort'];
            this.isEditable = typeof this.settings['editable'] === 'undefined' ? true : !!this.settings['editable'];
            this.isAddable = typeof this.settings['addable'] === 'undefined' ? true : !!this.settings['addable'];
            this.sortDirection = this.prepareSortDirection();
            this.compareFunction = this.settings['compareFunction'];
            this.valuePrepareFunction = this.settings['valuePrepareFunction'];
            this.filterFunction = this.settings['filterFunction'];
            this.onComponentInitFunction = this.settings['onComponentInitFunction'];
          }
        }, {
          key: "prepareType",
          value: function prepareType() {
            return this.settings['type'] || this.determineType();
          }
        }, {
          key: "prepareSortDirection",
          value: function prepareSortDirection() {
            return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
          }
        }, {
          key: "determineType",
          value: function determineType() {
            // TODO: determine type by data
            return 'text';
          }
        }]);

        return Column;
      }();

      var DataSet = /*#__PURE__*/function () {
        function DataSet() {
          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var columnSettings = arguments.length > 1 ? arguments[1] : undefined;

          _classCallCheck(this, DataSet);

          this.columnSettings = columnSettings;
          this.data = [];
          this.columns = [];
          this.rows = [];
          this.createColumns(columnSettings);
          this.setData(data);
          this.createNewRow();
        }

        _createClass(DataSet, [{
          key: "setData",
          value: function setData(data) {
            this.data = data;
            this.createRows();
          }
        }, {
          key: "getColumns",
          value: function getColumns() {
            return this.columns;
          }
        }, {
          key: "getRows",
          value: function getRows() {
            return this.rows;
          }
        }, {
          key: "getFirstRow",
          value: function getFirstRow() {
            return this.rows[0];
          }
        }, {
          key: "getLastRow",
          value: function getLastRow() {
            return this.rows[this.rows.length - 1];
          }
        }, {
          key: "findRowByData",
          value: function findRowByData(data) {
            return this.rows.find(function (row) {
              return row.getData() === data;
            });
          }
        }, {
          key: "deselectAll",
          value: function deselectAll() {
            this.rows.forEach(function (row) {
              row.isSelected = false;
            }); // we need to clear selectedRow field because no one row selected

            this.selectedRow = undefined;
          }
        }, {
          key: "selectRow",
          value: function selectRow(row) {
            var previousIsSelected = row.isSelected;
            this.deselectAll();
            row.isSelected = !previousIsSelected;
            this.selectedRow = row;
            return this.selectedRow;
          }
        }, {
          key: "multipleSelectRow",
          value: function multipleSelectRow(row) {
            row.isSelected = !row.isSelected;
            this.selectedRow = row;
            return this.selectedRow;
          }
        }, {
          key: "selectPreviousRow",
          value: function selectPreviousRow() {
            if (this.rows.length > 0) {
              var index = this.selectedRow ? this.selectedRow.index : 0;

              if (index > this.rows.length - 1) {
                index = this.rows.length - 1;
              }

              this.selectRow(this.rows[index]);
              return this.selectedRow;
            }
          }
        }, {
          key: "selectFirstRow",
          value: function selectFirstRow() {
            if (this.rows.length > 0) {
              this.selectRow(this.rows[0]);
              return this.selectedRow;
            }
          }
        }, {
          key: "selectLastRow",
          value: function selectLastRow() {
            if (this.rows.length > 0) {
              this.selectRow(this.rows[this.rows.length - 1]);
              return this.selectedRow;
            }
          }
        }, {
          key: "selectRowByIndex",
          value: function selectRowByIndex(index) {
            var rowsLength = this.rows.length;

            if (rowsLength === 0) {
              return;
            }

            if (!index) {
              this.selectFirstRow();
              return this.selectedRow;
            }

            if (index > 0 && index < rowsLength) {
              this.selectRow(this.rows[index]);
              return this.selectedRow;
            } // we need to deselect all rows if we got an incorrect index


            this.deselectAll();
          }
        }, {
          key: "willSelectFirstRow",
          value: function willSelectFirstRow() {
            this.willSelect = 'first';
          }
        }, {
          key: "willSelectLastRow",
          value: function willSelectLastRow() {
            this.willSelect = 'last';
          }
        }, {
          key: "select",
          value: function select(selectedRowIndex) {
            if (this.getRows().length === 0) {
              return;
            }

            if (this.willSelect) {
              if (this.willSelect === 'first') {
                this.selectFirstRow();
              }

              if (this.willSelect === 'last') {
                this.selectLastRow();
              }

              this.willSelect = '';
            } else {
              this.selectRowByIndex(selectedRowIndex);
            }

            return this.selectedRow;
          }
        }, {
          key: "createNewRow",
          value: function createNewRow() {
            this.newRow = new Row(-1, {}, this);
            this.newRow.isInEditing = true;
          }
          /**
           * Create columns by mapping from the settings
           * @param settings
           * @private
           */

        }, {
          key: "createColumns",
          value: function createColumns(settings) {
            for (var id in settings) {
              if (settings.hasOwnProperty(id)) {
                this.columns.push(new Column(id, settings[id], this));
              }
            }
          }
          /**
           * Create rows based on current data prepared in data source
           * @private
           */

        }, {
          key: "createRows",
          value: function createRows() {
            var _this22 = this;

            this.rows = [];
            this.data.forEach(function (el, index) {
              _this22.rows.push(new Row(index, el, _this22));
            });
          }
        }]);

        return DataSet;
      }();

      var Grid = /*#__PURE__*/function () {
        function Grid(source, settings) {
          _classCallCheck(this, Grid);

          this.createFormShown = false;
          this.onSelectRowSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this.onDeselectRowSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this.setSettings(settings);
          this.setSource(source);
        }

        _createClass(Grid, [{
          key: "detach",
          value: function detach() {
            if (this.sourceOnChangedSubscription) {
              this.sourceOnChangedSubscription.unsubscribe();
            }

            if (this.sourceOnUpdatedSubscription) {
              this.sourceOnUpdatedSubscription.unsubscribe();
            }
          }
        }, {
          key: "showActionColumn",
          value: function showActionColumn(position) {
            return this.isCurrentActionsPosition(position) && this.isActionsVisible();
          }
        }, {
          key: "isCurrentActionsPosition",
          value: function isCurrentActionsPosition(position) {
            return position == this.getSetting('actions.position');
          }
        }, {
          key: "isActionsVisible",
          value: function isActionsVisible() {
            return this.getSetting('actions.add') || this.getSetting('actions.edit') || this.getSetting('actions.delete') || this.getSetting('actions.custom').length;
          }
        }, {
          key: "isMultiSelectVisible",
          value: function isMultiSelectVisible() {
            return this.getSetting('selectMode') === 'multi';
          }
        }, {
          key: "getNewRow",
          value: function getNewRow() {
            return this.dataSet.newRow;
          }
        }, {
          key: "setSettings",
          value: function setSettings(settings) {
            this.settings = settings;
            this.dataSet = new DataSet([], this.getSetting('columns'));

            if (this.source) {
              this.source.refresh();
            }
          }
        }, {
          key: "getDataSet",
          value: function getDataSet() {
            return this.dataSet;
          }
        }, {
          key: "setSource",
          value: function setSource(source) {
            var _this23 = this;

            this.source = this.prepareSource(source);
            this.detach();
            this.sourceOnChangedSubscription = this.source.onChanged().subscribe(function (changes) {
              return _this23.processDataChange(changes);
            });
            this.sourceOnUpdatedSubscription = this.source.onUpdated().subscribe(function (data) {
              var changedRow = _this23.dataSet.findRowByData(data);

              changedRow.setData(data);
            });
          }
        }, {
          key: "getSetting",
          value: function getSetting(name, defaultValue) {
            return getDeepFromObject(this.settings, name, defaultValue);
          }
        }, {
          key: "getColumns",
          value: function getColumns() {
            return this.dataSet.getColumns();
          }
        }, {
          key: "getRows",
          value: function getRows() {
            return this.dataSet.getRows();
          }
        }, {
          key: "selectRow",
          value: function selectRow(row) {
            this.dataSet.selectRow(row);
          }
        }, {
          key: "multipleSelectRow",
          value: function multipleSelectRow(row) {
            this.dataSet.multipleSelectRow(row);
          }
        }, {
          key: "onSelectRow",
          value: function onSelectRow() {
            return this.onSelectRowSource.asObservable();
          }
        }, {
          key: "onDeselectRow",
          value: function onDeselectRow() {
            return this.onDeselectRowSource.asObservable();
          }
        }, {
          key: "edit",
          value: function edit(row) {
            row.isInEditing = true;
          }
        }, {
          key: "create",
          value: function create(row, confirmEmitter) {
            var _this24 = this;

            var deferred = new Deferred();
            deferred.promise.then(function (newData) {
              newData = newData ? newData : row.getNewData();

              if (deferred.resolve.skipAdd) {
                _this24.createFormShown = false;
              } else {
                _this24.source.prepend(newData).then(function () {
                  _this24.createFormShown = false;

                  _this24.dataSet.createNewRow();
                });
              }
            })["catch"](function (err) {// doing nothing
            });

            if (this.getSetting('add.confirmCreate')) {
              confirmEmitter.emit({
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred
              });
            } else {
              deferred.resolve();
            }
          }
        }, {
          key: "save",
          value: function save(row, confirmEmitter) {
            var _this25 = this;

            var deferred = new Deferred();
            deferred.promise.then(function (newData) {
              newData = newData ? newData : row.getNewData();

              if (deferred.resolve.skipEdit) {
                row.isInEditing = false;
              } else {
                _this25.source.update(row.getData(), newData).then(function () {
                  row.isInEditing = false;
                });
              }
            })["catch"](function (err) {// doing nothing
            });

            if (this.getSetting('edit.confirmSave')) {
              confirmEmitter.emit({
                data: row.getData(),
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred
              });
            } else {
              deferred.resolve();
            }
          }
        }, {
          key: "delete",
          value: function _delete(row, confirmEmitter) {
            var _this26 = this;

            var deferred = new Deferred();
            deferred.promise.then(function () {
              _this26.source.remove(row.getData());
            })["catch"](function (err) {// doing nothing
            });

            if (this.getSetting('delete.confirmDelete')) {
              confirmEmitter.emit({
                data: row.getData(),
                source: this.source,
                confirm: deferred
              });
            } else {
              deferred.resolve();
            }
          }
        }, {
          key: "processDataChange",
          value: function processDataChange(changes) {
            if (this.shouldProcessChange(changes)) {
              this.dataSet.setData(changes['elements']);

              if (this.getSetting('selectMode') !== 'multi') {
                var row = this.determineRowToSelect(changes);

                if (row) {
                  this.onSelectRowSource.next(row);
                } else {
                  this.onDeselectRowSource.next(null);
                }
              }
            }
          }
        }, {
          key: "shouldProcessChange",
          value: function shouldProcessChange(changes) {
            if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
              return true;
            } else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
              return true;
            }

            return false;
          }
          /**
           * @breaking-change 1.8.0
           * Need to add `| null` in return type
           *
           * TODO: move to selectable? Separate directive
           */

        }, {
          key: "determineRowToSelect",
          value: function determineRowToSelect(changes) {
            if (['load', 'page', 'filter', 'sort', 'refresh'].indexOf(changes['action']) !== -1) {
              return this.dataSet.select(this.getRowIndexToSelect());
            }

            if (this.shouldSkipSelection()) {
              return null;
            }

            if (changes['action'] === 'remove') {
              if (changes['elements'].length === 0) {
                // we have to store which one to select as the data will be reloaded
                this.dataSet.willSelectLastRow();
              } else {
                return this.dataSet.selectPreviousRow();
              }
            }

            if (changes['action'] === 'append') {
              // we have to store which one to select as the data will be reloaded
              this.dataSet.willSelectLastRow();
            }

            if (changes['action'] === 'add') {
              return this.dataSet.selectFirstRow();
            }

            if (changes['action'] === 'update') {
              return this.dataSet.selectFirstRow();
            }

            if (changes['action'] === 'prepend') {
              // we have to store which one to select as the data will be reloaded
              this.dataSet.willSelectFirstRow();
            }

            return null;
          }
        }, {
          key: "prepareSource",
          value: function prepareSource(source) {
            var initialSource = this.getInitialSort();

            if (initialSource && initialSource['field'] && initialSource['direction']) {
              source.setSort([initialSource], false);
            }

            if (this.getSetting('pager.display') === true) {
              source.setPaging(this.getPageToSelect(source), this.getSetting('pager.perPage'), false);
            }

            source.refresh();
            return source;
          }
        }, {
          key: "getInitialSort",
          value: function getInitialSort() {
            var sortConf = {};
            this.getColumns().forEach(function (column) {
              if (column.isSortable && column.defaultSortDirection) {
                sortConf['field'] = column.id;
                sortConf['direction'] = column.defaultSortDirection;
                sortConf['compare'] = column.getCompareFunction();
              }
            });
            return sortConf;
          }
        }, {
          key: "getSelectedRows",
          value: function getSelectedRows() {
            return this.dataSet.getRows().filter(function (r) {
              return r.isSelected;
            });
          }
        }, {
          key: "selectAllRows",
          value: function selectAllRows(status) {
            this.dataSet.getRows().forEach(function (r) {
              return r.isSelected = status;
            });
          }
        }, {
          key: "getFirstRow",
          value: function getFirstRow() {
            return this.dataSet.getFirstRow();
          }
        }, {
          key: "getLastRow",
          value: function getLastRow() {
            return this.dataSet.getLastRow();
          }
        }, {
          key: "getSelectionInfo",
          value: function getSelectionInfo() {
            var switchPageToSelectedRowPage = this.getSetting('switchPageToSelectedRowPage');
            var selectedRowIndex = Number(this.getSetting('selectedRowIndex', 0)) || 0;

            var _this$getSetting = this.getSetting('pager'),
                perPage = _this$getSetting.perPage,
                page = _this$getSetting.page;

            return {
              perPage: perPage,
              page: page,
              selectedRowIndex: selectedRowIndex,
              switchPageToSelectedRowPage: switchPageToSelectedRowPage
            };
          }
        }, {
          key: "getRowIndexToSelect",
          value: function getRowIndexToSelect() {
            var _this$getSelectionInf = this.getSelectionInfo(),
                switchPageToSelectedRowPage = _this$getSelectionInf.switchPageToSelectedRowPage,
                selectedRowIndex = _this$getSelectionInf.selectedRowIndex,
                perPage = _this$getSelectionInf.perPage;

            var dataAmount = this.source.count();
            /**
             * source - contains all table data
             * dataSet - contains data for current page
             * selectedRowIndex - contains index for data in all data
             *
             * because of that, we need to count index for a specific row in page
             * if
             * `switchPageToSelectedRowPage` - we need to change page automatically
             * `selectedRowIndex < dataAmount && selectedRowIndex >= 0` - index points to existing data
             * (if index points to non-existing data and we calculate index for current page - we will get wrong selected row.
             *  if we return index witch not points to existing data - no line will be highlighted)
             */

            return switchPageToSelectedRowPage && selectedRowIndex < dataAmount && selectedRowIndex >= 0 ? selectedRowIndex % perPage : selectedRowIndex;
          }
        }, {
          key: "getPageToSelect",
          value: function getPageToSelect(source) {
            var _this$getSelectionInf2 = this.getSelectionInfo(),
                switchPageToSelectedRowPage = _this$getSelectionInf2.switchPageToSelectedRowPage,
                selectedRowIndex = _this$getSelectionInf2.selectedRowIndex,
                perPage = _this$getSelectionInf2.perPage,
                page = _this$getSelectionInf2.page;

            var pageToSelect = Math.max(1, page);

            if (switchPageToSelectedRowPage && selectedRowIndex >= 0) {
              pageToSelect = getPageForRowIndex(selectedRowIndex, perPage);
            }

            var maxPageAmount = Math.ceil(source.count() / perPage);
            return maxPageAmount ? Math.min(pageToSelect, maxPageAmount) : pageToSelect;
          }
        }, {
          key: "shouldSkipSelection",
          value: function shouldSkipSelection() {
            /**
             * For backward compatibility when using `selectedRowIndex` with non-number values - ignored.
             *
             * Therefore, in order to select a row after some changes,
             * the `selectedRowIndex` value must be invalid or >= 0 (< 0 means that no row is selected).
             *
             * `Number(value)` returns `NaN` on all invalid cases, and comparisons with `NaN` always return `false`.
             *
             * !!! We should skip a row only in cases when `selectedRowIndex` < 0
             * because when < 0 all lines must be deselected
             */
            var selectedRowIndex = Number(this.getSetting('selectedRowIndex'));
            return selectedRowIndex < 0;
          }
        }]);

        return Grid;
      }();

      var CellComponent = /*#__PURE__*/function () {
        function CellComponent() {
          _classCallCheck(this, CellComponent);

          this.inputClass = '';
          this.mode = 'inline';
          this.isInEditing = false;
          this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(CellComponent, [{
          key: "onEdited",
          value: function onEdited(event) {
            if (this.isNew) {
              this.grid.create(this.grid.getNewRow(), this.createConfirm);
            } else {
              this.grid.save(this.row, this.editConfirm);
            }
          }
        }]);

        return CellComponent;
      }();

      CellComponent.ɵfac = function CellComponent_Factory(t) {
        return new (t || CellComponent)();
      };

      CellComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CellComponent,
        selectors: [["ng2-smart-table-cell"]],
        inputs: {
          inputClass: "inputClass",
          mode: "mode",
          isInEditing: "isInEditing",
          grid: "grid",
          row: "row",
          editConfirm: "editConfirm",
          createConfirm: "createConfirm",
          isNew: "isNew",
          cell: "cell"
        },
        outputs: {
          edited: "edited"
        },
        decls: 2,
        vars: 2,
        consts: [[3, "cell", 4, "ngIf"], [3, "cell", "inputClass", "edited", 4, "ngIf"], [3, "cell"], [3, "cell", "inputClass", "edited"]],
        template: function CellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CellComponent_table_cell_view_mode_0_Template, 1, 1, "table-cell-view-mode", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CellComponent_table_cell_edit_mode_1_Template, 1, 2, "table-cell-edit-mode", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isInEditing);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isInEditing);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ViewCellComponent, EditCellComponent];
        },
        encapsulation: 2
      });
      CellComponent.propDecorators = {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        row: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        editConfirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        createConfirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        isNew: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        cell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        inputClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        isInEditing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        edited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CellComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'ng2-smart-table-cell',
            template: "\n    <table-cell-view-mode *ngIf=\"!isInEditing\" [cell]=\"cell\"></table-cell-view-mode>\n    <table-cell-edit-mode *ngIf=\"isInEditing\" [cell]=\"cell\"\n                          [inputClass]=\"inputClass\"\n                          (edited)=\"onEdited($event)\">\n    </table-cell-edit-mode>\n  "
          }]
        }], function () {
          return [];
        }, {
          inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          isInEditing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          edited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          editConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          createConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          isNew: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var EditCellDefault = /*#__PURE__*/function () {
        function EditCellDefault() {
          _classCallCheck(this, EditCellDefault);

          this.inputClass = '';
          this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(EditCellDefault, [{
          key: "onEdited",
          value: function onEdited(event) {
            this.edited.next(event);
            return false;
          }
        }, {
          key: "onStopEditing",
          value: function onStopEditing() {
            this.cell.getRow().isInEditing = false;
            return false;
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            event.stopPropagation();
          }
        }]);

        return EditCellDefault;
      }();

      EditCellDefault.ɵfac = function EditCellDefault_Factory(t) {
        return new (t || EditCellDefault)();
      };

      EditCellDefault.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: EditCellDefault,
        selectors: [["ng-component"]],
        inputs: {
          inputClass: "inputClass",
          cell: "cell"
        },
        outputs: {
          edited: "edited"
        },
        decls: 0,
        vars: 0,
        template: function EditCellDefault_Template(rf, ctx) {},
        encapsulation: 2
      });
      EditCellDefault.propDecorators = {
        cell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        inputClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        edited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditCellDefault, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            template: ''
          }]
        }], function () {
          return [];
        }, {
          inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          edited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var CustomEditComponent = /*#__PURE__*/function (_EditCellDefault) {
        _inherits(CustomEditComponent, _EditCellDefault);

        var _super4 = _createSuper(CustomEditComponent);

        function CustomEditComponent(resolver) {
          var _this27;

          _classCallCheck(this, CustomEditComponent);

          _this27 = _super4.call(this);
          _this27.resolver = resolver;
          return _this27;
        }

        _createClass(CustomEditComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this28 = this;

            if (this.cell && !this.customComponent) {
              var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
              this.customComponent = this.dynamicTarget.createComponent(componentFactory); // set @Inputs and @Outputs of custom component

              this.customComponent.instance.cell = this.cell;
              this.customComponent.instance.inputClass = this.inputClass;
              this.customComponent.instance.onStopEditing.subscribe(function () {
                return _this28.onStopEditing();
              });
              this.customComponent.instance.onEdited.subscribe(function (event) {
                return _this28.onEdited(event);
              });
              this.customComponent.instance.onClick.subscribe(function (event) {
                return _this28.onClick(event);
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.customComponent) {
              this.customComponent.destroy();
            }
          }
        }]);

        return CustomEditComponent;
      }(EditCellDefault);

      CustomEditComponent.ɵfac = function CustomEditComponent_Factory(t) {
        return new (t || CustomEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver));
      };

      CustomEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CustomEditComponent,
        selectors: [["table-cell-custom-editor"]],
        viewQuery: function CustomEditComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dynamicTarget = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 0,
        consts: [["dynamicTarget", ""]],
        template: function CustomEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CustomEditComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }
        },
        encapsulation: 2
      });

      CustomEditComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver
        }];
      };

      CustomEditComponent.propDecorators = {
        dynamicTarget: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
          args: ['dynamicTarget', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef,
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CustomEditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'table-cell-custom-editor',
            template: "\n    <ng-template #dynamicTarget></ng-template>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver
          }];
        }, {
          dynamicTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
            args: ['dynamicTarget', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef,
              "static": true
            }]
          }]
        });
      })();

      var DefaultEditComponent = /*#__PURE__*/function (_EditCellDefault2) {
        _inherits(DefaultEditComponent, _EditCellDefault2);

        var _super5 = _createSuper(DefaultEditComponent);

        function DefaultEditComponent() {
          _classCallCheck(this, DefaultEditComponent);

          return _super5.call(this);
        }

        _createClass(DefaultEditComponent, [{
          key: "getEditorType",
          value: function getEditorType() {
            return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
          }
        }]);

        return DefaultEditComponent;
      }(EditCellDefault);

      DefaultEditComponent.ɵfac = function DefaultEditComponent_Factory(t) {
        return new (t || DefaultEditComponent)();
      };

      DefaultEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: DefaultEditComponent,
        selectors: [["table-cell-default-editor"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 6,
        vars: 5,
        consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", 4, "ngSwitchCase"], [3, "cell", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchDefault"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing"], [3, "cell", "inputClass", "onClick"], [3, "cell"]],
        template: function DefaultEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DefaultEditComponent_select_editor_1_Template, 1, 2, "select-editor", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DefaultEditComponent_textarea_editor_2_Template, 1, 2, "textarea-editor", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DefaultEditComponent_checkbox_editor_3_Template, 1, 2, "checkbox-editor", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DefaultEditComponent_completer_editor_4_Template, 1, 1, "completer-editor", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DefaultEditComponent_input_editor_5_Template, 1, 2, "input-editor", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.getEditorType());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "list");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "textarea");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "completer");
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, SelectEditorComponent, TextareaEditorComponent, CheckboxEditorComponent, CompleterEditorComponent, InputEditorComponent];
        },
        encapsulation: 2
      });

      DefaultEditComponent.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultEditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'table-cell-default-editor',
            template: "<div [ngSwitch]=\"getEditorType()\">\n    <select-editor *ngSwitchCase=\"'list'\"\n                   [cell]=\"cell\"\n                   [inputClass]=\"inputClass\"\n                   (onClick)=\"onClick($event)\"\n                   (onEdited)=\"onEdited($event)\"\n                   (onStopEditing)=\"onStopEditing()\">\n    </select-editor>\n\n    <textarea-editor *ngSwitchCase=\"'textarea'\"\n                     [cell]=\"cell\"\n                     [inputClass]=\"inputClass\"\n                     (onClick)=\"onClick($event)\"\n                     (onEdited)=\"onEdited($event)\"\n                     (onStopEditing)=\"onStopEditing()\">\n    </textarea-editor>\n\n    <checkbox-editor *ngSwitchCase=\"'checkbox'\"\n                     [cell]=\"cell\"\n                     [inputClass]=\"inputClass\"\n                     (onClick)=\"onClick($event)\">\n    </checkbox-editor>\n\n    <completer-editor *ngSwitchCase=\"'completer'\"\n                      [cell]=\"cell\">\n    </completer-editor>\n\n    <input-editor *ngSwitchDefault\n                  [cell]=\"cell\"\n                  [inputClass]=\"inputClass\"\n                  (onClick)=\"onClick($event)\"\n                  (onEdited)=\"onEdited($event)\"\n                  (onStopEditing)=\"onStopEditing()\">\n    </input-editor>\n</div>"
          }]
        }], function () {
          return [];
        }, null);
      })();

      var EditCellComponent = /*#__PURE__*/function () {
        function EditCellComponent() {
          _classCallCheck(this, EditCellComponent);

          this.inputClass = '';
          this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(EditCellComponent, [{
          key: "onEdited",
          value: function onEdited(event) {
            this.edited.next(event);
            return false;
          }
        }, {
          key: "getEditorType",
          value: function getEditorType() {
            return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
          }
        }]);

        return EditCellComponent;
      }();

      EditCellComponent.ɵfac = function EditCellComponent_Factory(t) {
        return new (t || EditCellComponent)();
      };

      EditCellComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: EditCellComponent,
        selectors: [["table-cell-edit-mode"]],
        inputs: {
          inputClass: "inputClass",
          cell: "cell"
        },
        outputs: {
          edited: "edited"
        },
        decls: 3,
        vars: 2,
        consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "edited", 4, "ngSwitchCase"], [3, "cell", "inputClass", "edited", 4, "ngSwitchDefault"], [3, "cell", "inputClass", "edited"]],
        template: function EditCellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditCellComponent_table_cell_custom_editor_1_Template, 1, 2, "table-cell-custom-editor", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditCellComponent_table_cell_default_editor_2_Template, 1, 2, "table-cell-default-editor", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.getEditorType());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "custom");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, CustomEditComponent, DefaultEditComponent],
        encapsulation: 2
      });
      EditCellComponent.propDecorators = {
        cell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        inputClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        edited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditCellComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'table-cell-edit-mode',
            template: "\n      <div [ngSwitch]=\"getEditorType()\">\n        <table-cell-custom-editor *ngSwitchCase=\"'custom'\"\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-custom-editor>\n        <table-cell-default-editor *ngSwitchDefault\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-default-editor>\n      </div>\n    "
          }]
        }], function () {
          return [];
        }, {
          inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          edited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var _DefaultEditor = function _DefaultEditor() {
        _classCallCheck(this, _DefaultEditor);

        this.onStopEditing = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
      };

      _DefaultEditor.ɵfac = function DefaultEditor_Factory(t) {
        return new (t || _DefaultEditor)();
      };

      _DefaultEditor.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _DefaultEditor,
        selectors: [["ng-component"]],
        inputs: {
          cell: "cell",
          inputClass: "inputClass"
        },
        outputs: {
          onStopEditing: "onStopEditing",
          onEdited: "onEdited",
          onClick: "onClick"
        },
        decls: 0,
        vars: 0,
        template: function DefaultEditor_Template(rf, ctx) {},
        encapsulation: 2
      });
      _DefaultEditor.propDecorators = {
        cell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        inputClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        onStopEditing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        onEdited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_DefaultEditor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            template: ''
          }]
        }], function () {
          return [];
        }, {
          onStopEditing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          onEdited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var CheckboxEditorComponent = /*#__PURE__*/function (_DefaultEditor2) {
        _inherits(CheckboxEditorComponent, _DefaultEditor2);

        var _super6 = _createSuper(CheckboxEditorComponent);

        function CheckboxEditorComponent() {
          _classCallCheck(this, CheckboxEditorComponent);

          return _super6.call(this);
        }

        _createClass(CheckboxEditorComponent, [{
          key: "onChange",
          value: function onChange(event) {
            var trueVal = this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig()["true"] || true;
            var falseVal = this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig()["false"] || false;
            this.cell.newValue = event.target.checked ? trueVal : falseVal;
          }
        }]);

        return CheckboxEditorComponent;
      }(_DefaultEditor);

      CheckboxEditorComponent.ɵfac = function CheckboxEditorComponent_Factory(t) {
        return new (t || CheckboxEditorComponent)();
      };

      CheckboxEditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CheckboxEditorComponent,
        selectors: [["checkbox-editor"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 4,
        consts: [["type", "checkbox", 1, "form-control", 3, "ngClass", "name", "disabled", "checked", "click", "change"]],
        template: function CheckboxEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckboxEditorComponent_Template_input_click_0_listener($event) {
              return ctx.onClick.emit($event);
            })("change", function CheckboxEditorComponent_Template_input_change_0_listener($event) {
              return ctx.onChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_3_0;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.inputClass)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable())("checked", ctx.cell.getValue() == (((tmp_3_0 = ctx.cell.getColumn().getConfig()) == null ? null : tmp_3_0["true"]) || true));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
        styles: [_c1]
      });

      CheckboxEditorComponent.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CheckboxEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'checkbox-editor',
            template: "\n    <input [ngClass]=\"inputClass\"\n           type=\"checkbox\"\n           class=\"form-control\"\n           [name]=\"cell.getId()\"\n           [disabled]=\"!cell.isEditable()\"\n           [checked]=\"cell.getValue() == (cell.getColumn().getConfig()?.true || true)\"\n           (click)=\"onClick.emit($event)\"\n           (change)=\"onChange($event)\">\n    ",
            styles: [":host input,:host textarea{line-height:normal;padding:.375em .75em;width:100%}"]
          }]
        }], function () {
          return [];
        }, null);
      })();

      var CompleterEditorComponent = /*#__PURE__*/function (_DefaultEditor3) {
        _inherits(CompleterEditorComponent, _DefaultEditor3);

        var _super7 = _createSuper(CompleterEditorComponent);

        function CompleterEditorComponent(completerService) {
          var _this29;

          _classCallCheck(this, CompleterEditorComponent);

          _this29 = _super7.call(this);
          _this29.completerService = completerService;
          _this29.completerStr = '';
          return _this29;
        }

        _createClass(CompleterEditorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
              var config = this.cell.getColumn().getConfig().completer;
              config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
              config.dataService.descriptionField(config.descriptionField);
            }
          }
        }, {
          key: "onEditedCompleter",
          value: function onEditedCompleter(event) {
            this.cell.newValue = event.title;
            return false;
          }
        }]);

        return CompleterEditorComponent;
      }(_DefaultEditor);

      CompleterEditorComponent.ɵfac = function CompleterEditorComponent_Factory(t) {
        return new (t || CompleterEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng2_completer__WEBPACK_IMPORTED_MODULE_0__.CompleterService));
      };

      CompleterEditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CompleterEditorComponent,
        selectors: [["completer-editor"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 5,
        consts: [[3, "ngModel", "dataService", "minSearchLength", "pause", "placeholder", "ngModelChange", "selected"]],
        template: function CompleterEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng2-completer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompleterEditorComponent_Template_ng2_completer_ngModelChange_0_listener($event) {
              return ctx.completerStr = $event;
            })("selected", function CompleterEditorComponent_Template_ng2_completer_selected_0_listener($event) {
              return ctx.onEditedCompleter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.completerStr)("dataService", ctx.cell.getColumn().getConfig().completer.dataService)("minSearchLength", ctx.cell.getColumn().getConfig().completer.minSearchLength || 0)("pause", ctx.cell.getColumn().getConfig().completer.pause || 0)("placeholder", ctx.cell.getColumn().getConfig().completer.placeholder || "Start typing...");
          }
        },
        directives: [ng2_completer__WEBPACK_IMPORTED_MODULE_0__.CompleterCmp, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
        encapsulation: 2
      });

      CompleterEditorComponent.ctorParameters = function () {
        return [{
          type: ng2_completer__WEBPACK_IMPORTED_MODULE_0__.CompleterService
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CompleterEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'completer-editor',
            template: "\n    <ng2-completer [(ngModel)]=\"completerStr\"\n                   [dataService]=\"cell.getColumn().getConfig().completer.dataService\"\n                   [minSearchLength]=\"cell.getColumn().getConfig().completer.minSearchLength || 0\"\n                   [pause]=\"cell.getColumn().getConfig().completer.pause || 0\"\n                   [placeholder]=\"cell.getColumn().getConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"onEditedCompleter($event)\">\n    </ng2-completer>\n    "
          }]
        }], function () {
          return [{
            type: ng2_completer__WEBPACK_IMPORTED_MODULE_0__.CompleterService
          }];
        }, null);
      })();

      var InputEditorComponent = /*#__PURE__*/function (_DefaultEditor4) {
        _inherits(InputEditorComponent, _DefaultEditor4);

        var _super8 = _createSuper(InputEditorComponent);

        function InputEditorComponent() {
          _classCallCheck(this, InputEditorComponent);

          return _super8.call(this);
        }

        return InputEditorComponent;
      }(_DefaultEditor);

      InputEditorComponent.ɵfac = function InputEditorComponent_Factory(t) {
        return new (t || InputEditorComponent)();
      };

      InputEditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: InputEditorComponent,
        selectors: [["input-editor"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 5,
        consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"]],
        template: function InputEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function InputEditorComponent_Template_input_ngModelChange_0_listener($event) {
              return ctx.cell.newValue = $event;
            })("click", function InputEditorComponent_Template_input_click_0_listener($event) {
              return ctx.onClick.emit($event);
            })("keydown.enter", function InputEditorComponent_Template_input_keydown_enter_0_listener($event) {
              return ctx.onEdited.emit($event);
            })("keydown.esc", function InputEditorComponent_Template_input_keydown_esc_0_listener() {
              return ctx.onStopEditing.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("placeholder", ctx.cell.getTitle())("disabled", !ctx.cell.isEditable());
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
        styles: [_c1]
      });

      InputEditorComponent.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InputEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'input-editor',
            template: "\n    <input [ngClass]=\"inputClass\"\n           class=\"form-control\"\n           [(ngModel)]=\"cell.newValue\"\n           [name]=\"cell.getId()\"\n           [placeholder]=\"cell.getTitle()\"\n           [disabled]=\"!cell.isEditable()\"\n           (click)=\"onClick.emit($event)\"\n           (keydown.enter)=\"onEdited.emit($event)\"\n           (keydown.esc)=\"onStopEditing.emit()\">\n    ",
            styles: [":host input,:host textarea{line-height:normal;padding:.375em .75em;width:100%}"]
          }]
        }], function () {
          return [];
        }, null);
      })();

      var SelectEditorComponent = /*#__PURE__*/function (_DefaultEditor5) {
        _inherits(SelectEditorComponent, _DefaultEditor5);

        var _super9 = _createSuper(SelectEditorComponent);

        function SelectEditorComponent() {
          _classCallCheck(this, SelectEditorComponent);

          return _super9.call(this);
        }

        return SelectEditorComponent;
      }(_DefaultEditor);

      SelectEditorComponent.ɵfac = function SelectEditorComponent_Factory(t) {
        return new (t || SelectEditorComponent)();
      };

      SelectEditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: SelectEditorComponent,
        selectors: [["select-editor"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 2,
        vars: 5,
        consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]],
        template: function SelectEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SelectEditorComponent_Template_select_ngModelChange_0_listener($event) {
              return ctx.cell.newValue = $event;
            })("click", function SelectEditorComponent_Template_select_click_0_listener($event) {
              return ctx.onClick.emit($event);
            })("keydown.enter", function SelectEditorComponent_Template_select_keydown_enter_0_listener($event) {
              return ctx.onEdited.emit($event);
            })("keydown.esc", function SelectEditorComponent_Template_select_keydown_esc_0_listener() {
              return ctx.onStopEditing.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SelectEditorComponent_option_1_Template, 2, 3, "option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_4_0;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", (tmp_4_0 = ctx.cell.getColumn().getConfig()) == null ? null : tmp_4_0.list);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"]],
        encapsulation: 2
      });

      SelectEditorComponent.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SelectEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'select-editor',
            template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            [(ngModel)]=\"cell.newValue\"\n            [name]=\"cell.getId()\"\n            [disabled]=\"!cell.isEditable()\"\n            (click)=\"onClick.emit($event)\"\n            (keydown.enter)=\"onEdited.emit($event)\"\n            (keydown.esc)=\"onStopEditing.emit()\">\n\n        <option *ngFor=\"let option of cell.getColumn().getConfig()?.list\" [value]=\"option.value\"\n                [selected]=\"option.value === cell.getValue()\">{{ option.title }}\n        </option>\n    </select>\n    "
          }]
        }], function () {
          return [];
        }, null);
      })();

      var TextareaEditorComponent = /*#__PURE__*/function (_DefaultEditor6) {
        _inherits(TextareaEditorComponent, _DefaultEditor6);

        var _super10 = _createSuper(TextareaEditorComponent);

        function TextareaEditorComponent() {
          _classCallCheck(this, TextareaEditorComponent);

          return _super10.call(this);
        }

        return TextareaEditorComponent;
      }(_DefaultEditor);

      TextareaEditorComponent.ɵfac = function TextareaEditorComponent_Factory(t) {
        return new (t || TextareaEditorComponent)();
      };

      TextareaEditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TextareaEditorComponent,
        selectors: [["textarea-editor"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 2,
        vars: 5,
        consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "disabled", "placeholder", "ngModelChange", "click", "keydown.enter", "keydown.esc"]],
        template: function TextareaEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "textarea", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TextareaEditorComponent_Template_textarea_ngModelChange_0_listener($event) {
              return ctx.cell.newValue = $event;
            })("click", function TextareaEditorComponent_Template_textarea_click_0_listener($event) {
              return ctx.onClick.emit($event);
            })("keydown.enter", function TextareaEditorComponent_Template_textarea_keydown_enter_0_listener($event) {
              return ctx.onEdited.emit($event);
            })("keydown.esc", function TextareaEditorComponent_Template_textarea_keydown_esc_0_listener() {
              return ctx.onStopEditing.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable())("placeholder", ctx.cell.getTitle());
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
        styles: [_c1]
      });

      TextareaEditorComponent.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TextareaEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'textarea-editor',
            template: "\n    <textarea [ngClass]=\"inputClass\"\n              class=\"form-control\"\n              [(ngModel)]=\"cell.newValue\"\n              [name]=\"cell.getId()\"\n              [disabled]=\"!cell.isEditable()\"\n              [placeholder]=\"cell.getTitle()\"\n              (click)=\"onClick.emit($event)\"\n              (keydown.enter)=\"onEdited.emit($event)\"\n              (keydown.esc)=\"onStopEditing.emit()\">\n    </textarea>\n    ",
            styles: [":host input,:host textarea{line-height:normal;padding:.375em .75em;width:100%}"]
          }]
        }], function () {
          return [];
        }, null);
      })();

      var CustomViewComponent = /*#__PURE__*/function () {
        function CustomViewComponent(resolver) {
          _classCallCheck(this, CustomViewComponent);

          this.resolver = resolver;
        }

        _createClass(CustomViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.cell && !this.customComponent) {
              this.createCustomComponent();
              this.callOnComponentInit();
              this.patchInstance();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.customComponent) {
              this.customComponent.destroy();
            }
          }
        }, {
          key: "createCustomComponent",
          value: function createCustomComponent() {
            var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
          }
        }, {
          key: "callOnComponentInit",
          value: function callOnComponentInit() {
            var onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
            onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
          }
        }, {
          key: "patchInstance",
          value: function patchInstance() {
            Object.assign(this.customComponent.instance, this.getPatch());
          }
        }, {
          key: "getPatch",
          value: function getPatch() {
            return {
              value: this.cell.getValue(),
              rowData: this.cell.getRow().getData()
            };
          }
        }]);

        return CustomViewComponent;
      }();

      CustomViewComponent.ɵfac = function CustomViewComponent_Factory(t) {
        return new (t || CustomViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver));
      };

      CustomViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CustomViewComponent,
        selectors: [["custom-view-component"]],
        viewQuery: function CustomViewComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dynamicTarget = _t.first);
          }
        },
        inputs: {
          cell: "cell"
        },
        decls: 2,
        vars: 0,
        consts: [["dynamicTarget", ""]],
        template: function CustomViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CustomViewComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }
        },
        encapsulation: 2
      });

      CustomViewComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver
        }];
      };

      CustomViewComponent.propDecorators = {
        cell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        dynamicTarget: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
          args: ['dynamicTarget', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef,
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CustomViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'custom-view-component',
            template: "\n    <ng-template #dynamicTarget></ng-template>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver
          }];
        }, {
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dynamicTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
            args: ['dynamicTarget', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef,
              "static": true
            }]
          }]
        });
      })();

      var ViewCellComponent = function ViewCellComponent() {
        _classCallCheck(this, ViewCellComponent);
      };

      ViewCellComponent.ɵfac = function ViewCellComponent_Factory(t) {
        return new (t || ViewCellComponent)();
      };

      ViewCellComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ViewCellComponent,
        selectors: [["table-cell-view-mode"]],
        inputs: {
          cell: "cell"
        },
        decls: 4,
        vars: 3,
        consts: [[3, "ngSwitch"], [3, "cell", 4, "ngSwitchCase"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "cell"], [3, "innerHTML"]],
        template: function ViewCellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ViewCellComponent_custom_view_component_1_Template, 1, 1, "custom-view-component", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ViewCellComponent_div_2_Template, 1, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ViewCellComponent_div_3_Template, 2, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.cell.getColumn().type);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "custom");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "html");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, CustomViewComponent],
        encapsulation: 2,
        changeDetection: 0
      });
      ViewCellComponent.propDecorators = {
        cell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ViewCellComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'table-cell-view-mode',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
            template: "\n    <div [ngSwitch]=\"cell.getColumn().type\">\n        <custom-view-component *ngSwitchCase=\"'custom'\" [cell]=\"cell\"></custom-view-component>\n        <div *ngSwitchCase=\"'html'\" [innerHTML]=\"cell.getValue()\"></div>\n        <div *ngSwitchDefault>{{ cell.getValue() }}</div>\n    </div>\n    "
          }]
        }], null, {
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var CELL_COMPONENTS = [CellComponent, EditCellDefault, _DefaultEditor, CustomEditComponent, DefaultEditComponent, EditCellComponent, CheckboxEditorComponent, CompleterEditorComponent, InputEditorComponent, SelectEditorComponent, TextareaEditorComponent, CustomViewComponent, ViewCellComponent];

      var CellModule = function CellModule() {
        _classCallCheck(this, CellModule);
      };

      CellModule.ɵfac = function CellModule_Factory(t) {
        return new (t || CellModule)();
      };

      CellModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: CellModule
      });
      CellModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, ng2_completer__WEBPACK_IMPORTED_MODULE_0__.Ng2CompleterModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CellModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, ng2_completer__WEBPACK_IMPORTED_MODULE_0__.Ng2CompleterModule],
            declarations: [].concat(CELL_COMPONENTS),
            exports: [].concat(CELL_COMPONENTS)
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CellModule, {
          declarations: function declarations() {
            return [CellComponent, EditCellDefault, _DefaultEditor, CustomEditComponent, DefaultEditComponent, EditCellComponent, CheckboxEditorComponent, CompleterEditorComponent, InputEditorComponent, SelectEditorComponent, TextareaEditorComponent, CustomViewComponent, ViewCellComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, ng2_completer__WEBPACK_IMPORTED_MODULE_0__.Ng2CompleterModule];
          },
          exports: function exports() {
            return [CellComponent, EditCellDefault, _DefaultEditor, CustomEditComponent, DefaultEditComponent, EditCellComponent, CheckboxEditorComponent, CompleterEditorComponent, InputEditorComponent, SelectEditorComponent, TextareaEditorComponent, CustomViewComponent, ViewCellComponent];
          }
        });
      })();

      var DataSource = /*#__PURE__*/function () {
        function DataSource() {
          _classCallCheck(this, DataSource);

          this.onChangedSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this.onAddedSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this.onUpdatedSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this.onRemovedSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        }

        _createClass(DataSource, [{
          key: "refresh",
          value: function refresh() {
            this.emitOnChanged('refresh');
          }
        }, {
          key: "load",
          value: function load(data) {
            this.emitOnChanged('load');
            return Promise.resolve();
          }
        }, {
          key: "onChanged",
          value: function onChanged() {
            return this.onChangedSource.asObservable();
          }
        }, {
          key: "onAdded",
          value: function onAdded() {
            return this.onAddedSource.asObservable();
          }
        }, {
          key: "onUpdated",
          value: function onUpdated() {
            return this.onUpdatedSource.asObservable();
          }
        }, {
          key: "onRemoved",
          value: function onRemoved() {
            return this.onRemovedSource.asObservable();
          }
        }, {
          key: "prepend",
          value: function prepend(element) {
            this.emitOnAdded(element);
            this.emitOnChanged('prepend');
            return Promise.resolve();
          }
        }, {
          key: "append",
          value: function append(element) {
            this.emitOnAdded(element);
            this.emitOnChanged('append');
            return Promise.resolve();
          }
        }, {
          key: "add",
          value: function add(element) {
            this.emitOnAdded(element);
            this.emitOnChanged('add');
            return Promise.resolve();
          }
        }, {
          key: "remove",
          value: function remove(element) {
            this.emitOnRemoved(element);
            this.emitOnChanged('remove');
            return Promise.resolve();
          }
        }, {
          key: "update",
          value: function update(element, values) {
            this.emitOnUpdated(element);
            this.emitOnChanged('update');
            return Promise.resolve();
          }
        }, {
          key: "empty",
          value: function empty() {
            this.emitOnChanged('empty');
            return Promise.resolve();
          }
        }, {
          key: "setSort",
          value: function setSort(conf, doEmit) {
            if (doEmit) {
              this.emitOnChanged('sort');
            }
          }
        }, {
          key: "setFilter",
          value: function setFilter(conf, andOperator, doEmit) {
            if (doEmit) {
              this.emitOnChanged('filter');
            }
          }
        }, {
          key: "addFilter",
          value: function addFilter(fieldConf, andOperator, doEmit) {
            if (doEmit) {
              this.emitOnChanged('filter');
            }
          }
        }, {
          key: "setPaging",
          value: function setPaging(page, perPage, doEmit) {
            if (doEmit) {
              this.emitOnChanged('paging');
            }
          }
        }, {
          key: "setPage",
          value: function setPage(page, doEmit) {
            if (doEmit) {
              this.emitOnChanged('page');
            }
          }
        }, {
          key: "emitOnRemoved",
          value: function emitOnRemoved(element) {
            this.onRemovedSource.next(element);
          }
        }, {
          key: "emitOnUpdated",
          value: function emitOnUpdated(element) {
            this.onUpdatedSource.next(element);
          }
        }, {
          key: "emitOnAdded",
          value: function emitOnAdded(element) {
            this.onAddedSource.next(element);
          }
        }, {
          key: "emitOnChanged",
          value: function emitOnChanged(action) {
            var _this30 = this;

            this.getElements().then(function (elements) {
              return _this30.onChangedSource.next({
                action: action,
                elements: elements,
                paging: _this30.getPaging(),
                filter: _this30.getFilter(),
                sort: _this30.getSort()
              });
            });
          }
        }]);

        return DataSource;
      }();

      var FilterDefault = /*#__PURE__*/function () {
        function FilterDefault() {
          _classCallCheck(this, FilterDefault);

          this.inputClass = '';
          this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.query = '';
        }

        _createClass(FilterDefault, [{
          key: "onFilter",
          value: function onFilter(query) {
            this.source.addFilter({
              field: this.column.id,
              search: query,
              filter: this.column.getFilterFunction()
            });
          }
        }]);

        return FilterDefault;
      }();

      FilterDefault.ɵfac = function FilterDefault_Factory(t) {
        return new (t || FilterDefault)();
      };

      FilterDefault.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: FilterDefault,
        selectors: [["ng-component"]],
        inputs: {
          inputClass: "inputClass",
          column: "column",
          source: "source"
        },
        outputs: {
          filter: "filter"
        },
        decls: 0,
        vars: 0,
        template: function FilterDefault_Template(rf, ctx) {},
        encapsulation: 2
      });
      FilterDefault.propDecorators = {
        column: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        inputClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        filter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FilterDefault, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            template: ''
          }]
        }], function () {
          return [];
        }, {
          inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var FilterComponent = /*#__PURE__*/function (_FilterDefault) {
        _inherits(FilterComponent, _FilterDefault);

        var _super11 = _createSuper(FilterComponent);

        function FilterComponent() {
          var _this31;

          _classCallCheck(this, FilterComponent);

          _this31 = _super11.apply(this, arguments);
          _this31.query = '';
          return _this31;
        }

        _createClass(FilterComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this32 = this;

            if (changes.source) {
              if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
              }

              this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                var filterConf = _this32.source.getFilter();

                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                  _this32.query = ''; // add a check for existing filters an set the query if one exists for this column
                  // this covers instances where the filter is set by user code while maintaining existing functionality
                } else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                  filterConf.filters.forEach(function (k, v) {
                    if (k.field == _this32.column.id) {
                      _this32.query = k.search;
                    }
                  });
                }
              });
            }
          }
        }]);

        return FilterComponent;
      }(FilterDefault);

      FilterComponent.ɵfac = /*@__PURE__*/function () {
        var ɵFilterComponent_BaseFactory;
        return function FilterComponent_Factory(t) {
          return (ɵFilterComponent_BaseFactory || (ɵFilterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](FilterComponent)))(t || FilterComponent);
        };
      }();

      FilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: FilterComponent,
        selectors: [["ng2-smart-table-filter"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [["class", "ng2-smart-filter", 3, "ngSwitch", 4, "ngIf"], [1, "ng2-smart-filter", 3, "ngSwitch"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchCase"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchDefault"], [3, "query", "column", "source", "inputClass", "filter"]],
        template: function FilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FilterComponent_div_0_Template, 3, 2, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.column.isFilterable);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, CustomFilterComponent, DefaultFilterComponent];
        },
        styles: ["[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input, [_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     select{font-weight:400;line-height:normal;padding:.375em .75em;width:100%}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input[type=search]{box-sizing:inherit}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     .completer-dropdown-holder, [_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     a{font-weight:400}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FilterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'ng2-smart-table-filter',
            template: "\n      <div class=\"ng2-smart-filter\" *ngIf=\"column.isFilterable\" [ngSwitch]=\"column.getFilterType()\">\n        <custom-table-filter *ngSwitchCase=\"'custom'\"\n                             [query]=\"query\"\n                             [column]=\"column\"\n                             [source]=\"source\"\n                             [inputClass]=\"inputClass\"\n                             (filter)=\"onFilter($event)\">\n        </custom-table-filter>\n        <default-table-filter *ngSwitchDefault\n                              [query]=\"query\"\n                              [column]=\"column\"\n                              [source]=\"source\"\n                              [inputClass]=\"inputClass\"\n                              (filter)=\"onFilter($event)\">\n        </default-table-filter>\n      </div>\n    ",
            styles: [":host .ng2-smart-filter ::ng-deep input,:host .ng2-smart-filter ::ng-deep select{font-weight:400;line-height:normal;padding:.375em .75em;width:100%}:host .ng2-smart-filter ::ng-deep input[type=search]{box-sizing:inherit}:host .ng2-smart-filter ::ng-deep .completer-dropdown-holder,:host .ng2-smart-filter ::ng-deep a{font-weight:400}"]
          }]
        }], null, null);
      })();

      var DefaultFilterComponent = /*#__PURE__*/function (_FilterDefault2) {
        _inherits(DefaultFilterComponent, _FilterDefault2);

        var _super12 = _createSuper(DefaultFilterComponent);

        function DefaultFilterComponent() {
          _classCallCheck(this, DefaultFilterComponent);

          return _super12.apply(this, arguments);
        }

        return DefaultFilterComponent;
      }(FilterDefault);

      DefaultFilterComponent.ɵfac = /*@__PURE__*/function () {
        var ɵDefaultFilterComponent_BaseFactory;
        return function DefaultFilterComponent_Factory(t) {
          return (ɵDefaultFilterComponent_BaseFactory || (ɵDefaultFilterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DefaultFilterComponent)))(t || DefaultFilterComponent);
        };
      }();

      DefaultFilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: DefaultFilterComponent,
        selectors: [["default-table-filter"]],
        inputs: {
          query: "query"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 5,
        vars: 4,
        consts: [[3, "ngSwitch"], [3, "query", "ngClass", "column", "filter", 4, "ngSwitchCase"], [3, "query", "ngClass", "column", "filter", 4, "ngSwitchDefault"], [3, "query", "ngClass", "column", "filter"]],
        template: function DefaultFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DefaultFilterComponent_select_filter_1_Template, 1, 3, "select-filter", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DefaultFilterComponent_checkbox_filter_2_Template, 1, 3, "checkbox-filter", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DefaultFilterComponent_completer_filter_3_Template, 1, 3, "completer-filter", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DefaultFilterComponent_input_filter_4_Template, 1, 3, "input-filter", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.column.getFilterType());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "list");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "completer");
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, SelectFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, CheckboxFilterComponent, CompleterFilterComponent, InputFilterComponent];
        },
        encapsulation: 2
      });
      DefaultFilterComponent.propDecorators = {
        query: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultFilterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'default-table-filter',
            template: "\n    <ng-container [ngSwitch]=\"column.getFilterType()\">\n      <select-filter *ngSwitchCase=\"'list'\"\n                     [query]=\"query\"\n                     [ngClass]=\"inputClass\"\n                     [column]=\"column\"\n                     (filter)=\"onFilter($event)\">\n      </select-filter>\n      <checkbox-filter *ngSwitchCase=\"'checkbox'\"\n                       [query]=\"query\"\n                       [ngClass]=\"inputClass\"\n                       [column]=\"column\"\n                       (filter)=\"onFilter($event)\">\n      </checkbox-filter>\n      <completer-filter *ngSwitchCase=\"'completer'\"\n                        [query]=\"query\"\n                        [ngClass]=\"inputClass\"\n                        [column]=\"column\"\n                        (filter)=\"onFilter($event)\">\n      </completer-filter>\n      <input-filter *ngSwitchDefault\n                    [query]=\"query\"\n                    [ngClass]=\"inputClass\"\n                    [column]=\"column\"\n                    (filter)=\"onFilter($event)\">\n      </input-filter>\n    </ng-container>\n  "
          }]
        }], null, {
          query: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var CustomFilterComponent = /*#__PURE__*/function (_FilterDefault3) {
        _inherits(CustomFilterComponent, _FilterDefault3);

        var _super13 = _createSuper(CustomFilterComponent);

        function CustomFilterComponent(resolver) {
          var _this33;

          _classCallCheck(this, CustomFilterComponent);

          _this33 = _super13.call(this);
          _this33.resolver = resolver;
          return _this33;
        }

        _createClass(CustomFilterComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this34 = this;

            if (this.column && !this.customComponent) {
              var componentFactory = this.resolver.resolveComponentFactory(this.column.filter.component);
              this.customComponent = this.dynamicTarget.createComponent(componentFactory); // set @Inputs and @Outputs of custom component

              this.customComponent.instance.query = this.query;
              this.customComponent.instance.column = this.column;
              this.customComponent.instance.source = this.source;
              this.customComponent.instance.inputClass = this.inputClass;
              this.customComponent.instance.filter.subscribe(function (event) {
                return _this34.onFilter(event);
              });
            }

            if (this.customComponent) {
              this.customComponent.instance.ngOnChanges(changes);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.customComponent) {
              this.customComponent.destroy();
            }
          }
        }]);

        return CustomFilterComponent;
      }(FilterDefault);

      CustomFilterComponent.ɵfac = function CustomFilterComponent_Factory(t) {
        return new (t || CustomFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver));
      };

      CustomFilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CustomFilterComponent,
        selectors: [["custom-table-filter"]],
        viewQuery: function CustomFilterComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dynamicTarget = _t.first);
          }
        },
        inputs: {
          query: "query"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 0,
        consts: [["dynamicTarget", ""]],
        template: function CustomFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CustomFilterComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }
        },
        encapsulation: 2
      });

      CustomFilterComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver
        }];
      };

      CustomFilterComponent.propDecorators = {
        query: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        dynamicTarget: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
          args: ['dynamicTarget', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef,
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CustomFilterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'custom-table-filter',
            template: "<ng-template #dynamicTarget></ng-template>"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver
          }];
        }, {
          query: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dynamicTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
            args: ['dynamicTarget', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef,
              "static": true
            }]
          }]
        });
      })();

      var _DefaultFilter = /*#__PURE__*/function () {
        function _DefaultFilter() {
          _classCallCheck(this, _DefaultFilter);

          this.delay = 300;
          this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(_DefaultFilter, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.changesSubscription) {
              this.changesSubscription.unsubscribe();
            }
          }
        }, {
          key: "setFilter",
          value: function setFilter() {
            this.filter.emit(this.query);
          }
        }]);

        return _DefaultFilter;
      }();

      _DefaultFilter.ɵfac = function DefaultFilter_Factory(t) {
        return new (t || _DefaultFilter)();
      };

      _DefaultFilter.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _DefaultFilter,
        selectors: [["ng-component"]],
        inputs: {
          query: "query",
          inputClass: "inputClass",
          column: "column"
        },
        outputs: {
          filter: "filter"
        },
        decls: 0,
        vars: 0,
        template: function DefaultFilter_Template(rf, ctx) {},
        encapsulation: 2
      });
      _DefaultFilter.propDecorators = {
        query: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        inputClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        column: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        filter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_DefaultFilter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            template: ''
          }]
        }], function () {
          return [];
        }, {
          filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          query: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var CheckboxFilterComponent = /*#__PURE__*/function (_DefaultFilter2) {
        _inherits(CheckboxFilterComponent, _DefaultFilter2);

        var _super14 = _createSuper(CheckboxFilterComponent);

        function CheckboxFilterComponent() {
          var _this35;

          _classCallCheck(this, CheckboxFilterComponent);

          _this35 = _super14.call(this);
          _this35.filterActive = false;
          _this35.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
          return _this35;
        }

        _createClass(CheckboxFilterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this36 = this;

            this.changesSubscription = this.inputControl.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(this.delay)).subscribe(function (checked) {
              _this36.filterActive = true;
              var trueVal = _this36.column.getFilterConfig() && _this36.column.getFilterConfig()["true"] || true;
              var falseVal = _this36.column.getFilterConfig() && _this36.column.getFilterConfig()["false"] || false;
              _this36.query = checked ? trueVal : falseVal;

              _this36.setFilter();
            });
          }
        }, {
          key: "resetFilter",
          value: function resetFilter(event) {
            event.preventDefault();
            this.query = '';
            this.inputControl.setValue(false, {
              emitEvent: false
            });
            this.filterActive = false;
            this.setFilter();
          }
        }]);

        return CheckboxFilterComponent;
      }(_DefaultFilter);

      CheckboxFilterComponent.ɵfac = function CheckboxFilterComponent_Factory(t) {
        return new (t || CheckboxFilterComponent)();
      };

      CheckboxFilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CheckboxFilterComponent,
        selectors: [["checkbox-filter"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 2,
        vars: 3,
        consts: [["type", "checkbox", 1, "form-control", 3, "formControl", "ngClass"], ["href", "#", 3, "click", 4, "ngIf"], ["href", "#", 3, "click"]],
        template: function CheckboxFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CheckboxFilterComponent_a_1_Template, 2, 1, "a", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.inputControl)("ngClass", ctx.inputClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filterActive);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
        encapsulation: 2
      });

      CheckboxFilterComponent.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CheckboxFilterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'checkbox-filter',
            template: "\n    <input type=\"checkbox\" [formControl]=\"inputControl\" [ngClass]=\"inputClass\" class=\"form-control\">\n    <a href=\"#\" *ngIf=\"filterActive\"\n                (click)=\"resetFilter($event)\">{{column.getFilterConfig()?.resetText || 'reset'}}</a>\n  "
          }]
        }], function () {
          return [];
        }, null);
      })();

      var CompleterFilterComponent = /*#__PURE__*/function (_DefaultFilter3) {
        _inherits(CompleterFilterComponent, _DefaultFilter3);

        var _super15 = _createSuper(CompleterFilterComponent);

        function CompleterFilterComponent(completerService) {
          var _this37;

          _classCallCheck(this, CompleterFilterComponent);

          _this37 = _super15.call(this);
          _this37.completerService = completerService;
          _this37.completerContent = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          return _this37;
        }

        _createClass(CompleterFilterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this38 = this;

            var config = this.column.getFilterConfig().completer;
            config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
            this.changesSubscription = this.completerContent.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function (ev) {
              return ev && ev.title || ev || '';
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(this.delay)).subscribe(function (search) {
              _this38.query = search;

              _this38.setFilter();
            });
          }
        }, {
          key: "inputTextChanged",
          value: function inputTextChanged(event) {
            // workaround to trigger the search event when the home/end buttons are clicked
            // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
            // so here it gets called manually
            if (event === '') {
              this.completerContent.next(event);
            }
          }
        }]);

        return CompleterFilterComponent;
      }(_DefaultFilter);

      CompleterFilterComponent.ɵfac = function CompleterFilterComponent_Factory(t) {
        return new (t || CompleterFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng2_completer__WEBPACK_IMPORTED_MODULE_0__.CompleterService));
      };

      CompleterFilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CompleterFilterComponent,
        selectors: [["completer-filter"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 5,
        consts: [[3, "ngModel", "dataService", "minSearchLength", "pause", "placeholder", "ngModelChange", "selected"]],
        template: function CompleterFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng2-completer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompleterFilterComponent_Template_ng2_completer_ngModelChange_0_listener($event) {
              return ctx.query = $event;
            })("ngModelChange", function CompleterFilterComponent_Template_ng2_completer_ngModelChange_0_listener($event) {
              return ctx.inputTextChanged($event);
            })("selected", function CompleterFilterComponent_Template_ng2_completer_selected_0_listener($event) {
              return ctx.completerContent.next($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.query)("dataService", ctx.column.getFilterConfig().completer.dataService)("minSearchLength", ctx.column.getFilterConfig().completer.minSearchLength || 0)("pause", ctx.column.getFilterConfig().completer.pause || 0)("placeholder", ctx.column.getFilterConfig().completer.placeholder || "Start typing...");
          }
        },
        directives: [ng2_completer__WEBPACK_IMPORTED_MODULE_0__.CompleterCmp, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
        encapsulation: 2
      });

      CompleterFilterComponent.ctorParameters = function () {
        return [{
          type: ng2_completer__WEBPACK_IMPORTED_MODULE_0__.CompleterService
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CompleterFilterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'completer-filter',
            template: "\n    <ng2-completer [(ngModel)]=\"query\"\n                   (ngModelChange)=\"inputTextChanged($event)\"\n                   [dataService]=\"column.getFilterConfig().completer.dataService\"\n                   [minSearchLength]=\"column.getFilterConfig().completer.minSearchLength || 0\"\n                   [pause]=\"column.getFilterConfig().completer.pause || 0\"\n                   [placeholder]=\"column.getFilterConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"completerContent.next($event)\">\n    </ng2-completer>\n  "
          }]
        }], function () {
          return [{
            type: ng2_completer__WEBPACK_IMPORTED_MODULE_0__.CompleterService
          }];
        }, null);
      })();

      var InputFilterComponent = /*#__PURE__*/function (_DefaultFilter4) {
        _inherits(InputFilterComponent, _DefaultFilter4);

        var _super16 = _createSuper(InputFilterComponent);

        function InputFilterComponent() {
          var _this39;

          _classCallCheck(this, InputFilterComponent);

          _this39 = _super16.call(this);
          _this39.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
          return _this39;
        }

        _createClass(InputFilterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this40 = this;

            if (this.query) {
              this.inputControl.setValue(this.query);
            }

            this.inputControl.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(this.delay)).subscribe(function (value) {
              _this40.query = _this40.inputControl.value;

              _this40.setFilter();
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.query) {
              this.inputControl.setValue(this.query);
            }
          }
        }]);

        return InputFilterComponent;
      }(_DefaultFilter);

      InputFilterComponent.ɵfac = function InputFilterComponent_Factory(t) {
        return new (t || InputFilterComponent)();
      };

      InputFilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: InputFilterComponent,
        selectors: [["input-filter"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 3,
        consts: [["type", "text", 1, "form-control", 3, "ngClass", "formControl", "placeholder"]],
        template: function InputFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.column.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.inputClass)("formControl", ctx.inputControl);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective],
        encapsulation: 2
      });

      InputFilterComponent.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InputFilterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'input-filter',
            template: "\n    <input\n      [ngClass]=\"inputClass\"\n      [formControl]=\"inputControl\"\n      class=\"form-control\"\n      type=\"text\"\n      placeholder=\"{{ column.title }}\"/>\n  "
          }]
        }], function () {
          return [];
        }, null);
      })();

      var SelectFilterComponent = /*#__PURE__*/function (_DefaultFilter5) {
        _inherits(SelectFilterComponent, _DefaultFilter5);

        var _super17 = _createSuper(SelectFilterComponent);

        function SelectFilterComponent() {
          _classCallCheck(this, SelectFilterComponent);

          return _super17.call(this);
        }

        _createClass(SelectFilterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this41 = this;

            this.inputControl.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.skip)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(this.delay)).subscribe(function (value) {
              return _this41.setFilter();
            });
          }
        }]);

        return SelectFilterComponent;
      }(_DefaultFilter);

      SelectFilterComponent.ɵfac = function SelectFilterComponent_Factory(t) {
        return new (t || SelectFilterComponent)();
      };

      SelectFilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: SelectFilterComponent,
        selectors: [["select-filter"]],
        viewQuery: function SelectFilterComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 7, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputControl = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 5,
        vars: 4,
        consts: [[1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["inputControl", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function SelectFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SelectFilterComponent_Template_select_ngModelChange_0_listener($event) {
              return ctx.query = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SelectFilterComponent_option_4_Template, 2, 2, "option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.inputClass)("ngModel", ctx.query);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.column.getFilterConfig().selectText);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.column.getFilterConfig().list);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
        encapsulation: 2
      });

      SelectFilterComponent.ctorParameters = function () {
        return [];
      };

      SelectFilterComponent.propDecorators = {
        inputControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
          args: ['inputControl', {
            read: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl,
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SelectFilterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'select-filter',
            template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            #inputControl\n            [(ngModel)]=\"query\">\n\n        <option value=\"\">{{ column.getFilterConfig().selectText }}</option>\n        <option *ngFor=\"let option of column.getFilterConfig().list\" [value]=\"option.value\">\n          {{ option.title }}\n        </option>\n    </select>\n  "
          }]
        }], function () {
          return [];
        }, {
          inputControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
            args: ['inputControl', {
              read: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl,
              "static": true
            }]
          }]
        });
      })();

      var FILTER_COMPONENTS = [FilterDefault, _DefaultFilter, FilterComponent, DefaultFilterComponent, CustomFilterComponent, CheckboxFilterComponent, CompleterFilterComponent, InputFilterComponent, SelectFilterComponent];

      var FilterModule = function FilterModule() {
        _classCallCheck(this, FilterModule);
      };

      FilterModule.ɵfac = function FilterModule_Factory(t) {
        return new (t || FilterModule)();
      };

      FilterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: FilterModule
      });
      FilterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, ng2_completer__WEBPACK_IMPORTED_MODULE_0__.Ng2CompleterModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FilterModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, ng2_completer__WEBPACK_IMPORTED_MODULE_0__.Ng2CompleterModule],
            declarations: [].concat(FILTER_COMPONENTS),
            exports: [].concat(FILTER_COMPONENTS)
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FilterModule, {
          declarations: function declarations() {
            return [FilterDefault, _DefaultFilter, FilterComponent, DefaultFilterComponent, CustomFilterComponent, CheckboxFilterComponent, CompleterFilterComponent, InputFilterComponent, SelectFilterComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, ng2_completer__WEBPACK_IMPORTED_MODULE_0__.Ng2CompleterModule];
          },
          exports: function exports() {
            return [FilterDefault, _DefaultFilter, FilterComponent, DefaultFilterComponent, CustomFilterComponent, CheckboxFilterComponent, CompleterFilterComponent, InputFilterComponent, SelectFilterComponent];
          }
        });
      })();

      var PagerComponent = /*#__PURE__*/function () {
        function PagerComponent() {
          _classCallCheck(this, PagerComponent);

          this.perPageSelect = [];
          this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.count = 0;
        }

        _createClass(PagerComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this42 = this;

            if (changes.source) {
              if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
              }

              this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                _this42.page = _this42.source.getPaging().page;
                _this42.perPage = _this42.source.getPaging().perPage;
                _this42.currentPerPage = _this42.perPage;
                _this42.count = _this42.source.count();

                if (_this42.isPageOutOfBounce()) {
                  _this42.source.setPage(--_this42.page);
                }

                _this42.processPageChange(dataChanges);

                _this42.initPages();
              });
            }
          }
          /**
           * We change the page here depending on the action performed against data source
           * if a new element was added to the end of the table - then change the page to the last
           * if a new element was added to the beginning of the table - then to the first page
           * @param changes
           */

        }, {
          key: "processPageChange",
          value: function processPageChange(changes) {
            if (changes['action'] === 'prepend') {
              this.source.setPage(1);
            }

            if (changes['action'] === 'append') {
              this.source.setPage(this.getLast());
            }
          }
        }, {
          key: "shouldShow",
          value: function shouldShow() {
            return this.source.count() > this.perPage;
          }
        }, {
          key: "paginate",
          value: function paginate(page) {
            this.source.setPage(page);
            this.page = page;
            this.changePage.emit({
              page: page
            });
            return false;
          }
        }, {
          key: "next",
          value: function next() {
            return this.paginate(this.getPage() + 1);
          }
        }, {
          key: "prev",
          value: function prev() {
            return this.paginate(this.getPage() - 1);
          }
        }, {
          key: "getPage",
          value: function getPage() {
            return this.page;
          }
        }, {
          key: "getPages",
          value: function getPages() {
            return this.pages;
          }
        }, {
          key: "getLast",
          value: function getLast() {
            return Math.ceil(this.count / this.perPage);
          }
        }, {
          key: "isPageOutOfBounce",
          value: function isPageOutOfBounce() {
            return this.page * this.perPage >= this.count + this.perPage && this.page > 1;
          }
        }, {
          key: "initPages",
          value: function initPages() {
            var pagesCount = this.getLast();
            var showPagesCount = 4;
            showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
            this.pages = [];

            if (this.shouldShow()) {
              var middleOne = Math.ceil(showPagesCount / 2);
              middleOne = this.page >= middleOne ? this.page : middleOne;
              var lastOne = middleOne + Math.floor(showPagesCount / 2);
              lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
              var firstOne = lastOne - showPagesCount + 1;

              for (var i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
              }
            }
          }
        }, {
          key: "onChangePerPage",
          value: function onChangePerPage(event) {
            if (this.currentPerPage) {
              if (typeof this.currentPerPage === 'string' && this.currentPerPage.toLowerCase() === 'all') {
                this.source.getPaging().perPage = null;
              } else {
                this.source.getPaging().perPage = this.currentPerPage * 1;
                this.source.refresh();
              }

              this.initPages();
            }
          }
        }]);

        return PagerComponent;
      }();

      PagerComponent.ɵfac = function PagerComponent_Factory(t) {
        return new (t || PagerComponent)();
      };

      PagerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: PagerComponent,
        selectors: [["ng2-smart-table-pager"]],
        inputs: {
          perPageSelect: "perPageSelect",
          source: "source"
        },
        outputs: {
          changePage: "changePage"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 2,
        consts: [["class", "ng2-smart-pagination-nav", 4, "ngIf"], ["class", "ng2-smart-pagination-per-page", 4, "ngIf"], [1, "ng2-smart-pagination-nav"], [1, "ng2-smart-pagination", "pagination"], [1, "ng2-smart-page-item", "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["href", "#", "aria-label", "Prev", 1, "ng2-smart-page-link", "page-link", "page-link-prev", 3, "click"], ["class", "ng2-smart-page-item page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#", "aria-label", "Next", 1, "ng2-smart-page-link", "page-link", "page-link-next", 3, "click"], ["href", "#", "aria-label", "Last", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["class", "ng2-smart-page-link page-link", 4, "ngIf"], ["class", "ng2-smart-page-link page-link", "href", "#", 3, "click", 4, "ngIf"], [1, "ng2-smart-page-link", "page-link"], ["href", "#", 1, "ng2-smart-page-link", "page-link", 3, "click"], [1, "ng2-smart-pagination-per-page"], ["for", "per-page"], ["id", "per-page", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function PagerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PagerComponent_nav_0_Template, 27, 13, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PagerComponent_nav_1_Template, 5, 2, "nav", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.shouldShow());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.perPageSelect && ctx.perPageSelect.length > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"]],
        styles: [".ng2-smart-pagination[_ngcontent-%COMP%]{display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination[_ngcontent-%COMP%]   .sr-only[_ngcontent-%COMP%]{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.ng2-smart-pagination[_ngcontent-%COMP%]   .ng2-smart-page-item[_ngcontent-%COMP%]{display:inline}.ng2-smart-pagination[_ngcontent-%COMP%]   .page-link-next[_ngcontent-%COMP%], .ng2-smart-pagination[_ngcontent-%COMP%]   .page-link-prev[_ngcontent-%COMP%]{font-size:10px}[_nghost-%COMP%]{display:flex;justify-content:space-between}[_nghost-%COMP%]   label[_ngcontent-%COMP%], [_nghost-%COMP%]   select[_ngcontent-%COMP%]{margin:1rem 0 1rem 1rem}[_nghost-%COMP%]   label[_ngcontent-%COMP%]{line-height:2.5rem}"]
      });
      PagerComponent.propDecorators = {
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        perPageSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        changePage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PagerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'ng2-smart-table-pager',
            template: "\n    <nav *ngIf=\"shouldShow()\" class=\"ng2-smart-pagination-nav\">\n      <ul class=\"ng2-smart-pagination pagination\">\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == 1 ? false : paginate(1)\" aria-label=\"First\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link page-link-prev\" href=\"#\"\n             (click)=\"getPage() == 1 ? false : prev()\" aria-label=\"Prev\">\n            <span aria-hidden=\"true\">&lt;</span>\n            <span class=\"sr-only\">Prev</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{active: getPage() == page}\" *ngFor=\"let page of getPages()\">\n          <span class=\"ng2-smart-page-link page-link\"\n          *ngIf=\"getPage() == page\">{{ page }} <span class=\"sr-only\">(current)</span></span>\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"paginate(page)\" *ngIf=\"getPage() != page\">{{ page }}</a>\n        </li>\n\n        <li class=\"ng2-smart-page-item page-item\"\n            [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link page-link-next\" href=\"#\"\n             (click)=\"getPage() == getLast() ? false : next()\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&gt;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        \n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == getLast() ? false : paginate(getLast())\" aria-label=\"Last\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    \n    <nav *ngIf=\"perPageSelect && perPageSelect.length > 0\" class=\"ng2-smart-pagination-per-page\">\n      <label for=\"per-page\">\n        Per Page:\n      </label>\n      <select (change)=\"onChangePerPage($event)\" [(ngModel)]=\"currentPerPage\" id=\"per-page\">\n        <option *ngFor=\"let item of perPageSelect\" [value]=\"item\">{{ item }}</option>\n      </select>\n    </nav>\n  ",
            styles: [".ng2-smart-pagination{display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination .sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.ng2-smart-pagination .ng2-smart-page-item{display:inline}.ng2-smart-pagination .page-link-next,.ng2-smart-pagination .page-link-prev{font-size:10px}:host{display:flex;justify-content:space-between}:host label,:host select{margin:1rem 0 1rem 1rem}:host label{line-height:2.5rem}"]
          }]
        }], function () {
          return [];
        }, {
          perPageSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          changePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var PagerModule = function PagerModule() {
        _classCallCheck(this, PagerModule);
      };

      PagerModule.ɵfac = function PagerModule_Factory(t) {
        return new (t || PagerModule)();
      };

      PagerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: PagerModule
      });
      PagerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PagerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
            declarations: [PagerComponent],
            exports: [PagerComponent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PagerModule, {
          declarations: function declarations() {
            return [PagerComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule];
          },
          exports: function exports() {
            return [PagerComponent];
          }
        });
      })();

      var Ng2SmartTableTbodyComponent = /*#__PURE__*/function () {
        function Ng2SmartTableTbodyComponent() {
          _classCallCheck(this, Ng2SmartTableTbodyComponent);

          this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.custom = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.userSelectRow = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.editRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.multipleSelectRow = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.rowHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(Ng2SmartTableTbodyComponent, [{
          key: "tableColumnsCount",
          get: function get() {
            var actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
            return this.grid.getColumns().length + actionColumns;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.mode = this.grid.getSetting('mode');
            this.editInputClass = this.grid.getSetting('edit.inputClass');
            this.showActionColumnRight = this.grid.showActionColumn('right');
            this.isActionAdd = this.grid.getSetting('actions.add');
            this.isActionEdit = this.grid.getSetting('actions.edit');
            this.isActionDelete = this.grid.getSetting('actions.delete');
            this.noDataMessage = this.grid.getSetting('noDataMessage');
          }
        }, {
          key: "getVisibleCells",
          value: function getVisibleCells(cells) {
            return (cells || []).filter(function (cell) {
              return !cell.getColumn().hide;
            });
          }
        }]);

        return Ng2SmartTableTbodyComponent;
      }();

      Ng2SmartTableTbodyComponent.ɵfac = function Ng2SmartTableTbodyComponent_Factory(t) {
        return new (t || Ng2SmartTableTbodyComponent)();
      };

      Ng2SmartTableTbodyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: Ng2SmartTableTbodyComponent,
        selectors: [["", "ng2-st-tbody", ""]],
        inputs: {
          grid: "grid",
          source: "source",
          deleteConfirm: "deleteConfirm",
          editConfirm: "editConfirm",
          rowClassFunction: "rowClassFunction"
        },
        outputs: {
          save: "save",
          cancel: "cancel",
          edit: "edit",
          "delete": "delete",
          custom: "custom",
          edited: "edited",
          userSelectRow: "userSelectRow",
          editRowSelect: "editRowSelect",
          multipleSelectRow: "multipleSelectRow",
          rowHover: "rowHover"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        attrs: _c5,
        decls: 2,
        vars: 2,
        consts: [["class", "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover"], ["class", "ng2-smart-actions ng2-smart-action-multiple-select", 3, "click", 4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions", "ng2-smart-action-multiple-select", 3, "click"], ["type", "checkbox", 1, "form-control", 3, "ngModel"], [1, "ng2-smart-actions"], [3, "grid", "row", "source", "custom"], [3, "grid", "deleteConfirm", "editConfirm", "row", "source", "edit", "delete", "editRowSelect"], [3, "grid", "row", "editConfirm"], [3, "cell", "grid", "row", "isNew", "mode", "editConfirm", "inputClass", "isInEditing"]],
        template: function Ng2SmartTableTbodyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Ng2SmartTableTbodyComponent_tr_0_Template, 7, 10, "tr", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Ng2SmartTableTbodyComponent_tr_1_Template, 3, 2, "tr", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.grid.getRows());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.grid.getRows().length == 0);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, TbodyCustomComponent, TbodyEditDeleteComponent, TbodyCreateCancelComponent, CellComponent];
        },
        styles: ["[_nghost-%COMP%]   .ng2-smart-row.selected[_ngcontent-%COMP%]{background:rgba(0,0,0,.05)}[_nghost-%COMP%]   .ng2-smart-row[_ngcontent-%COMP%]   .ng2-smart-actions.ng2-smart-action-multiple-select[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]     ng2-st-tbody-create-cancel a:first-child, [_nghost-%COMP%]     ng2-st-tbody-edit-delete a:first-child{margin-right:.25rem}"]
      });
      Ng2SmartTableTbodyComponent.propDecorators = {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        deleteConfirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        editConfirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        rowClassFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        save: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        cancel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        edit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        "delete": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        custom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        edited: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        userSelectRow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        editRowSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        multipleSelectRow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        rowHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Ng2SmartTableTbodyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: '[ng2-st-tbody]',
            template: "<tr *ngFor=\"let row of grid.getRows()\" (click)=\"userSelectRow.emit(row)\" (mouseover)=\"rowHover.emit(row)\" class=\"ng2-smart-row\" [className]=\"rowClassFunction(row)\" [ngClass]=\"{selected: row.isSelected}\">\n  <td *ngIf=\"isMultiSelectVisible\" class=\"ng2-smart-actions ng2-smart-action-multiple-select\" (click)=\"multipleSelectRow.emit(row)\">\n    <input type=\"checkbox\" class=\"form-control\" [ngModel]=\"row.isSelected\">\n  </td>\n  <td *ngIf=\"!row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\"\n                              [row]=\"row\"\n                              [source]=\"source\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n   <td *ngIf=\"row.isInEditing && showActionColumnLeft\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\n  </td>\n  <td *ngFor=\"let cell of getVisibleCells(row.cells)\">\n    <ng2-smart-table-cell [cell]=\"cell\"\n                          [grid]=\"grid\"\n                          [row]=\"row\"\n                          [isNew]=\"false\"\n                          [mode]=\"mode\"\n                          [editConfirm]=\"editConfirm\"\n                          [inputClass]=\"editInputClass\"\n                          [isInEditing]=\"row.isInEditing\">\n    </ng2-smart-table-cell>\n  </td>\n\n  <td *ngIf=\"row.isInEditing && showActionColumnRight\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\n  </td>\n\n  <td *ngIf=\"!row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              [row]=\"row\"\n                              [source]=\"source\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n</tr>\n\n<tr *ngIf=\"grid.getRows().length == 0\">\n  <td [attr.colspan]=\"tableColumnsCount\">\n    {{ noDataMessage }}\n  </td>\n</tr>\n",
            styles: [":host .ng2-smart-row.selected{background:rgba(0,0,0,.05)}:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select{text-align:center}:host ::ng-deep ng2-st-tbody-create-cancel a:first-child,:host ::ng-deep ng2-st-tbody-edit-delete a:first-child{margin-right:.25rem}"]
          }]
        }], function () {
          return [];
        }, {
          save: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          cancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          edit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          "delete": [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          custom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          edited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          userSelectRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          editRowSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          multipleSelectRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          rowHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          deleteConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          editConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          rowClassFunction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var TbodyCreateCancelComponent = /*#__PURE__*/function () {
        function TbodyCreateCancelComponent() {
          _classCallCheck(this, TbodyCreateCancelComponent);
        }

        _createClass(TbodyCreateCancelComponent, [{
          key: "onSave",
          value: function onSave(event) {
            event.preventDefault();
            event.stopPropagation();
            this.grid.save(this.row, this.editConfirm);
          }
        }, {
          key: "onCancelEdit",
          value: function onCancelEdit(event) {
            event.preventDefault();
            event.stopPropagation();
            this.row.isInEditing = false;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
            this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
          }
        }]);

        return TbodyCreateCancelComponent;
      }();

      TbodyCreateCancelComponent.ɵfac = function TbodyCreateCancelComponent_Factory(t) {
        return new (t || TbodyCreateCancelComponent)();
      };

      TbodyCreateCancelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TbodyCreateCancelComponent,
        selectors: [["ng2-st-tbody-create-cancel"]],
        inputs: {
          grid: "grid",
          row: "row",
          editConfirm: "editConfirm"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 2,
        consts: [["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-save", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-cancel", 3, "innerHTML", "click"]],
        template: function TbodyCreateCancelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TbodyCreateCancelComponent_Template_a_click_0_listener($event) {
              return ctx.onSave($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TbodyCreateCancelComponent_Template_a_click_1_listener($event) {
              return ctx.onCancelEdit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.saveButtonContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.cancelButtonContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
          }
        },
        encapsulation: 2
      });
      TbodyCreateCancelComponent.propDecorators = {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        row: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        editConfirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TbodyCreateCancelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'ng2-st-tbody-create-cancel',
            template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-save\"\n        [innerHTML]=\"saveButtonContent\" (click)=\"onSave($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-cancel\"\n        [innerHTML]=\"cancelButtonContent\" (click)=\"onCancelEdit($event)\"></a>\n  "
          }]
        }], null, {
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          editConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var TbodyEditDeleteComponent = /*#__PURE__*/function () {
        function TbodyEditDeleteComponent() {
          _classCallCheck(this, TbodyEditDeleteComponent);

          this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.editRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(TbodyEditDeleteComponent, [{
          key: "onEdit",
          value: function onEdit(event) {
            event.preventDefault();
            event.stopPropagation();
            this.editRowSelect.emit(this.row);

            if (this.grid.getSetting('mode') === 'external') {
              this.edit.emit({
                data: this.row.getData(),
                source: this.source
              });
            } else {
              this.grid.edit(this.row);
            }
          }
        }, {
          key: "onDelete",
          value: function onDelete(event) {
            event.preventDefault();
            event.stopPropagation();

            if (this.grid.getSetting('mode') === 'external') {
              this["delete"].emit({
                data: this.row.getData(),
                source: this.source
              });
            } else {
              this.grid["delete"](this.row, this.deleteConfirm);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.isActionEdit = this.grid.getSetting('actions.edit');
            this.isActionDelete = this.grid.getSetting('actions.delete');
            this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
            this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
          }
        }]);

        return TbodyEditDeleteComponent;
      }();

      TbodyEditDeleteComponent.ɵfac = function TbodyEditDeleteComponent_Factory(t) {
        return new (t || TbodyEditDeleteComponent)();
      };

      TbodyEditDeleteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TbodyEditDeleteComponent,
        selectors: [["ng2-st-tbody-edit-delete"]],
        inputs: {
          grid: "grid",
          row: "row",
          source: "source",
          deleteConfirm: "deleteConfirm",
          editConfirm: "editConfirm"
        },
        outputs: {
          edit: "edit",
          "delete": "delete",
          editRowSelect: "editRowSelect"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 2,
        consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-edit-edit", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", "class", "ng2-smart-action ng2-smart-action-delete-delete", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-edit", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-delete-delete", 3, "innerHTML", "click"]],
        template: function TbodyEditDeleteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TbodyEditDeleteComponent_a_0_Template, 1, 1, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TbodyEditDeleteComponent_a_1_Template, 1, 1, "a", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isActionEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isActionDelete);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
        encapsulation: 2,
        changeDetection: 0
      });
      TbodyEditDeleteComponent.propDecorators = {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        row: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        deleteConfirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        editConfirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        edit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        "delete": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        editRowSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TbodyEditDeleteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'ng2-st-tbody-edit-delete',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
            template: "\n    <a href=\"#\" *ngIf=\"isActionEdit\" class=\"ng2-smart-action ng2-smart-action-edit-edit\"\n        [innerHTML]=\"editRowButtonContent\" (click)=\"onEdit($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionDelete\" class=\"ng2-smart-action ng2-smart-action-delete-delete\"\n        [innerHTML]=\"deleteRowButtonContent\" (click)=\"onDelete($event)\"></a>\n  "
          }]
        }], function () {
          return [];
        }, {
          edit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          "delete": [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          editRowSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          deleteConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          editConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var TbodyCustomComponent = /*#__PURE__*/function () {
        function TbodyCustomComponent() {
          _classCallCheck(this, TbodyCustomComponent);

          this.custom = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(TbodyCustomComponent, [{
          key: "onCustom",
          value: function onCustom(action, event) {
            event.preventDefault();
            event.stopPropagation();
            this.custom.emit({
              action: action.name,
              data: this.row.getData(),
              source: this.source
            });
          }
        }]);

        return TbodyCustomComponent;
      }();

      TbodyCustomComponent.ɵfac = function TbodyCustomComponent_Factory(t) {
        return new (t || TbodyCustomComponent)();
      };

      TbodyCustomComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TbodyCustomComponent,
        selectors: [["ng2-st-tbody-custom"]],
        inputs: {
          grid: "grid",
          row: "row",
          source: "source"
        },
        outputs: {
          custom: "custom"
        },
        decls: 1,
        vars: 1,
        consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-custom-custom", 3, "innerHTML", "click", 4, "ngFor", "ngForOf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-custom-custom", 3, "innerHTML", "click"]],
        template: function TbodyCustomComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TbodyCustomComponent_a_0_Template, 1, 1, "a", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.grid.getSetting("actions.custom"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
        encapsulation: 2,
        changeDetection: 0
      });
      TbodyCustomComponent.propDecorators = {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        row: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        custom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TbodyCustomComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'ng2-st-tbody-custom',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
            template: "\n      <a *ngFor=\"let action of grid.getSetting('actions.custom')\" href=\"#\"\n         class=\"ng2-smart-action ng2-smart-action-custom-custom\" \n         [innerHTML]=\"action.title\"\n         (click)=\"onCustom(action, $event)\"></a>\n        "
          }]
        }], function () {
          return [];
        }, {
          custom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var TBODY_COMPONENTS = [TbodyCreateCancelComponent, TbodyEditDeleteComponent, TbodyCustomComponent, Ng2SmartTableTbodyComponent];

      var TBodyModule = function TBodyModule() {
        _classCallCheck(this, TBodyModule);
      };

      TBodyModule.ɵfac = function TBodyModule_Factory(t) {
        return new (t || TBodyModule)();
      };

      TBodyModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: TBodyModule
      });
      TBodyModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, CellModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TBodyModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, CellModule],
            declarations: [].concat(TBODY_COMPONENTS),
            exports: [].concat(TBODY_COMPONENTS)
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TBodyModule, {
          declarations: function declarations() {
            return [TbodyCreateCancelComponent, TbodyEditDeleteComponent, TbodyCustomComponent, Ng2SmartTableTbodyComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, CellModule];
          },
          exports: function exports() {
            return [TbodyCreateCancelComponent, TbodyEditDeleteComponent, TbodyCustomComponent, Ng2SmartTableTbodyComponent];
          }
        });
      })();

      var Ng2SmartTableTheadComponent = /*#__PURE__*/function () {
        function Ng2SmartTableTheadComponent() {
          _classCallCheck(this, Ng2SmartTableTheadComponent);

          this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.selectAllRows = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(Ng2SmartTableTheadComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.isHideHeader = this.grid.getSetting('hideHeader');
            this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
          }
        }]);

        return Ng2SmartTableTheadComponent;
      }();

      Ng2SmartTableTheadComponent.ɵfac = function Ng2SmartTableTheadComponent_Factory(t) {
        return new (t || Ng2SmartTableTheadComponent)();
      };

      Ng2SmartTableTheadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: Ng2SmartTableTheadComponent,
        selectors: [["", "ng2-st-thead", ""]],
        inputs: {
          grid: "grid",
          source: "source",
          isAllSelected: "isAllSelected",
          createConfirm: "createConfirm"
        },
        outputs: {
          sort: "sort",
          selectAllRows: "selectAllRows",
          create: "create",
          filter: "filter"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        attrs: _c7,
        decls: 3,
        vars: 3,
        consts: [["ng2-st-thead-titles-row", "", "class", "ng2-smart-titles", 3, "grid", "isAllSelected", "source", "sort", "selectAllRows", 4, "ngIf"], ["ng2-st-thead-filters-row", "", "class", "ng2-smart-filters", 3, "grid", "source", "create", "filter", 4, "ngIf"], ["ng2-st-thead-form-row", "", 3, "grid", "createConfirm", 4, "ngIf"], ["ng2-st-thead-titles-row", "", 1, "ng2-smart-titles", 3, "grid", "isAllSelected", "source", "sort", "selectAllRows"], ["ng2-st-thead-filters-row", "", 1, "ng2-smart-filters", 3, "grid", "source", "create", "filter"], ["ng2-st-thead-form-row", "", 3, "grid", "createConfirm"]],
        template: function Ng2SmartTableTheadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Ng2SmartTableTheadComponent_tr_0_Template, 1, 3, "tr", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Ng2SmartTableTheadComponent_tr_1_Template, 1, 2, "tr", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Ng2SmartTableTheadComponent_tr_2_Template, 1, 2, "tr", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isHideHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isHideSubHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.grid.createFormShown);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, TheadTitlesRowComponent, TheadFitlersRowComponent, TheadFormRowComponent];
        },
        encapsulation: 2
      });
      Ng2SmartTableTheadComponent.propDecorators = {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        isAllSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        createConfirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        selectAllRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        create: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        filter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Ng2SmartTableTheadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: '[ng2-st-thead]',
            template: "<tr ng2-st-thead-titles-row *ngIf=\"!isHideHeader\"\n                            class=\"ng2-smart-titles\"\n                            [grid]=\"grid\"\n                            [isAllSelected]=\"isAllSelected\"\n                            [source]=\"source\"\n                            (sort)=\"sort.emit($event)\"\n                            (selectAllRows)=\"selectAllRows.emit($event)\">\n</tr>\n\n<tr ng2-st-thead-filters-row *ngIf=\"!isHideSubHeader\"\n                              class=\"ng2-smart-filters\"\n                              [grid]=\"grid\"\n                              [source]=\"source\"\n                              (create)=\"create.emit($event)\"\n                              (filter)=\"filter.emit($event)\">\n</tr>\n\n<tr ng2-st-thead-form-row *ngIf=\"grid.createFormShown\"\n                          [grid]=\"grid\"\n                          [createConfirm]=\"createConfirm\">\n</tr>\n"
          }]
        }], function () {
          return [];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          selectAllRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          create: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          isAllSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          createConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var ActionsComponent = /*#__PURE__*/function () {
        function ActionsComponent() {
          _classCallCheck(this, ActionsComponent);

          this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(ActionsComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.createButtonContent = this.grid.getSetting('add.createButtonContent');
            this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
          }
        }]);

        return ActionsComponent;
      }();

      ActionsComponent.ɵfac = function ActionsComponent_Factory(t) {
        return new (t || ActionsComponent)();
      };

      ActionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ActionsComponent,
        selectors: [["ng2-st-actions"]],
        inputs: {
          grid: "grid"
        },
        outputs: {
          create: "create"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 2,
        consts: [["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-create", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-cancel", 3, "innerHTML", "click"]],
        template: function ActionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActionsComponent_Template_a_click_0_listener($event) {
              $event.preventDefault();
              return ctx.create.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActionsComponent_Template_a_click_1_listener($event) {
              $event.preventDefault();
              return ctx.grid.createFormShown = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.createButtonContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.cancelButtonContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
          }
        },
        encapsulation: 2
      });
      ActionsComponent.propDecorators = {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        create: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ActionsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'ng2-st-actions',
            template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-create\"\n        [innerHTML]=\"createButtonContent\"\n        (click)=\"$event.preventDefault();create.emit($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-cancel\"\n        [innerHTML]=\"cancelButtonContent\"\n        (click)=\"$event.preventDefault();grid.createFormShown = false;\"></a>\n  "
          }]
        }], function () {
          return [];
        }, {
          create: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var ActionsTitleComponent = /*#__PURE__*/function () {
        function ActionsTitleComponent(ref) {
          _classCallCheck(this, ActionsTitleComponent);

          this.ref = ref;
        }

        _createClass(ActionsTitleComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.ref.nativeElement.classList.add('ng2-smart-actions');
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
          }
        }]);

        return ActionsTitleComponent;
      }();

      ActionsTitleComponent.ɵfac = function ActionsTitleComponent_Factory(t) {
        return new (t || ActionsTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
      };

      ActionsTitleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ActionsTitleComponent,
        selectors: [["", "ng2-st-actions-title", ""]],
        inputs: {
          grid: "grid"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        attrs: _c8,
        decls: 2,
        vars: 1,
        consts: [[1, "ng2-smart-title"]],
        template: function ActionsTitleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.actionsColumnTitle);
          }
        },
        encapsulation: 2
      });

      ActionsTitleComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
        }];
      };

      ActionsTitleComponent.propDecorators = {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ActionsTitleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: '[ng2-st-actions-title]',
            template: "\n    <div class=\"ng2-smart-title\">{{ actionsColumnTitle }}</div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }];
        }, {
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var AddButtonComponent = /*#__PURE__*/function () {
        function AddButtonComponent(ref) {
          _classCallCheck(this, AddButtonComponent);

          this.ref = ref;
          this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(AddButtonComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.isActionAdd = this.grid.getSetting('actions.add');
            this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
          }
        }, {
          key: "onAdd",
          value: function onAdd(event) {
            event.preventDefault();
            event.stopPropagation();

            if (this.grid.getSetting('mode') === 'external') {
              this.create.emit({
                source: this.source
              });
            } else {
              this.grid.createFormShown = true;
            }
          }
        }]);

        return AddButtonComponent;
      }();

      AddButtonComponent.ɵfac = function AddButtonComponent_Factory(t) {
        return new (t || AddButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
      };

      AddButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AddButtonComponent,
        selectors: [["", "ng2-st-add-button", ""]],
        inputs: {
          grid: "grid",
          source: "source"
        },
        outputs: {
          create: "create"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        attrs: _c9,
        decls: 1,
        vars: 1,
        consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-add-add", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-add", 3, "innerHTML", "click"]],
        template: function AddButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AddButtonComponent_a_0_Template, 1, 1, "a", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isActionAdd);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
        encapsulation: 2
      });

      AddButtonComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
        }];
      };

      AddButtonComponent.propDecorators = {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        create: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AddButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: '[ng2-st-add-button]',
            template: "\n    <a *ngIf=\"isActionAdd\" href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-add\"\n        [innerHTML]=\"addNewButtonContent\" (click)=\"onAdd($event)\"></a>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }];
        }, {
          create: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var CheckboxSelectAllComponent = function CheckboxSelectAllComponent() {
        _classCallCheck(this, CheckboxSelectAllComponent);
      };

      CheckboxSelectAllComponent.ɵfac = function CheckboxSelectAllComponent_Factory(t) {
        return new (t || CheckboxSelectAllComponent)();
      };

      CheckboxSelectAllComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CheckboxSelectAllComponent,
        selectors: [["", "ng2-st-checkbox-select-all", ""]],
        inputs: {
          grid: "grid",
          source: "source",
          isAllSelected: "isAllSelected"
        },
        attrs: _c10,
        decls: 1,
        vars: 1,
        consts: [["type", "checkbox", 3, "ngModel"]],
        template: function CheckboxSelectAllComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.isAllSelected);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
        encapsulation: 2
      });
      CheckboxSelectAllComponent.propDecorators = {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        isAllSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CheckboxSelectAllComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: '[ng2-st-checkbox-select-all]',
            template: "\n    <input type=\"checkbox\" [ngModel]=\"isAllSelected\">\n  "
          }]
        }], null, {
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          isAllSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var ColumnTitleComponent = function ColumnTitleComponent() {
        _classCallCheck(this, ColumnTitleComponent);

        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
      };

      ColumnTitleComponent.ɵfac = function ColumnTitleComponent_Factory(t) {
        return new (t || ColumnTitleComponent)();
      };

      ColumnTitleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ColumnTitleComponent,
        selectors: [["ng2-st-column-title"]],
        inputs: {
          column: "column",
          source: "source"
        },
        outputs: {
          sort: "sort"
        },
        decls: 2,
        vars: 2,
        consts: [[1, "ng2-smart-title"], [3, "source", "column", "sort"]],
        template: function ColumnTitleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ng2-smart-table-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sort", function ColumnTitleComponent_Template_ng2_smart_table_title_sort_1_listener($event) {
              return ctx.sort.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("source", ctx.source)("column", ctx.column);
          }
        },
        directives: function directives() {
          return [TitleComponent];
        },
        encapsulation: 2
      });
      ColumnTitleComponent.propDecorators = {
        column: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ColumnTitleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'ng2-st-column-title',
            template: "\n    <div class=\"ng2-smart-title\">\n      <ng2-smart-table-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-smart-table-title>\n    </div>\n  "
          }]
        }], function () {
          return [];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var TitleComponent = /*#__PURE__*/function () {
        function TitleComponent() {
          _classCallCheck(this, TitleComponent);

          this.currentDirection = '';
          this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(TitleComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this43 = this;

            if (changes.source) {
              if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
              }

              this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                var sortConf = _this43.source.getSort();

                if (sortConf.length > 0 && sortConf[0]['field'] === _this43.column.id) {
                  _this43.currentDirection = sortConf[0]['direction'];
                } else {
                  _this43.currentDirection = '';
                }

                sortConf.forEach(function (fieldConf) {});
              });
            }
          }
        }, {
          key: "_sort",
          value: function _sort(event) {
            event.preventDefault();
            this.changeSortDirection();
            this.source.setSort([{
              field: this.column.id,
              direction: this.currentDirection,
              compare: this.column.getCompareFunction()
            }]);
            this.sort.emit(null);
          }
        }, {
          key: "changeSortDirection",
          value: function changeSortDirection() {
            if (this.currentDirection) {
              var newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
              this.currentDirection = newDirection;
            } else {
              this.currentDirection = this.column.sortDirection;
            }

            return this.currentDirection;
          }
        }]);

        return TitleComponent;
      }();

      TitleComponent.ɵfac = function TitleComponent_Factory(t) {
        return new (t || TitleComponent)();
      };

      TitleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TitleComponent,
        selectors: [["ng2-smart-table-title"]],
        inputs: {
          column: "column",
          source: "source"
        },
        outputs: {
          sort: "sort"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 2,
        consts: [["href", "#", "class", "ng2-smart-sort-link sort", 3, "ngClass", "click", 4, "ngIf"], ["class", "ng2-smart-sort", 4, "ngIf"], ["href", "#", 1, "ng2-smart-sort-link", "sort", 3, "ngClass", "click"], [1, "ng2-smart-sort"]],
        template: function TitleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TitleComponent_a_0_Template, 2, 2, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TitleComponent_span_1_Template, 2, 1, "span", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.column.isSortable);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.column.isSortable);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
        styles: ["a.sort.asc[_ngcontent-%COMP%], a.sort.desc[_ngcontent-%COMP%]{font-weight:700}a.sort.asc[_ngcontent-%COMP%]:after, a.sort.desc[_ngcontent-%COMP%]:after{border:4px solid transparent;border-bottom-color:rgba(0,0,0,.3);content:\"\";display:inline-block;height:0;margin-bottom:2px;width:0}a.sort.desc[_ngcontent-%COMP%]:after{margin-bottom:-2px;transform:rotate(-180deg)}"]
      });
      TitleComponent.propDecorators = {
        column: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TitleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'ng2-smart-table-title',
            template: "\n    <a href=\"#\" *ngIf=\"column.isSortable\"\n                (click)=\"_sort($event)\"\n                class=\"ng2-smart-sort-link sort\"\n                [ngClass]=\"currentDirection\">\n      {{ column.title }}\n    </a>\n    <span class=\"ng2-smart-sort\" *ngIf=\"!column.isSortable\">{{ column.title }}</span>\n  ",
            styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc:after,a.sort.desc:after{border:4px solid transparent;border-bottom-color:rgba(0,0,0,.3);content:\"\";display:inline-block;height:0;margin-bottom:2px;width:0}a.sort.desc:after{margin-bottom:-2px;transform:rotate(-180deg)}"]
          }]
        }], function () {
          return [];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var TheadFitlersRowComponent = /*#__PURE__*/function () {
        function TheadFitlersRowComponent() {
          _classCallCheck(this, TheadFitlersRowComponent);

          this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(TheadFitlersRowComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.showActionColumnRight = this.grid.showActionColumn('right');
            this.filterInputClass = this.grid.getSetting('filter.inputClass');
          }
        }, {
          key: "getVisibleColumns",
          value: function getVisibleColumns(columns) {
            return (columns || []).filter(function (column) {
              return !column.hide;
            });
          }
        }]);

        return TheadFitlersRowComponent;
      }();

      TheadFitlersRowComponent.ɵfac = function TheadFitlersRowComponent_Factory(t) {
        return new (t || TheadFitlersRowComponent)();
      };

      TheadFitlersRowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TheadFitlersRowComponent,
        selectors: [["", "ng2-st-thead-filters-row", ""]],
        inputs: {
          grid: "grid",
          source: "source"
        },
        outputs: {
          create: "create",
          filter: "filter"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        attrs: _c11,
        decls: 4,
        vars: 4,
        consts: [[4, "ngIf"], ["ng2-st-add-button", "", 3, "grid", "create", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["ng2-st-add-button", "", 3, "grid", "source", "create", 4, "ngIf"], ["ng2-st-add-button", "", 3, "grid", "create"], [3, "source", "column", "inputClass", "filter"], ["ng2-st-add-button", "", 3, "grid", "source", "create"]],
        template: function TheadFitlersRowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TheadFitlersRowComponent_th_0_Template, 1, 0, "th", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TheadFitlersRowComponent_th_1_Template, 1, 1, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TheadFitlersRowComponent_th_2_Template, 2, 6, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TheadFitlersRowComponent_th_3_Template, 1, 2, "th", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMultiSelectVisible);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showActionColumnLeft);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getVisibleColumns(ctx.grid.getColumns()));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showActionColumnRight);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, AddButtonComponent, FilterComponent],
        encapsulation: 2
      });
      TheadFitlersRowComponent.propDecorators = {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        create: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        filter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TheadFitlersRowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: '[ng2-st-thead-filters-row]',
            template: "\n    <th *ngIf=\"isMultiSelectVisible\"></th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnLeft\"\n                          [grid]=\"grid\"\n                          (create)=\"create.emit($event)\">\n    </th>\n    <th *ngFor=\"let column of getVisibleColumns(grid.getColumns())\" class=\"ng2-smart-th {{ column.id }}\">\n      <ng2-smart-table-filter [source]=\"source\"\n                              [column]=\"column\"\n                              [inputClass]=\"filterInputClass\"\n                              (filter)=\"filter.emit($event)\">\n      </ng2-smart-table-filter>\n    </th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnRight\"\n                          [grid]=\"grid\"\n                          [source]=\"source\"\n                          (create)=\"create.emit($event)\">\n    </th>\n  "
          }]
        }], function () {
          return [];
        }, {
          create: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var TheadFormRowComponent = /*#__PURE__*/function () {
        function TheadFormRowComponent() {
          _classCallCheck(this, TheadFormRowComponent);

          this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(TheadFormRowComponent, [{
          key: "onCreate",
          value: function onCreate(event) {
            event.stopPropagation();
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.showActionColumnRight = this.grid.showActionColumn('right');
            this.addInputClass = this.grid.getSetting('add.inputClass');
          }
        }, {
          key: "getVisibleCells",
          value: function getVisibleCells(cells) {
            return (cells || []).filter(function (cell) {
              return !cell.getColumn().hide;
            });
          }
        }]);

        return TheadFormRowComponent;
      }();

      TheadFormRowComponent.ɵfac = function TheadFormRowComponent_Factory(t) {
        return new (t || TheadFormRowComponent)();
      };

      TheadFormRowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TheadFormRowComponent,
        selectors: [["", "ng2-st-thead-form-row", ""]],
        inputs: {
          grid: "grid",
          row: "row",
          createConfirm: "createConfirm"
        },
        outputs: {
          create: "create"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        attrs: _c12,
        decls: 4,
        vars: 3,
        consts: [[4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions"], [3, "grid", "create"], [3, "cell", "grid", "isNew", "createConfirm", "inputClass", "isInEditing", "edited"]],
        template: function TheadFormRowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TheadFormRowComponent_td_0_Template, 1, 0, "td", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TheadFormRowComponent_td_1_Template, 2, 1, "td", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TheadFormRowComponent_td_2_Template, 2, 6, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TheadFormRowComponent_td_3_Template, 2, 1, "td", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showActionColumnLeft);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getVisibleCells(ctx.grid.getNewRow().getCells()));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showActionColumnRight);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ActionsComponent, CellComponent],
        encapsulation: 2
      });
      TheadFormRowComponent.propDecorators = {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        row: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        createConfirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        create: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TheadFormRowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: '[ng2-st-thead-form-row]',
            template: "\n      <td *ngIf=\"\"></td>\n      <td  *ngIf=\"showActionColumnLeft\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n      <td *ngFor=\"let cell of getVisibleCells(grid.getNewRow().getCells())\">\n        <ng2-smart-table-cell [cell]=\"cell\"\n                              [grid]=\"grid\"\n                              [isNew]=\"true\"\n                              [createConfirm]=\"createConfirm\"\n                              [inputClass]=\"addInputClass\"\n                              [isInEditing]=\"grid.getNewRow().isInEditing\"\n                              (edited)=\"onCreate($event)\">\n        </ng2-smart-table-cell>\n      </td>\n      <td  *ngIf=\"showActionColumnRight\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n  "
          }]
        }], function () {
          return [];
        }, {
          create: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          createConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var TheadTitlesRowComponent = /*#__PURE__*/function () {
        function TheadTitlesRowComponent() {
          _classCallCheck(this, TheadTitlesRowComponent);

          this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.selectAllRows = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(TheadTitlesRowComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.showActionColumnRight = this.grid.showActionColumn('right');
          }
        }, {
          key: "getVisibleColumns",
          value: function getVisibleColumns(columns) {
            return (columns || []).filter(function (column) {
              return !column.hide;
            });
          }
        }]);

        return TheadTitlesRowComponent;
      }();

      TheadTitlesRowComponent.ɵfac = function TheadTitlesRowComponent_Factory(t) {
        return new (t || TheadTitlesRowComponent)();
      };

      TheadTitlesRowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TheadTitlesRowComponent,
        selectors: [["", "ng2-st-thead-titles-row", ""]],
        inputs: {
          grid: "grid",
          isAllSelected: "isAllSelected",
          source: "source"
        },
        outputs: {
          sort: "sort",
          selectAllRows: "selectAllRows"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        attrs: _c13,
        decls: 4,
        vars: 4,
        consts: [["ng2-st-checkbox-select-all", "", 3, "grid", "source", "isAllSelected", "click", 4, "ngIf"], ["ng2-st-actions-title", "", 3, "grid", 4, "ngIf"], [3, "class", "ngClass", "width", 4, "ngFor", "ngForOf"], ["ng2-st-checkbox-select-all", "", 3, "grid", "source", "isAllSelected", "click"], ["ng2-st-actions-title", "", 3, "grid"], [3, "ngClass"], [3, "source", "column", "sort"]],
        template: function TheadTitlesRowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TheadTitlesRowComponent_th_0_Template, 1, 3, "th", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TheadTitlesRowComponent_th_1_Template, 1, 1, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TheadTitlesRowComponent_th_2_Template, 2, 8, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TheadTitlesRowComponent_th_3_Template, 1, 1, "th", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMultiSelectVisible);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showActionColumnLeft);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getVisibleColumns(ctx.grid.getColumns()));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showActionColumnRight);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, CheckboxSelectAllComponent, ActionsTitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, ColumnTitleComponent],
        encapsulation: 2
      });
      TheadTitlesRowComponent.propDecorators = {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        isAllSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        selectAllRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TheadTitlesRowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: '[ng2-st-thead-titles-row]',
            template: "\n    <th ng2-st-checkbox-select-all *ngIf=\"isMultiSelectVisible\"\n                                   [grid]=\"grid\"\n                                   [source]=\"source\"\n                                   [isAllSelected]=\"isAllSelected\"\n                                   (click)=\"selectAllRows.emit($event)\">\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnLeft\" [grid]=\"grid\"></th>\n    <th *ngFor=\"let column of getVisibleColumns(grid.getColumns())\"\n        class=\"ng2-smart-th {{ column.id }}\"\n        [ngClass]=\"column.class\"\n        [style.width]=\"column.width\">\n      <ng2-st-column-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-st-column-title>\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnRight\" [grid]=\"grid\"></th>\n  "
          }]
        }], function () {
          return [];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          selectAllRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          isAllSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var THEAD_COMPONENTS = [ActionsComponent, ActionsTitleComponent, AddButtonComponent, CheckboxSelectAllComponent, ColumnTitleComponent, TitleComponent, TheadFitlersRowComponent, TheadFormRowComponent, TheadTitlesRowComponent, Ng2SmartTableTheadComponent];

      var THeadModule = function THeadModule() {
        _classCallCheck(this, THeadModule);
      };

      THeadModule.ɵfac = function THeadModule_Factory(t) {
        return new (t || THeadModule)();
      };

      THeadModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: THeadModule
      });
      THeadModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, FilterModule, CellModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](THeadModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, FilterModule, CellModule],
            declarations: [].concat(THEAD_COMPONENTS),
            exports: [].concat(THEAD_COMPONENTS)
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](THeadModule, {
          declarations: function declarations() {
            return [ActionsComponent, ActionsTitleComponent, AddButtonComponent, CheckboxSelectAllComponent, ColumnTitleComponent, TitleComponent, TheadFitlersRowComponent, TheadFormRowComponent, TheadTitlesRowComponent, Ng2SmartTableTheadComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, FilterModule, CellModule];
          },
          exports: function exports() {
            return [ActionsComponent, ActionsTitleComponent, AddButtonComponent, CheckboxSelectAllComponent, ColumnTitleComponent, TitleComponent, TheadFitlersRowComponent, TheadFormRowComponent, TheadTitlesRowComponent, Ng2SmartTableTheadComponent];
          }
        });
      })();

      function compareValues(direction, a, b) {
        if (a < b) {
          return -1 * direction;
        }

        if (a > b) {
          return direction;
        }

        return 0;
      }

      var LocalSorter = /*#__PURE__*/function () {
        function LocalSorter() {
          _classCallCheck(this, LocalSorter);
        }

        _createClass(LocalSorter, null, [{
          key: "sort",
          value: function sort(data, field, direction, customCompare) {
            var dir = direction === 'asc' ? 1 : -1;
            var compare = customCompare ? customCompare : compareValues;
            return data.sort(function (a, b) {
              return compare.call(null, dir, a[field], b[field]);
            });
          }
        }]);

        return LocalSorter;
      }();

      function filterValues(value, search) {
        return value.toString().toLowerCase().includes(search.toString().toLowerCase());
      }

      var LocalFilter = /*#__PURE__*/function () {
        function LocalFilter() {
          _classCallCheck(this, LocalFilter);
        }

        _createClass(LocalFilter, null, [{
          key: "filter",
          value: function filter(data, field, search, customFilter) {
            var filter = customFilter ? customFilter : filterValues;
            return data.filter(function (el) {
              var value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
              return filter.call(null, value, search);
            });
          }
        }]);

        return LocalFilter;
      }();

      var LocalPager = /*#__PURE__*/function () {
        function LocalPager() {
          _classCallCheck(this, LocalPager);
        }

        _createClass(LocalPager, null, [{
          key: "paginate",
          value: function paginate(data, page, perPage) {
            return data.slice(perPage * (page - 1), perPage * page);
          }
        }]);

        return LocalPager;
      }();

      var _LocalDataSource = /*#__PURE__*/function (_DataSource) {
        _inherits(_LocalDataSource, _DataSource);

        var _super18 = _createSuper(_LocalDataSource);

        function _LocalDataSource() {
          var _this44;

          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          _classCallCheck(this, _LocalDataSource);

          _this44 = _super18.call(this);
          _this44.data = [];
          _this44.filteredAndSorted = [];
          _this44.sortConf = [];
          _this44.filterConf = {
            filters: [],
            andOperator: true
          };
          _this44.pagingConf = {};
          _this44.data = data;
          return _this44;
        }

        _createClass(_LocalDataSource, [{
          key: "load",
          value: function load(data) {
            this.data = data;
            return _get(_getPrototypeOf(_LocalDataSource.prototype), "load", this).call(this, data);
          }
        }, {
          key: "prepend",
          value: function prepend(element) {
            this.reset(true);
            this.data.unshift(element);
            return _get(_getPrototypeOf(_LocalDataSource.prototype), "prepend", this).call(this, element);
          }
        }, {
          key: "append",
          value: function append(element) {
            this.reset(true);
            this.data.push(element);
            return _get(_getPrototypeOf(_LocalDataSource.prototype), "append", this).call(this, element);
          }
        }, {
          key: "add",
          value: function add(element) {
            this.data.push(element);
            return _get(_getPrototypeOf(_LocalDataSource.prototype), "add", this).call(this, element);
          }
        }, {
          key: "remove",
          value: function remove(element) {
            this.data = this.data.filter(function (el) {
              return el !== element;
            });
            return _get(_getPrototypeOf(_LocalDataSource.prototype), "remove", this).call(this, element);
          }
        }, {
          key: "update",
          value: function update(element, values) {
            var _this45 = this;

            return new Promise(function (resolve, reject) {
              _this45.find(element).then(function (found) {
                found = deepExtend(found, values);

                _get(_getPrototypeOf(_LocalDataSource.prototype), "update", _this45).call(_this45, found, values).then(resolve)["catch"](reject);
              })["catch"](reject);
            });
          }
        }, {
          key: "find",
          value: function find(element) {
            var found = this.data.find(function (el) {
              return el === element;
            });

            if (found) {
              return Promise.resolve(found);
            }

            return Promise.reject(new Error('Element was not found in the dataset'));
          }
        }, {
          key: "getElements",
          value: function getElements() {
            var data = this.data.slice(0);
            return Promise.resolve(this.prepareData(data));
          }
        }, {
          key: "getFilteredAndSorted",
          value: function getFilteredAndSorted() {
            var data = this.data.slice(0);
            this.prepareData(data);
            return Promise.resolve(this.filteredAndSorted);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            var data = this.data.slice(0);
            return Promise.resolve(data);
          }
        }, {
          key: "reset",
          value: function reset() {
            var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (silent) {
              this.filterConf = {
                filters: [],
                andOperator: true
              };
              this.sortConf = [];
              this.pagingConf['page'] = 1;
            } else {
              this.setFilter([], true, false);
              this.setSort([], false);
              this.setPage(1);
            }
          }
        }, {
          key: "empty",
          value: function empty() {
            this.data = [];
            return _get(_getPrototypeOf(_LocalDataSource.prototype), "empty", this).call(this);
          }
        }, {
          key: "count",
          value: function count() {
            return this.filteredAndSorted.length;
          }
          /**
           *
           * Array of conf objects
           * [
           *  {field: string, direction: asc|desc|null, compare: Function|null},
           * ]
           * @param conf
           * @param doEmit
           * @returns {LocalDataSource}
           */

        }, {
          key: "setSort",
          value: function setSort(conf) {
            var doEmit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (conf !== null) {
              conf.forEach(function (fieldConf) {
                if (!fieldConf['field'] || typeof fieldConf['direction'] === 'undefined') {
                  throw new Error('Sort configuration object is not valid');
                }
              });
              this.sortConf = conf;
            }

            _get(_getPrototypeOf(_LocalDataSource.prototype), "setSort", this).call(this, conf, doEmit);

            return this;
          }
          /**
           *
           * Array of conf objects
           * [
           *  {field: string, search: string, filter: Function|null},
           * ]
           * @param conf
           * @param andOperator
           * @param doEmit
           * @returns {LocalDataSource}
           */

        }, {
          key: "setFilter",
          value: function setFilter(conf) {
            var _this46 = this;

            var andOperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var doEmit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (conf && conf.length > 0) {
              conf.forEach(function (fieldConf) {
                _this46.addFilter(fieldConf, andOperator, false);
              });
            } else {
              this.filterConf = {
                filters: [],
                andOperator: true
              };
            }

            this.filterConf.andOperator = andOperator;
            this.pagingConf['page'] = 1;

            _get(_getPrototypeOf(_LocalDataSource.prototype), "setFilter", this).call(this, conf, andOperator, doEmit);

            return this;
          }
        }, {
          key: "addFilter",
          value: function addFilter(fieldConf) {
            var _this47 = this;

            var andOperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var doEmit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (!fieldConf['field'] || typeof fieldConf['search'] === 'undefined') {
              throw new Error('Filter configuration object is not valid');
            }

            var found = false;
            this.filterConf.filters.forEach(function (currentFieldConf, index) {
              if (currentFieldConf['field'] === fieldConf['field']) {
                _this47.filterConf.filters[index] = fieldConf;
                found = true;
              }
            });

            if (!found) {
              this.filterConf.filters.push(fieldConf);
            }

            this.filterConf.andOperator = andOperator;

            _get(_getPrototypeOf(_LocalDataSource.prototype), "addFilter", this).call(this, fieldConf, andOperator, doEmit);

            return this;
          }
        }, {
          key: "setPaging",
          value: function setPaging(page, perPage) {
            var doEmit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            this.pagingConf['page'] = page;
            this.pagingConf['perPage'] = perPage;

            _get(_getPrototypeOf(_LocalDataSource.prototype), "setPaging", this).call(this, page, perPage, doEmit);

            return this;
          }
        }, {
          key: "setPage",
          value: function setPage(page) {
            var doEmit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            this.pagingConf['page'] = page;

            _get(_getPrototypeOf(_LocalDataSource.prototype), "setPage", this).call(this, page, doEmit);

            return this;
          }
        }, {
          key: "getSort",
          value: function getSort() {
            return this.sortConf;
          }
        }, {
          key: "getFilter",
          value: function getFilter() {
            return this.filterConf;
          }
        }, {
          key: "getPaging",
          value: function getPaging() {
            return this.pagingConf;
          }
        }, {
          key: "prepareData",
          value: function prepareData(data) {
            data = this.filter(data);
            data = this.sort(data);
            this.filteredAndSorted = data.slice(0);
            return this.paginate(data);
          }
        }, {
          key: "sort",
          value: function sort(data) {
            if (this.sortConf) {
              this.sortConf.forEach(function (fieldConf) {
                data = LocalSorter.sort(data, fieldConf['field'], fieldConf['direction'], fieldConf['compare']);
              });
            }

            return data;
          } // TODO: refactor?

        }, {
          key: "filter",
          value: function filter(data) {
            if (this.filterConf.filters) {
              if (this.filterConf.andOperator) {
                this.filterConf.filters.forEach(function (fieldConf) {
                  if (fieldConf['search'].length > 0) {
                    data = LocalFilter.filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']);
                  }
                });
              } else {
                var mergedData = [];
                this.filterConf.filters.forEach(function (fieldConf) {
                  if (fieldConf['search'].length > 0) {
                    mergedData = mergedData.concat(LocalFilter.filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']));
                  }
                }); // remove non unique items

                data = mergedData.filter(function (elem, pos, arr) {
                  return arr.indexOf(elem) === pos;
                });
              }
            }

            return data;
          }
        }, {
          key: "paginate",
          value: function paginate(data) {
            if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
              data = LocalPager.paginate(data, this.pagingConf['page'], this.pagingConf['perPage']);
            }

            return data;
          }
        }]);

        return _LocalDataSource;
      }(DataSource);

      var _Ng2SmartTableComponent = /*#__PURE__*/function () {
        function _Ng2SmartTableComponent() {
          _classCallCheck(this, _Ng2SmartTableComponent);

          this.settings = {};
          this.rowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.rowDeselect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.userRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.custom = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.deleteConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.editConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.createConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.rowHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.defaultSettings = {
            mode: 'inline',
            selectMode: 'single',

            /**
             * Points to an element in all data
             *
             * when < 0 all lines must be deselected
             */
            selectedRowIndex: 0,
            switchPageToSelectedRowPage: false,
            hideHeader: false,
            hideSubHeader: false,
            actions: {
              columnTitle: 'Actions',
              add: true,
              edit: true,
              "delete": true,
              custom: [],
              position: 'left'
            },
            filter: {
              inputClass: ''
            },
            edit: {
              inputClass: '',
              editButtonContent: 'Edit',
              saveButtonContent: 'Update',
              cancelButtonContent: 'Cancel',
              confirmSave: false
            },
            add: {
              inputClass: '',
              addButtonContent: 'Add New',
              createButtonContent: 'Create',
              cancelButtonContent: 'Cancel',
              confirmCreate: false
            },
            "delete": {
              deleteButtonContent: 'Delete',
              confirmDelete: false
            },
            attr: {
              id: '',
              "class": ''
            },
            noDataMessage: 'No data found',
            columns: {},
            pager: {
              display: true,
              page: 1,
              perPage: 10
            },
            rowClassFunction: function rowClassFunction() {
              return '';
            }
          };
          this.isAllSelected = false;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        }

        _createClass(_Ng2SmartTableComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this.grid) {
              if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
              }

              if (changes['source']) {
                this.source = this.prepareSource();
                this.grid.setSource(this.source);
              }
            } else {
              this.initGrid();
            }

            this.tableId = this.grid.getSetting('attr.id');
            this.tableClass = this.grid.getSetting('attr.class');
            this.isHideHeader = this.grid.getSetting('hideHeader');
            this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
            this.isPagerDisplay = this.grid.getSetting('pager.display');
            this.isPagerDisplay = this.grid.getSetting('pager.display');
            this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
            this.rowClassFunction = this.grid.getSetting('rowClassFunction');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
          }
        }, {
          key: "selectRow",
          value: function selectRow(index) {
            var switchPageToSelectedRowPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.grid.getSetting('switchPageToSelectedRowPage');

            if (!this.grid) {
              return;
            }

            this.grid.settings.selectedRowIndex = index;

            if (this.isIndexOutOfRange(index)) {
              // we need to deselect all rows if we got an incorrect index
              this.deselectAllRows();
              return;
            }

            if (switchPageToSelectedRowPage) {
              var source = this.source;
              var paging = source.getPaging();
              var page = getPageForRowIndex(index, paging.perPage);
              index = index % paging.perPage;
              this.grid.settings.selectedRowIndex = index;

              if (page !== paging.page) {
                source.setPage(page);
                return;
              }
            }

            var row = this.grid.getRows()[index];

            if (row) {
              this.onSelectRow(row);
            } else {
              // we need to deselect all rows if we got an incorrect index
              this.deselectAllRows();
            }
          }
        }, {
          key: "deselectAllRows",
          value: function deselectAllRows() {
            this.grid.dataSet.deselectAll();
            this.emitDeselectRow(null);
          }
        }, {
          key: "editRowSelect",
          value: function editRowSelect(row) {
            if (this.grid.getSetting('selectMode') === 'multi') {
              this.onMultipleSelectRow(row);
            } else {
              this.onSelectRow(row);
            }
          }
        }, {
          key: "onUserSelectRow",
          value: function onUserSelectRow(row) {
            if (this.grid.getSetting('selectMode') !== 'multi') {
              this.grid.selectRow(row);
              this.emitUserSelectRow(row);
              this.emitSelectRow(row);
            }
          }
        }, {
          key: "onRowHover",
          value: function onRowHover(row) {
            this.rowHover.emit(row);
          }
        }, {
          key: "multipleSelectRow",
          value: function multipleSelectRow(row) {
            this.grid.multipleSelectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
          }
        }, {
          key: "onSelectAllRows",
          value: function onSelectAllRows($event) {
            this.isAllSelected = !this.isAllSelected;
            this.grid.selectAllRows(this.isAllSelected);
            this.emitUserSelectRow(null);
            this.emitSelectRow(null);
          }
        }, {
          key: "onSelectRow",
          value: function onSelectRow(row) {
            this.grid.selectRow(row);
            this.emitSelectRow(row);
          }
        }, {
          key: "onMultipleSelectRow",
          value: function onMultipleSelectRow(row) {
            this.emitSelectRow(row);
          }
        }, {
          key: "initGrid",
          value: function initGrid() {
            this.source = this.prepareSource();
            this.grid = new Grid(this.source, this.prepareSettings());
            this.subscribeToOnSelectRow();
            this.subscribeToOnDeselectRow();
          }
        }, {
          key: "prepareSource",
          value: function prepareSource() {
            if (this.source instanceof DataSource) {
              return this.source;
            } else if (this.source instanceof Array) {
              return new _LocalDataSource(this.source);
            }

            return new _LocalDataSource();
          }
        }, {
          key: "prepareSettings",
          value: function prepareSettings() {
            return deepExtend({}, this.defaultSettings, this.settings);
          }
        }, {
          key: "changePage",
          value: function changePage($event) {
            this.resetAllSelector();
          }
        }, {
          key: "sort",
          value: function sort($event) {
            this.resetAllSelector();
          }
        }, {
          key: "filter",
          value: function filter($event) {
            this.resetAllSelector();
          }
        }, {
          key: "resetAllSelector",
          value: function resetAllSelector() {
            this.isAllSelected = false;
          }
        }, {
          key: "emitUserSelectRow",
          value: function emitUserSelectRow(row) {
            var selectedRows = this.grid.getSelectedRows();
            this.userRowSelect.emit({
              data: row ? row.getData() : null,
              isSelected: row ? row.getIsSelected() : null,
              source: this.source,
              selected: selectedRows && selectedRows.length ? selectedRows.map(function (r) {
                return r.getData();
              }) : []
            });
          }
        }, {
          key: "emitSelectRow",
          value: function emitSelectRow(row) {
            var data = {
              data: row ? row.getData() : null,
              isSelected: row ? row.getIsSelected() : null,
              source: this.source
            };
            this.rowSelect.emit(data);

            if (!(row === null || row === void 0 ? void 0 : row.isSelected)) {
              this.rowDeselect.emit(data);
            }
          }
        }, {
          key: "emitDeselectRow",
          value: function emitDeselectRow(row) {
            this.rowDeselect.emit({
              data: row ? row.getData() : null,
              isSelected: row ? row.getIsSelected() : null,
              source: this.source
            });
          }
        }, {
          key: "isIndexOutOfRange",
          value: function isIndexOutOfRange(index) {
            var _a;

            var dataAmount = (_a = this.source) === null || _a === void 0 ? void 0 : _a.count();
            return index < 0 || typeof dataAmount === 'number' && index >= dataAmount;
          }
        }, {
          key: "subscribeToOnSelectRow",
          value: function subscribeToOnSelectRow() {
            var _this48 = this;

            if (this.onSelectRowSubscription) {
              this.onSelectRowSubscription.unsubscribe();
            }

            this.onSelectRowSubscription = this.grid.onSelectRow().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroyed$)).subscribe(function (row) {
              _this48.emitSelectRow(row);
            });
          }
        }, {
          key: "subscribeToOnDeselectRow",
          value: function subscribeToOnDeselectRow() {
            var _this49 = this;

            if (this.onDeselectRowSubscription) {
              this.onDeselectRowSubscription.unsubscribe();
            }

            this.onDeselectRowSubscription = this.grid.onDeselectRow().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroyed$)).subscribe(function (row) {
              _this49.emitDeselectRow(row);
            });
          }
        }]);

        return _Ng2SmartTableComponent;
      }();

      _Ng2SmartTableComponent.ɵfac = function Ng2SmartTableComponent_Factory(t) {
        return new (t || _Ng2SmartTableComponent)();
      };

      _Ng2SmartTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _Ng2SmartTableComponent,
        selectors: [["ng2-smart-table"]],
        inputs: {
          settings: "settings",
          source: "source"
        },
        outputs: {
          rowSelect: "rowSelect",
          rowDeselect: "rowDeselect",
          userRowSelect: "userRowSelect",
          "delete": "delete",
          edit: "edit",
          create: "create",
          custom: "custom",
          deleteConfirm: "deleteConfirm",
          editConfirm: "editConfirm",
          createConfirm: "createConfirm",
          rowHover: "rowHover"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 4,
        vars: 9,
        consts: [[3, "id", "ngClass"], ["ng2-st-thead", "", 3, "grid", "isAllSelected", "source", "createConfirm", "create", "selectAllRows", "sort", "filter", 4, "ngIf"], ["ng2-st-tbody", "", 3, "grid", "source", "deleteConfirm", "editConfirm", "rowClassFunction", "edit", "delete", "custom", "userSelectRow", "editRowSelect", "multipleSelectRow", "rowHover"], [3, "source", "perPageSelect", "changePage", 4, "ngIf"], ["ng2-st-thead", "", 3, "grid", "isAllSelected", "source", "createConfirm", "create", "selectAllRows", "sort", "filter"], [3, "source", "perPageSelect", "changePage"]],
        template: function Ng2SmartTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Ng2SmartTableComponent_thead_1_Template, 1, 4, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tbody", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("edit", function Ng2SmartTableComponent_Template_tbody_edit_2_listener($event) {
              return ctx.edit.emit($event);
            })("delete", function Ng2SmartTableComponent_Template_tbody_delete_2_listener($event) {
              return ctx["delete"].emit($event);
            })("custom", function Ng2SmartTableComponent_Template_tbody_custom_2_listener($event) {
              return ctx.custom.emit($event);
            })("userSelectRow", function Ng2SmartTableComponent_Template_tbody_userSelectRow_2_listener($event) {
              return ctx.onUserSelectRow($event);
            })("editRowSelect", function Ng2SmartTableComponent_Template_tbody_editRowSelect_2_listener($event) {
              return ctx.editRowSelect($event);
            })("multipleSelectRow", function Ng2SmartTableComponent_Template_tbody_multipleSelectRow_2_listener($event) {
              return ctx.multipleSelectRow($event);
            })("rowHover", function Ng2SmartTableComponent_Template_tbody_rowHover_2_listener($event) {
              return ctx.onRowHover($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, Ng2SmartTableComponent_ng2_smart_table_pager_3_Template, 1, 2, "ng2-smart-table-pager", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.tableId)("ngClass", ctx.tableClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isHideHeader || !ctx.isHideSubHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grid", ctx.grid)("source", ctx.source)("deleteConfirm", ctx.deleteConfirm)("editConfirm", ctx.editConfirm)("rowClassFunction", ctx.rowClassFunction);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isPagerDisplay);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, Ng2SmartTableTbodyComponent, Ng2SmartTableTheadComponent, PagerComponent],
        styles: ["[_nghost-%COMP%]{font-size:1rem}[_nghost-%COMP%]     *{box-sizing:border-box}[_nghost-%COMP%]     button, [_nghost-%COMP%]     input, [_nghost-%COMP%]     optgroup, [_nghost-%COMP%]     select, [_nghost-%COMP%]     textarea{color:inherit;font:inherit;margin:0}[_nghost-%COMP%]     table{border-collapse:collapse;border-spacing:0;display:table;line-height:1.5em;max-width:100%;overflow:auto;width:100%;word-break:normal;word-break:keep-all}[_nghost-%COMP%]     table tr th{font-weight:700}[_nghost-%COMP%]     table tr section{font-size:.75em;font-weight:700}[_nghost-%COMP%]     table tr td, [_nghost-%COMP%]     table tr th{font-size:.875em;margin:0;padding:.5em 1em}[_nghost-%COMP%]     a{color:#1e6bb8;text-decoration:none}[_nghost-%COMP%]     a:hover{text-decoration:underline}"]
      });
      _Ng2SmartTableComponent.propDecorators = {
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        settings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        rowSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        rowDeselect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        userRowSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        "delete": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        edit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        create: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        custom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        deleteConfirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        editConfirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        createConfirm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        rowHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_Ng2SmartTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'ng2-smart-table',
            template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\n\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\n                      [grid]=\"grid\"\n                      [isAllSelected]=\"isAllSelected\"\n                      [source]=\"source\"\n                      [createConfirm]=\"createConfirm\"\n                      (create)=\"create.emit($event)\"\n                      (selectAllRows)=\"onSelectAllRows($event)\"\n                      (sort)=\"sort($event)\"\n                      (filter)=\"filter($event)\">\n  </thead>\n\n  <tbody ng2-st-tbody [grid]=\"grid\"\n                      [source]=\"source\"\n                      [deleteConfirm]=\"deleteConfirm\"\n                      [editConfirm]=\"editConfirm\"\n                      [rowClassFunction]=\"rowClassFunction\"\n                      (edit)=\"edit.emit($event)\"\n                      (delete)=\"delete.emit($event)\"\n                      (custom)=\"custom.emit($event)\"\n                      (userSelectRow)=\"onUserSelectRow($event)\"\n                      (editRowSelect)=\"editRowSelect($event)\"\n                      (multipleSelectRow)=\"multipleSelectRow($event)\"\n                      (rowHover)=\"onRowHover($event)\">\n  </tbody>\n\n</table>\n\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\n                        [source]=\"source\"\n                        [perPageSelect]=\"perPageSelect\"\n                        (changePage)=\"changePage($event)\">\n</ng2-smart-table-pager>\n",
            styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{border-collapse:collapse;border-spacing:0;display:table;line-height:1.5em;max-width:100%;overflow:auto;width:100%;word-break:normal;word-break:keep-all}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}"]
          }]
        }], function () {
          return [];
        }, {
          settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          rowSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          rowDeselect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          userRowSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          "delete": [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          edit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          create: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          custom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          deleteConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          editConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          createConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          rowHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var _Ng2SmartTableModule = function _Ng2SmartTableModule() {
        _classCallCheck(this, _Ng2SmartTableModule);
      };

      _Ng2SmartTableModule.ɵfac = function Ng2SmartTableModule_Factory(t) {
        return new (t || _Ng2SmartTableModule)();
      };

      _Ng2SmartTableModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _Ng2SmartTableModule
      });
      _Ng2SmartTableModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, CellModule, FilterModule, PagerModule, TBodyModule, THeadModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_Ng2SmartTableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, CellModule, FilterModule, PagerModule, TBodyModule, THeadModule],
            declarations: [_Ng2SmartTableComponent],
            exports: [_Ng2SmartTableComponent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_Ng2SmartTableModule, {
          declarations: function declarations() {
            return [_Ng2SmartTableComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, CellModule, FilterModule, PagerModule, TBodyModule, THeadModule];
          },
          exports: function exports() {
            return [_Ng2SmartTableComponent];
          }
        });
      })();

      var ServerSourceConf = function ServerSourceConf() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$endPoint = _ref.endPoint,
            endPoint = _ref$endPoint === void 0 ? '' : _ref$endPoint,
            _ref$sortFieldKey = _ref.sortFieldKey,
            sortFieldKey = _ref$sortFieldKey === void 0 ? '' : _ref$sortFieldKey,
            _ref$sortDirKey = _ref.sortDirKey,
            sortDirKey = _ref$sortDirKey === void 0 ? '' : _ref$sortDirKey,
            _ref$pagerPageKey = _ref.pagerPageKey,
            pagerPageKey = _ref$pagerPageKey === void 0 ? '' : _ref$pagerPageKey,
            _ref$pagerLimitKey = _ref.pagerLimitKey,
            pagerLimitKey = _ref$pagerLimitKey === void 0 ? '' : _ref$pagerLimitKey,
            _ref$filterFieldKey = _ref.filterFieldKey,
            filterFieldKey = _ref$filterFieldKey === void 0 ? '' : _ref$filterFieldKey,
            _ref$totalKey = _ref.totalKey,
            totalKey = _ref$totalKey === void 0 ? '' : _ref$totalKey,
            _ref$dataKey = _ref.dataKey,
            dataKey = _ref$dataKey === void 0 ? '' : _ref$dataKey;

        _classCallCheck(this, ServerSourceConf);

        this.endPoint = endPoint ? endPoint : '';
        this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
        this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
        this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
        this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
        this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
        this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
        this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
      };

      ServerSourceConf.SORT_FIELD_KEY = '_sort';
      ServerSourceConf.SORT_DIR_KEY = '_order';
      ServerSourceConf.PAGER_PAGE_KEY = '_page';
      ServerSourceConf.PAGER_LIMIT_KEY = '_limit';
      ServerSourceConf.FILTER_FIELD_KEY = '#field#_like';
      ServerSourceConf.TOTAL_KEY = 'x-total-count';
      ServerSourceConf.DATA_KEY = '';

      var _ServerDataSource = /*#__PURE__*/function (_LocalDataSource2) {
        _inherits(_ServerDataSource, _LocalDataSource2);

        var _super19 = _createSuper(_ServerDataSource);

        function _ServerDataSource(http) {
          var _this50;

          var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, _ServerDataSource);

          _this50 = _super19.call(this);
          _this50.http = http;
          _this50.lastRequestCount = 0;
          _this50.conf = new ServerSourceConf(conf);

          if (!_this50.conf.endPoint) {
            throw new Error('At least endPoint must be specified as a configuration of the server data source.');
          }

          return _this50;
        }

        _createClass(_ServerDataSource, [{
          key: "count",
          value: function count() {
            return this.lastRequestCount;
          }
        }, {
          key: "getElements",
          value: function getElements() {
            var _this51 = this;

            return this.requestElements().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function (res) {
              _this51.lastRequestCount = _this51.extractTotalFromResponse(res);
              _this51.data = _this51.extractDataFromResponse(res);
              return _this51.data;
            })).toPromise();
          }
          /**
           * Extracts array of data from server response
           * @param res
           * @returns {any}
           */

        }, {
          key: "extractDataFromResponse",
          value: function extractDataFromResponse(res) {
            var rawData = res.body;
            var data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;

            if (data instanceof Array) {
              return data;
            }

            throw new Error("Data must be an array.\n    Please check that data extracted from the server response by the key '".concat(this.conf.dataKey, "' exists and is array."));
          }
          /**
           * Extracts total rows count from the server response
           * Looks for the count in the heders first, then in the response body
           * @param res
           * @returns {any}
           */

        }, {
          key: "extractTotalFromResponse",
          value: function extractTotalFromResponse(res) {
            if (res.headers.has(this.conf.totalKey)) {
              return +res.headers.get(this.conf.totalKey);
            } else {
              var rawData = res.body;
              return getDeepFromObject(rawData, this.conf.totalKey, 0);
            }
          }
        }, {
          key: "requestElements",
          value: function requestElements() {
            var httpParams = this.createRequesParams();
            return this.http.get(this.conf.endPoint, {
              params: httpParams,
              observe: 'response'
            });
          }
        }, {
          key: "createRequesParams",
          value: function createRequesParams() {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams();
            httpParams = this.addSortRequestParams(httpParams);
            httpParams = this.addFilterRequestParams(httpParams);
            return this.addPagerRequestParams(httpParams);
          }
        }, {
          key: "addSortRequestParams",
          value: function addSortRequestParams(httpParams) {
            var _this52 = this;

            if (this.sortConf) {
              this.sortConf.forEach(function (fieldConf) {
                httpParams = httpParams.set(_this52.conf.sortFieldKey, fieldConf.field);
                httpParams = httpParams.set(_this52.conf.sortDirKey, fieldConf.direction.toUpperCase());
              });
            }

            return httpParams;
          }
        }, {
          key: "addFilterRequestParams",
          value: function addFilterRequestParams(httpParams) {
            var _this53 = this;

            if (this.filterConf.filters) {
              this.filterConf.filters.forEach(function (fieldConf) {
                if (fieldConf['search']) {
                  httpParams = httpParams.set(_this53.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
                }
              });
            }

            return httpParams;
          }
        }, {
          key: "addPagerRequestParams",
          value: function addPagerRequestParams(httpParams) {
            if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
              httpParams = httpParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
              httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
            }

            return httpParams;
          }
        }]);

        return _ServerDataSource;
      }(_LocalDataSource);
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng2-smart-table.js.map

      /***/

    },

    /***/
    16157:
    /*!*************************************************************!*\
      !*** ./src/app/tables/basic-table/basic-table.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BasicTableComponent": function BasicTableComponent() {
          return (
            /* binding */
            _BasicTableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      589);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      7639);

      function BasicTableComponent_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BasicTableComponent_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.position, " ");
        }
      }

      function BasicTableComponent_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BasicTableComponent_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.name, " ");
        }
      }

      function BasicTableComponent_mat_header_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weight ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BasicTableComponent_mat_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.weight, " ");
        }
      }

      function BasicTableComponent_mat_header_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Symbol ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BasicTableComponent_mat_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.symbol, " ");
        }
      }

      function BasicTableComponent_mat_header_row_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function BasicTableComponent_mat_row_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }
      }

      var ELEMENT_DATA = [{
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H'
      }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He'
      }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li'
      }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be'
      }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B'
      }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C'
      }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N'
      }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O'
      }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F'
      }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne'
      }, {
        position: 11,
        name: 'Sodium',
        weight: 22.9897,
        symbol: 'Na'
      }, {
        position: 12,
        name: 'Magnesium',
        weight: 24.305,
        symbol: 'Mg'
      }, {
        position: 13,
        name: 'Aluminum',
        weight: 26.9815,
        symbol: 'Al'
      }, {
        position: 14,
        name: 'Silicon',
        weight: 28.0855,
        symbol: 'Si'
      }, {
        position: 15,
        name: 'Phosphorus',
        weight: 30.9738,
        symbol: 'P'
      }, {
        position: 16,
        name: 'Sulfur',
        weight: 32.065,
        symbol: 'S'
      }, {
        position: 17,
        name: 'Chlorine',
        weight: 35.453,
        symbol: 'Cl'
      }, {
        position: 18,
        name: 'Argon',
        weight: 39.948,
        symbol: 'Ar'
      }, {
        position: 19,
        name: 'Potassium',
        weight: 39.0983,
        symbol: 'K'
      }, {
        position: 20,
        name: 'Calcium',
        weight: 40.078,
        symbol: 'Ca'
      }];

      var _BasicTableComponent = function _BasicTableComponent() {
        _classCallCheck(this, _BasicTableComponent);

        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(ELEMENT_DATA);
      };

      _BasicTableComponent.ɵfac = function BasicTableComponent_Factory(t) {
        return new (t || _BasicTableComponent)();
      };

      _BasicTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _BasicTableComponent,
        selectors: [["app-basictable"]],
        decls: 23,
        vars: 3,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "table-rasponsive"], [3, "dataSource"], ["table", ""], ["matColumnDef", "position"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"]],
        template: function BasicTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Basic table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-table", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BasicTableComponent_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BasicTableComponent_mat_cell_11_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BasicTableComponent_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BasicTableComponent_mat_cell_14_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BasicTableComponent_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BasicTableComponent_mat_cell_17_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BasicTableComponent_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BasicTableComponent_mat_cell_20_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BasicTableComponent_mat_header_row_21_Template, 1, 0, "mat-header-row", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BasicTableComponent_mat_row_22_Template, 1, 0, "mat-row", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    87704:
    /*!***********************************************************!*\
      !*** ./src/app/tables/filterable/filterable.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FilterableComponent": function FilterableComponent() {
          return (
            /* binding */
            _FilterableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      589);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      7639);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      46833);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      64372);

      function FilterableComponent_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FilterableComponent_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.position, " ");
        }
      }

      function FilterableComponent_mat_header_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FilterableComponent_mat_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.name, " ");
        }
      }

      function FilterableComponent_mat_header_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weight ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FilterableComponent_mat_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.weight, " ");
        }
      }

      function FilterableComponent_mat_header_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Symbol ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FilterableComponent_mat_cell_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.symbol, " ");
        }
      }

      function FilterableComponent_mat_header_row_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function FilterableComponent_mat_row_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }
      }

      var ELEMENT_DATA = [{
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H'
      }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He'
      }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li'
      }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be'
      }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B'
      }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C'
      }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N'
      }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O'
      }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F'
      }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne'
      }, {
        position: 11,
        name: 'Sodium',
        weight: 22.9897,
        symbol: 'Na'
      }, {
        position: 12,
        name: 'Magnesium',
        weight: 24.305,
        symbol: 'Mg'
      }, {
        position: 13,
        name: 'Aluminum',
        weight: 26.9815,
        symbol: 'Al'
      }, {
        position: 14,
        name: 'Silicon',
        weight: 28.0855,
        symbol: 'Si'
      }, {
        position: 15,
        name: 'Phosphorus',
        weight: 30.9738,
        symbol: 'P'
      }, {
        position: 16,
        name: 'Sulfur',
        weight: 32.065,
        symbol: 'S'
      }, {
        position: 17,
        name: 'Chlorine',
        weight: 35.453,
        symbol: 'Cl'
      }, {
        position: 18,
        name: 'Argon',
        weight: 39.948,
        symbol: 'Ar'
      }, {
        position: 19,
        name: 'Potassium',
        weight: 39.0983,
        symbol: 'K'
      }, {
        position: 20,
        name: 'Calcium',
        weight: 40.078,
        symbol: 'Ca'
      }];

      var _FilterableComponent = /*#__PURE__*/function () {
        function _FilterableComponent() {
          _classCallCheck(this, _FilterableComponent);

          this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(ELEMENT_DATA);
        }

        _createClass(_FilterableComponent, [{
          key: "applyFilter",
          value: function applyFilter(filterValue) {
            filterValue = filterValue.trim(); // Remove whitespace

            filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches

            this.dataSource.filter = filterValue;
          }
        }]);

        return _FilterableComponent;
      }();

      _FilterableComponent.ɵfac = function FilterableComponent_Factory(t) {
        return new (t || _FilterableComponent)();
      };

      _FilterableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FilterableComponent,
        selectors: [["app-basictable"]],
        decls: 26,
        vars: 3,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "bg-light", "p-10", "p-r-20", "p-l-20"], ["matInput", "", "placeholder", "Search (Filter)", 3, "keyup"], [1, "table-rasponsive"], [3, "dataSource"], ["table", ""], ["matColumnDef", "position"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"]],
        template: function FilterableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Filterable table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FilterableComponent_Template_input_keyup_8_listener($event) {
              return ctx.applyFilter($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-table", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FilterableComponent_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FilterableComponent_mat_cell_14_Template, 2, 1, "mat-cell", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FilterableComponent_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FilterableComponent_mat_cell_17_Template, 2, 1, "mat-cell", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FilterableComponent_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FilterableComponent_mat_cell_20_Template, 2, 1, "mat-cell", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FilterableComponent_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FilterableComponent_mat_cell_23_Template, 2, 1, "mat-cell", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FilterableComponent_mat_header_row_24_Template, 1, 0, "mat-header-row", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FilterableComponent_mat_row_25_Template, 1, 0, "mat-row", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXJhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    81703:
    /*!*********************************************!*\
      !*** ./src/app/tables/mix/mix.component.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MixComponent": function MixComponent() {
          return (
            /* binding */
            _MixComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      23487);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sort */
      60857);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      589);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      7639);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      46833);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      64372);

      function MixComponent_mat_header_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ID ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MixComponent_mat_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r10.id, " ");
        }
      }

      function MixComponent_mat_header_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Progress ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MixComponent_mat_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r11.progress, "% ");
        }
      }

      function MixComponent_mat_header_cell_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MixComponent_mat_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r12.name, " ");
        }
      }

      function MixComponent_mat_header_cell_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Color ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MixComponent_mat_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", row_r13.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r13.color, " ");
        }
      }

      function MixComponent_mat_header_row_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function MixComponent_mat_row_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 25, 100];
      };
      /** Constants used to fill up our data base. */


      var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
      var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

      var _MixComponent = /*#__PURE__*/function () {
        function _MixComponent() {
          _classCallCheck(this, _MixComponent);

          this.displayedColumns = ['id', 'name', 'progress', 'color']; // Create 100 users

          var users = [];

          for (var i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
          } // Assign the data to the data source for the table to render


          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(users);
        }
        /**
         * Set the paginator and sort after the view init since this component will
         * be able to query its view for the initialized paginator and sort.
         */


        _createClass(_MixComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(filterValue) {
            filterValue = filterValue.trim(); // Remove whitespace

            filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

            this.dataSource.filter = filterValue;
          }
        }]);

        return _MixComponent;
      }();

      _MixComponent.ɵfac = function MixComponent_Factory(t) {
        return new (t || _MixComponent)();
      };

      _MixComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MixComponent,
        selectors: [["app-mix"]],
        viewQuery: function MixComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 26,
        vars: 5,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "bg-light", "p-10", "p-r-20", "p-l-20"], ["matInput", "", "placeholder", "Filter", 3, "keyup"], [1, "table-rasponsive"], ["matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "progress"], ["matColumnDef", "name"], ["matColumnDef", "color"], [3, "color", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-sort-header", ""]],
        template: function MixComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Data table with sorting, pagination, and filtering.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function MixComponent_Template_input_keyup_8_listener($event) {
              return ctx.applyFilter($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MixComponent_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MixComponent_mat_cell_13_Template, 2, 1, "mat-cell", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MixComponent_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MixComponent_mat_cell_16_Template, 2, 1, "mat-cell", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MixComponent_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MixComponent_mat_cell_19_Template, 2, 1, "mat-cell", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MixComponent_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MixComponent_mat_cell_22_Template, 2, 3, "mat-cell", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MixComponent_mat_header_row_23_Template, 1, 0, "mat-header-row", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MixComponent_mat_row_24_Template, 1, 0, "mat-row", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-paginator", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXguY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /** Builds and returns a new User. */

      function createNewUser(id) {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' + NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
          id: id.toString(),
          name: name,
          progress: Math.round(Math.random() * 100).toString(),
          color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
      }
      /***/

    },

    /***/
    41462:
    /*!***********************************************************!*\
      !*** ./src/app/tables/pagination/pagination.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaginationComponent": function PaginationComponent() {
          return (
            /* binding */
            _PaginationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      23487);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      589);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      7639);

      function PaginationComponent_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaginationComponent_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.position, " ");
        }
      }

      function PaginationComponent_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaginationComponent_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.name, " ");
        }
      }

      function PaginationComponent_mat_header_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weight ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaginationComponent_mat_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.weight, " ");
        }
      }

      function PaginationComponent_mat_header_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Symbol ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaginationComponent_mat_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.symbol, " ");
        }
      }

      function PaginationComponent_mat_header_row_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function PaginationComponent_mat_row_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      var ELEMENT_DATA = [{
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H'
      }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He'
      }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li'
      }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be'
      }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B'
      }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C'
      }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N'
      }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O'
      }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F'
      }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne'
      }, {
        position: 11,
        name: 'Sodium',
        weight: 22.9897,
        symbol: 'Na'
      }, {
        position: 12,
        name: 'Magnesium',
        weight: 24.305,
        symbol: 'Mg'
      }, {
        position: 13,
        name: 'Aluminum',
        weight: 26.9815,
        symbol: 'Al'
      }, {
        position: 14,
        name: 'Silicon',
        weight: 28.0855,
        symbol: 'Si'
      }, {
        position: 15,
        name: 'Phosphorus',
        weight: 30.9738,
        symbol: 'P'
      }, {
        position: 16,
        name: 'Sulfur',
        weight: 32.065,
        symbol: 'S'
      }, {
        position: 17,
        name: 'Chlorine',
        weight: 35.453,
        symbol: 'Cl'
      }, {
        position: 18,
        name: 'Argon',
        weight: 39.948,
        symbol: 'Ar'
      }, {
        position: 19,
        name: 'Potassium',
        weight: 39.0983,
        symbol: 'K'
      }, {
        position: 20,
        name: 'Calcium',
        weight: 40.078,
        symbol: 'Ca'
      }];

      var _PaginationComponent = /*#__PURE__*/function () {
        function _PaginationComponent() {
          _classCallCheck(this, _PaginationComponent);

          this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(ELEMENT_DATA);
        }
        /**
         * Set the paginator after the view init since this component will
         * be able to query its view for the initialized paginator.
         */


        _createClass(_PaginationComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }]);

        return _PaginationComponent;
      }();

      _PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
        return new (t || _PaginationComponent)();
      };

      _PaginationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _PaginationComponent,
        selectors: [["app-basictable"]],
        viewQuery: function PaginationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 25,
        vars: 6,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "table-rasponsive"], [3, "dataSource"], ["table", ""], ["matColumnDef", "position"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions"], ["paginator", ""]],
        template: function PaginationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Table with pagination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-table", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaginationComponent_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PaginationComponent_mat_cell_11_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PaginationComponent_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PaginationComponent_mat_cell_14_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PaginationComponent_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PaginationComponent_mat_cell_17_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PaginationComponent_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PaginationComponent_mat_cell_20_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PaginationComponent_mat_header_row_21_Template, 1, 0, "mat-header-row", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PaginationComponent_mat_row_22_Template, 1, 0, "mat-row", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-paginator", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    81736:
    /*!********************************************************!*\
      !*** ./src/app/tables/smart-table/smart-data-table.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "settings": function settings() {
          return (
            /* binding */
            _settings
          );
        },

        /* harmony export */
        "settings2": function settings2() {
          return (
            /* binding */
            _settings2
          );
        },

        /* harmony export */
        "data": function data() {
          return (
            /* binding */
            _data2
          );
        }
        /* harmony export */

      });

      var _settings = {
        columns: {
          id: {
            title: 'ID',
            filter: false
          },
          name: {
            title: 'Full Name',
            filter: false
          },
          username: {
            title: 'User Name',
            filter: false
          },
          email: {
            title: 'Email',
            filter: false
          }
        },
        edit: {
          editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
          saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
          cancelButtonContent: '<i class="ti-close text-danger"></i>'
        },
        "delete": {
          deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
          saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
          cancelButtonContent: '<i class="ti-close text-danger"></i>'
        }
      };
      var _settings2 = {
        columns: {
          id: {
            title: 'ID',
            filter: false
          },
          name: {
            title: 'Full Name',
            filter: true
          },
          username: {
            title: 'User Name',
            filter: true
          },
          email: {
            title: 'Email',
            filter: true
          }
        },
        edit: {
          editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
          saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
          cancelButtonContent: '<i class="ti-close text-danger"></i>'
        },
        "delete": {
          deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
          saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
          cancelButtonContent: '<i class="ti-close text-danger"></i>'
        }
      };
      var _data2 = [{
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      }, {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv'
      }, {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net'
      }, {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org'
      }, {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca'
      }, {
        id: 6,
        name: 'Sunil Joshi',
        username: 'suniljoshi',
        email: 'suniljoshi@melissa.tv'
      }, {
        id: 7,
        name: 'Nirav joshi',
        username: 'niravjoshi',
        email: 'niravjoshi@yesenia.net'
      }, {
        id: 8,
        name: 'Vishal bhatt',
        username: 'vbhatt',
        email: 'vbhatt.OConner@kory.org'
      }, {
        id: 9,
        name: 'Bhavesh patel',
        username: 'bhavesh',
        email: 'bhavesh@annie.ca'
      }, {
        id: 10,
        name: 'Darshan patel',
        username: 'Darshan',
        email: 'Darshan@annie.ca'
      }, {
        id: 11,
        name: 'Hitesh patel',
        username: 'Hitesh',
        email: 'Hitesh@annie.ca'
      }];
      /***/
    },

    /***/
    53786:
    /*!*************************************************************!*\
      !*** ./src/app/tables/smart-table/smart-table.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SmarttableComponent": function SmarttableComponent() {
          return (
            /* binding */
            _SmarttableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _smart_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./smart-data-table */
      81736);
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng2-smart-table */
      64965);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      7639);

      var _SmarttableComponent = function _SmarttableComponent() {
        _classCallCheck(this, _SmarttableComponent);

        this.settings = _smart_data_table__WEBPACK_IMPORTED_MODULE_0__.settings;
        this.settings2 = _smart_data_table__WEBPACK_IMPORTED_MODULE_0__.settings2;
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.LocalDataSource(_smart_data_table__WEBPACK_IMPORTED_MODULE_0__.data); // create the source                                       
      };

      _SmarttableComponent.ɵfac = function SmarttableComponent_Factory(t) {
        return new (t || _SmarttableComponent)();
      };

      _SmarttableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _SmarttableComponent,
        selectors: [["ng-component"]],
        decls: 14,
        vars: 4,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "table", "table-responsive", "smart-table"], [1, "", 3, "settings", "source"]],
        template: function SmarttableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Edit Delete and update Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ng2-smart-table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Filterable Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ng2-smart-table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx.settings2)("source", ctx.source);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.Ng2SmartTableComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    30088:
    /*!*******************************************************!*\
      !*** ./src/app/tables/sortable/sortable.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SortableComponent": function SortableComponent() {
          return (
            /* binding */
            _SortableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sort */
      60857);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      589);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      7639);

      function SortableComponent_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SortableComponent_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.position, " ");
        }
      }

      function SortableComponent_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SortableComponent_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.name, " ");
        }
      }

      function SortableComponent_mat_header_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weight ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SortableComponent_mat_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.weight, " ");
        }
      }

      function SortableComponent_mat_header_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Symbol ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SortableComponent_mat_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.symbol, " ");
        }
      }

      function SortableComponent_mat_header_row_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function SortableComponent_mat_row_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }
      }

      var ELEMENT_DATA = [{
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H'
      }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He'
      }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li'
      }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be'
      }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B'
      }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C'
      }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N'
      }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O'
      }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F'
      }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne'
      }, {
        position: 11,
        name: 'Sodium',
        weight: 22.9897,
        symbol: 'Na'
      }, {
        position: 12,
        name: 'Magnesium',
        weight: 24.305,
        symbol: 'Mg'
      }, {
        position: 13,
        name: 'Aluminum',
        weight: 26.9815,
        symbol: 'Al'
      }, {
        position: 14,
        name: 'Silicon',
        weight: 28.0855,
        symbol: 'Si'
      }, {
        position: 15,
        name: 'Phosphorus',
        weight: 30.9738,
        symbol: 'P'
      }, {
        position: 16,
        name: 'Sulfur',
        weight: 32.065,
        symbol: 'S'
      }, {
        position: 17,
        name: 'Chlorine',
        weight: 35.453,
        symbol: 'Cl'
      }, {
        position: 18,
        name: 'Argon',
        weight: 39.948,
        symbol: 'Ar'
      }, {
        position: 19,
        name: 'Potassium',
        weight: 39.0983,
        symbol: 'K'
      }, {
        position: 20,
        name: 'Calcium',
        weight: 40.078,
        symbol: 'Ca'
      }];

      var _SortableComponent = /*#__PURE__*/function () {
        function _SortableComponent() {
          _classCallCheck(this, _SortableComponent);

          this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(ELEMENT_DATA);
        }
        /**
         * Set the sort after the view init since this component will
         * be able to query its view for the initialized sort.
         */


        _createClass(_SortableComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.sort = this.sort;
          }
        }]);

        return _SortableComponent;
      }();

      _SortableComponent.ɵfac = function SortableComponent_Factory(t) {
        return new (t || _SortableComponent)();
      };

      _SortableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _SortableComponent,
        selectors: [["app-sortable"]],
        viewQuery: function SortableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__.MatSort, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 23,
        vars: 3,
        consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "table-rasponsive"], ["matSort", "", 2, "max-height", "500px", "overflow", "auto", 3, "dataSource"], ["table", ""], ["matColumnDef", "position"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""]],
        template: function SortableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sortable table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-table", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SortableComponent_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SortableComponent_mat_cell_11_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SortableComponent_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SortableComponent_mat_cell_14_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SortableComponent_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SortableComponent_mat_cell_17_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SortableComponent_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SortableComponent_mat_cell_20_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SortableComponent_mat_header_row_21_Template, 1, 0, "mat-header-row", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SortableComponent_mat_row_22_Template, 1, 0, "mat-row", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    81439:
    /*!*****************************************!*\
      !*** ./src/app/tables/tables.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TablesModule": function TablesModule() {
          return (
            /* binding */
            _TablesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _demo_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../demo-material-module */
      55408);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      24751);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _tables_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tables.routing */
      19678);
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng2-smart-table */
      64965);
      /* harmony import */


      var _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./basic-table/basic-table.component */
      16157);
      /* harmony import */


      var _filterable_filterable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./filterable/filterable.component */
      87704);
      /* harmony import */


      var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pagination/pagination.component */
      41462);
      /* harmony import */


      var _smart_table_smart_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./smart-table/smart-table.component */
      53786);
      /* harmony import */


      var _sortable_sortable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sortable/sortable.component */
      30088);
      /* harmony import */


      var _mix_mix_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./mix/mix.component */
      81703);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _TablesModule = function _TablesModule() {
        _classCallCheck(this, _TablesModule);
      };

      _TablesModule.ɵfac = function TablesModule_Factory(t) {
        return new (t || _TablesModule)();
      };

      _TablesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _TablesModule
      });
      _TablesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(_tables_routing__WEBPACK_IMPORTED_MODULE_1__.TablesRoutes), _demo_material_module__WEBPACK_IMPORTED_MODULE_0__.DemoMaterialModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_13__.Ng2SmartTableModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_TablesModule, {
          declarations: [_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_2__.BasicTableComponent, _filterable_filterable_component__WEBPACK_IMPORTED_MODULE_3__.FilterableComponent, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__.PaginationComponent, _sortable_sortable_component__WEBPACK_IMPORTED_MODULE_6__.SortableComponent, _mix_mix_component__WEBPACK_IMPORTED_MODULE_7__.MixComponent, _smart_table_smart_table_component__WEBPACK_IMPORTED_MODULE_5__.SmarttableComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _demo_material_module__WEBPACK_IMPORTED_MODULE_0__.DemoMaterialModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_13__.Ng2SmartTableModule]
        });
      })();
      /***/

    },

    /***/
    19678:
    /*!******************************************!*\
      !*** ./src/app/tables/tables.routing.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TablesRoutes": function TablesRoutes() {
          return (
            /* binding */
            _TablesRoutes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./basic-table/basic-table.component */
      16157);
      /* harmony import */


      var _filterable_filterable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./filterable/filterable.component */
      87704);
      /* harmony import */


      var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pagination/pagination.component */
      41462);
      /* harmony import */


      var _sortable_sortable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sortable/sortable.component */
      30088);
      /* harmony import */


      var _mix_mix_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./mix/mix.component */
      81703);
      /* harmony import */


      var _smart_table_smart_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./smart-table/smart-table.component */
      53786);

      var _TablesRoutes = [{
        path: '',
        children: [{
          path: 'basictable',
          component: _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent
        }, {
          path: 'filterable',
          component: _filterable_filterable_component__WEBPACK_IMPORTED_MODULE_1__.FilterableComponent
        }, {
          path: 'pagination',
          component: _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__.PaginationComponent
        }, {
          path: 'sortable',
          component: _sortable_sortable_component__WEBPACK_IMPORTED_MODULE_3__.SortableComponent
        }, {
          path: 'mix',
          component: _mix_mix_component__WEBPACK_IMPORTED_MODULE_4__.MixComponent
        }, {
          path: 'smarttable',
          component: _smart_table_smart_table_component__WEBPACK_IMPORTED_MODULE_5__.SmarttableComponent
        }]
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tables_tables_module_ts-es5.js.map