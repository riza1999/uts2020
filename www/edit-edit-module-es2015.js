(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit/edit.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit/edit.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/admin\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Produk</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">URL Foto</ion-label>\n        <ion-input type=\"url\" [(ngModel)]=\"loadedItem.photoURL\" name=\"photoURL\" #photoURLCtrl=\"ngModel\" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Nama brand</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"loadedItem.brand\" name=\"brand\" #nameCtrl=\"ngModel\" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Model</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"loadedItem.name\" name=\"model\" #brandCtrl=\"ngModel\" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Harga</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"loadedItem.price\" name=\"price\" #priceCtrl=\"ngModel\" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Stock</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"loadedItem.stock\" name=\"stock\" #stockCtrl=\"ngModel\" required></ion-input>\n      </ion-item>\n    </ion-list>\n    <p class=\"ion-padding\" style=\"padding-bottom: 6px;\" [ngClass]=\"loadedItem.type ? (loadedItem.type != 'GPU' ? '' : 'ion-hide') : 'ion-hide'\">Detail produk</p>\n    <ion-list [ngClass]=\"loadedItem.type == 'RAM' ? '' : 'ion-hide'\">\n      <ion-item>\n        <ion-label position=\"floating\">Speed</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"loadedItem.speed\" name=\"speed\" #speedCtrl=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Size</ion-label>\n        <ion-select [(ngModel)]=\"loadedItem.size\" name=\"size\" #sizeCtrl=\"ngModel\">\n          <ion-select-option value=\"Long Dimm\">Long Dimm</ion-select-option>\n          <ion-select-option value=\"Short Dimm\">Short Dimm</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-list [ngClass]=\"loadedItem.type == 'CPU' ? '' : 'ion-hide'\">\n      <ion-item>\n        <ion-label position=\"floating\">Baseclock</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"loadedItem.baseclock\" name=\"baseclock\" #baseclockCtrl=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Boostclock</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"loadedItem.boostclock\" name=\"boostclock\" #boostclockCtrl=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Core</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"loadedItem.core\" name=\"core\" #coreCtrl=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Thread</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"loadedItem.thread\" name=\"thread\" #threadCtrl=\"ngModel\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-list [ngClass]=\"loadedItem.type == 'Motherboard' ? '' : 'ion-hide'\">\n      <ion-item>\n        <ion-label position=\"floating\">Chipset</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"loadedItem.chipset\" name=\"chipset\" #chipsetCtrl=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">For Processor</ion-label>\n        <ion-select [(ngModel)]=\"loadedItem.forProc\"name=\"forProc\" #forProcCtrl=\"ngModel\">\n          <ion-select-option value=\"Intel\">Intel</ion-select-option>\n          <ion-select-option value=\"AMD\">AMD</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-button type=\"submit\" color=\"primary\" expand=\"block\">\n      Edit\n    </ion-button>\n  </form>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/admin/edit/edit-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/edit/edit-routing.module.ts ***!
  \***************************************************/
/*! exports provided: EditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageRoutingModule", function() { return EditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.page */ "./src/app/admin/edit/edit.page.ts");




const routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_3__["EditPage"]
    }
];
let EditPageRoutingModule = class EditPageRoutingModule {
};
EditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditPageRoutingModule);



/***/ }),

/***/ "./src/app/admin/edit/edit.module.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/edit/edit.module.ts ***!
  \*******************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-routing.module */ "./src/app/admin/edit/edit-routing.module.ts");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/admin/edit/edit.page.ts");







let EditPageModule = class EditPageModule {
};
EditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPageRoutingModule"]
        ],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
    })
], EditPageModule);



/***/ }),

/***/ "./src/app/admin/edit/edit.page.scss":
/*!*******************************************!*\
  !*** ./src/app/admin/edit/edit.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQvZWRpdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/edit/edit.page.ts":
/*!*****************************************!*\
  !*** ./src/app/admin/edit/edit.page.ts ***!
  \*****************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_electro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/electro.service */ "./src/app/electro.service.ts");





let EditPage = class EditPage {
    constructor(activatedRoute, electroService, router, toastCtrl) {
        this.activatedRoute = activatedRoute;
        this.electroService = electroService;
        this.router = router;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('itemId')) {
                return;
            }
            const itemId = parseInt(paramMap.get('itemId'));
            this.loadedItem = this.electroService.getItem(itemId);
        });
    }
    onSubmit(form) {
        console.log(form);
        if (this.loadedItem.type == "GPU") {
            this.electroService.editGPU(this.loadedItem.id, form.value.brand, form.value.photoURL, form.value.model, form.value.price, form.value.stock);
            this.showAlertSucces();
        }
        else if (this.loadedItem.type == "CPU") {
            this.electroService.editCPU(this.loadedItem.id, form.value.brand, form.value.photoURL, form.value.model, form.value.price, form.value.stock, form.value.baseclock, form.value.boostclock, form.value.core, form.value.thread);
            this.showAlertSucces();
        }
        else if (this.loadedItem.type == "RAM") {
            this.electroService.editRAM(this.loadedItem.id, form.value.brand, form.value.photoURL, form.value.model, form.value.price, form.value.stock, form.value.speed, form.value.size);
            this.showAlertSucces();
        }
        else if (this.loadedItem.type == "Motherboard") {
            this.electroService.editMotherboard(this.loadedItem.id, form.value.brand, form.value.photoURL, form.value.model, form.value.price, form.value.stock, form.value.chipset, form.value.forProc);
            this.showAlertSucces();
        }
    }
    showAlertSucces() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Item Edited',
                color: 'primary',
                duration: 2000
            });
            toast.present();
            this.router.navigate(['/', 'admin']);
        });
    }
};
EditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_electro_service__WEBPACK_IMPORTED_MODULE_4__["ElectoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
EditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit/edit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit.page.scss */ "./src/app/admin/edit/edit.page.scss")).default]
    })
], EditPage);



/***/ })

}]);
//# sourceMappingURL=edit-edit-module-es2015.js.map