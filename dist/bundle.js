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

/***/ "./deck-layers.js":
/*!************************!*\
  !*** ./deck-layers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TileLayer\": () => (/* binding */ TileLayer),\n/* harmony export */   \"BitmapLayer\": () => (/* binding */ BitmapLayer)\n/* harmony export */ });\n// Assume that deck is in the global scope\r\nconst _global = typeof window === 'undefined' ? __webpack_require__.g : window;\r\nconst deck = _global.deck;\r\n\r\nif (deck === undefined) {\r\n  throw new Error('deck.gl is not in global scope');\r\n}\r\n\r\nconst {TileLayer, BitmapLayer} = deck;\r\n\r\n\r\n\n\n//# sourceURL=webpack://pydeck-my-tile-layer/./deck-layers.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _my_tile_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-tile-layer */ \"./my-tile-layer.js\");\n/* global window, global */\r\n\r\n\r\nconst _global = typeof window === 'undefined' ? __webpack_require__.g : window;\r\n_global.MyTileLayerLibrary = {MyTileLayer: _my_tile_layer__WEBPACK_IMPORTED_MODULE_0__.MyTileLayer};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_my_tile_layer__WEBPACK_IMPORTED_MODULE_0__.MyTileLayer);\r\n\r\n\n\n//# sourceURL=webpack://pydeck-my-tile-layer/./index.js?");

/***/ }),

/***/ "./my-tile-layer.js":
/*!**************************!*\
  !*** ./my-tile-layer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MyTileLayer\": () => (/* binding */ MyTileLayer)\n/* harmony export */ });\n/* harmony import */ var _deck_layers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deck-layers */ \"./deck-layers.js\");\n\r\n\r\n\r\nclass MyTileLayer extends _deck_layers__WEBPACK_IMPORTED_MODULE_0__.TileLayer {\r\n  renderSubLayers(props){\r\n      const {\r\n        bbox: {left, bottom, right, top}\r\n      } = props.tile;\r\n\r\n      return new _deck_layers__WEBPACK_IMPORTED_MODULE_0__.BitmapLayer(props, {\r\n        data: null,\r\n        image: props.data,\r\n        bounds: [left, bottom, right, top]\r\n      });\r\n    }\r\n}\r\n\r\nMyTileLayer.layerName = \"MyTileLayer\";\r\n\r\n\r\n\n\n//# sourceURL=webpack://pydeck-my-tile-layer/./my-tile-layer.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;