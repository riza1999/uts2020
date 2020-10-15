(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-item-add-item-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-item/add-item.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-item/add-item.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/admin\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Tambah Produk</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">URL Foto</ion-label>\n        <ion-input type=\"url\" ngModel name=\"photoURL\" #photoURLCtrl=\"ngModel\" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Jenis</ion-label>\n        <ion-select ngModel name=\"type\" #typeCtrl=\"ngModel\" (ionChange)=\"onTypeChange(form)\" required>\n          <ion-select-option value=\"RAM\">RAM</ion-select-option>\n          <ion-select-option value=\"CPU\">CPU</ion-select-option>\n          <ion-select-option value=\"GPU\">GPU</ion-select-option>\n          <ion-select-option value=\"Motherboard\">Motherboard</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Nama brand</ion-label>\n        <ion-input type=\"text\" ngModel name=\"brand\" #nameCtrl=\"ngModel\" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Model</ion-label>\n        <ion-input type=\"text\" ngModel name=\"model\" #brandCtrl=\"ngModel\" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Harga</ion-label>\n        <ion-input type=\"number\" ngModel name=\"price\" #priceCtrl=\"ngModel\" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Stock</ion-label>\n        <ion-input type=\"number\" ngModel name=\"stock\" #stockCtrl=\"ngModel\" required></ion-input>\n      </ion-item>\n    </ion-list>\n    <p class=\"ion-padding\" style=\"padding-bottom: 6px;\" [ngClass]=\"type ? (type != 'GPU' ? '' : 'ion-hide') : 'ion-hide'\">Detail produk</p>\n    <ion-list [ngClass]=\"type == 'RAM' ? '' : 'ion-hide'\">\n      <ion-item>\n        <ion-label position=\"floating\">Speed</ion-label>\n        <ion-input type=\"number\" ngModel name=\"speed\" #speedCtrl=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Size</ion-label>\n        <ion-select ngModel name=\"size\" #sizeCtrl=\"ngModel\">\n          <ion-select-option value=\"Long Dimm\">Long Dimm</ion-select-option>\n          <ion-select-option value=\"Short Dimm\">Short Dimm</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-list [ngClass]=\"type == 'CPU' ? '' : 'ion-hide'\">\n      <ion-item>\n        <ion-label position=\"floating\">Baseclock</ion-label>\n        <ion-input type=\"number\" ngModel name=\"baseclock\" #baseclockCtrl=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Boostclock</ion-label>\n        <ion-input type=\"number\" ngModel name=\"boostclock\" #boostclockCtrl=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Core</ion-label>\n        <ion-input type=\"number\" ngModel name=\"core\" #coreCtrl=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Thread</ion-label>\n        <ion-input type=\"number\" ngModel name=\"thread\" #threadCtrl=\"ngModel\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-list [ngClass]=\"type == 'Motherboard' ? '' : 'ion-hide'\">\n      <ion-item>\n        <ion-label position=\"floating\">Chipset</ion-label>\n        <ion-input type=\"text\" ngModel name=\"chipset\" #chipsetCtrl=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">For Processor</ion-label>\n        <ion-select ngModel name=\"forProc\" #forProcCtrl=\"ngModel\">\n          <ion-select-option value=\"Intel\">Intel</ion-select-option>\n          <ion-select-option value=\"AMD\">AMD</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-button type=\"submit\" color=\"primary\" expand=\"block\">\n      Add\n    </ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/admin/add-item/add-item-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/add-item/add-item-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddItemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPageRoutingModule", function() { return AddItemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-item.page */ "./src/app/admin/add-item/add-item.page.ts");




const routes = [
    {
        path: '',
        component: _add_item_page__WEBPACK_IMPORTED_MODULE_3__["AddItemPage"]
    }
];
let AddItemPageRoutingModule = class AddItemPageRoutingModule {
};
AddItemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddItemPageRoutingModule);



/***/ }),

/***/ "./src/app/admin/add-item/add-item.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/add-item/add-item.module.ts ***!
  \***************************************************/
/*! exports provided: AddItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPageModule", function() { return AddItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-item-routing.module */ "./src/app/admin/add-item/add-item-routing.module.ts");
/* harmony import */ var _add_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-item.page */ "./src/app/admin/add-item/add-item.page.ts");







let AddItemPageModule = class AddItemPageModule {
};
AddItemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_item_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddItemPageRoutingModule"]
        ],
        declarations: [_add_item_page__WEBPACK_IMPORTED_MODULE_6__["AddItemPage"]]
    })
], AddItemPageModule);



/***/ }),

/***/ "./src/app/admin/add-item/add-item.page.scss":
/*!***************************************************!*\
  !*** ./src/app/admin/add-item/add-item.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZC1pdGVtL2FkZC1pdGVtLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/add-item/add-item.page.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/add-item/add-item.page.ts ***!
  \*************************************************/
/*! exports provided: AddItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPage", function() { return AddItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _electro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../electro.service */ "./src/app/electro.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let AddItemPage = class AddItemPage {
    constructor(electroService, router, toastCtrl) {
        this.electroService = electroService;
        this.router = router;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
    }
    onTypeChange(form) {
        this.type = form.value.type;
        console.log(this.type);
    }
    onSubmit(form) {
        if (form.value.type == "GPU") {
            this.electroService.addGPU(form.value.brand, form.value.photoURL, form.value.model, form.value.price, form.value.stock);
            this.showAlertSucces();
        }
        else if (form.value.type == "CPU") {
            this.electroService.addCPU(form.value.brand, form.value.photoURL, form.value.model, form.value.price, form.value.stock, form.value.baseclock, form.value.boostclock, form.value.core, form.value.thread);
            this.showAlertSucces();
        }
        else if (form.value.type == "RAM") {
            this.electroService.addRAM(form.value.brand, form.value.photoURL, form.value.model, form.value.price, form.value.stock, form.value.speed, form.value.size);
            this.showAlertSucces();
        }
        else if (form.value.type == "Motherboard") {
            this.electroService.addMotherboard(form.value.brand, form.value.photoURL, form.value.model, form.value.price, form.value.stock, form.value.chipset, form.value.forProc);
            this.showAlertSucces();
        }
    }
    showAlertSucces() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Item created',
                color: 'primary',
                duration: 2000
            });
            toast.present();
            this.router.navigate(['/', 'admin']);
        });
    }
};
AddItemPage.ctorParameters = () => [
    { type: _electro_service__WEBPACK_IMPORTED_MODULE_2__["ElectoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
AddItemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-item.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-item/add-item.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-item.page.scss */ "./src/app/admin/add-item/add-item.page.scss")).default]
    })
], AddItemPage);



/***/ })

}]);
//# sourceMappingURL=add-item-add-item-module-es2015.js.map