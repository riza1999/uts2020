(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"elecMenu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Admin</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button [routerLink]=\"['./add-item']\"><ion-icon name=\"add-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let e of itemList\" class=\"item\" #slidingItem>\n            <ion-item [routerLink]=\"['./', e.id]\">\n              <ion-thumbnail slot=\"start\">\n                <img src=\"{{e.photoURL}}\" />\n              </ion-thumbnail>\n              <ion-label>\n                <h4>{{e.brand}} {{e.name}}</h4>\n                <p>Price : ${{e.price}}</p>\n                <p>Stock : {{e.stock}}</p>\n              </ion-label>\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <ion-item-option [routerLink]=\"['./', e.id]\" (click)=\"onEdit(e, slidingItem)\"><ion-icon size=\"large\" name=\"build-outline\"></ion-icon></ion-item-option>\n            </ion-item-options>\n        \n            <ion-item-options side=\"end\">\n              <ion-item-option color=\"danger\" (click)=\"presentAlert(e, slidingItem)\"><ion-icon size=\"large\" name=\"trash-outline\"></ion-icon></ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageRoutingModule", function() { return AdminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.page */ "./src/app/admin/admin.page.ts");




const routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_3__["AdminPage"]
    },
    {
        path: 'add-item',
        loadChildren: () => __webpack_require__.e(/*! import() | add-item-add-item-module */ "add-item-add-item-module").then(__webpack_require__.bind(null, /*! ./add-item/add-item.module */ "./src/app/admin/add-item/add-item.module.ts")).then(m => m.AddItemPageModule)
    },
    {
        path: ':itemId',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-edit-module */ "edit-edit-module").then(__webpack_require__.bind(null, /*! ./edit/edit.module */ "./src/app/admin/edit/edit.module.ts")).then(m => m.EditPageModule)
    }
];
let AdminPageRoutingModule = class AdminPageRoutingModule {
};
AdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminPageRoutingModule);



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin.page */ "./src/app/admin/admin.page.ts");







let AdminPageModule = class AdminPageModule {
};
AdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminPageRoutingModule"]
        ],
        declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_6__["AdminPage"]]
    })
], AdminPageModule);



/***/ }),

/***/ "./src/app/admin/admin.page.scss":
/*!***************************************!*\
  !*** ./src/app/admin/admin.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/admin.page.ts":
/*!*************************************!*\
  !*** ./src/app/admin/admin.page.ts ***!
  \*************************************/
/*! exports provided: AdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPage", function() { return AdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _electro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../electro.service */ "./src/app/electro.service.ts");




let AdminPage = class AdminPage {
    constructor(electroService, alertCtrl, toastCtrl) {
        this.electroService = electroService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.itemList = this.electroService.getAllItem();
    }
    onEdit(item, slidingItem) {
        slidingItem.close();
    }
    onDelete(item, slidingItem) {
        slidingItem.close();
        this.electroService.deleteItem(item.id);
        this.itemList = this.electroService.getAllItem();
        this.toastItemDeleted();
    }
    presentAlert(item, slidingItem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            slidingItem.close();
            const alert = yield this.alertCtrl.create({
                header: 'Are you sure?',
                message: 'Do you really want to delete this item?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Delete',
                        handler: () => this.onDelete(item, slidingItem)
                    }
                ]
            });
            yield alert.present();
        });
    }
    toastItemDeleted() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Item deleted',
                color: 'danger',
                duration: 2000
            });
            toast.present();
        });
    }
};
AdminPage.ctorParameters = () => [
    { type: _electro_service__WEBPACK_IMPORTED_MODULE_3__["ElectoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
AdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin.page.scss */ "./src/app/admin/admin.page.scss")).default]
    })
], AdminPage);



/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map