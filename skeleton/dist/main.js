/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Clock\": () => (/* binding */ Clock)\n/* harmony export */ });\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\r\n\r\nclass Clock {\r\n    constructor() {\r\n      // 1. Create a Date object.\r\n      const currentTime = new Date();\r\n  \r\n      // 2. Store the hour, minute, and second.\r\n      this.hours = currentTime.getHours();\r\n      this.minutes = currentTime.getMinutes();\r\n      this.seconds = currentTime.getSeconds();\r\n  \r\n      // 3. Call printTime.\r\n      (0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(this.printTime(), clockElement);\r\n  \r\n      // 4. Schedule the tick at 1 second intervals.\r\n      setInterval(this._tick.bind(this), 1000);\r\n    }\r\n  \r\n    printTime() {\r\n      // Format the time in HH:MM:SS\r\n      const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\r\n        return timeString;\r\n      // Use console.log to print it.\r\n    //   console.log(timeString);\r\n    }\r\n  \r\n    _tick() {\r\n      // 1. Increment the time by one second.\r\n      this._incrementSeconds();\r\n  \r\n      // 2. Call printTime.\r\n      (0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(this.printTime(), clockElement);\r\n    }\r\n  \r\n    _incrementSeconds() {\r\n      // 1. Increment the time by one second.\r\n      this.seconds += 1;\r\n      if (this.seconds === 60) {\r\n        this.seconds = 0;\r\n        this._incrementMinutes();\r\n      }\r\n    }\r\n  \r\n    _incrementMinutes() {\r\n      this.minutes += 1;\r\n      if (this.minutes === 60) {\r\n        this.minutes = 0;\r\n        this._incrementHours();\r\n      }\r\n    }\r\n  \r\n    _incrementHours() {\r\n      this.hours = (this.hours + 1) % 24;\r\n    }\r\n  }\r\n  \r\n  const clockElement = document.getElementById(\"clock\");\r\n  const clock = new Clock();\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/***/ (() => {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nconst dogLinkCreator = () => {\n  const dogLinks = [];\n\n  for (const [key, value] of Object.entries(dogs)) {\n    const a = document.createElement(\"a\");\n    a.innerHTML = key;\n    a.href = value;\n    const li = document.createElement(\"li\");\n    li.className = \"dog-link\";\n    li.appendChild(a);\n    dogLinks.push(li);\n  }\n\n  return dogLinks;\n}\n\n const attachDogLinks = () => {\n  const dogLinks = dogLinkCreator();\n  dogLinks.forEach( el => {\n    document.getElementsByClassName(\"drop-down-dog-list\")[0].appendChild(el);\n  });\n}\n\nconst handleEnter = e => {\n  // const dogLinks = Array.from(document.getElementsByClassName('dog-links'));\n  // dogLinks.forEach(el => {el.classList.add(\"show\")});\n  const ul = document.querySelector('.drop-down-dog-list');\n  ul.classList.add(\"show\");\n}\n\nconst handleLeave = e => {\n  // const dogLinks = Array.from(document.getElementsByClassName('dog-links'));\n  // dogLinks.forEach(el => {el.classList.remove(\"show\")});\n  const ul = document.querySelector('.drop-down-dog-list');\n  ul.classList.remove(\"show\");\n}\n\nattachDogLinks();\nconst n = document.querySelector(\".drop-down-dog-nav\");\nn.addEventListener('mouseenter', handleEnter);\nn.addEventListener('mouseleave', handleLeave);\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/***/ (() => {

eval("const todos = JSON.parse(localStorage.getItem('todos')) || [];\n\n\nconst ulTodos = document.querySelector('.todos');\nconst formTodos = document.querySelector('.add-todo-form');\n\nconst addTodos = (e) => {\n    e.preventDefault();\n    const inputTodo = document.querySelector('input[name=\"add-todo\"]');\n    const inputVal = inputTodo.value;\n    inputTodo.value = \"\";\n\n    const todo = {\n        inputVal,\n        done: false\n    }\n\n    todos.push(todo)\n    populateList(todos);\n    localStorage.setItem('todos', JSON.stringify(todos));\n}\n\nconst populateList = (arr) => {\n    arr.forEach((ele, i) => {\n        const label = document.createElement('label');\n        label.textContent = ele.inputVal;\n        const input = document.createElement('input');\n        input.setAttribute(\"type\", \"checkbox\");\n        input.setAttribute(\"data-idx\", `${i}` )\n        if (ele.done) {\n            input.checked = true;\n        }\n        label.appendChild(input);\n        const li = document.createElement(\"li\");\n        li.appendChild(label);\n        document.querySelector(\".todos\").appendChild(li);\n    });\n} \n\nconst toggleCheck = (e) => {\n    const element = e.target;\n    const index = element.dataset.idx;\n    console.log(index)\n    todos[index].done = !todos[index].done;\n    localStorage.setItem('todos', JSON.stringify(todos));\n    // populateList(todos);\n}\n\n\nformTodos.addEventListener('submit', addTodos);\nulTodos.addEventListener('click', toggleCheck);\npopulateList(todos);\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => (/* binding */ htmlGenerator)\n/* harmony export */ });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    if (htmlElement.children) {\n        Array.from(htmlElement.children).forEach(el => {htmlElement.removeChild(el);})\n    }\n    const newP = document.createElement(\"p\");\n    newP.textContent = string;\n    htmlElement.appendChild(newP);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;