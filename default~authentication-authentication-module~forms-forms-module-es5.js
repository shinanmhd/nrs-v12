(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~authentication-authentication-module~forms-forms-module"], {
    /***/
    "+9C2":
    /*!**************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/not-equal/index.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function C2(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "Njao"));

      __export(__webpack_require__(
      /*! ./validator */
      "sOqj")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "+FIL":
    /*!*****************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/range-length/index.js ***!
      \*****************************************************************************/

    /*! no static exports found */

    /***/
    function FIL(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "yTk+"));

      __export(__webpack_require__(
      /*! ./validator */
      "qVEE")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "+GCJ":
    /*!****************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/credit-card/index.js ***!
      \****************************************************************************/

    /*! no static exports found */

    /***/
    function GCJ(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "Z9J1"));

      __export(__webpack_require__(
      /*! ./validator */
      "G6hQ")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "//6X":
    /*!***********************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/base64/index.js ***!
      \***********************************************************************/

    /*! no static exports found */

    /***/
    function X(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "R74U"));

      __export(__webpack_require__(
      /*! ./validator */
      "tDxr")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "/1VP":
    /*!**********************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/range/index.js ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function VP(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "LEOC"));

      __export(__webpack_require__(
      /*! ./validator */
      "yjOq")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "0Pn3":
    /*!*********************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/uuid/index.js ***!
      \*********************************************************************/

    /*! no static exports found */

    /***/
    function Pn3(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "HmVp"));

      __export(__webpack_require__(
      /*! ./validator */
      "f6dB")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "0r7J":
    /*!*****************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/max-date/directive.js ***!
      \*****************************************************************************/

    /*! no static exports found */

    /***/
    function r7J(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "ThOI");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MAX_DATE_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return MaxDateValidator;
        }),
        multi: true
      };

      var MaxDateValidator = function () {
        function MaxDateValidator() {}

        MaxDateValidator.prototype.ngOnInit = function () {
          this.validator = _1.maxDate(this.maxDate);
        };

        MaxDateValidator.prototype.ngOnChanges = function (changes) {
          for (var key in changes) {
            if (key === 'maxDate') {
              this.validator = _1.maxDate(changes[key].currentValue);
              if (this.onChange) this.onChange();
            }
          }
        };

        MaxDateValidator.prototype.validate = function (c) {
          return this.validator(c);
        };

        MaxDateValidator.prototype.registerOnValidatorChange = function (fn) {
          this.onChange = fn;
        };

        MaxDateValidator.??fac = function MaxDateValidator_Factory(t) {
          return new (t || MaxDateValidator)();
        };

        MaxDateValidator.??dir = ??ngcc0.????defineDirective({
          type: MaxDateValidator,
          selectors: [["", "maxDate", "", "formControlName", ""], ["", "maxDate", "", "formControl", ""], ["", "maxDate", "", "ngModel", ""]],
          inputs: {
            maxDate: "maxDate"
          },
          features: [??ngcc0.????ProvidersFeature([MAX_DATE_VALIDATOR]), ??ngcc0.????NgOnChangesFeature]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(MaxDateValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
              providers: [MAX_DATE_VALIDATOR]
            }]
          }], function () {
            return [];
          }, {
            maxDate: [{
              type: core_1.Input
            }]
          });
        })();

        return MaxDateValidator;
      }();
      /** @nocollapse */


      MaxDateValidator.ctorParameters = function () {
        return [];
      };

      MaxDateValidator.propDecorators = {
        'maxDate': [{
          type: core_1.Input
        }]
      };
      exports.MaxDateValidator = MaxDateValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "1yXu":
    /*!**************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/equal/validator.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function yXu(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.equal = function (val) {
        return function (control) {
          if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
          var v = control.value;
          return val === v ? null : {
            equal: true
          };
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "29s/":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/library/modules/_shared.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function s(module, exports, __webpack_require__) {
      var core = __webpack_require__(
      /*! ./_core */
      "WEpk");

      var global = __webpack_require__(
      /*! ./_global */
      "5T2Y");

      var SHARED = '__core-js_shared__';
      var store = global[SHARED] || (global[SHARED] = {});
      (module.exports = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
      })('versions', []).push({
        version: core.version,
        mode: __webpack_require__(
        /*! ./_library */
        "uOPS") ? 'pure' : 'global',
        copyright: '?? 2020 Denis Pushkarev (zloirock.ru)'
      });
      /***/
    },

    /***/
    "2GTP":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/library/modules/_ctx.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function GTP(module, exports, __webpack_require__) {
      // optional / simple context binding
      var aFunction = __webpack_require__(
      /*! ./_a-function */
      "eaoh");

      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;

        switch (length) {
          case 1:
            return function (a) {
              return fn.call(that, a);
            };

          case 2:
            return function (a, b) {
              return fn.call(that, a, b);
            };

          case 3:
            return function (a, b, c) {
              return fn.call(that, a, b, c);
            };
        }

        return function ()
        /* ...args */
        {
          return fn.apply(that, arguments);
        };
      };
      /***/

    },

    /***/
    "2faE":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function faE(module, exports, __webpack_require__) {
      var anObject = __webpack_require__(
      /*! ./_an-object */
      "5K7Z");

      var IE8_DOM_DEFINE = __webpack_require__(
      /*! ./_ie8-dom-define */
      "eUtF");

      var toPrimitive = __webpack_require__(
      /*! ./_to-primitive */
      "G8Mo");

      var dP = Object.defineProperty;
      exports.f = __webpack_require__(
      /*! ./_descriptors */
      "jmDH") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
          return dP(O, P, Attributes);
        } catch (e) {
          /* empty */
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };
      /***/
    },

    /***/
    "34t3":
    /*!*********************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/json/index.js ***!
      \*********************************************************************/

    /*! no static exports found */

    /***/
    function t3(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "Pn9d"));

      __export(__webpack_require__(
      /*! ./validator */
      "A9Kl")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "5K7Z":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_an-object.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function K7Z(module, exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ./_is-object */
      "93I4");

      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(it + ' is not an object!');
        return it;
      };
      /***/

    },

    /***/
    "5PNq":
    /*!*********************************************************!*\
      !*** ./node_modules/libphonenumber-js/es6/AsYouType.js ***!
      \*********************************************************/

    /*! exports provided: DIGIT_PLACEHOLDER, default, close_dangling_braces, count_occurences, repeat */

    /***/
    function PNq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DIGIT_PLACEHOLDER", function () {
        return DIGIT_PLACEHOLDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "close_dangling_braces", function () {
        return close_dangling_braces;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "count_occurences", function () {
        return count_occurences;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "repeat", function () {
        return repeat;
      });
      /* harmony import */


      var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! babel-runtime/core-js/get-iterator */
      "FyfS");
      /* harmony import */


      var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! babel-runtime/helpers/classCallCheck */
      "iCc5");
      /* harmony import */


      var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! babel-runtime/helpers/createClass */
      "V7oC");
      /* harmony import */


      var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./metadata */
      "B/P3");
      /* harmony import */


      var _parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./parse */
      "Fh5j");
      /* harmony import */


      var _format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./format */
      "rg1z");
      /* harmony import */


      var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./common */
      "s/4N"); // This is an enhanced port of Google Android `libphonenumber`'s
      // `asyoutypeformatter.js` of 17th November, 2016.
      //
      // https://github.com/googlei18n/libphonenumber/blob/8d21a365061de2ba0675c878a710a7b24f74d2ae/javascript/i18n/phonenumbers/asyoutypeformatter.js
      // Used in phone number format template creation.
      // Could be any digit, I guess.


      var DUMMY_DIGIT = '9';
      var DUMMY_DIGIT_MATCHER = new RegExp(DUMMY_DIGIT, 'g'); // I don't know why is it exactly `15`

      var LONGEST_NATIONAL_PHONE_NUMBER_LENGTH = 15; // Create a phone number consisting only of the digit 9 that matches the
      // `number_pattern` by applying the pattern to the "longest phone number" string.

      var LONGEST_DUMMY_PHONE_NUMBER = repeat(DUMMY_DIGIT, LONGEST_NATIONAL_PHONE_NUMBER_LENGTH); // The digits that have not been entered yet will be represented by a \u2008,
      // the punctuation space.

      var DIGIT_PLACEHOLDER = 'x'; // '\u2008' (punctuation space)

      var DIGIT_PLACEHOLDER_MATCHER = new RegExp(DIGIT_PLACEHOLDER);
      var DIGIT_PLACEHOLDER_MATCHER_GLOBAL = new RegExp(DIGIT_PLACEHOLDER, 'g'); // A pattern that is used to match character classes in regular expressions.
      // An example of a character class is "[1-4]".

      var CHARACTER_CLASS_PATTERN = /\[([^\[\]])*\]/g; // Any digit in a regular expression that actually denotes a digit. For
      // example, in the regular expression "80[0-2]\d{6,10}", the first 2 digits
      // (8 and 0) are standalone digits, but the rest are not.
      // Two look-aheads are needed because the number following \\d could be a
      // two-digit number, since the phone number can be as long as 15 digits.

      var STANDALONE_DIGIT_PATTERN = /\d(?=[^,}][^,}])/g; // A pattern that is used to determine if a `format` is eligible
      // to be used by the "as you type formatter".
      // It is eligible when the `format` contains groups of the dollar sign
      // followed by a single digit, separated by valid phone number punctuation.
      // This prevents invalid punctuation (such as the star sign in Israeli star numbers)
      // getting into the output of the "as you type formatter".

      var ELIGIBLE_FORMAT_PATTERN = new RegExp('^' + '[' + _parse__WEBPACK_IMPORTED_MODULE_4__["VALID_PUNCTUATION"] + ']*' + '(\\$\\d[' + _parse__WEBPACK_IMPORTED_MODULE_4__["VALID_PUNCTUATION"] + ']*)+' + '$'); // This is the minimum length of the leading digits of a phone number
      // to guarantee the first "leading digits pattern" for a phone number format
      // to be preemptive.

      var MIN_LEADING_DIGITS_LENGTH = 3;
      var VALID_INCOMPLETE_PHONE_NUMBER = '[' + _parse__WEBPACK_IMPORTED_MODULE_4__["PLUS_CHARS"] + ']{0,1}' + '[' + _parse__WEBPACK_IMPORTED_MODULE_4__["VALID_PUNCTUATION"] + _parse__WEBPACK_IMPORTED_MODULE_4__["VALID_DIGITS"] + ']*';
      var VALID_INCOMPLETE_PHONE_NUMBER_PATTERN = new RegExp('^' + VALID_INCOMPLETE_PHONE_NUMBER + '$', 'i');

      var as_you_type = function () {
        function as_you_type(country_code, metadata) {
          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, as_you_type); // Metadata is required.

          if (!metadata || !metadata.countries) {
            throw new Error('Metadata is required');
          }

          if (country_code && metadata.countries[country_code]) {
            this.default_country = country_code;
          }

          this.metadata = metadata;
          this.reset();
        }

        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(as_you_type, [{
          key: 'input',
          value: function input(text) {
            // Parse input
            var extracted_number = Object(_parse__WEBPACK_IMPORTED_MODULE_4__["extract_formatted_phone_number"])(text); // Special case for a lone '+' sign
            // since it's not considered a possible phone number.

            if (!extracted_number) {
              if (text && text.indexOf('+') >= 0) {
                extracted_number = '+';
              }
            } // Validate possible first part of a phone number


            if (!Object(_common__WEBPACK_IMPORTED_MODULE_6__["matches_entirely"])(extracted_number, VALID_INCOMPLETE_PHONE_NUMBER_PATTERN)) {
              return this.current_output;
            }

            return this.process_input(Object(_parse__WEBPACK_IMPORTED_MODULE_4__["parse_phone_number"])(extracted_number));
          }
        }, {
          key: 'process_input',
          value: function process_input(input) {
            // If an out of position '+' sign detected
            // (or a second '+' sign),
            // then just drop it from the input.
            if (input[0] === '+') {
              if (!this.parsed_input) {
                this.parsed_input += '+'; // If a default country was set
                // then reset it because an explicitly international
                // phone number is being entered

                this.reset_countriness();
              }

              input = input.slice(1);
            } // Raw phone number


            this.parsed_input += input; // // Reset phone number validation state
            // this.valid = false
            // Add digits to the national number

            this.national_number += input; // Try to format the parsed input

            if (this.is_international()) {
              if (!this.country_phone_code) {
                // If one looks at country phone codes
                // then he can notice that no one country phone code
                // is ever a (leftmost) substring of another country phone code.
                // So if a valid country code is extracted so far
                // then it means that this is the country code.
                // If no country phone code could be extracted so far,
                // then just return the raw phone number,
                // because it has no way of knowing
                // how to format the phone number so far.
                if (!this.extract_country_phone_code()) {
                  // Return raw phone number
                  return this.parsed_input;
                } // Initialize country-specific data


                this.initialize_phone_number_formats_for_this_country_phone_code();
                this.reset_format();
                this.determine_the_country();
              } // `this.country` could be `undefined`,
              // for instance, when there is ambiguity
              // in a form of several different countries
              // each corresponding to the same country phone code
              // (e.g. NANPA: USA, Canada, etc),
              // and there's not enough digits entered
              // to reliably determine the country
              // the phone number belongs to.
              // Therefore, in cases of such ambiguity,
              // each time something is input,
              // try to determine the country
              // (if it's not determined yet).
              else if (!this.country) {
                  this.determine_the_country();
                }
            } else {
              // Some national prefixes are substrings of other national prefixes
              // (for the same country), therefore try to extract national prefix each time
              // because a longer national prefix might be available at some point in time.
              var previous_national_prefix = this.national_prefix;
              this.national_number = this.national_prefix + this.national_number; // Possibly extract a national prefix

              this.extract_national_prefix();

              if (this.national_prefix !== previous_national_prefix) {
                // National number has changed
                // (due to another national prefix been extracted)
                // therefore national number has changed
                // therefore reset all previous formatting data.
                // (and leading digits matching state)
                this.matching_formats = this.available_formats;
                this.reset_format();
              }
            }

            if (!this.should_format()) {
              return this.format_as_non_formatted_number();
            } // Check the available phone number formats
            // based on the currently available leading digits.


            this.match_formats_by_leading_digits(); // Format the phone number (given the next digits)

            var formatted_national_phone_number = this.format_national_phone_number(input); // If the phone number could be formatted,
            // then return it, possibly prepending with country phone code
            // (for international phone numbers only)

            if (formatted_national_phone_number) {
              return this.full_phone_number(formatted_national_phone_number);
            } // If the phone number couldn't be formatted,
            // then just fall back to the raw phone number.


            return this.parsed_input;
          }
        }, {
          key: 'format_as_non_formatted_number',
          value: function format_as_non_formatted_number() {
            if (this.is_international() && this.country_phone_code) {
              if (this.national_number) {
                // For convenience, the public `.template` property
                // contains the whole international number
                // if the phone number being input is international:
                // 'x' for the '+' sign, 'x'es for the country phone code,
                // a spacebar and then the template for the national number digits.
                this.template = DIGIT_PLACEHOLDER + repeat(DIGIT_PLACEHOLDER, this.country_phone_code.length) + ' ' + repeat(DIGIT_PLACEHOLDER, this.national_number.length);
                return '+' + this.country_phone_code + ' ' + this.national_number;
              }

              return '+' + this.country_phone_code;
            }

            return this.parsed_input;
          }
        }, {
          key: 'format_national_phone_number',
          value: function format_national_phone_number(next_digits) {
            // Format the next phone number digits
            // using the previously chosen phone number format.
            //
            // This is done here because if `attempt_to_format_complete_phone_number`
            // was placed before this call then the `template`
            // wouldn't reflect the situation correctly (and would therefore be inconsistent)
            //
            var national_number_formatted_with_previous_format = void 0;

            if (this.chosen_format) {
              national_number_formatted_with_previous_format = this.format_next_national_number_digits(next_digits);
            } // See if the input digits can be formatted properly already. If not,
            // use the results from format_next_national_number_digits(), which does formatting
            // based on the formatting pattern chosen.


            var formatted_number = this.attempt_to_format_complete_phone_number(); // Just because a phone number doesn't have a suitable format
            // that doesn't mean that the phone is invalid
            // because phone number formats only format phone numbers,
            // they don't validate them and some (rare) phone numbers
            // are meant to stay non-formatted.

            if (formatted_number) {
              // if (this.country)
              // {
              // 	this.valid = true
              // }
              return formatted_number;
            } // For some phone number formats national prefix
            // If the previously chosen phone number format
            // didn't match the next (current) digit being input
            // (leading digits pattern didn't match).


            if (this.choose_another_format()) {
              // And a more appropriate phone number format
              // has been chosen for these `leading digits`,
              // then format the national phone number (so far)
              // using the newly selected phone number pattern.
              // Will return `undefined` if it couldn't format
              // the supplied national number
              // using the selected phone number pattern.
              return this.reformat_national_number();
            } // If could format the next (current) digit
            // using the previously chosen phone number format
            // then return the formatted number so far.
            // If no new phone number format could be chosen,
            // and couldn't format the supplied national number
            // using the selected phone number pattern,
            // then it will return `undefined`.


            return national_number_formatted_with_previous_format;
          }
        }, {
          key: 'reset',
          value: function reset() {
            // Input stripped of non-phone-number characters.
            // Can only contain a possible leading '+' sign and digits.
            this.parsed_input = '';
            this.current_output = ''; // This contains the national prefix that has been extracted. It contains only
            // digits without formatting.

            this.national_prefix = '';
            this.national_number = '';
            this.reset_countriness();
            this.reset_format(); // this.valid = false

            return this;
          }
        }, {
          key: 'reset_country',
          value: function reset_country() {
            if (this.default_country && !this.is_international()) {
              this.country = this.default_country;
            } else {
              this.country = undefined;
            }
          }
        }, {
          key: 'reset_countriness',
          value: function reset_countriness() {
            this.reset_country();

            if (this.default_country && !this.is_international()) {
              this.country_metadata = this.metadata.countries[this.default_country];
              this.country_phone_code = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_phone_code"])(this.country_metadata);
              this.initialize_phone_number_formats_for_this_country_phone_code();
            } else {
              this.country_metadata = undefined;
              this.country_phone_code = undefined;
              this.available_formats = [];
              this.matching_formats = this.available_formats;
            }
          }
        }, {
          key: 'reset_format',
          value: function reset_format() {
            this.chosen_format = undefined;
            this.template = undefined;
            this.partially_populated_template = undefined;
            this.last_match_position = -1;
          } // Format each digit of national phone number (so far)
          // using the newly selected phone number pattern.

        }, {
          key: 'reformat_national_number',
          value: function reformat_national_number() {
            // Format each digit of national phone number (so far)
            // using the selected phone number pattern.
            return this.format_next_national_number_digits(this.national_number);
          }
        }, {
          key: 'initialize_phone_number_formats_for_this_country_phone_code',
          value: function initialize_phone_number_formats_for_this_country_phone_code() {
            // Get all "eligible" phone number formats for this country
            this.available_formats = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_formats"])(this.country_metadata).filter(function (format) {
              return ELIGIBLE_FORMAT_PATTERN.test(Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_international_format"])(format));
            });
            this.matching_formats = this.available_formats;
          }
        }, {
          key: 'match_formats_by_leading_digits',
          value: function match_formats_by_leading_digits() {
            var leading_digits = this.national_number; // "leading digits" pattern list starts with
            // one of a maximum length of 3 digits,
            // and then with each additional digit
            // a more precise "leading digits" pattern is specified.

            var index_of_leading_digits_pattern = leading_digits.length - MIN_LEADING_DIGITS_LENGTH;

            if (index_of_leading_digits_pattern < 0) {
              index_of_leading_digits_pattern = 0;
            }

            this.matching_formats = this.matching_formats.filter(function (format) {
              var leading_digits_pattern_count = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_leading_digits_patterns"])(format).length; // Keep everything that isn't restricted by leading digits.

              if (leading_digits_pattern_count === 0) {
                return true;
              }

              var leading_digits_pattern_index = Math.min(index_of_leading_digits_pattern, leading_digits_pattern_count - 1);
              var leading_digits_pattern = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_leading_digits_patterns"])(format)[leading_digits_pattern_index]; // Brackets are required for `^` to be applied to
              // all or-ed (`|`) parts, not just the first one.

              return new RegExp('^(' + leading_digits_pattern + ')').test(leading_digits);
            }); // If there was a phone number format chosen
            // and it no longer holds given the new leading digits then reset it.
            // The test for this `if` condition is marked as:
            // "Reset a chosen format when it no longer holds given the new leading digits".

            if (this.chosen_format && this.matching_formats.indexOf(this.chosen_format) === -1) {
              this.reset_format();
            }
          }
        }, {
          key: 'should_format',
          value: function should_format() {
            // Start matching any formats at all when the national number
            // entered so far is at least 3 digits long,
            // otherwise format matching would give false negatives
            // like when the digits entered so far are `2`
            // and the leading digits pattern is `21` ???
            // it's quite obvious in this case that the format could be the one
            // but due to the absence of further digits it would give false negative.
            //
            // Google could have provided leading digits patterns starting
            // with a single digit but they chose not to (for whatever reasons).
            //
            return this.national_number >= MIN_LEADING_DIGITS_LENGTH;
          } // Check to see if there is an exact pattern match for these digits. If so, we
          // should use this instead of any other formatting template whose
          // leadingDigitsPattern also matches the input.

        }, {
          key: 'attempt_to_format_complete_phone_number',
          value: function attempt_to_format_complete_phone_number() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(this.matching_formats), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var format = _step.value;
                var matcher = new RegExp('^(?:' + Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_pattern"])(format) + ')$');

                if (!matcher.test(this.national_number)) {
                  continue;
                }

                if (!this.validate_format(format)) {
                  continue;
                } // To leave the formatter in a consistent state


                this.reset_format();
                this.chosen_format = format;
                var formatted_number = Object(_format__WEBPACK_IMPORTED_MODULE_5__["format_national_number_using_format"])(this.national_number, format, this.is_international(), this.national_prefix.length > 0, this.country_metadata); // Set `this.template` and `this.partially_populated_template`.
                //
                // `else` case doesn't ever happen
                // with the current metadata,
                // but just in case.
                //

                /* istanbul ignore else */

                if (this.create_formatting_template(format)) {
                  // Populate `this.partially_populated_template`
                  this.reformat_national_number();
                } else {
                  // Prepend `+CountryCode` in case of an international phone number
                  var full_number = this.full_phone_number(formatted_number);
                  this.template = full_number.replace(/[\d\+]/g, DIGIT_PLACEHOLDER);
                  this.partially_populated_template = full_number;
                }

                return formatted_number;
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"]) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          } // Prepends `+CountryCode` in case of an international phone number

        }, {
          key: 'full_phone_number',
          value: function full_phone_number(formatted_national_number) {
            if (this.is_international()) {
              return '+' + this.country_phone_code + ' ' + formatted_national_number;
            }

            return formatted_national_number;
          } // Extracts the country calling code from the beginning
          // of the entered `national_number` (so far),
          // and places the remaining input into the `national_number`.

        }, {
          key: 'extract_country_phone_code',
          value: function extract_country_phone_code() {
            if (!this.national_number) {
              return;
            }

            var _parse_phone_number_a = Object(_parse__WEBPACK_IMPORTED_MODULE_4__["parse_phone_number_and_country_phone_code"])(this.parsed_input, this.metadata),
                country_phone_code = _parse_phone_number_a.country_phone_code,
                number = _parse_phone_number_a.number;

            if (!country_phone_code) {
              return;
            }

            this.country_phone_code = country_phone_code;
            this.national_number = number;
            return this.country_metadata = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_metadata_by_country_phone_code"])(country_phone_code, this.metadata);
          }
        }, {
          key: 'extract_national_prefix',
          value: function extract_national_prefix() {
            this.national_prefix = '';

            if (!this.country_metadata) {
              return;
            }

            var national_number = Object(_parse__WEBPACK_IMPORTED_MODULE_4__["strip_national_prefix"])(this.national_number, this.country_metadata);

            if (national_number !== this.national_number) {
              this.national_prefix = this.national_number.slice(0, this.national_number.length - national_number.length);
              this.national_number = national_number;
            }

            return this.national_prefix;
          }
        }, {
          key: 'choose_another_format',
          value: function choose_another_format() {
            // When there are multiple available formats, the formatter uses the first
            // format where a formatting template could be created.
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(this.matching_formats), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var format = _step2.value; // If this format is currently being used
                // and is still possible, then stick to it.

                if (this.chosen_format === format) {
                  return;
                } // If this `format` is suitable for "as you type",
                // then extract the template from this format
                // and use it to format the phone number being input.


                if (!this.validate_format(format)) {
                  continue;
                }

                if (!this.create_formatting_template(format)) {
                  continue;
                }

                this.chosen_format = format; // With a new formatting template, the matched position
                // using the old template needs to be reset.

                this.last_match_position = -1;
                return true;
              } // No format matches the phone number,
              // therefore set `country` to `undefined`
              // (or to the default country).

            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                  _iterator2["return"]();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            this.reset_country(); // No format matches the national phone number entered

            this.reset_format();
          }
        }, {
          key: 'validate_format',
          value: function validate_format(format) {
            // If national prefix is mandatory for this phone number format
            // and the user didn't input the national prefix,
            // then this phone number format isn't suitable.
            if (!this.is_international() && !this.national_prefix && Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_national_prefix_is_mandatory_when_formatting"])(format, this.country_metadata)) {
              return;
            }

            return true;
          }
        }, {
          key: 'create_formatting_template',
          value: function create_formatting_template(format) {
            // The formatter doesn't format numbers when numberPattern contains '|', e.g.
            // (20|3)\d{4}. In those cases we quickly return.
            // (Though there's no such format in current metadata)

            /* istanbul ignore if */
            if (Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_pattern"])(format).indexOf('|') >= 0) {
              return;
            } // Get formatting template for this phone number format


            var template = this.get_template_for_phone_number_format_pattern(format); // If the national number entered is too long
            // for any phone number format, then abort.

            if (!template) {
              return;
            } // This one is for national number only


            this.partially_populated_template = template; // For convenience, the public `.template` property
            // contains the whole international number
            // if the phone number being input is international:
            // 'x' for the '+' sign, 'x'es for the country phone code,
            // a spacebar and then the template for the formatted national number.

            if (this.is_international()) {
              this.template = DIGIT_PLACEHOLDER + repeat(DIGIT_PLACEHOLDER, this.country_phone_code.length) + ' ' + template;
            } // For local numbers, replace national prefix
            // with a digit placeholder.
            else {
                this.template = template.replace(/\d/g, DIGIT_PLACEHOLDER);
              } // This one is for the full phone number


            return this.template;
          } // Generates formatting template for a phone number format

        }, {
          key: 'get_template_for_phone_number_format_pattern',
          value: function get_template_for_phone_number_format_pattern(format) {
            var national_prefix_formatting_rule = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_national_prefix_formatting_rule"])(format, this.country_metadata); // A very smart trick by the guys at Google

            var number_pattern = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_pattern"])(format) // Replace anything in the form of [..] with \d
            .replace(CHARACTER_CLASS_PATTERN, '\\d') // Replace any standalone digit (not the one in `{}`) with \d
            .replace(STANDALONE_DIGIT_PATTERN, '\\d'); // This match will always succeed,
            // because the "longest dummy phone number"
            // has enough length to accomodate any possible
            // national phone number format pattern.

            var dummy_phone_number_matching_format_pattern = LONGEST_DUMMY_PHONE_NUMBER.match(number_pattern)[0]; // If the national number entered is too long
            // for any phone number format, then abort.

            if (this.national_number.length > dummy_phone_number_matching_format_pattern.length) {
              return;
            } // Prepare the phone number format


            var number_format = this.get_format_format(format, national_prefix_formatting_rule); // Get a formatting template which can be used to efficiently format
            // a partial number where digits are added one by one.
            // Below `strict_pattern` is used for the
            // regular expression (with `^` and `$`).
            // This wasn't originally in Google's `libphonenumber`
            // and I guess they don't really need it
            // because they're not using "templates" to format phone numbers
            // but I added `strict_pattern` after encountering
            // South Korean phone number formatting bug.
            //
            // Non-strict regular expression bug demonstration:
            //
            // this.national_number : `111111111` (9 digits)
            //
            // number_pattern : (\d{2})(\d{3,4})(\d{4})
            // number_format : `$1 $2 $3`
            // dummy_phone_number_matching_format_pattern : `9999999999` (10 digits)
            //
            // '9999999999'.replace(new RegExp(/(\d{2})(\d{3,4})(\d{4})/g), '$1 $2 $3') = "99 9999 9999"
            //
            // template : xx xxxx xxxx
            //
            // But the correct template in this case is `xx xxx xxxx`.
            // The template was generated incorrectly because of the
            // `{3,4}` variability in the `number_pattern`.
            //
            // The fix is, if `this.national_number` has already sufficient length
            // to satisfy the `number_pattern` completely then `this.national_number` is used
            // instead of `dummy_phone_number_matching_format_pattern`.

            var strict_pattern = new RegExp('^' + number_pattern + '$');
            var national_number_dummy_digits = this.national_number.replace(/\d/g, DUMMY_DIGIT); // If `this.national_number` has already sufficient length
            // to satisfy the `number_pattern` completely then use it
            // instead of `dummy_phone_number_matching_format_pattern`.

            if (strict_pattern.test(national_number_dummy_digits)) {
              dummy_phone_number_matching_format_pattern = national_number_dummy_digits;
            } // Generate formatting template for this phone number format


            return dummy_phone_number_matching_format_pattern // Format the dummy phone number according to the format
            .replace(new RegExp(number_pattern), number_format) // Replace each dummy digit with a DIGIT_PLACEHOLDER
            .replace(DUMMY_DIGIT_MATCHER, DIGIT_PLACEHOLDER);
          }
        }, {
          key: 'format_next_national_number_digits',
          value: function format_next_national_number_digits(digits) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(digits), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var digit = _step3.value; // If there is room for more digits in current `template`,
                // then set the next digit in the `template`,
                // and return the formatted digits so far.
                // If more digits are entered than the current format could handle

                if (this.partially_populated_template.slice(this.last_match_position + 1).search(DIGIT_PLACEHOLDER_MATCHER) === -1) {
                  // Reset the current format,
                  // so that the new format will be chosen
                  // in a subsequent `this.choose_another_format()` call
                  // later in code.
                  this.chosen_format = undefined;
                  this.template = undefined;
                  this.partially_populated_template = undefined;
                  return;
                }

                this.last_match_position = this.partially_populated_template.search(DIGIT_PLACEHOLDER_MATCHER);
                this.partially_populated_template = this.partially_populated_template.replace(DIGIT_PLACEHOLDER_MATCHER, digit);
              } // Return the formatted phone number so far

            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
                  _iterator3["return"]();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            return close_dangling_braces(this.partially_populated_template, this.last_match_position + 1).replace(DIGIT_PLACEHOLDER_MATCHER_GLOBAL, ' ');
          }
        }, {
          key: 'is_international',
          value: function is_international() {
            return this.parsed_input && this.parsed_input[0] === '+';
          }
        }, {
          key: 'get_format_format',
          value: function get_format_format(format, national_prefix_formatting_rule) {
            var number_format = this.is_international() ? Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_international_format"])(format) : Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_format"])(format); // If national prefix formatting rule is set
            // for this phone number format

            if (national_prefix_formatting_rule) {
              // If the user did input the national prefix
              // (or if the national prefix formatting rule does not require national prefix)
              // then maybe make it part of the phone number template
              if (this.national_prefix || !Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_uses_national_prefix"])(national_prefix_formatting_rule)) {
                // Make the national prefix part of the phone number template
                number_format = number_format.replace(_format__WEBPACK_IMPORTED_MODULE_5__["FIRST_GROUP_PATTERN"], national_prefix_formatting_rule);
              }
            }

            if (this.is_international()) {
              return Object(_format__WEBPACK_IMPORTED_MODULE_5__["local_to_international_style"])(number_format);
            }

            return number_format;
          } // Determines the country of the phone number
          // entered so far based on the country phone code
          // and the national phone number.

        }, {
          key: 'determine_the_country',
          value: function determine_the_country() {
            this.country = Object(_parse__WEBPACK_IMPORTED_MODULE_4__["find_country_code"])(this.country_phone_code, this.national_number, this.metadata);
          }
        }]);
        return as_you_type;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = as_you_type;

      function close_dangling_braces(template, cut_before) {
        var retained_template = template.slice(0, cut_before);
        var opening_braces = count_occurences('(', retained_template);
        var closing_braces = count_occurences(')', retained_template);
        var dangling_braces = opening_braces - closing_braces;

        while (dangling_braces > 0 && cut_before < template.length) {
          if (template[cut_before] === ')') {
            dangling_braces--;
          }

          cut_before++;
        }

        return template.slice(0, cut_before);
      } // Counts all occurences of a symbol in a string


      function count_occurences(symbol, string) {
        var count = 0;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(string), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var character = _step4.value;

            if (character === symbol) {
              count++;
            }
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
              _iterator4["return"]();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        return count;
      } // Repeats a string (or a symbol) N times.
      // http://stackoverflow.com/questions/202605/repeat-string-javascript


      function repeat(string, times) {
        if (times < 1) {
          return '';
        }

        var result = '';

        while (times > 1) {
          if (times & 1) {
            result += string;
          }

          times >>= 1;
          string += string;
        }

        return result + string;
      } //# sourceMappingURL=AsYouType.js.map

      /***/

    },

    /***/
    "5T2Y":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/library/modules/_global.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function T2Y(module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
      : Function('return this')();
      if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

      /***/
    },

    /***/
    "5YfH":
    /*!************************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/less-than-equal/directive.js ***!
      \************************************************************************************/

    /*! no static exports found */

    /***/
    function YfH(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "KEkc");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LESS_THAN_EQUAL_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return LessThanEqualValidator;
        }),
        multi: true
      };

      var LessThanEqualValidator = function () {
        function LessThanEqualValidator() {}

        LessThanEqualValidator.prototype.ngOnInit = function () {
          this.validator = _1.lte(this.lte);
        };

        LessThanEqualValidator.prototype.ngOnChanges = function (changes) {
          for (var key in changes) {
            if (key === 'lte') {
              this.validator = _1.lte(changes[key].currentValue);
              if (this.onChange) this.onChange();
            }
          }
        };

        LessThanEqualValidator.prototype.validate = function (c) {
          return this.validator(c);
        };

        LessThanEqualValidator.prototype.registerOnValidatorChange = function (fn) {
          this.onChange = fn;
        };

        LessThanEqualValidator.??fac = function LessThanEqualValidator_Factory(t) {
          return new (t || LessThanEqualValidator)();
        };

        LessThanEqualValidator.??dir = ??ngcc0.????defineDirective({
          type: LessThanEqualValidator,
          selectors: [["", "lte", "", "formControlName", ""], ["", "lte", "", "formControl", ""], ["", "lte", "", "ngModel", ""]],
          inputs: {
            lte: "lte"
          },
          features: [??ngcc0.????ProvidersFeature([LESS_THAN_EQUAL_VALIDATOR]), ??ngcc0.????NgOnChangesFeature]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(LessThanEqualValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[lte][formControlName],[lte][formControl],[lte][ngModel]',
              providers: [LESS_THAN_EQUAL_VALIDATOR]
            }]
          }], function () {
            return [];
          }, {
            lte: [{
              type: core_1.Input
            }]
          });
        })();

        return LessThanEqualValidator;
      }();
      /** @nocollapse */


      LessThanEqualValidator.ctorParameters = function () {
        return [];
      };

      LessThanEqualValidator.propDecorators = {
        'lte': [{
          type: core_1.Input
        }]
      };
      exports.LessThanEqualValidator = LessThanEqualValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "5vMV":
    /*!***********************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
      \***********************************************************************/

    /*! no static exports found */

    /***/
    function vMV(module, exports, __webpack_require__) {
      var has = __webpack_require__(
      /*! ./_has */
      "B+OT");

      var toIObject = __webpack_require__(
      /*! ./_to-iobject */
      "NsO/");

      var arrayIndexOf = __webpack_require__(
      /*! ./_array-includes */
      "W070")(false);

      var IE_PROTO = __webpack_require__(
      /*! ./_shared-key */
      "VVlx")('IE_PROTO');

      module.exports = function (object, names) {
        var O = toIObject(object);
        var i = 0;
        var result = [];
        var key;

        for (key in O) {
          if (key != IE_PROTO) has(O, key) && result.push(key);
        } // Don't enum bug & hidden keys


        while (names.length > i) {
          if (has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key);
          }
        }

        return result;
      };
      /***/

    },

    /***/
    "7jy7":
    /*!*************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/min-date/index.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function jy7(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "vBRJ"));

      __export(__webpack_require__(
      /*! ./validator */
      "Z8xB")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "7vZQ":
    /*!************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/url/directive.js ***!
      \************************************************************************/

    /*! no static exports found */

    /***/
    function vZQ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "i1wc");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var URL_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return UrlValidator;
        }),
        multi: true
      };

      var UrlValidator = function () {
        function UrlValidator() {}

        UrlValidator.prototype.validate = function (c) {
          return _1.url(c);
        };

        UrlValidator.??fac = function UrlValidator_Factory(t) {
          return new (t || UrlValidator)();
        };

        UrlValidator.??dir = ??ngcc0.????defineDirective({
          type: UrlValidator,
          selectors: [["", "url", "", "formControlName", ""], ["", "url", "", "formControl", ""], ["", "url", "", "ngModel", ""]],
          features: [??ngcc0.????ProvidersFeature([URL_VALIDATOR])]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(UrlValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[url][formControlName],[url][formControl],[url][ngModel]',
              providers: [URL_VALIDATOR]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return UrlValidator;
      }();
      /** @nocollapse */


      UrlValidator.ctorParameters = function () {
        return [];
      };

      exports.UrlValidator = UrlValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "8Mo4":
    /*!*********************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/not-equal-to/directive.js ***!
      \*********************************************************************************/

    /*! no static exports found */

    /***/
    function Mo4(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "bxr6");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NOT_EQUAL_TO_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return NotEqualToValidator;
        }),
        multi: true
      };

      var NotEqualToValidator = function () {
        function NotEqualToValidator() {}

        NotEqualToValidator.prototype.ngOnInit = function () {
          this.validator = _1.notEqualTo(this.notEqualTo);
        };

        NotEqualToValidator.prototype.validate = function (c) {
          return this.validator(c);
        };

        NotEqualToValidator.??fac = function NotEqualToValidator_Factory(t) {
          return new (t || NotEqualToValidator)();
        };

        NotEqualToValidator.??dir = ??ngcc0.????defineDirective({
          type: NotEqualToValidator,
          selectors: [["", "notEqualTo", "", "formControlName", ""], ["", "notEqualTo", "", "formControl", ""], ["", "notEqualTo", "", "ngModel", ""]],
          inputs: {
            notEqualTo: "notEqualTo"
          },
          features: [??ngcc0.????ProvidersFeature([NOT_EQUAL_TO_VALIDATOR])]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(NotEqualToValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
              providers: [NOT_EQUAL_TO_VALIDATOR]
            }]
          }], function () {
            return [];
          }, {
            notEqualTo: [{
              type: core_1.Input
            }]
          });
        })();

        return NotEqualToValidator;
      }();
      /** @nocollapse */


      NotEqualToValidator.ctorParameters = function () {
        return [];
      };

      NotEqualToValidator.propDecorators = {
        'notEqualTo': [{
          type: core_1.Input
        }]
      };
      exports.NotEqualToValidator = NotEqualToValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "8OjS":
    /*!************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/min/directive.js ***!
      \************************************************************************/

    /*! no static exports found */

    /***/
    function OjS(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "NVqk");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MIN_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return MinValidator;
        }),
        multi: true
      };

      var MinValidator = function () {
        function MinValidator() {}

        MinValidator.prototype.ngOnInit = function () {
          this.validator = _1.min(this.min);
        };

        MinValidator.prototype.ngOnChanges = function (changes) {
          for (var key in changes) {
            if (key === 'min') {
              this.validator = _1.min(changes[key].currentValue);
              if (this.onChange) this.onChange();
            }
          }
        };

        MinValidator.prototype.validate = function (c) {
          return this.validator(c);
        };

        MinValidator.prototype.registerOnValidatorChange = function (fn) {
          this.onChange = fn;
        };

        MinValidator.??fac = function MinValidator_Factory(t) {
          return new (t || MinValidator)();
        };

        MinValidator.??dir = ??ngcc0.????defineDirective({
          type: MinValidator,
          selectors: [["", "min", "", "formControlName", ""], ["", "min", "", "formControl", ""], ["", "min", "", "ngModel", ""]],
          inputs: {
            min: "min"
          },
          features: [??ngcc0.????ProvidersFeature([MIN_VALIDATOR]), ??ngcc0.????NgOnChangesFeature]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(MinValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[min][formControlName],[min][formControl],[min][ngModel]',
              providers: [MIN_VALIDATOR]
            }]
          }], function () {
            return [];
          }, {
            min: [{
              type: core_1.Input
            }]
          });
        })();

        return MinValidator;
      }();
      /** @nocollapse */


      MinValidator.ctorParameters = function () {
        return [];
      };

      MinValidator.propDecorators = {
        'min': [{
          type: core_1.Input
        }]
      };
      exports.MinValidator = MinValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "909t":
    /*!*************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/date/directive.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function t(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "gXvo");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DATE_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return DateValidator;
        }),
        multi: true
      };

      var DateValidator = function () {
        function DateValidator() {}

        DateValidator.prototype.validate = function (c) {
          return _1.date(c);
        };

        DateValidator.??fac = function DateValidator_Factory(t) {
          return new (t || DateValidator)();
        };

        DateValidator.??dir = ??ngcc0.????defineDirective({
          type: DateValidator,
          selectors: [["", "date", "", "formControlName", ""], ["", "date", "", "formControl", ""], ["", "date", "", "ngModel", ""]],
          features: [??ngcc0.????ProvidersFeature([DATE_VALIDATOR])]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(DateValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[date][formControlName],[date][formControl],[date][ngModel]',
              providers: [DATE_VALIDATOR]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return DateValidator;
      }();
      /** @nocollapse */


      DateValidator.ctorParameters = function () {
        return [];
      };

      exports.DateValidator = DateValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "93I4":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_is-object.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function I4(module, exports) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };
      /***/

    },

    /***/
    "9K0O":
    /*!**************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/less-than/index.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function K0O(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "QKLY"));

      __export(__webpack_require__(
      /*! ./validator */
      "dC0+")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "9pOy":
    /*!*********************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/greater-than/validator.js ***!
      \*********************************************************************************/

    /*! no static exports found */

    /***/
    function pOy(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.gt = function (gt) {
        return function (control) {
          if (!lang_1.isPresent(gt)) return null;
          if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
          var v = +control.value;
          return v > +gt ? null : {
            gt: true
          };
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "A9Kl":
    /*!*************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/json/validator.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function A9Kl(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.json = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = control.value;

        try {
          var obj = JSON.parse(v);

          if (Boolean(obj) && typeof obj === 'object') {
            return null;
          }
        } catch (e) {}

        return {
          json: true
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "Aw+F":
    /*!***************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/number/directive.js ***!
      \***************************************************************************/

    /*! no static exports found */

    /***/
    function AwF(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "p4t6");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NUMBER_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return NumberValidator;
        }),
        multi: true
      };

      var NumberValidator = function () {
        function NumberValidator() {}

        NumberValidator.prototype.validate = function (c) {
          return _1.number(c);
        };

        NumberValidator.??fac = function NumberValidator_Factory(t) {
          return new (t || NumberValidator)();
        };

        NumberValidator.??dir = ??ngcc0.????defineDirective({
          type: NumberValidator,
          selectors: [["", "number", "", "formControlName", ""], ["", "number", "", "formControl", ""], ["", "number", "", "ngModel", ""]],
          features: [??ngcc0.????ProvidersFeature([NUMBER_VALIDATOR])]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(NumberValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[number][formControlName],[number][formControl],[number][ngModel]',
              providers: [NUMBER_VALIDATOR]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return NumberValidator;
      }();
      /** @nocollapse */


      NumberValidator.ctorParameters = function () {
        return [];
      };

      exports.NumberValidator = NumberValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "B+OT":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/library/modules/_has.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function BOT(module, exports) {
      var hasOwnProperty = {}.hasOwnProperty;

      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key);
      };
      /***/

    },

    /***/
    "B/P3":
    /*!********************************************************!*\
      !*** ./node_modules/libphonenumber-js/es6/metadata.js ***!
      \********************************************************/

    /*! exports provided: get_phone_code, get_national_number_pattern, get_formats, get_national_prefix, get_national_prefix_formatting_rule, get_national_prefix_for_parsing, get_national_prefix_transform_rule, get_national_prefix_is_optional_when_formatting, get_leading_digits, get_format_pattern, get_format_format, get_format_leading_digits_patterns, get_format_national_prefix_formatting_rule, get_format_national_prefix_is_optional_when_formatting, get_format_national_prefix_is_mandatory_when_formatting, get_format_uses_national_prefix, get_format_international_format, get_metadata_by_country_phone_code, get_types, get_type_fixed_line, get_type_mobile, get_type_toll_free, get_type_premium_rate, get_type_personal_number, get_type_voice_mail, get_type_uan, get_type_pager, get_type_voip, get_type_shared_cost, get_country_phone_code */

    /***/
    function BP3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_phone_code", function () {
        return get_phone_code;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_national_number_pattern", function () {
        return get_national_number_pattern;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_formats", function () {
        return get_formats;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_national_prefix", function () {
        return get_national_prefix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_national_prefix_formatting_rule", function () {
        return get_national_prefix_formatting_rule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_national_prefix_for_parsing", function () {
        return get_national_prefix_for_parsing;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_national_prefix_transform_rule", function () {
        return get_national_prefix_transform_rule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_national_prefix_is_optional_when_formatting", function () {
        return get_national_prefix_is_optional_when_formatting;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_leading_digits", function () {
        return get_leading_digits;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_format_pattern", function () {
        return get_format_pattern;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_format_format", function () {
        return get_format_format;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_format_leading_digits_patterns", function () {
        return get_format_leading_digits_patterns;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_format_national_prefix_formatting_rule", function () {
        return get_format_national_prefix_formatting_rule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_format_national_prefix_is_optional_when_formatting", function () {
        return get_format_national_prefix_is_optional_when_formatting;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_format_national_prefix_is_mandatory_when_formatting", function () {
        return get_format_national_prefix_is_mandatory_when_formatting;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_format_uses_national_prefix", function () {
        return get_format_uses_national_prefix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_format_international_format", function () {
        return get_format_international_format;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_metadata_by_country_phone_code", function () {
        return get_metadata_by_country_phone_code;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_types", function () {
        return get_types;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_type_fixed_line", function () {
        return get_type_fixed_line;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_type_mobile", function () {
        return get_type_mobile;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_type_toll_free", function () {
        return get_type_toll_free;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_type_premium_rate", function () {
        return get_type_premium_rate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_type_personal_number", function () {
        return get_type_personal_number;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_type_voice_mail", function () {
        return get_type_voice_mail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_type_uan", function () {
        return get_type_uan;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_type_pager", function () {
        return get_type_pager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_type_voip", function () {
        return get_type_voip;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_type_shared_cost", function () {
        return get_type_shared_cost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_country_phone_code", function () {
        return get_country_phone_code;
      });

      function get_phone_code(country_metadata) {
        return country_metadata[0];
      }

      function get_national_number_pattern(country_metadata) {
        return country_metadata[1];
      }

      function get_formats(country_metadata) {
        return country_metadata[2] || [];
      }

      function get_national_prefix(country_metadata) {
        return country_metadata[3];
      }

      function get_national_prefix_formatting_rule(country_metadata) {
        return country_metadata[4];
      }

      function get_national_prefix_for_parsing(country_metadata) {
        var national_prefix_for_parsing = country_metadata[5]; // If `national_prefix_for_parsing` is not set explicitly,
        // then infer it from `national_prefix` (if any)

        if (!national_prefix_for_parsing) {
          national_prefix_for_parsing = get_national_prefix(country_metadata);
        }

        return national_prefix_for_parsing;
      }

      function get_national_prefix_transform_rule(country_metadata) {
        return country_metadata[6];
      }

      function get_national_prefix_is_optional_when_formatting(country_metadata) {
        return country_metadata[7];
      }

      function get_leading_digits(country_metadata) {
        return country_metadata[8];
      }

      function get_format_pattern(format_array) {
        return format_array[0];
      }

      function get_format_format(format_array) {
        return format_array[1];
      }

      function get_format_leading_digits_patterns(format_array) {
        return format_array[2] || [];
      }

      function get_format_national_prefix_formatting_rule(format_array, country_metadata) {
        return format_array[3] || get_national_prefix_formatting_rule(country_metadata);
      }

      function get_format_national_prefix_is_optional_when_formatting(format_array, country_metadata) {
        return format_array[4] || get_national_prefix_is_optional_when_formatting(country_metadata);
      }

      function get_format_national_prefix_is_mandatory_when_formatting(format_array, country_metadata) {
        var national_prefix_formatting_rule = get_format_national_prefix_formatting_rule(format_array, country_metadata); // National prefix is omitted if there's no national prefix formatting rule
        // set for this country, or when the national prefix formatting rule
        // contains no national prefix itself, or when this rule is set but
        // national prefix is optional for this phone number format
        // (and it is not enforced explicitly)

        return national_prefix_formatting_rule && // Check that national prefix formatting rule is not a dummy one.
        // Check that national prefix formatting rule actually has national prefix digit(s).
        get_format_uses_national_prefix(national_prefix_formatting_rule) && // Or maybe national prefix is optional for this format
        !get_format_national_prefix_is_optional_when_formatting(format_array, country_metadata);
      } // Checks whether national prefix formatting rule contains national prefix


      function get_format_uses_national_prefix(national_prefix_formatting_rule) {
        // Check that national prefix formatting rule is not a dummy one
        return national_prefix_formatting_rule !== '$1' && // Check that national prefix formatting rule actually has national prefix digit(s)
        /\d/.test(national_prefix_formatting_rule.replace('$1', ''));
      }

      function get_format_international_format(format_array) {
        return format_array[5] || get_format_format(format_array);
      } // Formatting information for regions which share
      // a country calling code is contained by only one region
      // for performance reasons. For example, for NANPA region
      // ("North American Numbering Plan Administration",
      //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
      // it will be contained in the metadata for `US`.


      function get_metadata_by_country_phone_code(country_phone_code, metadata) {
        var country_code = metadata.country_phone_code_to_countries[country_phone_code][0];
        return metadata.countries[country_code];
      }

      function get_types(country_metadata) {
        return country_metadata[9];
      }

      function get_type(country_metadata, index) {
        return get_types(country_metadata) ? get_types(country_metadata)[index] : undefined;
      }

      function get_type_fixed_line(country_metadata) {
        return get_type(country_metadata, 0);
      }

      function get_type_mobile(country_metadata) {
        return get_type(country_metadata, 1);
      }

      function get_type_toll_free(country_metadata) {
        return get_type(country_metadata, 2);
      }

      function get_type_premium_rate(country_metadata) {
        return get_type(country_metadata, 3);
      }

      function get_type_personal_number(country_metadata) {
        return get_type(country_metadata, 4);
      }

      function get_type_voice_mail(country_metadata) {
        return get_type(country_metadata, 5);
      }

      function get_type_uan(country_metadata) {
        return get_type(country_metadata, 6);
      }

      function get_type_pager(country_metadata) {
        return get_type(country_metadata, 7);
      }

      function get_type_voip(country_metadata) {
        return get_type(country_metadata, 8);
      }

      function get_type_shared_cost(country_metadata) {
        return get_type(country_metadata, 9);
      }

      function get_country_phone_code(country, country_metadata) {
        return get_phone_code(country_metadata[country]);
      } //# sourceMappingURL=metadata.js.map

      /***/

    },

    /***/
    "BJLe":
    /*!*****************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/max-date/validator.js ***!
      \*****************************************************************************/

    /*! no static exports found */

    /***/
    function BJLe(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.maxDate = function (maxDate) {
        if (!lang_1.isDate(maxDate) && !(maxDate instanceof Function)) {
          throw Error('maxDate value must be or return a formatted date');
        }

        return function (control) {
          if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
          var d = new Date(control.value);
          if (!lang_1.isDate(d)) return {
            maxDate: true
          };
          if (maxDate instanceof Function) maxDate = maxDate();
          return d <= new Date(maxDate) ? null : {
            maxDate: true
          };
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "CYDh":
    /*!*****************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/equal-to/validator.js ***!
      \*****************************************************************************/

    /*! no static exports found */

    /***/
    function CYDh(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.equalTo = function (equalControl) {
        var subscribe = false;
        return function (control) {
          if (!subscribe) {
            subscribe = true;
            equalControl.valueChanges.subscribe(function () {
              control.updateValueAndValidity();
            });
          }

          var v = control.value;
          return equalControl.value === v ? null : {
            equalTo: true
          };
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "CzqP":
    /*!************************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/less-than-equal/validator.js ***!
      \************************************************************************************/

    /*! no static exports found */

    /***/
    function CzqP(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.lte = function (lte) {
        return function (control) {
          if (!lang_1.isPresent(lte)) return null;
          if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
          var v = +control.value;
          return v <= +lte ? null : {
            lte: true
          };
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "D8kY":
    /*!********************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function D8kY(module, exports, __webpack_require__) {
      var toInteger = __webpack_require__(
      /*! ./_to-integer */
      "Ojgd");

      var max = Math.max;
      var min = Math.min;

      module.exports = function (index, length) {
        index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };
      /***/

    },

    /***/
    "DbOz":
    /*!************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/max/validator.js ***!
      \************************************************************************/

    /*! no static exports found */

    /***/
    function DbOz(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.max = function (max) {
        return function (control) {
          if (!lang_1.isPresent(max)) return null;
          if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
          var v = +control.value;
          return v <= +max ? null : {
            actualValue: v,
            requiredValue: +max,
            max: true
          };
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "Dr03":
    /*!*********************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/greater-than/directive.js ***!
      \*********************************************************************************/

    /*! no static exports found */

    /***/
    function Dr03(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "u93k");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GREATER_THAN_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return GreaterThanValidator;
        }),
        multi: true
      };

      var GreaterThanValidator = function () {
        function GreaterThanValidator() {}

        GreaterThanValidator.prototype.ngOnInit = function () {
          this.validator = _1.gt(this.gt);
        };

        GreaterThanValidator.prototype.ngOnChanges = function (changes) {
          for (var key in changes) {
            if (key === 'gt') {
              this.validator = _1.gt(changes[key].currentValue);
              if (this.onChange) this.onChange();
            }
          }
        };

        GreaterThanValidator.prototype.validate = function (c) {
          return this.validator(c);
        };

        GreaterThanValidator.prototype.registerOnValidatorChange = function (fn) {
          this.onChange = fn;
        };

        GreaterThanValidator.??fac = function GreaterThanValidator_Factory(t) {
          return new (t || GreaterThanValidator)();
        };

        GreaterThanValidator.??dir = ??ngcc0.????defineDirective({
          type: GreaterThanValidator,
          selectors: [["", "gt", "", "formControlName", ""], ["", "gt", "", "formControl", ""], ["", "gt", "", "ngModel", ""]],
          inputs: {
            gt: "gt"
          },
          features: [??ngcc0.????ProvidersFeature([GREATER_THAN_VALIDATOR]), ??ngcc0.????NgOnChangesFeature]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(GreaterThanValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
              providers: [GREATER_THAN_VALIDATOR]
            }]
          }], function () {
            return [];
          }, {
            gt: [{
              type: core_1.Input
            }]
          });
        })();

        return GreaterThanValidator;
      }();
      /** @nocollapse */


      GreaterThanValidator.ctorParameters = function () {
        return [];
      };

      GreaterThanValidator.propDecorators = {
        'gt': [{
          type: core_1.Input
        }]
      };
      exports.GreaterThanValidator = GreaterThanValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "F4D2":
    /*!*****************************************************!*\
      !*** ./node_modules/libphonenumber-js/es6/types.js ***!
      \*****************************************************/

    /*! exports provided: default, is_of_type, sort_out_arguments */

    /***/
    function F4D2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return get_number_type;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "is_of_type", function () {
        return is_of_type;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sort_out_arguments", function () {
        return sort_out_arguments;
      });
      /* harmony import */


      var _parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./parse */
      "Fh5j");
      /* harmony import */


      var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./common */
      "s/4N");
      /* harmony import */


      var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./metadata */
      "B/P3"); // Finds out national phone number type (fixed line, mobile, etc)


      function get_number_type(arg_1, arg_2, arg_3) {
        var _sort_out_arguments = sort_out_arguments(arg_1, arg_2, arg_3),
            input = _sort_out_arguments.input,
            metadata = _sort_out_arguments.metadata; // When no input was passed


        if (!input) {
          return;
        } // When `parse()` returned `{}`
        // meaning that the phone number is not a valid one.


        if (!input.country) {
          return;
        }

        var national_number = input.phone;
        var country_metadata = metadata.countries[input.country]; // The following is copy-pasted from the original function:
        // https://github.com/googlei18n/libphonenumber/blob/3ea547d4fbaa2d0b67588904dfa5d3f2557c27ff/javascript/i18n/phonenumbers/phonenumberutil.js#L2835
        // Is this national number even valid for this country

        if (!is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_national_number_pattern"])(country_metadata))) {
          return; // 'UNKNOWN'
        }

        if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_premium_rate"])(country_metadata))) {
          return 'PREMIUM_RATE';
        }

        if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_toll_free"])(country_metadata))) {
          return 'TOLL_FREE';
        }
        /* istanbul ignore if */


        if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_shared_cost"])(country_metadata))) {
          return 'SHARED_COST';
        }
        /* istanbul ignore if */


        if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_voip"])(country_metadata))) {
          return 'VOIP';
        }

        if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_personal_number"])(country_metadata))) {
          return 'PERSONAL_NUMBER';
        }
        /* istanbul ignore if */


        if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_pager"])(country_metadata))) {
          return 'PAGER';
        }
        /* istanbul ignore if */


        if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_uan"])(country_metadata))) {
          return 'UAN';
        }
        /* istanbul ignore if */


        if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_voice_mail"])(country_metadata))) {
          return 'VOICEMAIL';
        } // Is it fixed line number


        if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_fixed_line"])(country_metadata))) {
          // Because duplicate regular expressions are removed
          // to reduce metadata size, if there's no "mobile" pattern
          // then it means it was removed due to being a duplicate of some other pattern.
          //
          if (!Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_mobile"])(country_metadata)) {
            return 'FIXED_LINE_OR_MOBILE';
          } // Check if the number happens to qualify as both fixed line and mobile.
          // (no such country in the minimal metadata set)

          /* istanbul ignore if */


          if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_mobile"])(country_metadata))) {
            return 'FIXED_LINE_OR_MOBILE';
          }

          return 'FIXED_LINE';
        }

        if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_mobile"])(country_metadata))) {
          return 'MOBILE';
        } // return 'UNKNOWN'

      }

      function is_of_type(national_number, type) {
        // // Check if any possible number lengths are present;
        // // if so, we use them to avoid checking
        // // the validation pattern if they don't match.
        // // If they are absent, this means they match
        // // the general description, which we have
        // // already checked before a specific number type.
        // if (get_possible_lengths(type) &&
        // 	get_possible_lengths(type).indexOf(national_number.length) === -1)
        // {
        // 	return false
        // }
        // get_type_pattern(type) === type
        return Object(_common__WEBPACK_IMPORTED_MODULE_1__["matches_entirely"])(national_number, type);
      } // Sort out arguments


      function sort_out_arguments(arg_1, arg_2, arg_3) {
        var input = void 0;
        var metadata = void 0; // Normalize numerical `value`.
        // https://github.com/catamphetamine/libphonenumber-js/issues/142
        // `getNumberType(88005553535, ...)`.

        if (typeof arg_1 === 'number') {
          arg_1 = String(arg_1);
        } // If the phone number is passed as a string.
        // `getNumberType('88005553535', ...)`.


        if (typeof arg_1 === 'string') {
          // If "resrict country" argument is being passed
          // then convert it to an `options` object.
          // `getNumberType('88005553535', 'RU', metadata)`.
          if (typeof arg_2 === 'string' || arg_2 === undefined) {
            metadata = arg_3; // `parse` extracts phone numbers from raw text,
            // therefore it will cut off all "garbage" characters,
            // while this `validate` function needs to verify
            // that the phone number contains no "garbage"
            // therefore the explicit `is_viable_phone_number` check.

            if (Object(_parse__WEBPACK_IMPORTED_MODULE_0__["is_viable_phone_number"])(arg_1)) {
              input = Object(_parse__WEBPACK_IMPORTED_MODULE_0__["default"])(arg_1, arg_2, metadata);
            }
          } // No "resrict country" argument is being passed.
          // International phone number is passed.
          // `getNumberType('+78005553535', metadata)`.
          else {
              metadata = arg_2; // `parse` extracts phone numbers from raw text,
              // therefore it will cut off all "garbage" characters,
              // while this `validate` function needs to verify
              // that the phone number contains no "garbage"
              // therefore the explicit `is_viable_phone_number` check.

              if (Object(_parse__WEBPACK_IMPORTED_MODULE_0__["is_viable_phone_number"])(arg_1)) {
                input = Object(_parse__WEBPACK_IMPORTED_MODULE_0__["default"])(arg_1, metadata);
              }
            }
        } // If the phone number is passed as a parsed phone number.
        // `getNumberType({ phone: '88005553535', country: 'RU' }, ...)`.
        else {
            // The `arg_1` must be a valid phone number
            // as a whole, not just a part of it which gets parsed here.
            if (arg_1 && arg_1.phone && Object(_parse__WEBPACK_IMPORTED_MODULE_0__["is_viable_phone_number"])(arg_1.phone)) {
              input = arg_1;
            }

            metadata = arg_2;
          } // Metadata is required.


        if (!metadata || !metadata.countries) {
          throw new Error('Metadata is required');
        }

        return {
          input: input,
          metadata: metadata
        };
      } //# sourceMappingURL=types.js.map

      /***/

    },

    /***/
    "Fh5j":
    /*!*****************************************************!*\
      !*** ./node_modules/libphonenumber-js/es6/parse.js ***!
      \*****************************************************/

    /*! exports provided: PLUS_CHARS, VALID_DIGITS, VALID_PUNCTUATION, DIGIT_MAPPINGS, default, normalize, replace_characters, is_viable_phone_number, extract_formatted_phone_number, parse_phone_number, parse_phone_number_and_country_phone_code, strip_national_prefix, find_country_code */

    /***/
    function Fh5j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PLUS_CHARS", function () {
        return PLUS_CHARS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VALID_DIGITS", function () {
        return VALID_DIGITS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VALID_PUNCTUATION", function () {
        return VALID_PUNCTUATION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DIGIT_MAPPINGS", function () {
        return DIGIT_MAPPINGS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return parse;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "normalize", function () {
        return normalize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "replace_characters", function () {
        return replace_characters;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "is_viable_phone_number", function () {
        return is_viable_phone_number;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extract_formatted_phone_number", function () {
        return extract_formatted_phone_number;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parse_phone_number", function () {
        return parse_phone_number;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parse_phone_number_and_country_phone_code", function () {
        return parse_phone_number_and_country_phone_code;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "strip_national_prefix", function () {
        return strip_national_prefix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "find_country_code", function () {
        return find_country_code;
      });
      /* harmony import */


      var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! babel-runtime/helpers/extends */
      "QbLZ");
      /* harmony import */


      var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! babel-runtime/helpers/slicedToArray */
      "sk9p");
      /* harmony import */


      var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! babel-runtime/core-js/get-iterator */
      "FyfS");
      /* harmony import */


      var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./common */
      "s/4N");
      /* harmony import */


      var _metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./metadata */
      "B/P3");
      /* harmony import */


      var _format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./format */
      "rg1z");
      /* harmony import */


      var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./types */
      "F4D2"); // This is a port of Google Android `libphonenumber`'s
      // `phonenumberutil.js` of 17th November, 2016.
      //
      // https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js
      // The maximum length of the country calling code.


      var MAX_LENGTH_COUNTRY_CODE = 3; // The minimum length of the national significant number.

      var MIN_LENGTH_FOR_NSN = 2; // The ITU says the maximum length should be 15,
      // but one can find longer numbers in Germany.

      var MAX_LENGTH_FOR_NSN = 17; // We don't allow input strings for parsing to be longer than 250 chars.
      // This prevents malicious input from consuming CPU.

      var MAX_INPUT_STRING_LENGTH = 250;
      var PLUS_CHARS = "+\uFF0B"; // Digits accepted in phone numbers
      // (ascii, fullwidth, arabic-indic, and eastern arabic digits).

      var VALID_DIGITS = "0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9"; // `DASHES` will be right after the opening square bracket of the "character class"

      var DASHES = "-\u2010-\u2015\u2212\u30FC\uFF0D";
      var SLASHES = "\uFF0F/";
      var DOTS = "\uFF0E.";
      var WHITESPACE = " \xA0\xAD\u200B\u2060\u3000";
      var BRACKETS = "()\uFF08\uFF09\uFF3B\uFF3D\\[\\]";
      var TILDES = "~\u2053\u223C\uFF5E"; // Regular expression of acceptable punctuation found in phone numbers. This
      // excludes punctuation found as a leading character only. This consists of dash
      // characters, white space characters, full stops, slashes, square brackets,
      // parentheses and tildes. Full-width variants are also present.

      var VALID_PUNCTUATION = '' + DASHES + SLASHES + DOTS + WHITESPACE + BRACKETS + TILDES; // Pattern to capture digits used in an extension.
      // Places a maximum length of '7' for an extension.

      var CAPTURING_EXTN_DIGITS = '([' + VALID_DIGITS + ']{1,7})'; // The RFC 3966 format for extensions.

      var RFC3966_EXTN_PREFIX = ';ext=';
      /**
       * Regexp of all possible ways to write extensions, for use when parsing. This
       * will be run as a case-insensitive regexp match. Wide character versions are
       * also provided after each ASCII version. There are three regular expressions
       * here. The first covers RFC 3966 format, where the extension is added using
       * ';ext='. The second more generic one starts with optional white space and
       * ends with an optional full stop (.), followed by zero or more spaces/tabs
       * /commas and then the numbers themselves. The other one covers the special
       * case of American numbers where the extension is written with a hash at the
       * end, such as '- 503#'. Note that the only capturing groups should be around
       * the digits that you want to capture as part of the extension, or else parsing
       * will fail! We allow two options for representing the accented o - the
       * character itself, and one in the unicode decomposed form with the combining
       * acute accent.
       */

      var EXTN_PATTERNS_FOR_PARSING = RFC3966_EXTN_PREFIX + CAPTURING_EXTN_DIGITS + '|' + '[ \xA0\\t,]*' + "(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|" + "[;,x\uFF58#\uFF03~\uFF5E]|int|anexo|\uFF49\uFF4E\uFF54)" + "[:\\.\uFF0E]?[ \xA0\\t,-]*" + CAPTURING_EXTN_DIGITS + '#?|' + '[- ]+([' + VALID_DIGITS + ']{1,5})#'; // Regexp of all known extension prefixes used by different regions followed by
      // 1 or more valid digits, for use when parsing.

      var EXTN_PATTERN = new RegExp('(?:' + EXTN_PATTERNS_FOR_PARSING + ')$', 'i'); //  Regular expression of viable phone numbers. This is location independent.
      //  Checks we have at least three leading digits, and only valid punctuation,
      //  alpha characters and digits in the phone number. Does not include extension
      //  data. The symbol 'x' is allowed here as valid punctuation since it is often
      //  used as a placeholder for carrier codes, for example in Brazilian phone
      //  numbers. We also allow multiple '+' characters at the start.
      //
      //  Corresponds to the following:
      //  [digits]{minLengthNsn}|
      //  plus_sign*
      //  (([punctuation]|[star])*[digits]){3,}([punctuation]|[star]|[digits]|[alpha])*
      //
      //  The first reg-ex is to allow short numbers (two digits long) to be parsed if
      //  they are entered as "15" etc, but only if there is no punctuation in them.
      //  The second expression restricts the number of digits to three or more, but
      //  then allows them to be in international form, and to have alpha-characters
      //  and punctuation. We split up the two reg-exes here and combine them when
      //  creating the reg-ex VALID_PHONE_NUMBER_PATTERN itself so we can prefix it
      //  with ^ and append $ to each branch.
      //
      //  "Note VALID_PUNCTUATION starts with a -,
      //   so must be the first in the range" (c) Google devs.
      //  (wtf did they mean by saying that; probably nothing)
      //

      var MIN_LENGTH_PHONE_NUMBER_PATTERN = '[' + VALID_DIGITS + ']{' + MIN_LENGTH_FOR_NSN + '}'; //
      // And this is the second reg-exp:
      // (see MIN_LENGTH_PHONE_NUMBER_PATTERN for a full description of this reg-exp)
      //

      var VALID_PHONE_NUMBER = '[' + PLUS_CHARS + ']{0,1}' + '(?:' + '[' + VALID_PUNCTUATION + ']*' + '[' + VALID_DIGITS + ']' + '){3,}' + '[' + VALID_PUNCTUATION + VALID_DIGITS + ']*'; // The combined regular expression for valid phone numbers:
      //

      var VALID_PHONE_NUMBER_PATTERN = new RegExp( // Either a short two-digit-only phone number
      '^' + MIN_LENGTH_PHONE_NUMBER_PATTERN + '$' + '|' + // Or a longer fully parsed phone number (min 3 characters)
      '^' + VALID_PHONE_NUMBER + // Phone number extensions
      '(?:' + EXTN_PATTERNS_FOR_PARSING + ')?' + '$', 'i'); // This consists of the plus symbol, digits, and arabic-indic digits.

      var PHONE_NUMBER_START_PATTERN = new RegExp('[' + PLUS_CHARS + VALID_DIGITS + ']'); // Regular expression of trailing characters that we want to remove.

      var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp('[^' + VALID_DIGITS + ']+$');
      var LEADING_PLUS_CHARS_PATTERN = new RegExp('^[' + PLUS_CHARS + ']+'); // These mappings map a character (key) to a specific digit that should
      // replace it for normalization purposes. Non-European digits that
      // may be used in phone numbers are mapped to a European equivalent.
      //
      // E.g. in Iraq they don't write `+442323234` but rather `+??????????????????`.
      //

      var DIGIT_MAPPINGS = {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        "\uFF10": '0',
        // Fullwidth digit 0
        "\uFF11": '1',
        // Fullwidth digit 1
        "\uFF12": '2',
        // Fullwidth digit 2
        "\uFF13": '3',
        // Fullwidth digit 3
        "\uFF14": '4',
        // Fullwidth digit 4
        "\uFF15": '5',
        // Fullwidth digit 5
        "\uFF16": '6',
        // Fullwidth digit 6
        "\uFF17": '7',
        // Fullwidth digit 7
        "\uFF18": '8',
        // Fullwidth digit 8
        "\uFF19": '9',
        // Fullwidth digit 9
        "\u0660": '0',
        // Arabic-indic digit 0
        "\u0661": '1',
        // Arabic-indic digit 1
        "\u0662": '2',
        // Arabic-indic digit 2
        "\u0663": '3',
        // Arabic-indic digit 3
        "\u0664": '4',
        // Arabic-indic digit 4
        "\u0665": '5',
        // Arabic-indic digit 5
        "\u0666": '6',
        // Arabic-indic digit 6
        "\u0667": '7',
        // Arabic-indic digit 7
        "\u0668": '8',
        // Arabic-indic digit 8
        "\u0669": '9',
        // Arabic-indic digit 9
        "\u06F0": '0',
        // Eastern-Arabic digit 0
        "\u06F1": '1',
        // Eastern-Arabic digit 1
        "\u06F2": '2',
        // Eastern-Arabic digit 2
        "\u06F3": '3',
        // Eastern-Arabic digit 3
        "\u06F4": '4',
        // Eastern-Arabic digit 4
        "\u06F5": '5',
        // Eastern-Arabic digit 5
        "\u06F6": '6',
        // Eastern-Arabic digit 6
        "\u06F7": '7',
        // Eastern-Arabic digit 7
        "\u06F8": '8',
        // Eastern-Arabic digit 8
        "\u06F9": '9' // Eastern-Arabic digit 9

      };
      var default_options = {
        country: {} // `options`:
        //  {
        //    country:
        //    {
        //      restrict - (a two-letter country code)
        //                 the phone number must be in this country
        //
        //      default - (a two-letter country code)
        //                default country to use for phone number parsing and validation
        //                (if no country code could be derived from the phone number)
        //    }
        //  }
        //
        // Returns `{ country, number }`
        //
        // Example use cases:
        //
        // ```js
        // parse('8 (800) 555-35-35', 'RU')
        // parse('8 (800) 555-35-35', 'RU', metadata)
        // parse('8 (800) 555-35-35', { country: { default: 'RU' } })
        // parse('8 (800) 555-35-35', { country: { default: 'RU' } }, metadata)
        // parse('+7 800 555 35 35')
        // parse('+7 800 555 35 35', metadata)
        // ```
        //

      };

      function parse(arg_1, arg_2, arg_3) {
        var _sort_out_arguments = sort_out_arguments(arg_1, arg_2, arg_3),
            text = _sort_out_arguments.text,
            options = _sort_out_arguments.options,
            metadata = _sort_out_arguments.metadata; // Validate country codes
        // Validate `default` country


        if (options.country["default"] && !metadata.countries[options.country["default"]]) {
          throw new Error('Unknown country code: ' + options.country["default"]);
        } // Validate `restrict` country


        if (options.country.restrict && !metadata.countries[options.country.restrict]) {
          throw new Error('Unknown country code: ' + options.country.restrict);
        } // Parse the phone number


        var formatted_phone_number = void 0;
        var extension = void 0; // Parse RFC 3966 phone number URI.

        if (text && text.indexOf('tel:') === 0) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(text.split(';')), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var part = _step.value;

              var _part$split = part.split(':'),
                  _part$split2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_part$split, 2),
                  name = _part$split2[0],
                  value = _part$split2[1];

              switch (name) {
                case 'tel':
                  formatted_phone_number = value;
                  break;

                case 'ext':
                  extension = value;
                  break;

                case 'phone-context':
                  // Domain contexts are ignored.
                  if (value[0] === '+') {
                    formatted_phone_number = value + formatted_phone_number;
                  }

                  break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"]) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        } else {
          formatted_phone_number = extract_formatted_phone_number(text);
        } // If the phone number is not viable, then abort.


        if (!is_viable_phone_number(formatted_phone_number)) {
          return {};
        } // Attempt to parse extension first, since it doesn't require region-specific
        // data and we want to have the non-normalised number here.


        var with_extension_stripped = strip_extension(formatted_phone_number);

        if (with_extension_stripped.extension) {
          formatted_phone_number = with_extension_stripped.number, extension = with_extension_stripped.extension;
        }

        var _parse_phone_number_a = parse_phone_number_and_country_phone_code(formatted_phone_number, metadata),
            country_phone_code = _parse_phone_number_a.country_phone_code,
            number = _parse_phone_number_a.number; // Maybe invalid country phone code encountered


        if (!number) {
          return {};
        }

        var country = void 0;
        var country_metadata = void 0; // Whether the phone number is formatted as an international phone number

        var is_international = false;

        if (country_phone_code) {
          is_international = true; // Check country restriction

          if (options.country.restrict && country_phone_code !== Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(metadata.countries[options.country.restrict])) {
            return {};
          } // Formatting information for regions which share
          // a country calling code is contained by only one region
          // for performance reasons. For example, for NANPA region
          // ("North American Numbering Plan Administration",
          //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
          // it will be contained in the metadata for `US`.


          country_metadata = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_metadata_by_country_phone_code"])(country_phone_code, metadata); // `country` will be set later,
          // because, for example, for NANPA countries
          // there are several countries corresponding
          // to the same `1` country phone code.
          // Therefore, to reliably determine the exact country,
          // national (significant) number should be parsed first.
        } else if (options.country.restrict || options.country["default"]) {
          country = options.country.restrict || options.country["default"];
          country_metadata = metadata.countries[country];
          number = normalize(formatted_phone_number);
        }

        if (!country_metadata) {
          return {};
        }

        var national_number = number; // Only strip national prefixes for non-international phone numbers
        // because national prefixes can't be present in international phone numbers.
        // Otherwise, while forgiving, it would parse a NANPA number `+1 1877 215 5230`
        // first to `1877 215 5230` and then, stripping the leading `1`, to `877 215 5230`,
        // and then it would assume that's a valid number which it isn't.
        // So no forgiveness for grandmas here.
        // The issue asking for this fix:
        // https://github.com/catamphetamine/libphonenumber-js/issues/159

        if (!is_international) {
          national_number = strip_national_prefix(number, country_metadata);
        }

        var did_have_national_prefix = national_number !== number; // https://github.com/catamphetamine/libphonenumber-js/issues/67
        // if (!is_international && !did_have_national_prefix &&
        // 		is_national_prefix_required(national_number, country_metadata))
        // {
        // 	return {}
        // }
        // Sometimes there are several countries
        // corresponding to the same country phone code
        // (e.g. NANPA countries all having `1` country phone code).
        // Therefore, to reliably determine the exact country,
        // national (significant) number should have been parsed first.
        //

        if (!country) {
          // When `metadata.json` is generated, all "ambiguous" country phone codes
          // get their countries populated with the full set of
          // "phone number type" regular expressions.
          country = find_country_code(country_phone_code, national_number, metadata); // Just in case there appears to be a bug in Google's metadata
          // and the exact country could not be extracted from the phone number.

          /* istanbul ignore if */

          if (!country) {
            return {};
          } // Update metadata to be for this specific country


          country_metadata = metadata.countries[country];
        } // Validate national (significant) number length.
        //
        // A sidenote:
        //
        // They say that sometimes national (significant) numbers
        // can be longer than `MAX_LENGTH_FOR_NSN` (e.g. in Germany).
        // https://github.com/googlei18n/libphonenumber/blob/7e1748645552da39c4e1ba731e47969d97bdb539/resources/phonenumber.proto#L36
        // Such numbers will just be discarded.
        //


        if (national_number.length > MAX_LENGTH_FOR_NSN) {
          return {};
        } // National number pattern is different for each country,
        // even for those ones which are part of the "NANPA" group.


        var national_number_rule = new RegExp(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_national_number_pattern"])(country_metadata)); // Check if national phone number pattern matches the number

        if (!Object(_common__WEBPACK_IMPORTED_MODULE_3__["matches_entirely"])(national_number, national_number_rule)) {
          return {};
        }

        var result = {
          country: country,
          phone: national_number
        };

        if (extension) {
          result.ext = extension;
        }

        return result;
      } // Normalizes a string of characters representing a phone number.
      // This converts wide-ascii and arabic-indic numerals to European numerals,
      // and strips punctuation and alpha characters.
      //
      // E.g. in Iraq they don't write `+442323234` but rather `+??????????????????`.
      //


      function normalize(number) {
        return replace_characters(number, DIGIT_MAPPINGS);
      } // For any character not being part of `replacements`
      // it is removed from the phone number.


      function replace_characters(text, replacements) {
        var replaced = '';
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(text), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var character = _step2.value;
            var replacement = replacements[character.toUpperCase()];

            if (replacement !== undefined) {
              replaced += replacement;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return replaced;
      } // Checks to see if the string of characters could possibly be a phone number at
      // all. At the moment, checks to see that the string begins with at least 2
      // digits, ignoring any punctuation commonly found in phone numbers. This method
      // does not require the number to be normalized in advance - but does assume
      // that leading non-number symbols have been removed, such as by the method
      // `extract_possible_number`.
      //


      function is_viable_phone_number(number) {
        return number.length >= MIN_LENGTH_FOR_NSN && Object(_common__WEBPACK_IMPORTED_MODULE_3__["matches_entirely"])(number, VALID_PHONE_NUMBER_PATTERN);
      }

      function extract_formatted_phone_number(text) {
        if (!text || text.length > MAX_INPUT_STRING_LENGTH) {
          return '';
        } // Attempt to extract a possible number from the string passed in


        var starts_at = text.search(PHONE_NUMBER_START_PATTERN);

        if (starts_at < 0) {
          return '';
        }

        return text // Trim everything to the left of the phone number
        .slice(starts_at) // Remove trailing non-numerical characters
        .replace(AFTER_PHONE_NUMBER_END_PATTERN, '');
      } // Parses a formatted phone number.


      function parse_phone_number(number) {
        if (!number) {
          return '';
        }

        var is_international = LEADING_PLUS_CHARS_PATTERN.test(number); // Remove non-digits
        // (and strip the possible leading '+')

        number = normalize(number);

        if (is_international) {
          return '+' + number;
        }

        return number;
      } // Parses a formatted phone number
      // and returns `{ country_phone_code, number }`
      // where `number` is the national (significant) phone number.
      //
      // (aka `maybeExtractCountryPhoneCode`)
      //


      function parse_phone_number_and_country_phone_code(number, metadata) {
        number = parse_phone_number(number);

        if (!number) {
          return {};
        } // If this is not an international phone number,
        // then don't extract country phone code.


        if (number[0] !== '+') {
          return {
            number: number
          };
        } // Strip the leading '+' sign


        number = number.slice(1); // Fast abortion: country codes do not begin with a '0'

        if (number[0] === '0') {
          return {};
        } // The thing with country phone codes
        // is that they are orthogonal to each other
        // i.e. there's no such country phone code A
        // for which country phone code B exists
        // where B starts with A.
        // Therefore, while scanning digits,
        // if a valid country code is found,
        // that means that it is the country code.
        //


        var i = 1;

        while (i <= MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
          var country_phone_code = number.slice(0, i);

          if (metadata.country_phone_code_to_countries[country_phone_code]) {
            return {
              country_phone_code: country_phone_code,
              number: number.slice(i)
            };
          }

          i++;
        }

        return {};
      } // Strips any national prefix (such as 0, 1) present in the number provided


      function strip_national_prefix(number, country_metadata) {
        var national_prefix_for_parsing = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_national_prefix_for_parsing"])(country_metadata);

        if (!number || !national_prefix_for_parsing) {
          return number;
        } // Attempt to parse the first digits as a national prefix


        var national_prefix_pattern = new RegExp('^(?:' + national_prefix_for_parsing + ')');
        var national_prefix_matcher = national_prefix_pattern.exec(number); // If no national prefix is present in the phone number,
        // but if the national prefix is optional for this country,
        // then consider this phone number valid.
        //
        // Google's reference `libphonenumber` implementation
        // wouldn't recognize such phone numbers as valid,
        // but I think it would perfectly make sense
        // to consider such phone numbers as valid
        // because if a national phone number was originally
        // formatted without the national prefix
        // then it must be parseable back into the original national number.
        // In other words, `parse(format(number))`
        // must always be equal to `number`.
        //

        if (!national_prefix_matcher) {
          return number;
        }

        var national_significant_number = void 0; // `national_prefix_for_parsing` capturing groups
        // (used only for really messy cases: Argentina, Brazil, Mexico, Somalia)

        var any_groups_were_captured = national_prefix_matcher[national_prefix_matcher.length - 1];
        var national_prefix_transform_rule = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_national_prefix_transform_rule"])(country_metadata); // If the national number tranformation is needed then do it

        if (national_prefix_transform_rule && any_groups_were_captured) {
          national_significant_number = number.replace(national_prefix_pattern, national_prefix_transform_rule);
        } // Else, no transformation is necessary,
        // and just strip the national prefix.
        else {
            national_significant_number = number.slice(national_prefix_matcher[0].length);
          } // Verify the parsed national (significant) number for this country


        var national_number_rule = new RegExp(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_national_number_pattern"])(country_metadata)); // If the original number (before stripping national prefix) was viable,
        // and the resultant number is not, then prefer the original phone number.
        // This is because for some countries (e.g. Russia) the same digit could be both
        // a national prefix and a leading digit of a valid national phone number,
        // like `8` is the national prefix for Russia and both
        // `8 800 555 35 35` and `800 555 35 35` are valid numbers.

        if (Object(_common__WEBPACK_IMPORTED_MODULE_3__["matches_entirely"])(number, national_number_rule) && !Object(_common__WEBPACK_IMPORTED_MODULE_3__["matches_entirely"])(national_significant_number, national_number_rule)) {
          return number;
        } // Return the parsed national (significant) number


        return national_significant_number;
      }

      function find_country_code(country_phone_code, national_phone_number, metadata) {
        // Is always non-empty, because `country_phone_code` is always valid
        var possible_countries = metadata.country_phone_code_to_countries[country_phone_code]; // If there's just one country corresponding to the country code,
        // then just return it, without further phone number digits validation.

        if (possible_countries.length === 1) {
          return possible_countries[0];
        }

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(possible_countries), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var country_code = _step3.value;
            var country = metadata.countries[country_code]; // Leading digits check would be the simplest one

            if (Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_leading_digits"])(country)) {
              if (national_phone_number && national_phone_number.search(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_leading_digits"])(country)) === 0) {
                return country_code;
              }
            } // Else perform full validation with all of those bulky
            // fixed-line/mobile/etc regular expressions.
            else if (Object(_types__WEBPACK_IMPORTED_MODULE_6__["default"])({
                phone: national_phone_number,
                country: country_code
              }, metadata)) {
                return country_code;
              }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      } // export function is_national_prefix_required(national_number, country_metadata)
      // {
      // 	const format = choose_format_for_number(get_formats(country_metadata), national_number)
      //
      // 	if (format)
      // 	{
      // 		return get_format_national_prefix_is_mandatory_when_formatting(format, country_metadata)
      // 	}
      // }
      // Sort out arguments


      function sort_out_arguments(arg_1, arg_2, arg_3) {
        var text = void 0;
        var options = void 0;
        var metadata = void 0; // Normalize numerical `value`.
        // https://github.com/catamphetamine/libphonenumber-js/issues/142
        // `parse(88005553535, ...)`.

        if (typeof arg_1 === 'number') {
          arg_1 = String(arg_1);
        } // If the phone number is passed as a string.
        // `parse('88005553535', ...)`.


        if (typeof arg_1 === 'string') {
          text = arg_1;
        } // If "resrict country" argument is being passed
        // then convert it to an `options` object.
        // `parse('88005553535', 'RU', [options], metadata)`.


        if (typeof arg_2 === 'string') {
          options = {
            country: {
              restrict: arg_2
            }
          };
          metadata = arg_3;
        } // No "resrict country" argument is being passed.
        // International phone number is passed.
        // `parse('+78005553535', [options], metadata)`.
        else {
            if (arg_3) {
              options = arg_2;
              metadata = arg_3;
            } else {
              metadata = arg_2;
            }
          } // Metadata is required.


        if (!metadata || !metadata.countries) {
          throw new Error('Metadata is required');
        } // Apply default options.


        if (options) {
          options = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, default_options, options);
        } else {
          options = default_options;
        }

        return {
          text: text,
          options: options,
          metadata: metadata
        };
      } // Strips any extension (as in, the part of the number dialled after the call is
      // connected, usually indicated with extn, ext, x or similar) from the end of
      // the number, and returns it.


      function strip_extension(number) {
        var start = number.search(EXTN_PATTERN);

        if (start < 0) {
          return {};
        } // If we find a potential extension, and the number preceding this is a viable
        // number, we assume it is an extension.


        var number_without_extension = number.slice(0, start);
        /* istanbul ignore if - seems a bit of a redundant check */

        if (!is_viable_phone_number(number_without_extension)) {
          return {};
        }

        var matches = number.match(EXTN_PATTERN);
        var i = 1;

        while (i < matches.length) {
          if (matches[i] != null && matches[i].length > 0) {
            return {
              number: number_without_extension,
              extension: matches[i]
            };
          }

          i++;
        }
      } //# sourceMappingURL=parse.js.map

      /***/

    },

    /***/
    "FlQf":
    /*!*********************************************************************!*\
      !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
      \*********************************************************************/

    /*! no static exports found */

    /***/
    function FlQf(module, exports, __webpack_require__) {
      "use strict";

      var $at = __webpack_require__(
      /*! ./_string-at */
      "ccE7")(true); // 21.1.3.27 String.prototype[@@iterator]()


      __webpack_require__(
      /*! ./_iter-define */
      "MPFp")(String, 'String', function (iterated) {
        this._t = String(iterated); // target

        this._i = 0; // next index
        // 21.1.5.2.1 %StringIteratorPrototype%.next()
      }, function () {
        var O = this._t;
        var index = this._i;
        var point;
        if (index >= O.length) return {
          value: undefined,
          done: true
        };
        point = $at(O, index);
        this._i += point.length;
        return {
          value: point,
          done: false
        };
      });
      /***/

    },

    /***/
    "FpHa":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function FpHa(module, exports) {
      // IE 8- don't enum bug keys
      module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
      /***/
    },

    /***/
    "FyfS":
    /*!************************************************************!*\
      !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function FyfS(module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(
        /*! core-js/library/fn/get-iterator */
        "Rp86"),
        __esModule: true
      };
      /***/
    },

    /***/
    "G6hQ":
    /*!********************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/credit-card/validator.js ***!
      \********************************************************************************/

    /*! no static exports found */

    /***/
    function G6hQ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.creditCard = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = control.value;
        var sanitized = v.replace(/[^0-9]+/g, ''); // problem with chrome

        if (!/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(sanitized)) {
          return {
            creditCard: true
          };
        }

        var sum = 0;
        var digit;
        var tmpNum;
        var shouldDouble;

        for (var i = sanitized.length - 1; i >= 0; i--) {
          digit = sanitized.substring(i, i + 1);
          tmpNum = parseInt(digit, 10);

          if (shouldDouble) {
            tmpNum *= 2;

            if (tmpNum >= 10) {
              sum += tmpNum % 10 + 1;
            } else {
              sum += tmpNum;
            }
          } else {
            sum += tmpNum;
          }

          shouldDouble = !shouldDouble;
        }

        if (Boolean(sum % 10 === 0 ? sanitized : false)) {
          return null;
        }

        return {
          creditCard: true
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "G8Mo":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function G8Mo(module, exports, __webpack_require__) {
      // 7.1.1 ToPrimitive(input [, PreferredType])
      var isObject = __webpack_require__(
      /*! ./_is-object */
      "93I4"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string


      module.exports = function (it, S) {
        if (!isObject(it)) return it;
        var fn, val;
        if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
        if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
        if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
      };
      /***/

    },

    /***/
    "HmVp":
    /*!*************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/uuid/directive.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function HmVp(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "0Pn3");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UUID_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return UUIDValidator;
        }),
        multi: true
      };

      var UUIDValidator = function () {
        function UUIDValidator() {}

        UUIDValidator.prototype.ngOnInit = function () {
          this.validator = _1.uuid(this.uuid);
        };

        UUIDValidator.prototype.ngOnChanges = function (changes) {
          for (var key in changes) {
            if (key === 'uuid') {
              this.validator = _1.uuid(changes[key].currentValue);
              if (this.onChange) this.onChange();
            }
          }
        };

        UUIDValidator.prototype.validate = function (c) {
          return this.validator(c);
        };

        UUIDValidator.prototype.registerOnValidatorChange = function (fn) {
          this.onChange = fn;
        };

        UUIDValidator.??fac = function UUIDValidator_Factory(t) {
          return new (t || UUIDValidator)();
        };

        UUIDValidator.??dir = ??ngcc0.????defineDirective({
          type: UUIDValidator,
          selectors: [["", "uuid", "", "formControlName", ""], ["", "uuid", "", "formControl", ""], ["", "uuid", "", "ngModel", ""]],
          inputs: {
            uuid: "uuid"
          },
          features: [??ngcc0.????ProvidersFeature([UUID_VALIDATOR]), ??ngcc0.????NgOnChangesFeature]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(UUIDValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
              providers: [UUID_VALIDATOR]
            }]
          }], function () {
            return [];
          }, {
            uuid: [{
              type: core_1.Input
            }]
          });
        })();

        return UUIDValidator;
      }();
      /** @nocollapse */


      UUIDValidator.ctorParameters = function () {
        return [];
      };

      UUIDValidator.propDecorators = {
        'uuid': [{
          type: core_1.Input
        }]
      };
      exports.UUIDValidator = UUIDValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "Hsns":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function Hsns(module, exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ./_is-object */
      "93I4");

      var document = __webpack_require__(
      /*! ./_global */
      "5T2Y").document; // typeof document.createElement is 'object' in old IE


      var is = isObject(document) && isObject(document.createElement);

      module.exports = function (it) {
        return is ? document.createElement(it) : {};
      };
      /***/

    },

    /***/
    "JB68":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_to-object.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function JB68(module, exports, __webpack_require__) {
      // 7.1.13 ToObject(argument)
      var defined = __webpack_require__(
      /*! ./_defined */
      "Jes0");

      module.exports = function (it) {
        return Object(defined(it));
      };
      /***/

    },

    /***/
    "JBbd":
    /*!************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/min/validator.js ***!
      \************************************************************************/

    /*! no static exports found */

    /***/
    function JBbd(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.min = function (min) {
        return function (control) {
          if (!lang_1.isPresent(min)) return null;
          if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
          var v = +control.value;
          return v >= +min ? null : {
            actualValue: v,
            requiredValue: +min,
            min: true
          };
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "JRqA":
    /*!*****************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/equal-to/directive.js ***!
      \*****************************************************************************/

    /*! no static exports found */

    /***/
    function JRqA(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "bsBO");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EQUAL_TO_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return EqualToValidator;
        }),
        multi: true
      };

      var EqualToValidator = function () {
        function EqualToValidator() {}

        EqualToValidator.prototype.ngOnInit = function () {
          this.validator = _1.equalTo(this.equalTo);
        };

        EqualToValidator.prototype.validate = function (c) {
          return this.validator(c);
        };

        EqualToValidator.??fac = function EqualToValidator_Factory(t) {
          return new (t || EqualToValidator)();
        };

        EqualToValidator.??dir = ??ngcc0.????defineDirective({
          type: EqualToValidator,
          selectors: [["", "equalTo", "", "formControlName", ""], ["", "equalTo", "", "formControl", ""], ["", "equalTo", "", "ngModel", ""]],
          inputs: {
            equalTo: "equalTo"
          },
          features: [??ngcc0.????ProvidersFeature([EQUAL_TO_VALIDATOR])]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(EqualToValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
              providers: [EQUAL_TO_VALIDATOR]
            }]
          }], function () {
            return [];
          }, {
            equalTo: [{
              type: core_1.Input
            }]
          });
        })();

        return EqualToValidator;
      }();
      /** @nocollapse */


      EqualToValidator.ctorParameters = function () {
        return [];
      };

      EqualToValidator.propDecorators = {
        'equalTo': [{
          type: core_1.Input
        }]
      };
      exports.EqualToValidator = EqualToValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "Jes0":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/library/modules/_defined.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function Jes0(module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };
      /***/

    },

    /***/
    "KEkc":
    /*!********************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/less-than-equal/index.js ***!
      \********************************************************************************/

    /*! no static exports found */

    /***/
    function KEkc(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "5YfH"));

      __export(__webpack_require__(
      /*! ./validator */
      "CzqP")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "KUxP":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/library/modules/_fails.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function KUxP(module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
      /***/

    },

    /***/
    "LEOC":
    /*!**************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/range/directive.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function LEOC(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "/1VP");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RANGE_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return RangeValidator;
        }),
        multi: true
      };

      var RangeValidator = function () {
        function RangeValidator() {}

        RangeValidator.prototype.ngOnInit = function () {
          this.validator = _1.range(this.range);
        };

        RangeValidator.prototype.ngOnChanges = function (changes) {
          for (var key in changes) {
            if (key === 'range') {
              this.validator = _1.range(changes[key].currentValue);
              if (this.onChange) this.onChange();
            }
          }
        };

        RangeValidator.prototype.validate = function (c) {
          return this.validator(c);
        };

        RangeValidator.prototype.registerOnValidatorChange = function (fn) {
          this.onChange = fn;
        };

        RangeValidator.??fac = function RangeValidator_Factory(t) {
          return new (t || RangeValidator)();
        };

        RangeValidator.??dir = ??ngcc0.????defineDirective({
          type: RangeValidator,
          selectors: [["", "range", "", "formControlName", ""], ["", "range", "", "formControl", ""], ["", "range", "", "ngModel", ""]],
          inputs: {
            range: "range"
          },
          features: [??ngcc0.????ProvidersFeature([RANGE_VALIDATOR]), ??ngcc0.????NgOnChangesFeature]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(RangeValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[range][formControlName],[range][formControl],[range][ngModel]',
              providers: [RANGE_VALIDATOR]
            }]
          }], function () {
            return [];
          }, {
            range: [{
              type: core_1.Input
            }]
          });
        })();

        return RangeValidator;
      }();
      /** @nocollapse */


      RangeValidator.ctorParameters = function () {
        return [];
      };

      RangeValidator.propDecorators = {
        'range': [{
          type: core_1.Input
        }]
      };
      exports.RangeValidator = RangeValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "LkSb":
    /*!**************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/phone/directive.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function LkSb(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "tLlQ");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PHONE_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return PhoneValidator;
        }),
        multi: true
      };

      var PhoneValidator = function () {
        function PhoneValidator() {}

        PhoneValidator.prototype.ngOnInit = function () {
          this.validator = _1.phone(this.phone);
        };

        PhoneValidator.prototype.ngOnChanges = function (changes) {
          for (var key in changes) {
            if (key === 'phone') {
              this.validator = _1.phone(changes[key].currentValue);
              if (this.onChange) this.onChange();
            }
          }
        };

        PhoneValidator.prototype.validate = function (c) {
          return this.validator(c);
        };

        PhoneValidator.prototype.registerOnValidatorChange = function (fn) {
          this.onChange = fn;
        };

        PhoneValidator.??fac = function PhoneValidator_Factory(t) {
          return new (t || PhoneValidator)();
        };

        PhoneValidator.??dir = ??ngcc0.????defineDirective({
          type: PhoneValidator,
          selectors: [["", "phone", "", "formControlName", ""], ["", "phone", "", "formControl", ""], ["", "phone", "", "ngModel", ""]],
          inputs: {
            phone: "phone"
          },
          features: [??ngcc0.????ProvidersFeature([PHONE_VALIDATOR]), ??ngcc0.????NgOnChangesFeature]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(PhoneValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[phone][formControlName],[phone][formControl],[phone][ngModel]',
              providers: [PHONE_VALIDATOR]
            }]
          }], function () {
            return [];
          }, {
            phone: [{
              type: core_1.Input
            }]
          });
        })();

        return PhoneValidator;
      }();
      /** @nocollapse */


      PhoneValidator.ctorParameters = function () {
        return [];
      };

      PhoneValidator.propDecorators = {
        'phone': [{
          type: core_1.Input
        }]
      };
      exports.PhoneValidator = PhoneValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "M1xp":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/library/modules/_iobject.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function M1xp(module, exports, __webpack_require__) {
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      var cof = __webpack_require__(
      /*! ./_cof */
      "a0xu"); // eslint-disable-next-line no-prototype-builtins


      module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return cof(it) == 'String' ? it.split('') : Object(it);
      };
      /***/
    },

    /***/
    "MBV4":
    /*!**********************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/email/index.js ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function MBV4(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "NLP6"));

      __export(__webpack_require__(
      /*! ./validator */
      "XCgu")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "MPFp":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function MPFp(module, exports, __webpack_require__) {
      "use strict";

      var LIBRARY = __webpack_require__(
      /*! ./_library */
      "uOPS");

      var $export = __webpack_require__(
      /*! ./_export */
      "Y7ZC");

      var redefine = __webpack_require__(
      /*! ./_redefine */
      "kTiW");

      var hide = __webpack_require__(
      /*! ./_hide */
      "NegM");

      var Iterators = __webpack_require__(
      /*! ./_iterators */
      "SBuE");

      var $iterCreate = __webpack_require__(
      /*! ./_iter-create */
      "j2DC");

      var setToStringTag = __webpack_require__(
      /*! ./_set-to-string-tag */
      "RfKB");

      var getPrototypeOf = __webpack_require__(
      /*! ./_object-gpo */
      "U+KD");

      var ITERATOR = __webpack_require__(
      /*! ./_wks */
      "UWiX")('iterator');

      var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

      var FF_ITERATOR = '@@iterator';
      var KEYS = 'keys';
      var VALUES = 'values';

      var returnThis = function returnThis() {
        return this;
      };

      module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
        $iterCreate(Constructor, NAME, next);

        var getMethod = function getMethod(kind) {
          if (!BUGGY && kind in proto) return proto[kind];

          switch (kind) {
            case KEYS:
              return function keys() {
                return new Constructor(this, kind);
              };

            case VALUES:
              return function values() {
                return new Constructor(this, kind);
              };
          }

          return function entries() {
            return new Constructor(this, kind);
          };
        };

        var TAG = NAME + ' Iterator';
        var DEF_VALUES = DEFAULT == VALUES;
        var VALUES_BUG = false;
        var proto = Base.prototype;
        var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
        var $default = $native || getMethod(DEFAULT);
        var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
        var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
        var methods, key, IteratorPrototype; // Fix native

        if ($anyNative) {
          IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

          if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
            // Set @@toStringTag to native iterators
            setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

            if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
          }
        } // fix Array#{values, @@iterator}.name in V8 / FF


        if (DEF_VALUES && $native && $native.name !== VALUES) {
          VALUES_BUG = true;

          $default = function values() {
            return $native.call(this);
          };
        } // Define iterator


        if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
          hide(proto, ITERATOR, $default);
        } // Plug for library


        Iterators[NAME] = $default;
        Iterators[TAG] = returnThis;

        if (DEFAULT) {
          methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries
          };
          if (FORCED) for (key in methods) {
            if (!(key in proto)) redefine(proto, key, methods[key]);
          } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
        }

        return methods;
      };
      /***/

    },

    /***/
    "MvwC":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/library/modules/_html.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function MvwC(module, exports, __webpack_require__) {
      var document = __webpack_require__(
      /*! ./_global */
      "5T2Y").document;

      module.exports = document && document.documentElement;
      /***/
    },

    /***/
    "N/Fk":
    /*!***********************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/greater-than-equal/index.js ***!
      \***********************************************************************************/

    /*! no static exports found */

    /***/
    function NFk(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "Td7W"));

      __export(__webpack_require__(
      /*! ./validator */
      "Q/Qg")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "NLP6":
    /*!**************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/email/directive.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function NLP6(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var index_1 = __webpack_require__(
      /*! ./index */
      "MBV4");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EMAIL_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return EmailValidator;
        }),
        multi: true
      };

      var EmailValidator = function () {
        function EmailValidator() {}

        EmailValidator.prototype.validate = function (c) {
          return index_1.email(c);
        };

        EmailValidator.??fac = function EmailValidator_Factory(t) {
          return new (t || EmailValidator)();
        };

        EmailValidator.??dir = ??ngcc0.????defineDirective({
          type: EmailValidator,
          selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
          features: [??ngcc0.????ProvidersFeature([EMAIL_VALIDATOR])]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(EmailValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[email][formControlName],[email][formControl],[email][ngModel]',
              providers: [EMAIL_VALIDATOR]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return EmailValidator;
      }();
      /** @nocollapse */


      EmailValidator.ctorParameters = function () {
        return [];
      };

      exports.EmailValidator = EmailValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "NV0k":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function NV0k(module, exports) {
      exports.f = {}.propertyIsEnumerable;
      /***/
    },

    /***/
    "NVqk":
    /*!********************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/min/index.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function NVqk(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "8OjS"));

      __export(__webpack_require__(
      /*! ./validator */
      "JBbd")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "NegM":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/library/modules/_hide.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function NegM(module, exports, __webpack_require__) {
      var dP = __webpack_require__(
      /*! ./_object-dp */
      "2faE");

      var createDesc = __webpack_require__(
      /*! ./_property-desc */
      "rr1i");

      module.exports = __webpack_require__(
      /*! ./_descriptors */
      "jmDH") ? function (object, key, value) {
        return dP.f(object, key, createDesc(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };
      /***/
    },

    /***/
    "Njao":
    /*!******************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/not-equal/directive.js ***!
      \******************************************************************************/

    /*! no static exports found */

    /***/
    function Njao(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var index_1 = __webpack_require__(
      /*! ./index */
      "+9C2");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NOT_EQUAL_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return NotEqualValidator;
        }),
        multi: true
      };

      var NotEqualValidator = function () {
        function NotEqualValidator() {}

        NotEqualValidator.prototype.ngOnInit = function () {
          this.validator = index_1.notEqual(this.notEqual);
        };

        NotEqualValidator.prototype.ngOnChanges = function (changes) {
          for (var key in changes) {
            if (key === 'notEqual') {
              this.validator = index_1.notEqual(changes[key].currentValue);
              if (this.onChange) this.onChange();
            }
          }
        };

        NotEqualValidator.prototype.validate = function (c) {
          return this.validator(c);
        };

        NotEqualValidator.prototype.registerOnValidatorChange = function (fn) {
          this.onChange = fn;
        };

        NotEqualValidator.??fac = function NotEqualValidator_Factory(t) {
          return new (t || NotEqualValidator)();
        };

        NotEqualValidator.??dir = ??ngcc0.????defineDirective({
          type: NotEqualValidator,
          selectors: [["", "notEqual", "", "formControlName", ""], ["", "notEqual", "", "formControl", ""], ["", "notEqual", "", "ngModel", ""]],
          inputs: {
            notEqual: "notEqual"
          },
          features: [??ngcc0.????ProvidersFeature([NOT_EQUAL_VALIDATOR]), ??ngcc0.????NgOnChangesFeature]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(NotEqualValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
              providers: [NOT_EQUAL_VALIDATOR]
            }]
          }], function () {
            return [];
          }, {
            notEqual: [{
              type: core_1.Input
            }]
          });
        })();

        return NotEqualValidator;
      }();
      /** @nocollapse */


      NotEqualValidator.ctorParameters = function () {
        return [];
      };

      NotEqualValidator.propDecorators = {
        'notEqual': [{
          type: core_1.Input
        }]
      };
      exports.NotEqualValidator = NotEqualValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "NsO/":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function NsO(module, exports, __webpack_require__) {
      // to indexed object, toObject with fallback for non-array-like ES3 strings
      var IObject = __webpack_require__(
      /*! ./_iobject */
      "M1xp");

      var defined = __webpack_require__(
      /*! ./_defined */
      "Jes0");

      module.exports = function (it) {
        return IObject(defined(it));
      };
      /***/

    },

    /***/
    "Ojgd":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function Ojgd(module, exports) {
      // 7.1.4 ToInteger
      var ceil = Math.ceil;
      var floor = Math.floor;

      module.exports = function (it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
      };
      /***/

    },

    /***/
    "P2sY":
    /*!*************************************************************!*\
      !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function P2sY(module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(
        /*! core-js/library/fn/object/assign */
        "UbbE"),
        __esModule: true
      };
      /***/
    },

    /***/
    "Peps":
    /*!************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/url/validator.js ***!
      \************************************************************************/

    /*! no static exports found */

    /***/
    function Peps(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.url = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = control.value;
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : {
          'url': true
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "Pn9d":
    /*!*************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/json/directive.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function Pn9d(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "34t3");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var JSON_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return JSONValidator;
        }),
        multi: true
      };

      var JSONValidator = function () {
        function JSONValidator() {}

        JSONValidator.prototype.validate = function (c) {
          return _1.json(c);
        };

        JSONValidator.??fac = function JSONValidator_Factory(t) {
          return new (t || JSONValidator)();
        };

        JSONValidator.??dir = ??ngcc0.????defineDirective({
          type: JSONValidator,
          selectors: [["", "json", "", "formControlName", ""], ["", "json", "", "formControl", ""], ["", "json", "", "ngModel", ""]],
          features: [??ngcc0.????ProvidersFeature([JSON_VALIDATOR])]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(JSONValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[json][formControlName],[json][formControl],[json][ngModel]',
              providers: [JSON_VALIDATOR]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return JSONValidator;
      }();
      /** @nocollapse */


      JSONValidator.ctorParameters = function () {
        return [];
      };

      exports.JSONValidator = JSONValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "PoRY":
    /*!*****************************************************!*\
      !*** ./node_modules/libphonenumber-js/index.es6.js ***!
      \*****************************************************/

    /*! exports provided: parse, format, getNumberType, get_number_type, isValidNumber, is_valid_number, AsYouType, as_you_type, asYouType, parseCustom, DIGITS, formatCustom, isValidNumberCustom, getNumberTypeCustom, AsYouTypeCustom, asYouTypeCustom, DIGIT_PLACEHOLDER, getPhoneCode, getPhoneCodeCustom */

    /***/
    function PoRY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parse", function () {
        return parse;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "format", function () {
        return format;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getNumberType", function () {
        return getNumberType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get_number_type", function () {
        return get_number_type;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isValidNumber", function () {
        return isValidNumber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "is_valid_number", function () {
        return is_valid_number;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsYouType", function () {
        return AsYouType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "as_you_type", function () {
        return as_you_type;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "asYouType", function () {
        return asYouType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPhoneCode", function () {
        return getPhoneCode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPhoneCodeCustom", function () {
        return getPhoneCodeCustom;
      });
      /* harmony import */


      var _metadata_min_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./metadata.min.json */
      "YHbO");

      var _metadata_min_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ./metadata.min.json */
      "YHbO", 1);
      /* harmony import */


      var _es6_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./es6/parse */
      "Fh5j");
      /* harmony import */


      var _es6_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./es6/types */
      "F4D2");
      /* harmony import */


      var _es6_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./es6/format */
      "rg1z");
      /* harmony import */


      var _es6_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./es6/validate */
      "XdH9");
      /* harmony import */


      var _es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./es6/AsYouType */
      "5PNq");
      /* harmony import */


      var _es6_metadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./es6/metadata */
      "B/P3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "parseCustom", function () {
        return _es6_parse__WEBPACK_IMPORTED_MODULE_1__["default"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DIGITS", function () {
        return _es6_parse__WEBPACK_IMPORTED_MODULE_1__["DIGIT_MAPPINGS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "formatCustom", function () {
        return _es6_format__WEBPACK_IMPORTED_MODULE_3__["default"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isValidNumberCustom", function () {
        return _es6_validate__WEBPACK_IMPORTED_MODULE_4__["default"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getNumberTypeCustom", function () {
        return _es6_types__WEBPACK_IMPORTED_MODULE_2__["default"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AsYouTypeCustom", function () {
        return _es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "asYouTypeCustom", function () {
        return _es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DIGIT_PLACEHOLDER", function () {
        return _es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["DIGIT_PLACEHOLDER"];
      });

      function parse() {
        var parameters = Array.prototype.slice.call(arguments);
        parameters.push(_metadata_min_json__WEBPACK_IMPORTED_MODULE_0__);
        return _es6_parse__WEBPACK_IMPORTED_MODULE_1__["default"].apply(this, parameters);
      }

      function format() {
        var parameters = Array.prototype.slice.call(arguments);
        parameters.push(_metadata_min_json__WEBPACK_IMPORTED_MODULE_0__);
        return _es6_format__WEBPACK_IMPORTED_MODULE_3__["default"].apply(this, parameters);
      }

      function getNumberType() {
        var parameters = Array.prototype.slice.call(arguments);
        parameters.push(_metadata_min_json__WEBPACK_IMPORTED_MODULE_0__);
        return _es6_types__WEBPACK_IMPORTED_MODULE_2__["default"].apply(this, parameters);
      } // `get_number_type` name is deprecated


      function get_number_type() {
        return getNumberType.apply(this, arguments);
      }

      function isValidNumber() {
        var parameters = Array.prototype.slice.call(arguments);
        parameters.push(_metadata_min_json__WEBPACK_IMPORTED_MODULE_0__);
        return _es6_validate__WEBPACK_IMPORTED_MODULE_4__["default"].apply(this, parameters);
      } // `is_valid_number` name is deprecated


      function is_valid_number() {
        return isValidNumber.apply(this, arguments);
      }

      function AsYouType(country) {
        _es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, country, _metadata_min_json__WEBPACK_IMPORTED_MODULE_0__);
      }

      AsYouType.prototype = Object.create(_es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].prototype, {});
      AsYouType.prototype.constructor = AsYouType; // `as_you_type` name is deprecated

      function as_you_type(country) {
        _es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, country, _metadata_min_json__WEBPACK_IMPORTED_MODULE_0__);
      }

      as_you_type.prototype = Object.create(_es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].prototype, {});
      as_you_type.prototype.constructor = as_you_type; // `asYouType` name is deprecated

      function asYouType(country) {
        _es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, country, _metadata_min_json__WEBPACK_IMPORTED_MODULE_0__);
      }

      asYouType.prototype = Object.create(_es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].prototype, {});
      asYouType.prototype.constructor = asYouType;

      function getPhoneCode(country) {
        return getPhoneCodeCustom(country, _metadata_min_json__WEBPACK_IMPORTED_MODULE_0__);
      }

      function getPhoneCodeCustom(country, metadata) {
        if (!metadata.countries[country]) {
          throw new Error('Unknown country: "' + country + '"');
        }

        return Object(_es6_metadata__WEBPACK_IMPORTED_MODULE_6__["get_phone_code"])(metadata.countries[country]);
      }
      /***/

    },

    /***/
    "Q/Qg":
    /*!***************************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/greater-than-equal/validator.js ***!
      \***************************************************************************************/

    /*! no static exports found */

    /***/
    function QQg(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.gte = function (gte) {
        return function (control) {
          if (!lang_1.isPresent(gte)) return null;
          if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
          var v = +control.value;
          return v >= +gte ? null : {
            gte: true
          };
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "Q/sY":
    /*!***************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/number/validator.js ***!
      \***************************************************************************/

    /*! no static exports found */

    /***/
    function QSY(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.number = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = control.value;
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : {
          'number': true
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "QKLY":
    /*!******************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/less-than/directive.js ***!
      \******************************************************************************/

    /*! no static exports found */

    /***/
    function QKLY(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "9K0O");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LESS_THAN_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return LessThanValidator;
        }),
        multi: true
      };

      var LessThanValidator = function () {
        function LessThanValidator() {}

        LessThanValidator.prototype.ngOnInit = function () {
          this.validator = _1.lt(this.lt);
        };

        LessThanValidator.prototype.ngOnChanges = function (changes) {
          for (var key in changes) {
            if (key === 'lt') {
              this.validator = _1.lt(changes[key].currentValue);
              if (this.onChange) this.onChange();
            }
          }
        };

        LessThanValidator.prototype.validate = function (c) {
          return this.validator(c);
        };

        LessThanValidator.prototype.registerOnValidatorChange = function (fn) {
          this.onChange = fn;
        };

        LessThanValidator.??fac = function LessThanValidator_Factory(t) {
          return new (t || LessThanValidator)();
        };

        LessThanValidator.??dir = ??ngcc0.????defineDirective({
          type: LessThanValidator,
          selectors: [["", "lt", "", "formControlName", ""], ["", "lt", "", "formControl", ""], ["", "lt", "", "ngModel", ""]],
          inputs: {
            lt: "lt"
          },
          features: [??ngcc0.????ProvidersFeature([LESS_THAN_VALIDATOR]), ??ngcc0.????NgOnChangesFeature]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(LessThanValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
              providers: [LESS_THAN_VALIDATOR]
            }]
          }], function () {
            return [];
          }, {
            lt: [{
              type: core_1.Input
            }]
          });
        })();

        return LessThanValidator;
      }();
      /** @nocollapse */


      LessThanValidator.ctorParameters = function () {
        return [];
      };

      LessThanValidator.propDecorators = {
        'lt': [{
          type: core_1.Input
        }]
      };
      exports.LessThanValidator = LessThanValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "QMMT":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/library/modules/_classof.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function QMMT(module, exports, __webpack_require__) {
      // getting tag from 19.1.3.6 Object.prototype.toString()
      var cof = __webpack_require__(
      /*! ./_cof */
      "a0xu");

      var TAG = __webpack_require__(
      /*! ./_wks */
      "UWiX")('toStringTag'); // ES3 wrong here


      var ARG = cof(function () {
        return arguments;
      }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

      var tryGet = function tryGet(it, key) {
        try {
          return it[key];
        } catch (e) {
          /* empty */
        }
      };

      module.exports = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
        : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
        : ARG ? cof(O) // ES3 arguments fallback
        : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
      };
      /***/

    },

    /***/
    "QMtK":
    /*!*****************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/date-ios/validator.js ***!
      \*****************************************************************************/

    /*! no static exports found */

    /***/
    function QMtK(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.dateISO = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = control.value;
        return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : {
          dateISO: true
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "QbLZ":
    /*!*******************************************************!*\
      !*** ./node_modules/babel-runtime/helpers/extends.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function QbLZ(module, exports, __webpack_require__) {
      "use strict";

      exports.__esModule = true;

      var _assign = __webpack_require__(
      /*! ../core-js/object/assign */
      "P2sY");

      var _assign2 = _interopRequireDefault(_assign);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = _assign2["default"] || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };
      /***/

    },

    /***/
    "Qj4I":
    /*!**************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/equal/directive.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function Qj4I(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var index_1 = __webpack_require__(
      /*! ./index */
      "RvEx");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EQUAL_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return EqualValidator;
        }),
        multi: true
      };

      var EqualValidator = function () {
        function EqualValidator() {}

        EqualValidator.prototype.ngOnInit = function () {
          this.validator = index_1.equal(this.equal);
        };

        EqualValidator.prototype.ngOnChanges = function (changes) {
          for (var key in changes) {
            if (key === 'equal') {
              this.validator = index_1.equal(changes[key].currentValue);
              if (this.onChange) this.onChange();
            }
          }
        };

        EqualValidator.prototype.validate = function (c) {
          return this.validator(c);
        };

        EqualValidator.prototype.registerOnValidatorChange = function (fn) {
          this.onChange = fn;
        };

        EqualValidator.??fac = function EqualValidator_Factory(t) {
          return new (t || EqualValidator)();
        };

        EqualValidator.??dir = ??ngcc0.????defineDirective({
          type: EqualValidator,
          selectors: [["", "equal", "", "formControlName", ""], ["", "equal", "", "formControl", ""], ["", "equal", "", "ngModel", ""]],
          inputs: {
            equal: "equal"
          },
          features: [??ngcc0.????ProvidersFeature([EQUAL_VALIDATOR]), ??ngcc0.????NgOnChangesFeature]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(EqualValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
              providers: [EQUAL_VALIDATOR]
            }]
          }], function () {
            return [];
          }, {
            equal: [{
              type: core_1.Input
            }]
          });
        })();

        return EqualValidator;
      }();
      /** @nocollapse */


      EqualValidator.ctorParameters = function () {
        return [];
      };

      EqualValidator.propDecorators = {
        'equal': [{
          type: core_1.Input
        }]
      };
      exports.EqualValidator = EqualValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "R74U":
    /*!***************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/base64/directive.js ***!
      \***************************************************************************/

    /*! no static exports found */

    /***/
    function R74U(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "//6X");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BASE64_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return Base64Validator;
        }),
        multi: true
      };

      var Base64Validator = function () {
        function Base64Validator() {}

        Base64Validator.prototype.validate = function (c) {
          return _1.base64(c);
        };

        Base64Validator.??fac = function Base64Validator_Factory(t) {
          return new (t || Base64Validator)();
        };

        Base64Validator.??dir = ??ngcc0.????defineDirective({
          type: Base64Validator,
          selectors: [["", "base64", "", "formControlName", ""], ["", "base64", "", "formControl", ""], ["", "base64", "", "ngModel", ""]],
          features: [??ngcc0.????ProvidersFeature([BASE64_VALIDATOR])]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(Base64Validator, [{
            type: core_1.Directive,
            args: [{
              selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
              providers: [BASE64_VALIDATOR]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return Base64Validator;
      }();
      /** @nocollapse */


      Base64Validator.ctorParameters = function () {
        return [];
      };

      exports.Base64Validator = Base64Validator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "RU/L":
    /*!*******************************************************************!*\
      !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function RUL(module, exports, __webpack_require__) {
      __webpack_require__(
      /*! ../../modules/es6.object.define-property */
      "Rqdy");

      var $Object = __webpack_require__(
      /*! ../../modules/_core */
      "WEpk").Object;

      module.exports = function defineProperty(it, key, desc) {
        return $Object.defineProperty(it, key, desc);
      };
      /***/

    },

    /***/
    "RfKB":
    /*!********************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function RfKB(module, exports, __webpack_require__) {
      var def = __webpack_require__(
      /*! ./_object-dp */
      "2faE").f;

      var has = __webpack_require__(
      /*! ./_has */
      "B+OT");

      var TAG = __webpack_require__(
      /*! ./_wks */
      "UWiX")('toStringTag');

      module.exports = function (it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
          configurable: true,
          value: tag
        });
      };
      /***/

    },

    /***/
    "Rp86":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function Rp86(module, exports, __webpack_require__) {
      __webpack_require__(
      /*! ../modules/web.dom.iterable */
      "bBy9");

      __webpack_require__(
      /*! ../modules/es6.string.iterator */
      "FlQf");

      module.exports = __webpack_require__(
      /*! ../modules/core.get-iterator */
      "fXsU");
      /***/
    },

    /***/
    "Rqdy":
    /*!****************************************************************************!*\
      !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
      \****************************************************************************/

    /*! no static exports found */

    /***/
    function Rqdy(module, exports, __webpack_require__) {
      var $export = __webpack_require__(
      /*! ./_export */
      "Y7ZC"); // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)


      $export($export.S + $export.F * !__webpack_require__(
      /*! ./_descriptors */
      "jmDH"), 'Object', {
        defineProperty: __webpack_require__(
        /*! ./_object-dp */
        "2faE").f
      });
      /***/
    },

    /***/
    "RvEx":
    /*!**********************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/equal/index.js ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function RvEx(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "Qj4I"));

      __export(__webpack_require__(
      /*! ./validator */
      "1yXu")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "SBuE":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_iterators.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function SBuE(module, exports) {
      module.exports = {};
      /***/
    },

    /***/
    "SEkw":
    /*!**********************************************************************!*\
      !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function SEkw(module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(
        /*! core-js/library/fn/object/define-property */
        "RU/L"),
        __esModule: true
      };
      /***/
    },

    /***/
    "Td7W":
    /*!***************************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/greater-than-equal/directive.js ***!
      \***************************************************************************************/

    /*! no static exports found */

    /***/
    function Td7W(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "N/Fk");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GREATER_THAN_EQUAL_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return GreaterThanEqualValidator;
        }),
        multi: true
      };

      var GreaterThanEqualValidator = function () {
        function GreaterThanEqualValidator() {}

        GreaterThanEqualValidator.prototype.ngOnInit = function () {
          this.validator = _1.gte(this.gte);
        };

        GreaterThanEqualValidator.prototype.ngOnChanges = function (changes) {
          for (var key in changes) {
            if (key === 'gte') {
              this.validator = _1.gte(changes[key].currentValue);
              if (this.onChange) this.onChange();
            }
          }
        };

        GreaterThanEqualValidator.prototype.validate = function (c) {
          return this.validator(c);
        };

        GreaterThanEqualValidator.prototype.registerOnValidatorChange = function (fn) {
          this.onChange = fn;
        };

        GreaterThanEqualValidator.??fac = function GreaterThanEqualValidator_Factory(t) {
          return new (t || GreaterThanEqualValidator)();
        };

        GreaterThanEqualValidator.??dir = ??ngcc0.????defineDirective({
          type: GreaterThanEqualValidator,
          selectors: [["", "gte", "", "formControlName", ""], ["", "gte", "", "formControl", ""], ["", "gte", "", "ngModel", ""]],
          inputs: {
            gte: "gte"
          },
          features: [??ngcc0.????ProvidersFeature([GREATER_THAN_EQUAL_VALIDATOR]), ??ngcc0.????NgOnChangesFeature]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(GreaterThanEqualValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
              providers: [GREATER_THAN_EQUAL_VALIDATOR]
            }]
          }], function () {
            return [];
          }, {
            gte: [{
              type: core_1.Input
            }]
          });
        })();

        return GreaterThanEqualValidator;
      }();
      /** @nocollapse */


      GreaterThanEqualValidator.ctorParameters = function () {
        return [];
      };

      GreaterThanEqualValidator.propDecorators = {
        'gte': [{
          type: core_1.Input
        }]
      };
      exports.GreaterThanEqualValidator = GreaterThanEqualValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "ThOI":
    /*!*************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/max-date/index.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function ThOI(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "0r7J"));

      __export(__webpack_require__(
      /*! ./validator */
      "BJLe")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "U+KD":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function UKD(module, exports, __webpack_require__) {
      // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
      var has = __webpack_require__(
      /*! ./_has */
      "B+OT");

      var toObject = __webpack_require__(
      /*! ./_to-object */
      "JB68");

      var IE_PROTO = __webpack_require__(
      /*! ./_shared-key */
      "VVlx")('IE_PROTO');

      var ObjectProto = Object.prototype;

      module.exports = Object.getPrototypeOf || function (O) {
        O = toObject(O);
        if (has(O, IE_PROTO)) return O[IE_PROTO];

        if (typeof O.constructor == 'function' && O instanceof O.constructor) {
          return O.constructor.prototype;
        }

        return O instanceof Object ? ObjectProto : null;
      };
      /***/

    },

    /***/
    "UO39":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function UO39(module, exports) {
      module.exports = function (done, value) {
        return {
          value: value,
          done: !!done
        };
      };
      /***/

    },

    /***/
    "UWiX":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/library/modules/_wks.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function UWiX(module, exports, __webpack_require__) {
      var store = __webpack_require__(
      /*! ./_shared */
      "29s/")('wks');

      var uid = __webpack_require__(
      /*! ./_uid */
      "YqAc");

      var Symbol = __webpack_require__(
      /*! ./_global */
      "5T2Y").Symbol;

      var USE_SYMBOL = typeof Symbol == 'function';

      var $exports = module.exports = function (name) {
        return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
      };

      $exports.store = store;
      /***/
    },

    /***/
    "UbbE":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/library/fn/object/assign.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function UbbE(module, exports, __webpack_require__) {
      __webpack_require__(
      /*! ../../modules/es6.object.assign */
      "o8NH");

      module.exports = __webpack_require__(
      /*! ../../modules/_core */
      "WEpk").Object.assign;
      /***/
    },

    /***/
    "V1X5":
    /*!*********************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/not-equal-to/validator.js ***!
      \*********************************************************************************/

    /*! no static exports found */

    /***/
    function V1X5(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.notEqualTo = function (notEqualControl) {
        var subscribe = false;
        return function (control) {
          if (!subscribe) {
            subscribe = true;
            notEqualControl.valueChanges.subscribe(function () {
              control.updateValueAndValidity();
            });
          }

          var v = control.value;
          return notEqualControl.value !== v ? null : {
            notEqualTo: true
          };
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "V7oC":
    /*!***********************************************************!*\
      !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function V7oC(module, exports, __webpack_require__) {
      "use strict";

      exports.__esModule = true;

      var _defineProperty = __webpack_require__(
      /*! ../core-js/object/define-property */
      "SEkw");

      var _defineProperty2 = _interopRequireDefault(_defineProperty);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            (0, _defineProperty2["default"])(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      /***/

    },

    /***/
    "VKFn":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function VKFn(module, exports, __webpack_require__) {
      __webpack_require__(
      /*! ../modules/web.dom.iterable */
      "bBy9");

      __webpack_require__(
      /*! ../modules/es6.string.iterator */
      "FlQf");

      module.exports = __webpack_require__(
      /*! ../modules/core.is-iterable */
      "ldVq");
      /***/
    },

    /***/
    "VVlx":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function VVlx(module, exports, __webpack_require__) {
      var shared = __webpack_require__(
      /*! ./_shared */
      "29s/")('keys');

      var uid = __webpack_require__(
      /*! ./_uid */
      "YqAc");

      module.exports = function (key) {
        return shared[key] || (shared[key] = uid(key));
      };
      /***/

    },

    /***/
    "VsS8":
    /*!********************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/max/index.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function VsS8(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "e+d7"));

      __export(__webpack_require__(
      /*! ./validator */
      "DbOz")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "W070":
    /*!*****************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function W070(module, exports, __webpack_require__) {
      // false -> Array#indexOf
      // true  -> Array#includes
      var toIObject = __webpack_require__(
      /*! ./_to-iobject */
      "NsO/");

      var toLength = __webpack_require__(
      /*! ./_to-length */
      "tEej");

      var toAbsoluteIndex = __webpack_require__(
      /*! ./_to-absolute-index */
      "D8kY");

      module.exports = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIObject($this);
          var length = toLength(O.length);
          var index = toAbsoluteIndex(fromIndex, length);
          var value; // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare

          if (IS_INCLUDES && el != el) while (length > index) {
            value = O[index++]; // eslint-disable-next-line no-self-compare

            if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
          } else for (; length > index; index++) {
            if (IS_INCLUDES || index in O) {
              if (O[index] === el) return IS_INCLUDES || index || 0;
            }
          }
          return !IS_INCLUDES && -1;
        };
      };
      /***/

    },

    /***/
    "WEpk":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/library/modules/_core.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function WEpk(module, exports) {
      var core = module.exports = {
        version: '2.6.12'
      };
      if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

      /***/
    },

    /***/
    "XCgu":
    /*!**************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/email/validator.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function XCgu(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.email = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = control.value;
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : {
          'email': true
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "XdH9":
    /*!********************************************************!*\
      !*** ./node_modules/libphonenumber-js/es6/validate.js ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function XdH9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return is_valid;
      });
      /* harmony import */


      var _parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./parse */
      "Fh5j");
      /* harmony import */


      var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./types */
      "F4D2");
      /* harmony import */


      var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./metadata */
      "B/P3"); // Checks if a given phone number is valid
      //
      // Example use cases:
      //
      // ```js
      // is_valid('8005553535', 'RU')
      // is_valid('8005553535', 'RU', metadata)
      // is_valid({ phone: '8005553535', country: 'RU' })
      // is_valid({ phone: '8005553535', country: 'RU' }, metadata)
      // is_valid('+78005553535')
      // is_valid('+78005553535', metadata)
      // ```
      //


      function is_valid(arg_1, arg_2, arg_3) {
        var _sort_out_arguments = Object(_types__WEBPACK_IMPORTED_MODULE_1__["sort_out_arguments"])(arg_1, arg_2, arg_3),
            input = _sort_out_arguments.input,
            metadata = _sort_out_arguments.metadata;

        if (!input) {
          return false;
        }

        if (!input.country) {
          return false;
        }

        var country_metadata = metadata.countries[input.country];

        if (Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_types"])(country_metadata)) {
          if (!Object(_types__WEBPACK_IMPORTED_MODULE_1__["default"])(input, metadata)) {
            return false;
          }
        }

        return true;
      } //# sourceMappingURL=validate.js.map

      /***/

    },

    /***/
    "XqUj":
    /*!********************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/util/lang.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function XqUj(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function isPresent(obj) {
        return obj !== undefined && obj !== null;
      }

      exports.isPresent = isPresent;

      function isDate(obj) {
        return !/Invalid|NaN/.test(new Date(obj).toString());
      }

      exports.isDate = isDate; //# sourceMappingURL=lang.js.map

      /***/
    },

    /***/
    "Y7ZC":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/library/modules/_export.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function Y7ZC(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ./_global */
      "5T2Y");

      var core = __webpack_require__(
      /*! ./_core */
      "WEpk");

      var ctx = __webpack_require__(
      /*! ./_ctx */
      "2GTP");

      var hide = __webpack_require__(
      /*! ./_hide */
      "NegM");

      var has = __webpack_require__(
      /*! ./_has */
      "B+OT");

      var PROTOTYPE = 'prototype';

      var $export = function $export(type, name, source) {
        var IS_FORCED = type & $export.F;
        var IS_GLOBAL = type & $export.G;
        var IS_STATIC = type & $export.S;
        var IS_PROTO = type & $export.P;
        var IS_BIND = type & $export.B;
        var IS_WRAP = type & $export.W;
        var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
        var expProto = exports[PROTOTYPE];
        var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
        var key, own, out;
        if (IS_GLOBAL) source = name;

        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && target[key] !== undefined;
          if (own && has(exports, key)) continue; // export native or passed

          out = own ? target[key] : source[key]; // prevent global pollution for namespaces

          exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
          : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
          : IS_WRAP && target[key] == out ? function (C) {
            var F = function F(a, b, c) {
              if (this instanceof C) {
                switch (arguments.length) {
                  case 0:
                    return new C();

                  case 1:
                    return new C(a);

                  case 2:
                    return new C(a, b);
                }

                return new C(a, b, c);
              }

              return C.apply(this, arguments);
            };

            F[PROTOTYPE] = C[PROTOTYPE];
            return F; // make static versions for prototype methods
          }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

          if (IS_PROTO) {
            (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

            if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
          }
        }
      }; // type bitmap


      $export.F = 1; // forced

      $export.G = 2; // global

      $export.S = 4; // static

      $export.P = 8; // proto

      $export.B = 16; // bind

      $export.W = 32; // wrap

      $export.U = 64; // safe

      $export.R = 128; // real proto method for `library`

      module.exports = $export;
      /***/
    },

    /***/
    "YHbO":
    /*!**********************************************************!*\
      !*** ./node_modules/libphonenumber-js/metadata.min.json ***!
      \**********************************************************/

    /*! exports provided: country_phone_code_to_countries, countries, default */

    /***/
    function YHbO(module) {
      module.exports = JSON.parse("{\"country_phone_code_to_countries\":{\"1\":[\"US\",\"AG\",\"AI\",\"AS\",\"BB\",\"BM\",\"BS\",\"CA\",\"DM\",\"DO\",\"GD\",\"GU\",\"JM\",\"KN\",\"KY\",\"LC\",\"MP\",\"MS\",\"PR\",\"SX\",\"TC\",\"TT\",\"VC\",\"VG\",\"VI\"],\"7\":[\"RU\",\"KZ\"],\"20\":[\"EG\"],\"27\":[\"ZA\"],\"30\":[\"GR\"],\"31\":[\"NL\"],\"32\":[\"BE\"],\"33\":[\"FR\"],\"34\":[\"ES\"],\"36\":[\"HU\"],\"39\":[\"IT\",\"VA\"],\"40\":[\"RO\"],\"41\":[\"CH\"],\"43\":[\"AT\"],\"44\":[\"GB\",\"GG\",\"IM\",\"JE\"],\"45\":[\"DK\"],\"46\":[\"SE\"],\"47\":[\"NO\",\"SJ\"],\"48\":[\"PL\"],\"49\":[\"DE\"],\"51\":[\"PE\"],\"52\":[\"MX\"],\"53\":[\"CU\"],\"54\":[\"AR\"],\"55\":[\"BR\"],\"56\":[\"CL\"],\"57\":[\"CO\"],\"58\":[\"VE\"],\"60\":[\"MY\"],\"61\":[\"AU\",\"CC\",\"CX\"],\"62\":[\"ID\"],\"63\":[\"PH\"],\"64\":[\"NZ\"],\"65\":[\"SG\"],\"66\":[\"TH\"],\"81\":[\"JP\"],\"82\":[\"KR\"],\"84\":[\"VN\"],\"86\":[\"CN\"],\"90\":[\"TR\"],\"91\":[\"IN\"],\"92\":[\"PK\"],\"93\":[\"AF\"],\"94\":[\"LK\"],\"95\":[\"MM\"],\"98\":[\"IR\"],\"211\":[\"SS\"],\"212\":[\"MA\",\"EH\"],\"213\":[\"DZ\"],\"216\":[\"TN\"],\"218\":[\"LY\"],\"220\":[\"GM\"],\"221\":[\"SN\"],\"222\":[\"MR\"],\"223\":[\"ML\"],\"224\":[\"GN\"],\"225\":[\"CI\"],\"226\":[\"BF\"],\"227\":[\"NE\"],\"228\":[\"TG\"],\"229\":[\"BJ\"],\"230\":[\"MU\"],\"231\":[\"LR\"],\"232\":[\"SL\"],\"233\":[\"GH\"],\"234\":[\"NG\"],\"235\":[\"TD\"],\"236\":[\"CF\"],\"237\":[\"CM\"],\"238\":[\"CV\"],\"239\":[\"ST\"],\"240\":[\"GQ\"],\"241\":[\"GA\"],\"242\":[\"CG\"],\"243\":[\"CD\"],\"244\":[\"AO\"],\"245\":[\"GW\"],\"246\":[\"IO\"],\"247\":[\"AC\"],\"248\":[\"SC\"],\"249\":[\"SD\"],\"250\":[\"RW\"],\"251\":[\"ET\"],\"252\":[\"SO\"],\"253\":[\"DJ\"],\"254\":[\"KE\"],\"255\":[\"TZ\"],\"256\":[\"UG\"],\"257\":[\"BI\"],\"258\":[\"MZ\"],\"260\":[\"ZM\"],\"261\":[\"MG\"],\"262\":[\"RE\",\"YT\"],\"263\":[\"ZW\"],\"264\":[\"NA\"],\"265\":[\"MW\"],\"266\":[\"LS\"],\"267\":[\"BW\"],\"268\":[\"SZ\"],\"269\":[\"KM\"],\"290\":[\"SH\",\"TA\"],\"291\":[\"ER\"],\"297\":[\"AW\"],\"298\":[\"FO\"],\"299\":[\"GL\"],\"350\":[\"GI\"],\"351\":[\"PT\"],\"352\":[\"LU\"],\"353\":[\"IE\"],\"354\":[\"IS\"],\"355\":[\"AL\"],\"356\":[\"MT\"],\"357\":[\"CY\"],\"358\":[\"FI\",\"AX\"],\"359\":[\"BG\"],\"370\":[\"LT\"],\"371\":[\"LV\"],\"372\":[\"EE\"],\"373\":[\"MD\"],\"374\":[\"AM\"],\"375\":[\"BY\"],\"376\":[\"AD\"],\"377\":[\"MC\"],\"378\":[\"SM\"],\"380\":[\"UA\"],\"381\":[\"RS\"],\"382\":[\"ME\"],\"385\":[\"HR\"],\"386\":[\"SI\"],\"387\":[\"BA\"],\"389\":[\"MK\"],\"420\":[\"CZ\"],\"421\":[\"SK\"],\"423\":[\"LI\"],\"500\":[\"FK\"],\"501\":[\"BZ\"],\"502\":[\"GT\"],\"503\":[\"SV\"],\"504\":[\"HN\"],\"505\":[\"NI\"],\"506\":[\"CR\"],\"507\":[\"PA\"],\"508\":[\"PM\"],\"509\":[\"HT\"],\"590\":[\"GP\",\"BL\",\"MF\"],\"591\":[\"BO\"],\"592\":[\"GY\"],\"593\":[\"EC\"],\"594\":[\"GF\"],\"595\":[\"PY\"],\"596\":[\"MQ\"],\"597\":[\"SR\"],\"598\":[\"UY\"],\"599\":[\"CW\",\"BQ\"],\"670\":[\"TL\"],\"672\":[\"NF\"],\"673\":[\"BN\"],\"674\":[\"NR\"],\"675\":[\"PG\"],\"676\":[\"TO\"],\"677\":[\"SB\"],\"678\":[\"VU\"],\"679\":[\"FJ\"],\"680\":[\"PW\"],\"681\":[\"WF\"],\"682\":[\"CK\"],\"683\":[\"NU\"],\"685\":[\"WS\"],\"686\":[\"KI\"],\"687\":[\"NC\"],\"688\":[\"TV\"],\"689\":[\"PF\"],\"690\":[\"TK\"],\"691\":[\"FM\"],\"692\":[\"MH\"],\"800\":[\"001\"],\"808\":[\"001\"],\"850\":[\"KP\"],\"852\":[\"HK\"],\"853\":[\"MO\"],\"855\":[\"KH\"],\"856\":[\"LA\"],\"870\":[\"001\"],\"878\":[\"001\"],\"880\":[\"BD\"],\"881\":[\"001\"],\"882\":[\"001\"],\"883\":[\"001\"],\"886\":[\"TW\"],\"888\":[\"001\"],\"960\":[\"MV\"],\"961\":[\"LB\"],\"962\":[\"JO\"],\"963\":[\"SY\"],\"964\":[\"IQ\"],\"965\":[\"KW\"],\"966\":[\"SA\"],\"967\":[\"YE\"],\"968\":[\"OM\"],\"970\":[\"PS\"],\"971\":[\"AE\"],\"972\":[\"IL\"],\"973\":[\"BH\"],\"974\":[\"QA\"],\"975\":[\"BT\"],\"976\":[\"MN\"],\"977\":[\"NP\"],\"979\":[\"001\"],\"992\":[\"TJ\"],\"993\":[\"TM\"],\"994\":[\"AZ\"],\"995\":[\"GE\"],\"996\":[\"KG\"],\"998\":[\"UZ\"]},\"countries\":{\"AC\":[\"247\",\"[46]\\\\d{4}|[01589]\\\\d{5}\"],\"AD\":[\"376\",\"[16]\\\\d{5,8}|[37-9]\\\\d{5}\",[[\"(\\\\d{3})(\\\\d{3})\",\"$1 $2\",[\"[137-9]|6[0-8]\"]],[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"180\",\"180[02]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"690\"]]]],\"AE\":[\"971\",\"[2-79]\\\\d{7,8}|800\\\\d{2,9}\",[[\"([2-4679])(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[2-4679][2-8]\"]],[\"(5\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"5\"]],[\"([479]00)(\\\\d)(\\\\d{5})\",\"$1 $2 $3\",[\"[479]00\"],\"$1\"],[\"([68]00)(\\\\d{2,9})\",\"$1 $2\",[\"[68]00\"],\"$1\"]],\"0\",\"0$1\"],\"AF\":[\"93\",\"[2-7]\\\\d{8}\",[[\"([2-7]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[2-7]\"]]],\"0\",\"0$1\"],\"AG\":[\"1\",\"[2589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"268\"],\"AI\":[\"1\",\"[2589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"264\"],\"AL\":[\"355\",\"[2-57]\\\\d{7}|6\\\\d{8}|8\\\\d{5,7}|9\\\\d{5}\",[[\"(4)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"4[0-6]\"]],[\"(6\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"6\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[2358][2-5]|4[7-9]\"]],[\"(\\\\d{3})(\\\\d{3,5})\",\"$1 $2\",[\"[235][16-9]|[79]|8[016-9]\"]]],\"0\",\"0$1\"],\"AM\":[\"374\",\"[1-9]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{6})\",\"$1 $2\",[\"1|47\"]],[\"(\\\\d{2})(\\\\d{6})\",\"$1 $2\",[\"4[1349]|[5-7]|88|9[1-9]\"],\"0$1\"],[\"(\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"[23]\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"8|90\"],\"0 $1\"]],\"0\",\"(0$1)\"],\"AO\":[\"244\",\"[29]\\\\d{8}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\"]]],\"AR\":[\"54\",\"11\\\\d{8}|[2368]\\\\d{9}|9\\\\d{10}\",[[\"([68]\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1-$2-$3\",[\"[68]\"]],[\"(9)(11)(\\\\d{4})(\\\\d{4})\",\"$2 15-$3-$4\",[\"911\"],null,null,\"$1 $2 $3-$4\"],[\"(9)(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$2 15-$3-$4\",[\"9(?:2[2-4689]|3[3-8])\",\"9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))\",\"9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))\",\"9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))\"],null,null,\"$1 $2 $3-$4\"],[\"(9)(\\\\d{4})(\\\\d{2})(\\\\d{4})\",\"$2 15-$3-$4\",[\"9[23]\"],null,null,\"$1 $2 $3-$4\"],[\"(11)(\\\\d{4})(\\\\d{4})\",\"$1 $2-$3\",[\"11\"],null,\"true\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2-$3\",[\"2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])\",\"2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))\",\"2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))\"],null,\"true\"],[\"(\\\\d{4})(\\\\d{2})(\\\\d{4})\",\"$1 $2-$3\",[\"[23]\"],null,\"true\"]],\"0\",\"0$1\",\"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?\",\"9$1\"],\"AS\":[\"1\",\"[5689]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"684\"],\"AT\":[\"43\",\"[1-9]\\\\d{3,12}\",[[\"(116\\\\d{3})\",\"$1\",[\"116\"],\"$1\"],[\"(1)(\\\\d{3,12})\",\"$1 $2\",[\"1\"]],[\"(5\\\\d)(\\\\d{3,5})\",\"$1 $2\",[\"5[079]\"]],[\"(5\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"5[079]\"]],[\"(5\\\\d)(\\\\d{4})(\\\\d{4,7})\",\"$1 $2 $3\",[\"5[079]\"]],[\"(\\\\d{3})(\\\\d{3,10})\",\"$1 $2\",[\"(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:[28]0|32)|[89]\"]],[\"(\\\\d{4})(\\\\d{3,9})\",\"$1 $2\",[\"2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:[24][1-8]|35|[5-79])\"]]],\"0\",\"0$1\"],\"AU\":[\"61\",\"1\\\\d{4,9}|[2-578]\\\\d{8}\",[[\"([2378])(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"[2378]\"],\"(0$1)\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"14|[45]\"],\"0$1\"],[\"(16)(\\\\d{3,4})\",\"$1 $2\",[\"16\"],\"0$1\"],[\"(16)(\\\\d{3})(\\\\d{2,4})\",\"$1 $2 $3\",[\"16\"],\"0$1\"],[\"(1[389]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1[389]0\",\"1(?:[38]0|9)0\"]],[\"(180)(2\\\\d{3})\",\"$1 $2\",[\"180\",\"1802\"]],[\"(19\\\\d)(\\\\d{3})\",\"$1 $2\",[\"19[13]\"]],[\"(19\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"19[679]\"]],[\"(13)(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\",[\"13[1-9]\"]]],\"0\",null,null,null,null,null,[\"[237]\\\\d{8}|8(?:51(?:0(?:0[03-9]|[1247]\\\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\\\d|4[0-4]))|[6-8]\\\\d{4}|9(?:[02-9]\\\\d{3}|1(?:[0-57-9]\\\\d{2}|6[0135-9]\\\\d)))\\\\d{3}\",\"14(?:5\\\\d|71)\\\\d{5}|4(?:[0-3]\\\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12457-9]|9[017-9])\\\\d{6}\",\"180(?:0\\\\d{3}|2)\\\\d{3}\",\"19(?:0[0126]\\\\d|[679])\\\\d{5}\",\"500\\\\d{6}\",null,null,\"16\\\\d{3,7}\",\"550\\\\d{6}\",\"13(?:00\\\\d{3}|45[0-4]|\\\\d)\\\\d{3}\"]],\"AW\":[\"297\",\"[25-9]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\"]]],\"AX\":[\"358\",\"1\\\\d{5,11}|[35]\\\\d{5,9}|2\\\\d{4,9}|4\\\\d{5,10}|6\\\\d{7,9}|7\\\\d{4,9}|8\\\\d{6,9}\",[[\"(\\\\d{3})(\\\\d{3,7})\",\"$1 $2\",[\"(?:[1-3]0|[6-8])0\"]],[\"(75\\\\d{3})\",\"$1\",[\"75[12]\"]],[\"(116\\\\d{3})\",\"$1\",[\"116\"],\"$1\"],[\"(\\\\d{2})(\\\\d{4,10})\",\"$1 $2\",[\"[14]|2[09]|50|7[135]\"]],[\"(\\\\d)(\\\\d{4,11})\",\"$1 $2\",[\"[25689][1-8]|3\"]]],\"0\",null,null,null,null,null,[\"18[1-8]\\\\d{3,9}\",\"4\\\\d{5,10}|50\\\\d{4,8}\",\"800\\\\d{4,7}\",\"[67]00\\\\d{5,6}\",null,null,\"[13]0\\\\d{4,8}|2(?:0(?:[016-8]\\\\d{3,7}|[2-59]\\\\d{2,7})|9\\\\d{4,8})|60(?:[12]\\\\d{5,6}|6\\\\d{7})|7(?:1\\\\d{7}|3\\\\d{8}|5[03-9]\\\\d{2,7})\"]],\"AZ\":[\"994\",\"[1-9]\\\\d{8}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"1[28]|2(?:[0-36]|[45]2)|365\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[4-8]\"],\"0$1\"],[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"9\"],\"0$1\"]],\"0\",\"(0$1)\"],\"BA\":[\"387\",\"[3-9]\\\\d{7,8}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2-$3\",[\"[3-5]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"6[1-356]|[7-9]\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"6[047]\"]]],\"0\",\"0$1\"],\"BB\":[\"1\",\"[2589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"246\"],\"BD\":[\"880\",\"[2-79]\\\\d{5,9}|1\\\\d{9}|8[0-7]\\\\d{4,8}\",[[\"(2)(\\\\d{7,8})\",\"$1-$2\",[\"2\"]],[\"(\\\\d{2})(\\\\d{4,6})\",\"$1-$2\",[\"[3-79]1\"]],[\"(\\\\d{4})(\\\\d{3,6})\",\"$1-$2\",[\"1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])\"]],[\"(\\\\d{3})(\\\\d{3,7})\",\"$1-$2\",[\"[3-79][2-9]|8\"]]],\"0\",\"0$1\"],\"BE\":[\"32\",\"[1-9]\\\\d{7,8}\",[[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"4[6-9]\"]],[\"(\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[23]|4[23]|9[2-4]\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[156]|7[018]|8(?:0[1-9]|[1-79])\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"(?:80|9)0\"]]],\"0\",\"0$1\"],\"BF\":[\"226\",\"[25-7]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]]],\"BG\":[\"359\",\"[23567]\\\\d{5,7}|[489]\\\\d{6,8}\",[[\"(2)(\\\\d)(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"2\"]],[\"(2)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"2\"]],[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"43[124-7]|70[1-9]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{2})\",\"$1 $2 $3\",[\"43[124-7]|70[1-9]\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"[78]00\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"99[69]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{2,3})\",\"$1 $2 $3\",[\"[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"48|8[7-9]|9[08]\"]]],\"0\",\"0$1\"],\"BH\":[\"973\",\"[136-9]\\\\d{7}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\"]]],\"BI\":[\"257\",\"[267]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]]],\"BJ\":[\"229\",\"[2689]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[2689]\"]]]],\"BL\":[\"590\",\"[56]\\\\d{8}\",[[\"([56]\\\\d{2})(\\\\d{2})(\\\\d{4})\",\"$1 $2-$3\",[\"590|69[01]\"]]],\"0\",null,null,null,null,null,[\"590(?:2[7-9]|5[12]|87)\\\\d{4}\",\"69(?:0\\\\d{2}|1(?:2[29]|3[0-5]))\\\\d{4}\"]],\"BM\":[\"1\",\"[4589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"441\"],\"BN\":[\"673\",\"[2-578]\\\\d{6}\",[[\"([2-578]\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"[2-578]\"]]]],\"BO\":[\"591\",\"[23467]\\\\d{7}|8\\\\d{8}\",[[\"([234])(\\\\d{7})\",\"$1 $2\",[\"[2-4]\"]],[\"([67]\\\\d{7})\",\"$1\",[\"[67]\"]],[\"(800)(\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"800\"]]],\"0\",null,\"0(1\\\\d)?\"],\"BQ\":[\"599\",\"[347]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[13-7]\"]],[\"(9)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"9\"]]],null,null,null,null,null,null,[\"(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\\\d)\\\\d{3}\",\"(?:31(?:8[14-8]|9[14578])|416[145-9]|7(?:0[01]|7[07]|8\\\\d|9[056])\\\\d)\\\\d{3}\"]],\"BR\":[\"55\",\"[1-46-9]\\\\d{7,10}|5(?:[0-4]\\\\d{7,9}|5(?:[2-8]\\\\d{7}|9\\\\d{7,8}))\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1-$2\",[\"300|40[02]\",\"300|40(?:0|20)\"]],[\"([3589]00)(\\\\d{2,3})(\\\\d{4})\",\"$1 $2 $3\",[\"[3589]00\"],\"0$1\"],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1 $2-$3\",[\"[1-9][1-9]\"],\"($1)\"],[\"(\\\\d{2})(\\\\d{5})(\\\\d{4})\",\"$1 $2-$3\",[\"[1-9][1-9]9\"],\"($1)\"]],\"0\",null,\"0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\\\d{10,11}))?\",\"$2\"],\"BS\":[\"1\",\"[2589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"242\"],\"BT\":[\"975\",\"[1-8]\\\\d{6,7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"1|77\"]],[\"([2-8])(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[2-68]|7[246]\"]]]],\"BW\":[\"267\",\"[2-79]\\\\d{6,7}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[2-6]\"]],[\"(7\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"7\"]],[\"(90)(\\\\d{5})\",\"$1 $2\",[\"90\"]]]],\"BY\":[\"375\",\"[1-4]\\\\d{8}|8(?:0(?:0\\\\d{3,7}|[13]\\\\d{7})|(?:10|20\\\\d)\\\\d{7})|9\\\\d{9,10}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2-$3-$4\",[\"17[0-3589]|2[4-9]|[34]\",\"17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]\"],\"8 0$1\"],[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2-$3-$4\",[\"1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])\",\"1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])\"],\"8 0$1\"],[\"(\\\\d{4})(\\\\d{2})(\\\\d{3})\",\"$1 $2-$3\",[\"1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])\",\"1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])\"],\"8 0$1\"],[\"([89]\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"8[01]|9\"],\"8 $1\"],[\"(82\\\\d)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"82\"],\"8 $1\"],[\"(800)(\\\\d{3})\",\"$1 $2\",[\"800\"],\"8 $1\"],[\"(800)(\\\\d{2})(\\\\d{2,4})\",\"$1 $2 $3\",[\"800\"],\"8 $1\"]],\"8\",null,\"8?0?\"],\"BZ\":[\"501\",\"[2-8]\\\\d{6}|0\\\\d{10}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1-$2\",[\"[2-8]\"]],[\"(0)(800)(\\\\d{4})(\\\\d{3})\",\"$1-$2-$3-$4\",[\"080\",\"0800\"]]]],\"CA\":[\"1\",\"[2-9]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,null,[\"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\\\d{6}\",null,\"8(?:00|33|44|55|66|77|88)[2-9]\\\\d{6}\",\"900[2-9]\\\\d{6}\",\"5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\\\d{6}\"]],\"CC\":[\"61\",\"[1458]\\\\d{5,9}\",[[\"([2378])(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"[2378]\"],\"(0$1)\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"14|[45]\"],\"0$1\"],[\"(16)(\\\\d{3,4})\",\"$1 $2\",[\"16\"],\"0$1\"],[\"(16)(\\\\d{3})(\\\\d{2,4})\",\"$1 $2 $3\",[\"16\"],\"0$1\"],[\"(1[389]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1[389]0\",\"1(?:[38]0|9)0\"]],[\"(180)(2\\\\d{3})\",\"$1 $2\",[\"180\",\"1802\"]],[\"(19\\\\d)(\\\\d{3})\",\"$1 $2\",[\"19[13]\"]],[\"(19\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"19[679]\"]],[\"(13)(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\",[\"13[1-9]\"]]],\"0\",null,null,null,null,null,[\"8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:08|22|68)|4[29]8|62\\\\d|70[23]|959))\\\\d{3}\",\"14(?:5\\\\d|71)\\\\d{5}|4(?:[0-3]\\\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\\\d{6}\",\"180(?:0\\\\d{3}|2)\\\\d{3}\",\"19(?:0[0126]\\\\d|[679])\\\\d{5}\",\"500\\\\d{6}\",null,null,null,\"550\\\\d{6}\",\"13(?:00\\\\d{2})?\\\\d{4}\"]],\"CD\":[\"243\",\"[2-6]\\\\d{6}|[18]\\\\d{6,8}|9\\\\d{8}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"12\"]],[\"([89]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"8[0-2459]|9\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"88\"]],[\"(\\\\d{2})(\\\\d{5})\",\"$1 $2\",[\"[1-6]\"]]],\"0\",\"0$1\"],\"CF\":[\"236\",\"[278]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]]],\"CG\":[\"242\",\"[028]\\\\d{8}\",[[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"801\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[02]\"]],[\"(\\\\d)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"800\"]]]],\"CH\":[\"41\",\"[2-9]\\\\d{8}|860\\\\d{9}\",[[\"([2-9]\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[2-7]|[89]1\"]],[\"([89]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"8[047]|90\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4 $5\",[\"860\"]]],\"0\",\"0$1\"],\"CI\":[\"225\",\"[02-8]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]]],\"CK\":[\"682\",\"[2-8]\\\\d{4}\",[[\"(\\\\d{2})(\\\\d{3})\",\"$1 $2\"]]],\"CL\":[\"56\",\"1230\\\\d{7}|[2-46-9]\\\\d{8,10}|5[1-3578]\\\\d{7}\",[[\"(\\\\d)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"2[23]\"],\"($1)\"],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[357]|4[1-35]|6[13-57]\"],\"($1)\"],[\"(9)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"9\"]],[\"(44)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"44\"]],[\"([68]00)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[68]00\"],\"$1\"],[\"(600)(\\\\d{3})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"600\"],\"$1\"],[\"(1230)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"123\",\"1230\"],\"$1\"],[\"(\\\\d{5})(\\\\d{4})\",\"$1 $2\",[\"219\"],\"($1)\"]],\"0\",\"0$1\",\"0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))\"],\"CM\":[\"237\",\"[2368]\\\\d{7,8}\",[[\"([26])(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4 $5\",[\"[26]\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[23]|88\"]]]],\"CN\":[\"86\",\"[1-7]\\\\d{6,11}|8[0-357-9]\\\\d{6,9}|9\\\\d{7,10}\",[[\"([48]00)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[48]00\"]],[\"(\\\\d{2})(\\\\d{5,6})\",\"$1 $2\",[\"(?:10|2\\\\d)[19]\",\"(?:10|2\\\\d)(?:10|9[56])\",\"(?:10|2\\\\d)(?:100|9[56])\"],\"0$1\"],[\"(\\\\d{3})(\\\\d{5,6})\",\"$1 $2\",[\"[3-9]\",\"[3-9]\\\\d\\\\d[19]\",\"[3-9]\\\\d\\\\d(?:10|9[56])\"],\"0$1\"],[\"(21)(\\\\d{4})(\\\\d{4,6})\",\"$1 $2 $3\",[\"21\"],\"0$1\",\"true\"],[\"([12]\\\\d)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"10[1-9]|2[02-9]\",\"10[1-9]|2[02-9]\",\"10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]\"],\"0$1\",\"true\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])\"],\"0$1\",\"true\"],[\"(\\\\d{3})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)\"],\"0$1\",\"true\"],[\"(\\\\d{4})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"807\",\"8078\"],\"0$1\",\"true\"],[\"(\\\\d{3})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"1(?:[3-57-9]|66)\"]],[\"(10800)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"108\",\"1080\",\"10800\"]],[\"(\\\\d{3})(\\\\d{7,8})\",\"$1 $2\",[\"950\"]]],\"0\",null,\"(1(?:[129]\\\\d{3}|79\\\\d{2}))|0\"],\"CO\":[\"57\",\"(?:[13]\\\\d{0,3}|[24-8])\\\\d{7}\",[[\"(\\\\d)(\\\\d{7})\",\"$1 $2\",[\"1(?:[2-7]|8[2-9]|9[0-3])|[24-8]\",\"1(?:[2-7]|8[2-9]|9(?:09|[1-3]))|[24-8]\"],\"($1)\"],[\"(\\\\d{3})(\\\\d{7})\",\"$1 $2\",[\"3\"]],[\"(1)(\\\\d{3})(\\\\d{7})\",\"$1-$2-$3\",[\"1(?:80|9[04])\",\"1(?:800|9(?:0[01]|4[78]))\"],\"0$1\",null,\"$1 $2 $3\"]],\"0\",null,\"0([3579]|4(?:44|56))?\"],\"CR\":[\"506\",\"[24-9]\\\\d{7,9}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"[24-7]|8[3-9]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1-$2-$3\",[\"[89]0\"]]],null,null,\"(19(?:0[012468]|1[09]|20|66|77|99))\"],\"CU\":[\"53\",\"[2-57]\\\\d{5,7}\",[[\"(\\\\d)(\\\\d{6,7})\",\"$1 $2\",[\"7\"]],[\"(\\\\d{2})(\\\\d{4,6})\",\"$1 $2\",[\"[2-4]\"]],[\"(\\\\d)(\\\\d{7})\",\"$1 $2\",[\"5\"],\"0$1\"]],\"0\",\"(0$1)\"],\"CV\":[\"238\",\"[259]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\"]]],\"CW\":[\"599\",\"[134679]\\\\d{6,7}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[13-7]\"]],[\"(9)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"9\"]]],null,null,null,null,null,null,[\"9(?:[48]\\\\d{2}|50\\\\d|7(?:2[0-24]|[34]\\\\d|6[35-7]|77|8[7-9]))\\\\d{4}\",\"9(?:5(?:[12467]\\\\d|3[01])|6(?:[15-9]\\\\d|3[01]))\\\\d{4}\",null,null,null,null,null,\"955\\\\d{5}\",null,\"60[0-2]\\\\d{4}\"]],\"CX\":[\"61\",\"[1458]\\\\d{5,9}\",[[\"([2378])(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"[2378]\"],\"(0$1)\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"14|[45]\"],\"0$1\"],[\"(16)(\\\\d{3,4})\",\"$1 $2\",[\"16\"],\"0$1\"],[\"(16)(\\\\d{3})(\\\\d{2,4})\",\"$1 $2 $3\",[\"16\"],\"0$1\"],[\"(1[389]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1[389]0\",\"1(?:[38]0|9)0\"]],[\"(180)(2\\\\d{3})\",\"$1 $2\",[\"180\",\"1802\"]],[\"(19\\\\d)(\\\\d{3})\",\"$1 $2\",[\"19[13]\"]],[\"(19\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"19[679]\"]],[\"(13)(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\",[\"13[1-9]\"]]],\"0\",null,null,null,null,null,[\"8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:21|49|78|81)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\\\d|7(?:0[01]|1[0-2])|958))\\\\d{3}\",\"14(?:5\\\\d|71)\\\\d{5}|4(?:[0-3]\\\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\\\d{6}\",\"180(?:0\\\\d{3}|2)\\\\d{3}\",\"19(?:0[0126]\\\\d|[679])\\\\d{5}\",\"500\\\\d{6}\",null,null,null,\"550\\\\d{6}\",\"13(?:00\\\\d{2})?\\\\d{4}\"]],\"CY\":[\"357\",\"[257-9]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{6})\",\"$1 $2\"]]],\"CZ\":[\"420\",\"[2-8]\\\\d{8}|9\\\\d{8,11}\",[[\"([2-9]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[2-8]|9[015-7]\"]],[\"(96\\\\d)(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"96\"]],[\"(9\\\\d)(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"9[36]\"]]]],\"DE\":[\"49\",\"[1-35-9]\\\\d{3,14}|4(?:[0-8]\\\\d{3,12}|9(?:[0-37]\\\\d|4(?:[1-35-8]|4\\\\d?)|5\\\\d{1,2}|6[1-8]\\\\d?)\\\\d{2,8})\",[[\"(1\\\\d{2})(\\\\d{7,8})\",\"$1 $2\",[\"1[67]\"]],[\"(15\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"15[0568]\"]],[\"(1\\\\d{3})(\\\\d{7})\",\"$1 $2\",[\"15\"]],[\"(\\\\d{2})(\\\\d{3,11})\",\"$1 $2\",[\"3[02]|40|[68]9\"]],[\"(\\\\d{3})(\\\\d{3,11})\",\"$1 $2\",[\"2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)\"]],[\"(\\\\d{4})(\\\\d{2,11})\",\"$1 $2\",[\"[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|[7-9](?:0[1-9]|[1-9])\",\"[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[1346]|8[13568])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|[7-9](?:0[1-9]|[1-9])\"]],[\"(3\\\\d{4})(\\\\d{1,10})\",\"$1 $2\",[\"3\"]],[\"(800)(\\\\d{7,12})\",\"$1 $2\",[\"800\"]],[\"(\\\\d{3})(\\\\d)(\\\\d{4,10})\",\"$1 $2 $3\",[\"1(?:37|80)|900\",\"1(?:37|80)|900[1359]\"]],[\"(1\\\\d{2})(\\\\d{5,11})\",\"$1 $2\",[\"181\"]],[\"(18\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"185\",\"1850\",\"18500\"]],[\"(18\\\\d{2})(\\\\d{7})\",\"$1 $2\",[\"18[68]\"]],[\"(18\\\\d)(\\\\d{8})\",\"$1 $2\",[\"18[2-579]\"]],[\"(700)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"700\"]],[\"(138)(\\\\d{4})\",\"$1 $2\",[\"138\"]],[\"(15[013-68])(\\\\d{2})(\\\\d{8})\",\"$1 $2 $3\",[\"15[013-68]\"]],[\"(15[279]\\\\d)(\\\\d{2})(\\\\d{7})\",\"$1 $2 $3\",[\"15[279]\"]],[\"(1[67]\\\\d)(\\\\d{2})(\\\\d{7,8})\",\"$1 $2 $3\",[\"1(?:6[023]|7)\"]]],\"0\",\"0$1\"],\"DJ\":[\"253\",\"[27]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]]],\"DK\":[\"45\",\"[2-9]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]]],\"DM\":[\"1\",\"[57-9]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"767\"],\"DO\":[\"1\",\"[589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"8[024]9\"],\"DZ\":[\"213\",\"(?:[1-4]|[5-9]\\\\d)\\\\d{7}\",[[\"([1-4]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[1-4]\"]],[\"([5-8]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[5-8]\"]],[\"(9\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"9\"]]],\"0\",\"0$1\"],\"EC\":[\"593\",\"1\\\\d{9,10}|[2-8]\\\\d{7}|9\\\\d{8}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2-$3\",[\"[247]|[356][2-8]\"],null,null,\"$1-$2-$3\"],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"9\"],\"0$1\"],[\"(1800)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"180\",\"1800\"],\"$1\"]],\"0\",\"(0$1)\"],\"EE\":[\"372\",\"[3-9]\\\\d{6,7}|800\\\\d{6,7}\",[[\"([3-79]\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]\",\"[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]\"]],[\"(70)(\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"70\"]],[\"(8000)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"800\",\"8000\"]],[\"([458]\\\\d{3})(\\\\d{3,4})\",\"$1 $2\",[\"40|5|8(?:00|[1-5])\",\"40|5|8(?:00[1-9]|[1-5])\"]]]],\"EG\":[\"20\",\"1\\\\d{4,9}|[24-6]\\\\d{8}|3\\\\d{7}|[89]\\\\d{8,9}\",[[\"(\\\\d)(\\\\d{7,8})\",\"$1 $2\",[\"[23]\"]],[\"(\\\\d{2})(\\\\d{6,7})\",\"$1 $2\",[\"1(?:3|5[239])|[4-6]|[89][2-9]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1[0-25]|[89]00\"]]],\"0\",\"0$1\"],\"EH\":[\"212\",\"[5-9]\\\\d{8}\",[[\"([5-7]\\\\d{2})(\\\\d{6})\",\"$1-$2\",[\"5(?:2[015-7]|3[0-4])|[67]\"]],[\"([58]\\\\d{3})(\\\\d{5})\",\"$1-$2\",[\"5(?:2[2-489]|3[5-9]|92)|892\",\"5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892\"]],[\"(5\\\\d{4})(\\\\d{4})\",\"$1-$2\",[\"5(?:29|38)\",\"5(?:29|38)[89]\"]],[\"([5]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"5(?:4[067]|5[03])\"]],[\"(8[09])(\\\\d{7})\",\"$1-$2\",[\"8(?:0|9[013-9])\"]]],\"0\",null,null,null,null,\"528[89]\"],\"ER\":[\"291\",\"[178]\\\\d{6}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\"]],\"0\",\"0$1\"],\"ES\":[\"34\",\"[5-9]\\\\d{8}\",[[\"([89]00)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[89]00\"]],[\"([5-9]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[568]|[79][0-8]\"]]]],\"ET\":[\"251\",\"[1-59]\\\\d{8}\",[[\"([1-59]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[1-59]\"]]],\"0\",\"0$1\"],\"FI\":[\"358\",\"1\\\\d{4,11}|[2-9]\\\\d{4,10}\",[[\"(\\\\d{3})(\\\\d{3,7})\",\"$1 $2\",[\"(?:[1-3]0|[6-8])0\"]],[\"(75\\\\d{3})\",\"$1\",[\"75[12]\"]],[\"(116\\\\d{3})\",\"$1\",[\"116\"],\"$1\"],[\"(\\\\d{2})(\\\\d{4,10})\",\"$1 $2\",[\"[14]|2[09]|50|7[135]\"]],[\"(\\\\d)(\\\\d{4,11})\",\"$1 $2\",[\"[25689][1-8]|3\"]]],\"0\",\"0$1\",null,null,null,null,[\"1(?:[3569][1-8]\\\\d{3,9}|[47]\\\\d{5,10})|2[1-8]\\\\d{3,9}|3(?:[1-8]\\\\d{3,9}|9\\\\d{4,8})|[5689][1-8]\\\\d{3,9}\",\"4(?:[0-8]\\\\d{4,9}|9\\\\d{3,8})|50\\\\d{4,8}\",\"800\\\\d{4,7}\",\"[67]00\\\\d{5,6}\",null,null,\"[13]0\\\\d{4,8}|2(?:0(?:[016-8]\\\\d{3,7}|[2-59]\\\\d{2,7})|9\\\\d{4,8})|60(?:[12]\\\\d{5,6}|6\\\\d{7})|7(?:1\\\\d{7}|3\\\\d{8}|5[03-9]\\\\d{3,7})\"]],\"FJ\":[\"679\",\"[2-9]\\\\d{6}|0\\\\d{10}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[2-9]\"]],[\"(\\\\d{4})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"0\"]]]],\"FK\":[\"500\",\"[2-7]\\\\d{4}\"],\"FM\":[\"691\",\"[39]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\"]]],\"FO\":[\"298\",\"[2-9]\\\\d{5}\",[[\"(\\\\d{6})\",\"$1\"]],null,null,\"(10(?:01|[12]0|88))\"],\"FR\":[\"33\",\"[1-9]\\\\d{8}\",[[\"([1-79])(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4 $5\",[\"[1-79]\"]],[\"(8\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"8\"],\"0 $1\"]],\"0\",\"0$1\"],\"GA\":[\"241\",\"0?\\\\d{7}\",[[\"(\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[2-7]\"],\"0$1\"],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"0\"]]]],\"GB\":[\"44\",\"\\\\d{7,10}\",[[\"(7\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"7(?:[1-57-9]|62)\",\"7(?:[1-57-9]|624)\"]],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"2|5[56]|7[06]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1(?:[02-9]1|1)|3|9[018]\"]],[\"(\\\\d{5})(\\\\d{4,5})\",\"$1 $2\",[\"1(?:38|5[23]|69|76|94)\",\"1(?:(?:38|69)7|5(?:24|39)|768|946)\",\"1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)\"]],[\"(1\\\\d{3})(\\\\d{5,6})\",\"$1 $2\",[\"1\"]],[\"(800)(\\\\d{4})\",\"$1 $2\",[\"800\",\"8001\",\"80011\",\"800111\",\"8001111\"]],[\"(845)(46)(4\\\\d)\",\"$1 $2 $3\",[\"845\",\"8454\",\"84546\",\"845464\"]],[\"(8\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"8(?:4[2-5]|7[0-3])\"]],[\"(80\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"80\"]],[\"(800)(\\\\d{6})\",\"$1 $2\",[\"800\"]]],\"0\",\"0$1\",null,null,null,null,[\"2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\\\d{7}|1(?:1(?:3[0-48]|[46][0-4]|5[0-26-9]|[78][0-49])|21[0-7]|31[0-8]|[4-69]1\\\\d)\\\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\\\d)|3(?:0\\\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[28][02-57-9]|[37]\\\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\\\d|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|8\\\\d|9[2-57]))\\\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\\\d)|276\\\\d|6(?:26[06-9]|686))|6(?:06(?:4\\\\d|7[4-79])|295[567]|35[34]\\\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\\\d{3}|176888[2-46-8]\\\\d{2}|16977[23]\\\\d{3}\",\"7(?:[1-3]\\\\d{3}|4(?:[0-46-9]\\\\d{2}|5(?:[0-689]\\\\d|7[0-57-9]))|5(?:0[0-8]|[13-9]\\\\d|2[0-35-9])\\\\d|7(?:0(?:0[01]|[1-9]\\\\d)|[1-7]\\\\d{2}|8[02-9]\\\\d|9[0-689]\\\\d)|8(?:[014-9]\\\\d|[23][0-8])\\\\d|9(?:[024-9]\\\\d{2}|1(?:[02-9]\\\\d|1[028])|3[0-689]\\\\d))\\\\d{5}\",\"80(?:0(?:1111|\\\\d{6,7})|8\\\\d{7})\",\"(?:87[123]|9(?:[01]\\\\d|8[2349]))\\\\d{7}\",\"70\\\\d{8}\",null,\"(?:3[0347]|55)\\\\d{8}\",\"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\\\d{6}\",\"56\\\\d{8}\",\"8(?:4(?:5464\\\\d|[2-5]\\\\d{7})|70\\\\d{7})\"]],\"GD\":[\"1\",\"[4589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"473\"],\"GE\":[\"995\",\"[34578]\\\\d{8}\",[[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[348]\"],\"0$1\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"7\"],\"0$1\"],[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"5\"]]],\"0\"],\"GF\":[\"594\",\"[56]\\\\d{8}\",[[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]],\"0\",\"0$1\"],\"GG\":[\"44\",\"[135789]\\\\d{6,9}\",[[\"(7\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"7(?:[1-57-9]|62)\",\"7(?:[1-57-9]|624)\"]],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"2|5[56]|7[06]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1(?:[02-9]1|1)|3|9[018]\"]],[\"(\\\\d{5})(\\\\d{4,5})\",\"$1 $2\",[\"1(?:38|5[23]|69|76|94)\",\"1(?:(?:38|69)7|5(?:24|39)|768|946)\",\"1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)\"]],[\"(1\\\\d{3})(\\\\d{5,6})\",\"$1 $2\",[\"1\"]],[\"(800)(\\\\d{4})\",\"$1 $2\",[\"800\",\"8001\",\"80011\",\"800111\",\"8001111\"]],[\"(845)(46)(4\\\\d)\",\"$1 $2 $3\",[\"845\",\"8454\",\"84546\",\"845464\"]],[\"(8\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"8(?:4[2-5]|7[0-3])\"]],[\"(80\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"80\"]],[\"(800)(\\\\d{6})\",\"$1 $2\",[\"800\"]]],\"0\",null,null,null,null,null,[\"1481[25-9]\\\\d{5}\",\"7(?:781\\\\d|839\\\\d|911[17])\\\\d{5}\",\"80(?:0(?:1111|\\\\d{6,7})|8\\\\d{7})\",\"(?:87[123]|9(?:[01]\\\\d|8[0-3]))\\\\d{7}\",\"70\\\\d{8}\",null,\"(?:3[0347]|55)\\\\d{8}\",\"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\\\d{6}\",\"56\\\\d{8}\",\"8(?:4(?:5464\\\\d|[2-5]\\\\d{7})|70\\\\d{7})\"]],\"GH\":[\"233\",\"[235]\\\\d{8}|8\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[235]\"]],[\"(\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"8\"]]],\"0\",\"0$1\"],\"GI\":[\"350\",\"[256]\\\\d{7}\",[[\"(\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"2\"]]]],\"GL\":[\"299\",\"[1-689]\\\\d{5}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\"]]],\"GM\":[\"220\",\"[2-9]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\"]]],\"GN\":[\"224\",\"[367]\\\\d{7,8}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"3\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[67]\"]]]],\"GP\":[\"590\",\"[56]\\\\d{8}\",[[\"([56]\\\\d{2})(\\\\d{2})(\\\\d{4})\",\"$1 $2-$3\",[\"590|69[01]\"]]],\"0\",\"0$1\",null,null,null,null,[\"590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\\\d)\\\\d{4}\",\"69(?:0\\\\d{2}|1(?:2[29]|3[0-5]))\\\\d{4}\"]],\"GQ\":[\"240\",\"[23589]\\\\d{8}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[235]\"]],[\"(\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"[89]\"]]]],\"GR\":[\"30\",\"[26-9]\\\\d{9}\",[[\"([27]\\\\d)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"21|7\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"2[2-9]1|[689]\"]],[\"(2\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"2[2-9][02-9]\"]]]],\"GT\":[\"502\",\"[2-7]\\\\d{7}|1[89]\\\\d{9}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"[2-7]\"]],[\"(\\\\d{4})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1\"]]]],\"GU\":[\"1\",\"[5689]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"671\"],\"GW\":[\"245\",\"(?:4(?:0\\\\d{5}|4\\\\d{7})|9\\\\d{8})\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"44|9[5-7]\"]],[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"40\"]]]],\"GY\":[\"592\",\"[2-46-9]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\"]]],\"HK\":[\"852\",\"[2-7]\\\\d{7}|8[0-3]\\\\d{6,7}|9\\\\d{4,10}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"[2-7]|[89](?:0[1-9]|[1-9])\"]],[\"(800)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"800\"]],[\"(900)(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"900\"]],[\"(900)(\\\\d{2,5})\",\"$1 $2\",[\"900\"]]]],\"HN\":[\"504\",\"[237-9]\\\\d{7}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1-$2\"]]],\"HR\":[\"385\",\"[1-7]\\\\d{5,8}|[89]\\\\d{6,8}\",[[\"(1)(\\\\d{4})(\\\\d{3})\",\"$1 $2 $3\",[\"1\"]],[\"([2-5]\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[2-5]\"]],[\"(9\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"9\"]],[\"(6[01])(\\\\d{2})(\\\\d{2,3})\",\"$1 $2 $3\",[\"6[01]\"]],[\"([67]\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[67]\"]],[\"(80[01])(\\\\d{2})(\\\\d{2,3})\",\"$1 $2 $3\",[\"80[01]\"]],[\"(80[01])(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"80[01]\"]]],\"0\",\"0$1\"],\"HT\":[\"509\",\"[2-489]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\"]]],\"HU\":[\"36\",\"[1-9]\\\\d{7,8}\",[[\"(1)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[2-9]\"]]],\"06\",\"($1)\"],\"ID\":[\"62\",\"(?:[1-79]\\\\d{6,10}|8\\\\d{7,11})\",[[\"(\\\\d{2})(\\\\d{5,8})\",\"$1 $2\",[\"2[124]|[36]1\"],\"(0$1)\"],[\"(\\\\d{3})(\\\\d{5,8})\",\"$1 $2\",[\"2[035-9]|[36][02-9]|[4579]\"],\"(0$1)\"],[\"(8\\\\d{2})(\\\\d{3,4})(\\\\d{3})\",\"$1-$2-$3\",[\"8[1-35-9]\"]],[\"(8\\\\d{2})(\\\\d{4})(\\\\d{4,5})\",\"$1-$2-$3\",[\"8[1-35-9]\"]],[\"(1)(500)(\\\\d{3})\",\"$1 $2 $3\",[\"150\",\"1500\"],\"$1\"],[\"(177)(\\\\d{6,8})\",\"$1 $2\",[\"177\"]],[\"(800)(\\\\d{5,7})\",\"$1 $2\",[\"800\"]],[\"(804)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"804\"]],[\"(80\\\\d)(\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"80[79]\"]]],\"0\",\"0$1\"],\"IE\":[\"353\",\"[124-9]\\\\d{6,9}\",[[\"(1)(\\\\d{3,4})(\\\\d{4})\",\"$1 $2 $3\",[\"1\"]],[\"(\\\\d{2})(\\\\d{5})\",\"$1 $2\",[\"2[24-9]|47|58|6[237-9]|9[35-9]\"]],[\"(\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"40[24]|50[45]\"]],[\"(48)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"48\"]],[\"(818)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"818\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[24-69]|7[14]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"76|8[35-9]\"],\"0$1\"],[\"(8\\\\d)(\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3 $4\",[\"8[35-9]5\"],\"0$1\"],[\"(700)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"700\"],\"0$1\"],[\"(\\\\d{4})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1(?:5|8[059])\",\"1(?:5|8[059]0)\"],\"$1\"]],\"0\",\"(0$1)\"],\"IL\":[\"972\",\"1\\\\d{6,11}|[2-589]\\\\d{3}(?:\\\\d{3,6})?|6\\\\d{3}|7\\\\d{6,9}\",[[\"([2-489])(\\\\d{3})(\\\\d{4})\",\"$1-$2-$3\",[\"[2-489]\"],\"0$1\"],[\"([57]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1-$2-$3\",[\"[57]\"],\"0$1\"],[\"(153)(\\\\d{1,2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3 $4\",[\"153\"]],[\"(1)([7-9]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1-$2-$3-$4\",[\"1[7-9]\"]],[\"(1255)(\\\\d{3})\",\"$1-$2\",[\"125\",\"1255\"]],[\"(1200)(\\\\d{3})(\\\\d{3})\",\"$1-$2-$3\",[\"120\",\"1200\"]],[\"(1212)(\\\\d{2})(\\\\d{2})\",\"$1-$2-$3\",[\"121\",\"1212\"]],[\"(1599)(\\\\d{6})\",\"$1-$2\",[\"159\",\"1599\"]],[\"(151)(\\\\d{1,2})(\\\\d{3})(\\\\d{4})\",\"$1-$2 $3-$4\",[\"151\"]],[\"(\\\\d{4})\",\"*$1\",[\"[2-689]\"]]],\"0\"],\"IM\":[\"44\",\"[135789]\\\\d{6,9}\",[[\"(7\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"7(?:[1-57-9]|62)\",\"7(?:[1-57-9]|624)\"]],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"2|5[56]|7[06]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1(?:[02-9]1|1)|3|9[018]\"]],[\"(\\\\d{5})(\\\\d{4,5})\",\"$1 $2\",[\"1(?:38|5[23]|69|76|94)\",\"1(?:(?:38|69)7|5(?:24|39)|768|946)\",\"1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)\"]],[\"(1\\\\d{3})(\\\\d{5,6})\",\"$1 $2\",[\"1\"]],[\"(800)(\\\\d{4})\",\"$1 $2\",[\"800\",\"8001\",\"80011\",\"800111\",\"8001111\"]],[\"(845)(46)(4\\\\d)\",\"$1 $2 $3\",[\"845\",\"8454\",\"84546\",\"845464\"]],[\"(8\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"8(?:4[2-5]|7[0-3])\"]],[\"(80\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"80\"]],[\"(800)(\\\\d{6})\",\"$1 $2\",[\"800\"]]],\"0\",null,null,null,null,null,[\"1624[5-8]\\\\d{5}\",\"7(?:4576|[59]24\\\\d|624[0-4689])\\\\d{5}\",\"808162\\\\d{4}\",\"(?:872299|90[0167]624)\\\\d{4}\",\"70\\\\d{8}\",null,\"3(?:08162\\\\d|3\\\\d{5}|4(?:40[49]06|5624\\\\d)|7(?:0624\\\\d|2299\\\\d))\\\\d{3}|55\\\\d{8}\",null,\"56\\\\d{8}\",\"8(?:4(?:40[49]06|5624\\\\d)|70624\\\\d)\\\\d{3}\"]],\"IN\":[\"91\",\"008\\\\d{9}|1\\\\d{7,12}|[2-9]\\\\d{9,10}\",[[\"(\\\\d{8})\",\"$1\",[\"561\",\"5616\",\"56161\"],\"$1\"],[\"(\\\\d{5})(\\\\d{5})\",\"$1 $2\",[\"6(?:[09]0|2[03689]|3[05-9])|7(?:[02-8]|19|9[037-9])|8(?:0[015-9]|[1-9])|9\",\"6(?:[09]0|2(?:0[01]|39|60|8[0-2]|9[04])|3(?:0[01]|5[0-2]|60|7[05]|81|9[03-5]))|7(?:[07]|19[0-5]|2(?:[0235-9]|[14][017-9])|3(?:[025-9]|[134][017-9])|4(?:[0-35689]|[47][017-9])|5(?:[02-46-9]|[15][017-9])|6(?:[02-9]|1[0-257-9])|8(?:[0-79]|8[0189])|9(?:[089]|31|7[02-9]))|8(?:0(?:[01589]|6[67]|7[02-9])|1(?:[0-57-9]|6[07-9])|2(?:[014][07-9]|[235-9])|3(?:[03-57-9]|[126][07-9])|[45]|6(?:[02457-9]|[136][07-9])|7(?:[078][07-9]|[1-69])|8(?:[0-25-9]|3[07-9]|4[047-9])|9(?:[02-9]|1[027-9]))|9\",\"6(?:[09]0|2(?:0[01]|39|60|8[0-2]|9[04])|3(?:0[01]|5[0-2]|60|7[05]|81|9[03-5]))|7(?:0|19[0-5]|2(?:[0235-79]|[14][017-9]|8(?:[0-69]|[78][089]))|3(?:[05-8]|1(?:[0189]|7[5-9])|2(?:[0-49][089]|[5-8])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|[2-5][089]|7[0189]))|4(?:[056]|1(?:[0135-9]|[24][089])|[29](?:[0-7][089]|[89])|3(?:[0-8][089]|9)|[47](?:[089]|11|7[02-8])|8(?:[0-24-7][089]|[389]))|5(?:[0346-9]|[15][017-9]|2(?:[03-9]|[12][089]))|6(?:[0346-9]|1[0-257-9]|2(?:[0-4]|[5-9][089])|5(?:[0-367][089]|[4589]))|7(?:0(?:[02-9]|1[089])|[1-9])|8(?:[0-79]|8(?:0[0189]|11|8[013-9]|9))|9(?:[089]|313|7(?:[02-8]|9[07-9])))|8(?:0(?:[01589]|6[67]|7(?:[02-8]|9[05-9]))|1(?:[02-57-9]|1(?:[0-35-9]|4[0-46-9])|6(?:[089]|7[02-8]))|2(?:0(?:[089]|7[02])|[14](?:[089]|7[02-8])|[235-9])|3(?:[03-57-9]|1(?:[089]|7[02-6])|2(?:[09]|77|8[0-689])|6(?:[089]|7[02-7]))|[45]|6(?:[02457-9]|[136](?:[089]|7[02-8]))|7(?:0[07-9]|[1-69]|[78](?:[089]|7[02-8]))|8(?:[0-25-9]|3(?:[089]|7[02-8])|4(?:[0489]|7[02-68]))|9(?:[02-9]|1(?:[0289]|7[2-6])))|9\"]],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"11|2[02]|33|4[04]|79[1-9]|80[2-46]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68][1-9]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)\"]],[\"(\\\\d{4})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1(?:[23579]|[468][1-9])|[2-8]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"008\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"140\"],\"$1\"],[\"(\\\\d{4})(\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"160\",\"1600\"],\"$1\"],[\"(\\\\d{4})(\\\\d{4,5})\",\"$1 $2\",[\"180\",\"1800\"],\"$1\"],[\"(\\\\d{4})(\\\\d{2,4})(\\\\d{4})\",\"$1 $2 $3\",[\"180\",\"1800\"],\"$1\"],[\"(\\\\d{4})(\\\\d{3,4})(\\\\d{4})\",\"$1 $2 $3\",[\"186\",\"1860\"],\"$1\"],[\"(\\\\d{4})(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"18[06]\"],\"$1\"]],\"0\",\"0$1\",null,null,true],\"IO\":[\"246\",\"3\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\"]]],\"IQ\":[\"964\",\"[1-7]\\\\d{7,9}\",[[\"(1)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1\"]],[\"([2-6]\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[2-6]\"]],[\"(7\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"7\"]]],\"0\",\"0$1\"],\"IR\":[\"98\",\"[1-8]\\\\d{5,9}|9(?:[0-4]\\\\d{8}|9\\\\d{8})\",[[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"[1-8]\"]],[\"(\\\\d{2})(\\\\d{4,5})\",\"$1 $2\",[\"[1-8]\"]],[\"(\\\\d{4,5})\",\"$1\",[\"96\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"9\"]]],\"0\",\"0$1\"],\"IS\":[\"354\",\"[4-9]\\\\d{6}|38\\\\d{7}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[4-9]\"]],[\"(3\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"3\"]]]],\"IT\":[\"39\",\"[01589]\\\\d{5,10}|3(?:[12457-9]\\\\d{8}|[36]\\\\d{7,9})\",[[\"(\\\\d{2})(\\\\d{3,4})(\\\\d{4})\",\"$1 $2 $3\",[\"0[26]|55\"]],[\"(0[26])(\\\\d{4})(\\\\d{5})\",\"$1 $2 $3\",[\"0[26]\"]],[\"(0[26])(\\\\d{4,6})\",\"$1 $2\",[\"0[26]\"]],[\"(0\\\\d{2})(\\\\d{3,4})(\\\\d{4})\",\"$1 $2 $3\",[\"0[13-57-9][0159]\"]],[\"(\\\\d{3})(\\\\d{3,6})\",\"$1 $2\",[\"0[13-57-9][0159]|8(?:03|4[17]|9[245])\",\"0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))\"]],[\"(0\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"0[13-57-9][2-46-8]\"]],[\"(0\\\\d{3})(\\\\d{2,6})\",\"$1 $2\",[\"0[13-57-9][2-46-8]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[13]|8(?:00|4[08]|9[59])\",\"[13]|8(?:00|4[08]|9(?:5[5-9]|9))\"]],[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"894\",\"894[5-9]\"]],[\"(\\\\d{3})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"3\"]]],null,null,null,null,null,null,[\"0(?:[26]\\\\d{4,9}|(?:1(?:[0159]\\\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\\\d{2,7})\",\"3(?:[12457-9]\\\\d{8}|6\\\\d{7,8}|3\\\\d{7,9})\",\"80(?:0\\\\d{6}|3\\\\d{3})\",\"0878\\\\d{5}|1(?:44|6[346])\\\\d{6}|89(?:2\\\\d{3}|4(?:[0-4]\\\\d{2}|[5-9]\\\\d{4})|5(?:[0-4]\\\\d{2}|[5-9]\\\\d{6})|9\\\\d{6})\",\"1(?:78\\\\d|99)\\\\d{6}\",null,null,null,\"55\\\\d{8}\",\"84(?:[08]\\\\d{6}|[17]\\\\d{3})\"]],\"JE\":[\"44\",\"[135789]\\\\d{6,9}\",[[\"(7\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"7(?:[1-57-9]|62)\",\"7(?:[1-57-9]|624)\"]],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"2|5[56]|7[06]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1(?:[02-9]1|1)|3|9[018]\"]],[\"(\\\\d{5})(\\\\d{4,5})\",\"$1 $2\",[\"1(?:38|5[23]|69|76|94)\",\"1(?:(?:38|69)7|5(?:24|39)|768|946)\",\"1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)\"]],[\"(1\\\\d{3})(\\\\d{5,6})\",\"$1 $2\",[\"1\"]],[\"(800)(\\\\d{4})\",\"$1 $2\",[\"800\",\"8001\",\"80011\",\"800111\",\"8001111\"]],[\"(845)(46)(4\\\\d)\",\"$1 $2 $3\",[\"845\",\"8454\",\"84546\",\"845464\"]],[\"(8\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"8(?:4[2-5]|7[0-3])\"]],[\"(80\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"80\"]],[\"(800)(\\\\d{6})\",\"$1 $2\",[\"800\"]]],\"0\",null,null,null,null,null,[\"1534[0-24-8]\\\\d{5}\",\"7(?:509\\\\d|7(?:00[378]|97[7-9])|829\\\\d|937\\\\d)\\\\d{5}\",\"80(?:07(?:35|81)|8901)\\\\d{4}\",\"(?:871206|90(?:066[59]|1810|71(?:07|55)))\\\\d{4}\",\"701511\\\\d{4}\",null,\"3(?:0(?:07(?:35|81)|8901)|3\\\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\\\d{4}|55\\\\d{8}\",\"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\\\d{6}\",\"56\\\\d{8}\",\"8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\\\d{4}\"]],\"JM\":[\"1\",\"[589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"876\"],\"JO\":[\"962\",\"[235-9]\\\\d{7,8}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[2356]|87\"],\"(0$1)\"],[\"(7)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"7[457-9]\"]],[\"(\\\\d{2})(\\\\d{7})\",\"$1 $2\",[\"70\"]],[\"(\\\\d{3})(\\\\d{5,6})\",\"$1 $2\",[\"8[0158]|9\"]]],\"0\",\"0$1\"],\"JP\":[\"81\",\"[1-9]\\\\d{8,9}|00(?:[36]\\\\d{7,14}|7\\\\d{5,7}|8\\\\d{7})\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1-$2-$3\",[\"(?:12|57|99)0\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1-$2-$3\",[\"800\"]],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1-$2-$3\",[\"[2579]0|80[1-9]\"]],[\"(\\\\d{4})(\\\\d)(\\\\d{4})\",\"$1-$2-$3\",[\"1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])\",\"1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))\",\"1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{4})\",\"$1-$2-$3\",[\"1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])\",\"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))\",\"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))\",\"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1-$2-$3\",[\"1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)\",\"1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])\",\"1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93(?:31|4))\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{4})\",\"$1-$2-$3\",[\"2(?:[34]7|[56]9|74|9[14-79])|82|993\"]],[\"(\\\\d)(\\\\d{4})(\\\\d{4})\",\"$1-$2-$3\",[\"3|4(?:2[09]|7[01])|6[1-9]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1-$2-$3\",[\"[2479][1-9]\"]]],\"0\",\"0$1\"],\"KE\":[\"254\",\"20\\\\d{6,7}|[4-9]\\\\d{6,9}\",[[\"(\\\\d{2})(\\\\d{5,7})\",\"$1 $2\",[\"[24-6]\"]],[\"(\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"7\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[89]\"]]],\"0\",\"0$1\",\"005|0\"],\"KG\":[\"996\",\"[235-8]\\\\d{8,9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[25-7]|31[25]\"]],[\"(\\\\d{4})(\\\\d{5})\",\"$1 $2\",[\"3(?:1[36]|[2-9])\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d)(\\\\d{3})\",\"$1 $2 $3 $4\",[\"8\"]]],\"0\",\"0$1\"],\"KH\":[\"855\",\"[1-9]\\\\d{7,9}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"1\\\\d[1-9]|[2-9]\"],\"0$1\"],[\"(1[89]00)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1[89]0\",\"1[89]00\"]]],\"0\"],\"KI\":[\"686\",\"[2458]\\\\d{4}|3\\\\d{4,7}|[67]\\\\d{7}\",[],null,null,\"0\"],\"KM\":[\"269\",\"[3478]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\"]]],\"KN\":[\"1\",\"[589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"869\"],\"KP\":[\"850\",\"1\\\\d{9}|[28]\\\\d{7}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1\"]],[\"(\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"2\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"8\"]]],\"0\",\"0$1\"],\"KR\":[\"82\",\"00(?:3\\\\d{8,9}|7\\\\d{9,11})|[1-7]\\\\d{4,9}|8\\\\d{8}\",[[\"(\\\\d{2})(\\\\d{3,4})\",\"$1-$2\",[\"(?:3[1-3]|[46][1-4]|5[1-5])1\"]],[\"(\\\\d{4})(\\\\d{4})\",\"$1-$2\",[\"1(?:5[246-9]|6[046-8]|8[03579])\",\"1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))\"],\"$1\"],[\"(\\\\d{5})\",\"$1\",[\"1[016-9]1\",\"1[016-9]11\",\"1[016-9]114\"]],[\"(\\\\d)(\\\\d{3,4})(\\\\d{4})\",\"$1-$2-$3\",[\"2[1-9]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1-$2-$3\",[\"60[2-9]|80\"]],[\"(\\\\d{2})(\\\\d{3,4})(\\\\d{4})\",\"$1-$2-$3\",[\"1[0-25-9]|(?:3[1-3]|[46][1-4]|5[1-5])[1-9]\"]],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1-$2-$3\",[\"[57]0\"]]],\"0\",\"0$1\",\"0(8[1-46-8]|85\\\\d{2})?\"],\"KW\":[\"965\",\"[12569]\\\\d{6,7}\",[[\"(\\\\d{4})(\\\\d{3,4})\",\"$1 $2\",[\"[16]|2(?:[0-35-9]|4[0-35-9])|52[25]|9[024-9]\"]],[\"(\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"244|5(?:[015]|6[56])\"]]]],\"KY\":[\"1\",\"[3589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"345\"],\"KZ\":[\"7\",\"(?:33\\\\d|7\\\\d{2}|80[089])\\\\d{7}\",[[\"([3489]\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2-$3-$4\",[\"[3489]\"]],[\"(7\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"7\"]]],\"8\",null,null,null,null,null,[\"33622\\\\d{5}|7(?:1(?:0(?:[23]\\\\d|4[0-3]|59|63)|1(?:[23]\\\\d|4[0-79]|59)|2(?:[23]\\\\d|59)|3(?:2\\\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\\\d|3[013-9]|5[1-9])|5(?:2\\\\d|3[1-9]|4[0-7]|59)|6(?:[234]\\\\d|5[19]|61)|72\\\\d|8(?:[27]\\\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\\\d|4[46-9]|5[3469])|2(?:2\\\\d|3[0679]|46|5[12679])|3(?:[234]\\\\d|5[139])|4(?:2\\\\d|3[1235-9]|59)|5(?:[23]\\\\d|4[01246-8]|59|61)|6(?:2\\\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\\\d|40|5[279])|8(?:[23]\\\\d|4[0-3]|59)|9(?:2\\\\d|3[124578]|59)))\\\\d{5}\",\"7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\\\d{7}\",\"800\\\\d{7}\",\"809\\\\d{7}\",\"808\\\\d{7}\",null,null,null,\"751\\\\d{7}\"]],\"LA\":[\"856\",\"[2-8]\\\\d{7,9}\",[[\"(20)(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"20\"]],[\"([2-8]\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"2[13]|3[14]|[4-8]\"]],[\"(30)(\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"30\"]]],\"0\",\"0$1\"],\"LB\":[\"961\",\"[13-9]\\\\d{6,7}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]\"],\"0$1\"],[\"([7-9]\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"7(?:[01]|6[013-9]|8[89]|9[1-3])|[89][01]\"]]],\"0\"],\"LC\":[\"1\",\"[5789]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"758\"],\"LI\":[\"423\",\"6\\\\d{8}|[23789]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\",[\"[237-9]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"6[56]\"]],[\"(69)(7\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"697\"]]],\"0\",null,\"0|10(?:01|20|66)\"],\"LK\":[\"94\",\"[1-9]\\\\d{8}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[1-689]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"7\"]]],\"0\",\"0$1\"],\"LR\":[\"231\",\"2\\\\d{7,8}|[378]\\\\d{8}|4\\\\d{6}|5\\\\d{6,8}\",[[\"(2\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"2\"]],[\"([4-5])(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[45]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[23578]\"]]],\"0\",\"0$1\"],\"LS\":[\"266\",\"[2568]\\\\d{7}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\"]]],\"LT\":[\"370\",\"[3-9]\\\\d{7}\",[[\"([34]\\\\d)(\\\\d{6})\",\"$1 $2\",[\"37|4(?:1|5[45]|6[2-4])\"]],[\"([3-6]\\\\d{2})(\\\\d{5})\",\"$1 $2\",[\"3[148]|4(?:[24]|6[09])|528|6\"]],[\"([7-9]\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"[7-9]\"],\"8 $1\"],[\"(5)(2\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"52[0-79]\"]]],\"8\",\"(8-$1)\",\"[08]\",null,true],\"LU\":[\"352\",\"[24-9]\\\\d{3,10}|3(?:[0-46-9]\\\\d{2,9}|5[013-9]\\\\d{1,8})\",[[\"(\\\\d{2})(\\\\d{3})\",\"$1 $2\",[\"[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\",[\"[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"20\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{1,2})\",\"$1 $2 $3 $4\",[\"2(?:[0367]|4[3-8])\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"20\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{1,2})\",\"$1 $2 $3 $4 $5\",[\"2(?:[0367]|4[3-8])\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{1,4})\",\"$1 $2 $3 $4\",[\"2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:0[2-9]|[1-9])|9(?:0[2-46-9]|[1-9])\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"70|80[01]|90[015]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"6\"]]],null,null,\"(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\\\d)\"],\"LV\":[\"371\",\"[2689]\\\\d{7}\",[[\"([2689]\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[2689]\"]]]],\"LY\":[\"218\",\"[25679]\\\\d{8}\",[[\"([25-79]\\\\d)(\\\\d{7})\",\"$1-$2\",[\"[25-79]\"]]],\"0\",\"0$1\"],\"MA\":[\"212\",\"[5-9]\\\\d{8}\",[[\"([5-7]\\\\d{2})(\\\\d{6})\",\"$1-$2\",[\"5(?:2[015-7]|3[0-4])|[67]\"]],[\"([58]\\\\d{3})(\\\\d{5})\",\"$1-$2\",[\"5(?:2[2-489]|3[5-9]|92)|892\",\"5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892\"]],[\"(5\\\\d{4})(\\\\d{4})\",\"$1-$2\",[\"5(?:29|38)\",\"5(?:29|38)[89]\"]],[\"([5]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"5(?:4[067]|5[03])\"]],[\"(8[09])(\\\\d{7})\",\"$1-$2\",[\"8(?:0|9[013-9])\"]]],\"0\",\"0$1\",null,null,null,null,[\"5(?:2(?:[015-79]\\\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\\\d|3(?:[0-48]\\\\d|[57][2-9]|6[2-8]|9[3-9])\\\\d|4[067]\\\\d{2}|5[03]\\\\d{2})\\\\d{4}\",\"(?:6(?:[0-79]\\\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[07]))\\\\d{6}\",\"80\\\\d{7}\",\"89\\\\d{7}\",null,null,null,null,\"5924[01]\\\\d{4}\"]],\"MC\":[\"377\",\"[34689]\\\\d{7,8}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[39]\"],\"$1\"],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"4\"]],[\"(6)(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4 $5\",[\"6\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{2})\",\"$1 $2 $3\",[\"8\"],\"$1\"]],\"0\",\"0$1\"],\"MD\":[\"373\",\"[235-9]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"22|3\"]],[\"([25-7]\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"2[13-9]|[5-7]\"]],[\"([89]\\\\d{2})(\\\\d{5})\",\"$1 $2\",[\"[89]\"]]],\"0\",\"0$1\"],\"ME\":[\"382\",\"[2-9]\\\\d{7,8}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[2-57-9]|6[036-9]\"]]],\"0\",\"0$1\"],\"MF\":[\"590\",\"[56]\\\\d{8}\",[[\"([56]\\\\d{2})(\\\\d{2})(\\\\d{4})\",\"$1 $2-$3\",[\"590|69[01]\"]]],\"0\",null,null,null,null,null,[\"590(?:0[079]|13|2[79]|30|43|5[0-268]|7[79]|87)\\\\d{4}\",\"69(?:0\\\\d{2}|1(?:2[29]|3[0-5]))\\\\d{4}\"]],\"MG\":[\"261\",\"[23]\\\\d{8}\",[[\"([23]\\\\d)(\\\\d{2})(\\\\d{3})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[23]\"]]],\"0\",\"0$1\"],\"MH\":[\"692\",\"[2-6]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1-$2\"]],\"1\"],\"MK\":[\"389\",\"[2-578]\\\\d{7}\",[[\"(2)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"2\"]],[\"([347]\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[347]\"]],[\"([58]\\\\d{2})(\\\\d)(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[58]\"]]],\"0\",\"0$1\"],\"ML\":[\"223\",\"[246-9]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[246-9]\"]]]],\"MM\":[\"95\",\"[178]\\\\d{5,7}|[24-6]\\\\d{5,8}|9(?:[279]\\\\d{0,2}|5|[34]\\\\d{1,2}|6(?:\\\\d{1,2})?|8(?:\\\\d{2})?)\\\\d{6}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"1|2[245]\"]],[\"(2)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"251\"]],[\"(\\\\d)(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"16|2\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"432|67|81\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[4-8]\"]],[\"(9)(\\\\d{3})(\\\\d{4,6})\",\"$1 $2 $3\",[\"9(?:2[0-4]|[35-9]|4[137-9])\"]],[\"(9)([34]\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"9(?:3[0-36]|4[0-57-9])\"]],[\"(9)(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"92[56]\"]],[\"(9)(\\\\d{3})(\\\\d{3})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"93\"]]],\"0\",\"0$1\"],\"MN\":[\"976\",\"[12]\\\\d{7,9}|[57-9]\\\\d{7}\",[[\"([12]\\\\d)(\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"[12]1\"]],[\"([12]2\\\\d)(\\\\d{5,6})\",\"$1 $2\",[\"[12]2[1-3]\"]],[\"([12]\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"[12](?:27|[3-5])\",\"[12](?:27|[3-5]\\\\d)2\"]],[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"[57-9]\"],\"$1\"],[\"([12]\\\\d{4})(\\\\d{4,5})\",\"$1 $2\",[\"[12](?:27|[3-5])\",\"[12](?:27|[3-5]\\\\d)[4-9]\"]]],\"0\",\"0$1\"],\"MO\":[\"853\",\"[268]\\\\d{7}\",[[\"([268]\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[268]\"]]]],\"MP\":[\"1\",\"[5689]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"670\"],\"MQ\":[\"596\",\"[56]\\\\d{8}\",[[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]],\"0\",\"0$1\"],\"MR\":[\"222\",\"[2-48]\\\\d{7}\",[[\"([2-48]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[2-48]\"]]]],\"MS\":[\"1\",\"[5689]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"664\"],\"MT\":[\"356\",\"[2357-9]\\\\d{7}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\"]]],\"MU\":[\"230\",\"[2-9]\\\\d{6,7}\",[[\"([2-46-9]\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"[2-46-9]\"]],[\"(5\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"5\"]]]],\"MV\":[\"960\",\"[346-8]\\\\d{6,9}|9(?:00\\\\d{7}|\\\\d{6})\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1-$2\",[\"[3467]|9(?:0[1-9]|[1-9])\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[89]00\"]]]],\"MW\":[\"265\",\"(?:1(?:\\\\d{2})?|[2789]\\\\d{2})\\\\d{6}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1\"]],[\"(2\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"2\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[17-9]\"]]],\"0\",\"0$1\"],\"MX\":[\"52\",\"[1-9]\\\\d{9,10}\",[[\"([358]\\\\d)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"33|55|81\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]\"]],[\"(1)([358]\\\\d)(\\\\d{4})(\\\\d{4})\",\"044 $2 $3 $4\",[\"1(?:33|55|81)\"],\"$1\",null,\"$1 $2 $3 $4\"],[\"(1)(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"044 $2 $3 $4\",[\"1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])\"],\"$1\",null,\"$1 $2 $3 $4\"]],\"01\",\"01 $1\",\"0[12]|04[45](\\\\d{10})\",\"1$1\",true],\"MY\":[\"60\",\"[13-9]\\\\d{7,9}\",[[\"([4-79])(\\\\d{3})(\\\\d{4})\",\"$1-$2 $3\",[\"[4-79]\"],\"0$1\"],[\"(3)(\\\\d{4})(\\\\d{4})\",\"$1-$2 $3\",[\"3\"],\"0$1\"],[\"([18]\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1-$2 $3\",[\"1[02-46-9][1-9]|8\"],\"0$1\"],[\"(1)([36-8]00)(\\\\d{2})(\\\\d{4})\",\"$1-$2-$3-$4\",[\"1[36-8]0\",\"1[36-8]00\"]],[\"(11)(\\\\d{4})(\\\\d{4})\",\"$1-$2 $3\",[\"11\"],\"0$1\"],[\"(15[49])(\\\\d{3})(\\\\d{4})\",\"$1-$2 $3\",[\"15[49]\"],\"0$1\"]],\"0\"],\"MZ\":[\"258\",\"[28]\\\\d{7,8}\",[[\"([28]\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"2|8[2-7]\"]],[\"(80\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"80\"]]]],\"NA\":[\"264\",\"[68]\\\\d{7,8}\",[[\"(8\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"8[1-35]\"]],[\"(6\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"6\"]],[\"(88)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"88\"]],[\"(870)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"870\"]]],\"0\",\"0$1\"],\"NC\":[\"687\",\"[2-57-9]\\\\d{5}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1.$2.$3\",[\"[2-46-9]|5[0-4]\"]]]],\"NE\":[\"227\",\"[0289]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"09|[289]\"]],[\"(08)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"08\"]]]],\"NF\":[\"672\",\"[13]\\\\d{5}\",[[\"(\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"1\"]],[\"(\\\\d)(\\\\d{5})\",\"$1 $2\",[\"3\"]]]],\"NG\":[\"234\",\"[1-6]\\\\d{5,8}|9\\\\d{5,9}|[78]\\\\d{5,13}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[12]|9(?:0[3-9]|[1-9])\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{2,3})\",\"$1 $2 $3\",[\"[3-6]|7(?:0[1-9]|[1-79])|8[2-9]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"70|8[01]|90[235-9]\"]],[\"([78]00)(\\\\d{4})(\\\\d{4,5})\",\"$1 $2 $3\",[\"[78]00\"]],[\"([78]00)(\\\\d{5})(\\\\d{5,6})\",\"$1 $2 $3\",[\"[78]00\"]],[\"(78)(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"78\"]]],\"0\",\"0$1\"],\"NI\":[\"505\",\"[125-8]\\\\d{7}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\"]]],\"NL\":[\"31\",\"1\\\\d{4,8}|[2-7]\\\\d{8}|[89]\\\\d{6,9}\",[[\"([1-578]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]\"]],[\"([1-5]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1[16-8]|2[259]|3[124]|4[17-9]|5[124679]\"]],[\"(6)(\\\\d{8})\",\"$1 $2\",[\"6[0-57-9]\"]],[\"(66)(\\\\d{7})\",\"$1 $2\",[\"66\"]],[\"(14)(\\\\d{3,4})\",\"$1 $2\",[\"14\"],\"$1\"],[\"([89]0\\\\d)(\\\\d{4,7})\",\"$1 $2\",[\"[89]0\"]]],\"0\",\"0$1\"],\"NO\":[\"47\",\"0\\\\d{4}|[2-9]\\\\d{7}\",[[\"([489]\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"[489]\"]],[\"([235-7]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[235-7]\"]]],null,null,null,null,null,null,[\"(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\\\d{6}\",\"(?:4[015-8]|5[89]|87|9\\\\d)\\\\d{6}\",\"80[01]\\\\d{5}\",\"82[09]\\\\d{5}\",\"880\\\\d{5}\",null,\"0\\\\d{4}|81(?:0(?:0[7-9]|1\\\\d)|5\\\\d{2})\\\\d{3}\",null,\"85[0-5]\\\\d{5}\",\"810(?:0[0-6]|[2-8]\\\\d)\\\\d{3}\"]],\"NP\":[\"977\",\"[1-8]\\\\d{7}|9(?:[1-69]\\\\d{6,8}|7[2-6]\\\\d{5,7}|8\\\\d{8})\",[[\"(1)(\\\\d{7})\",\"$1-$2\",[\"1[2-6]\"]],[\"(\\\\d{2})(\\\\d{6})\",\"$1-$2\",[\"1[01]|[2-8]|9(?:[1-69]|7[15-9])\"]],[\"(9\\\\d{2})(\\\\d{7})\",\"$1-$2\",[\"9(?:6[013]|7[245]|8)\"],\"$1\"]],\"0\",\"0$1\"],\"NR\":[\"674\",\"[458]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\"]]],\"NU\":[\"683\",\"[1-5]\\\\d{3}\"],\"NZ\":[\"64\",\"6[235-9]\\\\d{6}|[2-57-9]\\\\d{7,9}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1-$2 $3\",[\"240|[346]|7[2-57-9]|9[1-9]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"21\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3,5})\",\"$1 $2 $3\",[\"2(?:1[1-9]|[69]|7[0-35-9])|70|86\"]],[\"(2\\\\d)(\\\\d{3,4})(\\\\d{4})\",\"$1 $2 $3\",[\"2[028]\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"90\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"2(?:10|74)|5|[89]0\"]]],\"0\",\"0$1\"],\"OM\":[\"968\",\"(?:5|[279]\\\\d)\\\\d{6}|800\\\\d{5,6}\",[[\"(2\\\\d)(\\\\d{6})\",\"$1 $2\",[\"2\"]],[\"([79]\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[79]\"]],[\"([58]00)(\\\\d{4,6})\",\"$1 $2\",[\"[58]00\"]]]],\"PA\":[\"507\",\"[1-9]\\\\d{6,7}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1-$2\",[\"[1-57-9]\"]],[\"(\\\\d{4})(\\\\d{4})\",\"$1-$2\",[\"6\"]]]],\"PE\":[\"51\",\"[14-9]\\\\d{7,8}\",[[\"(1)(\\\\d{7})\",\"$1 $2\",[\"1\"]],[\"([4-8]\\\\d)(\\\\d{6})\",\"$1 $2\",[\"[4-7]|8[2-4]\"]],[\"(\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"80\"]],[\"(9\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"9\"],\"$1\"]],\"0\",\"(0$1)\"],\"PF\":[\"689\",\"4\\\\d{5,7}|8\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"4[09]|8[79]\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\",[\"44\"]]]],\"PG\":[\"675\",\"[1-9]\\\\d{6,7}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[13-689]|27\"]],[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"20|7\"]]]],\"PH\":[\"63\",\"1\\\\d{10,12}|2\\\\d{5,7}|[3-7]\\\\d{8}|8\\\\d{7,9}|9\\\\d{9}\",[[\"(2)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"2\"],\"(0$1)\"],[\"(2)(\\\\d{5})\",\"$1 $2\",[\"2\"],\"(0$1)\"],[\"(\\\\d{4})(\\\\d{4,6})\",\"$1 $2\",[\"3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])\",\"3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))\"],\"(0$1)\"],[\"(\\\\d{5})(\\\\d{4})\",\"$1 $2\",[\"346|4(?:27|9[35])|883\",\"3469|4(?:279|9(?:30|56))|8834\"],\"(0$1)\"],[\"([3-8]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[3-8]\"],\"(0$1)\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"81|9\"],\"0$1\"],[\"(1800)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"180\",\"1800\"]],[\"(1800)(\\\\d{1,2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3 $4\",[\"180\",\"1800\"]]],\"0\"],\"PK\":[\"92\",\"1\\\\d{8}|[2-8]\\\\d{5,11}|9(?:[013-9]\\\\d{4,10}|2\\\\d(?:111\\\\d{6}|\\\\d{3,7}))\",[[\"([89]00)(\\\\d{3})(\\\\d{2})\",\"$1 $2 $3\",[\"[89]00\"],\"0$1\"],[\"(1\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"1\"],\"$1\"],[\"(\\\\d{2})(\\\\d{7,8})\",\"$1 $2\",[\"(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\"]],[\"(\\\\d{3})(\\\\d{6,7})\",\"$1 $2\",[\"2[349]|45|54|60|72|8[2-5]|9[2-469]\",\"(?:2[349]|45|54|60|72|8[2-5]|9[2-469])\\\\d[2-9]\"]],[\"(58\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"58[126]\"]],[\"(3\\\\d{2})(\\\\d{7})\",\"$1 $2\",[\"3\"],\"0$1\"],[\"(\\\\d{2})(111)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1\",\"(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11\",\"(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111\"]],[\"(\\\\d{3})(111)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3 $4\",[\"2[349]|45|54|60|72|8[2-5]|9[2-9]\",\"(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\\\d1\",\"(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\\\d11\",\"(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\\\d111\"]]],\"0\",\"(0$1)\"],\"PL\":[\"48\",\"[1-57-9]\\\\d{6,8}|6\\\\d{5,8}\",[[\"(\\\\d{3})(\\\\d{3})\",\"$1 $2\",[\"11[68]|64\"]],[\"(\\\\d{5})\",\"$1\",[\"19\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{2,3})\",\"$1 $2 $3\",[\"64\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"26|39|45|5[0137]|6[0469]|7[02389]|8[08]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]\"]]]],\"PM\":[\"508\",\"[45]\\\\d{5}\",[[\"([45]\\\\d)(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\",[\"[45]\"]]],\"0\",\"0$1\"],\"PR\":[\"1\",\"[5789]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"787|939\"],\"PS\":[\"970\",\"1\\\\d{9}|[24589]\\\\d{7,8}\",[[\"([2489])(2\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"[2489]2\"]],[\"(5[69]\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"5[69]\"]],[\"(1[78]00)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1[78]0\",\"1[78]00\"],\"$1\"]],\"0\",\"0$1\"],\"PT\":[\"351\",\"[2-46-9]\\\\d{8}\",[[\"(2\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"2[12]\"]],[\"([2-46-9]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"2[3-9]|[346-9]\"]]]],\"PW\":[\"680\",\"[2-8]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\"]]],\"PY\":[\"595\",\"5[0-5]\\\\d{4,7}|[2-46-9]\\\\d{5,8}\",[[\"(\\\\d{2})(\\\\d{5})\",\"$1 $2\",[\"[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]\"],\"(0$1)\"],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]\"],\"(0$1)\"],[\"(\\\\d{3})(\\\\d{3,6})\",\"$1 $2\",[\"[2-9]0\"],\"0$1\"],[\"(\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"9[1-9]\"],\"0$1\"],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"870\",\"8700\"]],[\"(\\\\d{3})(\\\\d{4,5})\",\"$1 $2\",[\"[2-8][1-9]\"],\"(0$1)\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[2-8][1-9]\"],\"0$1\"]],\"0\"],\"QA\":[\"974\",\"[2-8]\\\\d{6,7}\",[[\"([28]\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"[28]\"]],[\"([3-7]\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[3-7]\"]]]],\"RE\":[\"262\",\"[268]\\\\d{8}\",[[\"([268]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[268]\"]]],\"0\",\"0$1\",null,null,null,\"262|69|8\"],\"RO\":[\"40\",\"[23]\\\\d{5,8}|[7-9]\\\\d{8}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[23]1\"]],[\"(\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"[23]1\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[23][3-7]|[7-9]\"]],[\"(2\\\\d{2})(\\\\d{3})\",\"$1 $2\",[\"2[3-6]\"]]],\"0\",\"0$1\"],\"RS\":[\"381\",\"[126-9]\\\\d{4,11}|3(?:[0-79]\\\\d{3,10}|8[2-9]\\\\d{2,9})\",[[\"([23]\\\\d{2})(\\\\d{4,9})\",\"$1 $2\",[\"(?:2[389]|39)0\"]],[\"([1-3]\\\\d)(\\\\d{5,10})\",\"$1 $2\",[\"1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])\"]],[\"(6\\\\d)(\\\\d{6,8})\",\"$1 $2\",[\"6\"]],[\"([89]\\\\d{2})(\\\\d{3,9})\",\"$1 $2\",[\"[89]\"]],[\"(7[26])(\\\\d{4,9})\",\"$1 $2\",[\"7[26]\"]],[\"(7[08]\\\\d)(\\\\d{4,9})\",\"$1 $2\",[\"7[08]\"]]],\"0\",\"0$1\"],\"RU\":[\"7\",\"[347-9]\\\\d{9}\",[[\"([3489]\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2-$3-$4\",[\"[3489]\"]],[\"(7\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"7\"]]],\"8\",\"8 ($1)\",null,null,true,null,[\"(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\\\d{7}\",\"9\\\\d{9}\",\"80[04]\\\\d{7}\",\"80[39]\\\\d{7}\",\"808\\\\d{7}\"]],\"RW\":[\"250\",\"[027-9]\\\\d{7,8}\",[[\"(2\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"2\"]],[\"([7-9]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[7-9]\"],\"0$1\"],[\"(0\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"0\"]]],\"0\"],\"SA\":[\"966\",\"1\\\\d{7,8}|(?:[2-467]|92)\\\\d{7}|5\\\\d{8}|8\\\\d{9}\",[[\"([1-467])(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[1-467]\"]],[\"(1\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1[1-467]\"]],[\"(5\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"5\"]],[\"(92\\\\d{2})(\\\\d{5})\",\"$1 $2\",[\"92\"],\"$1\"],[\"(800)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"800\"],\"$1\"],[\"(811)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"811\"]]],\"0\",\"0$1\"],\"SB\":[\"677\",\"[1-9]\\\\d{4,6}\",[[\"(\\\\d{2})(\\\\d{5})\",\"$1 $2\",[\"[7-9]\"]]]],\"SC\":[\"248\",\"[24689]\\\\d{5,6}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[246]\"]]]],\"SD\":[\"249\",\"[19]\\\\d{8}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\"]],\"0\",\"0$1\"],\"SE\":[\"46\",\"[1-35-9]\\\\d{5,11}|4\\\\d{6,8}\",[[\"(8)(\\\\d{2,3})(\\\\d{2,3})(\\\\d{2})\",\"$1-$2 $3 $4\",[\"8\"],null,null,\"$1 $2 $3 $4\"],[\"([1-69]\\\\d)(\\\\d{2,3})(\\\\d{2})(\\\\d{2})\",\"$1-$2 $3 $4\",[\"1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90\"],null,null,\"$1 $2 $3 $4\"],[\"([1-469]\\\\d)(\\\\d{3})(\\\\d{2})\",\"$1-$2 $3\",[\"[12][136]|3[356]|4[0246]|6[03]|90\"],null,null,\"$1 $2 $3\"],[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1-$2 $3 $4\",[\"1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])\"],null,null,\"$1 $2 $3 $4\"],[\"(\\\\d{3})(\\\\d{2,3})(\\\\d{2})\",\"$1-$2 $3\",[\"1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])\"],null,null,\"$1 $2 $3\"],[\"(7\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1-$2 $3 $4\",[\"7\"],null,null,\"$1 $2 $3 $4\"],[\"(77)(\\\\d{2})(\\\\d{2})\",\"$1-$2$3\",[\"77\"],null,null,\"$1 $2 $3\"],[\"(20)(\\\\d{2,3})(\\\\d{2})\",\"$1-$2 $3\",[\"20\"],null,null,\"$1 $2 $3\"],[\"(9[034]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1-$2 $3 $4\",[\"9[034]\"],null,null,\"$1 $2 $3 $4\"],[\"(9[034]\\\\d)(\\\\d{4})\",\"$1-$2\",[\"9[034]\"],null,null,\"$1 $2\"],[\"(\\\\d{3})(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1-$2 $3 $4 $5\",[\"25[245]|67[3-6]\"],null,null,\"$1 $2 $3 $4 $5\"]],\"0\",\"0$1\"],\"SG\":[\"65\",\"[36]\\\\d{7}|[17-9]\\\\d{7,10}\",[[\"([3689]\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[369]|8[1-9]\"]],[\"(1[89]00)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1[89]0\",\"1[89]00\"]],[\"(7000)(\\\\d{4})(\\\\d{3})\",\"$1 $2 $3\",[\"700\",\"7000\"]],[\"(800)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"800\"]]]],\"SH\":[\"290\",\"[256]\\\\d{4}|8\\\\d{3}\",[],null,null,null,null,null,null,[\"2(?:[0-57-9]\\\\d|6[4-9])\\\\d{2}\",\"[56]\\\\d{4}\",null,null,null,null,null,null,\"262\\\\d{2}\"]],\"SI\":[\"386\",\"[1-7]\\\\d{6,7}|[89]\\\\d{4,7}\",[[\"(\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[12]|[34][24-8]|5[2-8]|7[3-8]\"],\"(0$1)\"],[\"([3-7]\\\\d)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[37][01]|4[0139]|51|6\"]],[\"([89][09])(\\\\d{3,6})\",\"$1 $2\",[\"[89][09]\"]],[\"([58]\\\\d{2})(\\\\d{5})\",\"$1 $2\",[\"59|8[1-3]\"]]],\"0\",\"0$1\"],\"SJ\":[\"47\",\"0\\\\d{4}|[45789]\\\\d{7}\",[[\"([489]\\\\d{2})(\\\\d{2})(\\\\d{3})\",\"$1 $2 $3\",[\"[489]\"]],[\"([235-7]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[235-7]\"]]],null,null,null,null,null,null,[\"79\\\\d{6}\",\"(?:4[015-8]|5[89]|9\\\\d)\\\\d{6}\",\"80[01]\\\\d{5}\",\"82[09]\\\\d{5}\",\"880\\\\d{5}\",null,\"0\\\\d{4}|81(?:0(?:0[7-9]|1\\\\d)|5\\\\d{2})\\\\d{3}\",null,\"85[0-5]\\\\d{5}\",\"810(?:0[0-6]|[2-8]\\\\d)\\\\d{3}\"]],\"SK\":[\"421\",\"(?:[2-68]\\\\d{5,8}|9\\\\d{6,8})\",[[\"(2)(1[67])(\\\\d{3,4})\",\"$1 $2 $3\",[\"21[67]\"]],[\"([3-5]\\\\d)(\\\\d{2})(\\\\d{2,3})\",\"$1 $2 $3\",[\"[3-5]\"]],[\"(2)(\\\\d{3})(\\\\d{3})(\\\\d{2})\",\"$1/$2 $3 $4\",[\"2\"]],[\"([3-5]\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1/$2 $3 $4\",[\"[3-5]\"]],[\"([689]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[689]\"]],[\"(9090)(\\\\d{3})\",\"$1 $2\",[\"909\",\"9090\"]]],\"0\",\"0$1\"],\"SL\":[\"232\",\"[2-9]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{6})\",\"$1 $2\"]],\"0\",\"(0$1)\"],\"SM\":[\"378\",\"[05-7]\\\\d{7,9}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[5-7]\"]],[\"(0549)(\\\\d{6})\",\"$1 $2\",[\"054\",\"0549\"],null,null,\"($1) $2\"],[\"(\\\\d{6})\",\"0549 $1\",[\"[89]\"],null,null,\"(0549) $1\"]],null,null,\"([89]\\\\d{5})\",\"0549$1\"],\"SN\":[\"221\",\"[3789]\\\\d{8}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[379]\"]],[\"(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"8\"]]]],\"SO\":[\"252\",\"[1-9]\\\\d{5,8}\",[[\"(\\\\d{6})\",\"$1\",[\"[134]\"]],[\"(\\\\d)(\\\\d{6})\",\"$1 $2\",[\"[13-5]|2[0-79]\"]],[\"(\\\\d)(\\\\d{7})\",\"$1 $2\",[\"24|[67]\"]],[\"(\\\\d{2})(\\\\d{4})\",\"$1 $2\",[\"8[125]\"]],[\"(\\\\d{2})(\\\\d{5,7})\",\"$1 $2\",[\"15|28|6[1-35-9]|799|9[2-9]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"3[59]|4[89]|6[24-6]|79|8[08]|90\"]]],\"0\"],\"SR\":[\"597\",\"[2-8]\\\\d{5,6}\",[[\"(\\\\d{3})(\\\\d{3})\",\"$1-$2\",[\"[2-4]|5[2-58]\"]],[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1-$2-$3\",[\"56\"]],[\"(\\\\d{3})(\\\\d{4})\",\"$1-$2\",[\"[6-8]\"]]]],\"SS\":[\"211\",\"[19]\\\\d{8}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",null,\"0$1\"]],\"0\"],\"ST\":[\"239\",\"[29]\\\\d{6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\"]]],\"SV\":[\"503\",\"[267]\\\\d{7}|[89]\\\\d{6}(?:\\\\d{4})?\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"[267]\"]],[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[89]\"]],[\"(\\\\d{3})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"[89]\"]]]],\"SX\":[\"1\",\"[5789]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"721\"],\"SY\":[\"963\",\"[1-59]\\\\d{7,8}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[1-5]\"]],[\"(9\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"9\"]]],\"0\",\"0$1\",null,null,true],\"SZ\":[\"268\",\"[027]\\\\d{7}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"[027]\"]]]],\"TA\":[\"290\",\"8\\\\d{3}\",[],null,null,null,null,null,null,[\"8\\\\d{3}\"]],\"TC\":[\"1\",\"[5689]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"649\"],\"TD\":[\"235\",\"[2679]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\"]]],\"TG\":[\"228\",\"[279]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[279]\"]]]],\"TH\":[\"66\",\"1\\\\d{8,9}|[2-9]\\\\d{7,8}\",[[\"(2)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"2\"]],[\"([13-9]\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"14|[3-9]\"]],[\"(1[89]00)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"1[89]0\",\"1[89]00\"],\"$1\"]],\"0\",\"0$1\"],\"TJ\":[\"992\",\"[3-57-9]\\\\d{8}\",[[\"([349]\\\\d{2})(\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"[34]7|91[78]\"]],[\"([457-9]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"4[148]|[578]|9(?:[0235-9]|1[59])\"]],[\"(331700)(\\\\d)(\\\\d{2})\",\"$1 $2 $3\",[\"331\",\"3317\",\"33170\",\"331700\"]],[\"(\\\\d{4})(\\\\d)(\\\\d{4})\",\"$1 $2 $3\",[\"3[1-5]\",\"3(?:[1245]|3(?:[02-9]|1[0-589]))\"]]],\"8\",null,null,null,true],\"TK\":[\"690\",\"[2-47]\\\\d{3,6}\"],\"TL\":[\"670\",\"[2-489]\\\\d{6}|7\\\\d{6,7}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[2-489]|70\"]],[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"7[3-8]\"]]]],\"TM\":[\"993\",\"[1-6]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2-$3-$4\",[\"12\"]],[\"(\\\\d{2})(\\\\d{6})\",\"$1 $2\",[\"6\"],\"8 $1\"],[\"(\\\\d{3})(\\\\d)(\\\\d{2})(\\\\d{2})\",\"$1 $2-$3-$4\",[\"13|[2-5]\"]]],\"8\",\"(8 $1)\"],\"TN\":[\"216\",\"[2-57-9]\\\\d{7}\",[[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\"]]],\"TO\":[\"676\",\"[02-8]\\\\d{4,6}\",[[\"(\\\\d{2})(\\\\d{3})\",\"$1-$2\",[\"[1-6]|7[0-4]|8[05]\"]],[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"7[5-9]|8[47-9]\"]],[\"(\\\\d{4})(\\\\d{3})\",\"$1 $2\",[\"0\"]]]],\"TR\":[\"90\",\"[2-589]\\\\d{9}|444\\\\d{4}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[23]|4(?:[0-35-9]|4[0-35-9])\"],\"(0$1)\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"5[02-69]\"],\"0$1\"],[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"51|[89]\"],\"0$1\"],[\"(444)(\\\\d{1})(\\\\d{3})\",\"$1 $2 $3\",[\"444\"]]],\"0\",null,null,null,true],\"TT\":[\"1\",\"[589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"868\"],\"TV\":[\"688\",\"[279]\\\\d{4,6}\"],\"TW\":[\"886\",\"2\\\\d{6,8}|[3-689]\\\\d{7,8}|7\\\\d{7,9}\",[[\"(20)(\\\\d)(\\\\d{4})\",\"$1 $2 $3\",[\"202\"]],[\"([258]0)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"20[013-9]|50[0-46-9]|80[0-79]\"]],[\"([2-8])(\\\\d{3,4})(\\\\d{4})\",\"$1 $2 $3\",[\"[25][2-8]|[346]|[78][1-9]\"]],[\"(9\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"9\"]],[\"(70)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"70\"]]],\"0\",\"0$1\"],\"TZ\":[\"255\",\"\\\\d{9}\",[[\"([24]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[24]\"]],[\"([67]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"[67]\"]],[\"([89]\\\\d{2})(\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"[89]\"]]],\"0\",\"0$1\"],\"UA\":[\"380\",\"[3-9]\\\\d{8}\",[[\"([3-9]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[38]9|4(?:[45][0-5]|87)|5(?:0|[67][37])|6[36-8]|7|9[1-9]\",\"[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9]\"]],[\"([3-689]\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"(?:3[1-8]|4[136-8])2|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90\",\"3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90\"]],[\"([3-6]\\\\d{3})(\\\\d{5})\",\"$1 $2\",[\"3(?:[1-46-8]|5[013-9])|4(?:[137][013-9]|[45][6-9]|6|8[4-6])|5(?:[1245][013-9]|3|6[0135689]|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])\",\"3(?:[1-46-8](?:[013-9]|22)|5[013-9])|4(?:[137][013-9]|[45][6-9]|6(?:[013-9]|22)|8[4-6])|5(?:[1245][013-9]|3|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])\"]]],\"0\",\"0$1\"],\"UG\":[\"256\",\"\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"20[0-8]|4(?:6[45]|[7-9])|[7-9]\",\"20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])|[7-9]\"]],[\"(\\\\d{2})(\\\\d{7})\",\"$1 $2\",[\"3|4(?:[1-5]|6[0-36-9])\"]],[\"(2024)(\\\\d{5})\",\"$1 $2\",[\"202\",\"2024\"]]],\"0\",\"0$1\"],\"US\":[\"1\",\"[2-9]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,true,null,[\"(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[02-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-258]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\\\d{6}\",null,\"8(?:00|33|44|55|66|77|88)[2-9]\\\\d{6}\",\"900[2-9]\\\\d{6}\",\"5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\\\d{6}\"]],\"UY\":[\"598\",\"[2489]\\\\d{6,7}\",[[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"[24]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"9[1-9]\"],\"0$1\"],[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[89]0\"],\"0$1\"]],\"0\"],\"UZ\":[\"998\",\"[679]\\\\d{8}\",[[\"([679]\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[679]\"]]],\"8\",\"8 $1\"],\"VA\":[\"39\",\"(?:0(?:878\\\\d{5}|6698\\\\d{5})|[1589]\\\\d{5,10}|3(?:[12457-9]\\\\d{8}|[36]\\\\d{7,9}))\",[[\"(\\\\d{2})(\\\\d{3,4})(\\\\d{4})\",\"$1 $2 $3\",[\"0[26]|55\"]],[\"(0[26])(\\\\d{4})(\\\\d{5})\",\"$1 $2 $3\",[\"0[26]\"]],[\"(0[26])(\\\\d{4,6})\",\"$1 $2\",[\"0[26]\"]],[\"(0\\\\d{2})(\\\\d{3,4})(\\\\d{4})\",\"$1 $2 $3\",[\"0[13-57-9][0159]\"]],[\"(\\\\d{3})(\\\\d{3,6})\",\"$1 $2\",[\"0[13-57-9][0159]|8(?:03|4[17]|9[245])\",\"0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))\"]],[\"(0\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"0[13-57-9][2-46-8]\"]],[\"(0\\\\d{3})(\\\\d{2,6})\",\"$1 $2\",[\"0[13-57-9][2-46-8]\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[13]|8(?:00|4[08]|9[59])\",\"[13]|8(?:00|4[08]|9(?:5[5-9]|9))\"]],[\"(\\\\d{4})(\\\\d{4})\",\"$1 $2\",[\"894\",\"894[5-9]\"]],[\"(\\\\d{3})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"3\"]]],null,null,null,null,null,null,[\"06698\\\\d{5}\",\"3(?:[12457-9]\\\\d{8}|6\\\\d{7,8}|3\\\\d{7,9})\",\"80(?:0\\\\d{6}|3\\\\d{3})\",\"0878\\\\d{5}|1(?:44|6[346])\\\\d{6}|89(?:2\\\\d{3}|4(?:[0-4]\\\\d{2}|[5-9]\\\\d{4})|5(?:[0-4]\\\\d{2}|[5-9]\\\\d{6})|9\\\\d{6})\",\"1(?:78\\\\d|99)\\\\d{6}\",null,null,null,\"55\\\\d{8}\",\"84(?:[08]\\\\d{6}|[17]\\\\d{3})\"]],\"VC\":[\"1\",\"[5789]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"784\"],\"VE\":[\"58\",\"[24589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{7})\",\"$1-$2\"]],\"0\",\"0$1\"],\"VG\":[\"1\",\"[2589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"284\"],\"VI\":[\"1\",\"[3589]\\\\d{9}\",[[\"(\\\\d{3})(\\\\d{3})(\\\\d{4})\",\"($1) $2-$3\",null,null,null,\"$1-$2-$3\"]],\"1\",null,null,null,null,\"340\"],\"VN\":[\"84\",\"1\\\\d{6,9}|2\\\\d{9}|6\\\\d{6,7}|7\\\\d{6}|8\\\\d{6,8}|9\\\\d{8}\",[[\"([17]99)(\\\\d{4})\",\"$1 $2\",[\"[17]99\"]],[\"(\\\\d{2})(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\",[\"2[48]\"]],[\"(80)(\\\\d{5})\",\"$1 $2\",[\"80\"]],[\"(69\\\\d)(\\\\d{4,5})\",\"$1 $2\",[\"69\"]],[\"(\\\\d{3})(\\\\d{4})(\\\\d{3})\",\"$1 $2 $3\",[\"2[0-35-79]\"]],[\"([89]\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"8(?:8|9[89])|9\"]],[\"(1[2689]\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"1(?:[26]|8[68]|99)\"]],[\"(86[89])(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"86[89]\"]],[\"(1[89]00)(\\\\d{4,6})\",\"$1 $2\",[\"1[89]0\",\"1[89]00\"],\"$1\"]],\"0\",\"0$1\",null,null,true],\"VU\":[\"678\",\"[2-57-9]\\\\d{4,6}\",[[\"(\\\\d{3})(\\\\d{4})\",\"$1 $2\",[\"[579]\"]]]],\"WF\":[\"681\",\"[4-8]\\\\d{5}\",[[\"(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3\"]]],\"WS\":[\"685\",\"[2-8]\\\\d{4,6}\",[[\"(8\\\\d{2})(\\\\d{3,4})\",\"$1 $2\",[\"8\"]],[\"(7\\\\d)(\\\\d{5})\",\"$1 $2\",[\"7\"]],[\"(\\\\d{5})\",\"$1\",[\"[2-6]\"]]]],\"YE\":[\"967\",\"[1-7]\\\\d{6,8}\",[[\"([1-7])(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[1-6]|7[24-68]\"]],[\"(7\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"7[0137]\"]]],\"0\",\"0$1\"],\"YT\":[\"262\",\"[268]\\\\d{8}\",[[\"([268]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})\",\"$1 $2 $3 $4\",[\"[268]\"]]],\"0\",null,null,null,null,\"269|63\"],\"ZA\":[\"27\",\"[1-79]\\\\d{8}|8\\\\d{4,8}\",[[\"(860)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"860\"]],[\"(\\\\d{2})(\\\\d{3,4})\",\"$1 $2\",[\"8[1-4]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{2,3})\",\"$1 $2 $3\",[\"8[1-4]\"]],[\"(\\\\d{2})(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"[1-79]|8(?:[0-57]|6[1-9])\"]]],\"0\",\"0$1\"],\"ZM\":[\"260\",\"[289]\\\\d{8}\",[[\"(\\\\d{2})(\\\\d{4})\",\"$1 $2\",null,\"$1\"],[\"([1-8])(\\\\d{2})(\\\\d{4})\",\"$1 $2 $3\",[\"[1-8]\"],\"$1\"],[\"([29]\\\\d)(\\\\d{7})\",\"$1 $2\",[\"[29]\"]],[\"(800)(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"800\"]]],\"0\",\"0$1\"],\"ZW\":[\"263\",\"2(?:[0-57-9]\\\\d{3,8}|6(?:[14]\\\\d{7}|\\\\d{4}))|[13-69]\\\\d{4,9}|7\\\\d{8}|8[06]\\\\d{5,8}\",[[\"([49])(\\\\d{3})(\\\\d{2,4})\",\"$1 $2 $3\",[\"4|9[2-9]\"]],[\"(7\\\\d)(\\\\d{3})(\\\\d{4})\",\"$1 $2 $3\",[\"7\"]],[\"(86\\\\d{2})(\\\\d{3})(\\\\d{3})\",\"$1 $2 $3\",[\"86[24]\"]],[\"([2356]\\\\d{2})(\\\\d{3,5})\",\"$1 $2\",[\"2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|7[1569]|8[37])|5[15][78]|6(?:[29]8|37|[68][78]|75)\"]],[\"(\\\\d{3})(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"2(?:1[39]|2[0157]|31|[56][14]|7[35]|84)|329\"]],[\"([1-356]\\\\d)(\\\\d{3,5})\",\"$1 $2\",[\"1[3-9]|2[02569]|3[0-69]|5[05689]|6\"]],[\"([235]\\\\d)(\\\\d{3})(\\\\d{3,4})\",\"$1 $2 $3\",[\"[23]9|54\"]],[\"([25]\\\\d{3})(\\\\d{3,5})\",\"$1 $2\",[\"(?:25|54)8\",\"258[23]|5483\"]],[\"(8\\\\d{3})(\\\\d{6})\",\"$1 $2\",[\"86\"]],[\"(80\\\\d)(\\\\d{4})\",\"$1 $2\",[\"80\"]]],\"0\",\"0$1\"],\"001\":[\"979\",\"\\\\d{9}\",[[\"(\\\\d)(\\\\d{4})(\\\\d{4})\",\"$1 $2 $3\"]]]}}");
      /***/
    },

    /***/
    "YqAc":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/library/modules/_uid.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function YqAc(module, exports) {
      var id = 0;
      var px = Math.random();

      module.exports = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
      };
      /***/

    },

    /***/
    "Z8xB":
    /*!*****************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/min-date/validator.js ***!
      \*****************************************************************************/

    /*! no static exports found */

    /***/
    function Z8xB(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.minDate = function (minDate) {
        if (!lang_1.isDate(minDate) && !(minDate instanceof Function)) {
          throw Error('minDate value must be or return a formatted date');
        }

        return function (control) {
          if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
          var d = new Date(control.value);
          if (!lang_1.isDate(d)) return {
            minDate: true
          };
          if (minDate instanceof Function) minDate = minDate();
          return d >= new Date(minDate) ? null : {
            minDate: true
          };
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "Z9J1":
    /*!********************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/credit-card/directive.js ***!
      \********************************************************************************/

    /*! no static exports found */

    /***/
    function Z9J1(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "+GCJ");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CREDIT_CARD_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return CreditCardValidator;
        }),
        multi: true
      };

      var CreditCardValidator = function () {
        function CreditCardValidator() {}

        CreditCardValidator.prototype.validate = function (c) {
          return _1.creditCard(c);
        };

        CreditCardValidator.??fac = function CreditCardValidator_Factory(t) {
          return new (t || CreditCardValidator)();
        };

        CreditCardValidator.??dir = ??ngcc0.????defineDirective({
          type: CreditCardValidator,
          selectors: [["", "creditCard", "", "formControlName", ""], ["", "creditCard", "", "formControl", ""], ["", "creditCard", "", "ngModel", ""]],
          features: [??ngcc0.????ProvidersFeature([CREDIT_CARD_VALIDATOR])]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(CreditCardValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
              providers: [CREDIT_CARD_VALIDATOR]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return CreditCardValidator;
      }();
      /** @nocollapse */


      CreditCardValidator.ctorParameters = function () {
        return [];
      };

      exports.CreditCardValidator = CreditCardValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "Zc3q":
    /*!***********************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/digits/index.js ***!
      \***********************************************************************/

    /*! no static exports found */

    /***/
    function Zc3q(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "m3//"));

      __export(__webpack_require__(
      /*! ./validator */
      "uqnF")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "a0xu":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/library/modules/_cof.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function a0xu(module, exports) {
      var toString = {}.toString;

      module.exports = function (it) {
        return toString.call(it).slice(8, -1);
      };
      /***/

    },

    /***/
    "bBy9":
    /*!******************************************************************!*\
      !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function bBy9(module, exports, __webpack_require__) {
      __webpack_require__(
      /*! ./es6.array.iterator */
      "w2d+");

      var global = __webpack_require__(
      /*! ./_global */
      "5T2Y");

      var hide = __webpack_require__(
      /*! ./_hide */
      "NegM");

      var Iterators = __webpack_require__(
      /*! ./_iterators */
      "SBuE");

      var TO_STRING_TAG = __webpack_require__(
      /*! ./_wks */
      "UWiX")('toStringTag');

      var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');

      for (var i = 0; i < DOMIterables.length; i++) {
        var NAME = DOMIterables[i];
        var Collection = global[NAME];
        var proto = Collection && Collection.prototype;
        if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
        Iterators[NAME] = Iterators.Array;
      }
      /***/

    },

    /***/
    "bsBO":
    /*!*************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/equal-to/index.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function bsBO(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "JRqA"));

      __export(__webpack_require__(
      /*! ./validator */
      "CYDh")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "bxr6":
    /*!*****************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/not-equal-to/index.js ***!
      \*****************************************************************************/

    /*! no static exports found */

    /***/
    function bxr6(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "8Mo4"));

      __export(__webpack_require__(
      /*! ./validator */
      "V1X5")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "ccE7":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_string-at.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function ccE7(module, exports, __webpack_require__) {
      var toInteger = __webpack_require__(
      /*! ./_to-integer */
      "Ojgd");

      var defined = __webpack_require__(
      /*! ./_defined */
      "Jes0"); // true  -> String#at
      // false -> String#codePointAt


      module.exports = function (TO_STRING) {
        return function (that, pos) {
          var s = String(defined(that));
          var i = toInteger(pos);
          var l = s.length;
          var a, b;
          if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
          a = s.charCodeAt(i);
          return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
        };
      };
      /***/

    },

    /***/
    "dC0+":
    /*!******************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/less-than/validator.js ***!
      \******************************************************************************/

    /*! no static exports found */

    /***/
    function dC0(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.lt = function (lt) {
        return function (control) {
          if (!lang_1.isPresent(lt)) return null;
          if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
          var v = +control.value;
          return v < +lt ? null : {
            lt: true
          };
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "e+d7":
    /*!************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/max/directive.js ***!
      \************************************************************************/

    /*! no static exports found */

    /***/
    function eD7(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "VsS8");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MAX_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return MaxValidator;
        }),
        multi: true
      };

      var MaxValidator = function () {
        function MaxValidator() {}

        MaxValidator.prototype.ngOnInit = function () {
          this.validator = _1.max(this.max);
        };

        MaxValidator.prototype.ngOnChanges = function (changes) {
          for (var key in changes) {
            if (key === 'max') {
              this.validator = _1.max(changes[key].currentValue);
              if (this.onChange) this.onChange();
            }
          }
        };

        MaxValidator.prototype.validate = function (c) {
          return this.validator(c);
        };

        MaxValidator.prototype.registerOnValidatorChange = function (fn) {
          this.onChange = fn;
        };

        MaxValidator.??fac = function MaxValidator_Factory(t) {
          return new (t || MaxValidator)();
        };

        MaxValidator.??dir = ??ngcc0.????defineDirective({
          type: MaxValidator,
          selectors: [["", "max", "", "formControlName", ""], ["", "max", "", "formControl", ""], ["", "max", "", "ngModel", ""]],
          inputs: {
            max: "max"
          },
          features: [??ngcc0.????ProvidersFeature([MAX_VALIDATOR]), ??ngcc0.????NgOnChangesFeature]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(MaxValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[max][formControlName],[max][formControl],[max][ngModel]',
              providers: [MAX_VALIDATOR]
            }]
          }], function () {
            return [];
          }, {
            max: [{
              type: core_1.Input
            }]
          });
        })();

        return MaxValidator;
      }();
      /** @nocollapse */


      MaxValidator.ctorParameters = function () {
        return [];
      };

      MaxValidator.propDecorators = {
        'max': [{
          type: core_1.Input
        }]
      };
      exports.MaxValidator = MaxValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "eUtF":
    /*!*****************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function eUtF(module, exports, __webpack_require__) {
      module.exports = !__webpack_require__(
      /*! ./_descriptors */
      "jmDH") && !__webpack_require__(
      /*! ./_fails */
      "KUxP")(function () {
        return Object.defineProperty(__webpack_require__(
        /*! ./_dom-create */
        "Hsns")('div'), 'a', {
          get: function get() {
            return 7;
          }
        }).a != 7;
      });
      /***/
    },

    /***/
    "eaoh":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_a-function.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function eaoh(module, exports) {
      module.exports = function (it) {
        if (typeof it != 'function') throw TypeError(it + ' is not a function!');
        return it;
      };
      /***/

    },

    /***/
    "f6dB":
    /*!*************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/uuid/validator.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function f6dB(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      var uuids = {
        '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
      };

      exports.uuid = function (version) {
        return function (control) {
          if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
          var v = control.value;
          var pattern = uuids[version] || uuids.all;
          return new RegExp(pattern).test(v) ? null : {
            uuid: true
          };
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "fNZA":
    /*!**************************************************************************!*\
      !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function fNZA(module, exports, __webpack_require__) {
      var classof = __webpack_require__(
      /*! ./_classof */
      "QMMT");

      var ITERATOR = __webpack_require__(
      /*! ./_wks */
      "UWiX")('iterator');

      var Iterators = __webpack_require__(
      /*! ./_iterators */
      "SBuE");

      module.exports = __webpack_require__(
      /*! ./_core */
      "WEpk").getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
      };
      /***/

    },

    /***/
    "fXsU":
    /*!*******************************************************************!*\
      !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function fXsU(module, exports, __webpack_require__) {
      var anObject = __webpack_require__(
      /*! ./_an-object */
      "5K7Z");

      var get = __webpack_require__(
      /*! ./core.get-iterator-method */
      "fNZA");

      module.exports = __webpack_require__(
      /*! ./_core */
      "WEpk").getIterator = function (it) {
        var iterFn = get(it);
        if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
        return anObject(iterFn.call(it));
      };
      /***/

    },

    /***/
    "fpC5":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function fpC5(module, exports, __webpack_require__) {
      var dP = __webpack_require__(
      /*! ./_object-dp */
      "2faE");

      var anObject = __webpack_require__(
      /*! ./_an-object */
      "5K7Z");

      var getKeys = __webpack_require__(
      /*! ./_object-keys */
      "w6GO");

      module.exports = __webpack_require__(
      /*! ./_descriptors */
      "jmDH") ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = getKeys(Properties);
        var length = keys.length;
        var i = 0;
        var P;

        while (length > i) {
          dP.f(O, P = keys[i++], Properties[P]);
        }

        return O;
      };
      /***/
    },

    /***/
    "gXvo":
    /*!*********************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/date/index.js ***!
      \*********************************************************************/

    /*! no static exports found */

    /***/
    function gXvo(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "909t"));

      __export(__webpack_require__(
      /*! ./validator */
      "wudF")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "hDam":
    /*!*********************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
      \*********************************************************************/

    /*! no static exports found */

    /***/
    function hDam(module, exports) {
      module.exports = function () {
        /* empty */
      };
      /***/

    },

    /***/
    "i1wc":
    /*!********************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/url/index.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function i1wc(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "7vZQ"));

      __export(__webpack_require__(
      /*! ./validator */
      "Peps")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "iCc5":
    /*!**************************************************************!*\
      !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function iCc5(module, exports, __webpack_require__) {
      "use strict";

      exports.__esModule = true;

      exports["default"] = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      /***/

    },

    /***/
    "j2DC":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function j2DC(module, exports, __webpack_require__) {
      "use strict";

      var create = __webpack_require__(
      /*! ./_object-create */
      "oVml");

      var descriptor = __webpack_require__(
      /*! ./_property-desc */
      "rr1i");

      var setToStringTag = __webpack_require__(
      /*! ./_set-to-string-tag */
      "RfKB");

      var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

      __webpack_require__(
      /*! ./_hide */
      "NegM")(IteratorPrototype, __webpack_require__(
      /*! ./_wks */
      "UWiX")('iterator'), function () {
        return this;
      });

      module.exports = function (Constructor, NAME, next) {
        Constructor.prototype = create(IteratorPrototype, {
          next: descriptor(1, next)
        });
        setToStringTag(Constructor, NAME + ' Iterator');
      };
      /***/

    },

    /***/
    "jmDH":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function jmDH(module, exports, __webpack_require__) {
      // Thank's IE8 for his funny defineProperty
      module.exports = !__webpack_require__(
      /*! ./_fails */
      "KUxP")(function () {
        return Object.defineProperty({}, 'a', {
          get: function get() {
            return 7;
          }
        }).a != 7;
      });
      /***/
    },

    /***/
    "k/8l":
    /*!***********************************************************!*\
      !*** ./node_modules/babel-runtime/core-js/is-iterable.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function k8l(module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(
        /*! core-js/library/fn/is-iterable */
        "VKFn"),
        __esModule: true
      };
      /***/
    },

    /***/
    "kTiW":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/library/modules/_redefine.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function kTiW(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! ./_hide */
      "NegM");
      /***/
    },

    /***/
    "kwZ1":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function kwZ1(module, exports, __webpack_require__) {
      "use strict"; // 19.1.2.1 Object.assign(target, source, ...)

      var DESCRIPTORS = __webpack_require__(
      /*! ./_descriptors */
      "jmDH");

      var getKeys = __webpack_require__(
      /*! ./_object-keys */
      "w6GO");

      var gOPS = __webpack_require__(
      /*! ./_object-gops */
      "mqlF");

      var pIE = __webpack_require__(
      /*! ./_object-pie */
      "NV0k");

      var toObject = __webpack_require__(
      /*! ./_to-object */
      "JB68");

      var IObject = __webpack_require__(
      /*! ./_iobject */
      "M1xp");

      var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

      module.exports = !$assign || __webpack_require__(
      /*! ./_fails */
      "KUxP")(function () {
        var A = {};
        var B = {}; // eslint-disable-next-line no-undef

        var S = Symbol();
        var K = 'abcdefghijklmnopqrst';
        A[S] = 7;
        K.split('').forEach(function (k) {
          B[k] = k;
        });
        return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
      }) ? function assign(target, source) {
        // eslint-disable-line no-unused-vars
        var T = toObject(target);
        var aLen = arguments.length;
        var index = 1;
        var getSymbols = gOPS.f;
        var isEnum = pIE.f;

        while (aLen > index) {
          var S = IObject(arguments[index++]);
          var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
          var length = keys.length;
          var j = 0;
          var key;

          while (length > j) {
            key = keys[j++];
            if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
          }
        }

        return T;
      } : $assign;
      /***/
    },

    /***/
    "ldVq":
    /*!******************************************************************!*\
      !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function ldVq(module, exports, __webpack_require__) {
      var classof = __webpack_require__(
      /*! ./_classof */
      "QMMT");

      var ITERATOR = __webpack_require__(
      /*! ./_wks */
      "UWiX")('iterator');

      var Iterators = __webpack_require__(
      /*! ./_iterators */
      "SBuE");

      module.exports = __webpack_require__(
      /*! ./_core */
      "WEpk").isIterable = function (it) {
        var O = Object(it);
        return O[ITERATOR] !== undefined || '@@iterator' in O // eslint-disable-next-line no-prototype-builtins
        || Iterators.hasOwnProperty(classof(O));
      };
      /***/

    },

    /***/
    "m3//":
    /*!***************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/digits/directive.js ***!
      \***************************************************************************/

    /*! no static exports found */

    /***/
    function m3(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "Zc3q");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DIGITS_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return DigitsValidator;
        }),
        multi: true
      };

      var DigitsValidator = function () {
        function DigitsValidator() {}

        DigitsValidator.prototype.validate = function (c) {
          return _1.digits(c);
        };

        DigitsValidator.??fac = function DigitsValidator_Factory(t) {
          return new (t || DigitsValidator)();
        };

        DigitsValidator.??dir = ??ngcc0.????defineDirective({
          type: DigitsValidator,
          selectors: [["", "digits", "", "formControlName", ""], ["", "digits", "", "formControl", ""], ["", "digits", "", "ngModel", ""]],
          features: [??ngcc0.????ProvidersFeature([DIGITS_VALIDATOR])]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(DigitsValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
              providers: [DIGITS_VALIDATOR]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return DigitsValidator;
      }();
      /** @nocollapse */


      DigitsValidator.ctorParameters = function () {
        return [];
      };

      exports.DigitsValidator = DigitsValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "mqlF":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function mqlF(module, exports) {
      exports.f = Object.getOwnPropertySymbols;
      /***/
    },

    /***/
    "o8NH":
    /*!*******************************************************************!*\
      !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function o8NH(module, exports, __webpack_require__) {
      // 19.1.3.1 Object.assign(target, source)
      var $export = __webpack_require__(
      /*! ./_export */
      "Y7ZC");

      $export($export.S + $export.F, 'Object', {
        assign: __webpack_require__(
        /*! ./_object-assign */
        "kwZ1")
      });
      /***/
    },

    /***/
    "oVml":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_object-create.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function oVml(module, exports, __webpack_require__) {
      // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
      var anObject = __webpack_require__(
      /*! ./_an-object */
      "5K7Z");

      var dPs = __webpack_require__(
      /*! ./_object-dps */
      "fpC5");

      var enumBugKeys = __webpack_require__(
      /*! ./_enum-bug-keys */
      "FpHa");

      var IE_PROTO = __webpack_require__(
      /*! ./_shared-key */
      "VVlx")('IE_PROTO');

      var Empty = function Empty() {
        /* empty */
      };

      var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

      var _createDict = function createDict() {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = __webpack_require__(
        /*! ./_dom-create */
        "Hsns")('iframe');

        var i = enumBugKeys.length;
        var lt = '<';
        var gt = '>';
        var iframeDocument;
        iframe.style.display = 'none';

        __webpack_require__(
        /*! ./_html */
        "MvwC").appendChild(iframe);

        iframe.src = 'javascript:'; // eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);

        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
        iframeDocument.close();
        _createDict = iframeDocument.F;

        while (i--) {
          delete _createDict[PROTOTYPE][enumBugKeys[i]];
        }

        return _createDict();
      };

      module.exports = Object.create || function create(O, Properties) {
        var result;

        if (O !== null) {
          Empty[PROTOTYPE] = anObject(O);
          result = new Empty();
          Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

          result[IE_PROTO] = O;
        } else result = _createDict();

        return Properties === undefined ? result : dPs(result, Properties);
      };
      /***/

    },

    /***/
    "oyJo":
    /*!*****************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/date-ios/directive.js ***!
      \*****************************************************************************/

    /*! no static exports found */

    /***/
    function oyJo(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "uxZz");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DATE_ISO_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return DateISOValidator;
        }),
        multi: true
      };

      var DateISOValidator = function () {
        function DateISOValidator() {}

        DateISOValidator.prototype.validate = function (c) {
          return _1.dateISO(c);
        };

        DateISOValidator.??fac = function DateISOValidator_Factory(t) {
          return new (t || DateISOValidator)();
        };

        DateISOValidator.??dir = ??ngcc0.????defineDirective({
          type: DateISOValidator,
          selectors: [["", "dateISO", "", "formControlName", ""], ["", "dateISO", "", "formControl", ""], ["", "dateISO", "", "ngModel", ""]],
          features: [??ngcc0.????ProvidersFeature([DATE_ISO_VALIDATOR])]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(DateISOValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
              providers: [DATE_ISO_VALIDATOR]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return DateISOValidator;
      }();
      /** @nocollapse */


      DateISOValidator.ctorParameters = function () {
        return [];
      };

      exports.DateISOValidator = DateISOValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "p4t6":
    /*!***********************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/number/index.js ***!
      \***********************************************************************/

    /*! no static exports found */

    /***/
    function p4t6(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "Aw+F"));

      __export(__webpack_require__(
      /*! ./validator */
      "Q/sY")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "qVEE":
    /*!*********************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/range-length/validator.js ***!
      \*********************************************************************************/

    /*! no static exports found */

    /***/
    function qVEE(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.rangeLength = function (rangeLength) {
        return function (control) {
          if (!lang_1.isPresent(rangeLength)) return null;
          if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
          var v = control.value;
          return v.length >= rangeLength[0] && v.length <= rangeLength[1] ? null : {
            rangeLength: true
          };
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "rg1z":
    /*!******************************************************!*\
      !*** ./node_modules/libphonenumber-js/es6/format.js ***!
      \******************************************************/

    /*! exports provided: default, FIRST_GROUP_PATTERN, format_national_number_using_format, format_national_number, choose_format_for_number, local_to_international_style */

    /***/
    function rg1z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return format;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FIRST_GROUP_PATTERN", function () {
        return FIRST_GROUP_PATTERN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "format_national_number_using_format", function () {
        return format_national_number_using_format;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "format_national_number", function () {
        return format_national_number;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "choose_format_for_number", function () {
        return choose_format_for_number;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "local_to_international_style", function () {
        return local_to_international_style;
      });
      /* harmony import */


      var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! babel-runtime/helpers/extends */
      "QbLZ");
      /* harmony import */


      var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! babel-runtime/core-js/get-iterator */
      "FyfS");
      /* harmony import */


      var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./common */
      "s/4N");
      /* harmony import */


      var _parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./parse */
      "Fh5j");
      /* harmony import */


      var _metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./metadata */
      "B/P3"); // This is a port of Google Android `libphonenumber`'s
      // `phonenumberutil.js` of 17th November, 2016.
      //
      // https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js


      var default_options = {
        formatExtension: function formatExtension(number, extension) {
          return number + ' ext. ' + extension;
        } // Formats a phone number
        //
        // Example use cases:
        //
        // ```js
        // format('8005553535', 'RU', 'International')
        // format('8005553535', 'RU', 'International', metadata)
        // format({ phone: '8005553535', country: 'RU' }, 'International')
        // format({ phone: '8005553535', country: 'RU' }, 'International', metadata)
        // format('+78005553535', 'National')
        // format('+78005553535', 'National', metadata)
        // ```
        //

      };

      function format(arg_1, arg_2, arg_3, arg_4, arg_5) {
        var _sort_out_arguments = sort_out_arguments(arg_1, arg_2, arg_3, arg_4, arg_5),
            input = _sort_out_arguments.input,
            format_type = _sort_out_arguments.format_type,
            options = _sort_out_arguments.options,
            metadata = _sort_out_arguments.metadata;

        var country_metadata = void 0;

        if (input.country) {
          country_metadata = metadata.countries[input.country];
        }

        var _parse_phone_number_a = Object(_parse__WEBPACK_IMPORTED_MODULE_3__["parse_phone_number_and_country_phone_code"])(input.phone, metadata),
            country_phone_code = _parse_phone_number_a.country_phone_code,
            number = _parse_phone_number_a.number;

        if (country_phone_code) {
          // Check country restriction
          if (input.country && country_metadata && country_phone_code !== Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(country_metadata)) {
            return input.phone;
          }

          country_metadata = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_metadata_by_country_phone_code"])(country_phone_code, metadata);
        }

        if (!country_metadata) {
          return input.phone;
        }

        switch (format_type) {
          case 'International':
            if (!number) {
              return '+' + Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(country_metadata);
            }

            var national_number = format_national_number(number, 'International', false, country_metadata);
            var international_number = '+' + Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(country_metadata) + ' ' + national_number;

            if (input.ext || input.ext === 0) {
              return options.formatExtension(international_number, input.ext);
            }

            return international_number;

          case 'E.164': // "International_plaintext" is deprecated

          case 'International_plaintext':
            // `E.164` doesn't define "phone number extensions".
            return '+' + Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(country_metadata) + input.phone;

          case 'RFC3966':
            return '+' + Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(country_metadata) + input.phone + (input.ext || input.ext === 0 ? ';ext=' + input.ext : '');

          case 'National':
            if (!number) {
              return '';
            }

            var _national_number = format_national_number(number, 'National', false, country_metadata);

            if (input.ext || input.ext === 0) {
              return options.formatExtension(_national_number, input.ext);
            }

            return _national_number;
        }
      } // This was originally set to $1 but there are some countries for which the
      // first group is not used in the national pattern (e.g. Argentina) so the $1
      // group does not match correctly.  Therefore, we use \d, so that the first
      // group actually used in the pattern will be matched.


      var FIRST_GROUP_PATTERN = /(\$\d)/;

      function format_national_number_using_format(number, format, international, enforce_national_prefix, country_metadata) {
        var format_pattern_matcher = new RegExp(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_pattern"])(format));
        var national_prefix_formatting_rule = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_national_prefix_formatting_rule"])(format, country_metadata); // National prefix is omitted if there's no national prefix formatting rule
        // set for this country, or when this rule is set but
        // national prefix is optional for this phone number format
        // (and it is not enforced explicitly)

        var national_prefix_may_be_omitted = !national_prefix_formatting_rule || national_prefix_formatting_rule && Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_national_prefix_is_optional_when_formatting"])(format, country_metadata) && !enforce_national_prefix;

        if (!international && !national_prefix_may_be_omitted) {
          return number.replace(format_pattern_matcher, Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_format"])(format).replace(FIRST_GROUP_PATTERN, national_prefix_formatting_rule));
        }

        var formatted_number = number.replace(format_pattern_matcher, international ? Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_international_format"])(format) : Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_format"])(format));

        if (international) {
          return local_to_international_style(formatted_number);
        }

        return formatted_number;
      }

      function format_national_number(number, format_as, enforce_national_prefix, country_metadata) {
        var format = choose_format_for_number(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_formats"])(country_metadata), number);

        if (!format) {
          return number;
        }

        return format_national_number_using_format(number, format, format_as === 'International', enforce_national_prefix, country_metadata);
      }

      function choose_format_for_number(available_formats, national_number) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(available_formats), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _format = _step.value; // Validate leading digits

            if (Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_leading_digits_patterns"])(_format).length > 0) {
              // The last leading_digits_pattern is used here, as it is the most detailed
              var last_leading_digits_pattern = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_leading_digits_patterns"])(_format)[Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_leading_digits_patterns"])(_format).length - 1]; // If leading digits don't match then move on to the next phone number format

              if (national_number.search(last_leading_digits_pattern) !== 0) {
                continue;
              }
            } // Check that the national number matches the phone number format regular expression


            if (Object(_common__WEBPACK_IMPORTED_MODULE_2__["matches_entirely"])(national_number, new RegExp(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_pattern"])(_format)))) {
              return _format;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } // Removes brackets and replaces dashes with spaces.
      //
      // E.g. "(999) 111-22-33" -> "999 111 22 33"
      //


      function local_to_international_style(local) {
        return local.replace(new RegExp('[' + _parse__WEBPACK_IMPORTED_MODULE_3__["VALID_PUNCTUATION"] + ']+', 'g'), ' ').trim();
      } // Sort out arguments


      function sort_out_arguments() {
        var arg_1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var arg_2 = arguments[1];
        var arg_3 = arguments[2];
        var arg_4 = arguments[3];
        var arg_5 = arguments[4];
        var input = void 0;
        var format_type = void 0;
        var options = void 0;
        var metadata = void 0; // Sort out arguments.
        // If the phone number is passed as a string.
        // `format('8005553535', ...)`.

        if (typeof arg_1 === 'string') {
          // If country code is supplied.
          // `format('8005553535', 'RU', 'National', [options], metadata)`.
          if (typeof arg_3 === 'string') {
            // Will be `parse()`d later in code
            input = {
              phone: arg_1,
              country: arg_2
            };
            format_type = arg_3;

            if (arg_5) {
              options = arg_4;
              metadata = arg_5;
            } else {
              metadata = arg_4;
            }
          } // Just an international phone number is supplied
          // `format('+78005553535', 'National', [options], metadata)`.
          else {
              // Will be `parse()`d later in code
              input = {
                phone: arg_1
              };

              if (typeof arg_2 !== 'string') {
                throw new Error('Format type argument not passed for `format()`');
              }

              format_type = arg_2;

              if (arg_4) {
                options = arg_3;
                metadata = arg_4;
              } else {
                metadata = arg_3;
              }
            }
        } // If the phone number is passed as a parsed number object.
        // `format({ phone: '8005553535', country: 'RU' }, 'National', [options], metadata)`.
        else {
            input = arg_1;
            format_type = arg_2;

            if (arg_4) {
              options = arg_3;
              metadata = arg_4;
            } else {
              metadata = arg_3;
            }
          } // Metadata is required.


        if (!metadata) {
          throw new Error('Metadata is required');
        } // Validate `format_type`.


        switch (format_type) {
          case 'International':
          case 'E.164': // "International_plaintext" is deprecated

          case 'International_plaintext':
          case 'National':
          case 'RFC3966':
            break;

          default:
            throw new Error('Unknown format type argument passed to "format()": "' + format_type + '"');
        } // Apply default options.


        if (options) {
          options = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, default_options, options);
        } else {
          options = default_options;
        }

        return {
          input: input,
          format_type: format_type,
          options: options,
          metadata: metadata
        };
      } //# sourceMappingURL=format.js.map

      /***/

    },

    /***/
    "rr1i":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function rr1i(module, exports) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };
      /***/

    },

    /***/
    "s/4N":
    /*!******************************************************!*\
      !*** ./node_modules/libphonenumber-js/es6/common.js ***!
      \******************************************************/

    /*! exports provided: matches_entirely */

    /***/
    function s4N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matches_entirely", function () {
        return matches_entirely;
      }); // Checks whether the entire input sequence can be matched
      // against the regular expression.


      function matches_entirely() {
        var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var regular_expression = arguments[1];

        if (typeof regular_expression === 'string') {
          regular_expression = '^(?:' + regular_expression + ')$';
        }

        var matched_groups = text.match(regular_expression);
        return matched_groups !== null && matched_groups[0].length === text.length;
      } //# sourceMappingURL=common.js.map

      /***/

    },

    /***/
    "sOqj":
    /*!******************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/not-equal/validator.js ***!
      \******************************************************************************/

    /*! no static exports found */

    /***/
    function sOqj(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.notEqual = function (val) {
        return function (control) {
          if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
          var v = control.value;
          return val !== v ? null : {
            notEqual: true
          };
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "sk9p":
    /*!*************************************************************!*\
      !*** ./node_modules/babel-runtime/helpers/slicedToArray.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function sk9p(module, exports, __webpack_require__) {
      "use strict";

      exports.__esModule = true;

      var _isIterable2 = __webpack_require__(
      /*! ../core-js/is-iterable */
      "k/8l");

      var _isIterable3 = _interopRequireDefault(_isIterable2);

      var _getIterator2 = __webpack_require__(
      /*! ../core-js/get-iterator */
      "FyfS");

      var _getIterator3 = _interopRequireDefault(_getIterator2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      exports["default"] = function () {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (var _i = (0, _getIterator3["default"])(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        }

        return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if ((0, _isIterable3["default"])(Object(arr))) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();
      /***/

    },

    /***/
    "tDxr":
    /*!***************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/base64/validator.js ***!
      \***************************************************************************/

    /*! no static exports found */

    /***/
    function tDxr(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.base64 = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = control.value;
        return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : {
          'base64': true
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "tEej":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_to-length.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function tEej(module, exports, __webpack_require__) {
      // 7.1.15 ToLength
      var toInteger = __webpack_require__(
      /*! ./_to-integer */
      "Ojgd");

      var min = Math.min;

      module.exports = function (it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
      };
      /***/

    },

    /***/
    "tLlQ":
    /*!**********************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/phone/index.js ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function tLlQ(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "LkSb"));

      __export(__webpack_require__(
      /*! ./validator */
      "vKVP")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "u93k":
    /*!*****************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/greater-than/index.js ***!
      \*****************************************************************************/

    /*! no static exports found */

    /***/
    function u93k(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "Dr03"));

      __export(__webpack_require__(
      /*! ./validator */
      "9pOy")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "uOPS":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/library/modules/_library.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function uOPS(module, exports) {
      module.exports = true;
      /***/
    },

    /***/
    "uqnF":
    /*!***************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/digits/validator.js ***!
      \***************************************************************************/

    /*! no static exports found */

    /***/
    function uqnF(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.digits = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = control.value;
        return /^\d+$/.test(v) ? null : {
          digits: true
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "uxZz":
    /*!*************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/date-ios/index.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function uxZz(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./directive */
      "oyJo"));

      __export(__webpack_require__(
      /*! ./validator */
      "QMtK")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "vBRJ":
    /*!*****************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/min-date/directive.js ***!
      \*****************************************************************************/

    /*! no static exports found */

    /***/
    function vBRJ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "7jy7");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MIN_DATE_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return MinDateValidator;
        }),
        multi: true
      };

      var MinDateValidator = function () {
        function MinDateValidator() {}

        MinDateValidator.prototype.ngOnInit = function () {
          this.validator = _1.minDate(this.minDate);
        };

        MinDateValidator.prototype.ngOnChanges = function (changes) {
          for (var key in changes) {
            if (key === 'minDate') {
              this.validator = _1.minDate(changes[key].currentValue);
              if (this.onChange) this.onChange();
            }
          }
        };

        MinDateValidator.prototype.validate = function (c) {
          return this.validator(c);
        };

        MinDateValidator.prototype.registerOnValidatorChange = function (fn) {
          this.onChange = fn;
        };

        MinDateValidator.??fac = function MinDateValidator_Factory(t) {
          return new (t || MinDateValidator)();
        };

        MinDateValidator.??dir = ??ngcc0.????defineDirective({
          type: MinDateValidator,
          selectors: [["", "minDate", "", "formControlName", ""], ["", "minDate", "", "formControl", ""], ["", "minDate", "", "ngModel", ""]],
          inputs: {
            minDate: "minDate"
          },
          features: [??ngcc0.????ProvidersFeature([MIN_DATE_VALIDATOR]), ??ngcc0.????NgOnChangesFeature]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(MinDateValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
              providers: [MIN_DATE_VALIDATOR]
            }]
          }], function () {
            return [];
          }, {
            minDate: [{
              type: core_1.Input
            }]
          });
        })();

        return MinDateValidator;
      }();
      /** @nocollapse */


      MinDateValidator.ctorParameters = function () {
        return [];
      };

      MinDateValidator.propDecorators = {
        'minDate': [{
          type: core_1.Input
        }]
      };
      exports.MinDateValidator = MinDateValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "vKVP":
    /*!**************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/phone/validator.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function vKVP(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var libphonenumber_js_1 = __webpack_require__(
      /*! libphonenumber-js */
      "PoRY");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.phone = function (country) {
        return function (control) {
          if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
          var v = control.value;
          return libphonenumber_js_1.isValidNumber({
            phone: v,
            country: country
          }) ? null : {
            phone: true
          };
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "w2d+":
    /*!********************************************************************!*\
      !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function w2d(module, exports, __webpack_require__) {
      "use strict";

      var addToUnscopables = __webpack_require__(
      /*! ./_add-to-unscopables */
      "hDam");

      var step = __webpack_require__(
      /*! ./_iter-step */
      "UO39");

      var Iterators = __webpack_require__(
      /*! ./_iterators */
      "SBuE");

      var toIObject = __webpack_require__(
      /*! ./_to-iobject */
      "NsO/"); // 22.1.3.4 Array.prototype.entries()
      // 22.1.3.13 Array.prototype.keys()
      // 22.1.3.29 Array.prototype.values()
      // 22.1.3.30 Array.prototype[@@iterator]()


      module.exports = __webpack_require__(
      /*! ./_iter-define */
      "MPFp")(Array, 'Array', function (iterated, kind) {
        this._t = toIObject(iterated); // target

        this._i = 0; // next index

        this._k = kind; // kind
        // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
      }, function () {
        var O = this._t;
        var kind = this._k;
        var index = this._i++;

        if (!O || index >= O.length) {
          this._t = undefined;
          return step(1);
        }

        if (kind == 'keys') return step(0, index);
        if (kind == 'values') return step(0, O[index]);
        return step(0, [index, O[index]]);
      }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

      Iterators.Arguments = Iterators.Array;
      addToUnscopables('keys');
      addToUnscopables('values');
      addToUnscopables('entries');
      /***/
    },

    /***/
    "w6GO":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function w6GO(module, exports, __webpack_require__) {
      // 19.1.2.14 / 15.2.3.14 Object.keys(O)
      var $keys = __webpack_require__(
      /*! ./_object-keys-internal */
      "5vMV");

      var enumBugKeys = __webpack_require__(
      /*! ./_enum-bug-keys */
      "FpHa");

      module.exports = Object.keys || function keys(O) {
        return $keys(O, enumBugKeys);
      };
      /***/

    },

    /***/
    "wudF":
    /*!*************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/date/validator.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function wudF(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.date = function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = control.value;
        return lang_1.isDate(v) ? null : {
          date: true
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "yTk+":
    /*!*********************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/range-length/directive.js ***!
      \*********************************************************************************/

    /*! no static exports found */

    /***/
    function yTk(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _1 = __webpack_require__(
      /*! ./ */
      "+FIL");

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RANGE_LENGTH_VALIDATOR = {
        provide: forms_1.NG_VALIDATORS,
        useExisting: core_1.forwardRef(function () {
          return RangeLengthValidator;
        }),
        multi: true
      };

      var RangeLengthValidator = function () {
        function RangeLengthValidator() {}

        RangeLengthValidator.prototype.ngOnInit = function () {
          this.validator = _1.rangeLength(this.rangeLength);
        };

        RangeLengthValidator.prototype.ngOnChanges = function (changes) {
          for (var key in changes) {
            if (key === 'rangeLength') {
              this.validator = _1.rangeLength(changes[key].currentValue);
              if (this.onChange) this.onChange();
            }
          }
        };

        RangeLengthValidator.prototype.validate = function (c) {
          return this.validator(c);
        };

        RangeLengthValidator.prototype.registerOnValidatorChange = function (fn) {
          this.onChange = fn;
        };

        RangeLengthValidator.??fac = function RangeLengthValidator_Factory(t) {
          return new (t || RangeLengthValidator)();
        };

        RangeLengthValidator.??dir = ??ngcc0.????defineDirective({
          type: RangeLengthValidator,
          selectors: [["", "rangeLength", "", "formControlName", ""], ["", "rangeLength", "", "formControl", ""], ["", "rangeLength", "", "ngModel", ""]],
          inputs: {
            rangeLength: "rangeLength"
          },
          features: [??ngcc0.????ProvidersFeature([RANGE_LENGTH_VALIDATOR]), ??ngcc0.????NgOnChangesFeature]
        });
        /*@__PURE__*/

        (function () {
          ??ngcc0.??setClassMetadata(RangeLengthValidator, [{
            type: core_1.Directive,
            args: [{
              selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
              providers: [RANGE_LENGTH_VALIDATOR]
            }]
          }], function () {
            return [];
          }, {
            rangeLength: [{
              type: core_1.Input
            }]
          });
        })();

        return RangeLengthValidator;
      }();
      /** @nocollapse */


      RangeLengthValidator.ctorParameters = function () {
        return [];
      };

      RangeLengthValidator.propDecorators = {
        'rangeLength': [{
          type: core_1.Input
        }]
      };
      exports.RangeLengthValidator = RangeLengthValidator; //# sourceMappingURL=directive.js.map

      /***/
    },

    /***/
    "yjOq":
    /*!**************************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/range/validator.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function yjOq(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var lang_1 = __webpack_require__(
      /*! ../util/lang */
      "XqUj");

      exports.range = function (range) {
        return function (control) {
          if (!lang_1.isPresent(range)) return null;
          if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
          var v = +control.value;
          return v >= range[0] && v <= range[1] ? null : {
            actualValue: v,
            requiredValue: range,
            range: true
          };
        };
      }; //# sourceMappingURL=validator.js.map

      /***/

    },

    /***/
    "ywVC":
    /*!****************************************************************!*\
      !*** ./node_modules/ng2-validation/__ivy_ngcc__/dist/index.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function ywVC(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var base64_1 = __webpack_require__(
      /*! ./base64 */
      "//6X");

      var credit_card_1 = __webpack_require__(
      /*! ./credit-card */
      "+GCJ");

      var date_1 = __webpack_require__(
      /*! ./date */
      "gXvo");

      var date_ios_1 = __webpack_require__(
      /*! ./date-ios */
      "uxZz");

      var digits_1 = __webpack_require__(
      /*! ./digits */
      "Zc3q");

      var email_1 = __webpack_require__(
      /*! ./email */
      "MBV4");

      var equal_1 = __webpack_require__(
      /*! ./equal */
      "RvEx");

      var equal_to_1 = __webpack_require__(
      /*! ./equal-to */
      "bsBO");

      var greater_than_1 = __webpack_require__(
      /*! ./greater-than */
      "u93k");

      var greater_than_equal_1 = __webpack_require__(
      /*! ./greater-than-equal */
      "N/Fk");

      var json_1 = __webpack_require__(
      /*! ./json */
      "34t3");

      var less_than_1 = __webpack_require__(
      /*! ./less-than */
      "9K0O");

      var less_than_equal_1 = __webpack_require__(
      /*! ./less-than-equal */
      "KEkc");

      var max_1 = __webpack_require__(
      /*! ./max */
      "VsS8");

      var max_date_1 = __webpack_require__(
      /*! ./max-date */
      "ThOI");

      var min_1 = __webpack_require__(
      /*! ./min */
      "NVqk");

      var min_date_1 = __webpack_require__(
      /*! ./min-date */
      "7jy7");

      var not_equal_1 = __webpack_require__(
      /*! ./not-equal */
      "+9C2");

      var not_equal_to_1 = __webpack_require__(
      /*! ./not-equal-to */
      "bxr6");

      var number_1 = __webpack_require__(
      /*! ./number */
      "p4t6");

      var phone_1 = __webpack_require__(
      /*! ./phone */
      "tLlQ");

      var range_1 = __webpack_require__(
      /*! ./range */
      "/1VP");

      var range_length_1 = __webpack_require__(
      /*! ./range-length */
      "+FIL");

      var url_1 = __webpack_require__(
      /*! ./url */
      "i1wc");

      var uuid_1 = __webpack_require__(
      /*! ./uuid */
      "0Pn3");

      exports.CustomValidators = {
        base64: base64_1.base64,
        creditCard: credit_card_1.creditCard,
        date: date_1.date,
        dateISO: date_ios_1.dateISO,
        digits: digits_1.digits,
        email: email_1.email,
        equal: equal_1.equal,
        equalTo: equal_to_1.equalTo,
        gt: greater_than_1.gt,
        gte: greater_than_equal_1.gte,
        json: json_1.json,
        lt: less_than_1.lt,
        lte: less_than_equal_1.lte,
        max: max_1.max,
        maxDate: max_date_1.maxDate,
        min: min_1.min,
        minDate: min_date_1.minDate,
        notEqual: not_equal_1.notEqual,
        notEqualTo: not_equal_to_1.notEqualTo,
        number: number_1.number,
        phone: phone_1.phone,
        range: range_1.range,
        rangeLength: range_length_1.rangeLength,
        url: url_1.url,
        uuid: uuid_1.uuid
      };

      var ??ngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ??ngcc1 = __webpack_require__(
      /*! ./base64/directive */
      "R74U");

      var ??ngcc2 = __webpack_require__(
      /*! ./credit-card/directive */
      "Z9J1");

      var ??ngcc3 = __webpack_require__(
      /*! ./date/directive */
      "909t");

      var ??ngcc4 = __webpack_require__(
      /*! ./date-ios/directive */
      "oyJo");

      var ??ngcc5 = __webpack_require__(
      /*! ./digits/directive */
      "m3//");

      var ??ngcc6 = __webpack_require__(
      /*! ./email/directive */
      "NLP6");

      var ??ngcc7 = __webpack_require__(
      /*! ./equal/directive */
      "Qj4I");

      var ??ngcc8 = __webpack_require__(
      /*! ./equal-to/directive */
      "JRqA");

      var ??ngcc9 = __webpack_require__(
      /*! ./greater-than/directive */
      "Dr03");

      var ??ngcc10 = __webpack_require__(
      /*! ./greater-than-equal/directive */
      "Td7W");

      var ??ngcc11 = __webpack_require__(
      /*! ./json/directive */
      "Pn9d");

      var ??ngcc12 = __webpack_require__(
      /*! ./less-than/directive */
      "QKLY");

      var ??ngcc13 = __webpack_require__(
      /*! ./less-than-equal/directive */
      "5YfH");

      var ??ngcc14 = __webpack_require__(
      /*! ./max/directive */
      "e+d7");

      var ??ngcc15 = __webpack_require__(
      /*! ./max-date/directive */
      "0r7J");

      var ??ngcc16 = __webpack_require__(
      /*! ./min/directive */
      "8OjS");

      var ??ngcc17 = __webpack_require__(
      /*! ./min-date/directive */
      "vBRJ");

      var ??ngcc18 = __webpack_require__(
      /*! ./not-equal/directive */
      "Njao");

      var ??ngcc19 = __webpack_require__(
      /*! ./not-equal-to/directive */
      "8Mo4");

      var ??ngcc20 = __webpack_require__(
      /*! ./number/directive */
      "Aw+F");

      var ??ngcc21 = __webpack_require__(
      /*! ./phone/directive */
      "LkSb");

      var ??ngcc22 = __webpack_require__(
      /*! ./range/directive */
      "LEOC");

      var ??ngcc23 = __webpack_require__(
      /*! ./range-length/directive */
      "yTk+");

      var ??ngcc24 = __webpack_require__(
      /*! ./url/directive */
      "7vZQ");

      var ??ngcc25 = __webpack_require__(
      /*! ./uuid/directive */
      "HmVp");

      var CUSTOM_FORM_DIRECTIVES = [base64_1.Base64Validator, credit_card_1.CreditCardValidator, date_1.DateValidator, date_ios_1.DateISOValidator, digits_1.DigitsValidator, email_1.EmailValidator, equal_1.EqualValidator, equal_to_1.EqualToValidator, greater_than_1.GreaterThanValidator, greater_than_equal_1.GreaterThanEqualValidator, json_1.JSONValidator, less_than_1.LessThanValidator, less_than_equal_1.LessThanEqualValidator, max_1.MaxValidator, max_date_1.MaxDateValidator, min_1.MinValidator, min_date_1.MinDateValidator, not_equal_1.NotEqualValidator, not_equal_to_1.NotEqualToValidator, number_1.NumberValidator, phone_1.PhoneValidator, range_1.RangeValidator, range_length_1.RangeLengthValidator, url_1.UrlValidator, uuid_1.UUIDValidator];

      var CustomFormsModule = function () {
        function CustomFormsModule() {}

        CustomFormsModule.??mod = ??ngcc0.????defineNgModule({
          type: CustomFormsModule
        });
        CustomFormsModule.??inj = ??ngcc0.????defineInjector({
          factory: function CustomFormsModule_Factory(t) {
            return new (t || CustomFormsModule)();
          }
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && ??ngcc0.????setNgModuleScope(CustomFormsModule, {
            declarations: [??ngcc1.Base64Validator, ??ngcc2.CreditCardValidator, ??ngcc3.DateValidator, ??ngcc4.DateISOValidator, ??ngcc5.DigitsValidator, ??ngcc6.EmailValidator, ??ngcc7.EqualValidator, ??ngcc8.EqualToValidator, ??ngcc9.GreaterThanValidator, ??ngcc10.GreaterThanEqualValidator, ??ngcc11.JSONValidator, ??ngcc12.LessThanValidator, ??ngcc13.LessThanEqualValidator, ??ngcc14.MaxValidator, ??ngcc15.MaxDateValidator, ??ngcc16.MinValidator, ??ngcc17.MinDateValidator, ??ngcc18.NotEqualValidator, ??ngcc19.NotEqualToValidator, ??ngcc20.NumberValidator, ??ngcc21.PhoneValidator, ??ngcc22.RangeValidator, ??ngcc23.RangeLengthValidator, ??ngcc24.UrlValidator, ??ngcc25.UUIDValidator],
            exports: [??ngcc1.Base64Validator, ??ngcc2.CreditCardValidator, ??ngcc3.DateValidator, ??ngcc4.DateISOValidator, ??ngcc5.DigitsValidator, ??ngcc6.EmailValidator, ??ngcc7.EqualValidator, ??ngcc8.EqualToValidator, ??ngcc9.GreaterThanValidator, ??ngcc10.GreaterThanEqualValidator, ??ngcc11.JSONValidator, ??ngcc12.LessThanValidator, ??ngcc13.LessThanEqualValidator, ??ngcc14.MaxValidator, ??ngcc15.MaxDateValidator, ??ngcc16.MinValidator, ??ngcc17.MinDateValidator, ??ngcc18.NotEqualValidator, ??ngcc19.NotEqualToValidator, ??ngcc20.NumberValidator, ??ngcc21.PhoneValidator, ??ngcc22.RangeValidator, ??ngcc23.RangeLengthValidator, ??ngcc24.UrlValidator, ??ngcc25.UUIDValidator]
          });
        })();
        /*@__PURE__*/


        (function () {
          ??ngcc0.??setClassMetadata(CustomFormsModule, [{
            type: core_1.NgModule,
            args: [{
              declarations: [CUSTOM_FORM_DIRECTIVES],
              exports: [CUSTOM_FORM_DIRECTIVES]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return CustomFormsModule;
      }();
      /** @nocollapse */


      CustomFormsModule.ctorParameters = function () {
        return [];
      };

      exports.CustomFormsModule = CustomFormsModule;
      exports.Base64Validator = ??ngcc1.Base64Validator;
      exports.CreditCardValidator = ??ngcc2.CreditCardValidator;
      exports.DateValidator = ??ngcc3.DateValidator;
      exports.DateISOValidator = ??ngcc4.DateISOValidator;
      exports.DigitsValidator = ??ngcc5.DigitsValidator;
      exports.EmailValidator = ??ngcc6.EmailValidator;
      exports.EqualValidator = ??ngcc7.EqualValidator;
      exports.EqualToValidator = ??ngcc8.EqualToValidator;
      exports.GreaterThanValidator = ??ngcc9.GreaterThanValidator;
      exports.GreaterThanEqualValidator = ??ngcc10.GreaterThanEqualValidator;
      exports.JSONValidator = ??ngcc11.JSONValidator;
      exports.LessThanValidator = ??ngcc12.LessThanValidator;
      exports.LessThanEqualValidator = ??ngcc13.LessThanEqualValidator;
      exports.MaxValidator = ??ngcc14.MaxValidator;
      exports.MaxDateValidator = ??ngcc15.MaxDateValidator;
      exports.MinValidator = ??ngcc16.MinValidator;
      exports.MinDateValidator = ??ngcc17.MinDateValidator;
      exports.NotEqualValidator = ??ngcc18.NotEqualValidator;
      exports.NotEqualToValidator = ??ngcc19.NotEqualToValidator;
      exports.NumberValidator = ??ngcc20.NumberValidator;
      exports.PhoneValidator = ??ngcc21.PhoneValidator;
      exports.RangeValidator = ??ngcc22.RangeValidator;
      exports.RangeLengthValidator = ??ngcc23.RangeLengthValidator;
      exports.UrlValidator = ??ngcc24.UrlValidator;
      exports.UUIDValidator = ??ngcc25.UUIDValidator; //# sourceMappingURL=index.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=default~authentication-authentication-module~forms-forms-module-es5.js.map