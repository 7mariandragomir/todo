/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n\n\ntask = new _modules_task__WEBPACK_IMPORTED_MODULE_0__.Task; \n\nconsole.log(task.completed);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBc0M7O0FBRXRDLFdBQVcsK0NBQUk7O0FBRWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi9tb2R1bGVzL3Rhc2snO1xuXG50YXNrID0gbmV3IFRhc2s7IFxuXG5jb25zb2xlLmxvZyh0YXNrLmNvbXBsZXRlZCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   changeCompleted: () => (/* binding */ changeCompleted),\n/* harmony export */   changeDescription: () => (/* binding */ changeDescription),\n/* harmony export */   changeDueDate: () => (/* binding */ changeDueDate),\n/* harmony export */   changeName: () => (/* binding */ changeName),\n/* harmony export */   changePriority: () => (/* binding */ changePriority)\n/* harmony export */ });\n\n\nclass Task {\n    constructor(name, description, dueDate, priority) {\n        this.name = name;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.id = Date.now();\n        this.completed = false;\n    }\n};\n\nfunction changeName(task, newName) {\n    task.name = newName;\n};\n\nfunction changeDescription (task, newDesc) {\n    task.description = newDesc;\n};\n\nfunction changeDueDate (task, newDueDate) {\n    task.dueDate = newDueDate;\n};\n\nfunction changePriority (task, newPriority) {\n    task.priority = newPriority;\n};\n\nfunction changeCompleted(task) {\n    (task[completed] === true) ? task.completed = false : task.completed = true;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4Rjs7QUFFOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3Rhc2suanM/N2M2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBUYXNrLCBjaGFuZ2VEZXNjcmlwdGlvbiwgY2hhbmdlRHVlRGF0ZSwgY2hhbmdlTmFtZSwgY2hhbmdlUHJpb3JpdHksIGNoYW5nZUNvbXBsZXRlZH07XG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gY2hhbmdlTmFtZSh0YXNrLCBuZXdOYW1lKSB7XG4gICAgdGFzay5uYW1lID0gbmV3TmFtZTtcbn07XG5cbmZ1bmN0aW9uIGNoYW5nZURlc2NyaXB0aW9uICh0YXNrLCBuZXdEZXNjKSB7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7XG59O1xuXG5mdW5jdGlvbiBjaGFuZ2VEdWVEYXRlICh0YXNrLCBuZXdEdWVEYXRlKSB7XG4gICAgdGFzay5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbn07XG5cbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5ICh0YXNrLCBuZXdQcmlvcml0eSkge1xuICAgIHRhc2sucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbn07XG5cbmZ1bmN0aW9uIGNoYW5nZUNvbXBsZXRlZCh0YXNrKSB7XG4gICAgKHRhc2tbY29tcGxldGVkXSA9PT0gdHJ1ZSkgPyB0YXNrLmNvbXBsZXRlZCA9IGZhbHNlIDogdGFzay5jb21wbGV0ZWQgPSB0cnVlO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/task.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;