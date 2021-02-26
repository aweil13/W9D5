/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\r\n\r\nclass Clock {\r\n    constructor() {\r\n      // 1. Create a Date object.\r\n      const currentTime = new Date();\r\n  \r\n      // 2. Store the hour, minute, and second.\r\n      this.hours = currentTime.getHours();\r\n      this.minutes = currentTime.getMinutes();\r\n      this.seconds = currentTime.getSeconds();\r\n  \r\n      // 3. Call printTime.\r\n      Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(this.printTime(), clockElement);\r\n  \r\n      // 4. Schedule the tick at 1 second intervals.\r\n      setInterval(this._tick.bind(this), 1000);\r\n    }\r\n  \r\n    printTime() {\r\n      // Format the time in HH:MM:SS\r\n      const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\r\n        return timeString;\r\n      // Use console.log to print it.\r\n    //   console.log(timeString);\r\n    }\r\n  \r\n    _tick() {\r\n      // 1. Increment the time by one second.\r\n      this._incrementSeconds();\r\n  \r\n      // 2. Call printTime.\r\n      Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(this.printTime(), clockElement);\r\n    }\r\n  \r\n    _incrementSeconds() {\r\n      // 1. Increment the time by one second.\r\n      this.seconds += 1;\r\n      if (this.seconds === 60) {\r\n        this.seconds = 0;\r\n        this._incrementMinutes();\r\n      }\r\n    }\r\n  \r\n    _incrementMinutes() {\r\n      this.minutes += 1;\r\n      if (this.minutes === 60) {\r\n        this.minutes = 0;\r\n        this._incrementHours();\r\n      }\r\n    }\r\n  \r\n    _incrementHours() {\r\n      this.hours = (this.hours + 1) % 24;\r\n    }\r\n  }\r\n  \r\n  const clockElement = document.getElementById(\"clock\");\r\n  const clock = new Clock();\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nconst dogLinkCreator = () => {\n  const dogLinks = [];\n\n  for (const [key, value] of Object.entries(dogs)) {\n    const a = document.createElement(\"a\");\n    a.innerHTML = key;\n    a.href = value;\n    const li = document.createElement(\"li\");\n    li.className = \"dog-link\";\n    li.appendChild(a);\n    dogLinks.push(li);\n  }\n\n  return dogLinks;\n}\n\n const attachDogLinks = () => {\n  const dogLinks = dogLinkCreator();\n  dogLinks.forEach( el => {\n    document.getElementsByClassName(\"drop-down-dog-list\")[0].appendChild(el);\n  });\n}\n\nconst handleEnter = e => {\n  // const dogLinks = Array.from(document.getElementsByClassName('dog-links'));\n  // dogLinks.forEach(el => {el.classList.add(\"show\")});\n  const ul = document.querySelector('.drop-down-dog-list');\n  ul.classList.add(\"show\");\n}\n\nconst handleLeave = e => {\n  // const dogLinks = Array.from(document.getElementsByClassName('dog-links'));\n  // dogLinks.forEach(el => {el.classList.remove(\"show\")});\n  const ul = document.querySelector('.drop-down-dog-list');\n  ul.classList.remove(\"show\");\n}\n\nattachDogLinks();\nconst n = document.querySelector(\".drop-down-dog-nav\");\nn.addEventListener('mouseenter', handleEnter);\nn.addEventListener('mouseleave', handleLeave);\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide_scroll */ \"./src/slide_scroll.js\");\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_slide_scroll__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/slide_scroll.js":
/*!*****************************!*\
  !*** ./src/slide_scroll.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function debounce(func, wait = 20, immediate = true) {\n  let timeout;\n\n  // This is the function that is actually executed when\n  // the DOM event is triggered.\n  return function executedFunction() {\n    // Store the context of this and any\n    // parameters passed to executedFunction\n    const context = this;\n    const args = arguments;\n\n    // The function to be called after debounce time has elapsed\n    const later = function () {\n      // null timeout to indicate the debounce ended\n      timeout = null;\n\n      // Call function now if you did not in the beginning\n      if (!immediate) func.apply(context, args);\n    };\n\n    // Determine if you should call the function\n    // on the leading or trail end\n    const callNow = immediate && !timeout;\n\n    // This will reset the waiting every function execution.\n    clearTimeout(timeout);\n\n    // Restart the debounce waiting period - returns true\n    timeout = setTimeout(later, wait);\n\n    // Call immediately if you're doing a leading end execution\n    if (callNow) func.apply(context, args);\n  };\n}\n\nconst allSlides = document.querySelectorAll('.slide');\n\nconst slideIn = e => {\n  Array.from(allSlides).forEach( sliderImg => {\n    const windowBottom = window.scrollY + window.innerHeight;\n    const windowTop = window.scrollY;\n    const imageMiddle = sliderImg.height / 2 + sliderImg.offsetTop;\n    const imageBottom = sliderImg.height + sliderImg.offsetTop;\n    \n    console.log(`windowTop: ${windowTop}, image: ${imageBottom}`);\n    if (windowBottom >= imageMiddle && windowTop < imageBottom) {\n      console.log(\"slide in\");\n      sliderImg.classList.add('active');\n    } else {\n      console.log(\"slide out\");\n      sliderImg.classList.remove('active');\n    }\n  })\n}\n\nwindow.addEventListener('scroll', debounce(slideIn));\n\n//# sourceURL=webpack:///./src/slide_scroll.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const todos = JSON.parse(localStorage.getItem('todos')) || [];\n\n\nconst ulTodos = document.querySelector('.todos');\nconst formTodos = document.querySelector('.add-todo-form');\n\nconst addTodos = (e) => {\n    e.preventDefault();\n    const inputTodo = document.querySelector('input[name=\"add-todo\"]');\n    const inputVal = inputTodo.value;\n    inputTodo.value = \"\";\n\n    const todo = {\n        inputVal,\n        done: false\n    }\n\n    todos.push(todo)\n    populateList(todos);\n    localStorage.setItem('todos', JSON.stringify(todos));\n}\n\nconst populateList = (arr) => {\n    arr.forEach((ele, i) => {\n        const label = document.createElement('label');\n        label.textContent = ele.inputVal;\n        const input = document.createElement('input');\n        input.setAttribute(\"type\", \"checkbox\");\n        input.setAttribute(\"data-idx\", `${i}` )\n        if (ele.done) {\n            input.checked = true;\n        }\n        label.appendChild(input);\n        const li = document.createElement(\"li\");\n        li.appendChild(label);\n        document.querySelector(\".todos\").appendChild(li);\n    });\n} \n\nconst toggleCheck = (e) => {\n    const element = e.target;\n    const index = element.dataset.idx;\n    console.log(index)\n    todos[index].done = !todos[index].done;\n    localStorage.setItem('todos', JSON.stringify(todos));\n    // populateList(todos);\n}\n\n\nformTodos.addEventListener('submit', addTodos);\nulTodos.addEventListener('click', toggleCheck);\npopulateList(todos);\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    if (htmlElement.children) {\n        Array.from(htmlElement.children).forEach(el => {htmlElement.removeChild(el);})\n    }\n    const newP = document.createElement(\"p\");\n    newP.textContent = string;\n    htmlElement.appendChild(newP);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });