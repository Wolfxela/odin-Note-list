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

/***/ "./src/domhandler.js":
/*!***************************!*\
  !*** ./src/domhandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domProjectHandler: () => (/* binding */ domProjectHandler),\n/* harmony export */   domTaskHandler: () => (/* binding */ domTaskHandler)\n/* harmony export */ });\n/* harmony import */ var _generalFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generalFunctions */ \"./src/generalFunctions.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nconst domProjectHandler = (function(){\n\n    \n    let Projects = [];\n    const page = document.querySelector('.content')\n    const projectHolder = page.querySelector(\".projectHolder\")\n    const mainProjectHolder = page.querySelector('.mainProjectHolder')\n    const projectAddBtn = page.querySelector(\".addProjectBtn\")\n\n    const deleteProject = function(ProjectId)\n    {\n        Projects.splice(ProjectId,id);\n        displayProjects(Projects)\n\n    }\n\n    const addProject = function(Project)\n    {\n        Projects.push(Project)\n        displayProjects(Projects)\n    }\n\n    const displayProjects = function()\n    {\n        let ProjectDiv;\n        clearDom(projectHolder,\".Project\")\n        clearDom(mainProjectHolder,\".Project\")\n        for(let i = 0; i<Projects.length;i++)\n        {\n            if(i < 3)\n            {\n                ProjectDiv =  _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','Project',Projects[i].getName(),mainProjectHolder);\n                ProjectDiv.classList.add(\"projectView\");\n          \n            }\n            else\n            {\n                ProjectDiv =  _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','Project',Projects[i].getName(),projectHolder);\n            }\n            ProjectDiv.addEventListener(\"click\",function()\n            {\n                _index__WEBPACK_IMPORTED_MODULE_1__.programData.setProject(Projects[i])\n                domTaskHandler.displayTasks()        \n            })\n        }\n        _index__WEBPACK_IMPORTED_MODULE_1__.programData.setProject(Projects[0])\n        projectHolder.appendChild(projectAddBtn)\n    }\n    \n\n    return{deleteProject,addProject}\n\n\n})();\n\n\nconst domTaskHandler = (function()\n{\n    const taskDisplay = document.querySelector('.tasks')\n\n    const displayTasks = function()\n    {\n        clearDom(taskDisplay,'.task')\n\n        const tasks = _index__WEBPACK_IMPORTED_MODULE_1__.programData.getCurrentProject().getTasks()\n\n        for(let i = 0; i< tasks.length;i++)\n        {\n           taskMaker(taskDisplay,tasks[i])\n           \n        }\n        taskSorter(taskDisplay)\n    };\n    \n    return{displayTasks}\n})();\n\nconst taskMaker = function(taskDisplay,tasks)\n{\n           const taskDiv = _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','task','',taskDisplay)\n           _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div',tasks.getTaskPriority()+'Priority','',taskDiv)\n           const taskContentDiv = _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','taskContent','',taskDiv)\n           const checkMark = _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','checkMark','',taskContentDiv)\n           _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','taskTitle',tasks.getTaskName(),taskContentDiv)\n           _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','taskTime',tasks.getTaskDate(),taskContentDiv)\n           taskDisplay.appendChild(taskDiv)\n           checkMark.addEventListener('click',function()\n           {\n\n            _index__WEBPACK_IMPORTED_MODULE_1__.taskHandler.deleteTask(Array.from(taskDisplay.children).indexOf(taskDiv),_index__WEBPACK_IMPORTED_MODULE_1__.programData.getCurrentProject().getTasks())\n            taskDisplay.removeChild(taskDiv)\n\n\n           })\n}\nconst taskSorter = function(taskArray)\n{\n       \n        const highPriority = taskArray.querySelectorAll('.highPriority')\n        for(let i = 0; i<highPriority.length;i++)\n        { \n            console.log(\"hawo\")\n            taskArray.appendChild(highPriority[i].parentElement)\n        }\n        const mediumPriority = taskArray.querySelectorAll('.mediumPriority')\n        for(let i = 0; i<mediumPriority.length;i++)\n        {\n            taskArray.appendChild(mediumPriority[i].parentElement)\n        }\n        const lowPriority = taskArray.querySelectorAll('.lowPriority')\n        for(let i = 0; i<lowPriority.length;i++)\n        {\n            taskArray.appendChild(lowPriority[i].parentElement)\n        }\n}\n\nconst clearDom = function(element,inputClass)\n{\n       const elementArray = element.querySelectorAll(inputClass)\n       for(let i = 0; i<elementArray.length;i++)\n       {\n        element.removeChild(elementArray[i])\n       }\n}\n\n\n\n\n//# sourceURL=webpack://odin-notepad/./src/domhandler.js?");

/***/ }),

/***/ "./src/generalFunctions.js":
/*!*********************************!*\
  !*** ./src/generalFunctions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generalFuncModule: () => (/* binding */ generalFuncModule)\n/* harmony export */ });\nconst generalFuncModule = (function()\n{\n    const bodyElem = document.body;\n    const doc = document;\n\n\n\n    const insertElement = function(elementType,elementClass,elementContent,elementParrent,elementImgSrc)\n    {\n       let element = doc.createElement(elementType);\n        element.className = elementClass;\n        element.textContent = elementContent\n        if(elementType === \"img\")\n        {\n            element.src = elementImgSrc;\n        }\n        elementParrent.appendChild(element)\n        return element\n        \n    }\n    return{insertElement}\n})();\n\n\n\n//# sourceURL=webpack://odin-notepad/./src/generalFunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   programData: () => (/* binding */ programData),\n/* harmony export */   taskHandler: () => (/* binding */ taskHandler)\n/* harmony export */ });\n\nconst taskHandler = (function()\n{\n    const setTask = (task,taskArray)=>{taskArray.push(task)}\n    const deleteTask = (taskSpot,taskArray)=>{taskArray.splice(taskSpot,1)}\n    return{setTask,deleteTask}\n})();\n\n\nconst programData = (function()\n{\n    let currentProject;\n    const setProject = function(project){currentProject = project}\n    const getCurrentProject = function(){return currentProject}\n\n    return{setProject,getCurrentProject}\n})();\n\n\n//# sourceURL=webpack://odin-notepad/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/domhandler.js");
/******/ 	
/******/ })()
;