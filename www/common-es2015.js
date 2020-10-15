(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "./node_modules/@ionic/core/dist/esm/index-92848855.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
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
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
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
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
    return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "./src/app/electro.service.ts":
/*!************************************!*\
  !*** ./src/app/electro.service.ts ***!
  \************************************/
/*! exports provided: ElectoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectoService", function() { return ElectoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ElectoService = class ElectoService {
    constructor() {
        this.ctr = 9;
        this.allItem = [];
        this.ram = [
            {
                id: 1,
                name: 'Trident Z 4GB',
                brand: 'G-Skill',
                photoURL: 'https://ecs7.tokopedia.net/img/cache/700/attachment/2019/3/19/155297857433364/155297857433364_5a0d03d4-0dc3-45f0-8531-a717422ce69f.png',
                price: 1000,
                stock: 10,
                speed: 2666,
                size: 'Long Dimm',
                type: 'RAM'
            },
            {
                id: 2,
                name: 'Value series 4GB',
                brand: 'KLEVV',
                photoURL: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/7/19/13757756/13757756_f56f6e28-01ed-49fe-874a-db7de652e6eb_700_394.jpg',
                price: 100,
                stock: 10,
                speed: 2666,
                size: 'Long Dimm',
                type: 'RAM'
            }
        ];
        this.gpu = [
            {
                id: 3,
                name: 'RTX 3080',
                brand: 'Asus',
                photoURL: 'https://www.asus.com/media/global/products/0tsjxhfskwlqwzsg/P_setting_fff_1_90_end_600.png',
                price: 1000,
                stock: 10,
                type: 'GPU'
            },
            {
                id: 4,
                name: 'RX 5500 XT',
                brand: 'Galax',
                photoURL: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//104/MTA-5369945/galax_galax_geforce_gtx_1650_4gb_ddr5_-1-click_oc-_-_dual_fan_-_garansi_2_th_full02_pn54l3a3.jpg',
                price: 100,
                stock: 10,
                type: 'GPU'
            }
        ];
        this.cpu = [
            {
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
            },
            {
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
            }
        ];
        this.motherboard = [
            {
                id: 7,
                name: 'B550-M Mortar',
                brand: 'MSI',
                photoURL: 'https://images.anandtech.com/doci/15850/MSI%20MAG%20B550%20Mortar%20Wifi%20Motherboard.jpg',
                price: 200,
                stock: 3,
                type: 'Motherboard',
                chipset: 'b550',
                forProc: 'AMD'
            },
            {
                id: 8,
                name: 'Z310',
                brand: 'ASUS',
                photoURL: 'https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-038-V01.jpg',
                price: 200,
                stock: 3,
                type: 'Motherboard',
                chipset: 'Z310',
                forProc: 'Intel'
            }
        ];
    }
    getAllItem() {
        this.allItem.length = 0;
        this.ram.forEach(element => {
            this.allItem.push(element);
        });
        this.gpu.forEach(element => {
            this.allItem.push(element);
        });
        this.cpu.forEach(element => {
            this.allItem.push(element);
        });
        this.motherboard.forEach(element => {
            this.allItem.push(element);
        });
        return [...this.allItem];
    }
    getItem(itemId) {
        return Object.assign({}, this.allItem.find(item => {
            return item.id === itemId;
        }));
    }
    deleteItem(itemId) {
        this.ram = this.ram.filter(item => {
            return item.id !== itemId;
        });
        this.gpu = this.gpu.filter(item => {
            return item.id !== itemId;
        });
        this.cpu = this.cpu.filter(item => {
            return item.id !== itemId;
        });
        this.motherboard = this.motherboard.filter(item => {
            return item.id !== itemId;
        });
    }
    editGPU(itemID, GPUName, GPUPhoto, GPUModel, GPUPrice, GPUStock) {
        this.gpu.find(e => {
            if (e.id === itemID) {
                e.name = GPUModel;
                e.brand = GPUName;
                e.price = GPUPrice;
                e.photoURL = GPUPhoto;
                e.stock = GPUStock;
            }
        });
    }
    addGPU(GPUName, GPUPhoto, GPUModel, GPUPrice, GPUStock) {
        const newData = {
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
    editCPU(itemID, CPUName, CPUPhoto, CPUModel, CPUPrice, CPUStock, CPUBaseclock, CPUBoostclock, CPUCore, CPUThread) {
        this.cpu.find(e => {
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
    addCPU(CPUName, CPUPhoto, CPUModel, CPUPrice, CPUStock, CPUBaseclock, CPUBoostclock, CPUCore, CPUThread) {
        const newData = {
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
    editRAM(itemID, RAMName, RAMPhoto, RAMModel, RAMPrice, RAMStock, RAMSpeed, RAMSize) {
        this.ram.find(e => {
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
    addRAM(RAMName, RAMPhoto, RAMModel, RAMPrice, RAMStock, RAMSpeed, RAMSize) {
        const newData = {
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
    editMotherboard(itemID, MBName, MBPhoto, MBModel, MBPrice, MBStock, MBChipset, MBForProc) {
        this.motherboard.find(e => {
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
    addMotherboard(MBName, MBPhoto, MBModel, MBPrice, MBStock, MBChipset, MBForProc) {
        const newData = {
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
};
ElectoService.ctorParameters = () => [];
ElectoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ElectoService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map