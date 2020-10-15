(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/detail/detail.page.html":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/detail/detail.page.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeDetailDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col><ion-img src=\"{{loadedItem.photoURL}}\"></ion-img></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h1>{{loadedItem.brand}} {{loadedItem.name}}</h1>\n        <h5>${{loadedItem.price}}</h5>\n        <p>Stock :{{loadedItem.stock}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"info\" [ngClass]=\"loadedItem.type == 'GPU' ? '' : 'show'\">\n      <ion-col>\n        <p>Tentang produk</p>\n        <ion-list class=\"info\" [ngClass]=\"loadedItem.type == 'RAM' ? 'show' : ''\">\n          <ion-item>\n            Size : {{loadedItem.size}}\n          </ion-item>\n          <ion-item>\n            Speed : {{loadedItem.speed}}\n          </ion-item>\n        </ion-list>\n        <ion-list class=\"info\" [ngClass]=\"loadedItem.type == 'CPU' ? 'show' : ''\">\n          <ion-item>\n            Baseclock : {{loadedItem.baseclock}} Ghz\n          </ion-item>\n          <ion-item>\n            Boostclock : {{loadedItem.boostclock}} Ghz\n          </ion-item>\n          <ion-item>\n            Core : {{loadedItem.core}}\n          </ion-item>\n          <ion-item>\n            Thread : {{loadedItem.thread}}\n          </ion-item>\n        </ion-list>\n        <ion-list class=\"info\" [ngClass]=\"loadedItem.type == 'Motherboard' ? 'show' : ''\">\n          <ion-item>\n            Chipset : {{loadedItem.chipset}}\n          </ion-item>\n          <ion-item>\n            For Processor : {{loadedItem.forProc}}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/home/detail/detail-routing.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/home/detail/detail-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: DetailPageRoutingModule */

    /***/
    function srcAppHomeDetailDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function () {
        return DetailPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detail.page */
      "./src/app/home/detail/detail.page.ts");

      var routes = [{
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
      }];

      var DetailPageRoutingModule = function DetailPageRoutingModule() {
        _classCallCheck(this, DetailPageRoutingModule);
      };

      DetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/detail/detail.module.ts":
    /*!**********************************************!*\
      !*** ./src/app/home/detail/detail.module.ts ***!
      \**********************************************/

    /*! exports provided: DetailPageModule */

    /***/
    function srcAppHomeDetailDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailPageModule", function () {
        return DetailPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./detail-routing.module */
      "./src/app/home/detail/detail-routing.module.ts");
      /* harmony import */


      var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detail.page */
      "./src/app/home/detail/detail.page.ts");

      var DetailPageModule = function DetailPageModule() {
        _classCallCheck(this, DetailPageModule);
      };

      DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"]],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
      })], DetailPageModule);
      /***/
    },

    /***/
    "./src/app/home/detail/detail.page.scss":
    /*!**********************************************!*\
      !*** ./src/app/home/detail/detail.page.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeDetailDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".info.show {\n  display: block;\n}\n\n.info {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby5zaG93e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmluZm97XG4gICAgZGlzcGxheTogbm9uZTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/home/detail/detail.page.ts":
    /*!********************************************!*\
      !*** ./src/app/home/detail/detail.page.ts ***!
      \********************************************/

    /*! exports provided: DetailPage */

    /***/
    function srcAppHomeDetailDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailPage", function () {
        return DetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_electro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/electro.service */
      "./src/app/electro.service.ts");

      var DetailPage = /*#__PURE__*/function () {
        function DetailPage(activatedRoute, electroService) {
          _classCallCheck(this, DetailPage);

          this.activatedRoute = activatedRoute;
          this.electroService = electroService;
        }

        _createClass(DetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('itemId')) {
                return;
              }

              var itemId = parseInt(paramMap.get('itemId'));
              _this.loadedItem = _this.electroService.getItem(itemId);
            });
          }
        }]);

        return DetailPage;
      }();

      DetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_electro_service__WEBPACK_IMPORTED_MODULE_3__["ElectoService"]
        }];
      };

      DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/detail/detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./detail.page.scss */
        "./src/app/home/detail/detail.page.scss"))["default"]]
      })], DetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=detail-detail-module-es5.js.map