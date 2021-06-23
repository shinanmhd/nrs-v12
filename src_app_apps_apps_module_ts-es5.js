(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["src_app_apps_apps_module_ts"], {
    /***/
    56675:
    /*!**********************************************************************!*\
      !*** ./node_modules/@mattlewis92/dom-autoscroller/dist/bundle.es.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      function getDef(f, d) {
        if (typeof f === 'undefined') {
          return typeof d === 'undefined' ? f : d;
        }

        return f;
      }

      function _boolean(func, def) {
        func = getDef(func, def);

        if (typeof func === 'function') {
          return function f() {
            var arguments$1 = arguments;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments$1[_key];
            }

            return !!func.apply(this, args);
          };
        }

        return !!func ? function () {
          return true;
        } : function () {
          return false;
        };
      }

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      /**
       * Returns `true` if provided input is Element.
       * @name isElement
       * @param {*} [input]
       * @returns {boolean}
       */


      var isElement$1 = function isElement$1(input) {
        return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
      };

      function indexOfElement(elements, element) {
        element = resolveElement(element, true);

        if (!isElement$1(element)) {
          return -1;
        }

        for (var i = 0; i < elements.length; i++) {
          if (elements[i] === element) {
            return i;
          }
        }

        return -1;
      }

      function hasElement(elements, element) {
        return -1 !== indexOfElement(elements, element);
      }

      function pushElements(elements, toAdd) {
        for (var i = 0; i < toAdd.length; i++) {
          if (!hasElement(elements, toAdd[i])) {
            elements.push(toAdd[i]);
          }
        }

        return toAdd;
      }

      function addElements(elements) {
        var arguments$1 = arguments;
        var toAdd = [],
            len = arguments.length - 1;

        while (len-- > 0) {
          toAdd[len] = arguments$1[len + 1];
        }

        toAdd = toAdd.map(resolveElement);
        return pushElements(elements, toAdd);
      }

      function removeElements(elements) {
        var arguments$1 = arguments;
        var toRemove = [],
            len = arguments.length - 1;

        while (len-- > 0) {
          toRemove[len] = arguments$1[len + 1];
        }

        return toRemove.map(resolveElement).reduce(function (last, e) {
          var index = indexOfElement(elements, e);

          if (index !== -1) {
            return last.concat(elements.splice(index, 1));
          }

          return last;
        }, []);
      }

      function resolveElement(element, noThrow) {
        if (typeof element === 'string') {
          try {
            return document.querySelector(element);
          } catch (e) {
            throw e;
          }
        }

        if (!isElement$1(element) && !noThrow) {
          throw new TypeError(element + " is not a DOM element.");
        }

        return element;
      }

      function createPointCB(object, options) {
        // A persistent object (as opposed to returned object) is used to save memory
        // This is good to prevent layout thrashing, or for games, and such
        // NOTE
        // This uses IE fixes which should be OK to remove some day. :)
        // Some speed will be gained by removal of these.
        // pointCB should be saved in a variable on return
        // This allows the usage of element.removeEventListener
        options = options || {};

        var allowUpdate = _boolean(options.allowUpdate, true);
        /*if(typeof options.allowUpdate === 'function'){
            allowUpdate = options.allowUpdate;
        }else{
            allowUpdate = function(){return true;};
        }*/


        return function pointCB(event) {
          event = event || window.event; // IE-ism

          object.target = event.target || event.srcElement || event.originalTarget;
          object.element = this;
          object.type = event.type;

          if (!allowUpdate(event)) {
            return;
          } // Support touch
          // http://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644


          if (event.targetTouches) {
            object.x = event.targetTouches[0].clientX;
            object.y = event.targetTouches[0].clientY;
            object.pageX = event.targetTouches[0].pageX;
            object.pageY = event.targetTouches[0].pageY;
            object.screenX = event.targetTouches[0].screenX;
            object.screenY = event.targetTouches[0].screenY;
          } else {
            // If pageX/Y aren't available and clientX/Y are,
            // calculate pageX/Y - logic taken from jQuery.
            // (This is to support old IE)
            // NOTE Hopefully this can be removed soon.
            if (event.pageX === null && event.clientX !== null) {
              var eventDoc = event.target && event.target.ownerDocument || document;
              var doc = eventDoc.documentElement;
              var body = eventDoc.body;
              object.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
              object.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
            } else {
              object.pageX = event.pageX;
              object.pageY = event.pageY;
            } // pageX, and pageY change with page scroll
            // so we're not going to use those for x, and y.
            // NOTE Most browsers also alias clientX/Y with x/y
            // so that's something to consider down the road.


            object.x = event.clientX;
            object.y = event.clientY;
            object.screenX = event.screenX;
            object.screenY = event.screenY;
          }

          object.clientX = object.x;
          object.clientY = object.y;
        }; //NOTE Remember accessibility, Aria roles, and labels.
      }

      function createWindowRect() {
        var props = {
          top: {
            value: 0,
            enumerable: true
          },
          left: {
            value: 0,
            enumerable: true
          },
          right: {
            value: window.innerWidth,
            enumerable: true
          },
          bottom: {
            value: window.innerHeight,
            enumerable: true
          },
          width: {
            value: window.innerWidth,
            enumerable: true
          },
          height: {
            value: window.innerHeight,
            enumerable: true
          },
          x: {
            value: 0,
            enumerable: true
          },
          y: {
            value: 0,
            enumerable: true
          }
        };

        if (Object.create) {
          return Object.create({}, props);
        } else {
          var rect = {};
          Object.defineProperties(rect, props);
          return rect;
        }
      }

      function getClientRect(el) {
        if (el === window) {
          return createWindowRect();
        } else {
          try {
            var rect = el.getBoundingClientRect();

            if (rect.x === undefined) {
              rect.x = rect.left;
              rect.y = rect.top;
            }

            return rect;
          } catch (e) {
            throw new TypeError("Can't call getBoundingClientRect on " + el);
          }
        }
      }

      function pointInside(point, el) {
        var rect = getClientRect(el);
        return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
      }

      var objectCreate = void 0;

      if (typeof Object.create != 'function') {
        objectCreate = function (undefined$1) {
          var Temp = function Temp() {};

          return function (prototype, propertiesObject) {
            if (prototype !== Object(prototype) && prototype !== null) {
              throw TypeError('Argument must be an object, or null');
            }

            Temp.prototype = prototype || {};
            var result = new Temp();
            Temp.prototype = null;

            if (propertiesObject !== undefined$1) {
              Object.defineProperties(result, propertiesObject);
            } // to imitate the case of Object.create(null)


            if (prototype === null) {
              result.__proto__ = null;
            }

            return result;
          };
        }();
      } else {
        objectCreate = Object.create;
      }

      var objectCreate$1 = objectCreate;
      var mouseEventProps = ['altKey', 'button', 'buttons', 'clientX', 'clientY', 'ctrlKey', 'metaKey', 'movementX', 'movementY', 'offsetX', 'offsetY', 'pageX', 'pageY', 'region', 'relatedTarget', 'screenX', 'screenY', 'shiftKey', 'which', 'x', 'y'];

      function createDispatcher(element) {
        var defaultSettings = {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          ctrlKey: false,
          shiftKey: false,
          altKey: false,
          metaKey: false,
          button: 0,
          buttons: 1,
          relatedTarget: null,
          region: null
        };

        if (element !== undefined) {
          element.addEventListener('mousemove', onMove);
        }

        function onMove(e) {
          for (var i = 0; i < mouseEventProps.length; i++) {
            defaultSettings[mouseEventProps[i]] = e[mouseEventProps[i]];
          }
        }

        var dispatch = function () {
          if (MouseEvent) {
            return function m1(element, initMove, data) {
              var evt = new MouseEvent('mousemove', createMoveInit(defaultSettings, initMove)); //evt.dispatched = 'mousemove';

              setSpecial(evt, data);
              return element.dispatchEvent(evt);
            };
          } else if (typeof document.createEvent === 'function') {
            return function m2(element, initMove, data) {
              var settings = createMoveInit(defaultSettings, initMove);
              var evt = document.createEvent('MouseEvents');
              evt.initMouseEvent("mousemove", true, //can bubble
              true, //cancelable
              window, //view
              0, //detail
              settings.screenX, //0, //screenX
              settings.screenY, //0, //screenY
              settings.clientX, //80, //clientX
              settings.clientY, //20, //clientY
              settings.ctrlKey, //false, //ctrlKey
              settings.altKey, //false, //altKey
              settings.shiftKey, //false, //shiftKey
              settings.metaKey, //false, //metaKey
              settings.button, //0, //button
              settings.relatedTarget //null //relatedTarget
              ); //evt.dispatched = 'mousemove';

              setSpecial(evt, data);
              return element.dispatchEvent(evt);
            };
          } else if (typeof document.createEventObject === 'function') {
            return function m3(element, initMove, data) {
              var evt = document.createEventObject();
              var settings = createMoveInit(defaultSettings, initMove);

              for (var name in settings) {
                evt[name] = settings[name];
              } //evt.dispatched = 'mousemove';


              setSpecial(evt, data);
              return element.dispatchEvent(evt);
            };
          }
        }();

        function destroy() {
          if (element) {
            element.removeEventListener('mousemove', onMove, false);
          }

          defaultSettings = null;
        }

        return {
          destroy: destroy,
          dispatch: dispatch
        };
      }

      function createMoveInit(defaultSettings, initMove) {
        initMove = initMove || {};
        var settings = objectCreate$1(defaultSettings);

        for (var i = 0; i < mouseEventProps.length; i++) {
          if (initMove[mouseEventProps[i]] !== undefined) {
            settings[mouseEventProps[i]] = initMove[mouseEventProps[i]];
          }
        }

        return settings;
      }

      function setSpecial(e, data) {
        console.log('data ', data);
        e.data = data || {};
        e.dispatched = 'mousemove';
      }

      var prefix = ['webkit', 'moz', 'ms', 'o'];

      var requestFrame = function () {
        if (typeof window === "undefined") {
          return function () {};
        }

        for (var i = 0, limit = prefix.length; i < limit && !window.requestAnimationFrame; ++i) {
          window.requestAnimationFrame = window[prefix[i] + 'RequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame) {
          var lastTime = 0;

          window.requestAnimationFrame = function (callback) {
            var now = new Date().getTime();
            var ttc = Math.max(0, 16 - now - lastTime);
            var timer = window.setTimeout(function () {
              return callback(now + ttc);
            }, ttc);
            lastTime = now + ttc;
            return timer;
          };
        }

        return window.requestAnimationFrame.bind(window);
      }();

      var cancelFrame = function () {
        if (typeof window === "undefined") {
          return function () {};
        }

        for (var i = 0, limit = prefix.length; i < limit && !window.cancelAnimationFrame; ++i) {
          window.cancelAnimationFrame = window[prefix[i] + 'CancelAnimationFrame'] || window[prefix[i] + 'CancelRequestAnimationFrame'];
        }

        if (!window.cancelAnimationFrame) {
          window.cancelAnimationFrame = function (timer) {
            window.clearTimeout(timer);
          };
        }

        return window.cancelAnimationFrame.bind(window);
      }();

      function AutoScroller(elements, options) {
        if (options === void 0) options = {};
        var self = this;
        var maxSpeed = 4,
            scrolling = false;

        if (typeof options.margin !== 'object') {
          var margin = options.margin || -1;
          this.margin = {
            left: margin,
            right: margin,
            top: margin,
            bottom: margin
          };
        } else {
          this.margin = options.margin;
        } //this.scrolling = false;


        this.scrollWhenOutside = options.scrollWhenOutside || false;
        var point = {},
            pointCB = createPointCB(point),
            dispatcher = createDispatcher(),
            down = false;
        window.addEventListener('mousemove', pointCB, false);
        window.addEventListener('touchmove', pointCB, false);

        if (!isNaN(options.maxSpeed)) {
          maxSpeed = options.maxSpeed;
        }

        if (typeof maxSpeed !== 'object') {
          maxSpeed = {
            left: maxSpeed,
            right: maxSpeed,
            top: maxSpeed,
            bottom: maxSpeed
          };
        }

        this.autoScroll = _boolean(options.autoScroll);
        this.syncMove = _boolean(options.syncMove, false);

        this.destroy = function (forceCleanAnimation) {
          window.removeEventListener('mousemove', pointCB, false);
          window.removeEventListener('touchmove', pointCB, false);
          window.removeEventListener('mousedown', onDown, false);
          window.removeEventListener('touchstart', onDown, false);
          window.removeEventListener('mouseup', onUp, false);
          window.removeEventListener('touchend', onUp, false);
          window.removeEventListener('pointerup', onUp, false);
          window.removeEventListener('mouseleave', onMouseOut, false);
          window.removeEventListener('mousemove', onMove, false);
          window.removeEventListener('touchmove', onMove, false);
          window.removeEventListener('scroll', setScroll, true);
          elements = [];

          if (forceCleanAnimation) {
            cleanAnimation();
          }
        };

        this.add = function () {
          var element = [],
              len = arguments.length;

          while (len--) {
            element[len] = arguments[len];
          }

          addElements.apply(void 0, [elements].concat(element));
          return this;
        };

        this.remove = function () {
          var element = [],
              len = arguments.length;

          while (len--) {
            element[len] = arguments[len];
          }

          return removeElements.apply(void 0, [elements].concat(element));
        };

        var hasWindow = null,
            windowAnimationFrame;

        if (Object.prototype.toString.call(elements) !== '[object Array]') {
          elements = [elements];
        }

        (function (temp) {
          elements = [];
          temp.forEach(function (element) {
            if (element === window) {
              hasWindow = window;
            } else {
              self.add(element);
            }
          });
        })(elements);

        Object.defineProperties(this, {
          down: {
            get: function get() {
              return down;
            }
          },
          maxSpeed: {
            get: function get() {
              return maxSpeed;
            }
          },
          point: {
            get: function get() {
              return point;
            }
          },
          scrolling: {
            get: function get() {
              return scrolling;
            }
          }
        });
        var current = null,
            animationFrame;
        window.addEventListener('mousedown', onDown, false);
        window.addEventListener('touchstart', onDown, false);
        window.addEventListener('mouseup', onUp, false);
        window.addEventListener('touchend', onUp, false);
        /*
        IE does not trigger mouseup event when scrolling.
        It is a known issue that Microsoft won't fix.
        https://connect.microsoft.com/IE/feedback/details/783058/scrollbar-trigger-mousedown-but-not-mouseup
        IE supports pointer events instead
        */

        window.addEventListener('pointerup', onUp, false);
        window.addEventListener('mousemove', onMove, false);
        window.addEventListener('touchmove', onMove, false);
        window.addEventListener('mouseleave', onMouseOut, false);
        window.addEventListener('scroll', setScroll, true);

        function setScroll(e) {
          for (var i = 0; i < elements.length; i++) {
            if (elements[i] === e.target) {
              scrolling = true;
              break;
            }
          }

          if (scrolling) {
            requestFrame(function () {
              return scrolling = false;
            });
          }
        }

        function onDown() {
          down = true;
        }

        function onUp() {
          down = false;
          cleanAnimation();
        }

        function cleanAnimation() {
          cancelFrame(animationFrame);
          cancelFrame(windowAnimationFrame);
        }

        function onMouseOut() {
          down = false;
        }

        function getTarget(target) {
          if (!target) {
            return null;
          }

          if (current === target) {
            return target;
          }

          if (hasElement(elements, target)) {
            return target;
          }

          while (target = target.parentNode) {
            if (hasElement(elements, target)) {
              return target;
            }
          }

          return null;
        }

        function getElementUnderPoint() {
          var underPoint = null;

          for (var i = 0; i < elements.length; i++) {
            if (inside(point, elements[i])) {
              underPoint = elements[i];
            }
          }

          return underPoint;
        }

        function onMove(event) {
          if (!self.autoScroll()) {
            return;
          }

          if (event['dispatched']) {
            return;
          }

          var target = event.target,
              body = document.body;

          if (current && !inside(point, current)) {
            if (!self.scrollWhenOutside) {
              current = null;
            }
          }

          if (target && target.parentNode === body) {
            //The special condition to improve speed.
            target = getElementUnderPoint();
          } else {
            target = getTarget(target);

            if (!target) {
              target = getElementUnderPoint();
            }
          }

          if (target && target !== current) {
            current = target;
          }

          if (hasWindow) {
            cancelFrame(windowAnimationFrame);
            windowAnimationFrame = requestFrame(scrollWindow);
          }

          if (!current) {
            return;
          }

          cancelFrame(animationFrame);
          animationFrame = requestFrame(scrollTick);
        }

        function scrollWindow() {
          autoScroll(hasWindow);
          cancelFrame(windowAnimationFrame);
          windowAnimationFrame = requestFrame(scrollWindow);
        }

        function scrollTick() {
          if (!current) {
            return;
          }

          autoScroll(current);
          cancelFrame(animationFrame);
          animationFrame = requestFrame(scrollTick);
        }

        function autoScroll(el) {
          var rect = getClientRect(el),
              scrollx,
              scrolly;

          if (point.x < rect.left + self.margin.left) {
            scrollx = Math.floor(Math.max(-1, (point.x - rect.left) / self.margin.left - 1) * self.maxSpeed.left);
          } else if (point.x > rect.right - self.margin.right) {
            scrollx = Math.ceil(Math.min(1, (point.x - rect.right) / self.margin.right + 1) * self.maxSpeed.right);
          } else {
            scrollx = 0;
          }

          if (point.y < rect.top + self.margin.top) {
            scrolly = Math.floor(Math.max(-1, (point.y - rect.top) / self.margin.top - 1) * self.maxSpeed.top);
          } else if (point.y > rect.bottom - self.margin.bottom) {
            scrolly = Math.ceil(Math.min(1, (point.y - rect.bottom) / self.margin.bottom + 1) * self.maxSpeed.bottom);
          } else {
            scrolly = 0;
          }

          if (self.syncMove()) {
            /*
            Notes about mousemove event dispatch.
            screen(X/Y) should need to be updated.
            Some other properties might need to be set.
            Keep the syncMove option default false until all inconsistencies are taken care of.
            */
            dispatcher.dispatch(el, {
              pageX: point.pageX + scrollx,
              pageY: point.pageY + scrolly,
              clientX: point.x + scrollx,
              clientY: point.y + scrolly
            });
          }

          setTimeout(function () {
            if (scrolly) {
              scrollY(el, scrolly);
            }

            if (scrollx) {
              scrollX(el, scrollx);
            }
          });
        }

        function scrollY(el, amount) {
          if (el === window) {
            window.scrollTo(el.pageXOffset, el.pageYOffset + amount);
          } else {
            el.scrollTop += amount;
          }
        }

        function scrollX(el, amount) {
          if (el === window) {
            window.scrollTo(el.pageXOffset + amount, el.pageYOffset);
          } else {
            el.scrollLeft += amount;
          }
        }
      }

      function AutoScrollerFactory(element, options) {
        return new AutoScroller(element, options);
      }

      function inside(point, el, rect) {
        if (!rect) {
          return pointInside(point, el);
        } else {
          return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
        }
      }
      /*
      git remote add origin https://github.com/hollowdoor/dom_autoscroller.git
      git push -u origin master
      */

      /* harmony default export */


      __webpack_exports__["default"] = AutoScrollerFactory;
      /***/
    },

    /***/
    13174:
    /*!*********************************************************************************!*\
      !*** ./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DAYS_OF_WEEK": function DAYS_OF_WEEK() {
          return (
            /* reexport safe */
            calendar_utils__WEBPACK_IMPORTED_MODULE_1__.DAYS_OF_WEEK
          );
        },

        /* harmony export */
        "CalendarA11y": function CalendarA11y() {
          return (
            /* binding */
            _CalendarA11y
          );
        },

        /* harmony export */
        "CalendarAngularDateFormatter": function CalendarAngularDateFormatter() {
          return (
            /* binding */
            _CalendarAngularDateFormatter
          );
        },

        /* harmony export */
        "CalendarCommonModule": function CalendarCommonModule() {
          return (
            /* binding */
            _CalendarCommonModule
          );
        },

        /* harmony export */
        "CalendarDateFormatter": function CalendarDateFormatter() {
          return (
            /* binding */
            _CalendarDateFormatter
          );
        },

        /* harmony export */
        "CalendarDayModule": function CalendarDayModule() {
          return (
            /* binding */
            _CalendarDayModule
          );
        },

        /* harmony export */
        "CalendarDayViewComponent": function CalendarDayViewComponent() {
          return (
            /* binding */
            _CalendarDayViewComponent
          );
        },

        /* harmony export */
        "CalendarEventTimesChangedEventType": function CalendarEventTimesChangedEventType() {
          return (
            /* binding */
            _CalendarEventTimesChangedEventType
          );
        },

        /* harmony export */
        "CalendarEventTitleFormatter": function CalendarEventTitleFormatter() {
          return (
            /* binding */
            _CalendarEventTitleFormatter
          );
        },

        /* harmony export */
        "CalendarModule": function CalendarModule() {
          return (
            /* binding */
            _CalendarModule
          );
        },

        /* harmony export */
        "CalendarMomentDateFormatter": function CalendarMomentDateFormatter() {
          return (
            /* binding */
            _CalendarMomentDateFormatter
          );
        },

        /* harmony export */
        "CalendarMonthModule": function CalendarMonthModule() {
          return (
            /* binding */
            _CalendarMonthModule
          );
        },

        /* harmony export */
        "CalendarMonthViewComponent": function CalendarMonthViewComponent() {
          return (
            /* binding */
            _CalendarMonthViewComponent
          );
        },

        /* harmony export */
        "CalendarNativeDateFormatter": function CalendarNativeDateFormatter() {
          return (
            /* binding */
            _CalendarNativeDateFormatter
          );
        },

        /* harmony export */
        "CalendarUtils": function CalendarUtils() {
          return (
            /* binding */
            _CalendarUtils
          );
        },

        /* harmony export */
        "CalendarView": function CalendarView() {
          return (
            /* binding */
            _CalendarView
          );
        },

        /* harmony export */
        "CalendarWeekModule": function CalendarWeekModule() {
          return (
            /* binding */
            _CalendarWeekModule
          );
        },

        /* harmony export */
        "CalendarWeekViewComponent": function CalendarWeekViewComponent() {
          return (
            /* binding */
            _CalendarWeekViewComponent
          );
        },

        /* harmony export */
        "DateAdapter": function DateAdapter() {
          return (
            /* binding */
            _DateAdapter
          );
        },

        /* harmony export */
        "MOMENT": function MOMENT() {
          return (
            /* binding */
            _MOMENT
          );
        },

        /* harmony export */
        "collapseAnimation": function collapseAnimation() {
          return (
            /* binding */
            _collapseAnimation
          );
        },

        /* harmony export */
        "getWeekViewPeriod": function getWeekViewPeriod() {
          return (
            /* binding */
            _getWeekViewPeriod
          );
        },

        /* harmony export */
        "ɵa": function ɵa() {
          return (
            /* binding */
            CalendarOpenDayEventsComponent
          );
        },

        /* harmony export */
        "ɵb": function ɵb() {
          return (
            /* binding */
            CalendarEventActionsComponent
          );
        },

        /* harmony export */
        "ɵc": function ɵc() {
          return (
            /* binding */
            CalendarEventTitleComponent
          );
        },

        /* harmony export */
        "ɵd": function ɵd() {
          return (
            /* binding */
            CalendarTooltipWindowComponent
          );
        },

        /* harmony export */
        "ɵe": function ɵe() {
          return (
            /* binding */
            CalendarTooltipDirective
          );
        },

        /* harmony export */
        "ɵf": function ɵf() {
          return (
            /* binding */
            CalendarPreviousViewDirective
          );
        },

        /* harmony export */
        "ɵg": function ɵg() {
          return (
            /* binding */
            CalendarNextViewDirective
          );
        },

        /* harmony export */
        "ɵh": function ɵh() {
          return (
            /* binding */
            CalendarTodayDirective
          );
        },

        /* harmony export */
        "ɵi": function ɵi() {
          return (
            /* binding */
            CalendarDatePipe
          );
        },

        /* harmony export */
        "ɵj": function ɵj() {
          return (
            /* binding */
            CalendarEventTitlePipe
          );
        },

        /* harmony export */
        "ɵk": function ɵk() {
          return (
            /* binding */
            CalendarA11yPipe
          );
        },

        /* harmony export */
        "ɵl": function ɵl() {
          return (
            /* binding */
            ClickDirective
          );
        },

        /* harmony export */
        "ɵm": function ɵm() {
          return (
            /* binding */
            KeydownEnterDirective
          );
        },

        /* harmony export */
        "ɵn": function ɵn() {
          return (
            /* binding */
            CalendarMonthCellComponent
          );
        },

        /* harmony export */
        "ɵo": function ɵo() {
          return (
            /* binding */
            CalendarMonthViewHeaderComponent
          );
        },

        /* harmony export */
        "ɵp": function ɵp() {
          return (
            /* binding */
            CalendarWeekViewHeaderComponent
          );
        },

        /* harmony export */
        "ɵq": function ɵq() {
          return (
            /* binding */
            CalendarWeekViewEventComponent
          );
        },

        /* harmony export */
        "ɵr": function ɵr() {
          return (
            /* binding */
            CalendarWeekViewHourSegmentComponent
          );
        },

        /* harmony export */
        "ɵs": function ɵs() {
          return (
            /* binding */
            CalendarWeekViewCurrentTimeMarkerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      19806);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! positioning */
      71867);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      46797);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      69165);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs */
      20945);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs/operators */
      39761);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs/operators */
      69499);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var calendar_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! calendar-utils */
      90104);
      /* harmony import */


      var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angular-draggable-droppable */
      55304);
      /* harmony import */


      var angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! angular-resizable-element */
      72146);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/animations */
      56083);

      var _c0 = function _c0(a0) {
        return {
          action: a0
        };
      };

      function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlClick_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var action_r7 = restoredCtx.$implicit;

            var event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).event;

            return action_r7.onClick({
              event: event_r3,
              sourceEvent: $event
            });
          })("mwlKeydownEnter", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlKeydownEnter_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var action_r7 = restoredCtx.$implicit;

            var event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).event;

            return action_r7.onClick({
              event: event_r3,
              sourceEvent: $event
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarA11y");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", action_r7.cssClass)("innerHtml", action_r7.label, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, action_r7), "actionButtonLabel"));
        }
      }

      function CalendarEventActionsComponent_ng_template_0_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template, 2, 8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var event_r3 = ctx_r13.event;
          var trackByActionId_r4 = ctx_r13.trackByActionId;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", event_r3.actions)("ngForTrackBy", trackByActionId_r4);
        }
      }

      function CalendarEventActionsComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarEventActionsComponent_ng_template_0_span_0_Template, 2, 2, "span", 2);
        }

        if (rf & 2) {
          var event_r3 = ctx.event;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", event_r3.actions);
        }
      }

      function CalendarEventActionsComponent_ng_template_2_Template(rf, ctx) {}

      var _c1 = function _c1(a0, a1) {
        return {
          event: a0,
          trackByActionId: a1
        };
      };

      var _c2 = function _c2() {
        return {};
      };

      function CalendarEventTitleComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarEventTitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarA11y");
        }

        if (rf & 2) {
          var event_r3 = ctx.event;
          var view_r4 = ctx.view;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](1, 2, event_r3.title, view_r4, event_r3), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c2), "hideEventTitle"));
        }
      }

      function CalendarEventTitleComponent_ng_template_2_Template(rf, ctx) {}

      var _c3 = function _c3(a0, a1) {
        return {
          event: a0,
          view: a1
        };
      };

      function CalendarTooltipWindowComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var contents_r3 = ctx.contents;
          var placement_r4 = ctx.placement;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "cal-tooltip-" + placement_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", contents_r3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        }
      }

      function CalendarTooltipWindowComponent_ng_template_2_Template(rf, ctx) {}

      var _c4 = function _c4(a0, a1, a2) {
        return {
          contents: a0,
          placement: a1,
          event: a2
        };
      };

      var _c5 = function _c5(a0) {
        return {
          backgroundColor: a0
        };
      };

      function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mwl-calendar-month-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlClick_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var day_r3 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r4.dayClicked.emit({
              day: day_r3,
              sourceEvent: $event
            });
          })("mwlKeydownEnter", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlKeydownEnter_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var day_r3 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r6.dayClicked.emit({
              day: day_r3,
              sourceEvent: $event
            });
          })("highlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_highlightDay_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r7.toggleDayHighlight($event.event, true);
          })("unhighlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_unhighlightDay_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r8.toggleDayHighlight($event.event, false);
          })("drop", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_drop_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var day_r3 = restoredCtx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r9.eventDropped(day_r3, $event.dropData.event, $event.dropData.draggedFrom);
          })("eventClicked", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_eventClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r10.eventClicked.emit({
              event: $event.event,
              sourceEvent: $event.sourceEvent
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarA11y");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", day_r3 == null ? null : day_r3.cssClass)("day", day_r3)("openDay", ctx_r2.openDay)("locale", ctx_r2.locale)("tooltipPlacement", ctx_r2.tooltipPlacement)("tooltipAppendToBody", ctx_r2.tooltipAppendToBody)("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipDelay", ctx_r2.tooltipDelay)("customTemplate", ctx_r2.cellTemplate)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c5, day_r3.backgroundColor))("clickListenerDisabled", ctx_r2.dayClicked.observers.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c2), "monthCellTabIndex"));
        }
      }

      function CalendarMonthViewComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template, 2, 18, "mwl-calendar-month-cell", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mwl-calendar-open-day-events", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("eventClicked", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_eventClicked_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r11.eventClicked.emit({
              event: $event.event,
              sourceEvent: $event.sourceEvent
            });
          })("drop", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_drop_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.eventDropped(ctx_r13.openDay, $event.dropData.event, $event.dropData.draggedFrom);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rowIndex_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 9, ctx_r0.view.days, rowIndex_r1, rowIndex_r1 + ctx_r0.view.totalDaysVisibleInWeek))("ngForTrackBy", ctx_r0.trackByDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("locale", ctx_r0.locale)("isOpen", ctx_r0.openRowIndex === rowIndex_r1)("events", ctx_r0.openDay == null ? null : ctx_r0.openDay.events)("date", ctx_r0.openDay == null ? null : ctx_r0.openDay.date)("customTemplate", ctx_r0.openDayEventsTemplate)("eventTitleTemplate", ctx_r0.eventTitleTemplate)("eventActionsTemplate", ctx_r0.eventActionsTemplate);
        }
      }

      function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template_div_click_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var day_r7 = restoredCtx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r8.columnHeaderClicked.emit({
              isoDayNumber: day_r7.day,
              sourceEvent: $event
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r7 = ctx.$implicit;

          var locale_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().locale;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-past", day_r7.isPast)("cal-today", day_r7.isToday)("cal-future", day_r7.isFuture)("cal-weekend", day_r7.isWeekend);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", day_r7.cssClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 10, day_r7.date, "monthViewColumnHeader", locale_r4), " ");
        }
      }

      function CalendarMonthViewHeaderComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template, 3, 14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var days_r3 = ctx.days;
          var trackByWeekDayHeaderDate_r5 = ctx.trackByWeekDayHeaderDate;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r5);
        }
      }

      function CalendarMonthViewHeaderComponent_ng_template_2_Template(rf, ctx) {}

      var _c6 = function _c6(a0, a1, a2) {
        return {
          days: a0,
          locale: a1,
          trackByWeekDayHeaderDate: a2
        };
      };

      function CalendarMonthCellComponent_ng_template_0_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().day;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](day_r3.badgeTotal);
        }
      }

      var _c7 = function _c7(a0, a1) {
        return {
          event: a0,
          draggedFrom: a1
        };
      };

      var _c8 = function _c8(a0, a1) {
        return {
          x: a0,
          y: a1
        };
      };

      var _c9 = function _c9() {
        return {
          delay: 300,
          delta: 30
        };
      };

      function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseenter_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);

            var event_r19 = restoredCtx.$implicit;

            var highlightDay_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).highlightDay;

            return highlightDay_r7.emit({
              event: event_r19
            });
          })("mouseleave", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseleave_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);

            var event_r19 = restoredCtx.$implicit;

            var unhighlightDay_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).unhighlightDay;

            return unhighlightDay_r8.emit({
              event: event_r19
            });
          })("mwlClick", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mwlClick_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);

            var event_r19 = restoredCtx.$implicit;

            var eventClicked_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).eventClicked;

            return eventClicked_r9.emit({
              event: event_r19,
              sourceEvent: $event
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarEventTitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarA11y");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r19 = ctx.$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          var tooltipPlacement_r6 = ctx_r27.tooltipPlacement;
          var tooltipTemplate_r10 = ctx_r27.tooltipTemplate;
          var tooltipAppendToBody_r11 = ctx_r27.tooltipAppendToBody;
          var tooltipDelay_r12 = ctx_r27.tooltipDelay;
          var day_r3 = ctx_r27.day;
          var validateDrag_r14 = ctx_r27.validateDrag;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-draggable", event_r19.draggable);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](22, _c5, event_r19.color == null ? null : event_r19.color.primary))("ngClass", event_r19 == null ? null : event_r19.cssClass)("mwlCalendarTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](1, 15, event_r19.title, "monthTooltip", event_r19))("tooltipPlacement", tooltipPlacement_r6)("tooltipEvent", event_r19)("tooltipTemplate", tooltipTemplate_r10)("tooltipAppendToBody", tooltipAppendToBody_r11)("tooltipDelay", tooltipDelay_r12)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](24, _c7, event_r19, day_r3))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](27, _c8, event_r19.draggable, event_r19.draggable))("validateDrag", validateDrag_r14)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](30, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](31, _c2), "hideMonthCellEvents"));
        }
      }

      function CalendarMonthCellComponent_ng_template_0_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template, 3, 32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var day_r3 = ctx_r28.day;
          var trackByEventId_r13 = ctx_r28.trackByEventId;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", day_r3.events)("ngForTrackBy", trackByEventId_r13);
        }
      }

      var _c10 = function _c10(a0, a1) {
        return {
          day: a0,
          locale: a1
        };
      };

      function CalendarMonthCellComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarA11y");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CalendarMonthCellComponent_ng_template_0_span_3_Template, 2, 1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "calendarDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CalendarMonthCellComponent_ng_template_0_div_7_Template, 2, 2, "div", 6);
        }

        if (rf & 2) {
          var day_r3 = ctx.day;
          var locale_r5 = ctx.locale;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c10, day_r3, locale_r5), "monthCell"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", day_r3.badgeTotal > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](6, 7, day_r3.date, "monthViewDayNumber", locale_r5));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", day_r3.events.length > 0);
        }
      }

      function CalendarMonthCellComponent_ng_template_2_Template(rf, ctx) {}

      var _c11 = function _c11(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
        return {
          day: a0,
          openDay: a1,
          locale: a2,
          tooltipPlacement: a3,
          highlightDay: a4,
          unhighlightDay: a5,
          eventClicked: a6,
          tooltipTemplate: a7,
          tooltipAppendToBody: a8,
          tooltipDelay: a9,
          trackByEventId: a10,
          validateDrag: a11
        };
      };

      var _c12 = function _c12(a0) {
        return {
          event: a0
        };
      };

      var _c13 = function _c13(a0, a1) {
        return {
          event: a0,
          locale: a1
        };
      };

      function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mwl-calendar-event-title", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlClick_3_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var event_r10 = restoredCtx.$implicit;

            var eventClicked_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).eventClicked;

            return eventClicked_r4.emit({
              event: event_r10,
              sourceEvent: $event
            });
          })("mwlKeydownEnter", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlKeydownEnter_3_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var event_r10 = restoredCtx.$implicit;

            var eventClicked_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).eventClicked;

            return eventClicked_r4.emit({
              event: event_r10,
              sourceEvent: $event
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "calendarA11y");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mwl-calendar-event-actions", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r10 = ctx.$implicit;

          var validateDrag_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).validateDrag;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-draggable", event_r10.draggable);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", event_r10 == null ? null : event_r10.cssClass)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c12, event_r10))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](18, _c8, event_r10.draggable, event_r10.draggable))("validateDrag", validateDrag_r7)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](22, _c5, event_r10.color == null ? null : event_r10.color.primary));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("event", event_r10)("customTemplate", ctx_r9.eventTitleTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](24, _c13, event_r10, ctx_r9.locale), "eventDescription"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("event", event_r10)("customTemplate", ctx_r9.eventActionsTemplate);
        }
      }

      var _c14 = function _c14(a0, a1) {
        return {
          date: a0,
          locale: a1
        };
      };

      function CalendarOpenDayEventsComponent_ng_template_0_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarA11y");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "calendarA11y");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template, 7, 27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var events_r3 = ctx_r17.events;
          var trackByEventId_r6 = ctx_r17.trackByEventId;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@collapse", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c14, ctx_r8.date, ctx_r8.locale), "openDayEventsAlert"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](14, _c14, ctx_r8.date, ctx_r8.locale), "openDayEventsLandmark"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", events_r3)("ngForTrackBy", trackByEventId_r6);
        }
      }

      function CalendarOpenDayEventsComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarOpenDayEventsComponent_ng_template_0_div_0_Template, 6, 17, "div", 2);
        }

        if (rf & 2) {
          var isOpen_r5 = ctx.isOpen;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", isOpen_r5);
        }
      }

      function CalendarOpenDayEventsComponent_ng_template_2_Template(rf, ctx) {}

      var _c15 = function _c15(a0, a1, a2, a3, a4) {
        return {
          events: a0,
          eventClicked: a1,
          isOpen: a2,
          trackByEventId: a3,
          validateDrag: a4
        };
      };

      function CalendarWeekViewComponent_div_2_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("drop", function CalendarWeekViewComponent_div_2_div_4_Template_div_drop_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var day_r7 = restoredCtx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r8.eventDropped($event, day_r7.date, true);
          })("dragEnter", function CalendarWeekViewComponent_div_2_div_4_Template_div_dragEnter_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var day_r7 = restoredCtx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r10.dateDragEnter(day_r7.date);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c16 = function _c16() {
        return {
          left: true
        };
      };

      function CalendarWeekViewComponent_div_2_div_5_div_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 22);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c16));
        }
      }

      var _c17 = function _c17() {
        return {
          right: true
        };
      };

      function CalendarWeekViewComponent_div_2_div_5_div_2_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 23);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c17));
        }
      }

      var _c18 = function _c18(a0, a1) {
        return {
          left: a0,
          right: a1
        };
      };

      var _c19 = function _c19(a0, a1) {
        return {
          event: a0,
          calendarId: a1
        };
      };

      var _c20 = function _c20(a0) {
        return {
          x: a0
        };
      };

      function CalendarWeekViewComponent_div_2_div_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizeStart_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var allDayEvent_r14 = restoredCtx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r18.allDayEventResizeStarted(_r12, allDayEvent_r14, $event);
          })("resizing", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizing_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var allDayEvent_r14 = restoredCtx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r20.allDayEventResizing(allDayEvent_r14, $event, ctx_r20.dayColumnWidth);
          })("resizeEnd", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizeEnd_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var allDayEvent_r14 = restoredCtx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r21.allDayEventResizeEnded(allDayEvent_r14);
          })("dragStart", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragStart_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r22.dragStarted(_r12, _r15);
          })("dragging", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragging_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r23.allDayEventDragMove();
          })("dragEnd", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragEnd_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var allDayEvent_r14 = restoredCtx.$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r24.dragEnded(allDayEvent_r14, $event, ctx_r24.dayColumnWidth);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_div_5_div_2_div_2_Template, 1, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mwl-calendar-week-view-event", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_mwl_calendar_week_view_event_eventClicked_3_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var allDayEvent_r14 = restoredCtx.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r25.eventClicked.emit({
              event: allDayEvent_r14.event,
              sourceEvent: $event.sourceEvent
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_2_div_5_div_2_div_4_Template, 1, 2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var allDayEvent_r14 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", 100 / ctx_r13.days.length * allDayEvent_r14.span, "%")("margin-left", 100 / ctx_r13.days.length * allDayEvent_r14.offset, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-draggable", allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0)("cal-starts-within-week", !allDayEvent_r14.startsBeforeWeek)("cal-ends-within-week", !allDayEvent_r14.endsAfterWeek);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", allDayEvent_r14.event == null ? null : allDayEvent_r14.event.cssClass)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](30, _c18, ctx_r13.dayColumnWidth, ctx_r13.dayColumnWidth))("validateResize", ctx_r13.validateResize)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](33, _c19, allDayEvent_r14.event, ctx_r13.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](36, _c8, allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0, !ctx_r13.snapDraggedEvents && allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0))("dragSnapGrid", ctx_r13.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](39, _c20, ctx_r13.dayColumnWidth) : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](41, _c2))("validateDrag", ctx_r13.validateDrag)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](42, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.beforeStart) && !allDayEvent_r14.startsBeforeWeek);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("locale", ctx_r13.locale)("weekEvent", allDayEvent_r14)("tooltipPlacement", ctx_r13.tooltipPlacement)("tooltipTemplate", ctx_r13.tooltipTemplate)("tooltipAppendToBody", ctx_r13.tooltipAppendToBody)("tooltipDelay", ctx_r13.tooltipDelay)("customTemplate", ctx_r13.eventTemplate)("eventTitleTemplate", ctx_r13.eventTitleTemplate)("eventActionsTemplate", ctx_r13.eventActionsTemplate)("daysInWeek", ctx_r13.daysInWeek);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.afterEnd) && !allDayEvent_r14.endsAfterWeek);
        }
      }

      function CalendarWeekViewComponent_div_2_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_div_5_div_2_Template, 5, 43, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var eventRow_r11 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", eventRow_r11.row)("ngForTrackBy", ctx_r6.trackByWeekAllDayEvent);
        }
      }

      function CalendarWeekViewComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_div_2_Template_div_dragEnter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r26.dragEnter("allDay");
          })("dragLeave", function CalendarWeekViewComponent_div_2_Template_div_dragLeave_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r28.dragLeave("allDay");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_2_div_4_Template, 1, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CalendarWeekViewComponent_div_2_div_5_Template, 3, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.allDayEventsLabelTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.days)("ngForTrackBy", ctx_r0.trackByWeekDayHeaderDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.view.allDayEventRows)("ngForTrackBy", ctx_r0.trackById);
        }
      }

      function CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mwl-calendar-week-view-hour-segment", 28);
        }

        if (rf & 2) {
          var segment_r33 = ctx.$implicit;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx_r32.hourSegmentHeight, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("segment", segment_r33)("segmentHeight", ctx_r32.hourSegmentHeight)("locale", ctx_r32.locale)("customTemplate", ctx_r32.hourSegmentTemplate)("isTimeLabel", true)("daysInWeek", ctx_r32.daysInWeek);
        }
      }

      function CalendarWeekViewComponent_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template, 1, 8, "mwl-calendar-week-view-hour-segment", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hour_r30 = ctx.$implicit;
          var odd_r31 = ctx.odd;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-hour-odd", odd_r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", hour_r30.segments)("ngForTrackBy", ctx_r29.trackByHourSegment);
        }
      }

      function CalendarWeekViewComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_4_div_1_Template, 2, 4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.view.hourColumns[0].hours)("ngForTrackBy", ctx_r1.trackByHour);
        }
      }

      var _c21 = function _c21() {
        return {
          left: true,
          top: true
        };
      };

      function CalendarWeekViewComponent_div_7_div_3_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 22);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c21));
        }
      }

      function CalendarWeekViewComponent_div_7_div_3_ng_template_3_Template(rf, ctx) {}

      function CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mwl-calendar-week-view-event", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template_mwl_calendar_week_view_event_eventClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r46);

            var timeEvent_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r44.eventClicked.emit({
              event: timeEvent_r37.event,
              sourceEvent: $event.sourceEvent
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var timeEvent_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var column_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("locale", ctx_r42.locale)("weekEvent", timeEvent_r37)("tooltipPlacement", ctx_r42.tooltipPlacement)("tooltipTemplate", ctx_r42.tooltipTemplate)("tooltipAppendToBody", ctx_r42.tooltipAppendToBody)("tooltipDisabled", ctx_r42.dragActive || ctx_r42.timeEventResizes.size > 0)("tooltipDelay", ctx_r42.tooltipDelay)("customTemplate", ctx_r42.eventTemplate)("eventTitleTemplate", ctx_r42.eventTitleTemplate)("eventActionsTemplate", ctx_r42.eventActionsTemplate)("column", column_r34)("daysInWeek", ctx_r42.daysInWeek);
        }
      }

      var _c22 = function _c22() {
        return {
          right: true,
          bottom: true
        };
      };

      function CalendarWeekViewComponent_div_7_div_3_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 23);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c22));
        }
      }

      var _c23 = function _c23(a0, a1, a2, a3) {
        return {
          left: a0,
          right: a1,
          top: a2,
          bottom: a3
        };
      };

      function CalendarWeekViewComponent_div_7_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeStart_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50);

            var timeEvent_r37 = restoredCtx.$implicit;

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

            return ctx_r49.timeEventResizeStarted(_r2, timeEvent_r37, $event);
          })("resizing", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizing_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50);

            var timeEvent_r37 = restoredCtx.$implicit;

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r51.timeEventResizing(timeEvent_r37, $event);
          })("resizeEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeEnd_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50);

            var timeEvent_r37 = restoredCtx.$implicit;

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r52.timeEventResizeEnded(timeEvent_r37);
          })("dragStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragStart_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50);

            var timeEvent_r37 = restoredCtx.$implicit;

            var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

            return ctx_r53.dragStarted(_r2, _r38, timeEvent_r37);
          })("dragging", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragging_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50);

            var timeEvent_r37 = restoredCtx.$implicit;

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r54.dragMove(timeEvent_r37, $event);
          })("dragEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragEnd_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50);

            var timeEvent_r37 = restoredCtx.$implicit;

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r55.dragEnded(timeEvent_r37, $event, ctx_r55.dayColumnWidth, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_7_div_3_div_2_Template, 1, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_7_div_3_ng_template_3_Template, 0, 0, "ng-template", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template, 1, 12, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CalendarWeekViewComponent_div_7_div_3_div_6_Template, 1, 2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var timeEvent_r37 = ctx.$implicit;

          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("top", timeEvent_r37.top, "px")("height", timeEvent_r37.height, "px")("left", timeEvent_r37.left, "%")("width", timeEvent_r37.width, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-draggable", timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0)("cal-starts-within-day", !timeEvent_r37.startsBeforeDay)("cal-ends-within-day", !timeEvent_r37.endsAfterDay);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", timeEvent_r37.event.cssClass)("hidden", timeEvent_r37.height === 0 && timeEvent_r37.width === 0)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](29, _c23, ctx_r35.dayColumnWidth, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight))("validateResize", ctx_r35.validateResize)("allowNegativeResizes", true)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](34, _c19, timeEvent_r37.event, ctx_r35.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](37, _c8, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0))("dragSnapGrid", ctx_r35.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](40, _c8, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight) : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](43, _c2))("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](44, _c9))("ghostDragEnabled", !ctx_r35.snapDraggedEvents)("ghostElementTemplate", _r41)("validateDrag", ctx_r35.validateDrag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (timeEvent_r37.event == null ? null : timeEvent_r37.event.resizable == null ? null : timeEvent_r37.event.resizable.beforeStart) && !timeEvent_r37.startsBeforeDay);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (timeEvent_r37.event == null ? null : timeEvent_r37.event.resizable == null ? null : timeEvent_r37.event.resizable.afterEnd) && !timeEvent_r37.endsAfterDay);
        }
      }

      function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mwl-calendar-week-view-hour-segment", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_mwlClick_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61);

            var segment_r59 = restoredCtx.$implicit;

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r60.hourSegmentClicked.emit({
              date: segment_r59.date,
              sourceEvent: $event
            });
          })("drop", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_drop_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61);

            var segment_r59 = restoredCtx.$implicit;

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r62.eventDropped($event, segment_r59.date, false);
          })("dragEnter", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_dragEnter_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61);

            var segment_r59 = restoredCtx.$implicit;

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r63.dateDragEnter(segment_r59.date);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var segment_r59 = ctx.$implicit;

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx_r58.hourSegmentHeight, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("segment", segment_r59)("segmentHeight", ctx_r58.hourSegmentHeight)("locale", ctx_r58.locale)("customTemplate", ctx_r58.hourSegmentTemplate)("daysInWeek", ctx_r58.daysInWeek)("clickListenerDisabled", ctx_r58.hourSegmentClicked.observers.length === 0)("dragOverClass", !ctx_r58.dragActive || !ctx_r58.snapDraggedEvents ? "cal-drag-over" : null)("isTimeLabel", ctx_r58.daysInWeek === 1);
        }
      }

      function CalendarWeekViewComponent_div_7_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template, 1, 10, "mwl-calendar-week-view-hour-segment", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hour_r56 = ctx.$implicit;
          var odd_r57 = ctx.odd;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-hour-odd", odd_r57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", hour_r56.segments)("ngForTrackBy", ctx_r36.trackByHourSegment);
        }
      }

      function CalendarWeekViewComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mwl-calendar-week-view-current-time-marker", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_7_div_3_Template, 7, 45, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_7_div_4_Template, 2, 4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r34 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columnDate", column_r34.date)("dayStartHour", ctx_r3.dayStartHour)("dayStartMinute", ctx_r3.dayStartMinute)("dayEndHour", ctx_r3.dayEndHour)("dayEndMinute", ctx_r3.dayEndMinute)("hourSegments", ctx_r3.hourSegments)("hourSegmentHeight", ctx_r3.hourSegmentHeight)("customTemplate", ctx_r3.currentTimeMarkerTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", column_r34.events)("ngForTrackBy", ctx_r3.trackByWeekTimeEvent);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", column_r34.hours)("ngForTrackBy", ctx_r3.trackByHour);
        }
      }

      function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_mwlClick_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var day_r10 = restoredCtx.$implicit;

            var dayHeaderClicked_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().dayHeaderClicked;

            return dayHeaderClicked_r5.emit({
              day: day_r10,
              sourceEvent: $event
            });
          })("drop", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_drop_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var day_r10 = restoredCtx.$implicit;

            var eventDropped_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().eventDropped;

            return eventDropped_r6.emit({
              event: $event.dropData.event,
              newStart: day_r10.date
            });
          })("dragEnter", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_dragEnter_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var day_r10 = restoredCtx.$implicit;

            var dragEnter_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().dragEnter;

            return dragEnter_r8.emit({
              date: day_r10.date
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "calendarDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "calendarDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r10 = ctx.$implicit;

          var locale_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().locale;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-past", day_r10.isPast)("cal-today", day_r10.isToday)("cal-future", day_r10.isFuture)("cal-weekend", day_r10.isWeekend);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", day_r10.cssClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 11, day_r10.date, "weekViewColumnHeader", locale_r4));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](7, 15, day_r10.date, "weekViewColumnSubHeader", locale_r4));
        }
      }

      function CalendarWeekViewHeaderComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template, 8, 19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var days_r3 = ctx.days;
          var trackByWeekDayHeaderDate_r7 = ctx.trackByWeekDayHeaderDate;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r7);
        }
      }

      function CalendarWeekViewHeaderComponent_ng_template_2_Template(rf, ctx) {}

      var _c24 = function _c24(a0, a1, a2, a3, a4, a5) {
        return {
          days: a0,
          locale: a1,
          dayHeaderClicked: a2,
          eventDropped: a3,
          dragEnter: a4,
          trackByWeekDayHeaderDate: a5
        };
      };

      var _c25 = function _c25(a0, a1) {
        return {
          backgroundColor: a0,
          borderColor: a1
        };
      };

      function CalendarWeekViewEventComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlClick_0_listener($event) {
            var eventClicked_r5 = ctx.eventClicked;
            return eventClicked_r5.emit({
              sourceEvent: $event
            });
          })("mwlKeydownEnter", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlKeydownEnter_0_listener($event) {
            var eventClicked_r5 = ctx.eventClicked;
            return eventClicked_r5.emit({
              sourceEvent: $event
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarEventTitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarA11y");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mwl-calendar-event-actions", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mwl-calendar-event-title", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var weekEvent_r3 = ctx.weekEvent;
          var tooltipPlacement_r4 = ctx.tooltipPlacement;
          var tooltipTemplate_r6 = ctx.tooltipTemplate;
          var tooltipAppendToBody_r7 = ctx.tooltipAppendToBody;
          var tooltipDisabled_r8 = ctx.tooltipDisabled;
          var tooltipDelay_r9 = ctx.tooltipDelay;
          var daysInWeek_r11 = ctx.daysInWeek;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](20, _c25, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.secondary, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.primary))("mwlCalendarTooltip", !tooltipDisabled_r8 ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](1, 13, weekEvent_r3.event.title, daysInWeek_r11 === 1 ? "dayTooltip" : "weekTooltip", weekEvent_r3.tempEvent || weekEvent_r3.event) : "")("tooltipPlacement", tooltipPlacement_r4)("tooltipEvent", weekEvent_r3.tempEvent || weekEvent_r3.event)("tooltipTemplate", tooltipTemplate_r6)("tooltipAppendToBody", tooltipAppendToBody_r7)("tooltipDelay", tooltipDelay_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](23, _c13, weekEvent_r3.tempEvent || weekEvent_r3.event, ctx_r1.locale), "eventDescription"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventActionsTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventTitleTemplate)("view", daysInWeek_r11 === 1 ? "day" : "week");
        }
      }

      function CalendarWeekViewEventComponent_ng_template_2_Template(rf, ctx) {}

      var _c26 = function _c26(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return {
          weekEvent: a0,
          tooltipPlacement: a1,
          eventClicked: a2,
          tooltipTemplate: a3,
          tooltipAppendToBody: a4,
          tooltipDisabled: a5,
          tooltipDelay: a6,
          column: a7,
          daysInWeek: a8
        };
      };

      function CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var segment_r3 = ctx_r9.segment;
          var daysInWeek_r7 = ctx_r9.daysInWeek;
          var locale_r4 = ctx_r9.locale;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 1, segment_r3.displayDate, daysInWeek_r7 === 1 ? "dayViewHour" : "weekViewHour", locale_r4), " ");
        }
      }

      function CalendarWeekViewHourSegmentComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarA11y");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template, 3, 5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var segment_r3 = ctx.segment;
          var segmentHeight_r5 = ctx.segmentHeight;
          var isTimeLabel_r6 = ctx.isTimeLabel;
          var daysInWeek_r7 = ctx.daysInWeek;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", segmentHeight_r5, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-hour-start", segment_r3.isStart)("cal-after-hour-start", !segment_r3.isStart);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", segment_r3.cssClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c2), daysInWeek_r7 === 1 ? "hideDayHourSegment" : "hideWeekHourSegment"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", isTimeLabel_r6);
        }
      }

      function CalendarWeekViewHourSegmentComponent_ng_template_2_Template(rf, ctx) {}

      var _c27 = function _c27(a0, a1, a2, a3, a4) {
        return {
          segment: a0,
          locale: a1,
          segmentHeight: a2,
          isTimeLabel: a3,
          daysInWeek: a4
        };
      };

      function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 3);
        }

        if (rf & 2) {
          var topPx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().topPx;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("top", topPx_r9, "px");
        }
      }

      function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template, 1, 2, "div", 2);
        }

        if (rf & 2) {
          var isVisible_r8 = ctx.isVisible;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", isVisible_r8);
        }
      }

      function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template(rf, ctx) {}

      var _c28 = function _c28(a0, a1, a2, a3, a4, a5, a6) {
        return {
          columnDate: a0,
          dayStartHour: a1,
          dayStartMinute: a2,
          dayEndHour: a3,
          dayEndMinute: a4,
          isVisible: a5,
          topPx: a6
        };
      };

      var CalendarEventActionsComponent = function CalendarEventActionsComponent() {
        _classCallCheck(this, CalendarEventActionsComponent);

        this.trackByActionId = function (index, action) {
          return action.id ? action.id : action;
        };
      };

      CalendarEventActionsComponent.ɵfac = function CalendarEventActionsComponent_Factory(t) {
        return new (t || CalendarEventActionsComponent)();
      };

      CalendarEventActionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CalendarEventActionsComponent,
        selectors: [["mwl-calendar-event-actions"]],
        inputs: {
          event: "event",
          customTemplate: "customTemplate"
        },
        decls: 3,
        vars: 5,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-event-actions", 4, "ngIf"], [1, "cal-event-actions"], ["class", "cal-event-action", "href", "javascript:;", "tabindex", "0", "role", "button", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:;", "tabindex", "0", "role", "button", 1, "cal-event-action", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter"]],
        template: function CalendarEventActionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarEventActionsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarEventActionsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c1, ctx.event, ctx.trackByActionId));
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, ClickDirective, KeydownEnterDirective];
        },
        pipes: function pipes() {
          return [CalendarA11yPipe];
        },
        encapsulation: 2
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarEventActionsComponent.prototype, "event", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], CalendarEventActionsComponent.prototype, "customTemplate", void 0);

      var CalendarEventTitleComponent = function CalendarEventTitleComponent() {
        _classCallCheck(this, CalendarEventTitleComponent);
      };

      CalendarEventTitleComponent.ɵfac = function CalendarEventTitleComponent_Factory(t) {
        return new (t || CalendarEventTitleComponent)();
      };

      CalendarEventTitleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CalendarEventTitleComponent,
        selectors: [["mwl-calendar-event-title"]],
        inputs: {
          event: "event",
          customTemplate: "customTemplate",
          view: "view"
        },
        decls: 3,
        vars: 5,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event-title", 3, "innerHTML"]],
        template: function CalendarEventTitleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarEventTitleComponent_ng_template_0_Template, 3, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarEventTitleComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c3, ctx.event, ctx.view));
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet];
        },
        pipes: function pipes() {
          return [CalendarEventTitlePipe, CalendarA11yPipe];
        },
        encapsulation: 2
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarEventTitleComponent.prototype, "event", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], CalendarEventTitleComponent.prototype, "customTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], CalendarEventTitleComponent.prototype, "view", void 0);

      var CalendarTooltipWindowComponent = function CalendarTooltipWindowComponent() {
        _classCallCheck(this, CalendarTooltipWindowComponent);
      };

      CalendarTooltipWindowComponent.ɵfac = function CalendarTooltipWindowComponent_Factory(t) {
        return new (t || CalendarTooltipWindowComponent)();
      };

      CalendarTooltipWindowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CalendarTooltipWindowComponent,
        selectors: [["mwl-calendar-tooltip-window"]],
        inputs: {
          contents: "contents",
          placement: "placement",
          event: "event",
          customTemplate: "customTemplate"
        },
        decls: 3,
        vars: 6,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-tooltip", 3, "ngClass"], [1, "cal-tooltip-arrow"], [1, "cal-tooltip-inner", 3, "innerHtml"]],
        template: function CalendarTooltipWindowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarTooltipWindowComponent_ng_template_0_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarTooltipWindowComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](2, _c4, ctx.contents, ctx.placement, ctx.event));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
        encapsulation: 2
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], CalendarTooltipWindowComponent.prototype, "contents", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], CalendarTooltipWindowComponent.prototype, "placement", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarTooltipWindowComponent.prototype, "event", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], CalendarTooltipWindowComponent.prototype, "customTemplate", void 0);

      var CalendarTooltipDirective = /*#__PURE__*/function () {
        function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
        ) {
          _classCallCheck(this, CalendarTooltipDirective);

          this.elementRef = elementRef;
          this.injector = injector;
          this.renderer = renderer;
          this.viewContainerRef = viewContainerRef;
          this.document = document;
          this.placement = 'auto'; // tslint:disable-line no-input-rename

          this.delay = null; // tslint:disable-line no-input-rename

          this.cancelTooltipDelay$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
        }

        _createClass(CalendarTooltipDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this.tooltipRef && (changes.contents || changes.customTemplate || changes.event)) {
              this.tooltipRef.instance.contents = this.contents;
              this.tooltipRef.instance.customTemplate = this.customTemplate;
              this.tooltipRef.instance.event = this.event;
              this.tooltipRef.changeDetectorRef.markForCheck();

              if (!this.contents) {
                this.hide();
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.hide();
          }
        }, {
          key: "onMouseOver",
          value: function onMouseOver() {
            var _this = this;

            var delay$ = this.delay === null ? (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)('now') : (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(this.delay);
            delay$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.cancelTooltipDelay$)).subscribe(function () {
              _this.show();
            });
          }
        }, {
          key: "onMouseOut",
          value: function onMouseOut() {
            this.hide();
          }
        }, {
          key: "show",
          value: function show() {
            var _this2 = this;

            if (!this.tooltipRef && this.contents) {
              this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
              this.tooltipRef.instance.contents = this.contents;
              this.tooltipRef.instance.customTemplate = this.customTemplate;
              this.tooltipRef.instance.event = this.event;

              if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
              }

              requestAnimationFrame(function () {
                _this2.positionTooltip();
              });
            }
          }
        }, {
          key: "hide",
          value: function hide() {
            if (this.tooltipRef) {
              this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
              this.tooltipRef = null;
            }

            this.cancelTooltipDelay$.next();
          }
        }, {
          key: "positionTooltip",
          value: function positionTooltip() {
            var previousPositions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            if (this.tooltipRef) {
              this.tooltipRef.changeDetectorRef.detectChanges();
              this.tooltipRef.instance.placement = (0, positioning__WEBPACK_IMPORTED_MODULE_0__.positionElements)(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody); // keep re-positioning the tooltip until the arrow position doesn't make a difference

              if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
                this.positionTooltip([].concat(_toConsumableArray(previousPositions), [this.tooltipRef.instance.placement]));
              }
            }
          }
        }]);

        return CalendarTooltipDirective;
      }();

      CalendarTooltipDirective.ɵfac = function CalendarTooltipDirective_Factory(t) {
        return new (t || CalendarTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
      };

      CalendarTooltipDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: CalendarTooltipDirective,
        selectors: [["", "mwlCalendarTooltip", ""]],
        hostBindings: function CalendarTooltipDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function CalendarTooltipDirective_mouseenter_HostBindingHandler() {
              return ctx.onMouseOver();
            })("mouseleave", function CalendarTooltipDirective_mouseleave_HostBindingHandler() {
              return ctx.onMouseOut();
            });
          }
        },
        inputs: {
          placement: ["tooltipPlacement", "placement"],
          delay: ["tooltipDelay", "delay"],
          contents: ["mwlCalendarTooltip", "contents"],
          customTemplate: ["tooltipTemplate", "customTemplate"],
          event: ["tooltipEvent", "event"],
          appendToBody: ["tooltipAppendToBody", "appendToBody"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
      });

      CalendarTooltipDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
          }]
        }];
      };

      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)('mwlCalendarTooltip'), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], CalendarTooltipDirective.prototype, "contents", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)('tooltipPlacement'), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarTooltipDirective.prototype, "placement", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)('tooltipTemplate'), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], CalendarTooltipDirective.prototype, "customTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)('tooltipEvent'), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarTooltipDirective.prototype, "event", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)('tooltipAppendToBody'), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)], CalendarTooltipDirective.prototype, "appendToBody", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)('tooltipDelay'), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], CalendarTooltipDirective.prototype, "delay", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('mouseenter'), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", []), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], CalendarTooltipDirective.prototype, "onMouseOver", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('mouseleave'), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", []), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], CalendarTooltipDirective.prototype, "onMouseOut", null);
      CalendarTooltipDirective = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(5, (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef, Object])], CalendarTooltipDirective);

      var _DateAdapter = function _DateAdapter() {
        _classCallCheck(this, _DateAdapter);
      };

      var _CalendarView;

      (function (CalendarView) {
        CalendarView["Month"] = "month";
        CalendarView["Week"] = "week";
        CalendarView["Day"] = "day";
      })(_CalendarView || (_CalendarView = {}));

      var validateEvents = function validateEvents(events) {
        var warn = function warn() {
          var _console;

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return (_console = console).warn.apply(_console, ['angular-calendar'].concat(args));
        };

        return (0, calendar_utils__WEBPACK_IMPORTED_MODULE_1__.validateEvents)(events, warn);
      };

      function isInside(outer, inner) {
        return Math.floor(outer.left) <= Math.ceil(inner.left) && Math.floor(inner.left) <= Math.ceil(outer.right) && Math.floor(outer.left) <= Math.ceil(inner.right) && Math.floor(inner.right) <= Math.ceil(outer.right) && Math.floor(outer.top) <= Math.ceil(inner.top) && Math.floor(inner.top) <= Math.ceil(outer.bottom) && Math.floor(outer.top) <= Math.ceil(inner.bottom) && Math.floor(inner.bottom) <= Math.ceil(outer.bottom);
      }

      function roundToNearest(amount, precision) {
        return Math.round(amount / precision) * precision;
      }

      var trackByEventId = function trackByEventId(index, event) {
        return event.id ? event.id : event;
      };

      var trackByWeekDayHeaderDate = function trackByWeekDayHeaderDate(index, day) {
        return day.date.toISOString();
      };

      var trackByHourSegment = function trackByHourSegment(index, segment) {
        return segment.date.toISOString();
      };

      var trackByHour = function trackByHour(index, hour) {
        return hour.segments[0].date.toISOString();
      };

      var trackByWeekAllDayEvent = function trackByWeekAllDayEvent(index, weekEvent) {
        return weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
      };

      var trackByWeekTimeEvent = function trackByWeekTimeEvent(index, weekEvent) {
        return weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
      };

      var MINUTES_IN_HOUR = 60;

      function getPixelAmountInMinutes(hourSegments, hourSegmentHeight) {
        return MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
      }

      function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
        var draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
        var pixelAmountInMinutes = getPixelAmountInMinutes(hourSegments, hourSegmentHeight);
        return draggedInPixelsSnapSize * pixelAmountInMinutes;
      }

      function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
        return getPixelAmountInMinutes(hourSegments, hourSegmentHeight) * hourSegmentHeight;
      }

      function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
        if (event.end) {
          return event.end;
        } else {
          return dateAdapter.addMinutes(event.start, minimumMinutes);
        }
      }

      function addDaysWithExclusions(dateAdapter, date, days, excluded) {
        var daysCounter = 0;
        var daysToAdd = 0;
        var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
        var result = date;

        while (daysToAdd <= Math.abs(days)) {
          result = changeDays(date, daysCounter);
          var day = dateAdapter.getDay(result);

          if (excluded.indexOf(day) === -1) {
            daysToAdd++;
          }

          daysCounter++;
        }

        return result;
      }

      function isDraggedWithinPeriod(newStart, newEnd, period) {
        var end = newEnd || newStart;
        return period.start <= newStart && newStart <= period.end || period.start <= end && end <= period.end;
      }

      function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
        return dropEvent.dropData && dropEvent.dropData.event && (dropEvent.dropData.calendarId !== calendarId || dropEvent.dropData.event.allDay && !allDay || !dropEvent.dropData.event.allDay && allDay);
      }

      function _getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn) {
        var excluded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
        var daysInWeek = arguments.length > 4 ? arguments[4] : undefined;
        var viewStart = daysInWeek ? dateAdapter.startOfDay(viewDate) : dateAdapter.startOfWeek(viewDate, {
          weekStartsOn: weekStartsOn
        });
        var endOfWeek = dateAdapter.endOfWeek(viewDate, {
          weekStartsOn: weekStartsOn
        });

        while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 && viewStart < endOfWeek) {
          viewStart = dateAdapter.addDays(viewStart, 1);
        }

        if (daysInWeek) {
          var viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
          return {
            viewStart: viewStart,
            viewEnd: viewEnd
          };
        } else {
          var _viewEnd = endOfWeek;

          while (excluded.indexOf(dateAdapter.getDay(_viewEnd)) > -1 && _viewEnd > viewStart) {
            _viewEnd = dateAdapter.subDays(_viewEnd, 1);
          }

          return {
            viewStart: viewStart,
            viewEnd: _viewEnd
          };
        }
      }

      function isWithinThreshold(_ref) {
        var x = _ref.x,
            y = _ref.y;
        var DRAG_THRESHOLD = 1;
        return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
      }
      /**
       * Change the view date to the previous view. For example:
       *
       * ```typescript
       * <button
       *  mwlCalendarPreviousView
       *  [(viewDate)]="viewDate"
       *  [view]="view">
       *  Previous
       * </button>
       * ```
       */


      var CalendarPreviousViewDirective = /*#__PURE__*/function () {
        function CalendarPreviousViewDirective(dateAdapter) {
          _classCallCheck(this, CalendarPreviousViewDirective);

          this.dateAdapter = dateAdapter;
          /**
           * Days to skip when going back by 1 day
           */

          this.excludeDays = [];
          /**
           * Called when the view date is changed
           */

          this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }
        /**
         * @hidden
         */


        _createClass(CalendarPreviousViewDirective, [{
          key: "onClick",
          value: function onClick() {
            var subFn = {
              day: this.dateAdapter.subDays,
              week: this.dateAdapter.subWeeks,
              month: this.dateAdapter.subMonths
            }[this.view];

            if (this.view === _CalendarView.Day) {
              this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
            } else if (this.view === _CalendarView.Week && this.daysInWeek) {
              this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
            } else {
              this.viewDateChange.emit(subFn(this.viewDate, 1));
            }
          }
        }]);

        return CalendarPreviousViewDirective;
      }();

      CalendarPreviousViewDirective.ɵfac = function CalendarPreviousViewDirective_Factory(t) {
        return new (t || CalendarPreviousViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_DateAdapter));
      };

      CalendarPreviousViewDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: CalendarPreviousViewDirective,
        selectors: [["", "mwlCalendarPreviousView", ""]],
        hostBindings: function CalendarPreviousViewDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarPreviousViewDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        },
        inputs: {
          excludeDays: "excludeDays",
          view: "view",
          viewDate: "viewDate",
          daysInWeek: "daysInWeek"
        },
        outputs: {
          viewDateChange: "viewDateChange"
        }
      });

      CalendarPreviousViewDirective.ctorParameters = function () {
        return [{
          type: _DateAdapter
        }];
      };

      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], CalendarPreviousViewDirective.prototype, "view", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)], CalendarPreviousViewDirective.prototype, "viewDate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)], CalendarPreviousViewDirective.prototype, "excludeDays", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], CalendarPreviousViewDirective.prototype, "daysInWeek", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter)], CalendarPreviousViewDirective.prototype, "viewDateChange", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('click'), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", []), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], CalendarPreviousViewDirective.prototype, "onClick", null);
      CalendarPreviousViewDirective = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_DateAdapter])], CalendarPreviousViewDirective);
      /**
       * Change the view date to the next view. For example:
       *
       * ```typescript
       * <button
       *  mwlCalendarNextView
       *  [(viewDate)]="viewDate"
       *  [view]="view">
       *  Next
       * </button>
       * ```
       */

      var CalendarNextViewDirective = /*#__PURE__*/function () {
        function CalendarNextViewDirective(dateAdapter) {
          _classCallCheck(this, CalendarNextViewDirective);

          this.dateAdapter = dateAdapter;
          /**
           * Days to skip when going forward by 1 day
           */

          this.excludeDays = [];
          /**
           * Called when the view date is changed
           */

          this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }
        /**
         * @hidden
         */


        _createClass(CalendarNextViewDirective, [{
          key: "onClick",
          value: function onClick() {
            var addFn = {
              day: this.dateAdapter.addDays,
              week: this.dateAdapter.addWeeks,
              month: this.dateAdapter.addMonths
            }[this.view];

            if (this.view === _CalendarView.Day) {
              this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
            } else if (this.view === _CalendarView.Week && this.daysInWeek) {
              this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
            } else {
              this.viewDateChange.emit(addFn(this.viewDate, 1));
            }
          }
        }]);

        return CalendarNextViewDirective;
      }();

      CalendarNextViewDirective.ɵfac = function CalendarNextViewDirective_Factory(t) {
        return new (t || CalendarNextViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_DateAdapter));
      };

      CalendarNextViewDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: CalendarNextViewDirective,
        selectors: [["", "mwlCalendarNextView", ""]],
        hostBindings: function CalendarNextViewDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarNextViewDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        },
        inputs: {
          excludeDays: "excludeDays",
          view: "view",
          viewDate: "viewDate",
          daysInWeek: "daysInWeek"
        },
        outputs: {
          viewDateChange: "viewDateChange"
        }
      });

      CalendarNextViewDirective.ctorParameters = function () {
        return [{
          type: _DateAdapter
        }];
      };

      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], CalendarNextViewDirective.prototype, "view", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)], CalendarNextViewDirective.prototype, "viewDate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)], CalendarNextViewDirective.prototype, "excludeDays", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], CalendarNextViewDirective.prototype, "daysInWeek", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter)], CalendarNextViewDirective.prototype, "viewDateChange", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('click'), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", []), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], CalendarNextViewDirective.prototype, "onClick", null);
      CalendarNextViewDirective = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_DateAdapter])], CalendarNextViewDirective);
      /**
       * Change the view date to the current day. For example:
       *
       * ```typescript
       * <button
       *  mwlCalendarToday
       *  [(viewDate)]="viewDate">
       *  Today
       * </button>
       * ```
       */

      var CalendarTodayDirective = /*#__PURE__*/function () {
        function CalendarTodayDirective(dateAdapter) {
          _classCallCheck(this, CalendarTodayDirective);

          this.dateAdapter = dateAdapter;
          /**
           * Called when the view date is changed
           */

          this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }
        /**
         * @hidden
         */


        _createClass(CalendarTodayDirective, [{
          key: "onClick",
          value: function onClick() {
            this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
          }
        }]);

        return CalendarTodayDirective;
      }();

      CalendarTodayDirective.ɵfac = function CalendarTodayDirective_Factory(t) {
        return new (t || CalendarTodayDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_DateAdapter));
      };

      CalendarTodayDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: CalendarTodayDirective,
        selectors: [["", "mwlCalendarToday", ""]],
        hostBindings: function CalendarTodayDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarTodayDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        },
        inputs: {
          viewDate: "viewDate"
        },
        outputs: {
          viewDateChange: "viewDateChange"
        }
      });

      CalendarTodayDirective.ctorParameters = function () {
        return [{
          type: _DateAdapter
        }];
      };

      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)], CalendarTodayDirective.prototype, "viewDate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter)], CalendarTodayDirective.prototype, "viewDateChange", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('click'), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Function), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", []), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:returntype", void 0)], CalendarTodayDirective.prototype, "onClick", null);
      CalendarTodayDirective = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_DateAdapter])], CalendarTodayDirective);
      /**
       * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
       */

      var _CalendarAngularDateFormatter = /*#__PURE__*/function () {
        function CalendarAngularDateFormatter(dateAdapter) {
          _classCallCheck(this, CalendarAngularDateFormatter);

          this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */


        _createClass(CalendarAngularDateFormatter, [{
          key: "monthViewColumnHeader",
          value: function monthViewColumnHeader(_ref2) {
            var date = _ref2.date,
                locale = _ref2.locale;
            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'EEEE', locale);
          }
          /**
           * The month view cell day number
           */

        }, {
          key: "monthViewDayNumber",
          value: function monthViewDayNumber(_ref3) {
            var date = _ref3.date,
                locale = _ref3.locale;
            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'd', locale);
          }
          /**
           * The month view title
           */

        }, {
          key: "monthViewTitle",
          value: function monthViewTitle(_ref4) {
            var date = _ref4.date,
                locale = _ref4.locale;
            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'LLLL y', locale);
          }
          /**
           * The week view header week day labels
           */

        }, {
          key: "weekViewColumnHeader",
          value: function weekViewColumnHeader(_ref5) {
            var date = _ref5.date,
                locale = _ref5.locale;
            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'EEEE', locale);
          }
          /**
           * The week view sub header day and month labels
           */

        }, {
          key: "weekViewColumnSubHeader",
          value: function weekViewColumnSubHeader(_ref6) {
            var date = _ref6.date,
                locale = _ref6.locale;
            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'MMM d', locale);
          }
          /**
           * The week view title
           */

        }, {
          key: "weekViewTitle",
          value: function weekViewTitle(_ref7) {
            var date = _ref7.date,
                locale = _ref7.locale,
                weekStartsOn = _ref7.weekStartsOn,
                excludeDays = _ref7.excludeDays,
                daysInWeek = _ref7.daysInWeek;

            var _getWeekViewPeriod2 = _getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
                viewStart = _getWeekViewPeriod2.viewStart,
                viewEnd = _getWeekViewPeriod2.viewEnd;

            var format = function format(dateToFormat, showYear) {
              return (0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);
            };

            return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
          }
          /**
           * The time formatting down the left hand side of the week view
           */

        }, {
          key: "weekViewHour",
          value: function weekViewHour(_ref8) {
            var date = _ref8.date,
                locale = _ref8.locale;
            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'h a', locale);
          }
          /**
           * The time formatting down the left hand side of the day view
           */

        }, {
          key: "dayViewHour",
          value: function dayViewHour(_ref9) {
            var date = _ref9.date,
                locale = _ref9.locale;
            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'h a', locale);
          }
          /**
           * The day view title
           */

        }, {
          key: "dayViewTitle",
          value: function dayViewTitle(_ref10) {
            var date = _ref10.date,
                locale = _ref10.locale;
            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'EEEE, MMMM d, y', locale);
          }
        }]);

        return CalendarAngularDateFormatter;
      }();

      _CalendarAngularDateFormatter.ɵfac = function CalendarAngularDateFormatter_Factory(t) {
        return new (t || _CalendarAngularDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_DateAdapter));
      };

      _CalendarAngularDateFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _CalendarAngularDateFormatter,
        factory: function factory(t) {
          return _CalendarAngularDateFormatter.ɵfac(t);
        }
      });

      _CalendarAngularDateFormatter.ctorParameters = function () {
        return [{
          type: _DateAdapter
        }];
      };

      _CalendarAngularDateFormatter = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_DateAdapter])], _CalendarAngularDateFormatter);
      /**
       * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
       *
       * If you wish, you may override any of the defaults via angulars DI. For example:
       *
       * ```typescript
       * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
       * import { formatDate } from '@angular/common';
       * import { Injectable } from '@angular/core';
       *
       * @Injectable()
       * class CustomDateFormatter extends CalendarDateFormatter {
       *
       *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
       *     return formatDate(date, 'EEE', locale); // use short week days
       *   }
       *
       * }
       *
       * // in your component that uses the calendar
       * providers: [{
       *   provide: CalendarDateFormatter,
       *   useClass: CustomDateFormatter
       * }]
       * ```
       */

      var _CalendarDateFormatter = /*#__PURE__*/function (_CalendarAngularDateF) {
        _inherits(CalendarDateFormatter, _CalendarAngularDateF);

        var _super = _createSuper(CalendarDateFormatter);

        function CalendarDateFormatter() {
          _classCallCheck(this, CalendarDateFormatter);

          return _super.apply(this, arguments);
        }

        return CalendarDateFormatter;
      }(_CalendarAngularDateFormatter);

      _CalendarDateFormatter.ɵfac = /*@__PURE__*/function () {
        var ɵCalendarDateFormatter_BaseFactory;
        return function CalendarDateFormatter_Factory(t) {
          return (ɵCalendarDateFormatter_BaseFactory || (ɵCalendarDateFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_CalendarDateFormatter)))(t || _CalendarDateFormatter);
        };
      }();

      _CalendarDateFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _CalendarDateFormatter,
        factory: function factory(t) {
          return _CalendarDateFormatter.ɵfac(t);
        }
      });
      /**
       * This pipe is primarily for rendering the current view title. Example usage:
       * ```typescript
       * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
       * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
       * ```
       */

      var CalendarDatePipe = /*#__PURE__*/function () {
        function CalendarDatePipe(dateFormatter, locale) {
          _classCallCheck(this, CalendarDatePipe);

          this.dateFormatter = dateFormatter;
          this.locale = locale;
        }

        _createClass(CalendarDatePipe, [{
          key: "transform",
          value: function transform(date, method) {
            var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.locale;
            var weekStartsOn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var excludeDays = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
            var daysInWeek = arguments.length > 5 ? arguments[5] : undefined;

            if (typeof this.dateFormatter[method] === 'undefined') {
              var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(_CalendarDateFormatter.prototype)).filter(function (iMethod) {
                return iMethod !== 'constructor';
              });
              throw new Error("".concat(method, " is not a valid date formatter. Can only be one of ").concat(allowedMethods.join(', ')));
            }

            return this.dateFormatter[method]({
              date: date,
              locale: locale,
              weekStartsOn: weekStartsOn,
              excludeDays: excludeDays,
              daysInWeek: daysInWeek
            });
          }
        }]);

        return CalendarDatePipe;
      }();

      CalendarDatePipe.ɵfac = function CalendarDatePipe_Factory(t) {
        return new (t || CalendarDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_CalendarDateFormatter, 16), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID, 16));
      };

      CalendarDatePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
        name: "calendarDate",
        type: CalendarDatePipe,
        pure: true
      });

      CalendarDatePipe.ctorParameters = function () {
        return [{
          type: _CalendarDateFormatter
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID]
          }]
        }];
      };

      CalendarDatePipe = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(1, (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID)), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_CalendarDateFormatter, String])], CalendarDatePipe);
      /**
       * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
       *
       * ```typescript
       * import { Injectable } from '@angular/core';
       * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
       *
       * @Injectable()
       * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
       *
       *   month(event: CalendarEvent): string {
       *     return `Custom prefix: ${event.title}`;
       *   }
       *
       * }
       *
       * // in your component
       * providers: [{
       *  provide: CalendarEventTitleFormatter,
       *  useClass: CustomEventTitleFormatter
       * }]
       * ```
       */

      var _CalendarEventTitleFormatter = /*#__PURE__*/function () {
        function _CalendarEventTitleFormatter() {
          _classCallCheck(this, _CalendarEventTitleFormatter);
        }

        _createClass(_CalendarEventTitleFormatter, [{
          key: "month",
          value:
          /**
           * The month view event title.
           */
          function month(event, title) {
            return event.title;
          }
          /**
           * The month view event tooltip. Return a falsey value from this to disable the tooltip.
           */

        }, {
          key: "monthTooltip",
          value: function monthTooltip(event, title) {
            return event.title;
          }
          /**
           * The week view event title.
           */

        }, {
          key: "week",
          value: function week(event, title) {
            return event.title;
          }
          /**
           * The week view event tooltip. Return a falsey value from this to disable the tooltip.
           */

        }, {
          key: "weekTooltip",
          value: function weekTooltip(event, title) {
            return event.title;
          }
          /**
           * The day view event title.
           */

        }, {
          key: "day",
          value: function day(event, title) {
            return event.title;
          }
          /**
           * The day view event tooltip. Return a falsey value from this to disable the tooltip.
           */

        }, {
          key: "dayTooltip",
          value: function dayTooltip(event, title) {
            return event.title;
          }
        }]);

        return _CalendarEventTitleFormatter;
      }();

      var CalendarEventTitlePipe = /*#__PURE__*/function () {
        function CalendarEventTitlePipe(calendarEventTitle) {
          _classCallCheck(this, CalendarEventTitlePipe);

          this.calendarEventTitle = calendarEventTitle;
        }

        _createClass(CalendarEventTitlePipe, [{
          key: "transform",
          value: function transform(title, titleType, event) {
            return this.calendarEventTitle[titleType](event, title);
          }
        }]);

        return CalendarEventTitlePipe;
      }();

      CalendarEventTitlePipe.ɵfac = function CalendarEventTitlePipe_Factory(t) {
        return new (t || CalendarEventTitlePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_CalendarEventTitleFormatter, 16));
      };

      CalendarEventTitlePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
        name: "calendarEventTitle",
        type: CalendarEventTitlePipe,
        pure: true
      });

      CalendarEventTitlePipe.ctorParameters = function () {
        return [{
          type: _CalendarEventTitleFormatter
        }];
      };

      CalendarEventTitlePipe = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_CalendarEventTitleFormatter])], CalendarEventTitlePipe);

      var ClickDirective = /*#__PURE__*/function () {
        function ClickDirective(renderer, elm, document) {
          _classCallCheck(this, ClickDirective);

          this.renderer = renderer;
          this.elm = elm;
          this.document = document;
          this.clickListenerDisabled = false;
          this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(); // tslint:disable-line

          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        }

        _createClass(ClickDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            if (!this.clickListenerDisabled) {
              this.listen().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(function (event) {
                event.stopPropagation();

                _this3.click.emit(event);
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
          }
        }, {
          key: "listen",
          value: function listen() {
            var _this4 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_9__.Observable(function (observer) {
              return _this4.renderer.listen(_this4.elm.nativeElement, 'click', function (event) {
                observer.next(event);
              });
            });
          }
        }]);

        return ClickDirective;
      }();

      ClickDirective.ɵfac = function ClickDirective_Factory(t) {
        return new (t || ClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
      };

      ClickDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: ClickDirective,
        selectors: [["", "mwlClick", ""]],
        inputs: {
          clickListenerDisabled: "clickListenerDisabled"
        },
        outputs: {
          click: "mwlClick"
        }
      });

      ClickDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
          }]
        }];
      };

      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], ClickDirective.prototype, "clickListenerDisabled", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)('mwlClick'), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], ClickDirective.prototype, "click", void 0);
      ClickDirective = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(2, (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef, Object])], ClickDirective);

      var KeydownEnterDirective = /*#__PURE__*/function () {
        function KeydownEnterDirective(host, ngZone, renderer) {
          _classCallCheck(this, KeydownEnterDirective);

          this.host = host;
          this.ngZone = ngZone;
          this.renderer = renderer;
          this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(); // tslint:disable-line

          this.keydownListener = null;
        }

        _createClass(KeydownEnterDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.ngZone.runOutsideAngular(function () {
              _this5.keydownListener = _this5.renderer.listen(_this5.host.nativeElement, 'keydown', function (event) {
                if (event.keyCode === 13 || event.which === 13 || event.key === 'Enter') {
                  event.preventDefault();
                  event.stopPropagation();

                  _this5.ngZone.run(function () {
                    _this5.keydown.emit(event);
                  });
                }
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.keydownListener !== null) {
              this.keydownListener();
              this.keydownListener = null;
            }
          }
        }]);

        return KeydownEnterDirective;
      }();

      KeydownEnterDirective.ɵfac = function KeydownEnterDirective_Factory(t) {
        return new (t || KeydownEnterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2));
      };

      KeydownEnterDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: KeydownEnterDirective,
        selectors: [["", "mwlKeydownEnter", ""]],
        outputs: {
          keydown: "mwlKeydownEnter"
        }
      });

      KeydownEnterDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
        }];
      };

      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)('mwlKeydownEnter'), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], KeydownEnterDirective.prototype, "keydown", void 0);
      KeydownEnterDirective = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2])], KeydownEnterDirective);

      var _CalendarUtils = /*#__PURE__*/function () {
        function CalendarUtils(dateAdapter) {
          _classCallCheck(this, CalendarUtils);

          this.dateAdapter = dateAdapter;
        }

        _createClass(CalendarUtils, [{
          key: "getMonthView",
          value: function getMonthView(args) {
            return (0, calendar_utils__WEBPACK_IMPORTED_MODULE_1__.getMonthView)(this.dateAdapter, args);
          }
        }, {
          key: "getWeekViewHeader",
          value: function getWeekViewHeader(args) {
            return (0, calendar_utils__WEBPACK_IMPORTED_MODULE_1__.getWeekViewHeader)(this.dateAdapter, args);
          }
        }, {
          key: "getWeekView",
          value: function getWeekView(args) {
            return (0, calendar_utils__WEBPACK_IMPORTED_MODULE_1__.getWeekView)(this.dateAdapter, args);
          }
        }]);

        return CalendarUtils;
      }();

      _CalendarUtils.ɵfac = function CalendarUtils_Factory(t) {
        return new (t || _CalendarUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_DateAdapter));
      };

      _CalendarUtils.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _CalendarUtils,
        factory: function factory(t) {
          return _CalendarUtils.ɵfac(t);
        }
      });

      _CalendarUtils.ctorParameters = function () {
        return [{
          type: _DateAdapter
        }];
      };

      _CalendarUtils = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_DateAdapter])], _CalendarUtils);
      /**
       * This class is responsible for adding accessibility to the calendar.
       * You may override any of its methods via angulars DI to suit your requirements.
       * For example:
       *
       * ```typescript
       * import { A11yParams, CalendarA11y } from 'angular-calendar';
       * import { formatDate, I18nPluralPipe } from '@angular/common';
       * import { Injectable } from '@angular/core';
       *
       * // adding your own a11y params
       * export interface CustomA11yParams extends A11yParams {
       *   isDrSuess?: boolean;
       * }
       *
       * @Injectable()
       * export class CustomCalendarA11y extends CalendarA11y {
       *   constructor(protected i18nPlural: I18nPluralPipe) {
       *     super(i18nPlural);
       *   }
       *
       *   // overriding a function
       *   public openDayEventsLandmark({ date, locale, isDrSuess }: CustomA11yParams): string {
       *     if (isDrSuess) {
       *       return `
       *         ${formatDate(date, 'EEEE MMMM d', locale)}
       *          Today you are you! That is truer than true! There is no one alive
       *          who is you-er than you!
       *       `;
       *     }
       *   }
       * }
       *
       * // in your component that uses the calendar
       * providers: [{
       *  provide: CalendarA11y,
       *  useClass: CustomCalendarA11y
       * }]
       * ```
       */

      var _CalendarA11y = /*#__PURE__*/function () {
        function CalendarA11y(i18nPlural) {
          _classCallCheck(this, CalendarA11y);

          this.i18nPlural = i18nPlural;
        }
        /**
         * Aria label for the badges/date of a cell
         * @example: `Saturday October 19 1 event click to expand`
         */


        _createClass(CalendarA11y, [{
          key: "monthCell",
          value: function monthCell(_ref11) {
            var day = _ref11.day,
                locale = _ref11.locale;

            if (day.badgeTotal > 0) {
              return "\n        ".concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(day.date, 'EEEE MMMM d', locale), ",\n        ").concat(this.i18nPlural.transform(day.badgeTotal, {
                '=0': 'No events',
                '=1': 'One event',
                other: '# events'
              }), ",\n         click to expand\n      ");
            } else {
              return "".concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(day.date, 'EEEE MMMM d', locale));
            }
          }
          /**
           * Aria label for the open day events start landmark
           * @example: `Saturday October 19 expanded view`
           */

        }, {
          key: "openDayEventsLandmark",
          value: function openDayEventsLandmark(_ref12) {
            var date = _ref12.date,
                locale = _ref12.locale;
            return "\n      Beginning of expanded view for ".concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'EEEE MMMM dd', locale), "\n    ");
          }
          /**
           * Aria label for alert that a day in the month view was expanded
           * @example: `Saturday October 19 expanded`
           */

        }, {
          key: "openDayEventsAlert",
          value: function openDayEventsAlert(_ref13) {
            var date = _ref13.date,
                locale = _ref13.locale;
            return "".concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(date, 'EEEE MMMM dd', locale), " expanded");
          }
          /**
           * Descriptive aria label for an event
           * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
           */

        }, {
          key: "eventDescription",
          value: function eventDescription(_ref14) {
            var event = _ref14.event,
                locale = _ref14.locale;

            if (event.allDay === true) {
              return this.allDayEventDescription({
                event: event,
                locale: locale
              });
            }

            var aria = "\n      ".concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(event.start, 'EEEE MMMM dd', locale), ",\n      ").concat(event.title, ", from ").concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(event.start, 'hh:mm a', locale), "\n    ");

            if (event.end) {
              return aria + " to ".concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(event.end, 'hh:mm a', locale));
            }

            return aria;
          }
          /**
           * Descriptive aria label for an all day event
           * @example:
           * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
           */

        }, {
          key: "allDayEventDescription",
          value: function allDayEventDescription(_ref15) {
            var event = _ref15.event,
                locale = _ref15.locale;
            var aria = "\n      ".concat(event.title, ", event spans multiple days:\n      start time ").concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(event.start, 'MMMM dd hh:mm a', locale), "\n    ");

            if (event.end) {
              return aria + ", stop time ".concat((0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(event.end, 'MMMM d hh:mm a', locale));
            }

            return aria + ", no stop time";
          }
          /**
           * Aria label for the calendar event actions icons
           * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
           */

        }, {
          key: "actionButtonLabel",
          value: function actionButtonLabel(_ref16) {
            var action = _ref16.action;
            return action.a11yLabel;
          }
          /**
           * @returns {number} Tab index to be given to month cells
           */

        }, {
          key: "monthCellTabIndex",
          value: function monthCellTabIndex() {
            return 0;
          }
          /**
           * @returns true if the events inside the month cell should be aria-hidden
           */

        }, {
          key: "hideMonthCellEvents",
          value: function hideMonthCellEvents() {
            return true;
          }
          /**
           * @returns true if event titles should be aria-hidden (global)
           */

        }, {
          key: "hideEventTitle",
          value: function hideEventTitle() {
            return true;
          }
          /**
           * @returns true if hour segments in the week view should be aria-hidden
           */

        }, {
          key: "hideWeekHourSegment",
          value: function hideWeekHourSegment() {
            return true;
          }
          /**
           * @returns true if hour segments in the day view should be aria-hidden
           */

        }, {
          key: "hideDayHourSegment",
          value: function hideDayHourSegment() {
            return true;
          }
        }]);

        return CalendarA11y;
      }();

      _CalendarA11y.ɵfac = function CalendarA11y_Factory(t) {
        return new (t || _CalendarA11y)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.I18nPluralPipe));
      };

      _CalendarA11y.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _CalendarA11y,
        factory: function factory(t) {
          return _CalendarA11y.ɵfac(t);
        }
      });

      _CalendarA11y.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.I18nPluralPipe
        }];
      };

      _CalendarA11y = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__.I18nPluralPipe])], _CalendarA11y);
      /**
       * This pipe is primarily for rendering aria labels. Example usage:
       * ```typescript
       * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
       * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
       * ```
       */

      var CalendarA11yPipe = /*#__PURE__*/function () {
        function CalendarA11yPipe(calendarA11y, locale) {
          _classCallCheck(this, CalendarA11yPipe);

          this.calendarA11y = calendarA11y;
          this.locale = locale;
        }

        _createClass(CalendarA11yPipe, [{
          key: "transform",
          value: function transform(a11yParams, method) {
            a11yParams.locale = a11yParams.locale || this.locale;

            if (typeof this.calendarA11y[method] === 'undefined') {
              var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(_CalendarA11y.prototype)).filter(function (iMethod) {
                return iMethod !== 'constructor';
              });
              throw new Error("".concat(method, " is not a valid a11y method. Can only be one of ").concat(allowedMethods.join(', ')));
            }

            return this.calendarA11y[method](a11yParams);
          }
        }]);

        return CalendarA11yPipe;
      }();

      CalendarA11yPipe.ɵfac = function CalendarA11yPipe_Factory(t) {
        return new (t || CalendarA11yPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_CalendarA11y, 16), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID, 16));
      };

      CalendarA11yPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
        name: "calendarA11y",
        type: CalendarA11yPipe,
        pure: true
      });

      CalendarA11yPipe.ctorParameters = function () {
        return [{
          type: _CalendarA11y
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID]
          }]
        }];
      };

      CalendarA11yPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(1, (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID)), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_CalendarA11y, String])], CalendarA11yPipe);

      var _MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('Moment');
      /**
       * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
       *
       * ```typescript
       * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
       * import moment from 'moment';
       *
       * // in your component
       * provide: [{
       *   provide: MOMENT, useValue: moment
       * }, {
       *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
       * }]
       *
       * ```
       */


      var _CalendarMomentDateFormatter = /*#__PURE__*/function () {
        /**
         * @hidden
         */
        function CalendarMomentDateFormatter(moment, dateAdapter) {
          _classCallCheck(this, CalendarMomentDateFormatter);

          this.moment = moment;
          this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */


        _createClass(CalendarMomentDateFormatter, [{
          key: "monthViewColumnHeader",
          value: function monthViewColumnHeader(_ref17) {
            var date = _ref17.date,
                locale = _ref17.locale;
            return this.moment(date).locale(locale).format('dddd');
          }
          /**
           * The month view cell day number
           */

        }, {
          key: "monthViewDayNumber",
          value: function monthViewDayNumber(_ref18) {
            var date = _ref18.date,
                locale = _ref18.locale;
            return this.moment(date).locale(locale).format('D');
          }
          /**
           * The month view title
           */

        }, {
          key: "monthViewTitle",
          value: function monthViewTitle(_ref19) {
            var date = _ref19.date,
                locale = _ref19.locale;
            return this.moment(date).locale(locale).format('MMMM YYYY');
          }
          /**
           * The week view header week day labels
           */

        }, {
          key: "weekViewColumnHeader",
          value: function weekViewColumnHeader(_ref20) {
            var date = _ref20.date,
                locale = _ref20.locale;
            return this.moment(date).locale(locale).format('dddd');
          }
          /**
           * The week view sub header day and month labels
           */

        }, {
          key: "weekViewColumnSubHeader",
          value: function weekViewColumnSubHeader(_ref21) {
            var date = _ref21.date,
                locale = _ref21.locale;
            return this.moment(date).locale(locale).format('MMM D');
          }
          /**
           * The week view title
           */

        }, {
          key: "weekViewTitle",
          value: function weekViewTitle(_ref22) {
            var _this6 = this;

            var date = _ref22.date,
                locale = _ref22.locale,
                weekStartsOn = _ref22.weekStartsOn,
                excludeDays = _ref22.excludeDays,
                daysInWeek = _ref22.daysInWeek;

            var _getWeekViewPeriod3 = _getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
                viewStart = _getWeekViewPeriod3.viewStart,
                viewEnd = _getWeekViewPeriod3.viewEnd;

            var format = function format(dateToFormat, showYear) {
              return _this6.moment(dateToFormat).locale(locale).format('MMM D' + (showYear ? ', YYYY' : ''));
            };

            return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
          }
          /**
           * The time formatting down the left hand side of the week view
           */

        }, {
          key: "weekViewHour",
          value: function weekViewHour(_ref23) {
            var date = _ref23.date,
                locale = _ref23.locale;
            return this.moment(date).locale(locale).format('ha');
          }
          /**
           * The time formatting down the left hand side of the day view
           */

        }, {
          key: "dayViewHour",
          value: function dayViewHour(_ref24) {
            var date = _ref24.date,
                locale = _ref24.locale;
            return this.moment(date).locale(locale).format('ha');
          }
          /**
           * The day view title
           */

        }, {
          key: "dayViewTitle",
          value: function dayViewTitle(_ref25) {
            var date = _ref25.date,
                locale = _ref25.locale;
            return this.moment(date).locale(locale).format('dddd, D MMMM, YYYY');
          }
        }]);

        return CalendarMomentDateFormatter;
      }();

      _CalendarMomentDateFormatter.ɵfac = function CalendarMomentDateFormatter_Factory(t) {
        return new (t || _CalendarMomentDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_MOMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_DateAdapter));
      };

      _CalendarMomentDateFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _CalendarMomentDateFormatter,
        factory: function factory(t) {
          return _CalendarMomentDateFormatter.ɵfac(t);
        }
      });

      _CalendarMomentDateFormatter.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
            args: [_MOMENT]
          }]
        }, {
          type: _DateAdapter
        }];
      };

      _CalendarMomentDateFormatter = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(0, (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_MOMENT)), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object, _DateAdapter])], _CalendarMomentDateFormatter);
      /**
       * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
       *
       * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
       */

      var _CalendarNativeDateFormatter = /*#__PURE__*/function () {
        function CalendarNativeDateFormatter(dateAdapter) {
          _classCallCheck(this, CalendarNativeDateFormatter);

          this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */


        _createClass(CalendarNativeDateFormatter, [{
          key: "monthViewColumnHeader",
          value: function monthViewColumnHeader(_ref26) {
            var date = _ref26.date,
                locale = _ref26.locale;
            return new Intl.DateTimeFormat(locale, {
              weekday: 'long'
            }).format(date);
          }
          /**
           * The month view cell day number
           */

        }, {
          key: "monthViewDayNumber",
          value: function monthViewDayNumber(_ref27) {
            var date = _ref27.date,
                locale = _ref27.locale;
            return new Intl.DateTimeFormat(locale, {
              day: 'numeric'
            }).format(date);
          }
          /**
           * The month view title
           */

        }, {
          key: "monthViewTitle",
          value: function monthViewTitle(_ref28) {
            var date = _ref28.date,
                locale = _ref28.locale;
            return new Intl.DateTimeFormat(locale, {
              year: 'numeric',
              month: 'long'
            }).format(date);
          }
          /**
           * The week view header week day labels
           */

        }, {
          key: "weekViewColumnHeader",
          value: function weekViewColumnHeader(_ref29) {
            var date = _ref29.date,
                locale = _ref29.locale;
            return new Intl.DateTimeFormat(locale, {
              weekday: 'long'
            }).format(date);
          }
          /**
           * The week view sub header day and month labels
           */

        }, {
          key: "weekViewColumnSubHeader",
          value: function weekViewColumnSubHeader(_ref30) {
            var date = _ref30.date,
                locale = _ref30.locale;
            return new Intl.DateTimeFormat(locale, {
              day: 'numeric',
              month: 'short'
            }).format(date);
          }
          /**
           * The week view title
           */

        }, {
          key: "weekViewTitle",
          value: function weekViewTitle(_ref31) {
            var date = _ref31.date,
                locale = _ref31.locale,
                weekStartsOn = _ref31.weekStartsOn,
                excludeDays = _ref31.excludeDays,
                daysInWeek = _ref31.daysInWeek;

            var _getWeekViewPeriod4 = _getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
                viewStart = _getWeekViewPeriod4.viewStart,
                viewEnd = _getWeekViewPeriod4.viewEnd;

            var format = function format(dateToFormat, showYear) {
              return new Intl.DateTimeFormat(locale, {
                day: 'numeric',
                month: 'short',
                year: showYear ? 'numeric' : undefined
              }).format(dateToFormat);
            };

            return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
          }
          /**
           * The time formatting down the left hand side of the week view
           */

        }, {
          key: "weekViewHour",
          value: function weekViewHour(_ref32) {
            var date = _ref32.date,
                locale = _ref32.locale;
            return new Intl.DateTimeFormat(locale, {
              hour: 'numeric'
            }).format(date);
          }
          /**
           * The time formatting down the left hand side of the day view
           */

        }, {
          key: "dayViewHour",
          value: function dayViewHour(_ref33) {
            var date = _ref33.date,
                locale = _ref33.locale;
            return new Intl.DateTimeFormat(locale, {
              hour: 'numeric'
            }).format(date);
          }
          /**
           * The day view title
           */

        }, {
          key: "dayViewTitle",
          value: function dayViewTitle(_ref34) {
            var date = _ref34.date,
                locale = _ref34.locale;
            return new Intl.DateTimeFormat(locale, {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              weekday: 'long'
            }).format(date);
          }
        }]);

        return CalendarNativeDateFormatter;
      }();

      _CalendarNativeDateFormatter.ɵfac = function CalendarNativeDateFormatter_Factory(t) {
        return new (t || _CalendarNativeDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_DateAdapter));
      };

      _CalendarNativeDateFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _CalendarNativeDateFormatter,
        factory: function factory(t) {
          return _CalendarNativeDateFormatter.ɵfac(t);
        }
      });

      _CalendarNativeDateFormatter.ctorParameters = function () {
        return [{
          type: _DateAdapter
        }];
      };

      _CalendarNativeDateFormatter = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_DateAdapter])], _CalendarNativeDateFormatter);

      var _CalendarEventTimesChangedEventType;

      (function (CalendarEventTimesChangedEventType) {
        CalendarEventTimesChangedEventType["Drag"] = "drag";
        CalendarEventTimesChangedEventType["Drop"] = "drop";
        CalendarEventTimesChangedEventType["Resize"] = "resize";
      })(_CalendarEventTimesChangedEventType || (_CalendarEventTimesChangedEventType = {}));

      var CalendarCommonModule_1;
      /**
       * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
       *
       * ```typescript
       * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
       *
       * @NgModule({
       *   imports: [
       *     CalendarCommonModule.forRoot(),
       *     CalendarMonthModule
       *   ]
       * })
       * class MyModule {}
       * ```
       *
       */

      var _CalendarCommonModule = CalendarCommonModule_1 = /*#__PURE__*/function () {
        function CalendarCommonModule() {
          _classCallCheck(this, CalendarCommonModule);
        }

        _createClass(CalendarCommonModule, null, [{
          key: "forRoot",
          value: function forRoot(dateAdapter) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return {
              ngModule: CalendarCommonModule_1,
              providers: [dateAdapter, config.eventTitleFormatter || _CalendarEventTitleFormatter, config.dateFormatter || _CalendarDateFormatter, config.utils || _CalendarUtils, config.a11y || _CalendarA11y]
            };
          }
        }]);

        return CalendarCommonModule;
      }();

      _CalendarCommonModule.ɵfac = function CalendarCommonModule_Factory(t) {
        return new (t || _CalendarCommonModule)();
      };

      _CalendarCommonModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _CalendarCommonModule
      });
      _CalendarCommonModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.I18nPluralPipe],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
      });
      /**
       * Shows all events on a given month. Example usage:
       *
       * ```typescript
       * <mwl-calendar-month-view
       *  [viewDate]="viewDate"
       *  [events]="events">
       * </mwl-calendar-month-view>
       * ```
       */

      var _CalendarMonthViewComponent = /*#__PURE__*/function () {
        /**
         * @hidden
         */
        function CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
          var _this7 = this;

          _classCallCheck(this, CalendarMonthViewComponent);

          this.cdr = cdr;
          this.utils = utils;
          this.dateAdapter = dateAdapter;
          /**
           * An array of events to display on view.
           * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
           */

          this.events = [];
          /**
           * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
           */

          this.excludeDays = [];
          /**
           * Whether the events list for the day of the `viewDate` option is visible or not
           */

          this.activeDayIsOpen = false;
          /**
           * The placement of the event tooltip
           */

          this.tooltipPlacement = 'auto';
          /**
           * Whether to append tooltips to the body or next to the trigger element
           */

          this.tooltipAppendToBody = true;
          /**
           * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
           * will be displayed immediately.
           */

          this.tooltipDelay = null;
          /**
           * An output that will be called before the view is rendered for the current month.
           * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
           */

          this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called when the day cell is clicked
           */

          this.dayClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called when the event title is clicked
           */

          this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called when a header week day is clicked. Returns ISO day number.
           */

          this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called when an event is dragged and dropped
           */

          this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * @hidden
           */

          this.trackByRowOffset = function (index, offset) {
            return _this7.view.days.slice(offset, _this7.view.totalDaysVisibleInWeek).map(function (day) {
              return day.date.toISOString();
            }).join('-');
          };
          /**
           * @hidden
           */


          this.trackByDate = function (index, day) {
            return day.date.toISOString();
          };

          this.locale = locale;
        }
        /**
         * @hidden
         */


        _createClass(CalendarMonthViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            if (this.refresh) {
              this.refreshSubscription = this.refresh.subscribe(function () {
                _this8.refreshAll();

                _this8.cdr.markForCheck();
              });
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
            var refreshBody = changes.viewDate || changes.events || changes.excludeDays || changes.weekendDays;

            if (refreshHeader) {
              this.refreshHeader();
            }

            if (changes.events) {
              validateEvents(this.events);
            }

            if (refreshBody) {
              this.refreshBody();
            }

            if (refreshHeader || refreshBody) {
              this.emitBeforeViewRender();
            }

            if (changes.activeDayIsOpen || changes.viewDate || changes.events || changes.excludeDays || changes.activeDay) {
              this.checkActiveDayIsOpen();
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.refreshSubscription) {
              this.refreshSubscription.unsubscribe();
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "toggleDayHighlight",
          value: function toggleDayHighlight(event, isHighlighted) {
            this.view.days.forEach(function (day) {
              if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor = event.color && event.color.secondary || '#D1E8FF';
              } else {
                delete day.backgroundColor;
              }
            });
          }
          /**
           * @hidden
           */

        }, {
          key: "eventDropped",
          value: function eventDropped(droppedOn, event, draggedFrom) {
            if (droppedOn !== draggedFrom) {
              var year = this.dateAdapter.getYear(droppedOn.date);
              var month = this.dateAdapter.getMonth(droppedOn.date);
              var date = this.dateAdapter.getDate(droppedOn.date);
              var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
              var newEnd;

              if (event.end) {
                var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
                newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
              }

              this.eventTimesChanged.emit({
                event: event,
                newStart: newStart,
                newEnd: newEnd,
                day: droppedOn,
                type: _CalendarEventTimesChangedEventType.Drop
              });
            }
          }
        }, {
          key: "refreshHeader",
          value: function refreshHeader() {
            this.columnHeaders = this.utils.getWeekViewHeader({
              viewDate: this.viewDate,
              weekStartsOn: this.weekStartsOn,
              excluded: this.excludeDays,
              weekendDays: this.weekendDays
            });
          }
        }, {
          key: "refreshBody",
          value: function refreshBody() {
            this.view = this.utils.getMonthView({
              events: this.events,
              viewDate: this.viewDate,
              weekStartsOn: this.weekStartsOn,
              excluded: this.excludeDays,
              weekendDays: this.weekendDays
            });
          }
        }, {
          key: "checkActiveDayIsOpen",
          value: function checkActiveDayIsOpen() {
            var _this9 = this;

            if (this.activeDayIsOpen === true) {
              var activeDay = this.activeDay || this.viewDate;
              this.openDay = this.view.days.find(function (day) {
                return _this9.dateAdapter.isSameDay(day.date, activeDay);
              });
              var index = this.view.days.indexOf(this.openDay);
              this.openRowIndex = Math.floor(index / this.view.totalDaysVisibleInWeek) * this.view.totalDaysVisibleInWeek;
            } else {
              this.openRowIndex = null;
              this.openDay = null;
            }
          }
        }, {
          key: "refreshAll",
          value: function refreshAll() {
            this.refreshHeader();
            this.refreshBody();
            this.emitBeforeViewRender();
            this.checkActiveDayIsOpen();
          }
        }, {
          key: "emitBeforeViewRender",
          value: function emitBeforeViewRender() {
            if (this.columnHeaders && this.view) {
              this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days,
                period: this.view.period
              });
            }
          }
        }]);

        return CalendarMonthViewComponent;
      }();

      _CalendarMonthViewComponent.ɵfac = function CalendarMonthViewComponent_Factory(t) {
        return new (t || _CalendarMonthViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_DateAdapter));
      };

      _CalendarMonthViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _CalendarMonthViewComponent,
        selectors: [["mwl-calendar-month-view"]],
        inputs: {
          events: "events",
          excludeDays: "excludeDays",
          activeDayIsOpen: "activeDayIsOpen",
          tooltipPlacement: "tooltipPlacement",
          tooltipAppendToBody: "tooltipAppendToBody",
          tooltipDelay: "tooltipDelay",
          locale: "locale",
          viewDate: "viewDate",
          activeDay: "activeDay",
          refresh: "refresh",
          tooltipTemplate: "tooltipTemplate",
          weekStartsOn: "weekStartsOn",
          headerTemplate: "headerTemplate",
          cellTemplate: "cellTemplate",
          openDayEventsTemplate: "openDayEventsTemplate",
          eventTitleTemplate: "eventTitleTemplate",
          eventActionsTemplate: "eventActionsTemplate",
          weekendDays: "weekendDays"
        },
        outputs: {
          beforeViewRender: "beforeViewRender",
          dayClicked: "dayClicked",
          eventClicked: "eventClicked",
          columnHeaderClicked: "columnHeaderClicked",
          eventTimesChanged: "eventTimesChanged"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 4,
        vars: 5,
        consts: [["role", "grid", 1, "cal-month-view"], [3, "days", "locale", "customTemplate", "columnHeaderClicked"], [1, "cal-days"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-cell-row"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "locale", "isOpen", "events", "date", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "eventClicked", "drop"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked"]],
        template: function CalendarMonthViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mwl-calendar-month-view-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("columnHeaderClicked", function CalendarMonthViewComponent_Template_mwl_calendar_month_view_header_columnHeaderClicked_1_listener($event) {
              return ctx.columnHeaderClicked.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CalendarMonthViewComponent_div_3_Template, 5, 13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("days", ctx.columnHeaders)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.view.rowOffsets)("ngForTrackBy", ctx.trackByRowOffset);
          }
        },
        directives: function directives() {
          return [CalendarMonthViewHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, CalendarOpenDayEventsComponent, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__["ɵa"], CalendarMonthCellComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, ClickDirective, KeydownEnterDirective];
        },
        pipes: function pipes() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe, CalendarA11yPipe];
        },
        encapsulation: 2
      });

      _CalendarMonthViewComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
        }, {
          type: _CalendarUtils
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID]
          }]
        }, {
          type: _DateAdapter
        }];
      };

      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)], _CalendarMonthViewComponent.prototype, "viewDate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)], _CalendarMonthViewComponent.prototype, "events", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)], _CalendarMonthViewComponent.prototype, "excludeDays", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)], _CalendarMonthViewComponent.prototype, "activeDayIsOpen", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)], _CalendarMonthViewComponent.prototype, "activeDay", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject)], _CalendarMonthViewComponent.prototype, "refresh", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], _CalendarMonthViewComponent.prototype, "locale", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], _CalendarMonthViewComponent.prototype, "tooltipPlacement", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarMonthViewComponent.prototype, "tooltipTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)], _CalendarMonthViewComponent.prototype, "tooltipAppendToBody", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarMonthViewComponent.prototype, "tooltipDelay", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarMonthViewComponent.prototype, "weekStartsOn", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarMonthViewComponent.prototype, "headerTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarMonthViewComponent.prototype, "cellTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarMonthViewComponent.prototype, "openDayEventsTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarMonthViewComponent.prototype, "eventTitleTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarMonthViewComponent.prototype, "eventActionsTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)], _CalendarMonthViewComponent.prototype, "weekendDays", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], _CalendarMonthViewComponent.prototype, "beforeViewRender", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], _CalendarMonthViewComponent.prototype, "dayClicked", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], _CalendarMonthViewComponent.prototype, "eventClicked", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], _CalendarMonthViewComponent.prototype, "columnHeaderClicked", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], _CalendarMonthViewComponent.prototype, "eventTimesChanged", void 0);
      _CalendarMonthViewComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(2, (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID)), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef, _CalendarUtils, String, _DateAdapter])], _CalendarMonthViewComponent);

      var CalendarMonthViewHeaderComponent = function CalendarMonthViewHeaderComponent() {
        _classCallCheck(this, CalendarMonthViewHeaderComponent);

        this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
      };

      CalendarMonthViewHeaderComponent.ɵfac = function CalendarMonthViewHeaderComponent_Factory(t) {
        return new (t || CalendarMonthViewHeaderComponent)();
      };

      CalendarMonthViewHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CalendarMonthViewHeaderComponent,
        selectors: [["mwl-calendar-month-view-header"]],
        inputs: {
          days: "days",
          locale: "locale",
          customTemplate: "customTemplate"
        },
        outputs: {
          columnHeaderClicked: "columnHeaderClicked"
        },
        decls: 3,
        vars: 6,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-cell-row", "cal-header"], ["class", "cal-cell", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", "role", "columnheader", 1, "cal-cell", 3, "ngClass", "click"]],
        template: function CalendarMonthViewHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarMonthViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarMonthViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](2, _c6, ctx.days, ctx.locale, ctx.trackByWeekDayHeaderDate));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
        pipes: [CalendarDatePipe],
        encapsulation: 2
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)], CalendarMonthViewHeaderComponent.prototype, "days", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], CalendarMonthViewHeaderComponent.prototype, "locale", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], CalendarMonthViewHeaderComponent.prototype, "customTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarMonthViewHeaderComponent.prototype, "columnHeaderClicked", void 0);

      var CalendarMonthCellComponent = function CalendarMonthCellComponent() {
        _classCallCheck(this, CalendarMonthCellComponent);

        this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
      };

      CalendarMonthCellComponent.ɵfac = function CalendarMonthCellComponent_Factory(t) {
        return new (t || CalendarMonthCellComponent)();
      };

      CalendarMonthCellComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CalendarMonthCellComponent,
        selectors: [["mwl-calendar-month-cell"]],
        hostAttrs: [1, "cal-cell", "cal-day-cell"],
        hostVars: 18,
        hostBindings: function CalendarMonthCellComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-past", ctx.day.isPast)("cal-today", ctx.day.isToday)("cal-future", ctx.day.isFuture)("cal-weekend", ctx.day.isWeekend)("cal-in-month", ctx.day.inMonth)("cal-out-month", !ctx.day.inMonth)("cal-has-events", ctx.day.events.length > 0)("cal-open", ctx.day === ctx.openDay)("cal-event-highlight", !!ctx.day.backgroundColor);
          }
        },
        inputs: {
          day: "day",
          openDay: "openDay",
          locale: "locale",
          tooltipPlacement: "tooltipPlacement",
          tooltipAppendToBody: "tooltipAppendToBody",
          customTemplate: "customTemplate",
          tooltipTemplate: "tooltipTemplate",
          tooltipDelay: "tooltipDelay"
        },
        outputs: {
          highlightDay: "highlightDay",
          unhighlightDay: "unhighlightDay",
          eventClicked: "eventClicked"
        },
        decls: 3,
        vars: 15,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-cell-top"], ["aria-hidden", "true"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], ["class", "cal-events", 4, "ngIf"], [1, "cal-day-badge"], [1, "cal-events"], ["class", "cal-event", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick"]],
        template: function CalendarMonthCellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarMonthCellComponent_ng_template_0_Template, 8, 14, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarMonthCellComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](2, _c11, [ctx.day, ctx.openDay, ctx.locale, ctx.tooltipPlacement, ctx.highlightDay, ctx.unhighlightDay, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDelay, ctx.trackByEventId, ctx.validateDrag]));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, CalendarTooltipDirective, ClickDirective],
        pipes: [CalendarA11yPipe, CalendarDatePipe, CalendarEventTitlePipe],
        encapsulation: 2
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarMonthCellComponent.prototype, "day", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarMonthCellComponent.prototype, "openDay", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], CalendarMonthCellComponent.prototype, "locale", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarMonthCellComponent.prototype, "tooltipPlacement", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)], CalendarMonthCellComponent.prototype, "tooltipAppendToBody", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], CalendarMonthCellComponent.prototype, "customTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], CalendarMonthCellComponent.prototype, "tooltipTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], CalendarMonthCellComponent.prototype, "tooltipDelay", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter)], CalendarMonthCellComponent.prototype, "highlightDay", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter)], CalendarMonthCellComponent.prototype, "unhighlightDay", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarMonthCellComponent.prototype, "eventClicked", void 0);

      var _collapseAnimation = (0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)('collapse', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)('void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
        height: 0,
        overflow: 'hidden',
        'padding-top': 0,
        'padding-bottom': 0
      })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)('*', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
        height: '*',
        overflow: 'hidden',
        'padding-top': '*',
        'padding-bottom': '*'
      })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)('* => void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)('150ms ease-out')), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)('void => *', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)('150ms ease-in'))]);

      var CalendarOpenDayEventsComponent = function CalendarOpenDayEventsComponent() {
        _classCallCheck(this, CalendarOpenDayEventsComponent);

        this.isOpen = false;
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
      };

      CalendarOpenDayEventsComponent.ɵfac = function CalendarOpenDayEventsComponent_Factory(t) {
        return new (t || CalendarOpenDayEventsComponent)();
      };

      CalendarOpenDayEventsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CalendarOpenDayEventsComponent,
        selectors: [["mwl-calendar-open-day-events"]],
        inputs: {
          isOpen: "isOpen",
          locale: "locale",
          events: "events",
          customTemplate: "customTemplate",
          eventTitleTemplate: "eventTitleTemplate",
          eventActionsTemplate: "eventActionsTemplate",
          date: "date"
        },
        outputs: {
          eventClicked: "eventClicked"
        },
        decls: 3,
        vars: 8,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-open-day-events", "role", "application", 4, "ngIf"], ["role", "application", 1, "cal-open-day-events"], ["tabindex", "-1", "role", "alert"], ["tabindex", "0", "role", "landmark"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "dropData", "dragAxis", "validateDrag", "touchStartLongPress"], [1, "cal-event", 3, "ngStyle"], ["view", "month", "tabindex", "0", 3, "event", "customTemplate", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"]],
        template: function CalendarOpenDayEventsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarOpenDayEventsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarOpenDayEventsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](2, _c15, ctx.events, ctx.eventClicked, ctx.isOpen, ctx.trackByEventId, ctx.validateDrag));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, CalendarEventTitleComponent, ClickDirective, KeydownEnterDirective, CalendarEventActionsComponent],
        pipes: [CalendarA11yPipe],
        encapsulation: 2,
        data: {
          animation: [_collapseAnimation]
        }
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], CalendarOpenDayEventsComponent.prototype, "locale", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)], CalendarOpenDayEventsComponent.prototype, "isOpen", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)], CalendarOpenDayEventsComponent.prototype, "events", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], CalendarOpenDayEventsComponent.prototype, "customTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], CalendarOpenDayEventsComponent.prototype, "eventTitleTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], CalendarOpenDayEventsComponent.prototype, "eventActionsTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)], CalendarOpenDayEventsComponent.prototype, "date", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarOpenDayEventsComponent.prototype, "eventClicked", void 0);

      var _CalendarMonthModule = function CalendarMonthModule() {
        _classCallCheck(this, CalendarMonthModule);
      };

      _CalendarMonthModule.ɵfac = function CalendarMonthModule_Factory(t) {
        return new (t || _CalendarMonthModule)();
      };

      _CalendarMonthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _CalendarMonthModule
      });
      _CalendarMonthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule, _CalendarCommonModule], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule]
      });

      var CalendarDragHelper = /*#__PURE__*/function () {
        function CalendarDragHelper(dragContainerElement, draggableElement) {
          _classCallCheck(this, CalendarDragHelper);

          this.dragContainerElement = dragContainerElement;
          this.startPosition = draggableElement.getBoundingClientRect();
        }

        _createClass(CalendarDragHelper, [{
          key: "validateDrag",
          value: function validateDrag(_ref35) {
            var x = _ref35.x,
                y = _ref35.y,
                snapDraggedEvents = _ref35.snapDraggedEvents,
                dragAlreadyMoved = _ref35.dragAlreadyMoved,
                transform = _ref35.transform;

            if (snapDraggedEvents) {
              var newRect = Object.assign({}, this.startPosition, {
                left: this.startPosition.left + transform.x,
                right: this.startPosition.right + transform.x,
                top: this.startPosition.top + transform.y,
                bottom: this.startPosition.bottom + transform.y
              });
              return (isWithinThreshold({
                x: x,
                y: y
              }) || dragAlreadyMoved) && isInside(this.dragContainerElement.getBoundingClientRect(), newRect);
            } else {
              return isWithinThreshold({
                x: x,
                y: y
              }) || dragAlreadyMoved;
            }
          }
        }]);

        return CalendarDragHelper;
      }();

      var CalendarResizeHelper = /*#__PURE__*/function () {
        function CalendarResizeHelper(resizeContainerElement, minWidth) {
          _classCallCheck(this, CalendarResizeHelper);

          this.resizeContainerElement = resizeContainerElement;
          this.minWidth = minWidth;
        }

        _createClass(CalendarResizeHelper, [{
          key: "validateResize",
          value: function validateResize(_ref36) {
            var rectangle = _ref36.rectangle;

            if (this.minWidth && Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
              return false;
            }

            return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
          }
        }]);

        return CalendarResizeHelper;
      }();
      /**
       * Shows all events on a given week. Example usage:
       *
       * ```typescript
       * <mwl-calendar-week-view
       *  [viewDate]="viewDate"
       *  [events]="events">
       * </mwl-calendar-week-view>
       * ```
       */


      var _CalendarWeekViewComponent = /*#__PURE__*/function () {
        /**
         * @hidden
         */
        function CalendarWeekViewComponent(cdr, utils, locale, dateAdapter) {
          _classCallCheck(this, CalendarWeekViewComponent);

          this.cdr = cdr;
          this.utils = utils;
          this.dateAdapter = dateAdapter;
          /**
           * An array of events to display on view
           * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
           */

          this.events = [];
          /**
           * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
           */

          this.excludeDays = [];
          /**
           * The placement of the event tooltip
           */

          this.tooltipPlacement = 'auto';
          /**
           * Whether to append tooltips to the body or next to the trigger element
           */

          this.tooltipAppendToBody = true;
          /**
           * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
           * will be displayed immediately.
           */

          this.tooltipDelay = null;
          /**
           * The precision to display events.
           * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
           */

          this.precision = 'days';
          /**
           * Whether to snap events to a grid when dragging
           */

          this.snapDraggedEvents = true;
          /**
           * The number of segments in an hour. Must divide equally into 60.
           */

          this.hourSegments = 2;
          /**
           * The height in pixels of each hour segment
           */

          this.hourSegmentHeight = 30;
          /**
           * The day start hours in 24 hour time. Must be 0-23
           */

          this.dayStartHour = 0;
          /**
           * The day start minutes. Must be 0-59
           */

          this.dayStartMinute = 0;
          /**
           * The day end hours in 24 hour time. Must be 0-23
           */

          this.dayEndHour = 23;
          /**
           * The day end minutes. Must be 0-59
           */

          this.dayEndMinute = 59;
          /**
           * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
           */

          this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called when the event title is clicked
           */

          this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called when an event is resized or dragged and dropped
           */

          this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * An output that will be called before the view is rendered for the current week.
           * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
           */

          this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called when an hour segment is clicked
           */

          this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * @hidden
           */

          this.allDayEventResizes = new Map();
          /**
           * @hidden
           */

          this.timeEventResizes = new Map();
          /**
           * @hidden
           */

          this.eventDragEnterByType = {
            allDay: 0,
            time: 0
          };
          /**
           * @hidden
           */

          this.dragActive = false;
          /**
           * @hidden
           */

          this.dragAlreadyMoved = false;
          /**
           * @hidden
           */

          this.calendarId = Symbol('angular calendar week view id');
          /**
           * @hidden
           */

          this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
          /**
           * @hidden
           */

          this.trackByHourSegment = trackByHourSegment;
          /**
           * @hidden
           */

          this.trackByHour = trackByHour;
          /**
           * @hidden
           */

          this.trackByWeekAllDayEvent = trackByWeekAllDayEvent;
          /**
           * @hidden
           */

          this.trackByWeekTimeEvent = trackByWeekTimeEvent;
          /**
           * @hidden
           */

          this.trackByHourColumn = function (index, column) {
            return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
          };
          /**
           * @hidden
           */


          this.trackById = function (index, row) {
            return row.id;
          };

          this.locale = locale;
        }
        /**
         * @hidden
         */


        _createClass(CalendarWeekViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            if (this.refresh) {
              this.refreshSubscription = this.refresh.subscribe(function () {
                _this10.refreshAll();

                _this10.cdr.markForCheck();
              });
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays || changes.daysInWeek || changes.weekStartsOn;
            var refreshBody = changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute || changes.hourSegments || changes.weekStartsOn || changes.weekendDays || changes.excludeDays || changes.hourSegmentHeight || changes.events || changes.daysInWeek;

            if (refreshHeader) {
              this.refreshHeader();
            }

            if (changes.events) {
              validateEvents(this.events);
            }

            if (refreshBody) {
              this.refreshBody();
            }

            if (refreshHeader || refreshBody) {
              this.emitBeforeViewRender();
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.refreshSubscription) {
              this.refreshSubscription.unsubscribe();
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "timeEventResizeStarted",
          value: function timeEventResizeStarted(eventsContainer, timeEvent, resizeEvent) {
            this.timeEventResizes.set(timeEvent.event, resizeEvent);
            this.resizeStarted(eventsContainer);
          }
          /**
           * @hidden
           */

        }, {
          key: "timeEventResizing",
          value: function timeEventResizing(timeEvent, resizeEvent) {
            var _this11 = this;

            this.timeEventResizes.set(timeEvent.event, resizeEvent);
            var adjustedEvents = new Map();

            var tempEvents = _toConsumableArray(this.events);

            this.timeEventResizes.forEach(function (lastResizeEvent, event) {
              var newEventDates = _this11.getTimeEventResizedDates(event, lastResizeEvent);

              var adjustedEvent = Object.assign(Object.assign({}, event), newEventDates);
              adjustedEvents.set(adjustedEvent, event);
              var eventIndex = tempEvents.indexOf(event);
              tempEvents[eventIndex] = adjustedEvent;
            });
            this.restoreOriginalEvents(tempEvents, adjustedEvents, true);
          }
          /**
           * @hidden
           */

        }, {
          key: "timeEventResizeEnded",
          value: function timeEventResizeEnded(timeEvent) {
            this.view = this.getWeekView(this.events);
            var lastResizeEvent = this.timeEventResizes.get(timeEvent.event);

            if (lastResizeEvent) {
              this.timeEventResizes["delete"](timeEvent.event);
              var newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
              this.eventTimesChanged.emit({
                newStart: newEventDates.start,
                newEnd: newEventDates.end,
                event: timeEvent.event,
                type: _CalendarEventTimesChangedEventType.Resize
              });
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "allDayEventResizeStarted",
          value: function allDayEventResizeStarted(allDayEventsContainer, allDayEvent, resizeEvent) {
            this.allDayEventResizes.set(allDayEvent, {
              originalOffset: allDayEvent.offset,
              originalSpan: allDayEvent.span,
              edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
            });
            this.resizeStarted(allDayEventsContainer, this.getDayColumnWidth(allDayEventsContainer));
          }
          /**
           * @hidden
           */

        }, {
          key: "allDayEventResizing",
          value: function allDayEventResizing(allDayEvent, resizeEvent, dayWidth) {
            var currentResize = this.allDayEventResizes.get(allDayEvent);

            if (typeof resizeEvent.edges.left !== 'undefined') {
              var diff = Math.round(+resizeEvent.edges.left / dayWidth);
              allDayEvent.offset = currentResize.originalOffset + diff;
              allDayEvent.span = currentResize.originalSpan - diff;
            } else if (typeof resizeEvent.edges.right !== 'undefined') {
              var _diff = Math.round(+resizeEvent.edges.right / dayWidth);

              allDayEvent.span = currentResize.originalSpan + _diff;
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "allDayEventResizeEnded",
          value: function allDayEventResizeEnded(allDayEvent) {
            var currentResize = this.allDayEventResizes.get(allDayEvent);

            if (currentResize) {
              var allDayEventResizingBeforeStart = currentResize.edge === 'left';
              var daysDiff;

              if (allDayEventResizingBeforeStart) {
                daysDiff = allDayEvent.offset - currentResize.originalOffset;
              } else {
                daysDiff = allDayEvent.span - currentResize.originalSpan;
              }

              allDayEvent.offset = currentResize.originalOffset;
              allDayEvent.span = currentResize.originalSpan;
              var newStart = allDayEvent.event.start;
              var newEnd = allDayEvent.event.end || allDayEvent.event.start;

              if (allDayEventResizingBeforeStart) {
                newStart = addDaysWithExclusions(this.dateAdapter, newStart, daysDiff, this.excludeDays);
              } else {
                newEnd = addDaysWithExclusions(this.dateAdapter, newEnd, daysDiff, this.excludeDays);
              }

              this.eventTimesChanged.emit({
                newStart: newStart,
                newEnd: newEnd,
                event: allDayEvent.event,
                type: _CalendarEventTimesChangedEventType.Resize
              });
              this.allDayEventResizes["delete"](allDayEvent);
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "getDayColumnWidth",
          value: function getDayColumnWidth(eventRowContainer) {
            return Math.floor(eventRowContainer.offsetWidth / this.days.length);
          }
          /**
           * @hidden
           */

        }, {
          key: "dateDragEnter",
          value: function dateDragEnter(date) {
            this.lastDragEnterDate = date;
          }
          /**
           * @hidden
           */

        }, {
          key: "eventDropped",
          value: function eventDropped(dropEvent, date, allDay) {
            if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId) && this.lastDragEnterDate.getTime() === date.getTime() && (!this.snapDraggedEvents || dropEvent.dropData.event !== this.lastDraggedEvent)) {
              this.eventTimesChanged.emit({
                type: _CalendarEventTimesChangedEventType.Drop,
                event: dropEvent.dropData.event,
                newStart: date,
                allDay: allDay
              });
            }

            this.lastDraggedEvent = null;
          }
          /**
           * @hidden
           */

        }, {
          key: "dragEnter",
          value: function dragEnter(type) {
            this.eventDragEnterByType[type]++;
          }
          /**
           * @hidden
           */

        }, {
          key: "dragLeave",
          value: function dragLeave(type) {
            this.eventDragEnterByType[type]--;
          }
          /**
           * @hidden
           */

        }, {
          key: "dragStarted",
          value: function dragStarted(eventsContainer, event, dayEvent) {
            var _this12 = this;

            this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
            var dragHelper = new CalendarDragHelper(eventsContainer, event);

            this.validateDrag = function (_ref37) {
              var x = _ref37.x,
                  y = _ref37.y,
                  transform = _ref37.transform;
              return _this12.allDayEventResizes.size === 0 && _this12.timeEventResizes.size === 0 && dragHelper.validateDrag({
                x: x,
                y: y,
                snapDraggedEvents: _this12.snapDraggedEvents,
                dragAlreadyMoved: _this12.dragAlreadyMoved,
                transform: transform
              });
            };

            this.dragActive = true;
            this.dragAlreadyMoved = false;
            this.lastDraggedEvent = null;
            this.eventDragEnterByType = {
              allDay: 0,
              time: 0
            };

            if (!this.snapDraggedEvents && dayEvent) {
              this.view.hourColumns.forEach(function (column) {
                var linkedEvent = column.events.find(function (columnEvent) {
                  return columnEvent.event === dayEvent.event && columnEvent !== dayEvent;
                }); // hide any linked events while dragging

                if (linkedEvent) {
                  linkedEvent.width = 0;
                  linkedEvent.height = 0;
                }
              });
            }

            this.cdr.markForCheck();
          }
          /**
           * @hidden
           */

        }, {
          key: "dragMove",
          value: function dragMove(dayEvent, dragEvent) {
            var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
            var originalEvent = dayEvent.event;
            var adjustedEvent = Object.assign(Object.assign({}, originalEvent), newEventTimes);
            var tempEvents = this.events.map(function (event) {
              if (event === originalEvent) {
                return adjustedEvent;
              }

              return event;
            });
            this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]), this.snapDraggedEvents);
            this.dragAlreadyMoved = true;
          }
          /**
           * @hidden
           */

        }, {
          key: "allDayEventDragMove",
          value: function allDayEventDragMove() {
            this.dragAlreadyMoved = true;
          }
          /**
           * @hidden
           */

        }, {
          key: "dragEnded",
          value: function dragEnded(weekEvent, dragEndEvent, dayWidth) {
            var useY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            this.view = this.getWeekView(this.events);
            this.dragActive = false;
            this.validateDrag = null;

            var _this$getDragMovedEve = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY),
                start = _this$getDragMovedEve.start,
                end = _this$getDragMovedEve.end;

            if ((this.snapDraggedEvents || this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0) && isDraggedWithinPeriod(start, end, this.view.period)) {
              this.lastDraggedEvent = weekEvent.event;
              this.eventTimesChanged.emit({
                newStart: start,
                newEnd: end,
                event: weekEvent.event,
                type: _CalendarEventTimesChangedEventType.Drag,
                allDay: !useY
              });
            }
          }
        }, {
          key: "refreshHeader",
          value: function refreshHeader() {
            this.days = this.utils.getWeekViewHeader(Object.assign({
              viewDate: this.viewDate,
              weekStartsOn: this.weekStartsOn,
              excluded: this.excludeDays,
              weekendDays: this.weekendDays
            }, _getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
          }
        }, {
          key: "refreshBody",
          value: function refreshBody() {
            this.view = this.getWeekView(this.events);
          }
        }, {
          key: "refreshAll",
          value: function refreshAll() {
            this.refreshHeader();
            this.refreshBody();
            this.emitBeforeViewRender();
          }
        }, {
          key: "emitBeforeViewRender",
          value: function emitBeforeViewRender() {
            if (this.days && this.view) {
              this.beforeViewRender.emit(Object.assign({
                header: this.days
              }, this.view));
            }
          }
        }, {
          key: "getWeekView",
          value: function getWeekView(events) {
            return this.utils.getWeekView(Object.assign({
              events: events,
              viewDate: this.viewDate,
              weekStartsOn: this.weekStartsOn,
              excluded: this.excludeDays,
              precision: this.precision,
              absolutePositionedEvents: true,
              hourSegments: this.hourSegments,
              dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
              },
              dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
              },
              segmentHeight: this.hourSegmentHeight,
              weekendDays: this.weekendDays
            }, _getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
          }
        }, {
          key: "getDragMovedEventTimes",
          value: function getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY) {
            var daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth;
            var minutesMoved = useY ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize) : 0;
            var start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
            var end;

            if (weekEvent.event.end) {
              end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
            }

            return {
              start: start,
              end: end
            };
          }
        }, {
          key: "restoreOriginalEvents",
          value: function restoreOriginalEvents(tempEvents, adjustedEvents) {
            var snapDraggedEvents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var previousView = this.view;

            if (snapDraggedEvents) {
              this.view = this.getWeekView(tempEvents);
            }

            var adjustedEventsArray = tempEvents.filter(function (event) {
              return adjustedEvents.has(event);
            });
            this.view.hourColumns.forEach(function (column, columnIndex) {
              previousView.hourColumns[columnIndex].hours.forEach(function (hour, hourIndex) {
                hour.segments.forEach(function (segment, segmentIndex) {
                  column.hours[hourIndex].segments[segmentIndex].cssClass = segment.cssClass;
                });
              });
              adjustedEventsArray.forEach(function (adjustedEvent) {
                var originalEvent = adjustedEvents.get(adjustedEvent);
                var existingColumnEvent = column.events.find(function (columnEvent) {
                  return columnEvent.event === (snapDraggedEvents ? adjustedEvent : originalEvent);
                });

                if (existingColumnEvent) {
                  // restore the original event so trackBy kicks in and the dom isn't changed
                  existingColumnEvent.event = originalEvent;
                  existingColumnEvent['tempEvent'] = adjustedEvent;

                  if (!snapDraggedEvents) {
                    existingColumnEvent.height = 0;
                    existingColumnEvent.width = 0;
                  }
                } else {
                  // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                  var event = {
                    event: originalEvent,
                    left: 0,
                    top: 0,
                    height: 0,
                    width: 0,
                    startsBeforeDay: false,
                    endsAfterDay: false,
                    tempEvent: adjustedEvent
                  };
                  column.events.push(event);
                }
              });
            });
            adjustedEvents.clear();
          }
        }, {
          key: "getTimeEventResizedDates",
          value: function getTimeEventResizedDates(calendarEvent, resizeEvent) {
            var minimumEventHeight = getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight);
            var newEventDates = {
              start: calendarEvent.start,
              end: getDefaultEventEnd(this.dateAdapter, calendarEvent, minimumEventHeight)
            };
            var end = calendarEvent.end,
                eventWithoutEnd = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(calendarEvent, ["end"]);
            var smallestResizes = {
              start: this.dateAdapter.addMinutes(newEventDates.end, minimumEventHeight * -1),
              end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, minimumEventHeight)
            };

            if (typeof resizeEvent.edges.left !== 'undefined') {
              var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth);
              var newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);

              if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
              } else {
                newEventDates.start = smallestResizes.start;
              }
            } else if (typeof resizeEvent.edges.right !== 'undefined') {
              var _daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth);

              var newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, _daysDiff, this.excludeDays);

              if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
              } else {
                newEventDates.end = smallestResizes.end;
              }
            }

            if (typeof resizeEvent.edges.top !== 'undefined') {
              var minutesMoved = getMinutesMoved(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);

              var _newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);

              if (_newStart < smallestResizes.start) {
                newEventDates.start = _newStart;
              } else {
                newEventDates.start = smallestResizes.start;
              }
            } else if (typeof resizeEvent.edges.bottom !== 'undefined') {
              var _minutesMoved = getMinutesMoved(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);

              var _newEnd = this.dateAdapter.addMinutes(newEventDates.end, _minutesMoved);

              if (_newEnd > smallestResizes.end) {
                newEventDates.end = _newEnd;
              } else {
                newEventDates.end = smallestResizes.end;
              }
            }

            return newEventDates;
          }
        }, {
          key: "resizeStarted",
          value: function resizeStarted(eventsContainer, minWidth) {
            this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
            var resizeHelper = new CalendarResizeHelper(eventsContainer, minWidth);

            this.validateResize = function (_ref38) {
              var rectangle = _ref38.rectangle;
              return resizeHelper.validateResize({
                rectangle: rectangle
              });
            };

            this.cdr.markForCheck();
          }
        }]);

        return CalendarWeekViewComponent;
      }();

      _CalendarWeekViewComponent.ɵfac = function CalendarWeekViewComponent_Factory(t) {
        return new (t || _CalendarWeekViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_DateAdapter));
      };

      _CalendarWeekViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _CalendarWeekViewComponent,
        selectors: [["mwl-calendar-week-view"]],
        inputs: {
          events: "events",
          excludeDays: "excludeDays",
          tooltipPlacement: "tooltipPlacement",
          tooltipAppendToBody: "tooltipAppendToBody",
          tooltipDelay: "tooltipDelay",
          precision: "precision",
          snapDraggedEvents: "snapDraggedEvents",
          hourSegments: "hourSegments",
          hourSegmentHeight: "hourSegmentHeight",
          dayStartHour: "dayStartHour",
          dayStartMinute: "dayStartMinute",
          dayEndHour: "dayEndHour",
          dayEndMinute: "dayEndMinute",
          locale: "locale",
          viewDate: "viewDate",
          refresh: "refresh",
          tooltipTemplate: "tooltipTemplate",
          weekStartsOn: "weekStartsOn",
          headerTemplate: "headerTemplate",
          eventTemplate: "eventTemplate",
          eventTitleTemplate: "eventTitleTemplate",
          eventActionsTemplate: "eventActionsTemplate",
          weekendDays: "weekendDays",
          hourSegmentTemplate: "hourSegmentTemplate",
          eventSnapSize: "eventSnapSize",
          allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
          daysInWeek: "daysInWeek",
          currentTimeMarkerTemplate: "currentTimeMarkerTemplate"
        },
        outputs: {
          dayHeaderClicked: "dayHeaderClicked",
          eventClicked: "eventClicked",
          eventTimesChanged: "eventTimesChanged",
          beforeViewRender: "beforeViewRender",
          hourSegmentClicked: "hourSegmentClicked"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 8,
        vars: 9,
        consts: [["role", "grid", 1, "cal-week-view"], [3, "days", "locale", "customTemplate", "dayHeaderClicked", "eventDropped", "dragEnter"], ["class", "cal-all-day-events", "mwlDroppable", "", 3, "dragEnter", "dragLeave", 4, "ngIf"], ["mwlDroppable", "", 1, "cal-time-events", 3, "dragEnter", "dragLeave"], ["class", "cal-time-label-column", 4, "ngIf"], [1, "cal-day-columns"], ["dayColumns", ""], ["class", "cal-day-column", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", 1, "cal-all-day-events", 3, "dragEnter", "dragLeave"], ["allDayEventsContainer", ""], [1, "cal-time-label-column", 3, "ngTemplateOutlet"], ["class", "cal-day-column", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cal-events-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 1, "cal-day-column", 3, "drop", "dragEnter"], [1, "cal-events-row"], ["eventRowContainer", ""], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-week", "cal-ends-within-week", "ngClass", "width", "marginLeft", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], ["event", ""], ["class", "cal-resize-handle cal-resize-handle-before-start", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "daysInWeek", "eventClicked"], ["class", "cal-resize-handle cal-resize-handle-after-end", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-before-start", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-after-end", 3, "resizeEdges"], [1, "cal-time-label-column"], ["class", "cal-hour", 3, "cal-hour-odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-hour"], [3, "height", "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek"], [1, "cal-day-column"], [3, "columnDate", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegments", "hourSegmentHeight", "customTemplate"], [1, "cal-events-container"], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-day", "cal-ends-within-day", "ngClass", "hidden", "top", "height", "left", "width", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "hidden", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], [3, "ngTemplateOutlet"], ["weekEventTemplate", ""], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDisabled", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "column", "daysInWeek", "eventClicked"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "height", "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter"]],
        template: function CalendarWeekViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mwl-calendar-week-view-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dayHeaderClicked", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dayHeaderClicked_1_listener($event) {
              return ctx.dayHeaderClicked.emit($event);
            })("eventDropped", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_eventDropped_1_listener($event) {
              return ctx.eventDropped({
                dropData: $event
              }, $event.newStart, true);
            })("dragEnter", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dragEnter_1_listener($event) {
              return ctx.dateDragEnter($event.date);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_Template, 6, 5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_Template_div_dragEnter_3_listener() {
              return ctx.dragEnter("time");
            })("dragLeave", function CalendarWeekViewComponent_Template_div_dragLeave_3_listener() {
              return ctx.dragLeave("time");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_4_Template, 2, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CalendarWeekViewComponent_div_7_Template, 5, 12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("days", ctx.days)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.view.allDayEventRows.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.view.hourColumns.length > 0 && ctx.daysInWeek !== 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-resize-active", ctx.timeEventResizes.size > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.view.hourColumns)("ngForTrackBy", ctx.trackByHourColumn);
          }
        },
        directives: function directives() {
          return [CalendarWeekViewHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableDirective, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, CalendarWeekViewEventComponent, angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizeHandleDirective, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent, ClickDirective];
        },
        encapsulation: 2
      });

      _CalendarWeekViewComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
        }, {
          type: _CalendarUtils
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID]
          }]
        }, {
          type: _DateAdapter
        }];
      };

      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)], _CalendarWeekViewComponent.prototype, "viewDate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)], _CalendarWeekViewComponent.prototype, "events", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)], _CalendarWeekViewComponent.prototype, "excludeDays", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject)], _CalendarWeekViewComponent.prototype, "refresh", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], _CalendarWeekViewComponent.prototype, "locale", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], _CalendarWeekViewComponent.prototype, "tooltipPlacement", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarWeekViewComponent.prototype, "tooltipTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)], _CalendarWeekViewComponent.prototype, "tooltipAppendToBody", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarWeekViewComponent.prototype, "tooltipDelay", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarWeekViewComponent.prototype, "weekStartsOn", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarWeekViewComponent.prototype, "headerTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarWeekViewComponent.prototype, "eventTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarWeekViewComponent.prototype, "eventTitleTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarWeekViewComponent.prototype, "eventActionsTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], _CalendarWeekViewComponent.prototype, "precision", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)], _CalendarWeekViewComponent.prototype, "weekendDays", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)], _CalendarWeekViewComponent.prototype, "snapDraggedEvents", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarWeekViewComponent.prototype, "hourSegments", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarWeekViewComponent.prototype, "hourSegmentHeight", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarWeekViewComponent.prototype, "dayStartHour", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarWeekViewComponent.prototype, "dayStartMinute", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarWeekViewComponent.prototype, "dayEndHour", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarWeekViewComponent.prototype, "dayEndMinute", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarWeekViewComponent.prototype, "hourSegmentTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarWeekViewComponent.prototype, "eventSnapSize", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarWeekViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarWeekViewComponent.prototype, "daysInWeek", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarWeekViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], _CalendarWeekViewComponent.prototype, "dayHeaderClicked", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], _CalendarWeekViewComponent.prototype, "eventClicked", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], _CalendarWeekViewComponent.prototype, "eventTimesChanged", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], _CalendarWeekViewComponent.prototype, "beforeViewRender", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], _CalendarWeekViewComponent.prototype, "hourSegmentClicked", void 0);
      _CalendarWeekViewComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_4__.__param)(2, (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID)), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef, _CalendarUtils, String, _DateAdapter])], _CalendarWeekViewComponent);

      var CalendarWeekViewHeaderComponent = function CalendarWeekViewHeaderComponent() {
        _classCallCheck(this, CalendarWeekViewHeaderComponent);

        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
      };

      CalendarWeekViewHeaderComponent.ɵfac = function CalendarWeekViewHeaderComponent_Factory(t) {
        return new (t || CalendarWeekViewHeaderComponent)();
      };

      CalendarWeekViewHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CalendarWeekViewHeaderComponent,
        selectors: [["mwl-calendar-week-view-header"]],
        inputs: {
          days: "days",
          locale: "locale",
          customTemplate: "customTemplate"
        },
        outputs: {
          dayHeaderClicked: "dayHeaderClicked",
          eventDropped: "eventDropped",
          dragEnter: "dragEnter"
        },
        decls: 3,
        vars: 9,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-day-headers"], ["class", "cal-header", "mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 1, "cal-header", 3, "ngClass", "mwlClick", "drop", "dragEnter"]],
        template: function CalendarWeekViewHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarWeekViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction6"](2, _c24, ctx.days, ctx.locale, ctx.dayHeaderClicked, ctx.eventDropped, ctx.dragEnter, ctx.trackByWeekDayHeaderDate));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, ClickDirective],
        pipes: [CalendarDatePipe],
        encapsulation: 2
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)], CalendarWeekViewHeaderComponent.prototype, "days", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], CalendarWeekViewHeaderComponent.prototype, "locale", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], CalendarWeekViewHeaderComponent.prototype, "customTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarWeekViewHeaderComponent.prototype, "dayHeaderClicked", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarWeekViewHeaderComponent.prototype, "eventDropped", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarWeekViewHeaderComponent.prototype, "dragEnter", void 0);

      var CalendarWeekViewEventComponent = function CalendarWeekViewEventComponent() {
        _classCallCheck(this, CalendarWeekViewEventComponent);

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
      };

      CalendarWeekViewEventComponent.ɵfac = function CalendarWeekViewEventComponent_Factory(t) {
        return new (t || CalendarWeekViewEventComponent)();
      };

      CalendarWeekViewEventComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CalendarWeekViewEventComponent,
        selectors: [["mwl-calendar-week-view-event"]],
        inputs: {
          locale: "locale",
          weekEvent: "weekEvent",
          tooltipPlacement: "tooltipPlacement",
          tooltipAppendToBody: "tooltipAppendToBody",
          tooltipDisabled: "tooltipDisabled",
          tooltipDelay: "tooltipDelay",
          customTemplate: "customTemplate",
          eventTitleTemplate: "eventTitleTemplate",
          eventActionsTemplate: "eventActionsTemplate",
          tooltipTemplate: "tooltipTemplate",
          column: "column",
          daysInWeek: "daysInWeek"
        },
        outputs: {
          eventClicked: "eventClicked"
        },
        decls: 3,
        vars: 12,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", "role", "application", 1, "cal-event", 3, "ngStyle", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"], [3, "event", "customTemplate", "view"]],
        template: function CalendarWeekViewEventComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarWeekViewEventComponent_ng_template_0_Template, 6, 26, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewEventComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](2, _c26, [ctx.weekEvent, ctx.tooltipPlacement, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDisabled, ctx.tooltipDelay, ctx.column, ctx.daysInWeek]));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, CalendarTooltipDirective, ClickDirective, KeydownEnterDirective, CalendarEventActionsComponent, CalendarEventTitleComponent],
        pipes: [CalendarEventTitlePipe, CalendarA11yPipe],
        encapsulation: 2
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], CalendarWeekViewEventComponent.prototype, "locale", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarWeekViewEventComponent.prototype, "weekEvent", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarWeekViewEventComponent.prototype, "tooltipPlacement", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)], CalendarWeekViewEventComponent.prototype, "tooltipAppendToBody", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)], CalendarWeekViewEventComponent.prototype, "tooltipDisabled", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], CalendarWeekViewEventComponent.prototype, "tooltipDelay", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], CalendarWeekViewEventComponent.prototype, "customTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], CalendarWeekViewEventComponent.prototype, "eventTitleTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], CalendarWeekViewEventComponent.prototype, "eventActionsTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], CalendarWeekViewEventComponent.prototype, "tooltipTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarWeekViewEventComponent.prototype, "column", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], CalendarWeekViewEventComponent.prototype, "daysInWeek", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarWeekViewEventComponent.prototype, "eventClicked", void 0);

      var CalendarWeekViewHourSegmentComponent = function CalendarWeekViewHourSegmentComponent() {
        _classCallCheck(this, CalendarWeekViewHourSegmentComponent);
      };

      CalendarWeekViewHourSegmentComponent.ɵfac = function CalendarWeekViewHourSegmentComponent_Factory(t) {
        return new (t || CalendarWeekViewHourSegmentComponent)();
      };

      CalendarWeekViewHourSegmentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CalendarWeekViewHourSegmentComponent,
        selectors: [["mwl-calendar-week-view-hour-segment"]],
        inputs: {
          segment: "segment",
          segmentHeight: "segmentHeight",
          locale: "locale",
          isTimeLabel: "isTimeLabel",
          daysInWeek: "daysInWeek",
          customTemplate: "customTemplate"
        },
        decls: 3,
        vars: 8,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-hour-segment", 3, "ngClass"], ["class", "cal-time", 4, "ngIf"], [1, "cal-time"]],
        template: function CalendarWeekViewHourSegmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarWeekViewHourSegmentComponent_ng_template_0_Template, 3, 13, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewHourSegmentComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](2, _c27, ctx.segment, ctx.locale, ctx.segmentHeight, ctx.isTimeLabel, ctx.daysInWeek));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
        pipes: [CalendarA11yPipe, CalendarDatePipe],
        encapsulation: 2
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], CalendarWeekViewHourSegmentComponent.prototype, "segment", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], CalendarWeekViewHourSegmentComponent.prototype, "segmentHeight", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], CalendarWeekViewHourSegmentComponent.prototype, "locale", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)], CalendarWeekViewHourSegmentComponent.prototype, "isTimeLabel", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], CalendarWeekViewHourSegmentComponent.prototype, "daysInWeek", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], CalendarWeekViewHourSegmentComponent.prototype, "customTemplate", void 0);

      var CalendarWeekViewCurrentTimeMarkerComponent = /*#__PURE__*/function () {
        function CalendarWeekViewCurrentTimeMarkerComponent(dateAdapter, zone) {
          var _this13 = this;

          _classCallCheck(this, CalendarWeekViewCurrentTimeMarkerComponent);

          this.dateAdapter = dateAdapter;
          this.zone = zone;
          this.columnDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(this.columnDate);
          this.marker$ = this.zone.onStable.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(function () {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.interval)(60 * 1000);
          }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(0), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMapTo)(this.columnDate$), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(function (columnDate) {
            var startOfDay = _this13.dateAdapter.setMinutes(_this13.dateAdapter.setHours(columnDate, _this13.dayStartHour), _this13.dayStartMinute);

            var endOfDay = _this13.dateAdapter.setMinutes(_this13.dateAdapter.setHours(columnDate, _this13.dayEndHour), _this13.dayEndMinute);

            var hourHeightModifier = _this13.hourSegments * _this13.hourSegmentHeight / 60;
            var now = new Date();
            return {
              isVisible: _this13.dateAdapter.isSameDay(columnDate, now) && now >= startOfDay && now <= endOfDay,
              top: _this13.dateAdapter.differenceInMinutes(now, startOfDay) * hourHeightModifier
            };
          }));
        }

        _createClass(CalendarWeekViewCurrentTimeMarkerComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.columnDate) {
              this.columnDate$.next(changes.columnDate.currentValue);
            }
          }
        }]);

        return CalendarWeekViewCurrentTimeMarkerComponent;
      }();

      CalendarWeekViewCurrentTimeMarkerComponent.ɵfac = function CalendarWeekViewCurrentTimeMarkerComponent_Factory(t) {
        return new (t || CalendarWeekViewCurrentTimeMarkerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
      };

      CalendarWeekViewCurrentTimeMarkerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CalendarWeekViewCurrentTimeMarkerComponent,
        selectors: [["mwl-calendar-week-view-current-time-marker"]],
        inputs: {
          columnDate: "columnDate",
          dayStartHour: "dayStartHour",
          dayStartMinute: "dayStartMinute",
          dayEndHour: "dayEndHour",
          dayEndMinute: "dayEndMinute",
          hourSegments: "hourSegments",
          hourSegmentHeight: "hourSegmentHeight",
          customTemplate: "customTemplate"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 5,
        vars: 14,
        consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-current-time-marker", 3, "top", 4, "ngIf"], [1, "cal-current-time-marker"]],
        template: function CalendarWeekViewCurrentTimeMarkerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template, 0, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            var tmp_1_0;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction7"](6, _c28, ctx.columnDate, ctx.dayStartHour, ctx.dayStartMinute, ctx.dayEndHour, ctx.dayEndMinute, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx.marker$)) == null ? null : tmp_1_0.isVisible, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, ctx.marker$)) == null ? null : tmp_1_0.top));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
        encapsulation: 2
      });

      CalendarWeekViewCurrentTimeMarkerComponent.ctorParameters = function () {
        return [{
          type: _DateAdapter
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
        }];
      };

      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "columnDate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartHour", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartMinute", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndHour", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndMinute", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegments", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegmentHeight", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "customTemplate", void 0);
      CalendarWeekViewCurrentTimeMarkerComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_DateAdapter, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone])], CalendarWeekViewCurrentTimeMarkerComponent);

      var _CalendarWeekModule = function CalendarWeekModule() {
        _classCallCheck(this, CalendarWeekModule);
      };

      _CalendarWeekModule.ɵfac = function CalendarWeekModule_Factory(t) {
        return new (t || _CalendarWeekModule)();
      };

      _CalendarWeekModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _CalendarWeekModule
      });
      _CalendarWeekModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule, _CalendarCommonModule], angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule]
      });
      /**
       * Shows all events on a given day. Example usage:
       *
       * ```typescript
       * <mwl-calendar-day-view
       *  [viewDate]="viewDate"
       *  [events]="events">
       * </mwl-calendar-day-view>
       * ```
       */

      var _CalendarDayViewComponent = function CalendarDayViewComponent() {
        _classCallCheck(this, CalendarDayViewComponent);

        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must divide equally into 60.
         */

        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */

        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */

        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */

        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */

        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */

        this.dayEndMinute = 59;
        /**
         * The placement of the event tooltip
         */

        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */

        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */

        this.tooltipDelay = null;
        /**
         * Whether to snap events to a grid when dragging
         */

        this.snapDraggedEvents = true;
        /**
         * Called when an event title is clicked
         */

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called when an hour segment is clicked
         */

        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Called when an event is resized or dragged and dropped
         */

        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
         */

        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
      };

      _CalendarDayViewComponent.ɵfac = function CalendarDayViewComponent_Factory(t) {
        return new (t || _CalendarDayViewComponent)();
      };

      _CalendarDayViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _CalendarDayViewComponent,
        selectors: [["mwl-calendar-day-view"]],
        inputs: {
          events: "events",
          hourSegments: "hourSegments",
          hourSegmentHeight: "hourSegmentHeight",
          dayStartHour: "dayStartHour",
          dayStartMinute: "dayStartMinute",
          dayEndHour: "dayEndHour",
          dayEndMinute: "dayEndMinute",
          tooltipPlacement: "tooltipPlacement",
          tooltipAppendToBody: "tooltipAppendToBody",
          tooltipDelay: "tooltipDelay",
          snapDraggedEvents: "snapDraggedEvents",
          viewDate: "viewDate",
          refresh: "refresh",
          locale: "locale",
          eventSnapSize: "eventSnapSize",
          tooltipTemplate: "tooltipTemplate",
          hourSegmentTemplate: "hourSegmentTemplate",
          eventTemplate: "eventTemplate",
          eventTitleTemplate: "eventTitleTemplate",
          eventActionsTemplate: "eventActionsTemplate",
          allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
          currentTimeMarkerTemplate: "currentTimeMarkerTemplate"
        },
        outputs: {
          eventClicked: "eventClicked",
          hourSegmentClicked: "hourSegmentClicked",
          eventTimesChanged: "eventTimesChanged",
          beforeViewRender: "beforeViewRender"
        },
        decls: 1,
        vars: 23,
        consts: [[1, "cal-day-view", 3, "daysInWeek", "viewDate", "events", "hourSegments", "hourSegmentHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "refresh", "locale", "eventSnapSize", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "hourSegmentTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "snapDraggedEvents", "allDayEventsLabelTemplate", "currentTimeMarkerTemplate", "eventClicked", "hourSegmentClicked", "eventTimesChanged", "beforeViewRender"]],
        template: function CalendarDayViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mwl-calendar-week-view", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("eventClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
              return ctx.eventClicked.emit($event);
            })("hourSegmentClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_hourSegmentClicked_0_listener($event) {
              return ctx.hourSegmentClicked.emit($event);
            })("eventTimesChanged", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
              return ctx.eventTimesChanged.emit($event);
            })("beforeViewRender", function CalendarDayViewComponent_Template_mwl_calendar_week_view_beforeViewRender_0_listener($event) {
              return ctx.beforeViewRender.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("daysInWeek", 1)("viewDate", ctx.viewDate)("events", ctx.events)("hourSegments", ctx.hourSegments)("hourSegmentHeight", ctx.hourSegmentHeight)("dayStartHour", ctx.dayStartHour)("dayStartMinute", ctx.dayStartMinute)("dayEndHour", ctx.dayEndHour)("dayEndMinute", ctx.dayEndMinute)("refresh", ctx.refresh)("locale", ctx.locale)("eventSnapSize", ctx.eventSnapSize)("tooltipPlacement", ctx.tooltipPlacement)("tooltipTemplate", ctx.tooltipTemplate)("tooltipAppendToBody", ctx.tooltipAppendToBody)("tooltipDelay", ctx.tooltipDelay)("hourSegmentTemplate", ctx.hourSegmentTemplate)("eventTemplate", ctx.eventTemplate)("eventTitleTemplate", ctx.eventTitleTemplate)("eventActionsTemplate", ctx.eventActionsTemplate)("snapDraggedEvents", ctx.snapDraggedEvents)("allDayEventsLabelTemplate", ctx.allDayEventsLabelTemplate)("currentTimeMarkerTemplate", ctx.currentTimeMarkerTemplate);
          }
        },
        directives: [_CalendarWeekViewComponent],
        encapsulation: 2
      });
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Date)], _CalendarDayViewComponent.prototype, "viewDate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)], _CalendarDayViewComponent.prototype, "events", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarDayViewComponent.prototype, "hourSegments", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarDayViewComponent.prototype, "hourSegmentHeight", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarDayViewComponent.prototype, "dayStartHour", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarDayViewComponent.prototype, "dayStartMinute", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarDayViewComponent.prototype, "dayEndHour", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarDayViewComponent.prototype, "dayEndMinute", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject)], _CalendarDayViewComponent.prototype, "refresh", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)], _CalendarDayViewComponent.prototype, "locale", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarDayViewComponent.prototype, "eventSnapSize", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], _CalendarDayViewComponent.prototype, "tooltipPlacement", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarDayViewComponent.prototype, "tooltipTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)], _CalendarDayViewComponent.prototype, "tooltipAppendToBody", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)], _CalendarDayViewComponent.prototype, "tooltipDelay", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarDayViewComponent.prototype, "hourSegmentTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarDayViewComponent.prototype, "eventTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarDayViewComponent.prototype, "eventTitleTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarDayViewComponent.prototype, "eventActionsTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)], _CalendarDayViewComponent.prototype, "snapDraggedEvents", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarDayViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef)], _CalendarDayViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], _CalendarDayViewComponent.prototype, "eventClicked", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], _CalendarDayViewComponent.prototype, "hourSegmentClicked", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], _CalendarDayViewComponent.prototype, "eventTimesChanged", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)(), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)], _CalendarDayViewComponent.prototype, "beforeViewRender", void 0);

      var _CalendarDayModule = function CalendarDayModule() {
        _classCallCheck(this, CalendarDayModule);
      };

      _CalendarDayModule.ɵfac = function CalendarDayModule_Factory(t) {
        return new (t || _CalendarDayModule)();
      };

      _CalendarDayModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _CalendarDayModule
      });
      _CalendarDayModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _CalendarCommonModule, _CalendarWeekModule]]
      });
      var CalendarModule_1;
      /**
       * The main module of this library. Example usage:
       *
       * ```typescript
       * import { CalenderModule } from 'angular-calendar';
       *
       * @NgModule({
       *   imports: [
       *     CalenderModule.forRoot()
       *   ]
       * })
       * class MyModule {}
       * ```
       *
       */

      var _CalendarModule = CalendarModule_1 = /*#__PURE__*/function () {
        function CalendarModule() {
          _classCallCheck(this, CalendarModule);
        }

        _createClass(CalendarModule, null, [{
          key: "forRoot",
          value: function forRoot(dateAdapter) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return {
              ngModule: CalendarModule_1,
              providers: [dateAdapter, config.eventTitleFormatter || _CalendarEventTitleFormatter, config.dateFormatter || _CalendarDateFormatter, config.utils || _CalendarUtils, config.a11y || _CalendarA11y]
            };
          }
        }]);

        return CalendarModule;
      }();

      _CalendarModule.ɵfac = function CalendarModule_Factory(t) {
        return new (t || _CalendarModule)();
      };

      _CalendarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _CalendarModule
      });
      _CalendarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_CalendarCommonModule, _CalendarMonthModule, _CalendarWeekModule, _CalendarDayModule], _CalendarCommonModule, _CalendarMonthModule, _CalendarWeekModule, _CalendarDayModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarEventActionsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mwl-calendar-event-actions',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-trackByActionId=\"trackByActionId\"\n    >\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy: trackByActionId\"\n          (mwlClick)=\"action.onClick({ event: event, sourceEvent: $event })\"\n          (mwlKeydownEnter)=\"\n            action.onClick({ event: event, sourceEvent: $event })\n          \"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\"\n          tabindex=\"0\"\n          role=\"button\"\n          [attr.aria-label]=\"\n            { action: action } | calendarA11y: 'actionButtonLabel'\n          \"\n        >\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        trackByActionId: trackByActionId\n      }\"\n    >\n    </ng-template>\n  "
          }]
        }], function () {
          return [];
        }, {
          event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarEventTitleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mwl-calendar-event-title',
            template: "\n    <ng-template #defaultTemplate let-event=\"event\" let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle: view:event\"\n        [attr.aria-hidden]=\"{} | calendarA11y: 'hideEventTitle'\"\n      >\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\"\n    >\n    </ng-template>\n  "
          }]
        }], null, {
          event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarTooltipWindowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mwl-calendar-tooltip-window',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\"\n    >\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\"\n    >\n    </ng-template>\n  "
          }]
        }], null, {
          contents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarTooltipDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: '[mwlCalendarTooltip]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }]
          }];
        }, {
          placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['tooltipPlacement']
          }],
          delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['tooltipDelay']
          }],
          onMouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
            args: ['mouseenter']
          }],
          onMouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
            args: ['mouseleave']
          }],
          contents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['mwlCalendarTooltip']
          }],
          customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['tooltipTemplate']
          }],
          event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['tooltipEvent']
          }],
          appendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['tooltipAppendToBody']
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarPreviousViewDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: '[mwlCalendarPreviousView]'
          }]
        }], function () {
          return [{
            type: _DateAdapter
          }];
        }, {
          excludeDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          viewDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],

          /**
           * @hidden
           */
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
            args: ['click']
          }],
          view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          viewDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          daysInWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarNextViewDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: '[mwlCalendarNextView]'
          }]
        }], function () {
          return [{
            type: _DateAdapter
          }];
        }, {
          excludeDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          viewDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],

          /**
           * @hidden
           */
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
            args: ['click']
          }],
          view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          viewDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          daysInWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarTodayDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: '[mwlCalendarToday]'
          }]
        }], function () {
          return [{
            type: _DateAdapter
          }];
        }, {
          viewDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],

          /**
           * @hidden
           */
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
            args: ['click']
          }],
          viewDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_CalendarAngularDateFormatter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
        }], function () {
          return [{
            type: _DateAdapter
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_CalendarDateFormatter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
        }], null, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarDatePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe,
          args: [{
            name: 'calendarDate'
          }]
        }], function () {
          return [{
            type: _CalendarDateFormatter
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID]
            }]
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarEventTitlePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe,
          args: [{
            name: 'calendarEventTitle'
          }]
        }], function () {
          return [{
            type: _CalendarEventTitleFormatter
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClickDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: '[mwlClick]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }]
          }];
        }, {
          clickListenerDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output,
            args: ['mwlClick']
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](KeydownEnterDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: '[mwlKeydownEnter]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
          }];
        }, {
          keydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output,
            args: ['mwlKeydownEnter']
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_CalendarUtils, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
        }], function () {
          return [{
            type: _DateAdapter
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_CalendarA11y, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.I18nPluralPipe
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarA11yPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe,
          args: [{
            name: 'calendarA11y'
          }]
        }], function () {
          return [{
            type: _CalendarA11y
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID]
            }]
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_CalendarMomentDateFormatter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_MOMENT]
            }]
          }, {
            type: _DateAdapter
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_CalendarNativeDateFormatter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
        }], function () {
          return [{
            type: _DateAdapter
          }];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_CalendarCommonModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            declarations: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
            exports: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.I18nPluralPipe],
            entryComponents: [CalendarTooltipWindowComponent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_CalendarCommonModule, {
          declarations: function declarations() {
            return [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule];
          },
          exports: function exports() {
            return [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_CalendarMonthViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mwl-calendar-month-view',
            template: "\n    <div class=\"cal-month-view\" role=\"grid\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        (columnHeaderClicked)=\"columnHeaderClicked.emit($event)\"\n        [customTemplate]=\"headerTemplate\"\n      >\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div\n          *ngFor=\"let rowIndex of view.rowOffsets; trackBy: trackByRowOffset\"\n        >\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"\n                let day of view.days\n                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;\n                trackBy: trackByDate\n              \"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"cellTemplate\"\n              [ngStyle]=\"{ backgroundColor: day.backgroundColor }\"\n              (mwlClick)=\"dayClicked.emit({ day: day, sourceEvent: $event })\"\n              [clickListenerDisabled]=\"dayClicked.observers.length === 0\"\n              (mwlKeydownEnter)=\"\n                dayClicked.emit({ day: day, sourceEvent: $event })\n              \"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"\n                eventDropped(\n                  day,\n                  $event.dropData.event,\n                  $event.dropData.draggedFrom\n                )\n              \"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: $event.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n              [attr.tabindex]=\"{} | calendarA11y: 'monthCellTabIndex'\"\n            >\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [locale]=\"locale\"\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [date]=\"openDay?.date\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"\n              eventClicked.emit({\n                event: $event.event,\n                sourceEvent: $event.sourceEvent\n              })\n            \"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"\n              eventDropped(\n                openDay,\n                $event.dropData.event,\n                $event.dropData.draggedFrom\n              )\n            \"\n          >\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
          }, {
            type: _CalendarUtils
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID]
            }]
          }, {
            type: _DateAdapter
          }];
        }, {
          events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          excludeDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          activeDayIsOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipAppendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          beforeViewRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          dayClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          eventClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          columnHeaderClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          eventTimesChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          viewDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          activeDay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          refresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          weekStartsOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          cellTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          openDayEventsTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          eventTitleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          eventActionsTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          weekendDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarMonthViewHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mwl-calendar-month-view-header',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-cell-row cal-header\" role=\"row\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          (click)=\"\n            columnHeaderClicked.emit({\n              isoDayNumber: day.day,\n              sourceEvent: $event\n            })\n          \"\n          [ngClass]=\"day.cssClass\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
          }]
        }], function () {
          return [];
        }, {
          columnHeaderClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          days: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarMonthCellComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mwl-calendar-month-cell',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-cell-top\"\n        [attr.aria-label]=\"\n          { day: day, locale: locale } | calendarA11y: 'monthCell'\n        \"\n      >\n        <span aria-hidden=\"true\">\n          <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{\n            day.badgeTotal\n          }}</span>\n          <span class=\"cal-day-number\">{{\n            day.date | calendarDate: 'monthViewDayNumber':locale\n          }}</span>\n        </span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy: trackByEventId\"\n          [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({ event: event })\"\n          (mouseleave)=\"unhighlightDay.emit({ event: event })\"\n          [mwlCalendarTooltip]=\"\n            event.title | calendarEventTitle: 'monthTooltip':event\n          \"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, draggedFrom: day }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n          (mwlClick)=\"eventClicked.emit({ event: event, sourceEvent: $event })\"\n          [attr.aria-hidden]=\"{} | calendarA11y: 'hideMonthCellEvents'\"\n        ></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
            host: {
              "class": 'cal-cell cal-day-cell',
              '[class.cal-past]': 'day.isPast',
              '[class.cal-today]': 'day.isToday',
              '[class.cal-future]': 'day.isFuture',
              '[class.cal-weekend]': 'day.isWeekend',
              '[class.cal-in-month]': 'day.inMonth',
              '[class.cal-out-month]': '!day.inMonth',
              '[class.cal-has-events]': 'day.events.length > 0',
              '[class.cal-open]': 'day === openDay',
              '[class.cal-event-highlight]': '!!day.backgroundColor'
            }
          }]
        }], function () {
          return [];
        }, {
          highlightDay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          unhighlightDay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          eventClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          day: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          openDay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipAppendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarOpenDayEventsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mwl-calendar-open-day-events',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-open-day-events\"\n        [@collapse]\n        *ngIf=\"isOpen\"\n        role=\"application\"\n      >\n        <span\n          tabindex=\"-1\"\n          role=\"alert\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale } | calendarA11y: 'openDayEventsAlert'\n          \"\n        ></span>\n        <span\n          tabindex=\"0\"\n          role=\"landmark\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale }\n              | calendarA11y: 'openDayEventsLandmark'\n          \"\n        ></span>\n        <div\n          *ngFor=\"let event of events; trackBy: trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n        >\n          <span\n            class=\"cal-event\"\n            [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          >\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            (mwlKeydownEnter)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            tabindex=\"0\"\n            [attr.aria-label]=\"\n              { event: event, locale: locale }\n                | calendarA11y: 'eventDescription'\n            \"\n          >\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\"\n          >\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
            animations: [_collapseAnimation]
          }]
        }], function () {
          return [];
        }, {
          isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          eventClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          eventTitleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          eventActionsTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_CalendarMonthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule, _CalendarCommonModule],
            declarations: [_CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent],
            exports: [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule, _CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_CalendarMonthModule, {
          declarations: function declarations() {
            return [_CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule, _CalendarCommonModule];
          },
          exports: function exports() {
            return [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule, _CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_CalendarWeekViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mwl-calendar-week-view',
            template: "\n    <div class=\"cal-week-view\" role=\"grid\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"\n          eventDropped({ dropData: $event }, $event.newStart, true)\n        \"\n        (dragEnter)=\"dateDragEnter($event.date)\"\n      >\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('allDay')\"\n        (dragLeave)=\"dragLeave('allDay')\"\n      >\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\"\n          ></div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\"\n            (dragEnter)=\"dateDragEnter(day.date)\"\n          ></div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy: trackById\"\n          #eventRowContainer\n          class=\"cal-events-row\"\n        >\n          <div\n            *ngFor=\"\n              let allDayEvent of eventRow.row;\n              trackBy: trackByWeekAllDayEvent\n            \"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"\n              allDayEvent.event.draggable && allDayEventResizes.size === 0\n            \"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"(100 / days.length) * allDayEvent.offset\"\n            mwlResizable\n            [resizeSnapGrid]=\"{ left: dayColumnWidth, right: dayColumnWidth }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"\n              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\n            \"\n            (resizing)=\"\n              allDayEventResizing(allDayEvent, $event, dayColumnWidth)\n            \"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: allDayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y:\n                !snapDraggedEvents &&\n                allDayEvent.event.draggable &&\n                allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? { x: dayColumnWidth } : {}\"\n            [validateDrag]=\"validateDrag\"\n            [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n            (dragStart)=\"dragStarted(eventRowContainer, event)\"\n            (dragging)=\"allDayEventDragMove()\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.beforeStart &&\n                !allDayEvent.startsBeforeWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\"\n            ></div>\n            <mwl-calendar-week-view-event\n              [locale]=\"locale\"\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              [daysInWeek]=\"daysInWeek\"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: allDayEvent.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n            >\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.afterEnd &&\n                !allDayEvent.endsAfterWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\"\n            ></div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('time')\"\n        (dragLeave)=\"dragLeave('time')\"\n      >\n        <div\n          class=\"cal-time-label-column\"\n          *ngIf=\"view.hourColumns.length > 0 && daysInWeek !== 1\"\n        >\n          <div\n            *ngFor=\"\n              let hour of view.hourColumns[0].hours;\n              trackBy: trackByHour;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\"\n          >\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\"\n              [daysInWeek]=\"daysInWeek\"\n            >\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy: trackByHourColumn\"\n          >\n            <mwl-calendar-week-view-current-time-marker\n              [columnDate]=\"column.date\"\n              [dayStartHour]=\"dayStartHour\"\n              [dayStartMinute]=\"dayStartMinute\"\n              [dayEndHour]=\"dayEndHour\"\n              [dayEndMinute]=\"dayEndMinute\"\n              [hourSegments]=\"hourSegments\"\n              [hourSegmentHeight]=\"hourSegmentHeight\"\n              [customTemplate]=\"currentTimeMarkerTemplate\"\n            ></mwl-calendar-week-view-current-time-marker>\n            <div class=\"cal-events-container\">\n              <div\n                *ngFor=\"\n                  let timeEvent of column.events;\n                  trackBy: trackByWeekTimeEvent\n                \"\n                #event\n                class=\"cal-event-container\"\n                [class.cal-draggable]=\"\n                  timeEvent.event.draggable && timeEventResizes.size === 0\n                \"\n                [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n                [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n                [ngClass]=\"timeEvent.event.cssClass\"\n                [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n                [style.top.px]=\"timeEvent.top\"\n                [style.height.px]=\"timeEvent.height\"\n                [style.left.%]=\"timeEvent.left\"\n                [style.width.%]=\"timeEvent.width\"\n                mwlResizable\n                [resizeSnapGrid]=\"{\n                  left: dayColumnWidth,\n                  right: dayColumnWidth,\n                  top: eventSnapSize || hourSegmentHeight,\n                  bottom: eventSnapSize || hourSegmentHeight\n                }\"\n                [validateResize]=\"validateResize\"\n                [allowNegativeResizes]=\"true\"\n                (resizeStart)=\"\n                  timeEventResizeStarted(dayColumns, timeEvent, $event)\n                \"\n                (resizing)=\"timeEventResizing(timeEvent, $event)\"\n                (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n                mwlDraggable\n                dragActiveClass=\"cal-drag-active\"\n                [dropData]=\"{ event: timeEvent.event, calendarId: calendarId }\"\n                [dragAxis]=\"{\n                  x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                  y: timeEvent.event.draggable && timeEventResizes.size === 0\n                }\"\n                [dragSnapGrid]=\"\n                  snapDraggedEvents\n                    ? {\n                        x: dayColumnWidth,\n                        y: eventSnapSize || hourSegmentHeight\n                      }\n                    : {}\n                \"\n                [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n                [ghostDragEnabled]=\"!snapDraggedEvents\"\n                [ghostElementTemplate]=\"weekEventTemplate\"\n                [validateDrag]=\"validateDrag\"\n                (dragStart)=\"dragStarted(dayColumns, event, timeEvent)\"\n                (dragging)=\"dragMove(timeEvent, $event)\"\n                (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\"\n              >\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-before-start\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.beforeStart &&\n                    !timeEvent.startsBeforeDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    left: true,\n                    top: true\n                  }\"\n                ></div>\n                <ng-template\n                  [ngTemplateOutlet]=\"weekEventTemplate\"\n                ></ng-template>\n                <ng-template #weekEventTemplate>\n                  <mwl-calendar-week-view-event\n                    [locale]=\"locale\"\n                    [weekEvent]=\"timeEvent\"\n                    [tooltipPlacement]=\"tooltipPlacement\"\n                    [tooltipTemplate]=\"tooltipTemplate\"\n                    [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                    [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                    [tooltipDelay]=\"tooltipDelay\"\n                    [customTemplate]=\"eventTemplate\"\n                    [eventTitleTemplate]=\"eventTitleTemplate\"\n                    [eventActionsTemplate]=\"eventActionsTemplate\"\n                    [column]=\"column\"\n                    [daysInWeek]=\"daysInWeek\"\n                    (eventClicked)=\"\n                      eventClicked.emit({\n                        event: timeEvent.event,\n                        sourceEvent: $event.sourceEvent\n                      })\n                    \"\n                  >\n                  </mwl-calendar-week-view-event>\n                </ng-template>\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-after-end\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.afterEnd &&\n                    !timeEvent.endsAfterDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    right: true,\n                    bottom: true\n                  }\"\n                ></div>\n              </div>\n            </div>\n\n            <div\n              *ngFor=\"\n                let hour of column.hours;\n                trackBy: trackByHour;\n                let odd = odd\n              \"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\"\n            >\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"\n                  let segment of hour.segments;\n                  trackBy: trackByHourSegment\n                \"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                [daysInWeek]=\"daysInWeek\"\n                (mwlClick)=\"\n                  hourSegmentClicked.emit({\n                    date: segment.date,\n                    sourceEvent: $event\n                  })\n                \"\n                [clickListenerDisabled]=\"\n                  hourSegmentClicked.observers.length === 0\n                \"\n                mwlDroppable\n                [dragOverClass]=\"\n                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\n                \"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\"\n                (dragEnter)=\"dateDragEnter(segment.date)\"\n                [isTimeLabel]=\"daysInWeek === 1\"\n              >\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
          }, {
            type: _CalendarUtils
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID]
            }]
          }, {
            type: _DateAdapter
          }];
        }, {
          events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          excludeDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipAppendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          precision: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          snapDraggedEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          hourSegments: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          hourSegmentHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dayStartHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dayStartMinute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dayEndHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dayEndMinute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dayHeaderClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          eventClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          eventTimesChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          beforeViewRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          hourSegmentClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          viewDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          refresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          weekStartsOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          eventTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          eventTitleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          eventActionsTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          weekendDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          hourSegmentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          eventSnapSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          allDayEventsLabelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          daysInWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          currentTimeMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarWeekViewHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mwl-calendar-week-view-header',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n      let-dragEnter=\"dragEnter\"\n    >\n      <div class=\"cal-day-headers\" role=\"row\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day, sourceEvent: $event })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n          (dragEnter)=\"dragEnter.emit({ date: day.date })\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        dragEnter: dragEnter,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
          }]
        }], function () {
          return [];
        }, {
          dayHeaderClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          eventDropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          dragEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          days: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarWeekViewEventComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mwl-calendar-week-view-event',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-column=\"column\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: weekEvent.event.color?.secondary,\n          borderColor: weekEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          !tooltipDisabled\n            ? (weekEvent.event.title\n              | calendarEventTitle\n                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')\n                : weekEvent.tempEvent || weekEvent.event)\n            : ''\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.tempEvent || weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit({ sourceEvent: $event })\"\n        (mwlKeydownEnter)=\"eventClicked.emit({ sourceEvent: $event })\"\n        tabindex=\"0\"\n        role=\"application\"\n        [attr.aria-label]=\"\n          { event: weekEvent.tempEvent || weekEvent.event, locale: locale }\n            | calendarA11y: 'eventDescription'\n        \"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          [view]=\"daysInWeek === 1 ? 'day' : 'week'\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled,\n        tooltipDelay: tooltipDelay,\n        column: column,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  "
          }]
        }], function () {
          return [];
        }, {
          eventClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          weekEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipAppendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          eventTitleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          eventActionsTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          daysInWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarWeekViewHourSegmentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mwl-calendar-week-view-hour-segment',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n      let-isTimeLabel=\"isTimeLabel\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        [attr.aria-hidden]=\"\n          {}\n            | calendarA11y\n              : (daysInWeek === 1\n                  ? 'hideDayHourSegment'\n                  : 'hideWeekHourSegment')\n        \"\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\" *ngIf=\"isTimeLabel\">\n          {{\n            segment.displayDate\n              | calendarDate\n                : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')\n                : locale\n          }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight,\n        isTimeLabel: isTimeLabel,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  "
          }]
        }], null, {
          segment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          segmentHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          isTimeLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          daysInWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarWeekViewCurrentTimeMarkerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mwl-calendar-week-view-current-time-marker',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-columnDate=\"columnDate\"\n      let-dayStartHour=\"dayStartHour\"\n      let-dayStartMinute=\"dayStartMinute\"\n      let-dayEndHour=\"dayEndHour\"\n      let-dayEndMinute=\"dayEndMinute\"\n      let-isVisible=\"isVisible\"\n      let-topPx=\"topPx\"\n    >\n      <div\n        class=\"cal-current-time-marker\"\n        *ngIf=\"isVisible\"\n        [style.top.px]=\"topPx\"\n      ></div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        columnDate: columnDate,\n        dayStartHour: dayStartHour,\n        dayStartMinute: dayStartMinute,\n        dayEndHour: dayEndHour,\n        dayEndMinute: dayEndMinute,\n        isVisible: (marker$ | async)?.isVisible,\n        topPx: (marker$ | async)?.top\n      }\"\n    >\n    </ng-template>\n  "
          }]
        }], function () {
          return [{
            type: _DateAdapter
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
          }];
        }, {
          columnDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dayStartHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dayStartMinute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dayEndHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dayEndMinute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          hourSegments: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          hourSegmentHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_CalendarWeekModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule, _CalendarCommonModule],
            declarations: [_CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent],
            exports: [angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule, _CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_CalendarWeekModule, {
          declarations: function declarations() {
            return [_CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule, _CalendarCommonModule];
          },
          exports: function exports() {
            return [angular_resizable_element__WEBPACK_IMPORTED_MODULE_12__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_10__.DragAndDropModule, _CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_CalendarDayViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mwl-calendar-day-view',
            template: "\n    <mwl-calendar-week-view\n      class=\"cal-day-view\"\n      [daysInWeek]=\"1\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [hourSegments]=\"hourSegments\"\n      [hourSegmentHeight]=\"hourSegmentHeight\"\n      [dayStartHour]=\"dayStartHour\"\n      [dayStartMinute]=\"dayStartMinute\"\n      [dayEndHour]=\"dayEndHour\"\n      [dayEndMinute]=\"dayEndMinute\"\n      [refresh]=\"refresh\"\n      [locale]=\"locale\"\n      [eventSnapSize]=\"eventSnapSize\"\n      [tooltipPlacement]=\"tooltipPlacement\"\n      [tooltipTemplate]=\"tooltipTemplate\"\n      [tooltipAppendToBody]=\"tooltipAppendToBody\"\n      [tooltipDelay]=\"tooltipDelay\"\n      [hourSegmentTemplate]=\"hourSegmentTemplate\"\n      [eventTemplate]=\"eventTemplate\"\n      [eventTitleTemplate]=\"eventTitleTemplate\"\n      [eventActionsTemplate]=\"eventActionsTemplate\"\n      [snapDraggedEvents]=\"snapDraggedEvents\"\n      [allDayEventsLabelTemplate]=\"allDayEventsLabelTemplate\"\n      [currentTimeMarkerTemplate]=\"currentTimeMarkerTemplate\"\n      (eventClicked)=\"eventClicked.emit($event)\"\n      (hourSegmentClicked)=\"hourSegmentClicked.emit($event)\"\n      (eventTimesChanged)=\"eventTimesChanged.emit($event)\"\n      (beforeViewRender)=\"beforeViewRender.emit($event)\"\n    ></mwl-calendar-week-view>\n  "
          }]
        }], function () {
          return [];
        }, {
          events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          hourSegments: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          hourSegmentHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dayStartHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dayStartMinute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dayEndHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dayEndMinute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipAppendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          snapDraggedEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          eventClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          hourSegmentClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          eventTimesChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          beforeViewRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          viewDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          refresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          eventSnapSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tooltipTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          hourSegmentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          eventTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          eventTitleTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          eventActionsTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          allDayEventsLabelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          currentTimeMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_CalendarDayModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _CalendarCommonModule, _CalendarWeekModule],
            declarations: [_CalendarDayViewComponent],
            exports: [_CalendarDayViewComponent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_CalendarDayModule, {
          declarations: function declarations() {
            return [_CalendarDayViewComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _CalendarCommonModule, _CalendarWeekModule];
          },
          exports: function exports() {
            return [_CalendarDayViewComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_CalendarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            imports: [_CalendarCommonModule, _CalendarMonthModule, _CalendarWeekModule, _CalendarDayModule],
            exports: [_CalendarCommonModule, _CalendarMonthModule, _CalendarWeekModule, _CalendarDayModule]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_CalendarModule, {
          imports: [_CalendarCommonModule, _CalendarMonthModule, _CalendarWeekModule, _CalendarDayModule],
          exports: [_CalendarCommonModule, _CalendarMonthModule, _CalendarWeekModule, _CalendarDayModule]
        });
      })();
      /*
       * Public API Surface of angular-calendar
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=angular-calendar.js.map

      /***/

    },

    /***/
    77137:
    /*!*************************************************************************!*\
      !*** ./node_modules/angular-calendar/date-adapters/esm/moment/index.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "adapterFactory": function adapterFactory() {
          return (
            /* binding */
            _adapterFactory
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      19806);
      /* harmony import */


      var calendar_utils_date_adapters_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! calendar-utils/date-adapters/moment */
      75669);

      function _adapterFactory(moment) {
        return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (0, calendar_utils_date_adapters_moment__WEBPACK_IMPORTED_MODULE_0__.adapterFactory)(moment)), {
          addWeeks: function addWeeks(date, amount) {
            return moment(date).add(amount, 'weeks').toDate();
          },
          addMonths: function addMonths(date, amount) {
            return moment(date).add(amount, 'months').toDate();
          },
          subDays: function subDays(date, amount) {
            return moment(date).subtract(amount, 'days').toDate();
          },
          subWeeks: function subWeeks(date, amount) {
            return moment(date).subtract(amount, 'weeks').toDate();
          },
          subMonths: function subMonths(date, amount) {
            return moment(date).subtract(amount, 'months').toDate();
          },
          getISOWeek: function getISOWeek(date) {
            return moment(date).isoWeek();
          },
          setDate: function setDate(date, dayOfMonth) {
            return moment(date).date(dayOfMonth).toDate();
          },
          setMonth: function setMonth(date, month) {
            return moment(date).month(month).toDate();
          },
          setYear: function setYear(date, year) {
            return moment(date).year(year).toDate();
          },
          getDate: function getDate(date) {
            return moment(date).date();
          },
          getYear: function getYear(date) {
            return moment(date).year();
          }
        });
      } //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    55304:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/angular-draggable-droppable/__ivy_ngcc__/fesm2015/angular-draggable-droppable.js ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DragAndDropModule": function DragAndDropModule() {
          return (
            /* binding */
            _DragAndDropModule
          );
        },

        /* harmony export */
        "ɵc": function ɵc() {
          return (
            /* binding */
            DraggableHelper
          );
        },

        /* harmony export */
        "ɵd": function ɵd() {
          return (
            /* binding */
            DraggableScrollContainerDirective
          );
        },

        /* harmony export */
        "ɵb": function ɵb() {
          return (
            /* binding */
            DraggableDirective
          );
        },

        /* harmony export */
        "ɵa": function ɵa() {
          return (
            /* binding */
            DroppableDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      69165);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      88229);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      66682);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      9112);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs */
      22759);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @mattlewis92/dom-autoscroller */
      56675);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      19773);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      39761);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      78345);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      15257);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      548);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/operators */
      34150);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs/operators */
      59328);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! rxjs/operators */
      87519);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var DraggableHelper = function DraggableHelper() {
        _classCallCheck(this, DraggableHelper);

        this.currentDrag = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      };

      DraggableHelper.ɵfac = function DraggableHelper_Factory(t) {
        return new (t || DraggableHelper)();
      };

      DraggableHelper.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: DraggableHelper,
        factory: DraggableHelper.ɵfac,
        providedIn: 'root'
      });
      /** @nocollapse */

      DraggableHelper.ngInjectableDef = (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.defineInjectable)({
        factory: function DraggableHelper_Factory() {
          return new DraggableHelper();
        },
        token: DraggableHelper,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DraggableHelper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * If the window isn't scrollable, then place this on the scrollable container that draggable elements are inside. e.g.
       * ```html
       * <div style="overflow: scroll" mwlDraggableScrollContainer>
       * <div mwlDraggable>Drag me!</div>
       * </div>
       * ```
       */


      var DraggableScrollContainerDirective =
      /**
       * @hidden
       * @param {?} elementRef
       */
      function DraggableScrollContainerDirective(elementRef) {
        _classCallCheck(this, DraggableScrollContainerDirective);

        this.elementRef = elementRef;
        /**
         * Trigger the DragStart after a long touch in scrollable container when true
         * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
         */

        this.activeLongPressDrag = false;
        /**
         * Configuration of a long touch
         * Duration in ms of a long touch before activating DragStart
         * Delta of the
         * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
         */

        this.longPressConfig = {
          duration: 300,
          delta: 30
        };
      };

      DraggableScrollContainerDirective.ɵfac = function DraggableScrollContainerDirective_Factory(t) {
        return new (t || DraggableScrollContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
      };

      DraggableScrollContainerDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: DraggableScrollContainerDirective,
        selectors: [["", "mwlDraggableScrollContainer", ""]],
        inputs: {
          activeLongPressDrag: "activeLongPressDrag",
          longPressConfig: "longPressConfig"
        }
      });
      /** @nocollapse */

      DraggableScrollContainerDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
        }];
      };

      DraggableScrollContainerDirective.propDecorators = {
        activeLongPressDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        longPressConfig: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DraggableScrollContainerDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: '[mwlDraggableScrollContainer]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }];
        }, {
          activeLongPressDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          longPressConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} renderer
       * @param {?} element
       * @param {?} classToAdd
       * @return {?}
       */


      function addClass(renderer, element, classToAdd) {
        if (classToAdd) {
          classToAdd.split(' ').forEach(
          /**
          * @param {?} className
          * @return {?}
          */
          function (className) {
            return renderer.addClass(element.nativeElement, className);
          });
        }
      }
      /**
       * @param {?} renderer
       * @param {?} element
       * @param {?} classToRemove
       * @return {?}
       */


      function removeClass(renderer, element, classToRemove) {
        if (classToRemove) {
          classToRemove.split(' ').forEach(
          /**
          * @param {?} className
          * @return {?}
          */
          function (className) {
            return renderer.removeClass(element.nativeElement, className);
          });
        }
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var DraggableDirective = /*#__PURE__*/function () {
        /**
         * @hidden
         * @param {?} element
         * @param {?} renderer
         * @param {?} draggableHelper
         * @param {?} zone
         * @param {?} vcr
         * @param {?} scrollContainer
         * @param {?} document
         */
        function DraggableDirective(element, renderer, draggableHelper, zone, vcr, scrollContainer, document) {
          _classCallCheck(this, DraggableDirective);

          this.element = element;
          this.renderer = renderer;
          this.draggableHelper = draggableHelper;
          this.zone = zone;
          this.vcr = vcr;
          this.scrollContainer = scrollContainer;
          this.document = document;
          /**
           * The axis along which the element is draggable
           */

          this.dragAxis = {
            x: true,
            y: true
          };
          /**
           * Snap all drags to an x / y grid
           */

          this.dragSnapGrid = {};
          /**
           * Show a ghost element that shows the drag when dragging
           */

          this.ghostDragEnabled = true;
          /**
           * Show the original element when ghostDragEnabled is true
           */

          this.showOriginalElementWhileDragging = false;
          /**
           * The cursor to use when hovering over a draggable element
           */

          this.dragCursor = '';
          /*
             * Options used to control the behaviour of auto scrolling: https://www.npmjs.com/package/dom-autoscroller
             */

          this.autoScroll = {
            margin: 20
          };
          /**
           * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
           */

          this.dragPointerDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called when the element has started to be dragged.
           * Only called after at least one mouse or touch move event.
           * If you call $event.cancelDrag$.emit() it will cancel the current drag
           */

          this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called after the ghost element has been created
           */

          this.ghostElementCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called when the element is being dragged
           */

          this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called after the element is dragged
           */

          this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * @hidden
           */

          this.pointerDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /**
           * @hidden
           */

          this.pointerMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /**
           * @hidden
           */

          this.pointerUp$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.eventListenerSubscriptions = {};
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.timeLongPress = {
            timerBegin: 0,
            timerEnd: 0
          };
        }
        /**
         * @return {?}
         */


        _createClass(DraggableDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.checkEventListeners();
            /** @type {?} */

            var pointerDragged$ = this.pointerDown$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(
            /**
            * @return {?}
            */
            function () {
              return _this14.canDrag();
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(
            /**
            * @param {?} pointerDownEvent
            * @return {?}
            */
            function (pointerDownEvent) {
              // fix for https://github.com/mattlewis92/angular-draggable-droppable/issues/61
              // stop mouse events propagating up the chain
              if (pointerDownEvent.event.stopPropagation && !_this14.scrollContainer) {
                pointerDownEvent.event.stopPropagation();
              } // hack to prevent text getting selected in safari while dragging

              /** @type {?} */


              var globalDragStyle = _this14.renderer.createElement('style');

              _this14.renderer.setAttribute(globalDragStyle, 'type', 'text/css');

              _this14.renderer.appendChild(globalDragStyle, _this14.renderer.createText("\n          body * {\n           -moz-user-select: none;\n           -ms-user-select: none;\n           -webkit-user-select: none;\n           user-select: none;\n          }\n        "));

              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                _this14.document.head.appendChild(globalDragStyle);
              });
              /** @type {?} */

              var startScrollPosition = _this14.getScrollPosition();
              /** @type {?} */


              var scrollContainerScroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(
              /**
              * @param {?} observer
              * @return {?}
              */
              function (observer) {
                /** @type {?} */
                var scrollContainer = _this14.scrollContainer ? _this14.scrollContainer.elementRef.nativeElement : 'window';
                return _this14.renderer.listen(scrollContainer, 'scroll',
                /**
                * @param {?} e
                * @return {?}
                */
                function (e) {
                  return observer.next(e);
                });
              }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(startScrollPosition), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(
              /**
              * @return {?}
              */
              function () {
                return _this14.getScrollPosition();
              }));
              /** @type {?} */

              var currentDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
              /** @type {?} */

              var cancelDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.ReplaySubject();

              _this14.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this14.dragPointerDown.next({
                  x: 0,
                  y: 0
                });
              });
              /** @type {?} */


              var dragComplete$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(_this14.pointerUp$, _this14.pointerDown$, cancelDrag$, _this14.destroy$).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
              /** @type {?} */

              var pointerMove = (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([_this14.pointerMove$, scrollContainerScroll$]).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref39) {
                var _ref40 = _slicedToArray(_ref39, 2),
                    pointerMoveEvent = _ref40[0],
                    scroll = _ref40[1];

                return {
                  currentDrag$: currentDrag$,
                  transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                  transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                  clientX: pointerMoveEvent.clientX,
                  clientY: pointerMoveEvent.clientY,
                  scrollLeft: scroll.left,
                  scrollTop: scroll.top,
                  target: pointerMoveEvent.event.target
                };
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(
              /**
              * @param {?} moveData
              * @return {?}
              */
              function (moveData) {
                if (_this14.dragSnapGrid.x) {
                  moveData.transformX = Math.round(moveData.transformX / _this14.dragSnapGrid.x) * _this14.dragSnapGrid.x;
                }

                if (_this14.dragSnapGrid.y) {
                  moveData.transformY = Math.round(moveData.transformY / _this14.dragSnapGrid.y) * _this14.dragSnapGrid.y;
                }

                return moveData;
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(
              /**
              * @param {?} moveData
              * @return {?}
              */
              function (moveData) {
                if (!_this14.dragAxis.x) {
                  moveData.transformX = 0;
                }

                if (!_this14.dragAxis.y) {
                  moveData.transformY = 0;
                }

                return moveData;
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(
              /**
              * @param {?} moveData
              * @return {?}
              */
              function (moveData) {
                /** @type {?} */
                var scrollX = moveData.scrollLeft - startScrollPosition.left;
                /** @type {?} */

                var scrollY = moveData.scrollTop - startScrollPosition.top;
                return Object.assign({}, moveData, {
                  x: moveData.transformX + scrollX,
                  y: moveData.transformY + scrollY
                });
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref41) {
                var x = _ref41.x,
                    y = _ref41.y,
                    transformX = _ref41.transformX,
                    transformY = _ref41.transformY;
                return !_this14.validateDrag || _this14.validateDrag({
                  x: x,
                  y: y,
                  transform: {
                    x: transformX,
                    y: transformY
                  }
                });
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(dragComplete$), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
              /** @type {?} */

              var dragStarted$ = pointerMove.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
              /** @type {?} */

              var dragEnded$ = pointerMove.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeLast)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
              dragStarted$.subscribe(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref42) {
                var clientX = _ref42.clientX,
                    clientY = _ref42.clientY,
                    x = _ref42.x,
                    y = _ref42.y;

                _this14.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this14.dragStart.next({
                    cancelDrag$: cancelDrag$
                  });
                });

                _this14.scroller = (0, _mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_0__["default"])([_this14.scrollContainer ? _this14.scrollContainer.elementRef.nativeElement : _this14.document.defaultView], Object.assign({}, _this14.autoScroll, {
                  /**
                  * @return {?}
                  */
                  autoScroll: function autoScroll() {
                    return true;
                  }
                }));
                addClass(_this14.renderer, _this14.element, _this14.dragActiveClass);

                if (_this14.ghostDragEnabled) {
                  /** @type {?} */
                  var rect = _this14.element.nativeElement.getBoundingClientRect();
                  /** @type {?} */


                  var clone =
                  /** @type {?} */
                  _this14.element.nativeElement.cloneNode(true);

                  if (!_this14.showOriginalElementWhileDragging) {
                    _this14.renderer.setStyle(_this14.element.nativeElement, 'visibility', 'hidden');
                  }

                  if (_this14.ghostElementAppendTo) {
                    _this14.ghostElementAppendTo.appendChild(clone);
                  } else {
                    /** @type {?} */
                    _this14.element.nativeElement.parentNode.insertBefore(clone, _this14.element.nativeElement.nextSibling);
                  }

                  _this14.ghostElement = clone;
                  _this14.document.body.style.cursor = _this14.dragCursor;

                  _this14.setElementStyles(clone, {
                    position: 'fixed',
                    top: "".concat(rect.top, "px"),
                    left: "".concat(rect.left, "px"),
                    width: "".concat(rect.width, "px"),
                    height: "".concat(rect.height, "px"),
                    cursor: _this14.dragCursor,
                    margin: '0',
                    willChange: 'transform',
                    pointerEvents: 'none'
                  });

                  if (_this14.ghostElementTemplate) {
                    /** @type {?} */
                    var viewRef = _this14.vcr.createEmbeddedView(_this14.ghostElementTemplate);

                    clone.innerHTML = '';
                    viewRef.rootNodes.filter(
                    /**
                    * @param {?} node
                    * @return {?}
                    */
                    function (node) {
                      return node instanceof Node;
                    }).forEach(
                    /**
                    * @param {?} node
                    * @return {?}
                    */
                    function (node) {
                      clone.appendChild(node);
                    });
                    dragEnded$.subscribe(
                    /**
                    * @return {?}
                    */
                    function () {
                      _this14.vcr.remove(_this14.vcr.indexOf(viewRef));
                    });
                  }

                  _this14.zone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    _this14.ghostElementCreated.emit({
                      clientX: clientX - x,
                      clientY: clientY - y,
                      element: clone
                    });
                  });

                  dragEnded$.subscribe(
                  /**
                  * @return {?}
                  */
                  function () {
                    /** @type {?} */
                    clone.parentElement.removeChild(clone);
                    _this14.ghostElement = null;

                    _this14.renderer.setStyle(_this14.element.nativeElement, 'visibility', '');
                  });
                }

                _this14.draggableHelper.currentDrag.next(currentDrag$);
              });
              dragEnded$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(
              /**
              * @param {?} dragEndData
              * @return {?}
              */
              function (dragEndData) {
                /** @type {?} */
                var dragEndData$ = cancelDrag$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.count)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(
                /**
                * @param {?} calledCount
                * @return {?}
                */
                function (calledCount) {
                  return Object.assign({}, dragEndData, {
                    dragCancelled: calledCount > 0
                  });
                }));
                cancelDrag$.complete();
                return dragEndData$;
              })).subscribe(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref43) {
                var x = _ref43.x,
                    y = _ref43.y,
                    dragCancelled = _ref43.dragCancelled;

                _this14.scroller.destroy();

                _this14.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this14.dragEnd.next({
                    x: x,
                    y: y,
                    dragCancelled: dragCancelled
                  });
                });

                removeClass(_this14.renderer, _this14.element, _this14.dragActiveClass);
                currentDrag$.complete();
              });
              (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(dragComplete$, dragEnded$).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe(
              /**
              * @return {?}
              */
              function () {
                requestAnimationFrame(
                /**
                * @return {?}
                */
                function () {
                  _this14.document.head.removeChild(globalDragStyle);
                });
              });
              return pointerMove;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
            (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(pointerDragged$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return [, value];
            })), pointerDragged$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.pairwise)())).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref44) {
              var _ref45 = _slicedToArray(_ref44, 2),
                  previous = _ref45[0],
                  next = _ref45[1];

              if (!previous) {
                return true;
              }

              return previous.x !== next.x || previous.y !== next.y;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref46) {
              var _ref47 = _slicedToArray(_ref46, 2),
                  previous = _ref47[0],
                  next = _ref47[1];

              return next;
            })).subscribe(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref48) {
              var x = _ref48.x,
                  y = _ref48.y,
                  currentDrag$ = _ref48.currentDrag$,
                  clientX = _ref48.clientX,
                  clientY = _ref48.clientY,
                  transformX = _ref48.transformX,
                  transformY = _ref48.transformY,
                  target = _ref48.target;

              _this14.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this14.dragging.next({
                  x: x,
                  y: y
                });
              });

              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                if (_this14.ghostElement) {
                  /** @type {?} */
                  var transform = "translate3d(".concat(transformX, "px, ").concat(transformY, "px, 0px)");

                  _this14.setElementStyles(_this14.ghostElement, {
                    transform: transform,
                    '-webkit-transform': transform,
                    '-ms-transform': transform,
                    '-moz-transform': transform,
                    '-o-transform': transform
                  });
                }
              });
              currentDrag$.next({
                clientX: clientX,
                clientY: clientY,
                dropData: _this14.dropData,
                target: target
              });
            });
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.dragAxis) {
              this.checkEventListeners();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribeEventListeners();
            this.pointerDown$.complete();
            this.pointerMove$.complete();
            this.pointerUp$.complete();
            this.destroy$.next();
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "checkEventListeners",
          value: function checkEventListeners() {
            var _this15 = this;

            /** @type {?} */
            var canDrag = this.canDrag();
            /** @type {?} */

            var hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;

            if (canDrag && !hasEventListeners) {
              this.zone.runOutsideAngular(
              /**
              * @return {?}
              */
              function () {
                _this15.eventListenerSubscriptions.mousedown = _this15.renderer.listen(_this15.element.nativeElement, 'mousedown',
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  _this15.onMouseDown(event);
                });
                _this15.eventListenerSubscriptions.mouseup = _this15.renderer.listen('document', 'mouseup',
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  _this15.onMouseUp(event);
                });
                _this15.eventListenerSubscriptions.touchstart = _this15.renderer.listen(_this15.element.nativeElement, 'touchstart',
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  _this15.onTouchStart(event);
                });
                _this15.eventListenerSubscriptions.touchend = _this15.renderer.listen('document', 'touchend',
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  _this15.onTouchEnd(event);
                });
                _this15.eventListenerSubscriptions.touchcancel = _this15.renderer.listen('document', 'touchcancel',
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  _this15.onTouchEnd(event);
                });
                _this15.eventListenerSubscriptions.mouseenter = _this15.renderer.listen(_this15.element.nativeElement, 'mouseenter',
                /**
                * @return {?}
                */
                function () {
                  _this15.onMouseEnter();
                });
                _this15.eventListenerSubscriptions.mouseleave = _this15.renderer.listen(_this15.element.nativeElement, 'mouseleave',
                /**
                * @return {?}
                */
                function () {
                  _this15.onMouseLeave();
                });
              });
            } else if (!canDrag && hasEventListeners) {
              this.unsubscribeEventListeners();
            }
          }
          /**
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onMouseDown",
          value: function onMouseDown(event) {
            var _this16 = this;

            if (event.button === 0) {
              if (!this.eventListenerSubscriptions.mousemove) {
                this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove',
                /**
                * @param {?} mouseMoveEvent
                * @return {?}
                */
                function (mouseMoveEvent) {
                  _this16.pointerMove$.next({
                    event: mouseMoveEvent,
                    clientX: mouseMoveEvent.clientX,
                    clientY: mouseMoveEvent.clientY
                  });
                });
              }

              this.pointerDown$.next({
                event: event,
                clientX: event.clientX,
                clientY: event.clientY
              });
            }
          }
          /**
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onMouseUp",
          value: function onMouseUp(event) {
            if (event.button === 0) {
              if (this.eventListenerSubscriptions.mousemove) {
                this.eventListenerSubscriptions.mousemove();
                delete this.eventListenerSubscriptions.mousemove;
              }

              this.pointerUp$.next({
                event: event,
                clientX: event.clientX,
                clientY: event.clientY
              });
            }
          }
          /**
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onTouchStart",
          value: function onTouchStart(event) {
            var _this17 = this;

            /** @type {?} */
            var startScrollPosition;
            /** @type {?} */

            var isDragActivated;
            /** @type {?} */

            var hasContainerScrollbar;

            if (this.scrollContainer && this.scrollContainer.activeLongPressDrag || this.touchStartLongPress) {
              this.timeLongPress.timerBegin = Date.now();
              isDragActivated = false;
              hasContainerScrollbar = this.hasScrollbar();
              startScrollPosition = this.getScrollPosition();
            }

            if (!this.eventListenerSubscriptions.touchmove) {
              /** @type {?} */
              var contextMenuListener = (0, rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this.document, 'contextmenu').subscribe(
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                e.preventDefault();
              });
              /** @type {?} */

              var touchMoveListener = (0, rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this.document, 'touchmove', {
                passive: false
              }).subscribe(
              /**
              * @param {?} touchMoveEvent
              * @return {?}
              */
              function (touchMoveEvent) {
                if ((_this17.scrollContainer && _this17.scrollContainer.activeLongPressDrag || _this17.touchStartLongPress) && !isDragActivated && hasContainerScrollbar) {
                  isDragActivated = _this17.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
                }

                if ((!_this17.scrollContainer || !_this17.scrollContainer.activeLongPressDrag) && !_this17.touchStartLongPress || !hasContainerScrollbar || isDragActivated) {
                  touchMoveEvent.preventDefault();

                  _this17.pointerMove$.next({
                    event: touchMoveEvent,
                    clientX: touchMoveEvent.targetTouches[0].clientX,
                    clientY: touchMoveEvent.targetTouches[0].clientY
                  });
                }
              });

              this.eventListenerSubscriptions.touchmove =
              /**
              * @return {?}
              */
              function () {
                contextMenuListener.unsubscribe();
                touchMoveListener.unsubscribe();
              };
            }

            this.pointerDown$.next({
              event: event,
              clientX: event.touches[0].clientX,
              clientY: event.touches[0].clientY
            });
          }
          /**
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onTouchEnd",
          value: function onTouchEnd(event) {
            if (this.eventListenerSubscriptions.touchmove) {
              this.eventListenerSubscriptions.touchmove();
              delete this.eventListenerSubscriptions.touchmove;

              if (this.scrollContainer && this.scrollContainer.activeLongPressDrag || this.touchStartLongPress) {
                this.enableScroll();
              }
            }

            this.pointerUp$.next({
              event: event,
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "onMouseEnter",
          value: function onMouseEnter() {
            this.setCursor(this.dragCursor);
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "onMouseLeave",
          value: function onMouseLeave() {
            this.setCursor('');
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "canDrag",
          value: function canDrag() {
            return this.dragAxis.x || this.dragAxis.y;
          }
          /**
           * @private
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "setCursor",
          value: function setCursor(value) {
            if (!this.eventListenerSubscriptions.mousemove) {
              this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "unsubscribeEventListeners",
          value: function unsubscribeEventListeners() {
            var _this18 = this;

            Object.keys(this.eventListenerSubscriptions).forEach(
            /**
            * @param {?} type
            * @return {?}
            */
            function (type) {
              /** @type {?} */
              _this18.eventListenerSubscriptions[type]();

              delete
              /** @type {?} */
              _this18.eventListenerSubscriptions[type];
            });
          }
          /**
           * @private
           * @param {?} element
           * @param {?} styles
           * @return {?}
           */

        }, {
          key: "setElementStyles",
          value: function setElementStyles(element, styles) {
            var _this19 = this;

            Object.keys(styles).forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              _this19.renderer.setStyle(element, key, styles[key]);
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getScrollElement",
          value: function getScrollElement() {
            if (this.scrollContainer) {
              return this.scrollContainer.elementRef.nativeElement;
            } else {
              return this.document.body;
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getScrollPosition",
          value: function getScrollPosition() {
            if (this.scrollContainer) {
              return {
                top: this.scrollContainer.elementRef.nativeElement.scrollTop,
                left: this.scrollContainer.elementRef.nativeElement.scrollLeft
              };
            } else {
              return {
                top: window.pageYOffset || this.document.documentElement.scrollTop,
                left: window.pageXOffset || this.document.documentElement.scrollLeft
              };
            }
          }
          /**
           * @private
           * @param {?} event
           * @param {?} touchMoveEvent
           * @param {?} startScrollPosition
           * @return {?}
           */

        }, {
          key: "shouldBeginDrag",
          value: function shouldBeginDrag(event, touchMoveEvent, startScrollPosition) {
            /** @type {?} */
            var moveScrollPosition = this.getScrollPosition();
            /** @type {?} */

            var deltaScroll = {
              top: Math.abs(moveScrollPosition.top - startScrollPosition.top),
              left: Math.abs(moveScrollPosition.left - startScrollPosition.left)
            };
            /** @type {?} */

            var deltaX = Math.abs(touchMoveEvent.targetTouches[0].clientX - event.touches[0].clientX) - deltaScroll.left;
            /** @type {?} */

            var deltaY = Math.abs(touchMoveEvent.targetTouches[0].clientY - event.touches[0].clientY) - deltaScroll.top;
            /** @type {?} */

            var deltaTotal = deltaX + deltaY;
            /** @type {?} */

            var longPressConfig = this.touchStartLongPress ? this.touchStartLongPress :
            /* istanbul ignore next */
            {
              delta: this.scrollContainer.longPressConfig.delta,
              delay: this.scrollContainer.longPressConfig.duration
            };

            if (deltaTotal > longPressConfig.delta || deltaScroll.top > 0 || deltaScroll.left > 0) {
              this.timeLongPress.timerBegin = Date.now();
            }

            this.timeLongPress.timerEnd = Date.now();
            /** @type {?} */

            var duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;

            if (duration >= longPressConfig.delay) {
              this.disableScroll();
              return true;
            }

            return false;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "enableScroll",
          value: function enableScroll() {
            if (this.scrollContainer) {
              this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', '');
            }

            this.renderer.setStyle(this.document.body, 'overflow', '');
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "disableScroll",
          value: function disableScroll() {
            /* istanbul ignore next */
            if (this.scrollContainer) {
              this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', 'hidden');
            }

            this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "hasScrollbar",
          value: function hasScrollbar() {
            /** @type {?} */
            var scrollContainer = this.getScrollElement();
            /** @type {?} */

            var containerHasHorizontalScroll = scrollContainer.scrollWidth > scrollContainer.clientWidth;
            /** @type {?} */

            var containerHasVerticalScroll = scrollContainer.scrollHeight > scrollContainer.clientHeight;
            return containerHasHorizontalScroll || containerHasVerticalScroll;
          }
        }]);

        return DraggableDirective;
      }();

      DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
        return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DraggableHelper), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DraggableScrollContainerDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_18__.DOCUMENT));
      };

      DraggableDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: DraggableDirective,
        selectors: [["", "mwlDraggable", ""]],
        inputs: {
          dragAxis: "dragAxis",
          dragSnapGrid: "dragSnapGrid",
          ghostDragEnabled: "ghostDragEnabled",
          showOriginalElementWhileDragging: "showOriginalElementWhileDragging",
          dragCursor: "dragCursor",
          autoScroll: "autoScroll",
          dropData: "dropData",
          validateDrag: "validateDrag",
          dragActiveClass: "dragActiveClass",
          ghostElementAppendTo: "ghostElementAppendTo",
          ghostElementTemplate: "ghostElementTemplate",
          touchStartLongPress: "touchStartLongPress"
        },
        outputs: {
          dragPointerDown: "dragPointerDown",
          dragStart: "dragStart",
          ghostElementCreated: "ghostElementCreated",
          dragging: "dragging",
          dragEnd: "dragEnd"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      DraggableDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
        }, {
          type: DraggableHelper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef
        }, {
          type: DraggableScrollContainerDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.DOCUMENT]
          }]
        }];
      };

      DraggableDirective.propDecorators = {
        dropData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        dragAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        dragSnapGrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        ghostDragEnabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        showOriginalElementWhileDragging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        validateDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        dragCursor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        dragActiveClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        ghostElementAppendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        ghostElementTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        touchStartLongPress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        autoScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        dragPointerDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        ghostElementCreated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        dragging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DraggableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: '[mwlDraggable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
          }, {
            type: DraggableHelper
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef
          }, {
            type: DraggableScrollContainerDirective,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.DOCUMENT]
            }]
          }];
        }, {
          dragAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dragSnapGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          ghostDragEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          showOriginalElementWhileDragging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dragCursor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          autoScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dragPointerDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          ghostElementCreated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          dragging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          dropData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          validateDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dragActiveClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          ghostElementAppendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          ghostElementTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          touchStartLongPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} clientX
       * @param {?} clientY
       * @param {?} rect
       * @return {?}
       */


      function isCoordinateWithinRectangle(clientX, clientY, rect) {
        return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
      }

      var DroppableDirective = /*#__PURE__*/function () {
        /**
         * @param {?} element
         * @param {?} draggableHelper
         * @param {?} zone
         * @param {?} renderer
         * @param {?} scrollContainer
         */
        function DroppableDirective(element, draggableHelper, zone, renderer, scrollContainer) {
          _classCallCheck(this, DroppableDirective);

          this.element = element;
          this.draggableHelper = draggableHelper;
          this.zone = zone;
          this.renderer = renderer;
          this.scrollContainer = scrollContainer;
          /**
           * Called when a draggable element starts overlapping the element
           */

          this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called when a draggable element stops overlapping the element
           */

          this.dragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called when a draggable element is moved over the element
           */

          this.dragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called when a draggable element is dropped on this element
           */

          this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(); // tslint:disable-line no-output-named-after-standard-event
        }
        /**
         * @return {?}
         */


        _createClass(DroppableDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(
            /**
            * @param {?} drag$
            * @return {?}
            */
            function (drag$) {
              addClass(_this20.renderer, _this20.element, _this20.dragActiveClass);
              /** @type {?} */

              var droppableElement = {
                updateCache: true
              };
              /** @type {?} */

              var deregisterScrollListener = _this20.renderer.listen(_this20.scrollContainer ? _this20.scrollContainer.elementRef.nativeElement : 'window', 'scroll',
              /**
              * @return {?}
              */
              function () {
                droppableElement.updateCache = true;
              });
              /** @type {?} */


              var currentDragDropData;
              /** @type {?} */

              var overlaps$ = drag$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref49) {
                var clientX = _ref49.clientX,
                    clientY = _ref49.clientY,
                    dropData = _ref49.dropData,
                    target = _ref49.target;
                currentDragDropData = dropData;

                if (droppableElement.updateCache) {
                  droppableElement.rect = _this20.element.nativeElement.getBoundingClientRect();

                  if (_this20.scrollContainer) {
                    droppableElement.scrollContainerRect = _this20.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
                  }

                  droppableElement.updateCache = false;
                }
                /** @type {?} */


                var isWithinElement = isCoordinateWithinRectangle(clientX, clientY,
                /** @type {?} */
                droppableElement.rect);
                /** @type {?} */

                var isDropAllowed = !_this20.validateDrop || _this20.validateDrop({
                  clientX: clientX,
                  clientY: clientY,
                  target: target
                });

                if (droppableElement.scrollContainerRect) {
                  return isWithinElement && isDropAllowed && isCoordinateWithinRectangle(clientX, clientY,
                  /** @type {?} */
                  droppableElement.scrollContainerRect);
                } else {
                  return isWithinElement && isDropAllowed;
                }
              }));
              /** @type {?} */

              var overlapsChanged$ = overlaps$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)());
              /** @type {?} */

              var dragOverActive;
              overlapsChanged$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(
              /**
              * @param {?} overlapsNow
              * @return {?}
              */
              function (overlapsNow) {
                return overlapsNow;
              })).subscribe(
              /**
              * @return {?}
              */
              function () {
                dragOverActive = true;
                addClass(_this20.renderer, _this20.element, _this20.dragOverClass);

                _this20.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this20.dragEnter.next({
                    dropData: currentDragDropData
                  });
                });
              });
              overlaps$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(
              /**
              * @param {?} overlapsNow
              * @return {?}
              */
              function (overlapsNow) {
                return overlapsNow;
              })).subscribe(
              /**
              * @return {?}
              */
              function () {
                _this20.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this20.dragOver.next({
                    dropData: currentDragDropData
                  });
                });
              });
              overlapsChanged$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.pairwise)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref50) {
                var _ref51 = _slicedToArray(_ref50, 2),
                    didOverlap = _ref51[0],
                    overlapsNow = _ref51[1];

                return didOverlap && !overlapsNow;
              })).subscribe(
              /**
              * @return {?}
              */
              function () {
                dragOverActive = false;
                removeClass(_this20.renderer, _this20.element, _this20.dragOverClass);

                _this20.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this20.dragLeave.next({
                    dropData: currentDragDropData
                  });
                });
              });
              drag$.subscribe({
                complete:
                /**
                * @return {?}
                */
                function complete() {
                  deregisterScrollListener();
                  removeClass(_this20.renderer, _this20.element, _this20.dragActiveClass);

                  if (dragOverActive) {
                    removeClass(_this20.renderer, _this20.element, _this20.dragOverClass);

                    _this20.zone.run(
                    /**
                    * @return {?}
                    */
                    function () {
                      _this20.drop.next({
                        dropData: currentDragDropData
                      });
                    });
                  }
                }
              });
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.currentDragSubscription) {
              this.currentDragSubscription.unsubscribe();
            }
          }
        }]);

        return DroppableDirective;
      }();

      DroppableDirective.ɵfac = function DroppableDirective_Factory(t) {
        return new (t || DroppableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DraggableHelper), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DraggableScrollContainerDirective, 8));
      };

      DroppableDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: DroppableDirective,
        selectors: [["", "mwlDroppable", ""]],
        inputs: {
          dragOverClass: "dragOverClass",
          dragActiveClass: "dragActiveClass",
          validateDrop: "validateDrop"
        },
        outputs: {
          dragEnter: "dragEnter",
          dragLeave: "dragLeave",
          dragOver: "dragOver",
          drop: "drop"
        }
      });
      /** @nocollapse */

      DroppableDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
        }, {
          type: DraggableHelper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
        }, {
          type: DraggableScrollContainerDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
          }]
        }];
      };

      DroppableDirective.propDecorators = {
        dragOverClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        dragActiveClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        validateDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        dragEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        dragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        dragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        drop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DroppableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: '[mwlDroppable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }, {
            type: DraggableHelper
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
          }, {
            type: DraggableScrollContainerDirective,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }]
          }];
        }, {
          dragEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          dragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          dragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          drop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          dragOverClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dragActiveClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          validateDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _DragAndDropModule = function _DragAndDropModule() {
        _classCallCheck(this, _DragAndDropModule);
      };

      _DragAndDropModule.ɵfac = function DragAndDropModule_Factory(t) {
        return new (t || _DragAndDropModule)();
      };

      _DragAndDropModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _DragAndDropModule
      });
      _DragAndDropModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_DragAndDropModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            declarations: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective],
            exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_DragAndDropModule, {
          declarations: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective],
          exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-draggable-droppable.js.map

      /***/

    },

    /***/
    72146:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/angular-resizable-element/__ivy_ngcc__/fesm2015/angular-resizable-element.js ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResizableDirective": function ResizableDirective() {
          return (
            /* binding */
            _ResizableDirective
          );
        },

        /* harmony export */
        "ResizeHandleDirective": function ResizeHandleDirective() {
          return (
            /* binding */
            _ResizeHandleDirective
          );
        },

        /* harmony export */
        "ResizableModule": function ResizableModule() {
          return (
            /* binding */
            _ResizableModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      12057);
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
      66682);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      59193);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs */
      69165);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs */
      22759);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      68307);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      78345);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      39761);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      45697);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      19773);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      15257);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      59328);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @hidden
       * @type {?}
       */


      var IS_TOUCH_DEVICE = function () {
        // In case we're in Node.js environment.
        if (typeof window === 'undefined') {
          return false;
        } else {
          return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        }
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} value1
       * @param {?} value2
       * @param {?=} precision
       * @return {?}
       */


      function isNumberCloseTo(value1, value2) {
        var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

        /** @type {?} */
        var diff = Math.abs(value1 - value2);
        return diff < precision;
      }
      /**
       * @param {?} startingRect
       * @param {?} edges
       * @param {?} clientX
       * @param {?} clientY
       * @return {?}
       */


      function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
        /** @type {?} */
        var newBoundingRect = {
          top: startingRect.top,
          bottom: startingRect.bottom,
          left: startingRect.left,
          right: startingRect.right
        };

        if (edges.top) {
          newBoundingRect.top += clientY;
        }

        if (edges.bottom) {
          newBoundingRect.bottom += clientY;
        }

        if (edges.left) {
          newBoundingRect.left += clientX;
        }

        if (edges.right) {
          newBoundingRect.right += clientX;
        }

        newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
        newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
        return newBoundingRect;
      }
      /**
       * @param {?} element
       * @param {?} ghostElementPositioning
       * @return {?}
       */


      function getElementRect(element, ghostElementPositioning) {
        /** @type {?} */
        var translateX = 0;
        /** @type {?} */

        var translateY = 0;
        /** @type {?} */

        var style = element.nativeElement.style;
        /** @type {?} */

        var transformProperties = ['transform', '-ms-transform', '-moz-transform', '-o-transform'];
        /** @type {?} */

        var transform = transformProperties.map(function (property) {
          return style[property];
        }).find(function (value) {
          return !!value;
        });

        if (transform && transform.includes('translate')) {
          translateX = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$1');
          translateY = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$2');
        }

        if (ghostElementPositioning === 'absolute') {
          return {
            height: element.nativeElement.offsetHeight,
            width: element.nativeElement.offsetWidth,
            top: element.nativeElement.offsetTop - translateY,
            bottom: element.nativeElement.offsetHeight + element.nativeElement.offsetTop - translateY,
            left: element.nativeElement.offsetLeft - translateX,
            right: element.nativeElement.offsetWidth + element.nativeElement.offsetLeft - translateX
          };
        } else {
          /** @type {?} */
          var boundingRect = element.nativeElement.getBoundingClientRect();
          return {
            height: boundingRect.height,
            width: boundingRect.width,
            top: boundingRect.top - translateY,
            bottom: boundingRect.bottom - translateY,
            left: boundingRect.left - translateX,
            right: boundingRect.right - translateX,
            scrollTop: element.nativeElement.scrollTop,
            scrollLeft: element.nativeElement.scrollLeft
          };
        }
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      function isWithinBoundingY(_ref52) {
        var clientY = _ref52.clientY,
            rect = _ref52.rect;
        return clientY >= rect.top && clientY <= rect.bottom;
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      function isWithinBoundingX(_ref53) {
        var clientX = _ref53.clientX,
            rect = _ref53.rect;
        return clientX >= rect.left && clientX <= rect.right;
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      function getResizeEdges(_ref54) {
        var clientX = _ref54.clientX,
            clientY = _ref54.clientY,
            elm = _ref54.elm,
            allowedEdges = _ref54.allowedEdges,
            cursorPrecision = _ref54.cursorPrecision;

        /** @type {?} */
        var elmPosition = elm.nativeElement.getBoundingClientRect();
        /** @type {?} */

        var edges = {};

        if (allowedEdges.left && isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) && isWithinBoundingY({
          clientY: clientY,
          rect: elmPosition
        })) {
          edges.left = true;
        }

        if (allowedEdges.right && isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) && isWithinBoundingY({
          clientY: clientY,
          rect: elmPosition
        })) {
          edges.right = true;
        }

        if (allowedEdges.top && isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) && isWithinBoundingX({
          clientX: clientX,
          rect: elmPosition
        })) {
          edges.top = true;
        }

        if (allowedEdges.bottom && isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) && isWithinBoundingX({
          clientX: clientX,
          rect: elmPosition
        })) {
          edges.bottom = true;
        }

        return edges;
      }
      /** @type {?} */


      var DEFAULT_RESIZE_CURSORS = Object.freeze({
        topLeft: 'nw-resize',
        topRight: 'ne-resize',
        bottomLeft: 'sw-resize',
        bottomRight: 'se-resize',
        leftOrRight: 'col-resize',
        topOrBottom: 'row-resize'
      });
      /**
       * @param {?} edges
       * @param {?} cursors
       * @return {?}
       */

      function getResizeCursor(edges, cursors) {
        if (edges.left && edges.top) {
          return cursors.topLeft;
        } else if (edges.right && edges.top) {
          return cursors.topRight;
        } else if (edges.left && edges.bottom) {
          return cursors.bottomLeft;
        } else if (edges.right && edges.bottom) {
          return cursors.bottomRight;
        } else if (edges.left || edges.right) {
          return cursors.leftOrRight;
        } else if (edges.top || edges.bottom) {
          return cursors.topOrBottom;
        } else {
          return '';
        }
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      function getEdgesDiff(_ref55) {
        var edges = _ref55.edges,
            initialRectangle = _ref55.initialRectangle,
            newRectangle = _ref55.newRectangle;

        /** @type {?} */
        var edgesDiff = {};
        Object.keys(edges).forEach(function (edge) {
          edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
        });
        return edgesDiff;
      }
      /** @type {?} */


      var RESIZE_ACTIVE_CLASS = 'resize-active';
      /** @type {?} */

      var RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
      /** @type {?} */

      var RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
      /** @type {?} */

      var RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
      /** @type {?} */

      var RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
      /** @type {?} */

      var RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
      /** @type {?} */

      var MOUSE_MOVE_THROTTLE_MS = 50;
      /**
       * Place this on an element to make it resizable. For example:
       *
       * ```html
       * <div
       *   mwlResizable
       *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
       *   [enableGhostResize]="true">
       * </div>
       * ```
       * Or in case they are sibling elements:
       * ```html
       * <div mwlResizable #resizableElement="mwlResizable"></div>
       * <div mwlResizeHandle [resizableContainer]="resizableElement" [resizeEdges]="{bottom: true, right: true}"></div>
       * ```
       */

      var _ResizableDirective = /*#__PURE__*/function () {
        /**
         * @hidden
         * @param {?} platformId
         * @param {?} renderer
         * @param {?} elm
         * @param {?} zone
         */
        function _ResizableDirective(platformId, renderer, elm, zone) {
          _classCallCheck(this, _ResizableDirective);

          this.platformId = platformId;
          this.renderer = renderer;
          this.elm = elm;
          this.zone = zone;
          /**
           * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
           * @deprecated use a resize handle instead that positions itself to the side of the element you would like to resize
           */

          this.resizeEdges = {};
          /**
           * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
           */

          this.enableGhostResize = false;
          /**
           * A snap grid that resize events will be locked to.
           *
           * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
           */

          this.resizeSnapGrid = {};
          /**
           * The mouse cursors that will be set on the resize edges
           */

          this.resizeCursors = DEFAULT_RESIZE_CURSORS;
          /**
           * Mouse over thickness to active cursor.
           * @deprecated invalid when you migrate to use resize handles instead of setting resizeEdges on the element
           */

          this.resizeCursorPrecision = 3;
          /**
           * Define the positioning of the ghost element (can be fixed or absolute)
           */

          this.ghostElementPositioning = 'fixed';
          /**
           * Allow elements to be resized to negative dimensions
           */

          this.allowNegativeResizes = false;
          /**
           * The mouse move throttle in milliseconds, default: 50 ms
           */

          this.mouseMoveThrottleMS = MOUSE_MOVE_THROTTLE_MS;
          /**
           * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
           */

          this.resizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
           */

          this.resizing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
           */

          this.resizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * @hidden
           */

          this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /**
           * @hidden
           */

          this.mousedown = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /**
           * @hidden
           */

          this.mousemove = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.resizeEdges$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
        }
        /**
         * @hidden
         * @return {?}
         */


        _createClass(_ResizableDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            /** @type {?} */
            var mousedown$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.pointerEventListeners.pointerDown, this.mousedown);
            /** @type {?} */

            var mousemove$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.pointerEventListeners.pointerMove, this.mousemove).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (_ref56) {
              var event = _ref56.event;

              if (currentResize) {
                try {
                  event.preventDefault();
                } catch (e) {// just adding try-catch not to see errors in console if there is a passive listener for same event somewhere
                  // browser does nothing except of writing errors to console
                }
              }
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
            /** @type {?} */

            var mouseup$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.pointerEventListeners.pointerUp, this.mouseup);
            /** @type {?} */

            var currentResize;
            /** @type {?} */

            var removeGhostElement = function removeGhostElement() {
              if (currentResize && currentResize.clonedNode) {
                _this21.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);

                _this21.renderer.setStyle(_this21.elm.nativeElement, 'visibility', 'inherit');
              }
            };
            /** @type {?} */


            var getResizeCursors = function getResizeCursors() {
              return Object.assign({}, DEFAULT_RESIZE_CURSORS, _this21.resizeCursors);
            };

            this.resizeEdges$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(this.resizeEdges), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function () {
              return _this21.resizeEdges && Object.keys(_this21.resizeEdges).some(function (edge) {
                return !!_this21.resizeEdges[edge];
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (legacyResizeEdgesEnabled) {
              return legacyResizeEdgesEnabled ? mousemove$ : rxjs__WEBPACK_IMPORTED_MODULE_8__.EMPTY;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.auditTime)(this.mouseMoveThrottleMS), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(function (_ref57) {
              var clientX = _ref57.clientX,
                  clientY = _ref57.clientY;

              /** @type {?} */
              var resizeEdges = getResizeEdges({
                clientX: clientX,
                clientY: clientY,
                elm: _this21.elm,
                allowedEdges: _this21.resizeEdges,
                cursorPrecision: _this21.resizeCursorPrecision
              });
              /** @type {?} */

              var resizeCursors = getResizeCursors();

              if (!currentResize) {
                /** @type {?} */
                var cursor = getResizeCursor(resizeEdges, resizeCursors);

                _this21.renderer.setStyle(_this21.elm.nativeElement, 'cursor', cursor);
              }

              _this21.setElementClass(_this21.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);

              _this21.setElementClass(_this21.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);

              _this21.setElementClass(_this21.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);

              _this21.setElementClass(_this21.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
            });
            /** @type {?} */

            var mousedrag = mousedown$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(function (startCoords) {
              /**
               * @param {?} moveCoords
               * @return {?}
               */
              function getDiff(moveCoords) {
                return {
                  clientX: moveCoords.clientX - startCoords.clientX,
                  clientY: moveCoords.clientY - startCoords.clientY
                };
              }
              /** @type {?} */


              var getSnapGrid = function getSnapGrid() {
                /** @type {?} */
                var snapGrid = {
                  x: 1,
                  y: 1
                };

                if (currentResize) {
                  if (_this21.resizeSnapGrid.left && currentResize.edges.left) {
                    snapGrid.x = +_this21.resizeSnapGrid.left;
                  } else if (_this21.resizeSnapGrid.right && currentResize.edges.right) {
                    snapGrid.x = +_this21.resizeSnapGrid.right;
                  }

                  if (_this21.resizeSnapGrid.top && currentResize.edges.top) {
                    snapGrid.y = +_this21.resizeSnapGrid.top;
                  } else if (_this21.resizeSnapGrid.bottom && currentResize.edges.bottom) {
                    snapGrid.y = +_this21.resizeSnapGrid.bottom;
                  }
                }

                return snapGrid;
              };
              /**
               * @param {?} coords
               * @param {?} snapGrid
               * @return {?}
               */


              function getGrid(coords, snapGrid) {
                return {
                  x: Math.ceil(coords.clientX / snapGrid.x),
                  y: Math.ceil(coords.clientY / snapGrid.y)
                };
              }

              return (
                /** @type {?} */
                (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(mousemove$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (coords) {
                  return [, coords];
                })), mousemove$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.pairwise)())).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (_ref58) {
                  var _ref59 = _slicedToArray(_ref58, 2),
                      previousCoords = _ref59[0],
                      newCoords = _ref59[1];

                  return [previousCoords ? getDiff(previousCoords) : previousCoords, getDiff(newCoords)];
                })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(function (_ref60) {
                  var _ref61 = _slicedToArray(_ref60, 2),
                      previousCoords = _ref61[0],
                      newCoords = _ref61[1];

                  if (!previousCoords) {
                    return true;
                  }
                  /** @type {?} */


                  var snapGrid = getSnapGrid();
                  /** @type {?} */

                  var previousGrid = getGrid(previousCoords, snapGrid);
                  /** @type {?} */

                  var newGrid = getGrid(newCoords, snapGrid);
                  return previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y;
                })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (_ref62) {
                  var _ref63 = _slicedToArray(_ref62, 2),
                      newCoords = _ref63[1];

                  /** @type {?} */
                  var snapGrid = getSnapGrid();
                  return {
                    clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                    clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                  };
                })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)((0, rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(mouseup$, mousedown$)))
              );
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(function () {
              return !!currentResize;
            }));
            mousedrag.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (_ref64) {
              var clientX = _ref64.clientX,
                  clientY = _ref64.clientY;
              return getNewBoundingRectangle(
              /** @type {?} */
              currentResize.startingRect,
              /** @type {?} */
              currentResize.edges, clientX, clientY);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(function (newBoundingRect) {
              return _this21.allowNegativeResizes || !!(newBoundingRect.height && newBoundingRect.width && newBoundingRect.height > 0 && newBoundingRect.width > 0);
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(function (newBoundingRect) {
              return _this21.validateResize ? _this21.validateResize({
                rectangle: newBoundingRect,
                edges: getEdgesDiff({
                  edges:
                  /** @type {?} */
                  currentResize.edges,
                  initialRectangle:
                  /** @type {?} */
                  currentResize.startingRect,
                  newRectangle: newBoundingRect
                })
              }) : true;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(function (newBoundingRect) {
              if (currentResize && currentResize.clonedNode) {
                _this21.renderer.setStyle(currentResize.clonedNode, 'height', "".concat(newBoundingRect.height, "px"));

                _this21.renderer.setStyle(currentResize.clonedNode, 'width', "".concat(newBoundingRect.width, "px"));

                _this21.renderer.setStyle(currentResize.clonedNode, 'top', "".concat(newBoundingRect.top, "px"));

                _this21.renderer.setStyle(currentResize.clonedNode, 'left', "".concat(newBoundingRect.left, "px"));
              }

              if (_this21.resizing.observers.length > 0) {
                _this21.zone.run(function () {
                  _this21.resizing.emit({
                    edges: getEdgesDiff({
                      edges:
                      /** @type {?} */
                      currentResize.edges,
                      initialRectangle:
                      /** @type {?} */
                      currentResize.startingRect,
                      newRectangle: newBoundingRect
                    }),
                    rectangle: newBoundingRect
                  });
                });
              }

              /** @type {?} */
              currentResize.currentRect = newBoundingRect;
            });
            mousedown$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (_ref65) {
              var clientX = _ref65.clientX,
                  clientY = _ref65.clientY,
                  edges = _ref65.edges;
              return edges || getResizeEdges({
                clientX: clientX,
                clientY: clientY,
                elm: _this21.elm,
                allowedEdges: _this21.resizeEdges,
                cursorPrecision: _this21.resizeCursorPrecision
              });
            })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(function (edges) {
              return Object.keys(edges).length > 0;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(function (edges) {
              if (currentResize) {
                removeGhostElement();
              }
              /** @type {?} */


              var startingRect = getElementRect(_this21.elm, _this21.ghostElementPositioning);
              currentResize = {
                edges: edges,
                startingRect: startingRect,
                currentRect: startingRect
              };
              /** @type {?} */

              var resizeCursors = getResizeCursors();
              /** @type {?} */

              var cursor = getResizeCursor(currentResize.edges, resizeCursors);

              _this21.renderer.setStyle(document.body, 'cursor', cursor);

              _this21.setElementClass(_this21.elm, RESIZE_ACTIVE_CLASS, true);

              if (_this21.enableGhostResize) {
                currentResize.clonedNode = _this21.elm.nativeElement.cloneNode(true);

                _this21.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);

                _this21.renderer.setStyle(_this21.elm.nativeElement, 'visibility', 'hidden');

                _this21.renderer.setStyle(currentResize.clonedNode, 'position', _this21.ghostElementPositioning);

                _this21.renderer.setStyle(currentResize.clonedNode, 'left', "".concat(currentResize.startingRect.left, "px"));

                _this21.renderer.setStyle(currentResize.clonedNode, 'top', "".concat(currentResize.startingRect.top, "px"));

                _this21.renderer.setStyle(currentResize.clonedNode, 'height', "".concat(currentResize.startingRect.height, "px"));

                _this21.renderer.setStyle(currentResize.clonedNode, 'width', "".concat(currentResize.startingRect.width, "px"));

                _this21.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));

                _this21.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);

                /** @type {?} */
                currentResize.clonedNode.scrollTop =
                /** @type {?} */
                currentResize.startingRect.scrollTop;

                /** @type {?} */
                currentResize.clonedNode.scrollLeft =
                /** @type {?} */
                currentResize.startingRect.scrollLeft;
              }

              if (_this21.resizeStart.observers.length > 0) {
                _this21.zone.run(function () {
                  _this21.resizeStart.emit({
                    edges: getEdgesDiff({
                      edges: edges,
                      initialRectangle: startingRect,
                      newRectangle: startingRect
                    }),
                    rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
                  });
                });
              }
            });
            mouseup$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(function () {
              if (currentResize) {
                _this21.renderer.removeClass(_this21.elm.nativeElement, RESIZE_ACTIVE_CLASS);

                _this21.renderer.setStyle(document.body, 'cursor', '');

                _this21.renderer.setStyle(_this21.elm.nativeElement, 'cursor', '');

                if (_this21.resizeEnd.observers.length > 0) {
                  _this21.zone.run(function () {
                    _this21.resizeEnd.emit({
                      edges: getEdgesDiff({
                        edges:
                        /** @type {?} */
                        currentResize.edges,
                        initialRectangle:
                        /** @type {?} */
                        currentResize.startingRect,
                        newRectangle:
                        /** @type {?} */
                        currentResize.currentRect
                      }),
                      rectangle:
                      /** @type {?} */
                      currentResize.currentRect
                    });
                  });
                }

                removeGhostElement();
                currentResize = null;
              }
            });
          }
          /**
           * @hidden
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.resizeEdges) {
              this.resizeEdges$.next(this.resizeEdges);
            }
          }
          /**
           * @hidden
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // browser check for angular universal, because it doesn't know what document is
            if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_15__.isPlatformBrowser)(this.platformId)) {
              this.renderer.setStyle(document.body, 'cursor', '');
            }

            this.mousedown.complete();
            this.mouseup.complete();
            this.mousemove.complete();
            this.resizeEdges$.complete();
            this.destroy$.next();
          }
          /**
           * @private
           * @param {?} elm
           * @param {?} name
           * @param {?} add
           * @return {?}
           */

        }, {
          key: "setElementClass",
          value: function setElementClass(elm, name, add) {
            if (add) {
              this.renderer.addClass(elm.nativeElement, name);
            } else {
              this.renderer.removeClass(elm.nativeElement, name);
            }
          }
        }]);

        return _ResizableDirective;
      }();

      _ResizableDirective.ɵfac = function ResizableDirective_Factory(t) {
        return new (t || _ResizableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };

      _ResizableDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ResizableDirective,
        selectors: [["", "mwlResizable", ""]],
        inputs: {
          resizeEdges: "resizeEdges",
          enableGhostResize: "enableGhostResize",
          resizeSnapGrid: "resizeSnapGrid",
          resizeCursors: "resizeCursors",
          resizeCursorPrecision: "resizeCursorPrecision",
          ghostElementPositioning: "ghostElementPositioning",
          allowNegativeResizes: "allowNegativeResizes",
          mouseMoveThrottleMS: "mouseMoveThrottleMS",
          validateResize: "validateResize"
        },
        outputs: {
          resizeStart: "resizeStart",
          resizing: "resizing",
          resizeEnd: "resizeEnd"
        },
        exportAs: ["mwlResizable"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      _ResizableDirective.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }];
      };

      _ResizableDirective.propDecorators = {
        validateResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        resizeEdges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        enableGhostResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        resizeSnapGrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        resizeCursors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        resizeCursorPrecision: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        ghostElementPositioning: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        allowNegativeResizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        mouseMoveThrottleMS: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        resizeStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        resizing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        resizeEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ResizableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[mwlResizable]',
            exportAs: 'mwlResizable'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }];
        }, {
          resizeEdges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          enableGhostResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          resizeSnapGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          resizeCursors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          resizeCursorPrecision: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          ghostElementPositioning: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          allowNegativeResizes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          mouseMoveThrottleMS: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          resizeStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          resizing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          resizeEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          validateResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var PointerEventListeners = /*#__PURE__*/function () {
        /**
         * @param {?} renderer
         * @param {?} zone
         */
        function PointerEventListeners(renderer, zone) {
          _classCallCheck(this, PointerEventListeners);

          this.pointerDown = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Observable(function (observer) {
            /** @type {?} */
            var unsubscribeMouseDown;
            /** @type {?} */

            var unsubscribeTouchStart;
            zone.runOutsideAngular(function () {
              unsubscribeMouseDown = renderer.listen('document', 'mousedown', function (event) {
                observer.next({
                  clientX: event.clientX,
                  clientY: event.clientY,
                  event: event
                });
              });

              if (IS_TOUCH_DEVICE) {
                unsubscribeTouchStart = renderer.listen('document', 'touchstart', function (event) {
                  observer.next({
                    clientX: event.touches[0].clientX,
                    clientY: event.touches[0].clientY,
                    event: event
                  });
                });
              }
            });
            return function () {
              unsubscribeMouseDown();

              if (IS_TOUCH_DEVICE) {
                /** @type {?} */
                unsubscribeTouchStart();
              }
            };
          }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
          this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Observable(function (observer) {
            /** @type {?} */
            var unsubscribeMouseMove;
            /** @type {?} */

            var unsubscribeTouchMove;
            zone.runOutsideAngular(function () {
              unsubscribeMouseMove = renderer.listen('document', 'mousemove', function (event) {
                observer.next({
                  clientX: event.clientX,
                  clientY: event.clientY,
                  event: event
                });
              });

              if (IS_TOUCH_DEVICE) {
                unsubscribeTouchMove = renderer.listen('document', 'touchmove', function (event) {
                  observer.next({
                    clientX: event.targetTouches[0].clientX,
                    clientY: event.targetTouches[0].clientY,
                    event: event
                  });
                });
              }
            });
            return function () {
              unsubscribeMouseMove();

              if (IS_TOUCH_DEVICE) {
                /** @type {?} */
                unsubscribeTouchMove();
              }
            };
          }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
          this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Observable(function (observer) {
            /** @type {?} */
            var unsubscribeMouseUp;
            /** @type {?} */

            var unsubscribeTouchEnd;
            /** @type {?} */

            var unsubscribeTouchCancel;
            zone.runOutsideAngular(function () {
              unsubscribeMouseUp = renderer.listen('document', 'mouseup', function (event) {
                observer.next({
                  clientX: event.clientX,
                  clientY: event.clientY,
                  event: event
                });
              });

              if (IS_TOUCH_DEVICE) {
                unsubscribeTouchEnd = renderer.listen('document', 'touchend', function (event) {
                  observer.next({
                    clientX: event.changedTouches[0].clientX,
                    clientY: event.changedTouches[0].clientY,
                    event: event
                  });
                });
                unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', function (event) {
                  observer.next({
                    clientX: event.changedTouches[0].clientX,
                    clientY: event.changedTouches[0].clientY,
                    event: event
                  });
                });
              }
            });
            return function () {
              unsubscribeMouseUp();

              if (IS_TOUCH_DEVICE) {
                /** @type {?} */
                unsubscribeTouchEnd();

                /** @type {?} */
                unsubscribeTouchCancel();
              }
            };
          }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
        }

        _createClass(PointerEventListeners, null, [{
          key: "getInstance",
          value: // tslint:disable-line

          /**
           * @param {?} renderer
           * @param {?} zone
           * @return {?}
           */
          function getInstance(renderer, zone) {
            if (!PointerEventListeners.instance) {
              PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
            }

            return PointerEventListeners.instance;
          }
        }]);

        return PointerEventListeners;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
       *
       * For example
       *
       * ```html
       * <div mwlResizable>
       *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
       * </div>
       * ```
       * Or in case they are sibling elements:
       * ```html
       * <div mwlResizable #resizableElement="mwlResizable"></div>
       * <div mwlResizeHandle [resizableContainer]="resizableElement" [resizeEdges]="{bottom: true, right: true}"></div>
       * ```
       */


      var _ResizeHandleDirective = /*#__PURE__*/function () {
        /**
         * @param {?} renderer
         * @param {?} element
         * @param {?} zone
         * @param {?} resizableDirective
         */
        function _ResizeHandleDirective(renderer, element, zone, resizableDirective) {
          _classCallCheck(this, _ResizeHandleDirective);

          this.renderer = renderer;
          this.element = element;
          this.zone = zone;
          this.resizableDirective = resizableDirective;
          /**
           * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
           */

          this.resizeEdges = {};
          this.eventListeners = {};
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        }
        /**
         * @return {?}
         */


        _createClass(_ResizeHandleDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            this.zone.runOutsideAngular(function () {
              _this22.listenOnTheHost('mousedown').subscribe(function (event) {
                _this22.onMousedown(event, event.clientX, event.clientY);
              });

              _this22.listenOnTheHost('mouseup').subscribe(function (event) {
                _this22.onMouseup(event.clientX, event.clientY);
              });

              if (IS_TOUCH_DEVICE) {
                _this22.listenOnTheHost('touchstart').subscribe(function (event) {
                  _this22.onMousedown(event, event.touches[0].clientX, event.touches[0].clientY);
                });

                (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(_this22.listenOnTheHost('touchend'), _this22.listenOnTheHost('touchcancel')).subscribe(function (event) {
                  _this22.onMouseup(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
                });
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.unsubscribeEventListeners();
          }
          /**
           * @hidden
           * @param {?} event
           * @param {?} clientX
           * @param {?} clientY
           * @return {?}
           */

        }, {
          key: "onMousedown",
          value: function onMousedown(event, clientX, clientY) {
            var _this23 = this;

            event.preventDefault();

            if (!this.eventListeners.touchmove) {
              this.eventListeners.touchmove = this.renderer.listen(this.element.nativeElement, 'touchmove', function (touchMoveEvent) {
                _this23.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
              });
            }

            if (!this.eventListeners.mousemove) {
              this.eventListeners.mousemove = this.renderer.listen(this.element.nativeElement, 'mousemove', function (mouseMoveEvent) {
                _this23.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
              });
            }

            this.resizable.mousedown.next({
              clientX: clientX,
              clientY: clientY,
              edges: this.resizeEdges
            });
          }
          /**
           * @hidden
           * @param {?} clientX
           * @param {?} clientY
           * @return {?}
           */

        }, {
          key: "onMouseup",
          value: function onMouseup(clientX, clientY) {
            this.unsubscribeEventListeners();
            this.resizable.mouseup.next({
              clientX: clientX,
              clientY: clientY,
              edges: this.resizeEdges
            });
          } // directive might be passed from DI or as an input

          /**
           * @private
           * @return {?}
           */

        }, {
          key: "resizable",
          get: function get() {
            return this.resizableDirective || this.resizableContainer;
          }
          /**
           * @private
           * @param {?} event
           * @param {?} clientX
           * @param {?} clientY
           * @return {?}
           */

        }, {
          key: "onMousemove",
          value: function onMousemove(event, clientX, clientY) {
            this.resizable.mousemove.next({
              clientX: clientX,
              clientY: clientY,
              edges: this.resizeEdges,
              event: event
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "unsubscribeEventListeners",
          value: function unsubscribeEventListeners() {
            var _this24 = this;

            Object.keys(this.eventListeners).forEach(function (type) {
              /** @type {?} */
              _this24.eventListeners[type]();

              delete _this24.eventListeners[type];
            });
          }
          /**
           * @private
           * @template T
           * @param {?} eventName
           * @return {?}
           */

        }, {
          key: "listenOnTheHost",
          value: function listenOnTheHost(eventName) {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this.element.nativeElement, eventName).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$));
          }
        }]);

        return _ResizeHandleDirective;
      }();

      _ResizeHandleDirective.ɵfac = function ResizeHandleDirective_Factory(t) {
        return new (t || _ResizeHandleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ResizableDirective, 8));
      };

      _ResizeHandleDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ResizeHandleDirective,
        selectors: [["", "mwlResizeHandle", ""]],
        inputs: {
          resizeEdges: "resizeEdges",
          resizableContainer: "resizableContainer"
        }
      });
      /** @nocollapse */

      _ResizeHandleDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: _ResizableDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }];
      };

      _ResizeHandleDirective.propDecorators = {
        resizeEdges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        resizableContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ResizeHandleDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[mwlResizeHandle]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: _ResizableDirective,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }];
        }, {
          resizeEdges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          resizableContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _ResizableModule = function _ResizableModule() {
        _classCallCheck(this, _ResizableModule);
      };

      _ResizableModule.ɵfac = function ResizableModule_Factory(t) {
        return new (t || _ResizableModule)();
      };

      _ResizableModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _ResizableModule
      });
      _ResizableModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ResizableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [_ResizableDirective, _ResizeHandleDirective],
            exports: [_ResizableDirective, _ResizeHandleDirective]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_ResizableModule, {
          declarations: [_ResizableDirective, _ResizeHandleDirective],
          exports: [_ResizableDirective, _ResizeHandleDirective]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-resizable-element.js.map

      /***/

    },

    /***/
    90104:
    /*!*******************************************************!*\
      !*** ./node_modules/calendar-utils/calendar-utils.js ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DAYS_OF_WEEK": function DAYS_OF_WEEK() {
          return (
            /* binding */
            _DAYS_OF_WEEK
          );
        },

        /* harmony export */
        "SECONDS_IN_DAY": function SECONDS_IN_DAY() {
          return (
            /* binding */
            _SECONDS_IN_DAY
          );
        },

        /* harmony export */
        "getEventsInPeriod": function getEventsInPeriod() {
          return (
            /* binding */
            _getEventsInPeriod
          );
        },

        /* harmony export */
        "getWeekViewHeader": function getWeekViewHeader() {
          return (
            /* binding */
            _getWeekViewHeader
          );
        },

        /* harmony export */
        "getDifferenceInDaysWithExclusions": function getDifferenceInDaysWithExclusions() {
          return (
            /* binding */
            _getDifferenceInDaysWithExclusions
          );
        },

        /* harmony export */
        "getAllDayWeekEvents": function getAllDayWeekEvents() {
          return (
            /* binding */
            _getAllDayWeekEvents
          );
        },

        /* harmony export */
        "getWeekView": function getWeekView() {
          return (
            /* binding */
            _getWeekView
          );
        },

        /* harmony export */
        "getMonthView": function getMonthView() {
          return (
            /* binding */
            _getMonthView
          );
        },

        /* harmony export */
        "EventValidationErrorMessage": function EventValidationErrorMessage() {
          return (
            /* binding */
            _EventValidationErrorMessage
          );
        },

        /* harmony export */
        "validateEvents": function validateEvents() {
          return (
            /* binding */
            _validateEvents
          );
        }
        /* harmony export */

      });

      var __assign = undefined && undefined.__assign || function () {
        __assign = Object.assign || function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return __assign.apply(this, arguments);
      };

      var __spreadArrays = undefined && undefined.__spreadArrays || function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      };

      var _DAYS_OF_WEEK;

      (function (DAYS_OF_WEEK) {
        DAYS_OF_WEEK[DAYS_OF_WEEK["SUNDAY"] = 0] = "SUNDAY";
        DAYS_OF_WEEK[DAYS_OF_WEEK["MONDAY"] = 1] = "MONDAY";
        DAYS_OF_WEEK[DAYS_OF_WEEK["TUESDAY"] = 2] = "TUESDAY";
        DAYS_OF_WEEK[DAYS_OF_WEEK["WEDNESDAY"] = 3] = "WEDNESDAY";
        DAYS_OF_WEEK[DAYS_OF_WEEK["THURSDAY"] = 4] = "THURSDAY";
        DAYS_OF_WEEK[DAYS_OF_WEEK["FRIDAY"] = 5] = "FRIDAY";
        DAYS_OF_WEEK[DAYS_OF_WEEK["SATURDAY"] = 6] = "SATURDAY";
      })(_DAYS_OF_WEEK || (_DAYS_OF_WEEK = {}));

      var DEFAULT_WEEKEND_DAYS = [_DAYS_OF_WEEK.SUNDAY, _DAYS_OF_WEEK.SATURDAY];
      var DAYS_IN_WEEK = 7;
      var HOURS_IN_DAY = 24;
      var MINUTES_IN_HOUR = 60;

      var _SECONDS_IN_DAY = 60 * 60 * 24;

      function getExcludedSeconds(dateAdapter, _a) {
        var startDate = _a.startDate,
            seconds = _a.seconds,
            excluded = _a.excluded,
            precision = _a.precision;

        if (excluded.length < 1) {
          return 0;
        }

        var addSeconds = dateAdapter.addSeconds,
            getDay = dateAdapter.getDay,
            addDays = dateAdapter.addDays;
        var endDate = addSeconds(startDate, seconds - 1);
        var dayStart = getDay(startDate);
        var dayEnd = getDay(endDate);
        var result = 0; // Calculated in seconds

        var current = startDate;

        var _loop_1 = function _loop_1() {
          var day = getDay(current);

          if (excluded.some(function (excludedDay) {
            return excludedDay === day;
          })) {
            result += calculateExcludedSeconds(dateAdapter, {
              dayStart: dayStart,
              dayEnd: dayEnd,
              day: day,
              precision: precision,
              startDate: startDate,
              endDate: endDate
            });
          }

          current = addDays(current, 1);
        };

        while (current < endDate) {
          _loop_1();
        }

        return result;
      }

      function calculateExcludedSeconds(dateAdapter, _a) {
        var precision = _a.precision,
            day = _a.day,
            dayStart = _a.dayStart,
            dayEnd = _a.dayEnd,
            startDate = _a.startDate,
            endDate = _a.endDate;
        var differenceInSeconds = dateAdapter.differenceInSeconds,
            endOfDay = dateAdapter.endOfDay,
            startOfDay = dateAdapter.startOfDay;

        if (precision === 'minutes') {
          if (day === dayStart) {
            return differenceInSeconds(endOfDay(startDate), startDate) + 1;
          } else if (day === dayEnd) {
            return differenceInSeconds(endDate, startOfDay(endDate)) + 1;
          }
        }

        return _SECONDS_IN_DAY;
      }

      function getWeekViewEventSpan(dateAdapter, _a) {
        var event = _a.event,
            offset = _a.offset,
            startOfWeekDate = _a.startOfWeekDate,
            excluded = _a.excluded,
            precision = _a.precision,
            totalDaysInView = _a.totalDaysInView;
        var max = dateAdapter.max,
            differenceInSeconds = dateAdapter.differenceInSeconds,
            addDays = dateAdapter.addDays,
            endOfDay = dateAdapter.endOfDay,
            differenceInDays = dateAdapter.differenceInDays;
        var span = _SECONDS_IN_DAY;
        var begin = max([event.start, startOfWeekDate]);

        if (event.end) {
          switch (precision) {
            case 'minutes':
              span = differenceInSeconds(event.end, begin);
              break;

            default:
              span = differenceInDays(addDays(endOfDay(event.end), 1), begin) * _SECONDS_IN_DAY;
              break;
          }
        }

        var offsetSeconds = offset * _SECONDS_IN_DAY;
        var totalLength = offsetSeconds + span; // the best way to detect if an event is outside the week-view
        // is to check if the total span beginning (from startOfWeekDay or event start) exceeds the total days in the view

        var secondsInView = totalDaysInView * _SECONDS_IN_DAY;

        if (totalLength > secondsInView) {
          span = secondsInView - offsetSeconds;
        }

        span -= getExcludedSeconds(dateAdapter, {
          startDate: begin,
          seconds: span,
          excluded: excluded,
          precision: precision
        });
        return span / _SECONDS_IN_DAY;
      }

      function getWeekViewEventOffset(dateAdapter, _a) {
        var event = _a.event,
            startOfWeekDate = _a.startOfWeek,
            excluded = _a.excluded,
            precision = _a.precision;
        var differenceInDays = dateAdapter.differenceInDays,
            startOfDay = dateAdapter.startOfDay,
            differenceInSeconds = dateAdapter.differenceInSeconds;

        if (event.start < startOfWeekDate) {
          return 0;
        }

        var offset = 0;

        switch (precision) {
          case 'days':
            offset = differenceInDays(startOfDay(event.start), startOfWeekDate) * _SECONDS_IN_DAY;
            break;

          case 'minutes':
            offset = differenceInSeconds(event.start, startOfWeekDate);
            break;
        }

        offset -= getExcludedSeconds(dateAdapter, {
          startDate: startOfWeekDate,
          seconds: offset,
          excluded: excluded,
          precision: precision
        });
        return Math.abs(offset / _SECONDS_IN_DAY);
      }

      function isEventIsPeriod(dateAdapter, _a) {
        var event = _a.event,
            periodStart = _a.periodStart,
            periodEnd = _a.periodEnd;
        var isSameSecond = dateAdapter.isSameSecond;
        var eventStart = event.start;
        var eventEnd = event.end || event.start;

        if (eventStart > periodStart && eventStart < periodEnd) {
          return true;
        }

        if (eventEnd > periodStart && eventEnd < periodEnd) {
          return true;
        }

        if (eventStart < periodStart && eventEnd > periodEnd) {
          return true;
        }

        if (isSameSecond(eventStart, periodStart) || isSameSecond(eventStart, periodEnd)) {
          return true;
        }

        if (isSameSecond(eventEnd, periodStart) || isSameSecond(eventEnd, periodEnd)) {
          return true;
        }

        return false;
      }

      function _getEventsInPeriod(dateAdapter, _a) {
        var events = _a.events,
            periodStart = _a.periodStart,
            periodEnd = _a.periodEnd;
        return events.filter(function (event) {
          return isEventIsPeriod(dateAdapter, {
            event: event,
            periodStart: periodStart,
            periodEnd: periodEnd
          });
        });
      }

      function getWeekDay(dateAdapter, _a) {
        var date = _a.date,
            _b = _a.weekendDays,
            weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
        var startOfDay = dateAdapter.startOfDay,
            isSameDay = dateAdapter.isSameDay,
            getDay = dateAdapter.getDay;
        var today = startOfDay(new Date());
        var day = getDay(date);
        return {
          date: date,
          day: day,
          isPast: date < today,
          isToday: isSameDay(date, today),
          isFuture: date > today,
          isWeekend: weekendDays.indexOf(day) > -1
        };
      }

      function _getWeekViewHeader(dateAdapter, _a) {
        var viewDate = _a.viewDate,
            weekStartsOn = _a.weekStartsOn,
            _b = _a.excluded,
            excluded = _b === void 0 ? [] : _b,
            weekendDays = _a.weekendDays,
            _c = _a.viewStart,
            viewStart = _c === void 0 ? dateAdapter.startOfWeek(viewDate, {
          weekStartsOn: weekStartsOn
        }) : _c,
            _d = _a.viewEnd,
            viewEnd = _d === void 0 ? dateAdapter.addDays(viewStart, DAYS_IN_WEEK) : _d;
        var addDays = dateAdapter.addDays,
            getDay = dateAdapter.getDay;
        var days = [];
        var date = viewStart;

        while (date < viewEnd) {
          if (!excluded.some(function (e) {
            return getDay(date) === e;
          })) {
            days.push(getWeekDay(dateAdapter, {
              date: date,
              weekendDays: weekendDays
            }));
          }

          date = addDays(date, 1);
        }

        return days;
      }

      function _getDifferenceInDaysWithExclusions(dateAdapter, _a) {
        var date1 = _a.date1,
            date2 = _a.date2,
            excluded = _a.excluded;
        var date = date1;
        var diff = 0;

        while (date < date2) {
          if (excluded.indexOf(dateAdapter.getDay(date)) === -1) {
            diff++;
          }

          date = dateAdapter.addDays(date, 1);
        }

        return diff;
      }

      function _getAllDayWeekEvents(dateAdapter, _a) {
        var _b = _a.events,
            events = _b === void 0 ? [] : _b,
            _c = _a.excluded,
            excluded = _c === void 0 ? [] : _c,
            _d = _a.precision,
            precision = _d === void 0 ? 'days' : _d,
            _e = _a.absolutePositionedEvents,
            absolutePositionedEvents = _e === void 0 ? false : _e,
            viewStart = _a.viewStart,
            viewEnd = _a.viewEnd;
        viewStart = dateAdapter.startOfDay(viewStart);
        viewEnd = dateAdapter.endOfDay(viewEnd);
        var differenceInSeconds = dateAdapter.differenceInSeconds,
            differenceInDays = dateAdapter.differenceInDays;

        var maxRange = _getDifferenceInDaysWithExclusions(dateAdapter, {
          date1: viewStart,
          date2: viewEnd,
          excluded: excluded
        });

        var totalDaysInView = differenceInDays(viewEnd, viewStart) + 1;
        var eventsMapped = events.filter(function (event) {
          return event.allDay;
        }).map(function (event) {
          var offset = getWeekViewEventOffset(dateAdapter, {
            event: event,
            startOfWeek: viewStart,
            excluded: excluded,
            precision: precision
          });
          var span = getWeekViewEventSpan(dateAdapter, {
            event: event,
            offset: offset,
            startOfWeekDate: viewStart,
            excluded: excluded,
            precision: precision,
            totalDaysInView: totalDaysInView
          });
          return {
            event: event,
            offset: offset,
            span: span
          };
        }).filter(function (e) {
          return e.offset < maxRange;
        }).filter(function (e) {
          return e.span > 0;
        }).map(function (entry) {
          return {
            event: entry.event,
            offset: entry.offset,
            span: entry.span,
            startsBeforeWeek: entry.event.start < viewStart,
            endsAfterWeek: (entry.event.end || entry.event.start) > viewEnd
          };
        }).sort(function (itemA, itemB) {
          var startSecondsDiff = differenceInSeconds(itemA.event.start, itemB.event.start);

          if (startSecondsDiff === 0) {
            return differenceInSeconds(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
          }

          return startSecondsDiff;
        });
        var allDayEventRows = [];
        var allocatedEvents = [];
        eventsMapped.forEach(function (event, index) {
          if (allocatedEvents.indexOf(event) === -1) {
            allocatedEvents.push(event);
            var rowSpan_1 = event.span + event.offset;
            var otherRowEvents = eventsMapped.slice(index + 1).filter(function (nextEvent) {
              if (nextEvent.offset >= rowSpan_1 && rowSpan_1 + nextEvent.span <= totalDaysInView && allocatedEvents.indexOf(nextEvent) === -1) {
                var nextEventOffset = nextEvent.offset - rowSpan_1;

                if (!absolutePositionedEvents) {
                  nextEvent.offset = nextEventOffset;
                }

                rowSpan_1 += nextEvent.span + nextEventOffset;
                allocatedEvents.push(nextEvent);
                return true;
              }
            });

            var weekEvents = __spreadArrays([event], otherRowEvents);

            var id = weekEvents.filter(function (weekEvent) {
              return weekEvent.event.id;
            }).map(function (weekEvent) {
              return weekEvent.event.id;
            }).join('-');
            allDayEventRows.push(__assign({
              row: weekEvents
            }, id ? {
              id: id
            } : {}));
          }
        });
        return allDayEventRows;
      }

      function getWeekViewHourGrid(dateAdapter, _a) {
        var events = _a.events,
            viewDate = _a.viewDate,
            hourSegments = _a.hourSegments,
            hourDuration = _a.hourDuration,
            dayStart = _a.dayStart,
            dayEnd = _a.dayEnd,
            weekStartsOn = _a.weekStartsOn,
            excluded = _a.excluded,
            weekendDays = _a.weekendDays,
            segmentHeight = _a.segmentHeight,
            viewStart = _a.viewStart,
            viewEnd = _a.viewEnd,
            minimumEventHeight = _a.minimumEventHeight;
        var dayViewHourGrid = getDayViewHourGrid(dateAdapter, {
          viewDate: viewDate,
          hourSegments: hourSegments,
          hourDuration: hourDuration,
          dayStart: dayStart,
          dayEnd: dayEnd
        });

        var weekDays = _getWeekViewHeader(dateAdapter, {
          viewDate: viewDate,
          weekStartsOn: weekStartsOn,
          excluded: excluded,
          weekendDays: weekendDays,
          viewStart: viewStart,
          viewEnd: viewEnd
        });

        var setHours = dateAdapter.setHours,
            setMinutes = dateAdapter.setMinutes,
            getHours = dateAdapter.getHours,
            getMinutes = dateAdapter.getMinutes;
        return weekDays.map(function (day) {
          var dayView = getDayView(dateAdapter, {
            events: events,
            viewDate: day.date,
            hourSegments: hourSegments,
            dayStart: dayStart,
            dayEnd: dayEnd,
            segmentHeight: segmentHeight,
            eventWidth: 1,
            hourDuration: hourDuration,
            minimumEventHeight: minimumEventHeight
          });
          var hours = dayViewHourGrid.map(function (hour) {
            var segments = hour.segments.map(function (segment) {
              var date = setMinutes(setHours(day.date, getHours(segment.date)), getMinutes(segment.date));
              return __assign(__assign({}, segment), {
                date: date
              });
            });
            return __assign(__assign({}, hour), {
              segments: segments
            });
          });

          function getColumnCount(allEvents, prevOverlappingEvents) {
            var columnCount = Math.max.apply(Math, prevOverlappingEvents.map(function (iEvent) {
              return iEvent.left + 1;
            }));
            var nextOverlappingEvents = allEvents.filter(function (iEvent) {
              return iEvent.left >= columnCount;
            }).filter(function (iEvent) {
              return getOverLappingWeekViewEvents(prevOverlappingEvents, iEvent.top, iEvent.top + iEvent.height).length > 0;
            });

            if (nextOverlappingEvents.length > 0) {
              return getColumnCount(allEvents, nextOverlappingEvents);
            } else {
              return columnCount;
            }
          }

          var mappedEvents = dayView.events.map(function (event) {
            var columnCount = getColumnCount(dayView.events, getOverLappingWeekViewEvents(dayView.events, event.top, event.top + event.height));
            var width = 100 / columnCount;
            return __assign(__assign({}, event), {
              left: event.left * width,
              width: width
            });
          });
          return {
            hours: hours,
            date: day.date,
            events: mappedEvents.map(function (event) {
              var overLappingEvents = getOverLappingWeekViewEvents(mappedEvents.filter(function (otherEvent) {
                return otherEvent.left > event.left;
              }), event.top, event.top + event.height);

              if (overLappingEvents.length > 0) {
                return __assign(__assign({}, event), {
                  width: Math.min.apply(Math, overLappingEvents.map(function (otherEvent) {
                    return otherEvent.left;
                  })) - event.left
                });
              }

              return event;
            })
          };
        });
      }

      function _getWeekView(dateAdapter, _a) {
        var _b = _a.events,
            events = _b === void 0 ? [] : _b,
            viewDate = _a.viewDate,
            weekStartsOn = _a.weekStartsOn,
            _c = _a.excluded,
            excluded = _c === void 0 ? [] : _c,
            _d = _a.precision,
            precision = _d === void 0 ? 'days' : _d,
            _e = _a.absolutePositionedEvents,
            absolutePositionedEvents = _e === void 0 ? false : _e,
            hourSegments = _a.hourSegments,
            hourDuration = _a.hourDuration,
            dayStart = _a.dayStart,
            dayEnd = _a.dayEnd,
            weekendDays = _a.weekendDays,
            segmentHeight = _a.segmentHeight,
            minimumEventHeight = _a.minimumEventHeight,
            _f = _a.viewStart,
            viewStart = _f === void 0 ? dateAdapter.startOfWeek(viewDate, {
          weekStartsOn: weekStartsOn
        }) : _f,
            _g = _a.viewEnd,
            viewEnd = _g === void 0 ? dateAdapter.endOfWeek(viewDate, {
          weekStartsOn: weekStartsOn
        }) : _g;

        if (!events) {
          events = [];
        }

        var startOfDay = dateAdapter.startOfDay,
            endOfDay = dateAdapter.endOfDay;
        viewStart = startOfDay(viewStart);
        viewEnd = endOfDay(viewEnd);

        var eventsInPeriod = _getEventsInPeriod(dateAdapter, {
          events: events,
          periodStart: viewStart,
          periodEnd: viewEnd
        });

        var header = _getWeekViewHeader(dateAdapter, {
          viewDate: viewDate,
          weekStartsOn: weekStartsOn,
          excluded: excluded,
          weekendDays: weekendDays,
          viewStart: viewStart,
          viewEnd: viewEnd
        });

        return {
          allDayEventRows: _getAllDayWeekEvents(dateAdapter, {
            events: eventsInPeriod,
            excluded: excluded,
            precision: precision,
            absolutePositionedEvents: absolutePositionedEvents,
            viewStart: viewStart,
            viewEnd: viewEnd
          }),
          period: {
            events: eventsInPeriod,
            start: header[0].date,
            end: endOfDay(header[header.length - 1].date)
          },
          hourColumns: getWeekViewHourGrid(dateAdapter, {
            events: events,
            viewDate: viewDate,
            hourSegments: hourSegments,
            hourDuration: hourDuration,
            dayStart: dayStart,
            dayEnd: dayEnd,
            weekStartsOn: weekStartsOn,
            excluded: excluded,
            weekendDays: weekendDays,
            segmentHeight: segmentHeight,
            viewStart: viewStart,
            viewEnd: viewEnd,
            minimumEventHeight: minimumEventHeight
          })
        };
      }

      function _getMonthView(dateAdapter, _a) {
        var _b = _a.events,
            events = _b === void 0 ? [] : _b,
            viewDate = _a.viewDate,
            weekStartsOn = _a.weekStartsOn,
            _c = _a.excluded,
            excluded = _c === void 0 ? [] : _c,
            _d = _a.viewStart,
            viewStart = _d === void 0 ? dateAdapter.startOfMonth(viewDate) : _d,
            _e = _a.viewEnd,
            viewEnd = _e === void 0 ? dateAdapter.endOfMonth(viewDate) : _e,
            weekendDays = _a.weekendDays;

        if (!events) {
          events = [];
        }

        var startOfWeek = dateAdapter.startOfWeek,
            endOfWeek = dateAdapter.endOfWeek,
            differenceInDays = dateAdapter.differenceInDays,
            startOfDay = dateAdapter.startOfDay,
            addHours = dateAdapter.addHours,
            endOfDay = dateAdapter.endOfDay,
            isSameMonth = dateAdapter.isSameMonth,
            getDay = dateAdapter.getDay,
            getMonth = dateAdapter.getMonth;
        var start = startOfWeek(viewStart, {
          weekStartsOn: weekStartsOn
        });
        var end = endOfWeek(viewEnd, {
          weekStartsOn: weekStartsOn
        });

        var eventsInMonth = _getEventsInPeriod(dateAdapter, {
          events: events,
          periodStart: start,
          periodEnd: end
        });

        var initialViewDays = [];
        var previousDate;

        var _loop_2 = function _loop_2(i) {
          // hacky fix for https://github.com/mattlewis92/angular-calendar/issues/173
          var date;

          if (previousDate) {
            date = startOfDay(addHours(previousDate, HOURS_IN_DAY));

            if (previousDate.getTime() === date.getTime()) {
              // DST change, so need to add 25 hours

              /* istanbul ignore next */
              date = startOfDay(addHours(previousDate, HOURS_IN_DAY + 1));
            }

            previousDate = date;
          } else {
            date = previousDate = start;
          }

          if (!excluded.some(function (e) {
            return getDay(date) === e;
          })) {
            var day = getWeekDay(dateAdapter, {
              date: date,
              weekendDays: weekendDays
            });

            var eventsInPeriod = _getEventsInPeriod(dateAdapter, {
              events: eventsInMonth,
              periodStart: startOfDay(date),
              periodEnd: endOfDay(date)
            });

            day.inMonth = isSameMonth(date, viewDate);
            day.events = eventsInPeriod;
            day.badgeTotal = eventsInPeriod.length;
            initialViewDays.push(day);
          }
        };

        for (var i = 0; i < differenceInDays(end, start) + 1; i++) {
          _loop_2(i);
        }

        var days = [];
        var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;

        if (totalDaysVisibleInWeek < DAYS_IN_WEEK) {
          for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
            var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
            var isRowInMonth = row.some(function (day) {
              return viewStart <= day.date && day.date < viewEnd;
            });

            if (isRowInMonth) {
              days = __spreadArrays(days, row);
            }
          }
        } else {
          days = initialViewDays;
        }

        var rows = Math.floor(days.length / totalDaysVisibleInWeek);
        var rowOffsets = [];

        for (var i = 0; i < rows; i++) {
          rowOffsets.push(i * totalDaysVisibleInWeek);
        }

        return {
          rowOffsets: rowOffsets,
          totalDaysVisibleInWeek: totalDaysVisibleInWeek,
          days: days,
          period: {
            start: days[0].date,
            end: endOfDay(days[days.length - 1].date),
            events: eventsInMonth
          }
        };
      }

      function getOverLappingWeekViewEvents(events, top, bottom) {
        return events.filter(function (previousEvent) {
          var previousEventTop = previousEvent.top;
          var previousEventBottom = previousEvent.top + previousEvent.height;

          if (top < previousEventBottom && previousEventBottom < bottom) {
            return true;
          } else if (top < previousEventTop && previousEventTop < bottom) {
            return true;
          } else if (previousEventTop <= top && bottom <= previousEventBottom) {
            return true;
          }

          return false;
        });
      }

      function getDayView(dateAdapter, _a) {
        var events = _a.events,
            viewDate = _a.viewDate,
            hourSegments = _a.hourSegments,
            dayStart = _a.dayStart,
            dayEnd = _a.dayEnd,
            eventWidth = _a.eventWidth,
            segmentHeight = _a.segmentHeight,
            hourDuration = _a.hourDuration,
            minimumEventHeight = _a.minimumEventHeight;
        var setMinutes = dateAdapter.setMinutes,
            setHours = dateAdapter.setHours,
            startOfDay = dateAdapter.startOfDay,
            startOfMinute = dateAdapter.startOfMinute,
            endOfDay = dateAdapter.endOfDay,
            differenceInMinutes = dateAdapter.differenceInMinutes;
        var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
        var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
        endOfView.setSeconds(59, 999);
        var previousDayEvents = [];

        var eventsInPeriod = _getEventsInPeriod(dateAdapter, {
          events: events.filter(function (event) {
            return !event.allDay;
          }),
          periodStart: startOfView,
          periodEnd: endOfView
        });

        var dayViewEvents = eventsInPeriod.sort(function (eventA, eventB) {
          return eventA.start.valueOf() - eventB.start.valueOf();
        }).map(function (event) {
          var eventStart = event.start;
          var eventEnd = event.end || eventStart;
          var startsBeforeDay = eventStart < startOfView;
          var endsAfterDay = eventEnd > endOfView;
          var hourHeightModifier = hourSegments * segmentHeight / (hourDuration || MINUTES_IN_HOUR);
          var top = 0;

          if (eventStart > startOfView) {
            // adjust the difference in minutes if the user's offset is different between the start of the day and the event (e.g. when going to or from DST)
            var eventOffset = eventStart.getTimezoneOffset();
            var startOffset = startOfView.getTimezoneOffset();
            var diff = startOffset - eventOffset;
            top += differenceInMinutes(eventStart, startOfView) + diff;
          }

          top *= hourHeightModifier;
          var startDate = startsBeforeDay ? startOfView : eventStart;
          var endDate = endsAfterDay ? endOfView : eventEnd;
          var timezoneOffset = startDate.getTimezoneOffset() - endDate.getTimezoneOffset();
          var height = differenceInMinutes(endDate, startDate) + timezoneOffset;

          if (!event.end) {
            height = segmentHeight;
          } else {
            height *= hourHeightModifier;
          }

          if (minimumEventHeight && height < minimumEventHeight) {
            height = minimumEventHeight;
          }

          var bottom = top + height;
          var overlappingPreviousEvents = getOverLappingWeekViewEvents(previousDayEvents, top, bottom);
          var left = 0;

          while (overlappingPreviousEvents.some(function (previousEvent) {
            return previousEvent.left === left;
          })) {
            left += eventWidth;
          }

          var dayEvent = {
            event: event,
            height: height,
            width: eventWidth,
            top: top,
            left: left,
            startsBeforeDay: startsBeforeDay,
            endsAfterDay: endsAfterDay
          };
          previousDayEvents.push(dayEvent);
          return dayEvent;
        });
        var width = Math.max.apply(Math, dayViewEvents.map(function (event) {
          return event.left + event.width;
        }));

        var allDayEvents = _getEventsInPeriod(dateAdapter, {
          events: events.filter(function (event) {
            return event.allDay;
          }),
          periodStart: startOfDay(startOfView),
          periodEnd: endOfDay(endOfView)
        });

        return {
          events: dayViewEvents,
          width: width,
          allDayEvents: allDayEvents,
          period: {
            events: eventsInPeriod,
            start: startOfView,
            end: endOfView
          }
        };
      }

      function sanitiseHours(hours) {
        return Math.max(Math.min(23, hours), 0);
      }

      function sanitiseMinutes(minutes) {
        return Math.max(Math.min(59, minutes), 0);
      }

      function getDayViewHourGrid(dateAdapter, _a) {
        var viewDate = _a.viewDate,
            hourSegments = _a.hourSegments,
            hourDuration = _a.hourDuration,
            dayStart = _a.dayStart,
            dayEnd = _a.dayEnd;
        var setMinutes = dateAdapter.setMinutes,
            setHours = dateAdapter.setHours,
            startOfDay = dateAdapter.startOfDay,
            startOfMinute = dateAdapter.startOfMinute,
            endOfDay = dateAdapter.endOfDay,
            addMinutes = dateAdapter.addMinutes,
            addHours = dateAdapter.addHours,
            addDays = dateAdapter.addDays;
        var hours = [];
        var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
        var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
        var segmentDuration = (hourDuration || MINUTES_IN_HOUR) / hourSegments;
        var startOfViewDay = startOfDay(viewDate);
        var endOfViewDay = endOfDay(viewDate);

        var dateAdjustment = function dateAdjustment(d) {
          return d;
        }; // this means that we change from or to DST on this day and that's going to cause problems so we bump the date


        if (startOfViewDay.getTimezoneOffset() !== endOfViewDay.getTimezoneOffset()) {
          startOfViewDay = addDays(startOfViewDay, 1);
          startOfView = addDays(startOfView, 1);
          endOfView = addDays(endOfView, 1);

          dateAdjustment = function dateAdjustment(d) {
            return addDays(d, -1);
          };
        }

        var dayDuration = hourDuration ? HOURS_IN_DAY * 60 / hourDuration : MINUTES_IN_HOUR;

        for (var i = 0; i < dayDuration; i++) {
          var segments = [];

          for (var j = 0; j < hourSegments; j++) {
            var date = addMinutes(addMinutes(startOfView, i * (hourDuration || MINUTES_IN_HOUR)), j * segmentDuration);

            if (date >= startOfView && date < endOfView) {
              segments.push({
                date: dateAdjustment(date),
                displayDate: date,
                isStart: j === 0
              });
            }
          }

          if (segments.length > 0) {
            hours.push({
              segments: segments
            });
          }
        }

        return hours;
      }

      var _EventValidationErrorMessage;

      (function (EventValidationErrorMessage) {
        EventValidationErrorMessage["NotArray"] = "Events must be an array";
        EventValidationErrorMessage["StartPropertyMissing"] = "Event is missing the `start` property";
        EventValidationErrorMessage["StartPropertyNotDate"] = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.";
        EventValidationErrorMessage["EndPropertyNotDate"] = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.";
        EventValidationErrorMessage["EndsBeforeStart"] = "Event `start` property occurs after the `end`";
      })(_EventValidationErrorMessage || (_EventValidationErrorMessage = {}));

      function _validateEvents(events, log) {
        var isValid = true;

        function isError(msg, event) {
          log(msg, event);
          isValid = false;
        }

        if (!Array.isArray(events)) {
          log(_EventValidationErrorMessage.NotArray, events);
          return false;
        }

        events.forEach(function (event) {
          if (!event.start) {
            isError(_EventValidationErrorMessage.StartPropertyMissing, event);
          } else if (!(event.start instanceof Date)) {
            isError(_EventValidationErrorMessage.StartPropertyNotDate, event);
          }

          if (event.end) {
            if (!(event.end instanceof Date)) {
              isError(_EventValidationErrorMessage.EndPropertyNotDate, event);
            }

            if (event.start > event.end) {
              isError(_EventValidationErrorMessage.EndsBeforeStart, event);
            }
          }
        });
        return isValid;
      } //# sourceMappingURL=calendar-utils.js.map

      /***/

    },

    /***/
    75669:
    /*!***********************************************************************!*\
      !*** ./node_modules/calendar-utils/date-adapters/esm/moment/index.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "adapterFactory": function adapterFactory() {
          return (
            /* binding */
            _adapterFactory2
          );
        }
        /* harmony export */

      });

      function _adapterFactory2(moment) {
        function addDays(date, amount) {
          return moment(date).add(amount, 'days').toDate();
        }

        function addHours(date, amount) {
          return moment(date).add(amount, 'hours').toDate();
        }

        function addMinutes(date, amount) {
          return moment(date).add(amount, 'minutes').toDate();
        }

        function addSeconds(date, amount) {
          return moment(date).add(amount, 'seconds').toDate();
        }

        function differenceInDays(dateLeft, dateRight) {
          return moment(dateLeft).diff(moment(dateRight), 'days');
        }

        function differenceInMinutes(dateLeft, dateRight) {
          return moment(dateLeft).diff(moment(dateRight), 'minutes');
        }

        function differenceInSeconds(dateLeft, dateRight) {
          return moment(dateLeft).diff(moment(dateRight), 'seconds');
        }

        function endOfDay(date) {
          return moment(date).endOf('day').toDate();
        }

        function endOfMonth(date) {
          return moment(date).endOf('month').toDate();
        }

        function endOfWeek(date) {
          return moment(date).endOf('week').toDate();
        }

        function getDay(date) {
          return moment(date).day();
        }
        /* istanbul ignore next */


        function getMonth(date) {
          return moment(date).month();
        }

        function isSameDay(dateLeft, dateRight) {
          return moment(dateLeft).isSame(moment(dateRight), 'day');
        }

        function isSameMonth(dateLeft, dateRight) {
          return moment(dateLeft).isSame(moment(dateRight), 'month');
        }

        function isSameSecond(dateLeft, dateRight) {
          return moment(dateLeft).isSame(moment(dateRight), 'second');
        }

        function max(dates) {
          // tslint:disable-line array-type
          return moment.max(dates.map(function (date) {
            return moment(date);
          })).toDate();
        }

        function setHours(date, hours) {
          return moment(date).set('hours', hours).toDate();
        }

        function setMinutes(date, minutes) {
          return moment(date).set('minutes', minutes).toDate();
        }

        function startOfDay(date) {
          return moment(date).startOf('day').toDate();
        }

        function startOfMinute(date) {
          return moment(date).startOf('minute').toDate();
        }

        function startOfMonth(date) {
          return moment(date).startOf('month').toDate();
        }

        function startOfWeek(date) {
          return moment(date).startOf('week').toDate();
        }

        function getHours(date) {
          return moment(date).get('hours');
        }

        function getMinutes(date) {
          return moment(date).get('minutes');
        }

        return {
          addDays: addDays,
          addHours: addHours,
          addMinutes: addMinutes,
          addSeconds: addSeconds,
          differenceInDays: differenceInDays,
          differenceInMinutes: differenceInMinutes,
          differenceInSeconds: differenceInSeconds,
          endOfDay: endOfDay,
          endOfMonth: endOfMonth,
          endOfWeek: endOfWeek,
          getDay: getDay,
          getMonth: getMonth,
          isSameDay: isSameDay,
          isSameMonth: isSameMonth,
          isSameSecond: isSameSecond,
          max: max,
          setHours: setHours,
          setMinutes: setMinutes,
          startOfDay: startOfDay,
          startOfMinute: startOfMinute,
          startOfMonth: startOfMonth,
          startOfWeek: startOfWeek,
          getHours: getHours,
          getMinutes: getMinutes
        };
      } //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    43463:
    /*!**************************************************************!*\
      !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            requiredArgs
          );
        }
        /* harmony export */

      });

      function requiredArgs(required, args) {
        if (args.length < required) {
          throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
        }
      }
      /***/

    },

    /***/
    20207:
    /*!***********************************************************!*\
      !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            toInteger
          );
        }
        /* harmony export */

      });

      function toInteger(dirtyNumber) {
        if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
          return NaN;
        }

        var number = Number(dirtyNumber);

        if (isNaN(number)) {
          return number;
        }

        return number < 0 ? Math.ceil(number) : Math.floor(number);
      }
      /***/

    },

    /***/
    23501:
    /*!****************************************************!*\
      !*** ./node_modules/date-fns/esm/addDays/index.js ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            addDays
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_lib/toInteger/index.js */
      20207);
      /* harmony import */


      var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../toDate/index.js */
      94513);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      43463);
      /**
       * @name addDays
       * @category Day Helpers
       * @summary Add the specified number of days to the given date.
       *
       * @description
       * Add the specified number of days to the given date.
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} date - the date to be changed
       * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
       * @returns {Date} - the new date with the days added
       * @throws {TypeError} - 2 arguments required
       *
       * @example
       * // Add 10 days to 1 September 2014:
       * const result = addDays(new Date(2014, 8, 1), 10)
       * //=> Thu Sep 11 2014 00:00:00
       */


      function addDays(dirtyDate, dirtyAmount) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
        var date = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
        var amount = (0, _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

        if (isNaN(amount)) {
          return new Date(NaN);
        }

        if (!amount) {
          // If 0 days, no-op to avoid changing times in the hour before end of DST
          return date;
        }

        date.setDate(date.getDate() + amount);
        return date;
      }
      /***/

    },

    /***/
    64465:
    /*!*****************************************************!*\
      !*** ./node_modules/date-fns/esm/addHours/index.js ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            addHours
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_lib/toInteger/index.js */
      20207);
      /* harmony import */


      var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../addMilliseconds/index.js */
      43530);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      43463);

      var MILLISECONDS_IN_HOUR = 3600000;
      /**
       * @name addHours
       * @category Hour Helpers
       * @summary Add the specified number of hours to the given date.
       *
       * @description
       * Add the specified number of hours to the given date.
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} date - the date to be changed
       * @param {Number} amount - the amount of hours to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
       * @returns {Date} the new date with the hours added
       * @throws {TypeError} 2 arguments required
       *
       * @example
       * // Add 2 hours to 10 July 2014 23:00:00:
       * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
       * //=> Fri Jul 11 2014 01:00:00
       */

      function addHours(dirtyDate, dirtyAmount) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
        var amount = (0, _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
        return (0, _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, amount * MILLISECONDS_IN_HOUR);
      }
      /***/

    },

    /***/
    43530:
    /*!************************************************************!*\
      !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            addMilliseconds
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_lib/toInteger/index.js */
      20207);
      /* harmony import */


      var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../toDate/index.js */
      94513);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      43463);
      /**
       * @name addMilliseconds
       * @category Millisecond Helpers
       * @summary Add the specified number of milliseconds to the given date.
       *
       * @description
       * Add the specified number of milliseconds to the given date.
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} date - the date to be changed
       * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
       * @returns {Date} the new date with the milliseconds added
       * @throws {TypeError} 2 arguments required
       *
       * @example
       * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
       * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
       * //=> Thu Jul 10 2014 12:45:30.750
       */


      function addMilliseconds(dirtyDate, dirtyAmount) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
        var timestamp = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
        var amount = (0, _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
        return new Date(timestamp + amount);
      }
      /***/

    },

    /***/
    62094:
    /*!*****************************************************!*\
      !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            endOfDay
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../toDate/index.js */
      94513);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      43463);
      /**
       * @name endOfDay
       * @category Day Helpers
       * @summary Return the end of a day for the given date.
       *
       * @description
       * Return the end of a day for the given date.
       * The result will be in the local timezone.
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} date - the original date
       * @returns {Date} the end of a day
       * @throws {TypeError} 1 argument required
       *
       * @example
       * // The end of a day for 2 September 2014 11:55:00:
       * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
       * //=> Tue Sep 02 2014 23:59:59.999
       */


      function endOfDay(dirtyDate) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
        var date = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
        date.setHours(23, 59, 59, 999);
        return date;
      }
      /***/

    },

    /***/
    51000:
    /*!*******************************************************!*\
      !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            endOfMonth
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../toDate/index.js */
      94513);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      43463);
      /**
       * @name endOfMonth
       * @category Month Helpers
       * @summary Return the end of a month for the given date.
       *
       * @description
       * Return the end of a month for the given date.
       * The result will be in the local timezone.
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} date - the original date
       * @returns {Date} the end of a month
       * @throws {TypeError} 1 argument required
       *
       * @example
       * // The end of a month for 2 September 2014 11:55:00:
       * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
       * //=> Tue Sep 30 2014 23:59:59.999
       */


      function endOfMonth(dirtyDate) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
        var date = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
        var month = date.getMonth();
        date.setFullYear(date.getFullYear(), month + 1, 0);
        date.setHours(23, 59, 59, 999);
        return date;
      }
      /***/

    },

    /***/
    12297:
    /*!******************************************************!*\
      !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            isSameDay
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../startOfDay/index.js */
      43257);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      43463);
      /**
       * @name isSameDay
       * @category Day Helpers
       * @summary Are the given dates in the same day?
       *
       * @description
       * Are the given dates in the same day?
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} dateLeft - the first date to check
       * @param {Date|Number} dateRight - the second date to check
       * @returns {Boolean} the dates are in the same day
       * @throws {TypeError} 2 arguments required
       *
       * @example
       * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
       * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
       * //=> true
       */


      function isSameDay(dirtyDateLeft, dirtyDateRight) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
        var dateLeftStartOfDay = (0, _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
        var dateRightStartOfDay = (0, _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
        return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
      }
      /***/

    },

    /***/
    57888:
    /*!********************************************************!*\
      !*** ./node_modules/date-fns/esm/isSameMonth/index.js ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            isSameMonth
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../toDate/index.js */
      94513);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      43463);
      /**
       * @name isSameMonth
       * @category Month Helpers
       * @summary Are the given dates in the same month?
       *
       * @description
       * Are the given dates in the same month?
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} dateLeft - the first date to check
       * @param {Date|Number} dateRight - the second date to check
       * @returns {Boolean} the dates are in the same month
       * @throws {TypeError} 2 arguments required
       *
       * @example
       * // Are 2 September 2014 and 25 September 2014 in the same month?
       * var result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
       * //=> true
       */


      function isSameMonth(dirtyDateLeft, dirtyDateRight) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
        var dateLeft = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
        var dateRight = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
        return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
      }
      /***/

    },

    /***/
    43257:
    /*!*******************************************************!*\
      !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            startOfDay
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../toDate/index.js */
      94513);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      43463);
      /**
       * @name startOfDay
       * @category Day Helpers
       * @summary Return the start of a day for the given date.
       *
       * @description
       * Return the start of a day for the given date.
       * The result will be in the local timezone.
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} date - the original date
       * @returns {Date} the start of a day
       * @throws {TypeError} 1 argument required
       *
       * @example
       * // The start of a day for 2 September 2014 11:55:00:
       * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
       * //=> Tue Sep 02 2014 00:00:00
       */


      function startOfDay(dirtyDate) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
        var date = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
        date.setHours(0, 0, 0, 0);
        return date;
      }
      /***/

    },

    /***/
    98120:
    /*!****************************************************!*\
      !*** ./node_modules/date-fns/esm/subDays/index.js ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            subDays
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_lib/toInteger/index.js */
      20207);
      /* harmony import */


      var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../addDays/index.js */
      23501);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      43463);
      /**
       * @name subDays
       * @category Day Helpers
       * @summary Subtract the specified number of days from the given date.
       *
       * @description
       * Subtract the specified number of days from the given date.
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} date - the date to be changed
       * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
       * @returns {Date} the new date with the days subtracted
       * @throws {TypeError} 2 arguments required
       *
       * @example
       * // Subtract 10 days from 1 September 2014:
       * const result = subDays(new Date(2014, 8, 1), 10)
       * //=> Fri Aug 22 2014 00:00:00
       */


      function subDays(dirtyDate, dirtyAmount) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
        var amount = (0, _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
        return (0, _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
      }
      /***/

    },

    /***/
    94513:
    /*!***************************************************!*\
      !*** ./node_modules/date-fns/esm/toDate/index.js ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            toDate
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      43463);
      /**
       * @name toDate
       * @category Common Helpers
       * @summary Convert the given argument to an instance of Date.
       *
       * @description
       * Convert the given argument to an instance of Date.
       *
       * If the argument is an instance of Date, the function returns its clone.
       *
       * If the argument is a number, it is treated as a timestamp.
       *
       * If the argument is none of the above, the function returns Invalid Date.
       *
       * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
       *
       * @param {Date|Number} argument - the value to convert
       * @returns {Date} the parsed date in the local time zone
       * @throws {TypeError} 1 argument required
       *
       * @example
       * // Clone the date:
       * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
       * //=> Tue Feb 11 2014 11:30:30
       *
       * @example
       * // Convert the timestamp to date:
       * const result = toDate(1392098430000)
       * //=> Tue Feb 11 2014 11:30:30
       */


      function toDate(argument) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
        var argStr = Object.prototype.toString.call(argument); // Clone the date

        if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
          // Prevent the date to lose the milliseconds when passed to new Date() in IE10
          return new Date(argument.getTime());
        } else if (typeof argument === 'number' || argStr === '[object Number]') {
          return new Date(argument);
        } else {
          if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
            // eslint-disable-next-line no-console
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

            console.warn(new Error().stack);
          }

          return new Date(NaN);
        }
      }
      /***/

    },

    /***/
    71867:
    /*!************************************************!*\
      !*** ./node_modules/positioning/dist/entry.js ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "positionElements": function positionElements() {
          return (
            /* reexport safe */
            _positioning__WEBPACK_IMPORTED_MODULE_0__.positionElements
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./positioning */
      14401); //# sourceMappingURL=entry.js.map

      /***/

    },

    /***/
    14401:
    /*!******************************************************!*\
      !*** ./node_modules/positioning/dist/positioning.js ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Positioning": function Positioning() {
          return (
            /* binding */
            _Positioning
          );
        },

        /* harmony export */
        "positionElements": function positionElements() {
          return (
            /* binding */
            _positionElements
          );
        }
        /* harmony export */

      }); // previous version:
      // https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js


      var _Positioning =
      /** @class */
      function () {
        function Positioning() {}

        Positioning.prototype.getAllStyles = function (element) {
          return window.getComputedStyle(element);
        };

        Positioning.prototype.getStyle = function (element, prop) {
          return this.getAllStyles(element)[prop];
        };

        Positioning.prototype.isStaticPositioned = function (element) {
          return (this.getStyle(element, 'position') || 'static') === 'static';
        };

        Positioning.prototype.offsetParent = function (element) {
          var offsetParentEl = element.offsetParent || document.documentElement;

          while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
          }

          return offsetParentEl || document.documentElement;
        };

        Positioning.prototype.position = function (element, round) {
          if (round === void 0) {
            round = true;
          }

          var elPosition;
          var parentOffset = {
            width: 0,
            height: 0,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          };

          if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
            elPosition = {
              top: elPosition.top,
              bottom: elPosition.bottom,
              left: elPosition.left,
              right: elPosition.right,
              height: elPosition.height,
              width: elPosition.width
            };
          } else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);

            if (offsetParentEl !== document.documentElement) {
              parentOffset = this.offset(offsetParentEl, false);
            }

            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
          }

          elPosition.top -= parentOffset.top;
          elPosition.bottom -= parentOffset.top;
          elPosition.left -= parentOffset.left;
          elPosition.right -= parentOffset.left;

          if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
          }

          return elPosition;
        };

        Positioning.prototype.offset = function (element, round) {
          if (round === void 0) {
            round = true;
          }

          var elBcr = element.getBoundingClientRect();
          var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
          };
          var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
          };

          if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
          }

          return elOffset;
        };
        /*
          Return false if the element to position is outside the viewport
        */


        Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
          var _a = placement.split('-'),
              _b = _a[0],
              placementPrimary = _b === void 0 ? 'top' : _b,
              _c = _a[1],
              placementSecondary = _c === void 0 ? 'center' : _c;

          var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
          var targetElStyles = this.getAllStyles(targetElement);
          var marginTop = parseFloat(targetElStyles.marginTop);
          var marginBottom = parseFloat(targetElStyles.marginBottom);
          var marginLeft = parseFloat(targetElStyles.marginLeft);
          var marginRight = parseFloat(targetElStyles.marginRight);
          var topPosition = 0;
          var leftPosition = 0;

          switch (placementPrimary) {
            case 'top':
              topPosition = hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom);
              break;

            case 'bottom':
              topPosition = hostElPosition.top + hostElPosition.height;
              break;

            case 'left':
              leftPosition = hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight);
              break;

            case 'right':
              leftPosition = hostElPosition.left + hostElPosition.width;
              break;
          }

          switch (placementSecondary) {
            case 'top':
              topPosition = hostElPosition.top;
              break;

            case 'bottom':
              topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
              break;

            case 'left':
              leftPosition = hostElPosition.left;
              break;

            case 'right':
              leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
              break;

            case 'center':
              if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                leftPosition = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
              } else {
                topPosition = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
              }

              break;
          } /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
          // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;


          targetElement.style.transform = "translate(" + Math.round(leftPosition) + "px, " + Math.round(topPosition) + "px)"; // Check if the targetElement is inside the viewport

          var targetElBCR = targetElement.getBoundingClientRect();
          var html = document.documentElement;
          var windowHeight = window.innerHeight || html.clientHeight;
          var windowWidth = window.innerWidth || html.clientWidth;
          return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth && targetElBCR.bottom <= windowHeight;
        };

        return Positioning;
      }();

      var placementSeparator = /\s+/;
      var positionService = new _Positioning();
      /*
       * Accept the placement array and applies the appropriate placement dependent on the viewport.
       * Returns the applied placement.
       * In case of auto placement, placements are selected in order
       *   'top', 'bottom', 'left', 'right',
       *   'top-left', 'top-right',
       *   'bottom-left', 'bottom-right',
       *   'left-top', 'left-bottom',
       *   'right-top', 'right-bottom'.
       * */

      function _positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
        var placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
        var allowedPlacements = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom', 'right-top', 'right-bottom'];
        var classList = targetElement.classList;

        var addClassesToTarget = function addClassesToTarget(targetPlacement) {
          var _a = targetPlacement.split('-'),
              primary = _a[0],
              secondary = _a[1];

          var classes = [];

          if (baseClass) {
            classes.push(baseClass + "-" + primary);

            if (secondary) {
              classes.push(baseClass + "-" + primary + "-" + secondary);
            }

            classes.forEach(function (classname) {
              classList.add(classname);
            });
          }

          return classes;
        }; // Remove old placement classes to avoid issues


        if (baseClass) {
          allowedPlacements.forEach(function (placementToRemove) {
            classList.remove(baseClass + "-" + placementToRemove);
          });
        } // replace auto placement with other placements


        var hasAuto = placementVals.findIndex(function (val) {
          return val === 'auto';
        });

        if (hasAuto >= 0) {
          allowedPlacements.forEach(function (obj) {
            if (placementVals.find(function (val) {
              return val.search('^' + obj) !== -1;
            }) == null) {
              placementVals.splice(hasAuto++, 1, obj);
            }
          });
        } // coordinates where to position
        // Required for transform:


        var style = targetElement.style;
        style.position = 'absolute';
        style.top = '0';
        style.left = '0';
        style['will-change'] = 'transform';
        var testPlacement;
        var isInViewport = false;

        for (var _i = 0, placementVals_1 = placementVals; _i < placementVals_1.length; _i++) {
          testPlacement = placementVals_1[_i];
          var addedClasses = addClassesToTarget(testPlacement);

          if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
            isInViewport = true;
            break;
          } // Remove the baseClasses for further calculation


          if (baseClass) {
            addedClasses.forEach(function (classname) {
              classList.remove(classname);
            });
          }
        }

        if (!isInViewport) {
          // If nothing match, the first placement is the default one
          testPlacement = placementVals[0];
          addClassesToTarget(testPlacement);
          positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
        }

        return testPlacement;
      } //# sourceMappingURL=positioning.js.map

      /***/

    },

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

        var _super2 = _createSuper(CountSubscriber);

        function CountSubscriber(destination, predicate, source) {
          var _this25;

          _classCallCheck(this, CountSubscriber);

          _this25 = _super2.call(this, destination);
          _this25.predicate = predicate;
          _this25.source = source;
          _this25.count = 0;
          _this25.index = 0;
          return _this25;
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
    99269:
    /*!*************************************!*\
      !*** ./src/app/apps/apps.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppsModule": function AppsModule() {
          return (
            /* binding */
            _AppsModule
          );
        },

        /* harmony export */
        "momentAdapterFactory": function momentAdapterFactory() {
          return (
            /* binding */
            _momentAdapterFactory
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      3984);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _demo_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../demo-material-module */
      55408);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-quill */
      61282);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angular-calendar */
      13174);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      5052);
      /* harmony import */


      var ng2_dragula__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng2-dragula */
      88989);
      /* harmony import */


      var _apps_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./apps.routing */
      54678);
      /* harmony import */


      var _fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./fullcalendar/fullcalendar.component */
      51011);
      /* harmony import */


      var _mail_mail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mail/mail.component */
      41478);
      /* harmony import */


      var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./chat/chat.component */
      46735);
      /* harmony import */


      var _taskboard_taskboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./taskboard/taskboard.component */
      99048);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var angular_calendar_date_adapters_moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! angular-calendar/date-adapters/moment */
      77137);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /*import { DragulaModule } from 'ng2-dragula/ng2-dragula';*/


      var _AppsModule = function _AppsModule() {
        _classCallCheck(this, _AppsModule);
      };

      _AppsModule.ɵfac = function AppsModule_Factory(t) {
        return new (t || _AppsModule)();
      };

      _AppsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _AppsModule
      });
      _AppsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(_apps_routing__WEBPACK_IMPORTED_MODULE_1__.AppsRoutes), _demo_material_module__WEBPACK_IMPORTED_MODULE_0__.DemoMaterialModule, angular_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarModule.forRoot({
          provide: angular_calendar__WEBPACK_IMPORTED_MODULE_10__.DateAdapter,
          useFactory: _momentAdapterFactory
        }), _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexLayoutModule, ngx_quill__WEBPACK_IMPORTED_MODULE_12__.QuillModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_13__.DragulaModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__.PerfectScrollbarModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_AppsModule, {
          declarations: [_fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_2__.FullcalendarComponent, _mail_mail_component__WEBPACK_IMPORTED_MODULE_3__.MailComponent, _mail_mail_component__WEBPACK_IMPORTED_MODULE_3__.DialogDataExampleDialogComponent, _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__.ChatComponent, _fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_2__.CalendarDialogComponent, _taskboard_taskboard_component__WEBPACK_IMPORTED_MODULE_5__.TaskboardComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _demo_material_module__WEBPACK_IMPORTED_MODULE_0__.DemoMaterialModule, angular_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexLayoutModule, ngx_quill__WEBPACK_IMPORTED_MODULE_12__.QuillModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_13__.DragulaModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__.PerfectScrollbarModule]
        });
      })();

      function _momentAdapterFactory() {
        return (0, angular_calendar_date_adapters_moment__WEBPACK_IMPORTED_MODULE_15__.adapterFactory)(moment__WEBPACK_IMPORTED_MODULE_6__);
      }
      /***/

    },

    /***/
    54678:
    /*!**************************************!*\
      !*** ./src/app/apps/apps.routing.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppsRoutes": function AppsRoutes() {
          return (
            /* binding */
            _AppsRoutes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./fullcalendar/fullcalendar.component */
      51011);
      /* harmony import */


      var _mail_mail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mail/mail.component */
      41478);
      /* harmony import */


      var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chat/chat.component */
      46735);
      /* harmony import */


      var _taskboard_taskboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./taskboard/taskboard.component */
      99048);

      var _AppsRoutes = [{
        path: '',
        children: [{
          path: 'calendar',
          component: _fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_0__.FullcalendarComponent
        }, {
          path: 'messages',
          component: _mail_mail_component__WEBPACK_IMPORTED_MODULE_1__.MailComponent
        }, {
          path: 'chat',
          component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__.ChatComponent
        }, {
          path: 'taskboard',
          component: _taskboard_taskboard_component__WEBPACK_IMPORTED_MODULE_3__.TaskboardComponent
        }]
      }];
      /***/
    },

    /***/
    46735:
    /*!*********************************************!*\
      !*** ./src/app/apps/chat/chat.component.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChatComponent": function ChatComponent() {
          return (
            /* binding */
            _ChatComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      7639);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sidenav */
      4008);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      88030);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/toolbar */
      73121);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/list */
      45363);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      2895);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      49356);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      23021);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      46833);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      64372);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      64677);

      function ChatComponent_mat_list_item_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_mat_list_item_12_Template_mat_list_item_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var message_r3 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onSelect(message_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", message_r3.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r3.from, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r3.subject, " ");
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "side-panel-opened": a0,
          "side-panel-closed": a1
        };
      };

      var _ChatComponent = /*#__PURE__*/function () {
        function _ChatComponent() {
          _classCallCheck(this, _ChatComponent);

          this.sidePanelOpened = true;
          this.messages = [{
            from: 'Nirav Joshi',
            photo: 'assets/images/users/1.jpg',
            subject: 'Hey, how are you?'
          }, {
            from: 'Sunil Joshi',
            photo: 'assets/images/users/2.jpg',
            subject: 'Lorem ipsum done dkaghdka'
          }, {
            from: 'Vishal bhatt',
            photo: 'assets/images/users/3.jpg',
            subject: 'Thanks mate'
          }, {
            from: 'Genelia Desouza',
            photo: 'assets/images/users/4.jpg',
            subject: 'This is my shot'
          }, {
            from: 'Linda muke',
            photo: 'assets/images/users/5.jpg',
            subject: 'You have to do it with your self'
          }, {
            from: 'Vaibhav Zala',
            photo: 'assets/images/users/6.jpg',
            subject: 'No mate this is not'
          }, {
            from: 'Kalu valand',
            photo: 'assets/images/users/1.jpg',
            subject: 'Arti thai gai ne?'
          }];
          this.selectedMessage = this.messages[1];
        }

        _createClass(_ChatComponent, [{
          key: "isOver",
          value: function isOver() {
            return window.matchMedia("(max-width: 960px)").matches;
          }
        }, {
          key: "onSelect",
          value: function onSelect(message) {
            this.selectedMessage = message;
          }
        }]);

        return _ChatComponent;
      }();

      _ChatComponent.ɵfac = function ChatComponent_Factory(t) {
        return new (t || _ChatComponent)();
      };

      _ChatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ChatComponent,
        selectors: [["app-chat"]],
        decls: 96,
        vars: 32,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center start"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex", "100"], [1, "mat-card-top"], [3, "ngClass"], [3, "mode", "opened", "open", "close"], ["chatnav", ""], ["color", "primary", 1, "no-shadow"], ["fxLayout", "row", "fxFlex", "100"], [1, "m-t-0", "font-14"], ["src", "assets/images/users/8.jpg", "width", "40", 1, "img-circle", "vm", "m-r-10"], [3, "click", 4, "ngFor", "ngForOf"], ["color", "warn", 1, "bg-success", "no-shadow", "chat-right-panel"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "center center"], ["mat-icon-button", "", 1, "mr-1", 3, "click"], [1, "top-avatar", "m-r-10"], [1, "img-circle", 3, "src"], ["fxFlex", ""], [1, "font-14"], ["mat-icon-button", "", 1, "ml-1", 3, "matMenuTriggerFor"], ["x-position", "before"], ["them", "matMenu"], ["mat-menu-item", ""], [1, "chat-middle-box"], [1, "chat-list", "odd"], [1, "chat-message"], [1, "chat-block", "bg-light-info"], ["width", "40", 1, "img-circle", 3, "src"], [1, "chat-date"], [1, "chat-block"], [1, "chat-list", "even"], [1, "chat-block", "bg-light-success"], [1, "chat-footer"], ["fxLayout", "row", "layout-align", "start center"], ["fxFlex", "", 1, "mr-1", "ml-1"], ["matInput", "", "placeholder", "Send message"], ["mat-fab", "", "color", "warn"], [3, "click"], ["mat-list-avatar", "", "alt", "", 3, "src"], ["matLine", ""], ["matLine", "", 1, "text-muted"]],
        template: function ChatComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("open", function ChatComponent_Template_mat_sidenav_open_4_listener() {
              return ctx.sidePanelOpened = true;
            })("close", function ChatComponent_Template_mat_sidenav_close_4_listener() {
              return ctx.sidePanelOpened = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Luke Thomson");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChatComponent_mat_list_item_12_Template, 6, 3, "mat-list-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-toolbar", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_15_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "short_text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-menu", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contact info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Mute");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Delete chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-content", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Hi Luke.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "How are you my friend?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "I am good and what about you?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Lorem Ipsum is simply dummy text of the printing & type setting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "I would love to join the team.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](78, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Well we have good budget for the project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](88, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-card-actions", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-form-field", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "send");

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
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](29, _c0, ctx.sidePanelOpened, !ctx.sidePanelOpened));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.isOver() ? "over" : "side")("opened", !ctx.isOver());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.selectedMessage.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedMessage.from);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.selectedMessage.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 17, "2016-01-05"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.selectedMessage.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 19, "2016-01-05"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 21, "2016-01-05"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.selectedMessage.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 23, "2016-01-05"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](78, 25, "2016-01-05"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.selectedMessage.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](88, 27, "2016-01-05"));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavContainer, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultClassDirective, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenav, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatNavList, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuItem, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListAvatarCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatLine],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    51011:
    /*!*************************************************************!*\
      !*** ./src/app/apps/fullcalendar/fullcalendar.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarDialogComponent": function CalendarDialogComponent() {
          return (
            /* binding */
            _CalendarDialogComponent
          );
        },

        /* harmony export */
        "FullcalendarComponent": function FullcalendarComponent() {
          return (
            /* binding */
            _FullcalendarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      20592);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! date-fns */
      98120);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! date-fns */
      43257);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! date-fns */
      23501);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns */
      51000);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! date-fns */
      64465);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! date-fns */
      57888);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! date-fns */
      12297);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! date-fns */
      62094);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      2895);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      7639);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/toolbar */
      73121);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      88030);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/icon */
      49356);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! angular-calendar */
      13174);

      function FullcalendarComponent_mwl_calendar_month_view_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-view", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dayClicked", function FullcalendarComponent_mwl_calendar_month_view_35_Template_mwl_calendar_month_view_dayClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.dayClicked($event.day);
          })("eventClicked", function FullcalendarComponent_mwl_calendar_month_view_35_Template_mwl_calendar_month_view_eventClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.handleEvent("Clicked", $event.event);
          })("eventTimesChanged", function FullcalendarComponent_mwl_calendar_month_view_35_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.eventTimesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r0.viewDate)("events", ctx_r0.events)("refresh", ctx_r0.refresh)("activeDayIsOpen", ctx_r0.activeDayIsOpen);
        }
      }

      function FullcalendarComponent_mwl_calendar_week_view_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function FullcalendarComponent_mwl_calendar_week_view_36_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.handleEvent("Clicked", $event.event);
          })("eventTimesChanged", function FullcalendarComponent_mwl_calendar_week_view_36_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.eventTimesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r1.viewDate)("events", ctx_r1.events)("refresh", ctx_r1.refresh);
        }
      }

      function FullcalendarComponent_mwl_calendar_day_view_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-day-view", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function FullcalendarComponent_mwl_calendar_day_view_37_Template_mwl_calendar_day_view_eventClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.handleEvent("Clicked", $event.event);
          })("eventTimesChanged", function FullcalendarComponent_mwl_calendar_day_view_37_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.eventTimesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events)("refresh", ctx_r2.refresh);
        }
      }

      var _CalendarDialogComponent = function _CalendarDialogComponent(dialogRef, data) {
        _classCallCheck(this, _CalendarDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      };

      _CalendarDialogComponent.ɵfac = function CalendarDialogComponent_Factory(t) {
        return new (t || _CalendarDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
      };

      _CalendarDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CalendarDialogComponent,
        selectors: [["app-calendar-dialog"]],
        decls: 15,
        vars: 4,
        consts: [[1, "m-t-0"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
        template: function CalendarDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Event action occurred");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Action: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Event: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarDialogComponent_Template_button_click_13_listener() {
              return ctx.dialogRef.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Close dialog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.action);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 2, ctx.data == null ? null : ctx.data.event));
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe],
        encapsulation: 2
      });
      var colors = {
        red: {
          primary: '#fc4b6c',
          secondary: '#f9e7eb'
        },
        blue: {
          primary: '#1e88e5',
          secondary: '#D1E8FF'
        },
        yellow: {
          primary: '#ffb22b',
          secondary: '#FDF1BA'
        }
      };

      var _FullcalendarComponent = /*#__PURE__*/function () {
        function _FullcalendarComponent(dialog, doc) {
          var _this26 = this;

          _classCallCheck(this, _FullcalendarComponent);

          this.dialog = dialog;
          this.config = {
            disableClose: false,
            width: '',
            height: '',
            position: {
              top: '',
              bottom: '',
              left: '',
              right: ''
            },
            data: {
              action: '',
              event: []
            }
          };
          this.numTemplateOpens = 0;
          this.view = 'month';
          this.viewDate = new Date();
          this.actions = [{
            label: '<i class="ti-pencil act"></i>',
            onClick: function onClick(_ref66) {
              var event = _ref66.event;

              _this26.handleEvent('Edited', event);
            }
          }, {
            label: '<i class="ti-close act"></i>',
            onClick: function onClick(_ref67) {
              var event = _ref67.event;
              _this26.events = _this26.events.filter(function (iEvent) {
                return iEvent !== event;
              });

              _this26.handleEvent('Deleted', event);
            }
          }];
          this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
          this.events = [{
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date()), 1),
            end: (0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(), 1),
            title: 'A 3 day event',
            color: colors.red,
            actions: this.actions
          }, {
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date()),
            title: 'An event with no end date',
            color: colors.yellow,
            actions: this.actions
          }, {
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date()), 3),
            end: (0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date()), 3),
            title: 'A long event that spans 2 months',
            color: colors.blue
          }, {
            start: (0, date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date()), 2),
            end: new Date(),
            title: 'A draggable and resizable event',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
              beforeStart: true,
              afterEnd: true
            },
            draggable: true
          }];
          this.activeDayIsOpen = true;
        }

        _createClass(_FullcalendarComponent, [{
          key: "dayClicked",
          value: function dayClicked(_ref68) {
            var date = _ref68.date,
                events = _ref68.events;

            if ((0, date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(date, this.viewDate)) {
              if ((0, date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
                this.activeDayIsOpen = false;
              } else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
              }
            }
          }
        }, {
          key: "eventTimesChanged",
          value: function eventTimesChanged(_ref69) {
            var event = _ref69.event,
                newStart = _ref69.newStart,
                newEnd = _ref69.newEnd;
            event.start = newStart;
            event.end = newEnd;
            this.handleEvent('Dropped or resized', event);
            this.refresh.next();
          }
        }, {
          key: "handleEvent",
          value: function handleEvent(action, event) {
            var _this27 = this;

            this.config.data = {
              event: event,
              action: action
            };
            this.dialogRef = this.dialog.open(_CalendarDialogComponent, this.config);
            this.dialogRef.afterClosed().subscribe(function (result) {
              _this27.lastCloseResult = result;
              _this27.dialogRef = null;
            });
          }
        }, {
          key: "addEvent",
          value: function addEvent() {
            this.events.push({
              title: 'New event',
              start: (0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date()),
              end: (0, date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date()),
              color: colors.red,
              draggable: true,
              resizable: {
                beforeStart: true,
                afterEnd: true
              }
            });
            this.refresh.next();
          }
        }]);

        return _FullcalendarComponent;
      }();

      _FullcalendarComponent.ɵfac = function FullcalendarComponent_Factory(t) {
        return new (t || _FullcalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
      };

      _FullcalendarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FullcalendarComponent,
        selectors: [["app-fullcalendar"]],
        decls: 39,
        vars: 26,
        consts: [["color", "primary", 1, "no-shadow"], ["fxFlex", "", "fxShow", "false", "fxShow.gt-xs", ""], ["fxShow", "false", "fxShow.gt-xs", ""], ["mat-button", "", 3, "click"], ["fxHide", "false", "fxHide.gt-xs", ""], ["mat-icon-button", "", 3, "click"], ["fxFlex", "", "fxHide", "false", "fxHide.gt-xs", ""], ["mat-icon-button", "", "mwlCalendarPreviousView", "", 3, "view", "viewDate", "viewDateChange"], ["mat-icon-button", "", "mwlCalendarToday", "", 3, "viewDate", "viewDateChange"], ["mat-icon-button", "", "mwlCalendarNextView", "", 3, "view", "viewDate", "viewDateChange"], [3, "ngSwitch"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged"]],
        template: function FullcalendarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "calendarDate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullcalendarComponent_Template_button_click_8_listener() {
              return ctx.view = "month";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullcalendarComponent_Template_button_click_10_listener() {
              return ctx.view = "week";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullcalendarComponent_Template_button_click_12_listener() {
              return ctx.view = "day";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Day");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullcalendarComponent_Template_button_click_15_listener() {
              return ctx.view = "month";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "view_module");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullcalendarComponent_Template_button_click_18_listener() {
              return ctx.view = "week";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "view_week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullcalendarComponent_Template_button_click_21_listener() {
              return ctx.view = "day";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "view_day");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function FullcalendarComponent_Template_button_viewDateChange_25_listener($event) {
              return ctx.viewDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "chevron_left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function FullcalendarComponent_Template_button_viewDateChange_28_listener($event) {
              return ctx.viewDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function FullcalendarComponent_Template_button_viewDateChange_31_listener($event) {
              return ctx.viewDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "chevron_right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, FullcalendarComponent_mwl_calendar_month_view_35_Template, 1, 4, "mwl-calendar-month-view", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, FullcalendarComponent_mwl_calendar_week_view_36_Template, 1, 3, "mwl-calendar-week-view", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, FullcalendarComponent_mwl_calendar_day_view_37_Template, 1, 3, "mwl-calendar-day-view", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-card");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 22, ctx.viewDate, ctx.view + "ViewTitle", "en"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === "week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === "day");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === "week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === "day");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.view);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "day");
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarRow, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__.DefaultShowHideDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, angular_calendar__WEBPACK_IMPORTED_MODULE_18__["ɵf"], angular_calendar__WEBPACK_IMPORTED_MODULE_18__["ɵh"], angular_calendar__WEBPACK_IMPORTED_MODULE_18__["ɵg"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, angular_calendar__WEBPACK_IMPORTED_MODULE_18__.CalendarMonthViewComponent, angular_calendar__WEBPACK_IMPORTED_MODULE_18__.CalendarWeekViewComponent, angular_calendar__WEBPACK_IMPORTED_MODULE_18__.CalendarDayViewComponent],
        pipes: [angular_calendar__WEBPACK_IMPORTED_MODULE_18__["ɵi"]],
        styles: [".no-shadow[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGxjYWxlbmRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiZnVsbGNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLXNoYWRvd3tcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    41478:
    /*!*********************************************!*\
      !*** ./src/app/apps/mail/mail.component.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DialogDataExampleDialogComponent": function DialogDataExampleDialogComponent() {
          return (
            /* binding */
            _DialogDataExampleDialogComponent
          );
        },

        /* harmony export */
        "MailComponent": function MailComponent() {
          return (
            /* binding */
            _MailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      20592);
      /* harmony import */


      var _mail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mail.service */
      25002);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      46833);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      64372);
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-quill */
      61282);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      2895);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      7639);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      49356);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/sidenav */
      4008);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      88030);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      5052);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/expansion */
      23900);

      var _c0 = function _c0() {
        return {
          height: "200px"
        };
      };

      function MailComponent_div_11_img_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 21);
        }

        if (rf & 2) {
          var message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", message_r4.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function MailComponent_div_11_mat_icon_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", message_r4.iconClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r4.icon);
        }
      }

      function MailComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MailComponent_div_11_Template_div_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var message_r4 = restoredCtx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.onSelect(message_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MailComponent_div_11_img_4_Template, 1, 1, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MailComponent_div_11_mat_icon_5_Template, 2, 2, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r4 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", message_r4 === ctx_r1.selectedMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !message_r4.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r4.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r4.from);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r4.subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 7, message_r4.date, "fullDate"));
        }
      }

      function MailComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h4", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-action-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Archive");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Forward");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Trash");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r3.selectedMessage.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r3.selectedMessage.from, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 10, ctx_r3.selectedMessage.date, "MMMM d"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Reply to: ", ctx_r3.selectedMessage.email, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("label label-", ctx_r3.selectedMessage.type, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.selectedMessage.tag);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.selectedMessage.subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r3.selectedMessage.body, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          "side-panel-opened": a0,
          "side-panel-closed": a1
        };
      };

      var _DialogDataExampleDialogComponent = function _DialogDataExampleDialogComponent(data) {
        _classCallCheck(this, _DialogDataExampleDialogComponent);

        this.data = data;
      };

      _DialogDataExampleDialogComponent.ɵfac = function DialogDataExampleDialogComponent_Factory(t) {
        return new (t || _DialogDataExampleDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
      };

      _DialogDataExampleDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _DialogDataExampleDialogComponent,
        selectors: [["app-dialog-data-example-dialog"]],
        decls: 17,
        vars: 3,
        consts: [[1, "m-t-0"], [1, "basic-form"], ["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["matInput", "", "placeholder", "To", "type", "email"], ["matInput", "", "placeholder", "Subject", "type", "text"], ["fxFlex.gt-sm", "100", "fxFlex", "100", 1, "m-t-20"], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"]],
        template: function DialogDataExampleDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Compose Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "quill-editor");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Send");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Save as a Draft");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, ngx_quill__WEBPACK_IMPORTED_MODULE_6__.QuillEditorComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton],
        encapsulation: 2
      });

      var _MailComponent = /*#__PURE__*/function () {
        function _MailComponent(mailService, dialog) {
          _classCallCheck(this, _MailComponent);

          this.mailService = mailService;
          this.dialog = dialog;
          this.mediaMatcher = matchMedia("(max-width: 960px)");
          this.config = {};
          this.displayMode = 'default';
          this.messageOpen = false;
          this.sidePanelOpened = true;
        }

        _createClass(_MailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getMessages();
          }
        }, {
          key: "isOver",
          value: function isOver() {
            return this.mediaMatcher.matches;
          }
        }, {
          key: "getMessages",
          value: function getMessages() {
            var _this28 = this;

            this.mailService.getMessages().then(function (messages) {
              _this28.messages = messages;
              _this28.selectedMessage = _this28.messages[1];
            });
          }
        }, {
          key: "onSelect",
          value: function onSelect(message) {
            this.selectedMessage = message;
          } // Compose button

        }, {
          key: "openDialog",
          value: function openDialog() {
            var dialogRef = this.dialog.open(_DialogDataExampleDialogComponent, {});
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }]);

        return _MailComponent;
      }();

      _MailComponent.ɵfac = function MailComponent_Factory(t) {
        return new (t || _MailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog));
      };

      _MailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MailComponent,
        selectors: [["app-mail"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService])],
        decls: 19,
        vars: 10,
        consts: [[1, "bg-success", "text-white"], ["mat-icon-button", "", 3, "click"], [1, "email-box", 3, "ngClass"], [1, "email-sidebar", 3, "mode", "opened", "perfectScrollbar", "disabled", "open", "close"], ["mailnav", ""], [3, "selected", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center start", 1, "main-content"], ["mailcontent", ""], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "messages-list"], ["class", "card-body", 4, "ngIf"], ["mat-fab", "", "color", "warn", 1, "bottom-right", 3, "click"], [1, "mat-24"], [3, "click"], [1, "d-flex"], [1, "icon-avatar"], ["alt", "", "class", "avatar", 3, "src", 4, "ngIf"], ["class", "avatar", 3, "ngClass", 4, "ngIf"], ["fxShow", "false", "fxShow.gt-xs", "", 1, "mail-title", 2, "min-width", "120px"], [1, "text-ellipsis"], ["fxShow", "false", "fxShow.gt-sm", "", 1, "pl-1", "text-xs-right", "text-ellipsis", "hide-on-open"], [1, "text-xs-muted"], ["alt", "", 1, "avatar", 3, "src"], [1, "avatar", 3, "ngClass"], [1, "card-body"], [1, "email-right-panel"], [1, "d-flex", "align-items-center", "m-b-30"], [1, "avatar-detail"], ["alt", "", 1, "avatar-lg", "rounded-circle", 3, "src"], [1, "p-l-20"], [1, "font-medium"], [1, "font-14"], [1, "lead", "mt-0", "m-b-30"], [3, "innerHtml"], ["mat-raised-button", "", "mat-button-sm", "", "color", "primary", 1, "mx-xs"], ["mat-raised-button", "", "mat-button-sm", "", "color", "accent", 1, "mx-xs"], ["mat-raised-button", "", "mat-button-sm", "", 1, "mx-xs"]],
        template: function MailComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MailComponent_Template_button_click_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Inbox ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-sidenav-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-sidenav", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("open", function MailComponent_Template_mat_sidenav_open_9_listener() {
              return ctx.sidePanelOpened = true;
            })("close", function MailComponent_Template_mat_sidenav_close_9_listener() {
              return ctx.sidePanelOpened = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MailComponent_div_11_Template, 17, 10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MailComponent_div_15_Template, 26, 13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MailComponent_Template_button_click_16_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "create");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c1, ctx.sidePanelOpened, !ctx.sidePanelOpened));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.isOver() ? "over" : "side")("opened", !ctx.isOver())("perfectScrollbar", ctx.config)("disabled", ctx.isOver());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messages);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedMessage);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContainer, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenav, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultShowHideDirective, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanelActionRow],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
        styles: ["[_nghost-%COMP%] {\n  margin: -6px -5px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFBRiIsImZpbGUiOiJtYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCB7XG4gIG1hcmdpbjogLTZweCAtNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuIl19 */"]
      });
      /***/
    },

    /***/
    25002:
    /*!*******************************************!*\
      !*** ./src/app/apps/mail/mail.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MailService": function MailService() {
          return (
            /* binding */
            _MailService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _mock_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mock-messages */
      78716);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      74788);

      var _MailService = /*#__PURE__*/function () {
        function _MailService() {
          _classCallCheck(this, _MailService);
        }

        _createClass(_MailService, [{
          key: "getMessages",
          value: function getMessages() {
            return Promise.resolve(_mock_messages__WEBPACK_IMPORTED_MODULE_0__.MESSAGES);
          }
        }]);

        return _MailService;
      }();

      _MailService.ɵfac = function MailService_Factory(t) {
        return new (t || _MailService)();
      };

      _MailService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _MailService,
        factory: _MailService.ɵfac
      });
      /***/
    },

    /***/
    78716:
    /*!********************************************!*\
      !*** ./src/app/apps/mail/mock-messages.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MESSAGES": function MESSAGES() {
          return (
            /* binding */
            _MESSAGES
          );
        }
        /* harmony export */

      });
      /* tslint:disable:max-line-length */


      var _MESSAGES = [{
        from: 'Nirav Joshi',
        email: 'info@wrappixel.com',
        date: 1527207139000,
        subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
        avatar: 'assets/images/users/2.jpg',
        icon: 'group',
        iconClass: 'mat-text-primary',
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>  <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n   <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Personal',
        type: 'danger',
        important: true,
        id: 1
      }, {
        from: 'Sunil Joshi',
        email: 'suniljoshi19@gmail.com',
        date: 1527412725000,
        subject: 'Download the freebies from the site wrappixel.com all the admin template for free',
        avatar: 'assets/images/users/1.jpg',
        icon: 'local_offer',
        iconClass: 'mat-text-warn',
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>\n\n        <blockquote>\n            <i>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n </blockquote> <div class="row"><div class="col-md-2"><a href="#"> <img class="img-thumbnail img-responsive" alt="attachment" src="assets/images/big/img1.jpg"> </a></div><div class="col-md-2"> <a href="#"> <img class="img-thumbnail img-responsive" alt="attachment" src="assets/images/big/img2.jpg"> </a> </div> <div class="col-md-2"> <a href="#"> <img class="img-thumbnail img-responsive" alt="attachment" src="assets/images/big/img3.jpg"> </a> </div>',
        tag: 'Personal',
        type: 'success',
        important: false,
        id: 2
      }, {
        from: 'Vishal bhatt',
        email: 'info@vishal.com',
        date: 1527546580000,
        subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
        avatar: 'assets/images/users/3.jpg',
        icon: 'info',
        iconClass: 'mat-text-accent',
        body: '<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>\n\n        <blockquote>\n            <i>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n </blockquote> <div class="row"><div class="col-md-2"><a href="#"> <img class="img-thumbnail img-responsive" alt="attachment" src="assets/images/big/img1.jpg"> </a></div><div class="col-md-2"> <a href="#"> <img class="img-thumbnail img-responsive" alt="attachment" src="assets/images/big/img2.jpg"> </a> </div> <div class="col-md-2"> <a href="#"> <img class="img-thumbnail img-responsive" alt="attachment" src="assets/images/big/img3.jpg"> </a> </div>',
        tag: 'Clients',
        type: 'info',
        important: false,
        id: 3
      }, {
        from: 'Hrithik roshan',
        email: 'info@hrithik.com',
        date: 1527891640000,
        subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
        avatar: 'assets/images/users/4.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Family',
        type: 'warning',
        important: true,
        id: 4
      }, {
        from: 'Genelia Deshmukh',
        email: 'info@genelia.com',
        date: 1528275520000,
        subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
        avatar: 'assets/images/users/5.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Friends',
        type: 'info',
        important: false,
        id: 5
      }, {
        from: 'Angelina Jolie',
        email: 'info@angelina.com',
        date: 1528830580000,
        subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
        avatar: 'assets/images/users/6.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Personal',
        type: 'success',
        important: false,
        id: 6
      }, {
        from: 'Govinda sumoy',
        email: 'info@genelia.com',
        date: 1529363920000,
        subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
        avatar: 'assets/images/users/1.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Personal',
        type: 'none',
        important: false,
        id: 7
      }, {
        from: 'Jonathan Deo',
        email: 'info@genelia.com',
        date: 1530274720000,
        subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
        avatar: 'assets/images/users/2.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Clients',
        type: 'none',
        important: false,
        id: 8
      }, {
        from: 'Sweety Shurty',
        email: 'info@genelia.com',
        date: 1531293520000,
        subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
        avatar: 'assets/images/users/3.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Family',
        type: 'success',
        important: false,
        id: 9
      }, {
        from: 'Kriti sanon',
        email: 'info@genelia.com',
        date: 1533115240000,
        subject: 'This is the simple subject line, your subject will be apear here. Aenean commodo ligula eget dolor',
        avatar: 'assets/images/users/4.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Friends',
        type: 'info',
        important: true,
        id: 10
      }];
      /***/
    },

    /***/
    99048:
    /*!*******************************************************!*\
      !*** ./src/app/apps/taskboard/taskboard.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TaskboardComponent": function TaskboardComponent() {
          return (
            /* binding */
            _TaskboardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      74788);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      7639);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      12057);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      88030);
      /* harmony import */


      var ng2_dragula__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-dragula */
      88989);

      function TaskboardComponent_div_3_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var task_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", task_r3["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r3.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r3.description);
        }
      }

      function TaskboardComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskboardComponent_div_3_div_6_Template, 5, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var board_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", board_r1["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](board_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dragula", "task-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", board_r1.tasks);
        }
      }

      var _TaskboardComponent = function _TaskboardComponent() {
        _classCallCheck(this, _TaskboardComponent);

        this.taskboard = [{
          title: 'To Dos',
          "class": 'todos',
          tasks: [{
            title: 'Launch new template',
            description: 'Integer posuere erat a ante venenatis dapibus posuere.'
          }, {
            title: 'Book a Ticket',
            description: 'Blandit tempus porttitor aasfs.'
          }, {
            title: 'Task review',
            description: 'Lorem Ipsum, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            "class": 'task-status-info'
          }]
        }, {
          title: 'In Progress',
          "class": 'inprogress',
          tasks: [{
            title: 'Website Design',
            description: 'Integer posuere erat a ante venenatis dapibus posuere.'
          }, {
            title: 'Angular 5 material',
            description: 'Lorem Ipsum, dapibus ac facilisis in, egestas eget quam. Integer posuere erat aassg.',
            "class": 'task-status-danger'
          }, {
            title: 'Horizontal Layoutbug',
            description: 'Lorem Ipsum, dapibus ac facilisis in',
            "class": 'task-status-info'
          }, {
            title: 'Error --prod',
            description: 'Lorem Ipsum, dapibus ac facilisis.'
          }, {
            title: 'Update to angular5',
            description: 'Dapibus ac facilisis in, egestas eget quam. Integer posuere erat aassg.'
          }, {
            title: 'Give quatation',
            description: 'Commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
            "class": 'task-status-warning'
          }]
        }, {
          title: 'Completed',
          "class": 'completed',
          tasks: [{
            title: 'Design work',
            description: 'Commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
          }, {
            title: 'Meeting with team',
            description: 'Dapibus ac facilisis in, egestas eget quam.',
            "class": 'task-status-success'
          }, {
            title: 'Material Pro angular',
            description: 'We have finished working on MaterialPro'
          }, {
            title: 'Admin wrap converted',
            description: 'We have finished working.'
          }, {
            title: 'Learning Angular 5',
            description: 'Task is now completed to learn angular5',
            "class": 'task-status-success'
          }]
        }, {
          title: 'On Hold',
          "class": 'onhold',
          tasks: [{
            title: 'Ugrate to bootsrap 4 beta',
            description: 'Its panding in all template to update'
          }, {
            title: 'Required more plugins',
            description: 'Client require more plugins to add.'
          }, {
            title: 'Communication with client',
            description: 'They want to design like minimal way',
            "class": 'task-status-danger'
          }, {
            title: 'Use gradiant or not',
            description: 'Need approval on whether use gradiant or make it plain'
          }, {
            title: 'Give review on the product',
            description: 'Commodo luctus, nisi erat porttitor lig.',
            "class": 'task-status-danger'
          }]
        }];
      };

      _TaskboardComponent.ɵfac = function TaskboardComponent_Factory(t) {
        return new (t || _TaskboardComponent)();
      };

      _TaskboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TaskboardComponent,
        selectors: [["app-taskboard"]],
        decls: 4,
        vars: 1,
        consts: [[1, "taskboard", "page-height"], ["class", "taskboard-wrapper", 4, "ngFor", "ngForOf"], [1, "taskboard-wrapper"], [1, "taskboard-list", 3, "ngClass"], [1, "taskboard-header", "text-uppercase"], [1, "taskboard-cards", 3, "dragula"], ["class", "taskboard-task", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "taskboard-task", 3, "ngClass"], [1, "taskboard-task-title"], [1, "task-decription"]],
        template: function TaskboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskboardComponent_div_3_Template, 7, 4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.taskboard);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultClassDirective, ng2_dragula__WEBPACK_IMPORTED_MODULE_4__.DragulaDirective],
      });
      /***/
    },

    /***/
    19806:
    /*!***********************************************************************!*\
      !*** ./node_modules/angular-calendar/node_modules/tslib/tslib.es6.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "__extends": function __extends() {
          return (
            /* binding */
            _extends
          );
        },

        /* harmony export */
        "__assign": function __assign() {
          return (
            /* binding */
            _assign2
          );
        },

        /* harmony export */
        "__rest": function __rest() {
          return (
            /* binding */
            _rest
          );
        },

        /* harmony export */
        "__decorate": function __decorate() {
          return (
            /* binding */
            _decorate
          );
        },

        /* harmony export */
        "__param": function __param() {
          return (
            /* binding */
            _param
          );
        },

        /* harmony export */
        "__metadata": function __metadata() {
          return (
            /* binding */
            _metadata
          );
        },

        /* harmony export */
        "__awaiter": function __awaiter() {
          return (
            /* binding */
            _awaiter
          );
        },

        /* harmony export */
        "__generator": function __generator() {
          return (
            /* binding */
            _generator
          );
        },

        /* harmony export */
        "__createBinding": function __createBinding() {
          return (
            /* binding */
            _createBinding
          );
        },

        /* harmony export */
        "__exportStar": function __exportStar() {
          return (
            /* binding */
            _exportStar
          );
        },

        /* harmony export */
        "__values": function __values() {
          return (
            /* binding */
            _values
          );
        },

        /* harmony export */
        "__read": function __read() {
          return (
            /* binding */
            _read
          );
        },

        /* harmony export */
        "__spread": function __spread() {
          return (
            /* binding */
            _spread
          );
        },

        /* harmony export */
        "__spreadArrays": function __spreadArrays() {
          return (
            /* binding */
            _spreadArrays
          );
        },

        /* harmony export */
        "__await": function __await() {
          return (
            /* binding */
            _await
          );
        },

        /* harmony export */
        "__asyncGenerator": function __asyncGenerator() {
          return (
            /* binding */
            _asyncGenerator
          );
        },

        /* harmony export */
        "__asyncDelegator": function __asyncDelegator() {
          return (
            /* binding */
            _asyncDelegator
          );
        },

        /* harmony export */
        "__asyncValues": function __asyncValues() {
          return (
            /* binding */
            _asyncValues
          );
        },

        /* harmony export */
        "__makeTemplateObject": function __makeTemplateObject() {
          return (
            /* binding */
            _makeTemplateObject
          );
        },

        /* harmony export */
        "__importStar": function __importStar() {
          return (
            /* binding */
            _importStar
          );
        },

        /* harmony export */
        "__importDefault": function __importDefault() {
          return (
            /* binding */
            _importDefault
          );
        },

        /* harmony export */
        "__classPrivateFieldGet": function __classPrivateFieldGet() {
          return (
            /* binding */
            _classPrivateFieldGet
          );
        },

        /* harmony export */
        "__classPrivateFieldSet": function __classPrivateFieldSet() {
          return (
            /* binding */
            _classPrivateFieldSet
          );
        }
        /* harmony export */

      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function _extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign2 = function _assign() {
        _assign2 = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign2.apply(this, arguments);
      };

      function _rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function _decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function _param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function _metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function _awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function _generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      function _createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      }

      function _exportStar(m, exports) {
        for (var p in m) {
          if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      function _values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function _read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }

      function _spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(_read(arguments[i]));
        }

        return ar;
      }

      function _spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      ;

      function _await(v) {
        return this instanceof _await ? (this.v = v, this) : new _await(v);
      }

      function _asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof _await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function _asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: _await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function _asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof _values === "function" ? _values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function _makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      function _importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      }

      function _importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function _classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        return privateMap.get(receiver);
      }

      function _classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        privateMap.set(receiver, value);
        return value;
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_apps_apps_module_ts-es5.js.map