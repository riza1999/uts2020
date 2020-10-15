(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActive5da929d4Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-92848855.js */
      "./node_modules/@ionic/core/dist/esm/index-92848855.js");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmTheme5641d27fJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./src/app/electro.service.ts":
    /*!************************************!*\
      !*** ./src/app/electro.service.ts ***!
      \************************************/

    /*! exports provided: ElectoService */

    /***/
    function srcAppElectroServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElectoService", function () {
        return ElectoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ElectoService = /*#__PURE__*/function () {
        function ElectoService() {
          _classCallCheck(this, ElectoService);

          this.ctr = 9;
          this.allItem = [];
          this.ram = [{
            id: 1,
            name: 'Trident Z 4GB',
            brand: 'G-Skill',
            photoURL: 'https://ecs7.tokopedia.net/img/cache/700/attachment/2019/3/19/155297857433364/155297857433364_5a0d03d4-0dc3-45f0-8531-a717422ce69f.png',
            price: 1000,
            stock: 10,
            speed: 2666,
            size: 'Long Dimm',
            type: 'RAM'
          }, {
            id: 2,
            name: 'Value series 4GB',
            brand: 'KLEVV',
            photoURL: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/7/19/13757756/13757756_f56f6e28-01ed-49fe-874a-db7de652e6eb_700_394.jpg',
            price: 100,
            stock: 10,
            speed: 2666,
            size: 'Long Dimm',
            type: 'RAM'
          }];
          this.gpu = [{
            id: 3,
            name: 'RTX 3080',
            brand: 'Asus',
            photoURL: 'https://www.asus.com/media/global/products/0tsjxhfskwlqwzsg/P_setting_fff_1_90_end_600.png',
            price: 1000,
            stock: 10,
            type: 'GPU'
          }, {
            id: 4,
            name: 'RX 5500 XT',
            brand: 'Galax',
            photoURL: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//104/MTA-5369945/galax_galax_geforce_gtx_1650_4gb_ddr5_-1-click_oc-_-_dual_fan_-_garansi_2_th_full02_pn54l3a3.jpg',
            price: 100,
            stock: 10,
            type: 'GPU'
          }];
          this.cpu = [{
            id: 5,
            name: 'I9 9900K',
            brand: 'Intel',
            photoURL: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//90/MTA-3412872/intel_intel-core-i9-9900k-desktop-processor-_full02.jpg',
            price: 1100,
            stock: 0,
            type: 'CPU',
            baseclock: 3.8,
            boostclock: 4.2,
            core: 8,
            thread: 24
          }, {
            id: 6,
            name: 'Ryzen 5 3600x',
            brand: 'AMD',
            photoURL: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/7/12/9126088/9126088_acfb8bf5-e049-44b7-b904-5eaa6f90c66d_700_700',
            price: 350,
            stock: 2,
            type: 'CPU',
            baseclock: 3.6,
            boostclock: 4.0,
            core: 8,
            thread: 16
          }];
          this.motherboard = [{
            id: 7,
            name: 'B550-M Mortar',
            brand: 'MSI',
            photoURL: 'https://images.anandtech.com/doci/15850/MSI%20MAG%20B550%20Mortar%20Wifi%20Motherboard.jpg',
            price: 200,
            stock: 3,
            type: 'Motherboard',
            chipset: 'b550',
            forProc: 'AMD'
          }, {
            id: 8,
            name: 'Z310',
            brand: 'ASUS',
            photoURL: 'https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-038-V01.jpg',
            price: 200,
            stock: 3,
            type: 'Motherboard',
            chipset: 'Z310',
            forProc: 'Intel'
          }];
        }

        _createClass(ElectoService, [{
          key: "getAllItem",
          value: function getAllItem() {
            var _this = this;

            this.allItem.length = 0;
            this.ram.forEach(function (element) {
              _this.allItem.push(element);
            });
            this.gpu.forEach(function (element) {
              _this.allItem.push(element);
            });
            this.cpu.forEach(function (element) {
              _this.allItem.push(element);
            });
            this.motherboard.forEach(function (element) {
              _this.allItem.push(element);
            });
            return _toConsumableArray(this.allItem);
          }
        }, {
          key: "getItem",
          value: function getItem(itemId) {
            return Object.assign({}, this.allItem.find(function (item) {
              return item.id === itemId;
            }));
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(itemId) {
            this.ram = this.ram.filter(function (item) {
              return item.id !== itemId;
            });
            this.gpu = this.gpu.filter(function (item) {
              return item.id !== itemId;
            });
            this.cpu = this.cpu.filter(function (item) {
              return item.id !== itemId;
            });
            this.motherboard = this.motherboard.filter(function (item) {
              return item.id !== itemId;
            });
          }
        }, {
          key: "editGPU",
          value: function editGPU(itemID, GPUName, GPUPhoto, GPUModel, GPUPrice, GPUStock) {
            this.gpu.find(function (e) {
              if (e.id === itemID) {
                e.name = GPUModel;
                e.brand = GPUName;
                e.price = GPUPrice;
                e.photoURL = GPUPhoto;
                e.stock = GPUStock;
              }
            });
          }
        }, {
          key: "addGPU",
          value: function addGPU(GPUName, GPUPhoto, GPUModel, GPUPrice, GPUStock) {
            var newData = {
              id: this.ctr,
              name: GPUModel,
              brand: GPUName,
              photoURL: GPUPhoto,
              price: GPUPrice,
              stock: GPUStock,
              type: "GPU"
            };
            this.ctr++;
            this.gpu.push(newData);
          }
        }, {
          key: "editCPU",
          value: function editCPU(itemID, CPUName, CPUPhoto, CPUModel, CPUPrice, CPUStock, CPUBaseclock, CPUBoostclock, CPUCore, CPUThread) {
            this.cpu.find(function (e) {
              if (e.id === itemID) {
                e.name = CPUModel;
                e.brand = CPUName;
                e.price = CPUPrice;
                e.photoURL = CPUPhoto;
                e.stock = CPUStock;
                e.baseclock = CPUBaseclock;
                e.boostclock = CPUBoostclock;
                e.core = CPUCore;
                e.thread = CPUThread;
              }
            });
          }
        }, {
          key: "addCPU",
          value: function addCPU(CPUName, CPUPhoto, CPUModel, CPUPrice, CPUStock, CPUBaseclock, CPUBoostclock, CPUCore, CPUThread) {
            var newData = {
              id: this.ctr,
              name: CPUModel,
              brand: CPUName,
              photoURL: CPUPhoto,
              price: CPUPrice,
              stock: CPUStock,
              type: "CPU",
              baseclock: CPUBaseclock,
              boostclock: CPUBoostclock,
              core: CPUCore,
              thread: CPUThread
            };
            this.ctr++;
            this.cpu.push(newData);
          }
        }, {
          key: "editRAM",
          value: function editRAM(itemID, RAMName, RAMPhoto, RAMModel, RAMPrice, RAMStock, RAMSpeed, RAMSize) {
            this.ram.find(function (e) {
              if (e.id === itemID) {
                e.name = RAMModel;
                e.brand = RAMName;
                e.price = RAMPrice;
                e.photoURL = RAMPhoto;
                e.stock = RAMStock;
                e.speed = RAMSpeed;
                e.size = RAMSize;
              }
            });
          }
        }, {
          key: "addRAM",
          value: function addRAM(RAMName, RAMPhoto, RAMModel, RAMPrice, RAMStock, RAMSpeed, RAMSize) {
            var newData = {
              id: this.ctr,
              name: RAMModel,
              brand: RAMName,
              photoURL: RAMPhoto,
              price: RAMPrice,
              stock: RAMStock,
              type: "RAM",
              speed: RAMSpeed,
              size: RAMSize
            };
            this.ctr++;
            this.ram.push(newData);
          }
        }, {
          key: "editMotherboard",
          value: function editMotherboard(itemID, MBName, MBPhoto, MBModel, MBPrice, MBStock, MBChipset, MBForProc) {
            this.motherboard.find(function (e) {
              if (e.id === itemID) {
                e.name = MBModel;
                e.brand = MBName;
                e.price = MBPrice;
                e.photoURL = MBPhoto;
                e.stock = MBStock;
                e.chipset = MBChipset;
                e.forProc = MBForProc;
              }
            });
          }
        }, {
          key: "addMotherboard",
          value: function addMotherboard(MBName, MBPhoto, MBModel, MBPrice, MBStock, MBChipset, MBForProc) {
            var newData = {
              id: this.ctr,
              name: MBModel,
              brand: MBName,
              photoURL: MBPhoto,
              price: MBPrice,
              stock: MBStock,
              type: "Motherboard",
              forProc: MBForProc,
              chipset: MBChipset
            };
            this.ctr++;
            this.motherboard.push(newData);
          }
        }]);

        return ElectoService;
      }();

      ElectoService.ctorParameters = function () {
        return [];
      };

      ElectoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ElectoService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map