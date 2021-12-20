/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/curserAgent.ts":
/*!****************************!*\
  !*** ./src/curserAgent.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar curserAgent = /** @class */ (function () {\r\n    function curserAgent() {\r\n        this.createSingleCurser = this.getSingleton(this.createBlurCurser);\r\n    }\r\n    curserAgent.prototype.createBlurCurser = function () {\r\n        var curserDom = window.document.createElement(\"div\");\r\n        curserDom.className = \"curser-dom\";\r\n        var curserWrapper = document.createElement(\"div\");\r\n        curserWrapper.className = \"curser-wrapper\";\r\n        curserWrapper.appendChild(curserDom);\r\n        return curserWrapper;\r\n    };\r\n    curserAgent.prototype.getSingleton = function (fn) {\r\n        var result;\r\n        return function () {\r\n            return result || (result = fn.apply(this, arguments));\r\n        };\r\n    };\r\n    curserAgent.prototype.update = function (e) {\r\n        console.log(e);\r\n        this.curser.clientX = e.clientX;\r\n        this.curser.clientY = e.clientY;\r\n    };\r\n    curserAgent.prototype.init = function () {\r\n        this.curser = this.createSingleCurser();\r\n        document.body.appendChild(this.curser);\r\n        window.addEventListener(\"mouseMove\", this.update);\r\n    };\r\n    curserAgent.prototype.destroy = function () {\r\n        window.removeEventListener(\"mouseMove\", this.update);\r\n    };\r\n    return curserAgent;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (curserAgent);\r\n\n\n//# sourceURL=webpack://blur-curser/./src/curserAgent.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _curserAgent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curserAgent */ \"./src/curserAgent.ts\");\n\r\nvar blurCurser = new _curserAgent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nblurCurser.init();\r\n\n\n//# sourceURL=webpack://blur-curser/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;